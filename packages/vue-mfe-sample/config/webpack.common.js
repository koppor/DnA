const { VueLoaderPlugin } = require('vue-loader');
const webpack = require('webpack');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');

module.exports = {
  resolve: {
    extensions: ['.js', '.vue'],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },

      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1000,
              name: 'images/[name]-[contenthash].[ext]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      process: 'process/browser',
      stream: 'stream-browserify',
      zlib: 'browserify-zlib',
    },
  },

  plugins: [
    new VueLoaderPlugin(),
    new webpack.ProvidePlugin({
      regeneratorRuntime: 'regenerator-runtime/runtime',
      //   Promise: ["es6-promise", "Promise"],
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
    new ModuleFederationPlugin({
      name: 'vue_mfe',
      filename: 'remoteEntry.js',
      exposes: {
        './VueApp': './src/bootstrap',
      },
      remotes: {},
      shared: packageJson.dependencies,
    }),
  ],
};
