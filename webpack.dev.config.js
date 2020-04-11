const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: ["@babel/polyfill", "./src/public/index.js"]
    },
    output: {
        path: path.join(__dirname, 'dist/public'),
        publicPath: "/",
        filename: "js/[name].js"
    },
    target: 'web',
    devtool: "#source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/public/index.html',
            filename: 'index.html',
            excludeChunks: ['server']
        }),
        new HtmlWebpackPlugin({
            template: 'src/public/catalog.html',
            filename: 'catalog.html',
            excludeChunks: ['server']
        }),
        new HtmlWebpackPlugin({
            template: 'src/public/shopping_cart.html',
            filename: 'shopping_cart.html',
            excludeChunks: ['server']
        }),
        new HtmlWebpackPlugin({
            template: 'src/public/checkout.html',
            filename: 'checkout.html',
            excludeChunks: ['server']
        }),
        new HtmlWebpackPlugin({
            template: 'src/public/single_page.html',
            filename: 'single_page.html',
            excludeChunks: ['server']
        }),
    ]
};

module.exports = {
    entry: {
        main: ["@babel/polyfill", "./src/public/index.js"]
    },
    output: {
        path: path.join(__dirname, 'dist/public'),
        publicPath: "/",
        filename: "js/[name].js"
    },
    target: 'web',
    devtool: "#source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/public/index.html',
            filename: 'index.html',
            excludeChunks: ['server']
        }),
        new HtmlWebpackPlugin({
            template: 'src/public/catalog.html',
            filename: 'catalog.html',
            excludeChunks: ['server']
        }),
        new HtmlWebpackPlugin({
            template: 'src/public/shopping_cart.html',
            filename: 'shopping_cart.html',
            excludeChunks: ['server']
        }),
        new HtmlWebpackPlugin({
            template: 'src/public/checkout.html',
            filename: 'checkout.html',
            excludeChunks: ['server']
        }),
        new HtmlWebpackPlugin({
            template: 'src/public/single_page.html',
            filename: 'single_page.html',
            excludeChunks: ['server']
        }),
    ]
};
