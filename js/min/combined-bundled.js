/*! jQuery v2.1.3 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.3",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=hb(),z=hb(),A=hb(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},eb=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fb){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function gb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+rb(o[l]);w=ab.test(a)&&pb(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function hb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ib(a){return a[u]=!0,a}function jb(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function kb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function lb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function nb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function ob(a){return ib(function(b){return b=+b,ib(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pb(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=gb.support={},f=gb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=gb.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",eb,!1):e.attachEvent&&e.attachEvent("onunload",eb)),p=!f(g),c.attributes=jb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=jb(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=jb(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(jb(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),jb(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&jb(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return lb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?lb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},gb.matches=function(a,b){return gb(a,null,null,b)},gb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return gb(b,n,null,[a]).length>0},gb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},gb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},gb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},gb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=gb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=gb.selectors={cacheLength:50,createPseudo:ib,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||gb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&gb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=gb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||gb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ib(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ib(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ib(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ib(function(a){return function(b){return gb(a,b).length>0}}),contains:ib(function(a){return a=a.replace(cb,db),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ib(function(a){return W.test(a||"")||gb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:ob(function(){return[0]}),last:ob(function(a,b){return[b-1]}),eq:ob(function(a,b,c){return[0>c?c+b:c]}),even:ob(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:ob(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:ob(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:ob(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=mb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=nb(b);function qb(){}qb.prototype=d.filters=d.pseudos,d.setFilters=new qb,g=gb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?gb.error(a):z(a,i).slice(0)};function rb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function tb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ub(a,b,c){for(var d=0,e=b.length;e>d;d++)gb(a,b[d],c);return c}function vb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wb(a,b,c,d,e,f){return d&&!d[u]&&(d=wb(d)),e&&!e[u]&&(e=wb(e,f)),ib(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ub(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:vb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=vb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=vb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sb(function(a){return a===b},h,!0),l=sb(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sb(tb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wb(i>1&&tb(m),i>1&&rb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xb(a.slice(i,e)),f>e&&xb(a=a.slice(e)),f>e&&rb(a))}m.push(c)}return tb(m)}function yb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=vb(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&gb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ib(f):f}return h=gb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,yb(e,d)),f.selector=a}return f},i=gb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&pb(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&rb(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&pb(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=jb(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),jb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||kb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&jb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||kb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),jb(function(a){return null==a.getAttribute("disabled")})||kb(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),gb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)
},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec=/#.*$/,fc=/([?&])_=[^&]*/,gc=/^(.*?):[ \t]*([^\r\n]*)$/gm,hc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ic=/^(?:GET|HEAD)$/,jc=/^\/\//,kc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lc={},mc={},nc="*/".concat("*"),oc=a.location.href,pc=kc.exec(oc.toLowerCase())||[];function qc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rc(a,b,c,d){var e={},f=a===mc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function uc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:oc,type:"GET",isLocal:hc.test(pc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sc(sc(a,n.ajaxSettings),b):sc(n.ajaxSettings,a)},ajaxPrefilter:qc(lc),ajaxTransport:qc(mc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gc.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||oc)+"").replace(ec,"").replace(jc,pc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pc[1]&&h[2]===pc[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pc[3]||("http:"===pc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rc(lc,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ic.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fc.test(d)?d.replace(fc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rc(mc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tc(k,v,f)),u=uc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vc=/%20/g,wc=/\[\]$/,xc=/\r?\n/g,yc=/^(?:submit|button|image|reset|file)$/i,zc=/^(?:input|select|textarea|keygen)/i;function Ac(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wc.test(a)?d(a,e):Ac(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ac(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ac(c,a[c],b,e);return d.join("&").replace(vc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zc.test(this.nodeName)&&!yc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xc,"\r\n")}}):{name:b.name,value:c.replace(xc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bc=0,Cc={},Dc={0:200,1223:204},Ec=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cc)Cc[a]()}),k.cors=!!Ec&&"withCredentials"in Ec,k.ajax=Ec=!!Ec,n.ajaxTransport(function(a){var b;return k.cors||Ec&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Dc[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fc=[],Gc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hc)return Hc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ic=a.document.documentElement;function Jc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ic;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ic})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kc=a.jQuery,Lc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lc),b&&a.jQuery===n&&(a.jQuery=Kc),n},typeof b===U&&(a.jQuery=a.$=n),n});


/*
 AngularJS v1.2.0
 (c) 2010-2012 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(W,O,s){'use strict';function L(b){return function(){var a=arguments[0],c,a="["+(b?b+":":"")+a+"] http://errors.angularjs.org/undefined/"+(b?b+"/":"")+a;for(c=1;c<arguments.length;c++)a=a+(1==c?"?":"&")+"p"+(c-1)+"="+encodeURIComponent("function"==typeof arguments[c]?arguments[c].toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof arguments[c]?"undefined":"string"!=typeof arguments[c]?JSON.stringify(arguments[c]):arguments[c]);return Error(a)}}function pb(b){if(null==b||ya(b))return!1;
var a=b.length;return 1===b.nodeType&&a?!0:D(b)||J(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function q(b,a,c){var d;if(b)if(B(b))for(d in b)"prototype"!=d&&("length"!=d&&"name"!=d&&b.hasOwnProperty(d))&&a.call(c,b[d],d);else if(b.forEach&&b.forEach!==q)b.forEach(a,c);else if(pb(b))for(d=0;d<b.length;d++)a.call(c,b[d],d);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function Nb(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function Jc(b,a,c){for(var d=
Nb(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function Ob(b){return function(a,c){b(c,a)}}function Za(){for(var b=ia.length,a;b;){b--;a=ia[b].charCodeAt(0);if(57==a)return ia[b]="A",ia.join("");if(90==a)ia[b]="0";else return ia[b]=String.fromCharCode(a+1),ia.join("")}ia.unshift("0");return ia.join("")}function Pb(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function u(b){var a=b.$$hashKey;q(arguments,function(a){a!==b&&q(a,function(a,c){b[c]=a})});Pb(b,a);return b}function U(b){return parseInt(b,
10)}function Qb(b,a){return u(new (u(function(){},{prototype:b})),a)}function t(){}function za(b){return b}function aa(b){return function(){return b}}function x(b){return"undefined"==typeof b}function z(b){return"undefined"!=typeof b}function T(b){return null!=b&&"object"==typeof b}function D(b){return"string"==typeof b}function qb(b){return"number"==typeof b}function Ja(b){return"[object Date]"==Ka.apply(b)}function J(b){return"[object Array]"==Ka.apply(b)}function B(b){return"function"==typeof b}
function $a(b){return"[object RegExp]"==Ka.apply(b)}function ya(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function Kc(b){return b&&(b.nodeName||b.on&&b.find)}function Lc(b,a,c){var d=[];q(b,function(b,f,g){d.push(a.call(c,b,f,g))});return d}function ab(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function La(b,a){var c=ab(b,a);0<=c&&b.splice(c,1);return a}function da(b,a){if(ya(b)||b&&b.$evalAsync&&b.$watch)throw Ma("cpws");if(a){if(b===
a)throw Ma("cpi");if(J(b))for(var c=a.length=0;c<b.length;c++)a.push(da(b[c]));else{c=a.$$hashKey;q(a,function(b,c){delete a[c]});for(var d in b)a[d]=da(b[d]);Pb(a,c)}}else(a=b)&&(J(b)?a=da(b,[]):Ja(b)?a=new Date(b.getTime()):$a(b)?a=RegExp(b.source):T(b)&&(a=da(b,{})));return a}function Mc(b,a){a=a||{};for(var c in b)b.hasOwnProperty(c)&&"$$"!==c.substr(0,2)&&(a[c]=b[c]);return a}function Aa(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&
"object"==c)if(J(b)){if(!J(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!Aa(b[d],a[d]))return!1;return!0}}else{if(Ja(b))return Ja(a)&&b.getTime()==a.getTime();if($a(b)&&$a(a))return b.toString()==a.toString();if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||ya(b)||ya(a)||J(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!B(b[d])){if(!Aa(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==s&&!B(a[d]))return!1;return!0}return!1}function Rb(){return O.securityPolicy&&
O.securityPolicy.isActive||O.querySelector&&!(!O.querySelector("[ng-csp]")&&!O.querySelector("[data-ng-csp]"))}function rb(b,a){var c=2<arguments.length?ta.call(arguments,2):[];return!B(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(ta.call(arguments,0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Nc(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)?c=s:ya(a)?c="$WINDOW":a&&O===a?c="$DOCUMENT":a&&(a.$evalAsync&&
a.$watch)&&(c="$SCOPE");return c}function ma(b,a){return"undefined"===typeof b?s:JSON.stringify(b,Nc,a?"  ":null)}function Sb(b){return D(b)?JSON.parse(b):b}function Na(b){b&&0!==b.length?(b=w(""+b),b=!("f"==b||"0"==b||"false"==b||"no"==b||"n"==b||"[]"==b)):b=!1;return b}function ea(b){b=y(b).clone();try{b.html("")}catch(a){}var c=y("<div>").append(b).html();try{return 3===b[0].nodeType?w(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+w(b)})}catch(d){return w(c)}}function Tb(b){try{return decodeURIComponent(b)}catch(a){}}
function Ub(b){var a={},c,d;q((b||"").split("&"),function(b){b&&(c=b.split("="),d=Tb(c[0]),z(d)&&(b=z(c[1])?Tb(c[1]):!0,a[d]?J(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Vb(b){var a=[];q(b,function(b,d){J(b)?q(b,function(b){a.push(ua(d,!0)+(!0===b?"":"="+ua(b,!0)))}):a.push(ua(d,!0)+(!0===b?"":"="+ua(b,!0)))});return a.length?a.join("&"):""}function sb(b){return ua(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ua(b,a){return encodeURIComponent(b).replace(/%40/gi,
"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}function Oc(b,a){function c(a){a&&d.push(a)}var d=[b],e,f,g=["ng:app","ng-app","x-ng-app","data-ng-app"],h=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;q(g,function(a){g[a]=!0;c(O.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(q(b.querySelectorAll("."+a),c),q(b.querySelectorAll("."+a+"\\:"),c),q(b.querySelectorAll("["+a+"]"),c))});q(d,function(a){if(!e){var b=h.exec(" "+a.className+" ");b?(e=a,f=
(b[2]||"").replace(/\s+/g,",")):q(a.attributes,function(b){!e&&g[b.name]&&(e=a,f=b.value)})}});e&&a(e,f?[f]:[])}function Wb(b,a){var c=function(){b=y(b);if(b.injector()){var c=b[0]===O?"document":ea(b);throw Ma("btstrpd",c);}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");c=Xb(a);c.invoke(["$rootScope","$rootElement","$compile","$injector","$animate",function(a,b,c,d,e){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},d=/^NG_DEFER_BOOTSTRAP!/;
if(W&&!d.test(W.name))return c();W.name=W.name.replace(d,"");bb.resumeBootstrap=function(b){q(b,function(b){a.push(b)});c()}}function cb(b,a){a=a||"_";return b.replace(Pc,function(b,d){return(d?a:"")+b.toLowerCase()})}function tb(b,a,c){if(!b)throw Ma("areq",a||"?",c||"required");return b}function Oa(b,a,c){c&&J(b)&&(b=b[b.length-1]);tb(B(b),a,"not a function, got "+(b&&"object"==typeof b?b.constructor.name||"Object":typeof b));return b}function na(b,a){if("hasOwnProperty"===b)throw Ma("badname",
a);}function ub(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&B(b)?rb(e,b):b}function vb(b){if(b.startNode===b.endNode)return y(b.startNode);var a=b.startNode,c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b.endNode);return y(c)}function Qc(b){function a(a,b,c){return a[b]||(a[b]=c())}var c=L("$injector");return a(a(b,"angular",Object),"module",function(){var b={};return function(e,f,g){na(e,"module");f&&b.hasOwnProperty(e)&&(b[e]=
null);return a(b,e,function(){function a(c,d,e){return function(){b[e||"push"]([c,d,arguments]);return n}}if(!f)throw c("nomod",e);var b=[],d=[],l=a("$injector","invoke"),n={_invokeQueue:b,_runBlocks:d,requires:f,name:e,provider:a("$provide","provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),animation:a("$animateProvider","register"),filter:a("$filterProvider","register"),controller:a("$controllerProvider",
"register"),directive:a("$compileProvider","directive"),config:l,run:function(a){d.push(a);return this}};g&&l(g);return n})}})}function Pa(b){return b.replace(Rc,function(a,b,d,e){return e?d.toUpperCase():d}).replace(Sc,"Moz$1")}function wb(b,a,c,d){function e(b){var e=c&&b?[this.filter(b)]:[this],m=a,k,l,n,r,p,C;if(!d||null!=b)for(;e.length;)for(k=e.shift(),l=0,n=k.length;l<n;l++)for(r=y(k[l]),m?r.triggerHandler("$destroy"):m=!m,p=0,r=(C=r.children()).length;p<r;p++)e.push(Ba(C[p]));return f.apply(this,
arguments)}var f=Ba.fn[b],f=f.$original||f;e.$original=f;Ba.fn[b]=e}function Q(b){if(b instanceof Q)return b;if(!(this instanceof Q)){if(D(b)&&"<"!=b.charAt(0))throw xb("nosel");return new Q(b)}if(D(b)){var a=O.createElement("div");a.innerHTML="<div>&#160;</div>"+b;a.removeChild(a.firstChild);yb(this,a.childNodes);y(O.createDocumentFragment()).append(this)}else yb(this,b)}function zb(b){return b.cloneNode(!0)}function Qa(b){Yb(b);var a=0;for(b=b.childNodes||[];a<b.length;a++)Qa(b[a])}function Zb(b,
a,c,d){if(z(d))throw xb("offargs");var e=ja(b,"events");ja(b,"handle")&&(x(a)?q(e,function(a,c){Ab(b,c,a);delete e[c]}):q(a.split(" "),function(a){x(c)?(Ab(b,a,e[a]),delete e[a]):La(e[a]||[],c)}))}function Yb(b,a){var c=b[db],d=Ra[c];d&&(a?delete Ra[c].data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),Zb(b)),delete Ra[c],b[db]=s))}function ja(b,a,c){var d=b[db],d=Ra[d||-1];if(z(c))d||(b[db]=d=++Tc,d=Ra[d]={}),d[a]=c;else return d&&d[a]}function $b(b,a,c){var d=ja(b,"data"),e=z(c),f=!e&&
z(a),g=f&&!T(a);d||g||ja(b,"data",d={});if(e)d[a]=c;else if(f){if(g)return d&&d[a];u(d,a)}else return d}function Bb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function Cb(b,a){a&&b.setAttribute&&q(a.split(" "),function(a){b.setAttribute("class",Y((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+Y(a)+" "," ")))})}function Db(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g,
" ");q(a.split(" "),function(a){a=Y(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",Y(c))}}function yb(b,a){if(a){a=a.nodeName||!z(a.length)||ya(a)?[a]:a;for(var c=0;c<a.length;c++)b.push(a[c])}}function ac(b,a){return eb(b,"$"+(a||"ngController")+"Controller")}function eb(b,a,c){b=y(b);9==b[0].nodeType&&(b=b.find("html"));for(a=J(a)?a:[a];b.length;){for(var d=0,e=a.length;d<e;d++)if((c=b.data(a[d]))!==s)return c;b=b.parent()}}function bc(b,a){var c=fb[a.toLowerCase()];return c&&
cc[b.nodeName]&&c}function Uc(b,a){var c=function(c,e){c.preventDefault||(c.preventDefault=function(){c.returnValue=!1});c.stopPropagation||(c.stopPropagation=function(){c.cancelBubble=!0});c.target||(c.target=c.srcElement||O);if(x(c.defaultPrevented)){var f=c.preventDefault;c.preventDefault=function(){c.defaultPrevented=!0;f.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented||!1===c.returnValue};q(a[e||c.type],function(a){a.call(b,c)});8>=P?(c.preventDefault=
null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function Ca(b){var a=typeof b,c;"object"==a&&null!==b?"function"==typeof(c=b.$$hashKey)?c=b.$$hashKey():c===s&&(c=b.$$hashKey=Za()):c=b;return a+":"+c}function Sa(b){q(b,this.put,this)}function dc(b){var a,c;"function"==typeof b?(a=b.$inject)||(a=[],b.length&&(c=b.toString().replace(Vc,""),c=c.match(Wc),q(c[1].split(Xc),function(b){b.replace(Yc,function(b,
c,d){a.push(d)})})),b.$inject=a):J(b)?(c=b.length-1,Oa(b[c],"fn"),a=b.slice(0,c)):Oa(b,"fn",!0);return a}function Xb(b){function a(a){return function(b,c){if(T(b))q(b,Ob(a));else return a(b,c)}}function c(a,b){na(a,"service");if(B(b)||J(b))b=n.instantiate(b);if(!b.$get)throw Ta("pget",a);return l[a+h]=b}function d(a,b){return c(a,{$get:b})}function e(a){var b=[],c,d,f,h;q(a,function(a){if(!k.get(a)){k.put(a,!0);try{if(D(a))for(c=Ua(a),b=b.concat(e(c.requires)).concat(c._runBlocks),d=c._invokeQueue,
f=0,h=d.length;f<h;f++){var g=d[f],m=n.get(g[0]);m[g[1]].apply(m,g[2])}else B(a)?b.push(n.invoke(a)):J(a)?b.push(n.invoke(a)):Oa(a,"module")}catch(l){throw J(a)&&(a=a[a.length-1]),l.message&&(l.stack&&-1==l.stack.indexOf(l.message))&&(l=l.message+"\n"+l.stack),Ta("modulerr",a,l.stack||l.message||l);}}});return b}function f(a,b){function c(d){if(a.hasOwnProperty(d)){if(a[d]===g)throw Ta("cdep",m.join(" <- "));return a[d]}try{return m.unshift(d),a[d]=g,a[d]=b(d)}finally{m.shift()}}function d(a,b,e){var f=
[],h=dc(a),g,k,m;k=0;for(g=h.length;k<g;k++){m=h[k];if("string"!==typeof m)throw Ta("itkn",m);f.push(e&&e.hasOwnProperty(m)?e[m]:c(m))}a.$inject||(a=a[g]);switch(b?-1:f.length){case 0:return a();case 1:return a(f[0]);case 2:return a(f[0],f[1]);case 3:return a(f[0],f[1],f[2]);case 4:return a(f[0],f[1],f[2],f[3]);case 5:return a(f[0],f[1],f[2],f[3],f[4]);case 6:return a(f[0],f[1],f[2],f[3],f[4],f[5]);case 7:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6]);case 8:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6],
f[7]);case 9:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7],f[8]);case 10:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7],f[8],f[9]);default:return a.apply(b,f)}}return{invoke:d,instantiate:function(a,b){var c=function(){},e;c.prototype=(J(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return T(e)||B(e)?e:c},get:c,annotate:dc,has:function(b){return l.hasOwnProperty(b+h)||a.hasOwnProperty(b)}}}var g={},h="Provider",m=[],k=new Sa,l={$provide:{provider:a(c),factory:a(d),service:a(function(a,b){return d(a,
["$injector",function(a){return a.instantiate(b)}])}),value:a(function(a,b){return d(a,aa(b))}),constant:a(function(a,b){na(a,"constant");l[a]=b;r[a]=b}),decorator:function(a,b){var c=n.get(a+h),d=c.$get;c.$get=function(){var a=p.invoke(d,c);return p.invoke(b,null,{$delegate:a})}}}},n=l.$injector=f(l,function(){throw Ta("unpr",m.join(" <- "));}),r={},p=r.$injector=f(r,function(a){a=n.get(a+h);return p.invoke(a.$get,a)});q(e(b),function(a){p.invoke(a||t)});return p}function Zc(){var b=!0;this.disableAutoScrolling=
function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;q(a,function(a){b||"a"!==w(a.nodeName)||(b=a)});return b}function f(){var b=c.hash(),d;b?(d=g.getElementById(b))?d.scrollIntoView():(d=e(g.getElementsByName(b)))?d.scrollIntoView():"top"===b&&a.scrollTo(0,0):a.scrollTo(0,0)}var g=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(f)});return f}]}function $c(b,a,c,d){function e(a){try{a.apply(null,ta.call(arguments,1))}finally{if(C--,
0===C)for(;H.length;)try{H.pop()()}catch(b){c.error(b)}}}function f(a,b){(function gb(){q(I,function(a){a()});A=b(gb,a)})()}function g(){v=null;S!=h.url()&&(S=h.url(),q(Z,function(a){a(h.url())}))}var h=this,m=a[0],k=b.location,l=b.history,n=b.setTimeout,r=b.clearTimeout,p={};h.isMock=!1;var C=0,H=[];h.$$completeOutstandingRequest=e;h.$$incOutstandingRequestCount=function(){C++};h.notifyWhenNoOutstandingRequests=function(a){q(I,function(a){a()});0===C?a():H.push(a)};var I=[],A;h.addPollFn=function(a){x(A)&&
f(100,n);I.push(a);return a};var S=k.href,G=a.find("base"),v=null;h.url=function(a,c){k!==b.location&&(k=b.location);if(a){if(S!=a)return S=a,d.history?c?l.replaceState(null,"",a):(l.pushState(null,"",a),G.attr("href",G.attr("href"))):(v=a,c?k.replace(a):k.href=a),h}else return v||k.href.replace(/%27/g,"'")};var Z=[],E=!1;h.onUrlChange=function(a){if(!E){if(d.history)y(b).on("popstate",g);if(d.hashchange)y(b).on("hashchange",g);else h.addPollFn(g);E=!0}Z.push(a);return a};h.baseHref=function(){var a=
G.attr("href");return a?a.replace(/^https?\:\/\/[^\/]*/,""):""};var oa={},$="",va=h.baseHref();h.cookies=function(a,b){var d,e,f,h;if(a)b===s?m.cookie=escape(a)+"=;path="+va+";expires=Thu, 01 Jan 1970 00:00:00 GMT":D(b)&&(d=(m.cookie=escape(a)+"="+escape(b)+";path="+va).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(m.cookie!==$)for($=m.cookie,d=$.split("; "),oa={},f=0;f<d.length;f++)e=d[f],h=e.indexOf("="),0<h&&(a=
unescape(e.substring(0,h)),oa[a]===s&&(oa[a]=unescape(e.substring(h+1))));return oa}};h.defer=function(a,b){var c;C++;c=n(function(){delete p[c];e(a)},b||0);p[c]=!0;return c};h.defer.cancel=function(a){return p[a]?(delete p[a],r(a),e(t),!0):!1}}function bd(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new $c(b,d,a,c)}]}function cd(){this.$get=function(){function b(b,d){function e(a){a!=n&&(r?r==a&&(r=a.n):r=a,f(a.n,a.p),f(a,n),n=a,n.n=null)}function f(a,b){a!=b&&(a&&
(a.p=b),b&&(b.n=a))}if(b in a)throw L("$cacheFactory")("iid",b);var g=0,h=u({},d,{id:b}),m={},k=d&&d.capacity||Number.MAX_VALUE,l={},n=null,r=null;return a[b]={put:function(a,b){var c=l[a]||(l[a]={key:a});e(c);if(!x(b))return a in m||g++,m[a]=b,g>k&&this.remove(r.key),b},get:function(a){var b=l[a];if(b)return e(b),m[a]},remove:function(a){var b=l[a];b&&(b==n&&(n=b.p),b==r&&(r=b.n),f(b.n,b.p),delete l[a],delete m[a],g--)},removeAll:function(){m={};g=0;l={};n=r=null},destroy:function(){l=h=m=null;delete a[b]},
info:function(){return u({},h,{size:g})}}}var a={};b.info=function(){var b={};q(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function dd(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function ec(b){var a={},c="Directive",d=/^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,e=/(([\d\w\-_]+)(?:\:([^;]+))?;?)/,f=/^\s*(https?|ftp|mailto|tel|file):/,g=/^\s*(https?|ftp|file):|data:image\//,h=/^(on[a-z]+|formaction)$/;this.directive=function k(d,e){na(d,"directive");
D(d)?(tb(e,"directiveFactory"),a.hasOwnProperty(d)||(a[d]=[],b.factory(d+c,["$injector","$exceptionHandler",function(b,c){var e=[];q(a[d],function(a,f){try{var h=b.invoke(a);B(h)?h={compile:aa(h)}:!h.compile&&h.link&&(h.compile=aa(h.link));h.priority=h.priority||0;h.index=f;h.name=h.name||d;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||"A";e.push(h)}catch(g){c(g)}});return e}])),a[d].push(e)):q(d,Ob(k));return this};this.aHrefSanitizationWhitelist=function(a){return z(a)?(f=a,this):
f};this.imgSrcSanitizationWhitelist=function(a){return z(a)?(g=a,this):g};this.$get=["$injector","$interpolate","$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document","$sce","$animate",function(b,l,n,r,p,C,H,I,A,S,G){function v(a,b,c,d,e){a instanceof y||(a=y(a));q(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&(a[c]=y(b).wrap("<span></span>").parent()[0])});var f=E(a,b,a,c,d,e);return function(b,c){tb(b,"scope");for(var d=c?Da.clone.call(a):a,e=0,h=
d.length;e<h;e++){var g=d[e];1!=g.nodeType&&9!=g.nodeType||d.eq(e).data("$scope",b)}Z(d,"ng-scope");c&&c(d,b);f&&f(b,d,d);return d}}function Z(a,b){try{a.addClass(b)}catch(c){}}function E(a,b,c,d,e,f){function h(a,c,d,e){var f,k,l,n,p,r,C,X=[];p=0;for(r=c.length;p<r;p++)X.push(c[p]);C=p=0;for(r=g.length;p<r;C++)k=X[C],c=g[p++],f=g[p++],l=y(k),c?(c.scope?(n=a.$new(),l.data("$scope",n),Z(l,"ng-scope")):n=a,(l=c.transclude)||!e&&b?c(f,n,k,d,function(b){return function(c){var d=a.$new();d.$$transcluded=
!0;return b(d,c).on("$destroy",rb(d,d.$destroy))}}(l||b)):c(f,n,k,s,e)):f&&f(a,k.childNodes,s,e)}for(var g=[],k,l,n,p=0;p<a.length;p++)l=new R,k=oa(a[p],[],l,0===p?d:s,e),k=(f=k.length?M(k,a[p],l,b,c,null,[],[],f):null)&&f.terminal||!a[p].childNodes||!a[p].childNodes.length?null:E(a[p].childNodes,f?f.transclude:b),g.push(f),g.push(k),n=n||f||k,f=null;return n?h:null}function oa(a,b,c,f,h){var g=c.$attr,k;switch(a.nodeType){case 1:N(b,ka(Ea(a).toLowerCase()),"E",f,h);var l,n,p;k=a.attributes;for(var r=
0,C=k&&k.length;r<C;r++){var H=!1,v=!1;l=k[r];if(!P||8<=P||l.specified){n=l.name;p=ka(n);Fa.test(p)&&(n=cb(p.substr(6),"-"));var q=p.replace(/(Start|End)$/,"");p===q+"Start"&&(H=n,v=n.substr(0,n.length-5)+"end",n=n.substr(0,n.length-6));p=ka(n.toLowerCase());g[p]=n;c[p]=l=Y(P&&"href"==n?decodeURIComponent(a.getAttribute(n,2)):l.value);bc(a,p)&&(c[p]=!0);w(a,b,l,p);N(b,p,"A",f,h,H,v)}}a=a.className;if(D(a)&&""!==a)for(;k=e.exec(a);)p=ka(k[2]),N(b,p,"C",f,h)&&(c[p]=Y(k[3])),a=a.substr(k.index+k[0].length);
break;case 3:t(b,a.nodeValue);break;case 8:try{if(k=d.exec(a.nodeValue))p=ka(k[1]),N(b,p,"M",f,h)&&(c[p]=Y(k[2]))}catch(S){}}b.sort(wa);return b}function $(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw fa("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return y(d)}function va(a,b,c){return function(d,e,f,h){e=$(e[0],b,c);return a(d,e,f,h)}}function M(a,b,c,d,e,f,h,k,g){function p(a,b,c,
d){if(a){c&&(a=va(a,c,d));a.require=F.require;if(G===F||F.$$isolateScope)a=Q(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=va(b,c,d));b.require=F.require;if(G===F||F.$$isolateScope)b=Q(b,{isolateScope:!0});k.push(b)}}function r(a,b){var c,d="data",e=!1;if(D(a)){for(;"^"==(c=a.charAt(0))||"?"==c;)a=a.substr(1),"^"==c&&(d="inheritedData"),e=e||"?"==c;c=b[d]("$"+a+"Controller");8==b[0].nodeType&&b[0].$$controller&&(c=c||b[0].$$controller,b[0].$$controller=null);if(!c&&!e)throw fa("ctreq",a,ba);}else J(a)&&
(c=[],q(a,function(a){c.push(r(a,b))}));return c}function S(a,d,e,f,g){var p,X,v,E,I,K;p=b===e?c:Mc(c,new R(y(e),c.$attr));X=p.$$element;if(G){var va=/^\s*([@=&])(\??)\s*(\w*)\s*$/;f=y(e);K=d.$new(!0);N&&N===G.$$originalDirective?f.data("$isolateScope",K):f.data("$isolateScopeNoTemplate",K);Z(f,"ng-isolate-scope");q(G.scope,function(a,b){var c=a.match(va)||[],e=c[3]||b,f="?"==c[2],c=c[1],h,g,k;K.$$isolateBindings[b]=c+e;switch(c){case "@":p.$observe(e,function(a){K[b]=a});p.$$observers[e].$$scope=
d;p[e]&&(K[b]=l(p[e])(d));break;case "=":if(f&&!p[e])break;g=C(p[e]);k=g.assign||function(){h=K[b]=g(d);throw fa("nonassign",p[e],G.name);};h=K[b]=g(d);K.$watch(function(){var a=g(d);a!==K[b]&&(a!==h?h=K[b]=a:k(d,a=h=K[b]));return a});break;case "&":g=C(p[e]);K[b]=function(a){return g(d,a)};break;default:throw fa("iscp",G.name,b,a);}})}A&&q(A,function(a){var b={$scope:a===G||a.$$isolateScope?K:d,$element:X,$attrs:p,$transclude:g},c;I=a.controller;"@"==I&&(I=p[a.name]);c=H(I,b);8==X[0].nodeType?X[0].$$controller=
c:X.data("$"+a.name+"Controller",c);a.controllerAs&&(b.$scope[a.controllerAs]=c)});f=0;for(v=h.length;f<v;f++)try{E=h[f],E(E.isolateScope?K:d,X,p,E.require&&r(E.require,X))}catch(M){n(M,ea(X))}f=d;G&&(G.template||null===G.templateUrl)&&(f=K);a&&a(f,e.childNodes,s,g);for(f=k.length-1;0<=f;f--)try{E=k[f],E(E.isolateScope?K:d,X,p,E.require&&r(E.require,X))}catch($){n($,ea(X))}}g=g||{};var E=-Number.MAX_VALUE,I,A=g.controllerDirectives,G=g.newIsolateScopeDirective,N=g.templateDirective;g=g.transcludeDirective;
for(var M=c.$$element=y(b),F,ba,t,wa=d,x,ga=0,w=a.length;ga<w;ga++){F=a[ga];var u=F.$$start,Fa=F.$$end;u&&(M=$(b,u,Fa));t=s;if(E>F.priority)break;if(t=F.scope)I=I||F,F.templateUrl||(Va("new/isolated scope",G,F,M),T(t)&&(G=F));ba=F.name;!F.templateUrl&&F.controller&&(t=F.controller,A=A||{},Va("'"+ba+"' controller",A[ba],F,M),A[ba]=F);if(t=F.transclude)F.$$tlb||(Va("transclusion",g,F,M),g=F),"element"==t?(E=F.priority,t=$(b,u,Fa),M=c.$$element=y(O.createComment(" "+ba+": "+c[ba]+" ")),b=M[0],L(e,y(ta.call(t,
0)),b),wa=v(t,d,E,f&&f.name,{transcludeDirective:g})):(t=y(zb(b)).contents(),M.html(""),wa=v(t,d));if(F.template)if(Va("template",N,F,M),N=F,t=B(F.template)?F.template(M,c):F.template,t=fc(t),F.replace){f=F;t=y("<div>"+Y(t)+"</div>").contents();b=t[0];if(1!=t.length||1!==b.nodeType)throw fa("tplrt",ba,"");L(e,M,b);w={$attr:{}};t=oa(b,[],w);var P=a.splice(ga+1,a.length-(ga+1));G&&z(t);a=a.concat(t).concat(P);gb(c,w);w=a.length}else M.html(t);if(F.templateUrl)Va("template",N,F,M),N=F,F.replace&&(f=
F),S=ad(a.splice(ga,a.length-ga),M,c,e,wa,h,k,{controllerDirectives:A,newIsolateScopeDirective:G,templateDirective:N,transcludeDirective:g}),w=a.length;else if(F.compile)try{x=F.compile(M,c,wa),B(x)?p(null,x,u,Fa):x&&p(x.pre,x.post,u,Fa)}catch(ed){n(ed,ea(M))}F.terminal&&(S.terminal=!0,E=Math.max(E,F.priority))}S.scope=I&&!0===I.scope;S.transclude=g&&wa;return S}function z(a){for(var b=0,c=a.length;b<c;b++)a[b]=Qb(a[b],{$$isolateScope:!0})}function N(d,e,f,h,g,l,p){if(e===g)return null;g=null;if(a.hasOwnProperty(e)){var r;
e=b.get(e+c);for(var C=0,H=e.length;C<H;C++)try{r=e[C],(h===s||h>r.priority)&&-1!=r.restrict.indexOf(f)&&(l&&(r=Qb(r,{$$start:l,$$end:p})),d.push(r),g=r)}catch(E){n(E)}}return g}function gb(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;q(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,f){"class"==f?(Z(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?e.attr("style",e.attr("style")+";"+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||
(a[f]=b,d[f]=c[f])})}function ad(a,b,c,d,e,f,h,g){var k=[],n,l,C=b[0],H=a.shift(),v=u({},H,{templateUrl:null,transclude:null,replace:null,$$originalDirective:H}),I=B(H.templateUrl)?H.templateUrl(b,c):H.templateUrl;b.html("");r.get(S.getTrustedResourceUrl(I),{cache:p}).success(function(p){var r;p=fc(p);if(H.replace){p=y("<div>"+Y(p)+"</div>").contents();r=p[0];if(1!=p.length||1!==r.nodeType)throw fa("tplrt",H.name,I);p={$attr:{}};L(d,b,r);var S=oa(r,[],p);T(H.scope)&&z(S);a=S.concat(a);gb(c,p)}else r=
C,b.html(p);a.unshift(v);n=M(a,r,c,e,b,H,f,h,g);q(d,function(a,c){a==r&&(d[c]=b[0])});for(l=E(b[0].childNodes,e);k.length;){p=k.shift();var S=k.shift(),Z=k.shift(),G=k.shift(),A=b[0];S!==C&&(A=zb(r),L(Z,y(S),A));n(l,p,A,d,G)}k=null}).error(function(a,b,c,d){throw fa("tpload",d.url);});return function(a,b,c,d,e){k?(k.push(b),k.push(c),k.push(d),k.push(e)):n(l,b,c,d,e)}}function wa(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function Va(a,b,c,d){if(b)throw fa("multidir",
b.name,c.name,a,ea(d));}function t(a,b){var c=l(b,!0);c&&a.push({priority:0,compile:aa(function(a,b){var d=b.parent(),e=d.data("$binding")||[];e.push(c);Z(d.data("$binding",e),"ng-binding");a.$watch(c,function(a){b[0].nodeValue=a})})})}function x(a,b){if("xlinkHref"==b||"IMG"!=Ea(a)&&("src"==b||"ngSrc"==b))return S.RESOURCE_URL}function w(a,b,c,d){var e=l(c,!0);if(e){if("multiple"===d&&"SELECT"===Ea(a))throw fa("selmulti",ea(a));b.push({priority:100,compile:function(){return{pre:function(b,c,f){c=
f.$$observers||(f.$$observers={});if(h.test(d))throw fa("nodomevents");if(e=l(f[d],!0,x(a,d)))f[d]=e(b),(c[d]||(c[d]=[])).$$inter=!0,(f.$$observers&&f.$$observers[d].$$scope||b).$watch(e,function(a){f.$set(d,a)})}}}})}}function L(a,b,c){var d=b[0],e=b.length,f=d.parentNode,h,g;if(a)for(h=0,g=a.length;h<g;h++)if(a[h]==d){a[h++]=c;g=h+e-1;for(var k=a.length;h<k;h++,g++)g<k?a[h]=a[g]:delete a[h];a.length-=e-1;break}f&&f.replaceChild(c,d);a=O.createDocumentFragment();a.appendChild(d);c[y.expando]=d[y.expando];
d=1;for(e=b.length;d<e;d++)f=b[d],y(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function Q(a,b){return u(function(){return a.apply(null,arguments)},a,b)}var R=function(a,b){this.$$element=a;this.$attr=b||{}};R.prototype={$normalize:ka,$addClass:function(a){a&&0<a.length&&G.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&G.removeClass(this.$$element,a)},$set:function(a,b,c,d){function e(a,b){var c=[],d=a.split(/\s+/),f=b.split(/\s+/),h=0;a:for(;h<d.length;h++){for(var g=
d[h],k=0;k<f.length;k++)if(g==f[k])continue a;c.push(g)}return c}if("class"==a)b=b||"",c=this.$$element.attr("class")||"",this.$removeClass(e(c,b).join(" ")),this.$addClass(e(b,c).join(" "));else{var h=bc(this.$$element[0],a);h&&(this.$$element.prop(a,b),d=h);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=cb(a,"-"));h=Ea(this.$$element);if("A"===h&&"href"===a||"IMG"===h&&"src"===a)if(!P||8<=P)h=xa(b).href,""!==h&&("href"===a&&!h.match(f)||"src"===a&&!h.match(g))&&(this[a]=b="unsafe:"+
h);!1!==c&&(null===b||b===s?this.$$element.removeAttr(d):this.$$element.attr(d,b))}(c=this.$$observers)&&q(c[a],function(a){try{a(b)}catch(c){n(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);I.$evalAsync(function(){e.$$inter||b(c[a])});return b}};var ba=l.startSymbol(),ga=l.endSymbol(),fc="{{"==ba||"}}"==ga?za:function(a){return a.replace(/\{\{/g,ba).replace(/}}/g,ga)},Fa=/^ngAttr[A-Z]/;return v}]}function ka(b){return Pa(b.replace(fd,""))}
function gd(){var b={},a=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,d){na(a,"controller");T(a)?u(b,a):b[a]=d};this.$get=["$injector","$window",function(c,d){return function(e,f){var g,h,m;D(e)&&(g=e.match(a),h=g[1],m=g[3],e=b.hasOwnProperty(h)?b[h]:ub(f.$scope,h,!0)||ub(d,h,!0),Oa(e,h,!0));g=c.instantiate(e,f);if(m){if(!f||"object"!=typeof f.$scope)throw L("$controller")("noscp",h||e.name,m);f.$scope[m]=g}return g}}]}function hd(){this.$get=["$window",function(b){return y(b.document)}]}function id(){this.$get=
["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function gc(b){var a={},c,d,e;if(!b)return a;q(b.split("\n"),function(b){e=b.indexOf(":");c=w(Y(b.substr(0,e)));d=Y(b.substr(e+1));c&&(a[c]=a[c]?a[c]+(", "+d):d)});return a}function hc(b){var a=T(b)?b:s;return function(c){a||(a=gc(b));return c?a[w(c)]||null:a}}function ic(b,a,c){if(B(c))return c(b,a);q(c,function(c){b=c(b,a)});return b}function jd(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},
e=this.defaults={transformResponse:[function(d){D(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=Sb(d)));return d}],transformRequest:[function(a){return T(a)&&"[object File]"!==Ka.apply(a)?ma(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:d,put:d,patch:d},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},f=this.interceptors=[],g=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,n,r){function p(a){function c(a){var b=
u({},a,{data:ic(a.data,a.headers,d.transformResponse)});return 200<=a.status&&300>a.status?b:n.reject(b)}var d={transformRequest:e.transformRequest,transformResponse:e.transformResponse},f=function(a){function b(a){var c;q(a,function(b,d){B(b)&&(c=b(),null!=c?a[d]=c:delete a[d])})}var c=e.headers,d=u({},a.headers),f,h,c=u({},c.common,c[w(a.method)]);b(c);b(d);a:for(f in c){a=w(f);for(h in d)if(w(h)===a)continue a;d[f]=c[f]}return d}(a);u(d,a);d.headers=f;d.method=Ga(d.method);(a=Eb(d.url)?b.cookies()[d.xsrfCookieName||
e.xsrfCookieName]:s)&&(f[d.xsrfHeaderName||e.xsrfHeaderName]=a);var h=[function(a){f=a.headers;var b=ic(a.data,hc(f),a.transformRequest);x(a.data)&&q(f,function(a,b){"content-type"===w(b)&&delete f[b]});x(a.withCredentials)&&!x(e.withCredentials)&&(a.withCredentials=e.withCredentials);return C(a,b,f).then(c,c)},s],g=n.when(d);for(q(A,function(a){(a.request||a.requestError)&&h.unshift(a.request,a.requestError);(a.response||a.responseError)&&h.push(a.response,a.responseError)});h.length;){a=h.shift();
var k=h.shift(),g=g.then(a,k)}g.success=function(a){g.then(function(b){a(b.data,b.status,b.headers,d)});return g};g.error=function(a){g.then(null,function(b){a(b.data,b.status,b.headers,d)});return g};return g}function C(b,c,f){function g(a,b,c){q&&(200<=a&&300>a?q.put(s,[a,b,gc(c)]):q.remove(s));k(b,a,c);d.$$phase||d.$apply()}function k(a,c,d){c=Math.max(c,0);(200<=c&&300>c?r.resolve:r.reject)({data:a,status:c,headers:hc(d),config:b})}function m(){var a=ab(p.pendingRequests,b);-1!==a&&p.pendingRequests.splice(a,
1)}var r=n.defer(),C=r.promise,q,A,s=H(b.url,b.params);p.pendingRequests.push(b);C.then(m,m);(b.cache||e.cache)&&(!1!==b.cache&&"GET"==b.method)&&(q=T(b.cache)?b.cache:T(e.cache)?e.cache:I);if(q)if(A=q.get(s),z(A)){if(A.then)return A.then(m,m),A;J(A)?k(A[1],A[0],da(A[2])):k(A,200,{})}else q.put(s,C);x(A)&&a(b.method,s,c,g,f,b.timeout,b.withCredentials,b.responseType);return C}function H(a,b){if(!b)return a;var c=[];Jc(b,function(a,b){null===a||x(a)||(J(a)||(a=[a]),q(a,function(a){T(a)&&(a=ma(a));
c.push(ua(b)+"="+ua(a))}))});return a+(-1==a.indexOf("?")?"?":"&")+c.join("&")}var I=c("$http"),A=[];q(f,function(a){A.unshift(D(a)?r.get(a):r.invoke(a))});q(g,function(a,b){var c=D(a)?r.get(a):r.invoke(a);A.splice(b,0,{response:function(a){return c(n.when(a))},responseError:function(a){return c(n.reject(a))}})});p.pendingRequests=[];(function(a){q(arguments,function(a){p[a]=function(b,c){return p(u(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){p[a]=
function(b,c,d){return p(u(d||{},{method:a,url:b,data:c}))}})})("post","put");p.defaults=e;return p}]}function kd(){this.$get=["$browser","$window","$document",function(b,a,c){return ld(b,md,b.defer,a.angular.callbacks,c[0],a.location.protocol.replace(":",""))}]}function ld(b,a,c,d,e,f){function g(a,b){var c=e.createElement("script"),d=function(){e.body.removeChild(c);b&&b()};c.type="text/javascript";c.src=a;P?c.onreadystatechange=function(){/loaded|complete/.test(c.readyState)&&d()}:c.onload=c.onerror=
d;e.body.appendChild(c);return d}return function(e,m,k,l,n,r,p,C){function H(){A=-1;G&&G();v&&v.abort()}function I(a,d,e,h){var g=f||xa(m).protocol;Z&&c.cancel(Z);G=v=null;d="file"==g?e?200:404:d;a(1223==d?204:d,e,h);b.$$completeOutstandingRequest(t)}var A;b.$$incOutstandingRequestCount();m=m||b.url();if("jsonp"==w(e)){var s="_"+(d.counter++).toString(36);d[s]=function(a){d[s].data=a};var G=g(m.replace("JSON_CALLBACK","angular.callbacks."+s),function(){d[s].data?I(l,200,d[s].data):I(l,A||-2);delete d[s]})}else{var v=
new a;v.open(e,m,!0);q(n,function(a,b){z(a)&&v.setRequestHeader(b,a)});v.onreadystatechange=function(){if(4==v.readyState){var a=v.getAllResponseHeaders();I(l,A||v.status,v.responseType?v.response:v.responseText,a)}};p&&(v.withCredentials=!0);C&&(v.responseType=C);v.send(k||null)}if(0<r)var Z=c(H,r);else r&&r.then&&r.then(H)}}function nd(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler",
"$sce",function(c,d,e){function f(f,k,l){for(var n,r,p=0,C=[],H=f.length,q=!1,A=[];p<H;)-1!=(n=f.indexOf(b,p))&&-1!=(r=f.indexOf(a,n+g))?(p!=n&&C.push(f.substring(p,n)),C.push(p=c(q=f.substring(n+g,r))),p.exp=q,p=r+h,q=!0):(p!=H&&C.push(f.substring(p)),p=H);(H=C.length)||(C.push(""),H=1);if(l&&1<C.length)throw jc("noconcat",f);if(!k||q)return A.length=H,p=function(a){try{for(var b=0,c=H,h;b<c;b++)"function"==typeof(h=C[b])&&(h=h(a),h=l?e.getTrusted(l,h):e.valueOf(h),null===h||x(h)?h="":"string"!=
typeof h&&(h=ma(h))),A[b]=h;return A.join("")}catch(g){a=jc("interr",f,g.toString()),d(a)}},p.exp=f,p.parts=C,p}var g=b.length,h=a.length;f.startSymbol=function(){return b};f.endSymbol=function(){return a};return f}]}function od(){this.$get=["$rootScope","$window","$q",function(b,a,c){function d(d,g,h,m){var k=a.setInterval,l=a.clearInterval,n=c.defer(),r=n.promise,p=0,C=z(m)&&!m;h=z(h)?h:0;r.then(null,null,d);r.$$intervalId=k(function(){n.notify(p++);0<h&&p>=h&&(n.resolve(p),l(r.$$intervalId),delete e[r.$$intervalId]);
C||b.$apply()},g);e[r.$$intervalId]=n;return r}var e={};d.cancel=function(a){return a&&a.$$intervalId in e?(e[a.$$intervalId].reject("canceled"),clearInterval(a.$$intervalId),delete e[a.$$intervalId],!0):!1};return d}]}function pd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",
gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",
mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function kc(b){b=b.split("/");for(var a=b.length;a--;)b[a]=sb(b[a]);return b.join("/")}function lc(b,a){var c=xa(b);a.$$protocol=c.protocol;a.$$host=c.hostname;a.$$port=U(c.port)||qd[c.protocol]||null}function mc(b,a){var c="/"!==b.charAt(0);c&&(b="/"+b);var d=xa(b);a.$$path=decodeURIComponent(c&&"/"===d.pathname.charAt(0)?d.pathname.substring(1):d.pathname);a.$$search=Ub(d.search);a.$$hash=decodeURIComponent(d.hash);
a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function la(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Wa(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Fb(b){return b.substr(0,Wa(b).lastIndexOf("/")+1)}function nc(b,a){this.$$html5=!0;a=a||"";var c=Fb(b);lc(b,this);this.$$parse=function(a){var b=la(c,a);if(!D(b))throw Gb("ipthprfx",a,c);mc(b,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Vb(this.$$search),b=this.$$hash?
"#"+sb(this.$$hash):"";this.$$url=kc(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$rewrite=function(d){var e;if((e=la(b,d))!==s)return d=e,(e=la(a,e))!==s?c+(la("/",e)||e):b+d;if((e=la(c,d))!==s)return c+e;if(c==d+"/")return c}}function Hb(b,a){var c=Fb(b);lc(b,this);this.$$parse=function(d){var e=la(b,d)||la(c,d),e="#"==e.charAt(0)?la(a,e):this.$$html5?e:"";if(!D(e))throw Gb("ihshprfx",d,a);mc(e,this);this.$$compose()};this.$$compose=function(){var c=Vb(this.$$search),
e=this.$$hash?"#"+sb(this.$$hash):"";this.$$url=kc(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$rewrite=function(a){if(Wa(b)==Wa(a))return a}}function oc(b,a){this.$$html5=!0;Hb.apply(this,arguments);var c=Fb(b);this.$$rewrite=function(d){var e;if(b==Wa(d))return d;if(e=la(c,d))return b+a+e;if(c===d+"/")return c}}function hb(b){return function(){return this[b]}}function pc(b,a){return function(c){if(x(c))return this[b];this[b]=a(c);this.$$compose();return this}}
function rd(){var b="",a=!1;this.hashPrefix=function(a){return z(a)?(b=a,this):b};this.html5Mode=function(b){return z(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,f){function g(a){c.$broadcast("$locationChangeSuccess",h.absUrl(),a)}var h,m=d.baseHref(),k=d.url();a?(m=k.substring(0,k.indexOf("/",k.indexOf("//")+2))+(m||"/"),e=e.history?nc:oc):(m=Wa(k),e=Hb);h=new e(m,"#"+b);h.$$parse(h.$$rewrite(k));f.on("click",function(a){if(!a.ctrlKey&&!a.metaKey&&
2!=a.which){for(var b=y(a.target);"a"!==w(b[0].nodeName);)if(b[0]===f[0]||!(b=b.parent())[0])return;var e=b.prop("href"),g=h.$$rewrite(e);e&&(!b.attr("target")&&g&&!a.isDefaultPrevented())&&(a.preventDefault(),g!=d.url()&&(h.$$parse(g),c.$apply(),W.angular["ff-684208-preventDefault"]=!0))}});h.absUrl()!=k&&d.url(h.absUrl(),!0);d.onUrlChange(function(a){h.absUrl()!=a&&(c.$broadcast("$locationChangeStart",a,h.absUrl()).defaultPrevented?d.url(h.absUrl()):(c.$evalAsync(function(){var b=h.absUrl();h.$$parse(a);
g(b)}),c.$$phase||c.$digest()))});var l=0;c.$watch(function(){var a=d.url(),b=h.$$replace;l&&a==h.absUrl()||(l++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",h.absUrl(),a).defaultPrevented?h.$$parse(a):(d.url(h.absUrl(),b),g(a))}));h.$$replace=!1;return l});return h}]}function sd(){var b=!0,a=this;this.debugEnabled=function(a){return z(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+
a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||t;return e.apply?function(){var a=[];q(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function ha(b,a,c){if("string"!==typeof b&&"[object String]"!==Ka.apply(b))return b;
if("constructor"===b&&!c)throw pa("isecfld",a);if("_"===b.charAt(0)||"_"===b.charAt(b.length-1))throw pa("isecprv",a);return b}function Xa(b,a){if(b&&b.constructor===b)throw pa("isecfn",a);if(b&&b.document&&b.location&&b.alert&&b.setInterval)throw pa("isecwindow",a);if(b&&(b.nodeName||b.on&&b.find))throw pa("isecdom",a);return b}function ib(b,a,c,d,e){e=e||{};a=a.split(".");for(var f,g=0;1<a.length;g++){f=ha(a.shift(),d);var h=b[f];h||(h={},b[f]=h);b=h;b.then&&e.unwrapPromises&&(qa(d),"$$v"in b||
function(a){a.then(function(b){a.$$v=b})}(b),b.$$v===s&&(b.$$v={}),b=b.$$v)}f=ha(a.shift(),d);return b[f]=c}function qc(b,a,c,d,e,f,g){ha(b,f);ha(a,f);ha(c,f);ha(d,f);ha(e,f);return g.unwrapPromises?function(h,g){var k=g&&g.hasOwnProperty(b)?g:h,l;if(null===k||k===s)return k;(k=k[b])&&k.then&&(qa(f),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);if(!a||null===k||k===s)return k;(k=k[a])&&k.then&&(qa(f),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);if(!c||null===k||
k===s)return k;(k=k[c])&&k.then&&(qa(f),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);if(!d||null===k||k===s)return k;(k=k[d])&&k.then&&(qa(f),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);if(!e||null===k||k===s)return k;(k=k[e])&&k.then&&(qa(f),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);return k}:function(f,g){var k=g&&g.hasOwnProperty(b)?g:f;if(null===k||k===s)return k;k=k[b];if(!a||null===k||k===s)return k;k=k[a];if(!c||null===k||k===s)return k;
k=k[c];if(!d||null===k||k===s)return k;k=k[d];return e&&null!==k&&k!==s?k=k[e]:k}}function rc(b,a,c){if(Ib.hasOwnProperty(b))return Ib[b];var d=b.split("."),e=d.length,f;if(a.csp)f=6>e?qc(d[0],d[1],d[2],d[3],d[4],c,a):function(b,f){var h=0,g;do g=qc(d[h++],d[h++],d[h++],d[h++],d[h++],c,a)(b,f),f=s,b=g;while(h<e);return g};else{var g="var l, fn, p;\n";q(d,function(b,d){ha(b,c);g+="if(s === null || s === undefined) return s;\nl=s;\ns="+(d?"s":'((k&&k.hasOwnProperty("'+b+'"))?k:s)')+'["'+b+'"];\n'+(a.unwrapPromises?
'if (s && s.then) {\n pw("'+c.replace(/\"/g,'\\"')+'");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n':"")});var g=g+"return s;",h=new Function("s","k","pw",g);h.toString=function(){return g};f=function(a,b){return h(a,b,qa)}}"hasOwnProperty"!==b&&(Ib[b]=f);return f}function td(){var b={},a={csp:!1,unwrapPromises:!1,logPromiseWarnings:!0};this.unwrapPromises=function(b){return z(b)?(a.unwrapPromises=!!b,this):a.unwrapPromises};this.logPromiseWarnings=
function(b){return z(b)?(a.logPromiseWarnings=b,this):a.logPromiseWarnings};this.$get=["$filter","$sniffer","$log",function(c,d,e){a.csp=d.csp;qa=function(b){a.logPromiseWarnings&&!sc.hasOwnProperty(b)&&(sc[b]=!0,e.warn("[$parse] Promise found in the expression `"+b+"`. Automatic unwrapping of promises in Angular expressions is deprecated."))};return function(d){var e;switch(typeof d){case "string":if(b.hasOwnProperty(d))return b[d];e=new Jb(a);e=(new Ya(e,c,a)).parse(d,!1);"hasOwnProperty"!==d&&
(b[d]=e);return e;case "function":return d;default:return t}}}]}function ud(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return vd(function(a){b.$evalAsync(a)},a)}]}function vd(b,a){function c(a){return a}function d(a){return g(a)}var e=function(){var h=[],m,k;return k={resolve:function(a){if(h){var c=h;h=s;m=f(a);c.length&&b(function(){for(var a,b=0,d=c.length;b<d;b++)a=c[b],m.then(a[0],a[1],a[2])})}},reject:function(a){k.resolve(g(a))},notify:function(a){if(h){var c=h;h.length&&b(function(){for(var b,
d=0,e=c.length;d<e;d++)b=c[d],b[2](a)})}},promise:{then:function(b,f,g){var k=e(),C=function(d){try{k.resolve((B(b)?b:c)(d))}catch(e){k.reject(e),a(e)}},H=function(b){try{k.resolve((B(f)?f:d)(b))}catch(c){k.reject(c),a(c)}},q=function(b){try{k.notify((B(g)?g:c)(b))}catch(d){a(d)}};h?h.push([C,H,q]):m.then(C,H,q);return k.promise},"catch":function(a){return this.then(null,a)},"finally":function(a){function b(a,c){var d=e();c?d.resolve(a):d.reject(a);return d.promise}function d(e,f){var h=null;try{h=
(a||c)()}catch(g){return b(g,!1)}return h&&B(h.then)?h.then(function(){return b(e,f)},function(a){return b(a,!1)}):b(e,f)}return this.then(function(a){return d(a,!0)},function(a){return d(a,!1)})}}}},f=function(a){return a&&B(a.then)?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},g=function(c){return{then:function(f,g){var l=e();b(function(){try{l.resolve((B(g)?g:d)(c))}catch(b){l.reject(b),a(b)}});return l.promise}}};return{defer:e,reject:g,when:function(h,m,k,l){var n=
e(),r,p=function(b){try{return(B(m)?m:c)(b)}catch(d){return a(d),g(d)}},C=function(b){try{return(B(k)?k:d)(b)}catch(c){return a(c),g(c)}},q=function(b){try{return(B(l)?l:c)(b)}catch(d){a(d)}};b(function(){f(h).then(function(a){r||(r=!0,n.resolve(f(a).then(p,C,q)))},function(a){r||(r=!0,n.resolve(C(a)))},function(a){r||n.notify(q(a))})});return n.promise},all:function(a){var b=e(),c=0,d=J(a)?[]:{};q(a,function(a,e){c++;f(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||
b.reject(a)})});0===c&&b.resolve(d);return b.promise}}}function wd(){var b=10,a=L("$rootScope");this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(c,d,e,f){function g(){this.$id=Za();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;this.$$destroyed=!1;this.$$asyncQueue=[];this.$$postDigestQueue=[];this.$$listeners={};this.$$isolateBindings=
{}}function h(b){if(l.$$phase)throw a("inprog",l.$$phase);l.$$phase=b}function m(a,b){var c=e(a);Oa(c,b);return c}function k(){}g.prototype={constructor:g,$new:function(a){a?(a=new g,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,a.$$postDigestQueue=this.$$postDigestQueue):(a=function(){},a.prototype=this,a=new a,a.$id=Za());a["this"]=a;a.$$listeners={};a.$parent=this;a.$$watchers=a.$$nextSibling=a.$$childHead=a.$$childTail=null;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=
this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,c){var d=m(a,"watch"),e=this.$$watchers,f={fn:b,last:k,get:d,exp:a,eq:!!c};if(!B(b)){var h=m(b||t,"listener");f.fn=function(a,b,c){h(c)}}if("string"==typeof a&&d.constant){var g=f.fn;f.fn=function(a,b,c){g.call(this,a,b,c);La(e,f)}}e||(e=this.$$watchers=[]);e.unshift(f);return function(){La(e,f)}},$watchCollection:function(a,b){var c=this,d,f,h=0,g=e(a),k=[],l={},m=0;return this.$watch(function(){f=
g(c);var a,b;if(T(f))if(pb(f))for(d!==k&&(d=k,m=d.length=0,h++),a=f.length,m!==a&&(h++,d.length=m=a),b=0;b<a;b++)d[b]!==f[b]&&(h++,d[b]=f[b]);else{d!==l&&(d=l={},m=0,h++);a=0;for(b in f)f.hasOwnProperty(b)&&(a++,d.hasOwnProperty(b)?d[b]!==f[b]&&(h++,d[b]=f[b]):(m++,d[b]=f[b],h++));if(m>a)for(b in h++,d)d.hasOwnProperty(b)&&!f.hasOwnProperty(b)&&(m--,delete d[b])}else d!==f&&(d=f,h++);return h},function(){b(f,d,c)})},$digest:function(){var c,e,f,g,m=this.$$asyncQueue,q=this.$$postDigestQueue,s,t,G=
b,v,y=[],E,z,$;h("$digest");do{t=!1;for(v=this;m.length;)try{$=m.shift(),$.scope.$eval($.expression)}catch(x){d(x)}do{if(g=v.$$watchers)for(s=g.length;s--;)try{(c=g[s])&&((e=c.get(v))!==(f=c.last)&&!(c.eq?Aa(e,f):"number"==typeof e&&"number"==typeof f&&isNaN(e)&&isNaN(f)))&&(t=!0,c.last=c.eq?da(e):e,c.fn(e,f===k?e:f,v),5>G&&(E=4-G,y[E]||(y[E]=[]),z=B(c.exp)?"fn: "+(c.exp.name||c.exp.toString()):c.exp,z+="; newVal: "+ma(e)+"; oldVal: "+ma(f),y[E].push(z)))}catch(M){d(M)}if(!(g=v.$$childHead||v!==this&&
v.$$nextSibling))for(;v!==this&&!(g=v.$$nextSibling);)v=v.$parent}while(v=g);if(t&&!G--)throw l.$$phase=null,a("infdig",b,ma(y));}while(t||m.length);for(l.$$phase=null;q.length;)try{q.shift()()}catch(w){d(w)}},$destroy:function(){if(l!=this&&!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);
this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null}},$eval:function(a,b){return e(a)(this,b)},$evalAsync:function(a){l.$$phase||l.$$asyncQueue.length||f.defer(function(){l.$$asyncQueue.length&&l.$digest()});this.$$asyncQueue.push({scope:this,expression:a})},$$postDigest:function(a){this.$$postDigestQueue.push(a)},$apply:function(a){try{return h("$apply"),this.$eval(a)}catch(b){d(b)}finally{l.$$phase=
null;try{l.$digest()}catch(c){throw d(c),c;}}},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);return function(){c[ab(c,b)]=null}},$emit:function(a,b){var c=[],e,f=this,h=!1,g={name:a,targetScope:f,stopPropagation:function(){h=!0},preventDefault:function(){g.defaultPrevented=!0},defaultPrevented:!1},k=[g].concat(ta.call(arguments,1)),l,m;do{e=f.$$listeners[a]||c;g.currentScope=f;l=0;for(m=e.length;l<m;l++)if(e[l])try{e[l].apply(null,k)}catch(q){d(q)}else e.splice(l,
1),l--,m--;if(h)break;f=f.$parent}while(f);return g},$broadcast:function(a,b){var c=this,e=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1},h=[f].concat(ta.call(arguments,1)),g,k;do{c=e;f.currentScope=c;e=c.$$listeners[a]||[];g=0;for(k=e.length;g<k;g++)if(e[g])try{e[g].apply(null,h)}catch(l){d(l)}else e.splice(g,1),g--,k--;if(!(e=c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(e=c.$$nextSibling);)c=c.$parent}while(c=e);return f}};var l=
new g;return l}]}function xd(b){if("self"===b)return b;if(D(b)){if(-1<b.indexOf("***"))throw ra("iwcard",b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return RegExp("^"+b+"$")}if($a(b))return RegExp("^"+b.source+"$");throw ra("imatcher");}function tc(b){var a=[];z(b)&&q(b,function(b){a.push(xd(b))});return a}function yd(){this.SCE_CONTEXTS=ca;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&
(b=tc(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=tc(b));return a};this.$get=["$log","$document","$injector",function(c,d,e){function f(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var g=function(a){throw ra("unsafe");};e.has("$sanitize")&&(g=e.get("$sanitize"));var h=f(),
m={};m[ca.HTML]=f(h);m[ca.CSS]=f(h);m[ca.URL]=f(h);m[ca.JS]=f(h);m[ca.RESOURCE_URL]=f(m[ca.URL]);return{trustAs:function(a,b){var c=m.hasOwnProperty(a)?m[a]:null;if(!c)throw ra("icontext",a,b);if(null===b||b===s||""===b)return b;if("string"!==typeof b)throw ra("itype",a);return new c(b)},getTrusted:function(c,d){if(null===d||d===s||""===d)return d;var e=m.hasOwnProperty(c)?m[c]:null;if(e&&d instanceof e)return d.$$unwrapTrustedValue();if(c===ca.RESOURCE_URL){var e=xa(d.toString()),f,h,q=!1;f=0;for(h=
b.length;f<h;f++)if("self"===b[f]?Eb(e):b[f].exec(e.href)){q=!0;break}if(q)for(f=0,h=a.length;f<h;f++)if("self"===a[f]?Eb(e):a[f].exec(e.href)){q=!1;break}if(q)return d;throw ra("insecurl",d.toString());}if(c===ca.HTML)return g(d);throw ra("unsafe");},valueOf:function(a){return a instanceof h?a.$$unwrapTrustedValue():a}}}]}function zd(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$document","$sceDelegate",function(a,c,d){if(b&&P&&(c=c[0].documentMode,
c!==s&&8>c))throw ra("iequirks");var e=da(ca);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},e.valueOf=za);e.parseAs=function(b,c){var d=a(c);return d.literal&&d.constant?d:function(a,c){return e.getTrusted(b,d(a,c))}};var f=e.parseAs,g=e.getTrusted,h=e.trustAs;q(ca,function(a,b){var c=w(b);e[Pa("parse_as_"+c)]=function(b){return f(a,b)};e[Pa("get_trusted_"+c)]=function(b){return g(a,b)};e[Pa("trust_as_"+
c)]=function(b){return h(a,b)}});return e}]}function Ad(){this.$get=["$window","$document",function(b,a){var c={},d=U((/android (\d+)/.exec(w((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g,h=/^(Moz|webkit|O|ms)(?=[A-Z])/,m=f.body&&f.body.style,k=!1,l=!1;if(m){for(var n in m)if(k=h.exec(n)){g=k[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g="WebkitOpacity"in m&&"webkit");k=!!("transition"in m||g+"Transition"in m);l=!!("animation"in m||g+"Animation"in
m);!d||k&&l||(k=D(f.body.style.webkitTransition),l=D(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hashchange:"onhashchange"in b&&(!f.documentMode||7<f.documentMode),hasEvent:function(a){if("input"==a&&9==P)return!1;if(x(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:Rb(),vendorPrefix:g,transitions:k,animations:l,msie:P}}]}function Bd(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(b,a,c,d){function e(e,h,m){var k=
c.defer(),l=k.promise,n=z(m)&&!m;h=a.defer(function(){try{k.resolve(e())}catch(a){k.reject(a),d(a)}finally{delete f[l.$$timeoutId]}n||b.$apply()},h);l.$$timeoutId=h;f[h]=k;return l}var f={};e.cancel=function(b){return b&&b.$$timeoutId in f?(f[b.$$timeoutId].reject("canceled"),delete f[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return e}]}function xa(b){P&&(R.setAttribute("href",b),b=R.href);R.setAttribute("href",b);return{href:R.href,protocol:R.protocol?R.protocol.replace(/:$/,""):"",host:R.host,
search:R.search?R.search.replace(/^\?/,""):"",hash:R.hash?R.hash.replace(/^#/,""):"",hostname:R.hostname,port:R.port,pathname:R.pathname&&"/"===R.pathname.charAt(0)?R.pathname:"/"+R.pathname}}function Eb(b){b=D(b)?xa(b):b;return b.protocol===uc.protocol&&b.host===uc.host}function Cd(){this.$get=aa(W)}function vc(b){function a(d,e){if(T(d)){var f={};q(d,function(b,c){f[c]=a(c,b)});return f}return b.factory(d+c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+
c)}}];a("currency",wc);a("date",xc);a("filter",Dd);a("json",Ed);a("limitTo",Fd);a("lowercase",Gd);a("number",yc);a("orderBy",zc);a("uppercase",Hd)}function Dd(){return function(b,a,c){if(!J(b))return b;var d=typeof c,e=[];e.check=function(a){for(var b=0;b<e.length;b++)if(!e[b](a))return!1;return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return bb.equals(a,b)}:function(a,b){b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var f=function(a,b){if("string"==typeof b&&"!"===
b.charAt(0))return!f(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if("$"!==d.charAt(0)&&f(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(f(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var g in a)"$"==g?function(){if(a[g]){var b=g;e.push(function(c){return f(c,a[b])})}}():
function(){if("undefined"!=typeof a[g]){var b=g;e.push(function(c){return f(ub(c,b),a[b])})}}();break;case "function":e.push(a);break;default:return b}for(var d=[],h=0;h<b.length;h++){var m=b[h];e.check(m)&&d.push(m)}return d}}function wc(b){var a=b.NUMBER_FORMATS;return function(b,d){x(d)&&(d=a.CURRENCY_SYM);return Ac(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function yc(b){var a=b.NUMBER_FORMATS;return function(b,d){return Ac(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}
function Ac(b,a,c,d,e){if(isNaN(b)||!isFinite(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",h="",m=[],k=!1;if(-1!==g.indexOf("e")){var l=g.match(/([\d\.]+)e(-?)(\d+)/);l&&"-"==l[2]&&l[3]>e+1?g="0":(h=g,k=!0)}if(k)0<e&&(-1<b&&1>b)&&(h=b.toFixed(e));else{g=(g.split(Bc)[1]||"").length;x(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));g=Math.pow(10,e);b=Math.round(b*g)/g;b=(""+b).split(Bc);g=b[0];b=b[1]||"";var l=0,n=a.lgSize,r=a.gSize;if(g.length>=n+r)for(l=g.length-n,k=0;k<l;k++)0===(l-k)%r&&0!==
k&&(h+=c),h+=g.charAt(k);for(k=l;k<g.length;k++)0===(g.length-k)%n&&0!==k&&(h+=c),h+=g.charAt(k);for(;b.length<e;)b+="0";e&&"0"!==e&&(h+=d+b.substr(0,e))}m.push(f?a.negPre:a.posPre);m.push(h);m.push(f?a.negSuf:a.posSuf);return m.join("")}function Kb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function V(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Kb(e,a,d)}}function jb(b,a){return function(c,
d){var e=c["get"+b](),f=Ga(a?"SHORT"+b:b);return d[f][e]}}function xc(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,m=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=U(b[9]+b[10]),g=U(b[9]+b[11]));h.call(a,U(b[1]),U(b[2])-1,U(b[3]));f=U(b[4]||0)-f;g=U(b[5]||0)-g;h=U(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));m.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
return function(c,e){var f="",g=[],h,m;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;D(c)&&(c=Id.test(c)?U(c):a(c));qb(c)&&(c=new Date(c));if(!Ja(c))return c;for(;e;)(m=Jd.exec(e))?(g=g.concat(ta.call(m,1)),e=g.pop()):(g.push(e),e=null);q(g,function(a){h=Kd[a];f+=h?h(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return f}}function Ed(){return function(b){return ma(b,!0)}}function Fd(){return function(b,a){if(!J(b)&&!D(b))return b;a=U(a);if(D(b))return a?0<=a?b.slice(0,a):b.slice(a,
b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function zc(b){return function(a,c,d){function e(a,b){return Na(b)?function(b,c){return a(c,b)}:a}if(!J(a)||!c)return a;c=J(c)?c:[c];c=Lc(c,function(a){var c=!1,d=a||za;if(D(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);d=b(a)}return e(function(a,b){var c;c=d(a);var e=d(b),f=typeof c,g=typeof e;f==g?("string"==f&&(c=
c.toLowerCase(),e=e.toLowerCase()),c=c===e?0:c<e?-1:1):c=f<g?-1:1;return c},c)});for(var f=[],g=0;g<a.length;g++)f.push(a[g]);return f.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function sa(b){B(b)&&(b={link:b});b.restrict=b.restrict||"AC";return aa(b)}function Cc(b,a){function c(a,c){c=c?"-"+cb(c,"-"):"";b.removeClass((a?kb:lb)+c).addClass((a?lb:kb)+c)}var d=this,e=b.parent().controller("form")||mb,f=0,g=d.$error={},h=[];d.$name=a.name||a.ngForm;
d.$dirty=!1;d.$pristine=!0;d.$valid=!0;d.$invalid=!1;e.$addControl(d);b.addClass(Ha);c(!0);d.$addControl=function(a){na(a.$name,"input");h.push(a);a.$name&&(d[a.$name]=a)};d.$removeControl=function(a){a.$name&&d[a.$name]===a&&delete d[a.$name];q(g,function(b,c){d.$setValidity(c,!0,a)});La(h,a)};d.$setValidity=function(a,b,h){var n=g[a];if(b)n&&(La(n,h),n.length||(f--,f||(c(b),d.$valid=!0,d.$invalid=!1),g[a]=!1,c(!0,a),e.$setValidity(a,!0,d)));else{f||c(b);if(n){if(-1!=ab(n,h))return}else g[a]=n=[],
f++,c(!1,a),e.$setValidity(a,!1,d);n.push(h);d.$valid=!1;d.$invalid=!0}};d.$setDirty=function(){b.removeClass(Ha).addClass(nb);d.$dirty=!0;d.$pristine=!1;e.$setDirty()};d.$setPristine=function(){b.removeClass(nb).addClass(Ha);d.$dirty=!1;d.$pristine=!0;q(h,function(a){a.$setPristine()})}}function ob(b,a,c,d,e,f){var g=function(){var e=a.val();Na(c.ngTrim||"T")&&(e=Y(e));d.$viewValue!==e&&b.$apply(function(){d.$setViewValue(e)})};if(e.hasEvent("input"))a.on("input",g);else{var h,m=function(){h||(h=
f.defer(function(){g();h=null}))};a.on("keydown",function(a){a=a.keyCode;91===a||(15<a&&19>a||37<=a&&40>=a)||m()});a.on("change",g);if(e.hasEvent("paste"))a.on("paste cut",m)}d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)};var k=c.ngPattern,l=function(a,b){if(d.$isEmpty(b)||a.test(b))return d.$setValidity("pattern",!0),b;d.$setValidity("pattern",!1);return s};k&&((e=k.match(/^\/(.*)\/([gim]*)$/))?(k=RegExp(e[1],e[2]),e=function(a){return l(k,a)}):e=function(c){var d=b.$eval(k);
if(!d||!d.test)throw L("ngPattern")("noregexp",k,d,ea(a));return l(d,c)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var n=U(c.ngMinlength);e=function(a){if(!d.$isEmpty(a)&&a.length<n)return d.$setValidity("minlength",!1),s;d.$setValidity("minlength",!0);return a};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var r=U(c.ngMaxlength);e=function(a){if(!d.$isEmpty(a)&&a.length>r)return d.$setValidity("maxlength",!1),s;d.$setValidity("maxlength",!0);return a};d.$parsers.push(e);
d.$formatters.push(e)}}function Lb(b,a){b="ngClass"+b;return function(){return{restrict:"AC",link:function(c,d,e){function f(b){if(!0===a||c.$index%2===a)h&&!Aa(b,h)&&e.$removeClass(g(h)),e.$addClass(g(b));h=da(b)}function g(a){if(J(a))return a.join(" ");if(T(a)){var b=[];q(a,function(a,c){a&&b.push(c)});return b.join(" ")}return a}var h;c.$watch(e[b],f,!0);e.$observe("class",function(a){f(c.$eval(e[b]))});"ngClass"!==b&&c.$watch("$index",function(d,f){var h=d&1;h!==f&1&&(h===a?(h=c.$eval(e[b]),e.$addClass(g(h))):
(h=c.$eval(e[b]),e.$removeClass(g(h))))})}}}}var w=function(b){return D(b)?b.toLowerCase():b},Ga=function(b){return D(b)?b.toUpperCase():b},P,y,Ba,ta=[].slice,Ld=[].push,Ka=Object.prototype.toString,Ma=L("ng"),bb=W.angular||(W.angular={}),Ua,Ea,ia=["0","0","0"];P=U((/msie (\d+)/.exec(w(navigator.userAgent))||[])[1]);isNaN(P)&&(P=U((/trident\/.*; rv:(\d+)/.exec(w(navigator.userAgent))||[])[1]));t.$inject=[];za.$inject=[];var Y=function(){return String.prototype.trim?function(b){return D(b)?b.trim():
b}:function(b){return D(b)?b.replace(/^\s*/,"").replace(/\s*$/,""):b}}();Ea=9>P?function(b){b=b.nodeName?b:b[0];return b.scopeName&&"HTML"!=b.scopeName?Ga(b.scopeName+":"+b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var Pc=/[A-Z]/g,Md={full:"1.2.0",major:1,minor:"NG_VERSION_MINOR",dot:0,codeName:"timely-delivery"},Ra=Q.cache={},db=Q.expando="ng-"+(new Date).getTime(),Tc=1,Dc=W.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+
a,c)},Ab=W.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)},Rc=/([\:\-\_]+(.))/g,Sc=/^moz([A-Z])/,xb=L("jqLite"),Da=Q.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===O.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),Q(W).on("load",a))},toString:function(){var b=[];q(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?y(this[b]):y(this[this.length+b])},length:0,
push:Ld,sort:[].sort,splice:[].splice},fb={};q("multiple selected checked disabled readOnly required open".split(" "),function(b){fb[w(b)]=b});var cc={};q("input select option textarea button form details".split(" "),function(b){cc[Ga(b)]=!0});q({data:$b,inheritedData:eb,scope:function(b){return y(b).data("$scope")||eb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return y(b).data("$isolateScope")||y(b).data("$isolateScopeNoTemplate")},controller:ac,injector:function(b){return eb(b,
"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Bb,css:function(b,a,c){a=Pa(a);if(z(c))b.style[a]=c;else{var d;8>=P&&(d=b.currentStyle&&b.currentStyle[a],""===d&&(d="auto"));d=d||b.style[a];8>=P&&(d=""===d?s:d);return d}},attr:function(b,a,c){var d=w(a);if(fb[d])if(z(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||t).specified?d:s;else if(z(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,
2),null===b?s:b},prop:function(b,a,c){if(z(c))b[a]=c;else return b[a]},text:function(){function b(b,d){var e=a[b.nodeType];if(x(d))return e?b[e]:"";b[e]=d}var a=[];9>P?(a[1]="innerText",a[3]="nodeValue"):a[1]=a[3]="textContent";b.$dv="";return b}(),val:function(b,a){if(x(a)){if("SELECT"===Ea(b)&&b.multiple){var c=[];q(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(x(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<
d.length;c++)Qa(d[c]);b.innerHTML=a}},function(b,a){Q.prototype[a]=function(a,d){var e,f;if((2==b.length&&b!==Bb&&b!==ac?a:d)===s){if(T(a)){for(e=0;e<this.length;e++)if(b===$b)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;f=e===s?Math.min(this.length,1):this.length;for(var g=0;g<f;g++){var h=b(this[g],a,d);e=e?e+h:h}return e}for(e=0;e<this.length;e++)b(this[e],a,d);return this}});q({removeData:Yb,dealoc:Qa,on:function a(c,d,e,f){if(z(f))throw xb("onargs");var g=ja(c,"events"),
h=ja(c,"handle");g||ja(c,"events",g={});h||ja(c,"handle",h=Uc(c,g));q(d.split(" "),function(d){var f=g[d];if(!f){if("mouseenter"==d||"mouseleave"==d){var l=O.body.contains||O.body.compareDocumentPosition?function(a,c){var d=9===a.nodeType?a.documentElement:a,e=c&&c.parentNode;return a===e||!!(e&&1===e.nodeType&&(d.contains?d.contains(e):a.compareDocumentPosition&&a.compareDocumentPosition(e)&16))}:function(a,c){if(c)for(;c=c.parentNode;)if(c===a)return!0;return!1};g[d]=[];a(c,{mouseleave:"mouseout",
mouseenter:"mouseover"}[d],function(a){var c=a.relatedTarget;c&&(c===this||l(this,c))||h(a,d)})}else Dc(c,d,h),g[d]=[];f=g[d]}f.push(e)})},off:Zb,replaceWith:function(a,c){var d,e=a.parentNode;Qa(a);q(new Q(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];q(a.childNodes,function(a){1===a.nodeType&&c.push(a)});return c},contents:function(a){return a.childNodes||[]},append:function(a,c){q(new Q(c),function(c){1!==a.nodeType&&11!==a.nodeType||
a.appendChild(c)})},prepend:function(a,c){if(1===a.nodeType){var d=a.firstChild;q(new Q(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=y(c)[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){Qa(a);var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;q(new Q(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},addClass:Db,removeClass:Cb,toggleClass:function(a,c,d){x(d)&&(d=!Bb(a,c));(d?Db:Cb)(a,c)},parent:function(a){return(a=
a.parentNode)&&11!==a.nodeType?a:null},next:function(a){if(a.nextElementSibling)return a.nextElementSibling;for(a=a.nextSibling;null!=a&&1!==a.nodeType;)a=a.nextSibling;return a},find:function(a,c){return a.getElementsByTagName(c)},clone:zb,triggerHandler:function(a,c,d){c=(ja(a,"events")||{})[c];d=d||[];var e=[{preventDefault:t,stopPropagation:t}];q(c,function(c){c.apply(a,e.concat(d))})}},function(a,c){Q.prototype[c]=function(c,e,f){for(var g,h=0;h<this.length;h++)x(g)?(g=a(this[h],c,e,f),z(g)&&
(g=y(g))):yb(g,a(this[h],c,e,f));return z(g)?g:this};Q.prototype.bind=Q.prototype.on;Q.prototype.unbind=Q.prototype.off});Sa.prototype={put:function(a,c){this[Ca(a)]=c},get:function(a){return this[Ca(a)]},remove:function(a){var c=this[a=Ca(a)];delete this[a];return c}};var Wc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,Xc=/,/,Yc=/^\s*(_?)(\S+?)\1\s*$/,Vc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ta=L("$injector"),Nd=L("$animate"),Od=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=
c+"-animation";if(c&&"."!=c.charAt(0))throw Nd("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.$get=["$timeout",function(a){return{enter:function(d,e,f,g){f=f&&f[f.length-1];var h=e&&e[0]||f&&f.parentNode,m=f&&f.nextSibling||null;q(d,function(a){h.insertBefore(a,m)});g&&a(g,0,!1)},leave:function(d,e){d.remove();e&&a(e,0,!1)},move:function(a,c,f,g){this.enter(a,c,f,g)},addClass:function(d,e,f){e=D(e)?e:J(e)?e.join(" "):"";q(d,function(a){Db(a,e)});f&&a(f,0,!1)},removeClass:function(d,
e,f){e=D(e)?e:J(e)?e.join(" "):"";q(d,function(a){Cb(a,e)});f&&a(f,0,!1)},enabled:t}}]}],fa=L("$compile");ec.$inject=["$provide"];var fd=/^(x[\:\-_]|data[\:\-_])/i,md=W.XMLHttpRequest||function(){try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(a){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(c){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(d){}throw L("$httpBackend")("noxhr");},jc=L("$interpolate"),Pd=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,qd={http:80,https:443,ftp:21},Gb=
L("$location");oc.prototype=Hb.prototype=nc.prototype={$$html5:!1,$$replace:!1,absUrl:hb("$$absUrl"),url:function(a,c){if(x(a))return this.$$url;var d=Pd.exec(a);d[1]&&this.path(decodeURIComponent(d[1]));(d[2]||d[1])&&this.search(d[3]||"");this.hash(d[5]||"",c);return this},protocol:hb("$$protocol"),host:hb("$$host"),port:hb("$$port"),path:pc("$$path",function(a){return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(D(a))this.$$search=
Ub(a);else if(T(a))this.$$search=a;else throw Gb("isrcharg");break;default:x(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:pc("$$hash",za),replace:function(){this.$$replace=!0;return this}};var pa=L("$parse"),sc={},qa,Ia={"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:t,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return z(d)?z(e)?d+e:d:z(e)?e:s},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(z(d)?d:0)-(z(e)?
e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"=":t,"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=
e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},Qd={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Jb=function(a){this.options=a};Jb.prototype={constructor:Jb,lex:function(a){this.text=a;this.index=0;this.ch=s;this.lastCh=":";this.tokens=[];var c;for(a=[];this.index<this.text.length;){this.ch=
this.text.charAt(this.index);if(this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent(),this.was("{,")&&("{"===a[0]&&(c=this.tokens[this.tokens.length-1]))&&(c.json=-1===c.text.indexOf("."));else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch,json:this.was(":[,")&&this.is("{[")||this.is("}]:,")}),this.is("{[")&&a.unshift(this.ch),this.is("}]")&&a.shift(),
this.index++;else if(this.isWhitespace(this.ch)){this.index++;continue}else{var d=this.ch+this.peek(),e=d+this.peek(2),f=Ia[this.ch],g=Ia[d],h=Ia[e];h?(this.tokens.push({index:this.index,text:e,fn:h}),this.index+=3):g?(this.tokens.push({index:this.index,text:d,fn:g}),this.index+=2):f?(this.tokens.push({index:this.index,text:this.ch,fn:f,json:this.was("[,:")&&this.is("+-")}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+1)}this.lastCh=this.ch}return this.tokens},
is:function(a){return-1!==a.indexOf(this.ch)},was:function(a){return-1!==a.indexOf(this.lastCh)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=
d||this.index;c=z(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw pa("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=w(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}a*=
1;this.tokens.push({index:c,text:a,json:!0,fn:function(){return a}})},readIdent:function(){for(var a=this,c="",d=this.index,e,f,g,h;this.index<this.text.length;){h=this.text.charAt(this.index);if("."===h||this.isIdent(h)||this.isNumber(h))"."===h&&(e=this.index),c+=h;else break;this.index++}if(e)for(f=this.index;f<this.text.length;){h=this.text.charAt(f);if("("===h){g=c.substr(e-d+1);c=c.substr(0,e-d);this.index=f;break}if(this.isWhitespace(h))f++;else break}d={index:d,text:c};if(Ia.hasOwnProperty(c))d.fn=
Ia[c],d.json=Ia[c];else{var m=rc(c,this.options,this.text);d.fn=u(function(a,c){return m(a,c)},{assign:function(d,e){return ib(d,c,e,a.text,a.options)}})}this.tokens.push(d);g&&(this.tokens.push({index:e,text:".",json:!1}),this.tokens.push({index:e+1,text:g,json:!1}))},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(g=this.text.substring(this.index+1,this.index+5),g.match(/[\da-f]{4}/i)||
this.throwError("Invalid unicode escape [\\u"+g+"]"),this.index+=4,d+=String.fromCharCode(parseInt(g,16))):d=(f=Qd[g])?d+f:d+g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,string:d,json:!0,fn:function(){return d}});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var Ya=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};Ya.ZERO=function(){return 0};Ya.prototype={constructor:Ya,parse:function(a,c){this.text=a;this.json=c;this.tokens=
this.lexer.lex(a);c&&(this.assignment=this.logicalOR,this.functionCall=this.fieldAccess=this.objectIndex=this.filterChain=function(){this.throwError("is not valid json",{text:a,index:0})});var d=c?this.primary():this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);d.literal=!!d.literal;d.constant=!!d.constant;return d},primary:function(){var a;if(this.expect("("))a=this.filterChain(),this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();
else if(this.expect("{"))a=this.object();else{var c=this.expect();(a=c.fn)||this.throwError("not a primary expression",c);c.json&&(a.constant=!0,a.literal=!0)}for(var d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw pa("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw pa("ueoe",
this.text);return this.tokens[0]},peek:function(a,c,d,e){if(0<this.tokens.length){var f=this.tokens[0],g=f.text;if(g===a||g===c||g===d||g===e||!(a||c||d||e))return f}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.json&&!a.json&&this.throwError("is not valid json",a),this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},unaryFn:function(a,c){return u(function(d,e){return a(d,e,c)},{constant:c.constant})},
ternaryFn:function(a,c,d){return u(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})},binaryFn:function(a,c,d){return u(function(e,f){return c(e,f,a,d)},{constant:a.constant&&d.constant})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0;f<a.length;f++){var g=a[f];g&&(e=g(c,d))}return e}},filterChain:function(){for(var a=
this.expression(),c;;)if(c=this.expect("|"))a=this.binaryFn(a,c.fn,this.filter());else return a},filter:function(){for(var a=this.expect(),c=this.$filter(a.text),d=[];;)if(a=this.expect(":"))d.push(this.expression());else{var e=function(a,e,h){h=[h];for(var m=0;m<d.length;m++)h.push(d[m](a,e));return c.apply(a,h)};return function(){return e}}},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+
this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),function(d,f){return a.assign(d,c(d,f),f)}):a},ternary:function(){var a=this.logicalOR(),c,d;if(this.expect("?")){c=this.ternary();if(d=this.expect(":"))return this.ternaryFn(a,c,this.ternary());this.throwError("expected :",d)}else return a},logicalOR:function(){for(var a=this.logicalAND(),c;;)if(c=this.expect("||"))a=this.binaryFn(a,c.fn,this.logicalAND());else return a},logicalAND:function(){var a=this.equality(),c;if(c=
this.expect("&&"))a=this.binaryFn(a,c.fn,this.logicalAND());return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=
this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(Ya.ZERO,a.fn,this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this,d=this.expect().text,e=rc(d,this.options,this.text);return u(function(c,d,h){return e(h||a(c,d),d)},{assign:function(e,g,h){return ib(a(e,h),d,g,c.text,c.options)}})},objectIndex:function(a){var c=
this,d=this.expression();this.consume("]");return u(function(e,f){var g=a(e,f),h=ha(d(e,f),c.text,!0),m;if(!g)return s;(g=Xa(g[h],c.text))&&(g.then&&c.options.unwrapPromises)&&(m=g,"$$v"in g||(m.$$v=s,m.then(function(a){m.$$v=a})),g=g.$$v);return g},{assign:function(e,f,g){var h=ha(d(e,g),c.text);return Xa(a(e,g),c.text)[h]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this;return function(f,g){for(var h=
[],m=c?c(f,g):f,k=0;k<d.length;k++)h.push(d[k](f,g));k=a(f,g,m)||t;Xa(m,e.text);Xa(k,e.text);h=k.apply?k.apply(m,h):k(h[0],h[1],h[2],h[3],h[4]);return Xa(h,e.text)}},arrayDeclaration:function(){var a=[],c=!0;if("]"!==this.peekToken().text){do{var d=this.expression();a.push(d);d.constant||(c=!1)}while(this.expect(","))}this.consume("]");return u(function(c,d){for(var g=[],h=0;h<a.length;h++)g.push(a[h](c,d));return g},{literal:!0,constant:c})},object:function(){var a=[],c=!0;if("}"!==this.peekToken().text){do{var d=
this.expect(),d=d.string||d.text;this.consume(":");var e=this.expression();a.push({key:d,value:e});e.constant||(c=!1)}while(this.expect(","))}this.consume("}");return u(function(c,d){for(var e={},m=0;m<a.length;m++){var k=a[m];e[k.key]=k.value(c,d)}return e},{literal:!0,constant:c})}};var Ib={},ra=L("$sce"),ca={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},R=O.createElement("a"),uc=xa(W.location.href,!0);vc.$inject=["$provide"];wc.$inject=["$locale"];yc.$inject=["$locale"];var Bc=
".",Kd={yyyy:V("FullYear",4),yy:V("FullYear",2,0,!0),y:V("FullYear",1),MMMM:jb("Month"),MMM:jb("Month",!0),MM:V("Month",2,1),M:V("Month",1,1),dd:V("Date",2),d:V("Date",1),HH:V("Hours",2),H:V("Hours",1),hh:V("Hours",2,-12),h:V("Hours",1,-12),mm:V("Minutes",2),m:V("Minutes",1),ss:V("Seconds",2),s:V("Seconds",1),sss:V("Milliseconds",3),EEEE:jb("Day"),EEE:jb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Kb(Math[0<
a?"floor":"ceil"](a/60),2)+Kb(Math.abs(a%60),2))}},Jd=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,Id=/^\-?\d+$/;xc.$inject=["$locale"];var Gd=aa(w),Hd=aa(Ga);zc.$inject=["$parse"];var Rd=aa({restrict:"E",compile:function(a,c){8>=P&&(c.href||c.name||c.$set("href",""),a.append(O.createComment("IE fix")));return function(a,c){c.on("click",function(a){c.attr("href")||a.preventDefault()})}}}),Mb={};q(fb,function(a,c){if("multiple"!=a){var d=ka("ng-"+c);Mb[d]=function(){return{priority:100,
compile:function(){return function(a,f,g){a.$watch(g[d],function(a){g.$set(c,!!a)})}}}}}});q(["src","srcset","href"],function(a){var c=ka("ng-"+a);Mb[c]=function(){return{priority:99,link:function(d,e,f){f.$observe(c,function(c){c&&(f.$set(a,c),P&&e.prop(a,f[a]))})}}}});var mb={$addControl:t,$removeControl:t,$setValidity:t,$setDirty:t,$setPristine:t};Cc.$inject=["$element","$attrs","$scope"];var Ec=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:Cc,compile:function(){return{pre:function(a,
e,f,g){if(!f.action){var h=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};Dc(e[0],"submit",h);e.on("$destroy",function(){c(function(){Ab(e[0],"submit",h)},0,!1)})}var m=e.parent().controller("form"),k=f.name||f.ngForm;k&&ib(a,k,g,k);if(m)e.on("$destroy",function(){m.$removeControl(g);k&&ib(a,k,s,k);u(g,mb)})}}}}}]},Sd=Ec(),Td=Ec(!0),Ud=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,Vd=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/,Wd=
/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Fc={text:ob,number:function(a,c,d,e,f,g){ob(a,c,d,e,f,g);e.$parsers.push(function(a){var c=e.$isEmpty(a);if(c||Wd.test(a))return e.$setValidity("number",!0),""===a?null:c?a:parseFloat(a);e.$setValidity("number",!1);return s});e.$formatters.push(function(a){return e.$isEmpty(a)?"":""+a});d.min&&(a=function(a){var c=parseFloat(d.min);if(!e.$isEmpty(a)&&a<c)return e.$setValidity("min",!1),s;e.$setValidity("min",!0);return a},e.$parsers.push(a),e.$formatters.push(a));
d.max&&(a=function(a){var c=parseFloat(d.max);if(!e.$isEmpty(a)&&a>c)return e.$setValidity("max",!1),s;e.$setValidity("max",!0);return a},e.$parsers.push(a),e.$formatters.push(a));e.$formatters.push(function(a){if(e.$isEmpty(a)||qb(a))return e.$setValidity("number",!0),a;e.$setValidity("number",!1);return s})},url:function(a,c,d,e,f,g){ob(a,c,d,e,f,g);a=function(a){if(e.$isEmpty(a)||Ud.test(a))return e.$setValidity("url",!0),a;e.$setValidity("url",!1);return s};e.$formatters.push(a);e.$parsers.push(a)},
email:function(a,c,d,e,f,g){ob(a,c,d,e,f,g);a=function(a){if(e.$isEmpty(a)||Vd.test(a))return e.$setValidity("email",!0),a;e.$setValidity("email",!1);return s};e.$formatters.push(a);e.$parsers.push(a)},radio:function(a,c,d,e){x(d.name)&&c.attr("name",Za());c.on("click",function(){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value)})});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e){var f=d.ngTrueValue,g=d.ngFalseValue;D(f)||
(f=!0);D(g)||(g=!1);c.on("click",function(){a.$apply(function(){e.$setViewValue(c[0].checked)})});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==f};e.$formatters.push(function(a){return a===f});e.$parsers.push(function(a){return a?f:g})},hidden:t,button:t,submit:t,reset:t},Gc=["$browser","$sniffer",function(a,c){return{restrict:"E",require:"?ngModel",link:function(d,e,f,g){g&&(Fc[w(f.type)]||Fc.text)(d,e,f,g,c,a)}}}],lb="ng-valid",kb="ng-invalid",Ha="ng-pristine",
nb="ng-dirty",Xd=["$scope","$exceptionHandler","$attrs","$element","$parse",function(a,c,d,e,f){function g(a,c){c=c?"-"+cb(c,"-"):"";e.removeClass((a?kb:lb)+c).addClass((a?lb:kb)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$name=d.name;var h=f(d.ngModel),m=h.assign;if(!m)throw L("ngModel")("nonassign",d.ngModel,ea(e));this.$render=t;this.$isEmpty=function(a){return x(a)||
""===a||null===a||a!==a};var k=e.inheritedData("$formController")||mb,l=0,n=this.$error={};e.addClass(Ha);g(!0);this.$setValidity=function(a,c){n[a]!==!c&&(c?(n[a]&&l--,l||(g(!0),this.$valid=!0,this.$invalid=!1)):(g(!1),this.$invalid=!0,this.$valid=!1,l++),n[a]=!c,g(c,a),k.$setValidity(a,c,this))};this.$setPristine=function(){this.$dirty=!1;this.$pristine=!0;e.removeClass(nb).addClass(Ha)};this.$setViewValue=function(d){this.$viewValue=d;this.$pristine&&(this.$dirty=!0,this.$pristine=!1,e.removeClass(Ha).addClass(nb),
k.$setDirty());q(this.$parsers,function(a){d=a(d)});this.$modelValue!==d&&(this.$modelValue=d,m(a,d),q(this.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}}))};var r=this;a.$watch(function(){var c=h(a);if(r.$modelValue!==c){var d=r.$formatters,e=d.length;for(r.$modelValue=c;e--;)c=d[e](c);r.$viewValue!==c&&(r.$viewValue=c,r.$render())}})}],Yd=function(){return{require:["ngModel","^?form"],controller:Xd,link:function(a,c,d,e){var f=e[0],g=e[1]||mb;g.$addControl(f);a.$on("$destroy",function(){g.$removeControl(f)})}}},
Zd=aa({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),Hc=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){d.required=!0;var f=function(a){if(d.required&&e.$isEmpty(a))e.$setValidity("required",!1);else return e.$setValidity("required",!0),a};e.$formatters.push(f);e.$parsers.unshift(f);d.$observe("required",function(){f(e.$viewValue)})}}}},$d=function(){return{require:"ngModel",link:function(a,c,d,e){var f=(a=/\/(.*)\//.exec(d.ngList))&&
RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){if(!x(a)){var c=[];a&&q(a.split(f),function(a){a&&c.push(Y(a))});return c}});e.$formatters.push(function(a){return J(a)?a.join(", "):s});e.$isEmpty=function(a){return!a||!a.length}}}},ae=/^(true|false|\d+)$/,be=function(){return{priority:100,compile:function(a,c){return ae.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},ce=sa(function(a,c,d){c.addClass("ng-binding").data("$binding",
d.ngBind);a.$watch(d.ngBind,function(a){c.text(a==s?"":a)})}),de=["$interpolate",function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],ee=["$sce","$parse",function(a,c){return function(d,e,f){e.addClass("ng-binding").data("$binding",f.ngBindHtml);var g=c(f.ngBindHtml);d.$watch(function(){return(g(d)||"").toString()},function(c){e.html(a.getTrustedHtml(g(d))||"")})}}],fe=Lb("",!0),ge=
Lb("Odd",0),he=Lb("Even",1),ie=sa({compile:function(a,c){c.$set("ngCloak",s);a.removeClass("ng-cloak")}}),je=[function(){return{scope:!0,controller:"@"}}],Ic={};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=ka("ng-"+a);Ic[c]=["$parse",function(d){return{compile:function(e,f){var g=d(f[c]);return function(c,d,e){d.on(w(a),function(a){c.$apply(function(){g(c,{$event:a})})})}}}}]});
var ke=["$animate",function(a){return{transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,compile:function(c,d,e){return function(c,d,h){var m,k;c.$watch(h.ngIf,function(l){Na(l)?(k=c.$new(),e(k,function(c){m={startNode:c[0],endNode:c[c.length++]=O.createComment(" end ngIf: "+h.ngIf+" ")};a.enter(c,d.parent(),d)})):(k&&(k.$destroy(),k=null),m&&(a.leave(vb(m)),m=null))})}}}}],le=["$http","$templateCache","$anchorScroll","$compile","$animate","$sce",function(a,c,d,e,f,g){return{restrict:"ECA",
priority:400,terminal:!0,transclude:"element",compile:function(h,m,k){var l=m.ngInclude||m.src,n=m.onload||"",r=m.autoscroll;return function(h,m){var q=0,s,t,y=function(){s&&(s.$destroy(),s=null);t&&(f.leave(t),t=null)};h.$watch(g.parseAsResourceUrl(l),function(g){var l=function(){!z(r)||r&&!h.$eval(r)||d()},x=++q;g?(a.get(g,{cache:c}).success(function(a){if(x===q){var c=h.$new();k(c,function(d){y();s=c;t=d;t.html(a);f.enter(t,null,m,l);e(t.contents())(s);s.$emit("$includeContentLoaded");h.$eval(n)})}}).error(function(){x===
q&&y()}),h.$emit("$includeContentRequested")):y()})}}}}],me=sa({compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),ne=sa({terminal:!0,priority:1E3}),oe=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,f,g){var h=g.count,m=g.$attr.when&&f.attr(g.$attr.when),k=g.offset||0,l=e.$eval(m)||{},n={},r=c.startSymbol(),p=c.endSymbol(),s=/^when(Minus)?(.+)$/;q(g,function(a,c){s.test(c)&&(l[w(c.replace("when","").replace("Minus","-"))]=f.attr(g.$attr[c]))});
q(l,function(a,e){n[e]=c(a.replace(d,r+h+"-"+k+p))});e.$watch(function(){var c=parseFloat(e.$eval(h));if(isNaN(c))return"";c in l||(c=a.pluralCat(c-k));return n[c](e,f,!0)},function(a){f.text(a)})}}}],pe=["$parse","$animate",function(a,c){var d=L("ngRepeat");return{transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(e,f,g){return function(e,f,k){var l=k.ngRepeat,n=l.match(/^\s*(.+)\s+in\s+(.*?)\s*(\s+track\s+by\s+(.+)\s*)?$/),r,p,s,t,z,A,x,G={$id:Ca};if(!n)throw d("iexp",l);k=
n[1];z=n[2];(n=n[4])?(r=a(n),p=function(a,c,d){x&&(G[x]=a);G[A]=c;G.$index=d;return r(e,G)}):(s=function(a,c){return Ca(c)},t=function(a){return a});n=k.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!n)throw d("iidexp",k);A=n[3]||n[1];x=n[2];var v={};e.$watchCollection(z,function(a){var k,n,r=f[0],z,M={},G,N,w,I,D,u,J=[];if(pb(a))D=a,z=p||s;else{z=p||t;D=[];for(w in a)a.hasOwnProperty(w)&&"$"!=w.charAt(0)&&D.push(w);D.sort()}G=D.length;n=J.length=D.length;for(k=0;k<n;k++)if(w=a===D?k:
D[k],I=a[w],I=z(w,I,k),na(I,"`track by` id"),v.hasOwnProperty(I))u=v[I],delete v[I],M[I]=u,J[k]=u;else{if(M.hasOwnProperty(I))throw q(J,function(a){a&&a.startNode&&(v[a.id]=a)}),d("dupes",l,I);J[k]={id:I};M[I]=!1}for(w in v)v.hasOwnProperty(w)&&(u=v[w],k=vb(u),c.leave(k),q(k,function(a){a.$$NG_REMOVED=!0}),u.scope.$destroy());k=0;for(n=D.length;k<n;k++){w=a===D?k:D[k];I=a[w];u=J[k];J[k-1]&&(r=J[k-1].endNode);if(u.startNode){N=u.scope;z=r;do z=z.nextSibling;while(z&&z.$$NG_REMOVED);u.startNode!=z&&
c.move(vb(u),null,y(r));r=u.endNode}else N=e.$new();N[A]=I;x&&(N[x]=w);N.$index=k;N.$first=0===k;N.$last=k===G-1;N.$middle=!(N.$first||N.$last);N.$odd=!(N.$even=0===(k&1));u.startNode||g(N,function(a){a[a.length++]=O.createComment(" end ngRepeat: "+l+" ");c.enter(a,null,y(r));r=a;u.scope=N;u.startNode=r&&r.endNode?r.endNode:a[0];u.endNode=a[a.length-1];M[u.id]=u})}v=M})}}}}],qe=["$animate",function(a){return function(c,d,e){c.$watch(e.ngShow,function(c){a[Na(c)?"removeClass":"addClass"](d,"ng-hide")})}}],
re=["$animate",function(a){return function(c,d,e){c.$watch(e.ngHide,function(c){a[Na(c)?"addClass":"removeClass"](d,"ng-hide")})}}],se=sa(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),te=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g,h,m=[];c.$watch(e.ngSwitch||e.on,function(d){for(var l=0,n=m.length;l<n;l++)m[l].$destroy(),a.leave(h[l]);h=[];
m=[];if(g=f.cases["!"+d]||f.cases["?"])c.$eval(e.change),q(g,function(d){var e=c.$new();m.push(e);d.transclude(e,function(c){var e=d.element;h.push(c);a.enter(c,e.parent(),e)})})})}}}],ue=sa({transclude:"element",priority:800,require:"^ngSwitch",compile:function(a,c,d){return function(a,f,g,h){h.cases["!"+c.ngSwitchWhen]=h.cases["!"+c.ngSwitchWhen]||[];h.cases["!"+c.ngSwitchWhen].push({transclude:d,element:f})}}}),ve=sa({transclude:"element",priority:800,require:"^ngSwitch",compile:function(a,c,d){return function(a,
c,g,h){h.cases["?"]=h.cases["?"]||[];h.cases["?"].push({transclude:d,element:c})}}}),we=sa({controller:["$element","$transclude",function(a,c){if(!c)throw L("ngTransclude")("orphan",ea(a));this.$transclude=c}],link:function(a,c,d,e){e.$transclude(function(a){c.html("");c.append(a)})}}),xe=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],ye=L("ngOptions"),ze=aa({terminal:!0}),Ae=["$compile","$parse",function(a,
c){var d=/^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(.*?)(?:\s+track\s+by\s+(.*?))?$/,e={$setViewValue:t};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var m=this,k={},l=e,n;m.databound=d.ngModel;m.init=function(a,c,d){l=a;n=d};m.addOption=function(c){na(c,'"option value"');k[c]=!0;l.$viewValue==c&&(a.val(c),n.parent()&&n.remove())};m.removeOption=
function(a){this.hasOption(a)&&(delete k[a],l.$viewValue==a&&this.renderUnknownOption(a))};m.renderUnknownOption=function(c){c="? "+Ca(c)+" ?";n.val(c);a.prepend(n);a.val(c);n.prop("selected",!0)};m.hasOption=function(a){return k.hasOwnProperty(a)};c.$on("$destroy",function(){m.renderUnknownOption=t})}],link:function(e,g,h,m){function k(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(v.parent()&&v.remove(),c.val(a),""===a&&A.prop("selected",!0)):x(a)&&A?c.val(""):e.renderUnknownOption(a)};
c.on("change",function(){a.$apply(function(){v.parent()&&v.remove();d.$setViewValue(c.val())})})}function l(a,c,d){var e;d.$render=function(){var a=new Sa(d.$viewValue);q(c.find("option"),function(c){c.selected=z(a.get(c.value))})};a.$watch(function(){Aa(e,d.$viewValue)||(e=da(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];q(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function n(e,f,g){function h(){var a={"":[]},c=[""],d,k,
s,u,x;u=g.$modelValue;x=r(e)||[];var A=n?Nb(x):x,H,K,B;K={};s=!1;var E,L;if(t)if(v&&J(u))for(s=new Sa([]),B=0;B<u.length;B++)K[m]=u[B],s.put(v(e,K),u[B]);else s=new Sa(u);for(B=0;H=A.length,B<H;B++){k=B;if(n){k=A[B];if("$"===k.charAt(0))continue;K[n]=k}K[m]=x[k];d=p(e,K)||"";(k=a[d])||(k=a[d]=[],c.push(d));t?d=z(s.remove(v?v(e,K):q(e,K))):(v?(d={},d[m]=u,d=v(e,d)===v(e,K)):d=u===q(e,K),s=s||d);E=l(e,K);E=z(E)?E:"";k.push({id:v?v(e,K):n?A[B]:B,label:E,selected:d})}t||(w||null===u?a[""].unshift({id:"",
label:"",selected:!s}):s||a[""].unshift({id:"?",label:"",selected:!0}));K=0;for(A=c.length;K<A;K++){d=c[K];k=a[d];y.length<=K?(u={element:G.clone().attr("label",d),label:k.label},x=[u],y.push(x),f.append(u.element)):(x=y[K],u=x[0],u.label!=d&&u.element.attr("label",u.label=d));E=null;B=0;for(H=k.length;B<H;B++)s=k[B],(d=x[B+1])?(E=d.element,d.label!==s.label&&E.text(d.label=s.label),d.id!==s.id&&E.val(d.id=s.id),E[0].selected!==s.selected&&E.prop("selected",d.selected=s.selected)):(""===s.id&&w?L=
w:(L=D.clone()).val(s.id).attr("selected",s.selected).text(s.label),x.push({element:L,label:s.label,id:s.id,selected:s.selected}),E?E.after(L):u.element.append(L),E=L);for(B++;x.length>B;)x.pop().element.remove()}for(;y.length>K;)y.pop()[0].element.remove()}var k;if(!(k=u.match(d)))throw ye("iexp",u,ea(f));var l=c(k[2]||k[1]),m=k[4]||k[6],n=k[5],p=c(k[3]||""),q=c(k[2]?k[1]:m),r=c(k[7]),v=k[8]?c(k[8]):null,y=[[{element:f,label:""}]];w&&(a(w)(e),w.removeClass("ng-scope"),w.remove());f.html("");f.on("change",
function(){e.$apply(function(){var a,c=r(e)||[],d={},h,k,l,p,u,x,w;if(t)for(k=[],p=0,x=y.length;p<x;p++)for(a=y[p],l=1,u=a.length;l<u;l++){if((h=a[l].element)[0].selected){h=h.val();n&&(d[n]=h);if(v)for(w=0;w<c.length&&(d[m]=c[w],v(e,d)!=h);w++);else d[m]=c[h];k.push(q(e,d))}}else if(h=f.val(),"?"==h)k=s;else if(""===h)k=null;else if(v)for(w=0;w<c.length;w++){if(d[m]=c[w],v(e,d)==h){k=q(e,d);break}}else d[m]=c[h],n&&(d[n]=h),k=q(e,d);g.$setViewValue(k)})});g.$render=h;e.$watch(h)}if(m[1]){var r=m[0],
p=m[1],t=h.multiple,u=h.ngOptions,w=!1,A,D=y(O.createElement("option")),G=y(O.createElement("optgroup")),v=D.clone();m=0;for(var B=g.children(),E=B.length;m<E;m++)if(""===B[m].value){A=w=B.eq(m);break}r.init(p,w,v);if(t&&(h.required||h.ngRequired)){var L=function(a){p.$setValidity("required",!h.required||a&&a.length);return a};p.$parsers.push(L);p.$formatters.unshift(L);h.$observe("required",function(){L(p.$viewValue)})}u?n(e,g,p):t?l(e,g,p):k(e,g,p,r)}}}}],Be=["$interpolate",function(a){var c={addOption:t,
removeOption:t};return{restrict:"E",priority:100,compile:function(d,e){if(x(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),l=k.data("$selectController")||k.parent().data("$selectController");l&&l.databound?d.prop("selected",!1):l=c;f?a.$watch(f,function(a,c){e.$set("value",a);a!==c&&l.removeOption(c);l.addOption(a)}):l.addOption(e.value);d.on("$destroy",function(){l.removeOption(e.value)})}}}}],Ce=aa({restrict:"E",terminal:!0});(Ba=W.jQuery)?(y=
Ba,u(Ba.fn,{scope:Da.scope,isolateScope:Da.isolateScope,controller:Da.controller,injector:Da.injector,inheritedData:Da.inheritedData}),wb("remove",!0,!0,!1),wb("empty",!1,!1,!1),wb("html",!1,!1,!0)):y=Q;bb.element=y;(function(a){u(a,{bootstrap:Wb,copy:da,extend:u,equals:Aa,element:y,forEach:q,injector:Xb,noop:t,bind:rb,toJson:ma,fromJson:Sb,identity:za,isUndefined:x,isDefined:z,isString:D,isFunction:B,isObject:T,isNumber:qb,isElement:Kc,isArray:J,version:Md,isDate:Ja,lowercase:w,uppercase:Ga,callbacks:{counter:0},
$$minErr:L,$$csp:Rb});Ua=Qc(W);try{Ua("ngLocale")}catch(c){Ua("ngLocale",[]).provider("$locale",pd)}Ua("ng",["ngLocale"],["$provide",function(a){a.provider("$compile",ec).directive({a:Rd,input:Gc,textarea:Gc,form:Sd,script:xe,select:Ae,style:Ce,option:Be,ngBind:ce,ngBindHtml:ee,ngBindTemplate:de,ngClass:fe,ngClassEven:he,ngClassOdd:ge,ngCloak:ie,ngController:je,ngForm:Td,ngHide:re,ngIf:ke,ngInclude:le,ngInit:me,ngNonBindable:ne,ngPluralize:oe,ngRepeat:pe,ngShow:qe,ngStyle:se,ngSwitch:te,ngSwitchWhen:ue,
ngSwitchDefault:ve,ngOptions:ze,ngTransclude:we,ngModel:Yd,ngList:$d,ngChange:Zd,required:Hc,ngRequired:Hc,ngValue:be}).directive(Mb).directive(Ic);a.provider({$anchorScroll:Zc,$animate:Od,$browser:bd,$cacheFactory:cd,$controller:gd,$document:hd,$exceptionHandler:id,$filter:vc,$interpolate:nd,$interval:od,$http:jd,$httpBackend:kd,$location:rd,$log:sd,$parse:td,$rootScope:wd,$q:ud,$sce:zd,$sceDelegate:yd,$sniffer:Ad,$templateCache:dd,$timeout:Bd,$window:Cd})}])})(bb);y(O).ready(function(){Oc(O,Wb)})})(window,
document);!angular.$$csp()&&angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-start{clip:rect(0,auto,auto,0);-ms-zoom:1.0001;}.ng-animate-active{clip:rect(-1px,auto,auto,0);-ms-zoom:1;}</style>');
//# sourceMappingURL=angular.min.js.map


 /*nlp_compromise 5.2.0  MIT*/

!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,b.nlp_compromise=a()}}(function(){var a;return function b(a,c,d){function e(g,h){if(!c[g]){if(!a[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};a[g][0].call(k.exports,function(b){var c=a[g][1][b];return e(c?c:b)},k,k.exports,b,a,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){"use strict";var d=a("./honourifics"),e=["arc","al","exp","rd","st","dist","mt","fy","pd","pl","plz","tce","llb","md","bl","ma","ba","lit","ex","eg","ie","circa","ca","cca","vs","etc","esp","ft","bc","ad"];e=e.concat(d);var f=["dept","univ","assn","bros","inc","ltd","co","corp","yahoo","joomla","jeopardy"];e=e.concat(f);var g=["ariz","cal","calif","col","colo","conn","fla","fl","ga","ida","ia","kan","kans","md","minn","neb","nebr","okla","penna","penn","pa","dak","tenn","tex","ut","vt","va","wis","wisc","wy","wyo","usafa","alta","ont","que","sask","ave","blvd","cl","ct","cres","hwy"];e=e.concat(g);var h=["jan","feb","mar","apr","jun","jul","aug","sep","oct","nov","dec","sept","sep"];e=e.concat(h),b.exports={abbreviations:e,dates:h,orgs:f,places:g}},{"./honourifics":9}],2:[function(a,b,c){"use strict";var d=a("../fns"),e={erate:"degen,delib,desp,lit,mod",icial:"artif,benef,off,superf",ntial:"esse,influe,pote,substa",teful:"gra,ha,tas,was",stant:"con,di,in,resi",going:"easy,fore,on,out",hing:"astonis,das,far-reac,refres,scat,screec,self-loat,soot",eful:"car,grac,peac,sham,us,veng",ming:"alar,cal,glea,unassu,unbeco,upco",cial:"commer,cru,finan,ra,so,spe",tful:"deligh,doub,fre,righ,though,wis",ight:"overn,overwe,r,sl,upt",ated:"antiqu,intoxic,sophistic,unregul,unrel",rant:"aber,exube,flag,igno,vib",uent:"congr,fl,freq,subseq",rate:"accu,elabo,i,sepa",ific:"horr,scient,spec,terr",rary:"arbit,contempo,cont,tempo",ntic:"authe,fra,giga,roma",wing:"harro,kno,left-,right-",nant:"domi,malig,preg,reso",nent:"emi,immi,perma,promi",iant:"brill,def,g,luxur",ging:"dama,encoura,han,lon",iate:"appropr,immed,inappropr,intermed",rect:"cor,e,incor,indi",zing:"agoni,ama,appeti,free",ant:"abund,arrog,eleg,extravag,exult,hesit,irrelev,miscre,nonchal,obeis,observ,pl,pleas,redund,relev,reluct,signific,vac,verd",ing:"absorb,car,coo,liv,lov,ly,menac,perplex,shock,stand,surpris,tell,unappeal,unconvinc,unend,unsuspect,vex,want",ate:"adequ,delic,fortun,inadequ,inn,intim,legitim,priv,sed,ultim",ted:"expec,impor,limi,spiri,talen,tes,unexpec,unpreceden",ish:"dan,fool,hell,lout,self,snobb,squeam,styl",ary:"dre,legend,necess,prim,sc,second,w,we",ite:"el,favor,fin,oppos,pet,pol,recond,tr",ely:"hom,lik,liv,lon,lov,tim,unlik",ure:"fut,insec,miniat,obsc,premat,sec,s",tly:"cos,ghas,ghos,nigh,sain,sprigh,unsigh",dly:"cowar,cud,frien,frien,kin,ma",ble:"a,dou,hum,nim,no,proba",rly:"bu,disorde,elde,hou,neighbo,yea",ine:"div,femin,genu,mascul,prist,rout",ute:"absol,ac,c,m,resol",ped:"cram,pum,stereoty,stri,war",sed:"clo,disea,distres,unsupervi,u",lly:"chi,hi,jo,si,sme",per:"dap,impro,pro,su,up",ile:"fert,host,juven,mob,volat",led:"detai,disgrunt,fab,paralle,troub",ern:"east,north,south,st,west",ast:"e,l,p,steadf",ent:"abs,appar,b,pres",ged:"dama,deran,jag,rag",ded:"crow,guar,retar,undeci",est:"b,dishon,hon,quick",ial:"colon,impart,init,part",ter:"bet,lat,ou,ut",ond:"bey,bl,sec,vagab",ady:"he,re,sh,ste",eal:"ether,id,r,surr",ard:"abo,awkw,stand,straightforw",ior:"jun,pr,sen,super",ale:"fem,m,upsc,wholes",ed:"advanc,belov,craz,determin,hallow,hook,inbr,justifi,nak,nuanc,sacr,subdu,unauthoriz,unrecogniz,wick",ly:"dai,deep,earth,gris,heaven,low,meas,melancho,month,oi,on,prick,seem,s,ug,unru,week,wi,woman",al:"actu,coloss,glob,illeg,leg,leth,liter,loy,ov,riv,roy,univers,usu",dy:"baw,bloo,clou,gau,gid,han,mol,moo,stur,ti,tren,unti,unwiel",se:"adver,den,diver,fal,immen,inten,obe,perver,preci,profu",er:"clev,form,inn,oth,ov,she,slend,somb,togeth,und",id:"afra,hum,langu,plac,rab,sord,splend,stup,torp",re:"awa,bizar,di,enti,macab,me,seve,since,spa",en:"barr,brok,crav,op,sudd,unev,unwritt,wood",ic:"alcohol,didact,gener,hispan,organ,publ,symbol",ny:"ma,pho,pu,shi,skin,ti,za",st:"again,mo,populi,raci,robu,uttermo",ne:"do,go,insa,obsce,picayu,sere",nd:"behi,bla,bli,profou,undergrou,wou",le:"midd,multip,sing,so,subt,who",pt:"abru,ade,a,bankru,corru,nondescri",ty:"faul,hef,lof,mea,sal,uppi",sy:"bu,chee,lou,no,ro",ct:"abstra,exa,imperfe,inta,perfe","in":"certa,highfalut,ma,tw,va",et:"discre,secr,sovi,ups,viol",me:"part-ti,pri,sa,supre,welco",cy:"boun,fan,i,jui,spi",ry:"fur,sor,tawd,wi,w",te:"comple,concre,obsole,remo",ld:"ba,bo,go,mi",an:"deadp,republic,t,urb",ll:"a,i,overa,sti",ay:"everyd,g,gr,ok",or:"indo,maj,min,outdo",my:"foa,gloo,roo,sli",ck:"ba,qua,si,sli",rt:"cove,expe,hu,ove",ul:"fo,gainf,helpf,painf"},f=["ablaze","above","adult","ahead","aloof","arab","asleep","average","awake","backwards","bad","blank","bogus","bottom","brisk","cagey","chief","civil","common","complex","cozy","crisp","deaf","devout","difficult","downtown","due","dumb","eerie","evil","excess","extra","fake","far","faux","fierce ","fit","foreign","fun","good","goofy","gratis","grey","groovy","gross","half","huge","humdrum","inside","kaput","left","less","level","lewd","magenta","makeshift","mammoth","medium","moot","naive","nearby","next","nonstop","north","offbeat","ok","outside","overwrought","premium","pricey","pro","quaint","random","rear","rebel","ritzy","rough","savvy","sexy","shut","shy","sleek","smug","solemn","south","stark","superb","taboo","teenage","top","tranquil","ultra","understood","unfair","unknown","upbeat","upstairs","vanilla","various","widespread","woozy","wrong","final","true","modern","notable"];b.exports=d.expand_suffixes(f,e)},{"../fns":23}],3:[function(a,b,c){"use strict";b.exports=["absurd","aggressive","alert","alive","awesome","beautiful","big","bitter","black","blue","bored","boring","brash","brave","brief","bright","broad","brown","calm","charming","cheap","clean","cold","cool","cruel","cute","damp","deep","dear","dead","dark","dirty","drunk","dull","eager","efficient","even","faint","fair","fanc","fast","fat","feeble","few","fierce","fine","flat","forgetful","frail","full","gentle","glib","great","green","gruesome","handsome","hard","harsh","high","hollow","hot","impolite","innocent","keen","kind","lame","lean","light","little","loose","long","loud","low","lush","macho","mean","meek","mellow","mundane","near","neat","new","nice","normal","odd","old","pale","pink","plain","poor","proud","purple","quick","rare","rapid","red","rich","ripe","rotten","round","rude","sad","safe","scarce","scared","shallow","sharp","short","shrill","simple","slim","slow","small","smart","smooth","soft","sore","sour","square","stale","steep","stiff","straight","strange","strong","sweet","swift","tall","tame","tart","tender","tense","thick","thin","tight","tough","vague","vast","vulgar","warm","weak","wet","white","wide","wild","wise","young","yellow","easy","narrow","late","early","soon","close","empty","dry","windy","noisy","thirsty","hungry","fresh","quiet","clear","heavy","happy","funny","lucky","pretty","important","interesting","attractive","dangerous","intellegent","pure","orange","large","firm","grand","formal","raw","weird","glad","mad","strict","tired","solid","extreme","mature","true","free","curly","angry"].reduce(function(a,b){return a[b]="Adjective",a},{})},{}],4:[function(a,b,c){"use strict";b.exports=["usd","cad","aud","gbp","krw","inr","hkd","dkk","cny","xaf","xof","eur","jpy","denar","dobra","forint","kwanza","kyat","lempira","pound sterling","riel","yen","zloty","dollar","cent","penny","dime","dinar","euro","lira","pound","pence","peso","sterling","rand","rouble","shekel","sheqel","yuan","franc","rupee","shilling","krona","dirham","bitcoin","€","$","¥","£","лв","₡","kn","kr","¢","Ft","Rp","﷼","₭","ден","₨","zł","lei","руб","฿"]},{}],5:[function(a,b,c){"use strict";for(var d=["january","february","april","june","july","august","september","october","november","december","jan","feb","mar","apr","jun","jul","aug","sep","oct","nov","dec","sept","sep"],e=["monday","tuesday","wednesday","thursday","friday","saturday","sunday","mon","tues","wed","thurs","fri","sat","sun"],f=0;6>=f;f++)e.push(e[f]+"s");for(var g=["millisecond","second","minute","hour","morning","afternoon","evening","night","day","week","month","year","decade"],h=g.length,f=0;h>f;f++)g.push(g[f]+"s");g.push("century"),g.push("centuries");var i=["yesterday","today","tomorrow","week","weekend","tonight"];b.exports={days:e,months:d,durations:g,relative:i}},{}],6:[function(a,b,c){"use strict";b.exports=["afghan","albanian","algerian","angolan","argentine","armenian","australian","aussie","austrian","bangladeshi","belarusian","belgian","bolivian","bosnian","brazilian","bulgarian","cambodian","cameroonian","canadian","chadian","chilean","chinese","colombian","congolese","croatian","cuban","czech","dominican","danish","egyptian","british","estonian","ethiopian","ecuadorian","finnish","french","gambian","georgian","german","greek","ghanaian","guatemalan","haitian","hungarian","honduran","icelandic","indian","indonesian","iranian","iraqi","irish","israeli","italian","ivorian","jamaican","japanese","jordanian","kazakh","kenyan","korean","kuwaiti","lao","latvian","lebanese","liberian","libyan","lithuanian","namibian","malagasy","macedonian","malaysian","mexican","mongolian","moroccan","dutch","nicaraguan","nigerian","nigerien","norwegian","omani","panamanian","paraguayan","pakistani","palestinian","peruvian","philippine","filipino","polish","portuguese","qatari","romanian","russian","rwandan","samoan","saudi","scottish","senegalese","serbian","singaporean","slovak","somalian","sudanese","swedish","swiss","syrian","taiwanese","trinidadian","thai","tunisian","turkmen","ugandan","ukrainian","american","hindi","spanish","venezuelan","vietnamese","welsh","zambian","zimbabwean","english","african","european","asian","californian"]},{}],7:[function(a,b,c){"use strict";for(var d=a("./names/male"),e=a("./names/female"),f={},g=["casey","jamie","lee","jaime","jessie","morgan","rene","robin","devon","kerry","alexis","guadalupe","blair","kasey","jean","marion","aubrey","shelby","jan","shea","jade","kenyatta","kelsey","shay","lashawn","trinity","regan","jammie","cassidy","cheyenne","reagan","shiloh","marlo","andra","devan","rosario","lee"],h=0;h<d.length;h++)f[d[h]]="m";for(var h=0;h<e.length;h++)f[e[h]]="f";for(var h=0;h<g.length;h+=1)f[g[h]]="a";b.exports=f},{"./names/female":14,"./names/male":15}],8:[function(a,b,c){"use strict";var d=a("../fns"),e={"new years eve":"december 31","new years":"january 1","new years day":"january 1",thanksgiving:"fourth thursday in november","christmas eve":"december 24",christmas:"december 25","christmas day":"december 25","saint patricks day":"march 17","st patricks day":"march 17","april fools":"april 1",halloween:"october 31",valentines:"february 14","valentines day":"february 14","martin luther king":"third monday in january","inauguration day":"january 20","washingtons birthday":"third monday in february","presidents day":"third monday in february","memorial day":"last monday in may","labor day":"first monday in september","columbus day":"second monday in october","veterans day":"november 11","labour day":"first monday in september","commonwealth day":"second monday in march","st andrews day":"november 30","saint andrews day":"november 30","may day":"may 1","russia day":"june 12","australia day":"january 26","boxing day":"december 26","queens birthday":"2nd monday in june","canada day":"july 1","victoria day":"may 24","canadian thanksgiving":"second monday in october","rememberance day":"november 11","august civic holiday":"first monday in august","natal day":"first monday in august","all saints day":"november 1","armistice day":"november 11","bastille day":"july 14","st stephens day":"december 26","saint stephens day":"december 26"},f={2015:{"chinese new year":"february 19",easter:"april 5","easter sunday":"april 5","easter monday":"april 6","good friday":"april 3","ascension day":"may 14",eid:"july 17","eid al-fitr":"july 17","eid al-adha":"september 24",ramadan:"june 6",ashura:"23 october",diwali:"11 november"},2016:{"chinese new year":"february 8",easter:"march 27","easter sunday":"march 27","easter monday":"march 28","good friday":"march 25","ascension day":"may 5",eid:"july 6","eid al-fitr":"july 6","eid al-adha":"september 11",ramadan:"may 27",diwali:"october 30"},2017:{"chinese new year":"28 january",easter:"april 16","easter sunday":"april 16","easter monday":"april 17","good friday":"april 14","ascension day":"may 25",eid:"july 25","eid al-fitr":"july 25",diwali:"october 21",ramadan:"may 27"}},g=(new Date).getFullYear(),h=d.extend(e,f[g]||{});b.exports=h},{"../fns":23}],9:[function(a,b,c){"use strict";b.exports=["jr","mr","mrs","ms","dr","prof","sr","sen","corp","rep","gov","atty","supt","det","rev","col","gen","lt","cmdr","adm","capt","sgt","cpl","maj","mister","sir","esq","mstr","phd","adj","adv","asst","bldg","brig","comdr","hon","messrs","mlle","mme","op","ord","pvt","reps","res","sens","sfc","surg"]},{}],10:[function(a,b,c){"use strict";var d=[["child","_ren"],["person","people"],["leaf","leaves"],["database","_s"],["quiz","_zes"],["stomach","_s"],["sex","_es"],["move","_s"],["shoe","_s"],["goose","geese"],["phenomenon","phenomena"],["barracks","_"],["deer","_"],["syllabus","syllabi"],["index","indices"],["appendix","appendices"],["criterion","criteria"],["man","men"],["sex","_es"],["rodeo","_s"],["epoch","_s"],["zero","_s"],["avocado","_s"],["halo","_s"],["tornado","_s"],["tuxedo","_s"],["sombrero","_s"],["addendum","addenda"],["alga","_e"],["alumna","_e"],["alumnus","alumni"],["bacillus","bacilli"],["cactus","cacti"],["beau","_x"],["château","_x"],["chateau","_x"],["tableau","_x"],["corpus","corpora"],["curriculum","curricula"],["echo","_es"],["embargo","_es"],["foot","feet"],["genus","genera"],["hippopotamus","hippopotami"],["larva","_e"],["libretto","libretti"],["loaf","loaves"],["matrix","matrices"],["memorandum","memoranda"],["mosquito","_es"],["opus","opera"],["ovum","ova"],["ox","_en"],["radius","radii"],["referendum","referenda"],["thief","thieves"],["tooth","teeth"]];d=d.map(function(a){return a[1]=a[1].replace("_",a[0]),a}),b.exports=d},{}],11:[function(a,b,c){"use strict";var d={take:{perfect:"have taken",pluperfect:"had taken",future_perfect:"will have taken"},free:{gerund:"freeing",actor:""},arise:{past:"arose",participle:"arisen"},babysit:{past:"babysat",actor:"babysitter"},be:{past:"was",present:"is",future:"will be",perfect:"have been",pluperfect:"had been",future_perfect:"will have been",actor:"",gerund:"am"},is:{past:"was",present:"is",future:"will be",perfect:"have been",pluperfect:"had been",future_perfect:"will have been",actor:"",gerund:"being"},beat:{gerund:"beating",actor:"beater"},begin:{gerund:"beginning",past:"began"},bet:{actor:"better"},bind:{past:"bound"},bite:{gerund:"biting",past:"bit"},bleed:{past:"bled"},"break":{past:"broke"},breed:{past:"bred"},bring:{past:"brought"},broadcast:{past:"broadcast"},build:{past:"built"},buy:{past:"bought"},"catch":{past:"caught"},choose:{gerund:"choosing",past:"chose"},cost:{past:"cost"},deal:{past:"dealt"},die:{past:"died",gerund:"dying"},dig:{gerund:"digging",past:"dug"},"do":{past:"did",present:"does"},draw:{past:"drew"},drink:{past:"drank"},drive:{gerund:"driving",past:"drove"},eat:{gerund:"eating",past:"ate",actor:"eater"},fall:{past:"fell"},feed:{past:"fed"},feel:{past:"felt",actor:"feeler"},fight:{past:"fought"},find:{past:"found"},fly:{past:"flew"},forbid:{past:"forbade"},forget:{gerund:"forgeting",past:"forgot"},forgive:{gerund:"forgiving",past:"forgave"},freeze:{gerund:"freezing",past:"froze"},get:{past:"got"},give:{gerund:"giving",past:"gave"},go:{past:"went",present:"goes"},hang:{past:"hung"},have:{gerund:"having",past:"had",present:"has"},hear:{past:"heard"},hide:{past:"hid"},hold:{past:"held"},hurt:{past:"hurt"},lay:{past:"laid"},lead:{past:"led"},leave:{past:"left"},lie:{gerund:"lying",past:"lay"},light:{past:"lit"},lose:{gerund:"losing",past:"lost"},make:{past:"made"},mean:{past:"meant"},meet:{gerund:"meeting",past:"met",actor:"meeter"},pay:{past:"paid"},read:{past:"read"},ring:{past:"rang"},rise:{past:"rose"},run:{gerund:"running",past:"ran"},say:{past:"said"},see:{past:"saw"},sell:{past:"sold"},shine:{past:"shone"},shoot:{past:"shot"},show:{past:"showed"},sing:{past:"sang"},sink:{past:"sank",pluperfect:"had sunk"},sit:{past:"sat"},slide:{past:"slid"},speak:{past:"spoke",perfect:"have spoken",pluperfect:"had spoken",future_perfect:"will have spoken"},spin:{gerund:"spinning",past:"spun"},spread:{past:"spread"},stand:{past:"stood"},steal:{past:"stole",actor:"stealer"},stick:{past:"stuck"},sting:{past:"stung"},stream:{actor:"streamer"},strike:{gerund:"striking",past:"struck"},swear:{past:"swore"},swim:{past:"swam"},swing:{past:"swung"},teach:{past:"taught",present:"teaches"},tear:{past:"tore"},tell:{past:"told"},think:{past:"thought"},understand:{past:"understood"},wake:{past:"woke"},wear:{past:"wore"},win:{gerund:"winning",past:"won"},withdraw:{past:"withdrew"},write:{gerund:"writing",past:"wrote"},tie:{gerund:"tying",past:"tied"},ski:{past:"skiied"},boil:{actor:"boiler"},miss:{present:"miss"},act:{actor:"actor"},compete:{gerund:"competing",past:"competed",actor:"competitor"},being:{gerund:"are",past:"were",present:"are"},imply:{past:"implied",present:"implies"},ice:{gerund:"icing",past:"iced"},develop:{past:"developed",actor:"developer",gerund:"developing"},wait:{gerund:"waiting",past:"waited",actor:"waiter"},aim:{actor:"aimer"},spill:{past:"spilt"},drop:{gerund:"dropping",past:"dropped"},log:{gerund:"logging",past:"logged"},rub:{gerund:"rubbing",past:"rubbed"},smash:{present:"smashes"},suit:{gerund:"suiting",past:"suited",actor:"suiter"}};b.exports=d},{}],12:[function(a,b,c){"use strict";for(var d={there:"NN",here:"JJ",better:"JJR",earlier:"JJR",has:"VB",sounds:"VBZ",taken:"VBD",msg:"VB",noon:"DA",midnight:"DA",now:"DA",morning:"DA",evening:"DA",afternoon:"DA",ago:"DA",eod:"DA",eom:"DA",number:"NN",system:"NN",example:"NN",part:"NN",house:"NN"},e={CC:["yet","therefore","or","while","nor","whether","though","because","cuz","but","for","and","however","before","although","how","plus","versus","not"],CO:["if","unless","otherwise","notwithstanding"],VBD:["said","had","been","began","came","did","meant","went"],VBN:["given","known","shown","seen","born"],VBG:["going","being","according","resulting","developing","staining"],CP:["is","will be","are","was","were","am","isn't","ain't","aren't"],DT:["this","any","enough","each","whatever","every","which","these","another","plenty","whichever","neither","an","a","least","own","few","both","those","the","that","various","what","either","much","some","else","no","la","le","les","des","de","du","el"],IN:["until","onto","of","into","out","except","across","by","between","at","down","as","from","around","with","among","upon","amid","to","along","since","about","off","on","within","in","during","per","without","throughout","through","than","via","up","unlike","despite","below","unless","towards","besides","after","whereas","'o","amidst","amongst","apropos","atop","barring","chez","circa","mid","midst","notwithstanding","qua","sans","vis-a-vis","thru","till","versus","without","w/o","o'","a'"],MD:["can","may","could","might","will","ought to","would","must","shall","should","ought","shant","lets"],PP:["mine","something","none","anything","anyone","theirs","himself","ours","his","my","their","yours","your","our","its","herself","hers","themselves","myself","itself","her","who","whom","whose"],PRP:["it","they","i","them","you","she","me","he","him","ourselves","us","we","thou","il","elle","yourself","'em","he's","she's"],RB:["again","already","soon","directly","toward","forever","apart","instead","yes","alone","indeed","ever","quite","perhaps","where","then","thus","very","often","once","never","why","when","away","always","sometimes","also","maybe","so","just","well","several","such","randomly","too","rather","abroad","almost","anyway","twice","aside","moreover","anymore","newly","damn","somewhat","somehow","meanwhile","hence","further","furthermore","more","way","kinda","totally"],EX:["uh","uhh","uh huh","uh-oh","please","ugh","sheesh","eww","pff","voila","oy","hi","hello","bye","goodbye","hey","hai","eep","hurrah","yuck","ow","duh","oh","hmm","yeah","whoa","ooh","whee","ah","bah","gah","yaa","phew","gee","ahem","eek","meh","yahoo","oops","d'oh","psst","argh","grr","nah","shhh","whew","mmm","ooo","yay","uh-huh","boo","wow","nope","haha","hahaha","lol","lols","ya","hee","ohh","eh","yup"],NN:["nothing","everything","god","student","patent","funding","banking","ceiling","energy","purpose","friend","event","room","door","thing","things","stuff","lunch","breakfast","dinner","home","problem","body","world","city","death","others"],PN:["father","mother","mom","dad","mommy","daddy","sister","brother","aunt","uncle","grandfather","grandmother","cousin","stepfather","stepmother","boy","girl","man","men","woman","women","guy","dude","bro","gentleman","someone"]},f=Object.keys(e),g=0;g<f.length;g++)for(var h=e[f[g]],i=0;i<h.length;i++)d[h[i]]=f[g];b.exports=d},{}],13:[function(a,b,c){"use strict";b.exports={"a few":"CD","of course":"RB","at least":"RB","no longer":"RB","sort of":"RB","once again":"RB","once more":"RB","up to":"RB","by now":"RB","all but":"RB","just about":"RB","so called":"JJ","on board":"JJ","a lot":"RB","by far":"RB","at best":"RB","at large":"RB","for good":"RB","for example":"RB","vice versa":"JJ","en route":"JJ","for sure":"RB","upside down":"JJ","at most":"RB","per se":"RB","at worst":"RB","upwards of":"RB","en masse":"RB","point blank":"RB","up front":"JJ","in front":"JJ","in situ":"JJ","in vitro":"JJ","ad hoc":"JJ","de facto":"JJ","ad infinitum":"JJ","ad nauseam":"RB","for keeps":"JJ","a priori":"JJ","et cetera":"IN","off guard":"JJ","spot on":"JJ","ipso facto":"JJ","not withstanding":"RB","de jure":"RB","a la":"IN","ad hominem":"NN","par excellence":"RB","de trop":"RB","a posteriori":"RB","fed up":"JJ","brand new":"JJ","old fashioned":"JJ","bona fide":"JJ","well off":"JJ","far off":"JJ","straight forward":"JJ","hard up":"JJ","sui generis":"JJ","en suite":"JJ","avant garde":"JJ","sans serif":"JJ","gung ho":"JJ","super duper":"JJ","new york":"NN","new england":"NN","new hampshire":"NN","new delhi":"NN","new jersey":"NN","new mexico":"NN","united states":"NN","united kingdom":"NN","great britain":"NN","head start":"NN","make sure":"VB","keep tabs":"VB","credit card":"NN","standard time":"DA","daylight time":"DA","summer time":"DA","fl oz":"NN","us dollar":"NN"}},{}],14:[function(a,b,c){"use strict";var d=a("../../fns"),e=["abby","amy","autumn","bobbi","brooke","carol","cheryl","claire","cleo","consuelo","eleanor","eliza","erika","faye","fern","genevieve","gertrude","gladys","inez","ingrid","jenny","jo","joni","kathryn","kelli","kim","latoya","leigh","lupe","luz","lynn","mae","maude","mildred","miriam","naomi","nikki","olga","reba","robyn","rosalind","ruth","sheryl","socorro","sonja","staci","tanya","therese","toni","traci","vicki","vicky"],f={nette:"an,antoi,ja,jea,jean,ly",eline:"ad,ang,jacqu,mad",rlene:"a,cha,da,ma",stine:"chri,erne,ju,kri",tasha:"la,na,",andra:"alex,cass,s",helle:"mic,rac,roc",linda:"be,,me",stina:"chri,cri,kri",annie:",f,je",anne:",di,je,jo,le,mari,rox,sus,suz",elia:"am,ang,cec,c,corn,d,of,sh",llie:"ca,ke,li,mi,mo,ne,o,sa",anna:",de,di,jo,joh,sh",ette:"bernad,b,bridg,claud,paul,yv",ella:"d,,est,lu,marc,st",nnie:"bo,co,je,mi,wi",elle:"dani,est,gabri,isab,jan",icia:"al,fel,let,patr,tr",leen:"ai,cath,col,ei,kath",elma:",s,th,v",etta:",henri,lor,ros",anie:"j,mel,stef,steph",anda:"am,mir,w,yol",arla:"c,d,k,m",lena:"e,he,,magda",rina:"kat,ma,sab,t",isha:"al,ke,lat,tr",olly:"d,m,p",rice:"beat,cla,pat",ttie:"be,ma,ne",acie:"gr,st,tr",isty:"chr,kr,m",dith:"e,ju,mere",onya:"lat,s,t",onia:"ant,s,t",erri:"k,sh,t",lisa:"a,e,",rine:"cathe,katha,kathe",nita:"a,bo,jua",elyn:"ev,jacqu,joc",nine:"ja,jea,jean",nice:"ber,eu,ja",tney:"brit,cour,whi",ssie:"be,ca,e",beth:",elisa,eliza",ine:"carol,ela,franc,gerald,jasm,joseph,lorra,max,nad,paul",ana:"adri,,d,de,di,j,ju,l,sh,sus",rie:"car,che,lau,lo,ma,marjo,rosema,sher,vale",ina:"angel,carol,d,georg,g,josef,mart,n,t",ora:"c,deb,d,fl,len,l,n,",ara:"barb,c,cl,k,l,s,tam,t",ela:"ang,carm,gabri,graci,l,manu,pam",ica:"angel,er,jess,mon,patr,veron",nda:"bre,gle,luci,ly,rho,ro",ley:"ash,kel,kimber,les,shel,shir",eri:"ch,j,k,sh,t",ndy:"ci,ma,mi,sa,we",ene:"hel,imog,ir,jol,lor",ula:"e,l,pa,urs",ann:",jo,le,mary",ola:"le,l,,vi",nna:"do,gle,je,lado",nne:"adrie,cori,ly,yvo",lie:"ju,les,nata,rosa",ise:"den,el,elo,lou",die:"ad,gol,jo,sa",ena:"d,lor,r,she",ian:"jill,lill,mar,viv",lyn:"caro,gwendo,jac,mari",ssa:"aly,mari,meli,vane",thy:"ca,doro,dor,ka",tha:"ber,mar,saman,tabi",sie:"el,jo,ro,su",bel:"isa,ma,mari",via:"oli,sil,syl",tie:"chris,ka,kris",dra:"au,ken,son",ria:"glo,ma,victo",gie:"an,mag,mar",lly:"ke,sa,she",ila:"le,l,she",rna:"lo,my,ve",ole:"car,nich,nic",rma:"e,i,no",any:"beth,britt,tiff",ona:"le,m,ram",rta:"albe,ma,robe",en:"carm,dore,ell,gretch,gw,hel,kar,kirst,krist,laur,maure",ia:"cecil,claud,cynth,eugen,georg,jul,luc,lyd,marc,soph,virgin",le:"ade,camil,ceci,ga,gay,luci,lucil,mab,miche,myrt",ie:"bobb,debb,dix,eff,jack,lizz,mam,soph,tamm,vick",ra:"barb,deb,elvi,lau,may,my,pet,ve",er:"amb,est,esth,heath,jenif,jennif,summ",da:"a,ai,fre,frie,hil,i,matil",ce:"ali,canda,candi,constan,floren,gra,joy",ah:"beul,debor,hann,le,rebek,sar",sa:"el,lui,mari,ro,tere,there",ne:"daph,dia,ja,jay,laver,simo",el:"eth,laur,muri,racha,rach,raqu",is:"delor,dor,jan,lo,mav,phyll",et:"bridg,harri,jan,margar,margr",ta:"al,chris,kris,margari,ri",es:"agn,delor,dolor,franc,merced",an:"jo,meag,meg,megh,sus",cy:"lu,mar,nan,sta,tra","in":"caitl,er,kar,krist",ey:"audr,linds,stac,trac",ca:"bian,blan,francis,rebec",on:"alis,allis,shann,shar",il:"abiga,apr,ga,syb",ly:"bever,emi,kimber,li",ea:"andr,chels,doroth,l",ee:"aim,d,desir,ren",ma:"al,em,wil",di:"bran,hei,jo",va:"el,e,i",ue:"dominiq,moniq,s",ay:"f,k,linds",te:"celes,ka,margueri",ry:"ma,rosema,sher",na:"ed,shau,shaw",dy:"jo,ju,tru",ti:"chris,kris,pat",sy:"bet,dai,pat",ri:"ka,lo,sha",la:"kay,priscil,wil",al:"cryst,kryst,op",ll:"jewe,ji,ne"};e=d.expand_suffixes(e,f);var g={mar:"go,isol,itza,sha",tam:"i,ika,my",be:"atriz,cky,tty,ttye",pe:"arl,ggy,nny",pa:"ige,m,tty"};e=d.expand_prefixes(e,g),b.exports=e},{"../../fns":23}],15:[function(a,b,c){"use strict";var d=a("../../fns"),e=["adolfo","angelo","anthony","armand","arthur","bill","billy","bobby","bradford","bret","caleb","carroll","cliff","clifford","craig","curt","derek","doug","dwight","edmund","eli","elliot","enrique","erik","felipe","felix","francisco","frank","george","glenn","greg","gregg","hans","hugh","ira","irving","isaac","jim","kermit","kurt","leo","levi","lorenzo","lou","pablo","pat","percy","philip","phillip","rex","ricky","shaun","shawn","sterling","steve","tim","timothy","wilbur","williams","wm","woodrow"],f={rence:"cla,lau,law,te,ter",lbert:"a,de,e,gi,wi",ustin:"ag,a,d,j",berto:"al,gil,hum,ro",ester:"ch,l,sylv",onnie:"d,l,r",wayne:"de,d,",erick:",fred,rod",athan:"john,jon,n",elvin:",k,m",anuel:"em,emm,m",bert:",her,hu,nor,ro",rick:"der,fred,kend,pat,",land:"cleve,gar,le,ro",ando:"arm,fern,orl,rol",ardo:"edu,ger,leon,ric",lton:"a,car,e,mi",arry:"b,g,h,l",nton:"a,cli,qui",fred:"al,,wil",ance:"l,terr,v",mmie:"ji,sa,to",erry:"j,p,t",mond:"des,ed,ray",rman:"he,no,she",rvin:"e,i,ma",nald:"do,regi,ro",rett:"b,eve,gar",son:"harri,jack,ja,ma,nel,ty,wil",ell:"darn,darr,low,mitch,russ,terr,wend",ard:"bern,edw,ger,how,leon,rich,will",ian:"adr,br,christ,dam,fab,,jul",don:"bran,,el,gor,shel",ron:"aa,by,came,my,",ton:"bur,clay,clif,pres,wins",lan:"a,al,dy,har,no",rey:"ca,co,geoff,jeff",ent:"br,k,tr,vinc",ael:"ism,mich,raf,raph",mmy:"ji,sa,ti,to",mon:"da,ra,si,solo",las:"dal,doug,nicho,nico",vin:"al,cal,de,ke",nny:"be,da,joh,ke",ius:"cornel,dar,demetr,jul",ley:"brad,har,stan,wes",lio:"emi,ju,roge",ben:",reu,ru",ory:"c,greg,r",lie:"bil,char,wil",van:"e,i,",roy:"le,,t",all:"kend,marsh,rand",ary:"c,g,zach",ddy:"bu,fre,te",art:"b,stew,stu",iel:"dan,gabr,nathan",lin:"co,frank,mar",yle:"do,k,l",her:"christop,kristop,lut",oyd:"b,fl,ll",ren:"dar,lo,war",ter:"dex,pe,wal",arl:"c,e,k",ane:"d,du,sh",aul:"p,r,s",dan:"bren,,jor",nie:"ben,er,john",ine:"anto,bla,jerma",lph:"ra,rando,rudo",est:"earn,ern,forr",win:"dar,ed,er",is:"chr,curt,den,denn,ell,franc,lew,lou,lu,morr,ot,trav,will",er:"alexand,elm,grov,hom,jasp,javi,oliv,rodg,rog,spenc,tyl,xavi",an:"bry,de,esteb,eth,ju,log,rom,ry,se,st,steph",el:"ab,darr,fid,jo,lion,marc,mich,migu,no,russ,samu","in":"benjam,bra,dar,darr,efra,joaqu,mart,quent",ie:"arch,edd,frank,fredd,lou,regg,robb",en:"all,dami,gl,k,ow,steph,stev",ey:"dew,harv,jo,mick,rick,rodn,sidn",al:",h,jam,miche,ne,rand",on:"bry,j,jonath,le,marl,vern",or:"hect,juni,salvad,tayl,trev,vict",dy:"an,bra,co,gra,ran,ru",ce:"bru,bry,hora,mauri,roy,walla",il:"cec,em,ne,ph,virg",ar:"ces,edg,lam,om,osc",es:"andr,charl,jam,mil,mos",ro:"alejand,alva,artu,ped,rami",am:"abrah,ad,grah,s,willi",ck:"chu,domini,ja,ma,ni",io:"anton,gregor,ignac,mar,serg",ah:"elij,jeremi,mic,no",nt:"brya,cli,gra,lamo",re:"and,pier,salvato,theodo",ed:",jar,n,t",ld:"arno,gera,haro,jera",as:"eli,luc,thom,tom",os:"am,carl,marc,sant",ew:"andr,dr,math,matth",ke:"bla,ja,lu,mi",tt:"ellio,emme,ma,sco",ty:"mar,mon,rus,scot",th:"hea,kei,kenne,se",ay:"cl,j,murr,r",le:"da,mer,orvil",te:"mon,pe,vicen",us:"jes,marc,ruf",od:"elwo,jarr,r",ob:"b,jac,r",to:"beni,ernes,ot",ne:"euge,ge,tyro",go:"domin,hu,santia",de:"clau,cly,wa","do":"alfre,reynal,wilfre",rk:"cla,ki,ma",se:"cha,jes,jo",ry:"hen,jeffe,jeff",ic:"cedr,domin,er",ad:"br,ch,conr"};e=d.expand_suffixes(e,f);var g={jos:"eph,h,hua",ro:"cky,dolfo,osevelt,scoe,ss",je:"ff,remy,rome,ss",to:"by,dd,m,ny",da:"rryl,ryl,ve,vid",jo:"e,esph,hn,rge",ma:"lcolm,rc,rco,x",al:"ex,fonso,i,onzo",gu:"illermo,stavo,y"};e=d.expand_prefixes(e,g),b.exports=e},{"../../fns":23}],16:[function(a,b,c){"use strict";var d={ones:{a:1,zero:0,one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9},teens:{ten:10,eleven:11,twelve:12,thirteen:13,fourteen:14,fifteen:15,sixteen:16,seventeen:17,eighteen:18,nineteen:19},tens:{twenty:20,thirty:30,forty:40,fifty:50,sixty:60,seventy:70,eighty:80,ninety:90},multiples:{hundred:100,grand:1e3,thousand:1e3,million:1e6,billion:1e9,trillion:1e12,quadrillion:1e15,quintillion:1e18,sextillion:1e21,septillion:1e24}},e={ones:{first:1,second:2,third:3,fourth:4,fifth:5,sixth:6,seventh:7,eighth:8,ninth:9},teens:{tenth:10,eleventh:11,twelfth:12,thirteenth:13,fourteenth:14,fifteenth:15,sixteenth:16,seventeenth:17,eighteenth:18,nineteenth:19},tens:{twentieth:20,thirtieth:30,fourtieth:40,fiftieth:50,sixtieth:60,seventieth:70,eightieth:80,ninetieth:90},multiples:{hundredth:100,thousandth:1e3,millionth:1e6,billionth:1e9,trillionth:1e12,quadrillionth:1e15,quintillionth:1e18,sextillionth:1e21,septillionth:1e24}},f={yotta:1,zetta:1,exa:1,peta:1,tera:1,giga:1,mega:1,kilo:1,hecto:1,deka:1,deci:1,centi:1,milli:1,micro:1,nano:1,pico:1,femto:1,atto:1,zepto:1,yocto:1,square:1,cubic:1,quartic:1};b.exports={ones:d.ones,teens:d.teens,tens:d.tens,multiples:d.multiples,ordinal_ones:e.ones,ordinal_teens:e.teens,ordinal_tens:e.tens,ordinal_multiples:e.multiples,prefixes:f}},{}],17:[function(a,b,c){"use strict";var d=["google","microsoft","walmart","exxonmobil","glencore","samsung","chevron","at&t","verizon","costco","nestlé","7-eleven","adidas","nike","acer","mcdonalds","mcdonald's","comcast","compaq","craigslist","cisco","disney","coca cola","dupont","ebay","facebook","fedex","kmart","kkk","kodak","monsanto","myspace","netflix","sony","telus","twitter","usps","ubs","ups","walgreens","youtube","yahoo!","yamaha"],e=["center","centre","memorial","school","government","faculty","society","union","ministry","collective","association","committee","university","bank","college","foundation","department","institute","club","co","sons"];
b.exports={suffixes:e,organizations:d}},{}],18:[function(a,b,c){"use strict";var d=a("../term/verb/conjugate/conjugate.js"),e=["be onto","fall behind","fall through","fool with","get across","get along","get at","give way","hear from","hear of","lash into","make do","run across","set upon","take aback","keep from"],f={away:"back","in":"out",on:"off",over:"under",together:"apart",up:"down"},g={away:"blow,bounce,bring,call,come,cut,drop,fire,get,give,go,keep,pass,put,run,send,shoot,switch,take,tie,throw","in":"bang,barge,bash,beat,block,book,box,break,bring,burn,butt,carve,cash,check,come,cross,drop,fall,fence,fill,give,grow,hand,hang,head,jack,keep,leave,let,lock,log,move,opt,pack,peel,pull,put,reach,ring,rub,send,set,settle,shut,sign,smash,snow,strike,take,try,turn,type,warm,wave,wean,wear,wheel",on:"add,call,carry,catch,count,feed,get,give,go,grind,head,hold,keep,lay,log,pass,pop,power,put,send,show,snap,switch,take,tell,try,turn,wait",over:"come,go,look,read,run,talk",together:"come,pull,put",up:"add,back,beat,bend,blow,boil,bottle,break,bring,buckle,bundle,call,carve,clean,cut,dress,fill,flag,fold,get,give,grind,grow,hang,hold,keep,let,load,lock,look,man,mark,melt,move,pack,pin,pipe,plump,pop,power,pull,put,rub,scale,scrape,send,set,settle,shake,show,sit,slow,smash,square,stand,strike,take,tear,tie,turn,use,wash,wind"};Object.keys(g).forEach(function(a){g[a].split(",").forEach(function(b){e.push(b+" "+a),e.push(b+" "+f[a])})});var h={about:"bring,fool,gad,go,root,mess",after:"go,look,take",ahead:"get,go,press",along:"bring,move",apart:"fall,take",around:"ask,boss,bring,call,come,fool,get,horse,joke,lie,mess,play",away:"back,carry,file,frighten,hide,wash",back:"fall,fight,hit,hold,look,pay,stand,think",by:"come,drop,get,go,stop,swear,swing,tick,zip",down:"bog,calm,fall,hand,hunker,jot,knock,lie,narrow,note,pat,pour,run,tone,trickle,wear","for":"fend,file,gun,hanker,root,shoot",forth:"bring,come",forward:"come,look","in":"cave,chip,hone,jump,key,pencil,plug,rein,shade,sleep,stop,suck,tie,trade,tuck,usher,weigh,zero",into:"look,run",it:"go,have",off:"auction,be,beat,blast,block,brush,burn,buzz,cast,cool,drop,end,face,fall,fend,frighten,goof,jack,kick,knock,laugh,level,live,make,mouth,nod,pair,pay,peel,read,reel,ring,rip,round,sail,shave,shoot,sleep,slice,split,square,stave,stop,storm,strike,tear,tee,tick,tip,top,walk,work,write",on:"bank,bargain,frown,hit,latch,pile,prattle,press,spring,spur,tack,urge,yammer",out:"act,ask,back,bail,bear,black,blank,bleed,blow,blurt,branch,buy,cancel,cut,eat,edge,farm,figure,find,fill,find,fish,fizzle,flake,flame,flare,flesh,flip,geek,get,help,hide,hold,iron,knock,lash,level,listen,lose,luck,make,max,miss,nerd,pan,pass,pick,pig,point,print,psych,rat,read,rent,root,rule,run,scout,see,sell,shout,single,sit,smoke,sort,spell,splash,stamp,start,storm,straighten,suss,time,tire,top,trip,trot,wash,watch,weird,whip,wimp,wipe,work,zone,zonk",over:"bend,bubble,do,fall,get,gloss,hold,keel,mull,pore,sleep,spill,think,tide,tip",round:"get,go",through:"go,run",to:"keep,see",up:"act,beef,board,bone,boot,brighten,build,buy,catch,cheer,cook,end,eye,face,fatten,feel,fess,finish,fire,firm,flame,flare,free,freeze,freshen,fry,fuel,gang,gear,goof,hack,ham,heat,hit,hole,hush,jazz,juice,lap,light,lighten,line,link,listen,live,loosen,make,mash,measure,mess,mix,mock,mop,muddle,open,own,pair,patch,pick,prop,psych,read,rough,rustle,save,shack,sign,size,slice,slip,snap,sober,spark,split,spruce,stack,start,stay,stir,stitch,straighten,string,suck,suit,sum,team,tee,think,tidy,tighten,toss,trade,trip,type,vacuum,wait,wake,warm,weigh,whip,wire,wise,word,write,zip"};Object.keys(h).forEach(function(a){h[a].split(",").forEach(function(b){e.push(b+" "+a)})}),e=e.reduce(function(a,b){return a[b]="VBP",a},{});var i={present:"VB",past:"VBD",future:"VBF",gerund:"VBG",infinitive:"VBP"},j={},k=void 0,l=void 0,m=void 0,n=void 0;Object.keys(e).forEach(function(a){k=a.split(" "),l=k[0],m=k[1],void 0===j[l]&&(j[l]=d(l)),Object.keys(j[l]).forEach(function(a){n=j[l][a]+" "+m,i[a]&&(e[n]=i[a])})}),b.exports=e},{"../term/verb/conjugate/conjugate.js":98}],19:[function(a,b,c){"use strict";var d=a("../fns"),e=["usa","u.s.a.","ussr","brazil","bangladesh","mexico","vietnam","egypt","germany","turkey","france","united kingdom","italy","kenya","iraq","morocco","peru","yemen","mozambique","sri lanka","burkina faso","niger","netherlands","chile","malawi","ecuador","côte d'ivoire","mali","zimbabwe","chad","belgium","cuba","greece","haiti","burundi","hungary","sweden","honduras","israel","laos","el salvador","libya","nicaragua","denmark","congo-brazzaville","kuwait","moldova","panama","jamaica","lesotho","guinea-bissau","timor-leste","djibouti","fiji","comoros","solomon islands","luxembourg","suriname","cape verde","malta","bahamas"],f={istan:"pak,uzbek,afghan,tajik,turkmen",ublic:"czech rep,dominican rep,central african rep",uinea:"g,papua new g,equatorial g",land:"thai,po,switzer,fin,republic of ire,new zea,swazi,ice",ania:"tanz,rom,maurit,lithu,alb",rica:"ame,united states of ame,south af,costa ",mbia:"colo,za,ga",eria:"nig,alg,lib",nia:"arme,macedo,slove,esto",sia:"indone,rus,malay,tuni",ina:"ch,argent,bosnia and herzegov",tan:"kazakhs,kyrgyzs,bhu",ana:"gh,botsw,guy",bia:"saudi ara,ser,nami",lia:"austra,soma,mongo",rea:"south ko,north ko,erit",dan:"su,south su,jor",ria:"sy,aust,bulga",ia:"ind,ethiop,cambod,boliv,slovak,georg,croat,latv",an:"jap,ir,taiw,azerbaij,om",da:"ugan,cana,rwan",us:"belar,mauriti,cypr",al:"nep,seneg,portug","in":"spa,ben,bahra",go:"dr con,to,trinidad-toba",la:"venezue,ango,guatema",es:"united stat,philippin,united arab emirat",on:"camero,leban,gab",ar:"myanm,madagasc,qat",ay:"paragu,norw,urugu",ne:"ukrai,sierra leo,palesti"};e=d.expand_suffixes(e,f);var g=["guangzhou","ahmedabad","phoenix","jakarta","curitiba","moscow","tokyo","nagoya","kobe","mexico","cebu","ho chi minh","hanoi","giza","frankfurt","stuttgart","i̇zmir","paris","toulouse","nice","rome","palermo","genoa","cape town","port elizabeth","bogotá","medellín","seville","zaragoza","kiev","odessa","rosario","la plata","warsaw","kraków","łódź","wrocław","poznań","calgary","ottawa","sydney","perth","homs","iași","cluj-napoca","almaty","the hague","utrecht","phnom penh","antwerp","ghent","brussels","tunis","athens","thessaloniki","prague","brno","miskolc","stockholm","västerås","tegucigalpa","graz","innsbruck","abu dhabi","haifa","ashdod","dushanbe","niš","aqaba","aalborg","helsinki","espoo","vantaa","turku","košice","ashgabat","oslo","trondheim","auckland","tbilisi","zagreb","split","kuwait","montevideo","klaipėda","doha","skopje","riga","luxembourg","reykjavik","kingston"],h={burg:"saint peters,yekaterin,ham,til,gothen,salz",ton:"hous,edmon,welling,hamil",ion:"hauts-bassins reg,nord reg,herakl",ana:"hav,tir,ljublj",ara:"guadalaj,ank,timișo",an:"tehr,mil,durb,bus,tain,abidj,amm,yerev",ia:"philadelph,brasíl,alexandr,pretor,valenc,sof,nicos",on:"ly,lond,yang,inche,daeje,lisb",en:"shenzh,eindhov,pils,copenhag,berg",ng:"beiji,chittago,pyongya,kaohsiu,taichu","in":"tianj,berl,tur,dubl,duned",es:"los angel,nant,napl,buenos air,f",la:"pueb,mani,barranquil,kampa,guatema",or:"salvad,san salvad,ulan bat,marib",us:"damasc,pirae,aarh,vilni",as:"carac,patr,burg,kaun",va:"craio,petah tik,gene,bratisla",ai:"shangh,mumb,chenn,chiang m",ne:"colog,melbour,brisba,lausan",er:"manchest,vancouv,tangi",ka:"dha,osa,banja lu",ro:"rio de janei,sappo,cai",am:"birmingh,amsterd,rotterd",ur:"kuala lump,winterth,kópavog",ch:"muni,züri,christchur",na:"barcelo,vien,var",ma:"yokoha,li,pana",ul:"istanb,seo,kab",to:"toron,qui,por",iv:"khark,lv,tel av",sk:"dnipropetrov,gdań,min"};g=d.expand_suffixes(g,h);var i={"new ":"delhi,york,taipei",san:"a'a,tiago, josé",ta:"ipei,mpere,llinn,rtu",ba:"ngalore,ngkok,ku,sel",li:"verpool,ège,nz,massol",ma:"rseille,ndalay,drid,lmö",be:"rn,lgrade,irut",ka:"rachi,raj,ndy",da:"egu,kar,ugavpils",ch:"icago,arleroi,ișinău",co:"lombo,nstanța,rk",bu:"rsa,charest,dapest"};g=d.expand_prefixes(g,i);var j=["atl","pek","lhr","hnd","ord","lax","cdg","dfw","cgk","dxb","fra","hkg","den","bkk","ams","jfk","ist","sfo","clt","las","phx","iax","kul","mia","icn","muc","syd","fco","mco","bcn","yyz","lgw","phl"];b.exports={countries:e,cities:g,airports:j}},{"../fns":23}],20:[function(a,b,c){"use strict";b.exports=["accountant","advisor","farmer","mechanic","technician","architect","clerk","therapist","bricklayer","butcher","carpenter","nurse","engineer","supervisor","attendant","operator","dietician","housekeeper","advisor","agent","firefighter","fireman","policeman","attendant","scientist","gardener","hairdresser","instructor","programmer","administrator","journalist","assistant","lawyer","officer","plumber","inspector","psychologist","receptionist","roofer","sailor","security guard","photographer","soldier","surgeon","researcher","practitioner","politician","musician","artist","secretary","minister","deputy","president"]},{}],21:[function(a,b,c){"use strict";b.exports=["aircraft","bass","bison","fowl","halibut","moose","salmon","spacecraft","tuna","trout","advice","information","knowledge","trouble","enjoyment","fun","recreation","relaxation","meat","rice","bread","cake","coffee","ice","water","oil","grass","hair","fruit","wildlife","equipment","machinery","furniture","mail","luggage","jewelry","clothing","money","mathematics","economics","physics","civics","ethics","gymnastics","mumps","measles","news","tennis","baggage","currency","soap","toothpaste","food","sugar","butter","flour","research","leather","wool","wood","coal","weather","homework","cotton","silk","patience","impatience","vinegar","art","beef","blood","cash","chaos","cheese","chewing","conduct","confusion","education","electricity","entertainment","fiction","forgiveness","gold","gossip","ground","happiness","history","honey","hospitality","importance","justice","laughter","leisure","lightning","literature","luck","melancholy","milk","mist","music","noise","oxygen","paper","peace","peanut","pepper","petrol","plastic","pork","power","pressure","rain","recognition","sadness","safety","salt","sand","scenery","shopping","silver","snow","softness","space","speed","steam","sunshine","tea","thunder","time","traffic","trousers","violence","warmth","wine","steel","soccer","hockey","golf","fish","gum","liquid","series","sheep","species","fahrenheit","celcius","kelvin","hertz","everyone","everybody"]},{}],22:[function(a,b,c){"use strict";var d=a("../fns"),e={prove:"im,,ap,disap",serve:",de,ob,re",ress:"exp,p,prog,st,add,d",lect:"ref,se,neg,col,e",sist:"in,con,per,re,as",tain:"ob,con,main,s,re",mble:"rese,gru,asse,stu",ture:"frac,lec,tor,fea",port:"re,sup,ex,im",ate:"rel,oper,indic,cre,h,activ,estim,particip,d,anticip,evalu",use:"ca,,over,ref,acc,am,pa,ho",ive:"l,rece,d,arr,str,surv,thr,rel",are:"prep,c,comp,sh,st,decl,d,sc",ine:"exam,imag,determ,comb,l,decl,underm,def",nce:"annou,da,experie,influe,bou,convi,enha",ain:"tr,rem,expl,dr,compl,g,str",ent:"prev,repres,r,res,rel,inv",age:"dam,mess,man,encour,eng,discour",rge:"su,cha,eme,u,me",ise:"ra,exerc,prom,surpr,pra",ect:"susp,dir,exp,def,rej",ter:"en,mat,cen,ca,al",end:"t,dep,,ext,att",est:"t,sugg,prot,requ,r",ock:"kn,l,sh,bl,unl",nge:"cha,excha,ra,challe,plu",ase:"incre,decre,purch,b,ce",ish:"establ,publ,w,fin,distingu",mit:"per,ad,sub,li",ure:"fig,ens,end,meas",der:"won,consi,mur,wan",ave:"s,sh,w,cr",ire:"requ,des,h,ret",tch:"scra,swi,ma,stre",ack:"att,l,p,cr",ion:"ment,quest,funct,envis",ump:"j,l,p,d",ide:"dec,prov,gu,s",ush:"br,cr,p,r",eat:"def,h,tr,ch",ash:"sm,spl,w,fl",rry:"ca,ma,hu,wo",ear:"app,f,b,disapp",er:"answ,rememb,off,suff,cov,discov,diff,gath,deliv,both,empow,with",le:"fi,sett,hand,sca,whist,enab,smi,ming,ru,sprink,pi",st:"exi,foreca,ho,po,twi,tru,li,adju,boa,contra,boo",it:"vis,ed,depos,sp,awa,inhib,cred,benef,prohib,inhab",nt:"wa,hu,pri,poi,cou,accou,confro,warra,pai",ch:"laun,rea,approa,sear,tou,ar,enri,atta",ss:"discu,gue,ki,pa,proce,cro,glo,dismi",ll:"fi,pu,ki,ca,ro,sme,reca,insta",rn:"tu,lea,conce,retu,bu,ea,wa,gove",ce:"redu,produ,divor,fa,noti,pla,for,repla",te:"contribu,uni,tas,vo,no,constitu,ci",rt:"sta,comfo,exe,depa,asse,reso,conve",ck:"su,pi,che,ki,tri,wre",ct:"intera,restri,predi,attra,depi,condu",ke:"sta,li,bra,overta,smo,disli",se:"collap,suppo,clo,rever,po,sen",nd:"mi,surrou,dema,remi,expa,comma",ve:"achie,invol,remo,lo,belie,mo",rm:"fo,perfo,confi,confo,ha",or:"lab,mirr,fav,monit,hon",ue:"arg,contin,val,iss,purs",ow:"all,foll,sn,fl,borr",ay:"pl,st,betr,displ,portr",ze:"recogni,reali,snee,ga,emphasi",ip:"cl,d,gr,sl,sk",re:"igno,sto,interfe,sco",ng:"spri,ba,belo,cli",ew:"scr,vi,revi,ch",gh:"cou,lau,outwei,wei",ly:"app,supp,re,multip",ge:"jud,acknowled,dod,alle",en:"list,happ,threat,strength",ee:"fors,agr,disagr,guarant",et:"budg,regr,mark,targ",rd:"rega,gua,rewa,affo",am:"dre,j,sl,ro",ry:"va,t,c,bu"},f=["hope","thank","work","stop","control","join","enjoy","fail","aid","ask","talk","add","walk","describe","study","seem","occur","claim","fix","help","design","include","need","keep","assume","accept","do","look","die","seek","attempt","bomb","cook","copy","claw","doubt","drift","envy","fold","flood","focus","lift","link","load","loan","melt","overlap","rub","repair","sail","sleep","trade","trap","travel","tune","undergo","undo","uplift","yawn","plan","reveal","owe","sneak","drop","name","head","spoil","echo","deny","yield","reason","defy","applaud","risk","step","deem","embody","adopt","convey","pop","grab","revel","stem","mark","drag","pour","reckon","assign","rank","destroy","float","appeal","grasp","shout","overcome","relax","excel","plug","proclaim","ruin","abandon","overwhelm","wipe","added","took","goes","avoid","come","set","pay","grow","inspect","instruct","know","take","let","sort","put","take","cut","become","reply","happen","watch","associate","send","archive","cancel","learn","transfer"];b.exports=d.expand_suffixes(f,e)},{"../fns":23}],23:[function(a,b,c){"use strict";c.pluck=function(a,b){return a=a||[],a.map(function(a){return a[b]})},c.toObj=function(a){return a.reduce(function(a,b){return a[b]=!0,a},{})},c.reverseObj=function(a){return Object.keys(a).reduce(function(b,c){return b[a[c]]=c,b},{})},c.flatten=function(a){var b=[];return a.forEach(function(a){b=b.concat(a)}),b},c.endsWith=function(a,b){return a&&b&&-1!==a.indexOf(b,a.length-b.length)?!0:!1},c.startsWith=function(a,b){return a&&a.length&&a.substr(0,1)===b?!0:!1},c.extend=function(a,b){for(var c=Object.keys(b),d=0;d<c.length;d++)a[c[d]]=b[c[d]];return a},c.titlecase=function(a){return a?(a=a.toLowerCase(),a.charAt(0).toUpperCase()+a.slice(1)):""},c.isFunction=function(a){return"[object Function]"===Object.prototype.toString.call(a)},c.expand_suffixes=function(a,b){for(var c=Object.keys(b),d=c.length,e=0;d>e;e++)for(var f=b[c[e]].split(","),g=0;g<f.length;g++)a.push(f[g]+c[e]);return a},c.expand_prefixes=function(a,b){for(var c=Object.keys(b),d=c.length,e=0;d>e;e++)for(var f=b[c[e]].split(","),g=0;g<f.length;g++)a.push(c[e]+f[g]);return a}},{}],24:[function(b,c,d){"use strict";function e(){this.plugin=function(a){a=a||{},g.isFunction(a)&&(a=a.call(this,this)),Object.keys(a).forEach(function(b){Object.keys(a[b]).forEach(function(c){h[b].fn[c]=a[b][c]})})},this.lexicon=function(){return b("./lexicon.js")},this.term=function(a){return new h.Term(a)},this.noun=function(a){return new h.Noun(a)},this.verb=function(a){return new h.Verb(a)},this.adjective=function(a){return new h.Adjective(a)},this.adverb=function(a){return new h.Adverb(a)},this.value=function(a){return new h.Value(a)},this.person=function(a){return new h.Person(a)},this.place=function(a){return new h.Place(a)},this.date=function(a){return new h.Date(a)},this.organization=function(a){return new h.Organization(a)},this.text=function(a,b){return new h.Text(a,b)},this.sentence=function(a,b){return new h.Sentence(a,b)},this.statement=function(a){return new h.Statement(a)},this.question=function(a){return new h.Question(a)}}var f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol?"symbol":typeof a},g=b("./fns.js"),h={Term:b("./term/term.js"),Text:b("./text/text.js"),Sentence:b("./sentence/sentence.js"),Statement:b("./sentence/statement/statement.js"),Question:b("./sentence/question/question.js"),Verb:b("./term/verb/verb.js"),Adjective:b("./term/adjective/adjective.js"),Adverb:b("./term/adverb/adverb.js"),Noun:b("./term/noun/noun.js"),Value:b("./term/noun/value/value.js"),Person:b("./term/noun/person/person.js"),Place:b("./term/noun/place/place.js"),Date:b("./term/noun/date/date.js"),Organization:b("./term/noun/organization/organization.js")},i=new e;("object"===("undefined"==typeof window?"undefined":f(window))||"function"==typeof DedicatedWorkerGlobalScope)&&(self.nlp_compromise=i),"undefined"!=typeof c&&c.exports&&(c.exports=i),"function"==typeof a&&a.amd&&a(i)},{"./fns.js":23,"./lexicon.js":25,"./sentence/question/question.js":54,"./sentence/sentence.js":57,"./sentence/statement/statement.js":60,"./term/adjective/adjective.js":62,"./term/adverb/adverb.js":67,"./term/noun/date/date.js":72,"./term/noun/noun.js":78,"./term/noun/organization/organization.js":80,"./term/noun/person/person.js":84,"./term/noun/place/place.js":86,"./term/noun/value/value.js":96,"./term/term.js":97,"./term/verb/verb.js":106,"./text/text.js":109}],25:[function(a,b,c){"use strict";for(var d=a("./fns.js"),e=a("./term/verb/conjugate/conjugate.js"),f=a("./term/adjective/to_comparative.js"),g=a("./term/adjective/to_superlative.js"),h=a("./term/adjective/to_adverb.js"),i=a("./sentence/pos/parts_of_speech.js").tag_mapping,j={},k=function(a){for(var b=Object.keys(a),c=b.length,d=0;c>d;d++)j[b[d]]=a[b[d]]},l=function(a,b){for(var c=a.length,d=0;c>d;d++)j[a[d]]=b},m={infinitive:"Infinitive",present:"PresentTense",past:"PastTense",gerund:"Gerund",actor:"Actor",future:"FutureTense",pluperfect:"PluperfectTense",perfect:"PerfectTense",PerfectTense:"PerfectTense",PluperfectTense:"PluperfectTense",FutureTense:"FutureTense",PastTense:"PastTense",PresentTense:"PresentTense"},n=a("./data/irregular_verbs.js"),o=a("./data/verbs.js").concat(Object.keys(n)),p=function(a){var b=e(o[a]);Object.keys(b).forEach(function(a){a&&b[a]&&m[a]&&(j[b[a]]=m[a])})},q=0;q<o.length;q++)p(q);var r=a("./data/organizations.js");l(r.organizations,"Noun"),l(r.suffixes,"Noun");var s=a("./data/places.js");l(s.countries,"Place"),l(s.cities,"Place"),a("./data/adjectives.js").forEach(function(a){j[a]="Adjective",j[f(a)]="Comparative",j[g(a)]="Superlative",j[h(a)]="Adverb"}),Object.keys(a("./data/convertables.js")).forEach(function(a){j[a]="Adjective",j[f(a)]="Comparative",j[g(a)]="Superlative",j[h(a)]="Adverb"}),l(a("./data/abbreviations.js").abbreviations,"Abbreviation"),l(a("./data/demonyms.js"),"Demonym"),l(a("./data/currencies.js"),"Currency"),l(a("./data/honourifics.js"),"Honourific"),l(a("./data/uncountables.js"),"Noun");var t=a("./data/dates.js");l(t.days,"Date"),l(t.months,"Date"),l(t.durations,"Date"),l(t.relative,"Date");var u=a("./data/numbers.js"),v=Object.keys(u).reduce(function(a,b){return a=a.concat(Object.keys(u[b]))},[]);l(v,"Value"),l(Object.keys(a("./data/firstnames.js")),"Person");var w=a("./data/irregular_nouns.js");l(d.pluck(w,0),"Noun"),l(d.pluck(w,1),"Plural"),k(a("./data/misc.js")),k(a("./data/multiples.js")),k(a("./data/phrasal_verbs.js")),Object.keys(a("./data/holidays.js")).forEach(function(a){j[a]="Date"}),l(a("./data/professions.js"),"Actor"),delete j[!1],delete j[!0],delete j[void 0],delete j[null],delete j[""],Object.keys(j).forEach(function(a){j[a]=i[j[a]]||j[a]}),b.exports=j},{"./data/abbreviations.js":1,"./data/adjectives.js":2,"./data/convertables.js":3,"./data/currencies.js":4,"./data/dates.js":5,"./data/demonyms.js":6,"./data/firstnames.js":7,"./data/holidays.js":8,"./data/honourifics.js":9,"./data/irregular_nouns.js":10,"./data/irregular_verbs.js":11,"./data/misc.js":12,"./data/multiples.js":13,"./data/numbers.js":16,"./data/organizations.js":17,"./data/phrasal_verbs.js":18,"./data/places.js":19,"./data/professions.js":20,"./data/uncountables.js":21,"./data/verbs.js":22,"./fns.js":23,"./sentence/pos/parts_of_speech.js":36,"./term/adjective/to_adverb.js":63,"./term/adjective/to_comparative.js":64,"./term/adjective/to_superlative.js":66,"./term/verb/conjugate/conjugate.js":98}],26:[function(a,b,c){"use strict";var d=a("./result"),e=a("./syntax_parse"),f=a("./match_term"),g=function(a,b,c){for(var d=[],e=0,g=0;g<b.length;g++){var h=a[e];if(!h)return null;if(f(h,b[g],c)){if(b[g].signals.trailing&&a[e+1])return null;if(b[g].signals.leading&&0!==e)return null;d.push(a[e]),e+=1}else if(""===h.normal&&(d.push(a[e]),e+=1,h=a[e]),b[g].signals.any_one)d.push(a[e]),e+=1;else if(!b[g].signals.optional)return null}return d},h=function(a,b,c){var f=[];if(b=e(b||""),b[0].signals.leading){var h=g(a,b,c)||[];return h?[new d(h)]:null}for(var i=a.length,j=0;i>j;j++){var k=a.slice(j,a.length),h=g(k,b,c);h&&f.push(new d(h))}return 0===f.length?null:f},i=function(a,b,c,d){var e=h(a,b,d);e&&e.forEach(function(a){a.replace(c,d)})};b.exports={findAll:h,replaceAll:i}},{"./match_term":27,"./result":28,"./syntax_parse":29}],27:[function(a,b,c){"use strict";var d=a("../fns.js"),e=function(a,b){if(!a||!b||!b.signals)return!1;var c=b.signals;if(c.one_of){for(var e=b.term.split("|"),f=0;f<e.length;f++)if(e[f]===a.normal||e[f]===a.text)return!0;return!1}if(c.pos){var g=d.titlecase(b.term);return a.pos[g]?!0:!1}return c.alias?b.term===a.root()?!0:!1:b.term===a.normal||b.term===a.text||b.term===a.expansion?!0:!1};b.exports=e},{"../fns.js":23}],28:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var e=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),f=a("./match.js"),g=function(){function a(b){d(this,a),this.terms=b}return e(a,[{key:"match",value:function(a,b){return f(this.terms,a,b)}},{key:"replace",value:function(a){for(var b=0;b<this.terms.length;b++)if("$"!==a[b])if(a[b].match(/\$1/)){var c=a[1].replace(/\$1/,this.terms[b].text);this.terms[b].changeTo(c)}else this.terms[b].changeTo(a[b]||"");return this}},{key:"text",value:function(){return this.terms.reduce(function(a,b){return b.text&&(a+=" "+b.text),a},"").trim()}},{key:"normal",value:function(){return this.terms.reduce(function(a,b){return b.normal&&(a+=" "+b.normal),a},"").trim()}}]),a}();b.exports=g},{"./match.js":26}],29:[function(a,b,c){"use strict";var d=a("../fns.js"),e=function(a,b){a=a||"",a=a.trim();var c={};return d.startsWith(a,"^")&&(a=a.substr(1,a.length),c.leading=!0),d.endsWith(a,"$")&&(a=a.replace(/\$$/,""),c.trailing=!0),d.endsWith(a,"?")&&(a=a.replace(/\?$/,""),c.optional=!0),d.startsWith(a,"[")&&d.endsWith(a,"]")&&(a=a.replace(/\]$/,""),a=a.replace(/^\[/,""),c.pos=!0),d.startsWith(a,"(")&&d.endsWith(a,")")&&(a=a.replace(/\)$/,""),a=a.replace(/^\(/,""),c.one_of=!0),d.startsWith(a,"~")&&(a=a.replace(/^\~/,""),a=a.replace(/\~$/,""),c.alias=!0),d.startsWith(a,"+")&&(a=a.replace(/^\+/,""),a=a.replace(/\+$/,""),c.extra=!0),"."===a&&(c.any_one=!0),"*"===a&&(c.any_many=!0),{term:a,signals:c,i:b}},f=function(a){return a=a||[],a.map(e)};b.exports=f},{"../fns.js":23}],30:[function(a,b,c){"use strict";var d={will:"ll",would:"d",have:"ve",are:"re",not:"t",is:"s"},e=function(a){for(var b=1;b<a.length;b++)d[a[b].normal]&&(a[b-1].expansion=a[b-1].text,a[b].expansion=a[b].text,"not"===a[b].normal&&(a[b-1].text+="n"),a[b-1].text+="'"+d[a[b].normal],a[b-1].rebuild(),a[b].text="",a[b].rebuild());return a};b.exports=e},{}],31:[function(a,b,c){"use strict";var d=function(a){for(var b=0;b<a.length;b++)a[b].expansion&&(a[b].text=a[b].expansion,a[b].rebuild());return a};b.exports=d},{}],32:[function(a,b,c){"use strict";var d=function(a){for(var b=a.terms,c=0;c<b.length-2;c++)if(b[c].pos.Copula&&b[c+1].pos.Verb&&"by"===b[c+2].normal){if(b[c+1].pos.Gerund)continue;return!0}return!1};b.exports=d},{}],33:[function(a,b,c){"use strict";var d=a("./parts_of_speech"),e=function(a,b,c){var e=d.classMapping[b]||d.Term,f=a.expansion,g=a.whitespace;return a=new e(a.text,b),a.reason=c,a.whitespace=g,a.expansion=f,a};b.exports=e},{"./parts_of_speech":36}],34:[function(a,b,c){"use strict";var d=a("./parts_of_speech"),e=function(a,b,c){if(!a||!b||!c)return!1;for(var d=[{condition:a.pos.Noun&&"&"===b.text&&c.pos.Noun,result:"Person"},{condition:a.pos.Noun&&"N"===b.text&&c.pos.Noun,result:"Person"},{condition:a.pos.Date&&"the"===b.normal&&c.pos.Value,result:"Date"},{condition:a.pos.Value&&b.pos.Preposition&&c.pos.Date,result:"Date"},{condition:a.pos.Date&&b.pos.Preposition&&c.pos.Value,result:"Date"},{condition:a.is_capital()&&"of"===b.normal&&c.is_capital(),result:"Noun"},{condition:a.text.match(/^["']/)&&!b.text.match(/["']/)&&c.text.match(/["']$/),result:"Noun"},{condition:"will"===a.normal&&"have"===b.normal&&b.pos.Verb,result:"FutureTense"},{condition:a.pos.Date&&(c.pos.Date||c.pos.Ordinal)&&(b.pos.Preposition||b.pos.Determiner||b.pos.Conjunction||b.pos.Adjective),result:"Date"}],e=0;e<d.length;e++)if(d[e].condition)return d[e].result;return!1},f=function(a,b){if(!a||!b)return!1;if(a.is_word()===!1||b.is_word()===!1)return!1;for(var c=[{condition:a.pos.Person&&b.pos.Honourific||a.pos.Honourific&&b.pos.Person,result:"Person"},{condition:(a.pos.Value||a.pos.Date)&&("am"===b.normal||"pm"===b.normal),result:"Date"},{condition:a.pos.Honourific&&b.is_capital(),result:"Person"},{condition:a.pos.Person&&b.is_capital(),result:"Person"},{condition:a.pos.Date&&b.pos.Value,result:"Date"},{condition:a.pos.Value&&b.pos.Date,result:"Date"},{condition:("last"===a.normal||"next"===a.normal||"this"===a.normal)&&b.pos.Date,result:"Date"},{condition:a.pos.Noun&&b.pos.Actor,result:"Actor"},{condition:a.pos.Value&&b.pos.Noun&&!a.pos.Ordinal,result:"Value"},{condition:a.is_capital()&&b.pos.Organization||b.is_capital()&&a.pos.Organization,result:"Organization"},{condition:a.text.match(/^["']/)&&b.text.match(/["']$/),result:"Noun"},{condition:"will"===a.normal&&b.pos.Verb,result:"PerfectTense"},{condition:a.normal.match(/^will ha(ve|d)$/)&&b.pos.Verb,result:"PluperfectTense"},{condition:b.normal.match(/(standard|daylight|summer) time/)&&(a.pos.Adjective||a.pos.Place),result:"Date"},{condition:a.pos.Demonym&&b.pos.Currency,result:"Currency"}],d=0;d<c.length;d++)if(c[d].condition)return c[d].result;return!1},g=function(a){for(var b=1;b<a.length;b++){var c=a[b-1],g=a[b],h=a[b+1],i=f(c,g);if(i){var j=d.classMapping[i]||d.Term,k=c.whitespace.trailing+g.whitespace.preceding;a[b]=new j(c.text+k+g.text,i),a[b].reason="lumpedtwo("+a[b].reason+")",a[b].whitespace.preceding=c.whitespace.preceding,a[b].whitespace.trailing=g.whitespace.trailing,a[b-1]=null}else if(h&&(i=e(c,g,h))){var j=d.classMapping[i]||d.Term,l=c.whitespace.trailing+g.whitespace.preceding,m=g.whitespace.trailing+h.whitespace.preceding,n=c.text+l+g.text+m+h.text;a[b-1]=new j(n,i),a[b-1].reason="lumpedThree("+a[b].reason+")",a[b-1].whitespace.preceding=c.whitespace.preceding,a[b-1].whitespace.trailing=h.whitespace.trailing,a[b]=null,a[b+1]=null}else;}return a=a.filter(function(a){return null!==a})};b.exports=g},{"./parts_of_speech":36}],35:[function(a,b,c){"use strict";var d=[["Noun","Abbreviation"],["Abbreviation","Noun"]],e=function(a,b){if(!a||!b)return!1;if(a.has_comma()&&!a.pos.Date)return!1;if(a.pos.Possessive)return!1;if(a.is_word()===!1||b.is_word()===!1)return!1;for(var c=["Expression","Phrasal"],e=0;e<c.length;e++)if(a.pos[c[e]]||b.pos[c[e]])return!1;if(a.expansion||b.expansion)return!1;if(a.tag===b.tag)return!0;for(var e=0;e<d.length;e++){var f=d[e];if(a.pos[f[0]]&&b.pos[f[1]])return!0}return!1},f=function(a){for(var b=[],c=null,d=0;d<a.length;d++){var f=a[d];if(e(c,f)){var g=c.whitespace.trailing+f.whitespace.preceding;b[b.length-1].text+=g+f.text,b[b.length-1].normalize(),b[b.length-1].whitespace.trailing=f.whitespace.trailing,b[b.length-1].whitespace.preceding=c.whitespace.preceding}else b.push(f);c=f}return b};b.exports=f},{}],36:[function(a,b,c){"use strict";var d=a("../../term/term.js"),e=a("../../term/verb/verb.js"),f=a("../../term/adverb/adverb.js"),g=a("../../term/adjective/adjective.js"),h=a("../../term/noun/noun.js"),i=a("../../term/noun/person/person.js"),j=a("../../term/noun/place/place.js"),k=a("../../term/noun/organization/organization.js"),l=a("../../term/noun/value/value.js"),m=a("../../term/noun/date/date.js"),n={NNA:"Acronym",NNS:"Plural",NN:"Noun",NNO:"Possessive",CD:"Value",AC:"Actor",DA:"Date",CO:"Condition",PN:"Person",PP:"Possessive",PRP:"Pronoun",EX:"Expression",DT:"Determiner",CC:"Conjunction",IN:"Preposition",VB:"Verb",VBD:"PastTense",VBF:"FutureTense",VBP:"Infinitive",VBZ:"PresentTense",VBG:"Gerund",VBN:"Verb",CP:"Copula",MD:"Modal",JJ:"Adjective",JJR:"Comparative",JJS:"Superlative",RB:"Adverb"},o={Noun:h,Honourific:h,Acronym:h,Plural:h,Pronoun:h,Actor:h,Abbreviation:h,Currency:h,Verb:e,PresentTense:e,FutureTense:e,PastTense:e,Infinitive:e,PerfectTense:e,PluperfectTense:e,Gerund:e,Copula:e,Modal:e,Comparative:g,Superlative:g,Adjective:g,Demonym:g,Determiner:d,Preposition:d,Expression:d,Conjunction:d,Possessive:d,Adverb:f,Value:l,Place:j,Person:i,Organization:k,Date:m};b.exports={tag_mapping:n,classMapping:o,Term:d,Date:m,Value:l,Verb:e,Person:i,Place:j,Organization:k,Adjective:g,Adverb:f,Noun:h}},{"../../term/adjective/adjective.js":62,"../../term/adverb/adverb.js":67,"../../term/noun/date/date.js":72,"../../term/noun/noun.js":78,"../../term/noun/organization/organization.js":80,"../../term/noun/person/person.js":84,"../../term/noun/place/place.js":86,"../../term/noun/value/value.js":96,"../../term/term.js":97,"../../term/verb/verb.js":106}],37:[function(a,b,c){"use strict";var d=a("../assign"),e={may:!0,april:!0,march:!0,june:!0,jan:!0},f=function(a){if(a.pos.Value){var b=a.number||0;if(b>=1900&&2030>b)return!0}return!1},g={between:!0,before:!0,after:!0,during:!0,from:!0,to:!0,"in":!0,of:!0,the:!0,next:!0},h=function(a){for(var b=0;b<a.length;b++){var c=a[b];if(e[c.normal]||f(c)){if(a[b+1]&&(a[b+1].pos.Value||a[b+1].pos.Date)){a[b]=d(c,"Date","date_signal");continue}if(a[b-1]&&(a[b-1].pos.Value||a[b-1].pos.Date)){a[b]=d(c,"Date","date_signal");continue}if(a[b+1]&&g[a[b+1].normal]){a[b]=d(c,"Date","date_signal");continue}if(a[b-1]&&g[a[b-1].normal]){a[b]=d(c,"Date","date_signal");continue}}}return a};b.exports=h},{"../assign":33}],38:[function(a,b,c){"use strict";var d=a("../assign"),e=function(a){a[0]&&a[0].is_acronym()&&(a[0]=d(a[0],"Noun","acronym"));for(var b=1;b<a.length;b++)(a[b].is_capital()||a[b].is_acronym())&&(a[b]=d(a[b],"Noun","capital_signal"));return a};b.exports=e},{"../assign":33}],39:[function(a,b,c){"use strict";var d={"if":!0,"in the event":!0,"in order to":!0,"so long as":!0,provided:!0,"save that":!0,after:!0,once:!0,"subject to":!0,without:!0,effective:!0,upon:!0,during:!0,unless:!0,according:!0,notwithstanding:!0,when:!0,before:!0},e=function(a,b){for(var c=0;5>c;c++)if(a[c+b]&&a[c+b].pos.Verb)return!0;return!1},f=function(a,b){var c=a.length-1;c>b+7&&(c=b+7);for(var d=b;c>d;d++)if(a[d].has_comma()&&e(a,d))return d;return b>5&&a.length-b<5?a.length:null},g=function(a,b,c){for(var d=b;c>=d&&a[d];d++)a[d].pos.Condition=!0},h=function(a){if(a[0]&&d[a[0].normal]){var b=f(a,0);b&&g(a,0,b)}for(var c=3;c<a.length;c++)if(d[a[c].normal]&&a[c-1].has_comma()){var b=f(a,c);b&&(g(a,c,b),c+=b)}return a};b.exports=h},{}],40:[function(a,b,c){"use strict";var d=a("../../parts_of_speech"),e={ll:"will",d:"would",ve:"have",re:"are",m:"am"},f={dunno:["do not","know"],wanna:["want","to"],gonna:["going","to"],im:["i","am"],alot:["a","lot"],dont:["do not"],"don't":["do not"],dun:["do not"],"won't":["will not"],wont:["will not"],"can't":["can not"],cannot:["can not"],aint:["is not"],"ain't":["is not"],"shan't":["should not"],"where'd":["where","did"],"when'd":["when","did"],"how'd":["how","did"],
"what'd":["what","did"],brb:["be","right","back"],"let's":["let","us"]},g=function(a,b){return a[b].expansion=a[b].text.replace(/n'.*/,""),a[b].expansion+=" not",a},h=function(a,b,c){a[b].expansion=a[b].text.replace(/'.*/,"");var e=new d.Verb("");return e.expansion=c,e.whitespace.trailing=a[b].whitespace.trailing,a[b].whitespace.trailing=" ",a.splice(b+1,0,e),a},i=function(a,b,c){a[b].expansion=c[0];for(var e=1;e<c.length;e++){var f=new d.Term("");f.whitespace.trailing=a[b].whitespace.trailing,a[b].whitespace.trailing=" ",f.expansion=c[e],a.splice(b+e,0,f)}return a},j=function(a,b){a[b].expansion=a[b].text.replace(/'s$/,"");var c=new d.Verb("");return c.whitespace.trailing=a[b].whitespace.trailing,a[b].whitespace.trailing=" ",c.expansion="is",a.splice(b+1,0,c),a},k=function(a){for(var b=0;b<a.length;b++)if(f[a[b].normal])a=i(a,b,f[a[b].normal]);else if(a[b].has_abbreviation()){var c=a[b].normal.split(/'/),d=c[0],k=c[1];if(e[k]){a=h(a,b,e[k]);continue}if("t"===k&&d.match(/n$/)){a=g(a,b);continue}if("s"===k&&a[b].pos.Possessive)continue;if("s"===k){a=j(a,b);continue}}return a};b.exports=k},{"../../parts_of_speech":36}],41:[function(a,b,c){"use strict";var d=a("../assign"),e=a("./rules/grammar_rules"),f=a("../../../fns"),g=function(a,b){if(a.length!==b.length)return!1;for(var c=0;c<b.length;c++)if(f.startsWith(b[c],"[")&&f.endsWith(b[c],"]")){var d=b[c].match(/^\[(.*?)\]$/)[1];if(!a[c].pos[d])return!1}else if(a[c].normal!==b[c])return!1;return!0},h=function(a){for(var b=0;b<a.terms.length;b++)for(var c=0;c<e.length;c++){var f=e[c],h=a.terms.slice(b,b+f.before.length);if(g(h,f.before)){for(var i=0;i<f.before.length;i++)if(f.after[i]){var j=f.after[i].match(/^\[(.*?)\]$/)[1];a.terms[b+i]=d(a.terms[b+i],j,"grammar_rule  ("+f.before.join(",")+")")}break}}return a.terms};b.exports=h},{"../../../fns":23,"../assign":33,"./rules/grammar_rules":49}],42:[function(a,b,c){"use strict";var d=a("../assign"),e=function(a){for(var b={ok:!0,so:!0,please:!0,alright:!0,well:!0,now:!0},c=0;c<a.length&&!(c>3)&&b[a[c].normal];c++)a[c]=d(a[c],"Expression","interjection_fixes");return a};b.exports=e},{"../assign":33}],43:[function(a,b,c){"use strict";var d=a("../../../lexicon.js"),e=a("../assign"),f=function(a,b){var c=b.lexicon||d;return a.map(function(a){var b=a.normal;if(a.has_abbreviation()){var d=b.split(/'/);"s"===d[1]&&(b=d[0])}if(void 0!==c[b])return e(a,c[b],"lexicon_pass");if(void 0!==c[a.expansion])return e(a,c[a.expansion],"lexicon_expansion");if(b.match(/^(over|under|out|-|un|re|en).{3}/)){var f=b.replace(/^(over|under|out|.*?-|un|re|en)/,"");return e(a,c[f],"lexicon_prefix")}if(a.has_abbreviation()){var f=b.replace(/'(ll|re|ve|re|d|m)/,"");return e(a,c[f],"lexicon_prefix")}if(b.match(/-/)){var g=b.split("-");if(c[g[0]])return e(a,c[g[0]],"lexicon_dash");if(c[g[1]])return e(a,c[g[1]],"lexicon_dash")}return a})};b.exports=f},{"../../../lexicon.js":25,"../assign":33}],44:[function(a,b,c){"use strict";var d=a("../../../lexicon.js"),e=a("../assign"),f=function(a,b){return a&&b&&d[a.normal+" "+b.normal]?!0:!1},g=function(a){for(var b=[],c=null,g=0;g<a.length;g++){var h=a[g];if(f(c,h)){var i=b[b.length-1],j=h.whitespace.preceding+i.whitespace.trailing;i.text+=j+h.text,i.rebuild(),i.whitespace.trailing=h.whitespace.trailing;var k=d[i.normal];b[b.length-1]=e(i,k,"multiples_pass_lexicon"),b[b.length-1].whitespace=i.whitespace}else b.push(h);c=h}return b};b.exports=g},{"../../../lexicon.js":25,"../assign":33}],45:[function(a,b,c){"use strict";var d=a("../../../data/phrasal_verbs"),e=function(a){for(var b=0;b<a.length-1&&(a[b]&&a[b+1]);b++)if(a[b].pos.Verb&&d[a[b].normal+a[b+1].normal]){if(a[b].pos.Copula)continue;a[b].pos.Phrasal=!0,a[b].text=a[b].text+" "+a[b+1].text,a[b].reason="phrasal("+a[b].reason+")",a[b+1]=null,a[b].rebuild()}return a=a.filter(function(a){return null!==a})};b.exports=e},{"../../../data/phrasal_verbs":18}],46:[function(a,b,c){"use strict";var d=a("../assign"),e={"it's":!0,"that's":!0},f=function(a,b){if(e[a[b].normal])return!1;if(a[b].normal.match(/[a-z]s'$/))return!0;if(!a[b].normal.match(/[a-z]'s$/))return!1;if(a[b].pos.Pronoun)return!1;var c=a[b+1];return c?c.pos.Noun?!0:c.pos.Adjective&&a[b+2]&&a[b+2].pos.Noun?!0:c.pos.Adjective||c.pos.Verb||c.pos.Adverb?!1:!1:!0},g=function(a){for(var b=0;b<a.length;b++)f(a,b)&&(a[b].pos.Noun||(a[b]=d(a[b],"Noun","possessive_pass")),a[b].pos.Possessive=!0);return a};b.exports=g},{"../assign":33}],47:[function(a,b,c){"use strict";var d=function(a){return a.match(/^["\u201C]./)},e=function(a){return a.match(/.["\u201D]$/)},f=function(a,b){for(var c=b;c<a.length;c++)if(e(a[c].text))return c;return null},g=function(a,b,c){for(var d=b;c>=d&&a[d];d++)a[d].pos.Quotation=!0},h=function(a){for(var b=0;b<a.length;b++)if(d(a[b].text)){var c=f(a,[b]);if(null!==c)return g(a,b,c),a}return a};b.exports=h},{}],48:[function(a,b,c){"use strict";var d=a("./rules/word_rules"),e=a("../assign"),f=[{reg:new RegExp("^[12]?[0-9]:[0-9]{2}( am| pm)?$","i"),pos:"Date"},{reg:new RegExp("^[0-9]{1,4}[-/][0-9]{1,2}[-/][0-9]{1,4}$","i"),pos:"Date"},{reg:new RegExp("^[0-9]{1,2}:[0-9]{2}(:[0-9]{2})?","i"),pos:"Date"}],g=function(a){return a.forEach(function(b,c){if("?"===a[c].tag){var g=a[c].text,h=a[c].normal;if(a[c].has_abbreviation()){var i=a[c].normal.split(/'/);"s"===i[1]&&(h=i[0])}for(var j=0;j<f.length;j++)if(g.match(f[j].reg))return void(a[c]=e(a[c],f[j].pos,"rules_pass_"+j));for(var j=0;j<d.length;j++)if(h.match(d[j].reg))return void(a[c]=e(a[c],d[j].pos,"rules_pass_"+j))}}),a};b.exports=g},{"../assign":33,"./rules/word_rules":50}],49:[function(a,b,c){"use strict";b.exports=[{before:["[Determiner]","[?]"],after:["[Determiner]","[Noun]"]},{before:["the","[Verb]"],after:[null,"[Noun]"]},{before:["[Determiner]","[Adjective]","[Verb]"],after:["[Noun]","[Noun]","[Noun]"]},{before:["[Determiner]","[Adverb]","[Adjective]","[?]"],after:["[Determiner]","[Adverb]","[Adjective]","[Noun]"]},{before:["[?]","[Determiner]","[Noun]"],after:["[Verb]","[Determiner]","[Noun]"]},{before:["[Person]","the","[Noun]"],after:["[Person]",null,"[Noun]"]},{before:["[Noun]","the","[Noun]"],after:["[Verb]",null,"[Noun]"]},{before:["[Possessive]","[?]"],after:["[Possessive]","[Noun]"]},{before:["[?]","[Possessive]","[Noun]"],after:["[Verb]","[Possessive]","[Noun]"]},{before:["[Copula]","[?]"],after:["[Copula]","[Adjective]"]},{before:["[Copula]","[Adverb]","[?]"],after:["[Copula]","[Adverb]","[Adjective]"]},{before:["[?]","[Preposition]"],after:["[Verb]","[Preposition]"]},{before:["[Adverb]","[Conjunction]","[Adverb]"],after:["[Adverb]","[Adverb]","[Adverb]"]},{before:["[Verb]","not"],after:["[Verb]","[Verb]"]},{before:["[Adjective]","[Conjunction]","[Adjective]"],after:["[Adjective]","[Adjective]","[Adjective]"]},{before:["[?]","[Conjunction]","[Verb]"],after:["[Verb]","[Conjunction]","[Verb]"]},{before:["[Verb]","[Conjunction]","[?]"],after:["[Verb]","[Conjunction]","[Verb]"]},{before:["[Noun]","[Adverb]","[Noun]"],after:["[Noun]","[Adverb]","[Verb]"]},{before:["[?]","[Pronoun]"],after:["[Verb]","[Pronoun]"]},{before:["[Modal]","[?]"],after:["[Modal]","[Verb]"]},{before:["[Modal]","[Adverb]","[?]"],after:["[Modal]","[Adverb]","[Verb]"]},{before:["[Adverb]","[Value]"],after:["[Adverb]","[Verb]"]}]},{}],50:[function(a,b,c){"use strict";var d=a("../../parts_of_speech.js").tag_mapping;b.exports=[["^[0-9]+ ?(am|pm)$","DA"],["^[0-9]+(st|nd|rd)?$","CD"],["^[a-z]et$","VB"],["cede$","VB"],[".[cts]hy$","JJ"],[".[st]ty$","JJ"],[".[lnr]ize$","VB"],[".[gk]y$","JJ"],[".fies$","VB"],[".some$","JJ"],[".[nrtumcd]al$","JJ"],[".que$","JJ"],[".[tnl]ary$","JJ"],[".[di]est$","JJS"],["^(un|de|re)\\-[a-z]..","VB"],[".lar$","JJ"],["[bszmp]{2}y","JJ"],[".zes$","VB"],[".[icldtgrv]ent$","JJ"],[".[rln]ates$","VBZ"],[".[oe]ry$","JJ"],["[rdntkdhs]ly$","RB"],[".[lsrnpb]ian$","JJ"],[".[^aeiou]ial$","JJ"],[".[^aeiou]eal$","JJ"],[".[vrl]id$","JJ"],[".[ilk]er$","JJR"],[".ike$","JJ"],[".ends?$","VB"],[".wards$","RB"],[".rmy$","JJ"],[".rol$","NN"],[".tors$","NN"],[".azy$","JJ"],[".where$","RB"],[".ify$","VB"],[".bound$","JJ"],[".[^z]ens$","VB"],[".oid$","JJ"],[".vice$","NN"],[".rough$","JJ"],[".mum$","JJ"],[".teen(th)?$","CD"],[".oses$","VB"],[".ishes$","VB"],[".ects$","VB"],[".tieth$","CD"],[".ices$","NN"],[".bles$","VB"],[".pose$","VB"],[".ions$","NN"],[".ean$","JJ"],[".[ia]sed$","JJ"],[".tized$","VB"],[".llen$","JJ"],[".fore$","RB"],[".ances$","NN"],[".gate$","VB"],[".nes$","VB"],[".less$","RB"],[".ried$","JJ"],[".gone$","JJ"],[".made$","JJ"],[".[pdltrkvyns]ing$","JJ"],[".tions$","NN"],[".tures$","NN"],[".ous$","JJ"],[".ports$","NN"],[". so$","RB"],[".ints$","NN"],[".[gt]led$","JJ"],[".lked$","VB"],[".fully$","RB"],[".*ould$","MD"],["^-?[0-9]+(.[0-9]+)?$","CD"],["[a-z]*\\-[a-z]*\\-","JJ"],["[a-z]'s$","NNO"],[".'n$","VB"],[".'re$","CP"],[".'ll$","MD"],[".'t$","VB"],[".tches$","VB"],["^https?:?//[a-z0-9]","NN"],["^www.[a-z0-9]","NN"],[".ize$","VB"],[".[^aeiou]ise$","VB"],[".[aeiou]te$","VB"],[".ea$","NN"],["[aeiou][pns]er$","NN"],[".ia$","NN"],[".sis$","NN"],[".[aeiou]na$","NN"],[".[^aeiou]ity$","NN"],[".[^aeiou]ium$","NN"],[".[^aeiou][ei]al$","JJ"],[".ffy$","JJ"],[".[^aeiou]ic$","JJ"],[".(gg|bb|zz)ly$","JJ"],[".[aeiou]my$","JJ"],[".[aeiou]ble$","JJ"],[".[^aeiou]ful$","JJ"],[".[^aeiou]ish$","JJ"],[".[^aeiou]ica$","NN"],["[aeiou][^aeiou]is$","NN"],["[^aeiou]ard$","NN"],["[^aeiou]ism$","NN"],[".[^aeiou]ity$","NN"],[".[^aeiou]ium$","NN"],[".[lstrn]us$","NN"],["..ic$","JJ"],["[aeiou][^aeiou]id$","JJ"],[".[^aeiou]ish$","JJ"],[".[^aeiou]ive$","JJ"],["[ea]{2}zy$","JJ"],["[^aeiou]ician$","AC"],[".keeper$","AC"],[".logist$","AC"],["..ier$","AC"],[".[^aeiou][ao]pher$","AC"],[".tive$","AC"],["[aeiou].*ist$","JJ"],["[^i]fer$","VB"],["^um+$","EX"],["^([hyj]a)+$","EX"],["^(k)+$","EX"],["^(yo)+$","EX"],["^yes+$","EX"],["^no+$","EX"],["^lol[sz]$","EX"],["^woo+[pt]?$","EX"],["^ug?h+$","EX"],["^uh[ -]?oh$","EX"]].map(function(a){return{reg:new RegExp(a[0],"i"),pos:d[a[1]]}})},{"../../parts_of_speech.js":36}],51:[function(a,b,c){"use strict";var d=a("./lumper"),e=a("./fancy_lumping"),f=a("./parts_of_speech"),g=a("./assign"),h=a("./passes/grammar_pass"),i=a("./passes/phrasal_verbs"),j=a("./passes/interjection_fixes"),k=a("./passes/lexicon_pass"),l=a("./passes/capital_signals"),m=a("./passes/conditional_pass"),n=a("./passes/ambiguous_dates"),o=a("./passes/multiples_pass"),p=a("./passes/regex_pass"),q=a("./passes/quotation_pass"),r=a("./passes/possessive_pass"),s=a("./passes/contractions/interpret"),t=function(a){for(var b=0;b<a.length;b++)"?"===a[b].tag&&a[b].normal.match(/[a-z]/)&&(a[b]=g(a[b],"Noun","fallback"));return a},u=function(a){for(var b=0;b<a.length;b++){var c=a[b];c instanceof f.Noun&&(c.is_person()?a[b]=g(c,"Person","is_person"):c.is_place()?a[b]=g(c,"Place","is_place"):c.is_value()?a[b]=g(c,"Value","is_value"):c.is_date()?a[b]=g(c,"Date","is_date"):c.is_organization()&&(a[b]=g(c,"Organization","is_organization")))}return a},v=function(a,b){a.terms=l(a.terms),a.terms=k(a.terms,b),a.terms=o(a.terms),a.terms=p(a.terms),a.terms=j(a.terms);for(var c=0;2>c;c++)a.terms=h(a),a.terms=u(a.terms),a.terms=n(a.terms),a.terms=d(a.terms),a.terms=t(a.terms),a.terms=i(a.terms),a.terms=e(a.terms),a.terms=r(a.terms);return a.terms=m(a.terms),a.terms=q(a.terms),a.terms=s(a.terms),a.terms};b.exports=v},{"./assign":33,"./fancy_lumping":34,"./lumper":35,"./parts_of_speech":36,"./passes/ambiguous_dates":37,"./passes/capital_signals":38,"./passes/conditional_pass":39,"./passes/contractions/interpret":40,"./passes/grammar_pass":41,"./passes/interjection_fixes":42,"./passes/lexicon_pass":43,"./passes/multiples_pass":44,"./passes/phrasal_verbs":45,"./passes/possessive_pass":46,"./passes/quotation_pass":47,"./passes/regex_pass":48}],52:[function(a,b,c){"use strict";var d={who:"who",whose:"who",whom:"who","which person":"who",where:"where",when:"when",why:"why","how come":"why"},e=function(a,b){var c=a.terms[b],e=a.terms[b+1];if(e){var f=c.normal+" "+e.normal;if(d[f])return d[f]}return d[c.normal]?d[c.normal]:d[c.expansion]?d[c.expansion]:!1};b.exports=e},{}],53:[function(a,b,c){"use strict";var d={which:"which",what:"what"},e={time:"when",day:"when",year:"when",person:"who",amount:"number",number:"number"},f=function(a,b){var c=a.terms[b],f=a.terms[b+1],g=d[c.normal]||d[c.expanded];return f&&g?f.pos.Copula?c.normal:f.pos.Actor?"who":e[f.normal]?e[f.normal]:g:null};b.exports=f},{}],54:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function f(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var g=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),h=a("../sentence.js"),i=a("./question_form"),j=function(a){function b(a,c){return d(this,b),e(this,Object.getPrototypeOf(b).call(this,a,c))}return f(b,a),g(b,[{key:"form",value:function(){return i(this)}}]),b}(h);j.fn=j.prototype,b.exports=j},{"../sentence.js":57,"./question_form":55}],55:[function(a,b,c){"use strict";var d=a("./yesNo.js"),e=a("./easyForm.js"),f=a("./hardForm.js"),g=function(a){for(var b=0;b<a.terms.length;b++){var c=e(a,b);if(c)return c;if(c=f(a,b))return c;if(d(a,b))return"yesNo"}return null};b.exports=g},{"./easyForm.js":52,"./hardForm.js":53,"./yesNo.js":56}],56:[function(a,b,c){"use strict";var d={is:!0,are:!0,was:!0,will:!0,"do":!0,did:!0},e=function(a,b){var c=a.terms[b],e=a.terms[b-1],f=a.terms[b+1];if(d[c.normal]||d[c.expansion]){if(!e)return!0;if(!e)return!1;if(e.pos.Pronoun||e.pos.Person)return!1;if(f.pos.Pronoun||f.pos.Person)return!0}return!1};b.exports=e},{}],57:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var e=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),f=a("../term/term"),g=a("./pos/tagger"),h=a("./passive_voice"),i={contract:a("./contractions/contract"),expand:a("./contractions/expand")},j=a("./tense"),k=a("./spot"),l=a("../match/match"),m=function(){},n=function(){function a(b,c){d(this,a),this.str="","string"==typeof b?this.str=b:"number"==typeof b&&(this.str=""+b),c=c||{};var e=this,h=this.str.split(/( +)/);this.terms=[],""===h[0]&&h.shift();for(var j=0;j<h.length;j++)if(h[j]&&h[j].match(/\S/i)){var k={preceding:h[j-1],trailing:h[j+1]};h[j-1]=null,h[j+1]=null,this.terms.push(new f(h[j],null,k))}this.terms=g(this,c),this.contractions={expand:function(){return e.terms=i.expand(e.terms),e},contract:function(){return e.terms=i.contract(e.terms),e}}}return e(a,[{key:"addBefore",value:function(a,b){var c=new f(b);this.terms.splice(a,0,c)}},{key:"addAfter",value:function(a,b){var c=new f(b);this.terms.splice(a+1,0,c)}},{key:"match",value:function(a,b){var c=m(a);return l.findAll(this.terms,c,b)}},{key:"replace",value:function(a,b,c){var d=m(a);return b=m(b),l.replaceAll(this.terms,d,b,c),this}},{key:"terminator",value:function(){var a=[".","?","!"],b=this.str.slice(-1)||"";return-1!==a.indexOf(b)?b:"."}},{key:"tag",value:function(){return this.terms=g(this),this.terms}},{key:"sentence_type",value:function(){var a=this.terminator(),b={"?":"interrogative","!":"exclamative",".":"declarative"};return b[a]||"declarative"}},{key:"is_passive",value:function(){return h(this)}},{key:"negate",value:function(){return this}},{key:"text",value:function(){return this.terms.reduce(function(a,b){return b.text&&(a+=(b.whitespace.preceding||"")+b.text+(b.whitespace.trailing||"")),a},"")}},{key:"normal",value:function(){return this.terms.reduce(function(a,b){return b.normal&&(a+=" "+b.normal),a},"").trim()}},{key:"root",value:function(){return this.terms.reduce(function(a,b){return a+=" "+b.root()},"").trim()}},{key:"tags",value:function(){return this.terms.map(function(a){return a.tag||"?"})}},{key:"people",value:function(){return this.terms.filter(function(a){return a.pos.Person})}},{key:"places",value:function(){return this.terms.filter(function(a){return a.pos.Place})}},{key:"dates",value:function(){return this.terms.filter(function(a){return a.pos.Date})}},{key:"organizations",value:function(){return this.terms.filter(function(a){return a.pos.Organization})}},{key:"values",value:function(){return this.terms.filter(function(a){return a.pos.Value})}},{key:"nouns",value:function(){return this.terms.filter(function(a){return a.pos.Noun})}},{key:"adjectives",value:function(){return this.terms.filter(function(a){return a.pos.Adjective})}},{key:"verbs",value:function(){return this.terms.filter(function(a){return a.pos.Verb})}},{key:"adverbs",value:function(){return this.terms.filter(function(a){return a.pos.Adverb})}},{key:"to_past",value:function(){return j(this,"past"),this}},{key:"to_present",value:function(){return j(this,"present"),this}},{key:"to_future",value:function(){return j(this,"future"),this}},{key:"strip_conditions",value:function(){var a=this;return this.terms=this.terms.filter(function(b,c){return c>0&&b.pos.Condition&&!a.terms[c-1].pos.Condition&&(a.terms[c-1].text=a.terms[c-1].text.replace(/,$/,""),a.terms[c-1].whitespace.trailing="",a.terms[c-1].rebuild()),!b.pos.Condition}),this}},{key:"topics",value:function(){return k(this)}}]),a}();m=function(a){var b=new n(a).terms;return b=b.map(function(a){return a.text}),b=b.filter(function(a){return""!==a})},n.fn=n.prototype,b.exports=n},{"../match/match":26,"../term/term":97,"./contractions/contract":30,"./contractions/expand":31,"./passive_voice":32,"./pos/tagger":51,"./spot":58,"./tense":61}],58:[function(a,b,c){"use strict";var d={man:!0,woman:!0,girl:!0,boy:!0,guy:!0,father:!0,mother:!0,sister:!0,brother:!0},e=function(a){for(var b={},c=0;c<a.length;c++){var d=a[c].root();d&&(b[d]=b[d]||{count:0,text:d},b[d].count+=1)}var e=Object.keys(b).map(function(a){return b[a]});return e.sort(function(a,b){return a.count>b.count?-1:1})},f=function(a){for(var b=[],c=0;c<a.terms.length;c++){var f=a.terms[c];if(!d[f.normal])if(f.pos.Place||f.pos.Organization)b.push(f);else if(!f.pos.Person||f.pos.Pronoun){if(0!==c&&f.pos.Noun&&f.is_capital()){if(f.pos.Value||f.pos.Date||f.pos.Pronoun)continue;b.push(f)}}else b.push(f)}return e(b)};b.exports=f},{}],59:[function(a,b,c){"use strict";var d=a("../../../fns"),e={everyone:"no one",everybody:"nobody",someone:"no one",somebody:"nobody",always:"never"},f=d.reverseObj(e);f.nobody="somebody";var g=function(a){var b=function(b){var c=a.terms[b];if(c.pos.Condition||c.pos.Quotation)return"continue";if(e[c.normal])return c.changeTo(e[c.normal]),"break";if(f[c.normal])return c.changeTo(f[c.normal]),"break";if(c.pos.Verb){var d=function(){if(a.terms[b-1]){var d=a.terms[b-1].text;return("i"===d||"we"===d||"they"===d||"you"===d)&&c.pos.Infinitive}return!1};return d()?(c.changeTo("don't "+c.text),"break"):(c.negate(),"break")}};a:for(var c=0;c<a.terms.length;c++){var d=b(c);switch(d){case"continue":continue;case"break":break a}}};b.exports=g},{"../../../fns":23}],60:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function f(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var g=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),h=a("../sentence.js"),i=a("./negate/negate.js"),j=function(a){function b(a,c){return d(this,b),e(this,Object.getPrototypeOf(b).call(this,a,c))}return f(b,a),g(b,[{key:"negate",value:function(){return i(this),this}}]),b}(h);j.fn=j.prototype,b.exports=j},{"../sentence.js":57,"./negate/negate.js":59}],61:[function(a,b,c){"use strict";var d=a("./pos/parts_of_speech.js"),e=function(a,b){return"present"===b?a.to_present():"past"===b?a.to_past():"future"===b&&a.to_future(),a},f=function(a,b){return a.terms.forEach(function(a){a instanceof d.Verb&&e(a,b)}),a};b.exports=f},{"./pos/parts_of_speech.js":36}],62:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function f(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var g=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),h=a("../term.js"),i=a("./to_comparative"),j=a("./to_superlative"),k=a("./to_adverb"),l=a("./to_noun"),m=function(a){function b(a,c){d(this,b);var f=e(this,Object.getPrototypeOf(b).call(this,a));return f.tag=c,c&&(f.pos[c]=!0),f.pos.Adjective=!0,f}return f(b,a),g(b,[{key:"to_comparative",value:function(){return i(this.normal)}},{key:"to_superlative",value:function(){return j(this.normal)}},{key:"to_noun",value:function(){return l(this.normal)}},{key:"to_adverb",value:function(){return k(this.normal)}},{key:"conjugate",value:function(){return{comparative:i(this.normal),superlative:j(this.normal),adverb:k(this.normal),noun:l(this.normal)}}}]),b}(h);m.fn=m.prototype,b.exports=m},{"../term.js":97,"./to_adverb":63,"./to_comparative":64,"./to_noun":65,"./to_superlative":66}],63:[function(a,b,c){"use strict";var d=function(a){var b={idle:"idly","public":"publicly",vague:"vaguely",day:"daily",icy:"icily",single:"singly",female:"womanly",male:"manly",simple:"simply",whole:"wholly",special:"especially",straight:"straight",wrong:"wrong",fast:"fast",hard:"hard",late:"late",early:"early",well:"well",good:"well",little:"little","long":"long",low:"low",best:"best",latter:"latter",bad:"badly"},c={foreign:1,black:1,modern:1,next:1,difficult:1,degenerate:1,young:1,awake:1,back:1,blue:1,brown:1,orange:1,complex:1,cool:1,dirty:1,done:1,empty:1,fat:1,fertile:1,frozen:1,gold:1,grey:1,gray:1,green:1,medium:1,parallel:1,outdoor:1,unknown:1,undersized:1,used:1,welcome:1,yellow:1,white:1,fixed:1,mixed:1,"super":1,guilty:1,tiny:1,able:1,unable:1,same:1,adult:1},d=[{reg:/al$/i,repl:"ally"},{reg:/ly$/i,repl:"ly"},{reg:/(.{3})y$/i,repl:"$1ily"},{reg:/que$/i,repl:"quely"},{reg:/ue$/i,repl:"uly"},{reg:/ic$/i,repl:"ically"},{reg:/ble$/i,repl:"bly"},{reg:/l$/i,repl:"ly"}],e=[/airs$/,/ll$/,/ee.$/,/ile$/];if(c[a])return null;if(b[a])return b[a];if(a.length<=3)return null;for(var f=0;f<e.length;f++)if(a.match(e[f]))return null;for(var f=0;f<d.length;f++)if(a.match(d[f].reg))return a.replace(d[f].reg,d[f].repl);return a+"ly"};b.exports=d},{}],64:[function(a,b,c){"use strict";var d=a("../../data/convertables.js"),e=function(a){var b={grey:"greyer",gray:"grayer",green:"greener",yellow:"yellower",red:"redder",good:"better",well:"better",bad:"worse",sad:"sadder"},c={overweight:1,main:1,nearby:1,asleep:1,weekly:1,secret:1,certain:1},e=[{reg:/y$/i,repl:"ier"},{reg:/([aeiou])t$/i,repl:"$1tter"},{reg:/([aeou])de$/i,repl:"$1der"},{reg:/nge$/i,repl:"nger"}],f=[/ght$/,/nge$/,/ough$/,/ain$/,/uel$/,/[au]ll$/,/ow$/,/old$/,/oud$/,/e[ae]p$/],g=[/ary$/,/ous$/];if(c.hasOwnProperty(a))return null;for(var h=0;h<e.length;h++)if(a.match(e[h].reg))return a.replace(e[h].reg,e[h].repl);if(d.hasOwnProperty(a))return a.match(/e$/)?a+"r":a+"er";if(b.hasOwnProperty(a))return b[a];for(var h=0;h<g.length;h++)if(a.match(g[h]))return"more "+a;for(var h=0;h<f.length;h++)if(a.match(f[h]))return a+"er";return"more "+a};b.exports=e},{"../../data/convertables.js":3}],65:[function(a,b,c){"use strict";var d=function(a){var b={clean:"cleanliness",naivety:"naivety"};if(!a)return"";if(b.hasOwnProperty(a))return b[a];if(a.match(" "))return a;if(a.match(/w$/))return a;for(var c=[{reg:/y$/,repl:"iness"},{reg:/le$/,repl:"ility"},{reg:/ial$/,repl:"y"},{reg:/al$/,repl:"ality"},{reg:/ting$/,repl:"ting"},{reg:/ring$/,repl:"ring"},{reg:/bing$/,repl:"bingness"},{reg:/sing$/,repl:"se"},{reg:/ing$/,repl:"ment"},{reg:/ess$/,repl:"essness"},{reg:/ous$/,repl:"ousness"}],d=0;d<c.length;d++)if(a.match(c[d].reg))return a.replace(c[d].reg,c[d].repl);return a.match(/s$/)?a:a+"ness"};b.exports=d},{}],66:[function(a,b,c){"use strict";var d=a("../../data/convertables.js"),e=function(a){for(var b={nice:"nicest",late:"latest",hard:"hardest",inner:"innermost",outer:"outermost",far:"furthest",worse:"worst",bad:"worst",good:"best"},c={overweight:1,ready:1},e=[{reg:/y$/i,repl:"iest"},{reg:/([aeiou])t$/i,repl:"$1ttest"},{reg:/([aeou])de$/i,repl:"$1dest"},{reg:/nge$/i,repl:"ngest"}],f=[/ght$/,/nge$/,/ough$/,/ain$/,/uel$/,/[au]ll$/,/ow$/,/oud$/,/...p$/],g=[/ary$/],h=function(a){return a.match(/e$/)?a+"st":a+"est"},i=0;i<e.length;i++)if(a.match(e[i].reg))return a.replace(e[i].reg,e[i].repl);if(d.hasOwnProperty(a))return h(a);if(c.hasOwnProperty(a))return"most "+a;if(b.hasOwnProperty(a))return b[a];for(var i=0;i<g.length;i++)if(a.match(g[i]))return"most "+a;for(var i=0;i<f.length;i++)if(a.match(f[i]))return h(a);return"most "+a};b.exports=e},{"../../data/convertables.js":3}],67:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function f(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var g=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),h=a("../term.js"),i=a("./to_adjective.js"),j=function(a){function b(a,c){d(this,b);var f=e(this,Object.getPrototypeOf(b).call(this,a));return f.tag=c,f.pos.Adverb=!0,f}return f(b,a),g(b,[{key:"to_adjective",value:function(){return i(this.normal)}}]),b}(h);j.fn=j.prototype,b.exports=j},{"../term.js":97,"./to_adjective.js":68}],68:[function(a,b,c){"use strict";var d=function(a){var b={idly:"idle",sporadically:"sporadic",basically:"basic",grammatically:"grammatical",alphabetically:"alphabetical",economically:"economical",conically:"conical",politically:"political",vertically:"vertical",practically:"practical",theoretically:"theoretical",critically:"critical",fantastically:"fantastic",mystically:"mystical",pornographically:"pornographic",fully:"full",jolly:"jolly",wholly:"whole"},c=[{reg:/bly$/i,repl:"ble"},{reg:/gically$/i,repl:"gical"},{reg:/([rsdh])ically$/i,repl:"$1ical"},{reg:/ically$/i,repl:"ic"},{reg:/uly$/i,repl:"ue"},{reg:/ily$/i,repl:"y"},{reg:/(.{3})ly$/i,repl:"$1"}];if(b.hasOwnProperty(a))return b[a];for(var d=0;d<c.length;d++)if(a.match(c[d].reg))return a.replace(c[d].reg,c[d].repl);return a};b.exports=d},{}],69:[function(a,b,c){"use strict";var d={plz:"please",tmrw:"tomorrow",wat:"what",r:"are",u:"you"},e=function(a){return d[a]?d[a]:null};b.exports=e},{}],70:[function(a,b,c){"use strict";var d=function(a){return a.match(/([A-Z]\.)+[A-Z]?$/)?!0:a.match(/[A-Z]{3}$/)?!0:!1};b.exports=d},{}],71:[function(a,b,c){"use strict";var d=a("../is_acronym.js"),e={hour:"an",heir:"an",heirloom:"an",honest:"an",honour:"an",honor:"an",uber:"an"},f=function(a){if(!a)return null;var b={A:!0,E:!0,F:!0,H:!0,I:!0,L:!0,M:!0,N:!0,O:!0,R:!0,S:!0,X:!0},c=[/^onc?e/i,/^u[bcfhjkqrstn][aeiou]/i,/^eul/i];if(e.hasOwnProperty(a))return e[a];if(d(a)&&b.hasOwnProperty(a.substr(0,1)))return"an";for(var f=0;f<c.length;f++)if(a.match(c[f]))return"a";return a.match(/^[aeiou]/i)?"an":"a"};b.exports=f},{"../is_acronym.js":70}],72:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function f(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var g=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),h=a("../noun.js"),i=a("./parse_date.js"),j=function(a){function b(a,c){d(this,b);var f=e(this,Object.getPrototypeOf(b).call(this,a));return f.tag=c,f.pos.Date=!0,f.data=i(f.text)||{},f}return f(b,a),g(b,[{key:"is_date",value:function(){var a=this.data;return null===a.month||null===a.day||null===a.year?!1:!0}},{key:"date",value:function(){if(this.is_date()===!1)return null;var a=new Date;return this.data.year&&a.setYear(this.data.year),null!==this.data.month&&a.setMonth(this.data.month),null!==this.data.day&&a.setDate(this.data.day),a}}]),b}(h);j.fn=j.prototype,b.exports=j},{"../noun.js":78,"./parse_date.js":75}],73:[function(a,b,c){"use strict";var d=a("../../../data/dates").months.concat(["march","may"]),e="("+d.join("|")+")",f="([0-9]{1,2})",g="'?([12][0-9]{3})",h=[{reg:e+" "+f+" "+g,order:["month","day","year"]},{reg:f+" of "+e+" "+g,order:["day","month","year"]},{reg:f+" of "+e,order:["day","month"]},{reg:e+" "+g,order:["month","year"]},{reg:e+" "+f,order:["month","day"]},{reg:f+" "+e,order:["day","month"]},{reg:""+e,order:["month"]},{reg:""+g,order:["year"]}].map(function(a){return a.reg=new RegExp("\\b"+a.reg+"\\b",""),a});b.exports=h},{"../../../data/dates":5}],74:[function(a,b,c){"use strict";var d=a("../../../data/dates"),e=d.months.concat(d.days),f="(\\b"+e.join("\\b|\\b")+"\\b)";f=new RegExp(f,"i");var g=/1?[0-9]:[0-9]{2}/,h=function(a){if(a.match(f)||a.match(g))return!0;if(a.match(/^[12][0-9]{3}$/)){var b=parseInt(a,10);if(b>1300&&2100>b)return!0}return!1};b.exports=h},{"../../../data/dates":5}],75:[function(a,b,c){"use strict";var d=a("../value/parse/to_number.js"),e=a("./date_rules.js"),f={year:function(a){var b=a.match(/[0-9]+/);return b=parseInt(b,10),!b||b>2900||0>b?null:b>100&&1e3>b?null:a.match(/[0-9] ?bc/i)?b*=-1:(100>b&&b>30&&(b+=1900),b)},month:function(a){var b={january:0,february:1,march:2,april:3,may:4,june:5,july:6,august:7,september:8,october:9,november:10,december:11,jan:0,feb:1,mar:2,apr:3,aug:7,sept:8,oct:9,nov:10,dec:11};return b[a]},day:function(a){var b=d(a)||parseInt(a,10);return 0>b||b>31?null:b}},g=function(a){
a=a.toLowerCase(),a=a.replace(/([0-9]+)(nd|rd|th|st)/i,"$1");var b=a.split(" ").map(function(a){return a.match(/[0-9]/)?a:d(a)||a});return b.join(" ")},h=function(a){a=g(a);for(var b={year:null,month:null,day:null},c=0;c<e.length;c++)if(a.match(e[c].reg)){for(var d=a.match(e[c].reg),h=0;h<e[c].order.length;h++){var i=e[c].order[h];b[i]=f[i](d[h+1])}break}return b};b.exports=h},{"../value/parse/to_number.js":93,"./date_rules.js":73}],76:[function(a,b,c){"use strict";var d=a("../../data/irregular_nouns"),e=[/(^v)ies$/i,/ises$/i,/ives$/i,/(antenn|formul|nebul|vertebr|vit)ae$/i,/(octop|vir|radi|nucle|fung|cact|stimul)i$/i,/(buffal|tomat|tornad)oes$/i,/(analy|ba|diagno|parenthe|progno|synop|the)ses$/i,/(vert|ind|cort)ices$/i,/(matr|append)ices$/i,/(x|ch|ss|sh|s|z|o)es$/i,/men$/i,/news$/i,/.tia$/i,/(^f)ves$/i,/(lr)ves$/i,/(^aeiouy|qu)ies$/i,/(m|l)ice$/i,/(cris|ax|test)es$/i,/(alias|status)es$/i,/ics$/i],f=[/(ax|test)is$/i,/(octop|vir|radi|nucle|fung|cact|stimul)us$/i,/(octop|vir)i$/i,/(rl)f$/i,/(alias|status)$/i,/(bu)s$/i,/(al|ad|at|er|et|ed|ad)o$/i,/(ti)um$/i,/(ti)a$/i,/sis$/i,/(?:(^f)fe|(lr)f)$/i,/hive$/i,/(^aeiouy|qu)y$/i,/(x|ch|ss|sh|z)$/i,/(matr|vert|ind|cort)(ix|ex)$/i,/(m|l)ouse$/i,/(m|l)ice$/i,/(antenn|formul|nebul|vertebr|vit)a$/i,/.sis$/i,/^(?!talis|.*hu)(.*)man$/i],g=function(a){a=(a||"").toLowerCase();var b=a.match(/([a-z]*) (of|in|by|for) [a-z]/);b&&b[1]&&(a=b[1]);for(var c=0;c<d.length;c++){if(d[c][1]===a)return!0;if(d[c][0]===a)return!1}for(var c=0;c<e.length;c++)if(a.match(e[c]))return!0;for(var c=0;c<f.length;c++)if(a.match(f[c]))return!1;return a.match(/s$/)&&!a.match(/ss$/)&&a.length>3?!0:!1};b.exports=g},{"../../data/irregular_nouns":10}],77:[function(a,b,c){"use strict";var d=a("../../data/uncountables.js"),e=d.reduce(function(a,b){return a[b]=!0,a},{}),f=function(a){return e[a]?!0:!1};b.exports=f},{"../../data/uncountables.js":21}],78:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function f(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var g=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),h=a("../term.js"),i=a("./article.js"),j=a("./is_plural.js"),k=a("./place/is_place.js"),l=a("./person/is_person.js"),m=a("./pronoun.js"),n=a("./value/is_value.js"),o=a("./date/is_date.js"),p=a("./organization/is_organization.js"),q=a("./singularize.js"),r=a("./pluralize.js"),s=a("./is_uncountable.js"),t=function(a){function b(a,c){d(this,b);var f=e(this,Object.getPrototypeOf(b).call(this,a));return f.tag=c,f.pos.Noun=!0,c&&(f.pos[c]=!0),f.is_plural()&&(f.pos.Plural=!0),f}return f(b,a),g(b,[{key:"article",value:function(){return this.pos.Person?this.pronoun():this.pos.Organization?"they":i(this.text)}},{key:"root",value:function(){return this.singularize()}},{key:"pronoun",value:function(){return this.is_organization()||this.is_place()||this.is_value()?"it":m(this.normal)}},{key:"is_plural",value:function(){return this.pos.Date||this.pos.Possessive?!1:this.has_abbreviation()?!1:j(this.normal)}},{key:"is_uncountable",value:function(){return s(this.strip_apostrophe())}},{key:"pluralize",value:function(){return r(this.strip_apostrophe())}},{key:"singularize",value:function(){return q(this.strip_apostrophe())}},{key:"is_person",value:function(){return"Date"===this.tag?!1:l(this.strip_apostrophe())}},{key:"is_organization",value:function(){return p(this.strip_apostrophe(),this.text)}},{key:"is_date",value:function(){return o(this.strip_apostrophe())}},{key:"is_value",value:function(){return"Date"===this.tag?!1:n(this.strip_apostrophe())}},{key:"is_place",value:function(){return k(this.strip_apostrophe())}}]),b}(h);t.fn=t.prototype,b.exports=t},{"../term.js":97,"./article.js":71,"./date/is_date.js":74,"./is_plural.js":76,"./is_uncountable.js":77,"./organization/is_organization.js":79,"./person/is_person.js":82,"./place/is_place.js":85,"./pluralize.js":87,"./pronoun.js":88,"./singularize.js":89,"./value/is_value.js":90}],79:[function(a,b,c){"use strict";var d=a("../../../data/abbreviations"),e=a("../../../data/organizations"),f={url:!0,http:!0,wtf:!0,irl:!0,ie:!0,eg:!0,gps:!0,dna:!0,sms:!0},g=d.orgs.reduce(function(a,b){return a[b]=!0,a},{});e.suffixes.forEach(function(a){g[a]=!0});var h=e.organizations.reduce(function(a,b){return a[b]=!0,a},{}),i=function(a,b){if(b=b||"",f[a])return!1;if(h[a])return!0;if(b.length<=5&&null!==b.match(/^[A-Z][A-Z]+$/))return!0;if(b.length>=4&&null!==b.match(/^([A-Z]\.)*$/))return!0;if(a.match(/ & /))return!0;if(a.match(/..s of /))return!0;if(a.match(/[a-z]{3}\.(com|net|org|biz)/))return!0;var c=a.split(" ");if(c.length>1){var d=c[c.length-1];if(g[d])return!0}return!1};b.exports=i},{"../../../data/abbreviations":1,"../../../data/organizations":17}],80:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function f(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var g=a("../noun.js"),h=function(a){function b(a,c){d(this,b);var f=e(this,Object.getPrototypeOf(b).call(this,a));return f.tag=c,f.pos.Organization=!0,f}return f(b,a),b}(g);h.fn=h.prototype,b.exports=h},{"../noun.js":78}],81:[function(a,b,c){"use strict";var d=a("../../../data/firstnames"),e=a("./parse_name.js"),f=function(a){if("he"===a)return"Male";if("she"===a)return"Female";var b=e(a),c=b.firstName;return c?"m"===d[c]?"Male":"f"===d[c]?"Female":a.match(/\b(mr|mister|sr|jr)\b/i)?"Male":a.match(/^(mrs|miss|ms|misses|mme|mlle)\.? /i)?"Female":c.match(/.(i|ee|[a|e]y|a)$/i)?"Female":c.match(/[ou]$/i)?"Male":c.match(/(nn|ll|tt)/i)?"Female":null:null};b.exports=f},{"../../../data/firstnames":7,"./parse_name.js":83}],82:[function(a,b,c){"use strict";var d=a("../../../data/firstnames"),e=a("../../../data/honourifics").reduce(function(a,b){return a[b]=!0,a},{}),f={he:!0,she:!0,i:!0,you:!0},g=function(a){if(f[a]||d[a])return!0;var b=a.split(" ");if(b.length>1){var c=b[0];if(e[c]||d[c])return!0}return!1};b.exports=g},{"../../../data/firstnames":7,"../../../data/honourifics":9}],83:[function(a,b,c){"use strict";var d=a("../../../data/firstnames"),e=a("../../../data/honourifics").reduce(function(a,b){return a[b]=!0,a},{}),f=function(a){var b=a.split(" "),c={honourific:null,firstName:null,middleName:null,lastName:null};if(e[b[0]]&&(c.honourific=b[0],b=b.slice(1,b.length)),e[b[b.length-1]]&&(c.honourific=b[b.length-1],b=b.slice(0,b.length-1)),d[b[0]])c.firstName=b[0],b=b.slice(1,b.length);else{if(1===b.length)return c;c.firstName=b[0],b=b.slice(1,b.length)}return b[b.length-1]&&(c.lastName=b[b.length-1],b=b.slice(0,b.length-1)),c.middleName=b.join(" "),c};b.exports=f},{"../../../data/firstnames":7,"../../../data/honourifics":9}],84:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function f(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var g=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),h=a("../noun.js"),i=a("./gender.js"),j=a("./parse_name.js"),k=function(a){function b(a,c){d(this,b);var f=e(this,Object.getPrototypeOf(b).call(this,a));return f.tag=c,f.pos.Person=!0,f.honourific=null,f.firstName=null,f.middleName=null,f.lastName=null,f.parse(),f.isPronoun()&&(f.pos.Pronoun=!0),f}return f(b,a),g(b,[{key:"isPronoun",value:function(){var a={he:!0,she:!0,i:!0,you:!0};return a[this.normal]}},{key:"root",value:function(){if(this.isPronoun())return this.normal;var a=this.firstName||"";return this.middleName&&(a+=" "+this.middleName),this.lastName&&(a+=" "+this.lastName),a.trim()||this.normal}},{key:"parse",value:function(){var a=j(this.normal);this.honourific=a.honourific,this.firstName=a.firstName,this.middleName=a.middleName,this.lastName=a.lastName}},{key:"gender",value:function(){return i(this.normal)}},{key:"pronoun",value:function(){var a={Male:"he",Female:"she"},b=this.gender();return a[b]||"they"}}]),b}(h);k.fn=k.prototype,b.exports=k},{"../noun.js":78,"./gender.js":81,"./parse_name.js":83}],85:[function(a,b,c){"use strict";var d=a("../../../data/places"),e=a("../../../data/abbreviations"),f=d.countries.reduce(function(a,b){return a[b]=!0,a},{});d.cities.forEach(function(a){f[a]=!0}),d.airports.forEach(function(a){f[a]=!0}),e.places.forEach(function(a){f[a]=!0});var g=["west","east","nort","south","western","eastern","nortern","southern","mount"].reduce(function(a,b){return a[b]=!0,a},{}),h=["city","town","county","village","province","country","state","province","mountain","river","valley","park","avenue","street","road"].reduce(function(a,b){return a[b]=!0,a},{}),i=function(a){var b=a.split(" ");if(b.length>1){if(g[b[0]])return!0;if(h[b[b.length-1]])return!0}for(var c=0;c<b.length;c++)if(f[b[c]])return!0;return!1};b.exports=i},{"../../../data/abbreviations":1,"../../../data/places":19}],86:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function f(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var g=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),h=a("../noun.js"),i=a("../../../data/places.js"),j=a("../../../fns.js"),k=j.toObj(i.countries),l=j.toObj(i.cities),m=function(a){function b(a,c){d(this,b);var f=e(this,Object.getPrototypeOf(b).call(this,a));return f.tag=c,f.pos.Place=!0,f.title=null,f.city=null,f.region=null,f.country=null,f.parse(),f}return f(b,a),g(b,[{key:"root",value:function(){return this.title||this.normal}},{key:"parse",value:function(){var a=this.strip_apostrophe().split(" ");this.title=a[0];for(var b=1;b<a.length;b++){var c=a[b];l[c]?this.city=j.titlecase(c):k[c]?this.country=j.titlecase(c):null!==this.city?this.region=j.titlecase(c):this.title+=" "+c}}}]),b}(h);m.fn=m.prototype,b.exports=m},{"../../../data/places.js":19,"../../../fns.js":23,"../noun.js":78}],87:[function(a,b,c){"use strict";var d=a("./is_uncountable.js"),e=a("../../data/irregular_nouns.js"),f=a("./is_plural.js"),g=a("../../fns.js"),h=[[/(ax|test)is$/i,"$1es"],[/(octop|vir|radi|nucle|fung|cact|stimul)us$/i,"$1i"],[/(octop|vir)i$/i,"$1i"],[/(kn|l|w)ife$/i,"$1ives"],[/^((?:ca|e|ha|(?:our|them|your)?se|she|wo)l|lea|loa|shea|thie)f$/i,"$1ves"],[/^(dwar|handkerchie|hoo|scar|whar)f$/i,"$1ves"],[/(alias|status)$/i,"$1es"],[/(bu)s$/i,"$1ses"],[/(al|ad|at|er|et|ed|ad)o$/i,"$1oes"],[/([ti])um$/i,"$1a"],[/([ti])a$/i,"$1a"],[/sis$/i,"ses"],[/(hive)$/i,"$1s"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/(x|ch|ss|sh|s|z)$/i,"$1es"],[/(matr|vert|ind|cort)(ix|ex)$/i,"$1ices"],[/([m|l])ouse$/i,"$1ice"],[/([m|l])ice$/i,"$1ice"],[/^(ox)$/i,"$1en"],[/^(oxen)$/i,"$1"],[/(quiz)$/i,"$1zes"],[/(antenn|formul|nebul|vertebr|vit)a$/i,"$1ae"],[/(sis)$/i,"ses"],[/^(?!talis|.*hu)(.*)man$/i,"$1men"],[/(.*)/i,"$1s"]].map(function(a){return{reg:a[0],repl:a[1]}}),i=function j(a){var b=a.toLowerCase();if(d(b))return a;if(f(b)===!0)return a;var c=e.filter(function(a){return a[0]===b});if(c[0])return g.titlecase(b)===a?g.titlecase(c[0][1]):c[0][1];if(a.match(/([a-z]*) (of|in|by|for) [a-z]/)){var i=(a.match(/^([a-z]*) (of|in|by|for) [a-z]/)||[])[1];if(i){var k=j(i);return k+a.replace(i,"")}}for(var l=0;l<h.length;l++)if(a.match(h[l].reg))return a.replace(h[l].reg,h[l].repl);return null};b.exports=i},{"../../data/irregular_nouns.js":10,"../../fns.js":23,"./is_plural.js":76,"./is_uncountable.js":77}],88:[function(a,b,c){"use strict";var d=a("./person/is_person.js"),e=a("./is_plural.js"),f=a("./person/gender.js"),g=function(a){if(d(a)){var b=f(a);return"Male"===b?"he":"Female"===b?"she":"they"}return e(a)?"they":"it"};b.exports=g},{"./is_plural.js":76,"./person/gender.js":81,"./person/is_person.js":82}],89:[function(a,b,c){"use strict";var d=a("./is_uncountable.js"),e=a("../../data/irregular_nouns.js"),f=a("./is_plural.js"),g=a("../../fns.js"),h=[[/([^v])ies$/i,"$1y"],[/ises$/i,"isis"],[/(kn|[^o]l|w)ives$/i,"$1ife"],[/^((?:ca|e|ha|(?:our|them|your)?se|she|wo)l|lea|loa|shea|thie)ves$/i,"$1f"],[/^(dwar|handkerchie|hoo|scar|whar)ves$/i,"$1f"],[/(antenn|formul|nebul|vertebr|vit)ae$/i,"$1a"],[/(octop|vir|radi|nucle|fung|cact|stimul)(i)$/i,"$1us"],[/(buffal|tomat|tornad)(oes)$/i,"$1o"],[/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/i,"$1sis"],[/(vert|ind|cort)(ices)$/i,"$1ex"],[/(matr|append)(ices)$/i,"$1ix"],[/(x|ch|ss|sh|s|z|o)es$/i,"$1"],[/men$/i,"man"],[/(n)ews$/i,"$1ews"],[/([ti])a$/i,"$1um"],[/([^aeiouy]|qu)ies$/i,"$1y"],[/(s)eries$/i,"$1eries"],[/(m)ovies$/i,"$1ovie"],[/([m|l])ice$/i,"$1ouse"],[/(cris|ax|test)es$/i,"$1is"],[/(alias|status)es$/i,"$1"],[/(ss)$/i,"$1"],[/(ics)$/i,"$1"],[/s$/i,""]].map(function(a){return{reg:a[0],repl:a[1]}}),i=function j(a){var b=a.toLowerCase();if(d(b))return a;if(f(b)===!1)return a;var c=e.filter(function(a){return a[1]===b});if(c[0])return g.titlecase(b)===a?g.titlecase(c[0][0]):c[0][0];if(a.match(/([a-z]*) (of|in|by|for) [a-z]/)){var i=a.match(/^([a-z]*) (of|in|by|for) [a-z]/);if(i&&i[1]){var k=j(i[1]);return k+a.replace(i[1],"")}}for(var l=0;l<h.length;l++)if(a.match(h[l].reg))return a.replace(h[l].reg,h[l].repl);return a};b.exports=i},{"../../data/irregular_nouns.js":10,"../../fns.js":23,"./is_plural.js":76,"./is_uncountable.js":77}],90:[function(a,b,c){"use strict";var d=a("../../../data/numbers.js"),e=a("../date/is_date"),f=function(a){var b=a.split(" ");if(e(a))return!1;for(var c=0;c<b.length;c++){var f=b[c];if(d.ones[f]||d.teens[f]||d.tens[f]||d.multiples[f]||d.prefixes[f])return!0;if(parseFloat(f))return!0}return!1};b.exports=f},{"../../../data/numbers.js":16,"../date/is_date":74}],91:[function(a,b,c){"use strict";var d=a("../../../../data/numbers.js"),e=a("../../../../fns"),f={};f=e.extend(f,d.ones),f=e.extend(f,d.teens),f=e.extend(f,d.ordinal_ones),f=e.extend(f,d.ordinal_teens);var g=function(a){for(var b="0.",c=0;c<a.length;c++){var d=a[c];if(!f[d])return 0;b+=f[d]}return parseFloat(b)};b.exports=g},{"../../../../data/numbers.js":16,"../../../../fns":23}],92:[function(a,b,c){"use strict";var d=function(a){for(var b=[{reg:/^(minus|negative)[\s\-]/i,mult:-1},{reg:/^(a\s)?half[\s\-](of\s)?/i,mult:.5},{reg:/^(a\s)?quarter[\s\-]/i,mult:.25}],c=0;c<b.length;c++)if(a.match(b[c].reg))return{amount:b[c].mult,str:a.replace(b[c].reg,"")};return{amount:1,str:a}};b.exports=d},{}],93:[function(a,b,c){"use strict";var d=a("../../../../data/numbers.js"),e=a("../../../../fns.js"),f=a("./modifiers.js"),g=a("./decimals.js"),h={},i={},j={},k={};h=e.extend(h,d.ones),h=e.extend(h,d.ordinal_ones),i=e.extend(i,d.teens),i=e.extend(i,d.ordinal_teens),j=e.extend(j,d.tens),j=e.extend(j,d.ordinal_tens),k=e.extend(k,d.multiples),k=e.extend(k,d.ordinal_multiples);var l=function(a){return a=a.replace(/, ?/g,""),a=a.replace(/([a-z])-([a-z])/gi,"$1 $2"),a=a.replace(/[$£€]/,""),a=a.replace(/[\$%\(\)~,]/g,""),a=a.trim()},m=function(a){return Object.keys(a).reduce(function(b,c){return b+=a[c]},0)},n=function(a,b){if(h[a]){if(b.ones||b.teens)return!1}else if(i[a]){if(b.ones||b.teens||b.tens)return!1}else if(j[a]&&(b.ones||b.teens||b.tens))return!1;return!0},o=function(a){if(!a||"number"==typeof a)return a;a=l(a);var b=f(a);a=b.str;for(var c=0,d={},e=0,o=!1,p=a.split(" "),q=0;q<p.length;q++){var r=p[q];if(r&&"and"!==r)if("-"!==r&&"negative"!==r){if(r.startsWith("-")&&(o=!0,r=r.substr(1)),"point"===r)return e+=m(d),e+=g(p.slice(q+1,p.length)),e*=b.amount;if(r.match(/^[0-9,\. ]+$/))e+=parseFloat(r.replace(/[, ]/g,""))||0;else{var s=r.match(/^([0-9,\. ]+)\/([0-9,\. ]+)$/);if(s){var t=parseFloat(s[1].replace(/[, ]/g,"")),u=parseFloat(s[2].replace(/[, ]/g,""));e+=t/u||0}else{if(!n(r,d))return null;if(h[r])d.ones=h[r];else if(i[r])d.teens=i[r];else if(j[r])d.tens=j[r];else if(k[r]){if(k[r]===c)return null;k[r]>c?(c=k[r],e+=m(d),e=(e||1)*k[r]):e+=(m(d)||1)*k[r],d={}}}}}else o=!0}return e+=m(d),e*=b.amount,e*=o?-1:1};b.exports=o},{"../../../../data/numbers.js":16,"../../../../fns.js":23,"./decimals.js":91,"./modifiers.js":92}],94:[function(a,b,c){"use strict";var d=["","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],e=[["ninety",90],["eighty",80],["seventy",70],["sixty",60],["fifty",50],["forty",40],["thirty",30],["twenty",20]],f=[[1e9,"million"],[1e8,"hundred million"],[1e6,"million"],[1e5,"hundred thousand"],[1e3,"thousand"],[100,"hundred"],[1,"one"]],g=function(a){var b=a,c=[];return f.forEach(function(d){if(a>d[0]){var e=Math.floor(b/d[0]);b-=e*d[0],e&&c.push({unit:d[1],count:e})}}),c},h=function(a){for(var b="",c=0;c<e.length;c++)a>=e[c][1]&&(a-=e[c][1],b+=" "+e[c][0]);return d[a]&&(b+=" "+d[a]),b.trim()},i=function(a){var b=!1;0>a&&(b=!0,a=Math.abs(a));for(var c=g(a),d="",e=0;e<c.length;e++){var f=c[e].unit;"one"===f&&(f="",d.length>1&&(d+=" and")),d+=" "+h(c[e].count)+" "+f}return d=d||"zero",d=d.replace(/ +/g," "),d=d.trim(),b&&(d="negative "+d),d};b.exports=i},{}],95:[function(a,b,c){"use strict";var d=a("../../../data/currencies").reduce(function(a,b){return a[b]="currency",a},{}),e={Temperature:{"°c":"Celsius","°f":"Fahrenheit",k:"Kelvin","°re":"Reaumur","°n":"Newton","°ra":"Rankine"},Volume:{"m³":"cubic meter",m3:"cubic meter","dm³":"cubic decimeter",dm3:"cubic decimeter","cm³":"cubic centimeter",cm3:"cubic centimeter",l:"liter",dl:"deciliter",cl:"centiliter",ml:"milliliter","in³":"cubic inch",in3:"cubic inch","ft³":"cubic foot",ft3:"cubic foot","yd³":"cubic yard",yd3:"cubic yard",gal:"gallon",bbl:"petroleum barrel",pt:"pint",qt:"quart",tbl:"tablespoon",tsp:"teaspoon",tbsp:"tablespoon",cp:"cup","fl oz":"fluid ounce"},Distance:{km:"kilometer",m:"meter",dm:"decimeter",cm:"centimeter",mm:"millimeter",mi:"mile","in":"inch",ft:"foot",feet:"foot",yd:"yard"},Weight:{t:"tonne",kg:"kilogram",hg:"hectogram",g:"gram",dg:"decigram",cg:"centigram",mg:"milligram","µg":"microgram",carat:"carat",grain:"grain",oz:"ounce",lb:"pound",ton:"tonne",st:"stone"},Area:{"km²":"square kilometer",km2:"square kilometer","m²":"square meter",m2:"square meter","dm²":"square decimeter",dm2:"square decimeter","cm²":"square centimeter",cm2:"square centimeter","mm²":"square millimeter",mm2:"square millimeter",ha:"hectare",ca:"centiare","mile²":"square mile",mile2:"square mile","in²":"square inch",in2:"square inch","yd²":"square yard",yd2:"square yard","ft²":"square foot",ft2:"square foot",acre:"acre"},Frequency:{hz:"hertz"},Speed:{"km/h":"kilometer per hour",kmph:"kilometer per hour",mps:"meter per second","m/s":"meter per second",mph:"mile per hour","mi/h":"mile per hour",knot:"knot"},Data:{b:"byte",kb:"kilobyte",mb:"megabyte",gb:"gigabyte",tb:"terabyte",pt:"petabyte",eb:"exabyte",zb:"zettabyte",yb:"yottabyte"},Energy:{j:"joule",pa:"pascal",bar:"bar",w:"watt",n:"newton",wb:"weber",t:"tesla",h:"henry",c:"coulomb",v:"volt",f:"farad",s:"siemens",o:"ohm",lx:"lux",lm:"lumen"},Time:{year:"year",week:"week",day:"day",h:"hour",min:"minute",s:"second",ms:"millisecond","µs":"microsecond",nanosecond:"nanosecond",picosecond:"picosecond",femtosecond:"femtosecond",attosecond:"attosecond"},Money:d};b.exports=Object.keys(e).reduce(function(a,b){return Object.keys(e[b]).forEach(function(c){a[c]={name:e[b][c],category:b},a[e[b][c]]={name:e[b][c],category:b}}),a},{})},{"../../../data/currencies":4}],96:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function f(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var g=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),h=a("../noun"),i=a("./parse/to_number"),j=a("./to_text"),k=a("./units"),l=a("../../../data/numbers"),m=a("../../../fns"),n={};n=m.extend(n,l.ordinal_ones),n=m.extend(n,l.ordinal_teens),n=m.extend(n,l.ordinal_tens),n=m.extend(n,l.ordinal_multiples),n=Object.keys(n);var o=function(a){function b(a,c){d(this,b);var f=e(this,Object.getPrototypeOf(b).call(this,a));return f.tag=c,f.pos.Value=!0,f.number=null,f.unit=null,f.unit_name=null,f.measurement=null,f.of_what="",f.is_ordinal()&&(f.pos.Ordinal=!0),f.parse(),f}return f(b,a),g(b,[{key:"is_number",value:function(a){return a.match(/[:@]/)?!1:a.match(/[0-9][^(0-9|\/),\.][0-9]/)?a.match(/((?:[0-9]|\.)+) ((?:[0-9]|\.)+)\/((?:[0-9]|\.)+)/)?!0:!1:!0}},{key:"is_number_word",value:function(a){var b={minus:!0,negative:!0,point:!0,half:!0,quarter:!0};return a.match(/[0-9]/)||b[a]?!0:l.ones[a]||l.teens[a]||l.tens[a]||l.multiples[a]?!0:l.ordinal_ones[a]||l.ordinal_teens[a]||l.ordinal_tens[a]||l.ordinal_multiples[a]?!0:!1}},{key:"is_ordinal",value:function(){if(this.normal.match(/^[0-9]+(rd|st|nd|th)$/))return!0;for(var a=0;a<n.length;a++)if(m.endsWith(this.normal,n[a]))return!0;return!1}},{key:"to_ordinal",value:function(){var a=this.number;return a||0===a?a>=10&&20>=a?""+a+"th":(a=""+a,a.match(/[0-9]$/)?m.endsWith(a,"1")?a+"st":m.endsWith(a,"2")?a+"nd":m.endsWith(a,"3")?a+"rd":a+"th":a):""}},{key:"root",value:function(){var a=this.number;return this.unit&&(a+=" "+this.unit),a}},{key:"is_unit",value:function(){if(k[this.unit])return!0;if(this.pos.Currency)return!0;var a=this.unit.toLowerCase();return l.prefixes[a]?!0:(a=this.unit.replace(/s$/,""),k[a]?(this.unit=this.unit.replace(/s$/,""),!0):(a=this.unit.replace(/es$/,""),k[a]?(this.unit=this.unit.replace(/es$/,""),!0):!1))}},{key:"parse",value:function(){if(this.is_number(this.text)){for(var a=this.text.toLowerCase().split(/[ ]/),b=0;b<a.length;b++){var c=a[b];if(c.indexOf("-")===c.lastIndexOf("-")&&c.indexOf("-")>-1){var d=c.split(/[-]/);this.is_number_word(d[0])&&this.is_number_word(d[1])&&(a[b]=d[0],a.splice(b+1,0,d[1]))}}for(var e="",f="",b=0;b<a.length;b++){var c=a[b];this.is_number_word(c)?e+=" "+c:f+=" "+c}for(this.unit=f.trim();""!==this.unit;){if(this.is_unit()&&k[this.unit]){this.measurement=k[this.unit].category,this.unit_name=k[this.unit].name;break}this.unit=this.unit.substr(0,this.unit.lastIndexOf(" ")).trim()}var g=this.text.substr(0,1),h={"€":"euro",$:"dollar","¥":"yen","£":"pound","¢":"cent","฿":"bitcoin"};h[g]&&(this.measurement="Money",this.unit_name="currency",this.unit=h[g]),e=e.trim(),this.number=i(e);var j=this.text.indexOf(" of ");j>0?this.of_what=this.text.substring(j+4).trim():this.unit_name&&(this.of_what=this.unit_name)}}},{key:"textual",value:function(){return j(this.number||this.normal||this.text)}}]),b}(h);o.fn=o.prototype,b.exports=o},{"../../../data/numbers":16,"../../../fns":23,"../noun":78,"./parse/to_number":93,"./to_text":94,"./units":95}],97:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var e=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),f=a("./is_acronym"),g=a("../match/match_term"),h=a("../match/syntax_parse"),i=a("./implied"),j=function(){function a(b,c,e){d(this,a),"number"==typeof b?b=""+b:"string"!=typeof b&&(b=""),b=b.toString(),this.whitespace=e||{},this.whitespace.preceding=this.whitespace.preceding||"",this.whitespace.trailing=this.whitespace.trailing||"",this.text=b,this.normal="",this.expansion="",this.rebuild(),this.reason="";var f={Determiner:"Determiner",Conjunction:"Conjunction",Preposition:"Preposition",Possessive:"Possessive",Expression:"Expression",Condition:"Condition"};this.pos={},this.tag=f[c]||"?",f[c]&&(this.pos[f[c]]=!0)}return e(a,[{key:"rebuild",value:function(){this.text=this.text||"",this.text=this.text.trim(),this.normal="",this.normalize(),this.expansion=i(this.normal)}},{key:"changeTo",value:function(a){this.text=a,this.rebuild()}},{key:"match",value:function(a,b){var c=h([a]);return g(this,c[0],b)}},{key:"root",value:function(){return this.strip_apostrophe()}},{key:"strip_apostrophe",value:function(){if(this.normal.match(/[a-z]'[a-z][a-z]?$/)){var a=this.normal.split(/'/);if("s"===a[1])return a[0]}return this.normal}},{key:"has_comma",value:function(){return this.text.match(/,$/)?!0:!1}},{key:"has_abbreviation",value:function(){return this.text.match(/[a-z]'[a-z][a-z]?$/)?!0:this.text.match(/[a-z]s'$/)?!0:!1}},{key:"is_capital",value:function(){return this.text.match(/[A-Z][a-z]/)?!0:!1}},{key:"is_word",value:function(){return this.text.match(/^\[.*?\]\??$/)?!1:this.text.match(/[a-z|0-9]/i)?this.text.match(/[\|#\<\>]/i)?!1:!0:!1}},{key:"is_acronym",value:function(){return f(this.text)}},{key:"normalize",value:function(){var a=this.text||"";return a=a.toLowerCase(),a=a.replace(/[,\.!:;\?\(\)^$]/g,""),a=a.replace(/([a-z])\-([a-z])/g,"$1 $2"),a=a.replace(/[\u2018\u2019\u201A\u201B\u2032\u2035]+/g,"'"),a=a.replace(/[\u201C\u201D\u201E\u201F\u2033\u2036]+/g,""),a=a.replace(/^'/g,""),a=a.replace(/'$/g,""),a=a.replace(/"/g,""),a.match(/[a-z0-9]/i)?(this.normal=a,this.normal):""}},{key:"forms",value:function(){return this.pos.Noun?{singular:this.singularize(),plural:this.pluralize()}:this.pos.Verb||this.pos.Adjective?this.conjugate():this.pos.Adverb?{adjective:this.to_adjective()}:{}}}]),a}();j.fn=j.prototype,b.exports=j},{"../match/match_term":27,"../match/syntax_parse":29,"./implied":69,"./is_acronym":70}],98:[function(a,b,c){"use strict";var d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol?"symbol":typeof a},e=a("./to_actor"),f=a("./to_infinitive"),g=a("./from_infinitive"),h=a("../../../data/irregular_verbs"),i=a("./predict_form.js"),j=a("./generic.js"),k=a("./strip_prefix.js"),l=a("../../../fns.js"),m=function(a,b){return a.infinitive?(a.gerund||(a.gerund=j.gerund(a)),a.present||(a.present=j.present(a)),a.past||(a.past=j.past(a)),void 0===a.actor&&(a.actor=e(a.infinitive)),b&&Object.keys(a).forEach(function(c){a[c]=b+a[c]}),a.future||(a.future=j.future(a)),a.perfect||(a.perfect=j.perfect(a)),a.pluperfect||(a.pluperfect=j.pluperfect(a)),a.future_perfect||(a.future_perfect=j.future_perfect(a)),a):a},n=function o(a){if(void 0===a)return{};var b=new RegExp("^(.*?) (in|out|on|off|behind|way|with|of|do|away|across|ahead|back|over|under|together|apart|up|upon|aback|down|about|before|after|around|to|forth|round|through|along|onto)$","i");if(a.match(b)){var c=function(){var c=a.match(b,""),d=c[1],e=c[2],f=o(d);return Object.keys(f).forEach(function(a){f[a]&&(f[a]+=" "+e)}),{v:f}}();if("object"===("undefined"==typeof c?"undefined":d(c)))return c.v}a=a.replace(/^had /i,""),a=a.replace(/^have /i,""),a=a.replace(/^will have /i,""),a=a.replace(/^will /i,"");var e=k(a);a=a.replace(e,"");var j=i(a)||"infinitive",n=f(a,j)||"",p=h[a]||h[n]||{};p=l.extend({},p);var q=g(n);return Object.keys(q).forEach(function(a){p[a]||(p[a]=q[a])}),m(p,e)};b.exports=n},{"../../../data/irregular_verbs":11,"../../../fns.js":23,"./from_infinitive":99,"./generic.js":100,"./predict_form.js":101,"./strip_prefix.js":102,"./to_actor":104,"./to_infinitive":105}],99:[function(a,b,c){"use strict";var d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol?"symbol":typeof a},e=[{reg:/(eave)$/i,repl:{pr:"$1s",pa:"$1d",gr:"eaving",ar:"$1r"}},{reg:/(ink)$/i,repl:{pr:"$1s",pa:"unk",gr:"$1ing",ar:"$1er"}},{reg:/(end)$/i,repl:{pr:"$1s",pa:"ent",gr:"$1ing",ar:"$1er"}},{reg:/(ide)$/i,repl:{pr:"$1s",pa:"ode",gr:"iding",ar:"ider"}},{reg:/(ake)$/i,repl:{pr:"$1s",pa:"ook",gr:"aking",ar:"$1r"}},{reg:/(eed)$/i,repl:{pr:"$1s",pa:"$1ed",gr:"$1ing",ar:"$1er"}},{reg:/(e)(ep)$/i,repl:{pr:"$1$2s",pa:"$1pt",gr:"$1$2ing",ar:"$1$2er"}},{reg:/(a[tg]|i[zn]|ur|nc|gl|is)e$/i,repl:{pr:"$1es",pa:"$1ed",gr:"$1ing",prt:"$1en"}},{reg:/([i|f|rr])y$/i,repl:{pr:"$1ies",pa:"$1ied",gr:"$1ying"}},{reg:/([td]er)$/i,repl:{pr:"$1s",pa:"$1ed",gr:"$1ing"}},{reg:/([bd]l)e$/i,repl:{pr:"$1es",pa:"$1ed",gr:"$1ing"}},{reg:/(ish|tch|ess)$/i,repl:{pr:"$1es",pa:"$1ed",gr:"$1ing"}},{reg:/(ion|end|e[nc]t)$/i,repl:{pr:"$1s",pa:"$1ed",gr:"$1ing"}},{reg:/(om)e$/i,repl:{pr:"$1es",pa:"ame",gr:"$1ing"}},{reg:/([aeiu])([pt])$/i,repl:{pr:"$1$2s",pa:"$1$2",gr:"$1$2$2ing"}},{reg:/(er)$/i,repl:{pr:"$1s",pa:"$1ed",gr:"$1ing"}},{reg:/(en)$/i,repl:{pr:"$1s",pa:"$1ed",gr:"$1ing"}},{reg:/(..)(ow)$/i,repl:{pr:"$1$2s",pa:"$1ew",gr:"$1$2ing",prt:"$1$2n"}},{reg:/(..)([cs]h)$/i,repl:{pr:"$1$2es",pa:"$1$2ed",gr:"$1$2ing"}},{reg:/([^aeiou][ou])(g|d)$/i,repl:{pr:"$1$2s",pa:"$1$2$2ed",gr:"$1$2$2ing"}},{reg:/([^aeiou][aeiou])(b|t|p|m)$/i,repl:{pr:"$1$2s",pa:"$1$2$2ed",gr:"$1$2$2ing"}}],f={pr:"present",pa:"past",gr:"gerund",prt:"participle",ar:"actor"},g=function(a){var b={infinitive:a};if(!a||"string"!=typeof a)return b;for(var c=function(c){return a.match(e[c].reg)?(Object.keys(e[c].repl).forEach(function(d){b[f[d]]=a.replace(e[c].reg,e[c].repl[d])}),{v:b}):void 0},g=0;g<e.length;g++){var h=c(g);if("object"===("undefined"==typeof h?"undefined":d(h)))return h.v}return b};b.exports=g},{}],100:[function(a,b,c){"use strict";var d=a("../../../fns"),e={gerund:function(a){var b=a.infinitive;return d.endsWith(b,"e")?b.replace(/e$/,"ing"):b+"ing"},present:function(a){var b=a.infinitive;return d.endsWith(b,"s")?b+"es":b+"s"},past:function(a){var b=a.infinitive;return d.endsWith(b,"e")?b+"d":d.endsWith(b,"ed")?b:b+"ed"},future:function(a){return"will "+a.infinitive},perfect:function(a){return"have "+(a.participle||a.past)},pluperfect:function(a){
return"had "+a.past},future_perfect:function(a){return"will have "+a.past}};b.exports=e},{"../../../fns":23}],101:[function(a,b,c){"use strict";var d=a("../../../fns.js"),e=a("./suffix_rules"),f=a("../../../data/irregular_verbs"),g=Object.keys(f).reduce(function(a,b){return Object.keys(f[b]).forEach(function(c){a[f[b][c]]=c}),a},{}),h=function(a){if(f[a])return"infinitive";if(g[a])return g[a];if(a.match(/will ha(ve|d) [a-z]{2}/))return"future_perfect";if(a.match(/will [a-z]{2}/))return"future";if(a.match(/had [a-z]{2}/))return"pluperfect";if(a.match(/have [a-z]{2}/))return"perfect";if(a.match(/..erer$/))return"actor";if(a.match(/[^aeiou]ing$/))return"gerund";for(var b=Object.keys(e),c=0;c<b.length;c++)if(d.endsWith(a,b[c])&&b[c].length<a.length)return e[b[c]];return"infinitive"};b.exports=h},{"../../../data/irregular_verbs":11,"../../../fns.js":23,"./suffix_rules":103}],102:[function(a,b,c){"use strict";var d=function(a){var b="",c=a.match(/^(over|under|re|anti|full|cross)([- ])?([^aeiou][a-z]*)/i);return c&&(b=c[1]+(c[2]||"")),b};b.exports=d},{}],103:[function(a,b,c){"use strict";for(var d={gerund:[],infinitive:["ate","ize","tion","rify","then","ress","ify","age","nce","ect","ise","ine","ish","ace","ash","ure","tch","end","ack","and","ute","ade","ock","ite","ase","ose","use","ive","int","nge","lay","est","ain","ant","eed","er","le"],participle:["own","unk","ung","en"],past:["ed","lt","nt","pt","ew","ld"],present:["rks","cks","nks","ngs","mps","tes","zes","ers","les","acks","ends","ands","ocks","lays","eads","lls","els","ils","ows","nds","ays","ams","ars","ops","ffs","als","urs","lds","ews","ips","es","ts","ns","s"]},e={},f=Object.keys(d),g=f.length,h=0;g>h;h++)for(var i=d[f[h]].length,j=0;i>j;j++)e[d[f[h]][j]]=f[h];b.exports=e},{}],104:[function(a,b,c){"use strict";var d=function(a){a=a||"";var b={tie:"tier",dream:"dreamer",sail:"sailer",run:"runner",rub:"rubber",begin:"beginner",win:"winner",claim:"claimant",deal:"dealer",spin:"spinner"},c={aid:1,fail:1,appear:1,happen:1,seem:1,"try":1,say:1,marry:1,be:1,forbid:1,understand:1,bet:1},d=[{reg:/e$/i,repl:"er"},{reg:/([aeiou])([mlgp])$/i,repl:"$1$2$2er"},{reg:/([rlf])y$/i,repl:"$1ier"},{reg:/^(.?.[aeiou])t$/i,repl:"$1tter"}];if(c.hasOwnProperty(a))return null;if(b.hasOwnProperty(a))return b[a];for(var e=0;e<d.length;e++)if(a.match(d[e].reg))return a.replace(d[e].reg,d[e].repl);return a+"er"};b.exports=d},{}],105:[function(a,b,c){"use strict";var d=a("../../../data/irregular_verbs"),e=Object.keys(d).reduce(function(a,b){return Object.keys(d[b]).forEach(function(c){a[d[b][c]]=b}),a},{}),f={participle:[{reg:/own$/i,to:"ow"},{reg:/(.)un([g|k])$/i,to:"$1in$2"}],actor:[{reg:/(er)er$/i,to:"$1"}],present:[{reg:/(ies)$/i,to:"y"},{reg:/(tch|sh)es$/i,to:"$1"},{reg:/(ss)es$/i,to:"$1"},{reg:/([tzlshicgrvdnkmu])es$/i,to:"$1e"},{reg:/(n[dtk]|c[kt]|[eo]n|i[nl]|er|a[ytrl])s$/i,to:"$1"},{reg:/(ow)s$/i,to:"$1"},{reg:/(op)s$/i,to:"$1"},{reg:/([eirs])ts$/i,to:"$1t"},{reg:/(ll)s$/i,to:"$1"},{reg:/(el)s$/i,to:"$1"},{reg:/(ip)es$/i,to:"$1e"},{reg:/ss$/i,to:"ss"},{reg:/s$/i,to:""}],gerund:[{reg:/pping$/i,to:"p"},{reg:/lling$/i,to:"ll"},{reg:/tting$/i,to:"t"},{reg:/ssing$/i,to:"ss"},{reg:/gging$/i,to:"g"},{reg:/([^aeiou])ying$/i,to:"$1y"},{reg:/(i.)ing$/i,to:"$1e"},{reg:/(u[rtcb]|[bdtpkg]l|n[cg]|a[gdkvtc]|[ua]s|[dr]g|yz|o[rlsp]|cre)ing$/i,to:"$1e"},{reg:/(ch|sh)ing$/i,to:"$1"},{reg:/(..)ing$/i,to:"$1"}],past:[{reg:/(ued)$/i,to:"ue"},{reg:/(e|i)lled$/i,to:"$1ll"},{reg:/(sh|ch)ed$/i,to:"$1"},{reg:/(tl|gl)ed$/i,to:"$1e"},{reg:/(um?pt?)ed$/i,to:"$1"},{reg:/(ss)ed$/i,to:"$1"},{reg:/pped$/i,to:"p"},{reg:/tted$/i,to:"t"},{reg:/gged$/i,to:"g"},{reg:/(h|ion|n[dt]|ai.|[cs]t|pp|all|ss|tt|int|ail|ld|en|oo.|er|k|pp|w|ou.|rt|ght|rm)ed$/i,to:"$1"},{reg:/(.ut)ed$/i,to:"$1e"},{reg:/(us)ed$/i,to:"$1e"},{reg:/(..[^aeiou])ed$/i,to:"$1e"},{reg:/ied$/i,to:"y"},{reg:/(.o)ed$/i,to:"$1o"},{reg:/(.i)ed$/i,to:"$1"},{reg:/([rl])ew$/i,to:"$1ow"},{reg:/([pl])t$/i,to:"$1t"}]},g=function(a,b){if(e.hasOwnProperty(a))return e[a];if("infinitive"===b)return a;for(var c=f[b]||[],d=0;d<c.length;d++)if(a.match(c[d].reg))return a.replace(c[d].reg,c[d].to);return a};b.exports=g},{"../../../data/irregular_verbs":11}],106:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function f(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var g=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),h=a("../term.js"),i=a("./conjugate/conjugate.js"),j=a("./verb_negate.js"),k=a("./conjugate/predict_form.js"),l={infinitive:"Infinitive",present:"PresentTense",past:"PastTense",gerund:"Gerund",actor:"Actor",future:"FutureTense",pluperfect:"PluperfectTense",perfect:"PerfectTense"},m=function(a){function b(a,c){d(this,b);var f=e(this,Object.getPrototypeOf(b).call(this,a));return f.tag=c,f.pos.Verb=!0,c&&(f.pos[c]=!0),f}return f(b,a),g(b,[{key:"root",value:function(){return this.conjugate().infinitive}},{key:"conjugation",value:function(){for(var a=this.conjugate(),b=Object.keys(a),c=0;c<b.length;c++)if(a[b[c]]===this.normal)return l[b[c]];return l[k(this.normal)]}},{key:"tense",value:function(){var a={infinitive:"present",gerund:"present",actor:"present",present:"present",past:"past",future:"future",perfect:"past",pluperfect:"past",future_perfect:"future"},b=this.conjugation();return a[b]||"present"}},{key:"conjugate",value:function(){return i(this.normal)}},{key:"to_past",value:function(){var a="past",b=this.conjugate(this.normal);return this.tag=l[a],this.changeTo(b[a]),b[a]}},{key:"to_present",value:function(){var a="present",b=this.conjugate(this.normal);return this.tag=l[a],this.changeTo(b[a]),b[a]}},{key:"to_future",value:function(){var a="future",b=this.conjugate(this.normal);return this.tag=l[a],this.changeTo(b[a]),b[a]}},{key:"isNegative",value:function(){var a=this.normal;return a.match(/(n't|\bnot\b)/)?!0:!1}},{key:"negate",value:function(){return this.changeTo(j(this)),this}}]),b}(h);m.fn=m.prototype,b.exports=m},{"../term.js":97,"./conjugate/conjugate.js":98,"./conjugate/predict_form.js":101,"./verb_negate.js":107}],107:[function(a,b,c){"use strict";var d=a("../../fns"),e=function(a){var b={is:"isn't",are:"aren't",was:"wasn't",will:"won't",had:"hadn't",did:"didn't",would:"wouldn't",could:"couldn't",should:"shouldn't",can:"can't",must:"mustn't",have:"haven't",has:"hasn't",does:"doesn't","do":"don't"};if(b[a.normal])return b[a.normal];var c=d.reverseObj(b);if(c[a.normal])return c[a.normal];var e=a.normal.split(" ");if(e.length>1&&"not"===e[1])return e[0];if(e.length>1&&b[e[0]])return b[e[0]]+" "+e.slice(1,e.length).join(" ");var f=a.conjugation();return"PastTense"===f?"didn't "+a.conjugate().infinitive:"PresentTense"===f?"doesn't "+a.conjugate().infinitive:"Gerund"===f?"not "+a.text:"Actor"===f?"non-"+a.text:"Infinitive"===f?"don't "+a.text:a.text};b.exports=e},{"../../fns":23}],108:[function(a,b,c){"use strict";var d=a("../data/abbreviations").abbreviations,e=a("../fns"),f=function(a){var b=a.split(/(\n+)/);return b=b.map(function(a){return a.split(/(\S.+?[.!?])(?=\s+|$)/g)}),e.flatten(b)},g=function(a){var b=[],c=[];if(!a||"string"!=typeof a||!a.match(/\w/))return b;for(var e=f(a),g=0;g<e.length;g++){var h=e[g];if(h&&""!==h){if(!h.match(/\S/)){if(c[c.length-1]){c[c.length-1]+=h;continue}if(e[g+1]){e[g+1]=h+e[g+1];continue}}c.push(h)}}for(var i=new RegExp("\\b("+d.join("|")+")[.!?] ?$","i"),j=new RegExp("[ |.][A-Z].? +?$","i"),k=new RegExp("\\.\\.\\.* +?$"),g=0;g<c.length;g++)c[g+1]&&(c[g].match(i)||c[g].match(j)||c[g].match(k))?c[g+1]=c[g]+(c[g+1]||""):c[g]&&c[g].length>0&&(b.push(c[g]),c[g]="");return 0===b.length?[a]:b};b.exports=g},{"../data/abbreviations":1,"../fns":23}],109:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var e=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),f=a("./sentence_parser.js"),g=a("../sentence/question/question.js"),h=a("../sentence/statement/statement.js"),i=a("../fns.js"),j=function(){function a(b,c){d(this,a),c=c||{};var e=this;"string"==typeof b?this.raw_text=b:"number"==typeof b?this.raw_text=""+b:this.raw_text="",this.sentences=f(this.raw_text).map(function(a){var b=a.slice(-1);return"?"===b?new g(a,c):new h(a,c)}),this.contractions={expand:function(){return e.sentences=e.sentences.map(function(a){return a.contractions.expand()}),e},contract:function(){return e.sentences=e.sentences.map(function(a){return a.contractions.contract()}),e}}}return e(a,[{key:"text",value:function(){var a=this.sentences.map(function(a){return a.text()});return i.flatten(a).join("")}},{key:"normal",value:function(){var a=this.sentences.map(function(a){return a.normalized()});return i.flatten(a).join(" ")}},{key:"root",value:function(){var a=this.sentences.map(function(a){return a.root()});return i.flatten(a).join(" ")}},{key:"terms",value:function(){var a=this.sentences.map(function(a){return a.terms});return i.flatten(a)}},{key:"tags",value:function(){return this.sentences.map(function(a){return a.tags()})}},{key:"match",value:function(a,b){for(var c=[],d=0;d<this.sentences.length;d++)c=c.concat(this.sentences[d].match(a,b));return c}},{key:"replace",value:function(a,b,c){for(var d=0;d<this.sentences.length;d++)this.sentences[d].replace(a,b,c);return this}},{key:"to_past",value:function(){return this.sentences=this.sentences.map(function(a){return a.to_past()}),this}},{key:"to_present",value:function(){return this.sentences=this.sentences.map(function(a){return a.to_present()}),this}},{key:"to_future",value:function(){return this.sentences=this.sentences.map(function(a){return a.to_future()}),this}},{key:"negate",value:function(){return this.sentences=this.sentences.map(function(a){return a.negate()}),this}},{key:"nouns",value:function(){for(var a=[],b=0;b<this.sentences.length;b++)a=a.concat(this.sentences[b].nouns());return a}},{key:"adjectives",value:function(){for(var a=[],b=0;b<this.sentences.length;b++)a=a.concat(this.sentences[b].adjectives());return a}},{key:"verbs",value:function(){for(var a=[],b=0;b<this.sentences.length;b++)a=a.concat(this.sentences[b].verbs());return a}},{key:"adverbs",value:function(){for(var a=[],b=0;b<this.sentences.length;b++)a=a.concat(this.sentences[b].adverbs());return a}},{key:"people",value:function(){for(var a=[],b=0;b<this.sentences.length;b++)a=a.concat(this.sentences[b].people());return a}},{key:"places",value:function(){for(var a=[],b=0;b<this.sentences.length;b++)a=a.concat(this.sentences[b].places());return a}},{key:"organizations",value:function(){for(var a=[],b=0;b<this.sentences.length;b++)a=a.concat(this.sentences[b].organizations());return a}},{key:"dates",value:function(){for(var a=[],b=0;b<this.sentences.length;b++)a=a.concat(this.sentences[b].dates());return a}},{key:"values",value:function(){for(var a=[],b=0;b<this.sentences.length;b++)a=a.concat(this.sentences[b].values());return a}},{key:"topics",value:function b(){for(var a={},c=0;c<this.sentences.length;c++)for(var b=this.sentences[c].topics(),d=0;d<b.length;d++)a[b[d].text]?a[b[d].text].count+=b[d].count:a[b[d].text]=b[d];var e=Object.keys(a).map(function(b){return a[b]});return e.sort(function(a,b){return a.count>b.count?-1:1})}}]),a}();j.fn=j.prototype,b.exports=j},{"../fns.js":23,"../sentence/question/question.js":54,"../sentence/statement/statement.js":60,"./sentence_parser.js":108}]},{},[24])(24)});

/*
 ResponsiveVoice JS v1.4.7

 (c) 2015 LearnBrite

 License: http://responsivevoice.org/license
*/
if("undefined"!=typeof responsiveVoice)console.log("ResponsiveVoice already loaded"),console.log(responsiveVoice);else var ResponsiveVoice=function(){var a=this;a.version="1.4.7";console.log("ResponsiveVoice r"+a.version);a.responsivevoices=[{name:"UK English Female",flag:"gb",gender:"f",voiceIDs:[3,5,1,6,7,171,201,8]},{name:"UK English Male",flag:"gb",gender:"m",voiceIDs:[0,4,2,75,202,159,6,7]},{name:"US English Female",flag:"us",gender:"f",voiceIDs:[39,40,41,42,43,173,205,204,44]},{name:"Arabic Male",
flag:"ar",gender:"m",voiceIDs:[96,95,97,196,98],deprecated:!0},{name:"Arabic Female",flag:"ar",gender:"f",voiceIDs:[96,95,97,196,98]},{name:"Armenian Male",flag:"hy",gender:"f",voiceIDs:[99]},{name:"Australian Female",flag:"au",gender:"f",voiceIDs:[87,86,5,201,88]},{name:"Brazilian Portuguese Female",flag:"br",gender:"f",voiceIDs:[124,123,125,186,223,126]},{name:"Chinese Female",flag:"cn",gender:"f",voiceIDs:[58,59,60,155,191,231,61]},{name:"Czech Female",flag:"cz",gender:"f",voiceIDs:[101,100,102,
197,103]},{name:"Danish Female",flag:"dk",gender:"f",voiceIDs:[105,104,106,198,107]},{name:"Deutsch Female",flag:"de",gender:"f",voiceIDs:[27,28,29,30,31,78,170,199,32]},{name:"Dutch Female",flag:"nl",gender:"f",voiceIDs:[219,84,157,158,184,45]},{name:"Finnish Female",flag:"fi",gender:"f",voiceIDs:[90,89,91,209,92]},{name:"French Female",flag:"fr",gender:"f",voiceIDs:[21,22,23,77,178,210,26]},{name:"Greek Female",flag:"gr",gender:"f",voiceIDs:[62,63,80,200,64]},{name:"Hatian Creole Female",flag:"ht",
gender:"f",voiceIDs:[109]},{name:"Hindi Female",flag:"hi",gender:"f",voiceIDs:[66,154,179,213,67]},{name:"Hungarian Female",flag:"hu",gender:"f",voiceIDs:[9,10,81,214,11]},{name:"Indonesian Female",flag:"id",gender:"f",voiceIDs:[111,112,180,215,113]},{name:"Italian Female",flag:"it",gender:"f",voiceIDs:[33,34,35,36,37,79,181,216,38]},{name:"Japanese Female",flag:"jp",gender:"f",voiceIDs:[50,51,52,153,182,217,53]},{name:"Korean Female",flag:"kr",gender:"f",voiceIDs:[54,55,56,156,183,218,57]},{name:"Latin Female",
flag:"va",gender:"f",voiceIDs:[114]},{name:"Norwegian Female",flag:"no",gender:"f",voiceIDs:[72,73,221,74]},{name:"Polish Female",flag:"pl",gender:"f",voiceIDs:[120,119,121,185,222,122]},{name:"Portuguese Female",flag:"br",gender:"f",voiceIDs:[128,127,129,187,224,130]},{name:"Romanian Male",flag:"ro",gender:"m",voiceIDs:[151,150,152,225,46]},{name:"Russian Female",flag:"ru",gender:"f",voiceIDs:[47,48,83,188,226,49]},{name:"Slovak Female",flag:"sk",gender:"f",voiceIDs:[133,132,134,227,135]},{name:"Spanish Female",
flag:"es",gender:"f",voiceIDs:[19,16,17,18,20,76,174,207,15]},{name:"Spanish Latin American Female",flag:"es",gender:"f",voiceIDs:[137,136,138,175,208,139]},{name:"Swedish Female",flag:"sv",gender:"f",voiceIDs:[85,148,149,228,65]},{name:"Tamil Male",flag:"hi",gender:"m",voiceIDs:[141]},{name:"Thai Female",flag:"th",gender:"f",voiceIDs:[143,142,144,189,229,145]},{name:"Turkish Female",flag:"tr",gender:"f",voiceIDs:[69,70,82,190,230,71]},{name:"Afrikaans Male",flag:"af",gender:"m",voiceIDs:[93]},{name:"Albanian Male",
flag:"sq",gender:"m",voiceIDs:[94]},{name:"Bosnian Male",flag:"bs",gender:"m",voiceIDs:[14]},{name:"Catalan Male",flag:"catalonia",gender:"m",voiceIDs:[68]},{name:"Croatian Male",flag:"hr",gender:"m",voiceIDs:[13]},{name:"Czech Male",flag:"cz",gender:"m",voiceIDs:[161]},{name:"Danish Male",flag:"da",gender:"m",voiceIDs:[162],deprecated:!0},{name:"Esperanto Male",flag:"eo",gender:"m",voiceIDs:[108]},{name:"Finnish Male",flag:"fi",gender:"m",voiceIDs:[160],deprecated:!0},{name:"Greek Male",flag:"gr",
gender:"m",voiceIDs:[163],deprecated:!0},{name:"Hungarian Male",flag:"hu",gender:"m",voiceIDs:[164]},{name:"Icelandic Male",flag:"is",gender:"m",voiceIDs:[110]},{name:"Latin Male",flag:"va",gender:"m",voiceIDs:[165],deprecated:!0},{name:"Latvian Male",flag:"lv",gender:"m",voiceIDs:[115]},{name:"Macedonian Male",flag:"mk",gender:"m",voiceIDs:[116]},{name:"Moldavian Male",flag:"md",gender:"m",voiceIDs:[117]},{name:"Montenegrin Male",flag:"me",gender:"m",voiceIDs:[118]},{name:"Norwegian Male",flag:"no",
gender:"m",voiceIDs:[166]},{name:"Serbian Male",flag:"sr",gender:"m",voiceIDs:[12]},{name:"Serbo-Croatian Male",flag:"hr",gender:"m",voiceIDs:[131]},{name:"Slovak Male",flag:"sk",gender:"m",voiceIDs:[167],deprecated:!0},{name:"Swahili Male",flag:"sw",gender:"m",voiceIDs:[140]},{name:"Swedish Male",flag:"sv",gender:"m",voiceIDs:[168],deprecated:!0},{name:"Vietnamese Male",flag:"vi",gender:"m",voiceIDs:[146],deprecated:!0},{name:"Welsh Male",flag:"cy",gender:"m",voiceIDs:[147]},{name:"US English Male",
flag:"us",gender:"m",voiceIDs:[0,4,2,6,7,75,159]},{name:"Fallback UK Female",flag:"gb",gender:"f",voiceIDs:[8]}];a.voicecollection=[{name:"Google UK English Male"},{name:"Agnes"},{name:"Daniel Compact"},{name:"Google UK English Female"},{name:"en-GB",rate:.25,pitch:1},{name:"en-AU",rate:.25,pitch:1},{name:"ingl\u00e9s Reino Unido"},{name:"English United Kingdom"},{name:"Fallback en-GB Female",lang:"en-GB",fallbackvoice:!0},{name:"Eszter Compact"},{name:"hu-HU",rate:.4},{name:"Fallback Hungarian",
lang:"hu",fallbackvoice:!0,service:"g2"},{name:"Fallback Serbian",lang:"sr",fallbackvoice:!0},{name:"Fallback Croatian",lang:"hr",fallbackvoice:!0},{name:"Fallback Bosnian",lang:"bs",fallbackvoice:!0},{name:"Fallback Spanish",lang:"es",fallbackvoice:!0},{name:"Spanish Spain"},{name:"espa\u00f1ol Espa\u00f1a"},{name:"Diego Compact",rate:.3},{name:"Google Espa\u00f1ol"},{name:"es-ES",rate:.2},{name:"Google Fran\u00e7ais"},{name:"French France"},{name:"franc\u00e9s Francia"},{name:"Virginie Compact",
rate:.5},{name:"fr-FR",rate:.25},{name:"Fallback French",lang:"fr",fallbackvoice:!0},{name:"Google Deutsch"},{name:"German Germany"},{name:"alem\u00e1n Alemania"},{name:"Yannick Compact",rate:.5},{name:"de-DE",rate:.25},{name:"Fallback Deutsch",lang:"de",fallbackvoice:!0},{name:"Google Italiano"},{name:"Italian Italy"},{name:"italiano Italia"},{name:"Paolo Compact",rate:.5},{name:"it-IT",rate:.25},{name:"Fallback Italian",lang:"it",fallbackvoice:!0},{name:"Google US English",timerSpeed:1},{name:"English United States"},
{name:"ingl\u00e9s Estados Unidos"},{name:"Vicki"},{name:"en-US",rate:.2,pitch:1,timerSpeed:1.3},{name:"Fallback English",lang:"en-US",fallbackvoice:!0,timerSpeed:0},{name:"Fallback Dutch",lang:"nl",fallbackvoice:!0,timerSpeed:0},{name:"Fallback Romanian",lang:"ro",fallbackvoice:!0},{name:"Milena Compact"},{name:"ru-RU",rate:.25},{name:"Fallback Russian",lang:"ru",fallbackvoice:!0},{name:"Google \u65e5\u672c\u4eba",timerSpeed:1},{name:"Kyoko Compact"},{name:"ja-JP",rate:.25},{name:"Fallback Japanese",
lang:"ja",fallbackvoice:!0},{name:"Google \ud55c\uad6d\uc758",timerSpeed:1},{name:"Narae Compact"},{name:"ko-KR",rate:.25},{name:"Fallback Korean",lang:"ko",fallbackvoice:!0},{name:"Google \u4e2d\u56fd\u7684",timerSpeed:1},{name:"Ting-Ting Compact"},{name:"zh-CN",rate:.25},{name:"Fallback Chinese",lang:"zh-CN",fallbackvoice:!0},{name:"Alexandros Compact"},{name:"el-GR",rate:.25},{name:"Fallback Greek",lang:"el",fallbackvoice:!0,service:"g2"},{name:"Fallback Swedish",lang:"sv",fallbackvoice:!0,service:"g2"},
{name:"hi-IN",rate:.25},{name:"Fallback Hindi",lang:"hi",fallbackvoice:!0},{name:"Fallback Catalan",lang:"ca",fallbackvoice:!0},{name:"Aylin Compact"},{name:"tr-TR",rate:.25},{name:"Fallback Turkish",lang:"tr",fallbackvoice:!0},{name:"Stine Compact"},{name:"no-NO",rate:.25},{name:"Fallback Norwegian",lang:"no",fallbackvoice:!0,service:"g2"},{name:"Daniel"},{name:"Monica"},{name:"Amelie"},{name:"Anna"},{name:"Alice"},{name:"Melina"},{name:"Mariska"},{name:"Yelda"},{name:"Milena"},{name:"Xander"},{name:"Alva"},
{name:"Lee Compact"},{name:"Karen"},{name:"Fallback Australian",lang:"en-AU",fallbackvoice:!0},{name:"Mikko Compact"},{name:"Satu"},{name:"fi-FI",rate:.25},{name:"Fallback Finnish",lang:"fi",fallbackvoice:!0,service:"g2"},{name:"Fallback Afrikans",lang:"af",fallbackvoice:!0},{name:"Fallback Albanian",lang:"sq",fallbackvoice:!0},{name:"Maged Compact"},{name:"Tarik"},{name:"ar-SA",rate:.25},{name:"Fallback Arabic",lang:"ar",fallbackvoice:!0,service:"g2"},{name:"Fallback Armenian",lang:"hy",fallbackvoice:!0,
service:"g2"},{name:"Zuzana Compact"},{name:"Zuzana"},{name:"cs-CZ",rate:.25},{name:"Fallback Czech",lang:"cs",fallbackvoice:!0,service:"g2"},{name:"Ida Compact"},{name:"Sara"},{name:"da-DK",rate:.25},{name:"Fallback Danish",lang:"da",fallbackvoice:!0,service:"g2"},{name:"Fallback Esperanto",lang:"eo",fallbackvoice:!0},{name:"Fallback Hatian Creole",lang:"ht",fallbackvoice:!0},{name:"Fallback Icelandic",lang:"is",fallbackvoice:!0},{name:"Damayanti"},{name:"id-ID",rate:.25},{name:"Fallback Indonesian",
lang:"id",fallbackvoice:!0},{name:"Fallback Latin",lang:"la",fallbackvoice:!0,service:"g2"},{name:"Fallback Latvian",lang:"lv",fallbackvoice:!0},{name:"Fallback Macedonian",lang:"mk",fallbackvoice:!0},{name:"Fallback Moldavian",lang:"mo",fallbackvoice:!0,service:"g2"},{name:"Fallback Montenegrin",lang:"sr-ME",fallbackvoice:!0},{name:"Agata Compact"},{name:"Zosia"},{name:"pl-PL",rate:.25},{name:"Fallback Polish",lang:"pl",fallbackvoice:!0},{name:"Raquel Compact"},{name:"Luciana"},{name:"pt-BR",rate:.25},
{name:"Fallback Brazilian Portugese",lang:"pt-BR",fallbackvoice:!0,service:"g2"},{name:"Joana Compact"},{name:"Joana"},{name:"pt-PT",rate:.25},{name:"Fallback Portuguese",lang:"pt-PT",fallbackvoice:!0},{name:"Fallback Serbo-Croation",lang:"sh",fallbackvoice:!0,service:"g2"},{name:"Laura Compact"},{name:"Laura"},{name:"sk-SK",rate:.25},{name:"Fallback Slovak",lang:"sk",fallbackvoice:!0,service:"g2"},{name:"Javier Compact"},{name:"Paulina"},{name:"es-MX",rate:.25},{name:"Fallback Spanish (Latin American)",
lang:"es-419",fallbackvoice:!0,service:"g2"},{name:"Fallback Swahili",lang:"sw",fallbackvoice:!0},{name:"Fallback Tamil",lang:"ta",fallbackvoice:!0},{name:"Narisa Compact"},{name:"Kanya"},{name:"th-TH",rate:.25},{name:"Fallback Thai",lang:"th",fallbackvoice:!0},{name:"Fallback Vietnamese",lang:"vi",fallbackvoice:!0},{name:"Fallback Welsh",lang:"cy",fallbackvoice:!0},{name:"Oskar Compact"},{name:"sv-SE",rate:.25},{name:"Simona Compact"},{name:"Ioana"},{name:"ro-RO",rate:.25},{name:"Kyoko"},{name:"Lekha"},
{name:"Ting-Ting"},{name:"Yuna"},{name:"Xander Compact"},{name:"nl-NL",rate:.25},{name:"Fallback UK English Male",lang:"en-GB",fallbackvoice:!0,service:"g1",voicename:"rjs"},{name:"Finnish Male",lang:"fi",fallbackvoice:!0,service:"g1",voicename:""},{name:"Czech Male",lang:"cs",fallbackvoice:!0,service:"g1",voicename:""},{name:"Danish Male",lang:"da",fallbackvoice:!0,service:"g1",voicename:""},{name:"Greek Male",lang:"el",fallbackvoice:!0,service:"g1",voicename:"",rate:.25},{name:"Hungarian Male",
lang:"hu",fallbackvoice:!0,service:"g1",voicename:""},{name:"Latin Male",lang:"la",fallbackvoice:!0,service:"g1",voicename:""},{name:"Norwegian Male",lang:"no",fallbackvoice:!0,service:"g1",voicename:""},{name:"Slovak Male",lang:"sk",fallbackvoice:!0,service:"g1",voicename:""},{name:"Swedish Male",lang:"sv",fallbackvoice:!0,service:"g1",voicename:""},{name:"Fallback US English Male",lang:"en",fallbackvoice:!0,service:"tts-api",voicename:""},{name:"German Germany",lang:"de_DE"},{name:"English United Kingdom",
lang:"en_GB"},{name:"English India",lang:"en_IN"},{name:"English United States",lang:"en_US"},{name:"Spanish Spain",lang:"es_ES"},{name:"Spanish Mexico",lang:"es_MX"},{name:"Spanish United States",lang:"es_US"},{name:"French Belgium",lang:"fr_BE"},{name:"French France",lang:"fr_FR"},{name:"Hindi India",lang:"hi_IN"},{name:"Indonesian Indonesia",lang:"in_ID"},{name:"Italian Italy",lang:"it_IT"},{name:"Japanese Japan",lang:"ja_JP"},{name:"Korean South Korea",lang:"ko_KR"},{name:"Dutch Netherlands",
lang:"nl_NL"},{name:"Polish Poland",lang:"pl_PL"},{name:"Portuguese Brazil",lang:"pt_BR"},{name:"Portuguese Portugal",lang:"pt_PT"},{name:"Russian Russia",lang:"ru_RU"},{name:"Thai Thailand",lang:"th_TH"},{name:"Turkish Turkey",lang:"tr_TR"},{name:"Chinese China",lang:"zh_CN_#Hans"},{name:"Chinese Hong Kong",lang:"zh_HK_#Hans"},{name:"Chinese Hong Kong",lang:"zh_HK_#Hant"},{name:"Chinese Taiwan",lang:"zh_TW_#Hant"},{name:"Alex"},{name:"Maged",lang:"ar-SA"},{name:"Zuzana",lang:"cs-CZ"},{name:"Sara",
lang:"da-DK"},{name:"Anna",lang:"de-DE"},{name:"Melina",lang:"el-GR"},{name:"Karen",lang:"en-AU"},{name:"Daniel",lang:"en-GB"},{name:"Moira",lang:"en-IE"},{name:"Samantha (Enhanced)",lang:"en-US"},{name:"Samantha",lang:"en-US"},{name:"Tessa",lang:"en-ZA"},{name:"Monica",lang:"es-ES"},{name:"Paulina",lang:"es-MX"},{name:"Satu",lang:"fi-FI"},{name:"Amelie",lang:"fr-CA"},{name:"Thomas",lang:"fr-FR"},{name:"Carmit",lang:"he-IL"},{name:"Lekha",lang:"hi-IN"},{name:"Mariska",lang:"hu-HU"},{name:"Damayanti",
lang:"id-ID"},{name:"Alice",lang:"it-IT"},{name:"Kyoko",lang:"ja-JP"},{name:"Yuna",lang:"ko-KR"},{name:"Ellen",lang:"nl-BE"},{name:"Xander",lang:"nl-NL"},{name:"Nora",lang:"no-NO"},{name:"Zosia",lang:"pl-PL"},{name:"Luciana",lang:"pt-BR"},{name:"Joana",lang:"pt-PT"},{name:"Ioana",lang:"ro-RO"},{name:"Milena",lang:"ru-RU"},{name:"Laura",lang:"sk-SK"},{name:"Alva",lang:"sv-SE"},{name:"Kanya",lang:"th-TH"},{name:"Yelda",lang:"tr-TR"},{name:"Ting-Ting",lang:"zh-CN"},{name:"Sin-Ji",lang:"zh-HK"},{name:"Mei-Jia",
lang:"zh-TW"}];a.iOS=/(iPad|iPhone|iPod)/g.test(navigator.userAgent);a.iOS9=/(iphone|ipod|ipad).* os 9_/.test(navigator.userAgent.toLowerCase());a.is_chrome=-1<navigator.userAgent.indexOf("Chrome");a.is_safari=-1<navigator.userAgent.indexOf("Safari");a.is_chrome&&a.is_safari&&(a.is_safari=!1);a.is_opera=!!window.opera||0<=navigator.userAgent.indexOf(" OPR/");a.is_android=-1<navigator.userAgent.toLowerCase().indexOf("android");a.iOS_initialized=!1;a.iOS9_initialized=!1;a.cache_ios_voices=[{name:"he-IL",
voiceURI:"he-IL",lang:"he-IL"},{name:"th-TH",voiceURI:"th-TH",lang:"th-TH"},{name:"pt-BR",voiceURI:"pt-BR",lang:"pt-BR"},{name:"sk-SK",voiceURI:"sk-SK",lang:"sk-SK"},{name:"fr-CA",voiceURI:"fr-CA",lang:"fr-CA"},{name:"ro-RO",voiceURI:"ro-RO",lang:"ro-RO"},{name:"no-NO",voiceURI:"no-NO",lang:"no-NO"},{name:"fi-FI",voiceURI:"fi-FI",lang:"fi-FI"},{name:"pl-PL",voiceURI:"pl-PL",lang:"pl-PL"},{name:"de-DE",voiceURI:"de-DE",lang:"de-DE"},{name:"nl-NL",voiceURI:"nl-NL",lang:"nl-NL"},{name:"id-ID",voiceURI:"id-ID",
lang:"id-ID"},{name:"tr-TR",voiceURI:"tr-TR",lang:"tr-TR"},{name:"it-IT",voiceURI:"it-IT",lang:"it-IT"},{name:"pt-PT",voiceURI:"pt-PT",lang:"pt-PT"},{name:"fr-FR",voiceURI:"fr-FR",lang:"fr-FR"},{name:"ru-RU",voiceURI:"ru-RU",lang:"ru-RU"},{name:"es-MX",voiceURI:"es-MX",lang:"es-MX"},{name:"zh-HK",voiceURI:"zh-HK",lang:"zh-HK"},{name:"sv-SE",voiceURI:"sv-SE",lang:"sv-SE"},{name:"hu-HU",voiceURI:"hu-HU",lang:"hu-HU"},{name:"zh-TW",voiceURI:"zh-TW",lang:"zh-TW"},{name:"es-ES",voiceURI:"es-ES",lang:"es-ES"},
{name:"zh-CN",voiceURI:"zh-CN",lang:"zh-CN"},{name:"nl-BE",voiceURI:"nl-BE",lang:"nl-BE"},{name:"en-GB",voiceURI:"en-GB",lang:"en-GB"},{name:"ar-SA",voiceURI:"ar-SA",lang:"ar-SA"},{name:"ko-KR",voiceURI:"ko-KR",lang:"ko-KR"},{name:"cs-CZ",voiceURI:"cs-CZ",lang:"cs-CZ"},{name:"en-ZA",voiceURI:"en-ZA",lang:"en-ZA"},{name:"en-AU",voiceURI:"en-AU",lang:"en-AU"},{name:"da-DK",voiceURI:"da-DK",lang:"da-DK"},{name:"en-US",voiceURI:"en-US",lang:"en-US"},{name:"en-IE",voiceURI:"en-IE",lang:"en-IE"},{name:"hi-IN",
voiceURI:"hi-IN",lang:"hi-IN"},{name:"el-GR",voiceURI:"el-GR",lang:"el-GR"},{name:"ja-JP",voiceURI:"ja-JP",lang:"ja-JP"}];a.cache_ios9_voices=[{name:"Maged",voiceURI:"com.apple.ttsbundle.Maged-compact",lang:"ar-SA",localService:!0,"default":!0},{name:"Zuzana",voiceURI:"com.apple.ttsbundle.Zuzana-compact",lang:"cs-CZ",localService:!0,"default":!0},{name:"Sara",voiceURI:"com.apple.ttsbundle.Sara-compact",lang:"da-DK",localService:!0,"default":!0},{name:"Anna",voiceURI:"com.apple.ttsbundle.Anna-compact",
lang:"de-DE",localService:!0,"default":!0},{name:"Melina",voiceURI:"com.apple.ttsbundle.Melina-compact",lang:"el-GR",localService:!0,"default":!0},{name:"Karen",voiceURI:"com.apple.ttsbundle.Karen-compact",lang:"en-AU",localService:!0,"default":!0},{name:"Daniel",voiceURI:"com.apple.ttsbundle.Daniel-compact",lang:"en-GB",localService:!0,"default":!0},{name:"Moira",voiceURI:"com.apple.ttsbundle.Moira-compact",lang:"en-IE",localService:!0,"default":!0},{name:"Samantha (Enhanced)",voiceURI:"com.apple.ttsbundle.Samantha-premium",
lang:"en-US",localService:!0,"default":!0},{name:"Samantha",voiceURI:"com.apple.ttsbundle.Samantha-compact",lang:"en-US",localService:!0,"default":!0},{name:"Tessa",voiceURI:"com.apple.ttsbundle.Tessa-compact",lang:"en-ZA",localService:!0,"default":!0},{name:"Monica",voiceURI:"com.apple.ttsbundle.Monica-compact",lang:"es-ES",localService:!0,"default":!0},{name:"Paulina",voiceURI:"com.apple.ttsbundle.Paulina-compact",lang:"es-MX",localService:!0,"default":!0},{name:"Satu",voiceURI:"com.apple.ttsbundle.Satu-compact",
lang:"fi-FI",localService:!0,"default":!0},{name:"Amelie",voiceURI:"com.apple.ttsbundle.Amelie-compact",lang:"fr-CA",localService:!0,"default":!0},{name:"Thomas",voiceURI:"com.apple.ttsbundle.Thomas-compact",lang:"fr-FR",localService:!0,"default":!0},{name:"Carmit",voiceURI:"com.apple.ttsbundle.Carmit-compact",lang:"he-IL",localService:!0,"default":!0},{name:"Lekha",voiceURI:"com.apple.ttsbundle.Lekha-compact",lang:"hi-IN",localService:!0,"default":!0},{name:"Mariska",voiceURI:"com.apple.ttsbundle.Mariska-compact",
lang:"hu-HU",localService:!0,"default":!0},{name:"Damayanti",voiceURI:"com.apple.ttsbundle.Damayanti-compact",lang:"id-ID",localService:!0,"default":!0},{name:"Alice",voiceURI:"com.apple.ttsbundle.Alice-compact",lang:"it-IT",localService:!0,"default":!0},{name:"Kyoko",voiceURI:"com.apple.ttsbundle.Kyoko-compact",lang:"ja-JP",localService:!0,"default":!0},{name:"Yuna",voiceURI:"com.apple.ttsbundle.Yuna-compact",lang:"ko-KR",localService:!0,"default":!0},{name:"Ellen",voiceURI:"com.apple.ttsbundle.Ellen-compact",
lang:"nl-BE",localService:!0,"default":!0},{name:"Xander",voiceURI:"com.apple.ttsbundle.Xander-compact",lang:"nl-NL",localService:!0,"default":!0},{name:"Nora",voiceURI:"com.apple.ttsbundle.Nora-compact",lang:"no-NO",localService:!0,"default":!0},{name:"Zosia",voiceURI:"com.apple.ttsbundle.Zosia-compact",lang:"pl-PL",localService:!0,"default":!0},{name:"Luciana",voiceURI:"com.apple.ttsbundle.Luciana-compact",lang:"pt-BR",localService:!0,"default":!0},{name:"Joana",voiceURI:"com.apple.ttsbundle.Joana-compact",
lang:"pt-PT",localService:!0,"default":!0},{name:"Ioana",voiceURI:"com.apple.ttsbundle.Ioana-compact",lang:"ro-RO",localService:!0,"default":!0},{name:"Milena",voiceURI:"com.apple.ttsbundle.Milena-compact",lang:"ru-RU",localService:!0,"default":!0},{name:"Laura",voiceURI:"com.apple.ttsbundle.Laura-compact",lang:"sk-SK",localService:!0,"default":!0},{name:"Alva",voiceURI:"com.apple.ttsbundle.Alva-compact",lang:"sv-SE",localService:!0,"default":!0},{name:"Kanya",voiceURI:"com.apple.ttsbundle.Kanya-compact",
lang:"th-TH",localService:!0,"default":!0},{name:"Yelda",voiceURI:"com.apple.ttsbundle.Yelda-compact",lang:"tr-TR",localService:!0,"default":!0},{name:"Ting-Ting",voiceURI:"com.apple.ttsbundle.Ting-Ting-compact",lang:"zh-CN",localService:!0,"default":!0},{name:"Sin-Ji",voiceURI:"com.apple.ttsbundle.Sin-Ji-compact",lang:"zh-HK",localService:!0,"default":!0},{name:"Mei-Jia",voiceURI:"com.apple.ttsbundle.Mei-Jia-compact",lang:"zh-TW",localService:!0,"default":!0}];a.systemvoices=null;a.CHARACTER_LIMIT=
100;a.VOICESUPPORT_ATTEMPTLIMIT=5;a.voicesupport_attempts=0;a.fallbackMode=!1;a.WORDS_PER_MINUTE=130;a.fallback_parts=null;a.fallback_part_index=0;a.fallback_audio=null;a.fallback_playbackrate=1;a.def_fallback_playbackrate=a.fallback_playbackrate;a.fallback_audiopool=[];a.msgparameters=null;a.timeoutId=null;a.OnLoad_callbacks=[];a.useTimer=!1;a.utterances=[];a.tstCompiled=function(a){return eval("typeof xy === 'undefined'")};a.fallbackServicePath="https://code.responsivevoice.org/"+(a.tstCompiled()?
"":"develop/")+"getvoice.php";a.default_rv=a.responsivevoices[0];a.init=function(){a.is_android&&(a.useTimer=!0);a.is_opera||"undefined"===typeof speechSynthesis?(console.log("RV: Voice synthesis not supported"),a.enableFallbackMode()):setTimeout(function(){var b=setInterval(function(){var c=window.speechSynthesis.getVoices();0!=c.length||null!=a.systemvoices&&0!=a.systemvoices.length?(console.log("RV: Voice support ready"),a.systemVoicesReady(c),clearInterval(b)):(console.log("Voice support NOT ready"),
a.voicesupport_attempts++,a.voicesupport_attempts>a.VOICESUPPORT_ATTEMPTLIMIT&&(clearInterval(b),null!=window.speechSynthesis?a.iOS?(a.iOS9?a.systemVoicesReady(a.cache_ios9_voices):a.systemVoicesReady(a.cache_ios_voices),console.log("RV: Voice support ready (cached)")):(console.log("RV: speechSynthesis present but no system voices found"),a.enableFallbackMode()):a.enableFallbackMode()))},100)},100);a.Dispatch("OnLoad")};a.systemVoicesReady=function(b){a.systemvoices=b;a.mapRVs();null!=a.OnVoiceReady&&
a.OnVoiceReady.call();a.Dispatch("OnReady");window.hasOwnProperty("dispatchEvent")&&window.dispatchEvent(new Event("ResponsiveVoice_OnReady"))};a.enableFallbackMode=function(){a.fallbackMode=!0;console.log("RV: Enabling fallback mode");a.mapRVs();null!=a.OnVoiceReady&&a.OnVoiceReady.call();a.Dispatch("OnReady");window.hasOwnProperty("dispatchEvent")&&window.dispatchEvent(new Event("ResponsiveVoice_OnReady"))};a.getVoices=function(){for(var b=[],c=0;c<a.responsivevoices.length;c++)b.push({name:a.responsivevoices[c].name});
return b};a.speak=function(b,c,f){if(a.iOS9&&!a.iOS9_initialized)console.log("Initializing ios9"),setTimeout(function(){a.speak(b,c,f)},100),a.clickEvent(),a.iOS9_initialized=!0;else{a.isPlaying()&&(console.log("Cancelling previous speech"),a.cancel());a.fallbackMode&&0<a.fallback_audiopool.length&&a.clearFallbackPool();b=b.replace(/[\"\`]/gm,"'");a.msgparameters=f||{};a.msgtext=b;a.msgvoicename=c;a.onstartFired=!1;var h=[];if(b.length>a.CHARACTER_LIMIT){for(var e=b;e.length>a.CHARACTER_LIMIT;){var g=
e.search(/[:!?.;]+/),d="";if(-1==g||g>=a.CHARACTER_LIMIT)g=e.search(/[,]+/);-1==g&&-1==e.search(" ")&&(g=99);if(-1==g||g>=a.CHARACTER_LIMIT)for(var k=e.split(" "),g=0;g<k.length&&!(d.length+k[g].length+1>a.CHARACTER_LIMIT);g++)d+=(0!=g?" ":"")+k[g];else d=e.substr(0,g+1);e=e.substr(d.length,e.length-d.length);h.push(d)}0<e.length&&h.push(e)}else h.push(b);a.multipartText=h;g=null==c?a.default_rv:a.getResponsiveVoice(c);!0===g.deprecated&&console.warn("ResponsiveVoice: Voice "+g.name+" is deprecated and will be removed in future releases");
e={};if(null!=g.mappedProfile)e=g.mappedProfile;else if(e.systemvoice=a.getMatchedVoice(g),e.collectionvoice={},null==e.systemvoice){console.log("RV: ERROR: No voice found for: "+c);return}1==e.collectionvoice.fallbackvoice?(a.fallbackMode=!0,a.fallback_parts=[]):a.fallbackMode=!1;a.msgprofile=e;a.utterances=[];for(g=0;g<h.length;g++)if(a.fallbackMode){a.fallback_playbackrate=a.def_fallback_playbackrate;var d=a.selectBest([e.collectionvoice.pitch,e.systemvoice.pitch,1]),k=a.selectBest([a.iOS9?1:null,
e.collectionvoice.rate,e.systemvoice.rate,1]),l=a.selectBest([e.collectionvoice.volume,e.systemvoice.volume,1]);null!=f&&(d*=null!=f.pitch?f.pitch:1,k*=null!=f.rate?f.rate:1,l*=null!=f.volume?f.volume:1);d/=2;k/=2;l*=2;d=Math.min(Math.max(d,0),1);k=Math.min(Math.max(k,0),1);l=Math.min(Math.max(l,0),1);d=a.fallbackServicePath+"?t="+encodeURIComponent(h[g])+"&tl="+(e.collectionvoice.lang||e.systemvoice.lang||"en-US")+"&sv="+(e.collectionvoice.service||e.systemvoice.service||"")+"&vn="+(e.collectionvoice.voicename||
e.systemvoice.voicename||"")+"&pitch="+d.toString()+"&rate="+k.toString()+"&vol="+l.toString();k=document.createElement("AUDIO");k.src=d;k.playbackRate=a.fallback_playbackrate;k.preload="auto";k.load();a.fallback_parts.push(k)}else d=new SpeechSynthesisUtterance,d.voice=e.systemvoice,d.voiceURI=e.systemvoice.voiceURI,d.volume=a.selectBest([e.collectionvoice.volume,e.systemvoice.volume,1]),d.rate=a.selectBest([a.iOS9?1:null,e.collectionvoice.rate,e.systemvoice.rate,1]),d.pitch=a.selectBest([e.collectionvoice.pitch,
e.systemvoice.pitch,1]),d.text=h[g],d.lang=a.selectBest([e.collectionvoice.lang,e.systemvoice.lang]),d.rvIndex=g,d.rvTotal=h.length,0==g&&(d.onstart=a.speech_onstart),a.msgparameters.onendcalled=!1,null!=f?(g<h.length-1&&1<h.length?(d.onend=a.onPartEnd,d.hasOwnProperty("addEventListener")&&d.addEventListener("end",a.onPartEnd)):(d.onend=a.speech_onend,d.hasOwnProperty("addEventListener")&&d.addEventListener("end",a.speech_onend)),d.onerror=f.onerror||function(a){console.log("RV: Unknow Error");console.log(a)},
d.onpause=f.onpause,d.onresume=f.onresume,d.onmark=f.onmark,d.onboundary=f.onboundary||a.onboundary,d.pitch=null!=f.pitch?f.pitch:d.pitch,d.rate=a.iOS?(null!=f.rate?f.rate*f.rate:1)*d.rate:(null!=f.rate?f.rate:1)*d.rate,d.volume=null!=f.volume?f.volume:d.volume):(d.onend=a.speech_onend,d.onerror=function(a){console.log("RV: Unknow Error");console.log(a)}),a.utterances.push(d),0==g&&(a.currentMsg=d),console.log(d),a.tts_speak(d);a.fallbackMode&&(a.fallback_part_index=0,a.fallback_startPart())}};a.startTimeout=
function(b,c){var f=a.msgprofile.collectionvoice.timerSpeed;null==a.msgprofile.collectionvoice.timerSpeed&&(f=1);if(!(0>=f)){var h=b.split(/\s+/).length,e=(b.match(/[^ ]/igm)||b).length,f=60/a.WORDS_PER_MINUTE*f*1E3*(e/h/5.1)*h;3>h&&(f=4E3);3E3>f&&(f=3E3);a.timeoutId=setTimeout(c,f)}};a.checkAndCancelTimeout=function(){null!=a.timeoutId&&(clearTimeout(a.timeoutId),a.timeoutId=null)};a.speech_timedout=function(){a.cancel();a.cancelled=!1;a.speech_onend()};a.speech_onend=function(){a.checkAndCancelTimeout();
!0===a.cancelled?a.cancelled=!1:null!=a.msgparameters&&null!=a.msgparameters.onend&&1!=a.msgparameters.onendcalled&&(a.msgparameters.onendcalled=!0,a.msgparameters.onend())};a.speech_onstart=function(){if(!a.onstartFired){a.onstartFired=!0;if(a.iOS||a.is_safari||a.useTimer)a.fallbackMode||a.startTimeout(a.msgtext,a.speech_timedout);a.msgparameters.onendcalled=!1;if(null!=a.msgparameters&&null!=a.msgparameters.onstart)a.msgparameters.onstart()}};a.fallback_startPart=function(){0==a.fallback_part_index&&
a.speech_onstart();a.fallback_audio=a.fallback_parts[a.fallback_part_index];if(null==a.fallback_audio)console.log("RV: Fallback Audio is not available");else{var b=a.fallback_audio;a.fallback_audiopool.push(b);setTimeout(function(){b.playbackRate=a.fallback_playbackrate},50);b.onloadedmetadata=function(){b.play();b.playbackRate=a.fallback_playbackrate};a.fallback_audio.play();a.fallback_audio.addEventListener("ended",a.fallback_finishPart);a.useTimer&&a.startTimeout(a.multipartText[a.fallback_part_index],
a.fallback_finishPart)}};a.fallback_finishPart=function(b){a.checkAndCancelTimeout();a.fallback_part_index<a.fallback_parts.length-1?(a.fallback_part_index++,a.fallback_startPart()):a.speech_onend()};a.cancel=function(){a.checkAndCancelTimeout();a.fallbackMode?(null!=a.fallback_audio&&a.fallback_audio.pause(),a.clearFallbackPool()):(a.cancelled=!0,speechSynthesis.cancel())};a.voiceSupport=function(){return"speechSynthesis"in window};a.OnFinishedPlaying=function(b){if(null!=a.msgparameters&&null!=
a.msgparameters.onend)a.msgparameters.onend()};a.setDefaultVoice=function(b){b=a.getResponsiveVoice(b);null!=b&&(a.default_rv=b)};a.mapRVs=function(){for(var b=0;b<a.responsivevoices.length;b++)for(var c=a.responsivevoices[b],f=0;f<c.voiceIDs.length;f++){var h=a.voicecollection[c.voiceIDs[f]];if(1!=h.fallbackvoice){var e=a.getSystemVoice(h.name);if(null!=e){c.mappedProfile={systemvoice:e,collectionvoice:h};break}}else{c.mappedProfile={systemvoice:{},collectionvoice:h};break}}};a.getMatchedVoice=function(b){for(var c=
0;c<b.voiceIDs.length;c++){var f=a.getSystemVoice(a.voicecollection[b.voiceIDs[c]].name);if(null!=f)return f}return null};a.getSystemVoice=function(b){if("undefined"===typeof a.systemvoices||null===a.systemvoices)return null;for(var c=0;c<a.systemvoices.length;c++)if(a.systemvoices[c].name==b)return a.systemvoices[c];return null};a.getResponsiveVoice=function(b){for(var c=0;c<a.responsivevoices.length;c++)if(a.responsivevoices[c].name==b)return a.responsivevoices[c];return null};a.Dispatch=function(b){if(a.hasOwnProperty(b+
"_callbacks")&&null!=a[b+"_callbacks"]&&0<a[b+"_callbacks"].length){for(var c=a[b+"_callbacks"],f=0;f<c.length;f++)c[f]();return!0}var h=b+"_callbacks_timeout",e=b+"_callbacks_timeoutCount";a.hasOwnProperty(h)||(a[e]=10,a[h]=setInterval(function(){--a[e];(a.Dispatch(b)||0>a[e])&&clearTimeout(a[h])},50));return!1};a.AddEventListener=function(b,c){a.hasOwnProperty(b+"_callbacks")||(a[b+"_callbacks"]=[]);a[b+"_callbacks"].push(c)};a.addEventListener=a.AddEventListener;a.clickEvent=function(){if(a.iOS&&
!a.iOS_initialized){console.log("Initializing iOS click event");var b=new SpeechSynthesisUtterance(" ");speechSynthesis.speak(b);a.iOS_initialized=!0}};a.isPlaying=function(){return a.fallbackMode?null!=a.fallback_audio&&!a.fallback_audio.ended&&!a.fallback_audio.paused:speechSynthesis.speaking};a.clearFallbackPool=function(){for(var b=0;b<a.fallback_audiopool.length;b++)null!=a.fallback_audiopool[b]&&(a.fallback_audiopool[b].pause(),a.fallback_audiopool[b].src="");a.fallback_audiopool=[]};"complete"===
document.readyState?a.init():document.addEventListener("DOMContentLoaded",function(){a.init()});a.selectBest=function(a){for(var c=0;c<a.length;c++)if(null!=a[c])return a[c];return null};a.pause=function(){a.fallbackMode?null!=a.fallback_audio&&a.fallback_audio.pause():speechSynthesis.pause()};a.resume=function(){a.fallbackMode?null!=a.fallback_audio&&a.fallback_audio.play():speechSynthesis.resume()};a.tts_speak=function(b){setTimeout(function(){a.cancelled=!1;speechSynthesis.speak(b)},.01)};a.setVolume=
function(b){if(a.isPlaying())if(a.fallbackMode){for(var c=0;c<a.fallback_parts.length;c++)a.fallback_parts[c].volume=b;for(c=0;c<a.fallback_audiopool.length;c++)a.fallback_audiopool[c].volume=b;a.fallback_audio.volume=b}else for(c=0;c<a.utterances.length;c++)a.utterances[c].volume=b};a.onPartEnd=function(b){if(null!=a.msgparameters&&null!=a.msgparameters.onchuckend)a.msgparameters.onchuckend();a.Dispatch("OnPartEnd");b=a.utterances.indexOf(b.utterance);a.currentMsg=a.utterances[b+1]};a.onboundary=
function(b){console.log("On Boundary");a.iOS&&!a.onstartFired&&a.speech_onstart()}},responsiveVoice=new ResponsiveVoice;

/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.6",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.6",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.6",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.6",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.6",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.6",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");
d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.6",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);

(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.nlp_compromise = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//these are common word shortenings used in the lexicon and sentence segmentation methods
//there are all nouns, or at the least, belong beside one.
'use strict';

var honourifics = require('./honourifics'); //stored seperately, for 'noun.is_person()'

//common abbreviations
var main = ['arc', 'al', 'exp', 'rd', 'st', 'dist', 'mt', 'fy', 'pd', 'pl', 'plz', 'tce', 'llb', 'md', 'bl', 'ma', 'ba', 'lit', 'ex', 'eg', 'ie', 'circa', 'ca', 'cca', 'vs', 'etc', 'esp', 'ft', 'bc', 'ad'];

//person titles like 'jr', (stored seperately)
main = main.concat(honourifics);

//org main
var orgs = ['dept', 'univ', 'assn', 'bros', 'inc', 'ltd', 'co', 'corp',
//proper nouns with exclamation marks
'yahoo', 'joomla', 'jeopardy'];
main = main.concat(orgs);

//place main
var places = ['ariz', 'cal', 'calif', 'col', 'colo', 'conn', 'fla', 'fl', 'ga', 'ida', 'ia', 'kan', 'kans', 'md', 'minn', 'neb', 'nebr', 'okla', 'penna', 'penn', 'pa', 'dak', 'tenn', 'tex', 'ut', 'vt', 'va', 'wis', 'wisc', 'wy', 'wyo', 'usafa', 'alta', 'ont', 'que', 'sask', 'ave', 'blvd', 'cl', 'ct', 'cres', 'hwy'];
main = main.concat(places);

//date abbrevs.
//these are added seperately because they are not nouns
var dates = ['jan', 'feb', 'mar', 'apr', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec', 'sept', 'sep'];
main = main.concat(dates);

module.exports = {
  abbreviations: main,
  dates: dates,
  orgs: orgs,
  places: places
};

},{"./honourifics":9}],2:[function(require,module,exports){
//adjectives that either aren't covered by rules, or have superlative/comparative forms
//this list is the seed, from which various forms are conjugated
'use strict';

var fns = require('../fns');

//suffix-index adjectives
//  {cial:'cru,spe'} -> 'crucial', 'special'
var compressed = {
  erate: 'degen,delib,desp,lit,mod',
  icial: 'artif,benef,off,superf',
  ntial: 'esse,influe,pote,substa',
  teful: 'gra,ha,tas,was',
  stant: 'con,di,in,resi',
  going: 'easy,fore,on,out',
  hing: 'astonis,das,far-reac,refres,scat,screec,self-loat,soot',
  eful: 'car,grac,peac,sham,us,veng',
  ming: 'alar,cal,glea,unassu,unbeco,upco',
  cial: 'commer,cru,finan,ra,so,spe',
  tful: 'deligh,doub,fre,righ,though,wis',
  ight: 'overn,overwe,r,sl,upt',
  ated: 'antiqu,intoxic,sophistic,unregul,unrel',
  rant: 'aber,exube,flag,igno,vib',
  uent: 'congr,fl,freq,subseq',
  rate: 'accu,elabo,i,sepa',
  ific: 'horr,scient,spec,terr',
  rary: 'arbit,contempo,cont,tempo',
  ntic: 'authe,fra,giga,roma',
  wing: 'harro,kno,left-,right-',
  nant: 'domi,malig,preg,reso',
  nent: 'emi,immi,perma,promi',
  iant: 'brill,def,g,luxur',
  ging: 'dama,encoura,han,lon',
  iate: 'appropr,immed,inappropr,intermed',
  rect: 'cor,e,incor,indi',
  zing: 'agoni,ama,appeti,free',
  ant: 'abund,arrog,eleg,extravag,exult,hesit,irrelev,miscre,nonchal,obeis,observ,pl,pleas,redund,relev,reluct,signific,vac,verd',
  ing: 'absorb,car,coo,liv,lov,ly,menac,perplex,shock,stand,surpris,tell,unappeal,unconvinc,unend,unsuspect,vex,want',
  ate: 'adequ,delic,fortun,inadequ,inn,intim,legitim,priv,sed,ultim',
  ted: 'expec,impor,limi,spiri,talen,tes,unexpec,unpreceden',
  ish: 'dan,fool,hell,lout,self,snobb,squeam,styl',
  ary: 'dre,legend,necess,prim,sc,second,w,we',
  ite: 'el,favor,fin,oppos,pet,pol,recond,tr',
  ely: 'hom,lik,liv,lon,lov,tim,unlik',
  ure: 'fut,insec,miniat,obsc,premat,sec,s',
  tly: 'cos,ghas,ghos,nigh,sain,sprigh,unsigh',
  dly: 'cowar,cud,frien,frien,kin,ma',
  ble: 'a,dou,hum,nim,no,proba',
  rly: 'bu,disorde,elde,hou,neighbo,yea',
  ine: 'div,femin,genu,mascul,prist,rout',
  ute: 'absol,ac,c,m,resol',
  ped: 'cram,pum,stereoty,stri,war',
  sed: 'clo,disea,distres,unsupervi,u',
  lly: 'chi,hi,jo,si,sme',
  per: 'dap,impro,pro,su,up',
  ile: 'fert,host,juven,mob,volat',
  led: 'detai,disgrunt,fab,paralle,troub',
  ern: 'east,north,south,st,west',
  ast: 'e,l,p,steadf',
  ent: 'abs,appar,b,pres',
  ged: 'dama,deran,jag,rag',
  ded: 'crow,guar,retar,undeci',
  est: 'b,dishon,hon,quick',
  ial: 'colon,impart,init,part',
  ter: 'bet,lat,ou,ut',
  ond: 'bey,bl,sec,vagab',
  ady: 'he,re,sh,ste',
  eal: 'ether,id,r,surr',
  ard: 'abo,awkw,stand,straightforw',
  ior: 'jun,pr,sen,super',
  ale: 'fem,m,upsc,wholes',
  ed: 'advanc,belov,craz,determin,hallow,hook,inbr,justifi,nak,nuanc,sacr,subdu,unauthoriz,unrecogniz,wick',
  ly: 'dai,deep,earth,gris,heaven,low,meas,melancho,month,oi,on,prick,seem,s,ug,unru,week,wi,woman',
  al: 'actu,coloss,glob,illeg,leg,leth,liter,loy,ov,riv,roy,univers,usu',
  dy: 'baw,bloo,clou,gau,gid,han,mol,moo,stur,ti,tren,unti,unwiel',
  se: 'adver,den,diver,fal,immen,inten,obe,perver,preci,profu',
  er: 'clev,form,inn,oth,ov,she,slend,somb,togeth,und',
  id: 'afra,hum,langu,plac,rab,sord,splend,stup,torp',
  re: 'awa,bizar,di,enti,macab,me,seve,since,spa',
  en: 'barr,brok,crav,op,sudd,unev,unwritt,wood',
  ic: 'alcohol,didact,gener,hispan,organ,publ,symbol',
  ny: 'ma,pho,pu,shi,skin,ti,za',
  st: 'again,mo,populi,raci,robu,uttermo',
  ne: 'do,go,insa,obsce,picayu,sere',
  nd: 'behi,bla,bli,profou,undergrou,wou',
  le: 'midd,multip,sing,so,subt,who',
  pt: 'abru,ade,a,bankru,corru,nondescri',
  ty: 'faul,hef,lof,mea,sal,uppi',
  sy: 'bu,chee,lou,no,ro',
  ct: 'abstra,exa,imperfe,inta,perfe',
  in: 'certa,highfalut,ma,tw,va',
  et: 'discre,secr,sovi,ups,viol',
  me: 'part-ti,pri,sa,supre,welco',
  cy: 'boun,fan,i,jui,spi',
  ry: 'fur,sor,tawd,wi,w',
  te: 'comple,concre,obsole,remo',
  ld: 'ba,bo,go,mi',
  an: 'deadp,republic,t,urb',
  ll: 'a,i,overa,sti',
  ay: 'everyd,g,gr,ok',
  or: 'indo,maj,min,outdo',
  my: 'foa,gloo,roo,sli',
  ck: 'ba,qua,si,sli',
  rt: 'cove,expe,hu,ove',
  ul: 'fo,gainf,helpf,painf'
};

var arr = ['ablaze', 'above', 'adult', 'ahead', 'aloof', 'arab', 'asleep', 'average', 'awake', 'backwards', 'bad', 'blank', 'bogus', 'bottom', 'brisk', 'cagey', 'chief', 'civil', 'common', 'complex', 'cozy', 'crisp', 'deaf', 'devout', 'difficult', 'downtown', 'due', 'dumb', 'eerie', 'evil', 'excess', 'extra', 'fake', 'far', 'faux', 'fierce ', 'fit', 'foreign', 'fun', 'good', 'goofy', 'gratis', 'grey', 'groovy', 'gross', 'half', 'huge', 'humdrum', 'inside', 'kaput',
//  'lax', -> airports
'left', 'less', 'level', 'lewd', 'magenta', 'makeshift', 'mammoth', 'medium', 'moot', 'naive', 'nearby', 'next', 'nonstop', 'north', 'offbeat', 'ok', 'outside', 'overwrought', 'premium', 'pricey', 'pro', 'quaint', 'random', 'rear', 'rebel', 'ritzy', 'rough', 'savvy', 'sexy', 'shut', 'shy', 'sleek', 'smug', 'solemn', 'south', 'stark', 'superb', 'taboo', 'teenage', 'top', 'tranquil', 'ultra', 'understood', 'unfair', 'unknown', 'upbeat', 'upstairs', 'vanilla', 'various', 'widespread', 'woozy', 'wrong', 'final', 'true', 'modern', 'notable'];

module.exports = fns.expand_suffixes(arr, compressed);

},{"../fns":23}],3:[function(require,module,exports){
'use strict';

//these are adjectives that can become comparative + superlative with out "most/more"
//its a whitelist for conjugation
//this data is shared between comparative/superlative methods
module.exports = ['absurd', 'aggressive', 'alert', 'alive', 'awesome', 'beautiful', 'big', 'bitter', 'black', 'blue', 'bored', 'boring', 'brash', 'brave', 'brief', 'bright', 'broad', 'brown', 'calm', 'charming', 'cheap', 'clean', 'cold', 'cool', 'cruel', 'cute', 'damp', 'deep', 'dear', 'dead', 'dark', 'dirty', 'drunk', 'dull', 'eager', 'efficient', 'even', 'faint', 'fair', 'fanc', 'fast', 'fat', 'feeble', 'few', 'fierce', 'fine', 'flat', 'forgetful', 'frail', 'full', 'gentle', 'glib', 'great', 'green', 'gruesome', 'handsome', 'hard', 'harsh', 'high', 'hollow', 'hot', 'impolite', 'innocent', 'keen', 'kind', 'lame', 'lean', 'light', 'little', 'loose', 'long', 'loud', 'low', 'lush', 'macho', 'mean', 'meek', 'mellow', 'mundane', 'near', 'neat', 'new', 'nice', 'normal', 'odd', 'old', 'pale', 'pink', 'plain', 'poor', 'proud', 'purple', 'quick', 'rare', 'rapid', 'red', 'rich', 'ripe', 'rotten', 'round', 'rude', 'sad', 'safe', 'scarce', 'scared', 'shallow', 'sharp', 'short', 'shrill', 'simple', 'slim', 'slow', 'small', 'smart', 'smooth', 'soft', 'sore', 'sour', 'square', 'stale', 'steep', 'stiff', 'straight', 'strange', 'strong', 'sweet', 'swift', 'tall', 'tame', 'tart', 'tender', 'tense', 'thick', 'thin', 'tight', 'tough', 'vague', 'vast', 'vulgar', 'warm', 'weak', 'wet', 'white', 'wide', 'wild', 'wise', 'young', 'yellow', 'easy', 'narrow', 'late', 'early', 'soon', 'close', 'empty', 'dry', 'windy', 'noisy', 'thirsty', 'hungry', 'fresh', 'quiet', 'clear', 'heavy', 'happy', 'funny', 'lucky', 'pretty', 'important', 'interesting', 'attractive', 'dangerous', 'intellegent', 'pure', 'orange', 'large', 'firm', 'grand', 'formal', 'raw', 'weird', 'glad', 'mad', 'strict', 'tired', 'solid', 'extreme', 'mature', 'true', 'free', 'curly', 'angry'].reduce(function (h, s) {
  h[s] = 'Adjective';
  return h;
}, {});

},{}],4:[function(require,module,exports){
'use strict';

module.exports = [
//some most-common iso-codes (most are too ambiguous)
'usd', 'cad', 'aud', 'gbp', 'krw', 'inr', 'hkd', 'dkk', 'cny', 'xaf', 'xof', 'eur', 'jpy',
//some common, unambiguous currency names
'denar', 'dobra', 'forint', 'kwanza', 'kyat', 'lempira', 'pound sterling', 'riel', 'yen', 'zloty',
//colloquial currency names
'dollar', 'cent', 'penny', 'dime', 'dinar', 'euro', 'lira', 'pound', 'pence', 'peso', 'sterling', 'rand', 'rouble', 'shekel', 'sheqel', 'yuan', 'franc', 'rupee', 'shilling', 'krona', 'dirham', 'bitcoin',
// 'real',
//currency symbols
'€', '$', '¥', '£', 'лв', '₡', 'kn', 'kr', '¢', 'Ft', 'Rp', '﷼', '₭', 'ден', '₨', 'zł', 'lei', 'руб', '฿'];

},{}],5:[function(require,module,exports){
'use strict';
//terms that are 'Date' term

var months = ['january', 'february',
// "march",  //ambig
'april',
// "may",   //ambig
'june', 'july', 'august', 'september', 'october', 'november', 'december', 'jan', 'feb', 'mar', 'apr', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec', 'sept', 'sep'];
var days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday', 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];
//add 'mondays'
for (var i = 0; i <= 6; i++) {
  days.push(days[i] + 's');
}

var durations = ['millisecond', 'second', 'minute', 'hour', 'morning', 'afternoon', 'evening', 'night', 'day', 'week', 'month', 'year', 'decade'];
//add their plurals
var len = durations.length;
for (var i = 0; i < len; i++) {
  durations.push(durations[i] + 's');
}
durations.push('century');
durations.push('centuries');

var relative = ['yesterday', 'today', 'tomorrow', 'week', 'weekend', 'tonight'];

module.exports = {
  days: days,
  months: months,
  durations: durations,
  relative: relative
};

},{}],6:[function(require,module,exports){
'use strict';

//adjectival forms of place names, as adjectives.
module.exports = ['afghan', 'albanian', 'algerian', 'angolan', 'argentine', 'armenian', 'australian', 'aussie', 'austrian', 'bangladeshi', 'belarusian', 'belgian', 'bolivian', 'bosnian', 'brazilian', 'bulgarian', 'cambodian', 'cameroonian', 'canadian', 'chadian', 'chilean', 'chinese', 'colombian', 'congolese', 'croatian', 'cuban', 'czech', 'dominican', 'danish', 'egyptian', 'british', 'estonian', 'ethiopian', 'ecuadorian', 'finnish', 'french', 'gambian', 'georgian', 'german', 'greek', 'ghanaian', 'guatemalan', 'haitian', 'hungarian', 'honduran', 'icelandic', 'indian', 'indonesian', 'iranian', 'iraqi', 'irish', 'israeli', 'italian', 'ivorian', // of Ivory Coast
'jamaican', 'japanese', 'jordanian', 'kazakh', 'kenyan', 'korean', 'kuwaiti', 'lao', // of Laos
'latvian', 'lebanese', 'liberian', 'libyan', 'lithuanian', 'namibian', 'malagasy', // of Madagascar
'macedonian', 'malaysian', 'mexican', 'mongolian', 'moroccan', 'dutch', 'nicaraguan', 'nigerian', // of Nigeria
'nigerien', // of Niger
'norwegian', 'omani', 'panamanian', 'paraguayan', 'pakistani', 'palestinian', 'peruvian', 'philippine', 'filipino', 'polish', 'portuguese', 'qatari', 'romanian', 'russian', 'rwandan', 'samoan', 'saudi', 'scottish', 'senegalese', 'serbian', 'singaporean', 'slovak', 'somalian', 'sudanese', 'swedish', 'swiss', 'syrian', 'taiwanese', 'trinidadian', 'thai', 'tunisian', 'turkmen', 'ugandan', 'ukrainian', 'american', 'hindi', 'spanish', 'venezuelan', 'vietnamese', 'welsh', 'zambian', 'zimbabwean', 'english', 'african', 'european', 'asian', 'californian'];

},{}],7:[function(require,module,exports){
// common first-names in compressed form.
// from http://www.ssa.gov/oact/babynames/limits.html  and http://www.servicealberta.gov.ab.ca/pdf/vs/2001_Boys.pdf
// not sure what regional/cultural/demographic bias this has. Probably a lot.
// 73% of people are represented in the top 1000 names

// used to reduce redundant named-entities in longer text. (don't spot the same person twice.)
// used to identify gender for coreference resolution
'use strict';

var male = require('./names/male');
var female = require('./names/female');
var names = {};

//names commonly used in either gender
var ambiguous = ['casey', 'jamie', 'lee', 'jaime', 'jessie', 'morgan', 'rene', 'robin', 'devon', 'kerry', 'alexis', 'guadalupe', 'blair', 'kasey', 'jean', 'marion', 'aubrey', 'shelby', 'jan', 'shea', 'jade', 'kenyatta', 'kelsey', 'shay', 'lashawn', 'trinity', 'regan', 'jammie', 'cassidy', 'cheyenne', 'reagan', 'shiloh', 'marlo', 'andra', 'devan', 'rosario', 'lee'];
for (var i = 0; i < male.length; i++) {
  names[male[i]] = 'm';
}
for (var i = 0; i < female.length; i++) {
  names[female[i]] = 'f';
}
//ambiguous/unisex names
for (var i = 0; i < ambiguous.length; i += 1) {
  names[ambiguous[i]] = 'a';
}
// console.log(names['spencer']);
// console.log(names['jill']);
// console.log(names['sue'])
// console.log(names['jan'])
module.exports = names;

},{"./names/female":14,"./names/male":15}],8:[function(require,module,exports){
'use strict';

var fns = require('../fns');
//turns holiday-names into text-versions of their dates
//https://en.wikipedia.org/wiki/federal_holidays_in_the_united_states

//some major, and unambiguous holidays with the same date each year
var annual = {
  //general
  'new years eve': 'december 31',
  'new years': 'january 1',
  'new years day': 'january 1',
  'thanksgiving': 'fourth thursday in november',
  'christmas eve': 'december 24',
  'christmas': 'december 25',
  'christmas day': 'december 25',
  'saint patricks day': 'march 17',
  'st patricks day': 'march 17',
  'april fools': 'april 1',
  'halloween': 'october 31',
  'valentines': 'february 14',
  'valentines day': 'february 14',

  //american
  'martin luther king': 'third monday in january',
  'inauguration day': 'january 20',
  'washingtons birthday': 'third monday in february',
  'presidents day': 'third monday in february',
  'memorial day': 'last monday in may',
  // 'independence': 'july 4',
  'labor day': 'first monday in september',
  'columbus day': 'second monday in october',
  'veterans day': 'november 11',

  //british
  'labour day': 'first monday in september',
  'commonwealth day': 'second monday in march',
  'st andrews day': 'november 30',
  'saint andrews day': 'november 30',
  'may day': 'may 1',

  //russian
  'russia day': 'june 12',

  //australian
  'australia day': 'january 26',
  'boxing day': 'december 26',
  'queens birthday': '2nd monday in june',

  //canadian
  'canada day': 'july 1',
  'victoria day': 'may 24',
  'canadian thanksgiving': 'second monday in october',
  'rememberance day': 'november 11',
  'august civic holiday': 'first monday in august',
  'natal day': 'first monday in august',

  //european
  'all saints day': 'november 1',
  'armistice day': 'november 11',
  'bastille day': 'july 14',
  'st stephens day': 'december 26',
  'saint stephens day': 'december 26'
};

// hardcoded dates for non-regular holidays
//   ----change every few years(!)---   TODO :do more years
var astronomical = {
  2015: {
    'chinese new year': 'february 19',
    'easter': 'april 5',
    'easter sunday': 'april 5',
    'easter monday': 'april 6',
    'good friday': 'april 3',
    'ascension day': 'may 14',
    'eid': 'july 17',
    'eid al-fitr': 'july 17',
    'eid al-adha': 'september 24',
    'ramadan': 'june 6', //range
    'ashura': '23 october',
    'diwali': '11 november'
  },
  2016: {
    'chinese new year': 'february 8',
    'easter': 'march 27',
    'easter sunday': 'march 27',
    'easter monday': 'march 28',
    'good friday': 'march 25',
    'ascension day': 'may 5',
    'eid': 'july 6',
    'eid al-fitr': 'july 6',
    'eid al-adha': 'september 11',
    'ramadan': 'may 27',
    'diwali': 'october 30'
  },
  2017: {
    'chinese new year': '28 january',
    'easter': 'april 16',
    'easter sunday': 'april 16',
    'easter monday': 'april 17',
    'good friday': 'april 14',
    'ascension day': 'may 25',
    'eid': 'july 25',
    'eid al-fitr': 'july 25',
    'diwali': 'october 21',
    'ramadan': 'may 27'
  }
};
//select current year
var thisYear = new Date().getFullYear();
var holidays = fns.extend(annual, astronomical[thisYear] || {});

module.exports = holidays;

},{"../fns":23}],9:[function(require,module,exports){
'use strict';

//these are common person titles used in the lexicon and sentence segmentation methods
//they are also used to identify that a noun is a person
module.exports = [
//honourifics
'jr', 'mr', 'mrs', 'ms', 'dr', 'prof', 'sr', 'sen', 'corp', 'rep', 'gov', 'atty', 'supt', 'det', 'rev', 'col', 'gen', 'lt', 'cmdr', 'adm', 'capt', 'sgt', 'cpl', 'maj',
// 'miss',
// 'misses',
'mister', 'sir', 'esq', 'mstr', 'phd', 'adj', 'adv', 'asst', 'bldg', 'brig', 'comdr', 'hon', 'messrs', 'mlle', 'mme', 'op', 'ord', 'pvt', 'reps', 'res', 'sens', 'sfc', 'surg'];

},{}],10:[function(require,module,exports){
//nouns with irregular plural/singular forms
//used in noun.inflect, and also in the lexicon.
//compressed with '_' to reduce some redundancy.
'use strict';

var main = [['child', '_ren'], ['person', 'people'], ['leaf', 'leaves'], ['database', '_s'], ['quiz', '_zes'], ['stomach', '_s'], ['sex', '_es'], ['move', '_s'], ['shoe', '_s'], ['goose', 'geese'], ['phenomenon', 'phenomena'], ['barracks', '_'], ['deer', '_'], ['syllabus', 'syllabi'], ['index', 'indices'], ['appendix', 'appendices'], ['criterion', 'criteria'], ['man', 'men'], ['sex', '_es'], ['rodeo', '_s'], ['epoch', '_s'], ['zero', '_s'], ['avocado', '_s'], ['halo', '_s'], ['tornado', '_s'], ['tuxedo', '_s'], ['sombrero', '_s'], ['addendum', 'addenda'], ['alga', '_e'], ['alumna', '_e'], ['alumnus', 'alumni'], ['bacillus', 'bacilli'], ['cactus', 'cacti'], ['beau', '_x'], ['château', '_x'], ['chateau', '_x'], ['tableau', '_x'], ['corpus', 'corpora'], ['curriculum', 'curricula'], ['echo', '_es'], ['embargo', '_es'], ['foot', 'feet'], ['genus', 'genera'], ['hippopotamus', 'hippopotami'], ['larva', '_e'], ['libretto', 'libretti'], ['loaf', 'loaves'], ['matrix', 'matrices'], ['memorandum', 'memoranda'], ['mosquito', '_es'], ['opus', 'opera'], ['ovum', 'ova'], ['ox', '_en'], ['radius', 'radii'], ['referendum', 'referenda'], ['thief', 'thieves'], ['tooth', 'teeth']];

main = main.map(function (a) {
  a[1] = a[1].replace('_', a[0]);
  return a;
});

module.exports = main;

},{}],11:[function(require,module,exports){
'use strict';

//a list of exceptions to the verb rules
var irregular_verbs = {
  take: {
    perfect: 'have taken',
    pluperfect: 'had taken',
    future_perfect: 'will have taken'
  },
  free: {
    gerund: 'freeing',
    actor: ''
  },
  arise: {
    past: 'arose',
    participle: 'arisen'
  },
  babysit: {
    past: 'babysat',
    actor: 'babysitter'
  },
  be: { // this is crazy-hard and shouldn't be here
    past: 'was',
    present: 'is',
    future: 'will be',
    perfect: 'have been',
    pluperfect: 'had been',
    future_perfect: 'will have been',
    actor: '',
    gerund: 'am'
  },
  is: {
    past: 'was',
    present: 'is',
    future: 'will be',
    perfect: 'have been',
    pluperfect: 'had been',
    future_perfect: 'will have been',
    actor: '',
    gerund: 'being'
  },
  beat: {
    gerund: 'beating',
    actor: 'beater'
  },
  begin: {
    gerund: 'beginning',
    past: 'began'
  },
  bet: {
    actor: 'better'
  },
  bind: {
    past: 'bound'
  },
  bite: {
    gerund: 'biting',
    past: 'bit'
  },
  bleed: {
    past: 'bled'
  },
  break: {
    past: 'broke'
  },
  breed: {
    past: 'bred'
  },
  bring: {
    past: 'brought'
  },
  broadcast: {
    past: 'broadcast'
  },
  build: {
    past: 'built'
  },
  buy: {
    past: 'bought'
  },
  catch: {
    past: 'caught'
  },
  choose: {
    gerund: 'choosing',
    past: 'chose'
  },
  cost: {
    past: 'cost'
  },
  deal: {
    past: 'dealt'
  },
  die: {
    past: 'died',
    gerund: 'dying'
  },
  dig: {
    gerund: 'digging',
    past: 'dug'
  },
  do: {
    past: 'did',
    present: 'does'
  },
  draw: {
    past: 'drew'
  },
  drink: {
    past: 'drank'
  },
  drive: {
    gerund: 'driving',
    past: 'drove'
  },
  eat: {
    gerund: 'eating',
    past: 'ate',
    actor: 'eater'
  },
  fall: {
    past: 'fell'
  },
  feed: {
    past: 'fed'
  },
  feel: {
    past: 'felt',
    actor: 'feeler'
  },
  fight: {
    past: 'fought'
  },
  find: {
    past: 'found'
  },
  fly: {
    past: 'flew'
  },
  forbid: {
    past: 'forbade'
  },
  forget: {
    gerund: 'forgeting',
    past: 'forgot'
  },
  forgive: {
    gerund: 'forgiving',
    past: 'forgave'
  },
  freeze: {
    gerund: 'freezing',
    past: 'froze'
  },
  get: {
    past: 'got'
  },
  give: {
    gerund: 'giving',
    past: 'gave'
  },
  go: {
    past: 'went',
    present: 'goes'
  },
  hang: {
    past: 'hung'
  },
  have: {
    gerund: 'having',
    past: 'had',
    present: 'has'
  },
  hear: {
    past: 'heard'
  },
  hide: {
    past: 'hid'
  },
  hold: {
    past: 'held'
  },
  hurt: {
    past: 'hurt'
  },
  lay: {
    past: 'laid'
  },
  lead: {
    past: 'led'
  },
  leave: {
    past: 'left'
  },
  lie: {
    gerund: 'lying',
    past: 'lay'
  },
  light: {
    past: 'lit'
  },
  lose: {
    gerund: 'losing',
    past: 'lost'
  },
  make: {
    past: 'made'
  },
  mean: {
    past: 'meant'
  },
  meet: {
    gerund: 'meeting',
    past: 'met',
    actor: 'meeter'
  },
  pay: {
    past: 'paid'
  },
  read: {
    past: 'read'
  },
  ring: {
    past: 'rang'
  },
  rise: {
    past: 'rose'
  },
  run: {
    gerund: 'running',
    past: 'ran'
  },
  say: {
    past: 'said'
  },
  see: {
    past: 'saw'
  },
  sell: {
    past: 'sold'
  },
  shine: {
    past: 'shone'
  },
  shoot: {
    past: 'shot'
  },
  show: {
    past: 'showed'
  },
  sing: {
    past: 'sang'
  },
  sink: {
    past: 'sank',
    pluperfect: 'had sunk'
  },
  sit: {
    past: 'sat'
  },
  slide: {
    past: 'slid'
  },
  speak: {
    past: 'spoke',
    perfect: 'have spoken',
    pluperfect: 'had spoken',
    future_perfect: 'will have spoken'
  },
  spin: {
    gerund: 'spinning',
    past: 'spun'
  },
  spread: {
    past: 'spread'
  },
  stand: {
    past: 'stood'
  },
  steal: {
    past: 'stole',
    actor: 'stealer'
  },
  stick: {
    past: 'stuck'
  },
  sting: {
    past: 'stung'
  },
  stream: {
    actor: 'streamer'
  },
  strike: {
    gerund: 'striking',
    past: 'struck'
  },
  swear: {
    past: 'swore'
  },
  swim: {
    past: 'swam'
  },
  swing: {
    past: 'swung'
  },
  teach: {
    past: 'taught',
    present: 'teaches'
  },
  tear: {
    past: 'tore'
  },
  tell: {
    past: 'told'
  },
  think: {
    past: 'thought'
  },
  understand: {
    past: 'understood'
  },
  wake: {
    past: 'woke'
  },
  wear: {
    past: 'wore'
  },
  win: {
    gerund: 'winning',
    past: 'won'
  },
  withdraw: {
    past: 'withdrew'
  },
  write: {
    gerund: 'writing',
    past: 'wrote'
  },
  tie: {
    gerund: 'tying',
    past: 'tied'
  },
  ski: {
    past: 'skiied'
  },
  boil: {
    actor: 'boiler'
  },
  miss: {
    present: 'miss'
  },
  act: {
    actor: 'actor'
  },
  compete: {
    gerund: 'competing',
    past: 'competed',
    actor: 'competitor'
  },
  being: {
    gerund: 'are',
    past: 'were',
    present: 'are'
  },
  imply: {
    past: 'implied',
    present: 'implies'
  },
  ice: {
    gerund: 'icing',
    past: 'iced'
  },
  develop: {
    past: 'developed',
    actor: 'developer',
    gerund: 'developing'
  },
  wait: {
    gerund: 'waiting',
    past: 'waited',
    actor: 'waiter'
  },
  aim: {
    actor: 'aimer'
  },
  spill: {
    past: 'spilt'
  },
  drop: {
    gerund: 'dropping',
    past: 'dropped'
  },
  log: {
    gerund: 'logging',
    past: 'logged'
  },
  rub: {
    gerund: 'rubbing',
    past: 'rubbed'
  },
  smash: {
    present: 'smashes'
  },
  suit: {
    gerund: 'suiting',
    past: 'suited',
    actor: 'suiter'
  }
};
module.exports = irregular_verbs;

},{}],12:[function(require,module,exports){
'use strict';

var misc = {
  'there': 'NN',
  'here': 'JJ',

  'better': 'JJR',
  'earlier': 'JJR',

  'has': 'VB',
  'sounds': 'VBZ',
  //special case for took/taken
  'taken': 'VBD',
  'msg': 'VB', //slang
  //date
  'noon': 'DA',
  'midnight': 'DA',
  //errr....
  'now': 'DA',
  'morning': 'DA',
  'evening': 'DA',
  'afternoon': 'DA',
  'ago': 'DA',
  //end of day, end of month
  'eod': 'DA',
  'eom': 'DA',
  'number': 'NN',
  'system': 'NN',
  'example': 'NN',
  'part': 'NN',
  'house': 'NN'
};

var compact = {
  //conjunctions
  'CC': ['yet', 'therefore', 'or', 'while', 'nor', 'whether', 'though', 'because', 'cuz', 'but', 'for', 'and', 'however', 'before', 'although', 'how', 'plus', 'versus', 'not'],
  'CO': ['if', 'unless', 'otherwise', 'notwithstanding'],

  'VBD': ['said', 'had', 'been', 'began', 'came', 'did', 'meant', 'went'],

  'VBN': ['given', 'known', 'shown', 'seen', 'born'],

  'VBG': ['going', 'being', 'according', 'resulting', 'developing', 'staining'],

  //copula
  'CP': ['is', 'will be', 'are', 'was', 'were', 'am', 'isn\'t', 'ain\'t', 'aren\'t'],

  //determiners
  'DT': ['this', 'any', 'enough', 'each', 'whatever', 'every', 'which', 'these', 'another', 'plenty', 'whichever', 'neither', 'an', 'a', 'least', 'own', 'few', 'both', 'those', 'the', 'that', 'various', 'what', 'either', 'much', 'some', 'else', 'no',
  //some other languages (what could go wrong?)
  'la', 'le', 'les', 'des', 'de', 'du', 'el'],

  //prepositions
  'IN': ['until', 'onto', 'of', 'into', 'out', 'except', 'across', 'by', 'between', 'at', 'down', 'as', 'from', 'around', 'with', 'among', 'upon', 'amid', 'to', 'along', 'since', 'about', 'off', 'on', 'within', 'in', 'during', 'per', 'without', 'throughout', 'through', 'than', 'via', 'up', 'unlike', 'despite', 'below', 'unless', 'towards', 'besides', 'after', 'whereas', '\'o', 'amidst', 'amongst', 'apropos', 'atop', 'barring', 'chez', 'circa', 'mid', 'midst', 'notwithstanding', 'qua', 'sans', 'vis-a-vis', 'thru', 'till', 'versus', 'without', 'w/o', 'o\'', 'a\''],

  //modal verbs
  'MD': ['can', 'may', 'could', 'might', 'will', 'ought to', 'would', 'must', 'shall', 'should', 'ought', 'shant', 'lets'],

  //arguable
  //Possessive pronouns
  'PP': ['mine', 'something', 'none', 'anything', 'anyone', 'theirs', 'himself', 'ours', 'his', 'my', 'their', 'yours', 'your', 'our', 'its', 'herself', 'hers', 'themselves', 'myself', 'itself', 'her', //this one is pretty ambiguous
  'who', 'whom', 'whose'],

  //personal pronouns (nouns)
  'PRP': ['it', 'they', 'i', 'them', 'you', 'she', 'me', 'he', 'him', 'ourselves', 'us', 'we', 'thou', 'il', 'elle', 'yourself', '\'em', 'he\'s', 'she\'s'],

  //some manual adverbs (the rest are generated)
  'RB': [
  // 'now',
  'again', 'already', 'soon', 'directly', 'toward', 'forever', 'apart', 'instead', 'yes', 'alone', 'indeed', 'ever', 'quite', 'perhaps', 'where', 'then', 'thus', 'very', 'often', 'once', 'never', 'why', 'when', 'away', 'always', 'sometimes', 'also', 'maybe', 'so', 'just', 'well', 'several', 'such', 'randomly', 'too', 'rather', 'abroad', 'almost', 'anyway', 'twice', 'aside', 'moreover', 'anymore', 'newly', 'damn', 'somewhat', 'somehow', 'meanwhile', 'hence', 'further', 'furthermore', 'more', 'way', 'kinda', 'totally'],

  // 'notably',
  //interjections, expressions
  'EX': ['uh', 'uhh', 'uh huh', 'uh-oh', 'please', 'ugh', 'sheesh', 'eww', 'pff', 'voila', 'oy', 'hi', 'hello', 'bye', 'goodbye', 'hey', 'hai', 'eep', 'hurrah', 'yuck', 'ow', 'duh', 'oh', 'hmm', 'yeah', 'whoa', 'ooh', 'whee', 'ah', 'bah', 'gah', 'yaa', 'phew', 'gee', 'ahem', 'eek', 'meh', 'yahoo', 'oops', 'd\'oh', 'psst', 'argh', 'grr', 'nah', 'shhh', 'whew', 'mmm', 'ooo', 'yay', 'uh-huh', 'boo', 'wow', 'nope', 'haha', 'hahaha', 'lol', 'lols', 'ya', 'hee', 'ohh', 'eh', 'yup'],

  //special nouns that shouldnt be seen as a verb
  'NN': ['nothing', 'everything', 'god', 'student', 'patent', 'funding', 'banking', 'ceiling', 'energy', 'purpose', 'friend', 'event', 'room', 'door', 'thing', 'things', 'stuff', 'lunch', 'breakfast', 'dinner', 'home', 'problem', 'body', 'world', 'city', 'death', 'others'],
  //family-terms are people
  PN: ['father', 'mother', 'mom', 'dad', 'mommy', 'daddy', 'sister', 'brother', 'aunt', 'uncle', 'grandfather', 'grandmother', 'cousin', 'stepfather', 'stepmother', 'boy', 'girl', 'man', 'men', 'woman', 'women', 'guy', 'dude', 'bro', 'gentleman', 'someone']
};
//unpack the compact terms into the misc lexicon..
var keys = Object.keys(compact);
for (var i = 0; i < keys.length; i++) {
  var arr = compact[keys[i]];
  for (var i2 = 0; i2 < arr.length; i2++) {
    misc[arr[i2]] = keys[i];
  }
}
// console.log(misc.a);
module.exports = misc;

},{}],13:[function(require,module,exports){
'use strict';

//common terms that are multi-word, but one part-of-speech
//these should not include phrasal verbs, like 'looked out'. These are handled elsewhere.
module.exports = {
  'a few': 'CD', //different than 'few people'
  'of course': 'RB',
  'at least': 'RB',
  'no longer': 'RB',
  'sort of': 'RB',
  // 'at first': 'RB',
  'once again': 'RB',
  'once more': 'RB',
  'up to': 'RB',
  'by now': 'RB',
  'all but': 'RB',
  'just about': 'RB',
  'so called': 'JJ', //?
  'on board': 'JJ',
  'a lot': 'RB',
  'by far': 'RB',
  'at best': 'RB',
  'at large': 'RB',
  'for good': 'RB',
  'for example': 'RB',
  'vice versa': 'JJ',
  'en route': 'JJ',
  'for sure': 'RB',
  'upside down': 'JJ',
  'at most': 'RB',
  'per se': 'RB',
  'at worst': 'RB',
  'upwards of': 'RB',
  'en masse': 'RB',
  'point blank': 'RB',
  'up front': 'JJ',
  'in front': 'JJ',
  'in situ': 'JJ',
  'in vitro': 'JJ',
  'ad hoc': 'JJ',
  'de facto': 'JJ',
  'ad infinitum': 'JJ',
  'ad nauseam': 'RB',
  'for keeps': 'JJ',
  'a priori': 'JJ',
  'et cetera': 'IN',
  'off guard': 'JJ',
  'spot on': 'JJ',
  'ipso facto': 'JJ',
  'not withstanding': 'RB',
  'de jure': 'RB',
  'a la': 'IN',
  'ad hominem': 'NN',
  'par excellence': 'RB',
  'de trop': 'RB',
  'a posteriori': 'RB',
  'fed up': 'JJ',
  'brand new': 'JJ',
  'old fashioned': 'JJ',
  'bona fide': 'JJ',
  'well off': 'JJ',
  'far off': 'JJ',
  'straight forward': 'JJ',
  'hard up': 'JJ',
  'sui generis': 'JJ',
  'en suite': 'JJ',
  'avant garde': 'JJ',
  'sans serif': 'JJ',
  'gung ho': 'JJ',
  'super duper': 'JJ',
  'new york': 'NN',
  'new england': 'NN',
  'new hampshire': 'NN',
  'new delhi': 'NN',
  'new jersey': 'NN',
  'new mexico': 'NN',
  'united states': 'NN',
  'united kingdom': 'NN',
  'great britain': 'NN',
  'head start': 'NN',
  'make sure': 'VB',
  'keep tabs': 'VB',
  'credit card': 'NN',
  //timezones
  'standard time': 'DA',
  'daylight time': 'DA',
  'summer time': 'DA',
  'fl oz': 'NN',
  'us dollar': 'NN'
};

},{}],14:[function(require,module,exports){
'use strict';

var fns = require('../../fns');

//the unique/uncompressed names..
var arr = ['abby', 'amy', 'autumn', 'bobbi', 'brooke', 'carol', 'cheryl', 'claire', 'cleo', 'consuelo',
// 'dawn',
'eleanor', 'eliza', 'erika', 'faye', 'fern', 'genevieve', 'gertrude', 'gladys', 'inez', 'ingrid', 'jenny', 'jo', 'joni', 'kathryn', 'kelli', 'kim', 'latoya', 'leigh', 'lupe', 'luz', 'lynn', 'mae', 'maude', 'mildred', 'miriam', 'naomi', 'nikki', 'olga', 'reba', 'robyn', 'rosalind', 'ruth', 'sheryl', 'socorro', 'sonja', 'staci', 'tanya', 'therese', 'toni', 'traci', 'vicki', 'vicky'];

//compressed by frequent suffixes
var suffix_compressed = {
  nette: 'an,antoi,ja,jea,jean,ly',
  eline: 'ad,ang,jacqu,mad',
  rlene: 'a,cha,da,ma',
  stine: 'chri,erne,ju,kri',
  tasha: 'la,na,',
  andra: 'alex,cass,s',
  helle: 'mic,rac,roc',
  linda: 'be,,me',
  stina: 'chri,cri,kri',
  annie: ',f,je',
  anne: ',di,je,jo,le,mari,rox,sus,suz',
  elia: 'am,ang,cec,c,corn,d,of,sh',
  llie: 'ca,ke,li,mi,mo,ne,o,sa',
  anna: ',de,di,jo,joh,sh',
  ette: 'bernad,b,bridg,claud,paul,yv',
  ella: 'd,,est,lu,marc,st',
  nnie: 'bo,co,je,mi,wi',
  elle: 'dani,est,gabri,isab,jan',
  icia: 'al,fel,let,patr,tr',
  leen: 'ai,cath,col,ei,kath',
  elma: ',s,th,v',
  etta: ',henri,lor,ros',
  anie: 'j,mel,stef,steph',
  anda: 'am,mir,w,yol',
  arla: 'c,d,k,m',
  lena: 'e,he,,magda',
  rina: 'kat,ma,sab,t',
  isha: 'al,ke,lat,tr',
  olly: 'd,m,p',
  rice: 'beat,cla,pat',
  ttie: 'be,ma,ne',
  acie: 'gr,st,tr',
  isty: 'chr,kr,m',
  dith: 'e,ju,mere',
  onya: 'lat,s,t',
  onia: 'ant,s,t',
  erri: 'k,sh,t',
  lisa: 'a,e,',
  rine: 'cathe,katha,kathe',
  nita: 'a,bo,jua',
  elyn: 'ev,jacqu,joc',
  nine: 'ja,jea,jean',
  nice: 'ber,eu,ja',
  tney: 'brit,cour,whi',
  ssie: 'be,ca,e',
  beth: ',elisa,eliza',
  ine: 'carol,ela,franc,gerald,jasm,joseph,lorra,max,nad,paul',
  ana: 'adri,,d,de,di,j,ju,l,sh,sus',
  rie: 'car,che,lau,lo,ma,marjo,rosema,sher,vale',
  ina: 'angel,carol,d,georg,g,josef,mart,n,t',
  ora: 'c,deb,d,fl,len,l,n,',
  ara: 'barb,c,cl,k,l,s,tam,t',
  ela: 'ang,carm,gabri,graci,l,manu,pam',
  ica: 'angel,er,jess,mon,patr,veron',
  nda: 'bre,gle,luci,ly,rho,ro',
  ley: 'ash,kel,kimber,les,shel,shir',
  eri: 'ch,j,k,sh,t',
  ndy: 'ci,ma,mi,sa,we',
  ene: 'hel,imog,ir,jol,lor',
  ula: 'e,l,pa,urs',
  ann: ',jo,le,mary',
  ola: 'le,l,,vi',
  nna: 'do,gle,je,lado',
  nne: 'adrie,cori,ly,yvo',
  lie: 'ju,les,nata,rosa',
  ise: 'den,el,elo,lou',
  die: 'ad,gol,jo,sa',
  ena: 'd,lor,r,she',
  ian: 'jill,lill,mar,viv',
  lyn: 'caro,gwendo,jac,mari',
  ssa: 'aly,mari,meli,vane',
  thy: 'ca,doro,dor,ka',
  tha: 'ber,mar,saman,tabi',
  sie: 'el,jo,ro,su',
  bel: 'isa,ma,mari',
  via: 'oli,sil,syl',
  tie: 'chris,ka,kris',
  dra: 'au,ken,son',
  ria: 'glo,ma,victo',
  gie: 'an,mag,mar',
  lly: 'ke,sa,she',
  ila: 'le,l,she',
  rna: 'lo,my,ve',
  ole: 'car,nich,nic',
  rma: 'e,i,no',
  any: 'beth,britt,tiff',
  ona: 'le,m,ram',
  rta: 'albe,ma,robe',
  en: 'carm,dore,ell,gretch,gw,hel,kar,kirst,krist,laur,maure',
  ia: 'cecil,claud,cynth,eugen,georg,jul,luc,lyd,marc,soph,virgin',
  le: 'ade,camil,ceci,ga,gay,luci,lucil,mab,miche,myrt',
  ie: 'bobb,debb,dix,eff,jack,lizz,mam,soph,tamm,vick',
  ra: 'barb,deb,elvi,lau,may,my,pet,ve',
  er: 'amb,est,esth,heath,jenif,jennif,summ',
  da: 'a,ai,fre,frie,hil,i,matil',
  ce: 'ali,canda,candi,constan,floren,gra,joy',
  ah: 'beul,debor,hann,le,rebek,sar',
  sa: 'el,lui,mari,ro,tere,there',
  ne: 'daph,dia,ja,jay,laver,simo',
  el: 'eth,laur,muri,racha,rach,raqu',
  is: 'delor,dor,jan,lo,mav,phyll',
  et: 'bridg,harri,jan,margar,margr',
  ta: 'al,chris,kris,margari,ri',
  es: 'agn,delor,dolor,franc,merced',
  an: 'jo,meag,meg,megh,sus',
  cy: 'lu,mar,nan,sta,tra',
  in: 'caitl,er,kar,krist',
  ey: 'audr,linds,stac,trac',
  ca: 'bian,blan,francis,rebec',
  on: 'alis,allis,shann,shar',
  il: 'abiga,apr,ga,syb',
  ly: 'bever,emi,kimber,li',
  ea: 'andr,chels,doroth,l',
  ee: 'aim,d,desir,ren',
  ma: 'al,em,wil',
  di: 'bran,hei,jo',
  va: 'el,e,i',
  ue: 'dominiq,moniq,s',
  ay: 'f,k,linds',
  te: 'celes,ka,margueri',
  ry: 'ma,rosema,sher',
  na: 'ed,shau,shaw',
  dy: 'jo,ju,tru',
  ti: 'chris,kris,pat',
  sy: 'bet,dai,pat',
  ri: 'ka,lo,sha',
  la: 'kay,priscil,wil',
  al: 'cryst,kryst,op',
  ll: 'jewe,ji,ne'
};
arr = fns.expand_suffixes(arr, suffix_compressed);

var prefix_compressed = {
  mar: 'go,isol,itza,sha',
  tam: 'i,ika,my',
  be: 'atriz,cky,tty,ttye',
  pe: 'arl,ggy,nny',
  pa: 'ige,m,tty'
};
arr = fns.expand_prefixes(arr, prefix_compressed);

module.exports = arr;

},{"../../fns":23}],15:[function(require,module,exports){
'use strict';

var fns = require('../../fns');

//the unique/uncompressed names..
var arr = ['adolfo', 'angelo', 'anthony', 'armand', 'arthur', 'bill', 'billy', 'bobby', 'bradford', 'bret', 'caleb', 'carroll', 'cliff', 'clifford', 'craig', 'curt', 'derek', 'doug', 'dwight', 'edmund', 'eli', 'elliot', 'enrique', 'erik', 'felipe', 'felix', 'francisco', 'frank', 'george', 'glenn', 'greg', 'gregg', 'hans', 'hugh', 'ira', 'irving', 'isaac', 'jim', 'kermit', 'kurt', 'leo', 'levi', 'lorenzo', 'lou', 'pablo', 'pat', 'percy', 'philip', 'phillip', 'rex', 'ricky', 'shaun', 'shawn', 'sterling', 'steve', 'tim', 'timothy', 'wilbur', 'williams', 'wm', 'woodrow'];

//compressed by frequent suffixes
var suffix_compressed = {
  rence: 'cla,lau,law,te,ter',
  lbert: 'a,de,e,gi,wi',
  ustin: 'ag,a,d,j',
  berto: 'al,gil,hum,ro',
  ester: 'ch,l,sylv',
  onnie: 'd,l,r',
  wayne: 'de,d,',
  erick: ',fred,rod',
  athan: 'john,jon,n',
  elvin: ',k,m',
  anuel: 'em,emm,m',
  bert: ',her,hu,nor,ro',
  rick: 'der,fred,kend,pat,',
  land: 'cleve,gar,le,ro',
  ando: 'arm,fern,orl,rol',
  ardo: 'edu,ger,leon,ric',
  lton: 'a,car,e,mi',
  arry: 'b,g,h,l',
  nton: 'a,cli,qui',
  fred: 'al,,wil',
  ance: 'l,terr,v',
  mmie: 'ji,sa,to',
  erry: 'j,p,t',
  mond: 'des,ed,ray',
  rman: 'he,no,she',
  rvin: 'e,i,ma',
  nald: 'do,regi,ro',
  rett: 'b,eve,gar',
  son: 'harri,jack,ja,ma,nel,ty,wil',
  ell: 'darn,darr,low,mitch,russ,terr,wend',
  ard: 'bern,edw,ger,how,leon,rich,will',
  ian: 'adr,br,christ,dam,fab,,jul',
  don: 'bran,,el,gor,shel',
  ron: 'aa,by,came,my,',
  ton: 'bur,clay,clif,pres,wins',
  lan: 'a,al,dy,har,no',
  rey: 'ca,co,geoff,jeff',
  ent: 'br,k,tr,vinc',
  ael: 'ism,mich,raf,raph',
  mmy: 'ji,sa,ti,to',
  mon: 'da,ra,si,solo',
  las: 'dal,doug,nicho,nico',
  vin: 'al,cal,de,ke',
  nny: 'be,da,joh,ke',
  ius: 'cornel,dar,demetr,jul',
  ley: 'brad,har,stan,wes',
  lio: 'emi,ju,roge',
  ben: ',reu,ru',
  ory: 'c,greg,r',
  lie: 'bil,char,wil',
  van: 'e,i,',
  roy: 'le,,t',
  all: 'kend,marsh,rand',
  ary: 'c,g,zach',
  ddy: 'bu,fre,te',
  art: 'b,stew,stu',
  iel: 'dan,gabr,nathan',
  lin: 'co,frank,mar',
  yle: 'do,k,l',
  her: 'christop,kristop,lut',
  oyd: 'b,fl,ll',
  ren: 'dar,lo,war',
  ter: 'dex,pe,wal',
  arl: 'c,e,k',
  ane: 'd,du,sh',
  aul: 'p,r,s',
  dan: 'bren,,jor',
  nie: 'ben,er,john',
  ine: 'anto,bla,jerma',
  lph: 'ra,rando,rudo',
  est: 'earn,ern,forr',
  win: 'dar,ed,er',
  is: 'chr,curt,den,denn,ell,franc,lew,lou,lu,morr,ot,trav,will',
  er: 'alexand,elm,grov,hom,jasp,javi,oliv,rodg,rog,spenc,tyl,xavi',
  an: 'bry,de,esteb,eth,ju,log,rom,ry,se,st,steph',
  el: 'ab,darr,fid,jo,lion,marc,mich,migu,no,russ,samu',
  in: 'benjam,bra,dar,darr,efra,joaqu,mart,quent',
  ie: 'arch,edd,frank,fredd,lou,regg,robb',
  en: 'all,dami,gl,k,ow,steph,stev',
  ey: 'dew,harv,jo,mick,rick,rodn,sidn',
  al: ',h,jam,miche,ne,rand',
  on: 'bry,j,jonath,le,marl,vern',
  or: 'hect,juni,salvad,tayl,trev,vict',
  dy: 'an,bra,co,gra,ran,ru',
  ce: 'bru,bry,hora,mauri,roy,walla',
  il: 'cec,em,ne,ph,virg',
  ar: 'ces,edg,lam,om,osc',
  es: 'andr,charl,jam,mil,mos',
  ro: 'alejand,alva,artu,ped,rami',
  am: 'abrah,ad,grah,s,willi',
  ck: 'chu,domini,ja,ma,ni',
  io: 'anton,gregor,ignac,mar,serg',
  ah: 'elij,jeremi,mic,no',
  nt: 'brya,cli,gra,lamo',
  re: 'and,pier,salvato,theodo',
  ed: ',jar,n,t',
  ld: 'arno,gera,haro,jera',
  as: 'eli,luc,thom,tom',
  os: 'am,carl,marc,sant',
  ew: 'andr,dr,math,matth',
  ke: 'bla,ja,lu,mi',
  tt: 'ellio,emme,ma,sco',
  ty: 'mar,mon,rus,scot',
  th: 'hea,kei,kenne,se',
  ay: 'cl,j,murr,r',
  le: 'da,mer,orvil',
  te: 'mon,pe,vicen',
  us: 'jes,marc,ruf',
  od: 'elwo,jarr,r',
  ob: 'b,jac,r',
  to: 'beni,ernes,ot',
  ne: 'euge,ge,tyro',
  go: 'domin,hu,santia',
  de: 'clau,cly,wa',
  do: 'alfre,reynal,wilfre',
  rk: 'cla,ki,ma',
  se: 'cha,jes,jo',
  ry: 'hen,jeffe,jeff',
  ic: 'cedr,domin,er',
  ad: 'br,ch,conr'
};

arr = fns.expand_suffixes(arr, suffix_compressed);

var prefix_compressed = {
  jos: 'eph,h,hua',
  ro: 'cky,dolfo,osevelt,scoe,ss',
  je: 'ff,remy,rome,ss',
  to: 'by,dd,m,ny',
  da: 'rryl,ryl,ve,vid',
  jo: 'e,esph,hn,rge',
  ma: 'lcolm,rc,rco,x',
  al: 'ex,fonso,i,onzo',
  gu: 'illermo,stavo,y'
};
arr = fns.expand_prefixes(arr, prefix_compressed);

module.exports = arr;

},{"../../fns":23}],16:[function(require,module,exports){
'use strict';

var cardinal = {
  ones: {
    'a': 1,
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9
  },
  teens: {
    'ten': 10,
    'eleven': 11,
    'twelve': 12,
    'thirteen': 13,
    'fourteen': 14,
    'fifteen': 15,
    'sixteen': 16,
    'seventeen': 17,
    'eighteen': 18,
    'nineteen': 19
  },
  tens: {
    'twenty': 20,
    'thirty': 30,
    'forty': 40,
    'fifty': 50,
    'sixty': 60,
    'seventy': 70,
    'eighty': 80,
    'ninety': 90
  },
  multiples: {
    'hundred': 100,
    'grand': 1000,
    'thousand': 1000,
    'million': 1000000,
    'billion': 1000000000,
    'trillion': 1000000000000,
    'quadrillion': 1000000000000000,
    'quintillion': 1000000000000000000,
    'sextillion': 1000000000000000000000,
    'septillion': 1000000000000000000000000
  }
};

var ordinal = {
  ones: {
    'first': 1,
    'second': 2,
    'third': 3,
    'fourth': 4,
    'fifth': 5,
    'sixth': 6,
    'seventh': 7,
    'eighth': 8,
    'ninth': 9
  },
  teens: {
    'tenth': 10,
    'eleventh': 11,
    'twelfth': 12,
    'thirteenth': 13,
    'fourteenth': 14,
    'fifteenth': 15,
    'sixteenth': 16,
    'seventeenth': 17,
    'eighteenth': 18,
    'nineteenth': 19
  },
  tens: {
    'twentieth': 20,
    'thirtieth': 30,
    'fourtieth': 40,
    'fiftieth': 50,
    'sixtieth': 60,
    'seventieth': 70,
    'eightieth': 80,
    'ninetieth': 90
  },
  multiples: {
    'hundredth': 100,
    'thousandth': 1000,
    'millionth': 1000000,
    'billionth': 1000000000,
    'trillionth': 1000000000000,
    'quadrillionth': 1000000000000000,
    'quintillionth': 1000000000000000000,
    'sextillionth': 1000000000000000000000,
    'septillionth': 1000000000000000000000000
  }
};

//used for the units
var prefixes = {
  'yotta': 1,
  'zetta': 1,
  'exa': 1,
  'peta': 1,
  'tera': 1,
  'giga': 1,
  'mega': 1,
  'kilo': 1,
  'hecto': 1,
  'deka': 1,
  'deci': 1,
  'centi': 1,
  'milli': 1,
  'micro': 1,
  'nano': 1,
  'pico': 1,
  'femto': 1,
  'atto': 1,
  'zepto': 1,
  'yocto': 1,

  'square': 1,
  'cubic': 1,
  'quartic': 1
};

module.exports = {
  ones: cardinal.ones,
  teens: cardinal.teens,
  tens: cardinal.tens,
  multiples: cardinal.multiples,

  ordinal_ones: ordinal.ones,
  ordinal_teens: ordinal.teens,
  ordinal_tens: ordinal.tens,
  ordinal_multiples: ordinal.multiples,

  prefixes: prefixes
};

},{}],17:[function(require,module,exports){
'use strict';
//just a few named-organizations
//no acronyms needed. no product/brand pollution.

var organizations = ['google', 'microsoft', 'walmart', 'exxonmobil', 'glencore', 'samsung', 'chevron', 'at&t', 'verizon', 'costco', 'nestlé', '7-eleven', 'adidas', 'nike', 'acer', 'mcdonalds', 'mcdonald\'s', 'comcast', 'compaq', 'craigslist', 'cisco', 'disney', 'coca cola', 'dupont', 'ebay', 'facebook', 'fedex', 'kmart', 'kkk', 'kodak', 'monsanto', 'myspace', 'netflix', 'sony', 'telus', 'twitter', 'usps', 'ubs', 'ups', 'walgreens', 'youtube', 'yahoo!', 'yamaha'];

var suffixes = ['center', 'centre', 'memorial', 'school', 'government', 'faculty', 'society', 'union', 'ministry', 'collective', 'association', 'committee', 'university', 'bank', 'college', 'foundation', 'department', 'institute', 'club', 'co', 'sons'];

module.exports = {
  suffixes: suffixes,
  organizations: organizations
};

},{}],18:[function(require,module,exports){
//phrasal verbs are two words that really mean one verb.
//'beef up' is one verb, and not some direction of beefing.
//by @spencermountain, 2015 mit
//many credits to http://www.allmyphrasalverbs.com/
'use strict';

var verb_conjugate = require('../term/verb/conjugate/conjugate.js');

//start the list with some randoms
var main = ['be onto', 'fall behind', 'fall through', 'fool with', 'get across', 'get along', 'get at', 'give way', 'hear from', 'hear of', 'lash into', 'make do', 'run across', 'set upon', 'take aback', 'keep from'];

//if there's a phrasal verb "keep on", there's often a "keep off"
var opposites = {
  'away': 'back',
  'in': 'out',
  'on': 'off',
  'over': 'under',
  'together': 'apart',
  'up': 'down'
};

//forms that have in/out symmetry
var symmetric = {
  'away': 'blow,bounce,bring,call,come,cut,drop,fire,get,give,go,keep,pass,put,run,send,shoot,switch,take,tie,throw',
  'in': 'bang,barge,bash,beat,block,book,box,break,bring,burn,butt,carve,cash,check,come,cross,drop,fall,fence,fill,give,grow,hand,hang,head,jack,keep,leave,let,lock,log,move,opt,pack,peel,pull,put,reach,ring,rub,send,set,settle,shut,sign,smash,snow,strike,take,try,turn,type,warm,wave,wean,wear,wheel',
  'on': 'add,call,carry,catch,count,feed,get,give,go,grind,head,hold,keep,lay,log,pass,pop,power,put,send,show,snap,switch,take,tell,try,turn,wait',
  'over': 'come,go,look,read,run,talk',
  'together': 'come,pull,put',
  'up': 'add,back,beat,bend,blow,boil,bottle,break,bring,buckle,bundle,call,carve,clean,cut,dress,fill,flag,fold,get,give,grind,grow,hang,hold,keep,let,load,lock,look,man,mark,melt,move,pack,pin,pipe,plump,pop,power,pull,put,rub,scale,scrape,send,set,settle,shake,show,sit,slow,smash,square,stand,strike,take,tear,tie,turn,use,wash,wind'
};
Object.keys(symmetric).forEach(function (k) {
  symmetric[k].split(',').forEach(function (s) {
    //add the given form
    main.push(s + ' ' + k);
    //add its opposite form
    main.push(s + ' ' + opposites[k]);
  });
});

//forms that don't have in/out symmetry
var asymmetric = {
  'about': 'bring,fool,gad,go,root,mess',
  'after': 'go,look,take',
  'ahead': 'get,go,press',
  'along': 'bring,move',
  'apart': 'fall,take',
  'around': 'ask,boss,bring,call,come,fool,get,horse,joke,lie,mess,play',
  'away': 'back,carry,file,frighten,hide,wash',
  'back': 'fall,fight,hit,hold,look,pay,stand,think',
  'by': 'come,drop,get,go,stop,swear,swing,tick,zip',
  'down': 'bog,calm,fall,hand,hunker,jot,knock,lie,narrow,note,pat,pour,run,tone,trickle,wear',
  'for': 'fend,file,gun,hanker,root,shoot',
  'forth': 'bring,come',
  'forward': 'come,look',
  'in': 'cave,chip,hone,jump,key,pencil,plug,rein,shade,sleep,stop,suck,tie,trade,tuck,usher,weigh,zero',
  'into': 'look,run',
  'it': 'go,have',
  'off': 'auction,be,beat,blast,block,brush,burn,buzz,cast,cool,drop,end,face,fall,fend,frighten,goof,jack,kick,knock,laugh,level,live,make,mouth,nod,pair,pay,peel,read,reel,ring,rip,round,sail,shave,shoot,sleep,slice,split,square,stave,stop,storm,strike,tear,tee,tick,tip,top,walk,work,write',
  'on': 'bank,bargain,frown,hit,latch,pile,prattle,press,spring,spur,tack,urge,yammer',
  'out': 'act,ask,back,bail,bear,black,blank,bleed,blow,blurt,branch,buy,cancel,cut,eat,edge,farm,figure,find,fill,find,fish,fizzle,flake,flame,flare,flesh,flip,geek,get,help,hide,hold,iron,knock,lash,level,listen,lose,luck,make,max,miss,nerd,pan,pass,pick,pig,point,print,psych,rat,read,rent,root,rule,run,scout,see,sell,shout,single,sit,smoke,sort,spell,splash,stamp,start,storm,straighten,suss,time,tire,top,trip,trot,wash,watch,weird,whip,wimp,wipe,work,zone,zonk',
  'over': 'bend,bubble,do,fall,get,gloss,hold,keel,mull,pore,sleep,spill,think,tide,tip',
  'round': 'get,go',
  'through': 'go,run',
  'to': 'keep,see',
  'up': 'act,beef,board,bone,boot,brighten,build,buy,catch,cheer,cook,end,eye,face,fatten,feel,fess,finish,fire,firm,flame,flare,free,freeze,freshen,fry,fuel,gang,gear,goof,hack,ham,heat,hit,hole,hush,jazz,juice,lap,light,lighten,line,link,listen,live,loosen,make,mash,measure,mess,mix,mock,mop,muddle,open,own,pair,patch,pick,prop,psych,read,rough,rustle,save,shack,sign,size,slice,slip,snap,sober,spark,split,spruce,stack,start,stay,stir,stitch,straighten,string,suck,suit,sum,team,tee,think,tidy,tighten,toss,trade,trip,type,vacuum,wait,wake,warm,weigh,whip,wire,wise,word,write,zip'
};
Object.keys(asymmetric).forEach(function (k) {
  asymmetric[k].split(',').forEach(function (s) {
    main.push(s + ' ' + k);
  });
});

//at his point all verbs are infinitive. lets make this explicit.
main = main.reduce(function (h, s) {
  h[s] = 'VBP';
  return h;
}, {});

//conjugate every phrasal verb. takes ~30ms
var tags = {
  present: 'VB',
  past: 'VBD',
  future: 'VBF',
  gerund: 'VBG',
  infinitive: 'VBP'
};
var cache = {}; //cache individual verbs to speed it up
var split = undefined,
    verb = undefined,
    particle = undefined,
    phrasal = undefined;
Object.keys(main).forEach(function (s) {
  split = s.split(' ');
  verb = split[0];
  particle = split[1];
  if (cache[verb] === undefined) {
    cache[verb] = verb_conjugate(verb);
  }
  Object.keys(cache[verb]).forEach(function (k) {
    phrasal = cache[verb][k] + ' ' + particle;
    if (tags[k]) {
      main[phrasal] = tags[k];
    }
  });
});

// console.log(main);
// console.log(main['mess about']);
module.exports = main;

},{"../term/verb/conjugate/conjugate.js":98}],19:[function(require,module,exports){
'use strict';

var fns = require('../fns');

//uncompressed country names
var countries = ['usa', 'u.s.a.', 'ussr', 'brazil', 'bangladesh', 'mexico', 'vietnam', 'egypt', 'germany', 'turkey', 'france', 'united kingdom', 'italy', 'kenya', 'iraq', 'morocco', 'peru', 'yemen', 'mozambique', 'sri lanka', 'burkina faso', 'niger', 'netherlands', 'chile', 'malawi', 'ecuador', 'côte d\'ivoire', 'mali', 'zimbabwe', 'chad', 'belgium', 'cuba', 'greece', 'haiti', 'burundi', 'hungary', 'sweden', 'honduras', 'israel', 'laos', 'el salvador', 'libya', 'nicaragua', 'denmark', 'congo-brazzaville', 'kuwait', 'moldova', 'panama', 'jamaica', 'lesotho', 'guinea-bissau', 'timor-leste', 'djibouti', 'fiji', 'comoros', 'solomon islands', 'luxembourg', 'suriname', 'cape verde', 'malta', 'bahamas'];
var compressed_countries = {
  istan: 'pak,uzbek,afghan,tajik,turkmen',
  ublic: 'czech rep,dominican rep,central african rep',
  uinea: 'g,papua new g,equatorial g',
  land: 'thai,po,switzer,fin,republic of ire,new zea,swazi,ice',
  ania: 'tanz,rom,maurit,lithu,alb',
  rica: 'ame,united states of ame,south af,costa ',
  mbia: 'colo,za,ga',
  eria: 'nig,alg,lib',
  nia: 'arme,macedo,slove,esto',
  sia: 'indone,rus,malay,tuni',
  ina: 'ch,argent,bosnia and herzegov',
  tan: 'kazakhs,kyrgyzs,bhu',
  ana: 'gh,botsw,guy',
  bia: 'saudi ara,ser,nami',
  lia: 'austra,soma,mongo',
  rea: 'south ko,north ko,erit',
  dan: 'su,south su,jor',
  ria: 'sy,aust,bulga',
  ia: 'ind,ethiop,cambod,boliv,slovak,georg,croat,latv',
  an: 'jap,ir,taiw,azerbaij,om',
  da: 'ugan,cana,rwan',
  us: 'belar,mauriti,cypr',
  al: 'nep,seneg,portug',
  in: 'spa,ben,bahra',
  go: 'dr con,to,trinidad-toba',
  la: 'venezue,ango,guatema',
  es: 'united stat,philippin,united arab emirat',
  on: 'camero,leban,gab',
  ar: 'myanm,madagasc,qat',
  ay: 'paragu,norw,urugu',
  ne: 'ukrai,sierra leo,palesti'
};
countries = fns.expand_suffixes(countries, compressed_countries);

/////uncomressed cities
var cities = ['guangzhou', 'ahmedabad', 'phoenix', 'jakarta', 'curitiba', 'moscow', 'tokyo', 'nagoya', 'kobe', 'mexico', 'cebu', 'ho chi minh', 'hanoi', 'giza', 'frankfurt', 'stuttgart', 'i̇zmir', 'paris', 'toulouse', 'nice', 'rome', 'palermo', 'genoa', 'cape town', 'port elizabeth', 'bogotá', 'medellín', 'seville', 'zaragoza', 'kiev', 'odessa', 'rosario', 'la plata', 'warsaw', 'kraków', 'łódź', 'wrocław', 'poznań', 'calgary', 'ottawa', 'sydney', 'perth', 'homs', 'iași', 'cluj-napoca', 'almaty', 'the hague', 'utrecht', 'phnom penh', 'antwerp', 'ghent', 'brussels', 'tunis', 'athens', 'thessaloniki', 'prague', 'brno', 'miskolc', 'stockholm', 'västerås', 'tegucigalpa', 'graz', 'innsbruck', 'abu dhabi', 'haifa', 'ashdod', 'dushanbe', 'niš', 'aqaba', 'aalborg', 'helsinki', 'espoo', 'vantaa', 'turku', 'košice', 'ashgabat', 'oslo', 'trondheim', 'auckland', 'tbilisi', 'zagreb', 'split', 'kuwait', 'montevideo', 'klaipėda', 'doha', 'skopje', 'riga', 'luxembourg', 'reykjavik', 'kingston'];

var suffix_compressed_cities = {
  burg: 'saint peters,yekaterin,ham,til,gothen,salz',
  ton: 'hous,edmon,welling,hamil',
  ion: 'hauts-bassins reg,nord reg,herakl',
  ana: 'hav,tir,ljublj',
  ara: 'guadalaj,ank,timișo',
  an: 'tehr,mil,durb,bus,tain,abidj,amm,yerev',
  ia: 'philadelph,brasíl,alexandr,pretor,valenc,sof,nicos',
  on: 'ly,lond,yang,inche,daeje,lisb',
  en: 'shenzh,eindhov,pils,copenhag,berg',
  ng: 'beiji,chittago,pyongya,kaohsiu,taichu',
  in: 'tianj,berl,tur,dubl,duned',
  es: 'los angel,nant,napl,buenos air,f',
  la: 'pueb,mani,barranquil,kampa,guatema',
  or: 'salvad,san salvad,ulan bat,marib',
  us: 'damasc,pirae,aarh,vilni',
  as: 'carac,patr,burg,kaun',
  va: 'craio,petah tik,gene,bratisla',
  ai: 'shangh,mumb,chenn,chiang m',
  ne: 'colog,melbour,brisba,lausan',
  er: 'manchest,vancouv,tangi',
  ka: 'dha,osa,banja lu',
  ro: 'rio de janei,sappo,cai',
  am: 'birmingh,amsterd,rotterd',
  ur: 'kuala lump,winterth,kópavog',
  ch: 'muni,züri,christchur',
  na: 'barcelo,vien,var',
  ma: 'yokoha,li,pana',
  ul: 'istanb,seo,kab',
  to: 'toron,qui,por',
  iv: 'khark,lv,tel av',
  sk: 'dnipropetrov,gdań,min'
};

cities = fns.expand_suffixes(cities, suffix_compressed_cities);

var prefix_compressed_cities = {
  'new ': 'delhi,york,taipei',
  san: 'a\'a,tiago, josé',
  ta: 'ipei,mpere,llinn,rtu',
  ba: 'ngalore,ngkok,ku,sel',
  li: 'verpool,ège,nz,massol',
  ma: 'rseille,ndalay,drid,lmö',
  be: 'rn,lgrade,irut',
  ka: 'rachi,raj,ndy',
  da: 'egu,kar,ugavpils',
  ch: 'icago,arleroi,ișinău',
  co: 'lombo,nstanța,rk',
  bu: 'rsa,charest,dapest'
};
cities = fns.expand_prefixes(cities, prefix_compressed_cities);

//some of the busiest airports in the world from
//https://www.world-airport-codes.com/world-top-30-airports.html
var airports = ['atl', 'pek', 'lhr', 'hnd', 'ord', 'lax', 'cdg', 'dfw', 'cgk', 'dxb', 'fra', 'hkg', 'den', 'bkk', 'ams', 'jfk', 'ist', 'sfo', 'clt', 'las', 'phx', 'iax', 'kul', 'mia', 'icn', 'muc', 'syd', 'fco', 'mco', 'bcn', 'yyz', 'lgw', 'phl'];

module.exports = {
  countries: countries,
  cities: cities,
  airports: airports
};
// console.log(cities[99]);
// console.log(countries[99]);

},{"../fns":23}],20:[function(require,module,exports){
'use strict';

//professions 'lawyer' that aren't covered by verb.to_actor()

module.exports = ['accountant', 'advisor', 'farmer', 'mechanic', 'technician', 'architect', 'clerk', 'therapist', 'bricklayer', 'butcher', 'carpenter', 'nurse', 'engineer', 'supervisor', 'attendant', 'operator', 'dietician', 'housekeeper', 'advisor', 'agent', 'firefighter', 'fireman', 'policeman', 'attendant', 'scientist', 'gardener', 'hairdresser', 'instructor', 'programmer', 'administrator', 'journalist', 'assistant', 'lawyer', 'officer', 'plumber', 'inspector', 'psychologist', 'receptionist', 'roofer', 'sailor', 'security guard', 'photographer', 'soldier', 'surgeon', 'researcher', 'practitioner', 'politician', 'musician', 'artist', 'secretary', 'minister', 'deputy', 'president'];

},{}],21:[function(require,module,exports){
'use strict';

//common nouns that have no plural form. These are suprisingly rare
//used in noun.inflect(), and added as nouns in lexicon
module.exports = ['aircraft', 'bass', 'bison', 'fowl', 'halibut', 'moose', 'salmon', 'spacecraft', 'tuna', 'trout', 'advice', 'information', 'knowledge', 'trouble', 'enjoyment', 'fun', 'recreation', 'relaxation', 'meat', 'rice', 'bread', 'cake', 'coffee', 'ice', 'water', 'oil', 'grass', 'hair', 'fruit', 'wildlife', 'equipment', 'machinery', 'furniture', 'mail', 'luggage', 'jewelry', 'clothing', 'money', 'mathematics', 'economics', 'physics', 'civics', 'ethics', 'gymnastics', 'mumps', 'measles', 'news', 'tennis', 'baggage', 'currency', 'soap', 'toothpaste', 'food', 'sugar', 'butter', 'flour', 'research', 'leather', 'wool', 'wood', 'coal', 'weather', 'homework', 'cotton', 'silk', 'patience', 'impatience', 'vinegar', 'art', 'beef', 'blood', 'cash', 'chaos', 'cheese', 'chewing', 'conduct', 'confusion', 'education', 'electricity', 'entertainment', 'fiction', 'forgiveness', 'gold', 'gossip', 'ground', 'happiness', 'history', 'honey', 'hospitality', 'importance', 'justice', 'laughter', 'leisure', 'lightning', 'literature', 'luck', 'melancholy', 'milk', 'mist', 'music', 'noise', 'oxygen', 'paper', 'peace', 'peanut', 'pepper', 'petrol', 'plastic', 'pork', 'power', 'pressure', 'rain', 'recognition', 'sadness', 'safety', 'salt', 'sand', 'scenery', 'shopping', 'silver', 'snow', 'softness', 'space', 'speed', 'steam', 'sunshine', 'tea', 'thunder', 'time', 'traffic', 'trousers', 'violence', 'warmth', 'wine', 'steel', 'soccer', 'hockey', 'golf', 'fish', 'gum', 'liquid', 'series', 'sheep', 'species', 'fahrenheit', 'celcius', 'kelvin', 'hertz', 'everyone', 'everybody'];

},{}],22:[function(require,module,exports){
//most-frequent non-irregular verbs, in infinitive form, to be conjugated for the lexicon
//this list is the seed, from which various forms are conjugated
'use strict';

var fns = require('../fns');

//suffix-index adjectives
//  {cial:'cru,spe'} -> 'crucial', 'special'
var compressed = {
  prove: 'im,,ap,disap',
  serve: ',de,ob,re',
  ress: 'exp,p,prog,st,add,d',
  lect: 'ref,se,neg,col,e',
  sist: 'in,con,per,re,as',
  tain: 'ob,con,main,s,re',
  mble: 'rese,gru,asse,stu',
  ture: 'frac,lec,tor,fea',
  port: 're,sup,ex,im',
  ate: 'rel,oper,indic,cre,h,activ,estim,particip,d,anticip,evalu',
  use: 'ca,,over,ref,acc,am,pa,ho',
  ive: 'l,rece,d,arr,str,surv,thr,rel',
  are: 'prep,c,comp,sh,st,decl,d,sc',
  ine: 'exam,imag,determ,comb,l,decl,underm,def',
  nce: 'annou,da,experie,influe,bou,convi,enha',
  ain: 'tr,rem,expl,dr,compl,g,str',
  ent: 'prev,repres,r,res,rel,inv',
  age: 'dam,mess,man,encour,eng,discour',
  rge: 'su,cha,eme,u,me',
  ise: 'ra,exerc,prom,surpr,pra',
  ect: 'susp,dir,exp,def,rej',
  ter: 'en,mat,cen,ca,al',
  end: 't,dep,,ext,att',
  est: 't,sugg,prot,requ,r',
  ock: 'kn,l,sh,bl,unl',
  nge: 'cha,excha,ra,challe,plu',
  ase: 'incre,decre,purch,b,ce',
  ish: 'establ,publ,w,fin,distingu',
  mit: 'per,ad,sub,li',
  ure: 'fig,ens,end,meas',
  der: 'won,consi,mur,wan',
  ave: 's,sh,w,cr',
  ire: 'requ,des,h,ret',
  tch: 'scra,swi,ma,stre',
  ack: 'att,l,p,cr',
  ion: 'ment,quest,funct,envis',
  ump: 'j,l,p,d',
  ide: 'dec,prov,gu,s',
  ush: 'br,cr,p,r',
  eat: 'def,h,tr,ch',
  ash: 'sm,spl,w,fl',
  rry: 'ca,ma,hu,wo',
  ear: 'app,f,b,disapp',
  er: 'answ,rememb,off,suff,cov,discov,diff,gath,deliv,both,empow,with',
  le: 'fi,sett,hand,sca,whist,enab,smi,ming,ru,sprink,pi',
  st: 'exi,foreca,ho,po,twi,tru,li,adju,boa,contra,boo',
  it: 'vis,ed,depos,sp,awa,inhib,cred,benef,prohib,inhab',
  nt: 'wa,hu,pri,poi,cou,accou,confro,warra,pai',
  ch: 'laun,rea,approa,sear,tou,ar,enri,atta',
  ss: 'discu,gue,ki,pa,proce,cro,glo,dismi',
  ll: 'fi,pu,ki,ca,ro,sme,reca,insta',
  rn: 'tu,lea,conce,retu,bu,ea,wa,gove',
  ce: 'redu,produ,divor,fa,noti,pla,for,repla',
  te: 'contribu,uni,tas,vo,no,constitu,ci',
  rt: 'sta,comfo,exe,depa,asse,reso,conve',
  ck: 'su,pi,che,ki,tri,wre',
  ct: 'intera,restri,predi,attra,depi,condu',
  ke: 'sta,li,bra,overta,smo,disli',
  se: 'collap,suppo,clo,rever,po,sen',
  nd: 'mi,surrou,dema,remi,expa,comma',
  ve: 'achie,invol,remo,lo,belie,mo',
  rm: 'fo,perfo,confi,confo,ha',
  or: 'lab,mirr,fav,monit,hon',
  ue: 'arg,contin,val,iss,purs',
  ow: 'all,foll,sn,fl,borr',
  ay: 'pl,st,betr,displ,portr',
  ze: 'recogni,reali,snee,ga,emphasi',
  ip: 'cl,d,gr,sl,sk',
  re: 'igno,sto,interfe,sco',
  ng: 'spri,ba,belo,cli',
  ew: 'scr,vi,revi,ch',
  gh: 'cou,lau,outwei,wei',
  ly: 'app,supp,re,multip',
  ge: 'jud,acknowled,dod,alle',
  en: 'list,happ,threat,strength',
  ee: 'fors,agr,disagr,guarant',
  et: 'budg,regr,mark,targ',
  rd: 'rega,gua,rewa,affo',
  am: 'dre,j,sl,ro',
  ry: 'va,t,c,bu'
};
var arr = ['hope', 'thank', 'work', 'stop', 'control', 'join', 'enjoy', 'fail', 'aid', 'ask', 'talk', 'add', 'walk', 'describe', 'study', 'seem', 'occur', 'claim', 'fix', 'help', 'design', 'include', 'need', 'keep', 'assume', 'accept', 'do', 'look', 'die', 'seek', 'attempt', 'bomb', 'cook', 'copy', 'claw', 'doubt', 'drift', 'envy', 'fold', 'flood', 'focus', 'lift', 'link', 'load', 'loan', 'melt', 'overlap', 'rub', 'repair', 'sail', 'sleep', 'trade', 'trap', 'travel', 'tune', 'undergo', 'undo', 'uplift', 'yawn', 'plan', 'reveal', 'owe', 'sneak', 'drop', 'name', 'head', 'spoil', 'echo', 'deny', 'yield', 'reason', 'defy', 'applaud', 'risk', 'step', 'deem', 'embody', 'adopt', 'convey', 'pop', 'grab', 'revel', 'stem', 'mark', 'drag', 'pour', 'reckon', 'assign', 'rank', 'destroy', 'float', 'appeal', 'grasp', 'shout', 'overcome', 'relax', 'excel', 'plug', 'proclaim', 'ruin', 'abandon', 'overwhelm', 'wipe', 'added', 'took', 'goes', 'avoid', 'come', 'set', 'pay', 'grow', 'inspect', 'instruct', 'know', 'take', 'let', 'sort', 'put', 'take', 'cut', 'become', 'reply', 'happen', 'watch', 'associate', 'send', 'archive', 'cancel', 'learn', 'transfer'];

module.exports = fns.expand_suffixes(arr, compressed);

},{"../fns":23}],23:[function(require,module,exports){
'use strict';

exports.pluck = function (arr, str) {
  arr = arr || [];
  return arr.map(function (o) {
    return o[str];
  });
};

//make an array of strings easier to lookup
exports.toObj = function (arr) {
  return arr.reduce(function (h, a) {
    h[a] = true;
    return h;
  }, {});
};
//turn key->value into value->key
exports.reverseObj = function (obj) {
  return Object.keys(obj).reduce(function (h, k) {
    h[obj[k]] = k;
    return h;
  }, {});
};

//turn a nested array into one array
exports.flatten = function (arr) {
  var all = [];
  arr.forEach(function (a) {
    all = all.concat(a);
  });
  return all;
};

//string utilities
exports.endsWith = function (str, suffix) {
  if (str && suffix && str.indexOf(suffix, str.length - suffix.length) !== -1) {
    return true;
  }
  return false;
};
exports.startsWith = function (str, prefix) {
  if (str && str.length && str.substr(0, 1) === prefix) {
    return true;
  }
  return false;
};

exports.extend = function (a, b) {
  var keys = Object.keys(b);
  for (var i = 0; i < keys.length; i++) {
    a[keys[i]] = b[keys[i]];
  }
  return a;
};

exports.titlecase = function (str) {
  if (!str) {
    return '';
  }
  str = str.toLowerCase();
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// typeof obj == "function" also works
// but not in older browsers. :-/
exports.isFunction = function (obj) {
  return Object.prototype.toString.call(obj) === '[object Function]';
};

//uncompress data in the adhoc compressed form {'ly':'kind,quick'}
exports.expand_suffixes = function (list, obj) {
  var keys = Object.keys(obj);
  var l = keys.length;
  for (var i = 0; i < l; i++) {
    var arr = obj[keys[i]].split(',');
    for (var i2 = 0; i2 < arr.length; i2++) {
      list.push(arr[i2] + keys[i]);
    }
  }
  return list;
};
//uncompress data in the adhoc compressed form {'over':'blown,kill'}
exports.expand_prefixes = function (list, obj) {
  var keys = Object.keys(obj);
  var l = keys.length;
  for (var i = 0; i < l; i++) {
    var arr = obj[keys[i]].split(',');
    for (var i2 = 0; i2 < arr.length; i2++) {
      list.push(keys[i] + arr[i2]);
    }
  }
  return list;
};

},{}],24:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var fns = require('./fns.js');

var models = {
  Term: require('./term/term.js'),
  Text: require('./text/text.js'),
  Sentence: require('./sentence/sentence.js'),
  Statement: require('./sentence/statement/statement.js'),
  Question: require('./sentence/question/question.js'),
  Verb: require('./term/verb/verb.js'),
  Adjective: require('./term/adjective/adjective.js'),
  Adverb: require('./term/adverb/adverb.js'),
  Noun: require('./term/noun/noun.js'),
  Value: require('./term/noun/value/value.js'),
  Person: require('./term/noun/person/person.js'),
  Place: require('./term/noun/place/place.js'),
  Date: require('./term/noun/date/date.js'),
  Organization: require('./term/noun/organization/organization.js')
};

function NLP() {

  this.plugin = function (obj) {
    obj = obj || {};
    // if obj is a function, pass it an instance of this nlp library
    if (fns.isFunction(obj)) {
      // run it in this current context
      obj = obj.call(this, this);
    }
    //apply each plugin to the correct prototypes
    Object.keys(obj).forEach(function (k) {
      Object.keys(obj[k]).forEach(function (method) {
        models[k].fn[method] = obj[k][method];
      });
    });
  };
  this.lexicon = function () {
    return require('./lexicon.js');
  };

  this.term = function (s) {
    return new models.Term(s);
  };
  this.noun = function (s) {
    return new models.Noun(s);
  };
  this.verb = function (s) {
    return new models.Verb(s);
  };
  this.adjective = function (s) {
    return new models.Adjective(s);
  };
  this.adverb = function (s) {
    return new models.Adverb(s);
  };

  this.value = function (s) {
    return new models.Value(s);
  };
  this.person = function (s) {
    return new models.Person(s);
  };
  this.place = function (s) {
    return new models.Place(s);
  };
  this.date = function (s) {
    return new models.Date(s);
  };
  this.organization = function (s) {
    return new models.Organization(s);
  };

  this.text = function (s, options) {
    return new models.Text(s, options);
  };
  this.sentence = function (s, options) {
    return new models.Sentence(s, options);
  };
  this.statement = function (s) {
    return new models.Statement(s);
  };
  this.question = function (s) {
    return new models.Question(s);
  };
}

var nlp = new NLP();
//export to window or webworker
if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' || typeof DedicatedWorkerGlobalScope === 'function') {
  self.nlp_compromise = nlp;
}
//export to commonjs
if (typeof module !== 'undefined' && module.exports) {
  module.exports = nlp;
}
//export to amd
if (typeof define === 'function' && define.amd) {
  define(nlp);
}

// console.log(nlp.sentence('Dr. John Smith is five feet tall.').normal());

},{"./fns.js":23,"./lexicon.js":25,"./sentence/question/question.js":54,"./sentence/sentence.js":57,"./sentence/statement/statement.js":60,"./term/adjective/adjective.js":62,"./term/adverb/adverb.js":67,"./term/noun/date/date.js":72,"./term/noun/noun.js":78,"./term/noun/organization/organization.js":80,"./term/noun/person/person.js":84,"./term/noun/place/place.js":86,"./term/noun/value/value.js":96,"./term/term.js":97,"./term/verb/verb.js":106,"./text/text.js":109}],25:[function(require,module,exports){
//the lexicon is a big hash of words to pos tags
//it's built by conjugating and inflecting a small seed of terms
'use strict';

var fns = require('./fns.js');
var verb_conjugate = require('./term/verb/conjugate/conjugate.js');
var to_comparative = require('./term/adjective/to_comparative.js');
var to_superlative = require('./term/adjective/to_superlative.js');
var to_adverb = require('./term/adjective/to_adverb.js');
var grand_mapping = require('./sentence/pos/parts_of_speech.js').tag_mapping;

var lexicon = {};

var addObj = function addObj(obj) {
  var keys = Object.keys(obj);
  var l = keys.length;
  for (var i = 0; i < l; i++) {
    lexicon[keys[i]] = obj[keys[i]];
  }
};

var addArr = function addArr(arr, tag) {
  var l = arr.length;
  for (var i = 0; i < l; i++) {
    lexicon[arr[i]] = tag;
  }
};

//conjugate all verbs.
var verbMap = {
  infinitive: 'Infinitive',
  present: 'PresentTense',
  past: 'PastTense',
  gerund: 'Gerund',
  actor: 'Actor',
  future: 'FutureTense',
  pluperfect: 'PluperfectTense',
  perfect: 'PerfectTense',

  PerfectTense: 'PerfectTense',
  PluperfectTense: 'PluperfectTense',
  FutureTense: 'FutureTense',
  PastTense: 'PastTense',
  PresentTense: 'PresentTense'
};

var irregulars = require('./data/irregular_verbs.js');
var verbs = require('./data/verbs.js').concat(Object.keys(irregulars));

var _loop = function _loop(i) {
  var o = verb_conjugate(verbs[i]);
  Object.keys(o).forEach(function (k) {
    if (k && o[k] && verbMap[k]) {
      lexicon[o[k]] = verbMap[k];
    }
  });
};

for (var i = 0; i < verbs.length; i++) {
  _loop(i);
}

var orgs = require('./data/organizations.js');
addArr(orgs.organizations, 'Noun');
addArr(orgs.suffixes, 'Noun');

var places = require('./data/places.js');
addArr(places.countries, 'Place');
addArr(places.cities, 'Place');

require('./data/adjectives.js').forEach(function (s) {
  lexicon[s] = 'Adjective';
  lexicon[to_comparative(s)] = 'Comparative';
  lexicon[to_superlative(s)] = 'Superlative';
  lexicon[to_adverb(s)] = 'Adverb';
});
Object.keys(require('./data/convertables.js')).forEach(function (s) {
  lexicon[s] = 'Adjective';
  lexicon[to_comparative(s)] = 'Comparative';
  lexicon[to_superlative(s)] = 'Superlative';
  lexicon[to_adverb(s)] = 'Adverb';
});

addArr(require('./data/abbreviations.js').abbreviations, 'Abbreviation');
addArr(require('./data/demonyms.js'), 'Demonym');
addArr(require('./data/currencies.js'), 'Currency');
addArr(require('./data/honourifics.js'), 'Honourific');
addArr(require('./data/uncountables.js'), 'Noun');
var dates = require('./data/dates.js');
addArr(dates.days, 'Date');
addArr(dates.months, 'Date');
addArr(dates.durations, 'Date');
addArr(dates.relative, 'Date');

//unpack the numbers
var nums = require('./data/numbers.js');
var all_nums = Object.keys(nums).reduce(function (arr, k) {
  arr = arr.concat(Object.keys(nums[k]));
  return arr;
}, []);
addArr(all_nums, 'Value');

//a little fancy
addArr(Object.keys(require('./data/firstnames.js')), 'Person');
//add irregular nouns
var irregNouns = require('./data/irregular_nouns.js');
addArr(fns.pluck(irregNouns, 0), 'Noun');
addArr(fns.pluck(irregNouns, 1), 'Plural');

addObj(require('./data/misc.js'));
addObj(require('./data/multiples.js'));
addObj(require('./data/phrasal_verbs.js'));
//add named holidays, like 'easter'
Object.keys(require('./data/holidays.js')).forEach(function (k) {
  lexicon[k] = 'Date';
});

//professions
addArr(require('./data/professions.js'), 'Actor');

//just in case
delete lexicon[false];
delete lexicon[true];
delete lexicon[undefined];
delete lexicon[null];
delete lexicon[''];

//use 'Noun', not 'NN'
Object.keys(lexicon).forEach(function (k) {
  lexicon[k] = grand_mapping[lexicon[k]] || lexicon[k];
});

module.exports = lexicon;
// console.log(lexicon['raining in']);

},{"./data/abbreviations.js":1,"./data/adjectives.js":2,"./data/convertables.js":3,"./data/currencies.js":4,"./data/dates.js":5,"./data/demonyms.js":6,"./data/firstnames.js":7,"./data/holidays.js":8,"./data/honourifics.js":9,"./data/irregular_nouns.js":10,"./data/irregular_verbs.js":11,"./data/misc.js":12,"./data/multiples.js":13,"./data/numbers.js":16,"./data/organizations.js":17,"./data/phrasal_verbs.js":18,"./data/places.js":19,"./data/professions.js":20,"./data/uncountables.js":21,"./data/verbs.js":22,"./fns.js":23,"./sentence/pos/parts_of_speech.js":36,"./term/adjective/to_adverb.js":63,"./term/adjective/to_comparative.js":64,"./term/adjective/to_superlative.js":66,"./term/verb/conjugate/conjugate.js":98}],26:[function(require,module,exports){
'use strict';
// a regex-like lookup for a list of terms.
// returns matches in a 'Terms' class

var Result = require('./result');
var syntax_parse = require('./syntax_parse');
var match_term = require('./match_term');

// take a slice of our terms, and try a match starting here
var tryFromHere = function tryFromHere(terms, regs, options) {
  var result = [];
  var which_term = 0;
  for (var i = 0; i < regs.length; i++) {
    var term = terms[which_term];
    //if we hit the end of terms, prematurely
    if (!term) {
      return null;
    }
    //find a match with term, (..), [..], or ~..~ syntax
    if (match_term(term, regs[i], options)) {
      //handle '$' logic
      if (regs[i].signals.trailing && terms[which_term + 1]) {
        return null;
      }
      //handle '^' logic
      if (regs[i].signals.leading && which_term !== 0) {
        return null;
      }
      result.push(terms[which_term]);
      which_term += 1;
      continue;
    }
    //if it's a contraction, go to next term
    if (term.normal === '') {
      result.push(terms[which_term]);
      which_term += 1;
      term = terms[which_term];
    }
    //support wildcards, some matching logic
    // '.' means easy-pass
    if (regs[i].signals.any_one) {
      result.push(terms[which_term]);
      which_term += 1;
      continue;
    }
    //else, if term was optional, continue anyways
    if (regs[i].signals.optional) {
      continue; //(this increments i, but not which_term)
    }
    //attempt is dead.
    return null;
  }
  //success, return terms subset
  return result;
};

//find first match and return []Terms
var findAll = function findAll(terms, regs, options) {
  var result = [];
  regs = syntax_parse(regs || '');
  // one-off lookup for ^
  // '^' token is 'must start at 0'
  if (regs[0].signals.leading) {
    var match = tryFromHere(terms, regs, options) || [];
    if (match) {
      return [new Result(match)];
    } else {
      return null;
    }
  }

  //repeating version starting from each term
  var len = terms.length; // - regs.length + 1;
  for (var i = 0; i < len; i++) {
    var termSlice = terms.slice(i, terms.length);
    var match = tryFromHere(termSlice, regs, options);
    if (match) {
      result.push(new Result(match));
    }
  }
  //if we have no results, return null
  if (result.length === 0) {
    return null;
  }
  return result;
};

//calls Terms.replace() on each found result
var replaceAll = function replaceAll(terms, regs, replacement, options) {
  var list = findAll(terms, regs, options);
  if (list) {
    list.forEach(function (t) {
      t.replace(replacement, options);
    });
  }
};

module.exports = {
  findAll: findAll,
  replaceAll: replaceAll
};

},{"./match_term":27,"./result":28,"./syntax_parse":29}],27:[function(require,module,exports){
'use strict';

var fns = require('../fns.js');

//a regex-like string search
// returns a boolean for match/not
var match_term = function match_term(term, reg) {
  //fail-fast
  if (!term || !reg || !reg.signals) {
    return false;
  }
  var signals = reg.signals;

  //support optional (foo|bar) syntax
  if (signals.one_of) {
    var arr = reg.term.split('|');
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === term.normal || arr[i] === term.text) {
        return true;
      }
    }
    return false;
  }
  //support [Pos] syntax
  if (signals.pos) {
    var pos = fns.titlecase(reg.term);
    if (term.pos[pos]) {
      return true;
    }
    return false;
  }
  //support ~alias~ syntax
  if (signals.alias) {
    if (reg.term === term.root()) {
      return true;
    }
    return false;
  }
  //straight-up text match
  if (reg.term === term.normal || reg.term === term.text || reg.term === term.expansion) {
    return true;
  }

  return false;
};

module.exports = match_term;

},{"../fns.js":23}],28:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _match = require('./match.js');

// a slice of term objects returned from .match()
// ideally changes that happen here happen in the original object

var Result = function () {
  function Result(terms) {
    _classCallCheck(this, Result);

    this.terms = terms;
  }
  //wha, this is possible eg. text.match().match()

  _createClass(Result, [{
    key: 'match',
    value: function match(str, options) {
      return _match(this.terms, str, options);
    }
    //a 1-1 replacement of strings

  }, {
    key: 'replace',
    value: function replace(words) {
      for (var i = 0; i < this.terms.length; i++) {
        //umm, this is like a capture-group in regexp..
        //so just leave it
        if (words[i] === '$') {
          continue;
        }
        //allow replacements with the capture group, like 'cyber-$1'
        if (words[i].match(/\$1/)) {
          var combined = words[1].replace(/\$1/, this.terms[i].text);
          this.terms[i].changeTo(combined);
          continue;
        }
        this.terms[i].changeTo(words[i] || '');
      }
      return this;
    }
  }, {
    key: 'text',
    value: function text() {
      return this.terms.reduce(function (s, t) {
        //implicit contractions shouldn't be included
        if (t.text) {
          s += ' ' + t.text;
        }
        return s;
      }, '').trim();
    }
  }, {
    key: 'normal',
    value: function normal() {
      return this.terms.reduce(function (s, t) {
        //implicit contractions shouldn't be included
        if (t.normal) {
          s += ' ' + t.normal;
        }
        return s;
      }, '').trim();
    }
  }]);

  return Result;
}();
//a slice of term objects

module.exports = Result;

},{"./match.js":26}],29:[function(require,module,exports){
'use strict';
// parse a search lookup term find the regex-like syntax in this term

var fns = require('../fns.js');
// flags:
// {
//   pos: true,
//   optional: true,
//   one_of: true,
//   alias: true,
//   leading: true,
//   trailing: true,
//   any_one: true,
//   any_many: true,
// }

var parse_term = function parse_term(term, i) {
  term = term || '';
  term = term.trim();
  var signals = {};
  //order matters!

  //leading ^ flag
  if (fns.startsWith(term, '^')) {
    term = term.substr(1, term.length);
    signals.leading = true;
  }
  //trailing $ flag means ending
  if (fns.endsWith(term, '$')) {
    term = term.replace(/\$$/, '');
    signals.trailing = true;
  }
  //optional flag
  if (fns.endsWith(term, '?')) {
    term = term.replace(/\?$/, '');
    signals.optional = true;
  }

  //pos flag
  if (fns.startsWith(term, '[') && fns.endsWith(term, ']')) {
    term = term.replace(/\]$/, '');
    term = term.replace(/^\[/, '');
    signals.pos = true;
  }
  //one_of options flag
  if (fns.startsWith(term, '(') && fns.endsWith(term, ')')) {
    term = term.replace(/\)$/, '');
    term = term.replace(/^\(/, '');
    signals.one_of = true;
  }
  //alias flag
  if (fns.startsWith(term, '~')) {
    term = term.replace(/^\~/, '');
    term = term.replace(/\~$/, '');
    signals.alias = true;
  }
  //addition flag
  if (fns.startsWith(term, '+')) {
    term = term.replace(/^\+/, '');
    term = term.replace(/\+$/, '');
    signals.extra = true;
  }

  //a period means anything
  if (term === '.') {
    signals.any_one = true;
  }
  //a * means anything
  if (term === '*') {
    signals.any_many = true;
  }
  return {
    term: term,
    signals: signals,
    i: i
  };
};
// console.log(parse_term('(one|1) (two|2)'));

//turn a match string into an array of objects
var parse_all = function parse_all(regs) {
  regs = regs || [];
  return regs.map(parse_term);
};
// console.log(parse_all(''));

module.exports = parse_all;

},{"../fns.js":23}],30:[function(require,module,exports){
'use strict';
//turns 'is not' into "isn't", and "he is" into "he's"

var contractor = {
  'will': 'll',
  'would': 'd',
  'have': 've',
  'are': 're',
  'not': 't',
  'is': 's'
  // 'was': 's' //this is too folksy
};

var contract = function contract(terms) {
  for (var i = 1; i < terms.length; i++) {
    if (contractor[terms[i].normal]) {
      //remember expansion
      terms[i - 1].expansion = terms[i - 1].text;
      terms[i].expansion = terms[i].text;
      //handle special `n't` case
      if (terms[i].normal === 'not') {
        terms[i - 1].text += 'n';
      }
      terms[i - 1].text += '\'' + contractor[terms[i].normal];
      terms[i - 1].rebuild();
      terms[i].text = '';
      terms[i].rebuild();
    }
  }
  return terms;
};

module.exports = contract;

},{}],31:[function(require,module,exports){
'use strict';

var expand = function expand(terms) {
  for (var i = 0; i < terms.length; i++) {
    if (terms[i].expansion) {
      terms[i].text = terms[i].expansion;
      terms[i].rebuild();
    }
  }
  return terms;
};

module.exports = expand;

},{}],32:[function(require,module,exports){
'use strict';

//boolean if sentence has

// "[copula] [pastTense] by"
// "[pastParticiple] by"

var passive_voice = function passive_voice(s) {
  var terms = s.terms;
  for (var i = 0; i < terms.length - 2; i++) {
    if (terms[i].pos['Copula'] && terms[i + 1].pos['Verb'] && terms[i + 2].normal === 'by') {
      //don't do 'june was approaching by then'
      if (terms[i + 1].pos['Gerund']) {
        continue;
      }
      return true;
    }
  }
  return false;
};

module.exports = passive_voice;

},{}],33:[function(require,module,exports){
'use strict';

var pos = require('./parts_of_speech');

//set the part-of-speech of a particular term
var assign = function assign(t, tag, reason) {
  var P = pos.classMapping[tag] || pos.Term;
  var expansion = t.expansion;
  var whitespace = t.whitespace;
  t = new P(t.text, tag);
  t.reason = reason;
  t.whitespace = whitespace;
  t.expansion = expansion;
  return t;
};
module.exports = assign;

},{"./parts_of_speech":36}],34:[function(require,module,exports){
//fancy combining/chunking of terms
'use strict';

var pos = require('./parts_of_speech');

var shouldLumpThree = function shouldLumpThree(a, b, c) {
  if (!a || !b || !c) {
    return false;
  }
  //some weak-pos

  var lump_rules = [{
    condition: a.pos.Noun && b.text === '&' && c.pos.Noun, //John & Joe's
    result: 'Person'
  }, {
    condition: a.pos.Noun && b.text === 'N' && c.pos.Noun, //John N Joe's
    result: 'Person'
  }, {
    condition: a.pos.Date && b.normal === 'the' && c.pos.Value, //June the 5th
    result: 'Date'
  }, {
    condition: a.pos.Value && b.pos.Preposition && c.pos.Date, //June the 5th
    result: 'Date'
  }, {
    condition: a.pos.Date && b.pos.Preposition && c.pos.Value, //June 5th to 7th
    result: 'Date'
  }, {
    condition: a.is_capital() && b.normal === 'of' && c.is_capital(), //President of Mexico
    result: 'Noun'
  }, {
    condition: a.text.match(/^["']/) && !b.text.match(/["']/) && c.text.match(/["']$/), //three-word quote
    result: 'Noun'
  }, {
    condition: a.normal === 'will' && b.normal === 'have' && b.pos.Verb, //will have walk
    result: 'FutureTense'
  }, {
    condition: a.pos.Date && (c.pos.Date || c.pos.Ordinal) && (b.pos.Preposition || b.pos.Determiner || b.pos.Conjunction || b.pos.Adjective), //3hrs after 5pm
    result: 'Date'
  }];
  for (var i = 0; i < lump_rules.length; i++) {
    if (lump_rules[i].condition) {
      return lump_rules[i].result;
    }
  }
  return false;
};

var shouldLumpTwo = function shouldLumpTwo(a, b) {
  if (!a || !b) {
    return false;
  }
  //don't chunk non-word things with word-things
  if (a.is_word() === false || b.is_word() === false) {
    return false;
  }
  var lump_rules = [{
    condition: a.pos.Person && b.pos.Honourific || a.pos.Honourific && b.pos.Person, //"John sr."
    result: 'Person'
  }, {
    condition: (a.pos.Value || a.pos.Date) && (b.normal === 'am' || b.normal === 'pm'), //6 am
    result: 'Date'
  }, {
    condition: a.pos.Honourific && b.is_capital(), //'Dr. John
    result: 'Person'
  }, {
    condition: a.pos.Person && b.is_capital(), //'Person, Capital -> Person'
    result: 'Person'
  }, {
    condition: a.pos.Date && b.pos.Value, //June 4
    result: 'Date'
  }, {
    condition: a.pos.Value && b.pos.Date, //4 June
    result: 'Date'
  }, {
    condition: (a.normal === 'last' || a.normal === 'next' || a.normal === 'this') && b.pos.Date, //last wednesday
    result: 'Date'
  }, {
    condition: a.pos.Noun && b.pos.Actor, //Aircraft designer
    result: 'Actor'
  }, {
    condition: a.pos.Value && b.pos.Noun && !a.pos.Ordinal, //5 books
    result: 'Value'
  }, {
    condition: a.is_capital() && b.pos['Organization'] || b.is_capital() && a.pos['Organization'], //Canada Inc
    result: 'Organization'
  }, {
    condition: a.text.match(/^["']/) && b.text.match(/["']$/), //two-word quote
    result: 'Noun'
  }, {
    condition: a.normal === 'will' && b.pos.Verb, //will walk (perfect)
    result: 'PerfectTense'
  }, {
    condition: a.normal.match(/^will ha(ve|d)$/) && b.pos.Verb, //will have walked (pluperfect)
    result: 'PluperfectTense'
  },
  //timezones
  {
    condition: b.normal.match(/(standard|daylight|summer) time/) && (a.pos['Adjective'] || a.pos['Place']),
    result: 'Date'
  }, {
    condition: a.pos.Demonym && b.pos.Currency, //canadian dollar, Brazilian pesos
    result: 'Currency'
  }];
  for (var i = 0; i < lump_rules.length; i++) {
    if (lump_rules[i].condition) {
      return lump_rules[i].result;
    }
  }
  return false;
};

var fancy_lumping = function fancy_lumping(terms) {
  for (var i = 1; i < terms.length; i++) {
    var a = terms[i - 1];
    var b = terms[i];
    var c = terms[i + 1];

    // rules for lumping two terms
    var tag = shouldLumpTwo(a, b);
    if (tag) {
      var Cl = pos.classMapping[tag] || pos.Term;
      var space = a.whitespace.trailing + b.whitespace.preceding;
      // console.log(terms[i - 1]);
      // console.log(terms[i]);
      terms[i] = new Cl(a.text + space + b.text, tag);
      terms[i].reason = 'lumpedtwo(' + terms[i].reason + ')';
      terms[i].whitespace.preceding = a.whitespace.preceding;
      terms[i].whitespace.trailing = b.whitespace.trailing;
      terms[i - 1] = null;
      continue;
    }

    // rules for lumpting three terms
    if (c) {
      tag = shouldLumpThree(a, b, c);
      if (tag) {
        var Cl = pos.classMapping[tag] || pos.Term;
        var space1 = a.whitespace.trailing + b.whitespace.preceding;
        var space2 = b.whitespace.trailing + c.whitespace.preceding;
        var text = a.text + space1 + b.text + space2 + c.text;
        terms[i - 1] = new Cl(text, tag);
        terms[i - 1].reason = 'lumpedThree(' + terms[i].reason + ')';
        //transfer unused-up whitespace
        terms[i - 1].whitespace.preceding = a.whitespace.preceding;
        terms[i - 1].whitespace.trailing = c.whitespace.trailing;
        terms[i] = null;
        terms[i + 1] = null;
        continue;
      }
    }
  }
  //remove killed terms
  terms = terms.filter(function (t) {
    return t !== null;
  });
  return terms;
};

module.exports = fancy_lumping;

},{"./parts_of_speech":36}],35:[function(require,module,exports){
'use strict';

var friendlies = [['Noun', 'Abbreviation'], ['Abbreviation', 'Noun']];

var should_chunk = function should_chunk(a, b) {
  if (!a || !b) {
    return false;
  }
  //if A has a comma, don't chunk it, (unless it's a  date)
  if (a.has_comma() && !a.pos.Date) {
    return false;
  }
  //eg "spencer's house"
  if (a.pos['Possessive']) {
    return false;
  }
  //don't chunk non-word things with word-things
  if (a.is_word() === false || b.is_word() === false) {
    return false;
  }
  //dont chunk these pos
  var dont_chunk = ['Expression', 'Phrasal'];
  for (var i = 0; i < dont_chunk.length; i++) {
    if (a.pos[dont_chunk[i]] || b.pos[dont_chunk[i]]) {
      return false;
    }
  }
  //dont chunk contractions (again)
  if (a.expansion || b.expansion) {
    return false;
  }
  if (a.tag === b.tag) {
    return true;
  }
  for (var i = 0; i < friendlies.length; i++) {
    var f = friendlies[i];
    if (a.pos[f[0]] && b.pos[f[1]]) {
      return true;
    }
  }
  //matching nouns
  // if (a.pos['Noun'] && b.pos['Noun']) {
  //   return true;
  // }
  return false;
};

//turn [noun, noun..] into [noun..]
var chunk_neighbours = function chunk_neighbours(terms) {
  var new_terms = [];
  var last_one = null;
  for (var i = 0; i < terms.length; i++) {
    var t = terms[i];
    //if the tags match (but it's not a hidden contraction)
    if (should_chunk(last_one, t)) {
      var space = last_one.whitespace.trailing + t.whitespace.preceding;
      new_terms[new_terms.length - 1].text += space + t.text;
      new_terms[new_terms.length - 1].normalize();
      new_terms[new_terms.length - 1].whitespace.trailing = t.whitespace.trailing;
      new_terms[new_terms.length - 1].whitespace.preceding = last_one.whitespace.preceding;
    } else {
      new_terms.push(t);
    }
    last_one = t;
  }
  return new_terms;
};

module.exports = chunk_neighbours;

},{}],36:[function(require,module,exports){
'use strict';

var Term = require('../../term/term.js');

var Verb = require('../../term/verb/verb.js');
var Adverb = require('../../term/adverb/adverb.js');
var Adjective = require('../../term/adjective/adjective.js');

var Noun = require('../../term/noun/noun.js');
var Person = require('../../term/noun/person/person.js');
var Place = require('../../term/noun/place/place.js');
var Organization = require('../../term/noun/organization/organization.js');
var Value = require('../../term/noun/value/value.js');
var _Date = require('../../term/noun/date/date.js');

var tag_mapping = {
  //nouns
  'NNA': 'Acronym',
  'NNS': 'Plural',
  'NN': 'Noun',
  'NNO': 'Possessive',
  'CD': 'Value',
  // 'NNP': 'Noun',
  // 'NNPA': 'Noun',
  // 'NNAB': 'Noun',
  // 'NNPS': 'Noun',
  // 'NNG': 'Noun',
  'AC': 'Actor',
  'DA': 'Date',
  'CO': 'Condition',
  'PN': 'Person',

  //glue
  'PP': 'Possessive',
  'PRP': 'Pronoun',
  'EX': 'Expression', //interjection
  'DT': 'Determiner',
  'CC': 'Conjunction',
  'IN': 'Preposition',

  //verbs
  'VB': 'Verb',
  'VBD': 'PastTense',
  'VBF': 'FutureTense',
  'VBP': 'Infinitive',
  'VBZ': 'PresentTense',
  'VBG': 'Gerund',
  'VBN': 'Verb',
  'CP': 'Copula',
  'MD': 'Modal',
  'JJ': 'Adjective',
  'JJR': 'Comparative',
  'JJS': 'Superlative',
  'RB': 'Adverb'
};

var classMapping = {
  'Noun': Noun,
  'Honourific': Noun,
  'Acronym': Noun,
  'Plural': Noun,
  'Pronoun': Noun,
  'Actor': Noun,
  'Abbreviation': Noun,
  'Currency': Noun,

  'Verb': Verb,
  'PresentTense': Verb,
  'FutureTense': Verb,
  'PastTense': Verb,
  'Infinitive': Verb,
  'PerfectTense': Verb,
  'PluperfectTense': Verb,
  'Gerund': Verb,
  'Copula': Verb,
  'Modal': Verb,

  'Comparative': Adjective,
  'Superlative': Adjective,
  'Adjective': Adjective,
  'Demonym': Adjective,

  'Determiner': Term,
  'Preposition': Term,
  'Expression': Term,
  'Conjunction': Term,
  'Possessive': Term,

  'Adverb': Adverb,
  'Value': Value,
  'Place': Place,
  'Person': Person,
  'Organization': Organization,
  'Date': _Date
};

module.exports = {
  tag_mapping: tag_mapping,
  classMapping: classMapping,
  Term: Term,
  'Date': _Date,
  Value: Value,
  Verb: Verb,
  Person: Person,
  Place: Place,
  Organization: Organization,
  Adjective: Adjective,
  Adverb: Adverb,
  Noun: Noun
};

},{"../../term/adjective/adjective.js":62,"../../term/adverb/adverb.js":67,"../../term/noun/date/date.js":72,"../../term/noun/noun.js":78,"../../term/noun/organization/organization.js":80,"../../term/noun/person/person.js":84,"../../term/noun/place/place.js":86,"../../term/noun/value/value.js":96,"../../term/term.js":97,"../../term/verb/verb.js":106}],37:[function(require,module,exports){
'use strict';

var assign = require('../assign');

//date words that are sometimes-not..
var tough_dates = {
  may: true,
  april: true,
  march: true,
  june: true,
  jan: true
};

//an integer that looks year-like
var maybe_year = function maybe_year(t) {
  if (t.pos.Value) {
    var num = t.number || 0;
    if (num >= 1900 && num < 2030) {
      return true;
    }
  }
  return false;
};

//neighbouring words that indicate it is a date
var date_signals = {
  between: true,
  before: true,
  after: true,
  during: true,
  from: true,
  to: true,
  in: true,
  of: true,
  the: true,
  next: true
};

var ambiguous_dates = function ambiguous_dates(terms) {
  for (var i = 0; i < terms.length; i++) {
    var t = terms[i];
    if (tough_dates[t.normal] || maybe_year(t)) {
      //'march' or '2015'
      //if nearby another date or value
      // console.log(terms[i + 1].pos.Verb);
      if (terms[i + 1] && (terms[i + 1].pos['Value'] || terms[i + 1].pos['Date'])) {
        terms[i] = assign(t, 'Date', 'date_signal');
        continue;
      }
      if (terms[i - 1] && (terms[i - 1].pos['Value'] || terms[i - 1].pos['Date'])) {
        terms[i] = assign(t, 'Date', 'date_signal');
        continue;
      }

      //if next term is date-like
      if (terms[i + 1] && date_signals[terms[i + 1].normal]) {
        terms[i] = assign(t, 'Date', 'date_signal');
        continue;
      }
      //if last term is date-like
      if (terms[i - 1] && date_signals[terms[i - 1].normal]) {
        terms[i] = assign(t, 'Date', 'date_signal');
        continue;
      }
    }
  }
  return terms;
};

module.exports = ambiguous_dates;

},{"../assign":33}],38:[function(require,module,exports){
'use strict';

var assign = require('../assign');
//set POS for capitalised words
var capital_signals = function capital_signals(terms) {
  //first words need careful rules
  if (terms[0] && terms[0].is_acronym()) {
    terms[0] = assign(terms[0], 'Noun', 'acronym');
  }
  //non-first-word capitals are nouns
  for (var i = 1; i < terms.length; i++) {
    if (terms[i].is_capital() || terms[i].is_acronym()) {
      terms[i] = assign(terms[i], 'Noun', 'capital_signal');
    }
  }
  return terms;
};
module.exports = capital_signals;

},{"../assign":33}],39:[function(require,module,exports){
'use strict';

var starts = {
  'if': true,
  'in the event': true,
  'in order to': true,
  'so long as': true,
  'provided': true,
  'save that': true,
  'after': true,
  'once': true,
  'subject to': true,
  'without': true,
  'effective': true,
  'upon': true,
  'during': true,
  'unless': true,
  'according': true,
  'notwithstanding': true,
  'when': true,
  'before': true
};

// ensure there's a verb in a couple words
var verbSoon = function verbSoon(terms, x) {
  for (var i = 0; i < 5; i++) {
    if (terms[i + x] && terms[i + x].pos['Verb']) {
      return true;
    }
  }
  return false;
};

// find the next upcoming comma
var nextComma = function nextComma(terms, i) {
  //don't be too aggressive
  var max = terms.length - 1;
  if (max > i + 7) {
    max = i + 7;
  }
  for (var x = i; x < max; x++) {
    //ensure there's a command and a verb coming up soon
    if (terms[x].has_comma() && verbSoon(terms, x)) {
      return x;
    }
  }
  //allow trailing conditions too
  if (i > 5 && terms.length - i < 5) {
    return terms.length;
  }
  return null;
};

//set these terms as conditional
var tagCondition = function tagCondition(terms, start, stop) {
  for (var i = start; i <= stop; i++) {
    if (!terms[i]) {
      break;
    }
    terms[i].pos['Condition'] = true;
  }
};

var conditional_pass = function conditional_pass(terms) {

  //try leading condition
  if (terms[0] && starts[terms[0].normal]) {
    var until = nextComma(terms, 0);
    if (until) {
      tagCondition(terms, 0, until);
    }
  }

  //try trailing condition
  for (var i = 3; i < terms.length; i++) {
    if (starts[terms[i].normal] && terms[i - 1].has_comma()) {
      var until = nextComma(terms, i);
      if (until) {
        tagCondition(terms, i, until);
        i += until;
      }
    }
  }
  return terms;
};

module.exports = conditional_pass;

},{}],40:[function(require,module,exports){
'use strict';

var pos = require('../../parts_of_speech');
//places a 'silent' term where a contraction, like "they're" exists

//the formulaic contraction types:
var supported = {
  'll': 'will',
  'd': 'would',
  've': 'have',
  're': 'are',
  'm': 'am' //this is not the safest way to support i'm
  //these ones are a bit tricksier:
  // 't': 'not',
  // 's': 'is' //or was
};

var irregulars = {
  'dunno': ['do not', 'know'],
  'wanna': ['want', 'to'],
  'gonna': ['going', 'to'],
  'im': ['i', 'am'],
  'alot': ['a', 'lot'],

  'dont': ['do not'],
  'don\'t': ['do not'],
  'dun': ['do not'],

  'won\'t': ['will not'],
  'wont': ['will not'],

  'can\'t': ['can not'],
  'cannot': ['can not'],

  'aint': ['is not'], //or 'are'
  'ain\'t': ['is not'],
  'shan\'t': ['should not'],

  'where\'d': ['where', 'did'],
  'when\'d': ['when', 'did'],
  'how\'d': ['how', 'did'],
  'what\'d': ['what', 'did'],
  'brb': ['be', 'right', 'back'],
  'let\'s': ['let', 'us']
};

// `n't` contractions - negate doesn't have a second term
var handle_negate = function handle_negate(terms, i) {
  terms[i].expansion = terms[i].text.replace(/n'.*/, '');
  terms[i].expansion += ' not';
  return terms;
};

//puts a 'implicit term' in this sentence, at 'i'
var handle_simple = function handle_simple(terms, i, particle) {
  terms[i].expansion = terms[i].text.replace(/'.*/, '');
  //make ghost-term
  var second_word = new pos.Verb('');
  second_word.expansion = particle;
  second_word.whitespace.trailing = terms[i].whitespace.trailing;
  terms[i].whitespace.trailing = ' ';
  terms.splice(i + 1, 0, second_word);
  return terms;
};

// expand manual contractions
var handle_irregulars = function handle_irregulars(terms, x, arr) {
  terms[x].expansion = arr[0];
  for (var i = 1; i < arr.length; i++) {
    var t = new pos.Term('');
    t.whitespace.trailing = terms[x].whitespace.trailing; //move whitespace
    terms[x].whitespace.trailing = ' ';
    t.expansion = arr[i];
    terms.splice(x + i, 0, t);
  }
  return terms;
};

// `'s` contractions
var handle_copula = function handle_copula(terms, i) {
  //fixup current term
  terms[i].expansion = terms[i].text.replace(/'s$/, '');
  //make ghost-term
  var second_word = new pos.Verb('');
  second_word.whitespace.trailing = terms[i].whitespace.trailing; //move whitespace
  terms[i].whitespace.trailing = ' ';
  second_word.expansion = 'is';
  terms.splice(i + 1, 0, second_word);
  return terms;
};

//turn all contraction-forms into 'silent' tokens
var interpret = function interpret(terms) {
  for (var i = 0; i < terms.length; i++) {
    //known-forms
    if (irregulars[terms[i].normal]) {
      terms = handle_irregulars(terms, i, irregulars[terms[i].normal]);
      continue;
    }
    //words with an apostrophe
    if (terms[i].has_abbreviation()) {
      var split = terms[i].normal.split(/'/);
      var pre = split[0];
      var post = split[1];
      // eg "they've"
      if (supported[post]) {
        terms = handle_simple(terms, i, supported[post]);
        continue;
      }
      // eg "couldn't"
      if (post === 't' && pre.match(/n$/)) {
        terms = handle_negate(terms, i);
        continue;
      }
      //eg "spencer's" -if it's possessive, it's not a contraction.
      if (post === 's' && terms[i].pos['Possessive']) {
        continue;
      }
      // eg "spencer's"
      if (post === 's') {
        terms = handle_copula(terms, i);
        continue;
      }
    }
  }

  return terms;
};

module.exports = interpret;

// let t = new pos.Verb(`spencer's`);
// let terms = interpret([t]);
// console.log(terms);

},{"../../parts_of_speech":36}],41:[function(require,module,exports){
'use strict';

var assign = require('../assign');
var grammar_rules = require('./rules/grammar_rules');
var fns = require('../../../fns');
// const match = require('../../match/match');

//tests a subset of terms against a array of tags
var hasTags = function hasTags(terms, tags) {
  if (terms.length !== tags.length) {
    return false;
  }
  for (var i = 0; i < tags.length; i++) {
    //do a [tag] match
    if (fns.startsWith(tags[i], '[') && fns.endsWith(tags[i], ']')) {
      var pos = tags[i].match(/^\[(.*?)\]$/)[1];
      if (!terms[i].pos[pos]) {
        return false;
      }
    } else if (terms[i].normal !== tags[i]) {
      //do a text-match
      return false;
    }
  }
  return true;
};

//hints from the sentence grammar
var grammar_rules_pass = function grammar_rules_pass(s) {
  for (var i = 0; i < s.terms.length; i++) {
    for (var o = 0; o < grammar_rules.length; o++) {
      var rule = grammar_rules[o];
      //does this rule match
      var terms = s.terms.slice(i, i + rule.before.length);
      if (hasTags(terms, rule.before)) {
        //change before/after for each term
        for (var c = 0; c < rule.before.length; c++) {
          if (rule.after[c]) {
            var newPos = rule.after[c].match(/^\[(.*?)\]$/)[1];
            s.terms[i + c] = assign(s.terms[i + c], newPos, 'grammar_rule  (' + rule.before.join(',') + ')');
          }
        }
        break;
      }
    }
  }
  return s.terms;
};
module.exports = grammar_rules_pass;

},{"../../../fns":23,"../assign":33,"./rules/grammar_rules":49}],42:[function(require,module,exports){
'use strict';

var assign = require('../assign');

//clear-up ambiguous interjections "ok"[Int], "thats ok"[Adj]
var interjection_fixes = function interjection_fixes(terms) {
  var interjections = {
    ok: true,
    so: true,
    please: true,
    alright: true,
    well: true,
    now: true
  };
  for (var i = 0; i < terms.length; i++) {
    if (i > 3) {
      break;
    }
    if (interjections[terms[i].normal]) {
      terms[i] = assign(terms[i], 'Expression', 'interjection_fixes');
    } else {
      break;
    }
  }
  return terms;
};

module.exports = interjection_fixes;

},{"../assign":33}],43:[function(require,module,exports){
'use strict';

var defaultLexicon = require('../../../lexicon.js');
var assign = require('../assign');

//consult lexicon for this known-word
var lexicon_pass = function lexicon_pass(terms, options) {
  var lexicon = options.lexicon || defaultLexicon;
  return terms.map(function (t) {

    var normal = t.normal;
    //normalize apostrophe s for grammatical purposes
    if (t.has_abbreviation()) {
      var split = normal.split(/'/);
      if (split[1] === 's') {
        normal = split[0];
      }
    }

    //check lexicon straight-up
    if (lexicon[normal] !== undefined) {
      return assign(t, lexicon[normal], 'lexicon_pass');
    }

    if (lexicon[t.expansion] !== undefined) {
      return assign(t, lexicon[t.expansion], 'lexicon_expansion');
    }
    //try to match it without a prefix - eg. outworked -> worked
    if (normal.match(/^(over|under|out|-|un|re|en).{3}/)) {
      var attempt = normal.replace(/^(over|under|out|.*?-|un|re|en)/, '');
      return assign(t, lexicon[attempt], 'lexicon_prefix');
    }
    //try to match without a contraction - "they've" -> "they"
    if (t.has_abbreviation()) {
      var attempt = normal.replace(/'(ll|re|ve|re|d|m)/, '');
      // attempt = normal.replace(/n't/, '');
      return assign(t, lexicon[attempt], 'lexicon_prefix');
    }

    //match 'twenty-eight'
    if (normal.match(/-/)) {
      var sides = normal.split('-');
      if (lexicon[sides[0]]) {
        return assign(t, lexicon[sides[0]], 'lexicon_dash');
      }
      if (lexicon[sides[1]]) {
        return assign(t, lexicon[sides[1]], 'lexicon_dash');
      }
    }
    return t;
  });
};
module.exports = lexicon_pass;

},{"../../../lexicon.js":25,"../assign":33}],44:[function(require,module,exports){
'use strict';

var lexicon = require('../../../lexicon.js');
var assign = require('../assign');

var should_merge = function should_merge(a, b) {
  if (!a || !b) {
    return false;
  }
  //if it's a known multiple-word term
  if (lexicon[a.normal + ' ' + b.normal]) {
    return true;
  }
  return false;
};

var multiples_pass = function multiples_pass(terms) {
  var new_terms = [];
  var last_one = null;
  for (var i = 0; i < terms.length; i++) {
    var t = terms[i];
    //if the tags match (but it's not a hidden contraction)
    if (should_merge(last_one, t)) {
      var last = new_terms[new_terms.length - 1];
      var space = t.whitespace.preceding + last.whitespace.trailing;
      last.text += space + t.text;
      last.rebuild();
      last.whitespace.trailing = t.whitespace.trailing;
      var pos = lexicon[last.normal];
      new_terms[new_terms.length - 1] = assign(last, pos, 'multiples_pass_lexicon');
      new_terms[new_terms.length - 1].whitespace = last.whitespace;
    } else {
      new_terms.push(t);
    }
    last_one = t;
  }
  return new_terms;
};

module.exports = multiples_pass;

},{"../../../lexicon.js":25,"../assign":33}],45:[function(require,module,exports){
'use strict';

//some prepositions are clumped onto the back of a verb "looked for", "looks at"
//they should be combined with the verb, sometimes.
//does not handle seperated phrasal verbs ('take the coat off' -> 'take off')

var phrasals = require('../../../data/phrasal_verbs');

//combine ['blew','up'] -> 'blew up'
var phrasal_verbs = function phrasal_verbs(terms) {
  for (var i = 0; i < terms.length - 1; i++) {
    if (!terms[i] || !terms[i + 1]) {
      break;
    }
    if (terms[i].pos['Verb'] && phrasals[terms[i].normal + terms[i + 1].normal]) {
      //don't do 'is in'
      if (terms[i].pos['Copula']) {
        continue;
      }
      terms[i].pos['Phrasal'] = true;
      terms[i].text = terms[i].text + ' ' + terms[i + 1].text;
      terms[i].reason = 'phrasal(' + terms[i].reason + ')';
      terms[i + 1] = null;
      terms[i].rebuild();
      // terms[i].conjugate();
    }
  }
  //remove killed-off ones
  terms = terms.filter(function (t) {
    return t !== null;
  });
  return terms;
};

module.exports = phrasal_verbs;

},{"../../../data/phrasal_verbs":18}],46:[function(require,module,exports){
'use strict';

var assign = require('../assign');
//decide if an apostrophe s is a contraction or not
// 'spencer's nice' -> 'spencer is nice'
// 'spencer's house' -> 'spencer's house'

//these are always contractions
var blacklist = {
  'it\'s': true,
  'that\'s': true
};

//a possessive means "'s" describes ownership, not a contraction, like 'is'
var is_possessive = function is_possessive(terms, x) {
  //these are always contractions, not possessive
  if (blacklist[terms[x].normal]) {
    return false;
  }
  //"spencers'" - this is always possessive - eg "flanders'"
  if (terms[x].normal.match(/[a-z]s'$/)) {
    return true;
  }
  //if no apostrophe s, return
  if (!terms[x].normal.match(/[a-z]'s$/)) {
    return false;
  }
  //some parts-of-speech can't be possessive
  if (terms[x].pos['Pronoun']) {
    return false;
  }
  var nextWord = terms[x + 1];
  //last word is possessive  - "better than spencer's"
  if (!nextWord) {
    return true;
  }
  //next word is 'house'
  if (nextWord.pos['Noun']) {
    return true;
  }
  //rocket's red glare
  if (nextWord.pos['Adjective'] && terms[x + 2] && terms[x + 2].pos['Noun']) {
    return true;
  }
  //next word is an adjective
  if (nextWord.pos['Adjective'] || nextWord.pos['Verb'] || nextWord.pos['Adverb']) {
    return false;
  }
  return false;
};

//tag each term as possessive, if it should
var possessive_pass = function possessive_pass(terms) {
  for (var i = 0; i < terms.length; i++) {
    if (is_possessive(terms, i)) {
      //if it's not already a noun, co-erce it to one
      if (!terms[i].pos['Noun']) {
        terms[i] = assign(terms[i], 'Noun', 'possessive_pass');
      }
      terms[i].pos['Possessive'] = true;
    }
  }
  return terms;
};
module.exports = possessive_pass;

},{"../assign":33}],47:[function(require,module,exports){
'use strict';
// knowing if something is inside a quotation is important grammatically
//set all the words inside quotations marks as pos['Quotation']=true
// verbatim change of narration only, 'scare quotes' don't count.

var startQuote = function startQuote(s) {
  return s.match(/^["\u201C]./);
};
var endQuote = function endQuote(s) {
  return s.match(/.["\u201D]$/);
};

//find the next quotation terminator
var quotation_ending = function quotation_ending(terms, start) {
  for (var i = start; i < terms.length; i++) {
    if (endQuote(terms[i].text)) {
      return i;
    }
  }
  return null;
};

//set these terms as quotations
var tagQuotation = function tagQuotation(terms, start, stop) {
  for (var i = start; i <= stop; i++) {
    if (!terms[i]) {
      break;
    }
    terms[i].pos['Quotation'] = true;
  }
};

//hunt
var quotation_pass = function quotation_pass(terms) {
  for (var i = 0; i < terms.length; i++) {
    if (startQuote(terms[i].text)) {
      var end = quotation_ending(terms, [i]);
      if (end !== null) {
        tagQuotation(terms, i, end);
        return terms;
      }
    }
  }
  return terms;
};

module.exports = quotation_pass;

},{}],48:[function(require,module,exports){
'use strict';

var word_rules = require('./rules/word_rules');
var assign = require('../assign');

//word-rules that run on '.text', not '.normal'
var punct_rules = [{ //2:54pm
  reg: new RegExp('^[12]?[0-9]\:[0-9]{2}( am| pm)?$', 'i'),
  pos: 'Date'
}, { //1999/12/25
  reg: new RegExp('^[0-9]{1,4}[-/][0-9]{1,2}[-/][0-9]{1,4}$', 'i'),
  pos: 'Date'
}, { //3:32
  reg: new RegExp('^[0-9]{1,2}:[0-9]{2}(:[0-9]{2})?', 'i'),
  pos: 'Date'
}];

var regex_pass = function regex_pass(terms) {
  terms.forEach(function (t, i) {
    //don't overwrite
    if (terms[i].tag !== '?') {
      return;
    }
    var text = terms[i].text;
    var normal = terms[i].normal;
    //normalize apostrophe s for grammatical purposes
    if (terms[i].has_abbreviation()) {
      var split = terms[i].normal.split(/'/);
      if (split[1] === 's') {
        normal = split[0];
      }
    }
    //regexes that involve punctuation
    for (var o = 0; o < punct_rules.length; o++) {
      if (text.match(punct_rules[o].reg)) {
        terms[i] = assign(terms[i], punct_rules[o].pos, 'rules_pass_' + o);
        return;
      }
    }
    //bigger list of regexes on normal
    for (var o = 0; o < word_rules.length; o++) {
      if (normal.match(word_rules[o].reg)) {
        terms[i] = assign(terms[i], word_rules[o].pos, 'rules_pass_' + o);
        return;
      }
    }
  });

  return terms;
};

module.exports = regex_pass;

},{"../assign":33,"./rules/word_rules":50}],49:[function(require,module,exports){
'use strict';

module.exports = [
//determiner hints
{
  'before': ['[Determiner]', '[?]'],
  'after': ['[Determiner]', '[Noun]']
}, {
  'before': ['the', '[Verb]'],
  'after': [null, '[Noun]']
}, {
  'before': ['[Determiner]', '[Adjective]', '[Verb]'],
  'after': ['[Noun]', '[Noun]', '[Noun]']
}, {
  'before': ['[Determiner]', '[Adverb]', '[Adjective]', '[?]'],
  'after': ['[Determiner]', '[Adverb]', '[Adjective]', '[Noun]']
}, {
  'before': ['[?]', '[Determiner]', '[Noun]'],
  'after': ['[Verb]', '[Determiner]', '[Noun]']
},
//"peter the great"
{
  'before': ['[Person]', 'the', '[Noun]'],
  'after': ['[Person]', null, '[Noun]']
},
// //"book the flight"
{
  'before': ['[Noun]', 'the', '[Noun]'],
  'after': ['[Verb]', null, '[Noun]']
},

//Possessive hints
{
  'before': ['[Possessive]', '[?]'],
  'after': ['[Possessive]', '[Noun]']
},
// {
//   'before': ['[Possessive]', '[Verb]'],
//   'after': ['[Possessive]', '[Noun]'],
// },
{
  'before': ['[?]', '[Possessive]', '[Noun]'],
  'after': ['[Verb]', '[Possessive]', '[Noun]']
},
//copula hints
{
  'before': ['[Copula]', '[?]'],
  'after': ['[Copula]', '[Adjective]'] }, // not sure
{
  'before': ['[Copula]', '[Adverb]', '[?]'],
  'after': ['[Copula]', '[Adverb]', '[Adjective]'] }, // not sure

//preposition hints
{
  'before': ['[?]', '[Preposition]'],
  'after': ['[Verb]', '[Preposition]']
},
//conjunction hints, like lists (a little sloppy)
{
  'before': ['[Adverb]', '[Conjunction]', '[Adverb]'],
  'after': ['[Adverb]', '[Adverb]', '[Adverb]']
},
//do not
{
  'before': ['[Verb]', 'not'],
  'after': ['[Verb]', '[Verb]']
},
// {
//   'before': ['[Noun]', '[Conjunction]', '[Noun]'],
//   'after': ['[Noun]', '[Noun]', '[Noun]'],
// },
{
  'before': ['[Adjective]', '[Conjunction]', '[Adjective]'],
  'after': ['[Adjective]', '[Adjective]', '[Adjective]']
}, {
  'before': ['[?]', '[Conjunction]', '[Verb]'],
  'after': ['[Verb]', '[Conjunction]', '[Verb]']
}, {
  'before': ['[Verb]', '[Conjunction]', '[?]'],
  'after': ['[Verb]', '[Conjunction]', '[Verb]']
},
//adverb hints
{
  'before': ['[Noun]', '[Adverb]', '[Noun]'],
  'after': ['[Noun]', '[Adverb]', '[Verb]']
},
//pronoun hints
{
  'before': ['[?]', '[Pronoun]'],
  'after': ['[Verb]', '[Pronoun]']
},
//modal hints
{
  'before': ['[Modal]', '[?]'],
  'after': ['[Modal]', '[Verb]']
}, {
  'before': ['[Modal]', '[Adverb]', '[?]'],
  'after': ['[Modal]', '[Adverb]', '[Verb]']
},
//ambiguous dates (march/may)
// {
//   'before': ['[Modal]', '[Value]'],
//   'after': ['[Modal]', '[Verb]'],
// },
{
  'before': ['[Adverb]', '[Value]'],
  'after': ['[Adverb]', '[Verb]']
}];

},{}],50:[function(require,module,exports){
'use strict';

var tag_mapping = require('../../parts_of_speech.js').tag_mapping;
//regex patterns and parts of speech],
module.exports = [['^[0-9]+ ?(am|pm)$', 'DA'], ['^[0-9]+(st|nd|rd)?$', 'CD'], ['^[a-z]et$', 'VB'], ['cede$', 'VB'], ['.[cts]hy$', 'JJ'], ['.[st]ty$', 'JJ'], ['.[lnr]ize$', 'VB'], ['.[gk]y$', 'JJ'], ['.fies$', 'VB'], ['.some$', 'JJ'], ['.[nrtumcd]al$', 'JJ'], ['.que$', 'JJ'], ['.[tnl]ary$', 'JJ'], ['.[di]est$', 'JJS'], ['^(un|de|re)\\-[a-z]..', 'VB'], ['.lar$', 'JJ'], ['[bszmp]{2}y', 'JJ'], ['.zes$', 'VB'], ['.[icldtgrv]ent$', 'JJ'], ['.[rln]ates$', 'VBZ'], ['.[oe]ry$', 'JJ'], ['[rdntkdhs]ly$', 'RB'], ['.[lsrnpb]ian$', 'JJ'], ['.[^aeiou]ial$', 'JJ'], ['.[^aeiou]eal$', 'JJ'], ['.[vrl]id$', 'JJ'], ['.[ilk]er$', 'JJR'], ['.ike$', 'JJ'], ['.ends?$', 'VB'], ['.wards$', 'RB'], ['.rmy$', 'JJ'], ['.rol$', 'NN'], ['.tors$', 'NN'], ['.azy$', 'JJ'], ['.where$', 'RB'], ['.ify$', 'VB'], ['.bound$', 'JJ'], ['.[^z]ens$', 'VB'], ['.oid$', 'JJ'], ['.vice$', 'NN'], ['.rough$', 'JJ'], ['.mum$', 'JJ'], ['.teen(th)?$', 'CD'], ['.oses$', 'VB'], ['.ishes$', 'VB'], ['.ects$', 'VB'], ['.tieth$', 'CD'], ['.ices$', 'NN'], ['.bles$', 'VB'], ['.pose$', 'VB'], ['.ions$', 'NN'], ['.ean$', 'JJ'], ['.[ia]sed$', 'JJ'], ['.tized$', 'VB'], ['.llen$', 'JJ'], ['.fore$', 'RB'], ['.ances$', 'NN'], ['.gate$', 'VB'], ['.nes$', 'VB'], ['.less$', 'RB'], ['.ried$', 'JJ'], ['.gone$', 'JJ'], ['.made$', 'JJ'], ['.[pdltrkvyns]ing$', 'JJ'], ['.tions$', 'NN'], ['.tures$', 'NN'], ['.ous$', 'JJ'], ['.ports$', 'NN'], ['. so$', 'RB'], ['.ints$', 'NN'], ['.[gt]led$', 'JJ'], ['.lked$', 'VB'], ['.fully$', 'RB'], ['.*ould$', 'MD'], ['^-?[0-9]+(.[0-9]+)?$', 'CD'], ['[a-z]*\\-[a-z]*\\-', 'JJ'], ['[a-z]\'s$', 'NNO'], ['.\'n$', 'VB'], ['.\'re$', 'CP'], ['.\'ll$', 'MD'], ['.\'t$', 'VB'], ['.tches$', 'VB'], ['^https?\:?\/\/[a-z0-9]', 'NN'], //the colon is removed in normalisation
['^www\.[a-z0-9]', 'NN'], ['.ize$', 'VB'], ['.[^aeiou]ise$', 'VB'], ['.[aeiou]te$', 'VB'], ['.ea$', 'NN'], ['[aeiou][pns]er$', 'NN'], ['.ia$', 'NN'], ['.sis$', 'NN'], ['.[aeiou]na$', 'NN'], ['.[^aeiou]ity$', 'NN'], ['.[^aeiou]ium$', 'NN'], ['.[^aeiou][ei]al$', 'JJ'], ['.ffy$', 'JJ'], ['.[^aeiou]ic$', 'JJ'], ['.(gg|bb|zz)ly$', 'JJ'], ['.[aeiou]my$', 'JJ'], ['.[aeiou]ble$', 'JJ'], ['.[^aeiou]ful$', 'JJ'], ['.[^aeiou]ish$', 'JJ'], ['.[^aeiou]ica$', 'NN'], ['[aeiou][^aeiou]is$', 'NN'], ['[^aeiou]ard$', 'NN'], ['[^aeiou]ism$', 'NN'], ['.[^aeiou]ity$', 'NN'], ['.[^aeiou]ium$', 'NN'], ['.[lstrn]us$', 'NN'], ['..ic$', 'JJ'], ['[aeiou][^aeiou]id$', 'JJ'], ['.[^aeiou]ish$', 'JJ'], ['.[^aeiou]ive$', 'JJ'], ['[ea]{2}zy$', 'JJ'], ['[^aeiou]ician$', 'AC'], ['.keeper$', 'AC'], ['.logist$', 'AC'], ['..ier$', 'AC'], ['.[^aeiou][ao]pher$', 'AC'], ['.tive$', 'AC'], ['[aeiou].*ist$', 'JJ'], ['[^i]fer$', 'VB'],
//slang things
['^um+$', 'EX'], //ummmm
['^([hyj]a)+$', 'EX'], //hahah
['^(k)+$', 'EX'], //kkkk
['^(yo)+$', 'EX'], //yoyo
['^yes+$', 'EX'], //yessss
['^no+$', 'EX'], //noooo
['^lol[sz]$', 'EX'], //lol
['^woo+[pt]?$', 'EX'], //woo
['^ug?h+$', 'EX'], //uhh
['^uh[ -]?oh$', 'EX']]. //uhoh
map(function (a) {
  return {
    reg: new RegExp(a[0], 'i'),
    pos: tag_mapping[a[1]]
  };
});

},{"../../parts_of_speech.js":36}],51:[function(require,module,exports){
//part-of-speech tagging
'use strict';

var lumper = require('./lumper');
var fancy_lumping = require('./fancy_lumping');
var pos = require('./parts_of_speech');
var assign = require('./assign');

var grammar_pass = require('./passes/grammar_pass');
var phrasal_verbs = require('./passes/phrasal_verbs');
var interjection_fixes = require('./passes/interjection_fixes');
var lexicon_pass = require('./passes/lexicon_pass');
var capital_signals = require('./passes/capital_signals');
var conditional_pass = require('./passes/conditional_pass');
var ambiguous_dates = require('./passes/ambiguous_dates');
var multiple_pass = require('./passes/multiples_pass');
var regex_pass = require('./passes/regex_pass');
var quotation_pass = require('./passes/quotation_pass');
var possessive_pass = require('./passes/possessive_pass');
var contraction_pass = require('./passes/contractions/interpret');

var noun_fallback = function noun_fallback(terms) {
  for (var i = 0; i < terms.length; i++) {
    if (terms[i].tag === '?' && terms[i].normal.match(/[a-z]/)) {
      terms[i] = assign(terms[i], 'Noun', 'fallback');
    }
  }
  return terms;
};

//turn nouns into person/place
var specific_noun = function specific_noun(terms) {
  for (var i = 0; i < terms.length; i++) {
    var t = terms[i];
    if (t instanceof pos.Noun) {
      if (t.is_person()) {
        terms[i] = assign(t, 'Person', 'is_person');
      } else if (t.is_place()) {
        terms[i] = assign(t, 'Place', 'is_place');
      } else if (t.is_value()) {
        terms[i] = assign(t, 'Value', 'is_value');
      } else if (t.is_date()) {
        terms[i] = assign(t, 'Date', 'is_date');
      } else if (t.is_organization()) {
        terms[i] = assign(t, 'Organization', 'is_organization');
      }
    }
  }
  return terms;
};

var tagger = function tagger(s, options) {
  //word-level rules
  s.terms = capital_signals(s.terms);
  s.terms = lexicon_pass(s.terms, options);
  s.terms = multiple_pass(s.terms);
  s.terms = regex_pass(s.terms);
  s.terms = interjection_fixes(s.terms);
  //repeat these steps a couple times, to wiggle-out the grammar
  for (var i = 0; i < 2; i++) {
    s.terms = grammar_pass(s);
    s.terms = specific_noun(s.terms);
    s.terms = ambiguous_dates(s.terms);
    s.terms = lumper(s.terms);
    s.terms = noun_fallback(s.terms);
    s.terms = phrasal_verbs(s.terms);
    s.terms = fancy_lumping(s.terms);
    s.terms = possessive_pass(s.terms);
  }
  s.terms = conditional_pass(s.terms);
  s.terms = quotation_pass(s.terms);
  s.terms = contraction_pass(s.terms);
  return s.terms;
};

module.exports = tagger;

},{"./assign":33,"./fancy_lumping":34,"./lumper":35,"./parts_of_speech":36,"./passes/ambiguous_dates":37,"./passes/capital_signals":38,"./passes/conditional_pass":39,"./passes/contractions/interpret":40,"./passes/grammar_pass":41,"./passes/interjection_fixes":42,"./passes/lexicon_pass":43,"./passes/multiples_pass":44,"./passes/phrasal_verbs":45,"./passes/possessive_pass":46,"./passes/quotation_pass":47,"./passes/regex_pass":48}],52:[function(require,module,exports){
'use strict';
//build-out this mapping

var interrogatives = {
  'who': 'who',
  'whose': 'who',
  'whom': 'who',
  'which person': 'who',

  'where': 'where',
  'when': 'when',

  'why': 'why',
  'how come': 'why'
};

var easyForm = function easyForm(s, i) {
  var t = s.terms[i];
  var nextTerm = s.terms[i + 1];

  //some interrogative forms are two-terms, try it.
  if (nextTerm) {
    var twoTerm = t.normal + ' ' + nextTerm.normal;
    if (interrogatives[twoTerm]) {
      return interrogatives[twoTerm];
    }
  }
  //try an interrogative first - 'who'
  if (interrogatives[t.normal]) {
    return interrogatives[t.normal];
  }
  //an interrogative as a contraction - 'why'd'
  if (interrogatives[t.expansion]) {
    return interrogatives[t.expansion];
  }
  return false;
};

module.exports = easyForm;

},{}],53:[function(require,module,exports){
'use strict';

var hardFormVerb = {
  'which': 'which',
  'what': 'what'
};

// "what time" -> 'when'
var knownForm = {
  time: 'when',
  day: 'when',
  year: 'when',

  person: 'who', //more covered by pos["Actor"]

  amount: 'number',
  number: 'number'
};

var hardForm = function hardForm(s, i) {
  var t = s.terms[i];
  var nextTerm = s.terms[i + 1];
  // which, or what
  var questionWord = hardFormVerb[t.normal] || hardFormVerb[t.expanded];
  // end early.
  if (!nextTerm || !questionWord) {
    return null;
  }

  //"which is.."
  if (nextTerm.pos['Copula']) {
    return t.normal;
  }
  //"which politician.."
  if (nextTerm.pos['Actor']) {
    return 'who';
  }
  //"what time.."
  if (knownForm[nextTerm.normal]) {
    return knownForm[nextTerm.normal];
  }

  return questionWord;
};

module.exports = hardForm;

},{}],54:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sentence = require('../sentence.js');
var question_form = require('./question_form');

var Question = function (_Sentence) {
  _inherits(Question, _Sentence);

  function Question(str, options) {
    _classCallCheck(this, Question);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Question).call(this, str, options));
  }

  _createClass(Question, [{
    key: 'form',
    value: function form() {
      return question_form(this);
    }
  }]);

  return Question;
}(Sentence);

Question.fn = Question.prototype;

module.exports = Question;

// let q = new Question(`accordingly, is he cool?`);
// let q = new Question(`what time did you show up?`);
// console.log(q.form());

},{"../sentence.js":57,"./question_form":55}],55:[function(require,module,exports){
'use strict';
//classifies a question into:

var yesNoTerm = require('./yesNo.js');
var easyForm = require('./easyForm.js');
var hardForm = require('./hardForm.js');

// how, when, where, who, why
// what, which
// number
// yesNo

//exceptions:
// You bought what!? - Echo question
// Who bought what? - Multiple wh-expressions
// I wonder who Fred will ask to leave. - passive question

// "Five Ws and one H" + 'which'
// let forms = {
// how: ['in what way'],
// what: ['what\'s'],
// which: ['what one'],
// number: ['how many', 'how much', 'how far', 'how long'],
// };

var question_form = function question_form(s) {
  //loop through and find first signal
  for (var i = 0; i < s.terms.length; i++) {

    //who is.. -> "who"
    var form = easyForm(s, i);
    if (form) {
      return form;
    }
    //which politician.. -> "who"
    form = hardForm(s, i);
    if (form) {
      return form;
    }
    //is he..  -> "yesNo"
    if (yesNoTerm(s, i)) {
      return 'yesNo';
    }
  }
  return null;
};

module.exports = question_form;

},{"./easyForm.js":52,"./hardForm.js":53,"./yesNo.js":56}],56:[function(require,module,exports){
'use strict';

// Yes/No questions take the form:
// he is -> is he?

var yesNoVerb = {
  is: true,
  are: true,
  was: true,
  will: true,
  do: true,
  did: true
};

var yesNoTerm = function yesNoTerm(s, i) {
  var t = s.terms[i];
  var lastTerm = s.terms[i - 1];
  var nextTerm = s.terms[i + 1];
  //try a yes/no question then
  if (yesNoVerb[t.normal] || yesNoVerb[t.expansion]) {
    //leading 'is x...' is a question
    if (!lastTerm) {
      return true;
    }
    //ending '... are.' is a not question
    if (!lastTerm) {
      return false;
    }
    // 'he is' is not a question..
    if (lastTerm.pos['Pronoun'] || lastTerm.pos['Person']) {
      return false;
    }
    // 'is he' is a question..
    if (nextTerm.pos['Pronoun'] || nextTerm.pos['Person']) {
      return true;
    }
  }
  return false;
};

module.exports = yesNoTerm;

},{}],57:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Term = require('../term/term');
var tagger = require('./pos/tagger');
var passive_voice = require('./passive_voice');
var contractions = {
  contract: require('./contractions/contract'),
  expand: require('./contractions/expand')
};
var change_tense = require('./tense');
var spot = require('./spot');
var _match = require('../match/match');
var tokenize_match = function tokenize_match() {};

//a sentence is an array of Term objects, along with their various methods

var Sentence = function () {
  function Sentence(str, options) {
    _classCallCheck(this, Sentence);

    this.str = '';
    if (typeof str === 'string') {
      this.str = str;
    } else if (typeof str === 'number') {
      this.str = '' + str;
    }
    options = options || {};
    var the = this;
    var words = this.str.split(/( +)/);
    //build-up term-objects
    this.terms = [];
    if (words[0] === '') {
      words.shift();
    }
    for (var i = 0; i < words.length; i++) {
      if (!words[i] || !words[i].match(/\S/i)) {
        continue;
      }
      var whitespace = {
        preceding: words[i - 1],
        trailing: words[i + 1]
      };
      //don't use them twice
      words[i - 1] = null;
      words[i + 1] = null;
      this.terms.push(new Term(words[i], null, whitespace));
    }
    // console.log(this.terms);
    //part-of-speech tagging
    this.terms = tagger(this, options);
    // process contractions
    //now the hard part is already done, just flip them
    this.contractions = {
      // "he'd go" -> "he would go"
      expand: function expand() {
        the.terms = contractions.expand(the.terms);
        return the;
      },
      // "he would go" -> "he'd go"
      contract: function contract() {
        the.terms = contractions.contract(the.terms);
        return the;
      }
    };
  }

  //Sentence methods:

  //insert a new word at this point

  _createClass(Sentence, [{
    key: 'addBefore',
    value: function addBefore(i, str) {
      var t = new Term(str);
      this.terms.splice(i, 0, t);
    }
  }, {
    key: 'addAfter',
    value: function addAfter(i, str) {
      var t = new Term(str);
      this.terms.splice(i + 1, 0, t);
    }

    // a regex-like lookup for a list of terms.
    // returns [] of matches in a 'Terms' class

  }, {
    key: 'match',
    value: function match(match_str, options) {
      var regs = tokenize_match(match_str);
      return _match.findAll(this.terms, regs, options);
    }
    //returns a transformed sentence

  }, {
    key: 'replace',
    value: function replace(match_str, replacement, options) {
      var regs = tokenize_match(match_str);
      replacement = tokenize_match(replacement);
      _match.replaceAll(this.terms, regs, replacement, options);
      return this;
    }

    //the ending punctuation

  }, {
    key: 'terminator',
    value: function terminator() {
      var allowed = ['.', '?', '!'];
      var punct = this.str.slice(-1) || '';
      if (allowed.indexOf(punct) !== -1) {
        return punct;
      }
      return '.';
    }

    //part-of-speech assign each term

  }, {
    key: 'tag',
    value: function tag() {
      this.terms = tagger(this);
      return this.terms;
    }

    //is it a question/statement

  }, {
    key: 'sentence_type',
    value: function sentence_type() {
      var char = this.terminator();
      var types = {
        '?': 'interrogative',
        '!': 'exclamative',
        '.': 'declarative'
      };
      return types[char] || 'declarative';
    }

    // A was verbed by B - B verbed A

  }, {
    key: 'is_passive',
    value: function is_passive() {
      return passive_voice(this);
    }
    // Question doesn't have negate, this is a placeholder

  }, {
    key: 'negate',
    value: function negate() {
      return this;
    }

    //map over Term methods

  }, {
    key: 'text',
    value: function text() {
      return this.terms.reduce(function (s, t) {
        //implicit contractions shouldn't be included
        if (t.text) {
          s += (t.whitespace.preceding || '') + t.text + (t.whitespace.trailing || '');
        }
        return s;
      }, '');
    }
    //like text but for cleaner text

  }, {
    key: 'normal',
    value: function normal() {
      return this.terms.reduce(function (s, t) {
        if (t.normal) {
          s += ' ' + t.normal;
        }
        return s;
      }, '').trim();
    }

    //further 'lemmatisation/inflection'

  }, {
    key: 'root',
    value: function root() {
      return this.terms.reduce(function (s, t) {
        s += ' ' + t.root();
        return s;
      }, '').trim();
    }
    //return only the main POS classnames/tags

  }, {
    key: 'tags',
    value: function tags() {
      return this.terms.map(function (t) {
        return t.tag || '?';
      });
    }
    //mining for specific things

  }, {
    key: 'people',
    value: function people() {
      return this.terms.filter(function (t) {
        return t.pos['Person'];
      });
    }
  }, {
    key: 'places',
    value: function places() {
      return this.terms.filter(function (t) {
        return t.pos['Place'];
      });
    }
  }, {
    key: 'dates',
    value: function dates() {
      return this.terms.filter(function (t) {
        return t.pos['Date'];
      });
    }
  }, {
    key: 'organizations',
    value: function organizations() {
      return this.terms.filter(function (t) {
        return t.pos['Organization'];
      });
    }
  }, {
    key: 'values',
    value: function values() {
      return this.terms.filter(function (t) {
        return t.pos['Value'];
      });
    }

    //parts of speech

  }, {
    key: 'nouns',
    value: function nouns() {
      return this.terms.filter(function (t) {
        return t.pos['Noun'];
      });
    }
  }, {
    key: 'adjectives',
    value: function adjectives() {
      return this.terms.filter(function (t) {
        return t.pos['Adjective'];
      });
    }
  }, {
    key: 'verbs',
    value: function verbs() {
      return this.terms.filter(function (t) {
        return t.pos['Verb'];
      });
    }
  }, {
    key: 'adverbs',
    value: function adverbs() {
      return this.terms.filter(function (t) {
        return t.pos['Adverb'];
      });
    }

    // john walks quickly -> john walked quickly

  }, {
    key: 'to_past',
    value: function to_past() {
      change_tense(this, 'past');
      return this;
    }
    // john walked quickly -> john walks quickly

  }, {
    key: 'to_present',
    value: function to_present() {
      change_tense(this, 'present');
      return this;
    }
    // john walked quickly -> john will walk quickly

  }, {
    key: 'to_future',
    value: function to_future() {
      change_tense(this, 'future');
      return this;
    }
  }, {
    key: 'strip_conditions',
    value: function strip_conditions() {
      var _this = this;

      this.terms = this.terms.filter(function (t, i) {
        //remove preceding condition
        if (i > 0 && t.pos['Condition'] && !_this.terms[i - 1].pos['Condition']) {
          _this.terms[i - 1].text = _this.terms[i - 1].text.replace(/,$/, '');
          _this.terms[i - 1].whitespace.trailing = '';
          _this.terms[i - 1].rebuild();
        }
        return !t.pos['Condition'];
      });
      //
      return this;
    }

    //named-entity recognition

  }, {
    key: 'topics',
    value: function topics() {
      return spot(this);
    }
  }]);

  return Sentence;
}();

//unpublished methods
//tokenize the match string, just like you'd tokenize the sentence.
//this avoids lumper/splitter problems between haystack and needle

tokenize_match = function tokenize_match(str) {
  var regs = new Sentence(str).terms; //crazy!
  regs = regs.map(function (t) {
    return t.text;
  });
  regs = regs.filter(function (t) {
    return t !== '';
  });
  return regs;
};

Sentence.fn = Sentence.prototype;

module.exports = Sentence;

// let s = new Sentence(`don't go`);
// console.log(s.text());
// s.contractions.expand();
// console.log(s.text());
// s.contractions.contract();
// console.log(s.text());

},{"../match/match":26,"../term/term":97,"./contractions/contract":30,"./contractions/expand":31,"./passive_voice":32,"./pos/tagger":51,"./spot":58,"./tense":61}],58:[function(require,module,exports){
'use strict';
//generic named-entity-recognition

var blacklist = {
  man: true,
  woman: true,
  girl: true,
  boy: true,
  guy: true,
  father: true,
  mother: true,
  sister: true,
  brother: true
};

var consolidate = function consolidate(topics) {
  var names = {};
  for (var i = 0; i < topics.length; i++) {
    var normal = topics[i].root();
    if (normal) {
      names[normal] = names[normal] || {
        count: 0,
        text: normal
      };
      names[normal].count += 1;
    }
  }
  //sort by freq
  var arr = Object.keys(names).map(function (k) {
    return names[k];
  });
  return arr.sort(function (a, b) {
    if (a.count > b.count) {
      return -1;
    } else {
      return 1;
    }
  });
};

var spot = function spot(s) {
  var topics = [];
  for (var i = 0; i < s.terms.length; i++) {
    var t = s.terms[i];
    //some stop-words
    if (blacklist[t.normal]) {
      continue;
    }
    //grab person, place, locations
    if (t.pos['Place'] || t.pos['Organization']) {
      topics.push(t);
      continue;
    }
    if (t.pos['Person'] && !t.pos['Pronoun']) {
      topics.push(t);
      continue;
    }
    //add capitalized nouns...
    if (i !== 0 && t.pos['Noun'] && t.is_capital()) {
      //no dates, or values
      if (t.pos['Value'] || t.pos['Date'] || t.pos['Pronoun']) {
        continue;
      }
      topics.push(t);
    }
  }
  return consolidate(topics);
};

module.exports = spot;

},{}],59:[function(require,module,exports){
'use strict';

var fns = require('../../../fns');

//these terms are nicer ways to negate a sentence
//ie. john always walks -> john always doesn't walk
var logical_negate = {
  'everyone': 'no one',
  'everybody': 'nobody',
  'someone': 'no one',
  'somebody': 'nobody',
  // everything:"nothing",
  'always': 'never'
};
//create corrollary
var logical_affirm = fns.reverseObj(logical_negate);
//these are not symmetic
logical_affirm['nobody'] = 'somebody';

var negate = function negate(s) {
  var _loop = function _loop(i) {
    var t = s.terms[i];
    //these verbs are red-herrings
    if (t.pos['Condition'] || t.pos['Quotation']) {
      return 'continue';
    }
    //logical-negations are smoother than verb-negations
    //ie. always -> never
    if (logical_negate[t.normal]) {
      t.changeTo(logical_negate[t.normal]);
      return 'break';
    }
    if (logical_affirm[t.normal]) {
      t.changeTo(logical_affirm[t.normal]);
      return 'break';
    }
    //negate the first verb
    if (t.pos['Verb']) {

      //different rule for i/we/they/you + infinitive
      //that is, 'i walk' -> 'i don\'t walk', not 'I not walk'

      var isPronounAndInfinitive = function isPronounAndInfinitive() {
        if (s.terms[i - 1]) {
          var p = s.terms[i - 1].text;
          return (p === 'i' || p === 'we' || p === 'they' || p === 'you') && t.pos['Infinitive'];
        }
        return false;
      };

      if (isPronounAndInfinitive()) {
        t.changeTo('don\'t ' + t.text);
        return 'break';
      }
      t.negate();
      return 'break';
    }
  };

  _loop2: for (var i = 0; i < s.terms.length; i++) {
    var _ret = _loop(i);

    switch (_ret) {
      case 'continue':
        continue;

      case 'break':
        break _loop2;}
  }

  return;
};

module.exports = negate;

},{"../../../fns":23}],60:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sentence = require('../sentence.js');
var _negate = require('./negate/negate.js');

var Statement = function (_Sentence) {
  _inherits(Statement, _Sentence);

  function Statement(str, options) {
    _classCallCheck(this, Statement);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Statement).call(this, str, options));
  }

  _createClass(Statement, [{
    key: 'negate',
    value: function negate() {
      _negate(this);
      return this;
    }
  }]);

  return Statement;
}(Sentence);

Statement.fn = Statement.prototype;

module.exports = Statement;

// let s = new Statement('john is a person');
// console.log(s);

},{"../sentence.js":57,"./negate/negate.js":59}],61:[function(require,module,exports){
'use strict';
//change a sentence to past, present, or future tense

var pos = require('./pos/parts_of_speech.js');

//conjugate a specific verb
var flip_verb = function flip_verb(t, tense) {
  if (tense === 'present') {
    t.to_present();
  } else if (tense === 'past') {
    t.to_past();
  } else if (tense === 'future') {
    t.to_future();
  }
  return t;
};

var change_tense = function change_tense(s, tense) {
  //convert all verbs
  s.terms.forEach(function (t) {
    if (t instanceof pos.Verb) {
      flip_verb(t, tense);
    }
  });
  return s;
};

// [
//   'john walks to the church',
//   'john walks and feeds the birds',
//   'john always walks',
//   'will you walk?',
// ];

module.exports = change_tense;

},{"./pos/parts_of_speech.js":36}],62:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Term = require('../term.js');

var _to_comparative = require('./to_comparative');
var _to_superlative = require('./to_superlative');
var adj_to_adv = require('./to_adverb');
var adj_to_noun = require('./to_noun');

var Adjective = function (_Term) {
  _inherits(Adjective, _Term);

  function Adjective(str, tag) {
    _classCallCheck(this, Adjective);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Adjective).call(this, str));

    _this.tag = tag;
    if (tag) {
      _this.pos[tag] = true;
    }
    _this.pos['Adjective'] = true;
    return _this;
  }

  _createClass(Adjective, [{
    key: 'to_comparative',
    value: function to_comparative() {
      return _to_comparative(this.normal);
    }
  }, {
    key: 'to_superlative',
    value: function to_superlative() {
      return _to_superlative(this.normal);
    }
  }, {
    key: 'to_noun',
    value: function to_noun() {
      return adj_to_noun(this.normal);
    }
  }, {
    key: 'to_adverb',
    value: function to_adverb() {
      return adj_to_adv(this.normal);
    }
  }, {
    key: 'conjugate',
    value: function conjugate() {
      return {
        comparative: _to_comparative(this.normal),
        superlative: _to_superlative(this.normal),
        adverb: adj_to_adv(this.normal),
        noun: adj_to_noun(this.normal)
      };
    }
  }]);

  return Adjective;
}(Term);

Adjective.fn = Adjective.prototype;
// let t = new Adjective("quick")
// console.log(t.conjugate())

module.exports = Adjective;

},{"../term.js":97,"./to_adverb":63,"./to_comparative":64,"./to_noun":65,"./to_superlative":66}],63:[function(require,module,exports){
//turn 'quick' into 'quickly'
'use strict';

var adj_to_adv = function adj_to_adv(str) {
  var irregulars = {
    'idle': 'idly',
    'public': 'publicly',
    'vague': 'vaguely',
    'day': 'daily',
    'icy': 'icily',
    'single': 'singly',
    'female': 'womanly',
    'male': 'manly',
    'simple': 'simply',
    'whole': 'wholly',
    'special': 'especially',
    'straight': 'straight',
    'wrong': 'wrong',
    'fast': 'fast',
    'hard': 'hard',
    'late': 'late',
    'early': 'early',
    'well': 'well',
    'good': 'well',
    'little': 'little',
    'long': 'long',
    'low': 'low',
    'best': 'best',
    'latter': 'latter',
    'bad': 'badly'
  };

  var dont = {
    'foreign': 1,
    'black': 1,
    'modern': 1,
    'next': 1,
    'difficult': 1,
    'degenerate': 1,
    'young': 1,
    'awake': 1,
    'back': 1,
    'blue': 1,
    'brown': 1,
    'orange': 1,
    'complex': 1,
    'cool': 1,
    'dirty': 1,
    'done': 1,
    'empty': 1,
    'fat': 1,
    'fertile': 1,
    'frozen': 1,
    'gold': 1,
    'grey': 1,
    'gray': 1,
    'green': 1,
    'medium': 1,
    'parallel': 1,
    'outdoor': 1,
    'unknown': 1,
    'undersized': 1,
    'used': 1,
    'welcome': 1,
    'yellow': 1,
    'white': 1,
    'fixed': 1,
    'mixed': 1,
    'super': 1,
    'guilty': 1,
    'tiny': 1,
    'able': 1,
    'unable': 1,
    'same': 1,
    'adult': 1
  };

  var transforms = [{
    reg: /al$/i,
    repl: 'ally'
  }, {
    reg: /ly$/i,
    repl: 'ly'
  }, {
    reg: /(.{3})y$/i,
    repl: '$1ily'
  }, {
    reg: /que$/i,
    repl: 'quely'
  }, {
    reg: /ue$/i,
    repl: 'uly'
  }, {
    reg: /ic$/i,
    repl: 'ically'
  }, {
    reg: /ble$/i,
    repl: 'bly'
  }, {
    reg: /l$/i,
    repl: 'ly'
  }];

  var not_matches = [/airs$/, /ll$/, /ee.$/, /ile$/];

  if (dont[str]) {
    return null;
  }
  if (irregulars[str]) {
    return irregulars[str];
  }
  if (str.length <= 3) {
    return null;
  }
  for (var i = 0; i < not_matches.length; i++) {
    if (str.match(not_matches[i])) {
      return null;
    }
  }
  for (var i = 0; i < transforms.length; i++) {
    if (str.match(transforms[i].reg)) {
      return str.replace(transforms[i].reg, transforms[i].repl);
    }
  }
  return str + 'ly';
};
// console.log(adj_to_adv('direct'))

module.exports = adj_to_adv;

},{}],64:[function(require,module,exports){
//turn 'quick' into 'quickly'
'use strict';

var convertables = require('../../data/convertables.js');

var to_comparative = function to_comparative(str) {
  var irregulars = {
    'grey': 'greyer',
    'gray': 'grayer',
    'green': 'greener',
    'yellow': 'yellower',
    'red': 'redder',
    'good': 'better',
    'well': 'better',
    'bad': 'worse',
    'sad': 'sadder'
  };

  var dont = {
    'overweight': 1,
    'main': 1,
    'nearby': 1,
    'asleep': 1,
    'weekly': 1,
    'secret': 1,
    'certain': 1
  };

  var transforms = [{
    reg: /y$/i,
    repl: 'ier'
  }, {
    reg: /([aeiou])t$/i,
    repl: '$1tter'
  }, {
    reg: /([aeou])de$/i,
    repl: '$1der'
  }, {
    reg: /nge$/i,
    repl: 'nger'
  }];

  var matches = [/ght$/, /nge$/, /ough$/, /ain$/, /uel$/, /[au]ll$/, /ow$/, /old$/, /oud$/, /e[ae]p$/];

  var not_matches = [/ary$/, /ous$/];

  if (dont.hasOwnProperty(str)) {
    return null;
  }

  for (var i = 0; i < transforms.length; i++) {
    if (str.match(transforms[i].reg)) {
      return str.replace(transforms[i].reg, transforms[i].repl);
    }
  }

  if (convertables.hasOwnProperty(str)) {
    if (str.match(/e$/)) {
      return str + 'r';
    }
    return str + 'er';
  }

  if (irregulars.hasOwnProperty(str)) {
    return irregulars[str];
  }

  for (var i = 0; i < not_matches.length; i++) {
    if (str.match(not_matches[i])) {
      return 'more ' + str;
    }
  }

  for (var i = 0; i < matches.length; i++) {
    if (str.match(matches[i])) {
      return str + 'er';
    }
  }
  return 'more ' + str;
};

// console.log(to_comparative("great"))

module.exports = to_comparative;

},{"../../data/convertables.js":3}],65:[function(require,module,exports){
//convert cute to cuteness
'use strict';

var to_noun = function to_noun(w) {
  var irregulars = {
    'clean': 'cleanliness',
    'naivety': 'naivety'
  };
  if (!w) {
    return '';
  }
  if (irregulars.hasOwnProperty(w)) {
    return irregulars[w];
  }
  if (w.match(' ')) {
    return w;
  }
  if (w.match(/w$/)) {
    return w;
  }
  var transforms = [{
    'reg': /y$/,
    'repl': 'iness'
  }, {
    'reg': /le$/,
    'repl': 'ility'
  }, {
    'reg': /ial$/,
    'repl': 'y'
  }, {
    'reg': /al$/,
    'repl': 'ality'
  }, {
    'reg': /ting$/,
    'repl': 'ting'
  }, {
    'reg': /ring$/,
    'repl': 'ring'
  }, {
    'reg': /bing$/,
    'repl': 'bingness'
  }, {
    'reg': /sing$/,
    'repl': 'se'
  }, {
    'reg': /ing$/,
    'repl': 'ment'
  }, {
    'reg': /ess$/,
    'repl': 'essness'
  }, {
    'reg': /ous$/,
    'repl': 'ousness'
  }];

  for (var i = 0; i < transforms.length; i++) {
    if (w.match(transforms[i].reg)) {
      return w.replace(transforms[i].reg, transforms[i].repl);
    }
  }

  if (w.match(/s$/)) {
    return w;
  }
  return w + 'ness';
};

// console.log(to_noun("great"))

module.exports = to_noun;

},{}],66:[function(require,module,exports){
//turn 'quick' into 'quickest'
'use strict';

var convertables = require('../../data/convertables.js');

var to_superlative = function to_superlative(str) {
  var irregulars = {
    'nice': 'nicest',
    'late': 'latest',
    'hard': 'hardest',
    'inner': 'innermost',
    'outer': 'outermost',
    'far': 'furthest',
    'worse': 'worst',
    'bad': 'worst',
    'good': 'best'
  };

  var dont = {
    'overweight': 1,
    'ready': 1
  };

  var transforms = [{
    'reg': /y$/i,
    'repl': 'iest'
  }, {
    'reg': /([aeiou])t$/i,
    'repl': '$1ttest'
  }, {
    'reg': /([aeou])de$/i,
    'repl': '$1dest'
  }, {
    'reg': /nge$/i,
    'repl': 'ngest'
  }];

  var matches = [/ght$/, /nge$/, /ough$/, /ain$/, /uel$/, /[au]ll$/, /ow$/, /oud$/, /...p$/];

  var not_matches = [/ary$/];

  var generic_transformation = function generic_transformation(s) {
    if (s.match(/e$/)) {
      return s + 'st';
    }
    return s + 'est';
  };

  for (var i = 0; i < transforms.length; i++) {
    if (str.match(transforms[i].reg)) {
      return str.replace(transforms[i].reg, transforms[i].repl);
    }
  }

  if (convertables.hasOwnProperty(str)) {
    return generic_transformation(str);
  }

  if (dont.hasOwnProperty(str)) {
    return 'most ' + str;
  }

  if (irregulars.hasOwnProperty(str)) {
    return irregulars[str];
  }
  for (var i = 0; i < not_matches.length; i++) {
    if (str.match(not_matches[i])) {
      return 'most ' + str;
    }
  }

  for (var i = 0; i < matches.length; i++) {
    if (str.match(matches[i])) {
      return generic_transformation(str);
    }
  }
  return 'most ' + str;
};

// console.log(to_superlative("great"))

module.exports = to_superlative;

},{"../../data/convertables.js":3}],67:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Term = require('../term.js');
var _to_adjective = require('./to_adjective.js');

var Adverb = function (_Term) {
  _inherits(Adverb, _Term);

  function Adverb(str, tag) {
    _classCallCheck(this, Adverb);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Adverb).call(this, str));

    _this.tag = tag;
    _this.pos['Adverb'] = true;
    return _this;
  }

  _createClass(Adverb, [{
    key: 'to_adjective',
    value: function to_adjective() {
      return _to_adjective(this.normal);
    }
  }]);

  return Adverb;
}(Term);

Adverb.fn = Adverb.prototype;
// let t = new Adverb("quickly")
// console.log(t.to_adjective())

module.exports = Adverb;

},{"../term.js":97,"./to_adjective.js":68}],68:[function(require,module,exports){
//turns 'quickly' into 'quick'
'use strict';

var to_adjective = function to_adjective(str) {
  var irregulars = {
    'idly': 'idle',
    'sporadically': 'sporadic',
    'basically': 'basic',
    'grammatically': 'grammatical',
    'alphabetically': 'alphabetical',
    'economically': 'economical',
    'conically': 'conical',
    'politically': 'political',
    'vertically': 'vertical',
    'practically': 'practical',
    'theoretically': 'theoretical',
    'critically': 'critical',
    'fantastically': 'fantastic',
    'mystically': 'mystical',
    'pornographically': 'pornographic',
    'fully': 'full',
    'jolly': 'jolly',
    'wholly': 'whole'
  };
  var transforms = [{
    'reg': /bly$/i,
    'repl': 'ble'
  }, {
    'reg': /gically$/i,
    'repl': 'gical'
  }, {
    'reg': /([rsdh])ically$/i,
    'repl': '$1ical'
  }, {
    'reg': /ically$/i,
    'repl': 'ic'
  }, {
    'reg': /uly$/i,
    'repl': 'ue'
  }, {
    'reg': /ily$/i,
    'repl': 'y'
  }, {
    'reg': /(.{3})ly$/i,
    'repl': '$1'
  }];
  if (irregulars.hasOwnProperty(str)) {
    return irregulars[str];
  }
  for (var i = 0; i < transforms.length; i++) {
    if (str.match(transforms[i].reg)) {
      return str.replace(transforms[i].reg, transforms[i].repl);
    }
  }
  return str;
};

// console.log(to_adjective('quickly') === 'quick')
// console.log(to_adjective('marvelously') === 'marvelous')
module.exports = to_adjective;

},{}],69:[function(require,module,exports){
'use strict';
//turn "plz"  "please"

var implications = {
  'plz': 'please',
  'tmrw': 'tomorrow',
  'wat': 'what',
  'r': 'are',
  'u': 'you'
};

var implied = function implied(str) {
  if (implications[str]) {
    return implications[str];
  }
  return null;
};

module.exports = implied;

},{}],70:[function(require,module,exports){
'use strict';

var is_acronym = function is_acronym(str) {
  //like N.D.A
  if (str.match(/([A-Z]\.)+[A-Z]?$/)) {
    return true;
  }
  //like NDA
  if (str.match(/[A-Z]{3}$/)) {
    return true;
  }
  return false;
};
module.exports = is_acronym;

},{}],71:[function(require,module,exports){
'use strict';

var is_acronym = require('../is_acronym.js');

//chooses an indefinite aricle 'a/an' for a word
var irregulars = {
  'hour': 'an',
  'heir': 'an',
  'heirloom': 'an',
  'honest': 'an',
  'honour': 'an',
  'honor': 'an',
  'uber': 'an' //german u
};

var indefinite_article = function indefinite_article(str) {
  if (!str) {
    return null;
  }

  //pronounced letters of acronyms that get a 'an'
  var an_acronyms = {
    A: true,
    E: true,
    F: true,
    H: true,
    I: true,
    L: true,
    M: true,
    N: true,
    O: true,
    R: true,
    S: true,
    X: true
  };
  //'a' regexes
  var a_regexs = [/^onc?e/i, //'wu' sound of 'o'
  /^u[bcfhjkqrstn][aeiou]/i, // 'yu' sound for hard 'u'
  /^eul/i];

  //begin business time
  ////////////////////
  //explicit irregular forms
  if (irregulars.hasOwnProperty(str)) {
    return irregulars[str];
  }
  //spelled-out acronyms
  if (is_acronym(str) && an_acronyms.hasOwnProperty(str.substr(0, 1))) {
    return 'an';
  }
  //'a' regexes
  for (var i = 0; i < a_regexs.length; i++) {
    if (str.match(a_regexs[i])) {
      return 'a';
    }
  }
  //basic vowel-startings
  if (str.match(/^[aeiou]/i)) {
    return 'an';
  }
  return 'a';
};

module.exports = indefinite_article;

// console.log(indefinite_article('N.D.A'));

},{"../is_acronym.js":70}],72:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Noun = require('../noun.js');
var parse_date = require('./parse_date.js');

var _Date = function (_Noun) {
  _inherits(_Date, _Noun);

  function _Date(str, tag) {
    _classCallCheck(this, _Date);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(_Date).call(this, str));

    _this.tag = tag;
    _this.pos['Date'] = true;
    _this.data = parse_date(_this.text) || {};
    return _this;
  }

  //can we make it a js Date object?

  _createClass(_Date, [{
    key: 'is_date',
    value: function is_date() {
      var o = this.data;
      if (o.month === null || o.day === null || o.year === null) {
        return false;
      }
      return true;
    }
  }, {
    key: 'date',
    value: function date() {
      if (this.is_date() === false) {
        return null;
      }
      var d = new Date();
      if (this.data.year) {
        d.setYear(this.data.year);
      }
      if (this.data.month !== null) {
        d.setMonth(this.data.month);
      }
      if (this.data.day !== null) {
        d.setDate(this.data.day);
      }
      return d;
    }
  }]);

  return _Date;
}(Noun);

_Date.fn = _Date.prototype;

module.exports = _Date;

// let d = new _Date('June 4th 1993');
// console.log(d.date());

},{"../noun.js":78,"./parse_date.js":75}],73:[function(require,module,exports){
'use strict';

var months = require('../../../data/dates').months.concat(['march', 'may']); //(march and may are ambiguous grammatically)
var month = '(' + months.join('|') + ')';
var day = '([0-9]{1,2})';
var year = '\'?([12][0-9]{3})';

var rules = [{
  reg: month + ' ' + day + ' ' + year, //'March 1st 1987'
  order: ['month', 'day', 'year']
}, {
  reg: day + ' of ' + month + ' ' + year, //'3rd of March 1969',
  order: ['day', 'month', 'year']
},

//incomplete versions
{
  reg: day + ' of ' + month, //'3rd of March',
  order: ['day', 'month']
}, {
  reg: month + ' ' + year, //'March 1969',
  order: ['month', 'year']
}, {
  reg: month + ' ' + day, //'March 18th',
  order: ['month', 'day']
}, {
  reg: day + ' ' + month, //'18th of March',
  order: ['day', 'month']
}, {
  reg: '' + month, //'january'
  order: ['month']
}, {
  reg: '' + year, //'1998'
  order: ['year']
}].map(function (o) {
  o.reg = new RegExp('\\b' + o.reg + '\\b', '');
  return o;
});
module.exports = rules;

},{"../../../data/dates":5}],74:[function(require,module,exports){

'use strict';

var dates = require('../../../data/dates');

//build date regex
var terms = dates.months.concat(dates.days);
var day_reg = '(\\b' + terms.join('\\b|\\b') + '\\b)';
day_reg = new RegExp(day_reg, 'i');
var times_reg = /1?[0-9]:[0-9]{2}/;
var is_date = function is_date(str) {
  if (str.match(day_reg) || str.match(times_reg)) {
    return true;
  }
  //a straight-up year, like '2016'
  if (str.match(/^[12][0-9]{3}$/)) {
    var n = parseInt(str, 10);
    if (n > 1300 && n < 2100) {
      return true;
    }
  }
  return false;
};

module.exports = is_date;

// console.log(is_date('2015'));

},{"../../../data/dates":5}],75:[function(require,module,exports){
'use strict';
// #generates properly-formatted dates from free-text date forms
// #by spencer kelly 2015

var to_number = require('../value/parse/to_number.js');
//regexes to top-parse
var rules = require('./date_rules.js');

//return integers from strings
var wrangle = {

  year: function year(s) {
    var num = s.match(/[0-9]+/);
    num = parseInt(num, 10);
    if (!num || num > 2900 || num < 0) {
      return null;
    }
    //honestly, prob not a year either
    if (num > 100 && num < 1000) {
      return null;
    }
    //'20BC' becomes -20
    if (s.match(/[0-9] ?bc/i)) {
      return num *= -1;
    }
    // '98 becomes 1998
    if (num < 100 && num > 30) {
      num += 1900;
    }
    return num;
  },

  month: function month(s) {
    //0 based months, 1 based days...
    var months_obj = {
      january: 0,
      february: 1,
      march: 2,
      april: 3,
      may: 4,
      june: 5,
      july: 6,
      august: 7,
      september: 8,
      october: 9,
      november: 10,
      december: 11,
      jan: 0,
      feb: 1,
      mar: 2,
      apr: 3,
      aug: 7,
      sept: 8,
      oct: 9,
      nov: 10,
      dec: 11
    };
    return months_obj[s];
  },

  day: function day(s) {
    var n = to_number(s) || parseInt(s, 10);
    if (n < 0 || n > 31) {
      return null;
    }
    return n;
  }
};

//cleanup string
var preprocess = function preprocess(str) {
  str = str.toLowerCase();
  str = str.replace(/([0-9]+)(nd|rd|th|st)/i, '$1');
  var words = str.split(' ').map(function (w) {
    if (!w.match(/[0-9]/)) {
      return to_number(w) || w;
    }
    return w;
  });
  return words.join(' ');
};

var date_parser = function date_parser(str) {
  str = preprocess(str);
  var result = {
    year: null,
    month: null,
    day: null
  };
  for (var i = 0; i < rules.length; i++) {
    if (str.match(rules[i].reg)) {
      var m = str.match(rules[i].reg);
      for (var o = 0; o < rules[i].order.length; o++) {
        var type = rules[i].order[o];
        result[type] = wrangle[type](m[o + 1]);
      }
      break;
    }
  }
  return result;
};
module.exports = date_parser;
// console.log(wrangle.year('1998'));
// console.log(date_parser('March 1st 1987'));
// console.log(date_extractor('june second 1999'));

},{"../value/parse/to_number.js":93,"./date_rules.js":73}],76:[function(require,module,exports){
'use strict';

var irregulars = require('../../data/irregular_nouns');

//similar to plural/singularize rules, but not the same
var plural_indicators = [/(^v)ies$/i, /ises$/i, /ives$/i, /(antenn|formul|nebul|vertebr|vit)ae$/i, /(octop|vir|radi|nucle|fung|cact|stimul)i$/i, /(buffal|tomat|tornad)oes$/i, /(analy|ba|diagno|parenthe|progno|synop|the)ses$/i, /(vert|ind|cort)ices$/i, /(matr|append)ices$/i, /(x|ch|ss|sh|s|z|o)es$/i, /men$/i, /news$/i, /.tia$/i, /(^f)ves$/i, /(lr)ves$/i, /(^aeiouy|qu)ies$/i, /(m|l)ice$/i, /(cris|ax|test)es$/i, /(alias|status)es$/i, /ics$/i];

//similar to plural/singularize rules, but not the same
var singular_indicators = [/(ax|test)is$/i, /(octop|vir|radi|nucle|fung|cact|stimul)us$/i, /(octop|vir)i$/i, /(rl)f$/i, /(alias|status)$/i, /(bu)s$/i, /(al|ad|at|er|et|ed|ad)o$/i, /(ti)um$/i, /(ti)a$/i, /sis$/i, /(?:(^f)fe|(lr)f)$/i, /hive$/i, /(^aeiouy|qu)y$/i, /(x|ch|ss|sh|z)$/i, /(matr|vert|ind|cort)(ix|ex)$/i, /(m|l)ouse$/i, /(m|l)ice$/i, /(antenn|formul|nebul|vertebr|vit)a$/i, /.sis$/i, /^(?!talis|.*hu)(.*)man$/i];

var is_plural = function is_plural(str) {
  str = (str || '').toLowerCase();
  //handle 'mayors of chicago'
  var preposition = str.match(/([a-z]*) (of|in|by|for) [a-z]/);
  if (preposition && preposition[1]) {
    str = preposition[1];
  }
  // if it's a known irregular case
  for (var i = 0; i < irregulars.length; i++) {
    if (irregulars[i][1] === str) {
      return true;
    }
    if (irregulars[i][0] === str) {
      return false;
    }
  }
  for (var i = 0; i < plural_indicators.length; i++) {
    if (str.match(plural_indicators[i])) {
      return true;
    }
  }
  for (var i = 0; i < singular_indicators.length; i++) {
    if (str.match(singular_indicators[i])) {
      return false;
    }
  }
  // some 'looks pretty plural' rules
  if (str.match(/s$/) && !str.match(/ss$/) && str.length > 3) {
    //needs some lovin'
    return true;
  }
  return false;
};

// console.log(is_plural('octopus') === false)
// console.log(is_plural('octopi') === true)
// console.log(is_plural('eyebrow') === false)
// console.log(is_plural('eyebrows') === true)
// console.log(is_plural('child') === false)
// console.log(is_plural('children') === true)

module.exports = is_plural;

},{"../../data/irregular_nouns":10}],77:[function(require,module,exports){
//uncountables are words that shouldn't ever inflect, for metaphysical reasons, like 'peace'
'use strict';

var uncountable_arr = require('../../data/uncountables.js');

var uncountable = uncountable_arr.reduce(function (h, a) {
  h[a] = true;
  return h;
}, {});

var is_uncountable = function is_uncountable(str) {
  if (uncountable[str]) {
    return true;
  }
  return false;
};
// console.log(is_uncountable("peace") === true)
// console.log(is_uncountable("dog") === false)
module.exports = is_uncountable;

},{"../../data/uncountables.js":21}],78:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Term = require('../term.js');
var _article = require('./article.js');
var _is_plural = require('./is_plural.js');
var _is_place = require('./place/is_place.js');
var _is_person = require('./person/is_person.js');
var _pronoun = require('./pronoun.js');
var _is_value = require('./value/is_value.js');
var _is_date = require('./date/is_date.js');
var _is_organization = require('./organization/is_organization.js');
var _singularize = require('./singularize.js');
var _pluralize = require('./pluralize.js');
var _is_uncountable = require('./is_uncountable.js');

var Noun = function (_Term) {
  _inherits(Noun, _Term);

  function Noun(str, tag) {
    _classCallCheck(this, Noun);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Noun).call(this, str));

    _this.tag = tag;
    _this.pos['Noun'] = true;
    if (tag) {
      _this.pos[tag] = true;
    }
    if (_this.is_plural()) {
      _this.pos['Plural'] = true;
    }
    return _this;
  }
  //noun methods

  _createClass(Noun, [{
    key: 'article',
    value: function article() {
      //if it's a person, it's he/she, not a/an
      if (this.pos['Person']) {
        return this.pronoun();
      }
      //groups of people are 'they'
      if (this.pos['Organization']) {
        return 'they';
      }
      return _article(this.text);
    }
  }, {
    key: 'root',
    value: function root() {
      return this.singularize();
    }
  }, {
    key: 'pronoun',
    value: function pronoun() {
      if (this.is_organization() || this.is_place() || this.is_value()) {
        return 'it';
      }
      return _pronoun(this.normal);
    }
  }, {
    key: 'is_plural',
    value: function is_plural() {
      if (this.pos['Date'] || this.pos['Possessive']) {
        return false;
      } else if (this.has_abbreviation()) {
        //contractions & possessives are not plural
        return false;
      } else {
        return _is_plural(this.normal);
      }
    }
  }, {
    key: 'is_uncountable',
    value: function is_uncountable() {
      return _is_uncountable(this.strip_apostrophe());
    }
  }, {
    key: 'pluralize',
    value: function pluralize() {
      return _pluralize(this.strip_apostrophe());
    }
  }, {
    key: 'singularize',
    value: function singularize() {
      return _singularize(this.strip_apostrophe());
    }
    //sub-classes

  }, {
    key: 'is_person',
    value: function is_person() {
      //don't overwrite dates, etc
      if (this.tag === 'Date') {
        return false;
      }
      return _is_person(this.strip_apostrophe());
    }
  }, {
    key: 'is_organization',
    value: function is_organization() {
      return _is_organization(this.strip_apostrophe(), this.text);
    }
  }, {
    key: 'is_date',
    value: function is_date() {
      return _is_date(this.strip_apostrophe());
    }
  }, {
    key: 'is_value',
    value: function is_value() {
      //don't overwrite dates, etc
      if (this.tag === 'Date') {
        return false;
      }
      return _is_value(this.strip_apostrophe());
    }
  }, {
    key: 'is_place',
    value: function is_place() {
      return _is_place(this.strip_apostrophe());
    }
  }]);

  return Noun;
}(Term);

Noun.fn = Noun.prototype;

module.exports = Noun;

// let t = new Noun('NDA');
// console.log(t.article());

},{"../term.js":97,"./article.js":71,"./date/is_date.js":74,"./is_plural.js":76,"./is_uncountable.js":77,"./organization/is_organization.js":79,"./person/is_person.js":82,"./place/is_place.js":85,"./pluralize.js":87,"./pronoun.js":88,"./singularize.js":89,"./value/is_value.js":90}],79:[function(require,module,exports){
'use strict';

var abbreviations = require('../../../data/abbreviations');
var org_data = require('../../../data/organizations');

//some boring capitalised acronyms you see frequently
var blacklist = {
  url: true,
  http: true,
  wtf: true,
  irl: true,
  ie: true,
  eg: true,
  gps: true,
  dna: true,
  sms: true };

//words like 'co' and ltd
//these should maybe be somewhere else
var org_suffix = abbreviations.orgs.reduce(function (h, s) {
  h[s] = true;
  return h;
}, {});
org_data.suffixes.forEach(function (s) {
  //a few more
  org_suffix[s] = true;
});

//named orgs like google and nestle
var org_names = org_data.organizations.reduce(function (h, s) {
  h[s] = true;
  return h;
}, {});

var is_organization = function is_organization(str, text) {
  text = text || '';
  //blacklist some boring ones
  if (blacklist[str]) {
    return false;
  }
  //some known organizations, like microsoft
  if (org_names[str]) {
    return true;
  }
  //no period acronyms
  if (text.length <= 5 && text.match(/^[A-Z][A-Z]+$/) !== null) {
    return true;
  }
  //period acronyms
  if (text.length >= 4 && text.match(/^([A-Z]\.)*$/) !== null) {
    return true;
  }
  // eg 'Smith & Co'
  if (str.match(/ & /)) {
    return true;
  }
  // Girlscouts of Canada
  if (str.match(/..s of /)) {
    return true;
  }
  // eg pets.com
  if (str.match(/[a-z]{3}\.(com|net|org|biz)/)) {
    //not a perfect url regex, but a "org.com"
    return true;
  }
  // "foobar inc."
  var words = str.split(' ');
  if (words.length > 1) {
    var last = words[words.length - 1];
    if (org_suffix[last]) {
      return true;
    }
  }

  return false;
};

module.exports = is_organization;

// console.log(is_organization('Captain of Jamaica'));

},{"../../../data/abbreviations":1,"../../../data/organizations":17}],80:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Noun = require('../noun.js');

var Organization = function (_Noun) {
  _inherits(Organization, _Noun);

  function Organization(str, tag) {
    _classCallCheck(this, Organization);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Organization).call(this, str));

    _this.tag = tag;
    _this.pos['Organization'] = true;

    return _this;
  }

  return Organization;
}(Noun);

Organization.fn = Organization.prototype;
module.exports = Organization;

},{"../noun.js":78}],81:[function(require,module,exports){
'use strict';

var firstnames = require('../../../data/firstnames');
var parse_name = require('./parse_name.js');

var gender = function gender(normal) {
  if (normal === 'he') {
    return 'Male';
  }
  if (normal === 'she') {
    return 'Female';
  }
  var o = parse_name(normal);
  var firstName = o.firstName;
  if (!firstName) {
    return null;
  }
  if (firstnames[firstName] === 'm') {
    return 'Male';
  }
  if (firstnames[firstName] === 'f') {
    return 'Female';
  }
  //male honourifics
  if (normal.match(/\b(mr|mister|sr|jr)\b/i)) {
    return 'Male';
  }
  //female honourifics
  if (normal.match(/^(mrs|miss|ms|misses|mme|mlle)\.? /i)) {
    return 'Female';
  }
  //statistical guesses
  if (firstName.match(/.(i|ee|[a|e]y|a)$/i)) {
    //this is almost-always true
    return 'Female';
  }
  if (firstName.match(/[ou]$/i)) {
    //if it ends in a 'oh or uh', male
    return 'Male';
  }
  if (firstName.match(/(nn|ll|tt)/i)) {
    //if it has double-consonants, female
    return 'Female';
  }
  // name not recognized, or recognized as of indeterminate gender
  return null;
};
module.exports = gender;

// console.log(gender('john', 'john') === 'Male');
// console.log(gender('jane smith', 'jane') === 'Female');
// console.log(gender('jan smith', 'jan') === null);

},{"../../../data/firstnames":7,"./parse_name.js":83}],82:[function(require,module,exports){
'use strict';

var firstnames = require('../../../data/firstnames');
var honourifics = require('../../../data/honourifics').reduce(function (h, s) {
  h[s] = true;
  return h;
}, {});

var whitelist = {
  'he': true,
  'she': true,
  'i': true,
  'you': true
};

var is_person = function is_person(str) {
  if (whitelist[str] || firstnames[str]) {
    return true;
  }
  var words = str.split(' ');
  if (words.length > 1) {
    var first = words[0];
    if (honourifics[first] || firstnames[first]) {
      return true;
    }
  }
  return false;
};

module.exports = is_person;

// console.log(is_person('Illi Danza'));

},{"../../../data/firstnames":7,"../../../data/honourifics":9}],83:[function(require,module,exports){
'use strict';

var firstnames = require('../../../data/firstnames');
var honourifics = require('../../../data/honourifics').reduce(function (h, s) {
  h[s] = true;
  return h;
}, {});

var parse_name = function parse_name(str) {

  var words = str.split(' ');
  var o = {
    honourific: null,
    firstName: null,
    middleName: null,
    lastName: null
  };

  //first-word honourific
  if (honourifics[words[0]]) {
    o.honourific = words[0];
    words = words.slice(1, words.length);
  }
  //last-word honourific
  if (honourifics[words[words.length - 1]]) {
    o.honourific = words[words.length - 1];
    words = words.slice(0, words.length - 1);
  }
  //see if the first word is now a known first-name
  if (firstnames[words[0]]) {
    o.firstName = words[0];
    words = words.slice(1, words.length);
  } else {
    //ambiguous one-word name
    if (words.length === 1) {
      return o;
    }
    //looks like an unknown first-name
    o.firstName = words[0];
    words = words.slice(1, words.length);
  }
  //assume the remaining is '[middle..] [last]'
  if (words[words.length - 1]) {
    o.lastName = words[words.length - 1];
    words = words.slice(0, words.length - 1);
  }
  o.middleName = words.join(' ');
  return o;
};

module.exports = parse_name;

// console.log(parse_name('john smith'));

},{"../../../data/firstnames":7,"../../../data/honourifics":9}],84:[function(require,module,exports){
// not all cultures use the firstname-lastname practice. this does make some assumptions.
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Noun = require('../noun.js');
var guess_gender = require('./gender.js');
var parse_name = require('./parse_name.js');

var Person = function (_Noun) {
  _inherits(Person, _Noun);

  function Person(str, tag) {
    _classCallCheck(this, Person);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Person).call(this, str));

    _this.tag = tag;
    _this.pos['Person'] = true;
    _this.honourific = null;
    _this.firstName = null;
    _this.middleName = null;
    _this.lastName = null;
    _this.parse();
    if (_this.isPronoun()) {
      _this.pos['Pronoun'] = true;
    }
    return _this;
  }

  _createClass(Person, [{
    key: 'isPronoun',
    value: function isPronoun() {
      var whitelist = {
        'he': true,
        'she': true,
        'i': true,
        'you': true
      };
      return whitelist[this.normal];
    }

    //proper normalised name without the cruft

  }, {
    key: 'root',
    value: function root() {
      if (this.isPronoun()) {
        return this.normal;
      }
      var str = this.firstName || '';
      if (this.middleName) {
        str += ' ' + this.middleName;
      }
      if (this.lastName) {
        str += ' ' + this.lastName;
      }
      return str.trim() || this.normal;
    }

    //turn a multi-word string into [first, middle, last, honourific]

  }, {
    key: 'parse',
    value: function parse() {
      var o = parse_name(this.normal);
      this.honourific = o.honourific;
      this.firstName = o.firstName;
      this.middleName = o.middleName;
      this.lastName = o.lastName;
    }
  }, {
    key: 'gender',
    value: function gender() {
      return guess_gender(this.normal);
    }
  }, {
    key: 'pronoun',
    value: function pronoun() {
      var pronouns = {
        Male: 'he',
        Female: 'she'
      };
      var gender = this.gender();
      //return 'singular they' if no gender is found
      return pronouns[gender] || 'they';
    }
  }]);

  return Person;
}(Noun);

Person.fn = Person.prototype;
module.exports = Person;

// let p = new Person('John Smith');
// console.log(p.gender());

},{"../noun.js":78,"./gender.js":81,"./parse_name.js":83}],85:[function(require,module,exports){
'use strict';

var places = require('../../../data/places');
var abbreviations = require('../../../data/abbreviations');

//add Country names
var isPlace = places.countries.reduce(function (h, s) {
  h[s] = true;
  return h;
}, {});
//add City names
places.cities.forEach(function (s) {
  isPlace[s] = true;
});
//add airports
places.airports.forEach(function (s) {
  isPlace[s] = true;
});
//add place abbreviations names
abbreviations.places.forEach(function (s) {
  isPlace[s] = true;
});

//these are signals too
var firstwords = ['west', 'east', 'nort', 'south', 'western', 'eastern', 'nortern', 'southern', 'mount'].reduce(function (h, s) {
  h[s] = true;
  return h;
}, {});

var lastwords = ['city', 'town', 'county', 'village', 'province', 'country', 'state', 'province', 'mountain', 'river', 'valley', 'park', 'avenue', 'street', 'road']. //these should maybe be somewhere else
reduce(function (h, s) {
  h[s] = true;
  return h;
}, {});

var is_place = function is_place(str) {
  var words = str.split(' ');

  if (words.length > 1) {
    //first words, like 'eastern'
    if (firstwords[words[0]]) {
      return true;
    }
    //last words, like 'mountain'
    if (lastwords[words[words.length - 1]]) {
      return true;
    }
  }
  for (var i = 0; i < words.length; i++) {
    if (isPlace[words[i]]) {
      return true;
    }
  }

  return false;
};

module.exports = is_place;

},{"../../../data/abbreviations":1,"../../../data/places":19}],86:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Noun = require('../noun.js');
var places = require('../../../data/places.js');
var fns = require('../../../fns.js');
//make cities/countries easy to lookup
var countries = fns.toObj(places.countries);
var cities = fns.toObj(places.cities);

var Place = function (_Noun) {
  _inherits(Place, _Noun);

  function Place(str, tag) {
    _classCallCheck(this, Place);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Place).call(this, str));

    _this.tag = tag;
    _this.pos['Place'] = true;

    _this.title = null;
    _this.city = null;
    _this.region = null; //'2nd-tier' (state/province/county/whatever)
    _this.country = null;
    _this.parse();
    return _this;
  }

  _createClass(Place, [{
    key: 'root',
    value: function root() {
      return this.title || this.normal;
    }
  }, {
    key: 'parse',
    value: function parse() {
      //parse a comma-described place like "toronto, ontario"
      var terms = this.strip_apostrophe().split(' ');
      this.title = terms[0];
      for (var i = 1; i < terms.length; i++) {
        var t = terms[i];
        if (cities[t]) {
          this.city = fns.titlecase(t);
        } else if (countries[t]) {
          this.country = fns.titlecase(t);
        } else if (this.city !== null) {
          //if we already got the city..
          this.region = fns.titlecase(t);
        } else {
          //it's part of the title
          this.title += ' ' + t;
        }
      }
    }
  }]);

  return Place;
}(Noun);
Place.fn = Place.prototype;
module.exports = Place;

// console.log(new Place('Toronto, Ontario, Canada'));

},{"../../../data/places.js":19,"../../../fns.js":23,"../noun.js":78}],87:[function(require,module,exports){
'use strict';

var is_uncountable = require('./is_uncountable.js');
var irregulars = require('../../data/irregular_nouns.js');
var is_plural = require('./is_plural.js');
var fns = require('../../fns.js');

var pluralize_rules = [[/(ax|test)is$/i, '$1es'], [/(octop|vir|radi|nucle|fung|cact|stimul)us$/i, '$1i'], [/(octop|vir)i$/i, '$1i'], [/(kn|l|w)ife$/i, '$1ives'], [/^((?:ca|e|ha|(?:our|them|your)?se|she|wo)l|lea|loa|shea|thie)f$/i, '$1ves'], [/^(dwar|handkerchie|hoo|scar|whar)f$/i, '$1ves'], [/(alias|status)$/i, '$1es'], [/(bu)s$/i, '$1ses'], [/(al|ad|at|er|et|ed|ad)o$/i, '$1oes'], [/([ti])um$/i, '$1a'], [/([ti])a$/i, '$1a'], [/sis$/i, 'ses'], [/(hive)$/i, '$1s'], [/([^aeiouy]|qu)y$/i, '$1ies'], [/(x|ch|ss|sh|s|z)$/i, '$1es'], [/(matr|vert|ind|cort)(ix|ex)$/i, '$1ices'], [/([m|l])ouse$/i, '$1ice'], [/([m|l])ice$/i, '$1ice'], [/^(ox)$/i, '$1en'], [/^(oxen)$/i, '$1'], [/(quiz)$/i, '$1zes'], [/(antenn|formul|nebul|vertebr|vit)a$/i, '$1ae'], [/(sis)$/i, 'ses'], [/^(?!talis|.*hu)(.*)man$/i, '$1men'], [/(.*)/i, '$1s']].map(function (a) {
  return {
    reg: a[0],
    repl: a[1]
  };
});

var pluralize = function pluralize(str) {
  var low = str.toLowerCase();
  //uncountable
  if (is_uncountable(low)) {
    //uncountables shouldn't ever inflect
    return str;
  }
  //is it already plural?
  if (is_plural(low) === true) {
    return str;
  }
  //irregular
  var found = irregulars.filter(function (r) {
    return r[0] === low;
  });
  if (found[0]) {
    if (fns.titlecase(low) === str) {
      //handle capitalisation properly
      return fns.titlecase(found[0][1]);
    }
    return found[0][1];
  }
  //inflect first word of preposition-phrase
  if (str.match(/([a-z]*) (of|in|by|for) [a-z]/)) {
    var first = (str.match(/^([a-z]*) (of|in|by|for) [a-z]/) || [])[1];
    if (first) {
      var better_first = pluralize(first);
      return better_first + str.replace(first, '');
    }
  }
  //regular
  for (var i = 0; i < pluralize_rules.length; i++) {
    if (str.match(pluralize_rules[i].reg)) {
      return str.replace(pluralize_rules[i].reg, pluralize_rules[i].repl);
    }
  }
  return null;
};
// console.log(pluralize('gas') === "gases")
// console.log(pluralize('narrative') === "narratives")
// console.log(pluralize('video') === "videos")
// console.log(pluralize('photo') === "photos")
// console.log(pluralize('stomach') === "stomachs")
// console.log(pluralize('database') === "databases")
// console.log(pluralize('kiss') === "kisses")
// console.log(pluralize('towns') === "towns")
// console.log(pluralize('peace') === "peace")
// console.log(pluralize('mayor of chicago') === "mayors of chicago")
module.exports = pluralize;

},{"../../data/irregular_nouns.js":10,"../../fns.js":23,"./is_plural.js":76,"./is_uncountable.js":77}],88:[function(require,module,exports){
'use strict';

var is_person = require('./person/is_person.js');
var is_plural = require('./is_plural.js');
var gender = require('./person/gender.js');

var pronoun = function pronoun(str) {
  if (is_person(str)) {
    var g = gender(str);
    if (g === 'Male') {
      return 'he';
    } else if (g === 'Female') {
      return 'she';
    }
    return 'they'; //singular they
  }
  //non-person, like 'microwaves'
  if (is_plural(str)) {
    return 'they';
  }
  return 'it';
};

module.exports = pronoun;

// console.log(pronoun('Illi Danza'));

},{"./is_plural.js":76,"./person/gender.js":81,"./person/is_person.js":82}],89:[function(require,module,exports){
'use strict';

var is_uncountable = require('./is_uncountable.js');
var irregulars = require('../../data/irregular_nouns.js');
var is_plural = require('./is_plural.js');
var fns = require('../../fns.js');

var singularize_rules = [[/([^v])ies$/i, '$1y'], [/ises$/i, 'isis'], [/(kn|[^o]l|w)ives$/i, '$1ife'], [/^((?:ca|e|ha|(?:our|them|your)?se|she|wo)l|lea|loa|shea|thie)ves$/i, '$1f'], [/^(dwar|handkerchie|hoo|scar|whar)ves$/i, '$1f'], [/(antenn|formul|nebul|vertebr|vit)ae$/i, '$1a'], [/(octop|vir|radi|nucle|fung|cact|stimul)(i)$/i, '$1us'], [/(buffal|tomat|tornad)(oes)$/i, '$1o'], [/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/i, '$1sis'], [/(vert|ind|cort)(ices)$/i, '$1ex'], [/(matr|append)(ices)$/i, '$1ix'], [/(x|ch|ss|sh|s|z|o)es$/i, '$1'], [/men$/i, 'man'], [/(n)ews$/i, '$1ews'], [/([ti])a$/i, '$1um'], [/([^aeiouy]|qu)ies$/i, '$1y'], [/(s)eries$/i, '$1eries'], [/(m)ovies$/i, '$1ovie'], [/([m|l])ice$/i, '$1ouse'], [/(cris|ax|test)es$/i, '$1is'], [/(alias|status)es$/i, '$1'], [/(ss)$/i, '$1'], [/(ics)$/i, '$1'], [/s$/i, '']].map(function (a) {
  return {
    reg: a[0],
    repl: a[1]
  };
});

var singularize = function singularize(str) {
  var low = str.toLowerCase();
  //uncountable
  if (is_uncountable(low)) {
    return str;
  }
  //is it already singular?
  if (is_plural(low) === false) {
    return str;
  }
  //irregular
  var found = irregulars.filter(function (r) {
    return r[1] === low;
  });
  if (found[0]) {
    if (fns.titlecase(low) === str) {
      //handle capitalisation properly
      return fns.titlecase(found[0][0]);
    }
    return found[0][0];
  }
  //inflect first word of preposition-phrase
  if (str.match(/([a-z]*) (of|in|by|for) [a-z]/)) {
    var first = str.match(/^([a-z]*) (of|in|by|for) [a-z]/);
    if (first && first[1]) {
      var better_first = singularize(first[1]);
      return better_first + str.replace(first[1], '');
    }
  }
  //regular
  for (var i = 0; i < singularize_rules.length; i++) {
    if (str.match(singularize_rules[i].reg)) {
      return str.replace(singularize_rules[i].reg, singularize_rules[i].repl);
    }
  }
  return str;
};

// console.log(singularize('gases') === "gas")
// console.log(singularize('kisses') === "kiss")
// console.log(singularize('kiss') === "kiss")
// console.log(singularize('children') === "child")
// console.log(singularize('peace') === "peace")
// console.log(singularize('child') === "child")
// console.log(singularize('mayors of chicago') === "mayor of chicago")

module.exports = singularize;

},{"../../data/irregular_nouns.js":10,"../../fns.js":23,"./is_plural.js":76,"./is_uncountable.js":77}],90:[function(require,module,exports){
'use strict';

var nums = require('../../../data/numbers.js');
var is_date = require('../date/is_date');

var is_value = function is_value(str) {
  var words = str.split(' ');
  //'january 5' is not a value
  if (is_date(str)) {
    return false;
  }
  for (var i = 0; i < words.length; i++) {
    var w = words[i];
    if (nums.ones[w] || nums.teens[w] || nums.tens[w] || nums.multiples[w] || nums.prefixes[w]) {
      return true;
    }
    if (parseFloat(w)) {
      return true;
    }
  }
  return false;
};

module.exports = is_value;

},{"../../../data/numbers.js":16,"../date/is_date":74}],91:[function(require,module,exports){
'use strict';
// handle 'nine point eight four'

var nums = require('../../../../data/numbers.js');
var fns = require('../../../../fns');
var ones = {};
ones = fns.extend(ones, nums.ones);
ones = fns.extend(ones, nums.teens);
ones = fns.extend(ones, nums.ordinal_ones);
ones = fns.extend(ones, nums.ordinal_teens);

//concatenate into a string with leading '0.'
var decimals = function decimals(words) {
  var str = '0.';
  for (var i = 0; i < words.length; i++) {
    var w = words[i];
    if (ones[w]) {
      str += ones[w];
    } else {
      return 0;
    }
  }
  return parseFloat(str);
};

module.exports = decimals;

},{"../../../../data/numbers.js":16,"../../../../fns":23}],92:[function(require,module,exports){
'use strict';

//support global multipliers, like 'half-million' by doing 'million' then multiplying by 0.5

var find_modifiers = function find_modifiers(str) {
  var mults = [{
    reg: /^(minus|negative)[\s\-]/i,
    mult: -1
  }, {
    reg: /^(a\s)?half[\s\-](of\s)?/i,
    mult: 0.5
  }, {
    reg: /^(a\s)?quarter[\s\-]/i,
    mult: 0.25
  }];
  for (var i = 0; i < mults.length; i++) {
    if (str.match(mults[i].reg)) {
      return {
        amount: mults[i].mult,
        str: str.replace(mults[i].reg, '')
      };
    }
  }
  return {
    amount: 1,
    str: str
  };
};

module.exports = find_modifiers;

},{}],93:[function(require,module,exports){
'use strict';
// Spoken numbers take the following format
// [sixty five] (thousand) [sixty five] (hundred) [sixty five]
// aka: [one/teen/ten] (multiple) [one/teen/ten] (multiple) ...

var nums = require('../../../../data/numbers.js');
var fns = require('../../../../fns.js');
var find_modifiers = require('./modifiers.js');
var parse_decimals = require('./decimals.js');

var ones = {};
var teens = {};
var tens = {};
var multiples = {};
ones = fns.extend(ones, nums.ones);
ones = fns.extend(ones, nums.ordinal_ones);

teens = fns.extend(teens, nums.teens);
teens = fns.extend(teens, nums.ordinal_teens);

tens = fns.extend(tens, nums.tens);
tens = fns.extend(tens, nums.ordinal_tens);

multiples = fns.extend(multiples, nums.multiples);
multiples = fns.extend(multiples, nums.ordinal_multiples);

var normalize = function normalize(s) {
  //pretty-printed numbers
  s = s.replace(/, ?/g, '');
  s = s.replace(/([a-z])-([a-z])/gi, '$1 $2');
  //parse-out currency
  s = s.replace(/[$£€]/, '');
  s = s.replace(/[\$%\(\)~,]/g, '');
  s = s.trim();
  return s;
};

var section_sum = function section_sum(obj) {
  return Object.keys(obj).reduce(function (sum, k) {
    sum += obj[k];
    return sum;
  }, 0);
};

//prevent things like 'fifteen ten', and 'five sixty'
var appropriate = function appropriate(w, has) {
  if (ones[w]) {
    if (has.ones || has.teens) {
      return false;
    }
  } else if (teens[w]) {
    if (has.ones || has.teens || has.tens) {
      return false;
    }
  } else if (tens[w]) {
    if (has.ones || has.teens || has.tens) {
      return false;
    }
  }
  return true;
};

var to_number = function to_number(str) {
  //try to fail-fast
  if (!str || typeof str === 'number') {
    return str;
  }
  str = normalize(str);
  var modifier = find_modifiers(str);
  str = modifier.str;
  var biggest_yet = 0;
  var has = {};
  var sum = 0;
  var isNegative = false;
  var words = str.split(' ');
  for (var i = 0; i < words.length; i++) {
    var w = words[i];
    if (!w || w === 'and') {
      continue;
    }
    if (w === "-" || w === "negative") {
      isNegative = true;
      continue;
    }
    if (w.startsWith("-")) {
      isNegative = true;
      w = w.substr(1);
    }
    //decimal mode
    if (w === 'point') {
      sum += section_sum(has);
      sum += parse_decimals(words.slice(i + 1, words.length));
      sum *= modifier.amount;
      return sum;
    }
    //maybe it's just a number typed as a string
    if (w.match(/^[0-9,\. ]+$/)) {
      sum += parseFloat(w.replace(/[, ]/g, '')) || 0;
      continue;
    }
    //improper fraction
    var improperFractionMatch = w.match(/^([0-9,\. ]+)\/([0-9,\. ]+)$/);
    if (improperFractionMatch) {
      var num = parseFloat(improperFractionMatch[1].replace(/[, ]/g, ''));
      var denom = parseFloat(improperFractionMatch[2].replace(/[, ]/g, ''));
      sum += num / denom || 0;
      continue;
    }
    //prevent mismatched units, like 'seven eleven'
    if (!appropriate(w, has)) {
      return null;
    }
    //collect 'has' values
    if (ones[w]) {
      has['ones'] = ones[w];
    } else if (teens[w]) {
      has['teens'] = teens[w];
    } else if (tens[w]) {
      has['tens'] = tens[w];
    } else if (multiples[w]) {
      //something has gone wrong : 'two hundred five hundred'
      if (multiples[w] === biggest_yet) {
        return null;
      }
      //if it's the biggest yet, multiply the whole sum - eg 'five hundred thousand'
      if (multiples[w] > biggest_yet) {
        biggest_yet = multiples[w];
        sum += section_sum(has);
        sum = (sum || 1) * multiples[w];
      } else {
        //it's smaller, so only multiply section_sum - eg 'five thousand one hundred'
        sum += (section_sum(has) || 1) * multiples[w];
      }
      //reset our section
      has = {};
    }
  }
  //dump the remaining has values
  sum += section_sum(has);
  //post-process add modifier
  sum *= modifier.amount;
  sum *= isNegative ? -1 : 1;
  return sum;
};

module.exports = to_number;

// console.log(to_number('half a million'));

},{"../../../../data/numbers.js":16,"../../../../fns.js":23,"./decimals.js":91,"./modifiers.js":92}],94:[function(require,module,exports){
'use strict';
// const nums = require('../../../data/numbers.js');
// const fns = require('../../../fns.js');

var ones_mapping = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
var tens_mapping = [['ninety', 90], ['eighty', 80], ['seventy', 70], ['sixty', 60], ['fifty', 50], ['forty', 40], ['thirty', 30], ['twenty', 20]];

var sequence = [[1000000000, 'million'], [100000000, 'hundred million'], [1000000, 'million'], [100000, 'hundred thousand'], [1000, 'thousand'], [100, 'hundred'], [1, 'one']];

//turn number into an array of magnitudes
var breakdown_magnitudes = function breakdown_magnitudes(num) {
  var working = num;
  var have = [];
  sequence.forEach(function (a) {
    if (num > a[0]) {
      var howmany = Math.floor(working / a[0]);
      working -= howmany * a[0];
      if (howmany) {
        have.push({
          unit: a[1],
          count: howmany
        });
      }
    }
  });
  return have;
};

//turn numbers from 100-0 into their text
var breakdown_hundred = function breakdown_hundred(num) {
  var str = '';
  for (var i = 0; i < tens_mapping.length; i++) {
    if (num >= tens_mapping[i][1]) {
      num -= tens_mapping[i][1];
      str += ' ' + tens_mapping[i][0];
    }
  }
  //(hopefully) we should only have 20-0 now
  if (ones_mapping[num]) {
    str += ' ' + ones_mapping[num];
  }
  return str.trim();
};

var to_text = function to_text(num) {
  var isNegative = false;
  if (num < 0) {
    isNegative = true;
    num = Math.abs(num);
  }
  //break-down into units, counts
  var units = breakdown_magnitudes(num);
  //build-up the string from its components
  var str = '';
  for (var i = 0; i < units.length; i++) {
    var unit_name = units[i].unit;
    if (unit_name === 'one') {
      unit_name = '';
      //put an 'and' in here
      if (str.length > 1) {
        str += ' and';
      }
    }
    str += ' ' + breakdown_hundred(units[i].count) + ' ' + unit_name;
  }
  str = str || 'zero';
  str = str.replace(/ +/g, ' ');
  str = str.trim();
  if (isNegative) {
    str = 'negative ' + str;
  }
  return str;
};

module.exports = to_text;

// console.log(to_text(-5));

},{}],95:[function(require,module,exports){
'use strict';

var money = require('../../../data/currencies').reduce(function (h, s) {
  h[s] = 'currency';
  return h;
}, {});

var units = {
  'Temperature': {
    '°c': 'Celsius',
    '°f': 'Fahrenheit',
    'k': 'Kelvin',
    '°re': 'Reaumur',
    '°n': 'Newton',
    '°ra': 'Rankine'
  },
  'Volume': {
    'm³': 'cubic meter',
    'm3': 'cubic meter',
    'dm³': 'cubic decimeter',
    'dm3': 'cubic decimeter',
    'cm³': 'cubic centimeter',
    'cm3': 'cubic centimeter',
    'l': 'liter',
    'dl': 'deciliter',
    'cl': 'centiliter',
    'ml': 'milliliter',
    'in³': 'cubic inch',
    'in3': 'cubic inch',
    'ft³': 'cubic foot',
    'ft3': 'cubic foot',
    'yd³': 'cubic yard',
    'yd3': 'cubic yard',
    'gal': 'gallon',
    'bbl': 'petroleum barrel',
    'pt': 'pint',
    'qt': 'quart',
    'tbl': 'tablespoon',
    'tsp': 'teaspoon',
    'tbsp': 'tablespoon',
    'cp': 'cup',
    'fl oz': 'fluid ounce'
  },
  'Distance': {
    'km': 'kilometer',
    'm': 'meter',
    'dm': 'decimeter',
    'cm': 'centimeter',
    'mm': 'millimeter',
    'mi': 'mile',
    'in': 'inch',
    'ft': 'foot',
    'feet': 'foot',
    'yd': 'yard'
  },
  'Weight': {
    't': 'tonne',
    'kg': 'kilogram',
    'hg': 'hectogram',
    'g': 'gram',
    'dg': 'decigram',
    'cg': 'centigram',
    'mg': 'milligram',
    'µg': 'microgram',
    'carat': 'carat',
    'grain': 'grain',
    'oz': 'ounce',
    'lb': 'pound',
    'ton': 'tonne',
    'st': 'stone'
  },
  'Area': {
    'km²': 'square kilometer',
    'km2': 'square kilometer',
    'm²': 'square meter',
    'm2': 'square meter',
    'dm²': 'square decimeter',
    'dm2': 'square decimeter',
    'cm²': 'square centimeter',
    'cm2': 'square centimeter',
    'mm²': 'square millimeter',
    'mm2': 'square millimeter',
    'ha': 'hectare',
    'ca': 'centiare',
    'mile²': 'square mile',
    'mile2': 'square mile',
    'in²': 'square inch',
    'in2': 'square inch',
    'yd²': 'square yard',
    'yd2': 'square yard',
    'ft²': 'square foot',
    'ft2': 'square foot',
    'acre': 'acre'
  },
  'Frequency': {
    'hz': 'hertz'
  },
  'Speed': {
    'km/h': 'kilometer per hour',
    'kmph': 'kilometer per hour',
    'mps': 'meter per second',
    'm/s': 'meter per second',
    'mph': 'mile per hour',
    'mi/h': 'mile per hour',
    'knot': 'knot'
  },
  'Data': {
    'b': 'byte',
    'kb': 'kilobyte',
    'mb': 'megabyte',
    'gb': 'gigabyte',
    'tb': 'terabyte',
    'pt': 'petabyte',
    'eb': 'exabyte',
    'zb': 'zettabyte',
    'yb': 'yottabyte'
  },
  'Energy': {
    'j': 'joule',
    'pa': 'pascal',
    'bar': 'bar',
    'w': 'watt',
    'n': 'newton',
    'wb': 'weber',
    't': 'tesla',
    'h': 'henry',
    'c': 'coulomb',
    'v': 'volt',
    'f': 'farad',
    's': 'siemens',
    'o': 'ohm',
    'lx': 'lux',
    'lm': 'lumen'
  },
  'Time': {
    'year': 'year',
    'week': 'week',
    'day': 'day',
    'h': 'hour',
    'min': 'minute',
    's': 'second',
    'ms': 'millisecond',
    'µs': 'microsecond',
    'nanosecond': 'nanosecond',
    'picosecond': 'picosecond',
    'femtosecond': 'femtosecond',
    'attosecond': 'attosecond'
  },
  'Money': money
};

module.exports = Object.keys(units).reduce(function (h, k) {
  Object.keys(units[k]).forEach(function (u) {
    h[u] = {
      name: units[k][u],
      category: k
    };
    h[units[k][u]] = {
      name: units[k][u],
      category: k
    };
  });
  return h;
}, {});

},{"../../../data/currencies":4}],96:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Noun = require('../noun');
var to_number = require('./parse/to_number');
var to_text = require('./to_text');
var units = require('./units');
var nums = require('../../../data/numbers');
var fns = require('../../../fns');
//get an array of ordinal (first, second...) numbers
var ordinals = {};
ordinals = fns.extend(ordinals, nums.ordinal_ones);
ordinals = fns.extend(ordinals, nums.ordinal_teens);
ordinals = fns.extend(ordinals, nums.ordinal_tens);
ordinals = fns.extend(ordinals, nums.ordinal_multiples);
ordinals = Object.keys(ordinals);

var Value = function (_Noun) {
  _inherits(Value, _Noun);

  function Value(str, tag) {
    _classCallCheck(this, Value);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Value).call(this, str));

    _this.tag = tag;
    _this.pos['Value'] = true;
    _this.number = null;
    _this.unit = null;
    _this.unit_name = null;
    _this.measurement = null;
    _this.of_what = '';
    // this.text = str;
    // this.normal = str;
    if (_this.is_ordinal()) {
      _this.pos['Ordinal'] = true;
    }
    _this.parse();
    return _this;
  }

  //test for nearly-numbers, like phonenumbers, or whatever

  _createClass(Value, [{
    key: 'is_number',
    value: function is_number(s) {
      //phone numbers, etc
      if (s.match(/[:@]/)) {
        return false;
      }
      //if there's a number, then something, then a number
      if (s.match(/[0-9][^(0-9|\/),\.][0-9]/)) {
        if (s.match(/((?:[0-9]|\.)+) ((?:[0-9]|\.)+)\/((?:[0-9]|\.)+)/)) {
          // I'm sure there is a better regexpxs
          return true;
        }
        return false;
      }
      return true;
    }
  }, {
    key: 'is_number_word',
    value: function is_number_word(w) {
      var number_words = {
        minus: true,
        negative: true,
        point: true,
        half: true,
        quarter: true
      };

      if (w.match(/[0-9]/) || number_words[w]) {
        return true;
      } else if (nums.ones[w] || nums.teens[w] || nums.tens[w] || nums.multiples[w]) {
        return true;
      } else if (nums.ordinal_ones[w] || nums.ordinal_teens[w] || nums.ordinal_tens[w] || nums.ordinal_multiples[w]) {
        return true;
      }

      return false;
    }
  }, {
    key: 'is_ordinal',
    value: function is_ordinal() {
      //1st
      if (this.normal.match(/^[0-9]+(rd|st|nd|th)$/)) {
        return true;
      }
      //first, second...
      for (var i = 0; i < ordinals.length; i++) {
        if (fns.endsWith(this.normal, ordinals[i])) {
          return true;
        }
      }
      return false;
    }

    //turn an integer like 22 into '22nd'

  }, {
    key: 'to_ordinal',
    value: function to_ordinal() {
      var num = this.number;
      //fail fast
      if (!num && num !== 0) {
        return '';
      }
      //teens are all 'th'
      if (num >= 10 && num <= 20) {
        return '' + num + 'th';
      }
      //treat it as a string..
      num = '' + num;
      //fail safely
      if (!num.match(/[0-9]$/)) {
        return num;
      }
      if (fns.endsWith(num, '1')) {
        return num + 'st';
      }
      if (fns.endsWith(num, '2')) {
        return num + 'nd';
      }
      if (fns.endsWith(num, '3')) {
        return num + 'rd';
      }
      return num + 'th';
    }

    //overwrite term.normalize?
    // normalize() {
    //   let str = '' + (this.number || '');
    //   if (this.is_ordinal()) {
    //     str = this.to_ordinal(str);
    //   }
    //   if (this.unit) {
    //     str += ' ' + this.unit;
    //   }
    //   return str;
    // }

  }, {
    key: 'root',
    value: function root() {
      var str = this.number;
      if (this.unit) {
        str += ' ' + this.unit;
      }
      return str;
    }
  }, {
    key: 'is_unit',
    value: function is_unit() {
      //if it's a known unit
      if (units[this.unit]) {
        return true;
      }
      //currencies are derived-through POS
      if (this.pos['Currency']) {
        return true;
      }

      var s = this.unit.toLowerCase();
      if (nums.prefixes[s]) {
        return true;
      }

      //try singular version
      s = this.unit.replace(/s$/, '');
      if (units[s]) {
        this.unit = this.unit.replace(/s$/, '');
        return true;
      }

      s = this.unit.replace(/es$/, '');
      if (units[s]) {
        this.unit = this.unit.replace(/es$/, '');
        return true;
      }
      return false;
    }
  }, {
    key: 'parse',
    value: function parse() {
      if (!this.is_number(this.text)) {
        return;
      }

      var words = this.text.toLowerCase().split(/[ ]/);
      //split at '-' only for numbers like twenty-two, sixty-seven, etc.
      //so that 'twelve six-gram pieces' returns 12 for number, not null
      //however, still returns null for 'three sevel-eleven stores'
      for (var i = 0; i < words.length; i++) {
        var w = words[i];
        if (w.indexOf('-') === w.lastIndexOf('-') && w.indexOf('-') > -1) {
          var halves = w.split(/[-]/);
          if (this.is_number_word(halves[0]) && this.is_number_word(halves[1])) {
            words[i] = halves[0];
            words.splice(i + 1, 0, halves[1]);
          }
        }
      }

      var numbers = '';
      var raw_units = '';

      //seperate number-words from unit-words
      for (var i = 0; i < words.length; i++) {
        var w = words[i];
        if (this.is_number_word(w)) {
          numbers += ' ' + w;
        } else {
          raw_units += ' ' + w;
        }
      }
      this.unit = raw_units.trim();

      //if raw_units is something like "grams of sugar", try it first,
      //then "grams of", and then "grams".
      while (this.unit !== '') {
        if (this.is_unit() && units[this.unit]) {
          this.measurement = units[this.unit].category;
          this.unit_name = units[this.unit].name;
          break;
        } else {
          this.unit = this.unit.substr(0, this.unit.lastIndexOf(' ')).trim();
        }
      }

      //support '$400' => 400 dollars
      var firstChar = this.text.substr(0, 1);
      var symbolic_currency = {
        '€': 'euro',
        '$': 'dollar',
        '¥': 'yen',
        '£': 'pound',
        '¢': 'cent',
        '฿': 'bitcoin'
      };
      if (symbolic_currency[firstChar]) {
        this.measurement = 'Money';
        this.unit_name = 'currency';
        this.unit = symbolic_currency[firstChar];
      }

      numbers = numbers.trim();
      this.number = to_number(numbers);

      //of_what
      var of_pos = this.text.indexOf(' of ');
      if (of_pos > 0) {
        this.of_what = this.text.substring(of_pos + 4).trim();
      } else if (this.unit_name) {
        this.of_what = this.unit_name;
      }
    }
  }, {
    key: 'textual',
    value: function textual() {
      return to_text(this.number || this.normal || this.text);
    }
  }]);

  return Value;
}(Noun);

Value.fn = Value.prototype;
module.exports = Value;

// console.log(new Value('fifty saudi riyals'));

},{"../../../data/numbers":16,"../../../fns":23,"../noun":78,"./parse/to_number":93,"./to_text":94,"./units":95}],97:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _is_acronym = require('./is_acronym');
var match_term = require('../match/match_term');
var syntax_parse = require('../match/syntax_parse');
var implied = require('./implied');

var Term = function () {
  function Term(str, tag, whitespace) {
    _classCallCheck(this, Term);

    //don't pass non-strings through here any further..
    if (typeof str === 'number') {
      str = '' + str;
    } else if (typeof str !== 'string') {
      str = '';
    }
    str = str.toString();
    //trailing & preceding whitespace
    this.whitespace = whitespace || {};
    this.whitespace.preceding = this.whitespace.preceding || '';
    this.whitespace.trailing = this.whitespace.trailing || '';
    //set .text
    this.text = str;
    //the normalised working-version of the word
    this.normal = '';
    //if it's a contraction or slang, the implication, or 'hidden word'
    this.expansion = '';
    //set .normal
    this.rebuild();
    //the reasoning behind it's part-of-speech
    this.reason = '';
    //these are orphaned POS that have no methods
    var types = {
      Determiner: 'Determiner',
      Conjunction: 'Conjunction',
      Preposition: 'Preposition',
      Possessive: 'Possessive',
      Expression: 'Expression',
      Condition: 'Condition'
    };
    this.pos = {};
    this.tag = types[tag] || '?';
    //record them in pos{}
    if (types[tag]) {
      this.pos[types[tag]] = true;
    }
  }

  //when the text changes, rebuild derivative fields

  _createClass(Term, [{
    key: 'rebuild',
    value: function rebuild() {
      this.text = this.text || '';
      this.text = this.text.trim();

      this.normal = '';
      this.normalize();
      this.expansion = implied(this.normal);
    }
  }, {
    key: 'changeTo',
    value: function changeTo(str) {
      this.text = str;
      this.rebuild();
    }
    //a regex-like string search

  }, {
    key: 'match',
    value: function match(match_str, options) {
      var reg = syntax_parse([match_str]);
      return match_term(this, reg[0], options);
    }
    //the 'root' singular/infinitive/whatever.
    // method is overloaded by each pos type

  }, {
    key: 'root',
    value: function root() {
      return this.strip_apostrophe();
    }
    //strip apostrophe s

  }, {
    key: 'strip_apostrophe',
    value: function strip_apostrophe() {
      if (this.normal.match(/[a-z]'[a-z][a-z]?$/)) {
        var split = this.normal.split(/'/);
        if (split[1] === 's') {
          return split[0];
        }
      }
      return this.normal;
    }
  }, {
    key: 'has_comma',
    value: function has_comma() {
      if (this.text.match(/,$/)) {
        return true;
      }
      return false;
    }
  }, {
    key: 'has_abbreviation',
    value: function has_abbreviation() {
      // "spencer's"
      if (this.text.match(/[a-z]'[a-z][a-z]?$/)) {
        return true;
      }
      // "flanders' house"
      if (this.text.match(/[a-z]s'$/)) {
        return true;
      }
      return false;
    }
  }, {
    key: 'is_capital',
    value: function is_capital() {
      if (this.text.match(/[A-Z][a-z]/)) {
        return true;
      }
      return false;
    }
    //utility method to avoid lumping words with non-word stuff

  }, {
    key: 'is_word',
    value: function is_word() {
      if (this.text.match(/^\[.*?\]\??$/)) {
        return false;
      }
      if (!this.text.match(/[a-z|0-9]/i)) {
        return false;
      }
      if (this.text.match(/[\|#\<\>]/i)) {
        return false;
      }
      return true;
    }
    //FBI or F.B.I.

  }, {
    key: 'is_acronym',
    value: function is_acronym() {
      return _is_acronym(this.text);
    }
    //working word

  }, {
    key: 'normalize',
    value: function normalize() {
      var str = this.text || '';
      str = str.toLowerCase();
      //strip grammatical punctuation
      str = str.replace(/[,\.!:;\?\(\)^$]/g, '');
      //convert hyphenations to a multiple-word term
      str = str.replace(/([a-z])\-([a-z])/g, '$1 $2');
      // coerce single curly quotes
      str = str.replace(/[\u2018\u2019\u201A\u201B\u2032\u2035]+/g, '\'');
      // coerce double curly quotes
      str = str.replace(/[\u201C\u201D\u201E\u201F\u2033\u2036]+/g, '');
      //remove quotations + scare-quotes
      str = str.replace(/^'/g, '');
      str = str.replace(/'$/g, '');
      str = str.replace(/"/g, '');
      if (!str.match(/[a-z0-9]/i)) {
        return '';
      }
      this.normal = str;
      return this.normal;
    }
  }, {
    key: 'forms',
    value: function forms() {
      if (this.pos['Noun']) {
        return {
          'singular': this.singularize(),
          'plural': this.pluralize()
        };
      } else if (this.pos['Verb'] || this.pos['Adjective']) {
        return this.conjugate();
      } else if (this.pos['Adverb']) {
        return {
          'adjective': this.to_adjective()
        };
      }
      return {};
    }
  }]);

  return Term;
}();

Term.fn = Term.prototype;
// let t = new Term(`first`);
// console.log(t.normal);

module.exports = Term;

},{"../match/match_term":27,"../match/syntax_parse":29,"./implied":69,"./is_acronym":70}],98:[function(require,module,exports){
//turn a verb into its other grammatical forms.
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var verb_to_actor = require('./to_actor');
var to_infinitive = require('./to_infinitive');
var from_infinitive = require('./from_infinitive');
var irregular_verbs = require('../../../data/irregular_verbs');
var predict = require('./predict_form.js');
var generic = require('./generic.js');
var strip_prefix = require('./strip_prefix.js');
var fns = require('../../../fns.js');

//make sure object has all forms
var fufill = function fufill(obj, prefix) {
  //we're toast if there's no infinitive
  if (!obj.infinitive) {
    return obj;
  }
  //apply generic methods to missing forms
  if (!obj.gerund) {
    obj.gerund = generic.gerund(obj);
  }
  if (!obj.present) {
    obj.present = generic.present(obj);
  }
  if (!obj.past) {
    obj.past = generic.past(obj);
  }
  if (obj.actor === undefined) {
    obj.actor = verb_to_actor(obj.infinitive);
  }

  //add the prefix to all forms, if it exists
  if (prefix) {
    Object.keys(obj).forEach(function (k) {
      obj[k] = prefix + obj[k];
    });
  }
  //future is 'will'+infinitive
  if (!obj.future) {
    obj.future = generic.future(obj);
  }
  //perfect is 'have'+past-tense
  if (!obj.perfect) {
    obj.perfect = generic.perfect(obj);
  }
  //pluperfect is 'had'+past-tense
  if (!obj.pluperfect) {
    obj.pluperfect = generic.pluperfect(obj);
  }
  //future perfect is 'will have'+past-tense
  if (!obj.future_perfect) {
    obj.future_perfect = generic.future_perfect(obj);
  }
  return obj;
};

var conjugate = function conjugate(w) {
  if (w === undefined) {
    return {};
  }

  //for phrasal verbs ('look out'), conjugate look, then append 'out'
  var phrasal_reg = new RegExp('^(.*?) (in|out|on|off|behind|way|with|of|do|away|across|ahead|back|over|under|together|apart|up|upon|aback|down|about|before|after|around|to|forth|round|through|along|onto)$', 'i');
  if (w.match(phrasal_reg)) {
    var _ret = function () {
      var split = w.match(phrasal_reg, '');
      var phrasal_verb = split[1];
      var particle = split[2];
      var result = conjugate(phrasal_verb); //recursive
      Object.keys(result).forEach(function (k) {
        if (result[k]) {
          result[k] += ' ' + particle;
        }
      });
      return {
        v: result
      };
    }();

    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
  }

  //for pluperfect ('had tried') remove 'had' and call it past-tense
  w = w.replace(/^had /i, '');
  //for perfect ('have tried') remove 'have' and call it past-tense
  w = w.replace(/^have /i, '');
  //for future perfect ('will have tried') remove 'will have' and call it past-tense
  w = w.replace(/^will have /i, '');
  //chop it if it's future-tense
  w = w.replace(/^will /i, '');

  //un-prefix the verb, and add it in later
  var prefix = strip_prefix(w);
  w = w.replace(prefix, '');

  //guess the tense, so we know which transormation to make
  var predicted = predict(w) || 'infinitive';
  //check against suffix rules
  var infinitive = to_infinitive(w, predicted) || '';
  //check irregulars
  var obj = irregular_verbs[w] || irregular_verbs[infinitive] || {};
  obj = fns.extend({}, obj);
  //apply regex-transformations
  var conjugations = from_infinitive(infinitive);
  Object.keys(conjugations).forEach(function (k) {
    if (!obj[k]) {
      obj[k] = conjugations[k];
    }
  });
  return fufill(obj, prefix);
};
module.exports = conjugate;

// console.log(conjugate('learn'));

},{"../../../data/irregular_verbs":11,"../../../fns.js":23,"./from_infinitive":99,"./generic.js":100,"./predict_form.js":101,"./strip_prefix.js":102,"./to_actor":104,"./to_infinitive":105}],99:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var rules = [{
  reg: /(eave)$/i,
  repl: {
    pr: '$1s',
    pa: '$1d',
    gr: 'eaving',
    ar: '$1r'
  }
}, {
  reg: /(ink)$/i,
  repl: {
    pr: '$1s',
    pa: 'unk',
    gr: '$1ing',
    ar: '$1er'
  }
}, {
  reg: /(end)$/i,
  repl: {
    pr: '$1s',
    pa: 'ent',
    gr: '$1ing',
    ar: '$1er'
  }
}, {
  reg: /(ide)$/i,
  repl: {
    pr: '$1s',
    pa: 'ode',
    gr: 'iding',
    ar: 'ider'
  }
}, {
  reg: /(ake)$/i,
  repl: {
    pr: '$1s',
    pa: 'ook',
    gr: 'aking',
    ar: '$1r'
  }
}, {
  reg: /(eed)$/i,
  repl: {
    pr: '$1s',
    pa: '$1ed',
    gr: '$1ing',
    ar: '$1er'
  }
}, {
  reg: /(e)(ep)$/i,
  repl: {
    pr: '$1$2s',
    pa: '$1pt',
    gr: '$1$2ing',
    ar: '$1$2er'
  }
}, {
  reg: /(a[tg]|i[zn]|ur|nc|gl|is)e$/i,
  repl: {
    pr: '$1es',
    pa: '$1ed',
    gr: '$1ing',
    prt: '$1en'
  }
}, {
  reg: /([i|f|rr])y$/i,
  repl: {
    pr: '$1ies',
    pa: '$1ied',
    gr: '$1ying'
  }
}, {
  reg: /([td]er)$/i,
  repl: {
    pr: '$1s',
    pa: '$1ed',
    gr: '$1ing'
  }
}, {
  reg: /([bd]l)e$/i,
  repl: {
    pr: '$1es',
    pa: '$1ed',
    gr: '$1ing'
  }
}, {
  reg: /(ish|tch|ess)$/i,
  repl: {
    pr: '$1es',
    pa: '$1ed',
    gr: '$1ing'
  }
}, {
  reg: /(ion|end|e[nc]t)$/i,
  repl: {
    pr: '$1s',
    pa: '$1ed',
    gr: '$1ing'
  }
}, {
  reg: /(om)e$/i,
  repl: {
    pr: '$1es',
    pa: 'ame',
    gr: '$1ing'
  }
}, {
  reg: /([aeiu])([pt])$/i,
  repl: {
    pr: '$1$2s',
    pa: '$1$2',
    gr: '$1$2$2ing'
  }
}, {
  reg: /(er)$/i,
  repl: {
    pr: '$1s',
    pa: '$1ed',
    gr: '$1ing'
  }
}, {
  reg: /(en)$/i,
  repl: {
    pr: '$1s',
    pa: '$1ed',
    gr: '$1ing'
  }
}, {
  reg: /(..)(ow)$/i,
  repl: {
    pr: '$1$2s',
    pa: '$1ew',
    gr: '$1$2ing',
    prt: '$1$2n'
  }
}, {
  reg: /(..)([cs]h)$/i,
  repl: {
    pr: '$1$2es',
    pa: '$1$2ed',
    gr: '$1$2ing'
  }
}, {
  reg: /([^aeiou][ou])(g|d)$/i,
  repl: {
    pr: '$1$2s',
    pa: '$1$2$2ed',
    gr: '$1$2$2ing'
  }
}, {
  reg: /([^aeiou][aeiou])(b|t|p|m)$/i,
  repl: {
    pr: '$1$2s',
    pa: '$1$2$2ed',
    gr: '$1$2$2ing'
  }
}];

var keys = {
  pr: 'present',
  pa: 'past',
  gr: 'gerund',
  prt: 'participle',
  ar: 'actor'
};

var from_infinitive = function from_infinitive(str) {
  var obj = {
    infinitive: str
  };
  if (!str || typeof str !== 'string') {
    // console.log(str);
    return obj;
  }

  var _loop = function _loop(i) {
    if (str.match(rules[i].reg)) {
      // console.log(rules[i]);
      Object.keys(rules[i].repl).forEach(function (k) {
        obj[keys[k]] = str.replace(rules[i].reg, rules[i].repl[k]);
      });
      return {
        v: obj
      };
    }
  };

  for (var i = 0; i < rules.length; i++) {
    var _ret = _loop(i);

    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
  }
  return obj;
};
// console.log(from_infinitive('watch'));

module.exports = from_infinitive;

},{}],100:[function(require,module,exports){
'use strict';
//non-specifc, 'hail-mary' transforms from infinitive, into other forms

var fns = require('../../../fns');
var generic = {

  gerund: function gerund(o) {
    var inf = o.infinitive;
    if (fns.endsWith(inf, 'e')) {
      return inf.replace(/e$/, 'ing');
    }
    return inf + 'ing';
  },

  present: function present(o) {
    var inf = o.infinitive;
    if (fns.endsWith(inf, 's')) {
      return inf + 'es';
    }
    return inf + 's';
  },

  past: function past(o) {
    var inf = o.infinitive;
    if (fns.endsWith(inf, 'e')) {
      return inf + 'd';
    }
    if (fns.endsWith(inf, 'ed')) {
      return inf;
    }
    return inf + 'ed';
  },

  future: function future(o) {
    return 'will ' + o.infinitive;
  },

  perfect: function perfect(o) {
    return 'have ' + (o.participle || o.past);
  },

  pluperfect: function pluperfect(o) {
    return 'had ' + o.past;
  },

  future_perfect: function future_perfect(o) {
    return 'will have ' + o.past;
  }

};

module.exports = generic;

},{"../../../fns":23}],101:[function(require,module,exports){
'use strict';
//this method is used to predict which current conjugation a verb is

//this method is the slowest in the whole library,

var fns = require('../../../fns.js');
var suffix_rules = require('./suffix_rules');
var irregular_verbs = require('../../../data/irregular_verbs');
var known_verbs = Object.keys(irregular_verbs).reduce(function (h, k) {
  Object.keys(irregular_verbs[k]).forEach(function (k2) {
    h[irregular_verbs[k][k2]] = k2;
  });
  return h;
}, {});

var predict = function predict(w) {

  //check if known infinitive
  if (irregular_verbs[w]) {
    return 'infinitive';
  }
  //check if known infinitive
  if (known_verbs[w]) {
    return known_verbs[w];
  }

  if (w.match(/will ha(ve|d) [a-z]{2}/)) {
    return 'future_perfect';
  }
  if (w.match(/will [a-z]{2}/)) {
    return 'future';
  }
  if (w.match(/had [a-z]{2}/)) {
    return 'pluperfect';
  }
  if (w.match(/have [a-z]{2}/)) {
    return 'perfect';
  }
  if (w.match(/..erer$/)) {
    return 'actor';
  }
  if (w.match(/[^aeiou]ing$/)) {
    return 'gerund';
  }

  var arr = Object.keys(suffix_rules);
  for (var i = 0; i < arr.length; i++) {
    if (fns.endsWith(w, arr[i]) && arr[i].length < w.length) {
      return suffix_rules[arr[i]];
    }
  }
  return 'infinitive';
};

module.exports = predict;

},{"../../../data/irregular_verbs":11,"../../../fns.js":23,"./suffix_rules":103}],102:[function(require,module,exports){
'use strict';
// 'over-kill' should use conjugation rules of 'kill', etc..

var strip_prefix = function strip_prefix(str) {
  var prefix = '';
  var match = str.match(/^(over|under|re|anti|full|cross)([- ])?([^aeiou][a-z]*)/i);
  if (match) {
    prefix = match[1] + (match[2] || '');
  }
  return prefix;
};

module.exports = strip_prefix;

},{}],103:[function(require,module,exports){
'use strict';
//suffix signals for verb tense, generated from test data

var compact = {
  'gerund': [],
  'infinitive': ['ate', 'ize', 'tion', 'rify', 'then', 'ress', 'ify', 'age', 'nce', 'ect', 'ise', 'ine', 'ish', 'ace', 'ash', 'ure', 'tch', 'end', 'ack', 'and', 'ute', 'ade', 'ock', 'ite', 'ase', 'ose', 'use', 'ive', 'int', 'nge', 'lay', 'est', 'ain', 'ant', 'eed', 'er', 'le'],
  'participle': ['own', 'unk', 'ung', 'en'],
  'past': ['ed', 'lt', 'nt', 'pt', 'ew', 'ld'],
  'present': ['rks', 'cks', 'nks', 'ngs', 'mps', 'tes', 'zes', 'ers', 'les', 'acks', 'ends', 'ands', 'ocks', 'lays', 'eads', 'lls', 'els', 'ils', 'ows', 'nds', 'ays', 'ams', 'ars', 'ops', 'ffs', 'als', 'urs', 'lds', 'ews', 'ips', 'es', 'ts', 'ns', 's']
};
var suffix_rules = {};
var keys = Object.keys(compact);
var l = keys.length;

for (var i = 0; i < l; i++) {
  var l2 = compact[keys[i]].length;
  for (var o = 0; o < l2; o++) {
    suffix_rules[compact[keys[i]][o]] = keys[i];
  }
}
module.exports = suffix_rules;

},{}],104:[function(require,module,exports){
//somone who does this present-tense verb
//turn 'walk' into 'walker'
'use strict';

var actor = function actor(str) {
  str = str || '';
  var irregulars = {
    'tie': 'tier',
    'dream': 'dreamer',
    'sail': 'sailer',
    'run': 'runner',
    'rub': 'rubber',
    'begin': 'beginner',
    'win': 'winner',
    'claim': 'claimant',
    'deal': 'dealer',
    'spin': 'spinner'
  };
  var dont = {
    'aid': 1,
    'fail': 1,
    'appear': 1,
    'happen': 1,
    'seem': 1,
    'try': 1,
    'say': 1,
    'marry': 1,
    'be': 1,
    'forbid': 1,
    'understand': 1,
    'bet': 1
  };
  var transforms = [{
    'reg': /e$/i,
    'repl': 'er'
  }, {
    'reg': /([aeiou])([mlgp])$/i,
    'repl': '$1$2$2er'
  }, {
    'reg': /([rlf])y$/i,
    'repl': '$1ier'
  }, {
    'reg': /^(.?.[aeiou])t$/i,
    'repl': '$1tter'
  }];

  if (dont.hasOwnProperty(str)) {
    return null;
  }
  if (irregulars.hasOwnProperty(str)) {
    return irregulars[str];
  }
  for (var i = 0; i < transforms.length; i++) {
    if (str.match(transforms[i].reg)) {
      return str.replace(transforms[i].reg, transforms[i].repl);
    }
  }
  return str + 'er';
};

// console.log(verb_to_actor('set'))
// console.log(verb_to_actor('sweep'))
// console.log(verb_to_actor('watch'))
module.exports = actor;

},{}],105:[function(require,module,exports){
//turns a verb in any form, into it's infinitive version
// eg "walked" -> "walk"
'use strict';

var irregular_verbs = require('../../../data/irregular_verbs');
var known_verbs = Object.keys(irregular_verbs).reduce(function (h, k) {
  Object.keys(irregular_verbs[k]).forEach(function (k2) {
    h[irregular_verbs[k][k2]] = k;
  });
  return h;
}, {});

var rules = {
  participle: [{
    reg: /own$/i,
    to: 'ow'
  }, {
    reg: /(.)un([g|k])$/i,
    to: '$1in$2'
  }],

  // {
  //   reg: /(..)en$/i,
  //   to: '$1e'
  // },
  actor: [{
    reg: /(er)er$/i,
    to: '$1'
  }],
  present: [{
    reg: /(ies)$/i,
    to: 'y'
  }, {
    reg: /(tch|sh)es$/i,
    to: '$1'
  }, {
    reg: /(ss)es$/i,
    to: '$1'
  }, {
    reg: /([tzlshicgrvdnkmu])es$/i,
    to: '$1e'
  }, {
    reg: /(n[dtk]|c[kt]|[eo]n|i[nl]|er|a[ytrl])s$/i,
    to: '$1'
  }, {
    reg: /(ow)s$/i,
    to: '$1'
  }, {
    reg: /(op)s$/i,
    to: '$1'
  }, {
    reg: /([eirs])ts$/i,
    to: '$1t'
  }, {
    reg: /(ll)s$/i,
    to: '$1'
  }, {
    reg: /(el)s$/i,
    to: '$1'
  }, {
    reg: /(ip)es$/i,
    to: '$1e'
  }, {
    reg: /ss$/i,
    to: 'ss'
  }, {
    reg: /s$/i,
    to: ''
  }],
  gerund: [{
    reg: /pping$/i,
    to: 'p'
  }, {
    reg: /lling$/i,
    to: 'll'
  }, {
    reg: /tting$/i,
    to: 't'
  }, {
    reg: /ssing$/i,
    to: 'ss'
  }, {
    reg: /gging$/i,
    to: 'g'
  }, {
    reg: /([^aeiou])ying$/i,
    to: '$1y'
  }, {
    reg: /(i.)ing$/i,
    to: '$1e'
  }, {
    reg: /(u[rtcb]|[bdtpkg]l|n[cg]|a[gdkvtc]|[ua]s|[dr]g|yz|o[rlsp]|cre)ing$/i,
    to: '$1e'
  }, {
    reg: /(ch|sh)ing$/i,
    to: '$1'
  }, {
    reg: /(..)ing$/i,
    to: '$1'
  }],
  past: [{
    reg: /(ued)$/i,
    to: 'ue'
  }, {
    reg: /(e|i)lled$/i,
    to: '$1ll'
  }, {
    reg: /(sh|ch)ed$/i,
    to: '$1'
  }, {
    reg: /(tl|gl)ed$/i,
    to: '$1e'
  }, {
    reg: /(um?pt?)ed$/i,
    to: '$1'
  }, {
    reg: /(ss)ed$/i,
    to: '$1'
  }, {
    reg: /pped$/i,
    to: 'p'
  }, {
    reg: /tted$/i,
    to: 't'
  }, {
    reg: /gged$/i,
    to: 'g'
  }, {
    reg: /(h|ion|n[dt]|ai.|[cs]t|pp|all|ss|tt|int|ail|ld|en|oo.|er|k|pp|w|ou.|rt|ght|rm)ed$/i,
    to: '$1'
  }, {
    reg: /(.ut)ed$/i,
    to: '$1e'
  }, {
    reg: /(us)ed$/i,
    to: '$1e'
  }, {
    reg: /(..[^aeiou])ed$/i,
    to: '$1e'
  }, {
    reg: /ied$/i,
    to: 'y'
  }, {
    reg: /(.o)ed$/i,
    to: '$1o'
  }, {
    reg: /(.i)ed$/i,
    to: '$1'
  }, {
    reg: /([rl])ew$/i,
    to: '$1ow'
  }, {
    reg: /([pl])t$/i,
    to: '$1t'
  }]
};

var to_infinitive = function to_infinitive(str, from_tense) {
  if (known_verbs.hasOwnProperty(str)) {
    return known_verbs[str];
  }
  if (from_tense === 'infinitive') {
    return str;
  }
  var regs = rules[from_tense] || [];
  for (var i = 0; i < regs.length; i++) {
    if (str.match(regs[i].reg)) {
      return str.replace(regs[i].reg, regs[i].to);
    }
  }
  return str;
};

// console.log(to_infinitive('watch', 'infinitive'));

module.exports = to_infinitive;

},{"../../../data/irregular_verbs":11}],106:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Term = require('../term.js');
var _conjugate = require('./conjugate/conjugate.js');
var _negate = require('./verb_negate.js');
var predict_form = require('./conjugate/predict_form.js');

var verbTags = {
  infinitive: 'Infinitive',
  present: 'PresentTense',
  past: 'PastTense',
  gerund: 'Gerund',
  actor: 'Actor',
  future: 'FutureTense',
  pluperfect: 'PluperfectTense',
  perfect: 'PerfectTense'
};

var Verb = function (_Term) {
  _inherits(Verb, _Term);

  function Verb(str, tag) {
    _classCallCheck(this, Verb);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Verb).call(this, str));

    _this.tag = tag;
    _this.pos['Verb'] = true;
    //if we've been told which
    if (tag) {
      _this.pos[tag] = true;
    }
    return _this;
  }

  //'root' for a verb means infinitive

  _createClass(Verb, [{
    key: 'root',
    value: function root() {
      return this.conjugate().infinitive;
    }

    //retrieve a specific form

  }, {
    key: 'conjugation',
    value: function conjugation() {
      //check cached conjugations
      var conjugations = this.conjugate();
      var keys = Object.keys(conjugations);
      for (var i = 0; i < keys.length; i++) {
        if (conjugations[keys[i]] === this.normal) {
          return verbTags[keys[i]];
        }
      }
      //try to guess
      return verbTags[predict_form(this.normal)];
    }
  }, {
    key: 'tense',
    value: function tense() {
      //map conjugation onto past/present/future
      var tenses = {
        infinitive: 'present',
        gerund: 'present',
        actor: 'present',
        present: 'present',
        past: 'past',
        future: 'future',
        perfect: 'past',
        pluperfect: 'past',
        future_perfect: 'future'
      };
      var c = this.conjugation();
      return tenses[c] || 'present';
    }
  }, {
    key: 'conjugate',
    value: function conjugate() {
      return _conjugate(this.normal);
    }
  }, {
    key: 'to_past',
    value: function to_past() {
      var tense = 'past';
      var conjugations = this.conjugate(this.normal);
      this.tag = verbTags[tense];
      this.changeTo(conjugations[tense]);
      return conjugations[tense];
    }
  }, {
    key: 'to_present',
    value: function to_present() {
      var tense = 'present';
      var conjugations = this.conjugate(this.normal);
      this.tag = verbTags[tense];
      this.changeTo(conjugations[tense]);
      return conjugations[tense];
    }
  }, {
    key: 'to_future',
    value: function to_future() {
      var tense = 'future';
      var conjugations = this.conjugate(this.normal);
      this.tag = verbTags[tense];
      this.changeTo(conjugations[tense]);
      return conjugations[tense];
    }

    //is this verb negative already?

  }, {
    key: 'isNegative',
    value: function isNegative() {
      var str = this.normal;
      //yep, pretty simple
      if (str.match(/(n't|\bnot\b)/)) {
        return true;
      }
      return false;
    }

    //turn 'walked' to "didn't walk"

  }, {
    key: 'negate',
    value: function negate() {
      this.changeTo(_negate(this));
      return this;
    }
  }]);

  return Verb;
}(Term);

Verb.fn = Verb.prototype;

module.exports = Verb;

// let v = new Verb('stunk up');
// console.log(v.negate());

},{"../term.js":97,"./conjugate/conjugate.js":98,"./conjugate/predict_form.js":101,"./verb_negate.js":107}],107:[function(require,module,exports){
'use strict';
//recieves a verb object, and returns a negated string
//sort out don't/didn't/doesn't/won't

var fns = require('../../fns');

// logic:
// [past tense] - "sold" -> "didn't sell"
// [present] - "sells" -> "doesn't sell"
// [future] - "will sell" -> "won't sell"

var negate = function negate(v) {

  var known_negation = {
    'is': 'isn\'t',
    'are': 'aren\'t',
    'was': 'wasn\'t',
    'will': 'won\'t',
    'had': 'hadn\'t',
    //modals
    'did': 'didn\'t',
    'would': 'wouldn\'t',
    'could': 'couldn\'t',
    'should': 'shouldn\'t',
    'can': 'can\'t',
    'must': 'mustn\'t',
    'have': 'haven\'t',
    'has': 'hasn\'t',
    'does': 'doesn\'t',
    'do': 'don\'t'
  };
  //hard-coded explicit forms
  if (known_negation[v.normal]) {
    return known_negation[v.normal];
  }
  //try to un-negate?  create corrollary
  var known_affirmation = fns.reverseObj(known_negation);
  if (known_affirmation[v.normal]) {
    return known_affirmation[v.normal];
  }

  //multiple-word verbs, like 'have walked'
  var words = v.normal.split(' ');
  if (words.length > 1 && words[1] === 'not') {
    return words[0];
  }
  if (words.length > 1 && known_negation[words[0]]) {
    return known_negation[words[0]] + ' ' + words.slice(1, words.length).join(' ');
  }
  var form = v.conjugation();
  //walked -> didn't walk
  if (form === 'PastTense') {
    return 'didn\'t ' + v.conjugate()['infinitive'];
  }
  //walks -> doesn't walk
  if (form === 'PresentTense') {
    return 'doesn\'t ' + v.conjugate()['infinitive'];
  }
  //walking -> not walking
  if (form === 'Gerund') {
    return 'not ' + v.text;
  }
  //walker -> non-walker ?
  if (form === 'Actor') {
    return 'non-' + v.text;
  }
  //walk -> don't walk ?
  if (form === 'Infinitive') {
    return 'don\'t ' + v.text;
  }

  return v.text;
};

module.exports = negate;

},{"../../fns":23}],108:[function(require,module,exports){
//(Rule-based sentence boundary segmentation) - chop given text into its proper sentences.
// Ignore periods/questions/exclamations used in acronyms/abbreviations/numbers, etc.
// @spencermountain 2015 MIT
'use strict';

var abbreviations = require('../data/abbreviations').abbreviations;
var fns = require('../fns');

var naiive_split = function naiive_split(text) {
  //first, split by newline
  var splits = text.split(/(\n+)/);
  //split by period, question-mark, and exclamation-mark
  splits = splits.map(function (str) {
    return str.split(/(\S.+?[.!?])(?=\s+|$)/g);
  });
  return fns.flatten(splits);
};

var sentence_parser = function sentence_parser(text) {
  var sentences = [];
  //first do a greedy-split..
  var chunks = [];
  //ensure it 'smells like' a sentence
  if (!text || typeof text !== 'string' || !text.match(/\w/)) {
    return sentences;
  }
  // This was the splitter regex updated to fix quoted punctuation marks.
  // let splits = text.split(/(\S.+?[.\?!])(?=\s+|$|")/g);
  // todo: look for side effects in this regex replacement:
  var splits = naiive_split(text);
  //filter-out the grap ones
  for (var i = 0; i < splits.length; i++) {
    var s = splits[i];
    if (!s || s === '') {
      continue;
    }
    //this is meaningful whitespace
    if (!s.match(/\S/)) {
      //add it to the last one
      if (chunks[chunks.length - 1]) {
        chunks[chunks.length - 1] += s;
        continue;
      } else if (splits[i + 1]) {
        //add it to the next one
        splits[i + 1] = s + splits[i + 1];
        continue;
      }
      //else, only whitespace, no terms, no sentence
    }
    chunks.push(s);
  }

  //detection of non-sentence chunks
  var abbrev_reg = new RegExp('\\b(' + abbreviations.join('|') + ')[.!?] ?$', 'i');
  var acronym_reg = new RegExp('[ |\.][A-Z]\.? +?$', 'i');
  var elipses_reg = new RegExp('\\.\\.\\.* +?$');
  //loop through these chunks, and join the non-sentence chunks back together..
  for (var i = 0; i < chunks.length; i++) {
    //should this chunk be combined with the next one?
    if (chunks[i + 1] && (chunks[i].match(abbrev_reg) || chunks[i].match(acronym_reg) || chunks[i].match(elipses_reg))) {
      chunks[i + 1] = chunks[i] + (chunks[i + 1] || ''); //.replace(/ +/g, ' ');
    } else if (chunks[i] && chunks[i].length > 0) {
        //this chunk is a proper sentence..
        sentences.push(chunks[i]);
        chunks[i] = '';
      }
  }
  //if we never got a sentence, return the given text
  if (sentences.length === 0) {
    return [text];
  }

  return sentences;
};

module.exports = sentence_parser;
// console.log(sentence_parser('Hi there.\n\n \nEveryone wins\n'));

},{"../data/abbreviations":1,"../fns":23}],109:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var sentence_parser = require('./sentence_parser.js');
// const Sentence = require('../sentence/sentence.js');
var Question = require('../sentence/question/question.js');
var Statement = require('../sentence/statement/statement.js');
var fns = require('../fns.js');

//a text object is a series of sentences, along with the generic methods for transforming them

var Text = function () {
  function Text(str, options) {
    _classCallCheck(this, Text);

    options = options || {};
    var the = this;
    if (typeof str === 'string') {
      this.raw_text = str;
    } else if (typeof str === 'number') {
      this.raw_text = '' + str;
    } else {
      this.raw_text = '';
    }
    //build-up sentence/statement methods
    this.sentences = sentence_parser(this.raw_text).map(function (s) {
      var last_char = s.slice(-1);
      if (last_char === '?') {
        //TODO:be smartr
        return new Question(s, options);
      }
      return new Statement(s, options);
    });

    this.contractions = {
      // he'd -> he would
      expand: function expand() {
        the.sentences = the.sentences.map(function (s) {
          return s.contractions.expand();
        });
        return the;
      },
      // he would -> he'd
      contract: function contract() {
        the.sentences = the.sentences.map(function (s) {
          return s.contractions.contract();
        });
        return the;
      }
    };
  }

  //map over sentence methods

  _createClass(Text, [{
    key: 'text',
    value: function text() {
      var arr = this.sentences.map(function (s) {
        return s.text();
      });
      return fns.flatten(arr).join('');
    }
  }, {
    key: 'normal',
    value: function normal() {
      var arr = this.sentences.map(function (s) {
        return s.normalized();
      });
      return fns.flatten(arr).join(' ');
    }

    //further 'lemmatisation/inflection'

  }, {
    key: 'root',
    value: function root() {
      var arr = this.sentences.map(function (s) {
        return s.root();
      });
      return fns.flatten(arr).join(' ');
    }
  }, {
    key: 'terms',
    value: function terms() {
      var arr = this.sentences.map(function (s) {
        return s.terms;
      });
      return fns.flatten(arr);
    }
  }, {
    key: 'tags',
    value: function tags() {
      return this.sentences.map(function (s) {
        return s.tags();
      });
    }

    //a regex-like lookup for a sentence.
    // returns an array of terms

  }, {
    key: 'match',
    value: function match(str, options) {
      var arr = [];
      for (var i = 0; i < this.sentences.length; i++) {
        arr = arr.concat(this.sentences[i].match(str, options));
      }
      return arr;
    }
  }, {
    key: 'replace',
    value: function replace(str, replacement, options) {
      for (var i = 0; i < this.sentences.length; i++) {
        this.sentences[i].replace(str, replacement, options);
      }
      return this;
    }

    //transformations

  }, {
    key: 'to_past',
    value: function to_past() {
      this.sentences = this.sentences.map(function (s) {
        return s.to_past();
      });
      return this;
    }
  }, {
    key: 'to_present',
    value: function to_present() {
      this.sentences = this.sentences.map(function (s) {
        return s.to_present();
      });
      return this;
    }
  }, {
    key: 'to_future',
    value: function to_future() {
      this.sentences = this.sentences.map(function (s) {
        return s.to_future();
      });
      return this;
    }
  }, {
    key: 'negate',
    value: function negate() {
      this.sentences = this.sentences.map(function (s) {
        return s.negate();
      });
      return this;
    }

    //parts of speech

  }, {
    key: 'nouns',
    value: function nouns() {
      var arr = [];
      for (var i = 0; i < this.sentences.length; i++) {
        arr = arr.concat(this.sentences[i].nouns());
      }
      return arr;
    }
  }, {
    key: 'adjectives',
    value: function adjectives() {
      var arr = [];
      for (var i = 0; i < this.sentences.length; i++) {
        arr = arr.concat(this.sentences[i].adjectives());
      }
      return arr;
    }
  }, {
    key: 'verbs',
    value: function verbs() {
      var arr = [];
      for (var i = 0; i < this.sentences.length; i++) {
        arr = arr.concat(this.sentences[i].verbs());
      }
      return arr;
    }
  }, {
    key: 'adverbs',
    value: function adverbs() {
      var arr = [];
      for (var i = 0; i < this.sentences.length; i++) {
        arr = arr.concat(this.sentences[i].adverbs());
      }
      return arr;
    }

    //mining

  }, {
    key: 'people',
    value: function people() {
      var arr = [];
      for (var i = 0; i < this.sentences.length; i++) {
        arr = arr.concat(this.sentences[i].people());
      }
      return arr;
    }
  }, {
    key: 'places',
    value: function places() {
      var arr = [];
      for (var i = 0; i < this.sentences.length; i++) {
        arr = arr.concat(this.sentences[i].places());
      }
      return arr;
    }
  }, {
    key: 'organizations',
    value: function organizations() {
      var arr = [];
      for (var i = 0; i < this.sentences.length; i++) {
        arr = arr.concat(this.sentences[i].organizations());
      }
      return arr;
    }
  }, {
    key: 'dates',
    value: function dates() {
      var arr = [];
      for (var i = 0; i < this.sentences.length; i++) {
        arr = arr.concat(this.sentences[i].dates());
      }
      return arr;
    }
  }, {
    key: 'values',
    value: function values() {
      var arr = [];
      for (var i = 0; i < this.sentences.length; i++) {
        arr = arr.concat(this.sentences[i].values());
      }
      return arr;
    }
    //more generic named-entity recognition

  }, {
    key: 'topics',
    value: function topics() {
      //consolodate topics across sentences
      var obj = {};
      for (var i = 0; i < this.sentences.length; i++) {
        var topics = this.sentences[i].topics();
        for (var o = 0; o < topics.length; o++) {
          if (obj[topics[o].text]) {
            obj[topics[o].text].count += topics[o].count;
          } else {
            obj[topics[o].text] = topics[o];
          }
        }
      }
      //sort by frequency
      var arr = Object.keys(obj).map(function (k) {
        return obj[k];
      });
      return arr.sort(function (a, b) {
        if (a.count > b.count) {
          return -1;
        } else {
          return 1;
        }
      });
    }
  }]);

  return Text;
}();

Text.fn = Text.prototype;

module.exports = Text;

},{"../fns.js":23,"../sentence/question/question.js":54,"../sentence/statement/statement.js":60,"./sentence_parser.js":108}]},{},[24])(24)
});

var speechInput = {
    init: function(){
        this.browserCheck();
    },
    browserCheck : function(){
        if (!('webkitSpeechRecognition' in window)) {
            alert("webkitSpeechRecognition is not supported");
            return;
        }else {
            this.runSpeech();
        }
    },
    runSpeech : function(){
        var final_transcript = '',
            recognizing = false,
            ignore_onend,
            start_timestamp;
        // start_button.style.display = 'inline-block';

        // --- Responding -- //
        var dialogInput = $("#dialog"),
            clearInputTimer;

        function respond(message){
            if (message.lastIndexOf("hello del")!== -1){              
                responsiveVoice.speak("Hello Michael. Shall we start the demo?");
            }
            if (message.lastIndexOf("laptop")!== -1){    
                $("#output_wrap").show();
                responsiveVoice.speak("I heard laptop, is this for home or business?");
            }
            if (message.lastIndexOf("home")!== -1){    
                $("#dl-segment").click();
                responsiveVoice.speak("Did you have a brand in mind?");
            }
            if (message.lastIndexOf("inspiron")!== -1){     
                $("#dl-brand").click();         
                responsiveVoice.speak("I heard Inspiron, see our current models below?");
            }
            clearInputTimer = setTimeout(function(){                  
                $("#final_span").text("");
                $("#interim_span").text("");
            }, 200);
            
        }
        // $("body").on("click", "#Go", function(){
        //     var inputText = dialogInput.val().toLowerCase();
        //     if(inputText === "hello delli"){
        //        responsiveVoice.speak("hello Michael, should we start the demo?"); 
        //     }
            
        // });

        // -- End Responding -- //

        $("body").on("click", "#start_button", function(){
            startButton(event);
        })

        var recognition = new webkitSpeechRecognition();

        recognition.continuous = true;
        recognition.interimResults = true;

        recognition.onstart = function() {
            recognizing = true;
            showInfo('info_speak_now');
            start_img.src = 'images/mic-animate.gif';
        };

        recognition.onerror = function(event) {
            if (event.error == 'no-speech') {
                start_img.src = 'images/mic.gif';
                showInfo('info_no_speech');
                ignore_onend = true;
            }
            if (event.error == 'audio-capture') {
                start_img.src = 'images/mic.gif';
                showInfo('info_no_microphone');
                ignore_onend = true;
            }
            if (event.error == 'not-allowed') {
                if (event.timeStamp - start_timestamp < 100) {
                    showInfo('info_blocked');
                } else {
                    showInfo('info_denied');
                }
                ignore_onend = true;
            }
        };

        recognition.onend = function() {
            recognizing = false;
            if (ignore_onend) {
                return;
            }
            start_img.src = 'images/mic.gif';
            if (!final_transcript) {
                showInfo('info_start');
                return;
            }
            showInfo('');
            if (window.getSelection) {
                window.getSelection().removeAllRanges();
                var range = document.createRange();
                range.selectNode(document.getElementById('final_span'));
                window.getSelection().addRange(range);
                
            }
        };

        recognition.onresult = function(event) {
            var interim_transcript = '';
            for (var i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    final_transcript += event.results[i][0].transcript;

                    //-- Adding the feed to dialog -- //
                    respond(final_transcript.toLowerCase());
                    final_transcript = "";
                    continue;

                } else {
                    interim_transcript += event.results[i][0].transcript;
                }
            }
            final_transcript = capitalize(final_transcript);
            final_span.innerHTML = linebreak(final_transcript);
            interim_span.innerHTML = linebreak(interim_transcript);
            if (final_transcript || interim_transcript) {
                showButtons('inline-block');
            }
        };

        var two_line = /\n\n/g;
        var one_line = /\n/g;
        function linebreak(s) {
            return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
        }
        var first_char = /\S/;
        function capitalize(s) {
            return s.replace(first_char, function(m) { return m.toUpperCase(); });
        }

        function startButton(event) {
            if (recognizing) {
                recognition.stop();
                return;
            }
            final_transcript = '';
            recognition.lang = '6';
            // recognition.lang = select_dialect.value;
            recognition.start();
            ignore_onend = false;
            final_span.innerHTML = '';
            interim_span.innerHTML = '';
            start_img.src = '/images/mic-slash.gif';
            showInfo('info_allow');
            showButtons('none');
            start_timestamp = event.timeStamp;
        }
        function showInfo(s) {
            if (s) {
                for (var child = info.firstChild; child; child = child.nextSibling) {
                    if (child.style) {
                        child.style.display = child.id == s ? 'inline' : 'none';
                    }
                }
                info.style.visibility = 'visible';
            } else {
                info.style.visibility = 'hidden';
            }
        }
        var current_style;
        function showButtons(style) {
            if (style == current_style) {
                return;
            }
            current_style = style;
        }
    }

};
speechInput.init();


var mappedCartItems = [
  {
    "Description": "Inspiron 11 3000 Non-Touch",
    "SubTotalAmount": "$199.99",
    "ImageUrl": "https://si.cdn.dell.com/images/global/configurator/chassis/inspnb-11-3162-nt-wh-ft-120x107.jpg",
    "Components": [
      {
        "Name": "Inspiron 11 3000 Series",
        "Description": "Inspiron 11 3000 Series",
        "ProductCode": "RT3162",
        "Skus": [
          "210-AGPN"
        ]
      },
      {
        "Name": "Processor",
        "Description": "Intel® Celeron® Processor N3050 (2M Cache, up to 2.16 GHz)",
        "ProductCode": "C484MT",
        "Skus": [
          "338-BIMI"
        ]
      },
      {
        "Name": "Operating System",
        "Description": "Windows 10 Home, 64-bit, English",
        "ProductCode": "10HE6E",
        "Skus": [
          "619-AHCP"
        ]
      },
      {
        "Name": "Memory",
        "Description": "2GB Single Channel DDR3L 1600MHz",
        "ProductCode": "2GBINTG",
        "Skus": [
          "370-ACLT"
        ]
      },
      {
        "Name": "Hard Drive",
        "Description": "32GB eMMC",
        "ProductCode": "32EMMC",
        "Skus": [
          "400-ACOU"
        ]
      },
      {
        "Name": "Video Card",
        "Description": "Intel® HD Graphics",
        "ProductCode": "INTHD",
        "Skus": [
          "490-BCUW"
        ]
      },
      {
        "Name": "Display",
        "Description": "11.6-inch HD (1366 x 768) Anti-Glare LED-Backlit Display",
        "ProductCode": "HDLCD",
        "Skus": [
          "391-BCNZ"
        ]
      },
      {
        "Name": "Color Choice",
        "Description": "Alpine White",
        "ProductCode": "CVRWHT",
        "Skus": [
          "320-BBVK"
        ]
      },
      {
        "Name": "Wireless",
        "Description": "802.11ac + Bluetooth 4.0, Dual Band 2.4&5 GHz, 1x1",
        "ProductCode": "IW3160",
        "Skus": [
          "555-BBTG"
        ]
      },
      {
        "Name": "Primary Battery",
        "Description": "32 WHr, 2-Cell Battery (Integrated)",
        "ProductCode": "2CBATT",
        "Skus": [
          "451-BBTY"
        ]
      },
      {
        "Name": "Keyboard",
        "Description": "Keyboard ENG US",
        "ProductCode": "WHKBENG",
        "Skus": [
          "346-BBVY",
          "580-AEQZ"
        ]
      },
      {
        "Name": "Power Supply",
        "Description": "45 Watt AC Adaptor",
        "ProductCode": "45WTAC",
        "Skus": [
          "450-AFKG"
        ]
      },
      {
        "Name": "Cable",
        "Description": "Power Cord, US/CAN",
        "ProductCode": "PWRENG",
        "Skus": [
          "450-ABLO"
        ]
      },
      {
        "Name": "Business Support",
        "Description": "Return Label, Dell, RETURNPOL",
        "ProductCode": "RTRNLB8",
        "Skus": [
          "811-BBBC"
        ]
      },
      {
        "Name": "Documentation/Disks",
        "Description": "WIN 10, English-French",
        "ProductCode": "WINEFD",
        "Skus": [
          "340-AGIK"
        ]
      },
      {
        "Name": "Packaging Label",
        "Description": "Dell.com Order",
        "ProductCode": "NORTL",
        "Skus": [
          "332-1530"
        ]
      },
      {
        "Name": "Non-Microsoft Application Software",
        "Description": "Additional Software",
        "ProductCode": "INVW10",
        "Skus": [
          "658-BDBZ"
        ]
      },
      {
        "Name": "Processor Branding",
        "Description": "Intel® Celeron® Label",
        "ProductCode": "CELABL",
        "Skus": [
          "340-AQVB"
        ]
      },
      {
        "Name": "Packaging",
        "Description": "Shipping Material",
        "ProductCode": "SHPMTL",
        "Skus": [
          "328-BCHL"
        ]
      },
      {
        "Name": "E-Star",
        "Description": "Energy Star Compliant",
        "ProductCode": "ESTAR6",
        "Skus": [
          "340-AAPZ"
        ]
      },
      {
        "Name": "Order Information",
        "Description": "Shipping Information",
        "ProductCode": "USNONE",
        "Skus": [
          "332-1286"
        ]
      },
      {
        "Name": "Systems Management",
        "Description": "Windows System Drive,3162",
        "ProductCode": "WINSW",
        "Skus": [
          "340-AVED"
        ]
      },
      {
        "Name": "Placemat",
        "Description": "WIN 10 Placemat",
        "ProductCode": "PLMT10",
        "Skus": [
          "340-AUXE"
        ]
      },
      {
        "Name": "Driver",
        "Description": "802.11ac + Bluetooth 4.0, Dual Band 2.4&5 GHz, 1x1 Wireless Driver",
        "ProductCode": "SWD3160",
        "Skus": [
          "340-AUPJ"
        ]
      },
      {
        "Name": "Operating System Recovery Options",
        "Description": "Operating System Recovery Media Not Included",
        "ProductCode": "NODBRM",
        "Skus": [
          "340-ACQQ"
        ]
      },
      {
        "Name": "FGA Module",
        "Description": "ROCKET1701_101/US1/BTS",
        "ProductCode": "FG0005",
        "Skus": [
          "998-BVCK"
        ]
      },
      {
        "Name": "Label",
        "Description": "Regulatory Label",
        "ProductCode": "REGLBL",
        "Skus": [
          "389-BIUD"
        ]
      },
      {
        "Name": "Office 2016 - Word, Excel, Powerpoint & more",
        "Description": "Microsoft Office 30 Day Trial",
        "ProductCode": "OTRT13M",
        "Skus": [
          "658-BCSB"
        ]
      },
      {
        "Name": "Security Software  <span class=\"dellRecommended\">Inspiron PCs on Dell.com come with 1yr McAfee LiveSafe, $89 value.</span>",
        "Description": "McAfee LiveSafe 12 Month Subscription",
        "ProductCode": "LSIA12M",
        "Skus": [
          "525-0033",
          "658-BCCO"
        ]
      },
      {
        "Name": "Support",
        "Description": "1 Year Ltd Hware Warranty: Mail-in; Customer supplies box, Dell pays shipping",
        "ProductCode": "MI1",
        "Skus": [
          "806-6351",
          "806-6352"
        ]
      },
      {
        "Name": "Hard Drive Software",
        "Description": "Windows 10 OS Info -32G",
        "ProductCode": "W10COP",
        "Skus": [
          "340-ARLX"
        ]
      }
    ]
  },
  {
    "Description": "Inspiron 15 5000 Non-Touch",
    "SubTotalAmount": "$599.99",
    "ImageUrl": "https://si.cdn.dell.com/images/global/configurator/chassis/insp-15-5551-nt-blk-ft-120x107.jpg",
    "Components": [
      {
        "Name": "Base",
        "Description": "Inspiron 15 5000 Series",
        "ProductCode": "TL5559",
        "Skus": [
          "210-AEYM"
        ]
      },
      {
        "Name": "Processor",
        "Description": "6th Generation Intel® Core i5-6200U Processor (3M Cache, up to 2.80 GHz)",
        "ProductCode": "533NW3",
        "Skus": [
          "338-BHOV"
        ]
      },
      {
        "Name": "Operating System",
        "Description": "Windows 10 Home, 64-bit, English",
        "ProductCode": "10H64E",
        "Skus": [
          "619-AHCQ"
        ]
      },
      {
        "Name": "Memory",
        "Description": "8GB, 1600MHz, DDR3L; up to 16GB (additional memory sold separately)",
        "ProductCode": "8G2D3L",
        "Skus": [
          "370-AANL"
        ]
      },
      {
        "Name": "Hard Drive",
        "Description": "1TB 5400 rpm Hard Drive",
        "ProductCode": "1TB54",
        "Skus": [
          "400-AAZU"
        ]
      },
      {
        "Name": "Video Card",
        "Description": "Intel® HD Graphics 520",
        "ProductCode": "INTHD",
        "Skus": [
          "490-BCUW"
        ]
      },
      {
        "Name": "Display",
        "Description": "15.6-inch HD (1366 x 768) Truelife LED-Backlit Display",
        "ProductCode": "HDLCD",
        "Skus": [
          "391-BBZM"
        ]
      },
      {
        "Name": "CD ROM/DVD ROM",
        "Description": "Tray load DVD Drive (Reads and Writes to DVD/CD)",
        "ProductCode": "8DVDRW",
        "Skus": [
          "429-AAJV"
        ]
      },
      {
        "Name": "Color Choice",
        "Description": "Theoretical Gray, Matte Metallic IMR",
        "ProductCode": "CVRSLNT",
        "Skus": [
          "320-BBOT"
        ]
      },
      {
        "Name": "Wireless",
        "Description": "802.11ac + Bluetooth 4.0, Dual Band 2.4&5 GHz, 1x1",
        "ProductCode": "3160",
        "Skus": [
          "555-BCIY"
        ]
      },
      {
        "Name": "Primary Battery",
        "Description": "40 WHr, 4-Cell Battery (removable)",
        "ProductCode": "4CBATT",
        "Skus": [
          "451-BBMG"
        ]
      },
      {
        "Name": "Keyboard",
        "Description": "Backlit Keyboard, English",
        "ProductCode": "ENGKBBL",
        "Skus": [
          "580-ABYO"
        ]
      },
      {
        "Name": "Power Supply",
        "Description": "45 Watt AC Adaptor",
        "ProductCode": "45WTAC",
        "Skus": [
          "450-AEHK"
        ]
      },
      {
        "Name": "Cable",
        "Description": "Power Cord, US/CAN",
        "ProductCode": "PWRENG",
        "Skus": [
          "450-ABLO"
        ]
      },
      {
        "Name": "Optical Software",
        "Description": "Cyberlink Media Suite Essentials without Media",
        "ProductCode": "W8DVDSW",
        "Skus": [
          "658-BBTV"
        ]
      },
      {
        "Name": "Business Support",
        "Description": "Retail Return Label",
        "ProductCode": "RTRNLB8",
        "Skus": [
          "811-BBBC"
        ]
      },
      {
        "Name": "Documentation/Disks",
        "Description": "Documentation, English-French",
        "ProductCode": "W81EFD",
        "Skus": [
          "340-AGIK"
        ]
      },
      {
        "Name": "Support Tech Sheet and Powercord",
        "Description": "Dell.com Order",
        "ProductCode": "NORTL",
        "Skus": [
          "332-1530"
        ]
      },
      {
        "Name": "Labels",
        "Description": "Palmrest Label,USENG, Win8/10",
        "ProductCode": "PLUSW10",
        "Skus": [
          "389-BHED"
        ]
      },
      {
        "Name": "Non-Microsoft Application Software",
        "Description": "Additional Software",
        "ProductCode": "INSW10",
        "Skus": [
          "658-BCUN"
        ]
      },
      {
        "Name": "Processor Branding",
        "Description": "Intel® Core i5 Label",
        "ProductCode": "CI5SML",
        "Skus": [
          "389-BHIB"
        ]
      },
      {
        "Name": "Packaging",
        "Description": "Shipping Material",
        "ProductCode": "SHPMTL",
        "Skus": [
          "328-BCCD",
          "340-AAPP"
        ]
      },
      {
        "Name": "Energy Efficiency Options",
        "Description": "ESTAR 5.0/6.0",
        "ProductCode": "ESTAR5",
        "Skus": [
          "340-AAPZ"
        ]
      },
      {
        "Name": "Shipping SKU's",
        "Description": "Shipping Information",
        "ProductCode": "USNONE",
        "Skus": [
          "332-1286"
        ]
      },
      {
        "Name": "Systems Management",
        "Description": "Windows System Driver,5559",
        "ProductCode": "WINSSW",
        "Skus": [
          "631-AAQV"
        ]
      },
      {
        "Name": "Placemat",
        "Description": "Placemat Documentation, Win 10",
        "ProductCode": "PLMTW10",
        "Skus": [
          "340-ARSY"
        ]
      },
      {
        "Name": "Driver",
        "Description": "802.11ac + Bluetooth 4.0, Dual Band 2.4&5 GHz, 1x1 Wireless Driver",
        "ProductCode": "SW3160",
        "Skus": [
          "612-BBBZ"
        ]
      },
      {
        "Name": "Operating System Recovery Options",
        "Description": "Operating System Recovery Media Not Included",
        "ProductCode": "NODBRM",
        "Skus": [
          "340-ACQQ"
        ]
      },
      {
        "Name": "FGA Module",
        "Description": "TULIP15SKL1701_2310/US/BTS",
        "ProductCode": "FG0047",
        "Skus": [
          "998-BUPC"
        ]
      },
      {
        "Name": "Label",
        "Description": "Regulatory Label, UMA",
        "ProductCode": "LBLUMA",
        "Skus": [
          "389-BHDM"
        ]
      },
      {
        "Name": "Security Software  <span class=\"dellRecommended\">Inspiron PCs on Dell.com come with 1yr McAfee LiveSafe, $89 value.</span>",
        "Description": "McAfee LiveSafe 12 Month Subscription",
        "ProductCode": "LSIA12M",
        "Skus": [
          "525-0033",
          "658-BCCO"
        ]
      },
      {
        "Name": "Office 2016 - Word, Excel, Powerpoint & more",
        "Description": "Microsoft Office 30 Day Trial",
        "ProductCode": "OTRT13M",
        "Skus": [
          "658-BCSB"
        ]
      },
      {
        "Name": "Support",
        "Description": "1 Year Ltd Hware Warranty: Mail-in; Customer supplies box, Dell pays shipping",
        "ProductCode": "MI1",
        "Skus": [
          "801-2700",
          "801-2733"
        ]
      }
    ]
  },
  {
    "Description": "New Inspiron 15 7000 2-in-1",
    "SubTotalAmount": "$999.99",
    "ImageUrl": "https://si.cdn.dell.com/images/global/configurator/chassis/insp-15-7569-gry-ft-win-120x107.jpg",
    "Components": [
      {
        "Name": "Inspiron 15 7000 Series",
        "Description": "Inspiron 15 7000 Series",
        "ProductCode": "SL7569",
        "Skus": [
          "210-AHPJ"
        ]
      },
      {
        "Name": "Processor",
        "Description": "6th Generation Intel® Core i7-6500U Processor (4M Cache, up to 3.10 GHz)",
        "ProductCode": "7727VW",
        "Skus": [
          "338-BJJD"
        ]
      },
      {
        "Name": "Operating System",
        "Description": "Windows 10 Home 64-bit English",
        "ProductCode": "10HHEE",
        "Skus": [
          "619-AHCY"
        ]
      },
      {
        "Name": "Memory",
        "Description": "12GB DDR4 at 2133MHz (4GBx1+8GBx1)",
        "ProductCode": "12G2D",
        "Skus": [
          "370-ACFB"
        ]
      },
      {
        "Name": "Hard Drive",
        "Description": "512GB Solid State Drive",
        "ProductCode": "512SSD",
        "Skus": [
          "400-AMQD"
        ]
      },
      {
        "Name": "Video Card",
        "Description": "Intel® HD Graphics 520",
        "ProductCode": "INTHD",
        "Skus": [
          "490-BBRM"
        ]
      },
      {
        "Name": "LCD",
        "Description": "15.6-inch FHD (1920 x 1080) Truelife LED-Backlit Touch Display with Wide Viewing Angles",
        "ProductCode": "TFHDIRC",
        "Skus": [
          "391-BCRW"
        ]
      },
      {
        "Name": "Color Choice",
        "Description": "Silver",
        "ProductCode": "FHDGRAY",
        "Skus": [
          "320-BBXH"
        ]
      },
      {
        "Name": "Wireless",
        "Description": "Intel® Dual Band Wireless-AC 3165 + Bluetooth 4.0",
        "ProductCode": "3165",
        "Skus": [
          "555-BCJN"
        ]
      },
      {
        "Name": "Primary Battery",
        "Description": "42 WHr, 3-Cell Battery (integrated)",
        "ProductCode": "42BATT",
        "Skus": [
          "451-BBVN"
        ]
      },
      {
        "Name": "Keyboard",
        "Description": "Backlit Keyboard",
        "ProductCode": "ENGKBD",
        "Skus": [
          "346-BBXO",
          "580-AFCD"
        ]
      },
      {
        "Name": "Power Supply",
        "Description": "45 Watt AC Adaptor",
        "ProductCode": "45WTAC",
        "Skus": [
          "450-AEHK"
        ]
      },
      {
        "Name": "Cable",
        "Description": "Power Cord,125V,1M,US",
        "ProductCode": "PWRENG",
        "Skus": [
          "450-ABLO"
        ]
      },
      {
        "Name": "Business Support",
        "Description": "Return Label",
        "ProductCode": "RTRNLB",
        "Skus": [
          "811-BBBC"
        ]
      },
      {
        "Name": "Documentation/Disks",
        "Description": "Documentation, English-French",
        "ProductCode": "W10EFD",
        "Skus": [
          "340-AGIK"
        ]
      },
      {
        "Name": "Packaging Label",
        "Description": "Dell.com Order",
        "ProductCode": "NORTL",
        "Skus": [
          "332-1530"
        ]
      },
      {
        "Name": "Labels",
        "Description": "Palmrest Label",
        "ProductCode": "PLMENW",
        "Skus": [
          "389-BJTR"
        ]
      },
      {
        "Name": "Non-Microsoft Application Software",
        "Description": "Additional Software",
        "ProductCode": "INSW10",
        "Skus": [
          "658-BCUN",
          "658-BDFL"
        ]
      },
      {
        "Name": "Processor Branding",
        "Description": "Intel® Label CI7",
        "ProductCode": "CI7",
        "Skus": [
          "389-BHLE"
        ]
      },
      {
        "Name": "Packaging",
        "Description": "Shipping Material, Direct",
        "ProductCode": "SHPMDIR",
        "Skus": [
          "328-BCHX"
        ]
      },
      {
        "Name": "E-Star",
        "Description": "Energy Star Compliant",
        "ProductCode": "ESTAR6",
        "Skus": [
          "340-AAPZ"
        ]
      },
      {
        "Name": "Order Information",
        "Description": "Shipping Information",
        "ProductCode": "USNONE",
        "Skus": [
          "332-1286"
        ]
      },
      {
        "Name": "Systems Management",
        "Description": "Windows System Driver, 7569",
        "ProductCode": "WINSW",
        "Skus": [
          "631-AAYD"
        ]
      },
      {
        "Name": "Placemat",
        "Description": "Placemat Documentation",
        "ProductCode": "PLCMT10",
        "Skus": [
          "340-BBVN"
        ]
      },
      {
        "Name": "Driver",
        "Description": "802.11ac + Bluetooth 4.0, Dual Band 2.4&5 GHz, 1x1 Wireless Driver",
        "ProductCode": "SW3165",
        "Skus": [
          "340-BBVK"
        ]
      },
      {
        "Name": "Operating System Recovery Options",
        "Description": "Operating System Recovery Media Not Included",
        "ProductCode": "NODBRM",
        "Skus": [
          "340-ACQQ"
        ]
      },
      {
        "Name": "FGA Module",
        "Description": "Inspiron75691703_014_P/BTO",
        "ProductCode": "FG0007",
        "Skus": [
          "998-BYIL"
        ]
      },
      {
        "Name": "Label",
        "Description": "System Regulatory Label",
        "ProductCode": "REGLBL",
        "Skus": [
          "389-BJTE"
        ]
      },
      {
        "Name": "Microsoft Office Productivity Software  Word, Excel, Powerpoint & more",
        "Description": "Microsoft Office 30 Day Trial",
        "ProductCode": "OTRT13M",
        "Skus": [
          "658-BCSB"
        ]
      },
      {
        "Name": "Security Software",
        "Description": "McAfee LiveSafe 12 Month Subscription",
        "ProductCode": "LSIA12M",
        "Skus": [
          "525-0033",
          "658-BCCO"
        ]
      },
      {
        "Name": "Support",
        "Description": "1 Year Ltd Hware Warranty: Mail-in; Customer supplies box, Dell pays shipping",
        "ProductCode": "MI1",
        "Skus": [
          "801-2700",
          "801-2733"
        ]
      }
    ]
  },
  {
    "Description": "XPS 12 2-in-1",
    "SubTotalAmount": "$999.99",
    "ImageUrl": "https://si.cdn.dell.com/images/global/configurator/chassis/xps-12-9250-2-n-1-bk-ft-120x107.jpg",
    "Components": [
      {
        "Name": "XPS 12",
        "Description": "XPS 12",
        "ProductCode": "XPS12",
        "Skus": [
          "210-AFDI"
        ]
      },
      {
        "Name": "Processor",
        "Description": "6th Generation Intel Core m5 6Y57 (4M Cache, up to 2.8 GHz)",
        "ProductCode": "5X30RP",
        "Skus": [
          "338-BICX"
        ]
      },
      {
        "Name": "Operating System",
        "Description": "Windows 10 Home, 64-bit, English",
        "ProductCode": "10HHEE",
        "Skus": [
          "619-AHCY"
        ]
      },
      {
        "Name": "Memory",
        "Description": "8GB LPDDR3-1600MHz",
        "ProductCode": "8GB",
        "Skus": [
          "370-ACFS"
        ]
      },
      {
        "Name": "Hard Drive",
        "Description": "128GB Solid State Drive",
        "ProductCode": "128SSD",
        "Skus": [
          "400-AKXP"
        ]
      },
      {
        "Name": "Video Card",
        "Description": "Intel® HD Graphics 515",
        "ProductCode": "UMA",
        "Skus": [
          "490-BCTD"
        ]
      },
      {
        "Name": "LCD",
        "Description": "12.5\" FHD (1920x1080) touch",
        "ProductCode": "FHD",
        "Skus": [
          "391-BCGS"
        ]
      },
      {
        "Name": "Wireless",
        "Description": "Intel 8260 2x2 802.11ac 2.4/5GHz + Bluetooth 4.1",
        "ProductCode": "8260AC",
        "Skus": [
          "555-BCNX"
        ]
      },
      {
        "Name": "Primary Battery",
        "Description": "30WHr Integrated Battery",
        "ProductCode": "30W",
        "Skus": [
          "451-BBQG"
        ]
      },
      {
        "Name": "Keyboard",
        "Description": "XPS 12 Premier Keyboard with Dell Premier Magnetic Folio (82 Keys)",
        "ProductCode": "MKBDEN",
        "Skus": [
          "580-AEQY",
          "583-BCUH"
        ]
      },
      {
        "Name": "Driver",
        "Description": "8260 Wireless SW",
        "ProductCode": "WLAN82",
        "Skus": [
          "389-BIOI",
          "658-BDCG"
        ]
      },
      {
        "Name": "Mobile Broadband",
        "Description": "Mobile Broadband Not Included",
        "ProductCode": "WLAN",
        "Skus": [
          "556-BBNM"
        ]
      },
      {
        "Name": "Cable",
        "Description": "E5 Power Cord for 3-pin Adapter (US/China)",
        "ProductCode": "PWREDAO",
        "Skus": [
          "340-AAMU"
        ]
      },
      {
        "Name": "Systems Management",
        "Description": "Non-Vpro Systems Managment SW",
        "ProductCode": "NVPRO",
        "Skus": [
          "631-AAWX",
          "631-AAWY"
        ]
      },
      {
        "Name": "Placemat",
        "Description": "XPS 12 Placemat",
        "ProductCode": "PLCMT",
        "Skus": [
          "340-AUQD"
        ]
      },
      {
        "Name": "E-Star",
        "Description": "E-Star Qualified",
        "ProductCode": "ESTAR",
        "Skus": [
          "387-BBKZ"
        ]
      },
      {
        "Name": "Business Support",
        "Description": "Dell.com Order",
        "ProductCode": "NORTL",
        "Skus": [
          "332-0550"
        ]
      },
      {
        "Name": "Packaging Label",
        "Description": "Dell.com Order",
        "ProductCode": "NORTL",
        "Skus": [
          "332-1530"
        ]
      },
      {
        "Name": "Documentation/Disks",
        "Description": "Safety/Environment and Regulatory Guide (English/French Multi-language)",
        "ProductCode": "ENGMUI",
        "Skus": [
          "340-AGIK"
        ]
      },
      {
        "Name": "Packaging",
        "Description": "XPS 12 Shipping Material",
        "ProductCode": "SHIP",
        "Skus": [
          "340-AAPP",
          "340-AUQC",
          "460-BBVL"
        ]
      },
      {
        "Name": "Power Supply",
        "Description": "30 Watt AC Adapter",
        "ProductCode": "30W",
        "Skus": [
          "450-AEVT"
        ]
      },
      {
        "Name": "FGA Module",
        "Description": "VEN1703_1407/US/CA/BTO",
        "ProductCode": "FG0010",
        "Skus": [
          "998-BUQK"
        ]
      },
      {
        "Name": "Back Cover",
        "Description": "WLAN System Back Cover",
        "ProductCode": "WLAN",
        "Skus": [
          "320-BBSD"
        ]
      },
      {
        "Name": "Processor Branding",
        "Description": "M5 Non-Vpro Label",
        "ProductCode": "M5NVPRO",
        "Skus": [
          "389-BIOH"
        ]
      },
      {
        "Name": "Office 2016 - Word, Excel, Powerpoint & more",
        "Description": "Microsoft Office 30 Day Trial",
        "ProductCode": "OTRT13M",
        "Skus": [
          "658-BCSB"
        ]
      },
      {
        "Name": "Security Software  <span class=\"dellRecommended\">XPS PCs on Dell.com come protected with 1yr McAfee LiveSafe, $89 value.</span>",
        "Description": "McAfee LiveSafe 12 Month Subscription",
        "ProductCode": "LSXP12M",
        "Skus": [
          "525-0036",
          "658-BCCO"
        ]
      },
      {
        "Name": "Non-Microsoft Application Software",
        "Description": "Additional Software",
        "ProductCode": "XPSW10",
        "Skus": [
          "658-BCUJ"
        ]
      },
      {
        "Name": "Support",
        "Description": "1 Year Ltd Hware Warranty: Mail-in; Customer supplies box, Dell pays shipping",
        "ProductCode": "MI1",
        "Skus": [
          "801-1390",
          "801-1423"
        ]
      },
      {
        "Name": "Operating System Recovery Options",
        "Description": "Operating System Recovery Media Not Included",
        "ProductCode": "NODBRM",
        "Skus": [
          "340-ACQQ"
        ]
      }
    ]
  },
  {
    "Description": "XPS 13 Non-Touch",
    "SubTotalAmount": "$799.99",
    "ImageUrl": "https://si.cdn.dell.com/images/global/configurator/chassis/xps-13-9350-nt-sr-ft-120x107.jpg",
    "Components": [
      {
        "Name": "Base",
        "Description": "XPS 13",
        "ProductCode": "XPS13",
        "Skus": [
          "210-AFLW"
        ]
      },
      {
        "Name": "Processor",
        "Description": "6th Generation Intel® Core i3-6100U (3M Cache, up to 2.3 GHz)",
        "ProductCode": "39VHTW",
        "Skus": [
          "338-BIUG"
        ]
      },
      {
        "Name": "Operating System",
        "Description": "Windows 10 Home, 64-bit, English",
        "ProductCode": "10H64E",
        "Skus": [
          "619-AHCQ"
        ]
      },
      {
        "Name": "Memory",
        "Description": "4GB LPDDR3-1866MHz",
        "ProductCode": "4GB",
        "Skus": [
          "370-ACJL"
        ]
      },
      {
        "Name": "Hard Drive",
        "Description": "128GB Solid State Drive",
        "ProductCode": "SSDR28",
        "Skus": [
          "400-AIPD"
        ]
      },
      {
        "Name": "Video Card",
        "Description": "Intel® HD Graphics 520",
        "ProductCode": "UMA",
        "Skus": [
          "490-BCLY"
        ]
      },
      {
        "Name": "Display",
        "Description": "13.3 FHD AG (1920 x 1080) InfinityEdge display",
        "ProductCode": "FHDNON",
        "Skus": [
          "391-BCHU"
        ]
      },
      {
        "Name": "Wireless",
        "Description": "DW1820A 2x2 802.11ac 2.4/5GHz + Bluetooth4.1",
        "ProductCode": "1820A",
        "Skus": [
          "555-BCRE"
        ]
      },
      {
        "Name": "Primary Battery",
        "Description": "56wHR, 4-Cell Battery",
        "ProductCode": "56WHR",
        "Skus": [
          "451-BBST"
        ]
      },
      {
        "Name": "Keyboard",
        "Description": "Backlit Keyboard, English",
        "ProductCode": "ENGKBD",
        "Skus": [
          "580-AECQ"
        ]
      },
      {
        "Name": "Driver",
        "Description": "DW 1820 Driver",
        "ProductCode": "DW1820",
        "Skus": [
          "555-BCQB"
        ]
      },
      {
        "Name": "Cable",
        "Description": "US Power Cord",
        "ProductCode": "PWRUS",
        "Skus": [
          "340-AAMU"
        ]
      },
      {
        "Name": "Placemat",
        "Description": "Win 10 Placemat",
        "ProductCode": "WN10PM",
        "Skus": [
          "340-ARJD"
        ]
      },
      {
        "Name": "Systems Management",
        "Description": "UMID Software",
        "ProductCode": "CSMB",
        "Skus": [
          "631-AAVK",
          "631-AAVN"
        ]
      },
      {
        "Name": "Retail Software",
        "Description": "Dell.com Order",
        "ProductCode": "NORTL",
        "Skus": [
          "332-0550"
        ]
      },
      {
        "Name": "Packaging Label",
        "Description": "Dell.com Order",
        "ProductCode": "NORTL",
        "Skus": [
          "332-1530"
        ]
      },
      {
        "Name": "Documentation/Disks",
        "Description": "Safety/Environment and Regulatory Guide (English/French Multi-language)",
        "ProductCode": "ENGMDC",
        "Skus": [
          "340-AGIK"
        ]
      },
      {
        "Name": "Packaging",
        "Description": "XPS 13 Shipping Material",
        "ProductCode": "SHMM",
        "Skus": [
          "340-AAPP",
          "340-ARJF"
        ]
      },
      {
        "Name": "Power Supply",
        "Description": "45 Watt AC Adaptor",
        "ProductCode": "45WAC",
        "Skus": [
          "450-ABEN"
        ]
      },
      {
        "Name": "FGA Module",
        "Description": "DINO1703_5154_DAO/US/CA/MX/BTO",
        "ProductCode": "FG0053",
        "Skus": [
          "998-BWVE"
        ]
      },
      {
        "Name": "Hard Drive Software",
        "Description": "No SSD SW Required",
        "ProductCode": "NOSSDSW",
        "Skus": [
          "817-BBBC"
        ]
      },
      {
        "Name": "Processor Label",
        "Description": "Intel® Core i3 Label",
        "ProductCode": "CI3SML",
        "Skus": [
          "389-BHGC"
        ]
      },
      {
        "Name": "Label",
        "Description": "No Reg Label",
        "ProductCode": "NONE",
        "Skus": [
          "817-BBBP"
        ]
      },
      {
        "Name": "Office 2016 - Word, Excel, Powerpoint & more",
        "Description": "Microsoft Office 30 Day Trial",
        "ProductCode": "OTRT13M",
        "Skus": [
          "658-BCSB"
        ]
      },
      {
        "Name": "Security Software  <span class=\"dellRecommended\">XPS PCs on Dell.com come protected with 1yr McAfee LiveSafe, $89 value.</span>",
        "Description": "McAfee LiveSafe 12 Month Subscription",
        "ProductCode": "LSXP12M",
        "Skus": [
          "525-0036",
          "658-BCCO"
        ]
      },
      {
        "Name": "Non-Microsoft Application Software",
        "Description": "Additional Software",
        "ProductCode": "XPSW10",
        "Skus": [
          "658-BCUJ"
        ]
      },
      {
        "Name": "Support",
        "Description": "1 Year Ltd Hware Warranty: Mail-in; Customer supplies box, Dell pays shipping",
        "ProductCode": "MI1",
        "Skus": [
          "801-1596",
          "801-1629"
        ]
      },
      {
        "Name": "PalmRest",
        "Description": "80 Key Palmrest",
        "ProductCode": "USPLR",
        "Skus": [
          "346-BBTS"
        ]
      },
      {
        "Name": "Operating System Recovery Options",
        "Description": "Operating System Recovery Media Not Included",
        "ProductCode": "NODBRM",
        "Skus": [
          "340-ACQQ"
        ]
      }
    ]
  },
  {
    "Description": "XPS 15 Non-Touch",
    "SubTotalAmount": "$999.99",
    "ImageUrl": "https://si.cdn.dell.com/images/global/configurator/chassis/xps-15-9550-t-gry-ft-120x107.jpg",
    "Components": [
      {
        "Name": "Base",
        "Description": "XPS 15",
        "ProductCode": "9550",
        "Skus": [
          "210-AFLV"
        ]
      },
      {
        "Name": "Processor",
        "Description": "6th Generation Intel Core i3-6100H (3M Cache, up to 2.7 GHz)",
        "ProductCode": "3MK7KR",
        "Skus": [
          "338-BITQ"
        ]
      },
      {
        "Name": "Operating System",
        "Description": "Windows 10 Home, 64-bit, English",
        "ProductCode": "10HHEE",
        "Skus": [
          "619-AHCY"
        ]
      },
      {
        "Name": "Memory",
        "Description": "8GB DDR4-2133MHz; up to 32GB (additional memory sold separately)",
        "ProductCode": "8GB",
        "Skus": [
          "370-ACLS"
        ]
      },
      {
        "Name": "Hard Drive",
        "Description": "500GB 7200RPM Hard Drive + 32GB Solid State Drive",
        "ProductCode": "500G32",
        "Skus": [
          "400-AJBU"
        ]
      },
      {
        "Name": "Video Card",
        "Description": "Intel® HD Graphics 530",
        "ProductCode": "UMA",
        "Skus": [
          "490-BCXH"
        ]
      },
      {
        "Name": "Display",
        "Description": "15.6\" FHD (1920 x 1080) InfinityEdge",
        "ProductCode": "FHD",
        "Skus": [
          "391-BCHR"
        ]
      },
      {
        "Name": "Wireless",
        "Description": "DW1820A 2x2 802.11ac 2.4/5GHz + Bluetooth 4.1",
        "ProductCode": "1820",
        "Skus": [
          "555-BCTQ"
        ]
      },
      {
        "Name": "Primary Battery",
        "Description": "Dell 56 WHr 3-Cell Lithium-Ion Battery",
        "ProductCode": "3C",
        "Skus": [
          "451-BBSI"
        ]
      },
      {
        "Name": "Keyboard",
        "Description": "Backlit Keyboard, US English",
        "ProductCode": "ENGKB",
        "Skus": [
          "580-AEKV"
        ]
      },
      {
        "Name": "Driver",
        "Description": "Dell Wireless 1820A Driver (Windows 10)",
        "ProductCode": "1820A",
        "Skus": [
          "340-ARXR"
        ]
      },
      {
        "Name": "Cable",
        "Description": "PowerCord 2.5A 1M C5 E3",
        "ProductCode": "PWREDAO",
        "Skus": [
          "340-AAMU"
        ]
      },
      {
        "Name": "Systems Management",
        "Description": "ME Disable",
        "ProductCode": "MEDIS",
        "Skus": [
          "631-AAVH",
          "658-BCXP"
        ]
      },
      {
        "Name": "Placemat",
        "Description": "Win 10 Placemat",
        "ProductCode": "WN10PM",
        "Skus": [
          "340-ATCO"
        ]
      },
      {
        "Name": "Retail Software",
        "Description": "Dell.com Order",
        "ProductCode": "NORTL",
        "Skus": [
          "332-1530"
        ]
      },
      {
        "Name": "Packaging Label",
        "Description": "Dell.com Order",
        "ProductCode": "NORTL",
        "Skus": [
          "332-1530"
        ]
      },
      {
        "Name": "Documentation/Disks",
        "Description": "Safety/Environment and Regulatory Guide (English/French Multi-language)",
        "ProductCode": "ENGMUI",
        "Skus": [
          "340-AGIK"
        ]
      },
      {
        "Name": "Packaging",
        "Description": "System Shipment Material, 5510",
        "ProductCode": "SHPMTL",
        "Skus": [
          "328-BCFB"
        ]
      },
      {
        "Name": "Power Supply",
        "Description": "130W AC Adapter",
        "ProductCode": "130AC",
        "Skus": [
          "450-ABBY"
        ]
      },
      {
        "Name": "FGA Module",
        "Description": "BERL1703_1626_DAO/US/CA/BTO",
        "ProductCode": "FG0141",
        "Skus": [
          "998-BXWE"
        ]
      },
      {
        "Name": "Processor Branding",
        "Description": "Intel® Core i3 Label",
        "ProductCode": "CI3SML",
        "Skus": [
          "389-BHGC"
        ]
      },
      {
        "Name": "Office 2016 - Word, Excel, Powerpoint & more",
        "Description": "Microsoft Office 30 Day Trial",
        "ProductCode": "OTRT13M",
        "Skus": [
          "658-BCSB"
        ]
      },
      {
        "Name": "Security Software  <span class=\"dellRecommended\">XPS PCs on Dell.com come protected with 1yr McAfee LiveSafe, $89 value.</span>",
        "Description": "McAfee LiveSafe 12 Month Subscription",
        "ProductCode": "LSXP12M",
        "Skus": [
          "525-0036",
          "658-BCCO"
        ]
      },
      {
        "Name": "Non-Microsoft Application Software",
        "Description": "Additional Software",
        "ProductCode": "XPSW10",
        "Skus": [
          "658-BCUJ"
        ]
      },
      {
        "Name": "Support",
        "Description": "1 Year Ltd Hware Warranty: Mail-in; Customer supplies box, Dell pays shipping",
        "ProductCode": "MI1",
        "Skus": [
          "801-0978",
          "801-1012"
        ]
      },
      {
        "Name": "PalmRest",
        "Description": "US Palmrest",
        "ProductCode": "USPRL",
        "Skus": [
          "346-BBTC"
        ]
      },
      {
        "Name": "Operating System Recovery Options",
        "Description": "Operating System Recovery Media Not Included",
        "ProductCode": "NOBDRM",
        "Skus": [
          "340-ACQQ"
        ]
      }
    ]
  },
  {
    "Description": "Alienware 13",
    "SubTotalAmount": "$949.99",
    "ImageUrl": "https://si.cdn.dell.com/images/global/configurator/chassis/alienware-13-tch-ft-120x107.jpg",
    "Components": [
      {
        "Name": "Alienware 13 R2",
        "Description": "Alienware 13 R2",
        "ProductCode": "CTOE13",
        "Skus": [
          "210-AFTQ"
        ]
      },
      {
        "Name": "Video Card",
        "Description": "NVIDIA®  GeForce® GTX 960M with 2GB GDDR5",
        "ProductCode": "GTX960",
        "Skus": [
          "490-BCNQ"
        ]
      },
      {
        "Name": "Processor",
        "Description": "Intel® Core i5-6200U (Dual-Core, 3MB Cache, up to 2.8GHz w/ Turbo Boost)",
        "ProductCode": "5HCRYV",
        "Skus": [
          "338-BIDW"
        ]
      },
      {
        "Name": "Operating System",
        "Description": "Windows 10 Home 64bit English",
        "ProductCode": "10H64E",
        "Skus": [
          "619-AHCQ"
        ]
      },
      {
        "Name": "Display",
        "Description": "13 inch HD (1366 x 768) TN-Panel Anti-Glare 200-nits Display",
        "ProductCode": "HD",
        "Skus": [
          "391-BCJY"
        ]
      },
      {
        "Name": "Memory",
        "Description": "4GB Dual Channel DDR3L at 1600MHz; up to 16GB (additional memory sold separately)",
        "ProductCode": "4G1D",
        "Skus": [
          "370-AABY"
        ]
      },
      {
        "Name": "Hard Drive",
        "Description": "500GB 5400RPM Hybrid (8GB Cache) SSD SATA 6Gb/s",
        "ProductCode": "500HYB",
        "Skus": [
          "400-AATU"
        ]
      },
      {
        "Name": "Wireless",
        "Description": "Killer 1535 802.11ac 2x2 WiFi and Bluetooth 4.1",
        "ProductCode": "N1535",
        "Skus": [
          "555-BCRM"
        ]
      },
      {
        "Name": "Battery",
        "Description": "4-cell Lithium Ion (62 Wh) Battery",
        "ProductCode": "4C62",
        "Skus": [
          "451-BBQK"
        ]
      },
      {
        "Name": "Operating System Recovery",
        "Description": "No OS Recovery Disk Included",
        "ProductCode": "NONE",
        "Skus": [
          "340-ACQQ"
        ]
      },
      {
        "Name": "Keyboard",
        "Description": "English Backlit Keyboard, powered by AlienFX",
        "ProductCode": "KBDENG",
        "Skus": [
          "580-ACTO"
        ]
      },
      {
        "Name": "Cable",
        "Description": "US Power Cord 110V",
        "ProductCode": "110VPWR",
        "Skus": [
          "450-AAUO"
        ]
      },
      {
        "Name": "Power Supply",
        "Description": "130 W A/C Adapter",
        "ProductCode": "130W",
        "Skus": [
          "450-ADFZ"
        ]
      },
      {
        "Name": "Retail Software",
        "Description": "Dell.com Order",
        "ProductCode": "NORTL",
        "Skus": [
          "332-1530"
        ]
      },
      {
        "Name": "Documentation/Disks",
        "Description": "Safety/Environment and Regulatory Guide (English/French)",
        "ProductCode": "ENGMUI",
        "Skus": [
          "340-AGUD"
        ]
      },
      {
        "Name": "Packing Label",
        "Description": "Dell.com Order",
        "ProductCode": "NORTL",
        "Skus": [
          "332-1530"
        ]
      },
      {
        "Name": "Non-Microsoft Application Software",
        "Description": "Additional Software",
        "ProductCode": "ALWW10",
        "Skus": [
          "658-BCUO"
        ]
      },
      {
        "Name": "Additional Settings",
        "Description": "Dropbox, Digital Delivery, 20GB for 1 Year Promotion",
        "ProductCode": "DRPBOX",
        "Skus": [
          "525-0016"
        ]
      },
      {
        "Name": "Shipping Material",
        "Description": "Shipping Material",
        "ProductCode": "SHPMT",
        "Skus": [
          "340-AAPP",
          "340-AMOW"
        ]
      },
      {
        "Name": "Shipping SKU's",
        "Description": "Shipping Material",
        "ProductCode": "USNONE",
        "Skus": [
          "332-1286"
        ]
      },
      {
        "Name": "Intel Processor Driver",
        "Description": "Intel Driver",
        "ProductCode": "SKYLAKE",
        "Skus": [
          "631-AATK"
        ]
      },
      {
        "Name": "Placemat",
        "Description": "Placemat",
        "ProductCode": "PLCMT",
        "Skus": [
          "340-ARYK"
        ]
      },
      {
        "Name": "Wireless Driver/Label",
        "Description": "Killer N1535 Wireless Driver",
        "ProductCode": "1535DR",
        "Skus": [
          "555-BCRN"
        ]
      },
      {
        "Name": "FGA Module",
        "Description": "No FGA",
        "ProductCode": "NOFGA",
        "Skus": [
          "817-BBBB"
        ]
      },
      {
        "Name": "Regulatory Label",
        "Description": "Regulatory Label",
        "ProductCode": "REGLBL",
        "Skus": [
          "389-BHMJ"
        ]
      },
      {
        "Name": "Microsoft Office Productivity Software  Word, Excel, Powerpoint & more",
        "Description": "Microsoft Office 30 Day Trial",
        "ProductCode": "OTRT13",
        "Skus": [
          "658-BCSC"
        ]
      },
      {
        "Name": "Security Software",
        "Description": "No Anti-virus Requested",
        "ProductCode": "NOAV",
        "Skus": [
          "817-BBBP"
        ]
      },
      {
        "Name": "Support  <span class=\"dellRecommended\">(Limited time: Get 4 years for the Price of 3)</span>",
        "Description": "1 Year Hardware Service with Onsite/In-Home Service After Remote Diagnosis",
        "ProductCode": "NBD1",
        "Skus": [
          "801-2391",
          "801-2438"
        ]
      },
      {
        "Name": "Processor Label",
        "Description": "Intel® Core i5 Label",
        "ProductCode": "CI5SML",
        "Skus": [
          "389-BHIB"
        ]
      }
    ]
  },
  {
    "Description": "Alienware 15",
    "SubTotalAmount": "$1,199.99",
    "ImageUrl": "https://si.cdn.dell.com/images/global/configurator/chassis/alienware-15-nn-tch-ft-120.jpg",
    "Components": [
      {
        "Name": "Alienware 15 R2",
        "Description": "Alienware 15 MLK, CTO",
        "ProductCode": "CTOE15",
        "Skus": [
          "210-AFTR"
        ]
      },
      {
        "Name": "Video Card",
        "Description": "NVIDIA® GeForce® GTX 965M with 2GB GDDR5",
        "ProductCode": "GTX965",
        "Skus": [
          "490-BCLI"
        ]
      },
      {
        "Name": "Processor",
        "Description": "Intel® Core i5-6300HQ (Quad-Core, 6MB Cache, up to 3.2GHz w/ Turbo Boost)",
        "ProductCode": "552V8M",
        "Skus": [
          "338-BIGB"
        ]
      },
      {
        "Name": "Operating System",
        "Description": "Windows 10 Home 64bit English",
        "ProductCode": "10HHEE",
        "Skus": [
          "619-AHCY"
        ]
      },
      {
        "Name": "Display",
        "Description": "15.6 inch FHD (1920 x 1080) IPS Anti-Glare 220-nits Display",
        "ProductCode": "FHD",
        "Skus": [
          "391-BCMU"
        ]
      },
      {
        "Name": "Memory",
        "Description": "8GB Dual Channel DDR4 at 2133MHz; up to 32GB (additional memory sold separately)",
        "ProductCode": "8G2D",
        "Skus": [
          "370-ACLS"
        ]
      },
      {
        "Name": "Hard Drive",
        "Description": "1TB 7200RPM SATA 6Gb/s",
        "ProductCode": "1TB7200",
        "Skus": [
          "400-AHHF"
        ]
      },
      {
        "Name": "Wireless",
        "Description": "Killer 1535 802.11ac 2x2 WiFi and Bluetooth 4.1",
        "ProductCode": "N1535",
        "Skus": [
          "555-BCRM"
        ]
      },
      {
        "Name": "Battery",
        "Description": "8-cell Lithium Ion (92 Wh) Battery",
        "ProductCode": "8C",
        "Skus": [
          "451-BBMY"
        ]
      },
      {
        "Name": "Operating System Recovery",
        "Description": "No OS Recovery Disc Included",
        "ProductCode": "NONE",
        "Skus": [
          "340-ACQQ"
        ]
      },
      {
        "Name": "Keyboard",
        "Description": "English Backlit Keyboard, powered by AlienFX",
        "ProductCode": "KBDENG",
        "Skus": [
          "580-ACTO",
          "583-BCQG"
        ]
      },
      {
        "Name": "Cable",
        "Description": "US Power Cord 110V",
        "ProductCode": "110VPWR",
        "Skus": [
          "450-AAUO"
        ]
      },
      {
        "Name": "AC Adapter",
        "Description": "Alienware 180W AC Adapter",
        "ProductCode": "180W3P",
        "Skus": [
          "450-AAGU"
        ]
      },
      {
        "Name": "Retail Software",
        "Description": "Dell.com Order",
        "ProductCode": "NORTL",
        "Skus": [
          "332-1530"
        ]
      },
      {
        "Name": "Documentation/Disks",
        "Description": "Safety/Environment and Regulatory Guide (English/French)",
        "ProductCode": "ENGMUI",
        "Skus": [
          "340-AGUD"
        ]
      },
      {
        "Name": "Packing Label",
        "Description": "Dell.com Order",
        "ProductCode": "NORTL",
        "Skus": [
          "332-1530"
        ]
      },
      {
        "Name": "Non-Microsoft Application Software",
        "Description": "Additional Software",
        "ProductCode": "ALWW10",
        "Skus": [
          "658-BCUO"
        ]
      },
      {
        "Name": "Additional Settings",
        "Description": "Dropbox, Digital Delivery, 20GB for 1 Year Promotion",
        "ProductCode": "DRPBOX",
        "Skus": [
          "525-0016"
        ]
      },
      {
        "Name": "Packaging",
        "Description": "Shipping Material",
        "ProductCode": "SHPMT",
        "Skus": [
          "340-AAPP",
          "340-AUNR"
        ]
      },
      {
        "Name": "Shipping SKU's",
        "Description": "Shipping Material",
        "ProductCode": "USNONE",
        "Skus": [
          "332-1286"
        ]
      },
      {
        "Name": "Intel Processor Driver",
        "Description": "Intel Driver",
        "ProductCode": "SKYLAKE",
        "Skus": [
          "631-AATS"
        ]
      },
      {
        "Name": "Placemat",
        "Description": "Placemat",
        "ProductCode": "PLCMT",
        "Skus": [
          "340-ASNB"
        ]
      },
      {
        "Name": "Driver",
        "Description": "Killer N1535 Wireless Driver",
        "ProductCode": "1535DR",
        "Skus": [
          "555-BCRW"
        ]
      },
      {
        "Name": "FGA Module",
        "Description": "No FGA",
        "ProductCode": "NOFGA",
        "Skus": [
          "817-BBBB"
        ]
      },
      {
        "Name": "Label",
        "Description": "Regulatory Label",
        "ProductCode": "REGLBL",
        "Skus": [
          "389-BHOX"
        ]
      },
      {
        "Name": "Microsoft Office Productivity Software  Word, Excel, Powerpoint & more",
        "Description": "Microsoft Office 30 Day Trial",
        "ProductCode": "OTRT13",
        "Skus": [
          "658-BCSC"
        ]
      },
      {
        "Name": "Security Software",
        "Description": "No Anti-virus Requested",
        "ProductCode": "NOAV",
        "Skus": [
          "817-BBBP"
        ]
      },
      {
        "Name": "Support  <span class=\"dellRecommended\">(Limited time: Get 4 years for the Price of 3)</span>",
        "Description": "1 Year Limited Hardware Warranty with Onsite Service after Remote Diagnosis",
        "ProductCode": "NBD1",
        "Skus": [
          "801-2185",
          "801-2232"
        ]
      },
      {
        "Name": "Processor Label",
        "Description": "Intel® Core i5 Label",
        "ProductCode": "CI5SML",
        "Skus": [
          "389-BHIB"
        ]
      }
    ]
  },
  {
    "Description": "Alienware 17",
    "SubTotalAmount": "$1,499.99",
    "ImageUrl": "https://si.cdn.dell.com/images/global/configurator/chassis/alien-17-r2-nt-ft-120x107.jpg",
    "Components": [
      {
        "Name": "Alienware 17 R3",
        "Description": "Alienware 17 R3",
        "ProductCode": "CTOE17",
        "Skus": [
          "210-AFFV"
        ]
      },
      {
        "Name": "Video Card",
        "Description": "NVIDIA® GeForce® GTX 970M with 3GB GDDR5",
        "ProductCode": "GTX970",
        "Skus": [
          "490-BCLG"
        ]
      },
      {
        "Name": "Processor",
        "Description": "Intel® Core i7-6700HQ (Quad-Core, 6MB Cache, up to 3.5GHz w/ Turbo Boost)",
        "ProductCode": "7XFG7N",
        "Skus": [
          "338-BHVM"
        ]
      },
      {
        "Name": "Operating System",
        "Description": "Windows 10 Home 64bit English",
        "ProductCode": "10HHEE",
        "Skus": [
          "619-AHCY"
        ]
      },
      {
        "Name": "Display",
        "Description": "17.3 inch FHD (1920 x 1080) IPS-Panel Anti-Glare 300-nits Display",
        "ProductCode": "FHD",
        "Skus": [
          "391-BCMX"
        ]
      },
      {
        "Name": "Memory",
        "Description": "8GB Dual Channel DDR4 at 2133MHz; up to 32GB (additional memory sold separately)",
        "ProductCode": "8G2D",
        "Skus": [
          "370-ACLS"
        ]
      },
      {
        "Name": "Hard Drive",
        "Description": "1TB 7200RPM SATA 6Gb/s",
        "ProductCode": "1TB7200",
        "Skus": [
          "400-AHHF"
        ]
      },
      {
        "Name": "Wireless",
        "Description": "Killer 1535 802.11ac 2x2 WiFi and Bluetooth 4.1",
        "ProductCode": "N1535",
        "Skus": [
          "555-BCRM"
        ]
      },
      {
        "Name": "Battery",
        "Description": "8-cell Lithium Ion (92 Wh) Battery",
        "ProductCode": "8C",
        "Skus": [
          "451-BBMW"
        ]
      },
      {
        "Name": "Operating System Recovery",
        "Description": "No OS Recovery Disc Included",
        "ProductCode": "NONE",
        "Skus": [
          "340-ACQQ"
        ]
      },
      {
        "Name": "Keyboard",
        "Description": "English Backlit Keyboard, powered by AlienFX",
        "ProductCode": "KBDENG",
        "Skus": [
          "580-ACWN",
          "583-BCQG"
        ]
      },
      {
        "Name": "AC Adapter",
        "Description": "Alienware 180W AC Adapter",
        "ProductCode": "180W3P",
        "Skus": [
          "450-AAGU"
        ]
      },
      {
        "Name": "Cable",
        "Description": "US Power Cord 110V",
        "ProductCode": "110VPWR",
        "Skus": [
          "450-AAUO"
        ]
      },
      {
        "Name": "Retail Software",
        "Description": "Dell.com Order",
        "ProductCode": "NORTL",
        "Skus": [
          "332-1530"
        ]
      },
      {
        "Name": "Documentation/Disks",
        "Description": "Safety/Environment and Regulatory Guide (English/French)",
        "ProductCode": "ENGMUI",
        "Skus": [
          "340-AGUD"
        ]
      },
      {
        "Name": "Packing Label",
        "Description": "Dell.com Order",
        "ProductCode": "NORTL",
        "Skus": [
          "332-1530"
        ]
      },
      {
        "Name": "Non-Microsoft Application Software",
        "Description": "Additional Software",
        "ProductCode": "ALWW10",
        "Skus": [
          "658-BCUO"
        ]
      },
      {
        "Name": "Additional Settings",
        "Description": "Dropbox, Digital Delivery, 20GB for 1 Year Promotion",
        "ProductCode": "DRPBOX",
        "Skus": [
          "525-0016"
        ]
      },
      {
        "Name": "Packaging",
        "Description": "Shipping Material",
        "ProductCode": "SHPMT",
        "Skus": [
          "340-AAPP",
          "340-ATTO"
        ]
      },
      {
        "Name": "Shipping SKU's",
        "Description": "Shipping Material",
        "ProductCode": "USNONE",
        "Skus": [
          "332-1286"
        ]
      },
      {
        "Name": "Intel Processor Driver",
        "Description": "Intel Driver",
        "ProductCode": "SKYLAKE",
        "Skus": [
          "631-AATV"
        ]
      },
      {
        "Name": "Placemat",
        "Description": "Placemat",
        "ProductCode": "PLCMT",
        "Skus": [
          "340-ASNH"
        ]
      },
      {
        "Name": "Driver",
        "Description": "Killer N1535 Wireless Driver",
        "ProductCode": "1535DR",
        "Skus": [
          "555-BCRW"
        ]
      },
      {
        "Name": "FGA Module",
        "Description": "No FGA",
        "ProductCode": "NOFGA",
        "Skus": [
          "817-BBBB"
        ]
      },
      {
        "Name": "Label",
        "Description": "Regulatory Label",
        "ProductCode": "REGLBL",
        "Skus": [
          "389-BHPD"
        ]
      },
      {
        "Name": "Microsoft Office Productivity Software  Word, Excel, Powerpoint & more",
        "Description": "Microsoft Office 30 Day Trial",
        "ProductCode": "OTRT13",
        "Skus": [
          "658-BCSC"
        ]
      },
      {
        "Name": "Security Software",
        "Description": "No Anti-virus Requested",
        "ProductCode": "NOAV",
        "Skus": [
          "817-BBBP"
        ]
      },
      {
        "Name": "Support  <span class=\"dellRecommended\">(Limited time: Get 4 years for the Price of 3)</span>",
        "Description": "1 Year Limited Hardware Warranty with Onsite Service after Remote Diagnosis",
        "ProductCode": "NBD1",
        "Skus": [
          "801-2185",
          "801-2232"
        ]
      },
      {
        "Name": "Processor Label",
        "Description": "Intel® Core i7 Label",
        "ProductCode": "CI7SML",
        "Skus": [
          "389-BHGE"
        ]
      }
    ]
  },
  {
    "Description": "Dell Chromebook 11 Non-Touch",
    "SubTotalAmount": "$312.85",
    "ImageUrl": "https://si.cdn.dell.com/images/global/configurator/chassis/chromebook11-front-120x107.jpg",
    "Components": [
      {
        "Name": "UPC Labels",
        "Description": "UPC Label UPC884116176527",
        "ProductCode": "UPC527",
        "Skus": [
          "389-BFZW"
        ]
      },
      {
        "Name": "Base Options",
        "Description": "Chrome OS, Intel® Celeron-N2840 Proc, 2GB RAM DDR3L Memory, 16GB eMMC SSD Storage Wifi",
        "ProductCode": "2GBN",
        "Skus": [
          "329-BCLN"
        ]
      },
      {
        "Name": "Dell Chromebook 11",
        "Description": "Dell Chromebook 11",
        "ProductCode": "C3120X",
        "Skus": [
          "210-ADWO"
        ]
      },
      {
        "Name": "Wireless",
        "Description": "Intel® Dual Band Wireless-AC 7260 802.11AC Wi-Fi + BT 4.0 LE Wireless Card",
        "ProductCode": "7260AC",
        "Skus": [
          "555-BBRS"
        ]
      },
      {
        "Name": "Support",
        "Description": "1 Year Ltd Hware Warranty: Mail-in; Customer supplies box, Dell pays shipping",
        "ProductCode": "MI1",
        "Skus": [
          "801-5292",
          "801-5338"
        ]
      },
      {
        "Name": "LCD",
        "Description": "11.6 Anti-Glare HD Non-Touch LCD",
        "ProductCode": "NTOUCH",
        "Skus": [
          "391-BBYI"
        ]
      },
      {
        "Name": "Primary Battery",
        "Description": "3 cell Battery (43 WHr)",
        "ProductCode": "43WHR",
        "Skus": [
          "451-BBNH"
        ]
      },
      {
        "Name": "Color Choice",
        "Description": "Non- Touch LCD Back Cover ( Black )",
        "ProductCode": "NTBLK",
        "Skus": [
          "320-BBND"
        ]
      },
      {
        "Name": "FGA Module",
        "Description": "Chrome_11_2GB_001/US/BTS",
        "ProductCode": "FG0006",
        "Skus": [
          "998-BLXX"
        ]
      },
      {
        "Name": "Keyboard",
        "Description": "Internal English Chrome Keyboard - Black",
        "ProductCode": "BLKUS",
        "Skus": [
          "580-AEOO"
        ]
      },
      {
        "Name": "Placemat",
        "Description": "Placemat",
        "ProductCode": "PLCMAT",
        "Skus": [
          "340-ANMZ"
        ]
      },
      {
        "Name": "Packaging Label",
        "Description": "Non-Retail Order",
        "ProductCode": "NORTL",
        "Skus": [
          "332-1530"
        ]
      },
      {
        "Name": "Packaging",
        "Description": "Ship Material - Non Retail",
        "ProductCode": "SHIP",
        "Skus": [
          "328-BCBH",
          "340-ABFC"
        ]
      },
      {
        "Name": "Processor Branding",
        "Description": "Intel(R) Celeron(R) CPU Label",
        "ProductCode": "INCLBK",
        "Skus": [
          "340-AQVB"
        ]
      },
      {
        "Name": "Power Supply",
        "Description": "65W AC Adapter, 3-pin",
        "ProductCode": "65W",
        "Skus": [
          "492-BBDD",
          "537-BBBL"
        ]
      },
      {
        "Name": "Retail Software",
        "Description": "Non-Retail Order",
        "ProductCode": "NORTL",
        "Skus": [
          "332-0550"
        ]
      },
      {
        "Name": "Documentation/Disks",
        "Description": "System Documentation, Multi Language",
        "ProductCode": "DOCENG",
        "Skus": [
          "340-AGYZ"
        ]
      },
      {
        "Name": "Labels",
        "Description": "No Labels",
        "ProductCode": "NONE",
        "Skus": [
          "817-BBBC"
        ]
      }
    ]
  },
  {
    "Description": "Dell Chromebook 13 Non-Touch",
    "SubTotalAmount": "$593.86",
    "ImageUrl": "https://si.cdn.dell.com/images/global/configurator/chassis/nb-cb-13-7310-gry-ft-120x107.jpg",
    "Components": [
      {
        "Name": "UPC Label",
        "Description": "No UPC Label",
        "ProductCode": "NOLBL",
        "Skus": [
          "389-BCGW"
        ]
      },
      {
        "Name": "Base Options",
        "Description": "Chrome OS, Intel® Celeron 3215U, 4GB",
        "ProductCode": "15CEL4",
        "Skus": [
          "321-BBZZ"
        ]
      },
      {
        "Name": "Chromebook 13",
        "Description": "Dell Chromebook 7310",
        "ProductCode": "MERBTX",
        "Skus": [
          "210-AESN"
        ]
      },
      {
        "Name": "Wireless",
        "Description": "Intel® Dual Band Wireless-AC 7260 802.11AC Wi-Fi + BT 4.0 LE Wireless Card",
        "ProductCode": "IW7260",
        "Skus": [
          "555-BBRS"
        ]
      },
      {
        "Name": "Support",
        "Description": "1 Year Ltd Hware Warranty: Mail-in; Customer supplies box, Dell pays shipping",
        "ProductCode": "MI1",
        "Skus": [
          "804-1786",
          "804-1787"
        ]
      },
      {
        "Name": "Hard Drive",
        "Description": "16GB Solid State Drive",
        "ProductCode": "16GBSSD",
        "Skus": [
          "400-AICY"
        ]
      },
      {
        "Name": "LCD",
        "Description": "13.3\" FHD Non-Touch LCD",
        "ProductCode": "NTOUCH",
        "Skus": [
          "391-BCGK"
        ]
      },
      {
        "Name": "Primary Battery",
        "Description": "67Whr 6 Cell Battery",
        "ProductCode": "6CBATT",
        "Skus": [
          "451-BBOT"
        ]
      },
      {
        "Name": "Color Choice",
        "Description": "Non-Touch LCD Cover - Black",
        "ProductCode": "BLKNTCH",
        "Skus": [
          "320-BBRD"
        ]
      },
      {
        "Name": "FGA Module",
        "Description": "Meridian_13_1H_102/US/BTO",
        "ProductCode": "FG0013",
        "Skus": [
          "998-BWJZ"
        ]
      },
      {
        "Name": "Keyboard",
        "Description": "Internal Keyboard. Layout 74 keys US-English. For US, Canada.",
        "ProductCode": "KBDUS",
        "Skus": [
          "340-AQGC",
          "580-ADXC"
        ]
      },
      {
        "Name": "Placemat",
        "Description": "Placemat",
        "ProductCode": "PLCMAT",
        "Skus": [
          "340-AQKG"
        ]
      },
      {
        "Name": "Packaging Label",
        "Description": "Non-Retail Order",
        "ProductCode": "NORTL",
        "Skus": [
          "332-1530"
        ]
      },
      {
        "Name": "Packaging",
        "Description": "Ship Material - Non Retail",
        "ProductCode": "SHIP",
        "Skus": [
          "328-BCDG",
          "340-ABSE",
          "640-BBJB"
        ]
      },
      {
        "Name": "Processor Branding",
        "Description": "Intel(R) Celeron(R) CPU Label",
        "ProductCode": "CELLBL",
        "Skus": [
          "340-AQVB"
        ]
      },
      {
        "Name": "Power Supply",
        "Description": "65 Watt AC Adaptor",
        "ProductCode": "65WAA",
        "Skus": [
          "450-AAHV",
          "450-ADTR"
        ]
      },
      {
        "Name": "Retail Software",
        "Description": "Dell.com Order",
        "ProductCode": "NORTL",
        "Skus": [
          "332-0550"
        ]
      },
      {
        "Name": "Documentation/Disks",
        "Description": "Safety/Environment and Regulatory Guide (English/French/Dutch)",
        "ProductCode": "DOC",
        "Skus": [
          "340-AGIK"
        ]
      },
      {
        "Name": "E-Star",
        "Description": "E-star 6.0 Enabled",
        "ProductCode": "ESTAR6",
        "Skus": [
          "387-BBLO"
        ]
      }
    ]
  },
  {
    "Description": "New Latitude 14 7000 Series",
    "SubTotalAmount": "$1,541.43",
    "ImageUrl": "https://si.cdn.dell.com/images/global/configurator/chassis/latit-14-e7470-t-bk-ft-wnd-120x107.jpg",
    "Components": [
      {
        "Name": "Dell Latitude E7470",
        "Description": "Dell Latitude E7470, CTO",
        "ProductCode": "E7470T",
        "Skus": [
          "210-AETM"
        ]
      },
      {
        "Name": "Processor",
        "Description": "Intel® Core i3-6100U (Dual Core, 2.3GHz, 3M cache, 15W)",
        "ProductCode": "I36100",
        "Skus": [
          "379-BCFV"
        ]
      },
      {
        "Name": "Operating System",
        "Description": "Windows 7 Professional English, French, Spanish 64bit (Includes Windows 10 Pro License)",
        "ProductCode": "DW10P7M",
        "Skus": [
          "619-AIKP"
        ]
      },
      {
        "Name": "Processor Information",
        "Description": "I3-6100,U,T,E7470",
        "ProductCode": "UI3",
        "Skus": [
          "338-BHPQ"
        ]
      },
      {
        "Name": "Office Productivity Software",
        "Description": "Microsoft Office 30 Day Trial",
        "ProductCode": "16MUI",
        "Skus": [
          "658-BCSB"
        ]
      },
      {
        "Name": "Dell Data Protection Solutions",
        "Description": "No DDPE Encryption Software",
        "ProductCode": "NODDPE",
        "Skus": [
          "954-3465"
        ]
      },
      {
        "Name": "Dell Threat Protection and Endpoint Security Suite",
        "Description": "No Dell Data Protection | Endpoint Security Suite Software",
        "ProductCode": "NODDP",
        "Skus": [
          "634-BENZ"
        ]
      },
      {
        "Name": "LCD",
        "Description": "14.0 HD (1366 x 768) Anti Glare LCD, Camera and Mic, WLAN/WWAN Capable",
        "ProductCode": "LNCHWW",
        "Skus": [
          "320-BBRB",
          "391-BCFM"
        ]
      },
      {
        "Name": "Memory",
        "Description": "4GB (1x4GB) 2133MHz DDR4 Memory",
        "ProductCode": "4G1D4",
        "Skus": [
          "370-ACDC"
        ]
      },
      {
        "Name": "Hard Drive",
        "Description": "M.2 128GB SATA Class 20 Solid State Drive",
        "ProductCode": "128SDS",
        "Skus": [
          "400-AHHX"
        ]
      },
      {
        "Name": "Intel Responsiveness Technologies",
        "Description": "Intel Rapid Storage Technology",
        "ProductCode": "IRST",
        "Skus": [
          "409-BBIV"
        ]
      },
      {
        "Name": "Systems Management",
        "Description": "No Out-of-Band Systems Management",
        "ProductCode": "NOVPRO",
        "Skus": [
          "631-AARE"
        ]
      },
      {
        "Name": "Wireless",
        "Description": "Intel® Dual-Band Wireless-AC 8260 Wi-Fi + BT 4.1 Wireless Card (2x2)",
        "ProductCode": "8260AC",
        "Skus": [
          "555-BCMT"
        ]
      },
      {
        "Name": "Driver",
        "Description": "Intel® Dual-Band Wireless-AC 8260 Wi-Fi + BT 4.1 Wireless Driver (2x2)",
        "ProductCode": "8260",
        "Skus": [
          "555-BCUZ"
        ]
      },
      {
        "Name": "Processor Branding",
        "Description": "LABEL,INTEL,CI3,6,SML",
        "ProductCode": "CI3SML",
        "Skus": [
          "389-BHGC"
        ]
      },
      {
        "Name": "Mobile Broadband",
        "Description": "No Mobile Broadband Card",
        "ProductCode": "NOWW",
        "Skus": [
          "362-BBBB"
        ]
      },
      {
        "Name": "Keyboard",
        "Description": "82 Key Internal English Keyboard",
        "ProductCode": "ENG",
        "Skus": [
          "583-BCUP"
        ]
      },
      {
        "Name": "PalmRest",
        "Description": "No Smart Card or Fingerprint Reader for 82 Key, Single Point Keyboard",
        "ProductCode": "NO2S",
        "Skus": [
          "346-BBQY"
        ]
      },
      {
        "Name": "AC Adapter",
        "Description": "65 Watt AC Adaptor",
        "ProductCode": "65W3P",
        "Skus": [
          "450-AAYT"
        ]
      },
      {
        "Name": "Cable",
        "Description": "Power Cord, US",
        "ProductCode": "PWRUS",
        "Skus": [
          "450-AAEJ"
        ]
      },
      {
        "Name": "Primary Battery",
        "Description": "Primary 3-cell 37W/HR Battery with ExpressCharge",
        "ProductCode": "3C",
        "Skus": [
          "451-BBPL"
        ]
      },
      {
        "Name": "Docking Solutions",
        "Description": "No Docking Station",
        "ProductCode": "NONE",
        "Skus": [
          "452-BBSE"
        ]
      },
      {
        "Name": "Carrying Cases",
        "Description": "No Carrying Case",
        "ProductCode": "NONE",
        "Skus": [
          "460-BBEX"
        ]
      },
      {
        "Name": "Operating System Recovery Options",
        "Description": "Windows 10 OS Recovery 64bit - DVD",
        "ProductCode": "M10PD6M",
        "Skus": [
          "620-AAYW"
        ]
      },
      {
        "Name": "Documentation/Disks",
        "Description": "Safety/Environment and Regulatory Guide (English/French Multi-language)",
        "ProductCode": "EFDOC",
        "Skus": [
          "340-AGIK"
        ]
      },
      {
        "Name": "Placemat",
        "Description": "Quick Reference Guide",
        "ProductCode": "PLCMT",
        "Skus": [
          "340-AUSC"
        ]
      },
      {
        "Name": "Diagnostic CD / Diskette",
        "Description": "No Resource DVD",
        "ProductCode": "NRDVD",
        "Skus": [
          "430-XXYG"
        ]
      },
      {
        "Name": "TAA",
        "Description": "No TAA",
        "ProductCode": "NOTAA",
        "Skus": [
          "340-ACQQ"
        ]
      },
      {
        "Name": "E-Star",
        "Description": "ESTAR6.1",
        "ProductCode": "ESTAR",
        "Skus": [
          "387-BBKE"
        ]
      },
      {
        "Name": "Labels",
        "Description": "Intel® Ultrabook Logo",
        "ProductCode": "UTRABK",
        "Skus": [
          "389-BCVY"
        ]
      },
      {
        "Name": "Label",
        "Description": "Regulatory Label Included",
        "ProductCode": "REG",
        "Skus": [
          "389-BEYY"
        ]
      },
      {
        "Name": "UPC Label",
        "Description": "No UPC Label",
        "ProductCode": "NOLBL",
        "Skus": [
          "389-BCGW"
        ]
      },
      {
        "Name": "Canada Ship Options",
        "Description": "US No Canada Ship Charge",
        "ProductCode": "USNONE",
        "Skus": [
          "332-1286"
        ]
      },
      {
        "Name": "Packaging",
        "Description": "MIX SHIP Config (DAO)",
        "ProductCode": "SHPMX",
        "Skus": [
          "340-AAPP",
          "340-AQIR"
        ]
      },
      {
        "Name": "Transportation from ODM to region",
        "Description": "Standard Shipment",
        "ProductCode": "STND",
        "Skus": [
          "800-BBGT"
        ]
      },
      {
        "Name": "Configuration Details",
        "Description": "Flex 1",
        "ProductCode": "FLEX1",
        "Skus": [
          "379-BCHD"
        ]
      },
      {
        "Name": "FGA Module",
        "Description": "Dell Latitude E7470, CTO/BTO",
        "ProductCode": "FG0040",
        "Skus": [
          "998-BTNU"
        ]
      },
      {
        "Name": "Non-Microsoft Application Software",
        "Description": "OS Recovery",
        "ProductCode": "WIN7",
        "Skus": [
          "340-ADFZ",
          "340-AUSB",
          "422-0007",
          "422-0052",
          "637-AAAS",
          "640-BBDF",
          "640-BBEV",
          "640-BBLW",
          "658-BBMR",
          "658-BBNF"
        ]
      },
      {
        "Name": "Service",
        "Description": "3 Year Hardware Service with In-Home/Onsite Service After Remote Diagnosis",
        "ProductCode": "NBD3",
        "Skus": [
          "804-2237",
          "804-2238"
        ]
      },
      {
        "Name": "Mouse",
        "Description": "No Mouse Selected",
        "ProductCode": "NOMSE",
        "Skus": [
          "570-AADK"
        ]
      },
      {
        "Name": "Accessories",
        "Description": "Dell Docking Spacer for E7x40",
        "ProductCode": "SPACER",
        "Skus": [
          "452-BBDB"
        ]
      }
    ]
  },
  {
    "Description": "New Latitude 15 5000 Series (E5570)",
    "SubTotalAmount": "$1,212.86",
    "ImageUrl": "https://si.cdn.dell.com/images/global/configurator/chassis/lat-15-e5570-nt-bk-ft-120x107.jpg",
    "Components": [
      {
        "Name": "Dell Latitude E5570",
        "Description": "Dell Latitude E5570, BTX",
        "ProductCode": "5570X",
        "Skus": [
          "210-AENT"
        ]
      },
      {
        "Name": "Processor",
        "Description": "Intel® Core i5-6200U (Dual Core, 2.3GHz, 3M cache, 15W)",
        "ProductCode": "I56200",
        "Skus": [
          "379-BCFW"
        ]
      },
      {
        "Name": "Graphics",
        "Description": "Intel® HD Graphics 520, for I5-6200U (non-Vpro)",
        "ProductCode": "UUI5",
        "Skus": [
          "338-BHLM"
        ]
      },
      {
        "Name": "Processor Branding",
        "Description": "LABEL,INTELL,CI5,6,SML",
        "ProductCode": "CI5SML",
        "Skus": [
          "389-BHIB"
        ]
      },
      {
        "Name": "Operating System",
        "Description": "Windows 7 Professional English, French, Spanish 64bit (Includes Windows 10 Pro License)",
        "ProductCode": "DW10P7M",
        "Skus": [
          "619-AIKP"
        ]
      },
      {
        "Name": "Microsoft Application Software",
        "Description": "Microsoft Office 30 Day Trial",
        "ProductCode": "16MUI",
        "Skus": [
          "658-BCSB"
        ]
      },
      {
        "Name": "Non-Microsoft Application Software",
        "Description": "OS Recovery",
        "ProductCode": "WIN7",
        "Skus": [
          "340-ADFZ",
          "340-AQCS",
          "422-0007",
          "422-0052",
          "637-AAAS",
          "640-BBDF",
          "640-BBEV",
          "640-BBLW",
          "658-BBMR",
          "658-BBNF"
        ]
      },
      {
        "Name": "Dell Data Protection Solutions",
        "Description": "DDPE Personal Edition License + ProSupport for Software 1 Year",
        "ProductCode": "PDPE1Y",
        "Skus": [
          "421-9984",
          "954-3455"
        ]
      },
      {
        "Name": "Dell Threat Protection and Endpoint Security Suite",
        "Description": "No Dell Data Protection | Endpoint Security Suite Software",
        "ProductCode": "NODDP",
        "Skus": [
          "634-BENZ"
        ]
      },
      {
        "Name": "LCD",
        "Description": "15.6\" HD (1366 x 768) Anti Glare LCD, Camera and Microphone, WWAN Capable",
        "ProductCode": "LNCHWW",
        "Skus": [
          "320-BBPU",
          "391-BCDK"
        ]
      },
      {
        "Name": "Memory",
        "Description": "4GB (1x4GB) 2133MHz DDR4 Memory",
        "ProductCode": "4G1D4",
        "Skus": [
          "370-ACDC"
        ]
      },
      {
        "Name": "Hard Drive",
        "Description": "500GB 7mm 7.2krpm HD",
        "ProductCode": "500GB",
        "Skus": [
          "400-AIIU",
          "575-BBFI"
        ]
      },
      {
        "Name": "Intel Rapid Start and Smart Connect",
        "Description": "Intel Rapid Storage Technology",
        "ProductCode": "IRST",
        "Skus": [
          "409-BBFX"
        ]
      },
      {
        "Name": "Wireless",
        "Description": "Intel® Dual-Band Wireless-AC 8260 Wi-Fi + BT 4.1 Wireless Card (2x2)",
        "ProductCode": "8260AC",
        "Skus": [
          "555-BCMT"
        ]
      },
      {
        "Name": "Driver",
        "Description": "Intel® Dual-Band Wireless-AC 8260 Wi-Fi + BT 4.1 Wireless Driver (2x2)",
        "ProductCode": "W8260",
        "Skus": [
          "555-BCNB"
        ]
      },
      {
        "Name": "Mobile Broadband",
        "Description": "No Wireless WAN Card",
        "ProductCode": "NOWW",
        "Skus": [
          "362-BBBB"
        ]
      },
      {
        "Name": "Keyboard",
        "Description": "Internal Dual Pointing Backlit Keyboard, English",
        "ProductCode": "KIBDENG",
        "Skus": [
          "580-ACLF",
          "583-BCTJ"
        ]
      },
      {
        "Name": "PalmRest",
        "Description": "Dual Pointing palmrest without Smart Card",
        "ProductCode": "DPRNSC",
        "Skus": [
          "346-BBRS"
        ]
      },
      {
        "Name": "Adapter",
        "Description": "65 Watt AC Adaptor",
        "ProductCode": "65W3P",
        "Skus": [
          "450-AAYT"
        ]
      },
      {
        "Name": "Cable",
        "Description": "Power Cord, US",
        "ProductCode": "PWRUS",
        "Skus": [
          "450-AAEJ"
        ]
      },
      {
        "Name": "Dell Battery",
        "Description": "Primary 4-cell 62W/HR Battery",
        "ProductCode": "4C",
        "Skus": [
          "451-BBPV"
        ]
      },
      {
        "Name": "Docking Stations",
        "Description": "No Docking Station",
        "ProductCode": "NONE",
        "Skus": [
          "452-BBSE"
        ]
      },
      {
        "Name": "Carrying Cases",
        "Description": "No Carrying Case",
        "ProductCode": "NONE",
        "Skus": [
          "460-BBEX"
        ]
      },
      {
        "Name": "Systems Management",
        "Description": "No Out-of-Band Systems Management",
        "ProductCode": "NOVPRO",
        "Skus": [
          "631-AARP"
        ]
      },
      {
        "Name": "Operating System Recovery Options",
        "Description": "Windows 10 OS Recovery 64bit - DVD",
        "ProductCode": "M10PD6M",
        "Skus": [
          "620-AAYW"
        ]
      },
      {
        "Name": "Documentation/Disks",
        "Description": "Safety/Environment and Regulatory Guide (English/French Multi-language)",
        "ProductCode": "EFDOC",
        "Skus": [
          "340-AGIK"
        ]
      },
      {
        "Name": "Placemat",
        "Description": "Quick Reference Guide",
        "ProductCode": "PLCMT",
        "Skus": [
          "340-ARKU"
        ]
      },
      {
        "Name": "Diagnostic CD / Diskette",
        "Description": "No Resource DVD",
        "ProductCode": "NRDVD",
        "Skus": [
          "430-XXYG"
        ]
      },
      {
        "Name": "TAA",
        "Description": "No TAA",
        "ProductCode": "NOTAA",
        "Skus": [
          "340-ACQQ"
        ]
      },
      {
        "Name": "Energy Efficient Option",
        "Description": "ESTAR 6.1",
        "ProductCode": "ESTAR",
        "Skus": [
          "387-BBKF"
        ]
      },
      {
        "Name": "Label",
        "Description": "Regulatory Label Included",
        "ProductCode": "REG",
        "Skus": [
          "389-BEYY"
        ]
      },
      {
        "Name": "Support Tech Sheet and Powercord",
        "Description": "POD Label",
        "ProductCode": "POD",
        "Skus": [
          "389-BCDK"
        ]
      },
      {
        "Name": "Canada Ship Options",
        "Description": "US No Canada Ship Charge",
        "ProductCode": "USNONE",
        "Skus": [
          "332-1286"
        ]
      },
      {
        "Name": "Packaging",
        "Description": "Smart Select MIN SHIP (DAO/LATAM)",
        "ProductCode": "SHPMN",
        "Skus": [
          "340-AAPP",
          "340-AQJX"
        ]
      },
      {
        "Name": "Transportation from ODM to region",
        "Description": "BTS Shipment",
        "ProductCode": "BTS",
        "Skus": [
          "800-BBGG"
        ]
      },
      {
        "Name": "FGA Module",
        "Description": "E5570_2H16_001/US/BTS",
        "ProductCode": "FG0060",
        "Skus": [
          "998-BWLD"
        ]
      },
      {
        "Name": "Hardware Support Services",
        "Description": "1 Year Hardware Service with In-Home/Onsite Service After Remote Diagnosis",
        "ProductCode": "NBD1",
        "Skus": [
          "997-8317",
          "997-8328"
        ]
      },
      {
        "Name": "All in one Solution",
        "Description": "No Stand",
        "ProductCode": "NOSTND",
        "Skus": [
          "575-BBCH"
        ]
      },
      {
        "Name": "Mouse",
        "Description": "No Mouse Selected",
        "ProductCode": "NOMSE",
        "Skus": [
          "570-AADK"
        ]
      },
      {
        "Name": "Accessories",
        "Description": "Dell Docking Spacer",
        "ProductCode": "SPACER",
        "Skus": [
          "452-BBDB"
        ]
      }
    ]
  },
  {
    "Description": "New Latitude 15 3000 Series",
    "SubTotalAmount": "$658.43",
    "ImageUrl": "https://si.cdn.dell.com/images/global/configurator/chassis/lat-15-3560-nt-bk-ft-120x107.jpg",
    "Components": [
      {
        "Name": "Base",
        "Description": "Dell Latitude 3560 CTO",
        "ProductCode": "3560T",
        "Skus": [
          "210-AEXE"
        ]
      },
      {
        "Name": "Processor",
        "Description": "Intel® Celeron 3215U (Dual Core, 1.5GHz, 2M cache, 15W)",
        "ProductCode": "C3215",
        "Skus": [
          "379-BCGG"
        ]
      },
      {
        "Name": "Operating System",
        "Description": "Windows 10 Home 64bit English, French, Spanish",
        "ProductCode": "10H64M",
        "Skus": [
          "619-AHHY"
        ]
      },
      {
        "Name": "System Configuration",
        "Description": "Intel Celeron 3215U Processor with Intel Integrated HD Graphics",
        "ProductCode": "CELUMA",
        "Skus": [
          "338-BHKM"
        ]
      },
      {
        "Name": "Microsoft Application Software",
        "Description": "Microsoft Office 30 Day Trial",
        "ProductCode": "16MUI",
        "Skus": [
          "658-BCSB"
        ]
      },
      {
        "Name": "Non-Microsoft Application Software",
        "Description": "Additional Software 10",
        "ProductCode": "WIN10",
        "Skus": [
          "340-ADFZ",
          "340-AJFC",
          "422-0007",
          "525-BBCL",
          "640-BBLW",
          "658-BBMR",
          "658-BBNF",
          "658-BCTY",
          "658-BCUV"
        ]
      },
      {
        "Name": "Keyboard",
        "Description": "Internal Single Pointing Keyboard, English",
        "ProductCode": "ENGKBD",
        "Skus": [
          "580-ACJB"
        ]
      },
      {
        "Name": "Dell Threat Protection and Endpoint Security Suite",
        "Description": "No Dell Data Protection | Endpoint Security Suite Software",
        "ProductCode": "NODDP",
        "Skus": [
          "634-BENZ"
        ]
      },
      {
        "Name": "Dell Data Protection Solutions",
        "Description": "No DDPE Encryption Software",
        "ProductCode": "NODDPE",
        "Skus": [
          "954-3465"
        ]
      },
      {
        "Name": "LCD",
        "Description": "15.6 HD (1366 x 768) Anti Glare (16:9) WLED",
        "ProductCode": "NTHD",
        "Skus": [
          "320-BBQM",
          "391-BCES"
        ]
      },
      {
        "Name": "Hard Drive",
        "Description": "500GB 7200RPM Hard Disk Drive",
        "ProductCode": "500GB",
        "Skus": [
          "400-AIIU"
        ]
      },
      {
        "Name": "Memory",
        "Description": "4GB (1x4GB) 1600MHz DDR3L Memory",
        "ProductCode": "4G1D3",
        "Skus": [
          "370-AAQI"
        ]
      },
      {
        "Name": "Wireless",
        "Description": "Intel® 3165 Dual Band 802.11 AC with BT 4.0 Wireless Card (1x1)",
        "ProductCode": "3165AC",
        "Skus": [
          "555-BCMS"
        ]
      },
      {
        "Name": "Driver",
        "Description": "Intel 3165 Dual Band 802.11 AC with BT 4.0 Wireless Driver (1x1)",
        "ProductCode": "W7231",
        "Skus": [
          "555-BCOI"
        ]
      },
      {
        "Name": "Processor Branding",
        "Description": "Intel® Celeron® Label",
        "ProductCode": "CEL",
        "Skus": [
          "340-AQVB"
        ]
      },
      {
        "Name": "Video Card",
        "Description": "Intel® HD Graphics GT2",
        "ProductCode": "UMA",
        "Skus": [
          "490-BCOV"
        ]
      },
      {
        "Name": "PalmRest",
        "Description": "No Fingerprint Reader",
        "ProductCode": "NFPR",
        "Skus": [
          "346-BBSC"
        ]
      },
      {
        "Name": "Power Supply",
        "Description": "65W AC Adapter, 3-pin",
        "ProductCode": "65W",
        "Skus": [
          "492-BBDD"
        ]
      },
      {
        "Name": "Cable",
        "Description": "US Power Cord",
        "ProductCode": "US125V",
        "Skus": [
          "537-BBBL"
        ]
      },
      {
        "Name": "Primary Battery",
        "Description": "40 Whr 4-cell Li-Ion (Cylindrical) with ExpressCharge",
        "ProductCode": "4C",
        "Skus": [
          "451-BBPR"
        ]
      },
      {
        "Name": "Camera Software",
        "Description": "No Camera Software Selected",
        "ProductCode": "NOCMRA",
        "Skus": [
          "319-BBBK"
        ]
      },
      {
        "Name": "Docking Solutions",
        "Description": "No Docking Station",
        "ProductCode": "NONE",
        "Skus": [
          "452-BBSE"
        ]
      },
      {
        "Name": "Carrying Cases",
        "Description": "No Carrying Case",
        "ProductCode": "NONE",
        "Skus": [
          "460-BBEX"
        ]
      },
      {
        "Name": "Operating System Recovery Options",
        "Description": "Windows 10 OS Recovery 64bit - USB",
        "ProductCode": "M10U6M",
        "Skus": [
          "620-AAYY"
        ]
      },
      {
        "Name": "Documentation/Disks",
        "Description": "Safety/Environment and Regulatory Guide (English/French Multi-language)",
        "ProductCode": "EFDOC",
        "Skus": [
          "340-AGIK",
          "640-BBJB"
        ]
      },
      {
        "Name": "Placemat",
        "Description": "Quick Reference Guide for Windows 10",
        "ProductCode": "PLMTW10",
        "Skus": [
          "340-ASJN"
        ]
      },
      {
        "Name": "Diagnostic CD / Diskette",
        "Description": "No Resource DVD",
        "ProductCode": "NRDVD",
        "Skus": [
          "430-XXYG"
        ]
      },
      {
        "Name": "TAA",
        "Description": "No TAA",
        "ProductCode": "NOTAA",
        "Skus": [
          "340-ACQQ"
        ]
      },
      {
        "Name": "E-Star",
        "Description": "Energy Star 6.0",
        "ProductCode": "ESTAR",
        "Skus": [
          "387-BBKC"
        ]
      },
      {
        "Name": "Label",
        "Description": "Regulatory Label Included",
        "ProductCode": "REG",
        "Skus": [
          "389-BEYY"
        ]
      },
      {
        "Name": "UPC Label",
        "Description": "No UPC Label",
        "ProductCode": "NOUPC",
        "Skus": [
          "389-BCGW"
        ]
      },
      {
        "Name": "Canada Ship Options",
        "Description": "US No Canada Ship Charge",
        "ProductCode": "USNONE",
        "Skus": [
          "332-1286"
        ]
      },
      {
        "Name": "Packaging",
        "Description": "Mixed Model Shipping Material",
        "ProductCode": "SHPMX",
        "Skus": [
          "340-AASO",
          "340-AQMG"
        ]
      },
      {
        "Name": "Transportation from ODM to region",
        "Description": "BTO Standard Shipment",
        "ProductCode": "STND",
        "Skus": [
          "800-BBGS"
        ]
      },
      {
        "Name": "Pricing Information",
        "Description": "Flex 1",
        "ProductCode": "FLEX 1",
        "Skus": [
          "610-BBRC"
        ]
      },
      {
        "Name": "FGA Module",
        "Description": "Generic FHC/BTO",
        "ProductCode": "FG0018",
        "Skus": [
          "998-BRVN"
        ]
      },
      {
        "Name": "Hardware Support Services",
        "Description": "1 Year Hardware Service with In-Home/Onsite Service After Remote Diagnosis",
        "ProductCode": "NBD1",
        "Skus": [
          "997-6727",
          "997-6735"
        ]
      },
      {
        "Name": "Mouse",
        "Description": "No Mouse Selected",
        "ProductCode": "NOMSE",
        "Skus": [
          "570-AADK"
        ]
      }
    ]
  },
  {
    "Description": "Vostro 15 3000 Series",
    "SubTotalAmount": "$498.57",
    "ImageUrl": "https://si.cdn.dell.com/images/global/configurator/chassis/vostro-15-3558-blk-ft-120x107.jpg",
    "Components": [
      {
        "Name": "Processor",
        "Description": "Intel® Celeron® 3215U Processor (2M Cache, 1.70 GHz)",
        "ProductCode": "CT36F7",
        "Skus": [
          "338-BIMV"
        ]
      },
      {
        "Name": "Operating System",
        "Description": "Windows 10 Home 64bit English, French, Spanish",
        "ProductCode": "10H64M",
        "Skus": [
          "619-AHHY"
        ]
      },
      {
        "Name": "Office Productivity Software",
        "Description": "Microsoft Office 30 Day Trial",
        "ProductCode": "16MUI",
        "Skus": [
          "658-BCSB"
        ]
      },
      {
        "Name": "Memory",
        "Description": "4GB Single Channel DDR3 1600MHz (4GBx1)",
        "ProductCode": "4GB1D",
        "Skus": [
          "370-AAWY"
        ]
      },
      {
        "Name": "Security Software",
        "Description": "McAfee Security Center 12 month Subscription",
        "ProductCode": "MSBC12M",
        "Skus": [
          "525-0013"
        ]
      },
      {
        "Name": "Operating System Recovery Options",
        "Description": "Windows 10 OS Recovery 64bit - DVD",
        "ProductCode": "M10D6M",
        "Skus": [
          "620-AAZE"
        ]
      },
      {
        "Name": "Driver",
        "Description": "Driver for Dell Wireless 3160",
        "ProductCode": "3160DR",
        "Skus": [
          "555-BCJY"
        ]
      },
      {
        "Name": "Dell Vostro 3558",
        "Description": "Dell Vostro 3558 BTX",
        "ProductCode": "3558X",
        "Skus": [
          "210-AEHO"
        ]
      },
      {
        "Name": "Keyboard",
        "Description": "Standard Keyboard,English",
        "ProductCode": "ENGKBD",
        "Skus": [
          "583-BCCZ"
        ]
      },
      {
        "Name": "Video Card",
        "Description": "Intel® HD Graphics 4400",
        "ProductCode": "UMA",
        "Skus": [
          "490-BBMU"
        ]
      },
      {
        "Name": "Hard Drive",
        "Description": "500GB 5400 rpm Hard Drive",
        "ProductCode": "500G5K",
        "Skus": [
          "400-AAYY"
        ]
      },
      {
        "Name": "Wireless",
        "Description": "802.11ac + Bluetooth 4.0, Dual Band 2.4&5 GHz, 1x1",
        "ProductCode": "3160",
        "Skus": [
          "555-BCIY"
        ]
      },
      {
        "Name": "Documentation/Disks",
        "Description": "Safety/Environment and Regulatory Guide (English/French Multi-language)",
        "ProductCode": "EFDOC",
        "Skus": [
          "340-AGIK"
        ]
      },
      {
        "Name": "CD ROM/DVD ROM",
        "Description": "Tray load DVD Drive (Reads and Writes to DVD/CD)",
        "ProductCode": "8DVDRW",
        "Skus": [
          "429-AAJV"
        ]
      },
      {
        "Name": "Optical Software",
        "Description": "Cyberlink Media Suite Essentials for Windows 8.1 and DVD Drive (without Media)",
        "ProductCode": "CW8DN",
        "Skus": [
          "658-BBTV"
        ]
      },
      {
        "Name": "Power Supply",
        "Description": "45W AC Adapter, 3Pin",
        "ProductCode": "45WTAC",
        "Skus": [
          "450-AEHK"
        ]
      },
      {
        "Name": "FGA Module",
        "Description": "VAN15BDW1701_010_R/US/CA/BTO",
        "ProductCode": "FG0023",
        "Skus": [
          "998-BTYQ"
        ]
      },
      {
        "Name": "Primary Battery",
        "Description": "40 WHr, 4-Cell Battery (integrated)",
        "ProductCode": "4CBATT",
        "Skus": [
          "451-BBMG"
        ]
      },
      {
        "Name": "LCD",
        "Description": "15.6 HD Wide Screen LED Anti-Glare Display (1366x768) 720p",
        "ProductCode": "15HDNT",
        "Skus": [
          "391-BBZY"
        ]
      },
      {
        "Name": "Cable",
        "Description": "US Power Cord",
        "ProductCode": "US125V",
        "Skus": [
          "537-BBBL"
        ]
      },
      {
        "Name": "Placemat",
        "Description": "MOD,PLCMT,VOS,W10,3558/59,D/BC",
        "ProductCode": "PLCMT10",
        "Skus": [
          "340-ATWV"
        ]
      },
      {
        "Name": "Support Tech Sheet and Powercord",
        "Description": "No UPC",
        "ProductCode": "NOUPC",
        "Skus": [
          "389-BDCE"
        ]
      },
      {
        "Name": "Color Choice",
        "Description": "Black LCD cover(integrated Widescreen HD 720P Webcam with Dual digital microphone array)",
        "ProductCode": "BLCD",
        "Skus": [
          "320-BBPG"
        ]
      },
      {
        "Name": "Retail Information",
        "Description": "No Retail Software Required",
        "ProductCode": "NORTLSW",
        "Skus": [
          "817-BBBP"
        ]
      },
      {
        "Name": "Processor Branding",
        "Description": "Intel® Celeron® Label",
        "ProductCode": "INCLBL",
        "Skus": [
          "338-BDXI"
        ]
      },
      {
        "Name": "Non-Microsoft Application Software",
        "Description": "Windows 10 OS",
        "ProductCode": "WIN10",
        "Skus": [
          "340-AJFC",
          "340-AJFD",
          "340-AOEY",
          "525-BBCL",
          "640-BBLW",
          "658-BCVR"
        ]
      },
      {
        "Name": "Packaging",
        "Description": "Shipment box",
        "ProductCode": "SHP",
        "Skus": [
          "328-BCCD",
          "340-AAPP"
        ]
      },
      {
        "Name": "Regulatory Label",
        "Description": "Regulatory Label Included",
        "ProductCode": "REGUMA",
        "Skus": [
          "340-APCH",
          "340-APJM"
        ]
      },
      {
        "Name": "OS Label",
        "Description": "No Palmrest Label",
        "ProductCode": "NOLBL",
        "Skus": [
          "340-ACUG"
        ]
      },
      {
        "Name": "Order Information",
        "Description": "Non-Canada orders only",
        "ProductCode": "USNONE",
        "Skus": [
          "332-1286"
        ]
      },
      {
        "Name": "Service",
        "Description": "1 Year Hardware Service with In-Home/Onsite Service After Remote Diagnosis",
        "ProductCode": "NBD1",
        "Skus": [
          "802-7114",
          "975-9426"
        ]
      },
      {
        "Name": "E-Star",
        "Description": "Energy Star Label (on shipment box)",
        "ProductCode": "ESTAR",
        "Skus": [
          "340-AAPZ"
        ]
      },
      {
        "Name": "Transportation from ODM to region",
        "Description": "Standard Shipment",
        "ProductCode": "STND",
        "Skus": [
          "800-BBGS"
        ]
      }
    ]
  },
  {
    "Description": "Precision 15 7000 Series (7510)",
    "SubTotalAmount": "$1,712.86",
    "ImageUrl": "https://si.cdn.dell.com/images/global/configurator/chassis/precn-7510-nt-bk-ft-120x107.jpg",
    "Components": [
      {
        "Name": "Mobile Precision 7510",
        "Description": "Mobile Precision7510 XCTO BASE",
        "ProductCode": "7510X",
        "Skus": [
          "210-AFXM"
        ]
      },
      {
        "Name": "Processor",
        "Description": "Intel® Core i5-6300HQ (Quad Core 2.30GHz, 3.20GHz Turbo, 6MB 45W, w/Intel HD Graphics 530)",
        "ProductCode": "I56300",
        "Skus": [
          "379-BCDM"
        ]
      },
      {
        "Name": "Chassis Options",
        "Description": "Intel Core i5-6300HQ with no Smart Card or Thunderbolt 3",
        "ProductCode": "6300N",
        "Skus": [
          "338-BHRL"
        ]
      },
      {
        "Name": "Processor Branding",
        "Description": "Intel Core i5 Label",
        "ProductCode": "COREI5",
        "Skus": [
          "389-BHIB"
        ]
      },
      {
        "Name": "Operating System(s)",
        "Description": "Windows 7 Professional English, French, Spanish 64bit (Includes Windows 10 Pro License)",
        "ProductCode": "DW10P7M",
        "Skus": [
          "619-AIKP"
        ]
      },
      {
        "Name": "Non-Microsoft Application Software",
        "Description": "Dell Applications Windows 7",
        "ProductCode": "APPW7",
        "Skus": [
          "340-ADFZ",
          "422-0007",
          "422-0052",
          "637-AAAS",
          "640-BBDF",
          "640-BBES",
          "640-BBEV",
          "640-BBLW",
          "640-BBPN",
          "658-BBMR",
          "658-BBRB"
        ]
      },
      {
        "Name": "Office Productivity Software",
        "Description": "Microsoft Office 30 Day Trial",
        "ProductCode": "16MUI",
        "Skus": [
          "658-BCSB"
        ]
      },
      {
        "Name": "Video Card",
        "Description": "AMD FirePro W5170M w/2GB GDDR5",
        "ProductCode": "W5170M",
        "Skus": [
          "490-BCPI",
          "490-BCQI"
        ]
      },
      {
        "Name": "Energy Star",
        "Description": "No Energy Star",
        "ProductCode": "NOESTAR",
        "Skus": [
          "387-BBDO"
        ]
      },
      {
        "Name": "LCD",
        "Description": "15.6\" FHD (1920x1080) Anti-Glare LED-backlit (45% color gamut), with microphone only",
        "ProductCode": "FHDNM",
        "Skus": [
          "319-BBDT",
          "320-BBQV",
          "391-BCFG"
        ]
      },
      {
        "Name": "Memory",
        "Description": "8GB (2x4GB) 2133MHz DDR4 SDRAM, Non-ECC",
        "ProductCode": "8G2D4",
        "Skus": [
          "370-ACIC"
        ]
      },
      {
        "Name": "Hard Drive",
        "Description": "500GB 2.5 inch SATA 7200 rpm Hard Drive",
        "ProductCode": "500GB",
        "Skus": [
          "400-AJBM"
        ]
      },
      {
        "Name": "2nd Hard Drive",
        "Description": "No Additional Hard Drive",
        "ProductCode": "NOMWOP",
        "Skus": [
          "401-AAGM"
        ]
      },
      {
        "Name": "Raid Connectivity",
        "Description": "NO RAID",
        "ProductCode": "NORAID",
        "Skus": [
          "817-BBBN"
        ]
      },
      {
        "Name": "Wireless",
        "Description": "Intel® Dual-Band Wireless-AC 8260 Wi-Fi with Bluetooth 4.1 Wireless Card (2x2)",
        "ProductCode": "8260AC",
        "Skus": [
          "555-BCMT"
        ]
      },
      {
        "Name": "Driver",
        "Description": "Intel® Dual-Band Wireless-AC 8260 Wi-Fi + BT 4.1 Wireless Driver (2x2)",
        "ProductCode": "8260BT",
        "Skus": [
          "555-BCNN"
        ]
      },
      {
        "Name": "Mobile Broadband",
        "Description": "No Mobile Broadband",
        "ProductCode": "NOMBB",
        "Skus": [
          "556-BBDZ"
        ]
      },
      {
        "Name": "Keyboard",
        "Description": "Internal Dual Pointing Keyboard, English",
        "ProductCode": "KIXP6UE",
        "Skus": [
          "580-ACLI",
          "580-ADWY"
        ]
      },
      {
        "Name": "Primary Battery",
        "Description": "6-cell (72Wh) Lithium Ion battery with ExpressCharge",
        "ProductCode": "6C72WH",
        "Skus": [
          "451-BBPP"
        ]
      },
      {
        "Name": "Power Supply",
        "Description": "180W AC Adapter",
        "ProductCode": "180AC",
        "Skus": [
          "450-AATJ"
        ]
      },
      {
        "Name": "Cable",
        "Description": "US Power Cord",
        "ProductCode": "USPWR",
        "Skus": [
          "450-AAUO"
        ]
      },
      {
        "Name": "Security Options",
        "Description": "No Security",
        "ProductCode": "PLMNFP",
        "Skus": [
          "346-BBRF"
        ]
      },
      {
        "Name": "Systems Management",
        "Description": "No Out-of-Band Systems Management",
        "ProductCode": "NOVPRO",
        "Skus": [
          "631-AAQR"
        ]
      },
      {
        "Name": "Dell Threat Protection and Endpoint Security Suite",
        "Description": "No Dell Data Protection | Endpoint Security Suite Software",
        "ProductCode": "NODDP",
        "Skus": [
          "634-BENZ"
        ]
      },
      {
        "Name": "Dell Data Protection Solutions",
        "Description": "No DDPE Encryption Software",
        "ProductCode": "NODDPE",
        "Skus": [
          "954-3465"
        ]
      },
      {
        "Name": "Documentation/Disks",
        "Description": "Safety/Environment and Regulatory Guide (English/French Multi-language)",
        "ProductCode": "EFDOC",
        "Skus": [
          "340-AGIK"
        ]
      },
      {
        "Name": "Keyboard",
        "Description": "No Keyboard Selected",
        "ProductCode": "NKYBD",
        "Skus": [
          "580-AABG"
        ]
      },
      {
        "Name": "Mouse",
        "Description": "No Mouse",
        "ProductCode": "NOMSE",
        "Skus": [
          "570-AADK"
        ]
      },
      {
        "Name": "Monitor Adapters",
        "Description": "No Accessories",
        "ProductCode": "NOADPTR",
        "Skus": [
          "461-AABV"
        ]
      },
      {
        "Name": "Operating System Recovery Options",
        "Description": "Windows 10 OS Recovery 64bit  DVD",
        "ProductCode": "M10PD6M",
        "Skus": [
          "620-AAYW"
        ]
      },
      {
        "Name": "Placemat",
        "Description": "No Quick Reference Guide",
        "ProductCode": "NOTSH",
        "Skus": [
          "340-AASE"
        ]
      },
      {
        "Name": "Canada Ship Options",
        "Description": "US No Canada Ship Charge",
        "ProductCode": "USNONE",
        "Skus": [
          "332-1286"
        ]
      },
      {
        "Name": "TAA",
        "Description": "No TAA",
        "ProductCode": "NOTAA",
        "Skus": [
          "340-ACQQ"
        ]
      },
      {
        "Name": "UPC Label",
        "Description": "No UPC Label",
        "ProductCode": "NOUPC",
        "Skus": [
          "389-BDCE"
        ]
      },
      {
        "Name": "Packaging",
        "Description": "Mix Model Shipping Material",
        "ProductCode": "MIX",
        "Skus": [
          "328-BCDJ",
          "328-BCDK",
          "328-BCDL",
          "328-BCDM",
          "340-AAPP"
        ]
      },
      {
        "Name": "Label",
        "Description": "No Reg Label",
        "ProductCode": "NONE",
        "Skus": [
          "817-BBBP"
        ]
      },
      {
        "Name": "Transportation from ODM to region",
        "Description": "Standard Shipment",
        "ProductCode": "STND",
        "Skus": [
          "800-BBGF"
        ]
      },
      {
        "Name": "Service",
        "Description": "3 Years Hardware Service with Onsite/In-Home Service After Remote Diagnosis",
        "ProductCode": "NBD3",
        "Skus": [
          "997-1022",
          "997-1023"
        ]
      }
    ]
  },
  {
    "Description": "Precision 15 5000 Series (5510)",
    "SubTotalAmount": "$1,998.57",
    "ImageUrl": "https://si.cdn.dell.com/images/global/configurator/chassis/precn-5510-nt-gray-ft-120x107.jpg",
    "Components": [
      {
        "Name": "Dell Mobile Precision Workstations 5510",
        "Description": "Dell Mobile Precision Workstation 5510 XCTO",
        "ProductCode": "X5510T",
        "Skus": [
          "210-AGQI"
        ]
      },
      {
        "Name": "Processor",
        "Description": "Intel® Core i5-6300HQ (Quad Core 2.30GHz, 3.20GHz Turbo, 6MB 45W, w/Intel HD Graphics 530)",
        "ProductCode": "I56300",
        "Skus": [
          "379-BCDM"
        ]
      },
      {
        "Name": "Base Options",
        "Description": "Intel Core i5-6300HQ Processor with Nvidia Quadro M1000M Graphics w/2GB GDDR5",
        "ProductCode": "I56300",
        "Skus": [
          "338-BIEY"
        ]
      },
      {
        "Name": "Processor Branding",
        "Description": "Intel Core i5 Label",
        "ProductCode": "CI5SML",
        "Skus": [
          "389-BHIB"
        ]
      },
      {
        "Name": "Operating System",
        "Description": "Windows 7 Professional English, French, Spanish 64bit (Includes Windows 10 Pro License)",
        "ProductCode": "DW10P7M",
        "Skus": [
          "619-AIKP"
        ]
      },
      {
        "Name": "Non-Microsoft Application Software",
        "Description": "OS Recovery",
        "ProductCode": "WIN7",
        "Skus": [
          "340-AAUC",
          "340-ADFZ",
          "340-ARXE",
          "422-0007",
          "422-0052",
          "637-AAAS",
          "640-BBDI",
          "640-BBES",
          "640-BBEU",
          "658-BBMR",
          "658-BBRB"
        ]
      },
      {
        "Name": "Office Productivity Software",
        "Description": "Microsoft Office 30 Day Trial",
        "ProductCode": "16MUI",
        "Skus": [
          "658-BCSB"
        ]
      },
      {
        "Name": "Video Card",
        "Description": "Nvidia® Quadro® M1000M w/2GB GDDR5",
        "ProductCode": "M1000M",
        "Skus": [
          "490-BCVC"
        ]
      },
      {
        "Name": "Energy Efficiancy Options",
        "Description": "ENERGY STAR qualified",
        "ProductCode": "ESTAR",
        "Skus": [
          "387-BBFE"
        ]
      },
      {
        "Name": "LCD",
        "Description": "15.6\" UltraSharp FHD IPS (1920x1080) Wide View Anti-Glare LED-backlit with Premium Panel Guarantee",
        "ProductCode": "LCDNT2",
        "Skus": [
          "391-BCOE"
        ]
      },
      {
        "Name": "Memory",
        "Description": "8GB (2x4GB) 2133MHz DDR4 Non-ECC",
        "ProductCode": "8GB",
        "Skus": [
          "370-ACIC"
        ]
      },
      {
        "Name": "Primary Storage",
        "Description": "500GB 2.5 inch SATA 7200 rpm Hard Drive",
        "ProductCode": "500AQUC",
        "Skus": [
          "400-AILO",
          "575-BBHS"
        ]
      },
      {
        "Name": "Secondary Storage",
        "Description": "No Additional Hard Drive",
        "ProductCode": "NOHDDA",
        "Skus": [
          "401-AADF"
        ]
      },
      {
        "Name": "Wireless",
        "Description": "Intel® Dual-Band Wireless-AC 8260 Wi-Fi + BT 4.1 Wireless Card (2x2)",
        "ProductCode": "8260AW",
        "Skus": [
          "555-BCRV"
        ]
      },
      {
        "Name": "Driver",
        "Description": "Dell Wireless 8260 Driver",
        "ProductCode": "8260",
        "Skus": [
          "340-ARXP"
        ]
      },
      {
        "Name": "Keyboard",
        "Description": "Internal Single Pointing Backlit Keyboard, English",
        "ProductCode": "K80ENG",
        "Skus": [
          "580-AEJK"
        ]
      },
      {
        "Name": "Primary Battery",
        "Description": "3-cell (56Wh)  Lithium Ion battery with ExpressCharge",
        "ProductCode": "3C",
        "Skus": [
          "451-BBUW"
        ]
      },
      {
        "Name": "Power Supply",
        "Description": "AC Adaptor",
        "ProductCode": "AC130W",
        "Skus": [
          "470-ABVP",
          "492-BBGC"
        ]
      },
      {
        "Name": "Cable",
        "Description": "Power Cord, US",
        "ProductCode": "US25A",
        "Skus": [
          "537-BBBD"
        ]
      },
      {
        "Name": "PalmRest",
        "Description": "Palmrest for English Keyboard",
        "ProductCode": "PLST80",
        "Skus": [
          "346-BBTC"
        ]
      },
      {
        "Name": "Systems Management",
        "Description": "No Out-of-Band Systems Management",
        "ProductCode": "NOVPRO",
        "Skus": [
          "631-AATI"
        ]
      },
      {
        "Name": "Dell Threat Protection and Endpoint Security Suite",
        "Description": "No Dell Data Protection | Endpoint Security Suite Software",
        "ProductCode": "NODDP",
        "Skus": [
          "634-BENZ"
        ]
      },
      {
        "Name": "Dell Data Protection Solutions",
        "Description": "No DDPE Encryption Software",
        "ProductCode": "NODDPE",
        "Skus": [
          "954-3465"
        ]
      },
      {
        "Name": "Mouse",
        "Description": "No Mouse Selected",
        "ProductCode": "NOMSE",
        "Skus": [
          "570-AADK"
        ]
      },
      {
        "Name": "Operating System Recovery Options",
        "Description": "Windows 10 OS Recovery 64bit  DVD",
        "ProductCode": "M10PD6M",
        "Skus": [
          "620-AAYW"
        ]
      },
      {
        "Name": "Placemat",
        "Description": "Quick Reference Guide",
        "ProductCode": "PLCMT",
        "Skus": [
          "340-ARXO"
        ]
      },
      {
        "Name": "Canada Ship Options",
        "Description": "US No Canada Ship Charge",
        "ProductCode": "USNONE",
        "Skus": [
          "332-1286"
        ]
      },
      {
        "Name": "Support Tech Sheet and Powercord",
        "Description": "No UPC Label",
        "ProductCode": "NOLBL",
        "Skus": [
          "389-BCGW"
        ]
      },
      {
        "Name": "Packaging",
        "Description": "Mix Model Shipping Material",
        "ProductCode": "SHPMX",
        "Skus": [
          "340-AAPP",
          "340-ARXK"
        ]
      },
      {
        "Name": "Label",
        "Description": "Regulatory Label Included",
        "ProductCode": "REG",
        "Skus": [
          "389-BEYY"
        ]
      },
      {
        "Name": "Transportation from ODM to region",
        "Description": "Standard Shipment",
        "ProductCode": "STND",
        "Skus": [
          "800-BBGF"
        ]
      },
      {
        "Name": "Cables and Dongles",
        "Description": "No Accessories",
        "ProductCode": "NOADPTR",
        "Skus": [
          "461-AABV"
        ]
      },
      {
        "Name": "TAA",
        "Description": "No TAA",
        "ProductCode": "NOTAA",
        "Skus": [
          "340-ACQQ"
        ]
      },
      {
        "Name": "Stands and Mounts",
        "Description": "No Stand",
        "ProductCode": "NOSTND",
        "Skus": [
          "575-BBCH"
        ]
      },
      {
        "Name": "Hardware Support Services",
        "Description": "1 Year Hardware Service with Onsite/In-Home Service After Remote Diagnosis",
        "ProductCode": "NBD1",
        "Skus": [
          "804-9773",
          "804-9774"
        ]
      },
      {
        "Name": "Documentation/Disks",
        "Description": "Safety/Environment and Regulatory Guide (English/French Multi-language)",
        "ProductCode": "EFDOC",
        "Skus": [
          "340-AGIK"
        ]
      }
    ]
  },
  {
    "Description": "Precision 15 3000 Series (3510)",
    "SubTotalAmount": "$1,525.71",
    "ImageUrl": "https://si.cdn.dell.com/images/global/configurator/chassis/wrkstn-precn-3510-nt-bk-ft-120x107.jpg",
    "Components": [
      {
        "Name": "Dell Precision 3510",
        "Description": "Dell Mobile Precision Workstations 3510 XCTO",
        "ProductCode": "X3510T",
        "Skus": [
          "210-AGMF"
        ]
      },
      {
        "Name": "Processor",
        "Description": "Intel® Core i5-6300HQ (Quad Core 2.30GHz, 3.20GHz Turbo, 6MB 35W, w/Intel HD Graphics 530)",
        "ProductCode": "I56300",
        "Skus": [
          "379-BCDM"
        ]
      },
      {
        "Name": "Chassis Options",
        "Description": "Intel® Core i5-6300HQ Processor without USB Type C Thunderbolt Chassis",
        "ProductCode": "PDTI5",
        "Skus": [
          "338-BHYR"
        ]
      },
      {
        "Name": "Processor Branding",
        "Description": "Intel Core i5 Label",
        "ProductCode": "CI5SML",
        "Skus": [
          "389-BHIB"
        ]
      },
      {
        "Name": "Operating System",
        "Description": "Windows 7 Professional English, French, Spanish 64bit (Includes Windows 10 Pro License)",
        "ProductCode": "DW10P7M",
        "Skus": [
          "619-AIKP"
        ]
      },
      {
        "Name": "Non-Microsoft Application Software",
        "Description": "OS Recovery",
        "ProductCode": "WIN7",
        "Skus": [
          "340-AAUC",
          "340-ADFZ",
          "340-ARZU",
          "422-0007",
          "422-0052",
          "637-AAAS",
          "640-BBDI",
          "640-BBES",
          "640-BBEU",
          "658-BBMR",
          "658-BBRB"
        ]
      },
      {
        "Name": "Office Productivity Software",
        "Description": "Microsoft Office 30 Day Trial",
        "ProductCode": "16MUI",
        "Skus": [
          "658-BCSB"
        ]
      },
      {
        "Name": "Video Card",
        "Description": "AMD FirePro W5130M w/2GB GDDR5",
        "ProductCode": "AM5130",
        "Skus": [
          "490-BCWU"
        ]
      },
      {
        "Name": "Energy Star",
        "Description": "ESTAR Label not included",
        "ProductCode": "NONE",
        "Skus": [
          "817-BBBP"
        ]
      },
      {
        "Name": "LCD",
        "Description": "15.6\"  HD TN (1366x768) Anti-Glare LED-backlit (45% color gamut), camera and mic, WWAN Capable",
        "ProductCode": "LNCHWW",
        "Skus": [
          "320-BBUQ",
          "391-BCHX"
        ]
      },
      {
        "Name": "Memory",
        "Description": "8GB (2x4GB) 2133MHz DDR4 Non-ECC",
        "ProductCode": "8G2D4",
        "Skus": [
          "370-ACIC"
        ]
      },
      {
        "Name": "Hard Drive",
        "Description": "500GB 2.5 inch SATA 7200 rpm Hard Drive",
        "ProductCode": "500G72",
        "Skus": [
          "400-AJBM",
          "575-BBFI"
        ]
      },
      {
        "Name": "Wireless",
        "Description": "Intel® Dual-Band Wireless-AC 8260 Wi-Fi + BT 4.1 Wireless Card (2x2)",
        "ProductCode": "8260ACW",
        "Skus": [
          "555-BCPF"
        ]
      },
      {
        "Name": "Driver",
        "Description": "Intel® Dual-Band Wireless-AC 8260 Wi-Fi + BT 4.1 Wireless Driver (2x2)",
        "ProductCode": "8260WM",
        "Skus": [
          "555-BCNB"
        ]
      },
      {
        "Name": "Mobile Broadband",
        "Description": "No Wireless WAN Card",
        "ProductCode": "NOWWAN",
        "Skus": [
          "362-BBBB"
        ]
      },
      {
        "Name": "Keyboard",
        "Description": "Internal Dual Pointing Keyboard, English",
        "ProductCode": "KID6ENG",
        "Skus": [
          "580-ACLI",
          "580-ADYF"
        ]
      },
      {
        "Name": "Primary Battery",
        "Description": "4 Cell 62W/HR Battery",
        "ProductCode": "4C",
        "Skus": [
          "451-BBSK"
        ]
      },
      {
        "Name": "Power Supply",
        "Description": "130W AC Adapter",
        "ProductCode": "130W3P",
        "Skus": [
          "450-ADFZ"
        ]
      },
      {
        "Name": "Cable",
        "Description": "US Power Cord",
        "ProductCode": "US125V",
        "Skus": [
          "537-BBBL"
        ]
      },
      {
        "Name": "PalmRest",
        "Description": "No Security",
        "ProductCode": "DPRNSC",
        "Skus": [
          "346-BBRS"
        ]
      },
      {
        "Name": "Systems Management",
        "Description": "No Out-of-Band Systems Management",
        "ProductCode": "NOVPRO",
        "Skus": [
          "631-AASG"
        ]
      },
      {
        "Name": "Dell Threat Protection and Endpoint Security Suite",
        "Description": "No Dell Data Protection | Endpoint Security Suite Software",
        "ProductCode": "NODDP",
        "Skus": [
          "634-BENZ"
        ]
      },
      {
        "Name": "Dell Data Protection Solutions",
        "Description": "No DDPE Encryption Software",
        "ProductCode": "NODDPE",
        "Skus": [
          "954-3465"
        ]
      },
      {
        "Name": "Mouse",
        "Description": "No Mouse Selected",
        "ProductCode": "NOMSE",
        "Skus": [
          "570-AADK"
        ]
      },
      {
        "Name": "Operating System Recovery Options",
        "Description": "Windows 10 OS Recovery 64bit  DVD",
        "ProductCode": "M10PD6M",
        "Skus": [
          "620-AAYW"
        ]
      },
      {
        "Name": "Placemat",
        "Description": "No Quick Reference Guide",
        "ProductCode": "NOTSH",
        "Skus": [
          "340-AASE"
        ]
      },
      {
        "Name": "Canada Ship Options",
        "Description": "US No Canada Ship Charge",
        "ProductCode": "USNONE",
        "Skus": [
          "332-1286"
        ]
      },
      {
        "Name": "TAA",
        "Description": "No TAA",
        "ProductCode": "NOTAA",
        "Skus": [
          "340-ACQQ"
        ]
      },
      {
        "Name": "Support Tech Sheet and Powercord",
        "Description": "No UPC Label",
        "ProductCode": "NOLBL",
        "Skus": [
          "389-BCGW"
        ]
      },
      {
        "Name": "Packaging",
        "Description": "DAO Mix Ship Model",
        "ProductCode": "DAOMIX",
        "Skus": [
          "340-AAPP",
          "340-AQHR",
          "340-AQHU",
          "340-AQZQ",
          "340-AQZR"
        ]
      },
      {
        "Name": "Label",
        "Description": "Regulatory Label Included",
        "ProductCode": "REGLBL",
        "Skus": [
          "389-BEYY"
        ]
      },
      {
        "Name": "Transportation from ODM to region",
        "Description": "Standard Shipment",
        "ProductCode": "STND",
        "Skus": [
          "800-BBGF"
        ]
      },
      {
        "Name": "Diagnostic CD / Diskette",
        "Description": "No Resource DVD",
        "ProductCode": "NRDVD",
        "Skus": [
          "430-XXYG"
        ]
      },
      {
        "Name": "Hard Drive Software",
        "Description": "Intel Rapid Storage Technology",
        "ProductCode": "IRST",
        "Skus": [
          "409-BBFX"
        ]
      },
      {
        "Name": "Hardware Support Services",
        "Description": "3 Year Hardware Service with Onsite/In-Home Service After Remote Diagnosis",
        "ProductCode": "NBD3",
        "Skus": [
          "997-1075",
          "997-1129"
        ]
      },
      {
        "Name": "Stands and Mounts",
        "Description": "No Stand",
        "ProductCode": "NOSTND",
        "Skus": [
          "575-BBCH"
        ]
      },
      {
        "Name": "Documentation/Disks",
        "Description": "Safety/Environment and Regulatory Guide (English/French Multi-language)",
        "ProductCode": "EFDOC",
        "Skus": [
          "340-AGIK"
        ]
      }
    ]
  }
]

var defaultOutputModel = {
    laptops : {
        categories : [
        {
            type : "segment",
            sectionTitle : "General Use",
            items : [
            {
                itemTitle : "Laptops for Home",
                type: "home",
                linkUrl : "//en-us/shop/category/laptops?~ck=mn",
                imageUrl : "//i.dell.com/sites/content/DellMicroContent/Responsive_Images/english/_values/mast-forhome-laptops2.png"
            },
            {
                itemTitle : "Laptops for Business",
                type: "business",
                linkUrl : "//en-us/work/shop/category/laptops?~ck=mn",
                imageUrl : "//i.dell.com/sites/content/DellMicroContent/Responsive_Images/english/_values/mast-forwork-laptops.png"
            },
            {
                itemTitle: "All Laptops",
                type: "all",
                linkUrl : "//en-us/shop/category/laptops?~ck=mn",
                imageUrl : "//i.dell.com/sites/content/DellMicroContent/Responsive_Images/english/_values/mast-forwork-laptops.png"
            }
            ]         
        },
        {
            type : "brand",
            sectionTitle : "Brand",
            items : [
            {
                itemTitle : "Ispiron",
                type : "laptop",
                linkUrl : "//en-us/work/shop/category/laptops/inspiron-laptops-netbooks?~ck=mn",
                imageUrl : "//i.dell.com/das/dih.ashx/80h/sites/imagecontent/products/PublishingImages/category-images/inspiron-2-in-1-laptops/22431-home-laptop-inspiron-15-5559-115x75.png"
            },
            {
                itemTitle : "XPS",
                type : "laptop",
                linkUrl : "/en-us/work/shop/category/laptops/xps-laptops?~ck=mn",
                imageUrl : "//i.dell.com/das/dih.ashx/80h/sites/imagecontent/consumer/merchandizing/en/PublishingImages/magnum-category/laptop-xps-13-9350-touch-silver-front-140X109.png"
            },
            {
                itemTitle : "Alienware",
                type : "laptop",
                linkUrl : "www.alienware.com/Landings/laptops.aspx",
                imageUrl : "//i.dell.com/das/dih.ashx/80h/sites/imagecontent/products/PublishingImages/Polaris/AW13-115x76.png"
            },
            {
                itemTitle : "Chromebook",
                type : "laptop",
                linkUrl : "/en-us/shop/productdetails/chromebook-11-3120?~ck=mn",
                imageUrl : "//i.dell.com/das/dih.ashx/80h/sites/imagecontent/products/PublishingImages/category-images/polaris_cat_115x75_laptops_chromebook_11_thumb_1.png"
            }
            ]
        },
        {
            type : "inspiron",
            productLine : true,
            sectionTitle : "Inspiron",
            items : [
            {
                itemTitle : "Ispiron 3000 Series",
                type : "3000",
                linkUrl : "/en-us/shop/franchise/inspiron-laptops",
                imageUrl : "//i.dell.com/das/dih.ashx/169w/sites/imagecontent/products/PublishingImages/category-images/inspiron-2-in-1-laptops/inspiron_polaris_sub_cat_franchise_laptops_thumb_3000-new.jpg"
            },
            {
                itemTitle : "Inspiron 5000 Series",
                type : "5000",
                linkUrl : "/en-us/shop/franchise/inspiron-laptops",
                imageUrl : "//i.dell.com/das/dih.ashx/169w/sites/imagecontent/products/PublishingImages/category-images/inspiron-2-in-1-laptops/inspiron_polaris_sub_cat_franchise_laptops_thumb_5000.jpg"
            },
            {
                itemTitle : "Inspiron 7000 Series",
                type : "7000",
                linkUrl : "/en-us/shop/franchise/inspiron-laptops",
                imageUrl : "//i.dell.com/das/dih.ashx/169w/sites/imagecontent/products/PublishingImages/category-images/inspiron-2-in-1-laptops/inspiron_polaris_sub_cat_franchise_laptops_thumb_7000-new.jpg"
            }
            ]
        },
        {
            type : "xps",
            sectionTitle : "XPS",
            productLine : true,
            items : [
            {
                itemTitle : "XPS 12",
                type : "12",
                linkUrl : "//www.dell.com/en-us/shop/category/laptops/xps-laptops?~ck=mn",
                imageUrl : "//i.dell.com/das/dih.ashx/140x110/sites/imagecontent/products/publishingimages/category-images/polaris_cat_170x150_xps-12-laptops_thumb_1.png"
            },
            {
                itemTitle : "XPS 13",
                type : "13",
                linkUrl : "//www.dell.com/en-us/shop/category/laptops/xps-laptops?~ck=mn",
                imageUrl : "//i.dell.com/das/dih.ashx/140x110/sites/imagecontent/products/publishingimages/category-images/laptop-xps-13-9350-touch-silver-front-169x149.png"
            },
            {
                itemTitle : "XPS 15",
                type : "15",
                linkUrl : "//www.dell.com/en-us/shop/category/laptops/xps-laptops?~ck=mn",
                imageUrl : "//i.dell.com/das/dih.ashx/140x110/sites/imagecontent/products/publishingimages/category-images/laptop-xps-15-9550-touch-gray-front-169x149.png"
            }
            ]
        },
        {
            type : "chromebook",
            sectionTitle : "Chromebook",
            productLine : true,
            items : [
            {
                itemTitle : "Chromebook 11",
                type : "11",
                linkUrl : "//www.dell.com/en-us/shop/category/laptops/chromebook-laptops?~ck=mn",
                imageUrl : "//i.dell.com/das/dih.ashx/140x110/sites/imagecontent/products/publishingimages/category-images/polaris_cat_170x150_laptops_chromebook_11_thumb_1.png"
            },
            {
                itemTitle : "Chromebook 13",
                type : "13",
                linkUrl : "//www.dell.com/en-us/shop/category/laptops/chromebook-laptops?~ck=mn",
                imageUrl : "//i.dell.com/das/dih.ashx/140x110/sites/imagecontent/consumer/merchandizing/en/publishingimages/20823-notebook-chromebook-13-7310-170x150.png"
            }
            ]
        }
        ],
        suggestions : [
        {
            title : "Product Title",
            description: "Some description",
            linkUrl : "",
            imageUrl : "//i.dell.com/sites/content/DellMicroContent/Responsive_Images/english/_values/mast-forwork-laptops.png"
        },
        {
            title : "Product Other Title",
            description: "Some description",
            linkUrl : "",
            imageUrl : "//i.dell.com/sites/content/DellMicroContent/Responsive_Images/english/_values/mast-forhome-laptops2.png"
        }
        ]
    },
    desktops : {
        categories : [
        {
            type : "segment",
            sectionTitle : "Segment",
            items : [
            {
                itemTitle : "Laptops for Home",
                linkUrl : "",
                imageUrl : "//i.dell.com/sites/content/DellMicroContent/Responsive_Images/english/_values/mast-forhome-laptops2.png"
            },
            {
                itemTitle : "Laptops for Business",
                linkUrl : "",
                imageUrl : "//i.dell.com/sites/content/DellMicroContent/Responsive_Images/english/_values/mast-forwork-laptops.png"
            }
            ]
        },
        {
            type : "brand",
            sectionTitle : "Brand",
            items : [
            {
                itemTitle : "Ispiron",
                linkUrl : "",
                imageUrl : "//i.dell.com/das/dih.ashx/80h/sites/imagecontent/products/PublishingImages/category-images/inspiron-2-in-1-laptops/22431-home-laptop-inspiron-15-5559-115x75.png"
            },
            {
                itemTitle : "XPS",
                linkUrl : "",
                imageUrl : "//i.dell.com/das/dih.ashx/80h/sites/imagecontent/consumer/merchandizing/en/PublishingImages/magnum-category/laptop-xps-13-9350-touch-silver-front-140X109.png"
            },
            {
                itemTitle : "Alienware",
                linkUrl : "",
                imageUrl : "//i.dell.com/das/dih.ashx/80h/sites/imagecontent/products/PublishingImages/Polaris/AW13-115x76.png"
            },
            {
                itemTitle : "Chromebook",
                linkUrl : "",
                imageUrl : "//i.dell.com/das/dih.ashx/80h/sites/imagecontent/products/PublishingImages/category-images/polaris_cat_115x75_laptops_chromebook_11_thumb_1.png"
            }
            ]
        },
        {
            type : "product-line",
            sectionTitle : "Inspiron",
            items : [
            {
                itemTitle : "Ispiron 3000 Series",
                linkUrl : "",
                imageUrl : "//i.dell.com/das/dih.ashx/169w/sites/imagecontent/products/PublishingImages/category-images/inspiron-2-in-1-laptops/inspiron_polaris_sub_cat_franchise_laptops_thumb_3000-new.jpg"
            },
            {
                itemTitle : "Inspiron 5000 Series",
                linkUrl : "",
                imageUrl : "//i.dell.com/das/dih.ashx/169w/sites/imagecontent/products/PublishingImages/category-images/inspiron-2-in-1-laptops/inspiron_polaris_sub_cat_franchise_laptops_thumb_5000.jpg"
            },
            {
                itemTitle : "Inspiron 7000 Series",
                linkUrl : "",
                imageUrl : "//i.dell.com/das/dih.ashx/169w/sites/imagecontent/products/PublishingImages/category-images/inspiron-2-in-1-laptops/inspiron_polaris_sub_cat_franchise_laptops_thumb_7000-new.jpg"
            }
            ]
        },
        {
            type : "product-line",
            sectionTitle : "Inspiron",
            items : [
            {
                itemTitle : "Ispiron 3000 Series",
                linkUrl : "",
                imageUrl : "//i.dell.com/das/dih.ashx/169w/sites/imagecontent/products/PublishingImages/category-images/inspiron-2-in-1-laptops/inspiron_polaris_sub_cat_franchise_laptops_thumb_3000-new.jpg"
            },
            {
                itemTitle : "XPS",
                linkUrl : "",
                imageUrl : ""
            },
            {
                itemTitle : "Alienware",
                linkUrl : "",
                imageUrl : "//"
            },
            {
                itemTitle : "Chromebook",
                linkUrl : "",
                imageUrl : ""
            }
            ]
        },
        {
            type : "product-line",
            sectionTitle : "Inspiron",
            items : [
            {
                itemTitle : "Ispiron 3000 Series",
                linkUrl : "",
                imageUrl : "//i.dell.com/das/dih.ashx/169w/sites/imagecontent/products/PublishingImages/category-images/inspiron-2-in-1-laptops/inspiron_polaris_sub_cat_franchise_laptops_thumb_3000-new.jpg"
            },
            {
                itemTitle : "XPS",
                linkUrl : "",
                imageUrl : ""
            },
            {
                itemTitle : "Alienware",
                linkUrl : "",
                imageUrl : "//"
            },
            {
                itemTitle : "Chromebook",
                linkUrl : "",
                imageUrl : ""
            }
            ]
        },
        {
            type : "brand",
            sectionTitle : "Brand",
            items : [
            {
                itemTitle : "Ispiron",
                linkUrl : "",
                imageUrl : "//i.dell.com/das/dih.ashx/80h/sites/imagecontent/products/PublishingImages/category-images/inspiron-2-in-1-laptops/22431-home-laptop-inspiron-15-5559-115x75.png"
            },
            {
                itemTitle : "XPS",
                linkUrl : "",
                imageUrl : "//i.dell.com/das/dih.ashx/80h/sites/imagecontent/consumer/merchandizing/en/PublishingImages/magnum-category/laptop-xps-13-9350-touch-silver-front-140X109.png"
            },
            {
                itemTitle : "Alienware",
                linkUrl : "",
                imageUrl : "//i.dell.com/das/dih.ashx/80h/sites/imagecontent/products/PublishingImages/Polaris/AW13-115x76.png"
            },
            {
                itemTitle : "Chromebook",
                linkUrl : "",
                imageUrl : "//i.dell.com/das/dih.ashx/80h/sites/imagecontent/products/PublishingImages/category-images/polaris_cat_115x75_laptops_chromebook_11_thumb_1.png"
            }
            ]
        },
        {
            type : "brand",
            sectionTitle : "Brand",
            items : [
            {
                itemTitle : "Ispiron",
                linkUrl : "",
                imageUrl : "//i.dell.com/das/dih.ashx/80h/sites/imagecontent/products/PublishingImages/category-images/inspiron-2-in-1-laptops/22431-home-laptop-inspiron-15-5559-115x75.png"
            },
            {
                itemTitle : "XPS",
                linkUrl : "",
                imageUrl : "//i.dell.com/das/dih.ashx/80h/sites/imagecontent/consumer/merchandizing/en/PublishingImages/magnum-category/laptop-xps-13-9350-touch-silver-front-140X109.png"
            },
            {
                itemTitle : "Alienware",
                linkUrl : "",
                imageUrl : "//i.dell.com/das/dih.ashx/80h/sites/imagecontent/products/PublishingImages/Polaris/AW13-115x76.png"
            },
            {
                itemTitle : "Chromebook",
                linkUrl : "",
                imageUrl : "//i.dell.com/das/dih.ashx/80h/sites/imagecontent/products/PublishingImages/category-images/polaris_cat_115x75_laptops_chromebook_11_thumb_1.png"
            }
            ]
        }
        ],
        suggestions : [
        {
            title : "Product Title",
            description: "Some description",
            linkUrl : "",
            imageUrl : "//i.dell.com/sites/content/DellMicroContent/Responsive_Images/english/_values/mast-forwork-laptops.png"
        },
        {
            title : "Product Other Title",
            description: "Some description",
            linkUrl : "",
            imageUrl : "//i.dell.com/sites/content/DellMicroContent/Responsive_Images/english/_values/mast-forhome-laptops2.png"
        }
        ]
    }
};

var cartItems = [
{
    "Id": "f2a37829-64cf-4a2f-931d-f83db9a0345e",
    "IdWithoutSpecialCharacters": "f2a3782964cf4a2f931df83db9a0345e",
    "ProductId": "fncwh101sw",
    "Description": "Inspiron 11 3000 Non-Touch",
    "ShowProductStackDescription": false,
    "IsValid": true,
    "LeadTimeInfo": {
        "EstimatedShipDate": "6/6/2016",
        "ShowEstimatedShipDate": true,
        "ShowEstimatedDeliveryDate": false,
        "HasValidEstimatedDeliveryDate": false,
        "CanCalculateEstimatedDeliveryDate": true
    },
    "IsSavedCartItem": false,
    "SubTotalAmount": "$199.99",
    "DiscountsAndCouponsAmount": "$0.00",
    "DiscountsAndCouponsAmountValue": 0,
    "DiscountsAndCoupons": [],
    "ShowDiscountsAndCoupons": false,
    "DiscountsPopupTitle": "Additional Discounts & Coupons",
    "TotalAmount": "$199.99",
    "TotalAmountWithSubItems": "$199.99",
    "TotalAmountWithSubItemsValue": 199.99,
    "Quantity": 1,
    "QuantityWithSubItems": 1,
    "AllowChangeQuantity": true,
    "IsAssociatedItem": false,
    "ImageUrl": "https://si.cdn.dell.com/images/global/configurator/chassis/inspnb-11-3162-nt-wh-ft-120x107.jpg",
    "UnitPriceAmount": "$199.99",
    "ShowManufacturerPartNumber": false,
    "ShowDellPartNumber": false,
    "ShowCatalogNumber": true,
    "CatalogNumber": "29 fncwh101sw",
    "Components": [
    {
        "Name": "Inspiron 11 3000 Series",
        "Description": "Inspiron 11 3000 Series",
        "ProductCode": "RT3162",
        "Skus": [
        "210-AGPN"
        ]
    },
    {
        "Name": "Processor",
        "Description": "Intel� Celeron� Processor N3050 (2M Cache, up to 2.16 GHz)",
        "ProductCode": "C484MT",
        "Skus": [
        "338-BIMI"
        ]
    },
    {
        "Name": "Operating System",
        "Description": "Windows 10 Home, 64-bit, English",
        "ProductCode": "10HE6E",
        "Skus": [
        "619-AHCP"
        ]
    },
    {
        "Name": "Memory",
        "Description": "2GB Single Channel DDR3L 1600MHz",
        "ProductCode": "2GBINTG",
        "Skus": [
        "370-ACLT"
        ]
    },
    {
        "Name": "Hard Drive",
        "Description": "32GB eMMC",
        "ProductCode": "32EMMC",
        "Skus": [
        "400-ACOU"
        ]
    },
    {
        "Name": "Video Card",
        "Description": "Intel� HD Graphics",
        "ProductCode": "INTHD",
        "Skus": [
        "490-BCUW"
        ]
    },
    {
        "Name": "Display",
        "Description": "11.6-inch HD (1366 x 768) Anti-Glare LED-Backlit Display",
        "ProductCode": "HDLCD",
        "Skus": [
        "391-BCNZ"
        ]
    },
    {
        "Name": "Color Choice",
        "Description": "Alpine White",
        "ProductCode": "CVRWHT",
        "Skus": [
        "320-BBVK"
        ]
    },
    {
        "Name": "Wireless",
        "Description": "802.11ac + Bluetooth 4.0, Dual Band 2.4&5 GHz, 1x1",
        "ProductCode": "IW3160",
        "Skus": [
        "555-BBTG"
        ]
    },
    {
        "Name": "Primary Battery",
        "Description": "32 WHr, 2-Cell Battery (Integrated)",
        "ProductCode": "2CBATT",
        "Skus": [
        "451-BBTY"
        ]
    },
    {
        "Name": "Keyboard",
        "Description": "Keyboard ENG US",
        "ProductCode": "WHKBENG",
        "Skus": [
        "346-BBVY",
        "580-AEQZ"
        ]
    },
    {
        "Name": "Power Supply",
        "Description": "45 Watt AC Adaptor",
        "ProductCode": "45WTAC",
        "Skus": [
        "450-AFKG"
        ]
    },
    {
        "Name": "Cable",
        "Description": "Power Cord, US/CAN",
        "ProductCode": "PWRENG",
        "Skus": [
        "450-ABLO"
        ]
    },
    {
        "Name": "Business Support",
        "Description": "Return Label, Dell, RETURNPOL",
        "ProductCode": "RTRNLB8",
        "Skus": [
        "811-BBBC"
        ]
    },
    {
        "Name": "Documentation/Disks",
        "Description": "WIN 10, English-French",
        "ProductCode": "WINEFD",
        "Skus": [
        "340-AGIK"
        ]
    },
    {
        "Name": "Packaging Label",
        "Description": "Dell.com Order",
        "ProductCode": "NORTL",
        "Skus": [
        "332-1530"
        ]
    },
    {
        "Name": "Non-Microsoft Application Software",
        "Description": "Additional Software",
        "ProductCode": "INVW10",
        "Skus": [
        "658-BDBZ"
        ]
    },
    {
        "Name": "Processor Branding",
        "Description": "Intel� Celeron� Label",
        "ProductCode": "CELABL",
        "Skus": [
        "340-AQVB"
        ]
    },
    {
        "Name": "Packaging",
        "Description": "Shipping Material",
        "ProductCode": "SHPMTL",
        "Skus": [
        "328-BCHL"
        ]
    },
    {
        "Name": "E-Star",
        "Description": "Energy Star Compliant",
        "ProductCode": "ESTAR6",
        "Skus": [
        "340-AAPZ"
        ]
    },
    {
        "Name": "Order Information",
        "Description": "Shipping Information",
        "ProductCode": "USNONE",
        "Skus": [
        "332-1286"
        ]
    },
    {
        "Name": "Systems Management",
        "Description": "Windows System Drive,3162",
        "ProductCode": "WINSW",
        "Skus": [
        "340-AVED"
        ]
    },
    {
        "Name": "Placemat",
        "Description": "WIN 10 Placemat",
        "ProductCode": "PLMT10",
        "Skus": [
        "340-AUXE"
        ]
    },
    {
        "Name": "Driver",
        "Description": "802.11ac + Bluetooth 4.0, Dual Band 2.4&5 GHz, 1x1 Wireless Driver",
        "ProductCode": "SWD3160",
        "Skus": [
        "340-AUPJ"
        ]
    },
    {
        "Name": "Operating System Recovery Options",
        "Description": "Operating System Recovery Media Not Included",
        "ProductCode": "NODBRM",
        "Skus": [
        "340-ACQQ"
        ]
    },
    {
        "Name": "FGA Module",
        "Description": "ROCKET1701_101/US1/BTS",
        "ProductCode": "FG0005",
        "Skus": [
        "998-BVCK"
        ]
    },
    {
        "Name": "Label",
        "Description": "Regulatory Label",
        "ProductCode": "REGLBL",
        "Skus": [
        "389-BIUD"
        ]
    },
    {
        "Name": "Office 2016 - Word, Excel, Powerpoint & more",
        "Description": "Microsoft Office 30 Day Trial",
        "ProductCode": "OTRT13M",
        "Skus": [
        "658-BCSB"
        ]
    },
    {
        "Name": "Security Software  <span class=\"dellRecommended\">Inspiron PCs on Dell.com come with 1yr McAfee LiveSafe, $89 value.</span>",
        "Description": "McAfee LiveSafe 12 Month Subscription",
        "ProductCode": "LSIA12M",
        "Skus": [
        "525-0033",
        "658-BCCO"
        ]
    },
    {
        "Name": "Support",
        "Description": "1 Year Ltd Hware Warranty: Mail-in; Customer supplies box, Dell pays shipping",
        "ProductCode": "MI1",
        "Skus": [
        "806-6351",
        "806-6352"
        ]
    },
    {
        "Name": "Hard Drive Software",
        "Description": "Windows 10 OS Info -32G",
        "ProductCode": "W10COP",
        "Skus": [
        "340-ARLX"
        ]
    }
    ],
    "ShowComponents": true,
    "Alerts": [],
    "EvergreenMessages": [],
    "HasBundledItems": false,
    "BundledItems": [],
    "IsBundledItem": false,
    "IsFastTrack": true,
    "Metadata": {
        "itemType": "ConfigItem",
        "brand": 7,
        "family": 11989
    },
    "HasDeliveryMessageOverride": false,
    "StopSelling": false,
    "IsStockItem": true,
    "SubTotalAmountValue": 199.99,
    "ConfigurationIdentifier": "1~fncwh101sw~19~en~us~1__572;FG0005;1"
},
{
    "Id": "a30b3fb6-4e0f-44d0-bd33-423c5decdd9d",
    "IdWithoutSpecialCharacters": "a30b3fb64e0f44d0bd33423c5decdd9d",
    "ProductId": "fncwv2310s",
    "Description": "Inspiron 15 5000 Non-Touch",
    "ShowProductStackDescription": false,
    "IsValid": true,
    "LeadTimeInfo": {
        "EstimatedShipDate": "6/6/2016",
        "ShowEstimatedShipDate": true,
        "ShowEstimatedDeliveryDate": false,
        "HasValidEstimatedDeliveryDate": false,
        "CanCalculateEstimatedDeliveryDate": true
    },
    "IsSavedCartItem": false,
    "SubTotalAmount": "$599.99",
    "DiscountsAndCouponsAmount": "-$50.00",
    "DiscountsAndCouponsAmountValue": 50,
    "DiscountsAndCoupons": [
    {
        "CampaignId": 553005,
        "Amount": "-$50.00",
        "ShortDescription": "Inspiron 15 5000 Series price includes $50 instant discount.",
        "LongDescription": "Inspiron 15 5000 Series price includes $50 instant discount.",
        "LegalDescription": "Specifications, availability and terms of offer may change without notice. Taxes and shipping charges are extra, and vary. Offer for U.S. Dell Home Systems Co. new system online purchases only.  Dell cannot be responsible for pricing or other errors, and reserves the right to cancel orders arising from such errors.",
        "ExpiryDate": "1/1/2019",
        "HasExpiryDate": true,
        "HasExpiryTextOverride": false,
        "AllowRemove": false,
        "ShowAmount": true
    },
    {
        "CampaignId": 582257,
        "Amount": "$0.00",
        "ShortDescription": "All Inspiron & XPS PCs on Dell.com now come protected with 1yr of McAfee LiveSafe, $89 value.",
        "LongDescription": "All Inspiron & XPS PCs on Dell.com now come protected with 1yr of McAfee LiveSafe, $89 value.  Upgrade to 36 months for only $49.",
        "LegalDescription": "",
        "ExpiryDate": "5/5/2017",
        "HasExpiryDate": true,
        "HasExpiryTextOverride": false,
        "AllowRemove": false,
        "ShowAmount": false
    }
    ],
    "ShowDiscountsAndCoupons": true,
    "DiscountsPopupTitle": "Additional Discounts & Coupons",
    "TotalAmount": "$549.99",
    "TotalAmountWithSubItems": "$549.99",
    "TotalAmountWithSubItemsValue": 549.99,
    "Quantity": 1,
    "QuantityWithSubItems": 1,
    "AllowChangeQuantity": true,
    "IsAssociatedItem": false,
    "ImageUrl": "https://si.cdn.dell.com/images/global/configurator/chassis/insp-15-5551-nt-blk-ft-120x107.jpg",
    "UnitPriceAmount": "$599.99",
    "ShowManufacturerPartNumber": false,
    "ShowDellPartNumber": false,
    "ShowCatalogNumber": true,
    "CatalogNumber": "29 fncwv2310s",
    "Components": [
    {
        "Name": "Base",
        "Description": "Inspiron 15 5000 Series",
        "ProductCode": "TL5559",
        "Skus": [
        "210-AEYM"
        ]
    },
    {
        "Name": "Processor",
        "Description": "6th Generation Intel� Core� i5-6200U Processor (3M Cache, up to 2.80 GHz)",
        "ProductCode": "533NW3",
        "Skus": [
        "338-BHOV"
        ]
    },
    {
        "Name": "Operating System",
        "Description": "Windows 10 Home, 64-bit, English",
        "ProductCode": "10H64E",
        "Skus": [
        "619-AHCQ"
        ]
    },
    {
        "Name": "Memory",
        "Description": "8GB, 1600MHz, DDR3L; up to 16GB (additional memory sold separately)",
        "ProductCode": "8G2D3L",
        "Skus": [
        "370-AANL"
        ]
    },
    {
        "Name": "Hard Drive",
        "Description": "1TB 5400 rpm Hard Drive",
        "ProductCode": "1TB54",
        "Skus": [
        "400-AAZU"
        ]
    },
    {
        "Name": "Video Card",
        "Description": "Intel� HD Graphics 520",
        "ProductCode": "INTHD",
        "Skus": [
        "490-BCUW"
        ]
    },
    {
        "Name": "Display",
        "Description": "15.6-inch HD (1366 x 768) Truelife LED-Backlit Display",
        "ProductCode": "HDLCD",
        "Skus": [
        "391-BBZM"
        ]
    },
    {
        "Name": "CD ROM/DVD ROM",
        "Description": "Tray load DVD Drive (Reads and Writes to DVD/CD)",
        "ProductCode": "8DVDRW",
        "Skus": [
        "429-AAJV"
        ]
    },
    {
        "Name": "Color Choice",
        "Description": "Theoretical Gray, Matte Metallic IMR",
        "ProductCode": "CVRSLNT",
        "Skus": [
        "320-BBOT"
        ]
    },
    {
        "Name": "Wireless",
        "Description": "802.11ac + Bluetooth 4.0, Dual Band 2.4&5 GHz, 1x1",
        "ProductCode": "3160",
        "Skus": [
        "555-BCIY"
        ]
    },
    {
        "Name": "Primary Battery",
        "Description": "40 WHr, 4-Cell Battery (removable)",
        "ProductCode": "4CBATT",
        "Skus": [
        "451-BBMG"
        ]
    },
    {
        "Name": "Keyboard",
        "Description": "Backlit Keyboard, English",
        "ProductCode": "ENGKBBL",
        "Skus": [
        "580-ABYO"
        ]
    },
    {
        "Name": "Power Supply",
        "Description": "45 Watt AC Adaptor",
        "ProductCode": "45WTAC",
        "Skus": [
        "450-AEHK"
        ]
    },
    {
        "Name": "Cable",
        "Description": "Power Cord, US/CAN",
        "ProductCode": "PWRENG",
        "Skus": [
        "450-ABLO"
        ]
    },
    {
        "Name": "Optical Software",
        "Description": "Cyberlink Media Suite Essentials without Media",
        "ProductCode": "W8DVDSW",
        "Skus": [
        "658-BBTV"
        ]
    },
    {
        "Name": "Business Support",
        "Description": "Retail Return Label",
        "ProductCode": "RTRNLB8",
        "Skus": [
        "811-BBBC"
        ]
    },
    {
        "Name": "Documentation/Disks",
        "Description": "Documentation, English-French",
        "ProductCode": "W81EFD",
        "Skus": [
        "340-AGIK"
        ]
    },
    {
        "Name": "Support Tech Sheet and Powercord",
        "Description": "Dell.com Order",
        "ProductCode": "NORTL",
        "Skus": [
        "332-1530"
        ]
    },
    {
        "Name": "Labels",
        "Description": "Palmrest Label,USENG, Win8/10",
        "ProductCode": "PLUSW10",
        "Skus": [
        "389-BHED"
        ]
    },
    {
        "Name": "Non-Microsoft Application Software",
        "Description": "Additional Software",
        "ProductCode": "INSW10",
        "Skus": [
        "658-BCUN"
        ]
    },
    {
        "Name": "Processor Branding",
        "Description": "Intel� Core� i5 Label",
        "ProductCode": "CI5SML",
        "Skus": [
        "389-BHIB"
        ]
    },
    {
        "Name": "Packaging",
        "Description": "Shipping Material",
        "ProductCode": "SHPMTL",
        "Skus": [
        "328-BCCD",
        "340-AAPP"
        ]
    },
    {
        "Name": "Energy Efficiency Options",
        "Description": "ESTAR 5.0/6.0",
        "ProductCode": "ESTAR5",
        "Skus": [
        "340-AAPZ"
        ]
    },
    {
        "Name": "Shipping SKU's",
        "Description": "Shipping Information",
        "ProductCode": "USNONE",
        "Skus": [
        "332-1286"
        ]
    },
    {
        "Name": "Systems Management",
        "Description": "Windows System Driver,5559",
        "ProductCode": "WINSSW",
        "Skus": [
        "631-AAQV"
        ]
    },
    {
        "Name": "Placemat",
        "Description": "Placemat Documentation, Win 10",
        "ProductCode": "PLMTW10",
        "Skus": [
        "340-ARSY"
        ]
    },
    {
        "Name": "Driver",
        "Description": "802.11ac + Bluetooth 4.0, Dual Band 2.4&5 GHz, 1x1 Wireless Driver",
        "ProductCode": "SW3160",
        "Skus": [
        "612-BBBZ"
        ]
    },
    {
        "Name": "Operating System Recovery Options",
        "Description": "Operating System Recovery Media Not Included",
        "ProductCode": "NODBRM",
        "Skus": [
        "340-ACQQ"
        ]
    },
    {
        "Name": "FGA Module",
        "Description": "TULIP15SKL1701_2310/US/BTS",
        "ProductCode": "FG0047",
        "Skus": [
        "998-BUPC"
        ]
    },
    {
        "Name": "Label",
        "Description": "Regulatory Label, UMA",
        "ProductCode": "LBLUMA",
        "Skus": [
        "389-BHDM"
        ]
    },
    {
        "Name": "Security Software  <span class=\"dellRecommended\">Inspiron PCs on Dell.com come with 1yr McAfee LiveSafe, $89 value.</span>",
        "Description": "McAfee LiveSafe 12 Month Subscription",
        "ProductCode": "LSIA12M",
        "Skus": [
        "525-0033",
        "658-BCCO"
        ]
    },
    {
        "Name": "Office 2016 - Word, Excel, Powerpoint & more",
        "Description": "Microsoft Office 30 Day Trial",
        "ProductCode": "OTRT13M",
        "Skus": [
        "658-BCSB"
        ]
    },
    {
        "Name": "Support",
        "Description": "1 Year Ltd Hware Warranty: Mail-in; Customer supplies box, Dell pays shipping",
        "ProductCode": "MI1",
        "Skus": [
        "801-2700",
        "801-2733"
        ]
    }
    ],
    "ShowComponents": true,
    "Alerts": [],
    "EvergreenMessages": [],
    "HasBundledItems": false,
    "BundledItems": [],
    "IsBundledItem": false,
    "IsFastTrack": true,
    "Metadata": {
        "itemType": "ConfigItem",
        "brand": 7,
        "family": 11718
    },
    "HasDeliveryMessageOverride": false,
    "StopSelling": false,
    "IsStockItem": true,
    "SubTotalAmountValue": 599.99,
    "ConfigurationIdentifier": "1~fncwv2310s~19~en~us~1__572;FG0047;1"
},
{
    "Id": "d8c8f3b9-a252-41b5-9ba5-e1189b17c69e",
    "IdWithoutSpecialCharacters": "d8c8f3b9a25241b59ba5e1189b17c69e",
    "ProductId": "dncwsbb0014b",
    "Description": "New Inspiron 15 7000 2-in-1",
    "ShowProductStackDescription": false,
    "IsValid": true,
    "LeadTimeInfo": {
        "EstimatedShipDate": "6/16/2016",
        "ShowEstimatedShipDate": true,
        "ShowEstimatedDeliveryDate": false,
        "HasValidEstimatedDeliveryDate": false,
        "CanCalculateEstimatedDeliveryDate": true
    },
    "IsSavedCartItem": false,
    "SubTotalAmount": "$999.99",
    "DiscountsAndCouponsAmount": "$0.00",
    "DiscountsAndCouponsAmountValue": 0,
    "DiscountsAndCoupons": [
    {
        "CampaignId": 571234,
        "Amount": "$0.00",
        "ShortDescription": "12 mo special financing when you spend $999+",
        "LongDescription": "12 months special financing on new PCs $999 or more with Dell Preferred Account!",
        "LegalDescription": "<!-- \r\n- 12 months special financing is a No Interest if Paid in Full by Your Due Date in July, 2017 promotion on new PCs $999 or more and applies only to the amount purchased with Dell Preferred Account.\r\n- Your Standard Rate is ${APR}.  This APR will vary with the market based on the Prime Rate.\r\n- Interest will be charged to your account at the Standard Rate from the transaction posting date if the purchase balance is not paid in full by the end of the promotional period.  In addition, your Standard Rate will apply to the remaining balance.\r\n- To avoid accrued interest charges, minimum monthly payments are required and the balance must be paid by the end of your promotional period.\r\n- Minimum monthly payments are required, but may not pay your purchase in full by the end of the promotional period due to purchase amount, promotion length, additional purchases or allocation of payments in excess of the minimum payment. \r\n- Minimum purchase amount may be required.\r\n--> \r\nThe \"12 months special financing\" promotional financing includes new PCs $999 or more purchased with your Dell Preferred Account.  You must have adequate available credit to purchase.  Pay your plan balance in full by your payment due date in July, 2017 or accrued interest will be assessed. Minimum monthly payments are required, but may not pay your purchase in full by the end of the promotional period due to purchase amount, promotion length, additional purchases or allocation of payments in excess of the minimum payment. Interest accrues at the Standard Rate (this APR will vary with the market based on the Prime Rate) from the transaction posting date and will be charged to the account if you do not pay your plan balance in full by your payment due date in July, 2017, or if you fail to make a required minimum payment at any time during the promotional period.  Promotional financing features apply only to the amount purchased with the Dell Preferred Account.   \r\n\r\n<p>Subject to credit approval.  WebBank determines creditworthiness, APR, credit limit, and qualification for promotional offers.  Qualifying for the Dell Preferred Account does not guarantee offer of promotional financing features.  You must purchase this item with your Dell Preferred Account and must have adequate available credit to take advantage of this promotion. Minimum purchase amount may be required</p>",
        "ExpiryDate": "6/30/2016",
        "HasExpiryDate": true,
        "HasExpiryTextOverride": false,
        "AllowRemove": false,
        "ShowAmount": false
    }
    ],
    "ShowDiscountsAndCoupons": true,
    "DiscountsPopupTitle": "Additional Discounts & Coupons",
    "TotalAmount": "$999.99",
    "TotalAmountWithSubItems": "$999.99",
    "TotalAmountWithSubItemsValue": 999.99,
    "Quantity": 1,
    "QuantityWithSubItems": 1,
    "AllowChangeQuantity": true,
    "IsAssociatedItem": false,
    "ImageUrl": "https://si.cdn.dell.com/images/global/configurator/chassis/insp-15-7569-gry-ft-win-120x107.jpg",
    "UnitPriceAmount": "$999.99",
    "ShowManufacturerPartNumber": false,
    "ShowDellPartNumber": false,
    "ShowCatalogNumber": true,
    "CatalogNumber": "29 dncwsbb0014b",
    "Components": [
    {
        "Name": "Inspiron 15 7000 Series",
        "Description": "Inspiron 15 7000 Series",
        "ProductCode": "SL7569",
        "Skus": [
        "210-AHPJ"
        ]
    },
    {
        "Name": "Processor",
        "Description": "6th Generation Intel� Core� i7-6500U Processor (4M Cache, up to 3.10 GHz)",
        "ProductCode": "7727VW",
        "Skus": [
        "338-BJJD"
        ]
    },
    {
        "Name": "Operating System",
        "Description": "Windows 10 Home 64-bit English",
        "ProductCode": "10HHEE",
        "Skus": [
        "619-AHCY"
        ]
    },
    {
        "Name": "Memory",
        "Description": "12GB DDR4 at 2133MHz (4GBx1+8GBx1)",
        "ProductCode": "12G2D",
        "Skus": [
        "370-ACFB"
        ]
    },
    {
        "Name": "Hard Drive",
        "Description": "512GB Solid State Drive",
        "ProductCode": "512SSD",
        "Skus": [
        "400-AMQD"
        ]
    },
    {
        "Name": "Video Card",
        "Description": "Intel� HD Graphics 520",
        "ProductCode": "INTHD",
        "Skus": [
        "490-BBRM"
        ]
    },
    {
        "Name": "LCD",
        "Description": "15.6-inch FHD (1920 x 1080) Truelife LED-Backlit Touch Display with Wide Viewing Angles",
        "ProductCode": "TFHDIRC",
        "Skus": [
        "391-BCRW"
        ]
    },
    {
        "Name": "Color Choice",
        "Description": "Silver",
        "ProductCode": "FHDGRAY",
        "Skus": [
        "320-BBXH"
        ]
    },
    {
        "Name": "Wireless",
        "Description": "Intel� Dual Band Wireless-AC 3165 + Bluetooth 4.0",
        "ProductCode": "3165",
        "Skus": [
        "555-BCJN"
        ]
    },
    {
        "Name": "Primary Battery",
        "Description": "42 WHr, 3-Cell Battery (integrated)",
        "ProductCode": "42BATT",
        "Skus": [
        "451-BBVN"
        ]
    },
    {
        "Name": "Keyboard",
        "Description": "Backlit Keyboard",
        "ProductCode": "ENGKBD",
        "Skus": [
        "346-BBXO",
        "580-AFCD"
        ]
    },
    {
        "Name": "Power Supply",
        "Description": "45 Watt AC Adaptor",
        "ProductCode": "45WTAC",
        "Skus": [
        "450-AEHK"
        ]
    },
    {
        "Name": "Cable",
        "Description": "Power Cord,125V,1M,US",
        "ProductCode": "PWRENG",
        "Skus": [
        "450-ABLO"
        ]
    },
    {
        "Name": "Business Support",
        "Description": "Return Label",
        "ProductCode": "RTRNLB",
        "Skus": [
        "811-BBBC"
        ]
    },
    {
        "Name": "Documentation/Disks",
        "Description": "Documentation, English-French",
        "ProductCode": "W10EFD",
        "Skus": [
        "340-AGIK"
        ]
    },
    {
        "Name": "Packaging Label",
        "Description": "Dell.com Order",
        "ProductCode": "NORTL",
        "Skus": [
        "332-1530"
        ]
    },
    {
        "Name": "Labels",
        "Description": "Palmrest Label",
        "ProductCode": "PLMENW",
        "Skus": [
        "389-BJTR"
        ]
    },
    {
        "Name": "Non-Microsoft Application Software",
        "Description": "Additional Software",
        "ProductCode": "INSW10",
        "Skus": [
        "658-BCUN",
        "658-BDFL"
        ]
    },
    {
        "Name": "Processor Branding",
        "Description": "Intel� Label CI7",
        "ProductCode": "CI7",
        "Skus": [
        "389-BHLE"
        ]
    },
    {
        "Name": "Packaging",
        "Description": "Shipping Material, Direct",
        "ProductCode": "SHPMDIR",
        "Skus": [
        "328-BCHX"
        ]
    },
    {
        "Name": "E-Star",
        "Description": "Energy Star Compliant",
        "ProductCode": "ESTAR6",
        "Skus": [
        "340-AAPZ"
        ]
    },
    {
        "Name": "Order Information",
        "Description": "Shipping Information",
        "ProductCode": "USNONE",
        "Skus": [
        "332-1286"
        ]
    },
    {
        "Name": "Systems Management",
        "Description": "Windows System Driver, 7569",
        "ProductCode": "WINSW",
        "Skus": [
        "631-AAYD"
        ]
    },
    {
        "Name": "Placemat",
        "Description": "Placemat Documentation",
        "ProductCode": "PLCMT10",
        "Skus": [
        "340-BBVN"
        ]
    },
    {
        "Name": "Driver",
        "Description": "802.11ac + Bluetooth 4.0, Dual Band 2.4&5 GHz, 1x1 Wireless Driver",
        "ProductCode": "SW3165",
        "Skus": [
        "340-BBVK"
        ]
    },
    {
        "Name": "Operating System Recovery Options",
        "Description": "Operating System Recovery Media Not Included",
        "ProductCode": "NODBRM",
        "Skus": [
        "340-ACQQ"
        ]
    },
    {
        "Name": "FGA Module",
        "Description": "Inspiron75691703_014_P/BTO",
        "ProductCode": "FG0007",
        "Skus": [
        "998-BYIL"
        ]
    },
    {
        "Name": "Label",
        "Description": "System Regulatory Label",
        "ProductCode": "REGLBL",
        "Skus": [
        "389-BJTE"
        ]
    },
    {
        "Name": "Microsoft Office Productivity Software � Word, Excel, Powerpoint & more",
        "Description": "Microsoft Office 30 Day Trial",
        "ProductCode": "OTRT13M",
        "Skus": [
        "658-BCSB"
        ]
    },
    {
        "Name": "Security Software",
        "Description": "McAfee LiveSafe 12 Month Subscription",
        "ProductCode": "LSIA12M",
        "Skus": [
        "525-0033",
        "658-BCCO"
        ]
    },
    {
        "Name": "Support",
        "Description": "1 Year Ltd Hware Warranty: Mail-in; Customer supplies box, Dell pays shipping",
        "ProductCode": "MI1",
        "Skus": [
        "801-2700",
        "801-2733"
        ]
    }
    ],
    "ShowComponents": true,
    "Alerts": [],
    "EvergreenMessages": [],
    "HasBundledItems": false,
    "BundledItems": [],
    "IsBundledItem": false,
    "IsFastTrack": false,
    "Metadata": {
        "itemType": "ConfigItem",
        "brand": 7,
        "family": 12119
    },
    "DeliveryMessageOverride": "Ships in 6-8 business days",
    "HasDeliveryMessageOverride": true,
    "StopSelling": false,
    "IsStockItem": false,
    "SubTotalAmountValue": 999.99,
    "ConfigurationIdentifier": "1~dncwsbb0014b~19~en~us~1__572;FG0007;1"
},
{
    "Id": "4c32235a-fabb-408b-af72-30b832d50157",
    "IdWithoutSpecialCharacters": "4c32235afabb408baf7230b832d50157",
    "ProductId": "dncwi1407h",
    "Description": "XPS 12 2-in-1",
    "ShowProductStackDescription": false,
    "IsValid": true,
    "LeadTimeInfo": {
        "EstimatedShipDate": "7/22/2016",
        "ShowEstimatedShipDate": true,
        "ShowEstimatedDeliveryDate": false,
        "HasValidEstimatedDeliveryDate": false,
        "CanCalculateEstimatedDeliveryDate": true
    },
    "IsSavedCartItem": false,
    "SubTotalAmount": "$999.99",
    "DiscountsAndCouponsAmount": "$0.00",
    "DiscountsAndCouponsAmountValue": 0,
    "DiscountsAndCoupons": [
    {
        "CampaignId": 571234,
        "Amount": "$0.00",
        "ShortDescription": "12 mo special financing when you spend $999+",
        "LongDescription": "12 months special financing on new PCs $999 or more with Dell Preferred Account!",
        "LegalDescription": "<!-- \r\n- 12 months special financing is a No Interest if Paid in Full by Your Due Date in July, 2017 promotion on new PCs $999 or more and applies only to the amount purchased with Dell Preferred Account.\r\n- Your Standard Rate is ${APR}.  This APR will vary with the market based on the Prime Rate.\r\n- Interest will be charged to your account at the Standard Rate from the transaction posting date if the purchase balance is not paid in full by the end of the promotional period.  In addition, your Standard Rate will apply to the remaining balance.\r\n- To avoid accrued interest charges, minimum monthly payments are required and the balance must be paid by the end of your promotional period.\r\n- Minimum monthly payments are required, but may not pay your purchase in full by the end of the promotional period due to purchase amount, promotion length, additional purchases or allocation of payments in excess of the minimum payment. \r\n- Minimum purchase amount may be required.\r\n--> \r\nThe \"12 months special financing\" promotional financing includes new PCs $999 or more purchased with your Dell Preferred Account.  You must have adequate available credit to purchase.  Pay your plan balance in full by your payment due date in July, 2017 or accrued interest will be assessed. Minimum monthly payments are required, but may not pay your purchase in full by the end of the promotional period due to purchase amount, promotion length, additional purchases or allocation of payments in excess of the minimum payment. Interest accrues at the Standard Rate (this APR will vary with the market based on the Prime Rate) from the transaction posting date and will be charged to the account if you do not pay your plan balance in full by your payment due date in July, 2017, or if you fail to make a required minimum payment at any time during the promotional period.  Promotional financing features apply only to the amount purchased with the Dell Preferred Account.   \r\n\r\n<p>Subject to credit approval.  WebBank determines creditworthiness, APR, credit limit, and qualification for promotional offers.  Qualifying for the Dell Preferred Account does not guarantee offer of promotional financing features.  You must purchase this item with your Dell Preferred Account and must have adequate available credit to take advantage of this promotion. Minimum purchase amount may be required</p>",
        "ExpiryDate": "6/30/2016",
        "HasExpiryDate": true,
        "HasExpiryTextOverride": false,
        "AllowRemove": false,
        "ShowAmount": false
    }
    ],
    "ShowDiscountsAndCoupons": true,
    "DiscountsPopupTitle": "Additional Discounts & Coupons",
    "TotalAmount": "$999.99",
    "TotalAmountWithSubItems": "$999.99",
    "TotalAmountWithSubItemsValue": 999.99,
    "Quantity": 1,
    "QuantityWithSubItems": 1,
    "AllowChangeQuantity": true,
    "IsAssociatedItem": false,
    "ImageUrl": "https://si.cdn.dell.com/images/global/configurator/chassis/xps-12-9250-2-n-1-bk-ft-120x107.jpg",
    "UnitPriceAmount": "$999.99",
    "ShowManufacturerPartNumber": false,
    "ShowDellPartNumber": false,
    "ShowCatalogNumber": true,
    "CatalogNumber": "29 dncwi1407h",
    "Components": [
    {
        "Name": "XPS 12",
        "Description": "XPS 12",
        "ProductCode": "XPS12",
        "Skus": [
        "210-AFDI"
        ]
    },
    {
        "Name": "Processor",
        "Description": "6th Generation Intel Core� m5 6Y57 (4M Cache, up to 2.8 GHz)",
        "ProductCode": "5X30RP",
        "Skus": [
        "338-BICX"
        ]
    },
    {
        "Name": "Operating System",
        "Description": "Windows 10 Home, 64-bit, English",
        "ProductCode": "10HHEE",
        "Skus": [
        "619-AHCY"
        ]
    },
    {
        "Name": "Memory",
        "Description": "8GB LPDDR3-1600MHz",
        "ProductCode": "8GB",
        "Skus": [
        "370-ACFS"
        ]
    },
    {
        "Name": "Hard Drive",
        "Description": "128GB Solid State Drive",
        "ProductCode": "128SSD",
        "Skus": [
        "400-AKXP"
        ]
    },
    {
        "Name": "Video Card",
        "Description": "Intel� HD Graphics 515",
        "ProductCode": "UMA",
        "Skus": [
        "490-BCTD"
        ]
    },
    {
        "Name": "LCD",
        "Description": "12.5\" FHD (1920x1080) touch",
        "ProductCode": "FHD",
        "Skus": [
        "391-BCGS"
        ]
    },
    {
        "Name": "Wireless",
        "Description": "Intel 8260 2x2 802.11ac 2.4/5GHz + Bluetooth 4.1",
        "ProductCode": "8260AC",
        "Skus": [
        "555-BCNX"
        ]
    },
    {
        "Name": "Primary Battery",
        "Description": "30WHr Integrated Battery",
        "ProductCode": "30W",
        "Skus": [
        "451-BBQG"
        ]
    },
    {
        "Name": "Keyboard",
        "Description": "XPS 12 Premier Keyboard with Dell Premier Magnetic Folio (82 Keys)",
        "ProductCode": "MKBDEN",
        "Skus": [
        "580-AEQY",
        "583-BCUH"
        ]
    },
    {
        "Name": "Driver",
        "Description": "8260 Wireless SW",
        "ProductCode": "WLAN82",
        "Skus": [
        "389-BIOI",
        "658-BDCG"
        ]
    },
    {
        "Name": "Mobile Broadband",
        "Description": "Mobile Broadband Not Included",
        "ProductCode": "WLAN",
        "Skus": [
        "556-BBNM"
        ]
    },
    {
        "Name": "Cable",
        "Description": "E5 Power Cord for 3-pin Adapter (US/China)",
        "ProductCode": "PWREDAO",
        "Skus": [
        "340-AAMU"
        ]
    },
    {
        "Name": "Systems Management",
        "Description": "Non-Vpro Systems Managment SW",
        "ProductCode": "NVPRO",
        "Skus": [
        "631-AAWX",
        "631-AAWY"
        ]
    },
    {
        "Name": "Placemat",
        "Description": "XPS 12 Placemat",
        "ProductCode": "PLCMT",
        "Skus": [
        "340-AUQD"
        ]
    },
    {
        "Name": "E-Star",
        "Description": "E-Star Qualified",
        "ProductCode": "ESTAR",
        "Skus": [
        "387-BBKZ"
        ]
    },
    {
        "Name": "Business Support",
        "Description": "Dell.com Order",
        "ProductCode": "NORTL",
        "Skus": [
        "332-0550"
        ]
    },
    {
        "Name": "Packaging Label",
        "Description": "Dell.com Order",
        "ProductCode": "NORTL",
        "Skus": [
        "332-1530"
        ]
    },
    {
        "Name": "Documentation/Disks",
        "Description": "Safety/Environment and Regulatory Guide (English/French Multi-language)",
        "ProductCode": "ENGMUI",
        "Skus": [
        "340-AGIK"
        ]
    },
    {
        "Name": "Packaging",
        "Description": "XPS 12 Shipping Material",
        "ProductCode": "SHIP",
        "Skus": [
        "340-AAPP",
        "340-AUQC",
        "460-BBVL"
        ]
    },
    {
        "Name": "Power Supply",
        "Description": "30 Watt AC Adapter",
        "ProductCode": "30W",
        "Skus": [
        "450-AEVT"
        ]
    },
    {
        "Name": "FGA Module",
        "Description": "VEN1703_1407/US/CA/BTO",
        "ProductCode": "FG0010",
        "Skus": [
        "998-BUQK"
        ]
    },
    {
        "Name": "Back Cover",
        "Description": "WLAN System Back Cover",
        "ProductCode": "WLAN",
        "Skus": [
        "320-BBSD"
        ]
    },
    {
        "Name": "Processor Branding",
        "Description": "M5 Non-Vpro Label",
        "ProductCode": "M5NVPRO",
        "Skus": [
        "389-BIOH"
        ]
    },
    {
        "Name": "Office 2016 - Word, Excel, Powerpoint & more",
        "Description": "Microsoft Office 30 Day Trial",
        "ProductCode": "OTRT13M",
        "Skus": [
        "658-BCSB"
        ]
    },
    {
        "Name": "Security Software  <span class=\"dellRecommended\">XPS PCs on Dell.com come protected with 1yr McAfee LiveSafe, $89 value.</span>",
        "Description": "McAfee LiveSafe 12 Month Subscription",
        "ProductCode": "LSXP12M",
        "Skus": [
        "525-0036",
        "658-BCCO"
        ]
    },
    {
        "Name": "Non-Microsoft Application Software",
        "Description": "Additional Software",
        "ProductCode": "XPSW10",
        "Skus": [
        "658-BCUJ"
        ]
    },
    {
        "Name": "Support",
        "Description": "1 Year Ltd Hware Warranty: Mail-in; Customer supplies box, Dell pays shipping",
        "ProductCode": "MI1",
        "Skus": [
        "801-1390",
        "801-1423"
        ]
    },
    {
        "Name": "Operating System Recovery Options",
        "Description": "Operating System Recovery Media Not Included",
        "ProductCode": "NODBRM",
        "Skus": [
        "340-ACQQ"
        ]
    }
    ],
    "ShowComponents": true,
    "Alerts": [],
    "EvergreenMessages": [],
    "HasBundledItems": false,
    "BundledItems": [],
    "IsBundledItem": false,
    "IsFastTrack": false,
    "Metadata": {
        "itemType": "ConfigItem",
        "brand": 26,
        "family": 11723
    },
    "DeliveryMessageOverride": "Ships in 36-40 business days",
    "HasDeliveryMessageOverride": true,
    "StopSelling": false,
    "IsStockItem": false,
    "SubTotalAmountValue": 999.99,
    "ConfigurationIdentifier": "1~dncwi1407h~19~en~us~1__572;FG0010;1"
},
{
    "Id": "64229002-1f5b-4c98-b338-d2fb9b98d5ed",
    "IdWithoutSpecialCharacters": "642290021f5b4c98b338d2fb9b98d5ed",
    "ProductId": "dncwt5154b",
    "Description": "XPS 13 Non-Touch",
    "ShowProductStackDescription": false,
    "IsValid": true,
    "LeadTimeInfo": {
        "EstimatedShipDate": "6/13/2016",
        "ShowEstimatedShipDate": true,
        "ShowEstimatedDeliveryDate": false,
        "HasValidEstimatedDeliveryDate": false,
        "CanCalculateEstimatedDeliveryDate": true
    },
    "IsSavedCartItem": false,
    "SubTotalAmount": "$799.99",
    "DiscountsAndCouponsAmount": "$0.00",
    "DiscountsAndCouponsAmountValue": 0,
    "DiscountsAndCoupons": [
    {
        "CampaignId": 571233,
        "Amount": "$0.00",
        "ShortDescription": "6 mo special financing when you spend $599+",
        "LongDescription": "6 months special financing on new PCs $599 or more with Dell Preferred Account!",
        "LegalDescription": "<!-- \r\n- 6 months special financing is a No Interest if Paid in Full by Your Due Date in January, 2017 promotion on new PCs $599 or more and applies only to the amount purchased with Dell Preferred Account.\r\n- Your Standard Rate is ${APR}.  This APR will vary with the market based on the Prime Rate.\r\n- Interest will be charged to your account at the Standard Rate from the transaction posting date if the purchase balance is not paid in full by the end of the promotional period.  In addition, your Standard Rate will apply to the remaining balance.\r\n- To avoid accrued interest charges, minimum monthly payments are required and the balance must be paid by the end of your promotional period.\r\n- Minimum monthly payments are required, but may not pay your purchase in full by the end of the promotional period due to purchase amount, promotion length, additional purchases or allocation of payments in excess of the minimum payment. \r\n- Minimum purchase amount may be required.\r\n--> \r\nThe \"6 months special financing\" promotional financing includes new PCs $599 or more purchased with your Dell Preferred Account.  You must have adequate available credit to purchase.  Pay your plan balance in full by your payment due date in January, 2017 or accrued interest will be assessed. Minimum monthly payments are required, but may not pay your purchase in full by the end of the promotional period due to purchase amount, promotion length, additional purchases or allocation of payments in excess of the minimum payment. Interest accrues at the Standard Rate (this APR will vary with the market based on the Prime Rate) from the transaction posting date and will be charged to the account if you do not pay your plan balance in full by your payment due date in January, 2017, or if you fail to make a required minimum payment at any time during the promotional period.  Promotional financing features apply only to the amount purchased with the Dell Preferred Account.   \r\n\t\r\n<p>Subject to credit approval.  WebBank determines creditworthiness, APR, credit limit, and qualification for promotional offers.  Qualifying for the Dell Preferred Account does not guarantee offer of promotional financing features.  You must purchase this item with your Dell Preferred Account and must have adequate available credit to take advantage of this promotion. Minimum purchase amount may be required</p>",
        "ExpiryDate": "6/30/2016",
        "HasExpiryDate": true,
        "HasExpiryTextOverride": false,
        "AllowRemove": false,
        "ShowAmount": false
    }
    ],
    "ShowDiscountsAndCoupons": true,
    "DiscountsPopupTitle": "Additional Discounts & Coupons",
    "TotalAmount": "$799.99",
    "TotalAmountWithSubItems": "$799.99",
    "TotalAmountWithSubItemsValue": 799.99,
    "Quantity": 1,
    "QuantityWithSubItems": 1,
    "AllowChangeQuantity": true,
    "IsAssociatedItem": false,
    "ImageUrl": "https://si.cdn.dell.com/images/global/configurator/chassis/xps-13-9350-nt-sr-ft-120x107.jpg",
    "UnitPriceAmount": "$799.99",
    "ShowManufacturerPartNumber": false,
    "ShowDellPartNumber": false,
    "ShowCatalogNumber": true,
    "CatalogNumber": "29 dncwt5154b",
    "Components": [
    {
        "Name": "Base",
        "Description": "XPS 13",
        "ProductCode": "XPS13",
        "Skus": [
        "210-AFLW"
        ]
    },
    {
        "Name": "Processor",
        "Description": "6th Generation Intel� Core� i3-6100U (3M Cache, up to 2.3 GHz)",
        "ProductCode": "39VHTW",
        "Skus": [
        "338-BIUG"
        ]
    },
    {
        "Name": "Operating System",
        "Description": "Windows 10 Home, 64-bit, English",
        "ProductCode": "10H64E",
        "Skus": [
        "619-AHCQ"
        ]
    },
    {
        "Name": "Memory",
        "Description": "4GB LPDDR3-1866MHz",
        "ProductCode": "4GB",
        "Skus": [
        "370-ACJL"
        ]
    },
    {
        "Name": "Hard Drive",
        "Description": "128GB Solid State Drive",
        "ProductCode": "SSDR28",
        "Skus": [
        "400-AIPD"
        ]
    },
    {
        "Name": "Video Card",
        "Description": "Intel� HD Graphics 520",
        "ProductCode": "UMA",
        "Skus": [
        "490-BCLY"
        ]
    },
    {
        "Name": "Display",
        "Description": "13.3� FHD AG (1920 x 1080) InfinityEdge display",
        "ProductCode": "FHDNON",
        "Skus": [
        "391-BCHU"
        ]
    },
    {
        "Name": "Wireless",
        "Description": "DW1820A 2x2 802.11ac 2.4/5GHz + Bluetooth4.1",
        "ProductCode": "1820A",
        "Skus": [
        "555-BCRE"
        ]
    },
    {
        "Name": "Primary Battery",
        "Description": "56wHR, 4-Cell Battery",
        "ProductCode": "56WHR",
        "Skus": [
        "451-BBST"
        ]
    },
    {
        "Name": "Keyboard",
        "Description": "Backlit Keyboard, English",
        "ProductCode": "ENGKBD",
        "Skus": [
        "580-AECQ"
        ]
    },
    {
        "Name": "Driver",
        "Description": "DW 1820 Driver",
        "ProductCode": "DW1820",
        "Skus": [
        "555-BCQB"
        ]
    },
    {
        "Name": "Cable",
        "Description": "US Power Cord",
        "ProductCode": "PWRUS",
        "Skus": [
        "340-AAMU"
        ]
    },
    {
        "Name": "Placemat",
        "Description": "Win 10 Placemat",
        "ProductCode": "WN10PM",
        "Skus": [
        "340-ARJD"
        ]
    },
    {
        "Name": "Systems Management",
        "Description": "UMID Software",
        "ProductCode": "CSMB",
        "Skus": [
        "631-AAVK",
        "631-AAVN"
        ]
    },
    {
        "Name": "Retail Software",
        "Description": "Dell.com Order",
        "ProductCode": "NORTL",
        "Skus": [
        "332-0550"
        ]
    },
    {
        "Name": "Packaging Label",
        "Description": "Dell.com Order",
        "ProductCode": "NORTL",
        "Skus": [
        "332-1530"
        ]
    },
    {
        "Name": "Documentation/Disks",
        "Description": "Safety/Environment and Regulatory Guide (English/French Multi-language)",
        "ProductCode": "ENGMDC",
        "Skus": [
        "340-AGIK"
        ]
    },
    {
        "Name": "Packaging",
        "Description": "XPS 13 Shipping Material",
        "ProductCode": "SHMM",
        "Skus": [
        "340-AAPP",
        "340-ARJF"
        ]
    },
    {
        "Name": "Power Supply",
        "Description": "45 Watt AC Adaptor",
        "ProductCode": "45WAC",
        "Skus": [
        "450-ABEN"
        ]
    },
    {
        "Name": "FGA Module",
        "Description": "DINO1703_5154_DAO/US/CA/MX/BTO",
        "ProductCode": "FG0053",
        "Skus": [
        "998-BWVE"
        ]
    },
    {
        "Name": "Hard Drive Software",
        "Description": "No SSD SW Required",
        "ProductCode": "NOSSDSW",
        "Skus": [
        "817-BBBC"
        ]
    },
    {
        "Name": "Processor Label",
        "Description": "Intel� Core� i3 Label",
        "ProductCode": "CI3SML",
        "Skus": [
        "389-BHGC"
        ]
    },
    {
        "Name": "Label",
        "Description": "No Reg Label",
        "ProductCode": "NONE",
        "Skus": [
        "817-BBBP"
        ]
    },
    {
        "Name": "Office 2016 - Word, Excel, Powerpoint & more",
        "Description": "Microsoft Office 30 Day Trial",
        "ProductCode": "OTRT13M",
        "Skus": [
        "658-BCSB"
        ]
    },
    {
        "Name": "Security Software  <span class=\"dellRecommended\">XPS PCs on Dell.com come protected with 1yr McAfee LiveSafe, $89 value.</span>",
        "Description": "McAfee LiveSafe 12 Month Subscription",
        "ProductCode": "LSXP12M",
        "Skus": [
        "525-0036",
        "658-BCCO"
        ]
    },
    {
        "Name": "Non-Microsoft Application Software",
        "Description": "Additional Software",
        "ProductCode": "XPSW10",
        "Skus": [
        "658-BCUJ"
        ]
    },
    {
        "Name": "Support",
        "Description": "1 Year Ltd Hware Warranty: Mail-in; Customer supplies box, Dell pays shipping",
        "ProductCode": "MI1",
        "Skus": [
        "801-1596",
        "801-1629"
        ]
    },
    {
        "Name": "PalmRest",
        "Description": "80 Key Palmrest",
        "ProductCode": "USPLR",
        "Skus": [
        "346-BBTS"
        ]
    },
    {
        "Name": "Operating System Recovery Options",
        "Description": "Operating System Recovery Media Not Included",
        "ProductCode": "NODBRM",
        "Skus": [
        "340-ACQQ"
        ]
    }
    ],
    "ShowComponents": true,
    "Alerts": [],
    "EvergreenMessages": [],
    "HasBundledItems": false,
    "BundledItems": [],
    "IsBundledItem": false,
    "IsFastTrack": false,
    "Metadata": {
        "itemType": "ConfigItem",
        "brand": 26,
        "family": 11807
    },
    "DeliveryMessageOverride": "Ships in 4-6 business days",
    "HasDeliveryMessageOverride": true,
    "StopSelling": false,
    "IsStockItem": false,
    "SubTotalAmountValue": 799.99,
    "ConfigurationIdentifier": "1~dncwt5154b~19~en~us~1__572;FG0053;1"
},
{
    "Id": "8bd4c861-da54-4cb6-82b3-19f4b4d14793",
    "IdWithoutSpecialCharacters": "8bd4c861da544cb682b319f4b4d14793",
    "ProductId": "dncwx1626b",
    "Description": "XPS 15 Non-Touch",
    "ShowProductStackDescription": false,
    "IsValid": true,
    "LeadTimeInfo": {
        "EstimatedShipDate": "6/13/2016",
        "ShowEstimatedShipDate": true,
        "ShowEstimatedDeliveryDate": false,
        "HasValidEstimatedDeliveryDate": false,
        "CanCalculateEstimatedDeliveryDate": true
    },
    "IsSavedCartItem": false,
    "SubTotalAmount": "$999.99",
    "DiscountsAndCouponsAmount": "$0.00",
    "DiscountsAndCouponsAmountValue": 0,
    "DiscountsAndCoupons": [
    {
        "CampaignId": 571234,
        "Amount": "$0.00",
        "ShortDescription": "12 mo special financing when you spend $999+",
        "LongDescription": "12 months special financing on new PCs $999 or more with Dell Preferred Account!",
        "LegalDescription": "<!-- \r\n- 12 months special financing is a No Interest if Paid in Full by Your Due Date in July, 2017 promotion on new PCs $999 or more and applies only to the amount purchased with Dell Preferred Account.\r\n- Your Standard Rate is ${APR}.  This APR will vary with the market based on the Prime Rate.\r\n- Interest will be charged to your account at the Standard Rate from the transaction posting date if the purchase balance is not paid in full by the end of the promotional period.  In addition, your Standard Rate will apply to the remaining balance.\r\n- To avoid accrued interest charges, minimum monthly payments are required and the balance must be paid by the end of your promotional period.\r\n- Minimum monthly payments are required, but may not pay your purchase in full by the end of the promotional period due to purchase amount, promotion length, additional purchases or allocation of payments in excess of the minimum payment. \r\n- Minimum purchase amount may be required.\r\n--> \r\nThe \"12 months special financing\" promotional financing includes new PCs $999 or more purchased with your Dell Preferred Account.  You must have adequate available credit to purchase.  Pay your plan balance in full by your payment due date in July, 2017 or accrued interest will be assessed. Minimum monthly payments are required, but may not pay your purchase in full by the end of the promotional period due to purchase amount, promotion length, additional purchases or allocation of payments in excess of the minimum payment. Interest accrues at the Standard Rate (this APR will vary with the market based on the Prime Rate) from the transaction posting date and will be charged to the account if you do not pay your plan balance in full by your payment due date in July, 2017, or if you fail to make a required minimum payment at any time during the promotional period.  Promotional financing features apply only to the amount purchased with the Dell Preferred Account.   \r\n\r\n<p>Subject to credit approval.  WebBank determines creditworthiness, APR, credit limit, and qualification for promotional offers.  Qualifying for the Dell Preferred Account does not guarantee offer of promotional financing features.  You must purchase this item with your Dell Preferred Account and must have adequate available credit to take advantage of this promotion. Minimum purchase amount may be required</p>",
        "ExpiryDate": "6/30/2016",
        "HasExpiryDate": true,
        "HasExpiryTextOverride": false,
        "AllowRemove": false,
        "ShowAmount": false
    }
    ],
    "ShowDiscountsAndCoupons": true,
    "DiscountsPopupTitle": "Additional Discounts & Coupons",
    "TotalAmount": "$999.99",
    "TotalAmountWithSubItems": "$999.99",
    "TotalAmountWithSubItemsValue": 999.99,
    "Quantity": 1,
    "QuantityWithSubItems": 1,
    "AllowChangeQuantity": true,
    "IsAssociatedItem": false,
    "ImageUrl": "https://si.cdn.dell.com/images/global/configurator/chassis/xps-15-9550-t-gry-ft-120x107.jpg",
    "UnitPriceAmount": "$999.99",
    "ShowManufacturerPartNumber": false,
    "ShowDellPartNumber": false,
    "ShowCatalogNumber": true,
    "CatalogNumber": "29 dncwx1626b",
    "Components": [
    {
        "Name": "Base",
        "Description": "XPS 15",
        "ProductCode": "9550",
        "Skus": [
        "210-AFLV"
        ]
    },
    {
        "Name": "Processor",
        "Description": "6th Generation Intel Core i3-6100H (3M Cache, up to 2.7 GHz)",
        "ProductCode": "3MK7KR",
        "Skus": [
        "338-BITQ"
        ]
    },
    {
        "Name": "Operating System",
        "Description": "Windows 10 Home, 64-bit, English",
        "ProductCode": "10HHEE",
        "Skus": [
        "619-AHCY"
        ]
    },
    {
        "Name": "Memory",
        "Description": "8GB DDR4-2133MHz; up to 32GB (additional memory sold separately)",
        "ProductCode": "8GB",
        "Skus": [
        "370-ACLS"
        ]
    },
    {
        "Name": "Hard Drive",
        "Description": "500GB 7200RPM Hard Drive + 32GB Solid State Drive",
        "ProductCode": "500G32",
        "Skus": [
        "400-AJBU"
        ]
    },
    {
        "Name": "Video Card",
        "Description": "Intel� HD Graphics 530",
        "ProductCode": "UMA",
        "Skus": [
        "490-BCXH"
        ]
    },
    {
        "Name": "Display",
        "Description": "15.6\" FHD (1920 x 1080) InfinityEdge",
        "ProductCode": "FHD",
        "Skus": [
        "391-BCHR"
        ]
    },
    {
        "Name": "Wireless",
        "Description": "DW1820A 2x2 802.11ac 2.4/5GHz + Bluetooth 4.1",
        "ProductCode": "1820",
        "Skus": [
        "555-BCTQ"
        ]
    },
    {
        "Name": "Primary Battery",
        "Description": "Dell 56 WHr 3-Cell Lithium-Ion Battery",
        "ProductCode": "3C",
        "Skus": [
        "451-BBSI"
        ]
    },
    {
        "Name": "Keyboard",
        "Description": "Backlit Keyboard, US English",
        "ProductCode": "ENGKB",
        "Skus": [
        "580-AEKV"
        ]
    },
    {
        "Name": "Driver",
        "Description": "Dell Wireless 1820A Driver (Windows 10)",
        "ProductCode": "1820A",
        "Skus": [
        "340-ARXR"
        ]
    },
    {
        "Name": "Cable",
        "Description": "PowerCord 2.5A 1M C5 E3",
        "ProductCode": "PWREDAO",
        "Skus": [
        "340-AAMU"
        ]
    },
    {
        "Name": "Systems Management",
        "Description": "ME Disable",
        "ProductCode": "MEDIS",
        "Skus": [
        "631-AAVH",
        "658-BCXP"
        ]
    },
    {
        "Name": "Placemat",
        "Description": "Win 10 Placemat",
        "ProductCode": "WN10PM",
        "Skus": [
        "340-ATCO"
        ]
    },
    {
        "Name": "Retail Software",
        "Description": "Dell.com Order",
        "ProductCode": "NORTL",
        "Skus": [
        "332-1530"
        ]
    },
    {
        "Name": "Packaging Label",
        "Description": "Dell.com Order",
        "ProductCode": "NORTL",
        "Skus": [
        "332-1530"
        ]
    },
    {
        "Name": "Documentation/Disks",
        "Description": "Safety/Environment and Regulatory Guide (English/French Multi-language)",
        "ProductCode": "ENGMUI",
        "Skus": [
        "340-AGIK"
        ]
    },
    {
        "Name": "Packaging",
        "Description": "System Shipment Material, 5510",
        "ProductCode": "SHPMTL",
        "Skus": [
        "328-BCFB"
        ]
    },
    {
        "Name": "Power Supply",
        "Description": "130W AC Adapter",
        "ProductCode": "130AC",
        "Skus": [
        "450-ABBY"
        ]
    },
    {
        "Name": "FGA Module",
        "Description": "BERL1703_1626_DAO/US/CA/BTO",
        "ProductCode": "FG0141",
        "Skus": [
        "998-BXWE"
        ]
    },
    {
        "Name": "Processor Branding",
        "Description": "Intel� Core� i3 Label",
        "ProductCode": "CI3SML",
        "Skus": [
        "389-BHGC"
        ]
    },
    {
        "Name": "Office 2016 - Word, Excel, Powerpoint & more",
        "Description": "Microsoft Office 30 Day Trial",
        "ProductCode": "OTRT13M",
        "Skus": [
        "658-BCSB"
        ]
    },
    {
        "Name": "Security Software  <span class=\"dellRecommended\">XPS PCs on Dell.com come protected with 1yr McAfee LiveSafe, $89 value.</span>",
        "Description": "McAfee LiveSafe 12 Month Subscription",
        "ProductCode": "LSXP12M",
        "Skus": [
        "525-0036",
        "658-BCCO"
        ]
    },
    {
        "Name": "Non-Microsoft Application Software",
        "Description": "Additional Software",
        "ProductCode": "XPSW10",
        "Skus": [
        "658-BCUJ"
        ]
    },
    {
        "Name": "Support",
        "Description": "1 Year Ltd Hware Warranty: Mail-in; Customer supplies box, Dell pays shipping",
        "ProductCode": "MI1",
        "Skus": [
        "801-0978",
        "801-1012"
        ]
    },
    {
        "Name": "PalmRest",
        "Description": "US Palmrest",
        "ProductCode": "USPRL",
        "Skus": [
        "346-BBTC"
        ]
    },
    {
        "Name": "Operating System Recovery Options",
        "Description": "Operating System Recovery Media Not Included",
        "ProductCode": "NOBDRM",
        "Skus": [
        "340-ACQQ"
        ]
    }
    ],
    "ShowComponents": true,
    "Alerts": [],
    "EvergreenMessages": [],
    "HasBundledItems": false,
    "BundledItems": [],
    "IsBundledItem": false,
    "IsFastTrack": false,
    "Metadata": {
        "itemType": "ConfigItem",
        "brand": 26,
        "family": 11757
    },
    "DeliveryMessageOverride": "Ships in 4-6 business days",
    "HasDeliveryMessageOverride": true,
    "StopSelling": false,
    "IsStockItem": false,
    "SubTotalAmountValue": 999.99,
    "ConfigurationIdentifier": "1~dncwx1626b~19~en~us~1__572;FG0141;1"
},
{
    "Id": "25e9c453-d9b7-4f32-9dc2-a00b153bfc1f",
    "IdWithoutSpecialCharacters": "25e9c453d9b74f329dc2a00b153bfc1f",
    "ProductId": "dkcwe01s",
    "Description": "Alienware 13",
    "ShowProductStackDescription": false,
    "IsValid": true,
    "LeadTimeInfo": {
        "EstimatedShipDate": "6/13/2016",
        "ShowEstimatedShipDate": true,
        "ShowEstimatedDeliveryDate": false,
        "HasValidEstimatedDeliveryDate": false,
        "CanCalculateEstimatedDeliveryDate": true
    },
    "IsSavedCartItem": false,
    "SubTotalAmount": "$949.99",
    "DiscountsAndCouponsAmount": "-$50.00",
    "DiscountsAndCouponsAmountValue": 50,
    "DiscountsAndCoupons": [
    {
        "CampaignId": 597902,
        "Amount": "-$50.00",
        "ShortDescription": "Alienware 13 price includes $50 instant discount.",
        "LongDescription": "Alienware 13 price includes $50 instant discount.",
        "LegalDescription": "Offers subject to change, not combinable with all other offers. Taxes, shipping, handling and other fees apply. U.S. Dell Home and Home Office new purchases only. Dell reserves the right to cancel orders arising from pricing or other errors.",
        "ExpiryDate": "1/1/2019",
        "HasExpiryDate": true,
        "HasExpiryTextOverride": false,
        "AllowRemove": false,
        "ShowAmount": true
    },
    {
        "CampaignId": 571235,
        "Amount": "$0.00",
        "ShortDescription": "12 months special financing",
        "LongDescription": "12 months special financing on new Alienware PCs and consoles using Dell Preferred Account!",
        "LegalDescription": "<!-- \r\n- 12 months special financing is a No Interest if Paid in Full by Your Due Date in July, 2017 promotion on new Alienware PCs and consoles and applies only to the amount purchased with Dell Preferred Account.\r\n- Your Standard Rate is ${APR}.  This APR will vary with the market based on the Prime Rate.\r\n- Interest will be charged to your account at the Standard Rate from the transaction posting date if the purchase balance is not paid in full by the end of the promotional period.  In addition, your Standard Rate will apply to the remaining balance.\r\n- To avoid accrued interest charges, minimum monthly payments are required and the balance must be paid by the end of your promotional period.\r\n- Minimum monthly payments are required, but may not pay your purchase in full by the end of the promotional period due to purchase amount, promotion length, additional purchases or allocation of payments in excess of the minimum payment. \r\n- Minimum purchase amount may be required.\r\n--> \r\nThe \"12 months special financing\" promotional financing includes new Alienware PCs and consoles purchased with your Dell Preferred Account.  You must have adequate available credit to purchase.  Pay your plan balance in full by your payment due date in July, 2017 or accrued interest will be assessed. Minimum monthly payments are required, but may not pay your purchase in full by the end of the promotional period due to purchase amount, promotion length, additional purchases or allocation of payments in excess of the minimum payment. Interest accrues at the Standard Rate (this APR will vary with the market based on the Prime Rate) from the transaction posting date and will be charged to the account if you do not pay your plan balance in full by your payment due date in July, 2017, or if you fail to make a required minimum payment at any time during the promotional period.  Promotional financing features apply only to the amount purchased with the Dell Preferred Account.   \r\n\r\n<p>Subject to credit approval.  WebBank determines creditworthiness, APR, credit limit, and qualification for promotional offers.  Qualifying for the Dell Preferred Account does not guarantee offer of promotional financing features.  You must purchase this item with your Dell Preferred Account and must have adequate available credit to take advantage of this promotion. Minimum purchase amount may be required</p>",
        "ExpiryDate": "6/30/2016",
        "HasExpiryDate": true,
        "HasExpiryTextOverride": false,
        "AllowRemove": false,
        "ShowAmount": false
    }
    ],
    "ShowDiscountsAndCoupons": true,
    "DiscountsPopupTitle": "Additional Discounts & Coupons",
    "TotalAmount": "$899.99",
    "TotalAmountWithSubItems": "$899.99",
    "TotalAmountWithSubItemsValue": 899.99,
    "Quantity": 1,
    "QuantityWithSubItems": 1,
    "AllowChangeQuantity": true,
    "IsAssociatedItem": false,
    "ImageUrl": "https://si.cdn.dell.com/images/global/configurator/chassis/alienware-13-tch-ft-120x107.jpg",
    "UnitPriceAmount": "$949.99",
    "ShowManufacturerPartNumber": false,
    "ShowDellPartNumber": false,
    "ShowCatalogNumber": true,
    "CatalogNumber": "29 dkcwe01s",
    "Components": [
    {
        "Name": "Alienware 13 R2",
        "Description": "Alienware 13 R2",
        "ProductCode": "CTOE13",
        "Skus": [
        "210-AFTQ"
        ]
    },
    {
        "Name": "Video Card",
        "Description": "NVIDIA�  GeForce� GTX 960M with 2GB GDDR5",
        "ProductCode": "GTX960",
        "Skus": [
        "490-BCNQ"
        ]
    },
    {
        "Name": "Processor",
        "Description": "Intel� Core� i5-6200U (Dual-Core, 3MB Cache, up to 2.8GHz w/ Turbo Boost)",
        "ProductCode": "5HCRYV",
        "Skus": [
        "338-BIDW"
        ]
    },
    {
        "Name": "Operating System",
        "Description": "Windows 10 Home 64bit English",
        "ProductCode": "10H64E",
        "Skus": [
        "619-AHCQ"
        ]
    },
    {
        "Name": "Display",
        "Description": "13 inch HD (1366 x 768) TN-Panel Anti-Glare 200-nits Display",
        "ProductCode": "HD",
        "Skus": [
        "391-BCJY"
        ]
    },
    {
        "Name": "Memory",
        "Description": "4GB Dual Channel DDR3L at 1600MHz; up to 16GB (additional memory sold separately)",
        "ProductCode": "4G1D",
        "Skus": [
        "370-AABY"
        ]
    },
    {
        "Name": "Hard Drive",
        "Description": "500GB 5400RPM Hybrid (8GB Cache) SSD SATA 6Gb/s",
        "ProductCode": "500HYB",
        "Skus": [
        "400-AATU"
        ]
    },
    {
        "Name": "Wireless",
        "Description": "Killer 1535 802.11ac 2x2 WiFi and Bluetooth 4.1",
        "ProductCode": "N1535",
        "Skus": [
        "555-BCRM"
        ]
    },
    {
        "Name": "Battery",
        "Description": "4-cell Lithium Ion (62 Wh) Battery",
        "ProductCode": "4C62",
        "Skus": [
        "451-BBQK"
        ]
    },
    {
        "Name": "Operating System Recovery",
        "Description": "No OS Recovery Disk Included",
        "ProductCode": "NONE",
        "Skus": [
        "340-ACQQ"
        ]
    },
    {
        "Name": "Keyboard",
        "Description": "English Backlit Keyboard, powered by AlienFX",
        "ProductCode": "KBDENG",
        "Skus": [
        "580-ACTO"
        ]
    },
    {
        "Name": "Cable",
        "Description": "US Power Cord 110V",
        "ProductCode": "110VPWR",
        "Skus": [
        "450-AAUO"
        ]
    },
    {
        "Name": "Power Supply",
        "Description": "130 W A/C Adapter",
        "ProductCode": "130W",
        "Skus": [
        "450-ADFZ"
        ]
    },
    {
        "Name": "Retail Software",
        "Description": "Dell.com Order",
        "ProductCode": "NORTL",
        "Skus": [
        "332-1530"
        ]
    },
    {
        "Name": "Documentation/Disks",
        "Description": "Safety/Environment and Regulatory Guide (English/French)",
        "ProductCode": "ENGMUI",
        "Skus": [
        "340-AGUD"
        ]
    },
    {
        "Name": "Packing Label",
        "Description": "Dell.com Order",
        "ProductCode": "NORTL",
        "Skus": [
        "332-1530"
        ]
    },
    {
        "Name": "Non-Microsoft Application Software",
        "Description": "Additional Software",
        "ProductCode": "ALWW10",
        "Skus": [
        "658-BCUO"
        ]
    },
    {
        "Name": "Additional Settings",
        "Description": "Dropbox, Digital Delivery, 20GB for 1 Year Promotion",
        "ProductCode": "DRPBOX",
        "Skus": [
        "525-0016"
        ]
    },
    {
        "Name": "Shipping Material",
        "Description": "Shipping Material",
        "ProductCode": "SHPMT",
        "Skus": [
        "340-AAPP",
        "340-AMOW"
        ]
    },
    {
        "Name": "Shipping SKU's",
        "Description": "Shipping Material",
        "ProductCode": "USNONE",
        "Skus": [
        "332-1286"
        ]
    },
    {
        "Name": "Intel Processor Driver",
        "Description": "Intel Driver",
        "ProductCode": "SKYLAKE",
        "Skus": [
        "631-AATK"
        ]
    },
    {
        "Name": "Placemat",
        "Description": "Placemat",
        "ProductCode": "PLCMT",
        "Skus": [
        "340-ARYK"
        ]
    },
    {
        "Name": "Wireless Driver/Label",
        "Description": "Killer N1535 Wireless Driver",
        "ProductCode": "1535DR",
        "Skus": [
        "555-BCRN"
        ]
    },
    {
        "Name": "FGA Module",
        "Description": "No FGA",
        "ProductCode": "NOFGA",
        "Skus": [
        "817-BBBB"
        ]
    },
    {
        "Name": "Regulatory Label",
        "Description": "Regulatory Label",
        "ProductCode": "REGLBL",
        "Skus": [
        "389-BHMJ"
        ]
    },
    {
        "Name": "Microsoft Office Productivity Software � Word, Excel, Powerpoint & more",
        "Description": "Microsoft Office 30 Day Trial",
        "ProductCode": "OTRT13",
        "Skus": [
        "658-BCSC"
        ]
    },
    {
        "Name": "Security Software",
        "Description": "No Anti-virus Requested",
        "ProductCode": "NOAV",
        "Skus": [
        "817-BBBP"
        ]
    },
    {
        "Name": "Support  <span class=\"dellRecommended\">(Limited time: Get 4 years for the Price of 3)</span>",
        "Description": "1 Year Hardware Service with Onsite/In-Home Service After Remote Diagnosis",
        "ProductCode": "NBD1",
        "Skus": [
        "801-2391",
        "801-2438"
        ]
    },
    {
        "Name": "Processor Label",
        "Description": "Intel� Core� i5 Label",
        "ProductCode": "CI5SML",
        "Skus": [
        "389-BHIB"
        ]
    }
    ],
    "ShowComponents": true,
    "Alerts": [],
    "EvergreenMessages": [],
    "HasBundledItems": false,
    "BundledItems": [],
    "IsBundledItem": false,
    "IsFastTrack": false,
    "Metadata": {
        "itemType": "ConfigItem",
        "brand": 1171,
        "family": 11804
    },
    "DeliveryMessageOverride": "Ships in 4-6 business days",
    "HasDeliveryMessageOverride": true,
    "StopSelling": false,
    "IsStockItem": false,
    "SubTotalAmountValue": 949.99,
    "ConfigurationIdentifier": "1~dkcwe01s~19~en~us~1__"
},
{
    "Id": "abdef14e-d7ea-4265-a971-6fd137c8c8c1",
    "IdWithoutSpecialCharacters": "abdef14ed7ea4265a9716fd137c8c8c1",
    "ProductId": "dkcwf01sa",
    "Description": "Alienware 15",
    "ShowProductStackDescription": false,
    "IsValid": true,
    "LeadTimeInfo": {
        "EstimatedShipDate": "6/13/2016",
        "ShowEstimatedShipDate": true,
        "ShowEstimatedDeliveryDate": false,
        "HasValidEstimatedDeliveryDate": false,
        "CanCalculateEstimatedDeliveryDate": true
    },
    "IsSavedCartItem": false,
    "SubTotalAmount": "$1,199.99",
    "DiscountsAndCouponsAmount": "$0.00",
    "DiscountsAndCouponsAmountValue": 0,
    "DiscountsAndCoupons": [
    {
        "CampaignId": 571235,
        "Amount": "$0.00",
        "ShortDescription": "12 months special financing",
        "LongDescription": "12 months special financing on new Alienware PCs and consoles using Dell Preferred Account!",
        "LegalDescription": "<!-- \r\n- 12 months special financing is a No Interest if Paid in Full by Your Due Date in July, 2017 promotion on new Alienware PCs and consoles and applies only to the amount purchased with Dell Preferred Account.\r\n- Your Standard Rate is ${APR}.  This APR will vary with the market based on the Prime Rate.\r\n- Interest will be charged to your account at the Standard Rate from the transaction posting date if the purchase balance is not paid in full by the end of the promotional period.  In addition, your Standard Rate will apply to the remaining balance.\r\n- To avoid accrued interest charges, minimum monthly payments are required and the balance must be paid by the end of your promotional period.\r\n- Minimum monthly payments are required, but may not pay your purchase in full by the end of the promotional period due to purchase amount, promotion length, additional purchases or allocation of payments in excess of the minimum payment. \r\n- Minimum purchase amount may be required.\r\n--> \r\nThe \"12 months special financing\" promotional financing includes new Alienware PCs and consoles purchased with your Dell Preferred Account.  You must have adequate available credit to purchase.  Pay your plan balance in full by your payment due date in July, 2017 or accrued interest will be assessed. Minimum monthly payments are required, but may not pay your purchase in full by the end of the promotional period due to purchase amount, promotion length, additional purchases or allocation of payments in excess of the minimum payment. Interest accrues at the Standard Rate (this APR will vary with the market based on the Prime Rate) from the transaction posting date and will be charged to the account if you do not pay your plan balance in full by your payment due date in July, 2017, or if you fail to make a required minimum payment at any time during the promotional period.  Promotional financing features apply only to the amount purchased with the Dell Preferred Account.   \r\n\r\n<p>Subject to credit approval.  WebBank determines creditworthiness, APR, credit limit, and qualification for promotional offers.  Qualifying for the Dell Preferred Account does not guarantee offer of promotional financing features.  You must purchase this item with your Dell Preferred Account and must have adequate available credit to take advantage of this promotion. Minimum purchase amount may be required</p>",
        "ExpiryDate": "6/30/2016",
        "HasExpiryDate": true,
        "HasExpiryTextOverride": false,
        "AllowRemove": false,
        "ShowAmount": false
    }
    ],
    "ShowDiscountsAndCoupons": true,
    "DiscountsPopupTitle": "Additional Discounts & Coupons",
    "TotalAmount": "$1,199.99",
    "TotalAmountWithSubItems": "$1,199.99",
    "TotalAmountWithSubItemsValue": 1199.99,
    "Quantity": 1,
    "QuantityWithSubItems": 1,
    "AllowChangeQuantity": true,
    "IsAssociatedItem": false,
    "ImageUrl": "https://si.cdn.dell.com/images/global/configurator/chassis/alienware-15-nn-tch-ft-120.jpg",
    "UnitPriceAmount": "$1,199.99",
    "ShowManufacturerPartNumber": false,
    "ShowDellPartNumber": false,
    "ShowCatalogNumber": true,
    "CatalogNumber": "29 dkcwf01sa",
    "Components": [
    {
        "Name": "Alienware 15 R2",
        "Description": "Alienware 15 MLK, CTO",
        "ProductCode": "CTOE15",
        "Skus": [
        "210-AFTR"
        ]
    },
    {
        "Name": "Video Card",
        "Description": "NVIDIA� GeForce� GTX 965M with 2GB GDDR5",
        "ProductCode": "GTX965",
        "Skus": [
        "490-BCLI"
        ]
    },
    {
        "Name": "Processor",
        "Description": "Intel� Core� i5-6300HQ (Quad-Core, 6MB Cache, up to 3.2GHz w/ Turbo Boost)",
        "ProductCode": "552V8M",
        "Skus": [
        "338-BIGB"
        ]
    },
    {
        "Name": "Operating System",
        "Description": "Windows 10 Home 64bit English",
        "ProductCode": "10HHEE",
        "Skus": [
        "619-AHCY"
        ]
    },
    {
        "Name": "Display",
        "Description": "15.6 inch FHD (1920 x 1080) IPS Anti-Glare 220-nits Display",
        "ProductCode": "FHD",
        "Skus": [
        "391-BCMU"
        ]
    },
    {
        "Name": "Memory",
        "Description": "8GB Dual Channel DDR4 at 2133MHz; up to 32GB (additional memory sold separately)",
        "ProductCode": "8G2D",
        "Skus": [
        "370-ACLS"
        ]
    },
    {
        "Name": "Hard Drive",
        "Description": "1TB 7200RPM SATA 6Gb/s",
        "ProductCode": "1TB7200",
        "Skus": [
        "400-AHHF"
        ]
    },
    {
        "Name": "Wireless",
        "Description": "Killer 1535 802.11ac 2x2 WiFi and Bluetooth 4.1",
        "ProductCode": "N1535",
        "Skus": [
        "555-BCRM"
        ]
    },
    {
        "Name": "Battery",
        "Description": "8-cell Lithium Ion (92 Wh) Battery",
        "ProductCode": "8C",
        "Skus": [
        "451-BBMY"
        ]
    },
    {
        "Name": "Operating System Recovery",
        "Description": "No OS Recovery Disc Included",
        "ProductCode": "NONE",
        "Skus": [
        "340-ACQQ"
        ]
    },
    {
        "Name": "Keyboard",
        "Description": "English Backlit Keyboard, powered by AlienFX",
        "ProductCode": "KBDENG",
        "Skus": [
        "580-ACTO",
        "583-BCQG"
        ]
    },
    {
        "Name": "Cable",
        "Description": "US Power Cord 110V",
        "ProductCode": "110VPWR",
        "Skus": [
        "450-AAUO"
        ]
    },
    {
        "Name": "AC Adapter",
        "Description": "Alienware 180W AC Adapter",
        "ProductCode": "180W3P",
        "Skus": [
        "450-AAGU"
        ]
    },
    {
        "Name": "Retail Software",
        "Description": "Dell.com Order",
        "ProductCode": "NORTL",
        "Skus": [
        "332-1530"
        ]
    },
    {
        "Name": "Documentation/Disks",
        "Description": "Safety/Environment and Regulatory Guide (English/French)",
        "ProductCode": "ENGMUI",
        "Skus": [
        "340-AGUD"
        ]
    },
    {
        "Name": "Packing Label",
        "Description": "Dell.com Order",
        "ProductCode": "NORTL",
        "Skus": [
        "332-1530"
        ]
    },
    {
        "Name": "Non-Microsoft Application Software",
        "Description": "Additional Software",
        "ProductCode": "ALWW10",
        "Skus": [
        "658-BCUO"
        ]
    },
    {
        "Name": "Additional Settings",
        "Description": "Dropbox, Digital Delivery, 20GB for 1 Year Promotion",
        "ProductCode": "DRPBOX",
        "Skus": [
        "525-0016"
        ]
    },
    {
        "Name": "Packaging",
        "Description": "Shipping Material",
        "ProductCode": "SHPMT",
        "Skus": [
        "340-AAPP",
        "340-AUNR"
        ]
    },
    {
        "Name": "Shipping SKU's",
        "Description": "Shipping Material",
        "ProductCode": "USNONE",
        "Skus": [
        "332-1286"
        ]
    },
    {
        "Name": "Intel Processor Driver",
        "Description": "Intel Driver",
        "ProductCode": "SKYLAKE",
        "Skus": [
        "631-AATS"
        ]
    },
    {
        "Name": "Placemat",
        "Description": "Placemat",
        "ProductCode": "PLCMT",
        "Skus": [
        "340-ASNB"
        ]
    },
    {
        "Name": "Driver",
        "Description": "Killer N1535 Wireless Driver",
        "ProductCode": "1535DR",
        "Skus": [
        "555-BCRW"
        ]
    },
    {
        "Name": "FGA Module",
        "Description": "No FGA",
        "ProductCode": "NOFGA",
        "Skus": [
        "817-BBBB"
        ]
    },
    {
        "Name": "Label",
        "Description": "Regulatory Label",
        "ProductCode": "REGLBL",
        "Skus": [
        "389-BHOX"
        ]
    },
    {
        "Name": "Microsoft Office Productivity Software � Word, Excel, Powerpoint & more",
        "Description": "Microsoft Office 30 Day Trial",
        "ProductCode": "OTRT13",
        "Skus": [
        "658-BCSC"
        ]
    },
    {
        "Name": "Security Software",
        "Description": "No Anti-virus Requested",
        "ProductCode": "NOAV",
        "Skus": [
        "817-BBBP"
        ]
    },
    {
        "Name": "Support  <span class=\"dellRecommended\">(Limited time: Get 4 years for the Price of 3)</span>",
        "Description": "1 Year Limited Hardware Warranty with Onsite Service after Remote Diagnosis",
        "ProductCode": "NBD1",
        "Skus": [
        "801-2185",
        "801-2232"
        ]
    },
    {
        "Name": "Processor Label",
        "Description": "Intel� Core� i5 Label",
        "ProductCode": "CI5SML",
        "Skus": [
        "389-BHIB"
        ]
    }
    ],
    "ShowComponents": true,
    "Alerts": [],
    "EvergreenMessages": [],
    "HasBundledItems": false,
    "BundledItems": [],
    "IsBundledItem": false,
    "IsFastTrack": false,
    "Metadata": {
        "itemType": "ConfigItem",
        "brand": 1171,
        "family": 11805
    },
    "DeliveryMessageOverride": "Ships in 4-6 business days",
    "HasDeliveryMessageOverride": true,
    "StopSelling": false,
    "IsStockItem": false,
    "SubTotalAmountValue": 1199.99,
    "ConfigurationIdentifier": "1~dkcwf01sa~19~en~us~1__"
},
{
    "Id": "c1ff1e21-55bb-49a9-8b03-296a4355e238",
    "IdWithoutSpecialCharacters": "c1ff1e2155bb49a98b03296a4355e238",
    "ProductId": "dkcwg01s",
    "Description": "Alienware 17",
    "ShowProductStackDescription": false,
    "IsValid": true,
    "LeadTimeInfo": {
        "EstimatedShipDate": "6/14/2016",
        "ShowEstimatedShipDate": true,
        "ShowEstimatedDeliveryDate": false,
        "HasValidEstimatedDeliveryDate": false,
        "CanCalculateEstimatedDeliveryDate": true
    },
    "IsSavedCartItem": false,
    "SubTotalAmount": "$1,499.99",
    "DiscountsAndCouponsAmount": "$0.00",
    "DiscountsAndCouponsAmountValue": 0,
    "DiscountsAndCoupons": [
    {
        "CampaignId": 571235,
        "Amount": "$0.00",
        "ShortDescription": "12 months special financing",
        "LongDescription": "12 months special financing on new Alienware PCs and consoles using Dell Preferred Account!",
        "LegalDescription": "<!-- \r\n- 12 months special financing is a No Interest if Paid in Full by Your Due Date in July, 2017 promotion on new Alienware PCs and consoles and applies only to the amount purchased with Dell Preferred Account.\r\n- Your Standard Rate is ${APR}.  This APR will vary with the market based on the Prime Rate.\r\n- Interest will be charged to your account at the Standard Rate from the transaction posting date if the purchase balance is not paid in full by the end of the promotional period.  In addition, your Standard Rate will apply to the remaining balance.\r\n- To avoid accrued interest charges, minimum monthly payments are required and the balance must be paid by the end of your promotional period.\r\n- Minimum monthly payments are required, but may not pay your purchase in full by the end of the promotional period due to purchase amount, promotion length, additional purchases or allocation of payments in excess of the minimum payment. \r\n- Minimum purchase amount may be required.\r\n--> \r\nThe \"12 months special financing\" promotional financing includes new Alienware PCs and consoles purchased with your Dell Preferred Account.  You must have adequate available credit to purchase.  Pay your plan balance in full by your payment due date in July, 2017 or accrued interest will be assessed. Minimum monthly payments are required, but may not pay your purchase in full by the end of the promotional period due to purchase amount, promotion length, additional purchases or allocation of payments in excess of the minimum payment. Interest accrues at the Standard Rate (this APR will vary with the market based on the Prime Rate) from the transaction posting date and will be charged to the account if you do not pay your plan balance in full by your payment due date in July, 2017, or if you fail to make a required minimum payment at any time during the promotional period.  Promotional financing features apply only to the amount purchased with the Dell Preferred Account.   \r\n\r\n<p>Subject to credit approval.  WebBank determines creditworthiness, APR, credit limit, and qualification for promotional offers.  Qualifying for the Dell Preferred Account does not guarantee offer of promotional financing features.  You must purchase this item with your Dell Preferred Account and must have adequate available credit to take advantage of this promotion. Minimum purchase amount may be required</p>",
        "ExpiryDate": "6/30/2016",
        "HasExpiryDate": true,
        "HasExpiryTextOverride": false,
        "AllowRemove": false,
        "ShowAmount": false
    }
    ],
    "ShowDiscountsAndCoupons": true,
    "DiscountsPopupTitle": "Additional Discounts & Coupons",
    "TotalAmount": "$1,499.99",
    "TotalAmountWithSubItems": "$1,499.99",
    "TotalAmountWithSubItemsValue": 1499.99,
    "Quantity": 1,
    "QuantityWithSubItems": 1,
    "AllowChangeQuantity": true,
    "IsAssociatedItem": false,
    "ImageUrl": "https://si.cdn.dell.com/images/global/configurator/chassis/alien-17-r2-nt-ft-120x107.jpg",
    "UnitPriceAmount": "$1,499.99",
    "ShowManufacturerPartNumber": false,
    "ShowDellPartNumber": false,
    "ShowCatalogNumber": true,
    "CatalogNumber": "29 dkcwg01s",
    "Components": [
    {
        "Name": "Alienware 17 R3",
        "Description": "Alienware 17 R3",
        "ProductCode": "CTOE17",
        "Skus": [
        "210-AFFV"
        ]
    },
    {
        "Name": "Video Card",
        "Description": "NVIDIA� GeForce� GTX 970M with 3GB GDDR5",
        "ProductCode": "GTX970",
        "Skus": [
        "490-BCLG"
        ]
    },
    {
        "Name": "Processor",
        "Description": "Intel� Core� i7-6700HQ (Quad-Core, 6MB Cache, up to 3.5GHz w/ Turbo Boost)",
        "ProductCode": "7XFG7N",
        "Skus": [
        "338-BHVM"
        ]
    },
    {
        "Name": "Operating System",
        "Description": "Windows 10 Home 64bit English",
        "ProductCode": "10HHEE",
        "Skus": [
        "619-AHCY"
        ]
    },
    {
        "Name": "Display",
        "Description": "17.3 inch FHD (1920 x 1080) IPS-Panel Anti-Glare 300-nits Display",
        "ProductCode": "FHD",
        "Skus": [
        "391-BCMX"
        ]
    },
    {
        "Name": "Memory",
        "Description": "8GB Dual Channel DDR4 at 2133MHz; up to 32GB (additional memory sold separately)",
        "ProductCode": "8G2D",
        "Skus": [
        "370-ACLS"
        ]
    },
    {
        "Name": "Hard Drive",
        "Description": "1TB 7200RPM SATA 6Gb/s",
        "ProductCode": "1TB7200",
        "Skus": [
        "400-AHHF"
        ]
    },
    {
        "Name": "Wireless",
        "Description": "Killer 1535 802.11ac 2x2 WiFi and Bluetooth 4.1",
        "ProductCode": "N1535",
        "Skus": [
        "555-BCRM"
        ]
    },
    {
        "Name": "Battery",
        "Description": "8-cell Lithium Ion (92 Wh) Battery",
        "ProductCode": "8C",
        "Skus": [
        "451-BBMW"
        ]
    },
    {
        "Name": "Operating System Recovery",
        "Description": "No OS Recovery Disc Included",
        "ProductCode": "NONE",
        "Skus": [
        "340-ACQQ"
        ]
    },
    {
        "Name": "Keyboard",
        "Description": "English Backlit Keyboard, powered by AlienFX",
        "ProductCode": "KBDENG",
        "Skus": [
        "580-ACWN",
        "583-BCQG"
        ]
    },
    {
        "Name": "AC Adapter",
        "Description": "Alienware 180W AC Adapter",
        "ProductCode": "180W3P",
        "Skus": [
        "450-AAGU"
        ]
    },
    {
        "Name": "Cable",
        "Description": "US Power Cord 110V",
        "ProductCode": "110VPWR",
        "Skus": [
        "450-AAUO"
        ]
    },
    {
        "Name": "Retail Software",
        "Description": "Dell.com Order",
        "ProductCode": "NORTL",
        "Skus": [
        "332-1530"
        ]
    },
    {
        "Name": "Documentation/Disks",
        "Description": "Safety/Environment and Regulatory Guide (English/French)",
        "ProductCode": "ENGMUI",
        "Skus": [
        "340-AGUD"
        ]
    },
    {
        "Name": "Packing Label",
        "Description": "Dell.com Order",
        "ProductCode": "NORTL",
        "Skus": [
        "332-1530"
        ]
    },
    {
        "Name": "Non-Microsoft Application Software",
        "Description": "Additional Software",
        "ProductCode": "ALWW10",
        "Skus": [
        "658-BCUO"
        ]
    },
    {
        "Name": "Additional Settings",
        "Description": "Dropbox, Digital Delivery, 20GB for 1 Year Promotion",
        "ProductCode": "DRPBOX",
        "Skus": [
        "525-0016"
        ]
    },
    {
        "Name": "Packaging",
        "Description": "Shipping Material",
        "ProductCode": "SHPMT",
        "Skus": [
        "340-AAPP",
        "340-ATTO"
        ]
    },
    {
        "Name": "Shipping SKU's",
        "Description": "Shipping Material",
        "ProductCode": "USNONE",
        "Skus": [
        "332-1286"
        ]
    },
    {
        "Name": "Intel Processor Driver",
        "Description": "Intel Driver",
        "ProductCode": "SKYLAKE",
        "Skus": [
        "631-AATV"
        ]
    },
    {
        "Name": "Placemat",
        "Description": "Placemat",
        "ProductCode": "PLCMT",
        "Skus": [
        "340-ASNH"
        ]
    },
    {
        "Name": "Driver",
        "Description": "Killer N1535 Wireless Driver",
        "ProductCode": "1535DR",
        "Skus": [
        "555-BCRW"
        ]
    },
    {
        "Name": "FGA Module",
        "Description": "No FGA",
        "ProductCode": "NOFGA",
        "Skus": [
        "817-BBBB"
        ]
    },
    {
        "Name": "Label",
        "Description": "Regulatory Label",
        "ProductCode": "REGLBL",
        "Skus": [
        "389-BHPD"
        ]
    },
    {
        "Name": "Microsoft Office Productivity Software � Word, Excel, Powerpoint & more",
        "Description": "Microsoft Office 30 Day Trial",
        "ProductCode": "OTRT13",
        "Skus": [
        "658-BCSC"
        ]
    },
    {
        "Name": "Security Software",
        "Description": "No Anti-virus Requested",
        "ProductCode": "NOAV",
        "Skus": [
        "817-BBBP"
        ]
    },
    {
        "Name": "Support  <span class=\"dellRecommended\">(Limited time: Get 4 years for the Price of 3)</span>",
        "Description": "1 Year Limited Hardware Warranty with Onsite Service after Remote Diagnosis",
        "ProductCode": "NBD1",
        "Skus": [
        "801-2185",
        "801-2232"
        ]
    },
    {
        "Name": "Processor Label",
        "Description": "Intel� Core� i7 Label",
        "ProductCode": "CI7SML",
        "Skus": [
        "389-BHGE"
        ]
    }
    ],
    "ShowComponents": true,
    "Alerts": [],
    "EvergreenMessages": [],
    "HasBundledItems": false,
    "BundledItems": [],
    "IsBundledItem": false,
    "IsFastTrack": false,
    "Metadata": {
        "itemType": "ConfigItem",
        "brand": 1171,
        "family": 11806
    },
    "DeliveryMessageOverride": "Ships in 5-7 business days",
    "HasDeliveryMessageOverride": true,
    "StopSelling": false,
    "IsStockItem": false,
    "SubTotalAmountValue": 1499.99,
    "ConfigurationIdentifier": "1~dkcwg01s~19~en~us~1__"
},
{
    "Id": "c58fc0f2-0bb4-4769-863f-c81472a7e62f",
    "IdWithoutSpecialCharacters": "c58fc0f20bb44769863fc81472a7e62f",
    "ProductId": "fncwy01s",
    "Description": "Dell Chromebook 11 Non-Touch",
    "ShowProductStackDescription": false,
    "IsValid": true,
    "LeadTimeInfo": {
        "EstimatedShipDate": "6/7/2016",
        "ShowEstimatedShipDate": true,
        "ShowEstimatedDeliveryDate": false,
        "HasValidEstimatedDeliveryDate": false,
        "CanCalculateEstimatedDeliveryDate": true
    },
    "IsSavedCartItem": false,
    "SubTotalAmount": "$312.85",
    "DiscountsAndCouponsAmount": "-$93.85",
    "DiscountsAndCouponsAmountValue": 93.85,
    "DiscountsAndCoupons": [
    {
        "CampaignId": 453383,
        "Amount": "-$93.85",
        "ShortDescription": "Chromebook 11 price includes $93.85 instant discount.",
        "LongDescription": "Chromebook 11 price includes $93.85 instant discount.",
        "LegalDescription": "Specifications, availability and terms of offer may change without notice. Taxes and shipping charges are extra, and vary. Offer for U.S. Dell Home Systems Co. new system online purchases only.  Dell cannot be responsible for pricing or other errors, and reserves the right to cancel orders arising from such errors.",
        "ExpiryDate": "1/1/2018",
        "HasExpiryDate": true,
        "HasExpiryTextOverride": false,
        "AllowRemove": false,
        "ShowAmount": true
    },
    {
        "CampaignId": 267195,
        "Amount": "$0.00",
        "ShortDescription": "$20 instant off all Inspiron PCs under $500 with Dell Preferred Account�^",
        "LongDescription": "$20 instant off all Inspiron PCs under $500 when financed with Dell Preferred Account�^ Discount applied during checkout.",
        "LegalDescription": "Limited time offer for qualified customers. $20 instant savings applied at checkout when using a Dell Preferred Account�.^ DELL PREFERRED ACCOUNT (DPA): Offered to U.S. residents by WebBank, who determines qualifications for and terms of credit. Promotion eligibility varies and is determined by WebBank. Taxes, shipping, and other charges are extra and vary.",
        "ExpiryDate": "1/1/2018",
        "HasExpiryDate": true,
        "HasExpiryTextOverride": false,
        "AllowRemove": false,
        "ShowAmount": false
    }
    ],
    "ShowDiscountsAndCoupons": true,
    "DiscountsPopupTitle": "Additional Discounts & Coupons",
    "TotalAmount": "$219.00",
    "TotalAmountWithSubItems": "$219.00",
    "TotalAmountWithSubItemsValue": 219,
    "Quantity": 1,
    "QuantityWithSubItems": 1,
    "AllowChangeQuantity": true,
    "IsAssociatedItem": false,
    "ImageUrl": "https://si.cdn.dell.com/images/global/configurator/chassis/chromebook11-front-120x107.jpg",
    "UnitPriceAmount": "$312.85",
    "ShowManufacturerPartNumber": false,
    "ShowDellPartNumber": false,
    "ShowCatalogNumber": true,
    "CatalogNumber": "29 fncwy01s",
    "Components": [
    {
        "Name": "UPC Labels",
        "Description": "UPC Label UPC884116176527",
        "ProductCode": "UPC527",
        "Skus": [
        "389-BFZW"
        ]
    },
    {
        "Name": "Base Options",
        "Description": "Chrome OS, Intel� Celeron-N2840 Proc, 2GB RAM DDR3L Memory, 16GB eMMC SSD Storage Wifi",
        "ProductCode": "2GBN",
        "Skus": [
        "329-BCLN"
        ]
    },
    {
        "Name": "Dell Chromebook 11",
        "Description": "Dell Chromebook 11",
        "ProductCode": "C3120X",
        "Skus": [
        "210-ADWO"
        ]
    },
    {
        "Name": "Wireless",
        "Description": "Intel� Dual Band Wireless-AC 7260 802.11AC Wi-Fi + BT 4.0 LE Wireless Card",
        "ProductCode": "7260AC",
        "Skus": [
        "555-BBRS"
        ]
    },
    {
        "Name": "Support",
        "Description": "1 Year Ltd Hware Warranty: Mail-in; Customer supplies box, Dell pays shipping",
        "ProductCode": "MI1",
        "Skus": [
        "801-5292",
        "801-5338"
        ]
    },
    {
        "Name": "LCD",
        "Description": "11.6� Anti-Glare HD Non-Touch LCD",
        "ProductCode": "NTOUCH",
        "Skus": [
        "391-BBYI"
        ]
    },
    {
        "Name": "Primary Battery",
        "Description": "3 cell Battery (43 WHr)",
        "ProductCode": "43WHR",
        "Skus": [
        "451-BBNH"
        ]
    },
    {
        "Name": "Color Choice",
        "Description": "Non- Touch LCD Back Cover ( Black )",
        "ProductCode": "NTBLK",
        "Skus": [
        "320-BBND"
        ]
    },
    {
        "Name": "FGA Module",
        "Description": "Chrome_11_2GB_001/US/BTS",
        "ProductCode": "FG0006",
        "Skus": [
        "998-BLXX"
        ]
    },
    {
        "Name": "Keyboard",
        "Description": "Internal English Chrome Keyboard - Black",
        "ProductCode": "BLKUS",
        "Skus": [
        "580-AEOO"
        ]
    },
    {
        "Name": "Placemat",
        "Description": "Placemat",
        "ProductCode": "PLCMAT",
        "Skus": [
        "340-ANMZ"
        ]
    },
    {
        "Name": "Packaging Label",
        "Description": "Non-Retail Order",
        "ProductCode": "NORTL",
        "Skus": [
        "332-1530"
        ]
    },
    {
        "Name": "Packaging",
        "Description": "Ship Material - Non Retail",
        "ProductCode": "SHIP",
        "Skus": [
        "328-BCBH",
        "340-ABFC"
        ]
    },
    {
        "Name": "Processor Branding",
        "Description": "Intel(R) Celeron(R) CPU Label",
        "ProductCode": "INCLBK",
        "Skus": [
        "340-AQVB"
        ]
    },
    {
        "Name": "Power Supply",
        "Description": "65W AC Adapter, 3-pin",
        "ProductCode": "65W",
        "Skus": [
        "492-BBDD",
        "537-BBBL"
        ]
    },
    {
        "Name": "Retail Software",
        "Description": "Non-Retail Order",
        "ProductCode": "NORTL",
        "Skus": [
        "332-0550"
        ]
    },
    {
        "Name": "Documentation/Disks",
        "Description": "System Documentation, Multi Language",
        "ProductCode": "DOCENG",
        "Skus": [
        "340-AGYZ"
        ]
    },
    {
        "Name": "Labels",
        "Description": "No Labels",
        "ProductCode": "NONE",
        "Skus": [
        "817-BBBC"
        ]
    }
    ],
    "ShowComponents": true,
    "Alerts": [],
    "EvergreenMessages": [],
    "HasBundledItems": false,
    "BundledItems": [],
    "IsBundledItem": false,
    "IsFastTrack": true,
    "Metadata": {
        "itemType": "ConfigItem",
        "brand": 1177,
        "family": 11326
    },
    "HasDeliveryMessageOverride": false,
    "StopSelling": false,
    "IsStockItem": true,
    "SubTotalAmountValue": 312.85,
    "ConfigurationIdentifier": "1~fncwy01s~19~en~us~1__"
},
{
    "Id": "72f33c7c-3082-4034-98df-db6b084ad0c7",
    "IdWithoutSpecialCharacters": "72f33c7c3082403498dfdb6b084ad0c7",
    "ProductId": "fncwym02s",
    "Description": "Dell Chromebook 13 Non-Touch",
    "ShowProductStackDescription": false,
    "IsValid": true,
    "LeadTimeInfo": {
        "EstimatedShipDate": "6/15/2016",
        "ShowEstimatedShipDate": true,
        "ShowEstimatedDeliveryDate": false,
        "HasValidEstimatedDeliveryDate": false,
        "CanCalculateEstimatedDeliveryDate": true
    },
    "IsSavedCartItem": false,
    "SubTotalAmount": "$593.86",
    "DiscountsAndCouponsAmount": "-$164.86",
    "DiscountsAndCouponsAmountValue": 164.86,
    "DiscountsAndCoupons": [
    {
        "CampaignId": 503501,
        "Amount": "-$164.86",
        "ShortDescription": "Chromebook 13 price includes $164.86 instant discount.",
        "LongDescription": "Chromebook 13 price includes $164.86 instant discount.",
        "LegalDescription": "Specifications, availability and terms of offer may change without notice. Taxes and shipping charges are extra, and vary. Offer for U.S. Dell Home Systems Co. new system online purchases only.  Dell cannot be responsible for pricing or other errors, and reserves the right to cancel orders arising from such errors.",
        "ExpiryDate": "12/31/2016",
        "HasExpiryDate": true,
        "HasExpiryTextOverride": false,
        "AllowRemove": false,
        "ShowAmount": true
    },
    {
        "CampaignId": 267195,
        "Amount": "$0.00",
        "ShortDescription": "$20 instant off all Inspiron PCs under $500 with Dell Preferred Account�^",
        "LongDescription": "$20 instant off all Inspiron PCs under $500 when financed with Dell Preferred Account�^ Discount applied during checkout.",
        "LegalDescription": "Limited time offer for qualified customers. $20 instant savings applied at checkout when using a Dell Preferred Account�.^ DELL PREFERRED ACCOUNT (DPA): Offered to U.S. residents by WebBank, who determines qualifications for and terms of credit. Promotion eligibility varies and is determined by WebBank. Taxes, shipping, and other charges are extra and vary.",
        "ExpiryDate": "1/1/2018",
        "HasExpiryDate": true,
        "HasExpiryTextOverride": false,
        "AllowRemove": false,
        "ShowAmount": false
    }
    ],
    "ShowDiscountsAndCoupons": true,
    "DiscountsPopupTitle": "Additional Discounts & Coupons",
    "TotalAmount": "$429.00",
    "TotalAmountWithSubItems": "$429.00",
    "TotalAmountWithSubItemsValue": 429,
    "Quantity": 1,
    "QuantityWithSubItems": 1,
    "AllowChangeQuantity": true,
    "IsAssociatedItem": false,
    "ImageUrl": "https://si.cdn.dell.com/images/global/configurator/chassis/nb-cb-13-7310-gry-ft-120x107.jpg",
    "UnitPriceAmount": "$593.86",
    "ShowManufacturerPartNumber": false,
    "ShowDellPartNumber": false,
    "ShowCatalogNumber": true,
    "CatalogNumber": "29 fncwym02s",
    "Components": [
    {
        "Name": "UPC Label",
        "Description": "No UPC Label",
        "ProductCode": "NOLBL",
        "Skus": [
        "389-BCGW"
        ]
    },
    {
        "Name": "Base Options",
        "Description": "Chrome OS, Intel� Celeron� 3215U, 4GB",
        "ProductCode": "15CEL4",
        "Skus": [
        "321-BBZZ"
        ]
    },
    {
        "Name": "Chromebook 13",
        "Description": "Dell Chromebook 7310",
        "ProductCode": "MERBTX",
        "Skus": [
        "210-AESN"
        ]
    },
    {
        "Name": "Wireless",
        "Description": "Intel� Dual Band Wireless-AC 7260 802.11AC Wi-Fi + BT 4.0 LE Wireless Card",
        "ProductCode": "IW7260",
        "Skus": [
        "555-BBRS"
        ]
    },
    {
        "Name": "Support",
        "Description": "1 Year Ltd Hware Warranty: Mail-in; Customer supplies box, Dell pays shipping",
        "ProductCode": "MI1",
        "Skus": [
        "804-1786",
        "804-1787"
        ]
    },
    {
        "Name": "Hard Drive",
        "Description": "16GB Solid State Drive",
        "ProductCode": "16GBSSD",
        "Skus": [
        "400-AICY"
        ]
    },
    {
        "Name": "LCD",
        "Description": "13.3\" FHD Non-Touch LCD",
        "ProductCode": "NTOUCH",
        "Skus": [
        "391-BCGK"
        ]
    },
    {
        "Name": "Primary Battery",
        "Description": "67Whr 6 Cell Battery",
        "ProductCode": "6CBATT",
        "Skus": [
        "451-BBOT"
        ]
    },
    {
        "Name": "Color Choice",
        "Description": "Non-Touch LCD Cover - Black",
        "ProductCode": "BLKNTCH",
        "Skus": [
        "320-BBRD"
        ]
    },
    {
        "Name": "FGA Module",
        "Description": "Meridian_13_1H_102/US/BTO",
        "ProductCode": "FG0013",
        "Skus": [
        "998-BWJZ"
        ]
    },
    {
        "Name": "Keyboard",
        "Description": "Internal Keyboard. Layout 74 keys US-English. For US, Canada.",
        "ProductCode": "KBDUS",
        "Skus": [
        "340-AQGC",
        "580-ADXC"
        ]
    },
    {
        "Name": "Placemat",
        "Description": "Placemat",
        "ProductCode": "PLCMAT",
        "Skus": [
        "340-AQKG"
        ]
    },
    {
        "Name": "Packaging Label",
        "Description": "Non-Retail Order",
        "ProductCode": "NORTL",
        "Skus": [
        "332-1530"
        ]
    },
    {
        "Name": "Packaging",
        "Description": "Ship Material - Non Retail",
        "ProductCode": "SHIP",
        "Skus": [
        "328-BCDG",
        "340-ABSE",
        "640-BBJB"
        ]
    },
    {
        "Name": "Processor Branding",
        "Description": "Intel(R) Celeron(R) CPU Label",
        "ProductCode": "CELLBL",
        "Skus": [
        "340-AQVB"
        ]
    },
    {
        "Name": "Power Supply",
        "Description": "65 Watt AC Adaptor",
        "ProductCode": "65WAA",
        "Skus": [
        "450-AAHV",
        "450-ADTR"
        ]
    },
    {
        "Name": "Retail Software",
        "Description": "Dell.com Order",
        "ProductCode": "NORTL",
        "Skus": [
        "332-0550"
        ]
    },
    {
        "Name": "Documentation/Disks",
        "Description": "Safety/Environment and Regulatory Guide (English/French/Dutch)",
        "ProductCode": "DOC",
        "Skus": [
        "340-AGIK"
        ]
    },
    {
        "Name": "E-Star",
        "Description": "E-star 6.0 Enabled",
        "ProductCode": "ESTAR6",
        "Skus": [
        "387-BBLO"
        ]
    }
    ],
    "ShowComponents": true,
    "Alerts": [],
    "EvergreenMessages": [],
    "HasBundledItems": false,
    "BundledItems": [],
    "IsBundledItem": false,
    "IsFastTrack": false,
    "Metadata": {
        "itemType": "ConfigItem",
        "brand": 1177,
        "family": 11625
    },
    "DeliveryMessageOverride": "Ships in 7-9 business days",
    "HasDeliveryMessageOverride": true,
    "StopSelling": false,
    "IsStockItem": false,
    "SubTotalAmountValue": 593.86,
    "ConfigurationIdentifier": "1~fncwym02s~19~en~us~1__"
},
{
    "Id": "ad218232-a549-4d73-9252-94347723ef5c",
    "IdWithoutSpecialCharacters": "ad218232a5494d73925294347723ef5c",
    "ProductId": "cto01le747014us",
    "Description": "New Latitude 14 7000 Series",
    "ShowProductStackDescription": false,
    "IsValid": true,
    "LeadTimeInfo": {
        "EstimatedShipDate": "6/13/2016",
        "ShowEstimatedShipDate": true,
        "ShowEstimatedDeliveryDate": false,
        "HasValidEstimatedDeliveryDate": false,
        "CanCalculateEstimatedDeliveryDate": true
    },
    "IsSavedCartItem": false,
    "SubTotalAmount": "$1,541.43",
    "DiscountsAndCouponsAmount": "-$462.43",
    "DiscountsAndCouponsAmountValue": 462.43,
    "DiscountsAndCoupons": [
    {
        "CampaignId": 534575,
        "Amount": "-$462.43",
        "ShortDescription": "Save 30% on select New Latitude 14 7000 Series Business PCs!",
        "LongDescription": "Save 30% on select New Latitude 14 7000 Series Business PCs!",
        "LegalDescription": "",
        "ExpiryDate": "12/6/2016",
        "HasExpiryDate": true,
        "HasExpiryTextOverride": false,
        "AllowRemove": false,
        "ShowAmount": true
    }
    ],
    "ShowDiscountsAndCoupons": true,
    "DiscountsPopupTitle": "Additional Discounts & Coupons",
    "TotalAmount": "$1,079.00",
    "TotalAmountWithSubItems": "$1,079.00",
    "TotalAmountWithSubItemsValue": 1079,
    "Quantity": 1,
    "QuantityWithSubItems": 1,
    "AllowChangeQuantity": true,
    "IsAssociatedItem": false,
    "ImageUrl": "https://si.cdn.dell.com/images/global/configurator/chassis/latit-14-e7470-t-bk-ft-wnd-120x107.jpg",
    "UnitPriceAmount": "$1,541.43",
    "ShowManufacturerPartNumber": false,
    "ShowDellPartNumber": false,
    "ShowCatalogNumber": true,
    "CatalogNumber": "4 cto01le747014us",
    "Components": [
    {
        "Name": "Dell Latitude E7470",
        "Description": "Dell Latitude E7470, CTO",
        "ProductCode": "E7470T",
        "Skus": [
        "210-AETM"
        ]
    },
    {
        "Name": "Processor",
        "Description": "Intel� Core� i3-6100U (Dual Core, 2.3GHz, 3M cache, 15W)",
        "ProductCode": "I36100",
        "Skus": [
        "379-BCFV"
        ]
    },
    {
        "Name": "Operating System",
        "Description": "Windows 7 Professional English, French, Spanish 64bit (Includes Windows 10 Pro License)",
        "ProductCode": "DW10P7M",
        "Skus": [
        "619-AIKP"
        ]
    },
    {
        "Name": "Processor Information",
        "Description": "I3-6100,U,T,E7470",
        "ProductCode": "UI3",
        "Skus": [
        "338-BHPQ"
        ]
    },
    {
        "Name": "Office Productivity Software",
        "Description": "Microsoft Office 30 Day Trial",
        "ProductCode": "16MUI",
        "Skus": [
        "658-BCSB"
        ]
    },
    {
        "Name": "Dell Data Protection Solutions",
        "Description": "No DDPE Encryption Software",
        "ProductCode": "NODDPE",
        "Skus": [
        "954-3465"
        ]
    },
    {
        "Name": "Dell Threat Protection and Endpoint Security Suite",
        "Description": "No Dell Data Protection | Endpoint Security Suite Software",
        "ProductCode": "NODDP",
        "Skus": [
        "634-BENZ"
        ]
    },
    {
        "Name": "LCD",
        "Description": "14.0� HD (1366 x 768) Anti Glare LCD, Camera and Mic, WLAN/WWAN Capable",
        "ProductCode": "LNCHWW",
        "Skus": [
        "320-BBRB",
        "391-BCFM"
        ]
    },
    {
        "Name": "Memory",
        "Description": "4GB (1x4GB) 2133MHz DDR4 Memory",
        "ProductCode": "4G1D4",
        "Skus": [
        "370-ACDC"
        ]
    },
    {
        "Name": "Hard Drive",
        "Description": "M.2 128GB SATA Class 20 Solid State Drive",
        "ProductCode": "128SDS",
        "Skus": [
        "400-AHHX"
        ]
    },
    {
        "Name": "Intel Responsiveness Technologies",
        "Description": "Intel Rapid Storage Technology",
        "ProductCode": "IRST",
        "Skus": [
        "409-BBIV"
        ]
    },
    {
        "Name": "Systems Management",
        "Description": "No Out-of-Band Systems Management",
        "ProductCode": "NOVPRO",
        "Skus": [
        "631-AARE"
        ]
    },
    {
        "Name": "Wireless",
        "Description": "Intel� Dual-Band Wireless-AC 8260 Wi-Fi + BT 4.1 Wireless Card (2x2)",
        "ProductCode": "8260AC",
        "Skus": [
        "555-BCMT"
        ]
    },
    {
        "Name": "Driver",
        "Description": "Intel� Dual-Band Wireless-AC 8260 Wi-Fi + BT 4.1 Wireless Driver (2x2)",
        "ProductCode": "8260",
        "Skus": [
        "555-BCUZ"
        ]
    },
    {
        "Name": "Processor Branding",
        "Description": "LABEL,INTEL,CI3,6,SML",
        "ProductCode": "CI3SML",
        "Skus": [
        "389-BHGC"
        ]
    },
    {
        "Name": "Mobile Broadband",
        "Description": "No Mobile Broadband Card",
        "ProductCode": "NOWW",
        "Skus": [
        "362-BBBB"
        ]
    },
    {
        "Name": "Keyboard",
        "Description": "82 Key Internal English Keyboard",
        "ProductCode": "ENG",
        "Skus": [
        "583-BCUP"
        ]
    },
    {
        "Name": "PalmRest",
        "Description": "No Smart Card or Fingerprint Reader for 82 Key, Single Point Keyboard",
        "ProductCode": "NO2S",
        "Skus": [
        "346-BBQY"
        ]
    },
    {
        "Name": "AC Adapter",
        "Description": "65 Watt AC Adaptor",
        "ProductCode": "65W3P",
        "Skus": [
        "450-AAYT"
        ]
    },
    {
        "Name": "Cable",
        "Description": "Power Cord, US",
        "ProductCode": "PWRUS",
        "Skus": [
        "450-AAEJ"
        ]
    },
    {
        "Name": "Primary Battery",
        "Description": "Primary 3-cell 37W/HR Battery with ExpressCharge�",
        "ProductCode": "3C",
        "Skus": [
        "451-BBPL"
        ]
    },
    {
        "Name": "Docking Solutions",
        "Description": "No Docking Station",
        "ProductCode": "NONE",
        "Skus": [
        "452-BBSE"
        ]
    },
    {
        "Name": "Carrying Cases",
        "Description": "No Carrying Case",
        "ProductCode": "NONE",
        "Skus": [
        "460-BBEX"
        ]
    },
    {
        "Name": "Operating System Recovery Options",
        "Description": "Windows 10 OS Recovery 64bit - DVD",
        "ProductCode": "M10PD6M",
        "Skus": [
        "620-AAYW"
        ]
    },
    {
        "Name": "Documentation/Disks",
        "Description": "Safety/Environment and Regulatory Guide (English/French Multi-language)",
        "ProductCode": "EFDOC",
        "Skus": [
        "340-AGIK"
        ]
    },
    {
        "Name": "Placemat",
        "Description": "Quick Reference Guide",
        "ProductCode": "PLCMT",
        "Skus": [
        "340-AUSC"
        ]
    },
    {
        "Name": "Diagnostic CD / Diskette",
        "Description": "No Resource DVD",
        "ProductCode": "NRDVD",
        "Skus": [
        "430-XXYG"
        ]
    },
    {
        "Name": "TAA",
        "Description": "No TAA",
        "ProductCode": "NOTAA",
        "Skus": [
        "340-ACQQ"
        ]
    },
    {
        "Name": "E-Star",
        "Description": "ESTAR6.1",
        "ProductCode": "ESTAR",
        "Skus": [
        "387-BBKE"
        ]
    },
    {
        "Name": "Labels",
        "Description": "Intel� Ultrabook Logo",
        "ProductCode": "UTRABK",
        "Skus": [
        "389-BCVY"
        ]
    },
    {
        "Name": "Label",
        "Description": "Regulatory Label Included",
        "ProductCode": "REG",
        "Skus": [
        "389-BEYY"
        ]
    },
    {
        "Name": "UPC Label",
        "Description": "No UPC Label",
        "ProductCode": "NOLBL",
        "Skus": [
        "389-BCGW"
        ]
    },
    {
        "Name": "Canada Ship Options",
        "Description": "US No Canada Ship Charge",
        "ProductCode": "USNONE",
        "Skus": [
        "332-1286"
        ]
    },
    {
        "Name": "Packaging",
        "Description": "MIX SHIP Config (DAO)",
        "ProductCode": "SHPMX",
        "Skus": [
        "340-AAPP",
        "340-AQIR"
        ]
    },
    {
        "Name": "Transportation from ODM to region",
        "Description": "Standard Shipment",
        "ProductCode": "STND",
        "Skus": [
        "800-BBGT"
        ]
    },
    {
        "Name": "Configuration Details",
        "Description": "Flex 1",
        "ProductCode": "FLEX1",
        "Skus": [
        "379-BCHD"
        ]
    },
    {
        "Name": "FGA Module",
        "Description": "Dell Latitude E7470, CTO/BTO",
        "ProductCode": "FG0040",
        "Skus": [
        "998-BTNU"
        ]
    },
    {
        "Name": "Non-Microsoft Application Software",
        "Description": "OS Recovery",
        "ProductCode": "WIN7",
        "Skus": [
        "340-ADFZ",
        "340-AUSB",
        "422-0007",
        "422-0052",
        "637-AAAS",
        "640-BBDF",
        "640-BBEV",
        "640-BBLW",
        "658-BBMR",
        "658-BBNF"
        ]
    },
    {
        "Name": "Service",
        "Description": "3 Year Hardware Service with In-Home/Onsite Service After Remote Diagnosis",
        "ProductCode": "NBD3",
        "Skus": [
        "804-2237",
        "804-2238"
        ]
    },
    {
        "Name": "Mouse",
        "Description": "No Mouse Selected",
        "ProductCode": "NOMSE",
        "Skus": [
        "570-AADK"
        ]
    },
    {
        "Name": "Accessories",
        "Description": "Dell Docking Spacer for E7x40",
        "ProductCode": "SPACER",
        "Skus": [
        "452-BBDB"
        ]
    }
    ],
    "ShowComponents": true,
    "Alerts": [],
    "EvergreenMessages": [],
    "HasBundledItems": false,
    "BundledItems": [],
    "IsBundledItem": false,
    "IsFastTrack": false,
    "Metadata": {
        "itemType": "ConfigItem",
        "brand": 3,
        "family": 11628
    },
    "DeliveryMessageOverride": "Ships in 4-6 business days",
    "HasDeliveryMessageOverride": true,
    "StopSelling": false,
    "IsStockItem": false,
    "SubTotalAmountValue": 1541.43,
    "ConfigurationIdentifier": "1~cto01le747014us~04~en~us~1__572;FG0040;1"
},
{
    "Id": "572dba80-64a1-417a-9a8c-8e24290b6273",
    "IdWithoutSpecialCharacters": "572dba8064a1417a9a8c8e24290b6273",
    "ProductId": "s001uble557015us",
    "Description": "New Latitude 15 5000 Series (E5570)",
    "ShowProductStackDescription": false,
    "IsValid": true,
    "LeadTimeInfo": {
        "EstimatedShipDate": "6/6/2016",
        "ShowEstimatedShipDate": true,
        "ShowEstimatedDeliveryDate": false,
        "HasValidEstimatedDeliveryDate": false,
        "CanCalculateEstimatedDeliveryDate": true
    },
    "IsSavedCartItem": false,
    "SubTotalAmount": "$1,212.86",
    "DiscountsAndCouponsAmount": "-$463.86",
    "DiscountsAndCouponsAmountValue": 463.86,
    "DiscountsAndCoupons": [
    {
        "CampaignId": 601904,
        "Amount": "-$463.86",
        "ShortDescription": "Save 38% on select Latitude E5570 Series Business PCs!",
        "LongDescription": "Save 38% on select Latitude E5570 Series Business PCs!",
        "LegalDescription": "",
        "ExpiryDate": "6/5/2017",
        "HasExpiryDate": true,
        "HasExpiryTextOverride": false,
        "AllowRemove": false,
        "ShowAmount": true
    }
    ],
    "ShowDiscountsAndCoupons": true,
    "DiscountsPopupTitle": "Additional Discounts & Coupons",
    "TotalAmount": "$749.00",
    "TotalAmountWithSubItems": "$749.00",
    "TotalAmountWithSubItemsValue": 749,
    "Quantity": 1,
    "QuantityWithSubItems": 1,
    "AllowChangeQuantity": true,
    "IsAssociatedItem": false,
    "ImageUrl": "https://si.cdn.dell.com/images/global/configurator/chassis/lat-15-e5570-nt-bk-ft-120x107.jpg",
    "UnitPriceAmount": "$1,212.86",
    "ShowManufacturerPartNumber": false,
    "ShowDellPartNumber": false,
    "ShowCatalogNumber": true,
    "CatalogNumber": "4 s001uble557015us",
    "Components": [
    {
        "Name": "Dell Latitude E5570",
        "Description": "Dell Latitude E5570, BTX",
        "ProductCode": "5570X",
        "Skus": [
        "210-AENT"
        ]
    },
    {
        "Name": "Processor",
        "Description": "Intel� Core� i5-6200U (Dual Core, 2.3GHz, 3M cache, 15W)",
        "ProductCode": "I56200",
        "Skus": [
        "379-BCFW"
        ]
    },
    {
        "Name": "Graphics",
        "Description": "Intel� HD Graphics 520, for I5-6200U (non-Vpro)",
        "ProductCode": "UUI5",
        "Skus": [
        "338-BHLM"
        ]
    },
    {
        "Name": "Processor Branding",
        "Description": "LABEL,INTELL,CI5,6,SML",
        "ProductCode": "CI5SML",
        "Skus": [
        "389-BHIB"
        ]
    },
    {
        "Name": "Operating System",
        "Description": "Windows 7 Professional English, French, Spanish 64bit (Includes Windows 10 Pro License)",
        "ProductCode": "DW10P7M",
        "Skus": [
        "619-AIKP"
        ]
    },
    {
        "Name": "Microsoft Application Software",
        "Description": "Microsoft Office 30 Day Trial",
        "ProductCode": "16MUI",
        "Skus": [
        "658-BCSB"
        ]
    },
    {
        "Name": "Non-Microsoft Application Software",
        "Description": "OS Recovery",
        "ProductCode": "WIN7",
        "Skus": [
        "340-ADFZ",
        "340-AQCS",
        "422-0007",
        "422-0052",
        "637-AAAS",
        "640-BBDF",
        "640-BBEV",
        "640-BBLW",
        "658-BBMR",
        "658-BBNF"
        ]
    },
    {
        "Name": "Dell Data Protection Solutions",
        "Description": "DDPE Personal Edition License + ProSupport for Software 1 Year",
        "ProductCode": "PDPE1Y",
        "Skus": [
        "421-9984",
        "954-3455"
        ]
    },
    {
        "Name": "Dell Threat Protection and Endpoint Security Suite",
        "Description": "No Dell Data Protection | Endpoint Security Suite Software",
        "ProductCode": "NODDP",
        "Skus": [
        "634-BENZ"
        ]
    },
    {
        "Name": "LCD",
        "Description": "15.6\" HD (1366 x 768) Anti Glare LCD, Camera and Microphone, WWAN Capable",
        "ProductCode": "LNCHWW",
        "Skus": [
        "320-BBPU",
        "391-BCDK"
        ]
    },
    {
        "Name": "Memory",
        "Description": "4GB (1x4GB) 2133MHz DDR4 Memory",
        "ProductCode": "4G1D4",
        "Skus": [
        "370-ACDC"
        ]
    },
    {
        "Name": "Hard Drive",
        "Description": "500GB 7mm 7.2krpm HD",
        "ProductCode": "500GB",
        "Skus": [
        "400-AIIU",
        "575-BBFI"
        ]
    },
    {
        "Name": "Intel Rapid Start and Smart Connect",
        "Description": "Intel Rapid Storage Technology",
        "ProductCode": "IRST",
        "Skus": [
        "409-BBFX"
        ]
    },
    {
        "Name": "Wireless",
        "Description": "Intel� Dual-Band Wireless-AC 8260 Wi-Fi + BT 4.1 Wireless Card (2x2)",
        "ProductCode": "8260AC",
        "Skus": [
        "555-BCMT"
        ]
    },
    {
        "Name": "Driver",
        "Description": "Intel� Dual-Band Wireless-AC 8260 Wi-Fi + BT 4.1 Wireless Driver (2x2)",
        "ProductCode": "W8260",
        "Skus": [
        "555-BCNB"
        ]
    },
    {
        "Name": "Mobile Broadband",
        "Description": "No Wireless WAN Card",
        "ProductCode": "NOWW",
        "Skus": [
        "362-BBBB"
        ]
    },
    {
        "Name": "Keyboard",
        "Description": "Internal Dual Pointing Backlit Keyboard, English",
        "ProductCode": "KIBDENG",
        "Skus": [
        "580-ACLF",
        "583-BCTJ"
        ]
    },
    {
        "Name": "PalmRest",
        "Description": "Dual Pointing palmrest without Smart Card",
        "ProductCode": "DPRNSC",
        "Skus": [
        "346-BBRS"
        ]
    },
    {
        "Name": "Adapter",
        "Description": "65 Watt AC Adaptor",
        "ProductCode": "65W3P",
        "Skus": [
        "450-AAYT"
        ]
    },
    {
        "Name": "Cable",
        "Description": "Power Cord, US",
        "ProductCode": "PWRUS",
        "Skus": [
        "450-AAEJ"
        ]
    },
    {
        "Name": "Dell Battery",
        "Description": "Primary 4-cell 62W/HR Battery",
        "ProductCode": "4C",
        "Skus": [
        "451-BBPV"
        ]
    },
    {
        "Name": "Docking Stations",
        "Description": "No Docking Station",
        "ProductCode": "NONE",
        "Skus": [
        "452-BBSE"
        ]
    },
    {
        "Name": "Carrying Cases",
        "Description": "No Carrying Case",
        "ProductCode": "NONE",
        "Skus": [
        "460-BBEX"
        ]
    },
    {
        "Name": "Systems Management",
        "Description": "No Out-of-Band Systems Management",
        "ProductCode": "NOVPRO",
        "Skus": [
        "631-AARP"
        ]
    },
    {
        "Name": "Operating System Recovery Options",
        "Description": "Windows 10 OS Recovery 64bit - DVD",
        "ProductCode": "M10PD6M",
        "Skus": [
        "620-AAYW"
        ]
    },
    {
        "Name": "Documentation/Disks",
        "Description": "Safety/Environment and Regulatory Guide (English/French Multi-language)",
        "ProductCode": "EFDOC",
        "Skus": [
        "340-AGIK"
        ]
    },
    {
        "Name": "Placemat",
        "Description": "Quick Reference Guide",
        "ProductCode": "PLCMT",
        "Skus": [
        "340-ARKU"
        ]
    },
    {
        "Name": "Diagnostic CD / Diskette",
        "Description": "No Resource DVD",
        "ProductCode": "NRDVD",
        "Skus": [
        "430-XXYG"
        ]
    },
    {
        "Name": "TAA",
        "Description": "No TAA",
        "ProductCode": "NOTAA",
        "Skus": [
        "340-ACQQ"
        ]
    },
    {
        "Name": "Energy Efficient Option",
        "Description": "ESTAR 6.1",
        "ProductCode": "ESTAR",
        "Skus": [
        "387-BBKF"
        ]
    },
    {
        "Name": "Label",
        "Description": "Regulatory Label Included",
        "ProductCode": "REG",
        "Skus": [
        "389-BEYY"
        ]
    },
    {
        "Name": "Support Tech Sheet and Powercord",
        "Description": "POD Label",
        "ProductCode": "POD",
        "Skus": [
        "389-BCDK"
        ]
    },
    {
        "Name": "Canada Ship Options",
        "Description": "US No Canada Ship Charge",
        "ProductCode": "USNONE",
        "Skus": [
        "332-1286"
        ]
    },
    {
        "Name": "Packaging",
        "Description": "Smart Select MIN SHIP (DAO/LATAM)",
        "ProductCode": "SHPMN",
        "Skus": [
        "340-AAPP",
        "340-AQJX"
        ]
    },
    {
        "Name": "Transportation from ODM to region",
        "Description": "BTS Shipment",
        "ProductCode": "BTS",
        "Skus": [
        "800-BBGG"
        ]
    },
    {
        "Name": "FGA Module",
        "Description": "E5570_2H16_001/US/BTS",
        "ProductCode": "FG0060",
        "Skus": [
        "998-BWLD"
        ]
    },
    {
        "Name": "Hardware Support Services",
        "Description": "1 Year Hardware Service with In-Home/Onsite Service After Remote Diagnosis",
        "ProductCode": "NBD1",
        "Skus": [
        "997-8317",
        "997-8328"
        ]
    },
    {
        "Name": "All in one Solution",
        "Description": "No Stand",
        "ProductCode": "NOSTND",
        "Skus": [
        "575-BBCH"
        ]
    },
    {
        "Name": "Mouse",
        "Description": "No Mouse Selected",
        "ProductCode": "NOMSE",
        "Skus": [
        "570-AADK"
        ]
    },
    {
        "Name": "Accessories",
        "Description": "Dell Docking Spacer",
        "ProductCode": "SPACER",
        "Skus": [
        "452-BBDB"
        ]
    }
    ],
    "ShowComponents": true,
    "Alerts": [],
    "EvergreenMessages": [],
    "HasBundledItems": false,
    "BundledItems": [],
    "IsBundledItem": false,
    "IsFastTrack": true,
    "Metadata": {
        "itemType": "ConfigItem",
        "brand": 3,
        "family": 11548
    },
    "HasDeliveryMessageOverride": false,
    "StopSelling": false,
    "IsStockItem": true,
    "SubTotalAmountValue": 1212.86,
    "ConfigurationIdentifier": "1~s001uble557015us~04~en~us~1__572;FG0060;1"
},
{
    "Id": "54365fe3-8d9e-47a4-9cee-73592a16349f",
    "IdWithoutSpecialCharacters": "54365fe38d9e47a49cee73592a16349f",
    "ProductId": "cto01al356015us",
    "Description": "New Latitude 15 3000 Series",
    "ShowProductStackDescription": false,
    "IsValid": true,
    "LeadTimeInfo": {
        "EstimatedShipDate": "6/14/2016",
        "ShowEstimatedShipDate": true,
        "ShowEstimatedDeliveryDate": false,
        "HasValidEstimatedDeliveryDate": false,
        "CanCalculateEstimatedDeliveryDate": true
    },
    "IsSavedCartItem": false,
    "SubTotalAmount": "$658.43",
    "DiscountsAndCouponsAmount": "-$197.53",
    "DiscountsAndCouponsAmountValue": 197.53,
    "DiscountsAndCoupons": [
    {
        "CampaignId": 534489,
        "Amount": "-$197.53",
        "ShortDescription": "Save 30% on select New Latitude 14 3000 Series Business PCs!",
        "LongDescription": "Save 30% on select New Latitude 14 3000 Series Business PCs!",
        "LegalDescription": "",
        "ExpiryDate": "12/6/2016",
        "HasExpiryDate": true,
        "HasExpiryTextOverride": false,
        "AllowRemove": false,
        "ShowAmount": true
    }
    ],
    "ShowDiscountsAndCoupons": true,
    "DiscountsPopupTitle": "Additional Discounts & Coupons",
    "TotalAmount": "$460.90",
    "TotalAmountWithSubItems": "$460.90",
    "TotalAmountWithSubItemsValue": 460.9,
    "Quantity": 1,
    "QuantityWithSubItems": 1,
    "AllowChangeQuantity": true,
    "IsAssociatedItem": false,
    "ImageUrl": "https://si.cdn.dell.com/images/global/configurator/chassis/lat-15-3560-nt-bk-ft-120x107.jpg",
    "UnitPriceAmount": "$658.43",
    "ShowManufacturerPartNumber": false,
    "ShowDellPartNumber": false,
    "ShowCatalogNumber": true,
    "CatalogNumber": "4 cto01al356015us",
    "Components": [
    {
        "Name": "Base",
        "Description": "Dell Latitude 3560 CTO",
        "ProductCode": "3560T",
        "Skus": [
        "210-AEXE"
        ]
    },
    {
        "Name": "Processor",
        "Description": "Intel� Celeron 3215U (Dual Core, 1.5GHz, 2M cache, 15W)",
        "ProductCode": "C3215",
        "Skus": [
        "379-BCGG"
        ]
    },
    {
        "Name": "Operating System",
        "Description": "Windows 10 Home 64bit English, French, Spanish",
        "ProductCode": "10H64M",
        "Skus": [
        "619-AHHY"
        ]
    },
    {
        "Name": "System Configuration",
        "Description": "Intel Celeron 3215U Processor with Intel Integrated HD Graphics",
        "ProductCode": "CELUMA",
        "Skus": [
        "338-BHKM"
        ]
    },
    {
        "Name": "Microsoft Application Software",
        "Description": "Microsoft Office 30 Day Trial",
        "ProductCode": "16MUI",
        "Skus": [
        "658-BCSB"
        ]
    },
    {
        "Name": "Non-Microsoft Application Software",
        "Description": "Additional Software 10",
        "ProductCode": "WIN10",
        "Skus": [
        "340-ADFZ",
        "340-AJFC",
        "422-0007",
        "525-BBCL",
        "640-BBLW",
        "658-BBMR",
        "658-BBNF",
        "658-BCTY",
        "658-BCUV"
        ]
    },
    {
        "Name": "Keyboard",
        "Description": "Internal Single Pointing Keyboard, English",
        "ProductCode": "ENGKBD",
        "Skus": [
        "580-ACJB"
        ]
    },
    {
        "Name": "Dell Threat Protection and Endpoint Security Suite",
        "Description": "No Dell Data Protection | Endpoint Security Suite Software",
        "ProductCode": "NODDP",
        "Skus": [
        "634-BENZ"
        ]
    },
    {
        "Name": "Dell Data Protection Solutions",
        "Description": "No DDPE Encryption Software",
        "ProductCode": "NODDPE",
        "Skus": [
        "954-3465"
        ]
    },
    {
        "Name": "LCD",
        "Description": "15.6� HD (1366 x 768) Anti Glare (16:9) WLED",
        "ProductCode": "NTHD",
        "Skus": [
        "320-BBQM",
        "391-BCES"
        ]
    },
    {
        "Name": "Hard Drive",
        "Description": "500GB 7200RPM Hard Disk Drive",
        "ProductCode": "500GB",
        "Skus": [
        "400-AIIU"
        ]
    },
    {
        "Name": "Memory",
        "Description": "4GB (1x4GB) 1600MHz DDR3L Memory",
        "ProductCode": "4G1D3",
        "Skus": [
        "370-AAQI"
        ]
    },
    {
        "Name": "Wireless",
        "Description": "Intel� 3165 Dual Band 802.11 AC with BT 4.0 Wireless Card (1x1)",
        "ProductCode": "3165AC",
        "Skus": [
        "555-BCMS"
        ]
    },
    {
        "Name": "Driver",
        "Description": "Intel 3165 Dual Band 802.11 AC with BT 4.0 Wireless Driver (1x1)",
        "ProductCode": "W7231",
        "Skus": [
        "555-BCOI"
        ]
    },
    {
        "Name": "Processor Branding",
        "Description": "Intel� Celeron� Label",
        "ProductCode": "CEL",
        "Skus": [
        "340-AQVB"
        ]
    },
    {
        "Name": "Video Card",
        "Description": "Intel� HD Graphics GT2",
        "ProductCode": "UMA",
        "Skus": [
        "490-BCOV"
        ]
    },
    {
        "Name": "PalmRest",
        "Description": "No Fingerprint Reader",
        "ProductCode": "NFPR",
        "Skus": [
        "346-BBSC"
        ]
    },
    {
        "Name": "Power Supply",
        "Description": "65W AC Adapter, 3-pin",
        "ProductCode": "65W",
        "Skus": [
        "492-BBDD"
        ]
    },
    {
        "Name": "Cable",
        "Description": "US Power Cord",
        "ProductCode": "US125V",
        "Skus": [
        "537-BBBL"
        ]
    },
    {
        "Name": "Primary Battery",
        "Description": "40 Whr 4-cell Li-Ion (Cylindrical) with ExpressCharge�",
        "ProductCode": "4C",
        "Skus": [
        "451-BBPR"
        ]
    },
    {
        "Name": "Camera Software",
        "Description": "No Camera Software Selected",
        "ProductCode": "NOCMRA",
        "Skus": [
        "319-BBBK"
        ]
    },
    {
        "Name": "Docking Solutions",
        "Description": "No Docking Station",
        "ProductCode": "NONE",
        "Skus": [
        "452-BBSE"
        ]
    },
    {
        "Name": "Carrying Cases",
        "Description": "No Carrying Case",
        "ProductCode": "NONE",
        "Skus": [
        "460-BBEX"
        ]
    },
    {
        "Name": "Operating System Recovery Options",
        "Description": "Windows 10 OS Recovery 64bit - USB",
        "ProductCode": "M10U6M",
        "Skus": [
        "620-AAYY"
        ]
    },
    {
        "Name": "Documentation/Disks",
        "Description": "Safety/Environment and Regulatory Guide (English/French Multi-language)",
        "ProductCode": "EFDOC",
        "Skus": [
        "340-AGIK",
        "640-BBJB"
        ]
    },
    {
        "Name": "Placemat",
        "Description": "Quick Reference Guide for Windows 10",
        "ProductCode": "PLMTW10",
        "Skus": [
        "340-ASJN"
        ]
    },
    {
        "Name": "Diagnostic CD / Diskette",
        "Description": "No Resource DVD",
        "ProductCode": "NRDVD",
        "Skus": [
        "430-XXYG"
        ]
    },
    {
        "Name": "TAA",
        "Description": "No TAA",
        "ProductCode": "NOTAA",
        "Skus": [
        "340-ACQQ"
        ]
    },
    {
        "Name": "E-Star",
        "Description": "Energy Star 6.0",
        "ProductCode": "ESTAR",
        "Skus": [
        "387-BBKC"
        ]
    },
    {
        "Name": "Label",
        "Description": "Regulatory Label Included",
        "ProductCode": "REG",
        "Skus": [
        "389-BEYY"
        ]
    },
    {
        "Name": "UPC Label",
        "Description": "No UPC Label",
        "ProductCode": "NOUPC",
        "Skus": [
        "389-BCGW"
        ]
    },
    {
        "Name": "Canada Ship Options",
        "Description": "US No Canada Ship Charge",
        "ProductCode": "USNONE",
        "Skus": [
        "332-1286"
        ]
    },
    {
        "Name": "Packaging",
        "Description": "Mixed Model Shipping Material",
        "ProductCode": "SHPMX",
        "Skus": [
        "340-AASO",
        "340-AQMG"
        ]
    },
    {
        "Name": "Transportation from ODM to region",
        "Description": "BTO Standard Shipment",
        "ProductCode": "STND",
        "Skus": [
        "800-BBGS"
        ]
    },
    {
        "Name": "Pricing Information",
        "Description": "Flex 1",
        "ProductCode": "FLEX 1",
        "Skus": [
        "610-BBRC"
        ]
    },
    {
        "Name": "FGA Module",
        "Description": "Generic FHC/BTO",
        "ProductCode": "FG0018",
        "Skus": [
        "998-BRVN"
        ]
    },
    {
        "Name": "Hardware Support Services",
        "Description": "1 Year Hardware Service with In-Home/Onsite Service After Remote Diagnosis",
        "ProductCode": "NBD1",
        "Skus": [
        "997-6727",
        "997-6735"
        ]
    },
    {
        "Name": "Mouse",
        "Description": "No Mouse Selected",
        "ProductCode": "NOMSE",
        "Skus": [
        "570-AADK"
        ]
    }
    ],
    "ShowComponents": true,
    "Alerts": [],
    "EvergreenMessages": [],
    "HasBundledItems": false,
    "BundledItems": [],
    "IsBundledItem": false,
    "IsFastTrack": false,
    "Metadata": {
        "itemType": "ConfigItem",
        "brand": 3,
        "family": 11658
    },
    "DeliveryMessageOverride": "Ships in 6-8 business days",
    "HasDeliveryMessageOverride": true,
    "StopSelling": false,
    "IsStockItem": false,
    "SubTotalAmountValue": 658.43,
    "ConfigurationIdentifier": "1~cto01al356015us~04~en~us~1__572;FG0018;1"
},
{
    "Id": "08846eea-c191-4520-9659-243637308626",
    "IdWithoutSpecialCharacters": "08846eeac19145209659243637308626",
    "ProductId": "ctov355815010rus",
    "Description": "Vostro 15 3000 Series",
    "ShowProductStackDescription": false,
    "IsValid": true,
    "LeadTimeInfo": {
        "EstimatedShipDate": "6/14/2016",
        "ShowEstimatedShipDate": true,
        "ShowEstimatedDeliveryDate": false,
        "HasValidEstimatedDeliveryDate": false,
        "CanCalculateEstimatedDeliveryDate": true
    },
    "IsSavedCartItem": false,
    "SubTotalAmount": "$498.57",
    "DiscountsAndCouponsAmount": "-$149.57",
    "DiscountsAndCouponsAmountValue": 149.57,
    "DiscountsAndCoupons": [
    {
        "CampaignId": 560426,
        "Amount": "-$149.57",
        "ShortDescription": "Save 30% on select Vostro 3558 notebooks through Dell Small Business!",
        "LongDescription": "Save 30% on select Vostro 3558 notebooks through Dell Small Business!",
        "LegalDescription": "",
        "ExpiryDate": "2/8/2017",
        "HasExpiryDate": true,
        "HasExpiryTextOverride": false,
        "AllowRemove": false,
        "ShowAmount": true
    }
    ],
    "ShowDiscountsAndCoupons": true,
    "DiscountsPopupTitle": "Additional Discounts & Coupons",
    "TotalAmount": "$349.00",
    "TotalAmountWithSubItems": "$349.00",
    "TotalAmountWithSubItemsValue": 349,
    "Quantity": 1,
    "QuantityWithSubItems": 1,
    "AllowChangeQuantity": true,
    "IsAssociatedItem": false,
    "ImageUrl": "https://si.cdn.dell.com/images/global/configurator/chassis/vostro-15-3558-blk-ft-120x107.jpg",
    "UnitPriceAmount": "$498.57",
    "ShowManufacturerPartNumber": false,
    "ShowDellPartNumber": false,
    "ShowCatalogNumber": true,
    "CatalogNumber": "4 ctov355815010rus",
    "Components": [
    {
        "Name": "Processor",
        "Description": "Intel� Celeron� 3215U Processor (2M Cache, 1.70 GHz)",
        "ProductCode": "CT36F7",
        "Skus": [
        "338-BIMV"
        ]
    },
    {
        "Name": "Operating System",
        "Description": "Windows 10 Home 64bit English, French, Spanish",
        "ProductCode": "10H64M",
        "Skus": [
        "619-AHHY"
        ]
    },
    {
        "Name": "Office Productivity Software",
        "Description": "Microsoft Office 30 Day Trial",
        "ProductCode": "16MUI",
        "Skus": [
        "658-BCSB"
        ]
    },
    {
        "Name": "Memory",
        "Description": "4GB Single Channel DDR3 1600MHz (4GBx1)",
        "ProductCode": "4GB1D",
        "Skus": [
        "370-AAWY"
        ]
    },
    {
        "Name": "Security Software",
        "Description": "McAfee Security Center 12 month Subscription",
        "ProductCode": "MSBC12M",
        "Skus": [
        "525-0013"
        ]
    },
    {
        "Name": "Operating System Recovery Options",
        "Description": "Windows 10 OS Recovery 64bit - DVD",
        "ProductCode": "M10D6M",
        "Skus": [
        "620-AAZE"
        ]
    },
    {
        "Name": "Driver",
        "Description": "Driver for Dell Wireless 3160",
        "ProductCode": "3160DR",
        "Skus": [
        "555-BCJY"
        ]
    },
    {
        "Name": "Dell Vostro 3558",
        "Description": "Dell Vostro 3558 BTX",
        "ProductCode": "3558X",
        "Skus": [
        "210-AEHO"
        ]
    },
    {
        "Name": "Keyboard",
        "Description": "Standard Keyboard,English",
        "ProductCode": "ENGKBD",
        "Skus": [
        "583-BCCZ"
        ]
    },
    {
        "Name": "Video Card",
        "Description": "Intel� HD Graphics 4400",
        "ProductCode": "UMA",
        "Skus": [
        "490-BBMU"
        ]
    },
    {
        "Name": "Hard Drive",
        "Description": "500GB 5400 rpm Hard Drive",
        "ProductCode": "500G5K",
        "Skus": [
        "400-AAYY"
        ]
    },
    {
        "Name": "Wireless",
        "Description": "802.11ac + Bluetooth 4.0, Dual Band 2.4&5 GHz, 1x1",
        "ProductCode": "3160",
        "Skus": [
        "555-BCIY"
        ]
    },
    {
        "Name": "Documentation/Disks",
        "Description": "Safety/Environment and Regulatory Guide (English/French Multi-language)",
        "ProductCode": "EFDOC",
        "Skus": [
        "340-AGIK"
        ]
    },
    {
        "Name": "CD ROM/DVD ROM",
        "Description": "Tray load DVD Drive (Reads and Writes to DVD/CD)",
        "ProductCode": "8DVDRW",
        "Skus": [
        "429-AAJV"
        ]
    },
    {
        "Name": "Optical Software",
        "Description": "Cyberlink Media Suite Essentials for Windows 8.1 and DVD Drive (without Media)",
        "ProductCode": "CW8DN",
        "Skus": [
        "658-BBTV"
        ]
    },
    {
        "Name": "Power Supply",
        "Description": "45W AC Adapter, 3Pin",
        "ProductCode": "45WTAC",
        "Skus": [
        "450-AEHK"
        ]
    },
    {
        "Name": "FGA Module",
        "Description": "VAN15BDW1701_010_R/US/CA/BTO",
        "ProductCode": "FG0023",
        "Skus": [
        "998-BTYQ"
        ]
    },
    {
        "Name": "Primary Battery",
        "Description": "40 WHr, 4-Cell Battery (integrated)",
        "ProductCode": "4CBATT",
        "Skus": [
        "451-BBMG"
        ]
    },
    {
        "Name": "LCD",
        "Description": "15.6� HD Wide Screen LED Anti-Glare Display (1366x768) 720p",
        "ProductCode": "15HDNT",
        "Skus": [
        "391-BBZY"
        ]
    },
    {
        "Name": "Cable",
        "Description": "US Power Cord",
        "ProductCode": "US125V",
        "Skus": [
        "537-BBBL"
        ]
    },
    {
        "Name": "Placemat",
        "Description": "MOD,PLCMT,VOS,W10,3558/59,D/BC",
        "ProductCode": "PLCMT10",
        "Skus": [
        "340-ATWV"
        ]
    },
    {
        "Name": "Support Tech Sheet and Powercord",
        "Description": "No UPC",
        "ProductCode": "NOUPC",
        "Skus": [
        "389-BDCE"
        ]
    },
    {
        "Name": "Color Choice",
        "Description": "Black LCD cover(integrated Widescreen HD 720P Webcam with Dual digital microphone array)",
        "ProductCode": "BLCD",
        "Skus": [
        "320-BBPG"
        ]
    },
    {
        "Name": "Retail Information",
        "Description": "No Retail Software Required",
        "ProductCode": "NORTLSW",
        "Skus": [
        "817-BBBP"
        ]
    },
    {
        "Name": "Processor Branding",
        "Description": "Intel� Celeron� Label",
        "ProductCode": "INCLBL",
        "Skus": [
        "338-BDXI"
        ]
    },
    {
        "Name": "Non-Microsoft Application Software",
        "Description": "Windows 10 OS",
        "ProductCode": "WIN10",
        "Skus": [
        "340-AJFC",
        "340-AJFD",
        "340-AOEY",
        "525-BBCL",
        "640-BBLW",
        "658-BCVR"
        ]
    },
    {
        "Name": "Packaging",
        "Description": "Shipment box",
        "ProductCode": "SHP",
        "Skus": [
        "328-BCCD",
        "340-AAPP"
        ]
    },
    {
        "Name": "Regulatory Label",
        "Description": "Regulatory Label Included",
        "ProductCode": "REGUMA",
        "Skus": [
        "340-APCH",
        "340-APJM"
        ]
    },
    {
        "Name": "OS Label",
        "Description": "No Palmrest Label",
        "ProductCode": "NOLBL",
        "Skus": [
        "340-ACUG"
        ]
    },
    {
        "Name": "Order Information",
        "Description": "Non-Canada orders only",
        "ProductCode": "USNONE",
        "Skus": [
        "332-1286"
        ]
    },
    {
        "Name": "Service",
        "Description": "1 Year Hardware Service with In-Home/Onsite Service After Remote Diagnosis",
        "ProductCode": "NBD1",
        "Skus": [
        "802-7114",
        "975-9426"
        ]
    },
    {
        "Name": "E-Star",
        "Description": "Energy Star Label (on shipment box)",
        "ProductCode": "ESTAR",
        "Skus": [
        "340-AAPZ"
        ]
    },
    {
        "Name": "Transportation from ODM to region",
        "Description": "Standard Shipment",
        "ProductCode": "STND",
        "Skus": [
        "800-BBGS"
        ]
    }
    ],
    "ShowComponents": true,
    "Alerts": [],
    "EvergreenMessages": [],
    "HasBundledItems": false,
    "BundledItems": [],
    "IsBundledItem": false,
    "IsFastTrack": false,
    "Metadata": {
        "itemType": "ConfigItem",
        "brand": 36,
        "family": 11451
    },
    "DeliveryMessageOverride": "Ships in 5-7 business days",
    "HasDeliveryMessageOverride": true,
    "StopSelling": false,
    "IsStockItem": false,
    "SubTotalAmountValue": 498.57,
    "ConfigurationIdentifier": "1~ctov355815010rus~04~en~us~1__749;INCLBL;1"
},
{
    "Id": "6ce5bff2-d992-47c3-9844-f9b08dfeabea",
    "IdWithoutSpecialCharacters": "6ce5bff2d99247c39844f9b08dfeabea",
    "ProductId": "xctomp751015us",
    "Description": "Precision 15 7000 Series (7510)",
    "ShowProductStackDescription": false,
    "IsValid": true,
    "LeadTimeInfo": {
        "EstimatedShipDate": "6/14/2016",
        "ShowEstimatedShipDate": true,
        "ShowEstimatedDeliveryDate": false,
        "HasValidEstimatedDeliveryDate": false,
        "CanCalculateEstimatedDeliveryDate": true
    },
    "IsSavedCartItem": false,
    "SubTotalAmount": "$1,712.86",
    "DiscountsAndCouponsAmount": "-$633.86",
    "DiscountsAndCouponsAmountValue": 633.86,
    "DiscountsAndCoupons": [
    {
        "CampaignId": 512365,
        "Amount": "-$633.86",
        "ShortDescription": "Save 37% on Select New Dell Precision 15 7000 Series  through Dell Small Business!",
        "LongDescription": "Save 37% on Select New Dell Precision 15 7000 Series  through Dell Small Business!",
        "LegalDescription": "",
        "ExpiryDate": "5/30/2017",
        "HasExpiryDate": true,
        "HasExpiryTextOverride": false,
        "AllowRemove": false,
        "ShowAmount": true
    }
    ],
    "ShowDiscountsAndCoupons": true,
    "DiscountsPopupTitle": "Additional Discounts & Coupons",
    "TotalAmount": "$1,079.00",
    "TotalAmountWithSubItems": "$1,079.00",
    "TotalAmountWithSubItemsValue": 1079,
    "Quantity": 1,
    "QuantityWithSubItems": 1,
    "AllowChangeQuantity": true,
    "IsAssociatedItem": false,
    "ImageUrl": "https://si.cdn.dell.com/images/global/configurator/chassis/precn-7510-nt-bk-ft-120x107.jpg",
    "UnitPriceAmount": "$1,712.86",
    "ShowManufacturerPartNumber": false,
    "ShowDellPartNumber": false,
    "ShowCatalogNumber": true,
    "CatalogNumber": "4 xctomp751015us",
    "Components": [
    {
        "Name": "Mobile Precision 7510",
        "Description": "Mobile Precision7510 XCTO BASE",
        "ProductCode": "7510X",
        "Skus": [
        "210-AFXM"
        ]
    },
    {
        "Name": "Processor",
        "Description": "Intel� Core� i5-6300HQ (Quad Core 2.30GHz, 3.20GHz Turbo, 6MB 45W, w/Intel HD Graphics 530)",
        "ProductCode": "I56300",
        "Skus": [
        "379-BCDM"
        ]
    },
    {
        "Name": "Chassis Options",
        "Description": "Intel Core i5-6300HQ with no Smart Card or Thunderbolt 3",
        "ProductCode": "6300N",
        "Skus": [
        "338-BHRL"
        ]
    },
    {
        "Name": "Processor Branding",
        "Description": "Intel Core i5 Label",
        "ProductCode": "COREI5",
        "Skus": [
        "389-BHIB"
        ]
    },
    {
        "Name": "Operating System(s)",
        "Description": "Windows 7 Professional English, French, Spanish 64bit (Includes Windows 10 Pro License)",
        "ProductCode": "DW10P7M",
        "Skus": [
        "619-AIKP"
        ]
    },
    {
        "Name": "Non-Microsoft Application Software",
        "Description": "Dell Applications Windows 7",
        "ProductCode": "APPW7",
        "Skus": [
        "340-ADFZ",
        "422-0007",
        "422-0052",
        "637-AAAS",
        "640-BBDF",
        "640-BBES",
        "640-BBEV",
        "640-BBLW",
        "640-BBPN",
        "658-BBMR",
        "658-BBRB"
        ]
    },
    {
        "Name": "Office Productivity Software",
        "Description": "Microsoft Office 30 Day Trial",
        "ProductCode": "16MUI",
        "Skus": [
        "658-BCSB"
        ]
    },
    {
        "Name": "Video Card",
        "Description": "AMD FirePro� W5170M w/2GB GDDR5",
        "ProductCode": "W5170M",
        "Skus": [
        "490-BCPI",
        "490-BCQI"
        ]
    },
    {
        "Name": "Energy Star",
        "Description": "No Energy Star",
        "ProductCode": "NOESTAR",
        "Skus": [
        "387-BBDO"
        ]
    },
    {
        "Name": "LCD",
        "Description": "15.6\" FHD (1920x1080) Anti-Glare LED-backlit (45% color gamut), with microphone only",
        "ProductCode": "FHDNM",
        "Skus": [
        "319-BBDT",
        "320-BBQV",
        "391-BCFG"
        ]
    },
    {
        "Name": "Memory",
        "Description": "8GB (2x4GB) 2133MHz DDR4 SDRAM, Non-ECC",
        "ProductCode": "8G2D4",
        "Skus": [
        "370-ACIC"
        ]
    },
    {
        "Name": "Hard Drive",
        "Description": "500GB 2.5 inch SATA 7200 rpm Hard Drive",
        "ProductCode": "500GB",
        "Skus": [
        "400-AJBM"
        ]
    },
    {
        "Name": "2nd Hard Drive",
        "Description": "No Additional Hard Drive",
        "ProductCode": "NOMWOP",
        "Skus": [
        "401-AAGM"
        ]
    },
    {
        "Name": "Raid Connectivity",
        "Description": "NO RAID",
        "ProductCode": "NORAID",
        "Skus": [
        "817-BBBN"
        ]
    },
    {
        "Name": "Wireless",
        "Description": "Intel� Dual-Band Wireless-AC 8260 Wi-Fi with Bluetooth 4.1 Wireless Card (2x2)",
        "ProductCode": "8260AC",
        "Skus": [
        "555-BCMT"
        ]
    },
    {
        "Name": "Driver",
        "Description": "Intel� Dual-Band Wireless-AC 8260 Wi-Fi + BT 4.1 Wireless Driver (2x2)",
        "ProductCode": "8260BT",
        "Skus": [
        "555-BCNN"
        ]
    },
    {
        "Name": "Mobile Broadband",
        "Description": "No Mobile Broadband",
        "ProductCode": "NOMBB",
        "Skus": [
        "556-BBDZ"
        ]
    },
    {
        "Name": "Keyboard",
        "Description": "Internal Dual Pointing Keyboard, English",
        "ProductCode": "KIXP6UE",
        "Skus": [
        "580-ACLI",
        "580-ADWY"
        ]
    },
    {
        "Name": "Primary Battery",
        "Description": "6-cell (72Wh) Lithium Ion battery with ExpressCharge�",
        "ProductCode": "6C72WH",
        "Skus": [
        "451-BBPP"
        ]
    },
    {
        "Name": "Power Supply",
        "Description": "180W AC Adapter",
        "ProductCode": "180AC",
        "Skus": [
        "450-AATJ"
        ]
    },
    {
        "Name": "Cable",
        "Description": "US Power Cord",
        "ProductCode": "USPWR",
        "Skus": [
        "450-AAUO"
        ]
    },
    {
        "Name": "Security Options",
        "Description": "No Security",
        "ProductCode": "PLMNFP",
        "Skus": [
        "346-BBRF"
        ]
    },
    {
        "Name": "Systems Management",
        "Description": "No Out-of-Band Systems Management",
        "ProductCode": "NOVPRO",
        "Skus": [
        "631-AAQR"
        ]
    },
    {
        "Name": "Dell Threat Protection and Endpoint Security Suite",
        "Description": "No Dell Data Protection | Endpoint Security Suite Software",
        "ProductCode": "NODDP",
        "Skus": [
        "634-BENZ"
        ]
    },
    {
        "Name": "Dell Data Protection Solutions",
        "Description": "No DDPE Encryption Software",
        "ProductCode": "NODDPE",
        "Skus": [
        "954-3465"
        ]
    },
    {
        "Name": "Documentation/Disks",
        "Description": "Safety/Environment and Regulatory Guide (English/French Multi-language)",
        "ProductCode": "EFDOC",
        "Skus": [
        "340-AGIK"
        ]
    },
    {
        "Name": "Keyboard",
        "Description": "No Keyboard Selected",
        "ProductCode": "NKYBD",
        "Skus": [
        "580-AABG"
        ]
    },
    {
        "Name": "Mouse",
        "Description": "No Mouse",
        "ProductCode": "NOMSE",
        "Skus": [
        "570-AADK"
        ]
    },
    {
        "Name": "Monitor Adapters",
        "Description": "No Accessories",
        "ProductCode": "NOADPTR",
        "Skus": [
        "461-AABV"
        ]
    },
    {
        "Name": "Operating System Recovery Options",
        "Description": "Windows 10 OS Recovery 64bit � DVD",
        "ProductCode": "M10PD6M",
        "Skus": [
        "620-AAYW"
        ]
    },
    {
        "Name": "Placemat",
        "Description": "No Quick Reference Guide",
        "ProductCode": "NOTSH",
        "Skus": [
        "340-AASE"
        ]
    },
    {
        "Name": "Canada Ship Options",
        "Description": "US No Canada Ship Charge",
        "ProductCode": "USNONE",
        "Skus": [
        "332-1286"
        ]
    },
    {
        "Name": "TAA",
        "Description": "No TAA",
        "ProductCode": "NOTAA",
        "Skus": [
        "340-ACQQ"
        ]
    },
    {
        "Name": "UPC Label",
        "Description": "No UPC Label",
        "ProductCode": "NOUPC",
        "Skus": [
        "389-BDCE"
        ]
    },
    {
        "Name": "Packaging",
        "Description": "Mix Model Shipping Material",
        "ProductCode": "MIX",
        "Skus": [
        "328-BCDJ",
        "328-BCDK",
        "328-BCDL",
        "328-BCDM",
        "340-AAPP"
        ]
    },
    {
        "Name": "Label",
        "Description": "No Reg Label",
        "ProductCode": "NONE",
        "Skus": [
        "817-BBBP"
        ]
    },
    {
        "Name": "Transportation from ODM to region",
        "Description": "Standard Shipment",
        "ProductCode": "STND",
        "Skus": [
        "800-BBGF"
        ]
    },
    {
        "Name": "Service",
        "Description": "3 Years Hardware Service with Onsite/In-Home Service After Remote Diagnosis",
        "ProductCode": "NBD3",
        "Skus": [
        "997-1022",
        "997-1023"
        ]
    }
    ],
    "ShowComponents": true,
    "Alerts": [],
    "EvergreenMessages": [],
    "HasBundledItems": false,
    "BundledItems": [],
    "IsBundledItem": false,
    "IsFastTrack": false,
    "Metadata": {
        "itemType": "ConfigItem",
        "brand": 6,
        "family": 11721
    },
    "DeliveryMessageOverride": "Ships in 5-7 business days",
    "HasDeliveryMessageOverride": true,
    "StopSelling": false,
    "IsStockItem": false,
    "SubTotalAmountValue": 1712.86,
    "ConfigurationIdentifier": "1~xctomp751015us~04~en~us~1__7;8260BT;1"
},
{
    "Id": "7405fdbb-e677-404b-8e84-288c3630ceeb",
    "IdWithoutSpecialCharacters": "7405fdbbe677404b8e84288c3630ceeb",
    "ProductId": "xctop551015us",
    "Description": "Precision 15 5000 Series (5510)",
    "ShowProductStackDescription": false,
    "IsValid": true,
    "LeadTimeInfo": {
        "EstimatedShipDate": "6/14/2016",
        "ShowEstimatedShipDate": true,
        "ShowEstimatedDeliveryDate": false,
        "HasValidEstimatedDeliveryDate": false,
        "CanCalculateEstimatedDeliveryDate": true
    },
    "IsSavedCartItem": false,
    "SubTotalAmount": "$1,998.57",
    "DiscountsAndCouponsAmount": "-$749.57",
    "DiscountsAndCouponsAmountValue": 749.57,
    "DiscountsAndCoupons": [
    {
        "CampaignId": 512341,
        "Amount": "-$749.57",
        "ShortDescription": "Save 37% on Select New Dell Precision 15 5000 Series  through Dell Small Business!",
        "LongDescription": "Save 37% on Select New Dell Precision 15 5000 Series  through Dell Small Business!",
        "LegalDescription": "",
        "ExpiryDate": "5/30/2017",
        "HasExpiryDate": true,
        "HasExpiryTextOverride": false,
        "AllowRemove": false,
        "ShowAmount": true
    }
    ],
    "ShowDiscountsAndCoupons": true,
    "DiscountsPopupTitle": "Additional Discounts & Coupons",
    "TotalAmount": "$1,249.00",
    "TotalAmountWithSubItems": "$1,249.00",
    "TotalAmountWithSubItemsValue": 1249,
    "Quantity": 1,
    "QuantityWithSubItems": 1,
    "AllowChangeQuantity": true,
    "IsAssociatedItem": false,
    "ImageUrl": "https://si.cdn.dell.com/images/global/configurator/chassis/precn-5510-nt-gray-ft-120x107.jpg",
    "UnitPriceAmount": "$1,998.57",
    "ShowManufacturerPartNumber": false,
    "ShowDellPartNumber": false,
    "ShowCatalogNumber": true,
    "CatalogNumber": "4 xctop551015us",
    "Components": [
    {
        "Name": "Dell Mobile Precision Workstations 5510",
        "Description": "Dell Mobile Precision Workstation 5510 XCTO",
        "ProductCode": "X5510T",
        "Skus": [
        "210-AGQI"
        ]
    },
    {
        "Name": "Processor",
        "Description": "Intel� Core� i5-6300HQ (Quad Core 2.30GHz, 3.20GHz Turbo, 6MB 45W, w/Intel HD Graphics 530)",
        "ProductCode": "I56300",
        "Skus": [
        "379-BCDM"
        ]
    },
    {
        "Name": "Base Options",
        "Description": "Intel Core i5-6300HQ Processor with Nvidia Quadro M1000M Graphics w/2GB GDDR5",
        "ProductCode": "I56300",
        "Skus": [
        "338-BIEY"
        ]
    },
    {
        "Name": "Processor Branding",
        "Description": "Intel Core i5 Label",
        "ProductCode": "CI5SML",
        "Skus": [
        "389-BHIB"
        ]
    },
    {
        "Name": "Operating System",
        "Description": "Windows 7 Professional English, French, Spanish 64bit (Includes Windows 10 Pro License)",
        "ProductCode": "DW10P7M",
        "Skus": [
        "619-AIKP"
        ]
    },
    {
        "Name": "Non-Microsoft Application Software",
        "Description": "OS Recovery",
        "ProductCode": "WIN7",
        "Skus": [
        "340-AAUC",
        "340-ADFZ",
        "340-ARXE",
        "422-0007",
        "422-0052",
        "637-AAAS",
        "640-BBDI",
        "640-BBES",
        "640-BBEU",
        "658-BBMR",
        "658-BBRB"
        ]
    },
    {
        "Name": "Office Productivity Software",
        "Description": "Microsoft Office 30 Day Trial",
        "ProductCode": "16MUI",
        "Skus": [
        "658-BCSB"
        ]
    },
    {
        "Name": "Video Card",
        "Description": "Nvidia� Quadro� M1000M w/2GB GDDR5",
        "ProductCode": "M1000M",
        "Skus": [
        "490-BCVC"
        ]
    },
    {
        "Name": "Energy Efficiancy Options",
        "Description": "ENERGY STAR qualified",
        "ProductCode": "ESTAR",
        "Skus": [
        "387-BBFE"
        ]
    },
    {
        "Name": "LCD",
        "Description": "15.6\" UltraSharp� FHD IPS (1920x1080) Wide View Anti-Glare LED-backlit with Premium Panel Guarantee",
        "ProductCode": "LCDNT2",
        "Skus": [
        "391-BCOE"
        ]
    },
    {
        "Name": "Memory",
        "Description": "8GB (2x4GB) 2133MHz DDR4 Non-ECC",
        "ProductCode": "8GB",
        "Skus": [
        "370-ACIC"
        ]
    },
    {
        "Name": "Primary Storage",
        "Description": "500GB 2.5 inch SATA 7200 rpm Hard Drive",
        "ProductCode": "500AQUC",
        "Skus": [
        "400-AILO",
        "575-BBHS"
        ]
    },
    {
        "Name": "Secondary Storage",
        "Description": "No Additional Hard Drive",
        "ProductCode": "NOHDDA",
        "Skus": [
        "401-AADF"
        ]
    },
    {
        "Name": "Wireless",
        "Description": "Intel� Dual-Band Wireless-AC 8260 Wi-Fi + BT 4.1 Wireless Card (2x2)",
        "ProductCode": "8260AW",
        "Skus": [
        "555-BCRV"
        ]
    },
    {
        "Name": "Driver",
        "Description": "Dell Wireless 8260 Driver",
        "ProductCode": "8260",
        "Skus": [
        "340-ARXP"
        ]
    },
    {
        "Name": "Keyboard",
        "Description": "Internal Single Pointing Backlit Keyboard, English",
        "ProductCode": "K80ENG",
        "Skus": [
        "580-AEJK"
        ]
    },
    {
        "Name": "Primary Battery",
        "Description": "3-cell (56Wh)  Lithium Ion battery with ExpressCharge�",
        "ProductCode": "3C",
        "Skus": [
        "451-BBUW"
        ]
    },
    {
        "Name": "Power Supply",
        "Description": "AC Adaptor",
        "ProductCode": "AC130W",
        "Skus": [
        "470-ABVP",
        "492-BBGC"
        ]
    },
    {
        "Name": "Cable",
        "Description": "Power Cord, US",
        "ProductCode": "US25A",
        "Skus": [
        "537-BBBD"
        ]
    },
    {
        "Name": "PalmRest",
        "Description": "Palmrest for English Keyboard",
        "ProductCode": "PLST80",
        "Skus": [
        "346-BBTC"
        ]
    },
    {
        "Name": "Systems Management",
        "Description": "No Out-of-Band Systems Management",
        "ProductCode": "NOVPRO",
        "Skus": [
        "631-AATI"
        ]
    },
    {
        "Name": "Dell Threat Protection and Endpoint Security Suite",
        "Description": "No Dell Data Protection | Endpoint Security Suite Software",
        "ProductCode": "NODDP",
        "Skus": [
        "634-BENZ"
        ]
    },
    {
        "Name": "Dell Data Protection Solutions",
        "Description": "No DDPE Encryption Software",
        "ProductCode": "NODDPE",
        "Skus": [
        "954-3465"
        ]
    },
    {
        "Name": "Mouse",
        "Description": "No Mouse Selected",
        "ProductCode": "NOMSE",
        "Skus": [
        "570-AADK"
        ]
    },
    {
        "Name": "Operating System Recovery Options",
        "Description": "Windows 10 OS Recovery 64bit � DVD",
        "ProductCode": "M10PD6M",
        "Skus": [
        "620-AAYW"
        ]
    },
    {
        "Name": "Placemat",
        "Description": "Quick Reference Guide",
        "ProductCode": "PLCMT",
        "Skus": [
        "340-ARXO"
        ]
    },
    {
        "Name": "Canada Ship Options",
        "Description": "US No Canada Ship Charge",
        "ProductCode": "USNONE",
        "Skus": [
        "332-1286"
        ]
    },
    {
        "Name": "Support Tech Sheet and Powercord",
        "Description": "No UPC Label",
        "ProductCode": "NOLBL",
        "Skus": [
        "389-BCGW"
        ]
    },
    {
        "Name": "Packaging",
        "Description": "Mix Model Shipping Material",
        "ProductCode": "SHPMX",
        "Skus": [
        "340-AAPP",
        "340-ARXK"
        ]
    },
    {
        "Name": "Label",
        "Description": "Regulatory Label Included",
        "ProductCode": "REG",
        "Skus": [
        "389-BEYY"
        ]
    },
    {
        "Name": "Transportation from ODM to region",
        "Description": "Standard Shipment",
        "ProductCode": "STND",
        "Skus": [
        "800-BBGF"
        ]
    },
    {
        "Name": "Cables and Dongles",
        "Description": "No Accessories",
        "ProductCode": "NOADPTR",
        "Skus": [
        "461-AABV"
        ]
    },
    {
        "Name": "TAA",
        "Description": "No TAA",
        "ProductCode": "NOTAA",
        "Skus": [
        "340-ACQQ"
        ]
    },
    {
        "Name": "Stands and Mounts",
        "Description": "No Stand",
        "ProductCode": "NOSTND",
        "Skus": [
        "575-BBCH"
        ]
    },
    {
        "Name": "Hardware Support Services",
        "Description": "1 Year Hardware Service with Onsite/In-Home Service After Remote Diagnosis",
        "ProductCode": "NBD1",
        "Skus": [
        "804-9773",
        "804-9774"
        ]
    },
    {
        "Name": "Documentation/Disks",
        "Description": "Safety/Environment and Regulatory Guide (English/French Multi-language)",
        "ProductCode": "EFDOC",
        "Skus": [
        "340-AGIK"
        ]
    }
    ],
    "ShowComponents": true,
    "Alerts": [],
    "EvergreenMessages": [],
    "HasBundledItems": false,
    "BundledItems": [],
    "IsBundledItem": false,
    "IsFastTrack": false,
    "Metadata": {
        "itemType": "ConfigItem",
        "brand": 6,
        "family": 11798
    },
    "DeliveryMessageOverride": "Ships in 5-7 business days",
    "HasDeliveryMessageOverride": true,
    "StopSelling": false,
    "IsStockItem": false,
    "SubTotalAmountValue": 1998.57,
    "ConfigurationIdentifier": "1~xctop551015us~04~en~us~1__"
},
{
    "Id": "ed19f19d-cae8-4fe8-bb3a-a1a49aa74452",
    "IdWithoutSpecialCharacters": "ed19f19dcae84fe8bb3aa1a49aa74452",
    "ProductId": "xctop351015us",
    "Description": "Precision 15 3000 Series (3510)",
    "ShowProductStackDescription": false,
    "IsValid": true,
    "LeadTimeInfo": {
        "EstimatedShipDate": "6/13/2016",
        "ShowEstimatedShipDate": true,
        "ShowEstimatedDeliveryDate": false,
        "HasValidEstimatedDeliveryDate": false,
        "CanCalculateEstimatedDeliveryDate": true
    },
    "IsSavedCartItem": false,
    "SubTotalAmount": "$1,525.71",
    "DiscountsAndCouponsAmount": "-$646.71",
    "DiscountsAndCouponsAmountValue": 646.71,
    "DiscountsAndCoupons": [
    {
        "CampaignId": 512328,
        "Amount": "-$646.71",
        "ShortDescription": "Save 42% on Select New Dell Precision 15 3000 Series  through Dell Small Business!",
        "LongDescription": "Save 42% on Select New Dell Precision 15 3000 Series  through Dell Small Business!",
        "LegalDescription": "",
        "ExpiryDate": "5/30/2017",
        "HasExpiryDate": true,
        "HasExpiryTextOverride": false,
        "AllowRemove": false,
        "ShowAmount": true
    }
    ],
    "ShowDiscountsAndCoupons": true,
    "DiscountsPopupTitle": "Additional Discounts & Coupons",
    "TotalAmount": "$879.00",
    "TotalAmountWithSubItems": "$879.00",
    "TotalAmountWithSubItemsValue": 879,
    "Quantity": 1,
    "QuantityWithSubItems": 1,
    "AllowChangeQuantity": true,
    "IsAssociatedItem": false,
    "ImageUrl": "https://si.cdn.dell.com/images/global/configurator/chassis/wrkstn-precn-3510-nt-bk-ft-120x107.jpg",
    "UnitPriceAmount": "$1,525.71",
    "ShowManufacturerPartNumber": false,
    "ShowDellPartNumber": false,
    "ShowCatalogNumber": true,
    "CatalogNumber": "4 xctop351015us",
    "Components": [
    {
        "Name": "Dell Precision 3510",
        "Description": "Dell Mobile Precision Workstations 3510 XCTO",
        "ProductCode": "X3510T",
        "Skus": [
        "210-AGMF"
        ]
    },
    {
        "Name": "Processor",
        "Description": "Intel� Core� i5-6300HQ (Quad Core 2.30GHz, 3.20GHz Turbo, 6MB 35W, w/Intel HD Graphics 530)",
        "ProductCode": "I56300",
        "Skus": [
        "379-BCDM"
        ]
    },
    {
        "Name": "Chassis Options",
        "Description": "Intel� Core� i5-6300HQ Processor without USB Type C Thunderbolt Chassis",
        "ProductCode": "PDTI5",
        "Skus": [
        "338-BHYR"
        ]
    },
    {
        "Name": "Processor Branding",
        "Description": "Intel Core i5 Label",
        "ProductCode": "CI5SML",
        "Skus": [
        "389-BHIB"
        ]
    },
    {
        "Name": "Operating System",
        "Description": "Windows 7 Professional English, French, Spanish 64bit (Includes Windows 10 Pro License)",
        "ProductCode": "DW10P7M",
        "Skus": [
        "619-AIKP"
        ]
    },
    {
        "Name": "Non-Microsoft Application Software",
        "Description": "OS Recovery",
        "ProductCode": "WIN7",
        "Skus": [
        "340-AAUC",
        "340-ADFZ",
        "340-ARZU",
        "422-0007",
        "422-0052",
        "637-AAAS",
        "640-BBDI",
        "640-BBES",
        "640-BBEU",
        "658-BBMR",
        "658-BBRB"
        ]
    },
    {
        "Name": "Office Productivity Software",
        "Description": "Microsoft Office 30 Day Trial",
        "ProductCode": "16MUI",
        "Skus": [
        "658-BCSB"
        ]
    },
    {
        "Name": "Video Card",
        "Description": "AMD FirePro W5130M w/2GB GDDR5",
        "ProductCode": "AM5130",
        "Skus": [
        "490-BCWU"
        ]
    },
    {
        "Name": "Energy Star",
        "Description": "ESTAR Label not included",
        "ProductCode": "NONE",
        "Skus": [
        "817-BBBP"
        ]
    },
    {
        "Name": "LCD",
        "Description": "15.6\"  HD TN (1366x768) Anti-Glare LED-backlit (45% color gamut), camera and mic, WWAN Capable",
        "ProductCode": "LNCHWW",
        "Skus": [
        "320-BBUQ",
        "391-BCHX"
        ]
    },
    {
        "Name": "Memory",
        "Description": "8GB (2x4GB) 2133MHz DDR4 Non-ECC",
        "ProductCode": "8G2D4",
        "Skus": [
        "370-ACIC"
        ]
    },
    {
        "Name": "Hard Drive",
        "Description": "500GB 2.5 inch SATA 7200 rpm Hard Drive",
        "ProductCode": "500G72",
        "Skus": [
        "400-AJBM",
        "575-BBFI"
        ]
    },
    {
        "Name": "Wireless",
        "Description": "Intel� Dual-Band Wireless-AC 8260 Wi-Fi + BT 4.1 Wireless Card (2x2)",
        "ProductCode": "8260ACW",
        "Skus": [
        "555-BCPF"
        ]
    },
    {
        "Name": "Driver",
        "Description": "Intel� Dual-Band Wireless-AC 8260 Wi-Fi + BT 4.1 Wireless Driver (2x2)",
        "ProductCode": "8260WM",
        "Skus": [
        "555-BCNB"
        ]
    },
    {
        "Name": "Mobile Broadband",
        "Description": "No Wireless WAN Card",
        "ProductCode": "NOWWAN",
        "Skus": [
        "362-BBBB"
        ]
    },
    {
        "Name": "Keyboard",
        "Description": "Internal Dual Pointing Keyboard, English",
        "ProductCode": "KID6ENG",
        "Skus": [
        "580-ACLI",
        "580-ADYF"
        ]
    },
    {
        "Name": "Primary Battery",
        "Description": "4 Cell 62W/HR Battery",
        "ProductCode": "4C",
        "Skus": [
        "451-BBSK"
        ]
    },
    {
        "Name": "Power Supply",
        "Description": "130W AC Adapter",
        "ProductCode": "130W3P",
        "Skus": [
        "450-ADFZ"
        ]
    },
    {
        "Name": "Cable",
        "Description": "US Power Cord",
        "ProductCode": "US125V",
        "Skus": [
        "537-BBBL"
        ]
    },
    {
        "Name": "PalmRest",
        "Description": "No Security",
        "ProductCode": "DPRNSC",
        "Skus": [
        "346-BBRS"
        ]
    },
    {
        "Name": "Systems Management",
        "Description": "No Out-of-Band Systems Management",
        "ProductCode": "NOVPRO",
        "Skus": [
        "631-AASG"
        ]
    },
    {
        "Name": "Dell Threat Protection and Endpoint Security Suite",
        "Description": "No Dell Data Protection | Endpoint Security Suite Software",
        "ProductCode": "NODDP",
        "Skus": [
        "634-BENZ"
        ]
    },
    {
        "Name": "Dell Data Protection Solutions",
        "Description": "No DDPE Encryption Software",
        "ProductCode": "NODDPE",
        "Skus": [
        "954-3465"
        ]
    },
    {
        "Name": "Mouse",
        "Description": "No Mouse Selected",
        "ProductCode": "NOMSE",
        "Skus": [
        "570-AADK"
        ]
    },
    {
        "Name": "Operating System Recovery Options",
        "Description": "Windows 10 OS Recovery 64bit � DVD",
        "ProductCode": "M10PD6M",
        "Skus": [
        "620-AAYW"
        ]
    },
    {
        "Name": "Placemat",
        "Description": "No Quick Reference Guide",
        "ProductCode": "NOTSH",
        "Skus": [
        "340-AASE"
        ]
    },
    {
        "Name": "Canada Ship Options",
        "Description": "US No Canada Ship Charge",
        "ProductCode": "USNONE",
        "Skus": [
        "332-1286"
        ]
    },
    {
        "Name": "TAA",
        "Description": "No TAA",
        "ProductCode": "NOTAA",
        "Skus": [
        "340-ACQQ"
        ]
    },
    {
        "Name": "Support Tech Sheet and Powercord",
        "Description": "No UPC Label",
        "ProductCode": "NOLBL",
        "Skus": [
        "389-BCGW"
        ]
    },
    {
        "Name": "Packaging",
        "Description": "DAO Mix Ship Model",
        "ProductCode": "DAOMIX",
        "Skus": [
        "340-AAPP",
        "340-AQHR",
        "340-AQHU",
        "340-AQZQ",
        "340-AQZR"
        ]
    },
    {
        "Name": "Label",
        "Description": "Regulatory Label Included",
        "ProductCode": "REGLBL",
        "Skus": [
        "389-BEYY"
        ]
    },
    {
        "Name": "Transportation from ODM to region",
        "Description": "Standard Shipment",
        "ProductCode": "STND",
        "Skus": [
        "800-BBGF"
        ]
    },
    {
        "Name": "Diagnostic CD / Diskette",
        "Description": "No Resource DVD",
        "ProductCode": "NRDVD",
        "Skus": [
        "430-XXYG"
        ]
    },
    {
        "Name": "Hard Drive Software",
        "Description": "Intel Rapid Storage Technology",
        "ProductCode": "IRST",
        "Skus": [
        "409-BBFX"
        ]
    },
    {
        "Name": "Hardware Support Services",
        "Description": "3 Year Hardware Service with Onsite/In-Home Service After Remote Diagnosis",
        "ProductCode": "NBD3",
        "Skus": [
        "997-1075",
        "997-1129"
        ]
    },
    {
        "Name": "Stands and Mounts",
        "Description": "No Stand",
        "ProductCode": "NOSTND",
        "Skus": [
        "575-BBCH"
        ]
    },
    {
        "Name": "Documentation/Disks",
        "Description": "Safety/Environment and Regulatory Guide (English/French Multi-language)",
        "ProductCode": "EFDOC",
        "Skus": [
        "340-AGIK"
        ]
    }
    ],
    "ShowComponents": true,
    "Alerts": [],
    "EvergreenMessages": [],
    "HasBundledItems": false,
    "BundledItems": [],
    "IsBundledItem": false,
    "IsFastTrack": false,
    "Metadata": {
        "itemType": "ConfigItem",
        "brand": 6,
        "family": 11738
    },
    "DeliveryMessageOverride": "Ships in 4-6 business days",
    "HasDeliveryMessageOverride": true,
    "StopSelling": false,
    "IsStockItem": false,
    "SubTotalAmountValue": 1525.71,
    "ConfigurationIdentifier": "1~xctop351015us~04~en~us~1__"
}
];

/**
* Finds edit distance between two strings (edit being appending, deleting, or
* replacing a character with another character).
* @param {String} stringOne
* @param {String} stringTwo
* @return {Number} u[stringTwoLength]
*/

function levenshtein(stringOne, stringTwo) {
	var t = [], u, i, j, stringOneLength = stringOne.length, stringTwoLength = stringTwo.length;

	if (!stringOneLength) {
		return stringTwoLength;
	}

	if (!stringTwoLength) {
		return stringOneLength;
	}

	for (j = 0; j <= stringTwoLength; j++) {
		t[j] = j;
	}

	for (i = 1; i <= stringOneLength; i++) {
		for (u = [i], j = 1; j <= stringTwoLength; j++) {
			u[j] = stringOne[i - 1] === stringTwo[j - 1] ? t[j - 1] : Math.min(t[j - 1], t[j], u[j - 1]) + 1;
		} 
		t = u;
	} 
	return u[stringTwoLength];
}

/**
* Finds edit distance between input and entries in an array, 
* returns entry with smallest distance
* @param {String} inputString
* @param {Array} stringArray
* @return {String} outputString
*/

// external memoization cache
var memCache = {};

function findLeastEditDistanceMemoized(inputString, stringArray) {
	// output string is set as the string with the smallest edit distance,
	// minimum number is used to check
	var outputString = "";
	var minimumNumber = Number.POSITIVE_INFINITY;

	// console.log(memCache);

	if (inputString in memCache) {
		// console.log('Cache hit for ', inputString);
		return memCache[inputString];
	} else {
		// console.log('Cache miss for ', inputString);
		// iterate through input array, find distance between inputString and string in array
		stringArray.forEach(function(arrayString) {
			var distance = levenshtein(inputString.toLowerCase(), arrayString.toLowerCase());

			// check if current distance is smaller than the minimum, set minimum and outputString 
			// if so
			if (distance < minimumNumber) {
				minimumNumber = distance
				outputString = arrayString
			}
		});

		return memCache[inputString] = outputString;
	}
}

var nlp = nlp_compromise;

var dataParser = {
    init: function(){
        this.body();
    },
    reduceProperties: function(obj){
        var payload = [];
        for (var i = 0; i < obj.length; i++) {
            var bigItem = obj[i];
            var smallItem = {};
            var keys = $.map( bigItem, function( value, key ) {
                if(key === "Description"){ smallItem["Description"] = value}
                if(key === "SubTotalAmount"){ smallItem["SubTotalAmount"] = value}
                if(key === "ImageUrl"){ smallItem["ImageUrl"] = value}
                if(key === "Components"){ smallItem["Components"] = value}

              return key;
            });
            payload.push(smallItem);
        }
        //console.log(JSON.stringify(payload));
    },
    body: function(){
        
    }
};
dataParser.init();

/*
*   Parsing module 
*/

var parseModule = (function() {
    // private variables

    // array of brands for auto-correction
    var brandArray = ["Inspiron", "XPS", "AlienWare", "Latitude", "Precision", "ChromeBook"];

    // temporary test variable
    var hardCodedNlp = nlp.text("I'd like an AlienWare laptop with 8 gigabytes of memory").sentences[0];

    // public methods
    return {

        // Iterate through nlp-converted input terms, performs regex
        // match and noun-tracking to ascertain if application name is spoken
        // returns boolean based on if name is present
        parseDellyName: function(speechInput) {
            var nameRE = /[dD]e[a]*[l]+[iy]+/;

            hardCodedNlp.terms.forEach(function(term) {
                if (term.tag === "Noun" && term.normal.match(nameRE)) {
                    console.log("\'Delly\' present in speech input...");
                    return true;
                }
            });

            return false;
        },

        // Iterates through nlp-converted input terms, performs regex
        // match to ascertain product category
        // TODO: Improve regex to handle more cases
        // Returns string representation of the category
        parseItemCategory: function(speechInput) {
            var laptopRe = /[lL]aptop/;
            var desktopRe = /[dD]esktop/;
            var category;

            hardCodedNlp.terms.forEach(function(term) {
                if (term.text.match(laptopRe)) {
                    category = "laptop"
                } else if (term.text.match(desktopRe)) {
                    category = "desktop"
                }
            })

            return category;
        },

        // Iterates through nlp-converted input terms, performs regex
        // match via the returned item category, and obtains the first
        // word of the returned branding phrase
        // TODO: handle more cases
        // Returns string representation of the brand
        parseItemBrand: function(speechInput) {
            var re = parseModule.parseItemCategory();
            var brand;

            hardCodedNlp.terms.forEach(function(term) {
                if (term.text.match(re)) {
                    brand = term.text.split(' ')[0];
                }
            });

            return findLeastEditDistanceMemoized(brand, brandArray);
        },

        // Iterates through nlp-converted input terms, grabs term
        // if the term is an nlp value, appends 'GB' to string and
        // returns an object
        parseItemConfiguration: function(speechInput) {
            var config = {
                processor: "i5",
                memory: "8GB",
                hardDisk: "1TB",
                display: "15.6-inch"
            };

            hardCodedNlp.terms.forEach(function(term) {
                if (term.reason === "is_value") {
                    config.memory = term.number + "GB";
                }
            });

            return config;
        },

        parseQuantity: function(text) {
            var nlpOutput = nlp.value(text).number;
            console.log(nlpOutput);
        },

        parseAssociation: function(text) {
            var output = nlp.text(text).sentences[0];

            var nounOutputs = [];

            output.terms.forEach(function(term) {
                if (term.reason != "lexicon_pass" && term.reason != "is_person"){
                    nounOutputs.push(term);
                }
            });

            console.log(nounOutputs);
        },

        getlaptopItems: function(category, brand, config, price, description) {
			console.log(category);
			console.log(brand);
			console.log(config);
            var laptopItems = [];
            var desc = "";
            var itemBrand = "";
            var itemPrice = 10000;
            var itemRam = "";
            var itemProc = "";
            var itemHD = "";
            var itemScreenSize = "";
            var itemCategory = "";
			var itemIndex = 0;
            
			if(category){itemCategory = category.toLowerCase();}
            if(brand){itemBrand = brand.toLowerCase();}
			if(config)
			{
				if(config.memory){itemRam = config.memory.toLowerCase() + " ";}
				if(config.processor){itemProc = config.processor}
				if(config.hardDisk){itemHD = config.hardDisk.toLowerCase();}
				if(config.display){itemScreenSize = config.display.toLowerCase();}
				if(description){desc = description.toLowerCase();}
				if(price){itemPrice = price.toLowerCase();}
			}

			if(!itemCategory && !itemBrand && !config ){
					return cartItems;
			}
				
            for (var i = 0; i < cartItems.length; i++) {
                var item = cartItems[i];
                var processorItem;
                var ramItem;
                var hardDiskItem;
                var screenSizeItem;
                var index;
                var components = item.Components;
				
				var itemDescription = item.Description.toLowerCase();
				
				var isSearchedLaptop = true;
				if(itemCategory === "business")
				{
					isSearchedLaptop = (itemDescription.indexOf("inspiron")>-1 || 
										itemDescription.indexOf("xps")>-1 ||
										itemDescription.indexOf("vostro")>-1 ||
										itemDescription.indexOf("latitude")>-1 ||
										itemDescription.indexOf("precison")>-1 ||
										itemDescription.indexOf("chromebook")>-1 )
					
				}
				else if(itemCategory === "home")
				{
										isSearchedLaptop = (itemDescription.indexOf("inspiron")>-1 || 
										itemDescription.indexOf("xps")>-1 ||
										itemDescription.indexOf("alienware")>-1 ||
										itemDescription.indexOf("chromebook")>-1 )
				}
				
                for (index in item.Components) {

                    if (components[index].Name.indexOf("Processor") > -1) {
                        processorItem = components[index];
                    }

                    if (components[index].Name.indexOf("Memory") > -1) {
                        ramItem = components[index];
                    }

                    if (components[index].Name.indexOf("Hard Drive") > -1) {
                        hardDiskItem = components[index];
                    }

                    if (components[index].Name.indexOf("Display") > -1) {
                        screenSizeItem = components[index];
                    }
                }

				var memoryProductCode = ramItem.Description.toLowerCase();
                if (isSearchedLaptop && itemDescription.indexOf(itemBrand.toLowerCase()) > -1 &&
				    memoryProductCode.indexOf(itemRam) === 0)
				{
                    laptopItems[itemIndex] = item;
					itemIndex++;
                }

            }
            console.log(laptopItems);
            return laptopItems;
        }
    }
})();

// grab key terms from user spoken input
var dellyName = parseModule.parseDellyName();
var category = parseModule.parseItemCategory();
var brand = parseModule.parseItemBrand();
var config = parseModule.parseItemConfiguration();

// grab items from cart items with said input
parseModule.getlaptopItems(null, brand, config, null, null);

angular.module('delly', [])
    .controller('MainCtrl', function($scope) {
        // This is where we switch top level default models
        $scope.output = defaultOutputModel.laptops;
        $scope.storedOutputModel = angular.copy(defaultOutputModel);
        $scope.categories = $scope.storedOutputModel.laptops.categories;
        $scope.suggestions = $scope.output.suggestions;
        $scope.choosenCategories = ["segment", "brand", "inspiron", "xps", "chromebook"];
        $scope.showCategories = function(showCatArry){
            var payload = [];
            for (var i = 0; i < $scope.categories.length; i++) {

                for (var j = 0; j < showCatArry.length; j++) {

                    if($scope.categories[i].type === showCatArry[j]){
                        payload.push($scope.categories[i]);
                    }
                }
                
            }
            $scope.categories = payload;
        }
        $scope.$watch(
            "categories",
            function( newValue, oldValue ) {
               console.log("watchers fired");
            }
        );
    })
    .directive('inputWrap', function() {
        return {
            restrict: 'E',
            templateUrl: '/templates/speech-input.html'
        };
    })
    .directive('suggestedItem', function() {
        return {
            restrict: 'E',
            templateUrl: '/templates/suggested-item.html'
        };
    })
    .directive('categoryRow', function() {
        return {
            restrict: 'E',
            templateUrl: '/templates/category-row.html'
        };
    })
    .directive('dialog', function() {
        return {
            restrict: 'E',
            templateUrl: '/templates/dialog.html'
        };
    })
    .directive('buttonSection', function() {
        return {
            restrict: 'E',
            templateUrl: '/templates/button.html',
            link : function(scope, element, attrs){

                var t = $(element),
                    laptops = t.find("#dl-laptop"),
                    segment = t.find("#dl-segment"),
                    brand = t.find("#dl-brand"),
                    series = t.find("#dl-series"),
                    reset = t.find("#dl-reset"),
                    rows = $("category-row"),
                    itemWraps = $(".itemWrap");

                function showItem(row, item){
                    var selectedRow = $("category-row[type='" + row + "']"),
                        selectedItem = selectedRow.find(".itemWrap[type='" + item + "']"), 
                        isProductLine = selectedRow[isproductline="true"];

                    selectedRow = $("category-row[type='" + row + "']");
                    selectedItem = selectedRow.find(".itemWrap[type='" + item + "']");

                    if(row==="segment"){
                        showAll();
                    }
                    if(row==="brand"){
                        hideRow("segment");
                    }
                    if(isProductLine){
                        $("category-row").not(selectedRow).addClass("rowHide");
                    }
                    selectedItem.removeClass("itemHide");
                    selectedRow.find(".itemWrap").not(selectedItem).addClass("itemHide");
                }
                // Laptops
                laptops.on("click", function(){
                    showAll();
                });
                //Home
                segment.on("click", function(){
                    hideRow("segment");
                });
                // Inspiron
                brand.on("click", function(){

                    hideOtherRows("inspiron");
                    
                });
                // 3000
                series.on("click", function(){
                    showItem("inspiron", "3000");

                });
                reset.on("click", function(){
                    //scope.showCategories(["inspiron"]);
                    showAll();

                });
                function showRow(row){
                    var tRow = $("category-row[type='" + row + "']");
                    tRow.removeClass("rowHide");
                    tRow.find(".itemWrap").each(function(){
                        $(this).removeClass("itemHide");
                    })
                }
                function hideRow(row){
                    $("category-row[type='" + row + "']").addClass("rowHide");
                }
                function hideOtherRows(row){
                    var thisRow = $("category-row[type='" + row + "']");
                    $("category-row").not(thisRow).addClass("rowHide");
                }
                function showAll(){
                    $("category-row").each(function(){
                        $(this).removeClass("rowHide");
                        $(this).find(".itemWrap").each(function(){
                            $(this).removeClass("itemHide");
                            
                        })
                    })
                }

            }
        };
    });

var dlCommon = {
    init: function(){
        this.body();
    },
    body: function(){
        var showCatArry = ["segment", "brand", "inspiron", "xps", "chromebook"],
            section = defaultOutputModel.laptops,
            categories = section.categories,
            outputedObject = [];

        function showCategories(categories){
            for (var i = 0; i < categories.length; i++) {

                for (var j = 0; j < showCatArry.length; j++) {

                    if(categories[i].type === showCatArry[j]){
                        outputedObject.push(categories[i]);
                    }
                }
                
            }
        }
        showCategories(categories);
        
        
    }
};
dlCommon.init();

var dialog = {
    init: function(){
        this.body();
    },
    respond : function(message){
        if (message.lastIndexOf("hello del")!== -1){
            responsiveVoice.speak("Hello Michael. Shall we start the demo?");
        }
        
    },
    body: function(){
        var dialogInput = $("#dialog");
        $("body").on("click", "#Go", function(){
            var inputText = dialogInput.val().toLowerCase();
            if(inputText === "hello delli"){
               responsiveVoice.speak("hello Michael, should we start the demo?"); 
            }
            
        });

    }
};
//dialog.init();

// @codekit-prepend "vendor/jquery-2.1.3.min.js";
// @codekit-prepend "vendor/angular.min.js";
// @codekit-prepend "vendor/nlp_compromise.min.js";
// @codekit-prepend "vendor/responsivevoice.js";
// @codekit-prepend "bootstrap.min.js";
// @codekit-prepend "nlp_compromise.js";
// @codekit-prepend "speechInput.js";
// @codekit-prepend "mappedCartItems.js";
// @codekit-prepend "outputModel.js";
// @codekit-prepend "cartItems.js"
// @codekit-prepend "levenshtein.js"
// @codekit-prepend "dataParser.js";
// @codekit-prepend "app.js";
// @codekit-prepend "common.js";
// @codekit-prepend "dialog.js";


