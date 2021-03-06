const path = require('path')
module.exports = {
  mode:'production',
  entry:'./src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename:'bubbleAnim.js',
    library: 'bubbleAnim',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      { 
        test: /\.js$/,
        exclude:'/node_modules/',
        use:{
          loader: 'babel-loader'
        }
      }
    ]
  }
}