"use client";
import Admonition from "../../shared/Admonition";


/**
 * Overview page component that displays contribution guideline links.
 *
 * @return The Overview page component.
 */
const Overview = () => {
    return (
        <section className={"section main-section"}>
            <div className={"container"}>
                <h1>Overview</h1>
                <p>
                    This section contains contribution guidelines for different languages and
                    tools. Where possible, we have automated linting processes so that you
                    don&apos;t need to read and remember dozens of guidelines. Thus, the
                    guidelines here are only those for which we cannot or have not yet
                    automated.
                </p>
                <Admonition type={"note"}>
                    <p>
                        This section is a work in progress while we open-source all our guidelines.
                    </p>
                </Admonition>

                <h2>Guides</h2>
                <ul>
                    <li>
                        <a href={"/dev-guide/contrib-guides-general/"}>General guidelines</a>
                    </li>
                    <li>
                        <a href={"/dev-guide/contrib-guides-cpp/"}>C++</a>
                    </li>
                    <li>
                        <a href={"/dev-guide/contrib-guides-taskfiles/"}>Taskfiles</a>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Overview;
