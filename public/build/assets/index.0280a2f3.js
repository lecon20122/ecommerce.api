import{r as n,j as e,a as s,d as D}from"./app.1146b5d2.js";import x from"./dashboard.c50d3d83.js";import{h as y}from"./keys.828a16a2.js";import{A as S}from"./AntDesignDataTable.147cc842.js";import A from"./ModalWithChildren.03b21e2f.js";import{F as t}from"./index.70978192.js";import{I as i}from"./index.8a582d0c.js";import{B as l}from"./button.f90eefb4.js";import"./should-render.9600ab49.js";import"./index.0579b088.js";import"./index.3f6b7a6e.js";import"./Table.36f87857.js";import"./AntdIcon.0150f901.js";import"./type.3069e2e2.js";import"./getScrollBarSize.60697b01.js";import"./motion.83bb3503.js";import"./EyeOutlined.e722336a.js";import"./css.46119115.js";import"./index.8798c335.js";import"./styleChecker.3538dada.js";import"./DownOutlined.ef6a8104.js";import"./useForceUpdate.a853db94.js";import"./debounce.20a499fd.js";import"./index.56ff57ae.js";import"./getDataOrAriaProps.c03198e8.js";import"./DialogWrap.880d455a.js";function X({users:m,locale:b}){const[d,p]=n.exports.useState(0),[a,o]=n.exports.useState(!1),c=()=>{o(!a)},u=r=>{p(r),c()},f=r=>{D.Inertia.post(y("admin.stores.store"),r,{preserveState:!1})},h=[{key:"id",title:"ID",dataIndex:"id"},{key:"name",title:"Name",dataIndex:"name"},{key:"created_at",title:"Join Date",dataIndex:"created_at"},{title:"Action",key:"action",render:(r,I)=>e(l,{onClick:g=>u(I.id),children:"Add Store"})}];return e(x,{children:s("div",{className:"container mx-auto py-4",children:[e(A,{openModal:a,onOk:()=>o(!1),onCancel:()=>o(!1),title:"Add New Store",children:s(t,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},onFinish:f,autoComplete:"off",children:[e(t.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Please fill store Name"}],children:e(i,{})}),e(t.Item,{hidden:!0,name:"user_id",initialValue:d,children:e(i,{})}),e(t.Item,{label:"Store Description",name:"description",rules:[{required:!0,message:"Please fill Store Description",type:"string"}],children:e(i,{})}),e(t.Item,{wrapperCol:{offset:8,span:16},children:e(l,{type:"default",htmlType:"submit",children:"Submit"})})]})}),e(S,{columns:h,rowKey:"id",dataSource:m})]})})}export{X as default};