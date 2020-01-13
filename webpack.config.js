const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  entry: './src/index.tsx',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.min.js',
    publicPath: '/dist'
  },

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".css", ".styl"]
  },

  devServer: {
    historyApiFallback: true,
    overlay: true,
    port: 9000
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },

      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      },

      {
        test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'stylus-loader',
          },
        ],
      },

      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ],
  },

  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },

  plugins: [
    new HtmlWebpackPlugin({template: './index.html'})
  ]
  // plugins: [
  //   new MiniCssExtractPlugin({
  //     filename: "[name].css",
  //     chunkFilename: "[id].css"
  //   })
  // ]
}