import{D as N}from"./dashboard.459fa67f.js";import{a as t,j as r,d as c}from"./app.57ea96d4.js";import{h as _}from"./index.m.9084c204.js";import{M as b}from"./MediaProductCollection.6eaed82b.js";import{U as o}from"./UploadImageComponent.fcb28f6b.js";import{S as l}from"./index.aa1569a8.js";import{F as i}from"./index.43bc0213.js";import{I as p}from"./index.b7069e3a.js";import{B as I}from"./button.83da31d2.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./inheritsLoose.ba053e4e.js";import"./assertThisInitialized.00356ca2.js";import"./index.ac14a42f.js";import"./AntdIcon.9099cb53.js";import"./index.b3d31cad.js";import"./EyeOutlined.a26274fe.js";import"./type.fc078fa7.js";import"./index.1c40f768.js";import"./css.9d8f816b.js";import"./DialogWrap.28d1e162.js";import"./getScrollBarSize.a52b5d22.js";import"./Helpers.8d8197a1.js";import"./index.d160e24d.js";import"./DeleteOutlined.ee06a15d.js";import"./_baseIsEqual.c8023920.js";import"./keys.6aad20e7.js";import"./styleChecker.82952e8e.js";var m=(e=>(e.CATEGORY_MOBILE_BANNER_CONVENTION="category_mobile_banner",e.CATEGORY_BIG_BANNER_CONVENTION="category_big_banner",e.CATEGORY_BIG_BANNER="category_big_banner",e.CATEGORY_MOBILE_BANNER="category_mobile_banner",e))(m||{});function q({currentCategory:e,locale:n,categories:d}){console.log(e);const s=d.map(a=>t(l.Option,{value:a.id,children:a.title[n]},a.id));return t(N,{children:r("div",{className:"m-5",children:[r(i,{onFinish:a=>{c.Inertia.post(_("admin.categories.update",e),a,{preserveState:!1})},labelCol:{span:2},wrapperCol:{span:20},size:"large",children:[t(i.Item,{name:"en",label:"Title EN",initialValue:e.title.en,children:t(p,{})}),t(i.Item,{name:"ar",label:"Title AR",initialValue:e.title.ar,children:t(p,{})}),t(i.Item,{name:"parent_id",label:"Category Parents",children:t(l,{placeholder:"Select A Parent",children:s})}),t(i.Item,{wrapperCol:{offset:2,span:1},children:t(I,{type:"default",htmlType:"submit",children:"SUBMIT"})})]}),t(o,{routeName:"admin.add.media.to.category",params:e,buttonLabel:"UPLOAD"}),t(o,{routeName:"admin.add.banner.to.category",params:e,buttonLabel:"UPLOAD BIG BANNER",collectionName:m.CATEGORY_BIG_BANNER}),t(o,{routeName:"admin.add.banner.to.category",params:e,buttonLabel:"UPLOAD MOBILE BANNER",collectionName:m.CATEGORY_MOBILE_BANNER}),t(b,{media:e.media,deleteURL:"admin.delete.media.of.category",params:e})]})})}export{q as default};