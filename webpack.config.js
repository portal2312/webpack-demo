const path = require('path');


module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    // 동적 선언시 사용되는 chunk file name 지정하기
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

