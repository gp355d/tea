module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import "./node_modules/bootstrap/scss/functions.scss";
        @import "./src/assets/helpers/variables.scss";
        @import "./node_modules/bootstrap/scss/mixins.scss";
          `
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/tea/'
    : '/'
}
