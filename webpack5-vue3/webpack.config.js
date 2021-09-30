const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][hash:8].js",
  },
  devtool: "source-map",
  mode: "development",
  // mode: "production",
  externals: {
    jquery: "jQuery", // externals 配置选项提供了「从输出的 bundle 中排除依赖」的方法。意思就是说在项目中通过 import 引入的依赖在打包的时候不会打包到 bundle 中去，而是通过 script 引入的方式去访问这些依赖。例如，从 CDN 引入 jQuery，而不是把它打包：
  },
  optimization: {
    moduleIds: "deterministic",
    // 使用 optimization.runtimeChunk 选项将 runtime 代码拆分为一个单独的 chunk
    runtimeChunk: "single",
    splitChunks: {
      // 利用 client 的长效缓存机制，命中缓存来消除请求，并减少向 server 获取资源，
      // 同时还能保证 client 代码和 server 代码版本一致。 这可以通过
      // 使用SplitChunksPlugin 插件的 cacheGroups 选项来实现。
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  resolve: {
    extensions: [".vue", ".js"], //表示在import 文件时文件后缀名可以不写
    alias: {
      "@": path.join(__dirname, "src"),
      // 这里的别名配置需与 jsconfig 中的 paths 别名一致
      // import的文件在src下component里的时候可以直接写成 @/component/...
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: "asset", //在导出一个 data URI 和发送一个单独的文件之间自动选择
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "我是webpack.config配置的标题",
      template: "./public/index.html",
      //压缩HTML
      minify: {
        removeComments: true, // 移除HTML中的注释
        collapseWhitespace: true, // 删除空白符与换行符
      },
    }),
  ],
  devServer: {
    contentBase: "./dist",
    hot: true,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
