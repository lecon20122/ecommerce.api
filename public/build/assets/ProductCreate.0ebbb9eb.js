import{r as b,j as e,a as l,d as g}from"./app.1146b5d2.js";import{h as C}from"./keys.828a16a2.js";import x from"./ModalWithChildren.03b21e2f.js";import{U as P,P as F,H as T}from"./Helpers.05f2b9d9.js";import{F as t}from"./index.70978192.js";import{I as i}from"./index.8a582d0c.js";import{I as w}from"./index.d94501bb.js";import{B as y}from"./button.f90eefb4.js";import"./type.3069e2e2.js";import"./AntdIcon.0150f901.js";import"./index.0579b088.js";import"./motion.83bb3503.js";import"./DialogWrap.880d455a.js";import"./getScrollBarSize.60697b01.js";import"./styleChecker.3538dada.js";import"./EyeOutlined.e722336a.js";import"./useForceUpdate.a853db94.js";import"./DeleteOutlined.80a87edf.js";import"./DownOutlined.ef6a8104.js";function z({handleAddDialog:n,openAddDialog:p,store_id:d}){const[o,a]=b.exports.useState([]),c=new T,m=r=>{g.Inertia.post(C("admin.products.store"),r,{preserveState:!1})},u=r=>{console.log(r),r.images&&(r.images=c.appendImageToFormData(o)),m(r)},h=r=>{a(r.fileList)},f=r=>{const I=o.indexOf(r),s=o.slice();s.splice(I,1),a(s)};return e(x,{openModal:p,onOk:n,onCancel:n,title:"Create New Variation",children:l(t,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},onFinish:u,autoComplete:"off",children:[e(t.Item,{name:"store_id",hidden:!0,initialValue:d,children:e(i,{})}),e(t.Item,{label:"Title EN",name:"en",rules:[{required:!0}],children:e(i,{})}),e(t.Item,{label:"Title AR",name:"ar",rules:[{required:!0}],children:e(i,{})}),e(t.Item,{label:"Description",name:"description",rules:[{required:!0}],children:e(i,{})}),e(t.Item,{label:"Price",name:"price",rules:[{required:!0,type:"integer",min:0,max:1e5}],children:e(w,{})}),e(t.Item,{label:"Product Image",name:"images",valuePropName:"images",children:e(P,{listType:"picture-card",onRemove:f,onChange:r=>h(r),children:l("div",{children:[e(F,{}),e("div",{style:{marginTop:8},children:"Upload"})]})})}),e(t.Item,{wrapperCol:{offset:8,span:16},children:e(y,{type:"default",htmlType:"submit",children:"Submit"})})]})})}export{z as default};