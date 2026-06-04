# Project docs

Below are links to our open-source projects that have dedicated documentation (so far).

::::{grid} 1 1 2 2
:gutter: 2

:::{grid-item-card}
:link: /clp/main
CLP (clp)
^^^
A tool that can compress both text and JSON logs with higher compression than general-purpose
compressors while allowing search without full decompression. CLP can run as a large distributed
system and includes a UI.
:::

:::{grid-item-card}
:link: /clp-ffi-py/main
clp-ffi-py
^^^
A Python library exposing an interface to CLP's core. It currently supports serializing,
deserializing, searching, and analyzing CLP IR files.
:::

:::{grid-item-card}
:link: /yscope-log-viewer/main
YScope Log Viewer (yscope-log-viewer)
^^^
A web interface for viewing logs that use CLP’s IR stream format including features like filtering
by log level and viewing large files.
:::

:::{grid-item-card}
:link: /log-surgeon/main
Log Surgeon (log-surgeon)
^^^
A customizable library for parsing logs efficiently and with high performance compared to
general-purpose regular expression engines.
:::
::::
