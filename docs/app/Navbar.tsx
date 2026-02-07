/* eslint-disable max-lines */
"use client";

import React, {
    useEffect,
    useRef,
    useState,
} from "react";

import {useTheme} from "./shared/ThemeProvider";


/**
 * Formats a number with commas as thousands separators.
 *
 * @param num The number to format.
 * @return The formatted number as a string.
 */
const formatNumber = (num: number): string => {
    return num.toLocaleString();
};


/**
 * Navbar component for site navigation and theme switching.
 *
 * @return The rendered Navbar component.
 */
// eslint-disable-next-line max-lines-per-function
const Navbar = () => {
    const {toggleTheme} = useTheme();

    const [projectsOpen, setProjectsOpen] = useState(false);
    const [devOpen, setDevOpen] = useState(false);
    const [githubStars, setGithubStars] = useState<number | null>(null);

    const [expanded, setExpanded] = useState(false);

    // Fetch GitHub stars for y-scope/clp
    useEffect(() => {
        fetch("https://api.github.com/repos/y-scope/clp")
            .then((res) => (res.ok ?
                res.json() :
                null))
            .then((data: {stargazers_count?: unknown} | null) => {
                if (data && "number" === typeof data.stargazers_count) {
                    setGithubStars(data.stargazers_count);
                }
            })
            .catch(() => {
                setGithubStars(null);
            });
    }, []);

    const navRef = useRef<HTMLDivElement>(null);

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (navRef.current && e.target instanceof Node && !navRef.current.contains(e.target)) {
                setProjectsOpen(false);
                setDevOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClick);

        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);

    return (
        <nav
            className={"navbar navbar-expand-xl border-bottom"}
            ref={navRef}
            style={{padding: "0rem 0"}}
        >
            <div className={"container"}>
                <a
                    className={"navbar-brand logo me-1"}
                    href={"/"}
                    style={{fontSize: "1.85rem"}}
                >
                    CLP Docs
                </a>
                <div
                    className={"d-none d-xl-block"}
                    style={{width: "1.85rem"}}/>
                <button
                    aria-controls={"navbarScroll"}
                    aria-expanded={expanded}
                    aria-label={"Toggle navigation"}
                    type={"button"}
                    className={`navbar-toggler${expanded ?
                        "" :
                        " collapsed"}`}
                    onClick={() => {
                        setExpanded((p) => !p);
                    }}
                >
                    <span className={"navbar-toggler-icon"}/>
                </button>
                <div
                    id={"navbarScroll"}
                    className={`collapse navbar-collapse${expanded ?
                        " show" :
                        ""}`}
                >
                    <ul className={"navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll gap-4"}>
                        <li
                            className={
                                `nav-item dropdown d-flex align-items-center position-relative${
                                    projectsOpen ?
                                        " show" :
                                        ""
                                }`
                            }
                            onMouseEnter={() => {
                                setProjectsOpen(true);
                            }}
                            onMouseLeave={() => {
                                setProjectsOpen(false);
                            }}
                        >
                            <button
                                aria-expanded={projectsOpen}
                                style={{boxShadow: "none", position: "relative", zIndex: 2}}
                                type={"button"}
                                className={
                                    "nav-link dropdown-toggle bg-transparent border-0 p-0 " +
                                        "d-flex align-items-center"
                                }
                                onClick={() => {
                                    setExpanded(false);
                                    window.location.href = "/#projects";
                                }}
                            >
                                Project Docs
                            </button>
                            <ul
                                className={`dropdown-menu${projectsOpen ?
                                    " show" :
                                    ""}`}
                                style={{
                                    left: 0,
                                    minWidth: "unset",
                                    position: "absolute",
                                    top: "100%",
                                    width: "max-content",
                                    zIndex: 10,
                                }}
                            >
                                <li>
                                    <a
                                        className={"dropdown-item"}
                                        href={"/clp/main/"}
                                        onClick={() => {
                                            setProjectsOpen(false);
                                            setExpanded(false);
                                        }}
                                    >
                                        CLP
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className={"dropdown-item"}
                                        href={"/yscope-log-viewer/main/"}
                                        onClick={() => {
                                            setProjectsOpen(false);
                                            setExpanded(false);
                                        }}
                                    >
                                        Log Viewer
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className={"dropdown-item"}
                                        href={"/log-surgeon/main/"}
                                        onClick={() => {
                                            setProjectsOpen(false);
                                            setExpanded(false);
                                        }}
                                    >
                                        Log Surgeon
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className={"dropdown-item"}
                                        href={"https://docs.yscope.com/clp-ffi-py/main/api/clp_ffi_py.html"}
                                        rel={"noreferrer noopener"}
                                        target={"_blank"}
                                        onClick={() => {
                                            setProjectsOpen(false);
                                            setExpanded(false);
                                        }}
                                    >
                                        Python FFI API
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li
                            className={
                                `nav-item dropdown d-flex align-items-center position-relative${
                                    devOpen ?
                                        " show" :
                                        ""
                                }`
                            }
                            onMouseEnter={() => {
                                setDevOpen(true);
                            }}
                            onMouseLeave={() => {
                                setDevOpen(false);
                            }}
                        >
                            <button
                                aria-expanded={devOpen}
                                style={{boxShadow: "none", position: "relative", zIndex: 2}}
                                type={"button"}
                                className={
                                    "nav-link dropdown-toggle bg-transparent border-0 p-0 " +
                                    "d-flex align-items-center"
                                }
                                onClick={() => {
                                    setExpanded(false);
                                    window.location.href = "/dev-guide/";
                                }}
                            >
                                Developer Docs
                            </button>
                            <ul
                                className={`dropdown-menu${devOpen ?
                                    " show" :
                                    ""}`}
                                style={{
                                    left: 0,
                                    minWidth: "unset",
                                    position: "absolute",
                                    top: "100%",
                                    width: "max-content",
                                    zIndex: 10,
                                }}
                            >
                                <li>
                                    <a
                                        className={"dropdown-item"}
                                        href={"/dev-guide/contrib-guides-overview/"}
                                        onClick={() => {
                                            setDevOpen(false);
                                            setExpanded(false);
                                        }}
                                    >
                                        Overview
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className={"dropdown-item"}
                                        href={"/dev-guide/contrib-guides-general/"}
                                        onClick={() => {
                                            setDevOpen(false);
                                            setExpanded(false);
                                        }}
                                    >
                                        General guidelines
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className={"dropdown-item"}
                                        href={"/dev-guide/contrib-guides-cpp/"}
                                        onClick={() => {
                                            setDevOpen(false);
                                            setExpanded(false);
                                        }}
                                    >
                                        C++
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className={"dropdown-item"}
                                        href={"/dev-guide/contrib-guides-taskfiles/"}
                                        onClick={() => {
                                            setDevOpen(false);
                                            setExpanded(false);
                                        }}
                                    >
                                        Taskfiles
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className={"dropdown-item"}
                                        href={"/dev-guide/misc-deploying/"}
                                        onClick={() => {
                                            setDevOpen(false);
                                            setExpanded(false);
                                        }}
                                    >
                                        Deploying
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className={"d-flex gap-2 ms-auto"}>
                        <a
                            aria-label={"GitHub repository"}
                            className={"btn btn-github btn-sm d-inline-flex align-items-center"}
                            href={"https://github.com/y-scope/clp"}
                            rel={"noreferrer"}
                            target={"_blank"}
                            onClick={() => {
                                setExpanded(false);
                            }}
                        >
                            <svg
                                fill={"currentColor"}
                                height={"20"}
                                viewBox={"0 0 24 24"}
                                width={"20"}
                                xmlns={"http://www.w3.org/2000/svg"}
                            >
                                <path
                                    d={
                                        "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 " +
                                            "9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-" +
                                            ".01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-" +
                                            "1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-" +
                                            ".745.083-.729.083-.729 1.205.084 1.84 1.236 1." +
                                            "84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-" +
                                            ".775.418-1.305.762-1.605-2.665-.305-5.466-1.33" +
                                            "4-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124" +
                                            "-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.30" +
                                            "1 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 " +
                                            "2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.2" +
                                            "97-1.23.653 1.653.242 2.873.118 3.176.77.84 1." +
                                            "235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.47" +
                                            "5 5.921.43.371.823 1.102.823 2.222 0 1.606-.01" +
                                            "4 2.898-.014 3.293 0 .322.218.694.825.576C20.5" +
                                            "65 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                                    }/>
                            </svg>
                            {null !== githubStars && (
                                <span
                                    style={{
                                        alignItems: "center",
                                        display: "inline-flex",
                                        fontSize: "1em",
                                        fontWeight: 600,
                                        marginLeft: "0.5em",
                                    }}
                                >
                                    {formatNumber(githubStars)}
                                </span>
                            )}
                        </a>
                        <button
                            id={"themeSwitcher"}
                            className={"btn btn-yscope-secondary btn-sm d-inline-flex " +
                                "align-items-center"}
                            style={{
                                border: "none",
                                justifyContent: "center",
                                padding: "0.25rem 0.5rem",
                                minWidth: "28px",
                            }}
                            onClick={toggleTheme}
                        >
                            <span className={"theme-switcher-icon"}/>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
