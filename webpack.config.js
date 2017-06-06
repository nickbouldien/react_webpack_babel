

var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
    ]
  },
  devServer: {
    historyApiFallback:true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]
};


// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
//
// module.exports = {
//   entry: './app/index.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'index_bundle.js'
//   },
//   module: {
//     rules: [
//       { test: /\.(js)$/, use: 'babel-loader' },
//       { test: /\.(css)$/, use: ['css-loader', 'style-loader'] }
//     ]
//   },
//   plugins: [new HtmlWebpackPlugin({
//     template: 'app/index.html'
//   })]
// }
