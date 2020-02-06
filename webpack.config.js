const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

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
        use: ['style-loader', 'css-loader']
      },

      { 
        test: /\.styl$/,
        use: [
          {loader: MiniCssExtractPlugin.loader, options: {publicPath: '/'}},
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {loader: "stylus-loader"},
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     plugins: [
          //       autoprefixer({
          //         browsers: ['ie >=8', 'last 4 version']
          //       }),
          //     ],
          //     sourceMap: true
          //   }
          // }
        ]
      },

      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
        },
      },

      {
        test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: [{
            loader: 'file-loader',
            options: {
            name: '[name].[ext]',
            outputPath: '../fonts/',  
            publicPath: './fonts' 
            }
        }]
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
    new HtmlWebpackPlugin({template: './src/index.html'}),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
}