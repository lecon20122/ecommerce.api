import{R as kn}from"./app.729b6301.js";var p={exports:{}},te="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ne=te,ee=ne;function xn(){}function wn(){}wn.resetWarningCache=xn;var ae=function(){function t(a,r,o,i,s,f){if(f!==ee){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function n(){return t}var e={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:n,element:t,elementType:t,instanceOf:n,node:t,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:wn,resetWarningCache:xn};return e.PropTypes=e,e};p.exports=ae();/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function Xt(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function l(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?Xt(Object(e),!0).forEach(function(a){oe(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Xt(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function rt(t){return rt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},rt(t)}function re(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function Vt(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function ie(t,n,e){return n&&Vt(t.prototype,n),e&&Vt(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function oe(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function Rt(t,n){return fe(t)||ce(t,n)||An(t,n)||me()}function lt(t){return se(t)||le(t)||An(t)||ue()}function se(t){if(Array.isArray(t))return kt(t)}function fe(t){if(Array.isArray(t))return t}function le(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ce(t,n){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var a=[],r=!0,o=!1,i,s;try{for(e=e.call(t);!(r=(i=e.next()).done)&&(a.push(i.value),!(n&&a.length===n));r=!0);}catch(f){o=!0,s=f}finally{try{!r&&e.return!=null&&e.return()}finally{if(o)throw s}}return a}}function An(t,n){if(!!t){if(typeof t=="string")return kt(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return kt(t,n)}}function kt(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function ue(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function me(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var qt=function(){},Lt={},On={},Sn=null,Pn={mark:qt,measure:qt};try{typeof window<"u"&&(Lt=window),typeof document<"u"&&(On=document),typeof MutationObserver<"u"&&(Sn=MutationObserver),typeof performance<"u"&&(Pn=performance)}catch{}var de=Lt.navigator||{},Kt=de.userAgent,Qt=Kt===void 0?"":Kt,z=Lt,g=On,Jt=Sn,tt=Pn;z.document;var _=!!g.documentElement&&!!g.head&&typeof g.addEventListener=="function"&&typeof g.createElement=="function",En=~Qt.indexOf("MSIE")||~Qt.indexOf("Trident/"),C="___FONT_AWESOME___",xt=16,In="fa",Cn="svg-inline--fa",D="data-fa-i2svg",wt="data-fa-pseudo-element",ve="data-fa-pseudo-element-pending",zt="data-prefix",Ft="data-icon",Zt="fontawesome-i2svg",pe="async",be=["HTML","HEAD","STYLE","SCRIPT"],Tn=function(){try{return!0}catch{return!1}}(),jt={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},it={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},Nn={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},ge={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},he=/fa[srltdbk\-\ ]/,_n="fa-layers-text",ye=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,ke={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},Mn=[1,2,3,4,5,6,7,8,9,10],xe=Mn.concat([11,12,13,14,15,16,17,18,19,20]),we=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],j={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ae=[].concat(lt(Object.keys(it)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",j.GROUP,j.SWAP_OPACITY,j.PRIMARY,j.SECONDARY]).concat(Mn.map(function(t){return"".concat(t,"x")})).concat(xe.map(function(t){return"w-".concat(t)})),Rn=z.FontAwesomeConfig||{};function Oe(t){var n=g.querySelector("script["+t+"]");if(n)return n.getAttribute(t)}function Se(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(g&&typeof g.querySelector=="function"){var Pe=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Pe.forEach(function(t){var n=Rt(t,2),e=n[0],a=n[1],r=Se(Oe(e));r!=null&&(Rn[a]=r)})}var Ee={familyPrefix:In,styleDefault:"solid",replacementClass:Cn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},K=l(l({},Ee),Rn);K.autoReplaceSvg||(K.observeMutations=!1);var d={};Object.keys(K).forEach(function(t){Object.defineProperty(d,t,{enumerable:!0,set:function(e){K[t]=e,nt.forEach(function(a){return a(d)})},get:function(){return K[t]}})});z.FontAwesomeConfig=d;var nt=[];function Ie(t){return nt.push(t),function(){nt.splice(nt.indexOf(t),1)}}var R=xt,I={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ce(t){if(!(!t||!_)){var n=g.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;for(var e=g.head.childNodes,a=null,r=e.length-1;r>-1;r--){var o=e[r],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=o)}return g.head.insertBefore(n,a),t}}var Te="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function J(){for(var t=12,n="";t-- >0;)n+=Te[Math.random()*62|0];return n}function B(t){for(var n=[],e=(t||[]).length>>>0;e--;)n[e]=t[e];return n}function Dt(t){return t.classList?B(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(n){return n})}function Ln(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ne(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,'="').concat(Ln(t[e]),'" ')},"").trim()}function ct(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,": ").concat(t[e].trim(),";")},"")}function Yt(t){return t.size!==I.size||t.x!==I.x||t.y!==I.y||t.rotate!==I.rotate||t.flipX||t.flipY}function _e(t){var n=t.transform,e=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(e/2," 256)")},o="translate(".concat(n.x*32,", ").concat(n.y*32,") "),i="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),f={transform:"".concat(o," ").concat(i," ").concat(s)},u={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:u}}function Me(t){var n=t.transform,e=t.width,a=e===void 0?xt:e,r=t.height,o=r===void 0?xt:r,i=t.startCentered,s=i===void 0?!1:i,f="";return s&&En?f+="translate(".concat(n.x/R-a/2,"em, ").concat(n.y/R-o/2,"em) "):s?f+="translate(calc(-50% + ".concat(n.x/R,"em), calc(-50% + ").concat(n.y/R,"em)) "):f+="translate(".concat(n.x/R,"em, ").concat(n.y/R,"em) "),f+="scale(".concat(n.size/R*(n.flipX?-1:1),", ").concat(n.size/R*(n.flipY?-1:1),") "),f+="rotate(".concat(n.rotate,"deg) "),f}var Re=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function zn(){var t=In,n=Cn,e=d.familyPrefix,a=d.replacementClass,r=Re;if(e!==t||a!==n){var o=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");r=r.replace(o,".".concat(e,"-")).replace(i,"--".concat(e,"-")).replace(s,".".concat(a))}return r}var tn=!1;function pt(){d.autoAddCss&&!tn&&(Ce(zn()),tn=!0)}var Le={mixout:function(){return{dom:{css:zn,insertCss:pt}}},hooks:function(){return{beforeDOMElementCreation:function(){pt()},beforeI2svg:function(){pt()}}}},T=z||{};T[C]||(T[C]={});T[C].styles||(T[C].styles={});T[C].hooks||(T[C].hooks={});T[C].shims||(T[C].shims=[]);var E=T[C],Fn=[],ze=function t(){g.removeEventListener("DOMContentLoaded",t),ot=1,Fn.map(function(n){return n()})},ot=!1;_&&(ot=(g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState),ot||g.addEventListener("DOMContentLoaded",ze));function Fe(t){!_||(ot?setTimeout(t,0):Fn.push(t))}function Z(t){var n=t.tag,e=t.attributes,a=e===void 0?{}:e,r=t.children,o=r===void 0?[]:r;return typeof t=="string"?Ln(t):"<".concat(n," ").concat(Ne(a),">").concat(o.map(Z).join(""),"</").concat(n,">")}function nn(t,n,e){if(t&&t[n]&&t[n][e])return{prefix:n,iconName:e,icon:t[n][e]}}var je=function(n,e){return function(a,r,o,i){return n.call(e,a,r,o,i)}},bt=function(n,e,a,r){var o=Object.keys(n),i=o.length,s=r!==void 0?je(e,r):e,f,u,c;for(a===void 0?(f=1,c=n[o[0]]):(f=0,c=a);f<i;f++)u=o[f],c=s(c,n[u],u,n);return c};function De(t){for(var n=[],e=0,a=t.length;e<a;){var r=t.charCodeAt(e++);if(r>=55296&&r<=56319&&e<a){var o=t.charCodeAt(e++);(o&64512)==56320?n.push(((r&1023)<<10)+(o&1023)+65536):(n.push(r),e--)}else n.push(r)}return n}function At(t){var n=De(t);return n.length===1?n[0].toString(16):null}function Ye(t,n){var e=t.length,a=t.charCodeAt(n),r;return a>=55296&&a<=56319&&e>n+1&&(r=t.charCodeAt(n+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function en(t){return Object.keys(t).reduce(function(n,e){var a=t[e],r=!!a.icon;return r?n[a.iconName]=a.icon:n[e]=a,n},{})}function Ot(t,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=e.skipHooks,r=a===void 0?!1:a,o=en(n);typeof E.hooks.addPack=="function"&&!r?E.hooks.addPack(t,en(n)):E.styles[t]=l(l({},E.styles[t]||{}),o),t==="fas"&&Ot("fa",n)}var Q=E.styles,$e=E.shims,Ue=Object.values(Nn),$t=null,jn={},Dn={},Yn={},$n={},Un={},We=Object.keys(jt);function He(t){return~Ae.indexOf(t)}function Ge(t,n){var e=n.split("-"),a=e[0],r=e.slice(1).join("-");return a===t&&r!==""&&!He(r)?r:null}var Wn=function(){var n=function(o){return bt(Q,function(i,s,f){return i[f]=bt(s,o,{}),i},{})};jn=n(function(r,o,i){if(o[3]&&(r[o[3]]=i),o[2]){var s=o[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=i})}return r}),Dn=n(function(r,o,i){if(r[i]=i,o[2]){var s=o[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=i})}return r}),Un=n(function(r,o,i){var s=o[2];return r[i]=i,s.forEach(function(f){r[f]=i}),r});var e="far"in Q||d.autoFetchSvg,a=bt($e,function(r,o){var i=o[0],s=o[1],f=o[2];return s==="far"&&!e&&(s="fas"),typeof i=="string"&&(r.names[i]={prefix:s,iconName:f}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});Yn=a.names,$n=a.unicodes,$t=ut(d.styleDefault)};Ie(function(t){$t=ut(t.styleDefault)});Wn();function Ut(t,n){return(jn[t]||{})[n]}function Be(t,n){return(Dn[t]||{})[n]}function U(t,n){return(Un[t]||{})[n]}function Hn(t){return Yn[t]||{prefix:null,iconName:null}}function Xe(t){var n=$n[t],e=Ut("fas",t);return n||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function F(){return $t}var Wt=function(){return{prefix:null,iconName:null,rest:[]}};function ut(t){var n=jt[t],e=it[t]||it[n],a=t in E.styles?t:null;return e||a||null}function mt(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.skipLookups,a=e===void 0?!1:e,r=null,o=t.reduce(function(i,s){var f=Ge(d.familyPrefix,s);if(Q[s]?(s=Ue.includes(s)?ge[s]:s,r=s,i.prefix=s):We.indexOf(s)>-1?(r=s,i.prefix=ut(s)):f?i.iconName=f:s!==d.replacementClass&&i.rest.push(s),!a&&i.prefix&&i.iconName){var u=r==="fa"?Hn(i.iconName):{},c=U(i.prefix,i.iconName);u.prefix&&(r=null),i.iconName=u.iconName||c||i.iconName,i.prefix=u.prefix||i.prefix,i.prefix==="far"&&!Q.far&&Q.fas&&!d.autoFetchSvg&&(i.prefix="fas")}return i},Wt());return(o.prefix==="fa"||r==="fa")&&(o.prefix=F()||"fas"),o}var Ve=function(){function t(){re(this,t),this.definitions={}}return ie(t,[{key:"add",value:function(){for(var e=this,a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){e.definitions[s]=l(l({},e.definitions[s]||{}),i[s]),Ot(s,i[s]);var f=Nn[s];f&&Ot(f,i[s]),Wn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(o){var i=r[o],s=i.prefix,f=i.iconName,u=i.icon,c=u[2];e[s]||(e[s]={}),c.length>0&&c.forEach(function(m){typeof m=="string"&&(e[s][m]=u)}),e[s][f]=u}),e}}]),t}(),an=[],W={},G={},qe=Object.keys(G);function Ke(t,n){var e=n.mixoutsTo;return an=t,W={},Object.keys(G).forEach(function(a){qe.indexOf(a)===-1&&delete G[a]}),an.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(e[i]=r[i]),rt(r[i])==="object"&&Object.keys(r[i]).forEach(function(s){e[i]||(e[i]={}),e[i][s]=r[i][s]})}),a.hooks){var o=a.hooks();Object.keys(o).forEach(function(i){W[i]||(W[i]=[]),W[i].push(o[i])})}a.provides&&a.provides(G)}),e}function St(t,n){for(var e=arguments.length,a=new Array(e>2?e-2:0),r=2;r<e;r++)a[r-2]=arguments[r];var o=W[t]||[];return o.forEach(function(i){n=i.apply(null,[n].concat(a))}),n}function Y(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),a=1;a<n;a++)e[a-1]=arguments[a];var r=W[t]||[];r.forEach(function(o){o.apply(null,e)})}function N(){var t=arguments[0],n=Array.prototype.slice.call(arguments,1);return G[t]?G[t].apply(null,n):void 0}function Pt(t){t.prefix==="fa"&&(t.prefix="fas");var n=t.iconName,e=t.prefix||F();if(!!n)return n=U(e,n)||n,nn(Gn.definitions,e,n)||nn(E.styles,e,n)}var Gn=new Ve,Qe=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,Y("noAuto")},Je={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return _?(Y("beforeI2svg",n),N("pseudoElements2svg",n),N("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,Fe(function(){ta({autoReplaceSvgRoot:e}),Y("watch",n)})}},Ze={icon:function(n){if(n===null)return null;if(rt(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:U(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var e=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],a=ut(n[0]);return{prefix:a,iconName:U(a,e)||e}}if(typeof n=="string"&&(n.indexOf("".concat(d.familyPrefix,"-"))>-1||n.match(he))){var r=mt(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||F(),iconName:U(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){var o=F();return{prefix:o,iconName:U(o,n)||n}}}},S={noAuto:Qe,config:d,dom:Je,parse:Ze,library:Gn,findIconDefinition:Pt,toHtml:Z},ta=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot,a=e===void 0?g:e;(Object.keys(E.styles).length>0||d.autoFetchSvg)&&_&&d.autoReplaceSvg&&S.dom.i2svg({node:a})};function dt(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return Z(a)})}}),Object.defineProperty(t,"node",{get:function(){if(!!_){var a=g.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function na(t){var n=t.children,e=t.main,a=t.mask,r=t.attributes,o=t.styles,i=t.transform;if(Yt(i)&&e.found&&!a.found){var s=e.width,f=e.height,u={x:s/f/2,y:.5};r.style=ct(l(l({},o),{},{"transform-origin":"".concat(u.x+i.x/16,"em ").concat(u.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function ea(t){var n=t.prefix,e=t.iconName,a=t.children,r=t.attributes,o=t.symbol,i=o===!0?"".concat(n,"-").concat(d.familyPrefix,"-").concat(e):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},r),{},{id:i}),children:a}]}]}function Ht(t){var n=t.icons,e=n.main,a=n.mask,r=t.prefix,o=t.iconName,i=t.transform,s=t.symbol,f=t.title,u=t.maskId,c=t.titleId,m=t.extra,v=t.watchable,b=v===void 0?!1:v,x=a.found?a:e,O=x.width,h=x.height,A=r==="fak",y=[d.replacementClass,o?"".concat(d.familyPrefix,"-").concat(o):""].filter(function($){return m.classes.indexOf($)===-1}).filter(function($){return $!==""||!!$}).concat(m.classes).join(" "),k={children:[],attributes:l(l({},m.attributes),{},{"data-prefix":r,"data-icon":o,class:y,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(O," ").concat(h)})},P=A&&!~m.classes.indexOf("fa-fw")?{width:"".concat(O/h*16*.0625,"em")}:{};b&&(k.attributes[D]=""),f&&(k.children.push({tag:"title",attributes:{id:k.attributes["aria-labelledby"]||"title-".concat(c||J())},children:[f]}),delete k.attributes.title);var w=l(l({},k),{},{prefix:r,iconName:o,main:e,mask:a,maskId:u,transform:i,symbol:s,styles:l(l({},P),m.styles)}),M=a.found&&e.found?N("generateAbstractMask",w)||{children:[],attributes:{}}:N("generateAbstractIcon",w)||{children:[],attributes:{}},X=M.children,V=M.attributes;return w.children=X,w.attributes=V,s?ea(w):na(w)}function rn(t){var n=t.content,e=t.width,a=t.height,r=t.transform,o=t.title,i=t.extra,s=t.watchable,f=s===void 0?!1:s,u=l(l(l({},i.attributes),o?{title:o}:{}),{},{class:i.classes.join(" ")});f&&(u[D]="");var c=l({},i.styles);Yt(r)&&(c.transform=Me({transform:r,startCentered:!0,width:e,height:a}),c["-webkit-transform"]=c.transform);var m=ct(c);m.length>0&&(u.style=m);var v=[];return v.push({tag:"span",attributes:u,children:[n]}),o&&v.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),v}function aa(t){var n=t.content,e=t.title,a=t.extra,r=l(l(l({},a.attributes),e?{title:e}:{}),{},{class:a.classes.join(" ")}),o=ct(a.styles);o.length>0&&(r.style=o);var i=[];return i.push({tag:"span",attributes:r,children:[n]}),e&&i.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),i}var gt=E.styles;function Et(t){var n=t[0],e=t[1],a=t.slice(4),r=Rt(a,1),o=r[0],i=null;return Array.isArray(o)?i={tag:"g",attributes:{class:"".concat(d.familyPrefix,"-").concat(j.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.familyPrefix,"-").concat(j.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(d.familyPrefix,"-").concat(j.PRIMARY),fill:"currentColor",d:o[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:n,height:e,icon:i}}var ra={found:!1,width:512,height:512};function ia(t,n){!Tn&&!d.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(n,'" is missing.'))}function It(t,n){var e=n;return n==="fa"&&d.styleDefault!==null&&(n=F()),new Promise(function(a,r){if(N("missingIconAbstract"),e==="fa"){var o=Hn(t)||{};t=o.iconName||t,n=o.prefix||n}if(t&&n&&gt[n]&&gt[n][t]){var i=gt[n][t];return a(Et(i))}ia(t,n),a(l(l({},ra),{},{icon:d.showMissingIcons&&t?N("missingIconAbstract")||{}:{}}))})}var on=function(){},Ct=d.measurePerformance&&tt&&tt.mark&&tt.measure?tt:{mark:on,measure:on},q='FA "6.1.1"',oa=function(n){return Ct.mark("".concat(q," ").concat(n," begins")),function(){return Bn(n)}},Bn=function(n){Ct.mark("".concat(q," ").concat(n," ends")),Ct.measure("".concat(q," ").concat(n),"".concat(q," ").concat(n," begins"),"".concat(q," ").concat(n," ends"))},Gt={begin:oa,end:Bn},et=function(){};function sn(t){var n=t.getAttribute?t.getAttribute(D):null;return typeof n=="string"}function sa(t){var n=t.getAttribute?t.getAttribute(zt):null,e=t.getAttribute?t.getAttribute(Ft):null;return n&&e}function fa(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(d.replacementClass)}function la(){if(d.autoReplaceSvg===!0)return at.replace;var t=at[d.autoReplaceSvg];return t||at.replace}function ca(t){return g.createElementNS("http://www.w3.org/2000/svg",t)}function ua(t){return g.createElement(t)}function Xn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.ceFn,a=e===void 0?t.tag==="svg"?ca:ua:e;if(typeof t=="string")return g.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])});var o=t.children||[];return o.forEach(function(i){r.appendChild(Xn(i,{ceFn:a}))}),r}function ma(t){var n=" ".concat(t.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var at={replace:function(n){var e=n[0];if(e.parentNode)if(n[1].forEach(function(r){e.parentNode.insertBefore(Xn(r),e)}),e.getAttribute(D)===null&&d.keepOriginalSource){var a=g.createComment(ma(e));e.parentNode.replaceChild(a,e)}else e.remove()},nest:function(n){var e=n[0],a=n[1];if(~Dt(e).indexOf(d.replacementClass))return at.replace(n);var r=new RegExp("".concat(d.familyPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var o=a[0].attributes.class.split(" ").reduce(function(s,f){return f===d.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});a[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",o.toNode.join(" "))}var i=a.map(function(s){return Z(s)}).join(`
`);e.setAttribute(D,""),e.innerHTML=i}};function fn(t){t()}function Vn(t,n){var e=typeof n=="function"?n:et;if(t.length===0)e();else{var a=fn;d.mutateApproach===pe&&(a=z.requestAnimationFrame||fn),a(function(){var r=la(),o=Gt.begin("mutate");t.map(r),o(),e()})}}var Bt=!1;function qn(){Bt=!0}function Tt(){Bt=!1}var st=null;function ln(t){if(!!Jt&&!!d.observeMutations){var n=t.treeCallback,e=n===void 0?et:n,a=t.nodeCallback,r=a===void 0?et:a,o=t.pseudoElementsCallback,i=o===void 0?et:o,s=t.observeMutationsRoot,f=s===void 0?g:s;st=new Jt(function(u){if(!Bt){var c=F();B(u).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!sn(m.addedNodes[0])&&(d.searchPseudoElements&&i(m.target),e(m.target)),m.type==="attributes"&&m.target.parentNode&&d.searchPseudoElements&&i(m.target.parentNode),m.type==="attributes"&&sn(m.target)&&~we.indexOf(m.attributeName))if(m.attributeName==="class"&&sa(m.target)){var v=mt(Dt(m.target)),b=v.prefix,x=v.iconName;m.target.setAttribute(zt,b||c),x&&m.target.setAttribute(Ft,x)}else fa(m.target)&&r(m.target)})}}),_&&st.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function da(){!st||st.disconnect()}function va(t){var n=t.getAttribute("style"),e=[];return n&&(e=n.split(";").reduce(function(a,r){var o=r.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(a[i]=s.join(":").trim()),a},{})),e}function pa(t){var n=t.getAttribute("data-prefix"),e=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=mt(Dt(t));return r.prefix||(r.prefix=F()),n&&e&&(r.prefix=n,r.iconName=e),r.iconName&&r.prefix||r.prefix&&a.length>0&&(r.iconName=Be(r.prefix,t.innerText)||Ut(r.prefix,At(t.innerText))),r}function ba(t){var n=B(t.attributes).reduce(function(r,o){return r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r},{}),e=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return d.autoA11y&&(e?n["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(a||J()):(n["aria-hidden"]="true",n.focusable="false")),n}function ga(){return{iconName:null,title:null,titleId:null,prefix:null,transform:I,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function cn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=pa(t),a=e.iconName,r=e.prefix,o=e.rest,i=ba(t),s=St("parseNodeAttributes",{},t),f=n.styleParser?va(t):[];return l({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:I,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:f,attributes:i}},s)}var ha=E.styles;function Kn(t){var n=d.autoReplaceSvg==="nest"?cn(t,{styleParser:!1}):cn(t);return~n.extra.classes.indexOf(_n)?N("generateLayersText",t,n):N("generateSvgReplacementMutation",t,n)}function un(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!_)return Promise.resolve();var e=g.documentElement.classList,a=function(m){return e.add("".concat(Zt,"-").concat(m))},r=function(m){return e.remove("".concat(Zt,"-").concat(m))},o=d.autoFetchSvg?Object.keys(jt):Object.keys(ha),i=[".".concat(_n,":not([").concat(D,"])")].concat(o.map(function(c){return".".concat(c,":not([").concat(D,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=B(t.querySelectorAll(i))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var f=Gt.begin("onTree"),u=s.reduce(function(c,m){try{var v=Kn(m);v&&c.push(v)}catch(b){Tn||b.name==="MissingIcon"&&console.error(b)}return c},[]);return new Promise(function(c,m){Promise.all(u).then(function(v){Vn(v,function(){a("active"),a("complete"),r("pending"),typeof n=="function"&&n(),f(),c()})}).catch(function(v){f(),m(v)})})}function ya(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Kn(t).then(function(e){e&&Vn([e],n)})}function ka(t){return function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(n||{}).icon?n:Pt(n||{}),r=e.mask;return r&&(r=(r||{}).icon?r:Pt(r||{})),t(a,l(l({},e),{},{mask:r}))}}var xa=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.transform,r=a===void 0?I:a,o=e.symbol,i=o===void 0?!1:o,s=e.mask,f=s===void 0?null:s,u=e.maskId,c=u===void 0?null:u,m=e.title,v=m===void 0?null:m,b=e.titleId,x=b===void 0?null:b,O=e.classes,h=O===void 0?[]:O,A=e.attributes,y=A===void 0?{}:A,k=e.styles,P=k===void 0?{}:k;if(!!n){var w=n.prefix,M=n.iconName,X=n.icon;return dt(l({type:"icon"},n),function(){return Y("beforeDOMElementCreation",{iconDefinition:n,params:e}),d.autoA11y&&(v?y["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(x||J()):(y["aria-hidden"]="true",y.focusable="false")),Ht({icons:{main:Et(X),mask:f?Et(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:w,iconName:M,transform:l(l({},I),r),symbol:i,title:v,maskId:c,titleId:x,extra:{attributes:y,styles:P,classes:h}})})}},wa={mixout:function(){return{icon:ka(xa)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=un,e.nodeCallback=ya,e}}},provides:function(n){n.i2svg=function(e){var a=e.node,r=a===void 0?g:a,o=e.callback,i=o===void 0?function(){}:o;return un(r,i)},n.generateSvgReplacementMutation=function(e,a){var r=a.iconName,o=a.title,i=a.titleId,s=a.prefix,f=a.transform,u=a.symbol,c=a.mask,m=a.maskId,v=a.extra;return new Promise(function(b,x){Promise.all([It(r,s),c.iconName?It(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(O){var h=Rt(O,2),A=h[0],y=h[1];b([e,Ht({icons:{main:A,mask:y},prefix:s,iconName:r,transform:f,symbol:u,maskId:m,title:o,titleId:i,extra:v,watchable:!0})])}).catch(x)})},n.generateAbstractIcon=function(e){var a=e.children,r=e.attributes,o=e.main,i=e.transform,s=e.styles,f=ct(s);f.length>0&&(r.style=f);var u;return Yt(i)&&(u=N("generateAbstractTransformGrouping",{main:o,transform:i,containerWidth:o.width,iconWidth:o.width})),a.push(u||o.icon),{children:a,attributes:r}}}},Aa={mixout:function(){return{layer:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,o=r===void 0?[]:r;return dt({type:"layer"},function(){Y("beforeDOMElementCreation",{assembler:e,params:a});var i=[];return e(function(s){Array.isArray(s)?s.map(function(f){i=i.concat(f.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.familyPrefix,"-layers")].concat(lt(o)).join(" ")},children:i}]})}}}},Oa={mixout:function(){return{counter:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,o=r===void 0?null:r,i=a.classes,s=i===void 0?[]:i,f=a.attributes,u=f===void 0?{}:f,c=a.styles,m=c===void 0?{}:c;return dt({type:"counter",content:e},function(){return Y("beforeDOMElementCreation",{content:e,params:a}),aa({content:e.toString(),title:o,extra:{attributes:u,styles:m,classes:["".concat(d.familyPrefix,"-layers-counter")].concat(lt(s))}})})}}}},Sa={mixout:function(){return{text:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,o=r===void 0?I:r,i=a.title,s=i===void 0?null:i,f=a.classes,u=f===void 0?[]:f,c=a.attributes,m=c===void 0?{}:c,v=a.styles,b=v===void 0?{}:v;return dt({type:"text",content:e},function(){return Y("beforeDOMElementCreation",{content:e,params:a}),rn({content:e,transform:l(l({},I),o),title:s,extra:{attributes:m,styles:b,classes:["".concat(d.familyPrefix,"-layers-text")].concat(lt(u))}})})}}},provides:function(n){n.generateLayersText=function(e,a){var r=a.title,o=a.transform,i=a.extra,s=null,f=null;if(En){var u=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();s=c.width/u,f=c.height/u}return d.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,rn({content:e.innerHTML,width:s,height:f,transform:o,title:r,extra:i,watchable:!0})])}}},Pa=new RegExp('"',"ug"),mn=[1105920,1112319];function Ea(t){var n=t.replace(Pa,""),e=Ye(n,0),a=e>=mn[0]&&e<=mn[1],r=n.length===2?n[0]===n[1]:!1;return{value:At(r?n[0]:n),isSecondary:a||r}}function dn(t,n){var e="".concat(ve).concat(n.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(e)!==null)return a();var o=B(t.children),i=o.filter(function(M){return M.getAttribute(wt)===n})[0],s=z.getComputedStyle(t,n),f=s.getPropertyValue("font-family").match(ye),u=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(i&&!f)return t.removeChild(i),a();if(f&&c!=="none"&&c!==""){var m=s.getPropertyValue("content"),v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?it[f[2].toLowerCase()]:ke[u],b=Ea(m),x=b.value,O=b.isSecondary,h=f[0].startsWith("FontAwesome"),A=Ut(v,x),y=A;if(h){var k=Xe(x);k.iconName&&k.prefix&&(A=k.iconName,v=k.prefix)}if(A&&!O&&(!i||i.getAttribute(zt)!==v||i.getAttribute(Ft)!==y)){t.setAttribute(e,y),i&&t.removeChild(i);var P=ga(),w=P.extra;w.attributes[wt]=n,It(A,v).then(function(M){var X=Ht(l(l({},P),{},{icons:{main:M,mask:Wt()},prefix:v,iconName:y,extra:w,watchable:!0})),V=g.createElement("svg");n==="::before"?t.insertBefore(V,t.firstChild):t.appendChild(V),V.outerHTML=X.map(function($){return Z($)}).join(`
`),t.removeAttribute(e),a()}).catch(r)}else a()}else a()})}function Ia(t){return Promise.all([dn(t,"::before"),dn(t,"::after")])}function Ca(t){return t.parentNode!==document.head&&!~be.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(wt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function vn(t){if(!!_)return new Promise(function(n,e){var a=B(t.querySelectorAll("*")).filter(Ca).map(Ia),r=Gt.begin("searchPseudoElements");qn(),Promise.all(a).then(function(){r(),Tt(),n()}).catch(function(){r(),Tt(),e()})})}var Ta={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=vn,e}}},provides:function(n){n.pseudoElements2svg=function(e){var a=e.node,r=a===void 0?g:a;d.searchPseudoElements&&vn(r)}}},pn=!1,Na={mixout:function(){return{dom:{unwatch:function(){qn(),pn=!0}}}},hooks:function(){return{bootstrap:function(){ln(St("mutationObserverCallbacks",{}))},noAuto:function(){da()},watch:function(e){var a=e.observeMutationsRoot;pn?Tt():ln(St("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},bn=function(n){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(a,r){var o=r.toLowerCase().split("-"),i=o[0],s=o.slice(1).join("-");if(i&&s==="h")return a.flipX=!0,a;if(i&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(i){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},e)},_a={mixout:function(){return{parse:{transform:function(e){return bn(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-transform");return r&&(e.transform=bn(r)),e}}},provides:function(n){n.generateAbstractTransformGrouping=function(e){var a=e.main,r=e.transform,o=e.containerWidth,i=e.iconWidth,s={transform:"translate(".concat(o/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(f," ").concat(u," ").concat(c)},v={transform:"translate(".concat(i/2*-1," -256)")},b={outer:s,inner:m,path:v};return{tag:"g",attributes:l({},b.outer),children:[{tag:"g",attributes:l({},b.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:l(l({},a.icon.attributes),b.path)}]}]}}}},ht={x:0,y:0,width:"100%",height:"100%"};function gn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function Ma(t){return t.tag==="g"?t.children:[t]}var Ra={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-mask"),o=r?mt(r.split(" ").map(function(i){return i.trim()})):Wt();return o.prefix||(o.prefix=F()),e.mask=o,e.maskId=a.getAttribute("data-fa-mask-id"),e}}},provides:function(n){n.generateAbstractMask=function(e){var a=e.children,r=e.attributes,o=e.main,i=e.mask,s=e.maskId,f=e.transform,u=o.width,c=o.icon,m=i.width,v=i.icon,b=_e({transform:f,containerWidth:m,iconWidth:u}),x={tag:"rect",attributes:l(l({},ht),{},{fill:"white"})},O=c.children?{children:c.children.map(gn)}:{},h={tag:"g",attributes:l({},b.inner),children:[gn(l({tag:c.tag,attributes:l(l({},c.attributes),b.path)},O))]},A={tag:"g",attributes:l({},b.outer),children:[h]},y="mask-".concat(s||J()),k="clip-".concat(s||J()),P={tag:"mask",attributes:l(l({},ht),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,A]},w={tag:"defs",children:[{tag:"clipPath",attributes:{id:k},children:Ma(v)},P]};return a.push(w,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(k,")"),mask:"url(#".concat(y,")")},ht)}),{children:a,attributes:r}}}},La={provides:function(n){var e=!1;z.matchMedia&&(e=z.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:l(l({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=l(l({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:l(l({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:l(l({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},i),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:l(l({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:l(l({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||a.push({tag:"path",attributes:l(l({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},za={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-symbol"),o=r===null?!1:r===""?!0:r;return e.symbol=o,e}}}},Fa=[Le,wa,Aa,Oa,Sa,Ta,Na,_a,Ra,La,za];Ke(Fa,{mixoutsTo:S});S.noAuto;S.config;S.library;S.dom;var Nt=S.parse;S.findIconDefinition;S.toHtml;var ja=S.icon;S.layer;S.text;S.counter;function hn(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function L(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?hn(Object(e),!0).forEach(function(a){H(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):hn(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function ft(t){return ft=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ft(t)}function H(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function Da(t,n){if(t==null)return{};var e={},a=Object.keys(t),r,o;for(o=0;o<a.length;o++)r=a[o],!(n.indexOf(r)>=0)&&(e[r]=t[r]);return e}function Ya(t,n){if(t==null)return{};var e=Da(t,n),a,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],!(n.indexOf(a)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,a)||(e[a]=t[a]))}return e}function _t(t){return $a(t)||Ua(t)||Wa(t)||Ha()}function $a(t){if(Array.isArray(t))return Mt(t)}function Ua(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Wa(t,n){if(!!t){if(typeof t=="string")return Mt(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Mt(t,n)}}function Mt(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function Ha(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ga(t){var n,e=t.beat,a=t.fade,r=t.beatFade,o=t.bounce,i=t.shake,s=t.flash,f=t.spin,u=t.spinPulse,c=t.spinReverse,m=t.pulse,v=t.fixedWidth,b=t.inverse,x=t.border,O=t.listItem,h=t.flip,A=t.size,y=t.rotation,k=t.pull,P=(n={"fa-beat":e,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":o,"fa-shake":i,"fa-flash":s,"fa-spin":f,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":m,"fa-fw":v,"fa-inverse":b,"fa-border":x,"fa-li":O,"fa-flip":h===!0,"fa-flip-horizontal":h==="horizontal"||h==="both","fa-flip-vertical":h==="vertical"||h==="both"},H(n,"fa-".concat(A),typeof A<"u"&&A!==null),H(n,"fa-rotate-".concat(y),typeof y<"u"&&y!==null&&y!==0),H(n,"fa-pull-".concat(k),typeof k<"u"&&k!==null),H(n,"fa-swap-opacity",t.swapOpacity),n);return Object.keys(P).map(function(w){return P[w]?w:null}).filter(function(w){return w})}function Ba(t){return t=t-0,t===t}function Qn(t){return Ba(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(n,e){return e?e.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var Xa=["style"];function Va(t){return t.charAt(0).toUpperCase()+t.slice(1)}function qa(t){return t.split(";").map(function(n){return n.trim()}).filter(function(n){return n}).reduce(function(n,e){var a=e.indexOf(":"),r=Qn(e.slice(0,a)),o=e.slice(a+1).trim();return r.startsWith("webkit")?n[Va(r)]=o:n[r]=o,n},{})}function Jn(t,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof n=="string")return n;var a=(n.children||[]).map(function(f){return Jn(t,f)}),r=Object.keys(n.attributes||{}).reduce(function(f,u){var c=n.attributes[u];switch(u){case"class":f.attrs.className=c,delete n.attributes.class;break;case"style":f.attrs.style=qa(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?f.attrs[u.toLowerCase()]=c:f.attrs[Qn(u)]=c}return f},{attrs:{}}),o=e.style,i=o===void 0?{}:o,s=Ya(e,Xa);return r.attrs.style=L(L({},r.attrs.style),i),t.apply(void 0,[n.tag,L(L({},r.attrs),s)].concat(_t(a)))}var Zn=!1;try{Zn=!0}catch{}function Ka(){if(!Zn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function yn(t){if(t&&ft(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Nt.icon)return Nt.icon(t);if(t===null)return null;if(t&&ft(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function yt(t,n){return Array.isArray(n)&&n.length>0||!Array.isArray(n)&&n?H({},t,n):{}}var vt=kn.forwardRef(function(t,n){var e=t.icon,a=t.mask,r=t.symbol,o=t.className,i=t.title,s=t.titleId,f=t.maskId,u=yn(e),c=yt("classes",[].concat(_t(Ga(t)),_t(o.split(" ")))),m=yt("transform",typeof t.transform=="string"?Nt.transform(t.transform):t.transform),v=yt("mask",yn(a)),b=ja(u,L(L(L(L({},c),m),v),{},{symbol:r,title:i,titleId:s,maskId:f}));if(!b)return Ka("Could not find icon",u),null;var x=b.abstract,O={ref:n};return Object.keys(t).forEach(function(h){vt.defaultProps.hasOwnProperty(h)||(O[h]=t[h])}),Qa(x[0],O)});vt.displayName="FontAwesomeIcon";vt.propTypes={beat:p.exports.bool,border:p.exports.bool,beatFade:p.exports.bool,bounce:p.exports.bool,className:p.exports.string,fade:p.exports.bool,flash:p.exports.bool,mask:p.exports.oneOfType([p.exports.object,p.exports.array,p.exports.string]),maskId:p.exports.string,fixedWidth:p.exports.bool,inverse:p.exports.bool,flip:p.exports.oneOf([!0,!1,"horizontal","vertical","both"]),icon:p.exports.oneOfType([p.exports.object,p.exports.array,p.exports.string]),listItem:p.exports.bool,pull:p.exports.oneOf(["right","left"]),pulse:p.exports.bool,rotation:p.exports.oneOf([0,90,180,270]),shake:p.exports.bool,size:p.exports.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:p.exports.bool,spinPulse:p.exports.bool,spinReverse:p.exports.bool,symbol:p.exports.oneOfType([p.exports.bool,p.exports.string]),title:p.exports.string,titleId:p.exports.string,transform:p.exports.oneOfType([p.exports.string,p.exports.object]),swapOpacity:p.exports.bool};vt.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Qa=Jn.bind(null,kn.createElement);export{vt as F,p};
