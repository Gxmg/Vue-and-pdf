const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/pdf/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'pdf.js',
    library: 'vueAndPdf',
    libraryExport: 'default',
    globalObject: 'this', // 定义全局变量，兼容node和浏览器避免出现window的undefined
    libraryTarget:'umd', // 定义打包方式，同时支持comment.js和amd 和全局变量使用
  },
  mode: 'production', // 告诉webpack使用production内置优化
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      // ProvidePlugin可以把模块作为一个变量，在webpack的任何模块使用。类似于整个项目的全局变量
      _: ['loadsh']
    })
  ],
  externals: { // 从输出的bundle中排出依赖
    loadsh: { // 可以再模块系统commonjs commonjs2 amd 通过loadsh访问，但是全局变量形式下用_
      commonjs: 'loadsh',
      commonjs2: 'loadsh',
      amd: 'loadsh',
      root: '_'
    }
  }
}