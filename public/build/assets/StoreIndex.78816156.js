import{r as o,a as t,d as n}from"./app.d9e36631.js";import{D as p}from"./dashboard.9a0ccb8f.js";import{h as s}from"./index.m.9084c204.js";import{A as l}from"./AntDesignDataTable.c9fd040e.js";import{S as a}from"./index.a232b060.js";import{E as c}from"./EditOutlined.278f3147.js";import"./ripple.esm.65be5627.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./inheritsLoose.ba053e4e.js";import"./assertThisInitialized.00356ca2.js";import"./Table.f818674d.js";import"./AntdIcon.a7149f61.js";import"./index.b3d31cad.js";import"./type.cb5fd233.js";import"./index.1c40f768.js";import"./index.c6b989ba.js";import"./getScrollBarSize.70b15d9e.js";import"./EyeOutlined.2c3ef7b4.js";import"./_baseIsEqual.b5788dae.js";import"./keys.42f6d3b3.js";import"./button.73a2c325.js";import"./styleChecker.38afa8a5.js";import"./css.6d84b5f4.js";import"./index.a0578d2c.js";import"./toNumber.34e6fb11.js";import"./isSymbol.e6c7b33d.js";import"./index.cff187f8.js";function H({stores:m,locale:u}){o.exports.useState(!1),o.exports.useState(0);const d=e=>{n.Inertia.get(s("admin.stores.edit",{id:e}))};return t(p,{children:t("div",{children:t("div",{className:"container mx-auto py-4",children:t(l,{columns:[{key:"id",title:"ID",dataIndex:"id"},{key:"name",title:"Name",dataIndex:"name"},{key:"description",title:"Description",dataIndex:"description"},{key:"user",title:"Store Owner",dataIndex:"user",render:(e,i)=>{var r;return t(a,{size:"middle",children:t("span",{children:(r=i.user)==null?void 0:r.name})})}},{title:"Action",key:"action",render:(e,i)=>t(a,{size:"middle",children:t(c,{onClick:r=>d(i.id)})})}],rowKey:"id",dataSource:m})})})})}export{H as default};
