import{r as o,a as t,d as n}from"./app.73631ba0.js";import{D as p}from"./dashboard.a129dcad.js";import{h as s}from"./index.m.9084c204.js";import{A as l}from"./AntDesignDataTable.7b1aed8f.js";import{S as a}from"./index.882044f0.js";import{E as c}from"./EditOutlined.de161bef.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./inheritsLoose.32b9908a.js";import"./setPrototypeOf.8e97647a.js";import"./Table.b65adbcd.js";import"./AntdIcon.51bca2fb.js";import"./index.b3d31cad.js";import"./type.e74db486.js";import"./index.1c40f768.js";import"./index.d5672ba8.js";import"./motion.b1df7cde.js";import"./useMergedState.45a4d830.js";import"./_baseIsEqual.ac85c38f.js";import"./keys.ae9a84d1.js";import"./button.5cc662cd.js";import"./styleChecker.46fb59ad.js";import"./getScrollBarSize.5d894e41.js";import"./css.b293ba8f.js";import"./index.c22ed558.js";import"./DownOutlined.e82692b0.js";import"./useForceUpdate.316de6c7.js";import"./debounce.74a9700f.js";import"./isSymbol.550387b9.js";import"./index.f711f52f.js";import"./getDataOrAriaProps.08708643.js";function P({stores:m,locale:u}){o.exports.useState(!1),o.exports.useState(0);const d=i=>{n.Inertia.get(s("admin.stores.edit",{id:i}))};return t(p,{children:t("div",{children:t("div",{className:"container mx-auto py-4",children:t(l,{columns:[{key:"id",title:"ID",dataIndex:"id"},{key:"name",title:"Name",dataIndex:"name"},{key:"description",title:"Description",dataIndex:"description"},{key:"user",title:"Store Owner",dataIndex:"user",render:(i,e)=>{var r;return t(a,{size:"middle",children:t("span",{children:(r=e.user)==null?void 0:r.name})})}},{title:"Action",key:"action",render:(i,e)=>t(a,{size:"middle",children:t(c,{onClick:r=>d(e.id)})})}],rowKey:"id",dataSource:m})})})})}export{P as default};
