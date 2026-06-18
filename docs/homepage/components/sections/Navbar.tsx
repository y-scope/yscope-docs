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
import GithubIcon from "@/components/icons/GithubIcon";
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

const projectDocsLinks = [
    {href: "/clp/main/", name: "CLP"},
    {href: "/yscope-log-viewer/main/", name: "Log Viewer"},
    {href: "/log-surgeon/main/", name: "Log Surgeon"},
    {href: "/clp-ffi-py/main/api/clp_ffi_py", name: "Python FFI API"},
];

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
    const projectDocsContainerRef = useRef<HTMLDivElement | null>(null);
    const focusTimeoutRef = useRef<number | null>(null);

    const scheduleFocus = (fn: () => void) => {
        if (focusTimeoutRef.current) {
            clearTimeout(focusTimeoutRef.current);
        }
        focusTimeoutRef.current = window.setTimeout(() => {
            focusTimeoutRef.current = null;
            fn();
        }, 0);
    };

    useEffect(() => {
        return () => {
            if (projectDocsTimeoutRef.current) {
                clearTimeout(projectDocsTimeoutRef.current);
            }
        };
    }, []);

    const focusFirstProjectDocsItem = () => {
        const el = projectDocsContainerRef.current?.querySelector('a');
        if (el instanceof HTMLElement) {
            el.focus();
        }
    };

    const focusRelativeProjectDocsItem = (current: HTMLElement, offset: number) => {
        const container = projectDocsContainerRef.current;
        if (null === container) {return;}
        const items = Array.from(container.querySelectorAll('a')) as HTMLElement[];
        const idx = items.indexOf(current);
        if (-1 === idx) {return;}
        let next = idx + offset;
        if (0 > next) {next = items.length - 1;}
        if (next >= items.length) {next = 0;}
        const el = items[next];
        el.focus();
    };

    const focusLastProjectDocsItem = () => {
        const items = Array.from(projectDocsContainerRef.current?.querySelectorAll('a') || []) as HTMLElement[];
        const el = items.length ? items[items.length - 1] : null;
        if (el) {
            el.focus();
        }
    };

    const toggleProjectDocs = (open?: boolean, focusOnOpen = true) => {
        if (projectDocsTimeoutRef.current) {
            clearTimeout(projectDocsTimeoutRef.current);
        }

        if ("boolean" === typeof open) {
            setProjectDocsOpen(open);
            if (open && focusOnOpen) {
                scheduleFocus(focusFirstProjectDocsItem);
            }
            return;
        }

        setProjectDocsOpen((v) => {
            const next = false === v;
            if (next && focusOnOpen) {
                scheduleFocus(focusFirstProjectDocsItem);
            }
            return next;
        });
    };

    const handleProjectDocsEnter = () => {
        toggleProjectDocs(true, false);
    };

    const handleProjectDocsLeave = () => {
        projectDocsTimeoutRef.current = setTimeout(() => {
            setProjectDocsOpen(false);
        }, PROJECT_DOCS_MENU_CLOSE_DELAY_MS);
    };

    const handleProjectDocsBlur = () => {
        if (projectDocsTimeoutRef.current) {
            clearTimeout(projectDocsTimeoutRef.current);
        }

        // Defer check until after focus has moved; use document.activeElement
        projectDocsTimeoutRef.current = setTimeout(() => {
            const active = document.activeElement as Node | null;
            if (projectDocsContainerRef.current && active && projectDocsContainerRef.current.contains(active)) {
                // Focus remained inside the container; keep menu open.
                if (projectDocsTimeoutRef.current) {
                    clearTimeout(projectDocsTimeoutRef.current);
                }
                return;
            }

            setProjectDocsOpen(false);
        }, 0);
    };

    const handleProjectDocsKeyDown = (e: React.KeyboardEvent) => {
        if ("Enter" === e.key || " " === e.key) {
            e.preventDefault();
            toggleProjectDocs();
        } else if ("ArrowDown" === e.key) {
            e.preventDefault();
            // Open and focus first item
            toggleProjectDocs(true, false);
            scheduleFocus(focusFirstProjectDocsItem);
        } else if ("ArrowUp" === e.key) {
            e.preventDefault();
            // Open and focus last item
            toggleProjectDocs(true, false);
            scheduleFocus(focusLastProjectDocsItem);
        } else if ("Escape" === e.key) {
            toggleProjectDocs(false);
        }
    };

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const controller = new AbortController();
        fetch("https://api.github.com/repos/y-scope/clp", {signal: controller.signal})
            .then((res) => (res.ok ?
                res.json() :
                null))
            .then((data: {stargazers_count?: number} | null) => {
                if (data && "number" === typeof data.stargazers_count) {
                    setGithubStars(data.stargazers_count);
                }
            })
            .catch((err: unknown) => {
                if (err instanceof DOMException && "AbortError" === err.name) {
                    return;
                }
                console.error("Failed to fetch GitHub stars:", err);
            });

        return () => {
            controller.abort();
        };
    }, []);

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
                            src={"/assets/images/clp-logo.svg"}
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
                            onFocus={() => { toggleProjectDocs(true, false); }}
                            onBlur={handleProjectDocsBlur}
                            ref={projectDocsContainerRef}
                        >
                            <Button
                                className={"flex items-center gap-1"}
                                variant={"navlink"}
                                aria-haspopup={"menu"}
                                aria-expanded={projectDocsOpen}
                                onClick={() => { toggleProjectDocs(); }}
                                onKeyDown={handleProjectDocsKeyDown}
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
                                        <Button
                                            isChild={true}
                                            key={link.href}
                                            className={"flex"}
                                            variant={"navlink"}
                                        >
                                            <a
                                                    className={"text-decoration-none text-sm"}
                                                    tabIndex={0}
                                                    onKeyDown={(ev) => {
                                                        const target = ev.currentTarget as HTMLElement;
                                                        if ("ArrowDown" === ev.key) {
                                                            ev.preventDefault();
                                                            focusRelativeProjectDocsItem(target, 1);
                                                        } else if ("ArrowUp" === ev.key) {
                                                            ev.preventDefault();
                                                            focusRelativeProjectDocsItem(target, -1);
                                                        } else if ("Escape" === ev.key) {
                                                            toggleProjectDocs(false);
                                                        }
                                                    }}
                                                href={link.href}
                                                onClick={(e) => {
                                                    // Prevent parent onClick, which goes to /#solutions,
                                                    // from running when clicking a specific solution link.
                                                    e.stopPropagation();
                                                }}
                                            >
                                                {link.name}
                                            </a>
                                        </Button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </nav>
                </div>

                {/* Desktop Actions */}
                <div className={"hidden lg:flex items-center gap-3"}>
                    <Button
                        isChild={true}
                        className={"h-8 dev-docs-btn"}
                        size={"sm"}
                    >
                        <a
                            className={"flex items-center text-decoration-none text-xs text-white"}
                            href={"/dev-guide/"}
                        >
                            Dev Docs
                        </a>
                    </Button>
                    <Button
                        isChild={true}
                        className={"h-8 px-2"}
                        size={"sm"}
                        variant={"github"}
                    >
                        <a
                            aria-label={"View CLP on GitHub"}
                            className={"flex items-center gap-2 no-underline text-xs"}
                            href={"https://github.com/y-scope/clp"}
                            rel={"noopener noreferrer"}
                            target={"_blank"}
                        >
                            <GithubIcon
                                height={20}
                                width={20}/>
                            {null !== githubStars && (
                                formatNumber(githubStars)
                            )}
                        </a>
                    </Button>
                    {mounted && (
                        <Button
                            aria-label={"dark" === theme ?
                                "Switch to light mode" :
                                "Switch to dark mode"}
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
                            aria-label={"Open navigation menu"}
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
                                <h3 className={"flex items-center text-xs font-medium"}>
                                    Project Docs
                                </h3>
                                {projectDocsLinks.map((link) => (
                                    <SheetClose
                                        asChild={true}
                                        key={link.href}
                                    >
                                        <Button
                                            isChild={true}
                                            className={"flex text-decoration-none"}
                                            style={{marginLeft: "1.25rem"}}
                                            variant={"navlink"}
                                        >
                                            <a
                                                href={link.href}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                }}
                                            >
                                                {link.name}
                                            </a>
                                        </Button>
                                    </SheetClose>
                                ))}
                            </div>
                            <div className={"mt-auto pb-8 space-y-3"}>
                                <Button
                                    isChild={true}
                                    className={"w-full dev-docs-btn"}
                                >
                                    <a
                                        className={"text-decoration-none text-white"}
                                        href={"/dev-guide/"}
                                    >
                                        Dev Docs
                                    </a>
                                </Button>
                                <Button
                                    isChild={true}
                                    className={"w-full"}
                                    variant={"github"}
                                >
                                    <a
                                        aria-label={"View CLP on GitHub"}
                                        href={"https://github.com/y-scope/clp"}
                                        rel={"noopener noreferrer"}
                                        target={"_blank"}
                                        className={"flex items-center justify-center gap-2 " +
                                            "no-underline"}
                                    >
                                        <GithubIcon
                                            height={20}
                                            width={20}/>
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
