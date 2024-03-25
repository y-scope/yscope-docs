# Deploying this site

A deployment of YScope docs includes both the current site and the sites of several other YScope
repos and their release versions, complicating the build and deployment processes. The end goal is
to use a single `node` process to serve each site at a different URL prefix (e.g., CLP at
`/clp/main` and clp-ffi-py at `/clp-ffi-py/main`). We also want the layout on disk to be predictable
so that we can use a simple config file to configure all the sites that need to be served.

One approach would be to build all the sites using Task and then assemble them into a single
deployment. However, since each site (and version) might have different build dependencies, we can't
easily build them without several containers. Instead, we plan to have a GitHub workflow per repo
which builds the site in a container and then publishes it directly to docs.yscope.com at the
expected location.

Until those workflows are ready, we will deploy by building all the sites individually and
assembling them into a single deployment.

## Deployment structure

An example of a deployment's structure on disk and the corresponding URL paths should is as follows:

| Project             | On-disk path                            | URL prefix         |
|---------------------|-----------------------------------------|--------------------|
| yscope-docs         | build/html                              | /                  |
| clp @ main          | build/clp-main/build/docs/html          | /clp/main          |
| clp-ffi-py @ main   | build/clp-ffi-py-main/build/docs/html   | /clp-ffi-py/main   |
| clp-ffi-py @ v0.0.9 | build/clp-ffi-py-v0.0.9/build/docs/html | /clp-ffi-py/v0.0.9 |

This assumes the deployment is in `build`. Essentially, for each project besides yscope-docs, the
build output should be in `build/<project>-<version>/build/docs/html`.

Each project and its versions should be listed in `conf/projects.json` so that the server knows all
the sites it needs to render. The server will combine the config in `projects.json` with the build
directory's path to generate routes similar to the previous table.

## Step-by-step guide

1. Build a clean version of this docs site:

   ```shell
   task clean && task
   ```

2. Download the projects:

   ```shell
   task download-projects
   ```

3. Build the docs for each project and version in `conf/projects.json`:

   ```shell
   cd build/<project>-<version>
   task docs:site
   cd ../
   ```

4. Assemble a release:

   ```shell
   task release-tar
   ```

   The tar will be written to `build/release.tar.gz`.
5. Upload the tar to the deployment server and untar it.
6. Follow the instructions in `release/server/README.md` to start the server.
