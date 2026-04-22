import CommonConfig from "eslint-config-yscope/CommonConfig.mjs";
import ReactConfigArray from "eslint-config-yscope/ReactConfigArray.mjs";
// Stylistic rules load the @stylistic plugins which can cause ESM/CJS
// require() cycles with some plugin loaders. Omit them here as a
// temporary workaround to allow linting to run.
// import StylisticConfigArray from "eslint-config-yscope/StylisticConfigArray.mjs";
import TsConfigArray from "eslint-config-yscope/TsConfigArray.mjs";


const EslintConfig = [
    {
        ignores: [
            "dist/",
            "node_modules/",
        ],
    },
    CommonConfig,
    ...TsConfigArray,
    // StylisticConfigArray,
    ...ReactConfigArray,
];


export default EslintConfig;
