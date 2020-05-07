const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  mode   : 'development',
  entry  : './src/main.js',
  devtool: 'eval-source-map',
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
        test   : /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use    : {
          loader: "ts-loader"
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
  resolve: {
    extensions: [ '.ts', '.js' ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html"
    })
  ],
};
