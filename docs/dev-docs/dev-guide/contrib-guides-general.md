# General guidelines

Follow the guidelines below when writing and updating any source files.

## Naming

### Measurement units

When handling data with measurement units, always state the unit explicitly, either via:

* the data's type information (e.g. `std::chrono::milliseconds` in C++), or
* the data's name, preferably as a suffix (e.g. `encoded_size_kib`).

When stating the unit in the name, use an abbreviation for the unit _only_ when it doesn't affect
clarity. For example, when measuring milliseconds, the suffix `_ms` is ambiguous since it could
imply the units "milli" or "mega"; instead, we should use the suffix `_millisecs` in this case (e.g.
`parsing_time_millisecs`).

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
