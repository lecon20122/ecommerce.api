import{r as s,j as e,a as n,d as m}from"./app.05d98b2b.js";import x from"./dashboard.92fa2374.js";import d from"./ModalWithChildren.75f46025.js";import{h as u}from"./keys.dc1ba59b.js";import{F as a}from"./index.1703942c.js";import{I as r}from"./index.b080db98.js";import{B as p}from"./button.e3d0d8df.js";import{D as S}from"./index.8458c689.js";import{T as g,S as V}from"./Table.1d5875e5.js";import{E as w}from"./EditOutlined.d8bf75b6.js";import"./should-render.b45b9b3a.js";import"./index.0579b088.js";import"./index.ddf7583b.js";import"./type.78b143b5.js";import"./AntdIcon.e4254bca.js";import"./motion.f08e8e94.js";import"./DialogWrap.fd96f328.js";import"./getScrollBarSize.eeac028d.js";import"./styleChecker.57d5d447.js";import"./EyeOutlined.1a5765e6.js";import"./css.b44396a7.js";import"./index.5fe68930.js";import"./DownOutlined.84767be8.js";import"./useForceUpdate.8702b647.js";import"./debounce.8c5bc93f.js";import"./index.66b67cce.js";import"./getDataOrAriaProps.c03198e8.js";function te({settings:c,locale:F}){const[f,i]=s.exports.useState(!1),[h,o]=s.exports.useState(!1),[t,y]=s.exports.useState(),b=[{key:"id",title:"ID",dataIndex:"id"},{key:"key",title:"Key",dataIndex:"name"},{key:"value",title:"Value",dataIndex:"value"},{title:"Action",key:"action",render:(l,v)=>e(V,{size:"middle",children:e(w,{onClick:M=>k(v)})})}],I=l=>{m.Inertia.post(u("admin.store.settings"),l,{preserveState:!1})},k=l=>{o(!0),y(l)},C=l=>{m.Inertia.post(u("admin.update.settings",{setting:t}),l,{preserveState:!1})};return e(x,{children:n("div",{className:"container mx-auto py-4",children:[e(d,{openModal:f,onOk:()=>i(!1),onCancel:()=>i(!1),children:n(a,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},onFinish:I,children:[e(a.Item,{label:"Key",name:"key",rules:[{required:!0,message:"Please fill the key please"}],children:e(r,{})}),e(a.Item,{label:"Value",name:"value",rules:[{required:!0,message:"Please fill the value please"}],children:e(r,{})}),e(a.Item,{wrapperCol:{offset:8,span:16},children:e(p,{type:"default",htmlType:"submit",children:"Submit"})})]})}),e(d,{openModal:h,onOk:()=>o(!1),onCancel:()=>o(!1),children:n(a,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},onFinish:C,children:[e(a.Item,{label:"Key",initialValue:t==null?void 0:t.name,name:"key",rules:[{required:!0,message:"Please fill the key please"}],children:e(r,{})}),e(a.Item,{label:"Value",name:"value",initialValue:t==null?void 0:t.value,rules:[{required:!0,message:"Please fill the value please"}],children:e(r,{})}),e(a.Item,{wrapperCol:{offset:8,span:16},children:e(p,{type:"default",htmlType:"submit",children:"Submit"})})]})}),e(p,{onClick:()=>i(!0),children:"create new record"}),e(S,{}),e(g,{rowKey:"id",columns:b,dataSource:c})]})})}export{te as default};