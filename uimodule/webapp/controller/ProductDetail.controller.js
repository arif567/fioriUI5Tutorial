sap.ui.define(["fioriui5/tutorial/controller/BaseController"], function (Controller) {
    "use strict";

    return Controller.extend("fioriui5.tutorial.controller.ProductDetail", {

        /**
         * @override
         */
        onInit: function() {
            const oRouter =sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("ProductDetail").attachMatched(this._onRouteMatched, this);
        },
        _onRouteMatched: function(oEvent){
            const iProductId = oEvent.getParameter("arguments").productId;
            const oView =this.getView();

            oView.bindElement({
                path: "/Products("+ iProductId +")",

                events: {
                    dataRequested: function(){
                        oView.setBusy(true);
                    },
                    dataReceived: function(){
                        oView.setBusy(false);
                    }
                }
            });
        }



    });
});
