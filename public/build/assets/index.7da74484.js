import{r as n,j as e,a as s,d as D}from"./app.177217f1.js";import x from"./dashboard.53c2aaac.js";import{h as y}from"./keys.af31ccc5.js";import{A as S}from"./AntDesignDataTable.c0bdfb56.js";import A from"./ModalWithChildren.ecc180bf.js";import{F as t}from"./index.579094fc.js";import{I as i}from"./index.4944545a.js";import{B as l}from"./button.ff907f0c.js";import"./should-render.639489fa.js";import"./index.0579b088.js";import"./index.8fe29e10.js";import"./Table.2ae680e3.js";import"./AntdIcon.2796668a.js";import"./type.65e2e3a0.js";import"./getScrollBarSize.bded6ceb.js";import"./motion.3f4b0233.js";import"./EyeOutlined.8ccea39f.js";import"./css.ac4913d5.js";import"./index.ecdc47b7.js";import"./styleChecker.b42d703c.js";import"./DownOutlined.dc82a92e.js";import"./useForceUpdate.0e5b397b.js";import"./debounce.9cb2cf79.js";import"./index.74d23877.js";import"./getDataOrAriaProps.c03198e8.js";import"./DialogWrap.01761d01.js";function X({users:m,locale:b}){const[d,p]=n.exports.useState(0),[a,o]=n.exports.useState(!1),c=()=>{o(!a)},u=r=>{p(r),c()},f=r=>{D.Inertia.post(y("admin.stores.store"),r,{preserveState:!1})},h=[{key:"id",title:"ID",dataIndex:"id"},{key:"name",title:"Name",dataIndex:"name"},{key:"created_at",title:"Join Date",dataIndex:"created_at"},{title:"Action",key:"action",render:(r,I)=>e(l,{onClick:g=>u(I.id),children:"Add Store"})}];return e(x,{children:s("div",{className:"container mx-auto py-4",children:[e(A,{openModal:a,onOk:()=>o(!1),onCancel:()=>o(!1),title:"Add New Store",children:s(t,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},onFinish:f,autoComplete:"off",children:[e(t.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Please fill store Name"}],children:e(i,{})}),e(t.Item,{hidden:!0,name:"user_id",initialValue:d,children:e(i,{})}),e(t.Item,{label:"Store Description",name:"description",rules:[{required:!0,message:"Please fill Store Description",type:"string"}],children:e(i,{})}),e(t.Item,{wrapperCol:{offset:8,span:16},children:e(l,{type:"default",htmlType:"submit",children:"Submit"})})]})}),e(S,{columns:h,rowKey:"id",dataSource:m})]})})}export{X as default};