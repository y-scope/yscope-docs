import fastifyCors from "@fastify/cors";

import routes from "./routes.js";

import "dotenv/config.js";
import Fastify from "fastify";
import path from "node:path";
import process from "node:process";


// eslint-disable-next-line new-cap
const fastify = Fastify({
    logger: true,
});

const start = async () => {
    try {
        // Allow CORS for development and public access (GET only)
        await fastify.register(fastifyCors, {
            origin: true,
            methods: ["GET"],
        });

        await fastify.register(routes, {
            publicDir: path.resolve(process.env.PUBLIC_DIR),
            projectsConfigFile: path.resolve(process.env.PROJECTS_CONFIG_FILE),
        });

        const host = process.env.HOST || "0.0.0.0";
        const basePort = parseInt(process.env.PORT) || 3000;
        const maxAttempts = 50;

        let lastErr;
        for (let i = 0; i < maxAttempts; i += 1) {
            const tryPort = basePort + i;
            try {
                await fastify.listen({host, port: tryPort});
                fastify.log.info(`Server listening on ${host}:${tryPort}`);

                return;
            } catch (err) {
                lastErr = err;

                // If port in use, try the next one; otherwise rethrow
                if (err && "EADDRINUSE" === err.code) {
                    fastify.log.warn(`Port ${tryPort} in use, trying ${tryPort + 1}`);
                    continue;
                }
                throw err;
            }
        }

        // if we exhausted attempts, throw the last error
        throw lastErr;
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
