const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const { dependencies } = require('./package.json');

module.exports = {
  target: 'web',
  mode: 'development',
  devtool: 'source-map',
  output: {
    uniqueName: 'formbuilder',
    publicPath: 'http://localhost:3003/',
    scriptType: 'text/javascript',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json'],
  },
  optimization: {
    chunkIds: 'named',
    runtimeChunk: false,
  },
  stats: {
    chunks: true,
    modules: true,
    errorDetails: true,
    chunkModules: true,
    chunkOrigins: true,
  },
  devServer: {
    hot: true,
    port: 3003,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  experiments: {
    outputModule: false,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'formbuilder',
      filename: 'remoteEntry.js',
      exposes: {
        './app': './src/formbuilder-mfe',
        './constants': './src/constants',
      },
      shared: {
        ...dependencies,
        'web-vitals': {
          singleton: true,
          eager: true,
          requiredVersion: dependencies['web-vitals'],
        },
        yup: {
          singleton: true,
          eager: true,
          requiredVersion: dependencies.yup,
        },
        formik: {
          singleton: true,
          eager: true,
          requiredVersion: dependencies.formik,
        },
        clsx: {
          singleton: true,
          eager: true,
          requiredVersion: dependencies.clsx,
        },
        react: {
          singleton: true,
          eager: true,
          requiredVersion: dependencies.react,
        },
        'pubsub-js': {
          singleton: true,
          eager: true,
          requiredVersion: dependencies['pubsub-js'],
        },
        loglevel: {
          singleton: true,
          eager: true,
          requiredVersion: dependencies.loglevel,
        },
        'react-dom': {
          singleton: true,
          eager: true,
          requiredVersion: dependencies['react-dom'],
        },
        '@mui/material': {
          singleton: true,
          eager: true,
          requiredVersion: dependencies['@mui/material'],
        },
        '@emotion/react': {
          singleton: true,
          eager: true,
          requiredVersion: dependencies['@emotion/react'],
        },
        '@emotion/styled': {
          singleton: true,
          eager: true,
          requiredVersion: dependencies['@emotion/styled'],
        },
        'react-router-dom': {
          singleton: true,
          eager: true,
          requiredVersion: dependencies['react-router-dom'],
        },
        '@mui/icons-material': {
          singleton: true,
          eager: true,
          requiredVersion: dependencies['@mui/icons-material'],
        },
        'react-error-boundary': {
          singleton: true,
          eager: true,
          requiredVersion: dependencies['react-error-boundary'],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
    }),
    new MiniCssExtractPlugin(),
    new Dotenv(),
  ],
};
