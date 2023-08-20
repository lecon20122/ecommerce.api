import{r as n,j as e,a as o,d as p}from"./app.b647441e.js";import{h as m}from"./index.m.4f4de470.js";import A from"./ModalWithChildren.8fa3cffb.js";import{I as N,H as P}from"./Helpers.a154ea2f.js";import{N as T}from"./new-dashboard-layout.bc2a10ae.js";import{A as v}from"./AntDesignDataTable.2a009f42.js";import{S as c}from"./index.8917f7e8.js";import{F as a}from"./index.53870a36.js";import{I as y}from"./index.6b977ccf.js";import{U as F}from"./index.1566cc9b.js";import{B as C}from"./styleChecker.b12d4c02.js";import{D as z}from"./index.9c32d105.js";import{S as l}from"./Table.d9d63e4d.js";import{E}from"./EditOutlined.8b7d8e5a.js";import{S as L}from"./SwapOutlined.d07d31d7.js";import{P as R}from"./PlusOutlined.6f443829.js";import"./zoom.2707d1f0.js";import"./ActionButton.3a4f76ab.js";import"./index.c83e5f9d.js";import"./EyeOutlined.0883b67f.js";import"./index.46d6a240.js";import"./Overflow.f3fc7c28.js";import"./DeleteOutlined.ed145941.js";import"./css.d6e3059f.js";import"./Dropdown.41d786b8.js";function pe({categories:h,locale:U}){const[I,s]=n.exports.useState(!1);n.exports.useState(!1),n.exports.useState(0);const[d,f]=n.exports.useState([]),x=new P,S=t=>{p.Inertia.get(m("admin.categories.edit",t))},b=t=>{p.Inertia.post(m("admin.toggle.category.status",t),void 0,{preserveState:!1})},O=[{key:"id",title:"ID",dataIndex:"id"},{key:"title",title:"Title AR",dataIndex:"title_ar",render:(t,i)=>e(l,{size:"middle",children:e("span",{children:i.title.ar})})},{key:"title",title:"Title EN",dataIndex:"title_en",render:(t,i)=>e(l,{size:"middle",children:e("span",{children:i.title.en})})},{key:"parent",title:"Category Parent",dataIndex:"parent",render:(t,i)=>{var r;return e(l,{size:"middle",children:e("span",{children:(r=i.parent)==null?void 0:r.title.en})})}},{key:"opposite_category",title:"Opposite Category",dataIndex:"parent",render:(t,i)=>{var r;return e(l,{size:"middle",children:e("span",{children:(r=i.opposite_category)==null?void 0:r.title.en})})}},{title:"Action",key:"action",render:(t,i)=>o(l,{size:"middle",children:[e(E,{onClick:r=>S(i.id)}),e(L,{onClick:r=>b(i.id)})]})}],u=h.map(t=>e(c.Option,{value:t.id,children:t.title.en},t.id)),_=(t,i)=>t.is_active?"bg-lime-100":"bg-red-100",g=t=>{p.Inertia.post(m("admin.categories.store"),t,{preserveState:!1})},k=t=>{t.images&&(t.images=x.appendImageToFormData(d)),g(t)},w=t=>{f(t.fileList)},D=t=>{const i=d.indexOf(t),r=d.slice();r.splice(i,1),f(r)};return e(T,{children:o("div",{children:[e(A,{openModal:I,onOk:()=>s(!1),onCancel:()=>s(!1),title:"Create New Variation",children:o(a,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},onFinish:k,autoComplete:"off",children:[e(a.Item,{label:"Type EN",name:"en",rules:[{required:!0,message:"Please fill type in EN!"}],children:e(y,{})}),e(a.Item,{label:"Type AR",name:"ar",rules:[{required:!0,message:"Please fill type in AR!"}],children:e(y,{})}),e(a.Item,{name:"order",label:"Order",children:e(N,{})}),e(a.Item,{label:"Parent Category",name:"parent_id",children:e(c,{placeholder:"Select Category Parent",allowClear:!0,children:u})}),e(a.Item,{label:"Opposite Category",name:"opposite_category_id",children:e(c,{placeholder:"Select Opposite Category",allowClear:!0,children:u})}),e(a.Item,{label:"Category Image",name:"images",valuePropName:"images",children:e(F,{listType:"picture-card",onRemove:D,onChange:t=>w(t),children:o("div",{children:[e(R,{}),e("div",{style:{marginTop:8},children:"Upload"})]})})}),e(a.Item,{wrapperCol:{offset:8,span:16},children:e(C,{type:"default",htmlType:"submit",children:"Submit"})})]})}),e(C,{onClick:()=>s(!0),children:"create new record"}),e(z,{}),e(v,{columns:O,rowKey:"id",dataSource:h,rowClassName:_})]})})}export{pe as default};