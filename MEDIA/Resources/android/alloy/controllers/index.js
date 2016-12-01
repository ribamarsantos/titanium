function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function playSong(e) {
        audioPlayer.start();
        $.progress.min = 0;
        $.progress.max = 1;
        $.progre.value = e.progress / audioPlayer.getDuration;
        Ti.API.info(audioPlayer.getDuration());
    }
    function stopSong() {
        sound.stop();
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
        layout: "horizontal",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.__alloyId0 = Ti.UI.createButton({
        title: "Play Sound",
        id: "__alloyId0"
    });
    $.__views.index.add($.__views.__alloyId0);
    playSong ? $.addListener($.__views.__alloyId0, "click", playSong) : __defers["$.__views.__alloyId0!click!playSong"] = true;
    $.__views.__alloyId1 = Ti.UI.createButton({
        title: "Stop",
        id: "__alloyId1"
    });
    $.__views.index.add($.__views.__alloyId1);
    stopSong ? $.addListener($.__views.__alloyId1, "click", stopSong) : __defers["$.__views.__alloyId1!click!stopSong"] = true;
    $.__views.progress = Ti.UI.createProgressBar({
        id: "progress",
        top: 10,
        width: Ti.UI.SIZE
    });
    $.__views.index.add($.__views.progress);
    $.__views.video = Ti.Media.createVideoPlayer({
        id: "video",
        url: "http://www.sample-videos.com/video/mp4/240/big_buck_bunny_240p_1mb.mp4"
    });
    $.__views.index.add($.__views.video);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var audioPlayer = Ti.Media.createAudioPlayer({
        url: "http://www.musicasparaouvir.org/wp-content/uploads/2015/10/01.-David-Guetta-feat.-MAGIC-Son-Sun-Goes-Down-www.musicasparabaixar.org_.mp3",
        allowBackground: true
    });
    audioPlayer.addEventListener("progress", function(e) {
        $.progress.value = e.value;
    });
    var sound = Ti.Media.createSound({
        url: "http://www.musicasparaouvir.org/wp-content/uploads/2015/10/01.-David-Guetta-feat.-MAGIC-Son-Sun-Goes-Down-www.musicasparabaixar.org_.mp3"
    });
    $.index.open();
    __defers["$.__views.__alloyId0!click!playSong"] && $.addListener($.__views.__alloyId0, "click", playSong);
    __defers["$.__views.__alloyId1!click!stopSong"] && $.addListener($.__views.__alloyId1, "click", stopSong);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;