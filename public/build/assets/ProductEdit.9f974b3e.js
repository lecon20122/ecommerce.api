import{u as O,r as u,a as n,j as e,R as M,d as c}from"./app.ce874e0d.js";import{h as m}from"./index.m.4f4de470.js";import B from"./create.52e4b9db.js";import{T as U}from"./ToggleDeleteRestoreButton.a3512b09.js";import{B as h}from"./styleChecker.ffa4fc52.js";import{T as w,S as j}from"./Table.27a6916d.js";import N from"./ModalWithChildren.31803be5.js";import{N as K}from"./new-dashboard-layout.3a008228.js";import{F as t}from"./index.d6442bd2.js";import{I as p}from"./index.ca0c73dc.js";import{D as A}from"./index.62120236.js";import{S as f}from"./index.d3022a82.js";import{E as L}from"./EditOutlined.78691364.js";import{D as W}from"./DeleteOutlined.0f6519e4.js";import"./Helpers.3f04cd56.js";import"./zoom.48ba8b40.js";import"./PlusOutlined.c8269bdc.js";import"./index.0f39b3a0.js";import"./index.53d224ea.js";import"./css.35c387e8.js";import"./Overflow.f2c530b5.js";function z({variations:l,variationTypesValues:x,variationTypes:g,productId:S,storeId:k}){const I=O().props.locale,[y,v]=u.exports.useState(!1);u.exports.useState(!1),u.exports.useState(!1),u.exports.useState(0),u.exports.useState(0);const C=()=>{v(!y)},b=i=>{c.Inertia.post(m("admin.variations.restore",i.id),void 0,{preserveState:!1})},r=i=>{c.Inertia.get(m("admin.variations.edit",i.id))},V=i=>{c.Inertia.post(m("admin.variations.destroy",i.id),void 0,{preserveState:!1})},_=i=>{var d,s;return i.media?e("img",{width:50,height:50,src:(d=i.media[0])==null?void 0:d.thumbnail,alt:(s=i.media[0])==null?void 0:s.name}):e("div",{children:"nothing to show"})},D=i=>n(M.Fragment,{children:[e(U,{handleOnClickRestore:b,handleOnClickDelete:V,params:i}),e(h,{className:"mr-2",onClick:()=>r(i),children:"UPDATE"})]});return n("div",{children:[e(h,{onClick:C,children:"ADD NEW VARIATION"}),e(B,{handleAddDialog:C,openAddDialog:y,productId:S,locale:I,variationTypes:g,variationTypesValues:x,store_id:k}),e(w,{columns:[{title:"ID",dataIndex:"id",key:"id"},{title:"Image",dataIndex:"image",key:"media",render:(i,d)=>_(d)},{title:"Variation Type Value",dataIndex:"variation_type_value",key:"variation_type_value",render:(i,d)=>{var s;return e("span",{children:(s=d.variation_type_value)==null?void 0:s.value.en})}},{title:"Variation Type",dataIndex:"variation_type",key:"variation_type",render:(i,d)=>{var s;return e("span",{children:(s=d.variation_type)==null?void 0:s.type.en})}},{title:"Price",dataIndex:"price",key:"price"},{title:"Order",dataIndex:"order",key:"order",responsive:["lg"]},{title:"Deleted at",dataIndex:"deleted_at",key:"deleted_at",responsive:["lg"]},{title:"Action",dataIndex:"",key:"x",render:(i,d)=>D(d)}],rowKey:"id",dataSource:l,scroll:{x:!0}})]})}function me({currentProduct:l,locale:x,variationTypesValues:g,variationTypes:S,categories:k,attributes:I}){const[y,v]=u.exports.useState(!1),[C,b]=u.exports.useState(!1),[r,V]=u.exports.useState();O().props.errors;const _=a=>{c.Inertia.post(m("admin.attach.category.to.product",l),a,{preserveState:!1})},D=a=>{c.Inertia.post(m("admin.products.update",l),a,{preserveState:!1})},T=a=>{c.Inertia.post(m("admin.detach.category.from.product",l),{id:a},{preserveState:!1})},i=a=>{v(!0),V(a)},d=a=>{c.Inertia.post(m("admin.add.product.description"),a,{preserveState:!1})},s=a=>{c.Inertia.post(m("admin.update.product.description",{id:a.id}),a,{preserveState:!1})},E=a=>{c.Inertia.post(m("admin.delete.product.description",{id:a}),void 0,{preserveState:!1})},F=l.categories.map(a=>n("div",{className:"border border-1 border-black p-1 flex space-x-1 items-center",children:[e("h1",{className:"text-left ",children:a.title.en}),e("button",{className:"cursor text-red-600",onClick:o=>T(a.id),children:"x"})]})),R=[{key:"id",title:"ID",dataIndex:"id"},{key:"attribute",title:"Description Title",dataIndex:"attribute",render:(a,o)=>e("span",{children:o.attribute.attribute.en})},{key:"value",title:"Description Title EN",dataIndex:"value",render:(a,o)=>e("span",{children:o.value.en})},{key:"value",title:"Description Title AR",dataIndex:"value",render:(a,o)=>e("span",{children:o.value.ar})},{title:"Action",key:"action",render:(a,o)=>n(j,{size:"middle",children:[e(L,{onClick:q=>i(o)}),e(W,{onClick:q=>E(o.id)})]})}];return e(K,{children:n("div",{className:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2",children:[n(t,{name:"basic",labelCol:{span:2},wrapperCol:{span:12},onFinish:D,autoComplete:"off",children:[e(t.Item,{label:"Title EN",initialValue:l.title.en,name:"en",rules:[{required:!0}],children:e(p,{})}),e(t.Item,{label:"Title AR",name:"ar",initialValue:l.title.ar,rules:[{required:!0}],children:e(p,{})}),e(t.Item,{label:"Price",initialValue:l.price,name:"price",rules:[{required:!0}],children:e(p,{})}),e(t.Item,{wrapperCol:{offset:2,span:1},children:e(h,{type:"default",htmlType:"submit",children:"Submit"})})]}),e(A,{}),n("div",{className:"flex flex-1",children:[n("div",{className:"basis-1/3",children:[n("div",{className:"container py-3 flex space-x-1 items-center",children:[e("h1",{children:"Currently Attached Categories :"}),F]}),n(t,{onFinish:_,wrapperCol:{span:12},children:[e(t.Item,{name:"id",children:e(f,{mode:"multiple",placeholder:"Select a category",allowClear:!0,children:k.map(a=>e(f.Option,{value:a.id,children:a.title[x]},a.id))})}),e(t.Item,{className:"ml-2",children:e(h,{type:"default",htmlType:"submit",children:"Submit"})})]})]}),n("div",{className:"basis-2/3",children:[e(h,{onClick:()=>b(!0),children:"create new record"}),e(A,{}),e(w,{scroll:{x:!0},rowKey:"id",columns:R,dataSource:l.description})]})]}),e(A,{}),e(z,{variations:l.variations,storeId:l.store_id,variationTypes:S,variationTypesValues:g,productId:l.id}),e(N,{openModal:y,onOk:()=>v(!1),onCancel:()=>v(!1),children:n(t,{className:"p-5",name:"basic",labelCol:{span:8},wrapperCol:{span:16},onFinish:s,children:[e(t.Item,{name:"id",label:"select attribute",children:e(f,{placeholder:"Select a Attribute",defaultValue:r==null?void 0:r.attribute.id,allowClear:!0,children:I.map(a=>e(f.Option,{value:a.id,children:a.attribute.en},a.id))})}),e(t.Item,{hidden:!0,label:"id",initialValue:r==null?void 0:r.id,name:"id",children:e(p,{})}),e(t.Item,{label:"Value English",initialValue:r==null?void 0:r.value.en,name:"en",rules:[{required:!0,message:"Please fill the value please"}],children:e(p,{})}),e(t.Item,{label:"Value Arabic",initialValue:r==null?void 0:r.value.ar,name:"ar",rules:[{required:!0,message:"Please fill the value please"}],children:e(p,{})}),e(t.Item,{wrapperCol:{offset:8,span:16},children:e(h,{type:"default",htmlType:"submit",children:"Submit"})})]})}),e(N,{openModal:C,onOk:()=>b(!1),onCancel:()=>b(!1),children:n(t,{className:"p-5",name:"basic",labelCol:{span:8},wrapperCol:{span:16},onFinish:d,children:[e(t.Item,{name:"product_attribute_id",label:"select attribute",children:e(f,{placeholder:"Select a Attribute",allowClear:!0,children:I.map(a=>e(f.Option,{value:a.id,children:a.attribute.en},a.id))})}),e(t.Item,{hidden:!0,initialValue:l.id,label:"product_id",name:"product_id",children:e(p,{})}),e(t.Item,{label:"Value English",name:"en",rules:[{required:!0,message:"Please fill the value please"}],children:e(p,{})}),e(t.Item,{label:"Value Arabic",name:"ar",rules:[{required:!0,message:"Please fill the value please"}],children:e(p,{})}),e(t.Item,{wrapperCol:{offset:8,span:16},children:e(h,{type:"default",htmlType:"submit",children:"Submit"})})]})})]})})}export{me as default};
