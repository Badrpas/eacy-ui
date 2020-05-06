const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  mode   : 'development',
  entry  : './src/main.js',
  module : {
    rules: [
      {
        test   : /\.(js|jsx)$/,
        exclude: /node_modules/,
        use    : {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use : [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html"
    })
  ],
};
