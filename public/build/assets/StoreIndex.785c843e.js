import{r as o,a as t,d as n}from"./app.e7c33e76.js";import{D as p}from"./dashboard.560dfd14.js";import{h as s}from"./index.m.9084c204.js";import{A as l}from"./AntDesignDataTable.0c4999ac.js";import{S as a}from"./index.39f2d79d.js";import{E as c}from"./EditOutlined.e0d4cf4b.js";import"./ripple.esm.ceca1111.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./inheritsLoose.ba053e4e.js";import"./assertThisInitialized.00356ca2.js";import"./Table.c1fecb92.js";import"./AntdIcon.f44315ff.js";import"./index.b3d31cad.js";import"./type.ff9e3673.js";import"./index.1c40f768.js";import"./index.2771e883.js";import"./getScrollBarSize.c9f47bda.js";import"./EyeOutlined.860ad8a2.js";import"./_baseIsEqual.55cb28d6.js";import"./keys.f2a57858.js";import"./button.f9c77aac.js";import"./styleChecker.b980e280.js";import"./css.7e3e4082.js";import"./index.f1560985.js";import"./toNumber.78a700a0.js";import"./isSymbol.1aa04aa7.js";import"./index.8989b92d.js";function H({stores:m,locale:u}){o.exports.useState(!1),o.exports.useState(0);const d=e=>{n.Inertia.get(s("admin.stores.edit",{id:e}))};return t(p,{children:t("div",{children:t("div",{className:"container mx-auto py-4",children:t(l,{columns:[{key:"id",title:"ID",dataIndex:"id"},{key:"name",title:"Name",dataIndex:"name"},{key:"description",title:"Description",dataIndex:"description"},{key:"user",title:"Store Owner",dataIndex:"user",render:(e,i)=>{var r;return t(a,{size:"middle",children:t("span",{children:(r=i.user)==null?void 0:r.name})})}},{title:"Action",key:"action",render:(e,i)=>t(a,{size:"middle",children:t(c,{onClick:r=>d(i.id)})})}],rowKey:"id",dataSource:m})})})})}export{H as default};
