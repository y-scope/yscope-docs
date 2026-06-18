/** `@type` {import('next-sitemap').IConfig} */
const config = {
    changefreq: "daily",
    exclude: ["/api/*"],
    generateRobotsTxt: true,
    priority: 0.7,
    siteUrl: "https://docs.yscope.com/",
    sitemapSize: 5000,
    transform: (_config, path) => {
        return {
            loc: path,
            lastmod: new Date().toISOString(),
            changefreq: _config.changefreq,
            priority: _config.priority,
        };
    },
};

export default config;
