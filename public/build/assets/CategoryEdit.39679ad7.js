import{D as N}from"./dashboard.a92543c4.js";import{a as t,j as r,d as c}from"./app.07f21977.js";import{h as _}from"./index.m.9084c204.js";import{M as b}from"./MediaProductCollection.b4bfa9ca.js";import{U as o}from"./UploadImageComponent.1284ceb9.js";import{S as l}from"./index.af76766d.js";import{F as i}from"./index.834946a8.js";import{I as p}from"./index.fede4dfe.js";import{B as I}from"./button.ebbff3e1.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./inheritsLoose.ba053e4e.js";import"./assertThisInitialized.00356ca2.js";import"./index.6838c0aa.js";import"./AntdIcon.2c94cd5b.js";import"./index.b3d31cad.js";import"./EyeOutlined.61ee9235.js";import"./type.f4016028.js";import"./index.1c40f768.js";import"./css.59a90f7a.js";import"./DialogWrap.40ec19cf.js";import"./getScrollBarSize.4787b498.js";import"./Helpers.2abe9344.js";import"./index.95e4e9fb.js";import"./DeleteOutlined.02139ce3.js";import"./_baseIsEqual.0f704b58.js";import"./keys.062b0b40.js";import"./styleChecker.2a90745c.js";var m=(e=>(e.CATEGORY_MOBILE_BANNER_CONVENTION="category_mobile_banner",e.CATEGORY_BIG_BANNER_CONVENTION="category_big_banner",e.CATEGORY_BIG_BANNER="category_big_banner",e.CATEGORY_MOBILE_BANNER="category_mobile_banner",e))(m||{});function q({currentCategory:e,locale:n,categories:d}){console.log(e);const s=d.map(a=>t(l.Option,{value:a.id,children:a.title[n]},a.id));return t(N,{children:r("div",{className:"m-5",children:[r(i,{onFinish:a=>{c.Inertia.post(_("admin.categories.update",e),a,{preserveState:!1})},labelCol:{span:2},wrapperCol:{span:20},size:"large",children:[t(i.Item,{name:"en",label:"Title EN",initialValue:e.title.en,children:t(p,{})}),t(i.Item,{name:"ar",label:"Title AR",initialValue:e.title.ar,children:t(p,{})}),t(i.Item,{name:"parent_id",label:"Category Parents",children:t(l,{placeholder:"Select A Parent",children:s})}),t(i.Item,{wrapperCol:{offset:2,span:1},children:t(I,{type:"default",htmlType:"submit",children:"SUBMIT"})})]}),t(o,{routeName:"admin.add.media.to.category",params:e,buttonLabel:"UPLOAD"}),t(o,{routeName:"admin.add.banner.to.category",params:e,buttonLabel:"UPLOAD BIG BANNER",collectionName:m.CATEGORY_BIG_BANNER}),t(o,{routeName:"admin.add.banner.to.category",params:e,buttonLabel:"UPLOAD MOBILE BANNER",collectionName:m.CATEGORY_MOBILE_BANNER}),t(b,{media:e.media,deleteURL:"admin.delete.media.of.category",params:e})]})})}export{q as default};
