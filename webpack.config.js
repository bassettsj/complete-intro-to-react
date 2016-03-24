const path = require('path')

module.exports = {
  context: __dirname,
  entry: './js/ClientApp.jsx',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        include: path.join(__dirname, '/js'),
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }, {
        test: /\.json$/,
        loader: 'json',
        exclude: /node_modules/
      }
    ]
  }
}
