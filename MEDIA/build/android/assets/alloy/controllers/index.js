function __processArg(t,e){var i=null;return t&&(i=t[e]||null,delete t[e]),i}function Controller(){function t(t){n.start(),i.progress.min=0,i.progress.max=1,i.progre.value=t.progress/n.getDuration,Ti.API.info(n.getDuration())}function e(){o.stop()}require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="index",this.args=arguments[0]||{},arguments[0]&&(__processArg(arguments[0],"__parentSymbol"),__processArg(arguments[0],"$model"),__processArg(arguments[0],"__itemTemplate"));var i=this,r={},s={};i.__views.index=Ti.UI.createWindow({layout:"horizontal",id:"index"}),i.__views.index&&i.addTopLevelView(i.__views.index),i.__views.__alloyId0=Ti.UI.createButton({title:"Play Sound",id:"__alloyId0"}),i.__views.index.add(i.__views.__alloyId0),t?i.addListener(i.__views.__alloyId0,"click",t):s["$.__views.__alloyId0!click!playSong"]=!0,i.__views.__alloyId1=Ti.UI.createButton({title:"Stop",id:"__alloyId1"}),i.__views.index.add(i.__views.__alloyId1),e?i.addListener(i.__views.__alloyId1,"click",e):s["$.__views.__alloyId1!click!stopSong"]=!0,i.__views.progress=Ti.UI.createProgressBar({id:"progress",top:10,width:Ti.UI.SIZE}),i.__views.index.add(i.__views.progress),i.__views.video=Ti.Media.createVideoPlayer({id:"video",url:"http://www.sample-videos.com/video/mp4/240/big_buck_bunny_240p_1mb.mp4"}),i.__views.index.add(i.__views.video),r.destroy=function(){},_.extend(i,i.__views);var n=Ti.Media.createAudioPlayer({url:"http://www.musicasparaouvir.org/wp-content/uploads/2015/10/01.-David-Guetta-feat.-MAGIC-Son-Sun-Goes-Down-www.musicasparabaixar.org_.mp3",allowBackground:!0});n.addEventListener("progress",function(t){i.progress.value=t.value});var o=Ti.Media.createSound({url:"http://www.musicasparaouvir.org/wp-content/uploads/2015/10/01.-David-Guetta-feat.-MAGIC-Son-Sun-Goes-Down-www.musicasparabaixar.org_.mp3"});i.index.open(),s["$.__views.__alloyId0!click!playSong"]&&i.addListener(i.__views.__alloyId0,"click",t),s["$.__views.__alloyId1!click!stopSong"]&&i.addListener(i.__views.__alloyId1,"click",e),_.extend(i,r)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;