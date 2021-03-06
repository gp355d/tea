module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import "./node_modules/bootstrap/scss/functions.scss";
        @import "./src/assets/scss/helpers/variables.scss";
        @import "./node_modules/bootstrap/scss/mixins.scss";
          `
      }
    }
  },
  publicPath: './',
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'tea'
        return args
      })
  }
}
