var webpack = require('webpack');
var path = require('path');
var proxy = require('http-proxy-middleware');

module.exports = {
    entry:'./index.js',
    output:{
        publicPath:'',
        filename:'bundle.js'
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                exclude: /node_modules/,
                loader:'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-0'
            }
            // {
            //     test: /\.css$/,
            //     loader: 'style-loader!css-loader'
            // },
            // {
            //     test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
            //     loader: 'file-loader'
            // },
            // {
            //     test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
            //     loader: 'file-loader',
            //     query: {
            //         name: '[name].[ext]?[hash]'
            //     }
            // }
        ]    
    }
    // devServer:{
    //     proxy:{
    //         '/api':{
    //             target: 'http://api.douban.com', // 设置的是代理对象地址
    //             pathRewrite: {'^/api':'/'}, //重新路径
    //             changeOrigin: true
    //         },
    //         // http://api.douban.com/v2/movie/top250 -->  api/v2/moive/top250
    //     }
    // },
    // resolve: {
    //     alias: {
    //       'react': path.join(__dirname, 'node_modules', 'react')
    //     },
    //     extensions: ['js', '.jsx']
    // }
}