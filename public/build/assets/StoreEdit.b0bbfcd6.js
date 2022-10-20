import{r as D,a as e,j as u,F as T,d as l}from"./app.e6fa22bf.js";import{D as x}from"./dashboard.5083bf97.js";import{h as s}from"./index.m.9084c204.js";import{T as A}from"./ToggleDeleteRestoreButton.abf24354.js";import{A as k}from"./AntDesignDataTable.484e3168.js";import{S as d}from"./index.94f4b4aa.js";import{B as h}from"./button.6e91c681.js";import C from"./ProductCreate.4c71ce8c.js";import{F as n}from"./index.e076dcb0.js";import{I}from"./index.7c398f6c.js";import{D as b}from"./index.e0f9eba6.js";import"./objectWithoutPropertiesLoose.53a6c3cb.js";import"./inheritsLoose.06c72c92.js";import"./Table.68438b81.js";import"./index.0e25eb05.js";import"./index.1c40f768.js";import"./index.b3d31cad.js";import"./getScrollBarSize.88800c8f.js";import"./EyeOutlined.7350708f.js";import"./type.d0b5a5ac.js";import"./css.1c51d62e.js";import"./index.3c77dd4d.js";import"./motion.abf9acb4.js";import"./useForceUpdate.55750436.js";import"./DownOutlined.d98a1b88.js";import"./debounce.c583c7ff.js";import"./keys.9ed75caf.js";import"./toNumber.3576389f.js";import"./isSymbol.a72f8a83.js";import"./getDataOrAriaProps.08708643.js";import"./ModalWithChildren.a3b19e80.js";import"./DialogWrap.ef06641b.js";import"./styleChecker.87d5c37f.js";import"./Helpers.06543a8e.js";import"./index.a726347a.js";import"./index.38b323ca.js";import"./DeleteOutlined.0a1f7d18.js";import"./_baseIsEqual.4c8a3145.js";function _({products:r,locale:f,variationTypesValues:y,variationTypes:g}){D.exports.useState([]);const a=t=>{l.Inertia.get(s("admin.products.edit",t.id))},o=t=>{l.Inertia.post(s("admin.products.destroy",t.id),void 0,{preserveState:!1})},m=t=>{l.Inertia.post(s("admin.products.restore",t.id),void 0,{preserveState:!1})},p=t=>{var i;return t.media?e("img",{width:50,height:50,src:(i=t.media[0])==null?void 0:i.thumbnail}):e("div",{children:"nothing to show"})},c=t=>u(T,{children:[e(A,{handleOnClickRestore:m,handleOnClickDelete:o,params:t}),e(h,{className:"mr-2",type:"default",onClick:()=>a(t),children:"UPDATE"})]});return e("main",{className:"bg-white shadow-md rounded",children:e(k,{columns:[{key:"id",title:"ID",dataIndex:"id"},{key:"media",title:"Image",dataIndex:"media",render:(t,i)=>p(i)},{key:"title",title:"Title EN",dataIndex:"title",render:(t,i)=>e(d,{size:"middle",children:e("span",{children:i.title.en})})},{key:"title",title:"Title AR",dataIndex:"title",render:(t,i)=>e(d,{size:"middle",children:e("span",{children:i.title.ar})})},{key:"price",title:"Price",dataIndex:"price",render:(t,i)=>e(d,{size:"middle",children:e("span",{children:i.price})})},{key:"deleted_at",title:"Deleted At",dataIndex:"deleted_at",render:(t,i)=>e(d,{size:"middle",children:e("span",{children:i.deleted_at})})},{title:"Action",key:"action",render:(t,i)=>c(i)}],rowKey:"id",dataSource:r})})}function ce({currentStore:r,locale:f,variationTypesValues:y,variationTypes:g}){const[a,o]=D.exports.useState(!1),m=c=>{l.Inertia.post(s("admin.stores.update",r),c)},p=()=>{o(!a)};return e(x,{children:u("div",{className:"m-2",children:[u(n,{className:"container mx-auto",scrollToFirstError:!0,name:"basic",labelCol:{span:2},wrapperCol:{span:6},onFinish:m,size:"large",autoComplete:"off",children:[e(n.Item,{label:"Name",initialValue:r.name,name:"name",rules:[{required:!0,message:"Please fill type in AR!"}],children:e(I,{})}),e(n.Item,{initialValue:r.description,label:"Description",name:"description",rules:[{required:!0,message:"Please fill type in AR!"}],children:e(I,{})}),e(n.Item,{wrapperCol:{offset:2,span:1},children:e(h,{type:"default",htmlType:"submit",children:"Submit"})})]}),e(h,{onClick:()=>o(!0),children:"CREATE NEW PRODUCT"}),e(b,{}),e(_,{products:r.products,locale:f,variationTypes:g,variationTypesValues:y}),e(C,{handleAddDialog:p,openAddDialog:a,store_id:r.id})]})})}export{ce as default};
