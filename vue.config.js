module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import "./node_modules/bootstrap/scss/functions";
        @import "./src/assets/helpers/variables";
        @import "./node_modules/bootstrap/scss/mixins";
        @import "./node_modules/bootstrap/scss/root";
        @import "./node_modules/bootstrap/scss/reboot";
        @import "./node_modules/bootstrap/scss/type";
        @import "./node_modules/bootstrap/scss/images";
        @import "./node_modules/bootstrap/scss/code";
        @import "./node_modules/bootstrap/scss/grid";
        @import "./node_modules/bootstrap/scss/tables";
        @import "./node_modules/bootstrap/scss/forms";
        @import "./node_modules/bootstrap/scss/buttons";
        @import "./node_modules/bootstrap/scss/transitions";
        @import "./node_modules/bootstrap/scss/dropdown";
        @import "./node_modules/bootstrap/scss/button-group";
        @import "./node_modules/bootstrap/scss/input-group";
        @import "./node_modules/bootstrap/scss/custom-forms";
        @import "./node_modules/bootstrap/scss/nav";
        @import "./node_modules/bootstrap/scss/navbar";
        @import "./node_modules/bootstrap/scss/card";
        @import "./node_modules/bootstrap/scss/breadcrumb";
        @import "./node_modules/bootstrap/scss/pagination";
        @import "./node_modules/bootstrap/scss/badge";
        @import "./node_modules/bootstrap/scss/jumbotron";
        @import "./node_modules/bootstrap/scss/alert";
        @import "./node_modules/bootstrap/scss/progress";
        @import "./node_modules/bootstrap/scss/media";
        @import "./node_modules/bootstrap/scss/list-group";
        @import "./node_modules/bootstrap/scss/close";
        @import "./node_modules/bootstrap/scss/toasts";
        @import "./node_modules/bootstrap/scss/modal";
        @import "./node_modules/bootstrap/scss/tooltip";
        @import "./node_modules/bootstrap/scss/popover";
        @import "./node_modules/bootstrap/scss/carousel";
        @import "./node_modules/bootstrap/scss/spinners";
        @import "./node_modules/bootstrap/scss/utilities";
        @import "./node_modules/bootstrap/scss/print";
          `
      }
    }
  }
}
