import{j as e,a as c,F as x,d as l,r as T}from"./app.177217f1.js";import g from"./dashboard.53c2aaac.js";import{h as s}from"./keys.af31ccc5.js";import{T as A}from"./ToggleDeleteRestoreButton.0ccf66f2.js";import{A as k}from"./AntDesignDataTable.c0bdfb56.js";import{S as d}from"./Table.2ae680e3.js";import{B as u}from"./button.ff907f0c.js";import C from"./ProductCreate.d3925aad.js";import{F as n}from"./index.579094fc.js";import{I as D}from"./index.4944545a.js";import{D as b}from"./index.954db2ca.js";import"./should-render.639489fa.js";import"./index.0579b088.js";import"./index.8fe29e10.js";import"./AntdIcon.2796668a.js";import"./type.65e2e3a0.js";import"./getScrollBarSize.bded6ceb.js";import"./motion.3f4b0233.js";import"./EyeOutlined.8ccea39f.js";import"./css.ac4913d5.js";import"./index.ecdc47b7.js";import"./styleChecker.b42d703c.js";import"./DownOutlined.dc82a92e.js";import"./useForceUpdate.0e5b397b.js";import"./debounce.9cb2cf79.js";import"./index.74d23877.js";import"./getDataOrAriaProps.c03198e8.js";import"./ModalWithChildren.ecc180bf.js";import"./DialogWrap.01761d01.js";import"./Helpers.c683eaab.js";import"./DeleteOutlined.93f08c6a.js";import"./index.a4239ada.js";function v({products:r,locale:h,variationTypesValues:f,variationTypes:y}){const a=t=>{l.Inertia.get(s("admin.products.edit",t.id))},o=t=>{l.Inertia.post(s("admin.products.destroy",t.id),void 0,{preserveState:!1})},m=t=>{l.Inertia.post(s("admin.products.restore",t.id),void 0,{preserveState:!1})},p=t=>c(x,{children:[e(A,{handleOnClickRestore:m,handleOnClickDelete:o,params:t}),e(u,{className:"mr-2",type:"default",onClick:()=>a(t),children:"UPDATE"})]});return e("main",{className:"bg-white shadow-md rounded",children:e(k,{columns:[{key:"id",title:"ID",dataIndex:"id"},{key:"title",title:"Title EN",dataIndex:"title",render:(t,i)=>e(d,{size:"middle",children:e("span",{children:i.title.en})})},{key:"title",title:"Title AR",dataIndex:"title",responsive:["md"],render:(t,i)=>e(d,{size:"middle",children:e("span",{children:i.title.ar})})},{key:"price",title:"Price",dataIndex:"price",render:(t,i)=>e(d,{size:"middle",children:e("span",{children:i.price})})},{key:"deleted_at",title:"Deleted At",dataIndex:"deleted_at",render:(t,i)=>e(d,{size:"middle",children:e("span",{children:i.deleted_at})})},{title:"Action",key:"action",render:(t,i)=>p(i)}],rowKey:"id",dataSource:r})})}function oe({currentStore:r,locale:h,variationTypesValues:f,variationTypes:y}){const[a,o]=T.exports.useState(!1),m=I=>{l.Inertia.post(s("admin.stores.update",r),I)},p=()=>{o(!a)};return e(g,{children:c("div",{className:"m-2",children:[c(n,{className:"container mx-auto",scrollToFirstError:!0,name:"basic",labelCol:{span:2},wrapperCol:{span:6},onFinish:m,size:"large",children:[e(n.Item,{label:"Name",initialValue:r.name,name:"name",rules:[{required:!0,message:"Please fill type in AR!"}],children:e(D,{})}),e(n.Item,{initialValue:r.description,label:"Description",name:"description",rules:[{required:!0,message:"Please fill type in AR!"}],children:e(D,{})}),e(n.Item,{wrapperCol:{offset:2,span:1},children:e(u,{type:"default",htmlType:"submit",children:"Submit"})})]}),e(u,{onClick:()=>o(!0),children:"CREATE NEW PRODUCT"}),e("h1",{className:"text-center text-2xl ",children:"Products"}),e(b,{}),e(v,{products:r.products,locale:h,variationTypes:y,variationTypesValues:f}),e(C,{handleAddDialog:p,openAddDialog:a,store_id:r.id})]})})}export{oe as default};