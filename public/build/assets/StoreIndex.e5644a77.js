import{r as o,a as t,d as n}from"./app.d15f24e9.js";import{D as p}from"./dashboard.2cb11750.js";import{h as s}from"./index.m.9084c204.js";import{A as l}from"./AntDesignDataTable.235e7c30.js";import{S as a}from"./index.2d7b71d7.js";import{E as c}from"./EditOutlined.90335938.js";import"./ripple.esm.d23e058b.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./inheritsLoose.ba053e4e.js";import"./assertThisInitialized.00356ca2.js";import"./Table.84b5f8c9.js";import"./AntdIcon.7da462ca.js";import"./index.b3d31cad.js";import"./type.678c8673.js";import"./index.1c40f768.js";import"./index.092f5063.js";import"./getScrollBarSize.6452656e.js";import"./EyeOutlined.4f7b3208.js";import"./_baseIsEqual.b1054c67.js";import"./keys.229fae5c.js";import"./button.77954bf4.js";import"./styleChecker.31d59d69.js";import"./css.d7c457df.js";import"./index.046ff136.js";import"./toNumber.07d70392.js";import"./isSymbol.bda1a3b5.js";import"./index.8c124278.js";function H({stores:m,locale:u}){o.exports.useState(!1),o.exports.useState(0);const d=e=>{n.Inertia.get(s("admin.stores.edit",{id:e}))};return t(p,{children:t("div",{children:t("div",{className:"container mx-auto py-4",children:t(l,{columns:[{key:"id",title:"ID",dataIndex:"id"},{key:"name",title:"Name",dataIndex:"name"},{key:"description",title:"Description",dataIndex:"description"},{key:"user",title:"Store Owner",dataIndex:"user",render:(e,i)=>{var r;return t(a,{size:"middle",children:t("span",{children:(r=i.user)==null?void 0:r.name})})}},{title:"Action",key:"action",render:(e,i)=>t(a,{size:"middle",children:t(c,{onClick:r=>d(i.id)})})}],rowKey:"id",dataSource:m})})})})}export{H as default};
