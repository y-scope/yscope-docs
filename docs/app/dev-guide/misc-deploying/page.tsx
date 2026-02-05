/* eslint-disable max-lines-per-function */
"use client";


/**
 * Deploying page explaining how to build and assemble documentation sites for deployment,
 * serving each project under a predictable URL prefix.
 *
 * @return The rendered Deploying page.
 */
const Deploying = () => {
    return (
        <section className={"section main-section"}>
            <div className={"container"}>
                <h1 className={"docs-title"}>Deploying this site</h1>
                <p>
                    A deployment of YScope docs includes both the current site and the sites of
                    several other YScope repos and their release versions, complicating the
                    build and deployment processes. The end goal is to use a single node
                    process to serve each site at a different URL prefix (e.g., CLP at
                    {" "}
                    <code>/clp/main</code>
                    {" "}
                    and clp-ffi-py at
                    {" "}
                    <code>/clp-ffi-py/main</code>
                    {""}
                    ). We also want the layout on disk to be predictable so that we can use a
                    simple config file to configure all the sites that need to be served.
                </p>
                <p>
                    One approach would be to build all the sites using Task and then assemble
                    them into a single deployment. However, since each site (and version)
                    might have different build dependencies, we can&apos;t easily build them
                    without several containers. Instead, we plan to have a GitHub workflow per
                    repo which builds the site in a container and then publishes it directly to
                    docs.yscope.com at the expected location.
                </p>
                <p>
                    Until those workflows are ready, we will deploy by building all the sites
                    individually and assembling them into a single deployment.
                </p>

                <h1>Deployment structure</h1>
                <table className={"table"}>
                    <thead>
                        <tr>
                            <th>Project</th>
                            <th>On-disk path</th>
                            <th>URL prefix</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>yscope-docs</td>
                            <td>build/html</td>
                            <td>/</td>
                        </tr>
                        <tr>
                            <td>clp @ main</td>
                            <td>build/clp-main/build/docs/html</td>
                            <td>/clp/main</td>
                        </tr>
                        <tr>
                            <td>clp-ffi-py @ main</td>
                            <td>build/clp-ffi-py-main/build/docs/html</td>
                            <td>/clp-ffi-py/main</td>
                        </tr>
                        <tr>
                            <td>clp-ffi-py @ v0.0.9</td>
                            <td>build/clp-ffi-py-v0.0.9/build/docs/html</td>
                            <td>/clp-ffi-py/v0.0.9</td>
                        </tr>
                    </tbody>
                </table>
                <p>
                    This assumes the deployment is in
                    {" "}
                    <code>build</code>
                    . Essentially, for each
                    project besides yscope-docs, the build output should be in
                    {" "}
                    <code>build/&lt;project&gt;-&lt;version&gt;/build/docs/html</code>
                    {""}
                    .
                </p>

                <br/>
                <h1>Step-by-step guide</h1>
                <ol>
                    <li>
                        Build a clean version of this docs site:
                        <br/>
                        <code>&emsp;task clean && task docs:build</code>
                    </li>
                    <li>
                        Download the projects:
                        <br/>
                        <code>&emsp;task docs:download-projects</code>
                    </li>
                    <li>
                        Build the docs for each project and version in
                        {" "}
                        <code>task docs:download-projects</code>
                        {""}
                        :
                        <br/>
                        <code>
                                &emsp;cd build/&lt;project&gt;-&lt;version&gt;
                            <br/>
                                &emsp;task docs:site
                            <br/>
                                &emsp;cd ../
                        </code>
                    </li>
                    <li>
                        Assemble a release:
                        <br/>
                        <code>&emsp;task docs:release-tar</code>
                        <br/>
                        The tar will be written to
                        {" "}
                        <code>build/yscope-docs-release.tar.gz</code>
                        {""}
                        .
                    </li>
                    <li>
                        Upload the tar to the deployment server and untar it.
                    </li>
                    <li>
                        Follow the instructions in
                        {" "}
                        <code>yscope-docs-release/server/README.md</code>
                        {" "}
                        to start the server.
                    </li>
                </ol>
            </div>
        </section>
    );
};

export default Deploying;
