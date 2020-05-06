const config = require('./webpack.config');

module.exports = {
  ...config,

  devtool: 'source-map',
  entry  : {
    lib: './src/lib.js',
  },
  output : {
    library      : 'EacyUI',
    libraryTarget: 'umd'
  },

  plugins: []
};
