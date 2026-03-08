import {GoogleAnalytics} from "@next/third-parties/google";
import type {
    Metadata,
    Viewport,
} from "next";
import {
    Geist,
    Geist_Mono,
} from "next/font/google";
import Script from "next/script";

import Footer from "../components/sections/Footer";
import Navbar from "../components/sections/Navbar";

import "./assets/scss/styles.scss";


const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});


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
            <head>
                <link
                    href={"https://fonts.googleapis.com"}
                    rel={"preconnect"}/>
                <link
                    crossOrigin={""}
                    href={"https://fonts.gstatic.com"}
                    rel={"preconnect"}/>
                <link
                    href={"https://fonts.googleapis.com/css2?family=ABeeZee&display=swap"}
                    rel={"stylesheet"}/>
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <Script
                    src={"/bootstrap.bundle.min.js"}
                    strategy={"afterInteractive"}/>
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
