import{r,j as i,a as o,d as E}from"./app.8ebb39ab.js";import{h as L}from"./keys.d090d6c3.js";import A from"./ModalWithChildren.03ad3f01.js";import{U as M,P as R,H as j}from"./Helpers.4e6a5b4b.js";import{S as n}from"./index.cbddd151.js";import{D as q}from"./index.2e6fa1cd.js";import{F as t}from"./index.d5db5b26.js";import{I as m}from"./index.1b7312b9.js";import{I as H}from"./index.b445adeb.js";import{B as U}from"./button.a5c89774.js";import"./type.e0301de5.js";import"./AntdIcon.36ef1e71.js";import"./index.0579b088.js";import"./motion.bda44f0c.js";import"./DialogWrap.6635e94e.js";import"./getScrollBarSize.cc747176.js";import"./styleChecker.eaa03d50.js";import"./EyeOutlined.2b9a9c38.js";import"./useForceUpdate.44bc8b43.js";import"./DeleteOutlined.cf311ea1.js";import"./DownOutlined.b475dfbc.js";function de({handleAddDialog:p,openAddDialog:b,productId:g,variationTypesValues:c,variationTypes:l,locale:u,parentId:C,store_id:_}){const[V,y]=r.exports.useState(!1),[h,v]=r.exports.useState(0),[s,f]=r.exports.useState([]),[d,w]=r.exports.useState([{id:0,value:{en:"",ar:""},variation_type_id:0}]),S=new j,F=e=>{y(e.is_mediable),v(e.id)},N=l==null?void 0:l.map(e=>i(n.Option,{value:e.id,children:i("div",{onClick:a=>F(e),children:e.type[u]})},e.id));console.log(c),r.exports.useEffect(()=>{const e=c.filter(a=>a.variation_type_id==h);w(e)},[h]);const O=d==null?void 0:d.map(e=>i(n.Option,{value:e.id,children:o("div",{className:"flex flex-row content-center",children:[i("span",{style:{backgroundColor:`${e.value.en.toLowerCase()}`},className:"rounded w-[23px] h-[23px] inline-block mr-2 border border-3 border-black"}),i("span",{children:e.value[u]})]})},e.id)),I=e=>{E.Inertia.post(L("admin.variations.store"),e,{preserveState:!1})},P=e=>{console.log(e),e.images&&(e.images=S.appendImageToFormData(s)),I(e)},T=e=>{f(e.fileList)},k=e=>{const a=s.indexOf(e),x=s.slice();x.splice(a,1),f(x)};return o("div",{id:"add",children:[i(q,{}),i(A,{openModal:b,onOk:p,onCancel:p,title:"CREATE NEW VARIATION",children:o(t,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},onFinish:P,autoComplete:"off",children:[i(t.Item,{name:"parent_id",hidden:!0,initialValue:C,children:i(m,{})}),i(t.Item,{name:"product_id",hidden:!0,initialValue:g,children:i(m,{})}),i(t.Item,{name:"store_id",hidden:!0,initialValue:_,children:i(m,{})}),i(t.Item,{label:"Type (ex:color,size)",name:"variation_type_id",rules:[{required:!0,message:"Please fill type in EN!"}],children:i(n,{children:N})}),i(t.Item,{label:"Value (ex :red,xl,xs)",name:"variation_type_value_id",rules:[{required:!0,message:"Please fill type in AR!"}],children:i(n,{placeholder:"this type will have image ?",allowClear:!0,children:O})}),i(t.Item,{label:"Price",name:"price",rules:[{required:!0,type:"integer",min:0,max:1e5}],children:i(H,{})}),i(t.Item,{hidden:!V,label:"Variation Image",name:"images",valuePropName:"images",children:i(M,{multiple:!0,listType:"picture-card",onRemove:k,onChange:e=>T(e),children:o("div",{children:[i(R,{}),i("div",{style:{marginTop:8},children:"Upload"})]})})}),i(t.Item,{wrapperCol:{offset:8,span:16},children:i(U,{type:"default",htmlType:"submit",children:"Submit"})})]})})]})}export{de as default};