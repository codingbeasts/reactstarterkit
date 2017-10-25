const path = require('path');
const SRC = path.resolve(__dirname,'src');
const DIST = path.resolve(__dirname,'dist');

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
        open:true,
        port:9000
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
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.less/,
                use:[
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    }
};
