import{R as x,a as i,j as e,d as n}from"./app.2069c097.js";import{N as f,R as t}from"./new-dashboard-layout.285665e2.js";import{A as E}from"./AntDesignDataTable.ad9a702c.js";import R from"./ModalWithChildren.4b914385.js";import{h as d}from"./index.m.4f4de470.js";import{B as o}from"./styleChecker.147b1434.js";import{F as a}from"./index.d6895def.js";import{I as m}from"./index.3b7e7bb3.js";import{S as l}from"./index.d09d7afd.js";import"./PlusOutlined.34816a4d.js";import"./zoom.082579c9.js";import"./Overflow.fc5fcdf5.js";import"./Table.203db89e.js";import"./css.d6e3059f.js";import"./index.976795d5.js";function U({bypasses:p}){const[c,s]=x.useState(!1),h=[{key:"id",title:"ID",dataIndex:"id"},{key:"email",title:"Email",dataIndex:"email"},{key:"role",title:"Role",dataIndex:"role"},{key:"expires_at",title:"Expires At",dataIndex:"expires_at"},{key:"created_at",title:"Created At",dataIndex:"created_at"},{key:"action",title:"Action",dataIndex:"action",render:(r,y)=>e(o,{onClick:()=>I(y.id),children:"Delete"})}],u=r=>{n.Inertia.post(d("admin.bypasses.store"),r,{preserveState:!1})},I=r=>{n.Inertia.delete(d("admin.bypasses.destroy",r),{preserveState:!1})};return i(f,{children:[e(o,{className:"my-3",onClick:()=>s(!0),children:"Create New Bypass"}),i(R,{openModal:c,onCancel:()=>s(!1),onOk:()=>s(!1),children:[e("h1",{className:"text-2xl font-bold",children:"Create New Bypass"}),i(a,{className:"py-8",onFinish:u,children:[e(a.Item,{name:"email",rules:[{required:!0}],children:e(m,{type:"email",placeholder:"Email"})}),e(a.Item,{name:"role",rules:[{required:!0}],children:i(l,{children:[e(l.Option,{value:t.SUPER_ADMIN,children:t.SUPER_ADMIN}),e(l.Option,{value:t.MARKETING,children:t.MARKETING}),e(l.Option,{value:t.CUSTOMER_SERVICE,children:t.CUSTOMER_SERVICE})]})}),e(a.Item,{name:"expires_at",children:e(m,{type:"date",placeholder:"Expires At"})}),e(a.Item,{children:e(o,{htmlType:"submit",children:"Submit"})})]})]}),e(E,{rowKey:"id",columns:h,dataSource:p})]})}export{U as default};