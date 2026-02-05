// eslint-disable @typescript-eslint/require-await
// eslint-disable @typescript-eslint/no-unsafe-assignment
// eslint-disable sort-keys

/** @type {import('next').NextConfig} */
const config = {
    changefreq: "daily",
    exclude: ["/api/*"],
    generateRobotsTxt: true,
    priority: 0.7,
    siteUrl: "https://www.docs.yscope.com",
    sitemapSize: 5000,
    transform: (_config, path) => {
        return {
            loc: path,
            lastmod: new Date().toISOString(),
            changefreq: "daily",
            priority: 0.7,
        };
    },
};

export default config;
