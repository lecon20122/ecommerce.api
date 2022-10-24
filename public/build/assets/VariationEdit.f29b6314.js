import{r as h,a as r,j as f,d as z,R as Pe}from"./app.c680bbd5.js";import{D as Te}from"./dashboard.0102a691.js";import{M as Re}from"./MediaProductCollection.6d3993a3.js";import{h as P}from"./index.m.9084c204.js";import{U as $e}from"./Helpers.f85c8818.js";import{o as Z,c as Ae,B as b}from"./button.743859a0.js";import{A as ue,_ as j,b as x,e as A,j as Me,c as Oe,aa as De,a as Ue,k as Ee,l as Fe,i as Le,h as qe}from"./index.52a35bea.js";import ie from"./ModalWithChildren.921d6b2c.js";import{F as S,R as Be,C as ne}from"./index.f780b725.js";import{I as oe}from"./index.0eff2fd3.js";import{I as V}from"./index.5a498983.js";import je from"./create.fd626d21.js";import{T as Ve}from"./ToggleDeleteRestoreButton.430256c2.js";import{S as B}from"./index.789f8c47.js";import{c as N}from"./assertThisInitialized.eb69e595.js";import{c as _}from"./index.b3d31cad.js";import{_ as He,b as me,d as We,a as Ge,c as Je,t as ve}from"./_stringToArray.5acc6e09.js";import{t as Xe}from"./debounce.62cb5ccb.js";import{T as Ye}from"./Table.9528ddc7.js";import"./inheritsLoose.b9acdf33.js";import"./index.d8221a20.js";import"./useMergedState.c9880330.js";import"./css.5e27d5aa.js";import"./DialogWrap.512b12b0.js";import"./motion.7a323949.js";import"./type.49ce19ba.js";import"./getScrollBarSize.5260b009.js";import"./useForceUpdate.dcd11e97.js";import"./DeleteOutlined.0a6a014e.js";import"./index.1c40f768.js";import"./styleChecker.08e649e5.js";import"./_baseIsEqual.36d51e97.js";import"./keys.2ec45bc5.js";import"./index.c1ac0ae7.js";import"./isSymbol.8428e410.js";import"./getDataOrAriaProps.08708643.js";var Ke={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"dot-chart",theme:"outlined"};const Ze=Ke;var fe=function(e,a){return r(ue,{...j(j({},e),{},{ref:a,icon:Ze})})};fe.displayName="DotChartOutlined";const Qe=h.exports.forwardRef(fe);var et={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"upload",theme:"outlined"};const tt=et;var pe=function(e,a){return r(ue,{...j(j({},e),{},{ref:a,icon:tt})})};pe.displayName="UploadOutlined";const at=h.exports.forwardRef(pe);var rt=9007199254740991,it=Math.floor;function nt(t,e){var a="";if(!t||e<1||e>rt)return a;do e%2&&(a+=t),e=it(e/2),e&&(t+=t);while(e);return a}var ot=nt,lt=He,st=lt("length"),ct=st,he="\\ud800-\\udfff",dt="\\u0300-\\u036f",ut="\\ufe20-\\ufe2f",mt="\\u20d0-\\u20ff",vt=dt+ut+mt,ft="\\ufe0e\\ufe0f",pt="["+he+"]",Y="["+vt+"]",K="\\ud83c[\\udffb-\\udfff]",ht="(?:"+Y+"|"+K+")",xe="[^"+he+"]",ge="(?:\\ud83c[\\udde6-\\uddff]){2}",Ce="[\\ud800-\\udbff][\\udc00-\\udfff]",xt="\\u200d",ye=ht+"?",Se="["+ft+"]?",gt="(?:"+xt+"(?:"+[xe,ge,Ce].join("|")+")"+Se+ye+")*",Ct=Se+ye+gt,yt="(?:"+[xe+Y+"?",Y,ge,Ce,pt].join("|")+")",le=RegExp(K+"(?="+K+")|"+yt+Ct,"g");function St(t){for(var e=le.lastIndex=0;le.test(t);)++e;return e}var _t=St,kt=ct,Nt=me,bt=_t;function It(t){return Nt(t)?bt(t):kt(t)}var Q=It,se=ot,wt=We,zt=Ge,Pt=me,Tt=Q,Rt=Je,$t=Math.ceil;function At(t,e){e=e===void 0?" ":wt(e);var a=e.length;if(a<2)return a?se(e,t):e;var i=se(e,$t(t/Tt(e)));return Pt(e)?zt(Rt(i),0,t).join(""):i.slice(0,t)}var _e=At,Mt=Xe,ce=1/0,Ot=17976931348623157e292;function Dt(t){if(!t)return t===0?t:0;if(t=Mt(t),t===ce||t===-ce){var e=t<0?-1:1;return e*Ot}return t===t?t:0}var Ut=Dt,Et=Ut;function Ft(t){var e=Et(t),a=e%1;return e===e?a?e-a:e:0}var ke=Ft,Lt=_e,qt=Q,Bt=ke,jt=ve;function Vt(t,e,a){t=jt(t),e=Bt(e);var i=e?qt(t):0;return e&&i<e?Lt(e-i,a)+t:t}var Ht=Vt,Wt=function(e){var a,i,n=e.prefixCls,l=e.className,d=e.style,o=e.size,s=e.shape,c=_((a={},x(a,"".concat(n,"-lg"),o==="large"),x(a,"".concat(n,"-sm"),o==="small"),a)),m=_((i={},x(i,"".concat(n,"-circle"),s==="circle"),x(i,"".concat(n,"-square"),s==="square"),x(i,"".concat(n,"-round"),s==="round"),i)),u=typeof o=="number"?{width:o,height:o,lineHeight:"".concat(o,"px")}:{};return r("span",{className:_(n,c,m,l),style:N(N({},u),d)})};const W=Wt;var Ne=function(e){var a=e.prefixCls,i=e.className,n=e.active,l=h.exports.useContext(A),d=l.getPrefixCls,o=d("skeleton",a),s=Z(e,["prefixCls","className"]),c=_(o,"".concat(o,"-element"),x({},"".concat(o,"-active"),n),i);return r("div",{className:c,children:r(W,{prefixCls:"".concat(o,"-avatar"),...s})})};Ne.defaultProps={size:"default",shape:"circle"};const Gt=Ne;var be=function(e){var a,i=e.prefixCls,n=e.className,l=e.active,d=e.block,o=d===void 0?!1:d,s=h.exports.useContext(A),c=s.getPrefixCls,m=c("skeleton",i),u=Z(e,["prefixCls"]),p=_(m,"".concat(m,"-element"),(a={},x(a,"".concat(m,"-active"),l),x(a,"".concat(m,"-block"),o),a),n);return r("div",{className:p,children:r(W,{prefixCls:"".concat(m,"-button"),...u})})};be.defaultProps={size:"default"};const Jt=be;var Xt=function(e){var a,i=e.prefixCls,n=e.className,l=e.style,d=e.active,o=h.exports.useContext(A),s=o.getPrefixCls,c=s("skeleton",i),m=_(c,"".concat(c,"-element"),x({},"".concat(c,"-active"),d),n),u=(a=e.children)!==null&&a!==void 0?a:r(Qe,{});return r("div",{className:m,children:r("div",{className:_("".concat(c,"-image"),n),style:l,children:u})})};const Yt=Xt;var Kt="M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",Zt=function(e){var a=e.prefixCls,i=e.className,n=e.style,l=e.active,d=h.exports.useContext(A),o=d.getPrefixCls,s=o("skeleton",a),c=_(s,"".concat(s,"-element"),x({},"".concat(s,"-active"),l),i);return r("div",{className:c,children:r("div",{className:_("".concat(s,"-image"),i),style:n,children:r("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:"".concat(s,"-image-svg"),children:r("path",{d:Kt,className:"".concat(s,"-image-path")})})})})};const Qt=Zt;var Ie=function(e){var a,i=e.prefixCls,n=e.className,l=e.active,d=e.block,o=h.exports.useContext(A),s=o.getPrefixCls,c=s("skeleton",i),m=Z(e,["prefixCls"]),u=_(c,"".concat(c,"-element"),(a={},x(a,"".concat(c,"-active"),l),x(a,"".concat(c,"-block"),d),a),n);return r("div",{className:u,children:r(W,{prefixCls:"".concat(c,"-input"),...m})})};Ie.defaultProps={size:"default"};const ea=Ie;var ta=function(e){var a=function(c){var m=e.width,u=e.rows,p=u===void 0?2:u;if(Array.isArray(m))return m[c];if(p-1===c)return m},i=e.prefixCls,n=e.className,l=e.style,d=e.rows,o=Me(Array(d)).map(function(s,c){return r("li",{style:{width:a(c)}},c)});return r("ul",{className:_(i,n),style:l,children:o})};const aa=ta;var ra=function(e){var a=e.prefixCls,i=e.className,n=e.width,l=e.style;return r("h3",{className:_(a,i),style:N({width:n},l)})};const ia=ra;function J(t){return t&&Oe(t)==="object"?t:{}}function na(t,e){return t&&!e?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}function oa(t,e){return!t&&e?{width:"38%"}:t&&e?{width:"50%"}:{}}function la(t,e){var a={};return(!t||!e)&&(a.width="61%"),!t&&e?a.rows=3:a.rows=2,a}var T=function(e){var a=e.prefixCls,i=e.loading,n=e.className,l=e.style,d=e.children,o=e.avatar,s=e.title,c=e.paragraph,m=e.active,u=e.round,p=h.exports.useContext(A),C=p.getPrefixCls,y=p.direction,g=C("skeleton",a);if(i||!("loading"in e)){var k,I=!!o,R=!!s,$=!!c,D;if(I){var G=N(N({prefixCls:"".concat(g,"-avatar")},na(R,$)),J(o));D=r("div",{className:"".concat(g,"-header"),children:r(W,{...G})})}var U;if(R||$){var E;if(R){var F=N(N({prefixCls:"".concat(g,"-title")},oa(I,$)),J(s));E=r(ia,{...F})}var M;if($){var L=N(N({prefixCls:"".concat(g,"-paragraph")},la(I,R)),J(c));M=r(aa,{...L})}U=f("div",{className:"".concat(g,"-content"),children:[E,M]})}var q=_(g,(k={},x(k,"".concat(g,"-with-avatar"),I),x(k,"".concat(g,"-active"),m),x(k,"".concat(g,"-rtl"),y==="rtl"),x(k,"".concat(g,"-round"),u),k),n);return f("div",{className:q,style:l,children:[D,U]})}return typeof d<"u"?d:null};T.defaultProps={avatar:!1,title:!0,paragraph:!0};T.Button=Jt;T.Avatar=Gt;T.Input=ea;T.Image=Qt;T.Node=Yt;const sa=T;var ca=_e,da=Q,ua=ke,ma=ve;function va(t,e,a){t=ma(t),e=ua(e);var i=e?da(t):0;return e&&i<e?t+ca(e-i,a):t}var fa=va,pa=function(e){var a=e.value,i=e.formatter,n=e.precision,l=e.decimalSeparator,d=e.groupSeparator,o=d===void 0?"":d,s=e.prefixCls,c;if(typeof i=="function")c=i(a);else{var m=String(a),u=m.match(/^(-?)(\d*)(\.(\d+))?$/);if(!u||m==="-")c=m;else{var p=u[1],C=u[2]||"0",y=u[4]||"";C=C.replace(/\B(?=(\d{3})+(?!\d))/g,o),typeof n=="number"&&(y=fa(y,n,"0").slice(0,n>0?n:0)),y&&(y="".concat(l).concat(y)),c=[f("span",{className:"".concat(s,"-content-value-int"),children:[p,C]},"int"),y&&r("span",{className:"".concat(s,"-content-value-decimal"),children:y},"decimal")]}}return r("span",{className:"".concat(s,"-content-value"),children:c})};const ha=pa;var we=function(e){var a=e.prefixCls,i=e.className,n=e.style,l=e.valueStyle,d=e.value,o=d===void 0?0:d,s=e.title,c=e.valueRender,m=e.prefix,u=e.suffix,p=e.loading,C=e.direction,y=e.onMouseEnter,g=e.onMouseLeave,k=r(ha,{...e,value:o}),I=_(a,x({},"".concat(a,"-rtl"),C==="rtl"),i);return f("div",{className:I,style:n,onMouseEnter:y,onMouseLeave:g,children:[s&&r("div",{className:"".concat(a,"-title"),children:s}),r(sa,{paragraph:!1,loading:p,className:"".concat(a,"-skeleton"),children:f("div",{style:l,className:"".concat(a,"-content"),children:[m&&r("span",{className:"".concat(a,"-content-prefix"),children:m}),c?c(k):k,u&&r("span",{className:"".concat(a,"-content-suffix"),children:u})]})})]})};we.defaultProps={decimalSeparator:".",groupSeparator:",",loading:!1};var xa=De({prefixCls:"statistic"})(we);const H=xa;var ga=[["Y",1e3*60*60*24*365],["M",1e3*60*60*24*30],["D",1e3*60*60*24],["H",1e3*60*60],["m",1e3*60],["s",1e3],["S",1]];function Ca(t,e){var a=t,i=/\[[^\]]*]/g,n=(e.match(i)||[]).map(function(s){return s.slice(1,-1)}),l=e.replace(i,"[]"),d=ga.reduce(function(s,c){var m=Ue(c,2),u=m[0],p=m[1];if(s.indexOf(u)!==-1){var C=Math.floor(a/p);return a-=C*p,s.replace(new RegExp("".concat(u,"+"),"g"),function(y){var g=y.length;return Ht(C.toString(),g,"0")})}return s},l),o=0;return d.replace(i,function(){var s=n[o];return o+=1,s})}function ya(t,e){var a=e.format,i=a===void 0?"":a,n=new Date(t).getTime(),l=Date.now(),d=Math.max(n-l,0);return Ca(d,i)}var Sa=1e3/30;function X(t){return new Date(t).getTime()}var ze=function(t){Ee(a,t);var e=Fe(a);function a(){var i;return Le(this,a),i=e.apply(this,arguments),i.syncTimer=function(){var n=i.props.value,l=X(n);l>=Date.now()?i.startTimer():i.stopTimer()},i.startTimer=function(){if(!i.countdownId){var n=i.props,l=n.onChange,d=n.value,o=X(d);i.countdownId=window.setInterval(function(){i.forceUpdate(),l&&o>Date.now()&&l(o-Date.now())},Sa)}},i.stopTimer=function(){var n=i.props,l=n.onFinish,d=n.value;if(i.countdownId){clearInterval(i.countdownId),i.countdownId=void 0;var o=X(d);l&&o<Date.now()&&l()}},i.formatCountdown=function(n,l){var d=i.props.format;return ya(n,N(N({},l),{format:d}))},i.valueRender=function(n){return Ae(n,{title:void 0})},i}return qe(a,[{key:"componentDidMount",value:function(){this.syncTimer()}},{key:"componentDidUpdate",value:function(){this.syncTimer()}},{key:"componentWillUnmount",value:function(){this.stopTimer()}},{key:"render",value:function(){return r(H,{valueRender:this.valueRender,...this.props,formatter:this.formatCountdown})}}]),a}(h.exports.Component);ze.defaultProps={format:"HH:mm:ss"};const _a=ze;H.Countdown=_a;function de({param:t,routeName:e,multiple:a,buttonLabel:i="Click to Upload"}){const[n,l]=h.exports.useState([]),[d,o]=h.exports.useState(!1),s=()=>{const u=new FormData;n.forEach(p=>{u.append("images[]",p.originFileObj)}),o(!0),z.Inertia.post(P(e,t),u,{preserveState:!1})},c=u=>{const p=n.indexOf(u),C=n.slice();C.splice(p,1),l(C)},m=u=>{l(u.fileList)};return f("div",{className:"py-2",children:[r($e,{onChange:u=>m(u),listType:"picture",onRemove:c,multiple:a,children:n.length<6&&r(b,{icon:r(at,{}),children:i})}),r(b,{className:"flex",type:"default",onClick:s,disabled:n.length===0,loading:d,style:{marginTop:16},children:d?"Uploading":"Start Upload"})]})}function ka({openAddStock:t,openSubtractStock:e,setOpenAddStock:a,setOpenSubtractStock:i,currentVariationId:n}){const l=o=>{z.Inertia.post(P("admin.add.stock"),o,{preserveState:!1})},d=o=>{z.Inertia.post(P("admin.subtract.stock"),o,{preserveState:!1})};return f("div",{children:[r(ie,{title:"Add New Stock",openModal:t,onOk:()=>a(!1),onCancel:()=>a(!1),children:f(S,{onFinish:l,children:[r(S.Item,{label:"New Stock Amount",name:"amount",rules:[{required:!0,type:"integer",message:"Stock Amount is required"}],children:r(oe,{prefix:"+",min:1,max:1e3})}),r(S.Item,{hidden:!0,name:"variation_id",initialValue:n,children:r(V,{})}),r(S.Item,{children:r(b,{type:"default",htmlType:"submit",children:"Submit"})})]})}),r(ie,{title:"Remove Stock Amount",openModal:e,onOk:()=>i(!1),onCancel:()=>i(!1),children:f(S,{onFinish:d,children:[r(S.Item,{label:"Remove Stock Amount",name:"amount",rules:[{required:!0,type:"integer",message:"Stock Amount to remove is required"}],children:r(oe,{prefix:"-",min:1,max:1e3})}),r(S.Item,{hidden:!0,name:"variation_id",initialValue:n,children:r(V,{})}),r(S.Item,{children:r(b,{type:"default",htmlType:"submit",children:"Submit"})})]})})]})}function or({currentVariation:t,variationTypesValues:e,variationTypes:a,locale:i}){var F,M,L,q,ee,te,ae,re;console.log(t);const[n,l]=h.exports.useState(0),[d,o]=h.exports.useState(!1),[s,c]=h.exports.useState(!1),[m,u]=h.exports.useState(!1),[p,C]=h.exports.useState([{id:0,value:{en:"",ar:""},variation_type_id:0}]),y=v=>{z.Inertia.post(P("admin.variations.restore",v.id),void 0,{preserveState:!1})},g=v=>{z.Inertia.get(P("admin.variations.edit",v.id))},k=v=>{z.Inertia.post(P("admin.variations.destroy",v.id),void 0,{preserveState:!1})},I=v=>f(Pe.Fragment,{children:[r(Ve,{handleOnClickRestore:y,handleOnClickDelete:k,params:v}),r(b,{className:"mr-2",onClick:()=>g(v),children:"UPDATE"})]}),R=[{title:"ID",dataIndex:"id",key:"id"},{title:"Variation Type Value",dataIndex:"variation_type_value",key:"variation_type_value",render:(v,w)=>{var O;return r("span",{children:(O=w.variation_type_value)==null?void 0:O.value.en})}},{title:"Variation Type",dataIndex:"variation_type",key:"variation_type",render:(v,w)=>{var O;return r("span",{children:(O=w.variation_type)==null?void 0:O.type.en})}},{title:"Price",dataIndex:"price",key:"price"},{title:"Order",dataIndex:"order",key:"order",responsive:["lg"]},{title:"Deleted at",dataIndex:"deleted_at",key:"deleted_at",responsive:["lg"]},{title:"Action",dataIndex:"",key:"x",render:(v,w)=>I(w)}],[$]=S.useForm(),D=v=>{z.Inertia.post(P("admin.variations.update",t),v,{preserveState:!1})},G=a.map(v=>r(B.Option,{value:v.id,children:v.type.en},v.id)),U=p.map(v=>r(B.Option,{value:v.id,children:v.value.en},v.id)),E=v=>{l(v)};return h.exports.useEffect(()=>{const v=e.filter(w=>w.variation_type_id==n);C(v)},[n]),r(Te,{children:f("div",{className:"container mx-auto",children:[f(Be,{gutter:16,className:"text-center py-5 border border-b-black border-1 p-1",children:[r(ne,{span:12,className:"flex items-center justify-center",children:(F=t.variation_type)!=null&&F.is_stockable?f("div",{className:"flex-col items-center justify-center space-y-2 space-x-2",children:[f("h1",{children:["Available Stock : ",t.stock_count]}),r(b,{size:"large",onClick:()=>o(!0),children:"Add Stock"}),r(b,{size:"large",onClick:()=>u(!0),children:"Remove Stock"})]}):r(b,{size:"large",onClick:v=>c(!0),children:"Add Size"})}),f(ne,{span:12,className:"flex space-x-2 items-center justify-center",children:[r(H,{title:"Current Type",value:(M=t.variation_type)==null?void 0:M.type.en.toUpperCase()}),r(H,{title:"Value",value:(L=t.variation_type_value)==null?void 0:L.value.en,precision:2,valueStyle:{color:(q=t.variation_type_value)==null?void 0:q.value.en.toLowerCase()}})]})]}),r(ka,{setOpenAddStock:o,openAddStock:d,setOpenSubtractStock:u,openSubtractStock:m,currentVariationId:t.id}),f("div",{className:"grid grid-cols-2",children:[r("div",{className:"col-1",children:f(S,{form:$,name:"horizontal_login",layout:"horizontal",onFinish:D,className:"py-5 px-5",size:"large",children:[r(S.Item,{initialValue:t.order,label:"Order",name:"order",children:r(V,{placeholder:"Title",type:"number"})}),r(S.Item,{initialValue:t.price,label:"Price EN",name:"price",children:r(V,{placeholder:"Title",type:"number",prefix:"EGP"})}),r(S.Item,{label:"Type List",name:"variation_type_id",initialValue:(ee=t.variation_type)==null?void 0:ee.id,children:r(B,{allowClear:!0,onSelect:v=>E(v),children:G})}),r(S.Item,{initialValue:(te=t.variation_type_value)==null?void 0:te.id,label:"Type Value List",name:"variation_type_value_id",children:r(B,{allowClear:!0,children:U})}),r(S.Item,{shouldUpdate:!0,children:()=>r(b,{type:"default",size:"large",htmlType:"submit",children:"Update"})})]})}),((ae=t.variation_type)==null?void 0:ae.is_mediable)&&f("div",{className:"p-2",children:[r("h1",{className:"",children:"Variation Images Max : 6"}),r(Re,{params:t,media:t.media,deleteURL:"admin.delete.media.of.variations"}),f("div",{className:"flex flex-wrap space-x-1",children:[r(de,{param:t,buttonLabel:"Upload Images",routeName:"admin.add.media.to.variation",multiple:!0}),r(de,{param:t,routeName:"admin.add.color.image.to.variation",multiple:!1,buttonLabel:"Color Image"})]})]})]}),f("div",{children:[r(je,{handleAddDialog:v=>c(!1),openAddDialog:s,productId:t.product_id,locale:i,variationTypes:a,variationTypesValues:e,store_id:t.store_id,parentId:t.id}),((re=t.variation_type)==null?void 0:re.type.en)==="color"&&r(Ye,{columns:R,rowKey:"id",dataSource:t.children,scroll:{x:!0}})]})]})})}export{or as default};