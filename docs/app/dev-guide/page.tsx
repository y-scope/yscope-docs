"use client";

/**
 * Developer Guide index page component.
 *
 * @return The rendered Developer Guide index section.
 */
const DevGuideIndex = () => {
    return (
        <section className={"section main-section"}>
            <div className={"container"}>
                <h1>Developer Guide</h1>
                <p>
                    This section contains docs describing our development practices and the
                    like.
                </p>

                <h2>Contribution guidelines</h2>
                <ul>
                    <li>
                        <a href={"/dev-guide/contrib-guides-overview/"}>Overview</a>
                    </li>
                    <li>
                        <a href={"/dev-guide/contrib-guides-general/"}>General Guidelines</a>
                    </li>
                    <li>
                        <a href={"/dev-guide/contrib-guides-cpp/"}>C++</a>
                    </li>
                    <li>
                        <a href={"/dev-guide/contrib-guides-taskfiles/"}>Taskfiles</a>
                    </li>
                </ul>

                <h2>Misc</h2>
                <ul>
                    <li>
                        <a href={"/dev-guide/misc-deploying/"}>Deploying Main Docs</a>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default DevGuideIndex;
