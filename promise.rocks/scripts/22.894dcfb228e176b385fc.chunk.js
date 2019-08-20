(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{594:function(t,r,e){"use strict";e.r(r);var n=e(0),o=e.n(n),i=(e(636),e(635)),a=e(599);const c={"万":1,"亿":1e4};function s(t){return(c[t.slice(-1)]||1)*t.replace(/[^\d.]/g,"")}function u(t){return+t}r.default=class extends o.a.Component{constructor(t){super(t),this.state={}}componentDidMount(){this.fetchStock()}async fetchStock(){const{symbol:t,market:r}=this.props.stock,e=await Object(i.a)(`http://emweb.securities.eastmoney.com/PC_HSF10/FinanceAnalysis/MainTargetAjax?code=${r}${t}&type=1`),{Result:n}=await e.json();this.setState({stock:n.reverse()})}renderChart({caption:t,fields:r,colors:e}){const{stock:n}=this.state;return n&&n.length?o.a.createElement(a.default,{caption:t,fields:r,data:n,colors:e}):null}render(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{ref:t=>this.$chart=t}),this.renderChart({caption:"净资产收益率(%)",fields:[{prop:"jqjzcsyl",propTitle:"收益率",propFormat:u}],colors:["violet"]}),this.renderChart({caption:"归属净利润(万元)",fields:[{prop:"gsjlr",propTitle:"归属净利润",propFormat:s},{prop:"kfjlr",propTitle:"扣非净利润",propFormat:s}]}),this.renderChart({caption:"收入同比增长率(%)",fields:[{prop:"yyzsrtbzz",propTitle:"营业总收入同比增长率",propFormat:u},{prop:"gsjlrtbzz",propTitle:"归属净利润同比增长率",propFormat:u}]}))}}},635:function(t,r,e){"use strict";e.d(r,"d",function(){return o}),e.d(r,"a",function(){return i}),e.d(r,"b",function(){return a}),e.d(r,"c",function(){return c}),e.d(r,"e",function(){return s});const n=new TextDecoder("gbk");function o(t,r){return fetch("/go-api"+t,r)}function i(t){return fetch("/go-api/play/cors?"+t)}async function a(t,r=5){const e=`http://data.eastmoney.com/notices/getdata.ashx?StockCode=${t}&CodeType=1&PageIndex=1&PageSize=${r}&jsObj=a`,o=await i(e),a=await o.arrayBuffer(),c=new DataView(a),s=n.decode(c);return JSON.parse(s.slice(7,-1))}function c(){return sessionStorage.token}function s(t){sessionStorage.token=t}},636:function(t,r,e){var n=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),a=new S(n||[]);return i._invoke=function(t,r,e){var n=h;return function(o,i){if(n===l)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return O()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=k(a,e);if(c){if(c===y)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===h)throw n=p,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=l;var s=u(t,r,e);if("normal"===s.type){if(n=e.done?p:f,s.arg===y)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(n=p,e.method="throw",e.arg=s.arg)}}}(t,e,a),i}function u(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var h="suspendedStart",f="suspendedYield",l="executing",p="completed",y={};function d(){}function g(){}function v(){}var m={};m[i]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(F([])));x&&x!==e&&n.call(x,i)&&(m=x);var L=v.prototype=d.prototype=Object.create(m);function b(t){["next","throw","return"].forEach(function(r){t[r]=function(t){return this._invoke(r,t)}})}function E(t){var r;this._invoke=function(e,o){function i(){return new Promise(function(r,i){!function r(e,o,i,a){var c=u(t[e],t,o);if("throw"!==c.type){var s=c.arg,h=s.value;return h&&"object"==typeof h&&n.call(h,"__await")?Promise.resolve(h.__await).then(function(t){r("next",t,i,a)},function(t){r("throw",t,i,a)}):Promise.resolve(h).then(function(t){s.value=t,i(s)},function(t){return r("throw",t,i,a)})}a(c.arg)}(e,o,r,i)})}return r=r?r.then(i,i):i()}}function k(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,k(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=u(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function j(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function _(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function F(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:O}}function O(){return{value:r,done:!0}}return g.prototype=L.constructor=v,v.constructor=g,v[c]=g.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},b(E.prototype),E.prototype[a]=function(){return this},t.AsyncIterator=E,t.async=function(r,e,n,o){var i=new E(s(r,e,n,o));return t.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},b(L),L[c]="Generator",L[i]=function(){return this},L.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=F,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),_(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;_(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:F(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}}}]);
//# sourceMappingURL=22.894dcfb228e176b385fc.chunk.js.map