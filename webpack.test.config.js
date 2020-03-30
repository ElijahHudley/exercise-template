const path = require('path');
const {CheckerPlugin} = require('awesome-typescript-loader');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/index.ts',
  
  plugins: [
    new CopyPlugin([{from: 'echo-function.json', to: './echo-function.json'}]
    ),
    new CheckerPlugin(),

  ],
  resolve: {
    extensions: ['.ts', '.js'],
  },
  target: 'node',

  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'awesome-typescript-loader',
      },
    ],
  },
};
