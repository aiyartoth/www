let path = require("path");
let webpack = require("webpack");
let HtmlWebpackPlugin = require("html-webpack-plugin");

function resolve_path(pathName) {
    return path.resolve(__dirname, pathName);
}

module.exports = {
    entry: {
        app: resolve_path("./src/main.js")
    },
    output: {
        path: resolve_path("./dist/"),
        filename: "js/[name]-[hash:5].js",
        publicPath: ""
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: resolve_path("node_modules"),
                use: [{
                    loader: "babel-loader",
                    /*options: {
                        "presets": ["es2015", "stage-2"],
                        "plugins": []
                    }*/
                }]
            },
            {
                test: /\.css$/,
                use: ["style-loader", {
                    loader: "css-loader",
                    options: {}
                }]
            },
            {
                test: /\.styl$/,
                use: ['style-loader', 'css-loader', 'stylus-loader']
            },
            {
                test: /\.vue$/,
                use: "vue-loader"
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: resolve_path("src/index.html"),
            inject: "body"
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery',
        })
    ],
    resolve: {
        alias: {
            "src": resolve_path("src")
        }
    },
    devServer: {
        historyApiFallback: true,
        inline: true,
        host: "localhost",
        open: true,
        port: 80
    },
    externals: {
        // jquery:"jQuery"
        bmap:"BMap"
    },
};