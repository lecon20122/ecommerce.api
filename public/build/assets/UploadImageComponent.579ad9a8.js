import{r as U,j as r,a as t,d as L}from"./app.1fdb214b.js";import{P as y,H as C}from"./Helpers.ba6889ad.js";import{h as P}from"./index.m.9084c204.js";import{F as i}from"./index.15faf1ff.js";import{U as T}from"./index.bf79f81c.js";import{B as j}from"./button.034a529d.js";function D({formClassName:m,buttonLabel:l="UPLOAD",routeName:p,params:c,wrapperCol:d,labelCol:f,buttonWrapperCol:h}){const[s,o]=U.exports.useState([]),g=new C,a=e=>{L.Inertia.post(P(p,c),e,{preserveState:!1})},u=e=>{e.images&&(e.images=g.appendImageToFormData(s)),a(e)},x=e=>{o(e.fileList)},F=e=>{const I=s.indexOf(e),n=s.slice();n.splice(I,1),o(n)};return r(i,{className:m,onFinish:u,labelCol:f,wrapperCol:d,children:[t(i.Item,{name:"images",valuePropName:"images",children:t(T,{listType:"picture-card",onRemove:F,onChange:e=>x(e),children:r("div",{children:[t(y,{}),t("div",{style:{marginTop:8},children:"Upload"})]})})}),t(i.Item,{wrapperCol:h,children:t(j,{type:"default",htmlType:"submit",children:l})})]})}export{D as U};
