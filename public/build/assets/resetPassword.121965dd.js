import{F as n}from"./footer.6c1d7ed6.js";import{h as i}from"./keys.803c8f62.js";import{u as c,a as r,j as e,d as p}from"./app.d710d3a0.js";import{A as m}from"./index.30d11d86.js";import{F as s}from"./index.88fbad69.js";import{I as d}from"./index.019122c7.js";import{B as h}from"./button.c8e79373.js";import"./type.56242472.js";import"./AntdIcon.68d65bfe.js";import"./index.0579b088.js";import"./getDataOrAriaProps.c03198e8.js";import"./styleChecker.5154723a.js";import"./motion.ed3cbe56.js";import"./EyeOutlined.1cdb38a3.js";function A(){const o=l=>{p.Inertia.post(i("client.forget.password.sent.link"),l,{preserveState:!1})},{errors:t,flash:a}=c().props;return r("div",{children:[e("div",{className:"h-[60vh] flex justify-center items-center",children:r("div",{className:"my-20 p-4 md:p-7 mx-auto rounded bg-white shadow-lg w-[360px]",children:[t.email&&e(m,{className:"my-4",message:t.email,type:"warning",closable:!0}),a.message&&e(m,{className:"my-4",message:a.message,type:"success",closable:!0}),r(s,{size:"large",wrapperCol:{span:24},onFinish:o,children:[e(s.Item,{name:"email",hasFeedback:!0,rules:[{required:!0,type:"email"}],children:e(d,{placeholder:"email address"})}),e(s.Item,{className:"mx-auto",children:e(h,{type:"default",className:"uppercase text-black hover:text-black hover:border-black",htmlType:"submit",style:{width:"100%",backgroundColor:"#CD867D"},children:"send reset link"})})]}),r("p",{className:"text-center mt-5",children:["already got it? ",e("a",{className:"text-blue-500",href:i("client.login"),children:"Sign in"})]})]})}),e(n,{})]})}export{A as default};