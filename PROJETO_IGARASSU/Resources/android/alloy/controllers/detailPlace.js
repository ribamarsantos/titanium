function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId3(e) {
        if (e && e.fromAdapter) return;
        __alloyId3.opts || {};
        var models = filterPlace(__alloyId2);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId0 = models[i];
            __alloyId0.__transform = _.isFunction(__alloyId0.transform) ? __alloyId0.transform() : __alloyId0.toJSON();
            var __alloyId1 = Ti.UI.createTableViewRow({
                title: __alloyId0.__transform.name
            });
            rows.push(__alloyId1);
        }
        $.__views.tableViewDetailPlace.setData(rows);
    }
    function filterPlace(collection) {
        return collection.where({
            place_type: row.id
        });
    }
    function showDescriptionPlace() {}
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "detailPlace";
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
    $.__views.detailPlace = Ti.UI.createWindow({
        id: "detailPlace"
    });
    $.__views.detailPlace && $.addTopLevelView($.__views.detailPlace);
    $.__views.lblPlace = Ti.UI.createLabel({
        id: "lblPlace"
    });
    $.__views.detailPlace.add($.__views.lblPlace);
    $.__views.tableViewDetailPlace = Ti.UI.createTableView({
        id: "tableViewDetailPlace"
    });
    $.__views.detailPlace.add($.__views.tableViewDetailPlace);
    var __alloyId2 = Alloy.Collections["places"] || places;
    __alloyId2.on("fetch destroy change add remove reset", __alloyId3);
    showDescriptionPlace ? $.addListener($.__views.tableViewDetailPlace, "click", showDescriptionPlace) : __defers["$.__views.tableViewDetailPlace!click!showDescriptionPlace"] = true;
    exports.destroy = function() {
        __alloyId2 && __alloyId2.off("fetch destroy change add remove reset", __alloyId3);
    };
    _.extend($, $.__views);
    var row = $.args;
    $.lblPlace.text = row.title;
    __defers["$.__views.tableViewDetailPlace!click!showDescriptionPlace"] && $.addListener($.__views.tableViewDetailPlace, "click", showDescriptionPlace);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;