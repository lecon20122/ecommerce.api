import{r as o,j as e,a as n,d as p}from"./app.56da471f.js";import u from"./dashboard.bfb68188.js";import{h as s}from"./keys.7bb37b1f.js";import{A as x}from"./AntDesignDataTable.471ec798.js";import{S as d}from"./Table.52533cc4.js";import{B as h}from"./button.4b1e9a05.js";import{E as f}from"./EditOutlined.c3665b35.js";import"./should-render.b9f42ae0.js";import"./index.0579b088.js";import"./index.556052ad.js";import"./AntdIcon.d0aa761c.js";import"./type.6a307fc1.js";import"./index.3524eded.js";import"./EyeOutlined.af4b801b.js";import"./motion.1ccd3e55.js";import"./styleChecker.a540f3b2.js";import"./getScrollBarSize.dcb513b9.js";import"./css.abe27269.js";import"./index.c608d6f9.js";import"./DownOutlined.20cc1de1.js";import"./useForceUpdate.de1e8eb6.js";import"./debounce.7785b830.js";import"./index.c4e8524c.js";import"./getDataOrAriaProps.c03198e8.js";function J({stores:m,locale:v}){o.exports.useState(!1),o.exports.useState(0);const l=i=>{p.Inertia.get(s("admin.stores.edit",{id:i}))},c=i=>{p.Inertia.post(s("admin.stores.approve",i.id),{preserveState:!1})};return e(u,{children:e("div",{children:e("div",{className:"container mx-auto py-4",children:e(x,{columns:[{key:"id",title:"ID",dataIndex:"id"},{key:"name",title:"Name",dataIndex:"name"},{key:"description",title:"Description",dataIndex:"description"},{key:"user",title:"Store Owner",dataIndex:"user",render:(i,t)=>{var r,a;return n(d,{size:"middle",children:[e("span",{children:(r=t.user)==null?void 0:r.name})," | ",e("span",{children:(a=t.user)==null?void 0:a.email})]})}},{title:"Action",key:"action",render:(i,t)=>n(d,{size:"middle",children:[e(f,{onClick:r=>l(t.id)}),"//create approve and reject button",e(h,{onClick:r=>c(t),className:t.approved_at?"text-red-500":"text-green-500",children:t.approved_at?"Disable":"Approve"})]})}],rowKey:"id",dataSource:m})})})})}export{J as default};
