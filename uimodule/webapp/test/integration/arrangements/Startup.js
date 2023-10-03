sap.ui.define(["sap/ui/test/Opa5"], function (Opa5) {
    "use strict";

    return Opa5.extend("fioriui5.tutorial.test.integration.arrangements.Startup", {
        iStartMyApp: function () {
            this.iStartMyUIComponent({
                componentConfig: {
                    name: "fioriui5.tutorial",
                    async: true,
                    manifest: true,
                },
            });
        },
    });
});
