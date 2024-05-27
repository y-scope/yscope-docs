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
* Variables
  * `dotenv`
  * `env`
  * `vars`
* Inputs
  * `requires`
  * `sources`
* Environment control
  * `dir`
  * `platform`
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
* Logging
  * `label`
  * `prefix`
  * `silent`

## Ordering of list/map entries

List/map entries should be ordered alphabetically (except for `vars`). Where there are several
attributes, they may be broken down into categories with a comment above each category.

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

[Taskfiles]: https://taskfile.dev/usage/
