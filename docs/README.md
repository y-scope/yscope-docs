# Overview

* This is a static site for https://docs.yscope.com
* We use `npm` to develop/package the static site.

# Contributing

## Requirements

Node.js via [prebuilt installers][nodejs-prebuilt-installer] / [nvm][nvm] /
[nvm-windows][nvm-windows].

## Setup

Install the project's dependencies:

```shell
npm install
```

## Running in development

You can build and serve the viewer in debug mode using:

```shell
npm run dev
```

The website should then be available at the URL by the command.

## Building a distribution

To create a build, run:

```shell
npm run build
```

The build should then be available in the `out` directory.

You can preview the build with [serve]:

```shell
npx serve out
```

[nodejs-prebuilt-installer]: https://nodejs.org/en/download/prebuilt-installer
[nvm]: https://github.com/nvm-sh/nvm
[nvm-windows]: https://github.com/coreybutler/nvm-windows
[serve]: https://www.npmjs.com/package/serve