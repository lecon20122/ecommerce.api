import{F as m}from"./footer.688e241f.js";import{h as s}from"./keys.d090d6c3.js";import{u as n,a as r,j as e,d as p}from"./app.8ebb39ab.js";import{A as c}from"./index.7f1d9198.js";import{F as t}from"./index.d5db5b26.js";import{I as o}from"./index.1b7312b9.js";import{B as d}from"./button.a5c89774.js";import"./type.e0301de5.js";import"./AntdIcon.36ef1e71.js";import"./index.0579b088.js";import"./getDataOrAriaProps.c03198e8.js";import"./styleChecker.eaa03d50.js";import"./motion.bda44f0c.js";import"./EyeOutlined.2b9a9c38.js";function C(){const a=n().props.flash,i=l=>{p.Inertia.post(s("client.postLogin"),l,{preserveState:!1})};return r("div",{children:[r("div",{className:"my-20 p-4 md:p-7 mx-auto rounded bg-white shadow-lg max-w-[360px]",children:[a.message&&e(c,{message:a.message,type:"error",closable:!0}),e("h2",{className:"mb-5 text-2xl font-semibold text-center",children:"Sign in"}),r(t,{size:"large",onFinish:i,children:[e(t.Item,{hasFeedback:!0,name:"login",wrapperCol:{span:24},rules:[{required:!0}],children:e(o,{placeholder:"Phone or Email"})}),e(t.Item,{hasFeedback:!0,name:"password",wrapperCol:{span:24},rules:[{required:!0}],children:e(o.Password,{placeholder:"Password"})}),e(t.Item,{className:"mx-auto",children:e(d,{type:"default",className:"uppercase text-black hover:text-black hover:border-black",htmlType:"submit",style:{width:"100%",backgroundColor:"#CD867D"},children:"sign in"})}),r("div",{className:"flex justify-between content-center gap-4",children:[e("p",{className:"text-start mt-5",children:e("a",{className:"text-blue-500",href:s("client.signup"),children:"create new account"})}),e("a",{className:"text-blue-500 text-end mt-5",href:s("client.forget.password"),children:"forget password"})]})]})]}),e(m,{})]})}export{C as default};