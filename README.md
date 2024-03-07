# YScope Docs

This repo contains the source for YScope's docs hub at [docs.yscope.com].

# Development

Follow the steps below to build and view the site locally.

## Requirements

* python3
* python3-venv
* [Task]
* [Node.js] 16 or above - [Viewing the output](#viewing-the-output)

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
[Task]: https://taskfile.dev/
[Node.js]: https://nodejs.org/en/download/current
[http-server]: https://www.npmjs.com/package/http-server
