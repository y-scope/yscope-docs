// @ts-nocheck
const nextConfig = {
    output: "export",
    trailingSlash: true,
    experimental: {
        turboPack: true, // Enable Turbopack
    },

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
