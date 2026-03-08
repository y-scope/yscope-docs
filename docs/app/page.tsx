/* eslint-disable max-lines-per-function */
"use client";
import {
    useEffect,
    useState,
} from "react";

import {Zap} from "lucide-react";
import Image from "next/image";

import {ContactSection} from "../components/sections/ContactSection";
import {getCategories} from "./content";
import {useTheme} from "./shared/ThemeProvider";

import {Button} from "@/components/ui/button";
import {
    Card,
    CardContent,
} from "@/components/ui/card";


const GITHUB_ICON_PATH = (
    "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285" +
    "-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.08" +
    "9-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.1" +
    "08-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-" +
    ".124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018" +
    ".005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77" +
    ".84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624 -5.475 5.921.43.371.823 1.102.823 2.222 0 1" +
    ".606-.014 2.898-.014 3.293 0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627" +
    "-5.373-12-12-12"
);

/**
 * Renders a horizontal divider with whitespace.
 *
 * @return the divider component.
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
 * Renders an icon link card.
 *
 * @param external.external
 * @param external whether the link should open in a new tab.
 * @param href the URL to navigate to.
 * @param imgAlt alt text for the image.
 * @param imgSrc source URL for the image.
 * @param imgStyle optional inline styles for the image.
 * @param label the link label text.
 * @param external.href
 * @param external.imgAlt
 * @param external.imgSrc
 * @param external.imgStyle
 * @param external.label
 * @return the icon link component.
 */
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
    <Card
        className={"col-auto p-0 border-0 shadow-none homepage_icon_row transition-all " +
        "duration-300 hover:-translate-y-1"}
    >
        <CardContent>
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
        </CardContent>
    </Card>
);

/**
 * Renders a category section with icon links.
 *
 * @param root the category object
 * @param root.title name of category
 * @param root.items array of icon links
 * @return the category component
 */
const Category = ({title, items}: {title: string; items: Array<any>}) => (
    <div className={"row align-items-center justify-content-center"}>
        <div className={"col-lg-3 mb-3 mb-lg-0"}>
            <h3 className={"h5 mb-1"}>
                {title}
            </h3>
        </div>
        <div className={"col-lg-7"}>
            <div className={"row g-2 homepage_icons_category mx-auto"}>
                {items.map((it: any, i: number) => (
                    <IconLink
                        key={i}
                        {...it}/>
                ))}
            </div>
        </div>
    </div>
);

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

    const categories = getCategories(prestoSrc, mcpSrc);

    return (
        <>
            <div className={"container mx-auto mt-5"}>
                <div
                    className={"row align-items-center justify-content-center homepage-hero-row"}
                    style={{marginBottom: "2.5rem"}}
                >
                    <div className={"col"}>
                        <h1 className={"flex align-items-center gap-2 homepage-hero-title"}>
                            Welcome to
                            {" "}
                            <Image
                                alt={"CLP Logo"}
                                height={0}
                                src={"/assets/images/clp-logo.png"}
                                unoptimized={true}
                                width={0}
                                style={{
                                    height: "0.8em",
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
                    <div className={"col my-4"}>
                        <div className={"row gap-4 px-4 align-items-center justify-content-center"}>
                            <Button
                                asChild={true}
                                size={"lg"}
                                variant={"outline"}
                                className={"text-white bg-[var(--brilliant-azure-550)] " +
                                         "hover:bg-[var(--brilliant-azure-700)] px-8 " +
                                         "mobile-menu-btn hover:shadow-xl transition-all " +
                                         "duration-300 hover:-translate-y-1"}
                                style={{
                                    fontSize: "1.5rem",
                                    height: "3rem",
                                    width: "fit-content",
                                }}
                            >
                                <a
                                    className={"text-decoration-none"}
                                    href={"/clp/main/user-docs/quick-start/index"}
                                >
                                    <Zap
                                        aria-hidden={"true"}
                                        size={20}/>
                                    {" "}
                                    Quickstart
                                </a>
                            </Button>
                            <Button
                                asChild={true}
                                size={"lg"}
                                variant={"outline"}
                                className={"text-white bg-[var(--turquoise-600)] " +
                                         "hover:bg-[var(--turquoise-700)] px-8 mobile-menu-btn " +
                                         "hover:shadow-xl transition-all duration-300 " +
                                         "hover:-translate-y-1"}
                                style={{
                                    fontSize: "1.5rem",
                                    height: "3rem",
                                    width: "fit-content",
                                }}
                            >
                                <a
                                    className={"text-decoration-none"}
                                    href={"https://github.com/y-scope/clp/releases"}
                                    rel={"noreferrer noopener"}
                                    target={"_blank"}
                                >
                                    <svg
                                        fill={"currentColor"}
                                        height={"25"}
                                        viewBox={"0 0 24 24"}
                                        width={"25"}
                                        xmlns={"http://www.w3.org/2000/svg"}
                                    >
                                        <path d={GITHUB_ICON_PATH}/>
                                    </svg>
                                    {" "}
                                    Current Release
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Replaced repeated markup with data-driven categories */}
                <div className={"row align-items-center justify-content-center"}>
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
            </div>
            <ContactSection/>
        </>
    );
};

export default Home;
