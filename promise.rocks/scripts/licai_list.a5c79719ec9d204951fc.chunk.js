(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{613:function(e,t,l){"use strict";l.r(t);var a=l(0),n=l.n(a),r=l(17),c=l(6),i=l(54);const s=({date:e,today:t})=>{const l=e>t?"green":e===t?"#fce473":"red";return n.a.createElement("span",{style:{color:l}},e?e.substr(2):e)},o={maxWidth:"fit-content"};var m=({list:e,sum:t,onDelete:l,filterLicai:a,filter:r})=>{const m=Object(i.b)();return n.a.createElement("main",{className:"container",style:o},n.a.createElement("table",{className:"table",style:{width:"100%"}},n.a.createElement("caption",null,r?"总投资":"总收益",":",t,n.a.createElement("a",{className:"button is-small",onClick:a},r?"全部":"未回账")),n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"序号"),n.a.createElement("th",null,"理财app"),n.a.createElement("th",null,"产品名称"),n.a.createElement("th",null,"金额"),n.a.createElement("th",null,"预计收益"),n.a.createElement("th",null,"开始时间"),n.a.createElement("th",null,"结束时间"),n.a.createElement("th",null,"回账时间"),n.a.createElement("th",null,"7日年化收益"),n.a.createElement("th",null,"操作 ",n.a.createElement(c.Link,{to:"/finance/form",className:"button is-small"},"新增")))),n.a.createElement("tbody",null,e.map((e,t)=>n.a.createElement("tr",{key:t},n.a.createElement("td",null,t+1),n.a.createElement("td",null,e.app),n.a.createElement("td",null,e.product),n.a.createElement("td",null,(+e.investment||0).toLocaleString()),n.a.createElement("td",null,(+e.profit||0).toLocaleString()),n.a.createElement("td",null,e.start?e.start.substr(2):e.start),n.a.createElement("td",null,n.a.createElement(s,{date:e.end,today:m})),n.a.createElement("td",null,e.due),n.a.createElement("td",null,e.ratio),n.a.createElement("td",null,n.a.createElement(c.Link,{className:"button is-small is-primary",to:"/finance/form/"+e.id},"编辑"),n.a.createElement("a",{className:"button is-small is-danger",onClick:()=>l(e.id)},"删除")))))))},u=l(32),d=l(11);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e}).apply(this,arguments)}const p={licaiList:u.i,deleteLicai:u.b,filterLicai:d.e};t.default=Object(r.connect)(({licai:e})=>{let{list:t,filter:l}=e;return l&&(t=t.filter(e=>!e.due)),{list:t,sum:function(e,t="profit"){return e.reduce((e,l)=>+l[t]+e,0).toFixed(2)}(t,l?"investment":"profit"),filter:l}},p)(class extends n.a.Component{constructor(e){super(e),this.onDelete=this.onDelete.bind(this)}componentDidMount(){this.props.licaiList(),document.title="理财"}render(){return n.a.createElement(m,E({},this.props,{onDelete:this.onDelete}))}onDelete(e){this.props.deleteLicai(e,this.props.licaiList)}})}}]);
//# sourceMappingURL=licai_list.a5c79719ec9d204951fc.chunk.js.map