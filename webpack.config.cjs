const path = require('path');

module.exports = {
  entry: {
    'dist/abr': './src/abr.ts',
    'demo/app': './demo/main.ts'
  },
  output: {
    filename: '[name].js',
    library: 'abr',
    libraryTarget: 'umd',
    path: path.resolve(__dirname),
    globalObject: 'this'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.md']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
    ]
  },
  devServer: {
    open: true,
    static: path.join(__dirname),
  },
  devtool: 'source-map'
}