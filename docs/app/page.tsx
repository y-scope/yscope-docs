/* eslint-disable max-lines */
/* eslint-disable max-lines-per-function */
"use client";
import {
    useEffect,
    useState,
} from "react";

import {useTheme} from "./shared/ThemeProvider";


/**
 *
 */
const Divider = () => {
    return (
        <div className={"row my-3"}>
            <div className={"col-lg-10 mx-auto divider-whitespace"}>
                <hr className={"m-0"}/>
            </div>
        </div>
    );
};

/**
 * Renders the home page.
 *
 * @return the home page.
 */
const Home = () => {
    const {theme} = useTheme();
    const [prestoSrc, setPrestoSrc] = useState("/assets/images/presto_light.svg");
    const [mcpSrc, setMcpSrc] = useState("/assets/images/mcp_light.svg");

    useEffect(() => {
        setPrestoSrc("dark" === theme ?
            "/assets/images/presto_dark.svg" :
            "/assets/images/presto_light.svg");

        setMcpSrc("dark" === theme ?
            "/assets/images/mcp_dark.svg" :
            "/assets/images/mcp_light.svg");
    }, [theme]);

    /* Small reusable IconLink component to avoid repeating markup for each icon */
    const IconLink = ({
        external,
        href,
        imgAlt,
        imgSrc,
        imgStyle,
        label,
    }: {
        external?: boolean;
        href: string;
        imgAlt: string;
        imgSrc: string;
        imgStyle?: any;
        label: string;
    }) => (
        <div className={"col-auto homepage_icon_row"}>
            <a
                href={href}
                className={
                    "d-flex flex-row align-items-center " +
                        "text-decoration-none text-body"
                }
                {...(external ?
                    {rel: "noreferrer noopener", target: "_blank"} :
                    {})}
            >
                <div
                    style={{marginRight: "10px"}}
                    className={
                        "rounded homepage_icon_box d-flex " +
                            "align-items-center justify-content-center"
                    }
                >
                    <img
                        alt={imgAlt}
                        className={"homepage_icon"}
                        src={imgSrc}
                        style={imgStyle}/>
                </div>
                <small className={"mt-2"}>
                    {label}
                </small>
            </a>
        </div>
    );

    const Category = ({title, items}: {title: string; items: Array<any>}) => (
        <div className={"row align-items-center justify-content-center"}>
            <div className={"col-lg-3 mb-3 mb-lg-0"}>
                <h3 className={"h5 mb-1"}>
                    {title}
                </h3>
            </div>
            <div className={"col-lg-7"}>
                <div className={"row g-2 homepage_icons_category"}>
                    {items.map((it: any, i: number) => (
                        <IconLink
                            key={i}
                            {...it}/>
                    ))}
                </div>
            </div>
        </div>
    );

    const categories = [
        {
            title: "Deploy CLP",
            items: [
                {
                    href: "/clp/main/user-docs/quick-start/index",
                    imgAlt: "Single-node",
                    imgSrc: "/assets/images/single-node.svg",
                    label: "Single Node",
                },
                {
                    href: "/clp/main/user-docs/guides-docker-compose-deployment.html",
                    imgAlt: "Docker Compose",
                    imgSrc: "/assets/images/docker-compose_icon.svg",
                    label: "Docker Compose",
                },
                {
                    href: "/clp/main/user-docs/guides-k8s-deployment.html",
                    imgAlt: "Kubernetes",
                    imgSrc: "/assets/images/kubernetes.svg",
                    label: "Kubernetes",
                },
            ],
        },
        {
            title: "Log Input",
            items: [
                {
                    href: "/clp/main/user-docs/guides-using-object-storage/index",
                    imgAlt: "S3",
                    imgSrc: "/assets/images/s3.svg",
                    label: "S3",
                },
                {
                    external: true,
                    href: "https://github.com/y-scope/clp-loglib-py",
                    imgAlt: "Python Library",
                    imgSrc: "/assets/images/python.svg",
                    label: "Python",
                },
                {
                    href: "/clp/main/user-docs/guides-using-log-ingestor.html",
                    imgAlt: "Log Ingestor",
                    imgSrc: "/assets/images/log-ingestor.svg",
                    label: "Log Ingestor",
                },
            ],
        },
        {
            title: "Analyze & View",
            items: [
                {
                    href: "/clp/main/user-docs/guides-using-presto.html",
                    imgAlt: "Presto",
                    imgSrc: prestoSrc,
                    imgStyle: {transform: "scale(1.2)", transformOrigin: "center"},
                    label: "Presto",
                },
                {
                    href: "/clp/main/user-docs/guides-mcp-server/index.html",
                    imgAlt: "MCP",
                    imgSrc: mcpSrc,
                    label: "MCP Server",
                },
                {
                    href: "/clp/main/user-docs/guides-using-the-api-server.html",
                    imgAlt: "API Server",
                    imgSrc: "/assets/images/api-server.svg",
                    label: "API Server",
                },
                {
                    href: "/yscope-log-viewer/main/",
                    imgAlt: "Log viewer",
                    imgSrc: "/assets/images/log-viewer_icon.svg",
                    label: "Log Viewer",
                },
                {
                    href: "/clp/main/user-docs/reference-json-search-syntax",
                    imgAlt: "JSON Search",
                    imgSrc: "/assets/images/json.svg",
                    label: "JSON Search",
                },
                {
                    href: "/clp/main/user-docs/reference-text-search-syntax",
                    imgAlt: "Text Search",
                    imgSrc: "/assets/images/text.svg",
                    label: "Text Search",
                },
            ],
        },
        {
            title: "Resources",
            items: [
                {
                    href: "/clp/main/user-docs/resources-datasets.html",
                    imgAlt: "Datasets",
                    imgSrc: "/assets/images/datasets.svg",
                    label: "Datasets",
                },
                {
                    external: true,
                    href: "https://benchmarks.yscope.com/log-archival-bench/",
                    imgAlt: "Benchmarks",
                    imgSrc: "/assets/images/benchmarks.svg",
                    label: "Benchmarks",
                },
                {
                    external: true,
                    href: "https://blog.yscope.com/",
                    imgAlt: "Blog",
                    imgSrc: "/assets/images/blog.svg",
                    label: "Blog",
                },
            ],
        },
        {
            title: "References",
            items: [
                {
                    external: true,
                    href: "https://www.yscope.com/publications",
                    imgAlt: "Publications",
                    imgSrc: "/assets/images/publications.svg",
                    label: "Publications",
                },
                {
                    href: "/clp/main/user-docs/reference-sbin-scripts/index",
                    imgAlt: "Package Scripts",
                    imgSrc: "/assets/images/scripts.svg",
                    label: "Package Scripts",
                },
                {
                    href: "/clp/main/user-docs/reference-unstructured-schema-file",
                    imgAlt: "Schema File Syntax",
                    imgSrc: "/assets/images/schema-file-syntax.svg",
                    label: "Schema File Syntax",
                },
            ],
        },
    ];

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

                {/* Replaced repeated markup with data-driven categories */}
                <div className={"col align-items-center justify-content-center"}>
                    {categories.map((c, idx) => (
                        <div key={c.title}>
                            <Category
                                items={c.items}
                                title={c.title}/>
                            {idx < categories.length - 1 && <Divider/>}
                        </div>
                    ))}
                </div>

                <Divider/>

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
