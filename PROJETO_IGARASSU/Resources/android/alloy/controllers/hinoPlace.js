function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function play() {
        audioPlayer.start();
        $.progress.min = 0;
        $.progress.max = 1;
    }
    function pause() {
        audioPlayer.pause();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "hinoPlace";
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
    $.__views.__alloyId19 = Ti.UI.createWindow({
        layout: "vertical",
        id: "__alloyId19"
    });
    $.__views.__alloyId20 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId20"
    });
    $.__views.__alloyId19.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createButton({
        top: 20,
        image: "/play.png",
        width: Ti.UI.SIZE,
        right: 20,
        id: "__alloyId21"
    });
    $.__views.__alloyId20.add($.__views.__alloyId21);
    play ? $.addListener($.__views.__alloyId21, "click", play) : __defers["$.__views.__alloyId21!click!play"] = true;
    $.__views.__alloyId22 = Ti.UI.createButton({
        top: 20,
        image: "/pause.png",
        width: Ti.UI.SIZE,
        id: "__alloyId22"
    });
    $.__views.__alloyId20.add($.__views.__alloyId22);
    pause ? $.addListener($.__views.__alloyId22, "click", pause) : __defers["$.__views.__alloyId22!click!pause"] = true;
    $.__views.progress = Ti.UI.createProgressBar({
        top: 10,
        id: "progress",
        width: 250,
        color: "orange"
    });
    $.__views.__alloyId19.add($.__views.progress);
    $.__views.__alloyId23 = Ti.UI.createScrollView({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        id: "__alloyId23"
    });
    $.__views.__alloyId19.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createTextArea({
        editable: false,
        borderWidth: 2,
        borderRadius: 5,
        top: 20,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        value: "\n				Coqueirais farfalhando ao vento\n				Sob a brisa amena do mar,\n				No horizonte a náu majestosa\n				Motivou o nativo a gritar:\n				Igarassu! que na sua linguagem\n				Quer dizer grande embarcação,\n				Que trazia Duarte Coelho\n				O herói da colonização\n\n				Refrão:\n\n\n				Igarassu! Igarassu!\n\n				Foi o brado do guerreiro varonil,\n\n				Igarassu! Igarassu! (bis)\n\n\n				És o marco da História do Brasil\n				Pernambuco nasceu em teu solo\n				E o nordeste daqui se expandiu,\n				Brava grei se acalenta em teu colo,\n				Que a muitos heróis já serviu,\n				Relicário de um nobre passado\n				Conservado com veneração\n				Pelos teus padroeiros amados,\n				Os santos queridos: Cosme e Damião.",
        id: "__alloyId24"
    });
    $.__views.__alloyId23.add($.__views.__alloyId24);
    $.__views.hinoPlaceWin = (require("ui").createNavigationWindow || Ti.UI.iOS.createNavigationWindow)({
        window: $.__views.__alloyId19,
        id: "hinoPlaceWin"
    });
    $.__views.hinoPlaceWin && $.addTopLevelView($.__views.hinoPlaceWin);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var audioPlayer = Ti.Media.createAudioPlayer({
        url: "/sounds/Hino_Igarassu.mp3",
        allowBackground: true
    });
    audioPlayer.addEventListener("progress", function(e) {
        Ti.API.info(e.progress);
        Ti.API.info(audioPlayer.getDuration());
        $.progress.value = e.progress / audioPlayer.getDuration();
    });
    __defers["$.__views.__alloyId21!click!play"] && $.addListener($.__views.__alloyId21, "click", play);
    __defers["$.__views.__alloyId22!click!pause"] && $.addListener($.__views.__alloyId22, "click", pause);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;