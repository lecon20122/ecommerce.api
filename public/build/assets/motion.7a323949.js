import{r as i,b as g}from"./app.c680bbd5.js";import{g as v}from"./index.52a35bea.js";import{t as h}from"./type.49ce19ba.js";function E(e,t){return e?e.contains(t):!1}var A=i.exports.forwardRef(function(e,t){var r=e.didUpdate,o=e.getContainer,p=e.children,a=i.exports.useRef(),n=i.exports.useRef();i.exports.useImperativeHandle(t,function(){return{}});var s=i.exports.useRef(!1);return!s.current&&v()&&(n.current=o(),a.current=n.current.parentNode,s.current=!0),i.exports.useEffect(function(){r==null||r(e)}),i.exports.useEffect(function(){return n.current.parentNode===null&&a.current!==null&&a.current.appendChild(n.current),function(){var u,c;(u=n.current)===null||u===void 0||(c=u.parentNode)===null||c===void 0||c.removeChild(n.current)}},[]),n.current?g.createPortal(p,n.current):null}),f=function(){return{height:0,opacity:0}},d=function(t){var r=t.scrollHeight;return{height:r,opacity:1}},m=function(t){return{height:t?t.offsetHeight:0}},l=function(t,r){return(r==null?void 0:r.deadline)===!0||r.propertyName==="height"},R={motionName:"ant-motion-collapse",onAppearStart:f,onEnterStart:f,onAppearActive:d,onEnterActive:d,onLeaveStart:m,onLeaveActive:f,onAppearEnd:l,onEnterEnd:l,onLeaveEnd:l,motionDeadline:500};h("bottomLeft","bottomRight","topLeft","topRight");var L=function(t){return t!==void 0&&(t==="topLeft"||t==="topRight")?"slide-down":"slide-up"},N=function(t,r,o){return o!==void 0?o:"".concat(t,"-").concat(r)};const T=R;export{A as P,T as a,L as b,E as c,N as g};
