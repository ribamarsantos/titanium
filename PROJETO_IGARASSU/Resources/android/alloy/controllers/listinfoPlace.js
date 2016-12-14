function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function showDetails() {
        Alloy.createController("hinoPlace").getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "listinfoPlace";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.__alloyId31 = Ti.UI.createWindow({
        id: "__alloyId31"
    });
    var __alloyId33 = [];
    $.__views.__alloyId34 = Ti.UI.createTableViewRow({
        top: 20,
        title: "Hino",
        id: "__alloyId34"
    });
    __alloyId33.push($.__views.__alloyId34);
    showDetails ? $.addListener($.__views.__alloyId34, "click", showDetails) : __defers["$.__views.__alloyId34!click!showDetails"] = true;
    $.__views.__alloyId32 = Ti.UI.createTableView({
        data: __alloyId33,
        id: "__alloyId32"
    });
    $.__views.__alloyId31.add($.__views.__alloyId32);
    $.__views.listInfoPlaceWin = (require("ui").createNavigationWindow || Ti.UI.iOS.createNavigationWindow)({
        window: $.__views.__alloyId31,
        id: "listInfoPlaceWin"
    });
    $.__views.listInfoPlaceWin && $.addTopLevelView($.__views.listInfoPlaceWin);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.args;
    __defers["$.__views.__alloyId34!click!showDetails"] && $.addListener($.__views.__alloyId34, "click", showDetails);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;