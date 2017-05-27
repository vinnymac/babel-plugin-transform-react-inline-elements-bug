const webpack = require('webpack')
const path = require('path')

const packageJSON = require('./package.json')

const isProduction = process.env.NODE_ENV === 'production'

const processEnv = {
  NODE_ENV: isProduction ? '"production"' : '"development"',
  NODE_DEBUG: false,
}

let plugins = [
  new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  new webpack.DefinePlugin({
    DEVELOPMENT: !isProduction,
    PRODUCTION: isProduction,
    VERSION: JSON.stringify(packageJSON.version),
    'process.env': processEnv,
  }),
]

if (isProduction) {
  plugins = plugins.concat([
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        ascii_only: true,
      },
      compress: {
        warnings: false,
      },
    }),
  ])
}

const mainFilePath = ['babel-polyfill', './src/app.js']

const webpackConfig = {
  entry: { application: mainFilePath },
  output: {
    publicPath: '',
    path: path.resolve('./dist'),
    filename: '[name].js',
  },
  stats: {
    colors: true,
    reasons: true,
  },
  cache: true,
  target: 'web',
  watch: false,
  devtool: '',
  plugins,
  resolve: {
    extensions: ['.js'],
    modules: ['node_modules'],
    mainFields: ['browser', 'web', 'main'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader?cacheDirectory',
        exclude: /node_modules/
      },
    ],
  },
}

module.exports = webpackConfig
