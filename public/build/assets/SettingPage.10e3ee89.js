import{r as n,j as e,a as o,d}from"./app.2069c097.js";import m from"./ModalWithChildren.4b914385.js";import{h as u}from"./index.m.4f4de470.js";import{N as x}from"./new-dashboard-layout.285665e2.js";import{A as S}from"./AntDesignDataTable.ad9a702c.js";import{F as a}from"./index.d6895def.js";import{I as r}from"./index.3b7e7bb3.js";import{B as p}from"./styleChecker.147b1434.js";import{D as g}from"./index.e1f10410.js";import{S as w}from"./Table.203db89e.js";import{E as V}from"./EditOutlined.7b8300aa.js";import"./zoom.082579c9.js";import"./index.976795d5.js";import"./PlusOutlined.34816a4d.js";import"./Overflow.fc5fcdf5.js";import"./css.d6e3059f.js";import"./index.d09d7afd.js";function H({settings:c,locale:D}){const[f,s]=n.exports.useState(!1),[h,i]=n.exports.useState(!1),[t,y]=n.exports.useState(),b=[{key:"id",title:"ID",dataIndex:"id"},{key:"key",title:"Key",dataIndex:"name"},{key:"value",title:"Value",dataIndex:"value"},{title:"Action",key:"action",render:(l,v)=>e(w,{size:"middle",children:e(V,{onClick:F=>k(v)})})}],I=l=>{d.Inertia.post(u("admin.store.settings"),l,{preserveState:!1})},k=l=>{i(!0),y(l)},C=l=>{d.Inertia.post(u("admin.update.settings",{setting:t}),l,{preserveState:!1})};return e(x,{children:o("div",{className:"",children:[e(m,{openModal:f,onOk:()=>s(!1),onCancel:()=>s(!1),children:o(a,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},onFinish:I,children:[e(a.Item,{label:"Key",name:"key",rules:[{required:!0,message:"Please fill the key please"}],children:e(r,{})}),e(a.Item,{label:"Value",name:"value",rules:[{required:!0,message:"Please fill the value please"}],children:e(r,{})}),e(a.Item,{wrapperCol:{offset:8,span:16},children:e(p,{type:"default",htmlType:"submit",children:"Submit"})})]})}),e(m,{openModal:h,onOk:()=>i(!1),onCancel:()=>i(!1),children:o(a,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},onFinish:C,children:[e(a.Item,{label:"Key",initialValue:t==null?void 0:t.name,name:"key",rules:[{required:!0,message:"Please fill the key please"}],children:e(r,{})}),e(a.Item,{label:"Value",name:"value",initialValue:t==null?void 0:t.value,rules:[{required:!0,message:"Please fill the value please"}],children:e(r,{})}),e(a.Item,{wrapperCol:{offset:8,span:16},children:e(p,{type:"default",htmlType:"submit",children:"Submit"})})]})}),e(p,{onClick:()=>s(!0),children:"create new record"}),e(g,{}),e(S,{rowKey:"id",columns:b,dataSource:c})]})})}export{H as default};