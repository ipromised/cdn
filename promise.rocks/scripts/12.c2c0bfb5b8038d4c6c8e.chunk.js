(window.webpackJsonp=window.webpackJsonp||[]).push([[12,0],{636:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(649);const l="es_token";t.default=class extends a.a.Component{constructor(){super(),this.state={token:localStorage[l],loading:!0}}componentDidMount(){this.load()}load(){this.setState({loading:!0});const{token:e}=this.state;fetch("/logically/browsing",{headers:{token:e}}).then(e=>e.json()).then(e=>{this.setState({loading:!1,data:e})})}render(){const{loading:e,data:t}=this.state;return e?a.a.createElement("div",{className:"container"},a.a.createElement(o.a,null)):!1===t.ok?a.a.createElement("div",{className:"container"},a.a.createElement("strong",{style:{color:"red"}},t.message)):a.a.createElement("div",{className:"container"},a.a.createElement("h3",null,"Total: ",t.total),a.a.createElement("table",{className:"table is-striped",style:{tableLayout:"fixed"}},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"SN"),a.a.createElement("th",null,"Domain"),a.a.createElement("th",null,"Count"),a.a.createElement("th",null,"First"),a.a.createElement("th",null,"Last"))),a.a.createElement("tbody",null,t.buckets.map((e,t)=>a.a.createElement("tr",{key:e.key},a.a.createElement("td",null,t+1),a.a.createElement("td",null,a.a.createElement("div",{title:e.key,style:{textOverflow:"ellipsis",maxWidth:"20em",whiteSpace:"nowrap",overflow:"hidden"}},e.key)),a.a.createElement("td",null,e.doc_count),a.a.createElement("td",null,new Date(e.min_date.value).toLocaleString()),a.a.createElement("td",null,new Date(e.max_date.value).toLocaleString()))))))}}},645:function(e,t,n){var r;
/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r))e.push(a.apply(null,r));else if("object"===o)for(var l in r)n.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}void 0!==e&&e.exports?e.exports=a:void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},649:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(652),l=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.a=(({name:e="three-bounce",style:t={}})=>a.a.createElement(l.a,{style:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){i(e,t,n[t])})}return e}({textAlign:"center",marginTop:"20%"},t),name:e}))},652:function(e,t,n){"use strict";(function(t){var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=c(n(1)),l=c(n(0)),i=c(n(645)),s=c(n(93)),u=n(687);function c(e){return e&&e.__esModule?e:{default:e}}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.env.REACT_SPINKIT_NO_STYLES||(n(686),n(684),n(682),n(680),n(678),n(676),n(674),n(672),n(670),n(668),n(666),n(664),n(662),n(660),n(658));var d="Deprecation Warning (react-spinkit): noFadeIn prop should be replaced with fadeIn='none'",f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e.noFadeIn&&console.warn(d);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.displayName="SpinKit",n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.default.Component),a(t,[{key:"render",value:function(){var e,t=u.allSpinners[this.props.name]||u.allSpinners["three-bounce"],n=(0,i.default)((p(e={"sk-fade-in":"full"===this.props.fadeIn&&!this.props.noFadeIn,"sk-fade-in-half-second":"half"===this.props.fadeIn&&!this.props.noFadeIn,"sk-fade-in-quarter-second":"quarter"===this.props.fadeIn&&!this.props.noFadeIn,"sk-spinner":!this.props.overrideSpinnerClassName},this.props.overrideSpinnerClassName,!!this.props.overrideSpinnerClassName),p(e,this.props.className,!!this.props.className),p(e,t.className||this.props.name,!0),e)),a=(0,s.default)({},this.props);return delete a.name,delete a.fadeIn,delete a.noFadeIn,delete a.overrideSpinnerClassName,delete a.className,this.props.color&&(a.style=a.style?r({},a.style,{color:this.props.color}):{color:this.props.color}),l.default.createElement("div",r({},a,{className:n}),[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(Array(t.divCount))).map(function(e,t){return l.default.createElement("div",{key:t})}))}}]),t}();f.propTypes={name:o.default.string.isRequired,noFadeIn:o.default.bool,fadeIn:o.default.oneOf(["full","half","quarter","none"]),overrideSpinnerClassName:o.default.string,className:o.default.string,color:o.default.string},f.defaultProps={name:"three-bounce",noFadeIn:!1,fadeIn:"full",overrideSpinnerClassName:""},e.exports=f}).call(this,n(688))},658:function(e,t,n){},660:function(e,t,n){},662:function(e,t,n){},664:function(e,t,n){},666:function(e,t,n){},668:function(e,t,n){},670:function(e,t,n){},672:function(e,t,n){},674:function(e,t,n){},676:function(e,t,n){},678:function(e,t,n){},680:function(e,t,n){},682:function(e,t,n){},684:function(e,t,n){},686:function(e,t,n){},687:function(e,t,n){"use strict";var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a={circle:{className:"sk-circle",divCount:12},"cube-grid":{className:"sk-cube-grid",divCount:9},wave:{className:"sk-wave",divCount:5},"folding-cube":{className:"sk-folding-cube",divCount:4},"three-bounce":{className:"sk-three-bounce",divCount:3},"double-bounce":{className:"sk-double-bounce",divCount:2},"wandering-cubes":{className:"sk-wandering-cubes",divCount:2},"chasing-dots":{className:"sk-chasing-dots",divCount:2},"rotating-plane":{className:"sk-rotating-plane",divCount:1},pulse:{className:"sk-pulse",divCount:1},wordpress:{className:"sk-wordpress",divCount:1}},o={"ball-grid-beat":{divCount:9},"ball-grid-pulse":{divCount:9},"line-spin-fade-loader":{divCount:8},"ball-spin-fade-loader":{divCount:8},"ball-pulse-rise":{divCount:5},"line-scale":{divCount:5},"line-scale-pulse-out":{divCount:5},"line-scale-pulse-out-rapid":{divCount:5},pacman:{divCount:5},"line-scale-party":{divCount:4},"ball-triangle-path":{divCount:3},"ball-scale-multiple":{divCount:3},"ball-scale-ripple-multiple":{divCount:3},"ball-pulse-sync":{divCount:3},"ball-beat":{divCount:3},"ball-zig-zag":{divCount:2},"ball-zig-zag-deflect":{divCount:2},"ball-clip-rotate-pulse":{divCount:2},"ball-clip-rotate-multiple":{divCount:2},"ball-clip-rotate":{divCount:1},"ball-scale-ripple":{divCount:1},"triangle-skew-spin":{divCount:1}};e.exports={spinkitSpinners:a,loadersCssSpinners:o,allSpinners:r({},a,o)}},688:function(e,t){var n,r,a=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function l(){throw new Error("clearTimeout has not been defined")}function i(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:l}catch(e){r=l}}();var s,u=[],c=!1,p=-1;function d(){c&&s&&(c=!1,s.length?u=s.concat(u):p=-1,u.length&&f())}function f(){if(!c){var e=i(d);c=!0;for(var t=u.length;t;){for(s=u,u=[];++p<t;)s&&s[p].run();p=-1,t=u.length}s=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===l||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new m(e,t)),1!==u.length||c||i(f)},m.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=h,a.addListener=h,a.once=h,a.off=h,a.removeListener=h,a.removeAllListeners=h,a.emit=h,a.prependListener=h,a.prependOnceListener=h,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}}}]);
//# sourceMappingURL=12.c2c0bfb5b8038d4c6c8e.chunk.js.map