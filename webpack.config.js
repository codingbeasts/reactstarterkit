const path = require('path');
const src = path.resolve(__dirname,'src');
const dist = path.resolve(__dirname,'dist');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: src + '/js/app.js',
  output: {
    filename: 'assets/js/bundle.js',
    path: dist
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:{
          loader: "babel-loader"
        }
      }
    ]
  },
  devServer:{
    contentBase: dist,
    port: 3000,
    hot:true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:'./src/index.html',
      minify:{
        collapseWhitespaces:true
      },
      hash:true
    })
  ],
  mode: "development"
};
