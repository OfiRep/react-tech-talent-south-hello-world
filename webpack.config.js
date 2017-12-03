let path = require("path");
let webpack = require("webpack");
let HtmlWebpackPlugin = require("html-webpack-plugin");

let basePath = __dirname;

module.exports = function() {
    return {
        context: path.join(basePath, 'src'),
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx']
        },
        target: 'web',
        entry: {
            app: [
                'webpack-dev-server/client?http://0.0.0.0:3002',
                '../index.tsx'
            ]
        },
        output: {
            path: path.join(basePath, './dist'),
            filename: 'bundle.js'
        },
        devServer: {
            contentBase: './dist',
            inline: true,
            host: '0.0.0.0',
            port: 3002,
            hot: true
        },
        devtool: 'inline-source-map',
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /node_modules/,
                    use: [{
                        loader: 'awesome-typescript-loader'
                    }]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html', //Name of file in ./dist/
                template: 'index.html' //Name of template in ./src
            }),
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery"
            })
        ]
    }
}