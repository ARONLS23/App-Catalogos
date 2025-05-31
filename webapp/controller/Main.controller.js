sap.ui.define([
    "./Base.controller"
], (Controller) => {
    "use strict";

    return Controller.extend("tiles.controller.Main", {
        onInit() {
        },
        onPressTile: function (oEvent) {
            let viewRoute = oEvent.getSource().getBindingContext("mTiles").getObject().View;
            this.onNavTo(viewRoute);
        }
    });
});