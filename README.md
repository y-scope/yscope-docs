# YScope Docs

This repo contains the source for YScope's docs hub at [docs.yscope.com].

# Building

The best way to build the docs site reproducibly is using a Python virtual
environment.

## Requirements

* GNU Make
* Python3 (if it's not already installed)
* [pip]
* [virtualenv]

## Setup

* Create and enter a Python virtual environment:
  ```shell
  python3 -m venv venv
  source ./venv/bin/activate
  ```
* Install the requirements:
  ```shell
  pip3 install -r requirements.txt
  ```

## Build

* Enter the virtual environment (if you're not already inside):

  ```
  source ./venv/bin/activate
  ```
* Build the site:
  ```shell
  make html
  ```

The output will be in the `build` directory.

# Teardown

To quit the virtual environment, run:

```shell
deactivate
```

[docs.yscope.com]: https://docs.yscope.com
[pip]: https://pip.pypa.io/en/stable/installation/
[virtualenv]: https://packaging.python.org/en/latest/guides/installing-using-pip-and-virtual-environments/#installing-virtualenv
