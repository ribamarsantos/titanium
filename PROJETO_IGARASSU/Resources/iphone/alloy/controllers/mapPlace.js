function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "mapPlace";
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
    $.__views.mapPlace = Ti.UI.createWindow({
        id: "mapPlace"
    });
    $.__views.mapPlace && $.addTopLevelView($.__views.mapPlace);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var place = $.args;
    var Map = require("ti.map");
    var placeAnnotation = Map.createAnnotation({
        latitude: place.placelat,
        longitude: place.placelong,
        title: place.place_name,
        subtitle: place.phone,
        pincolor: Map.ANNOTATION_RED
    });
    var map = Map.createView({
        mapType: Map.NORMAL_TYPE,
        region: {
            latitude: place.placelat,
            longitude: place.placelong,
            latitudeDelta: .01,
            longitudeDelta: .01
        },
        animate: true,
        annotations: [ placeAnnotation ]
    });
    $.mapPlace.title = place.place_name;
    $.mapPlace.add(map);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;