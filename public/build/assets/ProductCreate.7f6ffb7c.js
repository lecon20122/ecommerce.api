import{r as b,a as e,j as l,d as g}from"./app.1087c1c9.js";import{h as C}from"./index.m.9084c204.js";import x from"./ModalWithChildren.e12d90b3.js";import{P,H as F}from"./Helpers.f0c12409.js";import{F as t}from"./index.418c3a96.js";import{I as i}from"./index.2782d017.js";import{I as T}from"./index.3877fc94.js";import{U as w}from"./index.362e0b83.js";import{B as y}from"./button.55908dfd.js";import"./index.2e8c0446.js";import"./objectWithoutPropertiesLoose.85055a0f.js";import"./index.1c40f768.js";import"./index.b3d31cad.js";import"./motion.4822a711.js";import"./type.729a0815.js";import"./DialogWrap.2618ab78.js";import"./getScrollBarSize.bd8aac29.js";import"./styleChecker.a76647a7.js";import"./EyeOutlined.84f21be7.js";import"./_baseIsEqual.490c2817.js";import"./keys.a0ddf3ec.js";import"./useForceUpdate.765b514b.js";import"./DeleteOutlined.40ced6cc.js";function Q({handleAddDialog:n,openAddDialog:p,store_id:d}){const[o,m]=b.exports.useState([]),c=new F,a=r=>{g.Inertia.post(C("admin.products.store"),r,{preserveState:!1})},u=r=>{console.log(r),r.images&&(r.images=c.appendImageToFormData(o)),a(r)},f=r=>{m(r.fileList)},h=r=>{const I=o.indexOf(r),s=o.slice();s.splice(I,1),m(s)};return e(x,{openModal:p,onOk:n,onCancel:n,title:"Create New Variation",children:l(t,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},onFinish:u,autoComplete:"off",children:[e(t.Item,{name:"store_id",hidden:!0,initialValue:d,children:e(i,{})}),e(t.Item,{label:"Title EN",name:"en",rules:[{required:!0}],children:e(i,{})}),e(t.Item,{label:"Title AR",name:"ar",rules:[{required:!0}],children:e(i,{})}),e(t.Item,{label:"Description",name:"description",rules:[{required:!0}],children:e(i,{})}),e(t.Item,{label:"Price",name:"price",rules:[{required:!0,type:"integer",min:0,max:1e5}],children:e(T,{})}),e(t.Item,{label:"Product Image",name:"images",valuePropName:"images",children:e(w,{listType:"picture-card",onRemove:h,onChange:r=>f(r),children:l("div",{children:[e(P,{}),e("div",{style:{marginTop:8},children:"Upload"})]})})}),e(t.Item,{wrapperCol:{offset:8,span:16},children:e(y,{type:"default",htmlType:"submit",children:"Submit"})})]})})}export{Q as default};
