const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin') // uses index.template.ejs for entrypoint
const CleanWebpackPlugin = require('clean-webpack-plugin') // deletes unused /dist files

module.exports = {
  entry: {
    app: './src/index.js',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },

  devServer: {
    contentBase: './dist',
    compress: true,
    hot: true,
    port: 3005,
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: 'index.template.ejs',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],

  devtool: 'inline-source-map',
  mode: 'development',
}
