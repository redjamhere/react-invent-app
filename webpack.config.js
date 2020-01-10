const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  entry: './src/index.tsx',

  output: {
    path: path.resolve(__dirname, '/dist'),
    filename: 'bundle.min.js',
    publicPath: '/dist'
  },

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js"]
  },

  devServer: {
    historyApiFallback: true,
    overlay: true,
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
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
}