function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId9(e) {
        if (e && e.fromAdapter) return;
        __alloyId9.opts || {};
        var models = __alloyId8.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId0 = models[i];
            __alloyId0.__transform = _.isFunction(__alloyId0.transform) ? __alloyId0.transform() : __alloyId0.toJSON();
            var __alloyId2 = Ti.UI.createTableViewRow({});
            rows.push(__alloyId2);
            var __alloyId3 = Ti.UI.createView({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                layout: "horizontal"
            });
            __alloyId2.add(__alloyId3);
            var __alloyId4 = Ti.UI.createImageView({
                height: 96,
                width: 72,
                left: 5,
                top: 5,
                bottom: 5,
                image: __alloyId0.__transform.Poster
            });
            __alloyId3.add(__alloyId4);
            var __alloyId5 = Ti.UI.createView({
                height: Ti.UI.SIZE,
                width: Ti.UI.SIZE,
                layout: "vertical"
            });
            __alloyId3.add(__alloyId5);
            var __alloyId6 = Ti.UI.createLabel({
                top: 5,
                left: 5,
                text: __alloyId0.__transform.Title
            });
            __alloyId5.add(__alloyId6);
            var __alloyId7 = Ti.UI.createLabel({
                top: 5,
                left: 5,
                text: __alloyId0.__transform.Year
            });
            __alloyId5.add(__alloyId7);
        }
        $.__views.myTableView.setData(rows);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
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
    $.__views.index = Ti.UI.createWindow({
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.myTableView = Ti.UI.createTableView({
        id: "myTableView"
    });
    $.__views.index.add($.__views.myTableView);
    var __alloyId8 = Alloy.Collections["filmes"] || filmes;
    __alloyId8.on("fetch destroy change add remove reset", __alloyId9);
    exports.destroy = function() {
        __alloyId8 && __alloyId8.off("fetch destroy change add remove reset", __alloyId9);
    };
    _.extend($, $.__views);
    var xhr = Ti.Network.createHTTPClient();
    xhr.onerror = function(e) {
        alert(e);
    };
    xhr.onload = function() {
        Alloy.Collections.filmes.reset(JSON.parse(this.responseText).Search);
    };
    xhr.open("GET", "http://www.omdbapi.com/?s=batman&y=&plot=short&r=json");
    xhr.send();
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;