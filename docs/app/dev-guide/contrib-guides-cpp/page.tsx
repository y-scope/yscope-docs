/* eslint-disable max-lines */
/* eslint-disable max-lines-per-function */
/* eslint-disable @stylistic/max-len */
"use client";

/**
 * C++ contribution and style guidelines page component.
 *
 * @return The C++ guidelines page component.
 */
const CppGuidelines = () => {
    return (
        <section className={"section main-section"}>
            <div className={"container"}>
                <h1 className={"docs-title"}>C++</h1>
                <p>Follow the guidelines below when writing and updating C++ files.</p>
                <br/>
                <h1>Automated linting</h1>
                <p>
                    As mentioned in the overview, where possible, we have automated linting processes, so you need not
                    remember all the guidelines perfectly. For C++, we currently use the following tools:
                </p>

                <ul>
                    <li>
                        <code>clang-format</code>
                        {" "}
                        for formatting (
                        <a href={"https://github.com/y-scope/yscope-dev-utils/blob/main/lint-configs/.clang-format"}>base config</a>
                        {""}
                        )
                    </li>
                    <li>
                        <code>clang-tidy</code>
                        {" "}
                        for static analysis (
                        <a href={"https://github.com/y-scope/yscope-dev-utils/blob/main/lint-configs/.clang-tidy"}>base config</a>
                        {""}
                        )
                    </li>
                </ul>

                <p>When the linter disagrees with a guideline, err on the side of following the linter, since:</p>
                <ul>
                    <li>we don&apos;t want automated runs of the linters to fail, leading to them being ignored due to the noise;</li>
                    <li>the linter may have a good reason for disagreeing with the guideline;</li>
                    <li>the linter&apos;s configuration may be more up-to-date than the guideline.</li>
                </ul>

                <div className={"admonition tip"}>
                    <p className={"admonition-tip-title"}>Tip</p>
                    <p>
                        To learn about how to apply the linters to a new C++ project, see
                        {" "}
                        <a href={"https://github.com/y-scope/yscope-dev-utils/blob/main/docs/lint-tools-cpp.md"}>adding-cpp-linting</a>
                        {" "}
                        .
                    </p>
                </div>

                <p>
                    When you encounter such a disagreement, if it hasn&apos;t been noted below, please open an
                    {" "}
                    <a href={"https://github.com/y-scope/yscope-docs/issues/new"}>issue</a>
                    {" "}
                    to track it.
                </p>
                <br/>
                <h1>Guidelines</h1>
                <p>
                    We adhere to
                    {" "}
                    <a href={"https://google.github.io/styleguide/cppguide.html"}>Google&apos;s C++ style guide</a>
                    {" "}
                    (as of
                    {" "}
                    <a href={"https://github.com/google/styleguide/tree/8f97e24da04753c7a15eda6b02114a01ec3146f5"}>8f97e24</a>
                    {" "}
                    ) with the following exceptions (organized according to the sections in Google&apos;s style guide).
                </p>

                <div className={"admonition note"}>
                    <p className={"admonition-note-title"}>Note</p>
                    <p>
                        This section is a work in progress and does not yet include all
                        exceptions after the Classes section of Google&apos;s style guide.
                    </p>
                </div>
                <br/>

                <h2>Header files</h2>
                <br/>
                <h3>Self-contained Headers</h3>
                <ul>
                    <li>
                        Header files should end in
                        {" "}
                        <code>.hpp</code>
                        {" "}
                        .
                    </li>
                    <li>
                        Don&apos;t use non-header files meant for inclusion (e.g.,
                        {" "}
                        <code>.impl</code>
                        {" "}
                        /
                        <code>.inc</code>
                        {" "}
                        /
                        <code>.tpp</code>
                        {" "}
                        files included at the end of the
                        <code>.hpp</code>
                        {" "}
                        file), since they can confuse static analysis tools.
                    </li>
                </ul>
                <br/>

                <h3>The #define Guard</h3>
                <p>The symbol name should have the form</p>
                <p className={"admonition code"}>
                    <code>&lt;NAMESPACE&gt;_&lt;FILENAME-STEM&gt;_&lt;FILENAME-EXTENSION&gt;</code>
                </p>

                <p>where:</p>
                <ul>
                    <li>
                        <code>&lt;NAMESPACE&gt;</code>
                        {" "}
                        is the namespace of the file. For files in a nested namespace, each namespace layer should be separated by an underscore.
                    </li>
                    <li>
                        <code>&lt;FILENAME_STEM&gt;</code>
                        {" "}
                        is the file&apos;s name without the extension. For stems with multiple words, the words should
                        {" "}
                        <em>not</em>
                        {" "}
                        be separated with underscores.
                    </li>
                    <li>
                        <code>&lt;FILENAME_EXTENSION&gt;</code>
                        {" "}
                        is the file&apos;s extension.
                    </li>
                </ul>

                <p>For example:</p>
                <p>
                    <code>clp/streaming_archive/reader/SegmentManager.hpp</code>
                </p>
                <p className={"admonition code"}>
                    <code>
                        #ifndef CLP_STREAMING_ARCHIVE_READER_SEGMENTMANAGER_HPP
                        <br/>
                        #define CLP_STREAMING_ARCHIVE_READER_SEGMENTMANAGER_HPP
                        <br/>
                        <br/>
                        namespace clp::streaming_archive::reader
                        {" "}
                        {"{"}
                        <br/>
                            &nbsp;&nbsp;
                        {"// ..."}
                        <br/>
                        {"}"}
                        <br/>
                        <br/>
                        #endif  // CLP_STREAMING_ARCHIVE_READER_SEGMENTMANAGER_HPP
                    </code>
                </p>

                <br/>
                <h3>Names and order of includes</h3>
                <ul>
                    <li>For codebases where the code is not organized into well-defined libraries, it is fine to use UNIX directory aliases to include headers.</li>
                    <li>
                        For C headers that have C++ counterparts (e.g.,
                        {" "}
                        <code>stddef.h</code>
                        {" "}
                        vs
                        {" "}
                        <code>cstddef</code>
                        {" "}
                        ), use the C++ counterpart.
                    </li>
                </ul>

                <br/>
                <h2>Scoping</h2>
                <br/>
                <h3>Namespaces</h3>
                <p>
                    Single-line nested namespace declarations (e.g.
                    {" "}
                    <code>bar</code>
                    {" "}
                    in
                    {" "}
                    <code>foo</code>
                    {" "}
                    ) should use the following format (unless doing so would affect clarity):
                </p>
                <p className={"admonition code"}>
                    <code>
                        namespace foo::bar
                        {" {"}
                        {"}"}
                    </code>
                </p>

                <h3>Internal linkage</h3>
                <p>
                    Only use unnamed namespaces (instead of the
                    {" "}
                    <code>static</code>
                    {" "}
                    qualifier) to give functions and variables internal linkage. However, as Google&apos;s style guide indicates, you can&apos;t use unnamed namespaces in header files. For symbols that should only be used within a header file, you can create a named namespace in the header file, where its name is of the form:
                </p>
                <p className={"admonition code"}>
                    <code>&lt;FilenameStem&gt;_internal</code>
                </p>

                <p>where:</p>
                <ul>
                    <li>
                        <code>&lt;FilenameStem_stem&gt;</code>
                        {" "}
                        is the file’s name without the extension.
                    </li>
                    <li>
                        <code>_internal</code>
                        {" "}
                        is a fixed suffix indicating the namespace’s purpose.
                    </li>
                </ul>

                <p>For example:</p>
                <code>
                    clp/streaming_archive/reader/SegmentManager.hpp
                </code>

                <p className={"admonition code"}>
                    <code>
                        namespace clp::streaming_archive::reader
                        {" {"}
                        <br/>
                        namespace SegmentManager_internal
                        {" {"}
                        <br/>
                            &nbsp;&nbsp;
                        {"// Internal symbols"}
                        <br/>
                        {" }"}
                        <br/>
                        {"}"}
                    </code>
                </p>

                <br/>
                <h2>Classes</h2>
                <br/>
                <h3>Doing work in constructors</h3>
                <p>We allow (but discourage) the use of exceptions, even in constructors. If creating an object can fail, you&apos;re encouraged to use a factory function that performs the work that can fail, and then returns a result containing an error code if unsuccessful or the object if successful.</p>

                <h3>Declaration order</h3>
                <p>Within each section, order declarations as follows:</p>
                <ol>
                    <li>
                        Types and type aliases (
                        {""}
                        <code>typedef</code>
                        {""}
                        ,
                        {" "}
                        <code>using</code>
                        {""}
                        ,
                        {" "}
                        <code>enum</code>
                        {""}
                        , nested structs and classes, and
                        {" "}
                        <code>friend</code>
                        {" "}
                        types).
                    </li>
                    <li>Static constants.</li>
                    <li>
                        Static functions:
                        <ul>
                            <li>Factory functions.</li>
                            <li>Other functions.</li>
                        </ul>
                    </li>
                    <li>Static variables.</li>
                    <li>Constructors.</li>
                    <li>Copy &amp; move constructors and assignment operators.</li>
                    <li>The destructor.</li>
                    <li>
                        Methods (member functions):
                        <ul>
                            <li>Overridden methods.</li>
                            <li>Implemented abstract methods.</li>
                            <li>All other methods.</li>
                        </ul>
                    </li>
                    <li>Data members.</li>
                </ol>

                <p>
                    The differences between our declaration order and the order in Google&apos;s style guide is to conform with our general
                    {" "}
                    <a href={"./contrib-guides-general/"}>ordering guidelines</a>
                    {" "}
                    .
                </p>
            </div>
        </section>
    );
};

export default CppGuidelines;
