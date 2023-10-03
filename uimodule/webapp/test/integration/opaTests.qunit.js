/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
    "use strict";

    sap.ui.require(["fioriui5/tutorial/test/integration/AllJourneys"], function () {
        QUnit.start();
    });
});
