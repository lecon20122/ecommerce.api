import{r as o,j as e,a as n,d as m}from"./app.f2ca19d8.js";import d from"./ModalWithChildren.b7505ec4.js";import{h as u}from"./index.m.4f4de470.js";import{N as x}from"./new-dashboard-layout.674989c7.js";import{A as S}from"./AntDesignDataTable.54f98552.js";import{F as a}from"./index.167c7bca.js";import{I as r}from"./index.e855b08f.js";import{B as p}from"./styleChecker.5aa62045.js";import{D as g}from"./index.5bdd6728.js";import{S as w}from"./Table.81879572.js";import{E as V}from"./EditOutlined.2d27e2fd.js";import"./zoom.bc1f3003.js";import"./ActionButton.327d4bca.js";import"./index.01f93d02.js";import"./index.62f95271.js";import"./Overflow.976cae65.js";import"./EyeOutlined.93955a47.js";import"./css.d6e3059f.js";import"./index.44fe4843.js";import"./Dropdown.81672620.js";function R({settings:c,locale:D}){const[f,i]=o.exports.useState(!1),[h,s]=o.exports.useState(!1),[t,y]=o.exports.useState(),b=[{key:"id",title:"ID",dataIndex:"id"},{key:"key",title:"Key",dataIndex:"name"},{key:"value",title:"Value",dataIndex:"value"},{title:"Action",key:"action",render:(l,v)=>e(w,{size:"middle",children:e(V,{onClick:F=>k(v)})})}],I=l=>{m.Inertia.post(u("admin.store.settings"),l,{preserveState:!1})},k=l=>{s(!0),y(l)},C=l=>{m.Inertia.post(u("admin.update.settings",{setting:t}),l,{preserveState:!1})};return e(x,{children:n("div",{className:"",children:[e(d,{openModal:f,onOk:()=>i(!1),onCancel:()=>i(!1),children:n(a,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},onFinish:I,children:[e(a.Item,{label:"Key",name:"key",rules:[{required:!0,message:"Please fill the key please"}],children:e(r,{})}),e(a.Item,{label:"Value",name:"value",rules:[{required:!0,message:"Please fill the value please"}],children:e(r,{})}),e(a.Item,{wrapperCol:{offset:8,span:16},children:e(p,{type:"default",htmlType:"submit",children:"Submit"})})]})}),e(d,{openModal:h,onOk:()=>s(!1),onCancel:()=>s(!1),children:n(a,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},onFinish:C,children:[e(a.Item,{label:"Key",initialValue:t==null?void 0:t.name,name:"key",rules:[{required:!0,message:"Please fill the key please"}],children:e(r,{})}),e(a.Item,{label:"Value",name:"value",initialValue:t==null?void 0:t.value,rules:[{required:!0,message:"Please fill the value please"}],children:e(r,{})}),e(a.Item,{wrapperCol:{offset:8,span:16},children:e(p,{type:"default",htmlType:"submit",children:"Submit"})})]})}),e(p,{onClick:()=>i(!0),children:"create new record"}),e(g,{}),e(S,{rowKey:"id",columns:b,dataSource:c})]})})}export{R as default};
