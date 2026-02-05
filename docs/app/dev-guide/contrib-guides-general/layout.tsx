import React from "react";

import type {Metadata} from "next";


export const metadata: Metadata = {
    title: "General Contributor Guidelines | YScope Developer Guide",
    description: "General contribution guidelines for YScope: coding standards, PR process, and " +
    "review expectations.",
};

/**
 * Layout wrapper for the general contribution guide pages.
 *
 * @param root0 Component props.
 * @param root0.children Page content to render.
 * @return The children elements to render.
 */
const GeneralGuidelinesLayout = ({children}: {children: React.ReactNode}) => {
    return children;
};

export default GeneralGuidelinesLayout;
