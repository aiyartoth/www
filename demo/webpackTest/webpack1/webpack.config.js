const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

//定义一些路径
const ROOT_PATH = path.resolve(__dirname);
const SRC_PATH = path.resolve(ROOT_PATH, "src");
const BUILD_PATH = path.resolve(ROOT_PATH, "build");

module.exports = {
    entry: path.join(__dirname, "src/js/main.js"),
    output: {
        path: BUILD_PATH,
        filename: "[name]-[hash:6].js"
    },
    devServer: {
        inline: true,
        port: 8090
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            include: path.join(__dirname, 'src'),
            exclude: /node_modules/,
            options: {
                presets: ['es2015']
            }
        },
            {
                test:/\.less$/,
                loader:"style!css!less"
            }
        ]
    },
    plugins: [
        // new HtmlWebpackPlugin(),
        new HtmlWebpackPlugin({
            // template: "./src/index.html"
            // title:"Hello World app",
            // filename:"app1/home.html",
            template:"src/html/index.html",
            inject:true,
            hash:true,
            minify:{
                // removeComments:true,
                // collapseWhitespace:true
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings:false
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
};
