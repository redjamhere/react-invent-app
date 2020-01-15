const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [ 
    './src/js/index.js',
    './src/stylus/main.styl'
  ],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/bundle.min.js',
    publicPath: '/dist'
  },

  devServer: {
    overlay: true,
    historyApiFallback: true,
    port: 1488
  },

  devtool: 'source-map',

  module: {
    rules: [

      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/js'),
        use: {
          loader: 'babel-loader',
          options: {
            preset: 'env'
          }
        }
      },

      {
        test: /\.styl$/,
        include: path.resolve(__dirname, 'src/stylus'),
        use: ExtractTextPlugin.extract({
          use: [{
              loader: "css-loader",
              options: {
                sourceMap: true,
                minimize: true,
                url: false
              }
            },
            {
              loader: "stylus-loader",
              options: {
                sourceMap: true
              }
            }
          ]
        })
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: './css/style.bundle.css',
      allChunks: true
    }),
    new HtmlWebpackPlugin()
  ]
}