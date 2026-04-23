import {GoogleAnalytics} from "@next/third-parties/google";
import type {
    Metadata,
    Viewport,
} from "next";
import {
    ABeeZee as abeezeeFont,
    Geist as geistFont,
    Geist_Mono as geistMonoFont
} from "next/font/google";
import Script from "next/script";

import Footer from "../components/sections/Footer";
import Navbar from "../components/sections/Navbar";
import {ThemeProvider} from "./shared/ThemeProvider";

import "./assets/scss/styles.scss";


const geistSans = geistFont({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = geistMonoFont({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const abeezee = abeezeeFont({
    variable: "--font-abeezee",
    subsets: ["latin"],
    display: "swap",
    weight: ["400"],
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
            <head>
                <script
                    dangerouslySetInnerHTML={{__html: `(() => {
                        try {
                            var stored = null;
                            try { stored = localStorage.getItem('ui-theme'); } catch(e) {}
                            var prefersDark = false;
                            try { prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches; } catch(e) {}
                            var theme = (stored === 'dark' || stored === 'light') ? stored : (prefersDark ? 'dark' : 'light');
                            document.documentElement.setAttribute('data-bs-theme', theme);
                        } catch (e) {
                            // ignore
                        }
                    })();`}}/>
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable} ${abeezee.variable}`}>
                <Script
                    src={"/bootstrap.bundle.min.js"}
                    strategy={"afterInteractive"}/>
                <ThemeProvider>
                    <Navbar/>
                    {children}
                    <Footer/>
                </ThemeProvider>
            </body>
            <GoogleAnalytics gaId={"G-C4R8TV71EE"}/>
        </html>
    );
};

export default RootLayout;
