sap.ui.define(
    ["./BaseController"],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("fioriui5.tutorial.controller.ProductsView", {

            handleListItemPress: function (oEvent){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

                var selectedProductId = oEvent.getSource().getBindingContext().getProperty("ProductID");

                oRouter.navTo("ProductDetail", {
                    productId: selectedProductId

                });

                
            }
            
        });
    },
);
