/** @import * as next from 'next'; */
// eslint-disable @typescript-eslint/require-await
// eslint-disable @typescript-eslint/no-unsafe-assignment
// eslint-disable sort-keys

/** @type {next.NextConfig} */
const config = {
    changefreq: "daily",
    exclude: ["/api/*"],
    generateRobotsTxt: true,
    priority: 0.7,
    siteUrl: "https://www.yscope.com",
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
