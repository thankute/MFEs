const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require('./package.json').dependencies;


module.exports = {
    entry: path.resolve(__dirname, './src/index'),
    mode: 'development',
    devServer: {
        port: 3001,
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        hot: true
    },
    resolve: {
        extensions: ['.js', '.tsx', '.ts'],
    },
    output: {
        publicPath: 'auto',
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-react', '@babel/preset-typescript'],
                },
            },
            {
                test: /\.css$/i,
                use: ['style-loader',
                    'css-loader'],
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
                    './Button':
                        './src/Button',
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