# Taskfiles

Follow the guidelines below when writing and updating [Taskfiles]. Note that neither the guidelines
nor examples are written as a rigorous specification, but they should be sufficient to understand
the spirit of each guideline.

## Variable naming

1. Variables should be named using `SCREAMING_SNAKE_CASE`. 
2. Variables in the global scope (as opposed to a task's scope) should be prefixed with `G_` to
   avoid conflicts with local variables.

**Example**

```yaml
vars:
  G_BUILD_DIR: "build"

binaries:
  vars:
    BUILD_DIR: "{{.G_BUILD_DIR}}/bin"
```

## Paths in commands

All paths used in commands should be quoted.

**Example**

```yaml
my-task:
  cmds:
    - "touch '{{.FILE_PATH}}'"
    - |-
      echo "Hello, world" > "{{.FILE_PATH}}"
```

## Built-in variables

1. Don't use the variable `{{.ROOT_TASKFILE}}`
   * v3.35.1 has a bug that makes it equivalent to `ROOT_DIR` (i.e., the parent directory of the root
     Taskfile, rather than the path to the root Taskfile).
2. When using the variable `{{.TASK}}` in a task within a namespace (e.g., it's in a nested
   Taskfile), replace the `:` in the name with `#` as follows: `{{.TASK | replace \":\" \"#\"}}`.
   * This ensures the task name can be used as a filename.

## `sources` and `generates`

The task attributes `sources` and `generates` are supposed to allow us to control whether a task is
run based on whether its source files or generated files have changed, but `task`'s behaviour may
seem intuitive. So to understand the guidelines, you'll first need to understand `task`'s behaviour.

`task` has two methods to track changes to source files, specified using the `method` attribute:
`checksum` which tracks changes to the source files checksums and `timestamp` which tracks changes
to the source files' modification timestamps. Note that checksums and modification timestamps are
only tracked for source files, *not* generated files.

If a task has a `sources` attribute, then the task will run if:

* it has never been run (the checksums/modification timestamps of the source files have not been
  cached), or
* the content of any listed source file has changed.

This is true even if a `sources` entry is a glob that matches one or more file paths.

If the task has a `sources` *and* a `generates` attribute, the task will run if any source file has
changed or if any `generates` entry doesn't exist. Note however, that:

* `task` doesn't checksum the generated files nor check if they are older than the source files; it
  only checks for existence.
* When using globs, `task` only checks whether the glob entry is satisfied rather than whether all
  previously generated files exist.
  * E.g., if the `generates` entry is `build/nodejs/node/**/*`,
    `task` will re-run the task if the `node` or `nodejs` directory don't exist, or if they're
    empty; but `task` won't re-run the task if all but one file inside `node` exists.

Overall, this means that `task` will not detect *all* changes to the generated files.

### Depending on generated files

Every task with a `sources` field should depend on the generated files of its dependencies.

**Example**

```yaml
parent:
  sources:
    - child1-output.txt
    - child2-output.txt
  deps:
    - child1
    - child2

child1:
  generates: ["child1-output.txt"]

child2:
  generates: ["child2-output.txt"]
```

### `generates` and glob patterns

Don't use `generates` entries with glob patterns unless you've accounted for the limitations above.
Instead, you can manually checksum the generated files using the utility tasks below:

```yaml
vars:
  CHECKSUM_TAR_BASE_ARGS: >-
    --group=0
    --mtime='UTC 1970-01-01'
    --numeric-owner
    --owner=0
    --sort=name

compute-checksum:
  desc: "Tries to compute a checksum for the given directory and output it to a file."
  internal: true
  silent: true
  requires:
    vars: ["DATA_DIR", "OUTPUT_FILE"]
  cmds:
    - >-
      tar cf -
      --directory "{{.DATA_DIR}}"
      --group=0
      --mtime='UTC 1970-01-01'
      --numeric-owner
      --owner=0
      --sort=name
      {{.CHECKSUM_TAR_BASE_ARGS}} . 2> /dev/null
      | md5sum > {{.OUTPUT_FILE}}
  # Ignore errors so that dependent tasks don't fail
  ignore_error: true

validate-checksum:
  desc: "Validates the checksum of the given directory matches the checksum in the given file, or
  deletes the checksum file otherwise."
  internal: true
  silent: true
  requires:
    vars: ["CHECKSUM_FILE", "DATA_DIR"]
  vars:
    TMP_CHECKSUM_FILE: "{{.CHECKSUM_FILE}}.tmp"
  cmds:
    - task: "compute-checksum"
      vars:
        DATA_DIR: "{{.DATA_DIR}}"
        OUTPUT_FILE: "{{.TMP_CHECKSUM_FILE}}"
    - defer: "rm -f '{{.TMP_CHECKSUM_FILE}}'"
    # Check that the directory exists and the checksum matches; otherwise delete the checksum file
    - >-
      (
      test -d "{{.DATA_DIR}}"
      && diff -q '{{.TMP_CHECKSUM_FILE}}' '{{.CHECKSUM_FILE}}' 2> /dev/null
      ) || rm -f '{{.CHECKSUM_FILE}}'
```

You can use the utility tasks as follows:

```yaml
my-task:
  vars:
    CHECKSUM_FILE: "checksum.txt"
    OUTPUT_DIR: "build/my-task"
  sources: ["source.txt"]
  generates: ["{{.CHECKSUM_FILE}}"]
  deps:
    - task: "validate-checksum"
      vars:
        CHECKSUM_FILE: "{{.CHECKSUM_FILE}}"
        DATA_DIR: "{{.OUTPUT_DIR}}"
  cmds:
    - "mkdir -p '{{.OUTPUT_DIR}}'"
    - "touch '{{.OUTPUT_DIR}}/output.txt'"
    # This command must be last
    - task: "compute-checksum"
      vars:
        DATA_DIR: "{{.OUTPUT_DIR}}"
        OUTPUT_FILE: "{{.CHECKSUM_FILE}}"
```

Thus, the task will re-run if either:

* the source files change;
* the checksum file doesn't exist; or
* `validate-checksum` fails because a generated file was changed.

## Task ordering

1. All non-internal tasks should appear before internal tasks.

   **Example**

   ```yaml
   my-task-1:
     cmds:
       - "echo {{.TASK}}"

   my-task-2:
     cmds:
       - "echo {{.TASK}}"

   my-internal-task:
     internal: true
     cmds:
       - "echo {{.TASK}}"
   ```

2. Within the internal or non-internal group of tasks, tasks should be organized either
   alphabetically or following some logical ordering.

## Ordering of task attributes

Task attributes should be ordered first by the categories we define below, and then alphabetically
within each category. The one exception to the alphabetical ordering are the execution control
attributes.

* Descriptors
  * `aliases`
  * `desc`
  * `internal`
  * `summary`
* Logging
  * `label`
  * `prefix`
  * `silent`
* Variables
  * `dotenv`
  * `env`
  * `vars`
* Inputs
  * `requires`
  * `sources`
* Environment control
  * `dir`
  * `platforms`
  * `set`
  * `shopt`
* Outputs
  * `generates`
  * `method`
* Execution control (ordered by execution order)
  * `prompt`
  * `run`
  * `deps`
  * `preconditions`
  * `status`
  * `cmds`
  * `ignore_error`
  * `interactive`

## Ordering of list/map entries

List/map entries should be ordered alphabetically (except for `vars`), case-insensitively. Where
there are several attributes, they may be broken down into categories with a comment above each
category.

Entries in the `vars` attribute may violate this ordering so that variables defined later can depend
on the values of variables defined earlier.

**Example**

```yaml
my-task:
  vars:
    PARENT_VAR: "parent"
    CHILD_VAR: "{{.PARENT_VAR}}-child"
  sources:
    - "source1.txt"
    - "source2.txt"
  generates:
    # Binaries
    - "binary1"
    - "binary2"

    # Libraries
    - "lib1"
    - "lib2"
```

## Task docstrings

For reusable utility tasks that take arguments, you should add a docstring above the task definition
using a JSDoc-like syntax. The following example demonstrates the syntax:

```yaml
# Task description.
#
# @param {param_type} PARAM_1 Description for a required parameter.
# @param {param_type} [PARAM_2] Description for an optional parameter.
# @param {param_type} [PARAM_3=default_value] Description for an optional parameter with a default
# value.
# @param {[]param_type} PARAM_4 Description for a required parameter that's an array.
# @param {map[key_type]value_type} PARAM_5 Description for a required parameter that's a map.
```

* The task's description (and the empty line following it) may be omitted if the task's name makes
  it obvious.
* Each parameter's description may be omitted if it's obvious.
* Each parameter's type should use Go's (rather than JavaScript's) syntax for specifying types.

[Taskfiles]: https://taskfile.dev/usage/
[task-attrs]: https://taskfile.dev/api/#task
