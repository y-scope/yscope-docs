# General guidelines

Follow the guidelines below when writing and updating any source files.

## Naming

### Measurement units

When handling data with measurement units, the unit must always be explicitly stated.
If the unit is not statically available in the type information then it must be added to the name,
preferably as a suffix.

For example, in C++ when storing a measure of kilobytes inside an integer type name the variable
with a `_kb` suffix (e.g. `encoded_size_kb`). Similarly, when measuring milliseconds in an integer
add an `_ms` suffix (e.g. `parsing_time_ms`).

An example when it is not necessary to add the unit to the name is when using `std::chrono` in C++
as the typing (and API) explicitly handles the type.

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
