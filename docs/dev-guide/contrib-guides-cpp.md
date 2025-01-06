# C++

Follow the guidelines below when writing and updating C++ files.

## Automated linting

As mentioned in the overview, where possible, we have automated linting processes, so you need not
remember all the guidelines perfectly. For C++, we currently use the following tools:

* `clang-format` for formatting ([base config][clang-format-config])
* `clang-tidy` for static analysis ([base config][clang-tidy-config])

When the linter disagrees with a guideline, err on the side of following the linter, since:

* we don't want automated runs of the linters to fail, leading to them being ignored due to the
  noise.
* the linter may have a good reason for disagreeing with the guideline.
* the linter's configuration may be more up-to-date than the guideline.

:::{tip}
To learn about how to apply the linters to a new C++ project, [see here][adding-cpp-linting].
:::

When you encounter such a disagreement, if it hasn't been noted below, please open an issue to track
it.

## Guidelines

We adhere to [Google's C++ style guide][google-cpp-style-guide] (as of
[8f97e24][google-styleguide-8f97e24]) with the following exceptions (organized according to the
sections in the Google style guide).

:::{note}
This section is a work in progress and does not yet include all exceptions after the
[Classes][google-cpp-style-guide-classes] section of the Google style guide.
:::

### Header files

#### Self-contained Headers

* Header files should end in `.hpp`.
* Don't use non-header files meant for inclusion, since they can confuse static analysis tools.

#### The #define Guard

The format of the symbol name should be `<NAMESPACE>_<FILENAME-STEM>_<FILENAME-EXTENSION>`.

#### Names and order of includes

* For codebases where the code is not organized into well-defined libraries, it is fine to use UNIX
  directory aliases to include headers.
* For C headers that have C++ counterparts (e.g., `stddef.h` vs `cstddef`), use the C++ counterpart.

### Scoping

#### Namespaces

Single-line nested namespace declarations (e.g. `bar` in `foo`) should use the following format
(unless doing so would affect clarity):

```cpp
namespace foo::bar {
}
```

#### Internal linkage

Only use unnamed namespaces (instead of the `static` qualifier) to give functions and variables
internal linkage.

### Classes

#### Doing work in constructors

We allow (but discourage) the use of exceptions, even in constructors. If creating an object can
fail, you're encouraged to use a factory function that performs the work that can fail, and if
successful, constructs and returns the object.

#### Declaration order

Within each section, order declarations as follows:

1. Types and type aliases (`typedef`, `using`, `enum`, nested structs and classes, and `friend`
   types).
2. Static constants.
3. Static functions:
   * Factory functions.
   * Other functions.
4. Static variables.
5. Constructors.
6. Copy & move constructors and assignment operators.
7. The destructor.
8. Methods (member functions):
   * Overridden methods.
   * Implemented abstract methods.
   * All other methods.
9. Data members.

The order above is to largely to agree with our general
[ordering guidelines](./contrib-guides-general.md#declaration-order).

[adding-cpp-linting]: https://github.com/y-scope/yscope-dev-utils/blob/main/docs/lint-tools-cpp.md
[clang-format-config]: https://github.com/y-scope/yscope-dev-utils/blob/main/lint-configs/.clang-format
[clang-tidy-config]: https://github.com/y-scope/yscope-dev-utils/blob/main/lint-configs/.clang-tidy
[google-cpp-style-guide]: https://google.github.io/styleguide/cppguide.html
[google-cpp-style-guide-classes]: https://google.github.io/styleguide/cppguide.html#Classes
[google-styleguide-8f97e24]: https://github.com/google/styleguide/tree/8f97e24da04753c7a15eda6b02114a01ec3146f5
