const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
require('dotenv').config({ path: '../.env' }).parsed;

module.exports = (env, argv) => {
  const isDevMode = argv.mode !== 'production';
  const srcPath = path.resolve(__dirname, 'src');

  return {
    entry: ['@babel/polyfill', './src/index.jsx'],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [
            'babel-loader',
            {
              loader: 'eslint-loader',
              options: {
                failOnWarning: !isDevMode,
                failOnError: true,
              }
            }
          ]
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                includePaths: [
                  path.resolve(__dirname, 'node_modules'),
                ]
              }
            },
          ]
        },
        {
          test: /\.(ico|png|jpg|jpeg|svg|gif)$/,
          use: [ 'file-loader' ]
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx'],
      alias: {
        components: `${srcPath}/components/`,
        views: `${srcPath}/views/`,
        store: `${srcPath}/store/`,
        assets: `${srcPath}/assets/`,
      }
    },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: '[name].js'
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          API_HOST: JSON.stringify(process.env.API_HOST),
          NODE_ENV: JSON.stringify(argv.mode),
        }
      }),
      new webpack.HotModuleReplacementPlugin(),
      new MiniCssExtractPlugin({
        filename: isDevMode ? '[name].css' : '[name].[hash].css',
      }),
      new HtmlWebpackPlugin({
        hash: true,
        inject: 'body',
        template: './src/index.html',
        filename: 'index.html'
      }),
      new CopyWebpackPlugin([
       {
          from: path.resolve(__dirname, 'manifest.json'),
          to: path.resolve(__dirname, 'dist/manifest.json')
        }
      ]),
    ],
    optimization: {
      minimizer: [
        new OptimizeCSSAssetsPlugin({})
      ],
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(sa|sc|c)ss$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    },
    devServer: {
      publicPath: 'http://localhost:3000/',
      contentBase: './dist',
      hot: true,
      historyApiFallback: true,
      port: 3000,
    },
    devtool: 'source-map'
  }
};
