import{j as e,a as c,F as x,d as s,r as T}from"./app.ceb08db3.js";import g from"./dashboard.93eb6c16.js";import{h as o}from"./index.m.4f4de470.js";import{T as A}from"./ToggleDeleteRestoreButton.5b2c4061.js";import{A as k}from"./AntDesignDataTable.73ee24c5.js";import{S as n}from"./Table.7cec71c7.js";import{B as u}from"./getScrollBarSize.04a7ec97.js";import C from"./ProductCreate.6bff068b.js";import{F as l}from"./index.dc164153.js";import{I as D}from"./index.76d28249.js";import{D as b}from"./index.15448144.js";import"./index.0579b088.js";import"./keys.4d2345e5.js";import"./css.bcd79c42.js";import"./index.f9eeef77.js";import"./ModalWithChildren.82be0d2f.js";import"./DialogWrap.a78243da.js";import"./Helpers.93d021d6.js";import"./index.5a46435f.js";import"./DeleteOutlined.2747cab0.js";function v({products:r,locale:h,variationTypesValues:f,variationTypes:y}){const a=t=>{s.Inertia.get(o("admin.products.edit",t.id))},d=t=>{s.Inertia.post(o("admin.products.destroy",t.id),void 0,{preserveState:!1})},m=t=>{s.Inertia.post(o("admin.products.restore",t.id),void 0,{preserveState:!1})},p=t=>c(x,{children:[e(A,{handleOnClickRestore:m,handleOnClickDelete:d,params:t}),e(u,{className:"mr-2",type:"default",onClick:()=>a(t),children:"UPDATE"})]});return e("main",{className:"bg-white shadow-md rounded",children:e(k,{columns:[{key:"id",title:"ID",dataIndex:"id"},{key:"title",title:"Title EN",dataIndex:"title",render:(t,i)=>e(n,{size:"middle",children:e("span",{children:i.title.en})})},{key:"title",title:"Title AR",dataIndex:"title",responsive:["md"],render:(t,i)=>e(n,{size:"middle",children:e("span",{children:i.title.ar})})},{key:"price",title:"Price",dataIndex:"price",render:(t,i)=>e(n,{size:"middle",children:e("span",{children:i.price})})},{key:"deleted_at",title:"Deleted At",dataIndex:"deleted_at",render:(t,i)=>e(n,{size:"middle",children:e("span",{children:i.deleted_at})})},{title:"Action",key:"action",render:(t,i)=>p(i)}],rowKey:"id",dataSource:r})})}function J({currentStore:r,locale:h,variationTypesValues:f,variationTypes:y}){const[a,d]=T.exports.useState(!1),m=I=>{s.Inertia.post(o("admin.stores.update",r),I)},p=()=>{d(!a)};return e(g,{children:c("div",{className:"m-2",children:[c(l,{className:"container mx-auto",scrollToFirstError:!0,name:"basic",labelCol:{span:2},wrapperCol:{span:6},onFinish:m,size:"large",children:[e(l.Item,{label:"Name",initialValue:r.name,name:"name",rules:[{required:!0,message:"Please fill type in AR!"}],children:e(D,{})}),e(l.Item,{initialValue:r.description,label:"Description",name:"description",rules:[{required:!0,message:"Please fill type in AR!"}],children:e(D,{})}),e(l.Item,{wrapperCol:{offset:2,span:1},children:e(u,{type:"default",htmlType:"submit",children:"Submit"})})]}),e(u,{onClick:()=>d(!0),children:"CREATE NEW PRODUCT"}),e("h1",{className:"text-center text-2xl ",children:"Products"}),e(b,{}),e(v,{products:r.products,locale:h,variationTypes:y,variationTypesValues:f}),e(C,{handleAddDialog:p,openAddDialog:a,store_id:r.id})]})})}export{J as default};
