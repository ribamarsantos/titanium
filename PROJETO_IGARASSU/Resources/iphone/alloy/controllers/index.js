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
        var ctrl = Alloy.createController("listPlace");
        var navCtrl = Ti.UI.iOS.createNavigationWindow({
            modal: true,
            window: ctrl.getView()
        });
        ctrl.navWindow = navCtrl;
        navCtrl.open();
    }
    function getTemperatureInfo() {
        var temperature = JSON.parse(this.responseText);
        if (200 == temperature.cod) {
            $.imgviewTemperature.image = "http://openweathermap.org/img/w/" + temperature.weather[0].icon + ".png";
            $.lblTemperature.text = temperature.main.temp + "º";
        }
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
    $.__views.index = Ti.UI.createWindow({
        layout: "vertical",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.header = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        backgroundColor: "#004C00",
        id: "header"
    });
    $.__views.index.add($.__views.header);
    $.__views.lblCityName = Ti.UI.createLabel({
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
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "31º",
        font: {
            fontSize: 14
        },
        id: "lblTemperature"
    });
    $.__views.header.add($.__views.lblTemperature);
    $.__views.viewMenu = Ti.UI.createScrollView({
        height: Ti.UI.FILL,
        layout: "vertical",
        id: "viewMenu",
        backgroundColor: "green"
    });
    $.__views.index.add($.__views.viewMenu);
    $.__views.viewColumn01 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "viewColumn01",
        backgroundColor: "teal"
    });
    $.__views.viewMenu.add($.__views.viewColumn01);
    $.__views.__alloyId10 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId10"
    });
    $.__views.viewColumn01.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createImageView({
        width: 96,
        height: 96,
        image: "https://igarassu-project.herokuapp.com/imagens/bope_paintball.jpg",
        top: 10,
        left: 10,
        right: 10,
        bottom: 10,
        borderRadius: 100,
        id: "__alloyId11"
    });
    $.__views.__alloyId10.add($.__views.__alloyId11);
    showListPlace ? $.addListener($.__views.__alloyId11, "click", showListPlace) : __defers["$.__views.__alloyId11!click!showListPlace"] = true;
    $.__views.lblWhatToDo = Ti.UI.createLabel({
        font: {
            fontSize: 16,
            fontFamily: "Helvetica",
            fontWeight: "bold"
        },
        text: L("lbl_whattodo"),
        id: "lblWhatToDo"
    });
    $.__views.__alloyId10.add($.__views.lblWhatToDo);
    showListPlace ? $.addListener($.__views.lblWhatToDo, "click", showListPlace) : __defers["$.__views.lblWhatToDo!click!showListPlace"] = true;
    $.__views.__alloyId12 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId12"
    });
    $.__views.viewColumn01.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createImageView({
        width: 96,
        height: 96,
        image: "https://igarassu-project.herokuapp.com/imagens/bope_paintball.jpg",
        top: 10,
        left: 10,
        right: 10,
        bottom: 10,
        borderRadius: 100,
        id: "__alloyId13"
    });
    $.__views.__alloyId12.add($.__views.__alloyId13);
    $.__views.lblFavorite = Ti.UI.createLabel({
        font: {
            fontSize: 16,
            fontFamily: "Helvetica",
            fontWeight: "bold"
        },
        text: L("lbl_favorite"),
        id: "lblFavorite"
    });
    $.__views.__alloyId12.add($.__views.lblFavorite);
    $.__views.viewColumn02 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "viewColumn02",
        backgroundColor: "blue"
    });
    $.__views.viewMenu.add($.__views.viewColumn02);
    $.__views.__alloyId14 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId14"
    });
    $.__views.viewColumn02.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createImageView({
        width: 96,
        height: 96,
        image: "https://igarassu-project.herokuapp.com/imagens/bope_paintball.jpg",
        top: 10,
        left: 10,
        right: 10,
        bottom: 10,
        borderRadius: 100,
        id: "__alloyId15"
    });
    $.__views.__alloyId14.add($.__views.__alloyId15);
    $.__views.lblInformation = Ti.UI.createLabel({
        font: {
            fontSize: 16,
            fontFamily: "Helvetica",
            fontWeight: "bold"
        },
        text: L("lbl_information"),
        id: "lblInformation"
    });
    $.__views.__alloyId14.add($.__views.lblInformation);
    $.__views.__alloyId16 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId16"
    });
    $.__views.viewColumn02.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createImageView({
        width: 96,
        height: 96,
        image: "https://igarassu-project.herokuapp.com/imagens/bope_paintball.jpg",
        top: 10,
        left: 10,
        right: 10,
        bottom: 10,
        borderRadius: 100,
        id: "__alloyId17"
    });
    $.__views.__alloyId16.add($.__views.__alloyId17);
    $.__views.lblEvent = Ti.UI.createLabel({
        font: {
            fontSize: 16,
            fontFamily: "Helvetica",
            fontWeight: "bold"
        },
        text: L("lbl_event"),
        id: "lblEvent"
    });
    $.__views.__alloyId16.add($.__views.lblEvent);
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
    __defers["$.__views.__alloyId11!click!showListPlace"] && $.addListener($.__views.__alloyId11, "click", showListPlace);
    __defers["$.__views.lblWhatToDo!click!showListPlace"] && $.addListener($.__views.lblWhatToDo, "click", showListPlace);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;