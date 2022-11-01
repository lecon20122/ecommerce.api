import{a as e,j as l,d as c,r as p}from"./app.03c223bf.js";import{D as v}from"./dashboard.8eecc9b1.js";import{h as b}from"./index.m.9084c204.js";import A from"./ModalWithChildren.31fc9cd1.js";import{A as w}from"./AntDesignDataTable.6ac38263.js";import{F as t}from"./index.c50ca99d.js";import{I as m}from"./index.f3c357f2.js";import{S as n}from"./index.bd04f572.js";import{B as f}from"./button.adc1e653.js";import{D as _}from"./index.b8036cf1.js";import{S as u}from"./index.c1544749.js";import{D as k}from"./DeleteOutlined.10febb8d.js";import{E as D}from"./EditOutlined.e3ba9c41.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./inheritsLoose.32b9908a.js";import"./setPrototypeOf.8e97647a.js";import"./type.5a43753e.js";import"./AntdIcon.4ebc1fb3.js";import"./index.b3d31cad.js";import"./index.1c40f768.js";import"./motion.92dbd961.js";import"./DialogWrap.732c55e1.js";import"./getScrollBarSize.e8dabb86.js";import"./styleChecker.d19994e5.js";import"./Table.07cfdb54.js";import"./useMergedState.ca0e7418.js";import"./css.98659a8a.js";import"./useForceUpdate.fde4aee8.js";import"./debounce.74b3b2d7.js";import"./keys.6814980d.js";import"./isSymbol.0e4e24ae.js";import"./index.b5ce5ca4.js";import"./getDataOrAriaProps.08708643.js";import"./DownOutlined.6107b81d.js";import"./_baseIsEqual.4b001eea.js";function O({productAttribute:a,setOpenModal:s,openModal:o}){return e(A,{openModal:o,onOk:()=>s(!1),onCancel:()=>s(!1),title:"Update Product Attribute",children:l(t,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},onFinish:d=>{c.Inertia.post(b("admin.update.attribute",{attribute:a}),d,{preserveState:!1})},autoComplete:"off",children:[e(t.Item,{label:"Product Attribute EN",name:"en",initialValue:a.attribute.en,rules:[{required:!0,message:"Please fill Product Attribute in English!"}],children:e(m,{})}),e(t.Item,{label:"Product Attribute AR",initialValue:a.attribute.ar,name:"ar",rules:[{required:!0,message:"Please fill Product Attribute in Arabic!"}],children:e(m,{})}),e(t.Item,{label:"filterable ?",initialValue:a.is_filterable,name:"is_filterable",rules:[{required:!0,message:"Please fill type in AR!"}],children:l(n,{placeholder:"this type will have image ?",allowClear:!0,children:[e(n.Option,{value:!0,children:"yes"}),e(n.Option,{value:!1,children:"no"})]})}),e(t.Item,{wrapperCol:{offset:8,span:16},children:e(f,{type:"default",htmlType:"submit",children:"Submit"})})]})})}function pe({productAttributes:a}){const[s,o]=p.exports.useState(!1),[h,d]=p.exports.useState(!1),[y,I]=p.exports.useState({attribute:{en:"",ar:""},id:1,is_filterable:!0}),P=async r=>{d(!0),I(r)},C=r=>{c.Inertia.post(b("admin.variations.type.destroy",r))},x=r=>{c.Inertia.post(b("admin.add.attribute"),r,{preserveState:!1})},S=[{key:"id",title:"ID",dataIndex:"id"},{key:"attribute",title:"Attribute Name EN",dataIndex:"attribute",render:(r,i)=>e(u,{size:"middle",children:e("span",{children:i.attribute.en})})},{key:"attribute",title:"Attribute Name AR",dataIndex:"attribute",render:(r,i)=>e(u,{size:"middle",children:e("span",{children:i.attribute.ar})})},{key:"is_filterable",title:"Is Filterable",dataIndex:"is_filterable",render:(r,i)=>e(u,{size:"middle",children:e("span",{children:i.is_filterable?"Yes":"No"})})},{title:"Action",key:"action",render:(r,i)=>l(u,{size:"middle",children:[e(D,{onClick:g=>P(i)}),e(k,{onClick:g=>C(i.id)})]})}];return e(v,{children:l("div",{className:"container mx-auto py-4",children:[e(f,{onClick:()=>o(!0),children:"create new record"}),e(_,{}),e(A,{openModal:s,onOk:()=>o(!1),onCancel:()=>o(!1),title:"Create New Product Attribute",children:l(t,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},onFinish:x,autoComplete:"off",children:[e(t.Item,{label:"Product Attribute EN",name:"en",rules:[{required:!0,message:"Please fill Product Attribute in English!"}],children:e(m,{})}),e(t.Item,{label:"Product Attribute AR",name:"ar",rules:[{required:!0,message:"Please fill Product Attribute in Arabic!"}],children:e(m,{})}),e(t.Item,{label:"filterable ?",name:"is_filterable",rules:[{required:!0,message:"Please fill type in AR!"}],children:l(n,{placeholder:"this type will have image ?",allowClear:!0,children:[e(n.Option,{value:!0,children:"yes"}),e(n.Option,{value:!1,children:"no"})]})}),e(t.Item,{wrapperCol:{offset:8,span:16},children:e(f,{type:"default",htmlType:"submit",children:"Submit"})})]})}),e(O,{productAttribute:y,setOpenModal:d,openModal:h}),e(w,{columns:S,rowKey:"id",dataSource:a})]})})}export{pe as default};
