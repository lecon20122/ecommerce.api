import{r as b,c as ne,b as A,j as n,a as d,d as Me}from"./app.6ff80f6b.js";import Le from"./client.b6db0dec.js";import{m as xe,w as Q,u as $e,a as oe}from"./should-render.bece5573.js";import{c as W}from"./index.0579b088.js";import{d as ae}from"./dev-log.30842e3b.js";import{b as F}from"./bound.bddb6539.js";import{c as Re,u as Be,a as je}from"./index.bb53ea95.js";import{I as Ue}from"./index.4964c584.js";import{h as Ke}from"./keys.45a49f58.js";import"./footer.a0c3ed57.js";import"./UserOutline.ead93b7e.js";import"./AntdIcon.3fb2fb0c.js";import"./index.4e4c2762.js";import"./type.96b2605f.js";import"./EyeOutlined.6a24f3ba.js";import"./motion.06ce4f5a.js";import"./css.87c60a97.js";import"./DialogWrap.6150e8ff.js";import"./getScrollBarSize.4b387477.js";const Ve=Re(b.exports.useEffect);var ee={},ze=ne&&ne.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(ee,"__esModule",{value:!0});var ye=ee.staged=void 0;const qe=ze(b.exports);function _e(r){return typeof r=="function"?qe.default.createElement(We,{stage:r}):r}function We(r){const e=r.stage();return _e(e)}function Ge(r){return function(t,i){const s=r(t,i);return _e(s)}}ye=ee.staged=Ge;function He(r,e,t){return Math.max(e,Math.min(r,t))}const _={toVector(r,e){return r===void 0&&(r=e),Array.isArray(r)?r:[r,r]},add(r,e){return[r[0]+e[0],r[1]+e[1]]},sub(r,e){return[r[0]-e[0],r[1]-e[1]]},addTo(r,e){r[0]+=e[0],r[1]+=e[1]},subTo(r,e){r[0]-=e[0],r[1]-=e[1]}};function ce(r,e,t){return e===0||Math.abs(e)===1/0?Math.pow(r,t*5):r*e*t/(e+t*r)}function le(r,e,t,i=.15){return i===0?He(r,e,t):r<e?-ce(e-r,t-e,i)+e:r>t?+ce(r-t,t-e,i)+t:r}function Ye(r,[e,t],[i,s]){const[[o,c],[l,f]]=r;return[le(e,o,c,i),le(t,l,f,s)]}function S(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function ue(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(r,s).enumerable})),t.push.apply(t,i)}return t}function m(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?ue(Object(t),!0).forEach(function(i){S(r,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):ue(Object(t)).forEach(function(i){Object.defineProperty(r,i,Object.getOwnPropertyDescriptor(t,i))})}return r}const we={pointer:{start:"down",change:"move",end:"up"},mouse:{start:"down",change:"move",end:"up"},touch:{start:"start",change:"move",end:"end"},gesture:{start:"start",change:"change",end:"end"}};function de(r){return r?r[0].toUpperCase()+r.slice(1):""}const Fe=["enter","leave"];function Xe(r=!1,e){return r&&!Fe.includes(e)}function Je(r,e="",t=!1){const i=we[r],s=i&&i[e]||e;return"on"+de(r)+de(s)+(Xe(t,s)?"Capture":"")}const Ze=["gotpointercapture","lostpointercapture"];function Qe(r){let e=r.substring(2).toLowerCase();const t=!!~e.indexOf("passive");t&&(e=e.replace("passive",""));const i=Ze.includes(e)?"capturecapture":"capture",s=!!~e.indexOf(i);return s&&(e=e.replace("capture","")),{device:e,capture:s,passive:t}}function et(r,e=""){const t=we[r],i=t&&t[e]||e;return r+i}function H(r){return"touches"in r}function Se(r){return H(r)?"touch":"pointerType"in r?r.pointerType:"mouse"}function tt(r){return Array.from(r.touches).filter(e=>{var t,i;return e.target===r.currentTarget||((t=r.currentTarget)===null||t===void 0||(i=t.contains)===null||i===void 0?void 0:i.call(t,e.target))})}function rt(r){return r.type==="touchend"||r.type==="touchcancel"?r.changedTouches:r.targetTouches}function ke(r){return H(r)?rt(r)[0]:r}function it(r){return tt(r).map(e=>e.identifier)}function X(r){const e=ke(r);return H(r)?e.identifier:e.pointerId}function fe(r){const e=ke(r);return[e.clientX,e.clientY]}function st(r){const e={};if("buttons"in r&&(e.buttons=r.buttons),"shiftKey"in r){const{shiftKey:t,altKey:i,metaKey:s,ctrlKey:o}=r;Object.assign(e,{shiftKey:t,altKey:i,metaKey:s,ctrlKey:o})}return e}function G(r,...e){return typeof r=="function"?r(...e):r}function nt(){}function ot(...r){return r.length===0?nt:r.length===1?r[0]:function(){let e;for(const t of r)e=t.apply(this,arguments)||e;return e}}function he(r,e){return Object.assign({},e,r||{})}const at=32;class ct{constructor(e,t,i){this.ctrl=e,this.args=t,this.key=i,this.state||(this.state={},this.computeValues([0,0]),this.computeInitial(),this.init&&this.init(),this.reset())}get state(){return this.ctrl.state[this.key]}set state(e){this.ctrl.state[this.key]=e}get shared(){return this.ctrl.state.shared}get eventStore(){return this.ctrl.gestureEventStores[this.key]}get timeoutStore(){return this.ctrl.gestureTimeoutStores[this.key]}get config(){return this.ctrl.config[this.key]}get sharedConfig(){return this.ctrl.config.shared}get handler(){return this.ctrl.handlers[this.key]}reset(){const{state:e,shared:t,ingKey:i,args:s}=this;t[i]=e._active=e.active=e._blocked=e._force=!1,e._step=[!1,!1],e.intentional=!1,e._movement=[0,0],e._distance=[0,0],e._direction=[0,0],e._delta=[0,0],e._bounds=[[-1/0,1/0],[-1/0,1/0]],e.args=s,e.axis=void 0,e.memo=void 0,e.elapsedTime=0,e.direction=[0,0],e.distance=[0,0],e.overflow=[0,0],e._movementBound=[!1,!1],e.velocity=[0,0],e.movement=[0,0],e.delta=[0,0],e.timeStamp=0}start(e){const t=this.state,i=this.config;t._active||(this.reset(),this.computeInitial(),t._active=!0,t.target=e.target,t.currentTarget=e.currentTarget,t.lastOffset=i.from?G(i.from,t):t.offset,t.offset=t.lastOffset),t.startTime=t.timeStamp=e.timeStamp}computeValues(e){const t=this.state;t._values=e,t.values=this.config.transform(e)}computeInitial(){const e=this.state;e._initial=e._values,e.initial=e.values}compute(e){const{state:t,config:i,shared:s}=this;t.args=this.args;let o=0;if(e&&(t.event=e,i.preventDefault&&e.cancelable&&t.event.preventDefault(),t.type=e.type,s.touches=this.ctrl.pointerIds.size||this.ctrl.touchIds.size,s.locked=!!document.pointerLockElement,Object.assign(s,st(e)),s.down=s.pressed=s.buttons%2===1||s.touches>0,o=e.timeStamp-t.timeStamp,t.timeStamp=e.timeStamp,t.elapsedTime=t.timeStamp-t.startTime),t._active){const E=t._delta.map(Math.abs);_.addTo(t._distance,E)}this.axisIntent&&this.axisIntent(e);const[c,l]=t._movement,[f,h]=i.threshold,{_step:u,values:v}=t;if(i.hasCustomTransform?(u[0]===!1&&(u[0]=Math.abs(c)>=f&&v[0]),u[1]===!1&&(u[1]=Math.abs(l)>=h&&v[1])):(u[0]===!1&&(u[0]=Math.abs(c)>=f&&Math.sign(c)*f),u[1]===!1&&(u[1]=Math.abs(l)>=h&&Math.sign(l)*h)),t.intentional=u[0]!==!1||u[1]!==!1,!t.intentional)return;const g=[0,0];if(i.hasCustomTransform){const[E,O]=v;g[0]=u[0]!==!1?E-u[0]:0,g[1]=u[1]!==!1?O-u[1]:0}else g[0]=u[0]!==!1?c-u[0]:0,g[1]=u[1]!==!1?l-u[1]:0;this.restrictToAxis&&!t._blocked&&this.restrictToAxis(g);const D=t.offset,p=t._active&&!t._blocked||t.active;p&&(t.first=t._active&&!t.active,t.last=!t._active&&t.active,t.active=s[this.ingKey]=t._active,e&&(t.first&&("bounds"in i&&(t._bounds=G(i.bounds,t)),this.setup&&this.setup()),t.movement=g,this.computeOffset()));const[w,N]=t.offset,[[I,T],[L,$]]=t._bounds;t.overflow=[w<I?-1:w>T?1:0,N<L?-1:N>$?1:0],t._movementBound[0]=t.overflow[0]?t._movementBound[0]===!1?t._movement[0]:t._movementBound[0]:!1,t._movementBound[1]=t.overflow[1]?t._movementBound[1]===!1?t._movement[1]:t._movementBound[1]:!1;const Y=t._active?i.rubberband||[0,0]:[0,0];if(t.offset=Ye(t._bounds,t.offset,Y),t.delta=_.sub(t.offset,D),this.computeMovement(),p&&(!t.last||o>at)){t.delta=_.sub(t.offset,D);const E=t.delta.map(Math.abs);_.addTo(t.distance,E),t.direction=t.delta.map(Math.sign),t._direction=t._delta.map(Math.sign),!t.first&&o>0&&(t.velocity=[E[0]/o,E[1]/o])}}emit(){const e=this.state,t=this.shared,i=this.config;if(e._active||this.clean(),(e._blocked||!e.intentional)&&!e._force&&!i.triggerAllEvents)return;const s=this.handler(m(m(m({},t),e),{},{[this.aliasKey]:e.values}));s!==void 0&&(e.memo=s)}clean(){this.eventStore.clean(),this.timeoutStore.clean()}}function lt([r,e],t){const i=Math.abs(r),s=Math.abs(e);if(i>s&&i>t)return"x";if(s>i&&s>t)return"y"}class ut extends ct{constructor(...e){super(...e),S(this,"aliasKey","xy")}reset(){super.reset(),this.state.axis=void 0}init(){this.state.offset=[0,0],this.state.lastOffset=[0,0]}computeOffset(){this.state.offset=_.add(this.state.lastOffset,this.state.movement)}computeMovement(){this.state.movement=_.sub(this.state.offset,this.state.lastOffset)}axisIntent(e){const t=this.state,i=this.config;if(!t.axis&&e){const s=typeof i.axisThreshold=="object"?i.axisThreshold[Se(e)]:i.axisThreshold;t.axis=lt(t._movement,s)}t._blocked=(i.lockDirection||!!i.axis)&&!t.axis||!!i.axis&&i.axis!==t.axis}restrictToAxis(e){if(this.config.axis||this.config.lockDirection)switch(this.state.axis){case"x":e[1]=0;break;case"y":e[0]=0;break}}}const dt=r=>r,pe=.15,Ne={enabled(r=!0){return r},eventOptions(r,e,t){return m(m({},t.shared.eventOptions),r)},preventDefault(r=!1){return r},triggerAllEvents(r=!1){return r},rubberband(r=0){switch(r){case!0:return[pe,pe];case!1:return[0,0];default:return _.toVector(r)}},from(r){if(typeof r=="function")return r;if(r!=null)return _.toVector(r)},transform(r,e,t){const i=r||t.shared.transform;return this.hasCustomTransform=!!i,i||dt},threshold(r){return _.toVector(r,0)}},ft=0,B=m(m({},Ne),{},{axis(r,e,{axis:t}){if(this.lockDirection=t==="lock",!this.lockDirection)return t},axisThreshold(r=ft){return r},bounds(r={}){if(typeof r=="function")return o=>B.bounds(r(o));if("current"in r)return()=>r.current;if(typeof HTMLElement=="function"&&r instanceof HTMLElement)return r;const{left:e=-1/0,right:t=1/0,top:i=-1/0,bottom:s=1/0}=r;return[[e,t],[i,s]]}}),V=10,me={ArrowRight:(r=1)=>[V*r,0],ArrowLeft:(r=1)=>[-V*r,0],ArrowUp:(r=1)=>[0,-V*r],ArrowDown:(r=1)=>[0,V*r]};class ht extends ut{constructor(...e){super(...e),S(this,"ingKey","dragging")}reset(){super.reset();const e=this.state;e._pointerId=void 0,e._pointerActive=!1,e._keyboardActive=!1,e._preventScroll=!1,e._delayed=!1,e.swipe=[0,0],e.tap=!1,e.canceled=!1,e.cancel=this.cancel.bind(this)}setup(){const e=this.state;if(e._bounds instanceof HTMLElement){const t=e._bounds.getBoundingClientRect(),i=e.currentTarget.getBoundingClientRect(),s={left:t.left-i.left+e.offset[0],right:t.right-i.right+e.offset[0],top:t.top-i.top+e.offset[1],bottom:t.bottom-i.bottom+e.offset[1]};e._bounds=B.bounds(s)}}cancel(){const e=this.state;e.canceled||(e.canceled=!0,e._active=!1,setTimeout(()=>{this.compute(),this.emit()},0))}setActive(){this.state._active=this.state._pointerActive||this.state._keyboardActive}clean(){this.pointerClean(),this.state._pointerActive=!1,this.state._keyboardActive=!1,super.clean()}pointerDown(e){const t=this.config,i=this.state;if(e.buttons!=null&&(Array.isArray(t.pointerButtons)?!t.pointerButtons.includes(e.buttons):t.pointerButtons!==-1&&t.pointerButtons!==e.buttons))return;const s=this.ctrl.setEventIds(e);t.pointerCapture&&e.target.setPointerCapture(e.pointerId),!(s&&s.size>1&&i._pointerActive)&&(this.start(e),this.setupPointer(e),i._pointerId=X(e),i._pointerActive=!0,this.computeValues(fe(e)),this.computeInitial(),t.preventScrollAxis&&Se(e)!=="mouse"?(i._active=!1,this.setupScrollPrevention(e)):t.delay>0?(this.setupDelayTrigger(e),t.triggerAllEvents&&(this.compute(e),this.emit())):this.startPointerDrag(e))}startPointerDrag(e){const t=this.state;t._active=!0,t._preventScroll=!0,t._delayed=!1,this.compute(e),this.emit()}pointerMove(e){const t=this.state,i=this.config;if(!t._pointerActive||t.type===e.type&&e.timeStamp===t.timeStamp)return;const s=X(e);if(t._pointerId!==void 0&&s!==t._pointerId)return;const o=fe(e);if(document.pointerLockElement===e.target?t._delta=[e.movementX,e.movementY]:(t._delta=_.sub(o,t._values),this.computeValues(o)),_.addTo(t._movement,t._delta),this.compute(e),t._delayed&&t.intentional){this.timeoutStore.remove("dragDelay"),t.active=!1,this.startPointerDrag(e);return}if(i.preventScrollAxis&&!t._preventScroll)if(t.axis)if(t.axis===i.preventScrollAxis||i.preventScrollAxis==="xy"){t._active=!1,this.clean();return}else{this.timeoutStore.remove("startPointerDrag"),this.startPointerDrag(e);return}else return;this.emit()}pointerUp(e){this.ctrl.setEventIds(e);try{this.config.pointerCapture&&e.target.hasPointerCapture(e.pointerId)&&e.target.releasePointerCapture(e.pointerId)}catch{}const t=this.state,i=this.config;if(!t._active||!t._pointerActive)return;const s=X(e);if(t._pointerId!==void 0&&s!==t._pointerId)return;this.state._pointerActive=!1,this.setActive(),this.compute(e);const[o,c]=t._distance;if(t.tap=o<=i.tapsThreshold&&c<=i.tapsThreshold,t.tap&&i.filterTaps)t._force=!0;else{const[l,f]=t.direction,[h,u]=t.velocity,[v,g]=t.movement,[D,p]=i.swipe.velocity,[w,N]=i.swipe.distance,I=i.swipe.duration;t.elapsedTime<I&&(Math.abs(h)>D&&Math.abs(v)>w&&(t.swipe[0]=l),Math.abs(u)>p&&Math.abs(g)>N&&(t.swipe[1]=f))}this.emit()}pointerClick(e){!this.state.tap&&e.detail>0&&(e.preventDefault(),e.stopPropagation())}setupPointer(e){const t=this.config,i=t.device;t.pointerLock&&e.currentTarget.requestPointerLock(),t.pointerCapture||(this.eventStore.add(this.sharedConfig.window,i,"change",this.pointerMove.bind(this)),this.eventStore.add(this.sharedConfig.window,i,"end",this.pointerUp.bind(this)),this.eventStore.add(this.sharedConfig.window,i,"cancel",this.pointerUp.bind(this)))}pointerClean(){this.config.pointerLock&&document.pointerLockElement===this.state.currentTarget&&document.exitPointerLock()}preventScroll(e){this.state._preventScroll&&e.cancelable&&e.preventDefault()}setupScrollPrevention(e){this.state._preventScroll=!1,pt(e);const t=this.eventStore.add(this.sharedConfig.window,"touch","change",this.preventScroll.bind(this),{passive:!1});this.eventStore.add(this.sharedConfig.window,"touch","end",t),this.eventStore.add(this.sharedConfig.window,"touch","cancel",t),this.timeoutStore.add("startPointerDrag",this.startPointerDrag.bind(this),this.config.preventScrollDelay,e)}setupDelayTrigger(e){this.state._delayed=!0,this.timeoutStore.add("dragDelay",()=>{this.state._step=[0,0],this.startPointerDrag(e)},this.config.delay)}keyDown(e){const t=me[e.key];if(t){const i=this.state,s=e.shiftKey?10:e.altKey?.1:1;this.start(e),i._delta=t(s),i._keyboardActive=!0,_.addTo(i._movement,i._delta),this.compute(e),this.emit()}}keyUp(e){e.key in me&&(this.state._keyboardActive=!1,this.setActive(),this.compute(e),this.emit())}bind(e){const t=this.config.device;e(t,"start",this.pointerDown.bind(this)),this.config.pointerCapture&&(e(t,"change",this.pointerMove.bind(this)),e(t,"end",this.pointerUp.bind(this)),e(t,"cancel",this.pointerUp.bind(this)),e("lostPointerCapture","",this.pointerUp.bind(this))),this.config.keys&&(e("key","down",this.keyDown.bind(this)),e("key","up",this.keyUp.bind(this))),this.config.filterTaps&&e("click","",this.pointerClick.bind(this),{capture:!0,passive:!1})}}function pt(r){"persist"in r&&typeof r.persist=="function"&&r.persist()}const j=typeof window<"u"&&window.document&&window.document.createElement;function mt(){return j&&"ontouchstart"in window}function ge(){return mt()||j&&window.navigator.maxTouchPoints>1}function gt(){return j&&"onpointerdown"in window}function bt(){return j&&"exitPointerLock"in window.document}function vt(){try{return"constructor"in GestureEvent}catch{return!1}}const k={isBrowser:j,gesture:vt(),touch:ge(),touchscreen:ge(),pointer:gt(),pointerLock:bt()},xt=250,yt=180,_t=.5,wt=50,St=250,be={mouse:0,touch:0,pen:8},kt=m(m({},B),{},{device(r,e,{pointer:{touch:t=!1,lock:i=!1,mouse:s=!1}={}}){return this.pointerLock=i&&k.pointerLock,k.touch&&t?"touch":this.pointerLock?"mouse":k.pointer&&!s?"pointer":k.touch?"touch":"mouse"},preventScrollAxis(r,e,{preventScroll:t}){if(this.preventScrollDelay=typeof t=="number"?t:t||t===void 0&&r?xt:void 0,!(!k.touchscreen||t===!1))return r||(t!==void 0?"y":void 0)},pointerCapture(r,e,{pointer:{capture:t=!0,buttons:i=1}={}}){return this.pointerButtons=i,!this.pointerLock&&this.device==="pointer"&&t},keys(r=!0){return r},threshold(r,e,{filterTaps:t=!1,tapsThreshold:i=3,axis:s=void 0}){const o=_.toVector(r,t?i:s?1:0);return this.filterTaps=t,this.tapsThreshold=i,o},swipe({velocity:r=_t,distance:e=wt,duration:t=St}={}){return{velocity:this.transform(_.toVector(r)),distance:this.transform(_.toVector(e)),duration:t}},delay(r=0){switch(r){case!0:return yt;case!1:return 0;default:return r}},axisThreshold(r){return r?m(m({},be),r):be}});m(m({},Ne),{},{device(r,e,{shared:t,pointer:{touch:i=!1}={}}){if(t.target&&!k.touch&&k.gesture)return"gesture";if(k.touch&&i)return"touch";if(k.touchscreen){if(k.pointer)return"pointer";if(k.touch)return"touch"}},bounds(r,e,{scaleBounds:t={},angleBounds:i={}}){const s=c=>{const l=he(G(t,c),{min:-1/0,max:1/0});return[l.min,l.max]},o=c=>{const l=he(G(i,c),{min:-1/0,max:1/0});return[l.min,l.max]};return typeof t!="function"&&typeof i!="function"?[s(),o()]:c=>[s(c),o(c)]},threshold(r,e,t){return this.lockDirection=t.axis==="lock",_.toVector(r,this.lockDirection?[.1,3]:0)},modifierKey(r){return r===void 0?"ctrlKey":r}});m(m({},B),{},{mouseOnly:(r=!0)=>r});m(m({},B),{},{mouseOnly:(r=!0)=>r});const Ie=new Map,Z=new Map;function Nt(r){Ie.set(r.key,r.engine),Z.set(r.key,r.resolver)}const It={key:"drag",engine:ht,resolver:kt};function Tt(r,e){if(r==null)return{};var t={},i=Object.keys(r),s,o;for(o=0;o<i.length;o++)s=i[o],!(e.indexOf(s)>=0)&&(t[s]=r[s]);return t}function Et(r,e){if(r==null)return{};var t=Tt(r,e),i,s;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(s=0;s<o.length;s++)i=o[s],!(e.indexOf(i)>=0)&&(!Object.prototype.propertyIsEnumerable.call(r,i)||(t[i]=r[i]))}return t}const Ct={target(r){if(r)return()=>"current"in r?r.current:r},enabled(r=!0){return r},window(r=k.isBrowser?window:void 0){return r},eventOptions({passive:r=!0,capture:e=!1}={}){return{passive:r,capture:e}},transform(r){return r}},Pt=["target","eventOptions","window","enabled","transform"];function q(r={},e){const t={};for(const[i,s]of Object.entries(e))switch(typeof s){case"function":t[i]=s.call(t,r[i],i,r);break;case"object":t[i]=q(r[i],s);break;case"boolean":s&&(t[i]=r[i]);break}return t}function At(r,e,t={}){const i=r,{target:s,eventOptions:o,window:c,enabled:l,transform:f}=i,h=Et(i,Pt);if(t.shared=q({target:s,eventOptions:o,window:c,enabled:l,transform:f},Ct),e){const u=Z.get(e);t[e]=q(m({shared:t.shared},h),u)}else for(const u in h){const v=Z.get(u);v&&(t[u]=q(m({shared:t.shared},h[u]),v))}return t}class Te{constructor(e,t){S(this,"_listeners",new Set),this._ctrl=e,this._gestureKey=t}add(e,t,i,s,o){const c=this._listeners,l=et(t,i),f=this._gestureKey?this._ctrl.config[this._gestureKey].eventOptions:{},h=m(m({},f),o);e.addEventListener(l,s,h);const u=()=>{e.removeEventListener(l,s,h),c.delete(u)};return c.add(u),u}clean(){this._listeners.forEach(e=>e()),this._listeners.clear()}}class Dt{constructor(){S(this,"_timeouts",new Map)}add(e,t,i=140,...s){this.remove(e),this._timeouts.set(e,window.setTimeout(t,i,...s))}remove(e){const t=this._timeouts.get(e);t&&window.clearTimeout(t)}clean(){this._timeouts.forEach(e=>void window.clearTimeout(e)),this._timeouts.clear()}}class Ot{constructor(e){S(this,"gestures",new Set),S(this,"_targetEventStore",new Te(this)),S(this,"gestureEventStores",{}),S(this,"gestureTimeoutStores",{}),S(this,"handlers",{}),S(this,"config",{}),S(this,"pointerIds",new Set),S(this,"touchIds",new Set),S(this,"state",{shared:{shiftKey:!1,metaKey:!1,ctrlKey:!1,altKey:!1}}),Mt(this,e)}setEventIds(e){if(H(e))return this.touchIds=new Set(it(e)),this.touchIds;if("pointerId"in e)return e.type==="pointerup"||e.type==="pointercancel"?this.pointerIds.delete(e.pointerId):e.type==="pointerdown"&&this.pointerIds.add(e.pointerId),this.pointerIds}applyHandlers(e,t){this.handlers=e,this.nativeHandlers=t}applyConfig(e,t){this.config=At(e,t,this.config)}clean(){this._targetEventStore.clean();for(const e of this.gestures)this.gestureEventStores[e].clean(),this.gestureTimeoutStores[e].clean()}effect(){return this.config.shared.target&&this.bind(),()=>this._targetEventStore.clean()}bind(...e){const t=this.config.shared,i={};let s;if(!(t.target&&(s=t.target(),!s))){if(t.enabled){for(const c of this.gestures){const l=this.config[c],f=ve(i,l.eventOptions,!!s);if(l.enabled){const h=Ie.get(c);new h(this,e,c).bind(f)}}const o=ve(i,t.eventOptions,!!s);for(const c in this.nativeHandlers)o(c,"",l=>this.nativeHandlers[c](m(m({},this.state.shared),{},{event:l,args:e})),void 0,!0)}for(const o in i)i[o]=ot(...i[o]);if(!s)return i;for(const o in i){const{device:c,capture:l,passive:f}=Qe(o);this._targetEventStore.add(s,c,"",i[o],{capture:l,passive:f})}}}}function M(r,e){r.gestures.add(e),r.gestureEventStores[e]=new Te(r,e),r.gestureTimeoutStores[e]=new Dt}function Mt(r,e){e.drag&&M(r,"drag"),e.wheel&&M(r,"wheel"),e.scroll&&M(r,"scroll"),e.move&&M(r,"move"),e.pinch&&M(r,"pinch"),e.hover&&M(r,"hover")}const ve=(r,e,t)=>(i,s,o,c={},l=!1)=>{var f,h;const u=(f=c.capture)!==null&&f!==void 0?f:e.capture,v=(h=c.passive)!==null&&h!==void 0?h:e.passive;let g=l?i:Je(i,s,u);t&&v&&(g+="Passive"),r[g]=r[g]||[],r[g].push(o)};function Lt(r,e={},t,i){const s=A.useMemo(()=>new Ot(r),[]);if(s.applyHandlers(r,i),s.applyConfig(e,t),A.useEffect(s.effect.bind(s)),A.useEffect(()=>s.clean.bind(s),[]),e.target===void 0)return s.bind.bind(s)}function $t(r,e){return Nt(It),Lt({drag:r},e||{},"drag")}const R="adm-page-indicator",Rt={color:"primary",direction:"horizontal"},Bt=b.exports.memo(r=>{const e=xe(Rt,r),t=[];for(let i=0;i<e.total;i++)t.push(n("div",{className:W(`${R}-dot`,{[`${R}-dot-active`]:e.current===i})},i));return Q(e,n("div",{className:W(R,`${R}-${e.direction}`,`${R}-color-${e.color}`),children:t}))}),jt=Bt;const Ee=r=>Q(r,n("div",{className:"adm-swiper-item",onClick:r.onClick,children:r.children}));function Ut(r){const[e,t]=b.exports.useState(r),i=b.exports.useRef(e);return b.exports.useEffect(()=>{i.current=e},[e]),[e,t,i]}const P="adm-swiper",Kt={defaultIndex:0,allowTouchMove:!0,autoplay:!1,autoplayInterval:3e3,loop:!1,direction:"horizontal",slideSize:100,trackOffset:0,stuckAtBoundary:!0,rubberband:!0};let z;const Vt=b.exports.forwardRef(ye((r,e)=>{const t=xe(Kt,r),[i]=b.exports.useState({}),s=t.direction==="vertical",o=t.slideSize/100,c=t.trackOffset/100,{validChildren:l,count:f}=b.exports.useMemo(()=>{let h=0;return{validChildren:A.Children.map(t.children,v=>A.isValidElement(v)?v.type!==Ee?(ae("Swiper","The children of `Swiper` must be `Swiper.Item` components."),null):(h++,v):null),count:h}},[t.children]);return f===0||!l?(ae("Swiper","`Swiper` needs at least one child."),null):()=>{let h=t.loop;o*(f-1)<1&&(h=!1);const u=b.exports.useRef(null);function v(){const a=u.current;return a?(s?a.offsetHeight:a.offsetWidth)*t.slideSize/100:0}const[g,D]=b.exports.useState(t.defaultIndex);Ve(()=>{var a;(a=t.onIndexChange)===null||a===void 0||a.call(t,g)},[g]);const[p,w,N]=Ut(!1);function I(a){let x=0,y=f-1;return t.stuckAtBoundary&&(x+=c/o,y-=(1-o-c)/o),F(a,x,y)}const[{position:T},L]=$e(()=>({position:I(g)*100,config:{tension:200,friction:30},onRest:()=>{if(N.current||!h)return;const a=T.get(),x=100*f,y=J(a,x);y!==a&&L.start({position:y,immediate:!0})}}),[f]),$=b.exports.useRef(null);function Y(){var a;(a=$.current)===null||a===void 0||a.call($),N.current=!1}const E=$t(a=>{if($.current=a.cancel,!a.intentional||(a.first&&!z&&(z=i),z!==i))return;z=a.last?void 0:i;const x=v();if(!x)return;const y=s?1:0,C=a.offset[y],U=a.direction[y],K=a.velocity[y];if(w(!0),!a.last)L.start({position:C*100/x,immediate:!0});else{const se=Math.floor(C/x),De=se+1,Oe=Math.round((C+K*2e3*U)/x);O(F(Oe,se,De)),window.setTimeout(()=>{w(!1)})}},{transform:([a,x])=>[-a,-x],from:()=>{const a=v();return[T.get()/100*a,T.get()/100*a]},triggerAllEvents:!0,bounds:()=>{if(h)return{};const a=v(),x=I(0)*a,y=I(f-1)*a;return s?{top:x,bottom:y}:{left:x,right:y}},rubberband:t.rubberband,axis:s?"y":"x",preventScroll:!s,pointer:{touch:!0}});function O(a,x=!1){const y=Math.round(a),C=h?J(y,f):F(y,0,f-1);D(C),L.start({position:(h?y:I(y))*100,immediate:x})}function te(){O(Math.round(T.get()/100)+1)}function Ce(){O(Math.round(T.get()/100)-1)}b.exports.useImperativeHandle(e,()=>({swipeTo:O,swipeNext:te,swipePrev:Ce})),Be(()=>{const a=l.length-1;g>a&&O(a,!0)});const{autoplay:re,autoplayInterval:ie}=t;b.exports.useEffect(()=>{if(!re||p)return;const a=window.setInterval(()=>{te()},ie);return()=>{window.clearInterval(a)}},[re,ie,p,f]);function Pe(){return h?n("div",{className:`${P}-track-inner`,children:A.Children.map(l,(a,x)=>A.createElement(oe.div,{className:`${P}-slide`,style:{[s?"y":"x"]:T.to(y=>{let C=-y+x*100;const U=f*100,K=U/2;return C=J(C+K,U)-K,`${C}%`}),[s?"top":"left"]:`-${x*100}%`}},a))}):A.createElement(oe.div,{className:`${P}-track-inner`,style:{[s?"y":"x"]:T.to(a=>`${-a}%`)}},A.Children.map(l,a=>n("div",{className:`${P}-slide`,children:a})))}const Ae={"--slide-size":`${t.slideSize}%`,"--track-offset":`${t.trackOffset}%`};return Q(t,d("div",{className:W(P,`${P}-${t.direction}`),style:Ae,children:[n("div",{...Object.assign({ref:u,className:W(`${P}-track`,{[`${P}-track-allow-touch-move`]:t.allowTouchMove}),onClickCapture:a=>{N.current&&a.stopPropagation(),Y()}},t.allowTouchMove?E():{}),children:Pe()}),t.indicator===void 0?n("div",{className:`${P}-indicator`,children:n(jt,{...Object.assign({},t.indicatorProps,{total:f,current:g,direction:t.direction})})}):t.indicator(f,g)]}))}}));function J(r,e){const t=r%e;return t<0?t+e:t}const zt=je(Vt,{Item:Ee});function qt({images:r,imageIndex:e}){b.exports.useState(0);const t=r.length;return!Array.isArray(r)||r.length<=0?null:d("div",{className:"relative",children:[n("div",{className:"mobile-carousel flex md:hidden",children:r.map((i,s)=>d("div",{className:"w-full item relative",children:[n("img",{alt:i.name,src:i.big,style:{aspectRatio:"670/892.2",height:"auto"}}),n("span",{style:{background:"rgba(0,0,0,.3)"},className:"absolute top-[6px] right-[6px] text-[#fff] text-sm py-[4px] px-[8px] rounded-lg",children:`${s+1} / ${t}`})]},i.id))}),n("section",{className:"slider",children:n("div",{className:"aspect-[670/892.2] w-[670px] hidden md:flex",children:n("div",{children:r[e]!=null?n("img",{alt:r[e].name,src:r[e].big,className:"w-[670px] aspect-[670/892.2]"}):n("img",{alt:r[0].name,src:r[0].big,className:"w-[670px] aspect-[670/892.2]"})})})})]})}function Wt({media:r}){const[e,t]=b.exports.useState(0),i=o=>{const c=r.findIndex(l=>l.id===o.id);t(c)},s=r==null?void 0:r.map((o,c)=>n("div",{className:`hover:drop-shadow-2xl hover:border-black hover:border min mr-[7px] mb-2 ${c===e?"border-black border drop-shadow-2xl w-[62]":""}`,style:{height:"auto",width:"60px"},children:n("img",{className:"w-[60px] p-[2px]",src:o.small,alt:"Product title",onClick:()=>i(o),onMouseOver:()=>i(o)})},o.id));return r.map((o,c)=>n(zt.Item,{children:n(Ue,{style:{aspectRatio:"670/892.2",width:"670px",height:"auto"},src:o.big,alt:"Product title"})},o.id)),d("div",{className:"flex md:flex-row flex-col basis-[60.83333333333333%]",children:[n("div",{className:"order-first md:order-last basis-7/8 mx-auto",children:n(qt,{images:r,imageIndex:e})}),n("div",{className:"basis-1/8 order-last md:order-first hidden md:flex",children:n("div",{className:"whitespace-nowrap",children:s})})]})}function Gt({color:r,onClick:e,backgroundImage:t,onMouseOver:i,active:s}){return n("div",{className:"flex mx-[2px]",children:n("button",{style:(()=>t?{backgroundImage:`url(${t})`,backgroundPosition:"center",backgroundSize:"cover"}:{backgroundColor:r})(),onClick:e,disabled:s,className:`border-1 w-[30px] h-[30px] focus:outline-none ${s?"border-black":"border-gray-300"}`})})}function Ht({variation:r,disabled:e,setCurrentSizeVariationId:t}){var s;const i=o=>{o.target.checked&&t(parseFloat(o.target.value))};return d("div",{children:[n("input",{className:"hidden",id:`radio${r.id}`,disabled:e,value:r.id,type:"radio",name:"radio",onChange:o=>i(o)}),d("label",{className:`flex flex-col p-1 border-2 ${e?"text-gray-400":"cursor-pointer"} border-gray-400`,htmlFor:`radio${r.id}`,children:[n("span",{className:"text-sm grow lg:text-md font-semibold uppercase",children:(s=r.variation_type_value)==null?void 0:s.value.en}),d("span",{className:"lg:text-md grow text-sm font-bold",children:["EGP ",r.price]})]})]},r.id)}function hr({product:r,locale:e}){const[t,i]=b.exports.useState(r.variations[0].media),[s,o]=b.exports.useState(r.variations[0]),[c,l]=b.exports.useState(0),[f,h]=b.exports.useState(!1),u=p=>{i(p.media),o(p),l(0)};b.exports.useEffect(()=>{Array.isArray(r.variations)&&r.variations.length&&i(r.variations[0].media)},[]);const v=r.variations.map(p=>{var w,N,I;if(((w=p.variation_type)==null?void 0:w.type.en)==="color")return n(Gt,{onClick:()=>u(p),color:(N=p.variation_type_value)==null?void 0:N.value.en,backgroundImage:(I=p.color)==null?void 0:I.color},p.id)}),g=s.children.map(p=>{var w;if(((w=p.variation_type)==null?void 0:w.type.en)==="size")return n(Ht,{disabled:p.stock_count<1,variation:p,setCurrentSizeVariationId:l},p.id)}),D=()=>{if(c){h(!1);const p=s.children.find(w=>w.id===c);Me.Inertia.post(Ke("client.add.to.cart"),{variation_id:c,price:p==null?void 0:p.price,quantity:1},{preserveState:!1,preserveScroll:!1})}else h(!0)};return n(Le,{children:d("div",{children:[n("div",{className:"bg-white lg:py-10",children:n("div",{className:"max-w-screen-xl lg:mx-auto px-[12px]  md:px-[40px]",children:d("div",{className:"flex md:flex-row flex-col",children:[n(Wt,{media:t}),n("main",{className:"container md:ml-[50px] basis-[39.16666666666667%]",children:d("div",{className:"mx-auto",children:[n("h2",{className:"font-semibold text-2xl mb-4",children:r.title[e]}),d("p",{className:"mb-4 font-semibold text-2xl",children:["EGP ",s.price]}),d("div",{className:"flex space-x-2 flex-col space-y-3",children:[d("div",{className:"flex items-center",children:[n("span",{className:"mr-3",children:"Color"}),v]}),d("div",{className:"flex items-center",children:[n("span",{className:"mr-3",children:"Size"}),n("div",{className:"flex items-center justify-center",children:n("form",{className:"grid grid-cols-3 gap-2 w-full max-w-screen-sm",children:g})}),f&&n("span",{className:"text-red-600",children:"! Please select size first"})]})]}),n("p",{className:"mb-4 text-gray-500",children:r.description}),d("ul",{className:"mb-5",children:[d("li",{className:"mb-1",children:[n("b",{className:"font-medium w-36 inline-block",children:"Model#:"}),n("span",{className:"text-gray-500",children:"Odsy-1000"})]}),d("li",{className:"mb-1",children:[n("b",{className:"font-medium w-36 inline-block",children:"Color:"}),n("span",{className:"text-gray-500",children:"Brown"})]}),d("li",{className:"mb-1",children:[n("b",{className:"font-medium w-36 inline-block",children:"Delivery:"}),n("span",{className:"text-gray-500",children:"Russia, USA & Europe"})]}),d("li",{className:"mb-1",children:[n("b",{className:"font-medium w-36 inline-block",children:"Color:"}),n("span",{className:"text-gray-500",children:"Brown"})]})]}),d("div",{className:"flex gap-2 h-[56px]",children:[n("button",{className:"px-4 py-2 text-white text-xl bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 basis-5/6",onClick:p=>D(),children:"Add to Cart"}),n("button",{className:" px-4 py-2 text-blue-600 border border-gray-300 rounded-md hover:bg-gray-100 basis-1/6",children:n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:n("g",{fill:"#000000",children:n("polygon",{points:"18,22 12,16 6,22 6,2 18,2 "})})})})]})]})})]})})}),n("section",{className:"bg-white py-10",children:n("div",{className:"container max-w-screen-xl mx-auto px-4",children:d("div",{className:"flex flex-wrap -mx-2",children:[n("div",{className:"lg:w-3/4 px-2",children:d("article",{className:"border border-gray-200 shadow-sm rounded bg-white",children:[d("nav",{className:"border-b px-4",children:[n("a",{href:"#",className:"px-3 py-4 mx-1 inline-block border-b border-blue-600 text-blue-600 hover:border-blue-600 hover:text-blue-500",children:"Overview"}),n("a",{href:"#",className:"px-3 py-4 mx-1 inline-block hover:border-blue-600 hover:text-blue-500",children:"Specification"}),n("a",{href:"#",className:"px-3 py-4 mx-1 inline-block hover:border-blue-600 hover:text-blue-500",children:"Delivery"}),n("a",{href:"#",className:"px-3 py-4 mx-1 inline-block hover:border-blue-600 hover:text-blue-500",children:"Payment info"}),n("a",{href:"#",className:"px-3 py-4 mx-1 inline-block hover:border-blue-600 hover:text-blue-500",children:"Seller profile"})]}),d("div",{className:"p-5 text-gray-700",children:[n("p",{className:"mb-3",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),d("p",{className:"mb-3",children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",n("br",{})," Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]}),d("p",{className:"mb-3",children:["Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",n("br",{})," Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]}),n("p",{className:"mb-3",children:"Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."})]})]})}),n("aside",{className:"lg:w-1/4 px-2",children:d("article",{className:"border border-gray-200 shadow-sm rounded bg-white p-4",children:[n("h3",{className:"mb-5 text-lg font-semibold",children:"Similar products"}),d("figure",{className:"flex flex-row mb-4",children:[n("div",{children:n("a",{href:"#",className:"block w-20 h-20 rounded border border-gray-200 overflow-hidden",children:n("img",{src:"images/items/8.jpg",alt:"Title"})})}),d("figcaption",{className:"ml-3",children:[n("p",{children:n("a",{href:"#",className:"text-gray-600 hover:text-blue-600",children:"Travel Bag Jeans Blue Color Modern"})}),n("p",{className:"mt-1 font-semibold",children:"$712.00"})]})]}),d("figure",{className:"flex flex-row mb-4",children:[n("div",{children:n("a",{href:"#",className:"block w-20 h-20 rounded border border-gray-200 overflow-hidden",children:n("img",{src:"images/items/9.jpg",alt:"Title"})})}),d("figcaption",{className:"ml-3",children:[n("p",{children:n("a",{href:"#",className:"text-gray-600 hover:text-blue-600",children:"Apple Watch Series 4 - Space Gray"})}),n("p",{className:"mt-1 font-semibold",children:"$12.99"})]})]}),d("figure",{className:"flex flex-row mb-4",children:[n("div",{children:n("a",{href:"#",className:"block w-20 h-20 rounded border border-gray-200 overflow-hidden",children:n("img",{src:"images/items/10.jpg",alt:"Title"})})}),d("figcaption",{className:"ml-3",children:[n("p",{children:n("a",{href:"#",className:"text-gray-600 hover:text-blue-600",children:"Apple Watch Series 4 - Space Gray"})}),n("p",{className:"mt-1 font-semibold",children:"$12.99"})]})]}),d("figure",{className:"flex flex-row mb-4",children:[n("div",{children:n("a",{href:"#",className:"block w-20 h-20 rounded border border-gray-200 overflow-hidden",children:n("img",{src:"images/items/11.jpg",alt:"Title"})})}),d("figcaption",{className:"ml-3",children:[n("p",{children:n("a",{href:"#",className:"text-gray-600 hover:text-blue-600",children:"Apple Watch Series 4 - Space Gray"})}),n("p",{className:"mt-1 font-semibold",children:"$12.99"})]})]})]})})]})})})]})})}export{hr as default};
