import Fastify from "fastify";
import path from "node:path";
import process from "node:process";

import fastifyCors from "@fastify/cors";
import "dotenv/config.js";

import routes from "./routes.js";

// eslint-disable-next-line new-cap
const fastify = Fastify({
    logger: true,
});

const start = async () => {
    try {
        // Allow CORs for http://localhost:<port>
        await fastify.register(fastifyCors, {
            origin: /^http:\/\/localhost:\d+$/,
            methods: ["GET"],
        });

        await fastify.register(routes, {
            publicDir: path.resolve(process.env.PUBLIC_DIR),
            projectsConfigFile: path.resolve(process.env.PROJECTS_CONFIG_FILE),
        });

        const host = process.env.HOST;
        const port = parseInt(process.env.PORT);
        await fastify.listen({host: host, port: port});
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
