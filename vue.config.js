const path = require('path')
const ImageminPlugin = require('imagemin-webpack-plugin').default

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      'preProcessor': 'scss',
      'patterns': [
        path.resolve(__dirname, './src/styles/_variables.scss'),
        path.resolve(__dirname, './src/styles/_breakpoints.scss')
      ]
    },
  },
  configureWebpack: {
    plugins: [new ImageminPlugin()]
  }
}