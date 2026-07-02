# General guidelines

Follow the guidelines below when writing and updating any source files.

## Naming

### Measurement units

When handling data with measurement units, the unit must always be explicitly stated.
If the unit is not statically available in the type information, then it must be added to the name,
preferably as a suffix.

For example, in C++ when storing a measure of kibibytes inside an integer type, name the variable
with a `_kib` suffix (e.g. `encoded_size_kib`).

It is not a requirement to use abbreviations, as the goal is clarity. For example, when measuring
milliseconds adding `_ms` is actually ambiguous as to whether it's milli or mega, so we use
`_millisecs` (e.g. `parsing_time_millisecs`).

Using `std::chrono` in C++ is an example of when the type (and API) explicitly handles the unit and
it is unnecessary to add a suffix.

## Code organization

(declaration-order)=

### Declaration order

Organize declarations in order of:

* Visibility, from public to private; then
* Lifetime, from static to dynamic; then
* Alphabetically (unless a different ordering is required for functionality or enhanced clarity).

This is so readers who read from top to bottom should understand the high-level interfaces
(public/static) before the low-level implementation details (private/dynamic). Alphabetical ordering
is to make symbols easy to find.
