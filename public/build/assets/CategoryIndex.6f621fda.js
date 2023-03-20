import{r as l,j as e,a as n,d as m}from"./app.a2833a7e.js";import P from"./dashboard.8e9247ba.js";import{h}from"./keys.854197f4.js";import _ from"./ModalWithChildren.522ebe0d.js";import{I as L,P as z,H as F}from"./Helpers.2b405b0f.js";import{S as I}from"./index.2660bf13.js";import{F as r}from"./index.344dbd91.js";import{I as y}from"./index.0b76f977.js";import{U as E}from"./index.bd91d0ef.js";import{A as H,m as C,B as S}from"./styleChecker.ccce6752.js";import{D as M}from"./index.6957c6c8.js";import{T as R,S as o}from"./Table.bf9c410b.js";import{E as j}from"./EditOutlined.4d1fc552.js";import"./index.0579b088.js";import"./DialogWrap.96d271a4.js";import"./getScrollBarSize.fc7e30fe.js";import"./useForceUpdate.5407dd5c.js";import"./DeleteOutlined.c2fd6cf8.js";import"./css.6f61e22c.js";var U={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"swap",theme:"outlined"};const B=U;var x=function(u,d){return e(H,{...C(C({},u),{},{ref:d,icon:B})})};x.displayName="SwapOutlined";const q=l.exports.forwardRef(x);function de({categories:s,locale:u}){const[d,c]=l.exports.useState(!1);l.exports.useState(!1),l.exports.useState(0);const[p,f]=l.exports.useState([]),w=new F,b=t=>{m.Inertia.get(h("admin.categories.edit",t))},v=t=>{m.Inertia.post(h("admin.toggle.category.status",t),void 0,{preserveState:!1})},O=[{key:"id",title:"ID",dataIndex:"id"},{key:"title",title:"Title AR",dataIndex:"title_ar",render:(t,a)=>e(o,{size:"middle",children:e("span",{children:a.title.ar})})},{key:"title",title:"Title EN",dataIndex:"title_en",render:(t,a)=>e(o,{size:"middle",children:e("span",{children:a.title.en})})},{key:"order",title:"Order",dataIndex:"order"},{key:"parent",title:"Category Parent",dataIndex:"parent",render:(t,a)=>{var i;return e(o,{size:"middle",children:e("span",{children:(i=a.parent)==null?void 0:i.title.en})})}},{title:"Action",key:"action",render:(t,a)=>n(o,{size:"middle",children:[e(j,{onClick:i=>b(a.id)}),e(q,{onClick:i=>v(a.id)})]})}],k=s.map(t=>e(I.Option,{value:t.id,children:t.title.en},t.id)),T=(t,a)=>t.is_active?"bg-lime-100":"bg-red-100",g=t=>{m.Inertia.post(h("admin.categories.store"),t,{preserveState:!1})},A=t=>{t.images&&(t.images=w.appendImageToFormData(p)),g(t)},D=t=>{f(t.fileList)},N=t=>{const a=p.indexOf(t),i=p.slice();i.splice(a,1),f(i)};return e(P,{children:n("div",{children:[e(_,{openModal:d,onOk:()=>c(!1),onCancel:()=>c(!1),title:"Create New Variation",children:n(r,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},onFinish:A,autoComplete:"off",children:[e(r.Item,{label:"Type EN",name:"en",rules:[{required:!0,message:"Please fill type in EN!"}],children:e(y,{})}),e(r.Item,{label:"Type AR",name:"ar",rules:[{required:!0,message:"Please fill type in AR!"}],children:e(y,{})}),e(r.Item,{name:"order",label:"Order",children:e(L,{})}),e(r.Item,{label:"Parent Category",name:"parent_id",children:e(I,{placeholder:"Select Category Parent",allowClear:!0,children:k})}),e(r.Item,{label:"Category Image",name:"images",valuePropName:"images",children:e(E,{listType:"picture-card",onRemove:N,onChange:t=>D(t),children:n("div",{children:[e(z,{}),e("div",{style:{marginTop:8},children:"Upload"})]})})}),e(r.Item,{wrapperCol:{offset:8,span:16},children:e(S,{type:"default",htmlType:"submit",children:"Submit"})})]})}),n("div",{className:"container mx-auto py-4",children:[e(S,{onClick:()=>c(!0),children:"create new record"}),e(M,{}),e(R,{columns:O,rowKey:"id",dataSource:s,rowClassName:T})]})]})})}export{de as default};