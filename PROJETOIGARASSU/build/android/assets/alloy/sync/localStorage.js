function S4(){return(65536*(1+Math.random())|0).toString(16).substring(1)}function guid(){return S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4()}function InitAdapter(){throw"localStorage persistence supported only with MobileWeb."}function Sync(e,t,i){function r(e){localStorage.setItem(o,JSON.stringify(e))}var o=t.config.adapter.collection_name,s=t.config.data,n=null;switch(e){case"create":t.id||(t.id=guid(),t.set(t.idAttribute,t.id)),s[t.id]=t,r(s),n=t.toJSON();break;case"read":var a=localStorage.getItem(o),l=a&&JSON.parse(a)||{},c=0;for(var d in l){var h=new t.config.Model(l[d]);t.models.push(h),c++}t.length=c,n=1===c?t.models[0]:t.models;break;case"update":s[t.id]=t,r(s),n=t.toJSON();break;case"delete":delete s[t.id],r(s),n=t.toJSON()}n?(_.isFunction(i.success)&&i.success(n),"read"===e&&t.trigger("fetch")):_.isFunction(i.error)&&i.error(n)}var _=require("alloy/underscore")._;module.exports.sync=Sync,module.exports.beforeModelCreate=function(e){return e=e||{},e.data={},InitAdapter(),e},module.exports.afterModelCreate=function(e){return e=e||{},e.prototype.config.Model=e,e};