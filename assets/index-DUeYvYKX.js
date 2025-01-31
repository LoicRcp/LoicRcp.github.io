(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();var Sh={exports:{}},zl={},Mh={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U0;function N1(){if(U0)return pt;U0=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),l=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),m=Symbol.iterator;function g(z){return z===null||typeof z!="object"?null:(z=m&&z[m]||z["@@iterator"],typeof z=="function"?z:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,M={};function x(z,te,Ce){this.props=z,this.context=te,this.refs=M,this.updater=Ce||_}x.prototype.isReactComponent={},x.prototype.setState=function(z,te){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,te,"setState")},x.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function v(){}v.prototype=x.prototype;function b(z,te,Ce){this.props=z,this.context=te,this.refs=M,this.updater=Ce||_}var w=b.prototype=new v;w.constructor=b,S(w,x.prototype),w.isPureReactComponent=!0;var T=Array.isArray,C=Object.prototype.hasOwnProperty,P={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function D(z,te,Ce){var ne,le={},Me=null,ye=null;if(te!=null)for(ne in te.ref!==void 0&&(ye=te.ref),te.key!==void 0&&(Me=""+te.key),te)C.call(te,ne)&&!I.hasOwnProperty(ne)&&(le[ne]=te[ne]);var de=arguments.length-2;if(de===1)le.children=Ce;else if(1<de){for(var De=Array(de),$e=0;$e<de;$e++)De[$e]=arguments[$e+2];le.children=De}if(z&&z.defaultProps)for(ne in de=z.defaultProps,de)le[ne]===void 0&&(le[ne]=de[ne]);return{$$typeof:r,type:z,key:Me,ref:ye,props:le,_owner:P.current}}function A(z,te){return{$$typeof:r,type:z.type,key:te,ref:z.ref,props:z.props,_owner:z._owner}}function R(z){return typeof z=="object"&&z!==null&&z.$$typeof===r}function F(z){var te={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(Ce){return te[Ce]})}var O=/\/+/g;function B(z,te){return typeof z=="object"&&z!==null&&z.key!=null?F(""+z.key):te.toString(36)}function G(z,te,Ce,ne,le){var Me=typeof z;(Me==="undefined"||Me==="boolean")&&(z=null);var ye=!1;if(z===null)ye=!0;else switch(Me){case"string":case"number":ye=!0;break;case"object":switch(z.$$typeof){case r:case e:ye=!0}}if(ye)return ye=z,le=le(ye),z=ne===""?"."+B(ye,0):ne,T(le)?(Ce="",z!=null&&(Ce=z.replace(O,"$&/")+"/"),G(le,te,Ce,"",function($e){return $e})):le!=null&&(R(le)&&(le=A(le,Ce+(!le.key||ye&&ye.key===le.key?"":(""+le.key).replace(O,"$&/")+"/")+z)),te.push(le)),1;if(ye=0,ne=ne===""?".":ne+":",T(z))for(var de=0;de<z.length;de++){Me=z[de];var De=ne+B(Me,de);ye+=G(Me,te,Ce,De,le)}else if(De=g(z),typeof De=="function")for(z=De.call(z),de=0;!(Me=z.next()).done;)Me=Me.value,De=ne+B(Me,de++),ye+=G(Me,te,Ce,De,le);else if(Me==="object")throw te=String(z),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.");return ye}function Z(z,te,Ce){if(z==null)return z;var ne=[],le=0;return G(z,ne,"","",function(Me){return te.call(Ce,Me,le++)}),ne}function q(z){if(z._status===-1){var te=z._result;te=te(),te.then(function(Ce){(z._status===0||z._status===-1)&&(z._status=1,z._result=Ce)},function(Ce){(z._status===0||z._status===-1)&&(z._status=2,z._result=Ce)}),z._status===-1&&(z._status=0,z._result=te)}if(z._status===1)return z._result.default;throw z._result}var $={current:null},H={transition:null},J={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:H,ReactCurrentOwner:P};function ee(){throw Error("act(...) is not supported in production builds of React.")}return pt.Children={map:Z,forEach:function(z,te,Ce){Z(z,function(){te.apply(this,arguments)},Ce)},count:function(z){var te=0;return Z(z,function(){te++}),te},toArray:function(z){return Z(z,function(te){return te})||[]},only:function(z){if(!R(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},pt.Component=x,pt.Fragment=t,pt.Profiler=s,pt.PureComponent=b,pt.StrictMode=n,pt.Suspense=f,pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J,pt.act=ee,pt.cloneElement=function(z,te,Ce){if(z==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+z+".");var ne=S({},z.props),le=z.key,Me=z.ref,ye=z._owner;if(te!=null){if(te.ref!==void 0&&(Me=te.ref,ye=P.current),te.key!==void 0&&(le=""+te.key),z.type&&z.type.defaultProps)var de=z.type.defaultProps;for(De in te)C.call(te,De)&&!I.hasOwnProperty(De)&&(ne[De]=te[De]===void 0&&de!==void 0?de[De]:te[De])}var De=arguments.length-2;if(De===1)ne.children=Ce;else if(1<De){de=Array(De);for(var $e=0;$e<De;$e++)de[$e]=arguments[$e+2];ne.children=de}return{$$typeof:r,type:z.type,key:le,ref:Me,props:ne,_owner:ye}},pt.createContext=function(z){return z={$$typeof:l,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},z.Provider={$$typeof:a,_context:z},z.Consumer=z},pt.createElement=D,pt.createFactory=function(z){var te=D.bind(null,z);return te.type=z,te},pt.createRef=function(){return{current:null}},pt.forwardRef=function(z){return{$$typeof:u,render:z}},pt.isValidElement=R,pt.lazy=function(z){return{$$typeof:h,_payload:{_status:-1,_result:z},_init:q}},pt.memo=function(z,te){return{$$typeof:d,type:z,compare:te===void 0?null:te}},pt.startTransition=function(z){var te=H.transition;H.transition={};try{z()}finally{H.transition=te}},pt.unstable_act=ee,pt.useCallback=function(z,te){return $.current.useCallback(z,te)},pt.useContext=function(z){return $.current.useContext(z)},pt.useDebugValue=function(){},pt.useDeferredValue=function(z){return $.current.useDeferredValue(z)},pt.useEffect=function(z,te){return $.current.useEffect(z,te)},pt.useId=function(){return $.current.useId()},pt.useImperativeHandle=function(z,te,Ce){return $.current.useImperativeHandle(z,te,Ce)},pt.useInsertionEffect=function(z,te){return $.current.useInsertionEffect(z,te)},pt.useLayoutEffect=function(z,te){return $.current.useLayoutEffect(z,te)},pt.useMemo=function(z,te){return $.current.useMemo(z,te)},pt.useReducer=function(z,te,Ce){return $.current.useReducer(z,te,Ce)},pt.useRef=function(z){return $.current.useRef(z)},pt.useState=function(z){return $.current.useState(z)},pt.useSyncExternalStore=function(z,te,Ce){return $.current.useSyncExternalStore(z,te,Ce)},pt.useTransition=function(){return $.current.useTransition()},pt.version="18.3.1",pt}var O0;function ym(){return O0||(O0=1,Mh.exports=N1()),Mh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k0;function L1(){if(k0)return zl;k0=1;var r=ym(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(u,f,d){var h,m={},g=null,_=null;d!==void 0&&(g=""+d),f.key!==void 0&&(g=""+f.key),f.ref!==void 0&&(_=f.ref);for(h in f)n.call(f,h)&&!a.hasOwnProperty(h)&&(m[h]=f[h]);if(u&&u.defaultProps)for(h in f=u.defaultProps,f)m[h]===void 0&&(m[h]=f[h]);return{$$typeof:e,type:u,key:g,ref:_,props:m,_owner:s.current}}return zl.Fragment=t,zl.jsx=l,zl.jsxs=l,zl}var z0;function F1(){return z0||(z0=1,Sh.exports=L1()),Sh.exports}var un=F1(),Ft=ym(),Rc={},Eh={exports:{}},ai={},Th={exports:{}},wh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B0;function U1(){return B0||(B0=1,function(r){function e(H,J){var ee=H.length;H.push(J);e:for(;0<ee;){var z=ee-1>>>1,te=H[z];if(0<s(te,J))H[z]=J,H[ee]=te,ee=z;else break e}}function t(H){return H.length===0?null:H[0]}function n(H){if(H.length===0)return null;var J=H[0],ee=H.pop();if(ee!==J){H[0]=ee;e:for(var z=0,te=H.length,Ce=te>>>1;z<Ce;){var ne=2*(z+1)-1,le=H[ne],Me=ne+1,ye=H[Me];if(0>s(le,ee))Me<te&&0>s(ye,le)?(H[z]=ye,H[Me]=ee,z=Me):(H[z]=le,H[ne]=ee,z=ne);else if(Me<te&&0>s(ye,ee))H[z]=ye,H[Me]=ee,z=Me;else break e}}return J}function s(H,J){var ee=H.sortIndex-J.sortIndex;return ee!==0?ee:H.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;r.unstable_now=function(){return a.now()}}else{var l=Date,u=l.now();r.unstable_now=function(){return l.now()-u}}var f=[],d=[],h=1,m=null,g=3,_=!1,S=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(H){for(var J=t(d);J!==null;){if(J.callback===null)n(d);else if(J.startTime<=H)n(d),J.sortIndex=J.expirationTime,e(f,J);else break;J=t(d)}}function T(H){if(M=!1,w(H),!S)if(t(f)!==null)S=!0,q(C);else{var J=t(d);J!==null&&$(T,J.startTime-H)}}function C(H,J){S=!1,M&&(M=!1,v(D),D=-1),_=!0;var ee=g;try{for(w(J),m=t(f);m!==null&&(!(m.expirationTime>J)||H&&!F());){var z=m.callback;if(typeof z=="function"){m.callback=null,g=m.priorityLevel;var te=z(m.expirationTime<=J);J=r.unstable_now(),typeof te=="function"?m.callback=te:m===t(f)&&n(f),w(J)}else n(f);m=t(f)}if(m!==null)var Ce=!0;else{var ne=t(d);ne!==null&&$(T,ne.startTime-J),Ce=!1}return Ce}finally{m=null,g=ee,_=!1}}var P=!1,I=null,D=-1,A=5,R=-1;function F(){return!(r.unstable_now()-R<A)}function O(){if(I!==null){var H=r.unstable_now();R=H;var J=!0;try{J=I(!0,H)}finally{J?B():(P=!1,I=null)}}else P=!1}var B;if(typeof b=="function")B=function(){b(O)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,Z=G.port2;G.port1.onmessage=O,B=function(){Z.postMessage(null)}}else B=function(){x(O,0)};function q(H){I=H,P||(P=!0,B())}function $(H,J){D=x(function(){H(r.unstable_now())},J)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(H){H.callback=null},r.unstable_continueExecution=function(){S||_||(S=!0,q(C))},r.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<H?Math.floor(1e3/H):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_getFirstCallbackNode=function(){return t(f)},r.unstable_next=function(H){switch(g){case 1:case 2:case 3:var J=3;break;default:J=g}var ee=g;g=J;try{return H()}finally{g=ee}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(H,J){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ee=g;g=H;try{return J()}finally{g=ee}},r.unstable_scheduleCallback=function(H,J,ee){var z=r.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?z+ee:z):ee=z,H){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=ee+te,H={id:h++,callback:J,priorityLevel:H,startTime:ee,expirationTime:te,sortIndex:-1},ee>z?(H.sortIndex=ee,e(d,H),t(f)===null&&H===t(d)&&(M?(v(D),D=-1):M=!0,$(T,ee-z))):(H.sortIndex=te,e(f,H),S||_||(S=!0,q(C))),H},r.unstable_shouldYield=F,r.unstable_wrapCallback=function(H){var J=g;return function(){var ee=g;g=J;try{return H.apply(this,arguments)}finally{g=ee}}}}(wh)),wh}var V0;function O1(){return V0||(V0=1,Th.exports=U1()),Th.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H0;function k1(){if(H0)return ai;H0=1;var r=ym(),e=O1();function t(i){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+i,c=1;c<arguments.length;c++)o+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+i+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n=new Set,s={};function a(i,o){l(i,o),l(i+"Capture",o)}function l(i,o){for(s[i]=o,i=0;i<o.length;i++)n.add(o[i])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,h={},m={};function g(i){return f.call(m,i)?!0:f.call(h,i)?!1:d.test(i)?m[i]=!0:(h[i]=!0,!1)}function _(i,o,c,p){if(c!==null&&c.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return p?!1:c!==null?!c.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function S(i,o,c,p){if(o===null||typeof o>"u"||_(i,o,c,p))return!0;if(p)return!1;if(c!==null)switch(c.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function M(i,o,c,p,y,E,N){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=p,this.attributeNamespace=y,this.mustUseProperty=c,this.propertyName=i,this.type=o,this.sanitizeURL=E,this.removeEmptyString=N}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){x[i]=new M(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var o=i[0];x[o]=new M(o,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){x[i]=new M(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){x[i]=new M(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){x[i]=new M(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){x[i]=new M(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){x[i]=new M(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){x[i]=new M(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){x[i]=new M(i,5,!1,i.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function b(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var o=i.replace(v,b);x[o]=new M(o,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var o=i.replace(v,b);x[o]=new M(o,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var o=i.replace(v,b);x[o]=new M(o,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){x[i]=new M(i,1,!1,i.toLowerCase(),null,!1,!1)}),x.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){x[i]=new M(i,1,!1,i.toLowerCase(),null,!0,!0)});function w(i,o,c,p){var y=x.hasOwnProperty(o)?x[o]:null;(y!==null?y.type!==0:p||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(S(o,c,y,p)&&(c=null),p||y===null?g(o)&&(c===null?i.removeAttribute(o):i.setAttribute(o,""+c)):y.mustUseProperty?i[y.propertyName]=c===null?y.type===3?!1:"":c:(o=y.attributeName,p=y.attributeNamespace,c===null?i.removeAttribute(o):(y=y.type,c=y===3||y===4&&c===!0?"":""+c,p?i.setAttributeNS(p,o,c):i.setAttribute(o,c))))}var T=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,C=Symbol.for("react.element"),P=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),F=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),$=Symbol.for("react.offscreen"),H=Symbol.iterator;function J(i){return i===null||typeof i!="object"?null:(i=H&&i[H]||i["@@iterator"],typeof i=="function"?i:null)}var ee=Object.assign,z;function te(i){if(z===void 0)try{throw Error()}catch(c){var o=c.stack.trim().match(/\n( *(at )?)/);z=o&&o[1]||""}return`
`+z+i}var Ce=!1;function ne(i,o){if(!i||Ce)return"";Ce=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(ce){var p=ce}Reflect.construct(i,[],o)}else{try{o.call()}catch(ce){p=ce}i.call(o.prototype)}else{try{throw Error()}catch(ce){p=ce}i()}}catch(ce){if(ce&&p&&typeof ce.stack=="string"){for(var y=ce.stack.split(`
`),E=p.stack.split(`
`),N=y.length-1,V=E.length-1;1<=N&&0<=V&&y[N]!==E[V];)V--;for(;1<=N&&0<=V;N--,V--)if(y[N]!==E[V]){if(N!==1||V!==1)do if(N--,V--,0>V||y[N]!==E[V]){var W=`
`+y[N].replace(" at new "," at ");return i.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",i.displayName)),W}while(1<=N&&0<=V);break}}}finally{Ce=!1,Error.prepareStackTrace=c}return(i=i?i.displayName||i.name:"")?te(i):""}function le(i){switch(i.tag){case 5:return te(i.type);case 16:return te("Lazy");case 13:return te("Suspense");case 19:return te("SuspenseList");case 0:case 2:case 15:return i=ne(i.type,!1),i;case 11:return i=ne(i.type.render,!1),i;case 1:return i=ne(i.type,!0),i;default:return""}}function Me(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case I:return"Fragment";case P:return"Portal";case A:return"Profiler";case D:return"StrictMode";case B:return"Suspense";case G:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case F:return(i.displayName||"Context")+".Consumer";case R:return(i._context.displayName||"Context")+".Provider";case O:var o=i.render;return i=i.displayName,i||(i=o.displayName||o.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case Z:return o=i.displayName||null,o!==null?o:Me(i.type)||"Memo";case q:o=i._payload,i=i._init;try{return Me(i(o))}catch{}}return null}function ye(i){var o=i.type;switch(i.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=o.render,i=i.displayName||i.name||"",o.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(o);case 8:return o===D?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function de(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function De(i){var o=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function $e(i){var o=De(i)?"checked":"value",c=Object.getOwnPropertyDescriptor(i.constructor.prototype,o),p=""+i[o];if(!i.hasOwnProperty(o)&&typeof c<"u"&&typeof c.get=="function"&&typeof c.set=="function"){var y=c.get,E=c.set;return Object.defineProperty(i,o,{configurable:!0,get:function(){return y.call(this)},set:function(N){p=""+N,E.call(this,N)}}),Object.defineProperty(i,o,{enumerable:c.enumerable}),{getValue:function(){return p},setValue:function(N){p=""+N},stopTracking:function(){i._valueTracker=null,delete i[o]}}}}function Tt(i){i._valueTracker||(i._valueTracker=$e(i))}function at(i){if(!i)return!1;var o=i._valueTracker;if(!o)return!0;var c=o.getValue(),p="";return i&&(p=De(i)?i.checked?"true":"false":i.value),i=p,i!==c?(o.setValue(i),!0):!1}function Nt(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function X(i,o){var c=o.checked;return ee({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:c??i._wrapperState.initialChecked})}function Xn(i,o){var c=o.defaultValue==null?"":o.defaultValue,p=o.checked!=null?o.checked:o.defaultChecked;c=de(o.value!=null?o.value:c),i._wrapperState={initialChecked:p,initialValue:c,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function mt(i,o){o=o.checked,o!=null&&w(i,"checked",o,!1)}function dt(i,o){mt(i,o);var c=de(o.value),p=o.type;if(c!=null)p==="number"?(c===0&&i.value===""||i.value!=c)&&(i.value=""+c):i.value!==""+c&&(i.value=""+c);else if(p==="submit"||p==="reset"){i.removeAttribute("value");return}o.hasOwnProperty("value")?Rt(i,o.type,c):o.hasOwnProperty("defaultValue")&&Rt(i,o.type,de(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(i.defaultChecked=!!o.defaultChecked)}function Ye(i,o,c){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var p=o.type;if(!(p!=="submit"&&p!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+i._wrapperState.initialValue,c||o===i.value||(i.value=o),i.defaultValue=o}c=i.name,c!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,c!==""&&(i.name=c)}function Rt(i,o,c){(o!=="number"||Nt(i.ownerDocument)!==i)&&(c==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+c&&(i.defaultValue=""+c))}var We=Array.isArray;function k(i,o,c,p){if(i=i.options,o){o={};for(var y=0;y<c.length;y++)o["$"+c[y]]=!0;for(c=0;c<i.length;c++)y=o.hasOwnProperty("$"+i[c].value),i[c].selected!==y&&(i[c].selected=y),y&&p&&(i[c].defaultSelected=!0)}else{for(c=""+de(c),o=null,y=0;y<i.length;y++){if(i[y].value===c){i[y].selected=!0,p&&(i[y].defaultSelected=!0);return}o!==null||i[y].disabled||(o=i[y])}o!==null&&(o.selected=!0)}}function L(i,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return ee({},o,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function ae(i,o){var c=o.value;if(c==null){if(c=o.children,o=o.defaultValue,c!=null){if(o!=null)throw Error(t(92));if(We(c)){if(1<c.length)throw Error(t(93));c=c[0]}o=c}o==null&&(o=""),c=o}i._wrapperState={initialValue:de(c)}}function me(i,o){var c=de(o.value),p=de(o.defaultValue);c!=null&&(c=""+c,c!==i.value&&(i.value=c),o.defaultValue==null&&i.defaultValue!==c&&(i.defaultValue=c)),p!=null&&(i.defaultValue=""+p)}function _e(i){var o=i.textContent;o===i._wrapperState.initialValue&&o!==""&&o!==null&&(i.value=o)}function he(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xe(i,o){return i==null||i==="http://www.w3.org/1999/xhtml"?he(o):i==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Ae,Ue=function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,c,p,y){MSApp.execUnsafeLocalFunction(function(){return i(o,c,p,y)})}:i}(function(i,o){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=o;else{for(Ae=Ae||document.createElement("div"),Ae.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=Ae.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;o.firstChild;)i.appendChild(o.firstChild)}});function ct(i,o){if(o){var c=i.firstChild;if(c&&c===i.lastChild&&c.nodeType===3){c.nodeValue=o;return}}i.textContent=o}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ke=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(i){ke.forEach(function(o){o=o+i.charAt(0).toUpperCase()+i.substring(1),Ee[o]=Ee[i]})});function Ze(i,o,c){return o==null||typeof o=="boolean"||o===""?"":c||typeof o!="number"||o===0||Ee.hasOwnProperty(i)&&Ee[i]?(""+o).trim():o+"px"}function et(i,o){i=i.style;for(var c in o)if(o.hasOwnProperty(c)){var p=c.indexOf("--")===0,y=Ze(c,o[c],p);c==="float"&&(c="cssFloat"),p?i.setProperty(c,y):i[c]=y}}var ze=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ht(i,o){if(o){if(ze[i]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function it(i,o){if(i.indexOf("-")===-1)return typeof o.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var At=null;function j(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Re=null,fe=null,pe=null;function Ne(i){if(i=Tl(i)){if(typeof Re!="function")throw Error(t(280));var o=i.stateNode;o&&(o=Gu(o),Re(i.stateNode,i.type,o))}}function Ie(i){fe?pe?pe.push(i):pe=[i]:fe=i}function rt(){if(fe){var i=fe,o=pe;if(pe=fe=null,Ne(i),o)for(i=0;i<o.length;i++)Ne(o[i])}}function Ut(i,o){return i(o)}function dn(){}var St=!1;function ti(i,o,c){if(St)return i(o,c);St=!0;try{return Ut(i,o,c)}finally{St=!1,(fe!==null||pe!==null)&&(dn(),rt())}}function qn(i,o){var c=i.stateNode;if(c===null)return null;var p=Gu(c);if(p===null)return null;c=p[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(p=!p.disabled)||(i=i.type,p=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!p;break e;default:i=!1}if(i)return null;if(c&&typeof c!="function")throw Error(t(231,o,typeof c));return c}var zo=!1;if(u)try{var is={};Object.defineProperty(is,"passive",{get:function(){zo=!0}}),window.addEventListener("test",is,is),window.removeEventListener("test",is,is)}catch{zo=!1}function wr(i,o,c,p,y,E,N,V,W){var ce=Array.prototype.slice.call(arguments,3);try{o.apply(c,ce)}catch(ve){this.onError(ve)}}var Cr=!1,Ys=null,js=!1,rs=null,Su={onError:function(i){Cr=!0,Ys=i}};function Bo(i,o,c,p,y,E,N,V,W){Cr=!1,Ys=null,wr.apply(Su,arguments)}function Mu(i,o,c,p,y,E,N,V,W){if(Bo.apply(this,arguments),Cr){if(Cr){var ce=Ys;Cr=!1,Ys=null}else throw Error(t(198));js||(js=!0,rs=ce)}}function or(i){var o=i,c=i;if(i.alternate)for(;o.return;)o=o.return;else{i=o;do o=i,o.flags&4098&&(c=o.return),i=o.return;while(i)}return o.tag===3?c:null}function Eu(i){if(i.tag===13){var o=i.memoizedState;if(o===null&&(i=i.alternate,i!==null&&(o=i.memoizedState)),o!==null)return o.dehydrated}return null}function Tu(i){if(or(i)!==i)throw Error(t(188))}function Wf(i){var o=i.alternate;if(!o){if(o=or(i),o===null)throw Error(t(188));return o!==i?null:i}for(var c=i,p=o;;){var y=c.return;if(y===null)break;var E=y.alternate;if(E===null){if(p=y.return,p!==null){c=p;continue}break}if(y.child===E.child){for(E=y.child;E;){if(E===c)return Tu(y),i;if(E===p)return Tu(y),o;E=E.sibling}throw Error(t(188))}if(c.return!==p.return)c=y,p=E;else{for(var N=!1,V=y.child;V;){if(V===c){N=!0,c=y,p=E;break}if(V===p){N=!0,p=y,c=E;break}V=V.sibling}if(!N){for(V=E.child;V;){if(V===c){N=!0,c=E,p=y;break}if(V===p){N=!0,p=E,c=y;break}V=V.sibling}if(!N)throw Error(t(189))}}if(c.alternate!==p)throw Error(t(190))}if(c.tag!==3)throw Error(t(188));return c.stateNode.current===c?i:o}function wu(i){return i=Wf(i),i!==null?Cu(i):null}function Cu(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var o=Cu(i);if(o!==null)return o;i=i.sibling}return null}var Au=e.unstable_scheduleCallback,U=e.unstable_cancelCallback,K=e.unstable_shouldYield,ue=e.unstable_requestPaint,re=e.unstable_now,Q=e.unstable_getCurrentPriorityLevel,Se=e.unstable_ImmediatePriority,be=e.unstable_UserBlockingPriority,Le=e.unstable_NormalPriority,Be=e.unstable_LowPriority,tt=e.unstable_IdlePriority,Je=null,He=null;function vt(i){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(Je,i,void 0,(i.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:xt,$t=Math.log,zt=Math.LN2;function xt(i){return i>>>=0,i===0?32:31-($t(i)/zt|0)|0}var je=64,Zt=4194304;function gt(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function Dn(i,o){var c=i.pendingLanes;if(c===0)return 0;var p=0,y=i.suspendedLanes,E=i.pingedLanes,N=c&268435455;if(N!==0){var V=N&~y;V!==0?p=gt(V):(E&=N,E!==0&&(p=gt(E)))}else N=c&~y,N!==0?p=gt(N):E!==0&&(p=gt(E));if(p===0)return 0;if(o!==0&&o!==p&&!(o&y)&&(y=p&-p,E=o&-o,y>=E||y===16&&(E&4194240)!==0))return o;if(p&4&&(p|=c&16),o=i.entangledLanes,o!==0)for(i=i.entanglements,o&=p;0<o;)c=31-st(o),y=1<<c,p|=i[c],o&=~y;return p}function ss(i,o){switch(i){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yn(i,o){for(var c=i.suspendedLanes,p=i.pingedLanes,y=i.expirationTimes,E=i.pendingLanes;0<E;){var N=31-st(E),V=1<<N,W=y[N];W===-1?(!(V&c)||V&p)&&(y[N]=ss(V,o)):W<=o&&(i.expiredLanes|=V),E&=~V}}function Ar(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Dt(){var i=je;return je<<=1,!(je&4194240)&&(je=64),i}function In(i){for(var o=[],c=0;31>c;c++)o.push(i);return o}function vn(i,o,c){i.pendingLanes|=o,o!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,o=31-st(o),i[o]=c}function An(i,o){var c=i.pendingLanes&~o;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=o,i.mutableReadLanes&=o,i.entangledLanes&=o,o=i.entanglements;var p=i.eventTimes;for(i=i.expirationTimes;0<c;){var y=31-st(c),E=1<<y;o[y]=0,p[y]=-1,i[y]=-1,c&=~E}}function yn(i,o){var c=i.entangledLanes|=o;for(i=i.entanglements;c;){var p=31-st(c),y=1<<p;y&o|i[p]&o&&(i[p]|=o),c&=~y}}var Mt=0;function ar(i){return i&=-i,1<i?4<i?i&268435455?16:536870912:4:1}var mg,Xf,gg,_g,vg,qf=!1,Ru=[],os=null,as=null,ls=null,ll=new Map,ul=new Map,us=[],nM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yg(i,o){switch(i){case"focusin":case"focusout":os=null;break;case"dragenter":case"dragleave":as=null;break;case"mouseover":case"mouseout":ls=null;break;case"pointerover":case"pointerout":ll.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":ul.delete(o.pointerId)}}function cl(i,o,c,p,y,E){return i===null||i.nativeEvent!==E?(i={blockedOn:o,domEventName:c,eventSystemFlags:p,nativeEvent:E,targetContainers:[y]},o!==null&&(o=Tl(o),o!==null&&Xf(o)),i):(i.eventSystemFlags|=p,o=i.targetContainers,y!==null&&o.indexOf(y)===-1&&o.push(y),i)}function iM(i,o,c,p,y){switch(o){case"focusin":return os=cl(os,i,o,c,p,y),!0;case"dragenter":return as=cl(as,i,o,c,p,y),!0;case"mouseover":return ls=cl(ls,i,o,c,p,y),!0;case"pointerover":var E=y.pointerId;return ll.set(E,cl(ll.get(E)||null,i,o,c,p,y)),!0;case"gotpointercapture":return E=y.pointerId,ul.set(E,cl(ul.get(E)||null,i,o,c,p,y)),!0}return!1}function xg(i){var o=$s(i.target);if(o!==null){var c=or(o);if(c!==null){if(o=c.tag,o===13){if(o=Eu(c),o!==null){i.blockedOn=o,vg(i.priority,function(){gg(c)});return}}else if(o===3&&c.stateNode.current.memoizedState.isDehydrated){i.blockedOn=c.tag===3?c.stateNode.containerInfo:null;return}}}i.blockedOn=null}function bu(i){if(i.blockedOn!==null)return!1;for(var o=i.targetContainers;0<o.length;){var c=jf(i.domEventName,i.eventSystemFlags,o[0],i.nativeEvent);if(c===null){c=i.nativeEvent;var p=new c.constructor(c.type,c);At=p,c.target.dispatchEvent(p),At=null}else return o=Tl(c),o!==null&&Xf(o),i.blockedOn=c,!1;o.shift()}return!0}function Sg(i,o,c){bu(i)&&c.delete(o)}function rM(){qf=!1,os!==null&&bu(os)&&(os=null),as!==null&&bu(as)&&(as=null),ls!==null&&bu(ls)&&(ls=null),ll.forEach(Sg),ul.forEach(Sg)}function fl(i,o){i.blockedOn===o&&(i.blockedOn=null,qf||(qf=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,rM)))}function dl(i){function o(y){return fl(y,i)}if(0<Ru.length){fl(Ru[0],i);for(var c=1;c<Ru.length;c++){var p=Ru[c];p.blockedOn===i&&(p.blockedOn=null)}}for(os!==null&&fl(os,i),as!==null&&fl(as,i),ls!==null&&fl(ls,i),ll.forEach(o),ul.forEach(o),c=0;c<us.length;c++)p=us[c],p.blockedOn===i&&(p.blockedOn=null);for(;0<us.length&&(c=us[0],c.blockedOn===null);)xg(c),c.blockedOn===null&&us.shift()}var Vo=T.ReactCurrentBatchConfig,Pu=!0;function sM(i,o,c,p){var y=Mt,E=Vo.transition;Vo.transition=null;try{Mt=1,Yf(i,o,c,p)}finally{Mt=y,Vo.transition=E}}function oM(i,o,c,p){var y=Mt,E=Vo.transition;Vo.transition=null;try{Mt=4,Yf(i,o,c,p)}finally{Mt=y,Vo.transition=E}}function Yf(i,o,c,p){if(Pu){var y=jf(i,o,c,p);if(y===null)fd(i,o,p,Du,c),yg(i,p);else if(iM(y,i,o,c,p))p.stopPropagation();else if(yg(i,p),o&4&&-1<nM.indexOf(i)){for(;y!==null;){var E=Tl(y);if(E!==null&&mg(E),E=jf(i,o,c,p),E===null&&fd(i,o,p,Du,c),E===y)break;y=E}y!==null&&p.stopPropagation()}else fd(i,o,p,null,c)}}var Du=null;function jf(i,o,c,p){if(Du=null,i=j(p),i=$s(i),i!==null)if(o=or(i),o===null)i=null;else if(c=o.tag,c===13){if(i=Eu(o),i!==null)return i;i=null}else if(c===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null);return Du=i,null}function Mg(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Q()){case Se:return 1;case be:return 4;case Le:case Be:return 16;case tt:return 536870912;default:return 16}default:return 16}}var cs=null,$f=null,Iu=null;function Eg(){if(Iu)return Iu;var i,o=$f,c=o.length,p,y="value"in cs?cs.value:cs.textContent,E=y.length;for(i=0;i<c&&o[i]===y[i];i++);var N=c-i;for(p=1;p<=N&&o[c-p]===y[E-p];p++);return Iu=y.slice(i,1<p?1-p:void 0)}function Nu(i){var o=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&o===13&&(i=13)):i=o,i===10&&(i=13),32<=i||i===13?i:0}function Lu(){return!0}function Tg(){return!1}function vi(i){function o(c,p,y,E,N){this._reactName=c,this._targetInst=y,this.type=p,this.nativeEvent=E,this.target=N,this.currentTarget=null;for(var V in i)i.hasOwnProperty(V)&&(c=i[V],this[V]=c?c(E):E[V]);return this.isDefaultPrevented=(E.defaultPrevented!=null?E.defaultPrevented:E.returnValue===!1)?Lu:Tg,this.isPropagationStopped=Tg,this}return ee(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var c=this.nativeEvent;c&&(c.preventDefault?c.preventDefault():typeof c.returnValue!="unknown"&&(c.returnValue=!1),this.isDefaultPrevented=Lu)},stopPropagation:function(){var c=this.nativeEvent;c&&(c.stopPropagation?c.stopPropagation():typeof c.cancelBubble!="unknown"&&(c.cancelBubble=!0),this.isPropagationStopped=Lu)},persist:function(){},isPersistent:Lu}),o}var Ho={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zf=vi(Ho),hl=ee({},Ho,{view:0,detail:0}),aM=vi(hl),Kf,Qf,pl,Fu=ee({},hl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ed,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==pl&&(pl&&i.type==="mousemove"?(Kf=i.screenX-pl.screenX,Qf=i.screenY-pl.screenY):Qf=Kf=0,pl=i),Kf)},movementY:function(i){return"movementY"in i?i.movementY:Qf}}),wg=vi(Fu),lM=ee({},Fu,{dataTransfer:0}),uM=vi(lM),cM=ee({},hl,{relatedTarget:0}),Jf=vi(cM),fM=ee({},Ho,{animationName:0,elapsedTime:0,pseudoElement:0}),dM=vi(fM),hM=ee({},Ho,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),pM=vi(hM),mM=ee({},Ho,{data:0}),Cg=vi(mM),gM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_M={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yM(i){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(i):(i=vM[i])?!!o[i]:!1}function ed(){return yM}var xM=ee({},hl,{key:function(i){if(i.key){var o=gM[i.key]||i.key;if(o!=="Unidentified")return o}return i.type==="keypress"?(i=Nu(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?_M[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ed,charCode:function(i){return i.type==="keypress"?Nu(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Nu(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),SM=vi(xM),MM=ee({},Fu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ag=vi(MM),EM=ee({},hl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ed}),TM=vi(EM),wM=ee({},Ho,{propertyName:0,elapsedTime:0,pseudoElement:0}),CM=vi(wM),AM=ee({},Fu,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),RM=vi(AM),bM=[9,13,27,32],td=u&&"CompositionEvent"in window,ml=null;u&&"documentMode"in document&&(ml=document.documentMode);var PM=u&&"TextEvent"in window&&!ml,Rg=u&&(!td||ml&&8<ml&&11>=ml),bg=" ",Pg=!1;function Dg(i,o){switch(i){case"keyup":return bM.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ig(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Go=!1;function DM(i,o){switch(i){case"compositionend":return Ig(o);case"keypress":return o.which!==32?null:(Pg=!0,bg);case"textInput":return i=o.data,i===bg&&Pg?null:i;default:return null}}function IM(i,o){if(Go)return i==="compositionend"||!td&&Dg(i,o)?(i=Eg(),Iu=$f=cs=null,Go=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return Rg&&o.locale!=="ko"?null:o.data;default:return null}}var NM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ng(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o==="input"?!!NM[i.type]:o==="textarea"}function Lg(i,o,c,p){Ie(p),o=Bu(o,"onChange"),0<o.length&&(c=new Zf("onChange","change",null,c,p),i.push({event:c,listeners:o}))}var gl=null,_l=null;function LM(i){Qg(i,0)}function Uu(i){var o=jo(i);if(at(o))return i}function FM(i,o){if(i==="change")return o}var Fg=!1;if(u){var nd;if(u){var id="oninput"in document;if(!id){var Ug=document.createElement("div");Ug.setAttribute("oninput","return;"),id=typeof Ug.oninput=="function"}nd=id}else nd=!1;Fg=nd&&(!document.documentMode||9<document.documentMode)}function Og(){gl&&(gl.detachEvent("onpropertychange",kg),_l=gl=null)}function kg(i){if(i.propertyName==="value"&&Uu(_l)){var o=[];Lg(o,_l,i,j(i)),ti(LM,o)}}function UM(i,o,c){i==="focusin"?(Og(),gl=o,_l=c,gl.attachEvent("onpropertychange",kg)):i==="focusout"&&Og()}function OM(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Uu(_l)}function kM(i,o){if(i==="click")return Uu(o)}function zM(i,o){if(i==="input"||i==="change")return Uu(o)}function BM(i,o){return i===o&&(i!==0||1/i===1/o)||i!==i&&o!==o}var Xi=typeof Object.is=="function"?Object.is:BM;function vl(i,o){if(Xi(i,o))return!0;if(typeof i!="object"||i===null||typeof o!="object"||o===null)return!1;var c=Object.keys(i),p=Object.keys(o);if(c.length!==p.length)return!1;for(p=0;p<c.length;p++){var y=c[p];if(!f.call(o,y)||!Xi(i[y],o[y]))return!1}return!0}function zg(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Bg(i,o){var c=zg(i);i=0;for(var p;c;){if(c.nodeType===3){if(p=i+c.textContent.length,i<=o&&p>=o)return{node:c,offset:o-i};i=p}e:{for(;c;){if(c.nextSibling){c=c.nextSibling;break e}c=c.parentNode}c=void 0}c=zg(c)}}function Vg(i,o){return i&&o?i===o?!0:i&&i.nodeType===3?!1:o&&o.nodeType===3?Vg(i,o.parentNode):"contains"in i?i.contains(o):i.compareDocumentPosition?!!(i.compareDocumentPosition(o)&16):!1:!1}function Hg(){for(var i=window,o=Nt();o instanceof i.HTMLIFrameElement;){try{var c=typeof o.contentWindow.location.href=="string"}catch{c=!1}if(c)i=o.contentWindow;else break;o=Nt(i.document)}return o}function rd(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o&&(o==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||o==="textarea"||i.contentEditable==="true")}function VM(i){var o=Hg(),c=i.focusedElem,p=i.selectionRange;if(o!==c&&c&&c.ownerDocument&&Vg(c.ownerDocument.documentElement,c)){if(p!==null&&rd(c)){if(o=p.start,i=p.end,i===void 0&&(i=o),"selectionStart"in c)c.selectionStart=o,c.selectionEnd=Math.min(i,c.value.length);else if(i=(o=c.ownerDocument||document)&&o.defaultView||window,i.getSelection){i=i.getSelection();var y=c.textContent.length,E=Math.min(p.start,y);p=p.end===void 0?E:Math.min(p.end,y),!i.extend&&E>p&&(y=p,p=E,E=y),y=Bg(c,E);var N=Bg(c,p);y&&N&&(i.rangeCount!==1||i.anchorNode!==y.node||i.anchorOffset!==y.offset||i.focusNode!==N.node||i.focusOffset!==N.offset)&&(o=o.createRange(),o.setStart(y.node,y.offset),i.removeAllRanges(),E>p?(i.addRange(o),i.extend(N.node,N.offset)):(o.setEnd(N.node,N.offset),i.addRange(o)))}}for(o=[],i=c;i=i.parentNode;)i.nodeType===1&&o.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<o.length;c++)i=o[c],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var HM=u&&"documentMode"in document&&11>=document.documentMode,Wo=null,sd=null,yl=null,od=!1;function Gg(i,o,c){var p=c.window===c?c.document:c.nodeType===9?c:c.ownerDocument;od||Wo==null||Wo!==Nt(p)||(p=Wo,"selectionStart"in p&&rd(p)?p={start:p.selectionStart,end:p.selectionEnd}:(p=(p.ownerDocument&&p.ownerDocument.defaultView||window).getSelection(),p={anchorNode:p.anchorNode,anchorOffset:p.anchorOffset,focusNode:p.focusNode,focusOffset:p.focusOffset}),yl&&vl(yl,p)||(yl=p,p=Bu(sd,"onSelect"),0<p.length&&(o=new Zf("onSelect","select",null,o,c),i.push({event:o,listeners:p}),o.target=Wo)))}function Ou(i,o){var c={};return c[i.toLowerCase()]=o.toLowerCase(),c["Webkit"+i]="webkit"+o,c["Moz"+i]="moz"+o,c}var Xo={animationend:Ou("Animation","AnimationEnd"),animationiteration:Ou("Animation","AnimationIteration"),animationstart:Ou("Animation","AnimationStart"),transitionend:Ou("Transition","TransitionEnd")},ad={},Wg={};u&&(Wg=document.createElement("div").style,"AnimationEvent"in window||(delete Xo.animationend.animation,delete Xo.animationiteration.animation,delete Xo.animationstart.animation),"TransitionEvent"in window||delete Xo.transitionend.transition);function ku(i){if(ad[i])return ad[i];if(!Xo[i])return i;var o=Xo[i],c;for(c in o)if(o.hasOwnProperty(c)&&c in Wg)return ad[i]=o[c];return i}var Xg=ku("animationend"),qg=ku("animationiteration"),Yg=ku("animationstart"),jg=ku("transitionend"),$g=new Map,Zg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fs(i,o){$g.set(i,o),a(o,[i])}for(var ld=0;ld<Zg.length;ld++){var ud=Zg[ld],GM=ud.toLowerCase(),WM=ud[0].toUpperCase()+ud.slice(1);fs(GM,"on"+WM)}fs(Xg,"onAnimationEnd"),fs(qg,"onAnimationIteration"),fs(Yg,"onAnimationStart"),fs("dblclick","onDoubleClick"),fs("focusin","onFocus"),fs("focusout","onBlur"),fs(jg,"onTransitionEnd"),l("onMouseEnter",["mouseout","mouseover"]),l("onMouseLeave",["mouseout","mouseover"]),l("onPointerEnter",["pointerout","pointerover"]),l("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),XM=new Set("cancel close invalid load scroll toggle".split(" ").concat(xl));function Kg(i,o,c){var p=i.type||"unknown-event";i.currentTarget=c,Mu(p,o,void 0,i),i.currentTarget=null}function Qg(i,o){o=(o&4)!==0;for(var c=0;c<i.length;c++){var p=i[c],y=p.event;p=p.listeners;e:{var E=void 0;if(o)for(var N=p.length-1;0<=N;N--){var V=p[N],W=V.instance,ce=V.currentTarget;if(V=V.listener,W!==E&&y.isPropagationStopped())break e;Kg(y,V,ce),E=W}else for(N=0;N<p.length;N++){if(V=p[N],W=V.instance,ce=V.currentTarget,V=V.listener,W!==E&&y.isPropagationStopped())break e;Kg(y,V,ce),E=W}}}if(js)throw i=rs,js=!1,rs=null,i}function Ot(i,o){var c=o[_d];c===void 0&&(c=o[_d]=new Set);var p=i+"__bubble";c.has(p)||(Jg(o,i,2,!1),c.add(p))}function cd(i,o,c){var p=0;o&&(p|=4),Jg(c,i,p,o)}var zu="_reactListening"+Math.random().toString(36).slice(2);function Sl(i){if(!i[zu]){i[zu]=!0,n.forEach(function(c){c!=="selectionchange"&&(XM.has(c)||cd(c,!1,i),cd(c,!0,i))});var o=i.nodeType===9?i:i.ownerDocument;o===null||o[zu]||(o[zu]=!0,cd("selectionchange",!1,o))}}function Jg(i,o,c,p){switch(Mg(o)){case 1:var y=sM;break;case 4:y=oM;break;default:y=Yf}c=y.bind(null,o,c,i),y=void 0,!zo||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(y=!0),p?y!==void 0?i.addEventListener(o,c,{capture:!0,passive:y}):i.addEventListener(o,c,!0):y!==void 0?i.addEventListener(o,c,{passive:y}):i.addEventListener(o,c,!1)}function fd(i,o,c,p,y){var E=p;if(!(o&1)&&!(o&2)&&p!==null)e:for(;;){if(p===null)return;var N=p.tag;if(N===3||N===4){var V=p.stateNode.containerInfo;if(V===y||V.nodeType===8&&V.parentNode===y)break;if(N===4)for(N=p.return;N!==null;){var W=N.tag;if((W===3||W===4)&&(W=N.stateNode.containerInfo,W===y||W.nodeType===8&&W.parentNode===y))return;N=N.return}for(;V!==null;){if(N=$s(V),N===null)return;if(W=N.tag,W===5||W===6){p=E=N;continue e}V=V.parentNode}}p=p.return}ti(function(){var ce=E,ve=j(c),xe=[];e:{var ge=$g.get(i);if(ge!==void 0){var Fe=Zf,Ve=i;switch(i){case"keypress":if(Nu(c)===0)break e;case"keydown":case"keyup":Fe=SM;break;case"focusin":Ve="focus",Fe=Jf;break;case"focusout":Ve="blur",Fe=Jf;break;case"beforeblur":case"afterblur":Fe=Jf;break;case"click":if(c.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Fe=wg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Fe=uM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Fe=TM;break;case Xg:case qg:case Yg:Fe=dM;break;case jg:Fe=CM;break;case"scroll":Fe=aM;break;case"wheel":Fe=RM;break;case"copy":case"cut":case"paste":Fe=pM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Fe=Ag}var Ge=(o&4)!==0,tn=!Ge&&i==="scroll",ie=Ge?ge!==null?ge+"Capture":null:ge;Ge=[];for(var Y=ce,oe;Y!==null;){oe=Y;var we=oe.stateNode;if(oe.tag===5&&we!==null&&(oe=we,ie!==null&&(we=qn(Y,ie),we!=null&&Ge.push(Ml(Y,we,oe)))),tn)break;Y=Y.return}0<Ge.length&&(ge=new Fe(ge,Ve,null,c,ve),xe.push({event:ge,listeners:Ge}))}}if(!(o&7)){e:{if(ge=i==="mouseover"||i==="pointerover",Fe=i==="mouseout"||i==="pointerout",ge&&c!==At&&(Ve=c.relatedTarget||c.fromElement)&&($s(Ve)||Ve[Rr]))break e;if((Fe||ge)&&(ge=ve.window===ve?ve:(ge=ve.ownerDocument)?ge.defaultView||ge.parentWindow:window,Fe?(Ve=c.relatedTarget||c.toElement,Fe=ce,Ve=Ve?$s(Ve):null,Ve!==null&&(tn=or(Ve),Ve!==tn||Ve.tag!==5&&Ve.tag!==6)&&(Ve=null)):(Fe=null,Ve=ce),Fe!==Ve)){if(Ge=wg,we="onMouseLeave",ie="onMouseEnter",Y="mouse",(i==="pointerout"||i==="pointerover")&&(Ge=Ag,we="onPointerLeave",ie="onPointerEnter",Y="pointer"),tn=Fe==null?ge:jo(Fe),oe=Ve==null?ge:jo(Ve),ge=new Ge(we,Y+"leave",Fe,c,ve),ge.target=tn,ge.relatedTarget=oe,we=null,$s(ve)===ce&&(Ge=new Ge(ie,Y+"enter",Ve,c,ve),Ge.target=oe,Ge.relatedTarget=tn,we=Ge),tn=we,Fe&&Ve)t:{for(Ge=Fe,ie=Ve,Y=0,oe=Ge;oe;oe=qo(oe))Y++;for(oe=0,we=ie;we;we=qo(we))oe++;for(;0<Y-oe;)Ge=qo(Ge),Y--;for(;0<oe-Y;)ie=qo(ie),oe--;for(;Y--;){if(Ge===ie||ie!==null&&Ge===ie.alternate)break t;Ge=qo(Ge),ie=qo(ie)}Ge=null}else Ge=null;Fe!==null&&e_(xe,ge,Fe,Ge,!1),Ve!==null&&tn!==null&&e_(xe,tn,Ve,Ge,!0)}}e:{if(ge=ce?jo(ce):window,Fe=ge.nodeName&&ge.nodeName.toLowerCase(),Fe==="select"||Fe==="input"&&ge.type==="file")var qe=FM;else if(Ng(ge))if(Fg)qe=zM;else{qe=OM;var Ke=UM}else(Fe=ge.nodeName)&&Fe.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(qe=kM);if(qe&&(qe=qe(i,ce))){Lg(xe,qe,c,ve);break e}Ke&&Ke(i,ge,ce),i==="focusout"&&(Ke=ge._wrapperState)&&Ke.controlled&&ge.type==="number"&&Rt(ge,"number",ge.value)}switch(Ke=ce?jo(ce):window,i){case"focusin":(Ng(Ke)||Ke.contentEditable==="true")&&(Wo=Ke,sd=ce,yl=null);break;case"focusout":yl=sd=Wo=null;break;case"mousedown":od=!0;break;case"contextmenu":case"mouseup":case"dragend":od=!1,Gg(xe,c,ve);break;case"selectionchange":if(HM)break;case"keydown":case"keyup":Gg(xe,c,ve)}var Qe;if(td)e:{switch(i){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else Go?Dg(i,c)&&(nt="onCompositionEnd"):i==="keydown"&&c.keyCode===229&&(nt="onCompositionStart");nt&&(Rg&&c.locale!=="ko"&&(Go||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&Go&&(Qe=Eg()):(cs=ve,$f="value"in cs?cs.value:cs.textContent,Go=!0)),Ke=Bu(ce,nt),0<Ke.length&&(nt=new Cg(nt,i,null,c,ve),xe.push({event:nt,listeners:Ke}),Qe?nt.data=Qe:(Qe=Ig(c),Qe!==null&&(nt.data=Qe)))),(Qe=PM?DM(i,c):IM(i,c))&&(ce=Bu(ce,"onBeforeInput"),0<ce.length&&(ve=new Cg("onBeforeInput","beforeinput",null,c,ve),xe.push({event:ve,listeners:ce}),ve.data=Qe))}Qg(xe,o)})}function Ml(i,o,c){return{instance:i,listener:o,currentTarget:c}}function Bu(i,o){for(var c=o+"Capture",p=[];i!==null;){var y=i,E=y.stateNode;y.tag===5&&E!==null&&(y=E,E=qn(i,c),E!=null&&p.unshift(Ml(i,E,y)),E=qn(i,o),E!=null&&p.push(Ml(i,E,y))),i=i.return}return p}function qo(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function e_(i,o,c,p,y){for(var E=o._reactName,N=[];c!==null&&c!==p;){var V=c,W=V.alternate,ce=V.stateNode;if(W!==null&&W===p)break;V.tag===5&&ce!==null&&(V=ce,y?(W=qn(c,E),W!=null&&N.unshift(Ml(c,W,V))):y||(W=qn(c,E),W!=null&&N.push(Ml(c,W,V)))),c=c.return}N.length!==0&&i.push({event:o,listeners:N})}var qM=/\r\n?/g,YM=/\u0000|\uFFFD/g;function t_(i){return(typeof i=="string"?i:""+i).replace(qM,`
`).replace(YM,"")}function Vu(i,o,c){if(o=t_(o),t_(i)!==o&&c)throw Error(t(425))}function Hu(){}var dd=null,hd=null;function pd(i,o){return i==="textarea"||i==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var md=typeof setTimeout=="function"?setTimeout:void 0,jM=typeof clearTimeout=="function"?clearTimeout:void 0,n_=typeof Promise=="function"?Promise:void 0,$M=typeof queueMicrotask=="function"?queueMicrotask:typeof n_<"u"?function(i){return n_.resolve(null).then(i).catch(ZM)}:md;function ZM(i){setTimeout(function(){throw i})}function gd(i,o){var c=o,p=0;do{var y=c.nextSibling;if(i.removeChild(c),y&&y.nodeType===8)if(c=y.data,c==="/$"){if(p===0){i.removeChild(y),dl(o);return}p--}else c!=="$"&&c!=="$?"&&c!=="$!"||p++;c=y}while(c);dl(o)}function ds(i){for(;i!=null;i=i.nextSibling){var o=i.nodeType;if(o===1||o===3)break;if(o===8){if(o=i.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return i}function i_(i){i=i.previousSibling;for(var o=0;i;){if(i.nodeType===8){var c=i.data;if(c==="$"||c==="$!"||c==="$?"){if(o===0)return i;o--}else c==="/$"&&o++}i=i.previousSibling}return null}var Yo=Math.random().toString(36).slice(2),lr="__reactFiber$"+Yo,El="__reactProps$"+Yo,Rr="__reactContainer$"+Yo,_d="__reactEvents$"+Yo,KM="__reactListeners$"+Yo,QM="__reactHandles$"+Yo;function $s(i){var o=i[lr];if(o)return o;for(var c=i.parentNode;c;){if(o=c[Rr]||c[lr]){if(c=o.alternate,o.child!==null||c!==null&&c.child!==null)for(i=i_(i);i!==null;){if(c=i[lr])return c;i=i_(i)}return o}i=c,c=i.parentNode}return null}function Tl(i){return i=i[lr]||i[Rr],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function jo(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Gu(i){return i[El]||null}var vd=[],$o=-1;function hs(i){return{current:i}}function kt(i){0>$o||(i.current=vd[$o],vd[$o]=null,$o--)}function Lt(i,o){$o++,vd[$o]=i.current,i.current=o}var ps={},Nn=hs(ps),ni=hs(!1),Zs=ps;function Zo(i,o){var c=i.type.contextTypes;if(!c)return ps;var p=i.stateNode;if(p&&p.__reactInternalMemoizedUnmaskedChildContext===o)return p.__reactInternalMemoizedMaskedChildContext;var y={},E;for(E in c)y[E]=o[E];return p&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=o,i.__reactInternalMemoizedMaskedChildContext=y),y}function ii(i){return i=i.childContextTypes,i!=null}function Wu(){kt(ni),kt(Nn)}function r_(i,o,c){if(Nn.current!==ps)throw Error(t(168));Lt(Nn,o),Lt(ni,c)}function s_(i,o,c){var p=i.stateNode;if(o=o.childContextTypes,typeof p.getChildContext!="function")return c;p=p.getChildContext();for(var y in p)if(!(y in o))throw Error(t(108,ye(i)||"Unknown",y));return ee({},c,p)}function Xu(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||ps,Zs=Nn.current,Lt(Nn,i),Lt(ni,ni.current),!0}function o_(i,o,c){var p=i.stateNode;if(!p)throw Error(t(169));c?(i=s_(i,o,Zs),p.__reactInternalMemoizedMergedChildContext=i,kt(ni),kt(Nn),Lt(Nn,i)):kt(ni),Lt(ni,c)}var br=null,qu=!1,yd=!1;function a_(i){br===null?br=[i]:br.push(i)}function JM(i){qu=!0,a_(i)}function ms(){if(!yd&&br!==null){yd=!0;var i=0,o=Mt;try{var c=br;for(Mt=1;i<c.length;i++){var p=c[i];do p=p(!0);while(p!==null)}br=null,qu=!1}catch(y){throw br!==null&&(br=br.slice(i+1)),Au(Se,ms),y}finally{Mt=o,yd=!1}}return null}var Ko=[],Qo=0,Yu=null,ju=0,Ii=[],Ni=0,Ks=null,Pr=1,Dr="";function Qs(i,o){Ko[Qo++]=ju,Ko[Qo++]=Yu,Yu=i,ju=o}function l_(i,o,c){Ii[Ni++]=Pr,Ii[Ni++]=Dr,Ii[Ni++]=Ks,Ks=i;var p=Pr;i=Dr;var y=32-st(p)-1;p&=~(1<<y),c+=1;var E=32-st(o)+y;if(30<E){var N=y-y%5;E=(p&(1<<N)-1).toString(32),p>>=N,y-=N,Pr=1<<32-st(o)+y|c<<y|p,Dr=E+i}else Pr=1<<E|c<<y|p,Dr=i}function xd(i){i.return!==null&&(Qs(i,1),l_(i,1,0))}function Sd(i){for(;i===Yu;)Yu=Ko[--Qo],Ko[Qo]=null,ju=Ko[--Qo],Ko[Qo]=null;for(;i===Ks;)Ks=Ii[--Ni],Ii[Ni]=null,Dr=Ii[--Ni],Ii[Ni]=null,Pr=Ii[--Ni],Ii[Ni]=null}var yi=null,xi=null,Bt=!1,qi=null;function u_(i,o){var c=Oi(5,null,null,0);c.elementType="DELETED",c.stateNode=o,c.return=i,o=i.deletions,o===null?(i.deletions=[c],i.flags|=16):o.push(c)}function c_(i,o){switch(i.tag){case 5:var c=i.type;return o=o.nodeType!==1||c.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(i.stateNode=o,yi=i,xi=ds(o.firstChild),!0):!1;case 6:return o=i.pendingProps===""||o.nodeType!==3?null:o,o!==null?(i.stateNode=o,yi=i,xi=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(c=Ks!==null?{id:Pr,overflow:Dr}:null,i.memoizedState={dehydrated:o,treeContext:c,retryLane:1073741824},c=Oi(18,null,null,0),c.stateNode=o,c.return=i,i.child=c,yi=i,xi=null,!0):!1;default:return!1}}function Md(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Ed(i){if(Bt){var o=xi;if(o){var c=o;if(!c_(i,o)){if(Md(i))throw Error(t(418));o=ds(c.nextSibling);var p=yi;o&&c_(i,o)?u_(p,c):(i.flags=i.flags&-4097|2,Bt=!1,yi=i)}}else{if(Md(i))throw Error(t(418));i.flags=i.flags&-4097|2,Bt=!1,yi=i}}}function f_(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;yi=i}function $u(i){if(i!==yi)return!1;if(!Bt)return f_(i),Bt=!0,!1;var o;if((o=i.tag!==3)&&!(o=i.tag!==5)&&(o=i.type,o=o!=="head"&&o!=="body"&&!pd(i.type,i.memoizedProps)),o&&(o=xi)){if(Md(i))throw d_(),Error(t(418));for(;o;)u_(i,o),o=ds(o.nextSibling)}if(f_(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,o=0;i;){if(i.nodeType===8){var c=i.data;if(c==="/$"){if(o===0){xi=ds(i.nextSibling);break e}o--}else c!=="$"&&c!=="$!"&&c!=="$?"||o++}i=i.nextSibling}xi=null}}else xi=yi?ds(i.stateNode.nextSibling):null;return!0}function d_(){for(var i=xi;i;)i=ds(i.nextSibling)}function Jo(){xi=yi=null,Bt=!1}function Td(i){qi===null?qi=[i]:qi.push(i)}var e1=T.ReactCurrentBatchConfig;function wl(i,o,c){if(i=c.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(c._owner){if(c=c._owner,c){if(c.tag!==1)throw Error(t(309));var p=c.stateNode}if(!p)throw Error(t(147,i));var y=p,E=""+i;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===E?o.ref:(o=function(N){var V=y.refs;N===null?delete V[E]:V[E]=N},o._stringRef=E,o)}if(typeof i!="string")throw Error(t(284));if(!c._owner)throw Error(t(290,i))}return i}function Zu(i,o){throw i=Object.prototype.toString.call(o),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":i))}function h_(i){var o=i._init;return o(i._payload)}function p_(i){function o(ie,Y){if(i){var oe=ie.deletions;oe===null?(ie.deletions=[Y],ie.flags|=16):oe.push(Y)}}function c(ie,Y){if(!i)return null;for(;Y!==null;)o(ie,Y),Y=Y.sibling;return null}function p(ie,Y){for(ie=new Map;Y!==null;)Y.key!==null?ie.set(Y.key,Y):ie.set(Y.index,Y),Y=Y.sibling;return ie}function y(ie,Y){return ie=Es(ie,Y),ie.index=0,ie.sibling=null,ie}function E(ie,Y,oe){return ie.index=oe,i?(oe=ie.alternate,oe!==null?(oe=oe.index,oe<Y?(ie.flags|=2,Y):oe):(ie.flags|=2,Y)):(ie.flags|=1048576,Y)}function N(ie){return i&&ie.alternate===null&&(ie.flags|=2),ie}function V(ie,Y,oe,we){return Y===null||Y.tag!==6?(Y=mh(oe,ie.mode,we),Y.return=ie,Y):(Y=y(Y,oe),Y.return=ie,Y)}function W(ie,Y,oe,we){var qe=oe.type;return qe===I?ve(ie,Y,oe.props.children,we,oe.key):Y!==null&&(Y.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===q&&h_(qe)===Y.type)?(we=y(Y,oe.props),we.ref=wl(ie,Y,oe),we.return=ie,we):(we=xc(oe.type,oe.key,oe.props,null,ie.mode,we),we.ref=wl(ie,Y,oe),we.return=ie,we)}function ce(ie,Y,oe,we){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==oe.containerInfo||Y.stateNode.implementation!==oe.implementation?(Y=gh(oe,ie.mode,we),Y.return=ie,Y):(Y=y(Y,oe.children||[]),Y.return=ie,Y)}function ve(ie,Y,oe,we,qe){return Y===null||Y.tag!==7?(Y=oo(oe,ie.mode,we,qe),Y.return=ie,Y):(Y=y(Y,oe),Y.return=ie,Y)}function xe(ie,Y,oe){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return Y=mh(""+Y,ie.mode,oe),Y.return=ie,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case C:return oe=xc(Y.type,Y.key,Y.props,null,ie.mode,oe),oe.ref=wl(ie,null,Y),oe.return=ie,oe;case P:return Y=gh(Y,ie.mode,oe),Y.return=ie,Y;case q:var we=Y._init;return xe(ie,we(Y._payload),oe)}if(We(Y)||J(Y))return Y=oo(Y,ie.mode,oe,null),Y.return=ie,Y;Zu(ie,Y)}return null}function ge(ie,Y,oe,we){var qe=Y!==null?Y.key:null;if(typeof oe=="string"&&oe!==""||typeof oe=="number")return qe!==null?null:V(ie,Y,""+oe,we);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case C:return oe.key===qe?W(ie,Y,oe,we):null;case P:return oe.key===qe?ce(ie,Y,oe,we):null;case q:return qe=oe._init,ge(ie,Y,qe(oe._payload),we)}if(We(oe)||J(oe))return qe!==null?null:ve(ie,Y,oe,we,null);Zu(ie,oe)}return null}function Fe(ie,Y,oe,we,qe){if(typeof we=="string"&&we!==""||typeof we=="number")return ie=ie.get(oe)||null,V(Y,ie,""+we,qe);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case C:return ie=ie.get(we.key===null?oe:we.key)||null,W(Y,ie,we,qe);case P:return ie=ie.get(we.key===null?oe:we.key)||null,ce(Y,ie,we,qe);case q:var Ke=we._init;return Fe(ie,Y,oe,Ke(we._payload),qe)}if(We(we)||J(we))return ie=ie.get(oe)||null,ve(Y,ie,we,qe,null);Zu(Y,we)}return null}function Ve(ie,Y,oe,we){for(var qe=null,Ke=null,Qe=Y,nt=Y=0,Mn=null;Qe!==null&&nt<oe.length;nt++){Qe.index>nt?(Mn=Qe,Qe=null):Mn=Qe.sibling;var wt=ge(ie,Qe,oe[nt],we);if(wt===null){Qe===null&&(Qe=Mn);break}i&&Qe&&wt.alternate===null&&o(ie,Qe),Y=E(wt,Y,nt),Ke===null?qe=wt:Ke.sibling=wt,Ke=wt,Qe=Mn}if(nt===oe.length)return c(ie,Qe),Bt&&Qs(ie,nt),qe;if(Qe===null){for(;nt<oe.length;nt++)Qe=xe(ie,oe[nt],we),Qe!==null&&(Y=E(Qe,Y,nt),Ke===null?qe=Qe:Ke.sibling=Qe,Ke=Qe);return Bt&&Qs(ie,nt),qe}for(Qe=p(ie,Qe);nt<oe.length;nt++)Mn=Fe(Qe,ie,nt,oe[nt],we),Mn!==null&&(i&&Mn.alternate!==null&&Qe.delete(Mn.key===null?nt:Mn.key),Y=E(Mn,Y,nt),Ke===null?qe=Mn:Ke.sibling=Mn,Ke=Mn);return i&&Qe.forEach(function(Ts){return o(ie,Ts)}),Bt&&Qs(ie,nt),qe}function Ge(ie,Y,oe,we){var qe=J(oe);if(typeof qe!="function")throw Error(t(150));if(oe=qe.call(oe),oe==null)throw Error(t(151));for(var Ke=qe=null,Qe=Y,nt=Y=0,Mn=null,wt=oe.next();Qe!==null&&!wt.done;nt++,wt=oe.next()){Qe.index>nt?(Mn=Qe,Qe=null):Mn=Qe.sibling;var Ts=ge(ie,Qe,wt.value,we);if(Ts===null){Qe===null&&(Qe=Mn);break}i&&Qe&&Ts.alternate===null&&o(ie,Qe),Y=E(Ts,Y,nt),Ke===null?qe=Ts:Ke.sibling=Ts,Ke=Ts,Qe=Mn}if(wt.done)return c(ie,Qe),Bt&&Qs(ie,nt),qe;if(Qe===null){for(;!wt.done;nt++,wt=oe.next())wt=xe(ie,wt.value,we),wt!==null&&(Y=E(wt,Y,nt),Ke===null?qe=wt:Ke.sibling=wt,Ke=wt);return Bt&&Qs(ie,nt),qe}for(Qe=p(ie,Qe);!wt.done;nt++,wt=oe.next())wt=Fe(Qe,ie,nt,wt.value,we),wt!==null&&(i&&wt.alternate!==null&&Qe.delete(wt.key===null?nt:wt.key),Y=E(wt,Y,nt),Ke===null?qe=wt:Ke.sibling=wt,Ke=wt);return i&&Qe.forEach(function(I1){return o(ie,I1)}),Bt&&Qs(ie,nt),qe}function tn(ie,Y,oe,we){if(typeof oe=="object"&&oe!==null&&oe.type===I&&oe.key===null&&(oe=oe.props.children),typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case C:e:{for(var qe=oe.key,Ke=Y;Ke!==null;){if(Ke.key===qe){if(qe=oe.type,qe===I){if(Ke.tag===7){c(ie,Ke.sibling),Y=y(Ke,oe.props.children),Y.return=ie,ie=Y;break e}}else if(Ke.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===q&&h_(qe)===Ke.type){c(ie,Ke.sibling),Y=y(Ke,oe.props),Y.ref=wl(ie,Ke,oe),Y.return=ie,ie=Y;break e}c(ie,Ke);break}else o(ie,Ke);Ke=Ke.sibling}oe.type===I?(Y=oo(oe.props.children,ie.mode,we,oe.key),Y.return=ie,ie=Y):(we=xc(oe.type,oe.key,oe.props,null,ie.mode,we),we.ref=wl(ie,Y,oe),we.return=ie,ie=we)}return N(ie);case P:e:{for(Ke=oe.key;Y!==null;){if(Y.key===Ke)if(Y.tag===4&&Y.stateNode.containerInfo===oe.containerInfo&&Y.stateNode.implementation===oe.implementation){c(ie,Y.sibling),Y=y(Y,oe.children||[]),Y.return=ie,ie=Y;break e}else{c(ie,Y);break}else o(ie,Y);Y=Y.sibling}Y=gh(oe,ie.mode,we),Y.return=ie,ie=Y}return N(ie);case q:return Ke=oe._init,tn(ie,Y,Ke(oe._payload),we)}if(We(oe))return Ve(ie,Y,oe,we);if(J(oe))return Ge(ie,Y,oe,we);Zu(ie,oe)}return typeof oe=="string"&&oe!==""||typeof oe=="number"?(oe=""+oe,Y!==null&&Y.tag===6?(c(ie,Y.sibling),Y=y(Y,oe),Y.return=ie,ie=Y):(c(ie,Y),Y=mh(oe,ie.mode,we),Y.return=ie,ie=Y),N(ie)):c(ie,Y)}return tn}var ea=p_(!0),m_=p_(!1),Ku=hs(null),Qu=null,ta=null,wd=null;function Cd(){wd=ta=Qu=null}function Ad(i){var o=Ku.current;kt(Ku),i._currentValue=o}function Rd(i,o,c){for(;i!==null;){var p=i.alternate;if((i.childLanes&o)!==o?(i.childLanes|=o,p!==null&&(p.childLanes|=o)):p!==null&&(p.childLanes&o)!==o&&(p.childLanes|=o),i===c)break;i=i.return}}function na(i,o){Qu=i,wd=ta=null,i=i.dependencies,i!==null&&i.firstContext!==null&&(i.lanes&o&&(ri=!0),i.firstContext=null)}function Li(i){var o=i._currentValue;if(wd!==i)if(i={context:i,memoizedValue:o,next:null},ta===null){if(Qu===null)throw Error(t(308));ta=i,Qu.dependencies={lanes:0,firstContext:i}}else ta=ta.next=i;return o}var Js=null;function bd(i){Js===null?Js=[i]:Js.push(i)}function g_(i,o,c,p){var y=o.interleaved;return y===null?(c.next=c,bd(o)):(c.next=y.next,y.next=c),o.interleaved=c,Ir(i,p)}function Ir(i,o){i.lanes|=o;var c=i.alternate;for(c!==null&&(c.lanes|=o),c=i,i=i.return;i!==null;)i.childLanes|=o,c=i.alternate,c!==null&&(c.childLanes|=o),c=i,i=i.return;return c.tag===3?c.stateNode:null}var gs=!1;function Pd(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function __(i,o){i=i.updateQueue,o.updateQueue===i&&(o.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Nr(i,o){return{eventTime:i,lane:o,tag:0,payload:null,callback:null,next:null}}function _s(i,o,c){var p=i.updateQueue;if(p===null)return null;if(p=p.shared,Et&2){var y=p.pending;return y===null?o.next=o:(o.next=y.next,y.next=o),p.pending=o,Ir(i,c)}return y=p.interleaved,y===null?(o.next=o,bd(p)):(o.next=y.next,y.next=o),p.interleaved=o,Ir(i,c)}function Ju(i,o,c){if(o=o.updateQueue,o!==null&&(o=o.shared,(c&4194240)!==0)){var p=o.lanes;p&=i.pendingLanes,c|=p,o.lanes=c,yn(i,c)}}function v_(i,o){var c=i.updateQueue,p=i.alternate;if(p!==null&&(p=p.updateQueue,c===p)){var y=null,E=null;if(c=c.firstBaseUpdate,c!==null){do{var N={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};E===null?y=E=N:E=E.next=N,c=c.next}while(c!==null);E===null?y=E=o:E=E.next=o}else y=E=o;c={baseState:p.baseState,firstBaseUpdate:y,lastBaseUpdate:E,shared:p.shared,effects:p.effects},i.updateQueue=c;return}i=c.lastBaseUpdate,i===null?c.firstBaseUpdate=o:i.next=o,c.lastBaseUpdate=o}function ec(i,o,c,p){var y=i.updateQueue;gs=!1;var E=y.firstBaseUpdate,N=y.lastBaseUpdate,V=y.shared.pending;if(V!==null){y.shared.pending=null;var W=V,ce=W.next;W.next=null,N===null?E=ce:N.next=ce,N=W;var ve=i.alternate;ve!==null&&(ve=ve.updateQueue,V=ve.lastBaseUpdate,V!==N&&(V===null?ve.firstBaseUpdate=ce:V.next=ce,ve.lastBaseUpdate=W))}if(E!==null){var xe=y.baseState;N=0,ve=ce=W=null,V=E;do{var ge=V.lane,Fe=V.eventTime;if((p&ge)===ge){ve!==null&&(ve=ve.next={eventTime:Fe,lane:0,tag:V.tag,payload:V.payload,callback:V.callback,next:null});e:{var Ve=i,Ge=V;switch(ge=o,Fe=c,Ge.tag){case 1:if(Ve=Ge.payload,typeof Ve=="function"){xe=Ve.call(Fe,xe,ge);break e}xe=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=Ge.payload,ge=typeof Ve=="function"?Ve.call(Fe,xe,ge):Ve,ge==null)break e;xe=ee({},xe,ge);break e;case 2:gs=!0}}V.callback!==null&&V.lane!==0&&(i.flags|=64,ge=y.effects,ge===null?y.effects=[V]:ge.push(V))}else Fe={eventTime:Fe,lane:ge,tag:V.tag,payload:V.payload,callback:V.callback,next:null},ve===null?(ce=ve=Fe,W=xe):ve=ve.next=Fe,N|=ge;if(V=V.next,V===null){if(V=y.shared.pending,V===null)break;ge=V,V=ge.next,ge.next=null,y.lastBaseUpdate=ge,y.shared.pending=null}}while(!0);if(ve===null&&(W=xe),y.baseState=W,y.firstBaseUpdate=ce,y.lastBaseUpdate=ve,o=y.shared.interleaved,o!==null){y=o;do N|=y.lane,y=y.next;while(y!==o)}else E===null&&(y.shared.lanes=0);no|=N,i.lanes=N,i.memoizedState=xe}}function y_(i,o,c){if(i=o.effects,o.effects=null,i!==null)for(o=0;o<i.length;o++){var p=i[o],y=p.callback;if(y!==null){if(p.callback=null,p=c,typeof y!="function")throw Error(t(191,y));y.call(p)}}}var Cl={},ur=hs(Cl),Al=hs(Cl),Rl=hs(Cl);function eo(i){if(i===Cl)throw Error(t(174));return i}function Dd(i,o){switch(Lt(Rl,o),Lt(Al,i),Lt(ur,Cl),i=o.nodeType,i){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:Xe(null,"");break;default:i=i===8?o.parentNode:o,o=i.namespaceURI||null,i=i.tagName,o=Xe(o,i)}kt(ur),Lt(ur,o)}function ia(){kt(ur),kt(Al),kt(Rl)}function x_(i){eo(Rl.current);var o=eo(ur.current),c=Xe(o,i.type);o!==c&&(Lt(Al,i),Lt(ur,c))}function Id(i){Al.current===i&&(kt(ur),kt(Al))}var Wt=hs(0);function tc(i){for(var o=i;o!==null;){if(o.tag===13){var c=o.memoizedState;if(c!==null&&(c=c.dehydrated,c===null||c.data==="$?"||c.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if(o.flags&128)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var Nd=[];function Ld(){for(var i=0;i<Nd.length;i++)Nd[i]._workInProgressVersionPrimary=null;Nd.length=0}var nc=T.ReactCurrentDispatcher,Fd=T.ReactCurrentBatchConfig,to=0,Xt=null,hn=null,xn=null,ic=!1,bl=!1,Pl=0,t1=0;function Ln(){throw Error(t(321))}function Ud(i,o){if(o===null)return!1;for(var c=0;c<o.length&&c<i.length;c++)if(!Xi(i[c],o[c]))return!1;return!0}function Od(i,o,c,p,y,E){if(to=E,Xt=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,nc.current=i===null||i.memoizedState===null?s1:o1,i=c(p,y),bl){E=0;do{if(bl=!1,Pl=0,25<=E)throw Error(t(301));E+=1,xn=hn=null,o.updateQueue=null,nc.current=a1,i=c(p,y)}while(bl)}if(nc.current=oc,o=hn!==null&&hn.next!==null,to=0,xn=hn=Xt=null,ic=!1,o)throw Error(t(300));return i}function kd(){var i=Pl!==0;return Pl=0,i}function cr(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xn===null?Xt.memoizedState=xn=i:xn=xn.next=i,xn}function Fi(){if(hn===null){var i=Xt.alternate;i=i!==null?i.memoizedState:null}else i=hn.next;var o=xn===null?Xt.memoizedState:xn.next;if(o!==null)xn=o,hn=i;else{if(i===null)throw Error(t(310));hn=i,i={memoizedState:hn.memoizedState,baseState:hn.baseState,baseQueue:hn.baseQueue,queue:hn.queue,next:null},xn===null?Xt.memoizedState=xn=i:xn=xn.next=i}return xn}function Dl(i,o){return typeof o=="function"?o(i):o}function zd(i){var o=Fi(),c=o.queue;if(c===null)throw Error(t(311));c.lastRenderedReducer=i;var p=hn,y=p.baseQueue,E=c.pending;if(E!==null){if(y!==null){var N=y.next;y.next=E.next,E.next=N}p.baseQueue=y=E,c.pending=null}if(y!==null){E=y.next,p=p.baseState;var V=N=null,W=null,ce=E;do{var ve=ce.lane;if((to&ve)===ve)W!==null&&(W=W.next={lane:0,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null}),p=ce.hasEagerState?ce.eagerState:i(p,ce.action);else{var xe={lane:ve,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null};W===null?(V=W=xe,N=p):W=W.next=xe,Xt.lanes|=ve,no|=ve}ce=ce.next}while(ce!==null&&ce!==E);W===null?N=p:W.next=V,Xi(p,o.memoizedState)||(ri=!0),o.memoizedState=p,o.baseState=N,o.baseQueue=W,c.lastRenderedState=p}if(i=c.interleaved,i!==null){y=i;do E=y.lane,Xt.lanes|=E,no|=E,y=y.next;while(y!==i)}else y===null&&(c.lanes=0);return[o.memoizedState,c.dispatch]}function Bd(i){var o=Fi(),c=o.queue;if(c===null)throw Error(t(311));c.lastRenderedReducer=i;var p=c.dispatch,y=c.pending,E=o.memoizedState;if(y!==null){c.pending=null;var N=y=y.next;do E=i(E,N.action),N=N.next;while(N!==y);Xi(E,o.memoizedState)||(ri=!0),o.memoizedState=E,o.baseQueue===null&&(o.baseState=E),c.lastRenderedState=E}return[E,p]}function S_(){}function M_(i,o){var c=Xt,p=Fi(),y=o(),E=!Xi(p.memoizedState,y);if(E&&(p.memoizedState=y,ri=!0),p=p.queue,Vd(w_.bind(null,c,p,i),[i]),p.getSnapshot!==o||E||xn!==null&&xn.memoizedState.tag&1){if(c.flags|=2048,Il(9,T_.bind(null,c,p,y,o),void 0,null),Sn===null)throw Error(t(349));to&30||E_(c,o,y)}return y}function E_(i,o,c){i.flags|=16384,i={getSnapshot:o,value:c},o=Xt.updateQueue,o===null?(o={lastEffect:null,stores:null},Xt.updateQueue=o,o.stores=[i]):(c=o.stores,c===null?o.stores=[i]:c.push(i))}function T_(i,o,c,p){o.value=c,o.getSnapshot=p,C_(o)&&A_(i)}function w_(i,o,c){return c(function(){C_(o)&&A_(i)})}function C_(i){var o=i.getSnapshot;i=i.value;try{var c=o();return!Xi(i,c)}catch{return!0}}function A_(i){var o=Ir(i,1);o!==null&&Zi(o,i,1,-1)}function R_(i){var o=cr();return typeof i=="function"&&(i=i()),o.memoizedState=o.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Dl,lastRenderedState:i},o.queue=i,i=i.dispatch=r1.bind(null,Xt,i),[o.memoizedState,i]}function Il(i,o,c,p){return i={tag:i,create:o,destroy:c,deps:p,next:null},o=Xt.updateQueue,o===null?(o={lastEffect:null,stores:null},Xt.updateQueue=o,o.lastEffect=i.next=i):(c=o.lastEffect,c===null?o.lastEffect=i.next=i:(p=c.next,c.next=i,i.next=p,o.lastEffect=i)),i}function b_(){return Fi().memoizedState}function rc(i,o,c,p){var y=cr();Xt.flags|=i,y.memoizedState=Il(1|o,c,void 0,p===void 0?null:p)}function sc(i,o,c,p){var y=Fi();p=p===void 0?null:p;var E=void 0;if(hn!==null){var N=hn.memoizedState;if(E=N.destroy,p!==null&&Ud(p,N.deps)){y.memoizedState=Il(o,c,E,p);return}}Xt.flags|=i,y.memoizedState=Il(1|o,c,E,p)}function P_(i,o){return rc(8390656,8,i,o)}function Vd(i,o){return sc(2048,8,i,o)}function D_(i,o){return sc(4,2,i,o)}function I_(i,o){return sc(4,4,i,o)}function N_(i,o){if(typeof o=="function")return i=i(),o(i),function(){o(null)};if(o!=null)return i=i(),o.current=i,function(){o.current=null}}function L_(i,o,c){return c=c!=null?c.concat([i]):null,sc(4,4,N_.bind(null,o,i),c)}function Hd(){}function F_(i,o){var c=Fi();o=o===void 0?null:o;var p=c.memoizedState;return p!==null&&o!==null&&Ud(o,p[1])?p[0]:(c.memoizedState=[i,o],i)}function U_(i,o){var c=Fi();o=o===void 0?null:o;var p=c.memoizedState;return p!==null&&o!==null&&Ud(o,p[1])?p[0]:(i=i(),c.memoizedState=[i,o],i)}function O_(i,o,c){return to&21?(Xi(c,o)||(c=Dt(),Xt.lanes|=c,no|=c,i.baseState=!0),o):(i.baseState&&(i.baseState=!1,ri=!0),i.memoizedState=c)}function n1(i,o){var c=Mt;Mt=c!==0&&4>c?c:4,i(!0);var p=Fd.transition;Fd.transition={};try{i(!1),o()}finally{Mt=c,Fd.transition=p}}function k_(){return Fi().memoizedState}function i1(i,o,c){var p=Ss(i);if(c={lane:p,action:c,hasEagerState:!1,eagerState:null,next:null},z_(i))B_(o,c);else if(c=g_(i,o,c,p),c!==null){var y=$n();Zi(c,i,p,y),V_(c,o,p)}}function r1(i,o,c){var p=Ss(i),y={lane:p,action:c,hasEagerState:!1,eagerState:null,next:null};if(z_(i))B_(o,y);else{var E=i.alternate;if(i.lanes===0&&(E===null||E.lanes===0)&&(E=o.lastRenderedReducer,E!==null))try{var N=o.lastRenderedState,V=E(N,c);if(y.hasEagerState=!0,y.eagerState=V,Xi(V,N)){var W=o.interleaved;W===null?(y.next=y,bd(o)):(y.next=W.next,W.next=y),o.interleaved=y;return}}catch{}finally{}c=g_(i,o,y,p),c!==null&&(y=$n(),Zi(c,i,p,y),V_(c,o,p))}}function z_(i){var o=i.alternate;return i===Xt||o!==null&&o===Xt}function B_(i,o){bl=ic=!0;var c=i.pending;c===null?o.next=o:(o.next=c.next,c.next=o),i.pending=o}function V_(i,o,c){if(c&4194240){var p=o.lanes;p&=i.pendingLanes,c|=p,o.lanes=c,yn(i,c)}}var oc={readContext:Li,useCallback:Ln,useContext:Ln,useEffect:Ln,useImperativeHandle:Ln,useInsertionEffect:Ln,useLayoutEffect:Ln,useMemo:Ln,useReducer:Ln,useRef:Ln,useState:Ln,useDebugValue:Ln,useDeferredValue:Ln,useTransition:Ln,useMutableSource:Ln,useSyncExternalStore:Ln,useId:Ln,unstable_isNewReconciler:!1},s1={readContext:Li,useCallback:function(i,o){return cr().memoizedState=[i,o===void 0?null:o],i},useContext:Li,useEffect:P_,useImperativeHandle:function(i,o,c){return c=c!=null?c.concat([i]):null,rc(4194308,4,N_.bind(null,o,i),c)},useLayoutEffect:function(i,o){return rc(4194308,4,i,o)},useInsertionEffect:function(i,o){return rc(4,2,i,o)},useMemo:function(i,o){var c=cr();return o=o===void 0?null:o,i=i(),c.memoizedState=[i,o],i},useReducer:function(i,o,c){var p=cr();return o=c!==void 0?c(o):o,p.memoizedState=p.baseState=o,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:o},p.queue=i,i=i.dispatch=i1.bind(null,Xt,i),[p.memoizedState,i]},useRef:function(i){var o=cr();return i={current:i},o.memoizedState=i},useState:R_,useDebugValue:Hd,useDeferredValue:function(i){return cr().memoizedState=i},useTransition:function(){var i=R_(!1),o=i[0];return i=n1.bind(null,i[1]),cr().memoizedState=i,[o,i]},useMutableSource:function(){},useSyncExternalStore:function(i,o,c){var p=Xt,y=cr();if(Bt){if(c===void 0)throw Error(t(407));c=c()}else{if(c=o(),Sn===null)throw Error(t(349));to&30||E_(p,o,c)}y.memoizedState=c;var E={value:c,getSnapshot:o};return y.queue=E,P_(w_.bind(null,p,E,i),[i]),p.flags|=2048,Il(9,T_.bind(null,p,E,c,o),void 0,null),c},useId:function(){var i=cr(),o=Sn.identifierPrefix;if(Bt){var c=Dr,p=Pr;c=(p&~(1<<32-st(p)-1)).toString(32)+c,o=":"+o+"R"+c,c=Pl++,0<c&&(o+="H"+c.toString(32)),o+=":"}else c=t1++,o=":"+o+"r"+c.toString(32)+":";return i.memoizedState=o},unstable_isNewReconciler:!1},o1={readContext:Li,useCallback:F_,useContext:Li,useEffect:Vd,useImperativeHandle:L_,useInsertionEffect:D_,useLayoutEffect:I_,useMemo:U_,useReducer:zd,useRef:b_,useState:function(){return zd(Dl)},useDebugValue:Hd,useDeferredValue:function(i){var o=Fi();return O_(o,hn.memoizedState,i)},useTransition:function(){var i=zd(Dl)[0],o=Fi().memoizedState;return[i,o]},useMutableSource:S_,useSyncExternalStore:M_,useId:k_,unstable_isNewReconciler:!1},a1={readContext:Li,useCallback:F_,useContext:Li,useEffect:Vd,useImperativeHandle:L_,useInsertionEffect:D_,useLayoutEffect:I_,useMemo:U_,useReducer:Bd,useRef:b_,useState:function(){return Bd(Dl)},useDebugValue:Hd,useDeferredValue:function(i){var o=Fi();return hn===null?o.memoizedState=i:O_(o,hn.memoizedState,i)},useTransition:function(){var i=Bd(Dl)[0],o=Fi().memoizedState;return[i,o]},useMutableSource:S_,useSyncExternalStore:M_,useId:k_,unstable_isNewReconciler:!1};function Yi(i,o){if(i&&i.defaultProps){o=ee({},o),i=i.defaultProps;for(var c in i)o[c]===void 0&&(o[c]=i[c]);return o}return o}function Gd(i,o,c,p){o=i.memoizedState,c=c(p,o),c=c==null?o:ee({},o,c),i.memoizedState=c,i.lanes===0&&(i.updateQueue.baseState=c)}var ac={isMounted:function(i){return(i=i._reactInternals)?or(i)===i:!1},enqueueSetState:function(i,o,c){i=i._reactInternals;var p=$n(),y=Ss(i),E=Nr(p,y);E.payload=o,c!=null&&(E.callback=c),o=_s(i,E,y),o!==null&&(Zi(o,i,y,p),Ju(o,i,y))},enqueueReplaceState:function(i,o,c){i=i._reactInternals;var p=$n(),y=Ss(i),E=Nr(p,y);E.tag=1,E.payload=o,c!=null&&(E.callback=c),o=_s(i,E,y),o!==null&&(Zi(o,i,y,p),Ju(o,i,y))},enqueueForceUpdate:function(i,o){i=i._reactInternals;var c=$n(),p=Ss(i),y=Nr(c,p);y.tag=2,o!=null&&(y.callback=o),o=_s(i,y,p),o!==null&&(Zi(o,i,p,c),Ju(o,i,p))}};function H_(i,o,c,p,y,E,N){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(p,E,N):o.prototype&&o.prototype.isPureReactComponent?!vl(c,p)||!vl(y,E):!0}function G_(i,o,c){var p=!1,y=ps,E=o.contextType;return typeof E=="object"&&E!==null?E=Li(E):(y=ii(o)?Zs:Nn.current,p=o.contextTypes,E=(p=p!=null)?Zo(i,y):ps),o=new o(c,E),i.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=ac,i.stateNode=o,o._reactInternals=i,p&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=y,i.__reactInternalMemoizedMaskedChildContext=E),o}function W_(i,o,c,p){i=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(c,p),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(c,p),o.state!==i&&ac.enqueueReplaceState(o,o.state,null)}function Wd(i,o,c,p){var y=i.stateNode;y.props=c,y.state=i.memoizedState,y.refs={},Pd(i);var E=o.contextType;typeof E=="object"&&E!==null?y.context=Li(E):(E=ii(o)?Zs:Nn.current,y.context=Zo(i,E)),y.state=i.memoizedState,E=o.getDerivedStateFromProps,typeof E=="function"&&(Gd(i,o,E,c),y.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof y.getSnapshotBeforeUpdate=="function"||typeof y.UNSAFE_componentWillMount!="function"&&typeof y.componentWillMount!="function"||(o=y.state,typeof y.componentWillMount=="function"&&y.componentWillMount(),typeof y.UNSAFE_componentWillMount=="function"&&y.UNSAFE_componentWillMount(),o!==y.state&&ac.enqueueReplaceState(y,y.state,null),ec(i,c,y,p),y.state=i.memoizedState),typeof y.componentDidMount=="function"&&(i.flags|=4194308)}function ra(i,o){try{var c="",p=o;do c+=le(p),p=p.return;while(p);var y=c}catch(E){y=`
Error generating stack: `+E.message+`
`+E.stack}return{value:i,source:o,stack:y,digest:null}}function Xd(i,o,c){return{value:i,source:null,stack:c??null,digest:o??null}}function qd(i,o){try{console.error(o.value)}catch(c){setTimeout(function(){throw c})}}var l1=typeof WeakMap=="function"?WeakMap:Map;function X_(i,o,c){c=Nr(-1,c),c.tag=3,c.payload={element:null};var p=o.value;return c.callback=function(){pc||(pc=!0,ah=p),qd(i,o)},c}function q_(i,o,c){c=Nr(-1,c),c.tag=3;var p=i.type.getDerivedStateFromError;if(typeof p=="function"){var y=o.value;c.payload=function(){return p(y)},c.callback=function(){qd(i,o)}}var E=i.stateNode;return E!==null&&typeof E.componentDidCatch=="function"&&(c.callback=function(){qd(i,o),typeof p!="function"&&(ys===null?ys=new Set([this]):ys.add(this));var N=o.stack;this.componentDidCatch(o.value,{componentStack:N!==null?N:""})}),c}function Y_(i,o,c){var p=i.pingCache;if(p===null){p=i.pingCache=new l1;var y=new Set;p.set(o,y)}else y=p.get(o),y===void 0&&(y=new Set,p.set(o,y));y.has(c)||(y.add(c),i=M1.bind(null,i,o,c),o.then(i,i))}function j_(i){do{var o;if((o=i.tag===13)&&(o=i.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return i;i=i.return}while(i!==null);return null}function $_(i,o,c,p,y){return i.mode&1?(i.flags|=65536,i.lanes=y,i):(i===o?i.flags|=65536:(i.flags|=128,c.flags|=131072,c.flags&=-52805,c.tag===1&&(c.alternate===null?c.tag=17:(o=Nr(-1,1),o.tag=2,_s(c,o,1))),c.lanes|=1),i)}var u1=T.ReactCurrentOwner,ri=!1;function jn(i,o,c,p){o.child=i===null?m_(o,null,c,p):ea(o,i.child,c,p)}function Z_(i,o,c,p,y){c=c.render;var E=o.ref;return na(o,y),p=Od(i,o,c,p,E,y),c=kd(),i!==null&&!ri?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~y,Lr(i,o,y)):(Bt&&c&&xd(o),o.flags|=1,jn(i,o,p,y),o.child)}function K_(i,o,c,p,y){if(i===null){var E=c.type;return typeof E=="function"&&!ph(E)&&E.defaultProps===void 0&&c.compare===null&&c.defaultProps===void 0?(o.tag=15,o.type=E,Q_(i,o,E,p,y)):(i=xc(c.type,null,p,o,o.mode,y),i.ref=o.ref,i.return=o,o.child=i)}if(E=i.child,!(i.lanes&y)){var N=E.memoizedProps;if(c=c.compare,c=c!==null?c:vl,c(N,p)&&i.ref===o.ref)return Lr(i,o,y)}return o.flags|=1,i=Es(E,p),i.ref=o.ref,i.return=o,o.child=i}function Q_(i,o,c,p,y){if(i!==null){var E=i.memoizedProps;if(vl(E,p)&&i.ref===o.ref)if(ri=!1,o.pendingProps=p=E,(i.lanes&y)!==0)i.flags&131072&&(ri=!0);else return o.lanes=i.lanes,Lr(i,o,y)}return Yd(i,o,c,p,y)}function J_(i,o,c){var p=o.pendingProps,y=p.children,E=i!==null?i.memoizedState:null;if(p.mode==="hidden")if(!(o.mode&1))o.memoizedState={baseLanes:0,cachePool:null,transitions:null},Lt(oa,Si),Si|=c;else{if(!(c&1073741824))return i=E!==null?E.baseLanes|c:c,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:i,cachePool:null,transitions:null},o.updateQueue=null,Lt(oa,Si),Si|=i,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},p=E!==null?E.baseLanes:c,Lt(oa,Si),Si|=p}else E!==null?(p=E.baseLanes|c,o.memoizedState=null):p=c,Lt(oa,Si),Si|=p;return jn(i,o,y,c),o.child}function e0(i,o){var c=o.ref;(i===null&&c!==null||i!==null&&i.ref!==c)&&(o.flags|=512,o.flags|=2097152)}function Yd(i,o,c,p,y){var E=ii(c)?Zs:Nn.current;return E=Zo(o,E),na(o,y),c=Od(i,o,c,p,E,y),p=kd(),i!==null&&!ri?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~y,Lr(i,o,y)):(Bt&&p&&xd(o),o.flags|=1,jn(i,o,c,y),o.child)}function t0(i,o,c,p,y){if(ii(c)){var E=!0;Xu(o)}else E=!1;if(na(o,y),o.stateNode===null)uc(i,o),G_(o,c,p),Wd(o,c,p,y),p=!0;else if(i===null){var N=o.stateNode,V=o.memoizedProps;N.props=V;var W=N.context,ce=c.contextType;typeof ce=="object"&&ce!==null?ce=Li(ce):(ce=ii(c)?Zs:Nn.current,ce=Zo(o,ce));var ve=c.getDerivedStateFromProps,xe=typeof ve=="function"||typeof N.getSnapshotBeforeUpdate=="function";xe||typeof N.UNSAFE_componentWillReceiveProps!="function"&&typeof N.componentWillReceiveProps!="function"||(V!==p||W!==ce)&&W_(o,N,p,ce),gs=!1;var ge=o.memoizedState;N.state=ge,ec(o,p,N,y),W=o.memoizedState,V!==p||ge!==W||ni.current||gs?(typeof ve=="function"&&(Gd(o,c,ve,p),W=o.memoizedState),(V=gs||H_(o,c,V,p,ge,W,ce))?(xe||typeof N.UNSAFE_componentWillMount!="function"&&typeof N.componentWillMount!="function"||(typeof N.componentWillMount=="function"&&N.componentWillMount(),typeof N.UNSAFE_componentWillMount=="function"&&N.UNSAFE_componentWillMount()),typeof N.componentDidMount=="function"&&(o.flags|=4194308)):(typeof N.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=p,o.memoizedState=W),N.props=p,N.state=W,N.context=ce,p=V):(typeof N.componentDidMount=="function"&&(o.flags|=4194308),p=!1)}else{N=o.stateNode,__(i,o),V=o.memoizedProps,ce=o.type===o.elementType?V:Yi(o.type,V),N.props=ce,xe=o.pendingProps,ge=N.context,W=c.contextType,typeof W=="object"&&W!==null?W=Li(W):(W=ii(c)?Zs:Nn.current,W=Zo(o,W));var Fe=c.getDerivedStateFromProps;(ve=typeof Fe=="function"||typeof N.getSnapshotBeforeUpdate=="function")||typeof N.UNSAFE_componentWillReceiveProps!="function"&&typeof N.componentWillReceiveProps!="function"||(V!==xe||ge!==W)&&W_(o,N,p,W),gs=!1,ge=o.memoizedState,N.state=ge,ec(o,p,N,y);var Ve=o.memoizedState;V!==xe||ge!==Ve||ni.current||gs?(typeof Fe=="function"&&(Gd(o,c,Fe,p),Ve=o.memoizedState),(ce=gs||H_(o,c,ce,p,ge,Ve,W)||!1)?(ve||typeof N.UNSAFE_componentWillUpdate!="function"&&typeof N.componentWillUpdate!="function"||(typeof N.componentWillUpdate=="function"&&N.componentWillUpdate(p,Ve,W),typeof N.UNSAFE_componentWillUpdate=="function"&&N.UNSAFE_componentWillUpdate(p,Ve,W)),typeof N.componentDidUpdate=="function"&&(o.flags|=4),typeof N.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof N.componentDidUpdate!="function"||V===i.memoizedProps&&ge===i.memoizedState||(o.flags|=4),typeof N.getSnapshotBeforeUpdate!="function"||V===i.memoizedProps&&ge===i.memoizedState||(o.flags|=1024),o.memoizedProps=p,o.memoizedState=Ve),N.props=p,N.state=Ve,N.context=W,p=ce):(typeof N.componentDidUpdate!="function"||V===i.memoizedProps&&ge===i.memoizedState||(o.flags|=4),typeof N.getSnapshotBeforeUpdate!="function"||V===i.memoizedProps&&ge===i.memoizedState||(o.flags|=1024),p=!1)}return jd(i,o,c,p,E,y)}function jd(i,o,c,p,y,E){e0(i,o);var N=(o.flags&128)!==0;if(!p&&!N)return y&&o_(o,c,!1),Lr(i,o,E);p=o.stateNode,u1.current=o;var V=N&&typeof c.getDerivedStateFromError!="function"?null:p.render();return o.flags|=1,i!==null&&N?(o.child=ea(o,i.child,null,E),o.child=ea(o,null,V,E)):jn(i,o,V,E),o.memoizedState=p.state,y&&o_(o,c,!0),o.child}function n0(i){var o=i.stateNode;o.pendingContext?r_(i,o.pendingContext,o.pendingContext!==o.context):o.context&&r_(i,o.context,!1),Dd(i,o.containerInfo)}function i0(i,o,c,p,y){return Jo(),Td(y),o.flags|=256,jn(i,o,c,p),o.child}var $d={dehydrated:null,treeContext:null,retryLane:0};function Zd(i){return{baseLanes:i,cachePool:null,transitions:null}}function r0(i,o,c){var p=o.pendingProps,y=Wt.current,E=!1,N=(o.flags&128)!==0,V;if((V=N)||(V=i!==null&&i.memoizedState===null?!1:(y&2)!==0),V?(E=!0,o.flags&=-129):(i===null||i.memoizedState!==null)&&(y|=1),Lt(Wt,y&1),i===null)return Ed(o),i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?(o.mode&1?i.data==="$!"?o.lanes=8:o.lanes=1073741824:o.lanes=1,null):(N=p.children,i=p.fallback,E?(p=o.mode,E=o.child,N={mode:"hidden",children:N},!(p&1)&&E!==null?(E.childLanes=0,E.pendingProps=N):E=Sc(N,p,0,null),i=oo(i,p,c,null),E.return=o,i.return=o,E.sibling=i,o.child=E,o.child.memoizedState=Zd(c),o.memoizedState=$d,i):Kd(o,N));if(y=i.memoizedState,y!==null&&(V=y.dehydrated,V!==null))return c1(i,o,N,p,V,y,c);if(E){E=p.fallback,N=o.mode,y=i.child,V=y.sibling;var W={mode:"hidden",children:p.children};return!(N&1)&&o.child!==y?(p=o.child,p.childLanes=0,p.pendingProps=W,o.deletions=null):(p=Es(y,W),p.subtreeFlags=y.subtreeFlags&14680064),V!==null?E=Es(V,E):(E=oo(E,N,c,null),E.flags|=2),E.return=o,p.return=o,p.sibling=E,o.child=p,p=E,E=o.child,N=i.child.memoizedState,N=N===null?Zd(c):{baseLanes:N.baseLanes|c,cachePool:null,transitions:N.transitions},E.memoizedState=N,E.childLanes=i.childLanes&~c,o.memoizedState=$d,p}return E=i.child,i=E.sibling,p=Es(E,{mode:"visible",children:p.children}),!(o.mode&1)&&(p.lanes=c),p.return=o,p.sibling=null,i!==null&&(c=o.deletions,c===null?(o.deletions=[i],o.flags|=16):c.push(i)),o.child=p,o.memoizedState=null,p}function Kd(i,o){return o=Sc({mode:"visible",children:o},i.mode,0,null),o.return=i,i.child=o}function lc(i,o,c,p){return p!==null&&Td(p),ea(o,i.child,null,c),i=Kd(o,o.pendingProps.children),i.flags|=2,o.memoizedState=null,i}function c1(i,o,c,p,y,E,N){if(c)return o.flags&256?(o.flags&=-257,p=Xd(Error(t(422))),lc(i,o,N,p)):o.memoizedState!==null?(o.child=i.child,o.flags|=128,null):(E=p.fallback,y=o.mode,p=Sc({mode:"visible",children:p.children},y,0,null),E=oo(E,y,N,null),E.flags|=2,p.return=o,E.return=o,p.sibling=E,o.child=p,o.mode&1&&ea(o,i.child,null,N),o.child.memoizedState=Zd(N),o.memoizedState=$d,E);if(!(o.mode&1))return lc(i,o,N,null);if(y.data==="$!"){if(p=y.nextSibling&&y.nextSibling.dataset,p)var V=p.dgst;return p=V,E=Error(t(419)),p=Xd(E,p,void 0),lc(i,o,N,p)}if(V=(N&i.childLanes)!==0,ri||V){if(p=Sn,p!==null){switch(N&-N){case 4:y=2;break;case 16:y=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:y=32;break;case 536870912:y=268435456;break;default:y=0}y=y&(p.suspendedLanes|N)?0:y,y!==0&&y!==E.retryLane&&(E.retryLane=y,Ir(i,y),Zi(p,i,y,-1))}return hh(),p=Xd(Error(t(421))),lc(i,o,N,p)}return y.data==="$?"?(o.flags|=128,o.child=i.child,o=E1.bind(null,i),y._reactRetry=o,null):(i=E.treeContext,xi=ds(y.nextSibling),yi=o,Bt=!0,qi=null,i!==null&&(Ii[Ni++]=Pr,Ii[Ni++]=Dr,Ii[Ni++]=Ks,Pr=i.id,Dr=i.overflow,Ks=o),o=Kd(o,p.children),o.flags|=4096,o)}function s0(i,o,c){i.lanes|=o;var p=i.alternate;p!==null&&(p.lanes|=o),Rd(i.return,o,c)}function Qd(i,o,c,p,y){var E=i.memoizedState;E===null?i.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:p,tail:c,tailMode:y}:(E.isBackwards=o,E.rendering=null,E.renderingStartTime=0,E.last=p,E.tail=c,E.tailMode=y)}function o0(i,o,c){var p=o.pendingProps,y=p.revealOrder,E=p.tail;if(jn(i,o,p.children,c),p=Wt.current,p&2)p=p&1|2,o.flags|=128;else{if(i!==null&&i.flags&128)e:for(i=o.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&s0(i,c,o);else if(i.tag===19)s0(i,c,o);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===o)break e;for(;i.sibling===null;){if(i.return===null||i.return===o)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}p&=1}if(Lt(Wt,p),!(o.mode&1))o.memoizedState=null;else switch(y){case"forwards":for(c=o.child,y=null;c!==null;)i=c.alternate,i!==null&&tc(i)===null&&(y=c),c=c.sibling;c=y,c===null?(y=o.child,o.child=null):(y=c.sibling,c.sibling=null),Qd(o,!1,y,c,E);break;case"backwards":for(c=null,y=o.child,o.child=null;y!==null;){if(i=y.alternate,i!==null&&tc(i)===null){o.child=y;break}i=y.sibling,y.sibling=c,c=y,y=i}Qd(o,!0,c,null,E);break;case"together":Qd(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function uc(i,o){!(o.mode&1)&&i!==null&&(i.alternate=null,o.alternate=null,o.flags|=2)}function Lr(i,o,c){if(i!==null&&(o.dependencies=i.dependencies),no|=o.lanes,!(c&o.childLanes))return null;if(i!==null&&o.child!==i.child)throw Error(t(153));if(o.child!==null){for(i=o.child,c=Es(i,i.pendingProps),o.child=c,c.return=o;i.sibling!==null;)i=i.sibling,c=c.sibling=Es(i,i.pendingProps),c.return=o;c.sibling=null}return o.child}function f1(i,o,c){switch(o.tag){case 3:n0(o),Jo();break;case 5:x_(o);break;case 1:ii(o.type)&&Xu(o);break;case 4:Dd(o,o.stateNode.containerInfo);break;case 10:var p=o.type._context,y=o.memoizedProps.value;Lt(Ku,p._currentValue),p._currentValue=y;break;case 13:if(p=o.memoizedState,p!==null)return p.dehydrated!==null?(Lt(Wt,Wt.current&1),o.flags|=128,null):c&o.child.childLanes?r0(i,o,c):(Lt(Wt,Wt.current&1),i=Lr(i,o,c),i!==null?i.sibling:null);Lt(Wt,Wt.current&1);break;case 19:if(p=(c&o.childLanes)!==0,i.flags&128){if(p)return o0(i,o,c);o.flags|=128}if(y=o.memoizedState,y!==null&&(y.rendering=null,y.tail=null,y.lastEffect=null),Lt(Wt,Wt.current),p)break;return null;case 22:case 23:return o.lanes=0,J_(i,o,c)}return Lr(i,o,c)}var a0,Jd,l0,u0;a0=function(i,o){for(var c=o.child;c!==null;){if(c.tag===5||c.tag===6)i.appendChild(c.stateNode);else if(c.tag!==4&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===o)break;for(;c.sibling===null;){if(c.return===null||c.return===o)return;c=c.return}c.sibling.return=c.return,c=c.sibling}},Jd=function(){},l0=function(i,o,c,p){var y=i.memoizedProps;if(y!==p){i=o.stateNode,eo(ur.current);var E=null;switch(c){case"input":y=X(i,y),p=X(i,p),E=[];break;case"select":y=ee({},y,{value:void 0}),p=ee({},p,{value:void 0}),E=[];break;case"textarea":y=L(i,y),p=L(i,p),E=[];break;default:typeof y.onClick!="function"&&typeof p.onClick=="function"&&(i.onclick=Hu)}ht(c,p);var N;c=null;for(ce in y)if(!p.hasOwnProperty(ce)&&y.hasOwnProperty(ce)&&y[ce]!=null)if(ce==="style"){var V=y[ce];for(N in V)V.hasOwnProperty(N)&&(c||(c={}),c[N]="")}else ce!=="dangerouslySetInnerHTML"&&ce!=="children"&&ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&ce!=="autoFocus"&&(s.hasOwnProperty(ce)?E||(E=[]):(E=E||[]).push(ce,null));for(ce in p){var W=p[ce];if(V=y!=null?y[ce]:void 0,p.hasOwnProperty(ce)&&W!==V&&(W!=null||V!=null))if(ce==="style")if(V){for(N in V)!V.hasOwnProperty(N)||W&&W.hasOwnProperty(N)||(c||(c={}),c[N]="");for(N in W)W.hasOwnProperty(N)&&V[N]!==W[N]&&(c||(c={}),c[N]=W[N])}else c||(E||(E=[]),E.push(ce,c)),c=W;else ce==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,V=V?V.__html:void 0,W!=null&&V!==W&&(E=E||[]).push(ce,W)):ce==="children"?typeof W!="string"&&typeof W!="number"||(E=E||[]).push(ce,""+W):ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&(s.hasOwnProperty(ce)?(W!=null&&ce==="onScroll"&&Ot("scroll",i),E||V===W||(E=[])):(E=E||[]).push(ce,W))}c&&(E=E||[]).push("style",c);var ce=E;(o.updateQueue=ce)&&(o.flags|=4)}},u0=function(i,o,c,p){c!==p&&(o.flags|=4)};function Nl(i,o){if(!Bt)switch(i.tailMode){case"hidden":o=i.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i.tail=null:c.sibling=null;break;case"collapsed":c=i.tail;for(var p=null;c!==null;)c.alternate!==null&&(p=c),c=c.sibling;p===null?o||i.tail===null?i.tail=null:i.tail.sibling=null:p.sibling=null}}function Fn(i){var o=i.alternate!==null&&i.alternate.child===i.child,c=0,p=0;if(o)for(var y=i.child;y!==null;)c|=y.lanes|y.childLanes,p|=y.subtreeFlags&14680064,p|=y.flags&14680064,y.return=i,y=y.sibling;else for(y=i.child;y!==null;)c|=y.lanes|y.childLanes,p|=y.subtreeFlags,p|=y.flags,y.return=i,y=y.sibling;return i.subtreeFlags|=p,i.childLanes=c,o}function d1(i,o,c){var p=o.pendingProps;switch(Sd(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fn(o),null;case 1:return ii(o.type)&&Wu(),Fn(o),null;case 3:return p=o.stateNode,ia(),kt(ni),kt(Nn),Ld(),p.pendingContext&&(p.context=p.pendingContext,p.pendingContext=null),(i===null||i.child===null)&&($u(o)?o.flags|=4:i===null||i.memoizedState.isDehydrated&&!(o.flags&256)||(o.flags|=1024,qi!==null&&(ch(qi),qi=null))),Jd(i,o),Fn(o),null;case 5:Id(o);var y=eo(Rl.current);if(c=o.type,i!==null&&o.stateNode!=null)l0(i,o,c,p,y),i.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!p){if(o.stateNode===null)throw Error(t(166));return Fn(o),null}if(i=eo(ur.current),$u(o)){p=o.stateNode,c=o.type;var E=o.memoizedProps;switch(p[lr]=o,p[El]=E,i=(o.mode&1)!==0,c){case"dialog":Ot("cancel",p),Ot("close",p);break;case"iframe":case"object":case"embed":Ot("load",p);break;case"video":case"audio":for(y=0;y<xl.length;y++)Ot(xl[y],p);break;case"source":Ot("error",p);break;case"img":case"image":case"link":Ot("error",p),Ot("load",p);break;case"details":Ot("toggle",p);break;case"input":Xn(p,E),Ot("invalid",p);break;case"select":p._wrapperState={wasMultiple:!!E.multiple},Ot("invalid",p);break;case"textarea":ae(p,E),Ot("invalid",p)}ht(c,E),y=null;for(var N in E)if(E.hasOwnProperty(N)){var V=E[N];N==="children"?typeof V=="string"?p.textContent!==V&&(E.suppressHydrationWarning!==!0&&Vu(p.textContent,V,i),y=["children",V]):typeof V=="number"&&p.textContent!==""+V&&(E.suppressHydrationWarning!==!0&&Vu(p.textContent,V,i),y=["children",""+V]):s.hasOwnProperty(N)&&V!=null&&N==="onScroll"&&Ot("scroll",p)}switch(c){case"input":Tt(p),Ye(p,E,!0);break;case"textarea":Tt(p),_e(p);break;case"select":case"option":break;default:typeof E.onClick=="function"&&(p.onclick=Hu)}p=y,o.updateQueue=p,p!==null&&(o.flags|=4)}else{N=y.nodeType===9?y:y.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=he(c)),i==="http://www.w3.org/1999/xhtml"?c==="script"?(i=N.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof p.is=="string"?i=N.createElement(c,{is:p.is}):(i=N.createElement(c),c==="select"&&(N=i,p.multiple?N.multiple=!0:p.size&&(N.size=p.size))):i=N.createElementNS(i,c),i[lr]=o,i[El]=p,a0(i,o,!1,!1),o.stateNode=i;e:{switch(N=it(c,p),c){case"dialog":Ot("cancel",i),Ot("close",i),y=p;break;case"iframe":case"object":case"embed":Ot("load",i),y=p;break;case"video":case"audio":for(y=0;y<xl.length;y++)Ot(xl[y],i);y=p;break;case"source":Ot("error",i),y=p;break;case"img":case"image":case"link":Ot("error",i),Ot("load",i),y=p;break;case"details":Ot("toggle",i),y=p;break;case"input":Xn(i,p),y=X(i,p),Ot("invalid",i);break;case"option":y=p;break;case"select":i._wrapperState={wasMultiple:!!p.multiple},y=ee({},p,{value:void 0}),Ot("invalid",i);break;case"textarea":ae(i,p),y=L(i,p),Ot("invalid",i);break;default:y=p}ht(c,y),V=y;for(E in V)if(V.hasOwnProperty(E)){var W=V[E];E==="style"?et(i,W):E==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,W!=null&&Ue(i,W)):E==="children"?typeof W=="string"?(c!=="textarea"||W!=="")&&ct(i,W):typeof W=="number"&&ct(i,""+W):E!=="suppressContentEditableWarning"&&E!=="suppressHydrationWarning"&&E!=="autoFocus"&&(s.hasOwnProperty(E)?W!=null&&E==="onScroll"&&Ot("scroll",i):W!=null&&w(i,E,W,N))}switch(c){case"input":Tt(i),Ye(i,p,!1);break;case"textarea":Tt(i),_e(i);break;case"option":p.value!=null&&i.setAttribute("value",""+de(p.value));break;case"select":i.multiple=!!p.multiple,E=p.value,E!=null?k(i,!!p.multiple,E,!1):p.defaultValue!=null&&k(i,!!p.multiple,p.defaultValue,!0);break;default:typeof y.onClick=="function"&&(i.onclick=Hu)}switch(c){case"button":case"input":case"select":case"textarea":p=!!p.autoFocus;break e;case"img":p=!0;break e;default:p=!1}}p&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return Fn(o),null;case 6:if(i&&o.stateNode!=null)u0(i,o,i.memoizedProps,p);else{if(typeof p!="string"&&o.stateNode===null)throw Error(t(166));if(c=eo(Rl.current),eo(ur.current),$u(o)){if(p=o.stateNode,c=o.memoizedProps,p[lr]=o,(E=p.nodeValue!==c)&&(i=yi,i!==null))switch(i.tag){case 3:Vu(p.nodeValue,c,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Vu(p.nodeValue,c,(i.mode&1)!==0)}E&&(o.flags|=4)}else p=(c.nodeType===9?c:c.ownerDocument).createTextNode(p),p[lr]=o,o.stateNode=p}return Fn(o),null;case 13:if(kt(Wt),p=o.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Bt&&xi!==null&&o.mode&1&&!(o.flags&128))d_(),Jo(),o.flags|=98560,E=!1;else if(E=$u(o),p!==null&&p.dehydrated!==null){if(i===null){if(!E)throw Error(t(318));if(E=o.memoizedState,E=E!==null?E.dehydrated:null,!E)throw Error(t(317));E[lr]=o}else Jo(),!(o.flags&128)&&(o.memoizedState=null),o.flags|=4;Fn(o),E=!1}else qi!==null&&(ch(qi),qi=null),E=!0;if(!E)return o.flags&65536?o:null}return o.flags&128?(o.lanes=c,o):(p=p!==null,p!==(i!==null&&i.memoizedState!==null)&&p&&(o.child.flags|=8192,o.mode&1&&(i===null||Wt.current&1?pn===0&&(pn=3):hh())),o.updateQueue!==null&&(o.flags|=4),Fn(o),null);case 4:return ia(),Jd(i,o),i===null&&Sl(o.stateNode.containerInfo),Fn(o),null;case 10:return Ad(o.type._context),Fn(o),null;case 17:return ii(o.type)&&Wu(),Fn(o),null;case 19:if(kt(Wt),E=o.memoizedState,E===null)return Fn(o),null;if(p=(o.flags&128)!==0,N=E.rendering,N===null)if(p)Nl(E,!1);else{if(pn!==0||i!==null&&i.flags&128)for(i=o.child;i!==null;){if(N=tc(i),N!==null){for(o.flags|=128,Nl(E,!1),p=N.updateQueue,p!==null&&(o.updateQueue=p,o.flags|=4),o.subtreeFlags=0,p=c,c=o.child;c!==null;)E=c,i=p,E.flags&=14680066,N=E.alternate,N===null?(E.childLanes=0,E.lanes=i,E.child=null,E.subtreeFlags=0,E.memoizedProps=null,E.memoizedState=null,E.updateQueue=null,E.dependencies=null,E.stateNode=null):(E.childLanes=N.childLanes,E.lanes=N.lanes,E.child=N.child,E.subtreeFlags=0,E.deletions=null,E.memoizedProps=N.memoizedProps,E.memoizedState=N.memoizedState,E.updateQueue=N.updateQueue,E.type=N.type,i=N.dependencies,E.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),c=c.sibling;return Lt(Wt,Wt.current&1|2),o.child}i=i.sibling}E.tail!==null&&re()>aa&&(o.flags|=128,p=!0,Nl(E,!1),o.lanes=4194304)}else{if(!p)if(i=tc(N),i!==null){if(o.flags|=128,p=!0,c=i.updateQueue,c!==null&&(o.updateQueue=c,o.flags|=4),Nl(E,!0),E.tail===null&&E.tailMode==="hidden"&&!N.alternate&&!Bt)return Fn(o),null}else 2*re()-E.renderingStartTime>aa&&c!==1073741824&&(o.flags|=128,p=!0,Nl(E,!1),o.lanes=4194304);E.isBackwards?(N.sibling=o.child,o.child=N):(c=E.last,c!==null?c.sibling=N:o.child=N,E.last=N)}return E.tail!==null?(o=E.tail,E.rendering=o,E.tail=o.sibling,E.renderingStartTime=re(),o.sibling=null,c=Wt.current,Lt(Wt,p?c&1|2:c&1),o):(Fn(o),null);case 22:case 23:return dh(),p=o.memoizedState!==null,i!==null&&i.memoizedState!==null!==p&&(o.flags|=8192),p&&o.mode&1?Si&1073741824&&(Fn(o),o.subtreeFlags&6&&(o.flags|=8192)):Fn(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function h1(i,o){switch(Sd(o),o.tag){case 1:return ii(o.type)&&Wu(),i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 3:return ia(),kt(ni),kt(Nn),Ld(),i=o.flags,i&65536&&!(i&128)?(o.flags=i&-65537|128,o):null;case 5:return Id(o),null;case 13:if(kt(Wt),i=o.memoizedState,i!==null&&i.dehydrated!==null){if(o.alternate===null)throw Error(t(340));Jo()}return i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 19:return kt(Wt),null;case 4:return ia(),null;case 10:return Ad(o.type._context),null;case 22:case 23:return dh(),null;case 24:return null;default:return null}}var cc=!1,Un=!1,p1=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function sa(i,o){var c=i.ref;if(c!==null)if(typeof c=="function")try{c(null)}catch(p){Kt(i,o,p)}else c.current=null}function eh(i,o,c){try{c()}catch(p){Kt(i,o,p)}}var c0=!1;function m1(i,o){if(dd=Pu,i=Hg(),rd(i)){if("selectionStart"in i)var c={start:i.selectionStart,end:i.selectionEnd};else e:{c=(c=i.ownerDocument)&&c.defaultView||window;var p=c.getSelection&&c.getSelection();if(p&&p.rangeCount!==0){c=p.anchorNode;var y=p.anchorOffset,E=p.focusNode;p=p.focusOffset;try{c.nodeType,E.nodeType}catch{c=null;break e}var N=0,V=-1,W=-1,ce=0,ve=0,xe=i,ge=null;t:for(;;){for(var Fe;xe!==c||y!==0&&xe.nodeType!==3||(V=N+y),xe!==E||p!==0&&xe.nodeType!==3||(W=N+p),xe.nodeType===3&&(N+=xe.nodeValue.length),(Fe=xe.firstChild)!==null;)ge=xe,xe=Fe;for(;;){if(xe===i)break t;if(ge===c&&++ce===y&&(V=N),ge===E&&++ve===p&&(W=N),(Fe=xe.nextSibling)!==null)break;xe=ge,ge=xe.parentNode}xe=Fe}c=V===-1||W===-1?null:{start:V,end:W}}else c=null}c=c||{start:0,end:0}}else c=null;for(hd={focusedElem:i,selectionRange:c},Pu=!1,Oe=o;Oe!==null;)if(o=Oe,i=o.child,(o.subtreeFlags&1028)!==0&&i!==null)i.return=o,Oe=i;else for(;Oe!==null;){o=Oe;try{var Ve=o.alternate;if(o.flags&1024)switch(o.tag){case 0:case 11:case 15:break;case 1:if(Ve!==null){var Ge=Ve.memoizedProps,tn=Ve.memoizedState,ie=o.stateNode,Y=ie.getSnapshotBeforeUpdate(o.elementType===o.type?Ge:Yi(o.type,Ge),tn);ie.__reactInternalSnapshotBeforeUpdate=Y}break;case 3:var oe=o.stateNode.containerInfo;oe.nodeType===1?oe.textContent="":oe.nodeType===9&&oe.documentElement&&oe.removeChild(oe.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){Kt(o,o.return,we)}if(i=o.sibling,i!==null){i.return=o.return,Oe=i;break}Oe=o.return}return Ve=c0,c0=!1,Ve}function Ll(i,o,c){var p=o.updateQueue;if(p=p!==null?p.lastEffect:null,p!==null){var y=p=p.next;do{if((y.tag&i)===i){var E=y.destroy;y.destroy=void 0,E!==void 0&&eh(o,c,E)}y=y.next}while(y!==p)}}function fc(i,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var c=o=o.next;do{if((c.tag&i)===i){var p=c.create;c.destroy=p()}c=c.next}while(c!==o)}}function th(i){var o=i.ref;if(o!==null){var c=i.stateNode;switch(i.tag){case 5:i=c;break;default:i=c}typeof o=="function"?o(i):o.current=i}}function f0(i){var o=i.alternate;o!==null&&(i.alternate=null,f0(o)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(o=i.stateNode,o!==null&&(delete o[lr],delete o[El],delete o[_d],delete o[KM],delete o[QM])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function d0(i){return i.tag===5||i.tag===3||i.tag===4}function h0(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||d0(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function nh(i,o,c){var p=i.tag;if(p===5||p===6)i=i.stateNode,o?c.nodeType===8?c.parentNode.insertBefore(i,o):c.insertBefore(i,o):(c.nodeType===8?(o=c.parentNode,o.insertBefore(i,c)):(o=c,o.appendChild(i)),c=c._reactRootContainer,c!=null||o.onclick!==null||(o.onclick=Hu));else if(p!==4&&(i=i.child,i!==null))for(nh(i,o,c),i=i.sibling;i!==null;)nh(i,o,c),i=i.sibling}function ih(i,o,c){var p=i.tag;if(p===5||p===6)i=i.stateNode,o?c.insertBefore(i,o):c.appendChild(i);else if(p!==4&&(i=i.child,i!==null))for(ih(i,o,c),i=i.sibling;i!==null;)ih(i,o,c),i=i.sibling}var Rn=null,ji=!1;function vs(i,o,c){for(c=c.child;c!==null;)p0(i,o,c),c=c.sibling}function p0(i,o,c){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(Je,c)}catch{}switch(c.tag){case 5:Un||sa(c,o);case 6:var p=Rn,y=ji;Rn=null,vs(i,o,c),Rn=p,ji=y,Rn!==null&&(ji?(i=Rn,c=c.stateNode,i.nodeType===8?i.parentNode.removeChild(c):i.removeChild(c)):Rn.removeChild(c.stateNode));break;case 18:Rn!==null&&(ji?(i=Rn,c=c.stateNode,i.nodeType===8?gd(i.parentNode,c):i.nodeType===1&&gd(i,c),dl(i)):gd(Rn,c.stateNode));break;case 4:p=Rn,y=ji,Rn=c.stateNode.containerInfo,ji=!0,vs(i,o,c),Rn=p,ji=y;break;case 0:case 11:case 14:case 15:if(!Un&&(p=c.updateQueue,p!==null&&(p=p.lastEffect,p!==null))){y=p=p.next;do{var E=y,N=E.destroy;E=E.tag,N!==void 0&&(E&2||E&4)&&eh(c,o,N),y=y.next}while(y!==p)}vs(i,o,c);break;case 1:if(!Un&&(sa(c,o),p=c.stateNode,typeof p.componentWillUnmount=="function"))try{p.props=c.memoizedProps,p.state=c.memoizedState,p.componentWillUnmount()}catch(V){Kt(c,o,V)}vs(i,o,c);break;case 21:vs(i,o,c);break;case 22:c.mode&1?(Un=(p=Un)||c.memoizedState!==null,vs(i,o,c),Un=p):vs(i,o,c);break;default:vs(i,o,c)}}function m0(i){var o=i.updateQueue;if(o!==null){i.updateQueue=null;var c=i.stateNode;c===null&&(c=i.stateNode=new p1),o.forEach(function(p){var y=T1.bind(null,i,p);c.has(p)||(c.add(p),p.then(y,y))})}}function $i(i,o){var c=o.deletions;if(c!==null)for(var p=0;p<c.length;p++){var y=c[p];try{var E=i,N=o,V=N;e:for(;V!==null;){switch(V.tag){case 5:Rn=V.stateNode,ji=!1;break e;case 3:Rn=V.stateNode.containerInfo,ji=!0;break e;case 4:Rn=V.stateNode.containerInfo,ji=!0;break e}V=V.return}if(Rn===null)throw Error(t(160));p0(E,N,y),Rn=null,ji=!1;var W=y.alternate;W!==null&&(W.return=null),y.return=null}catch(ce){Kt(y,o,ce)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)g0(o,i),o=o.sibling}function g0(i,o){var c=i.alternate,p=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if($i(o,i),fr(i),p&4){try{Ll(3,i,i.return),fc(3,i)}catch(Ge){Kt(i,i.return,Ge)}try{Ll(5,i,i.return)}catch(Ge){Kt(i,i.return,Ge)}}break;case 1:$i(o,i),fr(i),p&512&&c!==null&&sa(c,c.return);break;case 5:if($i(o,i),fr(i),p&512&&c!==null&&sa(c,c.return),i.flags&32){var y=i.stateNode;try{ct(y,"")}catch(Ge){Kt(i,i.return,Ge)}}if(p&4&&(y=i.stateNode,y!=null)){var E=i.memoizedProps,N=c!==null?c.memoizedProps:E,V=i.type,W=i.updateQueue;if(i.updateQueue=null,W!==null)try{V==="input"&&E.type==="radio"&&E.name!=null&&mt(y,E),it(V,N);var ce=it(V,E);for(N=0;N<W.length;N+=2){var ve=W[N],xe=W[N+1];ve==="style"?et(y,xe):ve==="dangerouslySetInnerHTML"?Ue(y,xe):ve==="children"?ct(y,xe):w(y,ve,xe,ce)}switch(V){case"input":dt(y,E);break;case"textarea":me(y,E);break;case"select":var ge=y._wrapperState.wasMultiple;y._wrapperState.wasMultiple=!!E.multiple;var Fe=E.value;Fe!=null?k(y,!!E.multiple,Fe,!1):ge!==!!E.multiple&&(E.defaultValue!=null?k(y,!!E.multiple,E.defaultValue,!0):k(y,!!E.multiple,E.multiple?[]:"",!1))}y[El]=E}catch(Ge){Kt(i,i.return,Ge)}}break;case 6:if($i(o,i),fr(i),p&4){if(i.stateNode===null)throw Error(t(162));y=i.stateNode,E=i.memoizedProps;try{y.nodeValue=E}catch(Ge){Kt(i,i.return,Ge)}}break;case 3:if($i(o,i),fr(i),p&4&&c!==null&&c.memoizedState.isDehydrated)try{dl(o.containerInfo)}catch(Ge){Kt(i,i.return,Ge)}break;case 4:$i(o,i),fr(i);break;case 13:$i(o,i),fr(i),y=i.child,y.flags&8192&&(E=y.memoizedState!==null,y.stateNode.isHidden=E,!E||y.alternate!==null&&y.alternate.memoizedState!==null||(oh=re())),p&4&&m0(i);break;case 22:if(ve=c!==null&&c.memoizedState!==null,i.mode&1?(Un=(ce=Un)||ve,$i(o,i),Un=ce):$i(o,i),fr(i),p&8192){if(ce=i.memoizedState!==null,(i.stateNode.isHidden=ce)&&!ve&&i.mode&1)for(Oe=i,ve=i.child;ve!==null;){for(xe=Oe=ve;Oe!==null;){switch(ge=Oe,Fe=ge.child,ge.tag){case 0:case 11:case 14:case 15:Ll(4,ge,ge.return);break;case 1:sa(ge,ge.return);var Ve=ge.stateNode;if(typeof Ve.componentWillUnmount=="function"){p=ge,c=ge.return;try{o=p,Ve.props=o.memoizedProps,Ve.state=o.memoizedState,Ve.componentWillUnmount()}catch(Ge){Kt(p,c,Ge)}}break;case 5:sa(ge,ge.return);break;case 22:if(ge.memoizedState!==null){y0(xe);continue}}Fe!==null?(Fe.return=ge,Oe=Fe):y0(xe)}ve=ve.sibling}e:for(ve=null,xe=i;;){if(xe.tag===5){if(ve===null){ve=xe;try{y=xe.stateNode,ce?(E=y.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none"):(V=xe.stateNode,W=xe.memoizedProps.style,N=W!=null&&W.hasOwnProperty("display")?W.display:null,V.style.display=Ze("display",N))}catch(Ge){Kt(i,i.return,Ge)}}}else if(xe.tag===6){if(ve===null)try{xe.stateNode.nodeValue=ce?"":xe.memoizedProps}catch(Ge){Kt(i,i.return,Ge)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===i)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===i)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===i)break e;ve===xe&&(ve=null),xe=xe.return}ve===xe&&(ve=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:$i(o,i),fr(i),p&4&&m0(i);break;case 21:break;default:$i(o,i),fr(i)}}function fr(i){var o=i.flags;if(o&2){try{e:{for(var c=i.return;c!==null;){if(d0(c)){var p=c;break e}c=c.return}throw Error(t(160))}switch(p.tag){case 5:var y=p.stateNode;p.flags&32&&(ct(y,""),p.flags&=-33);var E=h0(i);ih(i,E,y);break;case 3:case 4:var N=p.stateNode.containerInfo,V=h0(i);nh(i,V,N);break;default:throw Error(t(161))}}catch(W){Kt(i,i.return,W)}i.flags&=-3}o&4096&&(i.flags&=-4097)}function g1(i,o,c){Oe=i,_0(i)}function _0(i,o,c){for(var p=(i.mode&1)!==0;Oe!==null;){var y=Oe,E=y.child;if(y.tag===22&&p){var N=y.memoizedState!==null||cc;if(!N){var V=y.alternate,W=V!==null&&V.memoizedState!==null||Un;V=cc;var ce=Un;if(cc=N,(Un=W)&&!ce)for(Oe=y;Oe!==null;)N=Oe,W=N.child,N.tag===22&&N.memoizedState!==null?x0(y):W!==null?(W.return=N,Oe=W):x0(y);for(;E!==null;)Oe=E,_0(E),E=E.sibling;Oe=y,cc=V,Un=ce}v0(i)}else y.subtreeFlags&8772&&E!==null?(E.return=y,Oe=E):v0(i)}}function v0(i){for(;Oe!==null;){var o=Oe;if(o.flags&8772){var c=o.alternate;try{if(o.flags&8772)switch(o.tag){case 0:case 11:case 15:Un||fc(5,o);break;case 1:var p=o.stateNode;if(o.flags&4&&!Un)if(c===null)p.componentDidMount();else{var y=o.elementType===o.type?c.memoizedProps:Yi(o.type,c.memoizedProps);p.componentDidUpdate(y,c.memoizedState,p.__reactInternalSnapshotBeforeUpdate)}var E=o.updateQueue;E!==null&&y_(o,E,p);break;case 3:var N=o.updateQueue;if(N!==null){if(c=null,o.child!==null)switch(o.child.tag){case 5:c=o.child.stateNode;break;case 1:c=o.child.stateNode}y_(o,N,c)}break;case 5:var V=o.stateNode;if(c===null&&o.flags&4){c=V;var W=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":W.autoFocus&&c.focus();break;case"img":W.src&&(c.src=W.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var ce=o.alternate;if(ce!==null){var ve=ce.memoizedState;if(ve!==null){var xe=ve.dehydrated;xe!==null&&dl(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Un||o.flags&512&&th(o)}catch(ge){Kt(o,o.return,ge)}}if(o===i){Oe=null;break}if(c=o.sibling,c!==null){c.return=o.return,Oe=c;break}Oe=o.return}}function y0(i){for(;Oe!==null;){var o=Oe;if(o===i){Oe=null;break}var c=o.sibling;if(c!==null){c.return=o.return,Oe=c;break}Oe=o.return}}function x0(i){for(;Oe!==null;){var o=Oe;try{switch(o.tag){case 0:case 11:case 15:var c=o.return;try{fc(4,o)}catch(W){Kt(o,c,W)}break;case 1:var p=o.stateNode;if(typeof p.componentDidMount=="function"){var y=o.return;try{p.componentDidMount()}catch(W){Kt(o,y,W)}}var E=o.return;try{th(o)}catch(W){Kt(o,E,W)}break;case 5:var N=o.return;try{th(o)}catch(W){Kt(o,N,W)}}}catch(W){Kt(o,o.return,W)}if(o===i){Oe=null;break}var V=o.sibling;if(V!==null){V.return=o.return,Oe=V;break}Oe=o.return}}var _1=Math.ceil,dc=T.ReactCurrentDispatcher,rh=T.ReactCurrentOwner,Ui=T.ReactCurrentBatchConfig,Et=0,Sn=null,an=null,bn=0,Si=0,oa=hs(0),pn=0,Fl=null,no=0,hc=0,sh=0,Ul=null,si=null,oh=0,aa=1/0,Fr=null,pc=!1,ah=null,ys=null,mc=!1,xs=null,gc=0,Ol=0,lh=null,_c=-1,vc=0;function $n(){return Et&6?re():_c!==-1?_c:_c=re()}function Ss(i){return i.mode&1?Et&2&&bn!==0?bn&-bn:e1.transition!==null?(vc===0&&(vc=Dt()),vc):(i=Mt,i!==0||(i=window.event,i=i===void 0?16:Mg(i.type)),i):1}function Zi(i,o,c,p){if(50<Ol)throw Ol=0,lh=null,Error(t(185));vn(i,c,p),(!(Et&2)||i!==Sn)&&(i===Sn&&(!(Et&2)&&(hc|=c),pn===4&&Ms(i,bn)),oi(i,p),c===1&&Et===0&&!(o.mode&1)&&(aa=re()+500,qu&&ms()))}function oi(i,o){var c=i.callbackNode;Yn(i,o);var p=Dn(i,i===Sn?bn:0);if(p===0)c!==null&&U(c),i.callbackNode=null,i.callbackPriority=0;else if(o=p&-p,i.callbackPriority!==o){if(c!=null&&U(c),o===1)i.tag===0?JM(M0.bind(null,i)):a_(M0.bind(null,i)),$M(function(){!(Et&6)&&ms()}),c=null;else{switch(ar(p)){case 1:c=Se;break;case 4:c=be;break;case 16:c=Le;break;case 536870912:c=tt;break;default:c=Le}c=P0(c,S0.bind(null,i))}i.callbackPriority=o,i.callbackNode=c}}function S0(i,o){if(_c=-1,vc=0,Et&6)throw Error(t(327));var c=i.callbackNode;if(la()&&i.callbackNode!==c)return null;var p=Dn(i,i===Sn?bn:0);if(p===0)return null;if(p&30||p&i.expiredLanes||o)o=yc(i,p);else{o=p;var y=Et;Et|=2;var E=T0();(Sn!==i||bn!==o)&&(Fr=null,aa=re()+500,ro(i,o));do try{x1();break}catch(V){E0(i,V)}while(!0);Cd(),dc.current=E,Et=y,an!==null?o=0:(Sn=null,bn=0,o=pn)}if(o!==0){if(o===2&&(y=Ar(i),y!==0&&(p=y,o=uh(i,y))),o===1)throw c=Fl,ro(i,0),Ms(i,p),oi(i,re()),c;if(o===6)Ms(i,p);else{if(y=i.current.alternate,!(p&30)&&!v1(y)&&(o=yc(i,p),o===2&&(E=Ar(i),E!==0&&(p=E,o=uh(i,E))),o===1))throw c=Fl,ro(i,0),Ms(i,p),oi(i,re()),c;switch(i.finishedWork=y,i.finishedLanes=p,o){case 0:case 1:throw Error(t(345));case 2:so(i,si,Fr);break;case 3:if(Ms(i,p),(p&130023424)===p&&(o=oh+500-re(),10<o)){if(Dn(i,0)!==0)break;if(y=i.suspendedLanes,(y&p)!==p){$n(),i.pingedLanes|=i.suspendedLanes&y;break}i.timeoutHandle=md(so.bind(null,i,si,Fr),o);break}so(i,si,Fr);break;case 4:if(Ms(i,p),(p&4194240)===p)break;for(o=i.eventTimes,y=-1;0<p;){var N=31-st(p);E=1<<N,N=o[N],N>y&&(y=N),p&=~E}if(p=y,p=re()-p,p=(120>p?120:480>p?480:1080>p?1080:1920>p?1920:3e3>p?3e3:4320>p?4320:1960*_1(p/1960))-p,10<p){i.timeoutHandle=md(so.bind(null,i,si,Fr),p);break}so(i,si,Fr);break;case 5:so(i,si,Fr);break;default:throw Error(t(329))}}}return oi(i,re()),i.callbackNode===c?S0.bind(null,i):null}function uh(i,o){var c=Ul;return i.current.memoizedState.isDehydrated&&(ro(i,o).flags|=256),i=yc(i,o),i!==2&&(o=si,si=c,o!==null&&ch(o)),i}function ch(i){si===null?si=i:si.push.apply(si,i)}function v1(i){for(var o=i;;){if(o.flags&16384){var c=o.updateQueue;if(c!==null&&(c=c.stores,c!==null))for(var p=0;p<c.length;p++){var y=c[p],E=y.getSnapshot;y=y.value;try{if(!Xi(E(),y))return!1}catch{return!1}}}if(c=o.child,o.subtreeFlags&16384&&c!==null)c.return=o,o=c;else{if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function Ms(i,o){for(o&=~sh,o&=~hc,i.suspendedLanes|=o,i.pingedLanes&=~o,i=i.expirationTimes;0<o;){var c=31-st(o),p=1<<c;i[c]=-1,o&=~p}}function M0(i){if(Et&6)throw Error(t(327));la();var o=Dn(i,0);if(!(o&1))return oi(i,re()),null;var c=yc(i,o);if(i.tag!==0&&c===2){var p=Ar(i);p!==0&&(o=p,c=uh(i,p))}if(c===1)throw c=Fl,ro(i,0),Ms(i,o),oi(i,re()),c;if(c===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=o,so(i,si,Fr),oi(i,re()),null}function fh(i,o){var c=Et;Et|=1;try{return i(o)}finally{Et=c,Et===0&&(aa=re()+500,qu&&ms())}}function io(i){xs!==null&&xs.tag===0&&!(Et&6)&&la();var o=Et;Et|=1;var c=Ui.transition,p=Mt;try{if(Ui.transition=null,Mt=1,i)return i()}finally{Mt=p,Ui.transition=c,Et=o,!(Et&6)&&ms()}}function dh(){Si=oa.current,kt(oa)}function ro(i,o){i.finishedWork=null,i.finishedLanes=0;var c=i.timeoutHandle;if(c!==-1&&(i.timeoutHandle=-1,jM(c)),an!==null)for(c=an.return;c!==null;){var p=c;switch(Sd(p),p.tag){case 1:p=p.type.childContextTypes,p!=null&&Wu();break;case 3:ia(),kt(ni),kt(Nn),Ld();break;case 5:Id(p);break;case 4:ia();break;case 13:kt(Wt);break;case 19:kt(Wt);break;case 10:Ad(p.type._context);break;case 22:case 23:dh()}c=c.return}if(Sn=i,an=i=Es(i.current,null),bn=Si=o,pn=0,Fl=null,sh=hc=no=0,si=Ul=null,Js!==null){for(o=0;o<Js.length;o++)if(c=Js[o],p=c.interleaved,p!==null){c.interleaved=null;var y=p.next,E=c.pending;if(E!==null){var N=E.next;E.next=y,p.next=N}c.pending=p}Js=null}return i}function E0(i,o){do{var c=an;try{if(Cd(),nc.current=oc,ic){for(var p=Xt.memoizedState;p!==null;){var y=p.queue;y!==null&&(y.pending=null),p=p.next}ic=!1}if(to=0,xn=hn=Xt=null,bl=!1,Pl=0,rh.current=null,c===null||c.return===null){pn=1,Fl=o,an=null;break}e:{var E=i,N=c.return,V=c,W=o;if(o=bn,V.flags|=32768,W!==null&&typeof W=="object"&&typeof W.then=="function"){var ce=W,ve=V,xe=ve.tag;if(!(ve.mode&1)&&(xe===0||xe===11||xe===15)){var ge=ve.alternate;ge?(ve.updateQueue=ge.updateQueue,ve.memoizedState=ge.memoizedState,ve.lanes=ge.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Fe=j_(N);if(Fe!==null){Fe.flags&=-257,$_(Fe,N,V,E,o),Fe.mode&1&&Y_(E,ce,o),o=Fe,W=ce;var Ve=o.updateQueue;if(Ve===null){var Ge=new Set;Ge.add(W),o.updateQueue=Ge}else Ve.add(W);break e}else{if(!(o&1)){Y_(E,ce,o),hh();break e}W=Error(t(426))}}else if(Bt&&V.mode&1){var tn=j_(N);if(tn!==null){!(tn.flags&65536)&&(tn.flags|=256),$_(tn,N,V,E,o),Td(ra(W,V));break e}}E=W=ra(W,V),pn!==4&&(pn=2),Ul===null?Ul=[E]:Ul.push(E),E=N;do{switch(E.tag){case 3:E.flags|=65536,o&=-o,E.lanes|=o;var ie=X_(E,W,o);v_(E,ie);break e;case 1:V=W;var Y=E.type,oe=E.stateNode;if(!(E.flags&128)&&(typeof Y.getDerivedStateFromError=="function"||oe!==null&&typeof oe.componentDidCatch=="function"&&(ys===null||!ys.has(oe)))){E.flags|=65536,o&=-o,E.lanes|=o;var we=q_(E,V,o);v_(E,we);break e}}E=E.return}while(E!==null)}C0(c)}catch(qe){o=qe,an===c&&c!==null&&(an=c=c.return);continue}break}while(!0)}function T0(){var i=dc.current;return dc.current=oc,i===null?oc:i}function hh(){(pn===0||pn===3||pn===2)&&(pn=4),Sn===null||!(no&268435455)&&!(hc&268435455)||Ms(Sn,bn)}function yc(i,o){var c=Et;Et|=2;var p=T0();(Sn!==i||bn!==o)&&(Fr=null,ro(i,o));do try{y1();break}catch(y){E0(i,y)}while(!0);if(Cd(),Et=c,dc.current=p,an!==null)throw Error(t(261));return Sn=null,bn=0,pn}function y1(){for(;an!==null;)w0(an)}function x1(){for(;an!==null&&!K();)w0(an)}function w0(i){var o=b0(i.alternate,i,Si);i.memoizedProps=i.pendingProps,o===null?C0(i):an=o,rh.current=null}function C0(i){var o=i;do{var c=o.alternate;if(i=o.return,o.flags&32768){if(c=h1(c,o),c!==null){c.flags&=32767,an=c;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{pn=6,an=null;return}}else if(c=d1(c,o,Si),c!==null){an=c;return}if(o=o.sibling,o!==null){an=o;return}an=o=i}while(o!==null);pn===0&&(pn=5)}function so(i,o,c){var p=Mt,y=Ui.transition;try{Ui.transition=null,Mt=1,S1(i,o,c,p)}finally{Ui.transition=y,Mt=p}return null}function S1(i,o,c,p){do la();while(xs!==null);if(Et&6)throw Error(t(327));c=i.finishedWork;var y=i.finishedLanes;if(c===null)return null;if(i.finishedWork=null,i.finishedLanes=0,c===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var E=c.lanes|c.childLanes;if(An(i,E),i===Sn&&(an=Sn=null,bn=0),!(c.subtreeFlags&2064)&&!(c.flags&2064)||mc||(mc=!0,P0(Le,function(){return la(),null})),E=(c.flags&15990)!==0,c.subtreeFlags&15990||E){E=Ui.transition,Ui.transition=null;var N=Mt;Mt=1;var V=Et;Et|=4,rh.current=null,m1(i,c),g0(c,i),VM(hd),Pu=!!dd,hd=dd=null,i.current=c,g1(c),ue(),Et=V,Mt=N,Ui.transition=E}else i.current=c;if(mc&&(mc=!1,xs=i,gc=y),E=i.pendingLanes,E===0&&(ys=null),vt(c.stateNode),oi(i,re()),o!==null)for(p=i.onRecoverableError,c=0;c<o.length;c++)y=o[c],p(y.value,{componentStack:y.stack,digest:y.digest});if(pc)throw pc=!1,i=ah,ah=null,i;return gc&1&&i.tag!==0&&la(),E=i.pendingLanes,E&1?i===lh?Ol++:(Ol=0,lh=i):Ol=0,ms(),null}function la(){if(xs!==null){var i=ar(gc),o=Ui.transition,c=Mt;try{if(Ui.transition=null,Mt=16>i?16:i,xs===null)var p=!1;else{if(i=xs,xs=null,gc=0,Et&6)throw Error(t(331));var y=Et;for(Et|=4,Oe=i.current;Oe!==null;){var E=Oe,N=E.child;if(Oe.flags&16){var V=E.deletions;if(V!==null){for(var W=0;W<V.length;W++){var ce=V[W];for(Oe=ce;Oe!==null;){var ve=Oe;switch(ve.tag){case 0:case 11:case 15:Ll(8,ve,E)}var xe=ve.child;if(xe!==null)xe.return=ve,Oe=xe;else for(;Oe!==null;){ve=Oe;var ge=ve.sibling,Fe=ve.return;if(f0(ve),ve===ce){Oe=null;break}if(ge!==null){ge.return=Fe,Oe=ge;break}Oe=Fe}}}var Ve=E.alternate;if(Ve!==null){var Ge=Ve.child;if(Ge!==null){Ve.child=null;do{var tn=Ge.sibling;Ge.sibling=null,Ge=tn}while(Ge!==null)}}Oe=E}}if(E.subtreeFlags&2064&&N!==null)N.return=E,Oe=N;else e:for(;Oe!==null;){if(E=Oe,E.flags&2048)switch(E.tag){case 0:case 11:case 15:Ll(9,E,E.return)}var ie=E.sibling;if(ie!==null){ie.return=E.return,Oe=ie;break e}Oe=E.return}}var Y=i.current;for(Oe=Y;Oe!==null;){N=Oe;var oe=N.child;if(N.subtreeFlags&2064&&oe!==null)oe.return=N,Oe=oe;else e:for(N=Y;Oe!==null;){if(V=Oe,V.flags&2048)try{switch(V.tag){case 0:case 11:case 15:fc(9,V)}}catch(qe){Kt(V,V.return,qe)}if(V===N){Oe=null;break e}var we=V.sibling;if(we!==null){we.return=V.return,Oe=we;break e}Oe=V.return}}if(Et=y,ms(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(Je,i)}catch{}p=!0}return p}finally{Mt=c,Ui.transition=o}}return!1}function A0(i,o,c){o=ra(c,o),o=X_(i,o,1),i=_s(i,o,1),o=$n(),i!==null&&(vn(i,1,o),oi(i,o))}function Kt(i,o,c){if(i.tag===3)A0(i,i,c);else for(;o!==null;){if(o.tag===3){A0(o,i,c);break}else if(o.tag===1){var p=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof p.componentDidCatch=="function"&&(ys===null||!ys.has(p))){i=ra(c,i),i=q_(o,i,1),o=_s(o,i,1),i=$n(),o!==null&&(vn(o,1,i),oi(o,i));break}}o=o.return}}function M1(i,o,c){var p=i.pingCache;p!==null&&p.delete(o),o=$n(),i.pingedLanes|=i.suspendedLanes&c,Sn===i&&(bn&c)===c&&(pn===4||pn===3&&(bn&130023424)===bn&&500>re()-oh?ro(i,0):sh|=c),oi(i,o)}function R0(i,o){o===0&&(i.mode&1?(o=Zt,Zt<<=1,!(Zt&130023424)&&(Zt=4194304)):o=1);var c=$n();i=Ir(i,o),i!==null&&(vn(i,o,c),oi(i,c))}function E1(i){var o=i.memoizedState,c=0;o!==null&&(c=o.retryLane),R0(i,c)}function T1(i,o){var c=0;switch(i.tag){case 13:var p=i.stateNode,y=i.memoizedState;y!==null&&(c=y.retryLane);break;case 19:p=i.stateNode;break;default:throw Error(t(314))}p!==null&&p.delete(o),R0(i,c)}var b0;b0=function(i,o,c){if(i!==null)if(i.memoizedProps!==o.pendingProps||ni.current)ri=!0;else{if(!(i.lanes&c)&&!(o.flags&128))return ri=!1,f1(i,o,c);ri=!!(i.flags&131072)}else ri=!1,Bt&&o.flags&1048576&&l_(o,ju,o.index);switch(o.lanes=0,o.tag){case 2:var p=o.type;uc(i,o),i=o.pendingProps;var y=Zo(o,Nn.current);na(o,c),y=Od(null,o,p,i,y,c);var E=kd();return o.flags|=1,typeof y=="object"&&y!==null&&typeof y.render=="function"&&y.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,ii(p)?(E=!0,Xu(o)):E=!1,o.memoizedState=y.state!==null&&y.state!==void 0?y.state:null,Pd(o),y.updater=ac,o.stateNode=y,y._reactInternals=o,Wd(o,p,i,c),o=jd(null,o,p,!0,E,c)):(o.tag=0,Bt&&E&&xd(o),jn(null,o,y,c),o=o.child),o;case 16:p=o.elementType;e:{switch(uc(i,o),i=o.pendingProps,y=p._init,p=y(p._payload),o.type=p,y=o.tag=C1(p),i=Yi(p,i),y){case 0:o=Yd(null,o,p,i,c);break e;case 1:o=t0(null,o,p,i,c);break e;case 11:o=Z_(null,o,p,i,c);break e;case 14:o=K_(null,o,p,Yi(p.type,i),c);break e}throw Error(t(306,p,""))}return o;case 0:return p=o.type,y=o.pendingProps,y=o.elementType===p?y:Yi(p,y),Yd(i,o,p,y,c);case 1:return p=o.type,y=o.pendingProps,y=o.elementType===p?y:Yi(p,y),t0(i,o,p,y,c);case 3:e:{if(n0(o),i===null)throw Error(t(387));p=o.pendingProps,E=o.memoizedState,y=E.element,__(i,o),ec(o,p,null,c);var N=o.memoizedState;if(p=N.element,E.isDehydrated)if(E={element:p,isDehydrated:!1,cache:N.cache,pendingSuspenseBoundaries:N.pendingSuspenseBoundaries,transitions:N.transitions},o.updateQueue.baseState=E,o.memoizedState=E,o.flags&256){y=ra(Error(t(423)),o),o=i0(i,o,p,c,y);break e}else if(p!==y){y=ra(Error(t(424)),o),o=i0(i,o,p,c,y);break e}else for(xi=ds(o.stateNode.containerInfo.firstChild),yi=o,Bt=!0,qi=null,c=m_(o,null,p,c),o.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{if(Jo(),p===y){o=Lr(i,o,c);break e}jn(i,o,p,c)}o=o.child}return o;case 5:return x_(o),i===null&&Ed(o),p=o.type,y=o.pendingProps,E=i!==null?i.memoizedProps:null,N=y.children,pd(p,y)?N=null:E!==null&&pd(p,E)&&(o.flags|=32),e0(i,o),jn(i,o,N,c),o.child;case 6:return i===null&&Ed(o),null;case 13:return r0(i,o,c);case 4:return Dd(o,o.stateNode.containerInfo),p=o.pendingProps,i===null?o.child=ea(o,null,p,c):jn(i,o,p,c),o.child;case 11:return p=o.type,y=o.pendingProps,y=o.elementType===p?y:Yi(p,y),Z_(i,o,p,y,c);case 7:return jn(i,o,o.pendingProps,c),o.child;case 8:return jn(i,o,o.pendingProps.children,c),o.child;case 12:return jn(i,o,o.pendingProps.children,c),o.child;case 10:e:{if(p=o.type._context,y=o.pendingProps,E=o.memoizedProps,N=y.value,Lt(Ku,p._currentValue),p._currentValue=N,E!==null)if(Xi(E.value,N)){if(E.children===y.children&&!ni.current){o=Lr(i,o,c);break e}}else for(E=o.child,E!==null&&(E.return=o);E!==null;){var V=E.dependencies;if(V!==null){N=E.child;for(var W=V.firstContext;W!==null;){if(W.context===p){if(E.tag===1){W=Nr(-1,c&-c),W.tag=2;var ce=E.updateQueue;if(ce!==null){ce=ce.shared;var ve=ce.pending;ve===null?W.next=W:(W.next=ve.next,ve.next=W),ce.pending=W}}E.lanes|=c,W=E.alternate,W!==null&&(W.lanes|=c),Rd(E.return,c,o),V.lanes|=c;break}W=W.next}}else if(E.tag===10)N=E.type===o.type?null:E.child;else if(E.tag===18){if(N=E.return,N===null)throw Error(t(341));N.lanes|=c,V=N.alternate,V!==null&&(V.lanes|=c),Rd(N,c,o),N=E.sibling}else N=E.child;if(N!==null)N.return=E;else for(N=E;N!==null;){if(N===o){N=null;break}if(E=N.sibling,E!==null){E.return=N.return,N=E;break}N=N.return}E=N}jn(i,o,y.children,c),o=o.child}return o;case 9:return y=o.type,p=o.pendingProps.children,na(o,c),y=Li(y),p=p(y),o.flags|=1,jn(i,o,p,c),o.child;case 14:return p=o.type,y=Yi(p,o.pendingProps),y=Yi(p.type,y),K_(i,o,p,y,c);case 15:return Q_(i,o,o.type,o.pendingProps,c);case 17:return p=o.type,y=o.pendingProps,y=o.elementType===p?y:Yi(p,y),uc(i,o),o.tag=1,ii(p)?(i=!0,Xu(o)):i=!1,na(o,c),G_(o,p,y),Wd(o,p,y,c),jd(null,o,p,!0,i,c);case 19:return o0(i,o,c);case 22:return J_(i,o,c)}throw Error(t(156,o.tag))};function P0(i,o){return Au(i,o)}function w1(i,o,c,p){this.tag=i,this.key=c,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=p,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Oi(i,o,c,p){return new w1(i,o,c,p)}function ph(i){return i=i.prototype,!(!i||!i.isReactComponent)}function C1(i){if(typeof i=="function")return ph(i)?1:0;if(i!=null){if(i=i.$$typeof,i===O)return 11;if(i===Z)return 14}return 2}function Es(i,o){var c=i.alternate;return c===null?(c=Oi(i.tag,o,i.key,i.mode),c.elementType=i.elementType,c.type=i.type,c.stateNode=i.stateNode,c.alternate=i,i.alternate=c):(c.pendingProps=o,c.type=i.type,c.flags=0,c.subtreeFlags=0,c.deletions=null),c.flags=i.flags&14680064,c.childLanes=i.childLanes,c.lanes=i.lanes,c.child=i.child,c.memoizedProps=i.memoizedProps,c.memoizedState=i.memoizedState,c.updateQueue=i.updateQueue,o=i.dependencies,c.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},c.sibling=i.sibling,c.index=i.index,c.ref=i.ref,c}function xc(i,o,c,p,y,E){var N=2;if(p=i,typeof i=="function")ph(i)&&(N=1);else if(typeof i=="string")N=5;else e:switch(i){case I:return oo(c.children,y,E,o);case D:N=8,y|=8;break;case A:return i=Oi(12,c,o,y|2),i.elementType=A,i.lanes=E,i;case B:return i=Oi(13,c,o,y),i.elementType=B,i.lanes=E,i;case G:return i=Oi(19,c,o,y),i.elementType=G,i.lanes=E,i;case $:return Sc(c,y,E,o);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case R:N=10;break e;case F:N=9;break e;case O:N=11;break e;case Z:N=14;break e;case q:N=16,p=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return o=Oi(N,c,o,y),o.elementType=i,o.type=p,o.lanes=E,o}function oo(i,o,c,p){return i=Oi(7,i,p,o),i.lanes=c,i}function Sc(i,o,c,p){return i=Oi(22,i,p,o),i.elementType=$,i.lanes=c,i.stateNode={isHidden:!1},i}function mh(i,o,c){return i=Oi(6,i,null,o),i.lanes=c,i}function gh(i,o,c){return o=Oi(4,i.children!==null?i.children:[],i.key,o),o.lanes=c,o.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},o}function A1(i,o,c,p,y){this.tag=o,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=In(0),this.expirationTimes=In(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=In(0),this.identifierPrefix=p,this.onRecoverableError=y,this.mutableSourceEagerHydrationData=null}function _h(i,o,c,p,y,E,N,V,W){return i=new A1(i,o,c,V,W),o===1?(o=1,E===!0&&(o|=8)):o=0,E=Oi(3,null,null,o),i.current=E,E.stateNode=i,E.memoizedState={element:p,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pd(E),i}function R1(i,o,c){var p=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:p==null?null:""+p,children:i,containerInfo:o,implementation:c}}function D0(i){if(!i)return ps;i=i._reactInternals;e:{if(or(i)!==i||i.tag!==1)throw Error(t(170));var o=i;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(ii(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(i.tag===1){var c=i.type;if(ii(c))return s_(i,c,o)}return o}function I0(i,o,c,p,y,E,N,V,W){return i=_h(c,p,!0,i,y,E,N,V,W),i.context=D0(null),c=i.current,p=$n(),y=Ss(c),E=Nr(p,y),E.callback=o??null,_s(c,E,y),i.current.lanes=y,vn(i,y,p),oi(i,p),i}function Mc(i,o,c,p){var y=o.current,E=$n(),N=Ss(y);return c=D0(c),o.context===null?o.context=c:o.pendingContext=c,o=Nr(E,N),o.payload={element:i},p=p===void 0?null:p,p!==null&&(o.callback=p),i=_s(y,o,N),i!==null&&(Zi(i,y,N,E),Ju(i,y,N)),N}function Ec(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function N0(i,o){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var c=i.retryLane;i.retryLane=c!==0&&c<o?c:o}}function vh(i,o){N0(i,o),(i=i.alternate)&&N0(i,o)}var L0=typeof reportError=="function"?reportError:function(i){console.error(i)};function yh(i){this._internalRoot=i}Tc.prototype.render=yh.prototype.render=function(i){var o=this._internalRoot;if(o===null)throw Error(t(409));Mc(i,o,null,null)},Tc.prototype.unmount=yh.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var o=i.containerInfo;io(function(){Mc(null,i,null,null)}),o[Rr]=null}};function Tc(i){this._internalRoot=i}Tc.prototype.unstable_scheduleHydration=function(i){if(i){var o=_g();i={blockedOn:null,target:i,priority:o};for(var c=0;c<us.length&&o!==0&&o<us[c].priority;c++);us.splice(c,0,i),c===0&&xg(i)}};function xh(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function wc(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function F0(){}function b1(i,o,c,p,y){if(y){if(typeof p=="function"){var E=p;p=function(){var ce=Ec(N);E.call(ce)}}var N=I0(o,p,i,0,null,!1,!1,"",F0);return i._reactRootContainer=N,i[Rr]=N.current,Sl(i.nodeType===8?i.parentNode:i),io(),N}for(;y=i.lastChild;)i.removeChild(y);if(typeof p=="function"){var V=p;p=function(){var ce=Ec(W);V.call(ce)}}var W=_h(i,0,!1,null,null,!1,!1,"",F0);return i._reactRootContainer=W,i[Rr]=W.current,Sl(i.nodeType===8?i.parentNode:i),io(function(){Mc(o,W,c,p)}),W}function Cc(i,o,c,p,y){var E=c._reactRootContainer;if(E){var N=E;if(typeof y=="function"){var V=y;y=function(){var W=Ec(N);V.call(W)}}Mc(o,N,i,y)}else N=b1(c,o,i,y,p);return Ec(N)}mg=function(i){switch(i.tag){case 3:var o=i.stateNode;if(o.current.memoizedState.isDehydrated){var c=gt(o.pendingLanes);c!==0&&(yn(o,c|1),oi(o,re()),!(Et&6)&&(aa=re()+500,ms()))}break;case 13:io(function(){var p=Ir(i,1);if(p!==null){var y=$n();Zi(p,i,1,y)}}),vh(i,1)}},Xf=function(i){if(i.tag===13){var o=Ir(i,134217728);if(o!==null){var c=$n();Zi(o,i,134217728,c)}vh(i,134217728)}},gg=function(i){if(i.tag===13){var o=Ss(i),c=Ir(i,o);if(c!==null){var p=$n();Zi(c,i,o,p)}vh(i,o)}},_g=function(){return Mt},vg=function(i,o){var c=Mt;try{return Mt=i,o()}finally{Mt=c}},Re=function(i,o,c){switch(o){case"input":if(dt(i,c),o=c.name,c.type==="radio"&&o!=null){for(c=i;c.parentNode;)c=c.parentNode;for(c=c.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<c.length;o++){var p=c[o];if(p!==i&&p.form===i.form){var y=Gu(p);if(!y)throw Error(t(90));at(p),dt(p,y)}}}break;case"textarea":me(i,c);break;case"select":o=c.value,o!=null&&k(i,!!c.multiple,o,!1)}},Ut=fh,dn=io;var P1={usingClientEntryPoint:!1,Events:[Tl,jo,Gu,Ie,rt,fh]},kl={findFiberByHostInstance:$s,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},D1={bundleType:kl.bundleType,version:kl.version,rendererPackageName:kl.rendererPackageName,rendererConfig:kl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:T.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=wu(i),i===null?null:i.stateNode},findFiberByHostInstance:kl.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ac.isDisabled&&Ac.supportsFiber)try{Je=Ac.inject(D1),He=Ac}catch{}}return ai.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P1,ai.createPortal=function(i,o){var c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xh(o))throw Error(t(200));return R1(i,o,null,c)},ai.createRoot=function(i,o){if(!xh(i))throw Error(t(299));var c=!1,p="",y=L0;return o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(y=o.onRecoverableError)),o=_h(i,1,!1,null,null,c,!1,p,y),i[Rr]=o.current,Sl(i.nodeType===8?i.parentNode:i),new yh(o)},ai.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var o=i._reactInternals;if(o===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=wu(o),i=i===null?null:i.stateNode,i},ai.flushSync=function(i){return io(i)},ai.hydrate=function(i,o,c){if(!wc(o))throw Error(t(200));return Cc(null,i,o,!0,c)},ai.hydrateRoot=function(i,o,c){if(!xh(i))throw Error(t(405));var p=c!=null&&c.hydratedSources||null,y=!1,E="",N=L0;if(c!=null&&(c.unstable_strictMode===!0&&(y=!0),c.identifierPrefix!==void 0&&(E=c.identifierPrefix),c.onRecoverableError!==void 0&&(N=c.onRecoverableError)),o=I0(o,null,i,1,c??null,y,!1,E,N),i[Rr]=o.current,Sl(i),p)for(i=0;i<p.length;i++)c=p[i],y=c._getVersion,y=y(c._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[c,y]:o.mutableSourceEagerHydrationData.push(c,y);return new Tc(o)},ai.render=function(i,o,c){if(!wc(o))throw Error(t(200));return Cc(null,i,o,!1,c)},ai.unmountComponentAtNode=function(i){if(!wc(i))throw Error(t(40));return i._reactRootContainer?(io(function(){Cc(null,null,i,!1,function(){i._reactRootContainer=null,i[Rr]=null})}),!0):!1},ai.unstable_batchedUpdates=fh,ai.unstable_renderSubtreeIntoContainer=function(i,o,c,p){if(!wc(c))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return Cc(i,o,c,!1,p)},ai.version="18.3.1-next-f1338f8080-20240426",ai}var G0;function z1(){if(G0)return Eh.exports;G0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Eh.exports=k1(),Eh.exports}var W0;function B1(){if(W0)return Rc;W0=1;var r=z1();return Rc.createRoot=r.createRoot,Rc.hydrateRoot=r.hydrateRoot,Rc}var V1=B1();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xm="172",H1=0,X0=1,G1=2,Ny=1,W1=2,Gr=3,Vs=0,ci=1,pr=2,jr=0,Da=1,q0=2,Y0=3,j0=4,X1=5,Mo=100,q1=101,Y1=102,j1=103,$1=104,Z1=200,K1=201,Q1=202,J1=203,cp=204,fp=205,eE=206,tE=207,nE=208,iE=209,rE=210,sE=211,oE=212,aE=213,lE=214,dp=0,hp=1,pp=2,Oa=3,mp=4,gp=5,_p=6,vp=7,Ly=0,uE=1,cE=2,ks=0,fE=1,dE=2,hE=3,pE=4,mE=5,gE=6,_E=7,Fy=300,ka=301,za=302,yp=303,xp=304,Rf=306,Sp=1e3,To=1001,Mp=1002,tr=1003,vE=1004,bc=1005,Tn=1006,Ch=1007,wo=1008,Kr=1009,Uy=1010,Oy=1011,eu=1012,Sm=1013,Do=1014,gr=1015,Qa=1016,Mm=1017,Em=1018,Ba=1020,ky=35902,zy=1021,By=1022,Ci=1023,Vy=1024,Hy=1025,Ia=1026,Va=1027,Gy=1028,Tm=1029,Wy=1030,wm=1031,Cm=1033,tf=33776,nf=33777,rf=33778,sf=33779,Ep=35840,Tp=35841,wp=35842,Cp=35843,Ap=36196,Rp=37492,bp=37496,Pp=37808,Dp=37809,Ip=37810,Np=37811,Lp=37812,Fp=37813,Up=37814,Op=37815,kp=37816,zp=37817,Bp=37818,Vp=37819,Hp=37820,Gp=37821,of=36492,Wp=36494,Xp=36495,Xy=36283,qp=36284,Yp=36285,jp=36286,yE=3200,xE=3201,qy=0,SE=1,Ls="",Bi="srgb",Ha="srgb-linear",df="linear",Pt="srgb",ua=7680,$0=519,ME=512,EE=513,TE=514,Yy=515,wE=516,CE=517,AE=518,RE=519,Z0=35044,K0="300 es",Yr=2e3,hf=2001;class Lo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let a=0,l=s.length;a<l;a++)s[a].call(this,e);e.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Q0=1234567;const $l=Math.PI/180,tu=180/Math.PI;function Ja(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(On[r&255]+On[r>>8&255]+On[r>>16&255]+On[r>>24&255]+"-"+On[e&255]+On[e>>8&255]+"-"+On[e>>16&15|64]+On[e>>24&255]+"-"+On[t&63|128]+On[t>>8&255]+"-"+On[t>>16&255]+On[t>>24&255]+On[n&255]+On[n>>8&255]+On[n>>16&255]+On[n>>24&255]).toLowerCase()}function _t(r,e,t){return Math.max(e,Math.min(t,r))}function Am(r,e){return(r%e+e)%e}function bE(r,e,t,n,s){return n+(r-e)*(s-n)/(t-e)}function PE(r,e,t){return r!==e?(t-r)/(e-r):0}function Zl(r,e,t){return(1-t)*r+t*e}function DE(r,e,t,n){return Zl(r,e,1-Math.exp(-t*n))}function IE(r,e=1){return e-Math.abs(Am(r,e*2)-e)}function NE(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function LE(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function FE(r,e){return r+Math.floor(Math.random()*(e-r+1))}function UE(r,e){return r+Math.random()*(e-r)}function OE(r){return r*(.5-Math.random())}function kE(r){r!==void 0&&(Q0=r);let e=Q0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function zE(r){return r*$l}function BE(r){return r*tu}function VE(r){return(r&r-1)===0&&r!==0}function HE(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function GE(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function WE(r,e,t,n,s){const a=Math.cos,l=Math.sin,u=a(t/2),f=l(t/2),d=a((e+n)/2),h=l((e+n)/2),m=a((e-n)/2),g=l((e-n)/2),_=a((n-e)/2),S=l((n-e)/2);switch(s){case"XYX":r.set(u*h,f*m,f*g,u*d);break;case"YZY":r.set(f*g,u*h,f*m,u*d);break;case"ZXZ":r.set(f*m,f*g,u*h,u*d);break;case"XZX":r.set(u*h,f*S,f*_,u*d);break;case"YXY":r.set(f*_,u*h,f*S,u*d);break;case"ZYZ":r.set(f*S,f*_,u*h,u*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function wa(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Kn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Te={DEG2RAD:$l,RAD2DEG:tu,generateUUID:Ja,clamp:_t,euclideanModulo:Am,mapLinear:bE,inverseLerp:PE,lerp:Zl,damp:DE,pingpong:IE,smoothstep:NE,smootherstep:LE,randInt:FE,randFloat:UE,randFloatSpread:OE,seededRandom:kE,degToRad:zE,radToDeg:BE,isPowerOfTwo:VE,ceilPowerOfTwo:HE,floorPowerOfTwo:GE,setQuaternionFromProperEuler:WE,normalize:Kn,denormalize:wa};class ut{constructor(e=0,t=0){ut.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(_t(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),a=this.x-e.x,l=this.y-e.y;return this.x=a*n-l*s+e.x,this.y=a*s+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,t,n,s,a,l,u,f,d){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,l,u,f,d)}set(e,t,n,s,a,l,u,f,d){const h=this.elements;return h[0]=e,h[1]=s,h[2]=u,h[3]=t,h[4]=a,h[5]=f,h[6]=n,h[7]=l,h[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,l=n[0],u=n[3],f=n[6],d=n[1],h=n[4],m=n[7],g=n[2],_=n[5],S=n[8],M=s[0],x=s[3],v=s[6],b=s[1],w=s[4],T=s[7],C=s[2],P=s[5],I=s[8];return a[0]=l*M+u*b+f*C,a[3]=l*x+u*w+f*P,a[6]=l*v+u*T+f*I,a[1]=d*M+h*b+m*C,a[4]=d*x+h*w+m*P,a[7]=d*v+h*T+m*I,a[2]=g*M+_*b+S*C,a[5]=g*x+_*w+S*P,a[8]=g*v+_*T+S*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],l=e[4],u=e[5],f=e[6],d=e[7],h=e[8];return t*l*h-t*u*d-n*a*h+n*u*f+s*a*d-s*l*f}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],l=e[4],u=e[5],f=e[6],d=e[7],h=e[8],m=h*l-u*d,g=u*f-h*a,_=d*a-l*f,S=t*m+n*g+s*_;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/S;return e[0]=m*M,e[1]=(s*d-h*n)*M,e[2]=(u*n-s*l)*M,e[3]=g*M,e[4]=(h*t-s*f)*M,e[5]=(s*a-u*t)*M,e[6]=_*M,e[7]=(n*f-d*t)*M,e[8]=(l*t-n*a)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,a,l,u){const f=Math.cos(a),d=Math.sin(a);return this.set(n*f,n*d,-n*(f*l+d*u)+l+e,-s*d,s*f,-s*(-d*l+f*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(Ah.makeScale(e,t)),this}rotate(e){return this.premultiply(Ah.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ah.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ah=new ot;function jy(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function pf(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function XE(){const r=pf("canvas");return r.style.display="block",r}const J0={};function Ca(r){r in J0||(J0[r]=!0,console.warn(r))}function qE(r,e,t){return new Promise(function(n,s){function a(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:s();break;case r.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}function YE(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function jE(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ev=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tv=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $E(){const r={enabled:!0,workingColorSpace:Ha,spaces:{},convert:function(s,a,l){return this.enabled===!1||a===l||!a||!l||(this.spaces[a].transfer===Pt&&(s.r=$r(s.r),s.g=$r(s.g),s.b=$r(s.b)),this.spaces[a].primaries!==this.spaces[l].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===Pt&&(s.r=Na(s.r),s.g=Na(s.g),s.b=Na(s.b))),s},fromWorkingColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},toWorkingColorSpace:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ls?df:this.spaces[s].transfer},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,l){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Ha]:{primaries:e,whitePoint:n,transfer:df,toXYZ:ev,fromXYZ:tv,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Bi},outputColorSpaceConfig:{drawingBufferColorSpace:Bi}},[Bi]:{primaries:e,whitePoint:n,transfer:Pt,toXYZ:ev,fromXYZ:tv,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Bi}}}),r}const Ct=$E();function $r(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Na(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ca;class ZE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ca===void 0&&(ca=pf("canvas")),ca.width=e.width,ca.height=e.height;const n=ca.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ca}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=pf("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),a=s.data;for(let l=0;l<a.length;l++)a[l]=$r(a[l]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($r(t[n]/255)*255):t[n]=$r(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let KE=0;class $y{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:KE++}),this.uuid=Ja(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let l=0,u=s.length;l<u;l++)s[l].isDataTexture?a.push(Rh(s[l].image)):a.push(Rh(s[l]))}else a=Rh(s);n.url=a}return t||(e.images[this.uuid]=n),n}}function Rh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ZE.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let QE=0;class Vn extends Lo{constructor(e=Vn.DEFAULT_IMAGE,t=Vn.DEFAULT_MAPPING,n=To,s=To,a=Tn,l=wo,u=Ci,f=Kr,d=Vn.DEFAULT_ANISOTROPY,h=Ls){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:QE++}),this.uuid=Ja(),this.name="",this.source=new $y(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=l,this.anisotropy=d,this.format=u,this.internalFormat=null,this.type=f,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sp:e.x=e.x-Math.floor(e.x);break;case To:e.x=e.x<0?0:1;break;case Mp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sp:e.y=e.y-Math.floor(e.y);break;case To:e.y=e.y<0?0:1;break;case Mp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=Fy;Vn.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,t=0,n=0,s=1){rn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*s+l[12]*a,this.y=l[1]*t+l[5]*n+l[9]*s+l[13]*a,this.z=l[2]*t+l[6]*n+l[10]*s+l[14]*a,this.w=l[3]*t+l[7]*n+l[11]*s+l[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,a;const f=e.elements,d=f[0],h=f[4],m=f[8],g=f[1],_=f[5],S=f[9],M=f[2],x=f[6],v=f[10];if(Math.abs(h-g)<.01&&Math.abs(m-M)<.01&&Math.abs(S-x)<.01){if(Math.abs(h+g)<.1&&Math.abs(m+M)<.1&&Math.abs(S+x)<.1&&Math.abs(d+_+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(d+1)/2,T=(_+1)/2,C=(v+1)/2,P=(h+g)/4,I=(m+M)/4,D=(S+x)/4;return w>T&&w>C?w<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(w),s=P/n,a=I/n):T>C?T<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(T),n=P/s,a=D/s):C<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(C),n=I/a,s=D/a),this.set(n,s,a,t),this}let b=Math.sqrt((x-S)*(x-S)+(m-M)*(m-M)+(g-h)*(g-h));return Math.abs(b)<.001&&(b=1),this.x=(x-S)/b,this.y=(m-M)/b,this.z=(g-h)/b,this.w=Math.acos((d+_+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this.w=_t(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this.w=_t(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(_t(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class JE extends Lo{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rn(0,0,e,t),this.scissorTest=!1,this.viewport=new rn(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new Vn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const l=n.count;for(let u=0;u<l;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new $y(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class nr extends JE{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Zy extends Vn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=tr,this.minFilter=tr,this.wrapR=To,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class eT extends Vn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=tr,this.minFilter=tr,this.wrapR=To,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class el{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,a,l,u){let f=n[s+0],d=n[s+1],h=n[s+2],m=n[s+3];const g=a[l+0],_=a[l+1],S=a[l+2],M=a[l+3];if(u===0){e[t+0]=f,e[t+1]=d,e[t+2]=h,e[t+3]=m;return}if(u===1){e[t+0]=g,e[t+1]=_,e[t+2]=S,e[t+3]=M;return}if(m!==M||f!==g||d!==_||h!==S){let x=1-u;const v=f*g+d*_+h*S+m*M,b=v>=0?1:-1,w=1-v*v;if(w>Number.EPSILON){const C=Math.sqrt(w),P=Math.atan2(C,v*b);x=Math.sin(x*P)/C,u=Math.sin(u*P)/C}const T=u*b;if(f=f*x+g*T,d=d*x+_*T,h=h*x+S*T,m=m*x+M*T,x===1-u){const C=1/Math.sqrt(f*f+d*d+h*h+m*m);f*=C,d*=C,h*=C,m*=C}}e[t]=f,e[t+1]=d,e[t+2]=h,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,s,a,l){const u=n[s],f=n[s+1],d=n[s+2],h=n[s+3],m=a[l],g=a[l+1],_=a[l+2],S=a[l+3];return e[t]=u*S+h*m+f*_-d*g,e[t+1]=f*S+h*g+d*m-u*_,e[t+2]=d*S+h*_+u*g-f*m,e[t+3]=h*S-u*m-f*g-d*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,a=e._z,l=e._order,u=Math.cos,f=Math.sin,d=u(n/2),h=u(s/2),m=u(a/2),g=f(n/2),_=f(s/2),S=f(a/2);switch(l){case"XYZ":this._x=g*h*m+d*_*S,this._y=d*_*m-g*h*S,this._z=d*h*S+g*_*m,this._w=d*h*m-g*_*S;break;case"YXZ":this._x=g*h*m+d*_*S,this._y=d*_*m-g*h*S,this._z=d*h*S-g*_*m,this._w=d*h*m+g*_*S;break;case"ZXY":this._x=g*h*m-d*_*S,this._y=d*_*m+g*h*S,this._z=d*h*S+g*_*m,this._w=d*h*m-g*_*S;break;case"ZYX":this._x=g*h*m-d*_*S,this._y=d*_*m+g*h*S,this._z=d*h*S-g*_*m,this._w=d*h*m+g*_*S;break;case"YZX":this._x=g*h*m+d*_*S,this._y=d*_*m+g*h*S,this._z=d*h*S-g*_*m,this._w=d*h*m-g*_*S;break;case"XZY":this._x=g*h*m-d*_*S,this._y=d*_*m-g*h*S,this._z=d*h*S+g*_*m,this._w=d*h*m+g*_*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],a=t[8],l=t[1],u=t[5],f=t[9],d=t[2],h=t[6],m=t[10],g=n+u+m;if(g>0){const _=.5/Math.sqrt(g+1);this._w=.25/_,this._x=(h-f)*_,this._y=(a-d)*_,this._z=(l-s)*_}else if(n>u&&n>m){const _=2*Math.sqrt(1+n-u-m);this._w=(h-f)/_,this._x=.25*_,this._y=(s+l)/_,this._z=(a+d)/_}else if(u>m){const _=2*Math.sqrt(1+u-n-m);this._w=(a-d)/_,this._x=(s+l)/_,this._y=.25*_,this._z=(f+h)/_}else{const _=2*Math.sqrt(1+m-n-u);this._w=(l-s)/_,this._x=(a+d)/_,this._y=(f+h)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,a=e._z,l=e._w,u=t._x,f=t._y,d=t._z,h=t._w;return this._x=n*h+l*u+s*d-a*f,this._y=s*h+l*f+a*u-n*d,this._z=a*h+l*d+n*f-s*u,this._w=l*h-n*u-s*f-a*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,a=this._z,l=this._w;let u=l*e._w+n*e._x+s*e._y+a*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=l,this._x=n,this._y=s,this._z=a,this;const f=1-u*u;if(f<=Number.EPSILON){const _=1-t;return this._w=_*l+t*this._w,this._x=_*n+t*this._x,this._y=_*s+t*this._y,this._z=_*a+t*this._z,this.normalize(),this}const d=Math.sqrt(f),h=Math.atan2(d,u),m=Math.sin((1-t)*h)/d,g=Math.sin(t*h)/d;return this._w=l*m+this._w*g,this._x=n*m+this._x*g,this._y=s*m+this._y*g,this._z=a*m+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class se{constructor(e=0,t=0,n=0){se.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nv.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*s,this.y=a[1]*t+a[4]*n+a[7]*s,this.z=a[2]*t+a[5]*n+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=e.elements,l=1/(a[3]*t+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*s+a[12])*l,this.y=(a[1]*t+a[5]*n+a[9]*s+a[13])*l,this.z=(a[2]*t+a[6]*n+a[10]*s+a[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,a=e.x,l=e.y,u=e.z,f=e.w,d=2*(l*s-u*n),h=2*(u*t-a*s),m=2*(a*n-l*t);return this.x=t+f*d+l*m-u*h,this.y=n+f*h+u*d-a*m,this.z=s+f*m+a*h-l*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s,this.y=a[1]*t+a[5]*n+a[9]*s,this.z=a[2]*t+a[6]*n+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(_t(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,a=e.z,l=t.x,u=t.y,f=t.z;return this.x=s*f-a*u,this.y=a*l-n*f,this.z=n*u-s*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return bh.copy(this).projectOnVector(e),this.sub(bh)}reflect(e){return this.sub(bh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bh=new se,nv=new el;class du{constructor(e=new se(1/0,1/0,1/0),t=new se(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ki.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ki.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ki.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let l=0,u=a.count;l<u;l++)e.isMesh===!0?e.getVertexPosition(l,Ki):Ki.fromBufferAttribute(a,l),Ki.applyMatrix4(e.matrixWorld),this.expandByPoint(Ki);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Pc.copy(n.boundingBox)),Pc.applyMatrix4(e.matrixWorld),this.union(Pc)}const s=e.children;for(let a=0,l=s.length;a<l;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ki),Ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bl),Dc.subVectors(this.max,Bl),fa.subVectors(e.a,Bl),da.subVectors(e.b,Bl),ha.subVectors(e.c,Bl),ws.subVectors(da,fa),Cs.subVectors(ha,da),ao.subVectors(fa,ha);let t=[0,-ws.z,ws.y,0,-Cs.z,Cs.y,0,-ao.z,ao.y,ws.z,0,-ws.x,Cs.z,0,-Cs.x,ao.z,0,-ao.x,-ws.y,ws.x,0,-Cs.y,Cs.x,0,-ao.y,ao.x,0];return!Ph(t,fa,da,ha,Dc)||(t=[1,0,0,0,1,0,0,0,1],!Ph(t,fa,da,ha,Dc))?!1:(Ic.crossVectors(ws,Cs),t=[Ic.x,Ic.y,Ic.z],Ph(t,fa,da,ha,Dc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ur[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ur[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ur[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ur[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ur[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ur[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ur[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ur[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ur),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ur=[new se,new se,new se,new se,new se,new se,new se,new se],Ki=new se,Pc=new du,fa=new se,da=new se,ha=new se,ws=new se,Cs=new se,ao=new se,Bl=new se,Dc=new se,Ic=new se,lo=new se;function Ph(r,e,t,n,s){for(let a=0,l=r.length-3;a<=l;a+=3){lo.fromArray(r,a);const u=s.x*Math.abs(lo.x)+s.y*Math.abs(lo.y)+s.z*Math.abs(lo.z),f=e.dot(lo),d=t.dot(lo),h=n.dot(lo);if(Math.max(-Math.max(f,d,h),Math.min(f,d,h))>u)return!1}return!0}const tT=new du,Vl=new se,Dh=new se;class bf{constructor(e=new se,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):tT.setFromPoints(e).getCenter(n);let s=0;for(let a=0,l=e.length;a<l;a++)s=Math.max(s,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vl.subVectors(e,this.center);const t=Vl.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Vl,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vl.copy(e.center).add(Dh)),this.expandByPoint(Vl.copy(e.center).sub(Dh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Or=new se,Ih=new se,Nc=new se,As=new se,Nh=new se,Lc=new se,Lh=new se;class Ky{constructor(e=new se,t=new se(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Or)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Or.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Or.copy(this.origin).addScaledVector(this.direction,t),Or.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ih.copy(e).add(t).multiplyScalar(.5),Nc.copy(t).sub(e).normalize(),As.copy(this.origin).sub(Ih);const a=e.distanceTo(t)*.5,l=-this.direction.dot(Nc),u=As.dot(this.direction),f=-As.dot(Nc),d=As.lengthSq(),h=Math.abs(1-l*l);let m,g,_,S;if(h>0)if(m=l*f-u,g=l*u-f,S=a*h,m>=0)if(g>=-S)if(g<=S){const M=1/h;m*=M,g*=M,_=m*(m+l*g+2*u)+g*(l*m+g+2*f)+d}else g=a,m=Math.max(0,-(l*g+u)),_=-m*m+g*(g+2*f)+d;else g=-a,m=Math.max(0,-(l*g+u)),_=-m*m+g*(g+2*f)+d;else g<=-S?(m=Math.max(0,-(-l*a+u)),g=m>0?-a:Math.min(Math.max(-a,-f),a),_=-m*m+g*(g+2*f)+d):g<=S?(m=0,g=Math.min(Math.max(-a,-f),a),_=g*(g+2*f)+d):(m=Math.max(0,-(l*a+u)),g=m>0?a:Math.min(Math.max(-a,-f),a),_=-m*m+g*(g+2*f)+d);else g=l>0?-a:a,m=Math.max(0,-(l*g+u)),_=-m*m+g*(g+2*f)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(Ih).addScaledVector(Nc,g),_}intersectSphere(e,t){Or.subVectors(e.center,this.origin);const n=Or.dot(this.direction),s=Or.dot(Or)-n*n,a=e.radius*e.radius;if(s>a)return null;const l=Math.sqrt(a-s),u=n-l,f=n+l;return f<0?null:u<0?this.at(f,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,a,l,u,f;const d=1/this.direction.x,h=1/this.direction.y,m=1/this.direction.z,g=this.origin;return d>=0?(n=(e.min.x-g.x)*d,s=(e.max.x-g.x)*d):(n=(e.max.x-g.x)*d,s=(e.min.x-g.x)*d),h>=0?(a=(e.min.y-g.y)*h,l=(e.max.y-g.y)*h):(a=(e.max.y-g.y)*h,l=(e.min.y-g.y)*h),n>l||a>s||((a>n||isNaN(n))&&(n=a),(l<s||isNaN(s))&&(s=l),m>=0?(u=(e.min.z-g.z)*m,f=(e.max.z-g.z)*m):(u=(e.max.z-g.z)*m,f=(e.min.z-g.z)*m),n>f||u>s)||((u>n||n!==n)&&(n=u),(f<s||s!==s)&&(s=f),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Or)!==null}intersectTriangle(e,t,n,s,a){Nh.subVectors(t,e),Lc.subVectors(n,e),Lh.crossVectors(Nh,Lc);let l=this.direction.dot(Lh),u;if(l>0){if(s)return null;u=1}else if(l<0)u=-1,l=-l;else return null;As.subVectors(this.origin,e);const f=u*this.direction.dot(Lc.crossVectors(As,Lc));if(f<0)return null;const d=u*this.direction.dot(Nh.cross(As));if(d<0||f+d>l)return null;const h=-u*As.dot(Lh);return h<0?null:this.at(h/l,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sn{constructor(e,t,n,s,a,l,u,f,d,h,m,g,_,S,M,x){sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,l,u,f,d,h,m,g,_,S,M,x)}set(e,t,n,s,a,l,u,f,d,h,m,g,_,S,M,x){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=s,v[1]=a,v[5]=l,v[9]=u,v[13]=f,v[2]=d,v[6]=h,v[10]=m,v[14]=g,v[3]=_,v[7]=S,v[11]=M,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sn().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/pa.setFromMatrixColumn(e,0).length(),a=1/pa.setFromMatrixColumn(e,1).length(),l=1/pa.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,a=e.z,l=Math.cos(n),u=Math.sin(n),f=Math.cos(s),d=Math.sin(s),h=Math.cos(a),m=Math.sin(a);if(e.order==="XYZ"){const g=l*h,_=l*m,S=u*h,M=u*m;t[0]=f*h,t[4]=-f*m,t[8]=d,t[1]=_+S*d,t[5]=g-M*d,t[9]=-u*f,t[2]=M-g*d,t[6]=S+_*d,t[10]=l*f}else if(e.order==="YXZ"){const g=f*h,_=f*m,S=d*h,M=d*m;t[0]=g+M*u,t[4]=S*u-_,t[8]=l*d,t[1]=l*m,t[5]=l*h,t[9]=-u,t[2]=_*u-S,t[6]=M+g*u,t[10]=l*f}else if(e.order==="ZXY"){const g=f*h,_=f*m,S=d*h,M=d*m;t[0]=g-M*u,t[4]=-l*m,t[8]=S+_*u,t[1]=_+S*u,t[5]=l*h,t[9]=M-g*u,t[2]=-l*d,t[6]=u,t[10]=l*f}else if(e.order==="ZYX"){const g=l*h,_=l*m,S=u*h,M=u*m;t[0]=f*h,t[4]=S*d-_,t[8]=g*d+M,t[1]=f*m,t[5]=M*d+g,t[9]=_*d-S,t[2]=-d,t[6]=u*f,t[10]=l*f}else if(e.order==="YZX"){const g=l*f,_=l*d,S=u*f,M=u*d;t[0]=f*h,t[4]=M-g*m,t[8]=S*m+_,t[1]=m,t[5]=l*h,t[9]=-u*h,t[2]=-d*h,t[6]=_*m+S,t[10]=g-M*m}else if(e.order==="XZY"){const g=l*f,_=l*d,S=u*f,M=u*d;t[0]=f*h,t[4]=-m,t[8]=d*h,t[1]=g*m+M,t[5]=l*h,t[9]=_*m-S,t[2]=S*m-_,t[6]=u*h,t[10]=M*m+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nT,e,iT)}lookAt(e,t,n){const s=this.elements;return Mi.subVectors(e,t),Mi.lengthSq()===0&&(Mi.z=1),Mi.normalize(),Rs.crossVectors(n,Mi),Rs.lengthSq()===0&&(Math.abs(n.z)===1?Mi.x+=1e-4:Mi.z+=1e-4,Mi.normalize(),Rs.crossVectors(n,Mi)),Rs.normalize(),Fc.crossVectors(Mi,Rs),s[0]=Rs.x,s[4]=Fc.x,s[8]=Mi.x,s[1]=Rs.y,s[5]=Fc.y,s[9]=Mi.y,s[2]=Rs.z,s[6]=Fc.z,s[10]=Mi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,l=n[0],u=n[4],f=n[8],d=n[12],h=n[1],m=n[5],g=n[9],_=n[13],S=n[2],M=n[6],x=n[10],v=n[14],b=n[3],w=n[7],T=n[11],C=n[15],P=s[0],I=s[4],D=s[8],A=s[12],R=s[1],F=s[5],O=s[9],B=s[13],G=s[2],Z=s[6],q=s[10],$=s[14],H=s[3],J=s[7],ee=s[11],z=s[15];return a[0]=l*P+u*R+f*G+d*H,a[4]=l*I+u*F+f*Z+d*J,a[8]=l*D+u*O+f*q+d*ee,a[12]=l*A+u*B+f*$+d*z,a[1]=h*P+m*R+g*G+_*H,a[5]=h*I+m*F+g*Z+_*J,a[9]=h*D+m*O+g*q+_*ee,a[13]=h*A+m*B+g*$+_*z,a[2]=S*P+M*R+x*G+v*H,a[6]=S*I+M*F+x*Z+v*J,a[10]=S*D+M*O+x*q+v*ee,a[14]=S*A+M*B+x*$+v*z,a[3]=b*P+w*R+T*G+C*H,a[7]=b*I+w*F+T*Z+C*J,a[11]=b*D+w*O+T*q+C*ee,a[15]=b*A+w*B+T*$+C*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[12],l=e[1],u=e[5],f=e[9],d=e[13],h=e[2],m=e[6],g=e[10],_=e[14],S=e[3],M=e[7],x=e[11],v=e[15];return S*(+a*f*m-s*d*m-a*u*g+n*d*g+s*u*_-n*f*_)+M*(+t*f*_-t*d*g+a*l*g-s*l*_+s*d*h-a*f*h)+x*(+t*d*m-t*u*_-a*l*m+n*l*_+a*u*h-n*d*h)+v*(-s*u*h-t*f*m+t*u*g+s*l*m-n*l*g+n*f*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],l=e[4],u=e[5],f=e[6],d=e[7],h=e[8],m=e[9],g=e[10],_=e[11],S=e[12],M=e[13],x=e[14],v=e[15],b=m*x*d-M*g*d+M*f*_-u*x*_-m*f*v+u*g*v,w=S*g*d-h*x*d-S*f*_+l*x*_+h*f*v-l*g*v,T=h*M*d-S*m*d+S*u*_-l*M*_-h*u*v+l*m*v,C=S*m*f-h*M*f-S*u*g+l*M*g+h*u*x-l*m*x,P=t*b+n*w+s*T+a*C;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/P;return e[0]=b*I,e[1]=(M*g*a-m*x*a-M*s*_+n*x*_+m*s*v-n*g*v)*I,e[2]=(u*x*a-M*f*a+M*s*d-n*x*d-u*s*v+n*f*v)*I,e[3]=(m*f*a-u*g*a-m*s*d+n*g*d+u*s*_-n*f*_)*I,e[4]=w*I,e[5]=(h*x*a-S*g*a+S*s*_-t*x*_-h*s*v+t*g*v)*I,e[6]=(S*f*a-l*x*a-S*s*d+t*x*d+l*s*v-t*f*v)*I,e[7]=(l*g*a-h*f*a+h*s*d-t*g*d-l*s*_+t*f*_)*I,e[8]=T*I,e[9]=(S*m*a-h*M*a-S*n*_+t*M*_+h*n*v-t*m*v)*I,e[10]=(l*M*a-S*u*a+S*n*d-t*M*d-l*n*v+t*u*v)*I,e[11]=(h*u*a-l*m*a-h*n*d+t*m*d+l*n*_-t*u*_)*I,e[12]=C*I,e[13]=(h*M*s-S*m*s+S*n*g-t*M*g-h*n*x+t*m*x)*I,e[14]=(S*u*s-l*M*s-S*n*f+t*M*f+l*n*x-t*u*x)*I,e[15]=(l*m*s-h*u*s+h*n*f-t*m*f-l*n*g+t*u*g)*I,this}scale(e){const t=this.elements,n=e.x,s=e.y,a=e.z;return t[0]*=n,t[4]*=s,t[8]*=a,t[1]*=n,t[5]*=s,t[9]*=a,t[2]*=n,t[6]*=s,t[10]*=a,t[3]*=n,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),a=1-n,l=e.x,u=e.y,f=e.z,d=a*l,h=a*u;return this.set(d*l+n,d*u-s*f,d*f+s*u,0,d*u+s*f,h*u+n,h*f-s*l,0,d*f-s*u,h*f+s*l,a*f*f+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,a,l){return this.set(1,n,a,0,e,1,l,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,a=t._x,l=t._y,u=t._z,f=t._w,d=a+a,h=l+l,m=u+u,g=a*d,_=a*h,S=a*m,M=l*h,x=l*m,v=u*m,b=f*d,w=f*h,T=f*m,C=n.x,P=n.y,I=n.z;return s[0]=(1-(M+v))*C,s[1]=(_+T)*C,s[2]=(S-w)*C,s[3]=0,s[4]=(_-T)*P,s[5]=(1-(g+v))*P,s[6]=(x+b)*P,s[7]=0,s[8]=(S+w)*I,s[9]=(x-b)*I,s[10]=(1-(g+M))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let a=pa.set(s[0],s[1],s[2]).length();const l=pa.set(s[4],s[5],s[6]).length(),u=pa.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],Qi.copy(this);const d=1/a,h=1/l,m=1/u;return Qi.elements[0]*=d,Qi.elements[1]*=d,Qi.elements[2]*=d,Qi.elements[4]*=h,Qi.elements[5]*=h,Qi.elements[6]*=h,Qi.elements[8]*=m,Qi.elements[9]*=m,Qi.elements[10]*=m,t.setFromRotationMatrix(Qi),n.x=a,n.y=l,n.z=u,this}makePerspective(e,t,n,s,a,l,u=Yr){const f=this.elements,d=2*a/(t-e),h=2*a/(n-s),m=(t+e)/(t-e),g=(n+s)/(n-s);let _,S;if(u===Yr)_=-(l+a)/(l-a),S=-2*l*a/(l-a);else if(u===hf)_=-l/(l-a),S=-l*a/(l-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return f[0]=d,f[4]=0,f[8]=m,f[12]=0,f[1]=0,f[5]=h,f[9]=g,f[13]=0,f[2]=0,f[6]=0,f[10]=_,f[14]=S,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,n,s,a,l,u=Yr){const f=this.elements,d=1/(t-e),h=1/(n-s),m=1/(l-a),g=(t+e)*d,_=(n+s)*h;let S,M;if(u===Yr)S=(l+a)*m,M=-2*m;else if(u===hf)S=a*m,M=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return f[0]=2*d,f[4]=0,f[8]=0,f[12]=-g,f[1]=0,f[5]=2*h,f[9]=0,f[13]=-_,f[2]=0,f[6]=0,f[10]=M,f[14]=-S,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const pa=new se,Qi=new sn,nT=new se(0,0,0),iT=new se(1,1,1),Rs=new se,Fc=new se,Mi=new se,iv=new sn,rv=new el;class Sr{constructor(e=0,t=0,n=0,s=Sr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,a=s[0],l=s[4],u=s[8],f=s[1],d=s[5],h=s[9],m=s[2],g=s[6],_=s[10];switch(t){case"XYZ":this._y=Math.asin(_t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-h,_),this._z=Math.atan2(-l,a)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(u,_),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-m,a),this._z=0);break;case"ZXY":this._x=Math.asin(_t(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-m,_),this._z=Math.atan2(-l,d)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-_t(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(g,_),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-l,d));break;case"YZX":this._z=Math.asin(_t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-h,d),this._y=Math.atan2(-m,a)):(this._x=0,this._y=Math.atan2(u,_));break;case"XZY":this._z=Math.asin(-_t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-h,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return iv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(iv,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rv.setFromEuler(this),this.setFromQuaternion(rv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sr.DEFAULT_ORDER="XYZ";class Qy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rT=0;const sv=new se,ma=new el,kr=new sn,Uc=new se,Hl=new se,sT=new se,oT=new el,ov=new se(1,0,0),av=new se(0,1,0),lv=new se(0,0,1),uv={type:"added"},aT={type:"removed"},ga={type:"childadded",child:null},Fh={type:"childremoved",child:null};class mn extends Lo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rT++}),this.uuid=Ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const e=new se,t=new Sr,n=new el,s=new se(1,1,1);function a(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new sn},normalMatrix:{value:new ot}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ma.setFromAxisAngle(e,t),this.quaternion.multiply(ma),this}rotateOnWorldAxis(e,t){return ma.setFromAxisAngle(e,t),this.quaternion.premultiply(ma),this}rotateX(e){return this.rotateOnAxis(ov,e)}rotateY(e){return this.rotateOnAxis(av,e)}rotateZ(e){return this.rotateOnAxis(lv,e)}translateOnAxis(e,t){return sv.copy(e).applyQuaternion(this.quaternion),this.position.add(sv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ov,e)}translateY(e){return this.translateOnAxis(av,e)}translateZ(e){return this.translateOnAxis(lv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Uc.copy(e):Uc.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Hl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kr.lookAt(Hl,Uc,this.up):kr.lookAt(Uc,Hl,this.up),this.quaternion.setFromRotationMatrix(kr),s&&(kr.extractRotation(s.matrixWorld),ma.setFromRotationMatrix(kr),this.quaternion.premultiply(ma.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(uv),ga.child=e,this.dispatchEvent(ga),ga.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(aT),Fh.child=e,this.dispatchEvent(Fh),Fh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),kr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kr.multiply(e.parent.matrixWorld)),e.applyMatrix4(kr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(uv),ga.child=e,this.dispatchEvent(ga),ga.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let a=0,l=s.length;a<l;a++)s[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hl,e,sT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hl,oT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,l=s.length;a<l;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const f=u.shapes;if(Array.isArray(f))for(let d=0,h=f.length;d<h;d++){const m=f[d];a(e.shapes,m)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let f=0,d=this.material.length;f<d;f++)u.push(a(e.materials,this.material[f]));s.material=u}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let u=0;u<this.children.length;u++)s.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let u=0;u<this.animations.length;u++){const f=this.animations[u];s.animations.push(a(e.animations,f))}}if(t){const u=l(e.geometries),f=l(e.materials),d=l(e.textures),h=l(e.images),m=l(e.shapes),g=l(e.skeletons),_=l(e.animations),S=l(e.nodes);u.length>0&&(n.geometries=u),f.length>0&&(n.materials=f),d.length>0&&(n.textures=d),h.length>0&&(n.images=h),m.length>0&&(n.shapes=m),g.length>0&&(n.skeletons=g),_.length>0&&(n.animations=_),S.length>0&&(n.nodes=S)}return n.object=s,n;function l(u){const f=[];for(const d in u){const h=u[d];delete h.metadata,f.push(h)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}mn.DEFAULT_UP=new se(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ji=new se,zr=new se,Uh=new se,Br=new se,_a=new se,va=new se,cv=new se,Oh=new se,kh=new se,zh=new se,Bh=new rn,Vh=new rn,Hh=new rn;class er{constructor(e=new se,t=new se,n=new se){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ji.subVectors(e,t),s.cross(Ji);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,n,s,a){Ji.subVectors(s,t),zr.subVectors(n,t),Uh.subVectors(e,t);const l=Ji.dot(Ji),u=Ji.dot(zr),f=Ji.dot(Uh),d=zr.dot(zr),h=zr.dot(Uh),m=l*d-u*u;if(m===0)return a.set(0,0,0),null;const g=1/m,_=(d*f-u*h)*g,S=(l*h-u*f)*g;return a.set(1-_-S,S,_)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Br)===null?!1:Br.x>=0&&Br.y>=0&&Br.x+Br.y<=1}static getInterpolation(e,t,n,s,a,l,u,f){return this.getBarycoord(e,t,n,s,Br)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(a,Br.x),f.addScaledVector(l,Br.y),f.addScaledVector(u,Br.z),f)}static getInterpolatedAttribute(e,t,n,s,a,l){return Bh.setScalar(0),Vh.setScalar(0),Hh.setScalar(0),Bh.fromBufferAttribute(e,t),Vh.fromBufferAttribute(e,n),Hh.fromBufferAttribute(e,s),l.setScalar(0),l.addScaledVector(Bh,a.x),l.addScaledVector(Vh,a.y),l.addScaledVector(Hh,a.z),l}static isFrontFacing(e,t,n,s){return Ji.subVectors(n,t),zr.subVectors(e,t),Ji.cross(zr).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ji.subVectors(this.c,this.b),zr.subVectors(this.a,this.b),Ji.cross(zr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return er.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return er.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,a){return er.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}containsPoint(e){return er.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return er.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,a=this.c;let l,u;_a.subVectors(s,n),va.subVectors(a,n),Oh.subVectors(e,n);const f=_a.dot(Oh),d=va.dot(Oh);if(f<=0&&d<=0)return t.copy(n);kh.subVectors(e,s);const h=_a.dot(kh),m=va.dot(kh);if(h>=0&&m<=h)return t.copy(s);const g=f*m-h*d;if(g<=0&&f>=0&&h<=0)return l=f/(f-h),t.copy(n).addScaledVector(_a,l);zh.subVectors(e,a);const _=_a.dot(zh),S=va.dot(zh);if(S>=0&&_<=S)return t.copy(a);const M=_*d-f*S;if(M<=0&&d>=0&&S<=0)return u=d/(d-S),t.copy(n).addScaledVector(va,u);const x=h*S-_*m;if(x<=0&&m-h>=0&&_-S>=0)return cv.subVectors(a,s),u=(m-h)/(m-h+(_-S)),t.copy(s).addScaledVector(cv,u);const v=1/(x+M+g);return l=M*v,u=g*v,t.copy(n).addScaledVector(_a,l).addScaledVector(va,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Jy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bs={h:0,s:0,l:0},Oc={h:0,s:0,l:0};function Gh(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ft{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ct.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ct.workingColorSpace){if(e=Am(e,1),t=_t(t,0,1),n=_t(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,l=2*n-a;this.r=Gh(l,a,e+1/3),this.g=Gh(l,a,e),this.b=Gh(l,a,e-1/3)}return Ct.toWorkingColorSpace(this,s),this}setStyle(e,t=Bi){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const l=s[1],u=s[2];switch(l){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],l=a.length;if(l===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bi){const n=Jy[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$r(e.r),this.g=$r(e.g),this.b=$r(e.b),this}copyLinearToSRGB(e){return this.r=Na(e.r),this.g=Na(e.g),this.b=Na(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bi){return Ct.fromWorkingColorSpace(kn.copy(this),e),Math.round(_t(kn.r*255,0,255))*65536+Math.round(_t(kn.g*255,0,255))*256+Math.round(_t(kn.b*255,0,255))}getHexString(e=Bi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.fromWorkingColorSpace(kn.copy(this),t);const n=kn.r,s=kn.g,a=kn.b,l=Math.max(n,s,a),u=Math.min(n,s,a);let f,d;const h=(u+l)/2;if(u===l)f=0,d=0;else{const m=l-u;switch(d=h<=.5?m/(l+u):m/(2-l-u),l){case n:f=(s-a)/m+(s<a?6:0);break;case s:f=(a-n)/m+2;break;case a:f=(n-s)/m+4;break}f/=6}return e.h=f,e.s=d,e.l=h,e}getRGB(e,t=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(kn.copy(this),t),e.r=kn.r,e.g=kn.g,e.b=kn.b,e}getStyle(e=Bi){Ct.fromWorkingColorSpace(kn.copy(this),e);const t=kn.r,n=kn.g,s=kn.b;return e!==Bi?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(bs),this.setHSL(bs.h+e,bs.s+t,bs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(bs),e.getHSL(Oc);const n=Zl(bs.h,Oc.h,t),s=Zl(bs.s,Oc.s,t),a=Zl(bs.l,Oc.l,t);return this.setHSL(n,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*s,this.g=a[1]*t+a[4]*n+a[7]*s,this.b=a[2]*t+a[5]*n+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kn=new ft;ft.NAMES=Jy;let lT=0;class tl extends Lo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lT++}),this.uuid=Ja(),this.name="",this.type="Material",this.blending=Da,this.side=Vs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cp,this.blendDst=fp,this.blendEquation=Mo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=Oa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ua,this.stencilZFail=ua,this.stencilZPass=ua,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Da&&(n.blending=this.blending),this.side!==Vs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==cp&&(n.blendSrc=this.blendSrc),this.blendDst!==fp&&(n.blendDst=this.blendDst),this.blendEquation!==Mo&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Oa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$0&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ua&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ua&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ua&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const l=[];for(const u in a){const f=a[u];delete f.metadata,l.push(f)}return l}if(t){const a=s(e.textures),l=s(e.images);a.length>0&&(n.textures=a),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class nu extends tl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sr,this.combine=Ly,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ln=new se,kc=new ut;class vr{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Z0,this.updateRanges=[],this.gpuType=gr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)kc.fromBufferAttribute(this,t),kc.applyMatrix3(e),this.setXY(t,kc.x,kc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix3(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=wa(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Kn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wa(t,this.array)),t}setX(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wa(t,this.array)),t}setY(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wa(t,this.array)),t}setW(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Kn(t,this.array),n=Kn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Kn(t,this.array),n=Kn(n,this.array),s=Kn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e*=this.itemSize,this.normalized&&(t=Kn(t,this.array),n=Kn(n,this.array),s=Kn(s,this.array),a=Kn(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Z0&&(e.usage=this.usage),e}}class ex extends vr{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class tx extends vr{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Gt extends vr{constructor(e,t,n){super(new Float32Array(e),t,n)}}let uT=0;const ki=new sn,Wh=new mn,ya=new se,Ei=new du,Gl=new du,En=new se;class _i extends Lo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uT++}),this.uuid=Ja(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jy(e)?tx:ex)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new ot().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ki.makeRotationFromQuaternion(e),this.applyMatrix4(ki),this}rotateX(e){return ki.makeRotationX(e),this.applyMatrix4(ki),this}rotateY(e){return ki.makeRotationY(e),this.applyMatrix4(ki),this}rotateZ(e){return ki.makeRotationZ(e),this.applyMatrix4(ki),this}translate(e,t,n){return ki.makeTranslation(e,t,n),this.applyMatrix4(ki),this}scale(e,t,n){return ki.makeScale(e,t,n),this.applyMatrix4(ki),this}lookAt(e){return Wh.lookAt(e),Wh.updateMatrix(),this.applyMatrix4(Wh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ya).negate(),this.translate(ya.x,ya.y,ya.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,a=e.length;s<a;s++){const l=e[s];n.push(l.x,l.y,l.z||0)}this.setAttribute("position",new Gt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new du);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new se(-1/0,-1/0,-1/0),new se(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const a=t[n];Ei.setFromBufferAttribute(a),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,Ei.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,Ei.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(Ei.min),this.boundingBox.expandByPoint(Ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new se,1/0);return}if(e){const n=this.boundingSphere.center;if(Ei.setFromBufferAttribute(e),t)for(let a=0,l=t.length;a<l;a++){const u=t[a];Gl.setFromBufferAttribute(u),this.morphTargetsRelative?(En.addVectors(Ei.min,Gl.min),Ei.expandByPoint(En),En.addVectors(Ei.max,Gl.max),Ei.expandByPoint(En)):(Ei.expandByPoint(Gl.min),Ei.expandByPoint(Gl.max))}Ei.getCenter(n);let s=0;for(let a=0,l=e.count;a<l;a++)En.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(En));if(t)for(let a=0,l=t.length;a<l;a++){const u=t[a],f=this.morphTargetsRelative;for(let d=0,h=u.count;d<h;d++)En.fromBufferAttribute(u,d),f&&(ya.fromBufferAttribute(e,d),En.add(ya)),s=Math.max(s,n.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vr(new Float32Array(4*n.count),4));const l=this.getAttribute("tangent"),u=[],f=[];for(let D=0;D<n.count;D++)u[D]=new se,f[D]=new se;const d=new se,h=new se,m=new se,g=new ut,_=new ut,S=new ut,M=new se,x=new se;function v(D,A,R){d.fromBufferAttribute(n,D),h.fromBufferAttribute(n,A),m.fromBufferAttribute(n,R),g.fromBufferAttribute(a,D),_.fromBufferAttribute(a,A),S.fromBufferAttribute(a,R),h.sub(d),m.sub(d),_.sub(g),S.sub(g);const F=1/(_.x*S.y-S.x*_.y);isFinite(F)&&(M.copy(h).multiplyScalar(S.y).addScaledVector(m,-_.y).multiplyScalar(F),x.copy(m).multiplyScalar(_.x).addScaledVector(h,-S.x).multiplyScalar(F),u[D].add(M),u[A].add(M),u[R].add(M),f[D].add(x),f[A].add(x),f[R].add(x))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let D=0,A=b.length;D<A;++D){const R=b[D],F=R.start,O=R.count;for(let B=F,G=F+O;B<G;B+=3)v(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const w=new se,T=new se,C=new se,P=new se;function I(D){C.fromBufferAttribute(s,D),P.copy(C);const A=u[D];w.copy(A),w.sub(C.multiplyScalar(C.dot(A))).normalize(),T.crossVectors(P,A);const F=T.dot(f[D])<0?-1:1;l.setXYZW(D,w.x,w.y,w.z,F)}for(let D=0,A=b.length;D<A;++D){const R=b[D],F=R.start,O=R.count;for(let B=F,G=F+O;B<G;B+=3)I(e.getX(B+0)),I(e.getX(B+1)),I(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new vr(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let g=0,_=n.count;g<_;g++)n.setXYZ(g,0,0,0);const s=new se,a=new se,l=new se,u=new se,f=new se,d=new se,h=new se,m=new se;if(e)for(let g=0,_=e.count;g<_;g+=3){const S=e.getX(g+0),M=e.getX(g+1),x=e.getX(g+2);s.fromBufferAttribute(t,S),a.fromBufferAttribute(t,M),l.fromBufferAttribute(t,x),h.subVectors(l,a),m.subVectors(s,a),h.cross(m),u.fromBufferAttribute(n,S),f.fromBufferAttribute(n,M),d.fromBufferAttribute(n,x),u.add(h),f.add(h),d.add(h),n.setXYZ(S,u.x,u.y,u.z),n.setXYZ(M,f.x,f.y,f.z),n.setXYZ(x,d.x,d.y,d.z)}else for(let g=0,_=t.count;g<_;g+=3)s.fromBufferAttribute(t,g+0),a.fromBufferAttribute(t,g+1),l.fromBufferAttribute(t,g+2),h.subVectors(l,a),m.subVectors(s,a),h.cross(m),n.setXYZ(g+0,h.x,h.y,h.z),n.setXYZ(g+1,h.x,h.y,h.z),n.setXYZ(g+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)En.fromBufferAttribute(e,t),En.normalize(),e.setXYZ(t,En.x,En.y,En.z)}toNonIndexed(){function e(u,f){const d=u.array,h=u.itemSize,m=u.normalized,g=new d.constructor(f.length*h);let _=0,S=0;for(let M=0,x=f.length;M<x;M++){u.isInterleavedBufferAttribute?_=f[M]*u.data.stride+u.offset:_=f[M]*h;for(let v=0;v<h;v++)g[S++]=d[_++]}return new vr(g,h,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _i,n=this.index.array,s=this.attributes;for(const u in s){const f=s[u],d=e(f,n);t.setAttribute(u,d)}const a=this.morphAttributes;for(const u in a){const f=[],d=a[u];for(let h=0,m=d.length;h<m;h++){const g=d[h],_=e(g,n);f.push(_)}t.morphAttributes[u]=f}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let u=0,f=l.length;u<f;u++){const d=l[u];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const d in f)f[d]!==void 0&&(e[d]=f[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const f in n){const d=n[f];e.data.attributes[f]=d.toJSON(e.data)}const s={};let a=!1;for(const f in this.morphAttributes){const d=this.morphAttributes[f],h=[];for(let m=0,g=d.length;m<g;m++){const _=d[m];h.push(_.toJSON(e.data))}h.length>0&&(s[f]=h,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const d in s){const h=s[d];this.setAttribute(d,h.clone(t))}const a=e.morphAttributes;for(const d in a){const h=[],m=a[d];for(let g=0,_=m.length;g<_;g++)h.push(m[g].clone(t));this.morphAttributes[d]=h}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let d=0,h=l.length;d<h;d++){const m=l[d];this.addGroup(m.start,m.count,m.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fv=new sn,uo=new Ky,zc=new bf,dv=new se,Bc=new se,Vc=new se,Hc=new se,Xh=new se,Gc=new se,hv=new se,Wc=new se;class ui extends mn{constructor(e=new _i,t=new nu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=s.length;a<l;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const u=this.morphTargetInfluences;if(a&&u){Gc.set(0,0,0);for(let f=0,d=a.length;f<d;f++){const h=u[f],m=a[f];h!==0&&(Xh.fromBufferAttribute(m,e),l?Gc.addScaledVector(Xh,h):Gc.addScaledVector(Xh.sub(t),h))}t.add(Gc)}return t}raycast(e,t){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zc.copy(n.boundingSphere),zc.applyMatrix4(a),uo.copy(e.ray).recast(e.near),!(zc.containsPoint(uo.origin)===!1&&(uo.intersectSphere(zc,dv)===null||uo.origin.distanceToSquared(dv)>(e.far-e.near)**2))&&(fv.copy(a).invert(),uo.copy(e.ray).applyMatrix4(fv),!(n.boundingBox!==null&&uo.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,uo)))}_computeIntersections(e,t,n){let s;const a=this.geometry,l=this.material,u=a.index,f=a.attributes.position,d=a.attributes.uv,h=a.attributes.uv1,m=a.attributes.normal,g=a.groups,_=a.drawRange;if(u!==null)if(Array.isArray(l))for(let S=0,M=g.length;S<M;S++){const x=g[S],v=l[x.materialIndex],b=Math.max(x.start,_.start),w=Math.min(u.count,Math.min(x.start+x.count,_.start+_.count));for(let T=b,C=w;T<C;T+=3){const P=u.getX(T),I=u.getX(T+1),D=u.getX(T+2);s=Xc(this,v,e,n,d,h,m,P,I,D),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const S=Math.max(0,_.start),M=Math.min(u.count,_.start+_.count);for(let x=S,v=M;x<v;x+=3){const b=u.getX(x),w=u.getX(x+1),T=u.getX(x+2);s=Xc(this,l,e,n,d,h,m,b,w,T),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(f!==void 0)if(Array.isArray(l))for(let S=0,M=g.length;S<M;S++){const x=g[S],v=l[x.materialIndex],b=Math.max(x.start,_.start),w=Math.min(f.count,Math.min(x.start+x.count,_.start+_.count));for(let T=b,C=w;T<C;T+=3){const P=T,I=T+1,D=T+2;s=Xc(this,v,e,n,d,h,m,P,I,D),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const S=Math.max(0,_.start),M=Math.min(f.count,_.start+_.count);for(let x=S,v=M;x<v;x+=3){const b=x,w=x+1,T=x+2;s=Xc(this,l,e,n,d,h,m,b,w,T),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}}function cT(r,e,t,n,s,a,l,u){let f;if(e.side===ci?f=n.intersectTriangle(l,a,s,!0,u):f=n.intersectTriangle(s,a,l,e.side===Vs,u),f===null)return null;Wc.copy(u),Wc.applyMatrix4(r.matrixWorld);const d=t.ray.origin.distanceTo(Wc);return d<t.near||d>t.far?null:{distance:d,point:Wc.clone(),object:r}}function Xc(r,e,t,n,s,a,l,u,f,d){r.getVertexPosition(u,Bc),r.getVertexPosition(f,Vc),r.getVertexPosition(d,Hc);const h=cT(r,e,t,n,Bc,Vc,Hc,hv);if(h){const m=new se;er.getBarycoord(hv,Bc,Vc,Hc,m),s&&(h.uv=er.getInterpolatedAttribute(s,u,f,d,m,new ut)),a&&(h.uv1=er.getInterpolatedAttribute(a,u,f,d,m,new ut)),l&&(h.normal=er.getInterpolatedAttribute(l,u,f,d,m,new se),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const g={a:u,b:f,c:d,normal:new se,materialIndex:0};er.getNormal(Bc,Vc,Hc,g.normal),h.face=g,h.barycoord=m}return h}class nl extends _i{constructor(e=1,t=1,n=1,s=1,a=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:a,depthSegments:l};const u=this;s=Math.floor(s),a=Math.floor(a),l=Math.floor(l);const f=[],d=[],h=[],m=[];let g=0,_=0;S("z","y","x",-1,-1,n,t,e,l,a,0),S("z","y","x",1,-1,n,t,-e,l,a,1),S("x","z","y",1,1,e,n,t,s,l,2),S("x","z","y",1,-1,e,n,-t,s,l,3),S("x","y","z",1,-1,e,t,n,s,a,4),S("x","y","z",-1,-1,e,t,-n,s,a,5),this.setIndex(f),this.setAttribute("position",new Gt(d,3)),this.setAttribute("normal",new Gt(h,3)),this.setAttribute("uv",new Gt(m,2));function S(M,x,v,b,w,T,C,P,I,D,A){const R=T/I,F=C/D,O=T/2,B=C/2,G=P/2,Z=I+1,q=D+1;let $=0,H=0;const J=new se;for(let ee=0;ee<q;ee++){const z=ee*F-B;for(let te=0;te<Z;te++){const Ce=te*R-O;J[M]=Ce*b,J[x]=z*w,J[v]=G,d.push(J.x,J.y,J.z),J[M]=0,J[x]=0,J[v]=P>0?1:-1,h.push(J.x,J.y,J.z),m.push(te/I),m.push(1-ee/D),$+=1}}for(let ee=0;ee<D;ee++)for(let z=0;z<I;z++){const te=g+z+Z*ee,Ce=g+z+Z*(ee+1),ne=g+(z+1)+Z*(ee+1),le=g+(z+1)+Z*ee;f.push(te,Ce,le),f.push(Ce,ne,le),H+=6}u.addGroup(_,H,A),_+=H,g+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ga(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const s=r[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Qn(r){const e={};for(let t=0;t<r.length;t++){const n=Ga(r[t]);for(const s in n)e[s]=n[s]}return e}function fT(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function nx(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const ix={clone:Ga,merge:Qn};var dT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ir extends tl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dT,this.fragmentShader=hT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ga(e.uniforms),this.uniformsGroups=fT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const l=this.uniforms[s].value;l&&l.isTexture?t.uniforms[s]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[s]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[s]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[s]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[s]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[s]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[s]={type:"m4",value:l.toArray()}:t.uniforms[s]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class rx extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=Yr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ps=new se,pv=new ut,mv=new ut;class Vi extends rx{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=tu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($l*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tu*2*Math.atan(Math.tan($l*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ps.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ps.x,Ps.y).multiplyScalar(-e/Ps.z),Ps.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ps.x,Ps.y).multiplyScalar(-e/Ps.z)}getViewSize(e,t){return this.getViewBounds(e,pv,mv),t.subVectors(mv,pv)}setViewOffset(e,t,n,s,a,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($l*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,a=-.5*s;const l=this.view;if(this.view!==null&&this.view.enabled){const f=l.fullWidth,d=l.fullHeight;a+=l.offsetX*s/f,t-=l.offsetY*n/d,s*=l.width/f,n*=l.height/d}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const xa=-90,Sa=1;class pT extends mn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Vi(xa,Sa,e,t);s.layers=this.layers,this.add(s);const a=new Vi(xa,Sa,e,t);a.layers=this.layers,this.add(a);const l=new Vi(xa,Sa,e,t);l.layers=this.layers,this.add(l);const u=new Vi(xa,Sa,e,t);u.layers=this.layers,this.add(u);const f=new Vi(xa,Sa,e,t);f.layers=this.layers,this.add(f);const d=new Vi(xa,Sa,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,a,l,u,f]=t;for(const d of t)this.remove(d);if(e===Yr)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===hf)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,l,u,f,d,h]=this.children,m=e.getRenderTarget(),g=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,a),e.setRenderTarget(n,1,s),e.render(t,l),e.setRenderTarget(n,2,s),e.render(t,u),e.setRenderTarget(n,3,s),e.render(t,f),e.setRenderTarget(n,4,s),e.render(t,d),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(m,g,_),e.xr.enabled=S,n.texture.needsPMREMUpdate=!0}}class sx extends Vn{constructor(e,t,n,s,a,l,u,f,d,h){e=e!==void 0?e:[],t=t!==void 0?t:ka,super(e,t,n,s,a,l,u,f,d,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mT extends nr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new sx(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Tn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new nl(5,5,5),a=new ir({name:"CubemapFromEquirect",uniforms:Ga(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ci,blending:jr});a.uniforms.tEquirect.value=t;const l=new ui(s,a),u=t.minFilter;return t.minFilter===wo&&(t.minFilter=Tn),new pT(1,10,this).update(e,l),t.minFilter=u,l.geometry.dispose(),l.material.dispose(),this}clear(e,t,n,s){const a=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,s);e.setRenderTarget(a)}}let ox=class extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sr,this.environmentIntensity=1,this.environmentRotation=new Sr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};const qh=new se,gT=new se,_T=new ot;class vo{constructor(e=new se(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=qh.subVectors(n,t).cross(gT.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(qh),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||_T.getNormalMatrix(e),s=this.coplanarPoint(qh).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const co=new bf,qc=new se;class ax{constructor(e=new vo,t=new vo,n=new vo,s=new vo,a=new vo,l=new vo){this.planes=[e,t,n,s,a,l]}set(e,t,n,s,a,l){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(n),u[3].copy(s),u[4].copy(a),u[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Yr){const n=this.planes,s=e.elements,a=s[0],l=s[1],u=s[2],f=s[3],d=s[4],h=s[5],m=s[6],g=s[7],_=s[8],S=s[9],M=s[10],x=s[11],v=s[12],b=s[13],w=s[14],T=s[15];if(n[0].setComponents(f-a,g-d,x-_,T-v).normalize(),n[1].setComponents(f+a,g+d,x+_,T+v).normalize(),n[2].setComponents(f+l,g+h,x+S,T+b).normalize(),n[3].setComponents(f-l,g-h,x-S,T-b).normalize(),n[4].setComponents(f-u,g-m,x-M,T-w).normalize(),t===Yr)n[5].setComponents(f+u,g+m,x+M,T+w).normalize();else if(t===hf)n[5].setComponents(u,m,M,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),co.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),co.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(co)}intersectsSprite(e){return co.center.set(0,0,0),co.radius=.7071067811865476,co.applyMatrix4(e.matrixWorld),this.intersectsSphere(co)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(qc.x=s.normal.x>0?e.max.x:e.min.x,qc.y=s.normal.y>0?e.max.y:e.min.y,qc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(qc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vT extends tl{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const gv=new sn,$p=new Ky,Yc=new bf,jc=new se;class Vr extends mn{constructor(e=new _i,t=new vT){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yc.copy(n.boundingSphere),Yc.applyMatrix4(s),Yc.radius+=a,e.ray.intersectsSphere(Yc)===!1)return;gv.copy(s).invert(),$p.copy(e.ray).applyMatrix4(gv);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,d=n.index,m=n.attributes.position;if(d!==null){const g=Math.max(0,l.start),_=Math.min(d.count,l.start+l.count);for(let S=g,M=_;S<M;S++){const x=d.getX(S);jc.fromBufferAttribute(m,x),_v(jc,x,f,s,e,t,this)}}else{const g=Math.max(0,l.start),_=Math.min(m.count,l.start+l.count);for(let S=g,M=_;S<M;S++)jc.fromBufferAttribute(m,S),_v(jc,S,f,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=s.length;a<l;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function _v(r,e,t,n,s,a,l){const u=$p.distanceSqToPoint(r);if(u<t){const f=new se;$p.closestPointToPoint(r,f),f.applyMatrix4(n);const d=s.ray.origin.distanceTo(f);if(d<s.near||d>s.far)return;a.push({distance:d,distanceToRay:Math.sqrt(u),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:l})}}class Xl extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class yT extends Vn{constructor(e,t,n,s,a,l,u,f,d){super(e,t,n,s,a,l,u,f,d),this.isVideoTexture=!0,this.minFilter=l!==void 0?l:Tn,this.magFilter=a!==void 0?a:Tn,this.generateMipmaps=!1;const h=this;function m(){h.needsUpdate=!0,e.requestVideoFrameCallback(m)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(m)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class lx extends Vn{constructor(e,t,n,s,a,l,u,f,d){super(e,t,n,s,a,l,u,f,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ux extends Vn{constructor(e,t,n,s,a,l,u,f,d,h=Ia){if(h!==Ia&&h!==Va)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ia&&(n=Do),n===void 0&&h===Va&&(n=Ba),super(null,s,a,l,u,f,h,n,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:tr,this.minFilter=f!==void 0?f:tr,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Pf extends _i{constructor(e=1,t=1,n=1,s=32,a=1,l=!1,u=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:a,openEnded:l,thetaStart:u,thetaLength:f};const d=this;s=Math.floor(s),a=Math.floor(a);const h=[],m=[],g=[],_=[];let S=0;const M=[],x=n/2;let v=0;b(),l===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new Gt(m,3)),this.setAttribute("normal",new Gt(g,3)),this.setAttribute("uv",new Gt(_,2));function b(){const T=new se,C=new se;let P=0;const I=(t-e)/n;for(let D=0;D<=a;D++){const A=[],R=D/a,F=R*(t-e)+e;for(let O=0;O<=s;O++){const B=O/s,G=B*f+u,Z=Math.sin(G),q=Math.cos(G);C.x=F*Z,C.y=-R*n+x,C.z=F*q,m.push(C.x,C.y,C.z),T.set(Z,I,q).normalize(),g.push(T.x,T.y,T.z),_.push(B,1-R),A.push(S++)}M.push(A)}for(let D=0;D<s;D++)for(let A=0;A<a;A++){const R=M[A][D],F=M[A+1][D],O=M[A+1][D+1],B=M[A][D+1];(e>0||A!==0)&&(h.push(R,F,B),P+=3),(t>0||A!==a-1)&&(h.push(F,O,B),P+=3)}d.addGroup(v,P,0),v+=P}function w(T){const C=S,P=new ut,I=new se;let D=0;const A=T===!0?e:t,R=T===!0?1:-1;for(let O=1;O<=s;O++)m.push(0,x*R,0),g.push(0,R,0),_.push(.5,.5),S++;const F=S;for(let O=0;O<=s;O++){const G=O/s*f+u,Z=Math.cos(G),q=Math.sin(G);I.x=A*q,I.y=x*R,I.z=A*Z,m.push(I.x,I.y,I.z),g.push(0,R,0),P.x=Z*.5+.5,P.y=q*.5*R+.5,_.push(P.x,P.y),S++}for(let O=0;O<s;O++){const B=C+O,G=F+O;T===!0?h.push(G,G+1,B):h.push(G+1,G,B),D+=3}d.addGroup(v,D,T===!0?1:2),v+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pf(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Rm extends Pf{constructor(e=1,t=1,n=32,s=1,a=!1,l=0,u=Math.PI*2){super(0,e,t,n,s,a,l,u),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:l,thetaLength:u}}static fromJSON(e){return new Rm(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Df extends _i{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const a=[],l=[];u(s),d(n),h(),this.setAttribute("position",new Gt(a,3)),this.setAttribute("normal",new Gt(a.slice(),3)),this.setAttribute("uv",new Gt(l,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function u(b){const w=new se,T=new se,C=new se;for(let P=0;P<t.length;P+=3)_(t[P+0],w),_(t[P+1],T),_(t[P+2],C),f(w,T,C,b)}function f(b,w,T,C){const P=C+1,I=[];for(let D=0;D<=P;D++){I[D]=[];const A=b.clone().lerp(T,D/P),R=w.clone().lerp(T,D/P),F=P-D;for(let O=0;O<=F;O++)O===0&&D===P?I[D][O]=A:I[D][O]=A.clone().lerp(R,O/F)}for(let D=0;D<P;D++)for(let A=0;A<2*(P-D)-1;A++){const R=Math.floor(A/2);A%2===0?(g(I[D][R+1]),g(I[D+1][R]),g(I[D][R])):(g(I[D][R+1]),g(I[D+1][R+1]),g(I[D+1][R]))}}function d(b){const w=new se;for(let T=0;T<a.length;T+=3)w.x=a[T+0],w.y=a[T+1],w.z=a[T+2],w.normalize().multiplyScalar(b),a[T+0]=w.x,a[T+1]=w.y,a[T+2]=w.z}function h(){const b=new se;for(let w=0;w<a.length;w+=3){b.x=a[w+0],b.y=a[w+1],b.z=a[w+2];const T=x(b)/2/Math.PI+.5,C=v(b)/Math.PI+.5;l.push(T,1-C)}S(),m()}function m(){for(let b=0;b<l.length;b+=6){const w=l[b+0],T=l[b+2],C=l[b+4],P=Math.max(w,T,C),I=Math.min(w,T,C);P>.9&&I<.1&&(w<.2&&(l[b+0]+=1),T<.2&&(l[b+2]+=1),C<.2&&(l[b+4]+=1))}}function g(b){a.push(b.x,b.y,b.z)}function _(b,w){const T=b*3;w.x=e[T+0],w.y=e[T+1],w.z=e[T+2]}function S(){const b=new se,w=new se,T=new se,C=new se,P=new ut,I=new ut,D=new ut;for(let A=0,R=0;A<a.length;A+=9,R+=6){b.set(a[A+0],a[A+1],a[A+2]),w.set(a[A+3],a[A+4],a[A+5]),T.set(a[A+6],a[A+7],a[A+8]),P.set(l[R+0],l[R+1]),I.set(l[R+2],l[R+3]),D.set(l[R+4],l[R+5]),C.copy(b).add(w).add(T).divideScalar(3);const F=x(C);M(P,R+0,b,F),M(I,R+2,w,F),M(D,R+4,T,F)}}function M(b,w,T,C){C<0&&b.x===1&&(l[w]=b.x-1),T.x===0&&T.z===0&&(l[w]=C/2/Math.PI+.5)}function x(b){return Math.atan2(b.z,-b.x)}function v(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Df(e.vertices,e.indices,e.radius,e.details)}}class bm extends Df{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,a,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new bm(e.radius,e.detail)}}class Pm extends Df{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Pm(e.radius,e.detail)}}class Qr extends _i{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const a=e/2,l=t/2,u=Math.floor(n),f=Math.floor(s),d=u+1,h=f+1,m=e/u,g=t/f,_=[],S=[],M=[],x=[];for(let v=0;v<h;v++){const b=v*g-l;for(let w=0;w<d;w++){const T=w*m-a;S.push(T,-b,0),M.push(0,0,1),x.push(w/u),x.push(1-v/f)}}for(let v=0;v<f;v++)for(let b=0;b<u;b++){const w=b+d*v,T=b+d*(v+1),C=b+1+d*(v+1),P=b+1+d*v;_.push(w,T,P),_.push(T,C,P)}this.setIndex(_),this.setAttribute("position",new Gt(S,3)),this.setAttribute("normal",new Gt(M,3)),this.setAttribute("uv",new Gt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Dm extends _i{constructor(e=.5,t=1,n=32,s=1,a=0,l=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:a,thetaLength:l},n=Math.max(3,n),s=Math.max(1,s);const u=[],f=[],d=[],h=[];let m=e;const g=(t-e)/s,_=new se,S=new ut;for(let M=0;M<=s;M++){for(let x=0;x<=n;x++){const v=a+x/n*l;_.x=m*Math.cos(v),_.y=m*Math.sin(v),f.push(_.x,_.y,_.z),d.push(0,0,1),S.x=(_.x/t+1)/2,S.y=(_.y/t+1)/2,h.push(S.x,S.y)}m+=g}for(let M=0;M<s;M++){const x=M*(n+1);for(let v=0;v<n;v++){const b=v+x,w=b,T=b+n+1,C=b+n+2,P=b+1;u.push(w,T,P),u.push(T,C,P)}}this.setIndex(u),this.setAttribute("position",new Gt(f,3)),this.setAttribute("normal",new Gt(d,3)),this.setAttribute("uv",new Gt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dm(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Im extends _i{constructor(e=1,t=32,n=16,s=0,a=Math.PI*2,l=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:a,thetaStart:l,thetaLength:u},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const f=Math.min(l+u,Math.PI);let d=0;const h=[],m=new se,g=new se,_=[],S=[],M=[],x=[];for(let v=0;v<=n;v++){const b=[],w=v/n;let T=0;v===0&&l===0?T=.5/t:v===n&&f===Math.PI&&(T=-.5/t);for(let C=0;C<=t;C++){const P=C/t;m.x=-e*Math.cos(s+P*a)*Math.sin(l+w*u),m.y=e*Math.cos(l+w*u),m.z=e*Math.sin(s+P*a)*Math.sin(l+w*u),S.push(m.x,m.y,m.z),g.copy(m).normalize(),M.push(g.x,g.y,g.z),x.push(P+T,1-w),b.push(d++)}h.push(b)}for(let v=0;v<n;v++)for(let b=0;b<t;b++){const w=h[v][b+1],T=h[v][b],C=h[v+1][b],P=h[v+1][b+1];(v!==0||l>0)&&_.push(w,T,P),(v!==n-1||f<Math.PI)&&_.push(T,C,P)}this.setIndex(_),this.setAttribute("position",new Gt(S,3)),this.setAttribute("normal",new Gt(M,3)),this.setAttribute("uv",new Gt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Im(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Nm extends _i{constructor(e=1,t=.4,n=12,s=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:a},n=Math.floor(n),s=Math.floor(s);const l=[],u=[],f=[],d=[],h=new se,m=new se,g=new se;for(let _=0;_<=n;_++)for(let S=0;S<=s;S++){const M=S/s*a,x=_/n*Math.PI*2;m.x=(e+t*Math.cos(x))*Math.cos(M),m.y=(e+t*Math.cos(x))*Math.sin(M),m.z=t*Math.sin(x),u.push(m.x,m.y,m.z),h.x=e*Math.cos(M),h.y=e*Math.sin(M),g.subVectors(m,h).normalize(),f.push(g.x,g.y,g.z),d.push(S/s),d.push(_/n)}for(let _=1;_<=n;_++)for(let S=1;S<=s;S++){const M=(s+1)*_+S-1,x=(s+1)*(_-1)+S-1,v=(s+1)*(_-1)+S,b=(s+1)*_+S;l.push(M,x,b),l.push(x,v,b)}this.setIndex(l),this.setAttribute("position",new Gt(u,3)),this.setAttribute("normal",new Gt(f,3)),this.setAttribute("uv",new Gt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nm(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class xT extends tl{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qy,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ST extends tl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class MT extends tl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vv={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class ET{constructor(e,t,n){const s=this;let a=!1,l=0,u=0,f;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){u++,a===!1&&s.onStart!==void 0&&s.onStart(h,l,u),a=!0},this.itemEnd=function(h){l++,s.onProgress!==void 0&&s.onProgress(h,l,u),l===u&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return f?f(h):h},this.setURLModifier=function(h){return f=h,this},this.addHandler=function(h,m){return d.push(h,m),this},this.removeHandler=function(h){const m=d.indexOf(h);return m!==-1&&d.splice(m,2),this},this.getHandler=function(h){for(let m=0,g=d.length;m<g;m+=2){const _=d[m],S=d[m+1];if(_.global&&(_.lastIndex=0),_.test(h))return S}return null}}}const TT=new ET;class Lm{constructor(e){this.manager=e!==void 0?e:TT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,a){n.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Lm.DEFAULT_MATERIAL_NAME="__DEFAULT";const Hr={};class wT extends Error{constructor(e,t){super(e),this.response=t}}class CT extends Lm{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=vv.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(Hr[e]!==void 0){Hr[e].push({onLoad:t,onProgress:n,onError:s});return}Hr[e]=[],Hr[e].push({onLoad:t,onProgress:n,onError:s});const l=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),u=this.mimeType,f=this.responseType;fetch(l).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const h=Hr[e],m=d.body.getReader(),g=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),_=g?parseInt(g):0,S=_!==0;let M=0;const x=new ReadableStream({start(v){b();function b(){m.read().then(({done:w,value:T})=>{if(w)v.close();else{M+=T.byteLength;const C=new ProgressEvent("progress",{lengthComputable:S,loaded:M,total:_});for(let P=0,I=h.length;P<I;P++){const D=h[P];D.onProgress&&D.onProgress(C)}v.enqueue(T),b()}},w=>{v.error(w)})}}});return new Response(x)}else throw new wT(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(f){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(h=>new DOMParser().parseFromString(h,u));case"json":return d.json();default:if(u===void 0)return d.text();{const m=/charset="?([^;"\s]*)"?/i.exec(u),g=m&&m[1]?m[1].toLowerCase():void 0,_=new TextDecoder(g);return d.arrayBuffer().then(S=>_.decode(S))}}}).then(d=>{vv.add(e,d);const h=Hr[e];delete Hr[e];for(let m=0,g=h.length;m<g;m++){const _=h[m];_.onLoad&&_.onLoad(d)}}).catch(d=>{const h=Hr[e];if(h===void 0)throw this.manager.itemError(e),d;delete Hr[e];for(let m=0,g=h.length;m<g;m++){const _=h[m];_.onError&&_.onError(d)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Fm extends rx{constructor(e=-1,t=1,n=1,s=-1,a=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=a,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,a,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-e,l=n+e,u=s+t,f=s-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,l=a+d*this.view.width,u-=h*this.view.offsetY,f=u-h*this.view.height}this.projectionMatrix.makeOrthographic(a,l,u,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}let $c;class cx{static getContext(){return $c===void 0&&($c=new(window.AudioContext||window.webkitAudioContext)),$c}static setContext(e){$c=e}}class AT extends Lm{constructor(e){super(e)}load(e,t,n,s){const a=this,l=new CT(this.manager);l.setResponseType("arraybuffer"),l.setPath(this.path),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(f){try{const d=f.slice(0);cx.getContext().decodeAudioData(d,function(m){t(m)}).catch(u)}catch(d){u(d)}},n,s);function u(f){s?s(f):console.error(f),a.manager.itemError(e)}}}class RT extends Vi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Um{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=yv(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=yv();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function yv(){return performance.now()}const fo=new se,xv=new el,bT=new se,ho=new se;class PT extends mn{constructor(){super(),this.type="AudioListener",this.context=cx.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Um}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(fo,xv,bT),ho.set(0,0,-1).applyQuaternion(xv),t.positionX){const s=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(fo.x,s),t.positionY.linearRampToValueAtTime(fo.y,s),t.positionZ.linearRampToValueAtTime(fo.z,s),t.forwardX.linearRampToValueAtTime(ho.x,s),t.forwardY.linearRampToValueAtTime(ho.y,s),t.forwardZ.linearRampToValueAtTime(ho.z,s),t.upX.linearRampToValueAtTime(n.x,s),t.upY.linearRampToValueAtTime(n.y,s),t.upZ.linearRampToValueAtTime(n.z,s)}else t.setPosition(fo.x,fo.y,fo.z),t.setOrientation(ho.x,ho.y,ho.z,n.x,n.y,n.z)}}class DT extends mn{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(console.warn("THREE.Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}}class Sv{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}function Mv(r,e,t,n){const s=IT(n);switch(t){case zy:return r*e;case Vy:return r*e;case Hy:return r*e*2;case Gy:return r*e/s.components*s.byteLength;case Tm:return r*e/s.components*s.byteLength;case Wy:return r*e*2/s.components*s.byteLength;case wm:return r*e*2/s.components*s.byteLength;case By:return r*e*3/s.components*s.byteLength;case Ci:return r*e*4/s.components*s.byteLength;case Cm:return r*e*4/s.components*s.byteLength;case tf:case nf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case rf:case sf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Tp:case Cp:return Math.max(r,16)*Math.max(e,8)/4;case Ep:case wp:return Math.max(r,8)*Math.max(e,8)/2;case Ap:case Rp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case bp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Pp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Dp:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Ip:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Np:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Lp:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Fp:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Up:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Op:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case kp:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case zp:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Bp:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Vp:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Hp:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Gp:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case of:case Wp:case Xp:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Xy:case qp:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Yp:case jp:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function IT(r){switch(r){case Kr:case Uy:return{byteLength:1,components:1};case eu:case Oy:case Qa:return{byteLength:2,components:1};case Mm:case Em:return{byteLength:2,components:4};case Do:case Sm:case gr:return{byteLength:4,components:1};case ky:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xm);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function fx(){let r=null,e=!1,t=null,n=null;function s(a,l){t(a,l),n=r.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(s),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){r=a}}}function NT(r){const e=new WeakMap;function t(u,f){const d=u.array,h=u.usage,m=d.byteLength,g=r.createBuffer();r.bindBuffer(f,g),r.bufferData(f,d,h),u.onUploadCallback();let _;if(d instanceof Float32Array)_=r.FLOAT;else if(d instanceof Uint16Array)u.isFloat16BufferAttribute?_=r.HALF_FLOAT:_=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=r.SHORT;else if(d instanceof Uint32Array)_=r.UNSIGNED_INT;else if(d instanceof Int32Array)_=r.INT;else if(d instanceof Int8Array)_=r.BYTE;else if(d instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:m}}function n(u,f,d){const h=f.array,m=f.updateRanges;if(r.bindBuffer(d,u),m.length===0)r.bufferSubData(d,0,h);else{m.sort((_,S)=>_.start-S.start);let g=0;for(let _=1;_<m.length;_++){const S=m[g],M=m[_];M.start<=S.start+S.count+1?S.count=Math.max(S.count,M.start+M.count-S.start):(++g,m[g]=M)}m.length=g+1;for(let _=0,S=m.length;_<S;_++){const M=m[_];r.bufferSubData(d,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}f.clearUpdateRanges()}f.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=e.get(u);f&&(r.deleteBuffer(f.buffer),e.delete(u))}function l(u,f){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const h=e.get(u);(!h||h.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const d=e.get(u);if(d===void 0)e.set(u,t(u,f));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(d.buffer,u,f),d.version=u.version}}return{get:s,remove:a,update:l}}var LT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,FT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,UT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,OT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,BT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,VT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,HT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,GT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,WT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,XT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,YT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,jT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$T=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ZT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,KT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,QT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,JT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ew=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,iw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,rw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ow=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,aw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cw="gl_FragColor = linearToOutputTexel( gl_FragColor );",fw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,hw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_w=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Mw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ew=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ww=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Cw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Aw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Iw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Nw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Lw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Fw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Uw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ow=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Gw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ww=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$w=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Zw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Qw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nC=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,iC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,aC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,uC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mC=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,gC=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_C=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xC=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,SC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,MC=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,EC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,TC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,CC=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,AC=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,RC=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,bC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,PC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,DC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,IC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const NC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,LC=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UC=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,BC=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,VC=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,HC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,GC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,WC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XC=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$C=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KC=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,QC=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JC=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,eA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,lA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lt={alphahash_fragment:LT,alphahash_pars_fragment:FT,alphamap_fragment:UT,alphamap_pars_fragment:OT,alphatest_fragment:kT,alphatest_pars_fragment:zT,aomap_fragment:BT,aomap_pars_fragment:VT,batching_pars_vertex:HT,batching_vertex:GT,begin_vertex:WT,beginnormal_vertex:XT,bsdfs:qT,iridescence_fragment:YT,bumpmap_pars_fragment:jT,clipping_planes_fragment:$T,clipping_planes_pars_fragment:ZT,clipping_planes_pars_vertex:KT,clipping_planes_vertex:QT,color_fragment:JT,color_pars_fragment:ew,color_pars_vertex:tw,color_vertex:nw,common:iw,cube_uv_reflection_fragment:rw,defaultnormal_vertex:sw,displacementmap_pars_vertex:ow,displacementmap_vertex:aw,emissivemap_fragment:lw,emissivemap_pars_fragment:uw,colorspace_fragment:cw,colorspace_pars_fragment:fw,envmap_fragment:dw,envmap_common_pars_fragment:hw,envmap_pars_fragment:pw,envmap_pars_vertex:mw,envmap_physical_pars_fragment:Cw,envmap_vertex:gw,fog_vertex:_w,fog_pars_vertex:vw,fog_fragment:yw,fog_pars_fragment:xw,gradientmap_pars_fragment:Sw,lightmap_pars_fragment:Mw,lights_lambert_fragment:Ew,lights_lambert_pars_fragment:Tw,lights_pars_begin:ww,lights_toon_fragment:Aw,lights_toon_pars_fragment:Rw,lights_phong_fragment:bw,lights_phong_pars_fragment:Pw,lights_physical_fragment:Dw,lights_physical_pars_fragment:Iw,lights_fragment_begin:Nw,lights_fragment_maps:Lw,lights_fragment_end:Fw,logdepthbuf_fragment:Uw,logdepthbuf_pars_fragment:Ow,logdepthbuf_pars_vertex:kw,logdepthbuf_vertex:zw,map_fragment:Bw,map_pars_fragment:Vw,map_particle_fragment:Hw,map_particle_pars_fragment:Gw,metalnessmap_fragment:Ww,metalnessmap_pars_fragment:Xw,morphinstance_vertex:qw,morphcolor_vertex:Yw,morphnormal_vertex:jw,morphtarget_pars_vertex:$w,morphtarget_vertex:Zw,normal_fragment_begin:Kw,normal_fragment_maps:Qw,normal_pars_fragment:Jw,normal_pars_vertex:eC,normal_vertex:tC,normalmap_pars_fragment:nC,clearcoat_normal_fragment_begin:iC,clearcoat_normal_fragment_maps:rC,clearcoat_pars_fragment:sC,iridescence_pars_fragment:oC,opaque_fragment:aC,packing:lC,premultiplied_alpha_fragment:uC,project_vertex:cC,dithering_fragment:fC,dithering_pars_fragment:dC,roughnessmap_fragment:hC,roughnessmap_pars_fragment:pC,shadowmap_pars_fragment:mC,shadowmap_pars_vertex:gC,shadowmap_vertex:_C,shadowmask_pars_fragment:vC,skinbase_vertex:yC,skinning_pars_vertex:xC,skinning_vertex:SC,skinnormal_vertex:MC,specularmap_fragment:EC,specularmap_pars_fragment:TC,tonemapping_fragment:wC,tonemapping_pars_fragment:CC,transmission_fragment:AC,transmission_pars_fragment:RC,uv_pars_fragment:bC,uv_pars_vertex:PC,uv_vertex:DC,worldpos_vertex:IC,background_vert:NC,background_frag:LC,backgroundCube_vert:FC,backgroundCube_frag:UC,cube_vert:OC,cube_frag:kC,depth_vert:zC,depth_frag:BC,distanceRGBA_vert:VC,distanceRGBA_frag:HC,equirect_vert:GC,equirect_frag:WC,linedashed_vert:XC,linedashed_frag:qC,meshbasic_vert:YC,meshbasic_frag:jC,meshlambert_vert:$C,meshlambert_frag:ZC,meshmatcap_vert:KC,meshmatcap_frag:QC,meshnormal_vert:JC,meshnormal_frag:eA,meshphong_vert:tA,meshphong_frag:nA,meshphysical_vert:iA,meshphysical_frag:rA,meshtoon_vert:sA,meshtoon_frag:oA,points_vert:aA,points_frag:lA,shadow_vert:uA,shadow_frag:cA,sprite_vert:fA,sprite_frag:dA},Pe={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},hr={basic:{uniforms:Qn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:Qn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new ft(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:Qn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:Qn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:Qn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new ft(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:Qn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:Qn([Pe.points,Pe.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:Qn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:Qn([Pe.common,Pe.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:Qn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:Qn([Pe.sprite,Pe.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:Qn([Pe.common,Pe.displacementmap,{referencePosition:{value:new se},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:Qn([Pe.lights,Pe.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};hr.physical={uniforms:Qn([hr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const Zc={r:0,b:0,g:0},po=new Sr,hA=new sn;function pA(r,e,t,n,s,a,l){const u=new ft(0);let f=a===!0?0:1,d,h,m=null,g=0,_=null;function S(w){let T=w.isScene===!0?w.background:null;return T&&T.isTexture&&(T=(w.backgroundBlurriness>0?t:e).get(T)),T}function M(w){let T=!1;const C=S(w);C===null?v(u,f):C&&C.isColor&&(v(C,1),T=!0);const P=r.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,l):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(r.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(w,T){const C=S(T);C&&(C.isCubeTexture||C.mapping===Rf)?(h===void 0&&(h=new ui(new nl(1,1,1),new ir({name:"BackgroundCubeMaterial",uniforms:Ga(hr.backgroundCube.uniforms),vertexShader:hr.backgroundCube.vertexShader,fragmentShader:hr.backgroundCube.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,I,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),po.copy(T.backgroundRotation),po.x*=-1,po.y*=-1,po.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(po.y*=-1,po.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(hA.makeRotationFromEuler(po)),h.material.toneMapped=Ct.getTransfer(C.colorSpace)!==Pt,(m!==C||g!==C.version||_!==r.toneMapping)&&(h.material.needsUpdate=!0,m=C,g=C.version,_=r.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(d===void 0&&(d=new ui(new Qr(2,2),new ir({name:"BackgroundMaterial",uniforms:Ga(hr.background.uniforms),vertexShader:hr.background.vertexShader,fragmentShader:hr.background.fragmentShader,side:Vs,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(d)),d.material.uniforms.t2D.value=C,d.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,d.material.toneMapped=Ct.getTransfer(C.colorSpace)!==Pt,C.matrixAutoUpdate===!0&&C.updateMatrix(),d.material.uniforms.uvTransform.value.copy(C.matrix),(m!==C||g!==C.version||_!==r.toneMapping)&&(d.material.needsUpdate=!0,m=C,g=C.version,_=r.toneMapping),d.layers.enableAll(),w.unshift(d,d.geometry,d.material,0,0,null))}function v(w,T){w.getRGB(Zc,nx(r)),n.buffers.color.setClear(Zc.r,Zc.g,Zc.b,T,l)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),d!==void 0&&(d.geometry.dispose(),d.material.dispose())}return{getClearColor:function(){return u},setClearColor:function(w,T=1){u.set(w),f=T,v(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(w){f=w,v(u,f)},render:M,addToRenderList:x,dispose:b}}function mA(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},s=g(null);let a=s,l=!1;function u(R,F,O,B,G){let Z=!1;const q=m(B,O,F);a!==q&&(a=q,d(a.object)),Z=_(R,B,O,G),Z&&S(R,B,O,G),G!==null&&e.update(G,r.ELEMENT_ARRAY_BUFFER),(Z||l)&&(l=!1,T(R,F,O,B),G!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function f(){return r.createVertexArray()}function d(R){return r.bindVertexArray(R)}function h(R){return r.deleteVertexArray(R)}function m(R,F,O){const B=O.wireframe===!0;let G=n[R.id];G===void 0&&(G={},n[R.id]=G);let Z=G[F.id];Z===void 0&&(Z={},G[F.id]=Z);let q=Z[B];return q===void 0&&(q=g(f()),Z[B]=q),q}function g(R){const F=[],O=[],B=[];for(let G=0;G<t;G++)F[G]=0,O[G]=0,B[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:O,attributeDivisors:B,object:R,attributes:{},index:null}}function _(R,F,O,B){const G=a.attributes,Z=F.attributes;let q=0;const $=O.getAttributes();for(const H in $)if($[H].location>=0){const ee=G[H];let z=Z[H];if(z===void 0&&(H==="instanceMatrix"&&R.instanceMatrix&&(z=R.instanceMatrix),H==="instanceColor"&&R.instanceColor&&(z=R.instanceColor)),ee===void 0||ee.attribute!==z||z&&ee.data!==z.data)return!0;q++}return a.attributesNum!==q||a.index!==B}function S(R,F,O,B){const G={},Z=F.attributes;let q=0;const $=O.getAttributes();for(const H in $)if($[H].location>=0){let ee=Z[H];ee===void 0&&(H==="instanceMatrix"&&R.instanceMatrix&&(ee=R.instanceMatrix),H==="instanceColor"&&R.instanceColor&&(ee=R.instanceColor));const z={};z.attribute=ee,ee&&ee.data&&(z.data=ee.data),G[H]=z,q++}a.attributes=G,a.attributesNum=q,a.index=B}function M(){const R=a.newAttributes;for(let F=0,O=R.length;F<O;F++)R[F]=0}function x(R){v(R,0)}function v(R,F){const O=a.newAttributes,B=a.enabledAttributes,G=a.attributeDivisors;O[R]=1,B[R]===0&&(r.enableVertexAttribArray(R),B[R]=1),G[R]!==F&&(r.vertexAttribDivisor(R,F),G[R]=F)}function b(){const R=a.newAttributes,F=a.enabledAttributes;for(let O=0,B=F.length;O<B;O++)F[O]!==R[O]&&(r.disableVertexAttribArray(O),F[O]=0)}function w(R,F,O,B,G,Z,q){q===!0?r.vertexAttribIPointer(R,F,O,G,Z):r.vertexAttribPointer(R,F,O,B,G,Z)}function T(R,F,O,B){M();const G=B.attributes,Z=O.getAttributes(),q=F.defaultAttributeValues;for(const $ in Z){const H=Z[$];if(H.location>=0){let J=G[$];if(J===void 0&&($==="instanceMatrix"&&R.instanceMatrix&&(J=R.instanceMatrix),$==="instanceColor"&&R.instanceColor&&(J=R.instanceColor)),J!==void 0){const ee=J.normalized,z=J.itemSize,te=e.get(J);if(te===void 0)continue;const Ce=te.buffer,ne=te.type,le=te.bytesPerElement,Me=ne===r.INT||ne===r.UNSIGNED_INT||J.gpuType===Sm;if(J.isInterleavedBufferAttribute){const ye=J.data,de=ye.stride,De=J.offset;if(ye.isInstancedInterleavedBuffer){for(let $e=0;$e<H.locationSize;$e++)v(H.location+$e,ye.meshPerAttribute);R.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let $e=0;$e<H.locationSize;$e++)x(H.location+$e);r.bindBuffer(r.ARRAY_BUFFER,Ce);for(let $e=0;$e<H.locationSize;$e++)w(H.location+$e,z/H.locationSize,ne,ee,de*le,(De+z/H.locationSize*$e)*le,Me)}else{if(J.isInstancedBufferAttribute){for(let ye=0;ye<H.locationSize;ye++)v(H.location+ye,J.meshPerAttribute);R.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ye=0;ye<H.locationSize;ye++)x(H.location+ye);r.bindBuffer(r.ARRAY_BUFFER,Ce);for(let ye=0;ye<H.locationSize;ye++)w(H.location+ye,z/H.locationSize,ne,ee,z*le,z/H.locationSize*ye*le,Me)}}else if(q!==void 0){const ee=q[$];if(ee!==void 0)switch(ee.length){case 2:r.vertexAttrib2fv(H.location,ee);break;case 3:r.vertexAttrib3fv(H.location,ee);break;case 4:r.vertexAttrib4fv(H.location,ee);break;default:r.vertexAttrib1fv(H.location,ee)}}}}b()}function C(){D();for(const R in n){const F=n[R];for(const O in F){const B=F[O];for(const G in B)h(B[G].object),delete B[G];delete F[O]}delete n[R]}}function P(R){if(n[R.id]===void 0)return;const F=n[R.id];for(const O in F){const B=F[O];for(const G in B)h(B[G].object),delete B[G];delete F[O]}delete n[R.id]}function I(R){for(const F in n){const O=n[F];if(O[R.id]===void 0)continue;const B=O[R.id];for(const G in B)h(B[G].object),delete B[G];delete O[R.id]}}function D(){A(),l=!0,a!==s&&(a=s,d(a.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:u,reset:D,resetDefaultState:A,dispose:C,releaseStatesOfGeometry:P,releaseStatesOfProgram:I,initAttributes:M,enableAttribute:x,disableUnusedAttributes:b}}function gA(r,e,t){let n;function s(d){n=d}function a(d,h){r.drawArrays(n,d,h),t.update(h,n,1)}function l(d,h,m){m!==0&&(r.drawArraysInstanced(n,d,h,m),t.update(h,n,m))}function u(d,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,d,0,h,0,m);let _=0;for(let S=0;S<m;S++)_+=h[S];t.update(_,n,1)}function f(d,h,m,g){if(m===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let S=0;S<d.length;S++)l(d[S],h[S],g[S]);else{_.multiDrawArraysInstancedWEBGL(n,d,0,h,0,g,0,m);let S=0;for(let M=0;M<m;M++)S+=h[M]*g[M];t.update(S,n,1)}}this.setMode=s,this.render=a,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function _A(r,e,t,n){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");s=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function l(I){return!(I!==Ci&&n.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(I){const D=I===Qa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Kr&&n.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==gr&&!D)}function f(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const h=f(d);h!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",h,"instead."),d=h);const m=t.logarithmicDepthBuffer===!0,g=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),_=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),S=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),b=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),T=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=S>0,P=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:f,textureFormatReadable:l,textureTypeReadable:u,precision:d,logarithmicDepthBuffer:m,reverseDepthBuffer:g,maxTextures:_,maxVertexTextures:S,maxTextureSize:M,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:T,vertexTextures:C,maxSamples:P}}function vA(r){const e=this;let t=null,n=0,s=!1,a=!1;const l=new vo,u=new ot,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(m,g){const _=m.length!==0||g||n!==0||s;return s=g,n=m.length,_},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(m,g){t=h(m,g,0)},this.setState=function(m,g,_){const S=m.clippingPlanes,M=m.clipIntersection,x=m.clipShadows,v=r.get(m);if(!s||S===null||S.length===0||a&&!x)a?h(null):d();else{const b=a?0:n,w=b*4;let T=v.clippingState||null;f.value=T,T=h(S,g,w,_);for(let C=0;C!==w;++C)T[C]=t[C];v.clippingState=T,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function d(){f.value!==t&&(f.value=t,f.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(m,g,_,S){const M=m!==null?m.length:0;let x=null;if(M!==0){if(x=f.value,S!==!0||x===null){const v=_+M*4,b=g.matrixWorldInverse;u.getNormalMatrix(b),(x===null||x.length<v)&&(x=new Float32Array(v));for(let w=0,T=_;w!==M;++w,T+=4)l.copy(m[w]).applyMatrix4(b,u),l.normal.toArray(x,T),x[T+3]=l.constant}f.value=x,f.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,x}}function yA(r){let e=new WeakMap;function t(l,u){return u===yp?l.mapping=ka:u===xp&&(l.mapping=za),l}function n(l){if(l&&l.isTexture){const u=l.mapping;if(u===yp||u===xp)if(e.has(l)){const f=e.get(l).texture;return t(f,l.mapping)}else{const f=l.image;if(f&&f.height>0){const d=new mT(f.height);return d.fromEquirectangularTexture(r,l),e.set(l,d),l.addEventListener("dispose",s),t(d.texture,l.mapping)}else return null}}return l}function s(l){const u=l.target;u.removeEventListener("dispose",s);const f=e.get(u);f!==void 0&&(e.delete(u),f.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}const Aa=4,Ev=[.125,.215,.35,.446,.526,.582],Eo=20,Yh=new Fm,Tv=new ft;let jh=null,$h=0,Zh=0,Kh=!1;const yo=(1+Math.sqrt(5))/2,Ma=1/yo,wv=[new se(-yo,Ma,0),new se(yo,Ma,0),new se(-Ma,0,yo),new se(Ma,0,yo),new se(0,yo,-Ma),new se(0,yo,Ma),new se(-1,1,-1),new se(1,1,-1),new se(-1,1,1),new se(1,1,1)];class Cv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){jh=this._renderer.getRenderTarget(),$h=this._renderer.getActiveCubeFace(),Zh=this._renderer.getActiveMipmapLevel(),Kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(jh,$h,Zh),this._renderer.xr.enabled=Kh,e.scissorTest=!1,Kc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ka||e.mapping===za?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jh=this._renderer.getRenderTarget(),$h=this._renderer.getActiveCubeFace(),Zh=this._renderer.getActiveMipmapLevel(),Kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:Qa,format:Ci,colorSpace:Ha,depthBuffer:!1},s=Av(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Av(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xA(a)),this._blurMaterial=SA(a,e,t)}return s}_compileMaterial(e){const t=new ui(this._lodPlanes[0],e);this._renderer.compile(t,Yh)}_sceneToCubeUV(e,t,n,s){const u=new Vi(90,1,t,n),f=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,m=h.autoClear,g=h.toneMapping;h.getClearColor(Tv),h.toneMapping=ks,h.autoClear=!1;const _=new nu({name:"PMREM.Background",side:ci,depthWrite:!1,depthTest:!1}),S=new ui(new nl,_);let M=!1;const x=e.background;x?x.isColor&&(_.color.copy(x),e.background=null,M=!0):(_.color.copy(Tv),M=!0);for(let v=0;v<6;v++){const b=v%3;b===0?(u.up.set(0,f[v],0),u.lookAt(d[v],0,0)):b===1?(u.up.set(0,0,f[v]),u.lookAt(0,d[v],0)):(u.up.set(0,f[v],0),u.lookAt(0,0,d[v]));const w=this._cubeSize;Kc(s,b*w,v>2?w:0,w,w),h.setRenderTarget(s),M&&h.render(S,u),h.render(e,u)}S.geometry.dispose(),S.material.dispose(),h.toneMapping=g,h.autoClear=m,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ka||e.mapping===za;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rv());const a=s?this._cubemapMaterial:this._equirectMaterial,l=new ui(this._lodPlanes[0],a),u=a.uniforms;u.envMap.value=e;const f=this._cubeSize;Kc(t,0,0,3*f,2*f),n.setRenderTarget(t),n.render(l,Yh)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const l=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),u=wv[(s-a-1)%wv.length];this._blur(e,a-1,a,l,u)}t.autoClear=n}_blur(e,t,n,s,a){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,s,"latitudinal",a),this._halfBlur(l,e,n,n,s,"longitudinal",a)}_halfBlur(e,t,n,s,a,l,u){const f=this._renderer,d=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,m=new ui(this._lodPlanes[s],d),g=d.uniforms,_=this._sizeLods[n]-1,S=isFinite(a)?Math.PI/(2*_):2*Math.PI/(2*Eo-1),M=a/S,x=isFinite(a)?1+Math.floor(h*M):Eo;x>Eo&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Eo}`);const v=[];let b=0;for(let I=0;I<Eo;++I){const D=I/M,A=Math.exp(-D*D/2);v.push(A),I===0?b+=A:I<x&&(b+=2*A)}for(let I=0;I<v.length;I++)v[I]=v[I]/b;g.envMap.value=e.texture,g.samples.value=x,g.weights.value=v,g.latitudinal.value=l==="latitudinal",u&&(g.poleAxis.value=u);const{_lodMax:w}=this;g.dTheta.value=S,g.mipInt.value=w-n;const T=this._sizeLods[s],C=3*T*(s>w-Aa?s-w+Aa:0),P=4*(this._cubeSize-T);Kc(t,C,P,3*T,2*T),f.setRenderTarget(t),f.render(m,Yh)}}function xA(r){const e=[],t=[],n=[];let s=r;const a=r-Aa+1+Ev.length;for(let l=0;l<a;l++){const u=Math.pow(2,s);t.push(u);let f=1/u;l>r-Aa?f=Ev[l-r+Aa-1]:l===0&&(f=0),n.push(f);const d=1/(u-2),h=-d,m=1+d,g=[h,h,m,h,m,m,h,h,m,m,h,m],_=6,S=6,M=3,x=2,v=1,b=new Float32Array(M*S*_),w=new Float32Array(x*S*_),T=new Float32Array(v*S*_);for(let P=0;P<_;P++){const I=P%3*2/3-1,D=P>2?0:-1,A=[I,D,0,I+2/3,D,0,I+2/3,D+1,0,I,D,0,I+2/3,D+1,0,I,D+1,0];b.set(A,M*S*P),w.set(g,x*S*P);const R=[P,P,P,P,P,P];T.set(R,v*S*P)}const C=new _i;C.setAttribute("position",new vr(b,M)),C.setAttribute("uv",new vr(w,x)),C.setAttribute("faceIndex",new vr(T,v)),e.push(C),s>Aa&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Av(r,e,t){const n=new nr(r,e,t);return n.texture.mapping=Rf,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Kc(r,e,t,n,s){r.viewport.set(e,t,n,s),r.scissor.set(e,t,n,s)}function SA(r,e,t){const n=new Float32Array(Eo),s=new se(0,1,0);return new ir({name:"SphericalGaussianBlur",defines:{n:Eo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Om(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:jr,depthTest:!1,depthWrite:!1})}function Rv(){return new ir({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Om(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:jr,depthTest:!1,depthWrite:!1})}function bv(){return new ir({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Om(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jr,depthTest:!1,depthWrite:!1})}function Om(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function MA(r){let e=new WeakMap,t=null;function n(u){if(u&&u.isTexture){const f=u.mapping,d=f===yp||f===xp,h=f===ka||f===za;if(d||h){let m=e.get(u);const g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return t===null&&(t=new Cv(r)),m=d?t.fromEquirectangular(u,m):t.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{const _=u.image;return d&&_&&_.height>0||h&&_&&s(_)?(t===null&&(t=new Cv(r)),m=d?t.fromEquirectangular(u):t.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",a),m.texture):null}}}return u}function s(u){let f=0;const d=6;for(let h=0;h<d;h++)u[h]!==void 0&&f++;return f===d}function a(u){const f=u.target;f.removeEventListener("dispose",a);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:l}}function EA(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=r.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ca("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function TA(r,e,t,n){const s={},a=new WeakMap;function l(m){const g=m.target;g.index!==null&&e.remove(g.index);for(const S in g.attributes)e.remove(g.attributes[S]);g.removeEventListener("dispose",l),delete s[g.id];const _=a.get(g);_&&(e.remove(_),a.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function u(m,g){return s[g.id]===!0||(g.addEventListener("dispose",l),s[g.id]=!0,t.memory.geometries++),g}function f(m){const g=m.attributes;for(const _ in g)e.update(g[_],r.ARRAY_BUFFER)}function d(m){const g=[],_=m.index,S=m.attributes.position;let M=0;if(_!==null){const b=_.array;M=_.version;for(let w=0,T=b.length;w<T;w+=3){const C=b[w+0],P=b[w+1],I=b[w+2];g.push(C,P,P,I,I,C)}}else if(S!==void 0){const b=S.array;M=S.version;for(let w=0,T=b.length/3-1;w<T;w+=3){const C=w+0,P=w+1,I=w+2;g.push(C,P,P,I,I,C)}}else return;const x=new(jy(g)?tx:ex)(g,1);x.version=M;const v=a.get(m);v&&e.remove(v),a.set(m,x)}function h(m){const g=a.get(m);if(g){const _=m.index;_!==null&&g.version<_.version&&d(m)}else d(m);return a.get(m)}return{get:u,update:f,getWireframeAttribute:h}}function wA(r,e,t){let n;function s(g){n=g}let a,l;function u(g){a=g.type,l=g.bytesPerElement}function f(g,_){r.drawElements(n,_,a,g*l),t.update(_,n,1)}function d(g,_,S){S!==0&&(r.drawElementsInstanced(n,_,a,g*l,S),t.update(_,n,S))}function h(g,_,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,_,0,a,g,0,S);let x=0;for(let v=0;v<S;v++)x+=_[v];t.update(x,n,1)}function m(g,_,S,M){if(S===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let v=0;v<g.length;v++)d(g[v]/l,_[v],M[v]);else{x.multiDrawElementsInstancedWEBGL(n,_,0,a,g,0,M,0,S);let v=0;for(let b=0;b<S;b++)v+=_[b]*M[b];t.update(v,n,1)}}this.setMode=s,this.setIndex=u,this.render=f,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function CA(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,l,u){switch(t.calls++,l){case r.TRIANGLES:t.triangles+=u*(a/3);break;case r.LINES:t.lines+=u*(a/2);break;case r.LINE_STRIP:t.lines+=u*(a-1);break;case r.LINE_LOOP:t.lines+=u*a;break;case r.POINTS:t.points+=u*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function AA(r,e,t){const n=new WeakMap,s=new rn;function a(l,u,f){const d=l.morphTargetInfluences,h=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=h!==void 0?h.length:0;let g=n.get(u);if(g===void 0||g.count!==m){let R=function(){D.dispose(),n.delete(u),u.removeEventListener("dispose",R)};var _=R;g!==void 0&&g.texture.dispose();const S=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,x=u.morphAttributes.color!==void 0,v=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let T=0;S===!0&&(T=1),M===!0&&(T=2),x===!0&&(T=3);let C=u.attributes.position.count*T,P=1;C>e.maxTextureSize&&(P=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const I=new Float32Array(C*P*4*m),D=new Zy(I,C,P,m);D.type=gr,D.needsUpdate=!0;const A=T*4;for(let F=0;F<m;F++){const O=v[F],B=b[F],G=w[F],Z=C*P*4*F;for(let q=0;q<O.count;q++){const $=q*A;S===!0&&(s.fromBufferAttribute(O,q),I[Z+$+0]=s.x,I[Z+$+1]=s.y,I[Z+$+2]=s.z,I[Z+$+3]=0),M===!0&&(s.fromBufferAttribute(B,q),I[Z+$+4]=s.x,I[Z+$+5]=s.y,I[Z+$+6]=s.z,I[Z+$+7]=0),x===!0&&(s.fromBufferAttribute(G,q),I[Z+$+8]=s.x,I[Z+$+9]=s.y,I[Z+$+10]=s.z,I[Z+$+11]=G.itemSize===4?s.w:1)}}g={count:m,texture:D,size:new ut(C,P)},n.set(u,g),u.addEventListener("dispose",R)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)f.getUniforms().setValue(r,"morphTexture",l.morphTexture,t);else{let S=0;for(let x=0;x<d.length;x++)S+=d[x];const M=u.morphTargetsRelative?1:1-S;f.getUniforms().setValue(r,"morphTargetBaseInfluence",M),f.getUniforms().setValue(r,"morphTargetInfluences",d)}f.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:a}}function RA(r,e,t,n){let s=new WeakMap;function a(f){const d=n.render.frame,h=f.geometry,m=e.get(f,h);if(s.get(m)!==d&&(e.update(m),s.set(m,d)),f.isInstancedMesh&&(f.hasEventListener("dispose",u)===!1&&f.addEventListener("dispose",u),s.get(f)!==d&&(t.update(f.instanceMatrix,r.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,r.ARRAY_BUFFER),s.set(f,d))),f.isSkinnedMesh){const g=f.skeleton;s.get(g)!==d&&(g.update(),s.set(g,d))}return m}function l(){s=new WeakMap}function u(f){const d=f.target;d.removeEventListener("dispose",u),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:l}}const dx=new Vn,Pv=new ux(1,1),hx=new Zy,px=new eT,mx=new sx,Dv=[],Iv=[],Nv=new Float32Array(16),Lv=new Float32Array(9),Fv=new Float32Array(4);function il(r,e,t){const n=r[0];if(n<=0||n>0)return r;const s=e*t;let a=Dv[s];if(a===void 0&&(a=new Float32Array(s),Dv[s]=a),e!==0){n.toArray(a,0);for(let l=1,u=0;l!==e;++l)u+=t,r[l].toArray(a,u)}return a}function gn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function _n(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function If(r,e){let t=Iv[e];t===void 0&&(t=new Int32Array(e),Iv[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function bA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function PA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;r.uniform2fv(this.addr,e),_n(t,e)}}function DA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gn(t,e))return;r.uniform3fv(this.addr,e),_n(t,e)}}function IA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;r.uniform4fv(this.addr,e),_n(t,e)}}function NA(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(gn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),_n(t,e)}else{if(gn(t,n))return;Fv.set(n),r.uniformMatrix2fv(this.addr,!1,Fv),_n(t,n)}}function LA(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(gn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),_n(t,e)}else{if(gn(t,n))return;Lv.set(n),r.uniformMatrix3fv(this.addr,!1,Lv),_n(t,n)}}function FA(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(gn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),_n(t,e)}else{if(gn(t,n))return;Nv.set(n),r.uniformMatrix4fv(this.addr,!1,Nv),_n(t,n)}}function UA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function OA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;r.uniform2iv(this.addr,e),_n(t,e)}}function kA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gn(t,e))return;r.uniform3iv(this.addr,e),_n(t,e)}}function zA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;r.uniform4iv(this.addr,e),_n(t,e)}}function BA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function VA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;r.uniform2uiv(this.addr,e),_n(t,e)}}function HA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gn(t,e))return;r.uniform3uiv(this.addr,e),_n(t,e)}}function GA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;r.uniform4uiv(this.addr,e),_n(t,e)}}function WA(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s);let a;this.type===r.SAMPLER_2D_SHADOW?(Pv.compareFunction=Yy,a=Pv):a=dx,t.setTexture2D(e||a,s)}function XA(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||px,s)}function qA(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||mx,s)}function YA(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||hx,s)}function jA(r){switch(r){case 5126:return bA;case 35664:return PA;case 35665:return DA;case 35666:return IA;case 35674:return NA;case 35675:return LA;case 35676:return FA;case 5124:case 35670:return UA;case 35667:case 35671:return OA;case 35668:case 35672:return kA;case 35669:case 35673:return zA;case 5125:return BA;case 36294:return VA;case 36295:return HA;case 36296:return GA;case 35678:case 36198:case 36298:case 36306:case 35682:return WA;case 35679:case 36299:case 36307:return XA;case 35680:case 36300:case 36308:case 36293:return qA;case 36289:case 36303:case 36311:case 36292:return YA}}function $A(r,e){r.uniform1fv(this.addr,e)}function ZA(r,e){const t=il(e,this.size,2);r.uniform2fv(this.addr,t)}function KA(r,e){const t=il(e,this.size,3);r.uniform3fv(this.addr,t)}function QA(r,e){const t=il(e,this.size,4);r.uniform4fv(this.addr,t)}function JA(r,e){const t=il(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function eR(r,e){const t=il(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function tR(r,e){const t=il(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function nR(r,e){r.uniform1iv(this.addr,e)}function iR(r,e){r.uniform2iv(this.addr,e)}function rR(r,e){r.uniform3iv(this.addr,e)}function sR(r,e){r.uniform4iv(this.addr,e)}function oR(r,e){r.uniform1uiv(this.addr,e)}function aR(r,e){r.uniform2uiv(this.addr,e)}function lR(r,e){r.uniform3uiv(this.addr,e)}function uR(r,e){r.uniform4uiv(this.addr,e)}function cR(r,e,t){const n=this.cache,s=e.length,a=If(t,s);gn(n,a)||(r.uniform1iv(this.addr,a),_n(n,a));for(let l=0;l!==s;++l)t.setTexture2D(e[l]||dx,a[l])}function fR(r,e,t){const n=this.cache,s=e.length,a=If(t,s);gn(n,a)||(r.uniform1iv(this.addr,a),_n(n,a));for(let l=0;l!==s;++l)t.setTexture3D(e[l]||px,a[l])}function dR(r,e,t){const n=this.cache,s=e.length,a=If(t,s);gn(n,a)||(r.uniform1iv(this.addr,a),_n(n,a));for(let l=0;l!==s;++l)t.setTextureCube(e[l]||mx,a[l])}function hR(r,e,t){const n=this.cache,s=e.length,a=If(t,s);gn(n,a)||(r.uniform1iv(this.addr,a),_n(n,a));for(let l=0;l!==s;++l)t.setTexture2DArray(e[l]||hx,a[l])}function pR(r){switch(r){case 5126:return $A;case 35664:return ZA;case 35665:return KA;case 35666:return QA;case 35674:return JA;case 35675:return eR;case 35676:return tR;case 5124:case 35670:return nR;case 35667:case 35671:return iR;case 35668:case 35672:return rR;case 35669:case 35673:return sR;case 5125:return oR;case 36294:return aR;case 36295:return lR;case 36296:return uR;case 35678:case 36198:case 36298:case 36306:case 35682:return cR;case 35679:case 36299:case 36307:return fR;case 35680:case 36300:case 36308:case 36293:return dR;case 36289:case 36303:case 36311:case 36292:return hR}}class mR{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=jA(t.type)}}class gR{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pR(t.type)}}class _R{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let a=0,l=s.length;a!==l;++a){const u=s[a];u.setValue(e,t[u.id],n)}}}const Qh=/(\w+)(\])?(\[|\.)?/g;function Uv(r,e){r.seq.push(e),r.map[e.id]=e}function vR(r,e,t){const n=r.name,s=n.length;for(Qh.lastIndex=0;;){const a=Qh.exec(n),l=Qh.lastIndex;let u=a[1];const f=a[2]==="]",d=a[3];if(f&&(u=u|0),d===void 0||d==="["&&l+2===s){Uv(t,d===void 0?new mR(u,r,e):new gR(u,r,e));break}else{let m=t.map[u];m===void 0&&(m=new _R(u),Uv(t,m)),t=m}}}class af{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=e.getActiveUniform(t,s),l=e.getUniformLocation(t,a.name);vR(a,l,this)}}setValue(e,t,n,s){const a=this.map[t];a!==void 0&&a.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let a=0,l=t.length;a!==l;++a){const u=t[a],f=n[u.id];f.needsUpdate!==!1&&u.setValue(e,f.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,a=e.length;s!==a;++s){const l=e[s];l.id in t&&n.push(l)}return n}}function Ov(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const yR=37297;let xR=0;function SR(r,e){const t=r.split(`
`),n=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let l=s;l<a;l++){const u=l+1;n.push(`${u===e?">":" "} ${u}: ${t[l]}`)}return n.join(`
`)}const kv=new ot;function MR(r){Ct._getMatrix(kv,Ct.workingColorSpace,r);const e=`mat3( ${kv.elements.map(t=>t.toFixed(4))} )`;switch(Ct.getTransfer(r)){case df:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function zv(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=r.getShaderInfoLog(e).trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const l=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+SR(r.getShaderSource(e),l)}else return s}function ER(r,e){const t=MR(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function TR(r,e){let t;switch(e){case fE:t="Linear";break;case dE:t="Reinhard";break;case hE:t="Cineon";break;case pE:t="ACESFilmic";break;case gE:t="AgX";break;case _E:t="Neutral";break;case mE:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Qc=new se;function wR(){Ct.getLuminanceCoefficients(Qc);const r=Qc.x.toFixed(4),e=Qc.y.toFixed(4),t=Qc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function CR(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ql).join(`
`)}function AR(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function RR(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=r.getActiveAttrib(e,s),l=a.name;let u=1;a.type===r.FLOAT_MAT2&&(u=2),a.type===r.FLOAT_MAT3&&(u=3),a.type===r.FLOAT_MAT4&&(u=4),t[l]={type:a.type,location:r.getAttribLocation(e,l),locationSize:u}}return t}function ql(r){return r!==""}function Bv(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zp(r){return r.replace(bR,DR)}const PR=new Map;function DR(r,e){let t=lt[e];if(t===void 0){const n=PR.get(e);if(n!==void 0)t=lt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Zp(t)}const IR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hv(r){return r.replace(IR,NR)}function NR(r,e,t,n){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Gv(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function LR(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ny?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===W1?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Gr&&(e="SHADOWMAP_TYPE_VSM"),e}function FR(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ka:case za:e="ENVMAP_TYPE_CUBE";break;case Rf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function UR(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case za:e="ENVMAP_MODE_REFRACTION";break}return e}function OR(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ly:e="ENVMAP_BLENDING_MULTIPLY";break;case uE:e="ENVMAP_BLENDING_MIX";break;case cE:e="ENVMAP_BLENDING_ADD";break}return e}function kR(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function zR(r,e,t,n){const s=r.getContext(),a=t.defines;let l=t.vertexShader,u=t.fragmentShader;const f=LR(t),d=FR(t),h=UR(t),m=OR(t),g=kR(t),_=CR(t),S=AR(a),M=s.createProgram();let x,v,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(ql).join(`
`),x.length>0&&(x+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(ql).join(`
`),v.length>0&&(v+=`
`)):(x=[Gv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ql).join(`
`),v=[Gv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ks?"#define TONE_MAPPING":"",t.toneMapping!==ks?lt.tonemapping_pars_fragment:"",t.toneMapping!==ks?TR("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,ER("linearToOutputTexel",t.outputColorSpace),wR(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ql).join(`
`)),l=Zp(l),l=Bv(l,t),l=Vv(l,t),u=Zp(u),u=Bv(u,t),u=Vv(u,t),l=Hv(l),u=Hv(u),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,x=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["#define varying in",t.glslVersion===K0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===K0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const w=b+x+l,T=b+v+u,C=Ov(s,s.VERTEX_SHADER,w),P=Ov(s,s.FRAGMENT_SHADER,T);s.attachShader(M,C),s.attachShader(M,P),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function I(F){if(r.debug.checkShaderErrors){const O=s.getProgramInfoLog(M).trim(),B=s.getShaderInfoLog(C).trim(),G=s.getShaderInfoLog(P).trim();let Z=!0,q=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(Z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(s,M,C,P);else{const $=zv(s,C,"vertex"),H=zv(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+O+`
`+$+`
`+H)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(B===""||G==="")&&(q=!1);q&&(F.diagnostics={runnable:Z,programLog:O,vertexShader:{log:B,prefix:x},fragmentShader:{log:G,prefix:v}})}s.deleteShader(C),s.deleteShader(P),D=new af(s,M),A=RR(s,M)}let D;this.getUniforms=function(){return D===void 0&&I(this),D};let A;this.getAttributes=function(){return A===void 0&&I(this),A};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(M,yR)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xR++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=C,this.fragmentShader=P,this}let BR=0;class VR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(n),l=this._getShaderCacheForMaterial(e);return l.has(s)===!1&&(l.add(s),s.usedTimes++),l.has(a)===!1&&(l.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new HR(e),t.set(e,n)),n}}class HR{constructor(e){this.id=BR++,this.code=e,this.usedTimes=0}}function GR(r,e,t,n,s,a,l){const u=new Qy,f=new VR,d=new Set,h=[],m=s.logarithmicDepthBuffer,g=s.vertexTextures;let _=s.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(A){return d.add(A),A===0?"uv":`uv${A}`}function x(A,R,F,O,B){const G=O.fog,Z=B.geometry,q=A.isMeshStandardMaterial?O.environment:null,$=(A.isMeshStandardMaterial?t:e).get(A.envMap||q),H=$&&$.mapping===Rf?$.image.height:null,J=S[A.type];A.precision!==null&&(_=s.getMaxPrecision(A.precision),_!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",_,"instead."));const ee=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,z=ee!==void 0?ee.length:0;let te=0;Z.morphAttributes.position!==void 0&&(te=1),Z.morphAttributes.normal!==void 0&&(te=2),Z.morphAttributes.color!==void 0&&(te=3);let Ce,ne,le,Me;if(J){const St=hr[J];Ce=St.vertexShader,ne=St.fragmentShader}else Ce=A.vertexShader,ne=A.fragmentShader,f.update(A),le=f.getVertexShaderID(A),Me=f.getFragmentShaderID(A);const ye=r.getRenderTarget(),de=r.state.buffers.depth.getReversed(),De=B.isInstancedMesh===!0,$e=B.isBatchedMesh===!0,Tt=!!A.map,at=!!A.matcap,Nt=!!$,X=!!A.aoMap,Xn=!!A.lightMap,mt=!!A.bumpMap,dt=!!A.normalMap,Ye=!!A.displacementMap,Rt=!!A.emissiveMap,We=!!A.metalnessMap,k=!!A.roughnessMap,L=A.anisotropy>0,ae=A.clearcoat>0,me=A.dispersion>0,_e=A.iridescence>0,he=A.sheen>0,Xe=A.transmission>0,Ae=L&&!!A.anisotropyMap,Ue=ae&&!!A.clearcoatMap,ct=ae&&!!A.clearcoatNormalMap,Ee=ae&&!!A.clearcoatRoughnessMap,ke=_e&&!!A.iridescenceMap,Ze=_e&&!!A.iridescenceThicknessMap,et=he&&!!A.sheenColorMap,ze=he&&!!A.sheenRoughnessMap,ht=!!A.specularMap,it=!!A.specularColorMap,At=!!A.specularIntensityMap,j=Xe&&!!A.transmissionMap,Re=Xe&&!!A.thicknessMap,fe=!!A.gradientMap,pe=!!A.alphaMap,Ne=A.alphaTest>0,Ie=!!A.alphaHash,rt=!!A.extensions;let Ut=ks;A.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(Ut=r.toneMapping);const dn={shaderID:J,shaderType:A.type,shaderName:A.name,vertexShader:Ce,fragmentShader:ne,defines:A.defines,customVertexShaderID:le,customFragmentShaderID:Me,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:_,batching:$e,batchingColor:$e&&B._colorsTexture!==null,instancing:De,instancingColor:De&&B.instanceColor!==null,instancingMorph:De&&B.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:ye===null?r.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Ha,alphaToCoverage:!!A.alphaToCoverage,map:Tt,matcap:at,envMap:Nt,envMapMode:Nt&&$.mapping,envMapCubeUVHeight:H,aoMap:X,lightMap:Xn,bumpMap:mt,normalMap:dt,displacementMap:g&&Ye,emissiveMap:Rt,normalMapObjectSpace:dt&&A.normalMapType===SE,normalMapTangentSpace:dt&&A.normalMapType===qy,metalnessMap:We,roughnessMap:k,anisotropy:L,anisotropyMap:Ae,clearcoat:ae,clearcoatMap:Ue,clearcoatNormalMap:ct,clearcoatRoughnessMap:Ee,dispersion:me,iridescence:_e,iridescenceMap:ke,iridescenceThicknessMap:Ze,sheen:he,sheenColorMap:et,sheenRoughnessMap:ze,specularMap:ht,specularColorMap:it,specularIntensityMap:At,transmission:Xe,transmissionMap:j,thicknessMap:Re,gradientMap:fe,opaque:A.transparent===!1&&A.blending===Da&&A.alphaToCoverage===!1,alphaMap:pe,alphaTest:Ne,alphaHash:Ie,combine:A.combine,mapUv:Tt&&M(A.map.channel),aoMapUv:X&&M(A.aoMap.channel),lightMapUv:Xn&&M(A.lightMap.channel),bumpMapUv:mt&&M(A.bumpMap.channel),normalMapUv:dt&&M(A.normalMap.channel),displacementMapUv:Ye&&M(A.displacementMap.channel),emissiveMapUv:Rt&&M(A.emissiveMap.channel),metalnessMapUv:We&&M(A.metalnessMap.channel),roughnessMapUv:k&&M(A.roughnessMap.channel),anisotropyMapUv:Ae&&M(A.anisotropyMap.channel),clearcoatMapUv:Ue&&M(A.clearcoatMap.channel),clearcoatNormalMapUv:ct&&M(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&M(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&M(A.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&M(A.iridescenceThicknessMap.channel),sheenColorMapUv:et&&M(A.sheenColorMap.channel),sheenRoughnessMapUv:ze&&M(A.sheenRoughnessMap.channel),specularMapUv:ht&&M(A.specularMap.channel),specularColorMapUv:it&&M(A.specularColorMap.channel),specularIntensityMapUv:At&&M(A.specularIntensityMap.channel),transmissionMapUv:j&&M(A.transmissionMap.channel),thicknessMapUv:Re&&M(A.thicknessMap.channel),alphaMapUv:pe&&M(A.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(dt||L),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Z.attributes.uv&&(Tt||pe),fog:!!G,useFog:A.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:de,skinning:B.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:te,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ut,decodeVideoTexture:Tt&&A.map.isVideoTexture===!0&&Ct.getTransfer(A.map.colorSpace)===Pt,decodeVideoTextureEmissive:Rt&&A.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(A.emissiveMap.colorSpace)===Pt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===pr,flipSided:A.side===ci,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:rt&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&A.extensions.multiDraw===!0||$e)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return dn.vertexUv1s=d.has(1),dn.vertexUv2s=d.has(2),dn.vertexUv3s=d.has(3),d.clear(),dn}function v(A){const R=[];if(A.shaderID?R.push(A.shaderID):(R.push(A.customVertexShaderID),R.push(A.customFragmentShaderID)),A.defines!==void 0)for(const F in A.defines)R.push(F),R.push(A.defines[F]);return A.isRawShaderMaterial===!1&&(b(R,A),w(R,A),R.push(r.outputColorSpace)),R.push(A.customProgramCacheKey),R.join()}function b(A,R){A.push(R.precision),A.push(R.outputColorSpace),A.push(R.envMapMode),A.push(R.envMapCubeUVHeight),A.push(R.mapUv),A.push(R.alphaMapUv),A.push(R.lightMapUv),A.push(R.aoMapUv),A.push(R.bumpMapUv),A.push(R.normalMapUv),A.push(R.displacementMapUv),A.push(R.emissiveMapUv),A.push(R.metalnessMapUv),A.push(R.roughnessMapUv),A.push(R.anisotropyMapUv),A.push(R.clearcoatMapUv),A.push(R.clearcoatNormalMapUv),A.push(R.clearcoatRoughnessMapUv),A.push(R.iridescenceMapUv),A.push(R.iridescenceThicknessMapUv),A.push(R.sheenColorMapUv),A.push(R.sheenRoughnessMapUv),A.push(R.specularMapUv),A.push(R.specularColorMapUv),A.push(R.specularIntensityMapUv),A.push(R.transmissionMapUv),A.push(R.thicknessMapUv),A.push(R.combine),A.push(R.fogExp2),A.push(R.sizeAttenuation),A.push(R.morphTargetsCount),A.push(R.morphAttributeCount),A.push(R.numDirLights),A.push(R.numPointLights),A.push(R.numSpotLights),A.push(R.numSpotLightMaps),A.push(R.numHemiLights),A.push(R.numRectAreaLights),A.push(R.numDirLightShadows),A.push(R.numPointLightShadows),A.push(R.numSpotLightShadows),A.push(R.numSpotLightShadowsWithMaps),A.push(R.numLightProbes),A.push(R.shadowMapType),A.push(R.toneMapping),A.push(R.numClippingPlanes),A.push(R.numClipIntersection),A.push(R.depthPacking)}function w(A,R){u.disableAll(),R.supportsVertexTextures&&u.enable(0),R.instancing&&u.enable(1),R.instancingColor&&u.enable(2),R.instancingMorph&&u.enable(3),R.matcap&&u.enable(4),R.envMap&&u.enable(5),R.normalMapObjectSpace&&u.enable(6),R.normalMapTangentSpace&&u.enable(7),R.clearcoat&&u.enable(8),R.iridescence&&u.enable(9),R.alphaTest&&u.enable(10),R.vertexColors&&u.enable(11),R.vertexAlphas&&u.enable(12),R.vertexUv1s&&u.enable(13),R.vertexUv2s&&u.enable(14),R.vertexUv3s&&u.enable(15),R.vertexTangents&&u.enable(16),R.anisotropy&&u.enable(17),R.alphaHash&&u.enable(18),R.batching&&u.enable(19),R.dispersion&&u.enable(20),R.batchingColor&&u.enable(21),A.push(u.mask),u.disableAll(),R.fog&&u.enable(0),R.useFog&&u.enable(1),R.flatShading&&u.enable(2),R.logarithmicDepthBuffer&&u.enable(3),R.reverseDepthBuffer&&u.enable(4),R.skinning&&u.enable(5),R.morphTargets&&u.enable(6),R.morphNormals&&u.enable(7),R.morphColors&&u.enable(8),R.premultipliedAlpha&&u.enable(9),R.shadowMapEnabled&&u.enable(10),R.doubleSided&&u.enable(11),R.flipSided&&u.enable(12),R.useDepthPacking&&u.enable(13),R.dithering&&u.enable(14),R.transmission&&u.enable(15),R.sheen&&u.enable(16),R.opaque&&u.enable(17),R.pointsUvs&&u.enable(18),R.decodeVideoTexture&&u.enable(19),R.decodeVideoTextureEmissive&&u.enable(20),R.alphaToCoverage&&u.enable(21),A.push(u.mask)}function T(A){const R=S[A.type];let F;if(R){const O=hr[R];F=ix.clone(O.uniforms)}else F=A.uniforms;return F}function C(A,R){let F;for(let O=0,B=h.length;O<B;O++){const G=h[O];if(G.cacheKey===R){F=G,++F.usedTimes;break}}return F===void 0&&(F=new zR(r,R,A,a),h.push(F)),F}function P(A){if(--A.usedTimes===0){const R=h.indexOf(A);h[R]=h[h.length-1],h.pop(),A.destroy()}}function I(A){f.remove(A)}function D(){f.dispose()}return{getParameters:x,getProgramCacheKey:v,getUniforms:T,acquireProgram:C,releaseProgram:P,releaseShaderCache:I,programs:h,dispose:D}}function WR(){let r=new WeakMap;function e(l){return r.has(l)}function t(l){let u=r.get(l);return u===void 0&&(u={},r.set(l,u)),u}function n(l){r.delete(l)}function s(l,u,f){r.get(l)[u]=f}function a(){r=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:a}}function XR(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Wv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Xv(){const r=[];let e=0;const t=[],n=[],s=[];function a(){e=0,t.length=0,n.length=0,s.length=0}function l(m,g,_,S,M,x){let v=r[e];return v===void 0?(v={id:m.id,object:m,geometry:g,material:_,groupOrder:S,renderOrder:m.renderOrder,z:M,group:x},r[e]=v):(v.id=m.id,v.object=m,v.geometry=g,v.material=_,v.groupOrder=S,v.renderOrder=m.renderOrder,v.z=M,v.group=x),e++,v}function u(m,g,_,S,M,x){const v=l(m,g,_,S,M,x);_.transmission>0?n.push(v):_.transparent===!0?s.push(v):t.push(v)}function f(m,g,_,S,M,x){const v=l(m,g,_,S,M,x);_.transmission>0?n.unshift(v):_.transparent===!0?s.unshift(v):t.unshift(v)}function d(m,g){t.length>1&&t.sort(m||XR),n.length>1&&n.sort(g||Wv),s.length>1&&s.sort(g||Wv)}function h(){for(let m=e,g=r.length;m<g;m++){const _=r[m];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:a,push:u,unshift:f,finish:h,sort:d}}function qR(){let r=new WeakMap;function e(n,s){const a=r.get(n);let l;return a===void 0?(l=new Xv,r.set(n,[l])):s>=a.length?(l=new Xv,a.push(l)):l=a[s],l}function t(){r=new WeakMap}return{get:e,dispose:t}}function YR(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new se,color:new ft};break;case"SpotLight":t={position:new se,direction:new se,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new se,color:new ft,distance:0,decay:0};break;case"HemisphereLight":t={direction:new se,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":t={color:new ft,position:new se,halfWidth:new se,halfHeight:new se};break}return r[e.id]=t,t}}}function jR(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let $R=0;function ZR(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function KR(r){const e=new YR,t=jR(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new se);const s=new se,a=new sn,l=new sn;function u(d){let h=0,m=0,g=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let _=0,S=0,M=0,x=0,v=0,b=0,w=0,T=0,C=0,P=0,I=0;d.sort(ZR);for(let A=0,R=d.length;A<R;A++){const F=d[A],O=F.color,B=F.intensity,G=F.distance,Z=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)h+=O.r*B,m+=O.g*B,g+=O.b*B;else if(F.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(F.sh.coefficients[q],B);I++}else if(F.isDirectionalLight){const q=e.get(F);if(q.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const $=F.shadow,H=t.get(F);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.directionalShadow[_]=H,n.directionalShadowMap[_]=Z,n.directionalShadowMatrix[_]=F.shadow.matrix,b++}n.directional[_]=q,_++}else if(F.isSpotLight){const q=e.get(F);q.position.setFromMatrixPosition(F.matrixWorld),q.color.copy(O).multiplyScalar(B),q.distance=G,q.coneCos=Math.cos(F.angle),q.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),q.decay=F.decay,n.spot[M]=q;const $=F.shadow;if(F.map&&(n.spotLightMap[C]=F.map,C++,$.updateMatrices(F),F.castShadow&&P++),n.spotLightMatrix[M]=$.matrix,F.castShadow){const H=t.get(F);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.spotShadow[M]=H,n.spotShadowMap[M]=Z,T++}M++}else if(F.isRectAreaLight){const q=e.get(F);q.color.copy(O).multiplyScalar(B),q.halfWidth.set(F.width*.5,0,0),q.halfHeight.set(0,F.height*.5,0),n.rectArea[x]=q,x++}else if(F.isPointLight){const q=e.get(F);if(q.color.copy(F.color).multiplyScalar(F.intensity),q.distance=F.distance,q.decay=F.decay,F.castShadow){const $=F.shadow,H=t.get(F);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,H.shadowCameraNear=$.camera.near,H.shadowCameraFar=$.camera.far,n.pointShadow[S]=H,n.pointShadowMap[S]=Z,n.pointShadowMatrix[S]=F.shadow.matrix,w++}n.point[S]=q,S++}else if(F.isHemisphereLight){const q=e.get(F);q.skyColor.copy(F.color).multiplyScalar(B),q.groundColor.copy(F.groundColor).multiplyScalar(B),n.hemi[v]=q,v++}}x>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pe.LTC_FLOAT_1,n.rectAreaLTC2=Pe.LTC_FLOAT_2):(n.rectAreaLTC1=Pe.LTC_HALF_1,n.rectAreaLTC2=Pe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=m,n.ambient[2]=g;const D=n.hash;(D.directionalLength!==_||D.pointLength!==S||D.spotLength!==M||D.rectAreaLength!==x||D.hemiLength!==v||D.numDirectionalShadows!==b||D.numPointShadows!==w||D.numSpotShadows!==T||D.numSpotMaps!==C||D.numLightProbes!==I)&&(n.directional.length=_,n.spot.length=M,n.rectArea.length=x,n.point.length=S,n.hemi.length=v,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=T+C-P,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=I,D.directionalLength=_,D.pointLength=S,D.spotLength=M,D.rectAreaLength=x,D.hemiLength=v,D.numDirectionalShadows=b,D.numPointShadows=w,D.numSpotShadows=T,D.numSpotMaps=C,D.numLightProbes=I,n.version=$R++)}function f(d,h){let m=0,g=0,_=0,S=0,M=0;const x=h.matrixWorldInverse;for(let v=0,b=d.length;v<b;v++){const w=d[v];if(w.isDirectionalLight){const T=n.directional[m];T.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(x),m++}else if(w.isSpotLight){const T=n.spot[_];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(x),T.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(x),_++}else if(w.isRectAreaLight){const T=n.rectArea[S];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(x),l.identity(),a.copy(w.matrixWorld),a.premultiply(x),l.extractRotation(a),T.halfWidth.set(w.width*.5,0,0),T.halfHeight.set(0,w.height*.5,0),T.halfWidth.applyMatrix4(l),T.halfHeight.applyMatrix4(l),S++}else if(w.isPointLight){const T=n.point[g];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(x),g++}else if(w.isHemisphereLight){const T=n.hemi[M];T.direction.setFromMatrixPosition(w.matrixWorld),T.direction.transformDirection(x),M++}}}return{setup:u,setupView:f,state:n}}function qv(r){const e=new KR(r),t=[],n=[];function s(h){d.camera=h,t.length=0,n.length=0}function a(h){t.push(h)}function l(h){n.push(h)}function u(){e.setup(t)}function f(h){e.setupView(t,h)}const d={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:d,setupLights:u,setupLightsView:f,pushLight:a,pushShadow:l}}function QR(r){let e=new WeakMap;function t(s,a=0){const l=e.get(s);let u;return l===void 0?(u=new qv(r),e.set(s,[u])):a>=l.length?(u=new qv(r),l.push(u)):u=l[a],u}function n(){e=new WeakMap}return{get:t,dispose:n}}const JR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function tb(r,e,t){let n=new ax;const s=new ut,a=new ut,l=new rn,u=new ST({depthPacking:xE}),f=new MT,d={},h=t.maxTextureSize,m={[Vs]:ci,[ci]:Vs,[pr]:pr},g=new ir({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:JR,fragmentShader:eb}),_=g.clone();_.defines.HORIZONTAL_PASS=1;const S=new _i;S.setAttribute("position",new vr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new ui(S,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ny;let v=this.type;this.render=function(P,I,D){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||P.length===0)return;const A=r.getRenderTarget(),R=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),O=r.state;O.setBlending(jr),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const B=v!==Gr&&this.type===Gr,G=v===Gr&&this.type!==Gr;for(let Z=0,q=P.length;Z<q;Z++){const $=P[Z],H=$.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const J=H.getFrameExtents();if(s.multiply(J),a.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/J.x),s.x=a.x*J.x,H.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/J.y),s.y=a.y*J.y,H.mapSize.y=a.y)),H.map===null||B===!0||G===!0){const z=this.type!==Gr?{minFilter:tr,magFilter:tr}:{};H.map!==null&&H.map.dispose(),H.map=new nr(s.x,s.y,z),H.map.texture.name=$.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const ee=H.getViewportCount();for(let z=0;z<ee;z++){const te=H.getViewport(z);l.set(a.x*te.x,a.y*te.y,a.x*te.z,a.y*te.w),O.viewport(l),H.updateMatrices($,z),n=H.getFrustum(),T(I,D,H.camera,$,this.type)}H.isPointLightShadow!==!0&&this.type===Gr&&b(H,D),H.needsUpdate=!1}v=this.type,x.needsUpdate=!1,r.setRenderTarget(A,R,F)};function b(P,I){const D=e.update(M);g.defines.VSM_SAMPLES!==P.blurSamples&&(g.defines.VSM_SAMPLES=P.blurSamples,_.defines.VSM_SAMPLES=P.blurSamples,g.needsUpdate=!0,_.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new nr(s.x,s.y)),g.uniforms.shadow_pass.value=P.map.texture,g.uniforms.resolution.value=P.mapSize,g.uniforms.radius.value=P.radius,r.setRenderTarget(P.mapPass),r.clear(),r.renderBufferDirect(I,null,D,g,M,null),_.uniforms.shadow_pass.value=P.mapPass.texture,_.uniforms.resolution.value=P.mapSize,_.uniforms.radius.value=P.radius,r.setRenderTarget(P.map),r.clear(),r.renderBufferDirect(I,null,D,_,M,null)}function w(P,I,D,A){let R=null;const F=D.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(F!==void 0)R=F;else if(R=D.isPointLight===!0?f:u,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const O=R.uuid,B=I.uuid;let G=d[O];G===void 0&&(G={},d[O]=G);let Z=G[B];Z===void 0&&(Z=R.clone(),G[B]=Z,I.addEventListener("dispose",C)),R=Z}if(R.visible=I.visible,R.wireframe=I.wireframe,A===Gr?R.side=I.shadowSide!==null?I.shadowSide:I.side:R.side=I.shadowSide!==null?I.shadowSide:m[I.side],R.alphaMap=I.alphaMap,R.alphaTest=I.alphaTest,R.map=I.map,R.clipShadows=I.clipShadows,R.clippingPlanes=I.clippingPlanes,R.clipIntersection=I.clipIntersection,R.displacementMap=I.displacementMap,R.displacementScale=I.displacementScale,R.displacementBias=I.displacementBias,R.wireframeLinewidth=I.wireframeLinewidth,R.linewidth=I.linewidth,D.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const O=r.properties.get(R);O.light=D}return R}function T(P,I,D,A,R){if(P.visible===!1)return;if(P.layers.test(I.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&R===Gr)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,P.matrixWorld);const B=e.update(P),G=P.material;if(Array.isArray(G)){const Z=B.groups;for(let q=0,$=Z.length;q<$;q++){const H=Z[q],J=G[H.materialIndex];if(J&&J.visible){const ee=w(P,J,A,R);P.onBeforeShadow(r,P,I,D,B,ee,H),r.renderBufferDirect(D,null,B,ee,P,H),P.onAfterShadow(r,P,I,D,B,ee,H)}}}else if(G.visible){const Z=w(P,G,A,R);P.onBeforeShadow(r,P,I,D,B,Z,null),r.renderBufferDirect(D,null,B,Z,P,null),P.onAfterShadow(r,P,I,D,B,Z,null)}}const O=P.children;for(let B=0,G=O.length;B<G;B++)T(O[B],I,D,A,R)}function C(P){P.target.removeEventListener("dispose",C);for(const D in d){const A=d[D],R=P.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}const nb={[dp]:hp,[pp]:_p,[mp]:vp,[Oa]:gp,[hp]:dp,[_p]:pp,[vp]:mp,[gp]:Oa};function ib(r,e){function t(){let j=!1;const Re=new rn;let fe=null;const pe=new rn(0,0,0,0);return{setMask:function(Ne){fe!==Ne&&!j&&(r.colorMask(Ne,Ne,Ne,Ne),fe=Ne)},setLocked:function(Ne){j=Ne},setClear:function(Ne,Ie,rt,Ut,dn){dn===!0&&(Ne*=Ut,Ie*=Ut,rt*=Ut),Re.set(Ne,Ie,rt,Ut),pe.equals(Re)===!1&&(r.clearColor(Ne,Ie,rt,Ut),pe.copy(Re))},reset:function(){j=!1,fe=null,pe.set(-1,0,0,0)}}}function n(){let j=!1,Re=!1,fe=null,pe=null,Ne=null;return{setReversed:function(Ie){if(Re!==Ie){const rt=e.get("EXT_clip_control");Re?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT);const Ut=Ne;Ne=null,this.setClear(Ut)}Re=Ie},getReversed:function(){return Re},setTest:function(Ie){Ie?ye(r.DEPTH_TEST):de(r.DEPTH_TEST)},setMask:function(Ie){fe!==Ie&&!j&&(r.depthMask(Ie),fe=Ie)},setFunc:function(Ie){if(Re&&(Ie=nb[Ie]),pe!==Ie){switch(Ie){case dp:r.depthFunc(r.NEVER);break;case hp:r.depthFunc(r.ALWAYS);break;case pp:r.depthFunc(r.LESS);break;case Oa:r.depthFunc(r.LEQUAL);break;case mp:r.depthFunc(r.EQUAL);break;case gp:r.depthFunc(r.GEQUAL);break;case _p:r.depthFunc(r.GREATER);break;case vp:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}pe=Ie}},setLocked:function(Ie){j=Ie},setClear:function(Ie){Ne!==Ie&&(Re&&(Ie=1-Ie),r.clearDepth(Ie),Ne=Ie)},reset:function(){j=!1,fe=null,pe=null,Ne=null,Re=!1}}}function s(){let j=!1,Re=null,fe=null,pe=null,Ne=null,Ie=null,rt=null,Ut=null,dn=null;return{setTest:function(St){j||(St?ye(r.STENCIL_TEST):de(r.STENCIL_TEST))},setMask:function(St){Re!==St&&!j&&(r.stencilMask(St),Re=St)},setFunc:function(St,ti,qn){(fe!==St||pe!==ti||Ne!==qn)&&(r.stencilFunc(St,ti,qn),fe=St,pe=ti,Ne=qn)},setOp:function(St,ti,qn){(Ie!==St||rt!==ti||Ut!==qn)&&(r.stencilOp(St,ti,qn),Ie=St,rt=ti,Ut=qn)},setLocked:function(St){j=St},setClear:function(St){dn!==St&&(r.clearStencil(St),dn=St)},reset:function(){j=!1,Re=null,fe=null,pe=null,Ne=null,Ie=null,rt=null,Ut=null,dn=null}}}const a=new t,l=new n,u=new s,f=new WeakMap,d=new WeakMap;let h={},m={},g=new WeakMap,_=[],S=null,M=!1,x=null,v=null,b=null,w=null,T=null,C=null,P=null,I=new ft(0,0,0),D=0,A=!1,R=null,F=null,O=null,B=null,G=null;const Z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,$=0;const H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(H)[1]),q=$>=1):H.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),q=$>=2);let J=null,ee={};const z=r.getParameter(r.SCISSOR_BOX),te=r.getParameter(r.VIEWPORT),Ce=new rn().fromArray(z),ne=new rn().fromArray(te);function le(j,Re,fe,pe){const Ne=new Uint8Array(4),Ie=r.createTexture();r.bindTexture(j,Ie),r.texParameteri(j,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(j,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let rt=0;rt<fe;rt++)j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?r.texImage3D(Re,0,r.RGBA,1,1,pe,0,r.RGBA,r.UNSIGNED_BYTE,Ne):r.texImage2D(Re+rt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ne);return Ie}const Me={};Me[r.TEXTURE_2D]=le(r.TEXTURE_2D,r.TEXTURE_2D,1),Me[r.TEXTURE_CUBE_MAP]=le(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[r.TEXTURE_2D_ARRAY]=le(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Me[r.TEXTURE_3D]=le(r.TEXTURE_3D,r.TEXTURE_3D,1,1),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),ye(r.DEPTH_TEST),l.setFunc(Oa),mt(!1),dt(X0),ye(r.CULL_FACE),X(jr);function ye(j){h[j]!==!0&&(r.enable(j),h[j]=!0)}function de(j){h[j]!==!1&&(r.disable(j),h[j]=!1)}function De(j,Re){return m[j]!==Re?(r.bindFramebuffer(j,Re),m[j]=Re,j===r.DRAW_FRAMEBUFFER&&(m[r.FRAMEBUFFER]=Re),j===r.FRAMEBUFFER&&(m[r.DRAW_FRAMEBUFFER]=Re),!0):!1}function $e(j,Re){let fe=_,pe=!1;if(j){fe=g.get(Re),fe===void 0&&(fe=[],g.set(Re,fe));const Ne=j.textures;if(fe.length!==Ne.length||fe[0]!==r.COLOR_ATTACHMENT0){for(let Ie=0,rt=Ne.length;Ie<rt;Ie++)fe[Ie]=r.COLOR_ATTACHMENT0+Ie;fe.length=Ne.length,pe=!0}}else fe[0]!==r.BACK&&(fe[0]=r.BACK,pe=!0);pe&&r.drawBuffers(fe)}function Tt(j){return S!==j?(r.useProgram(j),S=j,!0):!1}const at={[Mo]:r.FUNC_ADD,[q1]:r.FUNC_SUBTRACT,[Y1]:r.FUNC_REVERSE_SUBTRACT};at[j1]=r.MIN,at[$1]=r.MAX;const Nt={[Z1]:r.ZERO,[K1]:r.ONE,[Q1]:r.SRC_COLOR,[cp]:r.SRC_ALPHA,[rE]:r.SRC_ALPHA_SATURATE,[nE]:r.DST_COLOR,[eE]:r.DST_ALPHA,[J1]:r.ONE_MINUS_SRC_COLOR,[fp]:r.ONE_MINUS_SRC_ALPHA,[iE]:r.ONE_MINUS_DST_COLOR,[tE]:r.ONE_MINUS_DST_ALPHA,[sE]:r.CONSTANT_COLOR,[oE]:r.ONE_MINUS_CONSTANT_COLOR,[aE]:r.CONSTANT_ALPHA,[lE]:r.ONE_MINUS_CONSTANT_ALPHA};function X(j,Re,fe,pe,Ne,Ie,rt,Ut,dn,St){if(j===jr){M===!0&&(de(r.BLEND),M=!1);return}if(M===!1&&(ye(r.BLEND),M=!0),j!==X1){if(j!==x||St!==A){if((v!==Mo||T!==Mo)&&(r.blendEquation(r.FUNC_ADD),v=Mo,T=Mo),St)switch(j){case Da:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case q0:r.blendFunc(r.ONE,r.ONE);break;case Y0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case j0:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case Da:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case q0:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Y0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case j0:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}b=null,w=null,C=null,P=null,I.set(0,0,0),D=0,x=j,A=St}return}Ne=Ne||Re,Ie=Ie||fe,rt=rt||pe,(Re!==v||Ne!==T)&&(r.blendEquationSeparate(at[Re],at[Ne]),v=Re,T=Ne),(fe!==b||pe!==w||Ie!==C||rt!==P)&&(r.blendFuncSeparate(Nt[fe],Nt[pe],Nt[Ie],Nt[rt]),b=fe,w=pe,C=Ie,P=rt),(Ut.equals(I)===!1||dn!==D)&&(r.blendColor(Ut.r,Ut.g,Ut.b,dn),I.copy(Ut),D=dn),x=j,A=!1}function Xn(j,Re){j.side===pr?de(r.CULL_FACE):ye(r.CULL_FACE);let fe=j.side===ci;Re&&(fe=!fe),mt(fe),j.blending===Da&&j.transparent===!1?X(jr):X(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),l.setFunc(j.depthFunc),l.setTest(j.depthTest),l.setMask(j.depthWrite),a.setMask(j.colorWrite);const pe=j.stencilWrite;u.setTest(pe),pe&&(u.setMask(j.stencilWriteMask),u.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),u.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Rt(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?ye(r.SAMPLE_ALPHA_TO_COVERAGE):de(r.SAMPLE_ALPHA_TO_COVERAGE)}function mt(j){R!==j&&(j?r.frontFace(r.CW):r.frontFace(r.CCW),R=j)}function dt(j){j!==H1?(ye(r.CULL_FACE),j!==F&&(j===X0?r.cullFace(r.BACK):j===G1?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):de(r.CULL_FACE),F=j}function Ye(j){j!==O&&(q&&r.lineWidth(j),O=j)}function Rt(j,Re,fe){j?(ye(r.POLYGON_OFFSET_FILL),(B!==Re||G!==fe)&&(r.polygonOffset(Re,fe),B=Re,G=fe)):de(r.POLYGON_OFFSET_FILL)}function We(j){j?ye(r.SCISSOR_TEST):de(r.SCISSOR_TEST)}function k(j){j===void 0&&(j=r.TEXTURE0+Z-1),J!==j&&(r.activeTexture(j),J=j)}function L(j,Re,fe){fe===void 0&&(J===null?fe=r.TEXTURE0+Z-1:fe=J);let pe=ee[fe];pe===void 0&&(pe={type:void 0,texture:void 0},ee[fe]=pe),(pe.type!==j||pe.texture!==Re)&&(J!==fe&&(r.activeTexture(fe),J=fe),r.bindTexture(j,Re||Me[j]),pe.type=j,pe.texture=Re)}function ae(){const j=ee[J];j!==void 0&&j.type!==void 0&&(r.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function me(){try{r.compressedTexImage2D.apply(r,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function _e(){try{r.compressedTexImage3D.apply(r,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function he(){try{r.texSubImage2D.apply(r,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Xe(){try{r.texSubImage3D.apply(r,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ae(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ue(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ct(){try{r.texStorage2D.apply(r,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ee(){try{r.texStorage3D.apply(r,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ke(){try{r.texImage2D.apply(r,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ze(){try{r.texImage3D.apply(r,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function et(j){Ce.equals(j)===!1&&(r.scissor(j.x,j.y,j.z,j.w),Ce.copy(j))}function ze(j){ne.equals(j)===!1&&(r.viewport(j.x,j.y,j.z,j.w),ne.copy(j))}function ht(j,Re){let fe=d.get(Re);fe===void 0&&(fe=new WeakMap,d.set(Re,fe));let pe=fe.get(j);pe===void 0&&(pe=r.getUniformBlockIndex(Re,j.name),fe.set(j,pe))}function it(j,Re){const pe=d.get(Re).get(j);f.get(Re)!==pe&&(r.uniformBlockBinding(Re,pe,j.__bindingPointIndex),f.set(Re,pe))}function At(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),l.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},J=null,ee={},m={},g=new WeakMap,_=[],S=null,M=!1,x=null,v=null,b=null,w=null,T=null,C=null,P=null,I=new ft(0,0,0),D=0,A=!1,R=null,F=null,O=null,B=null,G=null,Ce.set(0,0,r.canvas.width,r.canvas.height),ne.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:ye,disable:de,bindFramebuffer:De,drawBuffers:$e,useProgram:Tt,setBlending:X,setMaterial:Xn,setFlipSided:mt,setCullFace:dt,setLineWidth:Ye,setPolygonOffset:Rt,setScissorTest:We,activeTexture:k,bindTexture:L,unbindTexture:ae,compressedTexImage2D:me,compressedTexImage3D:_e,texImage2D:ke,texImage3D:Ze,updateUBOMapping:ht,uniformBlockBinding:it,texStorage2D:ct,texStorage3D:Ee,texSubImage2D:he,texSubImage3D:Xe,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Ue,scissor:et,viewport:ze,reset:At}}function rb(r,e,t,n,s,a,l){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new ut,h=new WeakMap;let m;const g=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(k,L){return _?new OffscreenCanvas(k,L):pf("canvas")}function M(k,L,ae){let me=1;const _e=We(k);if((_e.width>ae||_e.height>ae)&&(me=ae/Math.max(_e.width,_e.height)),me<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){const he=Math.floor(me*_e.width),Xe=Math.floor(me*_e.height);m===void 0&&(m=S(he,Xe));const Ae=L?S(he,Xe):m;return Ae.width=he,Ae.height=Xe,Ae.getContext("2d").drawImage(k,0,0,he,Xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+he+"x"+Xe+")."),Ae}else return"data"in k&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),k;return k}function x(k){return k.generateMipmaps}function v(k){r.generateMipmap(k)}function b(k){return k.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?r.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(k,L,ae,me,_e=!1){if(k!==null){if(r[k]!==void 0)return r[k];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let he=L;if(L===r.RED&&(ae===r.FLOAT&&(he=r.R32F),ae===r.HALF_FLOAT&&(he=r.R16F),ae===r.UNSIGNED_BYTE&&(he=r.R8)),L===r.RED_INTEGER&&(ae===r.UNSIGNED_BYTE&&(he=r.R8UI),ae===r.UNSIGNED_SHORT&&(he=r.R16UI),ae===r.UNSIGNED_INT&&(he=r.R32UI),ae===r.BYTE&&(he=r.R8I),ae===r.SHORT&&(he=r.R16I),ae===r.INT&&(he=r.R32I)),L===r.RG&&(ae===r.FLOAT&&(he=r.RG32F),ae===r.HALF_FLOAT&&(he=r.RG16F),ae===r.UNSIGNED_BYTE&&(he=r.RG8)),L===r.RG_INTEGER&&(ae===r.UNSIGNED_BYTE&&(he=r.RG8UI),ae===r.UNSIGNED_SHORT&&(he=r.RG16UI),ae===r.UNSIGNED_INT&&(he=r.RG32UI),ae===r.BYTE&&(he=r.RG8I),ae===r.SHORT&&(he=r.RG16I),ae===r.INT&&(he=r.RG32I)),L===r.RGB_INTEGER&&(ae===r.UNSIGNED_BYTE&&(he=r.RGB8UI),ae===r.UNSIGNED_SHORT&&(he=r.RGB16UI),ae===r.UNSIGNED_INT&&(he=r.RGB32UI),ae===r.BYTE&&(he=r.RGB8I),ae===r.SHORT&&(he=r.RGB16I),ae===r.INT&&(he=r.RGB32I)),L===r.RGBA_INTEGER&&(ae===r.UNSIGNED_BYTE&&(he=r.RGBA8UI),ae===r.UNSIGNED_SHORT&&(he=r.RGBA16UI),ae===r.UNSIGNED_INT&&(he=r.RGBA32UI),ae===r.BYTE&&(he=r.RGBA8I),ae===r.SHORT&&(he=r.RGBA16I),ae===r.INT&&(he=r.RGBA32I)),L===r.RGB&&ae===r.UNSIGNED_INT_5_9_9_9_REV&&(he=r.RGB9_E5),L===r.RGBA){const Xe=_e?df:Ct.getTransfer(me);ae===r.FLOAT&&(he=r.RGBA32F),ae===r.HALF_FLOAT&&(he=r.RGBA16F),ae===r.UNSIGNED_BYTE&&(he=Xe===Pt?r.SRGB8_ALPHA8:r.RGBA8),ae===r.UNSIGNED_SHORT_4_4_4_4&&(he=r.RGBA4),ae===r.UNSIGNED_SHORT_5_5_5_1&&(he=r.RGB5_A1)}return(he===r.R16F||he===r.R32F||he===r.RG16F||he===r.RG32F||he===r.RGBA16F||he===r.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function T(k,L){let ae;return k?L===null||L===Do||L===Ba?ae=r.DEPTH24_STENCIL8:L===gr?ae=r.DEPTH32F_STENCIL8:L===eu&&(ae=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):L===null||L===Do||L===Ba?ae=r.DEPTH_COMPONENT24:L===gr?ae=r.DEPTH_COMPONENT32F:L===eu&&(ae=r.DEPTH_COMPONENT16),ae}function C(k,L){return x(k)===!0||k.isFramebufferTexture&&k.minFilter!==tr&&k.minFilter!==Tn?Math.log2(Math.max(L.width,L.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?L.mipmaps.length:1}function P(k){const L=k.target;L.removeEventListener("dispose",P),D(L),L.isVideoTexture&&h.delete(L)}function I(k){const L=k.target;L.removeEventListener("dispose",I),R(L)}function D(k){const L=n.get(k);if(L.__webglInit===void 0)return;const ae=k.source,me=g.get(ae);if(me){const _e=me[L.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&A(k),Object.keys(me).length===0&&g.delete(ae)}n.remove(k)}function A(k){const L=n.get(k);r.deleteTexture(L.__webglTexture);const ae=k.source,me=g.get(ae);delete me[L.__cacheKey],l.memory.textures--}function R(k){const L=n.get(k);if(k.depthTexture&&(k.depthTexture.dispose(),n.remove(k.depthTexture)),k.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(L.__webglFramebuffer[me]))for(let _e=0;_e<L.__webglFramebuffer[me].length;_e++)r.deleteFramebuffer(L.__webglFramebuffer[me][_e]);else r.deleteFramebuffer(L.__webglFramebuffer[me]);L.__webglDepthbuffer&&r.deleteRenderbuffer(L.__webglDepthbuffer[me])}else{if(Array.isArray(L.__webglFramebuffer))for(let me=0;me<L.__webglFramebuffer.length;me++)r.deleteFramebuffer(L.__webglFramebuffer[me]);else r.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer&&r.deleteRenderbuffer(L.__webglDepthbuffer),L.__webglMultisampledFramebuffer&&r.deleteFramebuffer(L.__webglMultisampledFramebuffer),L.__webglColorRenderbuffer)for(let me=0;me<L.__webglColorRenderbuffer.length;me++)L.__webglColorRenderbuffer[me]&&r.deleteRenderbuffer(L.__webglColorRenderbuffer[me]);L.__webglDepthRenderbuffer&&r.deleteRenderbuffer(L.__webglDepthRenderbuffer)}const ae=k.textures;for(let me=0,_e=ae.length;me<_e;me++){const he=n.get(ae[me]);he.__webglTexture&&(r.deleteTexture(he.__webglTexture),l.memory.textures--),n.remove(ae[me])}n.remove(k)}let F=0;function O(){F=0}function B(){const k=F;return k>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+k+" texture units while this GPU supports only "+s.maxTextures),F+=1,k}function G(k){const L=[];return L.push(k.wrapS),L.push(k.wrapT),L.push(k.wrapR||0),L.push(k.magFilter),L.push(k.minFilter),L.push(k.anisotropy),L.push(k.internalFormat),L.push(k.format),L.push(k.type),L.push(k.generateMipmaps),L.push(k.premultiplyAlpha),L.push(k.flipY),L.push(k.unpackAlignment),L.push(k.colorSpace),L.join()}function Z(k,L){const ae=n.get(k);if(k.isVideoTexture&&Ye(k),k.isRenderTargetTexture===!1&&k.version>0&&ae.__version!==k.version){const me=k.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(ae,k,L);return}}t.bindTexture(r.TEXTURE_2D,ae.__webglTexture,r.TEXTURE0+L)}function q(k,L){const ae=n.get(k);if(k.version>0&&ae.__version!==k.version){ne(ae,k,L);return}t.bindTexture(r.TEXTURE_2D_ARRAY,ae.__webglTexture,r.TEXTURE0+L)}function $(k,L){const ae=n.get(k);if(k.version>0&&ae.__version!==k.version){ne(ae,k,L);return}t.bindTexture(r.TEXTURE_3D,ae.__webglTexture,r.TEXTURE0+L)}function H(k,L){const ae=n.get(k);if(k.version>0&&ae.__version!==k.version){le(ae,k,L);return}t.bindTexture(r.TEXTURE_CUBE_MAP,ae.__webglTexture,r.TEXTURE0+L)}const J={[Sp]:r.REPEAT,[To]:r.CLAMP_TO_EDGE,[Mp]:r.MIRRORED_REPEAT},ee={[tr]:r.NEAREST,[vE]:r.NEAREST_MIPMAP_NEAREST,[bc]:r.NEAREST_MIPMAP_LINEAR,[Tn]:r.LINEAR,[Ch]:r.LINEAR_MIPMAP_NEAREST,[wo]:r.LINEAR_MIPMAP_LINEAR},z={[ME]:r.NEVER,[RE]:r.ALWAYS,[EE]:r.LESS,[Yy]:r.LEQUAL,[TE]:r.EQUAL,[AE]:r.GEQUAL,[wE]:r.GREATER,[CE]:r.NOTEQUAL};function te(k,L){if(L.type===gr&&e.has("OES_texture_float_linear")===!1&&(L.magFilter===Tn||L.magFilter===Ch||L.magFilter===bc||L.magFilter===wo||L.minFilter===Tn||L.minFilter===Ch||L.minFilter===bc||L.minFilter===wo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(k,r.TEXTURE_WRAP_S,J[L.wrapS]),r.texParameteri(k,r.TEXTURE_WRAP_T,J[L.wrapT]),(k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY)&&r.texParameteri(k,r.TEXTURE_WRAP_R,J[L.wrapR]),r.texParameteri(k,r.TEXTURE_MAG_FILTER,ee[L.magFilter]),r.texParameteri(k,r.TEXTURE_MIN_FILTER,ee[L.minFilter]),L.compareFunction&&(r.texParameteri(k,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(k,r.TEXTURE_COMPARE_FUNC,z[L.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(L.magFilter===tr||L.minFilter!==bc&&L.minFilter!==wo||L.type===gr&&e.has("OES_texture_float_linear")===!1)return;if(L.anisotropy>1||n.get(L).__currentAnisotropy){const ae=e.get("EXT_texture_filter_anisotropic");r.texParameterf(k,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,s.getMaxAnisotropy())),n.get(L).__currentAnisotropy=L.anisotropy}}}function Ce(k,L){let ae=!1;k.__webglInit===void 0&&(k.__webglInit=!0,L.addEventListener("dispose",P));const me=L.source;let _e=g.get(me);_e===void 0&&(_e={},g.set(me,_e));const he=G(L);if(he!==k.__cacheKey){_e[he]===void 0&&(_e[he]={texture:r.createTexture(),usedTimes:0},l.memory.textures++,ae=!0),_e[he].usedTimes++;const Xe=_e[k.__cacheKey];Xe!==void 0&&(_e[k.__cacheKey].usedTimes--,Xe.usedTimes===0&&A(L)),k.__cacheKey=he,k.__webglTexture=_e[he].texture}return ae}function ne(k,L,ae){let me=r.TEXTURE_2D;(L.isDataArrayTexture||L.isCompressedArrayTexture)&&(me=r.TEXTURE_2D_ARRAY),L.isData3DTexture&&(me=r.TEXTURE_3D);const _e=Ce(k,L),he=L.source;t.bindTexture(me,k.__webglTexture,r.TEXTURE0+ae);const Xe=n.get(he);if(he.version!==Xe.__version||_e===!0){t.activeTexture(r.TEXTURE0+ae);const Ae=Ct.getPrimaries(Ct.workingColorSpace),Ue=L.colorSpace===Ls?null:Ct.getPrimaries(L.colorSpace),ct=L.colorSpace===Ls||Ae===Ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,L.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,L.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let Ee=M(L.image,!1,s.maxTextureSize);Ee=Rt(L,Ee);const ke=a.convert(L.format,L.colorSpace),Ze=a.convert(L.type);let et=w(L.internalFormat,ke,Ze,L.colorSpace,L.isVideoTexture);te(me,L);let ze;const ht=L.mipmaps,it=L.isVideoTexture!==!0,At=Xe.__version===void 0||_e===!0,j=he.dataReady,Re=C(L,Ee);if(L.isDepthTexture)et=T(L.format===Va,L.type),At&&(it?t.texStorage2D(r.TEXTURE_2D,1,et,Ee.width,Ee.height):t.texImage2D(r.TEXTURE_2D,0,et,Ee.width,Ee.height,0,ke,Ze,null));else if(L.isDataTexture)if(ht.length>0){it&&At&&t.texStorage2D(r.TEXTURE_2D,Re,et,ht[0].width,ht[0].height);for(let fe=0,pe=ht.length;fe<pe;fe++)ze=ht[fe],it?j&&t.texSubImage2D(r.TEXTURE_2D,fe,0,0,ze.width,ze.height,ke,Ze,ze.data):t.texImage2D(r.TEXTURE_2D,fe,et,ze.width,ze.height,0,ke,Ze,ze.data);L.generateMipmaps=!1}else it?(At&&t.texStorage2D(r.TEXTURE_2D,Re,et,Ee.width,Ee.height),j&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ee.width,Ee.height,ke,Ze,Ee.data)):t.texImage2D(r.TEXTURE_2D,0,et,Ee.width,Ee.height,0,ke,Ze,Ee.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){it&&At&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Re,et,ht[0].width,ht[0].height,Ee.depth);for(let fe=0,pe=ht.length;fe<pe;fe++)if(ze=ht[fe],L.format!==Ci)if(ke!==null)if(it){if(j)if(L.layerUpdates.size>0){const Ne=Mv(ze.width,ze.height,L.format,L.type);for(const Ie of L.layerUpdates){const rt=ze.data.subarray(Ie*Ne/ze.data.BYTES_PER_ELEMENT,(Ie+1)*Ne/ze.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,fe,0,0,Ie,ze.width,ze.height,1,ke,rt)}L.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,fe,0,0,0,ze.width,ze.height,Ee.depth,ke,ze.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,fe,et,ze.width,ze.height,Ee.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?j&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,fe,0,0,0,ze.width,ze.height,Ee.depth,ke,Ze,ze.data):t.texImage3D(r.TEXTURE_2D_ARRAY,fe,et,ze.width,ze.height,Ee.depth,0,ke,Ze,ze.data)}else{it&&At&&t.texStorage2D(r.TEXTURE_2D,Re,et,ht[0].width,ht[0].height);for(let fe=0,pe=ht.length;fe<pe;fe++)ze=ht[fe],L.format!==Ci?ke!==null?it?j&&t.compressedTexSubImage2D(r.TEXTURE_2D,fe,0,0,ze.width,ze.height,ke,ze.data):t.compressedTexImage2D(r.TEXTURE_2D,fe,et,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?j&&t.texSubImage2D(r.TEXTURE_2D,fe,0,0,ze.width,ze.height,ke,Ze,ze.data):t.texImage2D(r.TEXTURE_2D,fe,et,ze.width,ze.height,0,ke,Ze,ze.data)}else if(L.isDataArrayTexture)if(it){if(At&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Re,et,Ee.width,Ee.height,Ee.depth),j)if(L.layerUpdates.size>0){const fe=Mv(Ee.width,Ee.height,L.format,L.type);for(const pe of L.layerUpdates){const Ne=Ee.data.subarray(pe*fe/Ee.data.BYTES_PER_ELEMENT,(pe+1)*fe/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,pe,Ee.width,Ee.height,1,ke,Ze,Ne)}L.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,ke,Ze,Ee.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,et,Ee.width,Ee.height,Ee.depth,0,ke,Ze,Ee.data);else if(L.isData3DTexture)it?(At&&t.texStorage3D(r.TEXTURE_3D,Re,et,Ee.width,Ee.height,Ee.depth),j&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,ke,Ze,Ee.data)):t.texImage3D(r.TEXTURE_3D,0,et,Ee.width,Ee.height,Ee.depth,0,ke,Ze,Ee.data);else if(L.isFramebufferTexture){if(At)if(it)t.texStorage2D(r.TEXTURE_2D,Re,et,Ee.width,Ee.height);else{let fe=Ee.width,pe=Ee.height;for(let Ne=0;Ne<Re;Ne++)t.texImage2D(r.TEXTURE_2D,Ne,et,fe,pe,0,ke,Ze,null),fe>>=1,pe>>=1}}else if(ht.length>0){if(it&&At){const fe=We(ht[0]);t.texStorage2D(r.TEXTURE_2D,Re,et,fe.width,fe.height)}for(let fe=0,pe=ht.length;fe<pe;fe++)ze=ht[fe],it?j&&t.texSubImage2D(r.TEXTURE_2D,fe,0,0,ke,Ze,ze):t.texImage2D(r.TEXTURE_2D,fe,et,ke,Ze,ze);L.generateMipmaps=!1}else if(it){if(At){const fe=We(Ee);t.texStorage2D(r.TEXTURE_2D,Re,et,fe.width,fe.height)}j&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ke,Ze,Ee)}else t.texImage2D(r.TEXTURE_2D,0,et,ke,Ze,Ee);x(L)&&v(me),Xe.__version=he.version,L.onUpdate&&L.onUpdate(L)}k.__version=L.version}function le(k,L,ae){if(L.image.length!==6)return;const me=Ce(k,L),_e=L.source;t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+ae);const he=n.get(_e);if(_e.version!==he.__version||me===!0){t.activeTexture(r.TEXTURE0+ae);const Xe=Ct.getPrimaries(Ct.workingColorSpace),Ae=L.colorSpace===Ls?null:Ct.getPrimaries(L.colorSpace),Ue=L.colorSpace===Ls||Xe===Ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,L.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,L.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const ct=L.isCompressedTexture||L.image[0].isCompressedTexture,Ee=L.image[0]&&L.image[0].isDataTexture,ke=[];for(let pe=0;pe<6;pe++)!ct&&!Ee?ke[pe]=M(L.image[pe],!0,s.maxCubemapSize):ke[pe]=Ee?L.image[pe].image:L.image[pe],ke[pe]=Rt(L,ke[pe]);const Ze=ke[0],et=a.convert(L.format,L.colorSpace),ze=a.convert(L.type),ht=w(L.internalFormat,et,ze,L.colorSpace),it=L.isVideoTexture!==!0,At=he.__version===void 0||me===!0,j=_e.dataReady;let Re=C(L,Ze);te(r.TEXTURE_CUBE_MAP,L);let fe;if(ct){it&&At&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Re,ht,Ze.width,Ze.height);for(let pe=0;pe<6;pe++){fe=ke[pe].mipmaps;for(let Ne=0;Ne<fe.length;Ne++){const Ie=fe[Ne];L.format!==Ci?et!==null?it?j&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne,0,0,Ie.width,Ie.height,et,Ie.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne,ht,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?j&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne,0,0,Ie.width,Ie.height,et,ze,Ie.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne,ht,Ie.width,Ie.height,0,et,ze,Ie.data)}}}else{if(fe=L.mipmaps,it&&At){fe.length>0&&Re++;const pe=We(ke[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Re,ht,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Ee){it?j&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ke[pe].width,ke[pe].height,et,ze,ke[pe].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ht,ke[pe].width,ke[pe].height,0,et,ze,ke[pe].data);for(let Ne=0;Ne<fe.length;Ne++){const rt=fe[Ne].image[pe].image;it?j&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne+1,0,0,rt.width,rt.height,et,ze,rt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne+1,ht,rt.width,rt.height,0,et,ze,rt.data)}}else{it?j&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,et,ze,ke[pe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ht,et,ze,ke[pe]);for(let Ne=0;Ne<fe.length;Ne++){const Ie=fe[Ne];it?j&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne+1,0,0,et,ze,Ie.image[pe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne+1,ht,et,ze,Ie.image[pe])}}}x(L)&&v(r.TEXTURE_CUBE_MAP),he.__version=_e.version,L.onUpdate&&L.onUpdate(L)}k.__version=L.version}function Me(k,L,ae,me,_e,he){const Xe=a.convert(ae.format,ae.colorSpace),Ae=a.convert(ae.type),Ue=w(ae.internalFormat,Xe,Ae,ae.colorSpace),ct=n.get(L),Ee=n.get(ae);if(Ee.__renderTarget=L,!ct.__hasExternalTextures){const ke=Math.max(1,L.width>>he),Ze=Math.max(1,L.height>>he);_e===r.TEXTURE_3D||_e===r.TEXTURE_2D_ARRAY?t.texImage3D(_e,he,Ue,ke,Ze,L.depth,0,Xe,Ae,null):t.texImage2D(_e,he,Ue,ke,Ze,0,Xe,Ae,null)}t.bindFramebuffer(r.FRAMEBUFFER,k),dt(L)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,_e,Ee.__webglTexture,0,mt(L)):(_e===r.TEXTURE_2D||_e>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,me,_e,Ee.__webglTexture,he),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ye(k,L,ae){if(r.bindRenderbuffer(r.RENDERBUFFER,k),L.depthBuffer){const me=L.depthTexture,_e=me&&me.isDepthTexture?me.type:null,he=T(L.stencilBuffer,_e),Xe=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ae=mt(L);dt(L)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ae,he,L.width,L.height):ae?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ae,he,L.width,L.height):r.renderbufferStorage(r.RENDERBUFFER,he,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Xe,r.RENDERBUFFER,k)}else{const me=L.textures;for(let _e=0;_e<me.length;_e++){const he=me[_e],Xe=a.convert(he.format,he.colorSpace),Ae=a.convert(he.type),Ue=w(he.internalFormat,Xe,Ae,he.colorSpace),ct=mt(L);ae&&dt(L)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ct,Ue,L.width,L.height):dt(L)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ct,Ue,L.width,L.height):r.renderbufferStorage(r.RENDERBUFFER,Ue,L.width,L.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function de(k,L){if(L&&L.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,k),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=n.get(L.depthTexture);me.__renderTarget=L,(!me.__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)&&(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),Z(L.depthTexture,0);const _e=me.__webglTexture,he=mt(L);if(L.depthTexture.format===Ia)dt(L)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,_e,0,he):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,_e,0);else if(L.depthTexture.format===Va)dt(L)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,_e,0,he):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function De(k){const L=n.get(k),ae=k.isWebGLCubeRenderTarget===!0;if(L.__boundDepthTexture!==k.depthTexture){const me=k.depthTexture;if(L.__depthDisposeCallback&&L.__depthDisposeCallback(),me){const _e=()=>{delete L.__boundDepthTexture,delete L.__depthDisposeCallback,me.removeEventListener("dispose",_e)};me.addEventListener("dispose",_e),L.__depthDisposeCallback=_e}L.__boundDepthTexture=me}if(k.depthTexture&&!L.__autoAllocateDepthBuffer){if(ae)throw new Error("target.depthTexture not supported in Cube render targets");de(L.__webglFramebuffer,k)}else if(ae){L.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(r.FRAMEBUFFER,L.__webglFramebuffer[me]),L.__webglDepthbuffer[me]===void 0)L.__webglDepthbuffer[me]=r.createRenderbuffer(),ye(L.__webglDepthbuffer[me],k,!1);else{const _e=k.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=L.__webglDepthbuffer[me];r.bindRenderbuffer(r.RENDERBUFFER,he),r.framebufferRenderbuffer(r.FRAMEBUFFER,_e,r.RENDERBUFFER,he)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,L.__webglFramebuffer),L.__webglDepthbuffer===void 0)L.__webglDepthbuffer=r.createRenderbuffer(),ye(L.__webglDepthbuffer,k,!1);else{const me=k.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,_e=L.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,_e),r.framebufferRenderbuffer(r.FRAMEBUFFER,me,r.RENDERBUFFER,_e)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function $e(k,L,ae){const me=n.get(k);L!==void 0&&Me(me.__webglFramebuffer,k,k.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ae!==void 0&&De(k)}function Tt(k){const L=k.texture,ae=n.get(k),me=n.get(L);k.addEventListener("dispose",I);const _e=k.textures,he=k.isWebGLCubeRenderTarget===!0,Xe=_e.length>1;if(Xe||(me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture()),me.__version=L.version,l.memory.textures++),he){ae.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(L.mipmaps&&L.mipmaps.length>0){ae.__webglFramebuffer[Ae]=[];for(let Ue=0;Ue<L.mipmaps.length;Ue++)ae.__webglFramebuffer[Ae][Ue]=r.createFramebuffer()}else ae.__webglFramebuffer[Ae]=r.createFramebuffer()}else{if(L.mipmaps&&L.mipmaps.length>0){ae.__webglFramebuffer=[];for(let Ae=0;Ae<L.mipmaps.length;Ae++)ae.__webglFramebuffer[Ae]=r.createFramebuffer()}else ae.__webglFramebuffer=r.createFramebuffer();if(Xe)for(let Ae=0,Ue=_e.length;Ae<Ue;Ae++){const ct=n.get(_e[Ae]);ct.__webglTexture===void 0&&(ct.__webglTexture=r.createTexture(),l.memory.textures++)}if(k.samples>0&&dt(k)===!1){ae.__webglMultisampledFramebuffer=r.createFramebuffer(),ae.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer);for(let Ae=0;Ae<_e.length;Ae++){const Ue=_e[Ae];ae.__webglColorRenderbuffer[Ae]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ae.__webglColorRenderbuffer[Ae]);const ct=a.convert(Ue.format,Ue.colorSpace),Ee=a.convert(Ue.type),ke=w(Ue.internalFormat,ct,Ee,Ue.colorSpace,k.isXRRenderTarget===!0),Ze=mt(k);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ze,ke,k.width,k.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.RENDERBUFFER,ae.__webglColorRenderbuffer[Ae])}r.bindRenderbuffer(r.RENDERBUFFER,null),k.depthBuffer&&(ae.__webglDepthRenderbuffer=r.createRenderbuffer(),ye(ae.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(he){t.bindTexture(r.TEXTURE_CUBE_MAP,me.__webglTexture),te(r.TEXTURE_CUBE_MAP,L);for(let Ae=0;Ae<6;Ae++)if(L.mipmaps&&L.mipmaps.length>0)for(let Ue=0;Ue<L.mipmaps.length;Ue++)Me(ae.__webglFramebuffer[Ae][Ue],k,L,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ue);else Me(ae.__webglFramebuffer[Ae],k,L,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);x(L)&&v(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Xe){for(let Ae=0,Ue=_e.length;Ae<Ue;Ae++){const ct=_e[Ae],Ee=n.get(ct);t.bindTexture(r.TEXTURE_2D,Ee.__webglTexture),te(r.TEXTURE_2D,ct),Me(ae.__webglFramebuffer,k,ct,r.COLOR_ATTACHMENT0+Ae,r.TEXTURE_2D,0),x(ct)&&v(r.TEXTURE_2D)}t.unbindTexture()}else{let Ae=r.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(Ae=k.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ae,me.__webglTexture),te(Ae,L),L.mipmaps&&L.mipmaps.length>0)for(let Ue=0;Ue<L.mipmaps.length;Ue++)Me(ae.__webglFramebuffer[Ue],k,L,r.COLOR_ATTACHMENT0,Ae,Ue);else Me(ae.__webglFramebuffer,k,L,r.COLOR_ATTACHMENT0,Ae,0);x(L)&&v(Ae),t.unbindTexture()}k.depthBuffer&&De(k)}function at(k){const L=k.textures;for(let ae=0,me=L.length;ae<me;ae++){const _e=L[ae];if(x(_e)){const he=b(k),Xe=n.get(_e).__webglTexture;t.bindTexture(he,Xe),v(he),t.unbindTexture()}}}const Nt=[],X=[];function Xn(k){if(k.samples>0){if(dt(k)===!1){const L=k.textures,ae=k.width,me=k.height;let _e=r.COLOR_BUFFER_BIT;const he=k.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Xe=n.get(k),Ae=L.length>1;if(Ae)for(let Ue=0;Ue<L.length;Ue++)t.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ue,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ue,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let Ue=0;Ue<L.length;Ue++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(_e|=r.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(_e|=r.STENCIL_BUFFER_BIT)),Ae){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Xe.__webglColorRenderbuffer[Ue]);const ct=n.get(L[Ue]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ct,0)}r.blitFramebuffer(0,0,ae,me,0,0,ae,me,_e,r.NEAREST),f===!0&&(Nt.length=0,X.length=0,Nt.push(r.COLOR_ATTACHMENT0+Ue),k.depthBuffer&&k.resolveDepthBuffer===!1&&(Nt.push(he),X.push(he),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,X)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Nt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ae)for(let Ue=0;Ue<L.length;Ue++){t.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ue,r.RENDERBUFFER,Xe.__webglColorRenderbuffer[Ue]);const ct=n.get(L[Ue]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ue,r.TEXTURE_2D,ct,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.resolveDepthBuffer===!1&&f){const L=k.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[L])}}}function mt(k){return Math.min(s.maxSamples,k.samples)}function dt(k){const L=n.get(k);return k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function Ye(k){const L=l.render.frame;h.get(k)!==L&&(h.set(k,L),k.update())}function Rt(k,L){const ae=k.colorSpace,me=k.format,_e=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||ae!==Ha&&ae!==Ls&&(Ct.getTransfer(ae)===Pt?(me!==Ci||_e!==Kr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ae)),L}function We(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(d.width=k.naturalWidth||k.width,d.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(d.width=k.displayWidth,d.height=k.displayHeight):(d.width=k.width,d.height=k.height),d}this.allocateTextureUnit=B,this.resetTextureUnits=O,this.setTexture2D=Z,this.setTexture2DArray=q,this.setTexture3D=$,this.setTextureCube=H,this.rebindTextures=$e,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=Xn,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=dt}function sb(r,e){function t(n,s=Ls){let a;const l=Ct.getTransfer(s);if(n===Kr)return r.UNSIGNED_BYTE;if(n===Mm)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Em)return r.UNSIGNED_SHORT_5_5_5_1;if(n===ky)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Uy)return r.BYTE;if(n===Oy)return r.SHORT;if(n===eu)return r.UNSIGNED_SHORT;if(n===Sm)return r.INT;if(n===Do)return r.UNSIGNED_INT;if(n===gr)return r.FLOAT;if(n===Qa)return r.HALF_FLOAT;if(n===zy)return r.ALPHA;if(n===By)return r.RGB;if(n===Ci)return r.RGBA;if(n===Vy)return r.LUMINANCE;if(n===Hy)return r.LUMINANCE_ALPHA;if(n===Ia)return r.DEPTH_COMPONENT;if(n===Va)return r.DEPTH_STENCIL;if(n===Gy)return r.RED;if(n===Tm)return r.RED_INTEGER;if(n===Wy)return r.RG;if(n===wm)return r.RG_INTEGER;if(n===Cm)return r.RGBA_INTEGER;if(n===tf||n===nf||n===rf||n===sf)if(l===Pt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===tf)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===nf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===rf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===tf)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===nf)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===rf)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sf)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ep||n===Tp||n===wp||n===Cp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Ep)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Tp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Cp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ap||n===Rp||n===bp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Ap||n===Rp)return l===Pt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===bp)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Pp||n===Dp||n===Ip||n===Np||n===Lp||n===Fp||n===Up||n===Op||n===kp||n===zp||n===Bp||n===Vp||n===Hp||n===Gp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Pp)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Dp)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ip)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Np)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Lp)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fp)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Up)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Op)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===kp)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zp)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bp)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vp)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Hp)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Gp)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===of||n===Wp||n===Xp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===of)return l===Pt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xy||n===qp||n===Yp||n===jp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===of)return a.COMPRESSED_RED_RGTC1_EXT;if(n===qp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Yp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ba?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const ob={type:"move"};class Jh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new se,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new se),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new se,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new se),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,a=null,l=null;const u=this._targetRay,f=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){l=!0;for(const M of e.hand.values()){const x=t.getJointPose(M,n),v=this._getHandJoint(d,M);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const h=d.joints["index-finger-tip"],m=d.joints["thumb-tip"],g=h.position.distanceTo(m.position),_=.02,S=.005;d.inputState.pinching&&g>_+S?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&g<=_-S&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1));u!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(ob)))}return u!==null&&(u.visible=s!==null),f!==null&&(f.visible=a!==null),d!==null&&(d.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Xl;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const ab=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ub{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Vn,a=e.properties.get(s);a.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ir({vertexShader:ab,fragmentShader:lb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ui(new Qr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cb extends Lo{constructor(e,t){super();const n=this;let s=null,a=1,l=null,u="local-floor",f=1,d=null,h=null,m=null,g=null,_=null,S=null;const M=new ub,x=t.getContextAttributes();let v=null,b=null;const w=[],T=[],C=new ut;let P=null;const I=new Vi;I.viewport=new rn;const D=new Vi;D.viewport=new rn;const A=[I,D],R=new RT;let F=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let le=w[ne];return le===void 0&&(le=new Jh,w[ne]=le),le.getTargetRaySpace()},this.getControllerGrip=function(ne){let le=w[ne];return le===void 0&&(le=new Jh,w[ne]=le),le.getGripSpace()},this.getHand=function(ne){let le=w[ne];return le===void 0&&(le=new Jh,w[ne]=le),le.getHandSpace()};function B(ne){const le=T.indexOf(ne.inputSource);if(le===-1)return;const Me=w[le];Me!==void 0&&(Me.update(ne.inputSource,ne.frame,d||l),Me.dispatchEvent({type:ne.type,data:ne.inputSource}))}function G(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",Z);for(let ne=0;ne<w.length;ne++){const le=T[ne];le!==null&&(T[ne]=null,w[ne].disconnect(le))}F=null,O=null,M.reset(),e.setRenderTarget(v),_=null,g=null,m=null,s=null,b=null,Ce.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){a=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){u=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||l},this.setReferenceSpace=function(ne){d=ne},this.getBaseLayer=function(){return g!==null?g:_},this.getBinding=function(){return m},this.getFrame=function(){return S},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(v=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",G),s.addEventListener("inputsourceschange",Z),x.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(C),s.enabledFeatures!==void 0&&s.enabledFeatures.includes("layers")){let Me=null,ye=null,de=null;x.depth&&(de=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=x.stencil?Va:Ia,ye=x.stencil?Ba:Do);const De={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:a};m=new XRWebGLBinding(s,t),g=m.createProjectionLayer(De),s.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),b=new nr(g.textureWidth,g.textureHeight,{format:Ci,type:Kr,depthTexture:new ux(g.textureWidth,g.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1})}else{const Me={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:a};_=new XRWebGLLayer(s,t,Me),s.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),b=new nr(_.framebufferWidth,_.framebufferHeight,{format:Ci,type:Kr,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}b.isXRRenderTarget=!0,this.setFoveation(f),d=null,l=await s.requestReferenceSpace(u),Ce.setContext(s),Ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function Z(ne){for(let le=0;le<ne.removed.length;le++){const Me=ne.removed[le],ye=T.indexOf(Me);ye>=0&&(T[ye]=null,w[ye].disconnect(Me))}for(let le=0;le<ne.added.length;le++){const Me=ne.added[le];let ye=T.indexOf(Me);if(ye===-1){for(let De=0;De<w.length;De++)if(De>=T.length){T.push(Me),ye=De;break}else if(T[De]===null){T[De]=Me,ye=De;break}if(ye===-1)break}const de=w[ye];de&&de.connect(Me)}}const q=new se,$=new se;function H(ne,le,Me){q.setFromMatrixPosition(le.matrixWorld),$.setFromMatrixPosition(Me.matrixWorld);const ye=q.distanceTo($),de=le.projectionMatrix.elements,De=Me.projectionMatrix.elements,$e=de[14]/(de[10]-1),Tt=de[14]/(de[10]+1),at=(de[9]+1)/de[5],Nt=(de[9]-1)/de[5],X=(de[8]-1)/de[0],Xn=(De[8]+1)/De[0],mt=$e*X,dt=$e*Xn,Ye=ye/(-X+Xn),Rt=Ye*-X;if(le.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(Rt),ne.translateZ(Ye),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),de[10]===-1)ne.projectionMatrix.copy(le.projectionMatrix),ne.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const We=$e+Ye,k=Tt+Ye,L=mt-Rt,ae=dt+(ye-Rt),me=at*Tt/k*We,_e=Nt*Tt/k*We;ne.projectionMatrix.makePerspective(L,ae,me,_e,We,k),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function J(ne,le){le===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(le.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;let le=ne.near,Me=ne.far;M.texture!==null&&(M.depthNear>0&&(le=M.depthNear),M.depthFar>0&&(Me=M.depthFar)),R.near=D.near=I.near=le,R.far=D.far=I.far=Me,(F!==R.near||O!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),F=R.near,O=R.far),I.layers.mask=ne.layers.mask|2,D.layers.mask=ne.layers.mask|4,R.layers.mask=I.layers.mask|D.layers.mask;const ye=ne.parent,de=R.cameras;J(R,ye);for(let De=0;De<de.length;De++)J(de[De],ye);de.length===2?H(R,I,D):R.projectionMatrix.copy(I.projectionMatrix),ee(ne,R,ye)};function ee(ne,le,Me){Me===null?ne.matrix.copy(le.matrixWorld):(ne.matrix.copy(Me.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(le.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(le.projectionMatrix),ne.projectionMatrixInverse.copy(le.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=tu*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(g===null&&_===null))return f},this.setFoveation=function(ne){f=ne,g!==null&&(g.fixedFoveation=ne),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=ne)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(R)};let z=null;function te(ne,le){if(h=le.getViewerPose(d||l),S=le,h!==null){const Me=h.views;_!==null&&(e.setRenderTargetFramebuffer(b,_.framebuffer),e.setRenderTarget(b));let ye=!1;Me.length!==R.cameras.length&&(R.cameras.length=0,ye=!0);for(let De=0;De<Me.length;De++){const $e=Me[De];let Tt=null;if(_!==null)Tt=_.getViewport($e);else{const Nt=m.getViewSubImage(g,$e);Tt=Nt.viewport,De===0&&(e.setRenderTargetTextures(b,Nt.colorTexture,g.ignoreDepthValues?void 0:Nt.depthStencilTexture),e.setRenderTarget(b))}let at=A[De];at===void 0&&(at=new Vi,at.layers.enable(De),at.viewport=new rn,A[De]=at),at.matrix.fromArray($e.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray($e.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),De===0&&(R.matrix.copy(at.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ye===!0&&R.cameras.push(at)}const de=s.enabledFeatures;if(de&&de.includes("depth-sensing")){const De=m.getDepthInformation(Me[0]);De&&De.isValid&&De.texture&&M.init(e,De,s.renderState)}}for(let Me=0;Me<w.length;Me++){const ye=T[Me],de=w[Me];ye!==null&&de!==void 0&&de.update(ye,le,d||l)}z&&z(ne,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),S=null}const Ce=new fx;Ce.setAnimationLoop(te),this.setAnimationLoop=function(ne){z=ne},this.dispose=function(){}}}const mo=new Sr,fb=new sn;function db(r,e){function t(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function n(x,v){v.color.getRGB(x.fogColor.value,nx(r)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function s(x,v,b,w,T){v.isMeshBasicMaterial||v.isMeshLambertMaterial?a(x,v):v.isMeshToonMaterial?(a(x,v),m(x,v)):v.isMeshPhongMaterial?(a(x,v),h(x,v)):v.isMeshStandardMaterial?(a(x,v),g(x,v),v.isMeshPhysicalMaterial&&_(x,v,T)):v.isMeshMatcapMaterial?(a(x,v),S(x,v)):v.isMeshDepthMaterial?a(x,v):v.isMeshDistanceMaterial?(a(x,v),M(x,v)):v.isMeshNormalMaterial?a(x,v):v.isLineBasicMaterial?(l(x,v),v.isLineDashedMaterial&&u(x,v)):v.isPointsMaterial?f(x,v,b,w):v.isSpriteMaterial?d(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function a(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,t(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===ci&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,t(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===ci&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,t(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,t(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const b=e.get(v),w=b.envMap,T=b.envMapRotation;w&&(x.envMap.value=w,mo.copy(T),mo.x*=-1,mo.y*=-1,mo.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(mo.y*=-1,mo.z*=-1),x.envMapRotation.value.setFromMatrix4(fb.makeRotationFromEuler(mo)),x.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap&&(x.lightMap.value=v.lightMap,x.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,x.lightMapTransform)),v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,x.aoMapTransform))}function l(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform))}function u(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function f(x,v,b,w){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*b,x.scale.value=w*.5,v.map&&(x.map.value=v.map,t(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function d(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function h(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function m(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function g(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,x.roughnessMapTransform)),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function _(x,v,b){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===ci&&x.clearcoatNormalScale.value.negate())),v.dispersion>0&&(x.dispersion.value=v.dispersion),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=b.texture,x.transmissionSamplerSize.value.set(b.width,b.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,x.specularIntensityMapTransform))}function S(x,v){v.matcap&&(x.matcap.value=v.matcap)}function M(x,v){const b=e.get(v).light;x.referencePosition.value.setFromMatrixPosition(b.matrixWorld),x.nearDistance.value=b.shadow.camera.near,x.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function hb(r,e,t,n){let s={},a={},l=[];const u=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function f(b,w){const T=w.program;n.uniformBlockBinding(b,T)}function d(b,w){let T=s[b.id];T===void 0&&(S(b),T=h(b),s[b.id]=T,b.addEventListener("dispose",x));const C=w.program;n.updateUBOMapping(b,C);const P=e.render.frame;a[b.id]!==P&&(g(b),a[b.id]=P)}function h(b){const w=m();b.__bindingPointIndex=w;const T=r.createBuffer(),C=b.__size,P=b.usage;return r.bindBuffer(r.UNIFORM_BUFFER,T),r.bufferData(r.UNIFORM_BUFFER,C,P),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,w,T),T}function m(){for(let b=0;b<u;b++)if(l.indexOf(b)===-1)return l.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(b){const w=s[b.id],T=b.uniforms,C=b.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let P=0,I=T.length;P<I;P++){const D=Array.isArray(T[P])?T[P]:[T[P]];for(let A=0,R=D.length;A<R;A++){const F=D[A];if(_(F,P,A,C)===!0){const O=F.__offset,B=Array.isArray(F.value)?F.value:[F.value];let G=0;for(let Z=0;Z<B.length;Z++){const q=B[Z],$=M(q);typeof q=="number"||typeof q=="boolean"?(F.__data[0]=q,r.bufferSubData(r.UNIFORM_BUFFER,O+G,F.__data)):q.isMatrix3?(F.__data[0]=q.elements[0],F.__data[1]=q.elements[1],F.__data[2]=q.elements[2],F.__data[3]=0,F.__data[4]=q.elements[3],F.__data[5]=q.elements[4],F.__data[6]=q.elements[5],F.__data[7]=0,F.__data[8]=q.elements[6],F.__data[9]=q.elements[7],F.__data[10]=q.elements[8],F.__data[11]=0):(q.toArray(F.__data,G),G+=$.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,O,F.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function _(b,w,T,C){const P=b.value,I=w+"_"+T;if(C[I]===void 0)return typeof P=="number"||typeof P=="boolean"?C[I]=P:C[I]=P.clone(),!0;{const D=C[I];if(typeof P=="number"||typeof P=="boolean"){if(D!==P)return C[I]=P,!0}else if(D.equals(P)===!1)return D.copy(P),!0}return!1}function S(b){const w=b.uniforms;let T=0;const C=16;for(let I=0,D=w.length;I<D;I++){const A=Array.isArray(w[I])?w[I]:[w[I]];for(let R=0,F=A.length;R<F;R++){const O=A[R],B=Array.isArray(O.value)?O.value:[O.value];for(let G=0,Z=B.length;G<Z;G++){const q=B[G],$=M(q),H=T%C,J=H%$.boundary,ee=H+J;T+=J,ee!==0&&C-ee<$.storage&&(T+=C-ee),O.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=T,T+=$.storage}}}const P=T%C;return P>0&&(T+=C-P),b.__size=T,b.__cache={},this}function M(b){const w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),w}function x(b){const w=b.target;w.removeEventListener("dispose",x);const T=l.indexOf(w.__bindingPointIndex);l.splice(T,1),r.deleteBuffer(s[w.id]),delete s[w.id],delete a[w.id]}function v(){for(const b in s)r.deleteBuffer(s[b]);l=[],s={},a={}}return{bind:f,update:d,dispose:v}}class pb{constructor(e={}){const{canvas:t=XE(),context:n=null,depth:s=!0,stencil:a=!1,alpha:l=!1,antialias:u=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:m=!1,reverseDepthBuffer:g=!1}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=l;const S=new Uint32Array(4),M=new Int32Array(4);let x=null,v=null;const b=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Bi,this.toneMapping=ks,this.toneMappingExposure=1;const T=this;let C=!1,P=0,I=0,D=null,A=-1,R=null;const F=new rn,O=new rn;let B=null;const G=new ft(0);let Z=0,q=t.width,$=t.height,H=1,J=null,ee=null;const z=new rn(0,0,q,$),te=new rn(0,0,q,$);let Ce=!1;const ne=new ax;let le=!1,Me=!1;this.transmissionResolutionScale=1;const ye=new sn,de=new sn,De=new se,$e=new rn,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function Nt(){return D===null?H:1}let X=n;function Xn(U,K){return t.getContext(U,K)}try{const U={alpha:!0,depth:s,stencil:a,antialias:u,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:h,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xm}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",Ie,!1),X===null){const K="webgl2";if(X=Xn(K,U),X===null)throw Xn(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let mt,dt,Ye,Rt,We,k,L,ae,me,_e,he,Xe,Ae,Ue,ct,Ee,ke,Ze,et,ze,ht,it,At,j;function Re(){mt=new EA(X),mt.init(),it=new sb(X,mt),dt=new _A(X,mt,e,it),Ye=new ib(X,mt),dt.reverseDepthBuffer&&g&&Ye.buffers.depth.setReversed(!0),Rt=new CA(X),We=new WR,k=new rb(X,mt,Ye,We,dt,it,Rt),L=new yA(T),ae=new MA(T),me=new NT(X),At=new mA(X,me),_e=new TA(X,me,Rt,At),he=new RA(X,_e,me,Rt),et=new AA(X,dt,k),Ee=new vA(We),Xe=new GR(T,L,ae,mt,dt,At,Ee),Ae=new db(T,We),Ue=new qR,ct=new QR(mt),Ze=new pA(T,L,ae,Ye,he,_,f),ke=new tb(T,he,dt),j=new hb(X,Rt,dt,Ye),ze=new gA(X,mt,Rt),ht=new wA(X,mt,Rt),Rt.programs=Xe.programs,T.capabilities=dt,T.extensions=mt,T.properties=We,T.renderLists=Ue,T.shadowMap=ke,T.state=Ye,T.info=Rt}Re();const fe=new cb(T,X);this.xr=fe,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const U=mt.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=mt.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(U){U!==void 0&&(H=U,this.setSize(q,$,!1))},this.getSize=function(U){return U.set(q,$)},this.setSize=function(U,K,ue=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=U,$=K,t.width=Math.floor(U*H),t.height=Math.floor(K*H),ue===!0&&(t.style.width=U+"px",t.style.height=K+"px"),this.setViewport(0,0,U,K)},this.getDrawingBufferSize=function(U){return U.set(q*H,$*H).floor()},this.setDrawingBufferSize=function(U,K,ue){q=U,$=K,H=ue,t.width=Math.floor(U*ue),t.height=Math.floor(K*ue),this.setViewport(0,0,U,K)},this.getCurrentViewport=function(U){return U.copy(F)},this.getViewport=function(U){return U.copy(z)},this.setViewport=function(U,K,ue,re){U.isVector4?z.set(U.x,U.y,U.z,U.w):z.set(U,K,ue,re),Ye.viewport(F.copy(z).multiplyScalar(H).round())},this.getScissor=function(U){return U.copy(te)},this.setScissor=function(U,K,ue,re){U.isVector4?te.set(U.x,U.y,U.z,U.w):te.set(U,K,ue,re),Ye.scissor(O.copy(te).multiplyScalar(H).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(U){Ye.setScissorTest(Ce=U)},this.setOpaqueSort=function(U){J=U},this.setTransparentSort=function(U){ee=U},this.getClearColor=function(U){return U.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(U=!0,K=!0,ue=!0){let re=0;if(U){let Q=!1;if(D!==null){const Se=D.texture.format;Q=Se===Cm||Se===wm||Se===Tm}if(Q){const Se=D.texture.type,be=Se===Kr||Se===Do||Se===eu||Se===Ba||Se===Mm||Se===Em,Le=Ze.getClearColor(),Be=Ze.getClearAlpha(),tt=Le.r,Je=Le.g,He=Le.b;be?(S[0]=tt,S[1]=Je,S[2]=He,S[3]=Be,X.clearBufferuiv(X.COLOR,0,S)):(M[0]=tt,M[1]=Je,M[2]=He,M[3]=Be,X.clearBufferiv(X.COLOR,0,M))}else re|=X.COLOR_BUFFER_BIT}K&&(re|=X.DEPTH_BUFFER_BIT),ue&&(re|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",Ie,!1),Ze.dispose(),Ue.dispose(),ct.dispose(),We.dispose(),L.dispose(),ae.dispose(),he.dispose(),At.dispose(),j.dispose(),Xe.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",zo),fe.removeEventListener("sessionend",is),wr.stop()};function pe(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const U=Rt.autoReset,K=ke.enabled,ue=ke.autoUpdate,re=ke.needsUpdate,Q=ke.type;Re(),Rt.autoReset=U,ke.enabled=K,ke.autoUpdate=ue,ke.needsUpdate=re,ke.type=Q}function Ie(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function rt(U){const K=U.target;K.removeEventListener("dispose",rt),Ut(K)}function Ut(U){dn(U),We.remove(U)}function dn(U){const K=We.get(U).programs;K!==void 0&&(K.forEach(function(ue){Xe.releaseProgram(ue)}),U.isShaderMaterial&&Xe.releaseShaderCache(U))}this.renderBufferDirect=function(U,K,ue,re,Q,Se){K===null&&(K=Tt);const be=Q.isMesh&&Q.matrixWorld.determinant()<0,Le=Eu(U,K,ue,re,Q);Ye.setMaterial(re,be);let Be=ue.index,tt=1;if(re.wireframe===!0){if(Be=_e.getWireframeAttribute(ue),Be===void 0)return;tt=2}const Je=ue.drawRange,He=ue.attributes.position;let vt=Je.start*tt,st=(Je.start+Je.count)*tt;Se!==null&&(vt=Math.max(vt,Se.start*tt),st=Math.min(st,(Se.start+Se.count)*tt)),Be!==null?(vt=Math.max(vt,0),st=Math.min(st,Be.count)):He!=null&&(vt=Math.max(vt,0),st=Math.min(st,He.count));const $t=st-vt;if($t<0||$t===1/0)return;At.setup(Q,re,Le,ue,Be);let zt,xt=ze;if(Be!==null&&(zt=me.get(Be),xt=ht,xt.setIndex(zt)),Q.isMesh)re.wireframe===!0?(Ye.setLineWidth(re.wireframeLinewidth*Nt()),xt.setMode(X.LINES)):xt.setMode(X.TRIANGLES);else if(Q.isLine){let je=re.linewidth;je===void 0&&(je=1),Ye.setLineWidth(je*Nt()),Q.isLineSegments?xt.setMode(X.LINES):Q.isLineLoop?xt.setMode(X.LINE_LOOP):xt.setMode(X.LINE_STRIP)}else Q.isPoints?xt.setMode(X.POINTS):Q.isSprite&&xt.setMode(X.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)xt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))xt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const je=Q._multiDrawStarts,Zt=Q._multiDrawCounts,gt=Q._multiDrawCount,Dn=Be?me.get(Be).bytesPerElement:1,ss=We.get(re).currentProgram.getUniforms();for(let Yn=0;Yn<gt;Yn++)ss.setValue(X,"_gl_DrawID",Yn),xt.render(je[Yn]/Dn,Zt[Yn])}else if(Q.isInstancedMesh)xt.renderInstances(vt,$t,Q.count);else if(ue.isInstancedBufferGeometry){const je=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Zt=Math.min(ue.instanceCount,je);xt.renderInstances(vt,$t,Zt)}else xt.render(vt,$t)};function St(U,K,ue){U.transparent===!0&&U.side===pr&&U.forceSinglePass===!1?(U.side=ci,U.needsUpdate=!0,Bo(U,K,ue),U.side=Vs,U.needsUpdate=!0,Bo(U,K,ue),U.side=pr):Bo(U,K,ue)}this.compile=function(U,K,ue=null){ue===null&&(ue=U),v=ct.get(ue),v.init(K),w.push(v),ue.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(v.pushLight(Q),Q.castShadow&&v.pushShadow(Q))}),U!==ue&&U.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(v.pushLight(Q),Q.castShadow&&v.pushShadow(Q))}),v.setupLights();const re=new Set;return U.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Se=Q.material;if(Se)if(Array.isArray(Se))for(let be=0;be<Se.length;be++){const Le=Se[be];St(Le,ue,Q),re.add(Le)}else St(Se,ue,Q),re.add(Se)}),w.pop(),v=null,re},this.compileAsync=function(U,K,ue=null){const re=this.compile(U,K,ue);return new Promise(Q=>{function Se(){if(re.forEach(function(be){We.get(be).currentProgram.isReady()&&re.delete(be)}),re.size===0){Q(U);return}setTimeout(Se,10)}mt.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let ti=null;function qn(U){ti&&ti(U)}function zo(){wr.stop()}function is(){wr.start()}const wr=new fx;wr.setAnimationLoop(qn),typeof self<"u"&&wr.setContext(self),this.setAnimationLoop=function(U){ti=U,fe.setAnimationLoop(U),U===null?wr.stop():wr.start()},fe.addEventListener("sessionstart",zo),fe.addEventListener("sessionend",is),this.render=function(U,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(K),K=fe.getCamera()),U.isScene===!0&&U.onBeforeRender(T,U,K,D),v=ct.get(U,w.length),v.init(K),w.push(v),de.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),ne.setFromProjectionMatrix(de),Me=this.localClippingEnabled,le=Ee.init(this.clippingPlanes,Me),x=Ue.get(U,b.length),x.init(),b.push(x),fe.enabled===!0&&fe.isPresenting===!0){const Se=T.xr.getDepthSensingMesh();Se!==null&&Cr(Se,K,-1/0,T.sortObjects)}Cr(U,K,0,T.sortObjects),x.finish(),T.sortObjects===!0&&x.sort(J,ee),at=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,at&&Ze.addToRenderList(x,U),this.info.render.frame++,le===!0&&Ee.beginShadows();const ue=v.state.shadowsArray;ke.render(ue,U,K),le===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=x.opaque,Q=x.transmissive;if(v.setupLights(),K.isArrayCamera){const Se=K.cameras;if(Q.length>0)for(let be=0,Le=Se.length;be<Le;be++){const Be=Se[be];js(re,Q,U,Be)}at&&Ze.render(U);for(let be=0,Le=Se.length;be<Le;be++){const Be=Se[be];Ys(x,U,Be,Be.viewport)}}else Q.length>0&&js(re,Q,U,K),at&&Ze.render(U),Ys(x,U,K);D!==null&&I===0&&(k.updateMultisampleRenderTarget(D),k.updateRenderTargetMipmap(D)),U.isScene===!0&&U.onAfterRender(T,U,K),At.resetDefaultState(),A=-1,R=null,w.pop(),w.length>0?(v=w[w.length-1],le===!0&&Ee.setGlobalState(T.clippingPlanes,v.state.camera)):v=null,b.pop(),b.length>0?x=b[b.length-1]:x=null};function Cr(U,K,ue,re){if(U.visible===!1)return;if(U.layers.test(K.layers)){if(U.isGroup)ue=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(K);else if(U.isLight)v.pushLight(U),U.castShadow&&v.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||ne.intersectsSprite(U)){re&&$e.setFromMatrixPosition(U.matrixWorld).applyMatrix4(de);const be=he.update(U),Le=U.material;Le.visible&&x.push(U,be,Le,ue,$e.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||ne.intersectsObject(U))){const be=he.update(U),Le=U.material;if(re&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),$e.copy(U.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),$e.copy(be.boundingSphere.center)),$e.applyMatrix4(U.matrixWorld).applyMatrix4(de)),Array.isArray(Le)){const Be=be.groups;for(let tt=0,Je=Be.length;tt<Je;tt++){const He=Be[tt],vt=Le[He.materialIndex];vt&&vt.visible&&x.push(U,be,vt,ue,$e.z,He)}}else Le.visible&&x.push(U,be,Le,ue,$e.z,null)}}const Se=U.children;for(let be=0,Le=Se.length;be<Le;be++)Cr(Se[be],K,ue,re)}function Ys(U,K,ue,re){const Q=U.opaque,Se=U.transmissive,be=U.transparent;v.setupLightsView(ue),le===!0&&Ee.setGlobalState(T.clippingPlanes,ue),re&&Ye.viewport(F.copy(re)),Q.length>0&&rs(Q,K,ue),Se.length>0&&rs(Se,K,ue),be.length>0&&rs(be,K,ue),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function js(U,K,ue,re){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[re.id]===void 0&&(v.state.transmissionRenderTarget[re.id]=new nr(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float")?Qa:Kr,minFilter:wo,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace}));const Se=v.state.transmissionRenderTarget[re.id],be=re.viewport||F;Se.setSize(be.z*T.transmissionResolutionScale,be.w*T.transmissionResolutionScale);const Le=T.getRenderTarget();T.setRenderTarget(Se),T.getClearColor(G),Z=T.getClearAlpha(),Z<1&&T.setClearColor(16777215,.5),T.clear(),at&&Ze.render(ue);const Be=T.toneMapping;T.toneMapping=ks;const tt=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),v.setupLightsView(re),le===!0&&Ee.setGlobalState(T.clippingPlanes,re),rs(U,ue,re),k.updateMultisampleRenderTarget(Se),k.updateRenderTargetMipmap(Se),mt.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let He=0,vt=K.length;He<vt;He++){const st=K[He],$t=st.object,zt=st.geometry,xt=st.material,je=st.group;if(xt.side===pr&&$t.layers.test(re.layers)){const Zt=xt.side;xt.side=ci,xt.needsUpdate=!0,Su($t,ue,re,zt,xt,je),xt.side=Zt,xt.needsUpdate=!0,Je=!0}}Je===!0&&(k.updateMultisampleRenderTarget(Se),k.updateRenderTargetMipmap(Se))}T.setRenderTarget(Le),T.setClearColor(G,Z),tt!==void 0&&(re.viewport=tt),T.toneMapping=Be}function rs(U,K,ue){const re=K.isScene===!0?K.overrideMaterial:null;for(let Q=0,Se=U.length;Q<Se;Q++){const be=U[Q],Le=be.object,Be=be.geometry,tt=re===null?be.material:re,Je=be.group;Le.layers.test(ue.layers)&&Su(Le,K,ue,Be,tt,Je)}}function Su(U,K,ue,re,Q,Se){U.onBeforeRender(T,K,ue,re,Q,Se),U.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),Q.onBeforeRender(T,K,ue,re,U,Se),Q.transparent===!0&&Q.side===pr&&Q.forceSinglePass===!1?(Q.side=ci,Q.needsUpdate=!0,T.renderBufferDirect(ue,K,re,Q,U,Se),Q.side=Vs,Q.needsUpdate=!0,T.renderBufferDirect(ue,K,re,Q,U,Se),Q.side=pr):T.renderBufferDirect(ue,K,re,Q,U,Se),U.onAfterRender(T,K,ue,re,Q,Se)}function Bo(U,K,ue){K.isScene!==!0&&(K=Tt);const re=We.get(U),Q=v.state.lights,Se=v.state.shadowsArray,be=Q.state.version,Le=Xe.getParameters(U,Q.state,Se,K,ue),Be=Xe.getProgramCacheKey(Le);let tt=re.programs;re.environment=U.isMeshStandardMaterial?K.environment:null,re.fog=K.fog,re.envMap=(U.isMeshStandardMaterial?ae:L).get(U.envMap||re.environment),re.envMapRotation=re.environment!==null&&U.envMap===null?K.environmentRotation:U.envMapRotation,tt===void 0&&(U.addEventListener("dispose",rt),tt=new Map,re.programs=tt);let Je=tt.get(Be);if(Je!==void 0){if(re.currentProgram===Je&&re.lightsStateVersion===be)return or(U,Le),Je}else Le.uniforms=Xe.getUniforms(U),U.onBeforeCompile(Le,T),Je=Xe.acquireProgram(Le,Be),tt.set(Be,Je),re.uniforms=Le.uniforms;const He=re.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(He.clippingPlanes=Ee.uniform),or(U,Le),re.needsLights=Wf(U),re.lightsStateVersion=be,re.needsLights&&(He.ambientLightColor.value=Q.state.ambient,He.lightProbe.value=Q.state.probe,He.directionalLights.value=Q.state.directional,He.directionalLightShadows.value=Q.state.directionalShadow,He.spotLights.value=Q.state.spot,He.spotLightShadows.value=Q.state.spotShadow,He.rectAreaLights.value=Q.state.rectArea,He.ltc_1.value=Q.state.rectAreaLTC1,He.ltc_2.value=Q.state.rectAreaLTC2,He.pointLights.value=Q.state.point,He.pointLightShadows.value=Q.state.pointShadow,He.hemisphereLights.value=Q.state.hemi,He.directionalShadowMap.value=Q.state.directionalShadowMap,He.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,He.spotShadowMap.value=Q.state.spotShadowMap,He.spotLightMatrix.value=Q.state.spotLightMatrix,He.spotLightMap.value=Q.state.spotLightMap,He.pointShadowMap.value=Q.state.pointShadowMap,He.pointShadowMatrix.value=Q.state.pointShadowMatrix),re.currentProgram=Je,re.uniformsList=null,Je}function Mu(U){if(U.uniformsList===null){const K=U.currentProgram.getUniforms();U.uniformsList=af.seqWithValue(K.seq,U.uniforms)}return U.uniformsList}function or(U,K){const ue=We.get(U);ue.outputColorSpace=K.outputColorSpace,ue.batching=K.batching,ue.batchingColor=K.batchingColor,ue.instancing=K.instancing,ue.instancingColor=K.instancingColor,ue.instancingMorph=K.instancingMorph,ue.skinning=K.skinning,ue.morphTargets=K.morphTargets,ue.morphNormals=K.morphNormals,ue.morphColors=K.morphColors,ue.morphTargetsCount=K.morphTargetsCount,ue.numClippingPlanes=K.numClippingPlanes,ue.numIntersection=K.numClipIntersection,ue.vertexAlphas=K.vertexAlphas,ue.vertexTangents=K.vertexTangents,ue.toneMapping=K.toneMapping}function Eu(U,K,ue,re,Q){K.isScene!==!0&&(K=Tt),k.resetTextureUnits();const Se=K.fog,be=re.isMeshStandardMaterial?K.environment:null,Le=D===null?T.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Ha,Be=(re.isMeshStandardMaterial?ae:L).get(re.envMap||be),tt=re.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,Je=!!ue.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),He=!!ue.morphAttributes.position,vt=!!ue.morphAttributes.normal,st=!!ue.morphAttributes.color;let $t=ks;re.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&($t=T.toneMapping);const zt=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,xt=zt!==void 0?zt.length:0,je=We.get(re),Zt=v.state.lights;if(le===!0&&(Me===!0||U!==R)){const An=U===R&&re.id===A;Ee.setState(re,U,An)}let gt=!1;re.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Zt.state.version||je.outputColorSpace!==Le||Q.isBatchedMesh&&je.batching===!1||!Q.isBatchedMesh&&je.batching===!0||Q.isBatchedMesh&&je.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&je.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&je.instancing===!1||!Q.isInstancedMesh&&je.instancing===!0||Q.isSkinnedMesh&&je.skinning===!1||!Q.isSkinnedMesh&&je.skinning===!0||Q.isInstancedMesh&&je.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&je.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&je.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&je.instancingMorph===!1&&Q.morphTexture!==null||je.envMap!==Be||re.fog===!0&&je.fog!==Se||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Ee.numPlanes||je.numIntersection!==Ee.numIntersection)||je.vertexAlphas!==tt||je.vertexTangents!==Je||je.morphTargets!==He||je.morphNormals!==vt||je.morphColors!==st||je.toneMapping!==$t||je.morphTargetsCount!==xt)&&(gt=!0):(gt=!0,je.__version=re.version);let Dn=je.currentProgram;gt===!0&&(Dn=Bo(re,K,Q));let ss=!1,Yn=!1,Ar=!1;const Dt=Dn.getUniforms(),In=je.uniforms;if(Ye.useProgram(Dn.program)&&(ss=!0,Yn=!0,Ar=!0),re.id!==A&&(A=re.id,Yn=!0),ss||R!==U){Ye.buffers.depth.getReversed()?(ye.copy(U.projectionMatrix),YE(ye),jE(ye),Dt.setValue(X,"projectionMatrix",ye)):Dt.setValue(X,"projectionMatrix",U.projectionMatrix),Dt.setValue(X,"viewMatrix",U.matrixWorldInverse);const yn=Dt.map.cameraPosition;yn!==void 0&&yn.setValue(X,De.setFromMatrixPosition(U.matrixWorld)),dt.logarithmicDepthBuffer&&Dt.setValue(X,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Dt.setValue(X,"isOrthographic",U.isOrthographicCamera===!0),R!==U&&(R=U,Yn=!0,Ar=!0)}if(Q.isSkinnedMesh){Dt.setOptional(X,Q,"bindMatrix"),Dt.setOptional(X,Q,"bindMatrixInverse");const An=Q.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),Dt.setValue(X,"boneTexture",An.boneTexture,k))}Q.isBatchedMesh&&(Dt.setOptional(X,Q,"batchingTexture"),Dt.setValue(X,"batchingTexture",Q._matricesTexture,k),Dt.setOptional(X,Q,"batchingIdTexture"),Dt.setValue(X,"batchingIdTexture",Q._indirectTexture,k),Dt.setOptional(X,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Dt.setValue(X,"batchingColorTexture",Q._colorsTexture,k));const vn=ue.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&et.update(Q,ue,Dn),(Yn||je.receiveShadow!==Q.receiveShadow)&&(je.receiveShadow=Q.receiveShadow,Dt.setValue(X,"receiveShadow",Q.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(In.envMap.value=Be,In.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&K.environment!==null&&(In.envMapIntensity.value=K.environmentIntensity),Yn&&(Dt.setValue(X,"toneMappingExposure",T.toneMappingExposure),je.needsLights&&Tu(In,Ar),Se&&re.fog===!0&&Ae.refreshFogUniforms(In,Se),Ae.refreshMaterialUniforms(In,re,H,$,v.state.transmissionRenderTarget[U.id]),af.upload(X,Mu(je),In,k)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(af.upload(X,Mu(je),In,k),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Dt.setValue(X,"center",Q.center),Dt.setValue(X,"modelViewMatrix",Q.modelViewMatrix),Dt.setValue(X,"normalMatrix",Q.normalMatrix),Dt.setValue(X,"modelMatrix",Q.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const An=re.uniformsGroups;for(let yn=0,Mt=An.length;yn<Mt;yn++){const ar=An[yn];j.update(ar,Dn),j.bind(ar,Dn)}}return Dn}function Tu(U,K){U.ambientLightColor.needsUpdate=K,U.lightProbe.needsUpdate=K,U.directionalLights.needsUpdate=K,U.directionalLightShadows.needsUpdate=K,U.pointLights.needsUpdate=K,U.pointLightShadows.needsUpdate=K,U.spotLights.needsUpdate=K,U.spotLightShadows.needsUpdate=K,U.rectAreaLights.needsUpdate=K,U.hemisphereLights.needsUpdate=K}function Wf(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(U,K,ue){We.get(U.texture).__webglTexture=K,We.get(U.depthTexture).__webglTexture=ue;const re=We.get(U);re.__hasExternalTextures=!0,re.__autoAllocateDepthBuffer=ue===void 0,re.__autoAllocateDepthBuffer||mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(U,K){const ue=We.get(U);ue.__webglFramebuffer=K,ue.__useDefaultFramebuffer=K===void 0};const wu=X.createFramebuffer();this.setRenderTarget=function(U,K=0,ue=0){D=U,P=K,I=ue;let re=!0,Q=null,Se=!1,be=!1;if(U){const Be=We.get(U);if(Be.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(X.FRAMEBUFFER,null),re=!1;else if(Be.__webglFramebuffer===void 0)k.setupRenderTarget(U);else if(Be.__hasExternalTextures)k.rebindTextures(U,We.get(U.texture).__webglTexture,We.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){const He=U.depthTexture;if(Be.__boundDepthTexture!==He){if(He!==null&&We.has(He)&&(U.width!==He.image.width||U.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(U)}}const tt=U.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(be=!0);const Je=We.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(Je[K])?Q=Je[K][ue]:Q=Je[K],Se=!0):U.samples>0&&k.useMultisampledRTT(U)===!1?Q=We.get(U).__webglMultisampledFramebuffer:Array.isArray(Je)?Q=Je[ue]:Q=Je,F.copy(U.viewport),O.copy(U.scissor),B=U.scissorTest}else F.copy(z).multiplyScalar(H).floor(),O.copy(te).multiplyScalar(H).floor(),B=Ce;if(ue!==0&&(Q=wu),Ye.bindFramebuffer(X.FRAMEBUFFER,Q)&&re&&Ye.drawBuffers(U,Q),Ye.viewport(F),Ye.scissor(O),Ye.setScissorTest(B),Se){const Be=We.get(U.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+K,Be.__webglTexture,ue)}else if(be){const Be=We.get(U.texture),tt=K;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Be.__webglTexture,ue,tt)}else if(U!==null&&ue!==0){const Be=We.get(U.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Be.__webglTexture,ue)}A=-1},this.readRenderTargetPixels=function(U,K,ue,re,Q,Se,be){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=We.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&be!==void 0&&(Le=Le[be]),Le){Ye.bindFramebuffer(X.FRAMEBUFFER,Le);try{const Be=U.texture,tt=Be.format,Je=Be.type;if(!dt.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=U.width-re&&ue>=0&&ue<=U.height-Q&&X.readPixels(K,ue,re,Q,it.convert(tt),it.convert(Je),Se)}finally{const Be=D!==null?We.get(D).__webglFramebuffer:null;Ye.bindFramebuffer(X.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(U,K,ue,re,Q,Se,be){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=We.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&be!==void 0&&(Le=Le[be]),Le){const Be=U.texture,tt=Be.format,Je=Be.type;if(!dt.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=U.width-re&&ue>=0&&ue<=U.height-Q){Ye.bindFramebuffer(X.FRAMEBUFFER,Le);const He=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,He),X.bufferData(X.PIXEL_PACK_BUFFER,Se.byteLength,X.STREAM_READ),X.readPixels(K,ue,re,Q,it.convert(tt),it.convert(Je),0);const vt=D!==null?We.get(D).__webglFramebuffer:null;Ye.bindFramebuffer(X.FRAMEBUFFER,vt);const st=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await qE(X,st,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,He),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Se),X.deleteBuffer(He),X.deleteSync(st),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(U,K=null,ue=0){U.isTexture!==!0&&(Ca("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,U=arguments[1]);const re=Math.pow(2,-ue),Q=Math.floor(U.image.width*re),Se=Math.floor(U.image.height*re),be=K!==null?K.x:0,Le=K!==null?K.y:0;k.setTexture2D(U,0),X.copyTexSubImage2D(X.TEXTURE_2D,ue,0,0,be,Le,Q,Se),Ye.unbindTexture()};const Cu=X.createFramebuffer(),Au=X.createFramebuffer();this.copyTextureToTexture=function(U,K,ue=null,re=null,Q=0,Se=null){U.isTexture!==!0&&(Ca("WebGLRenderer: copyTextureToTexture function signature has changed."),re=arguments[0]||null,U=arguments[1],K=arguments[2],Se=arguments[3]||0,ue=null),Se===null&&(Q!==0?(Ca("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=Q,Q=0):Se=0);let be,Le,Be,tt,Je,He,vt,st,$t;const zt=U.isCompressedTexture?U.mipmaps[Se]:U.image;if(ue!==null)be=ue.max.x-ue.min.x,Le=ue.max.y-ue.min.y,Be=ue.isBox3?ue.max.z-ue.min.z:1,tt=ue.min.x,Je=ue.min.y,He=ue.isBox3?ue.min.z:0;else{const vn=Math.pow(2,-Q);be=Math.floor(zt.width*vn),Le=Math.floor(zt.height*vn),U.isDataArrayTexture?Be=zt.depth:U.isData3DTexture?Be=Math.floor(zt.depth*vn):Be=1,tt=0,Je=0,He=0}re!==null?(vt=re.x,st=re.y,$t=re.z):(vt=0,st=0,$t=0);const xt=it.convert(K.format),je=it.convert(K.type);let Zt;K.isData3DTexture?(k.setTexture3D(K,0),Zt=X.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(k.setTexture2DArray(K,0),Zt=X.TEXTURE_2D_ARRAY):(k.setTexture2D(K,0),Zt=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,K.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,K.unpackAlignment);const gt=X.getParameter(X.UNPACK_ROW_LENGTH),Dn=X.getParameter(X.UNPACK_IMAGE_HEIGHT),ss=X.getParameter(X.UNPACK_SKIP_PIXELS),Yn=X.getParameter(X.UNPACK_SKIP_ROWS),Ar=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,zt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,zt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,tt),X.pixelStorei(X.UNPACK_SKIP_ROWS,Je),X.pixelStorei(X.UNPACK_SKIP_IMAGES,He);const Dt=U.isDataArrayTexture||U.isData3DTexture,In=K.isDataArrayTexture||K.isData3DTexture;if(U.isDepthTexture){const vn=We.get(U),An=We.get(K),yn=We.get(vn.__renderTarget),Mt=We.get(An.__renderTarget);Ye.bindFramebuffer(X.READ_FRAMEBUFFER,yn.__webglFramebuffer),Ye.bindFramebuffer(X.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let ar=0;ar<Be;ar++)Dt&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,We.get(U).__webglTexture,Q,He+ar),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,We.get(K).__webglTexture,Se,$t+ar)),X.blitFramebuffer(tt,Je,be,Le,vt,st,be,Le,X.DEPTH_BUFFER_BIT,X.NEAREST);Ye.bindFramebuffer(X.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(Q!==0||U.isRenderTargetTexture||We.has(U)){const vn=We.get(U),An=We.get(K);Ye.bindFramebuffer(X.READ_FRAMEBUFFER,Cu),Ye.bindFramebuffer(X.DRAW_FRAMEBUFFER,Au);for(let yn=0;yn<Be;yn++)Dt?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,vn.__webglTexture,Q,He+yn):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,vn.__webglTexture,Q),In?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,An.__webglTexture,Se,$t+yn):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,An.__webglTexture,Se),Q!==0?X.blitFramebuffer(tt,Je,be,Le,vt,st,be,Le,X.COLOR_BUFFER_BIT,X.NEAREST):In?X.copyTexSubImage3D(Zt,Se,vt,st,$t+yn,tt,Je,be,Le):X.copyTexSubImage2D(Zt,Se,vt,st,tt,Je,be,Le);Ye.bindFramebuffer(X.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else In?U.isDataTexture||U.isData3DTexture?X.texSubImage3D(Zt,Se,vt,st,$t,be,Le,Be,xt,je,zt.data):K.isCompressedArrayTexture?X.compressedTexSubImage3D(Zt,Se,vt,st,$t,be,Le,Be,xt,zt.data):X.texSubImage3D(Zt,Se,vt,st,$t,be,Le,Be,xt,je,zt):U.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Se,vt,st,be,Le,xt,je,zt.data):U.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Se,vt,st,zt.width,zt.height,xt,zt.data):X.texSubImage2D(X.TEXTURE_2D,Se,vt,st,be,Le,xt,je,zt);X.pixelStorei(X.UNPACK_ROW_LENGTH,gt),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Dn),X.pixelStorei(X.UNPACK_SKIP_PIXELS,ss),X.pixelStorei(X.UNPACK_SKIP_ROWS,Yn),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Ar),Se===0&&K.generateMipmaps&&X.generateMipmap(Zt),Ye.unbindTexture()},this.copyTextureToTexture3D=function(U,K,ue=null,re=null,Q=0){return U.isTexture!==!0&&(Ca("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ue=arguments[0]||null,re=arguments[1]||null,U=arguments[2],K=arguments[3],Q=arguments[4]||0),Ca('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(U,K,ue,re,Q)},this.initRenderTarget=function(U){We.get(U).__webglFramebuffer===void 0&&k.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?k.setTextureCube(U,0):U.isData3DTexture?k.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?k.setTexture2DArray(U,0):k.setTexture2D(U,0),Ye.unbindTexture()},this.resetState=function(){P=0,I=0,D=null,Ye.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ct._getUnpackColorSpace()}}const Zn={luminance:{base:.08,min:0,max:1},distortion:{intensity:.05,min:0,max:1},aberration:{intensity:3,min:0,max:10},scanlines:{intensity:.3,count:100,speed:2,intensityLimits:{min:0,max:1},countLimits:{min:50,max:300},speedLimits:{min:0,max:5}},glow:{radius:.35,intensity:.8,persistence:.7,radiusLimits:{min:0,max:5},intensityLimits:{min:0,max:1},persistenceLimits:{min:0,max:.95}}},Ds=(r,e,t)=>{if(r!==void 0)return Math.max(e,Math.min(t,r))},mb={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Nf{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const gb=new Fm(-1,1,1,-1,0,1);class _b extends _i{constructor(){super(),this.setAttribute("position",new Gt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Gt([0,2,0,0,2,0],2))}}const vb=new _b;class yb{constructor(e){this._mesh=new ui(vb,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,gb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class xo extends Nf{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof ir?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ix.clone(e.uniforms),this.material=new ir({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new yb(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Yv extends Nf{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let l,u;this.inverse?(l=0,u=1):(l=1,u=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.buffers.stencil.setFunc(s.ALWAYS,l,4294967295),a.buffers.stencil.setClear(u),a.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(s.EQUAL,1,4294967295),a.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.buffers.stencil.setLocked(!0)}}class xb extends Nf{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Sb{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new ut);this._width=n.width,this._height=n.height,t=new nr(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Qa}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new xo(mb),this.copyPass.material.blending=jr,this.clock=new Um}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,a=this.passes.length;s<a;s++){const l=this.passes[s];if(l.enabled!==!1){if(l.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),l.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),l.needsSwap){if(n){const u=this.renderer.getContext(),f=this.renderer.state.buffers.stencil;f.setFunc(u.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),f.setFunc(u.EQUAL,1,4294967295)}this.swapBuffers()}Yv!==void 0&&(l instanceof Yv?n=!0:l instanceof xb&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ut);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Mb extends Nf{constructor(e,t,n=null,s=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ft}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let a,l;this.overrideMaterial!==null&&(l=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=l),e.autoClear=s}}const Ea=`
    varying vec2 vUv;

    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`,Eb=`
    uniform sampler2D tDiffuse;
    uniform float luminanceBase;
    varying vec2 vUv;

    void main() {
        // Effet de vignettage
        vec2 center = vUv - 0.5;
        float vignette = 1.0 - dot(center, center) * 1.2;
        vignette = smoothstep(0.0, 1.0, vignette);

        vec4 texel = texture2D(tDiffuse, vUv);
        
        // Ajustement du contraste
        vec3 color = max(texel.rgb, vec3(luminanceBase));
        color = pow(color, vec3(1.1)); // Augmente légèrement le contraste

        // Légère teinte verdâtre pour l'ambiance phosphore
        vec3 tint = vec3(0.7, 1.3, 0.8);
        color *= tint;

        // Application du vignettage
        color *= vignette;

        // Léger boost de luminosité au centre
        color *= 1.0 + (vignette * 0.4);

        // Boost du glow vert
        color.g *= 1.2;  // Boost supplémentaire sur le canal vert

        gl_FragColor = vec4(color, texel.a);
    }
`,Tb=`
    uniform sampler2D tDiffuse;
    uniform float distortionIntensity;
    uniform vec2 resolution;
    varying vec2 vUv;

    vec2 computeDistortion(vec2 coord) {
        vec2 cc = coord * 2.0 - 1.0;
        float dist = dot(cc, cc);
        vec2 distorted = coord + cc * (dist * distortionIntensity);
        return distorted;
    }

    void main() {
        vec2 distortedUv = computeDistortion(vUv);
        
        if (distortedUv.x < 0.0 || distortedUv.x > 1.0 || 
            distortedUv.y < 0.0 || distortedUv.y > 1.0) {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
            return;
        }
        
        vec4 texel = texture2D(tDiffuse, distortedUv);
        gl_FragColor = texel;
    }
`,wb=`
    uniform sampler2D tDiffuse;
    uniform float aberrationIntensity;
    varying vec2 vUv;

    void main() {
        vec2 center = vec2(0.5);
        vec2 coord = vUv - center;
        
        float dist = length(coord);
        vec2 direction = dist > 0.0 ? coord / dist : vec2(0.0);
        
        float redOffset = aberrationIntensity * 0.004;
        float blueOffset = aberrationIntensity * -0.004;
        
        vec2 redUV = vUv + direction * redOffset * dist;
        vec2 blueUV = vUv + direction * blueOffset * dist;
        
        vec2 greenUV = vUv;
        
        float r = texture2D(tDiffuse, redUV).r;
        float g = texture2D(tDiffuse, greenUV).g;
        float b = texture2D(tDiffuse, blueUV).b;
        
        gl_FragColor = vec4(r, g, b, 1.0);
    }
`,Cb=`
    uniform sampler2D tDiffuse;
    uniform float time;
    uniform vec2 resolution;
uniform float scanlineIntensity;  // Intensité des lignes
    uniform float scanlineCount;      // Nombre de lignes
    uniform float scanlineSpeed;      // Vitesse de défilement
    varying vec2 vUv;

    // Fonction de bruit pseudo-aléatoire
    float rand(float n) {
        return fract(sin(n) * 43758.5453123);
    }

    void main() {
        // Paramètres de base des scanlines
        float scanlines = scanlineCount * (resolution.y / 1080.0); // Adapte à la résolution
        
        // Calcul de la position des scanlines avec défilement
        float scanlinePos = vUv.y * scanlines + time * scanlineSpeed;
        
        // Motif de base des scanlines
        float scanlinePattern = sin(scanlinePos * 3.1415926535897932384626433832795);
        
        // Ajout d'une variation aléatoire pour le scintillement
        float flickering = mix(1.0, rand(time * 0.01), 0.05);
        
        // Calcul de l'intensité finale des scanlines
        float scanlineEffect = 1.0 - (scanlinePattern * scanlinePattern * scanlineIntensity * flickering);
        
        // Application de la variation de luminosité
        vec4 texel = texture2D(tDiffuse, vUv);
        vec3 color = texel.rgb * scanlineEffect;
        
        // Boost légèrement la luminosité des lignes claires pour compenser l'assombrissement
        color *= 1.0 + (1.0 - scanlineEffect) * 0.2;
        
        gl_FragColor = vec4(color, texel.a);
    }
`,Ab=`
    uniform sampler2D tDiffuse;
    uniform float glowRadius;
    uniform float glowIntensity;
    uniform vec2 resolution;
    varying vec2 vUv;

    // Poids gaussiens pour 3 échantillons
    const float weights[3] = float[3](0.4026, 0.2442, 0.0545);

    void main() {
        vec2 texel = vec2(1.0 / resolution.x, 1.0 / resolution.y);
        vec3 result = texture2D(tDiffuse, vUv).rgb * weights[0];
        
        // Échantillonnage horizontal
        for(int i = 1; i < 3; i++) {
            vec2 offset = vec2(texel.x * float(i) * glowRadius, 0.0);
            result += texture2D(tDiffuse, vUv + offset).rgb * weights[i];
            result += texture2D(tDiffuse, vUv - offset).rgb * weights[i];
        }
        
        gl_FragColor = vec4(result, 1.0);
    }
`,Rb=`
    uniform sampler2D tDiffuse;
    uniform sampler2D tPersistence; // Texture de la frame précédente
    uniform float glowRadius;
    uniform float glowIntensity;
    uniform float persistence;     // Force de la persistence (0-1)
    uniform vec2 resolution;
    varying vec2 vUv;

    // Poids gaussiens pour 5 échantillons
    const float weights[3] = float[3](0.4026, 0.2442, 0.0545);

    // Fonction pour ajuster la persistence selon la couleur
    // Les phosphores réels ont des taux de décroissance différents selon la couleur
    vec3 adjustPersistence(vec3 color) {
        return vec3(
            color.r * 0.97,  // Rouge décroit un peu plus vite
            color.g * 0.98,  // Vert persiste un peu plus
            color.b * 0.96   // Bleu décroit le plus vite
        );
    }

    void main() {
        vec2 texel = vec2(1.0 / resolution.x, 1.0 / resolution.y);
        vec3 result = texture2D(tDiffuse, vUv).rgb * weights[0];
        
        // Échantillonnage vertical
        for(int i = 1; i < 3; i++) {
            vec2 offset = vec2(0.0, texel.y * float(i) * glowRadius);
            result += texture2D(tDiffuse, vUv + offset).rgb * weights[i];
            result += texture2D(tDiffuse, vUv - offset).rgb * weights[i];
        }
        
        // Ajout de la persistence
        vec3 oldColor = texture2D(tPersistence, vUv).rgb;
        vec3 persistentColor = adjustPersistence(oldColor);
        
        // Mélange du glow actuel avec la persistence
        vec3 finalColor = result + persistentColor * persistence; 
        finalColor *= glowIntensity;        
        gl_FragColor = vec4(finalColor, 1.0);
    }
`;class bb{constructor(e){this.renderer=new pb({canvas:e,antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.enabledPasses={luminance:!0,distortion:!0,aberration:!0,scanlines:!0,glow:!0},this.composer=null,this.renderScene=null,this.luminancePass=null,this.distortionPass=null,this.chromaticAberrationPass=null,this.scanlinesPass=null,this.glowHorizontalPass=null,this.glowVerticalPass=null,this.renderTarget=null,this.persistenceTarget=null,this.clock=new Um,this.persistenceTargets=[null,null],this.currentPersistenceTarget=0,this.pingPongQuad=new ui(new Qr(2,2),new nu({transparent:!0})),this.pingPongQuad.frustumCulled=!1,this.pingPongCamera=new Fm(-1,1,1,-1,-1,1),this.pingPongScene=new ox,this.pingPongScene.add(this.pingPongQuad),this.startTime=performance.now()}init(e,t){performance.mark("init-render-start"),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.outputEncoding=void 0;const n={minFilter:Tn,magFilter:Tn,format:Ci,encoding:void 0,samples:0},s={type:gr,minFilter:Tn,magFilter:Tn,format:Ci,encoding:void 0,samples:0};this.renderTarget=new nr(window.innerWidth,window.innerHeight,n),this.persistenceTargets[0]=new nr(window.innerWidth*.5,window.innerHeight*.5,s),this.persistenceTargets[1]=new nr(window.innerWidth*.5,window.innerHeight*.5,s),this.composer=new Sb(this.renderer,this.renderTarget),this.renderScene=new Mb(e,t),this.composer.addPass(this.renderScene);const a={uniforms:{tDiffuse:{value:null},luminanceBase:{value:Zn.luminance.base}},vertexShader:Ea,fragmentShader:Eb};this.luminancePass=new xo(a),this.composer.addPass(this.luminancePass);const l={uniforms:{tDiffuse:{value:null},distortionIntensity:{value:Zn.distortion.intensity},resolution:{value:new ut(window.innerWidth,window.innerHeight)}},vertexShader:Ea,fragmentShader:Tb};this.distortionPass=new xo(l),this.composer.addPass(this.distortionPass);const u={uniforms:{tDiffuse:{value:null},aberrationIntensity:{value:Zn.aberration.intensity}},vertexShader:Ea,fragmentShader:wb};this.chromaticAberrationPass=new xo(u),this.composer.addPass(this.chromaticAberrationPass);const f={uniforms:{tDiffuse:{value:null},time:{value:0},resolution:{value:new ut(window.innerWidth,window.innerHeight)},scanlineIntensity:{value:Zn.scanlines.intensity},scanlineCount:{value:Zn.scanlines.count},scanlineSpeed:{value:Zn.scanlines.speed}},vertexShader:Ea,fragmentShader:Cb};this.scanlinesPass=new xo(f),this.composer.addPass(this.scanlinesPass);const d={uniforms:{tDiffuse:{value:null},glowRadius:{value:Zn.glow.radius},glowIntensity:{value:Zn.glow.intensity},resolution:{value:new ut(window.innerWidth*.5,window.innerHeight*.5)}},vertexShader:Ea,fragmentShader:Ab};this.glowHorizontalPass=new xo(d),this.composer.addPass(this.glowHorizontalPass);const h={uniforms:{tDiffuse:{value:null},tPersistence:{value:this.persistenceTargets[0].texture},glowRadius:{value:Zn.glow.radius},glowIntensity:{value:Zn.glow.intensity},persistence:{value:Zn.glow.persistence},resolution:{value:new ut(window.innerWidth*.5,window.innerHeight*.5)}},vertexShader:Ea,fragmentShader:Rb};this.glowVerticalPass=new xo(h),this.composer.addPass(this.glowVerticalPass),performance.mark("init-render-end"),performance.measure("Renderer Init","init-render-start","init-render-end")}setLuminance(e){if(this.luminancePass){const{min:t,max:n}=Zn.luminance;this.luminancePass.uniforms.luminanceBase.value=Ds(e,t,n)}}setDistortion(e){if(this.distortionPass){const{min:t,max:n}=Zn.distortion;this.distortionPass.uniforms.distortionIntensity.value=Ds(e,t,n)}}setAberration(e){this.chromaticAberrationPass&&(this.chromaticAberrationPass.uniforms.aberrationIntensity.value=e)}setScanlines(e,t,n){if(this.scanlinesPass){const{intensityLimits:s,countLimits:a,speedLimits:l}=Zn.scanlines;e!==void 0&&(this.scanlinesPass.uniforms.scanlineIntensity.value=Ds(e,s.min,s.max)),t!==void 0&&(this.scanlinesPass.uniforms.scanlineCount.value=Ds(t,a.min,a.max)),n!==void 0&&(this.scanlinesPass.uniforms.scanlineSpeed.value=Ds(n,l.min,l.max))}}setGlow(e,t,n){if(this.glowHorizontalPass&&this.glowVerticalPass){const{radiusLimits:s,intensityLimits:a,persistenceLimits:l}=Zn.glow;if(e!==void 0){const u=Ds(e,s.min,s.max);this.glowHorizontalPass.uniforms.glowRadius.value=u,this.glowVerticalPass.uniforms.glowRadius.value=u}if(t!==void 0){const u=Ds(t,a.min,a.max);this.glowHorizontalPass.uniforms.glowIntensity.value=u,this.glowVerticalPass.uniforms.glowIntensity.value=u}n!==void 0&&(this.glowVerticalPass.uniforms.persistence.value=Ds(n,l.min,l.max))}}render(){this.composer&&(this.luminancePass&&(this.luminancePass.enabled=this.enabledPasses.luminance),this.distortionPass&&(this.distortionPass.enabled=this.enabledPasses.distortion),this.chromaticAberrationPass&&(this.chromaticAberrationPass.enabled=this.enabledPasses.aberration),this.scanlinesPass&&(this.scanlinesPass.enabled=this.enabledPasses.scanlines),this.glowHorizontalPass&&(this.glowHorizontalPass.enabled=this.enabledPasses.glow),this.glowVerticalPass&&(this.glowVerticalPass.enabled=this.enabledPasses.glow),this.scanlinesPass&&this.enabledPasses.scanlines&&(this.scanlinesPass.uniforms.time.value=this.clock.getElapsedTime()),this.glowVerticalPass&&this.enabledPasses.glow&&(this.glowVerticalPass.uniforms.tPersistence.value=this.persistenceTargets[this.currentPersistenceTarget].texture),this.composer.render(),this.renderer.setRenderTarget(this.persistenceTargets[1-this.currentPersistenceTarget]),this.renderer.clear(),this.pingPongQuad.material.map=this.composer.renderTarget2.texture,this.pingPongQuad.material.needsUpdate=!0,this.renderer.render(this.pingPongScene,this.pingPongCamera),this.pingPongQuad.material.map=this.persistenceTargets[this.currentPersistenceTarget].texture,this.renderer.render(this.pingPongScene,this.pingPongCamera),this.currentPersistenceTarget=1-this.currentPersistenceTarget,this.renderer.setRenderTarget(null),this.composer.render())}setSize(e,t){this.renderer.setSize(e,t);const n=new ut(e,t);this.renderTarget&&this.renderTarget.setSize(e,t),this.persistenceTargets[0]&&this.persistenceTargets[0].setSize(e,t),this.persistenceTargets[1]&&this.persistenceTargets[1].setSize(e,t),this.composer&&this.composer.setSize(e,t),this.distortionPass&&this.distortionPass.uniforms.resolution.value.copy(n),this.scanlinesPass&&this.scanlinesPass.uniforms.resolution.value.copy(n),this.glowHorizontalPass&&this.glowHorizontalPass.uniforms.resolution.value.copy(n),this.glowVerticalPass&&this.glowVerticalPass.uniforms.resolution.value.copy(n)}dispose(){const t=performance.now()-this.startTime;console.log(`Total renderer lifetime: ${t}ms`),this.renderTarget&&this.renderTarget.dispose(),this.persistenceTargets[0]&&this.persistenceTargets[0].dispose(),this.persistenceTargets[1]&&this.persistenceTargets[1].dispose(),this.composer&&(this.composer.renderTarget1.dispose(),this.composer.renderTarget2.dispose()),this.pingPongQuad&&(this.pingPongQuad.geometry.dispose(),this.pingPongQuad.material.dispose()),this.renderer.dispose()}}class Pb{constructor(e=1024,t=1024){this.canvas=document.createElement("canvas"),this.canvas.width=e,this.canvas.height=t,this.ctx=this.canvas.getContext("2d"),this.fontSize=24,this.lineHeight=1.5,this.padding=160,this.color="#00ff00",this.clear()}clear(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}setFont(e=24){this.fontSize=e,this.ctx.font=`${e}px monospace`}setColor(e="#00ff00"){this.color=e,this.ctx.fillStyle=e}renderText(e){this.clear(),this.ctx.fillStyle=this.color,this.ctx.font=`${this.fontSize}px monospace`;const t=e.split(" ");let n="",s=this.fontSize+this.padding;const a=this.canvas.width-this.padding*2;for(let l of t){if(l.includes(`
`)){const d=l.split(`
`);for(let h=0;h<d.length;h++){if(h===0){const m=n+(n?" ":"")+d[h];if(this.ctx.measureText(m).width<a){n=m;continue}}n&&(this.ctx.fillText(n,this.padding,s),s+=this.fontSize*this.lineHeight,n=""),h<d.length-1?(this.ctx.fillText(d[h],this.padding,s),s+=this.fontSize*this.lineHeight):n=d[h]}continue}const u=n+(n?" ":"")+l;this.ctx.measureText(u).width>a&&n?(this.ctx.fillText(n,this.padding,s),n=l,s+=this.fontSize*this.lineHeight):n=u}n&&this.ctx.fillText(n,this.padding,s),this.ctx.fillText("_",this.padding+this.ctx.measureText(n).width+10,s)}}class Db{constructor(e=10,t=10){this.textRenderer=new Pb,this.texture=new lx(this.textRenderer.canvas),this.texture.needsUpdate=!0,this.material=new xT({map:this.texture,transparent:!0,emissive:16777215,emissiveMap:this.texture}),this.geometry=new Qr(e,t),this.mesh=new ui(this.geometry,this.material)}updateText(e){this.textRenderer.renderText(e),this.texture.needsUpdate=!0}setPosition(e,t,n){this.mesh.position.set(e,t,n)}dispose(){this.geometry.dispose(),this.material.dispose(),this.texture.dispose()}}const ep=[`// Format un peu particulier pour cette candidature...
// Appuyez sur Entrée pour avancer dans le texte
// Activez le son pour la musique et les effets visuels !

// J'ai voulu rendre hommage à l'esthétique des vieux terminaux
// et à la scène underground.
// Les particules à droite réagissent au son ;)
// (si la musique se coupe: pause --> play) 

------------------------------------`,`> motivation.exe --run
[INITIALIZING MOTIVATION LETTER SEQUENCE...]
[...]

Durant mes trois années à l'UTC, le Pic'Asso a été bien plus qu'un simple foyer étudiant pour moi. C'est un lieu débordant de vie qui m'a accompagné à chaque moment de la journée : le matin avec un café ou une pâtisserie pour bien démarrer, le midi dans son cadre convivial pour déjeuner, l'après-midi pour travailler ou se détendre autour d'un baby-foot ou d'un billard.`,`> analyze "soirées_pic.log"
[PROCESSING EVENING ACTIVITIES...]

Le soir, le Pic révèle une autre facette : une carte de boissons variée à prix imbattables, la musique qui rassemble, les soirées tantôt calmes autour d'un jeu de société, tantôt animées avec une ambiance unique. C'est un lieu de rencontres constantes, d'amitiés qui se créent, d'aventures qui commencent. Et puis il y a les perms, qui donnent leur chance aux associations ou qui nous surprennent avec des concepts toujours plus créatifs.`,`> echo $FEELINGS
[OUTPUT]: J'aime profondément le Pic'Asso.

> cat motivation_details.txt
[LOADING...]

C'est pourquoi je candidate aujourd'hui au poste de responsable informatique (ou membre de l'équipe informatique). Étudiant en GI06, passionné de sport, jeux vidéo et musique, ce qui me motive particulièrement c'est la création - surtout en informatique. Qu'il s'agisse de projets créatifs, utilitaires ou même professionnels, je prends toujours du plaisir à concevoir et développer des systèmes qui ont un impact tangible.`,`Le Pic serait un terrain d'expérimentation idéal pour mettre en place des solutions qui amélioreraient encore l'expérience de ce lieu unique. J'ai une réelle envie de contribuer à ce projet qui me tient à cœur et qui a tant enrichi mon parcours à l'UTC.

> load background.dat
[LOADING EXPERIENCE DATA...]
[SUCCESS]

Mon parcours en informatique a débuté avec le creative coding et les simulations graphiques, inspiré par des mentors comme Daniel Shiffman. Cette passion m'a mené du développement de simulations en Processing jusqu'au freelance, où j'ai conçu des scripts et des outils pour des clients tout en poursuivant mon DUT.`,`À l'UTC, j'ai repris le temps de m'intéresser au simulations :Colonies de fourmis, systèmes de particules, algorithmes génétiques... Des projets qui m'ont valu d'excellents résultats, notamment en IA04/AI30, mais surtout c'est quelque chose qui me stimule énormément.

Cette expérience variée, entre projets créatifs et solutions concrètes, me donne un bon bagage technique pour ce rôle. Et comme amateur de musique électronique et de démoscene, je pense pouvoir apporter une sensibilité qui correspond bien à l'esprit du Pic, tout en restant disponible pour contribuer à d'autres aspects de l'association quand nécessaire.`,`> scan CV_associatif.dat
[...]
[INFO] Scanning associative experiences...
[SUCCESS] Found 4 entries:

UTC (2021-2024)
└── Musc'UT - Membre du bureau
    > Dev app Musc'UT
    > Gestion parrain-fillots
    > Communication/Design
└── SKIUT 2024 - Développeur mobile`,`IUT Informatique (2019-2021)
└── BDE - Développeur 
    > Système de vente automatisé

Lycée (2016-2019)
└── MDE - Vice-trésorier
    > Gestion foyer étudiant
[...]

> motivation.exe --end
[PROCESS COMPLETED SUCCESSFULLY]
[SEE YOU SOON :)]`];function Wr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function gx(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var bi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Wa={duration:.5,overwrite:!1,delay:0},km,Pn,Ht,yr=1e8,Bn=1/yr,Kp=Math.PI*2,Ib=Kp/4,Nb=0,_x=Math.sqrt,Lb=Math.cos,Fb=Math.sin,wn=function(e){return typeof e=="string"},Jt=function(e){return typeof e=="function"},Jr=function(e){return typeof e=="number"},zm=function(e){return typeof e>"u"},Mr=function(e){return typeof e=="object"},fi=function(e){return e!==!1},Bm=function(){return typeof window<"u"},Jc=function(e){return Jt(e)||wn(e)},vx=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Hn=Array.isArray,Qp=/(?:-?\.?\d|\.)+/gi,yx=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ra=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,tp=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,xx=/[+-]=-?[.\d]+/,Sx=/[^,'"\[\]\s]+/gi,Ub=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,qt,dr,Jp,Vm,Pi={},mf={},Mx,Ex=function(e){return(mf=Xa(e,Pi))&&gi},Hm=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},iu=function(e,t){return!t&&console.warn(e)},Tx=function(e,t){return e&&(Pi[e]=t)&&mf&&(mf[e]=t)||Pi},ru=function(){return 0},Ob={suppressEvents:!0,isStart:!0,kill:!1},lf={suppressEvents:!0,kill:!1},kb={suppressEvents:!0},Gm={},zs=[],em={},wx,Ti={},np={},jv=30,uf=[],Wm="",Xm=function(e){var t=e[0],n,s;if(Mr(t)||Jt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(s=uf.length;s--&&!uf[s].targetTest(t););n=uf[s]}for(s=e.length;s--;)e[s]&&(e[s]._gsap||(e[s]._gsap=new $x(e[s],n)))||e.splice(s,1);return e},Ao=function(e){return e._gsap||Xm(Gi(e))[0]._gsap},Cx=function(e,t,n){return(n=e[t])&&Jt(n)?e[t]():zm(n)&&e.getAttribute&&e.getAttribute(t)||n},di=function(e,t){return(e=e.split(",")).forEach(t)||e},nn=function(e){return Math.round(e*1e5)/1e5||0},fn=function(e){return Math.round(e*1e7)/1e7||0},La=function(e,t){var n=t.charAt(0),s=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+s:n==="-"?e-s:n==="*"?e*s:e/s},zb=function(e,t){for(var n=t.length,s=0;e.indexOf(t[s])<0&&++s<n;);return s<n},gf=function(){var e=zs.length,t=zs.slice(0),n,s;for(em={},zs.length=0,n=0;n<e;n++)s=t[n],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},Ax=function(e,t,n,s){zs.length&&!Pn&&gf(),e.render(t,n,Pn&&t<0&&(e._initted||e._startAt)),zs.length&&!Pn&&gf()},Rx=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Sx).length<2?t:wn(e)?e.trim():e},bx=function(e){return e},Di=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Bb=function(e){return function(t,n){for(var s in n)s in t||s==="duration"&&e||s==="ease"||(t[s]=n[s])}},Xa=function(e,t){for(var n in t)e[n]=t[n];return e},$v=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Mr(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},_f=function(e,t){var n={},s;for(s in e)s in t||(n[s]=e[s]);return n},Kl=function(e){var t=e.parent||qt,n=e.keyframes?Bb(Hn(e.keyframes)):Di;if(fi(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Vb=function(e,t){for(var n=e.length,s=n===t.length;s&&n--&&e[n]===t[n];);return n<0},Px=function(e,t,n,s,a){var l=e[s],u;if(a)for(u=t[a];l&&l[a]>u;)l=l._prev;return l?(t._next=l._next,l._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[s]=t,t._prev=l,t.parent=t._dp=e,t},Lf=function(e,t,n,s){n===void 0&&(n="_first"),s===void 0&&(s="_last");var a=t._prev,l=t._next;a?a._next=l:e[n]===t&&(e[n]=l),l?l._prev=a:e[s]===t&&(e[s]=a),t._next=t._prev=t.parent=null},Hs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ro=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Hb=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},tm=function(e,t,n,s){return e._startAt&&(Pn?e._startAt.revert(lf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,s))},Gb=function r(e){return!e||e._ts&&r(e.parent)},Zv=function(e){return e._repeat?qa(e._tTime,e=e.duration()+e._rDelay)*e:0},qa=function(e,t){var n=Math.floor(e=fn(e/t));return e&&n===e?n-1:n},vf=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ff=function(e){return e._end=fn(e._start+(e._tDur/Math.abs(e._ts||e._rts||Bn)||0))},Uf=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=fn(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ff(e),n._dirty||Ro(n,e)),e},Dx=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=vf(e.rawTime(),t),(!t._dur||hu(0,t.totalDuration(),n)-t._tTime>Bn)&&t.render(n,!0)),Ro(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-1e-8}},mr=function(e,t,n,s){return t.parent&&Hs(t),t._start=fn((Jr(n)?n:n||e!==qt?zi(e,n,t):e._time)+t._delay),t._end=fn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Px(e,t,"_first","_last",e._sort?"_start":0),nm(t)||(e._recent=t),s||Dx(e,t),e._ts<0&&Uf(e,e._tTime),e},Ix=function(e,t){return(Pi.ScrollTrigger||Hm("scrollTrigger",t))&&Pi.ScrollTrigger.create(t,e)},Nx=function(e,t,n,s,a){if(Ym(e,t,a),!e._initted)return 1;if(!n&&e._pt&&!Pn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&wx!==wi.frame)return zs.push(e),e._lazy=[a,s],1},Wb=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},nm=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Xb=function(e,t,n,s){var a=e.ratio,l=t<0||!t&&(!e._start&&Wb(e)&&!(!e._initted&&nm(e))||(e._ts<0||e._dp._ts<0)&&!nm(e))?0:1,u=e._rDelay,f=0,d,h,m;if(u&&e._repeat&&(f=hu(0,e._tDur,t),h=qa(f,u),e._yoyo&&h&1&&(l=1-l),h!==qa(e._tTime,u)&&(a=1-l,e.vars.repeatRefresh&&e._initted&&e.invalidate())),l!==a||Pn||s||e._zTime===Bn||!t&&e._zTime){if(!e._initted&&Nx(e,t,s,n,f))return;for(m=e._zTime,e._zTime=t||(n?Bn:0),n||(n=t&&!m),e.ratio=l,e._from&&(l=1-l),e._time=0,e._tTime=f,d=e._pt;d;)d.r(l,d.d),d=d._next;t<0&&tm(e,t,n,!0),e._onUpdate&&!n&&Ai(e,"onUpdate"),f&&e._repeat&&!n&&e.parent&&Ai(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===l&&(l&&Hs(e,1),!n&&!Pn&&(Ai(e,l?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},qb=function(e,t,n){var s;if(n>t)for(s=e._first;s&&s._start<=n;){if(s.data==="isPause"&&s._start>t)return s;s=s._next}else for(s=e._last;s&&s._start>=n;){if(s.data==="isPause"&&s._start<t)return s;s=s._prev}},Ya=function(e,t,n,s){var a=e._repeat,l=fn(t)||0,u=e._tTime/e._tDur;return u&&!s&&(e._time*=l/e._dur),e._dur=l,e._tDur=a?a<0?1e10:fn(l*(a+1)+e._rDelay*a):l,u>0&&!s&&Uf(e,e._tTime=e._tDur*u),e.parent&&Ff(e),n||Ro(e.parent,e),e},Kv=function(e){return e instanceof Jn?Ro(e):Ya(e,e._dur)},Yb={_start:0,endTime:ru,totalDuration:ru},zi=function r(e,t,n){var s=e.labels,a=e._recent||Yb,l=e.duration()>=yr?a.endTime(!1):e._dur,u,f,d;return wn(t)&&(isNaN(t)||t in s)?(f=t.charAt(0),d=t.substr(-1)==="%",u=t.indexOf("="),f==="<"||f===">"?(u>=0&&(t=t.replace(/=/,"")),(f==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(t.substr(1))||0)*(d?(u<0?a:n).totalDuration()/100:1)):u<0?(t in s||(s[t]=l),s[t]):(f=parseFloat(t.charAt(u-1)+t.substr(u+1)),d&&n&&(f=f/100*(Hn(n)?n[0]:n).totalDuration()),u>1?r(e,t.substr(0,u-1),n)+f:l+f)):t==null?l:+t},Ql=function(e,t,n){var s=Jr(t[1]),a=(s?2:1)+(e<2?0:1),l=t[a],u,f;if(s&&(l.duration=t[1]),l.parent=n,e){for(u=l,f=n;f&&!("immediateRender"in u);)u=f.vars.defaults||{},f=fi(f.vars.inherit)&&f.parent;l.immediateRender=fi(u.immediateRender),e<2?l.runBackwards=1:l.startAt=t[a-1]}return new cn(t[0],l,t[a+1])},Ws=function(e,t){return e||e===0?t(e):t},hu=function(e,t,n){return n<e?e:n>t?t:n},zn=function(e,t){return!wn(e)||!(t=Ub.exec(e))?"":t[1]},jb=function(e,t,n){return Ws(n,function(s){return hu(e,t,s)})},im=[].slice,Lx=function(e,t){return e&&Mr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Mr(e[0]))&&!e.nodeType&&e!==dr},$b=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(s){var a;return wn(s)&&!t||Lx(s,1)?(a=n).push.apply(a,Gi(s)):n.push(s)})||n},Gi=function(e,t,n){return Ht&&!t&&Ht.selector?Ht.selector(e):wn(e)&&!n&&(Jp||!ja())?im.call((t||Vm).querySelectorAll(e),0):Hn(e)?$b(e,n):Lx(e)?im.call(e,0):e?[e]:[]},rm=function(e){return e=Gi(e)[0]||iu("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Gi(t,n.querySelectorAll?n:n===e?iu("Invalid scope")||Vm.createElement("div"):e)}},Fx=function(e){return e.sort(function(){return .5-Math.random()})},Ux=function(e){if(Jt(e))return e;var t=Mr(e)?e:{each:e},n=bo(t.ease),s=t.from||0,a=parseFloat(t.base)||0,l={},u=s>0&&s<1,f=isNaN(s)||u,d=t.axis,h=s,m=s;return wn(s)?h=m={center:.5,edges:.5,end:1}[s]||0:!u&&f&&(h=s[0],m=s[1]),function(g,_,S){var M=(S||t).length,x=l[M],v,b,w,T,C,P,I,D,A;if(!x){if(A=t.grid==="auto"?0:(t.grid||[1,yr])[1],!A){for(I=-1e8;I<(I=S[A++].getBoundingClientRect().left)&&A<M;);A<M&&A--}for(x=l[M]=[],v=f?Math.min(A,M)*h-.5:s%A,b=A===yr?0:f?M*m/A-.5:s/A|0,I=0,D=yr,P=0;P<M;P++)w=P%A-v,T=b-(P/A|0),x[P]=C=d?Math.abs(d==="y"?T:w):_x(w*w+T*T),C>I&&(I=C),C<D&&(D=C);s==="random"&&Fx(x),x.max=I-D,x.min=D,x.v=M=(parseFloat(t.amount)||parseFloat(t.each)*(A>M?M-1:d?d==="y"?M/A:A:Math.max(A,M/A))||0)*(s==="edges"?-1:1),x.b=M<0?a-M:a,x.u=zn(t.amount||t.each)||0,n=n&&M<0?qx(n):n}return M=(x[g]-x.min)/x.max||0,fn(x.b+(n?n(M):M)*x.v)+x.u}},sm=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var s=fn(Math.round(parseFloat(n)/e)*e*t);return(s-s%1)/t+(Jr(n)?0:zn(n))}},Ox=function(e,t){var n=Hn(e),s,a;return!n&&Mr(e)&&(s=n=e.radius||yr,e.values?(e=Gi(e.values),(a=!Jr(e[0]))&&(s*=s)):e=sm(e.increment)),Ws(t,n?Jt(e)?function(l){return a=e(l),Math.abs(a-l)<=s?a:l}:function(l){for(var u=parseFloat(a?l.x:l),f=parseFloat(a?l.y:0),d=yr,h=0,m=e.length,g,_;m--;)a?(g=e[m].x-u,_=e[m].y-f,g=g*g+_*_):g=Math.abs(e[m]-u),g<d&&(d=g,h=m);return h=!s||d<=s?e[h]:l,a||h===l||Jr(l)?h:h+zn(l)}:sm(e))},kx=function(e,t,n,s){return Ws(Hn(e)?!t:n===!0?!!(n=0):!s,function(){return Hn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(s=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*s)/s})},Zb=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(s){return t.reduce(function(a,l){return l(a)},s)}},Kb=function(e,t){return function(n){return e(parseFloat(n))+(t||zn(n))}},Qb=function(e,t,n){return Bx(e,t,0,1,n)},zx=function(e,t,n){return Ws(n,function(s){return e[~~t(s)]})},Jb=function r(e,t,n){var s=t-e;return Hn(e)?zx(e,r(0,e.length),t):Ws(n,function(a){return(s+(a-e)%s)%s+e})},eP=function r(e,t,n){var s=t-e,a=s*2;return Hn(e)?zx(e,r(0,e.length-1),t):Ws(n,function(l){return l=(a+(l-e)%a)%a||0,e+(l>s?a-l:l)})},su=function(e){for(var t=0,n="",s,a,l,u;~(s=e.indexOf("random(",t));)l=e.indexOf(")",s),u=e.charAt(s+7)==="[",a=e.substr(s+7,l-s-7).match(u?Sx:Qp),n+=e.substr(t,s-t)+kx(u?a:+a[0],u?0:+a[1],+a[2]||1e-5),t=l+1;return n+e.substr(t,e.length-t)},Bx=function(e,t,n,s,a){var l=t-e,u=s-n;return Ws(a,function(f){return n+((f-e)/l*u||0)})},tP=function r(e,t,n,s){var a=isNaN(e+t)?0:function(_){return(1-_)*e+_*t};if(!a){var l=wn(e),u={},f,d,h,m,g;if(n===!0&&(s=1)&&(n=null),l)e={p:e},t={p:t};else if(Hn(e)&&!Hn(t)){for(h=[],m=e.length,g=m-2,d=1;d<m;d++)h.push(r(e[d-1],e[d]));m--,a=function(S){S*=m;var M=Math.min(g,~~S);return h[M](S-M)},n=t}else s||(e=Xa(Hn(e)?[]:{},e));if(!h){for(f in t)qm.call(u,e,f,"get",t[f]);a=function(S){return Zm(S,u)||(l?e.p:e)}}}return Ws(n,a)},Qv=function(e,t,n){var s=e.labels,a=yr,l,u,f;for(l in s)u=s[l]-t,u<0==!!n&&u&&a>(u=Math.abs(u))&&(f=l,a=u);return f},Ai=function(e,t,n){var s=e.vars,a=s[t],l=Ht,u=e._ctx,f,d,h;if(a)return f=s[t+"Params"],d=s.callbackScope||e,n&&zs.length&&gf(),u&&(Ht=u),h=f?a.apply(d,f):a.call(d),Ht=l,h},Yl=function(e){return Hs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Pn),e.progress()<1&&Ai(e,"onInterrupt"),e},ba,Vx=[],Hx=function(e){if(e)if(e=!e.name&&e.default||e,Bm()||e.headless){var t=e.name,n=Jt(e),s=t&&!n&&e.init?function(){this._props=[]}:e,a={init:ru,render:Zm,add:qm,kill:_P,modifier:gP,rawVars:0},l={targetTest:0,get:0,getSetter:$m,aliases:{},register:0};if(ja(),e!==s){if(Ti[t])return;Di(s,Di(_f(e,a),l)),Xa(s.prototype,Xa(a,_f(e,l))),Ti[s.prop=t]=s,e.targetTest&&(uf.push(s),Gm[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Tx(t,s),e.register&&e.register(gi,s,hi)}else Vx.push(e)},It=255,jl={aqua:[0,It,It],lime:[0,It,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,It],navy:[0,0,128],white:[It,It,It],olive:[128,128,0],yellow:[It,It,0],orange:[It,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[It,0,0],pink:[It,192,203],cyan:[0,It,It],transparent:[It,It,It,0]},ip=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*It+.5|0},Gx=function(e,t,n){var s=e?Jr(e)?[e>>16,e>>8&It,e&It]:0:jl.black,a,l,u,f,d,h,m,g,_,S;if(!s){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),jl[e])s=jl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(a=e.charAt(1),l=e.charAt(2),u=e.charAt(3),e="#"+a+a+l+l+u+u+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return s=parseInt(e.substr(1,6),16),[s>>16,s>>8&It,s&It,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),s=[e>>16,e>>8&It,e&It]}else if(e.substr(0,3)==="hsl"){if(s=S=e.match(Qp),!t)f=+s[0]%360/360,d=+s[1]/100,h=+s[2]/100,l=h<=.5?h*(d+1):h+d-h*d,a=h*2-l,s.length>3&&(s[3]*=1),s[0]=ip(f+1/3,a,l),s[1]=ip(f,a,l),s[2]=ip(f-1/3,a,l);else if(~e.indexOf("="))return s=e.match(yx),n&&s.length<4&&(s[3]=1),s}else s=e.match(Qp)||jl.transparent;s=s.map(Number)}return t&&!S&&(a=s[0]/It,l=s[1]/It,u=s[2]/It,m=Math.max(a,l,u),g=Math.min(a,l,u),h=(m+g)/2,m===g?f=d=0:(_=m-g,d=h>.5?_/(2-m-g):_/(m+g),f=m===a?(l-u)/_+(l<u?6:0):m===l?(u-a)/_+2:(a-l)/_+4,f*=60),s[0]=~~(f+.5),s[1]=~~(d*100+.5),s[2]=~~(h*100+.5)),n&&s.length<4&&(s[3]=1),s},Wx=function(e){var t=[],n=[],s=-1;return e.split(Bs).forEach(function(a){var l=a.match(Ra)||[];t.push.apply(t,l),n.push(s+=l.length+1)}),t.c=n,t},Jv=function(e,t,n){var s="",a=(e+s).match(Bs),l=t?"hsla(":"rgba(",u=0,f,d,h,m;if(!a)return e;if(a=a.map(function(g){return(g=Gx(g,t,1))&&l+(t?g[0]+","+g[1]+"%,"+g[2]+"%,"+g[3]:g.join(","))+")"}),n&&(h=Wx(e),f=n.c,f.join(s)!==h.c.join(s)))for(d=e.replace(Bs,"1").split(Ra),m=d.length-1;u<m;u++)s+=d[u]+(~f.indexOf(u)?a.shift()||l+"0,0,0,0)":(h.length?h:a.length?a:n).shift());if(!d)for(d=e.split(Bs),m=d.length-1;u<m;u++)s+=d[u]+a[u];return s+d[m]},Bs=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in jl)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),nP=/hsl[a]?\(/,Xx=function(e){var t=e.join(" "),n;if(Bs.lastIndex=0,Bs.test(t))return n=nP.test(t),e[1]=Jv(e[1],n),e[0]=Jv(e[0],n,Wx(e[1])),!0},ou,wi=function(){var r=Date.now,e=500,t=33,n=r(),s=n,a=1e3/240,l=a,u=[],f,d,h,m,g,_,S=function M(x){var v=r()-s,b=x===!0,w,T,C,P;if((v>e||v<0)&&(n+=v-t),s+=v,C=s-n,w=C-l,(w>0||b)&&(P=++m.frame,g=C-m.time*1e3,m.time=C=C/1e3,l+=w+(w>=a?4:a-w),T=1),b||(f=d(M)),T)for(_=0;_<u.length;_++)u[_](C,g,P,x)};return m={time:0,frame:0,tick:function(){S(!0)},deltaRatio:function(x){return g/(1e3/(x||60))},wake:function(){Mx&&(!Jp&&Bm()&&(dr=Jp=window,Vm=dr.document||{},Pi.gsap=gi,(dr.gsapVersions||(dr.gsapVersions=[])).push(gi.version),Ex(mf||dr.GreenSockGlobals||!dr.gsap&&dr||{}),Vx.forEach(Hx)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,f&&m.sleep(),d=h||function(x){return setTimeout(x,l-m.time*1e3+1|0)},ou=1,S(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(f),ou=0,d=ru},lagSmoothing:function(x,v){e=x||1/0,t=Math.min(v||33,e)},fps:function(x){a=1e3/(x||240),l=m.time*1e3+a},add:function(x,v,b){var w=v?function(T,C,P,I){x(T,C,P,I),m.remove(w)}:x;return m.remove(x),u[b?"unshift":"push"](w),ja(),w},remove:function(x,v){~(v=u.indexOf(x))&&u.splice(v,1)&&_>=v&&_--},_listeners:u},m}(),ja=function(){return!ou&&wi.wake()},yt={},iP=/^[\d.\-M][\d.\-,\s]/,rP=/["']/g,sP=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),s=n[0],a=1,l=n.length,u,f,d;a<l;a++)f=n[a],u=a!==l-1?f.lastIndexOf(","):f.length,d=f.substr(0,u),t[s]=isNaN(d)?d.replace(rP,"").trim():+d,s=f.substr(u+1).trim();return t},oP=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),s=e.indexOf("(",t);return e.substring(t,~s&&s<n?e.indexOf(")",n+1):n)},aP=function(e){var t=(e+"").split("("),n=yt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[sP(t[1])]:oP(e).split(",").map(Rx)):yt._CE&&iP.test(e)?yt._CE("",e):n},qx=function(e){return function(t){return 1-e(1-t)}},Yx=function r(e,t){for(var n=e._first,s;n;)n instanceof Jn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(s=n._ease,n._ease=n._yEase,n._yEase=s,n._yoyo=t)),n=n._next},bo=function(e,t){return e&&(Jt(e)?e:yt[e]||aP(e))||t},Fo=function(e,t,n,s){n===void 0&&(n=function(f){return 1-t(1-f)}),s===void 0&&(s=function(f){return f<.5?t(f*2)/2:1-t((1-f)*2)/2});var a={easeIn:t,easeOut:n,easeInOut:s},l;return di(e,function(u){yt[u]=Pi[u]=a,yt[l=u.toLowerCase()]=n;for(var f in a)yt[l+(f==="easeIn"?".in":f==="easeOut"?".out":".inOut")]=yt[u+"."+f]=a[f]}),a},jx=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},rp=function r(e,t,n){var s=t>=1?t:1,a=(n||(e?.3:.45))/(t<1?t:1),l=a/Kp*(Math.asin(1/s)||0),u=function(h){return h===1?1:s*Math.pow(2,-10*h)*Fb((h-l)*a)+1},f=e==="out"?u:e==="in"?function(d){return 1-u(1-d)}:jx(u);return a=Kp/a,f.config=function(d,h){return r(e,d,h)},f},sp=function r(e,t){t===void 0&&(t=1.70158);var n=function(l){return l?--l*l*((t+1)*l+t)+1:0},s=e==="out"?n:e==="in"?function(a){return 1-n(1-a)}:jx(n);return s.config=function(a){return r(e,a)},s};di("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Fo(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});yt.Linear.easeNone=yt.none=yt.Linear.easeIn;Fo("Elastic",rp("in"),rp("out"),rp());(function(r,e){var t=1/e,n=2*t,s=2.5*t,a=function(u){return u<t?r*u*u:u<n?r*Math.pow(u-1.5/e,2)+.75:u<s?r*(u-=2.25/e)*u+.9375:r*Math.pow(u-2.625/e,2)+.984375};Fo("Bounce",function(l){return 1-a(1-l)},a)})(7.5625,2.75);Fo("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Fo("Circ",function(r){return-(_x(1-r*r)-1)});Fo("Sine",function(r){return r===1?1:-Lb(r*Ib)+1});Fo("Back",sp("in"),sp("out"),sp());yt.SteppedEase=yt.steps=Pi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,s=e+(t?0:1),a=t?1:0,l=1-Bn;return function(u){return((s*hu(0,l,u)|0)+a)*n}}};Wa.ease=yt["quad.out"];di("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Wm+=r+","+r+"Params,"});var $x=function(e,t){this.id=Nb++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Cx,this.set=t?t.getSetter:$m},au=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ya(this,+t.duration,1,1),this.data=t.data,Ht&&(this._ctx=Ht,Ht.data.push(this)),ou||wi.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ya(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,s){if(ja(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(Uf(this,n),!a._dp||a.parent||Dx(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&mr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===Bn||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Ax(this,n,s)),this},e.time=function(n,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Zv(this))%(this._dur+this._rDelay)||(n?this._dur:0),s):this._time},e.totalProgress=function(n,s){return arguments.length?this.totalTime(this.totalDuration()*n,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Zv(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,s){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*a,s):this._repeat?qa(this._tTime,a)+1:1},e.timeScale=function(n,s){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===n)return this;var a=this.parent&&this._ts?vf(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-1e-8?0:this._rts,this.totalTime(hu(-Math.abs(this._delay),this._tDur,a),s!==!1),Ff(this),Hb(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ja(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Bn&&(this._tTime-=Bn)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&mr(s,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(fi(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var s=this.parent||this._dp;return s?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?vf(s.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=kb);var s=Pn;return Pn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Pn=s,this},e.globalTime=function(n){for(var s=this,a=arguments.length?n:s.rawTime();s;)a=s._start+a/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(n):a},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Kv(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var s=this._time;return this._rDelay=n,Kv(this),s?this.time(s):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,s){return this.totalTime(zi(this,n),fi(s))},e.restart=function(n,s){return this.play().totalTime(n?-this._delay:0,fi(s)),this._dur||(this._zTime=-1e-8),this},e.play=function(n,s){return n!=null&&this.seek(n,s),this.reversed(!1).paused(!1)},e.reverse=function(n,s){return n!=null&&this.seek(n||this.totalDuration(),s),this.reversed(!0).paused(!1)},e.pause=function(n,s){return n!=null&&this.seek(n,s),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var n=this.parent||this._dp,s=this._start,a;return!!(!n||this._ts&&this._initted&&n.isActive()&&(a=n.rawTime(!0))>=s&&a<this.endTime(!0)-Bn)},e.eventCallback=function(n,s,a){var l=this.vars;return arguments.length>1?(s?(l[n]=s,a&&(l[n+"Params"]=a),n==="onUpdate"&&(this._onUpdate=s)):delete l[n],this):l[n]},e.then=function(n){var s=this;return new Promise(function(a){var l=Jt(n)?n:bx,u=function(){var d=s.then;s.then=null,Jt(l)&&(l=l(s))&&(l.then||l===s)&&(s.then=d),a(l),s.then=d};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?u():s._prom=u})},e.kill=function(){Yl(this)},r}();Di(au.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var Jn=function(r){gx(e,r);function e(n,s){var a;return n===void 0&&(n={}),a=r.call(this,n)||this,a.labels={},a.smoothChildTiming=!!n.smoothChildTiming,a.autoRemoveChildren=!!n.autoRemoveChildren,a._sort=fi(n.sortChildren),qt&&mr(n.parent||qt,Wr(a),s),n.reversed&&a.reverse(),n.paused&&a.paused(!0),n.scrollTrigger&&Ix(Wr(a),n.scrollTrigger),a}var t=e.prototype;return t.to=function(s,a,l){return Ql(0,arguments,this),this},t.from=function(s,a,l){return Ql(1,arguments,this),this},t.fromTo=function(s,a,l,u){return Ql(2,arguments,this),this},t.set=function(s,a,l){return a.duration=0,a.parent=this,Kl(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new cn(s,a,zi(this,l),1),this},t.call=function(s,a,l){return mr(this,cn.delayedCall(0,s,a),l)},t.staggerTo=function(s,a,l,u,f,d,h){return l.duration=a,l.stagger=l.stagger||u,l.onComplete=d,l.onCompleteParams=h,l.parent=this,new cn(s,l,zi(this,f)),this},t.staggerFrom=function(s,a,l,u,f,d,h){return l.runBackwards=1,Kl(l).immediateRender=fi(l.immediateRender),this.staggerTo(s,a,l,u,f,d,h)},t.staggerFromTo=function(s,a,l,u,f,d,h,m){return u.startAt=l,Kl(u).immediateRender=fi(u.immediateRender),this.staggerTo(s,a,u,f,d,h,m)},t.render=function(s,a,l){var u=this._time,f=this._dirty?this.totalDuration():this._tDur,d=this._dur,h=s<=0?0:fn(s),m=this._zTime<0!=s<0&&(this._initted||!d),g,_,S,M,x,v,b,w,T,C,P,I;if(this!==qt&&h>f&&s>=0&&(h=f),h!==this._tTime||l||m){if(u!==this._time&&d&&(h+=this._time-u,s+=this._time-u),g=h,T=this._start,w=this._ts,v=!w,m&&(d||(u=this._zTime),(s||!a)&&(this._zTime=s)),this._repeat){if(P=this._yoyo,x=d+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(x*100+s,a,l);if(g=fn(h%x),h===f?(M=this._repeat,g=d):(C=fn(h/x),M=~~C,M&&M===C&&(g=d,M--),g>d&&(g=d)),C=qa(this._tTime,x),!u&&this._tTime&&C!==M&&this._tTime-C*x-this._dur<=0&&(C=M),P&&M&1&&(g=d-g,I=1),M!==C&&!this._lock){var D=P&&C&1,A=D===(P&&M&1);if(M<C&&(D=!D),u=D?0:h%d?d:h,this._lock=1,this.render(u||(I?0:fn(M*x)),a,!d)._lock=0,this._tTime=h,!a&&this.parent&&Ai(this,"onRepeat"),this.vars.repeatRefresh&&!I&&(this.invalidate()._lock=1),u&&u!==this._time||v!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(d=this._dur,f=this._tDur,A&&(this._lock=2,u=D?d:-1e-4,this.render(u,!0),this.vars.repeatRefresh&&!I&&this.invalidate()),this._lock=0,!this._ts&&!v)return this;Yx(this,I)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=qb(this,fn(u),fn(g)),b&&(h-=g-(g=b._start))),this._tTime=h,this._time=g,this._act=!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,u=0),!u&&g&&!a&&!M&&(Ai(this,"onStart"),this._tTime!==h))return this;if(g>=u&&s>=0)for(_=this._first;_;){if(S=_._next,(_._act||g>=_._start)&&_._ts&&b!==_){if(_.parent!==this)return this.render(s,a,l);if(_.render(_._ts>0?(g-_._start)*_._ts:(_._dirty?_.totalDuration():_._tDur)+(g-_._start)*_._ts,a,l),g!==this._time||!this._ts&&!v){b=0,S&&(h+=this._zTime=-1e-8);break}}_=S}else{_=this._last;for(var R=s<0?s:g;_;){if(S=_._prev,(_._act||R<=_._end)&&_._ts&&b!==_){if(_.parent!==this)return this.render(s,a,l);if(_.render(_._ts>0?(R-_._start)*_._ts:(_._dirty?_.totalDuration():_._tDur)+(R-_._start)*_._ts,a,l||Pn&&(_._initted||_._startAt)),g!==this._time||!this._ts&&!v){b=0,S&&(h+=this._zTime=R?-1e-8:Bn);break}}_=S}}if(b&&!a&&(this.pause(),b.render(g>=u?0:-1e-8)._zTime=g>=u?1:-1,this._ts))return this._start=T,Ff(this),this.render(s,a,l);this._onUpdate&&!a&&Ai(this,"onUpdate",!0),(h===f&&this._tTime>=this.totalDuration()||!h&&u)&&(T===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((s||!d)&&(h===f&&this._ts>0||!h&&this._ts<0)&&Hs(this,1),!a&&!(s<0&&!u)&&(h||u||!f)&&(Ai(this,h===f&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<f&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(s,a){var l=this;if(Jr(a)||(a=zi(this,a,s)),!(s instanceof au)){if(Hn(s))return s.forEach(function(u){return l.add(u,a)}),this;if(wn(s))return this.addLabel(s,a);if(Jt(s))s=cn.delayedCall(0,s);else return this}return this!==s?mr(this,s,a):this},t.getChildren=function(s,a,l,u){s===void 0&&(s=!0),a===void 0&&(a=!0),l===void 0&&(l=!0),u===void 0&&(u=-1e8);for(var f=[],d=this._first;d;)d._start>=u&&(d instanceof cn?a&&f.push(d):(l&&f.push(d),s&&f.push.apply(f,d.getChildren(!0,a,l)))),d=d._next;return f},t.getById=function(s){for(var a=this.getChildren(1,1,1),l=a.length;l--;)if(a[l].vars.id===s)return a[l]},t.remove=function(s){return wn(s)?this.removeLabel(s):Jt(s)?this.killTweensOf(s):(s.parent===this&&Lf(this,s),s===this._recent&&(this._recent=this._last),Ro(this))},t.totalTime=function(s,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=fn(wi.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),r.prototype.totalTime.call(this,s,a),this._forcing=0,this):this._tTime},t.addLabel=function(s,a){return this.labels[s]=zi(this,a),this},t.removeLabel=function(s){return delete this.labels[s],this},t.addPause=function(s,a,l){var u=cn.delayedCall(0,a||ru,l);return u.data="isPause",this._hasPause=1,mr(this,u,zi(this,s))},t.removePause=function(s){var a=this._first;for(s=zi(this,s);a;)a._start===s&&a.data==="isPause"&&Hs(a),a=a._next},t.killTweensOf=function(s,a,l){for(var u=this.getTweensOf(s,l),f=u.length;f--;)Fs!==u[f]&&u[f].kill(s,a);return this},t.getTweensOf=function(s,a){for(var l=[],u=Gi(s),f=this._first,d=Jr(a),h;f;)f instanceof cn?zb(f._targets,u)&&(d?(!Fs||f._initted&&f._ts)&&f.globalTime(0)<=a&&f.globalTime(f.totalDuration())>a:!a||f.isActive())&&l.push(f):(h=f.getTweensOf(u,a)).length&&l.push.apply(l,h),f=f._next;return l},t.tweenTo=function(s,a){a=a||{};var l=this,u=zi(l,s),f=a,d=f.startAt,h=f.onStart,m=f.onStartParams,g=f.immediateRender,_,S=cn.to(l,Di({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:u,overwrite:"auto",duration:a.duration||Math.abs((u-(d&&"time"in d?d.time:l._time))/l.timeScale())||Bn,onStart:function(){if(l.pause(),!_){var x=a.duration||Math.abs((u-(d&&"time"in d?d.time:l._time))/l.timeScale());S._dur!==x&&Ya(S,x,0,1).render(S._time,!0,!0),_=1}h&&h.apply(S,m||[])}},a));return g?S.render(0):S},t.tweenFromTo=function(s,a,l){return this.tweenTo(a,Di({startAt:{time:zi(this,s)}},l))},t.recent=function(){return this._recent},t.nextLabel=function(s){return s===void 0&&(s=this._time),Qv(this,zi(this,s))},t.previousLabel=function(s){return s===void 0&&(s=this._time),Qv(this,zi(this,s),1)},t.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+Bn)},t.shiftChildren=function(s,a,l){l===void 0&&(l=0);for(var u=this._first,f=this.labels,d;u;)u._start>=l&&(u._start+=s,u._end+=s),u=u._next;if(a)for(d in f)f[d]>=l&&(f[d]+=s);return Ro(this)},t.invalidate=function(s){var a=this._first;for(this._lock=0;a;)a.invalidate(s),a=a._next;return r.prototype.invalidate.call(this,s)},t.clear=function(s){s===void 0&&(s=!0);for(var a=this._first,l;a;)l=a._next,this.remove(a),a=l;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),Ro(this)},t.totalDuration=function(s){var a=0,l=this,u=l._last,f=yr,d,h,m;if(arguments.length)return l.timeScale((l._repeat<0?l.duration():l.totalDuration())/(l.reversed()?-s:s));if(l._dirty){for(m=l.parent;u;)d=u._prev,u._dirty&&u.totalDuration(),h=u._start,h>f&&l._sort&&u._ts&&!l._lock?(l._lock=1,mr(l,u,h-u._delay,1)._lock=0):f=h,h<0&&u._ts&&(a-=h,(!m&&!l._dp||m&&m.smoothChildTiming)&&(l._start+=h/l._ts,l._time-=h,l._tTime-=h),l.shiftChildren(-h,!1,-1/0),f=0),u._end>a&&u._ts&&(a=u._end),u=d;Ya(l,l===qt&&l._time>a?l._time:a,1,1),l._dirty=0}return l._tDur},e.updateRoot=function(s){if(qt._ts&&(Ax(qt,vf(s,qt)),wx=wi.frame),wi.frame>=jv){jv+=bi.autoSleep||120;var a=qt._first;if((!a||!a._ts)&&bi.autoSleep&&wi._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||wi.sleep()}}},e}(au);Di(Jn.prototype,{_lock:0,_hasPause:0,_forcing:0});var lP=function(e,t,n,s,a,l,u){var f=new hi(this._pt,e,t,0,1,tS,null,a),d=0,h=0,m,g,_,S,M,x,v,b;for(f.b=n,f.e=s,n+="",s+="",(v=~s.indexOf("random("))&&(s=su(s)),l&&(b=[n,s],l(b,e,t),n=b[0],s=b[1]),g=n.match(tp)||[];m=tp.exec(s);)S=m[0],M=s.substring(d,m.index),_?_=(_+1)%5:M.substr(-5)==="rgba("&&(_=1),S!==g[h++]&&(x=parseFloat(g[h-1])||0,f._pt={_next:f._pt,p:M||h===1?M:",",s:x,c:S.charAt(1)==="="?La(x,S)-x:parseFloat(S)-x,m:_&&_<4?Math.round:0},d=tp.lastIndex);return f.c=d<s.length?s.substring(d,s.length):"",f.fp=u,(xx.test(s)||v)&&(f.e=0),this._pt=f,f},qm=function(e,t,n,s,a,l,u,f,d,h){Jt(s)&&(s=s(a||0,e,l));var m=e[t],g=n!=="get"?n:Jt(m)?d?e[t.indexOf("set")||!Jt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](d):e[t]():m,_=Jt(m)?d?hP:Jx:jm,S;if(wn(s)&&(~s.indexOf("random(")&&(s=su(s)),s.charAt(1)==="="&&(S=La(g,s)+(zn(g)||0),(S||S===0)&&(s=S))),!h||g!==s||om)return!isNaN(g*s)&&s!==""?(S=new hi(this._pt,e,t,+g||0,s-(g||0),typeof m=="boolean"?mP:eS,0,_),d&&(S.fp=d),u&&S.modifier(u,this,e),this._pt=S):(!m&&!(t in e)&&Hm(t,s),lP.call(this,e,t,g,s,_,f||bi.stringFilter,d))},uP=function(e,t,n,s,a){if(Jt(e)&&(e=Jl(e,a,t,n,s)),!Mr(e)||e.style&&e.nodeType||Hn(e)||vx(e))return wn(e)?Jl(e,a,t,n,s):e;var l={},u;for(u in e)l[u]=Jl(e[u],a,t,n,s);return l},Zx=function(e,t,n,s,a,l){var u,f,d,h;if(Ti[e]&&(u=new Ti[e]).init(a,u.rawVars?t[e]:uP(t[e],s,a,l,n),n,s,l)!==!1&&(n._pt=f=new hi(n._pt,a,e,0,1,u.render,u,0,u.priority),n!==ba))for(d=n._ptLookup[n._targets.indexOf(a)],h=u._props.length;h--;)d[u._props[h]]=f;return u},Fs,om,Ym=function r(e,t,n){var s=e.vars,a=s.ease,l=s.startAt,u=s.immediateRender,f=s.lazy,d=s.onUpdate,h=s.runBackwards,m=s.yoyoEase,g=s.keyframes,_=s.autoRevert,S=e._dur,M=e._startAt,x=e._targets,v=e.parent,b=v&&v.data==="nested"?v.vars.targets:x,w=e._overwrite==="auto"&&!km,T=e.timeline,C,P,I,D,A,R,F,O,B,G,Z,q,$;if(T&&(!g||!a)&&(a="none"),e._ease=bo(a,Wa.ease),e._yEase=m?qx(bo(m===!0?a:m,Wa.ease)):0,m&&e._yoyo&&!e._repeat&&(m=e._yEase,e._yEase=e._ease,e._ease=m),e._from=!T&&!!s.runBackwards,!T||g&&!s.stagger){if(O=x[0]?Ao(x[0]).harness:0,q=O&&s[O.prop],C=_f(s,Gm),M&&(M._zTime<0&&M.progress(1),t<0&&h&&u&&!_?M.render(-1,!0):M.revert(h&&S?lf:Ob),M._lazy=0),l){if(Hs(e._startAt=cn.set(x,Di({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!M&&fi(f),startAt:null,delay:0,onUpdate:d&&function(){return Ai(e,"onUpdate")},stagger:0},l))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Pn||!u&&!_)&&e._startAt.revert(lf),u&&S&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&S&&!M){if(t&&(u=!1),I=Di({overwrite:!1,data:"isFromStart",lazy:u&&!M&&fi(f),immediateRender:u,stagger:0,parent:v},C),q&&(I[O.prop]=q),Hs(e._startAt=cn.set(x,I)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Pn?e._startAt.revert(lf):e._startAt.render(-1,!0)),e._zTime=t,!u)r(e._startAt,Bn,Bn);else if(!t)return}for(e._pt=e._ptCache=0,f=S&&fi(f)||f&&!S,P=0;P<x.length;P++){if(A=x[P],F=A._gsap||Xm(x)[P]._gsap,e._ptLookup[P]=G={},em[F.id]&&zs.length&&gf(),Z=b===x?P:b.indexOf(A),O&&(B=new O).init(A,q||C,e,Z,b)!==!1&&(e._pt=D=new hi(e._pt,A,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(H){G[H]=D}),B.priority&&(R=1)),!O||q)for(I in C)Ti[I]&&(B=Zx(I,C,e,Z,A,b))?B.priority&&(R=1):G[I]=D=qm.call(e,A,I,"get",C[I],Z,b,0,s.stringFilter);e._op&&e._op[P]&&e.kill(A,e._op[P]),w&&e._pt&&(Fs=e,qt.killTweensOf(A,G,e.globalTime(t)),$=!e.parent,Fs=0),e._pt&&f&&(em[F.id]=1)}R&&nS(e),e._onInit&&e._onInit(e)}e._onUpdate=d,e._initted=(!e._op||e._pt)&&!$,g&&t<=0&&T.render(yr,!0,!0)},cP=function(e,t,n,s,a,l,u,f){var d=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,m,g,_;if(!d)for(d=e._ptCache[t]=[],g=e._ptLookup,_=e._targets.length;_--;){if(h=g[_][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return om=1,e.vars[t]="+=0",Ym(e,u),om=0,f?iu(t+" not eligible for reset"):1;d.push(h)}for(_=d.length;_--;)m=d[_],h=m._pt||m,h.s=(s||s===0)&&!a?s:h.s+(s||0)+l*h.c,h.c=n-h.s,m.e&&(m.e=nn(n)+zn(m.e)),m.b&&(m.b=h.s+zn(m.b))},fP=function(e,t){var n=e[0]?Ao(e[0]).harness:0,s=n&&n.aliases,a,l,u,f;if(!s)return t;a=Xa({},t);for(l in s)if(l in a)for(f=s[l].split(","),u=f.length;u--;)a[f[u]]=a[l];return a},dP=function(e,t,n,s){var a=t.ease||s||"power1.inOut",l,u;if(Hn(t))u=n[e]||(n[e]=[]),t.forEach(function(f,d){return u.push({t:d/(t.length-1)*100,v:f,e:a})});else for(l in t)u=n[l]||(n[l]=[]),l==="ease"||u.push({t:parseFloat(e),v:t[l],e:a})},Jl=function(e,t,n,s,a){return Jt(e)?e.call(t,n,s,a):wn(e)&&~e.indexOf("random(")?su(e):e},Kx=Wm+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Qx={};di(Kx+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Qx[r]=1});var cn=function(r){gx(e,r);function e(n,s,a,l){var u;typeof s=="number"&&(a.duration=s,s=a,a=null),u=r.call(this,l?s:Kl(s))||this;var f=u.vars,d=f.duration,h=f.delay,m=f.immediateRender,g=f.stagger,_=f.overwrite,S=f.keyframes,M=f.defaults,x=f.scrollTrigger,v=f.yoyoEase,b=s.parent||qt,w=(Hn(n)||vx(n)?Jr(n[0]):"length"in s)?[n]:Gi(n),T,C,P,I,D,A,R,F;if(u._targets=w.length?Xm(w):iu("GSAP target "+n+" not found. https://gsap.com",!bi.nullTargetWarn)||[],u._ptLookup=[],u._overwrite=_,S||g||Jc(d)||Jc(h)){if(s=u.vars,T=u.timeline=new Jn({data:"nested",defaults:M||{},targets:b&&b.data==="nested"?b.vars.targets:w}),T.kill(),T.parent=T._dp=Wr(u),T._start=0,g||Jc(d)||Jc(h)){if(I=w.length,R=g&&Ux(g),Mr(g))for(D in g)~Kx.indexOf(D)&&(F||(F={}),F[D]=g[D]);for(C=0;C<I;C++)P=_f(s,Qx),P.stagger=0,v&&(P.yoyoEase=v),F&&Xa(P,F),A=w[C],P.duration=+Jl(d,Wr(u),C,A,w),P.delay=(+Jl(h,Wr(u),C,A,w)||0)-u._delay,!g&&I===1&&P.delay&&(u._delay=h=P.delay,u._start+=h,P.delay=0),T.to(A,P,R?R(C,A,w):0),T._ease=yt.none;T.duration()?d=h=0:u.timeline=0}else if(S){Kl(Di(T.vars.defaults,{ease:"none"})),T._ease=bo(S.ease||s.ease||"none");var O=0,B,G,Z;if(Hn(S))S.forEach(function(q){return T.to(w,q,">")}),T.duration();else{P={};for(D in S)D==="ease"||D==="easeEach"||dP(D,S[D],P,S.easeEach);for(D in P)for(B=P[D].sort(function(q,$){return q.t-$.t}),O=0,C=0;C<B.length;C++)G=B[C],Z={ease:G.e,duration:(G.t-(C?B[C-1].t:0))/100*d},Z[D]=G.v,T.to(w,Z,O),O+=Z.duration;T.duration()<d&&T.to({},{duration:d-T.duration()})}}d||u.duration(d=T.duration())}else u.timeline=0;return _===!0&&!km&&(Fs=Wr(u),qt.killTweensOf(w),Fs=0),mr(b,Wr(u),a),s.reversed&&u.reverse(),s.paused&&u.paused(!0),(m||!d&&!S&&u._start===fn(b._time)&&fi(m)&&Gb(Wr(u))&&b.data!=="nested")&&(u._tTime=-1e-8,u.render(Math.max(0,-h)||0)),x&&Ix(Wr(u),x),u}var t=e.prototype;return t.render=function(s,a,l){var u=this._time,f=this._tDur,d=this._dur,h=s<0,m=s>f-Bn&&!h?f:s<Bn?0:s,g,_,S,M,x,v,b,w,T;if(!d)Xb(this,s,a,l);else if(m!==this._tTime||!s||l||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(g=m,w=this.timeline,this._repeat){if(M=d+this._rDelay,this._repeat<-1&&h)return this.totalTime(M*100+s,a,l);if(g=fn(m%M),m===f?(S=this._repeat,g=d):(x=fn(m/M),S=~~x,S&&S===x?(g=d,S--):g>d&&(g=d)),v=this._yoyo&&S&1,v&&(T=this._yEase,g=d-g),x=qa(this._tTime,M),g===u&&!l&&this._initted&&S===x)return this._tTime=m,this;S!==x&&(w&&this._yEase&&Yx(w,v),this.vars.repeatRefresh&&!v&&!this._lock&&g!==M&&this._initted&&(this._lock=l=1,this.render(fn(M*S),!0).invalidate()._lock=0))}if(!this._initted){if(Nx(this,h?s:g,l,a,m))return this._tTime=0,this;if(u!==this._time&&!(l&&this.vars.repeatRefresh&&S!==x))return this;if(d!==this._dur)return this.render(s,a,l)}if(this._tTime=m,this._time=g,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(T||this._ease)(g/d),this._from&&(this.ratio=b=1-b),g&&!u&&!a&&!S&&(Ai(this,"onStart"),this._tTime!==m))return this;for(_=this._pt;_;)_.r(b,_.d),_=_._next;w&&w.render(s<0?s:w._dur*w._ease(g/this._dur),a,l)||this._startAt&&(this._zTime=s),this._onUpdate&&!a&&(h&&tm(this,s,a,l),Ai(this,"onUpdate")),this._repeat&&S!==x&&this.vars.onRepeat&&!a&&this.parent&&Ai(this,"onRepeat"),(m===this._tDur||!m)&&this._tTime===m&&(h&&!this._onUpdate&&tm(this,s,!0,!0),(s||!d)&&(m===this._tDur&&this._ts>0||!m&&this._ts<0)&&Hs(this,1),!a&&!(h&&!u)&&(m||u||v)&&(Ai(this,m===f?"onComplete":"onReverseComplete",!0),this._prom&&!(m<f&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),r.prototype.invalidate.call(this,s)},t.resetTo=function(s,a,l,u,f){ou||wi.wake(),this._ts||this.play();var d=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Ym(this,d),h=this._ease(d/this._dur),cP(this,s,a,l,u,h,d,f)?this.resetTo(s,a,l,u,1):(Uf(this,0),this.parent||Px(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(s,a){if(a===void 0&&(a="all"),!s&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?Yl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Pn),this;if(this.timeline){var l=this.timeline.totalDuration();return this.timeline.killTweensOf(s,a,Fs&&Fs.vars.overwrite!==!0)._first||Yl(this),this.parent&&l!==this.timeline.totalDuration()&&Ya(this,this._dur*this.timeline._tDur/l,0,1),this}var u=this._targets,f=s?Gi(s):u,d=this._ptLookup,h=this._pt,m,g,_,S,M,x,v;if((!a||a==="all")&&Vb(u,f))return a==="all"&&(this._pt=0),Yl(this);for(m=this._op=this._op||[],a!=="all"&&(wn(a)&&(M={},di(a,function(b){return M[b]=1}),a=M),a=fP(u,a)),v=u.length;v--;)if(~f.indexOf(u[v])){g=d[v],a==="all"?(m[v]=a,S=g,_={}):(_=m[v]=m[v]||{},S=a);for(M in S)x=g&&g[M],x&&((!("kill"in x.d)||x.d.kill(M)===!0)&&Lf(this,x,"_pt"),delete g[M]),_!=="all"&&(_[M]=1)}return this._initted&&!this._pt&&h&&Yl(this),this},e.to=function(s,a){return new e(s,a,arguments[2])},e.from=function(s,a){return Ql(1,arguments)},e.delayedCall=function(s,a,l,u){return new e(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:a,onReverseComplete:a,onCompleteParams:l,onReverseCompleteParams:l,callbackScope:u})},e.fromTo=function(s,a,l){return Ql(2,arguments)},e.set=function(s,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new e(s,a)},e.killTweensOf=function(s,a,l){return qt.killTweensOf(s,a,l)},e}(au);Di(cn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});di("staggerTo,staggerFrom,staggerFromTo",function(r){cn[r]=function(){var e=new Jn,t=im.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var jm=function(e,t,n){return e[t]=n},Jx=function(e,t,n){return e[t](n)},hP=function(e,t,n,s){return e[t](s.fp,n)},pP=function(e,t,n){return e.setAttribute(t,n)},$m=function(e,t){return Jt(e[t])?Jx:zm(e[t])&&e.setAttribute?pP:jm},eS=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},mP=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},tS=function(e,t){var n=t._pt,s="";if(!e&&t.b)s=t.b;else if(e===1&&t.e)s=t.e;else{for(;n;)s=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+s,n=n._next;s+=t.c}t.set(t.t,t.p,s,t)},Zm=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},gP=function(e,t,n,s){for(var a=this._pt,l;a;)l=a._next,a.p===s&&a.modifier(e,t,n),a=l},_P=function(e){for(var t=this._pt,n,s;t;)s=t._next,t.p===e&&!t.op||t.op===e?Lf(this,t,"_pt"):t.dep||(n=1),t=s;return!n},vP=function(e,t,n,s){s.mSet(e,t,s.m.call(s.tween,n,s.mt),s)},nS=function(e){for(var t=e._pt,n,s,a,l;t;){for(n=t._next,s=a;s&&s.pr>t.pr;)s=s._next;(t._prev=s?s._prev:l)?t._prev._next=t:a=t,(t._next=s)?s._prev=t:l=t,t=n}e._pt=a},hi=function(){function r(t,n,s,a,l,u,f,d,h){this.t=n,this.s=a,this.c=l,this.p=s,this.r=u||eS,this.d=f||this,this.set=d||jm,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,s,a){this.mSet=this.mSet||this.set,this.set=vP,this.m=n,this.mt=a,this.tween=s},r}();di(Wm+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Gm[r]=1});Pi.TweenMax=Pi.TweenLite=cn;Pi.TimelineLite=Pi.TimelineMax=Jn;qt=new Jn({sortChildren:!1,defaults:Wa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});bi.stringFilter=Xx;var Po=[],cf={},yP=[],ey=0,xP=0,op=function(e){return(cf[e]||yP).map(function(t){return t()})},am=function(){var e=Date.now(),t=[];e-ey>2&&(op("matchMediaInit"),Po.forEach(function(n){var s=n.queries,a=n.conditions,l,u,f,d;for(u in s)l=dr.matchMedia(s[u]).matches,l&&(f=1),l!==a[u]&&(a[u]=l,d=1);d&&(n.revert(),f&&t.push(n))}),op("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(s){return n.add(null,s)})}),ey=e,op("matchMedia"))},iS=function(){function r(t,n){this.selector=n&&rm(n),this.data=[],this._r=[],this.isReverted=!1,this.id=xP++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,s,a){Jt(n)&&(a=s,s=n,n=Jt);var l=this,u=function(){var d=Ht,h=l.selector,m;return d&&d!==l&&d.data.push(l),a&&(l.selector=rm(a)),Ht=l,m=s.apply(l,arguments),Jt(m)&&l._r.push(m),Ht=d,l.selector=h,l.isReverted=!1,m};return l.last=u,n===Jt?u(l,function(f){return l.add(null,f)}):n?l[n]=u:u},e.ignore=function(n){var s=Ht;Ht=null,n(this),Ht=s},e.getTweens=function(){var n=[];return this.data.forEach(function(s){return s instanceof r?n.push.apply(n,s.getTweens()):s instanceof cn&&!(s.parent&&s.parent.data==="nested")&&n.push(s)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,s){var a=this;if(n?function(){for(var u=a.getTweens(),f=a.data.length,d;f--;)d=a.data[f],d.data==="isFlip"&&(d.revert(),d.getChildren(!0,!0,!1).forEach(function(h){return u.splice(u.indexOf(h),1)}));for(u.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,m){return m.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),f=a.data.length;f--;)d=a.data[f],d instanceof Jn?d.data!=="nested"&&(d.scrollTrigger&&d.scrollTrigger.revert(),d.kill()):!(d instanceof cn)&&d.revert&&d.revert(n);a._r.forEach(function(h){return h(n,a)}),a.isReverted=!0}():this.data.forEach(function(u){return u.kill&&u.kill()}),this.clear(),s)for(var l=Po.length;l--;)Po[l].id===this.id&&Po.splice(l,1)},e.revert=function(n){this.kill(n||{})},r}(),SP=function(){function r(t){this.contexts=[],this.scope=t,Ht&&Ht.data.push(this)}var e=r.prototype;return e.add=function(n,s,a){Mr(n)||(n={matches:n});var l=new iS(0,a||this.scope),u=l.conditions={},f,d,h;Ht&&!l.selector&&(l.selector=Ht.selector),this.contexts.push(l),s=l.add("onMatch",s),l.queries=n;for(d in n)d==="all"?h=1:(f=dr.matchMedia(n[d]),f&&(Po.indexOf(l)<0&&Po.push(l),(u[d]=f.matches)&&(h=1),f.addListener?f.addListener(am):f.addEventListener("change",am)));return h&&s(l,function(m){return l.add(null,m)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(s){return s.kill(n,!0)})},r}(),yf={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(s){return Hx(s)})},timeline:function(e){return new Jn(e)},getTweensOf:function(e,t){return qt.getTweensOf(e,t)},getProperty:function(e,t,n,s){wn(e)&&(e=Gi(e)[0]);var a=Ao(e||{}).get,l=n?bx:Rx;return n==="native"&&(n=""),e&&(t?l((Ti[t]&&Ti[t].get||a)(e,t,n,s)):function(u,f,d){return l((Ti[u]&&Ti[u].get||a)(e,u,f,d))})},quickSetter:function(e,t,n){if(e=Gi(e),e.length>1){var s=e.map(function(h){return gi.quickSetter(h,t,n)}),a=s.length;return function(h){for(var m=a;m--;)s[m](h)}}e=e[0]||{};var l=Ti[t],u=Ao(e),f=u.harness&&(u.harness.aliases||{})[t]||t,d=l?function(h){var m=new l;ba._pt=0,m.init(e,n?h+n:h,ba,0,[e]),m.render(1,m),ba._pt&&Zm(1,ba)}:u.set(e,f);return l?d:function(h){return d(e,f,n?h+n:h,u,1)}},quickTo:function(e,t,n){var s,a=gi.to(e,Di((s={},s[t]="+=0.1",s.paused=!0,s.stagger=0,s),n||{})),l=function(f,d,h){return a.resetTo(t,f,d,h)};return l.tween=a,l},isTweening:function(e){return qt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=bo(e.ease,Wa.ease)),$v(Wa,e||{})},config:function(e){return $v(bi,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,s=e.plugins,a=e.defaults,l=e.extendTimeline;(s||"").split(",").forEach(function(u){return u&&!Ti[u]&&!Pi[u]&&iu(t+" effect requires "+u+" plugin.")}),np[t]=function(u,f,d){return n(Gi(u),Di(f||{},a),d)},l&&(Jn.prototype[t]=function(u,f,d){return this.add(np[t](u,Mr(f)?f:(d=f)&&{},this),d)})},registerEase:function(e,t){yt[e]=bo(t)},parseEase:function(e,t){return arguments.length?bo(e,t):yt},getById:function(e){return qt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Jn(e),s,a;for(n.smoothChildTiming=fi(e.smoothChildTiming),qt.remove(n),n._dp=0,n._time=n._tTime=qt._time,s=qt._first;s;)a=s._next,(t||!(!s._dur&&s instanceof cn&&s.vars.onComplete===s._targets[0]))&&mr(n,s,s._start-s._delay),s=a;return mr(qt,n,0),n},context:function(e,t){return e?new iS(e,t):Ht},matchMedia:function(e){return new SP(e)},matchMediaRefresh:function(){return Po.forEach(function(e){var t=e.conditions,n,s;for(s in t)t[s]&&(t[s]=!1,n=1);n&&e.revert()})||am()},addEventListener:function(e,t){var n=cf[e]||(cf[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=cf[e],s=n&&n.indexOf(t);s>=0&&n.splice(s,1)},utils:{wrap:Jb,wrapYoyo:eP,distribute:Ux,random:kx,snap:Ox,normalize:Qb,getUnit:zn,clamp:jb,splitColor:Gx,toArray:Gi,selector:rm,mapRange:Bx,pipe:Zb,unitize:Kb,interpolate:tP,shuffle:Fx},install:Ex,effects:np,ticker:wi,updateRoot:Jn.updateRoot,plugins:Ti,globalTimeline:qt,core:{PropTween:hi,globals:Tx,Tween:cn,Timeline:Jn,Animation:au,getCache:Ao,_removeLinkedListItem:Lf,reverting:function(){return Pn},context:function(e){return e&&Ht&&(Ht.data.push(e),e._ctx=Ht),Ht},suppressOverwrites:function(e){return km=e}}};di("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return yf[r]=cn[r]});wi.add(Jn.updateRoot);ba=yf.to({},{duration:0});var MP=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},EP=function(e,t){var n=e._targets,s,a,l;for(s in t)for(a=n.length;a--;)l=e._ptLookup[a][s],l&&(l=l.d)&&(l._pt&&(l=MP(l,s)),l&&l.modifier&&l.modifier(t[s],e,n[a],s))},ap=function(e,t){return{name:e,rawVars:1,init:function(s,a,l){l._onInit=function(u){var f,d;if(wn(a)&&(f={},di(a,function(h){return f[h]=1}),a=f),t){f={};for(d in a)f[d]=t(a[d]);a=f}EP(u,a)}}}},gi=yf.registerPlugin({name:"attr",init:function(e,t,n,s,a){var l,u,f;this.tween=n;for(l in t)f=e.getAttribute(l)||"",u=this.add(e,"setAttribute",(f||0)+"",t[l],s,a,0,0,l),u.op=l,u.b=f,this._props.push(l)},render:function(e,t){for(var n=t._pt;n;)Pn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},ap("roundProps",sm),ap("modifiers"),ap("snap",Ox))||yf;cn.version=Jn.version=gi.version="3.12.7";Mx=1;Bm()&&ja();yt.Power0;yt.Power1;yt.Power2;yt.Power3;yt.Power4;yt.Linear;yt.Quad;yt.Cubic;yt.Quart;yt.Quint;yt.Strong;yt.Elastic;yt.Back;yt.SteppedEase;yt.Bounce;yt.Sine;yt.Expo;yt.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ty,Us,Fa,Km,Co,ny,Qm,TP=function(){return typeof window<"u"},es={},So=180/Math.PI,Ua=Math.PI/180,Ta=Math.atan2,iy=1e8,Jm=/([A-Z])/g,wP=/(left|right|width|margin|padding|x)/i,CP=/[\s,\(]\S/,_r={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},lm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},AP=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},RP=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},bP=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},rS=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},sS=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},PP=function(e,t,n){return e.style[t]=n},DP=function(e,t,n){return e.style.setProperty(t,n)},IP=function(e,t,n){return e._gsap[t]=n},NP=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},LP=function(e,t,n,s,a){var l=e._gsap;l.scaleX=l.scaleY=n,l.renderTransform(a,l)},FP=function(e,t,n,s,a){var l=e._gsap;l[t]=n,l.renderTransform(a,l)},Yt="transform",pi=Yt+"Origin",UP=function r(e,t){var n=this,s=this.target,a=s.style,l=s._gsap;if(e in es&&a){if(this.tfm=this.tfm||{},e!=="transform")e=_r[e]||e,~e.indexOf(",")?e.split(",").forEach(function(u){return n.tfm[u]=qr(s,u)}):this.tfm[e]=l.x?l[e]:qr(s,e),e===pi&&(this.tfm.zOrigin=l.zOrigin);else return _r.transform.split(",").forEach(function(u){return r.call(n,u,t)});if(this.props.indexOf(Yt)>=0)return;l.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(pi,t,"")),e=Yt}(a||t)&&this.props.push(e,t,a[e])},oS=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},OP=function(){var e=this.props,t=this.target,n=t.style,s=t._gsap,a,l;for(a=0;a<e.length;a+=3)e[a+1]?e[a+1]===2?t[e[a]](e[a+2]):t[e[a]]=e[a+2]:e[a+2]?n[e[a]]=e[a+2]:n.removeProperty(e[a].substr(0,2)==="--"?e[a]:e[a].replace(Jm,"-$1").toLowerCase());if(this.tfm){for(l in this.tfm)s[l]=this.tfm[l];s.svg&&(s.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),a=Qm(),(!a||!a.isStart)&&!n[Yt]&&(oS(n),s.zOrigin&&n[pi]&&(n[pi]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},aS=function(e,t){var n={target:e,props:[],revert:OP,save:UP};return e._gsap||gi.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(s){return n.save(s)}),n},lS,um=function(e,t){var n=Us.createElementNS?Us.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Us.createElement(e);return n&&n.style?n:Us.createElement(e)},xr=function r(e,t,n){var s=getComputedStyle(e);return s[t]||s.getPropertyValue(t.replace(Jm,"-$1").toLowerCase())||s.getPropertyValue(t)||!n&&r(e,$a(t)||t,1)||""},ry="O,Moz,ms,Ms,Webkit".split(","),$a=function(e,t,n){var s=t||Co,a=s.style,l=5;if(e in a&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);l--&&!(ry[l]+e in a););return l<0?null:(l===3?"ms":l>=0?ry[l]:"")+e},cm=function(){TP()&&window.document&&(ty=window,Us=ty.document,Fa=Us.documentElement,Co=um("div")||{style:{}},um("div"),Yt=$a(Yt),pi=Yt+"Origin",Co.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",lS=!!$a("perspective"),Qm=gi.core.reverting,Km=1)},sy=function(e){var t=e.ownerSVGElement,n=um("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=e.cloneNode(!0),a;s.style.display="block",n.appendChild(s),Fa.appendChild(n);try{a=s.getBBox()}catch{}return n.removeChild(s),Fa.removeChild(n),a},oy=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},uS=function(e){var t,n;try{t=e.getBBox()}catch{t=sy(e),n=1}return t&&(t.width||t.height)||n||(t=sy(e)),t&&!t.width&&!t.x&&!t.y?{x:+oy(e,["x","cx","x1"])||0,y:+oy(e,["y","cy","y1"])||0,width:0,height:0}:t},cS=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&uS(e))},Io=function(e,t){if(t){var n=e.style,s;t in es&&t!==pi&&(t=Yt),n.removeProperty?(s=t.substr(0,2),(s==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(s==="--"?t:t.replace(Jm,"-$1").toLowerCase())):n.removeAttribute(t)}},Os=function(e,t,n,s,a,l){var u=new hi(e._pt,t,n,0,1,l?sS:rS);return e._pt=u,u.b=s,u.e=a,e._props.push(n),u},ay={deg:1,rad:1,turn:1},kP={grid:1,flex:1},Gs=function r(e,t,n,s){var a=parseFloat(n)||0,l=(n+"").trim().substr((a+"").length)||"px",u=Co.style,f=wP.test(t),d=e.tagName.toLowerCase()==="svg",h=(d?"client":"offset")+(f?"Width":"Height"),m=100,g=s==="px",_=s==="%",S,M,x,v;if(s===l||!a||ay[s]||ay[l])return a;if(l!=="px"&&!g&&(a=r(e,t,n,"px")),v=e.getCTM&&cS(e),(_||l==="%")&&(es[t]||~t.indexOf("adius")))return S=v?e.getBBox()[f?"width":"height"]:e[h],nn(_?a/S*m:a/100*S);if(u[f?"width":"height"]=m+(g?l:s),M=s!=="rem"&&~t.indexOf("adius")||s==="em"&&e.appendChild&&!d?e:e.parentNode,v&&(M=(e.ownerSVGElement||{}).parentNode),(!M||M===Us||!M.appendChild)&&(M=Us.body),x=M._gsap,x&&_&&x.width&&f&&x.time===wi.time&&!x.uncache)return nn(a/x.width*m);if(_&&(t==="height"||t==="width")){var b=e.style[t];e.style[t]=m+s,S=e[h],b?e.style[t]=b:Io(e,t)}else(_||l==="%")&&!kP[xr(M,"display")]&&(u.position=xr(e,"position")),M===e&&(u.position="static"),M.appendChild(Co),S=Co[h],M.removeChild(Co),u.position="absolute";return f&&_&&(x=Ao(M),x.time=wi.time,x.width=M[h]),nn(g?S*a/m:S&&a?m/S*a:0)},qr=function(e,t,n,s){var a;return Km||cm(),t in _r&&t!=="transform"&&(t=_r[t],~t.indexOf(",")&&(t=t.split(",")[0])),es[t]&&t!=="transform"?(a=uu(e,s),a=t!=="transformOrigin"?a[t]:a.svg?a.origin:Sf(xr(e,pi))+" "+a.zOrigin+"px"):(a=e.style[t],(!a||a==="auto"||s||~(a+"").indexOf("calc("))&&(a=xf[t]&&xf[t](e,t,n)||xr(e,t)||Cx(e,t)||(t==="opacity"?1:0))),n&&!~(a+"").trim().indexOf(" ")?Gs(e,t,a,n)+n:a},zP=function(e,t,n,s){if(!n||n==="none"){var a=$a(t,e,1),l=a&&xr(e,a,1);l&&l!==n?(t=a,n=l):t==="borderColor"&&(n=xr(e,"borderTopColor"))}var u=new hi(this._pt,e.style,t,0,1,tS),f=0,d=0,h,m,g,_,S,M,x,v,b,w,T,C;if(u.b=n,u.e=s,n+="",s+="",s==="auto"&&(M=e.style[t],e.style[t]=s,s=xr(e,t)||s,M?e.style[t]=M:Io(e,t)),h=[n,s],Xx(h),n=h[0],s=h[1],g=n.match(Ra)||[],C=s.match(Ra)||[],C.length){for(;m=Ra.exec(s);)x=m[0],b=s.substring(f,m.index),S?S=(S+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(S=1),x!==(M=g[d++]||"")&&(_=parseFloat(M)||0,T=M.substr((_+"").length),x.charAt(1)==="="&&(x=La(_,x)+T),v=parseFloat(x),w=x.substr((v+"").length),f=Ra.lastIndex-w.length,w||(w=w||bi.units[t]||T,f===s.length&&(s+=w,u.e+=w)),T!==w&&(_=Gs(e,t,M,w)||0),u._pt={_next:u._pt,p:b||d===1?b:",",s:_,c:v-_,m:S&&S<4||t==="zIndex"?Math.round:0});u.c=f<s.length?s.substring(f,s.length):""}else u.r=t==="display"&&s==="none"?sS:rS;return xx.test(s)&&(u.e=0),this._pt=u,u},ly={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},BP=function(e){var t=e.split(" "),n=t[0],s=t[1]||"50%";return(n==="top"||n==="bottom"||s==="left"||s==="right")&&(e=n,n=s,s=e),t[0]=ly[n]||n,t[1]=ly[s]||s,t.join(" ")},VP=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,s=n.style,a=t.u,l=n._gsap,u,f,d;if(a==="all"||a===!0)s.cssText="",f=1;else for(a=a.split(","),d=a.length;--d>-1;)u=a[d],es[u]&&(f=1,u=u==="transformOrigin"?pi:Yt),Io(n,u);f&&(Io(n,Yt),l&&(l.svg&&n.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",uu(n,1),l.uncache=1,oS(s)))}},xf={clearProps:function(e,t,n,s,a){if(a.data!=="isFromStart"){var l=e._pt=new hi(e._pt,t,n,0,0,VP);return l.u=s,l.pr=-10,l.tween=a,e._props.push(n),1}}},lu=[1,0,0,1,0,0],fS={},dS=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},uy=function(e){var t=xr(e,Yt);return dS(t)?lu:t.substr(7).match(yx).map(nn)},eg=function(e,t){var n=e._gsap||Ao(e),s=e.style,a=uy(e),l,u,f,d;return n.svg&&e.getAttribute("transform")?(f=e.transform.baseVal.consolidate().matrix,a=[f.a,f.b,f.c,f.d,f.e,f.f],a.join(",")==="1,0,0,1,0,0"?lu:a):(a===lu&&!e.offsetParent&&e!==Fa&&!n.svg&&(f=s.display,s.display="block",l=e.parentNode,(!l||!e.offsetParent&&!e.getBoundingClientRect().width)&&(d=1,u=e.nextElementSibling,Fa.appendChild(e)),a=uy(e),f?s.display=f:Io(e,"display"),d&&(u?l.insertBefore(e,u):l?l.appendChild(e):Fa.removeChild(e))),t&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},fm=function(e,t,n,s,a,l){var u=e._gsap,f=a||eg(e,!0),d=u.xOrigin||0,h=u.yOrigin||0,m=u.xOffset||0,g=u.yOffset||0,_=f[0],S=f[1],M=f[2],x=f[3],v=f[4],b=f[5],w=t.split(" "),T=parseFloat(w[0])||0,C=parseFloat(w[1])||0,P,I,D,A;n?f!==lu&&(I=_*x-S*M)&&(D=T*(x/I)+C*(-M/I)+(M*b-x*v)/I,A=T*(-S/I)+C*(_/I)-(_*b-S*v)/I,T=D,C=A):(P=uS(e),T=P.x+(~w[0].indexOf("%")?T/100*P.width:T),C=P.y+(~(w[1]||w[0]).indexOf("%")?C/100*P.height:C)),s||s!==!1&&u.smooth?(v=T-d,b=C-h,u.xOffset=m+(v*_+b*M)-v,u.yOffset=g+(v*S+b*x)-b):u.xOffset=u.yOffset=0,u.xOrigin=T,u.yOrigin=C,u.smooth=!!s,u.origin=t,u.originIsAbsolute=!!n,e.style[pi]="0px 0px",l&&(Os(l,u,"xOrigin",d,T),Os(l,u,"yOrigin",h,C),Os(l,u,"xOffset",m,u.xOffset),Os(l,u,"yOffset",g,u.yOffset)),e.setAttribute("data-svg-origin",T+" "+C)},uu=function(e,t){var n=e._gsap||new $x(e);if("x"in n&&!t&&!n.uncache)return n;var s=e.style,a=n.scaleX<0,l="px",u="deg",f=getComputedStyle(e),d=xr(e,pi)||"0",h,m,g,_,S,M,x,v,b,w,T,C,P,I,D,A,R,F,O,B,G,Z,q,$,H,J,ee,z,te,Ce,ne,le;return h=m=g=M=x=v=b=w=T=0,_=S=1,n.svg=!!(e.getCTM&&cS(e)),f.translate&&((f.translate!=="none"||f.scale!=="none"||f.rotate!=="none")&&(s[Yt]=(f.translate!=="none"?"translate3d("+(f.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(f.rotate!=="none"?"rotate("+f.rotate+") ":"")+(f.scale!=="none"?"scale("+f.scale.split(" ").join(",")+") ":"")+(f[Yt]!=="none"?f[Yt]:"")),s.scale=s.rotate=s.translate="none"),I=eg(e,n.svg),n.svg&&(n.uncache?(H=e.getBBox(),d=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",$=""):$=!t&&e.getAttribute("data-svg-origin"),fm(e,$||d,!!$||n.originIsAbsolute,n.smooth!==!1,I)),C=n.xOrigin||0,P=n.yOrigin||0,I!==lu&&(F=I[0],O=I[1],B=I[2],G=I[3],h=Z=I[4],m=q=I[5],I.length===6?(_=Math.sqrt(F*F+O*O),S=Math.sqrt(G*G+B*B),M=F||O?Ta(O,F)*So:0,b=B||G?Ta(B,G)*So+M:0,b&&(S*=Math.abs(Math.cos(b*Ua))),n.svg&&(h-=C-(C*F+P*B),m-=P-(C*O+P*G))):(le=I[6],Ce=I[7],ee=I[8],z=I[9],te=I[10],ne=I[11],h=I[12],m=I[13],g=I[14],D=Ta(le,te),x=D*So,D&&(A=Math.cos(-D),R=Math.sin(-D),$=Z*A+ee*R,H=q*A+z*R,J=le*A+te*R,ee=Z*-R+ee*A,z=q*-R+z*A,te=le*-R+te*A,ne=Ce*-R+ne*A,Z=$,q=H,le=J),D=Ta(-B,te),v=D*So,D&&(A=Math.cos(-D),R=Math.sin(-D),$=F*A-ee*R,H=O*A-z*R,J=B*A-te*R,ne=G*R+ne*A,F=$,O=H,B=J),D=Ta(O,F),M=D*So,D&&(A=Math.cos(D),R=Math.sin(D),$=F*A+O*R,H=Z*A+q*R,O=O*A-F*R,q=q*A-Z*R,F=$,Z=H),x&&Math.abs(x)+Math.abs(M)>359.9&&(x=M=0,v=180-v),_=nn(Math.sqrt(F*F+O*O+B*B)),S=nn(Math.sqrt(q*q+le*le)),D=Ta(Z,q),b=Math.abs(D)>2e-4?D*So:0,T=ne?1/(ne<0?-ne:ne):0),n.svg&&($=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!dS(xr(e,Yt)),$&&e.setAttribute("transform",$))),Math.abs(b)>90&&Math.abs(b)<270&&(a?(_*=-1,b+=M<=0?180:-180,M+=M<=0?180:-180):(S*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+l,n.y=m-((n.yPercent=m&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-m)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+l,n.z=g+l,n.scaleX=nn(_),n.scaleY=nn(S),n.rotation=nn(M)+u,n.rotationX=nn(x)+u,n.rotationY=nn(v)+u,n.skewX=b+u,n.skewY=w+u,n.transformPerspective=T+l,(n.zOrigin=parseFloat(d.split(" ")[2])||!t&&n.zOrigin||0)&&(s[pi]=Sf(d)),n.xOffset=n.yOffset=0,n.force3D=bi.force3D,n.renderTransform=n.svg?GP:lS?hS:HP,n.uncache=0,n},Sf=function(e){return(e=e.split(" "))[0]+" "+e[1]},lp=function(e,t,n){var s=zn(t);return nn(parseFloat(t)+parseFloat(Gs(e,"x",n+"px",s)))+s},HP=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,hS(e,t)},go="0deg",Wl="0px",_o=") ",hS=function(e,t){var n=t||this,s=n.xPercent,a=n.yPercent,l=n.x,u=n.y,f=n.z,d=n.rotation,h=n.rotationY,m=n.rotationX,g=n.skewX,_=n.skewY,S=n.scaleX,M=n.scaleY,x=n.transformPerspective,v=n.force3D,b=n.target,w=n.zOrigin,T="",C=v==="auto"&&e&&e!==1||v===!0;if(w&&(m!==go||h!==go)){var P=parseFloat(h)*Ua,I=Math.sin(P),D=Math.cos(P),A;P=parseFloat(m)*Ua,A=Math.cos(P),l=lp(b,l,I*A*-w),u=lp(b,u,-Math.sin(P)*-w),f=lp(b,f,D*A*-w+w)}x!==Wl&&(T+="perspective("+x+_o),(s||a)&&(T+="translate("+s+"%, "+a+"%) "),(C||l!==Wl||u!==Wl||f!==Wl)&&(T+=f!==Wl||C?"translate3d("+l+", "+u+", "+f+") ":"translate("+l+", "+u+_o),d!==go&&(T+="rotate("+d+_o),h!==go&&(T+="rotateY("+h+_o),m!==go&&(T+="rotateX("+m+_o),(g!==go||_!==go)&&(T+="skew("+g+", "+_+_o),(S!==1||M!==1)&&(T+="scale("+S+", "+M+_o),b.style[Yt]=T||"translate(0, 0)"},GP=function(e,t){var n=t||this,s=n.xPercent,a=n.yPercent,l=n.x,u=n.y,f=n.rotation,d=n.skewX,h=n.skewY,m=n.scaleX,g=n.scaleY,_=n.target,S=n.xOrigin,M=n.yOrigin,x=n.xOffset,v=n.yOffset,b=n.forceCSS,w=parseFloat(l),T=parseFloat(u),C,P,I,D,A;f=parseFloat(f),d=parseFloat(d),h=parseFloat(h),h&&(h=parseFloat(h),d+=h,f+=h),f||d?(f*=Ua,d*=Ua,C=Math.cos(f)*m,P=Math.sin(f)*m,I=Math.sin(f-d)*-g,D=Math.cos(f-d)*g,d&&(h*=Ua,A=Math.tan(d-h),A=Math.sqrt(1+A*A),I*=A,D*=A,h&&(A=Math.tan(h),A=Math.sqrt(1+A*A),C*=A,P*=A)),C=nn(C),P=nn(P),I=nn(I),D=nn(D)):(C=m,D=g,P=I=0),(w&&!~(l+"").indexOf("px")||T&&!~(u+"").indexOf("px"))&&(w=Gs(_,"x",l,"px"),T=Gs(_,"y",u,"px")),(S||M||x||v)&&(w=nn(w+S-(S*C+M*I)+x),T=nn(T+M-(S*P+M*D)+v)),(s||a)&&(A=_.getBBox(),w=nn(w+s/100*A.width),T=nn(T+a/100*A.height)),A="matrix("+C+","+P+","+I+","+D+","+w+","+T+")",_.setAttribute("transform",A),b&&(_.style[Yt]=A)},WP=function(e,t,n,s,a){var l=360,u=wn(a),f=parseFloat(a)*(u&&~a.indexOf("rad")?So:1),d=f-s,h=s+d+"deg",m,g;return u&&(m=a.split("_")[1],m==="short"&&(d%=l,d!==d%(l/2)&&(d+=d<0?l:-360)),m==="cw"&&d<0?d=(d+l*iy)%l-~~(d/l)*l:m==="ccw"&&d>0&&(d=(d-l*iy)%l-~~(d/l)*l)),e._pt=g=new hi(e._pt,t,n,s,d,AP),g.e=h,g.u="deg",e._props.push(n),g},cy=function(e,t){for(var n in t)e[n]=t[n];return e},XP=function(e,t,n){var s=cy({},n._gsap),a="perspective,force3D,transformOrigin,svgOrigin",l=n.style,u,f,d,h,m,g,_,S;s.svg?(d=n.getAttribute("transform"),n.setAttribute("transform",""),l[Yt]=t,u=uu(n,1),Io(n,Yt),n.setAttribute("transform",d)):(d=getComputedStyle(n)[Yt],l[Yt]=t,u=uu(n,1),l[Yt]=d);for(f in es)d=s[f],h=u[f],d!==h&&a.indexOf(f)<0&&(_=zn(d),S=zn(h),m=_!==S?Gs(n,f,d,S):parseFloat(d),g=parseFloat(h),e._pt=new hi(e._pt,u,f,m,g-m,lm),e._pt.u=S||0,e._props.push(f));cy(u,s)};di("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",s="Bottom",a="Left",l=(e<3?[t,n,s,a]:[t+a,t+n,s+n,s+a]).map(function(u){return e<2?r+u:"border"+u+r});xf[e>1?"border"+r:r]=function(u,f,d,h,m){var g,_;if(arguments.length<4)return g=l.map(function(S){return qr(u,S,d)}),_=g.join(" "),_.split(g[0]).length===5?g[0]:_;g=(h+"").split(" "),_={},l.forEach(function(S,M){return _[S]=g[M]=g[M]||g[(M-1)/2|0]}),u.init(f,_,m)}});var pS={name:"css",register:cm,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,s,a){var l=this._props,u=e.style,f=n.vars.startAt,d,h,m,g,_,S,M,x,v,b,w,T,C,P,I,D;Km||cm(),this.styles=this.styles||aS(e),D=this.styles.props,this.tween=n;for(M in t)if(M!=="autoRound"&&(h=t[M],!(Ti[M]&&Zx(M,t,n,s,e,a)))){if(_=typeof h,S=xf[M],_==="function"&&(h=h.call(n,s,e,a),_=typeof h),_==="string"&&~h.indexOf("random(")&&(h=su(h)),S)S(this,e,M,h,n)&&(I=1);else if(M.substr(0,2)==="--")d=(getComputedStyle(e).getPropertyValue(M)+"").trim(),h+="",Bs.lastIndex=0,Bs.test(d)||(x=zn(d),v=zn(h)),v?x!==v&&(d=Gs(e,M,d,v)+v):x&&(h+=x),this.add(u,"setProperty",d,h,s,a,0,0,M),l.push(M),D.push(M,0,u[M]);else if(_!=="undefined"){if(f&&M in f?(d=typeof f[M]=="function"?f[M].call(n,s,e,a):f[M],wn(d)&&~d.indexOf("random(")&&(d=su(d)),zn(d+"")||d==="auto"||(d+=bi.units[M]||zn(qr(e,M))||""),(d+"").charAt(1)==="="&&(d=qr(e,M))):d=qr(e,M),g=parseFloat(d),b=_==="string"&&h.charAt(1)==="="&&h.substr(0,2),b&&(h=h.substr(2)),m=parseFloat(h),M in _r&&(M==="autoAlpha"&&(g===1&&qr(e,"visibility")==="hidden"&&m&&(g=0),D.push("visibility",0,u.visibility),Os(this,u,"visibility",g?"inherit":"hidden",m?"inherit":"hidden",!m)),M!=="scale"&&M!=="transform"&&(M=_r[M],~M.indexOf(",")&&(M=M.split(",")[0]))),w=M in es,w){if(this.styles.save(M),T||(C=e._gsap,C.renderTransform&&!t.parseTransform||uu(e,t.parseTransform),P=t.smoothOrigin!==!1&&C.smooth,T=this._pt=new hi(this._pt,u,Yt,0,1,C.renderTransform,C,0,-1),T.dep=1),M==="scale")this._pt=new hi(this._pt,C,"scaleY",C.scaleY,(b?La(C.scaleY,b+m):m)-C.scaleY||0,lm),this._pt.u=0,l.push("scaleY",M),M+="X";else if(M==="transformOrigin"){D.push(pi,0,u[pi]),h=BP(h),C.svg?fm(e,h,0,P,0,this):(v=parseFloat(h.split(" ")[2])||0,v!==C.zOrigin&&Os(this,C,"zOrigin",C.zOrigin,v),Os(this,u,M,Sf(d),Sf(h)));continue}else if(M==="svgOrigin"){fm(e,h,1,P,0,this);continue}else if(M in fS){WP(this,C,M,g,b?La(g,b+h):h);continue}else if(M==="smoothOrigin"){Os(this,C,"smooth",C.smooth,h);continue}else if(M==="force3D"){C[M]=h;continue}else if(M==="transform"){XP(this,h,e);continue}}else M in u||(M=$a(M)||M);if(w||(m||m===0)&&(g||g===0)&&!CP.test(h)&&M in u)x=(d+"").substr((g+"").length),m||(m=0),v=zn(h)||(M in bi.units?bi.units[M]:x),x!==v&&(g=Gs(e,M,d,v)),this._pt=new hi(this._pt,w?C:u,M,g,(b?La(g,b+m):m)-g,!w&&(v==="px"||M==="zIndex")&&t.autoRound!==!1?bP:lm),this._pt.u=v||0,x!==v&&v!=="%"&&(this._pt.b=d,this._pt.r=RP);else if(M in u)zP.call(this,e,M,d,b?b+h:h);else if(M in e)this.add(e,M,d||e[M],b?b+h:h,s,a);else if(M!=="parseTransform"){Hm(M,h);continue}w||(M in u?D.push(M,0,u[M]):typeof e[M]=="function"?D.push(M,2,e[M]()):D.push(M,1,d||e[M])),l.push(M)}}I&&nS(this)},render:function(e,t){if(t.tween._time||!Qm())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:qr,aliases:_r,getSetter:function(e,t,n){var s=_r[t];return s&&s.indexOf(",")<0&&(t=s),t in es&&t!==pi&&(e._gsap.x||qr(e,"x"))?n&&ny===n?t==="scale"?NP:IP:(ny=n||{})&&(t==="scale"?LP:FP):e.style&&!zm(e.style[t])?PP:~t.indexOf("-")?DP:$m(e,t)},core:{_removeProperty:Io,_getMatrix:eg}};gi.utils.checkPrefix=$a;gi.core.getStyleSaver=aS;(function(r,e,t,n){var s=di(r+","+e+","+t,function(a){es[a]=1});di(e,function(a){bi.units[a]="deg",fS[a]=1}),_r[s[13]]=r+","+e,di(n,function(a){var l=a.split(":");_r[l[1]]=s[l[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");di("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){bi.units[r]="px"});gi.registerPlugin(pS);var bt=gi.registerPlugin(pS)||gi;bt.core.Tween;const qP=`
varying float vDistance;

uniform float time;
uniform float offsetSize;
uniform float size;
uniform float offsetGain;
uniform float amplitude;
uniform float frequency;
uniform float maxDistance;
uniform float lowFreq;
uniform float midFreq;
uniform float highFreq;
uniform float bassPower; 
uniform float midPower;
uniform float curlIntensity;


vec3 mod289(vec3 x){
  return x-floor(x*(1./289.))*289.;
}

vec2 mod289(vec2 x){
  return x-floor(x*(1./289.))*289.;
}

vec3 permute(vec3 x){
  return mod289(((x*34.)+1.)*x);
}

//      Author : Ian McEwan, Ashima Arts.
//      https://github.com/ashima/webgl-noise
//      https://github.com/stegu/webgl-noise
//
float noise(vec2 v) {
  
  const vec4 C=vec4(.211324865405187,.366025403784439,-.577350269189626,.024390243902439);// 1.0 / 41.0
  // First corner
  vec2 i=floor(v+dot(v,C.yy));
  vec2 x0=v-i+dot(i,C.xx);
  
  // Other corners
  vec2 i1;
  //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0
  //i1.y = 1.0 - i1.x;
  i1=(x0.x>x0.y)?vec2(1.,0.):vec2(0.,1.);
  // x0 = x0 - 0.0 + 0.0 * C.xx ;
  // x1 = x0 - i1 + 1.0 * C.xx ;
  // x2 = x0 - 1.0 + 2.0 * C.xx ;
  vec4 x12=x0.xyxy+C.xxzz;
  x12.xy-=i1;
  
  // Permutations
  i=mod289(i);// Avoid truncation effects in permutation
  vec3 p=permute(permute(i.y+vec3(0.,i1.y,1.))
  +i.x+vec3(0.,i1.x,1.));
  
  vec3 m=max(.5-vec3(dot(x0,x0),dot(x12.xy,x12.xy),dot(x12.zw,x12.zw)),0.);
  m=m*m;
  m=m*m;
  
  // Gradients: 41 points uniformly over a line, mapped onto a diamond.
  // The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)
  
  vec3 x=2.*fract(p*C.www)-1.;
  vec3 h=abs(x)-.5;
  vec3 ox=floor(x+.5);
  vec3 a0=x-ox;
  
  // Normalise gradients implicitly by scaling m
  // Approximation of: m *= inversesqrt( a0*a0 + h*h );
  m*=1.79284291400159-.85373472095314*(a0*a0+h*h);
  
  // Compute final noise value at P
  vec3 g;
  g.x=a0.x*x0.x+h.x*x0.y;
  g.yz=a0.yz*x12.xz+h.yz*x12.yw;
  return 130.*dot(m,g);
}

vec3 curl(float x,float y,float z) {
  
  float eps=1.,eps2=2.*eps;
  float n1,n2,a,b;
  
  x+=time*.05;
  y+=time*.05;
  z+=time*.05;
  
  vec3 curl=vec3(0.);
  
  n1=noise(vec2(x,y+eps));
  n2=noise(vec2(x,y-eps));
  a=(n1-n2)/eps2;
  
  n1=noise(vec2(x,z+eps));
  n2=noise(vec2(x,z-eps));
  b=(n1-n2)/eps2;
  
  curl.x=a-b;
  
  n1=noise(vec2(y,z+eps));
  n2=noise(vec2(y,z-eps));
  a=(n1-n2)/eps2;
  
  n1=noise(vec2(x+eps,z));
  n2=noise(vec2(x+eps,z));
  b=(n1-n2)/eps2;
  
  curl.y=a-b;
  
  n1=noise(vec2(x+eps,y));
  n2=noise(vec2(x-eps,y));
  a=(n1-n2)/eps2;
  
  n1=noise(vec2(y+eps,z));
  n2=noise(vec2(y-eps,z));
  b=(n1-n2)/eps2;
  
  curl.z=a-b;
  
  return curl;
}

void main() {
  vec3 newpos = position;
  
  // Calcul séparé du bruit curl
  vec3 curlOffset = curl(newpos.x * frequency, newpos.y * frequency, newpos.z * frequency) * amplitude;
  vec3 baseOffset = normal * (0.1 + lowFreq * 0.3);
vec3 target = position + baseOffset + curlOffset * curlIntensity;
    
  float d = length(newpos - target) / maxDistance;

  newpos = mix(position, target, pow(d, 4.));
  
  // Déplacements audio-réactifs
  float audioInfluence = smoothstep(0.3, 0.9, lowFreq);
  vec3 audioOffset = vec3(
  sin(time * 12.0) * pow(lowFreq, bassPower) * 0.03,
  cos(time * 10.0) * pow(midFreq, midPower) * 0.02,
  sin(time * 8.0 * exp(-lowFreq * 2.0)) * lowFreq * 0.05
  );

  // Combinaison harmonieuse
  newpos += mix(vec3(0.0), audioOffset, audioInfluence);
  newpos.z += sin(time) * (.1 * offsetGain);

  vec4 mvPosition = modelViewMatrix * vec4(newpos, 1.);
  gl_PointSize = size + (pow(d,3.) * offsetSize) * (1./-mvPosition.z);
  gl_Position = projectionMatrix * mvPosition;

  vDistance = smoothstep(0.2, 0.8, d * 0.6 + 0.2);
}`,YP=`varying float vDistance;

uniform vec3 startColor;
uniform vec3 endColor;
uniform float colorBalance;
uniform float gammaCorrection;

float circle(in vec2 _st,in float _radius){
  vec2 dist=_st-vec2(.5);
  return 1.-smoothstep(_radius-(_radius*.01),
  _radius+(_radius*.01),
  dot(dist,dist)*4.);
}

void main(){

  float t = mix(vDistance, 1.0 - vDistance, colorBalance);

  vec3 start = pow(startColor, vec3(gammaCorrection));
  vec3 end = pow(endColor, vec3(gammaCorrection));

  

  


  
  vec2 uv = vec2(gl_PointCoord.x,1.-gl_PointCoord.y);
  vec3 circ = vec3(circle(uv,1.));

  vec3 color = mix(start, end, smoothstep(0.1, 0.9, t * 1.2 - 0.1));
  float saturation = mix(1.2, 1.5, pow(vDistance, 2.0));

  color = mix(vec3(dot(color, vec3(0.299, 0.587, 0.114))), color, saturation);

  float alpha = circ.r * mix(0.8, 1.2, abs(t - 0.5));

  gl_FragColor = vec4(color, alpha);
}`;class jP extends mn{constructor({audioManager:e,bpmManager:t,camera:n,gui:s=null}={}){if(super(),!e||!t)throw new Error("Missing required managers");this.camera=n,this.name="ReactiveParticles",this.audioManager=e,this.bpmManager=t,this.gui=s,this.time=0,this.properties={startColor:16711935,endColor:65535,autoMix:!0,autoRotate:!0,amplitudeLimits:{min:.1,max:3},frequencyLimits:{min:.1,max:5},bassPowerLimits:{min:.5,max:4},midPowerLimits:{min:.5,max:3}},this.basePosition=new se(3.5,23.5,5),this.position.copy(this.basePosition),this.scale.set(2,2,2),this.initialized=!1,this.pointsMesh=null,this.holderObjects=new mn,this.add(this.holderObjects)}init(){this.initialized||(this.material=new ir({side:pr,vertexShader:qP,fragmentShader:YP,transparent:!0,uniforms:{time:{value:0},offsetSize:{value:Te.randFloat(30,60)},size:{value:1.1},frequency:{value:2},amplitude:{value:1},offsetGain:{value:0},maxDistance:{value:1.4},lowFreq:{value:0},midFreq:{value:0},highFreq:{value:0},bassPower:{value:2},midPower:{value:1.5},curlIntensity:{value:1},colorBalance:{value:.5},gammaCorrection:{value:1},startColor:{value:new ft(this.properties.startColor)},endColor:{value:new ft(this.properties.endColor)}},depthTest:!1}),this.resetMesh(),this.bpmManager.addEventListener("beat",()=>this.onBPMBeat()),this.gui&&this.addGUI(),this.initialized=!0)}createBoxMesh(){let e=Math.floor(Te.randInt(5,20)),t=Math.floor(Te.randInt(1,40)),n=Math.floor(Te.randInt(5,80));this.geometry=new nl(1,1,1,e,t,n),this.material.uniforms.offsetSize.value=Math.floor(Te.randInt(30,60)),this.material.needsUpdate=!0,this.pointsMesh=new mn,this.pointsMesh.rotateX(Math.PI/2),this.holderObjects.add(this.pointsMesh);const s=new Vr(this.geometry,this.material);this.pointsMesh.add(s),bt.to(this.pointsMesh.rotation,{duration:3,x:Math.random()*Math.PI,z:Math.random()*Math.PI*2,ease:"none"}),bt.to(this.position,{duration:.6,z:this.basePosition.z+Te.randFloat(-.2,.2),ease:"elastic.out(0.8)"})}createCylinderMesh(){let e=Math.floor(Te.randInt(1,3)),t=Math.floor(Te.randInt(1,5));this.geometry=new Pf(1,1,4,64*e,64*t,!0),this.material.uniforms.offsetSize.value=Math.floor(Te.randInt(30,60)),this.material.uniforms.size.value=2,this.material.needsUpdate=!0,this.material.uniforms.needsUpdate=!0,this.pointsMesh=new Vr(this.geometry,this.material),this.pointsMesh.rotation.set(Te.randFloat(0,Math.PI*2),Te.randFloat(0,Math.PI*2),Te.randFloat(0,Math.PI*2)),this.holderObjects.add(this.pointsMesh);let n=this.basePosition.z+Te.randFloat(-.2,.2);Math.random()<.2&&(n=this.basePosition.z+Te.randFloat(-.5,.5)),bt.to(this.pointsMesh.rotation,{duration:Te.randFloat(2,3),x:Te.randFloat(0,Math.PI*2),y:Te.randFloat(0,Math.PI*2),z:Te.randFloat(0,Math.PI*2),ease:"power2.inOut"}),bt.to(this.position,{duration:.6,z:n,ease:"elastic.out(0.8)"})}createSphereMesh(){const e=Te.randFloat(.5,2),t=Te.randInt(8,64),n=Te.randInt(8,64);this.geometry=new Im(e,t,n),this.material.uniforms.offsetSize.value=Te.randInt(30,60),this.material.uniforms.size.value=1.1,this.material.needsUpdate=!0,this.pointsMesh=new Vr(this.geometry,this.material),this.pointsMesh.rotation.set(Te.randFloat(0,Math.PI),Te.randFloat(0,Math.PI),Te.randFloat(0,Math.PI)),this.holderObjects.add(this.pointsMesh),bt.to(this.pointsMesh.rotation,{duration:Te.randFloat(5,10),x:Math.random()*Math.PI*2,y:Math.random()*Math.PI*2,z:Math.random()*Math.PI*2,ease:"power2.inOut"}),bt.to(this.position,{duration:.6,z:this.basePosition.z+Te.randFloat(-.2,.2),ease:"elastic.out(0.8)"})}createTorusMesh(){const e=Te.randFloat(.3,1.5),t=Te.randFloat(.1,.5),n=Te.randInt(8,64),s=Te.randInt(8,64);this.geometry=new Nm(e,t,n,s),this.material.uniforms.offsetSize.value=Te.randInt(30,60),this.material.uniforms.size.value=1.1,this.material.needsUpdate=!0,this.pointsMesh=new Vr(this.geometry,this.material),this.pointsMesh.rotation.set(Te.randFloat(0,Math.PI),Te.randFloat(0,Math.PI),Te.randFloat(0,Math.PI)),this.holderObjects.add(this.pointsMesh),bt.to(this.pointsMesh.rotation,{duration:Te.randFloat(5,10),x:Math.random()*Math.PI*2,y:Math.random()*Math.PI*2,z:Math.random()*Math.PI*2,ease:"power2.inOut"}),bt.to(this.position,{duration:.6,z:this.basePosition.z+Te.randFloat(-.2,.2),ease:"elastic.out(0.8)"})}createIcosahedronMesh(){const e=Te.randFloat(.5,2),t=Te.randInt(0,3);this.geometry=new bm(e,t),this.material.uniforms.offsetSize.value=Te.randInt(30,60),this.material.uniforms.size.value=1.1,this.material.needsUpdate=!0,this.pointsMesh=new Vr(this.geometry,this.material),this.pointsMesh.rotation.set(Te.randFloat(0,Math.PI),Te.randFloat(0,Math.PI),Te.randFloat(0,Math.PI)),this.holderObjects.add(this.pointsMesh),bt.to(this.pointsMesh.rotation,{duration:Te.randFloat(5,10),x:Math.random()*Math.PI*2,y:Math.random()*Math.PI*2,z:Math.random()*Math.PI*2,ease:"power2.inOut"}),bt.to(this.position,{duration:.6,z:this.basePosition.z+Te.randFloat(-.2,.2),ease:"elastic.out(0.8)"})}createOctahedronMesh(){const e=Te.randFloat(.5,2),t=Te.randInt(0,2);this.geometry=new Pm(e,t),this.material.uniforms.offsetSize.value=Te.randInt(30,60),this.material.uniforms.size.value=1.1,this.material.needsUpdate=!0,this.pointsMesh=new Vr(this.geometry,this.material),this.pointsMesh.rotation.set(Te.randFloat(0,Math.PI),Te.randFloat(0,Math.PI),Te.randFloat(0,Math.PI)),this.holderObjects.add(this.pointsMesh),bt.to(this.pointsMesh.rotation,{duration:Te.randFloat(5,10),x:Math.random()*Math.PI*2,y:Math.random()*Math.PI*2,z:Math.random()*Math.PI*2,ease:"power2.inOut"}),bt.to(this.position,{duration:.6,z:this.basePosition.z+Te.randFloat(-.2,.2),ease:"elastic.out(0.8)"})}createConeMesh(){const e=Te.randFloat(.1,1),t=Te.randFloat(1,3),n=Te.randInt(8,32),s=Te.randInt(1,5);this.geometry=new Rm(e,t,n,s),this.material.uniforms.offsetSize.value=Te.randInt(30,60),this.material.uniforms.size.value=2,this.material.needsUpdate=!0,this.pointsMesh=new Vr(this.geometry,this.material),this.pointsMesh.rotation.set(Te.randFloat(0,Math.PI),Te.randFloat(0,Math.PI),Te.randFloat(0,Math.PI)),this.holderObjects.add(this.pointsMesh),bt.to(this.pointsMesh.rotation,{duration:Te.randFloat(2,4),x:Math.random()*Math.PI*2,y:Math.random()*Math.PI*2,ease:"power2.inOut"}),bt.to(this.position,{duration:.6,z:this.basePosition.z+Te.randFloat(-.5,.5),ease:"elastic.out(0.8)"})}createRingMesh(){const e=Te.randFloat(.1,.5),t=Te.randFloat(.6,2),n=Te.randInt(8,64);this.geometry=new Dm(e,t,n),this.material.uniforms.offsetSize.value=Te.randInt(30,60),this.material.uniforms.size.value=1.5,this.material.needsUpdate=!0,this.pointsMesh=new Vr(this.geometry,this.material),this.pointsMesh.rotation.set(Te.randFloat(0,Math.PI),Te.randFloat(0,Math.PI),Te.randFloat(0,Math.PI)),this.holderObjects.add(this.pointsMesh),bt.to(this.pointsMesh.rotation,{duration:Te.randFloat(3,6),x:Math.random()*Math.PI*2,z:Math.random()*Math.PI*2,ease:"power2.inOut"}),bt.to(this.position,{duration:.6,y:this.basePosition.y+Te.randFloat(-.3,.3),ease:"elastic.out(0.8)"})}createGridMesh(){const e=Te.randFloat(1,3),t=Te.randFloat(1,3),n=Te.randInt(10,50),s=Te.randInt(10,50);this.geometry=new Qr(e,t,n,s),this.material.uniforms.offsetSize.value=Te.randInt(30,60),this.material.uniforms.size.value=1.1,this.material.needsUpdate=!0,this.pointsMesh=new Vr(this.geometry,this.material),this.pointsMesh.rotation.set(Math.PI/2,Te.randFloat(0,Math.PI),Te.randFloat(0,Math.PI)),this.holderObjects.add(this.pointsMesh),bt.to(this.pointsMesh.rotation,{duration:Te.randFloat(5,10),y:Math.random()*Math.PI*2,ease:"power2.inOut"}),bt.to(this.position,{duration:.6,x:this.basePosition.x+Te.randFloat(-.5,.5),ease:"elastic.out(0.8)"})}connectAudio(e){if(!(e!=null&&e.update)){console.error("AudioManager invalide:",e);return}this.audioManager=e}setupEventListeners(){this.bpmManager.addEventListener("beat",()=>this.onBPMBeat())}onBPMBeat(){if(!this.initialized||!this.audioManager.isPlaying)return;const e=this.bpmManager.getBPMDuration()/1e3;Math.random()<.3&&this.properties.autoRotate&&bt.to(this.holderObjects.rotation,{duration:Math.random()<.8?15:e,z:Math.random()*Math.PI,ease:"elastic.out(0.2)"}),Math.random()<.2&&(this.resetMesh(),this.changeCooldown=null),bt.to(this.material.uniforms.size,{value:1.5,duration:.01,yoyo:!0,repeat:1,ease:"power2.out"}),bt.to(this.camera.position,{y:30+Math.random()*.3,duration:.3,yoyo:!0,ease:"elastic.out(1, 0.3)"});const{low:t}=this.audioManager.frequencyData,n=Te.clamp(t*2.5,.5,2);bt.to(this.material.uniforms.size,{value:1*n,duration:.1*(1.5-n/2),yoyo:!0,repeat:1,ease:"power4.out"}),bt.to(this.material.uniforms.amplitude,{value:1.5*n,duration:.15,ease:"back.out(2)"}),this.changeCooldown||(this.changeCooldown=setTimeout(()=>{this.changeCooldown=null},2e3))}resetMesh(){if(!this.properties.autoMix)return;this.destroyMesh();const e=Math.random();e<.25?this.createBoxMesh():e<.5?this.createCylinderMesh():e<.6?this.createSphereMesh():e<.7?this.createTorusMesh():e<.75?this.createIcosahedronMesh():e<.8?this.createOctahedronMesh():e<.85?this.createConeMesh():e<.9?this.createRingMesh():this.createGridMesh();const[t,n]=$P.getRandomPair();this.material.uniforms.startColor.value=t,this.material.uniforms.endColor.value=n,bt.to(this.material.uniforms.frequency,{duration:this.bpmManager.getBPMDuration()/1e3*2||2,value:Te.randFloat(.5,3),ease:"expo.easeInOut"})}destroyMesh(){var e,t;!this.initialized||!this.pointsMesh||(this.holderObjects.remove(this.pointsMesh),(e=this.pointsMesh.geometry)==null||e.dispose(),(t=this.pointsMesh.material)==null||t.dispose(),this.pointsMesh=null)}update(){var f;if(!this.initialized)return;const{low:e,mid:t}=((f=this.audioManager)==null?void 0:f.frequencyData)||{low:0,mid:0},n=Te.smoothstep(e,.7,1)*2.5,s=Te.smoothstep(t,.6,.9)*1.8;this.material.uniforms.lowFreq.value=Math.pow(e,3)*n,this.material.uniforms.midFreq.value=Math.pow(t,2)*s;const a=1-Te.smoothstep(e,.6,.9);this.material.uniforms.curlIntensity.value=.8+a*.4,this.material.uniforms.amplitude.value=Te.clamp(.9-n*.3,.5,1.2);const l=this.bpmManager.getBPMDuration()/1e3;this.time+=(.1+n*.05)*l,this.material.uniforms.time.value=this.time;const u=Te.clamp((e+t)*.8,0,1);this.material.uniforms.colorBalance.value=Te.lerp(this.material.uniforms.colorBalance.value,u>.7?.3:.5+t*.2,.1)}setResolution(e,t){var n;!this.initialized||!((n=this.material)!=null&&n.uniforms)||this.material.uniforms.resolution.value.set(e,t)}dispose(){this.initialized&&(this.destroyMesh(),this.material&&(this.material.dispose(),this.material=null),this.holderObjects&&(this.remove(this.holderObjects),this.holderObjects=null),this.initialized=!1,this.audioAnalyser=null)}}class $P{static getComplementary(){const e={h:Math.random(),s:.8,l:.5};return[new ft().setHSL(e.h,e.s,e.l),new ft().setHSL((e.h+.5)%1,e.s,e.l)]}static getAnalogous(){const e=Math.random();return[new ft().setHSL((e-.1+1)%1,.8,.5),new ft().setHSL((e+.1)%1,.8,.5)]}static getRandomPair(){const e=[this.getComplementary,this.getAnalogous];return e[Math.floor(Math.random()*e.length)]()}}const ZP=r=>e=>{const t=r(e);return e.add(t),t},KP=r=>(e,t)=>(r.set(e,t),t),fy=Number.MAX_SAFE_INTEGER===void 0?9007199254740991:Number.MAX_SAFE_INTEGER,mS=536870912,dy=mS*2,QP=(r,e)=>t=>{const n=e.get(t);let s=n===void 0?t.size:n<dy?n+1:0;if(!t.has(s))return r(t,s);if(t.size<mS){for(;t.has(s);)s=Math.floor(Math.random()*dy);return r(t,s)}if(t.size>fy)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;t.has(s);)s=Math.floor(Math.random()*fy);return r(t,s)},gS=new WeakMap,JP=KP(gS),e2=QP(JP,gS),hy=ZP(e2),py=(r,e,t)=>({endTime:e,insertTime:t,type:"exponentialRampToValue",value:r}),my=(r,e,t)=>({endTime:e,insertTime:t,type:"linearRampToValue",value:r}),dm=(r,e)=>({startTime:e,type:"setValue",value:r}),_S=(r,e,t)=>({duration:t,startTime:e,type:"setValueCurve",values:r}),vS=(r,e,{startTime:t,target:n,timeConstant:s})=>n+(e-n)*Math.exp((t-r)/s),Pa=r=>r.type==="exponentialRampToValue",Mf=r=>r.type==="linearRampToValue",Ns=r=>Pa(r)||Mf(r),tg=r=>r.type==="setValue",Xr=r=>r.type==="setValueCurve",Ef=(r,e,t,n)=>{const s=r[e];return s===void 0?n:Ns(s)||tg(s)?s.value:Xr(s)?s.values[s.values.length-1]:vS(t,Ef(r,e-1,s.startTime,n),s)},gy=(r,e,t,n,s)=>t===void 0?[n.insertTime,s]:Ns(t)?[t.endTime,t.value]:tg(t)?[t.startTime,t.value]:Xr(t)?[t.startTime+t.duration,t.values[t.values.length-1]]:[t.startTime,Ef(r,e-1,t.startTime,s)],hm=r=>r.type==="cancelAndHold",pm=r=>r.type==="cancelScheduledValues",Is=r=>hm(r)||pm(r)?r.cancelTime:Pa(r)||Mf(r)?r.endTime:r.startTime,_y=(r,e,t,{endTime:n,value:s})=>t===s?s:0<t&&0<s||t<0&&s<0?t*(s/t)**((r-e)/(n-e)):0,vy=(r,e,t,{endTime:n,value:s})=>t+(r-e)/(n-e)*(s-t),t2=(r,e)=>{const t=Math.floor(e),n=Math.ceil(e);return t===n?r[t]:(1-(e-t))*r[t]+(1-(n-e))*r[n]},n2=(r,{duration:e,startTime:t,values:n})=>{const s=(r-t)/e*(n.length-1);return t2(n,s)},ef=r=>r.type==="setTarget";class i2{constructor(e){this._automationEvents=[],this._currenTime=0,this._defaultValue=e}[Symbol.iterator](){return this._automationEvents[Symbol.iterator]()}add(e){const t=Is(e);if(hm(e)||pm(e)){const n=this._automationEvents.findIndex(a=>pm(e)&&Xr(a)?a.startTime+a.duration>=t:Is(a)>=t),s=this._automationEvents[n];if(n!==-1&&(this._automationEvents=this._automationEvents.slice(0,n)),hm(e)){const a=this._automationEvents[this._automationEvents.length-1];if(s!==void 0&&Ns(s)){if(a!==void 0&&ef(a))throw new Error("The internal list is malformed.");const l=a===void 0?s.insertTime:Xr(a)?a.startTime+a.duration:Is(a),u=a===void 0?this._defaultValue:Xr(a)?a.values[a.values.length-1]:a.value,f=Pa(s)?_y(t,l,u,s):vy(t,l,u,s),d=Pa(s)?py(f,t,this._currenTime):my(f,t,this._currenTime);this._automationEvents.push(d)}if(a!==void 0&&ef(a)&&this._automationEvents.push(dm(this.getValue(t),t)),a!==void 0&&Xr(a)&&a.startTime+a.duration>t){const l=t-a.startTime,u=(a.values.length-1)/a.duration,f=Math.max(2,1+Math.ceil(l*u)),d=l/(f-1)*u,h=a.values.slice(0,f);if(d<1)for(let m=1;m<f;m+=1){const g=d*m%1;h[m]=a.values[m-1]*(1-g)+a.values[m]*g}this._automationEvents[this._automationEvents.length-1]=_S(h,a.startTime,l)}}}else{const n=this._automationEvents.findIndex(l=>Is(l)>t),s=n===-1?this._automationEvents[this._automationEvents.length-1]:this._automationEvents[n-1];if(s!==void 0&&Xr(s)&&Is(s)+s.duration>t)return!1;const a=Pa(e)?py(e.value,e.endTime,this._currenTime):Mf(e)?my(e.value,t,this._currenTime):e;if(n===-1)this._automationEvents.push(a);else{if(Xr(e)&&t+e.duration>Is(this._automationEvents[n]))return!1;this._automationEvents.splice(n,0,a)}}return!0}flush(e){const t=this._automationEvents.findIndex(n=>Is(n)>e);if(t>1){const n=this._automationEvents.slice(t-1),s=n[0];ef(s)&&n.unshift(dm(Ef(this._automationEvents,t-2,s.startTime,this._defaultValue),s.startTime)),this._automationEvents=n}}getValue(e){if(this._automationEvents.length===0)return this._defaultValue;const t=this._automationEvents.findIndex(l=>Is(l)>e),n=this._automationEvents[t],s=(t===-1?this._automationEvents.length:t)-1,a=this._automationEvents[s];if(a!==void 0&&ef(a)&&(n===void 0||!Ns(n)||n.insertTime>e))return vS(e,Ef(this._automationEvents,s-1,a.startTime,this._defaultValue),a);if(a!==void 0&&tg(a)&&(n===void 0||!Ns(n)))return a.value;if(a!==void 0&&Xr(a)&&(n===void 0||!Ns(n)||a.startTime+a.duration>e))return e<a.startTime+a.duration?n2(e,a):a.values[a.values.length-1];if(a!==void 0&&Ns(a)&&(n===void 0||!Ns(n)))return a.value;if(n!==void 0&&Pa(n)){const[l,u]=gy(this._automationEvents,s,a,n,this._defaultValue);return _y(e,l,u,n)}if(n!==void 0&&Mf(n)){const[l,u]=gy(this._automationEvents,s,a,n,this._defaultValue);return vy(e,l,u,n)}return this._defaultValue}}const r2=r=>({cancelTime:r,type:"cancelAndHold"}),s2=r=>({cancelTime:r,type:"cancelScheduledValues"}),o2=(r,e)=>({endTime:e,type:"exponentialRampToValue",value:r}),a2=(r,e)=>({endTime:e,type:"linearRampToValue",value:r}),l2=(r,e,t)=>({startTime:e,target:r,timeConstant:t,type:"setTarget"}),u2=()=>new DOMException("","AbortError"),c2=r=>(e,t,[n,s,a],l)=>{r(e[s],[t,n,a],u=>u[0]===t&&u[1]===n,l)},f2=r=>(e,t,n)=>{const s=[];for(let a=0;a<n.numberOfInputs;a+=1)s.push(new Set);r.set(e,{activeInputs:s,outputs:new Set,passiveInputs:new WeakMap,renderer:t})},d2=r=>(e,t)=>{r.set(e,{activeInputs:new Set,passiveInputs:new WeakMap,renderer:t})},Za=new WeakSet,yS=new WeakMap,xS=new WeakMap,SS=new WeakMap,MS=new WeakMap,ES=new WeakMap,TS=new WeakMap,mm=new WeakMap,yy=new WeakMap,wS={construct(){return wS}},h2=r=>{try{const e=new Proxy(r,wS);new e}catch{return!1}return!0},xy=/^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/,Sy=(r,e)=>{const t=[];let n=r.replace(/^[\s]+/,""),s=n.match(xy);for(;s!==null;){const a=s[1].slice(1,-1),l=s[0].replace(/([\s]+)?;?$/,"").replace(a,new URL(a,e).toString());t.push(l),n=n.slice(s[0].length).replace(/^[\s]+/,""),s=n.match(xy)}return[t.join(";"),n]},My=r=>{if(r!==void 0&&!Array.isArray(r))throw new TypeError("The parameterDescriptors property of given value for processorCtor is not an array.")},Ey=r=>{if(!h2(r))throw new TypeError("The given value for processorCtor should be a constructor.");if(r.prototype===null||typeof r.prototype!="object")throw new TypeError("The given value for processorCtor should have a prototype.")},p2=(r,e,t,n,s,a,l,u,f,d,h,m,g)=>{let _=0;return(S,M,x={credentials:"omit"})=>{const v=h.get(S);if(v!==void 0&&v.has(M))return Promise.resolve();const b=d.get(S);if(b!==void 0){const C=b.get(M);if(C!==void 0)return C}const w=a(S),T=w.audioWorklet===void 0?s(M).then(([C,P])=>{const[I,D]=Sy(C,P),A=`${I};((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{${D}
})})(window,'_AWGS')`;return t(A)}).then(()=>{const C=g._AWGS.pop();if(C===void 0)throw new SyntaxError;n(w.currentTime,w.sampleRate,()=>C(class{},void 0,(P,I)=>{if(P.trim()==="")throw e();const D=yy.get(w);if(D!==void 0){if(D.has(P))throw e();Ey(I),My(I.parameterDescriptors),D.set(P,I)}else Ey(I),My(I.parameterDescriptors),yy.set(w,new Map([[P,I]]))},w.sampleRate,void 0,void 0))}):Promise.all([s(M),Promise.resolve(r(m,m))]).then(([[C,P],I])=>{const D=_+1;_=D;const[A,R]=Sy(C,P),G=`${A};((AudioWorkletProcessor,registerProcessor)=>{${R}
})(${I?"AudioWorkletProcessor":"class extends AudioWorkletProcessor {__b=new WeakSet();constructor(){super();(p=>p.postMessage=(q=>(m,t)=>q.call(p,m,t?t.filter(u=>!this.__b.has(u)):t))(p.postMessage))(this.port)}}"},(n,p)=>registerProcessor(n,class extends p{${I?"":"__c = (a) => a.forEach(e=>this.__b.add(e.buffer));"}process(i,o,p){${I?"":"i.forEach(this.__c);o.forEach(this.__c);this.__c(Object.values(p));"}return super.process(i.map(j=>j.some(k=>k.length===0)?[]:j),o,p)}}));registerProcessor('__sac${D}',class extends AudioWorkletProcessor{process(){return !1}})`,Z=new Blob([G],{type:"application/javascript; charset=utf-8"}),q=URL.createObjectURL(Z);return w.audioWorklet.addModule(q,x).then(()=>{if(u(w))return w;const $=l(w);return $.audioWorklet.addModule(q,x).then(()=>$)}).then($=>{if(f===null)throw new SyntaxError;try{new f($,`__sac${D}`)}catch{throw new SyntaxError}}).finally(()=>URL.revokeObjectURL(q))});return b===void 0?d.set(S,new Map([[M,T]])):b.set(M,T),T.then(()=>{const C=h.get(S);C===void 0?h.set(S,new Set([M])):C.add(M)}).finally(()=>{const C=d.get(S);C!==void 0&&C.delete(M)}),T}},Xs=(r,e)=>{const t=r.get(e);if(t===void 0)throw new Error("A value with the given key could not be found.");return t},Of=(r,e)=>{const t=Array.from(r).filter(e);if(t.length>1)throw Error("More than one element was found.");if(t.length===0)throw Error("No element was found.");const[n]=t;return r.delete(n),n},CS=(r,e,t,n)=>{const s=Xs(r,e),a=Of(s,l=>l[0]===t&&l[1]===n);return s.size===0&&r.delete(e),a},pu=r=>Xs(TS,r),Ka=r=>{if(Za.has(r))throw new Error("The AudioNode is already stored.");Za.add(r),pu(r).forEach(e=>e(!0))},AS=r=>"port"in r,mu=r=>{if(!Za.has(r))throw new Error("The AudioNode is not stored.");Za.delete(r),pu(r).forEach(e=>e(!1))},gm=(r,e)=>{!AS(r)&&e.every(t=>t.size===0)&&mu(r)},m2=(r,e,t,n,s,a,l,u,f,d,h,m,g)=>{const _=new WeakMap;return(S,M,x,v,b)=>{const{activeInputs:w,passiveInputs:T}=a(M),{outputs:C}=a(S),P=u(S),I=D=>{const A=f(M),R=f(S);if(D){const F=CS(T,S,x,v);r(w,S,F,!1),!b&&!m(S)&&t(R,A,x,v),g(M)&&Ka(M)}else{const F=n(w,S,x,v);e(T,v,F,!1),!b&&!m(S)&&s(R,A,x,v);const O=l(M);if(O===0)h(M)&&gm(M,w);else{const B=_.get(M);B!==void 0&&clearTimeout(B),_.set(M,setTimeout(()=>{h(M)&&gm(M,w)},O*1e3))}}};return d(C,[M,x,v],D=>D[0]===M&&D[1]===x&&D[2]===v,!0)?(P.add(I),h(S)?r(w,S,[x,v,I],!0):e(T,v,[S,x,I],!0),!0):!1}},g2=r=>(e,t,[n,s,a],l)=>{const u=e.get(n);u===void 0?e.set(n,new Set([[s,t,a]])):r(u,[s,t,a],f=>f[0]===s&&f[1]===t,l)},_2=r=>(e,t)=>{const n=r(e,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});t.connect(n).connect(e.destination);const s=()=>{t.removeEventListener("ended",s),t.disconnect(n),n.disconnect()};t.addEventListener("ended",s)},v2={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",fftSize:2048,maxDecibels:-30,minDecibels:-100,smoothingTimeConstant:.8},y2=(r,e,t,n,s,a)=>class extends r{constructor(u,f){const d=s(u),h={...v2,...f},m=n(d,h),g=a(d)?e():null;super(u,!1,m,g),this._nativeAnalyserNode=m}get fftSize(){return this._nativeAnalyserNode.fftSize}set fftSize(u){this._nativeAnalyserNode.fftSize=u}get frequencyBinCount(){return this._nativeAnalyserNode.frequencyBinCount}get maxDecibels(){return this._nativeAnalyserNode.maxDecibels}set maxDecibels(u){const f=this._nativeAnalyserNode.maxDecibels;if(this._nativeAnalyserNode.maxDecibels=u,!(u>this._nativeAnalyserNode.minDecibels))throw this._nativeAnalyserNode.maxDecibels=f,t()}get minDecibels(){return this._nativeAnalyserNode.minDecibels}set minDecibels(u){const f=this._nativeAnalyserNode.minDecibels;if(this._nativeAnalyserNode.minDecibels=u,!(this._nativeAnalyserNode.maxDecibels>u))throw this._nativeAnalyserNode.minDecibels=f,t()}get smoothingTimeConstant(){return this._nativeAnalyserNode.smoothingTimeConstant}set smoothingTimeConstant(u){this._nativeAnalyserNode.smoothingTimeConstant=u}getByteFrequencyData(u){this._nativeAnalyserNode.getByteFrequencyData(u)}getByteTimeDomainData(u){this._nativeAnalyserNode.getByteTimeDomainData(u)}getFloatFrequencyData(u){this._nativeAnalyserNode.getFloatFrequencyData(u)}getFloatTimeDomainData(u){this._nativeAnalyserNode.getFloatTimeDomainData(u)}},ei=(r,e)=>r.context===e,x2=(r,e,t)=>()=>{const n=new WeakMap,s=async(a,l)=>{let u=e(a);if(!ei(u,l)){const d={channelCount:u.channelCount,channelCountMode:u.channelCountMode,channelInterpretation:u.channelInterpretation,fftSize:u.fftSize,maxDecibels:u.maxDecibels,minDecibels:u.minDecibels,smoothingTimeConstant:u.smoothingTimeConstant};u=r(l,d)}return n.set(l,u),await t(a,l,u),u};return{render(a,l){const u=n.get(l);return u!==void 0?Promise.resolve(u):s(a,l)}}},Tf=r=>{try{r.copyToChannel(new Float32Array(1),0,-1)}catch{return!1}return!0},Uo=()=>new DOMException("","IndexSizeError"),ng=r=>{r.getChannelData=(e=>t=>{try{return e.call(r,t)}catch(n){throw n.code===12?Uo():n}})(r.getChannelData)},S2={numberOfChannels:1},M2=(r,e,t,n,s,a,l,u)=>{let f=null;return class RS{constructor(h){if(s===null)throw new Error("Missing the native OfflineAudioContext constructor.");const{length:m,numberOfChannels:g,sampleRate:_}={...S2,...h};f===null&&(f=new s(1,1,44100));const S=n!==null&&e(a,a)?new n({length:m,numberOfChannels:g,sampleRate:_}):f.createBuffer(g,m,_);if(S.numberOfChannels===0)throw t();return typeof S.copyFromChannel!="function"?(l(S),ng(S)):e(Tf,()=>Tf(S))||u(S),r.add(S),S}static[Symbol.hasInstance](h){return h!==null&&typeof h=="object"&&Object.getPrototypeOf(h)===RS.prototype||r.has(h)}}},Hi=-34028234663852886e22,li=34028234663852886e22,Zr=r=>Za.has(r),E2={buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1},T2=(r,e,t,n,s,a,l,u)=>class extends r{constructor(d,h){const m=a(d),g={...E2,...h},_=s(m,g),S=l(m),M=S?e():null;super(d,!1,_,M),this._audioBufferSourceNodeRenderer=M,this._isBufferNullified=!1,this._isBufferSet=g.buffer!==null,this._nativeAudioBufferSourceNode=_,this._onended=null,this._playbackRate=t(this,S,_.playbackRate,li,Hi)}get buffer(){return this._isBufferNullified?null:this._nativeAudioBufferSourceNode.buffer}set buffer(d){if(this._nativeAudioBufferSourceNode.buffer=d,d!==null){if(this._isBufferSet)throw n();this._isBufferSet=!0}}get loop(){return this._nativeAudioBufferSourceNode.loop}set loop(d){this._nativeAudioBufferSourceNode.loop=d}get loopEnd(){return this._nativeAudioBufferSourceNode.loopEnd}set loopEnd(d){this._nativeAudioBufferSourceNode.loopEnd=d}get loopStart(){return this._nativeAudioBufferSourceNode.loopStart}set loopStart(d){this._nativeAudioBufferSourceNode.loopStart=d}get onended(){return this._onended}set onended(d){const h=typeof d=="function"?u(this,d):null;this._nativeAudioBufferSourceNode.onended=h;const m=this._nativeAudioBufferSourceNode.onended;this._onended=m!==null&&m===h?d:m}get playbackRate(){return this._playbackRate}start(d=0,h=0,m){if(this._nativeAudioBufferSourceNode.start(d,h,m),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.start=m===void 0?[d,h]:[d,h,m]),this.context.state!=="closed"){Ka(this);const g=()=>{this._nativeAudioBufferSourceNode.removeEventListener("ended",g),Zr(this)&&mu(this)};this._nativeAudioBufferSourceNode.addEventListener("ended",g)}}stop(d=0){this._nativeAudioBufferSourceNode.stop(d),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.stop=d)}},w2=(r,e,t,n,s)=>()=>{const a=new WeakMap;let l=null,u=null;const f=async(d,h)=>{let m=t(d);const g=ei(m,h);if(!g){const _={buffer:m.buffer,channelCount:m.channelCount,channelCountMode:m.channelCountMode,channelInterpretation:m.channelInterpretation,loop:m.loop,loopEnd:m.loopEnd,loopStart:m.loopStart,playbackRate:m.playbackRate.value};m=e(h,_),l!==null&&m.start(...l),u!==null&&m.stop(u)}return a.set(h,m),g?await r(h,d.playbackRate,m.playbackRate):await n(h,d.playbackRate,m.playbackRate),await s(d,h,m),m};return{set start(d){l=d},set stop(d){u=d},render(d,h){const m=a.get(h);return m!==void 0?Promise.resolve(m):f(d,h)}}},C2=r=>"playbackRate"in r,A2=r=>"frequency"in r&&"gain"in r,R2=r=>"offset"in r,b2=r=>!("frequency"in r)&&"gain"in r,P2=r=>"detune"in r&&"frequency"in r&&!("gain"in r),D2=r=>"pan"in r,Ri=r=>Xs(yS,r),gu=r=>Xs(SS,r),_m=(r,e)=>{const{activeInputs:t}=Ri(r);t.forEach(s=>s.forEach(([a])=>{e.includes(r)||_m(a,[...e,r])}));const n=C2(r)?[r.playbackRate]:AS(r)?Array.from(r.parameters.values()):A2(r)?[r.Q,r.detune,r.frequency,r.gain]:R2(r)?[r.offset]:b2(r)?[r.gain]:P2(r)?[r.detune,r.frequency]:D2(r)?[r.pan]:[];for(const s of n){const a=gu(s);a!==void 0&&a.activeInputs.forEach(([l])=>_m(l,e))}Zr(r)&&mu(r)},I2=r=>{_m(r.destination,[])},N2=(r,e,t,n,s,a,l,u)=>class extends r{constructor(d,h){const m=a(d),g=l(m),_=s(m,h,g),S=g?e(u):null;super(d,!1,_,S),this._isNodeOfNativeOfflineAudioContext=g,this._nativeAudioDestinationNode=_}get channelCount(){return this._nativeAudioDestinationNode.channelCount}set channelCount(d){if(this._isNodeOfNativeOfflineAudioContext)throw n();if(d>this._nativeAudioDestinationNode.maxChannelCount)throw t();this._nativeAudioDestinationNode.channelCount=d}get channelCountMode(){return this._nativeAudioDestinationNode.channelCountMode}set channelCountMode(d){if(this._isNodeOfNativeOfflineAudioContext)throw n();this._nativeAudioDestinationNode.channelCountMode=d}get maxChannelCount(){return this._nativeAudioDestinationNode.maxChannelCount}},L2=r=>{const e=new WeakMap,t=async(n,s)=>{const a=s.destination;return e.set(s,a),await r(n,s,a),a};return{render(n,s){const a=e.get(s);return a!==void 0?Promise.resolve(a):t(n,s)}}},F2=(r,e,t,n,s,a,l,u)=>(f,d)=>{const h=d.listener,m=()=>{const C=new Float32Array(1),P=e(d,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:9}),I=l(d);let D=!1,A=[0,0,-1,0,1,0],R=[0,0,0];const F=()=>{if(D)return;D=!0;const Z=n(d,256,9,0);Z.onaudioprocess=({inputBuffer:q})=>{const $=[a(q,C,0),a(q,C,1),a(q,C,2),a(q,C,3),a(q,C,4),a(q,C,5)];$.some((J,ee)=>J!==A[ee])&&(h.setOrientation(...$),A=$);const H=[a(q,C,6),a(q,C,7),a(q,C,8)];H.some((J,ee)=>J!==R[ee])&&(h.setPosition(...H),R=H)},P.connect(Z)},O=Z=>q=>{q!==A[Z]&&(A[Z]=q,h.setOrientation(...A))},B=Z=>q=>{q!==R[Z]&&(R[Z]=q,h.setPosition(...R))},G=(Z,q,$)=>{const H=t(d,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:q});H.connect(P,0,Z),H.start(),Object.defineProperty(H.offset,"defaultValue",{get(){return q}});const J=r({context:f},I,H.offset,li,Hi);return u(J,"value",ee=>()=>ee.call(J),ee=>z=>{try{ee.call(J,z)}catch(te){if(te.code!==9)throw te}F(),I&&$(z)}),J.cancelAndHoldAtTime=(ee=>I?()=>{throw s()}:(...z)=>{const te=ee.apply(J,z);return F(),te})(J.cancelAndHoldAtTime),J.cancelScheduledValues=(ee=>I?()=>{throw s()}:(...z)=>{const te=ee.apply(J,z);return F(),te})(J.cancelScheduledValues),J.exponentialRampToValueAtTime=(ee=>I?()=>{throw s()}:(...z)=>{const te=ee.apply(J,z);return F(),te})(J.exponentialRampToValueAtTime),J.linearRampToValueAtTime=(ee=>I?()=>{throw s()}:(...z)=>{const te=ee.apply(J,z);return F(),te})(J.linearRampToValueAtTime),J.setTargetAtTime=(ee=>I?()=>{throw s()}:(...z)=>{const te=ee.apply(J,z);return F(),te})(J.setTargetAtTime),J.setValueAtTime=(ee=>I?()=>{throw s()}:(...z)=>{const te=ee.apply(J,z);return F(),te})(J.setValueAtTime),J.setValueCurveAtTime=(ee=>I?()=>{throw s()}:(...z)=>{const te=ee.apply(J,z);return F(),te})(J.setValueCurveAtTime),J};return{forwardX:G(0,0,O(0)),forwardY:G(1,0,O(1)),forwardZ:G(2,-1,O(2)),positionX:G(6,0,B(0)),positionY:G(7,0,B(1)),positionZ:G(8,0,B(2)),upX:G(3,0,O(3)),upY:G(4,1,O(4)),upZ:G(5,0,O(5))}},{forwardX:g,forwardY:_,forwardZ:S,positionX:M,positionY:x,positionZ:v,upX:b,upY:w,upZ:T}=h.forwardX===void 0?m():h;return{get forwardX(){return g},get forwardY(){return _},get forwardZ(){return S},get positionX(){return M},get positionY(){return x},get positionZ(){return v},get upX(){return b},get upY(){return w},get upZ(){return T}}},wf=r=>"context"in r,_u=r=>wf(r[0]),Oo=(r,e,t,n)=>{for(const s of r)if(t(s)){if(n)return!1;throw Error("The set contains at least one similar element.")}return r.add(e),!0},Ty=(r,e,[t,n],s)=>{Oo(r,[e,t,n],a=>a[0]===e&&a[1]===t,s)},wy=(r,[e,t,n],s)=>{const a=r.get(e);a===void 0?r.set(e,new Set([[t,n]])):Oo(a,[t,n],l=>l[0]===t,s)},rl=r=>"inputs"in r,Cf=(r,e,t,n)=>{if(rl(e)){const s=e.inputs[n];return r.connect(s,t,0),[s,t,0]}return r.connect(e,t,n),[e,t,n]},bS=(r,e,t)=>{for(const n of r)if(n[0]===e&&n[1]===t)return r.delete(n),n;return null},U2=(r,e,t)=>Of(r,n=>n[0]===e&&n[1]===t),PS=(r,e)=>{if(!pu(r).delete(e))throw new Error("Missing the expected event listener.")},DS=(r,e,t)=>{const n=Xs(r,e),s=Of(n,a=>a[0]===t);return n.size===0&&r.delete(e),s},Af=(r,e,t,n)=>{rl(e)?r.disconnect(e.inputs[n],t,0):r.disconnect(e,t,n)},jt=r=>Xs(xS,r),cu=r=>Xs(MS,r),No=r=>mm.has(r),ff=r=>!Za.has(r),Cy=(r,e)=>new Promise(t=>{if(e!==null)t(!0);else{const n=r.createScriptProcessor(256,1,1),s=r.createGain(),a=r.createBuffer(1,2,44100),l=a.getChannelData(0);l[0]=1,l[1]=1;const u=r.createBufferSource();u.buffer=a,u.loop=!0,u.connect(n).connect(r.destination),u.connect(s),u.disconnect(s),n.onaudioprocess=f=>{const d=f.inputBuffer.getChannelData(0);Array.prototype.some.call(d,h=>h===1)?t(!0):t(!1),u.stop(),n.onaudioprocess=null,u.disconnect(n),n.disconnect(r.destination)},u.start()}}),up=(r,e)=>{const t=new Map;for(const n of r)for(const s of n){const a=t.get(s);t.set(s,a===void 0?1:a+1)}t.forEach((n,s)=>e(s,n))},Ay=r=>"context"in r,O2=r=>{const e=new Map;r.connect=(t=>(n,s=0,a=0)=>{const l=Ay(n)?t(n,s,a):t(n,s),u=e.get(n);return u===void 0?e.set(n,[{input:a,output:s}]):u.every(f=>f.input!==a||f.output!==s)&&u.push({input:a,output:s}),l})(r.connect.bind(r)),r.disconnect=(t=>(n,s,a)=>{if(t.apply(r),n===void 0)e.clear();else if(typeof n=="number")for(const[l,u]of e){const f=u.filter(d=>d.output!==n);f.length===0?e.delete(l):e.set(l,f)}else if(e.has(n))if(s===void 0)e.delete(n);else{const l=e.get(n);if(l!==void 0){const u=l.filter(f=>f.output!==s&&(f.input!==a||a===void 0));u.length===0?e.delete(n):e.set(n,u)}}for(const[l,u]of e)u.forEach(f=>{Ay(l)?r.connect(l,f.output,f.input):r.connect(l,f.output)})})(r.disconnect)},k2=(r,e,t,n)=>{const{activeInputs:s,passiveInputs:a}=gu(e),{outputs:l}=Ri(r),u=pu(r),f=d=>{const h=jt(r),m=cu(e);if(d){const g=DS(a,r,t);Ty(s,r,g,!1),!n&&!No(r)&&h.connect(m,t)}else{const g=U2(s,r,t);wy(a,g,!1),!n&&!No(r)&&h.disconnect(m,t)}};return Oo(l,[e,t],d=>d[0]===e&&d[1]===t,!0)?(u.add(f),Zr(r)?Ty(s,r,[t,f],!0):wy(a,[r,t,f],!0),!0):!1},z2=(r,e,t,n)=>{const{activeInputs:s,passiveInputs:a}=Ri(e),l=bS(s[n],r,t);return l===null?[CS(a,r,t,n)[2],!1]:[l[2],!0]},B2=(r,e,t)=>{const{activeInputs:n,passiveInputs:s}=gu(e),a=bS(n,r,t);return a===null?[DS(s,r,t)[1],!1]:[a[2],!0]},ig=(r,e,t,n,s)=>{const[a,l]=z2(r,t,n,s);if(a!==null&&(PS(r,a),l&&!e&&!No(r)&&Af(jt(r),jt(t),n,s)),Zr(t)){const{activeInputs:u}=Ri(t);gm(t,u)}},rg=(r,e,t,n)=>{const[s,a]=B2(r,t,n);s!==null&&(PS(r,s),a&&!e&&!No(r)&&jt(r).disconnect(cu(t),n))},V2=(r,e)=>{const t=Ri(r),n=[];for(const s of t.outputs)_u(s)?ig(r,e,...s):rg(r,e,...s),n.push(s[0]);return t.outputs.clear(),n},H2=(r,e,t)=>{const n=Ri(r),s=[];for(const a of n.outputs)a[1]===t&&(_u(a)?ig(r,e,...a):rg(r,e,...a),s.push(a[0]),n.outputs.delete(a));return s},G2=(r,e,t,n,s)=>{const a=Ri(r);return Array.from(a.outputs).filter(l=>l[0]===t&&(n===void 0||l[1]===n)&&(s===void 0||l[2]===s)).map(l=>(_u(l)?ig(r,e,...l):rg(r,e,...l),a.outputs.delete(l),l[0]))},W2=(r,e,t,n,s,a,l,u,f,d,h,m,g,_,S,M)=>class extends d{constructor(v,b,w,T){super(w),this._context=v,this._nativeAudioNode=w;const C=h(v);m(C)&&t(Cy,()=>Cy(C,M))!==!0&&O2(w),xS.set(this,w),TS.set(this,new Set),v.state!=="closed"&&b&&Ka(this),r(this,T,w)}get channelCount(){return this._nativeAudioNode.channelCount}set channelCount(v){this._nativeAudioNode.channelCount=v}get channelCountMode(){return this._nativeAudioNode.channelCountMode}set channelCountMode(v){this._nativeAudioNode.channelCountMode=v}get channelInterpretation(){return this._nativeAudioNode.channelInterpretation}set channelInterpretation(v){this._nativeAudioNode.channelInterpretation=v}get context(){return this._context}get numberOfInputs(){return this._nativeAudioNode.numberOfInputs}get numberOfOutputs(){return this._nativeAudioNode.numberOfOutputs}connect(v,b=0,w=0){if(b<0||b>=this._nativeAudioNode.numberOfOutputs)throw s();const T=h(this._context),C=S(T);if(g(v)||_(v))throw a();if(wf(v)){const D=jt(v);try{const R=Cf(this._nativeAudioNode,D,b,w),F=ff(this);(C||F)&&this._nativeAudioNode.disconnect(...R),this.context.state!=="closed"&&!F&&ff(v)&&Ka(v)}catch(R){throw R.code===12?a():R}if(e(this,v,b,w,C)){const R=f([this],v);up(R,n(C))}return v}const P=cu(v);if(P.name==="playbackRate"&&P.maxValue===1024)throw l();try{this._nativeAudioNode.connect(P,b),(C||ff(this))&&this._nativeAudioNode.disconnect(P,b)}catch(D){throw D.code===12?a():D}if(k2(this,v,b,C)){const D=f([this],v);up(D,n(C))}}disconnect(v,b,w){let T;const C=h(this._context),P=S(C);if(v===void 0)T=V2(this,P);else if(typeof v=="number"){if(v<0||v>=this.numberOfOutputs)throw s();T=H2(this,P,v)}else{if(b!==void 0&&(b<0||b>=this.numberOfOutputs)||wf(v)&&w!==void 0&&(w<0||w>=v.numberOfInputs))throw s();if(T=G2(this,P,v,b,w),T.length===0)throw a()}for(const I of T){const D=f([this],I);up(D,u)}}},X2=(r,e,t,n,s,a,l,u,f,d,h,m,g)=>(_,S,M,x=null,v=null)=>{const b=M.value,w=new i2(b),T=S?n(w):null,C={get defaultValue(){return b},get maxValue(){return x===null?M.maxValue:x},get minValue(){return v===null?M.minValue:v},get value(){return M.value},set value(P){M.value=P,C.setValueAtTime(P,_.context.currentTime)},cancelAndHoldAtTime(P){if(typeof M.cancelAndHoldAtTime=="function")T===null&&w.flush(_.context.currentTime),w.add(s(P)),M.cancelAndHoldAtTime(P);else{const I=Array.from(w).pop();T===null&&w.flush(_.context.currentTime),w.add(s(P));const D=Array.from(w).pop();M.cancelScheduledValues(P),I!==D&&D!==void 0&&(D.type==="exponentialRampToValue"?M.exponentialRampToValueAtTime(D.value,D.endTime):D.type==="linearRampToValue"?M.linearRampToValueAtTime(D.value,D.endTime):D.type==="setValue"?M.setValueAtTime(D.value,D.startTime):D.type==="setValueCurve"&&M.setValueCurveAtTime(D.values,D.startTime,D.duration))}return C},cancelScheduledValues(P){return T===null&&w.flush(_.context.currentTime),w.add(a(P)),M.cancelScheduledValues(P),C},exponentialRampToValueAtTime(P,I){if(P===0)throw new RangeError;if(!Number.isFinite(I)||I<0)throw new RangeError;const D=_.context.currentTime;return T===null&&w.flush(D),Array.from(w).length===0&&(w.add(d(b,D)),M.setValueAtTime(b,D)),w.add(l(P,I)),M.exponentialRampToValueAtTime(P,I),C},linearRampToValueAtTime(P,I){const D=_.context.currentTime;return T===null&&w.flush(D),Array.from(w).length===0&&(w.add(d(b,D)),M.setValueAtTime(b,D)),w.add(u(P,I)),M.linearRampToValueAtTime(P,I),C},setTargetAtTime(P,I,D){return T===null&&w.flush(_.context.currentTime),w.add(f(P,I,D)),M.setTargetAtTime(P,I,D),C},setValueAtTime(P,I){return T===null&&w.flush(_.context.currentTime),w.add(d(P,I)),M.setValueAtTime(P,I),C},setValueCurveAtTime(P,I,D){const A=P instanceof Float32Array?P:new Float32Array(P);if(m!==null&&m.name==="webkitAudioContext"){const R=I+D,F=_.context.sampleRate,O=Math.ceil(I*F),B=Math.floor(R*F),G=B-O,Z=new Float32Array(G);for(let $=0;$<G;$+=1){const H=(A.length-1)/D*((O+$)/F-I),J=Math.floor(H),ee=Math.ceil(H);Z[$]=J===ee?A[J]:(1-(H-J))*A[J]+(1-(ee-H))*A[ee]}T===null&&w.flush(_.context.currentTime),w.add(h(Z,I,D)),M.setValueCurveAtTime(Z,I,D);const q=B/F;q<R&&g(C,Z[Z.length-1],q),g(C,A[A.length-1],R)}else T===null&&w.flush(_.context.currentTime),w.add(h(A,I,D)),M.setValueCurveAtTime(A,I,D);return C}};return t.set(C,M),e.set(C,_),r(C,T),C},q2=r=>({replay(e){for(const t of r)if(t.type==="exponentialRampToValue"){const{endTime:n,value:s}=t;e.exponentialRampToValueAtTime(s,n)}else if(t.type==="linearRampToValue"){const{endTime:n,value:s}=t;e.linearRampToValueAtTime(s,n)}else if(t.type==="setTarget"){const{startTime:n,target:s,timeConstant:a}=t;e.setTargetAtTime(s,n,a)}else if(t.type==="setValue"){const{startTime:n,value:s}=t;e.setValueAtTime(s,n)}else if(t.type==="setValueCurve"){const{duration:n,startTime:s,values:a}=t;e.setValueCurveAtTime(a,s,n)}else throw new Error("Can't apply an unknown automation.")}}),Y2=(r,e,t,n,s,a,l,u,f,d,h,m,g,_,S,M,x,v,b,w)=>class extends S{constructor(C,P){super(C,P),this._nativeContext=C,this._audioWorklet=r===void 0?void 0:{addModule:(I,D)=>r(this,I,D)}}get audioWorklet(){return this._audioWorklet}createAnalyser(){return new e(this)}createBiquadFilter(){return new s(this)}createBuffer(C,P,I){return new t({length:P,numberOfChannels:C,sampleRate:I})}createBufferSource(){return new n(this)}createChannelMerger(C=6){return new a(this,{numberOfInputs:C})}createChannelSplitter(C=6){return new l(this,{numberOfOutputs:C})}createConstantSource(){return new u(this)}createConvolver(){return new f(this)}createDelay(C=1){return new h(this,{maxDelayTime:C})}createDynamicsCompressor(){return new m(this)}createGain(){return new g(this)}createIIRFilter(C,P){return new _(this,{feedback:P,feedforward:C})}createOscillator(){return new M(this)}createPanner(){return new x(this)}createPeriodicWave(C,P,I={disableNormalization:!1}){return new v(this,{...I,imag:P,real:C})}createStereoPanner(){return new b(this)}createWaveShaper(){return new w(this)}decodeAudioData(C,P,I){return d(this._nativeContext,C).then(D=>(typeof P=="function"&&P(D),D),D=>{throw typeof I=="function"&&I(D),D})}},j2={Q:1,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",detune:0,frequency:350,gain:0,type:"lowpass"},$2=(r,e,t,n,s,a,l,u)=>class extends r{constructor(d,h){const m=a(d),g={...j2,...h},_=s(m,g),S=l(m),M=S?t():null;super(d,!1,_,M),this._Q=e(this,S,_.Q,li,Hi),this._detune=e(this,S,_.detune,1200*Math.log2(li),-1200*Math.log2(li)),this._frequency=e(this,S,_.frequency,d.sampleRate/2,0),this._gain=e(this,S,_.gain,40*Math.log10(li),Hi),this._nativeBiquadFilterNode=_,u(this,1)}get detune(){return this._detune}get frequency(){return this._frequency}get gain(){return this._gain}get Q(){return this._Q}get type(){return this._nativeBiquadFilterNode.type}set type(d){this._nativeBiquadFilterNode.type=d}getFrequencyResponse(d,h,m){try{this._nativeBiquadFilterNode.getFrequencyResponse(d,h,m)}catch(g){throw g.code===11?n():g}if(d.length!==h.length||h.length!==m.length)throw n()}},Z2=(r,e,t,n,s)=>()=>{const a=new WeakMap,l=async(u,f)=>{let d=t(u);const h=ei(d,f);if(!h){const m={Q:d.Q.value,channelCount:d.channelCount,channelCountMode:d.channelCountMode,channelInterpretation:d.channelInterpretation,detune:d.detune.value,frequency:d.frequency.value,gain:d.gain.value,type:d.type};d=e(f,m)}return a.set(f,d),h?(await r(f,u.Q,d.Q),await r(f,u.detune,d.detune),await r(f,u.frequency,d.frequency),await r(f,u.gain,d.gain)):(await n(f,u.Q,d.Q),await n(f,u.detune,d.detune),await n(f,u.frequency,d.frequency),await n(f,u.gain,d.gain)),await s(u,f,d),d};return{render(u,f){const d=a.get(f);return d!==void 0?Promise.resolve(d):l(u,f)}}},K2=(r,e)=>(t,n)=>{const s=e.get(t);if(s!==void 0)return s;const a=r.get(t);if(a!==void 0)return a;try{const l=n();return l instanceof Promise?(r.set(t,l),l.catch(()=>!1).then(u=>(r.delete(t),e.set(t,u),u))):(e.set(t,l),l)}catch{return e.set(t,!1),!1}},Q2={channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:6},J2=(r,e,t,n,s)=>class extends r{constructor(l,u){const f=n(l),d={...Q2,...u},h=t(f,d),m=s(f)?e():null;super(l,!1,h,m)}},eD=(r,e,t)=>()=>{const n=new WeakMap,s=async(a,l)=>{let u=e(a);if(!ei(u,l)){const d={channelCount:u.channelCount,channelCountMode:u.channelCountMode,channelInterpretation:u.channelInterpretation,numberOfInputs:u.numberOfInputs};u=r(l,d)}return n.set(l,u),await t(a,l,u),u};return{render(a,l){const u=n.get(l);return u!==void 0?Promise.resolve(u):s(a,l)}}},tD={channelCount:6,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:6},nD=(r,e,t,n,s,a)=>class extends r{constructor(u,f){const d=n(u),h=a({...tD,...f}),m=t(d,h),g=s(d)?e():null;super(u,!1,m,g)}},iD=(r,e,t)=>()=>{const n=new WeakMap,s=async(a,l)=>{let u=e(a);if(!ei(u,l)){const d={channelCount:u.channelCount,channelCountMode:u.channelCountMode,channelInterpretation:u.channelInterpretation,numberOfOutputs:u.numberOfOutputs};u=r(l,d)}return n.set(l,u),await t(a,l,u),u};return{render(a,l){const u=n.get(l);return u!==void 0?Promise.resolve(u):s(a,l)}}},rD=r=>(e,t,n)=>r(t,e,n),sD=r=>(e,t)=>{const n=r(e,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),s=e.createBuffer(1,2,44100);return n.buffer=s,n.loop=!0,n.connect(t),n.start(),()=>{n.stop(),n.disconnect(t)}},oD={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",offset:1},aD=(r,e,t,n,s,a,l)=>class extends r{constructor(f,d){const h=s(f),m={...oD,...d},g=n(h,m),_=a(h),S=_?t():null;super(f,!1,g,S),this._constantSourceNodeRenderer=S,this._nativeConstantSourceNode=g,this._offset=e(this,_,g.offset,li,Hi),this._onended=null}get offset(){return this._offset}get onended(){return this._onended}set onended(f){const d=typeof f=="function"?l(this,f):null;this._nativeConstantSourceNode.onended=d;const h=this._nativeConstantSourceNode.onended;this._onended=h!==null&&h===d?f:h}start(f=0){if(this._nativeConstantSourceNode.start(f),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.start=f),this.context.state!=="closed"){Ka(this);const d=()=>{this._nativeConstantSourceNode.removeEventListener("ended",d),Zr(this)&&mu(this)};this._nativeConstantSourceNode.addEventListener("ended",d)}}stop(f=0){this._nativeConstantSourceNode.stop(f),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.stop=f)}},lD=(r,e,t,n,s)=>()=>{const a=new WeakMap;let l=null,u=null;const f=async(d,h)=>{let m=t(d);const g=ei(m,h);if(!g){const _={channelCount:m.channelCount,channelCountMode:m.channelCountMode,channelInterpretation:m.channelInterpretation,offset:m.offset.value};m=e(h,_),l!==null&&m.start(l),u!==null&&m.stop(u)}return a.set(h,m),g?await r(h,d.offset,m.offset):await n(h,d.offset,m.offset),await s(d,h,m),m};return{set start(d){l=d},set stop(d){u=d},render(d,h){const m=a.get(h);return m!==void 0?Promise.resolve(m):f(d,h)}}},uD=r=>e=>(r[0]=e,r[0]),cD={buffer:null,channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",disableNormalization:!1},fD=(r,e,t,n,s,a)=>class extends r{constructor(u,f){const d=n(u),h={...cD,...f},m=t(d,h),_=s(d)?e():null;super(u,!1,m,_),this._isBufferNullified=!1,this._nativeConvolverNode=m,h.buffer!==null&&a(this,h.buffer.duration)}get buffer(){return this._isBufferNullified?null:this._nativeConvolverNode.buffer}set buffer(u){if(this._nativeConvolverNode.buffer=u,u===null&&this._nativeConvolverNode.buffer!==null){const f=this._nativeConvolverNode.context;this._nativeConvolverNode.buffer=f.createBuffer(1,1,f.sampleRate),this._isBufferNullified=!0,a(this,0)}else this._isBufferNullified=!1,a(this,this._nativeConvolverNode.buffer===null?0:this._nativeConvolverNode.buffer.duration)}get normalize(){return this._nativeConvolverNode.normalize}set normalize(u){this._nativeConvolverNode.normalize=u}},dD=(r,e,t)=>()=>{const n=new WeakMap,s=async(a,l)=>{let u=e(a);if(!ei(u,l)){const d={buffer:u.buffer,channelCount:u.channelCount,channelCountMode:u.channelCountMode,channelInterpretation:u.channelInterpretation,disableNormalization:!u.normalize};u=r(l,d)}return n.set(l,u),rl(u)?await t(a,l,u.inputs[0]):await t(a,l,u),u};return{render(a,l){const u=n.get(l);return u!==void 0?Promise.resolve(u):s(a,l)}}},hD=(r,e)=>(t,n,s)=>{if(e===null)throw new Error("Missing the native OfflineAudioContext constructor.");try{return new e(t,n,s)}catch(a){throw a.name==="SyntaxError"?r():a}},pD=()=>new DOMException("","DataCloneError"),Ry=r=>{const{port1:e,port2:t}=new MessageChannel;return new Promise(n=>{const s=()=>{t.onmessage=null,e.close(),t.close(),n()};t.onmessage=()=>s();try{e.postMessage(r,[r])}catch{}finally{s()}})},mD=(r,e,t,n,s,a,l,u,f,d,h)=>(m,g)=>{const _=l(m)?m:a(m);if(s.has(g)){const S=t();return Promise.reject(S)}try{s.add(g)}catch{}return e(f,()=>f(_))?_.decodeAudioData(g).then(S=>(Ry(g).catch(()=>{}),e(u,()=>u(S))||h(S),r.add(S),S)):new Promise((S,M)=>{const x=async()=>{try{await Ry(g)}catch{}},v=b=>{M(b),x()};try{_.decodeAudioData(g,b=>{typeof b.copyFromChannel!="function"&&(d(b),ng(b)),r.add(b),x().then(()=>S(b))},b=>{v(b===null?n():b)})}catch(b){v(b)}})},gD=(r,e,t,n,s,a,l,u)=>(f,d)=>{const h=e.get(f);if(h===void 0)throw new Error("Missing the expected cycle count.");const m=a(f.context),g=u(m);if(h===d){if(e.delete(f),!g&&l(f)){const _=n(f),{outputs:S}=t(f);for(const M of S)if(_u(M)){const x=n(M[0]);r(_,x,M[1],M[2])}else{const x=s(M[0]);_.connect(x,M[1])}}}else e.set(f,h-d)},_D={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",delayTime:0,maxDelayTime:1},vD=(r,e,t,n,s,a,l)=>class extends r{constructor(f,d){const h=s(f),m={..._D,...d},g=n(h,m),_=a(h),S=_?t(m.maxDelayTime):null;super(f,!1,g,S),this._delayTime=e(this,_,g.delayTime),l(this,m.maxDelayTime)}get delayTime(){return this._delayTime}},yD=(r,e,t,n,s)=>a=>{const l=new WeakMap,u=async(f,d)=>{let h=t(f);const m=ei(h,d);if(!m){const g={channelCount:h.channelCount,channelCountMode:h.channelCountMode,channelInterpretation:h.channelInterpretation,delayTime:h.delayTime.value,maxDelayTime:a};h=e(d,g)}return l.set(d,h),m?await r(d,f.delayTime,h.delayTime):await n(d,f.delayTime,h.delayTime),await s(f,d,h),h};return{render(f,d){const h=l.get(d);return h!==void 0?Promise.resolve(h):u(f,d)}}},xD=r=>(e,t,n,s)=>r(e[s],a=>a[0]===t&&a[1]===n),SD=r=>"delayTime"in r,MD=(r,e,t)=>function n(s,a){const l=wf(a)?a:t(r,a);if(SD(l))return[];if(s[0]===l)return[s];if(s.includes(l))return[];const{outputs:u}=e(l);return Array.from(u).map(f=>n([...s,l],f[0])).reduce((f,d)=>f.concat(d),[])},ED={attack:.003,channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",knee:30,ratio:12,release:.25,threshold:-24},TD=(r,e,t,n,s,a,l,u)=>class extends r{constructor(d,h){const m=a(d),g={...ED,...h},_=n(m,g),S=l(m),M=S?t():null;super(d,!1,_,M),this._attack=e(this,S,_.attack),this._knee=e(this,S,_.knee),this._nativeDynamicsCompressorNode=_,this._ratio=e(this,S,_.ratio),this._release=e(this,S,_.release),this._threshold=e(this,S,_.threshold),u(this,.006)}get attack(){return this._attack}get channelCount(){return this._nativeDynamicsCompressorNode.channelCount}set channelCount(d){const h=this._nativeDynamicsCompressorNode.channelCount;if(this._nativeDynamicsCompressorNode.channelCount=d,d>2)throw this._nativeDynamicsCompressorNode.channelCount=h,s()}get channelCountMode(){return this._nativeDynamicsCompressorNode.channelCountMode}set channelCountMode(d){const h=this._nativeDynamicsCompressorNode.channelCountMode;if(this._nativeDynamicsCompressorNode.channelCountMode=d,d==="max")throw this._nativeDynamicsCompressorNode.channelCountMode=h,s()}get knee(){return this._knee}get ratio(){return this._ratio}get reduction(){return typeof this._nativeDynamicsCompressorNode.reduction.value=="number"?this._nativeDynamicsCompressorNode.reduction.value:this._nativeDynamicsCompressorNode.reduction}get release(){return this._release}get threshold(){return this._threshold}},wD=(r,e,t,n,s)=>()=>{const a=new WeakMap,l=async(u,f)=>{let d=t(u);const h=ei(d,f);if(!h){const m={attack:d.attack.value,channelCount:d.channelCount,channelCountMode:d.channelCountMode,channelInterpretation:d.channelInterpretation,knee:d.knee.value,ratio:d.ratio.value,release:d.release.value,threshold:d.threshold.value};d=e(f,m)}return a.set(f,d),h?(await r(f,u.attack,d.attack),await r(f,u.knee,d.knee),await r(f,u.ratio,d.ratio),await r(f,u.release,d.release),await r(f,u.threshold,d.threshold)):(await n(f,u.attack,d.attack),await n(f,u.knee,d.knee),await n(f,u.ratio,d.ratio),await n(f,u.release,d.release),await n(f,u.threshold,d.threshold)),await s(u,f,d),d};return{render(u,f){const d=a.get(f);return d!==void 0?Promise.resolve(d):l(u,f)}}},CD=()=>new DOMException("","EncodingError"),AD=r=>e=>new Promise((t,n)=>{if(r===null){n(new SyntaxError);return}const s=r.document.head;if(s===null)n(new SyntaxError);else{const a=r.document.createElement("script"),l=new Blob([e],{type:"application/javascript"}),u=URL.createObjectURL(l),f=r.onerror,d=()=>{r.onerror=f,URL.revokeObjectURL(u)};r.onerror=(h,m,g,_,S)=>{if(m===u||m===r.location.href&&g===1&&_===1)return d(),n(S),!1;if(f!==null)return f(h,m,g,_,S)},a.onerror=()=>{d(),n(new SyntaxError)},a.onload=()=>{d(),t()},a.src=u,a.type="module",s.appendChild(a)}}),RD=r=>class{constructor(t){this._nativeEventTarget=t,this._listeners=new WeakMap}addEventListener(t,n,s){if(n!==null){let a=this._listeners.get(n);a===void 0&&(a=r(this,n),typeof n=="function"&&this._listeners.set(n,a)),this._nativeEventTarget.addEventListener(t,a,s)}}dispatchEvent(t){return this._nativeEventTarget.dispatchEvent(t)}removeEventListener(t,n,s){const a=n===null?void 0:this._listeners.get(n);this._nativeEventTarget.removeEventListener(t,a===void 0?null:a,s)}},bD=r=>(e,t,n)=>{Object.defineProperties(r,{currentFrame:{configurable:!0,get(){return Math.round(e*t)}},currentTime:{configurable:!0,get(){return e}}});try{return n()}finally{r!==null&&(delete r.currentFrame,delete r.currentTime)}},PD=r=>async e=>{try{const t=await fetch(e);if(t.ok)return[await t.text(),t.url]}catch{}throw r()},DD={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",gain:1},ID=(r,e,t,n,s,a)=>class extends r{constructor(u,f){const d=s(u),h={...DD,...f},m=n(d,h),g=a(d),_=g?t():null;super(u,!1,m,_),this._gain=e(this,g,m.gain,li,Hi)}get gain(){return this._gain}},ND=(r,e,t,n,s)=>()=>{const a=new WeakMap,l=async(u,f)=>{let d=t(u);const h=ei(d,f);if(!h){const m={channelCount:d.channelCount,channelCountMode:d.channelCountMode,channelInterpretation:d.channelInterpretation,gain:d.gain.value};d=e(f,m)}return a.set(f,d),h?await r(f,u.gain,d.gain):await n(f,u.gain,d.gain),await s(u,f,d),d};return{render(u,f){const d=a.get(f);return d!==void 0?Promise.resolve(d):l(u,f)}}},LD=r=>e=>{const t=r(e);if(t.renderer===null)throw new Error("Missing the renderer of the given AudioNode in the audio graph.");return t.renderer},FD=r=>e=>{var t;return(t=r.get(e))!==null&&t!==void 0?t:0},UD=r=>e=>{const t=r(e);if(t.renderer===null)throw new Error("Missing the renderer of the given AudioParam in the audio graph.");return t.renderer},mi=()=>new DOMException("","InvalidStateError"),OD=r=>e=>{const t=r.get(e);if(t===void 0)throw mi();return t},kD=(r,e)=>t=>{let n=r.get(t);if(n!==void 0)return n;if(e===null)throw new Error("Missing the native OfflineAudioContext constructor.");return n=new e(1,1,44100),r.set(t,n),n},zD=r=>e=>{const t=r.get(e);if(t===void 0)throw new Error("The context has no set of AudioWorkletNodes.");return t},kf=()=>new DOMException("","InvalidAccessError"),BD=r=>{r.getFrequencyResponse=(e=>(t,n,s)=>{if(t.length!==n.length||n.length!==s.length)throw kf();return e.call(r,t,n,s)})(r.getFrequencyResponse)},VD={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers"},HD=(r,e,t,n,s,a)=>class extends r{constructor(u,f){const d=n(u),h=s(d),m={...VD,...f},g=e(d,h?null:u.baseLatency,m),_=h?t(m.feedback,m.feedforward):null;super(u,!1,g,_),BD(g),this._nativeIIRFilterNode=g,a(this,1)}getFrequencyResponse(u,f,d){return this._nativeIIRFilterNode.getFrequencyResponse(u,f,d)}},IS=(r,e,t,n,s,a,l,u,f,d,h)=>{const m=d.length;let g=u;for(let _=0;_<m;_+=1){let S=t[0]*d[_];for(let M=1;M<s;M+=1){const x=g-M&f-1;S+=t[M]*a[x],S-=r[M]*l[x]}for(let M=s;M<n;M+=1)S+=t[M]*a[g-M&f-1];for(let M=s;M<e;M+=1)S-=r[M]*l[g-M&f-1];a[g]=d[_],l[g]=S,g=g+1&f-1,h[_]=S}return g},GD=(r,e,t,n)=>{const s=t instanceof Float64Array?t:new Float64Array(t),a=n instanceof Float64Array?n:new Float64Array(n),l=s.length,u=a.length,f=Math.min(l,u);if(s[0]!==1){for(let S=0;S<l;S+=1)a[S]/=s[0];for(let S=1;S<u;S+=1)s[S]/=s[0]}const d=32,h=new Float32Array(d),m=new Float32Array(d),g=e.createBuffer(r.numberOfChannels,r.length,r.sampleRate),_=r.numberOfChannels;for(let S=0;S<_;S+=1){const M=r.getChannelData(S),x=g.getChannelData(S);h.fill(0),m.fill(0),IS(s,l,a,u,f,h,m,0,d,M,x)}return g},WD=(r,e,t,n,s)=>(a,l)=>{const u=new WeakMap;let f=null;const d=async(h,m)=>{let g=null,_=e(h);const S=ei(_,m);if(m.createIIRFilter===void 0?g=r(m,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}):S||(_=m.createIIRFilter(l,a)),u.set(m,g===null?_:g),g!==null){if(f===null){if(t===null)throw new Error("Missing the native OfflineAudioContext constructor.");const x=new t(h.context.destination.channelCount,h.context.length,m.sampleRate);f=(async()=>{await n(h,x,x.destination);const v=await s(x);return GD(v,m,a,l)})()}const M=await f;return g.buffer=M,g.start(0),g}return await n(h,m,_),_};return{render(h,m){const g=u.get(m);return g!==void 0?Promise.resolve(g):d(h,m)}}},XD=(r,e,t,n,s,a)=>l=>(u,f)=>{const d=r.get(u);if(d===void 0){if(!l&&a(u)){const h=n(u),{outputs:m}=t(u);for(const g of m)if(_u(g)){const _=n(g[0]);e(h,_,g[1],g[2])}else{const _=s(g[0]);h.disconnect(_,g[1])}}r.set(u,f)}else r.set(u,d+f)},qD=r=>e=>r!==null&&e instanceof r,YD=r=>e=>r!==null&&typeof r.AudioNode=="function"&&e instanceof r.AudioNode,jD=r=>e=>r!==null&&typeof r.AudioParam=="function"&&e instanceof r.AudioParam,$D=(r,e)=>t=>r(t)||e(t),ZD=r=>e=>r!==null&&e instanceof r,KD=r=>r!==null&&r.isSecureContext,QD=(r,e,t,n,s,a)=>class extends t{constructor(u,f){super(u),this._nativeContext=u,ES.set(this,u),n(u)&&s.set(u,new Set),this._destination=new r(this,f),this._listener=e(this,u),this._onstatechange=null}get currentTime(){return this._nativeContext.currentTime}get destination(){return this._destination}get listener(){return this._listener}get onstatechange(){return this._onstatechange}set onstatechange(u){const f=typeof u=="function"?a(this,u):null;this._nativeContext.onstatechange=f;const d=this._nativeContext.onstatechange;this._onstatechange=d!==null&&d===f?u:d}get sampleRate(){return this._nativeContext.sampleRate}get state(){return this._nativeContext.state}},fu=r=>{const e=new Uint32Array([1179011410,40,1163280727,544501094,16,131073,44100,176400,1048580,1635017060,4,0]);try{const t=r.decodeAudioData(e.buffer,()=>{});return t===void 0?!1:(t.catch(()=>{}),!0)}catch{}return!1},JD=(r,e)=>(t,n,s)=>{const a=new Set;return t.connect=(l=>(u,f=0,d=0)=>{const h=a.size===0;if(e(u))return l.call(t,u,f,d),r(a,[u,f,d],m=>m[0]===u&&m[1]===f&&m[2]===d,!0),h&&n(),u;l.call(t,u,f),r(a,[u,f],m=>m[0]===u&&m[1]===f,!0),h&&n()})(t.connect),t.disconnect=(l=>(u,f,d)=>{const h=a.size>0;if(u===void 0)l.apply(t),a.clear();else if(typeof u=="number"){l.call(t,u);for(const g of a)g[1]===u&&a.delete(g)}else{e(u)?l.call(t,u,f,d):l.call(t,u,f);for(const g of a)g[0]===u&&(f===void 0||g[1]===f)&&(d===void 0||g[2]===d)&&a.delete(g)}const m=a.size===0;h&&m&&s()})(t.disconnect),t},Vt=(r,e,t)=>{const n=e[t];n!==void 0&&n!==r[t]&&(r[t]=n)},Cn=(r,e)=>{Vt(r,e,"channelCount"),Vt(r,e,"channelCountMode"),Vt(r,e,"channelInterpretation")},by=r=>typeof r.getFloatTimeDomainData=="function",eI=r=>{r.getFloatTimeDomainData=e=>{const t=new Uint8Array(e.length);r.getByteTimeDomainData(t);const n=Math.max(t.length,r.fftSize);for(let s=0;s<n;s+=1)e[s]=(t[s]-128)*.0078125;return e}},tI=(r,e)=>(t,n)=>{const s=t.createAnalyser();if(Cn(s,n),!(n.maxDecibels>n.minDecibels))throw e();return Vt(s,n,"fftSize"),Vt(s,n,"maxDecibels"),Vt(s,n,"minDecibels"),Vt(s,n,"smoothingTimeConstant"),r(by,()=>by(s))||eI(s),s},nI=r=>r===null?null:r.hasOwnProperty("AudioBuffer")?r.AudioBuffer:null,Qt=(r,e,t)=>{const n=e[t];n!==void 0&&n!==r[t].value&&(r[t].value=n)},iI=r=>{r.start=(e=>{let t=!1;return(n=0,s=0,a)=>{if(t)throw mi();e.call(r,n,s,a),t=!0}})(r.start)},sg=r=>{r.start=(e=>(t=0,n=0,s)=>{if(typeof s=="number"&&s<0||n<0||t<0)throw new RangeError("The parameters can't be negative.");e.call(r,t,n,s)})(r.start)},og=r=>{r.stop=(e=>(t=0)=>{if(t<0)throw new RangeError("The parameter can't be negative.");e.call(r,t)})(r.stop)},rI=(r,e,t,n,s,a,l,u,f,d,h)=>(m,g)=>{const _=m.createBufferSource();return Cn(_,g),Qt(_,g,"playbackRate"),Vt(_,g,"buffer"),Vt(_,g,"loop"),Vt(_,g,"loopEnd"),Vt(_,g,"loopStart"),e(t,()=>t(m))||iI(_),e(n,()=>n(m))||f(_),e(s,()=>s(m))||d(_,m),e(a,()=>a(m))||sg(_),e(l,()=>l(m))||h(_,m),e(u,()=>u(m))||og(_),r(m,_),_},sI=r=>r===null?null:r.hasOwnProperty("AudioContext")?r.AudioContext:r.hasOwnProperty("webkitAudioContext")?r.webkitAudioContext:null,oI=(r,e)=>(t,n,s)=>{const a=t.destination;if(a.channelCount!==n)try{a.channelCount=n}catch{}s&&a.channelCountMode!=="explicit"&&(a.channelCountMode="explicit"),a.maxChannelCount===0&&Object.defineProperty(a,"maxChannelCount",{value:n});const l=r(t,{channelCount:n,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,gain:1});return e(l,"channelCount",u=>()=>u.call(l),u=>f=>{u.call(l,f);try{a.channelCount=f}catch(d){if(f>a.maxChannelCount)throw d}}),e(l,"channelCountMode",u=>()=>u.call(l),u=>f=>{u.call(l,f),a.channelCountMode=f}),e(l,"channelInterpretation",u=>()=>u.call(l),u=>f=>{u.call(l,f),a.channelInterpretation=f}),Object.defineProperty(l,"maxChannelCount",{get:()=>a.maxChannelCount}),l.connect(a),l},aI=r=>r===null?null:r.hasOwnProperty("AudioWorkletNode")?r.AudioWorkletNode:null,lI=(r,e)=>r===null?512:Math.max(512,Math.min(16384,Math.pow(2,Math.round(Math.log2(r*e))))),NS=(r,e)=>{const t=r.createBiquadFilter();return Cn(t,e),Qt(t,e,"Q"),Qt(t,e,"detune"),Qt(t,e,"frequency"),Qt(t,e,"gain"),Vt(t,e,"type"),t},uI=(r,e)=>(t,n)=>{const s=t.createChannelMerger(n.numberOfInputs);return r!==null&&r.name==="webkitAudioContext"&&e(t,s),Cn(s,n),s},cI=r=>{const e=r.numberOfOutputs;Object.defineProperty(r,"channelCount",{get:()=>e,set:t=>{if(t!==e)throw mi()}}),Object.defineProperty(r,"channelCountMode",{get:()=>"explicit",set:t=>{if(t!=="explicit")throw mi()}}),Object.defineProperty(r,"channelInterpretation",{get:()=>"discrete",set:t=>{if(t!=="discrete")throw mi()}})},ag=(r,e)=>{const t=r.createChannelSplitter(e.numberOfOutputs);return Cn(t,e),cI(t),t},fI=(r,e,t,n,s)=>(a,l)=>{if(a.createConstantSource===void 0)return t(a,l);const u=a.createConstantSource();return Cn(u,l),Qt(u,l,"offset"),e(n,()=>n(a))||sg(u),e(s,()=>s(a))||og(u),r(a,u),u},sl=(r,e)=>(r.connect=e.connect.bind(e),r.disconnect=e.disconnect.bind(e),r),dI=(r,e,t,n)=>(s,{offset:a,...l})=>{const u=s.createBuffer(1,2,44100),f=e(s,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),d=t(s,{...l,gain:a}),h=u.getChannelData(0);h[0]=1,h[1]=1,f.buffer=u,f.loop=!0;const m={get bufferSize(){},get channelCount(){return d.channelCount},set channelCount(S){d.channelCount=S},get channelCountMode(){return d.channelCountMode},set channelCountMode(S){d.channelCountMode=S},get channelInterpretation(){return d.channelInterpretation},set channelInterpretation(S){d.channelInterpretation=S},get context(){return d.context},get inputs(){return[]},get numberOfInputs(){return f.numberOfInputs},get numberOfOutputs(){return d.numberOfOutputs},get offset(){return d.gain},get onended(){return f.onended},set onended(S){f.onended=S},addEventListener(...S){return f.addEventListener(S[0],S[1],S[2])},dispatchEvent(...S){return f.dispatchEvent(S[0])},removeEventListener(...S){return f.removeEventListener(S[0],S[1],S[2])},start(S=0){f.start.call(f,S)},stop(S=0){f.stop.call(f,S)}},g=()=>f.connect(d),_=()=>f.disconnect(d);return r(s,f),n(sl(m,d),g,_)},hI=(r,e)=>(t,n)=>{const s=t.createConvolver();if(Cn(s,n),n.disableNormalization===s.normalize&&(s.normalize=!n.disableNormalization),Vt(s,n,"buffer"),n.channelCount>2||(e(s,"channelCount",a=>()=>a.call(s),a=>l=>{if(l>2)throw r();return a.call(s,l)}),n.channelCountMode==="max"))throw r();return e(s,"channelCountMode",a=>()=>a.call(s),a=>l=>{if(l==="max")throw r();return a.call(s,l)}),s},LS=(r,e)=>{const t=r.createDelay(e.maxDelayTime);return Cn(t,e),Qt(t,e,"delayTime"),t},pI=r=>(e,t)=>{const n=e.createDynamicsCompressor();if(Cn(n,t),t.channelCount>2||t.channelCountMode==="max")throw r();return Qt(n,t,"attack"),Qt(n,t,"knee"),Qt(n,t,"ratio"),Qt(n,t,"release"),Qt(n,t,"threshold"),n},rr=(r,e)=>{const t=r.createGain();return Cn(t,e),Qt(t,e,"gain"),t},mI=r=>(e,t,n)=>{if(e.createIIRFilter===void 0)return r(e,t,n);const s=e.createIIRFilter(n.feedforward,n.feedback);return Cn(s,n),s};function gI(r,e){const t=e[0]*e[0]+e[1]*e[1];return[(r[0]*e[0]+r[1]*e[1])/t,(r[1]*e[0]-r[0]*e[1])/t]}function _I(r,e){return[r[0]*e[0]-r[1]*e[1],r[0]*e[1]+r[1]*e[0]]}function Py(r,e){let t=[0,0];for(let n=r.length-1;n>=0;n-=1)t=_I(t,e),t[0]+=r[n];return t}const vI=(r,e,t,n)=>(s,a,{channelCount:l,channelCountMode:u,channelInterpretation:f,feedback:d,feedforward:h})=>{const m=lI(a,s.sampleRate),g=d instanceof Float64Array?d:new Float64Array(d),_=h instanceof Float64Array?h:new Float64Array(h),S=g.length,M=_.length,x=Math.min(S,M);if(S===0||S>20)throw n();if(g[0]===0)throw e();if(M===0||M>20)throw n();if(_[0]===0)throw e();if(g[0]!==1){for(let D=0;D<M;D+=1)_[D]/=g[0];for(let D=1;D<S;D+=1)g[D]/=g[0]}const v=t(s,m,l,l);v.channelCount=l,v.channelCountMode=u,v.channelInterpretation=f;const b=32,w=[],T=[],C=[];for(let D=0;D<l;D+=1){w.push(0);const A=new Float32Array(b),R=new Float32Array(b);A.fill(0),R.fill(0),T.push(A),C.push(R)}v.onaudioprocess=D=>{const A=D.inputBuffer,R=D.outputBuffer,F=A.numberOfChannels;for(let O=0;O<F;O+=1){const B=A.getChannelData(O),G=R.getChannelData(O);w[O]=IS(g,S,_,M,x,T[O],C[O],w[O],b,B,G)}};const P=s.sampleRate/2;return sl({get bufferSize(){return m},get channelCount(){return v.channelCount},set channelCount(D){v.channelCount=D},get channelCountMode(){return v.channelCountMode},set channelCountMode(D){v.channelCountMode=D},get channelInterpretation(){return v.channelInterpretation},set channelInterpretation(D){v.channelInterpretation=D},get context(){return v.context},get inputs(){return[v]},get numberOfInputs(){return v.numberOfInputs},get numberOfOutputs(){return v.numberOfOutputs},addEventListener(...D){return v.addEventListener(D[0],D[1],D[2])},dispatchEvent(...D){return v.dispatchEvent(D[0])},getFrequencyResponse(D,A,R){if(D.length!==A.length||A.length!==R.length)throw r();const F=D.length;for(let O=0;O<F;O+=1){const B=-Math.PI*(D[O]/P),G=[Math.cos(B),Math.sin(B)],Z=Py(_,G),q=Py(g,G),$=gI(Z,q);A[O]=Math.sqrt($[0]*$[0]+$[1]*$[1]),R[O]=Math.atan2($[1],$[0])}},removeEventListener(...D){return v.removeEventListener(D[0],D[1],D[2])}},v)},yI=r=>r===null?null:r.hasOwnProperty("OfflineAudioContext")?r.OfflineAudioContext:r.hasOwnProperty("webkitOfflineAudioContext")?r.webkitOfflineAudioContext:null,xI=(r,e,t,n,s,a)=>(l,u)=>{const f=l.createOscillator();return Cn(f,u),Qt(f,u,"detune"),Qt(f,u,"frequency"),u.periodicWave!==void 0?f.setPeriodicWave(u.periodicWave):Vt(f,u,"type"),e(t,()=>t(l))||sg(f),e(n,()=>n(l))||a(f,l),e(s,()=>s(l))||og(f),r(l,f),f},SI=r=>(e,t)=>{const n=e.createPanner();return n.orientationX===void 0?r(e,t):(Cn(n,t),Qt(n,t,"orientationX"),Qt(n,t,"orientationY"),Qt(n,t,"orientationZ"),Qt(n,t,"positionX"),Qt(n,t,"positionY"),Qt(n,t,"positionZ"),Vt(n,t,"coneInnerAngle"),Vt(n,t,"coneOuterAngle"),Vt(n,t,"coneOuterGain"),Vt(n,t,"distanceModel"),Vt(n,t,"maxDistance"),Vt(n,t,"panningModel"),Vt(n,t,"refDistance"),Vt(n,t,"rolloffFactor"),n)},MI=(r,e,t,n,s,a,l,u,f,d)=>(h,{coneInnerAngle:m,coneOuterAngle:g,coneOuterGain:_,distanceModel:S,maxDistance:M,orientationX:x,orientationY:v,orientationZ:b,panningModel:w,positionX:T,positionY:C,positionZ:P,refDistance:I,rolloffFactor:D,...A})=>{const R=h.createPanner();if(A.channelCount>2||A.channelCountMode==="max")throw l();Cn(R,A);const F={channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"},O=t(h,{...F,channelInterpretation:"speakers",numberOfInputs:6}),B=n(h,{...A,gain:1}),G=n(h,{...F,gain:1}),Z=n(h,{...F,gain:0}),q=n(h,{...F,gain:0}),$=n(h,{...F,gain:0}),H=n(h,{...F,gain:0}),J=n(h,{...F,gain:0}),ee=s(h,256,6,1),z=a(h,{...F,curve:new Float32Array([1,1]),oversample:"none"});let te=[x,v,b],Ce=[T,C,P];const ne=new Float32Array(1);ee.onaudioprocess=({inputBuffer:de})=>{const De=[f(de,ne,0),f(de,ne,1),f(de,ne,2)];De.some((Tt,at)=>Tt!==te[at])&&(R.setOrientation(...De),te=De);const $e=[f(de,ne,3),f(de,ne,4),f(de,ne,5)];$e.some((Tt,at)=>Tt!==Ce[at])&&(R.setPosition(...$e),Ce=$e)},Object.defineProperty(Z.gain,"defaultValue",{get:()=>0}),Object.defineProperty(q.gain,"defaultValue",{get:()=>0}),Object.defineProperty($.gain,"defaultValue",{get:()=>0}),Object.defineProperty(H.gain,"defaultValue",{get:()=>0}),Object.defineProperty(J.gain,"defaultValue",{get:()=>0});const le={get bufferSize(){},get channelCount(){return R.channelCount},set channelCount(de){if(de>2)throw l();B.channelCount=de,R.channelCount=de},get channelCountMode(){return R.channelCountMode},set channelCountMode(de){if(de==="max")throw l();B.channelCountMode=de,R.channelCountMode=de},get channelInterpretation(){return R.channelInterpretation},set channelInterpretation(de){B.channelInterpretation=de,R.channelInterpretation=de},get coneInnerAngle(){return R.coneInnerAngle},set coneInnerAngle(de){R.coneInnerAngle=de},get coneOuterAngle(){return R.coneOuterAngle},set coneOuterAngle(de){R.coneOuterAngle=de},get coneOuterGain(){return R.coneOuterGain},set coneOuterGain(de){if(de<0||de>1)throw e();R.coneOuterGain=de},get context(){return R.context},get distanceModel(){return R.distanceModel},set distanceModel(de){R.distanceModel=de},get inputs(){return[B]},get maxDistance(){return R.maxDistance},set maxDistance(de){if(de<0)throw new RangeError;R.maxDistance=de},get numberOfInputs(){return R.numberOfInputs},get numberOfOutputs(){return R.numberOfOutputs},get orientationX(){return G.gain},get orientationY(){return Z.gain},get orientationZ(){return q.gain},get panningModel(){return R.panningModel},set panningModel(de){R.panningModel=de},get positionX(){return $.gain},get positionY(){return H.gain},get positionZ(){return J.gain},get refDistance(){return R.refDistance},set refDistance(de){if(de<0)throw new RangeError;R.refDistance=de},get rolloffFactor(){return R.rolloffFactor},set rolloffFactor(de){if(de<0)throw new RangeError;R.rolloffFactor=de},addEventListener(...de){return B.addEventListener(de[0],de[1],de[2])},dispatchEvent(...de){return B.dispatchEvent(de[0])},removeEventListener(...de){return B.removeEventListener(de[0],de[1],de[2])}};m!==le.coneInnerAngle&&(le.coneInnerAngle=m),g!==le.coneOuterAngle&&(le.coneOuterAngle=g),_!==le.coneOuterGain&&(le.coneOuterGain=_),S!==le.distanceModel&&(le.distanceModel=S),M!==le.maxDistance&&(le.maxDistance=M),x!==le.orientationX.value&&(le.orientationX.value=x),v!==le.orientationY.value&&(le.orientationY.value=v),b!==le.orientationZ.value&&(le.orientationZ.value=b),w!==le.panningModel&&(le.panningModel=w),T!==le.positionX.value&&(le.positionX.value=T),C!==le.positionY.value&&(le.positionY.value=C),P!==le.positionZ.value&&(le.positionZ.value=P),I!==le.refDistance&&(le.refDistance=I),D!==le.rolloffFactor&&(le.rolloffFactor=D),(te[0]!==1||te[1]!==0||te[2]!==0)&&R.setOrientation(...te),(Ce[0]!==0||Ce[1]!==0||Ce[2]!==0)&&R.setPosition(...Ce);const Me=()=>{B.connect(R),r(B,z,0,0),z.connect(G).connect(O,0,0),z.connect(Z).connect(O,0,1),z.connect(q).connect(O,0,2),z.connect($).connect(O,0,3),z.connect(H).connect(O,0,4),z.connect(J).connect(O,0,5),O.connect(ee).connect(h.destination)},ye=()=>{B.disconnect(R),u(B,z,0,0),z.disconnect(G),G.disconnect(O),z.disconnect(Z),Z.disconnect(O),z.disconnect(q),q.disconnect(O),z.disconnect($),$.disconnect(O),z.disconnect(H),H.disconnect(O),z.disconnect(J),J.disconnect(O),O.disconnect(ee),ee.disconnect(h.destination)};return d(sl(le,R),Me,ye)},EI=r=>(e,{disableNormalization:t,imag:n,real:s})=>{const a=n instanceof Float32Array?n:new Float32Array(n),l=s instanceof Float32Array?s:new Float32Array(s),u=e.createPeriodicWave(l,a,{disableNormalization:t});if(Array.from(n).length<2)throw r();return u},zf=(r,e,t,n)=>r.createScriptProcessor(e,t,n),TI=(r,e)=>(t,n)=>{const s=n.channelCountMode;if(s==="clamped-max")throw e();if(t.createStereoPanner===void 0)return r(t,n);const a=t.createStereoPanner();return Cn(a,n),Qt(a,n,"pan"),Object.defineProperty(a,"channelCountMode",{get:()=>s,set:l=>{if(l!==s)throw e()}}),a},wI=(r,e,t,n,s,a)=>{const u=new Float32Array([1,1]),f=Math.PI/2,d={channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"},h={...d,oversample:"none"},m=(S,M,x,v)=>{const b=new Float32Array(16385),w=new Float32Array(16385);for(let A=0;A<16385;A+=1){const R=A/16384*f;b[A]=Math.cos(R),w[A]=Math.sin(R)}const T=t(S,{...d,gain:0}),C=n(S,{...h,curve:b}),P=n(S,{...h,curve:u}),I=t(S,{...d,gain:0}),D=n(S,{...h,curve:w});return{connectGraph(){M.connect(T),M.connect(P.inputs===void 0?P:P.inputs[0]),M.connect(I),P.connect(x),x.connect(C.inputs===void 0?C:C.inputs[0]),x.connect(D.inputs===void 0?D:D.inputs[0]),C.connect(T.gain),D.connect(I.gain),T.connect(v,0,0),I.connect(v,0,1)},disconnectGraph(){M.disconnect(T),M.disconnect(P.inputs===void 0?P:P.inputs[0]),M.disconnect(I),P.disconnect(x),x.disconnect(C.inputs===void 0?C:C.inputs[0]),x.disconnect(D.inputs===void 0?D:D.inputs[0]),C.disconnect(T.gain),D.disconnect(I.gain),T.disconnect(v,0,0),I.disconnect(v,0,1)}}},g=(S,M,x,v)=>{const b=new Float32Array(16385),w=new Float32Array(16385),T=new Float32Array(16385),C=new Float32Array(16385),P=Math.floor(16385/2);for(let $=0;$<16385;$+=1)if($>P){const H=($-P)/(16384-P)*f;b[$]=Math.cos(H),w[$]=Math.sin(H),T[$]=0,C[$]=1}else{const H=$/(16384-P)*f;b[$]=1,w[$]=0,T[$]=Math.cos(H),C[$]=Math.sin(H)}const I=e(S,{channelCount:2,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:2}),D=t(S,{...d,gain:0}),A=n(S,{...h,curve:b}),R=t(S,{...d,gain:0}),F=n(S,{...h,curve:w}),O=n(S,{...h,curve:u}),B=t(S,{...d,gain:0}),G=n(S,{...h,curve:T}),Z=t(S,{...d,gain:0}),q=n(S,{...h,curve:C});return{connectGraph(){M.connect(I),M.connect(O.inputs===void 0?O:O.inputs[0]),I.connect(D,0),I.connect(R,0),I.connect(B,1),I.connect(Z,1),O.connect(x),x.connect(A.inputs===void 0?A:A.inputs[0]),x.connect(F.inputs===void 0?F:F.inputs[0]),x.connect(G.inputs===void 0?G:G.inputs[0]),x.connect(q.inputs===void 0?q:q.inputs[0]),A.connect(D.gain),F.connect(R.gain),G.connect(B.gain),q.connect(Z.gain),D.connect(v,0,0),B.connect(v,0,0),R.connect(v,0,1),Z.connect(v,0,1)},disconnectGraph(){M.disconnect(I),M.disconnect(O.inputs===void 0?O:O.inputs[0]),I.disconnect(D,0),I.disconnect(R,0),I.disconnect(B,1),I.disconnect(Z,1),O.disconnect(x),x.disconnect(A.inputs===void 0?A:A.inputs[0]),x.disconnect(F.inputs===void 0?F:F.inputs[0]),x.disconnect(G.inputs===void 0?G:G.inputs[0]),x.disconnect(q.inputs===void 0?q:q.inputs[0]),A.disconnect(D.gain),F.disconnect(R.gain),G.disconnect(B.gain),q.disconnect(Z.gain),D.disconnect(v,0,0),B.disconnect(v,0,0),R.disconnect(v,0,1),Z.disconnect(v,0,1)}}},_=(S,M,x,v,b)=>{if(M===1)return m(S,x,v,b);if(M===2)return g(S,x,v,b);throw s()};return(S,{channelCount:M,channelCountMode:x,pan:v,...b})=>{if(x==="max")throw s();const w=r(S,{...b,channelCount:1,channelCountMode:x,numberOfInputs:2}),T=t(S,{...b,channelCount:M,channelCountMode:x,gain:1}),C=t(S,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:v});let{connectGraph:P,disconnectGraph:I}=_(S,M,T,C,w);Object.defineProperty(C.gain,"defaultValue",{get:()=>0}),Object.defineProperty(C.gain,"maxValue",{get:()=>1}),Object.defineProperty(C.gain,"minValue",{get:()=>-1});const D={get bufferSize(){},get channelCount(){return T.channelCount},set channelCount(O){T.channelCount!==O&&(A&&I(),{connectGraph:P,disconnectGraph:I}=_(S,O,T,C,w),A&&P()),T.channelCount=O},get channelCountMode(){return T.channelCountMode},set channelCountMode(O){if(O==="clamped-max"||O==="max")throw s();T.channelCountMode=O},get channelInterpretation(){return T.channelInterpretation},set channelInterpretation(O){T.channelInterpretation=O},get context(){return T.context},get inputs(){return[T]},get numberOfInputs(){return T.numberOfInputs},get numberOfOutputs(){return T.numberOfOutputs},get pan(){return C.gain},addEventListener(...O){return T.addEventListener(O[0],O[1],O[2])},dispatchEvent(...O){return T.dispatchEvent(O[0])},removeEventListener(...O){return T.removeEventListener(O[0],O[1],O[2])}};let A=!1;const R=()=>{P(),A=!0},F=()=>{I(),A=!1};return a(sl(D,w),R,F)}},CI=(r,e,t,n,s,a,l)=>(u,f)=>{const d=u.createWaveShaper();if(a!==null&&a.name==="webkitAudioContext"&&u.createGain().gain.automationRate===void 0)return t(u,f);Cn(d,f);const h=f.curve===null||f.curve instanceof Float32Array?f.curve:new Float32Array(f.curve);if(h!==null&&h.length<2)throw e();Vt(d,{curve:h},"curve"),Vt(d,f,"oversample");let m=null,g=!1;return l(d,"curve",M=>()=>M.call(d),M=>x=>(M.call(d,x),g&&(n(x)&&m===null?m=r(u,d):!n(x)&&m!==null&&(m(),m=null)),x)),s(d,()=>{g=!0,n(d.curve)&&(m=r(u,d))},()=>{g=!1,m!==null&&(m(),m=null)})},AI=(r,e,t,n,s)=>(a,{curve:l,oversample:u,...f})=>{const d=a.createWaveShaper(),h=a.createWaveShaper();Cn(d,f),Cn(h,f);const m=t(a,{...f,gain:1}),g=t(a,{...f,gain:-1}),_=t(a,{...f,gain:1}),S=t(a,{...f,gain:-1});let M=null,x=!1,v=null;const b={get bufferSize(){},get channelCount(){return d.channelCount},set channelCount(C){m.channelCount=C,g.channelCount=C,d.channelCount=C,_.channelCount=C,h.channelCount=C,S.channelCount=C},get channelCountMode(){return d.channelCountMode},set channelCountMode(C){m.channelCountMode=C,g.channelCountMode=C,d.channelCountMode=C,_.channelCountMode=C,h.channelCountMode=C,S.channelCountMode=C},get channelInterpretation(){return d.channelInterpretation},set channelInterpretation(C){m.channelInterpretation=C,g.channelInterpretation=C,d.channelInterpretation=C,_.channelInterpretation=C,h.channelInterpretation=C,S.channelInterpretation=C},get context(){return d.context},get curve(){return v},set curve(C){if(C!==null&&C.length<2)throw e();if(C===null)d.curve=C,h.curve=C;else{const P=C.length,I=new Float32Array(P+2-P%2),D=new Float32Array(P+2-P%2);I[0]=C[0],D[0]=-C[P-1];const A=Math.ceil((P+1)/2),R=(P+1)/2-1;for(let F=1;F<A;F+=1){const O=F/A*R,B=Math.floor(O),G=Math.ceil(O);I[F]=B===G?C[B]:(1-(O-B))*C[B]+(1-(G-O))*C[G],D[F]=B===G?-C[P-1-B]:-((1-(O-B))*C[P-1-B])-(1-(G-O))*C[P-1-G]}I[A]=P%2===1?C[A-1]:(C[A-2]+C[A-1])/2,d.curve=I,h.curve=D}v=C,x&&(n(v)&&M===null?M=r(a,m):M!==null&&(M(),M=null))},get inputs(){return[m]},get numberOfInputs(){return d.numberOfInputs},get numberOfOutputs(){return d.numberOfOutputs},get oversample(){return d.oversample},set oversample(C){d.oversample=C,h.oversample=C},addEventListener(...C){return m.addEventListener(C[0],C[1],C[2])},dispatchEvent(...C){return m.dispatchEvent(C[0])},removeEventListener(...C){return m.removeEventListener(C[0],C[1],C[2])}};l!==null&&(b.curve=l instanceof Float32Array?l:new Float32Array(l)),u!==b.oversample&&(b.oversample=u);const w=()=>{m.connect(d).connect(_),m.connect(g).connect(h).connect(S).connect(_),x=!0,n(v)&&(M=r(a,m))},T=()=>{m.disconnect(d),d.disconnect(_),m.disconnect(g),g.disconnect(h),h.disconnect(S),S.disconnect(_),x=!1,M!==null&&(M(),M=null)};return s(sl(b,_),w,T)},Wi=()=>new DOMException("","NotSupportedError"),RI={numberOfChannels:1},bI=(r,e,t,n,s)=>class extends r{constructor(l,u,f){let d;if(typeof l=="number"&&u!==void 0&&f!==void 0)d={length:u,numberOfChannels:l,sampleRate:f};else if(typeof l=="object")d=l;else throw new Error("The given parameters are not valid.");const{length:h,numberOfChannels:m,sampleRate:g}={...RI,...d},_=n(m,h,g);e(fu,()=>fu(_))||_.addEventListener("statechange",(()=>{let S=0;const M=x=>{this._state==="running"&&(S>0?(_.removeEventListener("statechange",M),x.stopImmediatePropagation(),this._waitForThePromiseToSettle(x)):S+=1)};return M})()),super(_,m),this._length=h,this._nativeOfflineAudioContext=_,this._state=null}get length(){return this._nativeOfflineAudioContext.length===void 0?this._length:this._nativeOfflineAudioContext.length}get state(){return this._state===null?this._nativeOfflineAudioContext.state:this._state}startRendering(){return this._state==="running"?Promise.reject(t()):(this._state="running",s(this.destination,this._nativeOfflineAudioContext).finally(()=>{this._state=null,I2(this)}))}_waitForThePromiseToSettle(l){this._state===null?this._nativeOfflineAudioContext.dispatchEvent(l):setTimeout(()=>this._waitForThePromiseToSettle(l))}},PI={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",detune:0,frequency:440,periodicWave:void 0,type:"sine"},DI=(r,e,t,n,s,a,l)=>class extends r{constructor(f,d){const h=s(f),m={...PI,...d},g=t(h,m),_=a(h),S=_?n():null,M=f.sampleRate/2;super(f,!1,g,S),this._detune=e(this,_,g.detune,153600,-153600),this._frequency=e(this,_,g.frequency,M,-M),this._nativeOscillatorNode=g,this._onended=null,this._oscillatorNodeRenderer=S,this._oscillatorNodeRenderer!==null&&m.periodicWave!==void 0&&(this._oscillatorNodeRenderer.periodicWave=m.periodicWave)}get detune(){return this._detune}get frequency(){return this._frequency}get onended(){return this._onended}set onended(f){const d=typeof f=="function"?l(this,f):null;this._nativeOscillatorNode.onended=d;const h=this._nativeOscillatorNode.onended;this._onended=h!==null&&h===d?f:h}get type(){return this._nativeOscillatorNode.type}set type(f){this._nativeOscillatorNode.type=f,this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=null)}setPeriodicWave(f){this._nativeOscillatorNode.setPeriodicWave(f),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=f)}start(f=0){if(this._nativeOscillatorNode.start(f),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.start=f),this.context.state!=="closed"){Ka(this);const d=()=>{this._nativeOscillatorNode.removeEventListener("ended",d),Zr(this)&&mu(this)};this._nativeOscillatorNode.addEventListener("ended",d)}}stop(f=0){this._nativeOscillatorNode.stop(f),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.stop=f)}},II=(r,e,t,n,s)=>()=>{const a=new WeakMap;let l=null,u=null,f=null;const d=async(h,m)=>{let g=t(h);const _=ei(g,m);if(!_){const S={channelCount:g.channelCount,channelCountMode:g.channelCountMode,channelInterpretation:g.channelInterpretation,detune:g.detune.value,frequency:g.frequency.value,periodicWave:l===null?void 0:l,type:g.type};g=e(m,S),u!==null&&g.start(u),f!==null&&g.stop(f)}return a.set(m,g),_?(await r(m,h.detune,g.detune),await r(m,h.frequency,g.frequency)):(await n(m,h.detune,g.detune),await n(m,h.frequency,g.frequency)),await s(h,m,g),g};return{set periodicWave(h){l=h},set start(h){u=h},set stop(h){f=h},render(h,m){const g=a.get(m);return g!==void 0?Promise.resolve(g):d(h,m)}}},NI={channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",coneInnerAngle:360,coneOuterAngle:360,coneOuterGain:0,distanceModel:"inverse",maxDistance:1e4,orientationX:1,orientationY:0,orientationZ:0,panningModel:"equalpower",positionX:0,positionY:0,positionZ:0,refDistance:1,rolloffFactor:1},LI=(r,e,t,n,s,a,l)=>class extends r{constructor(f,d){const h=s(f),m={...NI,...d},g=t(h,m),_=a(h),S=_?n():null;super(f,!1,g,S),this._nativePannerNode=g,this._orientationX=e(this,_,g.orientationX,li,Hi),this._orientationY=e(this,_,g.orientationY,li,Hi),this._orientationZ=e(this,_,g.orientationZ,li,Hi),this._positionX=e(this,_,g.positionX,li,Hi),this._positionY=e(this,_,g.positionY,li,Hi),this._positionZ=e(this,_,g.positionZ,li,Hi),l(this,1)}get coneInnerAngle(){return this._nativePannerNode.coneInnerAngle}set coneInnerAngle(f){this._nativePannerNode.coneInnerAngle=f}get coneOuterAngle(){return this._nativePannerNode.coneOuterAngle}set coneOuterAngle(f){this._nativePannerNode.coneOuterAngle=f}get coneOuterGain(){return this._nativePannerNode.coneOuterGain}set coneOuterGain(f){this._nativePannerNode.coneOuterGain=f}get distanceModel(){return this._nativePannerNode.distanceModel}set distanceModel(f){this._nativePannerNode.distanceModel=f}get maxDistance(){return this._nativePannerNode.maxDistance}set maxDistance(f){this._nativePannerNode.maxDistance=f}get orientationX(){return this._orientationX}get orientationY(){return this._orientationY}get orientationZ(){return this._orientationZ}get panningModel(){return this._nativePannerNode.panningModel}set panningModel(f){this._nativePannerNode.panningModel=f}get positionX(){return this._positionX}get positionY(){return this._positionY}get positionZ(){return this._positionZ}get refDistance(){return this._nativePannerNode.refDistance}set refDistance(f){this._nativePannerNode.refDistance=f}get rolloffFactor(){return this._nativePannerNode.rolloffFactor}set rolloffFactor(f){this._nativePannerNode.rolloffFactor=f}},FI=(r,e,t,n,s,a,l,u,f,d)=>()=>{const h=new WeakMap;let m=null;const g=async(_,S)=>{let M=null,x=a(_);const v={channelCount:x.channelCount,channelCountMode:x.channelCountMode,channelInterpretation:x.channelInterpretation},b={...v,coneInnerAngle:x.coneInnerAngle,coneOuterAngle:x.coneOuterAngle,coneOuterGain:x.coneOuterGain,distanceModel:x.distanceModel,maxDistance:x.maxDistance,panningModel:x.panningModel,refDistance:x.refDistance,rolloffFactor:x.rolloffFactor},w=ei(x,S);if("bufferSize"in x)M=n(S,{...v,gain:1});else if(!w){const T={...b,orientationX:x.orientationX.value,orientationY:x.orientationY.value,orientationZ:x.orientationZ.value,positionX:x.positionX.value,positionY:x.positionY.value,positionZ:x.positionZ.value};x=s(S,T)}if(h.set(S,M===null?x:M),M!==null){if(m===null){if(l===null)throw new Error("Missing the native OfflineAudioContext constructor.");const F=new l(6,_.context.length,S.sampleRate),O=e(F,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:6});O.connect(F.destination),m=(async()=>{const B=await Promise.all([_.orientationX,_.orientationY,_.orientationZ,_.positionX,_.positionY,_.positionZ].map(async(G,Z)=>{const q=t(F,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:Z===0?1:0});return await u(F,G,q.offset),q}));for(let G=0;G<6;G+=1)B[G].connect(O,0,G),B[G].start(0);return d(F)})()}const T=await m,C=n(S,{...v,gain:1});await f(_,S,C);const P=[];for(let F=0;F<T.numberOfChannels;F+=1)P.push(T.getChannelData(F));let I=[P[0][0],P[1][0],P[2][0]],D=[P[3][0],P[4][0],P[5][0]],A=n(S,{...v,gain:1}),R=s(S,{...b,orientationX:I[0],orientationY:I[1],orientationZ:I[2],positionX:D[0],positionY:D[1],positionZ:D[2]});C.connect(A).connect(R.inputs[0]),R.connect(M);for(let F=128;F<T.length;F+=128){const O=[P[0][F],P[1][F],P[2][F]],B=[P[3][F],P[4][F],P[5][F]];if(O.some((G,Z)=>G!==I[Z])||B.some((G,Z)=>G!==D[Z])){I=O,D=B;const G=F/S.sampleRate;A.gain.setValueAtTime(0,G),A=n(S,{...v,gain:0}),R=s(S,{...b,orientationX:I[0],orientationY:I[1],orientationZ:I[2],positionX:D[0],positionY:D[1],positionZ:D[2]}),A.gain.setValueAtTime(1,G),C.connect(A).connect(R.inputs[0]),R.connect(M)}}return M}return w?(await r(S,_.orientationX,x.orientationX),await r(S,_.orientationY,x.orientationY),await r(S,_.orientationZ,x.orientationZ),await r(S,_.positionX,x.positionX),await r(S,_.positionY,x.positionY),await r(S,_.positionZ,x.positionZ)):(await u(S,_.orientationX,x.orientationX),await u(S,_.orientationY,x.orientationY),await u(S,_.orientationZ,x.orientationZ),await u(S,_.positionX,x.positionX),await u(S,_.positionY,x.positionY),await u(S,_.positionZ,x.positionZ)),rl(x)?await f(_,S,x.inputs[0]):await f(_,S,x),x};return{render(_,S){const M=h.get(S);return M!==void 0?Promise.resolve(M):g(_,S)}}},UI={disableNormalization:!1},OI=(r,e,t,n)=>class FS{constructor(a,l){const u=e(a),f=n({...UI,...l}),d=r(u,f);return t.add(d),d}static[Symbol.hasInstance](a){return a!==null&&typeof a=="object"&&Object.getPrototypeOf(a)===FS.prototype||t.has(a)}},kI=(r,e)=>(t,n,s)=>(r(n).replay(s),e(n,t,s)),zI=(r,e,t)=>async(n,s,a)=>{const l=r(n);await Promise.all(l.activeInputs.map((u,f)=>Array.from(u).map(async([d,h])=>{const g=await e(d).render(d,s),_=n.context.destination;!t(d)&&(n!==_||!t(n))&&g.connect(a,h,f)})).reduce((u,f)=>[...u,...f],[]))},BI=(r,e,t)=>async(n,s,a)=>{const l=e(n);await Promise.all(Array.from(l.activeInputs).map(async([u,f])=>{const h=await r(u).render(u,s);t(u)||h.connect(a,f)}))},VI=(r,e,t,n)=>s=>r(fu,()=>fu(s))?Promise.resolve(r(n,n)).then(a=>{if(!a){const l=t(s,512,0,1);s.oncomplete=()=>{l.onaudioprocess=null,l.disconnect()},l.onaudioprocess=()=>s.currentTime,l.connect(s.destination)}return s.startRendering()}):new Promise(a=>{const l=e(s,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});s.oncomplete=u=>{l.disconnect(),a(u.renderedBuffer)},l.connect(s.destination),s.startRendering()}),HI=r=>(e,t)=>r.set(e,t),GI=(r,e,t,n,s,a,l,u)=>(f,d)=>t(f).render(f,d).then(()=>Promise.all(Array.from(n(d)).map(h=>t(h).render(h,d)))).then(()=>s(d)).then(h=>(typeof h.copyFromChannel!="function"?(l(h),ng(h)):e(a,()=>a(h))||u(h),r.add(h),h)),WI={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers",pan:0},XI=(r,e,t,n,s,a)=>class extends r{constructor(u,f){const d=s(u),h={...WI,...f},m=t(d,h),g=a(d),_=g?n():null;super(u,!1,m,_),this._pan=e(this,g,m.pan)}get pan(){return this._pan}},qI=(r,e,t,n,s)=>()=>{const a=new WeakMap,l=async(u,f)=>{let d=t(u);const h=ei(d,f);if(!h){const m={channelCount:d.channelCount,channelCountMode:d.channelCountMode,channelInterpretation:d.channelInterpretation,pan:d.pan.value};d=e(f,m)}return a.set(f,d),h?await r(f,u.pan,d.pan):await n(f,u.pan,d.pan),rl(d)?await s(u,f,d.inputs[0]):await s(u,f,d),d};return{render(u,f){const d=a.get(f);return d!==void 0?Promise.resolve(d):l(u,f)}}},YI=r=>()=>{if(r===null)return!1;try{new r({length:1,sampleRate:44100})}catch{return!1}return!0},jI=(r,e)=>async()=>{if(r===null)return!0;if(e===null)return!1;const t=new Blob(['class A extends AudioWorkletProcessor{process(i){this.port.postMessage(i,[i[0][0].buffer])}}registerProcessor("a",A)'],{type:"application/javascript; charset=utf-8"}),n=new e(1,128,44100),s=URL.createObjectURL(t);let a=!1,l=!1;try{await n.audioWorklet.addModule(s);const u=new r(n,"a",{numberOfOutputs:0}),f=n.createOscillator();u.port.onmessage=()=>a=!0,u.onprocessorerror=()=>l=!0,f.connect(u),f.start(0),await n.startRendering(),await new Promise(d=>setTimeout(d))}catch{}finally{URL.revokeObjectURL(s)}return a&&!l},$I=(r,e)=>()=>{if(e===null)return Promise.resolve(!1);const t=new e(1,1,44100),n=r(t,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});return new Promise(s=>{t.oncomplete=()=>{n.disconnect(),s(t.currentTime!==0)},t.startRendering()})},ZI={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",curve:null,oversample:"none"},KI=(r,e,t,n,s,a,l)=>class extends r{constructor(f,d){const h=s(f),m={...ZI,...d},g=t(h,m),S=a(h)?n():null;super(f,!0,g,S),this._isCurveNullified=!1,this._nativeWaveShaperNode=g,l(this,1)}get curve(){return this._isCurveNullified?null:this._nativeWaveShaperNode.curve}set curve(f){if(f===null)this._isCurveNullified=!0,this._nativeWaveShaperNode.curve=new Float32Array([0,0]);else{if(f.length<2)throw e();this._isCurveNullified=!1,this._nativeWaveShaperNode.curve=f}}get oversample(){return this._nativeWaveShaperNode.oversample}set oversample(f){this._nativeWaveShaperNode.oversample=f}},QI=(r,e,t)=>()=>{const n=new WeakMap,s=async(a,l)=>{let u=e(a);if(!ei(u,l)){const d={channelCount:u.channelCount,channelCountMode:u.channelCountMode,channelInterpretation:u.channelInterpretation,curve:u.curve,oversample:u.oversample};u=r(l,d)}return n.set(l,u),rl(u)?await t(a,l,u.inputs[0]):await t(a,l,u),u};return{render(a,l){const u=n.get(l);return u!==void 0?Promise.resolve(u):s(a,l)}}},JI=()=>typeof window>"u"?null:window,eN=(r,e)=>t=>{t.copyFromChannel=(n,s,a=0)=>{const l=r(a),u=r(s);if(u>=t.numberOfChannels)throw e();const f=t.length,d=t.getChannelData(u),h=n.length;for(let m=l<0?-l:0;m+l<f&&m<h;m+=1)n[m]=d[m+l]},t.copyToChannel=(n,s,a=0)=>{const l=r(a),u=r(s);if(u>=t.numberOfChannels)throw e();const f=t.length,d=t.getChannelData(u),h=n.length;for(let m=l<0?-l:0;m+l<f&&m<h;m+=1)d[m+l]=n[m]}},tN=r=>e=>{e.copyFromChannel=(t=>(n,s,a=0)=>{const l=r(a),u=r(s);if(l<e.length)return t.call(e,n,u,l)})(e.copyFromChannel),e.copyToChannel=(t=>(n,s,a=0)=>{const l=r(a),u=r(s);if(l<e.length)return t.call(e,n,u,l)})(e.copyToChannel)},nN=r=>(e,t)=>{const n=t.createBuffer(1,1,44100);e.buffer===null&&(e.buffer=n),r(e,"buffer",s=>()=>{const a=s.call(e);return a===n?null:a},s=>a=>s.call(e,a===null?n:a))},iN=(r,e)=>(t,n)=>{n.channelCount=1,n.channelCountMode="explicit",Object.defineProperty(n,"channelCount",{get:()=>1,set:()=>{throw r()}}),Object.defineProperty(n,"channelCountMode",{get:()=>"explicit",set:()=>{throw r()}});const s=t.createBufferSource();e(n,()=>{const u=n.numberOfInputs;for(let f=0;f<u;f+=1)s.connect(n,0,f)},()=>s.disconnect(n))},US=(r,e,t)=>r.copyFromChannel===void 0?r.getChannelData(t)[0]:(r.copyFromChannel(e,t),e[0]),OS=r=>{if(r===null)return!1;const e=r.length;return e%2!==0?r[Math.floor(e/2)]!==0:r[e/2-1]+r[e/2]!==0},vu=(r,e,t,n)=>{let s=r;for(;!s.hasOwnProperty(e);)s=Object.getPrototypeOf(s);const{get:a,set:l}=Object.getOwnPropertyDescriptor(s,e);Object.defineProperty(r,e,{get:t(a),set:n(l)})},rN=r=>({...r,channelCount:r.numberOfOutputs}),sN=r=>{const{imag:e,real:t}=r;return e===void 0?t===void 0?{...r,imag:[0,0],real:[0,0]}:{...r,imag:Array.from(t,()=>0),real:t}:t===void 0?{...r,imag:e,real:Array.from(e,()=>0)}:{...r,imag:e,real:t}},kS=(r,e,t)=>{try{r.setValueAtTime(e,t)}catch(n){if(n.code!==9)throw n;kS(r,e,t+1e-7)}},oN=r=>{const e=r.createBufferSource();e.start();try{e.start()}catch{return!0}return!1},aN=r=>{const e=r.createBufferSource(),t=r.createBuffer(1,1,44100);e.buffer=t;try{e.start(0,1)}catch{return!1}return!0},lN=r=>{const e=r.createBufferSource();e.start();try{e.stop()}catch{return!1}return!0},lg=r=>{const e=r.createOscillator();try{e.start(-1)}catch(t){return t instanceof RangeError}return!1},zS=r=>{const e=r.createBuffer(1,1,44100),t=r.createBufferSource();t.buffer=e,t.start(),t.stop();try{return t.stop(),!0}catch{return!1}},ug=r=>{const e=r.createOscillator();try{e.stop(-1)}catch(t){return t instanceof RangeError}return!1},uN=r=>{r.start=(e=>(t=0,n=0,s)=>{const a=r.buffer,l=a===null?n:Math.min(a.duration,n);a!==null&&l>a.duration-.5/r.context.sampleRate?e.call(r,t,0,0):e.call(r,t,l,s)})(r.start)},BS=(r,e)=>{const t=e.createGain();r.connect(t);const n=(s=>()=>{s.call(r,t),r.removeEventListener("ended",n)})(r.disconnect);r.addEventListener("ended",n),sl(r,t),r.stop=(s=>{let a=!1;return(l=0)=>{if(a)try{s.call(r,l)}catch{t.gain.setValueAtTime(0,l)}else s.call(r,l),a=!0}})(r.stop)},yu=(r,e)=>t=>{const n={value:r};return Object.defineProperties(t,{currentTarget:n,target:n}),typeof e=="function"?e.call(r,t):e.handleEvent.call(r,t)},cN=c2(Oo),fN=g2(Oo),dN=xD(Of),VS=new WeakMap,hN=FD(VS),sr=K2(new Map,new WeakMap),Er=JI(),HS=tI(sr,Uo),cg=LD(Ri),Gn=zI(Ri,cg,No),pN=x2(HS,jt,Gn),on=OD(ES),qs=yI(Er),en=ZD(qs),GS=new WeakMap,WS=RD(yu),Bf=sI(Er),XS=qD(Bf),qS=YD(Er),mN=jD(Er),vm=aI(Er),Wn=W2(f2(yS),m2(cN,fN,Cf,dN,Af,Ri,hN,pu,jt,Oo,Zr,No,ff),sr,XD(mm,Af,Ri,jt,cu,Zr),Uo,kf,Wi,gD(Cf,mm,Ri,jt,cu,on,Zr,en),MD(GS,Ri,Xs),WS,on,XS,qS,mN,en,vm),gN=y2(Wn,pN,Uo,HS,on,en),fg=new WeakSet,Dy=nI(Er),YS=uD(new Uint32Array(1)),dg=eN(YS,Uo),hg=tN(YS),_N=M2(fg,sr,Wi,Dy,qs,YI(Dy),dg,hg),Vf=_2(rr),jS=BI(cg,gu,No),ts=rD(jS),xu=rI(Vf,sr,oN,aN,lN,lg,zS,ug,uN,nN(vu),BS),ns=kI(UD(gu),jS),vN=w2(ts,xu,jt,ns,Gn),Tr=X2(d2(SS),GS,MS,q2,r2,s2,o2,a2,l2,dm,_S,Bf,kS),yN=T2(Wn,vN,Tr,mi,xu,on,en,yu),xN=N2(Wn,L2,Uo,mi,oI(rr,vu),on,en,Gn),SN=Z2(ts,NS,jt,ns,Gn),ko=HI(VS),MN=$2(Wn,Tr,SN,kf,NS,on,en,ko),ol=JD(Oo,qS),EN=iN(mi,ol),al=uI(Bf,EN),TN=eD(al,jt,Gn),wN=J2(Wn,TN,al,on,en),CN=iD(ag,jt,Gn),AN=nD(Wn,CN,ag,on,en,rN),RN=dI(Vf,xu,rr,ol),Hf=fI(Vf,sr,RN,lg,ug),bN=lD(ts,Hf,jt,ns,Gn),PN=aD(Wn,Tr,bN,Hf,on,en,yu),$S=hI(Wi,vu),DN=dD($S,jt,Gn),IN=fD(Wn,DN,$S,on,en,ko),NN=yD(ts,LS,jt,ns,Gn),LN=vD(Wn,Tr,NN,LS,on,en,ko),ZS=pI(Wi),FN=wD(ts,ZS,jt,ns,Gn),UN=TD(Wn,Tr,FN,ZS,Wi,on,en,ko),ON=ND(ts,rr,jt,ns,Gn),kN=ID(Wn,Tr,ON,rr,on,en),zN=vI(kf,mi,zf,Wi),pg=VI(sr,rr,zf,$I(rr,qs)),BN=WD(xu,jt,qs,Gn,pg),VN=mI(zN),HN=HD(Wn,VN,BN,on,en,ko),GN=F2(Tr,al,Hf,zf,Wi,US,en,vu),KS=new WeakMap,WN=QD(xN,GN,WS,en,KS,yu),QS=xI(Vf,sr,lg,zS,ug,BS),XN=II(ts,QS,jt,ns,Gn),qN=DI(Wn,Tr,QS,XN,on,en,yu),JS=sD(xu),YN=AI(JS,mi,rr,OS,ol),Gf=CI(JS,mi,YN,OS,ol,Bf,vu),jN=MI(Cf,mi,al,rr,zf,Gf,Wi,Af,US,ol),eM=SI(jN),$N=FI(ts,al,Hf,rr,eM,jt,qs,ns,Gn,pg),ZN=LI(Wn,Tr,eM,$N,on,en,ko),KN=EI(Uo),QN=OI(KN,on,new WeakSet,sN),JN=wI(al,ag,rr,Gf,Wi,ol),tM=TI(JN,Wi),e3=qI(ts,tM,jt,ns,Gn),t3=XI(Wn,Tr,tM,e3,on,en),n3=QI(Gf,jt,Gn),i3=KI(Wn,mi,Gf,n3,on,en,ko),r3=KD(Er),s3=bD(Er),o3=new WeakMap,a3=kD(o3,qs),l3=r3?p2(sr,Wi,AD(Er),s3,PD(u2),on,a3,en,vm,new WeakMap,new WeakMap,jI(vm,qs),Er):void 0,u3=$D(XS,en),c3=mD(fg,sr,pD,CD,new WeakSet,on,u3,Tf,fu,dg,hg),f3=Y2(l3,gN,_N,yN,MN,wN,AN,PN,IN,c3,LN,UN,kN,HN,WN,qN,ZN,QN,t3,i3),d3=zD(KS),h3=hD(Wi,qs),p3=GI(fg,sr,cg,d3,pg,Tf,dg,hg),m3=bI(f3,sr,mi,h3,p3),Iy=(r,e,t)=>{const n=new m3(r.numberOfChannels,Math.round(t*r.sampleRate),r.sampleRate),s=n.createBiquadFilter(),a=n.createBufferSource();return s.frequency.value=240,s.type="lowpass",a.buffer=r,a.connect(s).connect(n.destination),a.start(0,e,t),n.startRendering().then(l=>{const u=l.getChannelData(0),f=l.sampleRate;return{channelData:u,sampleRate:f}})},g3=r=>{const e=new Worker(r),t=new Set;return{analyze:(...a)=>{var l;const[u,f,d]=a,h=typeof f=="number"?f:0,m=typeof d=="number"?d:u.duration-h,g=typeof f=="object"?f:typeof d=="object"?d:(l=a[3])!==null&&l!==void 0?l:null;return new Promise(async(_,S)=>{const{channelData:M,sampleRate:x}=await Iy(u,h,m),v=hy(t),b=({data:w})=>{w.id===v&&(t.delete(v),e.removeEventListener("message",b),w.error===null?_(w.result.tempo):S(new Error(w.error.message)))};e.addEventListener("message",b),e.postMessage({id:v,method:"analyze",params:{channelData:M,sampleRate:x,...g===null?g:{tempoSettings:g}}},[M.buffer])})},guess:(...a)=>{var l;const[u,f,d]=a,h=typeof f=="number"?f:0,m=typeof d=="number"?d:u.duration-h,g=typeof f=="object"?f:typeof d=="object"?d:(l=a[3])!==null&&l!==void 0?l:null;return new Promise(async(_,S)=>{const{channelData:M,sampleRate:x}=await Iy(u,h,m),v=hy(t),b=({data:w})=>{w.id===v&&(t.delete(v),e.removeEventListener("message",b),w.error===null?_(w.result):S(new Error(w.error.message)))};e.addEventListener("message",b),e.postMessage({id:v,method:"guess",params:{channelData:M,sampleRate:x,...g===null?g:{tempoSettings:g}}},[M.buffer])})}}},_3=(r,e)=>{let t=null;return()=>{if(t!==null)return t;const n=new Blob([e],{type:"application/javascript; charset=utf-8"}),s=URL.createObjectURL(n);return t=r(s),setTimeout(()=>URL.revokeObjectURL(s)),t}},v3=`(()=>{"use strict";const e=(e,t,s)=>{const o=e.length,n=[];let a=!1;for(let r=0;r<o;r+=1)e[r]>t?a=!0:a&&(a=!1,n.push(r-1),r+=s/4-1);return a&&n.push(o-1),n},t=(t,s,o)=>{const n=(e=>{let t=0;const s=e.length;for(let o=0;o<s;o+=1)e[o]>t&&(t=e[o]);return t})(t),a=.3*n;let r=[],l=n-.05*n;if(n>.25)for(;r.length<30&&l>=a;)r=e(t,l,s),l-=.05*n;const p=(e=>{const t=[];return e.forEach(((s,o)=>{const n=Math.min(e.length-o,10);for(let a=1;a<n;a+=1){const n=e[o+a]-s;t.some((e=>e.interval===n&&(e.peaks.push(s),!0)))||t.push({interval:n,peaks:[s]})}})),t})(r),h=((e,t,s={})=>{var o,n;const a=Math.max(0,null!==(o=s.maxTempo)&&void 0!==o?o:180),r=Math.max(0,null!==(n=s.minTempo)&&void 0!==n?n:90),l=[];return e.forEach((e=>{let s=60/(e.interval/t);for(;s<r;)s*=2;for(;s>a;)s/=2;if(s<r)return;let o=!1,n=e.peaks.length;l.forEach((t=>{if(t.tempo===s&&(t.score+=e.peaks.length,t.peaks=[...t.peaks,...e.peaks],o=!0),t.tempo>s-.5&&t.tempo<s+.5){const o=2*Math.abs(t.tempo-s);n+=(1-o)*t.peaks.length,t.score+=(1-o)*e.peaks.length}})),o||l.push({peaks:e.peaks,score:n,tempo:s})})),l})(p,s,o);return h.sort(((e,t)=>t.score-e.score)),h};addEventListener("message",(({data:e})=>{try{if("analyze"===e.method){const{id:s,params:{channelData:o,sampleRate:n,tempoSettings:a}}=e,r=((e,s,o)=>{const n=t(e,s,o);if(0===n.length)throw new Error("The given channelData does not contain any detectable beats.");return n[0].tempo})(o,n,a);postMessage({error:null,id:s,result:{tempo:r}})}else{if("guess"!==e.method)throw new Error('The given method "'.concat(e.method,'" is not supported'));{const{id:s,params:{channelData:o,sampleRate:n,tempoSettings:a}}=e,{bpm:r,offset:l,tempo:p}=((e,s,o)=>{const n=t(e,s,o);if(0===n.length)throw new Error("The given channelData does not contain any detectable beats.");const{peaks:a,tempo:r}=n[0],l=Math.round(r),p=60/l;a.sort(((e,t)=>e-t));let h=a[0]/s;for(;h>p;)h-=p;return{bpm:l,offset:h,tempo:r}})(o,n,a);postMessage({error:null,id:s,result:{bpm:r,offset:l,tempo:p}})}}}catch(t){postMessage({error:{message:t.message},id:e.id,result:null})}}))})();`,y3=_3(g3,v3),x3=(...r)=>y3().guess(...r);class S3 extends Lo{constructor(){super(),this.interval=500,this.intervalId=null,this.bpmValue=0}setBPM(e){this.interval=6e4/e,clearInterval(this.intervalId),this.intervalId=setInterval(this.updateBPM.bind(this),this.interval)}updateBPM(){this.dispatchEvent({type:"beat"})}async detectBPM(e){const{bpm:t}=await x3(e);this.setBPM(t),console.log(`BPM detected: ${t}`)}getBPMDuration(){return this.interval}}class M3{constructor(){this.frequencyArray=[],this.frequencyData={low:0,mid:0,high:0},this.isPlaying=!1,this.audioContext=null,this.analyser=null,this.dataArray=null,this.playlist=[],this.currentTrackIndex=0,this.currentTrackDuration=0,this.trackStartTime=0,this.pauseTime=0,this.maxDecibels=-6,this.minDecibels=-40,this.volume=this.dbToGain(-20),this.audioListener=new PT,this.masterGain=this.audioListener.context.createGain(),this.masterGain.connect(this.audioListener.getInput()),this.updateGain(),this.lowFrequency=60,this.midFrequency=250,this.highFrequency=2e3,this.bufferLength=0,this.initializeRandomPlaylist()}dbToGain(e){return Math.pow(10,e/20)}gainToDb(e){return 20*Math.log10(e)}getCurrentTime(){var e;return!this.audioContext||!((e=this.audio)!=null&&e.buffer)?0:Math.max(0,Math.min(this.isPlaying?this.audioContext.currentTime-this.trackStartTime:this.pauseTime-this.trackStartTime,this.currentTrackDuration))}updateGain(){const e=Math.min(this.volume,this.dbToGain(this.maxDecibels));this.masterGain.gain.setValueAtTime(e,this.audioListener.context.currentTime)}initializeRandomPlaylist(){const e=["audio/04ff5a619f64432b8d19788bfa31b114.mp3","audio/0f5d9291759b42d3b6ad2a59ffd0485a.mp3","audio/16953d87c47746cebe794688c19dd2d4.mp3","audio/1c8ce5b7066941f995efb0e4c5077302.mp3","audio/2044ef37dd834697ad70ddb1247a55df.mp3","audio/2214218bb27f4daf9f3130cc322177ed.mp3","audio/2240819062dc4fa7ab137700819ad362.mp3","audio/3a36c4f1232e447fb72fcc7298644c62.mp3","audio/50431fa7adde4a638a13e6f6ee781a1e.mp3","audio/5f55126cc5ce4c77bedf2e3545fadbbd.mp3","audio/5fdb7c14b3a449c88a7d1fdee5d24688.mp3","audio/6357bcceec5d4d059983370e8ae0a987.mp3","audio/6a913076c87c4b189cc56256d7f6feb0.mp3","audio/7832845695be4ceb8c3b6e19654b754f.mp3","audio/8eea22cc4f5d4596ae4a112073b0f763.mp3","audio/908f6f9a29ca4649a21071d268a8dfe1.mp3","audio/97dabd8a6678450eafff2ddb9ae64f92.mp3","audio/b9ad1dcfa365403e80021b204c454b4a.mp3","audio/bc419c955dc040fb992564302ee00da7.mp3","audio/bfe13561b76844bb9230682f6c900186.mp3","audio/c916bda2dbb04f8cac682ba817161374.mp3","audio/c9c995059374420588c1366a9ed2f442.mp3","audio/caf4a0d41cd44a9bb3210c8adc70f05a.mp3","audio/d515c0f897f04ad79344babae84a98ec.mp3","audio/d56efa13099f4324845bca901243c19c.mp3","audio/d83bb30e020b4b128f010c4937100d4e.mp3","audio/df1f7b0b3a50436689728c6894ee8543.mp3","audio/e1281d91f4494b908adcbef07e5ce588.mp3","audio/e2b677e4b1204a1cab36dd2708cd412a.mp3","audio/e4e2b0a4d9be4e8bb8e3402e277fcca7.mp3","audio/e63c33e1c39d4c9eb48c52e232cb2441.mp3","audio/ec58d76ae5c546218efcf7b1300b0e93.mp3","audio/ed816b7cd3924eb2a268f6065fab85da.mp3","audio/f2215a7ab26747e788613e0c6855ff05.mp3","audio/spotify_preview_aad44685e5f948b6b7546fe80a976ea8.mp3","audio/spotify_preview_bc86ec80bf1d4fb2b215df2e17b98e24.mp3"];this.playlist=e}async loadAudioBuffer(){return new Promise((e,t)=>{this.audio&&(this.audio.stop(),this.audio.disconnect(),this.audio=null),this.audio=new DT(this.audioListener),this.audio.setVolume(1),this.audio.gain.disconnect(),this.audio.gain.connect(this.masterGain),new AT().load(this.playlist[this.currentTrackIndex],n=>{this.audio.setBuffer(n),this.currentTrackDuration=n.duration,this.audio.setLoop(!1),this.audio.onEnded=()=>{this.nextTrack().catch(console.error)},this.analyser=new Sv(this.audio,1024),this.dataArray=new Uint8Array(this.analyser.analyser.frequencyBinCount),this.audioContext=this.audio.context,e()},null,t),this.analyser=new Sv(this.audio,1024),this.dataArray=new Uint8Array(this.analyser.analyser.frequencyBinCount)})}setVolume(e){const t=this.minDecibels+e*(this.maxDecibels-this.minDecibels);this.volume=this.dbToGain(t),this.updateGain()}async nextTrack(){const e=this.isPlaying;this.trackStartTime=0,this.pauseTime=0,this.currentTrackDuration=0,this.audio&&(this.audio.stop(),this.audio.disconnect(),this.isPlaying=!1),this.currentTrackIndex=(this.currentTrackIndex+1)%this.playlist.length,await this.loadAudioBuffer(),e&&await this.play()}async play(){var e;if(((e=this.audioContext)==null?void 0:e.state)==="suspended"&&await this.audioContext.resume(),this.audio.play(),this.isPlaying=!0,this.pauseTime>0){const t=this.audioContext.currentTime-this.pauseTime;this.trackStartTime+=t,this.pauseTime=0}else this.trackStartTime=this.audioContext.currentTime}pause(){this.audio.pause(),this.isPlaying=!1,this.pauseTime=this.audioContext.currentTime}collectAudioData(){this.analyser.getFrequencyData(),this.frequencyArray=this.analyser.data}analyzeFrequency(){const e=this.audioContext.sampleRate,t=d=>Math.floor(d*this.bufferLength/e),n=t(this.lowFrequency),s=t(this.midFrequency),a=t(this.midFrequency),l=t(this.highFrequency),u=t(this.highFrequency),f=this.bufferLength-1;this.frequencyData={low:this.normalizeValue(this.calculateAverage(n,s)),mid:this.normalizeValue(this.calculateAverage(a,l)),high:this.normalizeValue(this.calculateAverage(u,f))}}calculateAverage(e,t){let n=0;for(let s=e;s<=t;s++)n+=this.frequencyArray[s];return n/(t-e+1)}normalizeValue(e){return Te.clamp(e/256,0,1)}update(){this.isPlaying&&(this.collectAudioData(),this.analyzeFrequency())}getAnalyser(){var e;return(e=this.analyser)==null?void 0:e.analyser}}function E3({onPlay:r,onPause:e,onNext:t,isPlaying:n,isAudioReady:s,playlistLength:a,volume:l,onVolumeChange:u,progress:f}){return un.jsxs("div",{className:`absolute bottom-4 right-4 flex flex-col gap-3 items-end 
                      bg-black/50 backdrop-blur-sm p-3 border-2 border-cyan-electric/30
                      crt-overlay text-white`,children:["  ",un.jsx("div",{className:"w-64 h-1 bg-gray-900/80 rounded-sm",children:un.jsx("div",{className:"h-full bg-cyan-electric transition-[width] duration-100 ease-linear",style:{width:`${f}%`}})}),un.jsxs("div",{className:"flex gap-3 items-center",children:[un.jsxs("div",{className:"relative group",children:[un.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:l,onChange:d=>u(parseFloat(d.target.value)),className:`w-24 h-1 bg-gray-900/80 rounded-sm cursor-cyber
                               appearance-none slider-vertical-gradient
                               thumb:appearance-none thumb:h-3 thumb:w-2 
                               thumb:bg-magenta-neon thumb:border-2 
                               thumb:border-cyan-electric/50`}),un.jsxs("div",{className:`absolute -top-5 right-0 text-cyan-electric 
                                  text-xs font-mono pointer-events-none`,children:["VOL [",l.toFixed(2),"]"]})]}),un.jsxs("div",{className:"flex gap-2 items-center border-l-2 border-cyan-electric/20 pl-2",children:[un.jsx("button",{onClick:n?e:r,className:`px-3 py-1 border-2 border-cyan-electric/40 
                               text-cyan-electric hover:border-cyan-electric
                               hover:text-cyan-electric hover:bg-cyan-electric/10
                               font-mono text-xs tracking-wider
                               transition-all duration-200 ease-crt
                               disabled:text-cyan-electric/30`,disabled:!s,onKeyDown:d=>{d.key==="Enter"&&d.stopPropagation()},children:n?"[[ PAUSE ]]":"[[ PLAY ]]"}),un.jsxs("button",{onClick:t,className:`px-3 py-1 border-2 border-magenta-neon/40 
                               text-magenta-neon hover:border-magenta-neon 
                               hover:text-magenta-neon hover:bg-magenta-neon/10
                               font-mono text-xs tracking-wider
                               transition-all duration-200 ease-crt
                               disabled:text-magenta-neon/30`,disabled:a<=1,children:["NEXT_TRACK",">",">"]})]})]})]})}class T3{constructor(e=4,t=3){this.video=document.createElement("video"),this.video.src="/joke.mp4",this.video.loop=!1,this.video.muted=!1,this.videoTexture=new yT(this.video),this.videoTexture.minFilter=Tn,this.videoTexture.magFilter=Tn;const n=new Qr(e,t),s=new nu({map:this.videoTexture,transparent:!0,opacity:0});this.videoMesh=new ui(n,s);const a=new Qr(e,t*.25),l=document.createElement("canvas"),u=l.getContext("2d");l.width=512,l.height=128,u.fillStyle="#000",u.fillRect(0,0,l.width,l.height),u.font="bold 20px monospace",u.fillStyle="#ffffff",u.textAlign="center",u.textBaseline="middle";const f=["Noé: Tout le monde monte dans","l'arche par ordre alphabétique","","","Le zèbre qui a déjà les couilles dans l'eau:"],d=25,h=l.height/2-(f.length-1)*d/2;f.forEach((_,S)=>{u.fillText(_,l.width/2,h+S*d)});const m=new lx(l),g=new nu({map:m,transparent:!0,opacity:0});this.textMesh=new ui(a,g),this.group=new Xl,this.group.add(this.videoMesh),this.group.add(this.textMesh),this.videoMesh.position.y=-t*.1,this.textMesh.position.y=t*.6}setPosition(e,t,n){this.group.position.set(e,t,n)}setScale(e,t,n){this.group.scale.set(e,t,n)}show(){return this.video.currentTime=0,bt.to(this.videoMesh.material,{opacity:1,duration:.5}),bt.to(this.textMesh.material,{opacity:1,duration:.5}),this.video.play(),new Promise(e=>{this.video.onended=()=>{bt.to(this.videoMesh.material,{opacity:0,duration:.5}),bt.to(this.textMesh.material,{opacity:0,duration:.5,onComplete:e})}})}dispose(){this.videoMesh.geometry.dispose(),this.videoMesh.material.dispose(),this.textMesh.geometry.dispose(),this.textMesh.material.dispose(),this.videoTexture.dispose(),this.textMesh.material.map&&this.textMesh.material.map.dispose(),this.video.remove()}}function w3(){const[r,e]=Ft.useState(!1),t=Ft.useRef(null);Ft.useEffect(()=>{if(!window.scene)return;const s=new T3(6,4);return s.setPosition(-2,25,5),s.setScale(.8,.8,.8),s.group.rotation.x=-Math.PI/2,t.current=s,window.scene.add(s.group),()=>{window.scene.remove(s.group),s.dispose()}},[]);const n=async()=>{if(!r&&t.current){e(!0);try{await t.current.show()}finally{e(!1)}}};return un.jsx("button",{onClick:n,disabled:r,className:`fixed bottom-4 left-4 bg-black/80 backdrop-blur-sm
                     border-2 border-phosphorescent-green hover:border-cyan-electric
                     text-phosphorescent-green px-4 py-2 
                     font-mono text-sm tracking-wide
                     transition-all duration-300 ease-crt
                     disabled:opacity-40 disabled:cursor-not-allowed
                     shadow-[0_0_8px_rgba(51,255,51,0.3)]
                     hover:shadow-[0_0_12px_rgba(0,255,255,0.5)]
                     crt-overlay
                     !text-[#33ff33]`,children:"[//] BLAGUE.EXE"})}const C3=()=>{var R;const r=Ft.useRef(null),[e,t]=Ft.useState(0),[n,s]=Ft.useState(""),[a,l]=Ft.useState(.1),[u,f]=Ft.useState(0);Ft.useEffect(()=>{let F=0;const O=ep[e],B=setInterval(()=>{if(F<O.length){const G=O.substring(0,F+1);s(G),r.current&&r.current.updateText(G),F++}else clearInterval(B)},15);return()=>clearInterval(B)},[e]),Ft.useEffect(()=>{const F=O=>{O.key==="Enter"&&n.length===ep[e].length&&e<ep.length-1&&(t(B=>B+1),s(""))};return window.addEventListener("keypress",F),()=>window.removeEventListener("keypress",F)},[e,n]);const d=Ft.useRef(null),h=Ft.useRef(null),m=Ft.useRef(null),g=Ft.useRef(null),_=Ft.useRef(null),S=Ft.useRef(null),[M,x]=Ft.useState(!1),[v,b]=Ft.useState(!1),w=Ft.useRef(null),[T]=Ft.useState(()=>{const F=new M3;return F.maxDecibels=-3,F.minDecibels=-24,F}),[C]=Ft.useState(()=>new S3);Ft.useState({luminance:!1,distortion:!1,aberration:!1,scanlines:!1,glow:!1});const P=async()=>{var F;try{((F=T.audioContext)==null?void 0:F.state)==="suspended"&&await T.audioContext.resume(),await T.play(),w.current&&(w.current.connectAudio(T),w.current.resetMesh()),b(!0)}catch(O){console.error("Erreur lecture:",O)}},I=()=>{T.pause(),b(!1)},D=async()=>{var F,O;try{const B=v;B&&await T.pause(),await T.nextTrack(),f(0),(F=T.audio)!=null&&F.buffer&&await C.detectBPM(T.audio.buffer),B&&(((O=T.audioContext)==null?void 0:O.state)==="suspended"&&await T.audioContext.resume(),await T.play())}catch(B){console.error("Erreur changement piste:",B)}};Ft.useEffect(()=>((async()=>{var O;await T.loadAudioBuffer(),(O=T.audio)!=null&&O.buffer&&await C.detectBPM(T.audio.buffer),C.addEventListener("beat",()=>{var B,G;(G=(B=w.current)==null?void 0:B.onBPMBeat)==null||G.call(B)})})(),()=>{T.audio&&(T.audio.stop(),T.audio.disconnect())}),[T,C,T.currentTrackIndex]),Ft.useEffect(()=>{const F=new ox;window.scene=F,m.current=F,F.background=new ft(0);const O=new Vi(60,window.innerWidth/window.innerHeight,.1,1e3);O.position.z=5,O.position.y=30,O.rotation.x=-Math.PI/2,g.current=O;const B=new Db(8,6);B.setPosition(-2,25,5.5),B.mesh.rotation.x=-Math.PI/2,r.current=B,F.add(B.mesh),F.add(B.mesh);const G=new bb(d.current);h.current=G,G.init(F,O),x(!0);const Z=new jP({audioManager:T,bpmManager:C,camera:g.current});Z.init(),F.add(Z),w.current=Z;let q,$=0;const H=()=>{var J;if(q=requestAnimationFrame(H),T!=null&&T.isPlaying){T.update();const ee=Date.now();if(ee-$>=100){const z=T.getCurrentTime(),te=T.currentTrackDuration||1;f(z/te*100),$=ee}}(J=w.current)!=null&&J.update&&w.current.update(),G.render()};return H(),()=>{var J,ee;for(cancelAnimationFrame(q),r.current&&r.current.dispose(),_.current&&_.current.dispose(),S.current&&S.current.dispose(),h.current&&h.current.dispose(),w.current&&(w.current.destroyMesh(),(J=w.current.material)==null||J.dispose(),(ee=w.current.geometry)==null||ee.dispose(),F.remove(w.current));F.children.length>0;)F.remove(F.children[0]);delete window.scene}},[T,C]),Ft.useEffect(()=>{const F=()=>{var G,Z;if(!g.current||!h.current)return;const O=window.innerWidth,B=window.innerHeight;g.current.aspect=O/B,g.current.updateProjectionMatrix(),h.current.setSize(O,B),w.current&&((Z=(G=w.current).setResolution)==null||Z.call(G,O,B))};return window.addEventListener("resize",F),()=>window.removeEventListener("resize",F)},[]);const A=F=>{T.setVolume(F),l(F)};return un.jsxs("div",{className:"relative w-full h-full",children:[un.jsx("canvas",{ref:d,className:"absolute inset-0 w-full h-full"}),"/* Navbar unifiée en haut */}",M&&un.jsxs("div",{className:"absolute top-0 left-0 right-0 flex justify-between items-start pt-4 px-4 pb-0 backdrop-blur-sm border-cyan-electric/30 crt-overlay",children:[un.jsx(E3,{onPlay:P,onPause:I,onNext:D,isPlaying:v,isAudioReady:!!((R=T.audio)!=null&&R.buffer),playlistLength:T.playlist.length,volume:a,onVolumeChange:A,progress:u}),un.jsx(w3,{})]})]})};function A3(){return un.jsx("div",{className:"fixed inset-0 w-full h-full bg-black",children:un.jsx(C3,{})})}V1.createRoot(document.getElementById("root")).render(un.jsx(Ft.StrictMode,{children:un.jsx(A3,{})}));
