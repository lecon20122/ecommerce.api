import{j as e,a as c,F as x,d as l,r as T}from"./app.d710d3a0.js";import g from"./dashboard.11d99c55.js";import{h as s}from"./keys.803c8f62.js";import{T as A}from"./ToggleDeleteRestoreButton.70b10907.js";import{A as k}from"./AntDesignDataTable.08f3baeb.js";import{S as d}from"./Table.2f72e655.js";import{B as u}from"./button.c8e79373.js";import C from"./ProductCreate.04e5fa81.js";import{F as n}from"./index.88fbad69.js";import{I as D}from"./index.019122c7.js";import{D as b}from"./index.3dde9415.js";import"./should-render.4397948d.js";import"./index.0579b088.js";import"./index.d5943fec.js";import"./AntdIcon.68d65bfe.js";import"./type.56242472.js";import"./getScrollBarSize.d6cec083.js";import"./motion.ed3cbe56.js";import"./EyeOutlined.1cdb38a3.js";import"./css.e94b7df6.js";import"./index.f298de4c.js";import"./styleChecker.5154723a.js";import"./DownOutlined.1f53dd13.js";import"./useForceUpdate.430cc4f9.js";import"./debounce.90d12193.js";import"./index.e2069d6d.js";import"./getDataOrAriaProps.c03198e8.js";import"./ModalWithChildren.7ace8abf.js";import"./DialogWrap.e07832ae.js";import"./Helpers.4a047e63.js";import"./DeleteOutlined.cbac5ee0.js";import"./index.035ea865.js";function v({products:r,locale:h,variationTypesValues:f,variationTypes:y}){const a=t=>{l.Inertia.get(s("admin.products.edit",t.id))},o=t=>{l.Inertia.post(s("admin.products.destroy",t.id),void 0,{preserveState:!1})},m=t=>{l.Inertia.post(s("admin.products.restore",t.id),void 0,{preserveState:!1})},p=t=>c(x,{children:[e(A,{handleOnClickRestore:m,handleOnClickDelete:o,params:t}),e(u,{className:"mr-2",type:"default",onClick:()=>a(t),children:"UPDATE"})]});return e("main",{className:"bg-white shadow-md rounded",children:e(k,{columns:[{key:"id",title:"ID",dataIndex:"id"},{key:"title",title:"Title EN",dataIndex:"title",render:(t,i)=>e(d,{size:"middle",children:e("span",{children:i.title.en})})},{key:"title",title:"Title AR",dataIndex:"title",responsive:["md"],render:(t,i)=>e(d,{size:"middle",children:e("span",{children:i.title.ar})})},{key:"price",title:"Price",dataIndex:"price",render:(t,i)=>e(d,{size:"middle",children:e("span",{children:i.price})})},{key:"deleted_at",title:"Deleted At",dataIndex:"deleted_at",render:(t,i)=>e(d,{size:"middle",children:e("span",{children:i.deleted_at})})},{title:"Action",key:"action",render:(t,i)=>p(i)}],rowKey:"id",dataSource:r})})}function oe({currentStore:r,locale:h,variationTypesValues:f,variationTypes:y}){const[a,o]=T.exports.useState(!1),m=I=>{l.Inertia.post(s("admin.stores.update",r),I)},p=()=>{o(!a)};return e(g,{children:c("div",{className:"m-2",children:[c(n,{className:"container mx-auto",scrollToFirstError:!0,name:"basic",labelCol:{span:2},wrapperCol:{span:6},onFinish:m,size:"large",children:[e(n.Item,{label:"Name",initialValue:r.name,name:"name",rules:[{required:!0,message:"Please fill type in AR!"}],children:e(D,{})}),e(n.Item,{initialValue:r.description,label:"Description",name:"description",rules:[{required:!0,message:"Please fill type in AR!"}],children:e(D,{})}),e(n.Item,{wrapperCol:{offset:2,span:1},children:e(u,{type:"default",htmlType:"submit",children:"Submit"})})]}),e(u,{onClick:()=>o(!0),children:"CREATE NEW PRODUCT"}),e("h1",{className:"text-center text-2xl ",children:"Products"}),e(b,{}),e(v,{products:r.products,locale:h,variationTypes:y,variationTypesValues:f}),e(C,{handleAddDialog:p,openAddDialog:a,store_id:r.id})]})})}export{oe as default};