import{R as O,r as d,j as z}from"./app.05d98b2b.js";import{b as l,A,c as V}from"./AntdIcon.e4254bca.js";import{a as j,u as w}from"./motion.f08e8e94.js";import{m as U}from"./type.78b143b5.js";function G(e,o,a,n){var t=O.unstable_batchedUpdates?function(s){O.unstable_batchedUpdates(a,s)}:a;return e.addEventListener&&e.addEventListener(o,t,n),{remove:function(){e.removeEventListener&&e.removeEventListener(o,t,n)}}}function b(e){var o=d.exports.useRef();o.current=e;var a=d.exports.useCallback(function(){for(var n,t=arguments.length,i=new Array(t),s=0;s<t;s++)i[s]=arguments[s];return(n=o.current)===null||n===void 0?void 0:n.call.apply(n,[o].concat(i))},[]);return a}var c;(function(e){e[e.INNER=0]="INNER",e[e.PROP=1]="PROP"})(c||(c={}));function E(e){return e!==void 0}function H(e,o){var a=o||{},n=a.defaultValue,t=a.value,i=a.onChange,s=a.postState,x=U(function(){var r=void 0,u;return E(t)?(r=t,u=c.PROP):E(n)?(r=typeof n=="function"?n():n,u=c.PROP):(r=typeof e=="function"?e():e,u=c.INNER),[r,u,r]}),R=l(x,2),p=R[0],g=R[1],h=E(t)?t:p[0],I=s?s(h):h;j(function(){g(function(r){var u=l(r,1),v=u[0];return[t,c.PROP,v]})},[t]);var N=d.exports.useRef(),L=b(function(r,u){g(function(v){var f=l(v,3),m=f[0],M=f[1],P=f[2],y=typeof r=="function"?r(m):r;if(y===m)return v;var S=M===c.INNER&&N.current!==P?P:m;return[y,c.INNER,S]},u)}),_=b(i);return w(function(){var r=l(p,3),u=r[0],v=r[1],f=r[2];u!==f&&v===c.INNER&&(_(u,f),N.current=f)},[p]),[I,L]}var $={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"eye",theme:"outlined"};const F=$;var C=function(o,a){return z(A,{...V(V({},o),{},{ref:a,icon:F})})};C.displayName="EyeOutlined";const J=d.exports.forwardRef(C);export{J as E,G as a,b,H as u};