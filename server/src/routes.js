import {fastifyStatic} from "@fastify/static";

import fsPromises from "node:fs/promises";
import path from "node:path";


/**
 * Fastify plugin to register routes for the main docs site and each project docs site.
 * @param {FastifyInstance} fastify
 * @param {object} options
 * @param {string} options.publicDir
 * @param {string} options.projectsConfigFile Config file containing the projects and their
 * versions.
 * @returns {Promise<void>}
 */
const routes = async (fastify, options) => {
    // Add route for main site
    await fastify.register(fastifyStatic, {
        decorateReply: false,
        prefix: "/",
        redirect: true,
        root: path.resolve(options.publicDir, "html"),
    });

    // Load the projects config
    let fileHandle = null;
    let projects = [];
    try {
        fileHandle = await fsPromises.open(options.projectsConfigFile, "r");
        const data = await fileHandle.readFile("utf-8");
        projects = JSON.parse(data);
    } catch (e) {
        fastify.log.error(e);

        return;
    } finally {
        if (null !== fileHandle) {
            fileHandle.close();
        }
    }

    // Add route for each project and version
    for (const project of projects) {
        for (const version of project.versions) {
            await fastify.register(fastifyStatic, {
                decorateReply: false,
                root: path.resolve(
                    options.publicDir,
                    `${project.name}-${version}`,
                    "build",
                    "docs",
                    "html"
                ),
                prefix: `/${project.name}/${version}`,
                redirect: true,
            });
        }
    }
};

export default routes;
