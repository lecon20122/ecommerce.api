import{r as n,a as e,j as m,d as D}from"./app.1087c1c9.js";import{D as x}from"./dashboard.2b15d016.js";import{h as y}from"./index.m.9084c204.js";import{A as S}from"./AntDesignDataTable.ea03cf86.js";import A from"./ModalWithChildren.e12d90b3.js";import{F as t}from"./index.418c3a96.js";import{I as i}from"./index.2782d017.js";import{B as s}from"./button.55908dfd.js";import"./objectWithoutPropertiesLoose.85055a0f.js";import"./inheritsLoose.d6f0d462.js";import"./Table.cd8c8359.js";import"./index.2e8c0446.js";import"./index.1c40f768.js";import"./index.b3d31cad.js";import"./getScrollBarSize.bd8aac29.js";import"./EyeOutlined.84f21be7.js";import"./css.ab20a8d3.js";import"./type.729a0815.js";import"./index.60466931.js";import"./motion.4822a711.js";import"./useForceUpdate.765b514b.js";import"./debounce.1b080f9f.js";import"./keys.a0ddf3ec.js";import"./toNumber.0fbbc504.js";import"./isSymbol.46054993.js";import"./index.88b601a2.js";import"./getDataOrAriaProps.08708643.js";import"./DialogWrap.2618ab78.js";import"./styleChecker.a76647a7.js";import"./_baseIsEqual.490c2817.js";function ee({users:l,locale:b}){const[d,p]=n.exports.useState(0),[a,o]=n.exports.useState(!1),c=()=>{o(!a)},u=r=>{p(r),c()},f=r=>{D.Inertia.post(y("admin.stores.store"),r,{preserveState:!1})},h=[{key:"id",title:"ID",dataIndex:"id"},{key:"name",title:"Name",dataIndex:"name"},{key:"created_at",title:"Join Date",dataIndex:"created_at"},{title:"Action",key:"action",render:(r,I)=>e(s,{onClick:g=>u(I.id),children:"Add Store"})}];return e(x,{children:m("div",{className:"container mx-auto py-4",children:[e(A,{openModal:a,onOk:()=>o(!1),onCancel:()=>o(!1),title:"Add New Store",children:m(t,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},onFinish:f,autoComplete:"off",children:[e(t.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Please fill store Name"}],children:e(i,{})}),e(t.Item,{hidden:!0,name:"user_id",initialValue:d,children:e(i,{})}),e(t.Item,{label:"Store Description",name:"description",rules:[{required:!0,message:"Please fill Store Description",type:"string"}],children:e(i,{})}),e(t.Item,{wrapperCol:{offset:8,span:16},children:e(s,{type:"default",htmlType:"submit",children:"Submit"})})]})}),e(S,{columns:h,rowKey:"id",dataSource:l})]})})}export{ee as default};
