import{r as o,a as e,j as n,d as h}from"./app.57ea96d4.js";import{D as w}from"./dashboard.459fa67f.js";import{h as f}from"./index.m.9084c204.js";import{A as _}from"./AntDesignDataTable.a515bfff.js";import v from"./ModalWithChildren.adca8442.js";import{P as F,H as N}from"./Helpers.8d8197a1.js";import{S as u}from"./index.aa1569a8.js";import{F as a}from"./index.43bc0213.js";import{I as g}from"./index.b7069e3a.js";import{U as E}from"./index.d160e24d.js";import{B as C}from"./button.83da31d2.js";import{D as L}from"./index.509317f3.js";import{S as l}from"./index.3f86cb2c.js";import{E as z}from"./EditOutlined.4d2d9507.js";import{D as R}from"./DeleteOutlined.ee06a15d.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./inheritsLoose.ba053e4e.js";import"./assertThisInitialized.00356ca2.js";import"./Table.0da3377a.js";import"./AntdIcon.9099cb53.js";import"./index.b3d31cad.js";import"./type.fc078fa7.js";import"./index.1c40f768.js";import"./getScrollBarSize.a52b5d22.js";import"./EyeOutlined.a26274fe.js";import"./css.9d8f816b.js";import"./debounce.38c4478c.js";import"./keys.6aad20e7.js";import"./toNumber.ae941d6e.js";import"./isSymbol.09529388.js";import"./index.0c422a1b.js";import"./DialogWrap.28d1e162.js";import"./styleChecker.82952e8e.js";import"./_baseIsEqual.c8023920.js";function xe({categories:m,locale:U}){const[y,s]=o.exports.useState(!1),[j,I]=o.exports.useState(!1),[H,D]=o.exports.useState(0),[d,p]=o.exports.useState([]),x=new N,S=t=>{h.Inertia.get(f("admin.categories.edit",t))},k=t=>{D(t),I(!0)},b=[{key:"id",title:"ID",dataIndex:"id"},{key:"title",title:"Title AR",dataIndex:"title_ar",render:(t,i)=>e(l,{size:"middle",children:e("span",{children:i.title.ar})})},{key:"title",title:"Title EN",dataIndex:"title_en",render:(t,i)=>e(l,{size:"middle",children:e("span",{children:i.title.en})})},{key:"parent",title:"Category Parent",dataIndex:"parent",render:(t,i)=>{var r;return e(l,{size:"middle",children:e("span",{children:(r=i.parent)==null?void 0:r.title.en})})}},{title:"Action",key:"action",render:(t,i)=>n(l,{size:"middle",children:[e(z,{onClick:r=>S(i.id)}),e(R,{onClick:r=>k(i.id)})]})}],O=m.map(t=>e(u.Option,{value:t.id,children:t.title.en},t.id)),c=t=>{h.Inertia.post(f("admin.categories.store"),t,{preserveState:!1})},A=t=>{t.images&&(t.images=x.appendImageToFormData(d)),c(t)},P=t=>{p(t.fileList)},T=t=>{const i=d.indexOf(t),r=d.slice();r.splice(i,1),p(r)};return e(w,{children:n("div",{children:[e(v,{openModal:y,onOk:()=>s(!1),onCancel:()=>s(!1),title:"Create New Variation",children:n(a,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},onFinish:A,autoComplete:"off",children:[e(a.Item,{label:"Type EN",name:"en",rules:[{required:!0,message:"Please fill type in EN!"}],children:e(g,{})}),e(a.Item,{label:"Type AR",name:"ar",rules:[{required:!0,message:"Please fill type in AR!"}],children:e(g,{})}),e(a.Item,{label:"Parent Category",name:"parent_id",children:e(u,{placeholder:"Select Category Parent",allowClear:!0,children:O})}),e(a.Item,{label:"Category Image",name:"images",valuePropName:"images",children:e(E,{listType:"picture-card",onRemove:T,onChange:t=>P(t),children:n("div",{children:[e(F,{}),e("div",{style:{marginTop:8},children:"Upload"})]})})}),e(a.Item,{wrapperCol:{offset:8,span:16},children:e(C,{type:"default",htmlType:"submit",children:"Submit"})})]})}),n("div",{className:"container mx-auto py-4",children:[e(C,{onClick:()=>s(!0),children:"create new record"}),e(L,{}),e(_,{columns:b,rowKey:"id",dataSource:m})]})]})})}export{xe as default};