(window.webpackJsonp=window.webpackJsonp||[]).push([[29,18],{606:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n);e.default=class extends o.a.Component{constructor(t){super(t),this.state={text:""},this.handlePaste=this.handlePaste.bind(this)}componentDidMount(){document.addEventListener("paste",this.handlePaste)}componentWillUnmount(){document.removeEventListener("paste",this.handlePaste)}handlePaste(t){const e=t.clipboardData.items;e&&e[0].getAsString(t=>{this.dealWith(t)})}dealWith(t){this.setState({text:t})}render(){return o.a.createElement("main",{className:"container"},this.props.children(this.state))}}},623:function(t,e,r){"use strict";r.r(e);r(649);var n=r(0),o=r.n(n),a=r(606),i=r(646);e.default=class extends a.default{constructor(t){super(t)}componentDidMount(){super.componentDidMount()}handlePaste(t){if(this.state.loading)return;const e=t.clipboardData.items;e&&e[0].getAsString(t=>{this.setState({loading:!0}),this.respond(t).then(e=>{this.setState({text:t,data:e,loading:!1})})})}async respond(t){if(!t)return[];const e=await Object(i.a)("http://fund.jrj.com.cn/action/fhs/list.jspa"),r=new TextDecoder("gbk"),n=new DOMParser,o=await e.arrayBuffer(),a=new DataView(o),s=r.decode(a),c=+t.split("|")[1]||10,l=t.split("|")[0].split(/,|，|\s/).filter(t=>t.trim()),u=s.match(/JSON_DATA.push.+/g).filter(t=>l.some(e=>t.includes(e))).map(t=>t.replace(/.+\[(.+)\].+/,"$1").replace(/"/g,"")).map(t=>{const[e,r,n,o]=t.split(",");return{symbol:r,name:n,fund_count:o}}),h=await Promise.all(u.map(t=>(async function(t,e="20170930"){const o=await Object(i.a)(`http://fund.jrj.com.cn/fhs/detail/${e}/${t}.shtml`),a=await o.arrayBuffer(),s=r.decode(new DataView(a)),[c]=/<table>\s*.+基金代码[\s\S]+?<\/table>/g.exec(s);return[...n.parseFromString(c.replace(/<tr>[\s\S]+?<\/tr>/,""),"application/xml").firstChild.children].map(({children:t})=>({symbol:t[0].textContent,name:t[1].textContent}))})(t.symbol)));for(let[t,e]of u.entries())e.funds=h[t];const f=new Map,p=new Map,d=new Map;for(let t of u){d.set(t.symbol,t);for(let e of t.funds){p.set(e.symbol,e);const r=f.get(e.symbol)||new Set;r.add(t.symbol),f.set(e.symbol,r)}}return[...f].sort((t,e)=>e[1].size-t[1].size).map(([t,e])=>[`${p.get(t).name}(${t})`,...[...e].map(t=>`${d.get(t).name}(${t})`)]).filter(t=>!/指数|沪深300/.test(t[0])).slice(0,c)}render(){const{loading:t}=this.state,e=this.state.text||"请将股票名称粘贴在本页面";if(t)return o.a.createElement("main",{className:"container"},o.a.createElement("pre",{style:{whiteSpace:"pre"},dangerouslySetInnerHTML:{__html:e}}),o.a.createElement("hr",null),o.a.createElement("p",null,"加载中..."));const r=this.state.data||[];return o.a.createElement("main",{className:"container"},o.a.createElement("pre",{style:{whiteSpace:"pre"},dangerouslySetInnerHTML:{__html:e}}),o.a.createElement("hr",null),o.a.createElement("p",null,"已过滤含有",o.a.createElement("strong",null,"指数"),"及",o.a.createElement("strong",null,"沪深300"),"字眼的基金"),o.a.createElement("section",null,r.map(t=>o.a.createElement("table",{className:"table is-bordered",key:t[0]},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{colSpan:t.length-1},t[0]))),o.a.createElement("tbody",null,o.a.createElement("tr",null,t.slice(1).map(t=>o.a.createElement("td",{key:t},t))))))))}}},646:function(t,e,r){"use strict";r.d(e,"d",function(){return o}),r.d(e,"a",function(){return a}),r.d(e,"b",function(){return i}),r.d(e,"c",function(){return s}),r.d(e,"e",function(){return c});const n=new TextDecoder("gbk");function o(t,e){return fetch("https://ask.solutions/go-api"+t,e)}function a(t){return fetch("https://ask.solutions/go-api/play/cors?"+t)}async function i(t,e=5){const r=`http://data.eastmoney.com/notices/getdata.ashx?StockCode=${t}&CodeType=1&PageIndex=1&PageSize=${e}&jsObj=a`,o=await a(r),i=await o.arrayBuffer(),s=new DataView(i),c=n.decode(s);return JSON.parse(c.slice(7,-1))}function s(){return sessionStorage.token}function c(t){sessionStorage.token=t}},649:function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag",l="object"==typeof t,u=e.regeneratorRuntime;if(u)l&&(t.exports=u);else{(u=e.regeneratorRuntime=l?t.exports:{}).wrap=b;var h="suspendedStart",f="suspendedYield",p="executing",d="completed",m={},y={};y[i]=function(){return this};var g=Object.getPrototypeOf,v=g&&g(g(D([])));v&&v!==n&&o.call(v,i)&&(y=v);var w=S.prototype=x.prototype=Object.create(y);L.prototype=w.constructor=S,S.constructor=L,S[c]=L.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,S):(t.__proto__=S,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(w),t},u.awrap=function(t){return{__await:t}},_(j.prototype),j.prototype[s]=function(){return this},u.AsyncIterator=j,u.async=function(t,e,r,n){var o=new j(b(t,e,r,n));return u.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},_(w),w[c]="Generator",w[i]=function(){return this},w.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},u.values=D,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return s.type="throw",s.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),l=o.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:D(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),m}}}function b(t,e,r,n){var o=e&&e.prototype instanceof x?e:x,a=Object.create(o.prototype),i=new N(n||[]);return a._invoke=function(t,e,r){var n=h;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return T()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=k(i,r);if(s){if(s===m)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=E(t,e,r);if("normal"===c.type){if(n=r.done?d:f,c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=d,r.method="throw",r.arg=c.arg)}}}(t,r,i),a}function E(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function x(){}function L(){}function S(){}function _(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function j(t){var e;this._invoke=function(r,n){function a(){return new Promise(function(e,a){!function e(r,n,a,i){var s=E(t[r],t,n);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"==typeof l&&o.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,a,i)},function(t){e("throw",t,a,i)}):Promise.resolve(l).then(function(t){c.value=t,a(c)},i)}i(s.arg)}(r,n,e,a)})}return e=e?e.then(a,a):a()}}function k(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,k(t,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=E(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,m;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,m):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function D(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:T}}function T(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())}}]);
//# sourceMappingURL=29.5741120f1cfc1d88fdde.chunk.js.map