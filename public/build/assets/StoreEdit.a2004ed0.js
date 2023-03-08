import{j as e,a as c,F as x,d as s,r as T}from"./app.a2833a7e.js";import g from"./dashboard.8e9247ba.js";import{h as o}from"./keys.854197f4.js";import{T as A}from"./ToggleDeleteRestoreButton.20ff0c9f.js";import{A as k}from"./AntDesignDataTable.21acb3f2.js";import{S as n}from"./Table.bf9c410b.js";import{B as u}from"./styleChecker.ccce6752.js";import C from"./ProductCreate.8c7a29a5.js";import{F as l}from"./index.344dbd91.js";import{I as D}from"./index.0b76f977.js";import{D as b}from"./index.6957c6c8.js";import"./index.0579b088.js";import"./getScrollBarSize.fc7e30fe.js";import"./css.6f61e22c.js";import"./index.2660bf13.js";import"./useForceUpdate.5407dd5c.js";import"./ModalWithChildren.522ebe0d.js";import"./DialogWrap.96d271a4.js";import"./Helpers.2b405b0f.js";import"./index.bd91d0ef.js";import"./DeleteOutlined.c2fd6cf8.js";function v({products:r,locale:h,variationTypesValues:f,variationTypes:y}){const a=t=>{s.Inertia.get(o("admin.products.edit",t.id))},d=t=>{s.Inertia.post(o("admin.products.destroy",t.id),void 0,{preserveState:!1})},m=t=>{s.Inertia.post(o("admin.products.restore",t.id),void 0,{preserveState:!1})},p=t=>c(x,{children:[e(A,{handleOnClickRestore:m,handleOnClickDelete:d,params:t}),e(u,{className:"mr-2",type:"default",onClick:()=>a(t),children:"UPDATE"})]});return e("main",{className:"bg-white shadow-md rounded",children:e(k,{columns:[{key:"id",title:"ID",dataIndex:"id"},{key:"title",title:"Title EN",dataIndex:"title",render:(t,i)=>e(n,{size:"middle",children:e("span",{children:i.title.en})})},{key:"title",title:"Title AR",dataIndex:"title",responsive:["md"],render:(t,i)=>e(n,{size:"middle",children:e("span",{children:i.title.ar})})},{key:"price",title:"Price",dataIndex:"price",render:(t,i)=>e(n,{size:"middle",children:e("span",{children:i.price})})},{key:"deleted_at",title:"Deleted At",dataIndex:"deleted_at",render:(t,i)=>e(n,{size:"middle",children:e("span",{children:i.deleted_at})})},{title:"Action",key:"action",render:(t,i)=>p(i)}],rowKey:"id",dataSource:r})})}function M({currentStore:r,locale:h,variationTypesValues:f,variationTypes:y}){const[a,d]=T.exports.useState(!1),m=I=>{s.Inertia.post(o("admin.stores.update",r),I)},p=()=>{d(!a)};return e(g,{children:c("div",{className:"m-2",children:[c(l,{className:"container mx-auto",scrollToFirstError:!0,name:"basic",labelCol:{span:2},wrapperCol:{span:6},onFinish:m,size:"large",children:[e(l.Item,{label:"Name",initialValue:r.name,name:"name",rules:[{required:!0,message:"Please fill type in AR!"}],children:e(D,{})}),e(l.Item,{initialValue:r.description,label:"Description",name:"description",rules:[{required:!0,message:"Please fill type in AR!"}],children:e(D,{})}),e(l.Item,{wrapperCol:{offset:2,span:1},children:e(u,{type:"default",htmlType:"submit",children:"Submit"})})]}),e(u,{onClick:()=>d(!0),children:"CREATE NEW PRODUCT"}),e("h1",{className:"text-center text-2xl ",children:"Products"}),e(b,{}),e(v,{products:r.products,locale:h,variationTypes:y,variationTypesValues:f}),e(C,{handleAddDialog:p,openAddDialog:a,store_id:r.id})]})})}export{M as default};
