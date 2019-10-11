const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
    another: './src/another-module.js',
  },
  plugins: [
    // new CleanWebpackPlugin(),
    // new HtmlWebpackPlugin({
    //   title: 'Output Management',
    // }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: '/'
  },
  /**
   * optimization:
   * - 위 entry 에서 중복된 module 은 dist/vendors~another~app.bundle.js
   *   하나의 파일으로 관리 및 생성된다.
   * - HtmlWebpackPlugin 사용하는 경우: dist/vendors~another~app.bundle.js
   *   파일 경로를 자동으로 index.html 에 추가된다.
   * - HtmlWebpackPlugin 사용하지 않는 경우: dist/vendors~another~app.bundle.js
   *   파일 경로를 수동으로 index.html 에 추가해야 한다.
   */
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
