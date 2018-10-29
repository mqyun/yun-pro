const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    main: './public/src/js/main.js',
    user: './public/src/js/user.js'
  },
  output: {
    path: path.resolve(__dirname, 'public/dist'),
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
      }, {
        test: /\.styl/,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader'
        ]
      },
    ]
  }
};