"use client";
import React from "react";


type AdmonitionType = "note" | "tip" | "warning" | "info" | "code" | "danger";

interface Props {
    type?: AdmonitionType;
    title?: string;
    children?: React.ReactNode;
}

const titleMap: Record<AdmonitionType, string> = {
    note: "Note",
    tip: "Tip",
    warning: "Warning",
    info: "Info",
    code: "Code",
    danger: "Danger",
};

/**
 *
 * @param root0
 * @param root0.type
 * @param root0.title
 * @param root0.children
 */
const Admonition = ({type, title, children}: Props) => {
    const displayTitle = title || titleMap[type];

    return (
        <div
            aria-label={displayTitle}
            className={`admonition ${type}`}
            role={"region"}
        >
            <p className={`admonition-${type}-title`}>
                {displayTitle}
            </p>
            <div>
                {children}
            </div>
        </div>
    );
};

export default Admonition;
