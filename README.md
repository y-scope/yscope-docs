# YScope Docs

This repo contains the source for YScope's docs hub at [docs.yscope.com].

# Building

To build the docs site, you need to install:

* [Sphinx] - a documentation generator that turns docs written in plain text
  into a beautifully rendered form (e.g., a website). 
* [MyST] - a plugin to allow writing docs using Markdown rather than
  reStructuredText.
* [sphinx_design] - A Sphinx plugin for responsive web components.


Then run:

```shell
make html
```

The output will be in the `build` folder.

[docs.yscope.com]: https://docs.yscope.com
[MyST]: https://myst-parser.readthedocs.io/en/latest/intro.html
[Sphinx]: https://www.sphinx-doc.org/en/master/usage/installation.html
[sphinx_design]: https://github.com/executablebooks/sphinx-design
