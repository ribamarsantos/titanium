function __processArg(t,e){var i=null;return t&&(i=t[e]||null,delete t[e]),i}function Controller(){function t(i){if(!i||!i.fromAdapter){t.opts||{};for(var s=e(o),n=s.length,a=[],l=0;n>l;l++){var h=s[l];h.__transform=_.isFunction(h.transform)?h.transform():h.toJSON();var c=Ti.UI.createTableViewRow({title:h.__transform.name});a.push(c)}r.__views.tableViewDetailPlace.setData(a)}}function e(t){return t.where({place_type:a.id})}function i(){}require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="detailPlace",this.args=arguments[0]||{},arguments[0]&&(__processArg(arguments[0],"__parentSymbol"),__processArg(arguments[0],"$model"),__processArg(arguments[0],"__itemTemplate"));var r=this,s={},n={};r.__views.detailPlace=Ti.UI.createWindow({id:"detailPlace"}),r.__views.detailPlace&&r.addTopLevelView(r.__views.detailPlace),r.__views.lblPlace=Ti.UI.createLabel({id:"lblPlace"}),r.__views.detailPlace.add(r.__views.lblPlace),r.__views.tableViewDetailPlace=Ti.UI.createTableView({id:"tableViewDetailPlace"}),r.__views.detailPlace.add(r.__views.tableViewDetailPlace);var o=Alloy.Collections.places||places;o.on("fetch destroy change add remove reset",t),i?r.addListener(r.__views.tableViewDetailPlace,"click",i):n["$.__views.tableViewDetailPlace!click!showDescriptionPlace"]=!0,s.destroy=function(){o&&o.off("fetch destroy change add remove reset",t)},_.extend(r,r.__views);var a=r.args;r.lblPlace.text=a.title,n["$.__views.tableViewDetailPlace!click!showDescriptionPlace"]&&r.addListener(r.__views.tableViewDetailPlace,"click",i),_.extend(r,s)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;