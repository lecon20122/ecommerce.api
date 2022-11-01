import{r as b,a as e,j as l,d as g}from"./app.265b5776.js";import{h as C}from"./index.m.9084c204.js";import x from"./ModalWithChildren.4102f7a9.js";import{U as P,P as F,H as T}from"./Helpers.c16d8171.js";import{F as t}from"./index.52599805.js";import{I as i}from"./index.26a56762.js";import{I as w}from"./index.6ff3f837.js";import{B as y}from"./button.79a73c16.js";import"./type.ec2030a4.js";import"./setPrototypeOf.b405c108.js";import"./AntdIcon.fd091de9.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.b3d31cad.js";import"./index.1c40f768.js";import"./motion.bf9ba5f4.js";import"./DialogWrap.8f79eb9b.js";import"./getScrollBarSize.f21c5b87.js";import"./styleChecker.f573d230.js";import"./useMergedState.c030fd89.js";import"./useForceUpdate.ae69cce7.js";import"./DeleteOutlined.8c592e07.js";import"./_baseIsEqual.193a0fe2.js";import"./keys.3e9727e8.js";function Q({handleAddDialog:n,openAddDialog:p,store_id:d}){const[o,a]=b.exports.useState([]),c=new T,m=r=>{g.Inertia.post(C("admin.products.store"),r,{preserveState:!1})},u=r=>{console.log(r),r.images&&(r.images=c.appendImageToFormData(o)),m(r)},h=r=>{a(r.fileList)},f=r=>{const I=o.indexOf(r),s=o.slice();s.splice(I,1),a(s)};return e(x,{openModal:p,onOk:n,onCancel:n,title:"Create New Variation",children:l(t,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},onFinish:u,autoComplete:"off",children:[e(t.Item,{name:"store_id",hidden:!0,initialValue:d,children:e(i,{})}),e(t.Item,{label:"Title EN",name:"en",rules:[{required:!0}],children:e(i,{})}),e(t.Item,{label:"Title AR",name:"ar",rules:[{required:!0}],children:e(i,{})}),e(t.Item,{label:"Description",name:"description",rules:[{required:!0}],children:e(i,{})}),e(t.Item,{label:"Price",name:"price",rules:[{required:!0,type:"integer",min:0,max:1e5}],children:e(w,{})}),e(t.Item,{label:"Product Image",name:"images",valuePropName:"images",children:e(P,{listType:"picture-card",onRemove:f,onChange:r=>h(r),children:l("div",{children:[e(F,{}),e("div",{style:{marginTop:8},children:"Upload"})]})})}),e(t.Item,{wrapperCol:{offset:8,span:16},children:e(y,{type:"default",htmlType:"submit",children:"Submit"})})]})})}export{Q as default};
