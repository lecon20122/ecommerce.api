import{r as o,a as t,d as n}from"./app.c680bbd5.js";import{D as p}from"./dashboard.0102a691.js";import{h as s}from"./index.m.9084c204.js";import{A as l}from"./AntDesignDataTable.ddbd5a78.js";import{S as a}from"./index.2a22adf9.js";import{E as c}from"./EditOutlined.1499f24a.js";import"./assertThisInitialized.eb69e595.js";import"./inheritsLoose.b9acdf33.js";import"./Table.9528ddc7.js";import"./index.52a35bea.js";import"./index.1c40f768.js";import"./index.b3d31cad.js";import"./index.5a498983.js";import"./motion.7a323949.js";import"./type.49ce19ba.js";import"./useMergedState.c9880330.js";import"./_baseIsEqual.36d51e97.js";import"./keys.2ec45bc5.js";import"./button.743859a0.js";import"./styleChecker.08e649e5.js";import"./getScrollBarSize.5260b009.js";import"./css.5e27d5aa.js";import"./index.789f8c47.js";import"./useForceUpdate.dcd11e97.js";import"./debounce.62cb5ccb.js";import"./isSymbol.8428e410.js";import"./getDataOrAriaProps.08708643.js";function H({stores:m,locale:u}){o.exports.useState(!1),o.exports.useState(0);const d=e=>{n.Inertia.get(s("admin.stores.edit",{id:e}))};return t(p,{children:t("div",{children:t("div",{className:"container mx-auto py-4",children:t(l,{columns:[{key:"id",title:"ID",dataIndex:"id"},{key:"name",title:"Name",dataIndex:"name"},{key:"description",title:"Description",dataIndex:"description"},{key:"user",title:"Store Owner",dataIndex:"user",render:(e,i)=>{var r;return t(a,{size:"middle",children:t("span",{children:(r=i.user)==null?void 0:r.name})})}},{title:"Action",key:"action",render:(e,i)=>t(a,{size:"middle",children:t(c,{onClick:r=>d(i.id)})})}],rowKey:"id",dataSource:m})})})})}export{H as default};
