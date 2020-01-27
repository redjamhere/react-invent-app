const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

  devtool: "source-map",
  entry: './src/main.tsx',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.min.js',
    publicPath: '/'
  },

  resolve: {
    extensions: [ '.ts', '.tsx', '.js', '.css', '.styl' ]
  },

  devServer: {
    historyApiFallback: true,
    overlay: true,
    port: 5000
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
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
          {loader: MiniCssExtractPlugin.loader, options: {publicPath: '/dist'}},
          {loader: 'style-loader'},
          {loader: 'stylus-loader'}
        ]
      },

      {
        test: /\.pug$/,
        use: [
          'pug-loader'
        ]
      },

      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }

    ]
  },

  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
}