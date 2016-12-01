(function(){var t=this,e=t._,n={},r=Array.prototype,i=Object.prototype,o=Function.prototype,a=r.push,s=r.slice,u=r.concat,l=i.toString,c=i.hasOwnProperty,d=r.forEach,h=r.map,f=r.reduce,p=r.reduceRight,_=r.filter,g=r.every,m=r.some,v=r.indexOf,y=r.lastIndexOf,T=Array.isArray,A=Object.keys,E=o.bind,I=function(t){return t instanceof I?t:this instanceof I?void(this._wrapped=t):new I(t)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=I),exports._=I):t._=I,I.VERSION="1.6.0";var b=I.each=I.forEach=function(t,e,r){if(null==t)return t;if(d&&t.forEach===d)t.forEach(e,r);else if(t.length===+t.length){for(var i=0,o=t.length;o>i;i++)if(e.call(r,t[i],i,t)===n)return}else for(var a=I.keys(t),i=0,o=a.length;o>i;i++)if(e.call(r,t[a[i]],a[i],t)===n)return;return t};I.map=I.collect=function(t,e,n){var r=[];return null==t?r:h&&t.map===h?t.map(e,n):(b(t,function(t,i,o){r.push(e.call(n,t,i,o))}),r)};var S="Reduce of empty array with no initial value";I.reduce=I.foldl=I.inject=function(t,e,n,r){var i=arguments.length>2;if(null==t&&(t=[]),f&&t.reduce===f)return r&&(e=I.bind(e,r)),i?t.reduce(e,n):t.reduce(e);if(b(t,function(t,o,a){i?n=e.call(r,n,t,o,a):(n=t,i=!0)}),!i)throw new TypeError(S);return n},I.reduceRight=I.foldr=function(t,e,n,r){var i=arguments.length>2;if(null==t&&(t=[]),p&&t.reduceRight===p)return r&&(e=I.bind(e,r)),i?t.reduceRight(e,n):t.reduceRight(e);var o=t.length;if(o!==+o){var a=I.keys(t);o=a.length}if(b(t,function(s,u,l){u=a?a[--o]:--o,i?n=e.call(r,n,t[u],u,l):(n=t[u],i=!0)}),!i)throw new TypeError(S);return n},I.find=I.detect=function(t,e,n){var r;return w(t,function(t,i,o){return e.call(n,t,i,o)?(r=t,!0):void 0}),r},I.filter=I.select=function(t,e,n){var r=[];return null==t?r:_&&t.filter===_?t.filter(e,n):(b(t,function(t,i,o){e.call(n,t,i,o)&&r.push(t)}),r)},I.reject=function(t,e,n){return I.filter(t,function(t,r,i){return!e.call(n,t,r,i)},n)},I.every=I.all=function(t,e,r){e||(e=I.identity);var i=!0;return null==t?i:g&&t.every===g?t.every(e,r):(b(t,function(t,o,a){return(i=i&&e.call(r,t,o,a))?void 0:n}),!!i)};var w=I.some=I.any=function(t,e,r){e||(e=I.identity);var i=!1;return null==t?i:m&&t.some===m?t.some(e,r):(b(t,function(t,o,a){return i||(i=e.call(r,t,o,a))?n:void 0}),!!i)};I.contains=I.include=function(t,e){return null==t?!1:v&&t.indexOf===v?-1!=t.indexOf(e):w(t,function(t){return t===e})},I.invoke=function(t,e){var n=s.call(arguments,2),r=I.isFunction(e);return I.map(t,function(t){return(r?e:t[e]).apply(t,n)})},I.pluck=function(t,e){return I.map(t,I.property(e))},I.where=function(t,e){return I.filter(t,I.matches(e))},I.findWhere=function(t,e){return I.find(t,I.matches(e))},I.max=function(t,e,n){if(!e&&I.isArray(t)&&t[0]===+t[0]&&t.length<65535)return Math.max.apply(Math,t);var r=-1/0,i=-1/0;return b(t,function(t,o,a){var s=e?e.call(n,t,o,a):t;s>i&&(r=t,i=s)}),r},I.min=function(t,e,n){if(!e&&I.isArray(t)&&t[0]===+t[0]&&t.length<65535)return Math.min.apply(Math,t);var r=1/0,i=1/0;return b(t,function(t,o,a){var s=e?e.call(n,t,o,a):t;i>s&&(r=t,i=s)}),r},I.shuffle=function(t){var e,n=0,r=[];return b(t,function(t){e=I.random(n++),r[n-1]=r[e],r[e]=t}),r},I.sample=function(t,e,n){return null==e||n?(t.length!==+t.length&&(t=I.values(t)),t[I.random(t.length-1)]):I.shuffle(t).slice(0,Math.max(0,e))};var O=function(t){return null==t?I.identity:I.isFunction(t)?t:I.property(t)};I.sortBy=function(t,e,n){return e=O(e),I.pluck(I.map(t,function(t,r,i){return{value:t,index:r,criteria:e.call(n,t,r,i)}}).sort(function(t,e){var n=t.criteria,r=e.criteria;if(n!==r){if(n>r||void 0===n)return 1;if(r>n||void 0===r)return-1}return t.index-e.index}),"value")};var L=function(t){return function(e,n,r){var i={};return n=O(n),b(e,function(o,a){var s=n.call(r,o,a,e);t(i,s,o)}),i}};I.groupBy=L(function(t,e,n){I.has(t,e)?t[e].push(n):t[e]=[n]}),I.indexBy=L(function(t,e,n){t[e]=n}),I.countBy=L(function(t,e){I.has(t,e)?t[e]++:t[e]=1}),I.sortedIndex=function(t,e,n,r){n=O(n);for(var i=n.call(r,e),o=0,a=t.length;a>o;){var s=o+a>>>1;n.call(r,t[s])<i?o=s+1:a=s}return o},I.toArray=function(t){return t?I.isArray(t)?s.call(t):t.length===+t.length?I.map(t,I.identity):I.values(t):[]},I.size=function(t){return null==t?0:t.length===+t.length?t.length:I.keys(t).length},I.first=I.head=I.take=function(t,e,n){return null==t?void 0:null==e||n?t[0]:0>e?[]:s.call(t,0,e)},I.initial=function(t,e,n){return s.call(t,0,t.length-(null==e||n?1:e))},I.last=function(t,e,n){return null==t?void 0:null==e||n?t[t.length-1]:s.call(t,Math.max(t.length-e,0))},I.rest=I.tail=I.drop=function(t,e,n){return s.call(t,null==e||n?1:e)},I.compact=function(t){return I.filter(t,I.identity)};var x=function(t,e,n){return e&&I.every(t,I.isArray)?u.apply(n,t):(b(t,function(t){I.isArray(t)||I.isArguments(t)?e?a.apply(n,t):x(t,e,n):n.push(t)}),n)};I.flatten=function(t,e){return x(t,e,[])},I.without=function(t){return I.difference(t,s.call(arguments,1))},I.partition=function(t,e){var n=[],r=[];return b(t,function(t){(e(t)?n:r).push(t)}),[n,r]},I.uniq=I.unique=function(t,e,n,r){I.isFunction(e)&&(r=n,n=e,e=!1);var i=n?I.map(t,n,r):t,o=[],a=[];return b(i,function(n,r){(e?r&&a[a.length-1]===n:I.contains(a,n))||(a.push(n),o.push(t[r]))}),o},I.union=function(){return I.uniq(I.flatten(arguments,!0))},I.intersection=function(t){var e=s.call(arguments,1);return I.filter(I.uniq(t),function(t){return I.every(e,function(e){return I.contains(e,t)})})},I.difference=function(t){var e=u.apply(r,s.call(arguments,1));return I.filter(t,function(t){return!I.contains(e,t)})},I.zip=function(){for(var t=I.max(I.pluck(arguments,"length").concat(0)),e=new Array(t),n=0;t>n;n++)e[n]=I.pluck(arguments,""+n);return e},I.object=function(t,e){if(null==t)return{};for(var n={},r=0,i=t.length;i>r;r++)e?n[t[r]]=e[r]:n[t[r][0]]=t[r][1];return n},I.indexOf=function(t,e,n){if(null==t)return-1;var r=0,i=t.length;if(n){if("number"!=typeof n)return r=I.sortedIndex(t,e),t[r]===e?r:-1;r=0>n?Math.max(0,i+n):n}if(v&&t.indexOf===v)return t.indexOf(e,n);for(;i>r;r++)if(t[r]===e)return r;return-1},I.lastIndexOf=function(t,e,n){if(null==t)return-1;var r=null!=n;if(y&&t.lastIndexOf===y)return r?t.lastIndexOf(e,n):t.lastIndexOf(e);for(var i=r?n:t.length;i--;)if(t[i]===e)return i;return-1},I.range=function(t,e,n){arguments.length<=1&&(e=t||0,t=0),n=arguments[2]||1;for(var r=Math.max(Math.ceil((e-t)/n),0),i=0,o=new Array(r);r>i;)o[i++]=t,t+=n;return o};var N=function(){};I.bind=function(t,e){var n,r;if(E&&t.bind===E)return E.apply(t,s.call(arguments,1));if(!I.isFunction(t))throw new TypeError;return n=s.call(arguments,2),r=function(){if(!(this instanceof r))return t.apply(e,n.concat(s.call(arguments)));N.prototype=t.prototype;var i=new N;N.prototype=null;var o=t.apply(i,n.concat(s.call(arguments)));return Object(o)===o?o:i}},I.partial=function(t){var e=s.call(arguments,1);return function(){for(var n=0,r=e.slice(),i=0,o=r.length;o>i;i++)r[i]===I&&(r[i]=arguments[n++]);for(;n<arguments.length;)r.push(arguments[n++]);return t.apply(this,r)}},I.bindAll=function(t){var e=s.call(arguments,1);if(0===e.length)throw new Error("bindAll must be passed function names");return b(e,function(e){t[e]=I.bind(t[e],t)}),t},I.memoize=function(t,e){var n={};return e||(e=I.identity),function(){var r=e.apply(this,arguments);return I.has(n,r)?n[r]:n[r]=t.apply(this,arguments)}},I.delay=function(t,e){var n=s.call(arguments,2);return setTimeout(function(){return t.apply(null,n)},e)},I.defer=function(t){return I.delay.apply(I,[t,1].concat(s.call(arguments,1)))},I.throttle=function(t,e,n){var r,i,o,a=null,s=0;n||(n={});var u=function(){s=n.leading===!1?0:I.now(),a=null,o=t.apply(r,i),r=i=null};return function(){var l=I.now();s||n.leading!==!1||(s=l);var c=e-(l-s);return r=this,i=arguments,0>=c?(clearTimeout(a),a=null,s=l,o=t.apply(r,i),r=i=null):a||n.trailing===!1||(a=setTimeout(u,c)),o}},I.debounce=function(t,e,n){var r,i,o,a,s,u=function(){var l=I.now()-a;e>l?r=setTimeout(u,e-l):(r=null,n||(s=t.apply(o,i),o=i=null))};return function(){o=this,i=arguments,a=I.now();var l=n&&!r;return r||(r=setTimeout(u,e)),l&&(s=t.apply(o,i),o=i=null),s}},I.once=function(t){var e,n=!1;return function(){return n?e:(n=!0,e=t.apply(this,arguments),t=null,e)}},I.wrap=function(t,e){return I.partial(e,t)},I.compose=function(){var t=arguments;return function(){for(var e=arguments,n=t.length-1;n>=0;n--)e=[t[n].apply(this,e)];return e[0]}},I.after=function(t,e){return function(){return--t<1?e.apply(this,arguments):void 0}},I.keys=function(t){if(!I.isObject(t))return[];if(A)return A(t);var e=[];for(var n in t)I.has(t,n)&&e.push(n);return e},I.values=function(t){for(var e=I.keys(t),n=e.length,r=new Array(n),i=0;n>i;i++)r[i]=t[e[i]];return r},I.pairs=function(t){for(var e=I.keys(t),n=e.length,r=new Array(n),i=0;n>i;i++)r[i]=[e[i],t[e[i]]];return r},I.invert=function(t){for(var e={},n=I.keys(t),r=0,i=n.length;i>r;r++)e[t[n[r]]]=n[r];return e},I.functions=I.methods=function(t){var e=[];for(var n in t)I.isFunction(t[n])&&e.push(n);return e.sort()},I.extend=function(t){return b(s.call(arguments,1),function(e){if(e)for(var n in e)t[n]=e[n]}),t},I.pick=function(t){var e={},n=u.apply(r,s.call(arguments,1));return b(n,function(n){n in t&&(e[n]=t[n])}),e},I.omit=function(t){var e={},n=u.apply(r,s.call(arguments,1));for(var i in t)I.contains(n,i)||(e[i]=t[i]);return e},I.defaults=function(t){return b(s.call(arguments,1),function(e){if(e)for(var n in e)void 0===t[n]&&(t[n]=e[n])}),t},I.clone=function(t){return I.isObject(t)?I.isArray(t)?t.slice():I.extend({},t):t},I.tap=function(t,e){return e(t),t};var R=function(t,e,n,r){if(t===e)return 0!==t||1/t==1/e;if(null==t||null==e)return t===e;t instanceof I&&(t=t._wrapped),e instanceof I&&(e=e._wrapped);var i=l.call(t);if(i!=l.call(e))return!1;switch(i){case"[object String]":return t==String(e);case"[object Number]":return t!=+t?e!=+e:0==t?1/t==1/e:t==+e;case"[object Date]":case"[object Boolean]":return+t==+e;case"[object RegExp]":return t.source==e.source&&t.global==e.global&&t.multiline==e.multiline&&t.ignoreCase==e.ignoreCase}if("object"!=typeof t||"object"!=typeof e)return!1;for(var o=n.length;o--;)if(n[o]==t)return r[o]==e;var a=t.constructor,s=e.constructor;if(a!==s&&!(I.isFunction(a)&&a instanceof a&&I.isFunction(s)&&s instanceof s)&&"constructor"in t&&"constructor"in e)return!1;n.push(t),r.push(e);var u=0,c=!0;if("[object Array]"==i){if(u=t.length,c=u==e.length)for(;u--&&(c=R(t[u],e[u],n,r)););}else{for(var d in t)if(I.has(t,d)&&(u++,!(c=I.has(e,d)&&R(t[d],e[d],n,r))))break;if(c){for(d in e)if(I.has(e,d)&&!u--)break;c=!u}}return n.pop(),r.pop(),c};I.isEqual=function(t,e){return R(t,e,[],[])},I.isEmpty=function(t){if(null==t)return!0;if(I.isArray(t)||I.isString(t))return 0===t.length;for(var e in t)if(I.has(t,e))return!1;return!0},I.isElement=function(t){return!(!t||1!==t.nodeType)},I.isArray=T||function(t){return"[object Array]"==l.call(t)},I.isObject=function(t){return t===Object(t)},b(["Arguments","Function","String","Number","Date","RegExp"],function(t){I["is"+t]=function(e){return l.call(e)=="[object "+t+"]"}}),I.isArguments(arguments)||(I.isArguments=function(t){return!(!t||!I.has(t,"callee"))}),"function"!=typeof/./&&(I.isFunction=function(t){return"function"==typeof t}),I.isFinite=function(t){return isFinite(t)&&!isNaN(parseFloat(t))},I.isNaN=function(t){return I.isNumber(t)&&t!=+t},I.isBoolean=function(t){return t===!0||t===!1||"[object Boolean]"==l.call(t)},I.isNull=function(t){return null===t},I.isUndefined=function(t){return void 0===t},I.has=function(t,e){return c.call(t,e)},I.noConflict=function(){return t._=e,this},I.identity=function(t){return t},I.constant=function(t){return function(){return t}},I.property=function(t){return function(e){return e[t]}},I.matches=function(t){return function(e){if(e===t)return!0;for(var n in t)if(t[n]!==e[n])return!1;return!0}},I.times=function(t,e,n){for(var r=Array(Math.max(0,t)),i=0;t>i;i++)r[i]=e.call(n,i);return r},I.random=function(t,e){return null==e&&(e=t,t=0),t+Math.floor(Math.random()*(e-t+1))},I.now=Date.now||function(){return(new Date).getTime()};var P={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};P.unescape=I.invert(P.escape);var D={escape:new RegExp("["+I.keys(P.escape).join("")+"]","g"),unescape:new RegExp("("+I.keys(P.unescape).join("|")+")","g")};I.each(["escape","unescape"],function(t){I[t]=function(e){return null==e?"":(""+e).replace(D[t],function(e){return P[t][e]})}}),I.result=function(t,e){if(null==t)return void 0;var n=t[e];return I.isFunction(n)?n.call(t):n},I.mixin=function(t){b(I.functions(t),function(e){var n=I[e]=t[e];I.prototype[e]=function(){var t=[this._wrapped];return a.apply(t,arguments),B.call(this,n.apply(I,t))}})};var U=0;I.uniqueId=function(t){var e=++U+"";return t?t+e:e},I.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var C=/(.)^/,M={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},F=/\\|'|\r|\n|\t|\u2028|\u2029/g;I.template=function(t,e,n){var r;n=I.defaults({},n,I.templateSettings);var i=new RegExp([(n.escape||C).source,(n.interpolate||C).source,(n.evaluate||C).source].join("|")+"|$","g"),o=0,a="__p+='";t.replace(i,function(e,n,r,i,s){return a+=t.slice(o,s).replace(F,function(t){return"\\"+M[t]}),n&&(a+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'"),r&&(a+="'+\n((__t=("+r+"))==null?'':__t)+\n'"),i&&(a+="';\n"+i+"\n__p+='"),o=s+e.length,e}),a+="';\n",n.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{r=new Function(n.variable||"obj","_",a)}catch(s){throw s.source=a,s}if(e)return r(e,I);var u=function(t){return r.call(this,t,I)};return u.source="function("+(n.variable||"obj")+"){\n"+a+"}",u},I.chain=function(t){return I(t).chain()};var B=function(t){return this._chain?I(t).chain():t};I.mixin(I),b(["pop","push","reverse","shift","sort","splice","unshift"],function(t){var e=r[t];I.prototype[t]=function(){var n=this._wrapped;return e.apply(n,arguments),"shift"!=t&&"splice"!=t||0!==n.length||delete n[0],B.call(this,n)}}),b(["concat","join","slice"],function(t){var e=r[t];I.prototype[t]=function(){return B.call(this,e.apply(this._wrapped,arguments))}}),I.extend(I.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}}),"function"==typeof define&&define.amd&&define("underscore",[],function(){return I})}).call(this);