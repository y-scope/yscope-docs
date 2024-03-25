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
        await fastify.register(routes, {
            publicDir: path.resolve(process.env.PUBLIC_DIR),
            projectsConfigFile: path.resolve(process.env.PROJECTS_CONFIG_FILE),
        });

        const host = process.env.HOST;
        const port = process.env.PORT;
        await fastify.listen({host: host, port: port});
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
