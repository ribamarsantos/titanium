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
        var row = e.rowData;
        var ctrl = Alloy.createController("detailPlace", row);
        ctrl.getView().open();
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
    $.__views.listPlace = Ti.UI.createWindow({
        id: "listPlace"
    });
    $.__views.listPlace && $.addTopLevelView($.__views.listPlace);
    $.__views.tableViewListPlaces = Ti.UI.createTableView({
        id: "tableViewListPlaces"
    });
    $.__views.listPlace.add($.__views.tableViewListPlaces);
    showDetails ? $.addListener($.__views.tableViewListPlaces, "click", showDetails) : __defers["$.__views.tableViewListPlaces!click!showDetails"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.args;
    var activities = [];
    var activities = [ {
        title: L("diversao"),
        id: 1
    }, {
        title: L("feiras"),
        id: 2
    }, {
        title: L("hoteis"),
        id: 3
    }, {
        title: L("igrejas"),
        id: 4
    }, {
        title: L("monumentos_historicos"),
        id: 5
    }, {
        title: L("museus"),
        id: 6
    }, {
        title: L("pracas"),
        id: 7
    }, {
        title: L("praias"),
        id: 8
    }, {
        title: L("restaurantes"),
        id: 9
    } ];
    $.tableViewListPlaces.data = activities;
    __defers["$.__views.tableViewListPlaces!click!showDetails"] && $.addListener($.__views.tableViewListPlaces, "click", showDetails);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;