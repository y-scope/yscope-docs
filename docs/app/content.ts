export const getCategories = (prestoSrc: string, mcpSrc: string) => {
    return [
        {
            title: "Deploy CLP",
            items: [
                {
                    href: "/clp/main/user-docs/quick-start/index",
                    imgAlt: "Single-node",
                    imgSrc: "/assets/images/single-node.svg",
                    label: "Single Node",
                },
                {
                    href: "/clp/main/user-docs/guides-docker-compose-deployment.html",
                    imgAlt: "Docker Compose",
                    imgSrc: "/assets/images/docker-compose_icon.svg",
                    label: "Docker Compose",
                },
                {
                    href: "/clp/main/user-docs/guides-k8s-deployment.html",
                    imgAlt: "Kubernetes",
                    imgSrc: "/assets/images/kubernetes.svg",
                    label: "Kubernetes",
                },
            ],
        },
        {
            title: "Log Input",
            items: [
                {
                    href: "/clp/main/user-docs/guides-using-object-storage/index",
                    imgAlt: "S3",
                    imgSrc: "/assets/images/s3.svg",
                    label: "S3",
                },
                {
                    external: true,
                    href: "https://github.com/y-scope/clp-loglib-py",
                    imgAlt: "Python Library",
                    imgSrc: "/assets/images/python.svg",
                    label: "Python",
                },
                {
                    href: "/clp/main/user-docs/guides-using-log-ingestor.html",
                    imgAlt: "Log Ingestor",
                    imgSrc: "/assets/images/log-ingestor.svg",
                    label: "Log Ingestor",
                },
            ],
        },
        {
            title: "Analyze & View",
            items: [
                {
                    href: "/clp/main/user-docs/guides-using-presto.html",
                    imgAlt: "Presto",
                    imgSrc: prestoSrc,
                    imgStyle: {transform: "scale(1.2)", transformOrigin: "center"},
                    label: "Presto",
                },
                {
                    href: "/clp/main/user-docs/guides-mcp-server/index.html",
                    imgAlt: "MCP",
                    imgSrc: mcpSrc,
                    label: "MCP Server",
                },
                {
                    href: "/clp/main/user-docs/guides-using-the-api-server.html",
                    imgAlt: "API Server",
                    imgSrc: "/assets/images/api-server.svg",
                    label: "API Server",
                },
                {
                    href: "/yscope-log-viewer/main/",
                    imgAlt: "Log viewer",
                    imgSrc: "/assets/images/log-viewer_icon.svg",
                    label: "Log Viewer",
                },
                {
                    href: "/clp/main/user-docs/reference-json-search-syntax",
                    imgAlt: "JSON Search",
                    imgSrc: "/assets/images/json.svg",
                    label: "JSON Search",
                },
                {
                    href: "/clp/main/user-docs/reference-text-search-syntax",
                    imgAlt: "Text Search",
                    imgSrc: "/assets/images/text.svg",
                    label: "Text Search",
                },
            ],
        },
        {
            title: "Resources",
            items: [
                {
                    href: "/clp/main/user-docs/resources-datasets.html",
                    imgAlt: "Datasets",
                    imgSrc: "/assets/images/datasets.svg",
                    label: "Datasets",
                },
                {
                    external: true,
                    href: "https://benchmarks.yscope.com/log-archival-bench/",
                    imgAlt: "Benchmarks",
                    imgSrc: "/assets/images/benchmarks.svg",
                    label: "Benchmarks",
                },
                {
                    external: true,
                    href: "https://blog.yscope.com/",
                    imgAlt: "Blog",
                    imgSrc: "/assets/images/blog.svg",
                    label: "Blog",
                },
            ],
        },
        {
            title: "References",
            items: [
                {
                    href: "/clp/main/user-docs/reference-sbin-scripts/index",
                    imgAlt: "Package Scripts",
                    imgSrc: "/assets/images/scripts.svg",
                    label: "Package Scripts",
                },
                {
                    href: "/clp/main/user-docs/reference-unstructured-schema-file",
                    imgAlt: "Schema File Syntax",
                    imgSrc: "/assets/images/schema-file-syntax.svg",
                    label: "Schema File Syntax",
                },
                {
                    external: true,
                    href: "https://www.yscope.com/publications",
                    imgAlt: "Publications",
                    imgSrc: "/assets/images/publications.svg",
                    label: "Publications",
                },
            ],
        },
    ];
};

export type Category = {title: string; items: Array<any>};
