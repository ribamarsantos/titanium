function __processArg(t,e){var i=null;return t&&(i=t[e]||null,delete t[e]),i}function Controller(){function t(i){if(!i||!i.fromAdapter){t.opts||{};for(var n=r.models,s=n.length,o=[],a=0;s>a;a++){var l=n[a];l.__transform=_.isFunction(l.transform)?l.transform():l.toJSON();var h=Ti.UI.createTableViewRow({});o.push(h);var u=Ti.UI.createView({width:Ti.UI.FILL,height:Ti.UI.SIZE,layout:"horizontal"});h.add(u);var c=Ti.UI.createImageView({height:96,width:72,left:5,top:5,bottom:5,image:l.__transform.Poster});u.add(c);var d=Ti.UI.createView({height:Ti.UI.SIZE,width:Ti.UI.SIZE,layout:"vertical"});u.add(d);var p=Ti.UI.createLabel({top:5,left:5,text:l.__transform.Title});d.add(p);var f=Ti.UI.createLabel({top:5,left:5,text:l.__transform.Year});d.add(f)}e.__views.myTableView.setData(o)}}require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="index",this.args=arguments[0]||{},arguments[0]&&(__processArg(arguments[0],"__parentSymbol"),__processArg(arguments[0],"$model"),__processArg(arguments[0],"__itemTemplate"));var e=this,i={};e.__views.index=Ti.UI.createWindow({id:"index"}),e.__views.index&&e.addTopLevelView(e.__views.index),e.__views.myTableView=Ti.UI.createTableView({id:"myTableView"}),e.__views.index.add(e.__views.myTableView);var r=Alloy.Collections.filmes||filmes;r.on("fetch destroy change add remove reset",t),i.destroy=function(){r&&r.off("fetch destroy change add remove reset",t)},_.extend(e,e.__views);var n=Ti.Network.createHTTPClient();n.onerror=function(t){alert(t)},n.onload=function(){Alloy.Collections.filmes.reset(JSON.parse(this.responseText).Search)},n.open("GET","http://www.omdbapi.com/?s=batman&y=&plot=short&r=json"),n.send(),e.index.open(),_.extend(e,i)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;