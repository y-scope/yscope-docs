import type { NextConfig } from "next";
import path from "path";


const nextConfig: NextConfig = {
    output: "export",
    trailingSlash: true,
    sassOptions: {
        includePaths: [path.join(__dirname, "node_modules")],
    },
};

export default nextConfig;
