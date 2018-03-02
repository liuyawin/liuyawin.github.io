module.exports = {
    entry: {
        index: "./src/index"
    },
    output: {
        filename: "[name].js"
    },
    devtool: "source-map",
    resolve: {
        extensions: [".js"]
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /^node_modules$/,
                query: {
                    presets: ["es2015"]
                }
            }
        ]
    }
}