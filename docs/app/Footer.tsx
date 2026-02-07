"use client";

/**
 * Footer component for the YScope Docs website.
 *
 * @return The rendered footer section.
 */
const Footer = () => {
    return (
        <footer>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-lg-6 mb-3"}>
                        <div className={"d-flex flex-row vertical-align-base"}>
                            <a
                                className={"navbar-brand logo"}
                                href={"https://www.yscope.com/"}
                                style={{
                                    textDecoration: "none",
                                    userSelect: "none",
                                    fontSize: "2rem",
                                }}
                            >
                                YScope
                            </a>
                            <h5
                                style={{fontSize: "1rem", marginLeft: "0.5rem", marginTop: "1rem"}}
                            >
                                The Future of Debugging
                            </h5>
                        </div>
                        <div className={"col-6 text-center"}>
                            <a
                                href={"https://www.linkedin.com/company/yscope"}
                                rel={"noopener noreferrer"}
                                target={"_blank"}
                            >
                                <i className={"bi bi-linkedin"}/>
                            </a>
                            {" "}
                            <a
                                href={"https://www.youtube.com/channel/UC9y5QY1pdXcYfaYnwFuk18Q"}
                                rel={"noopener noreferrer"}
                                target={"_blank"}
                            >
                                <i className={"bi bi-youtube"}/>
                            </a>
                            {" "}
                            <a
                                href={"mailto:info@yscope.com"}
                                rel={"noopener noreferrer"}
                                target={"_blank"}
                            >
                                <i className={"bi bi-envelope"}/>
                            </a>
                        </div>
                    </div>
                    <div className={"col-lg-6 text-md-end"}>
                        <p
                            style={{
                                color: "grey",
                                fontSize: "0.85rem",
                                paddingTop: "0.5rem",
                            }}
                        >
                            YScope Inc.
                            <br/>
                            W866-108 College St., Toronto,
                            <br/>
                            ON M5G 0C6, Canada.
                        </p>
                    </div>
                </div>
            </div>
            <div className={"row"}>
                <p
                    className={"text-center"}
                    style={{fontSize: "0.8rem"}}
                >
                    Copyright © 2015-2025 YScope Inc.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
