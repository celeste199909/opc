const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");

module.exports = {
    entry: "./src/js/main.js",
    output: {
        path: resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: "css-loader",
                        options: {
                            // 启用/禁用 url() 处理
                            url: true,
                            // 启用/禁用 @import 处理
                            import: true,
                            // 启用/禁用 Sourcemap
                            // sourceMap: false
                        }
                    }
                ]
            },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, "src/index.html")
        })
    ],
    devServer: {
        contentBase: "./src",
        open: true
    }
}