# yscope-docs Server

This directory contains a Node.js application that can be used to serve yscope-docs as well as all
projects (and versions) listed in [projects.json](../conf/projects.json).

# Running

## Requirements

A recent version of Node.js

## During development

```shell
task serve
```

This will build any necessary artifacts and start the server at the address listed in `.env`.

## In production

* Edit `.env`:
  * Set `PROJECTS_CONFIG_FILE` to the path of the file containing the projects' config.
  * Set `PUBLIC_DIR` to the directory containing the files to serve.
  * If the paths above are relative, they should be relative to the directory that you start the
    server from.
  * Set `HOST` and `PORT` to the address that the server should bind to.
* Install the dependencies and start the server:
    
  ```shell
  npm install --omit dev
  npm run prod
  ```
