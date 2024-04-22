const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
      entry: {
        index: './src/index.js',
        loadHome: './src/function1.js',
        loadMenu: './src/function2.js',
        loadContact: './src/function3.js',
        clearContainers: './src/clearContainers.js',
      },
      devtool: 'inline-source-map',
      devServer: {
        static: './dist',
      },
      plugins: [
        new HtmlWebpackPlugin({
          title: 'Development',
        }),
      ],
       output: {
        filename: '[name].bundle.js',
         path: path.resolve(__dirname, 'dist'),
         clean: true,
       },
       optimization: {
        runtimeChunk: 'single',
      },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};