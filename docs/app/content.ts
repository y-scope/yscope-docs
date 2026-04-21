import type {CSSProperties} from "react";


export type CategoryItem = {
    href: string;
    imgAlt: string;
    imgSrc: string;
    label: string;
    external?: boolean;
    imgStyle?: CSSProperties;
};

export const getCategories = (prestoSrc: string, mcpSrc: string) => {
    return [
        {
            title: "Deploy CLP",
            items: [
                {
                    href: "/dev-guide/user-docs/quick-start/",
                    imgAlt: "Single-node",
                    imgSrc: "/assets/images/single-node.svg",
                    label: "Single Node",
                },
                {
                    href: "/dev-guide/user-docs/guides-docker-compose-deployment/",
                    imgAlt: "Docker Compose",
                    imgSrc: "/assets/images/docker-compose_icon.svg",
                    label: "Docker Compose",
                },
                {
                    href: "/dev-guide/user-docs/guides-k8s-deployment/",
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
                    href: "/dev-guide/user-docs/guides-using-object-storage/",
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
                    href: "/dev-guide/user-docs/guides-using-log-ingestor/",
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
                    href: "/dev-guide/user-docs/guides-using-presto/",
                    imgAlt: "Presto",
                    imgSrc: prestoSrc,
                    imgStyle: {transform: "scale(1.2)", transformOrigin: "center"},
                    label: "Presto",
                },
                {
                    href: "/dev-guide/user-docs/guides-mcp-server/",
                    imgAlt: "MCP",
                    imgSrc: mcpSrc,
                    label: "MCP Server",
                },
                {
                    href: "/dev-guide/user-docs/guides-using-the-api-server/",
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
                    href: "/dev-guide/user-docs/reference-json-search-syntax/",
                    imgAlt: "JSON Search",
                    imgSrc: "/assets/images/json.svg",
                    label: "JSON Search",
                },
                {
                    href: "/dev-guide/user-docs/reference-text-search-syntax/",
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
                    href: "/dev-guide/user-docs/resources-datasets/",
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
                    href: "/dev-guide/user-docs/reference-sbin-scripts/",
                    imgAlt: "Package Scripts",
                    imgSrc: "/assets/images/scripts.svg",
                    label: "Package Scripts",
                },
                {
                    href: "/dev-guide/user-docs/reference-unstructured-schema-file/",
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

export type Category = {title: string; items: Array<CategoryItem>};
