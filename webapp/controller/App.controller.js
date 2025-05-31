sap.ui.define([
  "./Base.controller"
], (BaseController) => {
  "use strict";

  return BaseController.extend("tiles.controller.App", {
      onInit() {
       this._initThema();
      }
  });
});