var path = require('path');
var SRC = path.resolve(__dirname,'src');
var DIST = path.resolve(__dirname,'dist');

module.exports = {
    entry: SRC + '/app/index.js',
    output:{
        path: DIST + '/app/',
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    module:{
        loaders:[
            {
                test: /\.js$/,
                include: SRC,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
};
