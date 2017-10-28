const path = require('path');
const SRC = path.resolve(__dirname,'src');
const DIST = path.resolve(__dirname,'dist');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('../css/style-css.css');
const extractLESS = new ExtractTextPlugin('../css/style-less.css');
const extractSASS = new ExtractTextPlugin('../css/style-sass.css');

module.exports = {
    entry: SRC + '/app/index.js',
    output:{
        path: DIST + '/app/',
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    devServer: {
        contentBase: path.join(__dirname,'dist'),
        compress:true,
        open:true
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                include: SRC,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use:[
                    'css-loader'
                  ]
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: [
                    'css-loader',
                    'sass-loader'
                  ]
                })
            },
            {
                test: /\.less$/i,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: [
                    'css-loader',
                    'less-loader'
                  ]
                })
            }
        ]
    },
    plugins: [
      extractCSS,
      extractSASS,
      extractLESS
    ]
};
