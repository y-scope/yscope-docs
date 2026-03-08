"use client";

/**
 * General guidelines page component.
 *
 * @return The rendered general guidelines section.
 */
const GeneralGuidelines = () => {
    return (
        <section className={"section main-section"}>
            <div className={"container"}>
                <h1 style={{fontWeight: "bolder"}}>General guidelines</h1>
                <p>Follow the guidelines below when writing and updating any source files.</p>
                <br/>
                <h2 style={{fontWeight: "bolder"}}>Code organization</h2>
                <br/>
                <h3 style={{fontWeight: "bolder"}}>Declaration order</h3>
                <p>Organize declarations in order of:</p>
                <ol>
                    <li>Visibility, from public to private</li>
                    <li>Lifetime, from static to dynamic</li>
                    <li>Alphabetically (unless a different ordering is required)</li>
                </ol>

                <p>
                    This is so readers who read from top to bottom should understand the high-
                    level interfaces (public/static) before the low-level implementation
                    details (private/dynamic). Alphabetical ordering is to make symbols easy
                    to find.
                </p>
            </div>
        </section>
    );
};

export default GeneralGuidelines;
