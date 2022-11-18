import{r as v,j as e,a as l,d as s}from"./app.8ebb39ab.js";import C from"./dashboard.d98f6f19.js";import _ from"./ModalWithChildren.03ad3f01.js";import{h as d}from"./keys.d090d6c3.js";import{A as g}from"./AntDesignDataTable.35316da3.js";import{B as m}from"./button.a5c89774.js";import{D as x}from"./index.2e6fa1cd.js";import{F as r}from"./index.d5db5b26.js";import{I as p}from"./index.1b7312b9.js";import{S as a}from"./index.cbddd151.js";import{S as o}from"./Table.4f6af7c7.js";import{E as w}from"./EditOutlined.843cf50a.js";import{D}from"./DeleteOutlined.cf311ea1.js";import"./should-render.0b6f733e.js";import"./index.0579b088.js";import"./index.d233ecab.js";import"./type.e0301de5.js";import"./AntdIcon.36ef1e71.js";import"./motion.bda44f0c.js";import"./DialogWrap.6635e94e.js";import"./getScrollBarSize.cc747176.js";import"./styleChecker.eaa03d50.js";import"./EyeOutlined.2b9a9c38.js";import"./DownOutlined.b475dfbc.js";import"./css.f394ae2c.js";import"./useForceUpdate.44bc8b43.js";import"./debounce.aebf8733.js";import"./index.67c1fab8.js";import"./getDataOrAriaProps.c03198e8.js";function te({variationTypes:c,locale:u}){const[h,n]=v.exports.useState(!1),f=i=>{s.Inertia.get(d("admin.variations.type.edit",i))},y=i=>{s.Inertia.post(d("admin.variations.type.destroy",i))},b=i=>{s.Inertia.post(d("admin.variations.type.store"),i,{preserveState:!1})},I=[{key:"id",title:"ID",dataIndex:"id"},{key:"type",title:"Type",dataIndex:"type",render:(i,t)=>e(o,{size:"middle",children:e("span",{children:t.type[u]})})},{key:"is_mediable",title:"Eligible for Media",dataIndex:"is_mediable",render:(i,t)=>e(o,{size:"middle",children:e("span",{children:t.is_mediable?"Yes":"No"})})},{key:"is_stockable",title:"Eligible for Stock",dataIndex:"is_mediable",render:(i,t)=>e(o,{size:"middle",children:e("span",{children:t.is_stockable?"Yes":"No"})})},{title:"Action",key:"action",render:(i,t)=>l(o,{size:"middle",children:[e(w,{onClick:k=>f(t.id)}),e(D,{onClick:k=>y(t.id)})]})}];return e(C,{children:l("div",{className:"container mx-auto py-4",children:[e(m,{onClick:()=>n(!0),children:"create new record"}),e(x,{}),e(_,{openModal:h,onOk:()=>n(!1),onCancel:()=>n(!1),title:"Create New Variation",children:l(r,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},onFinish:b,autoComplete:"off",children:[e(r.Item,{label:"Type EN",name:"en",rules:[{required:!0,message:"Please fill type in EN!"}],children:e(p,{})}),e(r.Item,{label:"Type AR",name:"ar",rules:[{required:!0,message:"Please fill type in AR!"}],children:e(p,{})}),e(r.Item,{label:"Eligible for Media ?",name:"is_mediable",rules:[{required:!0,message:"Please fill type in AR!"}],children:l(a,{placeholder:"this type will have image ?",allowClear:!0,children:[e(a.Option,{value:!0,children:"yes"}),e(a.Option,{value:!1,children:"no"})]})}),e(r.Item,{label:"is stockable ?",name:"is_stockable",rules:[{required:!0,message:"Please fill type in AR!"}],children:l(a,{placeholder:"this type will have image ?",allowClear:!0,children:[e(a.Option,{value:!0,children:"yes"}),e(a.Option,{value:!1,children:"no"})]})}),e(r.Item,{wrapperCol:{offset:8,span:16},children:e(m,{type:"default",htmlType:"submit",children:"Submit"})})]})}),e(g,{columns:I,rowKey:"id",dataSource:c})]})})}export{te as default};