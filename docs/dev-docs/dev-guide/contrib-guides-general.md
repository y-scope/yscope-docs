# General guidelines

Follow the guidelines below when writing and updating any source files.

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
