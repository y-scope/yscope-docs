# Deploying this site

A deployment of YScope docs includes both the current site and the sites of several other YScope
repos and their release versions, complicating the build and deployment processes. The end goal is
to use a single webserver to serve each site at a different URL prefix (e.g., CLP at `/clp/main` and
clp-ffi-py at `/clp-ffi-py/main`). We also want the layout on disk to be predictable so that we can
use a simple config file to configure all the sites that need to be served.

One approach would be to build all the sites using Task and then assemble them into a single
deployment. However, since each site (and version) might have different build dependencies, we can't
easily build them without several containers. Instead, we plan to have a GitHub workflow per repo
which builds the site in a container and then publishes it directly to docs.yscope.com at the
expected location.

Until those workflows are ready, we will deploy by building all the sites individually and
assembling them into a single deployment.

## Adding new projects

Each project and its versions should be listed in `conf/projects.json` so that
`scripts/download-projects.py` can download the repos and check out the correct versions.

## Step-by-step guide

1. Build a clean version of this docs site:

   ```shell
   task clean && task docs:build
   ```

2. Download the projects:

   ```shell
   task docs:download-projects
   ```

3. Build the docs for each project and version in `conf/projects.json`:

   ```shell
   cd build/project-docs/<project>/<version>
   task docs:site
   cd -
   ```

4. Assemble a release:

   ```shell
   task docs:release-tar
   ```

   The tar will be written to `build/yscope-docs-release.tar.gz`.
5. Upload the tar to the deployment server and untar it.
6. Move the extracted content to wherever the webserver expects it to be.
