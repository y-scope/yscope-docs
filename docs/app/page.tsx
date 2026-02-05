/* eslint-disable max-lines */
/* eslint-disable max-lines-per-function */
"use client";
import {useTheme} from "./shared/ThemeProvider";


/**
 * Renders the home page.
 *      To enable autoplay set the initial `autoplay` state to true.
 *
 * @return the home page.
 */
const Home = () => {
    const {theme} = useTheme();

    const prestoSrc = "dark" === theme ?
        "/assets/images/presto_dark.svg" :
        "/assets/images/presto_light.svg";

    const mcpSrc = "dark" === theme ?
        "/assets/images/mcp_dark.svg" :
        "/assets/images/mcp_light.svg";

    return (
        <section className={"section main-section"}>
            <div className={"container"}>
                <div
                    className={"row align-items-center justify-content-center"}
                    style={{marginBottom: "2.5rem"}}
                >
                    <div className={"col col-lg-5"}>
                        <h1>
                            Welcome to
                            {" "}
                            <img
                                alt={"CLP"}
                                src={"/assets/images/clp-logo.png"}
                                style={{
                                    height: "0.9em",
                                    paddingBottom: "3.5px",
                                    verticalAlign: "middle",
                                    width: "auto",
                                }}/>
                            {" "}
                            Docs
                        </h1>
                        <p className={"mb-1 text-muted"}>
                            Learn to use CLP and YScope&apos;s other projects using our guides,
                            examples, documentation and resources.
                        </p>
                    </div>
                    <div className={"col col-lg-5 text-center"}>
                        <a
                            className={"btn btn-quickstart btn-primary btn-lg me-3 mb-2"}
                            href={"/clp/main/user-docs/quick-start/index"}
                        >
                            <i
                                aria-hidden={"true"}
                                className={"bi bi-lightning-charge-fill me-1"}/>
                            {" "}
                            Quickstart
                        </a>
                        <a
                            className={"btn btn-outline-primary btn-lg mb-2"}
                            href={"https://github.com/y-scope/clp/releases"}
                            rel={"noreferrer noopener"}
                            target={"_blank"}
                        >
                            <i
                                aria-hidden={"true"}
                                className={"bi bi-github me-1"}/>
                            {" "}
                            Current Release
                        </a>
                    </div>
                </div>

                {/* Repeated category blocks */}
                <div className={"col align-items-center justify-content-center"}>
                    {/* Deploy CLP */}
                    <div className={"row align-items-center justify-content-center"}>
                        <div className={"col-lg-3 mb-3 mb-lg-0"}>
                            <h3 className={"h5 mb-1"}>Deploy CLP</h3>
                        </div>
                        <div className={"col-lg-7"}>
                            <div className={"row g-2 homepage_icons_category"}>
                                <div className={"col-auto homepage_icon_row"}>
                                    <a
                                        href={"/clp/main/user-docs/quick-start/index"}
                                        className={
                                            "d-flex flex-row align-items-center " +
                                                "text-decoration-none text-body"
                                        }
                                    >
                                        <div
                                            style={{marginRight: "10px"}}
                                            className={
                                                "rounded homepage_icon_box d-flex " +
                                                    "align-items-center justify-content-center"
                                            }
                                        >
                                            <img
                                                alt={"Single-node"}
                                                className={"homepage_icon"}
                                                src={"/assets/images/single-node.svg"}/>
                                        </div>
                                        <small className={"mt-2"}>Single Node</small>
                                    </a>
                                </div>

                                <div className={"col-auto homepage_icon_row"}>
                                    <a
                                        className={
                                            "d-flex flex-row align-items-center " +
                                                "text-decoration-none text-body"
                                        }
                                        href={
                                            "/clp/main/user-docs/guides-docker-compose-" +
                                            "deployment.html"
                                        }
                                    >
                                        <div
                                            style={{marginRight: "10px"}}
                                            className={
                                                "rounded homepage_icon_box d-flex " +
                                                    "align-items-center justify-content-center"
                                            }
                                        >
                                            <img
                                                alt={"Docker Compose"}
                                                className={"homepage_icon"}
                                                src={"/assets/images/docker-compose_icon.svg"}/>
                                        </div>
                                        <small className={"mt-2"}>
                                            Docker Compose
                                        </small>
                                    </a>
                                </div>

                                <div className={"col-auto homepage_icon_row"}>
                                    <a
                                        href={"/clp/main/user-docs/guides-k8s-deployment.html"}
                                        className={
                                            "d-flex flex-row align-items-center " +
                                                "text-decoration-none text-body"
                                        }
                                    >
                                        <div
                                            style={{marginRight: "10px"}}
                                            className={
                                                "rounded homepage_icon_box d-flex " +
                                                    "align-items-center justify-content-center"
                                            }
                                        >
                                            <img
                                                alt={"Kubernetes"}
                                                className={"homepage_icon"}
                                                src={"/assets/images/kubernetes.svg"}/>
                                        </div>
                                        <small className={"mt-2"}>Kubernetes</small>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"row my-3"}>
                        <div className={"col-lg-10 mx-auto divider-whitespace"}>
                            <hr className={"m-0"}/>
                        </div>
                    </div>

                    {/* Log Input */}
                    <div className={"row align-items-center justify-content-center"}>
                        <div className={"col-lg-3 mb-3 mb-lg-0"}>
                            <h3 className={"h5 mb-1"}>Log Input</h3>
                        </div>
                        <div className={"col-lg-7"}>
                            <div className={"row g-2 homepage_icons_category"}>
                                <div className={"col-auto homepage_icon_row"}>
                                    <a
                                        className={
                                            "d-flex flex-row align-items-center " +
                                                "text-decoration-none text-body"
                                        }
                                        href={
                                            "/clp/main/user-docs/guides-using-object-storage/" +
                                            "index"
                                        }
                                    >
                                        <div
                                            style={{marginRight: "10px"}}
                                            className={
                                                "rounded homepage_icon_box d-flex " +
                                                    "align-items-center justify-content-center"
                                            }
                                        >
                                            <img
                                                alt={"S3"}
                                                className={"homepage_icon"}
                                                src={"/assets/images/s3.svg"}/>
                                        </div>
                                        <small className={"mt-2"}>S3</small>
                                    </a>
                                </div>

                                <div className={"col-auto homepage_icon_row"}>
                                    <a
                                        href={"https://github.com/y-scope/clp-loglib-py"}
                                        rel={"noreferrer noopener"}
                                        target={"_blank"}
                                        className={
                                            "d-flex flex-row align-items-center " +
                                                "text-decoration-none text-body"
                                        }
                                    >
                                        <div
                                            style={{marginRight: "10px"}}
                                            className={
                                                "rounded homepage_icon_box d-flex " +
                                                    "align-items-center justify-content-center"
                                            }
                                        >
                                            <img
                                                alt={"Python Library"}
                                                className={"homepage_icon"}
                                                src={"/assets/images/python.svg"}/>
                                        </div>
                                        <small className={"mt-2"}>
                                            Python
                                        </small>
                                    </a>
                                </div>

                                <div className={"col-auto homepage_icon_row"}>
                                    <a
                                        href={"/clp/main/user-docs/guides-using-log-ingestor.html"}
                                        className={
                                            "d-flex flex-row align-items-center " +
                                                "text-decoration-none text-body"
                                        }
                                    >
                                        <div
                                            style={{marginRight: "10px"}}
                                            className={
                                                "rounded homepage_icon_box d-flex " +
                                                    "align-items-center justify-content-center"
                                            }
                                        >
                                            <img
                                                alt={"Log Ingestor"}
                                                className={"homepage_icon"}
                                                src={"/assets/images/log-ingestor.svg"}/>
                                        </div>
                                        <small className={"mt-2"}>
                                            Log Ingestor
                                        </small>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"row my-3"}>
                        <div className={"col-lg-10 mx-auto divider-whitespace"}>
                            <hr className={"m-0"}/>
                        </div>
                    </div>

                    {/* Analyze & View */}
                    <div className={"row align-items-center justify-content-center"}>
                        <div className={"col-lg-3 mb-3 mb-lg-0"}>
                            <h3 className={"h5 mb-1"}>Analyze & View</h3>
                        </div>
                        <div className={"col-lg-7"}>
                            <div className={"row g-2 homepage_icons_category"}>
                                <div className={"col-auto homepage_icon_row"}>
                                    <a
                                        href={"/clp/main/user-docs/guides-using-presto.html"}
                                        className={
                                            "d-flex flex-row align-items-center " +
                                                "text-decoration-none text-body"
                                        }
                                    >
                                        <div
                                            style={{marginRight: "10px"}}
                                            className={
                                                "rounded homepage_icon_box d-flex " +
                                                    "align-items-center justify-content-center"
                                            }
                                        >
                                            <img
                                                alt={"Presto"}
                                                className={"homepage_icon"}
                                                src={prestoSrc}
                                                style={{
                                                    transform: "scale(1.2)",
                                                    transformOrigin: "center",
                                                }}/>
                                        </div>
                                        <small className={"mt-2"}>Presto</small>
                                    </a>
                                </div>

                                <div className={"col-auto homepage_icon_row"}>
                                    <a
                                        href={"/clp/main/user-docs/guides-mcp-server/index.html"}
                                        className={
                                            "d-flex flex-row align-items-center " +
                                                "text-decoration-none text-body"
                                        }
                                    >
                                        <div
                                            style={{marginRight: "10px"}}
                                            className={
                                                "rounded homepage_icon_box d-flex " +
                                                    "align-items-center justify-content-center"
                                            }
                                        >
                                            <img
                                                alt={"MCP"}
                                                className={"homepage_icon"}
                                                src={mcpSrc}/>
                                        </div>
                                        <small className={"mt-2"}>MCP Server</small>
                                    </a>
                                </div>

                                <div className={"col-auto homepage_icon_row"}>
                                    <a
                                        className={
                                            "d-flex flex-row align-items-center " +
                                                "text-decoration-none text-body"
                                        }
                                        href={
                                            "/clp/main/user-docs/guides-using-the-api-server." +
                                            "html"
                                        }
                                    >
                                        <div
                                            style={{marginRight: "10px"}}
                                            className={
                                                "rounded homepage_icon_box d-flex " +
                                                    "align-items-center justify-content-center"
                                            }
                                        >
                                            <img
                                                alt={"API Server"}
                                                className={"homepage_icon"}
                                                src={"/assets/images/api-server.svg"}/>
                                        </div>
                                        <small className={"mt-2"}>API Server</small>
                                    </a>
                                </div>

                                <div className={"col-auto homepage_icon_row"}>
                                    <a
                                        href={"/yscope-log-viewer/main/"}
                                        className={
                                            "d-flex flex-row align-items-center " +
                                                "text-decoration-none text-body"
                                        }
                                    >
                                        <div
                                            style={{marginRight: "10px"}}
                                            className={
                                                "rounded homepage_icon_box d-flex " +
                                                    "align-items-center justify-content-center"
                                            }
                                        >
                                            <img
                                                alt={"Log viewer"}
                                                className={"homepage_icon"}
                                                src={"/assets/images/log-viewer_icon.svg"}/>
                                        </div>
                                        <small className={"mt-2"}>Log Viewer</small>
                                    </a>
                                </div>

                                <div className={"col-auto homepage_icon_row"}>
                                    <a
                                        href={"/clp/main/user-docs/reference-json-search-syntax"}
                                        className={
                                            "d-flex flex-row align-items-center " +
                                                "text-decoration-none text-body"
                                        }
                                    >
                                        <div
                                            style={{marginRight: "10px"}}
                                            className={
                                                "rounded homepage_icon_box d-flex " +
                                                    "align-items-center justify-content-center"
                                            }
                                        >
                                            <img
                                                alt={"JSON Search"}
                                                className={"homepage_icon"}
                                                src={"/assets/images/json.svg"}/>
                                        </div>
                                        <small className={"mt-2"}>JSON Search</small>
                                    </a>
                                </div>

                                <div className={"col-auto homepage_icon_row"}>
                                    <a
                                        href={"/clp/main/user-docs/reference-text-search-syntax"}
                                        className={
                                            "d-flex flex-row align-items-center " +
                                                "text-decoration-none text-body"
                                        }
                                    >
                                        <div
                                            style={{marginRight: "10px"}}
                                            className={
                                                "rounded homepage_icon_box d-flex " +
                                                    "align-items-center justify-content-center"
                                            }
                                        >
                                            <img
                                                alt={"Text Search"}
                                                className={"homepage_icon"}
                                                src={"/assets/images/text.svg"}/>
                                        </div>
                                        <small className={"mt-2"}>Text Search</small>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"row my-3"}>
                        <div className={"col-lg-10 mx-auto divider-whitespace"}>
                            <hr className={"m-0"}/>
                        </div>
                    </div>

                    {/* Resources */}
                    <div className={"row align-items-center justify-content-center"}>
                        <div className={"col-lg-3 mb-3 mb-lg-0"}>
                            <h3 className={"h5 mb-1"}>Resources</h3>
                        </div>
                        <div className={"col-lg-7"}>
                            <div className={"row g-2 homepage_icons_category"}>
                                <div className={"col-auto homepage_icon_row"}>
                                    <a
                                        href={"/clp/main/user-docs/resources-datasets.html"}
                                        className={
                                            "d-flex flex-row align-items-center " +
                                                "text-decoration-none text-body"
                                        }
                                    >
                                        <div
                                            style={{marginRight: "10px"}}
                                            className={
                                                "rounded homepage_icon_box d-flex " +
                                                    "align-items-center justify-content-center"
                                            }
                                        >
                                            <img
                                                alt={"Datasets"}
                                                className={"homepage_icon"}
                                                src={"/assets/images/datasets.svg"}/>
                                        </div>
                                        <small className={"mt-2"}>Datasets</small>
                                    </a>
                                </div>

                                <div className={"col-auto homepage_icon_row"}>
                                    <a
                                        href={"https://benchmarks.yscope.com/log-archival-bench/"}
                                        rel={"noreferrer noopener"}
                                        target={"_blank"}
                                        className={
                                            "d-flex flex-row align-items-center " +
                                                "text-decoration-none text-body"
                                        }
                                    >
                                        <div
                                            style={{marginRight: "10px"}}
                                            className={
                                                "rounded homepage_icon_box d-flex " +
                                                    "align-items-center justify-content-center"
                                            }
                                        >
                                            <img
                                                alt={"Benchmarks"}
                                                className={"homepage_icon"}
                                                src={"/assets/images/benchmarks.svg"}/>
                                        </div>
                                        <small className={"mt-2"}>Benchmarks</small>
                                    </a>
                                </div>

                                <div className={"col-auto homepage_icon_row"}>
                                    <a
                                        href={"https://blog.yscope.com/"}
                                        rel={"noreferrer noopener"}
                                        target={"_blank"}
                                        className={
                                            "d-flex flex-row align-items-center " +
                                                "text-decoration-none text-body"
                                        }
                                    >
                                        <div
                                            style={{marginRight: "10px"}}
                                            className={
                                                "rounded homepage_icon_box d-flex " +
                                                    "align-items-center justify-content-center"
                                            }
                                        >
                                            <img
                                                alt={"Blog"}
                                                className={"homepage_icon"}
                                                src={"/assets/images/blog.svg"}/>
                                        </div>
                                        <small className={"mt-2"}>
                                            Blog
                                        </small>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"row my-3"}>
                        <div className={"col-lg-10 mx-auto divider-whitespace"}>
                            <hr className={"m-0"}/>
                        </div>
                    </div>

                    {/* References */}
                    <div className={"row align-items-center justify-content-center"}>
                        <div className={"col-lg-3 mb-3 mb-lg-0"}>
                            <h3 className={"h5 mb-1"}>References</h3>
                        </div>
                        <div className={"col-lg-7"}>
                            <div className={"row g-2 homepage_icons_category"}>
                                <div className={"col-auto homepage_icon_row"}>
                                    <a
                                        href={"https://www.yscope.com/publications"}
                                        rel={"noreferrer noopener"}
                                        target={"_blank"}
                                        className={
                                            "d-flex flex-row align-items-center " +
                                                "text-decoration-none text-body"
                                        }
                                    >
                                        <div
                                            style={{marginRight: "10px"}}
                                            className={
                                                "rounded homepage_icon_box d-flex " +
                                                    "align-items-center justify-content-center"
                                            }
                                        >
                                            <img
                                                alt={"Publications"}
                                                className={"homepage_icon"}
                                                src={"/assets/images/publications.svg"}/>
                                        </div>
                                        <small className={"mt-2"}>Publications</small>
                                    </a>
                                </div>

                                <div className={"col-auto homepage_icon_row"}>
                                    <a
                                        href={"/clp/main/user-docs/reference-sbin-scripts/index"}
                                        className={
                                            "d-flex flex-row align-items-center " +
                                                "text-decoration-none text-body"
                                        }
                                    >
                                        <div
                                            style={{marginRight: "10px"}}
                                            className={
                                                "rounded homepage_icon_box d-flex " +
                                                    "align-items-center justify-content-center"
                                            }
                                        >
                                            <img
                                                alt={"Package Scripts"}
                                                className={"homepage_icon"}
                                                src={"/assets/images/scripts.svg"}/>
                                        </div>
                                        <small className={"mt-2"}>
                                            Package Scripts
                                        </small>
                                    </a>
                                </div>

                                <div className={"col-auto homepage_icon_row"}>
                                    <a
                                        className={
                                            "d-flex flex-row align-items-center " +
                                                "text-decoration-none text-body"
                                        }
                                        href={
                                            "/clp/main/user-docs/reference-unstructured-schema-" +
                                            "file"
                                        }
                                    >
                                        <div
                                            style={{marginRight: "10px"}}
                                            className={
                                                "rounded homepage_icon_box d-flex " +
                                                    "align-items-center justify-content-center"
                                            }
                                        >
                                            <img
                                                alt={"Schema File Syntax"}
                                                className={"homepage_icon"}
                                                src={"/assets/images/schema-file-syntax.svg"}/>
                                        </div>
                                        <small className={"mt-2"}>Schema File Syntax</small>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"row my-3"}>
                    <div className={"col-lg-10 mx-auto divider-whitespace"}>
                        <hr className={"m-0"}/>
                    </div>
                </div>
                <div className={"row align-items-center justify-content-center below-fold"}>
                    <div className={"col-lg-10"}>
                        <div className={"row"}>
                            <div className={"col-lg-6"}>
                                <section
                                    className={"d-flex flex-column justify-content-center"}
                                    id={"getting-in-touch"}
                                    style={{marginTop: 0}}
                                >
                                    <h3 style={{marginBottom: "1rem", textAlign: "left"}}>
                                        <svg
                                            aria-hidden={"true"}
                                            fill={"currentColor"}
                                            height={"22"}
                                            style={{marginRight: 4}}
                                            viewBox={"0 0 24 24"}
                                            width={"22"}
                                        >
                                            <path
                                                d={"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 " +
                                                        "16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 " +
                                                        "0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 " +
                                                        "8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 " +
                                                        "3.5V19h14v-2.5C15 14.17 10.33 13 8 13zm8" +
                                                        " 0c-.29 0-.62.02-.97.05 1.16.84 1.97 " +
                                                        "2.08 1.97 3.45V19h6v-2.5c0-2.33-4.67-" +
                                                        "3.5-7-3.5z"}/>
                                        </svg>
                                        Community
                                    </h3>
                                    <p>Need help? Join us on one of our community servers:</p>
                                    <div
                                        style={{
                                            gap: "1.5rem",
                                            marginTop: "0.5rem",
                                            marginBottom: "1rem",
                                            textAlign: "center",
                                        }}
                                    >
                                        <a
                                            className={"btn btn-primary btn-md me-3 mb-2"}
                                            href={"https://discord.gg/7kZA2m5G87"}
                                            rel={"noopener noreferrer"}
                                            style={{backgroundColor: "#7289da", border: "none"}}
                                            target={"_blank"}
                                        >
                                            <img
                                                alt={"Discord"}
                                                src={"/assets/images/discord.svg"}
                                                style={{
                                                    height: 32,
                                                    marginRight: 10,
                                                    verticalAlign: "middle",
                                                }}/>
                                            {""}
                                            Discord
                                        </a>

                                        <a
                                            className={"btn btn-primary btn-md me-3 mb-2"}
                                            href={"https://communityinviter.com/apps/yscopecommunity/yscope-community"}
                                            rel={"noopener noreferrer"}
                                            style={{backgroundColor: "#4A154B", border: "none"}}
                                            target={"_blank"}
                                        >
                                            <img
                                                alt={"Slack"}
                                                src={"/assets/images/slack.svg"}
                                                style={{
                                                    height: 32,
                                                    marginRight: 10,
                                                    verticalAlign: "middle",
                                                }}/>
                                            {""}
                                            Slack
                                        </a>

                                        <a
                                            className={"btn btn-primary btn-md me-3 mb-2"}
                                            href={"https://yscope-clp.zulipchat.com"}
                                            rel={"noopener noreferrer"}
                                            style={{backgroundColor: "#323234", border: "none"}}
                                            target={"_blank"}
                                        >
                                            <img
                                                alt={"Zulip"}
                                                src={"/assets/images/zulip.svg"}
                                                style={{
                                                    height: 32,
                                                    marginRight: 10,
                                                    verticalAlign: "middle",
                                                }}/>
                                            {""}
                                            Zulip
                                        </a>
                                    </div>
                                    <p>Need help? Join us on one of our community servers:</p>
                                    <a
                                        className={"btn btn-github w-100"}
                                        href={"https://www.yscope.com/contact-us"}
                                        rel={"noreferrer noopener"}
                                        style={{marginTop: "0.5rem", marginBottom: "1rem"}}
                                        target={"_blank"}
                                    >
                                        Contact Us
                                    </a>
                                </section>
                            </div>
                            <div className={"col-lg-6"}>
                                <section
                                    className={"d-flex flex-column justify-content-center"}
                                    id={"newsletter-signup"}
                                    style={{marginTop: 0}}
                                >
                                    <h3
                                        style={{marginBottom: "1rem", textAlign: "left"}}
                                    >
                                        Subscribe to our Newsletter
                                    </h3>
                                    <iframe
                                        className={"w-100 border-0"}
                                        src={"https://zgnp-zngp.maillist-manage.com/ua/Optin?od=11287ecd51e435&zx=128d06ea5&tD=115eb0ad4019fbcaf&sD=115eb0ad401a078b2"}
                                        style={{height: "230px", maxWidth: "500px"}}
                                        title={"Newsletter signup"}/>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
