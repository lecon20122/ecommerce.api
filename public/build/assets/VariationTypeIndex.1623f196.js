import{r as v,j as e,a as l,d as s}from"./app.f2ca19d8.js";import C from"./ModalWithChildren.b7505ec4.js";import{h as d}from"./index.m.4f4de470.js";import{A as _}from"./AntDesignDataTable.54f98552.js";import{N as g}from"./new-dashboard-layout.674989c7.js";import{B as m}from"./styleChecker.5aa62045.js";import{D as w}from"./index.5bdd6728.js";import{F as r}from"./index.167c7bca.js";import{I as p}from"./index.e855b08f.js";import{S as a}from"./index.44fe4843.js";import{S as o}from"./Table.81879572.js";import{E as x}from"./EditOutlined.2d27e2fd.js";import{D}from"./DeleteOutlined.915f6f82.js";import"./zoom.bc1f3003.js";import"./ActionButton.327d4bca.js";import"./index.01f93d02.js";import"./index.62f95271.js";import"./Overflow.976cae65.js";import"./EyeOutlined.93955a47.js";import"./css.d6e3059f.js";import"./Dropdown.81672620.js";function H({variationTypes:c,locale:h}){const[u,n]=v.exports.useState(!1),f=i=>{s.Inertia.get(d("admin.variations.type.edit",i))},y=i=>{s.Inertia.post(d("admin.variations.type.destroy",i))},b=i=>{s.Inertia.post(d("admin.variations.type.store"),i,{preserveState:!1})},I=[{key:"id",title:"ID",dataIndex:"id"},{key:"type",title:"Type",dataIndex:"type",render:(i,t)=>e(o,{size:"middle",children:e("span",{children:t.type[h]})})},{key:"is_mediable",title:"Eligible for Media",dataIndex:"is_mediable",render:(i,t)=>e(o,{size:"middle",children:e("span",{children:t.is_mediable?"Yes":"No"})})},{key:"is_stockable",title:"Eligible for Stock",dataIndex:"is_mediable",render:(i,t)=>e(o,{size:"middle",children:e("span",{children:t.is_stockable?"Yes":"No"})})},{title:"Action",key:"action",render:(i,t)=>l(o,{size:"middle",children:[e(x,{onClick:k=>f(t.id)}),e(D,{onClick:k=>y(t.id)})]})}];return e(g,{children:l("div",{className:"",children:[e(m,{onClick:()=>n(!0),children:"create new record"}),e(w,{}),e(C,{openModal:u,onOk:()=>n(!1),onCancel:()=>n(!1),title:"Create New Variation",children:l(r,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},onFinish:b,autoComplete:"off",children:[e(r.Item,{label:"Type EN",name:"en",rules:[{required:!0,message:"Please fill type in EN!"}],children:e(p,{})}),e(r.Item,{label:"Type AR",name:"ar",rules:[{required:!0,message:"Please fill type in AR!"}],children:e(p,{})}),e(r.Item,{label:"Eligible for Media ?",name:"is_mediable",rules:[{required:!0,message:"Please fill type in AR!"}],children:l(a,{placeholder:"this type will have image ?",allowClear:!0,children:[e(a.Option,{value:!0,children:"yes"}),e(a.Option,{value:!1,children:"no"})]})}),e(r.Item,{label:"is stockable ?",name:"is_stockable",rules:[{required:!0,message:"Please fill type in AR!"}],children:l(a,{placeholder:"this type will have image ?",allowClear:!0,children:[e(a.Option,{value:!0,children:"yes"}),e(a.Option,{value:!1,children:"no"})]})}),e(r.Item,{wrapperCol:{offset:8,span:16},children:e(m,{type:"default",htmlType:"submit",children:"Submit"})})]})}),e(_,{columns:I,rowKey:"id",dataSource:c})]})})}export{H as default};
