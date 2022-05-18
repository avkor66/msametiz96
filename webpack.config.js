const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[hash].bundle.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'МЕТСЕРВИС-А',
      template: path.resolve(__dirname, ('./src/template.html')),
      filename: 'index.html'
    }),
    new CleanWebpackPlugin(),
    // new FaviconsWebpackPlugin('./src/assets/images/favicon.ico'),
    // new FaviconsWebpackPlugin({
    //     logo: './src/assets/images/favicon.ico', // svg works too!
    //     mode: 'webapp', // optional can be 'webapp', 'light' or 'auto' - 'auto' by default
    //     devMode: 'webapp', // optional can be 'webapp' or 'light' - 'light' by default 
    //     favicons: {
    //       appName: 'my-app',
    //       appDescription: 'My awesome App',
    //       developerName: 'Me',
    //       developerURL: null, // prevent retrieving from the nearest package.json
    //       background: '#ddd',
    //       theme_color: '#333',
    //       icons: {
    //         coast: false,
    //         yandex: false
    //       }
    //     }
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(ico|png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    static: './dist',
    compress: true,
    port: 3002,
  },
}