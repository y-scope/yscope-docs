# YScope Docs

This repo contains the source for YScope's docs hub at [docs.yscope.com].

# Development

Follow the steps below to build and view the site locally.

## Requirements

* [Node.js] >= 16 to be able to [view the output](#viewing-the-output)
* python3
* python3-venv
* [Task]

## Building

* Build the site incrementally:

  ```shell
  task
  ```

  * The output of the build will be in `build/html`.

* Clean-up the build:

  ```shell
  task clean
  ```

## Viewing the output

  Run task `serve` to install [http-server] and view the output:

  ```shell
  task serve
  ```

[docs.yscope.com]: https://docs.yscope.com
[http-server]: https://www.npmjs.com/package/http-server
[Node.js]: https://nodejs.org/en/download/current
[Task]: https://taskfile.dev/
