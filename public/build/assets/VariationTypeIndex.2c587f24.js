import{r as v,j as e,a as l,d as s}from"./app.20d7a450.js";import C from"./ModalWithChildren.c11b1224.js";import{h as d}from"./index.m.4f4de470.js";import{A as _}from"./AntDesignDataTable.70e943ce.js";import{N as g}from"./new-dashboard-layout.ca5ec6da.js";import{B as m}from"./styleChecker.d0e0c105.js";import{D as w}from"./index.c1954e64.js";import{F as r}from"./index.2b6dfb9b.js";import{I as p}from"./index.d4f8ce5f.js";import{S as a}from"./index.fe7f7c74.js";import{S as o}from"./Table.4ebdba9e.js";import{E as x}from"./EditOutlined.48e7c358.js";import{D}from"./DeleteOutlined.431eb249.js";import"./zoom.43d26361.js";import"./ActionButton.12482c65.js";import"./index.7da7955d.js";import"./index.944d00ec.js";import"./Overflow.9e164c9f.js";import"./EyeOutlined.8d0a8f5c.js";import"./css.d6e3059f.js";import"./Dropdown.54083811.js";function H({variationTypes:c,locale:h}){const[u,n]=v.exports.useState(!1),f=i=>{s.Inertia.get(d("admin.variations.type.edit",i))},y=i=>{s.Inertia.post(d("admin.variations.type.destroy",i))},b=i=>{s.Inertia.post(d("admin.variations.type.store"),i,{preserveState:!1})},I=[{key:"id",title:"ID",dataIndex:"id"},{key:"type",title:"Type",dataIndex:"type",render:(i,t)=>e(o,{size:"middle",children:e("span",{children:t.type[h]})})},{key:"is_mediable",title:"Eligible for Media",dataIndex:"is_mediable",render:(i,t)=>e(o,{size:"middle",children:e("span",{children:t.is_mediable?"Yes":"No"})})},{key:"is_stockable",title:"Eligible for Stock",dataIndex:"is_mediable",render:(i,t)=>e(o,{size:"middle",children:e("span",{children:t.is_stockable?"Yes":"No"})})},{title:"Action",key:"action",render:(i,t)=>l(o,{size:"middle",children:[e(x,{onClick:k=>f(t.id)}),e(D,{onClick:k=>y(t.id)})]})}];return e(g,{children:l("div",{className:"",children:[e(m,{onClick:()=>n(!0),children:"create new record"}),e(w,{}),e(C,{openModal:u,onOk:()=>n(!1),onCancel:()=>n(!1),title:"Create New Variation",children:l(r,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},onFinish:b,autoComplete:"off",children:[e(r.Item,{label:"Type EN",name:"en",rules:[{required:!0,message:"Please fill type in EN!"}],children:e(p,{})}),e(r.Item,{label:"Type AR",name:"ar",rules:[{required:!0,message:"Please fill type in AR!"}],children:e(p,{})}),e(r.Item,{label:"Eligible for Media ?",name:"is_mediable",rules:[{required:!0,message:"Please fill type in AR!"}],children:l(a,{placeholder:"this type will have image ?",allowClear:!0,children:[e(a.Option,{value:!0,children:"yes"}),e(a.Option,{value:!1,children:"no"})]})}),e(r.Item,{label:"is stockable ?",name:"is_stockable",rules:[{required:!0,message:"Please fill type in AR!"}],children:l(a,{placeholder:"this type will have image ?",allowClear:!0,children:[e(a.Option,{value:!0,children:"yes"}),e(a.Option,{value:!1,children:"no"})]})}),e(r.Item,{wrapperCol:{offset:8,span:16},children:e(m,{type:"default",htmlType:"submit",children:"Submit"})})]})}),e(_,{columns:I,rowKey:"id",dataSource:c})]})})}export{H as default};