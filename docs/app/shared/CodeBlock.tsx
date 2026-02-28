"use client";
import React, {
    useEffect,
    useRef,
    useState,
} from "react";

import Prism from "prismjs";

import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-yaml";
import "prismjs/components/prism-json";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prismjs/themes/prism-tomorrow.css";


/**
 * A button component that copies text to the clipboard with visual feedback.
 *
 * @param root0
 * @param root0.text The text content to copy when the button is clicked
 * @return A button element that copies text and shows a "Copied" confirmation
 */
const CopyButton = ({text}: {text: string}) => {
    const [copied, setCopied] = useState(false);
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
            }, 1500);
        } catch (e) {
            // ignore
        }
    };

    return (
        <button
            className={"btn btn-sm btn-outline-secondary"}
            type={"button"}
            aria-label={copied ?
                "Copied" :
                "Copy code"}
            onClick={handleCopy}
        >
            {copied ?
                "Copied" :
                "Copy"}
        </button>
    );
};

/**
 * A syntax-highlighted code block component with optional filename display and copy button.
 *
 * @param root0
 * @param root0.code The code content to display
 * @param root0.language The programming language for syntax highlighting (optional)
 * @param root0.filename The filename to display above the code (optional)
 * @param root0.showCopy Whether to display a copy button (optional)
 * @return A code block element with syntax highlighting and optional features
 */
const CodeBlock = ({
    code,
    language,
    filename,
    showCopy,
}: {
    code: string;
    language?: string;
    filename?: string;
    showCopy?: boolean;
}) => {
    const codeRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (codeRef.current) {
            try {
                Prism.highlightElement(codeRef.current);
            } catch (e) {
                // fallback: do nothing
            }
        }
    }, [code,
        language]);

    return (
        <div className={"codeblock"}>
            {filename && <div className={"code-filename"}>
                {filename}
            </div>}
            <div style={{position: "relative"}}>
                <pre className={`language-${language}`}>
                    <code
                        className={`language-${language}`}
                        ref={codeRef}
                    >
                        {code}
                    </code>
                </pre>
                {showCopy && (
                    <div style={{position: "absolute", top: 6, right: 6}}>
                        <CopyButton text={code}/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CodeBlock;
