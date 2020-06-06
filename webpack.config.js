/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlInjectPlugin = require('html-inject-plugin');

module.exports = {
    mode: 'development',
    entry: { // 入口文件
        main: './client/src/main.ts'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    "babel-loader",
                    {
                        loader: "ts-loader",
                        options: { appendTsxSuffixTo: [/\.vue$/] }
                    }
                ]
            },
            {
                test: /\.vue$/,
                include: [path.join(__dirname, './client/src')],
                loader: 'vue-loader',
                options: {
                    extractCSS: true
                }
            },
            {
                test: /\.html?$/,
                loader: 'html-loader'
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    useRelativePath: false,
                    publicPath: '/dist/',
                    name: 'images/[hash:8].[name].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.json', '.ts'],
        alias: {
            '@': require('path').resolve(__dirname, './client/src')
        }
    },
    watch: true,
    watchOptions: { // 不监听目录
        ignored: [/node_modules/, '/static/']
    },
    output: {
        filename: '[name].js?v=[hash]',
        path: path.resolve(__dirname, './static/dist'),
        publicPath: './dist/'
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                path.resolve(__dirname, './static/dist'),
                path.resolve(__dirname, './server/views')
            ]
        }),
        new HtmlInjectPlugin({
            filename: './../../server/views/index.html',
            chunks: ['main'],
            crossorigin: 'anonymous',
            template: path.resolve(__dirname, './client/public/index.html')
        }),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({ // 提取为外部css代码
            filename: '[name].css?v=[contenthash]'
        })
    ]
};