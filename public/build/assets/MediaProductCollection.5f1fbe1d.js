import{R as o,j as a,a as c,d as i}from"./app.aca9060c.js";import{h as d}from"./keys.d0968214.js";import{I as r}from"./index.8176bd91.js";import{B as p}from"./button.a0b22791.js";function j({deleteURL:n,media:s,params:t}){o.useState(!1);const l=e=>{i.Inertia.post(d(n,t),{id:e})};return a("div",{className:"flex flex-wrap my-2",children:a(r.PreviewGroup,{children:s==null?void 0:s.map((e,x)=>c("div",{className:"flex-[1_1_60px] my-1",children:[a(r,{src:e.big_banner||e.mobile_banner||e.thumbnail,className:"px-1 aspect-[2/3] w-[60px] h-[90px] md:w-[120px] md:h-[180px] object-contain"}),a(p,{type:"dashed",danger:!0,className:"flex",onClick:m=>l(e.id),children:"Delete"})]},e.id))})})}export{j as M};
