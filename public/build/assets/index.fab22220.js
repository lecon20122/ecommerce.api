import{g as y,m as z,r as C,f as O,c as j}from"./zoom.31902251.js";import{r as M,j as g}from"./app.f8169ae9.js";const P=t=>{const{componentCls:e,sizePaddingEdgeHorizontal:o,colorSplit:r,lineWidth:i}=t;return{[e]:Object.assign(Object.assign({},C(t)),{borderBlockStart:`${i}px solid ${r}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",margin:`0 ${t.dividerVerticalGutterMargin}px`,verticalAlign:"middle",borderTop:0,borderInlineStart:`${i}px solid ${r}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${t.dividerHorizontalGutterMargin}px 0`},[`&-horizontal${e}-with-text`]:{display:"flex",alignItems:"center",margin:`${t.dividerHorizontalWithTextGutterMargin}px 0`,color:t.colorTextHeading,fontWeight:500,fontSize:t.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${r}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${i}px solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${e}-with-text-left`]:{"&::before":{width:"5%"},"&::after":{width:"95%"}},[`&-horizontal${e}-with-text-right`]:{"&::before":{width:"95%"},"&::after":{width:"5%"}},[`${e}-inner-text`]:{display:"inline-block",padding:"0 1em"},"&-dashed":{background:"none",borderColor:r,borderStyle:"dashed",borderWidth:`${i}px 0 0`},[`&-horizontal${e}-with-text${e}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${e}-dashed`]:{borderInlineStart:i,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${e}-with-text`]:{color:t.colorText,fontWeight:"normal",fontSize:t.fontSize},[`&-horizontal${e}-with-text-left${e}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${e}-inner-text`]:{paddingInlineStart:o}},[`&-horizontal${e}-with-text-right${e}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${e}-inner-text`]:{paddingInlineEnd:o}}})}},G=y("Divider",t=>{const e=z(t,{dividerVerticalGutterMargin:t.marginXS,dividerHorizontalWithTextGutterMargin:t.margin,dividerHorizontalGutterMargin:t.marginLG});return[P(e)]},{sizePaddingEdgeHorizontal:0});var H=globalThis&&globalThis.__rest||function(t,e){var o={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(o[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(o[r[i]]=t[r[i]]);return o};const I=t=>{const{getPrefixCls:e,direction:o}=M.exports.useContext(O),{prefixCls:r,type:i="horizontal",orientation:a="center",orientationMargin:l,className:f,rootClassName:p,children:d,dashed:m,plain:x}=t,b=H(t,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","plain"]),n=e("divider",r),[$,S]=G(n),u=a.length>0?`-${a}`:a,s=!!d,c=a==="left"&&l!=null,h=a==="right"&&l!=null,w=j(n,S,`${n}-${i}`,{[`${n}-with-text`]:s,[`${n}-with-text${u}`]:s,[`${n}-dashed`]:!!m,[`${n}-plain`]:!!x,[`${n}-rtl`]:o==="rtl",[`${n}-no-default-orientation-margin-left`]:c,[`${n}-no-default-orientation-margin-right`]:h},f,p),v=Object.assign(Object.assign({},c&&{marginLeft:l}),h&&{marginRight:l});return $(g("div",{...Object.assign({className:w},b,{role:"separator"}),children:d&&i!=="vertical"&&g("span",{className:`${n}-inner-text`,style:v,children:d})}))},E=I;export{E as D};
