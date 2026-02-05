import {GoogleAnalytics} from "@next/third-parties/google";
import type {
    Metadata,
    Viewport,
} from "next";

import Footer from "./Footer";
import Navbar from "./Navbar";

import "./assets/scss/styles.scss";


export const metadata: Metadata = {
    title: "YScope — CLP Documentation & Guides",
    description: "Comprehensive documentation for CLP and YScope's other projects: installation, " +
    "configuration, usage, and API references for users and developers.",
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
};

import {ThemeProvider} from "./shared/ThemeProvider";


/**
 * Renders root layout.
 *
 * @param root0
 * @param root0.children
 * @return root layout for the site.
 */
const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang={"en"}>
            <GoogleAnalytics gaId={"G-C4R8TV71EE"}/>
            <body>
                <ThemeProvider>
                    <Navbar/>
                    {children}
                    <Footer/>
                </ThemeProvider>
            </body>
        </html>
    );
};

export default RootLayout;
