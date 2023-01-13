import g from"./dashboard.92fa2374.js";import{r as P,a as l,j as e,d as u}from"./app.05d98b2b.js";import{h as O}from"./keys.dc1ba59b.js";import{M as G}from"./MediaProductCollection.df4996d8.js";import{P as U,H as C,I as x}from"./Helpers.835ce3c4.js";import{F as t}from"./index.1703942c.js";import{U as F}from"./index.22aa7e31.js";import{B as A}from"./button.e3d0d8df.js";import{S as f}from"./index.5fe68930.js";import{I as r}from"./index.b080db98.js";import"./should-render.b45b9b3a.js";import"./index.0579b088.js";import"./index.ddf7583b.js";import"./index.5123929a.js";import"./type.78b143b5.js";import"./AntdIcon.e4254bca.js";import"./EyeOutlined.1a5765e6.js";import"./motion.f08e8e94.js";import"./css.b44396a7.js";import"./DialogWrap.fd96f328.js";import"./getScrollBarSize.eeac028d.js";import"./DownOutlined.84767be8.js";import"./styleChecker.57d5d447.js";import"./useForceUpdate.8702b647.js";import"./DeleteOutlined.de530464.js";function c({formClassName:a,buttonLabel:n="UPLOAD",routeName:m,params:s,wrapperCol:h,labelCol:o,buttonWrapperCol:B,collectionName:E}){const[p,b]=P.exports.useState([]),L=new C,I=i=>{const d={...i,collection_name:E};u.Inertia.post(O(m,s),d,{preserveState:!1})},R=i=>{i.images&&(i.images=L.appendImageToFormData(p)),I(i)},T=i=>{b(i.fileList)},y=i=>{const d=p.indexOf(i),_=p.slice();_.splice(d,1),b(_)};return l(t,{className:a,onFinish:R,labelCol:o,wrapperCol:h,children:[e(t.Item,{name:"images",valuePropName:"images",children:e(F,{listType:"picture-card",onRemove:y,onChange:i=>T(i),children:l("div",{children:[e(U,{}),e("div",{style:{marginTop:8},children:"Upload"})]})})}),e(t.Item,{wrapperCol:B,children:e(A,{type:"default",className:"uppercase",htmlType:"submit",children:n})})]})}var N=(a=>(a.CATEGORY_MOBILE_BANNER_CONVENTION="category_mobile_banner",a.CATEGORY_BIG_BANNER_CONVENTION="category_big_banner",a.CATEGORY_BIG_BANNER="category_big_banner",a.CATEGORY_MOBILE_BANNER="category_mobile_banner",a))(N||{});function re({currentCategory:a,locale:n,categories:m}){const s=m.map(o=>e(f.Option,{value:o.id,children:o.title[n]},o.id));return e(g,{children:l("div",{className:"m-5",children:[l(t,{onFinish:o=>{u.Inertia.post(O("admin.categories.update",a),o,{preserveState:!1})},labelCol:{span:2},wrapperCol:{span:20},size:"large",children:[e(t.Item,{name:"en",label:"Title EN",initialValue:a.title.en,children:e(r,{})}),e(t.Item,{name:"ar",label:"Title AR",initialValue:a.title.ar,children:e(r,{})}),e(t.Item,{name:"order",label:"Order",initialValue:a.order,children:e(x,{})}),e(t.Item,{name:"primary_color",label:"Primary Color",initialValue:a.primary_color,children:e(r,{style:{backgroundColor:a.primary_color}})}),e(t.Item,{name:"secondary_color",label:"Secondary Color",initialValue:a.secondary_color,children:e(r,{style:{backgroundColor:a.secondary_color}})}),e(t.Item,{name:"parent_id",label:"Category Parents",children:e(f,{allowClear:!0,placeholder:"Select A Parent",children:s})}),e(t.Item,{wrapperCol:{offset:2,span:1},children:e(A,{type:"default",htmlType:"submit",children:"SUBMIT"})})]}),l("div",{className:"flex justify-center gap-4 flex-wrap",children:[e(c,{routeName:"admin.add.media.to.category",params:a,buttonLabel:"UPLOAD Category Thumbnail"}),e(c,{routeName:"admin.add.banner.to.category",params:a,buttonLabel:"UPLOAD BIG BANNER",collectionName:N.CATEGORY_BIG_BANNER}),e(c,{routeName:"admin.add.banner.to.category",params:a,buttonLabel:"UPLOAD MOBILE BANNER",collectionName:N.CATEGORY_MOBILE_BANNER})]}),e(G,{media:a.media,deleteURL:"admin.delete.media.of.category",params:a})]})})}export{re as default};