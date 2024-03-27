# YScope Docs

This is the hub for all of YScope's open-source documentation. From here, you can find docs for all
our open-source projects as well as other docs like format specifications, coding guidelines, etc.
[Contributions](#contributing) are welcome!

# Projects

Below are all our open-source projects (so far). Each card links to docs for the specific project
or, if no docs exist yet, it links to the project's repo. 

## Log management

::::{grid} 1 1 2 2
:gutter: 2

:::{grid-item-card}
:link: https://github.com/y-scope/clp
CLP (clp)
^^^
A tool that can compress both text and JSON logs with higher compression than general-purpose
compressors while allowing search without full decompression. CLP can run as a large distributed
system and includes a UI.
:::
::::

## Logging libraries

The libraries below provide real-time compression into CLP's compressed intermediate representation
(IR).

::::{grid} 1 1 2 2
:gutter: 2

:::{grid-item-card}
:link: https://github.com/y-scope/clp-loglib-py
clp-logging (clp-loglib-py)
^^^
A Python `logging` library providing lightweight and real-time compression into CLP's IR format.
:::

:::{grid-item-card}
:link: https://github.com/y-scope/log4j1-appenders
Log4j 1 appenders (log4j1-appenders)
^^^
Useful appenders for Log4j 1 including features like lightweight, real-time compression into CLP's
IR format.
:::

:::{grid-item-card}
:link: https://github.com/y-scope/logback-appenders
Logback appenders (logback-appenders)
^^^
Useful appenders for Logback including features like lightweight, real-time compression into CLP's
IR format.
:::
::::

## Log analytics libraries

The libraries below expose CLP's core, including serializing, deserializing, searching, and
analyzing CLP IR files.

::::{grid} 1 1 2 2
:gutter: 2

:::{grid-item-card}
:link: https://github.com/y-scope/clp-ffi-go
clp-ffi-go
^^^
A Go library exposing an interface to CLP's core. It currently supports CLP's core encoding
and decoding logic as well as serializing, deserializing, searching, and analyzing CLP IR files.
:::

:::{grid-item-card}
:link: https://github.com/y-scope/clp-ffi-java
clp-ffi-java
^^^
A Java library exposing an interface to CLP's core. It currently supports CLP's encoding, decoding,
and query-generation logic as well as serializing CLP IR files.
:::

:::{grid-item-card}
:link: clp-ffi-py/main
clp-ffi-py
^^^
A Python library exposing an interface to CLP's core. It currently supports serializing,
deserializing, searching, and analyzing CLP IR files.
:::
::::

## Log visualization

::::{grid} 1 1 2 2
:gutter: 2

:::{grid-item-card}
:link: https://github.com/y-scope/yscope-log-viewer
YScope Log Viewer (yscope-log-viewer)
^^^
A web interface for viewing logs that use CLP’s IR stream format including features like filtering
by log level and viewing large files.
:::
::::

## Log parsing

::::{grid} 1 1 2 2
:gutter: 2

:::{grid-item-card}
:link: https://github.com/y-scope/log-surgeon
Log Surgeon (log-surgeon)
^^^
A customizable library for parsing logs efficiently and with high performance compared to
general-purpose regular expression engines.
:::
::::

(contributing)=
# Contributing

To edit existing docs, click the "{fas}`pencil` Edit on GitHub" link found in the right sidebar of
the page you want to edit. To create new docs, go to the relevant project's repo and add pages
to the `docs` folder. The repo for this documentation hub is [here][yscope-docs].

:::{toctree}
:hidden:

dev-guide/index
:::

[CLP]: https://github.com/y-scope/clp
[clp-ffi-java]: https://github.com/y-scope/clp-ffi-java
[log4j1-appenders]: https://github.com/y-scope/log4j1-appenders
[yscope-log-viewer]: https://github.com/y-scope/yscope-log-viewer
[yscope-docs]: https://github.com/y-scope/yscope-docs
