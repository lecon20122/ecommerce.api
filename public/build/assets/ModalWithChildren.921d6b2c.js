import{r as m,a as l,j as M,F as J}from"./app.c680bbd5.js";import{u as ye,a as E,e as K,b as j,a2 as Z,a4 as U,C as he,X as ke,j as A,a5 as Pe,a6 as be,z as ee,x as Te,v as Oe,y as we,a7 as Ne,f as Se}from"./index.52a35bea.js";import{c as x}from"./assertThisInitialized.eb69e595.js";import{c as W}from"./index.b3d31cad.js";import{B as Q,b as te}from"./button.743859a0.js";import{g as L}from"./motion.7a323949.js";import{D as Re}from"./DialogWrap.512b12b0.js";import{f as pe,e as Fe}from"./styleChecker.08e649e5.js";import"./index.1c40f768.js";import"./type.49ce19ba.js";import"./getScrollBarSize.5260b009.js";function G(t){return!!(t&&!!t.then)}var Ie=function(e){var o=m.exports.useRef(!1),n=m.exports.useRef(),r=ye(!1),c=E(r,2),h=c[0],a=c[1],u=e.close,f=function(){u==null||u.apply(void 0,arguments)};m.exports.useEffect(function(){var s;if(e.autoFocus){var C=n.current;s=setTimeout(function(){return C.focus()})}return function(){s&&clearTimeout(s)}},[]);var d=function(C){!G(C)||(a(!0),C.then(function(){a(!1,!0),f.apply(void 0,arguments),o.current=!1},function(v){console.error(v),a(!1,!0),o.current=!1}))},i=function(C){var v=e.actionFn;if(!o.current){if(o.current=!0,!v){f();return}var g;if(e.emitEvent){if(g=v(C),e.quitOnNullishReturnValue&&!G(g)){o.current=!1,f(C);return}}else if(v.length)g=v(u),o.current=!1;else if(g=v(),!g){f();return}d(g)}},k=e.type,P=e.children,T=e.prefixCls,b=e.buttonProps;return l(Q,{...te(k),onClick:i,loading:h,prefixCls:T,...b,ref:n,children:P})};const V=Ie;var Ae=globalThis&&globalThis.__rest||function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(o[n[r]]=t[n[r]]);return o},X,Ee=function(e){X={x:e.pageX,y:e.pageY},setTimeout(function(){X=null},100)};pe()&&document.documentElement.addEventListener("click",Ee,!0);var ne=function(e){var o,n=m.exports.useContext(K),r=n.getPopupContainer,c=n.getPrefixCls,h=n.direction,a=function(p){var O=e.onCancel;O==null||O(p)},u=function(p){var O=e.onOk;O==null||O(p)},f=function(p){var O=e.okText,D=e.okType,w=e.cancelText,H=e.confirmLoading;return M(J,{children:[l(Q,{onClick:a,...e.cancelButtonProps,children:w||p.cancelText}),l(Q,{...te(D),loading:H,onClick:u,...e.okButtonProps,children:O||p.okText})]})},d=e.prefixCls,i=e.footer,k=e.visible,P=e.open,T=e.wrapClassName,b=e.centered,s=e.getContainer,C=e.closeIcon,v=e.focusTriggerAfterClose,g=v===void 0?!0:v,R=Ae(e,["prefixCls","footer","visible","open","wrapClassName","centered","getContainer","closeIcon","focusTriggerAfterClose"]),y=c("modal",d),S=c(),$=l(Z,{componentName:"Modal",defaultLocale:U(),children:f}),F=l("span",{className:"".concat(y,"-close-x"),children:C||l(he,{className:"".concat(y,"-close-icon")})}),z=W(T,(o={},j(o,"".concat(y,"-centered"),!!b),j(o,"".concat(y,"-wrap-rtl"),h==="rtl"),o));return l(Fe,{status:!0,override:!0,children:l(Re,{...R,getContainer:s===void 0?r:s,prefixCls:y,wrapClassName:z,footer:i===void 0?$:i,visible:P||k,mousePosition:X,onClose:a,closeIcon:F,focusTriggerAfterClose:g,transitionName:L(S,"zoom",e.transitionName),maskTransitionName:L(S,"fade",e.maskTransitionName)})})};ne.defaultProps={width:520,confirmLoading:!1,open:!1,okType:"primary"};const oe=ne;var $e=function(e){var o=e.icon,n=e.onCancel,r=e.onOk,c=e.close,h=e.zIndex,a=e.afterClose,u=e.visible,f=e.open,d=e.keyboard,i=e.centered,k=e.getContainer,P=e.maskStyle,T=e.okText,b=e.okButtonProps,s=e.cancelText,C=e.cancelButtonProps,v=e.direction,g=e.prefixCls,R=e.wrapClassName,y=e.rootPrefixCls,S=e.iconPrefixCls,$=e.bodyStyle,F=e.closable,z=F===void 0?!1:F,B=e.closeIcon,p=e.modalRender,O=e.focusTriggerAfterClose,D=e.okType||"primary",w="".concat(g,"-confirm"),H="okCancel"in e?e.okCancel:!0,de=e.width||416,Ce=e.style||{},me=e.mask===void 0?!0:e.mask,ve=e.maskClosable===void 0?!1:e.maskClosable,q=e.autoFocusButton===null?!1:e.autoFocusButton||"ok",xe=W(w,"".concat(w,"-").concat(e.type),j({},"".concat(w,"-rtl"),v==="rtl"),e.className),ge=H&&l(V,{actionFn:n,close:c,autoFocus:q==="cancel",buttonProps:C,prefixCls:"".concat(y,"-btn"),children:s});return l(ke,{prefixCls:y,iconPrefixCls:S,direction:v,children:l(oe,{prefixCls:g,className:xe,wrapClassName:W(j({},"".concat(w,"-centered"),!!e.centered),R),onCancel:function(){return c==null?void 0:c({triggerCancel:!0})},open:f||u,title:"",footer:"",transitionName:L(y,"zoom",e.transitionName),maskTransitionName:L(y,"fade",e.maskTransitionName),mask:me,maskClosable:ve,maskStyle:P,style:Ce,bodyStyle:$,width:de,zIndex:h,afterClose:a,keyboard:d,centered:i,getContainer:k,closable:z,closeIcon:B,modalRender:p,focusTriggerAfterClose:O,children:M("div",{className:"".concat(w,"-body-wrapper"),children:[M("div",{className:"".concat(w,"-body"),children:[o,e.title===void 0?null:l("span",{className:"".concat(w,"-title"),children:e.title}),l("div",{className:"".concat(w,"-content"),children:e.content})]}),M("div",{className:"".concat(w,"-btns"),children:[ge,l(V,{type:D,actionFn:r,close:c,autoFocus:q==="ok",buttonProps:b,prefixCls:"".concat(y,"-btn"),children:T})]})]})})})};const re=$e;var _e=[];const I=_e;var Be=globalThis&&globalThis.__rest||function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(o[n[r]]=t[n[r]]);return o},ae="";function Me(){return ae}function _(t){var e=document.createDocumentFragment(),o=x(x({},t),{close:c,open:!0});function n(){for(var a=arguments.length,u=new Array(a),f=0;f<a;f++)u[f]=arguments[f];var d=u.some(function(P){return P&&P.triggerCancel});t.onCancel&&d&&t.onCancel.apply(t,[function(){}].concat(A(u.slice(1))));for(var i=0;i<I.length;i++){var k=I[i];if(k===c){I.splice(i,1);break}}Pe(e)}function r(a){var u=a.okText,f=a.cancelText,d=a.prefixCls,i=Be(a,["okText","cancelText","prefixCls"]);setTimeout(function(){var k=U(),P=Ne(),T=P.getPrefixCls,b=P.getIconPrefixCls,s=T(void 0,Me()),C=d||"".concat(s,"-modal"),v=b();be(l(re,{...i,prefixCls:C,rootPrefixCls:s,iconPrefixCls:v,okText:u||(i.okCancel?k.okText:k.justOkText),cancelText:f||k.cancelText}),e)})}function c(){for(var a=this,u=arguments.length,f=new Array(u),d=0;d<u;d++)f[d]=arguments[d];o=x(x({},o),{open:!1,afterClose:function(){typeof t.afterClose=="function"&&t.afterClose(),n.apply(a,f)}}),r(o)}function h(a){typeof a=="function"?o=a(o):o=x(x({},o),a),r(o)}return r(o),I.push(c),{destroy:c,update:h}}function ce(t){return x(x({icon:l(ee,{}),okCancel:!1},t),{type:"warning"})}function ie(t){return x(x({icon:l(Te,{}),okCancel:!1},t),{type:"info"})}function le(t){return x(x({icon:l(Oe,{}),okCancel:!1},t),{type:"success"})}function se(t){return x(x({icon:l(we,{}),okCancel:!1},t),{type:"error"})}function ue(t){return x(x({icon:l(ee,{}),okCancel:!0},t),{type:"confirm"})}function je(t){var e=t.rootPrefixCls;ae=e}function Le(){var t=m.exports.useState([]),e=E(t,2),o=e[0],n=e[1],r=m.exports.useCallback(function(c){return n(function(h){return[].concat(A(h),[c])}),function(){n(function(h){return h.filter(function(a){return a!==c})})}},[]);return[o,r]}var ze=function(e,o){var n=e.afterClose,r=e.config,c=m.exports.useState(!0),h=E(c,2),a=h[0],u=h[1],f=m.exports.useState(r),d=E(f,2),i=d[0],k=d[1],P=m.exports.useContext(K),T=P.direction,b=P.getPrefixCls,s=b("modal"),C=b(),v=function(){u(!1);for(var R=arguments.length,y=new Array(R),S=0;S<R;S++)y[S]=arguments[S];var $=y.some(function(F){return F&&F.triggerCancel});i.onCancel&&$&&i.onCancel.apply(i,[function(){}].concat(A(y.slice(1))))};return m.exports.useImperativeHandle(o,function(){return{destroy:v,update:function(R){k(function(y){return x(x({},y),R)})}}}),l(Z,{componentName:"Modal",defaultLocale:Se.Modal,children:function(g){return l(re,{prefixCls:s,rootPrefixCls:C,...i,close:v,open:a,afterClose:n,okText:i.okText||(i.okCancel?g.okText:g.justOkText),direction:T,cancelText:i.cancelText||g.cancelText})}})};const De=m.exports.forwardRef(ze);var Y=0,He=m.exports.memo(m.exports.forwardRef(function(t,e){var o=Le(),n=E(o,2),r=n[0],c=n[1];return m.exports.useImperativeHandle(e,function(){return{patchElement:c}},[]),l(J,{children:r})}));function We(){var t=m.exports.useRef(null),e=m.exports.useState([]),o=E(e,2),n=o[0],r=o[1];m.exports.useEffect(function(){if(n.length){var a=A(n);a.forEach(function(u){u()}),r([])}},[n]);var c=m.exports.useCallback(function(a){return function(f){var d;Y+=1;var i=m.exports.createRef(),k,P=l(De,{config:a(f),ref:i,afterClose:function(){k()}},"modal-".concat(Y));return k=(d=t.current)===null||d===void 0?void 0:d.patchElement(P),{destroy:function(){function b(){var s;(s=i.current)===null||s===void 0||s.destroy()}i.current?b():r(function(s){return[].concat(A(s),[b])})},update:function(b){function s(){var C;(C=i.current)===null||C===void 0||C.update(b)}i.current?s():r(function(C){return[].concat(A(C),[s])})}}}},[]),h=m.exports.useMemo(function(){return{info:c(ie),success:c(le),error:c(se),warning:c(ce),confirm:c(ue)}},[]);return[h,l(He,{ref:t})]}function fe(t){return _(ce(t))}var N=oe;N.useModal=We;N.info=function(e){return _(ie(e))};N.success=function(e){return _(le(e))};N.error=function(e){return _(se(e))};N.warning=fe;N.warn=fe;N.confirm=function(e){return _(ue(e))};N.destroyAll=function(){for(;I.length;){var e=I.pop();e&&e()}};N.config=je;const Qe=N;function ot({openModal:t,onOk:e,onCancel:o,children:n,title:r}){return l(Qe,{okButtonProps:{type:"default"},title:r,centered:!0,onOk:e,onCancel:o,open:t,children:n})}export{ot as default};
