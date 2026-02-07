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
 *
 * @param root0
 * @param root0.text
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
 *
 * @param root0
 * @param root0.code
 * @param root0.language
 * @param root0.filename
 * @param root0.showCopy
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
