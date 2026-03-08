/* eslint-disable max-lines */
/* eslint-disable max-lines-per-function */
"use client";

import {
    useEffect,
    useRef,
    useState,
} from "react";

import {
    ChevronDown,
    Menu,
    Moon,
    Sun,
} from "lucide-react";

import {useTheme} from "@/app/shared/ThemeProvider";
import {Button} from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";


const PROJECT_DOCS_MENU_CLOSE_DELAY_MS = 150;

/**
 * Formats a number with locale-specific thousand separators.
 *
 * @param num The number to format.
 * @return The formatted number as a string.
 */
const formatNumber = (num: number): string => {
    return num.toLocaleString();
};

/**
 * Renders the navigation bar component.
 *
 * @return The Navbar component.
 */
const Navbar = () => {
    const {theme, toggleTheme} = useTheme();

    const [mounted, setMounted] = useState(false);
    const [githubStars, setGithubStars] = useState<number | null>(null);
    const [projectDocsOpen, setProjectDocsOpen] = useState(false);
    const projectDocsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleProjectDocsEnter = () => {
        if (projectDocsTimeoutRef.current) {
            clearTimeout(projectDocsTimeoutRef.current);
        }
        setProjectDocsOpen(true);
    };

    const handleProjectDocsLeave = () => {
        projectDocsTimeoutRef.current = setTimeout(() => {
            setProjectDocsOpen(false);
        }, PROJECT_DOCS_MENU_CLOSE_DELAY_MS);
    };

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        fetch("https://api.github.com/repos/y-scope/clp")
            .then((res) => (res.ok ?
                res.json() :
                null))
            .then((data: {stargazers_count?: number} | null) => {
                if (data && "number" === typeof data.stargazers_count) {
                    setGithubStars(data.stargazers_count);
                }
            })
            .catch(() => {
                setGithubStars(null);
            });
    }, []);

    const projectDocsLinks = [
        {href: "/clp/main/", name: "CLP"},
        {href: "/yscope-log-viewer/main/", name: "Log Viewer"},
        {href: "/log-surgeon/main/", name: "Log Surgeon"},
        {href: "https://docs.yscope.com/clp-ffi-py/main/api/clp_ffi_py.html", name: "Python FFI API"},
    ];

    return (
        <header className={"sticky top-0 z-50 w-full bg-[color:var(--bs-body-bg)] nav-border"}>
            <div className={"container mx-auto flex h-16 items-center justify-between"}>
                <div className={"flex col w-full align-items-end"}>
                    <a
                        className={"text-decoration-none navbar-brand logo me-1 flex items-center gap-2"}
                        href={"/"}
                        style={{fontSize: "1.85rem"}}
                    >
                        <img
                            alt={"CLP"}
                            src={"/assets/images/clp-logo.png"}
                            style={{
                                height: "1.6rem",
                                paddingBottom: "3.5px",
                                verticalAlign: "middle",
                                width: "auto",
                            }}/>
                        {" "}
                        <span
                            style={{
                                paddingTop: "1px",
                                verticalAlign: "middle",
                            }}
                        >
                            Docs
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className={"hidden lg:flex items-center"}>
                        <div
                            className={"relative text-sm"}
                            onMouseEnter={handleProjectDocsEnter}
                            onMouseLeave={handleProjectDocsLeave}
                        >
                            <Button
                                className={"flex items-center gap-1"}
                                variant={"navlink"}
                            >
                                Project Docs
                                <ChevronDown
                                    className={`h-4 w-4 transition-transform ${projectDocsOpen ?
                                        "rotate-180" :
                                        ""}`}/>
                            </Button>
                            {projectDocsOpen && (
                                <div
                                    className={"absolute top-full left-0 min-w-[160px] rounded-md " +
                                    "border bg-popover p-1 shadow-md mobile-menu-sheet z-[200]"}
                                >
                                    {projectDocsLinks.map((link) => (
                                        <a
                                            className={"text-decoration-none text-sm"}
                                            href={link.href}
                                            key={link.href}
                                            onClick={(e) => {
                                            // Prevent parent onClick, which goes to /#solutions,
                                            // from running when clicking a specific solution link.
                                                e.stopPropagation();
                                            }}
                                        >
                                            <Button
                                                className={"flex items-center"}
                                                variant={"navlink"}
                                            >
                                                {link.name}
                                            </Button>
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    </nav>
                </div>

                {/* Desktop Actions */}
                <div className={"hidden lg:flex items-center gap-3"}>
                    <Button
                        className={"h-8 dev-docs-btn px-2"}
                        size={"sm"}
                    >
                        <a
                            className={"text-decoration-none text-xs text-white"}
                            href={"/dev-guide/"}
                        >
                            Dev Docs
                        </a>
                    </Button>
                    <Button
                        asChild={true}
                        className={"h-8 px-2"}
                        size={"sm"}
                        variant={"github"}
                    >
                        <a
                            className={"flex items-center gap-2 no-underline text-xs"}
                            href={"https://github.com/y-scope/clp"}
                            rel={"noopener noreferrer"}
                            target={"_blank"}
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
                                formatNumber(githubStars)
                            )}
                        </a>
                    </Button>
                    {mounted && (
                        <Button
                            className={"h-8 w-8 theme-toggle-btn"}
                            size={"icon-sm"}
                            variant={"themeToggle"}
                            onClick={() => {
                                toggleTheme();
                            }}
                        >
                            {"dark" === theme ?
                                (
                                    <Sun className={"h-4 w-4"}/>
                                ) :
                                (
                                    <Moon className={"h-4 w-4"}/>
                                )}
                        </Button>
                    )}
                </div>

                {/* Mobile Menu */}
                <Sheet>
                    <SheetTrigger
                        asChild={true}
                        className={"lg:hidden"}
                    >
                        <Button
                            className={"mobile-menu-btn"}
                            size={"icon-lg"}
                            variant={"outline"}
                        >
                            <Menu className={"h-7 w-7"}/>
                        </Button>
                    </SheetTrigger>
                    <SheetContent
                        className={"w-80"}
                        side={"right"}
                    >
                        <div className={"flex flex-col h-full pt-8 px-4"}>
                            <div className={"space-y-3"}>
                                <Button
                                    className={"flex items-center"}
                                    size={"xs"}
                                    variant={"navlink"}
                                >
                                    Project Docs
                                </Button>
                                {projectDocsLinks.map((link) => (
                                    <SheetClose
                                        asChild={true}
                                        key={link.href}
                                    >
                                        <a
                                            className={"text-decoration-none"}
                                            href={link.href}
                                            key={link.href}
                                        >
                                            <Button
                                                className={"flex items-center"}
                                                style={{marginLeft: "1.25rem"}}
                                                variant={"navlink"}
                                            >
                                                {link.name}
                                            </Button>
                                        </a>
                                    </SheetClose>
                                ))}
                            </div>
                            <div className={"mt-auto pb-8 space-y-3"}>
                                <Button
                                    asChild={true}
                                    className={"w-full dev-docs-btn"}
                                >
                                    <a
                                        className={"text-decoration-none text-white"}
                                        href={"/dev-docs"}
                                    >
                                        Dev Docs
                                    </a>
                                </Button>
                                <Button
                                    asChild={true}
                                    className={"w-full"}
                                    variant={"github"}
                                >
                                    <a
                                        href={"https://github.com/y-scope/clp"}
                                        rel={"noopener noreferrer"}
                                        target={"_blank"}
                                        className={"flex items-center justify-center gap-2 " +
                                            "no-underline"}
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
                                                    "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.4" +
                                                        "38 9.8 8.205 11.385.6.113.82-.258.82-.5" +
                                                        "77 0-.285-.01-1.04-.015-2.04-3.338.724-" +
                                                        "4.042-1.61-4.042-1.61-.546-1.387-1.333-" +
                                                        "1.757-1.333-1.757-1.089-.745.083-.729.0" +
                                                        "83-.729 1.205.084 1.84 1.236 1.84 1.236" +
                                                        " 1.07 1.834 2.809 1.304 3.495.997.108-." +
                                                        "775.418-1.305.762-1.605-2.665-.305-5.46" +
                                                        "6-1.334-5.466-5.93 0-1.31.469-2.381 1.2" +
                                                        "36-3.221-.124-.303-.535-1.523.117-3.176" +
                                                        " 0 0 1.008-.322 3.301 1.23a11.52 11.52 " +
                                                        "0 0 1 3.003-.404c1.018.005 2.045.138 3." +
                                                        "003.404 2.291-1.552 3.297-1.23 3.297-1." +
                                                        "23.653 1.653.242 2.873.118 3.176.77.84 " +
                                                        "1.235 1.911 1.235 3.221 0 4.609-2.803 5" +
                                                        ".624-5.475 5.921.43.371.823 1.102.823 2" +
                                                        ".222 0 1.606-.014 2.898-.014 3.293 0 .3" +
                                                        "22.218.694.825.576C20.565 22.092 24 17." +
                                                        "592 24 12.297c0-6.627-5.373-12-12-12"
                                                }/>
                                        </svg>
                                        GitHub
                                        {null !== githubStars && (
                                            <>
                                                {" ("}
                                                {formatNumber(githubStars)}
                                                {")"}
                                            </>
                                        )}
                                    </a>
                                </Button>
                                {mounted && (
                                    <Button
                                        className={"w-full theme-toggle-btn"}
                                        variant={"themeToggle"}
                                        onClick={() => {
                                            toggleTheme();
                                        }}
                                    >
                                        {"dark" === theme ?
                                            (
                                                <>
                                                    <Sun className={"h-4 w-4 mr-2"}/>
                                                    {"Light Mode"}
                                                </>
                                            ) :
                                            (
                                                <>
                                                    <Moon className={"h-4 w-4 mr-2"}/>
                                                    {"Dark Mode"}
                                                </>
                                            )}
                                    </Button>
                                )}
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
};

export default Navbar;
