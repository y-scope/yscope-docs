import React from "react";

import type {Metadata} from "next";


export const metadata: Metadata = {
    title: "C++ Contirbution | YScope Developer Guide",
    description: "C++ contribution guidelines and integration notes for YScope components " +
    "written in C++.",
};

/**
 * Layout wrapper for the C++ contribution guide pages.
 *
 * @param root0 Component props.
 * @param root0.children Page content to render.
 * @return The children elements to render.
 */
const CppLayout = ({children}: {children: React.ReactNode}) => {
    return children;
};

export default CppLayout;
