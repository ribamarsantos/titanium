function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId18(e) {
        if (e && e.fromAdapter) return;
        __alloyId18.opts || {};
        var models = __alloyId17.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId10 = models[i];
            __alloyId10.__transform = _.isFunction(__alloyId10.transform) ? __alloyId10.transform() : __alloyId10.toJSON();
            var __alloyId11 = Ti.UI.createTableViewRow({
                identificador: __alloyId10.__transform.alloy_id,
                id2: __alloyId10.__transform.id
            });
            rows.push(__alloyId11);
            var __alloyId12 = Ti.UI.createView({
                layout: "horizontal",
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE
            });
            __alloyId11.add(__alloyId12);
            var __alloyId13 = Ti.UI.createImageView({
                height: 56,
                width: "20%",
                left: 5,
                top: 5,
                bottom: 5,
                image: __alloyId10.__transform.photo
            });
            __alloyId12.add(__alloyId13);
            var __alloyId14 = Ti.UI.createView({
                left: 8,
                height: Ti.UI.SIZE,
                width: "60%",
                layout: "vertical"
            });
            __alloyId12.add(__alloyId14);
            var __alloyId15 = Ti.UI.createLabel({
                top: 5,
                left: 5,
                font: {
                    fontSize: 18
                },
                text: __alloyId10.__transform.place_name
            });
            __alloyId14.add(__alloyId15);
            var __alloyId16 = Ti.UI.createLabel({
                top: 5,
                left: 5,
                font: {
                    fontSize: 12,
                    fontStyle: "italic"
                },
                text: __alloyId10.__transform.phone,
                autoLink: Ti.UI.AUTOLINK_PHONE_NUMBERS
            });
            __alloyId14.add(__alloyId16);
        }
        $.__views.__alloyId9.setData(rows);
    }
    function showdetailPlace() {
        alert("open descriptionPlace");
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
    $.__views.__alloyId9 = Ti.UI.createTableView({
        id: "__alloyId9"
    });
    $.__views.wincontent.add($.__views.__alloyId9);
    var __alloyId17 = Alloy.Collections["places"] || places;
    __alloyId17.on("fetch destroy change add remove reset", __alloyId18);
    showdetailPlace ? $.addListener($.__views.__alloyId9, "click", showdetailPlace) : __defers["$.__views.__alloyId9!click!showdetailPlace"] = true;
    $.__views.favoritePlace = (require("ui").createNavigationWindow || Ti.UI.iOS.createNavigationWindow)({
        window: $.__views.wincontent,
        id: "favoritePlace"
    });
    $.__views.favoritePlace && $.addTopLevelView($.__views.favoritePlace);
    exports.destroy = function() {
        __alloyId17 && __alloyId17.off("fetch destroy change add remove reset", __alloyId18);
    };
    _.extend($, $.__views);
    $.args;
    Alloy.Collections.places.fetch();
    __defers["$.__views.__alloyId9!click!showdetailPlace"] && $.addListener($.__views.__alloyId9, "click", showdetailPlace);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;