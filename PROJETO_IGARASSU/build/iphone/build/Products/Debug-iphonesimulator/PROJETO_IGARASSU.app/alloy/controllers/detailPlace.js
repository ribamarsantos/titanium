function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId11(e) {
        if (e && e.fromAdapter) return;
        __alloyId11.opts || {};
        var models = filterPlace(__alloyId10);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId0 = models[i];
            __alloyId0.__transform = _.isFunction(__alloyId0.transform) ? __alloyId0.transform() : __alloyId0.toJSON();
            var __alloyId2 = Ti.UI.createTableViewRow({});
            rows.push(__alloyId2);
            var __alloyId3 = Ti.UI.createView({
                layout: "horizontal",
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE
            });
            __alloyId2.add(__alloyId3);
            var __alloyId4 = Ti.UI.createImageView({
                height: 96,
                width: "20%",
                left: 5,
                top: 5,
                bottom: 5,
                image: __alloyId0.__transform.photo
            });
            __alloyId3.add(__alloyId4);
            var __alloyId5 = Ti.UI.createView({
                left: 8,
                height: Ti.UI.SIZE,
                width: "60%",
                layout: "vertical"
            });
            __alloyId3.add(__alloyId5);
            var __alloyId6 = Ti.UI.createLabel({
                top: 5,
                left: 5,
                font: {
                    fontSize: 18
                },
                text: __alloyId0.__transform.place_name
            });
            __alloyId5.add(__alloyId6);
            var __alloyId7 = Ti.UI.createLabel({
                top: 5,
                left: 5,
                font: {
                    fontSize: 12,
                    fontStyle: "italic"
                },
                text: __alloyId0.__transform.phone
            });
            __alloyId5.add(__alloyId7);
            var __alloyId8 = Ti.UI.createView({
                left: 5,
                width: "15%"
            });
            __alloyId3.add(__alloyId8);
            var __alloyId9 = Ti.UI.createImageView({
                width: "50%",
                height: Ti.UI.SIZE,
                image: "/location.png"
            });
            __alloyId8.add(__alloyId9);
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
    $.__views.windowDetail = Ti.UI.createWindow({
        id: "windowDetail"
    });
    $.__views.windowDetail && $.addTopLevelView($.__views.windowDetail);
    $.__views.tableViewDetailPlace = Ti.UI.createTableView({
        id: "tableViewDetailPlace"
    });
    $.__views.windowDetail.add($.__views.tableViewDetailPlace);
    var __alloyId10 = Alloy.Collections["places"] || places;
    __alloyId10.on("fetch destroy change add remove reset", __alloyId11);
    showDescriptionPlace ? $.addListener($.__views.tableViewDetailPlace, "click", showDescriptionPlace) : __defers["$.__views.tableViewDetailPlace!click!showDescriptionPlace"] = true;
    exports.destroy = function() {
        __alloyId10 && __alloyId10.off("fetch destroy change add remove reset", __alloyId11);
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
    $.windowDetail.title = row.title;
    __defers["$.__views.tableViewDetailPlace!click!showDescriptionPlace"] && $.addListener($.__views.tableViewDetailPlace, "click", showDescriptionPlace);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;