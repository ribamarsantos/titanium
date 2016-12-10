function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId22(e) {
        if (e && e.fromAdapter) return;
        __alloyId22.opts || {};
        var models = __alloyId21.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId12 = models[i];
            __alloyId12.__transform = _.isFunction(__alloyId12.transform) ? __alloyId12.transform() : __alloyId12.toJSON();
            var __alloyId13 = Ti.UI.createTableViewRow({
                identificador: __alloyId12.__transform.alloy_id,
                id2: __alloyId12.__transform.id
            });
            rows.push(__alloyId13);
            var __alloyId14 = Ti.UI.createView({
                layout: "horizontal",
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE
            });
            __alloyId13.add(__alloyId14);
            var __alloyId15 = Ti.UI.createImageView({
                height: 56,
                width: "20%",
                left: 5,
                top: 5,
                bottom: 5,
                image: __alloyId12.__transform.photo
            });
            __alloyId14.add(__alloyId15);
            var __alloyId16 = Ti.UI.createView({
                left: 8,
                height: Ti.UI.SIZE,
                width: "60%",
                layout: "vertical"
            });
            __alloyId14.add(__alloyId16);
            var __alloyId17 = Ti.UI.createLabel({
                top: 5,
                left: 5,
                font: {
                    fontSize: 18
                },
                text: __alloyId12.__transform.place_name
            });
            __alloyId16.add(__alloyId17);
            var __alloyId18 = Ti.UI.createLabel({
                top: 5,
                left: 5,
                font: {
                    fontSize: 12,
                    fontStyle: "italic"
                },
                text: __alloyId12.__transform.phone,
                autoLink: Ti.UI.AUTOLINK_PHONE_NUMBERS
            });
            __alloyId16.add(__alloyId18);
            var __alloyId19 = Ti.UI.createView({
                left: 5,
                width: "10%"
            });
            __alloyId14.add(__alloyId19);
            var __alloyId20 = Ti.UI.createImageView({
                width: "50%",
                height: Ti.UI.SIZE,
                image: "/location.png"
            });
            __alloyId19.add(__alloyId20);
        }
        $.__views.__alloyId11.setData(rows);
    }
    function showdetailPlace(e) {
        var objplace = Alloy.Collections.places.get(e.rowData.identificador);
        objplace.isFavorite = true;
        Alloy.createController("descriptionPlace", objplace).getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "favoritePlace";
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
    $.__views.wincontent = Ti.UI.createWindow({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "orange",
        id: "wincontent"
    });
    $.__views.__alloyId11 = Ti.UI.createTableView({
        id: "__alloyId11"
    });
    $.__views.wincontent.add($.__views.__alloyId11);
    var __alloyId21 = Alloy.Collections["places"] || places;
    __alloyId21.on("fetch destroy change add remove reset", __alloyId22);
    showdetailPlace ? $.addListener($.__views.__alloyId11, "click", showdetailPlace) : __defers["$.__views.__alloyId11!click!showdetailPlace"] = true;
    $.__views.favoritePlace = (require("ui").createNavigationWindow || Ti.UI.iOS.createNavigationWindow)({
        window: $.__views.wincontent,
        id: "favoritePlace"
    });
    $.__views.favoritePlace && $.addTopLevelView($.__views.favoritePlace);
    exports.destroy = function() {
        __alloyId21 && __alloyId21.off("fetch destroy change add remove reset", __alloyId22);
    };
    _.extend($, $.__views);
    $.args;
    Alloy.Collections.places.fetch();
    __defers["$.__views.__alloyId11!click!showdetailPlace"] && $.addListener($.__views.__alloyId11, "click", showdetailPlace);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;