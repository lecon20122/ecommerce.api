import{r as n,j as e,a as l,d as x}from"./app.05d98b2b.js";import y from"./dashboard.92fa2374.js";import{h as D}from"./keys.dc1ba59b.js";import{A as S}from"./AntDesignDataTable.97832e88.js";import A from"./ModalWithChildren.75f46025.js";import{F as t}from"./index.1703942c.js";import{I as o}from"./index.b080db98.js";import{B as m}from"./button.e3d0d8df.js";import"./should-render.b45b9b3a.js";import"./index.0579b088.js";import"./index.ddf7583b.js";import"./Table.1d5875e5.js";import"./AntdIcon.e4254bca.js";import"./type.78b143b5.js";import"./getScrollBarSize.eeac028d.js";import"./motion.f08e8e94.js";import"./EyeOutlined.1a5765e6.js";import"./css.b44396a7.js";import"./index.5fe68930.js";import"./styleChecker.57d5d447.js";import"./DownOutlined.84767be8.js";import"./useForceUpdate.8702b647.js";import"./debounce.8c5bc93f.js";import"./index.66b67cce.js";import"./getDataOrAriaProps.c03198e8.js";import"./DialogWrap.fd96f328.js";function X({users:s,locale:b}){const[d,p]=n.exports.useState(0),[a,i]=n.exports.useState(!1),c=()=>{i(!a)},u=r=>{p(r),c()},f=r=>{x.Inertia.post(D("admin.stores.store"),r,{preserveState:!1})},h=[{key:"id",title:"ID",dataIndex:"id"},{key:"name",title:"Name",dataIndex:"name"},{key:"email",title:"Email",dataIndex:"email"},{key:"created_at",title:"Join Date",dataIndex:"created_at"},{title:"Action",key:"action",render:(r,I)=>e(m,{onClick:g=>u(I.id),children:"Add Store"})}];return e(y,{children:l("div",{className:"container mx-auto py-4",children:[e(A,{openModal:a,onOk:()=>i(!1),onCancel:()=>i(!1),title:"Add New Store",children:l(t,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},onFinish:f,autoComplete:"off",children:[e(t.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Please fill store Name"}],children:e(o,{})}),e(t.Item,{hidden:!0,name:"user_id",initialValue:d,children:e(o,{})}),e(t.Item,{label:"Store Description",name:"description",rules:[{required:!0,message:"Please fill Store Description",type:"string"}],children:e(o,{})}),e(t.Item,{wrapperCol:{offset:8,span:16},children:e(m,{type:"default",htmlType:"submit",children:"Submit"})})]})}),e(S,{columns:h,rowKey:"id",dataSource:s})]})})}export{X as default};