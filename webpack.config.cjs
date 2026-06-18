const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  return {
    mode: isProduction ? "production" : "development",

    entry: "./src/index.js",

    output: {
      path: path.resolve(__dirname, "dist"),
      filename: isProduction ? "[name].[contenthash].js" : "[name].js",
      chunkFilename: isProduction
        ? "[name].[contenthash].chunk.js"
        : "[name].chunk.js",
      clean: true,
      publicPath: isProduction ? "/innowise-rjsc/" : "/",
    },

    devServer: {
      historyApiFallback: true,
      port: 3000,
      hot: true,
      open: true,
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
              plugins: isProduction ? ["transform-remove-console"] : [],
            },
          },
        },
        {
          test: /\.css$/i,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: {
                  localIdentName: isProduction
                    ? "[hash:base64:8]"
                    : "[name]__[local]--[hash:base64:5]",
                },
                importLoaders: 1,
              },
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg|webp|avif)$/i,
          type: "asset",
          parser: {
            dataUrlCondition: {
              maxSize: 8 * 1024,
            },
          },
          generator: {
            filename: "images/[hash][ext][query]",
          },
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: "./index.html",
        filename: "index.html",
        minify: isProduction,
      }),
      new MiniCssExtractPlugin({
        filename: isProduction ? "[name].[contenthash].css" : "[name].css",
        chunkFilename: isProduction ? "[id].[contenthash].css" : "[id].css",
        ignoreOrder: true,
      }),
      ...(isProduction
        ? [
            new CompressionPlugin({
              test: /\.(js|css|html|svg)$/,
              algorithm: "gzip",
              threshold: 10240,
              minRatio: 0.8,
            }),
            new CompressionPlugin({
              test: /\.(js|css|html|svg)$/,
              algorithm: "brotliCompress",
              filename: "[path][base].br",
              threshold: 10240,
              minRatio: 0.8,
            }),
          ]
        : []),
    ],

    optimization: {
      splitChunks: {
        chunks: "all",
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            priority: 10,
            enforce: true,
          },
        },
      },
      runtimeChunk: "single",
      minimize: isProduction,
      minimizer: ["...", new CssMinimizerPlugin()],
    },

    resolve: {
      extensions: [".js", ".jsx"],
      alias: {
        "@features": path.resolve(__dirname, "src/features"),
        "@common": path.resolve(__dirname, "src/common"),
        "@app": path.resolve(__dirname, "src/app"),
      },
    },
    devtool: isProduction ? "source-map" : "eval-cheap-module-source-map",
    performance: {
      hints: isProduction ? "warning" : false,
    },
  };
};
