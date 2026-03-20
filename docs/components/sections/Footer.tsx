"use client";
import {
    SiLinkedin,
    SiYoutube,
} from "react-icons/si";

import {Mail} from "lucide-react";


/**
 * Footer component for the YScope Docs website.
 *
 * @return The rendered footer section.
 */
const Footer = () => {
    return (
        <footer>
            <div className={"container"}>
                <div className={"row justify-content-center"}>
                    <div className={"col-lg-6 mb-3 text-center"}>
                        <a
                            className={"logo"}
                            href={"/"}
                            style={{
                                textDecoration: "none",
                                userSelect: "none",
                                fontSize: "2rem",
                            }}
                        >
                            YScope
                        </a>
                        <h5
                            style={{fontSize: "1.2rem"}}
                        >
                            The Future of Debugging
                        </h5>
                        <div
                            className={"d-flex col-12 justify-content-center"}
                        >
                            <a
                                className={"nav-link-btn-alt"}
                                href={"https://www.linkedin.com/company/yscope"}
                                rel={"noopener noreferrer"}
                                style={{marginRight: "1rem"}}
                                target={"_blank"}
                            >
                                <SiLinkedin size={18}/>
                            </a>
                            <a
                                className={"nav-link-btn-alt"}
                                href={"https://www.youtube.com/channel/UC9y5QY1pdXcYfaYnwFuk18Q"}
                                rel={"noopener noreferrer"}
                                style={{marginRight: "1rem"}}
                                target={"_blank"}
                            >
                                <SiYoutube size={18}/>
                            </a>
                            <a
                                className={"nav-link-btn-alt"}
                                href={"mailto:info@yscope.com"}
                                rel={"noopener noreferrer"}
                                target={"_blank"}
                            >
                                <Mail size={18}/>
                            </a>
                        </div>
                        <div className={"col-12"}>
                            <p
                                style={{
                                    color: "grey",
                                    fontSize: "0.85rem",
                                    paddingTop: "0.25rem",
                                }}
                            >
                                W866-108 College St., Toronto,
                                <br/>
                                ON M5G 0C6, Canada.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"row"}>
                <p
                    className={"text-center"}
                    style={{fontSize: "0.8rem"}}
                >
                    Copyright © 2015-2026 YScope Inc.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
