import{r as l,a as V,j as i,F as Xe,R as wt,d as qe}from"./app.ceb08db3.js";import{h as Je}from"./index.m.4f4de470.js";import{_ as C,w as Qe,a as y,b as Z,c as Ee,d as $e,K as et,C as ht,A as Te,e as Ct,f as lt,g as ze,h as De,i as tt,B as rt}from"./getScrollBarSize.04a7ec97.js";import{u as ct,a as xe,E as xt}from"./index.76d28249.js";import{c as Q}from"./index.0579b088.js";import{g as Pt,a as St,L as yt,R as bt}from"./css.bcd79c42.js";import{D as Nt,P as Rt}from"./DialogWrap.a78243da.js";function Ot(r){var e=l.exports.useRef(null),o=l.exports.useState(r),t=C(o,2),a=t[0],v=t[1],s=l.exports.useRef([]),c=function(g){e.current===null&&(s.current=[],e.current=Qe(function(){v(function(f){var w=f;return s.current.forEach(function(x){w=y(y({},w),x)}),e.current=null,w})})),s.current.push(g)};return l.exports.useEffect(function(){return function(){return e.current&&Qe.cancel(e.current)}},[]),[a,c]}function ot(r,e,o,t){var a=e+o,v=(o-t)/2;if(o>t){if(e>0)return Z({},r,v);if(e<0&&a<t)return Z({},r,-v)}else if(e<0||a>t)return Z({},r,e<0?v:-v);return{}}function Mt(r,e,o,t){var a=Pt(),v=a.width,s=a.height,c=null;return r<=v&&e<=s?c={x:0,y:0}:(r>v||e>s)&&(c=y(y({},ot("x",o,r,v)),ot("y",t,e,s))),c}var _t=["visible","onVisibleChange","getContainer","current","countRender"],Be=l.exports.createContext({previewUrls:new Map,setPreviewUrls:function(){return null},current:null,setCurrent:function(){return null},setShowPreview:function(){return null},setMousePosition:function(){return null},registerImage:function(){return function(){return null}},rootClassName:""}),kt=Be.Provider,It=function(e){var o=e.previewPrefixCls,t=o===void 0?"rc-image-preview":o,a=e.children,v=e.icons,s=v===void 0?{}:v,c=e.preview,d=Ee(c)==="object"?c:{},g=d.visible,f=g===void 0?void 0:g,w=d.onVisibleChange,x=w===void 0?void 0:w,M=d.getContainer,_=M===void 0?void 0:M,L=d.current,U=L===void 0?0:L,ee=d.countRender,Y=ee===void 0?void 0:ee,le=$e(d,_t),Pe=l.exports.useState(new Map),ce=C(Pe,2),te=ce[0],re=ce[1],Se=l.exports.useState(),ue=C(Se,2),ve=ue[0],oe=ue[1],fe=ct(!!f,{value:f,onChange:x}),O=C(fe,2),k=O[0],de=O[1],ne=l.exports.useState(null),P=C(ne,2),H=P[0],ae=P[1],A=f!==void 0,b=Array.from(te.keys()),N=b[U],$=new Map(Array.from(te).filter(function(D){var h=C(D,2),E=h[1].canPreview;return!!E}).map(function(D){var h=C(D,2),E=h[0],T=h[1].url;return[E,T]})),z=function(h,E){var T=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,j=function(){re(function(X){var I=new Map(X),R=I.delete(h);return R?I:X})};return re(function(K){return new Map(K).set(h,{url:E,canPreview:T})}),j},pe=function(h){h.stopPropagation(),de(!1),ae(null)};return l.exports.useEffect(function(){oe(N)},[N]),l.exports.useEffect(function(){!k&&A&&oe(N)},[N,A,k]),V(kt,{value:{isPreviewGroup:!0,previewUrls:$,setPreviewUrls:re,current:ve,setCurrent:oe,setShowPreview:de,setMousePosition:ae,registerImage:z},children:[a,i(ut,{"aria-hidden":!k,visible:k,prefixCls:t,onClose:pe,mousePosition:H,src:$.get(ve),icons:s,getContainer:_,countRender:Y,...le})]})},Lt=["prefixCls","src","alt","onClose","afterClose","visible","icons","rootClassName","getContainer","countRender","scaleStep","transitionName","maskTransitionName"],Le=l.exports.useState,nt=l.exports.useEffect,$t=l.exports.useCallback,at=l.exports.useRef,zt=l.exports.useContext,se={x:0,y:0},ut=function(e){var o,t=e.prefixCls,a=e.src,v=e.alt,s=e.onClose;e.afterClose;var c=e.visible,d=e.icons,g=d===void 0?{}:d,f=e.rootClassName,w=e.getContainer,x=e.countRender,M=e.scaleStep,_=M===void 0?.5:M,L=e.transitionName,U=L===void 0?"zoom":L,ee=e.maskTransitionName,Y=ee===void 0?"fade":ee,le=$e(e,Lt),Pe=g.rotateLeft,ce=g.rotateRight,te=g.zoomIn,re=g.zoomOut,Se=g.close,ue=g.left,ve=g.right,oe=Le(1),fe=C(oe,2),O=fe[0],k=fe[1],de=Le(0),ne=C(de,2),P=ne[0],H=ne[1],ae=Ot(se),A=C(ae,2),b=A[0],N=A[1],$=at(),z=at({originX:0,originY:0,deltaX:0,deltaY:0}),pe=Le(!1),D=C(pe,2),h=D[0],E=D[1],T=zt(Be),j=T.previewUrls,K=T.current,X=T.isPreviewGroup,I=T.setCurrent,R=j.size,F=Array.from(j.keys()),S=F.indexOf(K),Ne=X?j.get(K):a,B=X&&R>1,me=X&&R>=1,Ge=Le({wheelDirection:0}),ye=C(Ge,2),Re=ye[0],Oe=ye[1],ge=function(){k(1),H(0),N(se)},q=function(){k(function(n){return n+_}),N(se)},we=function(){O>1&&k(function(n){return n-_}),N(se)},Ze=function(){H(function(n){return n+90})},Ve=function(){H(function(n){return n-90})},Ue=function(n){n.preventDefault(),n.stopPropagation(),S>0&&I(F[S-1])},Me=function(n){n.preventDefault(),n.stopPropagation(),S<R-1&&I(F[S+1])},He=Q(Z({},"".concat(t,"-moving"),h)),Ae="".concat(t,"-operations-operation"),be="".concat(t,"-operations-icon"),ie=[{icon:Se,onClick:s,type:"close"},{icon:te,onClick:q,type:"zoomIn"},{icon:re,onClick:we,type:"zoomOut",disabled:O===1},{icon:ce,onClick:Ze,type:"rotateRight"},{icon:Pe,onClick:Ve,type:"rotateLeft"}],he=function(){if(c&&h){var n=$.current.offsetWidth*O,p=$.current.offsetHeight*O,m=$.current.getBoundingClientRect(),W=m.left,J=m.top,G=P%180!==0;E(!1);var Ce=Mt(G?p:n,G?n:p,W,J);Ce&&N(y({},Ce))}},_e=function(n){n.button===0&&(n.preventDefault(),n.stopPropagation(),z.current.deltaX=n.pageX-b.x,z.current.deltaY=n.pageY-b.y,z.current.originX=b.x,z.current.originY=b.y,E(!0))},ke=function(n){c&&h&&N({x:n.pageX-z.current.deltaX,y:n.pageY-z.current.deltaY})},Fe=function(n){if(!!c){n.preventDefault();var p=n.deltaY;Oe({wheelDirection:p})}},Ie=$t(function(u){!c||!B||(u.keyCode===et.LEFT?S>0&&I(F[S-1]):u.keyCode===et.RIGHT&&S<R-1&&I(F[S+1]))},[S,R,F,I,B,c]),We=function(){c&&(O!==1&&k(1),(b.x!==se.x||b.y!==se.y)&&N(se))};nt(function(){var u=Re.wheelDirection;u>0?we():u<0&&q()},[Re]),nt(function(){var u,n,p=xe(window,"mouseup",he,!1),m=xe(window,"mousemove",ke,!1),W=xe(window,"wheel",Fe,{passive:!1}),J=xe(window,"keydown",Ie,!1);try{window.top!==window.self&&(u=xe(window.top,"mouseup",he,!1),n=xe(window.top,"mousemove",ke,!1))}catch{}return function(){var G,Ce;p.remove(),m.remove(),W.remove(),J.remove(),(G=u)===null||G===void 0||G.remove(),(Ce=n)===null||Ce===void 0||Ce.remove()}},[c,h,Ie]);var Ye=V(Xe,{children:[B&&i("div",{className:Q("".concat(t,"-switch-left"),Z({},"".concat(t,"-switch-left-disabled"),S===0)),onClick:Ue,children:ue}),B&&i("div",{className:Q("".concat(t,"-switch-right"),Z({},"".concat(t,"-switch-right-disabled"),S===R-1)),onClick:Me,children:ve}),V("ul",{className:"".concat(t,"-operations"),children:[me&&i("li",{className:"".concat(t,"-operations-progress"),children:(o=x==null?void 0:x(S+1,R))!==null&&o!==void 0?o:"".concat(S+1," / ").concat(R)}),ie.map(function(u){var n,p=u.icon,m=u.onClick,W=u.type,J=u.disabled;return i("li",{className:Q(Ae,(n={},Z(n,"".concat(t,"-operations-operation-").concat(W),!0),Z(n,"".concat(t,"-operations-operation-disabled"),!!J),n)),onClick:m,children:l.exports.isValidElement(p)?l.exports.cloneElement(p,{className:be}):p},W)})]})]});return V(Xe,{children:[i(Nt,{transitionName:U,maskTransitionName:Y,closable:!1,keyboard:!0,prefixCls:t,onClose:s,afterClose:ge,visible:c,wrapClassName:He,rootClassName:f,getContainer:w,...le,children:i("div",{className:"".concat(t,"-img-wrapper"),style:{transform:"translate3d(".concat(b.x,"px, ").concat(b.y,"px, 0)")},children:i("img",{width:e.width,height:e.height,onMouseDown:_e,onDoubleClick:We,ref:$,className:"".concat(t,"-img"),src:Ne,alt:v,style:{transform:"scale3d(".concat(O,", ").concat(O,", 1) rotate(").concat(P,"deg)")}})})}),i(ht,{visible:c,motionName:Y,children:function(u){var n=u.className,p=u.style;return i(Rt,{open:!0,getContainer:w,children:i("div",{className:Q("".concat(t,"-operations-wrapper"),n,f),style:p,children:Ye})})}})]})},Dt=["src","alt","onPreviewClose","prefixCls","previewPrefixCls","placeholder","fallback","width","height","style","preview","className","onClick","onError","wrapperClassName","wrapperStyle","rootClassName","crossOrigin","decoding","loading","referrerPolicy","sizes","srcSet","useMap","draggable"],Et=["src","visible","onVisibleChange","getContainer","mask","maskClassName","icons","scaleStep"],it=0,je=function(e){var o,t=e.src,a=e.alt,v=e.onPreviewClose,s=e.prefixCls,c=s===void 0?"rc-image":s,d=e.previewPrefixCls,g=d===void 0?"".concat(c,"-preview"):d,f=e.placeholder,w=e.fallback,x=e.width,M=e.height,_=e.style,L=e.preview,U=L===void 0?!0:L,ee=e.className,Y=e.onClick,le=e.onError,Pe=e.wrapperClassName,ce=e.wrapperStyle,te=e.rootClassName,re=e.crossOrigin,Se=e.decoding,ue=e.loading,ve=e.referrerPolicy,oe=e.sizes,fe=e.srcSet,O=e.useMap,k=e.draggable,de=$e(e,Dt),ne=f&&f!==!0,P=Ee(U)==="object"?U:{},H=P.src,ae=P.visible,A=ae===void 0?void 0:ae,b=P.onVisibleChange,N=b===void 0?v:b,$=P.getContainer,z=$===void 0?void 0:$,pe=P.mask,D=P.maskClassName,h=P.icons,E=P.scaleStep,T=$e(P,Et),j=H!=null?H:t,K=A!==void 0,X=ct(!!A,{value:A,onChange:N}),I=C(X,2),R=I[0],F=I[1],S=l.exports.useState(ne?"loading":"normal"),Ne=C(S,2),B=Ne[0],me=Ne[1],Ge=l.exports.useState(null),ye=C(Ge,2),Re=ye[0],Oe=ye[1],ge=B==="error",q=l.exports.useContext(Be),we=q.isPreviewGroup,Ze=q.setCurrent,Ve=q.setShowPreview,Ue=q.setMousePosition,Me=q.registerImage,He=l.exports.useState(function(){return it+=1,it}),Ae=C(He,1),be=Ae[0],ie=!!U,he=l.exports.useRef(!1),_e=function(){me("normal")},ke=function(m){le&&le(m),me("error")},Fe=function(m){if(!K){var W=St(m.target),J=W.left,G=W.top;we?(Ze(be),Ue({x:J,y:G})):Oe({x:J,y:G})}we?Ve(!0):F(!0),Y&&Y(m)},Ie=function(m){m.stopPropagation(),F(!1),K||Oe(null)},We=function(m){he.current=!1,B==="loading"&&m!=null&&m.complete&&(m.naturalWidth||m.naturalHeight)&&(he.current=!0,_e())};l.exports.useEffect(function(){var p=Me(be,j);return p},[]),l.exports.useEffect(function(){Me(be,j,ie)},[j,ie]),l.exports.useEffect(function(){ge&&me("normal"),ne&&!he.current&&me("loading")},[t]);var Ye=Q(c,Pe,te,Z({},"".concat(c,"-error"),ge)),u=ge&&w?w:j,n={crossOrigin:re,decoding:Se,draggable:k,loading:ue,referrerPolicy:ve,sizes:oe,srcSet:fe,useMap:O,alt:a,className:Q("".concat(c,"-img"),Z({},"".concat(c,"-img-placeholder"),f===!0),ee),style:y({height:M},_)};return V(Xe,{children:[V("div",{...de,className:Ye,onClick:ie?Fe:Y,style:y({width:x,height:M},ce),children:[i("img",{...n,ref:We,...ge&&w?{src:w}:{onLoad:_e,onError:ke,src:t},width:x,height:M}),B==="loading"&&i("div",{"aria-hidden":"true",className:"".concat(c,"-placeholder"),children:f}),pe&&ie&&i("div",{className:Q("".concat(c,"-mask"),D),style:{display:((o=n.style)===null||o===void 0?void 0:o.display)==="none"?"none":void 0},children:pe})]}),!we&&ie&&i(ut,{"aria-hidden":!R,visible:R,prefixCls:g,onClose:Ie,mousePosition:Re,src:u,alt:a,getContainer:z,icons:h,scaleStep:E,rootClassName:te,...T})]})};je.PreviewGroup=It;je.displayName="Image";var Tt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H188V494h440v326z"}},{tag:"path",attrs:{d:"M819.3 328.5c-78.8-100.7-196-153.6-314.6-154.2l-.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7.4 12.6-6.1v-63.9c12.9.1 25.9.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8a325.95 325.95 0 016.5 140.9h74.9c14.8-103.6-11.3-213-81-302.3z"}}]},name:"rotate-left",theme:"outlined"};const jt=Tt;var vt=function(e,o){return i(Te,{...y(y({},e),{},{ref:o,icon:jt})})};vt.displayName="RotateLeftOutlined";const Gt=l.exports.forwardRef(vt);var Zt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-.4-12.6 6.1l-.2 64c-118.6.5-235.8 53.4-314.6 154.2A399.75 399.75 0 00123.5 631h74.9c-.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8z"}},{tag:"path",attrs:{d:"M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H396V494h440v326z"}}]},name:"rotate-right",theme:"outlined"};const Vt=Zt;var ft=function(e,o){return i(Te,{...y(y({},e),{},{ref:o,icon:Vt})})};ft.displayName="RotateRightOutlined";const Ut=l.exports.forwardRef(ft);var Ht={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"}}]},name:"zoom-in",theme:"outlined"};const At=Ht;var dt=function(e,o){return i(Te,{...y(y({},e),{},{ref:o,icon:At})})};dt.displayName="ZoomInOutlined";const Ft=l.exports.forwardRef(dt);var Wt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"}}]},name:"zoom-out",theme:"outlined"};const Yt=Wt;var pt=function(e,o){return i(Te,{...y(y({},e),{},{ref:o,icon:Yt})})};pt.displayName="ZoomOutOutlined";const Kt=l.exports.forwardRef(pt);var Xt=globalThis&&globalThis.__rest||function(r,e){var o={};for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&e.indexOf(t)<0&&(o[t]=r[t]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(r);a<t.length;a++)e.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(r,t[a])&&(o[t[a]]=r[t[a]]);return o},mt={rotateLeft:i(Gt,{}),rotateRight:i(Ut,{}),zoomIn:i(Ft,{}),zoomOut:i(Kt,{}),close:i(Ct,{}),left:i(yt,{}),right:i(bt,{})},Bt=function(e){var o=e.previewPrefixCls,t=e.preview,a=Xt(e,["previewPrefixCls","preview"]),v=l.exports.useContext(lt),s=v.getPrefixCls,c=s("image-preview",o),d=s(),g=l.exports.useMemo(function(){if(t===!1)return t;var f=Ee(t)==="object"?t:{};return ze(ze({},f),{transitionName:De(d,"zoom",f.transitionName),maskTransitionName:De(d,"fade",f.maskTransitionName)})},[t]);return i(je.PreviewGroup,{preview:g,previewPrefixCls:c,icons:mt,...a})};const qt=Bt;var st=globalThis&&globalThis.__rest||function(r,e){var o={};for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&e.indexOf(t)<0&&(o[t]=r[t]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(r);a<t.length;a++)e.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(r,t[a])&&(o[t[a]]=r[t[a]]);return o},gt=function(e){var o=e.prefixCls,t=e.preview,a=st(e,["prefixCls","preview"]),v=l.exports.useContext(lt),s=v.getPrefixCls,c=v.locale,d=c===void 0?tt:c,g=v.getPopupContainer,f=s("image",o),w=s(),x=d.Image||tt.Image,M=l.exports.useMemo(function(){if(t===!1)return t;var _=Ee(t)==="object"?t:{},L=_.getContainer,U=st(_,["getContainer"]);return ze(ze({mask:V("div",{className:"".concat(f,"-mask-info"),children:[i(xt,{}),x==null?void 0:x.preview]}),icons:mt},U),{getContainer:L||g,transitionName:De(w,"zoom",_.transitionName),maskTransitionName:De(w,"fade",_.maskTransitionName)})},[t,x]);return i(je,{prefixCls:f,preview:M,...a})};gt.PreviewGroup=qt;const Ke=gt;function ar({deleteURL:r,media:e,params:o,variationColor:t}){wt.useState(!1);const a=s=>{qe.Inertia.post(Je(r,o),{id:s})},v=s=>{s&&qe.Inertia.post(Je(r,o),{id:s})};return i("div",{className:"flex flex-wrap my-2",children:V(Ke.PreviewGroup,{children:[e==null?void 0:e.map((s,c)=>V("div",{className:"flex-[1_1_60px] my-1",children:[i(Ke,{src:s.big_banner||s.mobile_banner||s.thumbnail,className:"px-1 aspect-[2/3] w-[60px] h-[90px] md:w-[120px] md:h-[180px] object-contain"}),i(rt,{type:"dashed",danger:!0,className:"flex",onClick:d=>a(s.id),children:"Delete"})]},s.id)),t&&V("div",{className:"flex-[1_1_60px] my-1",children:[i(Ke,{src:t==null?void 0:t.color,className:"px-1 aspect-[2/3] w-[60px] h-[90px] md:w-[120px] md:h-[180px] object-contain"}),i(rt,{type:"dashed",danger:!0,className:"flex",onClick:s=>v(t==null?void 0:t.id),children:"Delete"})]},t==null?void 0:t.id)]})})}export{ar as M};