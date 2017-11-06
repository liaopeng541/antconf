/**
 * Created by liaopeng on 2017/8/29.
 */
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    entry:{
        index:"./src/js/index",
        login:"./src/js/admin/login",
        admin:"./src/js/admin/main"

    },
    output: {
        path: __dirname+'/build',
        filename: '[name].js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]' },
            /*
            {
                test: /\.css$/,
                loader:  ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]' })
            }
            */
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude:/node_modules/,

            },{
                test: /\.json$/,
                loader: "json-loader"
            },{
                test: /\.less$/,

                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                },]}
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new HtmlWebpackPlugin({
            template: './src/html/index.html', //模板路径
            filename: "index.html",
            chunks:["index"]
        }),
        new HtmlWebpackPlugin({
            template: './src/html/login.html', //模板路径
            filename: "login.html",
            chunks:["login"]
        }),
        new HtmlWebpackPlugin({
            template: './src/html/admin.html', //模板路径
            filename: "admin.html",
            chunks:["admin"]
        }),
    ],
    externals:{
        "react":"React",
        "react-dom":"ReactDOM"
    }

}