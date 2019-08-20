(window.webpackJsonp=window.webpackJsonp||[]).push([[17,34],{598:function(t,e,a){"use strict";a.r(e),a.d(e,"auto",function(){return s}),a.d(e,"mysql",function(){return r}),a.d(e,"history",function(){return i});const s={tabs:[],pageList:[5,7]},r={fields:{table_schema:{label:"schema"},table_name:{label:"table",sortable:!0},column_name:{label:"column",sortable:!0},column_type:{label:"type"}},tabs:[{label:"tab1",fields:["table_schema","table_name","column_name","column_type"]}],pageList:[5,7]},i={fields:{host:{label:"host"},created:{label:"created",sortable:!0},pathname:{label:"path"}},tabs:[{label:"tab1",fields:["host","pathname","created"]}],pageList:[5,7]};e.default={mysql:r,history:i,auto:s}},626:function(t,e,a){"use strict";a.r(e);var s=a(0),r=a.n(s);const i="/logically/es",o=t=>({token:t||localStorage.es_token}),l={query:{match_all:{}}};var n=a(598),p=a(662),c=a(21),d=a(10);class h extends r.a.Component{constructor(t){super(t),this.getMapping=this.getMapping.bind(this),this.state={indices:[],message:""}}async componentDidMount(){const t=await async function(){const t=await fetch(i+"/_cat/indices?format=json",{method:"GET",headers:o()});return await t.json()}();this.setState(!1===t.ok?{message:t.message}:{indices:t,message:""})}getMapping(t){if("A"===t.target.tagName){t.preventDefault();const e=t.target.getAttribute("href");return this.props.history.push("/d/es/"+e)}}render(){const{indices:t,message:e}=this.state,a=e||r.a.createElement(p.a,{data:{rows:t,total:t.length},table:h.table,containerClass:"naked"});return r.a.createElement("section",{onClick:this.getMapping},a)}}!function(t,e,a){e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a}(h,"table",{fields:{index:{label:"index",format:(t,e,a)=>`<a href='${t}'>${t}</a>`},"docs.count":{label:"doc_count",sortable:!0},"store.size":{label:"size",sortable:!0},status:{label:"status"},health:{label:"health"}},tabs:[{label:"tab1",fields:["index","docs.count","store.size","status","health"]}],pageList:[10,10]});class u extends r.a.Component{constructor(t){super(t),this.state={types:[],message:""}}async componentDidMount(){this.load()}componentDidUpdate(){const{index:t}=this.state,{index:e}=this.props.match.params;t!==e&&this.load()}async load(){const{index:t}=this.props.match.params,e=await async function(t=""){const e=await fetch(i+t+"/_mapping",{method:"GET",headers:o()});return await e.json()}("/"+t);this.setState(!1===e.ok?{message:e.message}:{types:Object.keys(e[t].mappings),index:t,message:""})}render(){return this.state.message?"":r.a.createElement("ul",null,this.state.types.map(t=>r.a.createElement("li",{key:t},r.a.createElement(d.Link,{to:this.props.match.url+"/"+t},t))))}}class b extends r.a.Component{constructor(t){super(t),this.loadData=this.loadData.bind(this)}async loadData({page:t,rows:e,field:a,order:s},r){const{index:n,type:p}=this.props.match.params,c=await async function(t,e=l){const a=await fetch(i+t+"/_search",{method:"POST",headers:o(),body:JSON.stringify(e)});return await a.json()}(`/${n}/${p}`,{from:t-1,size:e,query:{match_all:{}}});if(!1===c.ok)return void console.warn(c);const d=c.hits.hits.map(t=>t._source);r({total:c.hits.total,rows:d})}render(){const t=n.default[this.props.match.params.type]||n.default.auto;return r.a.createElement(p.a,{data:{rows:[],total:0},table:t,loadData:this.loadData,containerClass:"naked",fetchByPage:!0})}}e.default=class extends r.a.Component{constructor(t){super(t)}render(){const{match:t}=this.props;return r.a.createElement("div",{className:"container"},r.a.createElement(h,{match:this.props.match,history:this.props.history}),r.a.createElement(c.d,{path:t.url+"/:index",render:t=>r.a.createElement(u,t)}),r.a.createElement(c.d,{path:t.url+"/:index/:type",component:b}))}}},644:function(t,e,a){"use strict";a.r(e),a.d(e,"default",function(){return i});var s=a(0),r=a.n(s);function i(t,e,a){return t.map((t,s)=>r.a.createElement("tr",{key:s},e.map((e,s)=>{var i=t["_"+e];if(null==i){i=t[e];var o=a[e].format;o&&(i=o(i,e,t)),t["_"+e]=i||""}return r.a.createElement("td",{key:s,dangerouslySetInnerHTML:{__html:i}})})))}},661:function(t,e,a){},662:function(t,e,a){"use strict";var s=a(0),r=a.n(s);var i=class extends r.a.Component{shouldComponentUpdate(t){return this.props.selectedTab!==t.selectedTab}render(){return r.a.createElement("ul",{className:this.props.tabClass},this.props.tabNames.map(function(t,e){var a={key:e};return this.props.selectedTab===e?a.className="active":a.onClick=this.props.setTab.bind(this,e),r.a.createElement("li",a,r.a.createElement("a",{href:"javascript:void(0);"},t))},this))}};var o=class extends r.a.Component{shouldComponentUpdate(t){return this.props.selectedTab!==t.selectedTab||this.props.order!==t.order||this.props.fields.length!==t.fields.length}componentDidMount(){this.initTooltip()}initTooltip(){window.$&&$.fn.tipsy&&$(this.getDOMNode()).tipsy({gravity:"s",live:".naked-tooltip",title:function(){return this.getAttribute("data-tip")},html:!0})}render(){const t=this.props.field,e=this.props.order,a=this.props.fields,s=this.props.table.fields||this.props.labelledFields,i=this.props.table.sortable;return r.a.createElement("thead",null,r.a.createElement("tr",null,a.map(function(o,l){const n=s[o],p=t===o?e:"";if(!n)throw Error("field:"+o+" not in fields list -> ",a);const c={key:l,style:n.style,className:"naked-tooltip "+p,"data-tip":n.tooltip||n.label};return(n.sortable||i&&!1!==n.sortable)&&(c.className+=" sortable",c.onClick=this.props.sort.bind(this,o)),r.a.createElement("th",c,s[o].label)},this)))}},l=a(644);var n=class extends r.a.Component{render(){const{fields:t,fieldsConfig:e,labelledFields:a,rows:s,loadingTip:i}=this.props;return s&&s.length?r.a.createElement("tbody",null,Object(l.default)(s,t,e||a)):r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{colSpan:t.length},i)))}},p=a(644).buildRows;var c=class extends r.a.Component{shouldComponentUpdate(t){return this.props.selectedTab!==t.selectedTab}render(){const{rows:t}=this.props;return t&&t.length?r.a.createElement("tfoot",null,p(t,this.props.fields,this.props.table.fields||this.props.labelledFields)):null}};var d={jump:function(t,e){"disabled"!==e.currentTarget.className&&this.props.jump(t,e.target.value)},setPageSize:function(t){this.props.setPageSize(t.target.value)},buildPageList:function(){return r.a.createElement("select",{onChange:this.setPageSize},this.props.pageList.map(function(t,e){return r.a.createElement("option",null,t)}))},shouldComponentUpdate:function(t){return this.props.page!==t.page||this.props.pageTotal!==t.pageTotal}};var h=class extends r.a.Component{constructor(t){super(t),Object.assign(this,d)}getPageInfo(){return this.props.page+"/"+this.props.pageTotal}render(){return r.a.createElement("div",{style:{textAlign:"right"}},r.a.createElement("ul",{className:"nt-pagination"},r.a.createElement("li",{onClick:this.jump.bind(this,"prev"),className:1===this.props.page?"disabled":null},r.a.createElement("a",{href:"javascript:void 0"},"上一页")),r.a.createElement("li",null,this.getPageInfo()),r.a.createElement("li",{onClick:this.jump.bind(this,"next"),className:this.props.page===this.props.pageTotal?"disabled":null},r.a.createElement("a",{href:"javascript:void 0"},"下一页 "))))}};a(661);function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,s)}return a}function b(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}class m extends r.a.Component{constructor(t){super(t),["setTab","sort","jump","setPageSize"].forEach(t=>this[t]=this[t].bind(this)),this.state=this._getInitialState()}_getInitialState(){const{table:t,data:e}=this.props,a=this.props.tabNames||t.tabs.map(t=>t.label),s=t.pageList||[10];return this.handleFormSubmit(),{data:e,selectedTab:this.props.selectedTab,page:1,rows:t.pageList[0],pageTotal:Math.ceil(e.total/t.pageList[0]),order:this.props.order,field:this.props.field,tabClass:t.tabClass||this.props.tabClass,showTabs:a&&a.length>1,loadData:t.loadData||this.props.loadData,tabNames:a,pageList:s}}static getDerivedStateFromProps(t,e){const{table:a,data:s}=t;let r=a.fields,{fields:i}=a.tabs[t.selectedTab]||{};return!i&&s.rows.length&&(r=(i=Object.keys(s.rows[0])).map(t=>({[t]:{label:t}}))),Object.assign({},e,{data:s,fields:i||[],labelledFields:r||[],pageTotal:Math.ceil(s.total/e.pageList[0])})}componentDidMount(){this.ajax()}render(){const{showTabs:t,tabClass:e,tabNames:a,fields:s,labelledFields:i,pageList:o,pageTotal:l}=this.state,{table:n}=this.props;return r.a.createElement("div",{className:this.props.containerClass},t&&r.a.createElement(this.props.Tabs,{tabClass:e,tabNames:a,selectedTab:this.state.selectedTab,setTab:this.setTab,table:n}),r.a.createElement("table",{className:this.props.tableClass},r.a.createElement(this.props.THead,{fields:s,table:this.props.table,labelledFields:i,field:this.state.field,order:this.state.order,sort:this.sort,selectedTab:this.state.selectedTab}),r.a.createElement(this.props.TBody,{fields:s,fieldsConfig:this.props.table.fields,labelledFields:i,rows:this.getRows()}),r.a.createElement(this.props.TFoot,{fields:s,fieldsConfig:this.props.table.fields,labelledFields:i,rows:this.state.data.footer,selectedTab:this.state.selectedTab})),this.props.showPagination&&r.a.createElement(this.props.Pagination,{pageList:o,total:this.state.data.total,page:this.state.page,pageTotal:l,jump:this.jump,setPageSize:this.setPageSize}))}handleFormSubmit(){this.props.form&&this.props.form.addEventListener("submit",t=>{t.preventDefault(),this.ajax(1)})}sort(t,e){var a=this.state.data.rows;a&&(this.state.field=t,this.state.order="desc"===this.state.order?"asc":"desc",this.props.fetchByPage?this.ajax():(this.doSort(a,t,this.state.order),this.setState({data:{rows:a,total:a.length,footer:this.state.data.footer}})))}sortOnLoad(t){if(t&&t.length){const{order:e,field:a}=this.state;if(!e||!a)return;this.doSort(t,a,e)}}doSort(t,e,a){t.sort((t,a)=>{const s=t[e],r=a[e];return s===r?0:s>r?1:-1}),"desc"===a&&t.reverse()}jump(t,e){let{page:a,pageTotal:s}=this.state;switch(t){case"end":a=s;break;case"prev":a--;break;case"next":a++;break;case"jump":a=+e||1;break;default:a=1}a>s?a=s:a<1&&(a=1),a!==this.state.page&&this.ajax(a)}setPageSize(t){this.props.fetchByPage?this.ajax(1,t):this.setState({rows:t,page:1,pageTotal:Math.ceil(this.state.data.total/t||1)})}setTab(t){const e=this.props.table.tabs[t].fields;this.setState({selectedTab:t,fields:e})}getParams(t,e){return{page:t||this.state.page,rows:e||this.state.rows,field:this.state.field,order:this.state.order}}ajax(t,e){if(!this.props.fetchByPage&&t)return void this.setState({page:t});const a=this.getParams(t,e);this.state.loadData&&this.state.loadData(a,t=>{const e={};t.total<1&&(e.loadingTip="没有数据可展示"),e.data=t,this.sortOnLoad(t.rows),this.state.fields.length||t.rows.length&&(e.fields=Object.keys(t.rows[0]),e.labelledFields=e.fields.reduce((t,e)=>(t[e]={label:e},t),{})),this.setState(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(a,!0).forEach(function(e){b(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}({page:this.props.fetchByPage?a.page:1,pageTotal:Math.ceil(t.total/this.state.rows||1)},e))})}getRows(){const t=this.state.page,e=this.state.rows,a=this.state.data.rows;return this.props.fetchByPage?a:a.slice((t-1)*e,t*e)}}b(m,"defaultProps",{Tabs:i,THead:o,TBody:n,TFoot:c,Pagination:h,containerClass:"naked",tabClass:"nt-nav",tableClass:"nt-table",loadingTip:"Loading ...",tabNames:null,selectedTab:0,form:null,fetchByPage:!1,showPagination:!0,data:{total:0,rows:[]},order:null,field:null,loadData:null});e.a=m}}]);
//# sourceMappingURL=17.6c9d0d1262c643b602e4.chunk.js.map