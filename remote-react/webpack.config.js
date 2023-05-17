const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require('./package.json').dependencies;


module.exports = {
    entry: path.resolve(__dirname, './src/index'),
    target: 'web',
    mode: 'development',
    devServer: {
        port: 3001,
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        hot: false,
    },
    resolve: {
        extensions: ['.js', '.tsx', '.ts', 'jsx', '.svg'],
    },
    output: {
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(js|ts)x?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-react', '@babel/preset-typescript'],
                },
            },
            {
                test: /\.(gif|jpg|png|jpeg)$/,
                loader: "file-loader",
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack', 'file-loader'],
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                sideEffects: true,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    }
                ],
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                sideEffects: true,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin(
            {
                name: 'remote_react',
                filename:
                    'remoteEntry.js',
                exposes: {
                    './Button': './src/Button',
                    './Sidebar': './src/common/layout/sidebar/Index',
                    './Home': './src/modules/home/Index'
                },
                // remotes: {
                //     MFE1: 'home_react@http://localhost:3001/remoteEntry.js',
                // },
                shared: {
                    ...deps,
                    react: {
                        singleton: true,
                        requiredVersion: deps.react,
                    },
                    'react-dom': {
                        singleton: true,
                        requiredVersion: deps['react-dom'],
                    },
                },
            },
        ),
        new HtmlWebpackPlugin({
            template:
                './public/index.html',
        }),
    ],
};