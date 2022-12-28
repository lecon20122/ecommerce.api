import g from"./dashboard.209bacbf.js";import{r as P,a as l,j as e,d as u}from"./app.67a368ba.js";import{h as A}from"./keys.ca9c1d61.js";import{M as C}from"./MediaProductCollection.4faa1a0f.js";import{P as G,H as U}from"./Helpers.3e6c309b.js";import{F as t}from"./index.b672d0c5.js";import{U as x}from"./index.0e26bbf5.js";import{B as O}from"./button.1b8a54d7.js";import{S as I}from"./index.5c0d08b9.js";import{I as r}from"./index.77e0315c.js";import"./should-render.6be632b3.js";import"./index.0579b088.js";import"./index.6326a999.js";import"./index.9bc4d2d2.js";import"./type.87465d3a.js";import"./AntdIcon.3b3ecbba.js";import"./EyeOutlined.b394ff4f.js";import"./motion.8b55c0ba.js";import"./css.9a53cc4f.js";import"./DialogWrap.b459cc25.js";import"./getScrollBarSize.319b1df8.js";import"./styleChecker.bb7f906c.js";import"./useForceUpdate.59c139af.js";import"./DeleteOutlined.b6a82c16.js";import"./DownOutlined.d7086498.js";function c({formClassName:a,buttonLabel:n="UPLOAD",routeName:m,params:s,wrapperCol:h,labelCol:o,buttonWrapperCol:B,collectionName:E}){const[p,_]=P.exports.useState([]),L=new U,b=i=>{const d={...i,collection_name:E};u.Inertia.post(A(m,s),d,{preserveState:!1})},R=i=>{i.images&&(i.images=L.appendImageToFormData(p)),b(i)},T=i=>{_(i.fileList)},y=i=>{const d=p.indexOf(i),f=p.slice();f.splice(d,1),_(f)};return l(t,{className:a,onFinish:R,labelCol:o,wrapperCol:h,children:[e(t.Item,{name:"images",valuePropName:"images",children:e(x,{listType:"picture-card",onRemove:y,onChange:i=>T(i),children:l("div",{children:[e(G,{}),e("div",{style:{marginTop:8},children:"Upload"})]})})}),e(t.Item,{wrapperCol:B,children:e(O,{type:"default",className:"uppercase",htmlType:"submit",children:n})})]})}var N=(a=>(a.CATEGORY_MOBILE_BANNER_CONVENTION="category_mobile_banner",a.CATEGORY_BIG_BANNER_CONVENTION="category_big_banner",a.CATEGORY_BIG_BANNER="category_big_banner",a.CATEGORY_MOBILE_BANNER="category_mobile_banner",a))(N||{});function le({currentCategory:a,locale:n,categories:m}){const s=m.map(o=>e(I.Option,{value:o.id,children:o.title[n]},o.id));return e(g,{children:l("div",{className:"m-5",children:[l(t,{onFinish:o=>{u.Inertia.post(A("admin.categories.update",a),o,{preserveState:!1})},labelCol:{span:2},wrapperCol:{span:20},size:"large",children:[e(t.Item,{name:"en",label:"Title EN",initialValue:a.title.en,children:e(r,{})}),e(t.Item,{name:"ar",label:"Title AR",initialValue:a.title.ar,children:e(r,{})}),e(t.Item,{name:"primary_color",label:"Primary Color",initialValue:a.primary_color,children:e(r,{style:{backgroundColor:a.primary_color}})}),e(t.Item,{name:"secondary_color",label:"Secondary Color",initialValue:a.secondary_color,children:e(r,{style:{backgroundColor:a.secondary_color}})}),e(t.Item,{name:"parent_id",label:"Category Parents",children:e(I,{allowClear:!0,placeholder:"Select A Parent",children:s})}),e(t.Item,{wrapperCol:{offset:2,span:1},children:e(O,{type:"default",htmlType:"submit",children:"SUBMIT"})})]}),l("div",{className:"flex justify-center gap-4 flex-wrap",children:[e(c,{routeName:"admin.add.media.to.category",params:a,buttonLabel:"UPLOAD Category Thumbnail"}),e(c,{routeName:"admin.add.banner.to.category",params:a,buttonLabel:"UPLOAD BIG BANNER",collectionName:N.CATEGORY_BIG_BANNER}),e(c,{routeName:"admin.add.banner.to.category",params:a,buttonLabel:"UPLOAD MOBILE BANNER",collectionName:N.CATEGORY_MOBILE_BANNER})]}),e(C,{media:a.media,deleteURL:"admin.delete.media.of.category",params:a})]})})}export{le as default};
