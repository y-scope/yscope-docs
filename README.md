# YScope Docs

This repo contains the source for YScope's docs hub at [docs.yscope.com].

# Development

Follow the steps below to build and view the site locally.

## Requirements

* [Node.js] >= 16 to be able to [view the output](#viewing-the-output)
* python3 >= 3.10
* python3-venv
* [Task]

## Building

* Build the site incrementally:

  ```shell
  task docs:build
  ```

  * The output of the build will be in `build/html`.

* Clean-up the build:

  ```shell
  task clean
  ```

## Viewing the output

```shell
task docs:serve
```

[docs.yscope.com]: https://docs.yscope.com
[Node.js]: https://nodejs.org/en/download/current
[Task]: https://taskfile.dev/
