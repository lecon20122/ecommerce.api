import{A as rt,_ as Fe,b as g,w as nt,c as at,a as se,e as qe}from"./AntdIcon.4ebc1fb3.js";import{D as it}from"./DownOutlined.6107b81d.js";import{r as c,a as N,j as ge}from"./app.03c223bf.js";import{c as L}from"./index.b3d31cad.js";import{K as ve}from"./getScrollBarSize.e8dabb86.js";import{d as xe}from"./useMergedState.ca0e7418.js";import{Q as je,P as He,w as $e,j as ut,C as ot,S as st,D as lt}from"./type.5a43753e.js";import{i as ct,a as ft,g as Ie}from"./index.f3c357f2.js";import{F as dt,N as Ae}from"./styleChecker.d19994e5.js";import{a as Te}from"./button.adc1e653.js";var vt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"}}]},name:"up",theme:"outlined"};const mt=vt;var Ke=function(r,t){return N(rt,{...Fe(Fe({},r),{},{ref:t,icon:mt})})};Ke.displayName="UpOutlined";const gt=c.exports.forwardRef(Ke);function we(){return typeof BigInt=="function"}function z(e){var r=e.trim(),t=r.startsWith("-");t&&(r=r.slice(1)),r=r.replace(/(\.\d*[^0])0*$/,"$1").replace(/\.0*$/,"").replace(/^0+/,""),r.startsWith(".")&&(r="0".concat(r));var n=r||"0",a=n.split("."),l=a[0]||"0",p=a[1]||"0";l==="0"&&p==="0"&&(t=!1);var d=t?"-":"";return{negative:t,negativeStr:d,trimStr:n,integerStr:l,decimalStr:p,fullStr:"".concat(d).concat(n)}}function Ee(e){var r=String(e);return!Number.isNaN(Number(r))&&r.includes("e")}function le(e){var r=String(e);if(Ee(e)){var t=Number(r.slice(r.indexOf("e-")+2)),n=r.match(/\.(\d+)/);return n!=null&&n[1]&&(t+=n[1].length),t}return r.includes(".")&&De(r)?r.length-r.indexOf(".")-1:0}function pe(e){var r=String(e);if(Ee(e)){if(e>Number.MAX_SAFE_INTEGER)return String(we()?BigInt(e).toString():Number.MAX_SAFE_INTEGER);if(e<Number.MIN_SAFE_INTEGER)return String(we()?BigInt(e).toString():Number.MIN_SAFE_INTEGER);r=e.toFixed(le(r))}return z(r).fullStr}function De(e){return typeof e=="number"?!Number.isNaN(e):e?/^\s*-?\d+(\.\d+)?\s*$/.test(e)||/^\s*-?\d+\.\s*$/.test(e)||/^\s*-?\.\d+\s*$/.test(e):!1}function Ue(e){var r=typeof e=="number"?pe(e):z(e).fullStr,t=r.includes(".");return t?z(r.replace(/(\d)\.(\d)/g,"$1$2.")).fullStr:e+"0"}var pt=function(){function e(r){if(He(this,e),this.origin="",this.number=void 0,this.empty=void 0,!r&&r!==0||!String(r).trim()){this.empty=!0;return}this.origin=String(r),this.number=Number(r)}return je(e,[{key:"negate",value:function(){return new e(-this.toNumber())}},{key:"add",value:function(t){if(this.isInvalidate())return new e(t);var n=Number(t);if(Number.isNaN(n))return this;var a=this.number+n;if(a>Number.MAX_SAFE_INTEGER)return new e(Number.MAX_SAFE_INTEGER);if(a<Number.MIN_SAFE_INTEGER)return new e(Number.MIN_SAFE_INTEGER);var l=Math.max(le(this.number),le(n));return new e(a.toFixed(l))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return Number.isNaN(this.number)}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(t){return this.toNumber()===(t==null?void 0:t.toNumber())}},{key:"lessEquals",value:function(t){return this.add(t.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.number}},{key:"toString",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return t?this.isInvalidate()?"":pe(this.number):this.origin}}]),e}(),ht=function(){function e(r){if(He(this,e),this.origin="",this.negative=void 0,this.integer=void 0,this.decimal=void 0,this.decimalLen=void 0,this.empty=void 0,this.nan=void 0,!r&&r!==0||!String(r).trim()){this.empty=!0;return}if(this.origin=String(r),r==="-"){this.nan=!0;return}var t=r;if(Ee(t)&&(t=Number(t)),t=typeof t=="string"?t:pe(t),De(t)){var n=z(t);this.negative=n.negative;var a=n.trimStr.split(".");this.integer=BigInt(a[0]);var l=a[1]||"0";this.decimal=BigInt(l),this.decimalLen=l.length}else this.nan=!0}return je(e,[{key:"getMark",value:function(){return this.negative?"-":""}},{key:"getIntegerStr",value:function(){return this.integer.toString()}},{key:"getDecimalStr",value:function(){return this.decimal.toString().padStart(this.decimalLen,"0")}},{key:"alignDecimal",value:function(t){var n="".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(t,"0"));return BigInt(n)}},{key:"negate",value:function(){var t=new e(this.toString());return t.negative=!t.negative,t}},{key:"add",value:function(t){if(this.isInvalidate())return new e(t);var n=new e(t);if(n.isInvalidate())return this;var a=Math.max(this.getDecimalStr().length,n.getDecimalStr().length),l=this.alignDecimal(a),p=n.alignDecimal(a),d=(l+p).toString(),S=z(d),b=S.negativeStr,v=S.trimStr,h="".concat(b).concat(v.padStart(a+1,"0"));return new e("".concat(h.slice(0,-a),".").concat(h.slice(-a)))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return this.nan}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(t){return this.toString()===(t==null?void 0:t.toString())}},{key:"lessEquals",value:function(t){return this.add(t.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.isNaN()?NaN:Number(this.toString())}},{key:"toString",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return t?this.isInvalidate()?"":z("".concat(this.getMark()).concat(this.getIntegerStr(),".").concat(this.getDecimalStr())).fullStr:this.origin}}]),e}();function E(e){return we()?new ht(e):new pt(e)}function me(e,r,t){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(e==="")return"";var a=z(e),l=a.negativeStr,p=a.integerStr,d=a.decimalStr,S="".concat(r).concat(d),b="".concat(l).concat(p);if(t>=0){var v=Number(d[t]);if(v>=5&&!n){var h=E(e).add("".concat(l,"0.").concat("0".repeat(t)).concat(10-v));return me(h.toString(),r,t,n)}return t===0?b:"".concat(b).concat(r).concat(d.padEnd(t,"0").slice(0,t))}return S===".0"?b:"".concat(b).concat(S)}var St=200,Nt=600;function bt(e){var r=e.prefixCls,t=e.upNode,n=e.downNode,a=e.upDisabled,l=e.downDisabled,p=e.onStep,d=c.exports.useRef(),S=c.exports.useRef();S.current=p;var b=function(w,k){w.preventDefault(),S.current(k);function _(){S.current(k),d.current=setTimeout(_,St)}d.current=setTimeout(_,Nt)},v=function(){clearTimeout(d.current)};if(c.exports.useEffect(function(){return v},[]),ct())return null;var h="".concat(r,"-handler"),y=L(h,"".concat(h,"-up"),g({},"".concat(h,"-up-disabled"),a)),R=L(h,"".concat(h,"-down"),g({},"".concat(h,"-down-disabled"),l)),O={unselectable:"on",role:"button",onMouseUp:v,onMouseLeave:v};return ge("div",{className:"".concat(h,"-wrap"),children:[N("span",{...O,onMouseDown:function(w){b(w,!0)},"aria-label":"Increase Value","aria-disabled":a,className:y,children:t||N("span",{unselectable:"on",className:"".concat(r,"-handler-up-inner")})}),N("span",{...O,onMouseDown:function(w){b(w,!1)},"aria-label":"Decrease Value","aria-disabled":l,className:R,children:n||N("span",{unselectable:"on",className:"".concat(r,"-handler-down-inner")})})]})}function yt(e,r){var t=c.exports.useRef(null);function n(){try{var l=e.selectionStart,p=e.selectionEnd,d=e.value,S=d.substring(0,l),b=d.substring(p);t.current={start:l,end:p,value:d,beforeTxt:S,afterTxt:b}}catch{}}function a(){if(e&&t.current&&r)try{var l=e.value,p=t.current,d=p.beforeTxt,S=p.afterTxt,b=p.start,v=l.length;if(l.endsWith(S))v=l.length-t.current.afterTxt.length;else if(l.startsWith(d))v=d.length;else{var h=d[b-1],y=l.indexOf(h,b-1);y!==-1&&(v=y+1)}e.setSelectionRange(v,v)}catch(R){nt(!1,"Something warning of cursor restore. Please fire issue about this: ".concat(R.message))}}return[n,a]}const xt=function(){var e=c.exports.useRef(0),r=function(){$e.cancel(e.current)};return c.exports.useEffect(function(){return r},[]),function(t){r(),e.current=$e(function(){t()})}};var It=["prefixCls","className","style","min","max","step","defaultValue","value","disabled","readOnly","upHandler","downHandler","keyboard","controls","stringMode","parser","formatter","precision","decimalSeparator","onChange","onInput","onPressEnter","onStep"],Pe=function(r,t){return r||t.isEmpty()?t.toString():t.toNumber()},Be=function(r){var t=E(r);return t.isInvalidate()?null:t},Le=c.exports.forwardRef(function(e,r){var t,n=e.prefixCls,a=n===void 0?"rc-input-number":n,l=e.className,p=e.style,d=e.min,S=e.max,b=e.step,v=b===void 0?1:b,h=e.defaultValue,y=e.value,R=e.disabled,O=e.readOnly,T=e.upHandler,w=e.downHandler,k=e.keyboard,_=e.controls,ce=_===void 0?!0:_,ee=e.stringMode,U=e.parser,P=e.formatter,x=e.precision,F=e.decimalSeparator,o=e.onChange,B=e.onInput,q=e.onPressEnter,te=e.onStep,G=at(e,It),j="".concat(a,"-input"),W=c.exports.useRef(null),he=c.exports.useState(!1),fe=se(he,2),X=fe[0],re=fe[1],M=c.exports.useRef(!1),$=c.exports.useRef(!1),H=c.exports.useRef(!1),K=c.exports.useState(function(){return E(y!=null?y:h)}),I=se(K,2),m=I[0],A=I[1];function ne(u){y===void 0&&A(u)}var Q=c.exports.useCallback(function(u,i){if(!i)return x>=0?x:Math.max(le(u),le(v))},[x,v]),Y=c.exports.useCallback(function(u){var i=String(u);if(U)return U(i);var f=i;return F&&(f=f.replace(F,".")),f.replace(/[^\w.-]+/g,"")},[U,F]),ae=c.exports.useRef(""),de=c.exports.useCallback(function(u,i){if(P)return P(u,{userTyping:i,input:String(ae.current)});var f=typeof u=="number"?pe(u):u;if(!i){var s=Q(f,i);if(De(f)&&(F||s>=0)){var C=F||".";f=me(f,C,s)}}return f},[P,Q,F]),Se=c.exports.useState(function(){var u=h!=null?h:y;return m.isInvalidate()&&["string","number"].includes(qe(u))?Number.isNaN(u)?"":u:de(m.toString(),!1)}),ie=se(Se,2),V=ie[0],D=ie[1];ae.current=V;function ue(u,i){D(de(u.isInvalidate()?u.toString(!1):u.toString(!i),i))}var J=c.exports.useMemo(function(){return Be(S)},[S,x]),Z=c.exports.useMemo(function(){return Be(d)},[d,x]),Ce=c.exports.useMemo(function(){return!J||!m||m.isInvalidate()?!1:J.lessEquals(m)},[J,m]),Re=c.exports.useMemo(function(){return!Z||!m||m.isInvalidate()?!1:m.lessEquals(Z)},[Z,m]),ze=yt(W.current,X),ke=se(ze,2),Ge=ke[0],We=ke[1],_e=function(i){return J&&!i.lessEquals(J)?J:Z&&!Z.lessEquals(i)?Z:null},Ne=function(i){return!_e(i)},be=function(i,f){var s=i,C=Ne(s)||s.isEmpty();if(!s.isEmpty()&&!f&&(s=_e(s)||s,C=!0),!O&&!R&&C){var oe=s.toString(),ye=Q(oe,f);return ye>=0&&(s=E(me(oe,".",ye)),Ne(s)||(s=E(me(oe,".",ye,!0)))),s.equals(m)||(ne(s),o==null||o(s.isEmpty()?null:Pe(ee,s)),y===void 0&&ue(s,f)),s}return m},Xe=xt(),Me=function u(i){if(Ge(),D(i),!$.current){var f=Y(i),s=E(f);s.isNaN()||be(s,!0)}B==null||B(i),Xe(function(){var C=i;U||(C=i.replace(/。/g,".")),C!==i&&u(C)})},Qe=function(){$.current=!0},Ye=function(){$.current=!1,Me(W.current.value)},Je=function(i){Me(i.target.value)},Ve=function(i){var f;if(!(i&&Ce||!i&&Re)){M.current=!1;var s=E(H.current?Ue(v):v);i||(s=s.negate());var C=(m||E(0)).add(s.toString()),oe=be(C,!1);te==null||te(Pe(ee,oe),{offset:H.current?Ue(v):v,type:i?"up":"down"}),(f=W.current)===null||f===void 0||f.focus()}},Oe=function(i){var f=E(Y(V)),s=f;f.isNaN()?s=m:s=be(f,i),y!==void 0?ue(m,!1):s.isNaN()||ue(s,!1)},Ze=function(i){var f=i.which,s=i.shiftKey;M.current=!0,s?H.current=!0:H.current=!1,f===ve.ENTER&&($.current||(M.current=!1),Oe(!1),q==null||q(i)),k!==!1&&!$.current&&[ve.UP,ve.DOWN].includes(f)&&(Ve(ve.UP===f),i.preventDefault())},et=function(){M.current=!1,H.current=!1},tt=function(){Oe(!1),re(!1),M.current=!1};return xe(function(){m.isInvalidate()||ue(m,!1)},[x]),xe(function(){var u=E(y);A(u);var i=E(Y(V));(!u.equals(i)||!M.current||P)&&ue(u,M.current)},[y]),xe(function(){P&&We()},[V]),ge("div",{className:L(a,l,(t={},g(t,"".concat(a,"-focused"),X),g(t,"".concat(a,"-disabled"),R),g(t,"".concat(a,"-readonly"),O),g(t,"".concat(a,"-not-a-number"),m.isNaN()),g(t,"".concat(a,"-out-of-range"),!m.isInvalidate()&&!Ne(m)),t)),style:p,onFocus:function(){re(!0)},onBlur:tt,onKeyDown:Ze,onKeyUp:et,onCompositionStart:Qe,onCompositionEnd:Ye,children:[ce&&N(bt,{prefixCls:a,upNode:T,downNode:w,upDisabled:Ce,downDisabled:Re,onStep:Ve}),N("div",{className:"".concat(j,"-wrap"),children:N("input",{autoComplete:"off",role:"spinbutton","aria-valuemin":d,"aria-valuemax":S,"aria-valuenow":m.isInvalidate()?null:m.toString(),step:v,...G,ref:ut(W,r),className:j,value:V,onChange:Je,disabled:R,readOnly:O})})]})});Le.displayName="InputNumber";var wt=globalThis&&globalThis.__rest||function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t},Et=c.exports.forwardRef(function(e,r){var t,n=c.exports.useContext(ot),a=n.getPrefixCls,l=n.direction,p=c.exports.useContext(st),d=c.exports.useState(!1),S=se(d,2),b=S[0],v=S[1],h=c.exports.useRef(null);c.exports.useImperativeHandle(r,function(){return h.current});var y=e.className,R=e.size,O=e.disabled,T=e.prefixCls,w=e.addonBefore,k=e.addonAfter,_=e.prefix,ce=e.bordered,ee=ce===void 0?!0:ce,U=e.readOnly,P=e.status,x=e.controls,F=wt(e,["className","size","disabled","prefixCls","addonBefore","addonAfter","prefix","bordered","readOnly","status","controls"]),o=a("input-number",T),B=N(gt,{className:"".concat(o,"-handler-up-inner")}),q=N(it,{className:"".concat(o,"-handler-down-inner")}),te=typeof x=="boolean"?x:void 0;qe(x)==="object"&&(B=typeof x.upIcon>"u"?B:N("span",{className:"".concat(o,"-handler-up-inner"),children:x.upIcon}),q=typeof x.downIcon>"u"?q:N("span",{className:"".concat(o,"-handler-down-inner"),children:x.downIcon}));var G=c.exports.useContext(dt),j=G.hasFeedback,W=G.status,he=G.isFormItemInput,fe=G.feedbackIcon,X=ft(W,P),re=R||p,M=c.exports.useContext(lt),$=O||M,H=L((t={},g(t,"".concat(o,"-lg"),re==="large"),g(t,"".concat(o,"-sm"),re==="small"),g(t,"".concat(o,"-rtl"),l==="rtl"),g(t,"".concat(o,"-borderless"),!ee),g(t,"".concat(o,"-in-form-item"),he),t),Ie(o,X),y),K=N(Le,{ref:h,disabled:$,className:H,upHandler:B,downHandler:q,prefixCls:o,readOnly:U,controls:te,...F});if(_!=null||j){var I,m=L("".concat(o,"-affix-wrapper"),Ie("".concat(o,"-affix-wrapper"),X,j),(I={},g(I,"".concat(o,"-affix-wrapper-focused"),b),g(I,"".concat(o,"-affix-wrapper-disabled"),e.disabled),g(I,"".concat(o,"-affix-wrapper-sm"),p==="small"),g(I,"".concat(o,"-affix-wrapper-lg"),p==="large"),g(I,"".concat(o,"-affix-wrapper-rtl"),l==="rtl"),g(I,"".concat(o,"-affix-wrapper-readonly"),U),g(I,"".concat(o,"-affix-wrapper-borderless"),!ee),g(I,"".concat(y),!(w||k)&&y),I));K=ge("div",{className:m,style:e.style,onMouseUp:function(){return h.current.focus()},children:[_&&N("span",{className:"".concat(o,"-prefix"),children:_}),Te(K,{style:null,value:e.value,onFocus:function(V){var D;v(!0),(D=e.onFocus)===null||D===void 0||D.call(e,V)},onBlur:function(V){var D;v(!1),(D=e.onBlur)===null||D===void 0||D.call(e,V)}}),j&&N("span",{className:"".concat(o,"-suffix"),children:fe})]})}if(w!=null||k!=null){var A,ne="".concat(o,"-group"),Q="".concat(ne,"-addon"),Y=w?N("div",{className:Q,children:w}):null,ae=k?N("div",{className:Q,children:k}):null,de=L("".concat(o,"-wrapper"),ne,g({},"".concat(ne,"-rtl"),l==="rtl")),Se=L("".concat(o,"-group-wrapper"),(A={},g(A,"".concat(o,"-group-wrapper-sm"),p==="small"),g(A,"".concat(o,"-group-wrapper-lg"),p==="large"),g(A,"".concat(o,"-group-wrapper-rtl"),l==="rtl"),A),Ie("".concat(o,"-group-wrapper"),X,j),y);K=N("div",{className:Se,style:e.style,children:ge("div",{className:de,children:[Y&&N(Ae,{status:!0,override:!0,children:Y}),Te(K,{style:null,disabled:$}),ae&&N(Ae,{status:!0,override:!0,children:ae})]})})}return K});const At=Et;export{At as I};
