sap.ui.define([
    "./Base.controller"
], (Controller) => {
    "use strict";

    return Controller.extend("tiles.controller.Detail", {
        onInit() {
            this.getRouter().getRoute("viewDetail").attachMatched(this._onRouteMatched, this);
        },
        _onRouteMatched: function (oEvent) {
            let oArgs, oView;
            oArgs = oEvent.getParameter(("arguments"));
            oView = this.getView();

            oView.bindElement({
                path: `mProducts>/ProductCollection/${oArgs.productId}`,
                events: {
                    change: this._onBindingChange.bind(this)
                }
            })
        },
        _onBindingChange: function (oEvent) {
            let oRouter = this.getRouter();
            if (!oEvent.getSource().getBoundContext().getObject()) {
                oRouter.getTargets().display("TargetNotFound");
            }
        }
    });
});