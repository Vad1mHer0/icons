const path = require('path');
const entries = require('./src/entries');

const config = {
  entry: entries,
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [{
          loader: 'babel-loader'
        }, {
          loader: path.resolve('./loaders/svgToReact')
        }, {
          loader: 'svg-sprite-loader'
        }, {
          loader: 'svgo-loader'
        }]
      }
    ]
  },
  optimization: {
    minimize: false
  },
  mode: process.env.NODE_ENV || 'development',
  externals: {
    'react': 'react',
    'prop-types': 'prop-types',
    'svg-baker-runtime/browser-symbol': 'svg-baker-runtime/browser-symbol',
    'svg-sprite-loader/runtime/browser-sprite.build': 'svg-sprite-loader/runtime/browser-sprite.build'
  }
};

module.exports = config;
