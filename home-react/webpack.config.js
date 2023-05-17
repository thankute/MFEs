const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require('./package.json').dependencies;

module.exports = {
    entry: path.resolve(__dirname, './src/index'),
    mode: 'development',
    devServer: {
        port: 3000,
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['.js', '.tsx', '.ts', '.vue', '.jsx'],
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
                test: /\.(gif|svg|jpg|png|jpeg)$/,
                loader: "file-loader",
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
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
            }
        ],
    },

    plugins: [
        new ModuleFederationPlugin(
            {
                name: 'home_react',
                filename:
                    'remoteEntry.js',
                remotes: {
                    remoteReactApp: 'remote_react@http://localhost:3001/remoteEntry.js',
                    remoteVueApp: 'vue_app@http://localhost:3002/remoteEntry.js',
                },
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
            }
        ),
        new HtmlWebpackPlugin({
            template:
                './public/index.html',
            favicon: "./public/logo512.png",
            filename: "index.html",
            manifest: "./public/manifest.json"
        }),
        // new ProvidePlugin({
        //     "React": "react",
        // }),
    ],
};
