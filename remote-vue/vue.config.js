const { defineConfig } = require("@vue/cli-service");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "auto",
  chainWebpack: (config) => {
    config.optimization.delete("splitChunks");
  },
  devServer: {
    port: 3002,
    historyApiFallback: true,
  },
  configureWebpack: {
    plugins: [
      // new VueLoaderPlugin(),
      new ModuleFederationPlugin({
        name: "vue_app",
        filename: "remoteEntry.js",
        exposes: {
          "./HelloWorld": "./src/placeHello.ts",
          "./VueApp": "./src/bootstrap.ts",
        },
        shared: {
          ...deps,
          vue: {
            singleton: true,
            eager: true,
          },
        },
      }),
    ],
  },
});
