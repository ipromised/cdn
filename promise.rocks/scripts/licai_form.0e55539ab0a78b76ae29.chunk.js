(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{624:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(22),c=t(10),r=t(790),i=t(102);function o(){return(o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function m(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}const d=e=>{let{type:a="text",name:t,model:n={},onChange:s}=e,c=m(e,["type","name","model","onChange"]);return l.a.createElement("input",o({type:a,name:t,onChange:e=>s({[e.target.name]:e.target.value}),value:n[t]||""},c))},u=function({name:e,model:a,focused:t,handleFocus:n,onChange:s}){return l.a.createElement("div",{className:"control",onClick:e=>{e.stopPropagation()}},l.a.createElement(d,{className:"input",type:"date",name:e,model:a,onFocus:e=>{e.stopPropagation(),n(e.target.name)}}),e===t&&l.a.createElement(r.a,{width:400,height:600,selected:a[e]?new Date(a[e]):new Date,keyboardSupport:!0,onSelect:a=>{s({[e]:Object(i.a)(a)})}}))};var h=e=>{const{detail:a,handleSubmit:t,handleFocus:n,handleBlur:s,inputChanged:r,focused:i}=e;return l.a.createElement("div",{onClick:s},l.a.createElement("form",{onSubmit:t},l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"app名称"),l.a.createElement("div",{className:"control"},l.a.createElement(d,{className:"input",name:"app",required:!0,model:a,onChange:r}))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"产品名称"),l.a.createElement("div",{className:"control"},l.a.createElement(d,{className:"input",name:"product",required:!0,model:a,onChange:r}))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"预计收益"),l.a.createElement("div",{className:"control"},l.a.createElement(d,{className:"input",name:"profit",type:"number",min:"0",step:"0.01",model:a,onChange:r}))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"投资金额"),l.a.createElement("div",{className:"control"},l.a.createElement(d,{className:"input",type:"number",name:"investment",required:!0,min:"0",step:"0.01",model:a,onChange:r}))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"开始日期"),l.a.createElement(u,{name:"start",focused:i,handleFocus:n,handleBlur:s,model:a,onChange:r})),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"结束日期"),l.a.createElement(u,{name:"end",focused:i,handleFocus:n,handleBlur:s,model:a,onChange:r})),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"到账时间"),l.a.createElement(u,{name:"due",focused:i,handleFocus:n,handleBlur:s,model:a,onChange:r})),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"7日年化收益"),l.a.createElement("div",{className:"control"},l.a.createElement(d,{className:"input",type:"number",name:"ratio",min:"0",step:"0.01",model:a,onChange:r}))),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("button",{className:"button is-primary"},"Submit"),l.a.createElement(c.Link,{className:"button is-link",to:"/licai"},"Cancel")))))},p=t(38),b=t(13);function f(){return(f=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}const E={licaiDetail:p.h,saveLicai:p.k,inputChanged:b.f};a.default=Object(s.connect)(e=>({detail:e.licaiDetail}),E)(class extends l.a.Component{constructor(e){super(e),this.state={focused:null},this.handleSubmit=this.handleSubmit.bind(this),this.handleBlur=this.handleFocus.bind(this,null),this.handleFocus=this.handleFocus.bind(this)}componentDidMount(){this.props.match.params.id&&this.props.licaiDetail(this.props.match.params.id)}handleFocus(e){this.setState({focused:e})}handleSubmit(e){e.preventDefault(),this.props.saveLicai(()=>{this.props.history.push("/finance")})}render(){return l.a.createElement("main",{className:"container"},l.a.createElement(h,f({},this.props,{focused:this.state.focused,handleSubmit:this.handleSubmit,handleFocus:this.handleFocus,handleBlur:this.handleBlur})))}})}}]);
//# sourceMappingURL=licai_form.0e55539ab0a78b76ae29.chunk.js.map