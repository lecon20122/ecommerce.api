import{r as n,a as l,j as e,d as D}from"./app.b647441e.js";import{h as x}from"./index.m.4f4de470.js";import{A as y}from"./AntDesignDataTable.2a009f42.js";import S from"./ModalWithChildren.8fa3cffb.js";import{N as A}from"./new-dashboard-layout.bc2a10ae.js";import{F as t}from"./index.53870a36.js";import{I as i}from"./index.6b977ccf.js";import{B as s}from"./styleChecker.b12d4c02.js";import"./Table.d9d63e4d.js";import"./zoom.2707d1f0.js";import"./index.46d6a240.js";import"./css.d6e3059f.js";import"./index.8917f7e8.js";import"./Overflow.f3fc7c28.js";import"./EyeOutlined.0883b67f.js";import"./Dropdown.41d786b8.js";import"./ActionButton.3a4f76ab.js";import"./index.c83e5f9d.js";function U({users:d,locale:b}){const[m,p]=n.exports.useState(0),[o,r]=n.exports.useState(!1),c=()=>{r(!o)},u=a=>{p(a),c()},f=a=>{D.Inertia.post(x("admin.stores.store"),a,{preserveState:!1})},h=[{key:"id",title:"ID",dataIndex:"id"},{key:"name",title:"Name",dataIndex:"name"},{key:"email",title:"Email",dataIndex:"email"},{key:"created_at",title:"Join Date",dataIndex:"created_at"},{title:"Action",key:"action",render:(a,I)=>e(s,{onClick:g=>u(I.id),children:"Add Store"})}];return l(A,{children:[e(S,{openModal:o,onOk:()=>r(!1),onCancel:()=>r(!1),title:"Add New Store",children:l(t,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},onFinish:f,autoComplete:"off",children:[e(t.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Please fill store Name"}],children:e(i,{})}),e(t.Item,{hidden:!0,name:"user_id",initialValue:m,children:e(i,{})}),e(t.Item,{label:"Store Description",name:"description",rules:[{required:!0,message:"Please fill Store Description",type:"string"}],children:e(i,{})}),e(t.Item,{wrapperCol:{offset:8,span:16},children:e(s,{type:"default",htmlType:"submit",children:"Submit"})})]})}),e(y,{columns:h,rowKey:"id",dataSource:d})]})}export{U as default};