import React from "react";

import type {Metadata} from "next";


export const metadata: Metadata = {
    title: "Taskfiles | YScope Developer Guide",
    description: "Guidelines for writing and maintaining Taskfiles used across YScope projects.",
};

/**
 * Layout wrapper for the taskfiles contribution guide pages.
 *
 * @param root0 Component props.
 * @param root0.children Page content to render.
 * @return The children elements to render.
 */
const TaskfilesLayout = ({children}: {children: React.ReactNode}) => {
    return children;
};

export default TaskfilesLayout;
