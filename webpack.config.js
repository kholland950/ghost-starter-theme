var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    target: 'web',
    entry: [
        path.resolve(__dirname, 'assets/js/index.js')
    ],
    output: {
        path: path.resolve(__dirname, 'assets/build/js'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ['babel', 'eslint'] }
        ]
  }
};

