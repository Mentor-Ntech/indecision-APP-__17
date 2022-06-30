const path = require('path');

// console.log('path result', __dirname)





module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules:[{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            loader: 'style-loader', 
            test: /\.css$/
        }, {
            loader: 'css-loader',
            test: /\.css$/
        }]
    },
    devServer: {
        static: path.join(__dirname, 'public')
    }
}