const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require("webpack")
// const PrettierPlugin = require('prettier-webpack-plugin')

const paths = require('./paths')

// TODO: auto generate object below
const pages = ['index', 'auth'];
const pagesConfig = {
  auth: paths.src + '/pages/auth/js/main.js',
  index: paths.src + '/pages/index/js/main.js'
};

module.exports = {
  // Where webpack looks to start building the bundle // 'babel-polyfill'
  entry: pagesConfig,

  // Where webpack outputs the assets and bundles
  output: {
    path: paths.serverPublic,
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },

  // Customize the webpack build process
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),

    // Generates an HTML file from a template
    // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
    // new HtmlWebpackPlugin({
    //   title: 'index',
    //   favicon: paths.src + '/images/favicon.png',
    //   template: paths.src + '/pages/index/index.template.html', // template file
    //   filename: 'index.html', // output file
    //   chunks: ['index']
    // }),
    // new HtmlWebpackPlugin({
    //   title: 'auth',
    //   favicon: paths.src + '/images/favicon.png',
    //   template: paths.src + '/auth.template.html', // template file
    //   filename: 'auth.html', // output file
    //   chunks: ['auth']
    // }),

    // ESLint configuration
    // new ESLintPlugin({
    //   files: ['.', 'src', 'config'],
    //   formatter: 'table',
    // }),

    // Prettier configuration
    // new PrettierPlugin(),
  ].concat(pages.map(
    (page) =>
      new HtmlWebpackPlugin({
        inject: true,
        template: paths.src + `/pages/${page}/${page}.template.html`,
        filename: `${page}.html`,
        chunks: [page],
      })
  )),

  // Determine how modules within the project are treated
  module: {
    rules: [
      // JavaScript: Use Babel to transpile JavaScript files
      { test: /\.js$/, use: ['babel-loader'] },

      // Images: Copy image files to build folder
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },

      // Fonts and SVGs: Inline files
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
    ],
  },

  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': paths.src,
    },
  },
}
