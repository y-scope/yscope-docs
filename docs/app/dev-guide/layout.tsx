import React from "react";

import type {Metadata} from "next";


export const metadata: Metadata = {
    title: "YScope — Developer Guide",
    description: "Developer guide for YScope: contribution guidelines, integrations, taskfiles, " +
    "and deployment.",
};

/**
 * Layout wrapper for the developer guide pages.
 *
 * @param root0 Component props.
 * @param root0.children Page content to render.
 * @return The children elements to render.
 */
const DevGuideLayout = ({children}: {children: React.ReactNode}) => {
    return children;
};

export default DevGuideLayout;
