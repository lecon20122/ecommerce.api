import{_ as j}from"./setPrototypeOf.b405c108.js";import{a as Q,b as m}from"./AntdIcon.fd091de9.js";import{e as U,f as V,b as W,_ as X,a as Y,g as Z,C as ee,j as oe,I as ne,k as re,E as te,l as se,m as ae,n as ce,o as le}from"./type.ec2030a4.js";import{c as N}from"./index.b3d31cad.js";import{a,r as C,j as A}from"./app.265b5776.js";import{g as ie}from"./getDataOrAriaProps.08708643.js";import{r as de}from"./button.79a73c16.js";var ue=function(s){U(r,s);var e=V(r);function r(){var o;return W(this,r),o=e.apply(this,arguments),o.state={error:void 0,info:{componentStack:""}},o}return X(r,[{key:"componentDidCatch",value:function(n,c){this.setState({error:n,info:c})}},{key:"render",value:function(){var n=this.props,c=n.message,l=n.description,v=n.children,h=this.state,x=h.error,d=h.info,y=d&&d.componentStack?d.componentStack:null,g=typeof c>"u"?(x||"").toString():c,b=typeof l>"u"?y:l;return x?a(he,{type:"error",message:g,description:a("pre",{children:b})}):v}}]),r}(C.exports.Component),fe=globalThis&&globalThis.__rest||function(s,e){var r={};for(var o in s)Object.prototype.hasOwnProperty.call(s,o)&&e.indexOf(o)<0&&(r[o]=s[o]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,o=Object.getOwnPropertySymbols(s);n<o.length;n++)e.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(s,o[n])&&(r[o[n]]=s[o[n]]);return r},pe={success:oe,info:ne,error:re,warning:te},me={success:se,info:ae,error:ce,warning:le},Ce=function(e){var r=e.description,o=e.icon,n=e.prefixCls,c=e.type,l=(r?me:pe)[c]||null;return o?de(o,a("span",{className:"".concat(n,"-icon"),children:o}),function(){return{className:N("".concat(n,"-icon"),m({},o.props.className,o.props.className))}}):C.exports.createElement(l,{className:"".concat(n,"-icon")})},ve=function(e){var r=e.isClosable,o=e.closeText,n=e.prefixCls,c=e.closeIcon,l=e.handleClose;return r?a("button",{type:"button",onClick:l,className:"".concat(n,"-close-icon"),tabIndex:0,children:o?a("span",{className:"".concat(n,"-close-text"),children:o}):c}):null},_=function(e){var r,o=e.description,n=e.prefixCls,c=e.message,l=e.banner,v=e.className,h=v===void 0?"":v,x=e.style,d=e.onMouseEnter,y=e.onMouseLeave,g=e.onClick,b=e.afterClose,I=e.showIcon,$=e.closable,S=e.closeText,O=e.closeIcon,L=O===void 0?a(ee,{}):O,k=e.action,u=fe(e,["description","prefixCls","message","banner","className","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action"]),F=C.exports.useState(!1),E=Q(F,2),w=E[0],D=E[1],R=C.exports.useRef(),M=C.exports.useContext(Y),B=M.getPrefixCls,H=M.direction,t=B("alert",n),z=function(i){var p;D(!0),(p=u.onClose)===null||p===void 0||p.call(u,i)},q=function(){var i=u.type;return i!==void 0?i:l?"warning":"info"},G=S?!0:$,T=q(),P=l&&I===void 0?!0:I,J=N(t,"".concat(t,"-").concat(T),(r={},m(r,"".concat(t,"-with-description"),!!o),m(r,"".concat(t,"-no-icon"),!P),m(r,"".concat(t,"-banner"),!!l),m(r,"".concat(t,"-rtl"),H==="rtl"),r),h),K=ie(u);return a(Z,{visible:!w,motionName:"".concat(t,"-motion"),motionAppear:!1,motionEnter:!1,onLeaveStart:function(i){return{maxHeight:i.offsetHeight}},onLeaveEnd:b,children:function(f){var i=f.className,p=f.style;return A("div",{ref:R,"data-show":!w,className:N(J,i),style:j(j({},x),p),onMouseEnter:d,onMouseLeave:y,onClick:g,role:"alert",...K,children:[P?a(Ce,{description:o,icon:u.icon,prefixCls:t,type:T}):null,A("div",{className:"".concat(t,"-content"),children:[c?a("div",{className:"".concat(t,"-message"),children:c}):null,o?a("div",{className:"".concat(t,"-description"),children:o}):null]}),k?a("div",{className:"".concat(t,"-action"),children:k}):null,a(ve,{isClosable:!!G,closeText:S,prefixCls:t,closeIcon:L,handleClose:z})]})}})};_.ErrorBoundary=ue;const he=_;export{he as A};
