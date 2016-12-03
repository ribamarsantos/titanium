function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId13(e) {
        if (e && e.fromAdapter) return;
        __alloyId13.opts || {};
        var models = filterPlace(__alloyId12);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId0 = models[i];
            __alloyId0.__transform = _.isFunction(__alloyId0.transform) ? __alloyId0.transform() : __alloyId0.toJSON();
            var __alloyId2 = Ti.UI.createTableViewRow({});
            rows.push(__alloyId2);
            var __alloyId3 = Ti.UI.createView({
                layout: "vertical"
            });
            __alloyId2.add(__alloyId3);
            var __alloyId4 = Ti.UI.createImageView({
                width: Ti.UI.FILL,
                height: 250,
                borderWidth: 5,
                image: __alloyId0.__transform.photo
            });
            __alloyId3.add(__alloyId4);
            var __alloyId5 = Ti.UI.createImageView({
                image: "/favorite.png",
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE
            });
            __alloyId3.add(__alloyId5);
            var __alloyId6 = Ti.UI.createImageView({});
            __alloyId3.add(__alloyId6);
            var __alloyId7 = Ti.UI.createLabel({
                text: __alloyId0.__transform.place_name
            });
            __alloyId3.add(__alloyId7);
            var __alloyId8 = Ti.UI.createLabel({
                text: __alloyId0.__transform.price
            });
            __alloyId3.add(__alloyId8);
            var __alloyId9 = Ti.UI.createLabel({
                text: __alloyId0.__transform.address
            });
            __alloyId3.add(__alloyId9);
            var __alloyId10 = Ti.UI.createLabel({
                text: __alloyId0.__transform.phone
            });
            __alloyId3.add(__alloyId10);
            var __alloyId11 = Ti.UI.createLabel({
                text: __alloyId0.__transform.description_eng
            });
            __alloyId3.add(__alloyId11);
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
    $.__views.winDetail = Ti.UI.createWindow({
        layout: "vertical",
        id: "winDetail"
    });
    $.__views.winDetail && $.addTopLevelView($.__views.winDetail);
    $.__views.lblPlace = Ti.UI.createLabel({
        id: "lblPlace"
    });
    $.__views.winDetail.add($.__views.lblPlace);
    $.__views.tableViewDetailPlace = Ti.UI.createTableView({
        id: "tableViewDetailPlace"
    });
    $.__views.winDetail.add($.__views.tableViewDetailPlace);
    var __alloyId12 = Alloy.Collections["places"] || places;
    __alloyId12.on("fetch destroy change add remove reset", __alloyId13);
    showDescriptionPlace ? $.addListener($.__views.tableViewDetailPlace, "click", showDescriptionPlace) : __defers["$.__views.tableViewDetailPlace!click!showDescriptionPlace"] = true;
    exports.destroy = function() {
        __alloyId12 && __alloyId12.off("fetch destroy change add remove reset", __alloyId13);
    };
    _.extend($, $.__views);
    var row = $.args;
    var xhr = Ti.Network.createHTTPClient();
    xhr.onerror = function(e) {
        alert(e);
    };
    xhr.onload = function() {
        Ti.API.info(this.responseText);
        Alloy.Collections.places.reset(JSON.parse(this.responseText));
    };
    xhr.open("GET", "http://igarassu-project.herokuapp.com/place");
    xhr.send();
    $.lblPlace.text = row.title;
    __defers["$.__views.tableViewDetailPlace!click!showDescriptionPlace"] && $.addListener($.__views.tableViewDetailPlace, "click", showDescriptionPlace);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;