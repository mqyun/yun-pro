const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    user: './public/src/js/user.js',
    admin: './public/src/js/admin.js'
  },
  output: {
    path: path.resolve(__dirname, 'public/dist/js'),
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: require.resolve('jquery'),
      use: [{
        loader: 'expose-loader',
        options: '$'
      }, {
        loader: 'expose-loader',
        options: 'jQuery'
      }]
    }]
  }
};