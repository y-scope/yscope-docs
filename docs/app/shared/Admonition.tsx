"use client";
import React from "react";


type AdmonitionType = "note" | "tip" | "warning" | "info" | "code" | "danger";

interface Props {
    type?: AdmonitionType;
    title?: string;
    children?: React.ReactNode;
}

const titleMap: Record<AdmonitionType, string> = {
    code: "Code",
    danger: "Danger",
    info: "Info",
    note: "Note",
    tip: "Tip",
    warning: "Warning",
};

/**
 * Renders an admonition component with a specified type, title, and content.
 *
 * @param root0 The component props
 * @param root0.type The type of admonition (note, tip, warning, info, code, or danger)
 * @param root0.title Optional custom title for the admonition
 * @param root0.children The content to display within the admonition
 * @return A styled admonition component
 */
const Admonition = ({type = "note", title, children}: Props) => {
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
