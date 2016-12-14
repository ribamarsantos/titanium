function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId8(e) {
        if (e && e.fromAdapter) return;
        __alloyId8.opts || {};
        var models = filterPlace(__alloyId7);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId0 = models[i];
            __alloyId0.__transform = _.isFunction(__alloyId0.transform) ? __alloyId0.transform() : __alloyId0.toJSON();
            var __alloyId1 = Ti.UI.createTableViewRow({
                identificador: __alloyId0.__transform.id
            });
            rows.push(__alloyId1);
            var __alloyId2 = Ti.UI.createView({
                layout: "horizontal",
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE
            });
            __alloyId1.add(__alloyId2);
            var __alloyId3 = Ti.UI.createImageView({
                height: 56,
                width: "20%",
                left: 5,
                top: 5,
                bottom: 5,
                image: __alloyId0.__transform.photo
            });
            __alloyId2.add(__alloyId3);
            var __alloyId4 = Ti.UI.createView({
                left: 8,
                height: Ti.UI.SIZE,
                width: "60%",
                layout: "vertical"
            });
            __alloyId2.add(__alloyId4);
            var __alloyId5 = Ti.UI.createLabel({
                top: 5,
                left: 5,
                font: {
                    fontSize: 18
                },
                text: __alloyId0.__transform.place_name
            });
            __alloyId4.add(__alloyId5);
            var __alloyId6 = Ti.UI.createLabel({
                top: 5,
                left: 5,
                font: {
                    fontSize: 12,
                    fontStyle: "italic"
                },
                text: __alloyId0.__transform.phone,
                autoLink: Ti.UI.AUTOLINK_PHONE_NUMBERS
            });
            __alloyId4.add(__alloyId6);
        }
        $.__views.tableViewDetailPlace.setData(rows);
    }
    function callPlace() {
        if (Ti.Network.online) {
            xhr.open("GET", "http://igarassu-project.herokuapp.com/place");
            xhr.send();
        } else Ti.API.info("Sem internet!");
    }
    function filterPlace(collection) {
        return collection.where({
            place_type: row.id
        });
    }
    function showMoreDetailPlace(e) {
        var objplace = Alloy.Collections.places.where({
            id: e.rowData.identificador
        });
        Alloy.createController("descriptionPlace", objplace).getView().open();
    }
    function removeFavorite() {
        Ti.API.info("long click");
    }
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
    $.__views.tableViewDetailPlace = Ti.UI.createTableView({
        id: "tableViewDetailPlace"
    });
    $.__views.windowDetail.add($.__views.tableViewDetailPlace);
    var __alloyId7 = Alloy.Collections["places"] || places;
    __alloyId7.on("fetch destroy change add remove reset", __alloyId8);
    showMoreDetailPlace ? $.addListener($.__views.tableViewDetailPlace, "click", showMoreDetailPlace) : __defers["$.__views.tableViewDetailPlace!click!showMoreDetailPlace"] = true;
    removeFavorite ? $.addListener($.__views.tableViewDetailPlace, "longclick", removeFavorite) : __defers["$.__views.tableViewDetailPlace!longclick!removeFavorite"] = true;
    $.__views.detailPlace = (require("ui").createNavigationWindow || Ti.UI.iOS.createNavigationWindow)({
        window: $.__views.windowDetail,
        id: "detailPlace"
    });
    $.__views.detailPlace && $.addTopLevelView($.__views.detailPlace);
    exports.destroy = function() {
        __alloyId7 && __alloyId7.off("fetch destroy change add remove reset", __alloyId8);
    };
    _.extend($, $.__views);
    var row = $.args;
    var xhr = Ti.Network.createHTTPClient({
        onload: function() {
            Alloy.Collections.places.reset(JSON.parse(this.responseText));
        },
        onerror: function(e) {
            Ti.API.debug(e.message);
        },
        timeout: 5e3
    });
    $.windowDetail.title = row.title;
    $.windowDetail.addEventListener("open", callPlace);
    __defers["$.__views.tableViewDetailPlace!click!showMoreDetailPlace"] && $.addListener($.__views.tableViewDetailPlace, "click", showMoreDetailPlace);
    __defers["$.__views.tableViewDetailPlace!longclick!removeFavorite"] && $.addListener($.__views.tableViewDetailPlace, "longclick", removeFavorite);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;