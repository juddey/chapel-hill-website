var path = require('path')
var LiveReloadPlugin = require('webpack-livereload-plugin')
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: [path.join(__dirname, './assets/js/webpack.entry.js')],
  plugins: [new LiveReloadPlugin({ appendScriptTag: true })],
  output: {
    path: __dirname + '/assets/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(ttf|eot|woff)(\?.*)?$/,
        use: ['url-loader']
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [ { loader: 'babel-loader'}]
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      }
    ]
  },
  plugins: [
    new BrowserSyncPlugin(
      {
        host: 'localhost',
        port: 3000,
        proxy: 'http://localhost:2368',
        files: [
          {
            match: ['**/*.hbs']
          }
        ]
      },
      {
        reload: true
      }
    )
  ]
}
