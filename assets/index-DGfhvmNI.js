(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();function O1(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Th={exports:{}},Vl={},Ch={exports:{}},gt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B0;function k1(){if(B0)return gt;B0=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),m=Symbol.iterator;function g(O){return O===null||typeof O!="object"?null:(O=m&&O[m]||O["@@iterator"],typeof O=="function"?O:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,M={};function x(O,Z,Ae){this.props=O,this.context=Z,this.refs=M,this.updater=Ae||_}x.prototype.isReactComponent={},x.prototype.setState=function(O,Z){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,Z,"setState")},x.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function v(){}v.prototype=x.prototype;function R(O,Z,Ae){this.props=O,this.context=Z,this.refs=M,this.updater=Ae||_}var b=R.prototype=new v;b.constructor=R,S(b,x.prototype),b.isPureReactComponent=!0;var w=Array.isArray,C=Object.prototype.hasOwnProperty,N={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function P(O,Z,Ae){var ne,ae={},Se=null,ge=null;if(Z!=null)for(ne in Z.ref!==void 0&&(ge=Z.ref),Z.key!==void 0&&(Se=""+Z.key),Z)C.call(Z,ne)&&!D.hasOwnProperty(ne)&&(ae[ne]=Z[ne]);var fe=arguments.length-2;if(fe===1)ae.children=Ae;else if(1<fe){for(var be=Array(fe),Ye=0;Ye<fe;Ye++)be[Ye]=arguments[Ye+2];ae.children=be}if(O&&O.defaultProps)for(ne in fe=O.defaultProps,fe)ae[ne]===void 0&&(ae[ne]=fe[ne]);return{$$typeof:r,type:O,key:Se,ref:ge,props:ae,_owner:N.current}}function T(O,Z){return{$$typeof:r,type:O.type,key:Z,ref:O.ref,props:O.props,_owner:O._owner}}function A(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function U(O){var Z={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Ae){return Z[Ae]})}var z=/\/+/g;function H(O,Z){return typeof O=="object"&&O!==null&&O.key!=null?U(""+O.key):Z.toString(36)}function q(O,Z,Ae,ne,ae){var Se=typeof O;(Se==="undefined"||Se==="boolean")&&(O=null);var ge=!1;if(O===null)ge=!0;else switch(Se){case"string":case"number":ge=!0;break;case"object":switch(O.$$typeof){case r:case e:ge=!0}}if(ge)return ge=O,ae=ae(ge),O=ne===""?"."+H(ge,0):ne,w(ae)?(Ae="",O!=null&&(Ae=O.replace(z,"$&/")+"/"),q(ae,Z,Ae,"",function(Ye){return Ye})):ae!=null&&(A(ae)&&(ae=T(ae,Ae+(!ae.key||ge&&ge.key===ae.key?"":(""+ae.key).replace(z,"$&/")+"/")+O)),Z.push(ae)),1;if(ge=0,ne=ne===""?".":ne+":",w(O))for(var fe=0;fe<O.length;fe++){Se=O[fe];var be=ne+H(Se,fe);ge+=q(Se,Z,Ae,be,ae)}else if(be=g(O),typeof be=="function")for(O=be.call(O),fe=0;!(Se=O.next()).done;)Se=Se.value,be=ne+H(Se,fe++),ge+=q(Se,Z,Ae,be,ae);else if(Se==="object")throw Z=String(O),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.");return ge}function ee(O,Z,Ae){if(O==null)return O;var ne=[],ae=0;return q(O,ne,"","",function(Se){return Z.call(Ae,Se,ae++)}),ne}function j(O){if(O._status===-1){var Z=O._result;Z=Z(),Z.then(function(Ae){(O._status===0||O._status===-1)&&(O._status=1,O._result=Ae)},function(Ae){(O._status===0||O._status===-1)&&(O._status=2,O._result=Ae)}),O._status===-1&&(O._status=0,O._result=Z)}if(O._status===1)return O._result.default;throw O._result}var Q={current:null},V={transition:null},G={ReactCurrentDispatcher:Q,ReactCurrentBatchConfig:V,ReactCurrentOwner:N};function Y(){throw Error("act(...) is not supported in production builds of React.")}return gt.Children={map:ee,forEach:function(O,Z,Ae){ee(O,function(){Z.apply(this,arguments)},Ae)},count:function(O){var Z=0;return ee(O,function(){Z++}),Z},toArray:function(O){return ee(O,function(Z){return Z})||[]},only:function(O){if(!A(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},gt.Component=x,gt.Fragment=t,gt.Profiler=s,gt.PureComponent=R,gt.StrictMode=n,gt.Suspense=f,gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G,gt.act=Y,gt.cloneElement=function(O,Z,Ae){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var ne=S({},O.props),ae=O.key,Se=O.ref,ge=O._owner;if(Z!=null){if(Z.ref!==void 0&&(Se=Z.ref,ge=N.current),Z.key!==void 0&&(ae=""+Z.key),O.type&&O.type.defaultProps)var fe=O.type.defaultProps;for(be in Z)C.call(Z,be)&&!D.hasOwnProperty(be)&&(ne[be]=Z[be]===void 0&&fe!==void 0?fe[be]:Z[be])}var be=arguments.length-2;if(be===1)ne.children=Ae;else if(1<be){fe=Array(be);for(var Ye=0;Ye<be;Ye++)fe[Ye]=arguments[Ye+2];ne.children=fe}return{$$typeof:r,type:O.type,key:ae,ref:Se,props:ne,_owner:ge}},gt.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:a,_context:O},O.Consumer=O},gt.createElement=P,gt.createFactory=function(O){var Z=P.bind(null,O);return Z.type=O,Z},gt.createRef=function(){return{current:null}},gt.forwardRef=function(O){return{$$typeof:l,render:O}},gt.isValidElement=A,gt.lazy=function(O){return{$$typeof:h,_payload:{_status:-1,_result:O},_init:j}},gt.memo=function(O,Z){return{$$typeof:d,type:O,compare:Z===void 0?null:Z}},gt.startTransition=function(O){var Z=V.transition;V.transition={};try{O()}finally{V.transition=Z}},gt.unstable_act=Y,gt.useCallback=function(O,Z){return Q.current.useCallback(O,Z)},gt.useContext=function(O){return Q.current.useContext(O)},gt.useDebugValue=function(){},gt.useDeferredValue=function(O){return Q.current.useDeferredValue(O)},gt.useEffect=function(O,Z){return Q.current.useEffect(O,Z)},gt.useId=function(){return Q.current.useId()},gt.useImperativeHandle=function(O,Z,Ae){return Q.current.useImperativeHandle(O,Z,Ae)},gt.useInsertionEffect=function(O,Z){return Q.current.useInsertionEffect(O,Z)},gt.useLayoutEffect=function(O,Z){return Q.current.useLayoutEffect(O,Z)},gt.useMemo=function(O,Z){return Q.current.useMemo(O,Z)},gt.useReducer=function(O,Z,Ae){return Q.current.useReducer(O,Z,Ae)},gt.useRef=function(O){return Q.current.useRef(O)},gt.useState=function(O){return Q.current.useState(O)},gt.useSyncExternalStore=function(O,Z,Ae){return Q.current.useSyncExternalStore(O,Z,Ae)},gt.useTransition=function(){return Q.current.useTransition()},gt.version="18.3.1",gt}var V0;function Em(){return V0||(V0=1,Ch.exports=k1()),Ch.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H0;function z1(){if(H0)return Vl;H0=1;var r=Em(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(l,f,d){var h,m={},g=null,_=null;d!==void 0&&(g=""+d),f.key!==void 0&&(g=""+f.key),f.ref!==void 0&&(_=f.ref);for(h in f)n.call(f,h)&&!a.hasOwnProperty(h)&&(m[h]=f[h]);if(l&&l.defaultProps)for(h in f=l.defaultProps,f)m[h]===void 0&&(m[h]=f[h]);return{$$typeof:e,type:l,key:g,ref:_,props:m,_owner:s.current}}return Vl.Fragment=t,Vl.jsx=c,Vl.jsxs=c,Vl}var G0;function B1(){return G0||(G0=1,Th.exports=z1()),Th.exports}var _e=B1(),Rt=Em();const Na=O1(Rt);var Du={},Ah={exports:{}},li={},bh={exports:{}},Rh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W0;function V1(){return W0||(W0=1,function(r){function e(V,G){var Y=V.length;V.push(G);e:for(;0<Y;){var O=Y-1>>>1,Z=V[O];if(0<s(Z,G))V[O]=G,V[Y]=Z,Y=O;else break e}}function t(V){return V.length===0?null:V[0]}function n(V){if(V.length===0)return null;var G=V[0],Y=V.pop();if(Y!==G){V[0]=Y;e:for(var O=0,Z=V.length,Ae=Z>>>1;O<Ae;){var ne=2*(O+1)-1,ae=V[ne],Se=ne+1,ge=V[Se];if(0>s(ae,Y))Se<Z&&0>s(ge,ae)?(V[O]=ge,V[Se]=Y,O=Se):(V[O]=ae,V[ne]=Y,O=ne);else if(Se<Z&&0>s(ge,Y))V[O]=ge,V[Se]=Y,O=Se;else break e}}return G}function s(V,G){var Y=V.sortIndex-G.sortIndex;return Y!==0?Y:V.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;r.unstable_now=function(){return a.now()}}else{var c=Date,l=c.now();r.unstable_now=function(){return c.now()-l}}var f=[],d=[],h=1,m=null,g=3,_=!1,S=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(V){for(var G=t(d);G!==null;){if(G.callback===null)n(d);else if(G.startTime<=V)n(d),G.sortIndex=G.expirationTime,e(f,G);else break;G=t(d)}}function w(V){if(M=!1,b(V),!S)if(t(f)!==null)S=!0,j(C);else{var G=t(d);G!==null&&Q(w,G.startTime-V)}}function C(V,G){S=!1,M&&(M=!1,v(P),P=-1),_=!0;var Y=g;try{for(b(G),m=t(f);m!==null&&(!(m.expirationTime>G)||V&&!U());){var O=m.callback;if(typeof O=="function"){m.callback=null,g=m.priorityLevel;var Z=O(m.expirationTime<=G);G=r.unstable_now(),typeof Z=="function"?m.callback=Z:m===t(f)&&n(f),b(G)}else n(f);m=t(f)}if(m!==null)var Ae=!0;else{var ne=t(d);ne!==null&&Q(w,ne.startTime-G),Ae=!1}return Ae}finally{m=null,g=Y,_=!1}}var N=!1,D=null,P=-1,T=5,A=-1;function U(){return!(r.unstable_now()-A<T)}function z(){if(D!==null){var V=r.unstable_now();A=V;var G=!0;try{G=D(!0,V)}finally{G?H():(N=!1,D=null)}}else N=!1}var H;if(typeof R=="function")H=function(){R(z)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,ee=q.port2;q.port1.onmessage=z,H=function(){ee.postMessage(null)}}else H=function(){x(z,0)};function j(V){D=V,N||(N=!0,H())}function Q(V,G){P=x(function(){V(r.unstable_now())},G)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(V){V.callback=null},r.unstable_continueExecution=function(){S||_||(S=!0,j(C))},r.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<V?Math.floor(1e3/V):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_getFirstCallbackNode=function(){return t(f)},r.unstable_next=function(V){switch(g){case 1:case 2:case 3:var G=3;break;default:G=g}var Y=g;g=G;try{return V()}finally{g=Y}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(V,G){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var Y=g;g=V;try{return G()}finally{g=Y}},r.unstable_scheduleCallback=function(V,G,Y){var O=r.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?O+Y:O):Y=O,V){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=Y+Z,V={id:h++,callback:G,priorityLevel:V,startTime:Y,expirationTime:Z,sortIndex:-1},Y>O?(V.sortIndex=Y,e(d,V),t(f)===null&&V===t(d)&&(M?(v(P),P=-1):M=!0,Q(w,Y-O))):(V.sortIndex=Z,e(f,V),S||_||(S=!0,j(C))),V},r.unstable_shouldYield=U,r.unstable_wrapCallback=function(V){var G=g;return function(){var Y=g;g=G;try{return V.apply(this,arguments)}finally{g=Y}}}}(Rh)),Rh}var X0;function H1(){return X0||(X0=1,bh.exports=V1()),bh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q0;function G1(){if(q0)return li;q0=1;var r=Em(),e=H1();function t(i){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+i,u=1;u<arguments.length;u++)o+="&args[]="+encodeURIComponent(arguments[u]);return"Minified React error #"+i+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n=new Set,s={};function a(i,o){c(i,o),c(i+"Capture",o)}function c(i,o){for(s[i]=o,i=0;i<o.length;i++)n.add(o[i])}var l=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,h={},m={};function g(i){return f.call(m,i)?!0:f.call(h,i)?!1:d.test(i)?m[i]=!0:(h[i]=!0,!1)}function _(i,o,u,p){if(u!==null&&u.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return p?!1:u!==null?!u.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function S(i,o,u,p){if(o===null||typeof o>"u"||_(i,o,u,p))return!0;if(p)return!1;if(u!==null)switch(u.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function M(i,o,u,p,y,E,I){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=p,this.attributeNamespace=y,this.mustUseProperty=u,this.propertyName=i,this.type=o,this.sanitizeURL=E,this.removeEmptyString=I}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){x[i]=new M(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var o=i[0];x[o]=new M(o,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){x[i]=new M(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){x[i]=new M(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){x[i]=new M(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){x[i]=new M(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){x[i]=new M(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){x[i]=new M(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){x[i]=new M(i,5,!1,i.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function R(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var o=i.replace(v,R);x[o]=new M(o,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var o=i.replace(v,R);x[o]=new M(o,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var o=i.replace(v,R);x[o]=new M(o,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){x[i]=new M(i,1,!1,i.toLowerCase(),null,!1,!1)}),x.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){x[i]=new M(i,1,!1,i.toLowerCase(),null,!0,!0)});function b(i,o,u,p){var y=x.hasOwnProperty(o)?x[o]:null;(y!==null?y.type!==0:p||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(S(o,u,y,p)&&(u=null),p||y===null?g(o)&&(u===null?i.removeAttribute(o):i.setAttribute(o,""+u)):y.mustUseProperty?i[y.propertyName]=u===null?y.type===3?!1:"":u:(o=y.attributeName,p=y.attributeNamespace,u===null?i.removeAttribute(o):(y=y.type,u=y===3||y===4&&u===!0?"":""+u,p?i.setAttributeNS(p,o,u):i.setAttribute(o,u))))}var w=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,C=Symbol.for("react.element"),N=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),P=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),U=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),q=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),Q=Symbol.for("react.offscreen"),V=Symbol.iterator;function G(i){return i===null||typeof i!="object"?null:(i=V&&i[V]||i["@@iterator"],typeof i=="function"?i:null)}var Y=Object.assign,O;function Z(i){if(O===void 0)try{throw Error()}catch(u){var o=u.stack.trim().match(/\n( *(at )?)/);O=o&&o[1]||""}return`
`+O+i}var Ae=!1;function ne(i,o){if(!i||Ae)return"";Ae=!0;var u=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(ue){var p=ue}Reflect.construct(i,[],o)}else{try{o.call()}catch(ue){p=ue}i.call(o.prototype)}else{try{throw Error()}catch(ue){p=ue}i()}}catch(ue){if(ue&&p&&typeof ue.stack=="string"){for(var y=ue.stack.split(`
`),E=p.stack.split(`
`),I=y.length-1,B=E.length-1;1<=I&&0<=B&&y[I]!==E[B];)B--;for(;1<=I&&0<=B;I--,B--)if(y[I]!==E[B]){if(I!==1||B!==1)do if(I--,B--,0>B||y[I]!==E[B]){var W=`
`+y[I].replace(" at new "," at ");return i.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",i.displayName)),W}while(1<=I&&0<=B);break}}}finally{Ae=!1,Error.prepareStackTrace=u}return(i=i?i.displayName||i.name:"")?Z(i):""}function ae(i){switch(i.tag){case 5:return Z(i.type);case 16:return Z("Lazy");case 13:return Z("Suspense");case 19:return Z("SuspenseList");case 0:case 2:case 15:return i=ne(i.type,!1),i;case 11:return i=ne(i.type.render,!1),i;case 1:return i=ne(i.type,!0),i;default:return""}}function Se(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case D:return"Fragment";case N:return"Portal";case T:return"Profiler";case P:return"StrictMode";case H:return"Suspense";case q:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case U:return(i.displayName||"Context")+".Consumer";case A:return(i._context.displayName||"Context")+".Provider";case z:var o=i.render;return i=i.displayName,i||(i=o.displayName||o.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case ee:return o=i.displayName||null,o!==null?o:Se(i.type)||"Memo";case j:o=i._payload,i=i._init;try{return Se(i(o))}catch{}}return null}function ge(i){var o=i.type;switch(i.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=o.render,i=i.displayName||i.name||"",o.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(o);case 8:return o===P?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function fe(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function be(i){var o=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function Ye(i){var o=be(i)?"checked":"value",u=Object.getOwnPropertyDescriptor(i.constructor.prototype,o),p=""+i[o];if(!i.hasOwnProperty(o)&&typeof u<"u"&&typeof u.get=="function"&&typeof u.set=="function"){var y=u.get,E=u.set;return Object.defineProperty(i,o,{configurable:!0,get:function(){return y.call(this)},set:function(I){p=""+I,E.call(this,I)}}),Object.defineProperty(i,o,{enumerable:u.enumerable}),{getValue:function(){return p},setValue:function(I){p=""+I},stopTracking:function(){i._valueTracker=null,delete i[o]}}}}function xt(i){i._valueTracker||(i._valueTracker=Ye(i))}function ct(i){if(!i)return!1;var o=i._valueTracker;if(!o)return!0;var u=o.getValue(),p="";return i&&(p=be(i)?i.checked?"true":"false":i.value),i=p,i!==u?(o.setValue(i),!0):!1}function Ut(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function X(i,o){var u=o.checked;return Y({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:u??i._wrapperState.initialChecked})}function jn(i,o){var u=o.defaultValue==null?"":o.defaultValue,p=o.checked!=null?o.checked:o.defaultChecked;u=fe(o.value!=null?o.value:u),i._wrapperState={initialChecked:p,initialValue:u,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function _t(i,o){o=o.checked,o!=null&&b(i,"checked",o,!1)}function pt(i,o){_t(i,o);var u=fe(o.value),p=o.type;if(u!=null)p==="number"?(u===0&&i.value===""||i.value!=u)&&(i.value=""+u):i.value!==""+u&&(i.value=""+u);else if(p==="submit"||p==="reset"){i.removeAttribute("value");return}o.hasOwnProperty("value")?Nt(i,o.type,u):o.hasOwnProperty("defaultValue")&&Nt(i,o.type,fe(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(i.defaultChecked=!!o.defaultChecked)}function Ze(i,o,u){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var p=o.type;if(!(p!=="submit"&&p!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+i._wrapperState.initialValue,u||o===i.value||(i.value=o),i.defaultValue=o}u=i.name,u!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,u!==""&&(i.name=u)}function Nt(i,o,u){(o!=="number"||Ut(i.ownerDocument)!==i)&&(u==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+u&&(i.defaultValue=""+u))}var Xe=Array.isArray;function k(i,o,u,p){if(i=i.options,o){o={};for(var y=0;y<u.length;y++)o["$"+u[y]]=!0;for(u=0;u<i.length;u++)y=o.hasOwnProperty("$"+i[u].value),i[u].selected!==y&&(i[u].selected=y),y&&p&&(i[u].defaultSelected=!0)}else{for(u=""+fe(u),o=null,y=0;y<i.length;y++){if(i[y].value===u){i[y].selected=!0,p&&(i[y].defaultSelected=!0);return}o!==null||i[y].disabled||(o=i[y])}o!==null&&(o.selected=!0)}}function L(i,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return Y({},o,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function le(i,o){var u=o.value;if(u==null){if(u=o.children,o=o.defaultValue,u!=null){if(o!=null)throw Error(t(92));if(Xe(u)){if(1<u.length)throw Error(t(93));u=u[0]}o=u}o==null&&(o=""),u=o}i._wrapperState={initialValue:fe(u)}}function me(i,o){var u=fe(o.value),p=fe(o.defaultValue);u!=null&&(u=""+u,u!==i.value&&(i.value=u),o.defaultValue==null&&i.defaultValue!==u&&(i.defaultValue=u)),p!=null&&(i.defaultValue=""+p)}function ye(i){var o=i.textContent;o===i._wrapperState.initialValue&&o!==""&&o!==null&&(i.value=o)}function he(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qe(i,o){return i==null||i==="http://www.w3.org/1999/xhtml"?he(o):i==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Re,Oe=function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,u,p,y){MSApp.execUnsafeLocalFunction(function(){return i(o,u,p,y)})}:i}(function(i,o){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=o;else{for(Re=Re||document.createElement("div"),Re.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=Re.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;o.firstChild;)i.appendChild(o.firstChild)}});function dt(i,o){if(o){var u=i.firstChild;if(u&&u===i.lastChild&&u.nodeType===3){u.nodeValue=o;return}}i.textContent=o}var we={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ze=["Webkit","ms","Moz","O"];Object.keys(we).forEach(function(i){ze.forEach(function(o){o=o+i.charAt(0).toUpperCase()+i.substring(1),we[o]=we[i]})});function Qe(i,o,u){return o==null||typeof o=="boolean"||o===""?"":u||typeof o!="number"||o===0||we.hasOwnProperty(i)&&we[i]?(""+o).trim():o+"px"}function nt(i,o){i=i.style;for(var u in o)if(o.hasOwnProperty(u)){var p=u.indexOf("--")===0,y=Qe(u,o[u],p);u==="float"&&(u="cssFloat"),p?i.setProperty(u,y):i[u]=y}}var Be=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mt(i,o){if(o){if(Be[i]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function st(i,o){if(i.indexOf("-")===-1)return typeof o.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pt=null;function K(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Pe=null,de=null,pe=null;function Le(i){if(i=Cl(i)){if(typeof Pe!="function")throw Error(t(280));var o=i.stateNode;o&&(o=qc(o),Pe(i.stateNode,i.type,o))}}function Ie(i){de?pe?pe.push(i):pe=[i]:de=i}function ot(){if(de){var i=de,o=pe;if(pe=de=null,Le(i),o)for(i=0;i<o.length;i++)Le(o[i])}}function kt(i,o){return i(o)}function hn(){}var wt=!1;function ni(i,o,u){if(wt)return i(o,u);wt=!0;try{return kt(i,o,u)}finally{wt=!1,(de!==null||pe!==null)&&(hn(),ot())}}function Yn(i,o){var u=i.stateNode;if(u===null)return null;var p=qc(u);if(p===null)return null;u=p[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(p=!p.disabled)||(i=i.type,p=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!p;break e;default:i=!1}if(i)return null;if(u&&typeof u!="function")throw Error(t(231,o,typeof u));return u}var Bo=!1;if(l)try{var ss={};Object.defineProperty(ss,"passive",{get:function(){Bo=!0}}),window.addEventListener("test",ss,ss),window.removeEventListener("test",ss,ss)}catch{Bo=!1}function Cr(i,o,u,p,y,E,I,B,W){var ue=Array.prototype.slice.call(arguments,3);try{o.apply(u,ue)}catch(xe){this.onError(xe)}}var Ar=!1,Ys=null,$s=!1,os=null,wc={onError:function(i){Ar=!0,Ys=i}};function Vo(i,o,u,p,y,E,I,B,W){Ar=!1,Ys=null,Cr.apply(wc,arguments)}function Tc(i,o,u,p,y,E,I,B,W){if(Vo.apply(this,arguments),Ar){if(Ar){var ue=Ys;Ar=!1,Ys=null}else throw Error(t(198));$s||($s=!0,os=ue)}}function ar(i){var o=i,u=i;if(i.alternate)for(;o.return;)o=o.return;else{i=o;do o=i,o.flags&4098&&(u=o.return),i=o.return;while(i)}return o.tag===3?u:null}function Cc(i){if(i.tag===13){var o=i.memoizedState;if(o===null&&(i=i.alternate,i!==null&&(o=i.memoizedState)),o!==null)return o.dehydrated}return null}function Ac(i){if(ar(i)!==i)throw Error(t(188))}function Yf(i){var o=i.alternate;if(!o){if(o=ar(i),o===null)throw Error(t(188));return o!==i?null:i}for(var u=i,p=o;;){var y=u.return;if(y===null)break;var E=y.alternate;if(E===null){if(p=y.return,p!==null){u=p;continue}break}if(y.child===E.child){for(E=y.child;E;){if(E===u)return Ac(y),i;if(E===p)return Ac(y),o;E=E.sibling}throw Error(t(188))}if(u.return!==p.return)u=y,p=E;else{for(var I=!1,B=y.child;B;){if(B===u){I=!0,u=y,p=E;break}if(B===p){I=!0,p=y,u=E;break}B=B.sibling}if(!I){for(B=E.child;B;){if(B===u){I=!0,u=E,p=y;break}if(B===p){I=!0,p=E,u=y;break}B=B.sibling}if(!I)throw Error(t(189))}}if(u.alternate!==p)throw Error(t(190))}if(u.tag!==3)throw Error(t(188));return u.stateNode.current===u?i:o}function bc(i){return i=Yf(i),i!==null?Rc(i):null}function Rc(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var o=Rc(i);if(o!==null)return o;i=i.sibling}return null}var Pc=e.unstable_scheduleCallback,F=e.unstable_cancelCallback,J=e.unstable_shouldYield,ce=e.unstable_requestPaint,re=e.unstable_now,te=e.unstable_getCurrentPriorityLevel,Ee=e.unstable_ImmediatePriority,De=e.unstable_UserBlockingPriority,Fe=e.unstable_NormalPriority,Ve=e.unstable_LowPriority,it=e.unstable_IdlePriority,tt=null,Ge=null;function St(i){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(tt,i,void 0,(i.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:Et,Kt=Math.log,Vt=Math.LN2;function Et(i){return i>>>=0,i===0?32:31-(Kt(i)/Vt|0)|0}var Ke=64,Qt=4194304;function vt(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function Nn(i,o){var u=i.pendingLanes;if(u===0)return 0;var p=0,y=i.suspendedLanes,E=i.pingedLanes,I=u&268435455;if(I!==0){var B=I&~y;B!==0?p=vt(B):(E&=I,E!==0&&(p=vt(E)))}else I=u&~y,I!==0?p=vt(I):E!==0&&(p=vt(E));if(p===0)return 0;if(o!==0&&o!==p&&!(o&y)&&(y=p&-p,E=o&-o,y>=E||y===16&&(E&4194240)!==0))return o;if(p&4&&(p|=u&16),o=i.entangledLanes,o!==0)for(i=i.entanglements,o&=p;0<o;)u=31-at(o),y=1<<u,p|=i[u],o&=~y;return p}function as(i,o){switch(i){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $n(i,o){for(var u=i.suspendedLanes,p=i.pingedLanes,y=i.expirationTimes,E=i.pendingLanes;0<E;){var I=31-at(E),B=1<<I,W=y[I];W===-1?(!(B&u)||B&p)&&(y[I]=as(B,o)):W<=o&&(i.expiredLanes|=B),E&=~B}}function br(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Lt(){var i=Ke;return Ke<<=1,!(Ke&4194240)&&(Ke=64),i}function In(i){for(var o=[],u=0;31>u;u++)o.push(i);return o}function yn(i,o,u){i.pendingLanes|=o,o!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,o=31-at(o),i[o]=u}function bn(i,o){var u=i.pendingLanes&~o;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=o,i.mutableReadLanes&=o,i.entangledLanes&=o,o=i.entanglements;var p=i.eventTimes;for(i=i.expirationTimes;0<u;){var y=31-at(u),E=1<<y;o[y]=0,p[y]=-1,i[y]=-1,u&=~E}}function xn(i,o){var u=i.entangledLanes|=o;for(i=i.entanglements;u;){var p=31-at(u),y=1<<p;y&o|i[p]&o&&(i[p]|=o),u&=~y}}var Tt=0;function lr(i){return i&=-i,1<i?4<i?i&268435455?16:536870912:4:1}var yg,$f,xg,Sg,Mg,Zf=!1,Dc=[],ls=null,cs=null,us=null,ul=new Map,fl=new Map,fs=[],oM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Eg(i,o){switch(i){case"focusin":case"focusout":ls=null;break;case"dragenter":case"dragleave":cs=null;break;case"mouseover":case"mouseout":us=null;break;case"pointerover":case"pointerout":ul.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":fl.delete(o.pointerId)}}function dl(i,o,u,p,y,E){return i===null||i.nativeEvent!==E?(i={blockedOn:o,domEventName:u,eventSystemFlags:p,nativeEvent:E,targetContainers:[y]},o!==null&&(o=Cl(o),o!==null&&$f(o)),i):(i.eventSystemFlags|=p,o=i.targetContainers,y!==null&&o.indexOf(y)===-1&&o.push(y),i)}function aM(i,o,u,p,y){switch(o){case"focusin":return ls=dl(ls,i,o,u,p,y),!0;case"dragenter":return cs=dl(cs,i,o,u,p,y),!0;case"mouseover":return us=dl(us,i,o,u,p,y),!0;case"pointerover":var E=y.pointerId;return ul.set(E,dl(ul.get(E)||null,i,o,u,p,y)),!0;case"gotpointercapture":return E=y.pointerId,fl.set(E,dl(fl.get(E)||null,i,o,u,p,y)),!0}return!1}function wg(i){var o=Zs(i.target);if(o!==null){var u=ar(o);if(u!==null){if(o=u.tag,o===13){if(o=Cc(u),o!==null){i.blockedOn=o,Mg(i.priority,function(){xg(u)});return}}else if(o===3&&u.stateNode.current.memoizedState.isDehydrated){i.blockedOn=u.tag===3?u.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Nc(i){if(i.blockedOn!==null)return!1;for(var o=i.targetContainers;0<o.length;){var u=Qf(i.domEventName,i.eventSystemFlags,o[0],i.nativeEvent);if(u===null){u=i.nativeEvent;var p=new u.constructor(u.type,u);Pt=p,u.target.dispatchEvent(p),Pt=null}else return o=Cl(u),o!==null&&$f(o),i.blockedOn=u,!1;o.shift()}return!0}function Tg(i,o,u){Nc(i)&&u.delete(o)}function lM(){Zf=!1,ls!==null&&Nc(ls)&&(ls=null),cs!==null&&Nc(cs)&&(cs=null),us!==null&&Nc(us)&&(us=null),ul.forEach(Tg),fl.forEach(Tg)}function hl(i,o){i.blockedOn===o&&(i.blockedOn=null,Zf||(Zf=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,lM)))}function pl(i){function o(y){return hl(y,i)}if(0<Dc.length){hl(Dc[0],i);for(var u=1;u<Dc.length;u++){var p=Dc[u];p.blockedOn===i&&(p.blockedOn=null)}}for(ls!==null&&hl(ls,i),cs!==null&&hl(cs,i),us!==null&&hl(us,i),ul.forEach(o),fl.forEach(o),u=0;u<fs.length;u++)p=fs[u],p.blockedOn===i&&(p.blockedOn=null);for(;0<fs.length&&(u=fs[0],u.blockedOn===null);)wg(u),u.blockedOn===null&&fs.shift()}var Ho=w.ReactCurrentBatchConfig,Ic=!0;function cM(i,o,u,p){var y=Tt,E=Ho.transition;Ho.transition=null;try{Tt=1,Kf(i,o,u,p)}finally{Tt=y,Ho.transition=E}}function uM(i,o,u,p){var y=Tt,E=Ho.transition;Ho.transition=null;try{Tt=4,Kf(i,o,u,p)}finally{Tt=y,Ho.transition=E}}function Kf(i,o,u,p){if(Ic){var y=Qf(i,o,u,p);if(y===null)md(i,o,p,Lc,u),Eg(i,p);else if(aM(y,i,o,u,p))p.stopPropagation();else if(Eg(i,p),o&4&&-1<oM.indexOf(i)){for(;y!==null;){var E=Cl(y);if(E!==null&&yg(E),E=Qf(i,o,u,p),E===null&&md(i,o,p,Lc,u),E===y)break;y=E}y!==null&&p.stopPropagation()}else md(i,o,p,null,u)}}var Lc=null;function Qf(i,o,u,p){if(Lc=null,i=K(p),i=Zs(i),i!==null)if(o=ar(i),o===null)i=null;else if(u=o.tag,u===13){if(i=Cc(o),i!==null)return i;i=null}else if(u===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null);return Lc=i,null}function Cg(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(te()){case Ee:return 1;case De:return 4;case Fe:case Ve:return 16;case it:return 536870912;default:return 16}default:return 16}}var ds=null,Jf=null,Fc=null;function Ag(){if(Fc)return Fc;var i,o=Jf,u=o.length,p,y="value"in ds?ds.value:ds.textContent,E=y.length;for(i=0;i<u&&o[i]===y[i];i++);var I=u-i;for(p=1;p<=I&&o[u-p]===y[E-p];p++);return Fc=y.slice(i,1<p?1-p:void 0)}function Uc(i){var o=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&o===13&&(i=13)):i=o,i===10&&(i=13),32<=i||i===13?i:0}function Oc(){return!0}function bg(){return!1}function yi(i){function o(u,p,y,E,I){this._reactName=u,this._targetInst=y,this.type=p,this.nativeEvent=E,this.target=I,this.currentTarget=null;for(var B in i)i.hasOwnProperty(B)&&(u=i[B],this[B]=u?u(E):E[B]);return this.isDefaultPrevented=(E.defaultPrevented!=null?E.defaultPrevented:E.returnValue===!1)?Oc:bg,this.isPropagationStopped=bg,this}return Y(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var u=this.nativeEvent;u&&(u.preventDefault?u.preventDefault():typeof u.returnValue!="unknown"&&(u.returnValue=!1),this.isDefaultPrevented=Oc)},stopPropagation:function(){var u=this.nativeEvent;u&&(u.stopPropagation?u.stopPropagation():typeof u.cancelBubble!="unknown"&&(u.cancelBubble=!0),this.isPropagationStopped=Oc)},persist:function(){},isPersistent:Oc}),o}var Go={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ed=yi(Go),ml=Y({},Go,{view:0,detail:0}),fM=yi(ml),td,nd,gl,kc=Y({},ml,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rd,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==gl&&(gl&&i.type==="mousemove"?(td=i.screenX-gl.screenX,nd=i.screenY-gl.screenY):nd=td=0,gl=i),td)},movementY:function(i){return"movementY"in i?i.movementY:nd}}),Rg=yi(kc),dM=Y({},kc,{dataTransfer:0}),hM=yi(dM),pM=Y({},ml,{relatedTarget:0}),id=yi(pM),mM=Y({},Go,{animationName:0,elapsedTime:0,pseudoElement:0}),gM=yi(mM),_M=Y({},Go,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),vM=yi(_M),yM=Y({},Go,{data:0}),Pg=yi(yM),xM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},SM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},MM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function EM(i){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(i):(i=MM[i])?!!o[i]:!1}function rd(){return EM}var wM=Y({},ml,{key:function(i){if(i.key){var o=xM[i.key]||i.key;if(o!=="Unidentified")return o}return i.type==="keypress"?(i=Uc(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?SM[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rd,charCode:function(i){return i.type==="keypress"?Uc(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Uc(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),TM=yi(wM),CM=Y({},kc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dg=yi(CM),AM=Y({},ml,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rd}),bM=yi(AM),RM=Y({},Go,{propertyName:0,elapsedTime:0,pseudoElement:0}),PM=yi(RM),DM=Y({},kc,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),NM=yi(DM),IM=[9,13,27,32],sd=l&&"CompositionEvent"in window,_l=null;l&&"documentMode"in document&&(_l=document.documentMode);var LM=l&&"TextEvent"in window&&!_l,Ng=l&&(!sd||_l&&8<_l&&11>=_l),Ig=" ",Lg=!1;function Fg(i,o){switch(i){case"keyup":return IM.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ug(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Wo=!1;function FM(i,o){switch(i){case"compositionend":return Ug(o);case"keypress":return o.which!==32?null:(Lg=!0,Ig);case"textInput":return i=o.data,i===Ig&&Lg?null:i;default:return null}}function UM(i,o){if(Wo)return i==="compositionend"||!sd&&Fg(i,o)?(i=Ag(),Fc=Jf=ds=null,Wo=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return Ng&&o.locale!=="ko"?null:o.data;default:return null}}var OM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Og(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o==="input"?!!OM[i.type]:o==="textarea"}function kg(i,o,u,p){Ie(p),o=Gc(o,"onChange"),0<o.length&&(u=new ed("onChange","change",null,u,p),i.push({event:u,listeners:o}))}var vl=null,yl=null;function kM(i){n_(i,0)}function zc(i){var o=$o(i);if(ct(o))return i}function zM(i,o){if(i==="change")return o}var zg=!1;if(l){var od;if(l){var ad="oninput"in document;if(!ad){var Bg=document.createElement("div");Bg.setAttribute("oninput","return;"),ad=typeof Bg.oninput=="function"}od=ad}else od=!1;zg=od&&(!document.documentMode||9<document.documentMode)}function Vg(){vl&&(vl.detachEvent("onpropertychange",Hg),yl=vl=null)}function Hg(i){if(i.propertyName==="value"&&zc(yl)){var o=[];kg(o,yl,i,K(i)),ni(kM,o)}}function BM(i,o,u){i==="focusin"?(Vg(),vl=o,yl=u,vl.attachEvent("onpropertychange",Hg)):i==="focusout"&&Vg()}function VM(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return zc(yl)}function HM(i,o){if(i==="click")return zc(o)}function GM(i,o){if(i==="input"||i==="change")return zc(o)}function WM(i,o){return i===o&&(i!==0||1/i===1/o)||i!==i&&o!==o}var qi=typeof Object.is=="function"?Object.is:WM;function xl(i,o){if(qi(i,o))return!0;if(typeof i!="object"||i===null||typeof o!="object"||o===null)return!1;var u=Object.keys(i),p=Object.keys(o);if(u.length!==p.length)return!1;for(p=0;p<u.length;p++){var y=u[p];if(!f.call(o,y)||!qi(i[y],o[y]))return!1}return!0}function Gg(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Wg(i,o){var u=Gg(i);i=0;for(var p;u;){if(u.nodeType===3){if(p=i+u.textContent.length,i<=o&&p>=o)return{node:u,offset:o-i};i=p}e:{for(;u;){if(u.nextSibling){u=u.nextSibling;break e}u=u.parentNode}u=void 0}u=Gg(u)}}function Xg(i,o){return i&&o?i===o?!0:i&&i.nodeType===3?!1:o&&o.nodeType===3?Xg(i,o.parentNode):"contains"in i?i.contains(o):i.compareDocumentPosition?!!(i.compareDocumentPosition(o)&16):!1:!1}function qg(){for(var i=window,o=Ut();o instanceof i.HTMLIFrameElement;){try{var u=typeof o.contentWindow.location.href=="string"}catch{u=!1}if(u)i=o.contentWindow;else break;o=Ut(i.document)}return o}function ld(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o&&(o==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||o==="textarea"||i.contentEditable==="true")}function XM(i){var o=qg(),u=i.focusedElem,p=i.selectionRange;if(o!==u&&u&&u.ownerDocument&&Xg(u.ownerDocument.documentElement,u)){if(p!==null&&ld(u)){if(o=p.start,i=p.end,i===void 0&&(i=o),"selectionStart"in u)u.selectionStart=o,u.selectionEnd=Math.min(i,u.value.length);else if(i=(o=u.ownerDocument||document)&&o.defaultView||window,i.getSelection){i=i.getSelection();var y=u.textContent.length,E=Math.min(p.start,y);p=p.end===void 0?E:Math.min(p.end,y),!i.extend&&E>p&&(y=p,p=E,E=y),y=Wg(u,E);var I=Wg(u,p);y&&I&&(i.rangeCount!==1||i.anchorNode!==y.node||i.anchorOffset!==y.offset||i.focusNode!==I.node||i.focusOffset!==I.offset)&&(o=o.createRange(),o.setStart(y.node,y.offset),i.removeAllRanges(),E>p?(i.addRange(o),i.extend(I.node,I.offset)):(o.setEnd(I.node,I.offset),i.addRange(o)))}}for(o=[],i=u;i=i.parentNode;)i.nodeType===1&&o.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<o.length;u++)i=o[u],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var qM=l&&"documentMode"in document&&11>=document.documentMode,Xo=null,cd=null,Sl=null,ud=!1;function jg(i,o,u){var p=u.window===u?u.document:u.nodeType===9?u:u.ownerDocument;ud||Xo==null||Xo!==Ut(p)||(p=Xo,"selectionStart"in p&&ld(p)?p={start:p.selectionStart,end:p.selectionEnd}:(p=(p.ownerDocument&&p.ownerDocument.defaultView||window).getSelection(),p={anchorNode:p.anchorNode,anchorOffset:p.anchorOffset,focusNode:p.focusNode,focusOffset:p.focusOffset}),Sl&&xl(Sl,p)||(Sl=p,p=Gc(cd,"onSelect"),0<p.length&&(o=new ed("onSelect","select",null,o,u),i.push({event:o,listeners:p}),o.target=Xo)))}function Bc(i,o){var u={};return u[i.toLowerCase()]=o.toLowerCase(),u["Webkit"+i]="webkit"+o,u["Moz"+i]="moz"+o,u}var qo={animationend:Bc("Animation","AnimationEnd"),animationiteration:Bc("Animation","AnimationIteration"),animationstart:Bc("Animation","AnimationStart"),transitionend:Bc("Transition","TransitionEnd")},fd={},Yg={};l&&(Yg=document.createElement("div").style,"AnimationEvent"in window||(delete qo.animationend.animation,delete qo.animationiteration.animation,delete qo.animationstart.animation),"TransitionEvent"in window||delete qo.transitionend.transition);function Vc(i){if(fd[i])return fd[i];if(!qo[i])return i;var o=qo[i],u;for(u in o)if(o.hasOwnProperty(u)&&u in Yg)return fd[i]=o[u];return i}var $g=Vc("animationend"),Zg=Vc("animationiteration"),Kg=Vc("animationstart"),Qg=Vc("transitionend"),Jg=new Map,e_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hs(i,o){Jg.set(i,o),a(o,[i])}for(var dd=0;dd<e_.length;dd++){var hd=e_[dd],jM=hd.toLowerCase(),YM=hd[0].toUpperCase()+hd.slice(1);hs(jM,"on"+YM)}hs($g,"onAnimationEnd"),hs(Zg,"onAnimationIteration"),hs(Kg,"onAnimationStart"),hs("dblclick","onDoubleClick"),hs("focusin","onFocus"),hs("focusout","onBlur"),hs(Qg,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ml="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$M=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ml));function t_(i,o,u){var p=i.type||"unknown-event";i.currentTarget=u,Tc(p,o,void 0,i),i.currentTarget=null}function n_(i,o){o=(o&4)!==0;for(var u=0;u<i.length;u++){var p=i[u],y=p.event;p=p.listeners;e:{var E=void 0;if(o)for(var I=p.length-1;0<=I;I--){var B=p[I],W=B.instance,ue=B.currentTarget;if(B=B.listener,W!==E&&y.isPropagationStopped())break e;t_(y,B,ue),E=W}else for(I=0;I<p.length;I++){if(B=p[I],W=B.instance,ue=B.currentTarget,B=B.listener,W!==E&&y.isPropagationStopped())break e;t_(y,B,ue),E=W}}}if($s)throw i=os,$s=!1,os=null,i}function zt(i,o){var u=o[Sd];u===void 0&&(u=o[Sd]=new Set);var p=i+"__bubble";u.has(p)||(i_(o,i,2,!1),u.add(p))}function pd(i,o,u){var p=0;o&&(p|=4),i_(u,i,p,o)}var Hc="_reactListening"+Math.random().toString(36).slice(2);function El(i){if(!i[Hc]){i[Hc]=!0,n.forEach(function(u){u!=="selectionchange"&&($M.has(u)||pd(u,!1,i),pd(u,!0,i))});var o=i.nodeType===9?i:i.ownerDocument;o===null||o[Hc]||(o[Hc]=!0,pd("selectionchange",!1,o))}}function i_(i,o,u,p){switch(Cg(o)){case 1:var y=cM;break;case 4:y=uM;break;default:y=Kf}u=y.bind(null,o,u,i),y=void 0,!Bo||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(y=!0),p?y!==void 0?i.addEventListener(o,u,{capture:!0,passive:y}):i.addEventListener(o,u,!0):y!==void 0?i.addEventListener(o,u,{passive:y}):i.addEventListener(o,u,!1)}function md(i,o,u,p,y){var E=p;if(!(o&1)&&!(o&2)&&p!==null)e:for(;;){if(p===null)return;var I=p.tag;if(I===3||I===4){var B=p.stateNode.containerInfo;if(B===y||B.nodeType===8&&B.parentNode===y)break;if(I===4)for(I=p.return;I!==null;){var W=I.tag;if((W===3||W===4)&&(W=I.stateNode.containerInfo,W===y||W.nodeType===8&&W.parentNode===y))return;I=I.return}for(;B!==null;){if(I=Zs(B),I===null)return;if(W=I.tag,W===5||W===6){p=E=I;continue e}B=B.parentNode}}p=p.return}ni(function(){var ue=E,xe=K(u),Me=[];e:{var ve=Jg.get(i);if(ve!==void 0){var Ue=ed,He=i;switch(i){case"keypress":if(Uc(u)===0)break e;case"keydown":case"keyup":Ue=TM;break;case"focusin":He="focus",Ue=id;break;case"focusout":He="blur",Ue=id;break;case"beforeblur":case"afterblur":Ue=id;break;case"click":if(u.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ue=Rg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ue=hM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ue=bM;break;case $g:case Zg:case Kg:Ue=gM;break;case Qg:Ue=PM;break;case"scroll":Ue=fM;break;case"wheel":Ue=NM;break;case"copy":case"cut":case"paste":Ue=vM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ue=Dg}var We=(o&4)!==0,rn=!We&&i==="scroll",ie=We?ve!==null?ve+"Capture":null:ve;We=[];for(var $=ue,oe;$!==null;){oe=$;var Ce=oe.stateNode;if(oe.tag===5&&Ce!==null&&(oe=Ce,ie!==null&&(Ce=Yn($,ie),Ce!=null&&We.push(wl($,Ce,oe)))),rn)break;$=$.return}0<We.length&&(ve=new Ue(ve,He,null,u,xe),Me.push({event:ve,listeners:We}))}}if(!(o&7)){e:{if(ve=i==="mouseover"||i==="pointerover",Ue=i==="mouseout"||i==="pointerout",ve&&u!==Pt&&(He=u.relatedTarget||u.fromElement)&&(Zs(He)||He[Rr]))break e;if((Ue||ve)&&(ve=xe.window===xe?xe:(ve=xe.ownerDocument)?ve.defaultView||ve.parentWindow:window,Ue?(He=u.relatedTarget||u.toElement,Ue=ue,He=He?Zs(He):null,He!==null&&(rn=ar(He),He!==rn||He.tag!==5&&He.tag!==6)&&(He=null)):(Ue=null,He=ue),Ue!==He)){if(We=Rg,Ce="onMouseLeave",ie="onMouseEnter",$="mouse",(i==="pointerout"||i==="pointerover")&&(We=Dg,Ce="onPointerLeave",ie="onPointerEnter",$="pointer"),rn=Ue==null?ve:$o(Ue),oe=He==null?ve:$o(He),ve=new We(Ce,$+"leave",Ue,u,xe),ve.target=rn,ve.relatedTarget=oe,Ce=null,Zs(xe)===ue&&(We=new We(ie,$+"enter",He,u,xe),We.target=oe,We.relatedTarget=rn,Ce=We),rn=Ce,Ue&&He)t:{for(We=Ue,ie=He,$=0,oe=We;oe;oe=jo(oe))$++;for(oe=0,Ce=ie;Ce;Ce=jo(Ce))oe++;for(;0<$-oe;)We=jo(We),$--;for(;0<oe-$;)ie=jo(ie),oe--;for(;$--;){if(We===ie||ie!==null&&We===ie.alternate)break t;We=jo(We),ie=jo(ie)}We=null}else We=null;Ue!==null&&r_(Me,ve,Ue,We,!1),He!==null&&rn!==null&&r_(Me,rn,He,We,!0)}}e:{if(ve=ue?$o(ue):window,Ue=ve.nodeName&&ve.nodeName.toLowerCase(),Ue==="select"||Ue==="input"&&ve.type==="file")var je=zM;else if(Og(ve))if(zg)je=GM;else{je=VM;var Je=BM}else(Ue=ve.nodeName)&&Ue.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(je=HM);if(je&&(je=je(i,ue))){kg(Me,je,u,xe);break e}Je&&Je(i,ve,ue),i==="focusout"&&(Je=ve._wrapperState)&&Je.controlled&&ve.type==="number"&&Nt(ve,"number",ve.value)}switch(Je=ue?$o(ue):window,i){case"focusin":(Og(Je)||Je.contentEditable==="true")&&(Xo=Je,cd=ue,Sl=null);break;case"focusout":Sl=cd=Xo=null;break;case"mousedown":ud=!0;break;case"contextmenu":case"mouseup":case"dragend":ud=!1,jg(Me,u,xe);break;case"selectionchange":if(qM)break;case"keydown":case"keyup":jg(Me,u,xe)}var et;if(sd)e:{switch(i){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else Wo?Fg(i,u)&&(rt="onCompositionEnd"):i==="keydown"&&u.keyCode===229&&(rt="onCompositionStart");rt&&(Ng&&u.locale!=="ko"&&(Wo||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&Wo&&(et=Ag()):(ds=xe,Jf="value"in ds?ds.value:ds.textContent,Wo=!0)),Je=Gc(ue,rt),0<Je.length&&(rt=new Pg(rt,i,null,u,xe),Me.push({event:rt,listeners:Je}),et?rt.data=et:(et=Ug(u),et!==null&&(rt.data=et)))),(et=LM?FM(i,u):UM(i,u))&&(ue=Gc(ue,"onBeforeInput"),0<ue.length&&(xe=new Pg("onBeforeInput","beforeinput",null,u,xe),Me.push({event:xe,listeners:ue}),xe.data=et))}n_(Me,o)})}function wl(i,o,u){return{instance:i,listener:o,currentTarget:u}}function Gc(i,o){for(var u=o+"Capture",p=[];i!==null;){var y=i,E=y.stateNode;y.tag===5&&E!==null&&(y=E,E=Yn(i,u),E!=null&&p.unshift(wl(i,E,y)),E=Yn(i,o),E!=null&&p.push(wl(i,E,y))),i=i.return}return p}function jo(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function r_(i,o,u,p,y){for(var E=o._reactName,I=[];u!==null&&u!==p;){var B=u,W=B.alternate,ue=B.stateNode;if(W!==null&&W===p)break;B.tag===5&&ue!==null&&(B=ue,y?(W=Yn(u,E),W!=null&&I.unshift(wl(u,W,B))):y||(W=Yn(u,E),W!=null&&I.push(wl(u,W,B)))),u=u.return}I.length!==0&&i.push({event:o,listeners:I})}var ZM=/\r\n?/g,KM=/\u0000|\uFFFD/g;function s_(i){return(typeof i=="string"?i:""+i).replace(ZM,`
`).replace(KM,"")}function Wc(i,o,u){if(o=s_(o),s_(i)!==o&&u)throw Error(t(425))}function Xc(){}var gd=null,_d=null;function vd(i,o){return i==="textarea"||i==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var yd=typeof setTimeout=="function"?setTimeout:void 0,QM=typeof clearTimeout=="function"?clearTimeout:void 0,o_=typeof Promise=="function"?Promise:void 0,JM=typeof queueMicrotask=="function"?queueMicrotask:typeof o_<"u"?function(i){return o_.resolve(null).then(i).catch(e1)}:yd;function e1(i){setTimeout(function(){throw i})}function xd(i,o){var u=o,p=0;do{var y=u.nextSibling;if(i.removeChild(u),y&&y.nodeType===8)if(u=y.data,u==="/$"){if(p===0){i.removeChild(y),pl(o);return}p--}else u!=="$"&&u!=="$?"&&u!=="$!"||p++;u=y}while(u);pl(o)}function ps(i){for(;i!=null;i=i.nextSibling){var o=i.nodeType;if(o===1||o===3)break;if(o===8){if(o=i.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return i}function a_(i){i=i.previousSibling;for(var o=0;i;){if(i.nodeType===8){var u=i.data;if(u==="$"||u==="$!"||u==="$?"){if(o===0)return i;o--}else u==="/$"&&o++}i=i.previousSibling}return null}var Yo=Math.random().toString(36).slice(2),cr="__reactFiber$"+Yo,Tl="__reactProps$"+Yo,Rr="__reactContainer$"+Yo,Sd="__reactEvents$"+Yo,t1="__reactListeners$"+Yo,n1="__reactHandles$"+Yo;function Zs(i){var o=i[cr];if(o)return o;for(var u=i.parentNode;u;){if(o=u[Rr]||u[cr]){if(u=o.alternate,o.child!==null||u!==null&&u.child!==null)for(i=a_(i);i!==null;){if(u=i[cr])return u;i=a_(i)}return o}i=u,u=i.parentNode}return null}function Cl(i){return i=i[cr]||i[Rr],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function $o(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function qc(i){return i[Tl]||null}var Md=[],Zo=-1;function ms(i){return{current:i}}function Bt(i){0>Zo||(i.current=Md[Zo],Md[Zo]=null,Zo--)}function Ot(i,o){Zo++,Md[Zo]=i.current,i.current=o}var gs={},Ln=ms(gs),ii=ms(!1),Ks=gs;function Ko(i,o){var u=i.type.contextTypes;if(!u)return gs;var p=i.stateNode;if(p&&p.__reactInternalMemoizedUnmaskedChildContext===o)return p.__reactInternalMemoizedMaskedChildContext;var y={},E;for(E in u)y[E]=o[E];return p&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=o,i.__reactInternalMemoizedMaskedChildContext=y),y}function ri(i){return i=i.childContextTypes,i!=null}function jc(){Bt(ii),Bt(Ln)}function l_(i,o,u){if(Ln.current!==gs)throw Error(t(168));Ot(Ln,o),Ot(ii,u)}function c_(i,o,u){var p=i.stateNode;if(o=o.childContextTypes,typeof p.getChildContext!="function")return u;p=p.getChildContext();for(var y in p)if(!(y in o))throw Error(t(108,ge(i)||"Unknown",y));return Y({},u,p)}function Yc(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||gs,Ks=Ln.current,Ot(Ln,i),Ot(ii,ii.current),!0}function u_(i,o,u){var p=i.stateNode;if(!p)throw Error(t(169));u?(i=c_(i,o,Ks),p.__reactInternalMemoizedMergedChildContext=i,Bt(ii),Bt(Ln),Ot(Ln,i)):Bt(ii),Ot(ii,u)}var Pr=null,$c=!1,Ed=!1;function f_(i){Pr===null?Pr=[i]:Pr.push(i)}function i1(i){$c=!0,f_(i)}function _s(){if(!Ed&&Pr!==null){Ed=!0;var i=0,o=Tt;try{var u=Pr;for(Tt=1;i<u.length;i++){var p=u[i];do p=p(!0);while(p!==null)}Pr=null,$c=!1}catch(y){throw Pr!==null&&(Pr=Pr.slice(i+1)),Pc(Ee,_s),y}finally{Tt=o,Ed=!1}}return null}var Qo=[],Jo=0,Zc=null,Kc=0,Ii=[],Li=0,Qs=null,Dr=1,Nr="";function Js(i,o){Qo[Jo++]=Kc,Qo[Jo++]=Zc,Zc=i,Kc=o}function d_(i,o,u){Ii[Li++]=Dr,Ii[Li++]=Nr,Ii[Li++]=Qs,Qs=i;var p=Dr;i=Nr;var y=32-at(p)-1;p&=~(1<<y),u+=1;var E=32-at(o)+y;if(30<E){var I=y-y%5;E=(p&(1<<I)-1).toString(32),p>>=I,y-=I,Dr=1<<32-at(o)+y|u<<y|p,Nr=E+i}else Dr=1<<E|u<<y|p,Nr=i}function wd(i){i.return!==null&&(Js(i,1),d_(i,1,0))}function Td(i){for(;i===Zc;)Zc=Qo[--Jo],Qo[Jo]=null,Kc=Qo[--Jo],Qo[Jo]=null;for(;i===Qs;)Qs=Ii[--Li],Ii[Li]=null,Nr=Ii[--Li],Ii[Li]=null,Dr=Ii[--Li],Ii[Li]=null}var xi=null,Si=null,Ht=!1,ji=null;function h_(i,o){var u=ki(5,null,null,0);u.elementType="DELETED",u.stateNode=o,u.return=i,o=i.deletions,o===null?(i.deletions=[u],i.flags|=16):o.push(u)}function p_(i,o){switch(i.tag){case 5:var u=i.type;return o=o.nodeType!==1||u.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(i.stateNode=o,xi=i,Si=ps(o.firstChild),!0):!1;case 6:return o=i.pendingProps===""||o.nodeType!==3?null:o,o!==null?(i.stateNode=o,xi=i,Si=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(u=Qs!==null?{id:Dr,overflow:Nr}:null,i.memoizedState={dehydrated:o,treeContext:u,retryLane:1073741824},u=ki(18,null,null,0),u.stateNode=o,u.return=i,i.child=u,xi=i,Si=null,!0):!1;default:return!1}}function Cd(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Ad(i){if(Ht){var o=Si;if(o){var u=o;if(!p_(i,o)){if(Cd(i))throw Error(t(418));o=ps(u.nextSibling);var p=xi;o&&p_(i,o)?h_(p,u):(i.flags=i.flags&-4097|2,Ht=!1,xi=i)}}else{if(Cd(i))throw Error(t(418));i.flags=i.flags&-4097|2,Ht=!1,xi=i}}}function m_(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;xi=i}function Qc(i){if(i!==xi)return!1;if(!Ht)return m_(i),Ht=!0,!1;var o;if((o=i.tag!==3)&&!(o=i.tag!==5)&&(o=i.type,o=o!=="head"&&o!=="body"&&!vd(i.type,i.memoizedProps)),o&&(o=Si)){if(Cd(i))throw g_(),Error(t(418));for(;o;)h_(i,o),o=ps(o.nextSibling)}if(m_(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,o=0;i;){if(i.nodeType===8){var u=i.data;if(u==="/$"){if(o===0){Si=ps(i.nextSibling);break e}o--}else u!=="$"&&u!=="$!"&&u!=="$?"||o++}i=i.nextSibling}Si=null}}else Si=xi?ps(i.stateNode.nextSibling):null;return!0}function g_(){for(var i=Si;i;)i=ps(i.nextSibling)}function ea(){Si=xi=null,Ht=!1}function bd(i){ji===null?ji=[i]:ji.push(i)}var r1=w.ReactCurrentBatchConfig;function Al(i,o,u){if(i=u.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(u._owner){if(u=u._owner,u){if(u.tag!==1)throw Error(t(309));var p=u.stateNode}if(!p)throw Error(t(147,i));var y=p,E=""+i;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===E?o.ref:(o=function(I){var B=y.refs;I===null?delete B[E]:B[E]=I},o._stringRef=E,o)}if(typeof i!="string")throw Error(t(284));if(!u._owner)throw Error(t(290,i))}return i}function Jc(i,o){throw i=Object.prototype.toString.call(o),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":i))}function __(i){var o=i._init;return o(i._payload)}function v_(i){function o(ie,$){if(i){var oe=ie.deletions;oe===null?(ie.deletions=[$],ie.flags|=16):oe.push($)}}function u(ie,$){if(!i)return null;for(;$!==null;)o(ie,$),$=$.sibling;return null}function p(ie,$){for(ie=new Map;$!==null;)$.key!==null?ie.set($.key,$):ie.set($.index,$),$=$.sibling;return ie}function y(ie,$){return ie=Ts(ie,$),ie.index=0,ie.sibling=null,ie}function E(ie,$,oe){return ie.index=oe,i?(oe=ie.alternate,oe!==null?(oe=oe.index,oe<$?(ie.flags|=2,$):oe):(ie.flags|=2,$)):(ie.flags|=1048576,$)}function I(ie){return i&&ie.alternate===null&&(ie.flags|=2),ie}function B(ie,$,oe,Ce){return $===null||$.tag!==6?($=yh(oe,ie.mode,Ce),$.return=ie,$):($=y($,oe),$.return=ie,$)}function W(ie,$,oe,Ce){var je=oe.type;return je===D?xe(ie,$,oe.props.children,Ce,oe.key):$!==null&&($.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===j&&__(je)===$.type)?(Ce=y($,oe.props),Ce.ref=Al(ie,$,oe),Ce.return=ie,Ce):(Ce=Eu(oe.type,oe.key,oe.props,null,ie.mode,Ce),Ce.ref=Al(ie,$,oe),Ce.return=ie,Ce)}function ue(ie,$,oe,Ce){return $===null||$.tag!==4||$.stateNode.containerInfo!==oe.containerInfo||$.stateNode.implementation!==oe.implementation?($=xh(oe,ie.mode,Ce),$.return=ie,$):($=y($,oe.children||[]),$.return=ie,$)}function xe(ie,$,oe,Ce,je){return $===null||$.tag!==7?($=ao(oe,ie.mode,Ce,je),$.return=ie,$):($=y($,oe),$.return=ie,$)}function Me(ie,$,oe){if(typeof $=="string"&&$!==""||typeof $=="number")return $=yh(""+$,ie.mode,oe),$.return=ie,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case C:return oe=Eu($.type,$.key,$.props,null,ie.mode,oe),oe.ref=Al(ie,null,$),oe.return=ie,oe;case N:return $=xh($,ie.mode,oe),$.return=ie,$;case j:var Ce=$._init;return Me(ie,Ce($._payload),oe)}if(Xe($)||G($))return $=ao($,ie.mode,oe,null),$.return=ie,$;Jc(ie,$)}return null}function ve(ie,$,oe,Ce){var je=$!==null?$.key:null;if(typeof oe=="string"&&oe!==""||typeof oe=="number")return je!==null?null:B(ie,$,""+oe,Ce);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case C:return oe.key===je?W(ie,$,oe,Ce):null;case N:return oe.key===je?ue(ie,$,oe,Ce):null;case j:return je=oe._init,ve(ie,$,je(oe._payload),Ce)}if(Xe(oe)||G(oe))return je!==null?null:xe(ie,$,oe,Ce,null);Jc(ie,oe)}return null}function Ue(ie,$,oe,Ce,je){if(typeof Ce=="string"&&Ce!==""||typeof Ce=="number")return ie=ie.get(oe)||null,B($,ie,""+Ce,je);if(typeof Ce=="object"&&Ce!==null){switch(Ce.$$typeof){case C:return ie=ie.get(Ce.key===null?oe:Ce.key)||null,W($,ie,Ce,je);case N:return ie=ie.get(Ce.key===null?oe:Ce.key)||null,ue($,ie,Ce,je);case j:var Je=Ce._init;return Ue(ie,$,oe,Je(Ce._payload),je)}if(Xe(Ce)||G(Ce))return ie=ie.get(oe)||null,xe($,ie,Ce,je,null);Jc($,Ce)}return null}function He(ie,$,oe,Ce){for(var je=null,Je=null,et=$,rt=$=0,En=null;et!==null&&rt<oe.length;rt++){et.index>rt?(En=et,et=null):En=et.sibling;var At=ve(ie,et,oe[rt],Ce);if(At===null){et===null&&(et=En);break}i&&et&&At.alternate===null&&o(ie,et),$=E(At,$,rt),Je===null?je=At:Je.sibling=At,Je=At,et=En}if(rt===oe.length)return u(ie,et),Ht&&Js(ie,rt),je;if(et===null){for(;rt<oe.length;rt++)et=Me(ie,oe[rt],Ce),et!==null&&($=E(et,$,rt),Je===null?je=et:Je.sibling=et,Je=et);return Ht&&Js(ie,rt),je}for(et=p(ie,et);rt<oe.length;rt++)En=Ue(et,ie,rt,oe[rt],Ce),En!==null&&(i&&En.alternate!==null&&et.delete(En.key===null?rt:En.key),$=E(En,$,rt),Je===null?je=En:Je.sibling=En,Je=En);return i&&et.forEach(function(Cs){return o(ie,Cs)}),Ht&&Js(ie,rt),je}function We(ie,$,oe,Ce){var je=G(oe);if(typeof je!="function")throw Error(t(150));if(oe=je.call(oe),oe==null)throw Error(t(151));for(var Je=je=null,et=$,rt=$=0,En=null,At=oe.next();et!==null&&!At.done;rt++,At=oe.next()){et.index>rt?(En=et,et=null):En=et.sibling;var Cs=ve(ie,et,At.value,Ce);if(Cs===null){et===null&&(et=En);break}i&&et&&Cs.alternate===null&&o(ie,et),$=E(Cs,$,rt),Je===null?je=Cs:Je.sibling=Cs,Je=Cs,et=En}if(At.done)return u(ie,et),Ht&&Js(ie,rt),je;if(et===null){for(;!At.done;rt++,At=oe.next())At=Me(ie,At.value,Ce),At!==null&&($=E(At,$,rt),Je===null?je=At:Je.sibling=At,Je=At);return Ht&&Js(ie,rt),je}for(et=p(ie,et);!At.done;rt++,At=oe.next())At=Ue(et,ie,rt,At.value,Ce),At!==null&&(i&&At.alternate!==null&&et.delete(At.key===null?rt:At.key),$=E(At,$,rt),Je===null?je=At:Je.sibling=At,Je=At);return i&&et.forEach(function(U1){return o(ie,U1)}),Ht&&Js(ie,rt),je}function rn(ie,$,oe,Ce){if(typeof oe=="object"&&oe!==null&&oe.type===D&&oe.key===null&&(oe=oe.props.children),typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case C:e:{for(var je=oe.key,Je=$;Je!==null;){if(Je.key===je){if(je=oe.type,je===D){if(Je.tag===7){u(ie,Je.sibling),$=y(Je,oe.props.children),$.return=ie,ie=$;break e}}else if(Je.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===j&&__(je)===Je.type){u(ie,Je.sibling),$=y(Je,oe.props),$.ref=Al(ie,Je,oe),$.return=ie,ie=$;break e}u(ie,Je);break}else o(ie,Je);Je=Je.sibling}oe.type===D?($=ao(oe.props.children,ie.mode,Ce,oe.key),$.return=ie,ie=$):(Ce=Eu(oe.type,oe.key,oe.props,null,ie.mode,Ce),Ce.ref=Al(ie,$,oe),Ce.return=ie,ie=Ce)}return I(ie);case N:e:{for(Je=oe.key;$!==null;){if($.key===Je)if($.tag===4&&$.stateNode.containerInfo===oe.containerInfo&&$.stateNode.implementation===oe.implementation){u(ie,$.sibling),$=y($,oe.children||[]),$.return=ie,ie=$;break e}else{u(ie,$);break}else o(ie,$);$=$.sibling}$=xh(oe,ie.mode,Ce),$.return=ie,ie=$}return I(ie);case j:return Je=oe._init,rn(ie,$,Je(oe._payload),Ce)}if(Xe(oe))return He(ie,$,oe,Ce);if(G(oe))return We(ie,$,oe,Ce);Jc(ie,oe)}return typeof oe=="string"&&oe!==""||typeof oe=="number"?(oe=""+oe,$!==null&&$.tag===6?(u(ie,$.sibling),$=y($,oe),$.return=ie,ie=$):(u(ie,$),$=yh(oe,ie.mode,Ce),$.return=ie,ie=$),I(ie)):u(ie,$)}return rn}var ta=v_(!0),y_=v_(!1),eu=ms(null),tu=null,na=null,Rd=null;function Pd(){Rd=na=tu=null}function Dd(i){var o=eu.current;Bt(eu),i._currentValue=o}function Nd(i,o,u){for(;i!==null;){var p=i.alternate;if((i.childLanes&o)!==o?(i.childLanes|=o,p!==null&&(p.childLanes|=o)):p!==null&&(p.childLanes&o)!==o&&(p.childLanes|=o),i===u)break;i=i.return}}function ia(i,o){tu=i,Rd=na=null,i=i.dependencies,i!==null&&i.firstContext!==null&&(i.lanes&o&&(si=!0),i.firstContext=null)}function Fi(i){var o=i._currentValue;if(Rd!==i)if(i={context:i,memoizedValue:o,next:null},na===null){if(tu===null)throw Error(t(308));na=i,tu.dependencies={lanes:0,firstContext:i}}else na=na.next=i;return o}var eo=null;function Id(i){eo===null?eo=[i]:eo.push(i)}function x_(i,o,u,p){var y=o.interleaved;return y===null?(u.next=u,Id(o)):(u.next=y.next,y.next=u),o.interleaved=u,Ir(i,p)}function Ir(i,o){i.lanes|=o;var u=i.alternate;for(u!==null&&(u.lanes|=o),u=i,i=i.return;i!==null;)i.childLanes|=o,u=i.alternate,u!==null&&(u.childLanes|=o),u=i,i=i.return;return u.tag===3?u.stateNode:null}var vs=!1;function Ld(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function S_(i,o){i=i.updateQueue,o.updateQueue===i&&(o.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Lr(i,o){return{eventTime:i,lane:o,tag:0,payload:null,callback:null,next:null}}function ys(i,o,u){var p=i.updateQueue;if(p===null)return null;if(p=p.shared,Ct&2){var y=p.pending;return y===null?o.next=o:(o.next=y.next,y.next=o),p.pending=o,Ir(i,u)}return y=p.interleaved,y===null?(o.next=o,Id(p)):(o.next=y.next,y.next=o),p.interleaved=o,Ir(i,u)}function nu(i,o,u){if(o=o.updateQueue,o!==null&&(o=o.shared,(u&4194240)!==0)){var p=o.lanes;p&=i.pendingLanes,u|=p,o.lanes=u,xn(i,u)}}function M_(i,o){var u=i.updateQueue,p=i.alternate;if(p!==null&&(p=p.updateQueue,u===p)){var y=null,E=null;if(u=u.firstBaseUpdate,u!==null){do{var I={eventTime:u.eventTime,lane:u.lane,tag:u.tag,payload:u.payload,callback:u.callback,next:null};E===null?y=E=I:E=E.next=I,u=u.next}while(u!==null);E===null?y=E=o:E=E.next=o}else y=E=o;u={baseState:p.baseState,firstBaseUpdate:y,lastBaseUpdate:E,shared:p.shared,effects:p.effects},i.updateQueue=u;return}i=u.lastBaseUpdate,i===null?u.firstBaseUpdate=o:i.next=o,u.lastBaseUpdate=o}function iu(i,o,u,p){var y=i.updateQueue;vs=!1;var E=y.firstBaseUpdate,I=y.lastBaseUpdate,B=y.shared.pending;if(B!==null){y.shared.pending=null;var W=B,ue=W.next;W.next=null,I===null?E=ue:I.next=ue,I=W;var xe=i.alternate;xe!==null&&(xe=xe.updateQueue,B=xe.lastBaseUpdate,B!==I&&(B===null?xe.firstBaseUpdate=ue:B.next=ue,xe.lastBaseUpdate=W))}if(E!==null){var Me=y.baseState;I=0,xe=ue=W=null,B=E;do{var ve=B.lane,Ue=B.eventTime;if((p&ve)===ve){xe!==null&&(xe=xe.next={eventTime:Ue,lane:0,tag:B.tag,payload:B.payload,callback:B.callback,next:null});e:{var He=i,We=B;switch(ve=o,Ue=u,We.tag){case 1:if(He=We.payload,typeof He=="function"){Me=He.call(Ue,Me,ve);break e}Me=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=We.payload,ve=typeof He=="function"?He.call(Ue,Me,ve):He,ve==null)break e;Me=Y({},Me,ve);break e;case 2:vs=!0}}B.callback!==null&&B.lane!==0&&(i.flags|=64,ve=y.effects,ve===null?y.effects=[B]:ve.push(B))}else Ue={eventTime:Ue,lane:ve,tag:B.tag,payload:B.payload,callback:B.callback,next:null},xe===null?(ue=xe=Ue,W=Me):xe=xe.next=Ue,I|=ve;if(B=B.next,B===null){if(B=y.shared.pending,B===null)break;ve=B,B=ve.next,ve.next=null,y.lastBaseUpdate=ve,y.shared.pending=null}}while(!0);if(xe===null&&(W=Me),y.baseState=W,y.firstBaseUpdate=ue,y.lastBaseUpdate=xe,o=y.shared.interleaved,o!==null){y=o;do I|=y.lane,y=y.next;while(y!==o)}else E===null&&(y.shared.lanes=0);io|=I,i.lanes=I,i.memoizedState=Me}}function E_(i,o,u){if(i=o.effects,o.effects=null,i!==null)for(o=0;o<i.length;o++){var p=i[o],y=p.callback;if(y!==null){if(p.callback=null,p=u,typeof y!="function")throw Error(t(191,y));y.call(p)}}}var bl={},ur=ms(bl),Rl=ms(bl),Pl=ms(bl);function to(i){if(i===bl)throw Error(t(174));return i}function Fd(i,o){switch(Ot(Pl,o),Ot(Rl,i),Ot(ur,bl),i=o.nodeType,i){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:qe(null,"");break;default:i=i===8?o.parentNode:o,o=i.namespaceURI||null,i=i.tagName,o=qe(o,i)}Bt(ur),Ot(ur,o)}function ra(){Bt(ur),Bt(Rl),Bt(Pl)}function w_(i){to(Pl.current);var o=to(ur.current),u=qe(o,i.type);o!==u&&(Ot(Rl,i),Ot(ur,u))}function Ud(i){Rl.current===i&&(Bt(ur),Bt(Rl))}var qt=ms(0);function ru(i){for(var o=i;o!==null;){if(o.tag===13){var u=o.memoizedState;if(u!==null&&(u=u.dehydrated,u===null||u.data==="$?"||u.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if(o.flags&128)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var Od=[];function kd(){for(var i=0;i<Od.length;i++)Od[i]._workInProgressVersionPrimary=null;Od.length=0}var su=w.ReactCurrentDispatcher,zd=w.ReactCurrentBatchConfig,no=0,jt=null,pn=null,Sn=null,ou=!1,Dl=!1,Nl=0,s1=0;function Fn(){throw Error(t(321))}function Bd(i,o){if(o===null)return!1;for(var u=0;u<o.length&&u<i.length;u++)if(!qi(i[u],o[u]))return!1;return!0}function Vd(i,o,u,p,y,E){if(no=E,jt=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,su.current=i===null||i.memoizedState===null?c1:u1,i=u(p,y),Dl){E=0;do{if(Dl=!1,Nl=0,25<=E)throw Error(t(301));E+=1,Sn=pn=null,o.updateQueue=null,su.current=f1,i=u(p,y)}while(Dl)}if(su.current=cu,o=pn!==null&&pn.next!==null,no=0,Sn=pn=jt=null,ou=!1,o)throw Error(t(300));return i}function Hd(){var i=Nl!==0;return Nl=0,i}function fr(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Sn===null?jt.memoizedState=Sn=i:Sn=Sn.next=i,Sn}function Ui(){if(pn===null){var i=jt.alternate;i=i!==null?i.memoizedState:null}else i=pn.next;var o=Sn===null?jt.memoizedState:Sn.next;if(o!==null)Sn=o,pn=i;else{if(i===null)throw Error(t(310));pn=i,i={memoizedState:pn.memoizedState,baseState:pn.baseState,baseQueue:pn.baseQueue,queue:pn.queue,next:null},Sn===null?jt.memoizedState=Sn=i:Sn=Sn.next=i}return Sn}function Il(i,o){return typeof o=="function"?o(i):o}function Gd(i){var o=Ui(),u=o.queue;if(u===null)throw Error(t(311));u.lastRenderedReducer=i;var p=pn,y=p.baseQueue,E=u.pending;if(E!==null){if(y!==null){var I=y.next;y.next=E.next,E.next=I}p.baseQueue=y=E,u.pending=null}if(y!==null){E=y.next,p=p.baseState;var B=I=null,W=null,ue=E;do{var xe=ue.lane;if((no&xe)===xe)W!==null&&(W=W.next={lane:0,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null}),p=ue.hasEagerState?ue.eagerState:i(p,ue.action);else{var Me={lane:xe,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null};W===null?(B=W=Me,I=p):W=W.next=Me,jt.lanes|=xe,io|=xe}ue=ue.next}while(ue!==null&&ue!==E);W===null?I=p:W.next=B,qi(p,o.memoizedState)||(si=!0),o.memoizedState=p,o.baseState=I,o.baseQueue=W,u.lastRenderedState=p}if(i=u.interleaved,i!==null){y=i;do E=y.lane,jt.lanes|=E,io|=E,y=y.next;while(y!==i)}else y===null&&(u.lanes=0);return[o.memoizedState,u.dispatch]}function Wd(i){var o=Ui(),u=o.queue;if(u===null)throw Error(t(311));u.lastRenderedReducer=i;var p=u.dispatch,y=u.pending,E=o.memoizedState;if(y!==null){u.pending=null;var I=y=y.next;do E=i(E,I.action),I=I.next;while(I!==y);qi(E,o.memoizedState)||(si=!0),o.memoizedState=E,o.baseQueue===null&&(o.baseState=E),u.lastRenderedState=E}return[E,p]}function T_(){}function C_(i,o){var u=jt,p=Ui(),y=o(),E=!qi(p.memoizedState,y);if(E&&(p.memoizedState=y,si=!0),p=p.queue,Xd(R_.bind(null,u,p,i),[i]),p.getSnapshot!==o||E||Sn!==null&&Sn.memoizedState.tag&1){if(u.flags|=2048,Ll(9,b_.bind(null,u,p,y,o),void 0,null),Mn===null)throw Error(t(349));no&30||A_(u,o,y)}return y}function A_(i,o,u){i.flags|=16384,i={getSnapshot:o,value:u},o=jt.updateQueue,o===null?(o={lastEffect:null,stores:null},jt.updateQueue=o,o.stores=[i]):(u=o.stores,u===null?o.stores=[i]:u.push(i))}function b_(i,o,u,p){o.value=u,o.getSnapshot=p,P_(o)&&D_(i)}function R_(i,o,u){return u(function(){P_(o)&&D_(i)})}function P_(i){var o=i.getSnapshot;i=i.value;try{var u=o();return!qi(i,u)}catch{return!0}}function D_(i){var o=Ir(i,1);o!==null&&Ki(o,i,1,-1)}function N_(i){var o=fr();return typeof i=="function"&&(i=i()),o.memoizedState=o.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Il,lastRenderedState:i},o.queue=i,i=i.dispatch=l1.bind(null,jt,i),[o.memoizedState,i]}function Ll(i,o,u,p){return i={tag:i,create:o,destroy:u,deps:p,next:null},o=jt.updateQueue,o===null?(o={lastEffect:null,stores:null},jt.updateQueue=o,o.lastEffect=i.next=i):(u=o.lastEffect,u===null?o.lastEffect=i.next=i:(p=u.next,u.next=i,i.next=p,o.lastEffect=i)),i}function I_(){return Ui().memoizedState}function au(i,o,u,p){var y=fr();jt.flags|=i,y.memoizedState=Ll(1|o,u,void 0,p===void 0?null:p)}function lu(i,o,u,p){var y=Ui();p=p===void 0?null:p;var E=void 0;if(pn!==null){var I=pn.memoizedState;if(E=I.destroy,p!==null&&Bd(p,I.deps)){y.memoizedState=Ll(o,u,E,p);return}}jt.flags|=i,y.memoizedState=Ll(1|o,u,E,p)}function L_(i,o){return au(8390656,8,i,o)}function Xd(i,o){return lu(2048,8,i,o)}function F_(i,o){return lu(4,2,i,o)}function U_(i,o){return lu(4,4,i,o)}function O_(i,o){if(typeof o=="function")return i=i(),o(i),function(){o(null)};if(o!=null)return i=i(),o.current=i,function(){o.current=null}}function k_(i,o,u){return u=u!=null?u.concat([i]):null,lu(4,4,O_.bind(null,o,i),u)}function qd(){}function z_(i,o){var u=Ui();o=o===void 0?null:o;var p=u.memoizedState;return p!==null&&o!==null&&Bd(o,p[1])?p[0]:(u.memoizedState=[i,o],i)}function B_(i,o){var u=Ui();o=o===void 0?null:o;var p=u.memoizedState;return p!==null&&o!==null&&Bd(o,p[1])?p[0]:(i=i(),u.memoizedState=[i,o],i)}function V_(i,o,u){return no&21?(qi(u,o)||(u=Lt(),jt.lanes|=u,io|=u,i.baseState=!0),o):(i.baseState&&(i.baseState=!1,si=!0),i.memoizedState=u)}function o1(i,o){var u=Tt;Tt=u!==0&&4>u?u:4,i(!0);var p=zd.transition;zd.transition={};try{i(!1),o()}finally{Tt=u,zd.transition=p}}function H_(){return Ui().memoizedState}function a1(i,o,u){var p=Es(i);if(u={lane:p,action:u,hasEagerState:!1,eagerState:null,next:null},G_(i))W_(o,u);else if(u=x_(i,o,u,p),u!==null){var y=Kn();Ki(u,i,p,y),X_(u,o,p)}}function l1(i,o,u){var p=Es(i),y={lane:p,action:u,hasEagerState:!1,eagerState:null,next:null};if(G_(i))W_(o,y);else{var E=i.alternate;if(i.lanes===0&&(E===null||E.lanes===0)&&(E=o.lastRenderedReducer,E!==null))try{var I=o.lastRenderedState,B=E(I,u);if(y.hasEagerState=!0,y.eagerState=B,qi(B,I)){var W=o.interleaved;W===null?(y.next=y,Id(o)):(y.next=W.next,W.next=y),o.interleaved=y;return}}catch{}finally{}u=x_(i,o,y,p),u!==null&&(y=Kn(),Ki(u,i,p,y),X_(u,o,p))}}function G_(i){var o=i.alternate;return i===jt||o!==null&&o===jt}function W_(i,o){Dl=ou=!0;var u=i.pending;u===null?o.next=o:(o.next=u.next,u.next=o),i.pending=o}function X_(i,o,u){if(u&4194240){var p=o.lanes;p&=i.pendingLanes,u|=p,o.lanes=u,xn(i,u)}}var cu={readContext:Fi,useCallback:Fn,useContext:Fn,useEffect:Fn,useImperativeHandle:Fn,useInsertionEffect:Fn,useLayoutEffect:Fn,useMemo:Fn,useReducer:Fn,useRef:Fn,useState:Fn,useDebugValue:Fn,useDeferredValue:Fn,useTransition:Fn,useMutableSource:Fn,useSyncExternalStore:Fn,useId:Fn,unstable_isNewReconciler:!1},c1={readContext:Fi,useCallback:function(i,o){return fr().memoizedState=[i,o===void 0?null:o],i},useContext:Fi,useEffect:L_,useImperativeHandle:function(i,o,u){return u=u!=null?u.concat([i]):null,au(4194308,4,O_.bind(null,o,i),u)},useLayoutEffect:function(i,o){return au(4194308,4,i,o)},useInsertionEffect:function(i,o){return au(4,2,i,o)},useMemo:function(i,o){var u=fr();return o=o===void 0?null:o,i=i(),u.memoizedState=[i,o],i},useReducer:function(i,o,u){var p=fr();return o=u!==void 0?u(o):o,p.memoizedState=p.baseState=o,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:o},p.queue=i,i=i.dispatch=a1.bind(null,jt,i),[p.memoizedState,i]},useRef:function(i){var o=fr();return i={current:i},o.memoizedState=i},useState:N_,useDebugValue:qd,useDeferredValue:function(i){return fr().memoizedState=i},useTransition:function(){var i=N_(!1),o=i[0];return i=o1.bind(null,i[1]),fr().memoizedState=i,[o,i]},useMutableSource:function(){},useSyncExternalStore:function(i,o,u){var p=jt,y=fr();if(Ht){if(u===void 0)throw Error(t(407));u=u()}else{if(u=o(),Mn===null)throw Error(t(349));no&30||A_(p,o,u)}y.memoizedState=u;var E={value:u,getSnapshot:o};return y.queue=E,L_(R_.bind(null,p,E,i),[i]),p.flags|=2048,Ll(9,b_.bind(null,p,E,u,o),void 0,null),u},useId:function(){var i=fr(),o=Mn.identifierPrefix;if(Ht){var u=Nr,p=Dr;u=(p&~(1<<32-at(p)-1)).toString(32)+u,o=":"+o+"R"+u,u=Nl++,0<u&&(o+="H"+u.toString(32)),o+=":"}else u=s1++,o=":"+o+"r"+u.toString(32)+":";return i.memoizedState=o},unstable_isNewReconciler:!1},u1={readContext:Fi,useCallback:z_,useContext:Fi,useEffect:Xd,useImperativeHandle:k_,useInsertionEffect:F_,useLayoutEffect:U_,useMemo:B_,useReducer:Gd,useRef:I_,useState:function(){return Gd(Il)},useDebugValue:qd,useDeferredValue:function(i){var o=Ui();return V_(o,pn.memoizedState,i)},useTransition:function(){var i=Gd(Il)[0],o=Ui().memoizedState;return[i,o]},useMutableSource:T_,useSyncExternalStore:C_,useId:H_,unstable_isNewReconciler:!1},f1={readContext:Fi,useCallback:z_,useContext:Fi,useEffect:Xd,useImperativeHandle:k_,useInsertionEffect:F_,useLayoutEffect:U_,useMemo:B_,useReducer:Wd,useRef:I_,useState:function(){return Wd(Il)},useDebugValue:qd,useDeferredValue:function(i){var o=Ui();return pn===null?o.memoizedState=i:V_(o,pn.memoizedState,i)},useTransition:function(){var i=Wd(Il)[0],o=Ui().memoizedState;return[i,o]},useMutableSource:T_,useSyncExternalStore:C_,useId:H_,unstable_isNewReconciler:!1};function Yi(i,o){if(i&&i.defaultProps){o=Y({},o),i=i.defaultProps;for(var u in i)o[u]===void 0&&(o[u]=i[u]);return o}return o}function jd(i,o,u,p){o=i.memoizedState,u=u(p,o),u=u==null?o:Y({},o,u),i.memoizedState=u,i.lanes===0&&(i.updateQueue.baseState=u)}var uu={isMounted:function(i){return(i=i._reactInternals)?ar(i)===i:!1},enqueueSetState:function(i,o,u){i=i._reactInternals;var p=Kn(),y=Es(i),E=Lr(p,y);E.payload=o,u!=null&&(E.callback=u),o=ys(i,E,y),o!==null&&(Ki(o,i,y,p),nu(o,i,y))},enqueueReplaceState:function(i,o,u){i=i._reactInternals;var p=Kn(),y=Es(i),E=Lr(p,y);E.tag=1,E.payload=o,u!=null&&(E.callback=u),o=ys(i,E,y),o!==null&&(Ki(o,i,y,p),nu(o,i,y))},enqueueForceUpdate:function(i,o){i=i._reactInternals;var u=Kn(),p=Es(i),y=Lr(u,p);y.tag=2,o!=null&&(y.callback=o),o=ys(i,y,p),o!==null&&(Ki(o,i,p,u),nu(o,i,p))}};function q_(i,o,u,p,y,E,I){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(p,E,I):o.prototype&&o.prototype.isPureReactComponent?!xl(u,p)||!xl(y,E):!0}function j_(i,o,u){var p=!1,y=gs,E=o.contextType;return typeof E=="object"&&E!==null?E=Fi(E):(y=ri(o)?Ks:Ln.current,p=o.contextTypes,E=(p=p!=null)?Ko(i,y):gs),o=new o(u,E),i.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=uu,i.stateNode=o,o._reactInternals=i,p&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=y,i.__reactInternalMemoizedMaskedChildContext=E),o}function Y_(i,o,u,p){i=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(u,p),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(u,p),o.state!==i&&uu.enqueueReplaceState(o,o.state,null)}function Yd(i,o,u,p){var y=i.stateNode;y.props=u,y.state=i.memoizedState,y.refs={},Ld(i);var E=o.contextType;typeof E=="object"&&E!==null?y.context=Fi(E):(E=ri(o)?Ks:Ln.current,y.context=Ko(i,E)),y.state=i.memoizedState,E=o.getDerivedStateFromProps,typeof E=="function"&&(jd(i,o,E,u),y.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof y.getSnapshotBeforeUpdate=="function"||typeof y.UNSAFE_componentWillMount!="function"&&typeof y.componentWillMount!="function"||(o=y.state,typeof y.componentWillMount=="function"&&y.componentWillMount(),typeof y.UNSAFE_componentWillMount=="function"&&y.UNSAFE_componentWillMount(),o!==y.state&&uu.enqueueReplaceState(y,y.state,null),iu(i,u,y,p),y.state=i.memoizedState),typeof y.componentDidMount=="function"&&(i.flags|=4194308)}function sa(i,o){try{var u="",p=o;do u+=ae(p),p=p.return;while(p);var y=u}catch(E){y=`
Error generating stack: `+E.message+`
`+E.stack}return{value:i,source:o,stack:y,digest:null}}function $d(i,o,u){return{value:i,source:null,stack:u??null,digest:o??null}}function Zd(i,o){try{console.error(o.value)}catch(u){setTimeout(function(){throw u})}}var d1=typeof WeakMap=="function"?WeakMap:Map;function $_(i,o,u){u=Lr(-1,u),u.tag=3,u.payload={element:null};var p=o.value;return u.callback=function(){_u||(_u=!0,fh=p),Zd(i,o)},u}function Z_(i,o,u){u=Lr(-1,u),u.tag=3;var p=i.type.getDerivedStateFromError;if(typeof p=="function"){var y=o.value;u.payload=function(){return p(y)},u.callback=function(){Zd(i,o)}}var E=i.stateNode;return E!==null&&typeof E.componentDidCatch=="function"&&(u.callback=function(){Zd(i,o),typeof p!="function"&&(Ss===null?Ss=new Set([this]):Ss.add(this));var I=o.stack;this.componentDidCatch(o.value,{componentStack:I!==null?I:""})}),u}function K_(i,o,u){var p=i.pingCache;if(p===null){p=i.pingCache=new d1;var y=new Set;p.set(o,y)}else y=p.get(o),y===void 0&&(y=new Set,p.set(o,y));y.has(u)||(y.add(u),i=C1.bind(null,i,o,u),o.then(i,i))}function Q_(i){do{var o;if((o=i.tag===13)&&(o=i.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return i;i=i.return}while(i!==null);return null}function J_(i,o,u,p,y){return i.mode&1?(i.flags|=65536,i.lanes=y,i):(i===o?i.flags|=65536:(i.flags|=128,u.flags|=131072,u.flags&=-52805,u.tag===1&&(u.alternate===null?u.tag=17:(o=Lr(-1,1),o.tag=2,ys(u,o,1))),u.lanes|=1),i)}var h1=w.ReactCurrentOwner,si=!1;function Zn(i,o,u,p){o.child=i===null?y_(o,null,u,p):ta(o,i.child,u,p)}function e0(i,o,u,p,y){u=u.render;var E=o.ref;return ia(o,y),p=Vd(i,o,u,p,E,y),u=Hd(),i!==null&&!si?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~y,Fr(i,o,y)):(Ht&&u&&wd(o),o.flags|=1,Zn(i,o,p,y),o.child)}function t0(i,o,u,p,y){if(i===null){var E=u.type;return typeof E=="function"&&!vh(E)&&E.defaultProps===void 0&&u.compare===null&&u.defaultProps===void 0?(o.tag=15,o.type=E,n0(i,o,E,p,y)):(i=Eu(u.type,null,p,o,o.mode,y),i.ref=o.ref,i.return=o,o.child=i)}if(E=i.child,!(i.lanes&y)){var I=E.memoizedProps;if(u=u.compare,u=u!==null?u:xl,u(I,p)&&i.ref===o.ref)return Fr(i,o,y)}return o.flags|=1,i=Ts(E,p),i.ref=o.ref,i.return=o,o.child=i}function n0(i,o,u,p,y){if(i!==null){var E=i.memoizedProps;if(xl(E,p)&&i.ref===o.ref)if(si=!1,o.pendingProps=p=E,(i.lanes&y)!==0)i.flags&131072&&(si=!0);else return o.lanes=i.lanes,Fr(i,o,y)}return Kd(i,o,u,p,y)}function i0(i,o,u){var p=o.pendingProps,y=p.children,E=i!==null?i.memoizedState:null;if(p.mode==="hidden")if(!(o.mode&1))o.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ot(aa,Mi),Mi|=u;else{if(!(u&1073741824))return i=E!==null?E.baseLanes|u:u,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:i,cachePool:null,transitions:null},o.updateQueue=null,Ot(aa,Mi),Mi|=i,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},p=E!==null?E.baseLanes:u,Ot(aa,Mi),Mi|=p}else E!==null?(p=E.baseLanes|u,o.memoizedState=null):p=u,Ot(aa,Mi),Mi|=p;return Zn(i,o,y,u),o.child}function r0(i,o){var u=o.ref;(i===null&&u!==null||i!==null&&i.ref!==u)&&(o.flags|=512,o.flags|=2097152)}function Kd(i,o,u,p,y){var E=ri(u)?Ks:Ln.current;return E=Ko(o,E),ia(o,y),u=Vd(i,o,u,p,E,y),p=Hd(),i!==null&&!si?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~y,Fr(i,o,y)):(Ht&&p&&wd(o),o.flags|=1,Zn(i,o,u,y),o.child)}function s0(i,o,u,p,y){if(ri(u)){var E=!0;Yc(o)}else E=!1;if(ia(o,y),o.stateNode===null)du(i,o),j_(o,u,p),Yd(o,u,p,y),p=!0;else if(i===null){var I=o.stateNode,B=o.memoizedProps;I.props=B;var W=I.context,ue=u.contextType;typeof ue=="object"&&ue!==null?ue=Fi(ue):(ue=ri(u)?Ks:Ln.current,ue=Ko(o,ue));var xe=u.getDerivedStateFromProps,Me=typeof xe=="function"||typeof I.getSnapshotBeforeUpdate=="function";Me||typeof I.UNSAFE_componentWillReceiveProps!="function"&&typeof I.componentWillReceiveProps!="function"||(B!==p||W!==ue)&&Y_(o,I,p,ue),vs=!1;var ve=o.memoizedState;I.state=ve,iu(o,p,I,y),W=o.memoizedState,B!==p||ve!==W||ii.current||vs?(typeof xe=="function"&&(jd(o,u,xe,p),W=o.memoizedState),(B=vs||q_(o,u,B,p,ve,W,ue))?(Me||typeof I.UNSAFE_componentWillMount!="function"&&typeof I.componentWillMount!="function"||(typeof I.componentWillMount=="function"&&I.componentWillMount(),typeof I.UNSAFE_componentWillMount=="function"&&I.UNSAFE_componentWillMount()),typeof I.componentDidMount=="function"&&(o.flags|=4194308)):(typeof I.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=p,o.memoizedState=W),I.props=p,I.state=W,I.context=ue,p=B):(typeof I.componentDidMount=="function"&&(o.flags|=4194308),p=!1)}else{I=o.stateNode,S_(i,o),B=o.memoizedProps,ue=o.type===o.elementType?B:Yi(o.type,B),I.props=ue,Me=o.pendingProps,ve=I.context,W=u.contextType,typeof W=="object"&&W!==null?W=Fi(W):(W=ri(u)?Ks:Ln.current,W=Ko(o,W));var Ue=u.getDerivedStateFromProps;(xe=typeof Ue=="function"||typeof I.getSnapshotBeforeUpdate=="function")||typeof I.UNSAFE_componentWillReceiveProps!="function"&&typeof I.componentWillReceiveProps!="function"||(B!==Me||ve!==W)&&Y_(o,I,p,W),vs=!1,ve=o.memoizedState,I.state=ve,iu(o,p,I,y);var He=o.memoizedState;B!==Me||ve!==He||ii.current||vs?(typeof Ue=="function"&&(jd(o,u,Ue,p),He=o.memoizedState),(ue=vs||q_(o,u,ue,p,ve,He,W)||!1)?(xe||typeof I.UNSAFE_componentWillUpdate!="function"&&typeof I.componentWillUpdate!="function"||(typeof I.componentWillUpdate=="function"&&I.componentWillUpdate(p,He,W),typeof I.UNSAFE_componentWillUpdate=="function"&&I.UNSAFE_componentWillUpdate(p,He,W)),typeof I.componentDidUpdate=="function"&&(o.flags|=4),typeof I.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof I.componentDidUpdate!="function"||B===i.memoizedProps&&ve===i.memoizedState||(o.flags|=4),typeof I.getSnapshotBeforeUpdate!="function"||B===i.memoizedProps&&ve===i.memoizedState||(o.flags|=1024),o.memoizedProps=p,o.memoizedState=He),I.props=p,I.state=He,I.context=W,p=ue):(typeof I.componentDidUpdate!="function"||B===i.memoizedProps&&ve===i.memoizedState||(o.flags|=4),typeof I.getSnapshotBeforeUpdate!="function"||B===i.memoizedProps&&ve===i.memoizedState||(o.flags|=1024),p=!1)}return Qd(i,o,u,p,E,y)}function Qd(i,o,u,p,y,E){r0(i,o);var I=(o.flags&128)!==0;if(!p&&!I)return y&&u_(o,u,!1),Fr(i,o,E);p=o.stateNode,h1.current=o;var B=I&&typeof u.getDerivedStateFromError!="function"?null:p.render();return o.flags|=1,i!==null&&I?(o.child=ta(o,i.child,null,E),o.child=ta(o,null,B,E)):Zn(i,o,B,E),o.memoizedState=p.state,y&&u_(o,u,!0),o.child}function o0(i){var o=i.stateNode;o.pendingContext?l_(i,o.pendingContext,o.pendingContext!==o.context):o.context&&l_(i,o.context,!1),Fd(i,o.containerInfo)}function a0(i,o,u,p,y){return ea(),bd(y),o.flags|=256,Zn(i,o,u,p),o.child}var Jd={dehydrated:null,treeContext:null,retryLane:0};function eh(i){return{baseLanes:i,cachePool:null,transitions:null}}function l0(i,o,u){var p=o.pendingProps,y=qt.current,E=!1,I=(o.flags&128)!==0,B;if((B=I)||(B=i!==null&&i.memoizedState===null?!1:(y&2)!==0),B?(E=!0,o.flags&=-129):(i===null||i.memoizedState!==null)&&(y|=1),Ot(qt,y&1),i===null)return Ad(o),i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?(o.mode&1?i.data==="$!"?o.lanes=8:o.lanes=1073741824:o.lanes=1,null):(I=p.children,i=p.fallback,E?(p=o.mode,E=o.child,I={mode:"hidden",children:I},!(p&1)&&E!==null?(E.childLanes=0,E.pendingProps=I):E=wu(I,p,0,null),i=ao(i,p,u,null),E.return=o,i.return=o,E.sibling=i,o.child=E,o.child.memoizedState=eh(u),o.memoizedState=Jd,i):th(o,I));if(y=i.memoizedState,y!==null&&(B=y.dehydrated,B!==null))return p1(i,o,I,p,B,y,u);if(E){E=p.fallback,I=o.mode,y=i.child,B=y.sibling;var W={mode:"hidden",children:p.children};return!(I&1)&&o.child!==y?(p=o.child,p.childLanes=0,p.pendingProps=W,o.deletions=null):(p=Ts(y,W),p.subtreeFlags=y.subtreeFlags&14680064),B!==null?E=Ts(B,E):(E=ao(E,I,u,null),E.flags|=2),E.return=o,p.return=o,p.sibling=E,o.child=p,p=E,E=o.child,I=i.child.memoizedState,I=I===null?eh(u):{baseLanes:I.baseLanes|u,cachePool:null,transitions:I.transitions},E.memoizedState=I,E.childLanes=i.childLanes&~u,o.memoizedState=Jd,p}return E=i.child,i=E.sibling,p=Ts(E,{mode:"visible",children:p.children}),!(o.mode&1)&&(p.lanes=u),p.return=o,p.sibling=null,i!==null&&(u=o.deletions,u===null?(o.deletions=[i],o.flags|=16):u.push(i)),o.child=p,o.memoizedState=null,p}function th(i,o){return o=wu({mode:"visible",children:o},i.mode,0,null),o.return=i,i.child=o}function fu(i,o,u,p){return p!==null&&bd(p),ta(o,i.child,null,u),i=th(o,o.pendingProps.children),i.flags|=2,o.memoizedState=null,i}function p1(i,o,u,p,y,E,I){if(u)return o.flags&256?(o.flags&=-257,p=$d(Error(t(422))),fu(i,o,I,p)):o.memoizedState!==null?(o.child=i.child,o.flags|=128,null):(E=p.fallback,y=o.mode,p=wu({mode:"visible",children:p.children},y,0,null),E=ao(E,y,I,null),E.flags|=2,p.return=o,E.return=o,p.sibling=E,o.child=p,o.mode&1&&ta(o,i.child,null,I),o.child.memoizedState=eh(I),o.memoizedState=Jd,E);if(!(o.mode&1))return fu(i,o,I,null);if(y.data==="$!"){if(p=y.nextSibling&&y.nextSibling.dataset,p)var B=p.dgst;return p=B,E=Error(t(419)),p=$d(E,p,void 0),fu(i,o,I,p)}if(B=(I&i.childLanes)!==0,si||B){if(p=Mn,p!==null){switch(I&-I){case 4:y=2;break;case 16:y=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:y=32;break;case 536870912:y=268435456;break;default:y=0}y=y&(p.suspendedLanes|I)?0:y,y!==0&&y!==E.retryLane&&(E.retryLane=y,Ir(i,y),Ki(p,i,y,-1))}return _h(),p=$d(Error(t(421))),fu(i,o,I,p)}return y.data==="$?"?(o.flags|=128,o.child=i.child,o=A1.bind(null,i),y._reactRetry=o,null):(i=E.treeContext,Si=ps(y.nextSibling),xi=o,Ht=!0,ji=null,i!==null&&(Ii[Li++]=Dr,Ii[Li++]=Nr,Ii[Li++]=Qs,Dr=i.id,Nr=i.overflow,Qs=o),o=th(o,p.children),o.flags|=4096,o)}function c0(i,o,u){i.lanes|=o;var p=i.alternate;p!==null&&(p.lanes|=o),Nd(i.return,o,u)}function nh(i,o,u,p,y){var E=i.memoizedState;E===null?i.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:p,tail:u,tailMode:y}:(E.isBackwards=o,E.rendering=null,E.renderingStartTime=0,E.last=p,E.tail=u,E.tailMode=y)}function u0(i,o,u){var p=o.pendingProps,y=p.revealOrder,E=p.tail;if(Zn(i,o,p.children,u),p=qt.current,p&2)p=p&1|2,o.flags|=128;else{if(i!==null&&i.flags&128)e:for(i=o.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&c0(i,u,o);else if(i.tag===19)c0(i,u,o);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===o)break e;for(;i.sibling===null;){if(i.return===null||i.return===o)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}p&=1}if(Ot(qt,p),!(o.mode&1))o.memoizedState=null;else switch(y){case"forwards":for(u=o.child,y=null;u!==null;)i=u.alternate,i!==null&&ru(i)===null&&(y=u),u=u.sibling;u=y,u===null?(y=o.child,o.child=null):(y=u.sibling,u.sibling=null),nh(o,!1,y,u,E);break;case"backwards":for(u=null,y=o.child,o.child=null;y!==null;){if(i=y.alternate,i!==null&&ru(i)===null){o.child=y;break}i=y.sibling,y.sibling=u,u=y,y=i}nh(o,!0,u,null,E);break;case"together":nh(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function du(i,o){!(o.mode&1)&&i!==null&&(i.alternate=null,o.alternate=null,o.flags|=2)}function Fr(i,o,u){if(i!==null&&(o.dependencies=i.dependencies),io|=o.lanes,!(u&o.childLanes))return null;if(i!==null&&o.child!==i.child)throw Error(t(153));if(o.child!==null){for(i=o.child,u=Ts(i,i.pendingProps),o.child=u,u.return=o;i.sibling!==null;)i=i.sibling,u=u.sibling=Ts(i,i.pendingProps),u.return=o;u.sibling=null}return o.child}function m1(i,o,u){switch(o.tag){case 3:o0(o),ea();break;case 5:w_(o);break;case 1:ri(o.type)&&Yc(o);break;case 4:Fd(o,o.stateNode.containerInfo);break;case 10:var p=o.type._context,y=o.memoizedProps.value;Ot(eu,p._currentValue),p._currentValue=y;break;case 13:if(p=o.memoizedState,p!==null)return p.dehydrated!==null?(Ot(qt,qt.current&1),o.flags|=128,null):u&o.child.childLanes?l0(i,o,u):(Ot(qt,qt.current&1),i=Fr(i,o,u),i!==null?i.sibling:null);Ot(qt,qt.current&1);break;case 19:if(p=(u&o.childLanes)!==0,i.flags&128){if(p)return u0(i,o,u);o.flags|=128}if(y=o.memoizedState,y!==null&&(y.rendering=null,y.tail=null,y.lastEffect=null),Ot(qt,qt.current),p)break;return null;case 22:case 23:return o.lanes=0,i0(i,o,u)}return Fr(i,o,u)}var f0,ih,d0,h0;f0=function(i,o){for(var u=o.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===o)break;for(;u.sibling===null;){if(u.return===null||u.return===o)return;u=u.return}u.sibling.return=u.return,u=u.sibling}},ih=function(){},d0=function(i,o,u,p){var y=i.memoizedProps;if(y!==p){i=o.stateNode,to(ur.current);var E=null;switch(u){case"input":y=X(i,y),p=X(i,p),E=[];break;case"select":y=Y({},y,{value:void 0}),p=Y({},p,{value:void 0}),E=[];break;case"textarea":y=L(i,y),p=L(i,p),E=[];break;default:typeof y.onClick!="function"&&typeof p.onClick=="function"&&(i.onclick=Xc)}mt(u,p);var I;u=null;for(ue in y)if(!p.hasOwnProperty(ue)&&y.hasOwnProperty(ue)&&y[ue]!=null)if(ue==="style"){var B=y[ue];for(I in B)B.hasOwnProperty(I)&&(u||(u={}),u[I]="")}else ue!=="dangerouslySetInnerHTML"&&ue!=="children"&&ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&ue!=="autoFocus"&&(s.hasOwnProperty(ue)?E||(E=[]):(E=E||[]).push(ue,null));for(ue in p){var W=p[ue];if(B=y!=null?y[ue]:void 0,p.hasOwnProperty(ue)&&W!==B&&(W!=null||B!=null))if(ue==="style")if(B){for(I in B)!B.hasOwnProperty(I)||W&&W.hasOwnProperty(I)||(u||(u={}),u[I]="");for(I in W)W.hasOwnProperty(I)&&B[I]!==W[I]&&(u||(u={}),u[I]=W[I])}else u||(E||(E=[]),E.push(ue,u)),u=W;else ue==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,B=B?B.__html:void 0,W!=null&&B!==W&&(E=E||[]).push(ue,W)):ue==="children"?typeof W!="string"&&typeof W!="number"||(E=E||[]).push(ue,""+W):ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&(s.hasOwnProperty(ue)?(W!=null&&ue==="onScroll"&&zt("scroll",i),E||B===W||(E=[])):(E=E||[]).push(ue,W))}u&&(E=E||[]).push("style",u);var ue=E;(o.updateQueue=ue)&&(o.flags|=4)}},h0=function(i,o,u,p){u!==p&&(o.flags|=4)};function Fl(i,o){if(!Ht)switch(i.tailMode){case"hidden":o=i.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i.tail=null:u.sibling=null;break;case"collapsed":u=i.tail;for(var p=null;u!==null;)u.alternate!==null&&(p=u),u=u.sibling;p===null?o||i.tail===null?i.tail=null:i.tail.sibling=null:p.sibling=null}}function Un(i){var o=i.alternate!==null&&i.alternate.child===i.child,u=0,p=0;if(o)for(var y=i.child;y!==null;)u|=y.lanes|y.childLanes,p|=y.subtreeFlags&14680064,p|=y.flags&14680064,y.return=i,y=y.sibling;else for(y=i.child;y!==null;)u|=y.lanes|y.childLanes,p|=y.subtreeFlags,p|=y.flags,y.return=i,y=y.sibling;return i.subtreeFlags|=p,i.childLanes=u,o}function g1(i,o,u){var p=o.pendingProps;switch(Td(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Un(o),null;case 1:return ri(o.type)&&jc(),Un(o),null;case 3:return p=o.stateNode,ra(),Bt(ii),Bt(Ln),kd(),p.pendingContext&&(p.context=p.pendingContext,p.pendingContext=null),(i===null||i.child===null)&&(Qc(o)?o.flags|=4:i===null||i.memoizedState.isDehydrated&&!(o.flags&256)||(o.flags|=1024,ji!==null&&(ph(ji),ji=null))),ih(i,o),Un(o),null;case 5:Ud(o);var y=to(Pl.current);if(u=o.type,i!==null&&o.stateNode!=null)d0(i,o,u,p,y),i.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!p){if(o.stateNode===null)throw Error(t(166));return Un(o),null}if(i=to(ur.current),Qc(o)){p=o.stateNode,u=o.type;var E=o.memoizedProps;switch(p[cr]=o,p[Tl]=E,i=(o.mode&1)!==0,u){case"dialog":zt("cancel",p),zt("close",p);break;case"iframe":case"object":case"embed":zt("load",p);break;case"video":case"audio":for(y=0;y<Ml.length;y++)zt(Ml[y],p);break;case"source":zt("error",p);break;case"img":case"image":case"link":zt("error",p),zt("load",p);break;case"details":zt("toggle",p);break;case"input":jn(p,E),zt("invalid",p);break;case"select":p._wrapperState={wasMultiple:!!E.multiple},zt("invalid",p);break;case"textarea":le(p,E),zt("invalid",p)}mt(u,E),y=null;for(var I in E)if(E.hasOwnProperty(I)){var B=E[I];I==="children"?typeof B=="string"?p.textContent!==B&&(E.suppressHydrationWarning!==!0&&Wc(p.textContent,B,i),y=["children",B]):typeof B=="number"&&p.textContent!==""+B&&(E.suppressHydrationWarning!==!0&&Wc(p.textContent,B,i),y=["children",""+B]):s.hasOwnProperty(I)&&B!=null&&I==="onScroll"&&zt("scroll",p)}switch(u){case"input":xt(p),Ze(p,E,!0);break;case"textarea":xt(p),ye(p);break;case"select":case"option":break;default:typeof E.onClick=="function"&&(p.onclick=Xc)}p=y,o.updateQueue=p,p!==null&&(o.flags|=4)}else{I=y.nodeType===9?y:y.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=he(u)),i==="http://www.w3.org/1999/xhtml"?u==="script"?(i=I.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof p.is=="string"?i=I.createElement(u,{is:p.is}):(i=I.createElement(u),u==="select"&&(I=i,p.multiple?I.multiple=!0:p.size&&(I.size=p.size))):i=I.createElementNS(i,u),i[cr]=o,i[Tl]=p,f0(i,o,!1,!1),o.stateNode=i;e:{switch(I=st(u,p),u){case"dialog":zt("cancel",i),zt("close",i),y=p;break;case"iframe":case"object":case"embed":zt("load",i),y=p;break;case"video":case"audio":for(y=0;y<Ml.length;y++)zt(Ml[y],i);y=p;break;case"source":zt("error",i),y=p;break;case"img":case"image":case"link":zt("error",i),zt("load",i),y=p;break;case"details":zt("toggle",i),y=p;break;case"input":jn(i,p),y=X(i,p),zt("invalid",i);break;case"option":y=p;break;case"select":i._wrapperState={wasMultiple:!!p.multiple},y=Y({},p,{value:void 0}),zt("invalid",i);break;case"textarea":le(i,p),y=L(i,p),zt("invalid",i);break;default:y=p}mt(u,y),B=y;for(E in B)if(B.hasOwnProperty(E)){var W=B[E];E==="style"?nt(i,W):E==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,W!=null&&Oe(i,W)):E==="children"?typeof W=="string"?(u!=="textarea"||W!=="")&&dt(i,W):typeof W=="number"&&dt(i,""+W):E!=="suppressContentEditableWarning"&&E!=="suppressHydrationWarning"&&E!=="autoFocus"&&(s.hasOwnProperty(E)?W!=null&&E==="onScroll"&&zt("scroll",i):W!=null&&b(i,E,W,I))}switch(u){case"input":xt(i),Ze(i,p,!1);break;case"textarea":xt(i),ye(i);break;case"option":p.value!=null&&i.setAttribute("value",""+fe(p.value));break;case"select":i.multiple=!!p.multiple,E=p.value,E!=null?k(i,!!p.multiple,E,!1):p.defaultValue!=null&&k(i,!!p.multiple,p.defaultValue,!0);break;default:typeof y.onClick=="function"&&(i.onclick=Xc)}switch(u){case"button":case"input":case"select":case"textarea":p=!!p.autoFocus;break e;case"img":p=!0;break e;default:p=!1}}p&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return Un(o),null;case 6:if(i&&o.stateNode!=null)h0(i,o,i.memoizedProps,p);else{if(typeof p!="string"&&o.stateNode===null)throw Error(t(166));if(u=to(Pl.current),to(ur.current),Qc(o)){if(p=o.stateNode,u=o.memoizedProps,p[cr]=o,(E=p.nodeValue!==u)&&(i=xi,i!==null))switch(i.tag){case 3:Wc(p.nodeValue,u,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Wc(p.nodeValue,u,(i.mode&1)!==0)}E&&(o.flags|=4)}else p=(u.nodeType===9?u:u.ownerDocument).createTextNode(p),p[cr]=o,o.stateNode=p}return Un(o),null;case 13:if(Bt(qt),p=o.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Ht&&Si!==null&&o.mode&1&&!(o.flags&128))g_(),ea(),o.flags|=98560,E=!1;else if(E=Qc(o),p!==null&&p.dehydrated!==null){if(i===null){if(!E)throw Error(t(318));if(E=o.memoizedState,E=E!==null?E.dehydrated:null,!E)throw Error(t(317));E[cr]=o}else ea(),!(o.flags&128)&&(o.memoizedState=null),o.flags|=4;Un(o),E=!1}else ji!==null&&(ph(ji),ji=null),E=!0;if(!E)return o.flags&65536?o:null}return o.flags&128?(o.lanes=u,o):(p=p!==null,p!==(i!==null&&i.memoizedState!==null)&&p&&(o.child.flags|=8192,o.mode&1&&(i===null||qt.current&1?mn===0&&(mn=3):_h())),o.updateQueue!==null&&(o.flags|=4),Un(o),null);case 4:return ra(),ih(i,o),i===null&&El(o.stateNode.containerInfo),Un(o),null;case 10:return Dd(o.type._context),Un(o),null;case 17:return ri(o.type)&&jc(),Un(o),null;case 19:if(Bt(qt),E=o.memoizedState,E===null)return Un(o),null;if(p=(o.flags&128)!==0,I=E.rendering,I===null)if(p)Fl(E,!1);else{if(mn!==0||i!==null&&i.flags&128)for(i=o.child;i!==null;){if(I=ru(i),I!==null){for(o.flags|=128,Fl(E,!1),p=I.updateQueue,p!==null&&(o.updateQueue=p,o.flags|=4),o.subtreeFlags=0,p=u,u=o.child;u!==null;)E=u,i=p,E.flags&=14680066,I=E.alternate,I===null?(E.childLanes=0,E.lanes=i,E.child=null,E.subtreeFlags=0,E.memoizedProps=null,E.memoizedState=null,E.updateQueue=null,E.dependencies=null,E.stateNode=null):(E.childLanes=I.childLanes,E.lanes=I.lanes,E.child=I.child,E.subtreeFlags=0,E.deletions=null,E.memoizedProps=I.memoizedProps,E.memoizedState=I.memoizedState,E.updateQueue=I.updateQueue,E.type=I.type,i=I.dependencies,E.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),u=u.sibling;return Ot(qt,qt.current&1|2),o.child}i=i.sibling}E.tail!==null&&re()>la&&(o.flags|=128,p=!0,Fl(E,!1),o.lanes=4194304)}else{if(!p)if(i=ru(I),i!==null){if(o.flags|=128,p=!0,u=i.updateQueue,u!==null&&(o.updateQueue=u,o.flags|=4),Fl(E,!0),E.tail===null&&E.tailMode==="hidden"&&!I.alternate&&!Ht)return Un(o),null}else 2*re()-E.renderingStartTime>la&&u!==1073741824&&(o.flags|=128,p=!0,Fl(E,!1),o.lanes=4194304);E.isBackwards?(I.sibling=o.child,o.child=I):(u=E.last,u!==null?u.sibling=I:o.child=I,E.last=I)}return E.tail!==null?(o=E.tail,E.rendering=o,E.tail=o.sibling,E.renderingStartTime=re(),o.sibling=null,u=qt.current,Ot(qt,p?u&1|2:u&1),o):(Un(o),null);case 22:case 23:return gh(),p=o.memoizedState!==null,i!==null&&i.memoizedState!==null!==p&&(o.flags|=8192),p&&o.mode&1?Mi&1073741824&&(Un(o),o.subtreeFlags&6&&(o.flags|=8192)):Un(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function _1(i,o){switch(Td(o),o.tag){case 1:return ri(o.type)&&jc(),i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 3:return ra(),Bt(ii),Bt(Ln),kd(),i=o.flags,i&65536&&!(i&128)?(o.flags=i&-65537|128,o):null;case 5:return Ud(o),null;case 13:if(Bt(qt),i=o.memoizedState,i!==null&&i.dehydrated!==null){if(o.alternate===null)throw Error(t(340));ea()}return i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 19:return Bt(qt),null;case 4:return ra(),null;case 10:return Dd(o.type._context),null;case 22:case 23:return gh(),null;case 24:return null;default:return null}}var hu=!1,On=!1,v1=typeof WeakSet=="function"?WeakSet:Set,ke=null;function oa(i,o){var u=i.ref;if(u!==null)if(typeof u=="function")try{u(null)}catch(p){Jt(i,o,p)}else u.current=null}function rh(i,o,u){try{u()}catch(p){Jt(i,o,p)}}var p0=!1;function y1(i,o){if(gd=Ic,i=qg(),ld(i)){if("selectionStart"in i)var u={start:i.selectionStart,end:i.selectionEnd};else e:{u=(u=i.ownerDocument)&&u.defaultView||window;var p=u.getSelection&&u.getSelection();if(p&&p.rangeCount!==0){u=p.anchorNode;var y=p.anchorOffset,E=p.focusNode;p=p.focusOffset;try{u.nodeType,E.nodeType}catch{u=null;break e}var I=0,B=-1,W=-1,ue=0,xe=0,Me=i,ve=null;t:for(;;){for(var Ue;Me!==u||y!==0&&Me.nodeType!==3||(B=I+y),Me!==E||p!==0&&Me.nodeType!==3||(W=I+p),Me.nodeType===3&&(I+=Me.nodeValue.length),(Ue=Me.firstChild)!==null;)ve=Me,Me=Ue;for(;;){if(Me===i)break t;if(ve===u&&++ue===y&&(B=I),ve===E&&++xe===p&&(W=I),(Ue=Me.nextSibling)!==null)break;Me=ve,ve=Me.parentNode}Me=Ue}u=B===-1||W===-1?null:{start:B,end:W}}else u=null}u=u||{start:0,end:0}}else u=null;for(_d={focusedElem:i,selectionRange:u},Ic=!1,ke=o;ke!==null;)if(o=ke,i=o.child,(o.subtreeFlags&1028)!==0&&i!==null)i.return=o,ke=i;else for(;ke!==null;){o=ke;try{var He=o.alternate;if(o.flags&1024)switch(o.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var We=He.memoizedProps,rn=He.memoizedState,ie=o.stateNode,$=ie.getSnapshotBeforeUpdate(o.elementType===o.type?We:Yi(o.type,We),rn);ie.__reactInternalSnapshotBeforeUpdate=$}break;case 3:var oe=o.stateNode.containerInfo;oe.nodeType===1?oe.textContent="":oe.nodeType===9&&oe.documentElement&&oe.removeChild(oe.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ce){Jt(o,o.return,Ce)}if(i=o.sibling,i!==null){i.return=o.return,ke=i;break}ke=o.return}return He=p0,p0=!1,He}function Ul(i,o,u){var p=o.updateQueue;if(p=p!==null?p.lastEffect:null,p!==null){var y=p=p.next;do{if((y.tag&i)===i){var E=y.destroy;y.destroy=void 0,E!==void 0&&rh(o,u,E)}y=y.next}while(y!==p)}}function pu(i,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var u=o=o.next;do{if((u.tag&i)===i){var p=u.create;u.destroy=p()}u=u.next}while(u!==o)}}function sh(i){var o=i.ref;if(o!==null){var u=i.stateNode;switch(i.tag){case 5:i=u;break;default:i=u}typeof o=="function"?o(i):o.current=i}}function m0(i){var o=i.alternate;o!==null&&(i.alternate=null,m0(o)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(o=i.stateNode,o!==null&&(delete o[cr],delete o[Tl],delete o[Sd],delete o[t1],delete o[n1])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function g0(i){return i.tag===5||i.tag===3||i.tag===4}function _0(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||g0(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function oh(i,o,u){var p=i.tag;if(p===5||p===6)i=i.stateNode,o?u.nodeType===8?u.parentNode.insertBefore(i,o):u.insertBefore(i,o):(u.nodeType===8?(o=u.parentNode,o.insertBefore(i,u)):(o=u,o.appendChild(i)),u=u._reactRootContainer,u!=null||o.onclick!==null||(o.onclick=Xc));else if(p!==4&&(i=i.child,i!==null))for(oh(i,o,u),i=i.sibling;i!==null;)oh(i,o,u),i=i.sibling}function ah(i,o,u){var p=i.tag;if(p===5||p===6)i=i.stateNode,o?u.insertBefore(i,o):u.appendChild(i);else if(p!==4&&(i=i.child,i!==null))for(ah(i,o,u),i=i.sibling;i!==null;)ah(i,o,u),i=i.sibling}var Rn=null,$i=!1;function xs(i,o,u){for(u=u.child;u!==null;)v0(i,o,u),u=u.sibling}function v0(i,o,u){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(tt,u)}catch{}switch(u.tag){case 5:On||oa(u,o);case 6:var p=Rn,y=$i;Rn=null,xs(i,o,u),Rn=p,$i=y,Rn!==null&&($i?(i=Rn,u=u.stateNode,i.nodeType===8?i.parentNode.removeChild(u):i.removeChild(u)):Rn.removeChild(u.stateNode));break;case 18:Rn!==null&&($i?(i=Rn,u=u.stateNode,i.nodeType===8?xd(i.parentNode,u):i.nodeType===1&&xd(i,u),pl(i)):xd(Rn,u.stateNode));break;case 4:p=Rn,y=$i,Rn=u.stateNode.containerInfo,$i=!0,xs(i,o,u),Rn=p,$i=y;break;case 0:case 11:case 14:case 15:if(!On&&(p=u.updateQueue,p!==null&&(p=p.lastEffect,p!==null))){y=p=p.next;do{var E=y,I=E.destroy;E=E.tag,I!==void 0&&(E&2||E&4)&&rh(u,o,I),y=y.next}while(y!==p)}xs(i,o,u);break;case 1:if(!On&&(oa(u,o),p=u.stateNode,typeof p.componentWillUnmount=="function"))try{p.props=u.memoizedProps,p.state=u.memoizedState,p.componentWillUnmount()}catch(B){Jt(u,o,B)}xs(i,o,u);break;case 21:xs(i,o,u);break;case 22:u.mode&1?(On=(p=On)||u.memoizedState!==null,xs(i,o,u),On=p):xs(i,o,u);break;default:xs(i,o,u)}}function y0(i){var o=i.updateQueue;if(o!==null){i.updateQueue=null;var u=i.stateNode;u===null&&(u=i.stateNode=new v1),o.forEach(function(p){var y=b1.bind(null,i,p);u.has(p)||(u.add(p),p.then(y,y))})}}function Zi(i,o){var u=o.deletions;if(u!==null)for(var p=0;p<u.length;p++){var y=u[p];try{var E=i,I=o,B=I;e:for(;B!==null;){switch(B.tag){case 5:Rn=B.stateNode,$i=!1;break e;case 3:Rn=B.stateNode.containerInfo,$i=!0;break e;case 4:Rn=B.stateNode.containerInfo,$i=!0;break e}B=B.return}if(Rn===null)throw Error(t(160));v0(E,I,y),Rn=null,$i=!1;var W=y.alternate;W!==null&&(W.return=null),y.return=null}catch(ue){Jt(y,o,ue)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)x0(o,i),o=o.sibling}function x0(i,o){var u=i.alternate,p=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Zi(o,i),dr(i),p&4){try{Ul(3,i,i.return),pu(3,i)}catch(We){Jt(i,i.return,We)}try{Ul(5,i,i.return)}catch(We){Jt(i,i.return,We)}}break;case 1:Zi(o,i),dr(i),p&512&&u!==null&&oa(u,u.return);break;case 5:if(Zi(o,i),dr(i),p&512&&u!==null&&oa(u,u.return),i.flags&32){var y=i.stateNode;try{dt(y,"")}catch(We){Jt(i,i.return,We)}}if(p&4&&(y=i.stateNode,y!=null)){var E=i.memoizedProps,I=u!==null?u.memoizedProps:E,B=i.type,W=i.updateQueue;if(i.updateQueue=null,W!==null)try{B==="input"&&E.type==="radio"&&E.name!=null&&_t(y,E),st(B,I);var ue=st(B,E);for(I=0;I<W.length;I+=2){var xe=W[I],Me=W[I+1];xe==="style"?nt(y,Me):xe==="dangerouslySetInnerHTML"?Oe(y,Me):xe==="children"?dt(y,Me):b(y,xe,Me,ue)}switch(B){case"input":pt(y,E);break;case"textarea":me(y,E);break;case"select":var ve=y._wrapperState.wasMultiple;y._wrapperState.wasMultiple=!!E.multiple;var Ue=E.value;Ue!=null?k(y,!!E.multiple,Ue,!1):ve!==!!E.multiple&&(E.defaultValue!=null?k(y,!!E.multiple,E.defaultValue,!0):k(y,!!E.multiple,E.multiple?[]:"",!1))}y[Tl]=E}catch(We){Jt(i,i.return,We)}}break;case 6:if(Zi(o,i),dr(i),p&4){if(i.stateNode===null)throw Error(t(162));y=i.stateNode,E=i.memoizedProps;try{y.nodeValue=E}catch(We){Jt(i,i.return,We)}}break;case 3:if(Zi(o,i),dr(i),p&4&&u!==null&&u.memoizedState.isDehydrated)try{pl(o.containerInfo)}catch(We){Jt(i,i.return,We)}break;case 4:Zi(o,i),dr(i);break;case 13:Zi(o,i),dr(i),y=i.child,y.flags&8192&&(E=y.memoizedState!==null,y.stateNode.isHidden=E,!E||y.alternate!==null&&y.alternate.memoizedState!==null||(uh=re())),p&4&&y0(i);break;case 22:if(xe=u!==null&&u.memoizedState!==null,i.mode&1?(On=(ue=On)||xe,Zi(o,i),On=ue):Zi(o,i),dr(i),p&8192){if(ue=i.memoizedState!==null,(i.stateNode.isHidden=ue)&&!xe&&i.mode&1)for(ke=i,xe=i.child;xe!==null;){for(Me=ke=xe;ke!==null;){switch(ve=ke,Ue=ve.child,ve.tag){case 0:case 11:case 14:case 15:Ul(4,ve,ve.return);break;case 1:oa(ve,ve.return);var He=ve.stateNode;if(typeof He.componentWillUnmount=="function"){p=ve,u=ve.return;try{o=p,He.props=o.memoizedProps,He.state=o.memoizedState,He.componentWillUnmount()}catch(We){Jt(p,u,We)}}break;case 5:oa(ve,ve.return);break;case 22:if(ve.memoizedState!==null){E0(Me);continue}}Ue!==null?(Ue.return=ve,ke=Ue):E0(Me)}xe=xe.sibling}e:for(xe=null,Me=i;;){if(Me.tag===5){if(xe===null){xe=Me;try{y=Me.stateNode,ue?(E=y.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none"):(B=Me.stateNode,W=Me.memoizedProps.style,I=W!=null&&W.hasOwnProperty("display")?W.display:null,B.style.display=Qe("display",I))}catch(We){Jt(i,i.return,We)}}}else if(Me.tag===6){if(xe===null)try{Me.stateNode.nodeValue=ue?"":Me.memoizedProps}catch(We){Jt(i,i.return,We)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===i)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===i)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===i)break e;xe===Me&&(xe=null),Me=Me.return}xe===Me&&(xe=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:Zi(o,i),dr(i),p&4&&y0(i);break;case 21:break;default:Zi(o,i),dr(i)}}function dr(i){var o=i.flags;if(o&2){try{e:{for(var u=i.return;u!==null;){if(g0(u)){var p=u;break e}u=u.return}throw Error(t(160))}switch(p.tag){case 5:var y=p.stateNode;p.flags&32&&(dt(y,""),p.flags&=-33);var E=_0(i);ah(i,E,y);break;case 3:case 4:var I=p.stateNode.containerInfo,B=_0(i);oh(i,B,I);break;default:throw Error(t(161))}}catch(W){Jt(i,i.return,W)}i.flags&=-3}o&4096&&(i.flags&=-4097)}function x1(i,o,u){ke=i,S0(i)}function S0(i,o,u){for(var p=(i.mode&1)!==0;ke!==null;){var y=ke,E=y.child;if(y.tag===22&&p){var I=y.memoizedState!==null||hu;if(!I){var B=y.alternate,W=B!==null&&B.memoizedState!==null||On;B=hu;var ue=On;if(hu=I,(On=W)&&!ue)for(ke=y;ke!==null;)I=ke,W=I.child,I.tag===22&&I.memoizedState!==null?w0(y):W!==null?(W.return=I,ke=W):w0(y);for(;E!==null;)ke=E,S0(E),E=E.sibling;ke=y,hu=B,On=ue}M0(i)}else y.subtreeFlags&8772&&E!==null?(E.return=y,ke=E):M0(i)}}function M0(i){for(;ke!==null;){var o=ke;if(o.flags&8772){var u=o.alternate;try{if(o.flags&8772)switch(o.tag){case 0:case 11:case 15:On||pu(5,o);break;case 1:var p=o.stateNode;if(o.flags&4&&!On)if(u===null)p.componentDidMount();else{var y=o.elementType===o.type?u.memoizedProps:Yi(o.type,u.memoizedProps);p.componentDidUpdate(y,u.memoizedState,p.__reactInternalSnapshotBeforeUpdate)}var E=o.updateQueue;E!==null&&E_(o,E,p);break;case 3:var I=o.updateQueue;if(I!==null){if(u=null,o.child!==null)switch(o.child.tag){case 5:u=o.child.stateNode;break;case 1:u=o.child.stateNode}E_(o,I,u)}break;case 5:var B=o.stateNode;if(u===null&&o.flags&4){u=B;var W=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":W.autoFocus&&u.focus();break;case"img":W.src&&(u.src=W.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var ue=o.alternate;if(ue!==null){var xe=ue.memoizedState;if(xe!==null){var Me=xe.dehydrated;Me!==null&&pl(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}On||o.flags&512&&sh(o)}catch(ve){Jt(o,o.return,ve)}}if(o===i){ke=null;break}if(u=o.sibling,u!==null){u.return=o.return,ke=u;break}ke=o.return}}function E0(i){for(;ke!==null;){var o=ke;if(o===i){ke=null;break}var u=o.sibling;if(u!==null){u.return=o.return,ke=u;break}ke=o.return}}function w0(i){for(;ke!==null;){var o=ke;try{switch(o.tag){case 0:case 11:case 15:var u=o.return;try{pu(4,o)}catch(W){Jt(o,u,W)}break;case 1:var p=o.stateNode;if(typeof p.componentDidMount=="function"){var y=o.return;try{p.componentDidMount()}catch(W){Jt(o,y,W)}}var E=o.return;try{sh(o)}catch(W){Jt(o,E,W)}break;case 5:var I=o.return;try{sh(o)}catch(W){Jt(o,I,W)}}}catch(W){Jt(o,o.return,W)}if(o===i){ke=null;break}var B=o.sibling;if(B!==null){B.return=o.return,ke=B;break}ke=o.return}}var S1=Math.ceil,mu=w.ReactCurrentDispatcher,lh=w.ReactCurrentOwner,Oi=w.ReactCurrentBatchConfig,Ct=0,Mn=null,cn=null,Pn=0,Mi=0,aa=ms(0),mn=0,Ol=null,io=0,gu=0,ch=0,kl=null,oi=null,uh=0,la=1/0,Ur=null,_u=!1,fh=null,Ss=null,vu=!1,Ms=null,yu=0,zl=0,dh=null,xu=-1,Su=0;function Kn(){return Ct&6?re():xu!==-1?xu:xu=re()}function Es(i){return i.mode&1?Ct&2&&Pn!==0?Pn&-Pn:r1.transition!==null?(Su===0&&(Su=Lt()),Su):(i=Tt,i!==0||(i=window.event,i=i===void 0?16:Cg(i.type)),i):1}function Ki(i,o,u,p){if(50<zl)throw zl=0,dh=null,Error(t(185));yn(i,u,p),(!(Ct&2)||i!==Mn)&&(i===Mn&&(!(Ct&2)&&(gu|=u),mn===4&&ws(i,Pn)),ai(i,p),u===1&&Ct===0&&!(o.mode&1)&&(la=re()+500,$c&&_s()))}function ai(i,o){var u=i.callbackNode;$n(i,o);var p=Nn(i,i===Mn?Pn:0);if(p===0)u!==null&&F(u),i.callbackNode=null,i.callbackPriority=0;else if(o=p&-p,i.callbackPriority!==o){if(u!=null&&F(u),o===1)i.tag===0?i1(C0.bind(null,i)):f_(C0.bind(null,i)),JM(function(){!(Ct&6)&&_s()}),u=null;else{switch(lr(p)){case 1:u=Ee;break;case 4:u=De;break;case 16:u=Fe;break;case 536870912:u=it;break;default:u=Fe}u=L0(u,T0.bind(null,i))}i.callbackPriority=o,i.callbackNode=u}}function T0(i,o){if(xu=-1,Su=0,Ct&6)throw Error(t(327));var u=i.callbackNode;if(ca()&&i.callbackNode!==u)return null;var p=Nn(i,i===Mn?Pn:0);if(p===0)return null;if(p&30||p&i.expiredLanes||o)o=Mu(i,p);else{o=p;var y=Ct;Ct|=2;var E=b0();(Mn!==i||Pn!==o)&&(Ur=null,la=re()+500,so(i,o));do try{w1();break}catch(B){A0(i,B)}while(!0);Pd(),mu.current=E,Ct=y,cn!==null?o=0:(Mn=null,Pn=0,o=mn)}if(o!==0){if(o===2&&(y=br(i),y!==0&&(p=y,o=hh(i,y))),o===1)throw u=Ol,so(i,0),ws(i,p),ai(i,re()),u;if(o===6)ws(i,p);else{if(y=i.current.alternate,!(p&30)&&!M1(y)&&(o=Mu(i,p),o===2&&(E=br(i),E!==0&&(p=E,o=hh(i,E))),o===1))throw u=Ol,so(i,0),ws(i,p),ai(i,re()),u;switch(i.finishedWork=y,i.finishedLanes=p,o){case 0:case 1:throw Error(t(345));case 2:oo(i,oi,Ur);break;case 3:if(ws(i,p),(p&130023424)===p&&(o=uh+500-re(),10<o)){if(Nn(i,0)!==0)break;if(y=i.suspendedLanes,(y&p)!==p){Kn(),i.pingedLanes|=i.suspendedLanes&y;break}i.timeoutHandle=yd(oo.bind(null,i,oi,Ur),o);break}oo(i,oi,Ur);break;case 4:if(ws(i,p),(p&4194240)===p)break;for(o=i.eventTimes,y=-1;0<p;){var I=31-at(p);E=1<<I,I=o[I],I>y&&(y=I),p&=~E}if(p=y,p=re()-p,p=(120>p?120:480>p?480:1080>p?1080:1920>p?1920:3e3>p?3e3:4320>p?4320:1960*S1(p/1960))-p,10<p){i.timeoutHandle=yd(oo.bind(null,i,oi,Ur),p);break}oo(i,oi,Ur);break;case 5:oo(i,oi,Ur);break;default:throw Error(t(329))}}}return ai(i,re()),i.callbackNode===u?T0.bind(null,i):null}function hh(i,o){var u=kl;return i.current.memoizedState.isDehydrated&&(so(i,o).flags|=256),i=Mu(i,o),i!==2&&(o=oi,oi=u,o!==null&&ph(o)),i}function ph(i){oi===null?oi=i:oi.push.apply(oi,i)}function M1(i){for(var o=i;;){if(o.flags&16384){var u=o.updateQueue;if(u!==null&&(u=u.stores,u!==null))for(var p=0;p<u.length;p++){var y=u[p],E=y.getSnapshot;y=y.value;try{if(!qi(E(),y))return!1}catch{return!1}}}if(u=o.child,o.subtreeFlags&16384&&u!==null)u.return=o,o=u;else{if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function ws(i,o){for(o&=~ch,o&=~gu,i.suspendedLanes|=o,i.pingedLanes&=~o,i=i.expirationTimes;0<o;){var u=31-at(o),p=1<<u;i[u]=-1,o&=~p}}function C0(i){if(Ct&6)throw Error(t(327));ca();var o=Nn(i,0);if(!(o&1))return ai(i,re()),null;var u=Mu(i,o);if(i.tag!==0&&u===2){var p=br(i);p!==0&&(o=p,u=hh(i,p))}if(u===1)throw u=Ol,so(i,0),ws(i,o),ai(i,re()),u;if(u===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=o,oo(i,oi,Ur),ai(i,re()),null}function mh(i,o){var u=Ct;Ct|=1;try{return i(o)}finally{Ct=u,Ct===0&&(la=re()+500,$c&&_s())}}function ro(i){Ms!==null&&Ms.tag===0&&!(Ct&6)&&ca();var o=Ct;Ct|=1;var u=Oi.transition,p=Tt;try{if(Oi.transition=null,Tt=1,i)return i()}finally{Tt=p,Oi.transition=u,Ct=o,!(Ct&6)&&_s()}}function gh(){Mi=aa.current,Bt(aa)}function so(i,o){i.finishedWork=null,i.finishedLanes=0;var u=i.timeoutHandle;if(u!==-1&&(i.timeoutHandle=-1,QM(u)),cn!==null)for(u=cn.return;u!==null;){var p=u;switch(Td(p),p.tag){case 1:p=p.type.childContextTypes,p!=null&&jc();break;case 3:ra(),Bt(ii),Bt(Ln),kd();break;case 5:Ud(p);break;case 4:ra();break;case 13:Bt(qt);break;case 19:Bt(qt);break;case 10:Dd(p.type._context);break;case 22:case 23:gh()}u=u.return}if(Mn=i,cn=i=Ts(i.current,null),Pn=Mi=o,mn=0,Ol=null,ch=gu=io=0,oi=kl=null,eo!==null){for(o=0;o<eo.length;o++)if(u=eo[o],p=u.interleaved,p!==null){u.interleaved=null;var y=p.next,E=u.pending;if(E!==null){var I=E.next;E.next=y,p.next=I}u.pending=p}eo=null}return i}function A0(i,o){do{var u=cn;try{if(Pd(),su.current=cu,ou){for(var p=jt.memoizedState;p!==null;){var y=p.queue;y!==null&&(y.pending=null),p=p.next}ou=!1}if(no=0,Sn=pn=jt=null,Dl=!1,Nl=0,lh.current=null,u===null||u.return===null){mn=1,Ol=o,cn=null;break}e:{var E=i,I=u.return,B=u,W=o;if(o=Pn,B.flags|=32768,W!==null&&typeof W=="object"&&typeof W.then=="function"){var ue=W,xe=B,Me=xe.tag;if(!(xe.mode&1)&&(Me===0||Me===11||Me===15)){var ve=xe.alternate;ve?(xe.updateQueue=ve.updateQueue,xe.memoizedState=ve.memoizedState,xe.lanes=ve.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var Ue=Q_(I);if(Ue!==null){Ue.flags&=-257,J_(Ue,I,B,E,o),Ue.mode&1&&K_(E,ue,o),o=Ue,W=ue;var He=o.updateQueue;if(He===null){var We=new Set;We.add(W),o.updateQueue=We}else He.add(W);break e}else{if(!(o&1)){K_(E,ue,o),_h();break e}W=Error(t(426))}}else if(Ht&&B.mode&1){var rn=Q_(I);if(rn!==null){!(rn.flags&65536)&&(rn.flags|=256),J_(rn,I,B,E,o),bd(sa(W,B));break e}}E=W=sa(W,B),mn!==4&&(mn=2),kl===null?kl=[E]:kl.push(E),E=I;do{switch(E.tag){case 3:E.flags|=65536,o&=-o,E.lanes|=o;var ie=$_(E,W,o);M_(E,ie);break e;case 1:B=W;var $=E.type,oe=E.stateNode;if(!(E.flags&128)&&(typeof $.getDerivedStateFromError=="function"||oe!==null&&typeof oe.componentDidCatch=="function"&&(Ss===null||!Ss.has(oe)))){E.flags|=65536,o&=-o,E.lanes|=o;var Ce=Z_(E,B,o);M_(E,Ce);break e}}E=E.return}while(E!==null)}P0(u)}catch(je){o=je,cn===u&&u!==null&&(cn=u=u.return);continue}break}while(!0)}function b0(){var i=mu.current;return mu.current=cu,i===null?cu:i}function _h(){(mn===0||mn===3||mn===2)&&(mn=4),Mn===null||!(io&268435455)&&!(gu&268435455)||ws(Mn,Pn)}function Mu(i,o){var u=Ct;Ct|=2;var p=b0();(Mn!==i||Pn!==o)&&(Ur=null,so(i,o));do try{E1();break}catch(y){A0(i,y)}while(!0);if(Pd(),Ct=u,mu.current=p,cn!==null)throw Error(t(261));return Mn=null,Pn=0,mn}function E1(){for(;cn!==null;)R0(cn)}function w1(){for(;cn!==null&&!J();)R0(cn)}function R0(i){var o=I0(i.alternate,i,Mi);i.memoizedProps=i.pendingProps,o===null?P0(i):cn=o,lh.current=null}function P0(i){var o=i;do{var u=o.alternate;if(i=o.return,o.flags&32768){if(u=_1(u,o),u!==null){u.flags&=32767,cn=u;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{mn=6,cn=null;return}}else if(u=g1(u,o,Mi),u!==null){cn=u;return}if(o=o.sibling,o!==null){cn=o;return}cn=o=i}while(o!==null);mn===0&&(mn=5)}function oo(i,o,u){var p=Tt,y=Oi.transition;try{Oi.transition=null,Tt=1,T1(i,o,u,p)}finally{Oi.transition=y,Tt=p}return null}function T1(i,o,u,p){do ca();while(Ms!==null);if(Ct&6)throw Error(t(327));u=i.finishedWork;var y=i.finishedLanes;if(u===null)return null;if(i.finishedWork=null,i.finishedLanes=0,u===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var E=u.lanes|u.childLanes;if(bn(i,E),i===Mn&&(cn=Mn=null,Pn=0),!(u.subtreeFlags&2064)&&!(u.flags&2064)||vu||(vu=!0,L0(Fe,function(){return ca(),null})),E=(u.flags&15990)!==0,u.subtreeFlags&15990||E){E=Oi.transition,Oi.transition=null;var I=Tt;Tt=1;var B=Ct;Ct|=4,lh.current=null,y1(i,u),x0(u,i),XM(_d),Ic=!!gd,_d=gd=null,i.current=u,x1(u),ce(),Ct=B,Tt=I,Oi.transition=E}else i.current=u;if(vu&&(vu=!1,Ms=i,yu=y),E=i.pendingLanes,E===0&&(Ss=null),St(u.stateNode),ai(i,re()),o!==null)for(p=i.onRecoverableError,u=0;u<o.length;u++)y=o[u],p(y.value,{componentStack:y.stack,digest:y.digest});if(_u)throw _u=!1,i=fh,fh=null,i;return yu&1&&i.tag!==0&&ca(),E=i.pendingLanes,E&1?i===dh?zl++:(zl=0,dh=i):zl=0,_s(),null}function ca(){if(Ms!==null){var i=lr(yu),o=Oi.transition,u=Tt;try{if(Oi.transition=null,Tt=16>i?16:i,Ms===null)var p=!1;else{if(i=Ms,Ms=null,yu=0,Ct&6)throw Error(t(331));var y=Ct;for(Ct|=4,ke=i.current;ke!==null;){var E=ke,I=E.child;if(ke.flags&16){var B=E.deletions;if(B!==null){for(var W=0;W<B.length;W++){var ue=B[W];for(ke=ue;ke!==null;){var xe=ke;switch(xe.tag){case 0:case 11:case 15:Ul(8,xe,E)}var Me=xe.child;if(Me!==null)Me.return=xe,ke=Me;else for(;ke!==null;){xe=ke;var ve=xe.sibling,Ue=xe.return;if(m0(xe),xe===ue){ke=null;break}if(ve!==null){ve.return=Ue,ke=ve;break}ke=Ue}}}var He=E.alternate;if(He!==null){var We=He.child;if(We!==null){He.child=null;do{var rn=We.sibling;We.sibling=null,We=rn}while(We!==null)}}ke=E}}if(E.subtreeFlags&2064&&I!==null)I.return=E,ke=I;else e:for(;ke!==null;){if(E=ke,E.flags&2048)switch(E.tag){case 0:case 11:case 15:Ul(9,E,E.return)}var ie=E.sibling;if(ie!==null){ie.return=E.return,ke=ie;break e}ke=E.return}}var $=i.current;for(ke=$;ke!==null;){I=ke;var oe=I.child;if(I.subtreeFlags&2064&&oe!==null)oe.return=I,ke=oe;else e:for(I=$;ke!==null;){if(B=ke,B.flags&2048)try{switch(B.tag){case 0:case 11:case 15:pu(9,B)}}catch(je){Jt(B,B.return,je)}if(B===I){ke=null;break e}var Ce=B.sibling;if(Ce!==null){Ce.return=B.return,ke=Ce;break e}ke=B.return}}if(Ct=y,_s(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(tt,i)}catch{}p=!0}return p}finally{Tt=u,Oi.transition=o}}return!1}function D0(i,o,u){o=sa(u,o),o=$_(i,o,1),i=ys(i,o,1),o=Kn(),i!==null&&(yn(i,1,o),ai(i,o))}function Jt(i,o,u){if(i.tag===3)D0(i,i,u);else for(;o!==null;){if(o.tag===3){D0(o,i,u);break}else if(o.tag===1){var p=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof p.componentDidCatch=="function"&&(Ss===null||!Ss.has(p))){i=sa(u,i),i=Z_(o,i,1),o=ys(o,i,1),i=Kn(),o!==null&&(yn(o,1,i),ai(o,i));break}}o=o.return}}function C1(i,o,u){var p=i.pingCache;p!==null&&p.delete(o),o=Kn(),i.pingedLanes|=i.suspendedLanes&u,Mn===i&&(Pn&u)===u&&(mn===4||mn===3&&(Pn&130023424)===Pn&&500>re()-uh?so(i,0):ch|=u),ai(i,o)}function N0(i,o){o===0&&(i.mode&1?(o=Qt,Qt<<=1,!(Qt&130023424)&&(Qt=4194304)):o=1);var u=Kn();i=Ir(i,o),i!==null&&(yn(i,o,u),ai(i,u))}function A1(i){var o=i.memoizedState,u=0;o!==null&&(u=o.retryLane),N0(i,u)}function b1(i,o){var u=0;switch(i.tag){case 13:var p=i.stateNode,y=i.memoizedState;y!==null&&(u=y.retryLane);break;case 19:p=i.stateNode;break;default:throw Error(t(314))}p!==null&&p.delete(o),N0(i,u)}var I0;I0=function(i,o,u){if(i!==null)if(i.memoizedProps!==o.pendingProps||ii.current)si=!0;else{if(!(i.lanes&u)&&!(o.flags&128))return si=!1,m1(i,o,u);si=!!(i.flags&131072)}else si=!1,Ht&&o.flags&1048576&&d_(o,Kc,o.index);switch(o.lanes=0,o.tag){case 2:var p=o.type;du(i,o),i=o.pendingProps;var y=Ko(o,Ln.current);ia(o,u),y=Vd(null,o,p,i,y,u);var E=Hd();return o.flags|=1,typeof y=="object"&&y!==null&&typeof y.render=="function"&&y.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,ri(p)?(E=!0,Yc(o)):E=!1,o.memoizedState=y.state!==null&&y.state!==void 0?y.state:null,Ld(o),y.updater=uu,o.stateNode=y,y._reactInternals=o,Yd(o,p,i,u),o=Qd(null,o,p,!0,E,u)):(o.tag=0,Ht&&E&&wd(o),Zn(null,o,y,u),o=o.child),o;case 16:p=o.elementType;e:{switch(du(i,o),i=o.pendingProps,y=p._init,p=y(p._payload),o.type=p,y=o.tag=P1(p),i=Yi(p,i),y){case 0:o=Kd(null,o,p,i,u);break e;case 1:o=s0(null,o,p,i,u);break e;case 11:o=e0(null,o,p,i,u);break e;case 14:o=t0(null,o,p,Yi(p.type,i),u);break e}throw Error(t(306,p,""))}return o;case 0:return p=o.type,y=o.pendingProps,y=o.elementType===p?y:Yi(p,y),Kd(i,o,p,y,u);case 1:return p=o.type,y=o.pendingProps,y=o.elementType===p?y:Yi(p,y),s0(i,o,p,y,u);case 3:e:{if(o0(o),i===null)throw Error(t(387));p=o.pendingProps,E=o.memoizedState,y=E.element,S_(i,o),iu(o,p,null,u);var I=o.memoizedState;if(p=I.element,E.isDehydrated)if(E={element:p,isDehydrated:!1,cache:I.cache,pendingSuspenseBoundaries:I.pendingSuspenseBoundaries,transitions:I.transitions},o.updateQueue.baseState=E,o.memoizedState=E,o.flags&256){y=sa(Error(t(423)),o),o=a0(i,o,p,u,y);break e}else if(p!==y){y=sa(Error(t(424)),o),o=a0(i,o,p,u,y);break e}else for(Si=ps(o.stateNode.containerInfo.firstChild),xi=o,Ht=!0,ji=null,u=y_(o,null,p,u),o.child=u;u;)u.flags=u.flags&-3|4096,u=u.sibling;else{if(ea(),p===y){o=Fr(i,o,u);break e}Zn(i,o,p,u)}o=o.child}return o;case 5:return w_(o),i===null&&Ad(o),p=o.type,y=o.pendingProps,E=i!==null?i.memoizedProps:null,I=y.children,vd(p,y)?I=null:E!==null&&vd(p,E)&&(o.flags|=32),r0(i,o),Zn(i,o,I,u),o.child;case 6:return i===null&&Ad(o),null;case 13:return l0(i,o,u);case 4:return Fd(o,o.stateNode.containerInfo),p=o.pendingProps,i===null?o.child=ta(o,null,p,u):Zn(i,o,p,u),o.child;case 11:return p=o.type,y=o.pendingProps,y=o.elementType===p?y:Yi(p,y),e0(i,o,p,y,u);case 7:return Zn(i,o,o.pendingProps,u),o.child;case 8:return Zn(i,o,o.pendingProps.children,u),o.child;case 12:return Zn(i,o,o.pendingProps.children,u),o.child;case 10:e:{if(p=o.type._context,y=o.pendingProps,E=o.memoizedProps,I=y.value,Ot(eu,p._currentValue),p._currentValue=I,E!==null)if(qi(E.value,I)){if(E.children===y.children&&!ii.current){o=Fr(i,o,u);break e}}else for(E=o.child,E!==null&&(E.return=o);E!==null;){var B=E.dependencies;if(B!==null){I=E.child;for(var W=B.firstContext;W!==null;){if(W.context===p){if(E.tag===1){W=Lr(-1,u&-u),W.tag=2;var ue=E.updateQueue;if(ue!==null){ue=ue.shared;var xe=ue.pending;xe===null?W.next=W:(W.next=xe.next,xe.next=W),ue.pending=W}}E.lanes|=u,W=E.alternate,W!==null&&(W.lanes|=u),Nd(E.return,u,o),B.lanes|=u;break}W=W.next}}else if(E.tag===10)I=E.type===o.type?null:E.child;else if(E.tag===18){if(I=E.return,I===null)throw Error(t(341));I.lanes|=u,B=I.alternate,B!==null&&(B.lanes|=u),Nd(I,u,o),I=E.sibling}else I=E.child;if(I!==null)I.return=E;else for(I=E;I!==null;){if(I===o){I=null;break}if(E=I.sibling,E!==null){E.return=I.return,I=E;break}I=I.return}E=I}Zn(i,o,y.children,u),o=o.child}return o;case 9:return y=o.type,p=o.pendingProps.children,ia(o,u),y=Fi(y),p=p(y),o.flags|=1,Zn(i,o,p,u),o.child;case 14:return p=o.type,y=Yi(p,o.pendingProps),y=Yi(p.type,y),t0(i,o,p,y,u);case 15:return n0(i,o,o.type,o.pendingProps,u);case 17:return p=o.type,y=o.pendingProps,y=o.elementType===p?y:Yi(p,y),du(i,o),o.tag=1,ri(p)?(i=!0,Yc(o)):i=!1,ia(o,u),j_(o,p,y),Yd(o,p,y,u),Qd(null,o,p,!0,i,u);case 19:return u0(i,o,u);case 22:return i0(i,o,u)}throw Error(t(156,o.tag))};function L0(i,o){return Pc(i,o)}function R1(i,o,u,p){this.tag=i,this.key=u,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=p,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ki(i,o,u,p){return new R1(i,o,u,p)}function vh(i){return i=i.prototype,!(!i||!i.isReactComponent)}function P1(i){if(typeof i=="function")return vh(i)?1:0;if(i!=null){if(i=i.$$typeof,i===z)return 11;if(i===ee)return 14}return 2}function Ts(i,o){var u=i.alternate;return u===null?(u=ki(i.tag,o,i.key,i.mode),u.elementType=i.elementType,u.type=i.type,u.stateNode=i.stateNode,u.alternate=i,i.alternate=u):(u.pendingProps=o,u.type=i.type,u.flags=0,u.subtreeFlags=0,u.deletions=null),u.flags=i.flags&14680064,u.childLanes=i.childLanes,u.lanes=i.lanes,u.child=i.child,u.memoizedProps=i.memoizedProps,u.memoizedState=i.memoizedState,u.updateQueue=i.updateQueue,o=i.dependencies,u.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},u.sibling=i.sibling,u.index=i.index,u.ref=i.ref,u}function Eu(i,o,u,p,y,E){var I=2;if(p=i,typeof i=="function")vh(i)&&(I=1);else if(typeof i=="string")I=5;else e:switch(i){case D:return ao(u.children,y,E,o);case P:I=8,y|=8;break;case T:return i=ki(12,u,o,y|2),i.elementType=T,i.lanes=E,i;case H:return i=ki(13,u,o,y),i.elementType=H,i.lanes=E,i;case q:return i=ki(19,u,o,y),i.elementType=q,i.lanes=E,i;case Q:return wu(u,y,E,o);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case A:I=10;break e;case U:I=9;break e;case z:I=11;break e;case ee:I=14;break e;case j:I=16,p=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return o=ki(I,u,o,y),o.elementType=i,o.type=p,o.lanes=E,o}function ao(i,o,u,p){return i=ki(7,i,p,o),i.lanes=u,i}function wu(i,o,u,p){return i=ki(22,i,p,o),i.elementType=Q,i.lanes=u,i.stateNode={isHidden:!1},i}function yh(i,o,u){return i=ki(6,i,null,o),i.lanes=u,i}function xh(i,o,u){return o=ki(4,i.children!==null?i.children:[],i.key,o),o.lanes=u,o.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},o}function D1(i,o,u,p,y){this.tag=o,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=In(0),this.expirationTimes=In(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=In(0),this.identifierPrefix=p,this.onRecoverableError=y,this.mutableSourceEagerHydrationData=null}function Sh(i,o,u,p,y,E,I,B,W){return i=new D1(i,o,u,B,W),o===1?(o=1,E===!0&&(o|=8)):o=0,E=ki(3,null,null,o),i.current=E,E.stateNode=i,E.memoizedState={element:p,isDehydrated:u,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ld(E),i}function N1(i,o,u){var p=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:p==null?null:""+p,children:i,containerInfo:o,implementation:u}}function F0(i){if(!i)return gs;i=i._reactInternals;e:{if(ar(i)!==i||i.tag!==1)throw Error(t(170));var o=i;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(ri(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(i.tag===1){var u=i.type;if(ri(u))return c_(i,u,o)}return o}function U0(i,o,u,p,y,E,I,B,W){return i=Sh(u,p,!0,i,y,E,I,B,W),i.context=F0(null),u=i.current,p=Kn(),y=Es(u),E=Lr(p,y),E.callback=o??null,ys(u,E,y),i.current.lanes=y,yn(i,y,p),ai(i,p),i}function Tu(i,o,u,p){var y=o.current,E=Kn(),I=Es(y);return u=F0(u),o.context===null?o.context=u:o.pendingContext=u,o=Lr(E,I),o.payload={element:i},p=p===void 0?null:p,p!==null&&(o.callback=p),i=ys(y,o,I),i!==null&&(Ki(i,y,I,E),nu(i,y,I)),I}function Cu(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function O0(i,o){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var u=i.retryLane;i.retryLane=u!==0&&u<o?u:o}}function Mh(i,o){O0(i,o),(i=i.alternate)&&O0(i,o)}var k0=typeof reportError=="function"?reportError:function(i){console.error(i)};function Eh(i){this._internalRoot=i}Au.prototype.render=Eh.prototype.render=function(i){var o=this._internalRoot;if(o===null)throw Error(t(409));Tu(i,o,null,null)},Au.prototype.unmount=Eh.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var o=i.containerInfo;ro(function(){Tu(null,i,null,null)}),o[Rr]=null}};function Au(i){this._internalRoot=i}Au.prototype.unstable_scheduleHydration=function(i){if(i){var o=Sg();i={blockedOn:null,target:i,priority:o};for(var u=0;u<fs.length&&o!==0&&o<fs[u].priority;u++);fs.splice(u,0,i),u===0&&wg(i)}};function wh(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function bu(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function z0(){}function I1(i,o,u,p,y){if(y){if(typeof p=="function"){var E=p;p=function(){var ue=Cu(I);E.call(ue)}}var I=U0(o,p,i,0,null,!1,!1,"",z0);return i._reactRootContainer=I,i[Rr]=I.current,El(i.nodeType===8?i.parentNode:i),ro(),I}for(;y=i.lastChild;)i.removeChild(y);if(typeof p=="function"){var B=p;p=function(){var ue=Cu(W);B.call(ue)}}var W=Sh(i,0,!1,null,null,!1,!1,"",z0);return i._reactRootContainer=W,i[Rr]=W.current,El(i.nodeType===8?i.parentNode:i),ro(function(){Tu(o,W,u,p)}),W}function Ru(i,o,u,p,y){var E=u._reactRootContainer;if(E){var I=E;if(typeof y=="function"){var B=y;y=function(){var W=Cu(I);B.call(W)}}Tu(o,I,i,y)}else I=I1(u,o,i,y,p);return Cu(I)}yg=function(i){switch(i.tag){case 3:var o=i.stateNode;if(o.current.memoizedState.isDehydrated){var u=vt(o.pendingLanes);u!==0&&(xn(o,u|1),ai(o,re()),!(Ct&6)&&(la=re()+500,_s()))}break;case 13:ro(function(){var p=Ir(i,1);if(p!==null){var y=Kn();Ki(p,i,1,y)}}),Mh(i,1)}},$f=function(i){if(i.tag===13){var o=Ir(i,134217728);if(o!==null){var u=Kn();Ki(o,i,134217728,u)}Mh(i,134217728)}},xg=function(i){if(i.tag===13){var o=Es(i),u=Ir(i,o);if(u!==null){var p=Kn();Ki(u,i,o,p)}Mh(i,o)}},Sg=function(){return Tt},Mg=function(i,o){var u=Tt;try{return Tt=i,o()}finally{Tt=u}},Pe=function(i,o,u){switch(o){case"input":if(pt(i,u),o=u.name,u.type==="radio"&&o!=null){for(u=i;u.parentNode;)u=u.parentNode;for(u=u.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<u.length;o++){var p=u[o];if(p!==i&&p.form===i.form){var y=qc(p);if(!y)throw Error(t(90));ct(p),pt(p,y)}}}break;case"textarea":me(i,u);break;case"select":o=u.value,o!=null&&k(i,!!u.multiple,o,!1)}},kt=mh,hn=ro;var L1={usingClientEntryPoint:!1,Events:[Cl,$o,qc,Ie,ot,mh]},Bl={findFiberByHostInstance:Zs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},F1={bundleType:Bl.bundleType,version:Bl.version,rendererPackageName:Bl.rendererPackageName,rendererConfig:Bl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:w.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=bc(i),i===null?null:i.stateNode},findFiberByHostInstance:Bl.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pu.isDisabled&&Pu.supportsFiber)try{tt=Pu.inject(F1),Ge=Pu}catch{}}return li.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L1,li.createPortal=function(i,o){var u=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wh(o))throw Error(t(200));return N1(i,o,null,u)},li.createRoot=function(i,o){if(!wh(i))throw Error(t(299));var u=!1,p="",y=k0;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(y=o.onRecoverableError)),o=Sh(i,1,!1,null,null,u,!1,p,y),i[Rr]=o.current,El(i.nodeType===8?i.parentNode:i),new Eh(o)},li.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var o=i._reactInternals;if(o===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=bc(o),i=i===null?null:i.stateNode,i},li.flushSync=function(i){return ro(i)},li.hydrate=function(i,o,u){if(!bu(o))throw Error(t(200));return Ru(null,i,o,!0,u)},li.hydrateRoot=function(i,o,u){if(!wh(i))throw Error(t(405));var p=u!=null&&u.hydratedSources||null,y=!1,E="",I=k0;if(u!=null&&(u.unstable_strictMode===!0&&(y=!0),u.identifierPrefix!==void 0&&(E=u.identifierPrefix),u.onRecoverableError!==void 0&&(I=u.onRecoverableError)),o=U0(o,null,i,1,u??null,y,!1,E,I),i[Rr]=o.current,El(i),p)for(i=0;i<p.length;i++)u=p[i],y=u._getVersion,y=y(u._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[u,y]:o.mutableSourceEagerHydrationData.push(u,y);return new Au(o)},li.render=function(i,o,u){if(!bu(o))throw Error(t(200));return Ru(null,i,o,!1,u)},li.unmountComponentAtNode=function(i){if(!bu(i))throw Error(t(40));return i._reactRootContainer?(ro(function(){Ru(null,null,i,!1,function(){i._reactRootContainer=null,i[Rr]=null})}),!0):!1},li.unstable_batchedUpdates=mh,li.unstable_renderSubtreeIntoContainer=function(i,o,u,p){if(!bu(u))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return Ru(i,o,u,!1,p)},li.version="18.3.1-next-f1338f8080-20240426",li}var j0;function W1(){if(j0)return Ah.exports;j0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Ah.exports=G1(),Ah.exports}var Y0;function X1(){if(Y0)return Du;Y0=1;var r=W1();return Du.createRoot=r.createRoot,Du.hydrateRoot=r.hydrateRoot,Du}var q1=X1();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wm="172",j1=0,$0=1,Y1=2,Oy=1,$1=2,Xr=3,Hs=0,fi=1,mr=2,Zr=0,Ia=1,Z0=2,K0=3,Q0=4,Z1=5,Eo=100,K1=101,Q1=102,J1=103,eE=104,tE=200,nE=201,iE=202,rE=203,pp=204,mp=205,sE=206,oE=207,aE=208,lE=209,cE=210,uE=211,fE=212,dE=213,hE=214,gp=0,_p=1,vp=2,za=3,yp=4,xp=5,Sp=6,Mp=7,ky=0,pE=1,mE=2,zs=0,gE=1,_E=2,vE=3,yE=4,xE=5,SE=6,ME=7,zy=300,Ba=301,Va=302,Ep=303,wp=304,Nf=306,Tp=1e3,To=1001,Cp=1002,nr=1003,EE=1004,Nu=1005,Tn=1006,Ph=1007,Co=1008,Jr=1009,By=1010,Vy=1011,ic=1012,Tm=1013,No=1014,_r=1015,el=1016,Cm=1017,Am=1018,Ha=1020,Hy=35902,Gy=1021,Wy=1022,Ai=1023,Xy=1024,qy=1025,La=1026,Ga=1027,jy=1028,bm=1029,Yy=1030,Rm=1031,Pm=1033,of=33776,af=33777,lf=33778,cf=33779,Ap=35840,bp=35841,Rp=35842,Pp=35843,Dp=36196,Np=37492,Ip=37496,Lp=37808,Fp=37809,Up=37810,Op=37811,kp=37812,zp=37813,Bp=37814,Vp=37815,Hp=37816,Gp=37817,Wp=37818,Xp=37819,qp=37820,jp=37821,uf=36492,Yp=36494,$p=36495,$y=36283,Zp=36284,Kp=36285,Qp=36286,wE=3200,TE=3201,Zy=0,CE=1,Fs="",Vi="srgb",Wa="srgb-linear",gf="linear",It="srgb",ua=7680,J0=519,AE=512,bE=513,RE=514,Ky=515,PE=516,DE=517,NE=518,IE=519,ev=35044,tv="300 es",$r=2e3,_f=2001;class Fo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let a=0,c=s.length;a<c;a++)s[a].call(this,e);e.target=null}}}const kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let nv=1234567;const Ql=Math.PI/180,rc=180/Math.PI;function tl(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(kn[r&255]+kn[r>>8&255]+kn[r>>16&255]+kn[r>>24&255]+"-"+kn[e&255]+kn[e>>8&255]+"-"+kn[e>>16&15|64]+kn[e>>24&255]+"-"+kn[t&63|128]+kn[t>>8&255]+"-"+kn[t>>16&255]+kn[t>>24&255]+kn[n&255]+kn[n>>8&255]+kn[n>>16&255]+kn[n>>24&255]).toLowerCase()}function yt(r,e,t){return Math.max(e,Math.min(t,r))}function Dm(r,e){return(r%e+e)%e}function LE(r,e,t,n,s){return n+(r-e)*(s-n)/(t-e)}function FE(r,e,t){return r!==e?(t-r)/(e-r):0}function Jl(r,e,t){return(1-t)*r+t*e}function UE(r,e,t,n){return Jl(r,e,1-Math.exp(-t*n))}function OE(r,e=1){return e-Math.abs(Dm(r,e*2)-e)}function kE(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function zE(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function BE(r,e){return r+Math.floor(Math.random()*(e-r+1))}function VE(r,e){return r+Math.random()*(e-r)}function HE(r){return r*(.5-Math.random())}function GE(r){r!==void 0&&(nv=r);let e=nv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function WE(r){return r*Ql}function XE(r){return r*rc}function qE(r){return(r&r-1)===0&&r!==0}function jE(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function YE(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function $E(r,e,t,n,s){const a=Math.cos,c=Math.sin,l=a(t/2),f=c(t/2),d=a((e+n)/2),h=c((e+n)/2),m=a((e-n)/2),g=c((e-n)/2),_=a((n-e)/2),S=c((n-e)/2);switch(s){case"XYX":r.set(l*h,f*m,f*g,l*d);break;case"YZY":r.set(f*g,l*h,f*m,l*d);break;case"ZXZ":r.set(f*m,f*g,l*h,l*d);break;case"XZX":r.set(l*h,f*S,f*_,l*d);break;case"YXY":r.set(f*_,l*h,f*S,l*d);break;case"ZYZ":r.set(f*S,f*_,l*h,l*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ca(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Qn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Te={DEG2RAD:Ql,RAD2DEG:rc,generateUUID:tl,clamp:yt,euclideanModulo:Dm,mapLinear:LE,inverseLerp:FE,lerp:Jl,damp:UE,pingpong:OE,smoothstep:kE,smootherstep:zE,randInt:BE,randFloat:VE,randFloatSpread:HE,seededRandom:GE,degToRad:WE,radToDeg:XE,isPowerOfTwo:qE,ceilPowerOfTwo:jE,floorPowerOfTwo:YE,setQuaternionFromProperEuler:$E,normalize:Qn,denormalize:Ca};class ft{constructor(e=0,t=0){ft.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(yt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*n-c*s+e.x,this.y=a*s+c*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(e,t,n,s,a,c,l,f,d){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,c,l,f,d)}set(e,t,n,s,a,c,l,f,d){const h=this.elements;return h[0]=e,h[1]=s,h[2]=l,h[3]=t,h[4]=a,h[5]=f,h[6]=n,h[7]=c,h[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,c=n[0],l=n[3],f=n[6],d=n[1],h=n[4],m=n[7],g=n[2],_=n[5],S=n[8],M=s[0],x=s[3],v=s[6],R=s[1],b=s[4],w=s[7],C=s[2],N=s[5],D=s[8];return a[0]=c*M+l*R+f*C,a[3]=c*x+l*b+f*N,a[6]=c*v+l*w+f*D,a[1]=d*M+h*R+m*C,a[4]=d*x+h*b+m*N,a[7]=d*v+h*w+m*D,a[2]=g*M+_*R+S*C,a[5]=g*x+_*b+S*N,a[8]=g*v+_*w+S*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],c=e[4],l=e[5],f=e[6],d=e[7],h=e[8];return t*c*h-t*l*d-n*a*h+n*l*f+s*a*d-s*c*f}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],c=e[4],l=e[5],f=e[6],d=e[7],h=e[8],m=h*c-l*d,g=l*f-h*a,_=d*a-c*f,S=t*m+n*g+s*_;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/S;return e[0]=m*M,e[1]=(s*d-h*n)*M,e[2]=(l*n-s*c)*M,e[3]=g*M,e[4]=(h*t-s*f)*M,e[5]=(s*a-l*t)*M,e[6]=_*M,e[7]=(n*f-d*t)*M,e[8]=(c*t-n*a)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,a,c,l){const f=Math.cos(a),d=Math.sin(a);return this.set(n*f,n*d,-n*(f*c+d*l)+c+e,-s*d,s*f,-s*(-d*c+f*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(Dh.makeScale(e,t)),this}rotate(e){return this.premultiply(Dh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Dh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Dh=new lt;function Qy(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function vf(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ZE(){const r=vf("canvas");return r.style.display="block",r}const iv={};function Aa(r){r in iv||(iv[r]=!0,console.warn(r))}function KE(r,e,t){return new Promise(function(n,s){function a(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:s();break;case r.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}function QE(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function JE(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const rv=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sv=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ew(){const r={enabled:!0,workingColorSpace:Wa,spaces:{},convert:function(s,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===It&&(s.r=Kr(s.r),s.g=Kr(s.g),s.b=Kr(s.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===It&&(s.r=Fa(s.r),s.g=Fa(s.g),s.b=Fa(s.b))),s},fromWorkingColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},toWorkingColorSpace:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fs?gf:this.spaces[s].transfer},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,c){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Wa]:{primaries:e,whitePoint:n,transfer:gf,toXYZ:rv,fromXYZ:sv,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vi},outputColorSpaceConfig:{drawingBufferColorSpace:Vi}},[Vi]:{primaries:e,whitePoint:n,transfer:It,toXYZ:rv,fromXYZ:sv,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vi}}}),r}const bt=ew();function Kr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Fa(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let fa;class tw{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{fa===void 0&&(fa=vf("canvas")),fa.width=e.width,fa.height=e.height;const n=fa.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=fa}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=vf("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),a=s.data;for(let c=0;c<a.length;c++)a[c]=Kr(a[c]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Kr(t[n]/255)*255):t[n]=Kr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nw=0;class Jy{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nw++}),this.uuid=tl(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let c=0,l=s.length;c<l;c++)s[c].isDataTexture?a.push(Nh(s[c].image)):a.push(Nh(s[c]))}else a=Nh(s);n.url=a}return t||(e.images[this.uuid]=n),n}}function Nh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?tw.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let iw=0;class Gn extends Fo{constructor(e=Gn.DEFAULT_IMAGE,t=Gn.DEFAULT_MAPPING,n=To,s=To,a=Tn,c=Co,l=Ai,f=Jr,d=Gn.DEFAULT_ANISOTROPY,h=Fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iw++}),this.uuid=tl(),this.name="",this.source=new Jy(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=c,this.anisotropy=d,this.format=l,this.internalFormat=null,this.type=f,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tp:e.x=e.x-Math.floor(e.x);break;case To:e.x=e.x<0?0:1;break;case Cp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tp:e.y=e.y-Math.floor(e.y);break;case To:e.y=e.y<0?0:1;break;case Cp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=zy;Gn.DEFAULT_ANISOTROPY=1;class on{constructor(e=0,t=0,n=0,s=1){on.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*n+c[8]*s+c[12]*a,this.y=c[1]*t+c[5]*n+c[9]*s+c[13]*a,this.z=c[2]*t+c[6]*n+c[10]*s+c[14]*a,this.w=c[3]*t+c[7]*n+c[11]*s+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,a;const f=e.elements,d=f[0],h=f[4],m=f[8],g=f[1],_=f[5],S=f[9],M=f[2],x=f[6],v=f[10];if(Math.abs(h-g)<.01&&Math.abs(m-M)<.01&&Math.abs(S-x)<.01){if(Math.abs(h+g)<.1&&Math.abs(m+M)<.1&&Math.abs(S+x)<.1&&Math.abs(d+_+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(d+1)/2,w=(_+1)/2,C=(v+1)/2,N=(h+g)/4,D=(m+M)/4,P=(S+x)/4;return b>w&&b>C?b<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(b),s=N/n,a=D/n):w>C?w<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(w),n=N/s,a=P/s):C<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(C),n=D/a,s=P/a),this.set(n,s,a,t),this}let R=Math.sqrt((x-S)*(x-S)+(m-M)*(m-M)+(g-h)*(g-h));return Math.abs(R)<.001&&(R=1),this.x=(x-S)/R,this.y=(m-M)/R,this.z=(g-h)/R,this.w=Math.acos((d+_+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this.w=yt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this.w=yt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(yt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rw extends Fo{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new on(0,0,e,t),this.scissorTest=!1,this.viewport=new on(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new Gn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const c=n.count;for(let l=0;l<c;l++)this.textures[l]=a.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new Jy(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ir extends rw{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ex extends Gn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nr,this.minFilter=nr,this.wrapR=To,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sw extends Gn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nr,this.minFilter=nr,this.wrapR=To,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nl{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,a,c,l){let f=n[s+0],d=n[s+1],h=n[s+2],m=n[s+3];const g=a[c+0],_=a[c+1],S=a[c+2],M=a[c+3];if(l===0){e[t+0]=f,e[t+1]=d,e[t+2]=h,e[t+3]=m;return}if(l===1){e[t+0]=g,e[t+1]=_,e[t+2]=S,e[t+3]=M;return}if(m!==M||f!==g||d!==_||h!==S){let x=1-l;const v=f*g+d*_+h*S+m*M,R=v>=0?1:-1,b=1-v*v;if(b>Number.EPSILON){const C=Math.sqrt(b),N=Math.atan2(C,v*R);x=Math.sin(x*N)/C,l=Math.sin(l*N)/C}const w=l*R;if(f=f*x+g*w,d=d*x+_*w,h=h*x+S*w,m=m*x+M*w,x===1-l){const C=1/Math.sqrt(f*f+d*d+h*h+m*m);f*=C,d*=C,h*=C,m*=C}}e[t]=f,e[t+1]=d,e[t+2]=h,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,s,a,c){const l=n[s],f=n[s+1],d=n[s+2],h=n[s+3],m=a[c],g=a[c+1],_=a[c+2],S=a[c+3];return e[t]=l*S+h*m+f*_-d*g,e[t+1]=f*S+h*g+d*m-l*_,e[t+2]=d*S+h*_+l*g-f*m,e[t+3]=h*S-l*m-f*g-d*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,a=e._z,c=e._order,l=Math.cos,f=Math.sin,d=l(n/2),h=l(s/2),m=l(a/2),g=f(n/2),_=f(s/2),S=f(a/2);switch(c){case"XYZ":this._x=g*h*m+d*_*S,this._y=d*_*m-g*h*S,this._z=d*h*S+g*_*m,this._w=d*h*m-g*_*S;break;case"YXZ":this._x=g*h*m+d*_*S,this._y=d*_*m-g*h*S,this._z=d*h*S-g*_*m,this._w=d*h*m+g*_*S;break;case"ZXY":this._x=g*h*m-d*_*S,this._y=d*_*m+g*h*S,this._z=d*h*S+g*_*m,this._w=d*h*m-g*_*S;break;case"ZYX":this._x=g*h*m-d*_*S,this._y=d*_*m+g*h*S,this._z=d*h*S-g*_*m,this._w=d*h*m+g*_*S;break;case"YZX":this._x=g*h*m+d*_*S,this._y=d*_*m+g*h*S,this._z=d*h*S-g*_*m,this._w=d*h*m-g*_*S;break;case"XZY":this._x=g*h*m-d*_*S,this._y=d*_*m-g*h*S,this._z=d*h*S+g*_*m,this._w=d*h*m+g*_*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],a=t[8],c=t[1],l=t[5],f=t[9],d=t[2],h=t[6],m=t[10],g=n+l+m;if(g>0){const _=.5/Math.sqrt(g+1);this._w=.25/_,this._x=(h-f)*_,this._y=(a-d)*_,this._z=(c-s)*_}else if(n>l&&n>m){const _=2*Math.sqrt(1+n-l-m);this._w=(h-f)/_,this._x=.25*_,this._y=(s+c)/_,this._z=(a+d)/_}else if(l>m){const _=2*Math.sqrt(1+l-n-m);this._w=(a-d)/_,this._x=(s+c)/_,this._y=.25*_,this._z=(f+h)/_}else{const _=2*Math.sqrt(1+m-n-l);this._w=(c-s)/_,this._x=(a+d)/_,this._y=(f+h)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,a=e._z,c=e._w,l=t._x,f=t._y,d=t._z,h=t._w;return this._x=n*h+c*l+s*d-a*f,this._y=s*h+c*f+a*l-n*d,this._z=a*h+c*d+n*f-s*l,this._w=c*h-n*l-s*f-a*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,a=this._z,c=this._w;let l=c*e._w+n*e._x+s*e._y+a*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=c,this._x=n,this._y=s,this._z=a,this;const f=1-l*l;if(f<=Number.EPSILON){const _=1-t;return this._w=_*c+t*this._w,this._x=_*n+t*this._x,this._y=_*s+t*this._y,this._z=_*a+t*this._z,this.normalize(),this}const d=Math.sqrt(f),h=Math.atan2(d,l),m=Math.sin((1-t)*h)/d,g=Math.sin(t*h)/d;return this._w=c*m+this._w*g,this._x=n*m+this._x*g,this._y=s*m+this._y*g,this._z=a*m+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class se{constructor(e=0,t=0,n=0){se.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ov.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ov.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*s,this.y=a[1]*t+a[4]*n+a[7]*s,this.z=a[2]*t+a[5]*n+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=e.elements,c=1/(a[3]*t+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*s+a[12])*c,this.y=(a[1]*t+a[5]*n+a[9]*s+a[13])*c,this.z=(a[2]*t+a[6]*n+a[10]*s+a[14])*c,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,a=e.x,c=e.y,l=e.z,f=e.w,d=2*(c*s-l*n),h=2*(l*t-a*s),m=2*(a*n-c*t);return this.x=t+f*d+c*m-l*h,this.y=n+f*h+l*d-a*m,this.z=s+f*m+a*h-c*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s,this.y=a[1]*t+a[5]*n+a[9]*s,this.z=a[2]*t+a[6]*n+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(yt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,a=e.z,c=t.x,l=t.y,f=t.z;return this.x=s*f-a*l,this.y=a*c-n*f,this.z=n*l-s*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ih.copy(this).projectOnVector(e),this.sub(Ih)}reflect(e){return this.sub(Ih.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ih=new se,ov=new nl;class mc{constructor(e=new se(1/0,1/0,1/0),t=new se(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Qi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,l=a.count;c<l;c++)e.isMesh===!0?e.getVertexPosition(c,Qi):Qi.fromBufferAttribute(a,c),Qi.applyMatrix4(e.matrixWorld),this.expandByPoint(Qi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Iu.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Iu.copy(n.boundingBox)),Iu.applyMatrix4(e.matrixWorld),this.union(Iu)}const s=e.children;for(let a=0,c=s.length;a<c;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qi),Qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hl),Lu.subVectors(this.max,Hl),da.subVectors(e.a,Hl),ha.subVectors(e.b,Hl),pa.subVectors(e.c,Hl),As.subVectors(ha,da),bs.subVectors(pa,ha),lo.subVectors(da,pa);let t=[0,-As.z,As.y,0,-bs.z,bs.y,0,-lo.z,lo.y,As.z,0,-As.x,bs.z,0,-bs.x,lo.z,0,-lo.x,-As.y,As.x,0,-bs.y,bs.x,0,-lo.y,lo.x,0];return!Lh(t,da,ha,pa,Lu)||(t=[1,0,0,0,1,0,0,0,1],!Lh(t,da,ha,pa,Lu))?!1:(Fu.crossVectors(As,bs),t=[Fu.x,Fu.y,Fu.z],Lh(t,da,ha,pa,Lu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Or[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Or[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Or[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Or[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Or[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Or[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Or[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Or[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Or),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Or=[new se,new se,new se,new se,new se,new se,new se,new se],Qi=new se,Iu=new mc,da=new se,ha=new se,pa=new se,As=new se,bs=new se,lo=new se,Hl=new se,Lu=new se,Fu=new se,co=new se;function Lh(r,e,t,n,s){for(let a=0,c=r.length-3;a<=c;a+=3){co.fromArray(r,a);const l=s.x*Math.abs(co.x)+s.y*Math.abs(co.y)+s.z*Math.abs(co.z),f=e.dot(co),d=t.dot(co),h=n.dot(co);if(Math.max(-Math.max(f,d,h),Math.min(f,d,h))>l)return!1}return!0}const ow=new mc,Gl=new se,Fh=new se;class If{constructor(e=new se,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ow.setFromPoints(e).getCenter(n);let s=0;for(let a=0,c=e.length;a<c;a++)s=Math.max(s,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gl.subVectors(e,this.center);const t=Gl.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Gl,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gl.copy(e.center).add(Fh)),this.expandByPoint(Gl.copy(e.center).sub(Fh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const kr=new se,Uh=new se,Uu=new se,Rs=new se,Oh=new se,Ou=new se,kh=new se;class tx{constructor(e=new se,t=new se(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kr.copy(this.origin).addScaledVector(this.direction,t),kr.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Uh.copy(e).add(t).multiplyScalar(.5),Uu.copy(t).sub(e).normalize(),Rs.copy(this.origin).sub(Uh);const a=e.distanceTo(t)*.5,c=-this.direction.dot(Uu),l=Rs.dot(this.direction),f=-Rs.dot(Uu),d=Rs.lengthSq(),h=Math.abs(1-c*c);let m,g,_,S;if(h>0)if(m=c*f-l,g=c*l-f,S=a*h,m>=0)if(g>=-S)if(g<=S){const M=1/h;m*=M,g*=M,_=m*(m+c*g+2*l)+g*(c*m+g+2*f)+d}else g=a,m=Math.max(0,-(c*g+l)),_=-m*m+g*(g+2*f)+d;else g=-a,m=Math.max(0,-(c*g+l)),_=-m*m+g*(g+2*f)+d;else g<=-S?(m=Math.max(0,-(-c*a+l)),g=m>0?-a:Math.min(Math.max(-a,-f),a),_=-m*m+g*(g+2*f)+d):g<=S?(m=0,g=Math.min(Math.max(-a,-f),a),_=g*(g+2*f)+d):(m=Math.max(0,-(c*a+l)),g=m>0?a:Math.min(Math.max(-a,-f),a),_=-m*m+g*(g+2*f)+d);else g=c>0?-a:a,m=Math.max(0,-(c*g+l)),_=-m*m+g*(g+2*f)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(Uh).addScaledVector(Uu,g),_}intersectSphere(e,t){kr.subVectors(e.center,this.origin);const n=kr.dot(this.direction),s=kr.dot(kr)-n*n,a=e.radius*e.radius;if(s>a)return null;const c=Math.sqrt(a-s),l=n-c,f=n+c;return f<0?null:l<0?this.at(f,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,a,c,l,f;const d=1/this.direction.x,h=1/this.direction.y,m=1/this.direction.z,g=this.origin;return d>=0?(n=(e.min.x-g.x)*d,s=(e.max.x-g.x)*d):(n=(e.max.x-g.x)*d,s=(e.min.x-g.x)*d),h>=0?(a=(e.min.y-g.y)*h,c=(e.max.y-g.y)*h):(a=(e.max.y-g.y)*h,c=(e.min.y-g.y)*h),n>c||a>s||((a>n||isNaN(n))&&(n=a),(c<s||isNaN(s))&&(s=c),m>=0?(l=(e.min.z-g.z)*m,f=(e.max.z-g.z)*m):(l=(e.max.z-g.z)*m,f=(e.min.z-g.z)*m),n>f||l>s)||((l>n||n!==n)&&(n=l),(f<s||s!==s)&&(s=f),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,kr)!==null}intersectTriangle(e,t,n,s,a){Oh.subVectors(t,e),Ou.subVectors(n,e),kh.crossVectors(Oh,Ou);let c=this.direction.dot(kh),l;if(c>0){if(s)return null;l=1}else if(c<0)l=-1,c=-c;else return null;Rs.subVectors(this.origin,e);const f=l*this.direction.dot(Ou.crossVectors(Rs,Ou));if(f<0)return null;const d=l*this.direction.dot(Oh.cross(Rs));if(d<0||f+d>c)return null;const h=-l*Rs.dot(kh);return h<0?null:this.at(h/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class an{constructor(e,t,n,s,a,c,l,f,d,h,m,g,_,S,M,x){an.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,c,l,f,d,h,m,g,_,S,M,x)}set(e,t,n,s,a,c,l,f,d,h,m,g,_,S,M,x){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=s,v[1]=a,v[5]=c,v[9]=l,v[13]=f,v[2]=d,v[6]=h,v[10]=m,v[14]=g,v[3]=_,v[7]=S,v[11]=M,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new an().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/ma.setFromMatrixColumn(e,0).length(),a=1/ma.setFromMatrixColumn(e,1).length(),c=1/ma.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*c,t[9]=n[9]*c,t[10]=n[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,a=e.z,c=Math.cos(n),l=Math.sin(n),f=Math.cos(s),d=Math.sin(s),h=Math.cos(a),m=Math.sin(a);if(e.order==="XYZ"){const g=c*h,_=c*m,S=l*h,M=l*m;t[0]=f*h,t[4]=-f*m,t[8]=d,t[1]=_+S*d,t[5]=g-M*d,t[9]=-l*f,t[2]=M-g*d,t[6]=S+_*d,t[10]=c*f}else if(e.order==="YXZ"){const g=f*h,_=f*m,S=d*h,M=d*m;t[0]=g+M*l,t[4]=S*l-_,t[8]=c*d,t[1]=c*m,t[5]=c*h,t[9]=-l,t[2]=_*l-S,t[6]=M+g*l,t[10]=c*f}else if(e.order==="ZXY"){const g=f*h,_=f*m,S=d*h,M=d*m;t[0]=g-M*l,t[4]=-c*m,t[8]=S+_*l,t[1]=_+S*l,t[5]=c*h,t[9]=M-g*l,t[2]=-c*d,t[6]=l,t[10]=c*f}else if(e.order==="ZYX"){const g=c*h,_=c*m,S=l*h,M=l*m;t[0]=f*h,t[4]=S*d-_,t[8]=g*d+M,t[1]=f*m,t[5]=M*d+g,t[9]=_*d-S,t[2]=-d,t[6]=l*f,t[10]=c*f}else if(e.order==="YZX"){const g=c*f,_=c*d,S=l*f,M=l*d;t[0]=f*h,t[4]=M-g*m,t[8]=S*m+_,t[1]=m,t[5]=c*h,t[9]=-l*h,t[2]=-d*h,t[6]=_*m+S,t[10]=g-M*m}else if(e.order==="XZY"){const g=c*f,_=c*d,S=l*f,M=l*d;t[0]=f*h,t[4]=-m,t[8]=d*h,t[1]=g*m+M,t[5]=c*h,t[9]=_*m-S,t[2]=S*m-_,t[6]=l*h,t[10]=M*m+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(aw,e,lw)}lookAt(e,t,n){const s=this.elements;return Ei.subVectors(e,t),Ei.lengthSq()===0&&(Ei.z=1),Ei.normalize(),Ps.crossVectors(n,Ei),Ps.lengthSq()===0&&(Math.abs(n.z)===1?Ei.x+=1e-4:Ei.z+=1e-4,Ei.normalize(),Ps.crossVectors(n,Ei)),Ps.normalize(),ku.crossVectors(Ei,Ps),s[0]=Ps.x,s[4]=ku.x,s[8]=Ei.x,s[1]=Ps.y,s[5]=ku.y,s[9]=Ei.y,s[2]=Ps.z,s[6]=ku.z,s[10]=Ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,c=n[0],l=n[4],f=n[8],d=n[12],h=n[1],m=n[5],g=n[9],_=n[13],S=n[2],M=n[6],x=n[10],v=n[14],R=n[3],b=n[7],w=n[11],C=n[15],N=s[0],D=s[4],P=s[8],T=s[12],A=s[1],U=s[5],z=s[9],H=s[13],q=s[2],ee=s[6],j=s[10],Q=s[14],V=s[3],G=s[7],Y=s[11],O=s[15];return a[0]=c*N+l*A+f*q+d*V,a[4]=c*D+l*U+f*ee+d*G,a[8]=c*P+l*z+f*j+d*Y,a[12]=c*T+l*H+f*Q+d*O,a[1]=h*N+m*A+g*q+_*V,a[5]=h*D+m*U+g*ee+_*G,a[9]=h*P+m*z+g*j+_*Y,a[13]=h*T+m*H+g*Q+_*O,a[2]=S*N+M*A+x*q+v*V,a[6]=S*D+M*U+x*ee+v*G,a[10]=S*P+M*z+x*j+v*Y,a[14]=S*T+M*H+x*Q+v*O,a[3]=R*N+b*A+w*q+C*V,a[7]=R*D+b*U+w*ee+C*G,a[11]=R*P+b*z+w*j+C*Y,a[15]=R*T+b*H+w*Q+C*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[12],c=e[1],l=e[5],f=e[9],d=e[13],h=e[2],m=e[6],g=e[10],_=e[14],S=e[3],M=e[7],x=e[11],v=e[15];return S*(+a*f*m-s*d*m-a*l*g+n*d*g+s*l*_-n*f*_)+M*(+t*f*_-t*d*g+a*c*g-s*c*_+s*d*h-a*f*h)+x*(+t*d*m-t*l*_-a*c*m+n*c*_+a*l*h-n*d*h)+v*(-s*l*h-t*f*m+t*l*g+s*c*m-n*c*g+n*f*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],c=e[4],l=e[5],f=e[6],d=e[7],h=e[8],m=e[9],g=e[10],_=e[11],S=e[12],M=e[13],x=e[14],v=e[15],R=m*x*d-M*g*d+M*f*_-l*x*_-m*f*v+l*g*v,b=S*g*d-h*x*d-S*f*_+c*x*_+h*f*v-c*g*v,w=h*M*d-S*m*d+S*l*_-c*M*_-h*l*v+c*m*v,C=S*m*f-h*M*f-S*l*g+c*M*g+h*l*x-c*m*x,N=t*R+n*b+s*w+a*C;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/N;return e[0]=R*D,e[1]=(M*g*a-m*x*a-M*s*_+n*x*_+m*s*v-n*g*v)*D,e[2]=(l*x*a-M*f*a+M*s*d-n*x*d-l*s*v+n*f*v)*D,e[3]=(m*f*a-l*g*a-m*s*d+n*g*d+l*s*_-n*f*_)*D,e[4]=b*D,e[5]=(h*x*a-S*g*a+S*s*_-t*x*_-h*s*v+t*g*v)*D,e[6]=(S*f*a-c*x*a-S*s*d+t*x*d+c*s*v-t*f*v)*D,e[7]=(c*g*a-h*f*a+h*s*d-t*g*d-c*s*_+t*f*_)*D,e[8]=w*D,e[9]=(S*m*a-h*M*a-S*n*_+t*M*_+h*n*v-t*m*v)*D,e[10]=(c*M*a-S*l*a+S*n*d-t*M*d-c*n*v+t*l*v)*D,e[11]=(h*l*a-c*m*a-h*n*d+t*m*d+c*n*_-t*l*_)*D,e[12]=C*D,e[13]=(h*M*s-S*m*s+S*n*g-t*M*g-h*n*x+t*m*x)*D,e[14]=(S*l*s-c*M*s-S*n*f+t*M*f+c*n*x-t*l*x)*D,e[15]=(c*m*s-h*l*s+h*n*f-t*m*f-c*n*g+t*l*g)*D,this}scale(e){const t=this.elements,n=e.x,s=e.y,a=e.z;return t[0]*=n,t[4]*=s,t[8]*=a,t[1]*=n,t[5]*=s,t[9]*=a,t[2]*=n,t[6]*=s,t[10]*=a,t[3]*=n,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),a=1-n,c=e.x,l=e.y,f=e.z,d=a*c,h=a*l;return this.set(d*c+n,d*l-s*f,d*f+s*l,0,d*l+s*f,h*l+n,h*f-s*c,0,d*f-s*l,h*f+s*c,a*f*f+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,a,c){return this.set(1,n,a,0,e,1,c,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,a=t._x,c=t._y,l=t._z,f=t._w,d=a+a,h=c+c,m=l+l,g=a*d,_=a*h,S=a*m,M=c*h,x=c*m,v=l*m,R=f*d,b=f*h,w=f*m,C=n.x,N=n.y,D=n.z;return s[0]=(1-(M+v))*C,s[1]=(_+w)*C,s[2]=(S-b)*C,s[3]=0,s[4]=(_-w)*N,s[5]=(1-(g+v))*N,s[6]=(x+R)*N,s[7]=0,s[8]=(S+b)*D,s[9]=(x-R)*D,s[10]=(1-(g+M))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let a=ma.set(s[0],s[1],s[2]).length();const c=ma.set(s[4],s[5],s[6]).length(),l=ma.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],Ji.copy(this);const d=1/a,h=1/c,m=1/l;return Ji.elements[0]*=d,Ji.elements[1]*=d,Ji.elements[2]*=d,Ji.elements[4]*=h,Ji.elements[5]*=h,Ji.elements[6]*=h,Ji.elements[8]*=m,Ji.elements[9]*=m,Ji.elements[10]*=m,t.setFromRotationMatrix(Ji),n.x=a,n.y=c,n.z=l,this}makePerspective(e,t,n,s,a,c,l=$r){const f=this.elements,d=2*a/(t-e),h=2*a/(n-s),m=(t+e)/(t-e),g=(n+s)/(n-s);let _,S;if(l===$r)_=-(c+a)/(c-a),S=-2*c*a/(c-a);else if(l===_f)_=-c/(c-a),S=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return f[0]=d,f[4]=0,f[8]=m,f[12]=0,f[1]=0,f[5]=h,f[9]=g,f[13]=0,f[2]=0,f[6]=0,f[10]=_,f[14]=S,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,n,s,a,c,l=$r){const f=this.elements,d=1/(t-e),h=1/(n-s),m=1/(c-a),g=(t+e)*d,_=(n+s)*h;let S,M;if(l===$r)S=(c+a)*m,M=-2*m;else if(l===_f)S=a*m,M=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return f[0]=2*d,f[4]=0,f[8]=0,f[12]=-g,f[1]=0,f[5]=2*h,f[9]=0,f[13]=-_,f[2]=0,f[6]=0,f[10]=M,f[14]=-S,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ma=new se,Ji=new an,aw=new se(0,0,0),lw=new se(1,1,1),Ps=new se,ku=new se,Ei=new se,av=new an,lv=new nl;class Mr{constructor(e=0,t=0,n=0,s=Mr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,a=s[0],c=s[4],l=s[8],f=s[1],d=s[5],h=s[9],m=s[2],g=s[6],_=s[10];switch(t){case"XYZ":this._y=Math.asin(yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,_),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,_),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-m,a),this._z=0);break;case"ZXY":this._x=Math.asin(yt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-m,_),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-yt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(g,_),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(yt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-h,d),this._y=Math.atan2(-m,a)):(this._x=0,this._y=Math.atan2(l,_));break;case"XZY":this._z=Math.asin(-yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(l,a)):(this._x=Math.atan2(-h,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return av.makeRotationFromQuaternion(e),this.setFromRotationMatrix(av,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lv.setFromEuler(this),this.setFromQuaternion(lv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mr.DEFAULT_ORDER="XYZ";class nx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cw=0;const cv=new se,ga=new nl,zr=new an,zu=new se,Wl=new se,uw=new se,fw=new nl,uv=new se(1,0,0),fv=new se(0,1,0),dv=new se(0,0,1),hv={type:"added"},dw={type:"removed"},_a={type:"childadded",child:null},zh={type:"childremoved",child:null};class gn extends Fo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cw++}),this.uuid=tl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();const e=new se,t=new Mr,n=new nl,s=new se(1,1,1);function a(){n.setFromEuler(t,!1)}function c(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new an},normalMatrix:{value:new lt}}),this.matrix=new an,this.matrixWorld=new an,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ga.setFromAxisAngle(e,t),this.quaternion.multiply(ga),this}rotateOnWorldAxis(e,t){return ga.setFromAxisAngle(e,t),this.quaternion.premultiply(ga),this}rotateX(e){return this.rotateOnAxis(uv,e)}rotateY(e){return this.rotateOnAxis(fv,e)}rotateZ(e){return this.rotateOnAxis(dv,e)}translateOnAxis(e,t){return cv.copy(e).applyQuaternion(this.quaternion),this.position.add(cv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(uv,e)}translateY(e){return this.translateOnAxis(fv,e)}translateZ(e){return this.translateOnAxis(dv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?zu.copy(e):zu.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Wl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zr.lookAt(Wl,zu,this.up):zr.lookAt(zu,Wl,this.up),this.quaternion.setFromRotationMatrix(zr),s&&(zr.extractRotation(s.matrixWorld),ga.setFromRotationMatrix(zr),this.quaternion.premultiply(ga.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hv),_a.child=e,this.dispatchEvent(_a),_a.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dw),zh.child=e,this.dispatchEvent(zh),zh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zr.multiply(e.parent.matrixWorld)),e.applyMatrix4(zr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hv),_a.child=e,this.dispatchEvent(_a),_a.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const c=this.children[n].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wl,e,uw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wl,fw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(l,f){return l[f.uuid]===void 0&&(l[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const f=l.shapes;if(Array.isArray(f))for(let d=0,h=f.length;d<h;d++){const m=f[d];a(e.shapes,m)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let f=0,d=this.material.length;f<d;f++)l.push(a(e.materials,this.material[f]));s.material=l}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){const f=this.animations[l];s.animations.push(a(e.animations,f))}}if(t){const l=c(e.geometries),f=c(e.materials),d=c(e.textures),h=c(e.images),m=c(e.shapes),g=c(e.skeletons),_=c(e.animations),S=c(e.nodes);l.length>0&&(n.geometries=l),f.length>0&&(n.materials=f),d.length>0&&(n.textures=d),h.length>0&&(n.images=h),m.length>0&&(n.shapes=m),g.length>0&&(n.skeletons=g),_.length>0&&(n.animations=_),S.length>0&&(n.nodes=S)}return n.object=s,n;function c(l){const f=[];for(const d in l){const h=l[d];delete h.metadata,f.push(h)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}gn.DEFAULT_UP=new se(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const er=new se,Br=new se,Bh=new se,Vr=new se,va=new se,ya=new se,pv=new se,Vh=new se,Hh=new se,Gh=new se,Wh=new on,Xh=new on,qh=new on;class tr{constructor(e=new se,t=new se,n=new se){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),er.subVectors(e,t),s.cross(er);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,n,s,a){er.subVectors(s,t),Br.subVectors(n,t),Bh.subVectors(e,t);const c=er.dot(er),l=er.dot(Br),f=er.dot(Bh),d=Br.dot(Br),h=Br.dot(Bh),m=c*d-l*l;if(m===0)return a.set(0,0,0),null;const g=1/m,_=(d*f-l*h)*g,S=(c*h-l*f)*g;return a.set(1-_-S,S,_)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Vr)===null?!1:Vr.x>=0&&Vr.y>=0&&Vr.x+Vr.y<=1}static getInterpolation(e,t,n,s,a,c,l,f){return this.getBarycoord(e,t,n,s,Vr)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(a,Vr.x),f.addScaledVector(c,Vr.y),f.addScaledVector(l,Vr.z),f)}static getInterpolatedAttribute(e,t,n,s,a,c){return Wh.setScalar(0),Xh.setScalar(0),qh.setScalar(0),Wh.fromBufferAttribute(e,t),Xh.fromBufferAttribute(e,n),qh.fromBufferAttribute(e,s),c.setScalar(0),c.addScaledVector(Wh,a.x),c.addScaledVector(Xh,a.y),c.addScaledVector(qh,a.z),c}static isFrontFacing(e,t,n,s){return er.subVectors(n,t),Br.subVectors(e,t),er.cross(Br).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return er.subVectors(this.c,this.b),Br.subVectors(this.a,this.b),er.cross(Br).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return tr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return tr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,a){return tr.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}containsPoint(e){return tr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return tr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,a=this.c;let c,l;va.subVectors(s,n),ya.subVectors(a,n),Vh.subVectors(e,n);const f=va.dot(Vh),d=ya.dot(Vh);if(f<=0&&d<=0)return t.copy(n);Hh.subVectors(e,s);const h=va.dot(Hh),m=ya.dot(Hh);if(h>=0&&m<=h)return t.copy(s);const g=f*m-h*d;if(g<=0&&f>=0&&h<=0)return c=f/(f-h),t.copy(n).addScaledVector(va,c);Gh.subVectors(e,a);const _=va.dot(Gh),S=ya.dot(Gh);if(S>=0&&_<=S)return t.copy(a);const M=_*d-f*S;if(M<=0&&d>=0&&S<=0)return l=d/(d-S),t.copy(n).addScaledVector(ya,l);const x=h*S-_*m;if(x<=0&&m-h>=0&&_-S>=0)return pv.subVectors(a,s),l=(m-h)/(m-h+(_-S)),t.copy(s).addScaledVector(pv,l);const v=1/(x+M+g);return c=M*v,l=g*v,t.copy(n).addScaledVector(va,c).addScaledVector(ya,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ix={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ds={h:0,s:0,l:0},Bu={h:0,s:0,l:0};function jh(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ht{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,bt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=bt.workingColorSpace){if(e=Dm(e,1),t=yt(t,0,1),n=yt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,c=2*n-a;this.r=jh(c,a,e+1/3),this.g=jh(c,a,e),this.b=jh(c,a,e-1/3)}return bt.toWorkingColorSpace(this,s),this}setStyle(e,t=Vi){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=s[1],l=s[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vi){const n=ix[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kr(e.r),this.g=Kr(e.g),this.b=Kr(e.b),this}copyLinearToSRGB(e){return this.r=Fa(e.r),this.g=Fa(e.g),this.b=Fa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vi){return bt.fromWorkingColorSpace(zn.copy(this),e),Math.round(yt(zn.r*255,0,255))*65536+Math.round(yt(zn.g*255,0,255))*256+Math.round(yt(zn.b*255,0,255))}getHexString(e=Vi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.fromWorkingColorSpace(zn.copy(this),t);const n=zn.r,s=zn.g,a=zn.b,c=Math.max(n,s,a),l=Math.min(n,s,a);let f,d;const h=(l+c)/2;if(l===c)f=0,d=0;else{const m=c-l;switch(d=h<=.5?m/(c+l):m/(2-c-l),c){case n:f=(s-a)/m+(s<a?6:0);break;case s:f=(a-n)/m+2;break;case a:f=(n-s)/m+4;break}f/=6}return e.h=f,e.s=d,e.l=h,e}getRGB(e,t=bt.workingColorSpace){return bt.fromWorkingColorSpace(zn.copy(this),t),e.r=zn.r,e.g=zn.g,e.b=zn.b,e}getStyle(e=Vi){bt.fromWorkingColorSpace(zn.copy(this),e);const t=zn.r,n=zn.g,s=zn.b;return e!==Vi?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ds),this.setHSL(Ds.h+e,Ds.s+t,Ds.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ds),e.getHSL(Bu);const n=Jl(Ds.h,Bu.h,t),s=Jl(Ds.s,Bu.s,t),a=Jl(Ds.l,Bu.l,t);return this.setHSL(n,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*s,this.g=a[1]*t+a[4]*n+a[7]*s,this.b=a[2]*t+a[5]*n+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new ht;ht.NAMES=ix;let hw=0;class il extends Fo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hw++}),this.uuid=tl(),this.name="",this.type="Material",this.blending=Ia,this.side=Hs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pp,this.blendDst=mp,this.blendEquation=Eo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=za,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=J0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ua,this.stencilZFail=ua,this.stencilZPass=ua,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ia&&(n.blending=this.blending),this.side!==Hs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==pp&&(n.blendSrc=this.blendSrc),this.blendDst!==mp&&(n.blendDst=this.blendDst),this.blendEquation!==Eo&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==za&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==J0&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ua&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ua&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ua&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const c=[];for(const l in a){const f=a[l];delete f.metadata,c.push(f)}return c}if(t){const a=s(e.textures),c=s(e.images);a.length>0&&(n.textures=a),c.length>0&&(n.images=c)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class sc extends il{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mr,this.combine=ky,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const un=new se,Vu=new ft;class yr{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ev,this.updateRanges=[],this.gpuType=_r,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Vu.fromBufferAttribute(this,t),Vu.applyMatrix3(e),this.setXY(t,Vu.x,Vu.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyMatrix3(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ca(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ca(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ca(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ca(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ca(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qn(t,this.array),n=Qn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Qn(t,this.array),n=Qn(n,this.array),s=Qn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e*=this.itemSize,this.normalized&&(t=Qn(t,this.array),n=Qn(n,this.array),s=Qn(s,this.array),a=Qn(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ev&&(e.usage=this.usage),e}}class rx extends yr{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class sx extends yr{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Xt extends yr{constructor(e,t,n){super(new Float32Array(e),t,n)}}let pw=0;const zi=new an,Yh=new gn,xa=new se,wi=new mc,Xl=new mc,wn=new se;class vi extends Fo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pw++}),this.uuid=tl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qy(e)?sx:rx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new lt().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zi.makeRotationFromQuaternion(e),this.applyMatrix4(zi),this}rotateX(e){return zi.makeRotationX(e),this.applyMatrix4(zi),this}rotateY(e){return zi.makeRotationY(e),this.applyMatrix4(zi),this}rotateZ(e){return zi.makeRotationZ(e),this.applyMatrix4(zi),this}translate(e,t,n){return zi.makeTranslation(e,t,n),this.applyMatrix4(zi),this}scale(e,t,n){return zi.makeScale(e,t,n),this.applyMatrix4(zi),this}lookAt(e){return Yh.lookAt(e),Yh.updateMatrix(),this.applyMatrix4(Yh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xa).negate(),this.translate(xa.x,xa.y,xa.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,a=e.length;s<a;s++){const c=e[s];n.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Xt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new se(-1/0,-1/0,-1/0),new se(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const a=t[n];wi.setFromBufferAttribute(a),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,wi.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,wi.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(wi.min),this.boundingBox.expandByPoint(wi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new If);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new se,1/0);return}if(e){const n=this.boundingSphere.center;if(wi.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const l=t[a];Xl.setFromBufferAttribute(l),this.morphTargetsRelative?(wn.addVectors(wi.min,Xl.min),wi.expandByPoint(wn),wn.addVectors(wi.max,Xl.max),wi.expandByPoint(wn)):(wi.expandByPoint(Xl.min),wi.expandByPoint(Xl.max))}wi.getCenter(n);let s=0;for(let a=0,c=e.count;a<c;a++)wn.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(wn));if(t)for(let a=0,c=t.length;a<c;a++){const l=t[a],f=this.morphTargetsRelative;for(let d=0,h=l.count;d<h;d++)wn.fromBufferAttribute(l,d),f&&(xa.fromBufferAttribute(e,d),wn.add(xa)),s=Math.max(s,n.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yr(new Float32Array(4*n.count),4));const c=this.getAttribute("tangent"),l=[],f=[];for(let P=0;P<n.count;P++)l[P]=new se,f[P]=new se;const d=new se,h=new se,m=new se,g=new ft,_=new ft,S=new ft,M=new se,x=new se;function v(P,T,A){d.fromBufferAttribute(n,P),h.fromBufferAttribute(n,T),m.fromBufferAttribute(n,A),g.fromBufferAttribute(a,P),_.fromBufferAttribute(a,T),S.fromBufferAttribute(a,A),h.sub(d),m.sub(d),_.sub(g),S.sub(g);const U=1/(_.x*S.y-S.x*_.y);isFinite(U)&&(M.copy(h).multiplyScalar(S.y).addScaledVector(m,-_.y).multiplyScalar(U),x.copy(m).multiplyScalar(_.x).addScaledVector(h,-S.x).multiplyScalar(U),l[P].add(M),l[T].add(M),l[A].add(M),f[P].add(x),f[T].add(x),f[A].add(x))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let P=0,T=R.length;P<T;++P){const A=R[P],U=A.start,z=A.count;for(let H=U,q=U+z;H<q;H+=3)v(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const b=new se,w=new se,C=new se,N=new se;function D(P){C.fromBufferAttribute(s,P),N.copy(C);const T=l[P];b.copy(T),b.sub(C.multiplyScalar(C.dot(T))).normalize(),w.crossVectors(N,T);const U=w.dot(f[P])<0?-1:1;c.setXYZW(P,b.x,b.y,b.z,U)}for(let P=0,T=R.length;P<T;++P){const A=R[P],U=A.start,z=A.count;for(let H=U,q=U+z;H<q;H+=3)D(e.getX(H+0)),D(e.getX(H+1)),D(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yr(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let g=0,_=n.count;g<_;g++)n.setXYZ(g,0,0,0);const s=new se,a=new se,c=new se,l=new se,f=new se,d=new se,h=new se,m=new se;if(e)for(let g=0,_=e.count;g<_;g+=3){const S=e.getX(g+0),M=e.getX(g+1),x=e.getX(g+2);s.fromBufferAttribute(t,S),a.fromBufferAttribute(t,M),c.fromBufferAttribute(t,x),h.subVectors(c,a),m.subVectors(s,a),h.cross(m),l.fromBufferAttribute(n,S),f.fromBufferAttribute(n,M),d.fromBufferAttribute(n,x),l.add(h),f.add(h),d.add(h),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(M,f.x,f.y,f.z),n.setXYZ(x,d.x,d.y,d.z)}else for(let g=0,_=t.count;g<_;g+=3)s.fromBufferAttribute(t,g+0),a.fromBufferAttribute(t,g+1),c.fromBufferAttribute(t,g+2),h.subVectors(c,a),m.subVectors(s,a),h.cross(m),n.setXYZ(g+0,h.x,h.y,h.z),n.setXYZ(g+1,h.x,h.y,h.z),n.setXYZ(g+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wn.fromBufferAttribute(e,t),wn.normalize(),e.setXYZ(t,wn.x,wn.y,wn.z)}toNonIndexed(){function e(l,f){const d=l.array,h=l.itemSize,m=l.normalized,g=new d.constructor(f.length*h);let _=0,S=0;for(let M=0,x=f.length;M<x;M++){l.isInterleavedBufferAttribute?_=f[M]*l.data.stride+l.offset:_=f[M]*h;for(let v=0;v<h;v++)g[S++]=d[_++]}return new yr(g,h,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vi,n=this.index.array,s=this.attributes;for(const l in s){const f=s[l],d=e(f,n);t.setAttribute(l,d)}const a=this.morphAttributes;for(const l in a){const f=[],d=a[l];for(let h=0,m=d.length;h<m;h++){const g=d[h],_=e(g,n);f.push(_)}t.morphAttributes[l]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let l=0,f=c.length;l<f;l++){const d=c[l];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const d in f)f[d]!==void 0&&(e[d]=f[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const f in n){const d=n[f];e.data.attributes[f]=d.toJSON(e.data)}const s={};let a=!1;for(const f in this.morphAttributes){const d=this.morphAttributes[f],h=[];for(let m=0,g=d.length;m<g;m++){const _=d[m];h.push(_.toJSON(e.data))}h.length>0&&(s[f]=h,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const d in s){const h=s[d];this.setAttribute(d,h.clone(t))}const a=e.morphAttributes;for(const d in a){const h=[],m=a[d];for(let g=0,_=m.length;g<_;g++)h.push(m[g].clone(t));this.morphAttributes[d]=h}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let d=0,h=c.length;d<h;d++){const m=c[d];this.addGroup(m.start,m.count,m.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mv=new an,uo=new tx,Hu=new If,gv=new se,Gu=new se,Wu=new se,Xu=new se,$h=new se,qu=new se,_v=new se,ju=new se;class ui extends gn{constructor(e=new vi,t=new sc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const l=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,c=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const l=this.morphTargetInfluences;if(a&&l){qu.set(0,0,0);for(let f=0,d=a.length;f<d;f++){const h=l[f],m=a[f];h!==0&&($h.fromBufferAttribute(m,e),c?qu.addScaledVector($h,h):qu.addScaledVector($h.sub(t),h))}t.add(qu)}return t}raycast(e,t){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hu.copy(n.boundingSphere),Hu.applyMatrix4(a),uo.copy(e.ray).recast(e.near),!(Hu.containsPoint(uo.origin)===!1&&(uo.intersectSphere(Hu,gv)===null||uo.origin.distanceToSquared(gv)>(e.far-e.near)**2))&&(mv.copy(a).invert(),uo.copy(e.ray).applyMatrix4(mv),!(n.boundingBox!==null&&uo.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,uo)))}_computeIntersections(e,t,n){let s;const a=this.geometry,c=this.material,l=a.index,f=a.attributes.position,d=a.attributes.uv,h=a.attributes.uv1,m=a.attributes.normal,g=a.groups,_=a.drawRange;if(l!==null)if(Array.isArray(c))for(let S=0,M=g.length;S<M;S++){const x=g[S],v=c[x.materialIndex],R=Math.max(x.start,_.start),b=Math.min(l.count,Math.min(x.start+x.count,_.start+_.count));for(let w=R,C=b;w<C;w+=3){const N=l.getX(w),D=l.getX(w+1),P=l.getX(w+2);s=Yu(this,v,e,n,d,h,m,N,D,P),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const S=Math.max(0,_.start),M=Math.min(l.count,_.start+_.count);for(let x=S,v=M;x<v;x+=3){const R=l.getX(x),b=l.getX(x+1),w=l.getX(x+2);s=Yu(this,c,e,n,d,h,m,R,b,w),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(f!==void 0)if(Array.isArray(c))for(let S=0,M=g.length;S<M;S++){const x=g[S],v=c[x.materialIndex],R=Math.max(x.start,_.start),b=Math.min(f.count,Math.min(x.start+x.count,_.start+_.count));for(let w=R,C=b;w<C;w+=3){const N=w,D=w+1,P=w+2;s=Yu(this,v,e,n,d,h,m,N,D,P),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const S=Math.max(0,_.start),M=Math.min(f.count,_.start+_.count);for(let x=S,v=M;x<v;x+=3){const R=x,b=x+1,w=x+2;s=Yu(this,c,e,n,d,h,m,R,b,w),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}}function mw(r,e,t,n,s,a,c,l){let f;if(e.side===fi?f=n.intersectTriangle(c,a,s,!0,l):f=n.intersectTriangle(s,a,c,e.side===Hs,l),f===null)return null;ju.copy(l),ju.applyMatrix4(r.matrixWorld);const d=t.ray.origin.distanceTo(ju);return d<t.near||d>t.far?null:{distance:d,point:ju.clone(),object:r}}function Yu(r,e,t,n,s,a,c,l,f,d){r.getVertexPosition(l,Gu),r.getVertexPosition(f,Wu),r.getVertexPosition(d,Xu);const h=mw(r,e,t,n,Gu,Wu,Xu,_v);if(h){const m=new se;tr.getBarycoord(_v,Gu,Wu,Xu,m),s&&(h.uv=tr.getInterpolatedAttribute(s,l,f,d,m,new ft)),a&&(h.uv1=tr.getInterpolatedAttribute(a,l,f,d,m,new ft)),c&&(h.normal=tr.getInterpolatedAttribute(c,l,f,d,m,new se),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const g={a:l,b:f,c:d,normal:new se,materialIndex:0};tr.getNormal(Gu,Wu,Xu,g.normal),h.face=g,h.barycoord=m}return h}class rl extends vi{constructor(e=1,t=1,n=1,s=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:a,depthSegments:c};const l=this;s=Math.floor(s),a=Math.floor(a),c=Math.floor(c);const f=[],d=[],h=[],m=[];let g=0,_=0;S("z","y","x",-1,-1,n,t,e,c,a,0),S("z","y","x",1,-1,n,t,-e,c,a,1),S("x","z","y",1,1,e,n,t,s,c,2),S("x","z","y",1,-1,e,n,-t,s,c,3),S("x","y","z",1,-1,e,t,n,s,a,4),S("x","y","z",-1,-1,e,t,-n,s,a,5),this.setIndex(f),this.setAttribute("position",new Xt(d,3)),this.setAttribute("normal",new Xt(h,3)),this.setAttribute("uv",new Xt(m,2));function S(M,x,v,R,b,w,C,N,D,P,T){const A=w/D,U=C/P,z=w/2,H=C/2,q=N/2,ee=D+1,j=P+1;let Q=0,V=0;const G=new se;for(let Y=0;Y<j;Y++){const O=Y*U-H;for(let Z=0;Z<ee;Z++){const Ae=Z*A-z;G[M]=Ae*R,G[x]=O*b,G[v]=q,d.push(G.x,G.y,G.z),G[M]=0,G[x]=0,G[v]=N>0?1:-1,h.push(G.x,G.y,G.z),m.push(Z/D),m.push(1-Y/P),Q+=1}}for(let Y=0;Y<P;Y++)for(let O=0;O<D;O++){const Z=g+O+ee*Y,Ae=g+O+ee*(Y+1),ne=g+(O+1)+ee*(Y+1),ae=g+(O+1)+ee*Y;f.push(Z,Ae,ae),f.push(Ae,ne,ae),V+=6}l.addGroup(_,V,T),_+=V,g+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xa(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const s=r[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Jn(r){const e={};for(let t=0;t<r.length;t++){const n=Xa(r[t]);for(const s in n)e[s]=n[s]}return e}function gw(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function ox(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const ax={clone:Xa,merge:Jn};var _w=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rr extends il{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_w,this.fragmentShader=vw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xa(e.uniforms),this.uniformsGroups=gw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?t.uniforms[s]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[s]={type:"m4",value:c.toArray()}:t.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class lx extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new an,this.projectionMatrix=new an,this.projectionMatrixInverse=new an,this.coordinateSystem=$r}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ns=new se,vv=new ft,yv=new ft;class Hi extends lx{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=rc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ql*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rc*2*Math.atan(Math.tan(Ql*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ns.x,Ns.y).multiplyScalar(-e/Ns.z),Ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ns.x,Ns.y).multiplyScalar(-e/Ns.z)}getViewSize(e,t){return this.getViewBounds(e,vv,yv),t.subVectors(yv,vv)}setViewOffset(e,t,n,s,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ql*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,a=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,d=c.fullHeight;a+=c.offsetX*s/f,t-=c.offsetY*n/d,s*=c.width/f,n*=c.height/d}const l=this.filmOffset;l!==0&&(a+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Sa=-90,Ma=1;class yw extends gn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Hi(Sa,Ma,e,t);s.layers=this.layers,this.add(s);const a=new Hi(Sa,Ma,e,t);a.layers=this.layers,this.add(a);const c=new Hi(Sa,Ma,e,t);c.layers=this.layers,this.add(c);const l=new Hi(Sa,Ma,e,t);l.layers=this.layers,this.add(l);const f=new Hi(Sa,Ma,e,t);f.layers=this.layers,this.add(f);const d=new Hi(Sa,Ma,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,a,c,l,f]=t;for(const d of t)this.remove(d);if(e===$r)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===_f)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,l,f,d,h]=this.children,m=e.getRenderTarget(),g=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,a),e.setRenderTarget(n,1,s),e.render(t,c),e.setRenderTarget(n,2,s),e.render(t,l),e.setRenderTarget(n,3,s),e.render(t,f),e.setRenderTarget(n,4,s),e.render(t,d),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(m,g,_),e.xr.enabled=S,n.texture.needsPMREMUpdate=!0}}class cx extends Gn{constructor(e,t,n,s,a,c,l,f,d,h){e=e!==void 0?e:[],t=t!==void 0?t:Ba,super(e,t,n,s,a,c,l,f,d,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xw extends ir{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new cx(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Tn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new rl(5,5,5),a=new rr({name:"CubemapFromEquirect",uniforms:Xa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fi,blending:Zr});a.uniforms.tEquirect.value=t;const c=new ui(s,a),l=t.minFilter;return t.minFilter===Co&&(t.minFilter=Tn),new yw(1,10,this).update(e,c),t.minFilter=l,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,n,s){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,n,s);e.setRenderTarget(a)}}let ux=class extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mr,this.environmentIntensity=1,this.environmentRotation=new Mr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};const Zh=new se,Sw=new se,Mw=new lt;class yo{constructor(e=new se(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Zh.subVectors(n,t).cross(Sw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Zh),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Mw.getNormalMatrix(e),s=this.coplanarPoint(Zh).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fo=new If,$u=new se;class fx{constructor(e=new yo,t=new yo,n=new yo,s=new yo,a=new yo,c=new yo){this.planes=[e,t,n,s,a,c]}set(e,t,n,s,a,c){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(s),l[4].copy(a),l[5].copy(c),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$r){const n=this.planes,s=e.elements,a=s[0],c=s[1],l=s[2],f=s[3],d=s[4],h=s[5],m=s[6],g=s[7],_=s[8],S=s[9],M=s[10],x=s[11],v=s[12],R=s[13],b=s[14],w=s[15];if(n[0].setComponents(f-a,g-d,x-_,w-v).normalize(),n[1].setComponents(f+a,g+d,x+_,w+v).normalize(),n[2].setComponents(f+c,g+h,x+S,w+R).normalize(),n[3].setComponents(f-c,g-h,x-S,w-R).normalize(),n[4].setComponents(f-l,g-m,x-M,w-b).normalize(),t===$r)n[5].setComponents(f+l,g+m,x+M,w+b).normalize();else if(t===_f)n[5].setComponents(l,m,M,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fo)}intersectsSprite(e){return fo.center.set(0,0,0),fo.radius=.7071067811865476,fo.applyMatrix4(e.matrixWorld),this.intersectsSphere(fo)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if($u.x=s.normal.x>0?e.max.x:e.min.x,$u.y=s.normal.y>0?e.max.y:e.min.y,$u.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint($u)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ew extends il{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const xv=new an,Jp=new tx,Zu=new If,Ku=new se;class Hr extends gn{constructor(e=new vi,t=new Ew){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zu.copy(n.boundingSphere),Zu.applyMatrix4(s),Zu.radius+=a,e.ray.intersectsSphere(Zu)===!1)return;xv.copy(s).invert(),Jp.copy(e.ray).applyMatrix4(xv);const l=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=l*l,d=n.index,m=n.attributes.position;if(d!==null){const g=Math.max(0,c.start),_=Math.min(d.count,c.start+c.count);for(let S=g,M=_;S<M;S++){const x=d.getX(S);Ku.fromBufferAttribute(m,x),Sv(Ku,x,f,s,e,t,this)}}else{const g=Math.max(0,c.start),_=Math.min(m.count,c.start+c.count);for(let S=g,M=_;S<M;S++)Ku.fromBufferAttribute(m,S),Sv(Ku,S,f,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const l=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}}function Sv(r,e,t,n,s,a,c){const l=Jp.distanceSqToPoint(r);if(l<t){const f=new se;Jp.closestPointToPoint(r,f),f.applyMatrix4(n);const d=s.ray.origin.distanceTo(f);if(d<s.near||d>s.far)return;a.push({distance:d,distanceToRay:Math.sqrt(l),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class Yl extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class ww extends Gn{constructor(e,t,n,s,a,c,l,f,d){super(e,t,n,s,a,c,l,f,d),this.isVideoTexture=!0,this.minFilter=c!==void 0?c:Tn,this.magFilter=a!==void 0?a:Tn,this.generateMipmaps=!1;const h=this;function m(){h.needsUpdate=!0,e.requestVideoFrameCallback(m)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(m)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class dx extends Gn{constructor(e,t,n,s,a,c,l,f,d){super(e,t,n,s,a,c,l,f,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class hx extends Gn{constructor(e,t,n,s,a,c,l,f,d,h=La){if(h!==La&&h!==Ga)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===La&&(n=No),n===void 0&&h===Ga&&(n=Ha),super(null,s,a,c,l,f,h,n,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:nr,this.minFilter=f!==void 0?f:nr,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Lf extends vi{constructor(e=1,t=1,n=1,s=32,a=1,c=!1,l=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:a,openEnded:c,thetaStart:l,thetaLength:f};const d=this;s=Math.floor(s),a=Math.floor(a);const h=[],m=[],g=[],_=[];let S=0;const M=[],x=n/2;let v=0;R(),c===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Xt(m,3)),this.setAttribute("normal",new Xt(g,3)),this.setAttribute("uv",new Xt(_,2));function R(){const w=new se,C=new se;let N=0;const D=(t-e)/n;for(let P=0;P<=a;P++){const T=[],A=P/a,U=A*(t-e)+e;for(let z=0;z<=s;z++){const H=z/s,q=H*f+l,ee=Math.sin(q),j=Math.cos(q);C.x=U*ee,C.y=-A*n+x,C.z=U*j,m.push(C.x,C.y,C.z),w.set(ee,D,j).normalize(),g.push(w.x,w.y,w.z),_.push(H,1-A),T.push(S++)}M.push(T)}for(let P=0;P<s;P++)for(let T=0;T<a;T++){const A=M[T][P],U=M[T+1][P],z=M[T+1][P+1],H=M[T][P+1];(e>0||T!==0)&&(h.push(A,U,H),N+=3),(t>0||T!==a-1)&&(h.push(U,z,H),N+=3)}d.addGroup(v,N,0),v+=N}function b(w){const C=S,N=new ft,D=new se;let P=0;const T=w===!0?e:t,A=w===!0?1:-1;for(let z=1;z<=s;z++)m.push(0,x*A,0),g.push(0,A,0),_.push(.5,.5),S++;const U=S;for(let z=0;z<=s;z++){const q=z/s*f+l,ee=Math.cos(q),j=Math.sin(q);D.x=T*j,D.y=x*A,D.z=T*ee,m.push(D.x,D.y,D.z),g.push(0,A,0),N.x=ee*.5+.5,N.y=j*.5*A+.5,_.push(N.x,N.y),S++}for(let z=0;z<s;z++){const H=C+z,q=U+z;w===!0?h.push(q,q+1,H):h.push(q+1,q,H),P+=3}d.addGroup(v,P,w===!0?1:2),v+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lf(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Nm extends Lf{constructor(e=1,t=1,n=32,s=1,a=!1,c=0,l=Math.PI*2){super(0,e,t,n,s,a,c,l),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:c,thetaLength:l}}static fromJSON(e){return new Nm(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ff extends vi{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const a=[],c=[];l(s),d(n),h(),this.setAttribute("position",new Xt(a,3)),this.setAttribute("normal",new Xt(a.slice(),3)),this.setAttribute("uv",new Xt(c,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function l(R){const b=new se,w=new se,C=new se;for(let N=0;N<t.length;N+=3)_(t[N+0],b),_(t[N+1],w),_(t[N+2],C),f(b,w,C,R)}function f(R,b,w,C){const N=C+1,D=[];for(let P=0;P<=N;P++){D[P]=[];const T=R.clone().lerp(w,P/N),A=b.clone().lerp(w,P/N),U=N-P;for(let z=0;z<=U;z++)z===0&&P===N?D[P][z]=T:D[P][z]=T.clone().lerp(A,z/U)}for(let P=0;P<N;P++)for(let T=0;T<2*(N-P)-1;T++){const A=Math.floor(T/2);T%2===0?(g(D[P][A+1]),g(D[P+1][A]),g(D[P][A])):(g(D[P][A+1]),g(D[P+1][A+1]),g(D[P+1][A]))}}function d(R){const b=new se;for(let w=0;w<a.length;w+=3)b.x=a[w+0],b.y=a[w+1],b.z=a[w+2],b.normalize().multiplyScalar(R),a[w+0]=b.x,a[w+1]=b.y,a[w+2]=b.z}function h(){const R=new se;for(let b=0;b<a.length;b+=3){R.x=a[b+0],R.y=a[b+1],R.z=a[b+2];const w=x(R)/2/Math.PI+.5,C=v(R)/Math.PI+.5;c.push(w,1-C)}S(),m()}function m(){for(let R=0;R<c.length;R+=6){const b=c[R+0],w=c[R+2],C=c[R+4],N=Math.max(b,w,C),D=Math.min(b,w,C);N>.9&&D<.1&&(b<.2&&(c[R+0]+=1),w<.2&&(c[R+2]+=1),C<.2&&(c[R+4]+=1))}}function g(R){a.push(R.x,R.y,R.z)}function _(R,b){const w=R*3;b.x=e[w+0],b.y=e[w+1],b.z=e[w+2]}function S(){const R=new se,b=new se,w=new se,C=new se,N=new ft,D=new ft,P=new ft;for(let T=0,A=0;T<a.length;T+=9,A+=6){R.set(a[T+0],a[T+1],a[T+2]),b.set(a[T+3],a[T+4],a[T+5]),w.set(a[T+6],a[T+7],a[T+8]),N.set(c[A+0],c[A+1]),D.set(c[A+2],c[A+3]),P.set(c[A+4],c[A+5]),C.copy(R).add(b).add(w).divideScalar(3);const U=x(C);M(N,A+0,R,U),M(D,A+2,b,U),M(P,A+4,w,U)}}function M(R,b,w,C){C<0&&R.x===1&&(c[b]=R.x-1),w.x===0&&w.z===0&&(c[b]=C/2/Math.PI+.5)}function x(R){return Math.atan2(R.z,-R.x)}function v(R){return Math.atan2(-R.y,Math.sqrt(R.x*R.x+R.z*R.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ff(e.vertices,e.indices,e.radius,e.details)}}class Im extends Ff{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,a,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Im(e.radius,e.detail)}}class Lm extends Ff{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Lm(e.radius,e.detail)}}class es extends vi{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const a=e/2,c=t/2,l=Math.floor(n),f=Math.floor(s),d=l+1,h=f+1,m=e/l,g=t/f,_=[],S=[],M=[],x=[];for(let v=0;v<h;v++){const R=v*g-c;for(let b=0;b<d;b++){const w=b*m-a;S.push(w,-R,0),M.push(0,0,1),x.push(b/l),x.push(1-v/f)}}for(let v=0;v<f;v++)for(let R=0;R<l;R++){const b=R+d*v,w=R+d*(v+1),C=R+1+d*(v+1),N=R+1+d*v;_.push(b,w,N),_.push(w,C,N)}this.setIndex(_),this.setAttribute("position",new Xt(S,3)),this.setAttribute("normal",new Xt(M,3)),this.setAttribute("uv",new Xt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new es(e.width,e.height,e.widthSegments,e.heightSegments)}}class Fm extends vi{constructor(e=.5,t=1,n=32,s=1,a=0,c=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:a,thetaLength:c},n=Math.max(3,n),s=Math.max(1,s);const l=[],f=[],d=[],h=[];let m=e;const g=(t-e)/s,_=new se,S=new ft;for(let M=0;M<=s;M++){for(let x=0;x<=n;x++){const v=a+x/n*c;_.x=m*Math.cos(v),_.y=m*Math.sin(v),f.push(_.x,_.y,_.z),d.push(0,0,1),S.x=(_.x/t+1)/2,S.y=(_.y/t+1)/2,h.push(S.x,S.y)}m+=g}for(let M=0;M<s;M++){const x=M*(n+1);for(let v=0;v<n;v++){const R=v+x,b=R,w=R+n+1,C=R+n+2,N=R+1;l.push(b,w,N),l.push(w,C,N)}}this.setIndex(l),this.setAttribute("position",new Xt(f,3)),this.setAttribute("normal",new Xt(d,3)),this.setAttribute("uv",new Xt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fm(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Um extends vi{constructor(e=1,t=32,n=16,s=0,a=Math.PI*2,c=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:a,thetaStart:c,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const f=Math.min(c+l,Math.PI);let d=0;const h=[],m=new se,g=new se,_=[],S=[],M=[],x=[];for(let v=0;v<=n;v++){const R=[],b=v/n;let w=0;v===0&&c===0?w=.5/t:v===n&&f===Math.PI&&(w=-.5/t);for(let C=0;C<=t;C++){const N=C/t;m.x=-e*Math.cos(s+N*a)*Math.sin(c+b*l),m.y=e*Math.cos(c+b*l),m.z=e*Math.sin(s+N*a)*Math.sin(c+b*l),S.push(m.x,m.y,m.z),g.copy(m).normalize(),M.push(g.x,g.y,g.z),x.push(N+w,1-b),R.push(d++)}h.push(R)}for(let v=0;v<n;v++)for(let R=0;R<t;R++){const b=h[v][R+1],w=h[v][R],C=h[v+1][R],N=h[v+1][R+1];(v!==0||c>0)&&_.push(b,w,N),(v!==n-1||f<Math.PI)&&_.push(w,C,N)}this.setIndex(_),this.setAttribute("position",new Xt(S,3)),this.setAttribute("normal",new Xt(M,3)),this.setAttribute("uv",new Xt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Um(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Om extends vi{constructor(e=1,t=.4,n=12,s=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:a},n=Math.floor(n),s=Math.floor(s);const c=[],l=[],f=[],d=[],h=new se,m=new se,g=new se;for(let _=0;_<=n;_++)for(let S=0;S<=s;S++){const M=S/s*a,x=_/n*Math.PI*2;m.x=(e+t*Math.cos(x))*Math.cos(M),m.y=(e+t*Math.cos(x))*Math.sin(M),m.z=t*Math.sin(x),l.push(m.x,m.y,m.z),h.x=e*Math.cos(M),h.y=e*Math.sin(M),g.subVectors(m,h).normalize(),f.push(g.x,g.y,g.z),d.push(S/s),d.push(_/n)}for(let _=1;_<=n;_++)for(let S=1;S<=s;S++){const M=(s+1)*_+S-1,x=(s+1)*(_-1)+S-1,v=(s+1)*(_-1)+S,R=(s+1)*_+S;c.push(M,x,R),c.push(x,v,R)}this.setIndex(c),this.setAttribute("position",new Xt(l,3)),this.setAttribute("normal",new Xt(f,3)),this.setAttribute("uv",new Xt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Om(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Tw extends il{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zy,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Cw extends il{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Aw extends il{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Mv={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class bw{constructor(e,t,n){const s=this;let a=!1,c=0,l=0,f;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){l++,a===!1&&s.onStart!==void 0&&s.onStart(h,c,l),a=!0},this.itemEnd=function(h){c++,s.onProgress!==void 0&&s.onProgress(h,c,l),c===l&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return f?f(h):h},this.setURLModifier=function(h){return f=h,this},this.addHandler=function(h,m){return d.push(h,m),this},this.removeHandler=function(h){const m=d.indexOf(h);return m!==-1&&d.splice(m,2),this},this.getHandler=function(h){for(let m=0,g=d.length;m<g;m+=2){const _=d[m],S=d[m+1];if(_.global&&(_.lastIndex=0),_.test(h))return S}return null}}}const Rw=new bw;class km{constructor(e){this.manager=e!==void 0?e:Rw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,a){n.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}km.DEFAULT_MATERIAL_NAME="__DEFAULT";const Gr={};class Pw extends Error{constructor(e,t){super(e),this.response=t}}class Dw extends km{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=Mv.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(Gr[e]!==void 0){Gr[e].push({onLoad:t,onProgress:n,onError:s});return}Gr[e]=[],Gr[e].push({onLoad:t,onProgress:n,onError:s});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),l=this.mimeType,f=this.responseType;fetch(c).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const h=Gr[e],m=d.body.getReader(),g=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),_=g?parseInt(g):0,S=_!==0;let M=0;const x=new ReadableStream({start(v){R();function R(){m.read().then(({done:b,value:w})=>{if(b)v.close();else{M+=w.byteLength;const C=new ProgressEvent("progress",{lengthComputable:S,loaded:M,total:_});for(let N=0,D=h.length;N<D;N++){const P=h[N];P.onProgress&&P.onProgress(C)}v.enqueue(w),R()}},b=>{v.error(b)})}}});return new Response(x)}else throw new Pw(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(f){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(h=>new DOMParser().parseFromString(h,l));case"json":return d.json();default:if(l===void 0)return d.text();{const m=/charset="?([^;"\s]*)"?/i.exec(l),g=m&&m[1]?m[1].toLowerCase():void 0,_=new TextDecoder(g);return d.arrayBuffer().then(S=>_.decode(S))}}}).then(d=>{Mv.add(e,d);const h=Gr[e];delete Gr[e];for(let m=0,g=h.length;m<g;m++){const _=h[m];_.onLoad&&_.onLoad(d)}}).catch(d=>{const h=Gr[e];if(h===void 0)throw this.manager.itemError(e),d;delete Gr[e];for(let m=0,g=h.length;m<g;m++){const _=h[m];_.onError&&_.onError(d)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class zm extends lx{constructor(e=-1,t=1,n=1,s=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-e,c=n+e,l=s+t,f=s-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,c=a+d*this.view.width,l-=h*this.view.offsetY,f=l-h*this.view.height}this.projectionMatrix.makeOrthographic(a,c,l,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}let Qu;class px{static getContext(){return Qu===void 0&&(Qu=new(window.AudioContext||window.webkitAudioContext)),Qu}static setContext(e){Qu=e}}class Nw extends km{constructor(e){super(e)}load(e,t,n,s){const a=this,c=new Dw(this.manager);c.setResponseType("arraybuffer"),c.setPath(this.path),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(f){try{const d=f.slice(0);px.getContext().decodeAudioData(d,function(m){t(m)}).catch(l)}catch(d){l(d)}},n,s);function l(f){s?s(f):console.error(f),a.manager.itemError(e)}}}class Iw extends Hi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Bm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ev(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ev();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ev(){return performance.now()}const ho=new se,wv=new nl,Lw=new se,po=new se;class Fw extends gn{constructor(){super(),this.type="AudioListener",this.context=px.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Bm}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(ho,wv,Lw),po.set(0,0,-1).applyQuaternion(wv),t.positionX){const s=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(ho.x,s),t.positionY.linearRampToValueAtTime(ho.y,s),t.positionZ.linearRampToValueAtTime(ho.z,s),t.forwardX.linearRampToValueAtTime(po.x,s),t.forwardY.linearRampToValueAtTime(po.y,s),t.forwardZ.linearRampToValueAtTime(po.z,s),t.upX.linearRampToValueAtTime(n.x,s),t.upY.linearRampToValueAtTime(n.y,s),t.upZ.linearRampToValueAtTime(n.z,s)}else t.setPosition(ho.x,ho.y,ho.z),t.setOrientation(po.x,po.y,po.z,n.x,n.y,n.z)}}class Uw extends gn{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(console.warn("THREE.Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}}class Tv{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}function Cv(r,e,t,n){const s=Ow(n);switch(t){case Gy:return r*e;case Xy:return r*e;case qy:return r*e*2;case jy:return r*e/s.components*s.byteLength;case bm:return r*e/s.components*s.byteLength;case Yy:return r*e*2/s.components*s.byteLength;case Rm:return r*e*2/s.components*s.byteLength;case Wy:return r*e*3/s.components*s.byteLength;case Ai:return r*e*4/s.components*s.byteLength;case Pm:return r*e*4/s.components*s.byteLength;case of:case af:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case lf:case cf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case bp:case Pp:return Math.max(r,16)*Math.max(e,8)/4;case Ap:case Rp:return Math.max(r,8)*Math.max(e,8)/2;case Dp:case Np:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ip:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Lp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Fp:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Up:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Op:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case kp:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case zp:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Bp:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Vp:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Hp:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Gp:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Wp:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Xp:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case qp:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case jp:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case uf:case Yp:case $p:return Math.ceil(r/4)*Math.ceil(e/4)*16;case $y:case Zp:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Kp:case Qp:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ow(r){switch(r){case Jr:case By:return{byteLength:1,components:1};case ic:case Vy:case el:return{byteLength:2,components:1};case Cm:case Am:return{byteLength:2,components:4};case No:case Tm:case _r:return{byteLength:4,components:1};case Hy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wm);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function mx(){let r=null,e=!1,t=null,n=null;function s(a,c){t(a,c),n=r.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(s),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){r=a}}}function kw(r){const e=new WeakMap;function t(l,f){const d=l.array,h=l.usage,m=d.byteLength,g=r.createBuffer();r.bindBuffer(f,g),r.bufferData(f,d,h),l.onUploadCallback();let _;if(d instanceof Float32Array)_=r.FLOAT;else if(d instanceof Uint16Array)l.isFloat16BufferAttribute?_=r.HALF_FLOAT:_=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=r.SHORT;else if(d instanceof Uint32Array)_=r.UNSIGNED_INT;else if(d instanceof Int32Array)_=r.INT;else if(d instanceof Int8Array)_=r.BYTE;else if(d instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:m}}function n(l,f,d){const h=f.array,m=f.updateRanges;if(r.bindBuffer(d,l),m.length===0)r.bufferSubData(d,0,h);else{m.sort((_,S)=>_.start-S.start);let g=0;for(let _=1;_<m.length;_++){const S=m[g],M=m[_];M.start<=S.start+S.count+1?S.count=Math.max(S.count,M.start+M.count-S.start):(++g,m[g]=M)}m.length=g+1;for(let _=0,S=m.length;_<S;_++){const M=m[_];r.bufferSubData(d,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}f.clearUpdateRanges()}f.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const f=e.get(l);f&&(r.deleteBuffer(f.buffer),e.delete(l))}function c(l,f){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const h=e.get(l);(!h||h.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const d=e.get(l);if(d===void 0)e.set(l,t(l,f));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(d.buffer,l,f),d.version=l.version}}return{get:s,remove:a,update:c}}var zw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bw=`#ifdef USE_ALPHAHASH
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
#endif`,Vw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ww=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xw=`#ifdef USE_AOMAP
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
#endif`,qw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jw=`#ifdef USE_BATCHING
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
#endif`,Yw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$w=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qw=`#ifdef USE_IRIDESCENCE
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
#endif`,Jw=`#ifdef USE_BUMPMAP
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
#endif`,eT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,oT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,aT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,lT=`#define PI 3.141592653589793
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
} // validated`,cT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,uT=`vec3 transformedNormal = objectNormal;
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
#endif`,fT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mT="gl_FragColor = linearToOutputTexel( gl_FragColor );",gT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_T=`#ifdef USE_ENVMAP
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
#endif`,vT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yT=`#ifdef USE_ENVMAP
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
#endif`,xT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ST=`#ifdef USE_ENVMAP
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
#endif`,MT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ET=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,TT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,CT=`#ifdef USE_GRADIENTMAP
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
}`,AT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,RT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,PT=`uniform bool receiveShadow;
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
#endif`,DT=`#ifdef USE_ENVMAP
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
#endif`,NT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,IT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,LT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,FT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,UT=`PhysicalMaterial material;
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
#endif`,OT=`struct PhysicalMaterial {
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
}`,kT=`
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
#endif`,zT=`#if defined( RE_IndirectDiffuse )
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
#endif`,BT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,VT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,HT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,XT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,YT=`#if defined( USE_POINTS_UV )
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
#endif`,$T=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ZT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,KT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,QT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,JT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eC=`#ifdef USE_MORPHTARGETS
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
#endif`,tC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,iC=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,aC=`#ifdef USE_NORMALMAP
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
#endif`,lC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hC=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_C=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,SC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,MC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,EC=`float getShadowMask() {
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
}`,wC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,TC=`#ifdef USE_SKINNING
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
#endif`,CC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,AC=`#ifdef USE_SKINNING
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
#endif`,bC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,RC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,PC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,DC=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,NC=`#ifdef USE_TRANSMISSION
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
#endif`,IC=`#ifdef USE_TRANSMISSION
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
#endif`,LC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,UC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zC=`uniform sampler2D t2D;
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
}`,BC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VC=`#ifdef ENVMAP_TYPE_CUBE
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
}`,HC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WC=`#include <common>
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
}`,XC=`#if DEPTH_PACKING == 3200
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
}`,qC=`#define DISTANCE
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
}`,jC=`#define DISTANCE
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
}`,YC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$C=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZC=`uniform float scale;
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
}`,KC=`uniform vec3 diffuse;
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
}`,QC=`#include <common>
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
}`,JC=`uniform vec3 diffuse;
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
}`,eA=`#define LAMBERT
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
}`,tA=`#define LAMBERT
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
}`,nA=`#define MATCAP
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
}`,iA=`#define MATCAP
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
}`,rA=`#define NORMAL
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
}`,sA=`#define NORMAL
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
}`,oA=`#define PHONG
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
}`,aA=`#define PHONG
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
}`,lA=`#define STANDARD
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
}`,cA=`#define STANDARD
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
}`,uA=`#define TOON
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
}`,fA=`#define TOON
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
}`,dA=`uniform float size;
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
}`,hA=`uniform vec3 diffuse;
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
}`,pA=`#include <common>
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
}`,mA=`uniform vec3 color;
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
}`,gA=`uniform float rotation;
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
}`,_A=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:zw,alphahash_pars_fragment:Bw,alphamap_fragment:Vw,alphamap_pars_fragment:Hw,alphatest_fragment:Gw,alphatest_pars_fragment:Ww,aomap_fragment:Xw,aomap_pars_fragment:qw,batching_pars_vertex:jw,batching_vertex:Yw,begin_vertex:$w,beginnormal_vertex:Zw,bsdfs:Kw,iridescence_fragment:Qw,bumpmap_pars_fragment:Jw,clipping_planes_fragment:eT,clipping_planes_pars_fragment:tT,clipping_planes_pars_vertex:nT,clipping_planes_vertex:iT,color_fragment:rT,color_pars_fragment:sT,color_pars_vertex:oT,color_vertex:aT,common:lT,cube_uv_reflection_fragment:cT,defaultnormal_vertex:uT,displacementmap_pars_vertex:fT,displacementmap_vertex:dT,emissivemap_fragment:hT,emissivemap_pars_fragment:pT,colorspace_fragment:mT,colorspace_pars_fragment:gT,envmap_fragment:_T,envmap_common_pars_fragment:vT,envmap_pars_fragment:yT,envmap_pars_vertex:xT,envmap_physical_pars_fragment:DT,envmap_vertex:ST,fog_vertex:MT,fog_pars_vertex:ET,fog_fragment:wT,fog_pars_fragment:TT,gradientmap_pars_fragment:CT,lightmap_pars_fragment:AT,lights_lambert_fragment:bT,lights_lambert_pars_fragment:RT,lights_pars_begin:PT,lights_toon_fragment:NT,lights_toon_pars_fragment:IT,lights_phong_fragment:LT,lights_phong_pars_fragment:FT,lights_physical_fragment:UT,lights_physical_pars_fragment:OT,lights_fragment_begin:kT,lights_fragment_maps:zT,lights_fragment_end:BT,logdepthbuf_fragment:VT,logdepthbuf_pars_fragment:HT,logdepthbuf_pars_vertex:GT,logdepthbuf_vertex:WT,map_fragment:XT,map_pars_fragment:qT,map_particle_fragment:jT,map_particle_pars_fragment:YT,metalnessmap_fragment:$T,metalnessmap_pars_fragment:ZT,morphinstance_vertex:KT,morphcolor_vertex:QT,morphnormal_vertex:JT,morphtarget_pars_vertex:eC,morphtarget_vertex:tC,normal_fragment_begin:nC,normal_fragment_maps:iC,normal_pars_fragment:rC,normal_pars_vertex:sC,normal_vertex:oC,normalmap_pars_fragment:aC,clearcoat_normal_fragment_begin:lC,clearcoat_normal_fragment_maps:cC,clearcoat_pars_fragment:uC,iridescence_pars_fragment:fC,opaque_fragment:dC,packing:hC,premultiplied_alpha_fragment:pC,project_vertex:mC,dithering_fragment:gC,dithering_pars_fragment:_C,roughnessmap_fragment:vC,roughnessmap_pars_fragment:yC,shadowmap_pars_fragment:xC,shadowmap_pars_vertex:SC,shadowmap_vertex:MC,shadowmask_pars_fragment:EC,skinbase_vertex:wC,skinning_pars_vertex:TC,skinning_vertex:CC,skinnormal_vertex:AC,specularmap_fragment:bC,specularmap_pars_fragment:RC,tonemapping_fragment:PC,tonemapping_pars_fragment:DC,transmission_fragment:NC,transmission_pars_fragment:IC,uv_pars_fragment:LC,uv_pars_vertex:FC,uv_vertex:UC,worldpos_vertex:OC,background_vert:kC,background_frag:zC,backgroundCube_vert:BC,backgroundCube_frag:VC,cube_vert:HC,cube_frag:GC,depth_vert:WC,depth_frag:XC,distanceRGBA_vert:qC,distanceRGBA_frag:jC,equirect_vert:YC,equirect_frag:$C,linedashed_vert:ZC,linedashed_frag:KC,meshbasic_vert:QC,meshbasic_frag:JC,meshlambert_vert:eA,meshlambert_frag:tA,meshmatcap_vert:nA,meshmatcap_frag:iA,meshnormal_vert:rA,meshnormal_frag:sA,meshphong_vert:oA,meshphong_frag:aA,meshphysical_vert:lA,meshphysical_frag:cA,meshtoon_vert:uA,meshtoon_frag:fA,points_vert:dA,points_frag:hA,shadow_vert:pA,shadow_frag:mA,sprite_vert:gA,sprite_frag:_A},Ne={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},pr={basic:{uniforms:Jn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:Jn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new ht(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:Jn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:Jn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:Jn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new ht(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:Jn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:Jn([Ne.points,Ne.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:Jn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:Jn([Ne.common,Ne.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:Jn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:Jn([Ne.sprite,Ne.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:Jn([Ne.common,Ne.displacementmap,{referencePosition:{value:new se},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:Jn([Ne.lights,Ne.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};pr.physical={uniforms:Jn([pr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const Ju={r:0,b:0,g:0},mo=new Mr,vA=new an;function yA(r,e,t,n,s,a,c){const l=new ht(0);let f=a===!0?0:1,d,h,m=null,g=0,_=null;function S(b){let w=b.isScene===!0?b.background:null;return w&&w.isTexture&&(w=(b.backgroundBlurriness>0?t:e).get(w)),w}function M(b){let w=!1;const C=S(b);C===null?v(l,f):C&&C.isColor&&(v(C,1),w=!0);const N=r.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,c):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(r.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(b,w){const C=S(w);C&&(C.isCubeTexture||C.mapping===Nf)?(h===void 0&&(h=new ui(new rl(1,1,1),new rr({name:"BackgroundCubeMaterial",uniforms:Xa(pr.backgroundCube.uniforms),vertexShader:pr.backgroundCube.vertexShader,fragmentShader:pr.backgroundCube.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,D,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),mo.copy(w.backgroundRotation),mo.x*=-1,mo.y*=-1,mo.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(mo.y*=-1,mo.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(vA.makeRotationFromEuler(mo)),h.material.toneMapped=bt.getTransfer(C.colorSpace)!==It,(m!==C||g!==C.version||_!==r.toneMapping)&&(h.material.needsUpdate=!0,m=C,g=C.version,_=r.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(d===void 0&&(d=new ui(new es(2,2),new rr({name:"BackgroundMaterial",uniforms:Xa(pr.background.uniforms),vertexShader:pr.background.vertexShader,fragmentShader:pr.background.fragmentShader,side:Hs,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(d)),d.material.uniforms.t2D.value=C,d.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,d.material.toneMapped=bt.getTransfer(C.colorSpace)!==It,C.matrixAutoUpdate===!0&&C.updateMatrix(),d.material.uniforms.uvTransform.value.copy(C.matrix),(m!==C||g!==C.version||_!==r.toneMapping)&&(d.material.needsUpdate=!0,m=C,g=C.version,_=r.toneMapping),d.layers.enableAll(),b.unshift(d,d.geometry,d.material,0,0,null))}function v(b,w){b.getRGB(Ju,ox(r)),n.buffers.color.setClear(Ju.r,Ju.g,Ju.b,w,c)}function R(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),d!==void 0&&(d.geometry.dispose(),d.material.dispose())}return{getClearColor:function(){return l},setClearColor:function(b,w=1){l.set(b),f=w,v(l,f)},getClearAlpha:function(){return f},setClearAlpha:function(b){f=b,v(l,f)},render:M,addToRenderList:x,dispose:R}}function xA(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},s=g(null);let a=s,c=!1;function l(A,U,z,H,q){let ee=!1;const j=m(H,z,U);a!==j&&(a=j,d(a.object)),ee=_(A,H,z,q),ee&&S(A,H,z,q),q!==null&&e.update(q,r.ELEMENT_ARRAY_BUFFER),(ee||c)&&(c=!1,w(A,U,z,H),q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function f(){return r.createVertexArray()}function d(A){return r.bindVertexArray(A)}function h(A){return r.deleteVertexArray(A)}function m(A,U,z){const H=z.wireframe===!0;let q=n[A.id];q===void 0&&(q={},n[A.id]=q);let ee=q[U.id];ee===void 0&&(ee={},q[U.id]=ee);let j=ee[H];return j===void 0&&(j=g(f()),ee[H]=j),j}function g(A){const U=[],z=[],H=[];for(let q=0;q<t;q++)U[q]=0,z[q]=0,H[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:z,attributeDivisors:H,object:A,attributes:{},index:null}}function _(A,U,z,H){const q=a.attributes,ee=U.attributes;let j=0;const Q=z.getAttributes();for(const V in Q)if(Q[V].location>=0){const Y=q[V];let O=ee[V];if(O===void 0&&(V==="instanceMatrix"&&A.instanceMatrix&&(O=A.instanceMatrix),V==="instanceColor"&&A.instanceColor&&(O=A.instanceColor)),Y===void 0||Y.attribute!==O||O&&Y.data!==O.data)return!0;j++}return a.attributesNum!==j||a.index!==H}function S(A,U,z,H){const q={},ee=U.attributes;let j=0;const Q=z.getAttributes();for(const V in Q)if(Q[V].location>=0){let Y=ee[V];Y===void 0&&(V==="instanceMatrix"&&A.instanceMatrix&&(Y=A.instanceMatrix),V==="instanceColor"&&A.instanceColor&&(Y=A.instanceColor));const O={};O.attribute=Y,Y&&Y.data&&(O.data=Y.data),q[V]=O,j++}a.attributes=q,a.attributesNum=j,a.index=H}function M(){const A=a.newAttributes;for(let U=0,z=A.length;U<z;U++)A[U]=0}function x(A){v(A,0)}function v(A,U){const z=a.newAttributes,H=a.enabledAttributes,q=a.attributeDivisors;z[A]=1,H[A]===0&&(r.enableVertexAttribArray(A),H[A]=1),q[A]!==U&&(r.vertexAttribDivisor(A,U),q[A]=U)}function R(){const A=a.newAttributes,U=a.enabledAttributes;for(let z=0,H=U.length;z<H;z++)U[z]!==A[z]&&(r.disableVertexAttribArray(z),U[z]=0)}function b(A,U,z,H,q,ee,j){j===!0?r.vertexAttribIPointer(A,U,z,q,ee):r.vertexAttribPointer(A,U,z,H,q,ee)}function w(A,U,z,H){M();const q=H.attributes,ee=z.getAttributes(),j=U.defaultAttributeValues;for(const Q in ee){const V=ee[Q];if(V.location>=0){let G=q[Q];if(G===void 0&&(Q==="instanceMatrix"&&A.instanceMatrix&&(G=A.instanceMatrix),Q==="instanceColor"&&A.instanceColor&&(G=A.instanceColor)),G!==void 0){const Y=G.normalized,O=G.itemSize,Z=e.get(G);if(Z===void 0)continue;const Ae=Z.buffer,ne=Z.type,ae=Z.bytesPerElement,Se=ne===r.INT||ne===r.UNSIGNED_INT||G.gpuType===Tm;if(G.isInterleavedBufferAttribute){const ge=G.data,fe=ge.stride,be=G.offset;if(ge.isInstancedInterleavedBuffer){for(let Ye=0;Ye<V.locationSize;Ye++)v(V.location+Ye,ge.meshPerAttribute);A.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Ye=0;Ye<V.locationSize;Ye++)x(V.location+Ye);r.bindBuffer(r.ARRAY_BUFFER,Ae);for(let Ye=0;Ye<V.locationSize;Ye++)b(V.location+Ye,O/V.locationSize,ne,Y,fe*ae,(be+O/V.locationSize*Ye)*ae,Se)}else{if(G.isInstancedBufferAttribute){for(let ge=0;ge<V.locationSize;ge++)v(V.location+ge,G.meshPerAttribute);A.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let ge=0;ge<V.locationSize;ge++)x(V.location+ge);r.bindBuffer(r.ARRAY_BUFFER,Ae);for(let ge=0;ge<V.locationSize;ge++)b(V.location+ge,O/V.locationSize,ne,Y,O*ae,O/V.locationSize*ge*ae,Se)}}else if(j!==void 0){const Y=j[Q];if(Y!==void 0)switch(Y.length){case 2:r.vertexAttrib2fv(V.location,Y);break;case 3:r.vertexAttrib3fv(V.location,Y);break;case 4:r.vertexAttrib4fv(V.location,Y);break;default:r.vertexAttrib1fv(V.location,Y)}}}}R()}function C(){P();for(const A in n){const U=n[A];for(const z in U){const H=U[z];for(const q in H)h(H[q].object),delete H[q];delete U[z]}delete n[A]}}function N(A){if(n[A.id]===void 0)return;const U=n[A.id];for(const z in U){const H=U[z];for(const q in H)h(H[q].object),delete H[q];delete U[z]}delete n[A.id]}function D(A){for(const U in n){const z=n[U];if(z[A.id]===void 0)continue;const H=z[A.id];for(const q in H)h(H[q].object),delete H[q];delete z[A.id]}}function P(){T(),c=!0,a!==s&&(a=s,d(a.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:P,resetDefaultState:T,dispose:C,releaseStatesOfGeometry:N,releaseStatesOfProgram:D,initAttributes:M,enableAttribute:x,disableUnusedAttributes:R}}function SA(r,e,t){let n;function s(d){n=d}function a(d,h){r.drawArrays(n,d,h),t.update(h,n,1)}function c(d,h,m){m!==0&&(r.drawArraysInstanced(n,d,h,m),t.update(h,n,m))}function l(d,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,d,0,h,0,m);let _=0;for(let S=0;S<m;S++)_+=h[S];t.update(_,n,1)}function f(d,h,m,g){if(m===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let S=0;S<d.length;S++)c(d[S],h[S],g[S]);else{_.multiDrawArraysInstancedWEBGL(n,d,0,h,0,g,0,m);let S=0;for(let M=0;M<m;M++)S+=h[M]*g[M];t.update(S,n,1)}}this.setMode=s,this.render=a,this.renderInstances=c,this.renderMultiDraw=l,this.renderMultiDrawInstances=f}function MA(r,e,t,n){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");s=r.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(D){return!(D!==Ai&&n.convert(D)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(D){const P=D===el&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Jr&&n.convert(D)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==_r&&!P)}function f(D){if(D==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const h=f(d);h!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",h,"instead."),d=h);const m=t.logarithmicDepthBuffer===!0,g=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),_=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),S=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),R=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),w=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=S>0,N=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:f,textureFormatReadable:c,textureTypeReadable:l,precision:d,logarithmicDepthBuffer:m,reverseDepthBuffer:g,maxTextures:_,maxVertexTextures:S,maxTextureSize:M,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:R,maxVaryings:b,maxFragmentUniforms:w,vertexTextures:C,maxSamples:N}}function EA(r){const e=this;let t=null,n=0,s=!1,a=!1;const c=new yo,l=new lt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(m,g){const _=m.length!==0||g||n!==0||s;return s=g,n=m.length,_},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(m,g){t=h(m,g,0)},this.setState=function(m,g,_){const S=m.clippingPlanes,M=m.clipIntersection,x=m.clipShadows,v=r.get(m);if(!s||S===null||S.length===0||a&&!x)a?h(null):d();else{const R=a?0:n,b=R*4;let w=v.clippingState||null;f.value=w,w=h(S,g,b,_);for(let C=0;C!==b;++C)w[C]=t[C];v.clippingState=w,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=R}};function d(){f.value!==t&&(f.value=t,f.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(m,g,_,S){const M=m!==null?m.length:0;let x=null;if(M!==0){if(x=f.value,S!==!0||x===null){const v=_+M*4,R=g.matrixWorldInverse;l.getNormalMatrix(R),(x===null||x.length<v)&&(x=new Float32Array(v));for(let b=0,w=_;b!==M;++b,w+=4)c.copy(m[b]).applyMatrix4(R,l),c.normal.toArray(x,w),x[w+3]=c.constant}f.value=x,f.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,x}}function wA(r){let e=new WeakMap;function t(c,l){return l===Ep?c.mapping=Ba:l===wp&&(c.mapping=Va),c}function n(c){if(c&&c.isTexture){const l=c.mapping;if(l===Ep||l===wp)if(e.has(c)){const f=e.get(c).texture;return t(f,c.mapping)}else{const f=c.image;if(f&&f.height>0){const d=new xw(f.height);return d.fromEquirectangularTexture(r,c),e.set(c,d),c.addEventListener("dispose",s),t(d.texture,c.mapping)}else return null}}return c}function s(c){const l=c.target;l.removeEventListener("dispose",s);const f=e.get(l);f!==void 0&&(e.delete(l),f.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}const ba=4,Av=[.125,.215,.35,.446,.526,.582],wo=20,Kh=new zm,bv=new ht;let Qh=null,Jh=0,ep=0,tp=!1;const xo=(1+Math.sqrt(5))/2,Ea=1/xo,Rv=[new se(-xo,Ea,0),new se(xo,Ea,0),new se(-Ea,0,xo),new se(Ea,0,xo),new se(0,xo,-Ea),new se(0,xo,Ea),new se(-1,1,-1),new se(1,1,-1),new se(-1,1,1),new se(1,1,1)];class Pv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Qh=this._renderer.getRenderTarget(),Jh=this._renderer.getActiveCubeFace(),ep=this._renderer.getActiveMipmapLevel(),tp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Iv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qh,Jh,ep),this._renderer.xr.enabled=tp,e.scissorTest=!1,ef(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ba||e.mapping===Va?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qh=this._renderer.getRenderTarget(),Jh=this._renderer.getActiveCubeFace(),ep=this._renderer.getActiveMipmapLevel(),tp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:el,format:Ai,colorSpace:Wa,depthBuffer:!1},s=Dv(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dv(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=TA(a)),this._blurMaterial=CA(a,e,t)}return s}_compileMaterial(e){const t=new ui(this._lodPlanes[0],e);this._renderer.compile(t,Kh)}_sceneToCubeUV(e,t,n,s){const l=new Hi(90,1,t,n),f=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,m=h.autoClear,g=h.toneMapping;h.getClearColor(bv),h.toneMapping=zs,h.autoClear=!1;const _=new sc({name:"PMREM.Background",side:fi,depthWrite:!1,depthTest:!1}),S=new ui(new rl,_);let M=!1;const x=e.background;x?x.isColor&&(_.color.copy(x),e.background=null,M=!0):(_.color.copy(bv),M=!0);for(let v=0;v<6;v++){const R=v%3;R===0?(l.up.set(0,f[v],0),l.lookAt(d[v],0,0)):R===1?(l.up.set(0,0,f[v]),l.lookAt(0,d[v],0)):(l.up.set(0,f[v],0),l.lookAt(0,0,d[v]));const b=this._cubeSize;ef(s,R*b,v>2?b:0,b,b),h.setRenderTarget(s),M&&h.render(S,l),h.render(e,l)}S.geometry.dispose(),S.material.dispose(),h.toneMapping=g,h.autoClear=m,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ba||e.mapping===Va;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Iv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nv());const a=s?this._cubemapMaterial:this._equirectMaterial,c=new ui(this._lodPlanes[0],a),l=a.uniforms;l.envMap.value=e;const f=this._cubeSize;ef(t,0,0,3*f,2*f),n.setRenderTarget(t),n.render(c,Kh)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const c=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),l=Rv[(s-a-1)%Rv.length];this._blur(e,a-1,a,c,l)}t.autoClear=n}_blur(e,t,n,s,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,n,s,"latitudinal",a),this._halfBlur(c,e,n,n,s,"longitudinal",a)}_halfBlur(e,t,n,s,a,c,l){const f=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,m=new ui(this._lodPlanes[s],d),g=d.uniforms,_=this._sizeLods[n]-1,S=isFinite(a)?Math.PI/(2*_):2*Math.PI/(2*wo-1),M=a/S,x=isFinite(a)?1+Math.floor(h*M):wo;x>wo&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${wo}`);const v=[];let R=0;for(let D=0;D<wo;++D){const P=D/M,T=Math.exp(-P*P/2);v.push(T),D===0?R+=T:D<x&&(R+=2*T)}for(let D=0;D<v.length;D++)v[D]=v[D]/R;g.envMap.value=e.texture,g.samples.value=x,g.weights.value=v,g.latitudinal.value=c==="latitudinal",l&&(g.poleAxis.value=l);const{_lodMax:b}=this;g.dTheta.value=S,g.mipInt.value=b-n;const w=this._sizeLods[s],C=3*w*(s>b-ba?s-b+ba:0),N=4*(this._cubeSize-w);ef(t,C,N,3*w,2*w),f.setRenderTarget(t),f.render(m,Kh)}}function TA(r){const e=[],t=[],n=[];let s=r;const a=r-ba+1+Av.length;for(let c=0;c<a;c++){const l=Math.pow(2,s);t.push(l);let f=1/l;c>r-ba?f=Av[c-r+ba-1]:c===0&&(f=0),n.push(f);const d=1/(l-2),h=-d,m=1+d,g=[h,h,m,h,m,m,h,h,m,m,h,m],_=6,S=6,M=3,x=2,v=1,R=new Float32Array(M*S*_),b=new Float32Array(x*S*_),w=new Float32Array(v*S*_);for(let N=0;N<_;N++){const D=N%3*2/3-1,P=N>2?0:-1,T=[D,P,0,D+2/3,P,0,D+2/3,P+1,0,D,P,0,D+2/3,P+1,0,D,P+1,0];R.set(T,M*S*N),b.set(g,x*S*N);const A=[N,N,N,N,N,N];w.set(A,v*S*N)}const C=new vi;C.setAttribute("position",new yr(R,M)),C.setAttribute("uv",new yr(b,x)),C.setAttribute("faceIndex",new yr(w,v)),e.push(C),s>ba&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Dv(r,e,t){const n=new ir(r,e,t);return n.texture.mapping=Nf,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ef(r,e,t,n,s){r.viewport.set(e,t,n,s),r.scissor.set(e,t,n,s)}function CA(r,e,t){const n=new Float32Array(wo),s=new se(0,1,0);return new rr({name:"SphericalGaussianBlur",defines:{n:wo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Vm(),fragmentShader:`

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
		`,blending:Zr,depthTest:!1,depthWrite:!1})}function Nv(){return new rr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vm(),fragmentShader:`

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
		`,blending:Zr,depthTest:!1,depthWrite:!1})}function Iv(){return new rr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zr,depthTest:!1,depthWrite:!1})}function Vm(){return`

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
	`}function AA(r){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const f=l.mapping,d=f===Ep||f===wp,h=f===Ba||f===Va;if(d||h){let m=e.get(l);const g=m!==void 0?m.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==g)return t===null&&(t=new Pv(r)),m=d?t.fromEquirectangular(l,m):t.fromCubemap(l,m),m.texture.pmremVersion=l.pmremVersion,e.set(l,m),m.texture;if(m!==void 0)return m.texture;{const _=l.image;return d&&_&&_.height>0||h&&_&&s(_)?(t===null&&(t=new Pv(r)),m=d?t.fromEquirectangular(l):t.fromCubemap(l),m.texture.pmremVersion=l.pmremVersion,e.set(l,m),l.addEventListener("dispose",a),m.texture):null}}}return l}function s(l){let f=0;const d=6;for(let h=0;h<d;h++)l[h]!==void 0&&f++;return f===d}function a(l){const f=l.target;f.removeEventListener("dispose",a);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:c}}function bA(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=r.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Aa("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function RA(r,e,t,n){const s={},a=new WeakMap;function c(m){const g=m.target;g.index!==null&&e.remove(g.index);for(const S in g.attributes)e.remove(g.attributes[S]);g.removeEventListener("dispose",c),delete s[g.id];const _=a.get(g);_&&(e.remove(_),a.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function l(m,g){return s[g.id]===!0||(g.addEventListener("dispose",c),s[g.id]=!0,t.memory.geometries++),g}function f(m){const g=m.attributes;for(const _ in g)e.update(g[_],r.ARRAY_BUFFER)}function d(m){const g=[],_=m.index,S=m.attributes.position;let M=0;if(_!==null){const R=_.array;M=_.version;for(let b=0,w=R.length;b<w;b+=3){const C=R[b+0],N=R[b+1],D=R[b+2];g.push(C,N,N,D,D,C)}}else if(S!==void 0){const R=S.array;M=S.version;for(let b=0,w=R.length/3-1;b<w;b+=3){const C=b+0,N=b+1,D=b+2;g.push(C,N,N,D,D,C)}}else return;const x=new(Qy(g)?sx:rx)(g,1);x.version=M;const v=a.get(m);v&&e.remove(v),a.set(m,x)}function h(m){const g=a.get(m);if(g){const _=m.index;_!==null&&g.version<_.version&&d(m)}else d(m);return a.get(m)}return{get:l,update:f,getWireframeAttribute:h}}function PA(r,e,t){let n;function s(g){n=g}let a,c;function l(g){a=g.type,c=g.bytesPerElement}function f(g,_){r.drawElements(n,_,a,g*c),t.update(_,n,1)}function d(g,_,S){S!==0&&(r.drawElementsInstanced(n,_,a,g*c,S),t.update(_,n,S))}function h(g,_,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,_,0,a,g,0,S);let x=0;for(let v=0;v<S;v++)x+=_[v];t.update(x,n,1)}function m(g,_,S,M){if(S===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let v=0;v<g.length;v++)d(g[v]/c,_[v],M[v]);else{x.multiDrawElementsInstancedWEBGL(n,_,0,a,g,0,M,0,S);let v=0;for(let R=0;R<S;R++)v+=_[R]*M[R];t.update(v,n,1)}}this.setMode=s,this.setIndex=l,this.render=f,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function DA(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,c,l){switch(t.calls++,c){case r.TRIANGLES:t.triangles+=l*(a/3);break;case r.LINES:t.lines+=l*(a/2);break;case r.LINE_STRIP:t.lines+=l*(a-1);break;case r.LINE_LOOP:t.lines+=l*a;break;case r.POINTS:t.points+=l*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function NA(r,e,t){const n=new WeakMap,s=new on;function a(c,l,f){const d=c.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,m=h!==void 0?h.length:0;let g=n.get(l);if(g===void 0||g.count!==m){let A=function(){P.dispose(),n.delete(l),l.removeEventListener("dispose",A)};var _=A;g!==void 0&&g.texture.dispose();const S=l.morphAttributes.position!==void 0,M=l.morphAttributes.normal!==void 0,x=l.morphAttributes.color!==void 0,v=l.morphAttributes.position||[],R=l.morphAttributes.normal||[],b=l.morphAttributes.color||[];let w=0;S===!0&&(w=1),M===!0&&(w=2),x===!0&&(w=3);let C=l.attributes.position.count*w,N=1;C>e.maxTextureSize&&(N=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const D=new Float32Array(C*N*4*m),P=new ex(D,C,N,m);P.type=_r,P.needsUpdate=!0;const T=w*4;for(let U=0;U<m;U++){const z=v[U],H=R[U],q=b[U],ee=C*N*4*U;for(let j=0;j<z.count;j++){const Q=j*T;S===!0&&(s.fromBufferAttribute(z,j),D[ee+Q+0]=s.x,D[ee+Q+1]=s.y,D[ee+Q+2]=s.z,D[ee+Q+3]=0),M===!0&&(s.fromBufferAttribute(H,j),D[ee+Q+4]=s.x,D[ee+Q+5]=s.y,D[ee+Q+6]=s.z,D[ee+Q+7]=0),x===!0&&(s.fromBufferAttribute(q,j),D[ee+Q+8]=s.x,D[ee+Q+9]=s.y,D[ee+Q+10]=s.z,D[ee+Q+11]=q.itemSize===4?s.w:1)}}g={count:m,texture:P,size:new ft(C,N)},n.set(l,g),l.addEventListener("dispose",A)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let S=0;for(let x=0;x<d.length;x++)S+=d[x];const M=l.morphTargetsRelative?1:1-S;f.getUniforms().setValue(r,"morphTargetBaseInfluence",M),f.getUniforms().setValue(r,"morphTargetInfluences",d)}f.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:a}}function IA(r,e,t,n){let s=new WeakMap;function a(f){const d=n.render.frame,h=f.geometry,m=e.get(f,h);if(s.get(m)!==d&&(e.update(m),s.set(m,d)),f.isInstancedMesh&&(f.hasEventListener("dispose",l)===!1&&f.addEventListener("dispose",l),s.get(f)!==d&&(t.update(f.instanceMatrix,r.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,r.ARRAY_BUFFER),s.set(f,d))),f.isSkinnedMesh){const g=f.skeleton;s.get(g)!==d&&(g.update(),s.set(g,d))}return m}function c(){s=new WeakMap}function l(f){const d=f.target;d.removeEventListener("dispose",l),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:c}}const gx=new Gn,Lv=new hx(1,1),_x=new ex,vx=new sw,yx=new cx,Fv=[],Uv=[],Ov=new Float32Array(16),kv=new Float32Array(9),zv=new Float32Array(4);function sl(r,e,t){const n=r[0];if(n<=0||n>0)return r;const s=e*t;let a=Fv[s];if(a===void 0&&(a=new Float32Array(s),Fv[s]=a),e!==0){n.toArray(a,0);for(let c=1,l=0;c!==e;++c)l+=t,r[c].toArray(a,l)}return a}function _n(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function vn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Uf(r,e){let t=Uv[e];t===void 0&&(t=new Int32Array(e),Uv[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function LA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function FA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;r.uniform2fv(this.addr,e),vn(t,e)}}function UA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_n(t,e))return;r.uniform3fv(this.addr,e),vn(t,e)}}function OA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;r.uniform4fv(this.addr,e),vn(t,e)}}function kA(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(_n(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),vn(t,e)}else{if(_n(t,n))return;zv.set(n),r.uniformMatrix2fv(this.addr,!1,zv),vn(t,n)}}function zA(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(_n(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),vn(t,e)}else{if(_n(t,n))return;kv.set(n),r.uniformMatrix3fv(this.addr,!1,kv),vn(t,n)}}function BA(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(_n(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),vn(t,e)}else{if(_n(t,n))return;Ov.set(n),r.uniformMatrix4fv(this.addr,!1,Ov),vn(t,n)}}function VA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function HA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;r.uniform2iv(this.addr,e),vn(t,e)}}function GA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;r.uniform3iv(this.addr,e),vn(t,e)}}function WA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;r.uniform4iv(this.addr,e),vn(t,e)}}function XA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function qA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;r.uniform2uiv(this.addr,e),vn(t,e)}}function jA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;r.uniform3uiv(this.addr,e),vn(t,e)}}function YA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;r.uniform4uiv(this.addr,e),vn(t,e)}}function $A(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s);let a;this.type===r.SAMPLER_2D_SHADOW?(Lv.compareFunction=Ky,a=Lv):a=gx,t.setTexture2D(e||a,s)}function ZA(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||vx,s)}function KA(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||yx,s)}function QA(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||_x,s)}function JA(r){switch(r){case 5126:return LA;case 35664:return FA;case 35665:return UA;case 35666:return OA;case 35674:return kA;case 35675:return zA;case 35676:return BA;case 5124:case 35670:return VA;case 35667:case 35671:return HA;case 35668:case 35672:return GA;case 35669:case 35673:return WA;case 5125:return XA;case 36294:return qA;case 36295:return jA;case 36296:return YA;case 35678:case 36198:case 36298:case 36306:case 35682:return $A;case 35679:case 36299:case 36307:return ZA;case 35680:case 36300:case 36308:case 36293:return KA;case 36289:case 36303:case 36311:case 36292:return QA}}function eb(r,e){r.uniform1fv(this.addr,e)}function tb(r,e){const t=sl(e,this.size,2);r.uniform2fv(this.addr,t)}function nb(r,e){const t=sl(e,this.size,3);r.uniform3fv(this.addr,t)}function ib(r,e){const t=sl(e,this.size,4);r.uniform4fv(this.addr,t)}function rb(r,e){const t=sl(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function sb(r,e){const t=sl(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function ob(r,e){const t=sl(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function ab(r,e){r.uniform1iv(this.addr,e)}function lb(r,e){r.uniform2iv(this.addr,e)}function cb(r,e){r.uniform3iv(this.addr,e)}function ub(r,e){r.uniform4iv(this.addr,e)}function fb(r,e){r.uniform1uiv(this.addr,e)}function db(r,e){r.uniform2uiv(this.addr,e)}function hb(r,e){r.uniform3uiv(this.addr,e)}function pb(r,e){r.uniform4uiv(this.addr,e)}function mb(r,e,t){const n=this.cache,s=e.length,a=Uf(t,s);_n(n,a)||(r.uniform1iv(this.addr,a),vn(n,a));for(let c=0;c!==s;++c)t.setTexture2D(e[c]||gx,a[c])}function gb(r,e,t){const n=this.cache,s=e.length,a=Uf(t,s);_n(n,a)||(r.uniform1iv(this.addr,a),vn(n,a));for(let c=0;c!==s;++c)t.setTexture3D(e[c]||vx,a[c])}function _b(r,e,t){const n=this.cache,s=e.length,a=Uf(t,s);_n(n,a)||(r.uniform1iv(this.addr,a),vn(n,a));for(let c=0;c!==s;++c)t.setTextureCube(e[c]||yx,a[c])}function vb(r,e,t){const n=this.cache,s=e.length,a=Uf(t,s);_n(n,a)||(r.uniform1iv(this.addr,a),vn(n,a));for(let c=0;c!==s;++c)t.setTexture2DArray(e[c]||_x,a[c])}function yb(r){switch(r){case 5126:return eb;case 35664:return tb;case 35665:return nb;case 35666:return ib;case 35674:return rb;case 35675:return sb;case 35676:return ob;case 5124:case 35670:return ab;case 35667:case 35671:return lb;case 35668:case 35672:return cb;case 35669:case 35673:return ub;case 5125:return fb;case 36294:return db;case 36295:return hb;case 36296:return pb;case 35678:case 36198:case 36298:case 36306:case 35682:return mb;case 35679:case 36299:case 36307:return gb;case 35680:case 36300:case 36308:case 36293:return _b;case 36289:case 36303:case 36311:case 36292:return vb}}class xb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=JA(t.type)}}class Sb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yb(t.type)}}class Mb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let a=0,c=s.length;a!==c;++a){const l=s[a];l.setValue(e,t[l.id],n)}}}const np=/(\w+)(\])?(\[|\.)?/g;function Bv(r,e){r.seq.push(e),r.map[e.id]=e}function Eb(r,e,t){const n=r.name,s=n.length;for(np.lastIndex=0;;){const a=np.exec(n),c=np.lastIndex;let l=a[1];const f=a[2]==="]",d=a[3];if(f&&(l=l|0),d===void 0||d==="["&&c+2===s){Bv(t,d===void 0?new xb(l,r,e):new Sb(l,r,e));break}else{let m=t.map[l];m===void 0&&(m=new Mb(l),Bv(t,m)),t=m}}}class ff{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=e.getActiveUniform(t,s),c=e.getUniformLocation(t,a.name);Eb(a,c,this)}}setValue(e,t,n,s){const a=this.map[t];a!==void 0&&a.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let a=0,c=t.length;a!==c;++a){const l=t[a],f=n[l.id];f.needsUpdate!==!1&&l.setValue(e,f.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,a=e.length;s!==a;++s){const c=e[s];c.id in t&&n.push(c)}return n}}function Vv(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const wb=37297;let Tb=0;function Cb(r,e){const t=r.split(`
`),n=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=s;c<a;c++){const l=c+1;n.push(`${l===e?">":" "} ${l}: ${t[c]}`)}return n.join(`
`)}const Hv=new lt;function Ab(r){bt._getMatrix(Hv,bt.workingColorSpace,r);const e=`mat3( ${Hv.elements.map(t=>t.toFixed(4))} )`;switch(bt.getTransfer(r)){case gf:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Gv(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=r.getShaderInfoLog(e).trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const c=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Cb(r.getShaderSource(e),c)}else return s}function bb(r,e){const t=Ab(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Rb(r,e){let t;switch(e){case gE:t="Linear";break;case _E:t="Reinhard";break;case vE:t="Cineon";break;case yE:t="ACESFilmic";break;case SE:t="AgX";break;case ME:t="Neutral";break;case xE:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const tf=new se;function Pb(){bt.getLuminanceCoefficients(tf);const r=tf.x.toFixed(4),e=tf.y.toFixed(4),t=tf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Db(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($l).join(`
`)}function Nb(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ib(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=r.getActiveAttrib(e,s),c=a.name;let l=1;a.type===r.FLOAT_MAT2&&(l=2),a.type===r.FLOAT_MAT3&&(l=3),a.type===r.FLOAT_MAT4&&(l=4),t[c]={type:a.type,location:r.getAttribLocation(e,c),locationSize:l}}return t}function $l(r){return r!==""}function Wv(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Lb=/^[ \t]*#include +<([\w\d./]+)>/gm;function em(r){return r.replace(Lb,Ub)}const Fb=new Map;function Ub(r,e){let t=ut[e];if(t===void 0){const n=Fb.get(e);if(n!==void 0)t=ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return em(t)}const Ob=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qv(r){return r.replace(Ob,kb)}function kb(r,e,t,n){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function jv(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function zb(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Oy?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===$1?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Xr&&(e="SHADOWMAP_TYPE_VSM"),e}function Bb(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ba:case Va:e="ENVMAP_TYPE_CUBE";break;case Nf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Vb(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Va:e="ENVMAP_MODE_REFRACTION";break}return e}function Hb(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ky:e="ENVMAP_BLENDING_MULTIPLY";break;case pE:e="ENVMAP_BLENDING_MIX";break;case mE:e="ENVMAP_BLENDING_ADD";break}return e}function Gb(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Wb(r,e,t,n){const s=r.getContext(),a=t.defines;let c=t.vertexShader,l=t.fragmentShader;const f=zb(t),d=Bb(t),h=Vb(t),m=Hb(t),g=Gb(t),_=Db(t),S=Nb(a),M=s.createProgram();let x,v,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter($l).join(`
`),x.length>0&&(x+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter($l).join(`
`),v.length>0&&(v+=`
`)):(x=[jv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($l).join(`
`),v=[jv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zs?"#define TONE_MAPPING":"",t.toneMapping!==zs?ut.tonemapping_pars_fragment:"",t.toneMapping!==zs?Rb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,bb("linearToOutputTexel",t.outputColorSpace),Pb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($l).join(`
`)),c=em(c),c=Wv(c,t),c=Xv(c,t),l=em(l),l=Wv(l,t),l=Xv(l,t),c=qv(c),l=qv(l),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,x=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["#define varying in",t.glslVersion===tv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===tv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const b=R+x+c,w=R+v+l,C=Vv(s,s.VERTEX_SHADER,b),N=Vv(s,s.FRAGMENT_SHADER,w);s.attachShader(M,C),s.attachShader(M,N),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function D(U){if(r.debug.checkShaderErrors){const z=s.getProgramInfoLog(M).trim(),H=s.getShaderInfoLog(C).trim(),q=s.getShaderInfoLog(N).trim();let ee=!0,j=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(ee=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(s,M,C,N);else{const Q=Gv(s,C,"vertex"),V=Gv(s,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+z+`
`+Q+`
`+V)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(H===""||q==="")&&(j=!1);j&&(U.diagnostics={runnable:ee,programLog:z,vertexShader:{log:H,prefix:x},fragmentShader:{log:q,prefix:v}})}s.deleteShader(C),s.deleteShader(N),P=new ff(s,M),T=Ib(s,M)}let P;this.getUniforms=function(){return P===void 0&&D(this),P};let T;this.getAttributes=function(){return T===void 0&&D(this),T};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(M,wb)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Tb++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=C,this.fragmentShader=N,this}let Xb=0;class qb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(n),c=this._getShaderCacheForMaterial(e);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new jb(e),t.set(e,n)),n}}class jb{constructor(e){this.id=Xb++,this.code=e,this.usedTimes=0}}function Yb(r,e,t,n,s,a,c){const l=new nx,f=new qb,d=new Set,h=[],m=s.logarithmicDepthBuffer,g=s.vertexTextures;let _=s.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return d.add(T),T===0?"uv":`uv${T}`}function x(T,A,U,z,H){const q=z.fog,ee=H.geometry,j=T.isMeshStandardMaterial?z.environment:null,Q=(T.isMeshStandardMaterial?t:e).get(T.envMap||j),V=Q&&Q.mapping===Nf?Q.image.height:null,G=S[T.type];T.precision!==null&&(_=s.getMaxPrecision(T.precision),_!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",_,"instead."));const Y=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,O=Y!==void 0?Y.length:0;let Z=0;ee.morphAttributes.position!==void 0&&(Z=1),ee.morphAttributes.normal!==void 0&&(Z=2),ee.morphAttributes.color!==void 0&&(Z=3);let Ae,ne,ae,Se;if(G){const wt=pr[G];Ae=wt.vertexShader,ne=wt.fragmentShader}else Ae=T.vertexShader,ne=T.fragmentShader,f.update(T),ae=f.getVertexShaderID(T),Se=f.getFragmentShaderID(T);const ge=r.getRenderTarget(),fe=r.state.buffers.depth.getReversed(),be=H.isInstancedMesh===!0,Ye=H.isBatchedMesh===!0,xt=!!T.map,ct=!!T.matcap,Ut=!!Q,X=!!T.aoMap,jn=!!T.lightMap,_t=!!T.bumpMap,pt=!!T.normalMap,Ze=!!T.displacementMap,Nt=!!T.emissiveMap,Xe=!!T.metalnessMap,k=!!T.roughnessMap,L=T.anisotropy>0,le=T.clearcoat>0,me=T.dispersion>0,ye=T.iridescence>0,he=T.sheen>0,qe=T.transmission>0,Re=L&&!!T.anisotropyMap,Oe=le&&!!T.clearcoatMap,dt=le&&!!T.clearcoatNormalMap,we=le&&!!T.clearcoatRoughnessMap,ze=ye&&!!T.iridescenceMap,Qe=ye&&!!T.iridescenceThicknessMap,nt=he&&!!T.sheenColorMap,Be=he&&!!T.sheenRoughnessMap,mt=!!T.specularMap,st=!!T.specularColorMap,Pt=!!T.specularIntensityMap,K=qe&&!!T.transmissionMap,Pe=qe&&!!T.thicknessMap,de=!!T.gradientMap,pe=!!T.alphaMap,Le=T.alphaTest>0,Ie=!!T.alphaHash,ot=!!T.extensions;let kt=zs;T.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(kt=r.toneMapping);const hn={shaderID:G,shaderType:T.type,shaderName:T.name,vertexShader:Ae,fragmentShader:ne,defines:T.defines,customVertexShaderID:ae,customFragmentShaderID:Se,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:_,batching:Ye,batchingColor:Ye&&H._colorsTexture!==null,instancing:be,instancingColor:be&&H.instanceColor!==null,instancingMorph:be&&H.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:ge===null?r.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Wa,alphaToCoverage:!!T.alphaToCoverage,map:xt,matcap:ct,envMap:Ut,envMapMode:Ut&&Q.mapping,envMapCubeUVHeight:V,aoMap:X,lightMap:jn,bumpMap:_t,normalMap:pt,displacementMap:g&&Ze,emissiveMap:Nt,normalMapObjectSpace:pt&&T.normalMapType===CE,normalMapTangentSpace:pt&&T.normalMapType===Zy,metalnessMap:Xe,roughnessMap:k,anisotropy:L,anisotropyMap:Re,clearcoat:le,clearcoatMap:Oe,clearcoatNormalMap:dt,clearcoatRoughnessMap:we,dispersion:me,iridescence:ye,iridescenceMap:ze,iridescenceThicknessMap:Qe,sheen:he,sheenColorMap:nt,sheenRoughnessMap:Be,specularMap:mt,specularColorMap:st,specularIntensityMap:Pt,transmission:qe,transmissionMap:K,thicknessMap:Pe,gradientMap:de,opaque:T.transparent===!1&&T.blending===Ia&&T.alphaToCoverage===!1,alphaMap:pe,alphaTest:Le,alphaHash:Ie,combine:T.combine,mapUv:xt&&M(T.map.channel),aoMapUv:X&&M(T.aoMap.channel),lightMapUv:jn&&M(T.lightMap.channel),bumpMapUv:_t&&M(T.bumpMap.channel),normalMapUv:pt&&M(T.normalMap.channel),displacementMapUv:Ze&&M(T.displacementMap.channel),emissiveMapUv:Nt&&M(T.emissiveMap.channel),metalnessMapUv:Xe&&M(T.metalnessMap.channel),roughnessMapUv:k&&M(T.roughnessMap.channel),anisotropyMapUv:Re&&M(T.anisotropyMap.channel),clearcoatMapUv:Oe&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:dt&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:Be&&M(T.sheenRoughnessMap.channel),specularMapUv:mt&&M(T.specularMap.channel),specularColorMapUv:st&&M(T.specularColorMap.channel),specularIntensityMapUv:Pt&&M(T.specularIntensityMap.channel),transmissionMapUv:K&&M(T.transmissionMap.channel),thicknessMapUv:Pe&&M(T.thicknessMap.channel),alphaMapUv:pe&&M(T.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(pt||L),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!ee.attributes.uv&&(xt||pe),fog:!!q,useFog:T.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:fe,skinning:H.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:Z,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&U.length>0,shadowMapType:r.shadowMap.type,toneMapping:kt,decodeVideoTexture:xt&&T.map.isVideoTexture===!0&&bt.getTransfer(T.map.colorSpace)===It,decodeVideoTextureEmissive:Nt&&T.emissiveMap.isVideoTexture===!0&&bt.getTransfer(T.emissiveMap.colorSpace)===It,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===mr,flipSided:T.side===fi,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:ot&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&T.extensions.multiDraw===!0||Ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return hn.vertexUv1s=d.has(1),hn.vertexUv2s=d.has(2),hn.vertexUv3s=d.has(3),d.clear(),hn}function v(T){const A=[];if(T.shaderID?A.push(T.shaderID):(A.push(T.customVertexShaderID),A.push(T.customFragmentShaderID)),T.defines!==void 0)for(const U in T.defines)A.push(U),A.push(T.defines[U]);return T.isRawShaderMaterial===!1&&(R(A,T),b(A,T),A.push(r.outputColorSpace)),A.push(T.customProgramCacheKey),A.join()}function R(T,A){T.push(A.precision),T.push(A.outputColorSpace),T.push(A.envMapMode),T.push(A.envMapCubeUVHeight),T.push(A.mapUv),T.push(A.alphaMapUv),T.push(A.lightMapUv),T.push(A.aoMapUv),T.push(A.bumpMapUv),T.push(A.normalMapUv),T.push(A.displacementMapUv),T.push(A.emissiveMapUv),T.push(A.metalnessMapUv),T.push(A.roughnessMapUv),T.push(A.anisotropyMapUv),T.push(A.clearcoatMapUv),T.push(A.clearcoatNormalMapUv),T.push(A.clearcoatRoughnessMapUv),T.push(A.iridescenceMapUv),T.push(A.iridescenceThicknessMapUv),T.push(A.sheenColorMapUv),T.push(A.sheenRoughnessMapUv),T.push(A.specularMapUv),T.push(A.specularColorMapUv),T.push(A.specularIntensityMapUv),T.push(A.transmissionMapUv),T.push(A.thicknessMapUv),T.push(A.combine),T.push(A.fogExp2),T.push(A.sizeAttenuation),T.push(A.morphTargetsCount),T.push(A.morphAttributeCount),T.push(A.numDirLights),T.push(A.numPointLights),T.push(A.numSpotLights),T.push(A.numSpotLightMaps),T.push(A.numHemiLights),T.push(A.numRectAreaLights),T.push(A.numDirLightShadows),T.push(A.numPointLightShadows),T.push(A.numSpotLightShadows),T.push(A.numSpotLightShadowsWithMaps),T.push(A.numLightProbes),T.push(A.shadowMapType),T.push(A.toneMapping),T.push(A.numClippingPlanes),T.push(A.numClipIntersection),T.push(A.depthPacking)}function b(T,A){l.disableAll(),A.supportsVertexTextures&&l.enable(0),A.instancing&&l.enable(1),A.instancingColor&&l.enable(2),A.instancingMorph&&l.enable(3),A.matcap&&l.enable(4),A.envMap&&l.enable(5),A.normalMapObjectSpace&&l.enable(6),A.normalMapTangentSpace&&l.enable(7),A.clearcoat&&l.enable(8),A.iridescence&&l.enable(9),A.alphaTest&&l.enable(10),A.vertexColors&&l.enable(11),A.vertexAlphas&&l.enable(12),A.vertexUv1s&&l.enable(13),A.vertexUv2s&&l.enable(14),A.vertexUv3s&&l.enable(15),A.vertexTangents&&l.enable(16),A.anisotropy&&l.enable(17),A.alphaHash&&l.enable(18),A.batching&&l.enable(19),A.dispersion&&l.enable(20),A.batchingColor&&l.enable(21),T.push(l.mask),l.disableAll(),A.fog&&l.enable(0),A.useFog&&l.enable(1),A.flatShading&&l.enable(2),A.logarithmicDepthBuffer&&l.enable(3),A.reverseDepthBuffer&&l.enable(4),A.skinning&&l.enable(5),A.morphTargets&&l.enable(6),A.morphNormals&&l.enable(7),A.morphColors&&l.enable(8),A.premultipliedAlpha&&l.enable(9),A.shadowMapEnabled&&l.enable(10),A.doubleSided&&l.enable(11),A.flipSided&&l.enable(12),A.useDepthPacking&&l.enable(13),A.dithering&&l.enable(14),A.transmission&&l.enable(15),A.sheen&&l.enable(16),A.opaque&&l.enable(17),A.pointsUvs&&l.enable(18),A.decodeVideoTexture&&l.enable(19),A.decodeVideoTextureEmissive&&l.enable(20),A.alphaToCoverage&&l.enable(21),T.push(l.mask)}function w(T){const A=S[T.type];let U;if(A){const z=pr[A];U=ax.clone(z.uniforms)}else U=T.uniforms;return U}function C(T,A){let U;for(let z=0,H=h.length;z<H;z++){const q=h[z];if(q.cacheKey===A){U=q,++U.usedTimes;break}}return U===void 0&&(U=new Wb(r,A,T,a),h.push(U)),U}function N(T){if(--T.usedTimes===0){const A=h.indexOf(T);h[A]=h[h.length-1],h.pop(),T.destroy()}}function D(T){f.remove(T)}function P(){f.dispose()}return{getParameters:x,getProgramCacheKey:v,getUniforms:w,acquireProgram:C,releaseProgram:N,releaseShaderCache:D,programs:h,dispose:P}}function $b(){let r=new WeakMap;function e(c){return r.has(c)}function t(c){let l=r.get(c);return l===void 0&&(l={},r.set(c,l)),l}function n(c){r.delete(c)}function s(c,l,f){r.get(c)[l]=f}function a(){r=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:a}}function Zb(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Yv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function $v(){const r=[];let e=0;const t=[],n=[],s=[];function a(){e=0,t.length=0,n.length=0,s.length=0}function c(m,g,_,S,M,x){let v=r[e];return v===void 0?(v={id:m.id,object:m,geometry:g,material:_,groupOrder:S,renderOrder:m.renderOrder,z:M,group:x},r[e]=v):(v.id=m.id,v.object=m,v.geometry=g,v.material=_,v.groupOrder=S,v.renderOrder=m.renderOrder,v.z=M,v.group=x),e++,v}function l(m,g,_,S,M,x){const v=c(m,g,_,S,M,x);_.transmission>0?n.push(v):_.transparent===!0?s.push(v):t.push(v)}function f(m,g,_,S,M,x){const v=c(m,g,_,S,M,x);_.transmission>0?n.unshift(v):_.transparent===!0?s.unshift(v):t.unshift(v)}function d(m,g){t.length>1&&t.sort(m||Zb),n.length>1&&n.sort(g||Yv),s.length>1&&s.sort(g||Yv)}function h(){for(let m=e,g=r.length;m<g;m++){const _=r[m];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:a,push:l,unshift:f,finish:h,sort:d}}function Kb(){let r=new WeakMap;function e(n,s){const a=r.get(n);let c;return a===void 0?(c=new $v,r.set(n,[c])):s>=a.length?(c=new $v,a.push(c)):c=a[s],c}function t(){r=new WeakMap}return{get:e,dispose:t}}function Qb(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new se,color:new ht};break;case"SpotLight":t={position:new se,direction:new se,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new se,color:new ht,distance:0,decay:0};break;case"HemisphereLight":t={direction:new se,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":t={color:new ht,position:new se,halfWidth:new se,halfHeight:new se};break}return r[e.id]=t,t}}}function Jb(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let eR=0;function tR(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function nR(r){const e=new Qb,t=Jb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new se);const s=new se,a=new an,c=new an;function l(d){let h=0,m=0,g=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let _=0,S=0,M=0,x=0,v=0,R=0,b=0,w=0,C=0,N=0,D=0;d.sort(tR);for(let T=0,A=d.length;T<A;T++){const U=d[T],z=U.color,H=U.intensity,q=U.distance,ee=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=z.r*H,m+=z.g*H,g+=z.b*H;else if(U.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(U.sh.coefficients[j],H);D++}else if(U.isDirectionalLight){const j=e.get(U);if(j.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const Q=U.shadow,V=t.get(U);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,n.directionalShadow[_]=V,n.directionalShadowMap[_]=ee,n.directionalShadowMatrix[_]=U.shadow.matrix,R++}n.directional[_]=j,_++}else if(U.isSpotLight){const j=e.get(U);j.position.setFromMatrixPosition(U.matrixWorld),j.color.copy(z).multiplyScalar(H),j.distance=q,j.coneCos=Math.cos(U.angle),j.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),j.decay=U.decay,n.spot[M]=j;const Q=U.shadow;if(U.map&&(n.spotLightMap[C]=U.map,C++,Q.updateMatrices(U),U.castShadow&&N++),n.spotLightMatrix[M]=Q.matrix,U.castShadow){const V=t.get(U);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,n.spotShadow[M]=V,n.spotShadowMap[M]=ee,w++}M++}else if(U.isRectAreaLight){const j=e.get(U);j.color.copy(z).multiplyScalar(H),j.halfWidth.set(U.width*.5,0,0),j.halfHeight.set(0,U.height*.5,0),n.rectArea[x]=j,x++}else if(U.isPointLight){const j=e.get(U);if(j.color.copy(U.color).multiplyScalar(U.intensity),j.distance=U.distance,j.decay=U.decay,U.castShadow){const Q=U.shadow,V=t.get(U);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,V.shadowCameraNear=Q.camera.near,V.shadowCameraFar=Q.camera.far,n.pointShadow[S]=V,n.pointShadowMap[S]=ee,n.pointShadowMatrix[S]=U.shadow.matrix,b++}n.point[S]=j,S++}else if(U.isHemisphereLight){const j=e.get(U);j.skyColor.copy(U.color).multiplyScalar(H),j.groundColor.copy(U.groundColor).multiplyScalar(H),n.hemi[v]=j,v++}}x>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ne.LTC_FLOAT_1,n.rectAreaLTC2=Ne.LTC_FLOAT_2):(n.rectAreaLTC1=Ne.LTC_HALF_1,n.rectAreaLTC2=Ne.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=m,n.ambient[2]=g;const P=n.hash;(P.directionalLength!==_||P.pointLength!==S||P.spotLength!==M||P.rectAreaLength!==x||P.hemiLength!==v||P.numDirectionalShadows!==R||P.numPointShadows!==b||P.numSpotShadows!==w||P.numSpotMaps!==C||P.numLightProbes!==D)&&(n.directional.length=_,n.spot.length=M,n.rectArea.length=x,n.point.length=S,n.hemi.length=v,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=w+C-N,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=D,P.directionalLength=_,P.pointLength=S,P.spotLength=M,P.rectAreaLength=x,P.hemiLength=v,P.numDirectionalShadows=R,P.numPointShadows=b,P.numSpotShadows=w,P.numSpotMaps=C,P.numLightProbes=D,n.version=eR++)}function f(d,h){let m=0,g=0,_=0,S=0,M=0;const x=h.matrixWorldInverse;for(let v=0,R=d.length;v<R;v++){const b=d[v];if(b.isDirectionalLight){const w=n.directional[m];w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(x),m++}else if(b.isSpotLight){const w=n.spot[_];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(x),w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(x),_++}else if(b.isRectAreaLight){const w=n.rectArea[S];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(x),c.identity(),a.copy(b.matrixWorld),a.premultiply(x),c.extractRotation(a),w.halfWidth.set(b.width*.5,0,0),w.halfHeight.set(0,b.height*.5,0),w.halfWidth.applyMatrix4(c),w.halfHeight.applyMatrix4(c),S++}else if(b.isPointLight){const w=n.point[g];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(x),g++}else if(b.isHemisphereLight){const w=n.hemi[M];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(x),M++}}}return{setup:l,setupView:f,state:n}}function Zv(r){const e=new nR(r),t=[],n=[];function s(h){d.camera=h,t.length=0,n.length=0}function a(h){t.push(h)}function c(h){n.push(h)}function l(){e.setup(t)}function f(h){e.setupView(t,h)}const d={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:d,setupLights:l,setupLightsView:f,pushLight:a,pushShadow:c}}function iR(r){let e=new WeakMap;function t(s,a=0){const c=e.get(s);let l;return c===void 0?(l=new Zv(r),e.set(s,[l])):a>=c.length?(l=new Zv(r),c.push(l)):l=c[a],l}function n(){e=new WeakMap}return{get:t,dispose:n}}const rR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sR=`uniform sampler2D shadow_pass;
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
}`;function oR(r,e,t){let n=new fx;const s=new ft,a=new ft,c=new on,l=new Cw({depthPacking:TE}),f=new Aw,d={},h=t.maxTextureSize,m={[Hs]:fi,[fi]:Hs,[mr]:mr},g=new rr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:rR,fragmentShader:sR}),_=g.clone();_.defines.HORIZONTAL_PASS=1;const S=new vi;S.setAttribute("position",new yr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new ui(S,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oy;let v=this.type;this.render=function(N,D,P){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||N.length===0)return;const T=r.getRenderTarget(),A=r.getActiveCubeFace(),U=r.getActiveMipmapLevel(),z=r.state;z.setBlending(Zr),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const H=v!==Xr&&this.type===Xr,q=v===Xr&&this.type!==Xr;for(let ee=0,j=N.length;ee<j;ee++){const Q=N[ee],V=Q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const G=V.getFrameExtents();if(s.multiply(G),a.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/G.x),s.x=a.x*G.x,V.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/G.y),s.y=a.y*G.y,V.mapSize.y=a.y)),V.map===null||H===!0||q===!0){const O=this.type!==Xr?{minFilter:nr,magFilter:nr}:{};V.map!==null&&V.map.dispose(),V.map=new ir(s.x,s.y,O),V.map.texture.name=Q.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const Y=V.getViewportCount();for(let O=0;O<Y;O++){const Z=V.getViewport(O);c.set(a.x*Z.x,a.y*Z.y,a.x*Z.z,a.y*Z.w),z.viewport(c),V.updateMatrices(Q,O),n=V.getFrustum(),w(D,P,V.camera,Q,this.type)}V.isPointLightShadow!==!0&&this.type===Xr&&R(V,P),V.needsUpdate=!1}v=this.type,x.needsUpdate=!1,r.setRenderTarget(T,A,U)};function R(N,D){const P=e.update(M);g.defines.VSM_SAMPLES!==N.blurSamples&&(g.defines.VSM_SAMPLES=N.blurSamples,_.defines.VSM_SAMPLES=N.blurSamples,g.needsUpdate=!0,_.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new ir(s.x,s.y)),g.uniforms.shadow_pass.value=N.map.texture,g.uniforms.resolution.value=N.mapSize,g.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(D,null,P,g,M,null),_.uniforms.shadow_pass.value=N.mapPass.texture,_.uniforms.resolution.value=N.mapSize,_.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(D,null,P,_,M,null)}function b(N,D,P,T){let A=null;const U=P.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(U!==void 0)A=U;else if(A=P.isPointLight===!0?f:l,r.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const z=A.uuid,H=D.uuid;let q=d[z];q===void 0&&(q={},d[z]=q);let ee=q[H];ee===void 0&&(ee=A.clone(),q[H]=ee,D.addEventListener("dispose",C)),A=ee}if(A.visible=D.visible,A.wireframe=D.wireframe,T===Xr?A.side=D.shadowSide!==null?D.shadowSide:D.side:A.side=D.shadowSide!==null?D.shadowSide:m[D.side],A.alphaMap=D.alphaMap,A.alphaTest=D.alphaTest,A.map=D.map,A.clipShadows=D.clipShadows,A.clippingPlanes=D.clippingPlanes,A.clipIntersection=D.clipIntersection,A.displacementMap=D.displacementMap,A.displacementScale=D.displacementScale,A.displacementBias=D.displacementBias,A.wireframeLinewidth=D.wireframeLinewidth,A.linewidth=D.linewidth,P.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const z=r.properties.get(A);z.light=P}return A}function w(N,D,P,T,A){if(N.visible===!1)return;if(N.layers.test(D.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&A===Xr)&&(!N.frustumCulled||n.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,N.matrixWorld);const H=e.update(N),q=N.material;if(Array.isArray(q)){const ee=H.groups;for(let j=0,Q=ee.length;j<Q;j++){const V=ee[j],G=q[V.materialIndex];if(G&&G.visible){const Y=b(N,G,T,A);N.onBeforeShadow(r,N,D,P,H,Y,V),r.renderBufferDirect(P,null,H,Y,N,V),N.onAfterShadow(r,N,D,P,H,Y,V)}}}else if(q.visible){const ee=b(N,q,T,A);N.onBeforeShadow(r,N,D,P,H,ee,null),r.renderBufferDirect(P,null,H,ee,N,null),N.onAfterShadow(r,N,D,P,H,ee,null)}}const z=N.children;for(let H=0,q=z.length;H<q;H++)w(z[H],D,P,T,A)}function C(N){N.target.removeEventListener("dispose",C);for(const P in d){const T=d[P],A=N.target.uuid;A in T&&(T[A].dispose(),delete T[A])}}}const aR={[gp]:_p,[vp]:Sp,[yp]:Mp,[za]:xp,[_p]:gp,[Sp]:vp,[Mp]:yp,[xp]:za};function lR(r,e){function t(){let K=!1;const Pe=new on;let de=null;const pe=new on(0,0,0,0);return{setMask:function(Le){de!==Le&&!K&&(r.colorMask(Le,Le,Le,Le),de=Le)},setLocked:function(Le){K=Le},setClear:function(Le,Ie,ot,kt,hn){hn===!0&&(Le*=kt,Ie*=kt,ot*=kt),Pe.set(Le,Ie,ot,kt),pe.equals(Pe)===!1&&(r.clearColor(Le,Ie,ot,kt),pe.copy(Pe))},reset:function(){K=!1,de=null,pe.set(-1,0,0,0)}}}function n(){let K=!1,Pe=!1,de=null,pe=null,Le=null;return{setReversed:function(Ie){if(Pe!==Ie){const ot=e.get("EXT_clip_control");Pe?ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.ZERO_TO_ONE_EXT):ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.NEGATIVE_ONE_TO_ONE_EXT);const kt=Le;Le=null,this.setClear(kt)}Pe=Ie},getReversed:function(){return Pe},setTest:function(Ie){Ie?ge(r.DEPTH_TEST):fe(r.DEPTH_TEST)},setMask:function(Ie){de!==Ie&&!K&&(r.depthMask(Ie),de=Ie)},setFunc:function(Ie){if(Pe&&(Ie=aR[Ie]),pe!==Ie){switch(Ie){case gp:r.depthFunc(r.NEVER);break;case _p:r.depthFunc(r.ALWAYS);break;case vp:r.depthFunc(r.LESS);break;case za:r.depthFunc(r.LEQUAL);break;case yp:r.depthFunc(r.EQUAL);break;case xp:r.depthFunc(r.GEQUAL);break;case Sp:r.depthFunc(r.GREATER);break;case Mp:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}pe=Ie}},setLocked:function(Ie){K=Ie},setClear:function(Ie){Le!==Ie&&(Pe&&(Ie=1-Ie),r.clearDepth(Ie),Le=Ie)},reset:function(){K=!1,de=null,pe=null,Le=null,Pe=!1}}}function s(){let K=!1,Pe=null,de=null,pe=null,Le=null,Ie=null,ot=null,kt=null,hn=null;return{setTest:function(wt){K||(wt?ge(r.STENCIL_TEST):fe(r.STENCIL_TEST))},setMask:function(wt){Pe!==wt&&!K&&(r.stencilMask(wt),Pe=wt)},setFunc:function(wt,ni,Yn){(de!==wt||pe!==ni||Le!==Yn)&&(r.stencilFunc(wt,ni,Yn),de=wt,pe=ni,Le=Yn)},setOp:function(wt,ni,Yn){(Ie!==wt||ot!==ni||kt!==Yn)&&(r.stencilOp(wt,ni,Yn),Ie=wt,ot=ni,kt=Yn)},setLocked:function(wt){K=wt},setClear:function(wt){hn!==wt&&(r.clearStencil(wt),hn=wt)},reset:function(){K=!1,Pe=null,de=null,pe=null,Le=null,Ie=null,ot=null,kt=null,hn=null}}}const a=new t,c=new n,l=new s,f=new WeakMap,d=new WeakMap;let h={},m={},g=new WeakMap,_=[],S=null,M=!1,x=null,v=null,R=null,b=null,w=null,C=null,N=null,D=new ht(0,0,0),P=0,T=!1,A=null,U=null,z=null,H=null,q=null;const ee=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,Q=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(V)[1]),j=Q>=1):V.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),j=Q>=2);let G=null,Y={};const O=r.getParameter(r.SCISSOR_BOX),Z=r.getParameter(r.VIEWPORT),Ae=new on().fromArray(O),ne=new on().fromArray(Z);function ae(K,Pe,de,pe){const Le=new Uint8Array(4),Ie=r.createTexture();r.bindTexture(K,Ie),r.texParameteri(K,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(K,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ot=0;ot<de;ot++)K===r.TEXTURE_3D||K===r.TEXTURE_2D_ARRAY?r.texImage3D(Pe,0,r.RGBA,1,1,pe,0,r.RGBA,r.UNSIGNED_BYTE,Le):r.texImage2D(Pe+ot,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Le);return Ie}const Se={};Se[r.TEXTURE_2D]=ae(r.TEXTURE_2D,r.TEXTURE_2D,1),Se[r.TEXTURE_CUBE_MAP]=ae(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[r.TEXTURE_2D_ARRAY]=ae(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Se[r.TEXTURE_3D]=ae(r.TEXTURE_3D,r.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ge(r.DEPTH_TEST),c.setFunc(za),_t(!1),pt($0),ge(r.CULL_FACE),X(Zr);function ge(K){h[K]!==!0&&(r.enable(K),h[K]=!0)}function fe(K){h[K]!==!1&&(r.disable(K),h[K]=!1)}function be(K,Pe){return m[K]!==Pe?(r.bindFramebuffer(K,Pe),m[K]=Pe,K===r.DRAW_FRAMEBUFFER&&(m[r.FRAMEBUFFER]=Pe),K===r.FRAMEBUFFER&&(m[r.DRAW_FRAMEBUFFER]=Pe),!0):!1}function Ye(K,Pe){let de=_,pe=!1;if(K){de=g.get(Pe),de===void 0&&(de=[],g.set(Pe,de));const Le=K.textures;if(de.length!==Le.length||de[0]!==r.COLOR_ATTACHMENT0){for(let Ie=0,ot=Le.length;Ie<ot;Ie++)de[Ie]=r.COLOR_ATTACHMENT0+Ie;de.length=Le.length,pe=!0}}else de[0]!==r.BACK&&(de[0]=r.BACK,pe=!0);pe&&r.drawBuffers(de)}function xt(K){return S!==K?(r.useProgram(K),S=K,!0):!1}const ct={[Eo]:r.FUNC_ADD,[K1]:r.FUNC_SUBTRACT,[Q1]:r.FUNC_REVERSE_SUBTRACT};ct[J1]=r.MIN,ct[eE]=r.MAX;const Ut={[tE]:r.ZERO,[nE]:r.ONE,[iE]:r.SRC_COLOR,[pp]:r.SRC_ALPHA,[cE]:r.SRC_ALPHA_SATURATE,[aE]:r.DST_COLOR,[sE]:r.DST_ALPHA,[rE]:r.ONE_MINUS_SRC_COLOR,[mp]:r.ONE_MINUS_SRC_ALPHA,[lE]:r.ONE_MINUS_DST_COLOR,[oE]:r.ONE_MINUS_DST_ALPHA,[uE]:r.CONSTANT_COLOR,[fE]:r.ONE_MINUS_CONSTANT_COLOR,[dE]:r.CONSTANT_ALPHA,[hE]:r.ONE_MINUS_CONSTANT_ALPHA};function X(K,Pe,de,pe,Le,Ie,ot,kt,hn,wt){if(K===Zr){M===!0&&(fe(r.BLEND),M=!1);return}if(M===!1&&(ge(r.BLEND),M=!0),K!==Z1){if(K!==x||wt!==T){if((v!==Eo||w!==Eo)&&(r.blendEquation(r.FUNC_ADD),v=Eo,w=Eo),wt)switch(K){case Ia:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Z0:r.blendFunc(r.ONE,r.ONE);break;case K0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Q0:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}else switch(K){case Ia:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Z0:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case K0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Q0:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}R=null,b=null,C=null,N=null,D.set(0,0,0),P=0,x=K,T=wt}return}Le=Le||Pe,Ie=Ie||de,ot=ot||pe,(Pe!==v||Le!==w)&&(r.blendEquationSeparate(ct[Pe],ct[Le]),v=Pe,w=Le),(de!==R||pe!==b||Ie!==C||ot!==N)&&(r.blendFuncSeparate(Ut[de],Ut[pe],Ut[Ie],Ut[ot]),R=de,b=pe,C=Ie,N=ot),(kt.equals(D)===!1||hn!==P)&&(r.blendColor(kt.r,kt.g,kt.b,hn),D.copy(kt),P=hn),x=K,T=!1}function jn(K,Pe){K.side===mr?fe(r.CULL_FACE):ge(r.CULL_FACE);let de=K.side===fi;Pe&&(de=!de),_t(de),K.blending===Ia&&K.transparent===!1?X(Zr):X(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),c.setFunc(K.depthFunc),c.setTest(K.depthTest),c.setMask(K.depthWrite),a.setMask(K.colorWrite);const pe=K.stencilWrite;l.setTest(pe),pe&&(l.setMask(K.stencilWriteMask),l.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),l.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),Nt(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?ge(r.SAMPLE_ALPHA_TO_COVERAGE):fe(r.SAMPLE_ALPHA_TO_COVERAGE)}function _t(K){A!==K&&(K?r.frontFace(r.CW):r.frontFace(r.CCW),A=K)}function pt(K){K!==j1?(ge(r.CULL_FACE),K!==U&&(K===$0?r.cullFace(r.BACK):K===Y1?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):fe(r.CULL_FACE),U=K}function Ze(K){K!==z&&(j&&r.lineWidth(K),z=K)}function Nt(K,Pe,de){K?(ge(r.POLYGON_OFFSET_FILL),(H!==Pe||q!==de)&&(r.polygonOffset(Pe,de),H=Pe,q=de)):fe(r.POLYGON_OFFSET_FILL)}function Xe(K){K?ge(r.SCISSOR_TEST):fe(r.SCISSOR_TEST)}function k(K){K===void 0&&(K=r.TEXTURE0+ee-1),G!==K&&(r.activeTexture(K),G=K)}function L(K,Pe,de){de===void 0&&(G===null?de=r.TEXTURE0+ee-1:de=G);let pe=Y[de];pe===void 0&&(pe={type:void 0,texture:void 0},Y[de]=pe),(pe.type!==K||pe.texture!==Pe)&&(G!==de&&(r.activeTexture(de),G=de),r.bindTexture(K,Pe||Se[K]),pe.type=K,pe.texture=Pe)}function le(){const K=Y[G];K!==void 0&&K.type!==void 0&&(r.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function me(){try{r.compressedTexImage2D.apply(r,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ye(){try{r.compressedTexImage3D.apply(r,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function he(){try{r.texSubImage2D.apply(r,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function qe(){try{r.texSubImage3D.apply(r,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Re(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Oe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function dt(){try{r.texStorage2D.apply(r,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function we(){try{r.texStorage3D.apply(r,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ze(){try{r.texImage2D.apply(r,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Qe(){try{r.texImage3D.apply(r,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function nt(K){Ae.equals(K)===!1&&(r.scissor(K.x,K.y,K.z,K.w),Ae.copy(K))}function Be(K){ne.equals(K)===!1&&(r.viewport(K.x,K.y,K.z,K.w),ne.copy(K))}function mt(K,Pe){let de=d.get(Pe);de===void 0&&(de=new WeakMap,d.set(Pe,de));let pe=de.get(K);pe===void 0&&(pe=r.getUniformBlockIndex(Pe,K.name),de.set(K,pe))}function st(K,Pe){const pe=d.get(Pe).get(K);f.get(Pe)!==pe&&(r.uniformBlockBinding(Pe,pe,K.__bindingPointIndex),f.set(Pe,pe))}function Pt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},G=null,Y={},m={},g=new WeakMap,_=[],S=null,M=!1,x=null,v=null,R=null,b=null,w=null,C=null,N=null,D=new ht(0,0,0),P=0,T=!1,A=null,U=null,z=null,H=null,q=null,Ae.set(0,0,r.canvas.width,r.canvas.height),ne.set(0,0,r.canvas.width,r.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:ge,disable:fe,bindFramebuffer:be,drawBuffers:Ye,useProgram:xt,setBlending:X,setMaterial:jn,setFlipSided:_t,setCullFace:pt,setLineWidth:Ze,setPolygonOffset:Nt,setScissorTest:Xe,activeTexture:k,bindTexture:L,unbindTexture:le,compressedTexImage2D:me,compressedTexImage3D:ye,texImage2D:ze,texImage3D:Qe,updateUBOMapping:mt,uniformBlockBinding:st,texStorage2D:dt,texStorage3D:we,texSubImage2D:he,texSubImage3D:qe,compressedTexSubImage2D:Re,compressedTexSubImage3D:Oe,scissor:nt,viewport:Be,reset:Pt}}function cR(r,e,t,n,s,a,c){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new ft,h=new WeakMap;let m;const g=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(k,L){return _?new OffscreenCanvas(k,L):vf("canvas")}function M(k,L,le){let me=1;const ye=Xe(k);if((ye.width>le||ye.height>le)&&(me=le/Math.max(ye.width,ye.height)),me<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){const he=Math.floor(me*ye.width),qe=Math.floor(me*ye.height);m===void 0&&(m=S(he,qe));const Re=L?S(he,qe):m;return Re.width=he,Re.height=qe,Re.getContext("2d").drawImage(k,0,0,he,qe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+he+"x"+qe+")."),Re}else return"data"in k&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),k;return k}function x(k){return k.generateMipmaps}function v(k){r.generateMipmap(k)}function R(k){return k.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?r.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function b(k,L,le,me,ye=!1){if(k!==null){if(r[k]!==void 0)return r[k];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let he=L;if(L===r.RED&&(le===r.FLOAT&&(he=r.R32F),le===r.HALF_FLOAT&&(he=r.R16F),le===r.UNSIGNED_BYTE&&(he=r.R8)),L===r.RED_INTEGER&&(le===r.UNSIGNED_BYTE&&(he=r.R8UI),le===r.UNSIGNED_SHORT&&(he=r.R16UI),le===r.UNSIGNED_INT&&(he=r.R32UI),le===r.BYTE&&(he=r.R8I),le===r.SHORT&&(he=r.R16I),le===r.INT&&(he=r.R32I)),L===r.RG&&(le===r.FLOAT&&(he=r.RG32F),le===r.HALF_FLOAT&&(he=r.RG16F),le===r.UNSIGNED_BYTE&&(he=r.RG8)),L===r.RG_INTEGER&&(le===r.UNSIGNED_BYTE&&(he=r.RG8UI),le===r.UNSIGNED_SHORT&&(he=r.RG16UI),le===r.UNSIGNED_INT&&(he=r.RG32UI),le===r.BYTE&&(he=r.RG8I),le===r.SHORT&&(he=r.RG16I),le===r.INT&&(he=r.RG32I)),L===r.RGB_INTEGER&&(le===r.UNSIGNED_BYTE&&(he=r.RGB8UI),le===r.UNSIGNED_SHORT&&(he=r.RGB16UI),le===r.UNSIGNED_INT&&(he=r.RGB32UI),le===r.BYTE&&(he=r.RGB8I),le===r.SHORT&&(he=r.RGB16I),le===r.INT&&(he=r.RGB32I)),L===r.RGBA_INTEGER&&(le===r.UNSIGNED_BYTE&&(he=r.RGBA8UI),le===r.UNSIGNED_SHORT&&(he=r.RGBA16UI),le===r.UNSIGNED_INT&&(he=r.RGBA32UI),le===r.BYTE&&(he=r.RGBA8I),le===r.SHORT&&(he=r.RGBA16I),le===r.INT&&(he=r.RGBA32I)),L===r.RGB&&le===r.UNSIGNED_INT_5_9_9_9_REV&&(he=r.RGB9_E5),L===r.RGBA){const qe=ye?gf:bt.getTransfer(me);le===r.FLOAT&&(he=r.RGBA32F),le===r.HALF_FLOAT&&(he=r.RGBA16F),le===r.UNSIGNED_BYTE&&(he=qe===It?r.SRGB8_ALPHA8:r.RGBA8),le===r.UNSIGNED_SHORT_4_4_4_4&&(he=r.RGBA4),le===r.UNSIGNED_SHORT_5_5_5_1&&(he=r.RGB5_A1)}return(he===r.R16F||he===r.R32F||he===r.RG16F||he===r.RG32F||he===r.RGBA16F||he===r.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function w(k,L){let le;return k?L===null||L===No||L===Ha?le=r.DEPTH24_STENCIL8:L===_r?le=r.DEPTH32F_STENCIL8:L===ic&&(le=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):L===null||L===No||L===Ha?le=r.DEPTH_COMPONENT24:L===_r?le=r.DEPTH_COMPONENT32F:L===ic&&(le=r.DEPTH_COMPONENT16),le}function C(k,L){return x(k)===!0||k.isFramebufferTexture&&k.minFilter!==nr&&k.minFilter!==Tn?Math.log2(Math.max(L.width,L.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?L.mipmaps.length:1}function N(k){const L=k.target;L.removeEventListener("dispose",N),P(L),L.isVideoTexture&&h.delete(L)}function D(k){const L=k.target;L.removeEventListener("dispose",D),A(L)}function P(k){const L=n.get(k);if(L.__webglInit===void 0)return;const le=k.source,me=g.get(le);if(me){const ye=me[L.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&T(k),Object.keys(me).length===0&&g.delete(le)}n.remove(k)}function T(k){const L=n.get(k);r.deleteTexture(L.__webglTexture);const le=k.source,me=g.get(le);delete me[L.__cacheKey],c.memory.textures--}function A(k){const L=n.get(k);if(k.depthTexture&&(k.depthTexture.dispose(),n.remove(k.depthTexture)),k.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(L.__webglFramebuffer[me]))for(let ye=0;ye<L.__webglFramebuffer[me].length;ye++)r.deleteFramebuffer(L.__webglFramebuffer[me][ye]);else r.deleteFramebuffer(L.__webglFramebuffer[me]);L.__webglDepthbuffer&&r.deleteRenderbuffer(L.__webglDepthbuffer[me])}else{if(Array.isArray(L.__webglFramebuffer))for(let me=0;me<L.__webglFramebuffer.length;me++)r.deleteFramebuffer(L.__webglFramebuffer[me]);else r.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer&&r.deleteRenderbuffer(L.__webglDepthbuffer),L.__webglMultisampledFramebuffer&&r.deleteFramebuffer(L.__webglMultisampledFramebuffer),L.__webglColorRenderbuffer)for(let me=0;me<L.__webglColorRenderbuffer.length;me++)L.__webglColorRenderbuffer[me]&&r.deleteRenderbuffer(L.__webglColorRenderbuffer[me]);L.__webglDepthRenderbuffer&&r.deleteRenderbuffer(L.__webglDepthRenderbuffer)}const le=k.textures;for(let me=0,ye=le.length;me<ye;me++){const he=n.get(le[me]);he.__webglTexture&&(r.deleteTexture(he.__webglTexture),c.memory.textures--),n.remove(le[me])}n.remove(k)}let U=0;function z(){U=0}function H(){const k=U;return k>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+k+" texture units while this GPU supports only "+s.maxTextures),U+=1,k}function q(k){const L=[];return L.push(k.wrapS),L.push(k.wrapT),L.push(k.wrapR||0),L.push(k.magFilter),L.push(k.minFilter),L.push(k.anisotropy),L.push(k.internalFormat),L.push(k.format),L.push(k.type),L.push(k.generateMipmaps),L.push(k.premultiplyAlpha),L.push(k.flipY),L.push(k.unpackAlignment),L.push(k.colorSpace),L.join()}function ee(k,L){const le=n.get(k);if(k.isVideoTexture&&Ze(k),k.isRenderTargetTexture===!1&&k.version>0&&le.__version!==k.version){const me=k.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(le,k,L);return}}t.bindTexture(r.TEXTURE_2D,le.__webglTexture,r.TEXTURE0+L)}function j(k,L){const le=n.get(k);if(k.version>0&&le.__version!==k.version){ne(le,k,L);return}t.bindTexture(r.TEXTURE_2D_ARRAY,le.__webglTexture,r.TEXTURE0+L)}function Q(k,L){const le=n.get(k);if(k.version>0&&le.__version!==k.version){ne(le,k,L);return}t.bindTexture(r.TEXTURE_3D,le.__webglTexture,r.TEXTURE0+L)}function V(k,L){const le=n.get(k);if(k.version>0&&le.__version!==k.version){ae(le,k,L);return}t.bindTexture(r.TEXTURE_CUBE_MAP,le.__webglTexture,r.TEXTURE0+L)}const G={[Tp]:r.REPEAT,[To]:r.CLAMP_TO_EDGE,[Cp]:r.MIRRORED_REPEAT},Y={[nr]:r.NEAREST,[EE]:r.NEAREST_MIPMAP_NEAREST,[Nu]:r.NEAREST_MIPMAP_LINEAR,[Tn]:r.LINEAR,[Ph]:r.LINEAR_MIPMAP_NEAREST,[Co]:r.LINEAR_MIPMAP_LINEAR},O={[AE]:r.NEVER,[IE]:r.ALWAYS,[bE]:r.LESS,[Ky]:r.LEQUAL,[RE]:r.EQUAL,[NE]:r.GEQUAL,[PE]:r.GREATER,[DE]:r.NOTEQUAL};function Z(k,L){if(L.type===_r&&e.has("OES_texture_float_linear")===!1&&(L.magFilter===Tn||L.magFilter===Ph||L.magFilter===Nu||L.magFilter===Co||L.minFilter===Tn||L.minFilter===Ph||L.minFilter===Nu||L.minFilter===Co)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(k,r.TEXTURE_WRAP_S,G[L.wrapS]),r.texParameteri(k,r.TEXTURE_WRAP_T,G[L.wrapT]),(k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY)&&r.texParameteri(k,r.TEXTURE_WRAP_R,G[L.wrapR]),r.texParameteri(k,r.TEXTURE_MAG_FILTER,Y[L.magFilter]),r.texParameteri(k,r.TEXTURE_MIN_FILTER,Y[L.minFilter]),L.compareFunction&&(r.texParameteri(k,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(k,r.TEXTURE_COMPARE_FUNC,O[L.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(L.magFilter===nr||L.minFilter!==Nu&&L.minFilter!==Co||L.type===_r&&e.has("OES_texture_float_linear")===!1)return;if(L.anisotropy>1||n.get(L).__currentAnisotropy){const le=e.get("EXT_texture_filter_anisotropic");r.texParameterf(k,le.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,s.getMaxAnisotropy())),n.get(L).__currentAnisotropy=L.anisotropy}}}function Ae(k,L){let le=!1;k.__webglInit===void 0&&(k.__webglInit=!0,L.addEventListener("dispose",N));const me=L.source;let ye=g.get(me);ye===void 0&&(ye={},g.set(me,ye));const he=q(L);if(he!==k.__cacheKey){ye[he]===void 0&&(ye[he]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,le=!0),ye[he].usedTimes++;const qe=ye[k.__cacheKey];qe!==void 0&&(ye[k.__cacheKey].usedTimes--,qe.usedTimes===0&&T(L)),k.__cacheKey=he,k.__webglTexture=ye[he].texture}return le}function ne(k,L,le){let me=r.TEXTURE_2D;(L.isDataArrayTexture||L.isCompressedArrayTexture)&&(me=r.TEXTURE_2D_ARRAY),L.isData3DTexture&&(me=r.TEXTURE_3D);const ye=Ae(k,L),he=L.source;t.bindTexture(me,k.__webglTexture,r.TEXTURE0+le);const qe=n.get(he);if(he.version!==qe.__version||ye===!0){t.activeTexture(r.TEXTURE0+le);const Re=bt.getPrimaries(bt.workingColorSpace),Oe=L.colorSpace===Fs?null:bt.getPrimaries(L.colorSpace),dt=L.colorSpace===Fs||Re===Oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,L.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,L.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let we=M(L.image,!1,s.maxTextureSize);we=Nt(L,we);const ze=a.convert(L.format,L.colorSpace),Qe=a.convert(L.type);let nt=b(L.internalFormat,ze,Qe,L.colorSpace,L.isVideoTexture);Z(me,L);let Be;const mt=L.mipmaps,st=L.isVideoTexture!==!0,Pt=qe.__version===void 0||ye===!0,K=he.dataReady,Pe=C(L,we);if(L.isDepthTexture)nt=w(L.format===Ga,L.type),Pt&&(st?t.texStorage2D(r.TEXTURE_2D,1,nt,we.width,we.height):t.texImage2D(r.TEXTURE_2D,0,nt,we.width,we.height,0,ze,Qe,null));else if(L.isDataTexture)if(mt.length>0){st&&Pt&&t.texStorage2D(r.TEXTURE_2D,Pe,nt,mt[0].width,mt[0].height);for(let de=0,pe=mt.length;de<pe;de++)Be=mt[de],st?K&&t.texSubImage2D(r.TEXTURE_2D,de,0,0,Be.width,Be.height,ze,Qe,Be.data):t.texImage2D(r.TEXTURE_2D,de,nt,Be.width,Be.height,0,ze,Qe,Be.data);L.generateMipmaps=!1}else st?(Pt&&t.texStorage2D(r.TEXTURE_2D,Pe,nt,we.width,we.height),K&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,we.width,we.height,ze,Qe,we.data)):t.texImage2D(r.TEXTURE_2D,0,nt,we.width,we.height,0,ze,Qe,we.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){st&&Pt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Pe,nt,mt[0].width,mt[0].height,we.depth);for(let de=0,pe=mt.length;de<pe;de++)if(Be=mt[de],L.format!==Ai)if(ze!==null)if(st){if(K)if(L.layerUpdates.size>0){const Le=Cv(Be.width,Be.height,L.format,L.type);for(const Ie of L.layerUpdates){const ot=Be.data.subarray(Ie*Le/Be.data.BYTES_PER_ELEMENT,(Ie+1)*Le/Be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,de,0,0,Ie,Be.width,Be.height,1,ze,ot)}L.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,de,0,0,0,Be.width,Be.height,we.depth,ze,Be.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,de,nt,Be.width,Be.height,we.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?K&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,de,0,0,0,Be.width,Be.height,we.depth,ze,Qe,Be.data):t.texImage3D(r.TEXTURE_2D_ARRAY,de,nt,Be.width,Be.height,we.depth,0,ze,Qe,Be.data)}else{st&&Pt&&t.texStorage2D(r.TEXTURE_2D,Pe,nt,mt[0].width,mt[0].height);for(let de=0,pe=mt.length;de<pe;de++)Be=mt[de],L.format!==Ai?ze!==null?st?K&&t.compressedTexSubImage2D(r.TEXTURE_2D,de,0,0,Be.width,Be.height,ze,Be.data):t.compressedTexImage2D(r.TEXTURE_2D,de,nt,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?K&&t.texSubImage2D(r.TEXTURE_2D,de,0,0,Be.width,Be.height,ze,Qe,Be.data):t.texImage2D(r.TEXTURE_2D,de,nt,Be.width,Be.height,0,ze,Qe,Be.data)}else if(L.isDataArrayTexture)if(st){if(Pt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Pe,nt,we.width,we.height,we.depth),K)if(L.layerUpdates.size>0){const de=Cv(we.width,we.height,L.format,L.type);for(const pe of L.layerUpdates){const Le=we.data.subarray(pe*de/we.data.BYTES_PER_ELEMENT,(pe+1)*de/we.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,pe,we.width,we.height,1,ze,Qe,Le)}L.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,ze,Qe,we.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,nt,we.width,we.height,we.depth,0,ze,Qe,we.data);else if(L.isData3DTexture)st?(Pt&&t.texStorage3D(r.TEXTURE_3D,Pe,nt,we.width,we.height,we.depth),K&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,ze,Qe,we.data)):t.texImage3D(r.TEXTURE_3D,0,nt,we.width,we.height,we.depth,0,ze,Qe,we.data);else if(L.isFramebufferTexture){if(Pt)if(st)t.texStorage2D(r.TEXTURE_2D,Pe,nt,we.width,we.height);else{let de=we.width,pe=we.height;for(let Le=0;Le<Pe;Le++)t.texImage2D(r.TEXTURE_2D,Le,nt,de,pe,0,ze,Qe,null),de>>=1,pe>>=1}}else if(mt.length>0){if(st&&Pt){const de=Xe(mt[0]);t.texStorage2D(r.TEXTURE_2D,Pe,nt,de.width,de.height)}for(let de=0,pe=mt.length;de<pe;de++)Be=mt[de],st?K&&t.texSubImage2D(r.TEXTURE_2D,de,0,0,ze,Qe,Be):t.texImage2D(r.TEXTURE_2D,de,nt,ze,Qe,Be);L.generateMipmaps=!1}else if(st){if(Pt){const de=Xe(we);t.texStorage2D(r.TEXTURE_2D,Pe,nt,de.width,de.height)}K&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ze,Qe,we)}else t.texImage2D(r.TEXTURE_2D,0,nt,ze,Qe,we);x(L)&&v(me),qe.__version=he.version,L.onUpdate&&L.onUpdate(L)}k.__version=L.version}function ae(k,L,le){if(L.image.length!==6)return;const me=Ae(k,L),ye=L.source;t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+le);const he=n.get(ye);if(ye.version!==he.__version||me===!0){t.activeTexture(r.TEXTURE0+le);const qe=bt.getPrimaries(bt.workingColorSpace),Re=L.colorSpace===Fs?null:bt.getPrimaries(L.colorSpace),Oe=L.colorSpace===Fs||qe===Re?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,L.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,L.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const dt=L.isCompressedTexture||L.image[0].isCompressedTexture,we=L.image[0]&&L.image[0].isDataTexture,ze=[];for(let pe=0;pe<6;pe++)!dt&&!we?ze[pe]=M(L.image[pe],!0,s.maxCubemapSize):ze[pe]=we?L.image[pe].image:L.image[pe],ze[pe]=Nt(L,ze[pe]);const Qe=ze[0],nt=a.convert(L.format,L.colorSpace),Be=a.convert(L.type),mt=b(L.internalFormat,nt,Be,L.colorSpace),st=L.isVideoTexture!==!0,Pt=he.__version===void 0||me===!0,K=ye.dataReady;let Pe=C(L,Qe);Z(r.TEXTURE_CUBE_MAP,L);let de;if(dt){st&&Pt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Pe,mt,Qe.width,Qe.height);for(let pe=0;pe<6;pe++){de=ze[pe].mipmaps;for(let Le=0;Le<de.length;Le++){const Ie=de[Le];L.format!==Ai?nt!==null?st?K&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,0,0,Ie.width,Ie.height,nt,Ie.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,mt,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?K&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,0,0,Ie.width,Ie.height,nt,Be,Ie.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,mt,Ie.width,Ie.height,0,nt,Be,Ie.data)}}}else{if(de=L.mipmaps,st&&Pt){de.length>0&&Pe++;const pe=Xe(ze[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Pe,mt,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(we){st?K&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ze[pe].width,ze[pe].height,nt,Be,ze[pe].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,mt,ze[pe].width,ze[pe].height,0,nt,Be,ze[pe].data);for(let Le=0;Le<de.length;Le++){const ot=de[Le].image[pe].image;st?K&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,0,0,ot.width,ot.height,nt,Be,ot.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,mt,ot.width,ot.height,0,nt,Be,ot.data)}}else{st?K&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,nt,Be,ze[pe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,mt,nt,Be,ze[pe]);for(let Le=0;Le<de.length;Le++){const Ie=de[Le];st?K&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,0,0,nt,Be,Ie.image[pe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,mt,nt,Be,Ie.image[pe])}}}x(L)&&v(r.TEXTURE_CUBE_MAP),he.__version=ye.version,L.onUpdate&&L.onUpdate(L)}k.__version=L.version}function Se(k,L,le,me,ye,he){const qe=a.convert(le.format,le.colorSpace),Re=a.convert(le.type),Oe=b(le.internalFormat,qe,Re,le.colorSpace),dt=n.get(L),we=n.get(le);if(we.__renderTarget=L,!dt.__hasExternalTextures){const ze=Math.max(1,L.width>>he),Qe=Math.max(1,L.height>>he);ye===r.TEXTURE_3D||ye===r.TEXTURE_2D_ARRAY?t.texImage3D(ye,he,Oe,ze,Qe,L.depth,0,qe,Re,null):t.texImage2D(ye,he,Oe,ze,Qe,0,qe,Re,null)}t.bindFramebuffer(r.FRAMEBUFFER,k),pt(L)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,ye,we.__webglTexture,0,_t(L)):(ye===r.TEXTURE_2D||ye>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,me,ye,we.__webglTexture,he),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ge(k,L,le){if(r.bindRenderbuffer(r.RENDERBUFFER,k),L.depthBuffer){const me=L.depthTexture,ye=me&&me.isDepthTexture?me.type:null,he=w(L.stencilBuffer,ye),qe=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Re=_t(L);pt(L)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Re,he,L.width,L.height):le?r.renderbufferStorageMultisample(r.RENDERBUFFER,Re,he,L.width,L.height):r.renderbufferStorage(r.RENDERBUFFER,he,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,qe,r.RENDERBUFFER,k)}else{const me=L.textures;for(let ye=0;ye<me.length;ye++){const he=me[ye],qe=a.convert(he.format,he.colorSpace),Re=a.convert(he.type),Oe=b(he.internalFormat,qe,Re,he.colorSpace),dt=_t(L);le&&pt(L)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,dt,Oe,L.width,L.height):pt(L)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,dt,Oe,L.width,L.height):r.renderbufferStorage(r.RENDERBUFFER,Oe,L.width,L.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function fe(k,L){if(L&&L.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,k),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=n.get(L.depthTexture);me.__renderTarget=L,(!me.__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)&&(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),ee(L.depthTexture,0);const ye=me.__webglTexture,he=_t(L);if(L.depthTexture.format===La)pt(L)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ye,0,he):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ye,0);else if(L.depthTexture.format===Ga)pt(L)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ye,0,he):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function be(k){const L=n.get(k),le=k.isWebGLCubeRenderTarget===!0;if(L.__boundDepthTexture!==k.depthTexture){const me=k.depthTexture;if(L.__depthDisposeCallback&&L.__depthDisposeCallback(),me){const ye=()=>{delete L.__boundDepthTexture,delete L.__depthDisposeCallback,me.removeEventListener("dispose",ye)};me.addEventListener("dispose",ye),L.__depthDisposeCallback=ye}L.__boundDepthTexture=me}if(k.depthTexture&&!L.__autoAllocateDepthBuffer){if(le)throw new Error("target.depthTexture not supported in Cube render targets");fe(L.__webglFramebuffer,k)}else if(le){L.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(r.FRAMEBUFFER,L.__webglFramebuffer[me]),L.__webglDepthbuffer[me]===void 0)L.__webglDepthbuffer[me]=r.createRenderbuffer(),ge(L.__webglDepthbuffer[me],k,!1);else{const ye=k.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=L.__webglDepthbuffer[me];r.bindRenderbuffer(r.RENDERBUFFER,he),r.framebufferRenderbuffer(r.FRAMEBUFFER,ye,r.RENDERBUFFER,he)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,L.__webglFramebuffer),L.__webglDepthbuffer===void 0)L.__webglDepthbuffer=r.createRenderbuffer(),ge(L.__webglDepthbuffer,k,!1);else{const me=k.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ye=L.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ye),r.framebufferRenderbuffer(r.FRAMEBUFFER,me,r.RENDERBUFFER,ye)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ye(k,L,le){const me=n.get(k);L!==void 0&&Se(me.__webglFramebuffer,k,k.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),le!==void 0&&be(k)}function xt(k){const L=k.texture,le=n.get(k),me=n.get(L);k.addEventListener("dispose",D);const ye=k.textures,he=k.isWebGLCubeRenderTarget===!0,qe=ye.length>1;if(qe||(me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture()),me.__version=L.version,c.memory.textures++),he){le.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(L.mipmaps&&L.mipmaps.length>0){le.__webglFramebuffer[Re]=[];for(let Oe=0;Oe<L.mipmaps.length;Oe++)le.__webglFramebuffer[Re][Oe]=r.createFramebuffer()}else le.__webglFramebuffer[Re]=r.createFramebuffer()}else{if(L.mipmaps&&L.mipmaps.length>0){le.__webglFramebuffer=[];for(let Re=0;Re<L.mipmaps.length;Re++)le.__webglFramebuffer[Re]=r.createFramebuffer()}else le.__webglFramebuffer=r.createFramebuffer();if(qe)for(let Re=0,Oe=ye.length;Re<Oe;Re++){const dt=n.get(ye[Re]);dt.__webglTexture===void 0&&(dt.__webglTexture=r.createTexture(),c.memory.textures++)}if(k.samples>0&&pt(k)===!1){le.__webglMultisampledFramebuffer=r.createFramebuffer(),le.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,le.__webglMultisampledFramebuffer);for(let Re=0;Re<ye.length;Re++){const Oe=ye[Re];le.__webglColorRenderbuffer[Re]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,le.__webglColorRenderbuffer[Re]);const dt=a.convert(Oe.format,Oe.colorSpace),we=a.convert(Oe.type),ze=b(Oe.internalFormat,dt,we,Oe.colorSpace,k.isXRRenderTarget===!0),Qe=_t(k);r.renderbufferStorageMultisample(r.RENDERBUFFER,Qe,ze,k.width,k.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.RENDERBUFFER,le.__webglColorRenderbuffer[Re])}r.bindRenderbuffer(r.RENDERBUFFER,null),k.depthBuffer&&(le.__webglDepthRenderbuffer=r.createRenderbuffer(),ge(le.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(he){t.bindTexture(r.TEXTURE_CUBE_MAP,me.__webglTexture),Z(r.TEXTURE_CUBE_MAP,L);for(let Re=0;Re<6;Re++)if(L.mipmaps&&L.mipmaps.length>0)for(let Oe=0;Oe<L.mipmaps.length;Oe++)Se(le.__webglFramebuffer[Re][Oe],k,L,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Oe);else Se(le.__webglFramebuffer[Re],k,L,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);x(L)&&v(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(qe){for(let Re=0,Oe=ye.length;Re<Oe;Re++){const dt=ye[Re],we=n.get(dt);t.bindTexture(r.TEXTURE_2D,we.__webglTexture),Z(r.TEXTURE_2D,dt),Se(le.__webglFramebuffer,k,dt,r.COLOR_ATTACHMENT0+Re,r.TEXTURE_2D,0),x(dt)&&v(r.TEXTURE_2D)}t.unbindTexture()}else{let Re=r.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(Re=k.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Re,me.__webglTexture),Z(Re,L),L.mipmaps&&L.mipmaps.length>0)for(let Oe=0;Oe<L.mipmaps.length;Oe++)Se(le.__webglFramebuffer[Oe],k,L,r.COLOR_ATTACHMENT0,Re,Oe);else Se(le.__webglFramebuffer,k,L,r.COLOR_ATTACHMENT0,Re,0);x(L)&&v(Re),t.unbindTexture()}k.depthBuffer&&be(k)}function ct(k){const L=k.textures;for(let le=0,me=L.length;le<me;le++){const ye=L[le];if(x(ye)){const he=R(k),qe=n.get(ye).__webglTexture;t.bindTexture(he,qe),v(he),t.unbindTexture()}}}const Ut=[],X=[];function jn(k){if(k.samples>0){if(pt(k)===!1){const L=k.textures,le=k.width,me=k.height;let ye=r.COLOR_BUFFER_BIT;const he=k.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,qe=n.get(k),Re=L.length>1;if(Re)for(let Oe=0;Oe<L.length;Oe++)t.bindFramebuffer(r.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,qe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,qe.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let Oe=0;Oe<L.length;Oe++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(ye|=r.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(ye|=r.STENCIL_BUFFER_BIT)),Re){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,qe.__webglColorRenderbuffer[Oe]);const dt=n.get(L[Oe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,dt,0)}r.blitFramebuffer(0,0,le,me,0,0,le,me,ye,r.NEAREST),f===!0&&(Ut.length=0,X.length=0,Ut.push(r.COLOR_ATTACHMENT0+Oe),k.depthBuffer&&k.resolveDepthBuffer===!1&&(Ut.push(he),X.push(he),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,X)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ut))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Re)for(let Oe=0;Oe<L.length;Oe++){t.bindFramebuffer(r.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.RENDERBUFFER,qe.__webglColorRenderbuffer[Oe]);const dt=n.get(L[Oe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,qe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.TEXTURE_2D,dt,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,qe.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.resolveDepthBuffer===!1&&f){const L=k.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[L])}}}function _t(k){return Math.min(s.maxSamples,k.samples)}function pt(k){const L=n.get(k);return k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function Ze(k){const L=c.render.frame;h.get(k)!==L&&(h.set(k,L),k.update())}function Nt(k,L){const le=k.colorSpace,me=k.format,ye=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||le!==Wa&&le!==Fs&&(bt.getTransfer(le)===It?(me!==Ai||ye!==Jr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",le)),L}function Xe(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(d.width=k.naturalWidth||k.width,d.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(d.width=k.displayWidth,d.height=k.displayHeight):(d.width=k.width,d.height=k.height),d}this.allocateTextureUnit=H,this.resetTextureUnits=z,this.setTexture2D=ee,this.setTexture2DArray=j,this.setTexture3D=Q,this.setTextureCube=V,this.rebindTextures=Ye,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=jn,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=pt}function uR(r,e){function t(n,s=Fs){let a;const c=bt.getTransfer(s);if(n===Jr)return r.UNSIGNED_BYTE;if(n===Cm)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Am)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Hy)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===By)return r.BYTE;if(n===Vy)return r.SHORT;if(n===ic)return r.UNSIGNED_SHORT;if(n===Tm)return r.INT;if(n===No)return r.UNSIGNED_INT;if(n===_r)return r.FLOAT;if(n===el)return r.HALF_FLOAT;if(n===Gy)return r.ALPHA;if(n===Wy)return r.RGB;if(n===Ai)return r.RGBA;if(n===Xy)return r.LUMINANCE;if(n===qy)return r.LUMINANCE_ALPHA;if(n===La)return r.DEPTH_COMPONENT;if(n===Ga)return r.DEPTH_STENCIL;if(n===jy)return r.RED;if(n===bm)return r.RED_INTEGER;if(n===Yy)return r.RG;if(n===Rm)return r.RG_INTEGER;if(n===Pm)return r.RGBA_INTEGER;if(n===of||n===af||n===lf||n===cf)if(c===It)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===of)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===af)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===lf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===cf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===of)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===af)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===lf)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===cf)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ap||n===bp||n===Rp||n===Pp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Ap)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===bp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Rp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Dp||n===Np||n===Ip)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Dp||n===Np)return c===It?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Ip)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Lp||n===Fp||n===Up||n===Op||n===kp||n===zp||n===Bp||n===Vp||n===Hp||n===Gp||n===Wp||n===Xp||n===qp||n===jp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Lp)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fp)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Up)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Op)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===kp)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zp)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bp)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Vp)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Hp)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gp)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wp)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xp)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qp)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jp)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===uf||n===Yp||n===$p)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===uf)return c===It?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$p)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$y||n===Zp||n===Kp||n===Qp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===uf)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Zp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Kp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ha?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const fR={type:"move"};class ip{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new se,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new se),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new se,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new se),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,a=null,c=null;const l=this._targetRay,f=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){c=!0;for(const M of e.hand.values()){const x=t.getJointPose(M,n),v=this._getHandJoint(d,M);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const h=d.joints["index-finger-tip"],m=d.joints["thumb-tip"],g=h.position.distanceTo(m.position),_=.02,S=.005;d.inputState.pinching&&g>_+S?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&g<=_-S&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1));l!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(fR)))}return l!==null&&(l.visible=s!==null),f!==null&&(f.visible=a!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Yl;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const dR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hR=`
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

}`;class pR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Gn,a=e.properties.get(s);a.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new rr({vertexShader:dR,fragmentShader:hR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ui(new es(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mR extends Fo{constructor(e,t){super();const n=this;let s=null,a=1,c=null,l="local-floor",f=1,d=null,h=null,m=null,g=null,_=null,S=null;const M=new pR,x=t.getContextAttributes();let v=null,R=null;const b=[],w=[],C=new ft;let N=null;const D=new Hi;D.viewport=new on;const P=new Hi;P.viewport=new on;const T=[D,P],A=new Iw;let U=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let ae=b[ne];return ae===void 0&&(ae=new ip,b[ne]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(ne){let ae=b[ne];return ae===void 0&&(ae=new ip,b[ne]=ae),ae.getGripSpace()},this.getHand=function(ne){let ae=b[ne];return ae===void 0&&(ae=new ip,b[ne]=ae),ae.getHandSpace()};function H(ne){const ae=w.indexOf(ne.inputSource);if(ae===-1)return;const Se=b[ae];Se!==void 0&&(Se.update(ne.inputSource,ne.frame,d||c),Se.dispatchEvent({type:ne.type,data:ne.inputSource}))}function q(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",ee);for(let ne=0;ne<b.length;ne++){const ae=w[ne];ae!==null&&(w[ne]=null,b[ne].disconnect(ae))}U=null,z=null,M.reset(),e.setRenderTarget(v),_=null,g=null,m=null,s=null,R=null,Ae.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){a=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){l=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(ne){d=ne},this.getBaseLayer=function(){return g!==null?g:_},this.getBinding=function(){return m},this.getFrame=function(){return S},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(v=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",q),s.addEventListener("inputsourceschange",ee),x.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(C),s.enabledFeatures!==void 0&&s.enabledFeatures.includes("layers")){let Se=null,ge=null,fe=null;x.depth&&(fe=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=x.stencil?Ga:La,ge=x.stencil?Ha:No);const be={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:a};m=new XRWebGLBinding(s,t),g=m.createProjectionLayer(be),s.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),R=new ir(g.textureWidth,g.textureHeight,{format:Ai,type:Jr,depthTexture:new hx(g.textureWidth,g.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1})}else{const Se={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:a};_=new XRWebGLLayer(s,t,Se),s.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),R=new ir(_.framebufferWidth,_.framebufferHeight,{format:Ai,type:Jr,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}R.isXRRenderTarget=!0,this.setFoveation(f),d=null,c=await s.requestReferenceSpace(l),Ae.setContext(s),Ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function ee(ne){for(let ae=0;ae<ne.removed.length;ae++){const Se=ne.removed[ae],ge=w.indexOf(Se);ge>=0&&(w[ge]=null,b[ge].disconnect(Se))}for(let ae=0;ae<ne.added.length;ae++){const Se=ne.added[ae];let ge=w.indexOf(Se);if(ge===-1){for(let be=0;be<b.length;be++)if(be>=w.length){w.push(Se),ge=be;break}else if(w[be]===null){w[be]=Se,ge=be;break}if(ge===-1)break}const fe=b[ge];fe&&fe.connect(Se)}}const j=new se,Q=new se;function V(ne,ae,Se){j.setFromMatrixPosition(ae.matrixWorld),Q.setFromMatrixPosition(Se.matrixWorld);const ge=j.distanceTo(Q),fe=ae.projectionMatrix.elements,be=Se.projectionMatrix.elements,Ye=fe[14]/(fe[10]-1),xt=fe[14]/(fe[10]+1),ct=(fe[9]+1)/fe[5],Ut=(fe[9]-1)/fe[5],X=(fe[8]-1)/fe[0],jn=(be[8]+1)/be[0],_t=Ye*X,pt=Ye*jn,Ze=ge/(-X+jn),Nt=Ze*-X;if(ae.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(Nt),ne.translateZ(Ze),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),fe[10]===-1)ne.projectionMatrix.copy(ae.projectionMatrix),ne.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const Xe=Ye+Ze,k=xt+Ze,L=_t-Nt,le=pt+(ge-Nt),me=ct*xt/k*Xe,ye=Ut*xt/k*Xe;ne.projectionMatrix.makePerspective(L,le,me,ye,Xe,k),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function G(ne,ae){ae===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(ae.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;let ae=ne.near,Se=ne.far;M.texture!==null&&(M.depthNear>0&&(ae=M.depthNear),M.depthFar>0&&(Se=M.depthFar)),A.near=P.near=D.near=ae,A.far=P.far=D.far=Se,(U!==A.near||z!==A.far)&&(s.updateRenderState({depthNear:A.near,depthFar:A.far}),U=A.near,z=A.far),D.layers.mask=ne.layers.mask|2,P.layers.mask=ne.layers.mask|4,A.layers.mask=D.layers.mask|P.layers.mask;const ge=ne.parent,fe=A.cameras;G(A,ge);for(let be=0;be<fe.length;be++)G(fe[be],ge);fe.length===2?V(A,D,P):A.projectionMatrix.copy(D.projectionMatrix),Y(ne,A,ge)};function Y(ne,ae,Se){Se===null?ne.matrix.copy(ae.matrixWorld):(ne.matrix.copy(Se.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(ae.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(ae.projectionMatrix),ne.projectionMatrixInverse.copy(ae.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=rc*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(g===null&&_===null))return f},this.setFoveation=function(ne){f=ne,g!==null&&(g.fixedFoveation=ne),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=ne)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(A)};let O=null;function Z(ne,ae){if(h=ae.getViewerPose(d||c),S=ae,h!==null){const Se=h.views;_!==null&&(e.setRenderTargetFramebuffer(R,_.framebuffer),e.setRenderTarget(R));let ge=!1;Se.length!==A.cameras.length&&(A.cameras.length=0,ge=!0);for(let be=0;be<Se.length;be++){const Ye=Se[be];let xt=null;if(_!==null)xt=_.getViewport(Ye);else{const Ut=m.getViewSubImage(g,Ye);xt=Ut.viewport,be===0&&(e.setRenderTargetTextures(R,Ut.colorTexture,g.ignoreDepthValues?void 0:Ut.depthStencilTexture),e.setRenderTarget(R))}let ct=T[be];ct===void 0&&(ct=new Hi,ct.layers.enable(be),ct.viewport=new on,T[be]=ct),ct.matrix.fromArray(Ye.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(Ye.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(xt.x,xt.y,xt.width,xt.height),be===0&&(A.matrix.copy(ct.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),ge===!0&&A.cameras.push(ct)}const fe=s.enabledFeatures;if(fe&&fe.includes("depth-sensing")){const be=m.getDepthInformation(Se[0]);be&&be.isValid&&be.texture&&M.init(e,be,s.renderState)}}for(let Se=0;Se<b.length;Se++){const ge=w[Se],fe=b[Se];ge!==null&&fe!==void 0&&fe.update(ge,ae,d||c)}O&&O(ne,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),S=null}const Ae=new mx;Ae.setAnimationLoop(Z),this.setAnimationLoop=function(ne){O=ne},this.dispose=function(){}}}const go=new Mr,gR=new an;function _R(r,e){function t(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function n(x,v){v.color.getRGB(x.fogColor.value,ox(r)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function s(x,v,R,b,w){v.isMeshBasicMaterial||v.isMeshLambertMaterial?a(x,v):v.isMeshToonMaterial?(a(x,v),m(x,v)):v.isMeshPhongMaterial?(a(x,v),h(x,v)):v.isMeshStandardMaterial?(a(x,v),g(x,v),v.isMeshPhysicalMaterial&&_(x,v,w)):v.isMeshMatcapMaterial?(a(x,v),S(x,v)):v.isMeshDepthMaterial?a(x,v):v.isMeshDistanceMaterial?(a(x,v),M(x,v)):v.isMeshNormalMaterial?a(x,v):v.isLineBasicMaterial?(c(x,v),v.isLineDashedMaterial&&l(x,v)):v.isPointsMaterial?f(x,v,R,b):v.isSpriteMaterial?d(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function a(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,t(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===fi&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,t(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===fi&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,t(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,t(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const R=e.get(v),b=R.envMap,w=R.envMapRotation;b&&(x.envMap.value=b,go.copy(w),go.x*=-1,go.y*=-1,go.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(go.y*=-1,go.z*=-1),x.envMapRotation.value.setFromMatrix4(gR.makeRotationFromEuler(go)),x.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap&&(x.lightMap.value=v.lightMap,x.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,x.lightMapTransform)),v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,x.aoMapTransform))}function c(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform))}function l(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function f(x,v,R,b){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*R,x.scale.value=b*.5,v.map&&(x.map.value=v.map,t(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function d(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function h(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function m(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function g(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,x.roughnessMapTransform)),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function _(x,v,R){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===fi&&x.clearcoatNormalScale.value.negate())),v.dispersion>0&&(x.dispersion.value=v.dispersion),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=R.texture,x.transmissionSamplerSize.value.set(R.width,R.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,x.specularIntensityMapTransform))}function S(x,v){v.matcap&&(x.matcap.value=v.matcap)}function M(x,v){const R=e.get(v).light;x.referencePosition.value.setFromMatrixPosition(R.matrixWorld),x.nearDistance.value=R.shadow.camera.near,x.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function vR(r,e,t,n){let s={},a={},c=[];const l=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function f(R,b){const w=b.program;n.uniformBlockBinding(R,w)}function d(R,b){let w=s[R.id];w===void 0&&(S(R),w=h(R),s[R.id]=w,R.addEventListener("dispose",x));const C=b.program;n.updateUBOMapping(R,C);const N=e.render.frame;a[R.id]!==N&&(g(R),a[R.id]=N)}function h(R){const b=m();R.__bindingPointIndex=b;const w=r.createBuffer(),C=R.__size,N=R.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,C,N),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,w),w}function m(){for(let R=0;R<l;R++)if(c.indexOf(R)===-1)return c.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(R){const b=s[R.id],w=R.uniforms,C=R.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let N=0,D=w.length;N<D;N++){const P=Array.isArray(w[N])?w[N]:[w[N]];for(let T=0,A=P.length;T<A;T++){const U=P[T];if(_(U,N,T,C)===!0){const z=U.__offset,H=Array.isArray(U.value)?U.value:[U.value];let q=0;for(let ee=0;ee<H.length;ee++){const j=H[ee],Q=M(j);typeof j=="number"||typeof j=="boolean"?(U.__data[0]=j,r.bufferSubData(r.UNIFORM_BUFFER,z+q,U.__data)):j.isMatrix3?(U.__data[0]=j.elements[0],U.__data[1]=j.elements[1],U.__data[2]=j.elements[2],U.__data[3]=0,U.__data[4]=j.elements[3],U.__data[5]=j.elements[4],U.__data[6]=j.elements[5],U.__data[7]=0,U.__data[8]=j.elements[6],U.__data[9]=j.elements[7],U.__data[10]=j.elements[8],U.__data[11]=0):(j.toArray(U.__data,q),q+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,z,U.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function _(R,b,w,C){const N=R.value,D=b+"_"+w;if(C[D]===void 0)return typeof N=="number"||typeof N=="boolean"?C[D]=N:C[D]=N.clone(),!0;{const P=C[D];if(typeof N=="number"||typeof N=="boolean"){if(P!==N)return C[D]=N,!0}else if(P.equals(N)===!1)return P.copy(N),!0}return!1}function S(R){const b=R.uniforms;let w=0;const C=16;for(let D=0,P=b.length;D<P;D++){const T=Array.isArray(b[D])?b[D]:[b[D]];for(let A=0,U=T.length;A<U;A++){const z=T[A],H=Array.isArray(z.value)?z.value:[z.value];for(let q=0,ee=H.length;q<ee;q++){const j=H[q],Q=M(j),V=w%C,G=V%Q.boundary,Y=V+G;w+=G,Y!==0&&C-Y<Q.storage&&(w+=C-Y),z.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=w,w+=Q.storage}}}const N=w%C;return N>0&&(w+=C-N),R.__size=w,R.__cache={},this}function M(R){const b={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(b.boundary=4,b.storage=4):R.isVector2?(b.boundary=8,b.storage=8):R.isVector3||R.isColor?(b.boundary=16,b.storage=12):R.isVector4?(b.boundary=16,b.storage=16):R.isMatrix3?(b.boundary=48,b.storage=48):R.isMatrix4?(b.boundary=64,b.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),b}function x(R){const b=R.target;b.removeEventListener("dispose",x);const w=c.indexOf(b.__bindingPointIndex);c.splice(w,1),r.deleteBuffer(s[b.id]),delete s[b.id],delete a[b.id]}function v(){for(const R in s)r.deleteBuffer(s[R]);c=[],s={},a={}}return{bind:f,update:d,dispose:v}}class yR{constructor(e={}){const{canvas:t=ZE(),context:n=null,depth:s=!0,stencil:a=!1,alpha:c=!1,antialias:l=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:m=!1,reverseDepthBuffer:g=!1}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=c;const S=new Uint32Array(4),M=new Int32Array(4);let x=null,v=null;const R=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vi,this.toneMapping=zs,this.toneMappingExposure=1;const w=this;let C=!1,N=0,D=0,P=null,T=-1,A=null;const U=new on,z=new on;let H=null;const q=new ht(0);let ee=0,j=t.width,Q=t.height,V=1,G=null,Y=null;const O=new on(0,0,j,Q),Z=new on(0,0,j,Q);let Ae=!1;const ne=new fx;let ae=!1,Se=!1;this.transmissionResolutionScale=1;const ge=new an,fe=new an,be=new se,Ye=new on,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function Ut(){return P===null?V:1}let X=n;function jn(F,J){return t.getContext(F,J)}try{const F={alpha:!0,depth:s,stencil:a,antialias:l,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:h,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wm}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",Ie,!1),X===null){const J="webgl2";if(X=jn(J,F),X===null)throw jn(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(F){throw console.error("THREE.WebGLRenderer: "+F.message),F}let _t,pt,Ze,Nt,Xe,k,L,le,me,ye,he,qe,Re,Oe,dt,we,ze,Qe,nt,Be,mt,st,Pt,K;function Pe(){_t=new bA(X),_t.init(),st=new uR(X,_t),pt=new MA(X,_t,e,st),Ze=new lR(X,_t),pt.reverseDepthBuffer&&g&&Ze.buffers.depth.setReversed(!0),Nt=new DA(X),Xe=new $b,k=new cR(X,_t,Ze,Xe,pt,st,Nt),L=new wA(w),le=new AA(w),me=new kw(X),Pt=new xA(X,me),ye=new RA(X,me,Nt,Pt),he=new IA(X,ye,me,Nt),nt=new NA(X,pt,k),we=new EA(Xe),qe=new Yb(w,L,le,_t,pt,Pt,we),Re=new _R(w,Xe),Oe=new Kb,dt=new iR(_t),Qe=new yA(w,L,le,Ze,he,_,f),ze=new oR(w,he,pt),K=new vR(X,Nt,pt,Ze),Be=new SA(X,_t,Nt),mt=new PA(X,_t,Nt),Nt.programs=qe.programs,w.capabilities=pt,w.extensions=_t,w.properties=Xe,w.renderLists=Oe,w.shadowMap=ze,w.state=Ze,w.info=Nt}Pe();const de=new mR(w,X);this.xr=de,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const F=_t.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){const F=_t.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(F){F!==void 0&&(V=F,this.setSize(j,Q,!1))},this.getSize=function(F){return F.set(j,Q)},this.setSize=function(F,J,ce=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=F,Q=J,t.width=Math.floor(F*V),t.height=Math.floor(J*V),ce===!0&&(t.style.width=F+"px",t.style.height=J+"px"),this.setViewport(0,0,F,J)},this.getDrawingBufferSize=function(F){return F.set(j*V,Q*V).floor()},this.setDrawingBufferSize=function(F,J,ce){j=F,Q=J,V=ce,t.width=Math.floor(F*ce),t.height=Math.floor(J*ce),this.setViewport(0,0,F,J)},this.getCurrentViewport=function(F){return F.copy(U)},this.getViewport=function(F){return F.copy(O)},this.setViewport=function(F,J,ce,re){F.isVector4?O.set(F.x,F.y,F.z,F.w):O.set(F,J,ce,re),Ze.viewport(U.copy(O).multiplyScalar(V).round())},this.getScissor=function(F){return F.copy(Z)},this.setScissor=function(F,J,ce,re){F.isVector4?Z.set(F.x,F.y,F.z,F.w):Z.set(F,J,ce,re),Ze.scissor(z.copy(Z).multiplyScalar(V).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(F){Ze.setScissorTest(Ae=F)},this.setOpaqueSort=function(F){G=F},this.setTransparentSort=function(F){Y=F},this.getClearColor=function(F){return F.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(F=!0,J=!0,ce=!0){let re=0;if(F){let te=!1;if(P!==null){const Ee=P.texture.format;te=Ee===Pm||Ee===Rm||Ee===bm}if(te){const Ee=P.texture.type,De=Ee===Jr||Ee===No||Ee===ic||Ee===Ha||Ee===Cm||Ee===Am,Fe=Qe.getClearColor(),Ve=Qe.getClearAlpha(),it=Fe.r,tt=Fe.g,Ge=Fe.b;De?(S[0]=it,S[1]=tt,S[2]=Ge,S[3]=Ve,X.clearBufferuiv(X.COLOR,0,S)):(M[0]=it,M[1]=tt,M[2]=Ge,M[3]=Ve,X.clearBufferiv(X.COLOR,0,M))}else re|=X.COLOR_BUFFER_BIT}J&&(re|=X.DEPTH_BUFFER_BIT),ce&&(re|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",Ie,!1),Qe.dispose(),Oe.dispose(),dt.dispose(),Xe.dispose(),L.dispose(),le.dispose(),he.dispose(),Pt.dispose(),K.dispose(),qe.dispose(),de.dispose(),de.removeEventListener("sessionstart",Bo),de.removeEventListener("sessionend",ss),Cr.stop()};function pe(F){F.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const F=Nt.autoReset,J=ze.enabled,ce=ze.autoUpdate,re=ze.needsUpdate,te=ze.type;Pe(),Nt.autoReset=F,ze.enabled=J,ze.autoUpdate=ce,ze.needsUpdate=re,ze.type=te}function Ie(F){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function ot(F){const J=F.target;J.removeEventListener("dispose",ot),kt(J)}function kt(F){hn(F),Xe.remove(F)}function hn(F){const J=Xe.get(F).programs;J!==void 0&&(J.forEach(function(ce){qe.releaseProgram(ce)}),F.isShaderMaterial&&qe.releaseShaderCache(F))}this.renderBufferDirect=function(F,J,ce,re,te,Ee){J===null&&(J=xt);const De=te.isMesh&&te.matrixWorld.determinant()<0,Fe=Cc(F,J,ce,re,te);Ze.setMaterial(re,De);let Ve=ce.index,it=1;if(re.wireframe===!0){if(Ve=ye.getWireframeAttribute(ce),Ve===void 0)return;it=2}const tt=ce.drawRange,Ge=ce.attributes.position;let St=tt.start*it,at=(tt.start+tt.count)*it;Ee!==null&&(St=Math.max(St,Ee.start*it),at=Math.min(at,(Ee.start+Ee.count)*it)),Ve!==null?(St=Math.max(St,0),at=Math.min(at,Ve.count)):Ge!=null&&(St=Math.max(St,0),at=Math.min(at,Ge.count));const Kt=at-St;if(Kt<0||Kt===1/0)return;Pt.setup(te,re,Fe,ce,Ve);let Vt,Et=Be;if(Ve!==null&&(Vt=me.get(Ve),Et=mt,Et.setIndex(Vt)),te.isMesh)re.wireframe===!0?(Ze.setLineWidth(re.wireframeLinewidth*Ut()),Et.setMode(X.LINES)):Et.setMode(X.TRIANGLES);else if(te.isLine){let Ke=re.linewidth;Ke===void 0&&(Ke=1),Ze.setLineWidth(Ke*Ut()),te.isLineSegments?Et.setMode(X.LINES):te.isLineLoop?Et.setMode(X.LINE_LOOP):Et.setMode(X.LINE_STRIP)}else te.isPoints?Et.setMode(X.POINTS):te.isSprite&&Et.setMode(X.TRIANGLES);if(te.isBatchedMesh)if(te._multiDrawInstances!==null)Et.renderMultiDrawInstances(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount,te._multiDrawInstances);else if(_t.get("WEBGL_multi_draw"))Et.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const Ke=te._multiDrawStarts,Qt=te._multiDrawCounts,vt=te._multiDrawCount,Nn=Ve?me.get(Ve).bytesPerElement:1,as=Xe.get(re).currentProgram.getUniforms();for(let $n=0;$n<vt;$n++)as.setValue(X,"_gl_DrawID",$n),Et.render(Ke[$n]/Nn,Qt[$n])}else if(te.isInstancedMesh)Et.renderInstances(St,Kt,te.count);else if(ce.isInstancedBufferGeometry){const Ke=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,Qt=Math.min(ce.instanceCount,Ke);Et.renderInstances(St,Kt,Qt)}else Et.render(St,Kt)};function wt(F,J,ce){F.transparent===!0&&F.side===mr&&F.forceSinglePass===!1?(F.side=fi,F.needsUpdate=!0,Vo(F,J,ce),F.side=Hs,F.needsUpdate=!0,Vo(F,J,ce),F.side=mr):Vo(F,J,ce)}this.compile=function(F,J,ce=null){ce===null&&(ce=F),v=dt.get(ce),v.init(J),b.push(v),ce.traverseVisible(function(te){te.isLight&&te.layers.test(J.layers)&&(v.pushLight(te),te.castShadow&&v.pushShadow(te))}),F!==ce&&F.traverseVisible(function(te){te.isLight&&te.layers.test(J.layers)&&(v.pushLight(te),te.castShadow&&v.pushShadow(te))}),v.setupLights();const re=new Set;return F.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const Ee=te.material;if(Ee)if(Array.isArray(Ee))for(let De=0;De<Ee.length;De++){const Fe=Ee[De];wt(Fe,ce,te),re.add(Fe)}else wt(Ee,ce,te),re.add(Ee)}),b.pop(),v=null,re},this.compileAsync=function(F,J,ce=null){const re=this.compile(F,J,ce);return new Promise(te=>{function Ee(){if(re.forEach(function(De){Xe.get(De).currentProgram.isReady()&&re.delete(De)}),re.size===0){te(F);return}setTimeout(Ee,10)}_t.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let ni=null;function Yn(F){ni&&ni(F)}function Bo(){Cr.stop()}function ss(){Cr.start()}const Cr=new mx;Cr.setAnimationLoop(Yn),typeof self<"u"&&Cr.setContext(self),this.setAnimationLoop=function(F){ni=F,de.setAnimationLoop(F),F===null?Cr.stop():Cr.start()},de.addEventListener("sessionstart",Bo),de.addEventListener("sessionend",ss),this.render=function(F,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(J),J=de.getCamera()),F.isScene===!0&&F.onBeforeRender(w,F,J,P),v=dt.get(F,b.length),v.init(J),b.push(v),fe.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),ne.setFromProjectionMatrix(fe),Se=this.localClippingEnabled,ae=we.init(this.clippingPlanes,Se),x=Oe.get(F,R.length),x.init(),R.push(x),de.enabled===!0&&de.isPresenting===!0){const Ee=w.xr.getDepthSensingMesh();Ee!==null&&Ar(Ee,J,-1/0,w.sortObjects)}Ar(F,J,0,w.sortObjects),x.finish(),w.sortObjects===!0&&x.sort(G,Y),ct=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,ct&&Qe.addToRenderList(x,F),this.info.render.frame++,ae===!0&&we.beginShadows();const ce=v.state.shadowsArray;ze.render(ce,F,J),ae===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=x.opaque,te=x.transmissive;if(v.setupLights(),J.isArrayCamera){const Ee=J.cameras;if(te.length>0)for(let De=0,Fe=Ee.length;De<Fe;De++){const Ve=Ee[De];$s(re,te,F,Ve)}ct&&Qe.render(F);for(let De=0,Fe=Ee.length;De<Fe;De++){const Ve=Ee[De];Ys(x,F,Ve,Ve.viewport)}}else te.length>0&&$s(re,te,F,J),ct&&Qe.render(F),Ys(x,F,J);P!==null&&D===0&&(k.updateMultisampleRenderTarget(P),k.updateRenderTargetMipmap(P)),F.isScene===!0&&F.onAfterRender(w,F,J),Pt.resetDefaultState(),T=-1,A=null,b.pop(),b.length>0?(v=b[b.length-1],ae===!0&&we.setGlobalState(w.clippingPlanes,v.state.camera)):v=null,R.pop(),R.length>0?x=R[R.length-1]:x=null};function Ar(F,J,ce,re){if(F.visible===!1)return;if(F.layers.test(J.layers)){if(F.isGroup)ce=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(J);else if(F.isLight)v.pushLight(F),F.castShadow&&v.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||ne.intersectsSprite(F)){re&&Ye.setFromMatrixPosition(F.matrixWorld).applyMatrix4(fe);const De=he.update(F),Fe=F.material;Fe.visible&&x.push(F,De,Fe,ce,Ye.z,null)}}else if((F.isMesh||F.isLine||F.isPoints)&&(!F.frustumCulled||ne.intersectsObject(F))){const De=he.update(F),Fe=F.material;if(re&&(F.boundingSphere!==void 0?(F.boundingSphere===null&&F.computeBoundingSphere(),Ye.copy(F.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Ye.copy(De.boundingSphere.center)),Ye.applyMatrix4(F.matrixWorld).applyMatrix4(fe)),Array.isArray(Fe)){const Ve=De.groups;for(let it=0,tt=Ve.length;it<tt;it++){const Ge=Ve[it],St=Fe[Ge.materialIndex];St&&St.visible&&x.push(F,De,St,ce,Ye.z,Ge)}}else Fe.visible&&x.push(F,De,Fe,ce,Ye.z,null)}}const Ee=F.children;for(let De=0,Fe=Ee.length;De<Fe;De++)Ar(Ee[De],J,ce,re)}function Ys(F,J,ce,re){const te=F.opaque,Ee=F.transmissive,De=F.transparent;v.setupLightsView(ce),ae===!0&&we.setGlobalState(w.clippingPlanes,ce),re&&Ze.viewport(U.copy(re)),te.length>0&&os(te,J,ce),Ee.length>0&&os(Ee,J,ce),De.length>0&&os(De,J,ce),Ze.buffers.depth.setTest(!0),Ze.buffers.depth.setMask(!0),Ze.buffers.color.setMask(!0),Ze.setPolygonOffset(!1)}function $s(F,J,ce,re){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[re.id]===void 0&&(v.state.transmissionRenderTarget[re.id]=new ir(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float")?el:Jr,minFilter:Co,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace}));const Ee=v.state.transmissionRenderTarget[re.id],De=re.viewport||U;Ee.setSize(De.z*w.transmissionResolutionScale,De.w*w.transmissionResolutionScale);const Fe=w.getRenderTarget();w.setRenderTarget(Ee),w.getClearColor(q),ee=w.getClearAlpha(),ee<1&&w.setClearColor(16777215,.5),w.clear(),ct&&Qe.render(ce);const Ve=w.toneMapping;w.toneMapping=zs;const it=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),v.setupLightsView(re),ae===!0&&we.setGlobalState(w.clippingPlanes,re),os(F,ce,re),k.updateMultisampleRenderTarget(Ee),k.updateRenderTargetMipmap(Ee),_t.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let Ge=0,St=J.length;Ge<St;Ge++){const at=J[Ge],Kt=at.object,Vt=at.geometry,Et=at.material,Ke=at.group;if(Et.side===mr&&Kt.layers.test(re.layers)){const Qt=Et.side;Et.side=fi,Et.needsUpdate=!0,wc(Kt,ce,re,Vt,Et,Ke),Et.side=Qt,Et.needsUpdate=!0,tt=!0}}tt===!0&&(k.updateMultisampleRenderTarget(Ee),k.updateRenderTargetMipmap(Ee))}w.setRenderTarget(Fe),w.setClearColor(q,ee),it!==void 0&&(re.viewport=it),w.toneMapping=Ve}function os(F,J,ce){const re=J.isScene===!0?J.overrideMaterial:null;for(let te=0,Ee=F.length;te<Ee;te++){const De=F[te],Fe=De.object,Ve=De.geometry,it=re===null?De.material:re,tt=De.group;Fe.layers.test(ce.layers)&&wc(Fe,J,ce,Ve,it,tt)}}function wc(F,J,ce,re,te,Ee){F.onBeforeRender(w,J,ce,re,te,Ee),F.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),te.onBeforeRender(w,J,ce,re,F,Ee),te.transparent===!0&&te.side===mr&&te.forceSinglePass===!1?(te.side=fi,te.needsUpdate=!0,w.renderBufferDirect(ce,J,re,te,F,Ee),te.side=Hs,te.needsUpdate=!0,w.renderBufferDirect(ce,J,re,te,F,Ee),te.side=mr):w.renderBufferDirect(ce,J,re,te,F,Ee),F.onAfterRender(w,J,ce,re,te,Ee)}function Vo(F,J,ce){J.isScene!==!0&&(J=xt);const re=Xe.get(F),te=v.state.lights,Ee=v.state.shadowsArray,De=te.state.version,Fe=qe.getParameters(F,te.state,Ee,J,ce),Ve=qe.getProgramCacheKey(Fe);let it=re.programs;re.environment=F.isMeshStandardMaterial?J.environment:null,re.fog=J.fog,re.envMap=(F.isMeshStandardMaterial?le:L).get(F.envMap||re.environment),re.envMapRotation=re.environment!==null&&F.envMap===null?J.environmentRotation:F.envMapRotation,it===void 0&&(F.addEventListener("dispose",ot),it=new Map,re.programs=it);let tt=it.get(Ve);if(tt!==void 0){if(re.currentProgram===tt&&re.lightsStateVersion===De)return ar(F,Fe),tt}else Fe.uniforms=qe.getUniforms(F),F.onBeforeCompile(Fe,w),tt=qe.acquireProgram(Fe,Ve),it.set(Ve,tt),re.uniforms=Fe.uniforms;const Ge=re.uniforms;return(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(Ge.clippingPlanes=we.uniform),ar(F,Fe),re.needsLights=Yf(F),re.lightsStateVersion=De,re.needsLights&&(Ge.ambientLightColor.value=te.state.ambient,Ge.lightProbe.value=te.state.probe,Ge.directionalLights.value=te.state.directional,Ge.directionalLightShadows.value=te.state.directionalShadow,Ge.spotLights.value=te.state.spot,Ge.spotLightShadows.value=te.state.spotShadow,Ge.rectAreaLights.value=te.state.rectArea,Ge.ltc_1.value=te.state.rectAreaLTC1,Ge.ltc_2.value=te.state.rectAreaLTC2,Ge.pointLights.value=te.state.point,Ge.pointLightShadows.value=te.state.pointShadow,Ge.hemisphereLights.value=te.state.hemi,Ge.directionalShadowMap.value=te.state.directionalShadowMap,Ge.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Ge.spotShadowMap.value=te.state.spotShadowMap,Ge.spotLightMatrix.value=te.state.spotLightMatrix,Ge.spotLightMap.value=te.state.spotLightMap,Ge.pointShadowMap.value=te.state.pointShadowMap,Ge.pointShadowMatrix.value=te.state.pointShadowMatrix),re.currentProgram=tt,re.uniformsList=null,tt}function Tc(F){if(F.uniformsList===null){const J=F.currentProgram.getUniforms();F.uniformsList=ff.seqWithValue(J.seq,F.uniforms)}return F.uniformsList}function ar(F,J){const ce=Xe.get(F);ce.outputColorSpace=J.outputColorSpace,ce.batching=J.batching,ce.batchingColor=J.batchingColor,ce.instancing=J.instancing,ce.instancingColor=J.instancingColor,ce.instancingMorph=J.instancingMorph,ce.skinning=J.skinning,ce.morphTargets=J.morphTargets,ce.morphNormals=J.morphNormals,ce.morphColors=J.morphColors,ce.morphTargetsCount=J.morphTargetsCount,ce.numClippingPlanes=J.numClippingPlanes,ce.numIntersection=J.numClipIntersection,ce.vertexAlphas=J.vertexAlphas,ce.vertexTangents=J.vertexTangents,ce.toneMapping=J.toneMapping}function Cc(F,J,ce,re,te){J.isScene!==!0&&(J=xt),k.resetTextureUnits();const Ee=J.fog,De=re.isMeshStandardMaterial?J.environment:null,Fe=P===null?w.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Wa,Ve=(re.isMeshStandardMaterial?le:L).get(re.envMap||De),it=re.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,tt=!!ce.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Ge=!!ce.morphAttributes.position,St=!!ce.morphAttributes.normal,at=!!ce.morphAttributes.color;let Kt=zs;re.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Kt=w.toneMapping);const Vt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,Et=Vt!==void 0?Vt.length:0,Ke=Xe.get(re),Qt=v.state.lights;if(ae===!0&&(Se===!0||F!==A)){const bn=F===A&&re.id===T;we.setState(re,F,bn)}let vt=!1;re.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Qt.state.version||Ke.outputColorSpace!==Fe||te.isBatchedMesh&&Ke.batching===!1||!te.isBatchedMesh&&Ke.batching===!0||te.isBatchedMesh&&Ke.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&Ke.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&Ke.instancing===!1||!te.isInstancedMesh&&Ke.instancing===!0||te.isSkinnedMesh&&Ke.skinning===!1||!te.isSkinnedMesh&&Ke.skinning===!0||te.isInstancedMesh&&Ke.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&Ke.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&Ke.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&Ke.instancingMorph===!1&&te.morphTexture!==null||Ke.envMap!==Ve||re.fog===!0&&Ke.fog!==Ee||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==we.numPlanes||Ke.numIntersection!==we.numIntersection)||Ke.vertexAlphas!==it||Ke.vertexTangents!==tt||Ke.morphTargets!==Ge||Ke.morphNormals!==St||Ke.morphColors!==at||Ke.toneMapping!==Kt||Ke.morphTargetsCount!==Et)&&(vt=!0):(vt=!0,Ke.__version=re.version);let Nn=Ke.currentProgram;vt===!0&&(Nn=Vo(re,J,te));let as=!1,$n=!1,br=!1;const Lt=Nn.getUniforms(),In=Ke.uniforms;if(Ze.useProgram(Nn.program)&&(as=!0,$n=!0,br=!0),re.id!==T&&(T=re.id,$n=!0),as||A!==F){Ze.buffers.depth.getReversed()?(ge.copy(F.projectionMatrix),QE(ge),JE(ge),Lt.setValue(X,"projectionMatrix",ge)):Lt.setValue(X,"projectionMatrix",F.projectionMatrix),Lt.setValue(X,"viewMatrix",F.matrixWorldInverse);const xn=Lt.map.cameraPosition;xn!==void 0&&xn.setValue(X,be.setFromMatrixPosition(F.matrixWorld)),pt.logarithmicDepthBuffer&&Lt.setValue(X,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Lt.setValue(X,"isOrthographic",F.isOrthographicCamera===!0),A!==F&&(A=F,$n=!0,br=!0)}if(te.isSkinnedMesh){Lt.setOptional(X,te,"bindMatrix"),Lt.setOptional(X,te,"bindMatrixInverse");const bn=te.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Lt.setValue(X,"boneTexture",bn.boneTexture,k))}te.isBatchedMesh&&(Lt.setOptional(X,te,"batchingTexture"),Lt.setValue(X,"batchingTexture",te._matricesTexture,k),Lt.setOptional(X,te,"batchingIdTexture"),Lt.setValue(X,"batchingIdTexture",te._indirectTexture,k),Lt.setOptional(X,te,"batchingColorTexture"),te._colorsTexture!==null&&Lt.setValue(X,"batchingColorTexture",te._colorsTexture,k));const yn=ce.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&nt.update(te,ce,Nn),($n||Ke.receiveShadow!==te.receiveShadow)&&(Ke.receiveShadow=te.receiveShadow,Lt.setValue(X,"receiveShadow",te.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(In.envMap.value=Ve,In.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&J.environment!==null&&(In.envMapIntensity.value=J.environmentIntensity),$n&&(Lt.setValue(X,"toneMappingExposure",w.toneMappingExposure),Ke.needsLights&&Ac(In,br),Ee&&re.fog===!0&&Re.refreshFogUniforms(In,Ee),Re.refreshMaterialUniforms(In,re,V,Q,v.state.transmissionRenderTarget[F.id]),ff.upload(X,Tc(Ke),In,k)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(ff.upload(X,Tc(Ke),In,k),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Lt.setValue(X,"center",te.center),Lt.setValue(X,"modelViewMatrix",te.modelViewMatrix),Lt.setValue(X,"normalMatrix",te.normalMatrix),Lt.setValue(X,"modelMatrix",te.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const bn=re.uniformsGroups;for(let xn=0,Tt=bn.length;xn<Tt;xn++){const lr=bn[xn];K.update(lr,Nn),K.bind(lr,Nn)}}return Nn}function Ac(F,J){F.ambientLightColor.needsUpdate=J,F.lightProbe.needsUpdate=J,F.directionalLights.needsUpdate=J,F.directionalLightShadows.needsUpdate=J,F.pointLights.needsUpdate=J,F.pointLightShadows.needsUpdate=J,F.spotLights.needsUpdate=J,F.spotLightShadows.needsUpdate=J,F.rectAreaLights.needsUpdate=J,F.hemisphereLights.needsUpdate=J}function Yf(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(F,J,ce){Xe.get(F.texture).__webglTexture=J,Xe.get(F.depthTexture).__webglTexture=ce;const re=Xe.get(F);re.__hasExternalTextures=!0,re.__autoAllocateDepthBuffer=ce===void 0,re.__autoAllocateDepthBuffer||_t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(F,J){const ce=Xe.get(F);ce.__webglFramebuffer=J,ce.__useDefaultFramebuffer=J===void 0};const bc=X.createFramebuffer();this.setRenderTarget=function(F,J=0,ce=0){P=F,N=J,D=ce;let re=!0,te=null,Ee=!1,De=!1;if(F){const Ve=Xe.get(F);if(Ve.__useDefaultFramebuffer!==void 0)Ze.bindFramebuffer(X.FRAMEBUFFER,null),re=!1;else if(Ve.__webglFramebuffer===void 0)k.setupRenderTarget(F);else if(Ve.__hasExternalTextures)k.rebindTextures(F,Xe.get(F.texture).__webglTexture,Xe.get(F.depthTexture).__webglTexture);else if(F.depthBuffer){const Ge=F.depthTexture;if(Ve.__boundDepthTexture!==Ge){if(Ge!==null&&Xe.has(Ge)&&(F.width!==Ge.image.width||F.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(F)}}const it=F.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(De=!0);const tt=Xe.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(Array.isArray(tt[J])?te=tt[J][ce]:te=tt[J],Ee=!0):F.samples>0&&k.useMultisampledRTT(F)===!1?te=Xe.get(F).__webglMultisampledFramebuffer:Array.isArray(tt)?te=tt[ce]:te=tt,U.copy(F.viewport),z.copy(F.scissor),H=F.scissorTest}else U.copy(O).multiplyScalar(V).floor(),z.copy(Z).multiplyScalar(V).floor(),H=Ae;if(ce!==0&&(te=bc),Ze.bindFramebuffer(X.FRAMEBUFFER,te)&&re&&Ze.drawBuffers(F,te),Ze.viewport(U),Ze.scissor(z),Ze.setScissorTest(H),Ee){const Ve=Xe.get(F.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ve.__webglTexture,ce)}else if(De){const Ve=Xe.get(F.texture),it=J;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ve.__webglTexture,ce,it)}else if(F!==null&&ce!==0){const Ve=Xe.get(F.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Ve.__webglTexture,ce)}T=-1},this.readRenderTargetPixels=function(F,J,ce,re,te,Ee,De){if(!(F&&F.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Xe.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&De!==void 0&&(Fe=Fe[De]),Fe){Ze.bindFramebuffer(X.FRAMEBUFFER,Fe);try{const Ve=F.texture,it=Ve.format,tt=Ve.type;if(!pt.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pt.textureTypeReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=F.width-re&&ce>=0&&ce<=F.height-te&&X.readPixels(J,ce,re,te,st.convert(it),st.convert(tt),Ee)}finally{const Ve=P!==null?Xe.get(P).__webglFramebuffer:null;Ze.bindFramebuffer(X.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(F,J,ce,re,te,Ee,De){if(!(F&&F.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=Xe.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&De!==void 0&&(Fe=Fe[De]),Fe){const Ve=F.texture,it=Ve.format,tt=Ve.type;if(!pt.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pt.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(J>=0&&J<=F.width-re&&ce>=0&&ce<=F.height-te){Ze.bindFramebuffer(X.FRAMEBUFFER,Fe);const Ge=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Ge),X.bufferData(X.PIXEL_PACK_BUFFER,Ee.byteLength,X.STREAM_READ),X.readPixels(J,ce,re,te,st.convert(it),st.convert(tt),0);const St=P!==null?Xe.get(P).__webglFramebuffer:null;Ze.bindFramebuffer(X.FRAMEBUFFER,St);const at=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await KE(X,at,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Ge),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Ee),X.deleteBuffer(Ge),X.deleteSync(at),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(F,J=null,ce=0){F.isTexture!==!0&&(Aa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),J=arguments[0]||null,F=arguments[1]);const re=Math.pow(2,-ce),te=Math.floor(F.image.width*re),Ee=Math.floor(F.image.height*re),De=J!==null?J.x:0,Fe=J!==null?J.y:0;k.setTexture2D(F,0),X.copyTexSubImage2D(X.TEXTURE_2D,ce,0,0,De,Fe,te,Ee),Ze.unbindTexture()};const Rc=X.createFramebuffer(),Pc=X.createFramebuffer();this.copyTextureToTexture=function(F,J,ce=null,re=null,te=0,Ee=null){F.isTexture!==!0&&(Aa("WebGLRenderer: copyTextureToTexture function signature has changed."),re=arguments[0]||null,F=arguments[1],J=arguments[2],Ee=arguments[3]||0,ce=null),Ee===null&&(te!==0?(Aa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=te,te=0):Ee=0);let De,Fe,Ve,it,tt,Ge,St,at,Kt;const Vt=F.isCompressedTexture?F.mipmaps[Ee]:F.image;if(ce!==null)De=ce.max.x-ce.min.x,Fe=ce.max.y-ce.min.y,Ve=ce.isBox3?ce.max.z-ce.min.z:1,it=ce.min.x,tt=ce.min.y,Ge=ce.isBox3?ce.min.z:0;else{const yn=Math.pow(2,-te);De=Math.floor(Vt.width*yn),Fe=Math.floor(Vt.height*yn),F.isDataArrayTexture?Ve=Vt.depth:F.isData3DTexture?Ve=Math.floor(Vt.depth*yn):Ve=1,it=0,tt=0,Ge=0}re!==null?(St=re.x,at=re.y,Kt=re.z):(St=0,at=0,Kt=0);const Et=st.convert(J.format),Ke=st.convert(J.type);let Qt;J.isData3DTexture?(k.setTexture3D(J,0),Qt=X.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(k.setTexture2DArray(J,0),Qt=X.TEXTURE_2D_ARRAY):(k.setTexture2D(J,0),Qt=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,J.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,J.unpackAlignment);const vt=X.getParameter(X.UNPACK_ROW_LENGTH),Nn=X.getParameter(X.UNPACK_IMAGE_HEIGHT),as=X.getParameter(X.UNPACK_SKIP_PIXELS),$n=X.getParameter(X.UNPACK_SKIP_ROWS),br=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,Vt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Vt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,it),X.pixelStorei(X.UNPACK_SKIP_ROWS,tt),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Ge);const Lt=F.isDataArrayTexture||F.isData3DTexture,In=J.isDataArrayTexture||J.isData3DTexture;if(F.isDepthTexture){const yn=Xe.get(F),bn=Xe.get(J),xn=Xe.get(yn.__renderTarget),Tt=Xe.get(bn.__renderTarget);Ze.bindFramebuffer(X.READ_FRAMEBUFFER,xn.__webglFramebuffer),Ze.bindFramebuffer(X.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let lr=0;lr<Ve;lr++)Lt&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Xe.get(F).__webglTexture,te,Ge+lr),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Xe.get(J).__webglTexture,Ee,Kt+lr)),X.blitFramebuffer(it,tt,De,Fe,St,at,De,Fe,X.DEPTH_BUFFER_BIT,X.NEAREST);Ze.bindFramebuffer(X.READ_FRAMEBUFFER,null),Ze.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(te!==0||F.isRenderTargetTexture||Xe.has(F)){const yn=Xe.get(F),bn=Xe.get(J);Ze.bindFramebuffer(X.READ_FRAMEBUFFER,Rc),Ze.bindFramebuffer(X.DRAW_FRAMEBUFFER,Pc);for(let xn=0;xn<Ve;xn++)Lt?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,yn.__webglTexture,te,Ge+xn):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,yn.__webglTexture,te),In?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,bn.__webglTexture,Ee,Kt+xn):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,bn.__webglTexture,Ee),te!==0?X.blitFramebuffer(it,tt,De,Fe,St,at,De,Fe,X.COLOR_BUFFER_BIT,X.NEAREST):In?X.copyTexSubImage3D(Qt,Ee,St,at,Kt+xn,it,tt,De,Fe):X.copyTexSubImage2D(Qt,Ee,St,at,it,tt,De,Fe);Ze.bindFramebuffer(X.READ_FRAMEBUFFER,null),Ze.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else In?F.isDataTexture||F.isData3DTexture?X.texSubImage3D(Qt,Ee,St,at,Kt,De,Fe,Ve,Et,Ke,Vt.data):J.isCompressedArrayTexture?X.compressedTexSubImage3D(Qt,Ee,St,at,Kt,De,Fe,Ve,Et,Vt.data):X.texSubImage3D(Qt,Ee,St,at,Kt,De,Fe,Ve,Et,Ke,Vt):F.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Ee,St,at,De,Fe,Et,Ke,Vt.data):F.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Ee,St,at,Vt.width,Vt.height,Et,Vt.data):X.texSubImage2D(X.TEXTURE_2D,Ee,St,at,De,Fe,Et,Ke,Vt);X.pixelStorei(X.UNPACK_ROW_LENGTH,vt),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Nn),X.pixelStorei(X.UNPACK_SKIP_PIXELS,as),X.pixelStorei(X.UNPACK_SKIP_ROWS,$n),X.pixelStorei(X.UNPACK_SKIP_IMAGES,br),Ee===0&&J.generateMipmaps&&X.generateMipmap(Qt),Ze.unbindTexture()},this.copyTextureToTexture3D=function(F,J,ce=null,re=null,te=0){return F.isTexture!==!0&&(Aa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ce=arguments[0]||null,re=arguments[1]||null,F=arguments[2],J=arguments[3],te=arguments[4]||0),Aa('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(F,J,ce,re,te)},this.initRenderTarget=function(F){Xe.get(F).__webglFramebuffer===void 0&&k.setupRenderTarget(F)},this.initTexture=function(F){F.isCubeTexture?k.setTextureCube(F,0):F.isData3DTexture?k.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?k.setTexture2DArray(F,0):k.setTexture2D(F,0),Ze.unbindTexture()},this.resetState=function(){N=0,D=0,P=null,Ze.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $r}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=bt._getUnpackColorSpace()}}const $e={luminance:{base:.08,min:0,max:1},distortion:{intensity:.05,min:0,max:1},aberration:{intensity:3,min:0,max:10},scanlines:{intensity:.3,count:100,speed:2,intensityLimits:{min:0,max:1},countLimits:{min:50,max:300},speedLimits:{min:0,max:5}},glow:{radius:.35,intensity:.8,persistence:.7,radiusLimits:{min:0,max:5},intensityLimits:{min:0,max:1},persistenceLimits:{min:0,max:.95}}},Wr=(r,e,t)=>{if(r!==void 0)return Math.max(e,Math.min(t,r))},xR={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Of{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const SR=new zm(-1,1,1,-1,0,1);class MR extends vi{constructor(){super(),this.setAttribute("position",new Xt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Xt([0,2,0,0,2,0],2))}}const ER=new MR;class wR{constructor(e){this._mesh=new ui(ER,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,SR)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class So extends Of{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof rr?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ax.clone(e.uniforms),this.material=new rr({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new wR(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Kv extends Of{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let c,l;this.inverse?(c=0,l=1):(c=1,l=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.buffers.stencil.setFunc(s.ALWAYS,c,4294967295),a.buffers.stencil.setClear(l),a.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(s.EQUAL,1,4294967295),a.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.buffers.stencil.setLocked(!0)}}class TR extends Of{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class CR{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new ft);this._width=n.width,this._height=n.height,t=new ir(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:el}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new So(xR),this.copyPass.material.blending=Zr,this.clock=new Bm}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,a=this.passes.length;s<a;s++){const c=this.passes[s];if(c.enabled!==!1){if(c.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),c.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),c.needsSwap){if(n){const l=this.renderer.getContext(),f=this.renderer.state.buffers.stencil;f.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),f.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}Kv!==void 0&&(c instanceof Kv?n=!0:c instanceof TR&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ft);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class AR extends Of{constructor(e,t,n=null,s=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ht}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let a,c;this.overrideMaterial!==null&&(c=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=c),e.autoClear=s}}const wa=`
    varying vec2 vUv;

    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`,bR=`
    uniform sampler2D tDiffuse;
    uniform float luminanceBase;
    uniform float time;
    varying vec2 vUv;

    // Fonction random pour l'interférence magnétique
    float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
    }

    void main() {
        // Déformation horizontale combinée
        vec2 uv = vUv;
        float warpIntensity = sin(uv.x * 150.0 + time * 10.0) * 0.0001;
        warpIntensity += sin(uv.x * 100.0 + time * 8.0) * 0.0005; // Ajout d'une seconde fréquence
        uv.y += warpIntensity;

        // Effet de vignettage
        vec2 center = vUv - 0.5;
        float vignette = 1.0 - dot(center, center) * 1.2;
        vignette = smoothstep(0.0, 1.0, vignette);

        vec4 texel = texture2D(tDiffuse, uv);
        
        // Ajustement du contraste
        vec3 color = max(texel.rgb, vec3(luminanceBase));
        color = pow(color, vec3(1.1)); // Augmente légèrement le contraste

        // Teinte phosphore renforcée (combinaison des deux effets)
        vec3 phosphorTint = vec3(0.7, 1.3, 0.8);
        color *= phosphorTint;

        // Application du vignettage et boost de luminosité
        color *= vignette;
        color *= 1.0 + (vignette * 0.4);

        // Boost du glow vert
        color.g *= 1.2;

        // Variation des scanlines avec jitter
        float scanJitter = sin(uv.y * 800.0 + time * 5.0) * 0.0005;
        float scanline = 1.0 - smoothstep(0.499, 0.501, fract(uv.y * 240.0 + scanJitter));
        // Atténuation légère des scanlines pour ne pas trop assombrir
        scanline = mix(1.0, scanline, 0.65);
        color *= scanline;

        // Effet d'interférence magnétique
        vec2 noiseUv = vUv + vec2(time * 0.1, 0.0); // Déplacement temporel du bruit
        float interference = random(noiseUv) * 0.03;
        color.rgb += interference;

        gl_FragColor = vec4(color, texel.a);
    }
`,RR=`
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
`,PR=`
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
`,DR=`
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
`,NR=`
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
`,IR=`
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
`;class LR{constructor(e){this.renderer=new yR({canvas:e,antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.enabledPasses={luminance:!0,distortion:!0,aberration:!0,scanlines:!0,glow:!0},this.composer=null,this.renderScene=null,this.luminancePass=null,this.distortionPass=null,this.chromaticAberrationPass=null,this.scanlinesPass=null,this.glowHorizontalPass=null,this.glowVerticalPass=null,this.renderTarget=null,this.persistenceTarget=null,this.clock=new Bm,this.persistenceTargets=[null,null],this.currentPersistenceTarget=0,this.pingPongQuad=new ui(new es(2,2),new sc({transparent:!0})),this.pingPongQuad.frustumCulled=!1,this.pingPongCamera=new zm(-1,1,1,-1,-1,1),this.pingPongScene=new ux,this.pingPongScene.add(this.pingPongQuad),this.startTime=performance.now()}init(e,t){performance.mark("init-render-start"),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.outputEncoding=void 0;const n={minFilter:Tn,magFilter:Tn,format:Ai,encoding:void 0,samples:0},s={type:_r,minFilter:Tn,magFilter:Tn,format:Ai,encoding:void 0,samples:0};this.renderTarget=new ir(window.innerWidth,window.innerHeight,n),this.persistenceTargets[0]=new ir(window.innerWidth*.5,window.innerHeight*.5,s),this.persistenceTargets[1]=new ir(window.innerWidth*.5,window.innerHeight*.5,s),this.composer=new CR(this.renderer,this.renderTarget),this.renderScene=new AR(e,t),this.composer.addPass(this.renderScene);const a={uniforms:{tDiffuse:{value:null},luminanceBase:{value:$e.luminance.base},time:{value:0}},vertexShader:wa,fragmentShader:bR};this.luminancePass=new So(a),this.composer.addPass(this.luminancePass);const c={uniforms:{tDiffuse:{value:null},distortionIntensity:{value:$e.distortion.intensity},resolution:{value:new ft(window.innerWidth,window.innerHeight)}},vertexShader:wa,fragmentShader:RR};this.distortionPass=new So(c),this.composer.addPass(this.distortionPass);const l={uniforms:{tDiffuse:{value:null},aberrationIntensity:{value:$e.aberration.intensity}},vertexShader:wa,fragmentShader:PR};this.chromaticAberrationPass=new So(l),this.composer.addPass(this.chromaticAberrationPass);const f={uniforms:{tDiffuse:{value:null},time:{value:0},resolution:{value:new ft(window.innerWidth,window.innerHeight)},scanlineIntensity:{value:$e.scanlines.intensity},scanlineCount:{value:$e.scanlines.count},scanlineSpeed:{value:$e.scanlines.speed}},vertexShader:wa,fragmentShader:DR};this.scanlinesPass=new So(f),this.composer.addPass(this.scanlinesPass);const d={uniforms:{tDiffuse:{value:null},glowRadius:{value:$e.glow.radius},glowIntensity:{value:$e.glow.intensity},resolution:{value:new ft(window.innerWidth*.5,window.innerHeight*.5)}},vertexShader:wa,fragmentShader:NR};this.glowHorizontalPass=new So(d),this.composer.addPass(this.glowHorizontalPass);const h={uniforms:{tDiffuse:{value:null},tPersistence:{value:this.persistenceTargets[0].texture},glowRadius:{value:$e.glow.radius},glowIntensity:{value:$e.glow.intensity},persistence:{value:$e.glow.persistence},resolution:{value:new ft(window.innerWidth*.5,window.innerHeight*.5)}},vertexShader:wa,fragmentShader:IR};this.glowVerticalPass=new So(h),this.composer.addPass(this.glowVerticalPass),performance.mark("init-render-end"),performance.measure("Renderer Init","init-render-start","init-render-end")}setLuminance(e){if(this.luminancePass){const{min:t,max:n}=$e.luminance;this.luminancePass.uniforms.luminanceBase.value=Wr(e,t,n)}}setDistortion(e){if(this.distortionPass){const{min:t,max:n}=$e.distortion;this.distortionPass.uniforms.distortionIntensity.value=Wr(e,t,n)}}setAberration(e){if(this.chromaticAberrationPass){const{min:t,max:n}=$e.aberration;this.chromaticAberrationPass.uniforms.aberrationIntensity.value=Wr(e,t,n)}}setScanlines(e,t,n){if(this.scanlinesPass){const{intensityLimits:s,countLimits:a,speedLimits:c}=$e.scanlines;e!==void 0&&(this.scanlinesPass.uniforms.scanlineIntensity.value=Wr(e,s.min,s.max)),t!==void 0&&(this.scanlinesPass.uniforms.scanlineCount.value=Wr(t,a.min,a.max)),n!==void 0&&(this.scanlinesPass.uniforms.scanlineSpeed.value=Wr(n,c.min,c.max))}}setGlow(e,t,n){if(this.glowHorizontalPass&&this.glowVerticalPass){const{radiusLimits:s,intensityLimits:a,persistenceLimits:c}=$e.glow;if(e!==void 0){const l=Wr(e,s.min,s.max);this.glowHorizontalPass.uniforms.glowRadius.value=l,this.glowVerticalPass.uniforms.glowRadius.value=l}if(t!==void 0){const l=Wr(t,a.min,a.max);this.glowHorizontalPass.uniforms.glowIntensity.value=l,this.glowVerticalPass.uniforms.glowIntensity.value=l}n!==void 0&&(this.glowVerticalPass.uniforms.persistence.value=Wr(n,c.min,c.max))}}render(){this.composer&&(this.luminancePass&&(this.luminancePass.enabled=this.enabledPasses.luminance),this.distortionPass&&(this.distortionPass.enabled=this.enabledPasses.distortion),this.chromaticAberrationPass&&(this.chromaticAberrationPass.enabled=this.enabledPasses.aberration),this.scanlinesPass&&(this.scanlinesPass.enabled=this.enabledPasses.scanlines),this.glowHorizontalPass&&(this.glowHorizontalPass.enabled=this.enabledPasses.glow),this.glowVerticalPass&&(this.glowVerticalPass.enabled=this.enabledPasses.glow),this.scanlinesPass&&this.enabledPasses.scanlines&&(this.scanlinesPass.uniforms.time.value=this.clock.getElapsedTime()),this.glowVerticalPass&&this.enabledPasses.glow&&(this.glowVerticalPass.uniforms.tPersistence.value=this.persistenceTargets[this.currentPersistenceTarget].texture),this.updateTimeUniforms(),this.composer.render(),this.renderer.setRenderTarget(this.persistenceTargets[1-this.currentPersistenceTarget]),this.renderer.clear(),this.pingPongQuad.material.map=this.composer.renderTarget2.texture,this.pingPongQuad.material.needsUpdate=!0,this.renderer.render(this.pingPongScene,this.pingPongCamera),this.pingPongQuad.material.map=this.persistenceTargets[this.currentPersistenceTarget].texture,this.renderer.render(this.pingPongScene,this.pingPongCamera),this.currentPersistenceTarget=1-this.currentPersistenceTarget,this.renderer.setRenderTarget(null),this.composer.render())}updateTimeUniforms(){const e=this.clock.getElapsedTime();this.luminancePass&&(this.luminancePass.uniforms.time.value=e)}setSize(e,t){this.renderer.setSize(e,t);const n=new ft(e,t);this.renderTarget&&this.renderTarget.setSize(e,t),this.persistenceTargets[0]&&this.persistenceTargets[0].setSize(e,t),this.persistenceTargets[1]&&this.persistenceTargets[1].setSize(e,t),this.composer&&this.composer.setSize(e,t),this.distortionPass&&this.distortionPass.uniforms.resolution.value.copy(n),this.scanlinesPass&&this.scanlinesPass.uniforms.resolution.value.copy(n),this.glowHorizontalPass&&this.glowHorizontalPass.uniforms.resolution.value.copy(n),this.glowVerticalPass&&this.glowVerticalPass.uniforms.resolution.value.copy(n)}dispose(){const t=performance.now()-this.startTime;console.log(`Total renderer lifetime: ${t}ms`),this.renderTarget&&this.renderTarget.dispose(),this.persistenceTargets[0]&&this.persistenceTargets[0].dispose(),this.persistenceTargets[1]&&this.persistenceTargets[1].dispose(),this.composer&&(this.composer.renderTarget1.dispose(),this.composer.renderTarget2.dispose()),this.pingPongQuad&&(this.pingPongQuad.geometry.dispose(),this.pingPongQuad.material.dispose()),this.renderer.dispose()}}const Bn=({label:r,value:e,onChange:t,min:n,max:s,step:a=.01})=>_e.jsxs("div",{className:"mb-4",children:[_e.jsxs("div",{className:"flex justify-between mb-1",children:[_e.jsx("label",{className:"text-sm text-white",children:r}),_e.jsx("span",{className:"text-sm text-gray-300",children:e.toFixed(2)})]}),_e.jsx("input",{type:"range",value:e,onChange:c=>t(parseFloat(c.target.value)),min:n,max:s,step:a,className:"w-full"})]}),ql=({title:r,children:e})=>_e.jsxs("div",{className:"mb-6",children:[_e.jsx("h3",{className:"text-lg font-semibold mb-3 text-white",children:r}),e]}),FR=({renderer:r,enabledPasses:e,onTogglePass:t})=>{const[n,s]=Na.useState("base"),[a,c]=Na.useState({luminance:$e.luminance.base,distortion:$e.distortion.intensity,aberration:$e.aberration.intensity,scanlines:{intensity:$e.scanlines.intensity,count:$e.scanlines.count,speed:$e.scanlines.speed},glow:{radius:$e.glow.radius,intensity:$e.glow.intensity,persistence:$e.glow.persistence}});Na.useEffect(()=>{const g=()=>{var S,M,x,v,R,b,w,C,N;c({luminance:((S=r.luminancePass)==null?void 0:S.uniforms.luminanceBase.value)??$e.luminance.base,distortion:((M=r.distortionPass)==null?void 0:M.uniforms.distortionIntensity.value)??$e.distortion.intensity,aberration:((x=r.chromaticAberrationPass)==null?void 0:x.uniforms.aberrationIntensity.value)??$e.aberration.intensity,scanlines:{intensity:((v=r.scanlinesPass)==null?void 0:v.uniforms.scanlineIntensity.value)??$e.scanlines.intensity,count:((R=r.scanlinesPass)==null?void 0:R.uniforms.scanlineCount.value)??$e.scanlines.count,speed:((b=r.scanlinesPass)==null?void 0:b.uniforms.scanlineSpeed.value)??$e.scanlines.speed},glow:{radius:((w=r.glowHorizontalPass)==null?void 0:w.uniforms.glowRadius.value)??$e.glow.radius,intensity:((C=r.glowHorizontalPass)==null?void 0:C.uniforms.glowIntensity.value)??$e.glow.intensity,persistence:((N=r.glowVerticalPass)==null?void 0:N.uniforms.persistence.value)??$e.glow.persistence}})},_=requestAnimationFrame(function S(){g(),requestAnimationFrame(S)});return()=>cancelAnimationFrame(_)},[r]);const l=g=>{r.setLuminance(g)},f=g=>{r.setDistortion(g)},d=g=>{r.setAberration(g)},h=(g,_)=>{var M,x,v;const S={intensity:((M=r.scanlinesPass)==null?void 0:M.uniforms.scanlineIntensity.value)??$e.scanlines.intensity,count:((x=r.scanlinesPass)==null?void 0:x.uniforms.scanlineCount.value)??$e.scanlines.count,speed:((v=r.scanlinesPass)==null?void 0:v.uniforms.scanlineSpeed.value)??$e.scanlines.speed};r.setScanlines(g==="intensity"?_:S.intensity,g==="count"?_:S.count,g==="speed"?_:S.speed)},m=(g,_)=>{var M,x,v;const S={radius:((M=r.glowHorizontalPass)==null?void 0:M.uniforms.glowRadius.value)??$e.glow.radius,intensity:((x=r.glowHorizontalPass)==null?void 0:x.uniforms.glowIntensity.value)??$e.glow.intensity,persistence:((v=r.glowVerticalPass)==null?void 0:v.uniforms.persistence.value)??$e.glow.persistence};r.setGlow(g==="radius"?_:S.radius,g==="intensity"?_:S.intensity,g==="persistence"?_:S.persistence)};return _e.jsxs("div",{className:"w-80 bg-gray-900/95 backdrop-blur-xl rounded-xl p-4 shadow-2xl border border-cyan-electric/30 overflow-auto max-h-[calc(100vh-10rem)]",children:[_e.jsx("h2",{className:"text-xl font-bold mb-4 text-white",children:"Effect Controls"}),_e.jsxs("div",{className:"flex mb-4 bg-gray-900 rounded overflow-hidden",children:[_e.jsx("button",{className:`flex-1 py-2 ${n==="base"?"bg-blue-600 text-white":"text-gray-300"}`,onClick:()=>s("base"),children:"Base"}),_e.jsx("button",{className:`flex-1 py-2 ${n==="scanlines"?"bg-blue-600 text-white":"text-gray-300"}`,onClick:()=>s("scanlines"),children:"Scanlines"}),_e.jsx("button",{className:`flex-1 py-2 ${n==="glow"?"bg-blue-600 text-white":"text-gray-300"}`,onClick:()=>s("glow"),children:"Glow"})]}),n==="base"&&_e.jsxs(_e.Fragment,{children:[_e.jsxs(ql,{title:"Luminance",children:[_e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[_e.jsx("span",{className:"text-sm text-white",children:"Enabled"}),_e.jsx("input",{type:"checkbox",checked:e.luminance,onChange:g=>t("luminance",g.target.checked),className:"w-4 h-4"})]}),_e.jsx(Bn,{label:"Base",value:a.luminance,onChange:l,min:$e.luminance.min,max:$e.luminance.max})]}),_e.jsxs(ql,{title:"Distortion",children:[_e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[_e.jsx("span",{className:"text-sm text-white",children:"Enabled"}),_e.jsx("input",{type:"checkbox",checked:e.distortion,onChange:g=>t("distortion",g.target.checked),className:"w-4 h-4"})]}),_e.jsx(Bn,{label:"Intensity",value:a.distortion,onChange:f,min:$e.distortion.min,max:$e.distortion.max})]}),_e.jsxs(ql,{title:"Chromatic Aberration",children:[_e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[_e.jsx("span",{className:"text-sm text-white",children:"Enabled"}),_e.jsx("input",{type:"checkbox",checked:e.aberration,onChange:g=>t("aberration",g.target.checked),className:"w-4 h-4"})]}),_e.jsx(Bn,{label:"Intensity",value:a.aberration,onChange:d,min:$e.aberration.min,max:$e.aberration.max})]})]}),n==="scanlines"&&_e.jsxs(ql,{title:"Scanlines",children:[_e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[_e.jsx("span",{className:"text-sm text-white",children:"Enabled"}),_e.jsx("input",{type:"checkbox",checked:e.scanlines,onChange:g=>t("scanlines",g.target.checked),className:"w-4 h-4"})]}),_e.jsxs("div",{className:"space-y-4",children:[_e.jsx(Bn,{label:"Intensity",value:a.scanlines.intensity,onChange:g=>h("intensity",g),min:$e.scanlines.intensityLimits.min,max:$e.scanlines.intensityLimits.max}),_e.jsx(Bn,{label:"Count",value:a.scanlines.count,onChange:g=>h("count",g),min:$e.scanlines.countLimits.min,max:$e.scanlines.countLimits.max,step:1}),_e.jsx(Bn,{label:"Speed",value:a.scanlines.speed,onChange:g=>h("speed",g),min:$e.scanlines.speedLimits.min,max:$e.scanlines.speedLimits.max})]})]}),n==="glow"&&_e.jsxs(ql,{title:"Glow",children:[_e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[_e.jsx("span",{className:"text-sm text-white",children:"Enabled"}),_e.jsx("input",{type:"checkbox",checked:e.glow,onChange:g=>t("glow",g.target.checked),className:"w-4 h-4"})]}),_e.jsxs("div",{className:"space-y-4",children:[_e.jsx(Bn,{label:"Radius",value:a.glow.radius,onChange:g=>m("radius",g),min:$e.glow.radiusLimits.min,max:$e.glow.radiusLimits.max}),_e.jsx(Bn,{label:"Intensity",value:a.glow.intensity,onChange:g=>m("intensity",g),min:$e.glow.intensityLimits.min,max:$e.glow.intensityLimits.max}),_e.jsx(Bn,{label:"Persistence",value:a.glow.persistence,onChange:g=>m("persistence",g),min:$e.glow.persistenceLimits.min,max:$e.glow.persistenceLimits.max})]})]})]})};class UR{constructor(e=1024,t=1024){this.canvas=document.createElement("canvas"),this.canvas.width=e,this.canvas.height=t,this.ctx=this.canvas.getContext("2d"),this.fontSize=24,this.lineHeight=1.5,this.padding=160,this.color="#00ff00",this.clear(),this.ctx.globalCompositeOperation="source-over",this.ctx.fillStyle="rgba(0, 0, 0, 0)",this.ctx.fillRect(0,0,this.width,this.height)}clear(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}setFont(e=24){this.fontSize=e,this.ctx.font=`${e}px monospace`}setColor(e="#00ff00"){this.color=e,this.ctx.fillStyle=e}renderText(e){this.clear(),this.ctx.fillStyle=this.color,this.ctx.font=`${this.fontSize}px monospace`;const t=e.split(" ");let n="",s=this.fontSize+this.padding;const a=this.canvas.width-this.padding*2;for(let c of t){if(c.includes(`
`)){const d=c.split(`
`);for(let h=0;h<d.length;h++){if(h===0){const m=n+(n?" ":"")+d[h];if(this.ctx.measureText(m).width<a){n=m;continue}}n&&(this.ctx.fillText(n,this.padding,s),s+=this.fontSize*this.lineHeight,n=""),h<d.length-1?(this.ctx.fillText(d[h],this.padding,s),s+=this.fontSize*this.lineHeight):n=d[h]}continue}const l=n+(n?" ":"")+c;this.ctx.measureText(l).width>a&&n?(this.ctx.fillText(n,this.padding,s),n=c,s+=this.fontSize*this.lineHeight):n=l}n&&this.ctx.fillText(n,this.padding,s),this.ctx.fillStyle="rgba(0, 0, 0, 0)",Math.random()<.02&&(this.ctx.fillStyle="#fff",this.ctx.fillRect(this.padding+Math.random()*(this.canvas.width-this.padding*2),s+Math.random()*10,1,1)),this.ctx.fillText("_",this.padding+this.ctx.measureText(n).width+10,s)}}class OR{constructor(e=10,t=10){this.textRenderer=new UR,this.texture=new dx(this.textRenderer.canvas),this.texture.needsUpdate=!0,this.material=new Tw({map:this.texture,transparent:!0,emissive:16777215,emissiveMap:this.texture,emissiveIntensity:.8}),this.geometry=new es(e,t,32,32);const n=this.geometry.getAttribute("position"),s=new se;for(let a=0;a<n.count;a++)s.fromBufferAttribute(n,a),s.z+=Math.pow(s.x/(e/2),2)*.2,n.setXYZ(a,s.x,s.y,s.z);this.geometry.computeVertexNormals(),this.mesh=new ui(this.geometry,this.material),this.lastUpdate=Date.now()}updateText(e){this.textRenderer.renderText(e),this.texture.needsUpdate=!0}update(){const e=Date.now();(e-this.lastUpdate)/1e3,this.material.emissiveIntensity=.8+Math.sin(e*.002)*.1,this.lastUpdate=e}setPosition(e,t,n){this.mesh.position.set(e,t,n)}dispose(){this.geometry.dispose(),this.material.dispose(),this.texture.dispose()}}const rp=[`// Format un peu particulier pour cette candidature...
  // Appuyez sur F11, c'est mieux en plein écran :)
// Appuyez sur Entrée pour avancer dans le texte
// Activez le son pour la musique et les effets visuels !

// J'ai voulu rendre hommage à l'esthétique des vieux terminaux
// et à la scène underground.
// Les particules à droite réagissent au son ;)
// Les effets rétro sont désactivables en cliquant sur le bouton debug
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
[SEE YOU SOON :)]`];function qr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function xx(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Pi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},qa={duration:.5,overwrite:!1,delay:0},Hm,Dn,Wt,xr=1e8,Hn=1/xr,tm=Math.PI*2,kR=tm/4,zR=0,Sx=Math.sqrt,BR=Math.cos,VR=Math.sin,Cn=function(e){return typeof e=="string"},tn=function(e){return typeof e=="function"},ts=function(e){return typeof e=="number"},Gm=function(e){return typeof e>"u"},Er=function(e){return typeof e=="object"},di=function(e){return e!==!1},Wm=function(){return typeof window<"u"},nf=function(e){return tn(e)||Cn(e)},Mx=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Wn=Array.isArray,nm=/(?:-?\.?\d|\.)+/gi,Ex=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ra=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,sp=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,wx=/[+-]=-?[.\d]+/,Tx=/[^,'"\[\]\s]+/gi,HR=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Yt,hr,im,Xm,Di={},yf={},Cx,Ax=function(e){return(yf=ja(e,Di))&&_i},qm=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},oc=function(e,t){return!t&&console.warn(e)},bx=function(e,t){return e&&(Di[e]=t)&&yf&&(yf[e]=t)||Di},ac=function(){return 0},GR={suppressEvents:!0,isStart:!0,kill:!1},df={suppressEvents:!0,kill:!1},WR={suppressEvents:!0},jm={},Bs=[],rm={},Rx,Ti={},op={},Qv=30,hf=[],Ym="",$m=function(e){var t=e[0],n,s;if(Er(t)||tn(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(s=hf.length;s--&&!hf[s].targetTest(t););n=hf[s]}for(s=e.length;s--;)e[s]&&(e[s]._gsap||(e[s]._gsap=new Jx(e[s],n)))||e.splice(s,1);return e},bo=function(e){return e._gsap||$m(Wi(e))[0]._gsap},Px=function(e,t,n){return(n=e[t])&&tn(n)?e[t]():Gm(n)&&e.getAttribute&&e.getAttribute(t)||n},hi=function(e,t){return(e=e.split(",")).forEach(t)||e},sn=function(e){return Math.round(e*1e5)/1e5||0},dn=function(e){return Math.round(e*1e7)/1e7||0},Ua=function(e,t){var n=t.charAt(0),s=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+s:n==="-"?e-s:n==="*"?e*s:e/s},XR=function(e,t){for(var n=t.length,s=0;e.indexOf(t[s])<0&&++s<n;);return s<n},xf=function(){var e=Bs.length,t=Bs.slice(0),n,s;for(rm={},Bs.length=0,n=0;n<e;n++)s=t[n],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},Dx=function(e,t,n,s){Bs.length&&!Dn&&xf(),e.render(t,n,Dn&&t<0&&(e._initted||e._startAt)),Bs.length&&!Dn&&xf()},Nx=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Tx).length<2?t:Cn(e)?e.trim():e},Ix=function(e){return e},Ni=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},qR=function(e){return function(t,n){for(var s in n)s in t||s==="duration"&&e||s==="ease"||(t[s]=n[s])}},ja=function(e,t){for(var n in t)e[n]=t[n];return e},Jv=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Er(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Sf=function(e,t){var n={},s;for(s in e)s in t||(n[s]=e[s]);return n},ec=function(e){var t=e.parent||Yt,n=e.keyframes?qR(Wn(e.keyframes)):Ni;if(di(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},jR=function(e,t){for(var n=e.length,s=n===t.length;s&&n--&&e[n]===t[n];);return n<0},Lx=function(e,t,n,s,a){var c=e[s],l;if(a)for(l=t[a];c&&c[a]>l;)c=c._prev;return c?(t._next=c._next,c._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[s]=t,t._prev=c,t.parent=t._dp=e,t},kf=function(e,t,n,s){n===void 0&&(n="_first"),s===void 0&&(s="_last");var a=t._prev,c=t._next;a?a._next=c:e[n]===t&&(e[n]=c),c?c._prev=a:e[s]===t&&(e[s]=a),t._next=t._prev=t.parent=null},Gs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ro=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},YR=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},sm=function(e,t,n,s){return e._startAt&&(Dn?e._startAt.revert(df):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,s))},$R=function r(e){return!e||e._ts&&r(e.parent)},ey=function(e){return e._repeat?Ya(e._tTime,e=e.duration()+e._rDelay)*e:0},Ya=function(e,t){var n=Math.floor(e=dn(e/t));return e&&n===e?n-1:n},Mf=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},zf=function(e){return e._end=dn(e._start+(e._tDur/Math.abs(e._ts||e._rts||Hn)||0))},Bf=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=dn(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),zf(e),n._dirty||Ro(n,e)),e},Fx=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Mf(e.rawTime(),t),(!t._dur||gc(0,t.totalDuration(),n)-t._tTime>Hn)&&t.render(n,!0)),Ro(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-1e-8}},gr=function(e,t,n,s){return t.parent&&Gs(t),t._start=dn((ts(n)?n:n||e!==Yt?Bi(e,n,t):e._time)+t._delay),t._end=dn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Lx(e,t,"_first","_last",e._sort?"_start":0),om(t)||(e._recent=t),s||Fx(e,t),e._ts<0&&Bf(e,e._tTime),e},Ux=function(e,t){return(Di.ScrollTrigger||qm("scrollTrigger",t))&&Di.ScrollTrigger.create(t,e)},Ox=function(e,t,n,s,a){if(Km(e,t,a),!e._initted)return 1;if(!n&&e._pt&&!Dn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Rx!==Ci.frame)return Bs.push(e),e._lazy=[a,s],1},ZR=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},om=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},KR=function(e,t,n,s){var a=e.ratio,c=t<0||!t&&(!e._start&&ZR(e)&&!(!e._initted&&om(e))||(e._ts<0||e._dp._ts<0)&&!om(e))?0:1,l=e._rDelay,f=0,d,h,m;if(l&&e._repeat&&(f=gc(0,e._tDur,t),h=Ya(f,l),e._yoyo&&h&1&&(c=1-c),h!==Ya(e._tTime,l)&&(a=1-c,e.vars.repeatRefresh&&e._initted&&e.invalidate())),c!==a||Dn||s||e._zTime===Hn||!t&&e._zTime){if(!e._initted&&Ox(e,t,s,n,f))return;for(m=e._zTime,e._zTime=t||(n?Hn:0),n||(n=t&&!m),e.ratio=c,e._from&&(c=1-c),e._time=0,e._tTime=f,d=e._pt;d;)d.r(c,d.d),d=d._next;t<0&&sm(e,t,n,!0),e._onUpdate&&!n&&bi(e,"onUpdate"),f&&e._repeat&&!n&&e.parent&&bi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===c&&(c&&Gs(e,1),!n&&!Dn&&(bi(e,c?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},QR=function(e,t,n){var s;if(n>t)for(s=e._first;s&&s._start<=n;){if(s.data==="isPause"&&s._start>t)return s;s=s._next}else for(s=e._last;s&&s._start>=n;){if(s.data==="isPause"&&s._start<t)return s;s=s._prev}},$a=function(e,t,n,s){var a=e._repeat,c=dn(t)||0,l=e._tTime/e._tDur;return l&&!s&&(e._time*=c/e._dur),e._dur=c,e._tDur=a?a<0?1e10:dn(c*(a+1)+e._rDelay*a):c,l>0&&!s&&Bf(e,e._tTime=e._tDur*l),e.parent&&zf(e),n||Ro(e.parent,e),e},ty=function(e){return e instanceof ei?Ro(e):$a(e,e._dur)},JR={_start:0,endTime:ac,totalDuration:ac},Bi=function r(e,t,n){var s=e.labels,a=e._recent||JR,c=e.duration()>=xr?a.endTime(!1):e._dur,l,f,d;return Cn(t)&&(isNaN(t)||t in s)?(f=t.charAt(0),d=t.substr(-1)==="%",l=t.indexOf("="),f==="<"||f===">"?(l>=0&&(t=t.replace(/=/,"")),(f==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(t.substr(1))||0)*(d?(l<0?a:n).totalDuration()/100:1)):l<0?(t in s||(s[t]=c),s[t]):(f=parseFloat(t.charAt(l-1)+t.substr(l+1)),d&&n&&(f=f/100*(Wn(n)?n[0]:n).totalDuration()),l>1?r(e,t.substr(0,l-1),n)+f:c+f)):t==null?c:+t},tc=function(e,t,n){var s=ts(t[1]),a=(s?2:1)+(e<2?0:1),c=t[a],l,f;if(s&&(c.duration=t[1]),c.parent=n,e){for(l=c,f=n;f&&!("immediateRender"in l);)l=f.vars.defaults||{},f=di(f.vars.inherit)&&f.parent;c.immediateRender=di(l.immediateRender),e<2?c.runBackwards=1:c.startAt=t[a-1]}return new fn(t[0],c,t[a+1])},Xs=function(e,t){return e||e===0?t(e):t},gc=function(e,t,n){return n<e?e:n>t?t:n},Vn=function(e,t){return!Cn(e)||!(t=HR.exec(e))?"":t[1]},eP=function(e,t,n){return Xs(n,function(s){return gc(e,t,s)})},am=[].slice,kx=function(e,t){return e&&Er(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Er(e[0]))&&!e.nodeType&&e!==hr},tP=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(s){var a;return Cn(s)&&!t||kx(s,1)?(a=n).push.apply(a,Wi(s)):n.push(s)})||n},Wi=function(e,t,n){return Wt&&!t&&Wt.selector?Wt.selector(e):Cn(e)&&!n&&(im||!Za())?am.call((t||Xm).querySelectorAll(e),0):Wn(e)?tP(e,n):kx(e)?am.call(e,0):e?[e]:[]},lm=function(e){return e=Wi(e)[0]||oc("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Wi(t,n.querySelectorAll?n:n===e?oc("Invalid scope")||Xm.createElement("div"):e)}},zx=function(e){return e.sort(function(){return .5-Math.random()})},Bx=function(e){if(tn(e))return e;var t=Er(e)?e:{each:e},n=Po(t.ease),s=t.from||0,a=parseFloat(t.base)||0,c={},l=s>0&&s<1,f=isNaN(s)||l,d=t.axis,h=s,m=s;return Cn(s)?h=m={center:.5,edges:.5,end:1}[s]||0:!l&&f&&(h=s[0],m=s[1]),function(g,_,S){var M=(S||t).length,x=c[M],v,R,b,w,C,N,D,P,T;if(!x){if(T=t.grid==="auto"?0:(t.grid||[1,xr])[1],!T){for(D=-1e8;D<(D=S[T++].getBoundingClientRect().left)&&T<M;);T<M&&T--}for(x=c[M]=[],v=f?Math.min(T,M)*h-.5:s%T,R=T===xr?0:f?M*m/T-.5:s/T|0,D=0,P=xr,N=0;N<M;N++)b=N%T-v,w=R-(N/T|0),x[N]=C=d?Math.abs(d==="y"?w:b):Sx(b*b+w*w),C>D&&(D=C),C<P&&(P=C);s==="random"&&zx(x),x.max=D-P,x.min=P,x.v=M=(parseFloat(t.amount)||parseFloat(t.each)*(T>M?M-1:d?d==="y"?M/T:T:Math.max(T,M/T))||0)*(s==="edges"?-1:1),x.b=M<0?a-M:a,x.u=Vn(t.amount||t.each)||0,n=n&&M<0?Zx(n):n}return M=(x[g]-x.min)/x.max||0,dn(x.b+(n?n(M):M)*x.v)+x.u}},cm=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var s=dn(Math.round(parseFloat(n)/e)*e*t);return(s-s%1)/t+(ts(n)?0:Vn(n))}},Vx=function(e,t){var n=Wn(e),s,a;return!n&&Er(e)&&(s=n=e.radius||xr,e.values?(e=Wi(e.values),(a=!ts(e[0]))&&(s*=s)):e=cm(e.increment)),Xs(t,n?tn(e)?function(c){return a=e(c),Math.abs(a-c)<=s?a:c}:function(c){for(var l=parseFloat(a?c.x:c),f=parseFloat(a?c.y:0),d=xr,h=0,m=e.length,g,_;m--;)a?(g=e[m].x-l,_=e[m].y-f,g=g*g+_*_):g=Math.abs(e[m]-l),g<d&&(d=g,h=m);return h=!s||d<=s?e[h]:c,a||h===c||ts(c)?h:h+Vn(c)}:cm(e))},Hx=function(e,t,n,s){return Xs(Wn(e)?!t:n===!0?!!(n=0):!s,function(){return Wn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(s=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*s)/s})},nP=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(s){return t.reduce(function(a,c){return c(a)},s)}},iP=function(e,t){return function(n){return e(parseFloat(n))+(t||Vn(n))}},rP=function(e,t,n){return Wx(e,t,0,1,n)},Gx=function(e,t,n){return Xs(n,function(s){return e[~~t(s)]})},sP=function r(e,t,n){var s=t-e;return Wn(e)?Gx(e,r(0,e.length),t):Xs(n,function(a){return(s+(a-e)%s)%s+e})},oP=function r(e,t,n){var s=t-e,a=s*2;return Wn(e)?Gx(e,r(0,e.length-1),t):Xs(n,function(c){return c=(a+(c-e)%a)%a||0,e+(c>s?a-c:c)})},lc=function(e){for(var t=0,n="",s,a,c,l;~(s=e.indexOf("random(",t));)c=e.indexOf(")",s),l=e.charAt(s+7)==="[",a=e.substr(s+7,c-s-7).match(l?Tx:nm),n+=e.substr(t,s-t)+Hx(l?a:+a[0],l?0:+a[1],+a[2]||1e-5),t=c+1;return n+e.substr(t,e.length-t)},Wx=function(e,t,n,s,a){var c=t-e,l=s-n;return Xs(a,function(f){return n+((f-e)/c*l||0)})},aP=function r(e,t,n,s){var a=isNaN(e+t)?0:function(_){return(1-_)*e+_*t};if(!a){var c=Cn(e),l={},f,d,h,m,g;if(n===!0&&(s=1)&&(n=null),c)e={p:e},t={p:t};else if(Wn(e)&&!Wn(t)){for(h=[],m=e.length,g=m-2,d=1;d<m;d++)h.push(r(e[d-1],e[d]));m--,a=function(S){S*=m;var M=Math.min(g,~~S);return h[M](S-M)},n=t}else s||(e=ja(Wn(e)?[]:{},e));if(!h){for(f in t)Zm.call(l,e,f,"get",t[f]);a=function(S){return eg(S,l)||(c?e.p:e)}}}return Xs(n,a)},ny=function(e,t,n){var s=e.labels,a=xr,c,l,f;for(c in s)l=s[c]-t,l<0==!!n&&l&&a>(l=Math.abs(l))&&(f=c,a=l);return f},bi=function(e,t,n){var s=e.vars,a=s[t],c=Wt,l=e._ctx,f,d,h;if(a)return f=s[t+"Params"],d=s.callbackScope||e,n&&Bs.length&&xf(),l&&(Wt=l),h=f?a.apply(d,f):a.call(d),Wt=c,h},Zl=function(e){return Gs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Dn),e.progress()<1&&bi(e,"onInterrupt"),e},Pa,Xx=[],qx=function(e){if(e)if(e=!e.name&&e.default||e,Wm()||e.headless){var t=e.name,n=tn(e),s=t&&!n&&e.init?function(){this._props=[]}:e,a={init:ac,render:eg,add:Zm,kill:EP,modifier:MP,rawVars:0},c={targetTest:0,get:0,getSetter:Jm,aliases:{},register:0};if(Za(),e!==s){if(Ti[t])return;Ni(s,Ni(Sf(e,a),c)),ja(s.prototype,ja(a,Sf(e,c))),Ti[s.prop=t]=s,e.targetTest&&(hf.push(s),jm[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}bx(t,s),e.register&&e.register(_i,s,pi)}else Xx.push(e)},Ft=255,Kl={aqua:[0,Ft,Ft],lime:[0,Ft,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ft],navy:[0,0,128],white:[Ft,Ft,Ft],olive:[128,128,0],yellow:[Ft,Ft,0],orange:[Ft,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ft,0,0],pink:[Ft,192,203],cyan:[0,Ft,Ft],transparent:[Ft,Ft,Ft,0]},ap=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ft+.5|0},jx=function(e,t,n){var s=e?ts(e)?[e>>16,e>>8&Ft,e&Ft]:0:Kl.black,a,c,l,f,d,h,m,g,_,S;if(!s){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Kl[e])s=Kl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(a=e.charAt(1),c=e.charAt(2),l=e.charAt(3),e="#"+a+a+c+c+l+l+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return s=parseInt(e.substr(1,6),16),[s>>16,s>>8&Ft,s&Ft,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),s=[e>>16,e>>8&Ft,e&Ft]}else if(e.substr(0,3)==="hsl"){if(s=S=e.match(nm),!t)f=+s[0]%360/360,d=+s[1]/100,h=+s[2]/100,c=h<=.5?h*(d+1):h+d-h*d,a=h*2-c,s.length>3&&(s[3]*=1),s[0]=ap(f+1/3,a,c),s[1]=ap(f,a,c),s[2]=ap(f-1/3,a,c);else if(~e.indexOf("="))return s=e.match(Ex),n&&s.length<4&&(s[3]=1),s}else s=e.match(nm)||Kl.transparent;s=s.map(Number)}return t&&!S&&(a=s[0]/Ft,c=s[1]/Ft,l=s[2]/Ft,m=Math.max(a,c,l),g=Math.min(a,c,l),h=(m+g)/2,m===g?f=d=0:(_=m-g,d=h>.5?_/(2-m-g):_/(m+g),f=m===a?(c-l)/_+(c<l?6:0):m===c?(l-a)/_+2:(a-c)/_+4,f*=60),s[0]=~~(f+.5),s[1]=~~(d*100+.5),s[2]=~~(h*100+.5)),n&&s.length<4&&(s[3]=1),s},Yx=function(e){var t=[],n=[],s=-1;return e.split(Vs).forEach(function(a){var c=a.match(Ra)||[];t.push.apply(t,c),n.push(s+=c.length+1)}),t.c=n,t},iy=function(e,t,n){var s="",a=(e+s).match(Vs),c=t?"hsla(":"rgba(",l=0,f,d,h,m;if(!a)return e;if(a=a.map(function(g){return(g=jx(g,t,1))&&c+(t?g[0]+","+g[1]+"%,"+g[2]+"%,"+g[3]:g.join(","))+")"}),n&&(h=Yx(e),f=n.c,f.join(s)!==h.c.join(s)))for(d=e.replace(Vs,"1").split(Ra),m=d.length-1;l<m;l++)s+=d[l]+(~f.indexOf(l)?a.shift()||c+"0,0,0,0)":(h.length?h:a.length?a:n).shift());if(!d)for(d=e.split(Vs),m=d.length-1;l<m;l++)s+=d[l]+a[l];return s+d[m]},Vs=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Kl)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),lP=/hsl[a]?\(/,$x=function(e){var t=e.join(" "),n;if(Vs.lastIndex=0,Vs.test(t))return n=lP.test(t),e[1]=iy(e[1],n),e[0]=iy(e[0],n,Yx(e[1])),!0},cc,Ci=function(){var r=Date.now,e=500,t=33,n=r(),s=n,a=1e3/240,c=a,l=[],f,d,h,m,g,_,S=function M(x){var v=r()-s,R=x===!0,b,w,C,N;if((v>e||v<0)&&(n+=v-t),s+=v,C=s-n,b=C-c,(b>0||R)&&(N=++m.frame,g=C-m.time*1e3,m.time=C=C/1e3,c+=b+(b>=a?4:a-b),w=1),R||(f=d(M)),w)for(_=0;_<l.length;_++)l[_](C,g,N,x)};return m={time:0,frame:0,tick:function(){S(!0)},deltaRatio:function(x){return g/(1e3/(x||60))},wake:function(){Cx&&(!im&&Wm()&&(hr=im=window,Xm=hr.document||{},Di.gsap=_i,(hr.gsapVersions||(hr.gsapVersions=[])).push(_i.version),Ax(yf||hr.GreenSockGlobals||!hr.gsap&&hr||{}),Xx.forEach(qx)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,f&&m.sleep(),d=h||function(x){return setTimeout(x,c-m.time*1e3+1|0)},cc=1,S(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(f),cc=0,d=ac},lagSmoothing:function(x,v){e=x||1/0,t=Math.min(v||33,e)},fps:function(x){a=1e3/(x||240),c=m.time*1e3+a},add:function(x,v,R){var b=v?function(w,C,N,D){x(w,C,N,D),m.remove(b)}:x;return m.remove(x),l[R?"unshift":"push"](b),Za(),b},remove:function(x,v){~(v=l.indexOf(x))&&l.splice(v,1)&&_>=v&&_--},_listeners:l},m}(),Za=function(){return!cc&&Ci.wake()},Mt={},cP=/^[\d.\-M][\d.\-,\s]/,uP=/["']/g,fP=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),s=n[0],a=1,c=n.length,l,f,d;a<c;a++)f=n[a],l=a!==c-1?f.lastIndexOf(","):f.length,d=f.substr(0,l),t[s]=isNaN(d)?d.replace(uP,"").trim():+d,s=f.substr(l+1).trim();return t},dP=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),s=e.indexOf("(",t);return e.substring(t,~s&&s<n?e.indexOf(")",n+1):n)},hP=function(e){var t=(e+"").split("("),n=Mt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[fP(t[1])]:dP(e).split(",").map(Nx)):Mt._CE&&cP.test(e)?Mt._CE("",e):n},Zx=function(e){return function(t){return 1-e(1-t)}},Kx=function r(e,t){for(var n=e._first,s;n;)n instanceof ei?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(s=n._ease,n._ease=n._yEase,n._yEase=s,n._yoyo=t)),n=n._next},Po=function(e,t){return e&&(tn(e)?e:Mt[e]||hP(e))||t},Uo=function(e,t,n,s){n===void 0&&(n=function(f){return 1-t(1-f)}),s===void 0&&(s=function(f){return f<.5?t(f*2)/2:1-t((1-f)*2)/2});var a={easeIn:t,easeOut:n,easeInOut:s},c;return hi(e,function(l){Mt[l]=Di[l]=a,Mt[c=l.toLowerCase()]=n;for(var f in a)Mt[c+(f==="easeIn"?".in":f==="easeOut"?".out":".inOut")]=Mt[l+"."+f]=a[f]}),a},Qx=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},lp=function r(e,t,n){var s=t>=1?t:1,a=(n||(e?.3:.45))/(t<1?t:1),c=a/tm*(Math.asin(1/s)||0),l=function(h){return h===1?1:s*Math.pow(2,-10*h)*VR((h-c)*a)+1},f=e==="out"?l:e==="in"?function(d){return 1-l(1-d)}:Qx(l);return a=tm/a,f.config=function(d,h){return r(e,d,h)},f},cp=function r(e,t){t===void 0&&(t=1.70158);var n=function(c){return c?--c*c*((t+1)*c+t)+1:0},s=e==="out"?n:e==="in"?function(a){return 1-n(1-a)}:Qx(n);return s.config=function(a){return r(e,a)},s};hi("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Uo(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Mt.Linear.easeNone=Mt.none=Mt.Linear.easeIn;Uo("Elastic",lp("in"),lp("out"),lp());(function(r,e){var t=1/e,n=2*t,s=2.5*t,a=function(l){return l<t?r*l*l:l<n?r*Math.pow(l-1.5/e,2)+.75:l<s?r*(l-=2.25/e)*l+.9375:r*Math.pow(l-2.625/e,2)+.984375};Uo("Bounce",function(c){return 1-a(1-c)},a)})(7.5625,2.75);Uo("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Uo("Circ",function(r){return-(Sx(1-r*r)-1)});Uo("Sine",function(r){return r===1?1:-BR(r*kR)+1});Uo("Back",cp("in"),cp("out"),cp());Mt.SteppedEase=Mt.steps=Di.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,s=e+(t?0:1),a=t?1:0,c=1-Hn;return function(l){return((s*gc(0,c,l)|0)+a)*n}}};qa.ease=Mt["quad.out"];hi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Ym+=r+","+r+"Params,"});var Jx=function(e,t){this.id=zR++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Px,this.set=t?t.getSetter:Jm},uc=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,$a(this,+t.duration,1,1),this.data=t.data,Wt&&(this._ctx=Wt,Wt.data.push(this)),cc||Ci.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,$a(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,s){if(Za(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(Bf(this,n),!a._dp||a.parent||Fx(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&gr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===Hn||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Dx(this,n,s)),this},e.time=function(n,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+ey(this))%(this._dur+this._rDelay)||(n?this._dur:0),s):this._time},e.totalProgress=function(n,s){return arguments.length?this.totalTime(this.totalDuration()*n,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+ey(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,s){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*a,s):this._repeat?Ya(this._tTime,a)+1:1},e.timeScale=function(n,s){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===n)return this;var a=this.parent&&this._ts?Mf(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-1e-8?0:this._rts,this.totalTime(gc(-Math.abs(this._delay),this._tDur,a),s!==!1),zf(this),YR(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Za(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Hn&&(this._tTime-=Hn)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&gr(s,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(di(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var s=this.parent||this._dp;return s?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Mf(s.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=WR);var s=Dn;return Dn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Dn=s,this},e.globalTime=function(n){for(var s=this,a=arguments.length?n:s.rawTime();s;)a=s._start+a/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(n):a},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,ty(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var s=this._time;return this._rDelay=n,ty(this),s?this.time(s):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,s){return this.totalTime(Bi(this,n),di(s))},e.restart=function(n,s){return this.play().totalTime(n?-this._delay:0,di(s)),this._dur||(this._zTime=-1e-8),this},e.play=function(n,s){return n!=null&&this.seek(n,s),this.reversed(!1).paused(!1)},e.reverse=function(n,s){return n!=null&&this.seek(n||this.totalDuration(),s),this.reversed(!0).paused(!1)},e.pause=function(n,s){return n!=null&&this.seek(n,s),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var n=this.parent||this._dp,s=this._start,a;return!!(!n||this._ts&&this._initted&&n.isActive()&&(a=n.rawTime(!0))>=s&&a<this.endTime(!0)-Hn)},e.eventCallback=function(n,s,a){var c=this.vars;return arguments.length>1?(s?(c[n]=s,a&&(c[n+"Params"]=a),n==="onUpdate"&&(this._onUpdate=s)):delete c[n],this):c[n]},e.then=function(n){var s=this;return new Promise(function(a){var c=tn(n)?n:Ix,l=function(){var d=s.then;s.then=null,tn(c)&&(c=c(s))&&(c.then||c===s)&&(s.then=d),a(c),s.then=d};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?l():s._prom=l})},e.kill=function(){Zl(this)},r}();Ni(uc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var ei=function(r){xx(e,r);function e(n,s){var a;return n===void 0&&(n={}),a=r.call(this,n)||this,a.labels={},a.smoothChildTiming=!!n.smoothChildTiming,a.autoRemoveChildren=!!n.autoRemoveChildren,a._sort=di(n.sortChildren),Yt&&gr(n.parent||Yt,qr(a),s),n.reversed&&a.reverse(),n.paused&&a.paused(!0),n.scrollTrigger&&Ux(qr(a),n.scrollTrigger),a}var t=e.prototype;return t.to=function(s,a,c){return tc(0,arguments,this),this},t.from=function(s,a,c){return tc(1,arguments,this),this},t.fromTo=function(s,a,c,l){return tc(2,arguments,this),this},t.set=function(s,a,c){return a.duration=0,a.parent=this,ec(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new fn(s,a,Bi(this,c),1),this},t.call=function(s,a,c){return gr(this,fn.delayedCall(0,s,a),c)},t.staggerTo=function(s,a,c,l,f,d,h){return c.duration=a,c.stagger=c.stagger||l,c.onComplete=d,c.onCompleteParams=h,c.parent=this,new fn(s,c,Bi(this,f)),this},t.staggerFrom=function(s,a,c,l,f,d,h){return c.runBackwards=1,ec(c).immediateRender=di(c.immediateRender),this.staggerTo(s,a,c,l,f,d,h)},t.staggerFromTo=function(s,a,c,l,f,d,h,m){return l.startAt=c,ec(l).immediateRender=di(l.immediateRender),this.staggerTo(s,a,l,f,d,h,m)},t.render=function(s,a,c){var l=this._time,f=this._dirty?this.totalDuration():this._tDur,d=this._dur,h=s<=0?0:dn(s),m=this._zTime<0!=s<0&&(this._initted||!d),g,_,S,M,x,v,R,b,w,C,N,D;if(this!==Yt&&h>f&&s>=0&&(h=f),h!==this._tTime||c||m){if(l!==this._time&&d&&(h+=this._time-l,s+=this._time-l),g=h,w=this._start,b=this._ts,v=!b,m&&(d||(l=this._zTime),(s||!a)&&(this._zTime=s)),this._repeat){if(N=this._yoyo,x=d+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(x*100+s,a,c);if(g=dn(h%x),h===f?(M=this._repeat,g=d):(C=dn(h/x),M=~~C,M&&M===C&&(g=d,M--),g>d&&(g=d)),C=Ya(this._tTime,x),!l&&this._tTime&&C!==M&&this._tTime-C*x-this._dur<=0&&(C=M),N&&M&1&&(g=d-g,D=1),M!==C&&!this._lock){var P=N&&C&1,T=P===(N&&M&1);if(M<C&&(P=!P),l=P?0:h%d?d:h,this._lock=1,this.render(l||(D?0:dn(M*x)),a,!d)._lock=0,this._tTime=h,!a&&this.parent&&bi(this,"onRepeat"),this.vars.repeatRefresh&&!D&&(this.invalidate()._lock=1),l&&l!==this._time||v!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(d=this._dur,f=this._tDur,T&&(this._lock=2,l=P?d:-1e-4,this.render(l,!0),this.vars.repeatRefresh&&!D&&this.invalidate()),this._lock=0,!this._ts&&!v)return this;Kx(this,D)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(R=QR(this,dn(l),dn(g)),R&&(h-=g-(g=R._start))),this._tTime=h,this._time=g,this._act=!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,l=0),!l&&g&&!a&&!M&&(bi(this,"onStart"),this._tTime!==h))return this;if(g>=l&&s>=0)for(_=this._first;_;){if(S=_._next,(_._act||g>=_._start)&&_._ts&&R!==_){if(_.parent!==this)return this.render(s,a,c);if(_.render(_._ts>0?(g-_._start)*_._ts:(_._dirty?_.totalDuration():_._tDur)+(g-_._start)*_._ts,a,c),g!==this._time||!this._ts&&!v){R=0,S&&(h+=this._zTime=-1e-8);break}}_=S}else{_=this._last;for(var A=s<0?s:g;_;){if(S=_._prev,(_._act||A<=_._end)&&_._ts&&R!==_){if(_.parent!==this)return this.render(s,a,c);if(_.render(_._ts>0?(A-_._start)*_._ts:(_._dirty?_.totalDuration():_._tDur)+(A-_._start)*_._ts,a,c||Dn&&(_._initted||_._startAt)),g!==this._time||!this._ts&&!v){R=0,S&&(h+=this._zTime=A?-1e-8:Hn);break}}_=S}}if(R&&!a&&(this.pause(),R.render(g>=l?0:-1e-8)._zTime=g>=l?1:-1,this._ts))return this._start=w,zf(this),this.render(s,a,c);this._onUpdate&&!a&&bi(this,"onUpdate",!0),(h===f&&this._tTime>=this.totalDuration()||!h&&l)&&(w===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((s||!d)&&(h===f&&this._ts>0||!h&&this._ts<0)&&Gs(this,1),!a&&!(s<0&&!l)&&(h||l||!f)&&(bi(this,h===f&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<f&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(s,a){var c=this;if(ts(a)||(a=Bi(this,a,s)),!(s instanceof uc)){if(Wn(s))return s.forEach(function(l){return c.add(l,a)}),this;if(Cn(s))return this.addLabel(s,a);if(tn(s))s=fn.delayedCall(0,s);else return this}return this!==s?gr(this,s,a):this},t.getChildren=function(s,a,c,l){s===void 0&&(s=!0),a===void 0&&(a=!0),c===void 0&&(c=!0),l===void 0&&(l=-1e8);for(var f=[],d=this._first;d;)d._start>=l&&(d instanceof fn?a&&f.push(d):(c&&f.push(d),s&&f.push.apply(f,d.getChildren(!0,a,c)))),d=d._next;return f},t.getById=function(s){for(var a=this.getChildren(1,1,1),c=a.length;c--;)if(a[c].vars.id===s)return a[c]},t.remove=function(s){return Cn(s)?this.removeLabel(s):tn(s)?this.killTweensOf(s):(s.parent===this&&kf(this,s),s===this._recent&&(this._recent=this._last),Ro(this))},t.totalTime=function(s,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=dn(Ci.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),r.prototype.totalTime.call(this,s,a),this._forcing=0,this):this._tTime},t.addLabel=function(s,a){return this.labels[s]=Bi(this,a),this},t.removeLabel=function(s){return delete this.labels[s],this},t.addPause=function(s,a,c){var l=fn.delayedCall(0,a||ac,c);return l.data="isPause",this._hasPause=1,gr(this,l,Bi(this,s))},t.removePause=function(s){var a=this._first;for(s=Bi(this,s);a;)a._start===s&&a.data==="isPause"&&Gs(a),a=a._next},t.killTweensOf=function(s,a,c){for(var l=this.getTweensOf(s,c),f=l.length;f--;)Us!==l[f]&&l[f].kill(s,a);return this},t.getTweensOf=function(s,a){for(var c=[],l=Wi(s),f=this._first,d=ts(a),h;f;)f instanceof fn?XR(f._targets,l)&&(d?(!Us||f._initted&&f._ts)&&f.globalTime(0)<=a&&f.globalTime(f.totalDuration())>a:!a||f.isActive())&&c.push(f):(h=f.getTweensOf(l,a)).length&&c.push.apply(c,h),f=f._next;return c},t.tweenTo=function(s,a){a=a||{};var c=this,l=Bi(c,s),f=a,d=f.startAt,h=f.onStart,m=f.onStartParams,g=f.immediateRender,_,S=fn.to(c,Ni({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:l,overwrite:"auto",duration:a.duration||Math.abs((l-(d&&"time"in d?d.time:c._time))/c.timeScale())||Hn,onStart:function(){if(c.pause(),!_){var x=a.duration||Math.abs((l-(d&&"time"in d?d.time:c._time))/c.timeScale());S._dur!==x&&$a(S,x,0,1).render(S._time,!0,!0),_=1}h&&h.apply(S,m||[])}},a));return g?S.render(0):S},t.tweenFromTo=function(s,a,c){return this.tweenTo(a,Ni({startAt:{time:Bi(this,s)}},c))},t.recent=function(){return this._recent},t.nextLabel=function(s){return s===void 0&&(s=this._time),ny(this,Bi(this,s))},t.previousLabel=function(s){return s===void 0&&(s=this._time),ny(this,Bi(this,s),1)},t.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+Hn)},t.shiftChildren=function(s,a,c){c===void 0&&(c=0);for(var l=this._first,f=this.labels,d;l;)l._start>=c&&(l._start+=s,l._end+=s),l=l._next;if(a)for(d in f)f[d]>=c&&(f[d]+=s);return Ro(this)},t.invalidate=function(s){var a=this._first;for(this._lock=0;a;)a.invalidate(s),a=a._next;return r.prototype.invalidate.call(this,s)},t.clear=function(s){s===void 0&&(s=!0);for(var a=this._first,c;a;)c=a._next,this.remove(a),a=c;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),Ro(this)},t.totalDuration=function(s){var a=0,c=this,l=c._last,f=xr,d,h,m;if(arguments.length)return c.timeScale((c._repeat<0?c.duration():c.totalDuration())/(c.reversed()?-s:s));if(c._dirty){for(m=c.parent;l;)d=l._prev,l._dirty&&l.totalDuration(),h=l._start,h>f&&c._sort&&l._ts&&!c._lock?(c._lock=1,gr(c,l,h-l._delay,1)._lock=0):f=h,h<0&&l._ts&&(a-=h,(!m&&!c._dp||m&&m.smoothChildTiming)&&(c._start+=h/c._ts,c._time-=h,c._tTime-=h),c.shiftChildren(-h,!1,-1/0),f=0),l._end>a&&l._ts&&(a=l._end),l=d;$a(c,c===Yt&&c._time>a?c._time:a,1,1),c._dirty=0}return c._tDur},e.updateRoot=function(s){if(Yt._ts&&(Dx(Yt,Mf(s,Yt)),Rx=Ci.frame),Ci.frame>=Qv){Qv+=Pi.autoSleep||120;var a=Yt._first;if((!a||!a._ts)&&Pi.autoSleep&&Ci._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||Ci.sleep()}}},e}(uc);Ni(ei.prototype,{_lock:0,_hasPause:0,_forcing:0});var pP=function(e,t,n,s,a,c,l){var f=new pi(this._pt,e,t,0,1,sS,null,a),d=0,h=0,m,g,_,S,M,x,v,R;for(f.b=n,f.e=s,n+="",s+="",(v=~s.indexOf("random("))&&(s=lc(s)),c&&(R=[n,s],c(R,e,t),n=R[0],s=R[1]),g=n.match(sp)||[];m=sp.exec(s);)S=m[0],M=s.substring(d,m.index),_?_=(_+1)%5:M.substr(-5)==="rgba("&&(_=1),S!==g[h++]&&(x=parseFloat(g[h-1])||0,f._pt={_next:f._pt,p:M||h===1?M:",",s:x,c:S.charAt(1)==="="?Ua(x,S)-x:parseFloat(S)-x,m:_&&_<4?Math.round:0},d=sp.lastIndex);return f.c=d<s.length?s.substring(d,s.length):"",f.fp=l,(wx.test(s)||v)&&(f.e=0),this._pt=f,f},Zm=function(e,t,n,s,a,c,l,f,d,h){tn(s)&&(s=s(a||0,e,c));var m=e[t],g=n!=="get"?n:tn(m)?d?e[t.indexOf("set")||!tn(e["get"+t.substr(3)])?t:"get"+t.substr(3)](d):e[t]():m,_=tn(m)?d?yP:iS:Qm,S;if(Cn(s)&&(~s.indexOf("random(")&&(s=lc(s)),s.charAt(1)==="="&&(S=Ua(g,s)+(Vn(g)||0),(S||S===0)&&(s=S))),!h||g!==s||um)return!isNaN(g*s)&&s!==""?(S=new pi(this._pt,e,t,+g||0,s-(g||0),typeof m=="boolean"?SP:rS,0,_),d&&(S.fp=d),l&&S.modifier(l,this,e),this._pt=S):(!m&&!(t in e)&&qm(t,s),pP.call(this,e,t,g,s,_,f||Pi.stringFilter,d))},mP=function(e,t,n,s,a){if(tn(e)&&(e=nc(e,a,t,n,s)),!Er(e)||e.style&&e.nodeType||Wn(e)||Mx(e))return Cn(e)?nc(e,a,t,n,s):e;var c={},l;for(l in e)c[l]=nc(e[l],a,t,n,s);return c},eS=function(e,t,n,s,a,c){var l,f,d,h;if(Ti[e]&&(l=new Ti[e]).init(a,l.rawVars?t[e]:mP(t[e],s,a,c,n),n,s,c)!==!1&&(n._pt=f=new pi(n._pt,a,e,0,1,l.render,l,0,l.priority),n!==Pa))for(d=n._ptLookup[n._targets.indexOf(a)],h=l._props.length;h--;)d[l._props[h]]=f;return l},Us,um,Km=function r(e,t,n){var s=e.vars,a=s.ease,c=s.startAt,l=s.immediateRender,f=s.lazy,d=s.onUpdate,h=s.runBackwards,m=s.yoyoEase,g=s.keyframes,_=s.autoRevert,S=e._dur,M=e._startAt,x=e._targets,v=e.parent,R=v&&v.data==="nested"?v.vars.targets:x,b=e._overwrite==="auto"&&!Hm,w=e.timeline,C,N,D,P,T,A,U,z,H,q,ee,j,Q;if(w&&(!g||!a)&&(a="none"),e._ease=Po(a,qa.ease),e._yEase=m?Zx(Po(m===!0?a:m,qa.ease)):0,m&&e._yoyo&&!e._repeat&&(m=e._yEase,e._yEase=e._ease,e._ease=m),e._from=!w&&!!s.runBackwards,!w||g&&!s.stagger){if(z=x[0]?bo(x[0]).harness:0,j=z&&s[z.prop],C=Sf(s,jm),M&&(M._zTime<0&&M.progress(1),t<0&&h&&l&&!_?M.render(-1,!0):M.revert(h&&S?df:GR),M._lazy=0),c){if(Gs(e._startAt=fn.set(x,Ni({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!M&&di(f),startAt:null,delay:0,onUpdate:d&&function(){return bi(e,"onUpdate")},stagger:0},c))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Dn||!l&&!_)&&e._startAt.revert(df),l&&S&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&S&&!M){if(t&&(l=!1),D=Ni({overwrite:!1,data:"isFromStart",lazy:l&&!M&&di(f),immediateRender:l,stagger:0,parent:v},C),j&&(D[z.prop]=j),Gs(e._startAt=fn.set(x,D)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Dn?e._startAt.revert(df):e._startAt.render(-1,!0)),e._zTime=t,!l)r(e._startAt,Hn,Hn);else if(!t)return}for(e._pt=e._ptCache=0,f=S&&di(f)||f&&!S,N=0;N<x.length;N++){if(T=x[N],U=T._gsap||$m(x)[N]._gsap,e._ptLookup[N]=q={},rm[U.id]&&Bs.length&&xf(),ee=R===x?N:R.indexOf(T),z&&(H=new z).init(T,j||C,e,ee,R)!==!1&&(e._pt=P=new pi(e._pt,T,H.name,0,1,H.render,H,0,H.priority),H._props.forEach(function(V){q[V]=P}),H.priority&&(A=1)),!z||j)for(D in C)Ti[D]&&(H=eS(D,C,e,ee,T,R))?H.priority&&(A=1):q[D]=P=Zm.call(e,T,D,"get",C[D],ee,R,0,s.stringFilter);e._op&&e._op[N]&&e.kill(T,e._op[N]),b&&e._pt&&(Us=e,Yt.killTweensOf(T,q,e.globalTime(t)),Q=!e.parent,Us=0),e._pt&&f&&(rm[U.id]=1)}A&&oS(e),e._onInit&&e._onInit(e)}e._onUpdate=d,e._initted=(!e._op||e._pt)&&!Q,g&&t<=0&&w.render(xr,!0,!0)},gP=function(e,t,n,s,a,c,l,f){var d=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,m,g,_;if(!d)for(d=e._ptCache[t]=[],g=e._ptLookup,_=e._targets.length;_--;){if(h=g[_][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return um=1,e.vars[t]="+=0",Km(e,l),um=0,f?oc(t+" not eligible for reset"):1;d.push(h)}for(_=d.length;_--;)m=d[_],h=m._pt||m,h.s=(s||s===0)&&!a?s:h.s+(s||0)+c*h.c,h.c=n-h.s,m.e&&(m.e=sn(n)+Vn(m.e)),m.b&&(m.b=h.s+Vn(m.b))},_P=function(e,t){var n=e[0]?bo(e[0]).harness:0,s=n&&n.aliases,a,c,l,f;if(!s)return t;a=ja({},t);for(c in s)if(c in a)for(f=s[c].split(","),l=f.length;l--;)a[f[l]]=a[c];return a},vP=function(e,t,n,s){var a=t.ease||s||"power1.inOut",c,l;if(Wn(t))l=n[e]||(n[e]=[]),t.forEach(function(f,d){return l.push({t:d/(t.length-1)*100,v:f,e:a})});else for(c in t)l=n[c]||(n[c]=[]),c==="ease"||l.push({t:parseFloat(e),v:t[c],e:a})},nc=function(e,t,n,s,a){return tn(e)?e.call(t,n,s,a):Cn(e)&&~e.indexOf("random(")?lc(e):e},tS=Ym+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",nS={};hi(tS+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return nS[r]=1});var fn=function(r){xx(e,r);function e(n,s,a,c){var l;typeof s=="number"&&(a.duration=s,s=a,a=null),l=r.call(this,c?s:ec(s))||this;var f=l.vars,d=f.duration,h=f.delay,m=f.immediateRender,g=f.stagger,_=f.overwrite,S=f.keyframes,M=f.defaults,x=f.scrollTrigger,v=f.yoyoEase,R=s.parent||Yt,b=(Wn(n)||Mx(n)?ts(n[0]):"length"in s)?[n]:Wi(n),w,C,N,D,P,T,A,U;if(l._targets=b.length?$m(b):oc("GSAP target "+n+" not found. https://gsap.com",!Pi.nullTargetWarn)||[],l._ptLookup=[],l._overwrite=_,S||g||nf(d)||nf(h)){if(s=l.vars,w=l.timeline=new ei({data:"nested",defaults:M||{},targets:R&&R.data==="nested"?R.vars.targets:b}),w.kill(),w.parent=w._dp=qr(l),w._start=0,g||nf(d)||nf(h)){if(D=b.length,A=g&&Bx(g),Er(g))for(P in g)~tS.indexOf(P)&&(U||(U={}),U[P]=g[P]);for(C=0;C<D;C++)N=Sf(s,nS),N.stagger=0,v&&(N.yoyoEase=v),U&&ja(N,U),T=b[C],N.duration=+nc(d,qr(l),C,T,b),N.delay=(+nc(h,qr(l),C,T,b)||0)-l._delay,!g&&D===1&&N.delay&&(l._delay=h=N.delay,l._start+=h,N.delay=0),w.to(T,N,A?A(C,T,b):0),w._ease=Mt.none;w.duration()?d=h=0:l.timeline=0}else if(S){ec(Ni(w.vars.defaults,{ease:"none"})),w._ease=Po(S.ease||s.ease||"none");var z=0,H,q,ee;if(Wn(S))S.forEach(function(j){return w.to(b,j,">")}),w.duration();else{N={};for(P in S)P==="ease"||P==="easeEach"||vP(P,S[P],N,S.easeEach);for(P in N)for(H=N[P].sort(function(j,Q){return j.t-Q.t}),z=0,C=0;C<H.length;C++)q=H[C],ee={ease:q.e,duration:(q.t-(C?H[C-1].t:0))/100*d},ee[P]=q.v,w.to(b,ee,z),z+=ee.duration;w.duration()<d&&w.to({},{duration:d-w.duration()})}}d||l.duration(d=w.duration())}else l.timeline=0;return _===!0&&!Hm&&(Us=qr(l),Yt.killTweensOf(b),Us=0),gr(R,qr(l),a),s.reversed&&l.reverse(),s.paused&&l.paused(!0),(m||!d&&!S&&l._start===dn(R._time)&&di(m)&&$R(qr(l))&&R.data!=="nested")&&(l._tTime=-1e-8,l.render(Math.max(0,-h)||0)),x&&Ux(qr(l),x),l}var t=e.prototype;return t.render=function(s,a,c){var l=this._time,f=this._tDur,d=this._dur,h=s<0,m=s>f-Hn&&!h?f:s<Hn?0:s,g,_,S,M,x,v,R,b,w;if(!d)KR(this,s,a,c);else if(m!==this._tTime||!s||c||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(g=m,b=this.timeline,this._repeat){if(M=d+this._rDelay,this._repeat<-1&&h)return this.totalTime(M*100+s,a,c);if(g=dn(m%M),m===f?(S=this._repeat,g=d):(x=dn(m/M),S=~~x,S&&S===x?(g=d,S--):g>d&&(g=d)),v=this._yoyo&&S&1,v&&(w=this._yEase,g=d-g),x=Ya(this._tTime,M),g===l&&!c&&this._initted&&S===x)return this._tTime=m,this;S!==x&&(b&&this._yEase&&Kx(b,v),this.vars.repeatRefresh&&!v&&!this._lock&&g!==M&&this._initted&&(this._lock=c=1,this.render(dn(M*S),!0).invalidate()._lock=0))}if(!this._initted){if(Ox(this,h?s:g,c,a,m))return this._tTime=0,this;if(l!==this._time&&!(c&&this.vars.repeatRefresh&&S!==x))return this;if(d!==this._dur)return this.render(s,a,c)}if(this._tTime=m,this._time=g,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=R=(w||this._ease)(g/d),this._from&&(this.ratio=R=1-R),g&&!l&&!a&&!S&&(bi(this,"onStart"),this._tTime!==m))return this;for(_=this._pt;_;)_.r(R,_.d),_=_._next;b&&b.render(s<0?s:b._dur*b._ease(g/this._dur),a,c)||this._startAt&&(this._zTime=s),this._onUpdate&&!a&&(h&&sm(this,s,a,c),bi(this,"onUpdate")),this._repeat&&S!==x&&this.vars.onRepeat&&!a&&this.parent&&bi(this,"onRepeat"),(m===this._tDur||!m)&&this._tTime===m&&(h&&!this._onUpdate&&sm(this,s,!0,!0),(s||!d)&&(m===this._tDur&&this._ts>0||!m&&this._ts<0)&&Gs(this,1),!a&&!(h&&!l)&&(m||l||v)&&(bi(this,m===f?"onComplete":"onReverseComplete",!0),this._prom&&!(m<f&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),r.prototype.invalidate.call(this,s)},t.resetTo=function(s,a,c,l,f){cc||Ci.wake(),this._ts||this.play();var d=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Km(this,d),h=this._ease(d/this._dur),gP(this,s,a,c,l,h,d,f)?this.resetTo(s,a,c,l,1):(Bf(this,0),this.parent||Lx(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(s,a){if(a===void 0&&(a="all"),!s&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?Zl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Dn),this;if(this.timeline){var c=this.timeline.totalDuration();return this.timeline.killTweensOf(s,a,Us&&Us.vars.overwrite!==!0)._first||Zl(this),this.parent&&c!==this.timeline.totalDuration()&&$a(this,this._dur*this.timeline._tDur/c,0,1),this}var l=this._targets,f=s?Wi(s):l,d=this._ptLookup,h=this._pt,m,g,_,S,M,x,v;if((!a||a==="all")&&jR(l,f))return a==="all"&&(this._pt=0),Zl(this);for(m=this._op=this._op||[],a!=="all"&&(Cn(a)&&(M={},hi(a,function(R){return M[R]=1}),a=M),a=_P(l,a)),v=l.length;v--;)if(~f.indexOf(l[v])){g=d[v],a==="all"?(m[v]=a,S=g,_={}):(_=m[v]=m[v]||{},S=a);for(M in S)x=g&&g[M],x&&((!("kill"in x.d)||x.d.kill(M)===!0)&&kf(this,x,"_pt"),delete g[M]),_!=="all"&&(_[M]=1)}return this._initted&&!this._pt&&h&&Zl(this),this},e.to=function(s,a){return new e(s,a,arguments[2])},e.from=function(s,a){return tc(1,arguments)},e.delayedCall=function(s,a,c,l){return new e(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:a,onReverseComplete:a,onCompleteParams:c,onReverseCompleteParams:c,callbackScope:l})},e.fromTo=function(s,a,c){return tc(2,arguments)},e.set=function(s,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new e(s,a)},e.killTweensOf=function(s,a,c){return Yt.killTweensOf(s,a,c)},e}(uc);Ni(fn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});hi("staggerTo,staggerFrom,staggerFromTo",function(r){fn[r]=function(){var e=new ei,t=am.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Qm=function(e,t,n){return e[t]=n},iS=function(e,t,n){return e[t](n)},yP=function(e,t,n,s){return e[t](s.fp,n)},xP=function(e,t,n){return e.setAttribute(t,n)},Jm=function(e,t){return tn(e[t])?iS:Gm(e[t])&&e.setAttribute?xP:Qm},rS=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},SP=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},sS=function(e,t){var n=t._pt,s="";if(!e&&t.b)s=t.b;else if(e===1&&t.e)s=t.e;else{for(;n;)s=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+s,n=n._next;s+=t.c}t.set(t.t,t.p,s,t)},eg=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},MP=function(e,t,n,s){for(var a=this._pt,c;a;)c=a._next,a.p===s&&a.modifier(e,t,n),a=c},EP=function(e){for(var t=this._pt,n,s;t;)s=t._next,t.p===e&&!t.op||t.op===e?kf(this,t,"_pt"):t.dep||(n=1),t=s;return!n},wP=function(e,t,n,s){s.mSet(e,t,s.m.call(s.tween,n,s.mt),s)},oS=function(e){for(var t=e._pt,n,s,a,c;t;){for(n=t._next,s=a;s&&s.pr>t.pr;)s=s._next;(t._prev=s?s._prev:c)?t._prev._next=t:a=t,(t._next=s)?s._prev=t:c=t,t=n}e._pt=a},pi=function(){function r(t,n,s,a,c,l,f,d,h){this.t=n,this.s=a,this.c=c,this.p=s,this.r=l||rS,this.d=f||this,this.set=d||Qm,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,s,a){this.mSet=this.mSet||this.set,this.set=wP,this.m=n,this.mt=a,this.tween=s},r}();hi(Ym+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return jm[r]=1});Di.TweenMax=Di.TweenLite=fn;Di.TimelineLite=Di.TimelineMax=ei;Yt=new ei({sortChildren:!1,defaults:qa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Pi.stringFilter=$x;var Do=[],pf={},TP=[],ry=0,CP=0,up=function(e){return(pf[e]||TP).map(function(t){return t()})},fm=function(){var e=Date.now(),t=[];e-ry>2&&(up("matchMediaInit"),Do.forEach(function(n){var s=n.queries,a=n.conditions,c,l,f,d;for(l in s)c=hr.matchMedia(s[l]).matches,c&&(f=1),c!==a[l]&&(a[l]=c,d=1);d&&(n.revert(),f&&t.push(n))}),up("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(s){return n.add(null,s)})}),ry=e,up("matchMedia"))},aS=function(){function r(t,n){this.selector=n&&lm(n),this.data=[],this._r=[],this.isReverted=!1,this.id=CP++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,s,a){tn(n)&&(a=s,s=n,n=tn);var c=this,l=function(){var d=Wt,h=c.selector,m;return d&&d!==c&&d.data.push(c),a&&(c.selector=lm(a)),Wt=c,m=s.apply(c,arguments),tn(m)&&c._r.push(m),Wt=d,c.selector=h,c.isReverted=!1,m};return c.last=l,n===tn?l(c,function(f){return c.add(null,f)}):n?c[n]=l:l},e.ignore=function(n){var s=Wt;Wt=null,n(this),Wt=s},e.getTweens=function(){var n=[];return this.data.forEach(function(s){return s instanceof r?n.push.apply(n,s.getTweens()):s instanceof fn&&!(s.parent&&s.parent.data==="nested")&&n.push(s)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,s){var a=this;if(n?function(){for(var l=a.getTweens(),f=a.data.length,d;f--;)d=a.data[f],d.data==="isFlip"&&(d.revert(),d.getChildren(!0,!0,!1).forEach(function(h){return l.splice(l.indexOf(h),1)}));for(l.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,m){return m.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),f=a.data.length;f--;)d=a.data[f],d instanceof ei?d.data!=="nested"&&(d.scrollTrigger&&d.scrollTrigger.revert(),d.kill()):!(d instanceof fn)&&d.revert&&d.revert(n);a._r.forEach(function(h){return h(n,a)}),a.isReverted=!0}():this.data.forEach(function(l){return l.kill&&l.kill()}),this.clear(),s)for(var c=Do.length;c--;)Do[c].id===this.id&&Do.splice(c,1)},e.revert=function(n){this.kill(n||{})},r}(),AP=function(){function r(t){this.contexts=[],this.scope=t,Wt&&Wt.data.push(this)}var e=r.prototype;return e.add=function(n,s,a){Er(n)||(n={matches:n});var c=new aS(0,a||this.scope),l=c.conditions={},f,d,h;Wt&&!c.selector&&(c.selector=Wt.selector),this.contexts.push(c),s=c.add("onMatch",s),c.queries=n;for(d in n)d==="all"?h=1:(f=hr.matchMedia(n[d]),f&&(Do.indexOf(c)<0&&Do.push(c),(l[d]=f.matches)&&(h=1),f.addListener?f.addListener(fm):f.addEventListener("change",fm)));return h&&s(c,function(m){return c.add(null,m)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(s){return s.kill(n,!0)})},r}(),Ef={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(s){return qx(s)})},timeline:function(e){return new ei(e)},getTweensOf:function(e,t){return Yt.getTweensOf(e,t)},getProperty:function(e,t,n,s){Cn(e)&&(e=Wi(e)[0]);var a=bo(e||{}).get,c=n?Ix:Nx;return n==="native"&&(n=""),e&&(t?c((Ti[t]&&Ti[t].get||a)(e,t,n,s)):function(l,f,d){return c((Ti[l]&&Ti[l].get||a)(e,l,f,d))})},quickSetter:function(e,t,n){if(e=Wi(e),e.length>1){var s=e.map(function(h){return _i.quickSetter(h,t,n)}),a=s.length;return function(h){for(var m=a;m--;)s[m](h)}}e=e[0]||{};var c=Ti[t],l=bo(e),f=l.harness&&(l.harness.aliases||{})[t]||t,d=c?function(h){var m=new c;Pa._pt=0,m.init(e,n?h+n:h,Pa,0,[e]),m.render(1,m),Pa._pt&&eg(1,Pa)}:l.set(e,f);return c?d:function(h){return d(e,f,n?h+n:h,l,1)}},quickTo:function(e,t,n){var s,a=_i.to(e,Ni((s={},s[t]="+=0.1",s.paused=!0,s.stagger=0,s),n||{})),c=function(f,d,h){return a.resetTo(t,f,d,h)};return c.tween=a,c},isTweening:function(e){return Yt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Po(e.ease,qa.ease)),Jv(qa,e||{})},config:function(e){return Jv(Pi,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,s=e.plugins,a=e.defaults,c=e.extendTimeline;(s||"").split(",").forEach(function(l){return l&&!Ti[l]&&!Di[l]&&oc(t+" effect requires "+l+" plugin.")}),op[t]=function(l,f,d){return n(Wi(l),Ni(f||{},a),d)},c&&(ei.prototype[t]=function(l,f,d){return this.add(op[t](l,Er(f)?f:(d=f)&&{},this),d)})},registerEase:function(e,t){Mt[e]=Po(t)},parseEase:function(e,t){return arguments.length?Po(e,t):Mt},getById:function(e){return Yt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new ei(e),s,a;for(n.smoothChildTiming=di(e.smoothChildTiming),Yt.remove(n),n._dp=0,n._time=n._tTime=Yt._time,s=Yt._first;s;)a=s._next,(t||!(!s._dur&&s instanceof fn&&s.vars.onComplete===s._targets[0]))&&gr(n,s,s._start-s._delay),s=a;return gr(Yt,n,0),n},context:function(e,t){return e?new aS(e,t):Wt},matchMedia:function(e){return new AP(e)},matchMediaRefresh:function(){return Do.forEach(function(e){var t=e.conditions,n,s;for(s in t)t[s]&&(t[s]=!1,n=1);n&&e.revert()})||fm()},addEventListener:function(e,t){var n=pf[e]||(pf[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=pf[e],s=n&&n.indexOf(t);s>=0&&n.splice(s,1)},utils:{wrap:sP,wrapYoyo:oP,distribute:Bx,random:Hx,snap:Vx,normalize:rP,getUnit:Vn,clamp:eP,splitColor:jx,toArray:Wi,selector:lm,mapRange:Wx,pipe:nP,unitize:iP,interpolate:aP,shuffle:zx},install:Ax,effects:op,ticker:Ci,updateRoot:ei.updateRoot,plugins:Ti,globalTimeline:Yt,core:{PropTween:pi,globals:bx,Tween:fn,Timeline:ei,Animation:uc,getCache:bo,_removeLinkedListItem:kf,reverting:function(){return Dn},context:function(e){return e&&Wt&&(Wt.data.push(e),e._ctx=Wt),Wt},suppressOverwrites:function(e){return Hm=e}}};hi("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ef[r]=fn[r]});Ci.add(ei.updateRoot);Pa=Ef.to({},{duration:0});var bP=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},RP=function(e,t){var n=e._targets,s,a,c;for(s in t)for(a=n.length;a--;)c=e._ptLookup[a][s],c&&(c=c.d)&&(c._pt&&(c=bP(c,s)),c&&c.modifier&&c.modifier(t[s],e,n[a],s))},fp=function(e,t){return{name:e,rawVars:1,init:function(s,a,c){c._onInit=function(l){var f,d;if(Cn(a)&&(f={},hi(a,function(h){return f[h]=1}),a=f),t){f={};for(d in a)f[d]=t(a[d]);a=f}RP(l,a)}}}},_i=Ef.registerPlugin({name:"attr",init:function(e,t,n,s,a){var c,l,f;this.tween=n;for(c in t)f=e.getAttribute(c)||"",l=this.add(e,"setAttribute",(f||0)+"",t[c],s,a,0,0,c),l.op=c,l.b=f,this._props.push(c)},render:function(e,t){for(var n=t._pt;n;)Dn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},fp("roundProps",cm),fp("modifiers"),fp("snap",Vx))||Ef;fn.version=ei.version=_i.version="3.12.7";Cx=1;Wm()&&Za();Mt.Power0;Mt.Power1;Mt.Power2;Mt.Power3;Mt.Power4;Mt.Linear;Mt.Quad;Mt.Cubic;Mt.Quart;Mt.Quint;Mt.Strong;Mt.Elastic;Mt.Back;Mt.SteppedEase;Mt.Bounce;Mt.Sine;Mt.Expo;Mt.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var sy,Os,Oa,tg,Ao,oy,ng,PP=function(){return typeof window<"u"},ns={},Mo=180/Math.PI,ka=Math.PI/180,Ta=Math.atan2,ay=1e8,ig=/([A-Z])/g,DP=/(left|right|width|margin|padding|x)/i,NP=/[\s,\(]\S/,vr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},dm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},IP=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},LP=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},FP=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},lS=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},cS=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},UP=function(e,t,n){return e.style[t]=n},OP=function(e,t,n){return e.style.setProperty(t,n)},kP=function(e,t,n){return e._gsap[t]=n},zP=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},BP=function(e,t,n,s,a){var c=e._gsap;c.scaleX=c.scaleY=n,c.renderTransform(a,c)},VP=function(e,t,n,s,a){var c=e._gsap;c[t]=n,c.renderTransform(a,c)},$t="transform",mi=$t+"Origin",HP=function r(e,t){var n=this,s=this.target,a=s.style,c=s._gsap;if(e in ns&&a){if(this.tfm=this.tfm||{},e!=="transform")e=vr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(l){return n.tfm[l]=Yr(s,l)}):this.tfm[e]=c.x?c[e]:Yr(s,e),e===mi&&(this.tfm.zOrigin=c.zOrigin);else return vr.transform.split(",").forEach(function(l){return r.call(n,l,t)});if(this.props.indexOf($t)>=0)return;c.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(mi,t,"")),e=$t}(a||t)&&this.props.push(e,t,a[e])},uS=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},GP=function(){var e=this.props,t=this.target,n=t.style,s=t._gsap,a,c;for(a=0;a<e.length;a+=3)e[a+1]?e[a+1]===2?t[e[a]](e[a+2]):t[e[a]]=e[a+2]:e[a+2]?n[e[a]]=e[a+2]:n.removeProperty(e[a].substr(0,2)==="--"?e[a]:e[a].replace(ig,"-$1").toLowerCase());if(this.tfm){for(c in this.tfm)s[c]=this.tfm[c];s.svg&&(s.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),a=ng(),(!a||!a.isStart)&&!n[$t]&&(uS(n),s.zOrigin&&n[mi]&&(n[mi]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},fS=function(e,t){var n={target:e,props:[],revert:GP,save:HP};return e._gsap||_i.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(s){return n.save(s)}),n},dS,hm=function(e,t){var n=Os.createElementNS?Os.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Os.createElement(e);return n&&n.style?n:Os.createElement(e)},Sr=function r(e,t,n){var s=getComputedStyle(e);return s[t]||s.getPropertyValue(t.replace(ig,"-$1").toLowerCase())||s.getPropertyValue(t)||!n&&r(e,Ka(t)||t,1)||""},ly="O,Moz,ms,Ms,Webkit".split(","),Ka=function(e,t,n){var s=t||Ao,a=s.style,c=5;if(e in a&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);c--&&!(ly[c]+e in a););return c<0?null:(c===3?"ms":c>=0?ly[c]:"")+e},pm=function(){PP()&&window.document&&(sy=window,Os=sy.document,Oa=Os.documentElement,Ao=hm("div")||{style:{}},hm("div"),$t=Ka($t),mi=$t+"Origin",Ao.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",dS=!!Ka("perspective"),ng=_i.core.reverting,tg=1)},cy=function(e){var t=e.ownerSVGElement,n=hm("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=e.cloneNode(!0),a;s.style.display="block",n.appendChild(s),Oa.appendChild(n);try{a=s.getBBox()}catch{}return n.removeChild(s),Oa.removeChild(n),a},uy=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},hS=function(e){var t,n;try{t=e.getBBox()}catch{t=cy(e),n=1}return t&&(t.width||t.height)||n||(t=cy(e)),t&&!t.width&&!t.x&&!t.y?{x:+uy(e,["x","cx","x1"])||0,y:+uy(e,["y","cy","y1"])||0,width:0,height:0}:t},pS=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&hS(e))},Io=function(e,t){if(t){var n=e.style,s;t in ns&&t!==mi&&(t=$t),n.removeProperty?(s=t.substr(0,2),(s==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(s==="--"?t:t.replace(ig,"-$1").toLowerCase())):n.removeAttribute(t)}},ks=function(e,t,n,s,a,c){var l=new pi(e._pt,t,n,0,1,c?cS:lS);return e._pt=l,l.b=s,l.e=a,e._props.push(n),l},fy={deg:1,rad:1,turn:1},WP={grid:1,flex:1},Ws=function r(e,t,n,s){var a=parseFloat(n)||0,c=(n+"").trim().substr((a+"").length)||"px",l=Ao.style,f=DP.test(t),d=e.tagName.toLowerCase()==="svg",h=(d?"client":"offset")+(f?"Width":"Height"),m=100,g=s==="px",_=s==="%",S,M,x,v;if(s===c||!a||fy[s]||fy[c])return a;if(c!=="px"&&!g&&(a=r(e,t,n,"px")),v=e.getCTM&&pS(e),(_||c==="%")&&(ns[t]||~t.indexOf("adius")))return S=v?e.getBBox()[f?"width":"height"]:e[h],sn(_?a/S*m:a/100*S);if(l[f?"width":"height"]=m+(g?c:s),M=s!=="rem"&&~t.indexOf("adius")||s==="em"&&e.appendChild&&!d?e:e.parentNode,v&&(M=(e.ownerSVGElement||{}).parentNode),(!M||M===Os||!M.appendChild)&&(M=Os.body),x=M._gsap,x&&_&&x.width&&f&&x.time===Ci.time&&!x.uncache)return sn(a/x.width*m);if(_&&(t==="height"||t==="width")){var R=e.style[t];e.style[t]=m+s,S=e[h],R?e.style[t]=R:Io(e,t)}else(_||c==="%")&&!WP[Sr(M,"display")]&&(l.position=Sr(e,"position")),M===e&&(l.position="static"),M.appendChild(Ao),S=Ao[h],M.removeChild(Ao),l.position="absolute";return f&&_&&(x=bo(M),x.time=Ci.time,x.width=M[h]),sn(g?S*a/m:S&&a?m/S*a:0)},Yr=function(e,t,n,s){var a;return tg||pm(),t in vr&&t!=="transform"&&(t=vr[t],~t.indexOf(",")&&(t=t.split(",")[0])),ns[t]&&t!=="transform"?(a=dc(e,s),a=t!=="transformOrigin"?a[t]:a.svg?a.origin:Tf(Sr(e,mi))+" "+a.zOrigin+"px"):(a=e.style[t],(!a||a==="auto"||s||~(a+"").indexOf("calc("))&&(a=wf[t]&&wf[t](e,t,n)||Sr(e,t)||Px(e,t)||(t==="opacity"?1:0))),n&&!~(a+"").trim().indexOf(" ")?Ws(e,t,a,n)+n:a},XP=function(e,t,n,s){if(!n||n==="none"){var a=Ka(t,e,1),c=a&&Sr(e,a,1);c&&c!==n?(t=a,n=c):t==="borderColor"&&(n=Sr(e,"borderTopColor"))}var l=new pi(this._pt,e.style,t,0,1,sS),f=0,d=0,h,m,g,_,S,M,x,v,R,b,w,C;if(l.b=n,l.e=s,n+="",s+="",s==="auto"&&(M=e.style[t],e.style[t]=s,s=Sr(e,t)||s,M?e.style[t]=M:Io(e,t)),h=[n,s],$x(h),n=h[0],s=h[1],g=n.match(Ra)||[],C=s.match(Ra)||[],C.length){for(;m=Ra.exec(s);)x=m[0],R=s.substring(f,m.index),S?S=(S+1)%5:(R.substr(-5)==="rgba("||R.substr(-5)==="hsla(")&&(S=1),x!==(M=g[d++]||"")&&(_=parseFloat(M)||0,w=M.substr((_+"").length),x.charAt(1)==="="&&(x=Ua(_,x)+w),v=parseFloat(x),b=x.substr((v+"").length),f=Ra.lastIndex-b.length,b||(b=b||Pi.units[t]||w,f===s.length&&(s+=b,l.e+=b)),w!==b&&(_=Ws(e,t,M,b)||0),l._pt={_next:l._pt,p:R||d===1?R:",",s:_,c:v-_,m:S&&S<4||t==="zIndex"?Math.round:0});l.c=f<s.length?s.substring(f,s.length):""}else l.r=t==="display"&&s==="none"?cS:lS;return wx.test(s)&&(l.e=0),this._pt=l,l},dy={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},qP=function(e){var t=e.split(" "),n=t[0],s=t[1]||"50%";return(n==="top"||n==="bottom"||s==="left"||s==="right")&&(e=n,n=s,s=e),t[0]=dy[n]||n,t[1]=dy[s]||s,t.join(" ")},jP=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,s=n.style,a=t.u,c=n._gsap,l,f,d;if(a==="all"||a===!0)s.cssText="",f=1;else for(a=a.split(","),d=a.length;--d>-1;)l=a[d],ns[l]&&(f=1,l=l==="transformOrigin"?mi:$t),Io(n,l);f&&(Io(n,$t),c&&(c.svg&&n.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",dc(n,1),c.uncache=1,uS(s)))}},wf={clearProps:function(e,t,n,s,a){if(a.data!=="isFromStart"){var c=e._pt=new pi(e._pt,t,n,0,0,jP);return c.u=s,c.pr=-10,c.tween=a,e._props.push(n),1}}},fc=[1,0,0,1,0,0],mS={},gS=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},hy=function(e){var t=Sr(e,$t);return gS(t)?fc:t.substr(7).match(Ex).map(sn)},rg=function(e,t){var n=e._gsap||bo(e),s=e.style,a=hy(e),c,l,f,d;return n.svg&&e.getAttribute("transform")?(f=e.transform.baseVal.consolidate().matrix,a=[f.a,f.b,f.c,f.d,f.e,f.f],a.join(",")==="1,0,0,1,0,0"?fc:a):(a===fc&&!e.offsetParent&&e!==Oa&&!n.svg&&(f=s.display,s.display="block",c=e.parentNode,(!c||!e.offsetParent&&!e.getBoundingClientRect().width)&&(d=1,l=e.nextElementSibling,Oa.appendChild(e)),a=hy(e),f?s.display=f:Io(e,"display"),d&&(l?c.insertBefore(e,l):c?c.appendChild(e):Oa.removeChild(e))),t&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},mm=function(e,t,n,s,a,c){var l=e._gsap,f=a||rg(e,!0),d=l.xOrigin||0,h=l.yOrigin||0,m=l.xOffset||0,g=l.yOffset||0,_=f[0],S=f[1],M=f[2],x=f[3],v=f[4],R=f[5],b=t.split(" "),w=parseFloat(b[0])||0,C=parseFloat(b[1])||0,N,D,P,T;n?f!==fc&&(D=_*x-S*M)&&(P=w*(x/D)+C*(-M/D)+(M*R-x*v)/D,T=w*(-S/D)+C*(_/D)-(_*R-S*v)/D,w=P,C=T):(N=hS(e),w=N.x+(~b[0].indexOf("%")?w/100*N.width:w),C=N.y+(~(b[1]||b[0]).indexOf("%")?C/100*N.height:C)),s||s!==!1&&l.smooth?(v=w-d,R=C-h,l.xOffset=m+(v*_+R*M)-v,l.yOffset=g+(v*S+R*x)-R):l.xOffset=l.yOffset=0,l.xOrigin=w,l.yOrigin=C,l.smooth=!!s,l.origin=t,l.originIsAbsolute=!!n,e.style[mi]="0px 0px",c&&(ks(c,l,"xOrigin",d,w),ks(c,l,"yOrigin",h,C),ks(c,l,"xOffset",m,l.xOffset),ks(c,l,"yOffset",g,l.yOffset)),e.setAttribute("data-svg-origin",w+" "+C)},dc=function(e,t){var n=e._gsap||new Jx(e);if("x"in n&&!t&&!n.uncache)return n;var s=e.style,a=n.scaleX<0,c="px",l="deg",f=getComputedStyle(e),d=Sr(e,mi)||"0",h,m,g,_,S,M,x,v,R,b,w,C,N,D,P,T,A,U,z,H,q,ee,j,Q,V,G,Y,O,Z,Ae,ne,ae;return h=m=g=M=x=v=R=b=w=0,_=S=1,n.svg=!!(e.getCTM&&pS(e)),f.translate&&((f.translate!=="none"||f.scale!=="none"||f.rotate!=="none")&&(s[$t]=(f.translate!=="none"?"translate3d("+(f.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(f.rotate!=="none"?"rotate("+f.rotate+") ":"")+(f.scale!=="none"?"scale("+f.scale.split(" ").join(",")+") ":"")+(f[$t]!=="none"?f[$t]:"")),s.scale=s.rotate=s.translate="none"),D=rg(e,n.svg),n.svg&&(n.uncache?(V=e.getBBox(),d=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",Q=""):Q=!t&&e.getAttribute("data-svg-origin"),mm(e,Q||d,!!Q||n.originIsAbsolute,n.smooth!==!1,D)),C=n.xOrigin||0,N=n.yOrigin||0,D!==fc&&(U=D[0],z=D[1],H=D[2],q=D[3],h=ee=D[4],m=j=D[5],D.length===6?(_=Math.sqrt(U*U+z*z),S=Math.sqrt(q*q+H*H),M=U||z?Ta(z,U)*Mo:0,R=H||q?Ta(H,q)*Mo+M:0,R&&(S*=Math.abs(Math.cos(R*ka))),n.svg&&(h-=C-(C*U+N*H),m-=N-(C*z+N*q))):(ae=D[6],Ae=D[7],Y=D[8],O=D[9],Z=D[10],ne=D[11],h=D[12],m=D[13],g=D[14],P=Ta(ae,Z),x=P*Mo,P&&(T=Math.cos(-P),A=Math.sin(-P),Q=ee*T+Y*A,V=j*T+O*A,G=ae*T+Z*A,Y=ee*-A+Y*T,O=j*-A+O*T,Z=ae*-A+Z*T,ne=Ae*-A+ne*T,ee=Q,j=V,ae=G),P=Ta(-H,Z),v=P*Mo,P&&(T=Math.cos(-P),A=Math.sin(-P),Q=U*T-Y*A,V=z*T-O*A,G=H*T-Z*A,ne=q*A+ne*T,U=Q,z=V,H=G),P=Ta(z,U),M=P*Mo,P&&(T=Math.cos(P),A=Math.sin(P),Q=U*T+z*A,V=ee*T+j*A,z=z*T-U*A,j=j*T-ee*A,U=Q,ee=V),x&&Math.abs(x)+Math.abs(M)>359.9&&(x=M=0,v=180-v),_=sn(Math.sqrt(U*U+z*z+H*H)),S=sn(Math.sqrt(j*j+ae*ae)),P=Ta(ee,j),R=Math.abs(P)>2e-4?P*Mo:0,w=ne?1/(ne<0?-ne:ne):0),n.svg&&(Q=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!gS(Sr(e,$t)),Q&&e.setAttribute("transform",Q))),Math.abs(R)>90&&Math.abs(R)<270&&(a?(_*=-1,R+=M<=0?180:-180,M+=M<=0?180:-180):(S*=-1,R+=R<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+c,n.y=m-((n.yPercent=m&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-m)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+c,n.z=g+c,n.scaleX=sn(_),n.scaleY=sn(S),n.rotation=sn(M)+l,n.rotationX=sn(x)+l,n.rotationY=sn(v)+l,n.skewX=R+l,n.skewY=b+l,n.transformPerspective=w+c,(n.zOrigin=parseFloat(d.split(" ")[2])||!t&&n.zOrigin||0)&&(s[mi]=Tf(d)),n.xOffset=n.yOffset=0,n.force3D=Pi.force3D,n.renderTransform=n.svg?$P:dS?_S:YP,n.uncache=0,n},Tf=function(e){return(e=e.split(" "))[0]+" "+e[1]},dp=function(e,t,n){var s=Vn(t);return sn(parseFloat(t)+parseFloat(Ws(e,"x",n+"px",s)))+s},YP=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,_S(e,t)},_o="0deg",jl="0px",vo=") ",_S=function(e,t){var n=t||this,s=n.xPercent,a=n.yPercent,c=n.x,l=n.y,f=n.z,d=n.rotation,h=n.rotationY,m=n.rotationX,g=n.skewX,_=n.skewY,S=n.scaleX,M=n.scaleY,x=n.transformPerspective,v=n.force3D,R=n.target,b=n.zOrigin,w="",C=v==="auto"&&e&&e!==1||v===!0;if(b&&(m!==_o||h!==_o)){var N=parseFloat(h)*ka,D=Math.sin(N),P=Math.cos(N),T;N=parseFloat(m)*ka,T=Math.cos(N),c=dp(R,c,D*T*-b),l=dp(R,l,-Math.sin(N)*-b),f=dp(R,f,P*T*-b+b)}x!==jl&&(w+="perspective("+x+vo),(s||a)&&(w+="translate("+s+"%, "+a+"%) "),(C||c!==jl||l!==jl||f!==jl)&&(w+=f!==jl||C?"translate3d("+c+", "+l+", "+f+") ":"translate("+c+", "+l+vo),d!==_o&&(w+="rotate("+d+vo),h!==_o&&(w+="rotateY("+h+vo),m!==_o&&(w+="rotateX("+m+vo),(g!==_o||_!==_o)&&(w+="skew("+g+", "+_+vo),(S!==1||M!==1)&&(w+="scale("+S+", "+M+vo),R.style[$t]=w||"translate(0, 0)"},$P=function(e,t){var n=t||this,s=n.xPercent,a=n.yPercent,c=n.x,l=n.y,f=n.rotation,d=n.skewX,h=n.skewY,m=n.scaleX,g=n.scaleY,_=n.target,S=n.xOrigin,M=n.yOrigin,x=n.xOffset,v=n.yOffset,R=n.forceCSS,b=parseFloat(c),w=parseFloat(l),C,N,D,P,T;f=parseFloat(f),d=parseFloat(d),h=parseFloat(h),h&&(h=parseFloat(h),d+=h,f+=h),f||d?(f*=ka,d*=ka,C=Math.cos(f)*m,N=Math.sin(f)*m,D=Math.sin(f-d)*-g,P=Math.cos(f-d)*g,d&&(h*=ka,T=Math.tan(d-h),T=Math.sqrt(1+T*T),D*=T,P*=T,h&&(T=Math.tan(h),T=Math.sqrt(1+T*T),C*=T,N*=T)),C=sn(C),N=sn(N),D=sn(D),P=sn(P)):(C=m,P=g,N=D=0),(b&&!~(c+"").indexOf("px")||w&&!~(l+"").indexOf("px"))&&(b=Ws(_,"x",c,"px"),w=Ws(_,"y",l,"px")),(S||M||x||v)&&(b=sn(b+S-(S*C+M*D)+x),w=sn(w+M-(S*N+M*P)+v)),(s||a)&&(T=_.getBBox(),b=sn(b+s/100*T.width),w=sn(w+a/100*T.height)),T="matrix("+C+","+N+","+D+","+P+","+b+","+w+")",_.setAttribute("transform",T),R&&(_.style[$t]=T)},ZP=function(e,t,n,s,a){var c=360,l=Cn(a),f=parseFloat(a)*(l&&~a.indexOf("rad")?Mo:1),d=f-s,h=s+d+"deg",m,g;return l&&(m=a.split("_")[1],m==="short"&&(d%=c,d!==d%(c/2)&&(d+=d<0?c:-360)),m==="cw"&&d<0?d=(d+c*ay)%c-~~(d/c)*c:m==="ccw"&&d>0&&(d=(d-c*ay)%c-~~(d/c)*c)),e._pt=g=new pi(e._pt,t,n,s,d,IP),g.e=h,g.u="deg",e._props.push(n),g},py=function(e,t){for(var n in t)e[n]=t[n];return e},KP=function(e,t,n){var s=py({},n._gsap),a="perspective,force3D,transformOrigin,svgOrigin",c=n.style,l,f,d,h,m,g,_,S;s.svg?(d=n.getAttribute("transform"),n.setAttribute("transform",""),c[$t]=t,l=dc(n,1),Io(n,$t),n.setAttribute("transform",d)):(d=getComputedStyle(n)[$t],c[$t]=t,l=dc(n,1),c[$t]=d);for(f in ns)d=s[f],h=l[f],d!==h&&a.indexOf(f)<0&&(_=Vn(d),S=Vn(h),m=_!==S?Ws(n,f,d,S):parseFloat(d),g=parseFloat(h),e._pt=new pi(e._pt,l,f,m,g-m,dm),e._pt.u=S||0,e._props.push(f));py(l,s)};hi("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",s="Bottom",a="Left",c=(e<3?[t,n,s,a]:[t+a,t+n,s+n,s+a]).map(function(l){return e<2?r+l:"border"+l+r});wf[e>1?"border"+r:r]=function(l,f,d,h,m){var g,_;if(arguments.length<4)return g=c.map(function(S){return Yr(l,S,d)}),_=g.join(" "),_.split(g[0]).length===5?g[0]:_;g=(h+"").split(" "),_={},c.forEach(function(S,M){return _[S]=g[M]=g[M]||g[(M-1)/2|0]}),l.init(f,_,m)}});var vS={name:"css",register:pm,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,s,a){var c=this._props,l=e.style,f=n.vars.startAt,d,h,m,g,_,S,M,x,v,R,b,w,C,N,D,P;tg||pm(),this.styles=this.styles||fS(e),P=this.styles.props,this.tween=n;for(M in t)if(M!=="autoRound"&&(h=t[M],!(Ti[M]&&eS(M,t,n,s,e,a)))){if(_=typeof h,S=wf[M],_==="function"&&(h=h.call(n,s,e,a),_=typeof h),_==="string"&&~h.indexOf("random(")&&(h=lc(h)),S)S(this,e,M,h,n)&&(D=1);else if(M.substr(0,2)==="--")d=(getComputedStyle(e).getPropertyValue(M)+"").trim(),h+="",Vs.lastIndex=0,Vs.test(d)||(x=Vn(d),v=Vn(h)),v?x!==v&&(d=Ws(e,M,d,v)+v):x&&(h+=x),this.add(l,"setProperty",d,h,s,a,0,0,M),c.push(M),P.push(M,0,l[M]);else if(_!=="undefined"){if(f&&M in f?(d=typeof f[M]=="function"?f[M].call(n,s,e,a):f[M],Cn(d)&&~d.indexOf("random(")&&(d=lc(d)),Vn(d+"")||d==="auto"||(d+=Pi.units[M]||Vn(Yr(e,M))||""),(d+"").charAt(1)==="="&&(d=Yr(e,M))):d=Yr(e,M),g=parseFloat(d),R=_==="string"&&h.charAt(1)==="="&&h.substr(0,2),R&&(h=h.substr(2)),m=parseFloat(h),M in vr&&(M==="autoAlpha"&&(g===1&&Yr(e,"visibility")==="hidden"&&m&&(g=0),P.push("visibility",0,l.visibility),ks(this,l,"visibility",g?"inherit":"hidden",m?"inherit":"hidden",!m)),M!=="scale"&&M!=="transform"&&(M=vr[M],~M.indexOf(",")&&(M=M.split(",")[0]))),b=M in ns,b){if(this.styles.save(M),w||(C=e._gsap,C.renderTransform&&!t.parseTransform||dc(e,t.parseTransform),N=t.smoothOrigin!==!1&&C.smooth,w=this._pt=new pi(this._pt,l,$t,0,1,C.renderTransform,C,0,-1),w.dep=1),M==="scale")this._pt=new pi(this._pt,C,"scaleY",C.scaleY,(R?Ua(C.scaleY,R+m):m)-C.scaleY||0,dm),this._pt.u=0,c.push("scaleY",M),M+="X";else if(M==="transformOrigin"){P.push(mi,0,l[mi]),h=qP(h),C.svg?mm(e,h,0,N,0,this):(v=parseFloat(h.split(" ")[2])||0,v!==C.zOrigin&&ks(this,C,"zOrigin",C.zOrigin,v),ks(this,l,M,Tf(d),Tf(h)));continue}else if(M==="svgOrigin"){mm(e,h,1,N,0,this);continue}else if(M in mS){ZP(this,C,M,g,R?Ua(g,R+h):h);continue}else if(M==="smoothOrigin"){ks(this,C,"smooth",C.smooth,h);continue}else if(M==="force3D"){C[M]=h;continue}else if(M==="transform"){KP(this,h,e);continue}}else M in l||(M=Ka(M)||M);if(b||(m||m===0)&&(g||g===0)&&!NP.test(h)&&M in l)x=(d+"").substr((g+"").length),m||(m=0),v=Vn(h)||(M in Pi.units?Pi.units[M]:x),x!==v&&(g=Ws(e,M,d,v)),this._pt=new pi(this._pt,b?C:l,M,g,(R?Ua(g,R+m):m)-g,!b&&(v==="px"||M==="zIndex")&&t.autoRound!==!1?FP:dm),this._pt.u=v||0,x!==v&&v!=="%"&&(this._pt.b=d,this._pt.r=LP);else if(M in l)XP.call(this,e,M,d,R?R+h:h);else if(M in e)this.add(e,M,d||e[M],R?R+h:h,s,a);else if(M!=="parseTransform"){qm(M,h);continue}b||(M in l?P.push(M,0,l[M]):typeof e[M]=="function"?P.push(M,2,e[M]()):P.push(M,1,d||e[M])),c.push(M)}}D&&oS(this)},render:function(e,t){if(t.tween._time||!ng())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Yr,aliases:vr,getSetter:function(e,t,n){var s=vr[t];return s&&s.indexOf(",")<0&&(t=s),t in ns&&t!==mi&&(e._gsap.x||Yr(e,"x"))?n&&oy===n?t==="scale"?zP:kP:(oy=n||{})&&(t==="scale"?BP:VP):e.style&&!Gm(e.style[t])?UP:~t.indexOf("-")?OP:Jm(e,t)},core:{_removeProperty:Io,_getMatrix:rg}};_i.utils.checkPrefix=Ka;_i.core.getStyleSaver=fS;(function(r,e,t,n){var s=hi(r+","+e+","+t,function(a){ns[a]=1});hi(e,function(a){Pi.units[a]="deg",mS[a]=1}),vr[s[13]]=r+","+e,hi(n,function(a){var c=a.split(":");vr[c[1]]=s[c[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");hi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Pi.units[r]="px"});_i.registerPlugin(vS);var Dt=_i.registerPlugin(vS)||_i;Dt.core.Tween;const QP=`
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
}`,JP=`varying float vDistance;

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
}`;class e2 extends gn{constructor({audioManager:e,bpmManager:t,camera:n,gui:s=null}={}){if(super(),!e||!t)throw new Error("Missing required managers");this.camera=n,this.name="ReactiveParticles",this.audioManager=e,this.bpmManager=t,this.gui=s,this.time=0,this.properties={startColor:16711935,endColor:65535,autoMix:!0,autoRotate:!0,amplitudeLimits:{min:.1,max:3},frequencyLimits:{min:.1,max:5},bassPowerLimits:{min:.5,max:4},midPowerLimits:{min:.5,max:3}},this.basePosition=new se(3,23.5,5),this.position.copy(this.basePosition),this.scale.set(2,2,2),this.initialized=!1,this.pointsMesh=null,this.holderObjects=new gn,this.add(this.holderObjects)}init(){this.initialized||(this.material=new rr({side:mr,vertexShader:QP,fragmentShader:JP,transparent:!0,uniforms:{time:{value:0},offsetSize:{value:Te.randFloat(30,60)},size:{value:1.1},frequency:{value:2},amplitude:{value:1},offsetGain:{value:0},maxDistance:{value:1.4},lowFreq:{value:0},midFreq:{value:0},highFreq:{value:0},bassPower:{value:2},midPower:{value:1.5},curlIntensity:{value:1},colorBalance:{value:.5},gammaCorrection:{value:1},startColor:{value:new ht(this.properties.startColor)},endColor:{value:new ht(this.properties.endColor)}},depthTest:!1}),this.resetMesh(),this.bpmManager.addEventListener("beat",()=>this.onBPMBeat()),this.gui&&this.addGUI(),this.initialized=!0)}createBoxMesh(){let e=16*Te.randInt(4,8),t=16*Te.randInt(4,8),n=16*Te.randInt(4,8);this.geometry=new rl(1,1,1,e,t,n),this.material.uniforms.offsetSize.value=Math.floor(Te.randInt(30,60)),this.material.needsUpdate=!0,this.pointsMesh=new gn,this.pointsMesh.rotateX(Math.PI/2),this.holderObjects.add(this.pointsMesh);const s=new Hr(this.geometry,this.material);this.pointsMesh.add(s),Dt.to(this.pointsMesh.rotation,{duration:3,x:Math.random()*Math.PI,z:Math.random()*Math.PI*2,ease:"none"}),Dt.to(this.position,{duration:.6,z:this.basePosition.z+Te.randFloat(-.2,.2),ease:"elastic.out(0.8)"})}createCylinderMesh(){let e=Te.randInt(1,3),t=Te.randInt(1,3);this.geometry=new Lf(1,1,4,64*e,64*t),this.material.uniforms.offsetSize.value=Math.floor(Te.randInt(30,60)),this.material.uniforms.size.value=2,this.material.needsUpdate=!0,this.material.uniforms.needsUpdate=!0,this.pointsMesh=new Hr(this.geometry,this.material),this.pointsMesh.rotation.set(Te.randFloat(0,Math.PI*2),Te.randFloat(0,Math.PI*2),Te.randFloat(0,Math.PI*2)),this.holderObjects.add(this.pointsMesh);let n=this.basePosition.z+Te.randFloat(-.2,.2);Math.random()<.2&&(n=this.basePosition.z+Te.randFloat(-.5,.5)),Dt.to(this.pointsMesh.rotation,{duration:Te.randFloat(2,3),x:Te.randFloat(0,Math.PI*2),y:Te.randFloat(0,Math.PI*2),z:Te.randFloat(0,Math.PI*2),ease:"power2.inOut"}),Dt.to(this.position,{duration:.6,z:n,ease:"elastic.out(0.8)"})}createSphereMesh(){const e=Te.randFloat(.5,2),t=32*Te.randInt(2,4),n=32*Te.randInt(2,4);this.geometry=new Um(e,t,n),this.material.uniforms.offsetSize.value=Te.randInt(30,60),this.material.uniforms.size.value=1.1,this.material.needsUpdate=!0,this.pointsMesh=new Hr(this.geometry,this.material),this.pointsMesh.rotation.set(Te.randFloat(0,Math.PI),Te.randFloat(0,Math.PI),Te.randFloat(0,Math.PI)),this.holderObjects.add(this.pointsMesh),Dt.to(this.pointsMesh.rotation,{duration:Te.randFloat(5,10),x:Math.random()*Math.PI*2,y:Math.random()*Math.PI*2,z:Math.random()*Math.PI*2,ease:"power2.inOut"}),Dt.to(this.position,{duration:.6,z:this.basePosition.z+Te.randFloat(-.2,.2),ease:"elastic.out(0.8)"})}createTorusMesh(){const e=Te.randFloat(.3,1.5),t=Te.randFloat(.1,.5),n=32*Te.randInt(2,4),s=32*Te.randInt(2,4);this.geometry=new Om(e,t,n,s),this.material.uniforms.offsetSize.value=Te.randInt(30,60),this.material.uniforms.size.value=1.1,this.material.needsUpdate=!0,this.pointsMesh=new Hr(this.geometry,this.material),this.pointsMesh.rotation.set(Te.randFloat(0,Math.PI),Te.randFloat(0,Math.PI),Te.randFloat(0,Math.PI)),this.holderObjects.add(this.pointsMesh),Dt.to(this.pointsMesh.rotation,{duration:Te.randFloat(5,10),x:Math.random()*Math.PI*2,y:Math.random()*Math.PI*2,z:Math.random()*Math.PI*2,ease:"power2.inOut"}),Dt.to(this.position,{duration:.6,z:this.basePosition.z+Te.randFloat(-.2,.2),ease:"elastic.out(0.8)"})}createIcosahedronMesh(){const e=Te.randFloat(.5,2),t=Te.randInt(2,4);this.geometry=new Im(e,t),this.material.uniforms.offsetSize.value=Te.randInt(30,60),this.material.uniforms.size.value=1.1,this.material.needsUpdate=!0,this.pointsMesh=new Hr(this.geometry,this.material),this.pointsMesh.rotation.set(Te.randFloat(0,Math.PI),Te.randFloat(0,Math.PI),Te.randFloat(0,Math.PI)),this.holderObjects.add(this.pointsMesh),Dt.to(this.pointsMesh.rotation,{duration:Te.randFloat(5,10),x:Math.random()*Math.PI*2,y:Math.random()*Math.PI*2,z:Math.random()*Math.PI*2,ease:"power2.inOut"}),Dt.to(this.position,{duration:.6,z:this.basePosition.z+Te.randFloat(-.2,.2),ease:"elastic.out(0.8)"})}createOctahedronMesh(){const e=Te.randFloat(.5,2),t=Te.randInt(2,3);this.geometry=new Lm(e,t),this.material.uniforms.offsetSize.value=Te.randInt(30,60),this.material.uniforms.size.value=1.1,this.material.needsUpdate=!0,this.pointsMesh=new Hr(this.geometry,this.material),this.pointsMesh.rotation.set(Te.randFloat(0,Math.PI),Te.randFloat(0,Math.PI),Te.randFloat(0,Math.PI)),this.holderObjects.add(this.pointsMesh),Dt.to(this.pointsMesh.rotation,{duration:Te.randFloat(5,10),x:Math.random()*Math.PI*2,y:Math.random()*Math.PI*2,z:Math.random()*Math.PI*2,ease:"power2.inOut"}),Dt.to(this.position,{duration:.6,z:this.basePosition.z+Te.randFloat(-.2,.2),ease:"elastic.out(0.8)"})}createConeMesh(){const e=Te.randFloat(.1,1),t=Te.randFloat(1,3),n=32*Te.randInt(2,4),s=16*Te.randInt(2,4);this.geometry=new Nm(e,t,n,s),this.material.uniforms.offsetSize.value=Te.randInt(30,60),this.material.uniforms.size.value=2,this.material.needsUpdate=!0,this.pointsMesh=new Hr(this.geometry,this.material),this.pointsMesh.rotation.set(Te.randFloat(0,Math.PI),Te.randFloat(0,Math.PI),Te.randFloat(0,Math.PI)),this.holderObjects.add(this.pointsMesh),Dt.to(this.pointsMesh.rotation,{duration:Te.randFloat(2,4),x:Math.random()*Math.PI*2,y:Math.random()*Math.PI*2,ease:"power2.inOut"}),Dt.to(this.position,{duration:.6,z:this.basePosition.z+Te.randFloat(-.5,.5),ease:"elastic.out(0.8)"})}createRingMesh(){const e=Te.randFloat(.1,.5),t=Te.randFloat(.6,2),n=32*Te.randInt(2,4);this.geometry=new Fm(e,t,n),this.material.uniforms.offsetSize.value=Te.randInt(30,60),this.material.uniforms.size.value=1.5,this.material.needsUpdate=!0,this.pointsMesh=new Hr(this.geometry,this.material),this.pointsMesh.rotation.set(Te.randFloat(0,Math.PI),Te.randFloat(0,Math.PI),Te.randFloat(0,Math.PI)),this.holderObjects.add(this.pointsMesh),Dt.to(this.pointsMesh.rotation,{duration:Te.randFloat(3,6),x:Math.random()*Math.PI*2,z:Math.random()*Math.PI*2,ease:"power2.inOut"}),Dt.to(this.position,{duration:.6,y:this.basePosition.y+Te.randFloat(-.3,.3),ease:"elastic.out(0.8)"})}createGridMesh(){const e=Te.randFloat(1,3),t=Te.randFloat(1,3),n=16*Te.randInt(4,8),s=16*Te.randInt(4,8);this.geometry=new es(e,t,n,s),this.material.uniforms.offsetSize.value=Te.randInt(30,60),this.material.uniforms.size.value=1.1,this.material.needsUpdate=!0,this.pointsMesh=new Hr(this.geometry,this.material),this.pointsMesh.rotation.set(Math.PI/2,Te.randFloat(0,Math.PI),Te.randFloat(0,Math.PI)),this.holderObjects.add(this.pointsMesh),Dt.to(this.pointsMesh.rotation,{duration:Te.randFloat(5,10),y:Math.random()*Math.PI*2,ease:"power2.inOut"}),Dt.to(this.position,{duration:.6,x:this.basePosition.x+Te.randFloat(-.5,.5),ease:"elastic.out(0.8)"})}connectAudio(e){if(!(e!=null&&e.update)){console.error("AudioManager invalide:",e);return}this.audioManager=e}setupEventListeners(){this.bpmManager.addEventListener("beat",()=>this.onBPMBeat())}onBPMBeat(){if(!this.initialized||!this.audioManager.isPlaying)return;const e=this.bpmManager.getBPMDuration()/1e3;Math.random()<.3&&this.properties.autoRotate&&Dt.to(this.holderObjects.rotation,{duration:Math.random()<.8?15:e,z:Math.random()*Math.PI,ease:"elastic.out(0.2)"}),Math.random()<.1&&(this.resetMesh(),this.changeCooldown=null),Dt.to(this.material.uniforms.size,{value:1.5,duration:.01,yoyo:!0,repeat:1,ease:"power2.out"}),Dt.to(this.camera.position,{y:30+Math.random()*.3,duration:.3,yoyo:!0,ease:"elastic.out(1, 0.3)"});const{low:t}=this.audioManager.frequencyData,n=Te.clamp(t*2.5,.5,2);Dt.to(this.material.uniforms.size,{value:1*n,duration:.1*(1.5-n/2),yoyo:!0,repeat:1,ease:"power4.out"}),Dt.to(this.material.uniforms.amplitude,{value:1.5*n,duration:.15,ease:"back.out(2)"}),this.changeCooldown||(this.changeCooldown=setTimeout(()=>{this.changeCooldown=null},2e3))}resetMesh(){if(!this.properties.autoMix)return;this.destroyMesh();const e=Math.random();e<.25?this.createBoxMesh():e<.5?this.createCylinderMesh():e<.6?this.createSphereMesh():e<.7?this.createTorusMesh():e<.75?this.createIcosahedronMesh():e<.8?this.createOctahedronMesh():e<.85?this.createConeMesh():e<.9?this.createRingMesh():this.createGridMesh();const[t,n]=t2.getRandomPair();this.material.uniforms.startColor.value=t,this.material.uniforms.endColor.value=n,Dt.to(this.material.uniforms.frequency,{duration:this.bpmManager.getBPMDuration()/1e3*2||2,value:Te.randFloat(.5,3),ease:"expo.easeInOut"})}destroyMesh(){var e,t;!this.initialized||!this.pointsMesh||(this.holderObjects.remove(this.pointsMesh),(e=this.pointsMesh.geometry)==null||e.dispose(),(t=this.pointsMesh.material)==null||t.dispose(),this.pointsMesh=null)}update(){var f;if(!this.initialized)return;const{low:e,mid:t}=((f=this.audioManager)==null?void 0:f.frequencyData)||{low:0,mid:0},n=Te.smoothstep(e,.7,1)*2.5,s=Te.smoothstep(t,.6,.9)*1.8;this.material.uniforms.lowFreq.value=Math.pow(e,3)*n,this.material.uniforms.midFreq.value=Math.pow(t,2)*s;const a=1-Te.smoothstep(e,.6,.9);this.material.uniforms.curlIntensity.value=.8+a*.4,this.material.uniforms.amplitude.value=Te.clamp(.9-n*.3,.5,1.2);const c=this.bpmManager.getBPMDuration()/1e3;this.time+=(.1+n*.05)*c,this.material.uniforms.time.value=this.time;const l=Te.clamp((e+t)*.8,0,1);this.material.uniforms.colorBalance.value=Te.lerp(this.material.uniforms.colorBalance.value,l>.7?.3:.5+t*.2,.1)}setResolution(e,t){var n;!this.initialized||!((n=this.material)!=null&&n.uniforms)||this.material.uniforms.resolution.value.set(e,t)}dispose(){this.initialized&&(this.destroyMesh(),this.material&&(this.material.dispose(),this.material=null),this.holderObjects&&(this.remove(this.holderObjects),this.holderObjects=null),this.initialized=!1,this.audioAnalyser=null)}}class t2{static getComplementary(){const e={h:Math.random(),s:.8,l:.5};return[new ht().setHSL(e.h,e.s,e.l),new ht().setHSL((e.h+.5)%1,e.s,e.l)]}static getAnalogous(){const e=Math.random();return[new ht().setHSL((e-.1+1)%1,.8,.5),new ht().setHSL((e+.1)%1,.8,.5)]}static getRandomPair(){const e=[this.getComplementary,this.getAnalogous];return e[Math.floor(Math.random()*e.length)]()}}const n2=r=>e=>{const t=r(e);return e.add(t),t},i2=r=>(e,t)=>(r.set(e,t),t),my=Number.MAX_SAFE_INTEGER===void 0?9007199254740991:Number.MAX_SAFE_INTEGER,yS=536870912,gy=yS*2,r2=(r,e)=>t=>{const n=e.get(t);let s=n===void 0?t.size:n<gy?n+1:0;if(!t.has(s))return r(t,s);if(t.size<yS){for(;t.has(s);)s=Math.floor(Math.random()*gy);return r(t,s)}if(t.size>my)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;t.has(s);)s=Math.floor(Math.random()*my);return r(t,s)},xS=new WeakMap,s2=i2(xS),o2=r2(s2,xS),_y=n2(o2),vy=(r,e,t)=>({endTime:e,insertTime:t,type:"exponentialRampToValue",value:r}),yy=(r,e,t)=>({endTime:e,insertTime:t,type:"linearRampToValue",value:r}),gm=(r,e)=>({startTime:e,type:"setValue",value:r}),SS=(r,e,t)=>({duration:t,startTime:e,type:"setValueCurve",values:r}),MS=(r,e,{startTime:t,target:n,timeConstant:s})=>n+(e-n)*Math.exp((t-r)/s),Da=r=>r.type==="exponentialRampToValue",Cf=r=>r.type==="linearRampToValue",Ls=r=>Da(r)||Cf(r),sg=r=>r.type==="setValue",jr=r=>r.type==="setValueCurve",Af=(r,e,t,n)=>{const s=r[e];return s===void 0?n:Ls(s)||sg(s)?s.value:jr(s)?s.values[s.values.length-1]:MS(t,Af(r,e-1,s.startTime,n),s)},xy=(r,e,t,n,s)=>t===void 0?[n.insertTime,s]:Ls(t)?[t.endTime,t.value]:sg(t)?[t.startTime,t.value]:jr(t)?[t.startTime+t.duration,t.values[t.values.length-1]]:[t.startTime,Af(r,e-1,t.startTime,s)],_m=r=>r.type==="cancelAndHold",vm=r=>r.type==="cancelScheduledValues",Is=r=>_m(r)||vm(r)?r.cancelTime:Da(r)||Cf(r)?r.endTime:r.startTime,Sy=(r,e,t,{endTime:n,value:s})=>t===s?s:0<t&&0<s||t<0&&s<0?t*(s/t)**((r-e)/(n-e)):0,My=(r,e,t,{endTime:n,value:s})=>t+(r-e)/(n-e)*(s-t),a2=(r,e)=>{const t=Math.floor(e),n=Math.ceil(e);return t===n?r[t]:(1-(e-t))*r[t]+(1-(n-e))*r[n]},l2=(r,{duration:e,startTime:t,values:n})=>{const s=(r-t)/e*(n.length-1);return a2(n,s)},rf=r=>r.type==="setTarget";class c2{constructor(e){this._automationEvents=[],this._currenTime=0,this._defaultValue=e}[Symbol.iterator](){return this._automationEvents[Symbol.iterator]()}add(e){const t=Is(e);if(_m(e)||vm(e)){const n=this._automationEvents.findIndex(a=>vm(e)&&jr(a)?a.startTime+a.duration>=t:Is(a)>=t),s=this._automationEvents[n];if(n!==-1&&(this._automationEvents=this._automationEvents.slice(0,n)),_m(e)){const a=this._automationEvents[this._automationEvents.length-1];if(s!==void 0&&Ls(s)){if(a!==void 0&&rf(a))throw new Error("The internal list is malformed.");const c=a===void 0?s.insertTime:jr(a)?a.startTime+a.duration:Is(a),l=a===void 0?this._defaultValue:jr(a)?a.values[a.values.length-1]:a.value,f=Da(s)?Sy(t,c,l,s):My(t,c,l,s),d=Da(s)?vy(f,t,this._currenTime):yy(f,t,this._currenTime);this._automationEvents.push(d)}if(a!==void 0&&rf(a)&&this._automationEvents.push(gm(this.getValue(t),t)),a!==void 0&&jr(a)&&a.startTime+a.duration>t){const c=t-a.startTime,l=(a.values.length-1)/a.duration,f=Math.max(2,1+Math.ceil(c*l)),d=c/(f-1)*l,h=a.values.slice(0,f);if(d<1)for(let m=1;m<f;m+=1){const g=d*m%1;h[m]=a.values[m-1]*(1-g)+a.values[m]*g}this._automationEvents[this._automationEvents.length-1]=SS(h,a.startTime,c)}}}else{const n=this._automationEvents.findIndex(c=>Is(c)>t),s=n===-1?this._automationEvents[this._automationEvents.length-1]:this._automationEvents[n-1];if(s!==void 0&&jr(s)&&Is(s)+s.duration>t)return!1;const a=Da(e)?vy(e.value,e.endTime,this._currenTime):Cf(e)?yy(e.value,t,this._currenTime):e;if(n===-1)this._automationEvents.push(a);else{if(jr(e)&&t+e.duration>Is(this._automationEvents[n]))return!1;this._automationEvents.splice(n,0,a)}}return!0}flush(e){const t=this._automationEvents.findIndex(n=>Is(n)>e);if(t>1){const n=this._automationEvents.slice(t-1),s=n[0];rf(s)&&n.unshift(gm(Af(this._automationEvents,t-2,s.startTime,this._defaultValue),s.startTime)),this._automationEvents=n}}getValue(e){if(this._automationEvents.length===0)return this._defaultValue;const t=this._automationEvents.findIndex(c=>Is(c)>e),n=this._automationEvents[t],s=(t===-1?this._automationEvents.length:t)-1,a=this._automationEvents[s];if(a!==void 0&&rf(a)&&(n===void 0||!Ls(n)||n.insertTime>e))return MS(e,Af(this._automationEvents,s-1,a.startTime,this._defaultValue),a);if(a!==void 0&&sg(a)&&(n===void 0||!Ls(n)))return a.value;if(a!==void 0&&jr(a)&&(n===void 0||!Ls(n)||a.startTime+a.duration>e))return e<a.startTime+a.duration?l2(e,a):a.values[a.values.length-1];if(a!==void 0&&Ls(a)&&(n===void 0||!Ls(n)))return a.value;if(n!==void 0&&Da(n)){const[c,l]=xy(this._automationEvents,s,a,n,this._defaultValue);return Sy(e,c,l,n)}if(n!==void 0&&Cf(n)){const[c,l]=xy(this._automationEvents,s,a,n,this._defaultValue);return My(e,c,l,n)}return this._defaultValue}}const u2=r=>({cancelTime:r,type:"cancelAndHold"}),f2=r=>({cancelTime:r,type:"cancelScheduledValues"}),d2=(r,e)=>({endTime:e,type:"exponentialRampToValue",value:r}),h2=(r,e)=>({endTime:e,type:"linearRampToValue",value:r}),p2=(r,e,t)=>({startTime:e,target:r,timeConstant:t,type:"setTarget"}),m2=()=>new DOMException("","AbortError"),g2=r=>(e,t,[n,s,a],c)=>{r(e[s],[t,n,a],l=>l[0]===t&&l[1]===n,c)},_2=r=>(e,t,n)=>{const s=[];for(let a=0;a<n.numberOfInputs;a+=1)s.push(new Set);r.set(e,{activeInputs:s,outputs:new Set,passiveInputs:new WeakMap,renderer:t})},v2=r=>(e,t)=>{r.set(e,{activeInputs:new Set,passiveInputs:new WeakMap,renderer:t})},Qa=new WeakSet,ES=new WeakMap,wS=new WeakMap,TS=new WeakMap,CS=new WeakMap,AS=new WeakMap,bS=new WeakMap,ym=new WeakMap,Ey=new WeakMap,RS={construct(){return RS}},y2=r=>{try{const e=new Proxy(r,RS);new e}catch{return!1}return!0},wy=/^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/,Ty=(r,e)=>{const t=[];let n=r.replace(/^[\s]+/,""),s=n.match(wy);for(;s!==null;){const a=s[1].slice(1,-1),c=s[0].replace(/([\s]+)?;?$/,"").replace(a,new URL(a,e).toString());t.push(c),n=n.slice(s[0].length).replace(/^[\s]+/,""),s=n.match(wy)}return[t.join(";"),n]},Cy=r=>{if(r!==void 0&&!Array.isArray(r))throw new TypeError("The parameterDescriptors property of given value for processorCtor is not an array.")},Ay=r=>{if(!y2(r))throw new TypeError("The given value for processorCtor should be a constructor.");if(r.prototype===null||typeof r.prototype!="object")throw new TypeError("The given value for processorCtor should have a prototype.")},x2=(r,e,t,n,s,a,c,l,f,d,h,m,g)=>{let _=0;return(S,M,x={credentials:"omit"})=>{const v=h.get(S);if(v!==void 0&&v.has(M))return Promise.resolve();const R=d.get(S);if(R!==void 0){const C=R.get(M);if(C!==void 0)return C}const b=a(S),w=b.audioWorklet===void 0?s(M).then(([C,N])=>{const[D,P]=Ty(C,N),T=`${D};((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{${P}
})})(window,'_AWGS')`;return t(T)}).then(()=>{const C=g._AWGS.pop();if(C===void 0)throw new SyntaxError;n(b.currentTime,b.sampleRate,()=>C(class{},void 0,(N,D)=>{if(N.trim()==="")throw e();const P=Ey.get(b);if(P!==void 0){if(P.has(N))throw e();Ay(D),Cy(D.parameterDescriptors),P.set(N,D)}else Ay(D),Cy(D.parameterDescriptors),Ey.set(b,new Map([[N,D]]))},b.sampleRate,void 0,void 0))}):Promise.all([s(M),Promise.resolve(r(m,m))]).then(([[C,N],D])=>{const P=_+1;_=P;const[T,A]=Ty(C,N),q=`${T};((AudioWorkletProcessor,registerProcessor)=>{${A}
})(${D?"AudioWorkletProcessor":"class extends AudioWorkletProcessor {__b=new WeakSet();constructor(){super();(p=>p.postMessage=(q=>(m,t)=>q.call(p,m,t?t.filter(u=>!this.__b.has(u)):t))(p.postMessage))(this.port)}}"},(n,p)=>registerProcessor(n,class extends p{${D?"":"__c = (a) => a.forEach(e=>this.__b.add(e.buffer));"}process(i,o,p){${D?"":"i.forEach(this.__c);o.forEach(this.__c);this.__c(Object.values(p));"}return super.process(i.map(j=>j.some(k=>k.length===0)?[]:j),o,p)}}));registerProcessor('__sac${P}',class extends AudioWorkletProcessor{process(){return !1}})`,ee=new Blob([q],{type:"application/javascript; charset=utf-8"}),j=URL.createObjectURL(ee);return b.audioWorklet.addModule(j,x).then(()=>{if(l(b))return b;const Q=c(b);return Q.audioWorklet.addModule(j,x).then(()=>Q)}).then(Q=>{if(f===null)throw new SyntaxError;try{new f(Q,`__sac${P}`)}catch{throw new SyntaxError}}).finally(()=>URL.revokeObjectURL(j))});return R===void 0?d.set(S,new Map([[M,w]])):R.set(M,w),w.then(()=>{const C=h.get(S);C===void 0?h.set(S,new Set([M])):C.add(M)}).finally(()=>{const C=d.get(S);C!==void 0&&C.delete(M)}),w}},qs=(r,e)=>{const t=r.get(e);if(t===void 0)throw new Error("A value with the given key could not be found.");return t},Vf=(r,e)=>{const t=Array.from(r).filter(e);if(t.length>1)throw Error("More than one element was found.");if(t.length===0)throw Error("No element was found.");const[n]=t;return r.delete(n),n},PS=(r,e,t,n)=>{const s=qs(r,e),a=Vf(s,c=>c[0]===t&&c[1]===n);return s.size===0&&r.delete(e),a},_c=r=>qs(bS,r),Ja=r=>{if(Qa.has(r))throw new Error("The AudioNode is already stored.");Qa.add(r),_c(r).forEach(e=>e(!0))},DS=r=>"port"in r,vc=r=>{if(!Qa.has(r))throw new Error("The AudioNode is not stored.");Qa.delete(r),_c(r).forEach(e=>e(!1))},xm=(r,e)=>{!DS(r)&&e.every(t=>t.size===0)&&vc(r)},S2=(r,e,t,n,s,a,c,l,f,d,h,m,g)=>{const _=new WeakMap;return(S,M,x,v,R)=>{const{activeInputs:b,passiveInputs:w}=a(M),{outputs:C}=a(S),N=l(S),D=P=>{const T=f(M),A=f(S);if(P){const U=PS(w,S,x,v);r(b,S,U,!1),!R&&!m(S)&&t(A,T,x,v),g(M)&&Ja(M)}else{const U=n(b,S,x,v);e(w,v,U,!1),!R&&!m(S)&&s(A,T,x,v);const z=c(M);if(z===0)h(M)&&xm(M,b);else{const H=_.get(M);H!==void 0&&clearTimeout(H),_.set(M,setTimeout(()=>{h(M)&&xm(M,b)},z*1e3))}}};return d(C,[M,x,v],P=>P[0]===M&&P[1]===x&&P[2]===v,!0)?(N.add(D),h(S)?r(b,S,[x,v,D],!0):e(w,v,[S,x,D],!0),!0):!1}},M2=r=>(e,t,[n,s,a],c)=>{const l=e.get(n);l===void 0?e.set(n,new Set([[s,t,a]])):r(l,[s,t,a],f=>f[0]===s&&f[1]===t,c)},E2=r=>(e,t)=>{const n=r(e,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});t.connect(n).connect(e.destination);const s=()=>{t.removeEventListener("ended",s),t.disconnect(n),n.disconnect()};t.addEventListener("ended",s)},w2={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",fftSize:2048,maxDecibels:-30,minDecibels:-100,smoothingTimeConstant:.8},T2=(r,e,t,n,s,a)=>class extends r{constructor(l,f){const d=s(l),h={...w2,...f},m=n(d,h),g=a(d)?e():null;super(l,!1,m,g),this._nativeAnalyserNode=m}get fftSize(){return this._nativeAnalyserNode.fftSize}set fftSize(l){this._nativeAnalyserNode.fftSize=l}get frequencyBinCount(){return this._nativeAnalyserNode.frequencyBinCount}get maxDecibels(){return this._nativeAnalyserNode.maxDecibels}set maxDecibels(l){const f=this._nativeAnalyserNode.maxDecibels;if(this._nativeAnalyserNode.maxDecibels=l,!(l>this._nativeAnalyserNode.minDecibels))throw this._nativeAnalyserNode.maxDecibels=f,t()}get minDecibels(){return this._nativeAnalyserNode.minDecibels}set minDecibels(l){const f=this._nativeAnalyserNode.minDecibels;if(this._nativeAnalyserNode.minDecibels=l,!(this._nativeAnalyserNode.maxDecibels>l))throw this._nativeAnalyserNode.minDecibels=f,t()}get smoothingTimeConstant(){return this._nativeAnalyserNode.smoothingTimeConstant}set smoothingTimeConstant(l){this._nativeAnalyserNode.smoothingTimeConstant=l}getByteFrequencyData(l){this._nativeAnalyserNode.getByteFrequencyData(l)}getByteTimeDomainData(l){this._nativeAnalyserNode.getByteTimeDomainData(l)}getFloatFrequencyData(l){this._nativeAnalyserNode.getFloatFrequencyData(l)}getFloatTimeDomainData(l){this._nativeAnalyserNode.getFloatTimeDomainData(l)}},ti=(r,e)=>r.context===e,C2=(r,e,t)=>()=>{const n=new WeakMap,s=async(a,c)=>{let l=e(a);if(!ti(l,c)){const d={channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,fftSize:l.fftSize,maxDecibels:l.maxDecibels,minDecibels:l.minDecibels,smoothingTimeConstant:l.smoothingTimeConstant};l=r(c,d)}return n.set(c,l),await t(a,c,l),l};return{render(a,c){const l=n.get(c);return l!==void 0?Promise.resolve(l):s(a,c)}}},bf=r=>{try{r.copyToChannel(new Float32Array(1),0,-1)}catch{return!1}return!0},Oo=()=>new DOMException("","IndexSizeError"),og=r=>{r.getChannelData=(e=>t=>{try{return e.call(r,t)}catch(n){throw n.code===12?Oo():n}})(r.getChannelData)},A2={numberOfChannels:1},b2=(r,e,t,n,s,a,c,l)=>{let f=null;return class NS{constructor(h){if(s===null)throw new Error("Missing the native OfflineAudioContext constructor.");const{length:m,numberOfChannels:g,sampleRate:_}={...A2,...h};f===null&&(f=new s(1,1,44100));const S=n!==null&&e(a,a)?new n({length:m,numberOfChannels:g,sampleRate:_}):f.createBuffer(g,m,_);if(S.numberOfChannels===0)throw t();return typeof S.copyFromChannel!="function"?(c(S),og(S)):e(bf,()=>bf(S))||l(S),r.add(S),S}static[Symbol.hasInstance](h){return h!==null&&typeof h=="object"&&Object.getPrototypeOf(h)===NS.prototype||r.has(h)}}},Gi=-34028234663852886e22,ci=34028234663852886e22,Qr=r=>Qa.has(r),R2={buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1},P2=(r,e,t,n,s,a,c,l)=>class extends r{constructor(d,h){const m=a(d),g={...R2,...h},_=s(m,g),S=c(m),M=S?e():null;super(d,!1,_,M),this._audioBufferSourceNodeRenderer=M,this._isBufferNullified=!1,this._isBufferSet=g.buffer!==null,this._nativeAudioBufferSourceNode=_,this._onended=null,this._playbackRate=t(this,S,_.playbackRate,ci,Gi)}get buffer(){return this._isBufferNullified?null:this._nativeAudioBufferSourceNode.buffer}set buffer(d){if(this._nativeAudioBufferSourceNode.buffer=d,d!==null){if(this._isBufferSet)throw n();this._isBufferSet=!0}}get loop(){return this._nativeAudioBufferSourceNode.loop}set loop(d){this._nativeAudioBufferSourceNode.loop=d}get loopEnd(){return this._nativeAudioBufferSourceNode.loopEnd}set loopEnd(d){this._nativeAudioBufferSourceNode.loopEnd=d}get loopStart(){return this._nativeAudioBufferSourceNode.loopStart}set loopStart(d){this._nativeAudioBufferSourceNode.loopStart=d}get onended(){return this._onended}set onended(d){const h=typeof d=="function"?l(this,d):null;this._nativeAudioBufferSourceNode.onended=h;const m=this._nativeAudioBufferSourceNode.onended;this._onended=m!==null&&m===h?d:m}get playbackRate(){return this._playbackRate}start(d=0,h=0,m){if(this._nativeAudioBufferSourceNode.start(d,h,m),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.start=m===void 0?[d,h]:[d,h,m]),this.context.state!=="closed"){Ja(this);const g=()=>{this._nativeAudioBufferSourceNode.removeEventListener("ended",g),Qr(this)&&vc(this)};this._nativeAudioBufferSourceNode.addEventListener("ended",g)}}stop(d=0){this._nativeAudioBufferSourceNode.stop(d),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.stop=d)}},D2=(r,e,t,n,s)=>()=>{const a=new WeakMap;let c=null,l=null;const f=async(d,h)=>{let m=t(d);const g=ti(m,h);if(!g){const _={buffer:m.buffer,channelCount:m.channelCount,channelCountMode:m.channelCountMode,channelInterpretation:m.channelInterpretation,loop:m.loop,loopEnd:m.loopEnd,loopStart:m.loopStart,playbackRate:m.playbackRate.value};m=e(h,_),c!==null&&m.start(...c),l!==null&&m.stop(l)}return a.set(h,m),g?await r(h,d.playbackRate,m.playbackRate):await n(h,d.playbackRate,m.playbackRate),await s(d,h,m),m};return{set start(d){c=d},set stop(d){l=d},render(d,h){const m=a.get(h);return m!==void 0?Promise.resolve(m):f(d,h)}}},N2=r=>"playbackRate"in r,I2=r=>"frequency"in r&&"gain"in r,L2=r=>"offset"in r,F2=r=>!("frequency"in r)&&"gain"in r,U2=r=>"detune"in r&&"frequency"in r&&!("gain"in r),O2=r=>"pan"in r,Ri=r=>qs(ES,r),yc=r=>qs(TS,r),Sm=(r,e)=>{const{activeInputs:t}=Ri(r);t.forEach(s=>s.forEach(([a])=>{e.includes(r)||Sm(a,[...e,r])}));const n=N2(r)?[r.playbackRate]:DS(r)?Array.from(r.parameters.values()):I2(r)?[r.Q,r.detune,r.frequency,r.gain]:L2(r)?[r.offset]:F2(r)?[r.gain]:U2(r)?[r.detune,r.frequency]:O2(r)?[r.pan]:[];for(const s of n){const a=yc(s);a!==void 0&&a.activeInputs.forEach(([c])=>Sm(c,e))}Qr(r)&&vc(r)},k2=r=>{Sm(r.destination,[])},z2=(r,e,t,n,s,a,c,l)=>class extends r{constructor(d,h){const m=a(d),g=c(m),_=s(m,h,g),S=g?e(l):null;super(d,!1,_,S),this._isNodeOfNativeOfflineAudioContext=g,this._nativeAudioDestinationNode=_}get channelCount(){return this._nativeAudioDestinationNode.channelCount}set channelCount(d){if(this._isNodeOfNativeOfflineAudioContext)throw n();if(d>this._nativeAudioDestinationNode.maxChannelCount)throw t();this._nativeAudioDestinationNode.channelCount=d}get channelCountMode(){return this._nativeAudioDestinationNode.channelCountMode}set channelCountMode(d){if(this._isNodeOfNativeOfflineAudioContext)throw n();this._nativeAudioDestinationNode.channelCountMode=d}get maxChannelCount(){return this._nativeAudioDestinationNode.maxChannelCount}},B2=r=>{const e=new WeakMap,t=async(n,s)=>{const a=s.destination;return e.set(s,a),await r(n,s,a),a};return{render(n,s){const a=e.get(s);return a!==void 0?Promise.resolve(a):t(n,s)}}},V2=(r,e,t,n,s,a,c,l)=>(f,d)=>{const h=d.listener,m=()=>{const C=new Float32Array(1),N=e(d,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:9}),D=c(d);let P=!1,T=[0,0,-1,0,1,0],A=[0,0,0];const U=()=>{if(P)return;P=!0;const ee=n(d,256,9,0);ee.onaudioprocess=({inputBuffer:j})=>{const Q=[a(j,C,0),a(j,C,1),a(j,C,2),a(j,C,3),a(j,C,4),a(j,C,5)];Q.some((G,Y)=>G!==T[Y])&&(h.setOrientation(...Q),T=Q);const V=[a(j,C,6),a(j,C,7),a(j,C,8)];V.some((G,Y)=>G!==A[Y])&&(h.setPosition(...V),A=V)},N.connect(ee)},z=ee=>j=>{j!==T[ee]&&(T[ee]=j,h.setOrientation(...T))},H=ee=>j=>{j!==A[ee]&&(A[ee]=j,h.setPosition(...A))},q=(ee,j,Q)=>{const V=t(d,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:j});V.connect(N,0,ee),V.start(),Object.defineProperty(V.offset,"defaultValue",{get(){return j}});const G=r({context:f},D,V.offset,ci,Gi);return l(G,"value",Y=>()=>Y.call(G),Y=>O=>{try{Y.call(G,O)}catch(Z){if(Z.code!==9)throw Z}U(),D&&Q(O)}),G.cancelAndHoldAtTime=(Y=>D?()=>{throw s()}:(...O)=>{const Z=Y.apply(G,O);return U(),Z})(G.cancelAndHoldAtTime),G.cancelScheduledValues=(Y=>D?()=>{throw s()}:(...O)=>{const Z=Y.apply(G,O);return U(),Z})(G.cancelScheduledValues),G.exponentialRampToValueAtTime=(Y=>D?()=>{throw s()}:(...O)=>{const Z=Y.apply(G,O);return U(),Z})(G.exponentialRampToValueAtTime),G.linearRampToValueAtTime=(Y=>D?()=>{throw s()}:(...O)=>{const Z=Y.apply(G,O);return U(),Z})(G.linearRampToValueAtTime),G.setTargetAtTime=(Y=>D?()=>{throw s()}:(...O)=>{const Z=Y.apply(G,O);return U(),Z})(G.setTargetAtTime),G.setValueAtTime=(Y=>D?()=>{throw s()}:(...O)=>{const Z=Y.apply(G,O);return U(),Z})(G.setValueAtTime),G.setValueCurveAtTime=(Y=>D?()=>{throw s()}:(...O)=>{const Z=Y.apply(G,O);return U(),Z})(G.setValueCurveAtTime),G};return{forwardX:q(0,0,z(0)),forwardY:q(1,0,z(1)),forwardZ:q(2,-1,z(2)),positionX:q(6,0,H(0)),positionY:q(7,0,H(1)),positionZ:q(8,0,H(2)),upX:q(3,0,z(3)),upY:q(4,1,z(4)),upZ:q(5,0,z(5))}},{forwardX:g,forwardY:_,forwardZ:S,positionX:M,positionY:x,positionZ:v,upX:R,upY:b,upZ:w}=h.forwardX===void 0?m():h;return{get forwardX(){return g},get forwardY(){return _},get forwardZ(){return S},get positionX(){return M},get positionY(){return x},get positionZ(){return v},get upX(){return R},get upY(){return b},get upZ(){return w}}},Rf=r=>"context"in r,xc=r=>Rf(r[0]),ko=(r,e,t,n)=>{for(const s of r)if(t(s)){if(n)return!1;throw Error("The set contains at least one similar element.")}return r.add(e),!0},by=(r,e,[t,n],s)=>{ko(r,[e,t,n],a=>a[0]===e&&a[1]===t,s)},Ry=(r,[e,t,n],s)=>{const a=r.get(e);a===void 0?r.set(e,new Set([[t,n]])):ko(a,[t,n],c=>c[0]===t,s)},ol=r=>"inputs"in r,Pf=(r,e,t,n)=>{if(ol(e)){const s=e.inputs[n];return r.connect(s,t,0),[s,t,0]}return r.connect(e,t,n),[e,t,n]},IS=(r,e,t)=>{for(const n of r)if(n[0]===e&&n[1]===t)return r.delete(n),n;return null},H2=(r,e,t)=>Vf(r,n=>n[0]===e&&n[1]===t),LS=(r,e)=>{if(!_c(r).delete(e))throw new Error("Missing the expected event listener.")},FS=(r,e,t)=>{const n=qs(r,e),s=Vf(n,a=>a[0]===t);return n.size===0&&r.delete(e),s},Df=(r,e,t,n)=>{ol(e)?r.disconnect(e.inputs[n],t,0):r.disconnect(e,t,n)},Zt=r=>qs(wS,r),hc=r=>qs(CS,r),Lo=r=>ym.has(r),mf=r=>!Qa.has(r),Py=(r,e)=>new Promise(t=>{if(e!==null)t(!0);else{const n=r.createScriptProcessor(256,1,1),s=r.createGain(),a=r.createBuffer(1,2,44100),c=a.getChannelData(0);c[0]=1,c[1]=1;const l=r.createBufferSource();l.buffer=a,l.loop=!0,l.connect(n).connect(r.destination),l.connect(s),l.disconnect(s),n.onaudioprocess=f=>{const d=f.inputBuffer.getChannelData(0);Array.prototype.some.call(d,h=>h===1)?t(!0):t(!1),l.stop(),n.onaudioprocess=null,l.disconnect(n),n.disconnect(r.destination)},l.start()}}),hp=(r,e)=>{const t=new Map;for(const n of r)for(const s of n){const a=t.get(s);t.set(s,a===void 0?1:a+1)}t.forEach((n,s)=>e(s,n))},Dy=r=>"context"in r,G2=r=>{const e=new Map;r.connect=(t=>(n,s=0,a=0)=>{const c=Dy(n)?t(n,s,a):t(n,s),l=e.get(n);return l===void 0?e.set(n,[{input:a,output:s}]):l.every(f=>f.input!==a||f.output!==s)&&l.push({input:a,output:s}),c})(r.connect.bind(r)),r.disconnect=(t=>(n,s,a)=>{if(t.apply(r),n===void 0)e.clear();else if(typeof n=="number")for(const[c,l]of e){const f=l.filter(d=>d.output!==n);f.length===0?e.delete(c):e.set(c,f)}else if(e.has(n))if(s===void 0)e.delete(n);else{const c=e.get(n);if(c!==void 0){const l=c.filter(f=>f.output!==s&&(f.input!==a||a===void 0));l.length===0?e.delete(n):e.set(n,l)}}for(const[c,l]of e)l.forEach(f=>{Dy(c)?r.connect(c,f.output,f.input):r.connect(c,f.output)})})(r.disconnect)},W2=(r,e,t,n)=>{const{activeInputs:s,passiveInputs:a}=yc(e),{outputs:c}=Ri(r),l=_c(r),f=d=>{const h=Zt(r),m=hc(e);if(d){const g=FS(a,r,t);by(s,r,g,!1),!n&&!Lo(r)&&h.connect(m,t)}else{const g=H2(s,r,t);Ry(a,g,!1),!n&&!Lo(r)&&h.disconnect(m,t)}};return ko(c,[e,t],d=>d[0]===e&&d[1]===t,!0)?(l.add(f),Qr(r)?by(s,r,[t,f],!0):Ry(a,[r,t,f],!0),!0):!1},X2=(r,e,t,n)=>{const{activeInputs:s,passiveInputs:a}=Ri(e),c=IS(s[n],r,t);return c===null?[PS(a,r,t,n)[2],!1]:[c[2],!0]},q2=(r,e,t)=>{const{activeInputs:n,passiveInputs:s}=yc(e),a=IS(n,r,t);return a===null?[FS(s,r,t)[1],!1]:[a[2],!0]},ag=(r,e,t,n,s)=>{const[a,c]=X2(r,t,n,s);if(a!==null&&(LS(r,a),c&&!e&&!Lo(r)&&Df(Zt(r),Zt(t),n,s)),Qr(t)){const{activeInputs:l}=Ri(t);xm(t,l)}},lg=(r,e,t,n)=>{const[s,a]=q2(r,t,n);s!==null&&(LS(r,s),a&&!e&&!Lo(r)&&Zt(r).disconnect(hc(t),n))},j2=(r,e)=>{const t=Ri(r),n=[];for(const s of t.outputs)xc(s)?ag(r,e,...s):lg(r,e,...s),n.push(s[0]);return t.outputs.clear(),n},Y2=(r,e,t)=>{const n=Ri(r),s=[];for(const a of n.outputs)a[1]===t&&(xc(a)?ag(r,e,...a):lg(r,e,...a),s.push(a[0]),n.outputs.delete(a));return s},$2=(r,e,t,n,s)=>{const a=Ri(r);return Array.from(a.outputs).filter(c=>c[0]===t&&(n===void 0||c[1]===n)&&(s===void 0||c[2]===s)).map(c=>(xc(c)?ag(r,e,...c):lg(r,e,...c),a.outputs.delete(c),c[0]))},Z2=(r,e,t,n,s,a,c,l,f,d,h,m,g,_,S,M)=>class extends d{constructor(v,R,b,w){super(b),this._context=v,this._nativeAudioNode=b;const C=h(v);m(C)&&t(Py,()=>Py(C,M))!==!0&&G2(b),wS.set(this,b),bS.set(this,new Set),v.state!=="closed"&&R&&Ja(this),r(this,w,b)}get channelCount(){return this._nativeAudioNode.channelCount}set channelCount(v){this._nativeAudioNode.channelCount=v}get channelCountMode(){return this._nativeAudioNode.channelCountMode}set channelCountMode(v){this._nativeAudioNode.channelCountMode=v}get channelInterpretation(){return this._nativeAudioNode.channelInterpretation}set channelInterpretation(v){this._nativeAudioNode.channelInterpretation=v}get context(){return this._context}get numberOfInputs(){return this._nativeAudioNode.numberOfInputs}get numberOfOutputs(){return this._nativeAudioNode.numberOfOutputs}connect(v,R=0,b=0){if(R<0||R>=this._nativeAudioNode.numberOfOutputs)throw s();const w=h(this._context),C=S(w);if(g(v)||_(v))throw a();if(Rf(v)){const P=Zt(v);try{const A=Pf(this._nativeAudioNode,P,R,b),U=mf(this);(C||U)&&this._nativeAudioNode.disconnect(...A),this.context.state!=="closed"&&!U&&mf(v)&&Ja(v)}catch(A){throw A.code===12?a():A}if(e(this,v,R,b,C)){const A=f([this],v);hp(A,n(C))}return v}const N=hc(v);if(N.name==="playbackRate"&&N.maxValue===1024)throw c();try{this._nativeAudioNode.connect(N,R),(C||mf(this))&&this._nativeAudioNode.disconnect(N,R)}catch(P){throw P.code===12?a():P}if(W2(this,v,R,C)){const P=f([this],v);hp(P,n(C))}}disconnect(v,R,b){let w;const C=h(this._context),N=S(C);if(v===void 0)w=j2(this,N);else if(typeof v=="number"){if(v<0||v>=this.numberOfOutputs)throw s();w=Y2(this,N,v)}else{if(R!==void 0&&(R<0||R>=this.numberOfOutputs)||Rf(v)&&b!==void 0&&(b<0||b>=v.numberOfInputs))throw s();if(w=$2(this,N,v,R,b),w.length===0)throw a()}for(const D of w){const P=f([this],D);hp(P,l)}}},K2=(r,e,t,n,s,a,c,l,f,d,h,m,g)=>(_,S,M,x=null,v=null)=>{const R=M.value,b=new c2(R),w=S?n(b):null,C={get defaultValue(){return R},get maxValue(){return x===null?M.maxValue:x},get minValue(){return v===null?M.minValue:v},get value(){return M.value},set value(N){M.value=N,C.setValueAtTime(N,_.context.currentTime)},cancelAndHoldAtTime(N){if(typeof M.cancelAndHoldAtTime=="function")w===null&&b.flush(_.context.currentTime),b.add(s(N)),M.cancelAndHoldAtTime(N);else{const D=Array.from(b).pop();w===null&&b.flush(_.context.currentTime),b.add(s(N));const P=Array.from(b).pop();M.cancelScheduledValues(N),D!==P&&P!==void 0&&(P.type==="exponentialRampToValue"?M.exponentialRampToValueAtTime(P.value,P.endTime):P.type==="linearRampToValue"?M.linearRampToValueAtTime(P.value,P.endTime):P.type==="setValue"?M.setValueAtTime(P.value,P.startTime):P.type==="setValueCurve"&&M.setValueCurveAtTime(P.values,P.startTime,P.duration))}return C},cancelScheduledValues(N){return w===null&&b.flush(_.context.currentTime),b.add(a(N)),M.cancelScheduledValues(N),C},exponentialRampToValueAtTime(N,D){if(N===0)throw new RangeError;if(!Number.isFinite(D)||D<0)throw new RangeError;const P=_.context.currentTime;return w===null&&b.flush(P),Array.from(b).length===0&&(b.add(d(R,P)),M.setValueAtTime(R,P)),b.add(c(N,D)),M.exponentialRampToValueAtTime(N,D),C},linearRampToValueAtTime(N,D){const P=_.context.currentTime;return w===null&&b.flush(P),Array.from(b).length===0&&(b.add(d(R,P)),M.setValueAtTime(R,P)),b.add(l(N,D)),M.linearRampToValueAtTime(N,D),C},setTargetAtTime(N,D,P){return w===null&&b.flush(_.context.currentTime),b.add(f(N,D,P)),M.setTargetAtTime(N,D,P),C},setValueAtTime(N,D){return w===null&&b.flush(_.context.currentTime),b.add(d(N,D)),M.setValueAtTime(N,D),C},setValueCurveAtTime(N,D,P){const T=N instanceof Float32Array?N:new Float32Array(N);if(m!==null&&m.name==="webkitAudioContext"){const A=D+P,U=_.context.sampleRate,z=Math.ceil(D*U),H=Math.floor(A*U),q=H-z,ee=new Float32Array(q);for(let Q=0;Q<q;Q+=1){const V=(T.length-1)/P*((z+Q)/U-D),G=Math.floor(V),Y=Math.ceil(V);ee[Q]=G===Y?T[G]:(1-(V-G))*T[G]+(1-(Y-V))*T[Y]}w===null&&b.flush(_.context.currentTime),b.add(h(ee,D,P)),M.setValueCurveAtTime(ee,D,P);const j=H/U;j<A&&g(C,ee[ee.length-1],j),g(C,T[T.length-1],A)}else w===null&&b.flush(_.context.currentTime),b.add(h(T,D,P)),M.setValueCurveAtTime(T,D,P);return C}};return t.set(C,M),e.set(C,_),r(C,w),C},Q2=r=>({replay(e){for(const t of r)if(t.type==="exponentialRampToValue"){const{endTime:n,value:s}=t;e.exponentialRampToValueAtTime(s,n)}else if(t.type==="linearRampToValue"){const{endTime:n,value:s}=t;e.linearRampToValueAtTime(s,n)}else if(t.type==="setTarget"){const{startTime:n,target:s,timeConstant:a}=t;e.setTargetAtTime(s,n,a)}else if(t.type==="setValue"){const{startTime:n,value:s}=t;e.setValueAtTime(s,n)}else if(t.type==="setValueCurve"){const{duration:n,startTime:s,values:a}=t;e.setValueCurveAtTime(a,s,n)}else throw new Error("Can't apply an unknown automation.")}}),J2=(r,e,t,n,s,a,c,l,f,d,h,m,g,_,S,M,x,v,R,b)=>class extends S{constructor(C,N){super(C,N),this._nativeContext=C,this._audioWorklet=r===void 0?void 0:{addModule:(D,P)=>r(this,D,P)}}get audioWorklet(){return this._audioWorklet}createAnalyser(){return new e(this)}createBiquadFilter(){return new s(this)}createBuffer(C,N,D){return new t({length:N,numberOfChannels:C,sampleRate:D})}createBufferSource(){return new n(this)}createChannelMerger(C=6){return new a(this,{numberOfInputs:C})}createChannelSplitter(C=6){return new c(this,{numberOfOutputs:C})}createConstantSource(){return new l(this)}createConvolver(){return new f(this)}createDelay(C=1){return new h(this,{maxDelayTime:C})}createDynamicsCompressor(){return new m(this)}createGain(){return new g(this)}createIIRFilter(C,N){return new _(this,{feedback:N,feedforward:C})}createOscillator(){return new M(this)}createPanner(){return new x(this)}createPeriodicWave(C,N,D={disableNormalization:!1}){return new v(this,{...D,imag:N,real:C})}createStereoPanner(){return new R(this)}createWaveShaper(){return new b(this)}decodeAudioData(C,N,D){return d(this._nativeContext,C).then(P=>(typeof N=="function"&&N(P),P),P=>{throw typeof D=="function"&&D(P),P})}},eD={Q:1,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",detune:0,frequency:350,gain:0,type:"lowpass"},tD=(r,e,t,n,s,a,c,l)=>class extends r{constructor(d,h){const m=a(d),g={...eD,...h},_=s(m,g),S=c(m),M=S?t():null;super(d,!1,_,M),this._Q=e(this,S,_.Q,ci,Gi),this._detune=e(this,S,_.detune,1200*Math.log2(ci),-1200*Math.log2(ci)),this._frequency=e(this,S,_.frequency,d.sampleRate/2,0),this._gain=e(this,S,_.gain,40*Math.log10(ci),Gi),this._nativeBiquadFilterNode=_,l(this,1)}get detune(){return this._detune}get frequency(){return this._frequency}get gain(){return this._gain}get Q(){return this._Q}get type(){return this._nativeBiquadFilterNode.type}set type(d){this._nativeBiquadFilterNode.type=d}getFrequencyResponse(d,h,m){try{this._nativeBiquadFilterNode.getFrequencyResponse(d,h,m)}catch(g){throw g.code===11?n():g}if(d.length!==h.length||h.length!==m.length)throw n()}},nD=(r,e,t,n,s)=>()=>{const a=new WeakMap,c=async(l,f)=>{let d=t(l);const h=ti(d,f);if(!h){const m={Q:d.Q.value,channelCount:d.channelCount,channelCountMode:d.channelCountMode,channelInterpretation:d.channelInterpretation,detune:d.detune.value,frequency:d.frequency.value,gain:d.gain.value,type:d.type};d=e(f,m)}return a.set(f,d),h?(await r(f,l.Q,d.Q),await r(f,l.detune,d.detune),await r(f,l.frequency,d.frequency),await r(f,l.gain,d.gain)):(await n(f,l.Q,d.Q),await n(f,l.detune,d.detune),await n(f,l.frequency,d.frequency),await n(f,l.gain,d.gain)),await s(l,f,d),d};return{render(l,f){const d=a.get(f);return d!==void 0?Promise.resolve(d):c(l,f)}}},iD=(r,e)=>(t,n)=>{const s=e.get(t);if(s!==void 0)return s;const a=r.get(t);if(a!==void 0)return a;try{const c=n();return c instanceof Promise?(r.set(t,c),c.catch(()=>!1).then(l=>(r.delete(t),e.set(t,l),l))):(e.set(t,c),c)}catch{return e.set(t,!1),!1}},rD={channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:6},sD=(r,e,t,n,s)=>class extends r{constructor(c,l){const f=n(c),d={...rD,...l},h=t(f,d),m=s(f)?e():null;super(c,!1,h,m)}},oD=(r,e,t)=>()=>{const n=new WeakMap,s=async(a,c)=>{let l=e(a);if(!ti(l,c)){const d={channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,numberOfInputs:l.numberOfInputs};l=r(c,d)}return n.set(c,l),await t(a,c,l),l};return{render(a,c){const l=n.get(c);return l!==void 0?Promise.resolve(l):s(a,c)}}},aD={channelCount:6,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:6},lD=(r,e,t,n,s,a)=>class extends r{constructor(l,f){const d=n(l),h=a({...aD,...f}),m=t(d,h),g=s(d)?e():null;super(l,!1,m,g)}},cD=(r,e,t)=>()=>{const n=new WeakMap,s=async(a,c)=>{let l=e(a);if(!ti(l,c)){const d={channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,numberOfOutputs:l.numberOfOutputs};l=r(c,d)}return n.set(c,l),await t(a,c,l),l};return{render(a,c){const l=n.get(c);return l!==void 0?Promise.resolve(l):s(a,c)}}},uD=r=>(e,t,n)=>r(t,e,n),fD=r=>(e,t)=>{const n=r(e,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),s=e.createBuffer(1,2,44100);return n.buffer=s,n.loop=!0,n.connect(t),n.start(),()=>{n.stop(),n.disconnect(t)}},dD={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",offset:1},hD=(r,e,t,n,s,a,c)=>class extends r{constructor(f,d){const h=s(f),m={...dD,...d},g=n(h,m),_=a(h),S=_?t():null;super(f,!1,g,S),this._constantSourceNodeRenderer=S,this._nativeConstantSourceNode=g,this._offset=e(this,_,g.offset,ci,Gi),this._onended=null}get offset(){return this._offset}get onended(){return this._onended}set onended(f){const d=typeof f=="function"?c(this,f):null;this._nativeConstantSourceNode.onended=d;const h=this._nativeConstantSourceNode.onended;this._onended=h!==null&&h===d?f:h}start(f=0){if(this._nativeConstantSourceNode.start(f),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.start=f),this.context.state!=="closed"){Ja(this);const d=()=>{this._nativeConstantSourceNode.removeEventListener("ended",d),Qr(this)&&vc(this)};this._nativeConstantSourceNode.addEventListener("ended",d)}}stop(f=0){this._nativeConstantSourceNode.stop(f),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.stop=f)}},pD=(r,e,t,n,s)=>()=>{const a=new WeakMap;let c=null,l=null;const f=async(d,h)=>{let m=t(d);const g=ti(m,h);if(!g){const _={channelCount:m.channelCount,channelCountMode:m.channelCountMode,channelInterpretation:m.channelInterpretation,offset:m.offset.value};m=e(h,_),c!==null&&m.start(c),l!==null&&m.stop(l)}return a.set(h,m),g?await r(h,d.offset,m.offset):await n(h,d.offset,m.offset),await s(d,h,m),m};return{set start(d){c=d},set stop(d){l=d},render(d,h){const m=a.get(h);return m!==void 0?Promise.resolve(m):f(d,h)}}},mD=r=>e=>(r[0]=e,r[0]),gD={buffer:null,channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",disableNormalization:!1},_D=(r,e,t,n,s,a)=>class extends r{constructor(l,f){const d=n(l),h={...gD,...f},m=t(d,h),_=s(d)?e():null;super(l,!1,m,_),this._isBufferNullified=!1,this._nativeConvolverNode=m,h.buffer!==null&&a(this,h.buffer.duration)}get buffer(){return this._isBufferNullified?null:this._nativeConvolverNode.buffer}set buffer(l){if(this._nativeConvolverNode.buffer=l,l===null&&this._nativeConvolverNode.buffer!==null){const f=this._nativeConvolverNode.context;this._nativeConvolverNode.buffer=f.createBuffer(1,1,f.sampleRate),this._isBufferNullified=!0,a(this,0)}else this._isBufferNullified=!1,a(this,this._nativeConvolverNode.buffer===null?0:this._nativeConvolverNode.buffer.duration)}get normalize(){return this._nativeConvolverNode.normalize}set normalize(l){this._nativeConvolverNode.normalize=l}},vD=(r,e,t)=>()=>{const n=new WeakMap,s=async(a,c)=>{let l=e(a);if(!ti(l,c)){const d={buffer:l.buffer,channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,disableNormalization:!l.normalize};l=r(c,d)}return n.set(c,l),ol(l)?await t(a,c,l.inputs[0]):await t(a,c,l),l};return{render(a,c){const l=n.get(c);return l!==void 0?Promise.resolve(l):s(a,c)}}},yD=(r,e)=>(t,n,s)=>{if(e===null)throw new Error("Missing the native OfflineAudioContext constructor.");try{return new e(t,n,s)}catch(a){throw a.name==="SyntaxError"?r():a}},xD=()=>new DOMException("","DataCloneError"),Ny=r=>{const{port1:e,port2:t}=new MessageChannel;return new Promise(n=>{const s=()=>{t.onmessage=null,e.close(),t.close(),n()};t.onmessage=()=>s();try{e.postMessage(r,[r])}catch{}finally{s()}})},SD=(r,e,t,n,s,a,c,l,f,d,h)=>(m,g)=>{const _=c(m)?m:a(m);if(s.has(g)){const S=t();return Promise.reject(S)}try{s.add(g)}catch{}return e(f,()=>f(_))?_.decodeAudioData(g).then(S=>(Ny(g).catch(()=>{}),e(l,()=>l(S))||h(S),r.add(S),S)):new Promise((S,M)=>{const x=async()=>{try{await Ny(g)}catch{}},v=R=>{M(R),x()};try{_.decodeAudioData(g,R=>{typeof R.copyFromChannel!="function"&&(d(R),og(R)),r.add(R),x().then(()=>S(R))},R=>{v(R===null?n():R)})}catch(R){v(R)}})},MD=(r,e,t,n,s,a,c,l)=>(f,d)=>{const h=e.get(f);if(h===void 0)throw new Error("Missing the expected cycle count.");const m=a(f.context),g=l(m);if(h===d){if(e.delete(f),!g&&c(f)){const _=n(f),{outputs:S}=t(f);for(const M of S)if(xc(M)){const x=n(M[0]);r(_,x,M[1],M[2])}else{const x=s(M[0]);_.connect(x,M[1])}}}else e.set(f,h-d)},ED={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",delayTime:0,maxDelayTime:1},wD=(r,e,t,n,s,a,c)=>class extends r{constructor(f,d){const h=s(f),m={...ED,...d},g=n(h,m),_=a(h),S=_?t(m.maxDelayTime):null;super(f,!1,g,S),this._delayTime=e(this,_,g.delayTime),c(this,m.maxDelayTime)}get delayTime(){return this._delayTime}},TD=(r,e,t,n,s)=>a=>{const c=new WeakMap,l=async(f,d)=>{let h=t(f);const m=ti(h,d);if(!m){const g={channelCount:h.channelCount,channelCountMode:h.channelCountMode,channelInterpretation:h.channelInterpretation,delayTime:h.delayTime.value,maxDelayTime:a};h=e(d,g)}return c.set(d,h),m?await r(d,f.delayTime,h.delayTime):await n(d,f.delayTime,h.delayTime),await s(f,d,h),h};return{render(f,d){const h=c.get(d);return h!==void 0?Promise.resolve(h):l(f,d)}}},CD=r=>(e,t,n,s)=>r(e[s],a=>a[0]===t&&a[1]===n),AD=r=>"delayTime"in r,bD=(r,e,t)=>function n(s,a){const c=Rf(a)?a:t(r,a);if(AD(c))return[];if(s[0]===c)return[s];if(s.includes(c))return[];const{outputs:l}=e(c);return Array.from(l).map(f=>n([...s,c],f[0])).reduce((f,d)=>f.concat(d),[])},RD={attack:.003,channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",knee:30,ratio:12,release:.25,threshold:-24},PD=(r,e,t,n,s,a,c,l)=>class extends r{constructor(d,h){const m=a(d),g={...RD,...h},_=n(m,g),S=c(m),M=S?t():null;super(d,!1,_,M),this._attack=e(this,S,_.attack),this._knee=e(this,S,_.knee),this._nativeDynamicsCompressorNode=_,this._ratio=e(this,S,_.ratio),this._release=e(this,S,_.release),this._threshold=e(this,S,_.threshold),l(this,.006)}get attack(){return this._attack}get channelCount(){return this._nativeDynamicsCompressorNode.channelCount}set channelCount(d){const h=this._nativeDynamicsCompressorNode.channelCount;if(this._nativeDynamicsCompressorNode.channelCount=d,d>2)throw this._nativeDynamicsCompressorNode.channelCount=h,s()}get channelCountMode(){return this._nativeDynamicsCompressorNode.channelCountMode}set channelCountMode(d){const h=this._nativeDynamicsCompressorNode.channelCountMode;if(this._nativeDynamicsCompressorNode.channelCountMode=d,d==="max")throw this._nativeDynamicsCompressorNode.channelCountMode=h,s()}get knee(){return this._knee}get ratio(){return this._ratio}get reduction(){return typeof this._nativeDynamicsCompressorNode.reduction.value=="number"?this._nativeDynamicsCompressorNode.reduction.value:this._nativeDynamicsCompressorNode.reduction}get release(){return this._release}get threshold(){return this._threshold}},DD=(r,e,t,n,s)=>()=>{const a=new WeakMap,c=async(l,f)=>{let d=t(l);const h=ti(d,f);if(!h){const m={attack:d.attack.value,channelCount:d.channelCount,channelCountMode:d.channelCountMode,channelInterpretation:d.channelInterpretation,knee:d.knee.value,ratio:d.ratio.value,release:d.release.value,threshold:d.threshold.value};d=e(f,m)}return a.set(f,d),h?(await r(f,l.attack,d.attack),await r(f,l.knee,d.knee),await r(f,l.ratio,d.ratio),await r(f,l.release,d.release),await r(f,l.threshold,d.threshold)):(await n(f,l.attack,d.attack),await n(f,l.knee,d.knee),await n(f,l.ratio,d.ratio),await n(f,l.release,d.release),await n(f,l.threshold,d.threshold)),await s(l,f,d),d};return{render(l,f){const d=a.get(f);return d!==void 0?Promise.resolve(d):c(l,f)}}},ND=()=>new DOMException("","EncodingError"),ID=r=>e=>new Promise((t,n)=>{if(r===null){n(new SyntaxError);return}const s=r.document.head;if(s===null)n(new SyntaxError);else{const a=r.document.createElement("script"),c=new Blob([e],{type:"application/javascript"}),l=URL.createObjectURL(c),f=r.onerror,d=()=>{r.onerror=f,URL.revokeObjectURL(l)};r.onerror=(h,m,g,_,S)=>{if(m===l||m===r.location.href&&g===1&&_===1)return d(),n(S),!1;if(f!==null)return f(h,m,g,_,S)},a.onerror=()=>{d(),n(new SyntaxError)},a.onload=()=>{d(),t()},a.src=l,a.type="module",s.appendChild(a)}}),LD=r=>class{constructor(t){this._nativeEventTarget=t,this._listeners=new WeakMap}addEventListener(t,n,s){if(n!==null){let a=this._listeners.get(n);a===void 0&&(a=r(this,n),typeof n=="function"&&this._listeners.set(n,a)),this._nativeEventTarget.addEventListener(t,a,s)}}dispatchEvent(t){return this._nativeEventTarget.dispatchEvent(t)}removeEventListener(t,n,s){const a=n===null?void 0:this._listeners.get(n);this._nativeEventTarget.removeEventListener(t,a===void 0?null:a,s)}},FD=r=>(e,t,n)=>{Object.defineProperties(r,{currentFrame:{configurable:!0,get(){return Math.round(e*t)}},currentTime:{configurable:!0,get(){return e}}});try{return n()}finally{r!==null&&(delete r.currentFrame,delete r.currentTime)}},UD=r=>async e=>{try{const t=await fetch(e);if(t.ok)return[await t.text(),t.url]}catch{}throw r()},OD={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",gain:1},kD=(r,e,t,n,s,a)=>class extends r{constructor(l,f){const d=s(l),h={...OD,...f},m=n(d,h),g=a(d),_=g?t():null;super(l,!1,m,_),this._gain=e(this,g,m.gain,ci,Gi)}get gain(){return this._gain}},zD=(r,e,t,n,s)=>()=>{const a=new WeakMap,c=async(l,f)=>{let d=t(l);const h=ti(d,f);if(!h){const m={channelCount:d.channelCount,channelCountMode:d.channelCountMode,channelInterpretation:d.channelInterpretation,gain:d.gain.value};d=e(f,m)}return a.set(f,d),h?await r(f,l.gain,d.gain):await n(f,l.gain,d.gain),await s(l,f,d),d};return{render(l,f){const d=a.get(f);return d!==void 0?Promise.resolve(d):c(l,f)}}},BD=r=>e=>{const t=r(e);if(t.renderer===null)throw new Error("Missing the renderer of the given AudioNode in the audio graph.");return t.renderer},VD=r=>e=>{var t;return(t=r.get(e))!==null&&t!==void 0?t:0},HD=r=>e=>{const t=r(e);if(t.renderer===null)throw new Error("Missing the renderer of the given AudioParam in the audio graph.");return t.renderer},gi=()=>new DOMException("","InvalidStateError"),GD=r=>e=>{const t=r.get(e);if(t===void 0)throw gi();return t},WD=(r,e)=>t=>{let n=r.get(t);if(n!==void 0)return n;if(e===null)throw new Error("Missing the native OfflineAudioContext constructor.");return n=new e(1,1,44100),r.set(t,n),n},XD=r=>e=>{const t=r.get(e);if(t===void 0)throw new Error("The context has no set of AudioWorkletNodes.");return t},Hf=()=>new DOMException("","InvalidAccessError"),qD=r=>{r.getFrequencyResponse=(e=>(t,n,s)=>{if(t.length!==n.length||n.length!==s.length)throw Hf();return e.call(r,t,n,s)})(r.getFrequencyResponse)},jD={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers"},YD=(r,e,t,n,s,a)=>class extends r{constructor(l,f){const d=n(l),h=s(d),m={...jD,...f},g=e(d,h?null:l.baseLatency,m),_=h?t(m.feedback,m.feedforward):null;super(l,!1,g,_),qD(g),this._nativeIIRFilterNode=g,a(this,1)}getFrequencyResponse(l,f,d){return this._nativeIIRFilterNode.getFrequencyResponse(l,f,d)}},US=(r,e,t,n,s,a,c,l,f,d,h)=>{const m=d.length;let g=l;for(let _=0;_<m;_+=1){let S=t[0]*d[_];for(let M=1;M<s;M+=1){const x=g-M&f-1;S+=t[M]*a[x],S-=r[M]*c[x]}for(let M=s;M<n;M+=1)S+=t[M]*a[g-M&f-1];for(let M=s;M<e;M+=1)S-=r[M]*c[g-M&f-1];a[g]=d[_],c[g]=S,g=g+1&f-1,h[_]=S}return g},$D=(r,e,t,n)=>{const s=t instanceof Float64Array?t:new Float64Array(t),a=n instanceof Float64Array?n:new Float64Array(n),c=s.length,l=a.length,f=Math.min(c,l);if(s[0]!==1){for(let S=0;S<c;S+=1)a[S]/=s[0];for(let S=1;S<l;S+=1)s[S]/=s[0]}const d=32,h=new Float32Array(d),m=new Float32Array(d),g=e.createBuffer(r.numberOfChannels,r.length,r.sampleRate),_=r.numberOfChannels;for(let S=0;S<_;S+=1){const M=r.getChannelData(S),x=g.getChannelData(S);h.fill(0),m.fill(0),US(s,c,a,l,f,h,m,0,d,M,x)}return g},ZD=(r,e,t,n,s)=>(a,c)=>{const l=new WeakMap;let f=null;const d=async(h,m)=>{let g=null,_=e(h);const S=ti(_,m);if(m.createIIRFilter===void 0?g=r(m,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}):S||(_=m.createIIRFilter(c,a)),l.set(m,g===null?_:g),g!==null){if(f===null){if(t===null)throw new Error("Missing the native OfflineAudioContext constructor.");const x=new t(h.context.destination.channelCount,h.context.length,m.sampleRate);f=(async()=>{await n(h,x,x.destination);const v=await s(x);return $D(v,m,a,c)})()}const M=await f;return g.buffer=M,g.start(0),g}return await n(h,m,_),_};return{render(h,m){const g=l.get(m);return g!==void 0?Promise.resolve(g):d(h,m)}}},KD=(r,e,t,n,s,a)=>c=>(l,f)=>{const d=r.get(l);if(d===void 0){if(!c&&a(l)){const h=n(l),{outputs:m}=t(l);for(const g of m)if(xc(g)){const _=n(g[0]);e(h,_,g[1],g[2])}else{const _=s(g[0]);h.disconnect(_,g[1])}}r.set(l,f)}else r.set(l,d+f)},QD=r=>e=>r!==null&&e instanceof r,JD=r=>e=>r!==null&&typeof r.AudioNode=="function"&&e instanceof r.AudioNode,eN=r=>e=>r!==null&&typeof r.AudioParam=="function"&&e instanceof r.AudioParam,tN=(r,e)=>t=>r(t)||e(t),nN=r=>e=>r!==null&&e instanceof r,iN=r=>r!==null&&r.isSecureContext,rN=(r,e,t,n,s,a)=>class extends t{constructor(l,f){super(l),this._nativeContext=l,AS.set(this,l),n(l)&&s.set(l,new Set),this._destination=new r(this,f),this._listener=e(this,l),this._onstatechange=null}get currentTime(){return this._nativeContext.currentTime}get destination(){return this._destination}get listener(){return this._listener}get onstatechange(){return this._onstatechange}set onstatechange(l){const f=typeof l=="function"?a(this,l):null;this._nativeContext.onstatechange=f;const d=this._nativeContext.onstatechange;this._onstatechange=d!==null&&d===f?l:d}get sampleRate(){return this._nativeContext.sampleRate}get state(){return this._nativeContext.state}},pc=r=>{const e=new Uint32Array([1179011410,40,1163280727,544501094,16,131073,44100,176400,1048580,1635017060,4,0]);try{const t=r.decodeAudioData(e.buffer,()=>{});return t===void 0?!1:(t.catch(()=>{}),!0)}catch{}return!1},sN=(r,e)=>(t,n,s)=>{const a=new Set;return t.connect=(c=>(l,f=0,d=0)=>{const h=a.size===0;if(e(l))return c.call(t,l,f,d),r(a,[l,f,d],m=>m[0]===l&&m[1]===f&&m[2]===d,!0),h&&n(),l;c.call(t,l,f),r(a,[l,f],m=>m[0]===l&&m[1]===f,!0),h&&n()})(t.connect),t.disconnect=(c=>(l,f,d)=>{const h=a.size>0;if(l===void 0)c.apply(t),a.clear();else if(typeof l=="number"){c.call(t,l);for(const g of a)g[1]===l&&a.delete(g)}else{e(l)?c.call(t,l,f,d):c.call(t,l,f);for(const g of a)g[0]===l&&(f===void 0||g[1]===f)&&(d===void 0||g[2]===d)&&a.delete(g)}const m=a.size===0;h&&m&&s()})(t.disconnect),t},Gt=(r,e,t)=>{const n=e[t];n!==void 0&&n!==r[t]&&(r[t]=n)},An=(r,e)=>{Gt(r,e,"channelCount"),Gt(r,e,"channelCountMode"),Gt(r,e,"channelInterpretation")},Iy=r=>typeof r.getFloatTimeDomainData=="function",oN=r=>{r.getFloatTimeDomainData=e=>{const t=new Uint8Array(e.length);r.getByteTimeDomainData(t);const n=Math.max(t.length,r.fftSize);for(let s=0;s<n;s+=1)e[s]=(t[s]-128)*.0078125;return e}},aN=(r,e)=>(t,n)=>{const s=t.createAnalyser();if(An(s,n),!(n.maxDecibels>n.minDecibels))throw e();return Gt(s,n,"fftSize"),Gt(s,n,"maxDecibels"),Gt(s,n,"minDecibels"),Gt(s,n,"smoothingTimeConstant"),r(Iy,()=>Iy(s))||oN(s),s},lN=r=>r===null?null:r.hasOwnProperty("AudioBuffer")?r.AudioBuffer:null,en=(r,e,t)=>{const n=e[t];n!==void 0&&n!==r[t].value&&(r[t].value=n)},cN=r=>{r.start=(e=>{let t=!1;return(n=0,s=0,a)=>{if(t)throw gi();e.call(r,n,s,a),t=!0}})(r.start)},cg=r=>{r.start=(e=>(t=0,n=0,s)=>{if(typeof s=="number"&&s<0||n<0||t<0)throw new RangeError("The parameters can't be negative.");e.call(r,t,n,s)})(r.start)},ug=r=>{r.stop=(e=>(t=0)=>{if(t<0)throw new RangeError("The parameter can't be negative.");e.call(r,t)})(r.stop)},uN=(r,e,t,n,s,a,c,l,f,d,h)=>(m,g)=>{const _=m.createBufferSource();return An(_,g),en(_,g,"playbackRate"),Gt(_,g,"buffer"),Gt(_,g,"loop"),Gt(_,g,"loopEnd"),Gt(_,g,"loopStart"),e(t,()=>t(m))||cN(_),e(n,()=>n(m))||f(_),e(s,()=>s(m))||d(_,m),e(a,()=>a(m))||cg(_),e(c,()=>c(m))||h(_,m),e(l,()=>l(m))||ug(_),r(m,_),_},fN=r=>r===null?null:r.hasOwnProperty("AudioContext")?r.AudioContext:r.hasOwnProperty("webkitAudioContext")?r.webkitAudioContext:null,dN=(r,e)=>(t,n,s)=>{const a=t.destination;if(a.channelCount!==n)try{a.channelCount=n}catch{}s&&a.channelCountMode!=="explicit"&&(a.channelCountMode="explicit"),a.maxChannelCount===0&&Object.defineProperty(a,"maxChannelCount",{value:n});const c=r(t,{channelCount:n,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,gain:1});return e(c,"channelCount",l=>()=>l.call(c),l=>f=>{l.call(c,f);try{a.channelCount=f}catch(d){if(f>a.maxChannelCount)throw d}}),e(c,"channelCountMode",l=>()=>l.call(c),l=>f=>{l.call(c,f),a.channelCountMode=f}),e(c,"channelInterpretation",l=>()=>l.call(c),l=>f=>{l.call(c,f),a.channelInterpretation=f}),Object.defineProperty(c,"maxChannelCount",{get:()=>a.maxChannelCount}),c.connect(a),c},hN=r=>r===null?null:r.hasOwnProperty("AudioWorkletNode")?r.AudioWorkletNode:null,pN=(r,e)=>r===null?512:Math.max(512,Math.min(16384,Math.pow(2,Math.round(Math.log2(r*e))))),OS=(r,e)=>{const t=r.createBiquadFilter();return An(t,e),en(t,e,"Q"),en(t,e,"detune"),en(t,e,"frequency"),en(t,e,"gain"),Gt(t,e,"type"),t},mN=(r,e)=>(t,n)=>{const s=t.createChannelMerger(n.numberOfInputs);return r!==null&&r.name==="webkitAudioContext"&&e(t,s),An(s,n),s},gN=r=>{const e=r.numberOfOutputs;Object.defineProperty(r,"channelCount",{get:()=>e,set:t=>{if(t!==e)throw gi()}}),Object.defineProperty(r,"channelCountMode",{get:()=>"explicit",set:t=>{if(t!=="explicit")throw gi()}}),Object.defineProperty(r,"channelInterpretation",{get:()=>"discrete",set:t=>{if(t!=="discrete")throw gi()}})},fg=(r,e)=>{const t=r.createChannelSplitter(e.numberOfOutputs);return An(t,e),gN(t),t},_N=(r,e,t,n,s)=>(a,c)=>{if(a.createConstantSource===void 0)return t(a,c);const l=a.createConstantSource();return An(l,c),en(l,c,"offset"),e(n,()=>n(a))||cg(l),e(s,()=>s(a))||ug(l),r(a,l),l},al=(r,e)=>(r.connect=e.connect.bind(e),r.disconnect=e.disconnect.bind(e),r),vN=(r,e,t,n)=>(s,{offset:a,...c})=>{const l=s.createBuffer(1,2,44100),f=e(s,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),d=t(s,{...c,gain:a}),h=l.getChannelData(0);h[0]=1,h[1]=1,f.buffer=l,f.loop=!0;const m={get bufferSize(){},get channelCount(){return d.channelCount},set channelCount(S){d.channelCount=S},get channelCountMode(){return d.channelCountMode},set channelCountMode(S){d.channelCountMode=S},get channelInterpretation(){return d.channelInterpretation},set channelInterpretation(S){d.channelInterpretation=S},get context(){return d.context},get inputs(){return[]},get numberOfInputs(){return f.numberOfInputs},get numberOfOutputs(){return d.numberOfOutputs},get offset(){return d.gain},get onended(){return f.onended},set onended(S){f.onended=S},addEventListener(...S){return f.addEventListener(S[0],S[1],S[2])},dispatchEvent(...S){return f.dispatchEvent(S[0])},removeEventListener(...S){return f.removeEventListener(S[0],S[1],S[2])},start(S=0){f.start.call(f,S)},stop(S=0){f.stop.call(f,S)}},g=()=>f.connect(d),_=()=>f.disconnect(d);return r(s,f),n(al(m,d),g,_)},yN=(r,e)=>(t,n)=>{const s=t.createConvolver();if(An(s,n),n.disableNormalization===s.normalize&&(s.normalize=!n.disableNormalization),Gt(s,n,"buffer"),n.channelCount>2||(e(s,"channelCount",a=>()=>a.call(s),a=>c=>{if(c>2)throw r();return a.call(s,c)}),n.channelCountMode==="max"))throw r();return e(s,"channelCountMode",a=>()=>a.call(s),a=>c=>{if(c==="max")throw r();return a.call(s,c)}),s},kS=(r,e)=>{const t=r.createDelay(e.maxDelayTime);return An(t,e),en(t,e,"delayTime"),t},xN=r=>(e,t)=>{const n=e.createDynamicsCompressor();if(An(n,t),t.channelCount>2||t.channelCountMode==="max")throw r();return en(n,t,"attack"),en(n,t,"knee"),en(n,t,"ratio"),en(n,t,"release"),en(n,t,"threshold"),n},sr=(r,e)=>{const t=r.createGain();return An(t,e),en(t,e,"gain"),t},SN=r=>(e,t,n)=>{if(e.createIIRFilter===void 0)return r(e,t,n);const s=e.createIIRFilter(n.feedforward,n.feedback);return An(s,n),s};function MN(r,e){const t=e[0]*e[0]+e[1]*e[1];return[(r[0]*e[0]+r[1]*e[1])/t,(r[1]*e[0]-r[0]*e[1])/t]}function EN(r,e){return[r[0]*e[0]-r[1]*e[1],r[0]*e[1]+r[1]*e[0]]}function Ly(r,e){let t=[0,0];for(let n=r.length-1;n>=0;n-=1)t=EN(t,e),t[0]+=r[n];return t}const wN=(r,e,t,n)=>(s,a,{channelCount:c,channelCountMode:l,channelInterpretation:f,feedback:d,feedforward:h})=>{const m=pN(a,s.sampleRate),g=d instanceof Float64Array?d:new Float64Array(d),_=h instanceof Float64Array?h:new Float64Array(h),S=g.length,M=_.length,x=Math.min(S,M);if(S===0||S>20)throw n();if(g[0]===0)throw e();if(M===0||M>20)throw n();if(_[0]===0)throw e();if(g[0]!==1){for(let P=0;P<M;P+=1)_[P]/=g[0];for(let P=1;P<S;P+=1)g[P]/=g[0]}const v=t(s,m,c,c);v.channelCount=c,v.channelCountMode=l,v.channelInterpretation=f;const R=32,b=[],w=[],C=[];for(let P=0;P<c;P+=1){b.push(0);const T=new Float32Array(R),A=new Float32Array(R);T.fill(0),A.fill(0),w.push(T),C.push(A)}v.onaudioprocess=P=>{const T=P.inputBuffer,A=P.outputBuffer,U=T.numberOfChannels;for(let z=0;z<U;z+=1){const H=T.getChannelData(z),q=A.getChannelData(z);b[z]=US(g,S,_,M,x,w[z],C[z],b[z],R,H,q)}};const N=s.sampleRate/2;return al({get bufferSize(){return m},get channelCount(){return v.channelCount},set channelCount(P){v.channelCount=P},get channelCountMode(){return v.channelCountMode},set channelCountMode(P){v.channelCountMode=P},get channelInterpretation(){return v.channelInterpretation},set channelInterpretation(P){v.channelInterpretation=P},get context(){return v.context},get inputs(){return[v]},get numberOfInputs(){return v.numberOfInputs},get numberOfOutputs(){return v.numberOfOutputs},addEventListener(...P){return v.addEventListener(P[0],P[1],P[2])},dispatchEvent(...P){return v.dispatchEvent(P[0])},getFrequencyResponse(P,T,A){if(P.length!==T.length||T.length!==A.length)throw r();const U=P.length;for(let z=0;z<U;z+=1){const H=-Math.PI*(P[z]/N),q=[Math.cos(H),Math.sin(H)],ee=Ly(_,q),j=Ly(g,q),Q=MN(ee,j);T[z]=Math.sqrt(Q[0]*Q[0]+Q[1]*Q[1]),A[z]=Math.atan2(Q[1],Q[0])}},removeEventListener(...P){return v.removeEventListener(P[0],P[1],P[2])}},v)},TN=r=>r===null?null:r.hasOwnProperty("OfflineAudioContext")?r.OfflineAudioContext:r.hasOwnProperty("webkitOfflineAudioContext")?r.webkitOfflineAudioContext:null,CN=(r,e,t,n,s,a)=>(c,l)=>{const f=c.createOscillator();return An(f,l),en(f,l,"detune"),en(f,l,"frequency"),l.periodicWave!==void 0?f.setPeriodicWave(l.periodicWave):Gt(f,l,"type"),e(t,()=>t(c))||cg(f),e(n,()=>n(c))||a(f,c),e(s,()=>s(c))||ug(f),r(c,f),f},AN=r=>(e,t)=>{const n=e.createPanner();return n.orientationX===void 0?r(e,t):(An(n,t),en(n,t,"orientationX"),en(n,t,"orientationY"),en(n,t,"orientationZ"),en(n,t,"positionX"),en(n,t,"positionY"),en(n,t,"positionZ"),Gt(n,t,"coneInnerAngle"),Gt(n,t,"coneOuterAngle"),Gt(n,t,"coneOuterGain"),Gt(n,t,"distanceModel"),Gt(n,t,"maxDistance"),Gt(n,t,"panningModel"),Gt(n,t,"refDistance"),Gt(n,t,"rolloffFactor"),n)},bN=(r,e,t,n,s,a,c,l,f,d)=>(h,{coneInnerAngle:m,coneOuterAngle:g,coneOuterGain:_,distanceModel:S,maxDistance:M,orientationX:x,orientationY:v,orientationZ:R,panningModel:b,positionX:w,positionY:C,positionZ:N,refDistance:D,rolloffFactor:P,...T})=>{const A=h.createPanner();if(T.channelCount>2||T.channelCountMode==="max")throw c();An(A,T);const U={channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"},z=t(h,{...U,channelInterpretation:"speakers",numberOfInputs:6}),H=n(h,{...T,gain:1}),q=n(h,{...U,gain:1}),ee=n(h,{...U,gain:0}),j=n(h,{...U,gain:0}),Q=n(h,{...U,gain:0}),V=n(h,{...U,gain:0}),G=n(h,{...U,gain:0}),Y=s(h,256,6,1),O=a(h,{...U,curve:new Float32Array([1,1]),oversample:"none"});let Z=[x,v,R],Ae=[w,C,N];const ne=new Float32Array(1);Y.onaudioprocess=({inputBuffer:fe})=>{const be=[f(fe,ne,0),f(fe,ne,1),f(fe,ne,2)];be.some((xt,ct)=>xt!==Z[ct])&&(A.setOrientation(...be),Z=be);const Ye=[f(fe,ne,3),f(fe,ne,4),f(fe,ne,5)];Ye.some((xt,ct)=>xt!==Ae[ct])&&(A.setPosition(...Ye),Ae=Ye)},Object.defineProperty(ee.gain,"defaultValue",{get:()=>0}),Object.defineProperty(j.gain,"defaultValue",{get:()=>0}),Object.defineProperty(Q.gain,"defaultValue",{get:()=>0}),Object.defineProperty(V.gain,"defaultValue",{get:()=>0}),Object.defineProperty(G.gain,"defaultValue",{get:()=>0});const ae={get bufferSize(){},get channelCount(){return A.channelCount},set channelCount(fe){if(fe>2)throw c();H.channelCount=fe,A.channelCount=fe},get channelCountMode(){return A.channelCountMode},set channelCountMode(fe){if(fe==="max")throw c();H.channelCountMode=fe,A.channelCountMode=fe},get channelInterpretation(){return A.channelInterpretation},set channelInterpretation(fe){H.channelInterpretation=fe,A.channelInterpretation=fe},get coneInnerAngle(){return A.coneInnerAngle},set coneInnerAngle(fe){A.coneInnerAngle=fe},get coneOuterAngle(){return A.coneOuterAngle},set coneOuterAngle(fe){A.coneOuterAngle=fe},get coneOuterGain(){return A.coneOuterGain},set coneOuterGain(fe){if(fe<0||fe>1)throw e();A.coneOuterGain=fe},get context(){return A.context},get distanceModel(){return A.distanceModel},set distanceModel(fe){A.distanceModel=fe},get inputs(){return[H]},get maxDistance(){return A.maxDistance},set maxDistance(fe){if(fe<0)throw new RangeError;A.maxDistance=fe},get numberOfInputs(){return A.numberOfInputs},get numberOfOutputs(){return A.numberOfOutputs},get orientationX(){return q.gain},get orientationY(){return ee.gain},get orientationZ(){return j.gain},get panningModel(){return A.panningModel},set panningModel(fe){A.panningModel=fe},get positionX(){return Q.gain},get positionY(){return V.gain},get positionZ(){return G.gain},get refDistance(){return A.refDistance},set refDistance(fe){if(fe<0)throw new RangeError;A.refDistance=fe},get rolloffFactor(){return A.rolloffFactor},set rolloffFactor(fe){if(fe<0)throw new RangeError;A.rolloffFactor=fe},addEventListener(...fe){return H.addEventListener(fe[0],fe[1],fe[2])},dispatchEvent(...fe){return H.dispatchEvent(fe[0])},removeEventListener(...fe){return H.removeEventListener(fe[0],fe[1],fe[2])}};m!==ae.coneInnerAngle&&(ae.coneInnerAngle=m),g!==ae.coneOuterAngle&&(ae.coneOuterAngle=g),_!==ae.coneOuterGain&&(ae.coneOuterGain=_),S!==ae.distanceModel&&(ae.distanceModel=S),M!==ae.maxDistance&&(ae.maxDistance=M),x!==ae.orientationX.value&&(ae.orientationX.value=x),v!==ae.orientationY.value&&(ae.orientationY.value=v),R!==ae.orientationZ.value&&(ae.orientationZ.value=R),b!==ae.panningModel&&(ae.panningModel=b),w!==ae.positionX.value&&(ae.positionX.value=w),C!==ae.positionY.value&&(ae.positionY.value=C),N!==ae.positionZ.value&&(ae.positionZ.value=N),D!==ae.refDistance&&(ae.refDistance=D),P!==ae.rolloffFactor&&(ae.rolloffFactor=P),(Z[0]!==1||Z[1]!==0||Z[2]!==0)&&A.setOrientation(...Z),(Ae[0]!==0||Ae[1]!==0||Ae[2]!==0)&&A.setPosition(...Ae);const Se=()=>{H.connect(A),r(H,O,0,0),O.connect(q).connect(z,0,0),O.connect(ee).connect(z,0,1),O.connect(j).connect(z,0,2),O.connect(Q).connect(z,0,3),O.connect(V).connect(z,0,4),O.connect(G).connect(z,0,5),z.connect(Y).connect(h.destination)},ge=()=>{H.disconnect(A),l(H,O,0,0),O.disconnect(q),q.disconnect(z),O.disconnect(ee),ee.disconnect(z),O.disconnect(j),j.disconnect(z),O.disconnect(Q),Q.disconnect(z),O.disconnect(V),V.disconnect(z),O.disconnect(G),G.disconnect(z),z.disconnect(Y),Y.disconnect(h.destination)};return d(al(ae,A),Se,ge)},RN=r=>(e,{disableNormalization:t,imag:n,real:s})=>{const a=n instanceof Float32Array?n:new Float32Array(n),c=s instanceof Float32Array?s:new Float32Array(s),l=e.createPeriodicWave(c,a,{disableNormalization:t});if(Array.from(n).length<2)throw r();return l},Gf=(r,e,t,n)=>r.createScriptProcessor(e,t,n),PN=(r,e)=>(t,n)=>{const s=n.channelCountMode;if(s==="clamped-max")throw e();if(t.createStereoPanner===void 0)return r(t,n);const a=t.createStereoPanner();return An(a,n),en(a,n,"pan"),Object.defineProperty(a,"channelCountMode",{get:()=>s,set:c=>{if(c!==s)throw e()}}),a},DN=(r,e,t,n,s,a)=>{const l=new Float32Array([1,1]),f=Math.PI/2,d={channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"},h={...d,oversample:"none"},m=(S,M,x,v)=>{const R=new Float32Array(16385),b=new Float32Array(16385);for(let T=0;T<16385;T+=1){const A=T/16384*f;R[T]=Math.cos(A),b[T]=Math.sin(A)}const w=t(S,{...d,gain:0}),C=n(S,{...h,curve:R}),N=n(S,{...h,curve:l}),D=t(S,{...d,gain:0}),P=n(S,{...h,curve:b});return{connectGraph(){M.connect(w),M.connect(N.inputs===void 0?N:N.inputs[0]),M.connect(D),N.connect(x),x.connect(C.inputs===void 0?C:C.inputs[0]),x.connect(P.inputs===void 0?P:P.inputs[0]),C.connect(w.gain),P.connect(D.gain),w.connect(v,0,0),D.connect(v,0,1)},disconnectGraph(){M.disconnect(w),M.disconnect(N.inputs===void 0?N:N.inputs[0]),M.disconnect(D),N.disconnect(x),x.disconnect(C.inputs===void 0?C:C.inputs[0]),x.disconnect(P.inputs===void 0?P:P.inputs[0]),C.disconnect(w.gain),P.disconnect(D.gain),w.disconnect(v,0,0),D.disconnect(v,0,1)}}},g=(S,M,x,v)=>{const R=new Float32Array(16385),b=new Float32Array(16385),w=new Float32Array(16385),C=new Float32Array(16385),N=Math.floor(16385/2);for(let Q=0;Q<16385;Q+=1)if(Q>N){const V=(Q-N)/(16384-N)*f;R[Q]=Math.cos(V),b[Q]=Math.sin(V),w[Q]=0,C[Q]=1}else{const V=Q/(16384-N)*f;R[Q]=1,b[Q]=0,w[Q]=Math.cos(V),C[Q]=Math.sin(V)}const D=e(S,{channelCount:2,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:2}),P=t(S,{...d,gain:0}),T=n(S,{...h,curve:R}),A=t(S,{...d,gain:0}),U=n(S,{...h,curve:b}),z=n(S,{...h,curve:l}),H=t(S,{...d,gain:0}),q=n(S,{...h,curve:w}),ee=t(S,{...d,gain:0}),j=n(S,{...h,curve:C});return{connectGraph(){M.connect(D),M.connect(z.inputs===void 0?z:z.inputs[0]),D.connect(P,0),D.connect(A,0),D.connect(H,1),D.connect(ee,1),z.connect(x),x.connect(T.inputs===void 0?T:T.inputs[0]),x.connect(U.inputs===void 0?U:U.inputs[0]),x.connect(q.inputs===void 0?q:q.inputs[0]),x.connect(j.inputs===void 0?j:j.inputs[0]),T.connect(P.gain),U.connect(A.gain),q.connect(H.gain),j.connect(ee.gain),P.connect(v,0,0),H.connect(v,0,0),A.connect(v,0,1),ee.connect(v,0,1)},disconnectGraph(){M.disconnect(D),M.disconnect(z.inputs===void 0?z:z.inputs[0]),D.disconnect(P,0),D.disconnect(A,0),D.disconnect(H,1),D.disconnect(ee,1),z.disconnect(x),x.disconnect(T.inputs===void 0?T:T.inputs[0]),x.disconnect(U.inputs===void 0?U:U.inputs[0]),x.disconnect(q.inputs===void 0?q:q.inputs[0]),x.disconnect(j.inputs===void 0?j:j.inputs[0]),T.disconnect(P.gain),U.disconnect(A.gain),q.disconnect(H.gain),j.disconnect(ee.gain),P.disconnect(v,0,0),H.disconnect(v,0,0),A.disconnect(v,0,1),ee.disconnect(v,0,1)}}},_=(S,M,x,v,R)=>{if(M===1)return m(S,x,v,R);if(M===2)return g(S,x,v,R);throw s()};return(S,{channelCount:M,channelCountMode:x,pan:v,...R})=>{if(x==="max")throw s();const b=r(S,{...R,channelCount:1,channelCountMode:x,numberOfInputs:2}),w=t(S,{...R,channelCount:M,channelCountMode:x,gain:1}),C=t(S,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:v});let{connectGraph:N,disconnectGraph:D}=_(S,M,w,C,b);Object.defineProperty(C.gain,"defaultValue",{get:()=>0}),Object.defineProperty(C.gain,"maxValue",{get:()=>1}),Object.defineProperty(C.gain,"minValue",{get:()=>-1});const P={get bufferSize(){},get channelCount(){return w.channelCount},set channelCount(z){w.channelCount!==z&&(T&&D(),{connectGraph:N,disconnectGraph:D}=_(S,z,w,C,b),T&&N()),w.channelCount=z},get channelCountMode(){return w.channelCountMode},set channelCountMode(z){if(z==="clamped-max"||z==="max")throw s();w.channelCountMode=z},get channelInterpretation(){return w.channelInterpretation},set channelInterpretation(z){w.channelInterpretation=z},get context(){return w.context},get inputs(){return[w]},get numberOfInputs(){return w.numberOfInputs},get numberOfOutputs(){return w.numberOfOutputs},get pan(){return C.gain},addEventListener(...z){return w.addEventListener(z[0],z[1],z[2])},dispatchEvent(...z){return w.dispatchEvent(z[0])},removeEventListener(...z){return w.removeEventListener(z[0],z[1],z[2])}};let T=!1;const A=()=>{N(),T=!0},U=()=>{D(),T=!1};return a(al(P,b),A,U)}},NN=(r,e,t,n,s,a,c)=>(l,f)=>{const d=l.createWaveShaper();if(a!==null&&a.name==="webkitAudioContext"&&l.createGain().gain.automationRate===void 0)return t(l,f);An(d,f);const h=f.curve===null||f.curve instanceof Float32Array?f.curve:new Float32Array(f.curve);if(h!==null&&h.length<2)throw e();Gt(d,{curve:h},"curve"),Gt(d,f,"oversample");let m=null,g=!1;return c(d,"curve",M=>()=>M.call(d),M=>x=>(M.call(d,x),g&&(n(x)&&m===null?m=r(l,d):!n(x)&&m!==null&&(m(),m=null)),x)),s(d,()=>{g=!0,n(d.curve)&&(m=r(l,d))},()=>{g=!1,m!==null&&(m(),m=null)})},IN=(r,e,t,n,s)=>(a,{curve:c,oversample:l,...f})=>{const d=a.createWaveShaper(),h=a.createWaveShaper();An(d,f),An(h,f);const m=t(a,{...f,gain:1}),g=t(a,{...f,gain:-1}),_=t(a,{...f,gain:1}),S=t(a,{...f,gain:-1});let M=null,x=!1,v=null;const R={get bufferSize(){},get channelCount(){return d.channelCount},set channelCount(C){m.channelCount=C,g.channelCount=C,d.channelCount=C,_.channelCount=C,h.channelCount=C,S.channelCount=C},get channelCountMode(){return d.channelCountMode},set channelCountMode(C){m.channelCountMode=C,g.channelCountMode=C,d.channelCountMode=C,_.channelCountMode=C,h.channelCountMode=C,S.channelCountMode=C},get channelInterpretation(){return d.channelInterpretation},set channelInterpretation(C){m.channelInterpretation=C,g.channelInterpretation=C,d.channelInterpretation=C,_.channelInterpretation=C,h.channelInterpretation=C,S.channelInterpretation=C},get context(){return d.context},get curve(){return v},set curve(C){if(C!==null&&C.length<2)throw e();if(C===null)d.curve=C,h.curve=C;else{const N=C.length,D=new Float32Array(N+2-N%2),P=new Float32Array(N+2-N%2);D[0]=C[0],P[0]=-C[N-1];const T=Math.ceil((N+1)/2),A=(N+1)/2-1;for(let U=1;U<T;U+=1){const z=U/T*A,H=Math.floor(z),q=Math.ceil(z);D[U]=H===q?C[H]:(1-(z-H))*C[H]+(1-(q-z))*C[q],P[U]=H===q?-C[N-1-H]:-((1-(z-H))*C[N-1-H])-(1-(q-z))*C[N-1-q]}D[T]=N%2===1?C[T-1]:(C[T-2]+C[T-1])/2,d.curve=D,h.curve=P}v=C,x&&(n(v)&&M===null?M=r(a,m):M!==null&&(M(),M=null))},get inputs(){return[m]},get numberOfInputs(){return d.numberOfInputs},get numberOfOutputs(){return d.numberOfOutputs},get oversample(){return d.oversample},set oversample(C){d.oversample=C,h.oversample=C},addEventListener(...C){return m.addEventListener(C[0],C[1],C[2])},dispatchEvent(...C){return m.dispatchEvent(C[0])},removeEventListener(...C){return m.removeEventListener(C[0],C[1],C[2])}};c!==null&&(R.curve=c instanceof Float32Array?c:new Float32Array(c)),l!==R.oversample&&(R.oversample=l);const b=()=>{m.connect(d).connect(_),m.connect(g).connect(h).connect(S).connect(_),x=!0,n(v)&&(M=r(a,m))},w=()=>{m.disconnect(d),d.disconnect(_),m.disconnect(g),g.disconnect(h),h.disconnect(S),S.disconnect(_),x=!1,M!==null&&(M(),M=null)};return s(al(R,_),b,w)},Xi=()=>new DOMException("","NotSupportedError"),LN={numberOfChannels:1},FN=(r,e,t,n,s)=>class extends r{constructor(c,l,f){let d;if(typeof c=="number"&&l!==void 0&&f!==void 0)d={length:l,numberOfChannels:c,sampleRate:f};else if(typeof c=="object")d=c;else throw new Error("The given parameters are not valid.");const{length:h,numberOfChannels:m,sampleRate:g}={...LN,...d},_=n(m,h,g);e(pc,()=>pc(_))||_.addEventListener("statechange",(()=>{let S=0;const M=x=>{this._state==="running"&&(S>0?(_.removeEventListener("statechange",M),x.stopImmediatePropagation(),this._waitForThePromiseToSettle(x)):S+=1)};return M})()),super(_,m),this._length=h,this._nativeOfflineAudioContext=_,this._state=null}get length(){return this._nativeOfflineAudioContext.length===void 0?this._length:this._nativeOfflineAudioContext.length}get state(){return this._state===null?this._nativeOfflineAudioContext.state:this._state}startRendering(){return this._state==="running"?Promise.reject(t()):(this._state="running",s(this.destination,this._nativeOfflineAudioContext).finally(()=>{this._state=null,k2(this)}))}_waitForThePromiseToSettle(c){this._state===null?this._nativeOfflineAudioContext.dispatchEvent(c):setTimeout(()=>this._waitForThePromiseToSettle(c))}},UN={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",detune:0,frequency:440,periodicWave:void 0,type:"sine"},ON=(r,e,t,n,s,a,c)=>class extends r{constructor(f,d){const h=s(f),m={...UN,...d},g=t(h,m),_=a(h),S=_?n():null,M=f.sampleRate/2;super(f,!1,g,S),this._detune=e(this,_,g.detune,153600,-153600),this._frequency=e(this,_,g.frequency,M,-M),this._nativeOscillatorNode=g,this._onended=null,this._oscillatorNodeRenderer=S,this._oscillatorNodeRenderer!==null&&m.periodicWave!==void 0&&(this._oscillatorNodeRenderer.periodicWave=m.periodicWave)}get detune(){return this._detune}get frequency(){return this._frequency}get onended(){return this._onended}set onended(f){const d=typeof f=="function"?c(this,f):null;this._nativeOscillatorNode.onended=d;const h=this._nativeOscillatorNode.onended;this._onended=h!==null&&h===d?f:h}get type(){return this._nativeOscillatorNode.type}set type(f){this._nativeOscillatorNode.type=f,this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=null)}setPeriodicWave(f){this._nativeOscillatorNode.setPeriodicWave(f),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=f)}start(f=0){if(this._nativeOscillatorNode.start(f),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.start=f),this.context.state!=="closed"){Ja(this);const d=()=>{this._nativeOscillatorNode.removeEventListener("ended",d),Qr(this)&&vc(this)};this._nativeOscillatorNode.addEventListener("ended",d)}}stop(f=0){this._nativeOscillatorNode.stop(f),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.stop=f)}},kN=(r,e,t,n,s)=>()=>{const a=new WeakMap;let c=null,l=null,f=null;const d=async(h,m)=>{let g=t(h);const _=ti(g,m);if(!_){const S={channelCount:g.channelCount,channelCountMode:g.channelCountMode,channelInterpretation:g.channelInterpretation,detune:g.detune.value,frequency:g.frequency.value,periodicWave:c===null?void 0:c,type:g.type};g=e(m,S),l!==null&&g.start(l),f!==null&&g.stop(f)}return a.set(m,g),_?(await r(m,h.detune,g.detune),await r(m,h.frequency,g.frequency)):(await n(m,h.detune,g.detune),await n(m,h.frequency,g.frequency)),await s(h,m,g),g};return{set periodicWave(h){c=h},set start(h){l=h},set stop(h){f=h},render(h,m){const g=a.get(m);return g!==void 0?Promise.resolve(g):d(h,m)}}},zN={channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",coneInnerAngle:360,coneOuterAngle:360,coneOuterGain:0,distanceModel:"inverse",maxDistance:1e4,orientationX:1,orientationY:0,orientationZ:0,panningModel:"equalpower",positionX:0,positionY:0,positionZ:0,refDistance:1,rolloffFactor:1},BN=(r,e,t,n,s,a,c)=>class extends r{constructor(f,d){const h=s(f),m={...zN,...d},g=t(h,m),_=a(h),S=_?n():null;super(f,!1,g,S),this._nativePannerNode=g,this._orientationX=e(this,_,g.orientationX,ci,Gi),this._orientationY=e(this,_,g.orientationY,ci,Gi),this._orientationZ=e(this,_,g.orientationZ,ci,Gi),this._positionX=e(this,_,g.positionX,ci,Gi),this._positionY=e(this,_,g.positionY,ci,Gi),this._positionZ=e(this,_,g.positionZ,ci,Gi),c(this,1)}get coneInnerAngle(){return this._nativePannerNode.coneInnerAngle}set coneInnerAngle(f){this._nativePannerNode.coneInnerAngle=f}get coneOuterAngle(){return this._nativePannerNode.coneOuterAngle}set coneOuterAngle(f){this._nativePannerNode.coneOuterAngle=f}get coneOuterGain(){return this._nativePannerNode.coneOuterGain}set coneOuterGain(f){this._nativePannerNode.coneOuterGain=f}get distanceModel(){return this._nativePannerNode.distanceModel}set distanceModel(f){this._nativePannerNode.distanceModel=f}get maxDistance(){return this._nativePannerNode.maxDistance}set maxDistance(f){this._nativePannerNode.maxDistance=f}get orientationX(){return this._orientationX}get orientationY(){return this._orientationY}get orientationZ(){return this._orientationZ}get panningModel(){return this._nativePannerNode.panningModel}set panningModel(f){this._nativePannerNode.panningModel=f}get positionX(){return this._positionX}get positionY(){return this._positionY}get positionZ(){return this._positionZ}get refDistance(){return this._nativePannerNode.refDistance}set refDistance(f){this._nativePannerNode.refDistance=f}get rolloffFactor(){return this._nativePannerNode.rolloffFactor}set rolloffFactor(f){this._nativePannerNode.rolloffFactor=f}},VN=(r,e,t,n,s,a,c,l,f,d)=>()=>{const h=new WeakMap;let m=null;const g=async(_,S)=>{let M=null,x=a(_);const v={channelCount:x.channelCount,channelCountMode:x.channelCountMode,channelInterpretation:x.channelInterpretation},R={...v,coneInnerAngle:x.coneInnerAngle,coneOuterAngle:x.coneOuterAngle,coneOuterGain:x.coneOuterGain,distanceModel:x.distanceModel,maxDistance:x.maxDistance,panningModel:x.panningModel,refDistance:x.refDistance,rolloffFactor:x.rolloffFactor},b=ti(x,S);if("bufferSize"in x)M=n(S,{...v,gain:1});else if(!b){const w={...R,orientationX:x.orientationX.value,orientationY:x.orientationY.value,orientationZ:x.orientationZ.value,positionX:x.positionX.value,positionY:x.positionY.value,positionZ:x.positionZ.value};x=s(S,w)}if(h.set(S,M===null?x:M),M!==null){if(m===null){if(c===null)throw new Error("Missing the native OfflineAudioContext constructor.");const U=new c(6,_.context.length,S.sampleRate),z=e(U,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:6});z.connect(U.destination),m=(async()=>{const H=await Promise.all([_.orientationX,_.orientationY,_.orientationZ,_.positionX,_.positionY,_.positionZ].map(async(q,ee)=>{const j=t(U,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:ee===0?1:0});return await l(U,q,j.offset),j}));for(let q=0;q<6;q+=1)H[q].connect(z,0,q),H[q].start(0);return d(U)})()}const w=await m,C=n(S,{...v,gain:1});await f(_,S,C);const N=[];for(let U=0;U<w.numberOfChannels;U+=1)N.push(w.getChannelData(U));let D=[N[0][0],N[1][0],N[2][0]],P=[N[3][0],N[4][0],N[5][0]],T=n(S,{...v,gain:1}),A=s(S,{...R,orientationX:D[0],orientationY:D[1],orientationZ:D[2],positionX:P[0],positionY:P[1],positionZ:P[2]});C.connect(T).connect(A.inputs[0]),A.connect(M);for(let U=128;U<w.length;U+=128){const z=[N[0][U],N[1][U],N[2][U]],H=[N[3][U],N[4][U],N[5][U]];if(z.some((q,ee)=>q!==D[ee])||H.some((q,ee)=>q!==P[ee])){D=z,P=H;const q=U/S.sampleRate;T.gain.setValueAtTime(0,q),T=n(S,{...v,gain:0}),A=s(S,{...R,orientationX:D[0],orientationY:D[1],orientationZ:D[2],positionX:P[0],positionY:P[1],positionZ:P[2]}),T.gain.setValueAtTime(1,q),C.connect(T).connect(A.inputs[0]),A.connect(M)}}return M}return b?(await r(S,_.orientationX,x.orientationX),await r(S,_.orientationY,x.orientationY),await r(S,_.orientationZ,x.orientationZ),await r(S,_.positionX,x.positionX),await r(S,_.positionY,x.positionY),await r(S,_.positionZ,x.positionZ)):(await l(S,_.orientationX,x.orientationX),await l(S,_.orientationY,x.orientationY),await l(S,_.orientationZ,x.orientationZ),await l(S,_.positionX,x.positionX),await l(S,_.positionY,x.positionY),await l(S,_.positionZ,x.positionZ)),ol(x)?await f(_,S,x.inputs[0]):await f(_,S,x),x};return{render(_,S){const M=h.get(S);return M!==void 0?Promise.resolve(M):g(_,S)}}},HN={disableNormalization:!1},GN=(r,e,t,n)=>class zS{constructor(a,c){const l=e(a),f=n({...HN,...c}),d=r(l,f);return t.add(d),d}static[Symbol.hasInstance](a){return a!==null&&typeof a=="object"&&Object.getPrototypeOf(a)===zS.prototype||t.has(a)}},WN=(r,e)=>(t,n,s)=>(r(n).replay(s),e(n,t,s)),XN=(r,e,t)=>async(n,s,a)=>{const c=r(n);await Promise.all(c.activeInputs.map((l,f)=>Array.from(l).map(async([d,h])=>{const g=await e(d).render(d,s),_=n.context.destination;!t(d)&&(n!==_||!t(n))&&g.connect(a,h,f)})).reduce((l,f)=>[...l,...f],[]))},qN=(r,e,t)=>async(n,s,a)=>{const c=e(n);await Promise.all(Array.from(c.activeInputs).map(async([l,f])=>{const h=await r(l).render(l,s);t(l)||h.connect(a,f)}))},jN=(r,e,t,n)=>s=>r(pc,()=>pc(s))?Promise.resolve(r(n,n)).then(a=>{if(!a){const c=t(s,512,0,1);s.oncomplete=()=>{c.onaudioprocess=null,c.disconnect()},c.onaudioprocess=()=>s.currentTime,c.connect(s.destination)}return s.startRendering()}):new Promise(a=>{const c=e(s,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});s.oncomplete=l=>{c.disconnect(),a(l.renderedBuffer)},c.connect(s.destination),s.startRendering()}),YN=r=>(e,t)=>r.set(e,t),$N=(r,e,t,n,s,a,c,l)=>(f,d)=>t(f).render(f,d).then(()=>Promise.all(Array.from(n(d)).map(h=>t(h).render(h,d)))).then(()=>s(d)).then(h=>(typeof h.copyFromChannel!="function"?(c(h),og(h)):e(a,()=>a(h))||l(h),r.add(h),h)),ZN={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers",pan:0},KN=(r,e,t,n,s,a)=>class extends r{constructor(l,f){const d=s(l),h={...ZN,...f},m=t(d,h),g=a(d),_=g?n():null;super(l,!1,m,_),this._pan=e(this,g,m.pan)}get pan(){return this._pan}},QN=(r,e,t,n,s)=>()=>{const a=new WeakMap,c=async(l,f)=>{let d=t(l);const h=ti(d,f);if(!h){const m={channelCount:d.channelCount,channelCountMode:d.channelCountMode,channelInterpretation:d.channelInterpretation,pan:d.pan.value};d=e(f,m)}return a.set(f,d),h?await r(f,l.pan,d.pan):await n(f,l.pan,d.pan),ol(d)?await s(l,f,d.inputs[0]):await s(l,f,d),d};return{render(l,f){const d=a.get(f);return d!==void 0?Promise.resolve(d):c(l,f)}}},JN=r=>()=>{if(r===null)return!1;try{new r({length:1,sampleRate:44100})}catch{return!1}return!0},eI=(r,e)=>async()=>{if(r===null)return!0;if(e===null)return!1;const t=new Blob(['class A extends AudioWorkletProcessor{process(i){this.port.postMessage(i,[i[0][0].buffer])}}registerProcessor("a",A)'],{type:"application/javascript; charset=utf-8"}),n=new e(1,128,44100),s=URL.createObjectURL(t);let a=!1,c=!1;try{await n.audioWorklet.addModule(s);const l=new r(n,"a",{numberOfOutputs:0}),f=n.createOscillator();l.port.onmessage=()=>a=!0,l.onprocessorerror=()=>c=!0,f.connect(l),f.start(0),await n.startRendering(),await new Promise(d=>setTimeout(d))}catch{}finally{URL.revokeObjectURL(s)}return a&&!c},tI=(r,e)=>()=>{if(e===null)return Promise.resolve(!1);const t=new e(1,1,44100),n=r(t,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});return new Promise(s=>{t.oncomplete=()=>{n.disconnect(),s(t.currentTime!==0)},t.startRendering()})},nI={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",curve:null,oversample:"none"},iI=(r,e,t,n,s,a,c)=>class extends r{constructor(f,d){const h=s(f),m={...nI,...d},g=t(h,m),S=a(h)?n():null;super(f,!0,g,S),this._isCurveNullified=!1,this._nativeWaveShaperNode=g,c(this,1)}get curve(){return this._isCurveNullified?null:this._nativeWaveShaperNode.curve}set curve(f){if(f===null)this._isCurveNullified=!0,this._nativeWaveShaperNode.curve=new Float32Array([0,0]);else{if(f.length<2)throw e();this._isCurveNullified=!1,this._nativeWaveShaperNode.curve=f}}get oversample(){return this._nativeWaveShaperNode.oversample}set oversample(f){this._nativeWaveShaperNode.oversample=f}},rI=(r,e,t)=>()=>{const n=new WeakMap,s=async(a,c)=>{let l=e(a);if(!ti(l,c)){const d={channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,curve:l.curve,oversample:l.oversample};l=r(c,d)}return n.set(c,l),ol(l)?await t(a,c,l.inputs[0]):await t(a,c,l),l};return{render(a,c){const l=n.get(c);return l!==void 0?Promise.resolve(l):s(a,c)}}},sI=()=>typeof window>"u"?null:window,oI=(r,e)=>t=>{t.copyFromChannel=(n,s,a=0)=>{const c=r(a),l=r(s);if(l>=t.numberOfChannels)throw e();const f=t.length,d=t.getChannelData(l),h=n.length;for(let m=c<0?-c:0;m+c<f&&m<h;m+=1)n[m]=d[m+c]},t.copyToChannel=(n,s,a=0)=>{const c=r(a),l=r(s);if(l>=t.numberOfChannels)throw e();const f=t.length,d=t.getChannelData(l),h=n.length;for(let m=c<0?-c:0;m+c<f&&m<h;m+=1)d[m+c]=n[m]}},aI=r=>e=>{e.copyFromChannel=(t=>(n,s,a=0)=>{const c=r(a),l=r(s);if(c<e.length)return t.call(e,n,l,c)})(e.copyFromChannel),e.copyToChannel=(t=>(n,s,a=0)=>{const c=r(a),l=r(s);if(c<e.length)return t.call(e,n,l,c)})(e.copyToChannel)},lI=r=>(e,t)=>{const n=t.createBuffer(1,1,44100);e.buffer===null&&(e.buffer=n),r(e,"buffer",s=>()=>{const a=s.call(e);return a===n?null:a},s=>a=>s.call(e,a===null?n:a))},cI=(r,e)=>(t,n)=>{n.channelCount=1,n.channelCountMode="explicit",Object.defineProperty(n,"channelCount",{get:()=>1,set:()=>{throw r()}}),Object.defineProperty(n,"channelCountMode",{get:()=>"explicit",set:()=>{throw r()}});const s=t.createBufferSource();e(n,()=>{const l=n.numberOfInputs;for(let f=0;f<l;f+=1)s.connect(n,0,f)},()=>s.disconnect(n))},BS=(r,e,t)=>r.copyFromChannel===void 0?r.getChannelData(t)[0]:(r.copyFromChannel(e,t),e[0]),VS=r=>{if(r===null)return!1;const e=r.length;return e%2!==0?r[Math.floor(e/2)]!==0:r[e/2-1]+r[e/2]!==0},Sc=(r,e,t,n)=>{let s=r;for(;!s.hasOwnProperty(e);)s=Object.getPrototypeOf(s);const{get:a,set:c}=Object.getOwnPropertyDescriptor(s,e);Object.defineProperty(r,e,{get:t(a),set:n(c)})},uI=r=>({...r,channelCount:r.numberOfOutputs}),fI=r=>{const{imag:e,real:t}=r;return e===void 0?t===void 0?{...r,imag:[0,0],real:[0,0]}:{...r,imag:Array.from(t,()=>0),real:t}:t===void 0?{...r,imag:e,real:Array.from(e,()=>0)}:{...r,imag:e,real:t}},HS=(r,e,t)=>{try{r.setValueAtTime(e,t)}catch(n){if(n.code!==9)throw n;HS(r,e,t+1e-7)}},dI=r=>{const e=r.createBufferSource();e.start();try{e.start()}catch{return!0}return!1},hI=r=>{const e=r.createBufferSource(),t=r.createBuffer(1,1,44100);e.buffer=t;try{e.start(0,1)}catch{return!1}return!0},pI=r=>{const e=r.createBufferSource();e.start();try{e.stop()}catch{return!1}return!0},dg=r=>{const e=r.createOscillator();try{e.start(-1)}catch(t){return t instanceof RangeError}return!1},GS=r=>{const e=r.createBuffer(1,1,44100),t=r.createBufferSource();t.buffer=e,t.start(),t.stop();try{return t.stop(),!0}catch{return!1}},hg=r=>{const e=r.createOscillator();try{e.stop(-1)}catch(t){return t instanceof RangeError}return!1},mI=r=>{r.start=(e=>(t=0,n=0,s)=>{const a=r.buffer,c=a===null?n:Math.min(a.duration,n);a!==null&&c>a.duration-.5/r.context.sampleRate?e.call(r,t,0,0):e.call(r,t,c,s)})(r.start)},WS=(r,e)=>{const t=e.createGain();r.connect(t);const n=(s=>()=>{s.call(r,t),r.removeEventListener("ended",n)})(r.disconnect);r.addEventListener("ended",n),al(r,t),r.stop=(s=>{let a=!1;return(c=0)=>{if(a)try{s.call(r,c)}catch{t.gain.setValueAtTime(0,c)}else s.call(r,c),a=!0}})(r.stop)},Mc=(r,e)=>t=>{const n={value:r};return Object.defineProperties(t,{currentTarget:n,target:n}),typeof e=="function"?e.call(r,t):e.handleEvent.call(r,t)},gI=g2(ko),_I=M2(ko),vI=CD(Vf),XS=new WeakMap,yI=VD(XS),or=iD(new Map,new WeakMap),wr=sI(),qS=aN(or,Oo),pg=BD(Ri),Xn=XN(Ri,pg,Lo),xI=C2(qS,Zt,Xn),ln=GD(AS),js=TN(wr),nn=nN(js),jS=new WeakMap,YS=LD(Mc),Wf=fN(wr),$S=QD(Wf),ZS=JD(wr),SI=eN(wr),Mm=hN(wr),qn=Z2(_2(ES),S2(gI,_I,Pf,vI,Df,Ri,yI,_c,Zt,ko,Qr,Lo,mf),or,KD(ym,Df,Ri,Zt,hc,Qr),Oo,Hf,Xi,MD(Pf,ym,Ri,Zt,hc,ln,Qr,nn),bD(jS,Ri,qs),YS,ln,$S,ZS,SI,nn,Mm),MI=T2(qn,xI,Oo,qS,ln,nn),mg=new WeakSet,Fy=lN(wr),KS=mD(new Uint32Array(1)),gg=oI(KS,Oo),_g=aI(KS),EI=b2(mg,or,Xi,Fy,js,JN(Fy),gg,_g),Xf=E2(sr),QS=qN(pg,yc,Lo),is=uD(QS),Ec=uN(Xf,or,dI,hI,pI,dg,GS,hg,mI,lI(Sc),WS),rs=WN(HD(yc),QS),wI=D2(is,Ec,Zt,rs,Xn),Tr=K2(v2(TS),jS,CS,Q2,u2,f2,d2,h2,p2,gm,SS,Wf,HS),TI=P2(qn,wI,Tr,gi,Ec,ln,nn,Mc),CI=z2(qn,B2,Oo,gi,dN(sr,Sc),ln,nn,Xn),AI=nD(is,OS,Zt,rs,Xn),zo=YN(XS),bI=tD(qn,Tr,AI,Hf,OS,ln,nn,zo),ll=sN(ko,ZS),RI=cI(gi,ll),cl=mN(Wf,RI),PI=oD(cl,Zt,Xn),DI=sD(qn,PI,cl,ln,nn),NI=cD(fg,Zt,Xn),II=lD(qn,NI,fg,ln,nn,uI),LI=vN(Xf,Ec,sr,ll),qf=_N(Xf,or,LI,dg,hg),FI=pD(is,qf,Zt,rs,Xn),UI=hD(qn,Tr,FI,qf,ln,nn,Mc),JS=yN(Xi,Sc),OI=vD(JS,Zt,Xn),kI=_D(qn,OI,JS,ln,nn,zo),zI=TD(is,kS,Zt,rs,Xn),BI=wD(qn,Tr,zI,kS,ln,nn,zo),eM=xN(Xi),VI=DD(is,eM,Zt,rs,Xn),HI=PD(qn,Tr,VI,eM,Xi,ln,nn,zo),GI=zD(is,sr,Zt,rs,Xn),WI=kD(qn,Tr,GI,sr,ln,nn),XI=wN(Hf,gi,Gf,Xi),vg=jN(or,sr,Gf,tI(sr,js)),qI=ZD(Ec,Zt,js,Xn,vg),jI=SN(XI),YI=YD(qn,jI,qI,ln,nn,zo),$I=V2(Tr,cl,qf,Gf,Xi,BS,nn,Sc),tM=new WeakMap,ZI=rN(CI,$I,YS,nn,tM,Mc),nM=CN(Xf,or,dg,GS,hg,WS),KI=kN(is,nM,Zt,rs,Xn),QI=ON(qn,Tr,nM,KI,ln,nn,Mc),iM=fD(Ec),JI=IN(iM,gi,sr,VS,ll),jf=NN(iM,gi,JI,VS,ll,Wf,Sc),e3=bN(Pf,gi,cl,sr,Gf,jf,Xi,Df,BS,ll),rM=AN(e3),t3=VN(is,cl,qf,sr,rM,Zt,js,rs,Xn,vg),n3=BN(qn,Tr,rM,t3,ln,nn,zo),i3=RN(Oo),r3=GN(i3,ln,new WeakSet,fI),s3=DN(cl,fg,sr,jf,Xi,ll),sM=PN(s3,Xi),o3=QN(is,sM,Zt,rs,Xn),a3=KN(qn,Tr,sM,o3,ln,nn),l3=rI(jf,Zt,Xn),c3=iI(qn,gi,jf,l3,ln,nn,zo),u3=iN(wr),f3=FD(wr),d3=new WeakMap,h3=WD(d3,js),p3=u3?x2(or,Xi,ID(wr),f3,UD(m2),ln,h3,nn,Mm,new WeakMap,new WeakMap,eI(Mm,js),wr):void 0,m3=tN($S,nn),g3=SD(mg,or,xD,ND,new WeakSet,ln,m3,bf,pc,gg,_g),_3=J2(p3,MI,EI,TI,bI,DI,II,UI,kI,g3,BI,HI,WI,YI,ZI,QI,n3,r3,a3,c3),v3=XD(tM),y3=yD(Xi,js),x3=$N(mg,or,pg,v3,vg,bf,gg,_g),S3=FN(_3,or,gi,y3,x3),Uy=(r,e,t)=>{const n=new S3(r.numberOfChannels,Math.round(t*r.sampleRate),r.sampleRate),s=n.createBiquadFilter(),a=n.createBufferSource();return s.frequency.value=240,s.type="lowpass",a.buffer=r,a.connect(s).connect(n.destination),a.start(0,e,t),n.startRendering().then(c=>{const l=c.getChannelData(0),f=c.sampleRate;return{channelData:l,sampleRate:f}})},M3=r=>{const e=new Worker(r),t=new Set;return{analyze:(...a)=>{var c;const[l,f,d]=a,h=typeof f=="number"?f:0,m=typeof d=="number"?d:l.duration-h,g=typeof f=="object"?f:typeof d=="object"?d:(c=a[3])!==null&&c!==void 0?c:null;return new Promise(async(_,S)=>{const{channelData:M,sampleRate:x}=await Uy(l,h,m),v=_y(t),R=({data:b})=>{b.id===v&&(t.delete(v),e.removeEventListener("message",R),b.error===null?_(b.result.tempo):S(new Error(b.error.message)))};e.addEventListener("message",R),e.postMessage({id:v,method:"analyze",params:{channelData:M,sampleRate:x,...g===null?g:{tempoSettings:g}}},[M.buffer])})},guess:(...a)=>{var c;const[l,f,d]=a,h=typeof f=="number"?f:0,m=typeof d=="number"?d:l.duration-h,g=typeof f=="object"?f:typeof d=="object"?d:(c=a[3])!==null&&c!==void 0?c:null;return new Promise(async(_,S)=>{const{channelData:M,sampleRate:x}=await Uy(l,h,m),v=_y(t),R=({data:b})=>{b.id===v&&(t.delete(v),e.removeEventListener("message",R),b.error===null?_(b.result):S(new Error(b.error.message)))};e.addEventListener("message",R),e.postMessage({id:v,method:"guess",params:{channelData:M,sampleRate:x,...g===null?g:{tempoSettings:g}}},[M.buffer])})}}},E3=(r,e)=>{let t=null;return()=>{if(t!==null)return t;const n=new Blob([e],{type:"application/javascript; charset=utf-8"}),s=URL.createObjectURL(n);return t=r(s),setTimeout(()=>URL.revokeObjectURL(s)),t}},w3=`(()=>{"use strict";const e=(e,t,s)=>{const o=e.length,n=[];let a=!1;for(let r=0;r<o;r+=1)e[r]>t?a=!0:a&&(a=!1,n.push(r-1),r+=s/4-1);return a&&n.push(o-1),n},t=(t,s,o)=>{const n=(e=>{let t=0;const s=e.length;for(let o=0;o<s;o+=1)e[o]>t&&(t=e[o]);return t})(t),a=.3*n;let r=[],l=n-.05*n;if(n>.25)for(;r.length<30&&l>=a;)r=e(t,l,s),l-=.05*n;const p=(e=>{const t=[];return e.forEach(((s,o)=>{const n=Math.min(e.length-o,10);for(let a=1;a<n;a+=1){const n=e[o+a]-s;t.some((e=>e.interval===n&&(e.peaks.push(s),!0)))||t.push({interval:n,peaks:[s]})}})),t})(r),h=((e,t,s={})=>{var o,n;const a=Math.max(0,null!==(o=s.maxTempo)&&void 0!==o?o:180),r=Math.max(0,null!==(n=s.minTempo)&&void 0!==n?n:90),l=[];return e.forEach((e=>{let s=60/(e.interval/t);for(;s<r;)s*=2;for(;s>a;)s/=2;if(s<r)return;let o=!1,n=e.peaks.length;l.forEach((t=>{if(t.tempo===s&&(t.score+=e.peaks.length,t.peaks=[...t.peaks,...e.peaks],o=!0),t.tempo>s-.5&&t.tempo<s+.5){const o=2*Math.abs(t.tempo-s);n+=(1-o)*t.peaks.length,t.score+=(1-o)*e.peaks.length}})),o||l.push({peaks:e.peaks,score:n,tempo:s})})),l})(p,s,o);return h.sort(((e,t)=>t.score-e.score)),h};addEventListener("message",(({data:e})=>{try{if("analyze"===e.method){const{id:s,params:{channelData:o,sampleRate:n,tempoSettings:a}}=e,r=((e,s,o)=>{const n=t(e,s,o);if(0===n.length)throw new Error("The given channelData does not contain any detectable beats.");return n[0].tempo})(o,n,a);postMessage({error:null,id:s,result:{tempo:r}})}else{if("guess"!==e.method)throw new Error('The given method "'.concat(e.method,'" is not supported'));{const{id:s,params:{channelData:o,sampleRate:n,tempoSettings:a}}=e,{bpm:r,offset:l,tempo:p}=((e,s,o)=>{const n=t(e,s,o);if(0===n.length)throw new Error("The given channelData does not contain any detectable beats.");const{peaks:a,tempo:r}=n[0],l=Math.round(r),p=60/l;a.sort(((e,t)=>e-t));let h=a[0]/s;for(;h>p;)h-=p;return{bpm:l,offset:h,tempo:r}})(o,n,a);postMessage({error:null,id:s,result:{bpm:r,offset:l,tempo:p}})}}}catch(t){postMessage({error:{message:t.message},id:e.id,result:null})}}))})();`,T3=E3(M3,w3),C3=(...r)=>T3().guess(...r);class A3 extends Fo{constructor(){super(),this.interval=500,this.intervalId=null,this.bpmValue=0}setBPM(e){this.interval=6e4/e,clearInterval(this.intervalId),this.intervalId=setInterval(this.updateBPM.bind(this),this.interval)}updateBPM(){this.dispatchEvent({type:"beat"})}async detectBPM(e){const{bpm:t}=await C3(e);this.setBPM(t),console.log(`BPM detected: ${t}`)}getBPMDuration(){return this.interval}}class b3{constructor(){this.frequencyArray=[],this.frequencyData={low:0,mid:0,high:0},this.isPlaying=!1,this.audioContext=null,this.analyser=null,this.dataArray=null,this.playlist=[],this.currentTrackIndex=0,this.currentTrackDuration=0,this.trackStartTime=0,this.pauseTime=0,this.maxDecibels=-6,this.minDecibels=-40,this.volume=this.dbToGain(-20),this.audioListener=new Fw,this.masterGain=this.audioListener.context.createGain(),this.masterGain.connect(this.audioListener.getInput()),this.updateGain(),this.lowFrequency=60,this.midFrequency=250,this.highFrequency=2e3,this.bufferLength=0,this.initializeRandomPlaylist()}dbToGain(e){return Math.pow(10,e/20)}gainToDb(e){return 20*Math.log10(e)}getCurrentTime(){var e;return!this.audioContext||!((e=this.audio)!=null&&e.buffer)?0:Math.max(0,Math.min(this.isPlaying?this.audioContext.currentTime-this.trackStartTime:this.pauseTime-this.trackStartTime,this.currentTrackDuration))}updateGain(){const e=Math.min(this.volume,this.dbToGain(this.maxDecibels));this.masterGain.gain.setValueAtTime(e,this.audioListener.context.currentTime)}initializeRandomPlaylist(){const e=["audio/04ff5a619f64432b8d19788bfa31b114.mp3","audio/0f5d9291759b42d3b6ad2a59ffd0485a.mp3","audio/16953d87c47746cebe794688c19dd2d4.mp3","audio/1c8ce5b7066941f995efb0e4c5077302.mp3","audio/2044ef37dd834697ad70ddb1247a55df.mp3","audio/2214218bb27f4daf9f3130cc322177ed.mp3","audio/2240819062dc4fa7ab137700819ad362.mp3","audio/3a36c4f1232e447fb72fcc7298644c62.mp3","audio/50431fa7adde4a638a13e6f6ee781a1e.mp3","audio/5f55126cc5ce4c77bedf2e3545fadbbd.mp3","audio/5fdb7c14b3a449c88a7d1fdee5d24688.mp3","audio/6357bcceec5d4d059983370e8ae0a987.mp3","audio/6a913076c87c4b189cc56256d7f6feb0.mp3","audio/7832845695be4ceb8c3b6e19654b754f.mp3","audio/8eea22cc4f5d4596ae4a112073b0f763.mp3","audio/908f6f9a29ca4649a21071d268a8dfe1.mp3","audio/97dabd8a6678450eafff2ddb9ae64f92.mp3","audio/b9ad1dcfa365403e80021b204c454b4a.mp3","audio/bc419c955dc040fb992564302ee00da7.mp3","audio/bfe13561b76844bb9230682f6c900186.mp3","audio/c916bda2dbb04f8cac682ba817161374.mp3","audio/c9c995059374420588c1366a9ed2f442.mp3","audio/caf4a0d41cd44a9bb3210c8adc70f05a.mp3","audio/d515c0f897f04ad79344babae84a98ec.mp3","audio/d56efa13099f4324845bca901243c19c.mp3","audio/d83bb30e020b4b128f010c4937100d4e.mp3","audio/df1f7b0b3a50436689728c6894ee8543.mp3","audio/e1281d91f4494b908adcbef07e5ce588.mp3","audio/e2b677e4b1204a1cab36dd2708cd412a.mp3","audio/e4e2b0a4d9be4e8bb8e3402e277fcca7.mp3","audio/e63c33e1c39d4c9eb48c52e232cb2441.mp3","audio/ec58d76ae5c546218efcf7b1300b0e93.mp3","audio/ed816b7cd3924eb2a268f6065fab85da.mp3","audio/f2215a7ab26747e788613e0c6855ff05.mp3","audio/spotify_preview_aad44685e5f948b6b7546fe80a976ea8.mp3","audio/spotify_preview_bc86ec80bf1d4fb2b215df2e17b98e24.mp3"];this.playlist=e.sort(()=>Math.random()-.5)}async loadAudioBuffer(){return new Promise((e,t)=>{this.audio&&(this.audio.stop(),this.audio.disconnect(),this.audio=null),this.audio=new Uw(this.audioListener),this.audio.setVolume(1),this.audio.gain.disconnect(),this.audio.gain.connect(this.masterGain),new Nw().load(this.playlist[this.currentTrackIndex],n=>{this.audio.setBuffer(n),this.currentTrackDuration=n.duration,this.audio.setLoop(!1),this.audio.onEnded=async()=>{var s;try{((s=this.audioContext)==null?void 0:s.state)==="suspended"&&await this.audioContext.resume(),await this.nextTrack()}catch(a){console.error("Auto-next error:",a)}},this.analyser=new Tv(this.audio,1024),this.dataArray=new Uint8Array(this.analyser.analyser.frequencyBinCount),this.audioContext=this.audio.context,e()},null,t),this.analyser=new Tv(this.audio,1024),this.dataArray=new Uint8Array(this.analyser.analyser.frequencyBinCount)})}setVolume(e){const t=this.minDecibels+e*(this.maxDecibels-this.minDecibels);this.volume=this.dbToGain(t),this.updateGain()}async nextTrack(){var t;const e=this.isPlaying;if(this.trackStartTime=0,this.pauseTime=0,this.currentTrackDuration=0,this.audio&&(this.audio.stop(),this.audio.disconnect(),this.isPlaying=!1),this.currentTrackIndex=(this.currentTrackIndex+1)%this.playlist.length,await this.loadAudioBuffer(),e)try{((t=this.audioContext)==null?void 0:t.state)==="suspended"&&await this.audioContext.resume(),await this.play()}catch(n){console.error("Playback restart error:",n),this.isPlaying=!1}}async play(){var e;try{if(((e=this.audioContext)==null?void 0:e.state)==="suspended"&&await this.audioContext.resume(),this.audio.play(),this.isPlaying=!0,this.pauseTime>0){const t=this.audioContext.currentTime-this.pauseTime;this.trackStartTime+=t,this.pauseTime=0}else this.trackStartTime=this.audioContext.currentTime}catch(t){console.error("Play error:",t),this.isPlaying=!1}}pause(){this.audio.pause(),this.isPlaying=!1,this.pauseTime=this.audioContext.currentTime}collectAudioData(){this.analyser.getFrequencyData(),this.frequencyArray=this.analyser.data}analyzeFrequency(){const e=this.audioContext.sampleRate,t=d=>Math.floor(d*this.bufferLength/e),n=t(this.lowFrequency),s=t(this.midFrequency),a=t(this.midFrequency),c=t(this.highFrequency),l=t(this.highFrequency),f=this.bufferLength-1;this.frequencyData={low:this.normalizeValue(this.calculateAverage(n,s)),mid:this.normalizeValue(this.calculateAverage(a,c)),high:this.normalizeValue(this.calculateAverage(l,f))}}calculateAverage(e,t){let n=0;for(let s=e;s<=t;s++)n+=this.frequencyArray[s];return n/(t-e+1)}normalizeValue(e){return Te.clamp(e/256,0,1)}update(){this.isPlaying&&(this.collectAudioData(),this.analyzeFrequency())}getAnalyser(){var e;return(e=this.analyser)==null?void 0:e.analyser}}function R3({onPlay:r,onPause:e,onNext:t,isPlaying:n,isAudioReady:s,playlistLength:a,volume:c,onVolumeChange:l,progress:f}){return _e.jsxs("div",{className:`relative flex flex-col gap-3 items-end \r
                      bg-black/50 backdrop-blur-sm p-3 border-2 border-cyan-electric/30\r
                      crt-overlay text-white`,children:["  ",_e.jsxs("div",{className:"font-mono text-sm text-cyan-electric tracking-wider",children:["PROG [",Math.floor(f).toString().padStart(3,"0"),"%]"]}),_e.jsxs("div",{className:"flex gap-3 items-center",children:[_e.jsxs("div",{className:"relative group",children:[_e.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:c,onChange:d=>l(parseFloat(d.target.value)),className:`w-24 h-1 bg-gray-900/80 rounded-sm cursor-cyber\r
                               appearance-none slider-vertical-gradient\r
                               thumb:appearance-none thumb:h-3 thumb:w-2 \r
                               thumb:bg-magenta-neon thumb:border-2 \r
                               thumb:border-cyan-electric/50`}),_e.jsxs("div",{className:`absolute -top-5 right-0 text-cyan-electric \r
                                  text-xs font-mono pointer-events-none`,children:["VOL [",c.toFixed(2),"]"]})]}),_e.jsxs("div",{className:"flex gap-2 items-center border-l-2 border-cyan-electric/20 pl-2",children:[_e.jsx("button",{onClick:n?e:r,className:`px-3 py-1 border-2 border-cyan-electric/40 \r
                               text-cyan-electric hover:border-cyan-electric\r
                               hover:text-cyan-electric hover:bg-cyan-electric/10\r
                               font-mono text-xs tracking-wider\r
                               transition-all duration-200 ease-crt\r
                               disabled:text-cyan-electric/30`,disabled:!s,onKeyDown:d=>{d.key==="Enter"&&d.stopPropagation()},children:n?"[[ PAUSE ]]":"[[ PLAY ]]"}),_e.jsxs("button",{onClick:t,className:`px-3 py-1 border-2 border-magenta-neon/40 \r
                               text-magenta-neon hover:border-magenta-neon \r
                               hover:text-magenta-neon hover:bg-magenta-neon/10\r
                               font-mono text-xs tracking-wider\r
                               transition-all duration-200 ease-crt\r
                               disabled:text-magenta-neon/30`,disabled:a<=1,children:["NEXT_TRACK",">",">"]})]})]})]})}class P3{constructor(e=4,t=3){this.video=document.createElement("video"),this.video.src="/joke.mp4",this.video.loop=!1,this.video.muted=!1,this.videoTexture=new ww(this.video),this.videoTexture.minFilter=Tn,this.videoTexture.magFilter=Tn;const n=new es(e,t),s=new sc({map:this.videoTexture,transparent:!0,opacity:0});this.videoMesh=new ui(n,s);const a=new es(e,t*.25),c=document.createElement("canvas"),l=c.getContext("2d");c.width=512,c.height=128,l.fillStyle="#000",l.fillRect(0,0,c.width,c.height),l.font="bold 20px monospace",l.fillStyle="#ffffff",l.textAlign="center",l.textBaseline="middle";const f=["Noé: Tout le monde monte dans","l'arche par ordre alphabétique","","","Le zèbre qui a déjà les couilles dans l'eau:"],d=25,h=c.height/2-(f.length-1)*d/2;f.forEach((_,S)=>{l.fillText(_,c.width/2,h+S*d)});const m=new dx(c),g=new sc({map:m,transparent:!0,opacity:0});this.textMesh=new ui(a,g),this.group=new Yl,this.group.add(this.videoMesh),this.group.add(this.textMesh),this.videoMesh.position.y=-t*.1,this.textMesh.position.y=t*.6}setPosition(e,t,n){this.group.position.set(e,t,n)}setScale(e,t,n){this.group.scale.set(e,t,n)}show(){return this.video.currentTime=0,Dt.to(this.videoMesh.material,{opacity:1,duration:.5}),Dt.to(this.textMesh.material,{opacity:1,duration:.5}),this.video.play(),new Promise(e=>{this.video.onended=()=>{Dt.to(this.videoMesh.material,{opacity:0,duration:.5}),Dt.to(this.textMesh.material,{opacity:0,duration:.5,onComplete:e})}})}dispose(){this.videoMesh.geometry.dispose(),this.videoMesh.material.dispose(),this.textMesh.geometry.dispose(),this.textMesh.material.dispose(),this.videoTexture.dispose(),this.textMesh.material.map&&this.textMesh.material.map.dispose(),this.video.remove()}}function D3(){const[r,e]=Rt.useState(!1),t=Rt.useRef(null);Rt.useEffect(()=>{if(!window.scene)return;const s=new P3(6,4);return s.setPosition(-2,25,5),s.setScale(.8,.8,.8),s.group.rotation.x=-Math.PI/2,t.current=s,window.scene.add(s.group),()=>{window.scene.remove(s.group),s.dispose()}},[]);const n=async()=>{if(!r&&t.current){e(!0);try{await t.current.show()}finally{e(!1)}}};return _e.jsx("button",{onClick:n,disabled:r,className:`fixed bottom-4 left-4 bg-black/80 backdrop-blur-sm\r
                     border-2 border-phosphorescent-green hover:border-cyan-electric\r
                     text-phosphorescent-green px-4 py-2 \r
                     font-mono text-sm tracking-wide\r
                     transition-all duration-300 ease-crt\r
                     disabled:opacity-40 disabled:cursor-not-allowed\r
                     shadow-[0_0_8px_rgba(51,255,51,0.3)]\r
                     hover:shadow-[0_0_12px_rgba(0,255,255,0.5)]\r
                     crt-overlay\r
                     !text-[#33ff33]`,children:"[//] BLAGUE.EXE"})}const sf=({title:r,children:e})=>_e.jsxs("div",{className:"mb-6",children:[_e.jsx("h3",{className:"text-lg font-semibold mb-3 text-white",children:r}),e]}),N3=({particles:r,className:e})=>{const[t,n]=Na.useState("main"),[s,a]=Na.useState({amplitude:1,frequency:2,bassPower:2,midPower:1.5,curlIntensity:1,size:1.1,maxDistance:1.8,startColor:"#ff00ff",endColor:"#00ffff",autoMix:!0,autoRotate:!0});Na.useEffect(()=>{var d;if(!((d=r==null?void 0:r.material)!=null&&d.uniforms))return;const l=()=>{const h=r.material.uniforms;a(m=>({...m,amplitude:h.amplitude.value,frequency:h.frequency.value,bassPower:h.bassPower.value,midPower:h.midPower.value,curlIntensity:h.curlIntensity.value,size:h.size.value,maxDistance:h.maxDistance.value,autoMix:r.properties.autoMix,autoRotate:r.properties.autoRotate}))},f=requestAnimationFrame(function h(){l(),requestAnimationFrame(h)});return()=>cancelAnimationFrame(f)},[r]);const c=(l,f)=>{r.material.uniforms[`${l}Color`].value.set(f),r.properties[`${l}Color`]=f};return _e.jsxs("div",{className:`w-80 bg-gray-900/95 backdrop-blur-xl rounded-xl p-4 shadow-2xl border border-cyan-electric/30 overflow-auto max-h-[calc(100vh-10rem)] ${e}`,children:[_e.jsx("h2",{className:"text-xl font-bold mb-4 text-white",children:"Particle Controls"}),_e.jsx("div",{className:"flex mb-4 bg-gray-900 rounded overflow-hidden",children:["main","colors","behavior"].map(l=>_e.jsx("button",{className:`flex-1 py-2 ${t===l?"bg-purple-600 text-white":"text-gray-300"}`,onClick:()=>n(l),children:l.charAt(0).toUpperCase()+l.slice(1)},l))}),t==="main"&&_e.jsxs(_e.Fragment,{children:[_e.jsxs(sf,{title:"Dynamics",children:[_e.jsx(Bn,{label:"Amplitude",value:s.amplitude,onChange:l=>r.material.uniforms.amplitude.value=l,min:.1,max:3,step:.1}),_e.jsx(Bn,{label:"Frequency",value:s.frequency,onChange:l=>r.material.uniforms.frequency.value=l,min:.1,max:5,step:.1}),_e.jsx(Bn,{label:"Curl Intensity",value:s.curlIntensity,onChange:l=>r.material.uniforms.curlIntensity.value=l,min:.1,max:2,step:.1})]}),_e.jsxs(sf,{title:"Audio Response",children:[_e.jsx(Bn,{label:"Bass Power",value:s.bassPower,onChange:l=>r.material.uniforms.bassPower.value=l,min:.5,max:4,step:.1}),_e.jsx(Bn,{label:"Mid Power",value:s.midPower,onChange:l=>r.material.uniforms.midPower.value=l,min:.5,max:3,step:.1})]})]}),t==="colors"&&_e.jsxs(sf,{title:"Color Settings",children:[_e.jsxs("div",{className:"mb-4",children:[_e.jsx("label",{className:"text-sm text-white block mb-2",children:"Start Color"}),_e.jsx("input",{type:"color",value:s.startColor,onChange:l=>c("start",l.target.value),className:"w-full"})]}),_e.jsxs("div",{className:"mb-4",children:[_e.jsx("label",{className:"text-sm text-white block mb-2",children:"End Color"}),_e.jsx("input",{type:"color",value:s.endColor,onChange:l=>c("end",l.target.value),className:"w-full"})]})]}),t==="behavior"&&_e.jsxs(sf,{title:"Particle Behavior",children:[_e.jsx(Bn,{label:"Size",value:s.size,onChange:l=>r.material.uniforms.size.value=l,min:.5,max:5,step:.1}),_e.jsx(Bn,{label:"Max Distance",value:s.maxDistance,onChange:l=>r.material.uniforms.maxDistance.value=l,min:.5,max:3,step:.1}),_e.jsxs("div",{className:"flex items-center justify-between mt-4",children:[_e.jsx("span",{className:"text-sm text-white",children:"Auto Mix Shapes"}),_e.jsx("input",{type:"checkbox",checked:s.autoMix,onChange:l=>r.properties.autoMix=l.target.checked,className:"w-4 h-4"})]}),_e.jsxs("div",{className:"flex items-center justify-between mt-2",children:[_e.jsx("span",{className:"text-sm text-white",children:"Auto Rotate"}),_e.jsx("input",{type:"checkbox",checked:s.autoRotate,onChange:l=>r.properties.autoRotate=l.target.checked,className:"w-4 h-4"})]})]})]})},I3=()=>{var V;const r=Rt.useRef(null),[e,t]=Rt.useState(0),[n,s]=Rt.useState(""),[a,c]=Rt.useState(.1),[l,f]=Rt.useState(0),[d,h]=Rt.useState(!1);Rt.useState(!1);const[m,g]=Rt.useState(!1);Rt.useEffect(()=>{let G=0;const Y=rp[e],O=setInterval(()=>{if(G<Y.length){const Z=Y.substring(0,G+1);s(Z),r.current&&r.current.updateText(Z),G++}else clearInterval(O)},15);return()=>clearInterval(O)},[e]),Rt.useEffect(()=>{const G=Y=>{Y.key==="Enter"&&n.length===rp[e].length&&e<rp.length-1&&(t(O=>O+1),s(""))};return window.addEventListener("keypress",G),()=>window.removeEventListener("keypress",G)},[e,n]),Rt.useEffect(()=>{var G;D.current&&(D.current.position.x=m?0:3,D.current.basePosition.x=m?0:3,Dt.to(D.current.position,{duration:.5,x:m?0:3,ease:"power3.inOut"})),(G=r.current)!=null&&G.mesh&&(r.current.mesh.visible=!m)},[m]);const _=Rt.useRef(null),S=Rt.useRef(null),M=Rt.useRef(null),x=Rt.useRef(null),v=Rt.useRef(null),R=Rt.useRef(null),[b,w]=Rt.useState(!1),[C,N]=Rt.useState(!1),D=Rt.useRef(null),[P]=Rt.useState(()=>{const G=new b3;return G.maxDecibels=-3,G.minDecibels=-24,G}),[T]=Rt.useState(()=>new A3),[A,U]=Rt.useState({luminance:!0,distortion:!0,aberration:!0,scanlines:!0,glow:!0}),z=(G,Y)=>{U(O=>{const Z={...O,[G]:Y};return S.current&&(S.current.enabledPasses=Z),Z})},H=()=>{const G=!Object.values(A).every(O=>O),Y=Object.keys(A).reduce((O,Z)=>(O[Z]=G,O),{});U(Y),S.current&&(S.current.enabledPasses=Y)},q=async()=>{var G;try{((G=P.audioContext)==null?void 0:G.state)==="suspended"&&await P.audioContext.resume(),await P.play(),D.current&&(D.current.connectAudio(P),D.current.resetMesh()),N(!0)}catch(Y){console.error("Erreur lecture:",Y)}},ee=()=>{P.pause(),N(!1)},j=async()=>{var G;try{await P.nextTrack(),f(0),(G=P.audio)!=null&&G.buffer&&await T.detectBPM(P.audio.buffer)}catch(Y){console.error("Track change error:",Y)}};Rt.useEffect(()=>((async()=>{var Y;await P.loadAudioBuffer(),(Y=P.audio)!=null&&Y.buffer&&await T.detectBPM(P.audio.buffer),T.addEventListener("beat",()=>{var O,Z;(Z=(O=D.current)==null?void 0:O.onBPMBeat)==null||Z.call(O)})})(),()=>{P.audio&&(P.audio.stop(),P.audio.disconnect())}),[P,T,P.currentTrackIndex]),Rt.useEffect(()=>{const G=new ux;window.scene=G,M.current=G,G.background=new ht(0);const Y=new Hi(60,window.innerWidth/window.innerHeight,.1,1e3);Y.position.z=5,Y.position.y=30,Y.rotation.x=-Math.PI/2,x.current=Y;const O=new OR(8,6);O.setPosition(-2,25,5.5),O.mesh.rotation.x=-Math.PI/2,r.current=O,G.add(O.mesh),G.add(O.mesh);const Z=new LR(_.current);S.current=Z,Z.init(G,Y),w(!0);const Ae=new e2({audioManager:P,bpmManager:T,camera:x.current});Ae.init(),G.add(Ae),D.current=Ae;let ne,ae=0;const Se=()=>{var ge;if(ne=requestAnimationFrame(Se),P!=null&&P.isPlaying){P.update();const fe=Date.now();if(fe-ae>=100){const be=P.getCurrentTime(),Ye=P.currentTrackDuration||1,xt=be/Ye*100;console.log(`Time: ${be.toFixed(2)}s / ${Ye.toFixed(2)}s = ${xt.toFixed(2)}%`),f(xt),ae=fe}}(ge=D.current)!=null&&ge.update&&D.current.update(),Z.render()};return Se(),()=>{var ge,fe;for(cancelAnimationFrame(ne),r.current&&r.current.dispose(),v.current&&v.current.dispose(),R.current&&R.current.dispose(),S.current&&S.current.dispose(),D.current&&(D.current.destroyMesh(),(ge=D.current.material)==null||ge.dispose(),(fe=D.current.geometry)==null||fe.dispose(),G.remove(D.current));G.children.length>0;)G.remove(G.children[0]);delete window.scene}},[P,T]),Rt.useEffect(()=>{const G=()=>{var Z,Ae;if(!x.current||!S.current)return;const Y=window.innerWidth,O=window.innerHeight;x.current.aspect=Y/O,x.current.updateProjectionMatrix(),S.current.setSize(Y,O),D.current&&((Ae=(Z=D.current).setResolution)==null||Ae.call(Z,Y,O))};return window.addEventListener("resize",G),()=>window.removeEventListener("resize",G)},[]);const Q=G=>{P.setVolume(G),c(G)};return _e.jsxs("div",{className:"relative w-full h-full",children:[_e.jsx("canvas",{ref:_,className:"absolute inset-0 w-full h-full"}),_e.jsxs("div",{className:"fixed top-0 left-0 right-0 z-50 flex justify-between items-start pt-4 px-4 pb-0 backdrop-blur-sm border-b border-cyan-electric/20",children:[_e.jsx(R3,{onPlay:q,onPause:ee,onNext:j,isPlaying:C,isAudioReady:!!((V=P.audio)!=null&&V.buffer),playlistLength:P.playlist.length,volume:a,onVolumeChange:Q,progress:l}),_e.jsxs("div",{className:"flex gap-2",children:[_e.jsxs("button",{onClick:()=>h(!d),className:`px-3 py-1 flex items-center gap-2 ${d?"bg-cyan-electric/90 text-black":"bg-cyan-electric/20 hover:bg-cyan-electric/30 text-cyan-electric"} rounded-lg text-sm transition-all shadow-lg`,children:[_e.jsx("span",{className:"text-lg",children:"🐞"}),d?"Debug ON":"Debug OFF"]}),_e.jsx(D3,{})]})]}),d&&_e.jsxs("div",{className:"fixed right-4 top-20 z-50 flex flex-col gap-4",children:[_e.jsxs("button",{onClick:H,className:`px-4 py-2 flex items-center gap-2 ${Object.values(A).every(G=>G)?"bg-red-500/20 hover:bg-red-500/30 text-red-400":"bg-green-500/20 hover:bg-green-500/30 text-green-400"} rounded-lg text-sm font-medium transition-all shadow-md`,children:[_e.jsx("span",{className:"text-lg",children:Object.values(A).every(G=>G)?"⚡":"💡"}),Object.values(A).every(G=>G)?"Désactiver tous les effets":"Activer tous les effets"]}),_e.jsxs("button",{onClick:()=>g(G=>!G),className:`px-4 py-2 flex items-center gap-2 ${m?"bg-purple-500/20 hover:bg-purple-500/30 text-purple-400":"bg-blue-500/20 hover:bg-blue-500/30 text-blue-400"} rounded-lg text-sm font-medium transition-all shadow-md`,children:[_e.jsx("span",{className:"text-lg",children:m?"🎨":"👁️"}),m?"Restaurer la vue":"Visuals Only"]}),_e.jsx(FR,{renderer:S.current,enabledPasses:A,onTogglePass:z}),_e.jsx(N3,{particles:D.current,className:"mt-4"})]})]})};function L3(){return _e.jsx("div",{className:"fixed inset-0 w-full h-full bg-black",children:_e.jsx(I3,{})})}q1.createRoot(document.getElementById("root")).render(_e.jsx(Rt.StrictMode,{children:_e.jsx(L3,{})}));
