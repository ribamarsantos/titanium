function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function showListPlace() {
        Alloy.createController("listPlace").getView().open();
    }
    function getTemperatureInfo() {
        var temperature = JSON.parse(this.responseText);
        if (200 == temperature.cod) {
            $.imgviewTemperature.image = "http://openweathermap.org/img/w/" + temperature.weather[0].icon + ".png";
            $.lblTemperature.text = temperature.main.temp + "º";
        }
    }
    function showFavoritePlace() {
        Alloy.createController("favoritePlace").getView().open();
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
    var __defers = {};
    $.__views.__alloyId23 = Ti.UI.createWindow({
        layout: "vertical",
        id: "__alloyId23"
    });
    $.__views.header = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        backgroundColor: "white",
        id: "header"
    });
    $.__views.__alloyId23.add($.__views.header);
    $.__views.lblCityName = Ti.UI.createLabel({
        color: "blue",
        text: L("city_name"),
        font: {
            fontSize: 36
        },
        id: "lblCityName"
    });
    $.__views.header.add($.__views.lblCityName);
    $.__views.imgviewTemperature = Ti.UI.createImageView({
        width: 36,
        height: 36,
        left: 10,
        image: "http://openweathermap.org/img/w/10d.png",
        id: "imgviewTemperature"
    });
    $.__views.header.add($.__views.imgviewTemperature);
    $.__views.lblTemperature = Ti.UI.createLabel({
        color: "blue",
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "31º",
        font: {
            fontSize: 14
        },
        id: "lblTemperature"
    });
    $.__views.header.add($.__views.lblTemperature);
    $.__views.viewMenu = Ti.UI.createScrollView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        layout: "vertical",
        id: "viewMenu",
        backgroundColor: "white",
        center: true
    });
    $.__views.__alloyId23.add($.__views.viewMenu);
    $.__views.viewColumn01 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "viewColumn01",
        backgroundColor: "white"
    });
    $.__views.viewMenu.add($.__views.viewColumn01);
    $.__views.__alloyId24 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId24"
    });
    $.__views.viewColumn01.add($.__views.__alloyId24);
    $.__views.imgWhatToDo = Ti.UI.createImageView({
        width: 96,
        height: 96,
        top: 10,
        left: 10,
        right: 10,
        bottom: 10,
        image: "/whattodo.png",
        id: "imgWhatToDo"
    });
    $.__views.__alloyId24.add($.__views.imgWhatToDo);
    showListPlace ? $.addListener($.__views.imgWhatToDo, "click", showListPlace) : __defers["$.__views.imgWhatToDo!click!showListPlace"] = true;
    $.__views.lblWhatToDo = Ti.UI.createLabel({
        color: "blue",
        font: {
            fontSize: 16,
            fontFamily: "Helvetica",
            fontWeight: "bold"
        },
        text: L("lbl_whattodo"),
        id: "lblWhatToDo"
    });
    $.__views.__alloyId24.add($.__views.lblWhatToDo);
    showListPlace ? $.addListener($.__views.lblWhatToDo, "click", showListPlace) : __defers["$.__views.lblWhatToDo!click!showListPlace"] = true;
    $.__views.__alloyId25 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId25"
    });
    $.__views.viewColumn01.add($.__views.__alloyId25);
    $.__views.imgFavorite = Ti.UI.createImageView({
        width: 96,
        height: 96,
        top: 10,
        left: 10,
        right: 10,
        bottom: 10,
        image: "/bookmark.png",
        id: "imgFavorite"
    });
    $.__views.__alloyId25.add($.__views.imgFavorite);
    showFavoritePlace ? $.addListener($.__views.imgFavorite, "click", showFavoritePlace) : __defers["$.__views.imgFavorite!click!showFavoritePlace"] = true;
    $.__views.lblFavorite = Ti.UI.createLabel({
        color: "blue",
        font: {
            fontSize: 16,
            fontFamily: "Helvetica",
            fontWeight: "bold"
        },
        text: L("lbl_favorite"),
        id: "lblFavorite"
    });
    $.__views.__alloyId25.add($.__views.lblFavorite);
    showFavoritePlace ? $.addListener($.__views.lblFavorite, "click", showFavoritePlace) : __defers["$.__views.lblFavorite!click!showFavoritePlace"] = true;
    $.__views.viewColumn02 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "viewColumn02",
        backgroundColor: "white"
    });
    $.__views.viewMenu.add($.__views.viewColumn02);
    $.__views.__alloyId26 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId26"
    });
    $.__views.viewColumn02.add($.__views.__alloyId26);
    $.__views.imgInformation = Ti.UI.createImageView({
        width: 96,
        height: 96,
        top: 10,
        left: 10,
        right: 10,
        bottom: 10,
        image: "/information.png",
        id: "imgInformation"
    });
    $.__views.__alloyId26.add($.__views.imgInformation);
    $.__views.lblInformation = Ti.UI.createLabel({
        color: "blue",
        font: {
            fontSize: 16,
            fontFamily: "Helvetica",
            fontWeight: "bold"
        },
        text: L("lbl_information"),
        id: "lblInformation"
    });
    $.__views.__alloyId26.add($.__views.lblInformation);
    $.__views.__alloyId27 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId27"
    });
    $.__views.viewColumn02.add($.__views.__alloyId27);
    $.__views.imgEvent = Ti.UI.createImageView({
        width: 96,
        height: 96,
        top: 10,
        left: 10,
        right: 10,
        bottom: 10,
        image: "/event.png",
        id: "imgEvent"
    });
    $.__views.__alloyId27.add($.__views.imgEvent);
    $.__views.lblEvent = Ti.UI.createLabel({
        color: "blue",
        font: {
            fontSize: 16,
            fontFamily: "Helvetica",
            fontWeight: "bold"
        },
        text: L("lbl_event"),
        id: "lblEvent"
    });
    $.__views.__alloyId27.add($.__views.lblEvent);
    $.__views.index = (require("ui").createNavigationWindow || Ti.UI.iOS.createNavigationWindow)({
        window: $.__views.__alloyId23,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var xhr = Ti.Network.createHTTPClient();
    var link = "http://api.openweathermap.org/data/2.5/weather?id=3398352&appid=68988c96250c1d2068f922c26a917810&units=metric&lang=pt";
    $.index.open();
    xhr.open("GET", link);
    xhr.send();
    xhr.onload = getTemperatureInfo;
    xhr.onerror = function(e) {
        alert(e);
    };
    __defers["$.__views.imgWhatToDo!click!showListPlace"] && $.addListener($.__views.imgWhatToDo, "click", showListPlace);
    __defers["$.__views.lblWhatToDo!click!showListPlace"] && $.addListener($.__views.lblWhatToDo, "click", showListPlace);
    __defers["$.__views.imgFavorite!click!showFavoritePlace"] && $.addListener($.__views.imgFavorite, "click", showFavoritePlace);
    __defers["$.__views.lblFavorite!click!showFavoritePlace"] && $.addListener($.__views.lblFavorite, "click", showFavoritePlace);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;