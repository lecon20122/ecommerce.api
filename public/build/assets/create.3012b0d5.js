import{r,a as i,j as o,d as k}from"./app.88342cf7.js";import{h as E}from"./index.m.9084c204.js";import L from"./ModalWithChildren.1edfcdd0.js";import{P as A,H as M}from"./Helpers.4a1526b9.js";import{S as n}from"./index.4b92cc22.js";import{D as R}from"./index.78fd7eff.js";import{F as t}from"./index.7d395ffc.js";import{I}from"./index.30aa6b95.js";import{I as j}from"./index.cb251b61.js";import{U as q}from"./index.551dd618.js";import{B as H}from"./button.804a8ef9.js";import"./index.f94bfe6c.js";import"./objectWithoutPropertiesLoose.85055a0f.js";import"./index.1c40f768.js";import"./index.b3d31cad.js";import"./motion.d40de756.js";import"./type.8450bd56.js";import"./DialogWrap.5a7978a5.js";import"./getScrollBarSize.45ad19cd.js";import"./styleChecker.86ed0b0a.js";import"./EyeOutlined.9d16d23e.js";import"./useForceUpdate.a22b6faa.js";import"./_baseIsEqual.841a8377.js";import"./keys.a205b229.js";import"./DeleteOutlined.9d0edcb4.js";function ce({handleAddDialog:d,openAddDialog:x,productId:b,variationTypesValues:C,variationTypes:l,locale:p,parentId:g}){const[y,v]=r.exports.useState(!1),[c,_]=r.exports.useState(0),[s,u]=r.exports.useState([]),[m,V]=r.exports.useState([{id:0,value:{en:"",ar:""},variation_type_id:0}]),w=new M,S=e=>{v(e.is_mediable),_(e.id)},T=l==null?void 0:l.map(e=>i(n.Option,{value:e.id,children:i("div",{onClick:a=>S(e),children:e.type[p]})},e.id));r.exports.useEffect(()=>{const e=C.filter(a=>a.variation_type_id==c);V(e)},[c]);const F=m==null?void 0:m.map(e=>i(n.Option,{value:e.id,children:o("div",{className:"flex flex-row content-center",children:[i("span",{style:{backgroundColor:`${e.value.en.toLowerCase()}`},className:"rounded w-[23px] h-[23px] inline-block mr-2 border border-3 border-black"}),i("span",{children:e.value[p]})]})},e.id)),h=e=>{k.Inertia.post(E("admin.variations.store"),e,{preserveState:!1})},N=e=>{e.images&&(e.images=w.appendImageToFormData(s)),h(e)},O=e=>{u(e.fileList)},P=e=>{const a=s.indexOf(e),f=s.slice();f.splice(a,1),u(f)};return o("div",{id:"add",children:[i(R,{}),i(L,{openModal:x,onOk:d,onCancel:d,title:"CREATE NEW VARIATION",children:o(t,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},onFinish:N,autoComplete:"off",children:[i(t.Item,{name:"parent_id",hidden:!0,initialValue:g,children:i(I,{})}),i(t.Item,{name:"product_id",hidden:!0,initialValue:b,children:i(I,{})}),i(t.Item,{label:"Type (ex:color,size)",name:"variation_type_id",rules:[{required:!0,message:"Please fill type in EN!"}],children:i(n,{children:T})}),i(t.Item,{label:"Value (ex :red,xl,xs)",name:"variation_type_value_id",rules:[{required:!0,message:"Please fill type in AR!"}],children:i(n,{placeholder:"this type will have image ?",allowClear:!0,children:F})}),i(t.Item,{label:"Price",name:"price",rules:[{required:!0,type:"integer",min:0,max:1e5}],children:i(j,{})}),i(t.Item,{hidden:!y,label:"Category Image",name:"images",valuePropName:"images",children:i(q,{multiple:!0,listType:"picture-card",onRemove:P,onChange:e=>O(e),children:o("div",{children:[i(A,{}),i("div",{style:{marginTop:8},children:"Upload"})]})})}),i(t.Item,{wrapperCol:{offset:8,span:16},children:i(H,{type:"default",htmlType:"submit",children:"Submit"})})]})})]})}export{ce as default};