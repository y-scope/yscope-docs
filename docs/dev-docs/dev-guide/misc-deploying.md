# Deploying this site

A deployment of YScope docs includes both the current site and the sites of several other YScope
repos and their release versions, complicating the build and deployment processes. Ideally, we want:

* to use a single webserver to serve each site at a different URL prefix (e.g., CLP at `/clp/main`
  and clp-ffi-py at `/clp-ffi-py/main`).
* the layout on disk to be predictable so that we can use a simple config file to configure all the
  sites that need to be served.

Each site (one for each unique project and version of that project) may have different build
dependencies, requiring unique building environments. This prevents us from building and assembling
all the sites together using a single Task invocation. Instead, we build all sites individually
before assembling them into a single deployment.

In the future, for each repo, we plan to have a GitHub workflow that builds the site in a container
and then publishes it directly to docs.yscope.com at the expected location.

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
   ```

   :::{note}
   Each project may have dependencies (e.g., a C++/Rust compiler) required to build the docs. See
   the project's docs for details.
   :::

4. Assemble a release:

   ```shell
   task docs:release-tar
   ```

   The tar will be written to `build/yscope-docs-release.tar.gz`.
5. Upload the tar to the deployment server and untar it.
6. Move the extracted content to wherever the webserver expects it to be.
