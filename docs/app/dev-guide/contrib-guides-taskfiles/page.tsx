/* eslint-disable max-lines */
/* eslint-disable max-lines-per-function */
"use client";
import Admonition from "../../shared/Admonition";
import CodeBlock from "../../shared/CodeBlock";


/**
 * Taskfiles page React component that renders the Taskfiles contribution guide.
 *
 * @return The rendered Taskfiles page.
 */
const Taskfiles = () => {
    return (
        <section className={"section main-section"}>
            <div className={"container"}>
                <h1 className={"docs-title"}>Taskfiles</h1>

                <p>
                    Follow the guidelines below when writing and updating
                    {" "}
                    <a href={"https://taskfile.dev/usage/"}>Taskfiles</a>
                    {""}
                    . Note that neither the guidelines nor examples are written as a rigorous
                    specification, but they should be sufficient to understand the spirit of
                    each guideline.
                </p>

                <h1>Variable naming</h1>
                <ol>
                    <li>
                        Variables should be named using
                        {" "}
                        <code>SCREAMING_SNAKE_CASE</code>
                        {""}
                        .
                    </li>
                    <li>
                        Variables in the global scope (as opposed to a task&apos;s scope) should
                        be prefixed with
                        {" "}
                        <code>G_</code>
                        {" "}
                        to avoid conflicts with local variables.
                    </li>
                </ol>

                <p>
                    <strong>Example</strong>
                </p>
                <CodeBlock
                    language={"yaml"}
                    showCopy={true}
                    code={
                        `vars:
  G_GLOBAL_VAR: "global_value"
binaries:
  vars:
    BUILD_DIR: "{{.G_BUILD_DIR}}/bin"
`
                    }/>

                <br/>
                <h1>Paths</h1>
                <br/>
                <h2>Matching files with glob patterns</h2>
                <p>Use the glob patterns in the table below depending on your use case.</p>
                <table className={"table"}>
                    <thead>
                        <tr>
                            <th>Use case</th>
                            <th>Pattern</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Match all files in the current directory.</td>
                            <td>
                                <code>*</code>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Match all files with the
                                {" "}
                                <code>.x</code>
                                {" "}
                                extension in the current directory.
                            </td>
                            <td>
                                <code>*.x</code>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Match all files that are in a subdirectory directly below the
                                current directory.
                            </td>
                            <td>
                                <code>*/*</code>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Match all files with the
                                {" "}
                                <code>.x</code>
                                {" "}
                                extension that are in a subdirectory directly below the current
                                directory.
                            </td>
                            <td>
                                <code>*/*.x</code>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Match all files in the current directory and all levels of
                                subdirectories.
                            </td>
                            <td>
                                <code>**/*</code>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Match all files with the
                                {" "}
                                <code>.x</code>
                                {" "}
                                extension in the current directory and all levels of
                                subdirectories.
                            </td>
                            <td>
                                <code>**/*.x</code>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <Admonition type={"warning"}>
                    <p>
                        Don&apos;t use the pattern
                        {" "}
                        <code>**</code>
                        {" "}
                        (instead of
                        {" "}
                        <code>**/*</code>
                        ) since it is equivalent to
                        {" "}
                        <code>*</code>
                        . Note that this isn&apos;t the case in bash.
                    </p>
                </Admonition>

                <br/>
                <h2>Paths in commands</h2>
                <p>All paths used in commands should be quoted.</p>
                <br/>
                <p>
                    <strong>Example</strong>
                </p>
                <CodeBlock
                    language={"yaml"}
                    showCopy={true}
                    code={
                        `my-task:
  cmds:
  - "touch '{{.FILE_PATH}}'"
  - |-
    echo "Hello, world" > "{{.FILE_PATH}}"
`
                    }/>

                <h2>Built-in variables</h2>
                <ol>
                    <li>
                        Don&apos;t use the variable
                        {" "}
                        <code>
                            {"{{.ROOT_TASKFILE}}"}
                        </code>
                        <ul>
                            <li>
                                v3.35.1 has a bug that makes it equivalent to
                                {" "}
                                <code>ROOT_DIR</code>
                                {" "}
                                (i.e., the parent directory of the root Taskfile, rather than
                                the path to the root Taskfile).
                            </li>
                        </ul>
                    </li>
                    <li>
                        When using the variable
                        {" "}
                        <code>
                            {"{{.TASK}}"}
                        </code>
                        {" "}
                        in a task within a namespace (e.g., it&apos;s in a nested Taskfile),
                        replace the
                        {" "}
                        <code>:</code>
                        {" "}
                        in the name with
                        {" "}
                        <code>#</code>
                        {" "}
                        as follows:
                        {" "}
                        <code>
                            {"{{.TASK | replace "}
                            \&ldquo;:\&rdquo; \&ldquo;#\&rdquo;
                            {"}}"}
                        </code>
                        .
                        <ul>
                            <li>This ensures the task name can be used as a filename.</li>
                        </ul>
                    </li>
                </ol>

                <br/>
                <h1>
                    <code>sources</code>
                    {" "}
                    and
                    {" "}
                    <code>generates</code>
                </h1>
                <p>
                    The task attributes
                    {" "}
                    <code>sources</code>
                    {" "}
                    and
                    {" "}
                    <code>generates</code>
                    {" "}
                    are supposed to allow us to control whether a task is
                    run based on whether its source files or generated files have changed, but
                    {" "}
                    <code>task</code>
                    {""}
                    &apos;s behaviour may
                    seem unintuitive. So to understand the guidelines, you&apos;ll first need
                    to understand
                    {" "}
                    <code>task</code>
                    {""}
                    &apos;s
                    behaviour.
                </p>

                <p>
                    <code>task</code>
                    {" "}
                    has two methods to track changes to source files, specified using the
                    {" "}
                    <code>method</code>
                    {" "}
                    attribute:
                    {" "}
                    <code>checksum</code>
                    {" "}
                    which tracks changes to the source files checksums and
                    {" "}
                    <code>timestamp</code>
                    {" "}
                    which tracks changes to the source files&apos; modification timestamps.
                    Note that checksums and modification timestamps are only tracked for
                    source files,
                    {" "}
                    <em>not</em>
                    {" "}
                    generated files.
                </p>

                <p>
                    If a task has a
                    {" "}
                    <code>sources</code>
                    {" "}
                    attribute, then the task will run if:
                </p>
                <ul>
                    <li>
                        it has never been run (the checksums/modification timestamps of the
                        source files have not been cached), or
                    </li>
                    <li>the content of any listed source file has changed.</li>
                </ul>

                <p>
                    This is true even if a
                    {" "}
                    <code>sources</code>
                    {" "}
                    entry is a glob that matches one or more file paths.
                </p>

                <p>
                    If the task has a
                    {" "}
                    <code>sources</code>
                    {" "}
                    <em>and</em>
                    {" "}
                    a
                    {" "}
                    <code>generates</code>
                    {" "}
                    attribute, the task will run if any source file has changed or if any
                    {" "}
                    <code>generates</code>
                    {" "}
                    entry doesn&apos;t exist. Note however, that:
                </p>
                <ul>
                    <li>
                        <code>task</code>
                        {" "}
                        doesn&apos;t checksum the generated files nor check if they are older
                        than the source files; it only checks for existence.
                    </li>
                    <li>
                        When using globs,
                        {" "}
                        <code>task</code>
                        {" "}
                        only checks whether the glob entry is satisfied rather than whether all
                        previously generated files exist.
                        <ul>
                            <li>
                                E.g., if the
                                {" "}
                                <code>generates</code>
                                {" "}
                                entry is
                                {" "}
                                <code>build/nodejs/node/**/*</code>
                                {""}
                                ,
                                {" "}
                                <code>task</code>
                                {" "}
                                will re-run the task if the
                                {" "}
                                <code>node</code>
                                {" "}
                                or
                                {" "}
                                <code>nodejs</code>
                                {" "}
                                directory don&apos;t exist, or if they&apos;re empty; but
                                {" "}
                                <code>task</code>
                                {" "}
                                won&apos;t re-run the task if all but one file inside
                                {" "}
                                <code>node</code>
                                {" "}
                                exists.
                            </li>
                        </ul>
                    </li>
                </ul>

                <p>
                    Overall, this means that
                    {" "}
                    <code>task</code>
                    {" "}
                    will not detect
                    {" "}
                    <em>all</em>
                    {" "}
                    changes to the generated files.
                </p>

                <br/>
                <h2>Depending on generated files</h2>
                <p>
                    Every task with a
                    {" "}
                    <code>sources</code>
                    {" "}
                    field should depend on the generated files of its dependencies.
                </p>

                <CodeBlock
                    language={"yaml"}
                    showCopy={true}
                    code={
                        `parent:
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
`
                    }/>

                <br/>
                <h2>
                    <code>generates</code>
                    {" "}
                    and glob patterns
                </h2>
                <p>
                    Don&apos;t use
                    {" "}
                    <code>generates</code>
                    {" "}
                    entries with glob patterns unless you&apos;ve accounted for the limitations
                    above. Instead, you can manually checksum the generated files using the
                    utility tasks below:
                </p>

                <CodeBlock
                    language={"yaml"}
                    showCopy={true}
                    code={
                        `vars:
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
  ignore_error: true

validate-checksum:
  desc: "Validates the checksum of the given directory matches the checksum in the given file, or deletes the checksum file otherwise."
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
    - >-
      (
        test -d "{{.DATA_DIR}}" && diff -q '{{.TMP_CHECKSUM_FILE}}' '{{.CHECKSUM_FILE}}' 2> /dev/null
      ) || rm -f '{{.CHECKSUM_FILE}}'
`
                    }/>

                <p>You can use the utility tasks as follows:</p>
                <CodeBlock
                    language={"yaml"}
                    showCopy={true}
                    code={
                        `my-task:
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
    - task: "compute-checksum"
      vars:
        DATA_DIR: "{{.OUTPUT_DIR}}"
        OUTPUT_FILE: "{{.CHECKSUM_FILE}}"
`
                    }/>

                <p>Thus, the task will re-run if either:</p>
                <ul>
                    <li>the source files change;</li>
                    <li>the checksum file doesn&apos;t exist; or</li>
                    <li>
                        <code>validate-checksum</code>
                        {" "}
                        fails because a generated file was changed.
                    </li>
                </ul>

                <br/>
                <h1>Task ordering</h1>
                <p>1. All non-internal tasks should appear before internal tasks.</p>
                <p>
                        &emsp;
                    <strong>Example</strong>
                </p>
                <CodeBlock
                    language={"yaml"}
                    showCopy={true}
                    code={
                        `my-task-1:
  cmds:
    - "echo {{.TASK}}"

my-task-2:
  cmds:
    - "echo {{.TASK}}"

my-internal-task:
  internal: true
  cmds:
    - "echo {{.TASK}}"
`
                    }/>

                <p>
                    2. Within the internal or non-internal group of tasks, tasks should be
                    organized either alphabetically or following some logical ordering.
                </p>

                <br/>
                <h1>Ordering of task attributes</h1>
                <p>
                    Task attributes should be ordered first by the categories we define below,
                    and then alphabetically within each category. The one exception to the
                    alphabetical ordering are the execution control attributes.
                </p>

                <ul>
                    <li>
                        <strong>Descriptors</strong>
                        <ul>
                            <li>
                                <code>aliases</code>
                            </li>
                            <li>
                                <code>desc</code>
                            </li>
                            <li>
                                <code>internal</code>
                            </li>
                            <li>
                                <code>summary</code>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Logging</strong>
                        <ul>
                            <li>
                                <code>label</code>
                            </li>
                            <li>
                                <code>prefix</code>
                            </li>
                            <li>
                                <code>silent</code>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Variables</strong>
                        <ul>
                            <li>
                                <code>dotenv</code>
                            </li>
                            <li>
                                <code>env</code>
                            </li>
                            <li>
                                <code>vars</code>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Inputs</strong>
                        <ul>
                            <li>
                                <code>requires</code>
                            </li>
                            <li>
                                <code>sources</code>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Environment control</strong>
                        <ul>
                            <li>
                                <code>dir</code>
                            </li>
                            <li>
                                <code>platforms</code>
                            </li>
                            <li>
                                <code>set</code>
                            </li>
                            <li>
                                <code>shopt</code>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Outputs</strong>
                        <ul>
                            <li>
                                <code>generates</code>
                            </li>
                            <li>
                                <code>method</code>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Execution control (ordered by execution order)</strong>
                        <ul>
                            <li>
                                <code>prompt</code>
                            </li>
                            <li>
                                <code>run</code>
                            </li>
                            <li>
                                <code>deps</code>
                            </li>
                            <li>
                                <code>preconditions</code>
                            </li>
                            <li>
                                <code>status</code>
                            </li>
                            <li>
                                <code>cmds</code>
                            </li>
                            <li>
                                <code>ignore_error</code>
                            </li>
                            <li>
                                <code>interactive</code>
                            </li>
                        </ul>
                    </li>
                </ul>

                <br/>
                <h1>Ordering of list/map entries</h1>
                <p>
                    List/map entries should be ordered alphabetically (except for
                    {" "}
                    <code>vars</code>
                    {""}
                    ), case-insensitively. Where there are several attributes, they may be
                    broken down into categories with a comment above each category.
                </p>

                <p>
                    Entries in the
                    {" "}
                    <code>vars</code>
                    {" "}
                    attribute may violate this ordering so that variables defined later can
                    depend on the values of variables defined earlier.
                </p>

                <p>
                    <strong>Example</strong>
                </p>
                <CodeBlock
                    language={"yaml"}
                    showCopy={true}
                    code={
                        `my-task:
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
`
                    }/>

                <br/>
                <h1>Task docstrings</h1>
                <p>
                    For reusable utility tasks that take arguments, you should add a docstring
                    above the task definition using a JSDoc-like syntax. The following example
                    demonstrates the syntax:
                </p>

                <CodeBlock
                    language={"text"}
                    showCopy={true}
                    code={
                        `# Task description including a description of any side effects or outputs generated by this task.
#
# @param {param_type} PARAM_1 Description for a required parameter.
# @param {param_type} [PARAM_2] Description for an optional parameter.
# @param {param_type} [PARAM_3=default_value] Description for an optional parameter with a default value.
# @param {[]param_type} PARAM_4 Description for a required parameter that's an array.
# @param {map[key_type]value_type} PARAM_5 Description for a required parameter that's a map.
`
                    }/>

                <ul>
                    <li>
                        The task&apos;s description (and the empty line following it) may be
                        omitted if the task&apos;s name makes it obvious.
                    </li>
                    <li>
                        Each parameter&apos;s description may be omitted if it&apos;s obvious
                        (however, the tag, type, and name should always be present).
                    </li>
                    <li>
                        Each parameter&apos;s type should use Go&apos;s (rather than
                        JavaScript&apos;s) syntax for specifying types.
                    </li>
                </ul>

                <Admonition type={"note"}>
                    <p>
                        Tasks have an optional
                        {" "}
                        <a href={"https://taskfile.dev/reference/schema#task"}>desc</a>
                        {" "}
                        attribute that technically serves the same purpose as the task description in the docstring. However, the description in the docstring can be easier to format, and we recommend against using
                        {" "}
                        <code>desc</code>
                        {" "}
                        when a docstring is present.
                    </p>
                </Admonition>
            </div>
        </section>
    );
};

export default Taskfiles;
