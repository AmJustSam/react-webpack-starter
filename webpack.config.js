const path = require('path');
//const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "eval-cheap-source-map",                        // false ,,, for production builds.
  entry: path.resolve(__dirname, 'src/index.js'),
  mode: "development",
  module: {
    rules: [
       {test: /\.js$/, exclude: /node_modules/, use: {loader: "babel-loader"}},
       {test: /\.css$/i, use: ["style-loader","css-loader"]},
       {test: /\.s[ac]ss$/i, use: ["style-loader", "css-loader", "sass-loader"]},
       {test: /\.(png|jpe?g|gif)$/i, use: { loader: 'file-loader'}}
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',                                   // [name].[contenthash].js  ,,,, when in production.
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      // favicon: "./public/favicon.ico"
    })
  ],
  
  devServer: { 
    historyApiFallback: true,                                 // historyApiFallback when using dev server.
  },

  // optimization: {
  //   runtimeChunk: 'single',
  //   splitChunks: {
  //     chunks: 'all',
  //     maxInitialRequests: Infinity,
  //     minSize: 0,
  //     cacheGroups: {
  //       vendor: {
  //         test: /[\\/]node_modules[\\/]/,                       // will match exactly this --> "/node_modules/"
      
  //         // Normally, you would just define a name for the output file as a string.
  //         // But I’m defining name as a function (which will be called for every parsed file)
  //         // As a result, we’ll get one file for each package, e.g. npm.react-dom.899sadfhj4.js

  //         name(module) {
  //           // get the name. E.g. node_modules/packageName/not/this/part.js
  //           // or node_modules/packageName

  //           const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

  //           // npm package names are URL-safe, but some servers don't like @ symbols
  //           return `npm.${packageName.replace('@', '')}`;
  //         },
  //       },
  //     },
  //   },
  // },
};
