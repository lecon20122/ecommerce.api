import{r as m,j as e,a as n,d as p}from"./app.59416ef7.js";import D from"./dashboard.3f1ce15a.js";import f from"./ModalWithChildren.c7a4e047.js";import{h as u}from"./keys.5cfe4f12.js";import{F as i}from"./index.2e88ce26.js";import{I as t}from"./index.acd534cf.js";import{B as h}from"./button.4bec45d3.js";import{D as q}from"./index.23ff2464.js";import{T as w,S as c}from"./Table.1dc0a2ea.js";import{E}from"./EditOutlined.aad8b1a3.js";import{D as M}from"./DeleteOutlined.def790e8.js";import"./should-render.0937b3e3.js";import"./index.0579b088.js";import"./index.0f604fe8.js";import"./type.4dc494b7.js";import"./AntdIcon.edf59427.js";import"./motion.0f103c9e.js";import"./DialogWrap.0b5480f1.js";import"./getScrollBarSize.bdedf68b.js";import"./styleChecker.5f442a83.js";import"./EyeOutlined.25e5ae95.js";import"./css.a155fa2a.js";import"./index.4af62f86.js";import"./DownOutlined.02298d42.js";import"./useForceUpdate.672cecdb.js";import"./debounce.678f1a6e.js";import"./index.349cf55e.js";import"./getDataOrAriaProps.c03198e8.js";function re({currentVariationType:o,locale:v}){const[x,s]=m.exports.useState(!1),[I,d]=m.exports.useState(!1),[l,b]=m.exports.useState(),y=a=>{console.log(a),d(!0),b(a)},_=a=>{p.Inertia.post(u("admin.variations.type.value.destroy",a),void 0,{preserveState:!1})},C=a=>{p.Inertia.post(u("admin.variations.type.value.store"),a,{preserveState:!1})},S=a=>{p.Inertia.post(u("admin.variations.type.value.update",{id:a.id}),a,{preserveState:!1})},k=[{key:"id",title:"ID",dataIndex:"id"},{key:"value",title:"Value",dataIndex:"value",render:(a,r)=>e(c,{size:"middle",children:e("span",{children:r.value[v]})})},{key:"hex_color",title:"Hex color",dataIndex:"hex_color",render:(a,r)=>e(c,{size:"middle",children:e("span",{className:"font-bold",style:{color:r.hex_value},children:r.hex_value})})},{title:"Action",key:"action",render:(a,r)=>n(c,{size:"middle",children:[e(E,{onClick:g=>y(r)}),e(M,{onClick:g=>_(r.id)})]})}];return e(D,{children:n("div",{className:"container mx-auto py-4",children:[e(f,{openModal:x,onOk:()=>s(!1),onCancel:()=>s(!1),children:n(i,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},onFinish:C,children:[e(i.Item,{label:"Value EN",name:"en",rules:[{required:!0,message:"Please fill value in EN!"}],children:e(t,{})}),e(i.Item,{hidden:!0,label:"variation_type_id",name:"variation_type_id",initialValue:o.id,children:e(t,{})}),e(i.Item,{label:"Value AR",name:"ar",rules:[{required:!0,message:"Please fill value in AR!"}],children:e(t,{})}),e(i.Item,{label:"Hex Value",hidden:o.type.en==="size",name:"hex_value",rules:[{required:!0,message:"fill the color hex value"}],children:e(t,{})}),e(i.Item,{wrapperCol:{offset:8,span:16},children:e(h,{type:"default",htmlType:"submit",children:"Submit"})})]})}),e(f,{openModal:I,onOk:()=>d(!1),onCancel:()=>d(!1),children:n(i,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},onFinish:S,children:[e(i.Item,{label:"Value EN",name:"en",initialValue:l==null?void 0:l.value.en,rules:[{required:!0,message:"Please fill value in EN!"}],children:e(t,{})}),e(i.Item,{hidden:!0,label:"id",name:"id",initialValue:l==null?void 0:l.id,children:e(t,{})}),e(i.Item,{label:"Value AR",initialValue:l==null?void 0:l.value.ar,name:"ar",rules:[{required:!0,message:"Please fill value in AR!"}],children:e(t,{})}),e(i.Item,{label:"Hex Value",hidden:o.type.en==="size",initialValue:l==null?void 0:l.hex_value,name:"hex_value",rules:[{required:!0,message:"fill the color hex value"}],children:e(t,{})}),e(i.Item,{wrapperCol:{offset:8,span:16},children:e(h,{type:"default",htmlType:"submit",children:"Submit"})})]})}),e(h,{onClick:()=>s(!0),children:"create new record"}),e(q,{}),e(w,{rowKey:"id",columns:k,dataSource:o.variationTypeValues})]})})}export{re as default};
