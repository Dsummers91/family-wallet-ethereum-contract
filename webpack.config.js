module.exports = {
  entry: './app/javascripts/app.js',
  output: {
    filename: 'bundle.js',
    path: './app'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        },
        resolve: {
          extensions: ['', '.js', '.jsx']
        }
      }
    ]
  }
}