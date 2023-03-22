import{j as e,a as l,d as p,r as c}from"./app.ceb08db3.js";import g from"./dashboard.93eb6c16.js";import{h as b}from"./index.m.4f4de470.js";import A from"./ModalWithChildren.82be0d2f.js";import{A as w}from"./AntDesignDataTable.73ee24c5.js";import{F as t}from"./index.dc164153.js";import{I as m}from"./index.76d28249.js";import{S as n}from"./index.f9eeef77.js";import{B as f}from"./getScrollBarSize.04a7ec97.js";import{D as _}from"./index.15448144.js";import{S as u}from"./Table.7cec71c7.js";import{D as k}from"./DeleteOutlined.2747cab0.js";import{E as O}from"./EditOutlined.ef91b9f6.js";import"./index.0579b088.js";import"./keys.4d2345e5.js";import"./DialogWrap.a78243da.js";import"./css.bcd79c42.js";function D({productAttribute:a,setOpenModal:s,openModal:o}){return e(A,{openModal:o,onOk:()=>s(!1),onCancel:()=>s(!1),title:"Update Product Attribute",children:l(t,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},onFinish:d=>{p.Inertia.post(b("admin.update.attribute",{attribute:a}),d,{preserveState:!1})},autoComplete:"off",children:[e(t.Item,{label:"Product Attribute EN",name:"en",initialValue:a.attribute.en,rules:[{required:!0,message:"Please fill Product Attribute in English!"}],children:e(m,{})}),e(t.Item,{label:"Product Attribute AR",initialValue:a.attribute.ar,name:"ar",rules:[{required:!0,message:"Please fill Product Attribute in Arabic!"}],children:e(m,{})}),e(t.Item,{label:"filterable ?",initialValue:a.is_filterable,name:"is_filterable",rules:[{required:!0,message:"Please fill type in AR!"}],children:l(n,{placeholder:"this type will have image ?",allowClear:!0,children:[e(n.Option,{value:!0,children:"yes"}),e(n.Option,{value:!1,children:"no"})]})}),e(t.Item,{wrapperCol:{offset:8,span:16},children:e(f,{type:"default",htmlType:"submit",children:"Submit"})})]})})}function H({productAttributes:a}){const[s,o]=c.exports.useState(!1),[h,d]=c.exports.useState(!1),[I,P]=c.exports.useState({attribute:{en:"",ar:""},id:1,is_filterable:!0}),y=async r=>{d(!0),P(r)},C=r=>{p.Inertia.post(b("admin.delete.attribute",{attribute:r}),void 0,{preserveState:!1})},S=r=>{p.Inertia.post(b("admin.add.attribute"),r,{preserveState:!1})},v=[{key:"id",title:"ID",dataIndex:"id"},{key:"attribute",title:"Attribute Name EN",dataIndex:"attribute",render:(r,i)=>e(u,{size:"middle",children:e("span",{children:i.attribute.en})})},{key:"attribute",title:"Attribute Name AR",dataIndex:"attribute",render:(r,i)=>e(u,{size:"middle",children:e("span",{children:i.attribute.ar})})},{key:"is_filterable",title:"Is Filterable",dataIndex:"is_filterable",render:(r,i)=>e(u,{size:"middle",children:e("span",{children:i.is_filterable?"Yes":"No"})})},{title:"Action",key:"action",render:(r,i)=>l(u,{size:"middle",children:[e(O,{onClick:x=>y(i)}),e(k,{onClick:x=>C(i)})]})}];return e(g,{children:l("div",{className:"container mx-auto py-4",children:[e(f,{onClick:()=>o(!0),children:"create new record"}),e(_,{}),e(A,{openModal:s,onOk:()=>o(!1),onCancel:()=>o(!1),title:"Create New Product Attribute",children:l(t,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},onFinish:S,autoComplete:"off",children:[e(t.Item,{label:"Product Attribute EN",name:"en",rules:[{required:!0,message:"Please fill Product Attribute in English!"}],children:e(m,{})}),e(t.Item,{label:"Product Attribute AR",name:"ar",rules:[{required:!0,message:"Please fill Product Attribute in Arabic!"}],children:e(m,{})}),e(t.Item,{label:"filterable ?",name:"is_filterable",rules:[{required:!0,message:"Please fill type in AR!"}],children:l(n,{placeholder:"this type will have image ?",allowClear:!0,children:[e(n.Option,{value:!0,children:"yes"}),e(n.Option,{value:!1,children:"no"})]})}),e(t.Item,{wrapperCol:{offset:8,span:16},children:e(f,{type:"default",htmlType:"submit",children:"Submit"})})]})}),e(D,{productAttribute:I,setOpenModal:d,openModal:h}),e(w,{columns:v,rowKey:"id",dataSource:a})]})})}export{H as default};