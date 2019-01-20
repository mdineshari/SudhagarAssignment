const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve('dist/js'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js||jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
