const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
      test: /\.(js)$/,
      include: /(src)/,
      use: {
        loader: "babel-loader",
        options: {
          presets: [
            '@babel/preset-env',
          ],
          plugins: [
            '@babel/proposal-class-properties',
          ]
        }
      },

    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }
    ]
  },
  plugins: [],
  optimization: {},
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json', '.jsx', '.css'],
  },
};