# YScope Docs

This repo contains the source for YScope's docs hub at [docs.yscope.com].

# Development

Follow the steps below to build and view the site locally.

## Requirements

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

You can use [npm] with [http-server] to view the output:

```shell
npx http-server build/html -c-1
```

[docs.yscope.com]: https://docs.yscope.com
[npm]: https://nodejs.org/en/download/current
[http-server]: https://www.npmjs.com/package/http-server
[Task]: https://taskfile.dev/
