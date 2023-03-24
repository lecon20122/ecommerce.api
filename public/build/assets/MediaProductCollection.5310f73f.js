import{r as u,a as q,j as s,F as Ne,R as xt,d as Ve}from"./app.04e98356.js";import{h as We}from"./index.m.4f4de470.js";import{E as St}from"./index.911498e1.js";import{f as ot,l as Oe,d as B,a as ie,m as te,C as bt,ao as Pt,w as yt,_ as R,K as Fe,A as Le,F as Mt,T as we,G as Ke,H as It,E as Nt,J as Ot,X as Rt,M as it,U as Re,a0 as Qe}from"./zoom.04333ec9.js";import{a as at,g as Lt}from"./css.d6e3059f.js";import{u as _e}from"./PlusOutlined.48cf1d9a.js";import{D as Tt,g as $t,i as zt}from"./index.2d34d516.js";import{b as Pe,L as At,a as jt}from"./new-dashboard-layout.e3be5f72.js";import{S as Je}from"./SwapOutlined.2398bb84.js";import{B as qe}from"./styleChecker.1415b972.js";var Et=["visible","onVisibleChange","getContainer","current","countRender","onChange"],Xe=u.exports.createContext({previewUrls:new Map,setPreviewUrls:function(){return null},current:null,setCurrent:function(){return null},setShowPreview:function(){return null},setMousePosition:function(){return null},registerImage:function(){return function(){return null}},rootClassName:""}),kt=Xe.Provider;function ke(t,e){if(e!==void 0){var r=t.indexOf(e);if(r!==-1)return r}}var Dt=function(e){var r=e.previewPrefixCls,n=r===void 0?"rc-image-preview":r,i=e.children,a=e.icons,o=a===void 0?{}:a,d=e.preview,l=ot(d)==="object"?d:{},b=l.visible,v=b===void 0?void 0:b,p=l.onVisibleChange,w=p===void 0?void 0:p,g=l.getContainer,C=g===void 0?void 0:g,L=l.current,z=L===void 0?0:L,_=l.countRender,Z=_===void 0?void 0:_,A=l.onChange,j=A===void 0?void 0:A,G=Oe(l,Et),P=u.exports.useState(new Map),Y=B(P,2),V=Y[0],I=Y[1],E=Array.from(V.keys()),H=u.exports.useRef(),W=_e(void 0,{onChange:function(m,$){H.current!==void 0&&(j==null||j(ke(E,m),ke(E,$))),H.current=$}}),k=B(W,2),y=k[0],N=k[1],x=_e(!!v,{value:v,onChange:function(m,$){w==null||w(m,$,ke(E,y)),H.current=m?y:void 0}}),M=B(x,2),O=M[0],F=M[1],D=u.exports.useState(null),f=B(D,2),U=f[0],S=f[1],K=v!==void 0,T=E[z],X=new Map(Array.from(V).filter(function(Q){var m=B(Q,2),$=m[1].canPreview;return!!$}).map(function(Q){var m=B(Q,2),$=m[0],le=m[1].url;return[$,le]})),he=function(m,$){var le=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,ve=function(){I(function(ue){var pe=new Map(ue),de=pe.delete(m);return de?pe:ue})};return I(function(ce){return new Map(ce).set(m,{url:$,canPreview:le})}),ve},Ce=function(m){m.stopPropagation(),F(!1),S(null)};return u.exports.useEffect(function(){N(T)},[T]),u.exports.useEffect(function(){!O&&K&&N(T)},[T,K,O]),q(kt,{value:{isPreviewGroup:!0,previewUrls:X,setPreviewUrls:I,current:y,setCurrent:N,setShowPreview:F,setMousePosition:S,registerImage:he},children:[i,s(st,{"aria-hidden":!O,visible:O,prefixCls:n,onClose:Ce,mousePosition:U,src:X.get(y),icons:o,getContainer:C,countRender:Z,...G})]})},Me=1,Ie=50,ye=1,_t=1,Yt=function(e){var r,n=e.visible,i=e.maskTransitionName,a=e.getContainer,o=e.prefixCls,d=e.rootClassName,l=e.icons,b=e.countRender,v=e.showSwitch,p=e.showProgress,w=e.current,g=e.count,C=e.scale,L=e.onSwitchLeft,z=e.onSwitchRight,_=e.onClose,Z=e.onZoomIn,A=e.onZoomOut,j=e.onRotateRight,G=e.onRotateLeft,P=e.onFlipX,Y=e.onFlipY,V=l.rotateLeft,I=l.rotateRight,E=l.zoomIn,H=l.zoomOut,W=l.close,k=l.left,y=l.right,N=l.flipX,x=l.flipY,M="".concat(o,"-operations-operation"),O="".concat(o,"-operations-icon"),F=[{icon:W,onClick:_,type:"close"},{icon:E,onClick:Z,type:"zoomIn",disabled:C===Ie},{icon:H,onClick:A,type:"zoomOut",disabled:C===Me},{icon:I,onClick:j,type:"rotateRight"},{icon:V,onClick:G,type:"rotateLeft"},{icon:N,onClick:P,type:"flipX"},{icon:x,onClick:Y,type:"flipY"}],D=q(Ne,{children:[v&&q(Ne,{children:[s("div",{className:ie("".concat(o,"-switch-left"),te({},"".concat(o,"-switch-left-disabled"),w===0)),onClick:L,children:k}),s("div",{className:ie("".concat(o,"-switch-right"),te({},"".concat(o,"-switch-right-disabled"),w===g-1)),onClick:z,children:y})]}),q("ul",{className:"".concat(o,"-operations"),children:[p&&s("li",{className:"".concat(o,"-operations-progress"),children:(r=b==null?void 0:b(w+1,g))!==null&&r!==void 0?r:"".concat(w+1," / ").concat(g)}),F.map(function(f){var U,S=f.icon,K=f.onClick,T=f.type,X=f.disabled;return s("li",{className:ie(M,(U={},te(U,"".concat(o,"-operations-operation-").concat(T),!0),te(U,"".concat(o,"-operations-operation-disabled"),!!X),U)),onClick:K,children:u.exports.isValidElement(S)?u.exports.cloneElement(S,{className:O}):S},T)})]})]});return s(bt,{visible:n,motionName:i,children:function(f){var U=f.className,S=f.style;return s(Pt,{open:!0,getContainer:a!=null?a:document.body,children:s("div",{className:ie("".concat(o,"-operations-wrapper"),U,d),style:S,children:D})})}})},et={x:0,y:0,rotate:0,scale:1,flipX:!1,flipY:!1};function Xt(t){var e=u.exports.useRef(null),r=u.exports.useRef([]),n=u.exports.useState(et),i=B(n,2),a=i[0],o=i[1],d=function(){o(et)},l=function(p){e.current===null&&(r.current=[],e.current=yt(function(){o(function(w){var g=w;return r.current.forEach(function(C){g=R(R({},g),C)}),e.current=null,g})})),r.current.push(R(R({},a),p))},b=function(p,w,g){var C=t.current,L=C.width,z=C.height,_=C.offsetWidth,Z=C.offsetHeight,A=C.offsetLeft,j=C.offsetTop,G=p,P=a.scale*p;P>Ie?(G=Ie/a.scale,P=Ie):P<Me&&(G=Me/a.scale,P=Me);var Y=w!=null?w:innerWidth/2,V=g!=null?g:innerHeight/2,I=G-1,E=I*L*.5,H=I*z*.5,W=I*(Y-a.x-A),k=I*(V-a.y-j),y=a.x-(W-E),N=a.y-(k-H);if(p<1&&P===1){var x=_*P,M=Z*P,O=at(),F=O.width,D=O.height;x<=F&&M<=D&&(y=0,N=0)}l({x:y,y:N,scale:P})};return{transform:a,resetTransform:d,updateTransform:l,dispatchZoomChange:b}}function tt(t,e,r,n){var i=e+r,a=(r-n)/2;if(r>n){if(e>0)return te({},t,a);if(e<0&&i<n)return te({},t,-a)}else if(e<0||i>n)return te({},t,e<0?a:-a);return{}}function Zt(t,e,r,n){var i=at(),a=i.width,o=i.height,d=null;return t<=a&&e<=o?d={x:0,y:0}:(t>a||e>o)&&(d=R(R({},tt("x",r,t,a)),tt("y",n,e,o))),d}var Ht=["prefixCls","src","alt","onClose","visible","icons","rootClassName","getContainer","countRender","scaleStep","transitionName","maskTransitionName"],st=function(e){var r=e.prefixCls,n=e.src,i=e.alt,a=e.onClose,o=e.visible,d=e.icons,l=d===void 0?{}:d,b=e.rootClassName,v=e.getContainer,p=e.countRender,w=e.scaleStep,g=w===void 0?.5:w,C=e.transitionName,L=C===void 0?"zoom":C,z=e.maskTransitionName,_=z===void 0?"fade":z,Z=Oe(e,Ht),A=u.exports.useRef(),j=u.exports.useRef({deltaX:0,deltaY:0,transformX:0,transformY:0}),G=u.exports.useState(!1),P=B(G,2),Y=P[0],V=P[1],I=u.exports.useContext(Xe),E=I.previewUrls,H=I.current,W=I.isPreviewGroup,k=I.setCurrent,y=E.size,N=Array.from(E.keys()),x=N.indexOf(H),M=W?E.get(H):n,O=W&&y>1,F=W&&y>=1,D=Xt(A),f=D.transform,U=D.resetTransform,S=D.updateTransform,K=D.dispatchZoomChange,T=f.rotate,X=f.scale,he=ie(te({},"".concat(r,"-moving"),Y)),Ce=function(){U()},Q=function(){K(ye+g)},m=function(){K(ye-g)},$=function(){S({rotate:T+90})},le=function(){S({rotate:T-90})},ve=function(){S({flipX:!f.flipX})},ce=function(){S({flipY:!f.flipY})},ue=function(c){c.preventDefault(),c.stopPropagation(),x>0&&k(N[x-1])},pe=function(c){c.preventDefault(),c.stopPropagation(),x<y-1&&k(N[x+1])},de=function(){if(o&&Y){V(!1);var c=j.current,J=c.transformX,re=c.transformY,ne=f.x!==J&&f.y!==re;if(!ne)return;var oe=A.current.offsetWidth*X,ae=A.current.offsetHeight*X,be=A.current.getBoundingClientRect(),Ae=be.left,je=be.top,me=T%180!==0,se=Zt(me?ae:oe,me?oe:ae,Ae,je);se&&S(R({},se))}},xe=function(c){c.button===0&&(c.preventDefault(),c.stopPropagation(),j.current={deltaX:c.pageX-f.x,deltaY:c.pageY-f.y,transformX:f.x,transformY:f.y},V(!0))},fe=function(c){o&&Y&&S({x:c.pageX-j.current.deltaX,y:c.pageY-j.current.deltaY})},$e=function(c){if(!(!o||c.deltaY==0)){var J=Math.abs(c.deltaY/100),re=Math.min(J,_t),ne=ye+re*g;c.deltaY>0&&(ne=ye/ne),K(ne,c.clientX,c.clientY)}},Se=u.exports.useCallback(function(h){!o||!O||(h.keyCode===Fe.LEFT?x>0&&k(N[x-1]):h.keyCode===Fe.RIGHT&&x<y-1&&k(N[x+1]))},[x,y,N,k,O,o]),ze=function(c){o&&(X!==1?S({x:0,y:0,scale:1}):K(ye+g,c.clientX,c.clientY))};return u.exports.useEffect(function(){var h,c,J=Pe(window,"mouseup",de,!1),re=Pe(window,"mousemove",fe,!1),ne=Pe(window,"keydown",Se,!1);try{window.top!==window.self&&(h=Pe(window.top,"mouseup",de,!1),c=Pe(window.top,"mousemove",fe,!1))}catch{}return function(){var oe,ae;J.remove(),re.remove(),ne.remove(),(oe=h)===null||oe===void 0||oe.remove(),(ae=c)===null||ae===void 0||ae.remove()}},[o,Y,Se]),q(Ne,{children:[s(Tt,{transitionName:L,maskTransitionName:_,closable:!1,keyboard:!0,prefixCls:r,onClose:a,visible:o,wrapClassName:he,rootClassName:b,getContainer:v,...Z,afterClose:Ce,children:s("div",{className:"".concat(r,"-img-wrapper"),children:s("img",{width:e.width,height:e.height,onWheel:$e,onMouseDown:xe,onDoubleClick:ze,ref:A,className:"".concat(r,"-img"),src:M,alt:i,style:{transform:"translate3d(".concat(f.x,"px, ").concat(f.y,"px, 0) scale3d(").concat(f.flipX?"-":"").concat(X,", ").concat(f.flipY?"-":"").concat(X,", 1) rotate(").concat(T,"deg)")}})})}),s(Yt,{visible:o,maskTransitionName:_,getContainer:v,prefixCls:r,rootClassName:b,icons:l,countRender:p,showSwitch:O,showProgress:F,current:x,count:y,scale:X,onSwitchLeft:ue,onSwitchRight:pe,onZoomIn:Q,onZoomOut:m,onRotateRight:$,onRotateLeft:le,onFlipX:ve,onFlipY:ce,onClose:a})]})},Ut=["src","alt","onPreviewClose","prefixCls","previewPrefixCls","placeholder","fallback","width","height","style","preview","className","onClick","onError","wrapperClassName","wrapperStyle","rootClassName","crossOrigin","decoding","loading","referrerPolicy","sizes","srcSet","useMap","draggable"],Bt=["src","visible","onVisibleChange","getContainer","mask","maskClassName","icons","scaleStep"],rt=0;function Gt(t){return new Promise(function(e){var r=document.createElement("img");r.onerror=function(){return e(!1)},r.onload=function(){return e(!0)},r.src=t})}var Te=function(e){var r,n=e.src,i=e.alt,a=e.onPreviewClose,o=e.prefixCls,d=o===void 0?"rc-image":o,l=e.previewPrefixCls,b=l===void 0?"".concat(d,"-preview"):l,v=e.placeholder,p=e.fallback,w=e.width,g=e.height,C=e.style,L=e.preview,z=L===void 0?!0:L,_=e.className,Z=e.onClick,A=e.onError,j=e.wrapperClassName,G=e.wrapperStyle,P=e.rootClassName,Y=e.crossOrigin,V=e.decoding,I=e.loading,E=e.referrerPolicy,H=e.sizes,W=e.srcSet,k=e.useMap,y=e.draggable,N=Oe(e,Ut),x=v&&v!==!0,M=ot(z)==="object"?z:{},O=M.src,F=M.visible,D=F===void 0?void 0:F,f=M.onVisibleChange,U=f===void 0?a:f,S=M.getContainer,K=S===void 0?void 0:S,T=M.mask,X=M.maskClassName,he=M.icons,Ce=M.scaleStep,Q=Oe(M,Bt),m=O!=null?O:n,$=D!==void 0,le=_e(!!D,{value:D,onChange:U}),ve=B(le,2),ce=ve[0],ue=ve[1],pe=u.exports.useState(x?"loading":"normal"),de=B(pe,2),xe=de[0],fe=de[1],$e=u.exports.useState(null),Se=B($e,2),ze=Se[0],h=Se[1],c=xe==="error",J=u.exports.useContext(Xe),re=J.isPreviewGroup,ne=J.setCurrent,oe=J.setShowPreview,ae=J.setMousePosition,be=J.registerImage,Ae=u.exports.useState(function(){return rt+=1,rt}),je=B(Ae,1),me=je[0],se=!!z,Ee=u.exports.useRef(!1),Ze=function(){fe("normal")},pt=function(ee){if(!$){var Ue=Lt(ee.target),Be=Ue.left,Ge=Ue.top;re?(ne(me),ae({x:Be,y:Ge})):h({x:Be,y:Ge})}re?oe(!0):ue(!0),Z==null||Z(ee)},mt=function(ee){ee.stopPropagation(),ue(!1),$||h(null)},wt=function(ee){Ee.current=!1,xe==="loading"&&ee!=null&&ee.complete&&(ee.naturalWidth||ee.naturalHeight)&&(Ee.current=!0,Ze())};u.exports.useEffect(function(){Gt(m).then(function(ge){ge||fe("error")})},[m]),u.exports.useEffect(function(){var ge=be(me,m);return ge},[]),u.exports.useEffect(function(){be(me,m,se)},[m,se]),u.exports.useEffect(function(){c&&fe("normal"),x&&!Ee.current&&fe("loading")},[n]);var ht=ie(d,j,P,te({},"".concat(d,"-error"),c)),Ct=c&&p?p:m,He={crossOrigin:Y,decoding:V,draggable:y,loading:I,referrerPolicy:E,sizes:H,srcSet:W,useMap:k,onError:A,alt:i,className:ie("".concat(d,"-img"),te({},"".concat(d,"-img-placeholder"),v===!0),_),style:R({height:g},C)};return q(Ne,{children:[q("div",{...N,className:ht,onClick:se?pt:Z,style:R({width:w,height:g},G),children:[s("img",{...He,ref:wt,...c&&p?{src:p}:{onLoad:Ze,src:n},width:w,height:g}),xe==="loading"&&s("div",{"aria-hidden":"true",className:"".concat(d,"-placeholder"),children:v}),T&&se&&s("div",{className:ie("".concat(d,"-mask"),X),style:{display:((r=He.style)===null||r===void 0?void 0:r.display)==="none"?"none":void 0},children:T})]}),!re&&se&&s(st,{"aria-hidden":!ce,visible:ce,prefixCls:b,onClose:mt,mousePosition:ze,src:Ct,alt:i,getContainer:K,icons:he,scaleStep:Ce,rootClassName:P,...Q})]})};Te.PreviewGroup=Dt;Te.displayName="Image";var Vt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H188V494h440v326z"}},{tag:"path",attrs:{d:"M819.3 328.5c-78.8-100.7-196-153.6-314.6-154.2l-.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7.4 12.6-6.1v-63.9c12.9.1 25.9.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8a325.95 325.95 0 016.5 140.9h74.9c14.8-103.6-11.3-213-81-302.3z"}}]},name:"rotate-left",theme:"outlined"};const Wt=Vt;var lt=function(e,r){return s(Le,{...R(R({},e),{},{ref:r,icon:Wt})})};lt.displayName="RotateLeftOutlined";const Ft=u.exports.forwardRef(lt);var Kt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-.4-12.6 6.1l-.2 64c-118.6.5-235.8 53.4-314.6 154.2A399.75 399.75 0 00123.5 631h74.9c-.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8z"}},{tag:"path",attrs:{d:"M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H396V494h440v326z"}}]},name:"rotate-right",theme:"outlined"};const Qt=Kt;var ct=function(e,r){return s(Le,{...R(R({},e),{},{ref:r,icon:Qt})})};ct.displayName="RotateRightOutlined";const Jt=u.exports.forwardRef(ct);var qt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"}}]},name:"zoom-in",theme:"outlined"};const er=qt;var ut=function(e,r){return s(Le,{...R(R({},e),{},{ref:r,icon:er})})};ut.displayName="ZoomInOutlined";const tr=u.exports.forwardRef(ut);var rr={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"}}]},name:"zoom-out",theme:"outlined"};const nr=rr;var dt=function(e,r){return s(Le,{...R(R({},e),{},{ref:r,icon:nr})})};dt.displayName="ZoomOutOutlined";const or=u.exports.forwardRef(dt),Ye=t=>({position:t||"absolute",inset:0}),ir=t=>{const{iconCls:e,motionDurationSlow:r,paddingXXS:n,marginXXS:i,prefixCls:a}=t;return{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",background:new we("#000").setAlpha(.5).toRgbString(),cursor:"pointer",opacity:0,transition:`opacity ${r}`,[`.${a}-mask-info`]:Object.assign(Object.assign({},Nt),{padding:`0 ${n}px`,[e]:{marginInlineEnd:i,svg:{verticalAlign:"baseline"}}})}},ar=t=>{const{previewCls:e,modalMaskBg:r,paddingSM:n,imagePreviewOperationDisabledColor:i,motionDurationSlow:a}=t,o=new we(r).setAlpha(.1),d=o.clone().setAlpha(.2);return{[`${e}-operations`]:Object.assign(Object.assign({},Ot(t)),{display:"flex",flexDirection:"row-reverse",alignItems:"center",color:t.imagePreviewOperationColor,listStyle:"none",background:o.toRgbString(),pointerEvents:"auto","&-operation":{marginInlineStart:n,padding:n,cursor:"pointer",transition:`all ${a}`,"&:hover":{background:d.toRgbString()},"&-disabled":{color:i,pointerEvents:"none"},"&:last-of-type":{marginInlineStart:0}},"&-progress":{position:"absolute",left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%)"},"&-icon":{fontSize:t.imagePreviewOperationSize}})}},sr=t=>{const{modalMaskBg:e,iconCls:r,imagePreviewOperationDisabledColor:n,previewCls:i,zIndexPopup:a,motionDurationSlow:o}=t,d=new we(e).setAlpha(.1),l=d.clone().setAlpha(.2);return{[`${i}-switch-left, ${i}-switch-right`]:{position:"fixed",insetBlockStart:"50%",zIndex:a+1,display:"flex",alignItems:"center",justifyContent:"center",width:t.imagePreviewSwitchSize,height:t.imagePreviewSwitchSize,marginTop:-t.imagePreviewSwitchSize/2,color:t.imagePreviewOperationColor,background:d.toRgbString(),borderRadius:"50%",transform:"translateY(-50%)",cursor:"pointer",transition:`all ${o}`,pointerEvents:"auto","&:hover":{background:l.toRgbString()},["&-disabled"]:{"&, &:hover":{color:n,background:"transparent",cursor:"not-allowed",[`> ${r}`]:{cursor:"not-allowed"}}},[`> ${r}`]:{fontSize:t.imagePreviewOperationSize}},[`${i}-switch-left`]:{insetInlineStart:t.marginSM},[`${i}-switch-right`]:{insetInlineEnd:t.marginSM}}},lr=t=>{const{motionEaseOut:e,previewCls:r,motionDurationSlow:n,componentCls:i}=t;return[{[`${i}-preview-root`]:{[r]:{height:"100%",textAlign:"center",pointerEvents:"none"},[`${r}-body`]:Object.assign(Object.assign({},Ye()),{overflow:"hidden"}),[`${r}-img`]:{maxWidth:"100%",maxHeight:"100%",verticalAlign:"middle",transform:"scale3d(1, 1, 1)",cursor:"grab",transition:`transform ${n} ${e} 0s`,userSelect:"none",pointerEvents:"auto","&-wrapper":Object.assign(Object.assign({},Ye()),{transition:`transform ${n} ${e} 0s`,display:"flex",justifyContent:"center",alignItems:"center","&::before":{display:"inline-block",width:1,height:"50%",marginInlineEnd:-1,content:'""'}})},[`${r}-moving`]:{[`${r}-preview-img`]:{cursor:"grabbing","&-wrapper":{transitionDuration:"0s"}}}}},{[`${i}-preview-root`]:{[`${r}-wrap`]:{zIndex:t.zIndexPopup}}},{[`${i}-preview-operations-wrapper`]:{position:"fixed",insetBlockStart:0,insetInlineEnd:0,zIndex:t.zIndexPopup+1,width:"100%"},"&":[ar(t),sr(t)]}]},cr=t=>{const{componentCls:e}=t;return{[e]:{position:"relative",display:"inline-block",[`${e}-img`]:{width:"100%",height:"auto",verticalAlign:"middle"},[`${e}-img-placeholder`]:{backgroundColor:t.colorBgContainerDisabled,backgroundImage:"url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=')",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"30%"},[`${e}-mask`]:Object.assign({},ir(t)),[`${e}-mask:hover`]:{opacity:1},[`${e}-placeholder`]:Object.assign({},Ye())}}},ur=t=>{const{previewCls:e}=t;return{[`${e}-root`]:It(t,"zoom"),["&"]:zt(t,!0)}},ft=Mt("Image",t=>{const e=new we(t.colorTextLightSolid),r=`${t.componentCls}-preview`,n=Ke(t,{previewCls:r,imagePreviewOperationColor:e.toRgbString(),imagePreviewOperationDisabledColor:new we(e).setAlpha(.25).toRgbString(),modalMaskBg:new we("#000").setAlpha(.45).toRgbString(),imagePreviewOperationSize:t.fontSizeIcon*1.5,imagePreviewSwitchSize:t.controlHeightLG});return[cr(n),lr(n),$t(Ke(n,{componentCls:r})),ur(n)]},t=>({zIndexPopup:t.zIndexPopupBase+80}));var dr=globalThis&&globalThis.__rest||function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]]);return r};const gt={rotateLeft:s(Ft,{}),rotateRight:s(Jt,{}),zoomIn:s(tr,{}),zoomOut:s(or,{}),close:s(Rt,{}),left:s(At,{}),right:s(jt,{}),flipX:s(Je,{}),flipY:s(Je,{rotate:90})},fr=t=>{var{previewPrefixCls:e,preview:r}=t,n=dr(t,["previewPrefixCls","preview"]);const{getPrefixCls:i}=u.exports.useContext(it),a=i("image",e),o=`${a}-preview`,d=i(),[l,b]=ft(a),v=u.exports.useMemo(()=>{if(r===!1)return r;const p=typeof r=="object"?r:{};return Object.assign(Object.assign({},p),{transitionName:Re(d,"zoom",p.transitionName),maskTransitionName:Re(d,"fade",p.maskTransitionName),rootClassName:b})},[r]);return l(s(Te.PreviewGroup,{...Object.assign({preview:v,previewPrefixCls:o,icons:gt},n)}))},gr=fr;var nt=globalThis&&globalThis.__rest||function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]]);return r};const vt=t=>{var{prefixCls:e,preview:r,rootClassName:n}=t,i=nt(t,["prefixCls","preview","rootClassName"]);const{getPrefixCls:a,locale:o=Qe,getPopupContainer:d}=u.exports.useContext(it),l=a("image",e),b=a(),v=o.Image||Qe.Image,[p,w]=ft(l),g=ie(n,w),C=u.exports.useMemo(()=>{if(r===!1)return r;const L=typeof r=="object"?r:{},{getContainer:z}=L,_=nt(L,["getContainer"]);return Object.assign(Object.assign({mask:q("div",{className:`${l}-mask-info`,children:[s(St,{}),v==null?void 0:v.preview]}),icons:gt},_),{getContainer:z||d,transitionName:Re(b,"zoom",L.transitionName),maskTransitionName:Re(b,"fade",L.maskTransitionName)})},[r,v]);return p(s(Te,{...Object.assign({prefixCls:`${l}`,preview:C,rootClassName:g},i)}))};vt.PreviewGroup=gr;const De=vt;function yr({deleteURL:t,media:e,params:r,variationColor:n}){xt.useState(!1);const i=o=>{Ve.Inertia.post(We(t,r),{id:o})},a=o=>{o&&Ve.Inertia.post(We(t,r),{id:o})};return s("div",{className:"flex flex-wrap my-2",children:q(De.PreviewGroup,{children:[e==null?void 0:e.map((o,d)=>q("div",{className:"flex-[1_1_60px] my-1",children:[s(De,{src:o.big_banner||o.mobile_banner||o.thumbnail,className:"px-1 aspect-[2/3] w-[60px] h-[90px] md:w-[120px] md:h-[180px] object-contain"}),s(qe,{type:"dashed",danger:!0,className:"flex",onClick:l=>i(o.id),children:"Delete"})]},o.id)),n&&q("div",{className:"flex-[1_1_60px] my-1",children:[s(De,{src:n==null?void 0:n.color,className:"px-1 aspect-[2/3] w-[60px] h-[90px] md:w-[120px] md:h-[180px] object-contain"}),s(qe,{type:"dashed",danger:!0,className:"flex",onClick:o=>a(n==null?void 0:n.id),children:"Delete"})]},n==null?void 0:n.id)]})})}export{yr as M};
