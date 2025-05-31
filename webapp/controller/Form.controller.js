sap.ui.define([
    "./Base.controller",
    "sap/m/MessageBox"
], (Controller, MessageBox) => {
    "use strict";

    return Controller.extend("tiles.controller.Form", {
        onInit() {
        },
        getValues: function () {
            let productId = this.getById("txtProductId").getValue();
            let mainCategory = this.getById("cboMainCategory").getValue();
            let category = this.getById("cboCategory").getValue();
            let name = this.getById("txtName").getValue();
            let description = this.getById("txtDescription").getValue();
            let supplier = this.getById("txtSupplier").getValue();
            let weightMeasure = this.getById("txtWeightMeasure").getValue();
            let weightUnit = this.getById("rbgWeightUnit").getSelectedIndex() == 0 ? "KG" : "LB";
            let dateOfSale = this.getById("dtSale").getValue();
            let status = this.getById("swStatus").getState() ? "Available" : "Not Available";
            let quantity = this.getById("txtQuantity").getValue();
            let currency = this.getById("rbgCurrency").getSelectedIndex() == 0 ? "EUR" : "USD";
            let price = this.getById("txtPrice").getValue();

            let newProduct = {
                "ProductId": productId,
                "Category": category,
                "MainCategory": mainCategory,
                "TaxTarifCode": "1",
                "SupplierName": supplier,
                "WeightMeasure": weightMeasure,
                "WeightUnit": weightUnit,
                "Description": description,
                "Name": name,
                "DateOfSale": dateOfSale,
                "ProductPicUrl": "https://sdk.openui5.org/test-resources/sap/ui/documentation/sdk/images/HT-1258.jpg",
                "Status": status,
                "Quantity": quantity,
                "UoM": "PC",
                "CurrencyCode": currency,
                "Price": price,
                "Width": 38,
                "Depth": 21,
                "Height": 3.5,
                "DimUnit": "cm"
            }
            return newProduct;
        },
        clearInputs: function () {
            this.getById("txtProductId").setValue("");
            this.getById("cboMainCategory").setValue("");
            this.getById("cboCategory").setValue("");
            this.getById("txtName").setValue("");
            this.getById("txtDescription").setValue("");
            this.getById("txtSupplier").setValue("");
            this.getById("txtWeightMeasure").setValue("");
            this.getById("rbgWeightUnit").setSelectedIndex(0);
            this.getById("dtSale").setValue("");
            this.getById("swStatus").setState(true);
            this.getById("txtQuantity").setValue("");
            this.getById("rbgCurrency").setSelectedIndex(0);
            this.getById("txtPrice").setValue("");
        },
        clearNavBack: function () {
            this.clearInputs();
            this.onNavTo("RouteMain");
        },
        onSubmit: function () {
            const _this = this;

            let nValidatedFields = this.validateFields();
            if (nValidatedFields) {
                return;
            }

            let newProduct = this.getValues();

            let aProductColl = this.getView().getModel("mProducts").getData().ProductCollection;
            aProductColl.unshift(newProduct);

            this.getView().getModel("mProducts").refresh();

            MessageBox.success("Product add", {
                actions: [MessageBox.Action.OK],
                emphazisedAction: MessageBox.Action.OK,
                onClose: function () {
                    _this.clearNavBack();
                }
            });
        },
        onCancel: function () {
            this.clearNavBack();
        },
        validateFields: function () {
            var aForms = ["frmGeneral", "frmWeight", "frmDetails"];
            var aValidated = [];
            aForms.forEach(oFormId => {
                let oForm = this.getView().byId(oFormId); // Usa byId para obtener el formulario
                if (oForm) {
                    let aFormContainers = oForm.getFormContainers(); // Obtén los formContainers
                    if (aFormContainers && aFormContainers.length > 0) {
                        aFormContainers.forEach(oFormContainer => {
                            let aFormElements = oFormContainer.getFormElements(); // Obtén los elementos del formulario
                            if (aFormElements && aFormElements.length > 0) {
                                aFormElements.forEach(oFormElement => {
                                    let aFields = oFormElement.getFields(); // Obtén los campos del formulario
                                    if (aFields && aFields.length > 0) {
                                        aFields.forEach(oField => {
                                            if (oField.getValue) {
                                                let oFieldId = oField.getId().split("Form--")[1];
                                                let validate = oField.getValue() !== "" ? true : false;
                                                console.log(oFieldId, validate);
                                                if (!validate) {
                                                    aValidated.push({ idField: oFieldId, state: validate });
                                                    this.getById(oFieldId).setValueState("Error");
                                                }
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                } else {
                    console.error(`No se encontró el formulario con ID: ${oFormId}`);
                }
            });
            return aValidated.length;
        },
        changeValueState: function (oEvent) {
            let oValue = oEvent.getSource().getValue();
            if (oValue) {
                oEvent.getSource().setValueState("None");
            }
        }
    });
});