const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-Ce9zpEZO.js","assets/ui-DVQGuqmb.js","assets/vendor-gH-7aFTg.js","assets/Footer-BGsSFsx0.js","assets/time-Ctdjibtq.js","assets/TripCreate-Dljxc6Hz.js","assets/TripEdit-bAIqFHKV.js","assets/navigationCallback-Dv4a5ajJ.js","assets/TripDetail-BrvoXZXA.js","assets/PlanCard-DfMsfTYU.js","assets/PlanDetail-C3hMwkCi.js","assets/PlaceSearch-C9kSgylu.js","assets/TripMap-BDb6pCFx.js","assets/TripMap-Dgihpmma.css","assets/Login-hw3CZgoJ.js","assets/Settings-fXDCgOPy.js","assets/AboutUs-BIiiq7FN.js","assets/TermsOfService-BEJep_ti.js"])))=>i.map(i=>d[i]);
import{r as j,R as Ab,S as c1,a as h1,P as f1,b as d1,c as p1,V as m1,d as g1,H as y1,M as _1,U as v1}from"./ui-DVQGuqmb.js";import{r as E1,a as T1,g as b1}from"./vendor-gH-7aFTg.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();var om={exports:{}},hu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tT;function w1(){if(tT)return hu;tT=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,o,u){var h=null;if(u!==void 0&&(h=""+u),o.key!==void 0&&(h=""+o.key),"key"in o){u={};for(var d in o)d!=="key"&&(u[d]=o[d])}else u=o;return o=u.ref,{$$typeof:n,type:s,key:h,ref:o!==void 0?o:null,props:u}}return hu.Fragment=e,hu.jsx=t,hu.jsxs=t,hu}var nT;function A1(){return nT||(nT=1,om.exports=w1()),om.exports}var te=A1(),lm={exports:{}},fu={},um={exports:{}},cm={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rT;function S1(){return rT||(rT=1,function(n){function e(Q,re){var fe=Q.length;Q.push(re);e:for(;0<fe;){var De=fe-1>>>1,Le=Q[De];if(0<o(Le,re))Q[De]=re,Q[fe]=Le,fe=De;else break e}}function t(Q){return Q.length===0?null:Q[0]}function s(Q){if(Q.length===0)return null;var re=Q[0],fe=Q.pop();if(fe!==re){Q[0]=fe;e:for(var De=0,Le=Q.length,Ye=Le>>>1;De<Ye;){var ke=2*(De+1)-1,ve=Q[ke],yt=ke+1,$t=Q[yt];if(0>o(ve,fe))yt<Le&&0>o($t,ve)?(Q[De]=$t,Q[yt]=fe,De=yt):(Q[De]=ve,Q[ke]=fe,De=ke);else if(yt<Le&&0>o($t,fe))Q[De]=$t,Q[yt]=fe,De=yt;else break e}}return re}function o(Q,re){var fe=Q.sortIndex-re.sortIndex;return fe!==0?fe:Q.id-re.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;n.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();n.unstable_now=function(){return h.now()-d}}var m=[],y=[],E=1,b=null,w=3,O=!1,k=!1,F=!1,V=!1,G=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;function ie(Q){for(var re=t(y);re!==null;){if(re.callback===null)s(y);else if(re.startTime<=Q)s(y),re.sortIndex=re.expirationTime,e(m,re);else break;re=t(y)}}function se(Q){if(F=!1,ie(Q),!k)if(t(m)!==null)k=!0,he||(he=!0,M());else{var re=t(y);re!==null&&Qe(se,re.startTime-Q)}}var he=!1,x=-1,S=5,R=-1;function N(){return V?!0:!(n.unstable_now()-R<S)}function D(){if(V=!1,he){var Q=n.unstable_now();R=Q;var re=!0;try{e:{k=!1,F&&(F=!1,Z(x),x=-1),O=!0;var fe=w;try{t:{for(ie(Q),b=t(m);b!==null&&!(b.expirationTime>Q&&N());){var De=b.callback;if(typeof De=="function"){b.callback=null,w=b.priorityLevel;var Le=De(b.expirationTime<=Q);if(Q=n.unstable_now(),typeof Le=="function"){b.callback=Le,ie(Q),re=!0;break t}b===t(m)&&s(m),ie(Q)}else s(m);b=t(m)}if(b!==null)re=!0;else{var Ye=t(y);Ye!==null&&Qe(se,Ye.startTime-Q),re=!1}}break e}finally{b=null,w=fe,O=!1}re=void 0}}finally{re?M():he=!1}}}var M;if(typeof K=="function")M=function(){K(D)};else if(typeof MessageChannel<"u"){var C=new MessageChannel,ue=C.port2;C.port1.onmessage=D,M=function(){ue.postMessage(null)}}else M=function(){G(D,0)};function Qe(Q,re){x=G(function(){Q(n.unstable_now())},re)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(Q){Q.callback=null},n.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<Q?Math.floor(1e3/Q):5},n.unstable_getCurrentPriorityLevel=function(){return w},n.unstable_next=function(Q){switch(w){case 1:case 2:case 3:var re=3;break;default:re=w}var fe=w;w=re;try{return Q()}finally{w=fe}},n.unstable_requestPaint=function(){V=!0},n.unstable_runWithPriority=function(Q,re){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var fe=w;w=Q;try{return re()}finally{w=fe}},n.unstable_scheduleCallback=function(Q,re,fe){var De=n.unstable_now();switch(typeof fe=="object"&&fe!==null?(fe=fe.delay,fe=typeof fe=="number"&&0<fe?De+fe:De):fe=De,Q){case 1:var Le=-1;break;case 2:Le=250;break;case 5:Le=1073741823;break;case 4:Le=1e4;break;default:Le=5e3}return Le=fe+Le,Q={id:E++,callback:re,priorityLevel:Q,startTime:fe,expirationTime:Le,sortIndex:-1},fe>De?(Q.sortIndex=fe,e(y,Q),t(m)===null&&Q===t(y)&&(F?(Z(x),x=-1):F=!0,Qe(se,fe-De))):(Q.sortIndex=Le,e(m,Q),k||O||(k=!0,he||(he=!0,M()))),Q},n.unstable_shouldYield=N,n.unstable_wrapCallback=function(Q){var re=w;return function(){var fe=w;w=re;try{return Q.apply(this,arguments)}finally{w=fe}}}}(cm)),cm}var iT;function R1(){return iT||(iT=1,um.exports=S1()),um.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sT;function I1(){if(sT)return fu;sT=1;var n=R1(),e=E1(),t=T1();function s(r){var i="https://react.dev/errors/"+r;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+r+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function u(r){var i=r,a=r;if(r.alternate)for(;i.return;)i=i.return;else{r=i;do i=r,(i.flags&4098)!==0&&(a=i.return),r=i.return;while(r)}return i.tag===3?a:null}function h(r){if(r.tag===13){var i=r.memoizedState;if(i===null&&(r=r.alternate,r!==null&&(i=r.memoizedState)),i!==null)return i.dehydrated}return null}function d(r){if(u(r)!==r)throw Error(s(188))}function m(r){var i=r.alternate;if(!i){if(i=u(r),i===null)throw Error(s(188));return i!==r?null:r}for(var a=r,l=i;;){var f=a.return;if(f===null)break;var p=f.alternate;if(p===null){if(l=f.return,l!==null){a=l;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===a)return d(f),r;if(p===l)return d(f),i;p=p.sibling}throw Error(s(188))}if(a.return!==l.return)a=f,l=p;else{for(var v=!1,T=f.child;T;){if(T===a){v=!0,a=f,l=p;break}if(T===l){v=!0,l=f,a=p;break}T=T.sibling}if(!v){for(T=p.child;T;){if(T===a){v=!0,a=p,l=f;break}if(T===l){v=!0,l=p,a=f;break}T=T.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?r:i}function y(r){var i=r.tag;if(i===5||i===26||i===27||i===6)return r;for(r=r.child;r!==null;){if(i=y(r),i!==null)return i;r=r.sibling}return null}var E=Object.assign,b=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),O=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),G=Symbol.for("react.provider"),Z=Symbol.for("react.consumer"),K=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),se=Symbol.for("react.suspense"),he=Symbol.for("react.suspense_list"),x=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),D=Symbol.iterator;function M(r){return r===null||typeof r!="object"?null:(r=D&&r[D]||r["@@iterator"],typeof r=="function"?r:null)}var C=Symbol.for("react.client.reference");function ue(r){if(r==null)return null;if(typeof r=="function")return r.$$typeof===C?null:r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case k:return"Fragment";case V:return"Profiler";case F:return"StrictMode";case se:return"Suspense";case he:return"SuspenseList";case R:return"Activity"}if(typeof r=="object")switch(r.$$typeof){case O:return"Portal";case K:return(r.displayName||"Context")+".Provider";case Z:return(r._context.displayName||"Context")+".Consumer";case ie:var i=r.render;return r=r.displayName,r||(r=i.displayName||i.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case x:return i=r.displayName||null,i!==null?i:ue(r.type)||"Memo";case S:i=r._payload,r=r._init;try{return ue(r(i))}catch{}}return null}var Qe=Array.isArray,Q=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fe={pending:!1,data:null,method:null,action:null},De=[],Le=-1;function Ye(r){return{current:r}}function ke(r){0>Le||(r.current=De[Le],De[Le]=null,Le--)}function ve(r,i){Le++,De[Le]=r.current,r.current=i}var yt=Ye(null),$t=Ye(null),ur=Ye(null),zr=Ye(null);function xa(r,i){switch(ve(ur,i),ve($t,r),ve(yt,null),i.nodeType){case 9:case 11:r=(r=i.documentElement)&&(r=r.namespaceURI)?NE(r):0;break;default:if(r=i.tagName,i=i.namespaceURI)i=NE(i),r=DE(i,r);else switch(r){case"svg":r=1;break;case"math":r=2;break;default:r=0}}ke(yt),ve(yt,r)}function Ri(){ke(yt),ke($t),ke(ur)}function Ii(r){r.memoizedState!==null&&ve(zr,r);var i=yt.current,a=DE(i,r.type);i!==a&&(ve($t,r),ve(yt,a))}function Br(r){$t.current===r&&(ke(yt),ke($t)),zr.current===r&&(ke(zr),au._currentValue=fe)}var Ms=Object.prototype.hasOwnProperty,xs=n.unstable_scheduleCallback,Ps=n.unstable_cancelCallback,rl=n.unstable_shouldYield,fc=n.unstable_requestPaint,Dn=n.unstable_now,od=n.unstable_getCurrentPriorityLevel,il=n.unstable_ImmediatePriority,Pa=n.unstable_UserBlockingPriority,ks=n.unstable_NormalPriority,ld=n.unstable_LowPriority,ka=n.unstable_IdlePriority,sl=n.log,dc=n.unstable_setDisableYieldValue,ot=null,je=null;function gn(r){if(typeof sl=="function"&&dc(r),je&&typeof je.setStrictMode=="function")try{je.setStrictMode(ot,r)}catch{}}var Kt=Math.clz32?Math.clz32:Vs,pc=Math.log,ud=Math.LN2;function Vs(r){return r>>>=0,r===0?32:31-(pc(r)/ud|0)|0}var Ls=256,Us=4194304;function Xn(r){var i=r&42;if(i!==0)return i;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return r}}function Va(r,i,a){var l=r.pendingLanes;if(l===0)return 0;var f=0,p=r.suspendedLanes,v=r.pingedLanes;r=r.warmLanes;var T=l&134217727;return T!==0?(l=T&~p,l!==0?f=Xn(l):(v&=T,v!==0?f=Xn(v):a||(a=T&~r,a!==0&&(f=Xn(a))))):(T=l&~p,T!==0?f=Xn(T):v!==0?f=Xn(v):a||(a=l&~r,a!==0&&(f=Xn(a)))),f===0?0:i!==0&&i!==f&&(i&p)===0&&(p=f&-f,a=i&-i,p>=a||p===32&&(a&4194048)!==0)?i:f}function zs(r,i){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&i)===0}function al(r,i){switch(r){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ol(){var r=Ls;return Ls<<=1,(Ls&4194048)===0&&(Ls=256),r}function ll(){var r=Us;return Us<<=1,(Us&62914560)===0&&(Us=4194304),r}function jr(r){for(var i=[],a=0;31>a;a++)i.push(r);return i}function Fr(r,i){r.pendingLanes|=i,i!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function ul(r,i,a,l,f,p){var v=r.pendingLanes;r.pendingLanes=a,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=a,r.entangledLanes&=a,r.errorRecoveryDisabledLanes&=a,r.shellSuspendCounter=0;var T=r.entanglements,I=r.expirationTimes,B=r.hiddenUpdates;for(a=v&~a;0<a;){var Y=31-Kt(a),J=1<<Y;T[Y]=0,I[Y]=-1;var q=B[Y];if(q!==null)for(B[Y]=null,Y=0;Y<q.length;Y++){var H=q[Y];H!==null&&(H.lane&=-536870913)}a&=~J}l!==0&&cr(r,l,0),p!==0&&f===0&&r.tag!==0&&(r.suspendedLanes|=p&~(v&~i))}function cr(r,i,a){r.pendingLanes|=i,r.suspendedLanes&=~i;var l=31-Kt(i);r.entangledLanes|=i,r.entanglements[l]=r.entanglements[l]|1073741824|a&4194090}function cl(r,i){var a=r.entangledLanes|=i;for(r=r.entanglements;a;){var l=31-Kt(a),f=1<<l;f&i|r[l]&i&&(r[l]|=i),a&=~f}}function Ci(r){switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=128;break;case 268435456:r=134217728;break;default:r=0}return r}function La(r){return r&=-r,2<r?8<r?(r&134217727)!==0?32:268435456:8:2}function Ni(){var r=re.p;return r!==0?r:(r=window.event,r===void 0?32:YE(r.type))}function mc(r,i){var a=re.p;try{return re.p=r,i()}finally{re.p=a}}var nt=Math.random().toString(36).slice(2),St="__reactFiber$"+nt,_t="__reactProps$"+nt,On="__reactContainer$"+nt,hl="__reactEvents$"+nt,cd="__reactListeners$"+nt,Di="__reactHandles$"+nt,gc="__reactResources$"+nt,Bs="__reactMarker$"+nt;function Oi(r){delete r[St],delete r[_t],delete r[hl],delete r[cd],delete r[Di]}function qr(r){var i=r[St];if(i)return i;for(var a=r.parentNode;a;){if(i=a[On]||a[St]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(r=PE(r);r!==null;){if(a=r[St])return a;r=PE(r)}return i}r=a,a=r.parentNode}return null}function hr(r){if(r=r[St]||r[On]){var i=r.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return r}return null}function fr(r){var i=r.tag;if(i===5||i===26||i===27||i===6)return r.stateNode;throw Error(s(33))}function tn(r){var i=r[gc];return i||(i=r[gc]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function dt(r){r[Bs]=!0}var fl=new Set,Ua={};function Wn(r,i){Hr(r,i),Hr(r+"Capture",i)}function Hr(r,i){for(Ua[r]=i,r=0;r<i.length;r++)fl.add(i[r])}var yc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),_c={},js={};function vc(r){return Ms.call(js,r)?!0:Ms.call(_c,r)?!1:yc.test(r)?js[r]=!0:(_c[r]=!0,!1)}function Mi(r,i,a){if(vc(i))if(a===null)r.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":r.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){r.removeAttribute(i);return}}r.setAttribute(i,""+a)}}function dr(r,i,a){if(a===null)r.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(i);return}r.setAttribute(i,""+a)}}function Ut(r,i,a,l){if(l===null)r.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(a);return}r.setAttributeNS(i,a,""+l)}}var Fs,Ec;function Gr(r){if(Fs===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);Fs=i&&i[1]||"",Ec=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Fs+r+Ec}var za=!1;function Ba(r,i){if(!r||za)return"";za=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(H){var q=H}Reflect.construct(r,[],J)}else{try{J.call()}catch(H){q=H}r.call(J.prototype)}}else{try{throw Error()}catch(H){q=H}(J=r())&&typeof J.catch=="function"&&J.catch(function(){})}}catch(H){if(H&&q&&typeof H.stack=="string")return[H.stack,q.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=l.DetermineComponentFrameRoot(),v=p[0],T=p[1];if(v&&T){var I=v.split(`
`),B=T.split(`
`);for(f=l=0;l<I.length&&!I[l].includes("DetermineComponentFrameRoot");)l++;for(;f<B.length&&!B[f].includes("DetermineComponentFrameRoot");)f++;if(l===I.length||f===B.length)for(l=I.length-1,f=B.length-1;1<=l&&0<=f&&I[l]!==B[f];)f--;for(;1<=l&&0<=f;l--,f--)if(I[l]!==B[f]){if(l!==1||f!==1)do if(l--,f--,0>f||I[l]!==B[f]){var Y=`
`+I[l].replace(" at new "," at ");return r.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",r.displayName)),Y}while(1<=l&&0<=f);break}}}finally{za=!1,Error.prepareStackTrace=a}return(a=r?r.displayName||r.name:"")?Gr(a):""}function dl(r){switch(r.tag){case 26:case 27:case 5:return Gr(r.type);case 16:return Gr("Lazy");case 13:return Gr("Suspense");case 19:return Gr("SuspenseList");case 0:case 15:return Ba(r.type,!1);case 11:return Ba(r.type.render,!1);case 1:return Ba(r.type,!0);case 31:return Gr("Activity");default:return""}}function ja(r){try{var i="";do i+=dl(r),r=r.return;while(r);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function nn(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function pl(r){var i=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function hd(r){var i=pl(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,i),l=""+r[i];if(!r.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,p=a.set;return Object.defineProperty(r,i,{configurable:!0,get:function(){return f.call(this)},set:function(v){l=""+v,p.call(this,v)}}),Object.defineProperty(r,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){r._valueTracker=null,delete r[i]}}}}function Fa(r){r._valueTracker||(r._valueTracker=hd(r))}function ml(r){if(!r)return!1;var i=r._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return r&&(l=pl(r)?r.checked?"true":"false":r.value),r=l,r!==a?(i.setValue(r),!0):!1}function qs(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}var fd=/[\n"\\]/g;function vt(r){return r.replace(fd,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function yn(r,i,a,l,f,p,v,T){r.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?r.type=v:r.removeAttribute("type"),i!=null?v==="number"?(i===0&&r.value===""||r.value!=i)&&(r.value=""+nn(i)):r.value!==""+nn(i)&&(r.value=""+nn(i)):v!=="submit"&&v!=="reset"||r.removeAttribute("value"),i!=null?xi(r,v,nn(i)):a!=null?xi(r,v,nn(a)):l!=null&&r.removeAttribute("value"),f==null&&p!=null&&(r.defaultChecked=!!p),f!=null&&(r.checked=f&&typeof f!="function"&&typeof f!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?r.name=""+nn(T):r.removeAttribute("name")}function Hs(r,i,a,l,f,p,v,T){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(r.type=p),i!=null||a!=null){if(!(p!=="submit"&&p!=="reset"||i!=null))return;a=a!=null?""+nn(a):"",i=i!=null?""+nn(i):a,T||i===r.value||(r.value=i),r.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,r.checked=T?r.checked:!!l,r.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(r.name=v)}function xi(r,i,a){i==="number"&&qs(r.ownerDocument)===r||r.defaultValue===""+a||(r.defaultValue=""+a)}function $r(r,i,a,l){if(r=r.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<r.length;a++)f=i.hasOwnProperty("$"+r[a].value),r[a].selected!==f&&(r[a].selected=f),f&&l&&(r[a].defaultSelected=!0)}else{for(a=""+nn(a),i=null,f=0;f<r.length;f++){if(r[f].value===a){r[f].selected=!0,l&&(r[f].defaultSelected=!0);return}i!==null||r[f].disabled||(i=r[f])}i!==null&&(i.selected=!0)}}function He(r,i,a){if(i!=null&&(i=""+nn(i),i!==r.value&&(r.value=i),a==null)){r.defaultValue!==i&&(r.defaultValue=i);return}r.defaultValue=a!=null?""+nn(a):""}function Gs(r,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(Qe(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=nn(i),r.defaultValue=a,l=r.textContent,l===a&&l!==""&&l!==null&&(r.value=l)}function Mn(r,i){if(i){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=i;return}}r.textContent=i}var $s=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Tc(r,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?r.setProperty(i,""):i==="float"?r.cssFloat="":r[i]="":l?r.setProperty(i,a):typeof a!="number"||a===0||$s.has(i)?i==="float"?r.cssFloat=a:r[i]=(""+a).trim():r[i]=a+"px"}function gl(r,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(r=r.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?r.setProperty(l,""):l==="float"?r.cssFloat="":r[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&a[f]!==l&&Tc(r,f,l)}else for(var p in i)i.hasOwnProperty(p)&&Tc(r,p,i[p])}function yl(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),pd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function qa(r){return pd.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}var Kr=null;function xn(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Qr=null,Yr=null;function _l(r){var i=hr(r);if(i&&(r=i.stateNode)){var a=r[_t]||null;e:switch(r=i.stateNode,i.type){case"input":if(yn(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+vt(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==r&&l.form===r.form){var f=l[_t]||null;if(!f)throw Error(s(90));yn(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===r.form&&ml(l)}break e;case"textarea":He(r,a.value,a.defaultValue);break e;case"select":i=a.value,i!=null&&$r(r,!!a.multiple,i,!1)}}}var pr=!1;function bc(r,i,a){if(pr)return r(i,a);pr=!0;try{var l=r(i);return l}finally{if(pr=!1,(Qr!==null||Yr!==null)&&(mh(),Qr&&(i=Qr,r=Yr,Yr=Qr=null,_l(i),r)))for(i=0;i<r.length;i++)_l(r[i])}}function Ks(r,i){var a=r.stateNode;if(a===null)return null;var l=a[_t]||null;if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(r=r.type,l=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!l;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var Zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pn=!1;if(Zn)try{var Qs={};Object.defineProperty(Qs,"passive",{get:function(){Pn=!0}}),window.addEventListener("test",Qs,Qs),window.removeEventListener("test",Qs,Qs)}catch{Pn=!1}var mr=null,Pi=null,Xr=null;function vl(){if(Xr)return Xr;var r,i=Pi,a=i.length,l,f="value"in mr?mr.value:mr.textContent,p=f.length;for(r=0;r<a&&i[r]===f[r];r++);var v=a-r;for(l=1;l<=v&&i[a-l]===f[p-l];l++);return Xr=f.slice(r,1<l?1-l:void 0)}function gr(r){var i=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&i===13&&(r=13)):r=i,r===10&&(r=13),32<=r||r===13?r:0}function yr(){return!0}function El(){return!1}function Mt(r){function i(a,l,f,p,v){this._reactName=a,this._targetInst=f,this.type=l,this.nativeEvent=p,this.target=v,this.currentTarget=null;for(var T in r)r.hasOwnProperty(T)&&(a=r[T],this[T]=a?a(p):p[T]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?yr:El,this.isPropagationStopped=El,this}return E(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=yr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=yr)},persist:function(){},isPersistent:yr}),i}var ze={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ha=Mt(ze),Ys=E({},ze,{view:0,detail:0}),wc=Mt(Ys),Ga,$a,_r,Xs=E({},Ys,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Js,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==_r&&(_r&&r.type==="mousemove"?(Ga=r.screenX-_r.screenX,$a=r.screenY-_r.screenY):$a=Ga=0,_r=r),Ga)},movementY:function(r){return"movementY"in r?r.movementY:$a}}),kn=Mt(Xs),Ac=E({},Xs,{dataTransfer:0}),md=Mt(Ac),Ws=E({},Ys,{relatedTarget:0}),Ka=Mt(Ws),Tl=E({},ze,{animationName:0,elapsedTime:0,pseudoElement:0}),Qa=Mt(Tl),Sc=E({},ze,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Ya=Mt(Sc),gd=E({},ze,{data:0}),bl=Mt(gd),Zs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ic={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wl(r){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(r):(r=Ic[r])?!!i[r]:!1}function Js(){return wl}var Cc=E({},Ys,{key:function(r){if(r.key){var i=Zs[r.key]||r.key;if(i!=="Unidentified")return i}return r.type==="keypress"?(r=gr(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Rc[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Js,charCode:function(r){return r.type==="keypress"?gr(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?gr(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),Xa=Mt(Cc),Nc=E({},Xs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Al=Mt(Nc),Wr=E({},Ys,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Js}),Dc=Mt(Wr),Oc=E({},ze,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mc=Mt(Oc),xc=E({},Xs,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Wa=Mt(xc),rn=E({},ze,{newState:0,oldState:0}),Pc=Mt(rn),kc=[9,13,27,32],vr=Zn&&"CompositionEvent"in window,c=null;Zn&&"documentMode"in document&&(c=document.documentMode);var g=Zn&&"TextEvent"in window&&!c,_=Zn&&(!vr||c&&8<c&&11>=c),A=" ",U=!1;function $(r,i){switch(r){case"keyup":return kc.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ne(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Oe=!1;function Rt(r,i){switch(r){case"compositionend":return ne(i);case"keypress":return i.which!==32?null:(U=!0,A);case"textInput":return r=i.data,r===A&&U?null:r;default:return null}}function Me(r,i){if(Oe)return r==="compositionend"||!vr&&$(r,i)?(r=vl(),Xr=Pi=mr=null,Oe=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _&&i.locale!=="ko"?null:i.data;default:return null}}var xt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function It(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i==="input"?!!xt[r.type]:i==="textarea"}function Zr(r,i,a,l){Qr?Yr?Yr.push(l):Yr=[l]:Qr=l,i=Th(i,"onChange"),0<i.length&&(a=new Ha("onChange","change",null,a,l),r.push({event:a,listeners:i}))}var zt=null,Er=null;function Sl(r){AE(r,0)}function Vc(r){var i=fr(r);if(ml(i))return r}function Gy(r,i){if(r==="change")return i}var $y=!1;if(Zn){var yd;if(Zn){var _d="oninput"in document;if(!_d){var Ky=document.createElement("div");Ky.setAttribute("oninput","return;"),_d=typeof Ky.oninput=="function"}yd=_d}else yd=!1;$y=yd&&(!document.documentMode||9<document.documentMode)}function Qy(){zt&&(zt.detachEvent("onpropertychange",Yy),Er=zt=null)}function Yy(r){if(r.propertyName==="value"&&Vc(Er)){var i=[];Zr(i,Er,r,xn(r)),bc(Sl,i)}}function BR(r,i,a){r==="focusin"?(Qy(),zt=i,Er=a,zt.attachEvent("onpropertychange",Yy)):r==="focusout"&&Qy()}function jR(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Vc(Er)}function FR(r,i){if(r==="click")return Vc(i)}function qR(r,i){if(r==="input"||r==="change")return Vc(i)}function HR(r,i){return r===i&&(r!==0||1/r===1/i)||r!==r&&i!==i}var _n=typeof Object.is=="function"?Object.is:HR;function Rl(r,i){if(_n(r,i))return!0;if(typeof r!="object"||r===null||typeof i!="object"||i===null)return!1;var a=Object.keys(r),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var f=a[l];if(!Ms.call(i,f)||!_n(r[f],i[f]))return!1}return!0}function Xy(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Wy(r,i){var a=Xy(r);r=0;for(var l;a;){if(a.nodeType===3){if(l=r+a.textContent.length,r<=i&&l>=i)return{node:a,offset:i-r};r=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Xy(a)}}function Zy(r,i){return r&&i?r===i?!0:r&&r.nodeType===3?!1:i&&i.nodeType===3?Zy(r,i.parentNode):"contains"in r?r.contains(i):r.compareDocumentPosition?!!(r.compareDocumentPosition(i)&16):!1:!1}function Jy(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var i=qs(r.document);i instanceof r.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)r=i.contentWindow;else break;i=qs(r.document)}return i}function vd(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i&&(i==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||i==="textarea"||r.contentEditable==="true")}var GR=Zn&&"documentMode"in document&&11>=document.documentMode,Za=null,Ed=null,Il=null,Td=!1;function e_(r,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Td||Za==null||Za!==qs(l)||(l=Za,"selectionStart"in l&&vd(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Il&&Rl(Il,l)||(Il=l,l=Th(Ed,"onSelect"),0<l.length&&(i=new Ha("onSelect","select",null,i,a),r.push({event:i,listeners:l}),i.target=Za)))}function ea(r,i){var a={};return a[r.toLowerCase()]=i.toLowerCase(),a["Webkit"+r]="webkit"+i,a["Moz"+r]="moz"+i,a}var Ja={animationend:ea("Animation","AnimationEnd"),animationiteration:ea("Animation","AnimationIteration"),animationstart:ea("Animation","AnimationStart"),transitionrun:ea("Transition","TransitionRun"),transitionstart:ea("Transition","TransitionStart"),transitioncancel:ea("Transition","TransitionCancel"),transitionend:ea("Transition","TransitionEnd")},bd={},t_={};Zn&&(t_=document.createElement("div").style,"AnimationEvent"in window||(delete Ja.animationend.animation,delete Ja.animationiteration.animation,delete Ja.animationstart.animation),"TransitionEvent"in window||delete Ja.transitionend.transition);function ta(r){if(bd[r])return bd[r];if(!Ja[r])return r;var i=Ja[r],a;for(a in i)if(i.hasOwnProperty(a)&&a in t_)return bd[r]=i[a];return r}var n_=ta("animationend"),r_=ta("animationiteration"),i_=ta("animationstart"),$R=ta("transitionrun"),KR=ta("transitionstart"),QR=ta("transitioncancel"),s_=ta("transitionend"),a_=new Map,wd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");wd.push("scrollEnd");function Jn(r,i){a_.set(r,i),Wn(i,[r])}var o_=new WeakMap;function Vn(r,i){if(typeof r=="object"&&r!==null){var a=o_.get(r);return a!==void 0?a:(i={value:r,source:i,stack:ja(i)},o_.set(r,i),i)}return{value:r,source:i,stack:ja(i)}}var Ln=[],eo=0,Ad=0;function Lc(){for(var r=eo,i=Ad=eo=0;i<r;){var a=Ln[i];Ln[i++]=null;var l=Ln[i];Ln[i++]=null;var f=Ln[i];Ln[i++]=null;var p=Ln[i];if(Ln[i++]=null,l!==null&&f!==null){var v=l.pending;v===null?f.next=f:(f.next=v.next,v.next=f),l.pending=f}p!==0&&l_(a,f,p)}}function Uc(r,i,a,l){Ln[eo++]=r,Ln[eo++]=i,Ln[eo++]=a,Ln[eo++]=l,Ad|=l,r.lanes|=l,r=r.alternate,r!==null&&(r.lanes|=l)}function Sd(r,i,a,l){return Uc(r,i,a,l),zc(r)}function to(r,i){return Uc(r,null,null,i),zc(r)}function l_(r,i,a){r.lanes|=a;var l=r.alternate;l!==null&&(l.lanes|=a);for(var f=!1,p=r.return;p!==null;)p.childLanes|=a,l=p.alternate,l!==null&&(l.childLanes|=a),p.tag===22&&(r=p.stateNode,r===null||r._visibility&1||(f=!0)),r=p,p=p.return;return r.tag===3?(p=r.stateNode,f&&i!==null&&(f=31-Kt(a),r=p.hiddenUpdates,l=r[f],l===null?r[f]=[i]:l.push(i),i.lane=a|536870912),p):null}function zc(r){if(50<Zl)throw Zl=0,Op=null,Error(s(185));for(var i=r.return;i!==null;)r=i,i=r.return;return r.tag===3?r.stateNode:null}var no={};function YR(r,i,a,l){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vn(r,i,a,l){return new YR(r,i,a,l)}function Rd(r){return r=r.prototype,!(!r||!r.isReactComponent)}function Jr(r,i){var a=r.alternate;return a===null?(a=vn(r.tag,i,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=i,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&65011712,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,i=r.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a.refCleanup=r.refCleanup,a}function u_(r,i){r.flags&=65011714;var a=r.alternate;return a===null?(r.childLanes=0,r.lanes=i,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=a.childLanes,r.lanes=a.lanes,r.child=a.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=a.memoizedProps,r.memoizedState=a.memoizedState,r.updateQueue=a.updateQueue,r.type=a.type,i=a.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),r}function Bc(r,i,a,l,f,p){var v=0;if(l=r,typeof r=="function")Rd(r)&&(v=1);else if(typeof r=="string")v=WI(r,a,yt.current)?26:r==="html"||r==="head"||r==="body"?27:5;else e:switch(r){case R:return r=vn(31,a,i,f),r.elementType=R,r.lanes=p,r;case k:return na(a.children,f,p,i);case F:v=8,f|=24;break;case V:return r=vn(12,a,i,f|2),r.elementType=V,r.lanes=p,r;case se:return r=vn(13,a,i,f),r.elementType=se,r.lanes=p,r;case he:return r=vn(19,a,i,f),r.elementType=he,r.lanes=p,r;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case G:case K:v=10;break e;case Z:v=9;break e;case ie:v=11;break e;case x:v=14;break e;case S:v=16,l=null;break e}v=29,a=Error(s(130,r===null?"null":typeof r,"")),l=null}return i=vn(v,a,i,f),i.elementType=r,i.type=l,i.lanes=p,i}function na(r,i,a,l){return r=vn(7,r,l,i),r.lanes=a,r}function Id(r,i,a){return r=vn(6,r,null,i),r.lanes=a,r}function Cd(r,i,a){return i=vn(4,r.children!==null?r.children:[],r.key,i),i.lanes=a,i.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},i}var ro=[],io=0,jc=null,Fc=0,Un=[],zn=0,ra=null,ei=1,ti="";function ia(r,i){ro[io++]=Fc,ro[io++]=jc,jc=r,Fc=i}function c_(r,i,a){Un[zn++]=ei,Un[zn++]=ti,Un[zn++]=ra,ra=r;var l=ei;r=ti;var f=32-Kt(l)-1;l&=~(1<<f),a+=1;var p=32-Kt(i)+f;if(30<p){var v=f-f%5;p=(l&(1<<v)-1).toString(32),l>>=v,f-=v,ei=1<<32-Kt(i)+f|a<<f|l,ti=p+r}else ei=1<<p|a<<f|l,ti=r}function Nd(r){r.return!==null&&(ia(r,1),c_(r,1,0))}function Dd(r){for(;r===jc;)jc=ro[--io],ro[io]=null,Fc=ro[--io],ro[io]=null;for(;r===ra;)ra=Un[--zn],Un[zn]=null,ti=Un[--zn],Un[zn]=null,ei=Un[--zn],Un[zn]=null}var sn=null,lt=null,Ue=!1,sa=null,Tr=!1,Od=Error(s(519));function aa(r){var i=Error(s(418,""));throw Dl(Vn(i,r)),Od}function h_(r){var i=r.stateNode,a=r.type,l=r.memoizedProps;switch(i[St]=r,i[_t]=l,a){case"dialog":Re("cancel",i),Re("close",i);break;case"iframe":case"object":case"embed":Re("load",i);break;case"video":case"audio":for(a=0;a<eu.length;a++)Re(eu[a],i);break;case"source":Re("error",i);break;case"img":case"image":case"link":Re("error",i),Re("load",i);break;case"details":Re("toggle",i);break;case"input":Re("invalid",i),Hs(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Fa(i);break;case"select":Re("invalid",i);break;case"textarea":Re("invalid",i),Gs(i,l.value,l.defaultValue,l.children),Fa(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||CE(i.textContent,a)?(l.popover!=null&&(Re("beforetoggle",i),Re("toggle",i)),l.onScroll!=null&&Re("scroll",i),l.onScrollEnd!=null&&Re("scrollend",i),l.onClick!=null&&(i.onclick=bh),i=!0):i=!1,i||aa(r)}function f_(r){for(sn=r.return;sn;)switch(sn.tag){case 5:case 13:Tr=!1;return;case 27:case 3:Tr=!0;return;default:sn=sn.return}}function Cl(r){if(r!==sn)return!1;if(!Ue)return f_(r),Ue=!0,!1;var i=r.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=r.type,a=!(a!=="form"&&a!=="button")||Kp(r.type,r.memoizedProps)),a=!a),a&&lt&&aa(r),f_(r),i===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(s(317));e:{for(r=r.nextSibling,i=0;r;){if(r.nodeType===8)if(a=r.data,a==="/$"){if(i===0){lt=tr(r.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;r=r.nextSibling}lt=null}}else i===27?(i=lt,Xi(r.type)?(r=Wp,Wp=null,lt=r):lt=i):lt=sn?tr(r.stateNode.nextSibling):null;return!0}function Nl(){lt=sn=null,Ue=!1}function d_(){var r=sa;return r!==null&&(fn===null?fn=r:fn.push.apply(fn,r),sa=null),r}function Dl(r){sa===null?sa=[r]:sa.push(r)}var Md=Ye(null),oa=null,ni=null;function ki(r,i,a){ve(Md,i._currentValue),i._currentValue=a}function ri(r){r._currentValue=Md.current,ke(Md)}function xd(r,i,a){for(;r!==null;){var l=r.alternate;if((r.childLanes&i)!==i?(r.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),r===a)break;r=r.return}}function Pd(r,i,a,l){var f=r.child;for(f!==null&&(f.return=r);f!==null;){var p=f.dependencies;if(p!==null){var v=f.child;p=p.firstContext;e:for(;p!==null;){var T=p;p=f;for(var I=0;I<i.length;I++)if(T.context===i[I]){p.lanes|=a,T=p.alternate,T!==null&&(T.lanes|=a),xd(p.return,a,r),l||(v=null);break e}p=T.next}}else if(f.tag===18){if(v=f.return,v===null)throw Error(s(341));v.lanes|=a,p=v.alternate,p!==null&&(p.lanes|=a),xd(v,a,r),v=null}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===r){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}}function Ol(r,i,a,l){r=null;for(var f=i,p=!1;f!==null;){if(!p){if((f.flags&524288)!==0)p=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var v=f.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var T=f.type;_n(f.pendingProps.value,v.value)||(r!==null?r.push(T):r=[T])}}else if(f===zr.current){if(v=f.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(r!==null?r.push(au):r=[au])}f=f.return}r!==null&&Pd(i,r,a,l),i.flags|=262144}function qc(r){for(r=r.firstContext;r!==null;){if(!_n(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function la(r){oa=r,ni=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function Qt(r){return p_(oa,r)}function Hc(r,i){return oa===null&&la(r),p_(r,i)}function p_(r,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},ni===null){if(r===null)throw Error(s(308));ni=i,r.dependencies={lanes:0,firstContext:i},r.flags|=524288}else ni=ni.next=i;return a}var XR=typeof AbortController<"u"?AbortController:function(){var r=[],i=this.signal={aborted:!1,addEventListener:function(a,l){r.push(l)}};this.abort=function(){i.aborted=!0,r.forEach(function(a){return a()})}},WR=n.unstable_scheduleCallback,ZR=n.unstable_NormalPriority,Ct={$$typeof:K,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function kd(){return{controller:new XR,data:new Map,refCount:0}}function Ml(r){r.refCount--,r.refCount===0&&WR(ZR,function(){r.controller.abort()})}var xl=null,Vd=0,so=0,ao=null;function JR(r,i){if(xl===null){var a=xl=[];Vd=0,so=Up(),ao={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Vd++,i.then(m_,m_),i}function m_(){if(--Vd===0&&xl!==null){ao!==null&&(ao.status="fulfilled");var r=xl;xl=null,so=0,ao=null;for(var i=0;i<r.length;i++)(0,r[i])()}}function eI(r,i){var a=[],l={status:"pending",value:null,reason:null,then:function(f){a.push(f)}};return r.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<a.length;f++)(0,a[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<a.length;f++)(0,a[f])(void 0)}),l}var g_=Q.S;Q.S=function(r,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&JR(r,i),g_!==null&&g_(r,i)};var ua=Ye(null);function Ld(){var r=ua.current;return r!==null?r:Ze.pooledCache}function Gc(r,i){i===null?ve(ua,ua.current):ve(ua,i.pool)}function y_(){var r=Ld();return r===null?null:{parent:Ct._currentValue,pool:r}}var Pl=Error(s(460)),__=Error(s(474)),$c=Error(s(542)),Ud={then:function(){}};function v_(r){return r=r.status,r==="fulfilled"||r==="rejected"}function Kc(){}function E_(r,i,a){switch(a=r[a],a===void 0?r.push(i):a!==i&&(i.then(Kc,Kc),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw r=i.reason,b_(r),r;default:if(typeof i.status=="string")i.then(Kc,Kc);else{if(r=Ze,r!==null&&100<r.shellSuspendCounter)throw Error(s(482));r=i,r.status="pending",r.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw r=i.reason,b_(r),r}throw kl=i,Pl}}var kl=null;function T_(){if(kl===null)throw Error(s(459));var r=kl;return kl=null,r}function b_(r){if(r===Pl||r===$c)throw Error(s(483))}var Vi=!1;function zd(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bd(r,i){r=r.updateQueue,i.updateQueue===r&&(i.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function Li(r){return{lane:r,tag:0,payload:null,callback:null,next:null}}function Ui(r,i,a){var l=r.updateQueue;if(l===null)return null;if(l=l.shared,(Fe&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=zc(r),l_(r,null,a),i}return Uc(r,l,i,a),zc(r)}function Vl(r,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=r.pendingLanes,a|=l,i.lanes=a,cl(r,a)}}function jd(r,i){var a=r.updateQueue,l=r.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var f=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};p===null?f=p=v:p=p.next=v,a=a.next}while(a!==null);p===null?f=p=i:p=p.next=i}else f=p=i;a={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:l.shared,callbacks:l.callbacks},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=i:r.next=i,a.lastBaseUpdate=i}var Fd=!1;function Ll(){if(Fd){var r=ao;if(r!==null)throw r}}function Ul(r,i,a,l){Fd=!1;var f=r.updateQueue;Vi=!1;var p=f.firstBaseUpdate,v=f.lastBaseUpdate,T=f.shared.pending;if(T!==null){f.shared.pending=null;var I=T,B=I.next;I.next=null,v===null?p=B:v.next=B,v=I;var Y=r.alternate;Y!==null&&(Y=Y.updateQueue,T=Y.lastBaseUpdate,T!==v&&(T===null?Y.firstBaseUpdate=B:T.next=B,Y.lastBaseUpdate=I))}if(p!==null){var J=f.baseState;v=0,Y=B=I=null,T=p;do{var q=T.lane&-536870913,H=q!==T.lane;if(H?(xe&q)===q:(l&q)===q){q!==0&&q===so&&(Fd=!0),Y!==null&&(Y=Y.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var _e=r,pe=T;q=i;var Ke=a;switch(pe.tag){case 1:if(_e=pe.payload,typeof _e=="function"){J=_e.call(Ke,J,q);break e}J=_e;break e;case 3:_e.flags=_e.flags&-65537|128;case 0:if(_e=pe.payload,q=typeof _e=="function"?_e.call(Ke,J,q):_e,q==null)break e;J=E({},J,q);break e;case 2:Vi=!0}}q=T.callback,q!==null&&(r.flags|=64,H&&(r.flags|=8192),H=f.callbacks,H===null?f.callbacks=[q]:H.push(q))}else H={lane:q,tag:T.tag,payload:T.payload,callback:T.callback,next:null},Y===null?(B=Y=H,I=J):Y=Y.next=H,v|=q;if(T=T.next,T===null){if(T=f.shared.pending,T===null)break;H=T,T=H.next,H.next=null,f.lastBaseUpdate=H,f.shared.pending=null}}while(!0);Y===null&&(I=J),f.baseState=I,f.firstBaseUpdate=B,f.lastBaseUpdate=Y,p===null&&(f.shared.lanes=0),$i|=v,r.lanes=v,r.memoizedState=J}}function w_(r,i){if(typeof r!="function")throw Error(s(191,r));r.call(i)}function A_(r,i){var a=r.callbacks;if(a!==null)for(r.callbacks=null,r=0;r<a.length;r++)w_(a[r],i)}var oo=Ye(null),Qc=Ye(0);function S_(r,i){r=ci,ve(Qc,r),ve(oo,i),ci=r|i.baseLanes}function qd(){ve(Qc,ci),ve(oo,oo.current)}function Hd(){ci=Qc.current,ke(oo),ke(Qc)}var zi=0,we=null,Ge=null,Et=null,Yc=!1,lo=!1,ca=!1,Xc=0,zl=0,uo=null,tI=0;function pt(){throw Error(s(321))}function Gd(r,i){if(i===null)return!1;for(var a=0;a<i.length&&a<r.length;a++)if(!_n(r[a],i[a]))return!1;return!0}function $d(r,i,a,l,f,p){return zi=p,we=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Q.H=r===null||r.memoizedState===null?lv:uv,ca=!1,p=a(l,f),ca=!1,lo&&(p=I_(i,a,l,f)),R_(r),p}function R_(r){Q.H=nh;var i=Ge!==null&&Ge.next!==null;if(zi=0,Et=Ge=we=null,Yc=!1,zl=0,uo=null,i)throw Error(s(300));r===null||Pt||(r=r.dependencies,r!==null&&qc(r)&&(Pt=!0))}function I_(r,i,a,l){we=r;var f=0;do{if(lo&&(uo=null),zl=0,lo=!1,25<=f)throw Error(s(301));if(f+=1,Et=Ge=null,r.updateQueue!=null){var p=r.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}Q.H=lI,p=i(a,l)}while(lo);return p}function nI(){var r=Q.H,i=r.useState()[0];return i=typeof i.then=="function"?Bl(i):i,r=r.useState()[0],(Ge!==null?Ge.memoizedState:null)!==r&&(we.flags|=1024),i}function Kd(){var r=Xc!==0;return Xc=0,r}function Qd(r,i,a){i.updateQueue=r.updateQueue,i.flags&=-2053,r.lanes&=~a}function Yd(r){if(Yc){for(r=r.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Yc=!1}zi=0,Et=Ge=we=null,lo=!1,zl=Xc=0,uo=null}function cn(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?we.memoizedState=Et=r:Et=Et.next=r,Et}function Tt(){if(Ge===null){var r=we.alternate;r=r!==null?r.memoizedState:null}else r=Ge.next;var i=Et===null?we.memoizedState:Et.next;if(i!==null)Et=i,Ge=r;else{if(r===null)throw we.alternate===null?Error(s(467)):Error(s(310));Ge=r,r={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},Et===null?we.memoizedState=Et=r:Et=Et.next=r}return Et}function Xd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Bl(r){var i=zl;return zl+=1,uo===null&&(uo=[]),r=E_(uo,r,i),i=we,(Et===null?i.memoizedState:Et.next)===null&&(i=i.alternate,Q.H=i===null||i.memoizedState===null?lv:uv),r}function Wc(r){if(r!==null&&typeof r=="object"){if(typeof r.then=="function")return Bl(r);if(r.$$typeof===K)return Qt(r)}throw Error(s(438,String(r)))}function Wd(r){var i=null,a=we.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=we.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=Xd(),we.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(r),l=0;l<r;l++)a[l]=N;return i.index++,a}function ii(r,i){return typeof i=="function"?i(r):i}function Zc(r){var i=Tt();return Zd(i,Ge,r)}function Zd(r,i,a){var l=r.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var f=r.baseQueue,p=l.pending;if(p!==null){if(f!==null){var v=f.next;f.next=p.next,p.next=v}i.baseQueue=f=p,l.pending=null}if(p=r.baseState,f===null)r.memoizedState=p;else{i=f.next;var T=v=null,I=null,B=i,Y=!1;do{var J=B.lane&-536870913;if(J!==B.lane?(xe&J)===J:(zi&J)===J){var q=B.revertLane;if(q===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),J===so&&(Y=!0);else if((zi&q)===q){B=B.next,q===so&&(Y=!0);continue}else J={lane:0,revertLane:B.revertLane,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},I===null?(T=I=J,v=p):I=I.next=J,we.lanes|=q,$i|=q;J=B.action,ca&&a(p,J),p=B.hasEagerState?B.eagerState:a(p,J)}else q={lane:J,revertLane:B.revertLane,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},I===null?(T=I=q,v=p):I=I.next=q,we.lanes|=J,$i|=J;B=B.next}while(B!==null&&B!==i);if(I===null?v=p:I.next=T,!_n(p,r.memoizedState)&&(Pt=!0,Y&&(a=ao,a!==null)))throw a;r.memoizedState=p,r.baseState=v,r.baseQueue=I,l.lastRenderedState=p}return f===null&&(l.lanes=0),[r.memoizedState,l.dispatch]}function Jd(r){var i=Tt(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=r;var l=a.dispatch,f=a.pending,p=i.memoizedState;if(f!==null){a.pending=null;var v=f=f.next;do p=r(p,v.action),v=v.next;while(v!==f);_n(p,i.memoizedState)||(Pt=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),a.lastRenderedState=p}return[p,l]}function C_(r,i,a){var l=we,f=Tt(),p=Ue;if(p){if(a===void 0)throw Error(s(407));a=a()}else a=i();var v=!_n((Ge||f).memoizedState,a);v&&(f.memoizedState=a,Pt=!0),f=f.queue;var T=O_.bind(null,l,f,r);if(jl(2048,8,T,[r]),f.getSnapshot!==i||v||Et!==null&&Et.memoizedState.tag&1){if(l.flags|=2048,co(9,Jc(),D_.bind(null,l,f,a,i),null),Ze===null)throw Error(s(349));p||(zi&124)!==0||N_(l,i,a)}return a}function N_(r,i,a){r.flags|=16384,r={getSnapshot:i,value:a},i=we.updateQueue,i===null?(i=Xd(),we.updateQueue=i,i.stores=[r]):(a=i.stores,a===null?i.stores=[r]:a.push(r))}function D_(r,i,a,l){i.value=a,i.getSnapshot=l,M_(i)&&x_(r)}function O_(r,i,a){return a(function(){M_(i)&&x_(r)})}function M_(r){var i=r.getSnapshot;r=r.value;try{var a=i();return!_n(r,a)}catch{return!0}}function x_(r){var i=to(r,2);i!==null&&An(i,r,2)}function ep(r){var i=cn();if(typeof r=="function"){var a=r;if(r=a(),ca){gn(!0);try{a()}finally{gn(!1)}}}return i.memoizedState=i.baseState=r,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ii,lastRenderedState:r},i}function P_(r,i,a,l){return r.baseState=a,Zd(r,Ge,typeof l=="function"?l:ii)}function rI(r,i,a,l,f){if(th(r))throw Error(s(485));if(r=i.action,r!==null){var p={payload:f,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){p.listeners.push(v)}};Q.T!==null?a(!0):p.isTransition=!1,l(p),a=i.pending,a===null?(p.next=i.pending=p,k_(i,p)):(p.next=a.next,i.pending=a.next=p)}}function k_(r,i){var a=i.action,l=i.payload,f=r.state;if(i.isTransition){var p=Q.T,v={};Q.T=v;try{var T=a(f,l),I=Q.S;I!==null&&I(v,T),V_(r,i,T)}catch(B){tp(r,i,B)}finally{Q.T=p}}else try{p=a(f,l),V_(r,i,p)}catch(B){tp(r,i,B)}}function V_(r,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){L_(r,i,l)},function(l){return tp(r,i,l)}):L_(r,i,a)}function L_(r,i,a){i.status="fulfilled",i.value=a,U_(i),r.state=a,i=r.pending,i!==null&&(a=i.next,a===i?r.pending=null:(a=a.next,i.next=a,k_(r,a)))}function tp(r,i,a){var l=r.pending;if(r.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,U_(i),i=i.next;while(i!==l)}r.action=null}function U_(r){r=r.listeners;for(var i=0;i<r.length;i++)(0,r[i])()}function z_(r,i){return i}function B_(r,i){if(Ue){var a=Ze.formState;if(a!==null){e:{var l=we;if(Ue){if(lt){t:{for(var f=lt,p=Tr;f.nodeType!==8;){if(!p){f=null;break t}if(f=tr(f.nextSibling),f===null){f=null;break t}}p=f.data,f=p==="F!"||p==="F"?f:null}if(f){lt=tr(f.nextSibling),l=f.data==="F!";break e}}aa(l)}l=!1}l&&(i=a[0])}}return a=cn(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:z_,lastRenderedState:i},a.queue=l,a=sv.bind(null,we,l),l.dispatch=a,l=ep(!1),p=ap.bind(null,we,!1,l.queue),l=cn(),f={state:i,dispatch:null,action:r,pending:null},l.queue=f,a=rI.bind(null,we,f,p,a),f.dispatch=a,l.memoizedState=r,[i,a,!1]}function j_(r){var i=Tt();return F_(i,Ge,r)}function F_(r,i,a){if(i=Zd(r,i,z_)[0],r=Zc(ii)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Bl(i)}catch(v){throw v===Pl?$c:v}else l=i;i=Tt();var f=i.queue,p=f.dispatch;return a!==i.memoizedState&&(we.flags|=2048,co(9,Jc(),iI.bind(null,f,a),null)),[l,p,r]}function iI(r,i){r.action=i}function q_(r){var i=Tt(),a=Ge;if(a!==null)return F_(i,a,r);Tt(),i=i.memoizedState,a=Tt();var l=a.queue.dispatch;return a.memoizedState=r,[i,l,!1]}function co(r,i,a,l){return r={tag:r,create:a,deps:l,inst:i,next:null},i=we.updateQueue,i===null&&(i=Xd(),we.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=r.next=r:(l=a.next,a.next=r,r.next=l,i.lastEffect=r),r}function Jc(){return{destroy:void 0,resource:void 0}}function H_(){return Tt().memoizedState}function eh(r,i,a,l){var f=cn();l=l===void 0?null:l,we.flags|=r,f.memoizedState=co(1|i,Jc(),a,l)}function jl(r,i,a,l){var f=Tt();l=l===void 0?null:l;var p=f.memoizedState.inst;Ge!==null&&l!==null&&Gd(l,Ge.memoizedState.deps)?f.memoizedState=co(i,p,a,l):(we.flags|=r,f.memoizedState=co(1|i,p,a,l))}function G_(r,i){eh(8390656,8,r,i)}function $_(r,i){jl(2048,8,r,i)}function K_(r,i){return jl(4,2,r,i)}function Q_(r,i){return jl(4,4,r,i)}function Y_(r,i){if(typeof i=="function"){r=r();var a=i(r);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return r=r(),i.current=r,function(){i.current=null}}function X_(r,i,a){a=a!=null?a.concat([r]):null,jl(4,4,Y_.bind(null,i,r),a)}function np(){}function W_(r,i){var a=Tt();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&Gd(i,l[1])?l[0]:(a.memoizedState=[r,i],r)}function Z_(r,i){var a=Tt();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&Gd(i,l[1]))return l[0];if(l=r(),ca){gn(!0);try{r()}finally{gn(!1)}}return a.memoizedState=[l,i],l}function rp(r,i,a){return a===void 0||(zi&1073741824)!==0?r.memoizedState=i:(r.memoizedState=a,r=tE(),we.lanes|=r,$i|=r,a)}function J_(r,i,a,l){return _n(a,i)?a:oo.current!==null?(r=rp(r,a,l),_n(r,i)||(Pt=!0),r):(zi&42)===0?(Pt=!0,r.memoizedState=a):(r=tE(),we.lanes|=r,$i|=r,i)}function ev(r,i,a,l,f){var p=re.p;re.p=p!==0&&8>p?p:8;var v=Q.T,T={};Q.T=T,ap(r,!1,i,a);try{var I=f(),B=Q.S;if(B!==null&&B(T,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var Y=eI(I,l);Fl(r,i,Y,wn(r))}else Fl(r,i,l,wn(r))}catch(J){Fl(r,i,{then:function(){},status:"rejected",reason:J},wn())}finally{re.p=p,Q.T=v}}function sI(){}function ip(r,i,a,l){if(r.tag!==5)throw Error(s(476));var f=tv(r).queue;ev(r,f,i,fe,a===null?sI:function(){return nv(r),a(l)})}function tv(r){var i=r.memoizedState;if(i!==null)return i;i={memoizedState:fe,baseState:fe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ii,lastRenderedState:fe},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ii,lastRenderedState:a},next:null},r.memoizedState=i,r=r.alternate,r!==null&&(r.memoizedState=i),i}function nv(r){var i=tv(r).next.queue;Fl(r,i,{},wn())}function sp(){return Qt(au)}function rv(){return Tt().memoizedState}function iv(){return Tt().memoizedState}function aI(r){for(var i=r.return;i!==null;){switch(i.tag){case 24:case 3:var a=wn();r=Li(a);var l=Ui(i,r,a);l!==null&&(An(l,i,a),Vl(l,i,a)),i={cache:kd()},r.payload=i;return}i=i.return}}function oI(r,i,a){var l=wn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},th(r)?av(i,a):(a=Sd(r,i,a,l),a!==null&&(An(a,r,l),ov(a,i,l)))}function sv(r,i,a){var l=wn();Fl(r,i,a,l)}function Fl(r,i,a,l){var f={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(th(r))av(i,f);else{var p=r.alternate;if(r.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var v=i.lastRenderedState,T=p(v,a);if(f.hasEagerState=!0,f.eagerState=T,_n(T,v))return Uc(r,i,f,0),Ze===null&&Lc(),!1}catch{}finally{}if(a=Sd(r,i,f,l),a!==null)return An(a,r,l),ov(a,i,l),!0}return!1}function ap(r,i,a,l){if(l={lane:2,revertLane:Up(),action:l,hasEagerState:!1,eagerState:null,next:null},th(r)){if(i)throw Error(s(479))}else i=Sd(r,a,l,2),i!==null&&An(i,r,2)}function th(r){var i=r.alternate;return r===we||i!==null&&i===we}function av(r,i){lo=Yc=!0;var a=r.pending;a===null?i.next=i:(i.next=a.next,a.next=i),r.pending=i}function ov(r,i,a){if((a&4194048)!==0){var l=i.lanes;l&=r.pendingLanes,a|=l,i.lanes=a,cl(r,a)}}var nh={readContext:Qt,use:Wc,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useLayoutEffect:pt,useInsertionEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useSyncExternalStore:pt,useId:pt,useHostTransitionStatus:pt,useFormState:pt,useActionState:pt,useOptimistic:pt,useMemoCache:pt,useCacheRefresh:pt},lv={readContext:Qt,use:Wc,useCallback:function(r,i){return cn().memoizedState=[r,i===void 0?null:i],r},useContext:Qt,useEffect:G_,useImperativeHandle:function(r,i,a){a=a!=null?a.concat([r]):null,eh(4194308,4,Y_.bind(null,i,r),a)},useLayoutEffect:function(r,i){return eh(4194308,4,r,i)},useInsertionEffect:function(r,i){eh(4,2,r,i)},useMemo:function(r,i){var a=cn();i=i===void 0?null:i;var l=r();if(ca){gn(!0);try{r()}finally{gn(!1)}}return a.memoizedState=[l,i],l},useReducer:function(r,i,a){var l=cn();if(a!==void 0){var f=a(i);if(ca){gn(!0);try{a(i)}finally{gn(!1)}}}else f=i;return l.memoizedState=l.baseState=f,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:f},l.queue=r,r=r.dispatch=oI.bind(null,we,r),[l.memoizedState,r]},useRef:function(r){var i=cn();return r={current:r},i.memoizedState=r},useState:function(r){r=ep(r);var i=r.queue,a=sv.bind(null,we,i);return i.dispatch=a,[r.memoizedState,a]},useDebugValue:np,useDeferredValue:function(r,i){var a=cn();return rp(a,r,i)},useTransition:function(){var r=ep(!1);return r=ev.bind(null,we,r.queue,!0,!1),cn().memoizedState=r,[!1,r]},useSyncExternalStore:function(r,i,a){var l=we,f=cn();if(Ue){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),Ze===null)throw Error(s(349));(xe&124)!==0||N_(l,i,a)}f.memoizedState=a;var p={value:a,getSnapshot:i};return f.queue=p,G_(O_.bind(null,l,p,r),[r]),l.flags|=2048,co(9,Jc(),D_.bind(null,l,p,a,i),null),a},useId:function(){var r=cn(),i=Ze.identifierPrefix;if(Ue){var a=ti,l=ei;a=(l&~(1<<32-Kt(l)-1)).toString(32)+a,i="«"+i+"R"+a,a=Xc++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=tI++,i="«"+i+"r"+a.toString(32)+"»";return r.memoizedState=i},useHostTransitionStatus:sp,useFormState:B_,useActionState:B_,useOptimistic:function(r){var i=cn();i.memoizedState=i.baseState=r;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=ap.bind(null,we,!0,a),a.dispatch=i,[r,i]},useMemoCache:Wd,useCacheRefresh:function(){return cn().memoizedState=aI.bind(null,we)}},uv={readContext:Qt,use:Wc,useCallback:W_,useContext:Qt,useEffect:$_,useImperativeHandle:X_,useInsertionEffect:K_,useLayoutEffect:Q_,useMemo:Z_,useReducer:Zc,useRef:H_,useState:function(){return Zc(ii)},useDebugValue:np,useDeferredValue:function(r,i){var a=Tt();return J_(a,Ge.memoizedState,r,i)},useTransition:function(){var r=Zc(ii)[0],i=Tt().memoizedState;return[typeof r=="boolean"?r:Bl(r),i]},useSyncExternalStore:C_,useId:rv,useHostTransitionStatus:sp,useFormState:j_,useActionState:j_,useOptimistic:function(r,i){var a=Tt();return P_(a,Ge,r,i)},useMemoCache:Wd,useCacheRefresh:iv},lI={readContext:Qt,use:Wc,useCallback:W_,useContext:Qt,useEffect:$_,useImperativeHandle:X_,useInsertionEffect:K_,useLayoutEffect:Q_,useMemo:Z_,useReducer:Jd,useRef:H_,useState:function(){return Jd(ii)},useDebugValue:np,useDeferredValue:function(r,i){var a=Tt();return Ge===null?rp(a,r,i):J_(a,Ge.memoizedState,r,i)},useTransition:function(){var r=Jd(ii)[0],i=Tt().memoizedState;return[typeof r=="boolean"?r:Bl(r),i]},useSyncExternalStore:C_,useId:rv,useHostTransitionStatus:sp,useFormState:q_,useActionState:q_,useOptimistic:function(r,i){var a=Tt();return Ge!==null?P_(a,Ge,r,i):(a.baseState=r,[r,a.queue.dispatch])},useMemoCache:Wd,useCacheRefresh:iv},ho=null,ql=0;function rh(r){var i=ql;return ql+=1,ho===null&&(ho=[]),E_(ho,r,i)}function Hl(r,i){i=i.props.ref,r.ref=i!==void 0?i:null}function ih(r,i){throw i.$$typeof===b?Error(s(525)):(r=Object.prototype.toString.call(i),Error(s(31,r==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":r)))}function cv(r){var i=r._init;return i(r._payload)}function hv(r){function i(L,P){if(r){var z=L.deletions;z===null?(L.deletions=[P],L.flags|=16):z.push(P)}}function a(L,P){if(!r)return null;for(;P!==null;)i(L,P),P=P.sibling;return null}function l(L){for(var P=new Map;L!==null;)L.key!==null?P.set(L.key,L):P.set(L.index,L),L=L.sibling;return P}function f(L,P){return L=Jr(L,P),L.index=0,L.sibling=null,L}function p(L,P,z){return L.index=z,r?(z=L.alternate,z!==null?(z=z.index,z<P?(L.flags|=67108866,P):z):(L.flags|=67108866,P)):(L.flags|=1048576,P)}function v(L){return r&&L.alternate===null&&(L.flags|=67108866),L}function T(L,P,z,X){return P===null||P.tag!==6?(P=Id(z,L.mode,X),P.return=L,P):(P=f(P,z),P.return=L,P)}function I(L,P,z,X){var le=z.type;return le===k?Y(L,P,z.props.children,X,z.key):P!==null&&(P.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===S&&cv(le)===P.type)?(P=f(P,z.props),Hl(P,z),P.return=L,P):(P=Bc(z.type,z.key,z.props,null,L.mode,X),Hl(P,z),P.return=L,P)}function B(L,P,z,X){return P===null||P.tag!==4||P.stateNode.containerInfo!==z.containerInfo||P.stateNode.implementation!==z.implementation?(P=Cd(z,L.mode,X),P.return=L,P):(P=f(P,z.children||[]),P.return=L,P)}function Y(L,P,z,X,le){return P===null||P.tag!==7?(P=na(z,L.mode,X,le),P.return=L,P):(P=f(P,z),P.return=L,P)}function J(L,P,z){if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return P=Id(""+P,L.mode,z),P.return=L,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case w:return z=Bc(P.type,P.key,P.props,null,L.mode,z),Hl(z,P),z.return=L,z;case O:return P=Cd(P,L.mode,z),P.return=L,P;case S:var X=P._init;return P=X(P._payload),J(L,P,z)}if(Qe(P)||M(P))return P=na(P,L.mode,z,null),P.return=L,P;if(typeof P.then=="function")return J(L,rh(P),z);if(P.$$typeof===K)return J(L,Hc(L,P),z);ih(L,P)}return null}function q(L,P,z,X){var le=P!==null?P.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return le!==null?null:T(L,P,""+z,X);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case w:return z.key===le?I(L,P,z,X):null;case O:return z.key===le?B(L,P,z,X):null;case S:return le=z._init,z=le(z._payload),q(L,P,z,X)}if(Qe(z)||M(z))return le!==null?null:Y(L,P,z,X,null);if(typeof z.then=="function")return q(L,P,rh(z),X);if(z.$$typeof===K)return q(L,P,Hc(L,z),X);ih(L,z)}return null}function H(L,P,z,X,le){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return L=L.get(z)||null,T(P,L,""+X,le);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case w:return L=L.get(X.key===null?z:X.key)||null,I(P,L,X,le);case O:return L=L.get(X.key===null?z:X.key)||null,B(P,L,X,le);case S:var Ae=X._init;return X=Ae(X._payload),H(L,P,z,X,le)}if(Qe(X)||M(X))return L=L.get(z)||null,Y(P,L,X,le,null);if(typeof X.then=="function")return H(L,P,z,rh(X),le);if(X.$$typeof===K)return H(L,P,z,Hc(P,X),le);ih(P,X)}return null}function _e(L,P,z,X){for(var le=null,Ae=null,ce=P,me=P=0,Vt=null;ce!==null&&me<z.length;me++){ce.index>me?(Vt=ce,ce=null):Vt=ce.sibling;var Ve=q(L,ce,z[me],X);if(Ve===null){ce===null&&(ce=Vt);break}r&&ce&&Ve.alternate===null&&i(L,ce),P=p(Ve,P,me),Ae===null?le=Ve:Ae.sibling=Ve,Ae=Ve,ce=Vt}if(me===z.length)return a(L,ce),Ue&&ia(L,me),le;if(ce===null){for(;me<z.length;me++)ce=J(L,z[me],X),ce!==null&&(P=p(ce,P,me),Ae===null?le=ce:Ae.sibling=ce,Ae=ce);return Ue&&ia(L,me),le}for(ce=l(ce);me<z.length;me++)Vt=H(ce,L,me,z[me],X),Vt!==null&&(r&&Vt.alternate!==null&&ce.delete(Vt.key===null?me:Vt.key),P=p(Vt,P,me),Ae===null?le=Vt:Ae.sibling=Vt,Ae=Vt);return r&&ce.forEach(function(ts){return i(L,ts)}),Ue&&ia(L,me),le}function pe(L,P,z,X){if(z==null)throw Error(s(151));for(var le=null,Ae=null,ce=P,me=P=0,Vt=null,Ve=z.next();ce!==null&&!Ve.done;me++,Ve=z.next()){ce.index>me?(Vt=ce,ce=null):Vt=ce.sibling;var ts=q(L,ce,Ve.value,X);if(ts===null){ce===null&&(ce=Vt);break}r&&ce&&ts.alternate===null&&i(L,ce),P=p(ts,P,me),Ae===null?le=ts:Ae.sibling=ts,Ae=ts,ce=Vt}if(Ve.done)return a(L,ce),Ue&&ia(L,me),le;if(ce===null){for(;!Ve.done;me++,Ve=z.next())Ve=J(L,Ve.value,X),Ve!==null&&(P=p(Ve,P,me),Ae===null?le=Ve:Ae.sibling=Ve,Ae=Ve);return Ue&&ia(L,me),le}for(ce=l(ce);!Ve.done;me++,Ve=z.next())Ve=H(ce,L,me,Ve.value,X),Ve!==null&&(r&&Ve.alternate!==null&&ce.delete(Ve.key===null?me:Ve.key),P=p(Ve,P,me),Ae===null?le=Ve:Ae.sibling=Ve,Ae=Ve);return r&&ce.forEach(function(u1){return i(L,u1)}),Ue&&ia(L,me),le}function Ke(L,P,z,X){if(typeof z=="object"&&z!==null&&z.type===k&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case w:e:{for(var le=z.key;P!==null;){if(P.key===le){if(le=z.type,le===k){if(P.tag===7){a(L,P.sibling),X=f(P,z.props.children),X.return=L,L=X;break e}}else if(P.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===S&&cv(le)===P.type){a(L,P.sibling),X=f(P,z.props),Hl(X,z),X.return=L,L=X;break e}a(L,P);break}else i(L,P);P=P.sibling}z.type===k?(X=na(z.props.children,L.mode,X,z.key),X.return=L,L=X):(X=Bc(z.type,z.key,z.props,null,L.mode,X),Hl(X,z),X.return=L,L=X)}return v(L);case O:e:{for(le=z.key;P!==null;){if(P.key===le)if(P.tag===4&&P.stateNode.containerInfo===z.containerInfo&&P.stateNode.implementation===z.implementation){a(L,P.sibling),X=f(P,z.children||[]),X.return=L,L=X;break e}else{a(L,P);break}else i(L,P);P=P.sibling}X=Cd(z,L.mode,X),X.return=L,L=X}return v(L);case S:return le=z._init,z=le(z._payload),Ke(L,P,z,X)}if(Qe(z))return _e(L,P,z,X);if(M(z)){if(le=M(z),typeof le!="function")throw Error(s(150));return z=le.call(z),pe(L,P,z,X)}if(typeof z.then=="function")return Ke(L,P,rh(z),X);if(z.$$typeof===K)return Ke(L,P,Hc(L,z),X);ih(L,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,P!==null&&P.tag===6?(a(L,P.sibling),X=f(P,z),X.return=L,L=X):(a(L,P),X=Id(z,L.mode,X),X.return=L,L=X),v(L)):a(L,P)}return function(L,P,z,X){try{ql=0;var le=Ke(L,P,z,X);return ho=null,le}catch(ce){if(ce===Pl||ce===$c)throw ce;var Ae=vn(29,ce,null,L.mode);return Ae.lanes=X,Ae.return=L,Ae}finally{}}}var fo=hv(!0),fv=hv(!1),Bn=Ye(null),br=null;function Bi(r){var i=r.alternate;ve(Nt,Nt.current&1),ve(Bn,r),br===null&&(i===null||oo.current!==null||i.memoizedState!==null)&&(br=r)}function dv(r){if(r.tag===22){if(ve(Nt,Nt.current),ve(Bn,r),br===null){var i=r.alternate;i!==null&&i.memoizedState!==null&&(br=r)}}else ji()}function ji(){ve(Nt,Nt.current),ve(Bn,Bn.current)}function si(r){ke(Bn),br===r&&(br=null),ke(Nt)}var Nt=Ye(0);function sh(r){for(var i=r;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Xp(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function op(r,i,a,l){i=r.memoizedState,a=a(l,i),a=a==null?i:E({},i,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var lp={enqueueSetState:function(r,i,a){r=r._reactInternals;var l=wn(),f=Li(l);f.payload=i,a!=null&&(f.callback=a),i=Ui(r,f,l),i!==null&&(An(i,r,l),Vl(i,r,l))},enqueueReplaceState:function(r,i,a){r=r._reactInternals;var l=wn(),f=Li(l);f.tag=1,f.payload=i,a!=null&&(f.callback=a),i=Ui(r,f,l),i!==null&&(An(i,r,l),Vl(i,r,l))},enqueueForceUpdate:function(r,i){r=r._reactInternals;var a=wn(),l=Li(a);l.tag=2,i!=null&&(l.callback=i),i=Ui(r,l,a),i!==null&&(An(i,r,a),Vl(i,r,a))}};function pv(r,i,a,l,f,p,v){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(l,p,v):i.prototype&&i.prototype.isPureReactComponent?!Rl(a,l)||!Rl(f,p):!0}function mv(r,i,a,l){r=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==r&&lp.enqueueReplaceState(i,i.state,null)}function ha(r,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(r=r.defaultProps){a===i&&(a=E({},a));for(var f in r)a[f]===void 0&&(a[f]=r[f])}return a}var ah=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)};function gv(r){ah(r)}function yv(r){console.error(r)}function _v(r){ah(r)}function oh(r,i){try{var a=r.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function vv(r,i,a){try{var l=r.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function up(r,i,a){return a=Li(a),a.tag=3,a.payload={element:null},a.callback=function(){oh(r,i)},a}function Ev(r){return r=Li(r),r.tag=3,r}function Tv(r,i,a,l){var f=a.type.getDerivedStateFromError;if(typeof f=="function"){var p=l.value;r.payload=function(){return f(p)},r.callback=function(){vv(i,a,l)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(r.callback=function(){vv(i,a,l),typeof f!="function"&&(Ki===null?Ki=new Set([this]):Ki.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function uI(r,i,a,l,f){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&Ol(i,a,f,!0),a=Bn.current,a!==null){switch(a.tag){case 13:return br===null?xp():a.alternate===null&&ut===0&&(ut=3),a.flags&=-257,a.flags|=65536,a.lanes=f,l===Ud?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),kp(r,l,f)),!1;case 22:return a.flags|=65536,l===Ud?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),kp(r,l,f)),!1}throw Error(s(435,a.tag))}return kp(r,l,f),xp(),!1}if(Ue)return i=Bn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==Od&&(r=Error(s(422),{cause:l}),Dl(Vn(r,a)))):(l!==Od&&(i=Error(s(423),{cause:l}),Dl(Vn(i,a))),r=r.current.alternate,r.flags|=65536,f&=-f,r.lanes|=f,l=Vn(l,a),f=up(r.stateNode,l,f),jd(r,f),ut!==4&&(ut=2)),!1;var p=Error(s(520),{cause:l});if(p=Vn(p,a),Wl===null?Wl=[p]:Wl.push(p),ut!==4&&(ut=2),i===null)return!0;l=Vn(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,r=f&-f,a.lanes|=r,r=up(a.stateNode,l,r),jd(a,r),!1;case 1:if(i=a.type,p=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Ki===null||!Ki.has(p))))return a.flags|=65536,f&=-f,a.lanes|=f,f=Ev(f),Tv(f,r,a,l),jd(a,f),!1}a=a.return}while(a!==null);return!1}var bv=Error(s(461)),Pt=!1;function Bt(r,i,a,l){i.child=r===null?fv(i,null,a,l):fo(i,r.child,a,l)}function wv(r,i,a,l,f){a=a.render;var p=i.ref;if("ref"in l){var v={};for(var T in l)T!=="ref"&&(v[T]=l[T])}else v=l;return la(i),l=$d(r,i,a,v,p,f),T=Kd(),r!==null&&!Pt?(Qd(r,i,f),ai(r,i,f)):(Ue&&T&&Nd(i),i.flags|=1,Bt(r,i,l,f),i.child)}function Av(r,i,a,l,f){if(r===null){var p=a.type;return typeof p=="function"&&!Rd(p)&&p.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=p,Sv(r,i,p,l,f)):(r=Bc(a.type,null,l,i,i.mode,f),r.ref=i.ref,r.return=i,i.child=r)}if(p=r.child,!yp(r,f)){var v=p.memoizedProps;if(a=a.compare,a=a!==null?a:Rl,a(v,l)&&r.ref===i.ref)return ai(r,i,f)}return i.flags|=1,r=Jr(p,l),r.ref=i.ref,r.return=i,i.child=r}function Sv(r,i,a,l,f){if(r!==null){var p=r.memoizedProps;if(Rl(p,l)&&r.ref===i.ref)if(Pt=!1,i.pendingProps=l=p,yp(r,f))(r.flags&131072)!==0&&(Pt=!0);else return i.lanes=r.lanes,ai(r,i,f)}return cp(r,i,a,l,f)}function Rv(r,i,a){var l=i.pendingProps,f=l.children,p=r!==null?r.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=p!==null?p.baseLanes|a:a,r!==null){for(f=i.child=r.child,p=0;f!==null;)p=p|f.lanes|f.childLanes,f=f.sibling;i.childLanes=p&~l}else i.childLanes=0,i.child=null;return Iv(r,i,l,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},r!==null&&Gc(i,p!==null?p.cachePool:null),p!==null?S_(i,p):qd(),dv(i);else return i.lanes=i.childLanes=536870912,Iv(r,i,p!==null?p.baseLanes|a:a,a)}else p!==null?(Gc(i,p.cachePool),S_(i,p),ji(),i.memoizedState=null):(r!==null&&Gc(i,null),qd(),ji());return Bt(r,i,f,a),i.child}function Iv(r,i,a,l){var f=Ld();return f=f===null?null:{parent:Ct._currentValue,pool:f},i.memoizedState={baseLanes:a,cachePool:f},r!==null&&Gc(i,null),qd(),dv(i),r!==null&&Ol(r,i,l,!0),null}function lh(r,i){var a=i.ref;if(a===null)r!==null&&r.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(r===null||r.ref!==a)&&(i.flags|=4194816)}}function cp(r,i,a,l,f){return la(i),a=$d(r,i,a,l,void 0,f),l=Kd(),r!==null&&!Pt?(Qd(r,i,f),ai(r,i,f)):(Ue&&l&&Nd(i),i.flags|=1,Bt(r,i,a,f),i.child)}function Cv(r,i,a,l,f,p){return la(i),i.updateQueue=null,a=I_(i,l,a,f),R_(r),l=Kd(),r!==null&&!Pt?(Qd(r,i,p),ai(r,i,p)):(Ue&&l&&Nd(i),i.flags|=1,Bt(r,i,a,p),i.child)}function Nv(r,i,a,l,f){if(la(i),i.stateNode===null){var p=no,v=a.contextType;typeof v=="object"&&v!==null&&(p=Qt(v)),p=new a(l,p),i.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=lp,i.stateNode=p,p._reactInternals=i,p=i.stateNode,p.props=l,p.state=i.memoizedState,p.refs={},zd(i),v=a.contextType,p.context=typeof v=="object"&&v!==null?Qt(v):no,p.state=i.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(op(i,a,v,l),p.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(v=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),v!==p.state&&lp.enqueueReplaceState(p,p.state,null),Ul(i,l,p,f),Ll(),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(r===null){p=i.stateNode;var T=i.memoizedProps,I=ha(a,T);p.props=I;var B=p.context,Y=a.contextType;v=no,typeof Y=="object"&&Y!==null&&(v=Qt(Y));var J=a.getDerivedStateFromProps;Y=typeof J=="function"||typeof p.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,Y||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(T||B!==v)&&mv(i,p,l,v),Vi=!1;var q=i.memoizedState;p.state=q,Ul(i,l,p,f),Ll(),B=i.memoizedState,T||q!==B||Vi?(typeof J=="function"&&(op(i,a,J,l),B=i.memoizedState),(I=Vi||pv(i,a,I,l,q,B,v))?(Y||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(i.flags|=4194308)):(typeof p.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=B),p.props=l,p.state=B,p.context=v,l=I):(typeof p.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{p=i.stateNode,Bd(r,i),v=i.memoizedProps,Y=ha(a,v),p.props=Y,J=i.pendingProps,q=p.context,B=a.contextType,I=no,typeof B=="object"&&B!==null&&(I=Qt(B)),T=a.getDerivedStateFromProps,(B=typeof T=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(v!==J||q!==I)&&mv(i,p,l,I),Vi=!1,q=i.memoizedState,p.state=q,Ul(i,l,p,f),Ll();var H=i.memoizedState;v!==J||q!==H||Vi||r!==null&&r.dependencies!==null&&qc(r.dependencies)?(typeof T=="function"&&(op(i,a,T,l),H=i.memoizedState),(Y=Vi||pv(i,a,Y,l,q,H,I)||r!==null&&r.dependencies!==null&&qc(r.dependencies))?(B||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(l,H,I),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(l,H,I)),typeof p.componentDidUpdate=="function"&&(i.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof p.componentDidUpdate!="function"||v===r.memoizedProps&&q===r.memoizedState||(i.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||v===r.memoizedProps&&q===r.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=H),p.props=l,p.state=H,p.context=I,l=Y):(typeof p.componentDidUpdate!="function"||v===r.memoizedProps&&q===r.memoizedState||(i.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||v===r.memoizedProps&&q===r.memoizedState||(i.flags|=1024),l=!1)}return p=l,lh(r,i),l=(i.flags&128)!==0,p||l?(p=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:p.render(),i.flags|=1,r!==null&&l?(i.child=fo(i,r.child,null,f),i.child=fo(i,null,a,f)):Bt(r,i,a,f),i.memoizedState=p.state,r=i.child):r=ai(r,i,f),r}function Dv(r,i,a,l){return Nl(),i.flags|=256,Bt(r,i,a,l),i.child}var hp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function fp(r){return{baseLanes:r,cachePool:y_()}}function dp(r,i,a){return r=r!==null?r.childLanes&~a:0,i&&(r|=jn),r}function Ov(r,i,a){var l=i.pendingProps,f=!1,p=(i.flags&128)!==0,v;if((v=p)||(v=r!==null&&r.memoizedState===null?!1:(Nt.current&2)!==0),v&&(f=!0,i.flags&=-129),v=(i.flags&32)!==0,i.flags&=-33,r===null){if(Ue){if(f?Bi(i):ji(),Ue){var T=lt,I;if(I=T){e:{for(I=T,T=Tr;I.nodeType!==8;){if(!T){T=null;break e}if(I=tr(I.nextSibling),I===null){T=null;break e}}T=I}T!==null?(i.memoizedState={dehydrated:T,treeContext:ra!==null?{id:ei,overflow:ti}:null,retryLane:536870912,hydrationErrors:null},I=vn(18,null,null,0),I.stateNode=T,I.return=i,i.child=I,sn=i,lt=null,I=!0):I=!1}I||aa(i)}if(T=i.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Xp(T)?i.lanes=32:i.lanes=536870912,null;si(i)}return T=l.children,l=l.fallback,f?(ji(),f=i.mode,T=uh({mode:"hidden",children:T},f),l=na(l,f,a,null),T.return=i,l.return=i,T.sibling=l,i.child=T,f=i.child,f.memoizedState=fp(a),f.childLanes=dp(r,v,a),i.memoizedState=hp,l):(Bi(i),pp(i,T))}if(I=r.memoizedState,I!==null&&(T=I.dehydrated,T!==null)){if(p)i.flags&256?(Bi(i),i.flags&=-257,i=mp(r,i,a)):i.memoizedState!==null?(ji(),i.child=r.child,i.flags|=128,i=null):(ji(),f=l.fallback,T=i.mode,l=uh({mode:"visible",children:l.children},T),f=na(f,T,a,null),f.flags|=2,l.return=i,f.return=i,l.sibling=f,i.child=l,fo(i,r.child,null,a),l=i.child,l.memoizedState=fp(a),l.childLanes=dp(r,v,a),i.memoizedState=hp,i=f);else if(Bi(i),Xp(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var B=v.dgst;v=B,l=Error(s(419)),l.stack="",l.digest=v,Dl({value:l,source:null,stack:null}),i=mp(r,i,a)}else if(Pt||Ol(r,i,a,!1),v=(a&r.childLanes)!==0,Pt||v){if(v=Ze,v!==null&&(l=a&-a,l=(l&42)!==0?1:Ci(l),l=(l&(v.suspendedLanes|a))!==0?0:l,l!==0&&l!==I.retryLane))throw I.retryLane=l,to(r,l),An(v,r,l),bv;T.data==="$?"||xp(),i=mp(r,i,a)}else T.data==="$?"?(i.flags|=192,i.child=r.child,i=null):(r=I.treeContext,lt=tr(T.nextSibling),sn=i,Ue=!0,sa=null,Tr=!1,r!==null&&(Un[zn++]=ei,Un[zn++]=ti,Un[zn++]=ra,ei=r.id,ti=r.overflow,ra=i),i=pp(i,l.children),i.flags|=4096);return i}return f?(ji(),f=l.fallback,T=i.mode,I=r.child,B=I.sibling,l=Jr(I,{mode:"hidden",children:l.children}),l.subtreeFlags=I.subtreeFlags&65011712,B!==null?f=Jr(B,f):(f=na(f,T,a,null),f.flags|=2),f.return=i,l.return=i,l.sibling=f,i.child=l,l=f,f=i.child,T=r.child.memoizedState,T===null?T=fp(a):(I=T.cachePool,I!==null?(B=Ct._currentValue,I=I.parent!==B?{parent:B,pool:B}:I):I=y_(),T={baseLanes:T.baseLanes|a,cachePool:I}),f.memoizedState=T,f.childLanes=dp(r,v,a),i.memoizedState=hp,l):(Bi(i),a=r.child,r=a.sibling,a=Jr(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,r!==null&&(v=i.deletions,v===null?(i.deletions=[r],i.flags|=16):v.push(r)),i.child=a,i.memoizedState=null,a)}function pp(r,i){return i=uh({mode:"visible",children:i},r.mode),i.return=r,r.child=i}function uh(r,i){return r=vn(22,r,null,i),r.lanes=0,r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},r}function mp(r,i,a){return fo(i,r.child,null,a),r=pp(i,i.pendingProps.children),r.flags|=2,i.memoizedState=null,r}function Mv(r,i,a){r.lanes|=i;var l=r.alternate;l!==null&&(l.lanes|=i),xd(r.return,i,a)}function gp(r,i,a,l,f){var p=r.memoizedState;p===null?r.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:f}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=a,p.tailMode=f)}function xv(r,i,a){var l=i.pendingProps,f=l.revealOrder,p=l.tail;if(Bt(r,i,l.children,a),l=Nt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=i.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Mv(r,a,i);else if(r.tag===19)Mv(r,a,i);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}l&=1}switch(ve(Nt,l),f){case"forwards":for(a=i.child,f=null;a!==null;)r=a.alternate,r!==null&&sh(r)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),gp(i,!1,f,a,p);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(r=f.alternate,r!==null&&sh(r)===null){i.child=f;break}r=f.sibling,f.sibling=a,a=f,f=r}gp(i,!0,a,null,p);break;case"together":gp(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ai(r,i,a){if(r!==null&&(i.dependencies=r.dependencies),$i|=i.lanes,(a&i.childLanes)===0)if(r!==null){if(Ol(r,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(r!==null&&i.child!==r.child)throw Error(s(153));if(i.child!==null){for(r=i.child,a=Jr(r,r.pendingProps),i.child=a,a.return=i;r.sibling!==null;)r=r.sibling,a=a.sibling=Jr(r,r.pendingProps),a.return=i;a.sibling=null}return i.child}function yp(r,i){return(r.lanes&i)!==0?!0:(r=r.dependencies,!!(r!==null&&qc(r)))}function cI(r,i,a){switch(i.tag){case 3:xa(i,i.stateNode.containerInfo),ki(i,Ct,r.memoizedState.cache),Nl();break;case 27:case 5:Ii(i);break;case 4:xa(i,i.stateNode.containerInfo);break;case 10:ki(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Bi(i),i.flags|=128,null):(a&i.child.childLanes)!==0?Ov(r,i,a):(Bi(i),r=ai(r,i,a),r!==null?r.sibling:null);Bi(i);break;case 19:var f=(r.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(Ol(r,i,a,!1),l=(a&i.childLanes)!==0),f){if(l)return xv(r,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ve(Nt,Nt.current),l)break;return null;case 22:case 23:return i.lanes=0,Rv(r,i,a);case 24:ki(i,Ct,r.memoizedState.cache)}return ai(r,i,a)}function Pv(r,i,a){if(r!==null)if(r.memoizedProps!==i.pendingProps)Pt=!0;else{if(!yp(r,a)&&(i.flags&128)===0)return Pt=!1,cI(r,i,a);Pt=(r.flags&131072)!==0}else Pt=!1,Ue&&(i.flags&1048576)!==0&&c_(i,Fc,i.index);switch(i.lanes=0,i.tag){case 16:e:{r=i.pendingProps;var l=i.elementType,f=l._init;if(l=f(l._payload),i.type=l,typeof l=="function")Rd(l)?(r=ha(l,r),i.tag=1,i=Nv(null,i,l,r,a)):(i.tag=0,i=cp(null,i,l,r,a));else{if(l!=null){if(f=l.$$typeof,f===ie){i.tag=11,i=wv(null,i,l,r,a);break e}else if(f===x){i.tag=14,i=Av(null,i,l,r,a);break e}}throw i=ue(l)||l,Error(s(306,i,""))}}return i;case 0:return cp(r,i,i.type,i.pendingProps,a);case 1:return l=i.type,f=ha(l,i.pendingProps),Nv(r,i,l,f,a);case 3:e:{if(xa(i,i.stateNode.containerInfo),r===null)throw Error(s(387));l=i.pendingProps;var p=i.memoizedState;f=p.element,Bd(r,i),Ul(i,l,null,a);var v=i.memoizedState;if(l=v.cache,ki(i,Ct,l),l!==p.cache&&Pd(i,[Ct],a,!0),Ll(),l=v.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:v.cache},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){i=Dv(r,i,l,a);break e}else if(l!==f){f=Vn(Error(s(424)),i),Dl(f),i=Dv(r,i,l,a);break e}else{switch(r=i.stateNode.containerInfo,r.nodeType){case 9:r=r.body;break;default:r=r.nodeName==="HTML"?r.ownerDocument.body:r}for(lt=tr(r.firstChild),sn=i,Ue=!0,sa=null,Tr=!0,a=fv(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Nl(),l===f){i=ai(r,i,a);break e}Bt(r,i,l,a)}i=i.child}return i;case 26:return lh(r,i),r===null?(a=UE(i.type,null,i.pendingProps,null))?i.memoizedState=a:Ue||(a=i.type,r=i.pendingProps,l=wh(ur.current).createElement(a),l[St]=i,l[_t]=r,Ft(l,a,r),dt(l),i.stateNode=l):i.memoizedState=UE(i.type,r.memoizedProps,i.pendingProps,r.memoizedState),null;case 27:return Ii(i),r===null&&Ue&&(l=i.stateNode=kE(i.type,i.pendingProps,ur.current),sn=i,Tr=!0,f=lt,Xi(i.type)?(Wp=f,lt=tr(l.firstChild)):lt=f),Bt(r,i,i.pendingProps.children,a),lh(r,i),r===null&&(i.flags|=4194304),i.child;case 5:return r===null&&Ue&&((f=l=lt)&&(l=UI(l,i.type,i.pendingProps,Tr),l!==null?(i.stateNode=l,sn=i,lt=tr(l.firstChild),Tr=!1,f=!0):f=!1),f||aa(i)),Ii(i),f=i.type,p=i.pendingProps,v=r!==null?r.memoizedProps:null,l=p.children,Kp(f,p)?l=null:v!==null&&Kp(f,v)&&(i.flags|=32),i.memoizedState!==null&&(f=$d(r,i,nI,null,null,a),au._currentValue=f),lh(r,i),Bt(r,i,l,a),i.child;case 6:return r===null&&Ue&&((r=a=lt)&&(a=zI(a,i.pendingProps,Tr),a!==null?(i.stateNode=a,sn=i,lt=null,r=!0):r=!1),r||aa(i)),null;case 13:return Ov(r,i,a);case 4:return xa(i,i.stateNode.containerInfo),l=i.pendingProps,r===null?i.child=fo(i,null,l,a):Bt(r,i,l,a),i.child;case 11:return wv(r,i,i.type,i.pendingProps,a);case 7:return Bt(r,i,i.pendingProps,a),i.child;case 8:return Bt(r,i,i.pendingProps.children,a),i.child;case 12:return Bt(r,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,ki(i,i.type,l.value),Bt(r,i,l.children,a),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,la(i),f=Qt(f),l=l(f),i.flags|=1,Bt(r,i,l,a),i.child;case 14:return Av(r,i,i.type,i.pendingProps,a);case 15:return Sv(r,i,i.type,i.pendingProps,a);case 19:return xv(r,i,a);case 31:return l=i.pendingProps,a=i.mode,l={mode:l.mode,children:l.children},r===null?(a=uh(l,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=Jr(r.child,l),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return Rv(r,i,a);case 24:return la(i),l=Qt(Ct),r===null?(f=Ld(),f===null&&(f=Ze,p=kd(),f.pooledCache=p,p.refCount++,p!==null&&(f.pooledCacheLanes|=a),f=p),i.memoizedState={parent:l,cache:f},zd(i),ki(i,Ct,f)):((r.lanes&a)!==0&&(Bd(r,i),Ul(i,null,null,a),Ll()),f=r.memoizedState,p=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),ki(i,Ct,l)):(l=p.cache,ki(i,Ct,l),l!==f.cache&&Pd(i,[Ct],a,!0))),Bt(r,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function oi(r){r.flags|=4}function kv(r,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)r.flags&=-16777217;else if(r.flags|=16777216,!qE(i)){if(i=Bn.current,i!==null&&((xe&4194048)===xe?br!==null:(xe&62914560)!==xe&&(xe&536870912)===0||i!==br))throw kl=Ud,__;r.flags|=8192}}function ch(r,i){i!==null&&(r.flags|=4),r.flags&16384&&(i=r.tag!==22?ll():536870912,r.lanes|=i,yo|=i)}function Gl(r,i){if(!Ue)switch(r.tailMode){case"hidden":i=r.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||r.tail===null?r.tail=null:r.tail.sibling=null:l.sibling=null}}function it(r){var i=r.alternate!==null&&r.alternate.child===r.child,a=0,l=0;if(i)for(var f=r.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=r,f=f.sibling;else for(f=r.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=r,f=f.sibling;return r.subtreeFlags|=l,r.childLanes=a,i}function hI(r,i,a){var l=i.pendingProps;switch(Dd(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(i),null;case 1:return it(i),null;case 3:return a=i.stateNode,l=null,r!==null&&(l=r.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),ri(Ct),Ri(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(r===null||r.child===null)&&(Cl(i)?oi(i):r===null||r.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,d_())),it(i),null;case 26:return a=i.memoizedState,r===null?(oi(i),a!==null?(it(i),kv(i,a)):(it(i),i.flags&=-16777217)):a?a!==r.memoizedState?(oi(i),it(i),kv(i,a)):(it(i),i.flags&=-16777217):(r.memoizedProps!==l&&oi(i),it(i),i.flags&=-16777217),null;case 27:Br(i),a=ur.current;var f=i.type;if(r!==null&&i.stateNode!=null)r.memoizedProps!==l&&oi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return it(i),null}r=yt.current,Cl(i)?h_(i):(r=kE(f,l,a),i.stateNode=r,oi(i))}return it(i),null;case 5:if(Br(i),a=i.type,r!==null&&i.stateNode!=null)r.memoizedProps!==l&&oi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return it(i),null}if(r=yt.current,Cl(i))h_(i);else{switch(f=wh(ur.current),r){case 1:r=f.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:r=f.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":r=f.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":r=f.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":r=f.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof l.is=="string"?f.createElement("select",{is:l.is}):f.createElement("select"),l.multiple?r.multiple=!0:l.size&&(r.size=l.size);break;default:r=typeof l.is=="string"?f.createElement(a,{is:l.is}):f.createElement(a)}}r[St]=i,r[_t]=l;e:for(f=i.child;f!==null;){if(f.tag===5||f.tag===6)r.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===i)break e;for(;f.sibling===null;){if(f.return===null||f.return===i)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}i.stateNode=r;e:switch(Ft(r,a,l),a){case"button":case"input":case"select":case"textarea":r=!!l.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&oi(i)}}return it(i),i.flags&=-16777217,null;case 6:if(r&&i.stateNode!=null)r.memoizedProps!==l&&oi(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(r=ur.current,Cl(i)){if(r=i.stateNode,a=i.memoizedProps,l=null,f=sn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}r[St]=i,r=!!(r.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||CE(r.nodeValue,a)),r||aa(i)}else r=wh(r).createTextNode(l),r[St]=i,i.stateNode=r}return it(i),null;case 13:if(l=i.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(f=Cl(i),l!==null&&l.dehydrated!==null){if(r===null){if(!f)throw Error(s(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[St]=i}else Nl(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;it(i),f=!1}else f=d_(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(si(i),i):(si(i),null)}if(si(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=l!==null,r=r!==null&&r.memoizedState!==null,a){l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool);var p=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(p=l.memoizedState.cachePool.pool),p!==f&&(l.flags|=2048)}return a!==r&&a&&(i.child.flags|=8192),ch(i,i.updateQueue),it(i),null;case 4:return Ri(),r===null&&Fp(i.stateNode.containerInfo),it(i),null;case 10:return ri(i.type),it(i),null;case 19:if(ke(Nt),f=i.memoizedState,f===null)return it(i),null;if(l=(i.flags&128)!==0,p=f.rendering,p===null)if(l)Gl(f,!1);else{if(ut!==0||r!==null&&(r.flags&128)!==0)for(r=i.child;r!==null;){if(p=sh(r),p!==null){for(i.flags|=128,Gl(f,!1),r=p.updateQueue,i.updateQueue=r,ch(i,r),i.subtreeFlags=0,r=a,a=i.child;a!==null;)u_(a,r),a=a.sibling;return ve(Nt,Nt.current&1|2),i.child}r=r.sibling}f.tail!==null&&Dn()>dh&&(i.flags|=128,l=!0,Gl(f,!1),i.lanes=4194304)}else{if(!l)if(r=sh(p),r!==null){if(i.flags|=128,l=!0,r=r.updateQueue,i.updateQueue=r,ch(i,r),Gl(f,!0),f.tail===null&&f.tailMode==="hidden"&&!p.alternate&&!Ue)return it(i),null}else 2*Dn()-f.renderingStartTime>dh&&a!==536870912&&(i.flags|=128,l=!0,Gl(f,!1),i.lanes=4194304);f.isBackwards?(p.sibling=i.child,i.child=p):(r=f.last,r!==null?r.sibling=p:i.child=p,f.last=p)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=Dn(),i.sibling=null,r=Nt.current,ve(Nt,l?r&1|2:r&1),i):(it(i),null);case 22:case 23:return si(i),Hd(),l=i.memoizedState!==null,r!==null?r.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(it(i),i.subtreeFlags&6&&(i.flags|=8192)):it(i),a=i.updateQueue,a!==null&&ch(i,a.retryQueue),a=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),r!==null&&ke(ua),null;case 24:return a=null,r!==null&&(a=r.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),ri(Ct),it(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function fI(r,i){switch(Dd(i),i.tag){case 1:return r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 3:return ri(Ct),Ri(),r=i.flags,(r&65536)!==0&&(r&128)===0?(i.flags=r&-65537|128,i):null;case 26:case 27:case 5:return Br(i),null;case 13:if(si(i),r=i.memoizedState,r!==null&&r.dehydrated!==null){if(i.alternate===null)throw Error(s(340));Nl()}return r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 19:return ke(Nt),null;case 4:return Ri(),null;case 10:return ri(i.type),null;case 22:case 23:return si(i),Hd(),r!==null&&ke(ua),r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 24:return ri(Ct),null;case 25:return null;default:return null}}function Vv(r,i){switch(Dd(i),i.tag){case 3:ri(Ct),Ri();break;case 26:case 27:case 5:Br(i);break;case 4:Ri();break;case 13:si(i);break;case 19:ke(Nt);break;case 10:ri(i.type);break;case 22:case 23:si(i),Hd(),r!==null&&ke(ua);break;case 24:ri(Ct)}}function $l(r,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var f=l.next;a=f;do{if((a.tag&r)===r){l=void 0;var p=a.create,v=a.inst;l=p(),v.destroy=l}a=a.next}while(a!==f)}}catch(T){Xe(i,i.return,T)}}function Fi(r,i,a){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var p=f.next;l=p;do{if((l.tag&r)===r){var v=l.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,f=i;var I=a,B=T;try{B()}catch(Y){Xe(f,I,Y)}}}l=l.next}while(l!==p)}}catch(Y){Xe(i,i.return,Y)}}function Lv(r){var i=r.updateQueue;if(i!==null){var a=r.stateNode;try{A_(i,a)}catch(l){Xe(r,r.return,l)}}}function Uv(r,i,a){a.props=ha(r.type,r.memoizedProps),a.state=r.memoizedState;try{a.componentWillUnmount()}catch(l){Xe(r,i,l)}}function Kl(r,i){try{var a=r.ref;if(a!==null){switch(r.tag){case 26:case 27:case 5:var l=r.stateNode;break;case 30:l=r.stateNode;break;default:l=r.stateNode}typeof a=="function"?r.refCleanup=a(l):a.current=l}}catch(f){Xe(r,i,f)}}function wr(r,i){var a=r.ref,l=r.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(f){Xe(r,i,f)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(f){Xe(r,i,f)}else a.current=null}function zv(r){var i=r.type,a=r.memoizedProps,l=r.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(f){Xe(r,r.return,f)}}function _p(r,i,a){try{var l=r.stateNode;xI(l,r.type,a,i),l[_t]=i}catch(f){Xe(r,r.return,f)}}function Bv(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27&&Xi(r.type)||r.tag===4}function vp(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Bv(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.tag===27&&Xi(r.type)||r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Ep(r,i,a){var l=r.tag;if(l===5||l===6)r=r.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(r,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(r),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=bh));else if(l!==4&&(l===27&&Xi(r.type)&&(a=r.stateNode,i=null),r=r.child,r!==null))for(Ep(r,i,a),r=r.sibling;r!==null;)Ep(r,i,a),r=r.sibling}function hh(r,i,a){var l=r.tag;if(l===5||l===6)r=r.stateNode,i?a.insertBefore(r,i):a.appendChild(r);else if(l!==4&&(l===27&&Xi(r.type)&&(a=r.stateNode),r=r.child,r!==null))for(hh(r,i,a),r=r.sibling;r!==null;)hh(r,i,a),r=r.sibling}function jv(r){var i=r.stateNode,a=r.memoizedProps;try{for(var l=r.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Ft(i,l,a),i[St]=r,i[_t]=a}catch(p){Xe(r,r.return,p)}}var li=!1,mt=!1,Tp=!1,Fv=typeof WeakSet=="function"?WeakSet:Set,kt=null;function dI(r,i){if(r=r.containerInfo,Gp=Nh,r=Jy(r),vd(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var f=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var v=0,T=-1,I=-1,B=0,Y=0,J=r,q=null;t:for(;;){for(var H;J!==a||f!==0&&J.nodeType!==3||(T=v+f),J!==p||l!==0&&J.nodeType!==3||(I=v+l),J.nodeType===3&&(v+=J.nodeValue.length),(H=J.firstChild)!==null;)q=J,J=H;for(;;){if(J===r)break t;if(q===a&&++B===f&&(T=v),q===p&&++Y===l&&(I=v),(H=J.nextSibling)!==null)break;J=q,q=J.parentNode}J=H}a=T===-1||I===-1?null:{start:T,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for($p={focusedElem:r,selectionRange:a},Nh=!1,kt=i;kt!==null;)if(i=kt,r=i.child,(i.subtreeFlags&1024)!==0&&r!==null)r.return=i,kt=r;else for(;kt!==null;){switch(i=kt,p=i.alternate,r=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((r&1024)!==0&&p!==null){r=void 0,a=i,f=p.memoizedProps,p=p.memoizedState,l=a.stateNode;try{var _e=ha(a.type,f,a.elementType===a.type);r=l.getSnapshotBeforeUpdate(_e,p),l.__reactInternalSnapshotBeforeUpdate=r}catch(pe){Xe(a,a.return,pe)}}break;case 3:if((r&1024)!==0){if(r=i.stateNode.containerInfo,a=r.nodeType,a===9)Yp(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Yp(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((r&1024)!==0)throw Error(s(163))}if(r=i.sibling,r!==null){r.return=i.return,kt=r;break}kt=i.return}}function qv(r,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:qi(r,a),l&4&&$l(5,a);break;case 1:if(qi(r,a),l&4)if(r=a.stateNode,i===null)try{r.componentDidMount()}catch(v){Xe(a,a.return,v)}else{var f=ha(a.type,i.memoizedProps);i=i.memoizedState;try{r.componentDidUpdate(f,i,r.__reactInternalSnapshotBeforeUpdate)}catch(v){Xe(a,a.return,v)}}l&64&&Lv(a),l&512&&Kl(a,a.return);break;case 3:if(qi(r,a),l&64&&(r=a.updateQueue,r!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{A_(r,i)}catch(v){Xe(a,a.return,v)}}break;case 27:i===null&&l&4&&jv(a);case 26:case 5:qi(r,a),i===null&&l&4&&zv(a),l&512&&Kl(a,a.return);break;case 12:qi(r,a);break;case 13:qi(r,a),l&4&&$v(r,a),l&64&&(r=a.memoizedState,r!==null&&(r=r.dehydrated,r!==null&&(a=bI.bind(null,a),BI(r,a))));break;case 22:if(l=a.memoizedState!==null||li,!l){i=i!==null&&i.memoizedState!==null||mt,f=li;var p=mt;li=l,(mt=i)&&!p?Hi(r,a,(a.subtreeFlags&8772)!==0):qi(r,a),li=f,mt=p}break;case 30:break;default:qi(r,a)}}function Hv(r){var i=r.alternate;i!==null&&(r.alternate=null,Hv(i)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(i=r.stateNode,i!==null&&Oi(i)),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}var rt=null,hn=!1;function ui(r,i,a){for(a=a.child;a!==null;)Gv(r,i,a),a=a.sibling}function Gv(r,i,a){if(je&&typeof je.onCommitFiberUnmount=="function")try{je.onCommitFiberUnmount(ot,a)}catch{}switch(a.tag){case 26:mt||wr(a,i),ui(r,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:mt||wr(a,i);var l=rt,f=hn;Xi(a.type)&&(rt=a.stateNode,hn=!1),ui(r,i,a),nu(a.stateNode),rt=l,hn=f;break;case 5:mt||wr(a,i);case 6:if(l=rt,f=hn,rt=null,ui(r,i,a),rt=l,hn=f,rt!==null)if(hn)try{(rt.nodeType===9?rt.body:rt.nodeName==="HTML"?rt.ownerDocument.body:rt).removeChild(a.stateNode)}catch(p){Xe(a,i,p)}else try{rt.removeChild(a.stateNode)}catch(p){Xe(a,i,p)}break;case 18:rt!==null&&(hn?(r=rt,xE(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,a.stateNode),cu(r)):xE(rt,a.stateNode));break;case 4:l=rt,f=hn,rt=a.stateNode.containerInfo,hn=!0,ui(r,i,a),rt=l,hn=f;break;case 0:case 11:case 14:case 15:mt||Fi(2,a,i),mt||Fi(4,a,i),ui(r,i,a);break;case 1:mt||(wr(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Uv(a,i,l)),ui(r,i,a);break;case 21:ui(r,i,a);break;case 22:mt=(l=mt)||a.memoizedState!==null,ui(r,i,a),mt=l;break;default:ui(r,i,a)}}function $v(r,i){if(i.memoizedState===null&&(r=i.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{cu(r)}catch(a){Xe(i,i.return,a)}}function pI(r){switch(r.tag){case 13:case 19:var i=r.stateNode;return i===null&&(i=r.stateNode=new Fv),i;case 22:return r=r.stateNode,i=r._retryCache,i===null&&(i=r._retryCache=new Fv),i;default:throw Error(s(435,r.tag))}}function bp(r,i){var a=pI(r);i.forEach(function(l){var f=wI.bind(null,r,l);a.has(l)||(a.add(l),l.then(f,f))})}function En(r,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var f=a[l],p=r,v=i,T=v;e:for(;T!==null;){switch(T.tag){case 27:if(Xi(T.type)){rt=T.stateNode,hn=!1;break e}break;case 5:rt=T.stateNode,hn=!1;break e;case 3:case 4:rt=T.stateNode.containerInfo,hn=!0;break e}T=T.return}if(rt===null)throw Error(s(160));Gv(p,v,f),rt=null,hn=!1,p=f.alternate,p!==null&&(p.return=null),f.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Kv(i,r),i=i.sibling}var er=null;function Kv(r,i){var a=r.alternate,l=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:En(i,r),Tn(r),l&4&&(Fi(3,r,r.return),$l(3,r),Fi(5,r,r.return));break;case 1:En(i,r),Tn(r),l&512&&(mt||a===null||wr(a,a.return)),l&64&&li&&(r=r.updateQueue,r!==null&&(l=r.callbacks,l!==null&&(a=r.shared.hiddenCallbacks,r.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var f=er;if(En(i,r),Tn(r),l&512&&(mt||a===null||wr(a,a.return)),l&4){var p=a!==null?a.memoizedState:null;if(l=r.memoizedState,a===null)if(l===null)if(r.stateNode===null){e:{l=r.type,a=r.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":p=f.getElementsByTagName("title")[0],(!p||p[Bs]||p[St]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=f.createElement(l),f.head.insertBefore(p,f.querySelector("head > title"))),Ft(p,l,a),p[St]=r,dt(p),l=p;break e;case"link":var v=jE("link","href",f).get(l+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(p=v[T],p.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&p.getAttribute("rel")===(a.rel==null?null:a.rel)&&p.getAttribute("title")===(a.title==null?null:a.title)&&p.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break t}}p=f.createElement(l),Ft(p,l,a),f.head.appendChild(p);break;case"meta":if(v=jE("meta","content",f).get(l+(a.content||""))){for(T=0;T<v.length;T++)if(p=v[T],p.getAttribute("content")===(a.content==null?null:""+a.content)&&p.getAttribute("name")===(a.name==null?null:a.name)&&p.getAttribute("property")===(a.property==null?null:a.property)&&p.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&p.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break t}}p=f.createElement(l),Ft(p,l,a),f.head.appendChild(p);break;default:throw Error(s(468,l))}p[St]=r,dt(p),l=p}r.stateNode=l}else FE(f,r.type,r.stateNode);else r.stateNode=BE(f,l,r.memoizedProps);else p!==l?(p===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):p.count--,l===null?FE(f,r.type,r.stateNode):BE(f,l,r.memoizedProps)):l===null&&r.stateNode!==null&&_p(r,r.memoizedProps,a.memoizedProps)}break;case 27:En(i,r),Tn(r),l&512&&(mt||a===null||wr(a,a.return)),a!==null&&l&4&&_p(r,r.memoizedProps,a.memoizedProps);break;case 5:if(En(i,r),Tn(r),l&512&&(mt||a===null||wr(a,a.return)),r.flags&32){f=r.stateNode;try{Mn(f,"")}catch(H){Xe(r,r.return,H)}}l&4&&r.stateNode!=null&&(f=r.memoizedProps,_p(r,f,a!==null?a.memoizedProps:f)),l&1024&&(Tp=!0);break;case 6:if(En(i,r),Tn(r),l&4){if(r.stateNode===null)throw Error(s(162));l=r.memoizedProps,a=r.stateNode;try{a.nodeValue=l}catch(H){Xe(r,r.return,H)}}break;case 3:if(Rh=null,f=er,er=Ah(i.containerInfo),En(i,r),er=f,Tn(r),l&4&&a!==null&&a.memoizedState.isDehydrated)try{cu(i.containerInfo)}catch(H){Xe(r,r.return,H)}Tp&&(Tp=!1,Qv(r));break;case 4:l=er,er=Ah(r.stateNode.containerInfo),En(i,r),Tn(r),er=l;break;case 12:En(i,r),Tn(r);break;case 13:En(i,r),Tn(r),r.child.flags&8192&&r.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Cp=Dn()),l&4&&(l=r.updateQueue,l!==null&&(r.updateQueue=null,bp(r,l)));break;case 22:f=r.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,B=li,Y=mt;if(li=B||f,mt=Y||I,En(i,r),mt=Y,li=B,Tn(r),l&8192)e:for(i=r.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(a===null||I||li||mt||fa(r)),a=null,i=r;;){if(i.tag===5||i.tag===26){if(a===null){I=a=i;try{if(p=I.stateNode,f)v=p.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=I.stateNode;var J=I.memoizedProps.style,q=J!=null&&J.hasOwnProperty("display")?J.display:null;T.style.display=q==null||typeof q=="boolean"?"":(""+q).trim()}}catch(H){Xe(I,I.return,H)}}}else if(i.tag===6){if(a===null){I=i;try{I.stateNode.nodeValue=f?"":I.memoizedProps}catch(H){Xe(I,I.return,H)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===r)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break e;for(;i.sibling===null;){if(i.return===null||i.return===r)break e;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=r.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,bp(r,a))));break;case 19:En(i,r),Tn(r),l&4&&(l=r.updateQueue,l!==null&&(r.updateQueue=null,bp(r,l)));break;case 30:break;case 21:break;default:En(i,r),Tn(r)}}function Tn(r){var i=r.flags;if(i&2){try{for(var a,l=r.return;l!==null;){if(Bv(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var f=a.stateNode,p=vp(r);hh(r,p,f);break;case 5:var v=a.stateNode;a.flags&32&&(Mn(v,""),a.flags&=-33);var T=vp(r);hh(r,T,v);break;case 3:case 4:var I=a.stateNode.containerInfo,B=vp(r);Ep(r,B,I);break;default:throw Error(s(161))}}catch(Y){Xe(r,r.return,Y)}r.flags&=-3}i&4096&&(r.flags&=-4097)}function Qv(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var i=r;Qv(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),r=r.sibling}}function qi(r,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)qv(r,i.alternate,i),i=i.sibling}function fa(r){for(r=r.child;r!==null;){var i=r;switch(i.tag){case 0:case 11:case 14:case 15:Fi(4,i,i.return),fa(i);break;case 1:wr(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&Uv(i,i.return,a),fa(i);break;case 27:nu(i.stateNode);case 26:case 5:wr(i,i.return),fa(i);break;case 22:i.memoizedState===null&&fa(i);break;case 30:fa(i);break;default:fa(i)}r=r.sibling}}function Hi(r,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=r,p=i,v=p.flags;switch(p.tag){case 0:case 11:case 15:Hi(f,p,a),$l(4,p);break;case 1:if(Hi(f,p,a),l=p,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(B){Xe(l,l.return,B)}if(l=p,f=l.updateQueue,f!==null){var T=l.stateNode;try{var I=f.shared.hiddenCallbacks;if(I!==null)for(f.shared.hiddenCallbacks=null,f=0;f<I.length;f++)w_(I[f],T)}catch(B){Xe(l,l.return,B)}}a&&v&64&&Lv(p),Kl(p,p.return);break;case 27:jv(p);case 26:case 5:Hi(f,p,a),a&&l===null&&v&4&&zv(p),Kl(p,p.return);break;case 12:Hi(f,p,a);break;case 13:Hi(f,p,a),a&&v&4&&$v(f,p);break;case 22:p.memoizedState===null&&Hi(f,p,a),Kl(p,p.return);break;case 30:break;default:Hi(f,p,a)}i=i.sibling}}function wp(r,i){var a=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),r=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==a&&(r!=null&&r.refCount++,a!=null&&Ml(a))}function Ap(r,i){r=null,i.alternate!==null&&(r=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==r&&(i.refCount++,r!=null&&Ml(r))}function Ar(r,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Yv(r,i,a,l),i=i.sibling}function Yv(r,i,a,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Ar(r,i,a,l),f&2048&&$l(9,i);break;case 1:Ar(r,i,a,l);break;case 3:Ar(r,i,a,l),f&2048&&(r=null,i.alternate!==null&&(r=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==r&&(i.refCount++,r!=null&&Ml(r)));break;case 12:if(f&2048){Ar(r,i,a,l),r=i.stateNode;try{var p=i.memoizedProps,v=p.id,T=p.onPostCommit;typeof T=="function"&&T(v,i.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(I){Xe(i,i.return,I)}}else Ar(r,i,a,l);break;case 13:Ar(r,i,a,l);break;case 23:break;case 22:p=i.stateNode,v=i.alternate,i.memoizedState!==null?p._visibility&2?Ar(r,i,a,l):Ql(r,i):p._visibility&2?Ar(r,i,a,l):(p._visibility|=2,po(r,i,a,l,(i.subtreeFlags&10256)!==0)),f&2048&&wp(v,i);break;case 24:Ar(r,i,a,l),f&2048&&Ap(i.alternate,i);break;default:Ar(r,i,a,l)}}function po(r,i,a,l,f){for(f=f&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var p=r,v=i,T=a,I=l,B=v.flags;switch(v.tag){case 0:case 11:case 15:po(p,v,T,I,f),$l(8,v);break;case 23:break;case 22:var Y=v.stateNode;v.memoizedState!==null?Y._visibility&2?po(p,v,T,I,f):Ql(p,v):(Y._visibility|=2,po(p,v,T,I,f)),f&&B&2048&&wp(v.alternate,v);break;case 24:po(p,v,T,I,f),f&&B&2048&&Ap(v.alternate,v);break;default:po(p,v,T,I,f)}i=i.sibling}}function Ql(r,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=r,l=i,f=l.flags;switch(l.tag){case 22:Ql(a,l),f&2048&&wp(l.alternate,l);break;case 24:Ql(a,l),f&2048&&Ap(l.alternate,l);break;default:Ql(a,l)}i=i.sibling}}var Yl=8192;function mo(r){if(r.subtreeFlags&Yl)for(r=r.child;r!==null;)Xv(r),r=r.sibling}function Xv(r){switch(r.tag){case 26:mo(r),r.flags&Yl&&r.memoizedState!==null&&JI(er,r.memoizedState,r.memoizedProps);break;case 5:mo(r);break;case 3:case 4:var i=er;er=Ah(r.stateNode.containerInfo),mo(r),er=i;break;case 22:r.memoizedState===null&&(i=r.alternate,i!==null&&i.memoizedState!==null?(i=Yl,Yl=16777216,mo(r),Yl=i):mo(r));break;default:mo(r)}}function Wv(r){var i=r.alternate;if(i!==null&&(r=i.child,r!==null)){i.child=null;do i=r.sibling,r.sibling=null,r=i;while(r!==null)}}function Xl(r){var i=r.deletions;if((r.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];kt=l,Jv(l,r)}Wv(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)Zv(r),r=r.sibling}function Zv(r){switch(r.tag){case 0:case 11:case 15:Xl(r),r.flags&2048&&Fi(9,r,r.return);break;case 3:Xl(r);break;case 12:Xl(r);break;case 22:var i=r.stateNode;r.memoizedState!==null&&i._visibility&2&&(r.return===null||r.return.tag!==13)?(i._visibility&=-3,fh(r)):Xl(r);break;default:Xl(r)}}function fh(r){var i=r.deletions;if((r.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];kt=l,Jv(l,r)}Wv(r)}for(r=r.child;r!==null;){switch(i=r,i.tag){case 0:case 11:case 15:Fi(8,i,i.return),fh(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,fh(i));break;default:fh(i)}r=r.sibling}}function Jv(r,i){for(;kt!==null;){var a=kt;switch(a.tag){case 0:case 11:case 15:Fi(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ml(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,kt=l;else e:for(a=r;kt!==null;){l=kt;var f=l.sibling,p=l.return;if(Hv(l),l===a){kt=null;break e}if(f!==null){f.return=p,kt=f;break e}kt=p}}}var mI={getCacheForType:function(r){var i=Qt(Ct),a=i.data.get(r);return a===void 0&&(a=r(),i.data.set(r,a)),a}},gI=typeof WeakMap=="function"?WeakMap:Map,Fe=0,Ze=null,Se=null,xe=0,qe=0,bn=null,Gi=!1,go=!1,Sp=!1,ci=0,ut=0,$i=0,da=0,Rp=0,jn=0,yo=0,Wl=null,fn=null,Ip=!1,Cp=0,dh=1/0,ph=null,Ki=null,jt=0,Qi=null,_o=null,vo=0,Np=0,Dp=null,eE=null,Zl=0,Op=null;function wn(){if((Fe&2)!==0&&xe!==0)return xe&-xe;if(Q.T!==null){var r=so;return r!==0?r:Up()}return Ni()}function tE(){jn===0&&(jn=(xe&536870912)===0||Ue?ol():536870912);var r=Bn.current;return r!==null&&(r.flags|=32),jn}function An(r,i,a){(r===Ze&&(qe===2||qe===9)||r.cancelPendingCommit!==null)&&(Eo(r,0),Yi(r,xe,jn,!1)),Fr(r,a),((Fe&2)===0||r!==Ze)&&(r===Ze&&((Fe&2)===0&&(da|=a),ut===4&&Yi(r,xe,jn,!1)),Sr(r))}function nE(r,i,a){if((Fe&6)!==0)throw Error(s(327));var l=!a&&(i&124)===0&&(i&r.expiredLanes)===0||zs(r,i),f=l?vI(r,i):Pp(r,i,!0),p=l;do{if(f===0){go&&!l&&Yi(r,i,0,!1);break}else{if(a=r.current.alternate,p&&!yI(a)){f=Pp(r,i,!1),p=!1;continue}if(f===2){if(p=i,r.errorRecoveryDisabledLanes&p)var v=0;else v=r.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){i=v;e:{var T=r;f=Wl;var I=T.current.memoizedState.isDehydrated;if(I&&(Eo(T,v).flags|=256),v=Pp(T,v,!1),v!==2){if(Sp&&!I){T.errorRecoveryDisabledLanes|=p,da|=p,f=4;break e}p=fn,fn=f,p!==null&&(fn===null?fn=p:fn.push.apply(fn,p))}f=v}if(p=!1,f!==2)continue}}if(f===1){Eo(r,0),Yi(r,i,0,!0);break}e:{switch(l=r,p=f,p){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:Yi(l,i,jn,!Gi);break e;case 2:fn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(f=Cp+300-Dn(),10<f)){if(Yi(l,i,jn,!Gi),Va(l,0,!0)!==0)break e;l.timeoutHandle=OE(rE.bind(null,l,a,fn,ph,Ip,i,jn,da,yo,Gi,p,2,-0,0),f);break e}rE(l,a,fn,ph,Ip,i,jn,da,yo,Gi,p,0,-0,0)}}break}while(!0);Sr(r)}function rE(r,i,a,l,f,p,v,T,I,B,Y,J,q,H){if(r.timeoutHandle=-1,J=i.subtreeFlags,(J&8192||(J&16785408)===16785408)&&(su={stylesheets:null,count:0,unsuspend:ZI},Xv(i),J=e1(),J!==null)){r.cancelPendingCommit=J(cE.bind(null,r,i,p,a,l,f,v,T,I,Y,1,q,H)),Yi(r,p,v,!B);return}cE(r,i,p,a,l,f,v,T,I)}function yI(r){for(var i=r;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var f=a[l],p=f.getSnapshot;f=f.value;try{if(!_n(p(),f))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Yi(r,i,a,l){i&=~Rp,i&=~da,r.suspendedLanes|=i,r.pingedLanes&=~i,l&&(r.warmLanes|=i),l=r.expirationTimes;for(var f=i;0<f;){var p=31-Kt(f),v=1<<p;l[p]=-1,f&=~v}a!==0&&cr(r,a,i)}function mh(){return(Fe&6)===0?(Jl(0),!1):!0}function Mp(){if(Se!==null){if(qe===0)var r=Se.return;else r=Se,ni=oa=null,Yd(r),ho=null,ql=0,r=Se;for(;r!==null;)Vv(r.alternate,r),r=r.return;Se=null}}function Eo(r,i){var a=r.timeoutHandle;a!==-1&&(r.timeoutHandle=-1,kI(a)),a=r.cancelPendingCommit,a!==null&&(r.cancelPendingCommit=null,a()),Mp(),Ze=r,Se=a=Jr(r.current,null),xe=i,qe=0,bn=null,Gi=!1,go=zs(r,i),Sp=!1,yo=jn=Rp=da=$i=ut=0,fn=Wl=null,Ip=!1,(i&8)!==0&&(i|=i&32);var l=r.entangledLanes;if(l!==0)for(r=r.entanglements,l&=i;0<l;){var f=31-Kt(l),p=1<<f;i|=r[f],l&=~p}return ci=i,Lc(),a}function iE(r,i){we=null,Q.H=nh,i===Pl||i===$c?(i=T_(),qe=3):i===__?(i=T_(),qe=4):qe=i===bv?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,bn=i,Se===null&&(ut=1,oh(r,Vn(i,r.current)))}function sE(){var r=Q.H;return Q.H=nh,r===null?nh:r}function aE(){var r=Q.A;return Q.A=mI,r}function xp(){ut=4,Gi||(xe&4194048)!==xe&&Bn.current!==null||(go=!0),($i&134217727)===0&&(da&134217727)===0||Ze===null||Yi(Ze,xe,jn,!1)}function Pp(r,i,a){var l=Fe;Fe|=2;var f=sE(),p=aE();(Ze!==r||xe!==i)&&(ph=null,Eo(r,i)),i=!1;var v=ut;e:do try{if(qe!==0&&Se!==null){var T=Se,I=bn;switch(qe){case 8:Mp(),v=6;break e;case 3:case 2:case 9:case 6:Bn.current===null&&(i=!0);var B=qe;if(qe=0,bn=null,To(r,T,I,B),a&&go){v=0;break e}break;default:B=qe,qe=0,bn=null,To(r,T,I,B)}}_I(),v=ut;break}catch(Y){iE(r,Y)}while(!0);return i&&r.shellSuspendCounter++,ni=oa=null,Fe=l,Q.H=f,Q.A=p,Se===null&&(Ze=null,xe=0,Lc()),v}function _I(){for(;Se!==null;)oE(Se)}function vI(r,i){var a=Fe;Fe|=2;var l=sE(),f=aE();Ze!==r||xe!==i?(ph=null,dh=Dn()+500,Eo(r,i)):go=zs(r,i);e:do try{if(qe!==0&&Se!==null){i=Se;var p=bn;t:switch(qe){case 1:qe=0,bn=null,To(r,i,p,1);break;case 2:case 9:if(v_(p)){qe=0,bn=null,lE(i);break}i=function(){qe!==2&&qe!==9||Ze!==r||(qe=7),Sr(r)},p.then(i,i);break e;case 3:qe=7;break e;case 4:qe=5;break e;case 7:v_(p)?(qe=0,bn=null,lE(i)):(qe=0,bn=null,To(r,i,p,7));break;case 5:var v=null;switch(Se.tag){case 26:v=Se.memoizedState;case 5:case 27:var T=Se;if(!v||qE(v)){qe=0,bn=null;var I=T.sibling;if(I!==null)Se=I;else{var B=T.return;B!==null?(Se=B,gh(B)):Se=null}break t}}qe=0,bn=null,To(r,i,p,5);break;case 6:qe=0,bn=null,To(r,i,p,6);break;case 8:Mp(),ut=6;break e;default:throw Error(s(462))}}EI();break}catch(Y){iE(r,Y)}while(!0);return ni=oa=null,Q.H=l,Q.A=f,Fe=a,Se!==null?0:(Ze=null,xe=0,Lc(),ut)}function EI(){for(;Se!==null&&!rl();)oE(Se)}function oE(r){var i=Pv(r.alternate,r,ci);r.memoizedProps=r.pendingProps,i===null?gh(r):Se=i}function lE(r){var i=r,a=i.alternate;switch(i.tag){case 15:case 0:i=Cv(a,i,i.pendingProps,i.type,void 0,xe);break;case 11:i=Cv(a,i,i.pendingProps,i.type.render,i.ref,xe);break;case 5:Yd(i);default:Vv(a,i),i=Se=u_(i,ci),i=Pv(a,i,ci)}r.memoizedProps=r.pendingProps,i===null?gh(r):Se=i}function To(r,i,a,l){ni=oa=null,Yd(i),ho=null,ql=0;var f=i.return;try{if(uI(r,f,i,a,xe)){ut=1,oh(r,Vn(a,r.current)),Se=null;return}}catch(p){if(f!==null)throw Se=f,p;ut=1,oh(r,Vn(a,r.current)),Se=null;return}i.flags&32768?(Ue||l===1?r=!0:go||(xe&536870912)!==0?r=!1:(Gi=r=!0,(l===2||l===9||l===3||l===6)&&(l=Bn.current,l!==null&&l.tag===13&&(l.flags|=16384))),uE(i,r)):gh(i)}function gh(r){var i=r;do{if((i.flags&32768)!==0){uE(i,Gi);return}r=i.return;var a=hI(i.alternate,i,ci);if(a!==null){Se=a;return}if(i=i.sibling,i!==null){Se=i;return}Se=i=r}while(i!==null);ut===0&&(ut=5)}function uE(r,i){do{var a=fI(r.alternate,r);if(a!==null){a.flags&=32767,Se=a;return}if(a=r.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(r=r.sibling,r!==null)){Se=r;return}Se=r=a}while(r!==null);ut=6,Se=null}function cE(r,i,a,l,f,p,v,T,I){r.cancelPendingCommit=null;do yh();while(jt!==0);if((Fe&6)!==0)throw Error(s(327));if(i!==null){if(i===r.current)throw Error(s(177));if(p=i.lanes|i.childLanes,p|=Ad,ul(r,a,p,v,T,I),r===Ze&&(Se=Ze=null,xe=0),_o=i,Qi=r,vo=a,Np=p,Dp=f,eE=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(r.callbackNode=null,r.callbackPriority=0,AI(ks,function(){return mE(),null})):(r.callbackNode=null,r.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=Q.T,Q.T=null,f=re.p,re.p=2,v=Fe,Fe|=4;try{dI(r,i,a)}finally{Fe=v,re.p=f,Q.T=l}}jt=1,hE(),fE(),dE()}}function hE(){if(jt===1){jt=0;var r=Qi,i=_o,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=Q.T,Q.T=null;var l=re.p;re.p=2;var f=Fe;Fe|=4;try{Kv(i,r);var p=$p,v=Jy(r.containerInfo),T=p.focusedElem,I=p.selectionRange;if(v!==T&&T&&T.ownerDocument&&Zy(T.ownerDocument.documentElement,T)){if(I!==null&&vd(T)){var B=I.start,Y=I.end;if(Y===void 0&&(Y=B),"selectionStart"in T)T.selectionStart=B,T.selectionEnd=Math.min(Y,T.value.length);else{var J=T.ownerDocument||document,q=J&&J.defaultView||window;if(q.getSelection){var H=q.getSelection(),_e=T.textContent.length,pe=Math.min(I.start,_e),Ke=I.end===void 0?pe:Math.min(I.end,_e);!H.extend&&pe>Ke&&(v=Ke,Ke=pe,pe=v);var L=Wy(T,pe),P=Wy(T,Ke);if(L&&P&&(H.rangeCount!==1||H.anchorNode!==L.node||H.anchorOffset!==L.offset||H.focusNode!==P.node||H.focusOffset!==P.offset)){var z=J.createRange();z.setStart(L.node,L.offset),H.removeAllRanges(),pe>Ke?(H.addRange(z),H.extend(P.node,P.offset)):(z.setEnd(P.node,P.offset),H.addRange(z))}}}}for(J=[],H=T;H=H.parentNode;)H.nodeType===1&&J.push({element:H,left:H.scrollLeft,top:H.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<J.length;T++){var X=J[T];X.element.scrollLeft=X.left,X.element.scrollTop=X.top}}Nh=!!Gp,$p=Gp=null}finally{Fe=f,re.p=l,Q.T=a}}r.current=i,jt=2}}function fE(){if(jt===2){jt=0;var r=Qi,i=_o,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=Q.T,Q.T=null;var l=re.p;re.p=2;var f=Fe;Fe|=4;try{qv(r,i.alternate,i)}finally{Fe=f,re.p=l,Q.T=a}}jt=3}}function dE(){if(jt===4||jt===3){jt=0,fc();var r=Qi,i=_o,a=vo,l=eE;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?jt=5:(jt=0,_o=Qi=null,pE(r,r.pendingLanes));var f=r.pendingLanes;if(f===0&&(Ki=null),La(a),i=i.stateNode,je&&typeof je.onCommitFiberRoot=="function")try{je.onCommitFiberRoot(ot,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=Q.T,f=re.p,re.p=2,Q.T=null;try{for(var p=r.onRecoverableError,v=0;v<l.length;v++){var T=l[v];p(T.value,{componentStack:T.stack})}}finally{Q.T=i,re.p=f}}(vo&3)!==0&&yh(),Sr(r),f=r.pendingLanes,(a&4194090)!==0&&(f&42)!==0?r===Op?Zl++:(Zl=0,Op=r):Zl=0,Jl(0)}}function pE(r,i){(r.pooledCacheLanes&=i)===0&&(i=r.pooledCache,i!=null&&(r.pooledCache=null,Ml(i)))}function yh(r){return hE(),fE(),dE(),mE()}function mE(){if(jt!==5)return!1;var r=Qi,i=Np;Np=0;var a=La(vo),l=Q.T,f=re.p;try{re.p=32>a?32:a,Q.T=null,a=Dp,Dp=null;var p=Qi,v=vo;if(jt=0,_o=Qi=null,vo=0,(Fe&6)!==0)throw Error(s(331));var T=Fe;if(Fe|=4,Zv(p.current),Yv(p,p.current,v,a),Fe=T,Jl(0,!1),je&&typeof je.onPostCommitFiberRoot=="function")try{je.onPostCommitFiberRoot(ot,p)}catch{}return!0}finally{re.p=f,Q.T=l,pE(r,i)}}function gE(r,i,a){i=Vn(a,i),i=up(r.stateNode,i,2),r=Ui(r,i,2),r!==null&&(Fr(r,2),Sr(r))}function Xe(r,i,a){if(r.tag===3)gE(r,r,a);else for(;i!==null;){if(i.tag===3){gE(i,r,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ki===null||!Ki.has(l))){r=Vn(a,r),a=Ev(2),l=Ui(i,a,2),l!==null&&(Tv(a,l,i,r),Fr(l,2),Sr(l));break}}i=i.return}}function kp(r,i,a){var l=r.pingCache;if(l===null){l=r.pingCache=new gI;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(a)||(Sp=!0,f.add(a),r=TI.bind(null,r,i,a),i.then(r,r))}function TI(r,i,a){var l=r.pingCache;l!==null&&l.delete(i),r.pingedLanes|=r.suspendedLanes&a,r.warmLanes&=~a,Ze===r&&(xe&a)===a&&(ut===4||ut===3&&(xe&62914560)===xe&&300>Dn()-Cp?(Fe&2)===0&&Eo(r,0):Rp|=a,yo===xe&&(yo=0)),Sr(r)}function yE(r,i){i===0&&(i=ll()),r=to(r,i),r!==null&&(Fr(r,i),Sr(r))}function bI(r){var i=r.memoizedState,a=0;i!==null&&(a=i.retryLane),yE(r,a)}function wI(r,i){var a=0;switch(r.tag){case 13:var l=r.stateNode,f=r.memoizedState;f!==null&&(a=f.retryLane);break;case 19:l=r.stateNode;break;case 22:l=r.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),yE(r,a)}function AI(r,i){return xs(r,i)}var _h=null,bo=null,Vp=!1,vh=!1,Lp=!1,pa=0;function Sr(r){r!==bo&&r.next===null&&(bo===null?_h=bo=r:bo=bo.next=r),vh=!0,Vp||(Vp=!0,RI())}function Jl(r,i){if(!Lp&&vh){Lp=!0;do for(var a=!1,l=_h;l!==null;){if(r!==0){var f=l.pendingLanes;if(f===0)var p=0;else{var v=l.suspendedLanes,T=l.pingedLanes;p=(1<<31-Kt(42|r)+1)-1,p&=f&~(v&~T),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(a=!0,TE(l,p))}else p=xe,p=Va(l,l===Ze?p:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(p&3)===0||zs(l,p)||(a=!0,TE(l,p));l=l.next}while(a);Lp=!1}}function SI(){_E()}function _E(){vh=Vp=!1;var r=0;pa!==0&&(PI()&&(r=pa),pa=0);for(var i=Dn(),a=null,l=_h;l!==null;){var f=l.next,p=vE(l,i);p===0?(l.next=null,a===null?_h=f:a.next=f,f===null&&(bo=a)):(a=l,(r!==0||(p&3)!==0)&&(vh=!0)),l=f}Jl(r)}function vE(r,i){for(var a=r.suspendedLanes,l=r.pingedLanes,f=r.expirationTimes,p=r.pendingLanes&-62914561;0<p;){var v=31-Kt(p),T=1<<v,I=f[v];I===-1?((T&a)===0||(T&l)!==0)&&(f[v]=al(T,i)):I<=i&&(r.expiredLanes|=T),p&=~T}if(i=Ze,a=xe,a=Va(r,r===i?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),l=r.callbackNode,a===0||r===i&&(qe===2||qe===9)||r.cancelPendingCommit!==null)return l!==null&&l!==null&&Ps(l),r.callbackNode=null,r.callbackPriority=0;if((a&3)===0||zs(r,a)){if(i=a&-a,i===r.callbackPriority)return i;switch(l!==null&&Ps(l),La(a)){case 2:case 8:a=Pa;break;case 32:a=ks;break;case 268435456:a=ka;break;default:a=ks}return l=EE.bind(null,r),a=xs(a,l),r.callbackPriority=i,r.callbackNode=a,i}return l!==null&&l!==null&&Ps(l),r.callbackPriority=2,r.callbackNode=null,2}function EE(r,i){if(jt!==0&&jt!==5)return r.callbackNode=null,r.callbackPriority=0,null;var a=r.callbackNode;if(yh()&&r.callbackNode!==a)return null;var l=xe;return l=Va(r,r===Ze?l:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),l===0?null:(nE(r,l,i),vE(r,Dn()),r.callbackNode!=null&&r.callbackNode===a?EE.bind(null,r):null)}function TE(r,i){if(yh())return null;nE(r,i,!0)}function RI(){VI(function(){(Fe&6)!==0?xs(il,SI):_E()})}function Up(){return pa===0&&(pa=ol()),pa}function bE(r){return r==null||typeof r=="symbol"||typeof r=="boolean"?null:typeof r=="function"?r:qa(""+r)}function wE(r,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,r.id&&a.setAttribute("form",r.id),i.parentNode.insertBefore(a,i),r=new FormData(r),a.parentNode.removeChild(a),r}function II(r,i,a,l,f){if(i==="submit"&&a&&a.stateNode===f){var p=bE((f[_t]||null).action),v=l.submitter;v&&(i=(i=v[_t]||null)?bE(i.formAction):v.getAttribute("formAction"),i!==null&&(p=i,v=null));var T=new Ha("action","action",null,l,f);r.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(pa!==0){var I=v?wE(f,v):new FormData(f);ip(a,{pending:!0,data:I,method:f.method,action:p},null,I)}}else typeof p=="function"&&(T.preventDefault(),I=v?wE(f,v):new FormData(f),ip(a,{pending:!0,data:I,method:f.method,action:p},p,I))},currentTarget:f}]})}}for(var zp=0;zp<wd.length;zp++){var Bp=wd[zp],CI=Bp.toLowerCase(),NI=Bp[0].toUpperCase()+Bp.slice(1);Jn(CI,"on"+NI)}Jn(n_,"onAnimationEnd"),Jn(r_,"onAnimationIteration"),Jn(i_,"onAnimationStart"),Jn("dblclick","onDoubleClick"),Jn("focusin","onFocus"),Jn("focusout","onBlur"),Jn($R,"onTransitionRun"),Jn(KR,"onTransitionStart"),Jn(QR,"onTransitionCancel"),Jn(s_,"onTransitionEnd"),Hr("onMouseEnter",["mouseout","mouseover"]),Hr("onMouseLeave",["mouseout","mouseover"]),Hr("onPointerEnter",["pointerout","pointerover"]),Hr("onPointerLeave",["pointerout","pointerover"]),Wn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Wn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Wn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Wn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Wn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Wn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var eu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),DI=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(eu));function AE(r,i){i=(i&4)!==0;for(var a=0;a<r.length;a++){var l=r[a],f=l.event;l=l.listeners;e:{var p=void 0;if(i)for(var v=l.length-1;0<=v;v--){var T=l[v],I=T.instance,B=T.currentTarget;if(T=T.listener,I!==p&&f.isPropagationStopped())break e;p=T,f.currentTarget=B;try{p(f)}catch(Y){ah(Y)}f.currentTarget=null,p=I}else for(v=0;v<l.length;v++){if(T=l[v],I=T.instance,B=T.currentTarget,T=T.listener,I!==p&&f.isPropagationStopped())break e;p=T,f.currentTarget=B;try{p(f)}catch(Y){ah(Y)}f.currentTarget=null,p=I}}}}function Re(r,i){var a=i[hl];a===void 0&&(a=i[hl]=new Set);var l=r+"__bubble";a.has(l)||(SE(i,r,2,!1),a.add(l))}function jp(r,i,a){var l=0;i&&(l|=4),SE(a,r,l,i)}var Eh="_reactListening"+Math.random().toString(36).slice(2);function Fp(r){if(!r[Eh]){r[Eh]=!0,fl.forEach(function(a){a!=="selectionchange"&&(DI.has(a)||jp(a,!1,r),jp(a,!0,r))});var i=r.nodeType===9?r:r.ownerDocument;i===null||i[Eh]||(i[Eh]=!0,jp("selectionchange",!1,i))}}function SE(r,i,a,l){switch(YE(i)){case 2:var f=r1;break;case 8:f=i1;break;default:f=nm}a=f.bind(null,i,a,r),f=void 0,!Pn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?r.addEventListener(i,a,{capture:!0,passive:f}):r.addEventListener(i,a,!0):f!==void 0?r.addEventListener(i,a,{passive:f}):r.addEventListener(i,a,!1)}function qp(r,i,a,l,f){var p=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var T=l.stateNode.containerInfo;if(T===f)break;if(v===4)for(v=l.return;v!==null;){var I=v.tag;if((I===3||I===4)&&v.stateNode.containerInfo===f)return;v=v.return}for(;T!==null;){if(v=qr(T),v===null)return;if(I=v.tag,I===5||I===6||I===26||I===27){l=p=v;continue e}T=T.parentNode}}l=l.return}bc(function(){var B=p,Y=xn(a),J=[];e:{var q=a_.get(r);if(q!==void 0){var H=Ha,_e=r;switch(r){case"keypress":if(gr(a)===0)break e;case"keydown":case"keyup":H=Xa;break;case"focusin":_e="focus",H=Ka;break;case"focusout":_e="blur",H=Ka;break;case"beforeblur":case"afterblur":H=Ka;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=kn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=md;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=Dc;break;case n_:case r_:case i_:H=Qa;break;case s_:H=Mc;break;case"scroll":case"scrollend":H=wc;break;case"wheel":H=Wa;break;case"copy":case"cut":case"paste":H=Ya;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=Al;break;case"toggle":case"beforetoggle":H=Pc}var pe=(i&4)!==0,Ke=!pe&&(r==="scroll"||r==="scrollend"),L=pe?q!==null?q+"Capture":null:q;pe=[];for(var P=B,z;P!==null;){var X=P;if(z=X.stateNode,X=X.tag,X!==5&&X!==26&&X!==27||z===null||L===null||(X=Ks(P,L),X!=null&&pe.push(tu(P,X,z))),Ke)break;P=P.return}0<pe.length&&(q=new H(q,_e,null,a,Y),J.push({event:q,listeners:pe}))}}if((i&7)===0){e:{if(q=r==="mouseover"||r==="pointerover",H=r==="mouseout"||r==="pointerout",q&&a!==Kr&&(_e=a.relatedTarget||a.fromElement)&&(qr(_e)||_e[On]))break e;if((H||q)&&(q=Y.window===Y?Y:(q=Y.ownerDocument)?q.defaultView||q.parentWindow:window,H?(_e=a.relatedTarget||a.toElement,H=B,_e=_e?qr(_e):null,_e!==null&&(Ke=u(_e),pe=_e.tag,_e!==Ke||pe!==5&&pe!==27&&pe!==6)&&(_e=null)):(H=null,_e=B),H!==_e)){if(pe=kn,X="onMouseLeave",L="onMouseEnter",P="mouse",(r==="pointerout"||r==="pointerover")&&(pe=Al,X="onPointerLeave",L="onPointerEnter",P="pointer"),Ke=H==null?q:fr(H),z=_e==null?q:fr(_e),q=new pe(X,P+"leave",H,a,Y),q.target=Ke,q.relatedTarget=z,X=null,qr(Y)===B&&(pe=new pe(L,P+"enter",_e,a,Y),pe.target=z,pe.relatedTarget=Ke,X=pe),Ke=X,H&&_e)t:{for(pe=H,L=_e,P=0,z=pe;z;z=wo(z))P++;for(z=0,X=L;X;X=wo(X))z++;for(;0<P-z;)pe=wo(pe),P--;for(;0<z-P;)L=wo(L),z--;for(;P--;){if(pe===L||L!==null&&pe===L.alternate)break t;pe=wo(pe),L=wo(L)}pe=null}else pe=null;H!==null&&RE(J,q,H,pe,!1),_e!==null&&Ke!==null&&RE(J,Ke,_e,pe,!0)}}e:{if(q=B?fr(B):window,H=q.nodeName&&q.nodeName.toLowerCase(),H==="select"||H==="input"&&q.type==="file")var le=Gy;else if(It(q))if($y)le=qR;else{le=jR;var Ae=BR}else H=q.nodeName,!H||H.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?B&&yl(B.elementType)&&(le=Gy):le=FR;if(le&&(le=le(r,B))){Zr(J,le,a,Y);break e}Ae&&Ae(r,q,B),r==="focusout"&&B&&q.type==="number"&&B.memoizedProps.value!=null&&xi(q,"number",q.value)}switch(Ae=B?fr(B):window,r){case"focusin":(It(Ae)||Ae.contentEditable==="true")&&(Za=Ae,Ed=B,Il=null);break;case"focusout":Il=Ed=Za=null;break;case"mousedown":Td=!0;break;case"contextmenu":case"mouseup":case"dragend":Td=!1,e_(J,a,Y);break;case"selectionchange":if(GR)break;case"keydown":case"keyup":e_(J,a,Y)}var ce;if(vr)e:{switch(r){case"compositionstart":var me="onCompositionStart";break e;case"compositionend":me="onCompositionEnd";break e;case"compositionupdate":me="onCompositionUpdate";break e}me=void 0}else Oe?$(r,a)&&(me="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(me="onCompositionStart");me&&(_&&a.locale!=="ko"&&(Oe||me!=="onCompositionStart"?me==="onCompositionEnd"&&Oe&&(ce=vl()):(mr=Y,Pi="value"in mr?mr.value:mr.textContent,Oe=!0)),Ae=Th(B,me),0<Ae.length&&(me=new bl(me,r,null,a,Y),J.push({event:me,listeners:Ae}),ce?me.data=ce:(ce=ne(a),ce!==null&&(me.data=ce)))),(ce=g?Rt(r,a):Me(r,a))&&(me=Th(B,"onBeforeInput"),0<me.length&&(Ae=new bl("onBeforeInput","beforeinput",null,a,Y),J.push({event:Ae,listeners:me}),Ae.data=ce)),II(J,r,B,a,Y)}AE(J,i)})}function tu(r,i,a){return{instance:r,listener:i,currentTarget:a}}function Th(r,i){for(var a=i+"Capture",l=[];r!==null;){var f=r,p=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||p===null||(f=Ks(r,a),f!=null&&l.unshift(tu(r,f,p)),f=Ks(r,i),f!=null&&l.push(tu(r,f,p))),r.tag===3)return l;r=r.return}return[]}function wo(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r||null}function RE(r,i,a,l,f){for(var p=i._reactName,v=[];a!==null&&a!==l;){var T=a,I=T.alternate,B=T.stateNode;if(T=T.tag,I!==null&&I===l)break;T!==5&&T!==26&&T!==27||B===null||(I=B,f?(B=Ks(a,p),B!=null&&v.unshift(tu(a,B,I))):f||(B=Ks(a,p),B!=null&&v.push(tu(a,B,I)))),a=a.return}v.length!==0&&r.push({event:i,listeners:v})}var OI=/\r\n?/g,MI=/\u0000|\uFFFD/g;function IE(r){return(typeof r=="string"?r:""+r).replace(OI,`
`).replace(MI,"")}function CE(r,i){return i=IE(i),IE(r)===i}function bh(){}function $e(r,i,a,l,f,p){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Mn(r,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Mn(r,""+l);break;case"className":dr(r,"class",l);break;case"tabIndex":dr(r,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":dr(r,a,l);break;case"style":gl(r,l,p);break;case"data":if(i!=="object"){dr(r,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){r.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){r.removeAttribute(a);break}l=qa(""+l),r.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){r.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(a==="formAction"?(i!=="input"&&$e(r,i,"name",f.name,f,null),$e(r,i,"formEncType",f.formEncType,f,null),$e(r,i,"formMethod",f.formMethod,f,null),$e(r,i,"formTarget",f.formTarget,f,null)):($e(r,i,"encType",f.encType,f,null),$e(r,i,"method",f.method,f,null),$e(r,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){r.removeAttribute(a);break}l=qa(""+l),r.setAttribute(a,l);break;case"onClick":l!=null&&(r.onclick=bh);break;case"onScroll":l!=null&&Re("scroll",r);break;case"onScrollEnd":l!=null&&Re("scrollend",r);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(f.children!=null)throw Error(s(60));r.innerHTML=a}}break;case"multiple":r.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":r.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){r.removeAttribute("xlink:href");break}a=qa(""+l),r.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?r.setAttribute(a,""+l):r.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?r.setAttribute(a,""):r.removeAttribute(a);break;case"capture":case"download":l===!0?r.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?r.setAttribute(a,l):r.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?r.setAttribute(a,l):r.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?r.removeAttribute(a):r.setAttribute(a,l);break;case"popover":Re("beforetoggle",r),Re("toggle",r),Mi(r,"popover",l);break;case"xlinkActuate":Ut(r,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ut(r,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ut(r,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ut(r,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ut(r,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ut(r,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ut(r,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ut(r,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ut(r,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Mi(r,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=dd.get(a)||a,Mi(r,a,l))}}function Hp(r,i,a,l,f,p){switch(a){case"style":gl(r,l,p);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(f.children!=null)throw Error(s(60));r.innerHTML=a}}break;case"children":typeof l=="string"?Mn(r,l):(typeof l=="number"||typeof l=="bigint")&&Mn(r,""+l);break;case"onScroll":l!=null&&Re("scroll",r);break;case"onScrollEnd":l!=null&&Re("scrollend",r);break;case"onClick":l!=null&&(r.onclick=bh);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ua.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(f=a.endsWith("Capture"),i=a.slice(2,f?a.length-7:void 0),p=r[_t]||null,p=p!=null?p[a]:null,typeof p=="function"&&r.removeEventListener(i,p,f),typeof l=="function")){typeof p!="function"&&p!==null&&(a in r?r[a]=null:r.hasAttribute(a)&&r.removeAttribute(a)),r.addEventListener(i,l,f);break e}a in r?r[a]=l:l===!0?r.setAttribute(a,""):Mi(r,a,l)}}}function Ft(r,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Re("error",r),Re("load",r);var l=!1,f=!1,p;for(p in a)if(a.hasOwnProperty(p)){var v=a[p];if(v!=null)switch(p){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:$e(r,i,p,v,a,null)}}f&&$e(r,i,"srcSet",a.srcSet,a,null),l&&$e(r,i,"src",a.src,a,null);return;case"input":Re("invalid",r);var T=p=v=f=null,I=null,B=null;for(l in a)if(a.hasOwnProperty(l)){var Y=a[l];if(Y!=null)switch(l){case"name":f=Y;break;case"type":v=Y;break;case"checked":I=Y;break;case"defaultChecked":B=Y;break;case"value":p=Y;break;case"defaultValue":T=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(s(137,i));break;default:$e(r,i,l,Y,a,null)}}Hs(r,p,T,I,B,v,f,!1),Fa(r);return;case"select":Re("invalid",r),l=v=p=null;for(f in a)if(a.hasOwnProperty(f)&&(T=a[f],T!=null))switch(f){case"value":p=T;break;case"defaultValue":v=T;break;case"multiple":l=T;default:$e(r,i,f,T,a,null)}i=p,a=v,r.multiple=!!l,i!=null?$r(r,!!l,i,!1):a!=null&&$r(r,!!l,a,!0);return;case"textarea":Re("invalid",r),p=f=l=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":l=T;break;case"defaultValue":f=T;break;case"children":p=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:$e(r,i,v,T,a,null)}Gs(r,l,f,p),Fa(r);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(l=a[I],l!=null))switch(I){case"selected":r.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:$e(r,i,I,l,a,null)}return;case"dialog":Re("beforetoggle",r),Re("toggle",r),Re("cancel",r),Re("close",r);break;case"iframe":case"object":Re("load",r);break;case"video":case"audio":for(l=0;l<eu.length;l++)Re(eu[l],r);break;case"image":Re("error",r),Re("load",r);break;case"details":Re("toggle",r);break;case"embed":case"source":case"link":Re("error",r),Re("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(B in a)if(a.hasOwnProperty(B)&&(l=a[B],l!=null))switch(B){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:$e(r,i,B,l,a,null)}return;default:if(yl(i)){for(Y in a)a.hasOwnProperty(Y)&&(l=a[Y],l!==void 0&&Hp(r,i,Y,l,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(l=a[T],l!=null&&$e(r,i,T,l,a,null))}function xI(r,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,p=null,v=null,T=null,I=null,B=null,Y=null;for(H in a){var J=a[H];if(a.hasOwnProperty(H)&&J!=null)switch(H){case"checked":break;case"value":break;case"defaultValue":I=J;default:l.hasOwnProperty(H)||$e(r,i,H,null,l,J)}}for(var q in l){var H=l[q];if(J=a[q],l.hasOwnProperty(q)&&(H!=null||J!=null))switch(q){case"type":p=H;break;case"name":f=H;break;case"checked":B=H;break;case"defaultChecked":Y=H;break;case"value":v=H;break;case"defaultValue":T=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,i));break;default:H!==J&&$e(r,i,q,H,l,J)}}yn(r,v,T,I,B,Y,p,f);return;case"select":H=v=T=q=null;for(p in a)if(I=a[p],a.hasOwnProperty(p)&&I!=null)switch(p){case"value":break;case"multiple":H=I;default:l.hasOwnProperty(p)||$e(r,i,p,null,l,I)}for(f in l)if(p=l[f],I=a[f],l.hasOwnProperty(f)&&(p!=null||I!=null))switch(f){case"value":q=p;break;case"defaultValue":T=p;break;case"multiple":v=p;default:p!==I&&$e(r,i,f,p,l,I)}i=T,a=v,l=H,q!=null?$r(r,!!a,q,!1):!!l!=!!a&&(i!=null?$r(r,!!a,i,!0):$r(r,!!a,a?[]:"",!1));return;case"textarea":H=q=null;for(T in a)if(f=a[T],a.hasOwnProperty(T)&&f!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:$e(r,i,T,null,l,f)}for(v in l)if(f=l[v],p=a[v],l.hasOwnProperty(v)&&(f!=null||p!=null))switch(v){case"value":q=f;break;case"defaultValue":H=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==p&&$e(r,i,v,f,l,p)}He(r,q,H);return;case"option":for(var _e in a)if(q=a[_e],a.hasOwnProperty(_e)&&q!=null&&!l.hasOwnProperty(_e))switch(_e){case"selected":r.selected=!1;break;default:$e(r,i,_e,null,l,q)}for(I in l)if(q=l[I],H=a[I],l.hasOwnProperty(I)&&q!==H&&(q!=null||H!=null))switch(I){case"selected":r.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:$e(r,i,I,q,l,H)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var pe in a)q=a[pe],a.hasOwnProperty(pe)&&q!=null&&!l.hasOwnProperty(pe)&&$e(r,i,pe,null,l,q);for(B in l)if(q=l[B],H=a[B],l.hasOwnProperty(B)&&q!==H&&(q!=null||H!=null))switch(B){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,i));break;default:$e(r,i,B,q,l,H)}return;default:if(yl(i)){for(var Ke in a)q=a[Ke],a.hasOwnProperty(Ke)&&q!==void 0&&!l.hasOwnProperty(Ke)&&Hp(r,i,Ke,void 0,l,q);for(Y in l)q=l[Y],H=a[Y],!l.hasOwnProperty(Y)||q===H||q===void 0&&H===void 0||Hp(r,i,Y,q,l,H);return}}for(var L in a)q=a[L],a.hasOwnProperty(L)&&q!=null&&!l.hasOwnProperty(L)&&$e(r,i,L,null,l,q);for(J in l)q=l[J],H=a[J],!l.hasOwnProperty(J)||q===H||q==null&&H==null||$e(r,i,J,q,l,H)}var Gp=null,$p=null;function wh(r){return r.nodeType===9?r:r.ownerDocument}function NE(r){switch(r){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function DE(r,i){if(r===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return r===1&&i==="foreignObject"?0:r}function Kp(r,i){return r==="textarea"||r==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Qp=null;function PI(){var r=window.event;return r&&r.type==="popstate"?r===Qp?!1:(Qp=r,!0):(Qp=null,!1)}var OE=typeof setTimeout=="function"?setTimeout:void 0,kI=typeof clearTimeout=="function"?clearTimeout:void 0,ME=typeof Promise=="function"?Promise:void 0,VI=typeof queueMicrotask=="function"?queueMicrotask:typeof ME<"u"?function(r){return ME.resolve(null).then(r).catch(LI)}:OE;function LI(r){setTimeout(function(){throw r})}function Xi(r){return r==="head"}function xE(r,i){var a=i,l=0,f=0;do{var p=a.nextSibling;if(r.removeChild(a),p&&p.nodeType===8)if(a=p.data,a==="/$"){if(0<l&&8>l){a=l;var v=r.ownerDocument;if(a&1&&nu(v.documentElement),a&2&&nu(v.body),a&4)for(a=v.head,nu(a),v=a.firstChild;v;){var T=v.nextSibling,I=v.nodeName;v[Bs]||I==="SCRIPT"||I==="STYLE"||I==="LINK"&&v.rel.toLowerCase()==="stylesheet"||a.removeChild(v),v=T}}if(f===0){r.removeChild(p),cu(i);return}f--}else a==="$"||a==="$?"||a==="$!"?f++:l=a.charCodeAt(0)-48;else l=0;a=p}while(a);cu(i)}function Yp(r){var i=r.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Yp(a),Oi(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}r.removeChild(a)}}function UI(r,i,a,l){for(;r.nodeType===1;){var f=a;if(r.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(l){if(!r[Bs])switch(i){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(p=r.getAttribute("rel"),p==="stylesheet"&&r.hasAttribute("data-precedence"))break;if(p!==f.rel||r.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||r.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||r.getAttribute("title")!==(f.title==null?null:f.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(p=r.getAttribute("src"),(p!==(f.src==null?null:f.src)||r.getAttribute("type")!==(f.type==null?null:f.type)||r.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&p&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}}else if(i==="input"&&r.type==="hidden"){var p=f.name==null?null:""+f.name;if(f.type==="hidden"&&r.getAttribute("name")===p)return r}else return r;if(r=tr(r.nextSibling),r===null)break}return null}function zI(r,i,a){if(i==="")return null;for(;r.nodeType!==3;)if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!a||(r=tr(r.nextSibling),r===null))return null;return r}function Xp(r){return r.data==="$!"||r.data==="$?"&&r.ownerDocument.readyState==="complete"}function BI(r,i){var a=r.ownerDocument;if(r.data!=="$?"||a.readyState==="complete")i();else{var l=function(){i(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),r._reactRetry=l}}function tr(r){for(;r!=null;r=r.nextSibling){var i=r.nodeType;if(i===1||i===3)break;if(i===8){if(i=r.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return r}var Wp=null;function PE(r){r=r.previousSibling;for(var i=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return r;i--}else a==="/$"&&i++}r=r.previousSibling}return null}function kE(r,i,a){switch(i=wh(a),r){case"html":if(r=i.documentElement,!r)throw Error(s(452));return r;case"head":if(r=i.head,!r)throw Error(s(453));return r;case"body":if(r=i.body,!r)throw Error(s(454));return r;default:throw Error(s(451))}}function nu(r){for(var i=r.attributes;i.length;)r.removeAttributeNode(i[0]);Oi(r)}var Fn=new Map,VE=new Set;function Ah(r){return typeof r.getRootNode=="function"?r.getRootNode():r.nodeType===9?r:r.ownerDocument}var hi=re.d;re.d={f:jI,r:FI,D:qI,C:HI,L:GI,m:$I,X:QI,S:KI,M:YI};function jI(){var r=hi.f(),i=mh();return r||i}function FI(r){var i=hr(r);i!==null&&i.tag===5&&i.type==="form"?nv(i):hi.r(r)}var Ao=typeof document>"u"?null:document;function LE(r,i,a){var l=Ao;if(l&&typeof i=="string"&&i){var f=vt(i);f='link[rel="'+r+'"][href="'+f+'"]',typeof a=="string"&&(f+='[crossorigin="'+a+'"]'),VE.has(f)||(VE.add(f),r={rel:r,crossOrigin:a,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Ft(i,"link",r),dt(i),l.head.appendChild(i)))}}function qI(r){hi.D(r),LE("dns-prefetch",r,null)}function HI(r,i){hi.C(r,i),LE("preconnect",r,i)}function GI(r,i,a){hi.L(r,i,a);var l=Ao;if(l&&r&&i){var f='link[rel="preload"][as="'+vt(i)+'"]';i==="image"&&a&&a.imageSrcSet?(f+='[imagesrcset="'+vt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(f+='[imagesizes="'+vt(a.imageSizes)+'"]')):f+='[href="'+vt(r)+'"]';var p=f;switch(i){case"style":p=So(r);break;case"script":p=Ro(r)}Fn.has(p)||(r=E({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:r,as:i},a),Fn.set(p,r),l.querySelector(f)!==null||i==="style"&&l.querySelector(ru(p))||i==="script"&&l.querySelector(iu(p))||(i=l.createElement("link"),Ft(i,"link",r),dt(i),l.head.appendChild(i)))}}function $I(r,i){hi.m(r,i);var a=Ao;if(a&&r){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+vt(l)+'"][href="'+vt(r)+'"]',p=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=Ro(r)}if(!Fn.has(p)&&(r=E({rel:"modulepreload",href:r},i),Fn.set(p,r),a.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(iu(p)))return}l=a.createElement("link"),Ft(l,"link",r),dt(l),a.head.appendChild(l)}}}function KI(r,i,a){hi.S(r,i,a);var l=Ao;if(l&&r){var f=tn(l).hoistableStyles,p=So(r);i=i||"default";var v=f.get(p);if(!v){var T={loading:0,preload:null};if(v=l.querySelector(ru(p)))T.loading=5;else{r=E({rel:"stylesheet",href:r,"data-precedence":i},a),(a=Fn.get(p))&&Zp(r,a);var I=v=l.createElement("link");dt(I),Ft(I,"link",r),I._p=new Promise(function(B,Y){I.onload=B,I.onerror=Y}),I.addEventListener("load",function(){T.loading|=1}),I.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Sh(v,i,l)}v={type:"stylesheet",instance:v,count:1,state:T},f.set(p,v)}}}function QI(r,i){hi.X(r,i);var a=Ao;if(a&&r){var l=tn(a).hoistableScripts,f=Ro(r),p=l.get(f);p||(p=a.querySelector(iu(f)),p||(r=E({src:r,async:!0},i),(i=Fn.get(f))&&Jp(r,i),p=a.createElement("script"),dt(p),Ft(p,"link",r),a.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(f,p))}}function YI(r,i){hi.M(r,i);var a=Ao;if(a&&r){var l=tn(a).hoistableScripts,f=Ro(r),p=l.get(f);p||(p=a.querySelector(iu(f)),p||(r=E({src:r,async:!0,type:"module"},i),(i=Fn.get(f))&&Jp(r,i),p=a.createElement("script"),dt(p),Ft(p,"link",r),a.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(f,p))}}function UE(r,i,a,l){var f=(f=ur.current)?Ah(f):null;if(!f)throw Error(s(446));switch(r){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=So(a.href),a=tn(f).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){r=So(a.href);var p=tn(f).hoistableStyles,v=p.get(r);if(v||(f=f.ownerDocument||f,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(r,v),(p=f.querySelector(ru(r)))&&!p._p&&(v.instance=p,v.state.loading=5),Fn.has(r)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Fn.set(r,a),p||XI(f,r,a,v.state))),i&&l===null)throw Error(s(528,""));return v}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Ro(a),a=tn(f).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,r))}}function So(r){return'href="'+vt(r)+'"'}function ru(r){return'link[rel="stylesheet"]['+r+"]"}function zE(r){return E({},r,{"data-precedence":r.precedence,precedence:null})}function XI(r,i,a,l){r.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=r.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Ft(i,"link",a),dt(i),r.head.appendChild(i))}function Ro(r){return'[src="'+vt(r)+'"]'}function iu(r){return"script[async]"+r}function BE(r,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=r.querySelector('style[data-href~="'+vt(a.href)+'"]');if(l)return i.instance=l,dt(l),l;var f=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(r.ownerDocument||r).createElement("style"),dt(l),Ft(l,"style",f),Sh(l,a.precedence,r),i.instance=l;case"stylesheet":f=So(a.href);var p=r.querySelector(ru(f));if(p)return i.state.loading|=4,i.instance=p,dt(p),p;l=zE(a),(f=Fn.get(f))&&Zp(l,f),p=(r.ownerDocument||r).createElement("link"),dt(p);var v=p;return v._p=new Promise(function(T,I){v.onload=T,v.onerror=I}),Ft(p,"link",l),i.state.loading|=4,Sh(p,a.precedence,r),i.instance=p;case"script":return p=Ro(a.src),(f=r.querySelector(iu(p)))?(i.instance=f,dt(f),f):(l=a,(f=Fn.get(p))&&(l=E({},a),Jp(l,f)),r=r.ownerDocument||r,f=r.createElement("script"),dt(f),Ft(f,"link",l),r.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Sh(l,a.precedence,r));return i.instance}function Sh(r,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,p=f,v=0;v<l.length;v++){var T=l[v];if(T.dataset.precedence===i)p=T;else if(p!==f)break}p?p.parentNode.insertBefore(r,p.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(r,i.firstChild))}function Zp(r,i){r.crossOrigin==null&&(r.crossOrigin=i.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=i.referrerPolicy),r.title==null&&(r.title=i.title)}function Jp(r,i){r.crossOrigin==null&&(r.crossOrigin=i.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=i.referrerPolicy),r.integrity==null&&(r.integrity=i.integrity)}var Rh=null;function jE(r,i,a){if(Rh===null){var l=new Map,f=Rh=new Map;f.set(a,l)}else f=Rh,l=f.get(a),l||(l=new Map,f.set(a,l));if(l.has(r))return l;for(l.set(r,null),a=a.getElementsByTagName(r),f=0;f<a.length;f++){var p=a[f];if(!(p[Bs]||p[St]||r==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var v=p.getAttribute(i)||"";v=r+v;var T=l.get(v);T?T.push(p):l.set(v,[p])}}return l}function FE(r,i,a){r=r.ownerDocument||r,r.head.insertBefore(a,i==="title"?r.querySelector("head > title"):null)}function WI(r,i,a){if(a===1||i.itemProp!=null)return!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return r=i.disabled,typeof i.precedence=="string"&&r==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function qE(r){return!(r.type==="stylesheet"&&(r.state.loading&3)===0)}var su=null;function ZI(){}function JI(r,i,a){if(su===null)throw Error(s(475));var l=su;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var f=So(a.href),p=r.querySelector(ru(f));if(p){r=p._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(l.count++,l=Ih.bind(l),r.then(l,l)),i.state.loading|=4,i.instance=p,dt(p);return}p=r.ownerDocument||r,a=zE(a),(f=Fn.get(f))&&Zp(a,f),p=p.createElement("link"),dt(p);var v=p;v._p=new Promise(function(T,I){v.onload=T,v.onerror=I}),Ft(p,"link",a),i.instance=p}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,r),(r=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=Ih.bind(l),r.addEventListener("load",i),r.addEventListener("error",i))}}function e1(){if(su===null)throw Error(s(475));var r=su;return r.stylesheets&&r.count===0&&em(r,r.stylesheets),0<r.count?function(i){var a=setTimeout(function(){if(r.stylesheets&&em(r,r.stylesheets),r.unsuspend){var l=r.unsuspend;r.unsuspend=null,l()}},6e4);return r.unsuspend=i,function(){r.unsuspend=null,clearTimeout(a)}}:null}function Ih(){if(this.count--,this.count===0){if(this.stylesheets)em(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}var Ch=null;function em(r,i){r.stylesheets=null,r.unsuspend!==null&&(r.count++,Ch=new Map,i.forEach(t1,r),Ch=null,Ih.call(r))}function t1(r,i){if(!(i.state.loading&4)){var a=Ch.get(r);if(a)var l=a.get(null);else{a=new Map,Ch.set(r,a);for(var f=r.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<f.length;p++){var v=f[p];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),l=v)}l&&a.set(null,l)}f=i.instance,v=f.getAttribute("data-precedence"),p=a.get(v)||l,p===l&&a.set(null,f),a.set(v,f),this.count++,l=Ih.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),p?p.parentNode.insertBefore(f,p.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(f,r.firstChild)),i.state.loading|=4}}var au={$$typeof:K,Provider:null,Consumer:null,_currentValue:fe,_currentValue2:fe,_threadCount:0};function n1(r,i,a,l,f,p,v,T){this.tag=1,this.containerInfo=r,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=jr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jr(0),this.hiddenUpdates=jr(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=p,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function HE(r,i,a,l,f,p,v,T,I,B,Y,J){return r=new n1(r,i,a,v,T,I,B,J),i=1,p===!0&&(i|=24),p=vn(3,null,null,i),r.current=p,p.stateNode=r,i=kd(),i.refCount++,r.pooledCache=i,i.refCount++,p.memoizedState={element:l,isDehydrated:a,cache:i},zd(p),r}function GE(r){return r?(r=no,r):no}function $E(r,i,a,l,f,p){f=GE(f),l.context===null?l.context=f:l.pendingContext=f,l=Li(i),l.payload={element:a},p=p===void 0?null:p,p!==null&&(l.callback=p),a=Ui(r,l,i),a!==null&&(An(a,r,i),Vl(a,r,i))}function KE(r,i){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<i?a:i}}function tm(r,i){KE(r,i),(r=r.alternate)&&KE(r,i)}function QE(r){if(r.tag===13){var i=to(r,67108864);i!==null&&An(i,r,67108864),tm(r,67108864)}}var Nh=!0;function r1(r,i,a,l){var f=Q.T;Q.T=null;var p=re.p;try{re.p=2,nm(r,i,a,l)}finally{re.p=p,Q.T=f}}function i1(r,i,a,l){var f=Q.T;Q.T=null;var p=re.p;try{re.p=8,nm(r,i,a,l)}finally{re.p=p,Q.T=f}}function nm(r,i,a,l){if(Nh){var f=rm(l);if(f===null)qp(r,i,l,Dh,a),XE(r,l);else if(a1(f,r,i,a,l))l.stopPropagation();else if(XE(r,l),i&4&&-1<s1.indexOf(r)){for(;f!==null;){var p=hr(f);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var v=Xn(p.pendingLanes);if(v!==0){var T=p;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var I=1<<31-Kt(v);T.entanglements[1]|=I,v&=~I}Sr(p),(Fe&6)===0&&(dh=Dn()+500,Jl(0))}}break;case 13:T=to(p,2),T!==null&&An(T,p,2),mh(),tm(p,2)}if(p=rm(l),p===null&&qp(r,i,l,Dh,a),p===f)break;f=p}f!==null&&l.stopPropagation()}else qp(r,i,l,null,a)}}function rm(r){return r=xn(r),im(r)}var Dh=null;function im(r){if(Dh=null,r=qr(r),r!==null){var i=u(r);if(i===null)r=null;else{var a=i.tag;if(a===13){if(r=h(i),r!==null)return r;r=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;r=null}else i!==r&&(r=null)}}return Dh=r,null}function YE(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(od()){case il:return 2;case Pa:return 8;case ks:case ld:return 32;case ka:return 268435456;default:return 32}default:return 32}}var sm=!1,Wi=null,Zi=null,Ji=null,ou=new Map,lu=new Map,es=[],s1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function XE(r,i){switch(r){case"focusin":case"focusout":Wi=null;break;case"dragenter":case"dragleave":Zi=null;break;case"mouseover":case"mouseout":Ji=null;break;case"pointerover":case"pointerout":ou.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":lu.delete(i.pointerId)}}function uu(r,i,a,l,f,p){return r===null||r.nativeEvent!==p?(r={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:p,targetContainers:[f]},i!==null&&(i=hr(i),i!==null&&QE(i)),r):(r.eventSystemFlags|=l,i=r.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),r)}function a1(r,i,a,l,f){switch(i){case"focusin":return Wi=uu(Wi,r,i,a,l,f),!0;case"dragenter":return Zi=uu(Zi,r,i,a,l,f),!0;case"mouseover":return Ji=uu(Ji,r,i,a,l,f),!0;case"pointerover":var p=f.pointerId;return ou.set(p,uu(ou.get(p)||null,r,i,a,l,f)),!0;case"gotpointercapture":return p=f.pointerId,lu.set(p,uu(lu.get(p)||null,r,i,a,l,f)),!0}return!1}function WE(r){var i=qr(r.target);if(i!==null){var a=u(i);if(a!==null){if(i=a.tag,i===13){if(i=h(a),i!==null){r.blockedOn=i,mc(r.priority,function(){if(a.tag===13){var l=wn();l=Ci(l);var f=to(a,l);f!==null&&An(f,a,l),tm(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Oh(r){if(r.blockedOn!==null)return!1;for(var i=r.targetContainers;0<i.length;){var a=rm(r.nativeEvent);if(a===null){a=r.nativeEvent;var l=new a.constructor(a.type,a);Kr=l,a.target.dispatchEvent(l),Kr=null}else return i=hr(a),i!==null&&QE(i),r.blockedOn=a,!1;i.shift()}return!0}function ZE(r,i,a){Oh(r)&&a.delete(i)}function o1(){sm=!1,Wi!==null&&Oh(Wi)&&(Wi=null),Zi!==null&&Oh(Zi)&&(Zi=null),Ji!==null&&Oh(Ji)&&(Ji=null),ou.forEach(ZE),lu.forEach(ZE)}function Mh(r,i){r.blockedOn===i&&(r.blockedOn=null,sm||(sm=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,o1)))}var xh=null;function JE(r){xh!==r&&(xh=r,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){xh===r&&(xh=null);for(var i=0;i<r.length;i+=3){var a=r[i],l=r[i+1],f=r[i+2];if(typeof l!="function"){if(im(l||a)===null)continue;break}var p=hr(a);p!==null&&(r.splice(i,3),i-=3,ip(p,{pending:!0,data:f,method:a.method,action:l},l,f))}}))}function cu(r){function i(I){return Mh(I,r)}Wi!==null&&Mh(Wi,r),Zi!==null&&Mh(Zi,r),Ji!==null&&Mh(Ji,r),ou.forEach(i),lu.forEach(i);for(var a=0;a<es.length;a++){var l=es[a];l.blockedOn===r&&(l.blockedOn=null)}for(;0<es.length&&(a=es[0],a.blockedOn===null);)WE(a),a.blockedOn===null&&es.shift();if(a=(r.ownerDocument||r).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var f=a[l],p=a[l+1],v=f[_t]||null;if(typeof p=="function")v||JE(a);else if(v){var T=null;if(p&&p.hasAttribute("formAction")){if(f=p,v=p[_t]||null)T=v.formAction;else if(im(f)!==null)continue}else T=v.action;typeof T=="function"?a[l+1]=T:(a.splice(l,3),l-=3),JE(a)}}}function am(r){this._internalRoot=r}Ph.prototype.render=am.prototype.render=function(r){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=wn();$E(a,l,r,i,null,null)},Ph.prototype.unmount=am.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var i=r.containerInfo;$E(r.current,2,null,r,null,null),mh(),i[On]=null}};function Ph(r){this._internalRoot=r}Ph.prototype.unstable_scheduleHydration=function(r){if(r){var i=Ni();r={blockedOn:null,target:r,priority:i};for(var a=0;a<es.length&&i!==0&&i<es[a].priority;a++);es.splice(a,0,r),a===0&&WE(r)}};var eT=e.version;if(eT!=="19.1.1")throw Error(s(527,eT,"19.1.1"));re.findDOMNode=function(r){var i=r._reactInternals;if(i===void 0)throw typeof r.render=="function"?Error(s(188)):(r=Object.keys(r).join(","),Error(s(268,r)));return r=m(i),r=r!==null?y(r):null,r=r===null?null:r.stateNode,r};var l1={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:Q,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kh.isDisabled&&kh.supportsFiber)try{ot=kh.inject(l1),je=kh}catch{}}return fu.createRoot=function(r,i){if(!o(r))throw Error(s(299));var a=!1,l="",f=gv,p=yv,v=_v,T=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(p=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(T=i.unstable_transitionCallbacks)),i=HE(r,1,!1,null,null,a,l,f,p,v,T,null),r[On]=i.current,Fp(r),new am(i)},fu.hydrateRoot=function(r,i,a){if(!o(r))throw Error(s(299));var l=!1,f="",p=gv,v=yv,T=_v,I=null,B=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onUncaughtError!==void 0&&(p=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(I=a.unstable_transitionCallbacks),a.formState!==void 0&&(B=a.formState)),i=HE(r,1,!0,i,a??null,l,f,p,v,T,I,B),i.context=GE(null),a=i.current,l=wn(),l=Ci(l),f=Li(l),f.callback=null,Ui(a,f,l),a=l,i.current.lanes=a,Fr(i,a),Sr(i),r[On]=i.current,Fp(r),new Ph(i)},fu.version="19.1.1",fu}var aT;function C1(){if(aT)return lm.exports;aT=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),lm.exports=I1(),lm.exports}var N1=C1();const D1=b1(N1),O1="modulepreload",M1=function(n){return"/"+n},oT={},or=function(e,t,s){let o=Promise.resolve();if(t&&t.length>0){let m=function(y){return Promise.all(y.map(E=>Promise.resolve(E).then(b=>({status:"fulfilled",value:b}),b=>({status:"rejected",reason:b}))))};document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),d=h?.nonce||h?.getAttribute("nonce");o=m(t.map(y=>{if(y=M1(y),y in oT)return;oT[y]=!0;const E=y.endsWith(".css"),b=E?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${y}"]${b}`))return;const w=document.createElement("link");if(w.rel=E?"stylesheet":O1,E||(w.as="script"),w.crossOrigin="",w.href=y,d&&w.setAttribute("nonce",d),document.head.appendChild(w),E)return new Promise((O,k)=>{w.addEventListener("load",O),w.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${y}`)))})}))}function u(h){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=h,window.dispatchEvent(d),!d.defaultPrevented)throw h}return o.then(h=>{for(const d of h||[])d.status==="rejected"&&u(d.reason);return e().catch(u)})};/**
 * react-router v7.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var lT="popstate";function x1(n={}){function e(s,o){let{pathname:u,search:h,hash:d}=s.location;return zm("",{pathname:u,search:h,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(s,o){return typeof o=="string"?o:ku(o)}return k1(e,t,null,n)}function st(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function sr(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function P1(){return Math.random().toString(36).substring(2,10)}function uT(n,e){return{usr:n.state,key:n.key,idx:e}}function zm(n,e,t=null,s){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?Ko(e):e,state:t,key:e&&e.key||s||P1()}}function ku({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function Ko(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let s=n.indexOf("?");s>=0&&(e.search=n.substring(s),n=n.substring(0,s)),n&&(e.pathname=n)}return e}function k1(n,e,t,s={}){let{window:o=document.defaultView,v5Compat:u=!1}=s,h=o.history,d="POP",m=null,y=E();y==null&&(y=0,h.replaceState({...h.state,idx:y},""));function E(){return(h.state||{idx:null}).idx}function b(){d="POP";let V=E(),G=V==null?null:V-y;y=V,m&&m({action:d,location:F.location,delta:G})}function w(V,G){d="PUSH";let Z=zm(F.location,V,G);y=E()+1;let K=uT(Z,y),ie=F.createHref(Z);try{h.pushState(K,"",ie)}catch(se){if(se instanceof DOMException&&se.name==="DataCloneError")throw se;o.location.assign(ie)}u&&m&&m({action:d,location:F.location,delta:1})}function O(V,G){d="REPLACE";let Z=zm(F.location,V,G);y=E();let K=uT(Z,y),ie=F.createHref(Z);h.replaceState(K,"",ie),u&&m&&m({action:d,location:F.location,delta:0})}function k(V){return V1(V)}let F={get action(){return d},get location(){return n(o,h)},listen(V){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(lT,b),m=V,()=>{o.removeEventListener(lT,b),m=null}},createHref(V){return e(o,V)},createURL:k,encodeLocation(V){let G=k(V);return{pathname:G.pathname,search:G.search,hash:G.hash}},push:w,replace:O,go(V){return h.go(V)}};return F}function V1(n,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),st(t,"No window.location.(origin|href) available to create URL");let s=typeof n=="string"?n:ku(n);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=t+s),new URL(s,t)}function Sb(n,e,t="/"){return L1(n,e,t,!1)}function L1(n,e,t,s){let o=typeof e=="string"?Ko(e):e,u=yi(o.pathname||"/",t);if(u==null)return null;let h=Rb(n);U1(h);let d=null;for(let m=0;d==null&&m<h.length;++m){let y=Y1(u);d=K1(h[m],y,s)}return d}function Rb(n,e=[],t=[],s=""){let o=(u,h,d)=>{let m={relativePath:d===void 0?u.path||"":d,caseSensitive:u.caseSensitive===!0,childrenIndex:h,route:u};m.relativePath.startsWith("/")&&(st(m.relativePath.startsWith(s),`Absolute route path "${m.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(s.length));let y=gi([s,m.relativePath]),E=t.concat(m);u.children&&u.children.length>0&&(st(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),Rb(u.children,e,E,y)),!(u.path==null&&!u.index)&&e.push({path:y,score:G1(y,u.index),routesMeta:E})};return n.forEach((u,h)=>{if(u.path===""||!u.path?.includes("?"))o(u,h);else for(let d of Ib(u.path))o(u,h,d)}),e}function Ib(n){let e=n.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),u=t.replace(/\?$/,"");if(s.length===0)return o?[u,""]:[u];let h=Ib(s.join("/")),d=[];return d.push(...h.map(m=>m===""?u:[u,m].join("/"))),o&&d.push(...h),d.map(m=>n.startsWith("/")&&m===""?"/":m)}function U1(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:$1(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var z1=/^:[\w-]+$/,B1=3,j1=2,F1=1,q1=10,H1=-2,cT=n=>n==="*";function G1(n,e){let t=n.split("/"),s=t.length;return t.some(cT)&&(s+=H1),e&&(s+=j1),t.filter(o=>!cT(o)).reduce((o,u)=>o+(z1.test(u)?B1:u===""?F1:q1),s)}function $1(n,e){return n.length===e.length&&n.slice(0,-1).every((s,o)=>s===e[o])?n[n.length-1]-e[e.length-1]:0}function K1(n,e,t=!1){let{routesMeta:s}=n,o={},u="/",h=[];for(let d=0;d<s.length;++d){let m=s[d],y=d===s.length-1,E=u==="/"?e:e.slice(u.length)||"/",b=lf({path:m.relativePath,caseSensitive:m.caseSensitive,end:y},E),w=m.route;if(!b&&y&&t&&!s[s.length-1].route.index&&(b=lf({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},E)),!b)return null;Object.assign(o,b.params),h.push({params:o,pathname:gi([u,b.pathname]),pathnameBase:J1(gi([u,b.pathnameBase])),route:w}),b.pathnameBase!=="/"&&(u=gi([u,b.pathnameBase]))}return h}function lf(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,s]=Q1(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let u=o[0],h=u.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:s.reduce((y,{paramName:E,isOptional:b},w)=>{if(E==="*"){let k=d[w]||"";h=u.slice(0,u.length-k.length).replace(/(.)\/+$/,"$1")}const O=d[w];return b&&!O?y[E]=void 0:y[E]=(O||"").replace(/%2F/g,"/"),y},{}),pathname:u,pathnameBase:h,pattern:n}}function Q1(n,e=!1,t=!0){sr(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let s=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,d,m)=>(s.push({paramName:d,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(s.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function Y1(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return sr(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function yi(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=n.charAt(t);return s&&s!=="/"?null:n.slice(t)||"/"}function X1(n,e="/"){let{pathname:t,search:s="",hash:o=""}=typeof n=="string"?Ko(n):n;return{pathname:t?t.startsWith("/")?t:W1(t,e):e,search:eC(s),hash:tC(o)}}function W1(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function hm(n,e,t,s){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Z1(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Cb(n){let e=Z1(n);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function Nb(n,e,t,s=!1){let o;typeof n=="string"?o=Ko(n):(o={...n},st(!o.pathname||!o.pathname.includes("?"),hm("?","pathname","search",o)),st(!o.pathname||!o.pathname.includes("#"),hm("#","pathname","hash",o)),st(!o.search||!o.search.includes("#"),hm("#","search","hash",o)));let u=n===""||o.pathname==="",h=u?"/":o.pathname,d;if(h==null)d=t;else{let b=e.length-1;if(!s&&h.startsWith("..")){let w=h.split("/");for(;w[0]==="..";)w.shift(),b-=1;o.pathname=w.join("/")}d=b>=0?e[b]:"/"}let m=X1(o,d),y=h&&h!=="/"&&h.endsWith("/"),E=(u||h===".")&&t.endsWith("/");return!m.pathname.endsWith("/")&&(y||E)&&(m.pathname+="/"),m}var gi=n=>n.join("/").replace(/\/\/+/g,"/"),J1=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),eC=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,tC=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function nC(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var Db=["POST","PUT","PATCH","DELETE"];new Set(Db);var rC=["GET",...Db];new Set(rC);var Qo=j.createContext(null);Qo.displayName="DataRouter";var Of=j.createContext(null);Of.displayName="DataRouterState";j.createContext(!1);var Ob=j.createContext({isTransitioning:!1});Ob.displayName="ViewTransition";var iC=j.createContext(new Map);iC.displayName="Fetchers";var sC=j.createContext(null);sC.displayName="Await";var kr=j.createContext(null);kr.displayName="Navigation";var Qu=j.createContext(null);Qu.displayName="Location";var Vr=j.createContext({outlet:null,matches:[],isDataRoute:!1});Vr.displayName="Route";var Sg=j.createContext(null);Sg.displayName="RouteError";function aC(n,{relative:e}={}){st(Yu(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=j.useContext(kr),{hash:o,pathname:u,search:h}=Xu(n,{relative:e}),d=u;return t!=="/"&&(d=u==="/"?t:gi([t,u])),s.createHref({pathname:d,search:h,hash:o})}function Yu(){return j.useContext(Qu)!=null}function lr(){return st(Yu(),"useLocation() may be used only in the context of a <Router> component."),j.useContext(Qu).location}var Mb="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function xb(n){j.useContext(kr).static||j.useLayoutEffect(n)}function Pb(){let{isDataRoute:n}=j.useContext(Vr);return n?vC():oC()}function oC(){st(Yu(),"useNavigate() may be used only in the context of a <Router> component.");let n=j.useContext(Qo),{basename:e,navigator:t}=j.useContext(kr),{matches:s}=j.useContext(Vr),{pathname:o}=lr(),u=JSON.stringify(Cb(s)),h=j.useRef(!1);return xb(()=>{h.current=!0}),j.useCallback((m,y={})=>{if(sr(h.current,Mb),!h.current)return;if(typeof m=="number"){t.go(m);return}let E=Nb(m,JSON.parse(u),o,y.relative==="path");n==null&&e!=="/"&&(E.pathname=E.pathname==="/"?e:gi([e,E.pathname])),(y.replace?t.replace:t.push)(E,y.state,y)},[e,t,u,o,n])}j.createContext(null);function p6(){let{matches:n}=j.useContext(Vr),e=n[n.length-1];return e?e.params:{}}function Xu(n,{relative:e}={}){let{matches:t}=j.useContext(Vr),{pathname:s}=lr(),o=JSON.stringify(Cb(t));return j.useMemo(()=>Nb(n,JSON.parse(o),s,e==="path"),[n,o,s,e])}function lC(n,e){return kb(n,e)}function kb(n,e,t,s){st(Yu(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=j.useContext(kr),{matches:u}=j.useContext(Vr),h=u[u.length-1],d=h?h.params:{},m=h?h.pathname:"/",y=h?h.pathnameBase:"/",E=h&&h.route;{let G=E&&E.path||"";Vb(m,!E||G.endsWith("*")||G.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${G}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${G}"> to <Route path="${G==="/"?"*":`${G}/*`}">.`)}let b=lr(),w;if(e){let G=typeof e=="string"?Ko(e):e;st(y==="/"||G.pathname?.startsWith(y),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${G.pathname}" was given in the \`location\` prop.`),w=G}else w=b;let O=w.pathname||"/",k=O;if(y!=="/"){let G=y.replace(/^\//,"").split("/");k="/"+O.replace(/^\//,"").split("/").slice(G.length).join("/")}let F=Sb(n,{pathname:k});sr(E||F!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),sr(F==null||F[F.length-1].route.element!==void 0||F[F.length-1].route.Component!==void 0||F[F.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let V=dC(F&&F.map(G=>Object.assign({},G,{params:Object.assign({},d,G.params),pathname:gi([y,o.encodeLocation?o.encodeLocation(G.pathname).pathname:G.pathname]),pathnameBase:G.pathnameBase==="/"?y:gi([y,o.encodeLocation?o.encodeLocation(G.pathnameBase).pathname:G.pathnameBase])})),u,t,s);return e&&V?j.createElement(Qu.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...w},navigationType:"POP"}},V):V}function uC(){let n=_C(),e=nC(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},u={padding:"2px 4px",backgroundColor:s},h=null;return console.error("Error handled by React Router default ErrorBoundary:",n),h=j.createElement(j.Fragment,null,j.createElement("p",null,"💿 Hey developer 👋"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:u},"ErrorBoundary")," or"," ",j.createElement("code",{style:u},"errorElement")," prop on your route.")),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},e),t?j.createElement("pre",{style:o},t):null,h)}var cC=j.createElement(uC,null),hC=class extends j.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?j.createElement(Vr.Provider,{value:this.props.routeContext},j.createElement(Sg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function fC({routeContext:n,match:e,children:t}){let s=j.useContext(Qo);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),j.createElement(Vr.Provider,{value:n},t)}function dC(n,e=[],t=null,s=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let o=n,u=t?.errors;if(u!=null){let m=o.findIndex(y=>y.route.id&&u?.[y.route.id]!==void 0);st(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),o=o.slice(0,Math.min(o.length,m+1))}let h=!1,d=-1;if(t)for(let m=0;m<o.length;m++){let y=o[m];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(d=m),y.route.id){let{loaderData:E,errors:b}=t,w=y.route.loader&&!E.hasOwnProperty(y.route.id)&&(!b||b[y.route.id]===void 0);if(y.route.lazy||w){h=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((m,y,E)=>{let b,w=!1,O=null,k=null;t&&(b=u&&y.route.id?u[y.route.id]:void 0,O=y.route.errorElement||cC,h&&(d<0&&E===0?(Vb("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,k=null):d===E&&(w=!0,k=y.route.hydrateFallbackElement||null)));let F=e.concat(o.slice(0,E+1)),V=()=>{let G;return b?G=O:w?G=k:y.route.Component?G=j.createElement(y.route.Component,null):y.route.element?G=y.route.element:G=m,j.createElement(fC,{match:y,routeContext:{outlet:m,matches:F,isDataRoute:t!=null},children:G})};return t&&(y.route.ErrorBoundary||y.route.errorElement||E===0)?j.createElement(hC,{location:t.location,revalidation:t.revalidation,component:O,error:b,children:V(),routeContext:{outlet:null,matches:F,isDataRoute:!0}}):V()},null)}function Rg(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function pC(n){let e=j.useContext(Qo);return st(e,Rg(n)),e}function mC(n){let e=j.useContext(Of);return st(e,Rg(n)),e}function gC(n){let e=j.useContext(Vr);return st(e,Rg(n)),e}function Ig(n){let e=gC(n),t=e.matches[e.matches.length-1];return st(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function yC(){return Ig("useRouteId")}function _C(){let n=j.useContext(Sg),e=mC("useRouteError"),t=Ig("useRouteError");return n!==void 0?n:e.errors?.[t]}function vC(){let{router:n}=pC("useNavigate"),e=Ig("useNavigate"),t=j.useRef(!1);return xb(()=>{t.current=!0}),j.useCallback(async(o,u={})=>{sr(t.current,Mb),t.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:e,...u}))},[n,e])}var hT={};function Vb(n,e,t){!e&&!hT[n]&&(hT[n]=!0,sr(!1,t))}j.memo(EC);function EC({routes:n,future:e,state:t}){return kb(n,void 0,t,e)}function on(n){st(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function TC({basename:n="/",children:e=null,location:t,navigationType:s="POP",navigator:o,static:u=!1}){st(!Yu(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=n.replace(/^\/*/,"/"),d=j.useMemo(()=>({basename:h,navigator:o,static:u,future:{}}),[h,o,u]);typeof t=="string"&&(t=Ko(t));let{pathname:m="/",search:y="",hash:E="",state:b=null,key:w="default"}=t,O=j.useMemo(()=>{let k=yi(m,h);return k==null?null:{location:{pathname:k,search:y,hash:E,state:b,key:w},navigationType:s}},[h,m,y,E,b,w,s]);return sr(O!=null,`<Router basename="${h}"> is not able to match the URL "${m}${y}${E}" because it does not start with the basename, so the <Router> won't render anything.`),O==null?null:j.createElement(kr.Provider,{value:d},j.createElement(Qu.Provider,{children:e,value:O}))}function bC({children:n,location:e}){return lC(Bm(n),e)}function Bm(n,e=[]){let t=[];return j.Children.forEach(n,(s,o)=>{if(!j.isValidElement(s))return;let u=[...e,o];if(s.type===j.Fragment){t.push.apply(t,Bm(s.props.children,u));return}st(s.type===on,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),st(!s.props.index||!s.props.children,"An index route cannot have child routes.");let h={id:s.props.id||u.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(h.children=Bm(s.props.children,u)),t.push(h)}),t}var Kh="get",Qh="application/x-www-form-urlencoded";function Mf(n){return n!=null&&typeof n.tagName=="string"}function wC(n){return Mf(n)&&n.tagName.toLowerCase()==="button"}function AC(n){return Mf(n)&&n.tagName.toLowerCase()==="form"}function SC(n){return Mf(n)&&n.tagName.toLowerCase()==="input"}function RC(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function IC(n,e){return n.button===0&&(!e||e==="_self")&&!RC(n)}function jm(n=""){return new URLSearchParams(typeof n=="string"||Array.isArray(n)||n instanceof URLSearchParams?n:Object.keys(n).reduce((e,t)=>{let s=n[t];return e.concat(Array.isArray(s)?s.map(o=>[t,o]):[[t,s]])},[]))}function CC(n,e){let t=jm(n);return e&&e.forEach((s,o)=>{t.has(o)||e.getAll(o).forEach(u=>{t.append(o,u)})}),t}var Vh=null;function NC(){if(Vh===null)try{new FormData(document.createElement("form"),0),Vh=!1}catch{Vh=!0}return Vh}var DC=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function fm(n){return n!=null&&!DC.has(n)?(sr(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Qh}"`),null):n}function OC(n,e){let t,s,o,u,h;if(AC(n)){let d=n.getAttribute("action");s=d?yi(d,e):null,t=n.getAttribute("method")||Kh,o=fm(n.getAttribute("enctype"))||Qh,u=new FormData(n)}else if(wC(n)||SC(n)&&(n.type==="submit"||n.type==="image")){let d=n.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=n.getAttribute("formaction")||d.getAttribute("action");if(s=m?yi(m,e):null,t=n.getAttribute("formmethod")||d.getAttribute("method")||Kh,o=fm(n.getAttribute("formenctype"))||fm(d.getAttribute("enctype"))||Qh,u=new FormData(d,n),!NC()){let{name:y,type:E,value:b}=n;if(E==="image"){let w=y?`${y}.`:"";u.append(`${w}x`,"0"),u.append(`${w}y`,"0")}else y&&u.append(y,b)}}else{if(Mf(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Kh,s=null,o=Qh,h=n}return u&&o==="text/plain"&&(h=u,u=void 0),{action:s,method:t.toLowerCase(),encType:o,formData:u,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Cg(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function MC(n,e,t){let s=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return s.pathname==="/"?s.pathname=`_root.${t}`:e&&yi(s.pathname,e)==="/"?s.pathname=`${e.replace(/\/$/,"")}/_root.${t}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${t}`,s}async function xC(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function PC(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function kC(n,e,t){let s=await Promise.all(n.map(async o=>{let u=e.routes[o.route.id];if(u){let h=await xC(u,t);return h.links?h.links():[]}return[]}));return zC(s.flat(1).filter(PC).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function fT(n,e,t,s,o,u){let h=(m,y)=>t[y]?m.route.id!==t[y].route.id:!0,d=(m,y)=>t[y].pathname!==m.pathname||t[y].route.path?.endsWith("*")&&t[y].params["*"]!==m.params["*"];return u==="assets"?e.filter((m,y)=>h(m,y)||d(m,y)):u==="data"?e.filter((m,y)=>{let E=s.routes[m.route.id];if(!E||!E.hasLoader)return!1;if(h(m,y)||d(m,y))return!0;if(m.route.shouldRevalidate){let b=m.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:t[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof b=="boolean")return b}return!0}):[]}function VC(n,e,{includeHydrateFallback:t}={}){return LC(n.map(s=>{let o=e.routes[s.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function LC(n){return[...new Set(n)]}function UC(n){let e={},t=Object.keys(n).sort();for(let s of t)e[s]=n[s];return e}function zC(n,e){let t=new Set;return new Set(e),n.reduce((s,o)=>{let u=JSON.stringify(UC(o));return t.has(u)||(t.add(u),s.push({key:u,link:o})),s},[])}function Lb(){let n=j.useContext(Qo);return Cg(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function BC(){let n=j.useContext(Of);return Cg(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Ng=j.createContext(void 0);Ng.displayName="FrameworkContext";function Ub(){let n=j.useContext(Ng);return Cg(n,"You must render this element inside a <HydratedRouter> element"),n}function jC(n,e){let t=j.useContext(Ng),[s,o]=j.useState(!1),[u,h]=j.useState(!1),{onFocus:d,onBlur:m,onMouseEnter:y,onMouseLeave:E,onTouchStart:b}=e,w=j.useRef(null);j.useEffect(()=>{if(n==="render"&&h(!0),n==="viewport"){let F=G=>{G.forEach(Z=>{h(Z.isIntersecting)})},V=new IntersectionObserver(F,{threshold:.5});return w.current&&V.observe(w.current),()=>{V.disconnect()}}},[n]),j.useEffect(()=>{if(s){let F=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(F)}}},[s]);let O=()=>{o(!0)},k=()=>{o(!1),h(!1)};return t?n!=="intent"?[u,w,{}]:[u,w,{onFocus:du(d,O),onBlur:du(m,k),onMouseEnter:du(y,O),onMouseLeave:du(E,k),onTouchStart:du(b,O)}]:[!1,w,{}]}function du(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function FC({page:n,...e}){let{router:t}=Lb(),s=j.useMemo(()=>Sb(t.routes,n,t.basename),[t.routes,n,t.basename]);return s?j.createElement(HC,{page:n,matches:s,...e}):null}function qC(n){let{manifest:e,routeModules:t}=Ub(),[s,o]=j.useState([]);return j.useEffect(()=>{let u=!1;return kC(n,e,t).then(h=>{u||o(h)}),()=>{u=!0}},[n,e,t]),s}function HC({page:n,matches:e,...t}){let s=lr(),{manifest:o,routeModules:u}=Ub(),{basename:h}=Lb(),{loaderData:d,matches:m}=BC(),y=j.useMemo(()=>fT(n,e,m,o,s,"data"),[n,e,m,o,s]),E=j.useMemo(()=>fT(n,e,m,o,s,"assets"),[n,e,m,o,s]),b=j.useMemo(()=>{if(n===s.pathname+s.search+s.hash)return[];let k=new Set,F=!1;if(e.forEach(G=>{let Z=o.routes[G.route.id];!Z||!Z.hasLoader||(!y.some(K=>K.route.id===G.route.id)&&G.route.id in d&&u[G.route.id]?.shouldRevalidate||Z.hasClientLoader?F=!0:k.add(G.route.id))}),k.size===0)return[];let V=MC(n,h,"data");return F&&k.size>0&&V.searchParams.set("_routes",e.filter(G=>k.has(G.route.id)).map(G=>G.route.id).join(",")),[V.pathname+V.search]},[h,d,s,o,y,e,n,u]),w=j.useMemo(()=>VC(E,o),[E,o]),O=qC(E);return j.createElement(j.Fragment,null,b.map(k=>j.createElement("link",{key:k,rel:"prefetch",as:"fetch",href:k,...t})),w.map(k=>j.createElement("link",{key:k,rel:"modulepreload",href:k,...t})),O.map(({key:k,link:F})=>j.createElement("link",{key:k,nonce:t.nonce,...F})))}function GC(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var zb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{zb&&(window.__reactRouterVersion="7.8.0")}catch{}function $C({basename:n,children:e,window:t}){let s=j.useRef();s.current==null&&(s.current=x1({window:t,v5Compat:!0}));let o=s.current,[u,h]=j.useState({action:o.action,location:o.location}),d=j.useCallback(m=>{j.startTransition(()=>h(m))},[h]);return j.useLayoutEffect(()=>o.listen(d),[o,d]),j.createElement(TC,{basename:n,children:e,location:u.location,navigationType:u.action,navigator:o})}var Bb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,wu=j.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:o,reloadDocument:u,replace:h,state:d,target:m,to:y,preventScrollReset:E,viewTransition:b,...w},O){let{basename:k}=j.useContext(kr),F=typeof y=="string"&&Bb.test(y),V,G=!1;if(typeof y=="string"&&F&&(V=y,zb))try{let R=new URL(window.location.href),N=y.startsWith("//")?new URL(R.protocol+y):new URL(y),D=yi(N.pathname,k);N.origin===R.origin&&D!=null?y=D+N.search+N.hash:G=!0}catch{sr(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let Z=aC(y,{relative:o}),[K,ie,se]=jC(s,w),he=XC(y,{replace:h,state:d,target:m,preventScrollReset:E,relative:o,viewTransition:b});function x(R){e&&e(R),R.defaultPrevented||he(R)}let S=j.createElement("a",{...w,...se,href:V||Z,onClick:G||u?e:x,ref:GC(O,ie),target:m,"data-discover":!F&&t==="render"?"true":void 0});return K&&!F?j.createElement(j.Fragment,null,S,j.createElement(FC,{page:Z})):S});wu.displayName="Link";var KC=j.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:o=!1,style:u,to:h,viewTransition:d,children:m,...y},E){let b=Xu(h,{relative:y.relative}),w=lr(),O=j.useContext(Of),{navigator:k,basename:F}=j.useContext(kr),V=O!=null&&tN(b)&&d===!0,G=k.encodeLocation?k.encodeLocation(b).pathname:b.pathname,Z=w.pathname,K=O&&O.navigation&&O.navigation.location?O.navigation.location.pathname:null;t||(Z=Z.toLowerCase(),K=K?K.toLowerCase():null,G=G.toLowerCase()),K&&F&&(K=yi(K,F)||K);const ie=G!=="/"&&G.endsWith("/")?G.length-1:G.length;let se=Z===G||!o&&Z.startsWith(G)&&Z.charAt(ie)==="/",he=K!=null&&(K===G||!o&&K.startsWith(G)&&K.charAt(G.length)==="/"),x={isActive:se,isPending:he,isTransitioning:V},S=se?e:void 0,R;typeof s=="function"?R=s(x):R=[s,se?"active":null,he?"pending":null,V?"transitioning":null].filter(Boolean).join(" ");let N=typeof u=="function"?u(x):u;return j.createElement(wu,{...y,"aria-current":S,className:R,ref:E,style:N,to:h,viewTransition:d},typeof m=="function"?m(x):m)});KC.displayName="NavLink";var QC=j.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:o,state:u,method:h=Kh,action:d,onSubmit:m,relative:y,preventScrollReset:E,viewTransition:b,...w},O)=>{let k=JC(),F=eN(d,{relative:y}),V=h.toLowerCase()==="get"?"get":"post",G=typeof d=="string"&&Bb.test(d),Z=K=>{if(m&&m(K),K.defaultPrevented)return;K.preventDefault();let ie=K.nativeEvent.submitter,se=ie?.getAttribute("formmethod")||h;k(ie||K.currentTarget,{fetcherKey:e,method:se,navigate:t,replace:o,state:u,relative:y,preventScrollReset:E,viewTransition:b})};return j.createElement("form",{ref:O,method:V,action:F,onSubmit:s?m:Z,...w,"data-discover":!G&&n==="render"?"true":void 0})});QC.displayName="Form";function YC(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function jb(n){let e=j.useContext(Qo);return st(e,YC(n)),e}function XC(n,{target:e,replace:t,state:s,preventScrollReset:o,relative:u,viewTransition:h}={}){let d=Pb(),m=lr(),y=Xu(n,{relative:u});return j.useCallback(E=>{if(IC(E,e)){E.preventDefault();let b=t!==void 0?t:ku(m)===ku(y);d(n,{replace:b,state:s,preventScrollReset:o,relative:u,viewTransition:h})}},[m,d,y,t,s,e,n,o,u,h])}function m6(n){sr(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let e=j.useRef(jm(n)),t=j.useRef(!1),s=lr(),o=j.useMemo(()=>CC(s.search,t.current?null:e.current),[s.search]),u=Pb(),h=j.useCallback((d,m)=>{const y=jm(typeof d=="function"?d(new URLSearchParams(o)):d);t.current=!0,u("?"+y,m)},[u,o]);return[o,h]}var WC=0,ZC=()=>`__${String(++WC)}__`;function JC(){let{router:n}=jb("useSubmit"),{basename:e}=j.useContext(kr),t=yC();return j.useCallback(async(s,o={})=>{let{action:u,method:h,encType:d,formData:m,body:y}=OC(s,e);if(o.navigate===!1){let E=o.fetcherKey||ZC();await n.fetch(E,t,o.action||u,{preventScrollReset:o.preventScrollReset,formData:m,body:y,formMethod:o.method||h,formEncType:o.encType||d,flushSync:o.flushSync})}else await n.navigate(o.action||u,{preventScrollReset:o.preventScrollReset,formData:m,body:y,formMethod:o.method||h,formEncType:o.encType||d,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,e,t])}function eN(n,{relative:e}={}){let{basename:t}=j.useContext(kr),s=j.useContext(Vr);st(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),u={...Xu(n||".",{relative:e})},h=lr();if(n==null){u.search=h.search;let d=new URLSearchParams(u.search),m=d.getAll("index");if(m.some(E=>E==="")){d.delete("index"),m.filter(b=>b).forEach(b=>d.append("index",b));let E=d.toString();u.search=E?`?${E}`:""}}return(!n||n===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(u.pathname=u.pathname==="/"?t:gi([t,u.pathname])),ku(u)}function tN(n,{relative:e}={}){let t=j.useContext(Ob);st(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=jb("useViewTransitionState"),o=Xu(n,{relative:e});if(!t.isTransitioning)return!1;let u=yi(t.currentLocation.pathname,s)||t.currentLocation.pathname,h=yi(t.nextLocation.pathname,s)||t.nextLocation.pathname;return lf(o.pathname,h)!=null||lf(o.pathname,u)!=null}const nN=()=>{};var dT={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fb=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let o=n.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},rN=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const o=n[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=n[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=n[t++],h=n[t++],d=n[t++],m=((o&7)<<18|(u&63)<<12|(h&63)<<6|d&63)-65536;e[s++]=String.fromCharCode(55296+(m>>10)),e[s++]=String.fromCharCode(56320+(m&1023))}else{const u=n[t++],h=n[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},qb={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<n.length;o+=3){const u=n[o],h=o+1<n.length,d=h?n[o+1]:0,m=o+2<n.length,y=m?n[o+2]:0,E=u>>2,b=(u&3)<<4|d>>4;let w=(d&15)<<2|y>>6,O=y&63;m||(O=64,h||(w=64)),s.push(t[E],t[b],t[w],t[O])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Fb(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):rN(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<n.length;){const u=t[n.charAt(o++)],d=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const b=o<n.length?t[n.charAt(o)]:64;if(++o,u==null||d==null||y==null||b==null)throw new iN;const w=u<<2|d>>4;if(s.push(w),y!==64){const O=d<<4&240|y>>2;if(s.push(O),b!==64){const k=y<<6&192|b;s.push(k)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class iN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sN=function(n){const e=Fb(n);return qb.encodeByteArray(e,!0)},uf=function(n){return sN(n).replace(/\./g,"")},Hb=function(n){try{return qb.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oN=()=>aN().__FIREBASE_DEFAULTS__,lN=()=>{if(typeof process>"u"||typeof dT>"u")return;const n=dT.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},uN=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Hb(n[1]);return e&&JSON.parse(e)},xf=()=>{try{return nN()||oN()||lN()||uN()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Gb=n=>xf()?.emulatorHosts?.[n],$b=n=>{const e=Gb(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Kb=()=>xf()?.config,Qb=n=>xf()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cN{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Dg(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yb(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=n.iat||0,u=n.sub||n.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...n};return[uf(JSON.stringify(t)),uf(JSON.stringify(h)),""].join(".")}const Au={};function hN(){const n={prod:[],emulator:[]};for(const e of Object.keys(Au))Au[e]?n.emulator.push(e):n.prod.push(e);return n}function fN(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let pT=!1;function Og(n,e){if(typeof window>"u"||typeof document>"u"||!Cs(window.location.host)||Au[n]===e||Au[n]||pT)return;Au[n]=e;function t(w){return`__firebase__banner__${w}`}const s="__firebase__banner",u=hN().prod.length>0;function h(){const w=document.getElementById(s);w&&w.remove()}function d(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function m(w,O){w.setAttribute("width","24"),w.setAttribute("id",O),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function y(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{pT=!0,h()},w}function E(w,O){w.setAttribute("id",O),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function b(){const w=fN(s),O=t("text"),k=document.getElementById(O)||document.createElement("span"),F=t("learnmore"),V=document.getElementById(F)||document.createElement("a"),G=t("preprendIcon"),Z=document.getElementById(G)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const K=w.element;d(K),E(V,F);const ie=y();m(Z,G),K.append(Z,k,V,ie),document.body.appendChild(K)}u?(k.innerText="Preview backend disconnected.",Z.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(Z.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",O)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",b):b()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dN(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(en())}function pN(){const n=xf()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function mN(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Xb(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function gN(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yN(){const n=en();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function _N(){return!pN()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Mg(){try{return typeof indexedDB=="object"}catch{return!1}}function xg(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{e(o.error?.message||"")}}catch(t){e(t)}})}function Wb(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vN="FirebaseError";class Yn extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=vN,Object.setPrototypeOf(this,Yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ns.prototype.create)}}class Ns{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?EN(u,s):"Error",d=`${this.serviceName}: ${h} (${o}).`;return new Yn(o,d,s)}}function EN(n,e){return n.replace(TN,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const TN=/\{\$([^}]+)}/g;function bN(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function _s(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=n[o],h=e[o];if(mT(u)&&mT(h)){if(!_s(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function mT(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function yu(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function _u(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function wN(n,e){const t=new AN(n,e);return t.subscribe.bind(t)}class AN{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");SN(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=dm),o.error===void 0&&(o.error=dm),o.complete===void 0&&(o.complete=dm);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function SN(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function dm(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RN=1e3,IN=2,CN=14400*1e3,NN=.5;function gT(n,e=RN,t=IN){const s=e*Math.pow(t,n),o=Math.round(NN*s*(Math.random()-.5)*2);return Math.min(CN,s+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(n){return n&&n._delegate?n._delegate:n}class Nn{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new cN;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(MN(e))try{this.getOrInitializeService({instanceIdentifier:ya})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=ya){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ya){return this.instances.has(e)}getOptions(e=ya){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(u);s===d&&h.resolve(o)}return o}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&e(u,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:ON(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ya){return this.component?this.component.multipleInstances?e:ya:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ON(n){return n===ya?void 0:n}function MN(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new DN(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ie||(Ie={}));const PN={debug:Ie.DEBUG,verbose:Ie.VERBOSE,info:Ie.INFO,warn:Ie.WARN,error:Ie.ERROR,silent:Ie.SILENT},kN=Ie.INFO,VN={[Ie.DEBUG]:"log",[Ie.VERBOSE]:"log",[Ie.INFO]:"info",[Ie.WARN]:"warn",[Ie.ERROR]:"error"},LN=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),o=VN[e];if(o)console[o](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zu{constructor(e){this.name=e,this._logLevel=kN,this._logHandler=LN,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?PN[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ie.DEBUG,...e),this._logHandler(this,Ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ie.VERBOSE,...e),this._logHandler(this,Ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ie.INFO,...e),this._logHandler(this,Ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ie.WARN,...e),this._logHandler(this,Ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ie.ERROR,...e),this._logHandler(this,Ie.ERROR,...e)}}const UN=(n,e)=>e.some(t=>n instanceof t);let yT,_T;function zN(){return yT||(yT=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function BN(){return _T||(_T=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Zb=new WeakMap,Fm=new WeakMap,Jb=new WeakMap,pm=new WeakMap,Pg=new WeakMap;function jN(n){const e=new Promise((t,s)=>{const o=()=>{n.removeEventListener("success",u),n.removeEventListener("error",h)},u=()=>{t(fs(n.result)),o()},h=()=>{s(n.error),o()};n.addEventListener("success",u),n.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Zb.set(t,n)}).catch(()=>{}),Pg.set(e,n),e}function FN(n){if(Fm.has(n))return;const e=new Promise((t,s)=>{const o=()=>{n.removeEventListener("complete",u),n.removeEventListener("error",h),n.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",u),n.addEventListener("error",h),n.addEventListener("abort",h)});Fm.set(n,e)}let qm={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Fm.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Jb.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return fs(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function qN(n){qm=n(qm)}function HN(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(mm(this),e,...t);return Jb.set(s,e.sort?e.sort():[e]),fs(s)}:BN().includes(n)?function(...e){return n.apply(mm(this),e),fs(Zb.get(this))}:function(...e){return fs(n.apply(mm(this),e))}}function GN(n){return typeof n=="function"?HN(n):(n instanceof IDBTransaction&&FN(n),UN(n,zN())?new Proxy(n,qm):n)}function fs(n){if(n instanceof IDBRequest)return jN(n);if(pm.has(n))return pm.get(n);const e=GN(n);return e!==n&&(pm.set(n,e),Pg.set(e,n)),e}const mm=n=>Pg.get(n);function ew(n,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(n,e),d=fs(h);return s&&h.addEventListener("upgradeneeded",m=>{s(fs(h.result),m.oldVersion,m.newVersion,fs(h.transaction),m)}),t&&h.addEventListener("blocked",m=>t(m.oldVersion,m.newVersion,m)),d.then(m=>{u&&m.addEventListener("close",()=>u()),o&&m.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),d}const $N=["get","getKey","getAll","getAllKeys","count"],KN=["put","add","delete","clear"],gm=new Map;function vT(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(gm.get(e))return gm.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=KN.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||$N.includes(t)))return;const u=async function(h,...d){const m=this.transaction(h,o?"readwrite":"readonly");let y=m.store;return s&&(y=y.index(d.shift())),(await Promise.all([y[t](...d),o&&m.done]))[0]};return gm.set(e,u),u}qN(n=>({...n,get:(e,t,s)=>vT(e,t)||n.get(e,t,s),has:(e,t)=>!!vT(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(YN(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function YN(n){return n.getComponent()?.type==="VERSION"}const Hm="@firebase/app",ET="0.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i=new Zu("@firebase/app"),XN="@firebase/app-compat",WN="@firebase/analytics-compat",ZN="@firebase/analytics",JN="@firebase/app-check-compat",eD="@firebase/app-check",tD="@firebase/auth",nD="@firebase/auth-compat",rD="@firebase/database",iD="@firebase/data-connect",sD="@firebase/database-compat",aD="@firebase/functions",oD="@firebase/functions-compat",lD="@firebase/installations",uD="@firebase/installations-compat",cD="@firebase/messaging",hD="@firebase/messaging-compat",fD="@firebase/performance",dD="@firebase/performance-compat",pD="@firebase/remote-config",mD="@firebase/remote-config-compat",gD="@firebase/storage",yD="@firebase/storage-compat",_D="@firebase/firestore",vD="@firebase/ai",ED="@firebase/firestore-compat",TD="firebase",bD="12.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm="[DEFAULT]",wD={[Hm]:"fire-core",[XN]:"fire-core-compat",[ZN]:"fire-analytics",[WN]:"fire-analytics-compat",[eD]:"fire-app-check",[JN]:"fire-app-check-compat",[tD]:"fire-auth",[nD]:"fire-auth-compat",[rD]:"fire-rtdb",[iD]:"fire-data-connect",[sD]:"fire-rtdb-compat",[aD]:"fire-fn",[oD]:"fire-fn-compat",[lD]:"fire-iid",[uD]:"fire-iid-compat",[cD]:"fire-fcm",[hD]:"fire-fcm-compat",[fD]:"fire-perf",[dD]:"fire-perf-compat",[pD]:"fire-rc",[mD]:"fire-rc-compat",[gD]:"fire-gcs",[yD]:"fire-gcs-compat",[_D]:"fire-fst",[ED]:"fire-fst-compat",[vD]:"fire-vertex","fire-js":"fire-js",[TD]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf=new Map,AD=new Map,$m=new Map;function TT(n,e){try{n.container.addComponent(e)}catch(t){_i.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Kn(n){const e=n.name;if($m.has(e))return _i.debug(`There were multiple attempts to register component ${e}.`),!1;$m.set(e,n);for(const t of cf.values())TT(t,n);for(const t of AD.values())TT(t,n);return!0}function Ai(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ln(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SD={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ds=new Ns("app","Firebase",SD);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RD{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ds.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na=bD;function tw(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:Gm,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw ds.create("bad-app-name",{appName:String(o)});if(t||(t=Kb()),!t)throw ds.create("no-options");const u=cf.get(o);if(u){if(_s(t,u.options)&&_s(s,u.config))return u;throw ds.create("duplicate-app",{appName:o})}const h=new xN(o);for(const m of $m.values())h.addComponent(m);const d=new RD(t,s,h);return cf.set(o,d),d}function Ju(n=Gm){const e=cf.get(n);if(!e&&n===Gm&&Kb())return tw();if(!e)throw ds.create("no-app",{appName:n});return e}function Jt(n,e,t){let s=wD[n]??n;t&&(s+=`-${t}`);const o=s.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const h=[`Unable to register library "${s}" with version "${e}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&h.push("and"),u&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_i.warn(h.join(" "));return}Kn(new Nn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ID="firebase-heartbeat-database",CD=1,Vu="firebase-heartbeat-store";let ym=null;function nw(){return ym||(ym=ew(ID,CD,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Vu)}catch(t){console.warn(t)}}}}).catch(n=>{throw ds.create("idb-open",{originalErrorMessage:n.message})})),ym}async function ND(n){try{const t=(await nw()).transaction(Vu),s=await t.objectStore(Vu).get(rw(n));return await t.done,s}catch(e){if(e instanceof Yn)_i.warn(e.message);else{const t=ds.create("idb-get",{originalErrorMessage:e?.message});_i.warn(t.message)}}}async function bT(n,e){try{const s=(await nw()).transaction(Vu,"readwrite");await s.objectStore(Vu).put(e,rw(n)),await s.done}catch(t){if(t instanceof Yn)_i.warn(t.message);else{const s=ds.create("idb-set",{originalErrorMessage:t?.message});_i.warn(s.message)}}}function rw(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DD=1024,OD=30;class MD{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new PD(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=wT();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats.length>OD){const o=kD(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){_i.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=wT(),{heartbeatsToSend:t,unsentEntries:s}=xD(this._heartbeatsCache.heartbeats),o=uf(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return _i.warn(e),""}}}function wT(){return new Date().toISOString().substring(0,10)}function xD(n,e=DD){const t=[];let s=n.slice();for(const o of n){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),AT(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),AT(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class PD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Mg()?xg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ND(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return bT(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return bT(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function AT(n){return uf(JSON.stringify({version:2,heartbeats:n})).length}function kD(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VD(n){Kn(new Nn("platform-logger",e=>new QN(e),"PRIVATE")),Kn(new Nn("heartbeat",e=>new MD(e),"PRIVATE")),Jt(Hm,ET,n),Jt(Hm,ET,"esm2020"),Jt("fire-js","")}VD("");function iw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const LD=iw,sw=new Ns("auth","Firebase",iw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf=new Zu("@firebase/auth");function UD(n,...e){hf.logLevel<=Ie.WARN&&hf.warn(`Auth (${Na}): ${n}`,...e)}function Yh(n,...e){hf.logLevel<=Ie.ERROR&&hf.error(`Auth (${Na}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(n,...e){throw Vg(n,...e)}function ir(n,...e){return Vg(n,...e)}function kg(n,e,t){const s={...LD(),[e]:t};return new Ns("auth","Firebase",s).create(e,{appName:n.name})}function Cr(n){return kg(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function zD(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Qn(n,"argument-error"),kg(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Vg(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return sw.create(n,...e)}function ge(n,e,...t){if(!n)throw Vg(e,...t)}function pi(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Yh(e),new Error(e)}function vi(n,e){n||pi(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(){return typeof self<"u"&&self.location?.href||""}function BD(){return ST()==="http:"||ST()==="https:"}function ST(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(BD()||Xb()||"connection"in navigator)?navigator.onLine:!0}function FD(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,t){this.shortDelay=e,this.longDelay=t,vi(t>e,"Short delay should be less than long delay!"),this.isMobile=dN()||gN()}get(){return jD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(n,e){vi(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;pi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;pi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;pi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HD=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],GD=new ec(3e4,6e4);function Si(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Lr(n,e,t,s,o={}){return ow(n,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const d=Wu({key:n.config.apiKey,...h}).slice(1),m=await n._getAdditionalHeaders();m["Content-Type"]="application/json",n.languageCode&&(m["X-Firebase-Locale"]=n.languageCode);const y={method:e,headers:m,...u};return mN()||(y.referrerPolicy="no-referrer"),n.emulatorConfig&&Cs(n.emulatorConfig.host)&&(y.credentials="include"),aw.fetch()(await lw(n,n.config.apiHost,t,d),y)})}async function ow(n,e,t){n._canInitEmulator=!1;const s={...qD,...e};try{const o=new KD(n),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw Lh(n,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const d=u.ok?h.errorMessage:h.error.message,[m,y]=d.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw Lh(n,"credential-already-in-use",h);if(m==="EMAIL_EXISTS")throw Lh(n,"email-already-in-use",h);if(m==="USER_DISABLED")throw Lh(n,"user-disabled",h);const E=s[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw kg(n,E,y);Qn(n,E)}}catch(o){if(o instanceof Yn)throw o;Qn(n,"network-request-failed",{message:String(o)})}}async function tc(n,e,t,s,o={}){const u=await Lr(n,e,t,s,o);return"mfaPendingCredential"in u&&Qn(n,"multi-factor-auth-required",{_serverResponse:u}),u}async function lw(n,e,t,s){const o=`${e}${t}?${s}`,u=n,h=u.config.emulator?Lg(n.config,o):`${n.config.apiScheme}://${o}`;return HD.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}function $D(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class KD{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(ir(this.auth,"network-request-failed")),GD.get())})}}function Lh(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=ir(n,e,s);return o.customData._tokenResponse=t,o}function RT(n){return n!==void 0&&n.enterprise!==void 0}class QD{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return $D(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function YD(n,e){return Lr(n,"GET","/v2/recaptchaConfig",Si(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XD(n,e){return Lr(n,"POST","/v1/accounts:delete",e)}async function ff(n,e){return Lr(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function WD(n,e=!1){const t=We(n),s=await t.getIdToken(e),o=Ug(s);ge(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u?.sign_in_provider;return{claims:o,token:s,authTime:Su(_m(o.auth_time)),issuedAtTime:Su(_m(o.iat)),expirationTime:Su(_m(o.exp)),signInProvider:h||null,signInSecondFactor:u?.sign_in_second_factor||null}}function _m(n){return Number(n)*1e3}function Ug(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Yh("JWT malformed, contained fewer than 3 sections"),null;try{const o=Hb(t);return o?JSON.parse(o):(Yh("Failed to decode base64 JWT payload"),null)}catch(o){return Yh("Caught error parsing JWT payload as JSON",o?.toString()),null}}function IT(n){const e=Ug(n);return ge(e,"internal-error"),ge(typeof e.exp<"u","internal-error"),ge(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bo(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Yn&&ZD(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function ZD({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Su(this.lastLoginAt),this.creationTime=Su(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function df(n){const e=n.auth,t=await n.getIdToken(),s=await Bo(n,ff(e,{idToken:t}));ge(s?.users.length,e,"internal-error");const o=s.users[0];n._notifyReloadListener(o);const u=o.providerUserInfo?.length?uw(o.providerUserInfo):[],h=t2(n.providerData,u),d=n.isAnonymous,m=!(n.email&&o.passwordHash)&&!h?.length,y=d?m:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new Qm(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(n,E)}async function e2(n){const e=We(n);await df(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function t2(n,e){return[...n.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function uw(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n2(n,e){const t=await ow(n,{},async()=>{const s=Wu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=n.config,h=await lw(n,o,"/v1/token",`key=${u}`),d=await n._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:d,body:s};return n.emulatorConfig&&Cs(n.emulatorConfig.host)&&(m.credentials="include"),aw.fetch()(h,m)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function r2(n,e){return Lr(n,"POST","/v2/accounts:revokeToken",Si(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ge(e.idToken,"internal-error"),ge(typeof e.idToken<"u","internal-error"),ge(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):IT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ge(e.length!==0,"internal-error");const t=IT(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ge(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await n2(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new Mo;return s&&(ge(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(ge(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(ge(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Mo,this.toJSON())}_performRefresh(){return pi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(n,e){ge(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class rr{constructor({uid:e,auth:t,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new JD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Qm(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Bo(this,this.stsTokenManager.getToken(this.auth,e));return ge(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return WD(this,e)}reload(){return e2(this)}_assign(e){this!==e&&(ge(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new rr({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ge(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await df(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ln(this.auth.app))return Promise.reject(Cr(this.auth));const e=await this.getIdToken();return await Bo(this,XD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,o=t.email??void 0,u=t.phoneNumber??void 0,h=t.photoURL??void 0,d=t.tenantId??void 0,m=t._redirectEventId??void 0,y=t.createdAt??void 0,E=t.lastLoginAt??void 0,{uid:b,emailVerified:w,isAnonymous:O,providerData:k,stsTokenManager:F}=t;ge(b&&F,e,"internal-error");const V=Mo.fromJSON(this.name,F);ge(typeof b=="string",e,"internal-error"),ns(s,e.name),ns(o,e.name),ge(typeof w=="boolean",e,"internal-error"),ge(typeof O=="boolean",e,"internal-error"),ns(u,e.name),ns(h,e.name),ns(d,e.name),ns(m,e.name),ns(y,e.name),ns(E,e.name);const G=new rr({uid:b,auth:e,email:o,emailVerified:w,displayName:s,isAnonymous:O,photoURL:h,phoneNumber:u,tenantId:d,stsTokenManager:V,createdAt:y,lastLoginAt:E});return k&&Array.isArray(k)&&(G.providerData=k.map(Z=>({...Z}))),m&&(G._redirectEventId=m),G}static async _fromIdTokenResponse(e,t,s=!1){const o=new Mo;o.updateFromServerResponse(t);const u=new rr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await df(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];ge(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?uw(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!u?.length,d=new Mo;d.updateFromIdToken(s);const m=new rr({uid:o.localId,auth:e,stsTokenManager:d,isAnonymous:h}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Qm(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!u?.length};return Object.assign(m,y),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT=new Map;function mi(n){vi(n instanceof Function,"Expected a class definition");let e=CT.get(n);return e?(vi(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,CT.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}cw.type="NONE";const NT=cw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(n,e,t){return`firebase:${n}:${e}:${t}`}class xo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Xh(this.userKey,o.apiKey,u),this.fullPersistenceKey=Xh("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ff(this.auth,{idToken:e}).catch(()=>{});return t?rr._fromGetAccountInfoResponse(this.auth,t,e):null}return rr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new xo(mi(NT),e,s);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let u=o[0]||mi(NT);const h=Xh(s,e.config.apiKey,e.name);let d=null;for(const y of t)try{const E=await y._get(h);if(E){let b;if(typeof E=="string"){const w=await ff(e,{idToken:E}).catch(()=>{});if(!w)break;b=await rr._fromGetAccountInfoResponse(e,w,E)}else b=rr._fromJSON(e,E);y!==u&&(d=b),u=y;break}}catch{}const m=o.filter(y=>y._shouldAllowMigration);return!u._shouldAllowMigration||!m.length?new xo(u,e,s):(u=m[0],d&&await u._set(h,d.toJSON()),await Promise.all(t.map(async y=>{if(y!==u)try{await y._remove(h)}catch{}})),new xo(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DT(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gw(e))return"Blackberry";if(yw(e))return"Webos";if(fw(e))return"Safari";if((e.includes("chrome/")||dw(e))&&!e.includes("edge/"))return"Chrome";if(mw(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if(s?.length===2)return s[1]}return"Other"}function hw(n=en()){return/firefox\//i.test(n)}function fw(n=en()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dw(n=en()){return/crios\//i.test(n)}function pw(n=en()){return/iemobile/i.test(n)}function mw(n=en()){return/android/i.test(n)}function gw(n=en()){return/blackberry/i.test(n)}function yw(n=en()){return/webos/i.test(n)}function zg(n=en()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function i2(n=en()){return zg(n)&&!!window.navigator?.standalone}function s2(){return yN()&&document.documentMode===10}function _w(n=en()){return zg(n)||mw(n)||yw(n)||gw(n)||/windows phone/i.test(n)||pw(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vw(n,e=[]){let t;switch(n){case"Browser":t=DT(en());break;case"Worker":t=`${DT(en())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Na}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,d)=>{try{const m=e(u);h(m)}catch(m){d(m)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o2(n,e={}){return Lr(n,"GET","/v2/passwordPolicy",Si(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l2=6;class u2{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??l2,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c2{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new OT(this),this.idTokenSubscription=new OT(this),this.beforeStateQueue=new a2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=sw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=mi(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await xo.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ff(this,{idToken:e}),s=await rr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(ln(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(h,h))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=this.redirectUser?._redirectEventId,h=s?._redirectEventId,d=await this.tryRedirectSignIn(e);(!u||u===h)&&d?.user&&(s=d.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ge(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await df(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=FD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ln(this.app))return Promise.reject(Cr(this));const t=e?We(e):null;return t&&ge(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ge(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ln(this.app)?Promise.reject(Cr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ln(this.app)?Promise.reject(Cr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(mi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await o2(this),t=new u2(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ns("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await r2(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&mi(e)||this._popupRedirectResolver;ge(t,this,"argument-error"),this.redirectPersistenceManager=await xo.create(this,[mi(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(ge(d,this,"internal-error"),d.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const m=e.addObserver(t,s,o);return()=>{h=!0,m()}}else{const m=e.addObserver(t);return()=>{h=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ge(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(ln(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&UD(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Ur(n){return We(n)}class OT{constructor(e){this.auth=e,this.observer=null,this.addObserver=wN(t=>this.observer=t)}get next(){return ge(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function h2(n){Pf=n}function Ew(n){return Pf.loadJS(n)}function f2(){return Pf.recaptchaEnterpriseScript}function d2(){return Pf.gapiScript}function p2(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class m2{constructor(){this.enterprise=new g2}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class g2{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const y2="recaptcha-enterprise",Tw="NO_RECAPTCHA";class _2{constructor(e){this.type=y2,this.auth=Ur(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,d)=>{YD(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const y=new QD(m);return u.tenantId==null?u._agentRecaptchaConfig=y:u._tenantRecaptchaConfigs[u.tenantId]=y,h(y.siteKey)}}).catch(m=>{d(m)})})}function o(u,h,d){const m=window.grecaptcha;RT(m)?m.enterprise.ready(()=>{m.enterprise.execute(u,{action:e}).then(y=>{h(y)}).catch(()=>{h(Tw)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new m2().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{s(this.auth).then(d=>{if(!t&&RT(window.grecaptcha))o(d,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let m=f2();m.length!==0&&(m+=d),Ew(m).then(()=>{o(d,u,h)}).catch(y=>{h(y)})}}).catch(d=>{h(d)})})}}async function MT(n,e,t,s=!1,o=!1){const u=new _2(n);let h;if(o)h=Tw;else try{h=await u.verify(t)}catch{h=await u.verify(t,!0)}const d={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const m=d.phoneEnrollmentInfo.phoneNumber,y=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:y,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const m=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return s?Object.assign(d,{captchaResp:h}):Object.assign(d,{captchaResponse:h}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function pf(n,e,t,s,o){if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await MT(n,e,t,t==="getOobCode");return s(n,u)}else return s(n,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await MT(n,e,t,t==="getOobCode");return s(n,h)}else return Promise.reject(u)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v2(n,e){const t=Ai(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(_s(u,e??{}))return o;Qn(o,"already-initialized")}return t.initialize({options:e})}function E2(n,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(mi);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e?.popupRedirectResolver)}function T2(n,e,t){const s=Ur(n);ge(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=bw(e),{host:h,port:d}=b2(e),m=d===null?"":`:${d}`,y={url:`${u}//${h}${m}/`},E=Object.freeze({host:h,port:d,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){ge(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ge(_s(y,s.config.emulator)&&_s(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=y,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,Cs(h)?(Dg(`${u}//${h}${m}`),Og("Auth",!0)):w2()}function bw(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function b2(n){const e=bw(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:xT(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:xT(h)}}}function xT(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function w2(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return pi("not implemented")}_getIdTokenResponse(e){return pi("not implemented")}_linkToIdToken(e,t){return pi("not implemented")}_getReauthenticationResolver(e){return pi("not implemented")}}async function A2(n,e){return Lr(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S2(n,e){return tc(n,"POST","/v1/accounts:signInWithPassword",Si(n,e))}async function R2(n,e){return Lr(n,"POST","/v1/accounts:sendOobCode",Si(n,e))}async function I2(n,e){return R2(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C2(n,e){return tc(n,"POST","/v1/accounts:signInWithEmailLink",Si(n,e))}async function N2(n,e){return tc(n,"POST","/v1/accounts:signInWithEmailLink",Si(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu extends Bg{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Lu(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Lu(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pf(e,t,"signInWithPassword",S2);case"emailLink":return C2(e,{email:this._email,oobCode:this._password});default:Qn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pf(e,s,"signUpPassword",A2);case"emailLink":return N2(e,{idToken:t,email:this._email,oobCode:this._password});default:Qn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Po(n,e){return tc(n,"POST","/v1/accounts:signInWithIdp",Si(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D2="http://localhost";class wa extends Bg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new wa(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Qn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...u}=t;if(!s||!o)return null;const h=new wa(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Po(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Po(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Po(e,t)}buildRequest(){const e={requestUri:D2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Wu(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O2(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function M2(n){const e=yu(_u(n)).link,t=e?yu(_u(e)).deep_link_id:null,s=yu(_u(n)).deep_link_id;return(s?yu(_u(s)).link:null)||s||t||e||n}class jg{constructor(e){const t=yu(_u(e)),s=t.apiKey??null,o=t.oobCode??null,u=O2(t.mode??null);ge(s&&o&&u,"argument-error"),this.apiKey=s,this.operation=u,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=M2(e);try{return new jg(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(){this.providerId=Yo.PROVIDER_ID}static credential(e,t){return Lu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=jg.parseLink(t);return ge(s,"argument-error"),Lu._fromEmailAndCode(e,s.code,s.tenantId)}}Yo.PROVIDER_ID="password";Yo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Yo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc extends Fg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss extends nc{constructor(){super("facebook.com")}static credential(e){return wa._fromParams({providerId:ss.PROVIDER_ID,signInMethod:ss.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ss.credentialFromTaggedObject(e)}static credentialFromError(e){return ss.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ss.credential(e.oauthAccessToken)}catch{return null}}}ss.FACEBOOK_SIGN_IN_METHOD="facebook.com";ss.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di extends nc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return wa._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return di.credentialFromTaggedObject(e)}static credentialFromError(e){return di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return di.credential(t,s)}catch{return null}}}di.GOOGLE_SIGN_IN_METHOD="google.com";di.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as extends nc{constructor(){super("github.com")}static credential(e){return wa._fromParams({providerId:as.PROVIDER_ID,signInMethod:as.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return as.credentialFromTaggedObject(e)}static credentialFromError(e){return as.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return as.credential(e.oauthAccessToken)}catch{return null}}}as.GITHUB_SIGN_IN_METHOD="github.com";as.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os extends nc{constructor(){super("twitter.com")}static credential(e,t){return wa._fromParams({providerId:os.PROVIDER_ID,signInMethod:os.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return os.credentialFromTaggedObject(e)}static credentialFromError(e){return os.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return os.credential(t,s)}catch{return null}}}os.TWITTER_SIGN_IN_METHOD="twitter.com";os.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ww(n,e){return tc(n,"POST","/v1/accounts:signUp",Si(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await rr._fromIdTokenResponse(e,s,o),h=PT(s);return new Ei({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=PT(s);return new Ei({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function PT(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x2(n){if(ln(n.app))return Promise.reject(Cr(n));const e=Ur(n);if(await e._initializationPromise,e.currentUser?.isAnonymous)return new Ei({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await ww(e,{returnSecureToken:!0}),s=await Ei._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf extends Yn{constructor(e,t,s,o){super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,mf.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new mf(e,t,s,o)}}function Aw(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?mf._fromErrorAndOperation(n,u,e,s):u})}async function P2(n,e,t=!1){const s=await Bo(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ei._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k2(n,e,t=!1){const{auth:s}=n;if(ln(s.app))return Promise.reject(Cr(s));const o="reauthenticate";try{const u=await Bo(n,Aw(s,o,e,n),t);ge(u.idToken,s,"internal-error");const h=Ug(u.idToken);ge(h,s,"internal-error");const{sub:d}=h;return ge(n.uid===d,s,"user-mismatch"),Ei._forOperation(n,o,u)}catch(u){throw u?.code==="auth/user-not-found"&&Qn(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sw(n,e,t=!1){if(ln(n.app))return Promise.reject(Cr(n));const s="signIn",o=await Aw(n,s,e),u=await Ei._fromIdTokenResponse(n,s,o);return t||await n._updateCurrentUser(u.user),u}async function V2(n,e){return Sw(Ur(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rw(n){const e=Ur(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function L2(n,e,t){const s=Ur(n);await pf(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",I2)}async function U2(n,e,t){if(ln(n.app))return Promise.reject(Cr(n));const s=Ur(n),h=await pf(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ww).catch(m=>{throw m.code==="auth/password-does-not-meet-requirements"&&Rw(n),m}),d=await Ei._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(d.user),d}function z2(n,e,t){return ln(n.app)?Promise.reject(Cr(n)):V2(We(n),Yo.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Rw(n),s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B2(n,e){return Lr(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j2(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=We(n),u={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},h=await Bo(s,B2(s.auth,u));s.displayName=h.displayName||null,s.photoURL=h.photoUrl||null;const d=s.providerData.find(({providerId:m})=>m==="password");d&&(d.displayName=s.displayName,d.photoURL=s.photoURL),await s._updateTokensIfNecessary(h)}function F2(n,e,t,s){return We(n).onIdTokenChanged(e,t,s)}function q2(n,e,t){return We(n).beforeAuthStateChanged(e,t)}function H2(n,e,t,s){return We(n).onAuthStateChanged(e,t,s)}function G2(n){return We(n).signOut()}const gf="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(gf,"1"),this.storage.removeItem(gf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $2=1e3,K2=10;class Cw extends Iw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=_w(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,d,m)=>{this.notifyListeners(h,m)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);s2()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,K2):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},$2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Cw.type="LOCAL";const Q2=Cw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw extends Iw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Nw.type="SESSION";const Dw=Nw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y2(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new kf(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!h?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const d=Array.from(h).map(async y=>y(t.origin,u)),m=await Y2(d);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}kf.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((d,m)=>{const y=qg("",20);o.port1.start();const E=setTimeout(()=>{m(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(b){const w=b;if(w.data.eventId===y)switch(w.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),d(w.data.response);break;default:clearTimeout(E),clearTimeout(u),m(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(){return window}function W2(n){Nr().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ow(){return typeof Nr().WorkerGlobalScope<"u"&&typeof Nr().importScripts=="function"}async function Z2(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function J2(){return navigator?.serviceWorker?.controller||null}function eO(){return Ow()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mw="firebaseLocalStorageDb",tO=1,yf="firebaseLocalStorage",xw="fbase_key";class rc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Vf(n,e){return n.transaction([yf],e?"readwrite":"readonly").objectStore(yf)}function nO(){const n=indexedDB.deleteDatabase(Mw);return new rc(n).toPromise()}function Ym(){const n=indexedDB.open(Mw,tO);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(yf,{keyPath:xw})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(yf)?e(s):(s.close(),await nO(),e(await Ym()))})})}async function kT(n,e,t){const s=Vf(n,!0).put({[xw]:e,value:t});return new rc(s).toPromise()}async function rO(n,e){const t=Vf(n,!1).get(e),s=await new rc(t).toPromise();return s===void 0?null:s.value}function VT(n,e){const t=Vf(n,!0).delete(e);return new rc(t).toPromise()}const iO=800,sO=3;class Pw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ym(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>sO)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ow()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=kf._getInstance(eO()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Z2(),!this.activeServiceWorker)return;this.sender=new X2(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||J2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ym();return await kT(e,gf,"1"),await VT(e,gf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>kT(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>rO(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>VT(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=Vf(o,!1).getAll();return new rc(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),iO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pw.type="LOCAL";const aO=Pw;new ec(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kw(n,e){return e?mi(e):(ge(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg extends Bg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Po(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Po(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Po(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function oO(n){return Sw(n.auth,new Hg(n),n.bypassAuthState)}function lO(n){const{auth:e,user:t}=n;return ge(t,e,"internal-error"),k2(t,new Hg(n),n.bypassAuthState)}async function uO(n){const{auth:e,user:t}=n;return ge(t,e,"internal-error"),P2(t,new Hg(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:d}=e;if(h){this.reject(h);return}const m={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(m))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return oO;case"linkViaPopup":case"linkViaRedirect":return uO;case"reauthViaPopup":case"reauthViaRedirect":return lO;default:Qn(this.auth,"internal-error")}}resolve(e){vi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cO=new ec(2e3,1e4);async function hO(n,e,t){if(ln(n.app))return Promise.reject(ir(n,"operation-not-supported-in-this-environment"));const s=Ur(n);zD(n,e,Fg);const o=kw(s,t);return new _a(s,"signInViaPopup",e,o).executeNotNull()}class _a extends Vw{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,_a.currentPopupAction&&_a.currentPopupAction.cancel(),_a.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ge(e,this.auth,"internal-error"),e}async onExecution(){vi(this.filter.length===1,"Popup operations only handle one event");const e=qg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ir(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(ir(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_a.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ir(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,cO.get())};e()}}_a.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fO="pendingRedirect",Wh=new Map;class dO extends Vw{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Wh.get(this.auth._key());if(!e){try{const s=await pO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Wh.set(this.auth._key(),e)}return this.bypassAuthState||Wh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pO(n,e){const t=yO(e),s=gO(n);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function mO(n,e){Wh.set(n._key(),e)}function gO(n){return mi(n._redirectPersistence)}function yO(n){return Xh(fO,n.config.apiKey,n.name)}async function _O(n,e,t=!1){if(ln(n.app))return Promise.reject(Cr(n));const s=Ur(n),o=kw(s,e),h=await new dO(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vO=600*1e3;class EO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!TO(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Lw(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";t.onError(ir(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vO&&this.cachedEventUids.clear(),this.cachedEventUids.has(LT(e))}saveEventToCache(e){this.cachedEventUids.add(LT(e)),this.lastProcessedEventTime=Date.now()}}function LT(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Lw({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function TO(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Lw(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bO(n,e={}){return Lr(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,AO=/^https?/;async function SO(n){if(n.config.emulator)return;const{authorizedDomains:e}=await bO(n);for(const t of e)try{if(RO(t))return}catch{}Qn(n,"unauthorized-domain")}function RO(n){const e=Km(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const h=new URL(n);return h.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!AO.test(t))return!1;if(wO.test(n))return s===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IO=new ec(3e4,6e4);function UT(){const n=Nr().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function CO(n){return new Promise((e,t)=>{function s(){UT(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{UT(),t(ir(n,"network-request-failed"))},timeout:IO.get()})}if(Nr().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Nr().gapi?.load)s();else{const o=p2("iframefcb");return Nr()[o]=()=>{gapi.load?s():t(ir(n,"network-request-failed"))},Ew(`${d2()}?onload=${o}`).catch(u=>t(u))}}).catch(e=>{throw Zh=null,e})}let Zh=null;function NO(n){return Zh=Zh||CO(n),Zh}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DO=new ec(5e3,15e3),OO="__/auth/iframe",MO="emulator/auth/iframe",xO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},PO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kO(n){const e=n.config;ge(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Lg(e,MO):`https://${n.config.authDomain}/${OO}`,s={apiKey:e.apiKey,appName:n.name,v:Na},o=PO.get(n.config.apiHost);o&&(s.eid=o);const u=n._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Wu(s).slice(1)}`}async function VO(n){const e=await NO(n),t=Nr().gapi;return ge(t,n,"internal-error"),e.open({where:document.body,url:kO(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xO,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=ir(n,"network-request-failed"),d=Nr().setTimeout(()=>{u(h)},DO.get());function m(){Nr().clearTimeout(d),o(s)}s.ping(m).then(m,()=>{u(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},UO=500,zO=600,BO="_blank",jO="http://localhost";class zT{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function FO(n,e,t,s=UO,o=zO){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let d="";const m={...LO,width:s.toString(),height:o.toString(),top:u,left:h},y=en().toLowerCase();t&&(d=dw(y)?BO:t),hw(y)&&(e=e||jO,m.scrollbars="yes");const E=Object.entries(m).reduce((w,[O,k])=>`${w}${O}=${k},`,"");if(i2(y)&&d!=="_self")return qO(e||"",d),new zT(null);const b=window.open(e||"",d,E);ge(b,n,"popup-blocked");try{b.focus()}catch{}return new zT(b)}function qO(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HO="__/auth/handler",GO="emulator/auth/handler",$O=encodeURIComponent("fac");async function BT(n,e,t,s,o,u){ge(n.config.authDomain,n,"auth-domain-config-required"),ge(n.config.apiKey,n,"invalid-api-key");const h={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Na,eventId:o};if(e instanceof Fg){e.setDefaultLanguage(n.languageCode),h.providerId=e.providerId||"",bN(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,b]of Object.entries({}))h[E]=b}if(e instanceof nc){const E=e.getScopes().filter(b=>b!=="");E.length>0&&(h.scopes=E.join(","))}n.tenantId&&(h.tid=n.tenantId);const d=h;for(const E of Object.keys(d))d[E]===void 0&&delete d[E];const m=await n._getAppCheckToken(),y=m?`#${$O}=${encodeURIComponent(m)}`:"";return`${KO(n)}?${Wu(d).slice(1)}${y}`}function KO({config:n}){return n.emulator?Lg(n,GO):`https://${n.authDomain}/${HO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm="webStorageSupport";class QO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Dw,this._completeRedirectFn=_O,this._overrideRedirectResult=mO}async _openPopup(e,t,s,o){vi(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const u=await BT(e,t,s,Km(),o);return FO(e,u,qg())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await BT(e,t,s,Km(),o);return W2(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(vi(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await VO(e),s=new EO(e);return t.register("authEvent",o=>(ge(o?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(vm,{type:vm},o=>{const u=o?.[0]?.[vm];u!==void 0&&t(!!u),Qn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=SO(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return _w()||fw()||zg()}}const YO=QO;var jT="@firebase/auth",FT="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ge(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WO(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ZO(n){Kn(new Nn("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:d}=s.options;ge(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const m={apiKey:h,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vw(n)},y=new c2(s,o,u,m);return E2(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Kn(new Nn("auth-internal",e=>{const t=Ur(e.getProvider("auth").getImmediate());return(s=>new XO(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jt(jT,FT,WO(n)),Jt(jT,FT,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JO=300,eM=Qb("authIdTokenMaxAge")||JO;let qT=null;const tM=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>eM)return;const o=t?.token;qT!==o&&(qT=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function nM(n=Ju()){const e=Ai(n,"auth");if(e.isInitialized())return e.getImmediate();const t=v2(n,{popupRedirectResolver:YO,persistence:[aO,Q2,Dw]}),s=Qb("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=tM(u.toString());q2(t,h,()=>h(t.currentUser)),F2(t,d=>h(d))}}const o=Gb("auth");return o&&T2(t,`http://${o}`),t}function rM(){return document.getElementsByTagName("head")?.[0]??document}h2({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=o=>{const u=ir("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",rM().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ZO("Browser");var iM="firebase",sM="12.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jt(iM,sM,"app");var HT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ps,Uw;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,S){function R(){}R.prototype=S.prototype,x.D=S.prototype,x.prototype=new R,x.prototype.constructor=x,x.C=function(N,D,M){for(var C=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)C[ue-2]=arguments[ue];return S.prototype[D].apply(N,C)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(x,S,R){R||(R=0);var N=Array(16);if(typeof S=="string")for(var D=0;16>D;++D)N[D]=S.charCodeAt(R++)|S.charCodeAt(R++)<<8|S.charCodeAt(R++)<<16|S.charCodeAt(R++)<<24;else for(D=0;16>D;++D)N[D]=S[R++]|S[R++]<<8|S[R++]<<16|S[R++]<<24;S=x.g[0],R=x.g[1],D=x.g[2];var M=x.g[3],C=S+(M^R&(D^M))+N[0]+3614090360&4294967295;S=R+(C<<7&4294967295|C>>>25),C=M+(D^S&(R^D))+N[1]+3905402710&4294967295,M=S+(C<<12&4294967295|C>>>20),C=D+(R^M&(S^R))+N[2]+606105819&4294967295,D=M+(C<<17&4294967295|C>>>15),C=R+(S^D&(M^S))+N[3]+3250441966&4294967295,R=D+(C<<22&4294967295|C>>>10),C=S+(M^R&(D^M))+N[4]+4118548399&4294967295,S=R+(C<<7&4294967295|C>>>25),C=M+(D^S&(R^D))+N[5]+1200080426&4294967295,M=S+(C<<12&4294967295|C>>>20),C=D+(R^M&(S^R))+N[6]+2821735955&4294967295,D=M+(C<<17&4294967295|C>>>15),C=R+(S^D&(M^S))+N[7]+4249261313&4294967295,R=D+(C<<22&4294967295|C>>>10),C=S+(M^R&(D^M))+N[8]+1770035416&4294967295,S=R+(C<<7&4294967295|C>>>25),C=M+(D^S&(R^D))+N[9]+2336552879&4294967295,M=S+(C<<12&4294967295|C>>>20),C=D+(R^M&(S^R))+N[10]+4294925233&4294967295,D=M+(C<<17&4294967295|C>>>15),C=R+(S^D&(M^S))+N[11]+2304563134&4294967295,R=D+(C<<22&4294967295|C>>>10),C=S+(M^R&(D^M))+N[12]+1804603682&4294967295,S=R+(C<<7&4294967295|C>>>25),C=M+(D^S&(R^D))+N[13]+4254626195&4294967295,M=S+(C<<12&4294967295|C>>>20),C=D+(R^M&(S^R))+N[14]+2792965006&4294967295,D=M+(C<<17&4294967295|C>>>15),C=R+(S^D&(M^S))+N[15]+1236535329&4294967295,R=D+(C<<22&4294967295|C>>>10),C=S+(D^M&(R^D))+N[1]+4129170786&4294967295,S=R+(C<<5&4294967295|C>>>27),C=M+(R^D&(S^R))+N[6]+3225465664&4294967295,M=S+(C<<9&4294967295|C>>>23),C=D+(S^R&(M^S))+N[11]+643717713&4294967295,D=M+(C<<14&4294967295|C>>>18),C=R+(M^S&(D^M))+N[0]+3921069994&4294967295,R=D+(C<<20&4294967295|C>>>12),C=S+(D^M&(R^D))+N[5]+3593408605&4294967295,S=R+(C<<5&4294967295|C>>>27),C=M+(R^D&(S^R))+N[10]+38016083&4294967295,M=S+(C<<9&4294967295|C>>>23),C=D+(S^R&(M^S))+N[15]+3634488961&4294967295,D=M+(C<<14&4294967295|C>>>18),C=R+(M^S&(D^M))+N[4]+3889429448&4294967295,R=D+(C<<20&4294967295|C>>>12),C=S+(D^M&(R^D))+N[9]+568446438&4294967295,S=R+(C<<5&4294967295|C>>>27),C=M+(R^D&(S^R))+N[14]+3275163606&4294967295,M=S+(C<<9&4294967295|C>>>23),C=D+(S^R&(M^S))+N[3]+4107603335&4294967295,D=M+(C<<14&4294967295|C>>>18),C=R+(M^S&(D^M))+N[8]+1163531501&4294967295,R=D+(C<<20&4294967295|C>>>12),C=S+(D^M&(R^D))+N[13]+2850285829&4294967295,S=R+(C<<5&4294967295|C>>>27),C=M+(R^D&(S^R))+N[2]+4243563512&4294967295,M=S+(C<<9&4294967295|C>>>23),C=D+(S^R&(M^S))+N[7]+1735328473&4294967295,D=M+(C<<14&4294967295|C>>>18),C=R+(M^S&(D^M))+N[12]+2368359562&4294967295,R=D+(C<<20&4294967295|C>>>12),C=S+(R^D^M)+N[5]+4294588738&4294967295,S=R+(C<<4&4294967295|C>>>28),C=M+(S^R^D)+N[8]+2272392833&4294967295,M=S+(C<<11&4294967295|C>>>21),C=D+(M^S^R)+N[11]+1839030562&4294967295,D=M+(C<<16&4294967295|C>>>16),C=R+(D^M^S)+N[14]+4259657740&4294967295,R=D+(C<<23&4294967295|C>>>9),C=S+(R^D^M)+N[1]+2763975236&4294967295,S=R+(C<<4&4294967295|C>>>28),C=M+(S^R^D)+N[4]+1272893353&4294967295,M=S+(C<<11&4294967295|C>>>21),C=D+(M^S^R)+N[7]+4139469664&4294967295,D=M+(C<<16&4294967295|C>>>16),C=R+(D^M^S)+N[10]+3200236656&4294967295,R=D+(C<<23&4294967295|C>>>9),C=S+(R^D^M)+N[13]+681279174&4294967295,S=R+(C<<4&4294967295|C>>>28),C=M+(S^R^D)+N[0]+3936430074&4294967295,M=S+(C<<11&4294967295|C>>>21),C=D+(M^S^R)+N[3]+3572445317&4294967295,D=M+(C<<16&4294967295|C>>>16),C=R+(D^M^S)+N[6]+76029189&4294967295,R=D+(C<<23&4294967295|C>>>9),C=S+(R^D^M)+N[9]+3654602809&4294967295,S=R+(C<<4&4294967295|C>>>28),C=M+(S^R^D)+N[12]+3873151461&4294967295,M=S+(C<<11&4294967295|C>>>21),C=D+(M^S^R)+N[15]+530742520&4294967295,D=M+(C<<16&4294967295|C>>>16),C=R+(D^M^S)+N[2]+3299628645&4294967295,R=D+(C<<23&4294967295|C>>>9),C=S+(D^(R|~M))+N[0]+4096336452&4294967295,S=R+(C<<6&4294967295|C>>>26),C=M+(R^(S|~D))+N[7]+1126891415&4294967295,M=S+(C<<10&4294967295|C>>>22),C=D+(S^(M|~R))+N[14]+2878612391&4294967295,D=M+(C<<15&4294967295|C>>>17),C=R+(M^(D|~S))+N[5]+4237533241&4294967295,R=D+(C<<21&4294967295|C>>>11),C=S+(D^(R|~M))+N[12]+1700485571&4294967295,S=R+(C<<6&4294967295|C>>>26),C=M+(R^(S|~D))+N[3]+2399980690&4294967295,M=S+(C<<10&4294967295|C>>>22),C=D+(S^(M|~R))+N[10]+4293915773&4294967295,D=M+(C<<15&4294967295|C>>>17),C=R+(M^(D|~S))+N[1]+2240044497&4294967295,R=D+(C<<21&4294967295|C>>>11),C=S+(D^(R|~M))+N[8]+1873313359&4294967295,S=R+(C<<6&4294967295|C>>>26),C=M+(R^(S|~D))+N[15]+4264355552&4294967295,M=S+(C<<10&4294967295|C>>>22),C=D+(S^(M|~R))+N[6]+2734768916&4294967295,D=M+(C<<15&4294967295|C>>>17),C=R+(M^(D|~S))+N[13]+1309151649&4294967295,R=D+(C<<21&4294967295|C>>>11),C=S+(D^(R|~M))+N[4]+4149444226&4294967295,S=R+(C<<6&4294967295|C>>>26),C=M+(R^(S|~D))+N[11]+3174756917&4294967295,M=S+(C<<10&4294967295|C>>>22),C=D+(S^(M|~R))+N[2]+718787259&4294967295,D=M+(C<<15&4294967295|C>>>17),C=R+(M^(D|~S))+N[9]+3951481745&4294967295,x.g[0]=x.g[0]+S&4294967295,x.g[1]=x.g[1]+(D+(C<<21&4294967295|C>>>11))&4294967295,x.g[2]=x.g[2]+D&4294967295,x.g[3]=x.g[3]+M&4294967295}s.prototype.u=function(x,S){S===void 0&&(S=x.length);for(var R=S-this.blockSize,N=this.B,D=this.h,M=0;M<S;){if(D==0)for(;M<=R;)o(this,x,M),M+=this.blockSize;if(typeof x=="string"){for(;M<S;)if(N[D++]=x.charCodeAt(M++),D==this.blockSize){o(this,N),D=0;break}}else for(;M<S;)if(N[D++]=x[M++],D==this.blockSize){o(this,N),D=0;break}}this.h=D,this.o+=S},s.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var S=1;S<x.length-8;++S)x[S]=0;var R=8*this.o;for(S=x.length-8;S<x.length;++S)x[S]=R&255,R/=256;for(this.u(x),x=Array(16),S=R=0;4>S;++S)for(var N=0;32>N;N+=8)x[R++]=this.g[S]>>>N&255;return x};function u(x,S){var R=d;return Object.prototype.hasOwnProperty.call(R,x)?R[x]:R[x]=S(x)}function h(x,S){this.h=S;for(var R=[],N=!0,D=x.length-1;0<=D;D--){var M=x[D]|0;N&&M==S||(R[D]=M,N=!1)}this.g=R}var d={};function m(x){return-128<=x&&128>x?u(x,function(S){return new h([S|0],0>S?-1:0)}):new h([x|0],0>x?-1:0)}function y(x){if(isNaN(x)||!isFinite(x))return b;if(0>x)return V(y(-x));for(var S=[],R=1,N=0;x>=R;N++)S[N]=x/R|0,R*=4294967296;return new h(S,0)}function E(x,S){if(x.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(x.charAt(0)=="-")return V(E(x.substring(1),S));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=y(Math.pow(S,8)),N=b,D=0;D<x.length;D+=8){var M=Math.min(8,x.length-D),C=parseInt(x.substring(D,D+M),S);8>M?(M=y(Math.pow(S,M)),N=N.j(M).add(y(C))):(N=N.j(R),N=N.add(y(C)))}return N}var b=m(0),w=m(1),O=m(16777216);n=h.prototype,n.m=function(){if(F(this))return-V(this).m();for(var x=0,S=1,R=0;R<this.g.length;R++){var N=this.i(R);x+=(0<=N?N:4294967296+N)*S,S*=4294967296}return x},n.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(k(this))return"0";if(F(this))return"-"+V(this).toString(x);for(var S=y(Math.pow(x,6)),R=this,N="";;){var D=ie(R,S).g;R=G(R,D.j(S));var M=((0<R.g.length?R.g[0]:R.h)>>>0).toString(x);if(R=D,k(R))return M+N;for(;6>M.length;)M="0"+M;N=M+N}},n.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function k(x){if(x.h!=0)return!1;for(var S=0;S<x.g.length;S++)if(x.g[S]!=0)return!1;return!0}function F(x){return x.h==-1}n.l=function(x){return x=G(this,x),F(x)?-1:k(x)?0:1};function V(x){for(var S=x.g.length,R=[],N=0;N<S;N++)R[N]=~x.g[N];return new h(R,~x.h).add(w)}n.abs=function(){return F(this)?V(this):this},n.add=function(x){for(var S=Math.max(this.g.length,x.g.length),R=[],N=0,D=0;D<=S;D++){var M=N+(this.i(D)&65535)+(x.i(D)&65535),C=(M>>>16)+(this.i(D)>>>16)+(x.i(D)>>>16);N=C>>>16,M&=65535,C&=65535,R[D]=C<<16|M}return new h(R,R[R.length-1]&-2147483648?-1:0)};function G(x,S){return x.add(V(S))}n.j=function(x){if(k(this)||k(x))return b;if(F(this))return F(x)?V(this).j(V(x)):V(V(this).j(x));if(F(x))return V(this.j(V(x)));if(0>this.l(O)&&0>x.l(O))return y(this.m()*x.m());for(var S=this.g.length+x.g.length,R=[],N=0;N<2*S;N++)R[N]=0;for(N=0;N<this.g.length;N++)for(var D=0;D<x.g.length;D++){var M=this.i(N)>>>16,C=this.i(N)&65535,ue=x.i(D)>>>16,Qe=x.i(D)&65535;R[2*N+2*D]+=C*Qe,Z(R,2*N+2*D),R[2*N+2*D+1]+=M*Qe,Z(R,2*N+2*D+1),R[2*N+2*D+1]+=C*ue,Z(R,2*N+2*D+1),R[2*N+2*D+2]+=M*ue,Z(R,2*N+2*D+2)}for(N=0;N<S;N++)R[N]=R[2*N+1]<<16|R[2*N];for(N=S;N<2*S;N++)R[N]=0;return new h(R,0)};function Z(x,S){for(;(x[S]&65535)!=x[S];)x[S+1]+=x[S]>>>16,x[S]&=65535,S++}function K(x,S){this.g=x,this.h=S}function ie(x,S){if(k(S))throw Error("division by zero");if(k(x))return new K(b,b);if(F(x))return S=ie(V(x),S),new K(V(S.g),V(S.h));if(F(S))return S=ie(x,V(S)),new K(V(S.g),S.h);if(30<x.g.length){if(F(x)||F(S))throw Error("slowDivide_ only works with positive integers.");for(var R=w,N=S;0>=N.l(x);)R=se(R),N=se(N);var D=he(R,1),M=he(N,1);for(N=he(N,2),R=he(R,2);!k(N);){var C=M.add(N);0>=C.l(x)&&(D=D.add(R),M=C),N=he(N,1),R=he(R,1)}return S=G(x,D.j(S)),new K(D,S)}for(D=b;0<=x.l(S);){for(R=Math.max(1,Math.floor(x.m()/S.m())),N=Math.ceil(Math.log(R)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),M=y(R),C=M.j(S);F(C)||0<C.l(x);)R-=N,M=y(R),C=M.j(S);k(M)&&(M=w),D=D.add(M),x=G(x,C)}return new K(D,x)}n.A=function(x){return ie(this,x).h},n.and=function(x){for(var S=Math.max(this.g.length,x.g.length),R=[],N=0;N<S;N++)R[N]=this.i(N)&x.i(N);return new h(R,this.h&x.h)},n.or=function(x){for(var S=Math.max(this.g.length,x.g.length),R=[],N=0;N<S;N++)R[N]=this.i(N)|x.i(N);return new h(R,this.h|x.h)},n.xor=function(x){for(var S=Math.max(this.g.length,x.g.length),R=[],N=0;N<S;N++)R[N]=this.i(N)^x.i(N);return new h(R,this.h^x.h)};function se(x){for(var S=x.g.length+1,R=[],N=0;N<S;N++)R[N]=x.i(N)<<1|x.i(N-1)>>>31;return new h(R,x.h)}function he(x,S){var R=S>>5;S%=32;for(var N=x.g.length-R,D=[],M=0;M<N;M++)D[M]=0<S?x.i(M+R)>>>S|x.i(M+R+1)<<32-S:x.i(M+R);return new h(D,x.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Uw=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=y,h.fromString=E,ps=h}).apply(typeof HT<"u"?HT:typeof self<"u"?self:typeof window<"u"?window:{});var Uh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zw,vu,Bw,Jh,Xm,jw,Fw,qw;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,g,_){return c==Array.prototype||c==Object.prototype||(c[g]=_.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Uh=="object"&&Uh];for(var g=0;g<c.length;++g){var _=c[g];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=t(this);function o(c,g){if(g)e:{var _=s;c=c.split(".");for(var A=0;A<c.length-1;A++){var U=c[A];if(!(U in _))break e;_=_[U]}c=c[c.length-1],A=_[c],g=g(A),g!=A&&g!=null&&e(_,c,{configurable:!0,writable:!0,value:g})}}function u(c,g){c instanceof String&&(c+="");var _=0,A=!1,U={next:function(){if(!A&&_<c.length){var $=_++;return{value:g($,c[$]),done:!1}}return A=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}o("Array.prototype.values",function(c){return c||function(){return u(this,function(g,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},d=this||self;function m(c){var g=typeof c;return g=g!="object"?g:c?Array.isArray(c)?"array":g:"null",g=="array"||g=="object"&&typeof c.length=="number"}function y(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function E(c,g,_){return c.call.apply(c.bind,arguments)}function b(c,g,_){if(!c)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,A),c.apply(g,U)}}return function(){return c.apply(g,arguments)}}function w(c,g,_){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:b,w.apply(null,arguments)}function O(c,g){var _=Array.prototype.slice.call(arguments,1);return function(){var A=_.slice();return A.push.apply(A,arguments),c.apply(this,A)}}function k(c,g){function _(){}_.prototype=g.prototype,c.aa=g.prototype,c.prototype=new _,c.prototype.constructor=c,c.Qb=function(A,U,$){for(var ne=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)ne[Oe-2]=arguments[Oe];return g.prototype[U].apply(A,ne)}}function F(c){const g=c.length;if(0<g){const _=Array(g);for(let A=0;A<g;A++)_[A]=c[A];return _}return[]}function V(c,g){for(let _=1;_<arguments.length;_++){const A=arguments[_];if(m(A)){const U=c.length||0,$=A.length||0;c.length=U+$;for(let ne=0;ne<$;ne++)c[U+ne]=A[ne]}else c.push(A)}}class G{constructor(g,_){this.i=g,this.j=_,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function Z(c){return/^[\s\xa0]*$/.test(c)}function K(){var c=d.navigator;return c&&(c=c.userAgent)?c:""}function ie(c){return ie[" "](c),c}ie[" "]=function(){};var se=K().indexOf("Gecko")!=-1&&!(K().toLowerCase().indexOf("webkit")!=-1&&K().indexOf("Edge")==-1)&&!(K().indexOf("Trident")!=-1||K().indexOf("MSIE")!=-1)&&K().indexOf("Edge")==-1;function he(c,g,_){for(const A in c)g.call(_,c[A],A,c)}function x(c,g){for(const _ in c)g.call(void 0,c[_],_,c)}function S(c){const g={};for(const _ in c)g[_]=c[_];return g}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(c,g){let _,A;for(let U=1;U<arguments.length;U++){A=arguments[U];for(_ in A)c[_]=A[_];for(let $=0;$<R.length;$++)_=R[$],Object.prototype.hasOwnProperty.call(A,_)&&(c[_]=A[_])}}function D(c){var g=1;c=c.split(":");const _=[];for(;0<g&&c.length;)_.push(c.shift()),g--;return c.length&&_.push(c.join(":")),_}function M(c){d.setTimeout(()=>{throw c},0)}function C(){var c=De;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class ue{constructor(){this.h=this.g=null}add(g,_){const A=Qe.get();A.set(g,_),this.h?this.h.next=A:this.g=A,this.h=A}}var Qe=new G(()=>new Q,c=>c.reset());class Q{constructor(){this.next=this.g=this.h=null}set(g,_){this.h=g,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let re,fe=!1,De=new ue,Le=()=>{const c=d.Promise.resolve(void 0);re=()=>{c.then(Ye)}};var Ye=()=>{for(var c;c=C();){try{c.h.call(c.g)}catch(_){M(_)}var g=Qe;g.j(c),100>g.h&&(g.h++,c.next=g.g,g.g=c)}fe=!1};function ke(){this.s=this.s,this.C=this.C}ke.prototype.s=!1,ke.prototype.ma=function(){this.s||(this.s=!0,this.N())},ke.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ve(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}ve.prototype.h=function(){this.defaultPrevented=!0};var yt=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};d.addEventListener("test",_,g),d.removeEventListener("test",_,g)}catch{}return c}();function $t(c,g){if(ve.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var _=this.type=c.type,A=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget){if(se){e:{try{ie(g.nodeName);var U=!0;break e}catch{}U=!1}U||(g=null)}}else _=="mouseover"?g=c.fromElement:_=="mouseout"&&(g=c.toElement);this.relatedTarget=g,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:ur[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&$t.aa.h.call(this)}}k($t,ve);var ur={2:"touch",3:"pen",4:"mouse"};$t.prototype.h=function(){$t.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var zr="closure_listenable_"+(1e6*Math.random()|0),xa=0;function Ri(c,g,_,A,U){this.listener=c,this.proxy=null,this.src=g,this.type=_,this.capture=!!A,this.ha=U,this.key=++xa,this.da=this.fa=!1}function Ii(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Br(c){this.src=c,this.g={},this.h=0}Br.prototype.add=function(c,g,_,A,U){var $=c.toString();c=this.g[$],c||(c=this.g[$]=[],this.h++);var ne=xs(c,g,A,U);return-1<ne?(g=c[ne],_||(g.fa=!1)):(g=new Ri(g,this.src,$,!!A,U),g.fa=_,c.push(g)),g};function Ms(c,g){var _=g.type;if(_ in c.g){var A=c.g[_],U=Array.prototype.indexOf.call(A,g,void 0),$;($=0<=U)&&Array.prototype.splice.call(A,U,1),$&&(Ii(g),c.g[_].length==0&&(delete c.g[_],c.h--))}}function xs(c,g,_,A){for(var U=0;U<c.length;++U){var $=c[U];if(!$.da&&$.listener==g&&$.capture==!!_&&$.ha==A)return U}return-1}var Ps="closure_lm_"+(1e6*Math.random()|0),rl={};function fc(c,g,_,A,U){if(Array.isArray(g)){for(var $=0;$<g.length;$++)fc(c,g[$],_,A,U);return null}return _=dc(_),c&&c[zr]?c.K(g,_,y(A)?!!A.capture:!1,U):Dn(c,g,_,!1,A,U)}function Dn(c,g,_,A,U,$){if(!g)throw Error("Invalid event type");var ne=y(U)?!!U.capture:!!U,Oe=ka(c);if(Oe||(c[Ps]=Oe=new Br(c)),_=Oe.add(g,_,A,ne,$),_.proxy)return _;if(A=od(),_.proxy=A,A.src=c,A.listener=_,c.addEventListener)yt||(U=ne),U===void 0&&(U=!1),c.addEventListener(g.toString(),A,U);else if(c.attachEvent)c.attachEvent(ks(g.toString()),A);else if(c.addListener&&c.removeListener)c.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return _}function od(){function c(_){return g.call(c.src,c.listener,_)}const g=ld;return c}function il(c,g,_,A,U){if(Array.isArray(g))for(var $=0;$<g.length;$++)il(c,g[$],_,A,U);else A=y(A)?!!A.capture:!!A,_=dc(_),c&&c[zr]?(c=c.i,g=String(g).toString(),g in c.g&&($=c.g[g],_=xs($,_,A,U),-1<_&&(Ii($[_]),Array.prototype.splice.call($,_,1),$.length==0&&(delete c.g[g],c.h--)))):c&&(c=ka(c))&&(g=c.g[g.toString()],c=-1,g&&(c=xs(g,_,A,U)),(_=-1<c?g[c]:null)&&Pa(_))}function Pa(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[zr])Ms(g.i,c);else{var _=c.type,A=c.proxy;g.removeEventListener?g.removeEventListener(_,A,c.capture):g.detachEvent?g.detachEvent(ks(_),A):g.addListener&&g.removeListener&&g.removeListener(A),(_=ka(g))?(Ms(_,c),_.h==0&&(_.src=null,g[Ps]=null)):Ii(c)}}}function ks(c){return c in rl?rl[c]:rl[c]="on"+c}function ld(c,g){if(c.da)c=!0;else{g=new $t(g,this);var _=c.listener,A=c.ha||c.src;c.fa&&Pa(c),c=_.call(A,g)}return c}function ka(c){return c=c[Ps],c instanceof Br?c:null}var sl="__closure_events_fn_"+(1e9*Math.random()>>>0);function dc(c){return typeof c=="function"?c:(c[sl]||(c[sl]=function(g){return c.handleEvent(g)}),c[sl])}function ot(){ke.call(this),this.i=new Br(this),this.M=this,this.F=null}k(ot,ke),ot.prototype[zr]=!0,ot.prototype.removeEventListener=function(c,g,_,A){il(this,c,g,_,A)};function je(c,g){var _,A=c.F;if(A)for(_=[];A;A=A.F)_.push(A);if(c=c.M,A=g.type||g,typeof g=="string")g=new ve(g,c);else if(g instanceof ve)g.target=g.target||c;else{var U=g;g=new ve(A,c),N(g,U)}if(U=!0,_)for(var $=_.length-1;0<=$;$--){var ne=g.g=_[$];U=gn(ne,A,!0,g)&&U}if(ne=g.g=c,U=gn(ne,A,!0,g)&&U,U=gn(ne,A,!1,g)&&U,_)for($=0;$<_.length;$++)ne=g.g=_[$],U=gn(ne,A,!1,g)&&U}ot.prototype.N=function(){if(ot.aa.N.call(this),this.i){var c=this.i,g;for(g in c.g){for(var _=c.g[g],A=0;A<_.length;A++)Ii(_[A]);delete c.g[g],c.h--}}this.F=null},ot.prototype.K=function(c,g,_,A){return this.i.add(String(c),g,!1,_,A)},ot.prototype.L=function(c,g,_,A){return this.i.add(String(c),g,!0,_,A)};function gn(c,g,_,A){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();for(var U=!0,$=0;$<g.length;++$){var ne=g[$];if(ne&&!ne.da&&ne.capture==_){var Oe=ne.listener,Rt=ne.ha||ne.src;ne.fa&&Ms(c.i,ne),U=Oe.call(Rt,A)!==!1&&U}}return U&&!A.defaultPrevented}function Kt(c,g,_){if(typeof c=="function")_&&(c=w(c,_));else if(c&&typeof c.handleEvent=="function")c=w(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:d.setTimeout(c,g||0)}function pc(c){c.g=Kt(()=>{c.g=null,c.i&&(c.i=!1,pc(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class ud extends ke{constructor(g,_){super(),this.m=g,this.l=_,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:pc(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Vs(c){ke.call(this),this.h=c,this.g={}}k(Vs,ke);var Ls=[];function Us(c){he(c.g,function(g,_){this.g.hasOwnProperty(_)&&Pa(g)},c),c.g={}}Vs.prototype.N=function(){Vs.aa.N.call(this),Us(this)},Vs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xn=d.JSON.stringify,Va=d.JSON.parse,zs=class{stringify(c){return d.JSON.stringify(c,void 0)}parse(c){return d.JSON.parse(c,void 0)}};function al(){}al.prototype.h=null;function ol(c){return c.h||(c.h=c.i())}function ll(){}var jr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Fr(){ve.call(this,"d")}k(Fr,ve);function ul(){ve.call(this,"c")}k(ul,ve);var cr={},cl=null;function Ci(){return cl=cl||new ot}cr.La="serverreachability";function La(c){ve.call(this,cr.La,c)}k(La,ve);function Ni(c){const g=Ci();je(g,new La(g))}cr.STAT_EVENT="statevent";function mc(c,g){ve.call(this,cr.STAT_EVENT,c),this.stat=g}k(mc,ve);function nt(c){const g=Ci();je(g,new mc(g,c))}cr.Ma="timingevent";function St(c,g){ve.call(this,cr.Ma,c),this.size=g}k(St,ve);function _t(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){c()},g)}function On(){this.g=!0}On.prototype.xa=function(){this.g=!1};function hl(c,g,_,A,U,$){c.info(function(){if(c.g)if($)for(var ne="",Oe=$.split("&"),Rt=0;Rt<Oe.length;Rt++){var Me=Oe[Rt].split("=");if(1<Me.length){var xt=Me[0];Me=Me[1];var It=xt.split("_");ne=2<=It.length&&It[1]=="type"?ne+(xt+"="+Me+"&"):ne+(xt+"=redacted&")}}else ne=null;else ne=$;return"XMLHTTP REQ ("+A+") [attempt "+U+"]: "+g+`
`+_+`
`+ne})}function cd(c,g,_,A,U,$,ne){c.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+U+"]: "+g+`
`+_+`
`+$+" "+ne})}function Di(c,g,_,A){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+Bs(c,_)+(A?" "+A:"")})}function gc(c,g){c.info(function(){return"TIMEOUT: "+g})}On.prototype.info=function(){};function Bs(c,g){if(!c.g)return g;if(!g)return null;try{var _=JSON.parse(g);if(_){for(c=0;c<_.length;c++)if(Array.isArray(_[c])){var A=_[c];if(!(2>A.length)){var U=A[1];if(Array.isArray(U)&&!(1>U.length)){var $=U[0];if($!="noop"&&$!="stop"&&$!="close")for(var ne=1;ne<U.length;ne++)U[ne]=""}}}}return Xn(_)}catch{return g}}var Oi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},qr={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},hr;function fr(){}k(fr,al),fr.prototype.g=function(){return new XMLHttpRequest},fr.prototype.i=function(){return{}},hr=new fr;function tn(c,g,_,A){this.j=c,this.i=g,this.l=_,this.R=A||1,this.U=new Vs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new dt}function dt(){this.i=null,this.g="",this.h=!1}var fl={},Ua={};function Wn(c,g,_){c.L=1,c.v=Gs(yn(g)),c.m=_,c.P=!0,Hr(c,null)}function Hr(c,g){c.F=Date.now(),js(c),c.A=yn(c.v);var _=c.A,A=c.R;Array.isArray(A)||(A=[String(A)]),_l(_.i,"t",A),c.C=0,_=c.j.J,c.h=new dt,c.g=Mc(c.j,_?g:null,!c.m),0<c.O&&(c.M=new ud(w(c.Y,c,c.g),c.O)),g=c.U,_=c.g,A=c.ca;var U="readystatechange";Array.isArray(U)||(U&&(Ls[0]=U.toString()),U=Ls);for(var $=0;$<U.length;$++){var ne=fc(_,U[$],A||g.handleEvent,!1,g.h||g);if(!ne)break;g.g[ne.key]=ne}g=c.H?S(c.H):{},c.m?(c.u||(c.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,g)):(c.u="GET",c.g.ea(c.A,c.u,null,g)),Ni(),hl(c.i,c.u,c.A,c.l,c.R,c.m)}tn.prototype.ca=function(c){c=c.target;const g=this.M;g&&kn(c)==3?g.j():this.Y(c)},tn.prototype.Y=function(c){try{if(c==this.g)e:{const It=kn(this.g);var g=this.g.Ba();const Zr=this.g.Z();if(!(3>It)&&(It!=3||this.g&&(this.h.h||this.g.oa()||Ac(this.g)))){this.J||It!=4||g==7||(g==8||0>=Zr?Ni(3):Ni(2)),Mi(this);var _=this.g.Z();this.X=_;t:if(yc(this)){var A=Ac(this.g);c="";var U=A.length,$=kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ut(this),dr(this);var ne="";break t}this.h.i=new d.TextDecoder}for(g=0;g<U;g++)this.h.h=!0,c+=this.h.i.decode(A[g],{stream:!($&&g==U-1)});A.length=0,this.h.g+=c,this.C=0,ne=this.h.g}else ne=this.g.oa();if(this.o=_==200,cd(this.i,this.u,this.A,this.l,this.R,It,_),this.o){if(this.T&&!this.K){t:{if(this.g){var Oe,Rt=this.g;if((Oe=Rt.g?Rt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Z(Oe)){var Me=Oe;break t}}Me=null}if(_=Me)Di(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fs(this,_);else{this.o=!1,this.s=3,nt(12),Ut(this),dr(this);break e}}if(this.P){_=!0;let zt;for(;!this.J&&this.C<ne.length;)if(zt=_c(this,ne),zt==Ua){It==4&&(this.s=4,nt(14),_=!1),Di(this.i,this.l,null,"[Incomplete Response]");break}else if(zt==fl){this.s=4,nt(15),Di(this.i,this.l,ne,"[Invalid Chunk]"),_=!1;break}else Di(this.i,this.l,zt,null),Fs(this,zt);if(yc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),It!=4||ne.length!=0||this.h.h||(this.s=1,nt(16),_=!1),this.o=this.o&&_,!_)Di(this.i,this.l,ne,"[Invalid Chunked Response]"),Ut(this),dr(this);else if(0<ne.length&&!this.W){this.W=!0;var xt=this.j;xt.g==this&&xt.ba&&!xt.M&&(xt.j.info("Great, no buffering proxy detected. Bytes received: "+ne.length),Js(xt),xt.M=!0,nt(11))}}else Di(this.i,this.l,ne,null),Fs(this,ne);It==4&&Ut(this),this.o&&!this.J&&(It==4?Nc(this.j,this):(this.o=!1,js(this)))}else md(this.g),_==400&&0<ne.indexOf("Unknown SID")?(this.s=3,nt(12)):(this.s=0,nt(13)),Ut(this),dr(this)}}}catch{}finally{}};function yc(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function _c(c,g){var _=c.C,A=g.indexOf(`
`,_);return A==-1?Ua:(_=Number(g.substring(_,A)),isNaN(_)?fl:(A+=1,A+_>g.length?Ua:(g=g.slice(A,A+_),c.C=A+_,g)))}tn.prototype.cancel=function(){this.J=!0,Ut(this)};function js(c){c.S=Date.now()+c.I,vc(c,c.I)}function vc(c,g){if(c.B!=null)throw Error("WatchDog timer not null");c.B=_t(w(c.ba,c),g)}function Mi(c){c.B&&(d.clearTimeout(c.B),c.B=null)}tn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(gc(this.i,this.A),this.L!=2&&(Ni(),nt(17)),Ut(this),this.s=2,dr(this)):vc(this,this.S-c)};function dr(c){c.j.G==0||c.J||Nc(c.j,c)}function Ut(c){Mi(c);var g=c.M;g&&typeof g.ma=="function"&&g.ma(),c.M=null,Us(c.U),c.g&&(g=c.g,c.g=null,g.abort(),g.ma())}function Fs(c,g){try{var _=c.j;if(_.G!=0&&(_.g==c||dl(_.h,c))){if(!c.K&&dl(_.h,c)&&_.G==3){try{var A=_.Da.g.parse(g)}catch{A=null}if(Array.isArray(A)&&A.length==3){var U=A;if(U[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<c.F)Xa(_),Qa(_);else break e;wl(_),nt(18)}}else _.za=U[1],0<_.za-_.T&&37500>U[2]&&_.F&&_.v==0&&!_.C&&(_.C=_t(w(_.Za,_),6e3));if(1>=Ba(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Wr(_,11)}else if((c.K||_.g==c)&&Xa(_),!Z(g))for(U=_.Da.g.parse(g),g=0;g<U.length;g++){let Me=U[g];if(_.T=Me[0],Me=Me[1],_.G==2)if(Me[0]=="c"){_.K=Me[1],_.ia=Me[2];const xt=Me[3];xt!=null&&(_.la=xt,_.j.info("VER="+_.la));const It=Me[4];It!=null&&(_.Aa=It,_.j.info("SVER="+_.Aa));const Zr=Me[5];Zr!=null&&typeof Zr=="number"&&0<Zr&&(A=1.5*Zr,_.L=A,_.j.info("backChannelRequestTimeoutMs_="+A)),A=_;const zt=c.g;if(zt){const Er=zt.g?zt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Er){var $=A.h;$.g||Er.indexOf("spdy")==-1&&Er.indexOf("quic")==-1&&Er.indexOf("h2")==-1||($.j=$.l,$.g=new Set,$.h&&(ja($,$.h),$.h=null))}if(A.D){const Sl=zt.g?zt.g.getResponseHeader("X-HTTP-Session-Id"):null;Sl&&(A.ya=Sl,He(A.I,A.D,Sl))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-c.F,_.j.info("Handshake RTT: "+_.R+"ms")),A=_;var ne=c;if(A.qa=Oc(A,A.J?A.ia:null,A.W),ne.K){nn(A.h,ne);var Oe=ne,Rt=A.L;Rt&&(Oe.I=Rt),Oe.B&&(Mi(Oe),js(Oe)),A.g=ne}else Ic(A);0<_.i.length&&Ya(_)}else Me[0]!="stop"&&Me[0]!="close"||Wr(_,7);else _.G==3&&(Me[0]=="stop"||Me[0]=="close"?Me[0]=="stop"?Wr(_,7):Tl(_):Me[0]!="noop"&&_.l&&_.l.ta(Me),_.v=0)}}Ni(4)}catch{}}var Ec=class{constructor(c,g){this.g=c,this.map=g}};function Gr(c){this.l=c||10,d.PerformanceNavigationTiming?(c=d.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function za(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Ba(c){return c.h?1:c.g?c.g.size:0}function dl(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function ja(c,g){c.g?c.g.add(g):c.h=g}function nn(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}Gr.prototype.cancel=function(){if(this.i=pl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function pl(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const _ of c.g.values())g=g.concat(_.D);return g}return F(c.i)}function hd(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(m(c)){for(var g=[],_=c.length,A=0;A<_;A++)g.push(c[A]);return g}g=[],_=0;for(A in c)g[_++]=c[A];return g}function Fa(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(m(c)||typeof c=="string"){var g=[];c=c.length;for(var _=0;_<c;_++)g.push(_);return g}g=[],_=0;for(const A in c)g[_++]=A;return g}}}function ml(c,g){if(c.forEach&&typeof c.forEach=="function")c.forEach(g,void 0);else if(m(c)||typeof c=="string")Array.prototype.forEach.call(c,g,void 0);else for(var _=Fa(c),A=hd(c),U=A.length,$=0;$<U;$++)g.call(void 0,A[$],_&&_[$],c)}var qs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fd(c,g){if(c){c=c.split("&");for(var _=0;_<c.length;_++){var A=c[_].indexOf("="),U=null;if(0<=A){var $=c[_].substring(0,A);U=c[_].substring(A+1)}else $=c[_];g($,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function vt(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof vt){this.h=c.h,Hs(this,c.j),this.o=c.o,this.g=c.g,xi(this,c.s),this.l=c.l;var g=c.i,_=new Kr;_.i=g.i,g.g&&(_.g=new Map(g.g),_.h=g.h),$r(this,_),this.m=c.m}else c&&(g=String(c).match(qs))?(this.h=!1,Hs(this,g[1]||"",!0),this.o=Mn(g[2]||""),this.g=Mn(g[3]||"",!0),xi(this,g[4]),this.l=Mn(g[5]||"",!0),$r(this,g[6]||"",!0),this.m=Mn(g[7]||"")):(this.h=!1,this.i=new Kr(null,this.h))}vt.prototype.toString=function(){var c=[],g=this.j;g&&c.push($s(g,gl,!0),":");var _=this.g;return(_||g=="file")&&(c.push("//"),(g=this.o)&&c.push($s(g,gl,!0),"@"),c.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&c.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push($s(_,_.charAt(0)=="/"?dd:yl,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",$s(_,qa)),c.join("")};function yn(c){return new vt(c)}function Hs(c,g,_){c.j=_?Mn(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function xi(c,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);c.s=g}else c.s=null}function $r(c,g,_){g instanceof Kr?(c.i=g,bc(c.i,c.h)):(_||(g=$s(g,pd)),c.i=new Kr(g,c.h))}function He(c,g,_){c.i.set(g,_)}function Gs(c){return He(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Mn(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function $s(c,g,_){return typeof c=="string"?(c=encodeURI(c).replace(g,Tc),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Tc(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var gl=/[#\/\?@]/g,yl=/[#\?:]/g,dd=/[#\?]/g,pd=/[#\?@]/g,qa=/#/g;function Kr(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function xn(c){c.g||(c.g=new Map,c.h=0,c.i&&fd(c.i,function(g,_){c.add(decodeURIComponent(g.replace(/\+/g," ")),_)}))}n=Kr.prototype,n.add=function(c,g){xn(this),this.i=null,c=pr(this,c);var _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(g),this.h+=1,this};function Qr(c,g){xn(c),g=pr(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function Yr(c,g){return xn(c),g=pr(c,g),c.g.has(g)}n.forEach=function(c,g){xn(this),this.g.forEach(function(_,A){_.forEach(function(U){c.call(g,U,A,this)},this)},this)},n.na=function(){xn(this);const c=Array.from(this.g.values()),g=Array.from(this.g.keys()),_=[];for(let A=0;A<g.length;A++){const U=c[A];for(let $=0;$<U.length;$++)_.push(g[A])}return _},n.V=function(c){xn(this);let g=[];if(typeof c=="string")Yr(this,c)&&(g=g.concat(this.g.get(pr(this,c))));else{c=Array.from(this.g.values());for(let _=0;_<c.length;_++)g=g.concat(c[_])}return g},n.set=function(c,g){return xn(this),this.i=null,c=pr(this,c),Yr(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},n.get=function(c,g){return c?(c=this.V(c),0<c.length?String(c[0]):g):g};function _l(c,g,_){Qr(c,g),0<_.length&&(c.i=null,c.g.set(pr(c,g),F(_)),c.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(var _=0;_<g.length;_++){var A=g[_];const $=encodeURIComponent(String(A)),ne=this.V(A);for(A=0;A<ne.length;A++){var U=$;ne[A]!==""&&(U+="="+encodeURIComponent(String(ne[A]))),c.push(U)}}return this.i=c.join("&")};function pr(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function bc(c,g){g&&!c.j&&(xn(c),c.i=null,c.g.forEach(function(_,A){var U=A.toLowerCase();A!=U&&(Qr(this,A),_l(this,U,_))},c)),c.j=g}function Ks(c,g){const _=new On;if(d.Image){const A=new Image;A.onload=O(Pn,_,"TestLoadImage: loaded",!0,g,A),A.onerror=O(Pn,_,"TestLoadImage: error",!1,g,A),A.onabort=O(Pn,_,"TestLoadImage: abort",!1,g,A),A.ontimeout=O(Pn,_,"TestLoadImage: timeout",!1,g,A),d.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=c}else g(!1)}function Zn(c,g){const _=new On,A=new AbortController,U=setTimeout(()=>{A.abort(),Pn(_,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:A.signal}).then($=>{clearTimeout(U),$.ok?Pn(_,"TestPingServer: ok",!0,g):Pn(_,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(U),Pn(_,"TestPingServer: error",!1,g)})}function Pn(c,g,_,A,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),A(_)}catch{}}function Qs(){this.g=new zs}function mr(c,g,_){const A=_||"";try{ml(c,function(U,$){let ne=U;y(U)&&(ne=Xn(U)),g.push(A+$+"="+encodeURIComponent(ne))})}catch(U){throw g.push(A+"type="+encodeURIComponent("_badmap")),U}}function Pi(c){this.l=c.Ub||null,this.j=c.eb||!1}k(Pi,al),Pi.prototype.g=function(){return new Xr(this.l,this.j)},Pi.prototype.i=function(c){return function(){return c}}({});function Xr(c,g){ot.call(this),this.D=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Xr,ot),n=Xr.prototype,n.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=g,this.readyState=1,yr(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(g.body=c),(this.D||d).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,gr(this)),this.readyState=0},n.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,yr(this)),this.g&&(this.readyState=3,yr(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;vl(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function vl(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}n.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?gr(this):yr(this),this.readyState==3&&vl(this)}},n.Ra=function(c){this.g&&(this.response=this.responseText=c,gr(this))},n.Qa=function(c){this.g&&(this.response=c,gr(this))},n.ga=function(){this.g&&gr(this)};function gr(c){c.readyState=4,c.l=null,c.j=null,c.v=null,yr(c)}n.setRequestHeader=function(c,g){this.u.append(c,g)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var _=g.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=g.next();return c.join(`\r
`)};function yr(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Xr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function El(c){let g="";return he(c,function(_,A){g+=A,g+=":",g+=_,g+=`\r
`}),g}function Mt(c,g,_){e:{for(A in _){var A=!1;break e}A=!0}A||(_=El(_),typeof c=="string"?_!=null&&encodeURIComponent(String(_)):He(c,g,_))}function ze(c){ot.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(ze,ot);var Ha=/^https?$/i,Ys=["POST","PUT"];n=ze.prototype,n.Ha=function(c){this.J=c},n.ea=function(c,g,_,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():hr.g(),this.v=this.o?ol(this.o):ol(hr),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch($){wc(this,$);return}if(c=_||"",_=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var U in A)_.set(U,A[U]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const $ of A.keys())_.set($,A.get($));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(_.keys()).find($=>$.toLowerCase()=="content-type"),U=d.FormData&&c instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Ys,g,void 0))||A||U||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[$,ne]of _)this.g.setRequestHeader($,ne);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Xs(this),this.u=!0,this.g.send(c),this.u=!1}catch($){wc(this,$)}};function wc(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.m=5,Ga(c),_r(c)}function Ga(c){c.A||(c.A=!0,je(c,"complete"),je(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,je(this,"complete"),je(this,"abort"),_r(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),_r(this,!0)),ze.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?$a(this):this.bb())},n.bb=function(){$a(this)};function $a(c){if(c.h&&typeof h<"u"&&(!c.v[1]||kn(c)!=4||c.Z()!=2)){if(c.u&&kn(c)==4)Kt(c.Ea,0,c);else if(je(c,"readystatechange"),kn(c)==4){c.h=!1;try{const ne=c.Z();e:switch(ne){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var _;if(!(_=g)){var A;if(A=ne===0){var U=String(c.D).match(qs)[1]||null;!U&&d.self&&d.self.location&&(U=d.self.location.protocol.slice(0,-1)),A=!Ha.test(U?U.toLowerCase():"")}_=A}if(_)je(c,"complete"),je(c,"success");else{c.m=6;try{var $=2<kn(c)?c.g.statusText:""}catch{$=""}c.l=$+" ["+c.Z()+"]",Ga(c)}}finally{_r(c)}}}}function _r(c,g){if(c.g){Xs(c);const _=c.g,A=c.v[0]?()=>{}:null;c.g=null,c.v=null,g||je(c,"ready");try{_.onreadystatechange=A}catch{}}}function Xs(c){c.I&&(d.clearTimeout(c.I),c.I=null)}n.isActive=function(){return!!this.g};function kn(c){return c.g?c.g.readyState:0}n.Z=function(){try{return 2<kn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),Va(g)}};function Ac(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function md(c){const g={};c=(c.g&&2<=kn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<c.length;A++){if(Z(c[A]))continue;var _=D(c[A]);const U=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const $=g[U]||[];g[U]=$,$.push(_)}x(g,function(A){return A.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ws(c,g,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||g}function Ka(c){this.Aa=0,this.i=[],this.j=new On,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ws("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ws("baseRetryDelayMs",5e3,c),this.cb=Ws("retryDelaySeedMs",1e4,c),this.Wa=Ws("forwardChannelMaxRetries",2,c),this.wa=Ws("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Gr(c&&c.concurrentRequestLimit),this.Da=new Qs,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ka.prototype,n.la=8,n.G=1,n.connect=function(c,g,_,A){nt(0),this.W=c,this.H=g||{},_&&A!==void 0&&(this.H.OSID=_,this.H.OAID=A),this.F=this.X,this.I=Oc(this,null,this.W),Ya(this)};function Tl(c){if(Sc(c),c.G==3){var g=c.U++,_=yn(c.I);if(He(_,"SID",c.K),He(_,"RID",g),He(_,"TYPE","terminate"),Zs(c,_),g=new tn(c,c.j,g),g.L=2,g.v=Gs(yn(_)),_=!1,d.navigator&&d.navigator.sendBeacon)try{_=d.navigator.sendBeacon(g.v.toString(),"")}catch{}!_&&d.Image&&(new Image().src=g.v,_=!0),_||(g.g=Mc(g.j,null),g.g.ea(g.v)),g.F=Date.now(),js(g)}Dc(c)}function Qa(c){c.g&&(Js(c),c.g.cancel(),c.g=null)}function Sc(c){Qa(c),c.u&&(d.clearTimeout(c.u),c.u=null),Xa(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&d.clearTimeout(c.s),c.s=null)}function Ya(c){if(!za(c.h)&&!c.s){c.s=!0;var g=c.Ga;re||Le(),fe||(re(),fe=!0),De.add(g,c),c.B=0}}function gd(c,g){return Ba(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=g.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=_t(w(c.Ga,c,g),Al(c,c.B)),c.B++,!0)}n.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const U=new tn(this,this.j,c);let $=this.o;if(this.S&&($?($=S($),N($,this.S)):$=this.S),this.m!==null||this.O||(U.H=$,$=null),this.P)e:{for(var g=0,_=0;_<this.i.length;_++){t:{var A=this.i[_];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(g+=A,4096<g){g=_;break e}if(g===4096||_===this.i.length-1){g=_+1;break e}}g=1e3}else g=1e3;g=Rc(this,U,g),_=yn(this.I),He(_,"RID",c),He(_,"CVER",22),this.D&&He(_,"X-HTTP-Session-Id",this.D),Zs(this,_),$&&(this.O?g="headers="+encodeURIComponent(String(El($)))+"&"+g:this.m&&Mt(_,this.m,$)),ja(this.h,U),this.Ua&&He(_,"TYPE","init"),this.P?(He(_,"$req",g),He(_,"SID","null"),U.T=!0,Wn(U,_,null)):Wn(U,_,g),this.G=2}}else this.G==3&&(c?bl(this,c):this.i.length==0||za(this.h)||bl(this))};function bl(c,g){var _;g?_=g.l:_=c.U++;const A=yn(c.I);He(A,"SID",c.K),He(A,"RID",_),He(A,"AID",c.T),Zs(c,A),c.m&&c.o&&Mt(A,c.m,c.o),_=new tn(c,c.j,_,c.B+1),c.m===null&&(_.H=c.o),g&&(c.i=g.D.concat(c.i)),g=Rc(c,_,1e3),_.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),ja(c.h,_),Wn(_,A,g)}function Zs(c,g){c.H&&he(c.H,function(_,A){He(g,A,_)}),c.l&&ml({},function(_,A){He(g,A,_)})}function Rc(c,g,_){_=Math.min(c.i.length,_);var A=c.l?w(c.l.Na,c.l,c):null;e:{var U=c.i;let $=-1;for(;;){const ne=["count="+_];$==-1?0<_?($=U[0].g,ne.push("ofs="+$)):$=0:ne.push("ofs="+$);let Oe=!0;for(let Rt=0;Rt<_;Rt++){let Me=U[Rt].g;const xt=U[Rt].map;if(Me-=$,0>Me)$=Math.max(0,U[Rt].g-100),Oe=!1;else try{mr(xt,ne,"req"+Me+"_")}catch{A&&A(xt)}}if(Oe){A=ne.join("&");break e}}}return c=c.i.splice(0,_),g.D=c,A}function Ic(c){if(!c.g&&!c.u){c.Y=1;var g=c.Fa;re||Le(),fe||(re(),fe=!0),De.add(g,c),c.v=0}}function wl(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=_t(w(c.Fa,c),Al(c,c.v)),c.v++,!0)}n.Fa=function(){if(this.u=null,Cc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=_t(w(this.ab,this),c)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,nt(10),Qa(this),Cc(this))};function Js(c){c.A!=null&&(d.clearTimeout(c.A),c.A=null)}function Cc(c){c.g=new tn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var g=yn(c.qa);He(g,"RID","rpc"),He(g,"SID",c.K),He(g,"AID",c.T),He(g,"CI",c.F?"0":"1"),!c.F&&c.ja&&He(g,"TO",c.ja),He(g,"TYPE","xmlhttp"),Zs(c,g),c.m&&c.o&&Mt(g,c.m,c.o),c.L&&(c.g.I=c.L);var _=c.g;c=c.ia,_.L=1,_.v=Gs(yn(g)),_.m=null,_.P=!0,Hr(_,c)}n.Za=function(){this.C!=null&&(this.C=null,Qa(this),wl(this),nt(19))};function Xa(c){c.C!=null&&(d.clearTimeout(c.C),c.C=null)}function Nc(c,g){var _=null;if(c.g==g){Xa(c),Js(c),c.g=null;var A=2}else if(dl(c.h,g))_=g.D,nn(c.h,g),A=1;else return;if(c.G!=0){if(g.o)if(A==1){_=g.m?g.m.length:0,g=Date.now()-g.F;var U=c.B;A=Ci(),je(A,new St(A,_)),Ya(c)}else Ic(c);else if(U=g.s,U==3||U==0&&0<g.X||!(A==1&&gd(c,g)||A==2&&wl(c)))switch(_&&0<_.length&&(g=c.h,g.i=g.i.concat(_)),U){case 1:Wr(c,5);break;case 4:Wr(c,10);break;case 3:Wr(c,6);break;default:Wr(c,2)}}}function Al(c,g){let _=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(_*=2),_*g}function Wr(c,g){if(c.j.info("Error code "+g),g==2){var _=w(c.fb,c),A=c.Xa;const U=!A;A=new vt(A||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Hs(A,"https"),Gs(A),U?Ks(A.toString(),_):Zn(A.toString(),_)}else nt(2);c.G=0,c.l&&c.l.sa(g),Dc(c),Sc(c)}n.fb=function(c){c?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function Dc(c){if(c.G=0,c.ka=[],c.l){const g=pl(c.h);(g.length!=0||c.i.length!=0)&&(V(c.ka,g),V(c.ka,c.i),c.h.i.length=0,F(c.i),c.i.length=0),c.l.ra()}}function Oc(c,g,_){var A=_ instanceof vt?yn(_):new vt(_);if(A.g!="")g&&(A.g=g+"."+A.g),xi(A,A.s);else{var U=d.location;A=U.protocol,g=g?g+"."+U.hostname:U.hostname,U=+U.port;var $=new vt(null);A&&Hs($,A),g&&($.g=g),U&&xi($,U),_&&($.l=_),A=$}return _=c.D,g=c.ya,_&&g&&He(A,_,g),He(A,"VER",c.la),Zs(c,A),A}function Mc(c,g,_){if(g&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Ca&&!c.pa?new ze(new Pi({eb:_})):new ze(c.pa),g.Ha(c.J),g}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function xc(){}n=xc.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Wa(){}Wa.prototype.g=function(c,g){return new rn(c,g)};function rn(c,g){ot.call(this),this.g=new Ka(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(c?c["X-WebChannel-Client-Profile"]=g.va:c={"X-WebChannel-Client-Profile":g.va}),this.g.S=c,(c=g&&g.Sb)&&!Z(c)&&(this.g.m=c),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!Z(g)&&(this.g.D=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new vr(this)}k(rn,ot),rn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},rn.prototype.close=function(){Tl(this.g)},rn.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.u&&(_={},_.__data__=Xn(c),c=_);g.i.push(new Ec(g.Ya++,c)),g.G==3&&Ya(g)},rn.prototype.N=function(){this.g.l=null,delete this.j,Tl(this.g),delete this.g,rn.aa.N.call(this)};function Pc(c){Fr.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){e:{for(const _ in g){c=_;break e}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}k(Pc,Fr);function kc(){ul.call(this),this.status=1}k(kc,ul);function vr(c){this.g=c}k(vr,xc),vr.prototype.ua=function(){je(this.g,"a")},vr.prototype.ta=function(c){je(this.g,new Pc(c))},vr.prototype.sa=function(c){je(this.g,new kc)},vr.prototype.ra=function(){je(this.g,"b")},Wa.prototype.createWebChannel=Wa.prototype.g,rn.prototype.send=rn.prototype.o,rn.prototype.open=rn.prototype.m,rn.prototype.close=rn.prototype.close,qw=function(){return new Wa},Fw=function(){return Ci()},jw=cr,Xm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Oi.NO_ERROR=0,Oi.TIMEOUT=8,Oi.HTTP_ERROR=6,Jh=Oi,qr.COMPLETE="complete",Bw=qr,ll.EventType=jr,jr.OPEN="a",jr.CLOSE="b",jr.ERROR="c",jr.MESSAGE="d",ot.prototype.listen=ot.prototype.K,vu=ll,ze.prototype.listenOnce=ze.prototype.L,ze.prototype.getLastError=ze.prototype.Ka,ze.prototype.getLastErrorCode=ze.prototype.Ba,ze.prototype.getStatus=ze.prototype.Z,ze.prototype.getResponseJson=ze.prototype.Oa,ze.prototype.getResponseText=ze.prototype.oa,ze.prototype.send=ze.prototype.ea,ze.prototype.setWithCredentials=ze.prototype.Ha,zw=ze}).apply(typeof Uh<"u"?Uh:typeof self<"u"?self:typeof window<"u"?window:{});const GT="@firebase/firestore",$T="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xt.UNAUTHENTICATED=new Xt(null),Xt.GOOGLE_CREDENTIALS=new Xt("google-credentials-uid"),Xt.FIRST_PARTY=new Xt("first-party-uid"),Xt.MOCK_USER=new Xt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xo="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa=new Zu("@firebase/firestore");function Io(){return Aa.logLevel}function oe(n,...e){if(Aa.logLevel<=Ie.DEBUG){const t=e.map(Gg);Aa.debug(`Firestore (${Xo}): ${n}`,...t)}}function Ti(n,...e){if(Aa.logLevel<=Ie.ERROR){const t=e.map(Gg);Aa.error(`Firestore (${Xo}): ${n}`,...t)}}function jo(n,...e){if(Aa.logLevel<=Ie.WARN){const t=e.map(Gg);Aa.warn(`Firestore (${Xo}): ${n}`,...t)}}function Gg(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Hw(n,s,t)}function Hw(n,e,t){let s=`FIRESTORE (${Xo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Ti(s),new Error(s)}function Be(n,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,n||Hw(e,o,s)}function Te(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ae extends Yn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class aM{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Xt.UNAUTHENTICATED))}shutdown(){}}class oM{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class lM{constructor(e){this.t=e,this.currentUser=Xt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Be(this.o===void 0,42304);let s=this.i;const o=m=>this.i!==s?(s=this.i,t(m)):Promise.resolve();let u=new ms;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new ms,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const m=u;e.enqueueRetryable(async()=>{await m.promise,await o(this.currentUser)})},d=m=>{oe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(m=>d(m)),setTimeout(()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?d(m):(oe("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new ms)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(oe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Be(typeof s.accessToken=="string",31837,{l:s}),new Gw(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Be(e===null||typeof e=="string",2055,{h:e}),new Xt(e)}}class uM{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Xt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class cM{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new uM(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Xt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class KT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hM{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ln(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Be(this.o===void 0,3512);const s=u=>{u.error!=null&&oe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,oe("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{oe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):oe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new KT(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Be(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new KT(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fM(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=fM(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function Ce(n,e){return n<e?-1:n>e?1:0}function Wm(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const o=n.charAt(s),u=e.charAt(s);if(o!==u)return Em(o)===Em(u)?Ce(o,u):Em(o)?1:-1}return Ce(n.length,e.length)}const dM=55296,pM=57343;function Em(n){const e=n.charCodeAt(0);return e>=dM&&e<=pM}function Fo(n,e,t){return n.length===e.length&&n.every((s,o)=>t(s,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT="__name__";class Rr{constructor(e,t,s){t===void 0?t=0:t>e.length&&ye(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&ye(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Rr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Rr?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=Rr.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Ce(e.length,t.length)}static compareSegments(e,t){const s=Rr.isNumericId(e),o=Rr.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?Rr.extractNumericId(e).compare(Rr.extractNumericId(t)):Wm(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ps.fromString(e.substring(4,e.length-2))}}class Je extends Rr{construct(e,t,s){return new Je(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ae(W.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new Je(t)}static emptyPath(){return new Je([])}}const mM=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ht extends Rr{construct(e,t,s){return new Ht(e,t,s)}static isValidIdentifier(e){return mM.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ht.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===QT}static keyField(){return new Ht([QT])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new ae(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const d=e[o];if(d==="\\"){if(o+1===e.length)throw new ae(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[o+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new ae(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=m,o+=2}else d==="`"?(h=!h,o++):d!=="."||h?(s+=d,o++):(u(),o++)}if(u(),h)throw new ae(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ht(t)}static emptyPath(){return new Ht([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.path=e}static fromPath(e){return new de(Je.fromString(e))}static fromName(e){return new de(Je.fromString(e).popFirst(5))}static empty(){return new de(Je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Je.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new de(new Je(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $w(n,e,t){if(!t)throw new ae(W.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function gM(n,e,t,s){if(e===!0&&s===!0)throw new ae(W.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function YT(n){if(!de.isDocumentKey(n))throw new ae(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function XT(n){if(de.isDocumentKey(n))throw new ae(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Kw(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Lf(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ye(12329,{type:typeof n})}function Gn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ae(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Lf(n);throw new ae(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(n,e){const t={typeString:n};return e&&(t.value=e),t}function ic(n,e){if(!Kw(n))throw new ae(W.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const h=n[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new ae(W.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT=-62135596800,ZT=1e6;class tt{static now(){return tt.fromMillis(Date.now())}static fromDate(e){return tt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*ZT);return new tt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ae(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ae(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<WT)throw new ae(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ae(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ZT}_compareTo(e){return this.seconds===e.seconds?Ce(this.nanoseconds,e.nanoseconds):Ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:tt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ic(e,tt._jsonSchema))return new tt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-WT;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}tt._jsonSchemaVersion="firestore/timestamp/1.0",tt._jsonSchema={type:At("string",tt._jsonSchemaVersion),seconds:At("number"),nanoseconds:At("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{static fromTimestamp(e){return new Ee(e)}static min(){return new Ee(new tt(0,0))}static max(){return new Ee(new tt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu=-1;function yM(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,o=Ee.fromTimestamp(s===1e9?new tt(t+1,0):new tt(t,s));return new vs(o,de.empty(),e)}function _M(n){return new vs(n.readTime,n.key,Uu)}class vs{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new vs(Ee.min(),de.empty(),Uu)}static max(){return new vs(Ee.max(),de.empty(),Uu)}}function vM(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=de.comparator(n.documentKey,e.documentKey),t!==0?t:Ce(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EM="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class TM{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wo(n){if(n.code!==W.FAILED_PRECONDITION||n.message!==EM)throw n;oe("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ye(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ee((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof ee?t:ee.resolve(t)}catch(t){return ee.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):ee.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):ee.reject(t)}static resolve(e){return new ee((t,s)=>{t(e)})}static reject(e){return new ee((t,s)=>{s(e)})}static waitFor(e){return new ee((t,s)=>{let o=0,u=0,h=!1;e.forEach(d=>{++o,d.next(()=>{++u,h&&u===o&&t()},m=>s(m))}),h=!0,u===o&&t()})}static or(e){let t=ee.resolve(!1);for(const s of e)t=t.next(o=>o?ee.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,u)=>{s.push(t.call(this,o,u))}),this.waitFor(s)}static mapArray(e,t){return new ee((s,o)=>{const u=e.length,h=new Array(u);let d=0;for(let m=0;m<u;m++){const y=m;t(e[y]).next(E=>{h[y]=E,++d,d===u&&s(h)},E=>o(E))}})}static doWhile(e,t){return new ee((s,o)=>{const u=()=>{e()===!0?t().next(()=>{u()},o):s()};u()})}}function bM(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Zo(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Uf.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg=-1;function zf(n){return n==null}function _f(n){return n===0&&1/n==-1/0}function wM(n){return typeof n=="number"&&Number.isInteger(n)&&!_f(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw="";function AM(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=JT(e)),e=SM(n.get(t),e);return JT(e)}function SM(n,e){let t=e;const s=n.length;for(let o=0;o<s;o++){const u=n.charAt(o);switch(u){case"\0":t+="";break;case Qw:t+="";break;default:t+=u}}return t}function JT(n){return n+Qw+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e0(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ds(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Yw(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,t){this.comparator=e,this.root=t||qt.EMPTY}insert(e,t){return new at(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,qt.BLACK,null,null))}remove(e){return new at(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new zh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new zh(this.root,e,this.comparator,!1)}getReverseIterator(){return new zh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new zh(this.root,e,this.comparator,!0)}}class zh{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qt{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??qt.RED,this.left=o??qt.EMPTY,this.right=u??qt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new qt(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return qt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return qt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ye(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ye(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ye(27949);return e+(this.isRed()?0:1)}}qt.EMPTY=null,qt.RED=!0,qt.BLACK=!1;qt.EMPTY=new class{constructor(){this.size=0}get key(){throw ye(57766)}get value(){throw ye(16141)}get color(){throw ye(16727)}get left(){throw ye(29726)}get right(){throw ye(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new qt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.comparator=e,this.data=new at(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new t0(this.data.getIterator())}getIteratorFrom(e){return new t0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof Dt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Dt(this.comparator);return t.data=e,t}}class t0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this.fields=e,e.sort(Ht.comparator)}static empty(){return new Rn([])}unionWith(e){let t=new Dt(Ht.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Rn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Fo(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new Xw("Invalid base64 string: "+u):u}}(e);return new Gt(t)}static fromUint8Array(e){const t=function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u}(e);return new Gt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Gt.EMPTY_BYTE_STRING=new Gt("");const RM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Es(n){if(Be(!!n,39018),typeof n=="string"){let e=0;const t=RM.exec(n);if(Be(!!t,46558,{timestamp:n}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:gt(n.seconds),nanos:gt(n.nanos)}}function gt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ts(n){return typeof n=="string"?Gt.fromBase64String(n):Gt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww="server_timestamp",Zw="__type__",Jw="__previous_value__",eA="__local_write_time__";function Qg(n){return(n?.mapValue?.fields||{})[Zw]?.stringValue===Ww}function Bf(n){const e=n.mapValue.fields[Jw];return Qg(e)?Bf(e):e}function zu(n){const e=Es(n.mapValue.fields[eA].timestampValue);return new tt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IM{constructor(e,t,s,o,u,h,d,m,y,E){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=d,this.longPollingOptions=m,this.useFetchStreams=y,this.isUsingEmulator=E}}const vf="(default)";class Bu{constructor(e,t){this.projectId=e,this.database=t||vf}static empty(){return new Bu("","")}get isDefaultDatabase(){return this.database===vf}isEqual(e){return e instanceof Bu&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tA="__type__",CM="__max__",Bh={mapValue:{}},nA="__vector__",Ef="value";function bs(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Qg(n)?4:DM(n)?9007199254740991:NM(n)?10:11:ye(28295,{value:n})}function Pr(n,e){if(n===e)return!0;const t=bs(n);if(t!==bs(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return zu(n).isEqual(zu(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=Es(o.timestampValue),d=Es(u.timestampValue);return h.seconds===d.seconds&&h.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(o,u){return Ts(o.bytesValue).isEqual(Ts(u.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(o,u){return gt(o.geoPointValue.latitude)===gt(u.geoPointValue.latitude)&&gt(o.geoPointValue.longitude)===gt(u.geoPointValue.longitude)}(n,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return gt(o.integerValue)===gt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=gt(o.doubleValue),d=gt(u.doubleValue);return h===d?_f(h)===_f(d):isNaN(h)&&isNaN(d)}return!1}(n,e);case 9:return Fo(n.arrayValue.values||[],e.arrayValue.values||[],Pr);case 10:case 11:return function(o,u){const h=o.mapValue.fields||{},d=u.mapValue.fields||{};if(e0(h)!==e0(d))return!1;for(const m in h)if(h.hasOwnProperty(m)&&(d[m]===void 0||!Pr(h[m],d[m])))return!1;return!0}(n,e);default:return ye(52216,{left:n})}}function ju(n,e){return(n.values||[]).find(t=>Pr(t,e))!==void 0}function qo(n,e){if(n===e)return 0;const t=bs(n),s=bs(e);if(t!==s)return Ce(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ce(n.booleanValue,e.booleanValue);case 2:return function(u,h){const d=gt(u.integerValue||u.doubleValue),m=gt(h.integerValue||h.doubleValue);return d<m?-1:d>m?1:d===m?0:isNaN(d)?isNaN(m)?0:-1:1}(n,e);case 3:return n0(n.timestampValue,e.timestampValue);case 4:return n0(zu(n),zu(e));case 5:return Wm(n.stringValue,e.stringValue);case 6:return function(u,h){const d=Ts(u),m=Ts(h);return d.compareTo(m)}(n.bytesValue,e.bytesValue);case 7:return function(u,h){const d=u.split("/"),m=h.split("/");for(let y=0;y<d.length&&y<m.length;y++){const E=Ce(d[y],m[y]);if(E!==0)return E}return Ce(d.length,m.length)}(n.referenceValue,e.referenceValue);case 8:return function(u,h){const d=Ce(gt(u.latitude),gt(h.latitude));return d!==0?d:Ce(gt(u.longitude),gt(h.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return r0(n.arrayValue,e.arrayValue);case 10:return function(u,h){const d=u.fields||{},m=h.fields||{},y=d[Ef]?.arrayValue,E=m[Ef]?.arrayValue,b=Ce(y?.values?.length||0,E?.values?.length||0);return b!==0?b:r0(y,E)}(n.mapValue,e.mapValue);case 11:return function(u,h){if(u===Bh.mapValue&&h===Bh.mapValue)return 0;if(u===Bh.mapValue)return 1;if(h===Bh.mapValue)return-1;const d=u.fields||{},m=Object.keys(d),y=h.fields||{},E=Object.keys(y);m.sort(),E.sort();for(let b=0;b<m.length&&b<E.length;++b){const w=Wm(m[b],E[b]);if(w!==0)return w;const O=qo(d[m[b]],y[E[b]]);if(O!==0)return O}return Ce(m.length,E.length)}(n.mapValue,e.mapValue);default:throw ye(23264,{he:t})}}function n0(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ce(n,e);const t=Es(n),s=Es(e),o=Ce(t.seconds,s.seconds);return o!==0?o:Ce(t.nanos,s.nanos)}function r0(n,e){const t=n.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=qo(t[o],s[o]);if(u)return u}return Ce(t.length,s.length)}function Ho(n){return Zm(n)}function Zm(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const s=Es(t);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Ts(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return de.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=Zm(u);return s+"]"}(n.arrayValue):"mapValue"in n?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${Zm(t.fields[h])}`;return o+"}"}(n.mapValue):ye(61005,{value:n})}function ef(n){switch(bs(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Bf(n);return e?16+ef(e):16;case 5:return 2*n.stringValue.length;case 6:return Ts(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+ef(u),0)}(n.arrayValue);case 10:case 11:return function(s){let o=0;return Ds(s.fields,(u,h)=>{o+=u.length+ef(h)}),o}(n.mapValue);default:throw ye(13486,{value:n})}}function i0(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Jm(n){return!!n&&"integerValue"in n}function Yg(n){return!!n&&"arrayValue"in n}function s0(n){return!!n&&"nullValue"in n}function a0(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function tf(n){return!!n&&"mapValue"in n}function NM(n){return(n?.mapValue?.fields||{})[tA]?.stringValue===nA}function Ru(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Ds(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Ru(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ru(n.arrayValue.values[t]);return e}return{...n}}function DM(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===CM}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this.value=e}static empty(){return new pn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!tf(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ru(t)}setAll(e){let t=Ht.emptyPath(),s={},o=[];e.forEach((h,d)=>{if(!t.isImmediateParentOf(d)){const m=this.getFieldsMap(t);this.applyChanges(m,s,o),s={},o=[],t=d.popLast()}h?s[d.lastSegment()]=Ru(h):o.push(d.lastSegment())});const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());tf(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Pr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];tf(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Ds(t,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new pn(Ru(this.value))}}function rA(n){const e=[];return Ds(n.fields,(t,s)=>{const o=new Ht([t]);if(tf(s)){const u=rA(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)}),new Rn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,t,s,o,u,h,d){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=d}static newInvalidDocument(e){return new Zt(e,0,Ee.min(),Ee.min(),Ee.min(),pn.empty(),0)}static newFoundDocument(e,t,s,o){return new Zt(e,1,t,Ee.min(),s,o,0)}static newNoDocument(e,t){return new Zt(e,2,t,Ee.min(),Ee.min(),pn.empty(),0)}static newUnknownDocument(e,t){return new Zt(e,3,t,Ee.min(),Ee.min(),pn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=pn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=pn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Zt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Zt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e,t){this.position=e,this.inclusive=t}}function o0(n,e,t){let s=0;for(let o=0;o<n.position.length;o++){const u=e[o],h=n.position[o];if(u.field.isKeyField()?s=de.comparator(de.fromName(h.referenceValue),t.key):s=qo(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function l0(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Pr(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e,t="asc"){this.field=e,this.dir=t}}function OM(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{}class wt extends iA{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new xM(e,t,s):t==="array-contains"?new VM(e,s):t==="in"?new LM(e,s):t==="not-in"?new UM(e,s):t==="array-contains-any"?new zM(e,s):new wt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new PM(e,s):new kM(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(qo(t,this.value)):t!==null&&bs(this.value)===bs(t)&&this.matchesComparison(qo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ye(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ar extends iA{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new ar(e,t)}matches(e){return sA(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function sA(n){return n.op==="and"}function aA(n){return MM(n)&&sA(n)}function MM(n){for(const e of n.filters)if(e instanceof ar)return!1;return!0}function eg(n){if(n instanceof wt)return n.field.canonicalString()+n.op.toString()+Ho(n.value);if(aA(n))return n.filters.map(e=>eg(e)).join(",");{const e=n.filters.map(t=>eg(t)).join(",");return`${n.op}(${e})`}}function oA(n,e){return n instanceof wt?function(s,o){return o instanceof wt&&s.op===o.op&&s.field.isEqual(o.field)&&Pr(s.value,o.value)}(n,e):n instanceof ar?function(s,o){return o instanceof ar&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,h,d)=>u&&oA(h,o.filters[d]),!0):!1}(n,e):void ye(19439)}function lA(n){return n instanceof wt?function(t){return`${t.field.canonicalString()} ${t.op} ${Ho(t.value)}`}(n):n instanceof ar?function(t){return t.op.toString()+" {"+t.getFilters().map(lA).join(" ,")+"}"}(n):"Filter"}class xM extends wt{constructor(e,t,s){super(e,t,s),this.key=de.fromName(s.referenceValue)}matches(e){const t=de.comparator(e.key,this.key);return this.matchesComparison(t)}}class PM extends wt{constructor(e,t){super(e,"in",t),this.keys=uA("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class kM extends wt{constructor(e,t){super(e,"not-in",t),this.keys=uA("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function uA(n,e){return(e.arrayValue?.values||[]).map(t=>de.fromName(t.referenceValue))}class VM extends wt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Yg(t)&&ju(t.arrayValue,this.value)}}class LM extends wt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ju(this.value.arrayValue,t)}}class UM extends wt{constructor(e,t){super(e,"not-in",t)}matches(e){if(ju(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ju(this.value.arrayValue,t)}}class zM extends wt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Yg(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>ju(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BM{constructor(e,t=null,s=[],o=[],u=null,h=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=d,this.Te=null}}function u0(n,e=null,t=[],s=[],o=null,u=null,h=null){return new BM(n,e,t,s,o,u,h)}function Xg(n){const e=Te(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>eg(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),zf(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Ho(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Ho(s)).join(",")),e.Te=t}return e.Te}function Wg(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!OM(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!oA(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!l0(n.startAt,e.startAt)&&l0(n.endAt,e.endAt)}function tg(n){return de.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,t=null,s=[],o=[],u=null,h="F",d=null,m=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=d,this.endAt=m,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function jM(n,e,t,s,o,u,h,d){return new Jo(n,e,t,s,o,u,h,d)}function jf(n){return new Jo(n)}function c0(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function cA(n){return n.collectionGroup!==null}function Iu(n){const e=Te(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const u of e.explicitOrderBy)e.Ie.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let d=new Dt(Ht.comparator);return h.filters.forEach(m=>{m.getFlattenedFilters().forEach(y=>{y.isInequality()&&(d=d.add(y.field))})}),d})(e).forEach(u=>{t.has(u.canonicalString())||u.isKeyField()||e.Ie.push(new Fu(u,s))}),t.has(Ht.keyField().canonicalString())||e.Ie.push(new Fu(Ht.keyField(),s))}return e.Ie}function Dr(n){const e=Te(n);return e.Ee||(e.Ee=FM(e,Iu(n))),e.Ee}function FM(n,e){if(n.limitType==="F")return u0(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new Fu(o.field,u)});const t=n.endAt?new Tf(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Tf(n.startAt.position,n.startAt.inclusive):null;return u0(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function ng(n,e){const t=n.filters.concat([e]);return new Jo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function rg(n,e,t){return new Jo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ff(n,e){return Wg(Dr(n),Dr(e))&&n.limitType===e.limitType}function hA(n){return`${Xg(Dr(n))}|lt:${n.limitType}`}function Co(n){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>lA(o)).join(", ")}]`),zf(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>Ho(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>Ho(o)).join(",")),`Target(${s})`}(Dr(n))}; limitType=${n.limitType})`}function qf(n,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):de.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(n,e)&&function(s,o){for(const u of Iu(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(n,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(n,e)&&function(s,o){return!(s.startAt&&!function(h,d,m){const y=o0(h,d,m);return h.inclusive?y<=0:y<0}(s.startAt,Iu(s),o)||s.endAt&&!function(h,d,m){const y=o0(h,d,m);return h.inclusive?y>=0:y>0}(s.endAt,Iu(s),o))}(n,e)}function qM(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function fA(n){return(e,t)=>{let s=!1;for(const o of Iu(n)){const u=HM(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function HM(n,e,t){const s=n.field.isKeyField()?de.comparator(e.key,t.key):function(u,h,d){const m=h.data.field(u),y=d.data.field(u);return m!==null&&y!==null?qo(m,y):ye(42886)}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return ye(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Ds(this.inner,(t,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return Yw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GM=new at(de.comparator);function bi(){return GM}const dA=new at(de.comparator);function Eu(...n){let e=dA;for(const t of n)e=e.insert(t.key,t);return e}function pA(n){let e=dA;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function va(){return Cu()}function mA(){return Cu()}function Cu(){return new Da(n=>n.toString(),(n,e)=>n.isEqual(e))}const $M=new at(de.comparator),KM=new Dt(de.comparator);function Ne(...n){let e=KM;for(const t of n)e=e.add(t);return e}const QM=new Dt(Ce);function YM(){return QM}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zg(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_f(e)?"-0":e}}function gA(n){return{integerValue:""+n}}function yA(n,e){return wM(e)?gA(e):Zg(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(){this._=void 0}}function XM(n,e,t){return n instanceof bf?function(o,u){const h={fields:{[Zw]:{stringValue:Ww},[eA]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Qg(u)&&(u=Bf(u)),u&&(h.fields[Jw]=u),{mapValue:h}}(t,e):n instanceof qu?vA(n,e):n instanceof Hu?EA(n,e):function(o,u){const h=_A(o,u),d=h0(h)+h0(o.Ae);return Jm(h)&&Jm(o.Ae)?gA(d):Zg(o.serializer,d)}(n,e)}function WM(n,e,t){return n instanceof qu?vA(n,e):n instanceof Hu?EA(n,e):t}function _A(n,e){return n instanceof Gu?function(s){return Jm(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class bf extends Hf{}class qu extends Hf{constructor(e){super(),this.elements=e}}function vA(n,e){const t=TA(e);for(const s of n.elements)t.some(o=>Pr(o,s))||t.push(s);return{arrayValue:{values:t}}}class Hu extends Hf{constructor(e){super(),this.elements=e}}function EA(n,e){let t=TA(e);for(const s of n.elements)t=t.filter(o=>!Pr(o,s));return{arrayValue:{values:t}}}class Gu extends Hf{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function h0(n){return gt(n.integerValue||n.doubleValue)}function TA(n){return Yg(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZM{constructor(e,t){this.field=e,this.transform=t}}function JM(n,e){return n.field.isEqual(e.field)&&function(s,o){return s instanceof qu&&o instanceof qu||s instanceof Hu&&o instanceof Hu?Fo(s.elements,o.elements,Pr):s instanceof Gu&&o instanceof Gu?Pr(s.Ae,o.Ae):s instanceof bf&&o instanceof bf}(n.transform,e.transform)}class ex{constructor(e,t){this.version=e,this.transformResults=t}}class $n{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new $n}static exists(e){return new $n(void 0,e)}static updateTime(e){return new $n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function nf(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Gf{}function bA(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Jg(n.key,$n.none()):new sc(n.key,n.data,$n.none());{const t=n.data,s=pn.empty();let o=new Dt(Ht.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new Os(n.key,s,new Rn(o.toArray()),$n.none())}}function tx(n,e,t){n instanceof sc?function(o,u,h){const d=o.value.clone(),m=d0(o.fieldTransforms,u,h.transformResults);d.setAll(m),u.convertToFoundDocument(h.version,d).setHasCommittedMutations()}(n,e,t):n instanceof Os?function(o,u,h){if(!nf(o.precondition,u))return void u.convertToUnknownDocument(h.version);const d=d0(o.fieldTransforms,u,h.transformResults),m=u.data;m.setAll(wA(o)),m.setAll(d),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()}(n,e,t):function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function Nu(n,e,t,s){return n instanceof sc?function(u,h,d,m){if(!nf(u.precondition,h))return d;const y=u.value.clone(),E=p0(u.fieldTransforms,m,h);return y.setAll(E),h.convertToFoundDocument(h.version,y).setHasLocalMutations(),null}(n,e,t,s):n instanceof Os?function(u,h,d,m){if(!nf(u.precondition,h))return d;const y=p0(u.fieldTransforms,m,h),E=h.data;return E.setAll(wA(u)),E.setAll(y),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),d===null?null:d.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(b=>b.field))}(n,e,t,s):function(u,h,d){return nf(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):d}(n,e,t)}function nx(n,e){let t=null;for(const s of n.fieldTransforms){const o=e.data.field(s.field),u=_A(s.transform,o||null);u!=null&&(t===null&&(t=pn.empty()),t.set(s.field,u))}return t||null}function f0(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Fo(s,o,(u,h)=>JM(u,h))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class sc extends Gf{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Os extends Gf{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function wA(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function d0(n,e,t){const s=new Map;Be(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let o=0;o<t.length;o++){const u=n[o],h=u.transform,d=e.data.field(u.field);s.set(u.field,WM(h,d,t[o]))}return s}function p0(n,e,t){const s=new Map;for(const o of n){const u=o.transform,h=t.data.field(o.field);s.set(o.field,XM(u,h,e))}return s}class Jg extends Gf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class rx extends Gf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&tx(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Nu(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Nu(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=mA();return this.mutations.forEach(o=>{const u=e.get(o.key),h=u.overlayedDocument;let d=this.applyToLocalView(h,u.mutatedFields);d=t.has(o.key)?null:d;const m=bA(h,d);m!==null&&s.set(o.key,m),h.isValidDocument()||h.convertToNoDocument(Ee.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ne())}isEqual(e){return this.batchId===e.batchId&&Fo(this.mutations,e.mutations,(t,s)=>f0(t,s))&&Fo(this.baseMutations,e.baseMutations,(t,s)=>f0(t,s))}}class ey{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Be(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=function(){return $M}();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new ey(e,t,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var bt,Pe;function ox(n){switch(n){case W.OK:return ye(64938);case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0;default:return ye(15467,{code:n})}}function AA(n){if(n===void 0)return Ti("GRPC error has no .code"),W.UNKNOWN;switch(n){case bt.OK:return W.OK;case bt.CANCELLED:return W.CANCELLED;case bt.UNKNOWN:return W.UNKNOWN;case bt.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case bt.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case bt.INTERNAL:return W.INTERNAL;case bt.UNAVAILABLE:return W.UNAVAILABLE;case bt.UNAUTHENTICATED:return W.UNAUTHENTICATED;case bt.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case bt.NOT_FOUND:return W.NOT_FOUND;case bt.ALREADY_EXISTS:return W.ALREADY_EXISTS;case bt.PERMISSION_DENIED:return W.PERMISSION_DENIED;case bt.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case bt.ABORTED:return W.ABORTED;case bt.OUT_OF_RANGE:return W.OUT_OF_RANGE;case bt.UNIMPLEMENTED:return W.UNIMPLEMENTED;case bt.DATA_LOSS:return W.DATA_LOSS;default:return ye(39323,{code:n})}}(Pe=bt||(bt={}))[Pe.OK=0]="OK",Pe[Pe.CANCELLED=1]="CANCELLED",Pe[Pe.UNKNOWN=2]="UNKNOWN",Pe[Pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Pe[Pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Pe[Pe.NOT_FOUND=5]="NOT_FOUND",Pe[Pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Pe[Pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Pe[Pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Pe[Pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Pe[Pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Pe[Pe.ABORTED=10]="ABORTED",Pe[Pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Pe[Pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Pe[Pe.INTERNAL=13]="INTERNAL",Pe[Pe.UNAVAILABLE=14]="UNAVAILABLE",Pe[Pe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lx(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ux=new ps([4294967295,4294967295],0);function m0(n){const e=lx().encode(n),t=new Uw;return t.update(e),new Uint8Array(t.digest())}function g0(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new ps([t,s],0),new ps([o,u],0)]}class ty{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Tu(`Invalid padding: ${t}`);if(s<0)throw new Tu(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Tu(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Tu(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=ps.fromNumber(this.ge)}ye(e,t,s){let o=e.add(t.multiply(ps.fromNumber(s)));return o.compare(ux)===1&&(o=new ps([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=m0(e),[s,o]=g0(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);if(!this.we(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new ty(u,o,t);return s.forEach(d=>h.insert(d)),h}insert(e){if(this.ge===0)return;const t=m0(e),[s,o]=g0(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);this.Se(h)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Tu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,ac.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new $f(Ee.min(),o,new at(Ce),bi(),Ne())}}class ac{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new ac(s,t,Ne(),Ne(),Ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e,t,s,o){this.be=e,this.removedTargetIds=t,this.key=s,this.De=o}}class SA{constructor(e,t){this.targetId=e,this.Ce=t}}class RA{constructor(e,t,s=Gt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class y0{constructor(){this.ve=0,this.Fe=_0(),this.Me=Gt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ne(),t=Ne(),s=Ne();return this.Fe.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:ye(38017,{changeType:u})}}),new ac(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=_0()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Be(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class cx{constructor(e){this.Ge=e,this.ze=new Map,this.je=bi(),this.Je=jh(),this.He=jh(),this.Ye=new at(Ce)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:ye(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((s,o)=>{this.rt(o)&&t(o)})}st(e){const t=e.targetId,s=e.Ce.count,o=this.ot(t);if(o){const u=o.target;if(tg(u))if(s===0){const h=new de(u.path);this.et(t,h,Zt.newNoDocument(h,Ee.min()))}else Be(s===1,20013,{expectedCount:s});else{const h=this._t(t);if(h!==s){const d=this.ut(e),m=d?this.ct(d,e,h):1;if(m!==0){this.it(t);const y=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,y)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,d;try{h=Ts(s).toUint8Array()}catch(m){if(m instanceof Xw)return jo("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{d=new ty(h,o,u)}catch(m){return jo(m instanceof Tu?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return d.ge===0?null:d}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let o=0;return s.forEach(u=>{const h=this.Ge.ht(),d=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(d)||(this.et(t,u,null),o++)}),o}Tt(e){const t=new Map;this.ze.forEach((u,h)=>{const d=this.ot(h);if(d){if(u.current&&tg(d.target)){const m=new de(d.target.path);this.It(m).has(h)||this.Et(h,m)||this.et(h,m,Zt.newNoDocument(m,e))}u.Be&&(t.set(h,u.ke()),u.qe())}});let s=Ne();this.He.forEach((u,h)=>{let d=!0;h.forEachWhile(m=>{const y=this.ot(m);return!y||y.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(s=s.add(u))}),this.je.forEach((u,h)=>h.setReadTime(e));const o=new $f(e,t,this.Ye,this.je,s);return this.je=bi(),this.Je=jh(),this.He=jh(),this.Ye=new at(Ce),o}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.Qe(t,1):o.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new y0,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Dt(Ce),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Dt(Ce),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||oe("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new y0),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function jh(){return new at(de.comparator)}function _0(){return new at(de.comparator)}const hx={asc:"ASCENDING",desc:"DESCENDING"},fx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},dx={and:"AND",or:"OR"};class px{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ig(n,e){return n.useProto3Json||zf(e)?e:{value:e}}function wf(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function IA(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function mx(n,e){return wf(n,e.toTimestamp())}function Or(n){return Be(!!n,49232),Ee.fromTimestamp(function(t){const s=Es(t);return new tt(s.seconds,s.nanos)}(n))}function ny(n,e){return sg(n,e).canonicalString()}function sg(n,e){const t=function(o){return new Je(["projects",o.projectId,"databases",o.database])}(n).child("documents");return e===void 0?t:t.child(e)}function CA(n){const e=Je.fromString(n);return Be(xA(e),10190,{key:e.toString()}),e}function ag(n,e){return ny(n.databaseId,e.path)}function Tm(n,e){const t=CA(e);if(t.get(1)!==n.databaseId.projectId)throw new ae(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ae(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new de(DA(t))}function NA(n,e){return ny(n.databaseId,e)}function gx(n){const e=CA(n);return e.length===4?Je.emptyPath():DA(e)}function og(n){return new Je(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function DA(n){return Be(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function v0(n,e,t){return{name:ag(n,e),fields:t.value.mapValue.fields}}function yx(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:ye(39313,{state:y})}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(y,E){return y.useProto3Json?(Be(E===void 0||typeof E=="string",58123),Gt.fromBase64String(E||"")):(Be(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),Gt.fromUint8Array(E||new Uint8Array))}(n,e.targetChange.resumeToken),h=e.targetChange.cause,d=h&&function(y){const E=y.code===void 0?W.UNKNOWN:AA(y.code);return new ae(E,y.message||"")}(h);t=new RA(s,o,u,d||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Tm(n,s.document.name),u=Or(s.document.updateTime),h=s.document.createTime?Or(s.document.createTime):Ee.min(),d=new pn({mapValue:{fields:s.document.fields}}),m=Zt.newFoundDocument(o,u,h,d),y=s.targetIds||[],E=s.removedTargetIds||[];t=new rf(y,E,m.key,m)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Tm(n,s.document),u=s.readTime?Or(s.readTime):Ee.min(),h=Zt.newNoDocument(o,u),d=s.removedTargetIds||[];t=new rf([],d,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Tm(n,s.document),u=s.removedTargetIds||[];t=new rf([],u,o,null)}else{if(!("filter"in e))return ye(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new ax(o,u),d=s.targetId;t=new SA(d,h)}}return t}function _x(n,e){let t;if(e instanceof sc)t={update:v0(n,e.key,e.value)};else if(e instanceof Jg)t={delete:ag(n,e.key)};else if(e instanceof Os)t={update:v0(n,e.key,e.data),updateMask:Ix(e.fieldMask)};else{if(!(e instanceof rx))return ye(16599,{Vt:e.type});t={verify:ag(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(u,h){const d=h.transform;if(d instanceof bf)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof qu)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Hu)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof Gu)return{fieldPath:h.field.canonicalString(),increment:d.Ae};throw ye(20930,{transform:h.transform})}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:mx(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:ye(27497)}(n,e.precondition)),t}function vx(n,e){return n&&n.length>0?(Be(e!==void 0,14353),n.map(t=>function(o,u){let h=o.updateTime?Or(o.updateTime):Or(u);return h.isEqual(Ee.min())&&(h=Or(u)),new ex(h,o.transformResults||[])}(t,e))):[]}function Ex(n,e){return{documents:[NA(n,e.path)]}}function Tx(n,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=NA(n,o);const u=function(y){if(y.length!==0)return MA(ar.create(y,"and"))}(e.filters);u&&(t.structuredQuery.where=u);const h=function(y){if(y.length!==0)return y.map(E=>function(w){return{field:No(w.field),direction:Ax(w.dir)}}(E))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const d=ig(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(e.endAt)),{ft:t,parent:o}}function bx(n){let e=gx(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Be(s===1,65062);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let u=[];t.where&&(u=function(b){const w=OA(b);return w instanceof ar&&aA(w)?w.getFilters():[w]}(t.where));let h=[];t.orderBy&&(h=function(b){return b.map(w=>function(k){return new Fu(Do(k.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(w))}(t.orderBy));let d=null;t.limit&&(d=function(b){let w;return w=typeof b=="object"?b.value:b,zf(w)?null:w}(t.limit));let m=null;t.startAt&&(m=function(b){const w=!!b.before,O=b.values||[];return new Tf(O,w)}(t.startAt));let y=null;return t.endAt&&(y=function(b){const w=!b.before,O=b.values||[];return new Tf(O,w)}(t.endAt)),jM(e,o,h,u,d,"F",m,y)}function wx(n,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ye(28987,{purpose:o})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function OA(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Do(t.unaryFilter.field);return wt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Do(t.unaryFilter.field);return wt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Do(t.unaryFilter.field);return wt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=Do(t.unaryFilter.field);return wt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ye(61313);default:return ye(60726)}}(n):n.fieldFilter!==void 0?function(t){return wt.create(Do(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ye(58110);default:return ye(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ar.create(t.compositeFilter.filters.map(s=>OA(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ye(1026)}}(t.compositeFilter.op))}(n):ye(30097,{filter:n})}function Ax(n){return hx[n]}function Sx(n){return fx[n]}function Rx(n){return dx[n]}function No(n){return{fieldPath:n.canonicalString()}}function Do(n){return Ht.fromServerFormat(n.fieldPath)}function MA(n){return n instanceof wt?function(t){if(t.op==="=="){if(a0(t.value))return{unaryFilter:{field:No(t.field),op:"IS_NAN"}};if(s0(t.value))return{unaryFilter:{field:No(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(a0(t.value))return{unaryFilter:{field:No(t.field),op:"IS_NOT_NAN"}};if(s0(t.value))return{unaryFilter:{field:No(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:No(t.field),op:Sx(t.op),value:t.value}}}(n):n instanceof ar?function(t){const s=t.getFilters().map(o=>MA(o));return s.length===1?s[0]:{compositeFilter:{op:Rx(t.op),filters:s}}}(n):ye(54877,{filter:n})}function Ix(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function xA(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,t,s,o,u=Ee.min(),h=Ee.min(),d=Gt.EMPTY_BYTE_STRING,m=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=d,this.expectedCount=m}withSequenceNumber(e){return new hs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new hs(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new hs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new hs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx{constructor(e){this.yt=e}}function Nx(n){const e=bx({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?rg(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dx{constructor(){this.Cn=new Ox}addToCollectionParentIndex(e,t){return this.Cn.add(t),ee.resolve()}getCollectionParents(e,t){return ee.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return ee.resolve()}deleteFieldIndex(e,t){return ee.resolve()}deleteAllFieldIndexes(e){return ee.resolve()}createTargetIndexes(e,t){return ee.resolve()}getDocumentsMatchingTarget(e,t){return ee.resolve(null)}getIndexType(e,t){return ee.resolve(0)}getFieldIndexes(e,t){return ee.resolve([])}getNextCollectionGroupToUpdate(e){return ee.resolve(null)}getMinOffset(e,t){return ee.resolve(vs.min())}getMinOffsetFromCollectionGroup(e,t){return ee.resolve(vs.min())}updateCollectionGroup(e,t,s){return ee.resolve()}updateIndexEntries(e,t){return ee.resolve()}}class Ox{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new Dt(Je.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Dt(Je.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},PA=41943040;class dn{static withCacheSize(e){return new dn(e,dn.DEFAULT_COLLECTION_PERCENTILE,dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dn.DEFAULT_COLLECTION_PERCENTILE=10,dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,dn.DEFAULT=new dn(PA,dn.DEFAULT_COLLECTION_PERCENTILE,dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),dn.DISABLED=new dn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Go(0)}static cr(){return new Go(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T0="LruGarbageCollector",Mx=1048576;function b0([n,e],[t,s]){const o=Ce(n,t);return o===0?Ce(e,s):o}class xx{constructor(e){this.Ir=e,this.buffer=new Dt(b0),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();b0(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Px{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){oe(T0,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Zo(t)?oe(T0,"Ignoring IndexedDB error during garbage collection: ",t):await Wo(t)}await this.Vr(3e5)})}}class kx{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return ee.resolve(Uf.ce);const s=new xx(t);return this.mr.forEachTarget(e,o=>s.Ar(o.sequenceNumber)).next(()=>this.mr.pr(e,o=>s.Ar(o))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(oe("LruGarbageCollector","Garbage collection skipped; disabled"),ee.resolve(E0)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(oe("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),E0):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,o,u,h,d,m,y;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(b=>(b>this.params.maximumSequenceNumbersToCollect?(oe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${b}`),o=this.params.maximumSequenceNumbersToCollect):o=b,h=Date.now(),this.nthSequenceNumber(e,o))).next(b=>(s=b,d=Date.now(),this.removeTargets(e,s,t))).next(b=>(u=b,m=Date.now(),this.removeOrphanedDocuments(e,s))).next(b=>(y=Date.now(),Io()<=Ie.DEBUG&&oe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(d-h)+`ms
	Removed ${u} targets in `+(m-d)+`ms
	Removed ${b} documents in `+(y-m)+`ms
Total Duration: ${y-E}ms`),ee.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:b})))}}function Vx(n,e){return new kx(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lx{constructor(){this.changes=new Da(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Zt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?ee.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ux{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zx{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&Nu(s.mutation,o,Rn.empty(),tt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Ne()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Ne()){const o=va();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(u=>{let h=Eu();return u.forEach((d,m)=>{h=h.insert(d,m.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=va();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Ne()))}populateOverlays(e,t,s){const o=[];return s.forEach(u=>{t.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((h,d)=>{t.set(h,d)})})}computeViews(e,t,s,o){let u=bi();const h=Cu(),d=function(){return Cu()}();return t.forEach((m,y)=>{const E=s.get(y.key);o.has(y.key)&&(E===void 0||E.mutation instanceof Os)?u=u.insert(y.key,y):E!==void 0?(h.set(y.key,E.mutation.getFieldMask()),Nu(E.mutation,y,E.mutation.getFieldMask(),tt.now())):h.set(y.key,Rn.empty())}),this.recalculateAndSaveOverlays(e,u).next(m=>(m.forEach((y,E)=>h.set(y,E)),t.forEach((y,E)=>d.set(y,new Ux(E,h.get(y)??null))),d))}recalculateAndSaveOverlays(e,t){const s=Cu();let o=new at((h,d)=>h-d),u=Ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const d of h)d.keys().forEach(m=>{const y=t.get(m);if(y===null)return;let E=s.get(m)||Rn.empty();E=d.applyToLocalView(y,E),s.set(m,E);const b=(o.get(d.batchId)||Ne()).add(m);o=o.insert(d.batchId,b)})}).next(()=>{const h=[],d=o.getReverseIterator();for(;d.hasNext();){const m=d.getNext(),y=m.key,E=m.value,b=mA();E.forEach(w=>{if(!u.has(w)){const O=bA(t.get(w),s.get(w));O!==null&&b.set(w,O),u=u.add(w)}}),h.push(this.documentOverlayCache.saveOverlays(e,y,b))}return ee.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return de.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):cA(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):ee.resolve(va());let d=Uu,m=u;return h.next(y=>ee.forEach(y,(E,b)=>(d<b.largestBatchId&&(d=b.largestBatchId),u.get(E)?ee.resolve():this.remoteDocumentCache.getEntry(e,E).next(w=>{m=m.insert(E,w)}))).next(()=>this.populateOverlays(e,y,u)).next(()=>this.computeViews(e,m,y,Ne())).next(E=>({batchId:d,changes:pA(E)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new de(t)).next(s=>{let o=Eu();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=Eu();return this.indexManager.getCollectionParents(e,u).next(d=>ee.forEach(d,m=>{const y=function(b,w){return new Jo(w,null,b.explicitOrderBy.slice(),b.filters.slice(),b.limit,b.limitType,b.startAt,b.endAt)}(t,m.child(u));return this.getDocumentsMatchingCollectionQuery(e,y,s,o).next(E=>{E.forEach((b,w)=>{h=h.insert(b,w)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o))).next(h=>{u.forEach((m,y)=>{const E=y.getKey();h.get(E)===null&&(h=h.insert(E,Zt.newInvalidDocument(E)))});let d=Eu();return h.forEach((m,y)=>{const E=u.get(m);E!==void 0&&Nu(E.mutation,y,Rn.empty(),tt.now()),qf(t,y)&&(d=d.insert(m,y))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bx{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return ee.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:Or(o.createTime)}}(t)),ee.resolve()}getNamedQuery(e,t){return ee.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(o){return{name:o.name,query:Nx(o.bundledQuery),readTime:Or(o.readTime)}}(t)),ee.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(){this.overlays=new at(de.comparator),this.qr=new Map}getOverlay(e,t){return ee.resolve(this.overlays.get(t))}getOverlays(e,t){const s=va();return ee.forEach(t,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,u)=>{this.St(e,t,u)}),ee.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.qr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.qr.delete(s)),ee.resolve()}getOverlaysForCollection(e,t,s){const o=va(),u=t.length+1,h=new de(t.child("")),d=this.overlays.getIteratorFrom(h);for(;d.hasNext();){const m=d.getNext().value,y=m.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===u&&m.largestBatchId>s&&o.set(m.getKey(),m)}return ee.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new at((y,E)=>y-E);const h=this.overlays.getIterator();for(;h.hasNext();){const y=h.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>s){let E=u.get(y.largestBatchId);E===null&&(E=va(),u=u.insert(y.largestBatchId,E)),E.set(y.getKey(),y)}}const d=va(),m=u.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach((y,E)=>d.set(y,E)),!(d.size()>=o)););return ee.resolve(d)}St(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.qr.get(o.largestBatchId).delete(s.key);this.qr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new sx(t,s));let u=this.qr.get(t);u===void 0&&(u=Ne(),this.qr.set(t,u)),this.qr.set(t,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(){this.sessionToken=Gt.EMPTY_BYTE_STRING}getSessionToken(e){return ee.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,ee.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(){this.Qr=new Dt(Lt.$r),this.Ur=new Dt(Lt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new Lt(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.Gr(new Lt(e,t))}zr(e,t){e.forEach(s=>this.removeReference(s,t))}jr(e){const t=new de(new Je([])),s=new Lt(t,e),o=new Lt(t,e+1),u=[];return this.Ur.forEachInRange([s,o],h=>{this.Gr(h),u.push(h.key)}),u}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new de(new Je([])),s=new Lt(t,e),o=new Lt(t,e+1);let u=Ne();return this.Ur.forEachInRange([s,o],h=>{u=u.add(h.key)}),u}containsKey(e){const t=new Lt(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Lt{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return de.comparator(e.key,t.key)||Ce(e.Yr,t.Yr)}static Kr(e,t){return Ce(e.Yr,t.Yr)||de.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Dt(Lt.$r)}checkEmpty(e){return ee.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new ix(u,t,s,o);this.mutationQueue.push(h);for(const d of o)this.Zr=this.Zr.add(new Lt(d.key,u)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return ee.resolve(h)}lookupMutationBatch(e,t){return ee.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.ei(s),u=o<0?0:o;return ee.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return ee.resolve(this.mutationQueue.length===0?Kg:this.tr-1)}getAllMutationBatches(e){return ee.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Lt(t,0),o=new Lt(t,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([s,o],h=>{const d=this.Xr(h.Yr);u.push(d)}),ee.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Dt(Ce);return t.forEach(o=>{const u=new Lt(o,0),h=new Lt(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,h],d=>{s=s.add(d.Yr)})}),ee.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;de.isDocumentKey(u)||(u=u.child(""));const h=new Lt(new de(u),0);let d=new Dt(Ce);return this.Zr.forEachWhile(m=>{const y=m.key.path;return!!s.isPrefixOf(y)&&(y.length===o&&(d=d.add(m.Yr)),!0)},h),ee.resolve(this.ti(d))}ti(e){const t=[];return e.forEach(s=>{const o=this.Xr(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Be(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return ee.forEach(t.mutations,o=>{const u=new Lt(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Zr=s})}ir(e){}containsKey(e,t){const s=new Lt(t,0),o=this.Zr.firstAfterOrEqual(s);return ee.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,ee.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hx{constructor(e){this.ri=e,this.docs=function(){return new at(de.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return ee.resolve(s?s.document.mutableCopy():Zt.newInvalidDocument(t))}getEntries(e,t){let s=bi();return t.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Zt.newInvalidDocument(o))}),ee.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=bi();const h=t.path,d=new de(h.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(d);for(;m.hasNext();){const{key:y,value:{document:E}}=m.getNext();if(!h.isPrefixOf(y.path))break;y.path.length>h.length+1||vM(_M(E),s)<=0||(o.has(E.key)||qf(t,E))&&(u=u.insert(E.key,E.mutableCopy()))}return ee.resolve(u)}getAllFromCollectionGroup(e,t,s,o){ye(9500)}ii(e,t){return ee.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new Gx(this)}getSize(e){return ee.resolve(this.size)}}class Gx extends Lx{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(s)}),ee.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $x{constructor(e){this.persistence=e,this.si=new Da(t=>Xg(t),Wg),this.lastRemoteSnapshotVersion=Ee.min(),this.highestTargetId=0,this.oi=0,this._i=new ry,this.targetCount=0,this.ai=Go.ur()}forEachTarget(e,t){return this.si.forEach((s,o)=>t(o)),ee.resolve()}getLastRemoteSnapshotVersion(e){return ee.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ee.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),ee.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),ee.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Go(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,ee.resolve()}updateTargetData(e,t){return this.Pr(t),ee.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,ee.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.si.forEach((h,d)=>{d.sequenceNumber<=t&&s.get(d.targetId)===null&&(this.si.delete(h),u.push(this.removeMatchingKeysForTargetId(e,d.targetId)),o++)}),ee.waitFor(u).next(()=>o)}getTargetCount(e){return ee.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return ee.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),ee.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach(h=>{u.push(o.markPotentiallyOrphaned(e,h))}),ee.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),ee.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return ee.resolve(s)}containsKey(e,t){return ee.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(e,t){this.ui={},this.overlays={},this.ci=new Uf(0),this.li=!1,this.li=!0,this.hi=new Fx,this.referenceDelegate=e(this),this.Pi=new $x(this),this.indexManager=new Dx,this.remoteDocumentCache=function(o){return new Hx(o)}(s=>this.referenceDelegate.Ti(s)),this.serializer=new Cx(t),this.Ii=new Bx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new jx,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new qx(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){oe("MemoryPersistence","Starting transaction:",e);const o=new Kx(this.ci.next());return this.referenceDelegate.Ei(),s(o).next(u=>this.referenceDelegate.di(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Ai(e,t){return ee.or(Object.values(this.ui).map(s=>()=>s.containsKey(e,t)))}}class Kx extends TM{constructor(e){super(),this.currentSequenceNumber=e}}class iy{constructor(e){this.persistence=e,this.Ri=new ry,this.Vi=null}static mi(e){return new iy(e)}get fi(){if(this.Vi)return this.Vi;throw ye(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),ee.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),ee.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),ee.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(o=>this.fi.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(u=>this.fi.add(u.toString()))}).next(()=>s.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ee.forEach(this.fi,s=>{const o=de.fromPath(s);return this.gi(e,o).next(u=>{u||t.removeEntry(o,Ee.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return ee.or([()=>ee.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Af{constructor(e,t){this.persistence=e,this.pi=new Da(s=>AM(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=Vx(this,t)}static mi(e,t){return new Af(e,t)}Ei(){}di(e){return ee.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(o=>s+o))}wr(e){let t=0;return this.pr(e,s=>{t++}).next(()=>t)}pr(e,t){return ee.forEach(this.pi,(s,o)=>this.br(e,s,o).next(u=>u?ee.resolve():t(o)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ii(e,h=>this.br(e,h,t).next(d=>{d||(s++,u.removeEntry(h,Ee.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),ee.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),ee.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),ee.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),ee.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ef(e.data.value)),t}br(e,t,s){return ee.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.pi.get(t);return ee.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=o}static As(e,t){let s=Ne(),o=Ne();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new sy(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yx{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return _N()?8:bM(en())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.ys(e,t).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.ws(e,t,o,s).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new Qx;return this.Ss(e,t,h).next(d=>{if(u.result=d,this.Vs)return this.bs(e,t,h,d.size)})}).next(()=>u.result)}bs(e,t,s,o){return s.documentReadCount<this.fs?(Io()<=Ie.DEBUG&&oe("QueryEngine","SDK will not create cache indexes for query:",Co(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),ee.resolve()):(Io()<=Ie.DEBUG&&oe("QueryEngine","Query:",Co(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.gs*o?(Io()<=Ie.DEBUG&&oe("QueryEngine","The SDK decides to create cache indexes for query:",Co(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Dr(t))):ee.resolve())}ys(e,t){if(c0(t))return ee.resolve(null);let s=Dr(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=rg(t,null,"F"),s=Dr(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const h=Ne(...u);return this.ps.getDocuments(e,h).next(d=>this.indexManager.getMinOffset(e,s).next(m=>{const y=this.Ds(t,d);return this.Cs(t,y,h,m.readTime)?this.ys(e,rg(t,null,"F")):this.vs(e,y,t,m)}))})))}ws(e,t,s,o){return c0(t)||o.isEqual(Ee.min())?ee.resolve(null):this.ps.getDocuments(e,s).next(u=>{const h=this.Ds(t,u);return this.Cs(t,h,s,o)?ee.resolve(null):(Io()<=Ie.DEBUG&&oe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Co(t)),this.vs(e,h,t,yM(o,Uu)).next(d=>d))})}Ds(e,t){let s=new Dt(fA(e));return t.forEach((o,u)=>{qf(e,u)&&(s=s.add(u))}),s}Cs(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(e,t,s){return Io()<=Ie.DEBUG&&oe("QueryEngine","Using full collection scan to execute query:",Co(t)),this.ps.getDocumentsMatchingQuery(e,t,vs.min(),s)}vs(e,t,s,o){return this.ps.getDocumentsMatchingQuery(e,s,o).next(u=>(t.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay="LocalStore",Xx=3e8;class Wx{constructor(e,t,s,o){this.persistence=e,this.Fs=t,this.serializer=o,this.Ms=new at(Ce),this.xs=new Da(u=>Xg(u),Wg),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new zx(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function Zx(n,e,t,s){return new Wx(n,e,t,s)}async function VA(n,e){const t=Te(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,t.Bs(e),t.mutationQueue.getAllMutationBatches(s))).next(u=>{const h=[],d=[];let m=Ne();for(const y of o){h.push(y.batchId);for(const E of y.mutations)m=m.add(E.key)}for(const y of u){d.push(y.batchId);for(const E of y.mutations)m=m.add(E.key)}return t.localDocuments.getDocuments(s,m).next(y=>({Ls:y,removedBatchIds:h,addedBatchIds:d}))})})}function Jx(n,e){const t=Te(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),u=t.Ns.newChangeBuffer({trackRemovals:!0});return function(d,m,y,E){const b=y.batch,w=b.keys();let O=ee.resolve();return w.forEach(k=>{O=O.next(()=>E.getEntry(m,k)).next(F=>{const V=y.docVersions.get(k);Be(V!==null,48541),F.version.compareTo(V)<0&&(b.applyToRemoteDocument(F,y),F.isValidDocument()&&(F.setReadTime(y.commitVersion),E.addEntry(F)))})}),O.next(()=>d.mutationQueue.removeMutationBatch(m,b))}(t,s,e,u).next(()=>u.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(d){let m=Ne();for(let y=0;y<d.mutationResults.length;++y)d.mutationResults[y].transformResults.length>0&&(m=m.add(d.batch.mutations[y].key));return m}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function LA(n){const e=Te(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function eP(n,e){const t=Te(n),s=e.snapshotVersion;let o=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const h=t.Ns.newChangeBuffer({trackRemovals:!0});o=t.Ms;const d=[];e.targetChanges.forEach((E,b)=>{const w=o.get(b);if(!w)return;d.push(t.Pi.removeMatchingKeys(u,E.removedDocuments,b).next(()=>t.Pi.addMatchingKeys(u,E.addedDocuments,b)));let O=w.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(b)!==null?O=O.withResumeToken(Gt.EMPTY_BYTE_STRING,Ee.min()).withLastLimboFreeSnapshotVersion(Ee.min()):E.resumeToken.approximateByteSize()>0&&(O=O.withResumeToken(E.resumeToken,s)),o=o.insert(b,O),function(F,V,G){return F.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-F.snapshotVersion.toMicroseconds()>=Xx?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0}(w,O,E)&&d.push(t.Pi.updateTargetData(u,O))});let m=bi(),y=Ne();if(e.documentUpdates.forEach(E=>{e.resolvedLimboDocuments.has(E)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(u,E))}),d.push(tP(u,h,e.documentUpdates).next(E=>{m=E.ks,y=E.qs})),!s.isEqual(Ee.min())){const E=t.Pi.getLastRemoteSnapshotVersion(u).next(b=>t.Pi.setTargetsMetadata(u,u.currentSequenceNumber,s));d.push(E)}return ee.waitFor(d).next(()=>h.apply(u)).next(()=>t.localDocuments.getLocalViewOfDocuments(u,m,y)).next(()=>m)}).then(u=>(t.Ms=o,u))}function tP(n,e,t){let s=Ne(),o=Ne();return t.forEach(u=>s=s.add(u)),e.getEntries(n,s).next(u=>{let h=bi();return t.forEach((d,m)=>{const y=u.get(d);m.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(d)),m.isNoDocument()&&m.version.isEqual(Ee.min())?(e.removeEntry(d,m.readTime),h=h.insert(d,m)):!y.isValidDocument()||m.version.compareTo(y.version)>0||m.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(m),h=h.insert(d,m)):oe(ay,"Ignoring outdated watch update for ",d,". Current version:",y.version," Watch version:",m.version)}),{ks:h,qs:o}})}function nP(n,e){const t=Te(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=Kg),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function rP(n,e){const t=Te(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return t.Pi.getTargetData(s,e).next(u=>u?(o=u,ee.resolve(o)):t.Pi.allocateTargetId(s).next(h=>(o=new hs(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=t.Ms.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s})}async function lg(n,e,t){const s=Te(n),o=s.Ms.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,h=>s.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!Zo(h))throw h;oe(ay,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Ms=s.Ms.remove(e),s.xs.delete(o.target)}function w0(n,e,t){const s=Te(n);let o=Ee.min(),u=Ne();return s.persistence.runTransaction("Execute query","readwrite",h=>function(m,y,E){const b=Te(m),w=b.xs.get(E);return w!==void 0?ee.resolve(b.Ms.get(w)):b.Pi.getTargetData(y,E)}(s,h,Dr(e)).next(d=>{if(d)return o=d.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(h,d.targetId).next(m=>{u=m})}).next(()=>s.Fs.getDocumentsMatchingQuery(h,e,t?o:Ee.min(),t?u:Ne())).next(d=>(iP(s,qM(e),d),{documents:d,Qs:u})))}function iP(n,e,t){let s=n.Os.get(e)||Ee.min();t.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),n.Os.set(e,s)}class A0{constructor(){this.activeTargetIds=YM()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class sP{constructor(){this.Mo=new A0,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new A0,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S0="ConnectivityMonitor";class R0{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){oe(S0,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){oe(S0,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fh=null;function ug(){return Fh===null?Fh=function(){return 268435456+Math.round(2147483648*Math.random())}():Fh++,"0x"+Fh.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm="RestConnection",oP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class lP{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${o}`,this.Wo=this.databaseId.database===vf?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Go(e,t,s,o,u){const h=ug(),d=this.zo(e,t.toUriEncodedString());oe(bm,`Sending RPC '${e}' ${h}:`,d,s);const m={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(m,o,u);const{host:y}=new URL(d),E=Cs(y);return this.Jo(e,d,m,s,E).then(b=>(oe(bm,`Received RPC '${e}' ${h}: `,b),b),b=>{throw jo(bm,`RPC '${e}' ${h} failed with error: `,b,"url: ",d,"request:",s),b})}Ho(e,t,s,o,u,h){return this.Go(e,t,s,o,u)}jo(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Xo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}zo(e,t){const s=oP[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt="WebChannelConnection";class cP extends lP{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,o,u){const h=ug();return new Promise((d,m)=>{const y=new zw;y.setWithCredentials(!0),y.listenOnce(Bw.COMPLETE,()=>{try{switch(y.getLastErrorCode()){case Jh.NO_ERROR:const b=y.getResponseJson();oe(Yt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(b)),d(b);break;case Jh.TIMEOUT:oe(Yt,`RPC '${e}' ${h} timed out`),m(new ae(W.DEADLINE_EXCEEDED,"Request time out"));break;case Jh.HTTP_ERROR:const w=y.getStatus();if(oe(Yt,`RPC '${e}' ${h} failed with status:`,w,"response text:",y.getResponseText()),w>0){let O=y.getResponseJson();Array.isArray(O)&&(O=O[0]);const k=O?.error;if(k&&k.status&&k.message){const F=function(G){const Z=G.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(Z)>=0?Z:W.UNKNOWN}(k.status);m(new ae(F,k.message))}else m(new ae(W.UNKNOWN,"Server responded with status "+y.getStatus()))}else m(new ae(W.UNAVAILABLE,"Connection failed."));break;default:ye(9055,{l_:e,streamId:h,h_:y.getLastErrorCode(),P_:y.getLastError()})}}finally{oe(Yt,`RPC '${e}' ${h} completed.`)}});const E=JSON.stringify(o);oe(Yt,`RPC '${e}' ${h} sending request:`,o),y.send(t,"POST",E,s,15)})}T_(e,t,s){const o=ug(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=qw(),d=Fw(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(m.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(m.useFetchStreams=!0),this.jo(m.initMessageHeaders,t,s),m.encodeInitMessageHeaders=!0;const E=u.join("");oe(Yt,`Creating RPC '${e}' stream ${o}: ${E}`,m);const b=h.createWebChannel(E,m);this.I_(b);let w=!1,O=!1;const k=new uP({Yo:V=>{O?oe(Yt,`Not sending because RPC '${e}' stream ${o} is closed:`,V):(w||(oe(Yt,`Opening RPC '${e}' stream ${o} transport.`),b.open(),w=!0),oe(Yt,`RPC '${e}' stream ${o} sending:`,V),b.send(V))},Zo:()=>b.close()}),F=(V,G,Z)=>{V.listen(G,K=>{try{Z(K)}catch(ie){setTimeout(()=>{throw ie},0)}})};return F(b,vu.EventType.OPEN,()=>{O||(oe(Yt,`RPC '${e}' stream ${o} transport opened.`),k.o_())}),F(b,vu.EventType.CLOSE,()=>{O||(O=!0,oe(Yt,`RPC '${e}' stream ${o} transport closed`),k.a_(),this.E_(b))}),F(b,vu.EventType.ERROR,V=>{O||(O=!0,jo(Yt,`RPC '${e}' stream ${o} transport errored. Name:`,V.name,"Message:",V.message),k.a_(new ae(W.UNAVAILABLE,"The operation could not be completed")))}),F(b,vu.EventType.MESSAGE,V=>{if(!O){const G=V.data[0];Be(!!G,16349);const Z=G,K=Z?.error||Z[0]?.error;if(K){oe(Yt,`RPC '${e}' stream ${o} received error:`,K);const ie=K.status;let se=function(S){const R=bt[S];if(R!==void 0)return AA(R)}(ie),he=K.message;se===void 0&&(se=W.INTERNAL,he="Unknown error status: "+ie+" with message "+K.message),O=!0,k.a_(new ae(se,he)),b.close()}else oe(Yt,`RPC '${e}' stream ${o} received:`,G),k.u_(G)}}),F(d,jw.STAT_EVENT,V=>{V.stat===Xm.PROXY?oe(Yt,`RPC '${e}' stream ${o} detected buffering proxy`):V.stat===Xm.NOPROXY&&oe(Yt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{k.__()},0),k}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function wm(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(n){return new px(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=o,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-s);o>0&&oe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0="PersistentStream";class zA{constructor(e,t,s,o,u,h,d,m){this.Mi=e,this.S_=s,this.b_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=d,this.listener=m,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new UA(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===W.RESOURCE_EXHAUSTED?(Ti(t.toString()),Ti("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.D_===t&&this.G_(s,o)},s=>{e(()=>{const o=new ae(W.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)})})}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{s(()=>this.listener.Xo())}),this.stream.t_(()=>{s(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(o=>{s(()=>this.z_(o))}),this.stream.onMessage(o=>{s(()=>++this.F_==1?this.J_(o):this.onNext(o))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return oe(I0,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(oe(I0,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class hP extends zA{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=yx(this.serializer,e),s=function(u){if(!("targetChange"in u))return Ee.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?Ee.min():h.readTime?Or(h.readTime):Ee.min()}(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=og(this.serializer),t.addTarget=function(u,h){let d;const m=h.target;if(d=tg(m)?{documents:Ex(u,m)}:{query:Tx(u,m).ft},d.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){d.resumeToken=IA(u,h.resumeToken);const y=ig(u,h.expectedCount);y!==null&&(d.expectedCount=y)}else if(h.snapshotVersion.compareTo(Ee.min())>0){d.readTime=wf(u,h.snapshotVersion.toTimestamp());const y=ig(u,h.expectedCount);y!==null&&(d.expectedCount=y)}return d}(this.serializer,e);const s=wx(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=og(this.serializer),t.removeTarget=e,this.q_(t)}}class fP extends zA{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Be(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Be(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Be(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=vx(e.writeResults,e.commitTime),s=Or(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=og(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>_x(this.serializer,s))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{}class pP extends dP{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new ae(W.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.Go(e,sg(t,s),o,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ae(W.UNKNOWN,u.toString())})}Ho(e,t,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,d])=>this.connection.Ho(e,sg(t,s),o,h,d,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ae(W.UNKNOWN,h.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class mP{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ti(t),this.aa=!1):oe("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa="RemoteStore";class gP{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo(h=>{s.enqueueAndForget(async()=>{Oa(this)&&(oe(Sa,"Restarting streams for network reachability change."),await async function(m){const y=Te(m);y.Ea.add(4),await oc(y),y.Ra.set("Unknown"),y.Ea.delete(4),await Qf(y)}(this))})}),this.Ra=new mP(s,o)}}async function Qf(n){if(Oa(n))for(const e of n.da)await e(!0)}async function oc(n){for(const e of n.da)await e(!1)}function BA(n,e){const t=Te(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),cy(t)?uy(t):el(t).O_()&&ly(t,e))}function oy(n,e){const t=Te(n),s=el(t);t.Ia.delete(e),s.O_()&&jA(t,e),t.Ia.size===0&&(s.O_()?s.L_():Oa(t)&&t.Ra.set("Unknown"))}function ly(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ee.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}el(n).Y_(e)}function jA(n,e){n.Va.Ue(e),el(n).Z_(e)}function uy(n){n.Va=new cx({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),el(n).start(),n.Ra.ua()}function cy(n){return Oa(n)&&!el(n).x_()&&n.Ia.size>0}function Oa(n){return Te(n).Ea.size===0}function FA(n){n.Va=void 0}async function yP(n){n.Ra.set("Online")}async function _P(n){n.Ia.forEach((e,t)=>{ly(n,e)})}async function vP(n,e){FA(n),cy(n)?(n.Ra.ha(e),uy(n)):n.Ra.set("Unknown")}async function EP(n,e,t){if(n.Ra.set("Online"),e instanceof RA&&e.state===2&&e.cause)try{await async function(o,u){const h=u.cause;for(const d of u.targetIds)o.Ia.has(d)&&(await o.remoteSyncer.rejectListen(d,h),o.Ia.delete(d),o.Va.removeTarget(d))}(n,e)}catch(s){oe(Sa,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Sf(n,s)}else if(e instanceof rf?n.Va.Ze(e):e instanceof SA?n.Va.st(e):n.Va.tt(e),!t.isEqual(Ee.min()))try{const s=await LA(n.localStore);t.compareTo(s)>=0&&await function(u,h){const d=u.Va.Tt(h);return d.targetChanges.forEach((m,y)=>{if(m.resumeToken.approximateByteSize()>0){const E=u.Ia.get(y);E&&u.Ia.set(y,E.withResumeToken(m.resumeToken,h))}}),d.targetMismatches.forEach((m,y)=>{const E=u.Ia.get(m);if(!E)return;u.Ia.set(m,E.withResumeToken(Gt.EMPTY_BYTE_STRING,E.snapshotVersion)),jA(u,m);const b=new hs(E.target,m,y,E.sequenceNumber);ly(u,b)}),u.remoteSyncer.applyRemoteEvent(d)}(n,t)}catch(s){oe(Sa,"Failed to raise snapshot:",s),await Sf(n,s)}}async function Sf(n,e,t){if(!Zo(e))throw e;n.Ea.add(1),await oc(n),n.Ra.set("Offline"),t||(t=()=>LA(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{oe(Sa,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Qf(n)})}function qA(n,e){return e().catch(t=>Sf(n,t,e))}async function Yf(n){const e=Te(n),t=ws(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Kg;for(;TP(e);)try{const o=await nP(e.localStore,s);if(o===null){e.Ta.length===0&&t.L_();break}s=o.batchId,bP(e,o)}catch(o){await Sf(e,o)}HA(e)&&GA(e)}function TP(n){return Oa(n)&&n.Ta.length<10}function bP(n,e){n.Ta.push(e);const t=ws(n);t.O_()&&t.X_&&t.ea(e.mutations)}function HA(n){return Oa(n)&&!ws(n).x_()&&n.Ta.length>0}function GA(n){ws(n).start()}async function wP(n){ws(n).ra()}async function AP(n){const e=ws(n);for(const t of n.Ta)e.ea(t.mutations)}async function SP(n,e,t){const s=n.Ta.shift(),o=ey.from(s,e,t);await qA(n,()=>n.remoteSyncer.applySuccessfulWrite(o)),await Yf(n)}async function RP(n,e){e&&ws(n).X_&&await async function(s,o){if(function(h){return ox(h)&&h!==W.ABORTED}(o.code)){const u=s.Ta.shift();ws(s).B_(),await qA(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await Yf(s)}}(n,e),HA(n)&&GA(n)}async function C0(n,e){const t=Te(n);t.asyncQueue.verifyOperationInProgress(),oe(Sa,"RemoteStore received new credentials");const s=Oa(t);t.Ea.add(3),await oc(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Qf(t)}async function IP(n,e){const t=Te(n);e?(t.Ea.delete(2),await Qf(t)):e||(t.Ea.add(2),await oc(t),t.Ra.set("Unknown"))}function el(n){return n.ma||(n.ma=function(t,s,o){const u=Te(t);return u.sa(),new hP(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(n.datastore,n.asyncQueue,{Xo:yP.bind(null,n),t_:_P.bind(null,n),r_:vP.bind(null,n),H_:EP.bind(null,n)}),n.da.push(async e=>{e?(n.ma.B_(),cy(n)?uy(n):n.Ra.set("Unknown")):(await n.ma.stop(),FA(n))})),n.ma}function ws(n){return n.fa||(n.fa=function(t,s,o){const u=Te(t);return u.sa(),new fP(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:wP.bind(null,n),r_:RP.bind(null,n),ta:AP.bind(null,n),na:SP.bind(null,n)}),n.da.push(async e=>{e?(n.fa.B_(),await Yf(n)):(await n.fa.stop(),n.Ta.length>0&&(oe(Sa,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new ms,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,d=new hy(e,t,h,o,u);return d.start(s),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ae(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fy(n,e){if(Ti("AsyncQueue",`${e}: ${n}`),Zo(n))return new ae(W.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{static emptySet(e){return new ko(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||de.comparator(t.key,s.key):(t,s)=>de.comparator(t.key,s.key),this.keyedMap=Eu(),this.sortedSet=new at(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ko)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new ko;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(){this.ga=new at(de.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):ye(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,s)=>{e.push(s)}),e}}class $o{constructor(e,t,s,o,u,h,d,m,y){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=d,this.excludesMetadataChanges=m,this.hasCachedResults=y}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach(d=>{h.push({type:0,doc:d})}),new $o(e,t,ko.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ff(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CP{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class NP{constructor(){this.queries=D0(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const o=Te(t),u=o.queries;o.queries=D0(),u.forEach((h,d)=>{for(const m of d.Sa)m.onError(s)})})(this,new ae(W.ABORTED,"Firestore shutting down"))}}function D0(){return new Da(n=>hA(n),Ff)}async function $A(n,e){const t=Te(n);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.ba()&&e.Da()&&(s=2):(u=new CP,s=e.Da()?0:1);try{switch(s){case 0:u.wa=await t.onListen(o,!0);break;case 1:u.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const d=fy(h,`Initialization of query '${Co(e.query)}' failed`);return void e.onError(d)}t.queries.set(o,u),u.Sa.push(e),e.va(t.onlineState),u.wa&&e.Fa(u.wa)&&dy(t)}async function KA(n,e){const t=Te(n),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.Sa.indexOf(e);h>=0&&(u.Sa.splice(h,1),u.Sa.length===0?o=e.Da()?0:1:!u.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function DP(n,e){const t=Te(n);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const d of h.Sa)d.Fa(o)&&(s=!0);h.wa=o}}s&&dy(t)}function OP(n,e,t){const s=Te(n),o=s.queries.get(e);if(o)for(const u of o.Sa)u.onError(t);s.queries.delete(e)}function dy(n){n.Ca.forEach(e=>{e.next()})}var cg,O0;(O0=cg||(cg={})).Ma="default",O0.Cache="cache";class QA{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new $o(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=$o.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==cg.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(e){this.key=e}}class XA{constructor(e){this.key=e}}class MP{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ne(),this.mutatedKeys=Ne(),this.eu=fA(e),this.tu=new ko(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new N0,o=t?t.tu:this.tu;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,d=!1;const m=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((E,b)=>{const w=o.get(E),O=qf(this.query,b)?b:null,k=!!w&&this.mutatedKeys.has(w.key),F=!!O&&(O.hasLocalMutations||this.mutatedKeys.has(O.key)&&O.hasCommittedMutations);let V=!1;w&&O?w.data.isEqual(O.data)?k!==F&&(s.track({type:3,doc:O}),V=!0):this.su(w,O)||(s.track({type:2,doc:O}),V=!0,(m&&this.eu(O,m)>0||y&&this.eu(O,y)<0)&&(d=!0)):!w&&O?(s.track({type:0,doc:O}),V=!0):w&&!O&&(s.track({type:1,doc:w}),V=!0,(m||y)&&(d=!0)),V&&(O?(h=h.add(O),u=F?u.add(E):u.delete(E)):(h=h.delete(E),u=u.delete(E)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),u=u.delete(E.key),s.track({type:1,doc:E})}return{tu:h,iu:s,Cs:d,mutatedKeys:u}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort((E,b)=>function(O,k){const F=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ye(20277,{Rt:V})}};return F(O)-F(k)}(E.type,b.type)||this.eu(E.doc,b.doc)),this.ou(s),o=o??!1;const d=t&&!o?this._u():[],m=this.Xa.size===0&&this.current&&!o?1:0,y=m!==this.Za;return this.Za=m,h.length!==0||y?{snapshot:new $o(this.query,e.tu,u,h,e.mutatedKeys,m===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:d}:{au:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new N0,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ne(),this.tu.forEach(s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))});const t=[];return e.forEach(s=>{this.Xa.has(s)||t.push(new XA(s))}),this.Xa.forEach(s=>{e.has(s)||t.push(new YA(s))}),t}cu(e){this.Ya=e.Qs,this.Xa=Ne();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return $o.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const py="SyncEngine";class xP{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class PP{constructor(e){this.key=e,this.hu=!1}}class kP{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new Da(d=>hA(d),Ff),this.Iu=new Map,this.Eu=new Set,this.du=new at(de.comparator),this.Au=new Map,this.Ru=new ry,this.Vu={},this.mu=new Map,this.fu=Go.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function VP(n,e,t=!0){const s=nS(n);let o;const u=s.Tu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await WA(s,e,t,!0),o}async function LP(n,e){const t=nS(n);await WA(t,e,!0,!1)}async function WA(n,e,t,s){const o=await rP(n.localStore,Dr(e)),u=o.targetId,h=n.sharedClientState.addLocalQueryTarget(u,t);let d;return s&&(d=await UP(n,e,u,h==="current",o.resumeToken)),n.isPrimaryClient&&t&&BA(n.remoteStore,o),d}async function UP(n,e,t,s,o){n.pu=(b,w,O)=>async function(F,V,G,Z){let K=V.view.ru(G);K.Cs&&(K=await w0(F.localStore,V.query,!1).then(({documents:x})=>V.view.ru(x,K)));const ie=Z&&Z.targetChanges.get(V.targetId),se=Z&&Z.targetMismatches.get(V.targetId)!=null,he=V.view.applyChanges(K,F.isPrimaryClient,ie,se);return x0(F,V.targetId,he.au),he.snapshot}(n,b,w,O);const u=await w0(n.localStore,e,!0),h=new MP(e,u.Qs),d=h.ru(u.documents),m=ac.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",o),y=h.applyChanges(d,n.isPrimaryClient,m);x0(n,t,y.au);const E=new xP(e,t,h);return n.Tu.set(e,E),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),y.snapshot}async function zP(n,e,t){const s=Te(n),o=s.Tu.get(e),u=s.Iu.get(o.targetId);if(u.length>1)return s.Iu.set(o.targetId,u.filter(h=>!Ff(h,e))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await lg(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),t&&oy(s.remoteStore,o.targetId),hg(s,o.targetId)}).catch(Wo)):(hg(s,o.targetId),await lg(s.localStore,o.targetId,!0))}async function BP(n,e){const t=Te(n),s=t.Tu.get(e),o=t.Iu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),oy(t.remoteStore,s.targetId))}async function jP(n,e,t){const s=QP(n);try{const o=await function(h,d){const m=Te(h),y=tt.now(),E=d.reduce((O,k)=>O.add(k.key),Ne());let b,w;return m.persistence.runTransaction("Locally write mutations","readwrite",O=>{let k=bi(),F=Ne();return m.Ns.getEntries(O,E).next(V=>{k=V,k.forEach((G,Z)=>{Z.isValidDocument()||(F=F.add(G))})}).next(()=>m.localDocuments.getOverlayedDocuments(O,k)).next(V=>{b=V;const G=[];for(const Z of d){const K=nx(Z,b.get(Z.key).overlayedDocument);K!=null&&G.push(new Os(Z.key,K,rA(K.value.mapValue),$n.exists(!0)))}return m.mutationQueue.addMutationBatch(O,y,G,d)}).next(V=>{w=V;const G=V.applyToLocalDocumentSet(b,F);return m.documentOverlayCache.saveOverlays(O,V.batchId,G)})}).then(()=>({batchId:w.batchId,changes:pA(b)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(h,d,m){let y=h.Vu[h.currentUser.toKey()];y||(y=new at(Ce)),y=y.insert(d,m),h.Vu[h.currentUser.toKey()]=y}(s,o.batchId,t),await lc(s,o.changes),await Yf(s.remoteStore)}catch(o){const u=fy(o,"Failed to persist write");t.reject(u)}}async function ZA(n,e){const t=Te(n);try{const s=await eP(t.localStore,e);e.targetChanges.forEach((o,u)=>{const h=t.Au.get(u);h&&(Be(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?Be(h.hu,14607):o.removedDocuments.size>0&&(Be(h.hu,42227),h.hu=!1))}),await lc(t,s,e)}catch(s){await Wo(s)}}function M0(n,e,t){const s=Te(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Tu.forEach((u,h)=>{const d=h.view.va(e);d.snapshot&&o.push(d.snapshot)}),function(h,d){const m=Te(h);m.onlineState=d;let y=!1;m.queries.forEach((E,b)=>{for(const w of b.Sa)w.va(d)&&(y=!0)}),y&&dy(m)}(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function FP(n,e,t){const s=Te(n);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Au.get(e),u=o&&o.key;if(u){let h=new at(de.comparator);h=h.insert(u,Zt.newNoDocument(u,Ee.min()));const d=Ne().add(u),m=new $f(Ee.min(),new Map,new at(Ce),h,d);await ZA(s,m),s.du=s.du.remove(u),s.Au.delete(e),my(s)}else await lg(s.localStore,e,!1).then(()=>hg(s,e,t)).catch(Wo)}async function qP(n,e){const t=Te(n),s=e.batch.batchId;try{const o=await Jx(t.localStore,e);eS(t,s,null),JA(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await lc(t,o)}catch(o){await Wo(o)}}async function HP(n,e,t){const s=Te(n);try{const o=await function(h,d){const m=Te(h);return m.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let E;return m.mutationQueue.lookupMutationBatch(y,d).next(b=>(Be(b!==null,37113),E=b.keys(),m.mutationQueue.removeMutationBatch(y,b))).next(()=>m.mutationQueue.performConsistencyCheck(y)).next(()=>m.documentOverlayCache.removeOverlaysForBatchId(y,E,d)).next(()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,E)).next(()=>m.localDocuments.getDocuments(y,E))})}(s.localStore,e);eS(s,e,t),JA(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await lc(s,o)}catch(o){await Wo(o)}}function JA(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function eS(n,e,t){const s=Te(n);let o=s.Vu[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Vu[s.currentUser.toKey()]=o}}function hg(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Iu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach(s=>{n.Ru.containsKey(s)||tS(n,s)})}function tS(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(oy(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),my(n))}function x0(n,e,t){for(const s of t)s instanceof YA?(n.Ru.addReference(s.key,e),GP(n,s)):s instanceof XA?(oe(py,"Document no longer in limbo: "+s.key),n.Ru.removeReference(s.key,e),n.Ru.containsKey(s.key)||tS(n,s.key)):ye(19791,{wu:s})}function GP(n,e){const t=e.key,s=t.path.canonicalString();n.du.get(t)||n.Eu.has(s)||(oe(py,"New document in limbo: "+t),n.Eu.add(s),my(n))}function my(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new de(Je.fromString(e)),s=n.fu.next();n.Au.set(s,new PP(t)),n.du=n.du.insert(t,s),BA(n.remoteStore,new hs(Dr(jf(t.path)),s,"TargetPurposeLimboResolution",Uf.ce))}}async function lc(n,e,t){const s=Te(n),o=[],u=[],h=[];s.Tu.isEmpty()||(s.Tu.forEach((d,m)=>{h.push(s.pu(m,e,t).then(y=>{if((y||t)&&s.isPrimaryClient){const E=y?!y.fromCache:t?.targetChanges.get(m.targetId)?.current;s.sharedClientState.updateQueryState(m.targetId,E?"current":"not-current")}if(y){o.push(y);const E=sy.As(m.targetId,y);u.push(E)}}))}),await Promise.all(h),s.Pu.H_(o),await async function(m,y){const E=Te(m);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",b=>ee.forEach(y,w=>ee.forEach(w.Es,O=>E.persistence.referenceDelegate.addReference(b,w.targetId,O)).next(()=>ee.forEach(w.ds,O=>E.persistence.referenceDelegate.removeReference(b,w.targetId,O)))))}catch(b){if(!Zo(b))throw b;oe(ay,"Failed to update sequence numbers: "+b)}for(const b of y){const w=b.targetId;if(!b.fromCache){const O=E.Ms.get(w),k=O.snapshotVersion,F=O.withLastLimboFreeSnapshotVersion(k);E.Ms=E.Ms.insert(w,F)}}}(s.localStore,u))}async function $P(n,e){const t=Te(n);if(!t.currentUser.isEqual(e)){oe(py,"User change. New user:",e.toKey());const s=await VA(t.localStore,e);t.currentUser=e,function(u,h){u.mu.forEach(d=>{d.forEach(m=>{m.reject(new ae(W.CANCELLED,h))})}),u.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await lc(t,s.Ls)}}function KP(n,e){const t=Te(n),s=t.Au.get(e);if(s&&s.hu)return Ne().add(s.key);{let o=Ne();const u=t.Iu.get(e);if(!u)return o;for(const h of u){const d=t.Tu.get(h);o=o.unionWith(d.view.nu)}return o}}function nS(n){const e=Te(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=ZA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=KP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=FP.bind(null,e),e.Pu.H_=DP.bind(null,e.eventManager),e.Pu.yu=OP.bind(null,e.eventManager),e}function QP(n){const e=Te(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=qP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=HP.bind(null,e),e}class Rf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Kf(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Zx(this.persistence,new Yx,e.initialUser,this.serializer)}Cu(e){return new kA(iy.mi,this.serializer)}Du(e){return new sP}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Rf.provider={build:()=>new Rf};class YP extends Rf{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Be(this.persistence.referenceDelegate instanceof Af,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new Px(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?dn.withCacheSize(this.cacheSizeBytes):dn.DEFAULT;return new kA(s=>Af.mi(s,t),this.serializer)}}class fg{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>M0(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=$P.bind(null,this.syncEngine),await IP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new NP}()}createDatastore(e){const t=Kf(e.databaseInfo.databaseId),s=function(u){return new cP(u)}(e.databaseInfo);return function(u,h,d,m){return new pP(u,h,d,m)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,u,h,d){return new gP(s,o,u,h,d)}(this.localStore,this.datastore,e.asyncQueue,t=>M0(this.syncEngine,t,0),function(){return R0.v()?new R0:new aP}())}createSyncEngine(e,t){return function(o,u,h,d,m,y,E){const b=new kP(o,u,h,d,m,y);return E&&(b.gu=!0),b}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await async function(t){const s=Te(t);oe(Sa,"RemoteStore shutting down."),s.Ea.add(5),await oc(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}fg.provider={build:()=>new fg};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Ti("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As="FirestoreClient";class XP{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Xt.UNAUTHENTICATED,this.clientId=$g.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async h=>{oe(As,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(oe(As,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ms;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=fy(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Am(n,e){n.asyncQueue.verifyOperationInProgress(),oe(As,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async o=>{s.isEqual(o)||(await VA(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function P0(n,e){n.asyncQueue.verifyOperationInProgress();const t=await WP(n);oe(As,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(s=>C0(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,o)=>C0(e.remoteStore,o)),n._onlineComponents=e}async function WP(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){oe(As,"Using user provided OfflineComponentProvider");try{await Am(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===W.FAILED_PRECONDITION||o.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;jo("Error using user provided cache. Falling back to memory cache: "+t),await Am(n,new Rf)}}else oe(As,"Using default OfflineComponentProvider"),await Am(n,new YP(void 0));return n._offlineComponents}async function iS(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(oe(As,"Using user provided OnlineComponentProvider"),await P0(n,n._uninitializedComponentsProvider._online)):(oe(As,"Using default OnlineComponentProvider"),await P0(n,new fg))),n._onlineComponents}function ZP(n){return iS(n).then(e=>e.syncEngine)}async function dg(n){const e=await iS(n),t=e.eventManager;return t.onListen=VP.bind(null,e.syncEngine),t.onUnlisten=zP.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=LP.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=BP.bind(null,e.syncEngine),t}function JP(n,e,t={}){const s=new ms;return n.asyncQueue.enqueueAndForget(async()=>function(u,h,d,m,y){const E=new rS({next:w=>{E.Nu(),h.enqueueAndForget(()=>KA(u,b));const O=w.docs.has(d);!O&&w.fromCache?y.reject(new ae(W.UNAVAILABLE,"Failed to get document because the client is offline.")):O&&w.fromCache&&m&&m.source==="server"?y.reject(new ae(W.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(w)},error:w=>y.reject(w)}),b=new QA(jf(d.path),E,{includeMetadataChanges:!0,qa:!0});return $A(u,b)}(await dg(n),n.asyncQueue,e,t,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sS(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS="firestore.googleapis.com",V0=!0;class L0{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ae(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=aS,this.ssl=V0}else this.host=e.host,this.ssl=e.ssl??V0;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=PA;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Mx)throw new ae(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}gM("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sS(e.experimentalLongPollingOptions??{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ae(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ae(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ae(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Xf{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new L0({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ae(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ae(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new L0(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new aM;switch(s.type){case"firstParty":return new cM(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ae(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=k0.get(t);s&&(oe("ComponentProvider","Removing Datastore"),k0.delete(t),s.terminate())}(this),Promise.resolve()}}function ek(n,e,t,s={}){n=Gn(n,Xf);const o=Cs(e),u=n._getSettings(),h={...u,emulatorOptions:n._getEmulatorOptions()},d=`${e}:${t}`;o&&(Dg(`https://${d}`),Og("Firestore",!0)),u.host!==aS&&u.host!==d&&jo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m={...u,host:d,ssl:o,emulatorOptions:s};if(!_s(m,h)&&(n._setSettings(m),s.mockUserToken)){let y,E;if(typeof s.mockUserToken=="string")y=s.mockUserToken,E=Xt.MOCK_USER;else{y=Yb(s.mockUserToken,n._app?.options.projectId);const b=s.mockUserToken.sub||s.mockUserToken.user_id;if(!b)throw new ae(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new Xt(b)}n._authCredentials=new oM(new Gw(y,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ma(this.firestore,e,this._query)}}class ct{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ct(this.firestore,e,this._key)}toJSON(){return{type:ct._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(ic(t,ct._jsonSchema))return new ct(e,s||null,new de(Je.fromString(t.referencePath)))}}ct._jsonSchemaVersion="firestore/documentReference/1.0",ct._jsonSchema={type:At("string",ct._jsonSchemaVersion),referencePath:At("string")};class gs extends Ma{constructor(e,t,s){super(e,t,jf(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ct(this.firestore,null,new de(e))}withConverter(e){return new gs(this.firestore,e,this._path)}}function y6(n,e,...t){if(n=We(n),$w("collection","path",e),n instanceof Xf){const s=Je.fromString(e,...t);return XT(s),new gs(n,null,s)}{if(!(n instanceof ct||n instanceof gs))throw new ae(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(Je.fromString(e,...t));return XT(s),new gs(n.firestore,null,s)}}function tk(n,e,...t){if(n=We(n),arguments.length===1&&(e=$g.newId()),$w("doc","path",e),n instanceof Xf){const s=Je.fromString(e,...t);return YT(s),new ct(n,null,new de(s))}{if(!(n instanceof ct||n instanceof gs))throw new ae(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(Je.fromString(e,...t));return YT(s),new ct(n.firestore,n instanceof gs?n.converter:null,new de(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U0="AsyncQueue";class z0{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new UA(this,"async_queue_retry"),this._c=()=>{const s=wm();s&&oe(U0,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=wm();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=wm();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new ms;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Zo(e))throw e;oe(U0,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(s=>{throw this.nc=s,this.rc=!1,Ti("INTERNAL UNHANDLED ERROR: ",B0(s)),s}).then(s=>(this.rc=!1,s))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=hy.createAndSchedule(this,e,t,s,u=>this.hc(u));return this.tc.push(o),o}uc(){this.nc&&ye(47125,{Pc:B0(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function B0(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j0(n){return function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1}(n,["next","error","complete"])}class Ss extends Xf{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new z0,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new z0(e),this._firestoreClient=void 0,await e}}}function nk(n,e){const t=typeof n=="object"?n:Ju(),s=typeof n=="string"?n:vf,o=Ai(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=$b("firestore");u&&ek(o,...u)}return o}function gy(n){if(n._terminated)throw new ae(W.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||rk(n),n._firestoreClient}function rk(n){const e=n._freezeSettings(),t=function(o,u,h,d){return new IM(o,u,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,sS(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(n._databaseId,n._app?.options.appId||"",n._persistenceKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new XP(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(o){const u=o?._online.build();return{_offline:o?._offline.build(u),_online:u}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Hn(Gt.fromBase64String(e))}catch(t){throw new ae(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Hn(Gt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Hn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ic(e,Hn._jsonSchema))return Hn.fromBase64String(e.bytes)}}Hn._jsonSchemaVersion="firestore/bytes/1.0",Hn._jsonSchema={type:At("string",Hn._jsonSchemaVersion),bytes:At("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ae(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ht(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ae(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ae(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ce(this._lat,e._lat)||Ce(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Mr._jsonSchemaVersion}}static fromJSON(e){if(ic(e,Mr._jsonSchema))return new Mr(e.latitude,e.longitude)}}Mr._jsonSchemaVersion="firestore/geoPoint/1.0",Mr._jsonSchema={type:At("string",Mr._jsonSchemaVersion),latitude:At("number"),longitude:At("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}toJSON(){return{type:xr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ic(e,xr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new xr(e.vectorValues);throw new ae(W.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}xr._jsonSchemaVersion="firestore/vectorValue/1.0",xr._jsonSchema={type:At("string",xr._jsonSchemaVersion),vectorValues:At("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ik=/^__.*__$/;class sk{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Os(e,this.data,this.fieldMask,t,this.fieldTransforms):new sc(e,this.data,t,this.fieldTransforms)}}class oS{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Os(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function lS(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ye(40011,{Ac:n})}}class yy{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new yy({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return If(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(lS(this.Ac)&&ik.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class ak{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Kf(e)}Cc(e,t,s,o=!1){return new yy({Ac:e,methodName:t,Dc:s,path:Ht.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Jf(n){const e=n._freezeSettings(),t=Kf(n._databaseId);return new ak(n._databaseId,!!e.ignoreUndefinedProperties,t)}function uS(n,e,t,s,o,u={}){const h=n.Cc(u.merge||u.mergeFields?2:0,e,t,o);vy("Data must be an object, but it was:",h,s);const d=cS(s,h);let m,y;if(u.merge)m=new Rn(h.fieldMask),y=h.fieldTransforms;else if(u.mergeFields){const E=[];for(const b of u.mergeFields){const w=pg(e,b,t);if(!h.contains(w))throw new ae(W.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);fS(E,w)||E.push(w)}m=new Rn(E),y=h.fieldTransforms.filter(b=>m.covers(b.field))}else m=null,y=h.fieldTransforms;return new sk(new pn(d),m,y)}class uc extends Zf{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof uc}}class _y extends Zf{constructor(e,t){super(e),this.Fc=t}_toFieldTransform(e){const t=new Gu(e.serializer,yA(e.serializer,this.Fc));return new ZM(e.path,t)}isEqual(e){return e instanceof _y&&this.Fc===e.Fc}}function ok(n,e,t,s){const o=n.Cc(1,e,t);vy("Data must be an object, but it was:",o,s);const u=[],h=pn.empty();Ds(s,(m,y)=>{const E=Ey(e,m,t);y=We(y);const b=o.yc(E);if(y instanceof uc)u.push(E);else{const w=cc(y,b);w!=null&&(u.push(E),h.set(E,w))}});const d=new Rn(u);return new oS(h,d,o.fieldTransforms)}function lk(n,e,t,s,o,u){const h=n.Cc(1,e,t),d=[pg(e,s,t)],m=[o];if(u.length%2!=0)throw new ae(W.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<u.length;w+=2)d.push(pg(e,u[w])),m.push(u[w+1]);const y=[],E=pn.empty();for(let w=d.length-1;w>=0;--w)if(!fS(y,d[w])){const O=d[w];let k=m[w];k=We(k);const F=h.yc(O);if(k instanceof uc)y.push(O);else{const V=cc(k,F);V!=null&&(y.push(O),E.set(O,V))}}const b=new Rn(y);return new oS(E,b,h.fieldTransforms)}function uk(n,e,t,s=!1){return cc(t,n.Cc(s?4:3,e))}function cc(n,e){if(hS(n=We(n)))return vy("Unsupported field value:",e,n),cS(n,e);if(n instanceof Zf)return function(s,o){if(!lS(o.Ac))throw o.Sc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(s,o){const u=[];let h=0;for(const d of s){let m=cc(d,o.wc(h));m==null&&(m={nullValue:"NULL_VALUE"}),u.push(m),h++}return{arrayValue:{values:u}}}(n,e)}return function(s,o){if((s=We(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return yA(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=tt.fromDate(s);return{timestampValue:wf(o.serializer,u)}}if(s instanceof tt){const u=new tt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:wf(o.serializer,u)}}if(s instanceof Mr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Hn)return{bytesValue:IA(o.serializer,s._byteString)};if(s instanceof ct){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.Sc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:ny(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof xr)return function(h,d){return{mapValue:{fields:{[tA]:{stringValue:nA},[Ef]:{arrayValue:{values:h.toArray().map(y=>{if(typeof y!="number")throw d.Sc("VectorValues must only contain numeric values.");return Zg(d.serializer,y)})}}}}}}(s,o);throw o.Sc(`Unsupported field value: ${Lf(s)}`)}(n,e)}function cS(n,e){const t={};return Yw(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ds(n,(s,o)=>{const u=cc(o,e.mc(s));u!=null&&(t[s]=u)}),{mapValue:{fields:t}}}function hS(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof tt||n instanceof Mr||n instanceof Hn||n instanceof ct||n instanceof Zf||n instanceof xr)}function vy(n,e,t){if(!hS(t)||!Kw(t)){const s=Lf(t);throw s==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+s)}}function pg(n,e,t){if((e=We(e))instanceof Wf)return e._internalPath;if(typeof e=="string")return Ey(n,e);throw If("Field path arguments must be of type string or ",n,!1,void 0,t)}const ck=new RegExp("[~\\*/\\[\\]]");function Ey(n,e,t){if(e.search(ck)>=0)throw If(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Wf(...e.split("."))._internalPath}catch{throw If(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function If(n,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let m="";return(u||h)&&(m+=" (found",u&&(m+=` in field ${s}`),h&&(m+=` in document ${o}`),m+=")"),new ae(W.INVALID_ARGUMENT,d+n+m)}function fS(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new hk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ed("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class hk extends dS{data(){return super.data()}}function ed(n,e){return typeof e=="string"?Ey(n,e):e instanceof Wf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fk(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ae(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ty{}class pS extends Ty{}function _6(n,e,...t){let s=[];e instanceof Ty&&s.push(e),s=s.concat(t),function(u){const h=u.filter(m=>m instanceof by).length,d=u.filter(m=>m instanceof td).length;if(h>1||h>0&&d>0)throw new ae(W.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const o of s)n=o._apply(n);return n}class td extends pS{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new td(e,t,s)}_apply(e){const t=this._parse(e);return mS(e._query,t),new Ma(e.firestore,e.converter,ng(e._query,t))}_parse(e){const t=Jf(e.firestore);return function(u,h,d,m,y,E,b){let w;if(y.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new ae(W.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){q0(b,E);const k=[];for(const F of b)k.push(F0(m,u,F));w={arrayValue:{values:k}}}else w=F0(m,u,b)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||q0(b,E),w=uk(d,h,b,E==="in"||E==="not-in");return wt.create(y,E,w)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function v6(n,e,t){const s=e,o=ed("where",n);return td._create(o,s,t)}class by extends Ty{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new by(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:ar.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,u){let h=o;const d=u.getFlattenedFilters();for(const m of d)mS(h,m),h=ng(h,m)}(e._query,t),new Ma(e.firestore,e.converter,ng(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class wy extends pS{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new wy(e,t)}_apply(e){const t=function(o,u,h){if(o.startAt!==null)throw new ae(W.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ae(W.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Fu(u,h)}(e._query,this._field,this._direction);return new Ma(e.firestore,e.converter,function(o,u){const h=o.explicitOrderBy.concat([u]);return new Jo(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)}(e._query,t))}}function E6(n,e="asc"){const t=e,s=ed("orderBy",n);return wy._create(s,t)}function F0(n,e,t){if(typeof(t=We(t))=="string"){if(t==="")throw new ae(W.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!cA(e)&&t.indexOf("/")!==-1)throw new ae(W.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(Je.fromString(t));if(!de.isDocumentKey(s))throw new ae(W.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return i0(n,new de(s))}if(t instanceof ct)return i0(n,t._key);throw new ae(W.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Lf(t)}.`)}function q0(n,e){if(!Array.isArray(n)||n.length===0)throw new ae(W.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function mS(n,e){const t=function(o,u){for(const h of o)for(const d of h.getFlattenedFilters())if(u.indexOf(d.op)>=0)return d.op;return null}(n.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new ae(W.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ae(W.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class dk{convertValue(e,t="none"){switch(bs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return gt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ts(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ye(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Ds(e,(o,u)=>{s[o]=this.convertValue(u,t)}),s}convertVectorValue(e){const t=e.fields?.[Ef].arrayValue?.values?.map(s=>gt(s.doubleValue));return new xr(t)}convertGeoPoint(e){return new Mr(gt(e.latitude),gt(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Bf(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(zu(e));default:return null}}convertTimestamp(e){const t=Es(e);return new tt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Je.fromString(e);Be(xA(s),9688,{name:e});const o=new Bu(s.get(1),s.get(3)),u=new de(s.popFirst(5));return o.isEqual(t)||Ti(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gS(n,e,t){let s;return s=n?n.toFirestore(e):e,s}class bu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ta extends dS{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new sf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(ed("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ae(W.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Ta._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Ta._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ta._jsonSchema={type:At("string",Ta._jsonSchemaVersion),bundleSource:At("string","DocumentSnapshot"),bundleName:At("string"),bundle:At("string")};class sf extends Ta{data(e={}){return super.data(e)}}class Vo{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new bu(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new sf(this._firestore,this._userDataWriter,s.key,s,new bu(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ae(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(d=>{const m=new sf(o._firestore,o._userDataWriter,d.doc.key,d.doc,new bu(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);return d.doc,{type:"added",doc:m,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(d=>u||d.type!==3).map(d=>{const m=new sf(o._firestore,o._userDataWriter,d.doc.key,d.doc,new bu(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,E=-1;return d.type!==0&&(y=h.indexOf(d.doc.key),h=h.delete(d.doc.key)),d.type!==1&&(h=h.add(d.doc),E=h.indexOf(d.doc.key)),{type:pk(d.type),doc:m,oldIndex:y,newIndex:E}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ae(W.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Vo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=$g.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach(u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function pk(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ye(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T6(n){n=Gn(n,ct);const e=Gn(n.firestore,Ss);return JP(gy(e),n._key).then(t=>_S(e,n,t))}Vo._jsonSchemaVersion="firestore/querySnapshot/1.0",Vo._jsonSchema={type:At("string",Vo._jsonSchemaVersion),bundleSource:At("string","QuerySnapshot"),bundleName:At("string"),bundle:At("string")};class yS extends dk{constructor(e){super(),this.firestore=e}convertBytes(e){return new Hn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ct(this.firestore,null,t)}}function b6(n,e,t){n=Gn(n,ct);const s=Gn(n.firestore,Ss),o=gS(n.converter,e);return nd(s,[uS(Jf(s),"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,$n.none())])}function w6(n,e,t,...s){n=Gn(n,ct);const o=Gn(n.firestore,Ss),u=Jf(o);let h;return h=typeof(e=We(e))=="string"||e instanceof Wf?lk(u,"updateDoc",n._key,e,t,s):ok(u,"updateDoc",n._key,e),nd(o,[h.toMutation(n._key,$n.exists(!0))])}function A6(n){return nd(Gn(n.firestore,Ss),[new Jg(n._key,$n.none())])}function S6(n,e){const t=Gn(n.firestore,Ss),s=tk(n),o=gS(n.converter,e);return nd(t,[uS(Jf(n.firestore),"addDoc",s._key,o,n.converter!==null,{}).toMutation(s._key,$n.exists(!1))]).then(()=>s)}function R6(n,...e){n=We(n);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||j0(e[s])||(t=e[s++]);const o={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(j0(e[s])){const m=e[s];e[s]=m.next?.bind(m),e[s+1]=m.error?.bind(m),e[s+2]=m.complete?.bind(m)}let u,h,d;if(n instanceof ct)h=Gn(n.firestore,Ss),d=jf(n._key.path),u={next:m=>{e[s]&&e[s](_S(h,n,m))},error:e[s+1],complete:e[s+2]};else{const m=Gn(n,Ma);h=Gn(m.firestore,Ss),d=m._query;const y=new yS(h);u={next:E=>{e[s]&&e[s](new Vo(h,y,m,E))},error:e[s+1],complete:e[s+2]},fk(n._query)}return function(y,E,b,w){const O=new rS(w),k=new QA(E,O,b);return y.asyncQueue.enqueueAndForget(async()=>$A(await dg(y),k)),()=>{O.Nu(),y.asyncQueue.enqueueAndForget(async()=>KA(await dg(y),k))}}(gy(h),d,o,u)}function nd(n,e){return function(s,o){const u=new ms;return s.asyncQueue.enqueueAndForget(async()=>jP(await ZP(s),o,u)),u.promise}(gy(n),e)}function _S(n,e,t){const s=t.docs.get(e._key),o=new yS(n);return new Ta(n,o,e._key,s,new bu(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I6(){return new uc("deleteField")}function C6(n){return new _y("increment",n)}(function(e,t=!0){(function(o){Xo=o})(Na),Kn(new Nn("firestore",(s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),d=new Ss(new lM(s.getProvider("auth-internal")),new hM(h,s.getProvider("app-check-internal")),function(y,E){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new ae(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bu(y.options.projectId,E)}(h,o),h);return u={useFetchStreams:t,...u},d._setSettings(u),d},"PUBLIC").setMultipleInstances(!0)),Jt(GT,$T,e),Jt(GT,$T,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS="firebasestorage.googleapis.com",ES="storageBucket",mk=120*1e3,gk=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends Yn{constructor(e,t,s=0){super(Sm(e),`Firebase Storage: ${t} (${Sm(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ft.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Sm(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ht;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ht||(ht={}));function Sm(n){return"storage/"+n}function Ay(){const n="An unknown error occurred, please check the error payload for server response.";return new ft(ht.UNKNOWN,n)}function yk(n){return new ft(ht.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function _k(n){return new ft(ht.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function vk(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ft(ht.UNAUTHENTICATED,n)}function Ek(){return new ft(ht.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Tk(n){return new ft(ht.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function bk(){return new ft(ht.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function wk(){return new ft(ht.CANCELED,"User canceled the upload/download.")}function Ak(n){return new ft(ht.INVALID_URL,"Invalid URL '"+n+"'.")}function Sk(n){return new ft(ht.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Rk(){return new ft(ht.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ES+"' property when initializing the app?")}function Ik(){return new ft(ht.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Ck(){return new ft(ht.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Nk(n){return new ft(ht.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function mg(n){return new ft(ht.INVALID_ARGUMENT,n)}function TS(){return new ft(ht.APP_DELETED,"The Firebase app was deleted.")}function Dk(n){return new ft(ht.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Du(n,e){return new ft(ht.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function pu(n){throw new ft(ht.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=In.makeFromUrl(e,t)}catch{return new In(e,"")}if(s.path==="")return s;throw Sk(e)}static makeFromUrl(e,t){let s=null;const o="([A-Za-z0-9.\\-_]+)";function u(ie){ie.path.charAt(ie.path.length-1)==="/"&&(ie.path_=ie.path_.slice(0,-1))}const h="(/(.*))?$",d=new RegExp("^gs://"+o+h,"i"),m={bucket:1,path:3};function y(ie){ie.path_=decodeURIComponent(ie.path)}const E="v[A-Za-z0-9_]+",b=t.replace(/[.]/g,"\\."),w="(/([^?#]*).*)?$",O=new RegExp(`^https?://${b}/${E}/b/${o}/o${w}`,"i"),k={bucket:1,path:3},F=t===vS?"(?:storage.googleapis.com|storage.cloud.google.com)":t,V="([^?#]*)",G=new RegExp(`^https?://${F}/${o}/${V}`,"i"),K=[{regex:d,indices:m,postModify:u},{regex:O,indices:k,postModify:y},{regex:G,indices:{bucket:1,path:2},postModify:y}];for(let ie=0;ie<K.length;ie++){const se=K[ie],he=se.regex.exec(e);if(he){const x=he[se.indices.bucket];let S=he[se.indices.path];S||(S=""),s=new In(x,S),se.postModify(s);break}}if(s==null)throw Ak(e);return s}}class Ok{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mk(n,e,t){let s=1,o=null,u=null,h=!1,d=0;function m(){return d===2}let y=!1;function E(...V){y||(y=!0,e.apply(null,V))}function b(V){o=setTimeout(()=>{o=null,n(O,m())},V)}function w(){u&&clearTimeout(u)}function O(V,...G){if(y){w();return}if(V){w(),E.call(null,V,...G);return}if(m()||h){w(),E.call(null,V,...G);return}s<64&&(s*=2);let K;d===1?(d=2,K=0):K=(s+Math.random())*1e3,b(K)}let k=!1;function F(V){k||(k=!0,w(),!y&&(o!==null?(V||(d=2),clearTimeout(o),b(0)):V||(d=1)))}return b(0),u=setTimeout(()=>{h=!0,F(!0)},t),F}function xk(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pk(n){return n!==void 0}function kk(n){return typeof n=="object"&&!Array.isArray(n)}function Sy(n){return typeof n=="string"||n instanceof String}function H0(n){return Ry()&&n instanceof Blob}function Ry(){return typeof Blob<"u"}function G0(n,e,t,s){if(s<e)throw mg(`Invalid value for '${n}'. Expected ${e} or greater.`);if(s>t)throw mg(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iy(n,e,t){let s=e;return t==null&&(s=`https://${e}`),`${t}://${s}/v0${n}`}function bS(n){const e=encodeURIComponent;let t="?";for(const s in n)if(n.hasOwnProperty(s)){const o=e(s)+"="+e(n[s]);t=t+o+"&"}return t=t.slice(0,-1),t}var ba;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(ba||(ba={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vk(n,e){const t=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,u=e.indexOf(n)!==-1;return t||o||u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk{constructor(e,t,s,o,u,h,d,m,y,E,b,w=!0,O=!1){this.url_=e,this.method_=t,this.headers_=s,this.body_=o,this.successCodes_=u,this.additionalRetryCodes_=h,this.callback_=d,this.errorCallback_=m,this.timeout_=y,this.progressCallback_=E,this.connectionFactory_=b,this.retry=w,this.isUsingEmulator=O,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((k,F)=>{this.resolve_=k,this.reject_=F,this.start_()})}start_(){const e=(s,o)=>{if(o){s(!1,new qh(!1,null,!0));return}const u=this.connectionFactory_();this.pendingConnection_=u;const h=d=>{const m=d.loaded,y=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(m,y)};this.progressCallback_!==null&&u.addUploadProgressListener(h),u.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&u.removeUploadProgressListener(h),this.pendingConnection_=null;const d=u.getErrorCode()===ba.NO_ERROR,m=u.getStatus();if(!d||Vk(m,this.additionalRetryCodes_)&&this.retry){const E=u.getErrorCode()===ba.ABORT;s(!1,new qh(!1,null,E));return}const y=this.successCodes_.indexOf(m)!==-1;s(!0,new qh(y,u))})},t=(s,o)=>{const u=this.resolve_,h=this.reject_,d=o.connection;if(o.wasSuccessCode)try{const m=this.callback_(d,d.getResponse());Pk(m)?u(m):u()}catch(m){h(m)}else if(d!==null){const m=Ay();m.serverResponse=d.getErrorText(),this.errorCallback_?h(this.errorCallback_(d,m)):h(m)}else if(o.canceled){const m=this.appDelete_?TS():wk();h(m)}else{const m=bk();h(m)}};this.canceled_?t(!1,new qh(!1,null,!0)):this.backoffId_=Mk(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&xk(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class qh{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function Uk(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function zk(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Bk(n,e){e&&(n["X-Firebase-GMPID"]=e)}function jk(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function Fk(n,e,t,s,o,u,h=!0,d=!1){const m=bS(n.urlParams),y=n.url+m,E=Object.assign({},n.headers);return Bk(E,e),Uk(E,t),zk(E,u),jk(E,s),new Lk(y,n.method,E,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,h,d)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qk(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Hk(...n){const e=qk();if(e!==void 0){const t=new e;for(let s=0;s<n.length;s++)t.append(n[s]);return t.getBlob()}else{if(Ry())return new Blob(n);throw new ft(ht.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Gk(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $k(n){if(typeof atob>"u")throw Nk("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Rm{constructor(e,t){this.data=e,this.contentType=t||null}}function Kk(n,e){switch(n){case Ir.RAW:return new Rm(wS(e));case Ir.BASE64:case Ir.BASE64URL:return new Rm(AS(n,e));case Ir.DATA_URL:return new Rm(Yk(e),Xk(e))}throw Ay()}function wS(n){const e=[];for(let t=0;t<n.length;t++){let s=n.charCodeAt(t);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const u=s,h=n.charCodeAt(++t);s=65536|(u&1023)<<10|h&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function Qk(n){let e;try{e=decodeURIComponent(n)}catch{throw Du(Ir.DATA_URL,"Malformed data URL.")}return wS(e)}function AS(n,e){switch(n){case Ir.BASE64:{const o=e.indexOf("-")!==-1,u=e.indexOf("_")!==-1;if(o||u)throw Du(n,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case Ir.BASE64URL:{const o=e.indexOf("+")!==-1,u=e.indexOf("/")!==-1;if(o||u)throw Du(n,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=$k(e)}catch(o){throw o.message.includes("polyfill")?o:Du(n,"Invalid character found")}const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}class SS{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Du(Ir.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=t[1]||null;s!=null&&(this.base64=Wk(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function Yk(n){const e=new SS(n);return e.base64?AS(Ir.BASE64,e.rest):Qk(e.rest)}function Xk(n){return new SS(n).contentType}function Wk(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,t){let s=0,o="";H0(e)?(this.data_=e,s=e.size,o=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,t){if(H0(this.data_)){const s=this.data_,o=Gk(s,e,t);return o===null?null:new ls(o)}else{const s=new Uint8Array(this.data_.buffer,e,t-e);return new ls(s,!0)}}static getBlob(...e){if(Ry()){const t=e.map(s=>s instanceof ls?s.data_:s);return new ls(Hk.apply(null,t))}else{const t=e.map(h=>Sy(h)?Kk(Ir.RAW,h).data:h.data_);let s=0;t.forEach(h=>{s+=h.byteLength});const o=new Uint8Array(s);let u=0;return t.forEach(h=>{for(let d=0;d<h.length;d++)o[u++]=h[d]}),new ls(o,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RS(n){let e;try{e=JSON.parse(n)}catch{return null}return kk(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zk(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function Jk(n,e){const t=e.split("/").filter(s=>s.length>0).join("/");return n.length===0?t:n+"/"+t}function IS(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eV(n,e){return e}class an{constructor(e,t,s,o){this.server=e,this.local=t||e,this.writable=!!s,this.xform=o||eV}}let Hh=null;function tV(n){return!Sy(n)||n.length<2?n:IS(n)}function CS(){if(Hh)return Hh;const n=[];n.push(new an("bucket")),n.push(new an("generation")),n.push(new an("metageneration")),n.push(new an("name","fullPath",!0));function e(u,h){return tV(h)}const t=new an("name");t.xform=e,n.push(t);function s(u,h){return h!==void 0?Number(h):h}const o=new an("size");return o.xform=s,n.push(o),n.push(new an("timeCreated")),n.push(new an("updated")),n.push(new an("md5Hash",null,!0)),n.push(new an("cacheControl",null,!0)),n.push(new an("contentDisposition",null,!0)),n.push(new an("contentEncoding",null,!0)),n.push(new an("contentLanguage",null,!0)),n.push(new an("contentType",null,!0)),n.push(new an("metadata","customMetadata",!0)),Hh=n,Hh}function nV(n,e){function t(){const s=n.bucket,o=n.fullPath,u=new In(s,o);return e._makeStorageReference(u)}Object.defineProperty(n,"ref",{get:t})}function rV(n,e,t){const s={};s.type="file";const o=t.length;for(let u=0;u<o;u++){const h=t[u];s[h.local]=h.xform(s,e[h.server])}return nV(s,n),s}function NS(n,e,t){const s=RS(e);return s===null?null:rV(n,s,t)}function iV(n,e,t,s){const o=RS(e);if(o===null||!Sy(o.downloadTokens))return null;const u=o.downloadTokens;if(u.length===0)return null;const h=encodeURIComponent;return u.split(",").map(y=>{const E=n.bucket,b=n.fullPath,w="/b/"+h(E)+"/o/"+h(b),O=Iy(w,t,s),k=bS({alt:"media",token:y});return O+k})[0]}function sV(n,e){const t={},s=e.length;for(let o=0;o<s;o++){const u=e[o];u.writable&&(t[u.server]=n[u.local])}return JSON.stringify(t)}class DS{constructor(e,t,s,o){this.url=e,this.method=t,this.handler=s,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OS(n){if(!n)throw Ay()}function aV(n,e){function t(s,o){const u=NS(n,o,e);return OS(u!==null),u}return t}function oV(n,e){function t(s,o){const u=NS(n,o,e);return OS(u!==null),iV(u,o,n.host,n._protocol)}return t}function MS(n){function e(t,s){let o;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?o=Ek():o=vk():t.getStatus()===402?o=_k(n.bucket):t.getStatus()===403?o=Tk(n.path):o=s,o.status=t.getStatus(),o.serverResponse=s.serverResponse,o}return e}function lV(n){const e=MS(n);function t(s,o){let u=e(s,o);return s.getStatus()===404&&(u=yk(n.path)),u.serverResponse=o.serverResponse,u}return t}function uV(n,e,t){const s=e.fullServerUrl(),o=Iy(s,n.host,n._protocol),u="GET",h=n.maxOperationRetryTime,d=new DS(o,u,oV(n,t),h);return d.errorHandler=lV(e),d}function cV(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function hV(n,e,t){const s=Object.assign({},t);return s.fullPath=n.path,s.size=e.size(),s.contentType||(s.contentType=cV(null,e)),s}function fV(n,e,t,s,o){const u=e.bucketOnlyServerUrl(),h={"X-Goog-Upload-Protocol":"multipart"};function d(){let K="";for(let ie=0;ie<2;ie++)K=K+Math.random().toString().slice(2);return K}const m=d();h["Content-Type"]="multipart/related; boundary="+m;const y=hV(e,s,o),E=sV(y,t),b="--"+m+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+E+`\r
--`+m+`\r
Content-Type: `+y.contentType+`\r
\r
`,w=`\r
--`+m+"--",O=ls.getBlob(b,s,w);if(O===null)throw Ik();const k={name:y.fullPath},F=Iy(u,n.host,n._protocol),V="POST",G=n.maxUploadRetryTime,Z=new DS(F,V,aV(n,t),G);return Z.urlParams=k,Z.headers=h,Z.body=O.uploadData(),Z.errorHandler=MS(e),Z}class dV{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ba.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ba.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ba.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,s,o,u){if(this.sent_)throw pu("cannot .send() more than once");if(Cs(e)&&s&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),u!==void 0)for(const h in u)u.hasOwnProperty(h)&&this.xhr_.setRequestHeader(h,u[h].toString());return o!==void 0?this.xhr_.send(o):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw pu("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw pu("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw pu("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw pu("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class pV extends dV{initXhr(){this.xhr_.responseType="text"}}function xS(){return new pV}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e,t){this._service=e,t instanceof In?this._location=t:this._location=In.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ra(e,t)}get root(){const e=new In(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return IS(this._location.path)}get storage(){return this._service}get parent(){const e=Zk(this._location.path);if(e===null)return null;const t=new In(this._location.bucket,e);return new Ra(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Dk(e)}}function mV(n,e,t){n._throwIfRoot("uploadBytes");const s=fV(n.storage,n._location,CS(),new ls(e,!0),t);return n.storage.makeRequestWithTokens(s,xS).then(o=>({metadata:o,ref:n}))}function gV(n){n._throwIfRoot("getDownloadURL");const e=uV(n.storage,n._location,CS());return n.storage.makeRequestWithTokens(e,xS).then(t=>{if(t===null)throw Ck();return t})}function yV(n,e){const t=Jk(n._location.path,e),s=new In(n._location.bucket,t);return new Ra(n.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _V(n){return/^[A-Za-z]+:\/\//.test(n)}function vV(n,e){return new Ra(n,e)}function PS(n,e){if(n instanceof Cy){const t=n;if(t._bucket==null)throw Rk();const s=new Ra(t,t._bucket);return e!=null?PS(s,e):s}else return e!==void 0?yV(n,e):n}function EV(n,e){if(e&&_V(e)){if(n instanceof Cy)return vV(n,e);throw mg("To use ref(service, url), the first argument must be a Storage instance.")}else return PS(n,e)}function $0(n,e){const t=e?.[ES];return t==null?null:In.makeFromBucketSpec(t,n)}function TV(n,e,t,s={}){n.host=`${e}:${t}`;const o=Cs(e);o&&(Dg(`https://${n.host}/b`),Og("Storage",!0)),n._isUsingEmulator=!0,n._protocol=o?"https":"http";const{mockUserToken:u}=s;u&&(n._overrideAuthToken=typeof u=="string"?u:Yb(u,n.app.options.projectId))}class Cy{constructor(e,t,s,o,u,h=!1){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=o,this._firebaseVersion=u,this._isUsingEmulator=h,this._bucket=null,this._host=vS,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=mk,this._maxUploadRetryTime=gk,this._requests=new Set,o!=null?this._bucket=In.makeFromBucketSpec(o,this._host):this._bucket=$0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=In.makeFromBucketSpec(this._url,e):this._bucket=$0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){G0("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){G0("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(ln(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ra(this,e)}_makeRequest(e,t,s,o,u=!0){if(this._deleted)return new Ok(TS());{const h=Fk(e,this._appId,s,o,t,this._firebaseVersion,u,this._isUsingEmulator);return this._requests.add(h),h.getPromise().then(()=>this._requests.delete(h),()=>this._requests.delete(h)),h}}async makeRequestWithTokens(e,t){const[s,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,o).getPromise()}}const K0="@firebase/storage",Q0="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kS="storage";function N6(n,e,t){return n=We(n),mV(n,e,t)}function D6(n){return n=We(n),gV(n)}function O6(n,e){return n=We(n),EV(n,e)}function bV(n=Ju(),e){n=We(n);const s=Ai(n,kS).getImmediate({identifier:e}),o=$b("storage");return o&&wV(s,...o),s}function wV(n,e,t,s={}){TV(n,e,t,s)}function AV(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new Cy(t,s,o,e,Na)}function SV(){Kn(new Nn(kS,AV,"PUBLIC").setMultipleInstances(!0)),Jt(K0,Q0,""),Jt(K0,Q0,"esm2020")}SV();const VS="@firebase/installations",Ny="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LS=1e4,US=`w:${Ny}`,zS="FIS_v2",RV="https://firebaseinstallations.googleapis.com/v1",IV=3600*1e3,CV="installations",NV="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DV={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ia=new Ns(CV,NV,DV);function BS(n){return n instanceof Yn&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jS({projectId:n}){return`${RV}/projects/${n}/installations`}function FS(n){return{token:n.token,requestStatus:2,expiresIn:MV(n.expiresIn),creationTime:Date.now()}}async function qS(n,e){const s=(await e.json()).error;return Ia.create("request-failed",{requestName:n,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function HS({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function OV(n,{refreshToken:e}){const t=HS(n);return t.append("Authorization",xV(e)),t}async function GS(n){const e=await n();return e.status>=500&&e.status<600?n():e}function MV(n){return Number(n.replace("s","000"))}function xV(n){return`${zS} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PV({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const s=jS(n),o=HS(n),u=e.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const h={fid:t,authVersion:zS,appId:n.appId,sdkVersion:US},d={method:"POST",headers:o,body:JSON.stringify(h)},m=await GS(()=>fetch(s,d));if(m.ok){const y=await m.json();return{fid:y.fid||t,registrationStatus:2,refreshToken:y.refreshToken,authToken:FS(y.authToken)}}else throw await qS("Create Installation",m)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $S(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kV(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VV=/^[cdef][\w-]{21}$/,gg="";function LV(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=UV(n);return VV.test(t)?t:gg}catch{return gg}}function UV(n){return kV(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KS=new Map;function QS(n,e){const t=rd(n);YS(t,e),zV(t,e)}function YS(n,e){const t=KS.get(n);if(t)for(const s of t)s(e)}function zV(n,e){const t=BV();t&&t.postMessage({key:n,fid:e}),jV()}let Ea=null;function BV(){return!Ea&&"BroadcastChannel"in self&&(Ea=new BroadcastChannel("[Firebase] FID Change"),Ea.onmessage=n=>{YS(n.data.key,n.data.fid)}),Ea}function jV(){KS.size===0&&Ea&&(Ea.close(),Ea=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FV="firebase-installations-database",qV=1,Ca="firebase-installations-store";let Im=null;function Dy(){return Im||(Im=ew(FV,qV,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Ca)}}})),Im}async function Cf(n,e){const t=rd(n),o=(await Dy()).transaction(Ca,"readwrite"),u=o.objectStore(Ca),h=await u.get(t);return await u.put(e,t),await o.done,(!h||h.fid!==e.fid)&&QS(n,e.fid),e}async function XS(n){const e=rd(n),s=(await Dy()).transaction(Ca,"readwrite");await s.objectStore(Ca).delete(e),await s.done}async function id(n,e){const t=rd(n),o=(await Dy()).transaction(Ca,"readwrite"),u=o.objectStore(Ca),h=await u.get(t),d=e(h);return d===void 0?await u.delete(t):await u.put(d,t),await o.done,d&&(!h||h.fid!==d.fid)&&QS(n,d.fid),d}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oy(n){let e;const t=await id(n.appConfig,s=>{const o=HV(s),u=GV(n,o);return e=u.registrationPromise,u.installationEntry});return t.fid===gg?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function HV(n){const e=n||{fid:LV(),registrationStatus:0};return WS(e)}function GV(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Ia.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=$V(n,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:KV(n)}:{installationEntry:e}}async function $V(n,e){try{const t=await PV(n,e);return Cf(n.appConfig,t)}catch(t){throw BS(t)&&t.customData.serverCode===409?await XS(n.appConfig):await Cf(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function KV(n){let e=await Y0(n.appConfig);for(;e.registrationStatus===1;)await $S(100),e=await Y0(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await Oy(n);return s||t}return e}function Y0(n){return id(n,e=>{if(!e)throw Ia.create("installation-not-found");return WS(e)})}function WS(n){return QV(n)?{fid:n.fid,registrationStatus:0}:n}function QV(n){return n.registrationStatus===1&&n.registrationTime+LS<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YV({appConfig:n,heartbeatServiceProvider:e},t){const s=XV(n,t),o=OV(n,t),u=e.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const h={installation:{sdkVersion:US,appId:n.appId}},d={method:"POST",headers:o,body:JSON.stringify(h)},m=await GS(()=>fetch(s,d));if(m.ok){const y=await m.json();return FS(y)}else throw await qS("Generate Auth Token",m)}function XV(n,{fid:e}){return`${jS(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function My(n,e=!1){let t;const s=await id(n.appConfig,u=>{if(!ZS(u))throw Ia.create("not-registered");const h=u.authToken;if(!e&&JV(h))return u;if(h.requestStatus===1)return t=WV(n,e),u;{if(!navigator.onLine)throw Ia.create("app-offline");const d=t4(u);return t=ZV(n,d),d}});return t?await t:s.authToken}async function WV(n,e){let t=await X0(n.appConfig);for(;t.authToken.requestStatus===1;)await $S(100),t=await X0(n.appConfig);const s=t.authToken;return s.requestStatus===0?My(n,e):s}function X0(n){return id(n,e=>{if(!ZS(e))throw Ia.create("not-registered");const t=e.authToken;return n4(t)?{...e,authToken:{requestStatus:0}}:e})}async function ZV(n,e){try{const t=await YV(n,e),s={...e,authToken:t};return await Cf(n.appConfig,s),t}catch(t){if(BS(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await XS(n.appConfig);else{const s={...e,authToken:{requestStatus:0}};await Cf(n.appConfig,s)}throw t}}function ZS(n){return n!==void 0&&n.registrationStatus===2}function JV(n){return n.requestStatus===2&&!e4(n)}function e4(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+IV}function t4(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function n4(n){return n.requestStatus===1&&n.requestTime+LS<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r4(n){const e=n,{installationEntry:t,registrationPromise:s}=await Oy(e);return s?s.catch(console.error):My(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i4(n,e=!1){const t=n;return await s4(t),(await My(t,e)).token}async function s4(n){const{registrationPromise:e}=await Oy(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a4(n){if(!n||!n.options)throw Cm("App Configuration");if(!n.name)throw Cm("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Cm(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Cm(n){return Ia.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JS="installations",o4="installations-internal",l4=n=>{const e=n.getProvider("app").getImmediate(),t=a4(e),s=Ai(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},u4=n=>{const e=n.getProvider("app").getImmediate(),t=Ai(e,JS).getImmediate();return{getId:()=>r4(t),getToken:o=>i4(t,o)}};function c4(){Kn(new Nn(JS,l4,"PUBLIC")),Kn(new Nn(o4,u4,"PRIVATE"))}c4();Jt(VS,Ny);Jt(VS,Ny,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf="analytics",h4="firebase_id",f4="origin",d4=60*1e3,p4="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",xy="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn=new Zu("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m4={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Cn=new Ns("analytics","Analytics",m4);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g4(n){if(!n.startsWith(xy)){const e=Cn.create("invalid-gtag-resource",{gtagURL:n});return mn.warn(e.message),""}return n}function eR(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function y4(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function _4(n,e){const t=y4("firebase-js-sdk-policy",{createScriptURL:g4}),s=document.createElement("script"),o=`${xy}?l=${n}&id=${e}`;s.src=t?t?.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function v4(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function E4(n,e,t,s,o,u){const h=s[o];try{if(h)await e[h];else{const m=(await eR(t)).find(y=>y.measurementId===o);m&&await e[m.appId]}}catch(d){mn.error(d)}n("config",o,u)}async function T4(n,e,t,s,o){try{let u=[];if(o&&o.send_to){let h=o.send_to;Array.isArray(h)||(h=[h]);const d=await eR(t);for(const m of h){const y=d.find(b=>b.measurementId===m),E=y&&e[y.appId];if(E)u.push(E);else{u=[];break}}}u.length===0&&(u=Object.values(e)),await Promise.all(u),n("event",s,o||{})}catch(u){mn.error(u)}}function b4(n,e,t,s){async function o(u,...h){try{if(u==="event"){const[d,m]=h;await T4(n,e,t,d,m)}else if(u==="config"){const[d,m]=h;await E4(n,e,t,s,d,m)}else if(u==="consent"){const[d,m]=h;n("consent",d,m)}else if(u==="get"){const[d,m,y]=h;n("get",d,m,y)}else if(u==="set"){const[d]=h;n("set",d)}else n(u,...h)}catch(d){mn.error(d)}}return o}function w4(n,e,t,s,o){let u=function(...h){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(u=window[o]),window[o]=b4(u,n,e,t),{gtagCore:u,wrappedGtag:window[o]}}function A4(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(xy)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S4=30,R4=1e3;class I4{constructor(e={},t=R4){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const tR=new I4;function C4(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function N4(n){const{appId:e,apiKey:t}=n,s={method:"GET",headers:C4(t)},o=p4.replace("{app-id}",e),u=await fetch(o,s);if(u.status!==200&&u.status!==304){let h="";try{const d=await u.json();d.error?.message&&(h=d.error.message)}catch{}throw Cn.create("config-fetch-failed",{httpStatus:u.status,responseMessage:h})}return u.json()}async function D4(n,e=tR,t){const{appId:s,apiKey:o,measurementId:u}=n.options;if(!s)throw Cn.create("no-app-id");if(!o){if(u)return{measurementId:u,appId:s};throw Cn.create("no-api-key")}const h=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},d=new x4;return setTimeout(async()=>{d.abort()},d4),nR({appId:s,apiKey:o,measurementId:u},h,d,e)}async function nR(n,{throttleEndTimeMillis:e,backoffCount:t},s,o=tR){const{appId:u,measurementId:h}=n;try{await O4(s,e)}catch(d){if(h)return mn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${d?.message}]`),{appId:u,measurementId:h};throw d}try{const d=await N4(n);return o.deleteThrottleMetadata(u),d}catch(d){const m=d;if(!M4(m)){if(o.deleteThrottleMetadata(u),h)return mn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${m?.message}]`),{appId:u,measurementId:h};throw d}const y=Number(m?.customData?.httpStatus)===503?gT(t,o.intervalMillis,S4):gT(t,o.intervalMillis),E={throttleEndTimeMillis:Date.now()+y,backoffCount:t+1};return o.setThrottleMetadata(u,E),mn.debug(`Calling attemptFetch again in ${y} millis`),nR(n,E,s,o)}}function O4(n,e){return new Promise((t,s)=>{const o=Math.max(e-Date.now(),0),u=setTimeout(t,o);n.addEventListener(()=>{clearTimeout(u),s(Cn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function M4(n){if(!(n instanceof Yn)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class x4{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function P4(n,e,t,s,o){if(o&&o.global){n("event",t,s);return}else{const u=await e,h={...s,send_to:u};n("event",t,h)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k4(){if(Mg())try{await xg()}catch(n){return mn.warn(Cn.create("indexeddb-unavailable",{errorInfo:n?.toString()}).message),!1}else return mn.warn(Cn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function V4(n,e,t,s,o,u,h){const d=D4(n);d.then(w=>{t[w.measurementId]=w.appId,n.options.measurementId&&w.measurementId!==n.options.measurementId&&mn.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${w.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(w=>mn.error(w)),e.push(d);const m=k4().then(w=>{if(w)return s.getId()}),[y,E]=await Promise.all([d,m]);A4(u)||_4(u,y.measurementId),o("js",new Date);const b=h?.config??{};return b[f4]="firebase",b.update=!0,E!=null&&(b[h4]=E),o("config",y.measurementId,b),y.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L4{constructor(e){this.app=e}_delete(){return delete Ou[this.app.options.appId],Promise.resolve()}}let Ou={},W0=[];const Z0={};let Nm="dataLayer",U4="gtag",J0,rR,eb=!1;function z4(){const n=[];if(Xb()&&n.push("This is a browser extension environment."),Wb()||n.push("Cookies are not available."),n.length>0){const e=n.map((s,o)=>`(${o+1}) ${s}`).join(" "),t=Cn.create("invalid-analytics-context",{errorInfo:e});mn.warn(t.message)}}function B4(n,e,t){z4();const s=n.options.appId;if(!s)throw Cn.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)mn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Cn.create("no-api-key");if(Ou[s]!=null)throw Cn.create("already-exists",{id:s});if(!eb){v4(Nm);const{wrappedGtag:u,gtagCore:h}=w4(Ou,W0,Z0,Nm,U4);rR=u,J0=h,eb=!0}return Ou[s]=V4(n,W0,Z0,e,J0,Nm,t),new L4(n)}function j4(n=Ju()){n=We(n);const e=Ai(n,Nf);return e.isInitialized()?e.getImmediate():F4(n)}function F4(n,e={}){const t=Ai(n,Nf);if(t.isInitialized()){const o=t.getImmediate();if(_s(e,t.getOptions()))return o;throw Cn.create("already-initialized")}return t.initialize({options:e})}function q4(n,e,t,s){n=We(n),P4(rR,Ou[n.app.options.appId],e,t,s).catch(o=>mn.error(o))}const tb="@firebase/analytics",nb="0.10.18";function H4(){Kn(new Nn(Nf,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return B4(s,o,t)},"PUBLIC")),Kn(new Nn("analytics-internal",n,"PRIVATE")),Jt(tb,nb),Jt(tb,nb,"esm2020");function n(e){try{const t=e.getProvider(Nf).getImmediate();return{logEvent:(s,o,u)=>q4(t,s,o,u)}}catch(t){throw Cn.create("interop-component-reg-failed",{reason:t})}}}H4();var yg,rb,sd=function(){var n=self.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0];if(n&&n.responseStart>0&&n.responseStart<performance.now())return n},iR=function(n){if(document.readyState==="loading")return"loading";var e=sd();if(e){if(n<e.domInteractive)return"loading";if(e.domContentLoadedEventStart===0||n<e.domContentLoadedEventStart)return"dom-interactive";if(e.domComplete===0||n<e.domComplete)return"dom-content-loaded"}return"complete"},G4=function(n){var e=n.nodeName;return n.nodeType===1?e.toLowerCase():e.toUpperCase().replace(/^#/,"")},Py=function(n,e){var t="";try{for(;n&&n.nodeType!==9;){var s=n,o=s.id?"#"+s.id:G4(s)+(s.classList&&s.classList.value&&s.classList.value.trim()&&s.classList.value.trim().length?"."+s.classList.value.trim().replace(/\s+/g,"."):"");if(t.length+o.length>(e||100)-1)return t||o;if(t=t?o+">"+t:o,s.id)break;n=s.parentNode}}catch{}return t},sR=-1,$4=function(){return sR},hc=function(n){addEventListener("pageshow",function(e){e.persisted&&(sR=e.timeStamp,n(e))},!0)},ky=function(){var n=sd();return n&&n.activationStart||0},Rs=function(n,e){var t=sd(),s="navigate";return $4()>=0?s="back-forward-cache":t&&(document.prerendering||ky()>0?s="prerender":document.wasDiscarded?s="restore":t.type&&(s=t.type.replace(/_/g,"-"))),{name:n,value:e===void 0?-1:e,rating:"good",delta:0,entries:[],id:"v4-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:s}},tl=function(n,e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(n)){var s=new PerformanceObserver(function(o){Promise.resolve().then(function(){e(o.getEntries())})});return s.observe(Object.assign({type:n,buffered:!0},t||{})),s}}catch{}},Is=function(n,e,t,s){var o,u;return function(h){e.value>=0&&(h||s)&&((u=e.value-(o||0))||o===void 0)&&(o=e.value,e.delta=u,e.rating=function(d,m){return d>m[1]?"poor":d>m[0]?"needs-improvement":"good"}(e.value,t),n(e))}},Vy=function(n){requestAnimationFrame(function(){return requestAnimationFrame(function(){return n()})})},ad=function(n){document.addEventListener("visibilitychange",function(){document.visibilityState==="hidden"&&n()})},Ly=function(n){var e=!1;return function(){e||(n(),e=!0)}},Oo=-1,ib=function(){return document.visibilityState!=="hidden"||document.prerendering?1/0:0},Df=function(n){document.visibilityState==="hidden"&&Oo>-1&&(Oo=n.type==="visibilitychange"?n.timeStamp:0,K4())},sb=function(){addEventListener("visibilitychange",Df,!0),addEventListener("prerenderingchange",Df,!0)},K4=function(){removeEventListener("visibilitychange",Df,!0),removeEventListener("prerenderingchange",Df,!0)},aR=function(){return Oo<0&&(Oo=ib(),sb(),hc(function(){setTimeout(function(){Oo=ib(),sb()},0)})),{get firstHiddenTime(){return Oo}}},Uy=function(n){document.prerendering?addEventListener("prerenderingchange",function(){return n()},!0):n()},ab=[1800,3e3],Q4=function(n,e){e=e||{},Uy(function(){var t,s=aR(),o=Rs("FCP"),u=tl("paint",function(h){h.forEach(function(d){d.name==="first-contentful-paint"&&(u.disconnect(),d.startTime<s.firstHiddenTime&&(o.value=Math.max(d.startTime-ky(),0),o.entries.push(d),t(!0)))})});u&&(t=Is(n,o,ab,e.reportAllChanges),hc(function(h){o=Rs("FCP"),t=Is(n,o,ab,e.reportAllChanges),Vy(function(){o.value=performance.now()-h.timeStamp,t(!0)})}))})},ob=[.1,.25],Y4=function(n,e){(function(t,s){s=s||{},Q4(Ly(function(){var o,u=Rs("CLS",0),h=0,d=[],m=function(E){E.forEach(function(b){if(!b.hadRecentInput){var w=d[0],O=d[d.length-1];h&&b.startTime-O.startTime<1e3&&b.startTime-w.startTime<5e3?(h+=b.value,d.push(b)):(h=b.value,d=[b])}}),h>u.value&&(u.value=h,u.entries=d,o())},y=tl("layout-shift",m);y&&(o=Is(t,u,ob,s.reportAllChanges),ad(function(){m(y.takeRecords()),o(!0)}),hc(function(){h=0,u=Rs("CLS",0),o=Is(t,u,ob,s.reportAllChanges),Vy(function(){return o()})}),setTimeout(o,0))}))})(function(t){var s=function(o){var u,h={};if(o.entries.length){var d=o.entries.reduce(function(y,E){return y&&y.value>E.value?y:E});if(d&&d.sources&&d.sources.length){var m=(u=d.sources).find(function(y){return y.node&&y.node.nodeType===1})||u[0];m&&(h={largestShiftTarget:Py(m.node),largestShiftTime:d.startTime,largestShiftValue:d.value,largestShiftSource:m,largestShiftEntry:d,loadState:iR(d.startTime)})}}return Object.assign(o,{attribution:h})}(t);n(s)},e)},oR=0,Dm=1/0,Gh=0,X4=function(n){n.forEach(function(e){e.interactionId&&(Dm=Math.min(Dm,e.interactionId),Gh=Math.max(Gh,e.interactionId),oR=Gh?(Gh-Dm)/7+1:0)})},lR=function(){return yg?oR:performance.interactionCount||0},W4=function(){"interactionCount"in performance||yg||(yg=tl("event",X4,{type:"event",buffered:!0,durationThreshold:0}))},nr=[],Mu=new Map,uR=0,Z4=function(){var n=Math.min(nr.length-1,Math.floor((lR()-uR)/50));return nr[n]},cR=[],J4=function(n){if(cR.forEach(function(o){return o(n)}),n.interactionId||n.entryType==="first-input"){var e=nr[nr.length-1],t=Mu.get(n.interactionId);if(t||nr.length<10||n.duration>e.latency){if(t)n.duration>t.latency?(t.entries=[n],t.latency=n.duration):n.duration===t.latency&&n.startTime===t.entries[0].startTime&&t.entries.push(n);else{var s={id:n.interactionId,latency:n.duration,entries:[n]};Mu.set(s.id,s),nr.push(s)}nr.sort(function(o,u){return u.latency-o.latency}),nr.length>10&&nr.splice(10).forEach(function(o){return Mu.delete(o.id)})}}},zy=function(n){var e=self.requestIdleCallback||self.setTimeout,t=-1;return n=Ly(n),document.visibilityState==="hidden"?n():(t=e(n),ad(n)),t},lb=[200,500],eL=function(n,e){"PerformanceEventTiming"in self&&"interactionId"in PerformanceEventTiming.prototype&&(e=e||{},Uy(function(){var t;W4();var s,o=Rs("INP"),u=function(d){zy(function(){d.forEach(J4);var m=Z4();m&&m.latency!==o.value&&(o.value=m.latency,o.entries=m.entries,s())})},h=tl("event",u,{durationThreshold:(t=e.durationThreshold)!==null&&t!==void 0?t:40});s=Is(n,o,lb,e.reportAllChanges),h&&(h.observe({type:"first-input",buffered:!0}),ad(function(){u(h.takeRecords()),s(!0)}),hc(function(){uR=lR(),nr.length=0,Mu.clear(),o=Rs("INP"),s=Is(n,o,lb,e.reportAllChanges)}))}))},Lo=[],us=[],_g=0,By=new WeakMap,Uo=new Map,vg=-1,tL=function(n){Lo=Lo.concat(n),hR()},hR=function(){vg<0&&(vg=zy(nL))},nL=function(){Uo.size>10&&Uo.forEach(function(h,d){Mu.has(d)||Uo.delete(d)});var n=nr.map(function(h){return By.get(h.entries[0])}),e=us.length-50;us=us.filter(function(h,d){return d>=e||n.includes(h)});for(var t=new Set,s=0;s<us.length;s++){var o=us[s];fR(o.startTime,o.processingEnd).forEach(function(h){t.add(h)})}var u=Lo.length-1-50;Lo=Lo.filter(function(h,d){return h.startTime>_g&&d>u||t.has(h)}),vg=-1};cR.push(function(n){n.interactionId&&n.target&&!Uo.has(n.interactionId)&&Uo.set(n.interactionId,n.target)},function(n){var e,t=n.startTime+n.duration;_g=Math.max(_g,n.processingEnd);for(var s=us.length-1;s>=0;s--){var o=us[s];if(Math.abs(t-o.renderTime)<=8){(e=o).startTime=Math.min(n.startTime,e.startTime),e.processingStart=Math.min(n.processingStart,e.processingStart),e.processingEnd=Math.max(n.processingEnd,e.processingEnd),e.entries.push(n);break}}e||(e={startTime:n.startTime,processingStart:n.processingStart,processingEnd:n.processingEnd,renderTime:t,entries:[n]},us.push(e)),(n.interactionId||n.entryType==="first-input")&&By.set(n,e),hR()});var fR=function(n,e){for(var t,s=[],o=0;t=Lo[o];o++)if(!(t.startTime+t.duration<n)){if(t.startTime>e)break;s.push(t)}return s},rL=function(n,e){rb||(rb=tl("long-animation-frame",tL)),eL(function(t){var s=function(o){var u=o.entries[0],h=By.get(u),d=u.processingStart,m=h.processingEnd,y=h.entries.sort(function(V,G){return V.processingStart-G.processingStart}),E=fR(u.startTime,m),b=o.entries.find(function(V){return V.target}),w=b&&b.target||Uo.get(u.interactionId),O=[u.startTime+u.duration,m].concat(E.map(function(V){return V.startTime+V.duration})),k=Math.max.apply(Math,O),F={interactionTarget:Py(w),interactionTargetElement:w,interactionType:u.name.startsWith("key")?"keyboard":"pointer",interactionTime:u.startTime,nextPaintTime:k,processedEventEntries:y,longAnimationFrameEntries:E,inputDelay:d-u.startTime,processingDuration:m-d,presentationDelay:Math.max(k-m,0),loadState:iR(u.startTime)};return Object.assign(o,{attribution:F})}(t);n(s)},e)},ub=[2500,4e3],Om={},iL=function(n,e){(function(t,s){s=s||{},Uy(function(){var o,u=aR(),h=Rs("LCP"),d=function(E){s.reportAllChanges||(E=E.slice(-1)),E.forEach(function(b){b.startTime<u.firstHiddenTime&&(h.value=Math.max(b.startTime-ky(),0),h.entries=[b],o())})},m=tl("largest-contentful-paint",d);if(m){o=Is(t,h,ub,s.reportAllChanges);var y=Ly(function(){Om[h.id]||(d(m.takeRecords()),m.disconnect(),Om[h.id]=!0,o(!0))});["keydown","click"].forEach(function(E){addEventListener(E,function(){return zy(y)},{once:!0,capture:!0})}),ad(y),hc(function(E){h=Rs("LCP"),o=Is(t,h,ub,s.reportAllChanges),Vy(function(){h.value=performance.now()-E.timeStamp,Om[h.id]=!0,o(!0)})})}})})(function(t){var s=function(o){var u={timeToFirstByte:0,resourceLoadDelay:0,resourceLoadDuration:0,elementRenderDelay:o.value};if(o.entries.length){var h=sd();if(h){var d=h.activationStart||0,m=o.entries[o.entries.length-1],y=m.url&&performance.getEntriesByType("resource").filter(function(k){return k.name===m.url})[0],E=Math.max(0,h.responseStart-d),b=Math.max(E,y?(y.requestStart||y.startTime)-d:0),w=Math.max(b,y?y.responseEnd-d:0),O=Math.max(w,m.startTime-d);u={element:Py(m.element),timeToFirstByte:E,resourceLoadDelay:b-E,resourceLoadDuration:w-b,elementRenderDelay:O-w,navigationEntry:h,lcpEntry:m},m.url&&(u.url=m.url),y&&(u.lcpResourceEntry=y)}}return Object.assign(o,{attribution:u})}(t);n(s)},e)};const cb="@firebase/performance",Eg="0.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dR=Eg,sL="FB-PERF-TRACE-START",aL="FB-PERF-TRACE-STOP",Tg="FB-PERF-TRACE-MEASURE",pR="_wt_",mR="_fp",gR="_fcp",yR="_fid",_R="_lcp",oL="lcp_element",vR="_inp",lL="inp_interactionTarget",ER="_cls",uL="cls_largestShiftTarget",TR="@firebase/performance/config",bR="@firebase/performance/configexpire",cL="performance",wR="Performance";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hL={"trace started":"Trace {$traceName} was started before.","trace stopped":"Trace {$traceName} is not running.","nonpositive trace startTime":"Trace {$traceName} startTime should be positive.","nonpositive trace duration":"Trace {$traceName} duration should be positive.","no window":"Window is not available.","no app id":"App id is not available.","no project id":"Project id is not available.","no api key":"Api key is not available.","invalid cc log":"Attempted to queue invalid cc event","FB not default":"Performance can only start when Firebase app instance is the default one.","RC response not ok":"RC response is not ok","invalid attribute name":"Attribute name {$attributeName} is invalid.","invalid attribute value":"Attribute value {$attributeValue} is invalid.","invalid custom metric name":"Custom metric name {$customMetricName} is invalid","invalid String merger input":"Input for String merger is invalid, contact support team to resolve.","already initialized":"initializePerformance() has already been called with different options. To avoid this error, call initializePerformance() with the same options as when it was originally called, or call getPerformance() to return the already initialized instance."},Wt=new Ns(cL,wR,hL);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=new Zu(wR);wi.logLevel=Ie.INFO;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mm,AR;class Ot{constructor(e){if(this.window=e,!e)throw Wt.create("no window");this.performance=e.performance,this.PerformanceObserver=e.PerformanceObserver,this.windowLocation=e.location,this.navigator=e.navigator,this.document=e.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=e.localStorage),e.perfMetrics&&e.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=e.perfMetrics.onFirstInputDelay),this.onLCP=iL,this.onINP=rL,this.onCLS=Y4}getUrl(){return this.windowLocation.href.split("?")[0]}mark(e){!this.performance||!this.performance.mark||this.performance.mark(e)}measure(e,t,s){!this.performance||!this.performance.measure||this.performance.measure(e,t,s)}getEntriesByType(e){return!this.performance||!this.performance.getEntriesByType?[]:this.performance.getEntriesByType(e)}getEntriesByName(e){return!this.performance||!this.performance.getEntriesByName?[]:this.performance.getEntriesByName(e)}getTimeOrigin(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)}requiredApisAvailable(){return!fetch||!Promise||!Wb()?(wi.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled."),!1):Mg()?!0:(wi.info("IndexedDB is not supported by current browser"),!1)}setupObserver(e,t){if(!this.PerformanceObserver)return;new this.PerformanceObserver(o=>{for(const u of o.getEntries())t(u)}).observe({entryTypes:[e]})}static getInstance(){return Mm===void 0&&(Mm=new Ot(AR)),Mm}}function fL(n){AR=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let SR;function dL(n){const e=n.getId();return e.then(t=>{SR=t}),e}function jy(){return SR}function pL(n){const e=n.getToken();return e.then(t=>{}),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hb(n,e){const t=n.length-e.length;if(t<0||t>1)throw Wt.create("invalid String merger input");const s=[];for(let o=0;o<n.length;o++)s.push(n.charAt(o)),e.length>o&&s.push(e.charAt(o));return s.join("")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xm;class un{constructor(){this.instrumentationEnabled=!0,this.dataCollectionEnabled=!0,this.loggingEnabled=!1,this.tracesSamplingRate=1,this.networkRequestsSamplingRate=1,this.logEndPointUrl="https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",this.flTransportEndpointUrl=hb("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),this.transportKey=hb("AzSC8r6ReiGqFMyfvgow","Iayx0u-XT3vksVM-pIV"),this.logSource=462,this.logTraceAfterSampling=!1,this.logNetworkAfterSampling=!1,this.configTimeToLive=12,this.logMaxFlushSize=40}getFlTransportFullUrl(){return this.flTransportEndpointUrl.concat("?key=",this.transportKey)}static getInstance(){return xm===void 0&&(xm=new un),xm}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xu;(function(n){n[n.UNKNOWN=0]="UNKNOWN",n[n.VISIBLE=1]="VISIBLE",n[n.HIDDEN=2]="HIDDEN"})(xu||(xu={}));const mL=["firebase_","google_","ga_"],gL=new RegExp("^[a-zA-Z]\\w*$"),yL=40,bg=100;function _L(){const n=Ot.getInstance().navigator;return n?.serviceWorker?n.serviceWorker.controller?2:3:1}function vL(){switch(Ot.getInstance().document.visibilityState){case"visible":return xu.VISIBLE;case"hidden":return xu.HIDDEN;default:return xu.UNKNOWN}}function EL(){const e=Ot.getInstance().navigator.connection;switch(e&&e.effectiveType){case"slow-2g":return 1;case"2g":return 2;case"3g":return 3;case"4g":return 4;default:return 0}}function TL(n){return n.length===0||n.length>yL?!1:!mL.some(t=>n.startsWith(t))&&!!n.match(gL)}function bL(n){return n.length!==0&&n.length<=bg}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RR(n){const e=n.options?.appId;if(!e)throw Wt.create("no app id");return e}function wL(n){const e=n.options?.projectId;if(!e)throw Wt.create("no project id");return e}function AL(n){const e=n.options?.apiKey;if(!e)throw Wt.create("no api key");return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SL="0.0.1",Sn={loggingEnabled:!0},RL="FIREBASE_INSTALLATIONS_AUTH";function IL(n,e){const t=CL();return t?(fb(t),Promise.resolve()):OL(n,e).then(fb).then(s=>NL(s),()=>{})}function CL(){const n=Ot.getInstance().localStorage;if(!n)return;const e=n.getItem(bR);if(!e||!ML(e))return;const t=n.getItem(TR);if(t)try{return JSON.parse(t)}catch{return}}function NL(n){const e=Ot.getInstance().localStorage;!n||!e||(e.setItem(TR,JSON.stringify(n)),e.setItem(bR,String(Date.now()+un.getInstance().configTimeToLive*60*60*1e3)))}const DL="Could not fetch config, will use default configs";function OL(n,e){return pL(n.installations).then(t=>{const s=wL(n.app),o=AL(n.app),u=`https://firebaseremoteconfig.googleapis.com/v1/projects/${s}/namespaces/fireperf:fetch?key=${o}`,h=new Request(u,{method:"POST",headers:{Authorization:`${RL} ${t}`},body:JSON.stringify({app_instance_id:e,app_instance_id_token:t,app_id:RR(n.app),app_version:dR,sdk_version:SL})});return fetch(h).then(d=>{if(d.ok)return d.json();throw Wt.create("RC response not ok")})}).catch(()=>{wi.info(DL)})}function fb(n){if(!n)return n;const e=un.getInstance(),t=n.entries||{};return t.fpr_enabled!==void 0?e.loggingEnabled=String(t.fpr_enabled)==="true":e.loggingEnabled=Sn.loggingEnabled,t.fpr_log_source?e.logSource=Number(t.fpr_log_source):Sn.logSource&&(e.logSource=Sn.logSource),t.fpr_log_endpoint_url?e.logEndPointUrl=t.fpr_log_endpoint_url:Sn.logEndPointUrl&&(e.logEndPointUrl=Sn.logEndPointUrl),t.fpr_log_transport_key?e.transportKey=t.fpr_log_transport_key:Sn.transportKey&&(e.transportKey=Sn.transportKey),t.fpr_vc_network_request_sampling_rate!==void 0?e.networkRequestsSamplingRate=Number(t.fpr_vc_network_request_sampling_rate):Sn.networkRequestsSamplingRate!==void 0&&(e.networkRequestsSamplingRate=Sn.networkRequestsSamplingRate),t.fpr_vc_trace_sampling_rate!==void 0?e.tracesSamplingRate=Number(t.fpr_vc_trace_sampling_rate):Sn.tracesSamplingRate!==void 0&&(e.tracesSamplingRate=Sn.tracesSamplingRate),t.fpr_log_max_flush_size?e.logMaxFlushSize=Number(t.fpr_log_max_flush_size):Sn.logMaxFlushSize&&(e.logMaxFlushSize=Sn.logMaxFlushSize),e.logTraceAfterSampling=db(e.tracesSamplingRate),e.logNetworkAfterSampling=db(e.networkRequestsSamplingRate),n}function ML(n){return Number(n)>Date.now()}function db(n){return Math.random()<=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fy=1,Pm;function IR(n){return Fy=2,Pm=Pm||PL(n),Pm}function xL(){return Fy===3}function PL(n){return kL().then(()=>dL(n.installations)).then(e=>IL(n,e)).then(()=>pb(),()=>pb())}function kL(){const n=Ot.getInstance().document;return new Promise(e=>{if(n&&n.readyState!=="complete"){const t=()=>{n.readyState==="complete"&&(n.removeEventListener("readystatechange",t),e())};n.addEventListener("readystatechange",t)}else e()})}function pb(){Fy=3}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CR=10*1e3,VL=5.5*1e3,LL=1e3,NR=3,UL=65536,zL=new TextEncoder;let af=NR,qn=[],mb=!1;function BL(){mb||(qy(VL),mb=!0)}function qy(n){setTimeout(()=>{af<=0||(qn.length>0&&jL(),qy(CR))},n)}function jL(){const n=qn.splice(0,LL),e=wg(n);FL(e).then(()=>{af=NR}).catch(()=>{qn=[...n,...qn],af--,wi.info(`Tries left: ${af}.`),qy(CR)})}function wg(n){const e=n.map(s=>({source_extension_json_proto3:s.message,event_time_ms:String(s.eventTime)})),t={request_time_ms:String(Date.now()),client_info:{client_type:1,js_client_info:{}},log_source:un.getInstance().logSource,log_event:e};return JSON.stringify(t)}function FL(n){const e=un.getInstance().getFlTransportFullUrl();return zL.encode(n).length<=UL&&navigator.sendBeacon&&navigator.sendBeacon(e,n)?Promise.resolve():fetch(e,{method:"POST",body:n})}function qL(n){if(!n.eventTime||!n.message)throw Wt.create("invalid cc log");qn=[...qn,n]}function HL(n){return(...e)=>{const t=n(...e);qL({message:t,eventTime:Date.now()})}}function GL(){const n=un.getInstance().getFlTransportFullUrl();for(;qn.length>0;){const e=qn.splice(-un.getInstance().logMaxFlushSize),t=wg(e);if(!(navigator.sendBeacon&&navigator.sendBeacon(n,t))){qn=[...qn,...e];break}}if(qn.length>0){const e=wg(qn);fetch(n,{method:"POST",body:e}).catch(()=>{wi.info("Failed flushing queued events.")})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pu;function DR(n,e){Pu||(Pu={send:HL(QL),flush:GL}),Pu.send(n,e)}function $h(n){const e=un.getInstance();!e.instrumentationEnabled&&n.isAuto||!e.dataCollectionEnabled&&!n.isAuto||Ot.getInstance().requiredApisAvailable()&&(xL()?km(n):IR(n.performanceController).then(()=>km(n),()=>km(n)))}function $L(){Pu&&Pu.flush()}function km(n){if(!jy())return;const e=un.getInstance();!e.loggingEnabled||!e.logTraceAfterSampling||DR(n,1)}function KL(n){const e=un.getInstance();if(!e.instrumentationEnabled)return;const t=n.url,s=e.logEndPointUrl.split("?")[0],o=e.flTransportEndpointUrl.split("?")[0];t===s||t===o||!e.loggingEnabled||!e.logNetworkAfterSampling||DR(n,0)}function QL(n,e){return e===0?YL(n):XL(n)}function YL(n){const e={url:n.url,http_method:n.httpMethod||0,http_response_code:200,response_payload_bytes:n.responsePayloadBytes,client_start_time_us:n.startTimeUs,time_to_response_initiated_us:n.timeToResponseInitiatedUs,time_to_response_completed_us:n.timeToResponseCompletedUs},t={application_info:OR(n.performanceController.app),network_request_metric:e};return JSON.stringify(t)}function XL(n){const e={name:n.name,is_auto:n.isAuto,client_start_time_us:n.startTimeUs,duration_us:n.durationUs};Object.keys(n.counters).length!==0&&(e.counters=n.counters);const t=n.getAttributes();Object.keys(t).length!==0&&(e.custom_attributes=t);const s={application_info:OR(n.performanceController.app),trace_metric:e};return JSON.stringify(s)}function OR(n){return{google_app_id:RR(n),app_instance_id:jy(),web_app_info:{sdk_version:dR,page_url:Ot.getInstance().getUrl(),service_worker_status:_L(),visibility_state:vL(),effective_connection_type:EL()},application_process_state:0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gb(n,e){const t=e;if(!t||t.responseStart===void 0)return;const s=Ot.getInstance().getTimeOrigin(),o=Math.floor((t.startTime+s)*1e3),u=t.responseStart?Math.floor((t.responseStart-t.startTime)*1e3):void 0,h=Math.floor((t.responseEnd-t.startTime)*1e3),d=t.name&&t.name.split("?")[0],m={performanceController:n,url:d,responsePayloadBytes:t.transferSize,startTimeUs:o,timeToResponseInitiatedUs:u,timeToResponseCompletedUs:h};KL(m)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WL=100,ZL="_",JL=[mR,gR,yR,_R,ER,vR];function eU(n,e){return n.length===0||n.length>WL?!1:e&&e.startsWith(pR)&&JL.indexOf(n)>-1||!n.startsWith(ZL)}function tU(n){const e=Math.floor(n);return e<n&&wi.info(`Metric value should be an Integer, setting the value as : ${e}.`),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,t,s=!1,o){this.performanceController=e,this.name=t,this.isAuto=s,this.state=1,this.customAttributes={},this.counters={},this.api=Ot.getInstance(),this.randomId=Math.floor(Math.random()*1e6),this.isAuto||(this.traceStartMark=`${sL}-${this.randomId}-${this.name}`,this.traceStopMark=`${aL}-${this.randomId}-${this.name}`,this.traceMeasure=o||`${Tg}-${this.randomId}-${this.name}`,o&&this.calculateTraceMetrics())}start(){if(this.state!==1)throw Wt.create("trace started",{traceName:this.name});this.api.mark(this.traceStartMark),this.state=2}stop(){if(this.state!==2)throw Wt.create("trace stopped",{traceName:this.name});this.state=3,this.api.mark(this.traceStopMark),this.api.measure(this.traceMeasure,this.traceStartMark,this.traceStopMark),this.calculateTraceMetrics(),$h(this)}record(e,t,s){if(e<=0)throw Wt.create("nonpositive trace startTime",{traceName:this.name});if(t<=0)throw Wt.create("nonpositive trace duration",{traceName:this.name});if(this.durationUs=Math.floor(t*1e3),this.startTimeUs=Math.floor(e*1e3),s&&s.attributes&&(this.customAttributes={...s.attributes}),s&&s.metrics)for(const o of Object.keys(s.metrics))isNaN(Number(s.metrics[o]))||(this.counters[o]=Math.floor(Number(s.metrics[o])));$h(this)}incrementMetric(e,t=1){this.counters[e]===void 0?this.putMetric(e,t):this.putMetric(e,this.counters[e]+t)}putMetric(e,t){if(eU(e,this.name))this.counters[e]=tU(t??0);else throw Wt.create("invalid custom metric name",{customMetricName:e})}getMetric(e){return this.counters[e]||0}putAttribute(e,t){const s=TL(e),o=bL(t);if(s&&o){this.customAttributes[e]=t;return}if(!s)throw Wt.create("invalid attribute name",{attributeName:e});if(!o)throw Wt.create("invalid attribute value",{attributeValue:t})}getAttribute(e){return this.customAttributes[e]}removeAttribute(e){this.customAttributes[e]!==void 0&&delete this.customAttributes[e]}getAttributes(){return{...this.customAttributes}}setStartTime(e){this.startTimeUs=e}setDuration(e){this.durationUs=e}calculateTraceMetrics(){const e=this.api.getEntriesByName(this.traceMeasure),t=e&&e[0];t&&(this.durationUs=Math.floor(t.duration*1e3),this.startTimeUs=Math.floor((t.startTime+this.api.getTimeOrigin())*1e3))}static createOobTrace(e,t,s,o,u){const h=Ot.getInstance().getUrl();if(!h)return;const d=new $u(e,pR+h,!0),m=Math.floor(Ot.getInstance().getTimeOrigin()*1e3);d.setStartTime(m),t&&t[0]&&(d.setDuration(Math.floor(t[0].duration*1e3)),d.putMetric("domInteractive",Math.floor(t[0].domInteractive*1e3)),d.putMetric("domContentLoadedEventEnd",Math.floor(t[0].domContentLoadedEventEnd*1e3)),d.putMetric("loadEventEnd",Math.floor(t[0].loadEventEnd*1e3)));const y="first-paint",E="first-contentful-paint";if(s){const b=s.find(O=>O.name===y);b&&b.startTime&&d.putMetric(mR,Math.floor(b.startTime*1e3));const w=s.find(O=>O.name===E);w&&w.startTime&&d.putMetric(gR,Math.floor(w.startTime*1e3)),u&&d.putMetric(yR,Math.floor(u*1e3))}this.addWebVitalMetric(d,_R,oL,o.lcp),this.addWebVitalMetric(d,ER,uL,o.cls),this.addWebVitalMetric(d,vR,lL,o.inp),$h(d),$L()}static addWebVitalMetric(e,t,s,o){o&&(e.putMetric(t,Math.floor(o.value*1e3)),o.elementAttribution&&(o.elementAttribution.length>bg?e.putAttribute(s,o.elementAttribution.substring(0,bg)):e.putAttribute(s,o.elementAttribution)))}static createUserTimingTrace(e,t){const s=new $u(e,t,!1,t);$h(s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let of={},yb=!1,MR;function _b(n){jy()&&(setTimeout(()=>rU(n),0),setTimeout(()=>nU(n),0),setTimeout(()=>iU(n),0))}function nU(n){const e=Ot.getInstance(),t=e.getEntriesByType("resource");for(const s of t)gb(n,s);e.setupObserver("resource",s=>gb(n,s))}function rU(n){const e=Ot.getInstance();"onpagehide"in window?e.document.addEventListener("pagehide",()=>Vm(n)):e.document.addEventListener("unload",()=>Vm(n)),e.document.addEventListener("visibilitychange",()=>{e.document.visibilityState==="hidden"&&Vm(n)}),e.onFirstInputDelay&&e.onFirstInputDelay(t=>{MR=t}),e.onLCP(t=>{of.lcp={value:t.value,elementAttribution:t.attribution?.element}}),e.onCLS(t=>{of.cls={value:t.value,elementAttribution:t.attribution?.largestShiftTarget}}),e.onINP(t=>{of.inp={value:t.value,elementAttribution:t.attribution?.interactionTarget}})}function iU(n){const e=Ot.getInstance(),t=e.getEntriesByType("measure");for(const s of t)vb(n,s);e.setupObserver("measure",s=>vb(n,s))}function vb(n,e){const t=e.name;t.substring(0,Tg.length)!==Tg&&$u.createUserTimingTrace(n,t)}function Vm(n){if(!yb){yb=!0;const e=Ot.getInstance(),t=e.getEntriesByType("navigation"),s=e.getEntriesByType("paint");setTimeout(()=>{$u.createOobTrace(n,t,s,of,MR)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sU{constructor(e,t){this.app=e,this.installations=t,this.initialized=!1}_init(e){this.initialized||(e?.dataCollectionEnabled!==void 0&&(this.dataCollectionEnabled=e.dataCollectionEnabled),e?.instrumentationEnabled!==void 0&&(this.instrumentationEnabled=e.instrumentationEnabled),Ot.getInstance().requiredApisAvailable()?xg().then(t=>{t&&(BL(),IR(this).then(()=>_b(this),()=>_b(this)),this.initialized=!0)}).catch(t=>{wi.info(`Environment doesn't support IndexedDB: ${t}`)}):wi.info('Firebase Performance cannot start if the browser does not support "Fetch" and "Promise", or cookies are disabled.'))}set instrumentationEnabled(e){un.getInstance().instrumentationEnabled=e}get instrumentationEnabled(){return un.getInstance().instrumentationEnabled}set dataCollectionEnabled(e){un.getInstance().dataCollectionEnabled=e}get dataCollectionEnabled(){return un.getInstance().dataCollectionEnabled}}const aU="[DEFAULT]";function oU(n=Ju()){return n=We(n),Ai(n,"performance").getImmediate()}const lU=(n,{options:e})=>{const t=n.getProvider("app").getImmediate(),s=n.getProvider("installations-internal").getImmediate();if(t.name!==aU)throw Wt.create("FB not default");if(typeof window>"u")throw Wt.create("no window");fL(window);const o=new sU(t,s);return o._init(e),o};function uU(){Kn(new Nn("performance",lU,"PUBLIC")),Jt(cb,Eg),Jt(cb,Eg,"esm2020")}uU();function cU(){const n=[];if(n.push("VITE_FIREBASE_API_KEY"),n.push("VITE_FIREBASE_AUTH_DOMAIN"),n.push("VITE_FIREBASE_PROJECT_ID"),n.push("VITE_FIREBASE_STORAGE_BUCKET"),n.push("VITE_FIREBASE_MESSAGING_SENDER_ID"),n.push("VITE_FIREBASE_APP_ID"),n.length>0)throw new Error(`Missing Firebase environment variables: ${n.join(", ")}. Create a .env.local with VITE_ variables as documented in README.`)}cU();const hU={apiKey:"",authDomain:"",projectId:"",storageBucket:"",messagingSenderId:"",appId:"",measurementId:""},Ku=tw(hU),ma=nM(Ku),M6=nk(Ku),x6=bV(Ku);let fU=null,dU=null;if(typeof window<"u")try{fU=j4(Ku),dU=oU(Ku),console.log("📊 Firebase Analytics & Performance 초기화됨")}catch(n){console.warn("⚠️ Analytics/Performance 초기화 실패:",n)}const xR=j.createContext(void 0);function pU(){const n=j.useContext(xR);if(n===void 0)throw new Error("useAuth must be used within an AuthProvider");return n}function mU({children:n}){const[e,t]=j.useState(null),[s,o]=j.useState(!0),[u,h]=j.useState(null);j.useEffect(()=>H2(ma,F=>{t(F),o(!1)}),[]);const O={user:e,loading:s,error:u,signInAnonymously:async()=>{try{h(null),o(!0),await x2(ma)}catch(k){h(k instanceof Error?k.message:"익명 로그인에 실패했습니다.")}finally{o(!1)}},signInWithEmailAndPassword:async(k,F)=>{try{h(null),o(!0),await z2(ma,k,F)}catch(V){throw h(V instanceof Error?V.message:"이메일 로그인에 실패했습니다."),V}finally{o(!1)}},signUpWithEmailAndPassword:async(k,F,V)=>{try{h(null),o(!0);const G=await U2(ma,k,F);return V&&G.user&&await j2(G.user,{displayName:V}),G}catch(G){throw h(G instanceof Error?G.message:"회원가입에 실패했습니다."),G}finally{o(!1)}},signInWithGoogle:async()=>{try{h(null),o(!0);const k=new di;await hO(ma,k)}catch(k){throw h(k instanceof Error?k.message:"Google 로그인에 실패했습니다."),k}finally{o(!1)}},resetPassword:async k=>{try{h(null),await L2(ma,k)}catch(F){throw h(F instanceof Error?F.message:"비밀번호 재설정에 실패했습니다."),F}},signOut:async()=>{try{return h(null),await G2(ma),{success:!0}}catch(k){const F=k instanceof Error?k.message:"로그아웃에 실패했습니다.";return h(F),{success:!1,error:F}}}};return te.jsx(xR.Provider,{value:O,children:n})}j.createContext(void 0);function PR(n){var e,t,s="";if(typeof n=="string"||typeof n=="number")s+=n;else if(typeof n=="object")if(Array.isArray(n)){var o=n.length;for(e=0;e<o;e++)n[e]&&(t=PR(n[e]))&&(s&&(s+=" "),s+=t)}else for(t in n)n[t]&&(s&&(s+=" "),s+=t);return s}function gU(){for(var n,e,t=0,s="",o=arguments.length;t<o;t++)(n=arguments[t])&&(e=PR(n))&&(s&&(s+=" "),s+=e);return s}const Hy="-",yU=n=>{const e=vU(n),{conflictingClassGroups:t,conflictingClassGroupModifiers:s}=n;return{getClassGroupId:h=>{const d=h.split(Hy);return d[0]===""&&d.length!==1&&d.shift(),kR(d,e)||_U(h)},getConflictingClassGroupIds:(h,d)=>{const m=t[h]||[];return d&&s[h]?[...m,...s[h]]:m}}},kR=(n,e)=>{if(n.length===0)return e.classGroupId;const t=n[0],s=e.nextPart.get(t),o=s?kR(n.slice(1),s):void 0;if(o)return o;if(e.validators.length===0)return;const u=n.join(Hy);return e.validators.find(({validator:h})=>h(u))?.classGroupId},Eb=/^\[(.+)\]$/,_U=n=>{if(Eb.test(n)){const e=Eb.exec(n)[1],t=e?.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}},vU=n=>{const{theme:e,prefix:t}=n,s={nextPart:new Map,validators:[]};return TU(Object.entries(n.classGroups),t).forEach(([u,h])=>{Ag(h,s,u,e)}),s},Ag=(n,e,t,s)=>{n.forEach(o=>{if(typeof o=="string"){const u=o===""?e:Tb(e,o);u.classGroupId=t;return}if(typeof o=="function"){if(EU(o)){Ag(o(s),e,t,s);return}e.validators.push({validator:o,classGroupId:t});return}Object.entries(o).forEach(([u,h])=>{Ag(h,Tb(e,u),t,s)})})},Tb=(n,e)=>{let t=n;return e.split(Hy).forEach(s=>{t.nextPart.has(s)||t.nextPart.set(s,{nextPart:new Map,validators:[]}),t=t.nextPart.get(s)}),t},EU=n=>n.isThemeGetter,TU=(n,e)=>e?n.map(([t,s])=>{const o=s.map(u=>typeof u=="string"?e+u:typeof u=="object"?Object.fromEntries(Object.entries(u).map(([h,d])=>[e+h,d])):u);return[t,o]}):n,bU=n=>{if(n<1)return{get:()=>{},set:()=>{}};let e=0,t=new Map,s=new Map;const o=(u,h)=>{t.set(u,h),e++,e>n&&(e=0,s=t,t=new Map)};return{get(u){let h=t.get(u);if(h!==void 0)return h;if((h=s.get(u))!==void 0)return o(u,h),h},set(u,h){t.has(u)?t.set(u,h):o(u,h)}}},VR="!",wU=n=>{const{separator:e,experimentalParseClassName:t}=n,s=e.length===1,o=e[0],u=e.length,h=d=>{const m=[];let y=0,E=0,b;for(let V=0;V<d.length;V++){let G=d[V];if(y===0){if(G===o&&(s||d.slice(V,V+u)===e)){m.push(d.slice(E,V)),E=V+u;continue}if(G==="/"){b=V;continue}}G==="["?y++:G==="]"&&y--}const w=m.length===0?d:d.substring(E),O=w.startsWith(VR),k=O?w.substring(1):w,F=b&&b>E?b-E:void 0;return{modifiers:m,hasImportantModifier:O,baseClassName:k,maybePostfixModifierPosition:F}};return t?d=>t({className:d,parseClassName:h}):h},AU=n=>{if(n.length<=1)return n;const e=[];let t=[];return n.forEach(s=>{s[0]==="["?(e.push(...t.sort(),s),t=[]):t.push(s)}),e.push(...t.sort()),e},SU=n=>({cache:bU(n.cacheSize),parseClassName:wU(n),...yU(n)}),RU=/\s+/,IU=(n,e)=>{const{parseClassName:t,getClassGroupId:s,getConflictingClassGroupIds:o}=e,u=[],h=n.trim().split(RU);let d="";for(let m=h.length-1;m>=0;m-=1){const y=h[m],{modifiers:E,hasImportantModifier:b,baseClassName:w,maybePostfixModifierPosition:O}=t(y);let k=!!O,F=s(k?w.substring(0,O):w);if(!F){if(!k){d=y+(d.length>0?" "+d:d);continue}if(F=s(w),!F){d=y+(d.length>0?" "+d:d);continue}k=!1}const V=AU(E).join(":"),G=b?V+VR:V,Z=G+F;if(u.includes(Z))continue;u.push(Z);const K=o(F,k);for(let ie=0;ie<K.length;++ie){const se=K[ie];u.push(G+se)}d=y+(d.length>0?" "+d:d)}return d};function CU(){let n=0,e,t,s="";for(;n<arguments.length;)(e=arguments[n++])&&(t=LR(e))&&(s&&(s+=" "),s+=t);return s}const LR=n=>{if(typeof n=="string")return n;let e,t="";for(let s=0;s<n.length;s++)n[s]&&(e=LR(n[s]))&&(t&&(t+=" "),t+=e);return t};function NU(n,...e){let t,s,o,u=h;function h(m){const y=e.reduce((E,b)=>b(E),n());return t=SU(y),s=t.cache.get,o=t.cache.set,u=d,d(m)}function d(m){const y=s(m);if(y)return y;const E=IU(m,t);return o(m,E),E}return function(){return u(CU.apply(null,arguments))}}const et=n=>{const e=t=>t[n]||[];return e.isThemeGetter=!0,e},UR=/^\[(?:([a-z-]+):)?(.+)\]$/i,DU=/^\d+\/\d+$/,OU=new Set(["px","full","screen"]),MU=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,xU=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,PU=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,kU=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,VU=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,fi=n=>zo(n)||OU.has(n)||DU.test(n),rs=n=>nl(n,"length",HU),zo=n=>!!n&&!Number.isNaN(Number(n)),Lm=n=>nl(n,"number",zo),mu=n=>!!n&&Number.isInteger(Number(n)),LU=n=>n.endsWith("%")&&zo(n.slice(0,-1)),be=n=>UR.test(n),is=n=>MU.test(n),UU=new Set(["length","size","percentage"]),zU=n=>nl(n,UU,zR),BU=n=>nl(n,"position",zR),jU=new Set(["image","url"]),FU=n=>nl(n,jU,$U),qU=n=>nl(n,"",GU),gu=()=>!0,nl=(n,e,t)=>{const s=UR.exec(n);return s?s[1]?typeof e=="string"?s[1]===e:e.has(s[1]):t(s[2]):!1},HU=n=>xU.test(n)&&!PU.test(n),zR=()=>!1,GU=n=>kU.test(n),$U=n=>VU.test(n),KU=()=>{const n=et("colors"),e=et("spacing"),t=et("blur"),s=et("brightness"),o=et("borderColor"),u=et("borderRadius"),h=et("borderSpacing"),d=et("borderWidth"),m=et("contrast"),y=et("grayscale"),E=et("hueRotate"),b=et("invert"),w=et("gap"),O=et("gradientColorStops"),k=et("gradientColorStopPositions"),F=et("inset"),V=et("margin"),G=et("opacity"),Z=et("padding"),K=et("saturate"),ie=et("scale"),se=et("sepia"),he=et("skew"),x=et("space"),S=et("translate"),R=()=>["auto","contain","none"],N=()=>["auto","hidden","clip","visible","scroll"],D=()=>["auto",be,e],M=()=>[be,e],C=()=>["",fi,rs],ue=()=>["auto",zo,be],Qe=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],Q=()=>["solid","dashed","dotted","double","none"],re=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],fe=()=>["start","end","center","between","around","evenly","stretch"],De=()=>["","0",be],Le=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Ye=()=>[zo,be];return{cacheSize:500,separator:":",theme:{colors:[gu],spacing:[fi,rs],blur:["none","",is,be],brightness:Ye(),borderColor:[n],borderRadius:["none","","full",is,be],borderSpacing:M(),borderWidth:C(),contrast:Ye(),grayscale:De(),hueRotate:Ye(),invert:De(),gap:M(),gradientColorStops:[n],gradientColorStopPositions:[LU,rs],inset:D(),margin:D(),opacity:Ye(),padding:M(),saturate:Ye(),scale:Ye(),sepia:De(),skew:Ye(),space:M(),translate:M()},classGroups:{aspect:[{aspect:["auto","square","video",be]}],container:["container"],columns:[{columns:[is]}],"break-after":[{"break-after":Le()}],"break-before":[{"break-before":Le()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Qe(),be]}],overflow:[{overflow:N()}],"overflow-x":[{"overflow-x":N()}],"overflow-y":[{"overflow-y":N()}],overscroll:[{overscroll:R()}],"overscroll-x":[{"overscroll-x":R()}],"overscroll-y":[{"overscroll-y":R()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[F]}],"inset-x":[{"inset-x":[F]}],"inset-y":[{"inset-y":[F]}],start:[{start:[F]}],end:[{end:[F]}],top:[{top:[F]}],right:[{right:[F]}],bottom:[{bottom:[F]}],left:[{left:[F]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",mu,be]}],basis:[{basis:D()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",be]}],grow:[{grow:De()}],shrink:[{shrink:De()}],order:[{order:["first","last","none",mu,be]}],"grid-cols":[{"grid-cols":[gu]}],"col-start-end":[{col:["auto",{span:["full",mu,be]},be]}],"col-start":[{"col-start":ue()}],"col-end":[{"col-end":ue()}],"grid-rows":[{"grid-rows":[gu]}],"row-start-end":[{row:["auto",{span:[mu,be]},be]}],"row-start":[{"row-start":ue()}],"row-end":[{"row-end":ue()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",be]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",be]}],gap:[{gap:[w]}],"gap-x":[{"gap-x":[w]}],"gap-y":[{"gap-y":[w]}],"justify-content":[{justify:["normal",...fe()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...fe(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...fe(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[Z]}],px:[{px:[Z]}],py:[{py:[Z]}],ps:[{ps:[Z]}],pe:[{pe:[Z]}],pt:[{pt:[Z]}],pr:[{pr:[Z]}],pb:[{pb:[Z]}],pl:[{pl:[Z]}],m:[{m:[V]}],mx:[{mx:[V]}],my:[{my:[V]}],ms:[{ms:[V]}],me:[{me:[V]}],mt:[{mt:[V]}],mr:[{mr:[V]}],mb:[{mb:[V]}],ml:[{ml:[V]}],"space-x":[{"space-x":[x]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[x]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",be,e]}],"min-w":[{"min-w":[be,e,"min","max","fit"]}],"max-w":[{"max-w":[be,e,"none","full","min","max","fit","prose",{screen:[is]},is]}],h:[{h:[be,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[be,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[be,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[be,e,"auto","min","max","fit"]}],"font-size":[{text:["base",is,rs]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Lm]}],"font-family":[{font:[gu]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",be]}],"line-clamp":[{"line-clamp":["none",zo,Lm]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",fi,be]}],"list-image":[{"list-image":["none",be]}],"list-style-type":[{list:["none","disc","decimal",be]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[n]}],"placeholder-opacity":[{"placeholder-opacity":[G]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[n]}],"text-opacity":[{"text-opacity":[G]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Q(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",fi,rs]}],"underline-offset":[{"underline-offset":["auto",fi,be]}],"text-decoration-color":[{decoration:[n]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:M()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",be]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",be]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[G]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Qe(),BU]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",zU]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},FU]}],"bg-color":[{bg:[n]}],"gradient-from-pos":[{from:[k]}],"gradient-via-pos":[{via:[k]}],"gradient-to-pos":[{to:[k]}],"gradient-from":[{from:[O]}],"gradient-via":[{via:[O]}],"gradient-to":[{to:[O]}],rounded:[{rounded:[u]}],"rounded-s":[{"rounded-s":[u]}],"rounded-e":[{"rounded-e":[u]}],"rounded-t":[{"rounded-t":[u]}],"rounded-r":[{"rounded-r":[u]}],"rounded-b":[{"rounded-b":[u]}],"rounded-l":[{"rounded-l":[u]}],"rounded-ss":[{"rounded-ss":[u]}],"rounded-se":[{"rounded-se":[u]}],"rounded-ee":[{"rounded-ee":[u]}],"rounded-es":[{"rounded-es":[u]}],"rounded-tl":[{"rounded-tl":[u]}],"rounded-tr":[{"rounded-tr":[u]}],"rounded-br":[{"rounded-br":[u]}],"rounded-bl":[{"rounded-bl":[u]}],"border-w":[{border:[d]}],"border-w-x":[{"border-x":[d]}],"border-w-y":[{"border-y":[d]}],"border-w-s":[{"border-s":[d]}],"border-w-e":[{"border-e":[d]}],"border-w-t":[{"border-t":[d]}],"border-w-r":[{"border-r":[d]}],"border-w-b":[{"border-b":[d]}],"border-w-l":[{"border-l":[d]}],"border-opacity":[{"border-opacity":[G]}],"border-style":[{border:[...Q(),"hidden"]}],"divide-x":[{"divide-x":[d]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[d]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[G]}],"divide-style":[{divide:Q()}],"border-color":[{border:[o]}],"border-color-x":[{"border-x":[o]}],"border-color-y":[{"border-y":[o]}],"border-color-s":[{"border-s":[o]}],"border-color-e":[{"border-e":[o]}],"border-color-t":[{"border-t":[o]}],"border-color-r":[{"border-r":[o]}],"border-color-b":[{"border-b":[o]}],"border-color-l":[{"border-l":[o]}],"divide-color":[{divide:[o]}],"outline-style":[{outline:["",...Q()]}],"outline-offset":[{"outline-offset":[fi,be]}],"outline-w":[{outline:[fi,rs]}],"outline-color":[{outline:[n]}],"ring-w":[{ring:C()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[n]}],"ring-opacity":[{"ring-opacity":[G]}],"ring-offset-w":[{"ring-offset":[fi,rs]}],"ring-offset-color":[{"ring-offset":[n]}],shadow:[{shadow:["","inner","none",is,qU]}],"shadow-color":[{shadow:[gu]}],opacity:[{opacity:[G]}],"mix-blend":[{"mix-blend":[...re(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":re()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[s]}],contrast:[{contrast:[m]}],"drop-shadow":[{"drop-shadow":["","none",is,be]}],grayscale:[{grayscale:[y]}],"hue-rotate":[{"hue-rotate":[E]}],invert:[{invert:[b]}],saturate:[{saturate:[K]}],sepia:[{sepia:[se]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[s]}],"backdrop-contrast":[{"backdrop-contrast":[m]}],"backdrop-grayscale":[{"backdrop-grayscale":[y]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[E]}],"backdrop-invert":[{"backdrop-invert":[b]}],"backdrop-opacity":[{"backdrop-opacity":[G]}],"backdrop-saturate":[{"backdrop-saturate":[K]}],"backdrop-sepia":[{"backdrop-sepia":[se]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[h]}],"border-spacing-x":[{"border-spacing-x":[h]}],"border-spacing-y":[{"border-spacing-y":[h]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",be]}],duration:[{duration:Ye()}],ease:[{ease:["linear","in","out","in-out",be]}],delay:[{delay:Ye()}],animate:[{animate:["none","spin","ping","pulse","bounce",be]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[ie]}],"scale-x":[{"scale-x":[ie]}],"scale-y":[{"scale-y":[ie]}],rotate:[{rotate:[mu,be]}],"translate-x":[{"translate-x":[S]}],"translate-y":[{"translate-y":[S]}],"skew-x":[{"skew-x":[he]}],"skew-y":[{"skew-y":[he]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",be]}],accent:[{accent:["auto",n]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",be]}],"caret-color":[{caret:[n]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":M()}],"scroll-mx":[{"scroll-mx":M()}],"scroll-my":[{"scroll-my":M()}],"scroll-ms":[{"scroll-ms":M()}],"scroll-me":[{"scroll-me":M()}],"scroll-mt":[{"scroll-mt":M()}],"scroll-mr":[{"scroll-mr":M()}],"scroll-mb":[{"scroll-mb":M()}],"scroll-ml":[{"scroll-ml":M()}],"scroll-p":[{"scroll-p":M()}],"scroll-px":[{"scroll-px":M()}],"scroll-py":[{"scroll-py":M()}],"scroll-ps":[{"scroll-ps":M()}],"scroll-pe":[{"scroll-pe":M()}],"scroll-pt":[{"scroll-pt":M()}],"scroll-pr":[{"scroll-pr":M()}],"scroll-pb":[{"scroll-pb":M()}],"scroll-pl":[{"scroll-pl":M()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",be]}],fill:[{fill:[n,"none"]}],"stroke-w":[{stroke:[fi,rs,Lm]}],stroke:[{stroke:[n,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},QU=NU(KU);function ys(...n){return QU(gU(n))}const Um={low:{stars:50,meteors:2,fps:30},medium:{stars:100,meteors:3,fps:60},high:{stars:200,meteors:5,fps:60}};function YU({className:n,quality:e="medium",reduceMotion:t=!1,seed:s=12345,children:o}){const u=j.useRef(null),h=j.useRef(null),d=j.useRef([]),m=j.useRef([]),y=j.useRef(!0),E=j.useRef(0),b=j.useRef({width:0,height:0}),w=j.useRef(!1),O=j.useMemo(()=>{let Z=Number(s)||12345;return()=>{const K=Math.sin(Z++)*1e4;return K-Math.floor(K)}},[s]),k=j.useMemo(()=>{const{stars:Z}=Um[e],K=[];for(let ie=0;ie<Z;ie++){const se=.3+O()*.7;K.push({x:O()*2e3,y:O()*1200,size:1+O()*2,opacity:se,initialOpacity:se,twinkleSpeed:.5+O()*2})}return K},[e,O]),F=j.useMemo(()=>{const{meteors:Z}=Um[e],K=[];for(let ie=0;ie<Z;ie++)K.push({x:-100,y:-100,length:50+O()*100,speed:2+O()*4,opacity:0,angle:45+O()*20,active:!1});return K},[e,O]);j.useEffect(()=>{if(!w.current)try{d.current=k,m.current=F,w.current=!0}catch(Z){console.warn("Failed to initialize WaveBackground:",Z)}},[k,F]),j.useEffect(()=>{const Z=u.current;if(Z)try{const K=new IntersectionObserver(([ie])=>{y.current=ie.isIntersecting},{threshold:.1});return K.observe(Z),()=>K.disconnect()}catch(K){console.warn("Failed to setup intersection observer:",K)}},[]);const[V,G]=Ab.useState(!1);return j.useEffect(()=>{try{const Z=window.matchMedia("(prefers-reduced-motion: reduce)").matches;G(!t&&!Z)}catch(Z){console.warn("Failed to check motion preferences:",Z),G(!t)}},[t]),j.useEffect(()=>{const Z=u.current;if(!Z||!V||!w.current)return;const K=Z.getContext("2d");if(!K)return;const{fps:ie}=Um[e],se=1e3/ie,he=()=>{try{const N=Z.getBoundingClientRect(),D=window.devicePixelRatio||1;Z.width=Math.floor(N.width*D),Z.height=Math.floor(N.height*D),b.current={width:Math.floor(N.width),height:Math.floor(N.height)},K.scale(D,D),Z.style.width=`${N.width}px`,Z.style.height=`${N.height}px`}catch(N){console.warn("Failed to resize canvas:",N)}},x=N=>{try{const D=d.current,{width:M,height:C}=b.current;if(!D||!M||!C)return;D.forEach(ue=>{if(ue.x>M||ue.y>C)return;const Qe=Math.sin(N*.001*ue.twinkleSpeed)*.3;ue.opacity=Math.max(.1,ue.initialOpacity+Qe),K.save(),K.globalAlpha=ue.opacity,K.fillStyle="#ffffff",K.beginPath(),K.arc(ue.x,ue.y,ue.size,0,Math.PI*2),K.fill(),K.restore()})}catch(D){console.warn("Failed to draw stars:",D)}},S=N=>{try{const D=m.current,{width:M,height:C}=b.current;if(!D||!M||!C)return;D.forEach(ue=>{if(!ue.active&&O()<.001&&(ue.x=-ue.length,ue.y=O()*C*.5,ue.opacity=.8+O()*.2,ue.active=!0),ue.active){const Qe=ue.angle*Math.PI/180;ue.x+=Math.cos(Qe)*ue.speed*(N/16),ue.y+=Math.sin(Qe)*ue.speed*(N/16),K.save(),K.globalAlpha=ue.opacity;const Q=K.createLinearGradient(ue.x,ue.y,ue.x-Math.cos(Qe)*ue.length,ue.y-Math.sin(Qe)*ue.length);Q.addColorStop(0,"#ffffff"),Q.addColorStop(.5,"#93c5fd"),Q.addColorStop(1,"transparent"),K.strokeStyle=Q,K.lineWidth=2,K.beginPath(),K.moveTo(ue.x,ue.y),K.lineTo(ue.x-Math.cos(Qe)*ue.length,ue.y-Math.sin(Qe)*ue.length),K.stroke(),K.restore(),(ue.x>M+ue.length||ue.y>C+ue.length)&&(ue.active=!1,ue.opacity=0)}})}catch(D){console.warn("Failed to draw meteors:",D)}},R=N=>{if(!y.current){h.current=requestAnimationFrame(R);return}const D=N-E.current;if(D>=se)try{K.clearRect(0,0,Z.width,Z.height),x(N),S(D),E.current=N}catch(M){console.warn("Animation frame error:",M)}h.current=requestAnimationFrame(R)};try{return he(),window.addEventListener("resize",he),h.current=requestAnimationFrame(R),()=>{window.removeEventListener("resize",he),h.current&&cancelAnimationFrame(h.current)}}catch(N){console.warn("Failed to setup animation:",N)}},[V,e,O]),te.jsxs("div",{className:ys("relative overflow-hidden",n),children:[te.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"}),te.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"}),te.jsx("canvas",{ref:u,className:"pointer-events-none absolute inset-0 h-full w-full",style:{mixBlendMode:"screen"}}),te.jsxs("svg",{className:"absolute inset-0 h-full w-full opacity-20",viewBox:"0 0 1200 800",preserveAspectRatio:"xMidYMid slice",children:[te.jsxs("defs",{children:[te.jsxs("linearGradient",{id:"waveGradient1",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[te.jsx("stop",{offset:"0%",stopColor:"#3b82f6",stopOpacity:"0.3"}),te.jsx("stop",{offset:"100%",stopColor:"#1d4ed8",stopOpacity:"0.1"})]}),te.jsxs("linearGradient",{id:"waveGradient2",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[te.jsx("stop",{offset:"0%",stopColor:"#6366f1",stopOpacity:"0.2"}),te.jsx("stop",{offset:"100%",stopColor:"#4f46e5",stopOpacity:"0.05"})]})]}),te.jsx("path",{d:"M0,400 C300,300 600,500 900,400 C1050,350 1150,450 1200,400 L1200,800 L0,800 Z",fill:"url(#waveGradient1)",className:ys(V&&"animate-wave wave-accelerated","transition-transform duration-1000"),style:{transformOrigin:"center"}}),te.jsx("path",{d:"M0,500 C200,400 400,600 600,500 C800,400 1000,600 1200,500 L1200,800 L0,800 Z",fill:"url(#waveGradient2)",className:ys(V&&"animate-wave-reverse wave-accelerated","transition-transform duration-1000"),style:{transformOrigin:"center"}})]}),te.jsx("div",{className:"pointer-events-none absolute inset-0 opacity-5 mix-blend-overlay",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='27' cy='27' r='1'/%3E%3Ccircle cx='47' cy='47' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}),te.jsx("div",{className:"relative z-10",children:o})]})}const cs=({children:n,onClick:e,variant:t="primary",size:s="md",className:o,ariaLabel:u,disabled:h=!1,...d})=>{const[m,y]=j.useState(!1),E=()=>{h||(y(!0),setTimeout(()=>y(!1),600),e?.())},b={primary:"bg-primary-500/20 backdrop-blur-xl border border-primary-300/30 text-white hover:bg-primary-400/30",secondary:"bg-glass-medium backdrop-blur-md border border-white/20 text-white/90 hover:bg-glass-strong",ghost:"bg-glass-light backdrop-blur-sm border border-white/10 text-white/80 hover:bg-glass-medium",travel:"bg-gradient-to-r from-travel-blue/20 to-travel-purple/20 backdrop-blur-lg border border-travel-blue/30 text-white hover:from-travel-blue/30 hover:to-travel-purple/30"},w={sm:"px-4 py-2 text-sm",md:"px-6 py-3 text-base",lg:"px-8 py-4 text-lg"};return te.jsxs("button",{onClick:E,"aria-label":u,disabled:h,className:ys("relative overflow-hidden rounded-xl font-semibold transition-all duration-300","active:scale-95 transform focus:outline-none focus:ring-2 focus:ring-white/50","touch-manipulation transform-gpu will-change-transform","flex items-center justify-center",b[t],w[s],h&&"opacity-50 cursor-not-allowed",o),...d,children:[te.jsx("div",{className:ys("absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent","wave-animation",h&&"hidden")}),m&&te.jsx("div",{className:"absolute inset-0 bg-white/20 wave-ripple rounded-xl"}),te.jsx("span",{className:"relative z-10 break-keep-ko flex items-center justify-center w-full h-full",children:n})]})},XU=({children:n,className:e,variant:t="default",withWaveEffect:s=!1,hoverable:o=!0,onClick:u,onKeyDown:h,...d})=>{const m={default:"bg-glass-light backdrop-blur-md border border-white/20",strong:"bg-glass-strong backdrop-blur-xl border border-white/30",light:"bg-glass-light backdrop-blur-sm border border-white/10",travel:"bg-gradient-to-br from-primary-500/10 via-glass-medium to-travel-blue/10 backdrop-blur-lg border border-primary-300/20"},y=E=>{u&&(E.key==="Enter"||E.key===" ")&&(E.preventDefault(),u(E)),h?.(E)};return te.jsxs("div",{className:ys(m[t],"rounded-2xl p-6 shadow-lg",o&&"transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:translate-y-[-2px] hover:shadow-xl",s&&"relative overflow-hidden","transform-gpu will-change-transform",e),onClick:u,onKeyDown:y,role:u?"button":void 0,tabIndex:u?0:void 0,...d,children:[s&&te.jsxs("div",{className:"absolute inset-0 overflow-hidden rounded-2xl",children:[te.jsx("div",{className:"absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent wave-animation"}),te.jsx("div",{className:"absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent wave-animation",style:{animationDelay:"1s"}})]}),te.jsx("div",{className:ys("relative z-10",s&&"relative"),children:n})]})},ga=[{id:"1",title:"Glass Vault",artist:"Moonwave",audioUrl:"/Music/10. Glass Vault.mp3"},{id:"2",title:"Null Error Grace Part1",artist:"Moonwave",audioUrl:"/Music/11. Null Error Grace Part1.mp3"},{id:"3",title:"Shine Bright",artist:"Moonwave",audioUrl:"/Music/13. Shine Bright.mp3"},{id:"4",title:"Moonwave",artist:"Moonwave",audioUrl:"/Music/17. Moonwave.mp3"},{id:"5",title:"Phantom Fairy",artist:"Moonwave",audioUrl:"/Music/5. Phantom Fairy.mp3"}];function WU(){const{user:n}=pU(),e=j.useRef(null),[t,s]=j.useState(0),[o,u]=j.useState(!1),[h,d]=j.useState(0),[m,y]=j.useState(0),[E,b]=j.useState(.7),[w,O]=j.useState(!1),[k,F]=j.useState(!0),V=ga[t];j.useEffect(()=>{const se=e.current;if(!se)return;const he=()=>d(se.currentTime),x=()=>y(se.duration),S=()=>{u(!1);const R=k?Math.floor(Math.random()*ga.length):(t+1)%ga.length;s(R),setTimeout(async()=>{const N=e.current;if(N)try{await N.play(),u(!0)}catch(D){console.error("자동 재생 실패:",D),u(!1)}},500)};return se.addEventListener("timeupdate",he),se.addEventListener("durationchange",x),se.addEventListener("ended",S),()=>{se.removeEventListener("timeupdate",he),se.removeEventListener("durationchange",x),se.removeEventListener("ended",S)}},[t,k]),j.useEffect(()=>{const se=e.current;se&&(se.volume=w?0:E)},[E,w]),j.useEffect(()=>{d(0),y(0),u(!1)},[t]);const G=async()=>{const se=e.current;if(se)try{o?(se.pause(),u(!1)):(await se.play(),u(!0))}catch(he){console.error("재생 오류:",he),u(!1)}},Z=async()=>{const se=k?Math.floor(Math.random()*ga.length):t>0?t-1:ga.length-1;s(se),setTimeout(async()=>{const he=e.current;if(he)try{await he.play(),u(!0)}catch(x){console.error("자동 재생 실패:",x),u(!1)}},100)},K=async()=>{const se=k?Math.floor(Math.random()*ga.length):(t+1)%ga.length;s(se),setTimeout(async()=>{const he=e.current;if(he)try{await he.play(),u(!0)}catch(x){console.error("자동 재생 실패:",x),u(!1)}},100)},ie=se=>{if(isNaN(se))return"0:00";const he=Math.floor(se/60),x=Math.floor(se%60);return`${he}:${x.toString().padStart(2,"0")}`};return n?te.jsx("div",{className:"fixed bottom-4 left-4 right-4 z-50",children:te.jsxs(XU,{variant:"strong",className:"p-4 backdrop-blur-xl",children:[te.jsx("audio",{ref:e,src:V.audioUrl,preload:"metadata"}),te.jsxs("div",{className:"flex items-center space-x-4",children:[te.jsxs("div",{className:"flex-1 min-w-0",children:[te.jsx("div",{className:"text-white font-medium text-sm truncate",children:V.title}),te.jsx("div",{className:"text-white/60 text-xs truncate",children:V.artist})]}),te.jsxs("div",{className:"flex items-center space-x-2",children:[te.jsx(cs,{variant:"ghost",size:"sm",onClick:()=>F(!k),className:ys("p-2",k?"text-primary-400":"text-white/60"),ariaLabel:"셔플 모드",children:te.jsx(c1,{className:"w-4 h-4"})}),te.jsx(cs,{variant:"ghost",size:"sm",onClick:Z,className:"p-2 text-white/80 hover:text-white",ariaLabel:"이전 트랙",children:te.jsx(h1,{className:"w-4 h-4"})}),te.jsx(cs,{variant:"primary",size:"sm",onClick:G,className:"p-3",ariaLabel:o?"일시정지":"재생",children:o?te.jsx(f1,{className:"w-4 h-4"}):te.jsx(d1,{className:"w-4 h-4"})}),te.jsx(cs,{variant:"ghost",size:"sm",onClick:K,className:"p-2 text-white/80 hover:text-white",ariaLabel:"다음 트랙",children:te.jsx(p1,{className:"w-4 h-4"})}),te.jsxs("div",{className:"hidden sm:flex items-center space-x-2",children:[te.jsx(cs,{variant:"ghost",size:"sm",onClick:()=>O(!w),className:"p-2 text-white/80 hover:text-white",ariaLabel:w?"음소거 해제":"음소거",children:w?te.jsx(m1,{className:"w-4 h-4"}):te.jsx(g1,{className:"w-4 h-4"})}),te.jsx("input",{type:"range",min:"0",max:"1",step:"0.1",value:E,onChange:se=>b(parseFloat(se.target.value)),className:"w-20 h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"})]}),te.jsxs("div",{className:"hidden md:block text-xs text-white/60 min-w-[80px] text-right",children:[ie(h)," / ",ie(m)]})]})]}),te.jsx("div",{className:"mt-3",children:te.jsx("div",{className:"w-full h-1 bg-white/20 rounded-full overflow-hidden",children:te.jsx("div",{className:"h-full bg-gradient-to-r from-primary-400 to-primary-600 transition-all duration-300",style:{width:m>0?`${h/m*100}%`:"0%"}})})})]})}):null}function ZU(){return lr().pathname==="/login"?null:te.jsx("div",{className:"px-4 pb-4",children:te.jsx(WU,{})})}function JU(){const n=lr(),e=n.pathname==="/",t=n.pathname==="/settings",s=n.pathname==="/trip-map";return te.jsx("header",{className:"fixed top-0 left-0 right-0 z-50 p-4",role:"banner","aria-label":"페이지 상단 네비게이션",children:te.jsx("div",{className:"max-w-7xl mx-auto",children:te.jsxs("div",{className:"flex items-center justify-between",children:[te.jsx("div",{className:"flex-shrink-0",children:te.jsx(wu,{to:"/",children:te.jsx(cs,{variant:e?"primary":"ghost",size:"sm",ariaLabel:"홈으로 이동",className:"p-2 hover:bg-white/30 active:scale-95 focus:ring-2 focus:ring-white/50 transition-all",children:te.jsx(y1,{size:20,className:"icon-enhanced"})})})}),te.jsxs("div",{className:"flex items-center space-x-2",children:[te.jsx(wu,{to:"/trip-map",children:te.jsx(cs,{variant:s?"primary":"ghost",size:"sm",ariaLabel:"지도로 이동",className:"p-2 hover:bg-white/30 active:scale-95 focus:ring-2 focus:ring-white/50 transition-all",children:te.jsx(_1,{size:20,className:"icon-enhanced"})})}),te.jsx(wu,{to:"/settings",children:te.jsx(cs,{variant:t?"primary":"ghost",size:"sm",ariaLabel:"설정으로 이동",className:"p-2 hover:bg-white/30 active:scale-95 focus:ring-2 focus:ring-white/50 transition-all",children:te.jsx(v1,{size:20,className:"icon-enhanced"})})})]})]})})})}function e6(){return lr().pathname==="/login"?null:te.jsx(JU,{})}const t6=j.lazy(()=>or(()=>import("./Home-Ce9zpEZO.js"),__vite__mapDeps([0,1,2,3,4])).then(n=>({default:n.Home}))),n6=j.lazy(()=>or(()=>import("./TripCreate-Dljxc6Hz.js"),__vite__mapDeps([5,1,2,3])).then(n=>({default:n.TripCreate}))),r6=j.lazy(()=>or(()=>import("./TripEdit-bAIqFHKV.js"),__vite__mapDeps([6,1,2,7,3])).then(n=>({default:n.TripEdit}))),i6=j.lazy(()=>or(()=>import("./TripDetail-BrvoXZXA.js"),__vite__mapDeps([8,1,2,7,3,9,4])).then(n=>({default:n.TripDetail}))),bb=j.lazy(()=>or(()=>import("./PlanDetail-C3hMwkCi.js"),__vite__mapDeps([10,1,2,7,3,4])).then(n=>({default:n.PlanDetail}))),s6=j.lazy(()=>or(()=>import("./PlaceSearch-C9kSgylu.js"),__vite__mapDeps([11,1,2,7,3])).then(n=>({default:n.PlaceSearch}))),wb=j.lazy(()=>or(()=>import("./TripMap-BDb6pCFx.js"),__vite__mapDeps([12,1,2,9,4,13])).then(n=>({default:n.TripMap}))),a6=j.lazy(()=>or(()=>import("./Login-hw3CZgoJ.js"),__vite__mapDeps([14,1,2])).then(n=>({default:n.Login}))),o6=j.lazy(()=>or(()=>import("./Settings-fXDCgOPy.js"),__vite__mapDeps([15,1,2,7])).then(n=>({default:n.Settings}))),l6=j.lazy(()=>or(()=>import("./AboutUs-BIiiq7FN.js"),__vite__mapDeps([16,1,2,3])).then(n=>({default:n.AboutUs}))),u6=j.lazy(()=>or(()=>import("./TermsOfService-BEJep_ti.js"),__vite__mapDeps([17,3,1,2])).then(n=>({default:n.TermsOfService}))),c6=()=>te.jsx("div",{className:"min-h-screen flex items-center justify-center",children:te.jsx("div",{className:"text-white text-xl",children:"Loading..."})});function h6(){return te.jsx(mU,{children:te.jsx($C,{children:te.jsxs(YU,{className:"min-h-screen",children:[te.jsx(e6,{}),te.jsx("div",{className:"min-h-screen",children:te.jsx(j.Suspense,{fallback:te.jsx(c6,{}),children:te.jsxs(bC,{children:[te.jsx(on,{path:"/",element:te.jsx(t6,{})}),te.jsx(on,{path:"/login",element:te.jsx(a6,{})}),te.jsx(on,{path:"/settings",element:te.jsx(o6,{})}),te.jsx(on,{path:"/about",element:te.jsx(l6,{})}),te.jsx(on,{path:"/terms",element:te.jsx(u6,{})}),te.jsx(on,{path:"/trips/new",element:te.jsx(n6,{})}),te.jsx(on,{path:"/trips/:id/edit",element:te.jsx(r6,{})}),te.jsx(on,{path:"/trips/:id",element:te.jsx(i6,{})}),te.jsx(on,{path:"/trips/:tripId/plans/new",element:te.jsx(bb,{})}),te.jsx(on,{path:"/trips/:tripId/plans/:planId",element:te.jsx(bb,{})}),te.jsx(on,{path:"/places/search",element:te.jsx(s6,{})}),te.jsx(on,{path:"/trips/:id/map",element:te.jsx(wb,{})}),te.jsx(on,{path:"/trip-map",element:te.jsx(wb,{})}),te.jsx(on,{path:"*",element:te.jsx("div",{children:"404 - Page Not Found"})})]})})}),te.jsx(ZU,{})]})})})}D1.createRoot(document.getElementById("root")).render(te.jsx(Ab.StrictMode,{children:te.jsx(h6,{})}));"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").then(n=>{console.log("SW registered: ",n)}).catch(n=>{console.log("SW registration failed: ",n)})});export{XU as G,JU as H,wu as L,tt as T,cs as W,Pb as a,y6 as b,ys as c,M6 as d,R6 as e,A6 as f,tk as g,N6 as h,D6 as i,te as j,S6 as k,p6 as l,m6 as m,T6 as n,E6 as o,I6 as p,_6 as q,O6 as r,x6 as s,w6 as t,pU as u,lr as v,v6 as w,b6 as x,C6 as y,YU as z};
//# sourceMappingURL=index-DZW4yAKh.js.map
