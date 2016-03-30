require("path");
require("webpack");

module.exports = {
    entry: "./src/main.jsx",
    output: { path: __dirname, filename: "build.js" },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ["es2015", "react"]
                }
            }
        ]
    },
    target: "electron",
    resolve: {
        extensions: ["", ".js", ".jsx"]
    }
};
