function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function showDetails(e) {
        Alloy.createController("detailPlace", e.rowData).getView().open();
    }
    function closeWindow() {
        $.listPlaceWin.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "listPlace";
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
    $.__views.__alloyId28 = Ti.UI.createWindow({
        id: "__alloyId28"
    });
    $.__views.btnBack = Ti.UI.createButton({
        systemButton: Ti.UI.iOS.SystemButton.REPLY,
        id: "btnBack"
    });
    closeWindow ? $.addListener($.__views.btnBack, "click", closeWindow) : __defers["$.__views.btnBack!click!closeWindow"] = true;
    $.__views.__alloyId28.leftNavButton = $.__views.btnBack;
    $.__views.tableViewListPlaces = Ti.UI.createTableView({
        backgroundColor: "#000C66",
        rows: {
            color: "#000C66"
        },
        id: "tableViewListPlaces"
    });
    $.__views.__alloyId28.add($.__views.tableViewListPlaces);
    showDetails ? $.addListener($.__views.tableViewListPlaces, "click", showDetails) : __defers["$.__views.tableViewListPlaces!click!showDetails"] = true;
    $.__views.listPlaceWin = (require("ui").createNavigationWindow || Ti.UI.iOS.createNavigationWindow)({
        window: $.__views.__alloyId28,
        id: "listPlaceWin"
    });
    $.__views.listPlaceWin && $.addTopLevelView($.__views.listPlaceWin);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.args;
    var height_row = 50;
    var activities = [];
    var activities = [ {
        title: L("diversao"),
        id: 1,
        height: height_row
    }, {
        title: L("feiras"),
        id: 2,
        height: height_row
    }, {
        title: L("hoteis"),
        id: 3,
        height: height_row
    }, {
        title: L("igrejas"),
        id: 4,
        height: height_row
    }, {
        title: L("monumentos_historicos"),
        id: 5,
        height: height_row
    }, {
        title: L("museus"),
        id: 6,
        height: height_row
    }, {
        title: L("pracas"),
        id: 7,
        height: height_row
    }, {
        title: L("praias"),
        id: 8,
        height: height_row
    }, {
        title: L("restaurantes"),
        id: 9,
        height: height_row
    } ];
    $.tableViewListPlaces.data = activities;
    __defers["$.__views.btnBack!click!closeWindow"] && $.addListener($.__views.btnBack, "click", closeWindow);
    __defers["$.__views.tableViewListPlaces!click!showDetails"] && $.addListener($.__views.tableViewListPlaces, "click", showDetails);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;