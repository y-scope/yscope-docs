import React from "react";

import type {Metadata} from "next";


export const metadata: Metadata = {
    title: "Deploying Main Docs | YScope Developer Guide",
    description: "Instructions for deploying the main documentation site for YScope and related " +
    "projects.",
};

/**
 * Layout wrapper for the deploying main docs guide pages.
 *
 * @param root0 Component props.
 * @param root0.children Page content to render.
 * @return The children elements to render.
 */
const DeployingMainDocsLayout = ({children}: {children: React.ReactNode}) => {
    return children;
};

export default DeployingMainDocsLayout;
