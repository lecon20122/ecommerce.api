import{j as e,a as l,d as p,r as c}from"./app.2069c097.js";import{h as b}from"./index.m.4f4de470.js";import A from"./ModalWithChildren.4b914385.js";import{A as g}from"./AntDesignDataTable.ad9a702c.js";import{F as t}from"./index.d6895def.js";import{I as m}from"./index.3b7e7bb3.js";import{S as n}from"./index.d09d7afd.js";import{B as f}from"./styleChecker.147b1434.js";import{N as x}from"./new-dashboard-layout.285665e2.js";import{D as _}from"./index.e1f10410.js";import{S as u}from"./Table.203db89e.js";import{D as k}from"./DeleteOutlined.708b6706.js";import{E as N}from"./EditOutlined.7b8300aa.js";import"./zoom.082579c9.js";import"./index.976795d5.js";import"./PlusOutlined.34816a4d.js";import"./Overflow.fc5fcdf5.js";import"./css.d6e3059f.js";function O({productAttribute:a,setOpenModal:o,openModal:s}){return e(A,{openModal:s,onOk:()=>o(!1),onCancel:()=>o(!1),title:"Update Product Attribute",children:l(t,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},onFinish:d=>{p.Inertia.post(b("admin.update.attribute",{attribute:a}),d,{preserveState:!1})},autoComplete:"off",children:[e(t.Item,{label:"Product Attribute EN",name:"en",initialValue:a.attribute.en,rules:[{required:!0,message:"Please fill Product Attribute in English!"}],children:e(m,{})}),e(t.Item,{label:"Product Attribute AR",initialValue:a.attribute.ar,name:"ar",rules:[{required:!0,message:"Please fill Product Attribute in Arabic!"}],children:e(m,{})}),e(t.Item,{label:"filterable ?",initialValue:a.is_filterable,name:"is_filterable",rules:[{required:!0,message:"Please fill type in AR!"}],children:l(n,{placeholder:"this type will have image ?",allowClear:!0,children:[e(n.Option,{value:!0,children:"yes"}),e(n.Option,{value:!1,children:"no"})]})}),e(t.Item,{wrapperCol:{offset:8,span:16},children:e(f,{type:"default",htmlType:"submit",children:"Submit"})})]})})}function J({productAttributes:a}){const[o,s]=c.exports.useState(!1),[h,d]=c.exports.useState(!1),[I,P]=c.exports.useState({attribute:{en:"",ar:""},id:1,is_filterable:!0}),C=async r=>{d(!0),P(r)},y=r=>{p.Inertia.post(b("admin.delete.attribute",{attribute:r}),void 0,{preserveState:!1})},S=r=>{p.Inertia.post(b("admin.add.attribute"),r,{preserveState:!1})},v=[{key:"id",title:"ID",dataIndex:"id"},{key:"attribute",title:"Attribute Name EN",dataIndex:"attribute",render:(r,i)=>e(u,{size:"middle",children:e("span",{children:i.attribute.en})})},{key:"attribute",title:"Attribute Name AR",dataIndex:"attribute",render:(r,i)=>e(u,{size:"middle",children:e("span",{children:i.attribute.ar})})},{key:"is_filterable",title:"Is Filterable",dataIndex:"is_filterable",render:(r,i)=>e(u,{size:"middle",children:e("span",{children:i.is_filterable?"Yes":"No"})})},{title:"Action",key:"action",render:(r,i)=>l(u,{size:"middle",children:[e(N,{onClick:w=>C(i)}),e(k,{onClick:w=>y(i)})]})}];return e(x,{children:l("div",{className:"",children:[e(f,{onClick:()=>s(!0),children:"create new record"}),e(_,{}),e(A,{openModal:o,onOk:()=>s(!1),onCancel:()=>s(!1),title:"Create New Product Attribute",children:l(t,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},onFinish:S,autoComplete:"off",children:[e(t.Item,{label:"Product Attribute EN",name:"en",rules:[{required:!0,message:"Please fill Product Attribute in English!"}],children:e(m,{})}),e(t.Item,{label:"Product Attribute AR",name:"ar",rules:[{required:!0,message:"Please fill Product Attribute in Arabic!"}],children:e(m,{})}),e(t.Item,{label:"filterable ?",name:"is_filterable",rules:[{required:!0,message:"Please fill type in AR!"}],children:l(n,{placeholder:"this type will have image ?",allowClear:!0,children:[e(n.Option,{value:!0,children:"yes"}),e(n.Option,{value:!1,children:"no"})]})}),e(t.Item,{wrapperCol:{offset:8,span:16},children:e(f,{type:"default",htmlType:"submit",children:"Submit"})})]})}),e(O,{productAttribute:I,setOpenModal:d,openModal:h}),e(g,{columns:v,rowKey:"id",dataSource:a})]})})}export{J as default};