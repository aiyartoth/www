let path = require("path");
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var htmlWwebpackPlugin = require('html-webpack-plugin');
var extractTextPlugin=require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: path.resolve(__dirname, "src/js/main.js"),
        // vendor:'moment'
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[hash:5].js"
    },
    module: {
        rules: [
            /*{
                test: /\.css$/,
                // use: 'css-loader',
                use: ['style-loader',
                    {
                        loader: 'css-loader', options: {
                        importLoaders: 1
                    }
                    }, 'postcss-loader']
                /!*use: ExtractTextWebpackPlugin.extract({
                    use: 'css-loader'
                })*!/
            },*/
            {
                test:/\.css$/,
                use:extractTextPlugin.extract({
                    fallback:"style-loader",
                    use:[
                        {loader:'css-loader',options:{importLoaders:1}},
                        'postcss-loader'
                    ]
                })
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            }
        ]
    },
    plugins: [
        new htmlWwebpackPlugin({
            filename:"index.html",
            template:"src/index.html"
        }),
        new extractTextPlugin('css/[name].css')
        // new ExtractTextWebpackPlugin('style.css'),
        /*new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module) {
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        })*/
    ]
};
