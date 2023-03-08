import{r,j as i,a as n,d as E}from"./app.a2833a7e.js";import{h as L}from"./keys.854197f4.js";import A from"./ModalWithChildren.522ebe0d.js";import{I as M,P as R,H as j}from"./Helpers.2b405b0f.js";import{S as l}from"./index.2660bf13.js";import{D as q}from"./index.6957c6c8.js";import{F as t}from"./index.344dbd91.js";import{I as m}from"./index.0b76f977.js";import{U as H}from"./index.bd91d0ef.js";import{B as U}from"./styleChecker.ccce6752.js";import"./index.0579b088.js";import"./DialogWrap.96d271a4.js";import"./getScrollBarSize.fc7e30fe.js";import"./useForceUpdate.5407dd5c.js";import"./DeleteOutlined.c2fd6cf8.js";function re({handleAddDialog:p,openAddDialog:x,productId:b,variationTypesValues:C,variationTypes:o,locale:c,parentId:g,store_id:V}){const[_,v]=r.exports.useState(!1),[u,y]=r.exports.useState(0),[s,h]=r.exports.useState([]),[d,w]=r.exports.useState([{id:0,value:{en:"",ar:""},variation_type_id:0}]),S=new j,T=e=>{v(e.is_mediable),y(e.id)},F=o==null?void 0:o.map(e=>i(l.Option,{value:e.id,children:i("div",{onClick:a=>T(e),children:e.type[c]})},e.id));r.exports.useEffect(()=>{const e=C.filter(a=>a.variation_type_id==u);w(e)},[u]);const N=d==null?void 0:d.map(e=>i(l.Option,{value:e.id,children:n("div",{className:"flex flex-row content-center",children:[i("span",{style:{backgroundColor:`${e.value.en.toLowerCase()}`},className:"rounded w-[23px] h-[23px] inline-block mr-2 border border-3 border-black"}),i("span",{children:e.value[c]})]})},e.id)),f=e=>{E.Inertia.post(L("admin.variations.store"),e,{preserveState:!1})},O=e=>{e.images&&(e.images=S.appendImageToFormData(s)),f(e)},P=e=>{h(e.fileList)},k=e=>{const a=s.indexOf(e),I=s.slice();I.splice(a,1),h(I)};return n("div",{id:"add",children:[i(q,{}),i(A,{openModal:x,onOk:p,onCancel:p,title:"CREATE NEW VARIATION",children:n(t,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},onFinish:O,autoComplete:"off",children:[i(t.Item,{name:"parent_id",hidden:!0,initialValue:g,children:i(m,{})}),i(t.Item,{name:"product_id",hidden:!0,initialValue:b,children:i(m,{})}),i(t.Item,{name:"store_id",hidden:!0,initialValue:V,children:i(m,{})}),i(t.Item,{label:"Type (ex:color,size)",name:"variation_type_id",rules:[{required:!0,message:"Please fill type in EN!"}],children:i(l,{children:F})}),i(t.Item,{label:"Value (ex :red,xl,xs)",name:"variation_type_value_id",rules:[{required:!0,message:"Please fill type in AR!"}],children:i(l,{placeholder:"this type will have image ?",allowClear:!0,children:N})}),i(t.Item,{label:"Price",name:"price",rules:[{required:!0,type:"integer",min:0,max:1e5}],children:i(M,{})}),i(t.Item,{hidden:!_,label:"Variation Image",name:"images",valuePropName:"images",children:i(H,{multiple:!0,listType:"picture-card",onRemove:k,onChange:e=>P(e),children:n("div",{children:[i(R,{}),i("div",{style:{marginTop:8},children:"Upload"})]})})}),i(t.Item,{wrapperCol:{offset:8,span:16},children:i(U,{type:"default",htmlType:"submit",children:"Submit"})})]})})]})}export{re as default};
