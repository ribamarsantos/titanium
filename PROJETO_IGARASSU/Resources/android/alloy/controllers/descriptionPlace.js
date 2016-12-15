function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function showMap() {
        try {
            var ctrl = Alloy.createController("mapPlace", objplace);
            ctrl.getView().open();
        } catch (e2) {
            alert(e2.message);
        } finally {}
    }
    function favoritePlace() {
        if (1 != objplace.favorite) {
            objplace.favorite = 1;
            Alloy.createModel("place", objplace).save();
            close();
        } else alert("Já é um favorito");
    }
    function close() {
        $.wincontent.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "descriptionPlace";
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
        id: "wincontent"
    });
    $.__views.scrollView = Ti.UI.createScrollView({
        layout: "vertical",
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        id: "scrollView",
        showVerticalScrollIndicator: true,
        showHorizontalScrollIndicator: true
    });
    $.__views.wincontent.add($.__views.scrollView);
    $.__views.viewDescription = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        backgroundColor: "orange",
        id: "viewDescription"
    });
    $.__views.scrollView.add($.__views.viewDescription);
    $.__views.imgPlace = Ti.UI.createImageView({
        width: Ti.UI.FILL,
        height: 200,
        top: 10,
        left: 10,
        right: 10,
        bottom: 10,
        id: "imgPlace"
    });
    $.__views.viewDescription.add($.__views.imgPlace);
    $.__views.viewBtn = Ti.UI.createView({
        backgroundColor: "gray",
        layout: "horizontal",
        height: 60,
        width: Ti.UI.FILL,
        id: "viewBtn"
    });
    $.__views.viewDescription.add($.__views.viewBtn);
    $.__views.btnFavorite = Ti.UI.createImageView({
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        width: 45,
        left: "70%",
        height: 45,
        image: "/favorite.png",
        top: 7,
        id: "btnFavorite"
    });
    $.__views.viewBtn.add($.__views.btnFavorite);
    favoritePlace ? $.addListener($.__views.btnFavorite, "click", favoritePlace) : __defers["$.__views.btnFavorite!click!favoritePlace"] = true;
    $.__views.btnMap = Ti.UI.createImageView({
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        width: 45,
        height: 45,
        image: "/location.png",
        top: 7,
        id: "btnMap"
    });
    $.__views.viewBtn.add($.__views.btnMap);
    showMap ? $.addListener($.__views.btnMap, "click", showMap) : __defers["$.__views.btnMap!click!showMap"] = true;
    $.__views.lblAddress = Ti.UI.createLabel({
        color: "white",
        id: "lblAddress"
    });
    $.__views.viewDescription.add($.__views.lblAddress);
    $.__views.lblPrice = Ti.UI.createLabel({
        color: "white",
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        id: "lblPrice"
    });
    $.__views.viewDescription.add($.__views.lblPrice);
    $.__views.lblPhone = Ti.UI.createLabel({
        color: "white",
        autoLink: Ti.UI.AUTOLINK_PHONE_NUMBERS,
        id: "lblPhone"
    });
    $.__views.viewDescription.add($.__views.lblPhone);
    $.__views.lblDescription = Ti.UI.createLabel({
        color: "white",
        left: 10,
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "lblDescription"
    });
    $.__views.viewDescription.add($.__views.lblDescription);
    $.__views.navWindow = (require("ui").createNavigationWindow || Ti.UI.iOS.createNavigationWindow)({
        window: $.__views.wincontent,
        id: "navWindow"
    });
    $.__views.navWindow && $.addTopLevelView($.__views.navWindow);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var arg = [];
    arg = JSON.stringify(args[0]);
    var objplace = JSON.parse(arg);
    $.wincontent.title = objplace.place_name;
    $.imgPlace.image = objplace.photo;
    $.lblPhone.text = objplace.phone;
    $.lblAddress.text = objplace.address + " - " + objplace.district;
    $.lblPrice.text = objplace.price;
    $.btnFavorite.visible = 1 != objplace.favorite;
    var lang = Ti.Locale.currentLanguage;
    $.lblDescription.text = lang.indexOf("pt-") ? objplace.description_pt : lang.indexOf("es-") ? objplace.description_esp : objplace.description_eng;
    __defers["$.__views.btnFavorite!click!favoritePlace"] && $.addListener($.__views.btnFavorite, "click", favoritePlace);
    __defers["$.__views.btnMap!click!showMap"] && $.addListener($.__views.btnMap, "click", showMap);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;