// @ts-nocheck
const nextConfig = {
    output: "export",
    trailingSlash: true,
    turbopack: {},

    /**
     *
     */
    async rewrites () {
        return [
            {
                source: "/:path*\\.html",
                destination: "/:path*",
            },
        ];
    },
};

module.exports = nextConfig;
