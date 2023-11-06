const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve('../www'),
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/i,
                use: [
                    process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader',
                ],
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css', // Use dynamic names based on entry points
        }),

        new HtmlWebpackPlugin({
            title: 'BetLightening Tips',
            template: './public/index.html'
        }),
    ],
    devServer: {
        static: path.join(__dirname, 'public'),
        port: 3000,
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
}