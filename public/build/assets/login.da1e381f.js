import{u as l,j as e,a as s,d as n}from"./app.a2833a7e.js";import{h as m}from"./keys.854197f4.js";import{F as r}from"./index.344dbd91.js";import{I as t}from"./index.0b76f977.js";import{B as d}from"./styleChecker.ccce6752.js";import"./index.0579b088.js";function w(){const a=l().props.errors;console.log(a);const o=i=>{n.Inertia.post(m("admin.postLogin"),i,{preserveState:!1})};return e("div",{children:e("section",{className:"bg-gray-100 py-10 min-h-[86vh]",children:e("div",{className:"container max-w-screen-xl mx-auto px-4",children:s("div",{className:"mt-10 mb-20 p-4 md:p-7 mx-auto rounded bg-white shadow-lg max-w-[500px]",children:[a.email&&e("span",{className:"text-red-600",children:a.email}),e("h2",{className:"mb-5 text-2xl font-semibold",children:"Sign in"}),s(r,{size:"large",onFinish:o,children:[e(r.Item,{hasFeedback:!0,name:"email",wrapperCol:{span:24},rules:[{required:!0}],children:e(t,{placeholder:"Phone or Email"})}),e(r.Item,{hasFeedback:!0,name:"password",wrapperCol:{span:24},rules:[{required:!0}],children:e(t.Password,{placeholder:"Password"})}),e(r.Item,{className:"mx-auto",children:e(d,{type:"default",className:"uppercase text-white hover:text-white hover:dropshadow-lg hover:border-black",htmlType:"submit",style:{width:"100%",backgroundColor:"black"},children:"sign in"})}),e("div",{className:"flex justify-between content-center gap-4"})]})]})})})})}export{w as default};
