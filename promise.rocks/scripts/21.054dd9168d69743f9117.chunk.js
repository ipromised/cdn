(window.webpackJsonp=window.webpackJsonp||[]).push([[21,31],{593:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n);e.default=class extends o.a.Component{constructor(t){super(t),this.state={text:""},this.handlePaste=this.handlePaste.bind(this)}componentDidMount(){document.addEventListener("paste",this.handlePaste)}componentWillUnmount(){document.removeEventListener("paste",this.handlePaste)}handlePaste(t){const e=t.clipboardData.items;e&&e[0].getAsString(t=>{this.dealWith(t)})}dealWith(t){this.setState({text:t})}render(){return o.a.createElement("main",{className:"container"},this.props.children(this.state))}}},616:function(t,e,r){"use strict";r.r(e);r(636);var n=r(0),o=r.n(n),a=r(593),i=r(635);e.default=class extends a.default{constructor(t){super(t)}componentDidMount(){super.componentDidMount()}handlePaste(t){if(this.state.loading)return;const e=t.clipboardData.items;e&&e[0].getAsString(t=>{this.setState({loading:!0}),this.respond(t).then(e=>{this.setState({text:t,data:e,loading:!1})})})}async respond(t){if(!t)return[];const e=await Object(i.a)("http://fund.jrj.com.cn/action/fhs/list.jspa"),r=new TextDecoder("gbk"),n=new DOMParser,o=await e.arrayBuffer(),a=new DataView(o),c=r.decode(a),s=+t.split("|")[1]||10,l=t.split("|")[0].split(/,|，|\s/).filter(t=>t.trim()),u=c.match(/JSON_DATA.push.+/g).filter(t=>l.some(e=>t.includes(e))).map(t=>t.replace(/.+\[(.+)\].+/,"$1").replace(/"/g,"")).map(t=>{const[e,r,n,o]=t.split(",");return{symbol:r,name:n,fund_count:o}}),h=await Promise.all(u.map(t=>(async function(t,e="20170930"){const o=await Object(i.a)(`http://fund.jrj.com.cn/fhs/detail/${e}/${t}.shtml`),a=await o.arrayBuffer(),c=r.decode(new DataView(a)),[s]=/<table>\s*.+基金代码[\s\S]+?<\/table>/g.exec(c);return[...n.parseFromString(s.replace(/<tr>[\s\S]+?<\/tr>/,""),"application/xml").firstChild.children].map(({children:t})=>({symbol:t[0].textContent,name:t[1].textContent}))})(t.symbol)));for(let[t,e]of u.entries())e.funds=h[t];const f=new Map,p=new Map,d=new Map;for(let t of u){d.set(t.symbol,t);for(let e of t.funds){p.set(e.symbol,e);const r=f.get(e.symbol)||new Set;r.add(t.symbol),f.set(e.symbol,r)}}return[...f].sort((t,e)=>e[1].size-t[1].size).map(([t,e])=>[`${p.get(t).name}(${t})`,...[...e].map(t=>`${d.get(t).name}(${t})`)]).filter(t=>!/指数|沪深300/.test(t[0])).slice(0,s)}render(){const{loading:t}=this.state,e=this.state.text||"请将股票名称粘贴在本页面";if(t)return o.a.createElement("main",{className:"container"},o.a.createElement("pre",{style:{whiteSpace:"pre"},dangerouslySetInnerHTML:{__html:e}}),o.a.createElement("hr",null),o.a.createElement("p",null,"加载中..."));const r=this.state.data||[];return o.a.createElement("main",{className:"container"},o.a.createElement("pre",{style:{whiteSpace:"pre"},dangerouslySetInnerHTML:{__html:e}}),o.a.createElement("hr",null),o.a.createElement("p",null,"已过滤含有",o.a.createElement("strong",null,"指数"),"及",o.a.createElement("strong",null,"沪深300"),"字眼的基金"),o.a.createElement("section",null,r.map(t=>o.a.createElement("table",{className:"table is-bordered",key:t[0]},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{colSpan:t.length-1},t[0]))),o.a.createElement("tbody",null,o.a.createElement("tr",null,t.slice(1).map(t=>o.a.createElement("td",{key:t},t))))))))}}},635:function(t,e,r){"use strict";r.d(e,"d",function(){return o}),r.d(e,"a",function(){return a}),r.d(e,"b",function(){return i}),r.d(e,"c",function(){return c}),r.d(e,"e",function(){return s});const n=new TextDecoder("gbk");function o(t,e){return fetch("/go-api"+t,e)}function a(t){return fetch("/go-api/play/cors?"+t)}async function i(t,e=5){const r=`http://data.eastmoney.com/notices/getdata.ashx?StockCode=${t}&CodeType=1&PageIndex=1&PageSize=${e}&jsObj=a`,o=await a(r),i=await o.arrayBuffer(),c=new DataView(i),s=n.decode(c);return JSON.parse(s.slice(7,-1))}function c(){return sessionStorage.token}function s(t){sessionStorage.token=t}},636:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),i=new k(n||[]);return a._invoke=function(t,e,r){var n=u;return function(o,a){if(n===f)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw a;return P()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=S(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===u)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var s=l(t,e,r);if("normal"===s.type){if(n=r.done?p:h,s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=p,r.method="throw",r.arg=s.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var u="suspendedStart",h="suspendedYield",f="executing",p="completed",d={};function m(){}function y(){}function g(){}var v={};v[a]=function(){return this};var w=Object.getPrototypeOf,E=w&&w(w(O([])));E&&E!==r&&n.call(E,a)&&(v=E);var b=g.prototype=m.prototype=Object.create(v);function x(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function L(t){var e;this._invoke=function(r,o){function a(){return new Promise(function(e,a){!function e(r,o,a,i){var c=l(t[r],t,o);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"==typeof u&&n.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,a,i)},function(t){e("throw",t,a,i)}):Promise.resolve(u).then(function(t){s.value=t,a(s)},function(t){return e("throw",t,a,i)})}i(c.arg)}(r,o,e,a)})}return e=e?e.then(a,a):a()}}function S(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function O(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:P}}function P(){return{value:e,done:!0}}return y.prototype=b.constructor=g,g.constructor=y,g[c]=y.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},x(L.prototype),L.prototype[i]=function(){return this},t.AsyncIterator=L,t.async=function(e,r,n,o){var a=new L(s(e,r,n,o));return t.isGeneratorFunction(r)?a:a.next().then(function(t){return t.done?t.value:a.next()})},x(b),b[c]="Generator",b[a]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:O(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}}}]);
//# sourceMappingURL=21.054dd9168d69743f9117.chunk.js.map