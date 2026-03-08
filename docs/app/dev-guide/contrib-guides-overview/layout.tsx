import React from "react";

import type {Metadata} from "next";


export const metadata: Metadata = {
    title: "Contribution Overview | Yscope Developer Guide",
    description: "Overview of contribution guidelines for Yscope: processes, expectations, and " +
    "best practices.",
};

/**
 * Layout wrapper for the developer guide pages.
 *
 * @param root0 Component props.
 * @param root0.children Page content to render.
 * @return The children elements to render.
 */
const ContributionOverviewLayout = ({children}: {children: React.ReactNode}) => {
    return children;
};

export default ContributionOverviewLayout;
