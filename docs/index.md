# YScope Docs

Welcome to YScope's documentation site. From here, you can find docs for all our
open-source projects as well as other docs like format specifications, coding 
guidelines, etc. This site is in its infancy, but will fill out over time.
{ref}`Contributions <ref/contributing>` are always welcome!

# Projects

These are all our open-source projects (so far):

````{grid} 2
```{grid-item-card} CLP
:link: https://github.com/y-scope/clp
A tool that can compress logs with higher compression than general-purpose
compressors while allowing search without full decompression.
```

```{grid-item-card} clp-ffi-java
:link: https://github.com/y-scope/clp-ffi-java
A Java library that exposes CLP's message encoding, decoding, and search.
```

```{grid-item-card} log4j1-appenders
:link: https://github.com/y-scope/log4j1-appenders
Useful log appenders for Log4j 1 including features like log compression into
CLP's IR stream format.
```

```{grid-item-card} yscope-log-viewer
:link: https://github.com/y-scope/yscope-log-viewer
A log viewer for logs that use CLP's IR stream format including features like
filtering by log level and viewing large files.
```
````

(ref/contributing)=
# Contributing

To edit existing docs you can click the edit icon in the top right of the page
you want to edit. To create new docs, you can go to the relevant project's repo
and add pages to the `docs` folder. The repo for this documentation hub is
[here][yscope-docs]. 

[CLP]: https://github.com/y-scope/clp
[clp-ffi-java]: https://github.com/y-scope/clp-ffi-java
[log4j1-appenders]: https://github.com/y-scope/log4j1-appenders
[yscope-log-viewer]: https://github.com/y-scope/yscope-log-viewer
[yscope-docs]: https://github.com/y-scope/yscope-docs
