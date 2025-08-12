const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-CJ_eXW9s.js","assets/ui-DVQGuqmb.js","assets/vendor-gH-7aFTg.js","assets/Footer-BdqaH0Mx.js","assets/time-Ctdjibtq.js","assets/TripCreate-WUI38FT2.js","assets/TripEdit-BcYVEXPd.js","assets/navigationCallback-Dv4a5ajJ.js","assets/TripDetail-DkiD5_q0.js","assets/PlanCard-BKxrPyre.js","assets/PlanDetail-C5MLyrDR.js","assets/PlaceSearch-BhxDjLrw.js","assets/TripMap-DIpDLGwY.js","assets/TripMap-Dgihpmma.css","assets/Login-DTG-UBwZ.js","assets/Settings-COMfNbyt.js","assets/AboutUs-DdpF3Ski.js","assets/TermsOfService-CC88dSdf.js"])))=>i.map(i=>d[i]);
import{r as H,S as l1,a as u1,P as c1,b as h1,c as f1,V as d1,d as m1,H as p1,M as g1,U as y1,R as _1}from"./ui-DVQGuqmb.js";import{r as v1,a as E1,g as T1}from"./vendor-gH-7aFTg.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();var op={exports:{}},cu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eT;function b1(){if(eT)return cu;eT=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,o,u){var h=null;if(u!==void 0&&(h=""+u),o.key!==void 0&&(h=""+o.key),"key"in o){u={};for(var d in o)d!=="key"&&(u[d]=o[d])}else u=o;return o=u.ref,{$$typeof:n,type:s,key:h,ref:o!==void 0?o:null,props:u}}return cu.Fragment=e,cu.jsx=t,cu.jsxs=t,cu}var tT;function w1(){return tT||(tT=1,op.exports=b1()),op.exports}var J=w1(),lp={exports:{}},hu={},up={exports:{}},cp={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nT;function A1(){return nT||(nT=1,function(n){function e(K,re){var ce=K.length;K.push(re);e:for(;0<ce;){var Ne=ce-1>>>1,Ve=K[Ne];if(0<o(Ve,re))K[Ne]=re,K[ce]=Ve,ce=Ne;else break e}}function t(K){return K.length===0?null:K[0]}function s(K){if(K.length===0)return null;var re=K[0],ce=K.pop();if(ce!==re){K[0]=ce;e:for(var Ne=0,Ve=K.length,Ke=Ve>>>1;Ne<Ke;){var Pe=2*(Ne+1)-1,_e=K[Pe],gt=Pe+1,$t=K[gt];if(0>o(_e,ce))gt<Ve&&0>o($t,_e)?(K[Ne]=$t,K[gt]=ce,Ne=gt):(K[Ne]=_e,K[Pe]=ce,Ne=Pe);else if(gt<Ve&&0>o($t,ce))K[Ne]=$t,K[gt]=ce,Ne=gt;else break e}}return re}function o(K,re){var ce=K.sortIndex-re.sortIndex;return ce!==0?ce:K.id-re.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;n.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();n.unstable_now=function(){return h.now()-d}}var p=[],y=[],E=1,w=null,A=3,k=!1,x=!1,j=!1,V=!1,G=typeof setTimeout=="function"?setTimeout:null,te=typeof clearTimeout=="function"?clearTimeout:null,ee=typeof setImmediate<"u"?setImmediate:null;function oe(K){for(var re=t(y);re!==null;){if(re.callback===null)s(y);else if(re.startTime<=K)s(y),re.sortIndex=re.expirationTime,e(p,re);else break;re=t(y)}}function ae(K){if(j=!1,oe(K),!x)if(t(p)!==null)x=!0,fe||(fe=!0,M());else{var re=t(y);re!==null&&Ot(ae,re.startTime-K)}}var fe=!1,D=-1,S=5,R=-1;function O(){return V?!0:!(n.unstable_now()-R<S)}function P(){if(V=!1,fe){var K=n.unstable_now();R=K;var re=!0;try{e:{x=!1,j&&(j=!1,te(D),D=-1),k=!0;var ce=A;try{t:{for(oe(K),w=t(p);w!==null&&!(w.expirationTime>K&&O());){var Ne=w.callback;if(typeof Ne=="function"){w.callback=null,A=w.priorityLevel;var Ve=Ne(w.expirationTime<=K);if(K=n.unstable_now(),typeof Ve=="function"){w.callback=Ve,oe(K),re=!0;break t}w===t(p)&&s(p),oe(K)}else s(p);w=t(p)}if(w!==null)re=!0;else{var Ke=t(y);Ke!==null&&Ot(ae,Ke.startTime-K),re=!1}}break e}finally{w=null,A=ce,k=!1}re=void 0}}finally{re?M():fe=!1}}}var M;if(typeof ee=="function")M=function(){ee(P)};else if(typeof MessageChannel<"u"){var C=new MessageChannel,pt=C.port2;C.port1.onmessage=P,M=function(){pt.postMessage(null)}}else M=function(){G(P,0)};function Ot(K,re){D=G(function(){K(n.unstable_now())},re)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(K){K.callback=null},n.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<K?Math.floor(1e3/K):5},n.unstable_getCurrentPriorityLevel=function(){return A},n.unstable_next=function(K){switch(A){case 1:case 2:case 3:var re=3;break;default:re=A}var ce=A;A=re;try{return K()}finally{A=ce}},n.unstable_requestPaint=function(){V=!0},n.unstable_runWithPriority=function(K,re){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var ce=A;A=K;try{return re()}finally{A=ce}},n.unstable_scheduleCallback=function(K,re,ce){var Ne=n.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?Ne+ce:Ne):ce=Ne,K){case 1:var Ve=-1;break;case 2:Ve=250;break;case 5:Ve=1073741823;break;case 4:Ve=1e4;break;default:Ve=5e3}return Ve=ce+Ve,K={id:E++,callback:re,priorityLevel:K,startTime:ce,expirationTime:Ve,sortIndex:-1},ce>Ne?(K.sortIndex=ce,e(y,K),t(p)===null&&K===t(y)&&(j?(te(D),D=-1):j=!0,Ot(ae,ce-Ne))):(K.sortIndex=Ve,e(p,K),x||k||(x=!0,fe||(fe=!0,M()))),K},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(K){var re=A;return function(){var ce=A;A=re;try{return K.apply(this,arguments)}finally{A=ce}}}}(cp)),cp}var rT;function S1(){return rT||(rT=1,up.exports=A1()),up.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iT;function R1(){if(iT)return hu;iT=1;var n=S1(),e=v1(),t=E1();function s(r){var i="https://react.dev/errors/"+r;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+r+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function u(r){var i=r,a=r;if(r.alternate)for(;i.return;)i=i.return;else{r=i;do i=r,(i.flags&4098)!==0&&(a=i.return),r=i.return;while(r)}return i.tag===3?a:null}function h(r){if(r.tag===13){var i=r.memoizedState;if(i===null&&(r=r.alternate,r!==null&&(i=r.memoizedState)),i!==null)return i.dehydrated}return null}function d(r){if(u(r)!==r)throw Error(s(188))}function p(r){var i=r.alternate;if(!i){if(i=u(r),i===null)throw Error(s(188));return i!==r?null:r}for(var a=r,l=i;;){var f=a.return;if(f===null)break;var m=f.alternate;if(m===null){if(l=f.return,l!==null){a=l;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===a)return d(f),r;if(m===l)return d(f),i;m=m.sibling}throw Error(s(188))}if(a.return!==l.return)a=f,l=m;else{for(var v=!1,T=f.child;T;){if(T===a){v=!0,a=f,l=m;break}if(T===l){v=!0,l=f,a=m;break}T=T.sibling}if(!v){for(T=m.child;T;){if(T===a){v=!0,a=m,l=f;break}if(T===l){v=!0,l=m,a=f;break}T=T.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?r:i}function y(r){var i=r.tag;if(i===5||i===26||i===27||i===6)return r;for(r=r.child;r!==null;){if(i=y(r),i!==null)return i;r=r.sibling}return null}var E=Object.assign,w=Symbol.for("react.element"),A=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),G=Symbol.for("react.provider"),te=Symbol.for("react.consumer"),ee=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),ae=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),O=Symbol.for("react.memo_cache_sentinel"),P=Symbol.iterator;function M(r){return r===null||typeof r!="object"?null:(r=P&&r[P]||r["@@iterator"],typeof r=="function"?r:null)}var C=Symbol.for("react.client.reference");function pt(r){if(r==null)return null;if(typeof r=="function")return r.$$typeof===C?null:r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case x:return"Fragment";case V:return"Profiler";case j:return"StrictMode";case ae:return"Suspense";case fe:return"SuspenseList";case R:return"Activity"}if(typeof r=="object")switch(r.$$typeof){case k:return"Portal";case ee:return(r.displayName||"Context")+".Provider";case te:return(r._context.displayName||"Context")+".Consumer";case oe:var i=r.render;return r=r.displayName,r||(r=i.displayName||i.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case D:return i=r.displayName||null,i!==null?i:pt(r.type)||"Memo";case S:i=r._payload,r=r._init;try{return pt(r(i))}catch{}}return null}var Ot=Array.isArray,K=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce={pending:!1,data:null,method:null,action:null},Ne=[],Ve=-1;function Ke(r){return{current:r}}function Pe(r){0>Ve||(r.current=Ne[Ve],Ne[Ve]=null,Ve--)}function _e(r,i){Ve++,Ne[Ve]=r.current,r.current=i}var gt=Ke(null),$t=Ke(null),ur=Ke(null),zr=Ke(null);function Ma(r,i){switch(_e(ur,i),_e($t,r),_e(gt,null),i.nodeType){case 9:case 11:r=(r=i.documentElement)&&(r=r.namespaceURI)?CE(r):0;break;default:if(r=i.tagName,i=i.namespaceURI)i=CE(i),r=NE(i,r);else switch(r){case"svg":r=1;break;case"math":r=2;break;default:r=0}}Pe(gt),_e(gt,r)}function Ri(){Pe(gt),Pe($t),Pe(ur)}function Ii(r){r.memoizedState!==null&&_e(zr,r);var i=gt.current,a=NE(i,r.type);i!==a&&(_e($t,r),_e(gt,a))}function Br(r){$t.current===r&&(Pe(gt),Pe($t)),zr.current===r&&(Pe(zr),su._currentValue=ce)}var Os=Object.prototype.hasOwnProperty,Ms=n.unstable_scheduleCallback,xs=n.unstable_cancelCallback,nl=n.unstable_shouldYield,fc=n.unstable_requestPaint,Dn=n.unstable_now,od=n.unstable_getCurrentPriorityLevel,rl=n.unstable_ImmediatePriority,xa=n.unstable_UserBlockingPriority,Ps=n.unstable_NormalPriority,ld=n.unstable_LowPriority,Pa=n.unstable_IdlePriority,il=n.log,dc=n.unstable_setDisableYieldValue,st=null,Be=null;function gn(r){if(typeof il=="function"&&dc(r),Be&&typeof Be.setStrictMode=="function")try{Be.setStrictMode(st,r)}catch{}}var Kt=Math.clz32?Math.clz32:ks,mc=Math.log,ud=Math.LN2;function ks(r){return r>>>=0,r===0?32:31-(mc(r)/ud|0)|0}var Vs=256,Ls=4194304;function Xn(r){var i=r&42;if(i!==0)return i;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return r}}function ka(r,i,a){var l=r.pendingLanes;if(l===0)return 0;var f=0,m=r.suspendedLanes,v=r.pingedLanes;r=r.warmLanes;var T=l&134217727;return T!==0?(l=T&~m,l!==0?f=Xn(l):(v&=T,v!==0?f=Xn(v):a||(a=T&~r,a!==0&&(f=Xn(a))))):(T=l&~m,T!==0?f=Xn(T):v!==0?f=Xn(v):a||(a=l&~r,a!==0&&(f=Xn(a)))),f===0?0:i!==0&&i!==f&&(i&m)===0&&(m=f&-f,a=i&-i,m>=a||m===32&&(a&4194048)!==0)?i:f}function Us(r,i){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&i)===0}function sl(r,i){switch(r){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function al(){var r=Vs;return Vs<<=1,(Vs&4194048)===0&&(Vs=256),r}function ol(){var r=Ls;return Ls<<=1,(Ls&62914560)===0&&(Ls=4194304),r}function jr(r){for(var i=[],a=0;31>a;a++)i.push(r);return i}function qr(r,i){r.pendingLanes|=i,i!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function ll(r,i,a,l,f,m){var v=r.pendingLanes;r.pendingLanes=a,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=a,r.entangledLanes&=a,r.errorRecoveryDisabledLanes&=a,r.shellSuspendCounter=0;var T=r.entanglements,I=r.expirationTimes,B=r.hiddenUpdates;for(a=v&~a;0<a;){var Q=31-Kt(a),W=1<<Q;T[Q]=0,I[Q]=-1;var q=B[Q];if(q!==null)for(B[Q]=null,Q=0;Q<q.length;Q++){var F=q[Q];F!==null&&(F.lane&=-536870913)}a&=~W}l!==0&&cr(r,l,0),m!==0&&f===0&&r.tag!==0&&(r.suspendedLanes|=m&~(v&~i))}function cr(r,i,a){r.pendingLanes|=i,r.suspendedLanes&=~i;var l=31-Kt(i);r.entangledLanes|=i,r.entanglements[l]=r.entanglements[l]|1073741824|a&4194090}function ul(r,i){var a=r.entangledLanes|=i;for(r=r.entanglements;a;){var l=31-Kt(a),f=1<<l;f&i|r[l]&i&&(r[l]|=i),a&=~f}}function Ci(r){switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=128;break;case 268435456:r=134217728;break;default:r=0}return r}function Va(r){return r&=-r,2<r?8<r?(r&134217727)!==0?32:268435456:8:2}function Ni(){var r=re.p;return r!==0?r:(r=window.event,r===void 0?32:QE(r.type))}function pc(r,i){var a=re.p;try{return re.p=r,i()}finally{re.p=a}}var et=Math.random().toString(36).slice(2),At="__reactFiber$"+et,yt="__reactProps$"+et,On="__reactContainer$"+et,cl="__reactEvents$"+et,cd="__reactListeners$"+et,Di="__reactHandles$"+et,gc="__reactResources$"+et,zs="__reactMarker$"+et;function Oi(r){delete r[At],delete r[yt],delete r[cl],delete r[cd],delete r[Di]}function Fr(r){var i=r[At];if(i)return i;for(var a=r.parentNode;a;){if(i=a[On]||a[At]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(r=xE(r);r!==null;){if(a=r[At])return a;r=xE(r)}return i}r=a,a=r.parentNode}return null}function hr(r){if(r=r[At]||r[On]){var i=r.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return r}return null}function fr(r){var i=r.tag;if(i===5||i===26||i===27||i===6)return r.stateNode;throw Error(s(33))}function tn(r){var i=r[gc];return i||(i=r[gc]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function ht(r){r[zs]=!0}var hl=new Set,La={};function Wn(r,i){Hr(r,i),Hr(r+"Capture",i)}function Hr(r,i){for(La[r]=i,r=0;r<i.length;r++)hl.add(i[r])}var yc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),_c={},Bs={};function vc(r){return Os.call(Bs,r)?!0:Os.call(_c,r)?!1:yc.test(r)?Bs[r]=!0:(_c[r]=!0,!1)}function Mi(r,i,a){if(vc(i))if(a===null)r.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":r.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){r.removeAttribute(i);return}}r.setAttribute(i,""+a)}}function dr(r,i,a){if(a===null)r.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(i);return}r.setAttribute(i,""+a)}}function Ut(r,i,a,l){if(l===null)r.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(a);return}r.setAttributeNS(i,a,""+l)}}var js,Ec;function Gr(r){if(js===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);js=i&&i[1]||"",Ec=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+js+r+Ec}var Ua=!1;function za(r,i){if(!r||Ua)return"";Ua=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var W=function(){throw Error()};if(Object.defineProperty(W.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(W,[])}catch(F){var q=F}Reflect.construct(r,[],W)}else{try{W.call()}catch(F){q=F}r.call(W.prototype)}}else{try{throw Error()}catch(F){q=F}(W=r())&&typeof W.catch=="function"&&W.catch(function(){})}}catch(F){if(F&&q&&typeof F.stack=="string")return[F.stack,q.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),v=m[0],T=m[1];if(v&&T){var I=v.split(`
`),B=T.split(`
`);for(f=l=0;l<I.length&&!I[l].includes("DetermineComponentFrameRoot");)l++;for(;f<B.length&&!B[f].includes("DetermineComponentFrameRoot");)f++;if(l===I.length||f===B.length)for(l=I.length-1,f=B.length-1;1<=l&&0<=f&&I[l]!==B[f];)f--;for(;1<=l&&0<=f;l--,f--)if(I[l]!==B[f]){if(l!==1||f!==1)do if(l--,f--,0>f||I[l]!==B[f]){var Q=`
`+I[l].replace(" at new "," at ");return r.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",r.displayName)),Q}while(1<=l&&0<=f);break}}}finally{Ua=!1,Error.prepareStackTrace=a}return(a=r?r.displayName||r.name:"")?Gr(a):""}function fl(r){switch(r.tag){case 26:case 27:case 5:return Gr(r.type);case 16:return Gr("Lazy");case 13:return Gr("Suspense");case 19:return Gr("SuspenseList");case 0:case 15:return za(r.type,!1);case 11:return za(r.type.render,!1);case 1:return za(r.type,!0);case 31:return Gr("Activity");default:return""}}function Ba(r){try{var i="";do i+=fl(r),r=r.return;while(r);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function nn(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function dl(r){var i=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function hd(r){var i=dl(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,i),l=""+r[i];if(!r.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,m=a.set;return Object.defineProperty(r,i,{configurable:!0,get:function(){return f.call(this)},set:function(v){l=""+v,m.call(this,v)}}),Object.defineProperty(r,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){r._valueTracker=null,delete r[i]}}}}function ja(r){r._valueTracker||(r._valueTracker=hd(r))}function ml(r){if(!r)return!1;var i=r._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return r&&(l=dl(r)?r.checked?"true":"false":r.value),r=l,r!==a?(i.setValue(r),!0):!1}function qs(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}var fd=/[\n"\\]/g;function _t(r){return r.replace(fd,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function yn(r,i,a,l,f,m,v,T){r.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?r.type=v:r.removeAttribute("type"),i!=null?v==="number"?(i===0&&r.value===""||r.value!=i)&&(r.value=""+nn(i)):r.value!==""+nn(i)&&(r.value=""+nn(i)):v!=="submit"&&v!=="reset"||r.removeAttribute("value"),i!=null?xi(r,v,nn(i)):a!=null?xi(r,v,nn(a)):l!=null&&r.removeAttribute("value"),f==null&&m!=null&&(r.defaultChecked=!!m),f!=null&&(r.checked=f&&typeof f!="function"&&typeof f!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?r.name=""+nn(T):r.removeAttribute("name")}function Fs(r,i,a,l,f,m,v,T){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(r.type=m),i!=null||a!=null){if(!(m!=="submit"&&m!=="reset"||i!=null))return;a=a!=null?""+nn(a):"",i=i!=null?""+nn(i):a,T||i===r.value||(r.value=i),r.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,r.checked=T?r.checked:!!l,r.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(r.name=v)}function xi(r,i,a){i==="number"&&qs(r.ownerDocument)===r||r.defaultValue===""+a||(r.defaultValue=""+a)}function $r(r,i,a,l){if(r=r.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<r.length;a++)f=i.hasOwnProperty("$"+r[a].value),r[a].selected!==f&&(r[a].selected=f),f&&l&&(r[a].defaultSelected=!0)}else{for(a=""+nn(a),i=null,f=0;f<r.length;f++){if(r[f].value===a){r[f].selected=!0,l&&(r[f].defaultSelected=!0);return}i!==null||r[f].disabled||(i=r[f])}i!==null&&(i.selected=!0)}}function Fe(r,i,a){if(i!=null&&(i=""+nn(i),i!==r.value&&(r.value=i),a==null)){r.defaultValue!==i&&(r.defaultValue=i);return}r.defaultValue=a!=null?""+nn(a):""}function Hs(r,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(Ot(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=nn(i),r.defaultValue=a,l=r.textContent,l===a&&l!==""&&l!==null&&(r.value=l)}function Mn(r,i){if(i){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=i;return}}r.textContent=i}var Gs=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Tc(r,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?r.setProperty(i,""):i==="float"?r.cssFloat="":r[i]="":l?r.setProperty(i,a):typeof a!="number"||a===0||Gs.has(i)?i==="float"?r.cssFloat=a:r[i]=(""+a).trim():r[i]=a+"px"}function pl(r,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(r=r.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?r.setProperty(l,""):l==="float"?r.cssFloat="":r[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&a[f]!==l&&Tc(r,f,l)}else for(var m in i)i.hasOwnProperty(m)&&Tc(r,m,i[m])}function gl(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),md=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function qa(r){return md.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}var Kr=null;function xn(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Qr=null,Yr=null;function yl(r){var i=hr(r);if(i&&(r=i.stateNode)){var a=r[yt]||null;e:switch(r=i.stateNode,i.type){case"input":if(yn(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+_t(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==r&&l.form===r.form){var f=l[yt]||null;if(!f)throw Error(s(90));yn(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===r.form&&ml(l)}break e;case"textarea":Fe(r,a.value,a.defaultValue);break e;case"select":i=a.value,i!=null&&$r(r,!!a.multiple,i,!1)}}}var mr=!1;function bc(r,i,a){if(mr)return r(i,a);mr=!0;try{var l=r(i);return l}finally{if(mr=!1,(Qr!==null||Yr!==null)&&(ph(),Qr&&(i=Qr,r=Yr,Yr=Qr=null,yl(i),r)))for(i=0;i<r.length;i++)yl(r[i])}}function $s(r,i){var a=r.stateNode;if(a===null)return null;var l=a[yt]||null;if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(r=r.type,l=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!l;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var Zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pn=!1;if(Zn)try{var Ks={};Object.defineProperty(Ks,"passive",{get:function(){Pn=!0}}),window.addEventListener("test",Ks,Ks),window.removeEventListener("test",Ks,Ks)}catch{Pn=!1}var pr=null,Pi=null,Xr=null;function _l(){if(Xr)return Xr;var r,i=Pi,a=i.length,l,f="value"in pr?pr.value:pr.textContent,m=f.length;for(r=0;r<a&&i[r]===f[r];r++);var v=a-r;for(l=1;l<=v&&i[a-l]===f[m-l];l++);return Xr=f.slice(r,1<l?1-l:void 0)}function gr(r){var i=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&i===13&&(r=13)):r=i,r===10&&(r=13),32<=r||r===13?r:0}function yr(){return!0}function vl(){return!1}function Mt(r){function i(a,l,f,m,v){this._reactName=a,this._targetInst=f,this.type=l,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var T in r)r.hasOwnProperty(T)&&(a=r[T],this[T]=a?a(m):m[T]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?yr:vl,this.isPropagationStopped=vl,this}return E(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=yr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=yr)},persist:function(){},isPersistent:yr}),i}var Ue={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fa=Mt(Ue),Qs=E({},Ue,{view:0,detail:0}),wc=Mt(Qs),Ha,Ga,_r,Ys=E({},Qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zs,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==_r&&(_r&&r.type==="mousemove"?(Ha=r.screenX-_r.screenX,Ga=r.screenY-_r.screenY):Ga=Ha=0,_r=r),Ha)},movementY:function(r){return"movementY"in r?r.movementY:Ga}}),kn=Mt(Ys),Ac=E({},Ys,{dataTransfer:0}),pd=Mt(Ac),Xs=E({},Qs,{relatedTarget:0}),$a=Mt(Xs),El=E({},Ue,{animationName:0,elapsedTime:0,pseudoElement:0}),Ka=Mt(El),Sc=E({},Ue,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Qa=Mt(Sc),gd=E({},Ue,{data:0}),Tl=Mt(gd),Ws={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ic={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bl(r){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(r):(r=Ic[r])?!!i[r]:!1}function Zs(){return bl}var Cc=E({},Qs,{key:function(r){if(r.key){var i=Ws[r.key]||r.key;if(i!=="Unidentified")return i}return r.type==="keypress"?(r=gr(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Rc[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zs,charCode:function(r){return r.type==="keypress"?gr(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?gr(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),Ya=Mt(Cc),Nc=E({},Ys,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wl=Mt(Nc),Wr=E({},Qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zs}),Dc=Mt(Wr),Oc=E({},Ue,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mc=Mt(Oc),xc=E({},Ys,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Xa=Mt(xc),rn=E({},Ue,{newState:0,oldState:0}),Pc=Mt(rn),kc=[9,13,27,32],vr=Zn&&"CompositionEvent"in window,c=null;Zn&&"documentMode"in document&&(c=document.documentMode);var g=Zn&&"TextEvent"in window&&!c,_=Zn&&(!vr||c&&8<c&&11>=c),b=" ",U=!1;function $(r,i){switch(r){case"keyup":return kc.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ne(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var De=!1;function St(r,i){switch(r){case"compositionend":return ne(i);case"keypress":return i.which!==32?null:(U=!0,b);case"textInput":return r=i.data,r===b&&U?null:r;default:return null}}function Oe(r,i){if(De)return r==="compositionend"||!vr&&$(r,i)?(r=_l(),Xr=Pi=pr=null,De=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _&&i.locale!=="ko"?null:i.data;default:return null}}var xt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rt(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i==="input"?!!xt[r.type]:i==="textarea"}function Zr(r,i,a,l){Qr?Yr?Yr.push(l):Yr=[l]:Qr=l,i=Th(i,"onChange"),0<i.length&&(a=new Fa("onChange","change",null,a,l),r.push({event:a,listeners:i}))}var zt=null,Er=null;function Al(r){wE(r,0)}function Vc(r){var i=fr(r);if(ml(i))return r}function Hy(r,i){if(r==="change")return i}var Gy=!1;if(Zn){var yd;if(Zn){var _d="oninput"in document;if(!_d){var $y=document.createElement("div");$y.setAttribute("oninput","return;"),_d=typeof $y.oninput=="function"}yd=_d}else yd=!1;Gy=yd&&(!document.documentMode||9<document.documentMode)}function Ky(){zt&&(zt.detachEvent("onpropertychange",Qy),Er=zt=null)}function Qy(r){if(r.propertyName==="value"&&Vc(Er)){var i=[];Zr(i,Er,r,xn(r)),bc(Al,i)}}function UR(r,i,a){r==="focusin"?(Ky(),zt=i,Er=a,zt.attachEvent("onpropertychange",Qy)):r==="focusout"&&Ky()}function zR(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Vc(Er)}function BR(r,i){if(r==="click")return Vc(i)}function jR(r,i){if(r==="input"||r==="change")return Vc(i)}function qR(r,i){return r===i&&(r!==0||1/r===1/i)||r!==r&&i!==i}var _n=typeof Object.is=="function"?Object.is:qR;function Sl(r,i){if(_n(r,i))return!0;if(typeof r!="object"||r===null||typeof i!="object"||i===null)return!1;var a=Object.keys(r),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var f=a[l];if(!Os.call(i,f)||!_n(r[f],i[f]))return!1}return!0}function Yy(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Xy(r,i){var a=Yy(r);r=0;for(var l;a;){if(a.nodeType===3){if(l=r+a.textContent.length,r<=i&&l>=i)return{node:a,offset:i-r};r=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Yy(a)}}function Wy(r,i){return r&&i?r===i?!0:r&&r.nodeType===3?!1:i&&i.nodeType===3?Wy(r,i.parentNode):"contains"in r?r.contains(i):r.compareDocumentPosition?!!(r.compareDocumentPosition(i)&16):!1:!1}function Zy(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var i=qs(r.document);i instanceof r.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)r=i.contentWindow;else break;i=qs(r.document)}return i}function vd(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i&&(i==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||i==="textarea"||r.contentEditable==="true")}var FR=Zn&&"documentMode"in document&&11>=document.documentMode,Wa=null,Ed=null,Rl=null,Td=!1;function Jy(r,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Td||Wa==null||Wa!==qs(l)||(l=Wa,"selectionStart"in l&&vd(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Rl&&Sl(Rl,l)||(Rl=l,l=Th(Ed,"onSelect"),0<l.length&&(i=new Fa("onSelect","select",null,i,a),r.push({event:i,listeners:l}),i.target=Wa)))}function Js(r,i){var a={};return a[r.toLowerCase()]=i.toLowerCase(),a["Webkit"+r]="webkit"+i,a["Moz"+r]="moz"+i,a}var Za={animationend:Js("Animation","AnimationEnd"),animationiteration:Js("Animation","AnimationIteration"),animationstart:Js("Animation","AnimationStart"),transitionrun:Js("Transition","TransitionRun"),transitionstart:Js("Transition","TransitionStart"),transitioncancel:Js("Transition","TransitionCancel"),transitionend:Js("Transition","TransitionEnd")},bd={},e_={};Zn&&(e_=document.createElement("div").style,"AnimationEvent"in window||(delete Za.animationend.animation,delete Za.animationiteration.animation,delete Za.animationstart.animation),"TransitionEvent"in window||delete Za.transitionend.transition);function ea(r){if(bd[r])return bd[r];if(!Za[r])return r;var i=Za[r],a;for(a in i)if(i.hasOwnProperty(a)&&a in e_)return bd[r]=i[a];return r}var t_=ea("animationend"),n_=ea("animationiteration"),r_=ea("animationstart"),HR=ea("transitionrun"),GR=ea("transitionstart"),$R=ea("transitioncancel"),i_=ea("transitionend"),s_=new Map,wd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");wd.push("scrollEnd");function Jn(r,i){s_.set(r,i),Wn(i,[r])}var a_=new WeakMap;function Vn(r,i){if(typeof r=="object"&&r!==null){var a=a_.get(r);return a!==void 0?a:(i={value:r,source:i,stack:Ba(i)},a_.set(r,i),i)}return{value:r,source:i,stack:Ba(i)}}var Ln=[],Ja=0,Ad=0;function Lc(){for(var r=Ja,i=Ad=Ja=0;i<r;){var a=Ln[i];Ln[i++]=null;var l=Ln[i];Ln[i++]=null;var f=Ln[i];Ln[i++]=null;var m=Ln[i];if(Ln[i++]=null,l!==null&&f!==null){var v=l.pending;v===null?f.next=f:(f.next=v.next,v.next=f),l.pending=f}m!==0&&o_(a,f,m)}}function Uc(r,i,a,l){Ln[Ja++]=r,Ln[Ja++]=i,Ln[Ja++]=a,Ln[Ja++]=l,Ad|=l,r.lanes|=l,r=r.alternate,r!==null&&(r.lanes|=l)}function Sd(r,i,a,l){return Uc(r,i,a,l),zc(r)}function eo(r,i){return Uc(r,null,null,i),zc(r)}function o_(r,i,a){r.lanes|=a;var l=r.alternate;l!==null&&(l.lanes|=a);for(var f=!1,m=r.return;m!==null;)m.childLanes|=a,l=m.alternate,l!==null&&(l.childLanes|=a),m.tag===22&&(r=m.stateNode,r===null||r._visibility&1||(f=!0)),r=m,m=m.return;return r.tag===3?(m=r.stateNode,f&&i!==null&&(f=31-Kt(a),r=m.hiddenUpdates,l=r[f],l===null?r[f]=[i]:l.push(i),i.lane=a|536870912),m):null}function zc(r){if(50<Wl)throw Wl=0,Om=null,Error(s(185));for(var i=r.return;i!==null;)r=i,i=r.return;return r.tag===3?r.stateNode:null}var to={};function KR(r,i,a,l){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vn(r,i,a,l){return new KR(r,i,a,l)}function Rd(r){return r=r.prototype,!(!r||!r.isReactComponent)}function Jr(r,i){var a=r.alternate;return a===null?(a=vn(r.tag,i,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=i,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&65011712,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,i=r.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a.refCleanup=r.refCleanup,a}function l_(r,i){r.flags&=65011714;var a=r.alternate;return a===null?(r.childLanes=0,r.lanes=i,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=a.childLanes,r.lanes=a.lanes,r.child=a.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=a.memoizedProps,r.memoizedState=a.memoizedState,r.updateQueue=a.updateQueue,r.type=a.type,i=a.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),r}function Bc(r,i,a,l,f,m){var v=0;if(l=r,typeof r=="function")Rd(r)&&(v=1);else if(typeof r=="string")v=YI(r,a,gt.current)?26:r==="html"||r==="head"||r==="body"?27:5;else e:switch(r){case R:return r=vn(31,a,i,f),r.elementType=R,r.lanes=m,r;case x:return ta(a.children,f,m,i);case j:v=8,f|=24;break;case V:return r=vn(12,a,i,f|2),r.elementType=V,r.lanes=m,r;case ae:return r=vn(13,a,i,f),r.elementType=ae,r.lanes=m,r;case fe:return r=vn(19,a,i,f),r.elementType=fe,r.lanes=m,r;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case G:case ee:v=10;break e;case te:v=9;break e;case oe:v=11;break e;case D:v=14;break e;case S:v=16,l=null;break e}v=29,a=Error(s(130,r===null?"null":typeof r,"")),l=null}return i=vn(v,a,i,f),i.elementType=r,i.type=l,i.lanes=m,i}function ta(r,i,a,l){return r=vn(7,r,l,i),r.lanes=a,r}function Id(r,i,a){return r=vn(6,r,null,i),r.lanes=a,r}function Cd(r,i,a){return i=vn(4,r.children!==null?r.children:[],r.key,i),i.lanes=a,i.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},i}var no=[],ro=0,jc=null,qc=0,Un=[],zn=0,na=null,ei=1,ti="";function ra(r,i){no[ro++]=qc,no[ro++]=jc,jc=r,qc=i}function u_(r,i,a){Un[zn++]=ei,Un[zn++]=ti,Un[zn++]=na,na=r;var l=ei;r=ti;var f=32-Kt(l)-1;l&=~(1<<f),a+=1;var m=32-Kt(i)+f;if(30<m){var v=f-f%5;m=(l&(1<<v)-1).toString(32),l>>=v,f-=v,ei=1<<32-Kt(i)+f|a<<f|l,ti=m+r}else ei=1<<m|a<<f|l,ti=r}function Nd(r){r.return!==null&&(ra(r,1),u_(r,1,0))}function Dd(r){for(;r===jc;)jc=no[--ro],no[ro]=null,qc=no[--ro],no[ro]=null;for(;r===na;)na=Un[--zn],Un[zn]=null,ti=Un[--zn],Un[zn]=null,ei=Un[--zn],Un[zn]=null}var sn=null,at=null,Le=!1,ia=null,Tr=!1,Od=Error(s(519));function sa(r){var i=Error(s(418,""));throw Nl(Vn(i,r)),Od}function c_(r){var i=r.stateNode,a=r.type,l=r.memoizedProps;switch(i[At]=r,i[yt]=l,a){case"dialog":Se("cancel",i),Se("close",i);break;case"iframe":case"object":case"embed":Se("load",i);break;case"video":case"audio":for(a=0;a<Jl.length;a++)Se(Jl[a],i);break;case"source":Se("error",i);break;case"img":case"image":case"link":Se("error",i),Se("load",i);break;case"details":Se("toggle",i);break;case"input":Se("invalid",i),Fs(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),ja(i);break;case"select":Se("invalid",i);break;case"textarea":Se("invalid",i),Hs(i,l.value,l.defaultValue,l.children),ja(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||IE(i.textContent,a)?(l.popover!=null&&(Se("beforetoggle",i),Se("toggle",i)),l.onScroll!=null&&Se("scroll",i),l.onScrollEnd!=null&&Se("scrollend",i),l.onClick!=null&&(i.onclick=bh),i=!0):i=!1,i||sa(r)}function h_(r){for(sn=r.return;sn;)switch(sn.tag){case 5:case 13:Tr=!1;return;case 27:case 3:Tr=!0;return;default:sn=sn.return}}function Il(r){if(r!==sn)return!1;if(!Le)return h_(r),Le=!0,!1;var i=r.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=r.type,a=!(a!=="form"&&a!=="button")||Km(r.type,r.memoizedProps)),a=!a),a&&at&&sa(r),h_(r),i===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(s(317));e:{for(r=r.nextSibling,i=0;r;){if(r.nodeType===8)if(a=r.data,a==="/$"){if(i===0){at=tr(r.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;r=r.nextSibling}at=null}}else i===27?(i=at,Xi(r.type)?(r=Wm,Wm=null,at=r):at=i):at=sn?tr(r.stateNode.nextSibling):null;return!0}function Cl(){at=sn=null,Le=!1}function f_(){var r=ia;return r!==null&&(fn===null?fn=r:fn.push.apply(fn,r),ia=null),r}function Nl(r){ia===null?ia=[r]:ia.push(r)}var Md=Ke(null),aa=null,ni=null;function ki(r,i,a){_e(Md,i._currentValue),i._currentValue=a}function ri(r){r._currentValue=Md.current,Pe(Md)}function xd(r,i,a){for(;r!==null;){var l=r.alternate;if((r.childLanes&i)!==i?(r.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),r===a)break;r=r.return}}function Pd(r,i,a,l){var f=r.child;for(f!==null&&(f.return=r);f!==null;){var m=f.dependencies;if(m!==null){var v=f.child;m=m.firstContext;e:for(;m!==null;){var T=m;m=f;for(var I=0;I<i.length;I++)if(T.context===i[I]){m.lanes|=a,T=m.alternate,T!==null&&(T.lanes|=a),xd(m.return,a,r),l||(v=null);break e}m=T.next}}else if(f.tag===18){if(v=f.return,v===null)throw Error(s(341));v.lanes|=a,m=v.alternate,m!==null&&(m.lanes|=a),xd(v,a,r),v=null}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===r){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}}function Dl(r,i,a,l){r=null;for(var f=i,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var v=f.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var T=f.type;_n(f.pendingProps.value,v.value)||(r!==null?r.push(T):r=[T])}}else if(f===zr.current){if(v=f.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(r!==null?r.push(su):r=[su])}f=f.return}r!==null&&Pd(i,r,a,l),i.flags|=262144}function Fc(r){for(r=r.firstContext;r!==null;){if(!_n(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function oa(r){aa=r,ni=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function Qt(r){return d_(aa,r)}function Hc(r,i){return aa===null&&oa(r),d_(r,i)}function d_(r,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},ni===null){if(r===null)throw Error(s(308));ni=i,r.dependencies={lanes:0,firstContext:i},r.flags|=524288}else ni=ni.next=i;return a}var QR=typeof AbortController<"u"?AbortController:function(){var r=[],i=this.signal={aborted:!1,addEventListener:function(a,l){r.push(l)}};this.abort=function(){i.aborted=!0,r.forEach(function(a){return a()})}},YR=n.unstable_scheduleCallback,XR=n.unstable_NormalPriority,It={$$typeof:ee,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function kd(){return{controller:new QR,data:new Map,refCount:0}}function Ol(r){r.refCount--,r.refCount===0&&YR(XR,function(){r.controller.abort()})}var Ml=null,Vd=0,io=0,so=null;function WR(r,i){if(Ml===null){var a=Ml=[];Vd=0,io=Um(),so={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Vd++,i.then(m_,m_),i}function m_(){if(--Vd===0&&Ml!==null){so!==null&&(so.status="fulfilled");var r=Ml;Ml=null,io=0,so=null;for(var i=0;i<r.length;i++)(0,r[i])()}}function ZR(r,i){var a=[],l={status:"pending",value:null,reason:null,then:function(f){a.push(f)}};return r.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<a.length;f++)(0,a[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<a.length;f++)(0,a[f])(void 0)}),l}var p_=K.S;K.S=function(r,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&WR(r,i),p_!==null&&p_(r,i)};var la=Ke(null);function Ld(){var r=la.current;return r!==null?r:Xe.pooledCache}function Gc(r,i){i===null?_e(la,la.current):_e(la,i.pool)}function g_(){var r=Ld();return r===null?null:{parent:It._currentValue,pool:r}}var xl=Error(s(460)),y_=Error(s(474)),$c=Error(s(542)),Ud={then:function(){}};function __(r){return r=r.status,r==="fulfilled"||r==="rejected"}function Kc(){}function v_(r,i,a){switch(a=r[a],a===void 0?r.push(i):a!==i&&(i.then(Kc,Kc),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw r=i.reason,T_(r),r;default:if(typeof i.status=="string")i.then(Kc,Kc);else{if(r=Xe,r!==null&&100<r.shellSuspendCounter)throw Error(s(482));r=i,r.status="pending",r.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw r=i.reason,T_(r),r}throw Pl=i,xl}}var Pl=null;function E_(){if(Pl===null)throw Error(s(459));var r=Pl;return Pl=null,r}function T_(r){if(r===xl||r===$c)throw Error(s(483))}var Vi=!1;function zd(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bd(r,i){r=r.updateQueue,i.updateQueue===r&&(i.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function Li(r){return{lane:r,tag:0,payload:null,callback:null,next:null}}function Ui(r,i,a){var l=r.updateQueue;if(l===null)return null;if(l=l.shared,(je&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=zc(r),o_(r,null,a),i}return Uc(r,l,i,a),zc(r)}function kl(r,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=r.pendingLanes,a|=l,i.lanes=a,ul(r,a)}}function jd(r,i){var a=r.updateQueue,l=r.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var f=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};m===null?f=m=v:m=m.next=v,a=a.next}while(a!==null);m===null?f=m=i:m=m.next=i}else f=m=i;a={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=i:r.next=i,a.lastBaseUpdate=i}var qd=!1;function Vl(){if(qd){var r=so;if(r!==null)throw r}}function Ll(r,i,a,l){qd=!1;var f=r.updateQueue;Vi=!1;var m=f.firstBaseUpdate,v=f.lastBaseUpdate,T=f.shared.pending;if(T!==null){f.shared.pending=null;var I=T,B=I.next;I.next=null,v===null?m=B:v.next=B,v=I;var Q=r.alternate;Q!==null&&(Q=Q.updateQueue,T=Q.lastBaseUpdate,T!==v&&(T===null?Q.firstBaseUpdate=B:T.next=B,Q.lastBaseUpdate=I))}if(m!==null){var W=f.baseState;v=0,Q=B=I=null,T=m;do{var q=T.lane&-536870913,F=q!==T.lane;if(F?(Me&q)===q:(l&q)===q){q!==0&&q===io&&(qd=!0),Q!==null&&(Q=Q.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var ye=r,de=T;q=i;var $e=a;switch(de.tag){case 1:if(ye=de.payload,typeof ye=="function"){W=ye.call($e,W,q);break e}W=ye;break e;case 3:ye.flags=ye.flags&-65537|128;case 0:if(ye=de.payload,q=typeof ye=="function"?ye.call($e,W,q):ye,q==null)break e;W=E({},W,q);break e;case 2:Vi=!0}}q=T.callback,q!==null&&(r.flags|=64,F&&(r.flags|=8192),F=f.callbacks,F===null?f.callbacks=[q]:F.push(q))}else F={lane:q,tag:T.tag,payload:T.payload,callback:T.callback,next:null},Q===null?(B=Q=F,I=W):Q=Q.next=F,v|=q;if(T=T.next,T===null){if(T=f.shared.pending,T===null)break;F=T,T=F.next,F.next=null,f.lastBaseUpdate=F,f.shared.pending=null}}while(!0);Q===null&&(I=W),f.baseState=I,f.firstBaseUpdate=B,f.lastBaseUpdate=Q,m===null&&(f.shared.lanes=0),$i|=v,r.lanes=v,r.memoizedState=W}}function b_(r,i){if(typeof r!="function")throw Error(s(191,r));r.call(i)}function w_(r,i){var a=r.callbacks;if(a!==null)for(r.callbacks=null,r=0;r<a.length;r++)b_(a[r],i)}var ao=Ke(null),Qc=Ke(0);function A_(r,i){r=ci,_e(Qc,r),_e(ao,i),ci=r|i.baseLanes}function Fd(){_e(Qc,ci),_e(ao,ao.current)}function Hd(){ci=Qc.current,Pe(ao),Pe(Qc)}var zi=0,be=null,He=null,vt=null,Yc=!1,oo=!1,ua=!1,Xc=0,Ul=0,lo=null,JR=0;function ft(){throw Error(s(321))}function Gd(r,i){if(i===null)return!1;for(var a=0;a<i.length&&a<r.length;a++)if(!_n(r[a],i[a]))return!1;return!0}function $d(r,i,a,l,f,m){return zi=m,be=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,K.H=r===null||r.memoizedState===null?ov:lv,ua=!1,m=a(l,f),ua=!1,oo&&(m=R_(i,a,l,f)),S_(r),m}function S_(r){K.H=nh;var i=He!==null&&He.next!==null;if(zi=0,vt=He=be=null,Yc=!1,Ul=0,lo=null,i)throw Error(s(300));r===null||Pt||(r=r.dependencies,r!==null&&Fc(r)&&(Pt=!0))}function R_(r,i,a,l){be=r;var f=0;do{if(oo&&(lo=null),Ul=0,oo=!1,25<=f)throw Error(s(301));if(f+=1,vt=He=null,r.updateQueue!=null){var m=r.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}K.H=aI,m=i(a,l)}while(oo);return m}function eI(){var r=K.H,i=r.useState()[0];return i=typeof i.then=="function"?zl(i):i,r=r.useState()[0],(He!==null?He.memoizedState:null)!==r&&(be.flags|=1024),i}function Kd(){var r=Xc!==0;return Xc=0,r}function Qd(r,i,a){i.updateQueue=r.updateQueue,i.flags&=-2053,r.lanes&=~a}function Yd(r){if(Yc){for(r=r.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Yc=!1}zi=0,vt=He=be=null,oo=!1,Ul=Xc=0,lo=null}function cn(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vt===null?be.memoizedState=vt=r:vt=vt.next=r,vt}function Et(){if(He===null){var r=be.alternate;r=r!==null?r.memoizedState:null}else r=He.next;var i=vt===null?be.memoizedState:vt.next;if(i!==null)vt=i,He=r;else{if(r===null)throw be.alternate===null?Error(s(467)):Error(s(310));He=r,r={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},vt===null?be.memoizedState=vt=r:vt=vt.next=r}return vt}function Xd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function zl(r){var i=Ul;return Ul+=1,lo===null&&(lo=[]),r=v_(lo,r,i),i=be,(vt===null?i.memoizedState:vt.next)===null&&(i=i.alternate,K.H=i===null||i.memoizedState===null?ov:lv),r}function Wc(r){if(r!==null&&typeof r=="object"){if(typeof r.then=="function")return zl(r);if(r.$$typeof===ee)return Qt(r)}throw Error(s(438,String(r)))}function Wd(r){var i=null,a=be.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=be.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=Xd(),be.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(r),l=0;l<r;l++)a[l]=O;return i.index++,a}function ii(r,i){return typeof i=="function"?i(r):i}function Zc(r){var i=Et();return Zd(i,He,r)}function Zd(r,i,a){var l=r.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var f=r.baseQueue,m=l.pending;if(m!==null){if(f!==null){var v=f.next;f.next=m.next,m.next=v}i.baseQueue=f=m,l.pending=null}if(m=r.baseState,f===null)r.memoizedState=m;else{i=f.next;var T=v=null,I=null,B=i,Q=!1;do{var W=B.lane&-536870913;if(W!==B.lane?(Me&W)===W:(zi&W)===W){var q=B.revertLane;if(q===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),W===io&&(Q=!0);else if((zi&q)===q){B=B.next,q===io&&(Q=!0);continue}else W={lane:0,revertLane:B.revertLane,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},I===null?(T=I=W,v=m):I=I.next=W,be.lanes|=q,$i|=q;W=B.action,ua&&a(m,W),m=B.hasEagerState?B.eagerState:a(m,W)}else q={lane:W,revertLane:B.revertLane,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},I===null?(T=I=q,v=m):I=I.next=q,be.lanes|=W,$i|=W;B=B.next}while(B!==null&&B!==i);if(I===null?v=m:I.next=T,!_n(m,r.memoizedState)&&(Pt=!0,Q&&(a=so,a!==null)))throw a;r.memoizedState=m,r.baseState=v,r.baseQueue=I,l.lastRenderedState=m}return f===null&&(l.lanes=0),[r.memoizedState,l.dispatch]}function Jd(r){var i=Et(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=r;var l=a.dispatch,f=a.pending,m=i.memoizedState;if(f!==null){a.pending=null;var v=f=f.next;do m=r(m,v.action),v=v.next;while(v!==f);_n(m,i.memoizedState)||(Pt=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,l]}function I_(r,i,a){var l=be,f=Et(),m=Le;if(m){if(a===void 0)throw Error(s(407));a=a()}else a=i();var v=!_n((He||f).memoizedState,a);v&&(f.memoizedState=a,Pt=!0),f=f.queue;var T=D_.bind(null,l,f,r);if(Bl(2048,8,T,[r]),f.getSnapshot!==i||v||vt!==null&&vt.memoizedState.tag&1){if(l.flags|=2048,uo(9,Jc(),N_.bind(null,l,f,a,i),null),Xe===null)throw Error(s(349));m||(zi&124)!==0||C_(l,i,a)}return a}function C_(r,i,a){r.flags|=16384,r={getSnapshot:i,value:a},i=be.updateQueue,i===null?(i=Xd(),be.updateQueue=i,i.stores=[r]):(a=i.stores,a===null?i.stores=[r]:a.push(r))}function N_(r,i,a,l){i.value=a,i.getSnapshot=l,O_(i)&&M_(r)}function D_(r,i,a){return a(function(){O_(i)&&M_(r)})}function O_(r){var i=r.getSnapshot;r=r.value;try{var a=i();return!_n(r,a)}catch{return!0}}function M_(r){var i=eo(r,2);i!==null&&An(i,r,2)}function em(r){var i=cn();if(typeof r=="function"){var a=r;if(r=a(),ua){gn(!0);try{a()}finally{gn(!1)}}}return i.memoizedState=i.baseState=r,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ii,lastRenderedState:r},i}function x_(r,i,a,l){return r.baseState=a,Zd(r,He,typeof l=="function"?l:ii)}function tI(r,i,a,l,f){if(th(r))throw Error(s(485));if(r=i.action,r!==null){var m={payload:f,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){m.listeners.push(v)}};K.T!==null?a(!0):m.isTransition=!1,l(m),a=i.pending,a===null?(m.next=i.pending=m,P_(i,m)):(m.next=a.next,i.pending=a.next=m)}}function P_(r,i){var a=i.action,l=i.payload,f=r.state;if(i.isTransition){var m=K.T,v={};K.T=v;try{var T=a(f,l),I=K.S;I!==null&&I(v,T),k_(r,i,T)}catch(B){tm(r,i,B)}finally{K.T=m}}else try{m=a(f,l),k_(r,i,m)}catch(B){tm(r,i,B)}}function k_(r,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){V_(r,i,l)},function(l){return tm(r,i,l)}):V_(r,i,a)}function V_(r,i,a){i.status="fulfilled",i.value=a,L_(i),r.state=a,i=r.pending,i!==null&&(a=i.next,a===i?r.pending=null:(a=a.next,i.next=a,P_(r,a)))}function tm(r,i,a){var l=r.pending;if(r.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,L_(i),i=i.next;while(i!==l)}r.action=null}function L_(r){r=r.listeners;for(var i=0;i<r.length;i++)(0,r[i])()}function U_(r,i){return i}function z_(r,i){if(Le){var a=Xe.formState;if(a!==null){e:{var l=be;if(Le){if(at){t:{for(var f=at,m=Tr;f.nodeType!==8;){if(!m){f=null;break t}if(f=tr(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){at=tr(f.nextSibling),l=f.data==="F!";break e}}sa(l)}l=!1}l&&(i=a[0])}}return a=cn(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:U_,lastRenderedState:i},a.queue=l,a=iv.bind(null,be,l),l.dispatch=a,l=em(!1),m=am.bind(null,be,!1,l.queue),l=cn(),f={state:i,dispatch:null,action:r,pending:null},l.queue=f,a=tI.bind(null,be,f,m,a),f.dispatch=a,l.memoizedState=r,[i,a,!1]}function B_(r){var i=Et();return j_(i,He,r)}function j_(r,i,a){if(i=Zd(r,i,U_)[0],r=Zc(ii)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=zl(i)}catch(v){throw v===xl?$c:v}else l=i;i=Et();var f=i.queue,m=f.dispatch;return a!==i.memoizedState&&(be.flags|=2048,uo(9,Jc(),nI.bind(null,f,a),null)),[l,m,r]}function nI(r,i){r.action=i}function q_(r){var i=Et(),a=He;if(a!==null)return j_(i,a,r);Et(),i=i.memoizedState,a=Et();var l=a.queue.dispatch;return a.memoizedState=r,[i,l,!1]}function uo(r,i,a,l){return r={tag:r,create:a,deps:l,inst:i,next:null},i=be.updateQueue,i===null&&(i=Xd(),be.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=r.next=r:(l=a.next,a.next=r,r.next=l,i.lastEffect=r),r}function Jc(){return{destroy:void 0,resource:void 0}}function F_(){return Et().memoizedState}function eh(r,i,a,l){var f=cn();l=l===void 0?null:l,be.flags|=r,f.memoizedState=uo(1|i,Jc(),a,l)}function Bl(r,i,a,l){var f=Et();l=l===void 0?null:l;var m=f.memoizedState.inst;He!==null&&l!==null&&Gd(l,He.memoizedState.deps)?f.memoizedState=uo(i,m,a,l):(be.flags|=r,f.memoizedState=uo(1|i,m,a,l))}function H_(r,i){eh(8390656,8,r,i)}function G_(r,i){Bl(2048,8,r,i)}function $_(r,i){return Bl(4,2,r,i)}function K_(r,i){return Bl(4,4,r,i)}function Q_(r,i){if(typeof i=="function"){r=r();var a=i(r);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return r=r(),i.current=r,function(){i.current=null}}function Y_(r,i,a){a=a!=null?a.concat([r]):null,Bl(4,4,Q_.bind(null,i,r),a)}function nm(){}function X_(r,i){var a=Et();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&Gd(i,l[1])?l[0]:(a.memoizedState=[r,i],r)}function W_(r,i){var a=Et();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&Gd(i,l[1]))return l[0];if(l=r(),ua){gn(!0);try{r()}finally{gn(!1)}}return a.memoizedState=[l,i],l}function rm(r,i,a){return a===void 0||(zi&1073741824)!==0?r.memoizedState=i:(r.memoizedState=a,r=eE(),be.lanes|=r,$i|=r,a)}function Z_(r,i,a,l){return _n(a,i)?a:ao.current!==null?(r=rm(r,a,l),_n(r,i)||(Pt=!0),r):(zi&42)===0?(Pt=!0,r.memoizedState=a):(r=eE(),be.lanes|=r,$i|=r,i)}function J_(r,i,a,l,f){var m=re.p;re.p=m!==0&&8>m?m:8;var v=K.T,T={};K.T=T,am(r,!1,i,a);try{var I=f(),B=K.S;if(B!==null&&B(T,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var Q=ZR(I,l);jl(r,i,Q,wn(r))}else jl(r,i,l,wn(r))}catch(W){jl(r,i,{then:function(){},status:"rejected",reason:W},wn())}finally{re.p=m,K.T=v}}function rI(){}function im(r,i,a,l){if(r.tag!==5)throw Error(s(476));var f=ev(r).queue;J_(r,f,i,ce,a===null?rI:function(){return tv(r),a(l)})}function ev(r){var i=r.memoizedState;if(i!==null)return i;i={memoizedState:ce,baseState:ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ii,lastRenderedState:ce},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ii,lastRenderedState:a},next:null},r.memoizedState=i,r=r.alternate,r!==null&&(r.memoizedState=i),i}function tv(r){var i=ev(r).next.queue;jl(r,i,{},wn())}function sm(){return Qt(su)}function nv(){return Et().memoizedState}function rv(){return Et().memoizedState}function iI(r){for(var i=r.return;i!==null;){switch(i.tag){case 24:case 3:var a=wn();r=Li(a);var l=Ui(i,r,a);l!==null&&(An(l,i,a),kl(l,i,a)),i={cache:kd()},r.payload=i;return}i=i.return}}function sI(r,i,a){var l=wn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},th(r)?sv(i,a):(a=Sd(r,i,a,l),a!==null&&(An(a,r,l),av(a,i,l)))}function iv(r,i,a){var l=wn();jl(r,i,a,l)}function jl(r,i,a,l){var f={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(th(r))sv(i,f);else{var m=r.alternate;if(r.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var v=i.lastRenderedState,T=m(v,a);if(f.hasEagerState=!0,f.eagerState=T,_n(T,v))return Uc(r,i,f,0),Xe===null&&Lc(),!1}catch{}finally{}if(a=Sd(r,i,f,l),a!==null)return An(a,r,l),av(a,i,l),!0}return!1}function am(r,i,a,l){if(l={lane:2,revertLane:Um(),action:l,hasEagerState:!1,eagerState:null,next:null},th(r)){if(i)throw Error(s(479))}else i=Sd(r,a,l,2),i!==null&&An(i,r,2)}function th(r){var i=r.alternate;return r===be||i!==null&&i===be}function sv(r,i){oo=Yc=!0;var a=r.pending;a===null?i.next=i:(i.next=a.next,a.next=i),r.pending=i}function av(r,i,a){if((a&4194048)!==0){var l=i.lanes;l&=r.pendingLanes,a|=l,i.lanes=a,ul(r,a)}}var nh={readContext:Qt,use:Wc,useCallback:ft,useContext:ft,useEffect:ft,useImperativeHandle:ft,useLayoutEffect:ft,useInsertionEffect:ft,useMemo:ft,useReducer:ft,useRef:ft,useState:ft,useDebugValue:ft,useDeferredValue:ft,useTransition:ft,useSyncExternalStore:ft,useId:ft,useHostTransitionStatus:ft,useFormState:ft,useActionState:ft,useOptimistic:ft,useMemoCache:ft,useCacheRefresh:ft},ov={readContext:Qt,use:Wc,useCallback:function(r,i){return cn().memoizedState=[r,i===void 0?null:i],r},useContext:Qt,useEffect:H_,useImperativeHandle:function(r,i,a){a=a!=null?a.concat([r]):null,eh(4194308,4,Q_.bind(null,i,r),a)},useLayoutEffect:function(r,i){return eh(4194308,4,r,i)},useInsertionEffect:function(r,i){eh(4,2,r,i)},useMemo:function(r,i){var a=cn();i=i===void 0?null:i;var l=r();if(ua){gn(!0);try{r()}finally{gn(!1)}}return a.memoizedState=[l,i],l},useReducer:function(r,i,a){var l=cn();if(a!==void 0){var f=a(i);if(ua){gn(!0);try{a(i)}finally{gn(!1)}}}else f=i;return l.memoizedState=l.baseState=f,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:f},l.queue=r,r=r.dispatch=sI.bind(null,be,r),[l.memoizedState,r]},useRef:function(r){var i=cn();return r={current:r},i.memoizedState=r},useState:function(r){r=em(r);var i=r.queue,a=iv.bind(null,be,i);return i.dispatch=a,[r.memoizedState,a]},useDebugValue:nm,useDeferredValue:function(r,i){var a=cn();return rm(a,r,i)},useTransition:function(){var r=em(!1);return r=J_.bind(null,be,r.queue,!0,!1),cn().memoizedState=r,[!1,r]},useSyncExternalStore:function(r,i,a){var l=be,f=cn();if(Le){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),Xe===null)throw Error(s(349));(Me&124)!==0||C_(l,i,a)}f.memoizedState=a;var m={value:a,getSnapshot:i};return f.queue=m,H_(D_.bind(null,l,m,r),[r]),l.flags|=2048,uo(9,Jc(),N_.bind(null,l,m,a,i),null),a},useId:function(){var r=cn(),i=Xe.identifierPrefix;if(Le){var a=ti,l=ei;a=(l&~(1<<32-Kt(l)-1)).toString(32)+a,i="«"+i+"R"+a,a=Xc++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=JR++,i="«"+i+"r"+a.toString(32)+"»";return r.memoizedState=i},useHostTransitionStatus:sm,useFormState:z_,useActionState:z_,useOptimistic:function(r){var i=cn();i.memoizedState=i.baseState=r;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=am.bind(null,be,!0,a),a.dispatch=i,[r,i]},useMemoCache:Wd,useCacheRefresh:function(){return cn().memoizedState=iI.bind(null,be)}},lv={readContext:Qt,use:Wc,useCallback:X_,useContext:Qt,useEffect:G_,useImperativeHandle:Y_,useInsertionEffect:$_,useLayoutEffect:K_,useMemo:W_,useReducer:Zc,useRef:F_,useState:function(){return Zc(ii)},useDebugValue:nm,useDeferredValue:function(r,i){var a=Et();return Z_(a,He.memoizedState,r,i)},useTransition:function(){var r=Zc(ii)[0],i=Et().memoizedState;return[typeof r=="boolean"?r:zl(r),i]},useSyncExternalStore:I_,useId:nv,useHostTransitionStatus:sm,useFormState:B_,useActionState:B_,useOptimistic:function(r,i){var a=Et();return x_(a,He,r,i)},useMemoCache:Wd,useCacheRefresh:rv},aI={readContext:Qt,use:Wc,useCallback:X_,useContext:Qt,useEffect:G_,useImperativeHandle:Y_,useInsertionEffect:$_,useLayoutEffect:K_,useMemo:W_,useReducer:Jd,useRef:F_,useState:function(){return Jd(ii)},useDebugValue:nm,useDeferredValue:function(r,i){var a=Et();return He===null?rm(a,r,i):Z_(a,He.memoizedState,r,i)},useTransition:function(){var r=Jd(ii)[0],i=Et().memoizedState;return[typeof r=="boolean"?r:zl(r),i]},useSyncExternalStore:I_,useId:nv,useHostTransitionStatus:sm,useFormState:q_,useActionState:q_,useOptimistic:function(r,i){var a=Et();return He!==null?x_(a,He,r,i):(a.baseState=r,[r,a.queue.dispatch])},useMemoCache:Wd,useCacheRefresh:rv},co=null,ql=0;function rh(r){var i=ql;return ql+=1,co===null&&(co=[]),v_(co,r,i)}function Fl(r,i){i=i.props.ref,r.ref=i!==void 0?i:null}function ih(r,i){throw i.$$typeof===w?Error(s(525)):(r=Object.prototype.toString.call(i),Error(s(31,r==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":r)))}function uv(r){var i=r._init;return i(r._payload)}function cv(r){function i(L,N){if(r){var z=L.deletions;z===null?(L.deletions=[N],L.flags|=16):z.push(N)}}function a(L,N){if(!r)return null;for(;N!==null;)i(L,N),N=N.sibling;return null}function l(L){for(var N=new Map;L!==null;)L.key!==null?N.set(L.key,L):N.set(L.index,L),L=L.sibling;return N}function f(L,N){return L=Jr(L,N),L.index=0,L.sibling=null,L}function m(L,N,z){return L.index=z,r?(z=L.alternate,z!==null?(z=z.index,z<N?(L.flags|=67108866,N):z):(L.flags|=67108866,N)):(L.flags|=1048576,N)}function v(L){return r&&L.alternate===null&&(L.flags|=67108866),L}function T(L,N,z,Y){return N===null||N.tag!==6?(N=Id(z,L.mode,Y),N.return=L,N):(N=f(N,z),N.return=L,N)}function I(L,N,z,Y){var le=z.type;return le===x?Q(L,N,z.props.children,Y,z.key):N!==null&&(N.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===S&&uv(le)===N.type)?(N=f(N,z.props),Fl(N,z),N.return=L,N):(N=Bc(z.type,z.key,z.props,null,L.mode,Y),Fl(N,z),N.return=L,N)}function B(L,N,z,Y){return N===null||N.tag!==4||N.stateNode.containerInfo!==z.containerInfo||N.stateNode.implementation!==z.implementation?(N=Cd(z,L.mode,Y),N.return=L,N):(N=f(N,z.children||[]),N.return=L,N)}function Q(L,N,z,Y,le){return N===null||N.tag!==7?(N=ta(z,L.mode,Y,le),N.return=L,N):(N=f(N,z),N.return=L,N)}function W(L,N,z){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=Id(""+N,L.mode,z),N.return=L,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case A:return z=Bc(N.type,N.key,N.props,null,L.mode,z),Fl(z,N),z.return=L,z;case k:return N=Cd(N,L.mode,z),N.return=L,N;case S:var Y=N._init;return N=Y(N._payload),W(L,N,z)}if(Ot(N)||M(N))return N=ta(N,L.mode,z,null),N.return=L,N;if(typeof N.then=="function")return W(L,rh(N),z);if(N.$$typeof===ee)return W(L,Hc(L,N),z);ih(L,N)}return null}function q(L,N,z,Y){var le=N!==null?N.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return le!==null?null:T(L,N,""+z,Y);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case A:return z.key===le?I(L,N,z,Y):null;case k:return z.key===le?B(L,N,z,Y):null;case S:return le=z._init,z=le(z._payload),q(L,N,z,Y)}if(Ot(z)||M(z))return le!==null?null:Q(L,N,z,Y,null);if(typeof z.then=="function")return q(L,N,rh(z),Y);if(z.$$typeof===ee)return q(L,N,Hc(L,z),Y);ih(L,z)}return null}function F(L,N,z,Y,le){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return L=L.get(z)||null,T(N,L,""+Y,le);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case A:return L=L.get(Y.key===null?z:Y.key)||null,I(N,L,Y,le);case k:return L=L.get(Y.key===null?z:Y.key)||null,B(N,L,Y,le);case S:var we=Y._init;return Y=we(Y._payload),F(L,N,z,Y,le)}if(Ot(Y)||M(Y))return L=L.get(z)||null,Q(N,L,Y,le,null);if(typeof Y.then=="function")return F(L,N,z,rh(Y),le);if(Y.$$typeof===ee)return F(L,N,z,Hc(N,Y),le);ih(N,Y)}return null}function ye(L,N,z,Y){for(var le=null,we=null,ue=N,me=N=0,Vt=null;ue!==null&&me<z.length;me++){ue.index>me?(Vt=ue,ue=null):Vt=ue.sibling;var ke=q(L,ue,z[me],Y);if(ke===null){ue===null&&(ue=Vt);break}r&&ue&&ke.alternate===null&&i(L,ue),N=m(ke,N,me),we===null?le=ke:we.sibling=ke,we=ke,ue=Vt}if(me===z.length)return a(L,ue),Le&&ra(L,me),le;if(ue===null){for(;me<z.length;me++)ue=W(L,z[me],Y),ue!==null&&(N=m(ue,N,me),we===null?le=ue:we.sibling=ue,we=ue);return Le&&ra(L,me),le}for(ue=l(ue);me<z.length;me++)Vt=F(ue,L,me,z[me],Y),Vt!==null&&(r&&Vt.alternate!==null&&ue.delete(Vt.key===null?me:Vt.key),N=m(Vt,N,me),we===null?le=Vt:we.sibling=Vt,we=Vt);return r&&ue.forEach(function(ts){return i(L,ts)}),Le&&ra(L,me),le}function de(L,N,z,Y){if(z==null)throw Error(s(151));for(var le=null,we=null,ue=N,me=N=0,Vt=null,ke=z.next();ue!==null&&!ke.done;me++,ke=z.next()){ue.index>me?(Vt=ue,ue=null):Vt=ue.sibling;var ts=q(L,ue,ke.value,Y);if(ts===null){ue===null&&(ue=Vt);break}r&&ue&&ts.alternate===null&&i(L,ue),N=m(ts,N,me),we===null?le=ts:we.sibling=ts,we=ts,ue=Vt}if(ke.done)return a(L,ue),Le&&ra(L,me),le;if(ue===null){for(;!ke.done;me++,ke=z.next())ke=W(L,ke.value,Y),ke!==null&&(N=m(ke,N,me),we===null?le=ke:we.sibling=ke,we=ke);return Le&&ra(L,me),le}for(ue=l(ue);!ke.done;me++,ke=z.next())ke=F(ue,L,me,ke.value,Y),ke!==null&&(r&&ke.alternate!==null&&ue.delete(ke.key===null?me:ke.key),N=m(ke,N,me),we===null?le=ke:we.sibling=ke,we=ke);return r&&ue.forEach(function(o1){return i(L,o1)}),Le&&ra(L,me),le}function $e(L,N,z,Y){if(typeof z=="object"&&z!==null&&z.type===x&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case A:e:{for(var le=z.key;N!==null;){if(N.key===le){if(le=z.type,le===x){if(N.tag===7){a(L,N.sibling),Y=f(N,z.props.children),Y.return=L,L=Y;break e}}else if(N.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===S&&uv(le)===N.type){a(L,N.sibling),Y=f(N,z.props),Fl(Y,z),Y.return=L,L=Y;break e}a(L,N);break}else i(L,N);N=N.sibling}z.type===x?(Y=ta(z.props.children,L.mode,Y,z.key),Y.return=L,L=Y):(Y=Bc(z.type,z.key,z.props,null,L.mode,Y),Fl(Y,z),Y.return=L,L=Y)}return v(L);case k:e:{for(le=z.key;N!==null;){if(N.key===le)if(N.tag===4&&N.stateNode.containerInfo===z.containerInfo&&N.stateNode.implementation===z.implementation){a(L,N.sibling),Y=f(N,z.children||[]),Y.return=L,L=Y;break e}else{a(L,N);break}else i(L,N);N=N.sibling}Y=Cd(z,L.mode,Y),Y.return=L,L=Y}return v(L);case S:return le=z._init,z=le(z._payload),$e(L,N,z,Y)}if(Ot(z))return ye(L,N,z,Y);if(M(z)){if(le=M(z),typeof le!="function")throw Error(s(150));return z=le.call(z),de(L,N,z,Y)}if(typeof z.then=="function")return $e(L,N,rh(z),Y);if(z.$$typeof===ee)return $e(L,N,Hc(L,z),Y);ih(L,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,N!==null&&N.tag===6?(a(L,N.sibling),Y=f(N,z),Y.return=L,L=Y):(a(L,N),Y=Id(z,L.mode,Y),Y.return=L,L=Y),v(L)):a(L,N)}return function(L,N,z,Y){try{ql=0;var le=$e(L,N,z,Y);return co=null,le}catch(ue){if(ue===xl||ue===$c)throw ue;var we=vn(29,ue,null,L.mode);return we.lanes=Y,we.return=L,we}finally{}}}var ho=cv(!0),hv=cv(!1),Bn=Ke(null),br=null;function Bi(r){var i=r.alternate;_e(Ct,Ct.current&1),_e(Bn,r),br===null&&(i===null||ao.current!==null||i.memoizedState!==null)&&(br=r)}function fv(r){if(r.tag===22){if(_e(Ct,Ct.current),_e(Bn,r),br===null){var i=r.alternate;i!==null&&i.memoizedState!==null&&(br=r)}}else ji()}function ji(){_e(Ct,Ct.current),_e(Bn,Bn.current)}function si(r){Pe(Bn),br===r&&(br=null),Pe(Ct)}var Ct=Ke(0);function sh(r){for(var i=r;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Xm(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function om(r,i,a,l){i=r.memoizedState,a=a(l,i),a=a==null?i:E({},i,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var lm={enqueueSetState:function(r,i,a){r=r._reactInternals;var l=wn(),f=Li(l);f.payload=i,a!=null&&(f.callback=a),i=Ui(r,f,l),i!==null&&(An(i,r,l),kl(i,r,l))},enqueueReplaceState:function(r,i,a){r=r._reactInternals;var l=wn(),f=Li(l);f.tag=1,f.payload=i,a!=null&&(f.callback=a),i=Ui(r,f,l),i!==null&&(An(i,r,l),kl(i,r,l))},enqueueForceUpdate:function(r,i){r=r._reactInternals;var a=wn(),l=Li(a);l.tag=2,i!=null&&(l.callback=i),i=Ui(r,l,a),i!==null&&(An(i,r,a),kl(i,r,a))}};function dv(r,i,a,l,f,m,v){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(l,m,v):i.prototype&&i.prototype.isPureReactComponent?!Sl(a,l)||!Sl(f,m):!0}function mv(r,i,a,l){r=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==r&&lm.enqueueReplaceState(i,i.state,null)}function ca(r,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(r=r.defaultProps){a===i&&(a=E({},a));for(var f in r)a[f]===void 0&&(a[f]=r[f])}return a}var ah=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)};function pv(r){ah(r)}function gv(r){console.error(r)}function yv(r){ah(r)}function oh(r,i){try{var a=r.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function _v(r,i,a){try{var l=r.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function um(r,i,a){return a=Li(a),a.tag=3,a.payload={element:null},a.callback=function(){oh(r,i)},a}function vv(r){return r=Li(r),r.tag=3,r}function Ev(r,i,a,l){var f=a.type.getDerivedStateFromError;if(typeof f=="function"){var m=l.value;r.payload=function(){return f(m)},r.callback=function(){_v(i,a,l)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(r.callback=function(){_v(i,a,l),typeof f!="function"&&(Ki===null?Ki=new Set([this]):Ki.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function oI(r,i,a,l,f){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&Dl(i,a,f,!0),a=Bn.current,a!==null){switch(a.tag){case 13:return br===null?xm():a.alternate===null&&ot===0&&(ot=3),a.flags&=-257,a.flags|=65536,a.lanes=f,l===Ud?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),km(r,l,f)),!1;case 22:return a.flags|=65536,l===Ud?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),km(r,l,f)),!1}throw Error(s(435,a.tag))}return km(r,l,f),xm(),!1}if(Le)return i=Bn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==Od&&(r=Error(s(422),{cause:l}),Nl(Vn(r,a)))):(l!==Od&&(i=Error(s(423),{cause:l}),Nl(Vn(i,a))),r=r.current.alternate,r.flags|=65536,f&=-f,r.lanes|=f,l=Vn(l,a),f=um(r.stateNode,l,f),jd(r,f),ot!==4&&(ot=2)),!1;var m=Error(s(520),{cause:l});if(m=Vn(m,a),Xl===null?Xl=[m]:Xl.push(m),ot!==4&&(ot=2),i===null)return!0;l=Vn(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,r=f&-f,a.lanes|=r,r=um(a.stateNode,l,r),jd(a,r),!1;case 1:if(i=a.type,m=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ki===null||!Ki.has(m))))return a.flags|=65536,f&=-f,a.lanes|=f,f=vv(f),Ev(f,r,a,l),jd(a,f),!1}a=a.return}while(a!==null);return!1}var Tv=Error(s(461)),Pt=!1;function Bt(r,i,a,l){i.child=r===null?hv(i,null,a,l):ho(i,r.child,a,l)}function bv(r,i,a,l,f){a=a.render;var m=i.ref;if("ref"in l){var v={};for(var T in l)T!=="ref"&&(v[T]=l[T])}else v=l;return oa(i),l=$d(r,i,a,v,m,f),T=Kd(),r!==null&&!Pt?(Qd(r,i,f),ai(r,i,f)):(Le&&T&&Nd(i),i.flags|=1,Bt(r,i,l,f),i.child)}function wv(r,i,a,l,f){if(r===null){var m=a.type;return typeof m=="function"&&!Rd(m)&&m.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=m,Av(r,i,m,l,f)):(r=Bc(a.type,null,l,i,i.mode,f),r.ref=i.ref,r.return=i,i.child=r)}if(m=r.child,!ym(r,f)){var v=m.memoizedProps;if(a=a.compare,a=a!==null?a:Sl,a(v,l)&&r.ref===i.ref)return ai(r,i,f)}return i.flags|=1,r=Jr(m,l),r.ref=i.ref,r.return=i,i.child=r}function Av(r,i,a,l,f){if(r!==null){var m=r.memoizedProps;if(Sl(m,l)&&r.ref===i.ref)if(Pt=!1,i.pendingProps=l=m,ym(r,f))(r.flags&131072)!==0&&(Pt=!0);else return i.lanes=r.lanes,ai(r,i,f)}return cm(r,i,a,l,f)}function Sv(r,i,a){var l=i.pendingProps,f=l.children,m=r!==null?r.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=m!==null?m.baseLanes|a:a,r!==null){for(f=i.child=r.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;i.childLanes=m&~l}else i.childLanes=0,i.child=null;return Rv(r,i,l,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},r!==null&&Gc(i,m!==null?m.cachePool:null),m!==null?A_(i,m):Fd(),fv(i);else return i.lanes=i.childLanes=536870912,Rv(r,i,m!==null?m.baseLanes|a:a,a)}else m!==null?(Gc(i,m.cachePool),A_(i,m),ji(),i.memoizedState=null):(r!==null&&Gc(i,null),Fd(),ji());return Bt(r,i,f,a),i.child}function Rv(r,i,a,l){var f=Ld();return f=f===null?null:{parent:It._currentValue,pool:f},i.memoizedState={baseLanes:a,cachePool:f},r!==null&&Gc(i,null),Fd(),fv(i),r!==null&&Dl(r,i,l,!0),null}function lh(r,i){var a=i.ref;if(a===null)r!==null&&r.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(r===null||r.ref!==a)&&(i.flags|=4194816)}}function cm(r,i,a,l,f){return oa(i),a=$d(r,i,a,l,void 0,f),l=Kd(),r!==null&&!Pt?(Qd(r,i,f),ai(r,i,f)):(Le&&l&&Nd(i),i.flags|=1,Bt(r,i,a,f),i.child)}function Iv(r,i,a,l,f,m){return oa(i),i.updateQueue=null,a=R_(i,l,a,f),S_(r),l=Kd(),r!==null&&!Pt?(Qd(r,i,m),ai(r,i,m)):(Le&&l&&Nd(i),i.flags|=1,Bt(r,i,a,m),i.child)}function Cv(r,i,a,l,f){if(oa(i),i.stateNode===null){var m=to,v=a.contextType;typeof v=="object"&&v!==null&&(m=Qt(v)),m=new a(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=lm,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},zd(i),v=a.contextType,m.context=typeof v=="object"&&v!==null?Qt(v):to,m.state=i.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(om(i,a,v,l),m.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(v=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),v!==m.state&&lm.enqueueReplaceState(m,m.state,null),Ll(i,l,m,f),Vl(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(r===null){m=i.stateNode;var T=i.memoizedProps,I=ca(a,T);m.props=I;var B=m.context,Q=a.contextType;v=to,typeof Q=="object"&&Q!==null&&(v=Qt(Q));var W=a.getDerivedStateFromProps;Q=typeof W=="function"||typeof m.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,Q||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(T||B!==v)&&mv(i,m,l,v),Vi=!1;var q=i.memoizedState;m.state=q,Ll(i,l,m,f),Vl(),B=i.memoizedState,T||q!==B||Vi?(typeof W=="function"&&(om(i,a,W,l),B=i.memoizedState),(I=Vi||dv(i,a,I,l,q,B,v))?(Q||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=B),m.props=l,m.state=B,m.context=v,l=I):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,Bd(r,i),v=i.memoizedProps,Q=ca(a,v),m.props=Q,W=i.pendingProps,q=m.context,B=a.contextType,I=to,typeof B=="object"&&B!==null&&(I=Qt(B)),T=a.getDerivedStateFromProps,(B=typeof T=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(v!==W||q!==I)&&mv(i,m,l,I),Vi=!1,q=i.memoizedState,m.state=q,Ll(i,l,m,f),Vl();var F=i.memoizedState;v!==W||q!==F||Vi||r!==null&&r.dependencies!==null&&Fc(r.dependencies)?(typeof T=="function"&&(om(i,a,T,l),F=i.memoizedState),(Q=Vi||dv(i,a,Q,l,q,F,I)||r!==null&&r.dependencies!==null&&Fc(r.dependencies))?(B||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,F,I),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,F,I)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||v===r.memoizedProps&&q===r.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===r.memoizedProps&&q===r.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=F),m.props=l,m.state=F,m.context=I,l=Q):(typeof m.componentDidUpdate!="function"||v===r.memoizedProps&&q===r.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===r.memoizedProps&&q===r.memoizedState||(i.flags|=1024),l=!1)}return m=l,lh(r,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,r!==null&&l?(i.child=ho(i,r.child,null,f),i.child=ho(i,null,a,f)):Bt(r,i,a,f),i.memoizedState=m.state,r=i.child):r=ai(r,i,f),r}function Nv(r,i,a,l){return Cl(),i.flags|=256,Bt(r,i,a,l),i.child}var hm={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function fm(r){return{baseLanes:r,cachePool:g_()}}function dm(r,i,a){return r=r!==null?r.childLanes&~a:0,i&&(r|=jn),r}function Dv(r,i,a){var l=i.pendingProps,f=!1,m=(i.flags&128)!==0,v;if((v=m)||(v=r!==null&&r.memoizedState===null?!1:(Ct.current&2)!==0),v&&(f=!0,i.flags&=-129),v=(i.flags&32)!==0,i.flags&=-33,r===null){if(Le){if(f?Bi(i):ji(),Le){var T=at,I;if(I=T){e:{for(I=T,T=Tr;I.nodeType!==8;){if(!T){T=null;break e}if(I=tr(I.nextSibling),I===null){T=null;break e}}T=I}T!==null?(i.memoizedState={dehydrated:T,treeContext:na!==null?{id:ei,overflow:ti}:null,retryLane:536870912,hydrationErrors:null},I=vn(18,null,null,0),I.stateNode=T,I.return=i,i.child=I,sn=i,at=null,I=!0):I=!1}I||sa(i)}if(T=i.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Xm(T)?i.lanes=32:i.lanes=536870912,null;si(i)}return T=l.children,l=l.fallback,f?(ji(),f=i.mode,T=uh({mode:"hidden",children:T},f),l=ta(l,f,a,null),T.return=i,l.return=i,T.sibling=l,i.child=T,f=i.child,f.memoizedState=fm(a),f.childLanes=dm(r,v,a),i.memoizedState=hm,l):(Bi(i),mm(i,T))}if(I=r.memoizedState,I!==null&&(T=I.dehydrated,T!==null)){if(m)i.flags&256?(Bi(i),i.flags&=-257,i=pm(r,i,a)):i.memoizedState!==null?(ji(),i.child=r.child,i.flags|=128,i=null):(ji(),f=l.fallback,T=i.mode,l=uh({mode:"visible",children:l.children},T),f=ta(f,T,a,null),f.flags|=2,l.return=i,f.return=i,l.sibling=f,i.child=l,ho(i,r.child,null,a),l=i.child,l.memoizedState=fm(a),l.childLanes=dm(r,v,a),i.memoizedState=hm,i=f);else if(Bi(i),Xm(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var B=v.dgst;v=B,l=Error(s(419)),l.stack="",l.digest=v,Nl({value:l,source:null,stack:null}),i=pm(r,i,a)}else if(Pt||Dl(r,i,a,!1),v=(a&r.childLanes)!==0,Pt||v){if(v=Xe,v!==null&&(l=a&-a,l=(l&42)!==0?1:Ci(l),l=(l&(v.suspendedLanes|a))!==0?0:l,l!==0&&l!==I.retryLane))throw I.retryLane=l,eo(r,l),An(v,r,l),Tv;T.data==="$?"||xm(),i=pm(r,i,a)}else T.data==="$?"?(i.flags|=192,i.child=r.child,i=null):(r=I.treeContext,at=tr(T.nextSibling),sn=i,Le=!0,ia=null,Tr=!1,r!==null&&(Un[zn++]=ei,Un[zn++]=ti,Un[zn++]=na,ei=r.id,ti=r.overflow,na=i),i=mm(i,l.children),i.flags|=4096);return i}return f?(ji(),f=l.fallback,T=i.mode,I=r.child,B=I.sibling,l=Jr(I,{mode:"hidden",children:l.children}),l.subtreeFlags=I.subtreeFlags&65011712,B!==null?f=Jr(B,f):(f=ta(f,T,a,null),f.flags|=2),f.return=i,l.return=i,l.sibling=f,i.child=l,l=f,f=i.child,T=r.child.memoizedState,T===null?T=fm(a):(I=T.cachePool,I!==null?(B=It._currentValue,I=I.parent!==B?{parent:B,pool:B}:I):I=g_(),T={baseLanes:T.baseLanes|a,cachePool:I}),f.memoizedState=T,f.childLanes=dm(r,v,a),i.memoizedState=hm,l):(Bi(i),a=r.child,r=a.sibling,a=Jr(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,r!==null&&(v=i.deletions,v===null?(i.deletions=[r],i.flags|=16):v.push(r)),i.child=a,i.memoizedState=null,a)}function mm(r,i){return i=uh({mode:"visible",children:i},r.mode),i.return=r,r.child=i}function uh(r,i){return r=vn(22,r,null,i),r.lanes=0,r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},r}function pm(r,i,a){return ho(i,r.child,null,a),r=mm(i,i.pendingProps.children),r.flags|=2,i.memoizedState=null,r}function Ov(r,i,a){r.lanes|=i;var l=r.alternate;l!==null&&(l.lanes|=i),xd(r.return,i,a)}function gm(r,i,a,l,f){var m=r.memoizedState;m===null?r.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=a,m.tailMode=f)}function Mv(r,i,a){var l=i.pendingProps,f=l.revealOrder,m=l.tail;if(Bt(r,i,l.children,a),l=Ct.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=i.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Ov(r,a,i);else if(r.tag===19)Ov(r,a,i);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}l&=1}switch(_e(Ct,l),f){case"forwards":for(a=i.child,f=null;a!==null;)r=a.alternate,r!==null&&sh(r)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),gm(i,!1,f,a,m);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(r=f.alternate,r!==null&&sh(r)===null){i.child=f;break}r=f.sibling,f.sibling=a,a=f,f=r}gm(i,!0,a,null,m);break;case"together":gm(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ai(r,i,a){if(r!==null&&(i.dependencies=r.dependencies),$i|=i.lanes,(a&i.childLanes)===0)if(r!==null){if(Dl(r,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(r!==null&&i.child!==r.child)throw Error(s(153));if(i.child!==null){for(r=i.child,a=Jr(r,r.pendingProps),i.child=a,a.return=i;r.sibling!==null;)r=r.sibling,a=a.sibling=Jr(r,r.pendingProps),a.return=i;a.sibling=null}return i.child}function ym(r,i){return(r.lanes&i)!==0?!0:(r=r.dependencies,!!(r!==null&&Fc(r)))}function lI(r,i,a){switch(i.tag){case 3:Ma(i,i.stateNode.containerInfo),ki(i,It,r.memoizedState.cache),Cl();break;case 27:case 5:Ii(i);break;case 4:Ma(i,i.stateNode.containerInfo);break;case 10:ki(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Bi(i),i.flags|=128,null):(a&i.child.childLanes)!==0?Dv(r,i,a):(Bi(i),r=ai(r,i,a),r!==null?r.sibling:null);Bi(i);break;case 19:var f=(r.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(Dl(r,i,a,!1),l=(a&i.childLanes)!==0),f){if(l)return Mv(r,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),_e(Ct,Ct.current),l)break;return null;case 22:case 23:return i.lanes=0,Sv(r,i,a);case 24:ki(i,It,r.memoizedState.cache)}return ai(r,i,a)}function xv(r,i,a){if(r!==null)if(r.memoizedProps!==i.pendingProps)Pt=!0;else{if(!ym(r,a)&&(i.flags&128)===0)return Pt=!1,lI(r,i,a);Pt=(r.flags&131072)!==0}else Pt=!1,Le&&(i.flags&1048576)!==0&&u_(i,qc,i.index);switch(i.lanes=0,i.tag){case 16:e:{r=i.pendingProps;var l=i.elementType,f=l._init;if(l=f(l._payload),i.type=l,typeof l=="function")Rd(l)?(r=ca(l,r),i.tag=1,i=Cv(null,i,l,r,a)):(i.tag=0,i=cm(null,i,l,r,a));else{if(l!=null){if(f=l.$$typeof,f===oe){i.tag=11,i=bv(null,i,l,r,a);break e}else if(f===D){i.tag=14,i=wv(null,i,l,r,a);break e}}throw i=pt(l)||l,Error(s(306,i,""))}}return i;case 0:return cm(r,i,i.type,i.pendingProps,a);case 1:return l=i.type,f=ca(l,i.pendingProps),Cv(r,i,l,f,a);case 3:e:{if(Ma(i,i.stateNode.containerInfo),r===null)throw Error(s(387));l=i.pendingProps;var m=i.memoizedState;f=m.element,Bd(r,i),Ll(i,l,null,a);var v=i.memoizedState;if(l=v.cache,ki(i,It,l),l!==m.cache&&Pd(i,[It],a,!0),Vl(),l=v.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:v.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=Nv(r,i,l,a);break e}else if(l!==f){f=Vn(Error(s(424)),i),Nl(f),i=Nv(r,i,l,a);break e}else{switch(r=i.stateNode.containerInfo,r.nodeType){case 9:r=r.body;break;default:r=r.nodeName==="HTML"?r.ownerDocument.body:r}for(at=tr(r.firstChild),sn=i,Le=!0,ia=null,Tr=!0,a=hv(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Cl(),l===f){i=ai(r,i,a);break e}Bt(r,i,l,a)}i=i.child}return i;case 26:return lh(r,i),r===null?(a=LE(i.type,null,i.pendingProps,null))?i.memoizedState=a:Le||(a=i.type,r=i.pendingProps,l=wh(ur.current).createElement(a),l[At]=i,l[yt]=r,qt(l,a,r),ht(l),i.stateNode=l):i.memoizedState=LE(i.type,r.memoizedProps,i.pendingProps,r.memoizedState),null;case 27:return Ii(i),r===null&&Le&&(l=i.stateNode=PE(i.type,i.pendingProps,ur.current),sn=i,Tr=!0,f=at,Xi(i.type)?(Wm=f,at=tr(l.firstChild)):at=f),Bt(r,i,i.pendingProps.children,a),lh(r,i),r===null&&(i.flags|=4194304),i.child;case 5:return r===null&&Le&&((f=l=at)&&(l=VI(l,i.type,i.pendingProps,Tr),l!==null?(i.stateNode=l,sn=i,at=tr(l.firstChild),Tr=!1,f=!0):f=!1),f||sa(i)),Ii(i),f=i.type,m=i.pendingProps,v=r!==null?r.memoizedProps:null,l=m.children,Km(f,m)?l=null:v!==null&&Km(f,v)&&(i.flags|=32),i.memoizedState!==null&&(f=$d(r,i,eI,null,null,a),su._currentValue=f),lh(r,i),Bt(r,i,l,a),i.child;case 6:return r===null&&Le&&((r=a=at)&&(a=LI(a,i.pendingProps,Tr),a!==null?(i.stateNode=a,sn=i,at=null,r=!0):r=!1),r||sa(i)),null;case 13:return Dv(r,i,a);case 4:return Ma(i,i.stateNode.containerInfo),l=i.pendingProps,r===null?i.child=ho(i,null,l,a):Bt(r,i,l,a),i.child;case 11:return bv(r,i,i.type,i.pendingProps,a);case 7:return Bt(r,i,i.pendingProps,a),i.child;case 8:return Bt(r,i,i.pendingProps.children,a),i.child;case 12:return Bt(r,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,ki(i,i.type,l.value),Bt(r,i,l.children,a),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,oa(i),f=Qt(f),l=l(f),i.flags|=1,Bt(r,i,l,a),i.child;case 14:return wv(r,i,i.type,i.pendingProps,a);case 15:return Av(r,i,i.type,i.pendingProps,a);case 19:return Mv(r,i,a);case 31:return l=i.pendingProps,a=i.mode,l={mode:l.mode,children:l.children},r===null?(a=uh(l,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=Jr(r.child,l),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return Sv(r,i,a);case 24:return oa(i),l=Qt(It),r===null?(f=Ld(),f===null&&(f=Xe,m=kd(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=a),f=m),i.memoizedState={parent:l,cache:f},zd(i),ki(i,It,f)):((r.lanes&a)!==0&&(Bd(r,i),Ll(i,null,null,a),Vl()),f=r.memoizedState,m=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),ki(i,It,l)):(l=m.cache,ki(i,It,l),l!==f.cache&&Pd(i,[It],a,!0))),Bt(r,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function oi(r){r.flags|=4}function Pv(r,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)r.flags&=-16777217;else if(r.flags|=16777216,!qE(i)){if(i=Bn.current,i!==null&&((Me&4194048)===Me?br!==null:(Me&62914560)!==Me&&(Me&536870912)===0||i!==br))throw Pl=Ud,y_;r.flags|=8192}}function ch(r,i){i!==null&&(r.flags|=4),r.flags&16384&&(i=r.tag!==22?ol():536870912,r.lanes|=i,go|=i)}function Hl(r,i){if(!Le)switch(r.tailMode){case"hidden":i=r.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||r.tail===null?r.tail=null:r.tail.sibling=null:l.sibling=null}}function nt(r){var i=r.alternate!==null&&r.alternate.child===r.child,a=0,l=0;if(i)for(var f=r.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=r,f=f.sibling;else for(f=r.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=r,f=f.sibling;return r.subtreeFlags|=l,r.childLanes=a,i}function uI(r,i,a){var l=i.pendingProps;switch(Dd(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(i),null;case 1:return nt(i),null;case 3:return a=i.stateNode,l=null,r!==null&&(l=r.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),ri(It),Ri(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(r===null||r.child===null)&&(Il(i)?oi(i):r===null||r.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,f_())),nt(i),null;case 26:return a=i.memoizedState,r===null?(oi(i),a!==null?(nt(i),Pv(i,a)):(nt(i),i.flags&=-16777217)):a?a!==r.memoizedState?(oi(i),nt(i),Pv(i,a)):(nt(i),i.flags&=-16777217):(r.memoizedProps!==l&&oi(i),nt(i),i.flags&=-16777217),null;case 27:Br(i),a=ur.current;var f=i.type;if(r!==null&&i.stateNode!=null)r.memoizedProps!==l&&oi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return nt(i),null}r=gt.current,Il(i)?c_(i):(r=PE(f,l,a),i.stateNode=r,oi(i))}return nt(i),null;case 5:if(Br(i),a=i.type,r!==null&&i.stateNode!=null)r.memoizedProps!==l&&oi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return nt(i),null}if(r=gt.current,Il(i))c_(i);else{switch(f=wh(ur.current),r){case 1:r=f.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:r=f.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":r=f.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":r=f.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":r=f.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof l.is=="string"?f.createElement("select",{is:l.is}):f.createElement("select"),l.multiple?r.multiple=!0:l.size&&(r.size=l.size);break;default:r=typeof l.is=="string"?f.createElement(a,{is:l.is}):f.createElement(a)}}r[At]=i,r[yt]=l;e:for(f=i.child;f!==null;){if(f.tag===5||f.tag===6)r.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===i)break e;for(;f.sibling===null;){if(f.return===null||f.return===i)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}i.stateNode=r;e:switch(qt(r,a,l),a){case"button":case"input":case"select":case"textarea":r=!!l.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&oi(i)}}return nt(i),i.flags&=-16777217,null;case 6:if(r&&i.stateNode!=null)r.memoizedProps!==l&&oi(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(r=ur.current,Il(i)){if(r=i.stateNode,a=i.memoizedProps,l=null,f=sn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}r[At]=i,r=!!(r.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||IE(r.nodeValue,a)),r||sa(i)}else r=wh(r).createTextNode(l),r[At]=i,i.stateNode=r}return nt(i),null;case 13:if(l=i.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(f=Il(i),l!==null&&l.dehydrated!==null){if(r===null){if(!f)throw Error(s(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[At]=i}else Cl(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;nt(i),f=!1}else f=f_(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(si(i),i):(si(i),null)}if(si(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=l!==null,r=r!==null&&r.memoizedState!==null,a){l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool);var m=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==f&&(l.flags|=2048)}return a!==r&&a&&(i.child.flags|=8192),ch(i,i.updateQueue),nt(i),null;case 4:return Ri(),r===null&&qm(i.stateNode.containerInfo),nt(i),null;case 10:return ri(i.type),nt(i),null;case 19:if(Pe(Ct),f=i.memoizedState,f===null)return nt(i),null;if(l=(i.flags&128)!==0,m=f.rendering,m===null)if(l)Hl(f,!1);else{if(ot!==0||r!==null&&(r.flags&128)!==0)for(r=i.child;r!==null;){if(m=sh(r),m!==null){for(i.flags|=128,Hl(f,!1),r=m.updateQueue,i.updateQueue=r,ch(i,r),i.subtreeFlags=0,r=a,a=i.child;a!==null;)l_(a,r),a=a.sibling;return _e(Ct,Ct.current&1|2),i.child}r=r.sibling}f.tail!==null&&Dn()>dh&&(i.flags|=128,l=!0,Hl(f,!1),i.lanes=4194304)}else{if(!l)if(r=sh(m),r!==null){if(i.flags|=128,l=!0,r=r.updateQueue,i.updateQueue=r,ch(i,r),Hl(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!Le)return nt(i),null}else 2*Dn()-f.renderingStartTime>dh&&a!==536870912&&(i.flags|=128,l=!0,Hl(f,!1),i.lanes=4194304);f.isBackwards?(m.sibling=i.child,i.child=m):(r=f.last,r!==null?r.sibling=m:i.child=m,f.last=m)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=Dn(),i.sibling=null,r=Ct.current,_e(Ct,l?r&1|2:r&1),i):(nt(i),null);case 22:case 23:return si(i),Hd(),l=i.memoizedState!==null,r!==null?r.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(nt(i),i.subtreeFlags&6&&(i.flags|=8192)):nt(i),a=i.updateQueue,a!==null&&ch(i,a.retryQueue),a=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),r!==null&&Pe(la),null;case 24:return a=null,r!==null&&(a=r.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),ri(It),nt(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function cI(r,i){switch(Dd(i),i.tag){case 1:return r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 3:return ri(It),Ri(),r=i.flags,(r&65536)!==0&&(r&128)===0?(i.flags=r&-65537|128,i):null;case 26:case 27:case 5:return Br(i),null;case 13:if(si(i),r=i.memoizedState,r!==null&&r.dehydrated!==null){if(i.alternate===null)throw Error(s(340));Cl()}return r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 19:return Pe(Ct),null;case 4:return Ri(),null;case 10:return ri(i.type),null;case 22:case 23:return si(i),Hd(),r!==null&&Pe(la),r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 24:return ri(It),null;case 25:return null;default:return null}}function kv(r,i){switch(Dd(i),i.tag){case 3:ri(It),Ri();break;case 26:case 27:case 5:Br(i);break;case 4:Ri();break;case 13:si(i);break;case 19:Pe(Ct);break;case 10:ri(i.type);break;case 22:case 23:si(i),Hd(),r!==null&&Pe(la);break;case 24:ri(It)}}function Gl(r,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var f=l.next;a=f;do{if((a.tag&r)===r){l=void 0;var m=a.create,v=a.inst;l=m(),v.destroy=l}a=a.next}while(a!==f)}}catch(T){Qe(i,i.return,T)}}function qi(r,i,a){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var m=f.next;l=m;do{if((l.tag&r)===r){var v=l.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,f=i;var I=a,B=T;try{B()}catch(Q){Qe(f,I,Q)}}}l=l.next}while(l!==m)}}catch(Q){Qe(i,i.return,Q)}}function Vv(r){var i=r.updateQueue;if(i!==null){var a=r.stateNode;try{w_(i,a)}catch(l){Qe(r,r.return,l)}}}function Lv(r,i,a){a.props=ca(r.type,r.memoizedProps),a.state=r.memoizedState;try{a.componentWillUnmount()}catch(l){Qe(r,i,l)}}function $l(r,i){try{var a=r.ref;if(a!==null){switch(r.tag){case 26:case 27:case 5:var l=r.stateNode;break;case 30:l=r.stateNode;break;default:l=r.stateNode}typeof a=="function"?r.refCleanup=a(l):a.current=l}}catch(f){Qe(r,i,f)}}function wr(r,i){var a=r.ref,l=r.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(f){Qe(r,i,f)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(f){Qe(r,i,f)}else a.current=null}function Uv(r){var i=r.type,a=r.memoizedProps,l=r.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(f){Qe(r,r.return,f)}}function _m(r,i,a){try{var l=r.stateNode;OI(l,r.type,a,i),l[yt]=i}catch(f){Qe(r,r.return,f)}}function zv(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27&&Xi(r.type)||r.tag===4}function vm(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||zv(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.tag===27&&Xi(r.type)||r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Em(r,i,a){var l=r.tag;if(l===5||l===6)r=r.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(r,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(r),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=bh));else if(l!==4&&(l===27&&Xi(r.type)&&(a=r.stateNode,i=null),r=r.child,r!==null))for(Em(r,i,a),r=r.sibling;r!==null;)Em(r,i,a),r=r.sibling}function hh(r,i,a){var l=r.tag;if(l===5||l===6)r=r.stateNode,i?a.insertBefore(r,i):a.appendChild(r);else if(l!==4&&(l===27&&Xi(r.type)&&(a=r.stateNode),r=r.child,r!==null))for(hh(r,i,a),r=r.sibling;r!==null;)hh(r,i,a),r=r.sibling}function Bv(r){var i=r.stateNode,a=r.memoizedProps;try{for(var l=r.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);qt(i,l,a),i[At]=r,i[yt]=a}catch(m){Qe(r,r.return,m)}}var li=!1,dt=!1,Tm=!1,jv=typeof WeakSet=="function"?WeakSet:Set,kt=null;function hI(r,i){if(r=r.containerInfo,Gm=Nh,r=Zy(r),vd(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var f=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var v=0,T=-1,I=-1,B=0,Q=0,W=r,q=null;t:for(;;){for(var F;W!==a||f!==0&&W.nodeType!==3||(T=v+f),W!==m||l!==0&&W.nodeType!==3||(I=v+l),W.nodeType===3&&(v+=W.nodeValue.length),(F=W.firstChild)!==null;)q=W,W=F;for(;;){if(W===r)break t;if(q===a&&++B===f&&(T=v),q===m&&++Q===l&&(I=v),(F=W.nextSibling)!==null)break;W=q,q=W.parentNode}W=F}a=T===-1||I===-1?null:{start:T,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for($m={focusedElem:r,selectionRange:a},Nh=!1,kt=i;kt!==null;)if(i=kt,r=i.child,(i.subtreeFlags&1024)!==0&&r!==null)r.return=i,kt=r;else for(;kt!==null;){switch(i=kt,m=i.alternate,r=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((r&1024)!==0&&m!==null){r=void 0,a=i,f=m.memoizedProps,m=m.memoizedState,l=a.stateNode;try{var ye=ca(a.type,f,a.elementType===a.type);r=l.getSnapshotBeforeUpdate(ye,m),l.__reactInternalSnapshotBeforeUpdate=r}catch(de){Qe(a,a.return,de)}}break;case 3:if((r&1024)!==0){if(r=i.stateNode.containerInfo,a=r.nodeType,a===9)Ym(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Ym(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((r&1024)!==0)throw Error(s(163))}if(r=i.sibling,r!==null){r.return=i.return,kt=r;break}kt=i.return}}function qv(r,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Fi(r,a),l&4&&Gl(5,a);break;case 1:if(Fi(r,a),l&4)if(r=a.stateNode,i===null)try{r.componentDidMount()}catch(v){Qe(a,a.return,v)}else{var f=ca(a.type,i.memoizedProps);i=i.memoizedState;try{r.componentDidUpdate(f,i,r.__reactInternalSnapshotBeforeUpdate)}catch(v){Qe(a,a.return,v)}}l&64&&Vv(a),l&512&&$l(a,a.return);break;case 3:if(Fi(r,a),l&64&&(r=a.updateQueue,r!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{w_(r,i)}catch(v){Qe(a,a.return,v)}}break;case 27:i===null&&l&4&&Bv(a);case 26:case 5:Fi(r,a),i===null&&l&4&&Uv(a),l&512&&$l(a,a.return);break;case 12:Fi(r,a);break;case 13:Fi(r,a),l&4&&Gv(r,a),l&64&&(r=a.memoizedState,r!==null&&(r=r.dehydrated,r!==null&&(a=EI.bind(null,a),UI(r,a))));break;case 22:if(l=a.memoizedState!==null||li,!l){i=i!==null&&i.memoizedState!==null||dt,f=li;var m=dt;li=l,(dt=i)&&!m?Hi(r,a,(a.subtreeFlags&8772)!==0):Fi(r,a),li=f,dt=m}break;case 30:break;default:Fi(r,a)}}function Fv(r){var i=r.alternate;i!==null&&(r.alternate=null,Fv(i)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(i=r.stateNode,i!==null&&Oi(i)),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}var tt=null,hn=!1;function ui(r,i,a){for(a=a.child;a!==null;)Hv(r,i,a),a=a.sibling}function Hv(r,i,a){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(st,a)}catch{}switch(a.tag){case 26:dt||wr(a,i),ui(r,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:dt||wr(a,i);var l=tt,f=hn;Xi(a.type)&&(tt=a.stateNode,hn=!1),ui(r,i,a),tu(a.stateNode),tt=l,hn=f;break;case 5:dt||wr(a,i);case 6:if(l=tt,f=hn,tt=null,ui(r,i,a),tt=l,hn=f,tt!==null)if(hn)try{(tt.nodeType===9?tt.body:tt.nodeName==="HTML"?tt.ownerDocument.body:tt).removeChild(a.stateNode)}catch(m){Qe(a,i,m)}else try{tt.removeChild(a.stateNode)}catch(m){Qe(a,i,m)}break;case 18:tt!==null&&(hn?(r=tt,ME(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,a.stateNode),uu(r)):ME(tt,a.stateNode));break;case 4:l=tt,f=hn,tt=a.stateNode.containerInfo,hn=!0,ui(r,i,a),tt=l,hn=f;break;case 0:case 11:case 14:case 15:dt||qi(2,a,i),dt||qi(4,a,i),ui(r,i,a);break;case 1:dt||(wr(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Lv(a,i,l)),ui(r,i,a);break;case 21:ui(r,i,a);break;case 22:dt=(l=dt)||a.memoizedState!==null,ui(r,i,a),dt=l;break;default:ui(r,i,a)}}function Gv(r,i){if(i.memoizedState===null&&(r=i.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{uu(r)}catch(a){Qe(i,i.return,a)}}function fI(r){switch(r.tag){case 13:case 19:var i=r.stateNode;return i===null&&(i=r.stateNode=new jv),i;case 22:return r=r.stateNode,i=r._retryCache,i===null&&(i=r._retryCache=new jv),i;default:throw Error(s(435,r.tag))}}function bm(r,i){var a=fI(r);i.forEach(function(l){var f=TI.bind(null,r,l);a.has(l)||(a.add(l),l.then(f,f))})}function En(r,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var f=a[l],m=r,v=i,T=v;e:for(;T!==null;){switch(T.tag){case 27:if(Xi(T.type)){tt=T.stateNode,hn=!1;break e}break;case 5:tt=T.stateNode,hn=!1;break e;case 3:case 4:tt=T.stateNode.containerInfo,hn=!0;break e}T=T.return}if(tt===null)throw Error(s(160));Hv(m,v,f),tt=null,hn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)$v(i,r),i=i.sibling}var er=null;function $v(r,i){var a=r.alternate,l=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:En(i,r),Tn(r),l&4&&(qi(3,r,r.return),Gl(3,r),qi(5,r,r.return));break;case 1:En(i,r),Tn(r),l&512&&(dt||a===null||wr(a,a.return)),l&64&&li&&(r=r.updateQueue,r!==null&&(l=r.callbacks,l!==null&&(a=r.shared.hiddenCallbacks,r.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var f=er;if(En(i,r),Tn(r),l&512&&(dt||a===null||wr(a,a.return)),l&4){var m=a!==null?a.memoizedState:null;if(l=r.memoizedState,a===null)if(l===null)if(r.stateNode===null){e:{l=r.type,a=r.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":m=f.getElementsByTagName("title")[0],(!m||m[zs]||m[At]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(l),f.head.insertBefore(m,f.querySelector("head > title"))),qt(m,l,a),m[At]=r,ht(m),l=m;break e;case"link":var v=BE("link","href",f).get(l+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(m=v[T],m.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&m.getAttribute("rel")===(a.rel==null?null:a.rel)&&m.getAttribute("title")===(a.title==null?null:a.title)&&m.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break t}}m=f.createElement(l),qt(m,l,a),f.head.appendChild(m);break;case"meta":if(v=BE("meta","content",f).get(l+(a.content||""))){for(T=0;T<v.length;T++)if(m=v[T],m.getAttribute("content")===(a.content==null?null:""+a.content)&&m.getAttribute("name")===(a.name==null?null:a.name)&&m.getAttribute("property")===(a.property==null?null:a.property)&&m.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&m.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break t}}m=f.createElement(l),qt(m,l,a),f.head.appendChild(m);break;default:throw Error(s(468,l))}m[At]=r,ht(m),l=m}r.stateNode=l}else jE(f,r.type,r.stateNode);else r.stateNode=zE(f,l,r.memoizedProps);else m!==l?(m===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):m.count--,l===null?jE(f,r.type,r.stateNode):zE(f,l,r.memoizedProps)):l===null&&r.stateNode!==null&&_m(r,r.memoizedProps,a.memoizedProps)}break;case 27:En(i,r),Tn(r),l&512&&(dt||a===null||wr(a,a.return)),a!==null&&l&4&&_m(r,r.memoizedProps,a.memoizedProps);break;case 5:if(En(i,r),Tn(r),l&512&&(dt||a===null||wr(a,a.return)),r.flags&32){f=r.stateNode;try{Mn(f,"")}catch(F){Qe(r,r.return,F)}}l&4&&r.stateNode!=null&&(f=r.memoizedProps,_m(r,f,a!==null?a.memoizedProps:f)),l&1024&&(Tm=!0);break;case 6:if(En(i,r),Tn(r),l&4){if(r.stateNode===null)throw Error(s(162));l=r.memoizedProps,a=r.stateNode;try{a.nodeValue=l}catch(F){Qe(r,r.return,F)}}break;case 3:if(Rh=null,f=er,er=Ah(i.containerInfo),En(i,r),er=f,Tn(r),l&4&&a!==null&&a.memoizedState.isDehydrated)try{uu(i.containerInfo)}catch(F){Qe(r,r.return,F)}Tm&&(Tm=!1,Kv(r));break;case 4:l=er,er=Ah(r.stateNode.containerInfo),En(i,r),Tn(r),er=l;break;case 12:En(i,r),Tn(r);break;case 13:En(i,r),Tn(r),r.child.flags&8192&&r.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Cm=Dn()),l&4&&(l=r.updateQueue,l!==null&&(r.updateQueue=null,bm(r,l)));break;case 22:f=r.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,B=li,Q=dt;if(li=B||f,dt=Q||I,En(i,r),dt=Q,li=B,Tn(r),l&8192)e:for(i=r.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(a===null||I||li||dt||ha(r)),a=null,i=r;;){if(i.tag===5||i.tag===26){if(a===null){I=a=i;try{if(m=I.stateNode,f)v=m.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=I.stateNode;var W=I.memoizedProps.style,q=W!=null&&W.hasOwnProperty("display")?W.display:null;T.style.display=q==null||typeof q=="boolean"?"":(""+q).trim()}}catch(F){Qe(I,I.return,F)}}}else if(i.tag===6){if(a===null){I=i;try{I.stateNode.nodeValue=f?"":I.memoizedProps}catch(F){Qe(I,I.return,F)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===r)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break e;for(;i.sibling===null;){if(i.return===null||i.return===r)break e;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=r.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,bm(r,a))));break;case 19:En(i,r),Tn(r),l&4&&(l=r.updateQueue,l!==null&&(r.updateQueue=null,bm(r,l)));break;case 30:break;case 21:break;default:En(i,r),Tn(r)}}function Tn(r){var i=r.flags;if(i&2){try{for(var a,l=r.return;l!==null;){if(zv(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var f=a.stateNode,m=vm(r);hh(r,m,f);break;case 5:var v=a.stateNode;a.flags&32&&(Mn(v,""),a.flags&=-33);var T=vm(r);hh(r,T,v);break;case 3:case 4:var I=a.stateNode.containerInfo,B=vm(r);Em(r,B,I);break;default:throw Error(s(161))}}catch(Q){Qe(r,r.return,Q)}r.flags&=-3}i&4096&&(r.flags&=-4097)}function Kv(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var i=r;Kv(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),r=r.sibling}}function Fi(r,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)qv(r,i.alternate,i),i=i.sibling}function ha(r){for(r=r.child;r!==null;){var i=r;switch(i.tag){case 0:case 11:case 14:case 15:qi(4,i,i.return),ha(i);break;case 1:wr(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&Lv(i,i.return,a),ha(i);break;case 27:tu(i.stateNode);case 26:case 5:wr(i,i.return),ha(i);break;case 22:i.memoizedState===null&&ha(i);break;case 30:ha(i);break;default:ha(i)}r=r.sibling}}function Hi(r,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=r,m=i,v=m.flags;switch(m.tag){case 0:case 11:case 15:Hi(f,m,a),Gl(4,m);break;case 1:if(Hi(f,m,a),l=m,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(B){Qe(l,l.return,B)}if(l=m,f=l.updateQueue,f!==null){var T=l.stateNode;try{var I=f.shared.hiddenCallbacks;if(I!==null)for(f.shared.hiddenCallbacks=null,f=0;f<I.length;f++)b_(I[f],T)}catch(B){Qe(l,l.return,B)}}a&&v&64&&Vv(m),$l(m,m.return);break;case 27:Bv(m);case 26:case 5:Hi(f,m,a),a&&l===null&&v&4&&Uv(m),$l(m,m.return);break;case 12:Hi(f,m,a);break;case 13:Hi(f,m,a),a&&v&4&&Gv(f,m);break;case 22:m.memoizedState===null&&Hi(f,m,a),$l(m,m.return);break;case 30:break;default:Hi(f,m,a)}i=i.sibling}}function wm(r,i){var a=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),r=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==a&&(r!=null&&r.refCount++,a!=null&&Ol(a))}function Am(r,i){r=null,i.alternate!==null&&(r=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==r&&(i.refCount++,r!=null&&Ol(r))}function Ar(r,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Qv(r,i,a,l),i=i.sibling}function Qv(r,i,a,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Ar(r,i,a,l),f&2048&&Gl(9,i);break;case 1:Ar(r,i,a,l);break;case 3:Ar(r,i,a,l),f&2048&&(r=null,i.alternate!==null&&(r=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==r&&(i.refCount++,r!=null&&Ol(r)));break;case 12:if(f&2048){Ar(r,i,a,l),r=i.stateNode;try{var m=i.memoizedProps,v=m.id,T=m.onPostCommit;typeof T=="function"&&T(v,i.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(I){Qe(i,i.return,I)}}else Ar(r,i,a,l);break;case 13:Ar(r,i,a,l);break;case 23:break;case 22:m=i.stateNode,v=i.alternate,i.memoizedState!==null?m._visibility&2?Ar(r,i,a,l):Kl(r,i):m._visibility&2?Ar(r,i,a,l):(m._visibility|=2,fo(r,i,a,l,(i.subtreeFlags&10256)!==0)),f&2048&&wm(v,i);break;case 24:Ar(r,i,a,l),f&2048&&Am(i.alternate,i);break;default:Ar(r,i,a,l)}}function fo(r,i,a,l,f){for(f=f&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var m=r,v=i,T=a,I=l,B=v.flags;switch(v.tag){case 0:case 11:case 15:fo(m,v,T,I,f),Gl(8,v);break;case 23:break;case 22:var Q=v.stateNode;v.memoizedState!==null?Q._visibility&2?fo(m,v,T,I,f):Kl(m,v):(Q._visibility|=2,fo(m,v,T,I,f)),f&&B&2048&&wm(v.alternate,v);break;case 24:fo(m,v,T,I,f),f&&B&2048&&Am(v.alternate,v);break;default:fo(m,v,T,I,f)}i=i.sibling}}function Kl(r,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=r,l=i,f=l.flags;switch(l.tag){case 22:Kl(a,l),f&2048&&wm(l.alternate,l);break;case 24:Kl(a,l),f&2048&&Am(l.alternate,l);break;default:Kl(a,l)}i=i.sibling}}var Ql=8192;function mo(r){if(r.subtreeFlags&Ql)for(r=r.child;r!==null;)Yv(r),r=r.sibling}function Yv(r){switch(r.tag){case 26:mo(r),r.flags&Ql&&r.memoizedState!==null&&WI(er,r.memoizedState,r.memoizedProps);break;case 5:mo(r);break;case 3:case 4:var i=er;er=Ah(r.stateNode.containerInfo),mo(r),er=i;break;case 22:r.memoizedState===null&&(i=r.alternate,i!==null&&i.memoizedState!==null?(i=Ql,Ql=16777216,mo(r),Ql=i):mo(r));break;default:mo(r)}}function Xv(r){var i=r.alternate;if(i!==null&&(r=i.child,r!==null)){i.child=null;do i=r.sibling,r.sibling=null,r=i;while(r!==null)}}function Yl(r){var i=r.deletions;if((r.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];kt=l,Zv(l,r)}Xv(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)Wv(r),r=r.sibling}function Wv(r){switch(r.tag){case 0:case 11:case 15:Yl(r),r.flags&2048&&qi(9,r,r.return);break;case 3:Yl(r);break;case 12:Yl(r);break;case 22:var i=r.stateNode;r.memoizedState!==null&&i._visibility&2&&(r.return===null||r.return.tag!==13)?(i._visibility&=-3,fh(r)):Yl(r);break;default:Yl(r)}}function fh(r){var i=r.deletions;if((r.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];kt=l,Zv(l,r)}Xv(r)}for(r=r.child;r!==null;){switch(i=r,i.tag){case 0:case 11:case 15:qi(8,i,i.return),fh(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,fh(i));break;default:fh(i)}r=r.sibling}}function Zv(r,i){for(;kt!==null;){var a=kt;switch(a.tag){case 0:case 11:case 15:qi(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ol(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,kt=l;else e:for(a=r;kt!==null;){l=kt;var f=l.sibling,m=l.return;if(Fv(l),l===a){kt=null;break e}if(f!==null){f.return=m,kt=f;break e}kt=m}}}var dI={getCacheForType:function(r){var i=Qt(It),a=i.data.get(r);return a===void 0&&(a=r(),i.data.set(r,a)),a}},mI=typeof WeakMap=="function"?WeakMap:Map,je=0,Xe=null,Ae=null,Me=0,qe=0,bn=null,Gi=!1,po=!1,Sm=!1,ci=0,ot=0,$i=0,fa=0,Rm=0,jn=0,go=0,Xl=null,fn=null,Im=!1,Cm=0,dh=1/0,mh=null,Ki=null,jt=0,Qi=null,yo=null,_o=0,Nm=0,Dm=null,Jv=null,Wl=0,Om=null;function wn(){if((je&2)!==0&&Me!==0)return Me&-Me;if(K.T!==null){var r=io;return r!==0?r:Um()}return Ni()}function eE(){jn===0&&(jn=(Me&536870912)===0||Le?al():536870912);var r=Bn.current;return r!==null&&(r.flags|=32),jn}function An(r,i,a){(r===Xe&&(qe===2||qe===9)||r.cancelPendingCommit!==null)&&(vo(r,0),Yi(r,Me,jn,!1)),qr(r,a),((je&2)===0||r!==Xe)&&(r===Xe&&((je&2)===0&&(fa|=a),ot===4&&Yi(r,Me,jn,!1)),Sr(r))}function tE(r,i,a){if((je&6)!==0)throw Error(s(327));var l=!a&&(i&124)===0&&(i&r.expiredLanes)===0||Us(r,i),f=l?yI(r,i):Pm(r,i,!0),m=l;do{if(f===0){po&&!l&&Yi(r,i,0,!1);break}else{if(a=r.current.alternate,m&&!pI(a)){f=Pm(r,i,!1),m=!1;continue}if(f===2){if(m=i,r.errorRecoveryDisabledLanes&m)var v=0;else v=r.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){i=v;e:{var T=r;f=Xl;var I=T.current.memoizedState.isDehydrated;if(I&&(vo(T,v).flags|=256),v=Pm(T,v,!1),v!==2){if(Sm&&!I){T.errorRecoveryDisabledLanes|=m,fa|=m,f=4;break e}m=fn,fn=f,m!==null&&(fn===null?fn=m:fn.push.apply(fn,m))}f=v}if(m=!1,f!==2)continue}}if(f===1){vo(r,0),Yi(r,i,0,!0);break}e:{switch(l=r,m=f,m){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:Yi(l,i,jn,!Gi);break e;case 2:fn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(f=Cm+300-Dn(),10<f)){if(Yi(l,i,jn,!Gi),ka(l,0,!0)!==0)break e;l.timeoutHandle=DE(nE.bind(null,l,a,fn,mh,Im,i,jn,fa,go,Gi,m,2,-0,0),f);break e}nE(l,a,fn,mh,Im,i,jn,fa,go,Gi,m,0,-0,0)}}break}while(!0);Sr(r)}function nE(r,i,a,l,f,m,v,T,I,B,Q,W,q,F){if(r.timeoutHandle=-1,W=i.subtreeFlags,(W&8192||(W&16785408)===16785408)&&(iu={stylesheets:null,count:0,unsuspend:XI},Yv(i),W=ZI(),W!==null)){r.cancelPendingCommit=W(uE.bind(null,r,i,m,a,l,f,v,T,I,Q,1,q,F)),Yi(r,m,v,!B);return}uE(r,i,m,a,l,f,v,T,I)}function pI(r){for(var i=r;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var f=a[l],m=f.getSnapshot;f=f.value;try{if(!_n(m(),f))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Yi(r,i,a,l){i&=~Rm,i&=~fa,r.suspendedLanes|=i,r.pingedLanes&=~i,l&&(r.warmLanes|=i),l=r.expirationTimes;for(var f=i;0<f;){var m=31-Kt(f),v=1<<m;l[m]=-1,f&=~v}a!==0&&cr(r,a,i)}function ph(){return(je&6)===0?(Zl(0),!1):!0}function Mm(){if(Ae!==null){if(qe===0)var r=Ae.return;else r=Ae,ni=aa=null,Yd(r),co=null,ql=0,r=Ae;for(;r!==null;)kv(r.alternate,r),r=r.return;Ae=null}}function vo(r,i){var a=r.timeoutHandle;a!==-1&&(r.timeoutHandle=-1,xI(a)),a=r.cancelPendingCommit,a!==null&&(r.cancelPendingCommit=null,a()),Mm(),Xe=r,Ae=a=Jr(r.current,null),Me=i,qe=0,bn=null,Gi=!1,po=Us(r,i),Sm=!1,go=jn=Rm=fa=$i=ot=0,fn=Xl=null,Im=!1,(i&8)!==0&&(i|=i&32);var l=r.entangledLanes;if(l!==0)for(r=r.entanglements,l&=i;0<l;){var f=31-Kt(l),m=1<<f;i|=r[f],l&=~m}return ci=i,Lc(),a}function rE(r,i){be=null,K.H=nh,i===xl||i===$c?(i=E_(),qe=3):i===y_?(i=E_(),qe=4):qe=i===Tv?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,bn=i,Ae===null&&(ot=1,oh(r,Vn(i,r.current)))}function iE(){var r=K.H;return K.H=nh,r===null?nh:r}function sE(){var r=K.A;return K.A=dI,r}function xm(){ot=4,Gi||(Me&4194048)!==Me&&Bn.current!==null||(po=!0),($i&134217727)===0&&(fa&134217727)===0||Xe===null||Yi(Xe,Me,jn,!1)}function Pm(r,i,a){var l=je;je|=2;var f=iE(),m=sE();(Xe!==r||Me!==i)&&(mh=null,vo(r,i)),i=!1;var v=ot;e:do try{if(qe!==0&&Ae!==null){var T=Ae,I=bn;switch(qe){case 8:Mm(),v=6;break e;case 3:case 2:case 9:case 6:Bn.current===null&&(i=!0);var B=qe;if(qe=0,bn=null,Eo(r,T,I,B),a&&po){v=0;break e}break;default:B=qe,qe=0,bn=null,Eo(r,T,I,B)}}gI(),v=ot;break}catch(Q){rE(r,Q)}while(!0);return i&&r.shellSuspendCounter++,ni=aa=null,je=l,K.H=f,K.A=m,Ae===null&&(Xe=null,Me=0,Lc()),v}function gI(){for(;Ae!==null;)aE(Ae)}function yI(r,i){var a=je;je|=2;var l=iE(),f=sE();Xe!==r||Me!==i?(mh=null,dh=Dn()+500,vo(r,i)):po=Us(r,i);e:do try{if(qe!==0&&Ae!==null){i=Ae;var m=bn;t:switch(qe){case 1:qe=0,bn=null,Eo(r,i,m,1);break;case 2:case 9:if(__(m)){qe=0,bn=null,oE(i);break}i=function(){qe!==2&&qe!==9||Xe!==r||(qe=7),Sr(r)},m.then(i,i);break e;case 3:qe=7;break e;case 4:qe=5;break e;case 7:__(m)?(qe=0,bn=null,oE(i)):(qe=0,bn=null,Eo(r,i,m,7));break;case 5:var v=null;switch(Ae.tag){case 26:v=Ae.memoizedState;case 5:case 27:var T=Ae;if(!v||qE(v)){qe=0,bn=null;var I=T.sibling;if(I!==null)Ae=I;else{var B=T.return;B!==null?(Ae=B,gh(B)):Ae=null}break t}}qe=0,bn=null,Eo(r,i,m,5);break;case 6:qe=0,bn=null,Eo(r,i,m,6);break;case 8:Mm(),ot=6;break e;default:throw Error(s(462))}}_I();break}catch(Q){rE(r,Q)}while(!0);return ni=aa=null,K.H=l,K.A=f,je=a,Ae!==null?0:(Xe=null,Me=0,Lc(),ot)}function _I(){for(;Ae!==null&&!nl();)aE(Ae)}function aE(r){var i=xv(r.alternate,r,ci);r.memoizedProps=r.pendingProps,i===null?gh(r):Ae=i}function oE(r){var i=r,a=i.alternate;switch(i.tag){case 15:case 0:i=Iv(a,i,i.pendingProps,i.type,void 0,Me);break;case 11:i=Iv(a,i,i.pendingProps,i.type.render,i.ref,Me);break;case 5:Yd(i);default:kv(a,i),i=Ae=l_(i,ci),i=xv(a,i,ci)}r.memoizedProps=r.pendingProps,i===null?gh(r):Ae=i}function Eo(r,i,a,l){ni=aa=null,Yd(i),co=null,ql=0;var f=i.return;try{if(oI(r,f,i,a,Me)){ot=1,oh(r,Vn(a,r.current)),Ae=null;return}}catch(m){if(f!==null)throw Ae=f,m;ot=1,oh(r,Vn(a,r.current)),Ae=null;return}i.flags&32768?(Le||l===1?r=!0:po||(Me&536870912)!==0?r=!1:(Gi=r=!0,(l===2||l===9||l===3||l===6)&&(l=Bn.current,l!==null&&l.tag===13&&(l.flags|=16384))),lE(i,r)):gh(i)}function gh(r){var i=r;do{if((i.flags&32768)!==0){lE(i,Gi);return}r=i.return;var a=uI(i.alternate,i,ci);if(a!==null){Ae=a;return}if(i=i.sibling,i!==null){Ae=i;return}Ae=i=r}while(i!==null);ot===0&&(ot=5)}function lE(r,i){do{var a=cI(r.alternate,r);if(a!==null){a.flags&=32767,Ae=a;return}if(a=r.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(r=r.sibling,r!==null)){Ae=r;return}Ae=r=a}while(r!==null);ot=6,Ae=null}function uE(r,i,a,l,f,m,v,T,I){r.cancelPendingCommit=null;do yh();while(jt!==0);if((je&6)!==0)throw Error(s(327));if(i!==null){if(i===r.current)throw Error(s(177));if(m=i.lanes|i.childLanes,m|=Ad,ll(r,a,m,v,T,I),r===Xe&&(Ae=Xe=null,Me=0),yo=i,Qi=r,_o=a,Nm=m,Dm=f,Jv=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(r.callbackNode=null,r.callbackPriority=0,bI(Ps,function(){return mE(),null})):(r.callbackNode=null,r.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=K.T,K.T=null,f=re.p,re.p=2,v=je,je|=4;try{hI(r,i,a)}finally{je=v,re.p=f,K.T=l}}jt=1,cE(),hE(),fE()}}function cE(){if(jt===1){jt=0;var r=Qi,i=yo,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=K.T,K.T=null;var l=re.p;re.p=2;var f=je;je|=4;try{$v(i,r);var m=$m,v=Zy(r.containerInfo),T=m.focusedElem,I=m.selectionRange;if(v!==T&&T&&T.ownerDocument&&Wy(T.ownerDocument.documentElement,T)){if(I!==null&&vd(T)){var B=I.start,Q=I.end;if(Q===void 0&&(Q=B),"selectionStart"in T)T.selectionStart=B,T.selectionEnd=Math.min(Q,T.value.length);else{var W=T.ownerDocument||document,q=W&&W.defaultView||window;if(q.getSelection){var F=q.getSelection(),ye=T.textContent.length,de=Math.min(I.start,ye),$e=I.end===void 0?de:Math.min(I.end,ye);!F.extend&&de>$e&&(v=$e,$e=de,de=v);var L=Xy(T,de),N=Xy(T,$e);if(L&&N&&(F.rangeCount!==1||F.anchorNode!==L.node||F.anchorOffset!==L.offset||F.focusNode!==N.node||F.focusOffset!==N.offset)){var z=W.createRange();z.setStart(L.node,L.offset),F.removeAllRanges(),de>$e?(F.addRange(z),F.extend(N.node,N.offset)):(z.setEnd(N.node,N.offset),F.addRange(z))}}}}for(W=[],F=T;F=F.parentNode;)F.nodeType===1&&W.push({element:F,left:F.scrollLeft,top:F.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<W.length;T++){var Y=W[T];Y.element.scrollLeft=Y.left,Y.element.scrollTop=Y.top}}Nh=!!Gm,$m=Gm=null}finally{je=f,re.p=l,K.T=a}}r.current=i,jt=2}}function hE(){if(jt===2){jt=0;var r=Qi,i=yo,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=K.T,K.T=null;var l=re.p;re.p=2;var f=je;je|=4;try{qv(r,i.alternate,i)}finally{je=f,re.p=l,K.T=a}}jt=3}}function fE(){if(jt===4||jt===3){jt=0,fc();var r=Qi,i=yo,a=_o,l=Jv;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?jt=5:(jt=0,yo=Qi=null,dE(r,r.pendingLanes));var f=r.pendingLanes;if(f===0&&(Ki=null),Va(a),i=i.stateNode,Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(st,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=K.T,f=re.p,re.p=2,K.T=null;try{for(var m=r.onRecoverableError,v=0;v<l.length;v++){var T=l[v];m(T.value,{componentStack:T.stack})}}finally{K.T=i,re.p=f}}(_o&3)!==0&&yh(),Sr(r),f=r.pendingLanes,(a&4194090)!==0&&(f&42)!==0?r===Om?Wl++:(Wl=0,Om=r):Wl=0,Zl(0)}}function dE(r,i){(r.pooledCacheLanes&=i)===0&&(i=r.pooledCache,i!=null&&(r.pooledCache=null,Ol(i)))}function yh(r){return cE(),hE(),fE(),mE()}function mE(){if(jt!==5)return!1;var r=Qi,i=Nm;Nm=0;var a=Va(_o),l=K.T,f=re.p;try{re.p=32>a?32:a,K.T=null,a=Dm,Dm=null;var m=Qi,v=_o;if(jt=0,yo=Qi=null,_o=0,(je&6)!==0)throw Error(s(331));var T=je;if(je|=4,Wv(m.current),Qv(m,m.current,v,a),je=T,Zl(0,!1),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(st,m)}catch{}return!0}finally{re.p=f,K.T=l,dE(r,i)}}function pE(r,i,a){i=Vn(a,i),i=um(r.stateNode,i,2),r=Ui(r,i,2),r!==null&&(qr(r,2),Sr(r))}function Qe(r,i,a){if(r.tag===3)pE(r,r,a);else for(;i!==null;){if(i.tag===3){pE(i,r,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ki===null||!Ki.has(l))){r=Vn(a,r),a=vv(2),l=Ui(i,a,2),l!==null&&(Ev(a,l,i,r),qr(l,2),Sr(l));break}}i=i.return}}function km(r,i,a){var l=r.pingCache;if(l===null){l=r.pingCache=new mI;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(a)||(Sm=!0,f.add(a),r=vI.bind(null,r,i,a),i.then(r,r))}function vI(r,i,a){var l=r.pingCache;l!==null&&l.delete(i),r.pingedLanes|=r.suspendedLanes&a,r.warmLanes&=~a,Xe===r&&(Me&a)===a&&(ot===4||ot===3&&(Me&62914560)===Me&&300>Dn()-Cm?(je&2)===0&&vo(r,0):Rm|=a,go===Me&&(go=0)),Sr(r)}function gE(r,i){i===0&&(i=ol()),r=eo(r,i),r!==null&&(qr(r,i),Sr(r))}function EI(r){var i=r.memoizedState,a=0;i!==null&&(a=i.retryLane),gE(r,a)}function TI(r,i){var a=0;switch(r.tag){case 13:var l=r.stateNode,f=r.memoizedState;f!==null&&(a=f.retryLane);break;case 19:l=r.stateNode;break;case 22:l=r.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),gE(r,a)}function bI(r,i){return Ms(r,i)}var _h=null,To=null,Vm=!1,vh=!1,Lm=!1,da=0;function Sr(r){r!==To&&r.next===null&&(To===null?_h=To=r:To=To.next=r),vh=!0,Vm||(Vm=!0,AI())}function Zl(r,i){if(!Lm&&vh){Lm=!0;do for(var a=!1,l=_h;l!==null;){if(r!==0){var f=l.pendingLanes;if(f===0)var m=0;else{var v=l.suspendedLanes,T=l.pingedLanes;m=(1<<31-Kt(42|r)+1)-1,m&=f&~(v&~T),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(a=!0,EE(l,m))}else m=Me,m=ka(l,l===Xe?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Us(l,m)||(a=!0,EE(l,m));l=l.next}while(a);Lm=!1}}function wI(){yE()}function yE(){vh=Vm=!1;var r=0;da!==0&&(MI()&&(r=da),da=0);for(var i=Dn(),a=null,l=_h;l!==null;){var f=l.next,m=_E(l,i);m===0?(l.next=null,a===null?_h=f:a.next=f,f===null&&(To=a)):(a=l,(r!==0||(m&3)!==0)&&(vh=!0)),l=f}Zl(r)}function _E(r,i){for(var a=r.suspendedLanes,l=r.pingedLanes,f=r.expirationTimes,m=r.pendingLanes&-62914561;0<m;){var v=31-Kt(m),T=1<<v,I=f[v];I===-1?((T&a)===0||(T&l)!==0)&&(f[v]=sl(T,i)):I<=i&&(r.expiredLanes|=T),m&=~T}if(i=Xe,a=Me,a=ka(r,r===i?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),l=r.callbackNode,a===0||r===i&&(qe===2||qe===9)||r.cancelPendingCommit!==null)return l!==null&&l!==null&&xs(l),r.callbackNode=null,r.callbackPriority=0;if((a&3)===0||Us(r,a)){if(i=a&-a,i===r.callbackPriority)return i;switch(l!==null&&xs(l),Va(a)){case 2:case 8:a=xa;break;case 32:a=Ps;break;case 268435456:a=Pa;break;default:a=Ps}return l=vE.bind(null,r),a=Ms(a,l),r.callbackPriority=i,r.callbackNode=a,i}return l!==null&&l!==null&&xs(l),r.callbackPriority=2,r.callbackNode=null,2}function vE(r,i){if(jt!==0&&jt!==5)return r.callbackNode=null,r.callbackPriority=0,null;var a=r.callbackNode;if(yh()&&r.callbackNode!==a)return null;var l=Me;return l=ka(r,r===Xe?l:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),l===0?null:(tE(r,l,i),_E(r,Dn()),r.callbackNode!=null&&r.callbackNode===a?vE.bind(null,r):null)}function EE(r,i){if(yh())return null;tE(r,i,!0)}function AI(){PI(function(){(je&6)!==0?Ms(rl,wI):yE()})}function Um(){return da===0&&(da=al()),da}function TE(r){return r==null||typeof r=="symbol"||typeof r=="boolean"?null:typeof r=="function"?r:qa(""+r)}function bE(r,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,r.id&&a.setAttribute("form",r.id),i.parentNode.insertBefore(a,i),r=new FormData(r),a.parentNode.removeChild(a),r}function SI(r,i,a,l,f){if(i==="submit"&&a&&a.stateNode===f){var m=TE((f[yt]||null).action),v=l.submitter;v&&(i=(i=v[yt]||null)?TE(i.formAction):v.getAttribute("formAction"),i!==null&&(m=i,v=null));var T=new Fa("action","action",null,l,f);r.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(da!==0){var I=v?bE(f,v):new FormData(f);im(a,{pending:!0,data:I,method:f.method,action:m},null,I)}}else typeof m=="function"&&(T.preventDefault(),I=v?bE(f,v):new FormData(f),im(a,{pending:!0,data:I,method:f.method,action:m},m,I))},currentTarget:f}]})}}for(var zm=0;zm<wd.length;zm++){var Bm=wd[zm],RI=Bm.toLowerCase(),II=Bm[0].toUpperCase()+Bm.slice(1);Jn(RI,"on"+II)}Jn(t_,"onAnimationEnd"),Jn(n_,"onAnimationIteration"),Jn(r_,"onAnimationStart"),Jn("dblclick","onDoubleClick"),Jn("focusin","onFocus"),Jn("focusout","onBlur"),Jn(HR,"onTransitionRun"),Jn(GR,"onTransitionStart"),Jn($R,"onTransitionCancel"),Jn(i_,"onTransitionEnd"),Hr("onMouseEnter",["mouseout","mouseover"]),Hr("onMouseLeave",["mouseout","mouseover"]),Hr("onPointerEnter",["pointerout","pointerover"]),Hr("onPointerLeave",["pointerout","pointerover"]),Wn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Wn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Wn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Wn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Wn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Wn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),CI=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Jl));function wE(r,i){i=(i&4)!==0;for(var a=0;a<r.length;a++){var l=r[a],f=l.event;l=l.listeners;e:{var m=void 0;if(i)for(var v=l.length-1;0<=v;v--){var T=l[v],I=T.instance,B=T.currentTarget;if(T=T.listener,I!==m&&f.isPropagationStopped())break e;m=T,f.currentTarget=B;try{m(f)}catch(Q){ah(Q)}f.currentTarget=null,m=I}else for(v=0;v<l.length;v++){if(T=l[v],I=T.instance,B=T.currentTarget,T=T.listener,I!==m&&f.isPropagationStopped())break e;m=T,f.currentTarget=B;try{m(f)}catch(Q){ah(Q)}f.currentTarget=null,m=I}}}}function Se(r,i){var a=i[cl];a===void 0&&(a=i[cl]=new Set);var l=r+"__bubble";a.has(l)||(AE(i,r,2,!1),a.add(l))}function jm(r,i,a){var l=0;i&&(l|=4),AE(a,r,l,i)}var Eh="_reactListening"+Math.random().toString(36).slice(2);function qm(r){if(!r[Eh]){r[Eh]=!0,hl.forEach(function(a){a!=="selectionchange"&&(CI.has(a)||jm(a,!1,r),jm(a,!0,r))});var i=r.nodeType===9?r:r.ownerDocument;i===null||i[Eh]||(i[Eh]=!0,jm("selectionchange",!1,i))}}function AE(r,i,a,l){switch(QE(i)){case 2:var f=t1;break;case 8:f=n1;break;default:f=np}a=f.bind(null,i,a,r),f=void 0,!Pn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?r.addEventListener(i,a,{capture:!0,passive:f}):r.addEventListener(i,a,!0):f!==void 0?r.addEventListener(i,a,{passive:f}):r.addEventListener(i,a,!1)}function Fm(r,i,a,l,f){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var T=l.stateNode.containerInfo;if(T===f)break;if(v===4)for(v=l.return;v!==null;){var I=v.tag;if((I===3||I===4)&&v.stateNode.containerInfo===f)return;v=v.return}for(;T!==null;){if(v=Fr(T),v===null)return;if(I=v.tag,I===5||I===6||I===26||I===27){l=m=v;continue e}T=T.parentNode}}l=l.return}bc(function(){var B=m,Q=xn(a),W=[];e:{var q=s_.get(r);if(q!==void 0){var F=Fa,ye=r;switch(r){case"keypress":if(gr(a)===0)break e;case"keydown":case"keyup":F=Ya;break;case"focusin":ye="focus",F=$a;break;case"focusout":ye="blur",F=$a;break;case"beforeblur":case"afterblur":F=$a;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=kn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=pd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=Dc;break;case t_:case n_:case r_:F=Ka;break;case i_:F=Mc;break;case"scroll":case"scrollend":F=wc;break;case"wheel":F=Xa;break;case"copy":case"cut":case"paste":F=Qa;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=wl;break;case"toggle":case"beforetoggle":F=Pc}var de=(i&4)!==0,$e=!de&&(r==="scroll"||r==="scrollend"),L=de?q!==null?q+"Capture":null:q;de=[];for(var N=B,z;N!==null;){var Y=N;if(z=Y.stateNode,Y=Y.tag,Y!==5&&Y!==26&&Y!==27||z===null||L===null||(Y=$s(N,L),Y!=null&&de.push(eu(N,Y,z))),$e)break;N=N.return}0<de.length&&(q=new F(q,ye,null,a,Q),W.push({event:q,listeners:de}))}}if((i&7)===0){e:{if(q=r==="mouseover"||r==="pointerover",F=r==="mouseout"||r==="pointerout",q&&a!==Kr&&(ye=a.relatedTarget||a.fromElement)&&(Fr(ye)||ye[On]))break e;if((F||q)&&(q=Q.window===Q?Q:(q=Q.ownerDocument)?q.defaultView||q.parentWindow:window,F?(ye=a.relatedTarget||a.toElement,F=B,ye=ye?Fr(ye):null,ye!==null&&($e=u(ye),de=ye.tag,ye!==$e||de!==5&&de!==27&&de!==6)&&(ye=null)):(F=null,ye=B),F!==ye)){if(de=kn,Y="onMouseLeave",L="onMouseEnter",N="mouse",(r==="pointerout"||r==="pointerover")&&(de=wl,Y="onPointerLeave",L="onPointerEnter",N="pointer"),$e=F==null?q:fr(F),z=ye==null?q:fr(ye),q=new de(Y,N+"leave",F,a,Q),q.target=$e,q.relatedTarget=z,Y=null,Fr(Q)===B&&(de=new de(L,N+"enter",ye,a,Q),de.target=z,de.relatedTarget=$e,Y=de),$e=Y,F&&ye)t:{for(de=F,L=ye,N=0,z=de;z;z=bo(z))N++;for(z=0,Y=L;Y;Y=bo(Y))z++;for(;0<N-z;)de=bo(de),N--;for(;0<z-N;)L=bo(L),z--;for(;N--;){if(de===L||L!==null&&de===L.alternate)break t;de=bo(de),L=bo(L)}de=null}else de=null;F!==null&&SE(W,q,F,de,!1),ye!==null&&$e!==null&&SE(W,$e,ye,de,!0)}}e:{if(q=B?fr(B):window,F=q.nodeName&&q.nodeName.toLowerCase(),F==="select"||F==="input"&&q.type==="file")var le=Hy;else if(Rt(q))if(Gy)le=jR;else{le=zR;var we=UR}else F=q.nodeName,!F||F.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?B&&gl(B.elementType)&&(le=Hy):le=BR;if(le&&(le=le(r,B))){Zr(W,le,a,Q);break e}we&&we(r,q,B),r==="focusout"&&B&&q.type==="number"&&B.memoizedProps.value!=null&&xi(q,"number",q.value)}switch(we=B?fr(B):window,r){case"focusin":(Rt(we)||we.contentEditable==="true")&&(Wa=we,Ed=B,Rl=null);break;case"focusout":Rl=Ed=Wa=null;break;case"mousedown":Td=!0;break;case"contextmenu":case"mouseup":case"dragend":Td=!1,Jy(W,a,Q);break;case"selectionchange":if(FR)break;case"keydown":case"keyup":Jy(W,a,Q)}var ue;if(vr)e:{switch(r){case"compositionstart":var me="onCompositionStart";break e;case"compositionend":me="onCompositionEnd";break e;case"compositionupdate":me="onCompositionUpdate";break e}me=void 0}else De?$(r,a)&&(me="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(me="onCompositionStart");me&&(_&&a.locale!=="ko"&&(De||me!=="onCompositionStart"?me==="onCompositionEnd"&&De&&(ue=_l()):(pr=Q,Pi="value"in pr?pr.value:pr.textContent,De=!0)),we=Th(B,me),0<we.length&&(me=new Tl(me,r,null,a,Q),W.push({event:me,listeners:we}),ue?me.data=ue:(ue=ne(a),ue!==null&&(me.data=ue)))),(ue=g?St(r,a):Oe(r,a))&&(me=Th(B,"onBeforeInput"),0<me.length&&(we=new Tl("onBeforeInput","beforeinput",null,a,Q),W.push({event:we,listeners:me}),we.data=ue)),SI(W,r,B,a,Q)}wE(W,i)})}function eu(r,i,a){return{instance:r,listener:i,currentTarget:a}}function Th(r,i){for(var a=i+"Capture",l=[];r!==null;){var f=r,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=$s(r,a),f!=null&&l.unshift(eu(r,f,m)),f=$s(r,i),f!=null&&l.push(eu(r,f,m))),r.tag===3)return l;r=r.return}return[]}function bo(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r||null}function SE(r,i,a,l,f){for(var m=i._reactName,v=[];a!==null&&a!==l;){var T=a,I=T.alternate,B=T.stateNode;if(T=T.tag,I!==null&&I===l)break;T!==5&&T!==26&&T!==27||B===null||(I=B,f?(B=$s(a,m),B!=null&&v.unshift(eu(a,B,I))):f||(B=$s(a,m),B!=null&&v.push(eu(a,B,I)))),a=a.return}v.length!==0&&r.push({event:i,listeners:v})}var NI=/\r\n?/g,DI=/\u0000|\uFFFD/g;function RE(r){return(typeof r=="string"?r:""+r).replace(NI,`
`).replace(DI,"")}function IE(r,i){return i=RE(i),RE(r)===i}function bh(){}function Ge(r,i,a,l,f,m){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Mn(r,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Mn(r,""+l);break;case"className":dr(r,"class",l);break;case"tabIndex":dr(r,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":dr(r,a,l);break;case"style":pl(r,l,m);break;case"data":if(i!=="object"){dr(r,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){r.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){r.removeAttribute(a);break}l=qa(""+l),r.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){r.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(a==="formAction"?(i!=="input"&&Ge(r,i,"name",f.name,f,null),Ge(r,i,"formEncType",f.formEncType,f,null),Ge(r,i,"formMethod",f.formMethod,f,null),Ge(r,i,"formTarget",f.formTarget,f,null)):(Ge(r,i,"encType",f.encType,f,null),Ge(r,i,"method",f.method,f,null),Ge(r,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){r.removeAttribute(a);break}l=qa(""+l),r.setAttribute(a,l);break;case"onClick":l!=null&&(r.onclick=bh);break;case"onScroll":l!=null&&Se("scroll",r);break;case"onScrollEnd":l!=null&&Se("scrollend",r);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(f.children!=null)throw Error(s(60));r.innerHTML=a}}break;case"multiple":r.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":r.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){r.removeAttribute("xlink:href");break}a=qa(""+l),r.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?r.setAttribute(a,""+l):r.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?r.setAttribute(a,""):r.removeAttribute(a);break;case"capture":case"download":l===!0?r.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?r.setAttribute(a,l):r.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?r.setAttribute(a,l):r.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?r.removeAttribute(a):r.setAttribute(a,l);break;case"popover":Se("beforetoggle",r),Se("toggle",r),Mi(r,"popover",l);break;case"xlinkActuate":Ut(r,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ut(r,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ut(r,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ut(r,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ut(r,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ut(r,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ut(r,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ut(r,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ut(r,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Mi(r,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=dd.get(a)||a,Mi(r,a,l))}}function Hm(r,i,a,l,f,m){switch(a){case"style":pl(r,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(f.children!=null)throw Error(s(60));r.innerHTML=a}}break;case"children":typeof l=="string"?Mn(r,l):(typeof l=="number"||typeof l=="bigint")&&Mn(r,""+l);break;case"onScroll":l!=null&&Se("scroll",r);break;case"onScrollEnd":l!=null&&Se("scrollend",r);break;case"onClick":l!=null&&(r.onclick=bh);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!La.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(f=a.endsWith("Capture"),i=a.slice(2,f?a.length-7:void 0),m=r[yt]||null,m=m!=null?m[a]:null,typeof m=="function"&&r.removeEventListener(i,m,f),typeof l=="function")){typeof m!="function"&&m!==null&&(a in r?r[a]=null:r.hasAttribute(a)&&r.removeAttribute(a)),r.addEventListener(i,l,f);break e}a in r?r[a]=l:l===!0?r.setAttribute(a,""):Mi(r,a,l)}}}function qt(r,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",r),Se("load",r);var l=!1,f=!1,m;for(m in a)if(a.hasOwnProperty(m)){var v=a[m];if(v!=null)switch(m){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Ge(r,i,m,v,a,null)}}f&&Ge(r,i,"srcSet",a.srcSet,a,null),l&&Ge(r,i,"src",a.src,a,null);return;case"input":Se("invalid",r);var T=m=v=f=null,I=null,B=null;for(l in a)if(a.hasOwnProperty(l)){var Q=a[l];if(Q!=null)switch(l){case"name":f=Q;break;case"type":v=Q;break;case"checked":I=Q;break;case"defaultChecked":B=Q;break;case"value":m=Q;break;case"defaultValue":T=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(s(137,i));break;default:Ge(r,i,l,Q,a,null)}}Fs(r,m,T,I,B,v,f,!1),ja(r);return;case"select":Se("invalid",r),l=v=m=null;for(f in a)if(a.hasOwnProperty(f)&&(T=a[f],T!=null))switch(f){case"value":m=T;break;case"defaultValue":v=T;break;case"multiple":l=T;default:Ge(r,i,f,T,a,null)}i=m,a=v,r.multiple=!!l,i!=null?$r(r,!!l,i,!1):a!=null&&$r(r,!!l,a,!0);return;case"textarea":Se("invalid",r),m=f=l=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":l=T;break;case"defaultValue":f=T;break;case"children":m=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Ge(r,i,v,T,a,null)}Hs(r,l,f,m),ja(r);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(l=a[I],l!=null))switch(I){case"selected":r.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ge(r,i,I,l,a,null)}return;case"dialog":Se("beforetoggle",r),Se("toggle",r),Se("cancel",r),Se("close",r);break;case"iframe":case"object":Se("load",r);break;case"video":case"audio":for(l=0;l<Jl.length;l++)Se(Jl[l],r);break;case"image":Se("error",r),Se("load",r);break;case"details":Se("toggle",r);break;case"embed":case"source":case"link":Se("error",r),Se("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(B in a)if(a.hasOwnProperty(B)&&(l=a[B],l!=null))switch(B){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Ge(r,i,B,l,a,null)}return;default:if(gl(i)){for(Q in a)a.hasOwnProperty(Q)&&(l=a[Q],l!==void 0&&Hm(r,i,Q,l,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(l=a[T],l!=null&&Ge(r,i,T,l,a,null))}function OI(r,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,v=null,T=null,I=null,B=null,Q=null;for(F in a){var W=a[F];if(a.hasOwnProperty(F)&&W!=null)switch(F){case"checked":break;case"value":break;case"defaultValue":I=W;default:l.hasOwnProperty(F)||Ge(r,i,F,null,l,W)}}for(var q in l){var F=l[q];if(W=a[q],l.hasOwnProperty(q)&&(F!=null||W!=null))switch(q){case"type":m=F;break;case"name":f=F;break;case"checked":B=F;break;case"defaultChecked":Q=F;break;case"value":v=F;break;case"defaultValue":T=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(s(137,i));break;default:F!==W&&Ge(r,i,q,F,l,W)}}yn(r,v,T,I,B,Q,m,f);return;case"select":F=v=T=q=null;for(m in a)if(I=a[m],a.hasOwnProperty(m)&&I!=null)switch(m){case"value":break;case"multiple":F=I;default:l.hasOwnProperty(m)||Ge(r,i,m,null,l,I)}for(f in l)if(m=l[f],I=a[f],l.hasOwnProperty(f)&&(m!=null||I!=null))switch(f){case"value":q=m;break;case"defaultValue":T=m;break;case"multiple":v=m;default:m!==I&&Ge(r,i,f,m,l,I)}i=T,a=v,l=F,q!=null?$r(r,!!a,q,!1):!!l!=!!a&&(i!=null?$r(r,!!a,i,!0):$r(r,!!a,a?[]:"",!1));return;case"textarea":F=q=null;for(T in a)if(f=a[T],a.hasOwnProperty(T)&&f!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ge(r,i,T,null,l,f)}for(v in l)if(f=l[v],m=a[v],l.hasOwnProperty(v)&&(f!=null||m!=null))switch(v){case"value":q=f;break;case"defaultValue":F=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==m&&Ge(r,i,v,f,l,m)}Fe(r,q,F);return;case"option":for(var ye in a)if(q=a[ye],a.hasOwnProperty(ye)&&q!=null&&!l.hasOwnProperty(ye))switch(ye){case"selected":r.selected=!1;break;default:Ge(r,i,ye,null,l,q)}for(I in l)if(q=l[I],F=a[I],l.hasOwnProperty(I)&&q!==F&&(q!=null||F!=null))switch(I){case"selected":r.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:Ge(r,i,I,q,l,F)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var de in a)q=a[de],a.hasOwnProperty(de)&&q!=null&&!l.hasOwnProperty(de)&&Ge(r,i,de,null,l,q);for(B in l)if(q=l[B],F=a[B],l.hasOwnProperty(B)&&q!==F&&(q!=null||F!=null))switch(B){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,i));break;default:Ge(r,i,B,q,l,F)}return;default:if(gl(i)){for(var $e in a)q=a[$e],a.hasOwnProperty($e)&&q!==void 0&&!l.hasOwnProperty($e)&&Hm(r,i,$e,void 0,l,q);for(Q in l)q=l[Q],F=a[Q],!l.hasOwnProperty(Q)||q===F||q===void 0&&F===void 0||Hm(r,i,Q,q,l,F);return}}for(var L in a)q=a[L],a.hasOwnProperty(L)&&q!=null&&!l.hasOwnProperty(L)&&Ge(r,i,L,null,l,q);for(W in l)q=l[W],F=a[W],!l.hasOwnProperty(W)||q===F||q==null&&F==null||Ge(r,i,W,q,l,F)}var Gm=null,$m=null;function wh(r){return r.nodeType===9?r:r.ownerDocument}function CE(r){switch(r){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function NE(r,i){if(r===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return r===1&&i==="foreignObject"?0:r}function Km(r,i){return r==="textarea"||r==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Qm=null;function MI(){var r=window.event;return r&&r.type==="popstate"?r===Qm?!1:(Qm=r,!0):(Qm=null,!1)}var DE=typeof setTimeout=="function"?setTimeout:void 0,xI=typeof clearTimeout=="function"?clearTimeout:void 0,OE=typeof Promise=="function"?Promise:void 0,PI=typeof queueMicrotask=="function"?queueMicrotask:typeof OE<"u"?function(r){return OE.resolve(null).then(r).catch(kI)}:DE;function kI(r){setTimeout(function(){throw r})}function Xi(r){return r==="head"}function ME(r,i){var a=i,l=0,f=0;do{var m=a.nextSibling;if(r.removeChild(a),m&&m.nodeType===8)if(a=m.data,a==="/$"){if(0<l&&8>l){a=l;var v=r.ownerDocument;if(a&1&&tu(v.documentElement),a&2&&tu(v.body),a&4)for(a=v.head,tu(a),v=a.firstChild;v;){var T=v.nextSibling,I=v.nodeName;v[zs]||I==="SCRIPT"||I==="STYLE"||I==="LINK"&&v.rel.toLowerCase()==="stylesheet"||a.removeChild(v),v=T}}if(f===0){r.removeChild(m),uu(i);return}f--}else a==="$"||a==="$?"||a==="$!"?f++:l=a.charCodeAt(0)-48;else l=0;a=m}while(a);uu(i)}function Ym(r){var i=r.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ym(a),Oi(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}r.removeChild(a)}}function VI(r,i,a,l){for(;r.nodeType===1;){var f=a;if(r.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(l){if(!r[zs])switch(i){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(m=r.getAttribute("rel"),m==="stylesheet"&&r.hasAttribute("data-precedence"))break;if(m!==f.rel||r.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||r.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||r.getAttribute("title")!==(f.title==null?null:f.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(m=r.getAttribute("src"),(m!==(f.src==null?null:f.src)||r.getAttribute("type")!==(f.type==null?null:f.type)||r.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}}else if(i==="input"&&r.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&r.getAttribute("name")===m)return r}else return r;if(r=tr(r.nextSibling),r===null)break}return null}function LI(r,i,a){if(i==="")return null;for(;r.nodeType!==3;)if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!a||(r=tr(r.nextSibling),r===null))return null;return r}function Xm(r){return r.data==="$!"||r.data==="$?"&&r.ownerDocument.readyState==="complete"}function UI(r,i){var a=r.ownerDocument;if(r.data!=="$?"||a.readyState==="complete")i();else{var l=function(){i(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),r._reactRetry=l}}function tr(r){for(;r!=null;r=r.nextSibling){var i=r.nodeType;if(i===1||i===3)break;if(i===8){if(i=r.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return r}var Wm=null;function xE(r){r=r.previousSibling;for(var i=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return r;i--}else a==="/$"&&i++}r=r.previousSibling}return null}function PE(r,i,a){switch(i=wh(a),r){case"html":if(r=i.documentElement,!r)throw Error(s(452));return r;case"head":if(r=i.head,!r)throw Error(s(453));return r;case"body":if(r=i.body,!r)throw Error(s(454));return r;default:throw Error(s(451))}}function tu(r){for(var i=r.attributes;i.length;)r.removeAttributeNode(i[0]);Oi(r)}var qn=new Map,kE=new Set;function Ah(r){return typeof r.getRootNode=="function"?r.getRootNode():r.nodeType===9?r:r.ownerDocument}var hi=re.d;re.d={f:zI,r:BI,D:jI,C:qI,L:FI,m:HI,X:$I,S:GI,M:KI};function zI(){var r=hi.f(),i=ph();return r||i}function BI(r){var i=hr(r);i!==null&&i.tag===5&&i.type==="form"?tv(i):hi.r(r)}var wo=typeof document>"u"?null:document;function VE(r,i,a){var l=wo;if(l&&typeof i=="string"&&i){var f=_t(i);f='link[rel="'+r+'"][href="'+f+'"]',typeof a=="string"&&(f+='[crossorigin="'+a+'"]'),kE.has(f)||(kE.add(f),r={rel:r,crossOrigin:a,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),qt(i,"link",r),ht(i),l.head.appendChild(i)))}}function jI(r){hi.D(r),VE("dns-prefetch",r,null)}function qI(r,i){hi.C(r,i),VE("preconnect",r,i)}function FI(r,i,a){hi.L(r,i,a);var l=wo;if(l&&r&&i){var f='link[rel="preload"][as="'+_t(i)+'"]';i==="image"&&a&&a.imageSrcSet?(f+='[imagesrcset="'+_t(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(f+='[imagesizes="'+_t(a.imageSizes)+'"]')):f+='[href="'+_t(r)+'"]';var m=f;switch(i){case"style":m=Ao(r);break;case"script":m=So(r)}qn.has(m)||(r=E({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:r,as:i},a),qn.set(m,r),l.querySelector(f)!==null||i==="style"&&l.querySelector(nu(m))||i==="script"&&l.querySelector(ru(m))||(i=l.createElement("link"),qt(i,"link",r),ht(i),l.head.appendChild(i)))}}function HI(r,i){hi.m(r,i);var a=wo;if(a&&r){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+_t(l)+'"][href="'+_t(r)+'"]',m=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=So(r)}if(!qn.has(m)&&(r=E({rel:"modulepreload",href:r},i),qn.set(m,r),a.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ru(m)))return}l=a.createElement("link"),qt(l,"link",r),ht(l),a.head.appendChild(l)}}}function GI(r,i,a){hi.S(r,i,a);var l=wo;if(l&&r){var f=tn(l).hoistableStyles,m=Ao(r);i=i||"default";var v=f.get(m);if(!v){var T={loading:0,preload:null};if(v=l.querySelector(nu(m)))T.loading=5;else{r=E({rel:"stylesheet",href:r,"data-precedence":i},a),(a=qn.get(m))&&Zm(r,a);var I=v=l.createElement("link");ht(I),qt(I,"link",r),I._p=new Promise(function(B,Q){I.onload=B,I.onerror=Q}),I.addEventListener("load",function(){T.loading|=1}),I.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Sh(v,i,l)}v={type:"stylesheet",instance:v,count:1,state:T},f.set(m,v)}}}function $I(r,i){hi.X(r,i);var a=wo;if(a&&r){var l=tn(a).hoistableScripts,f=So(r),m=l.get(f);m||(m=a.querySelector(ru(f)),m||(r=E({src:r,async:!0},i),(i=qn.get(f))&&Jm(r,i),m=a.createElement("script"),ht(m),qt(m,"link",r),a.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function KI(r,i){hi.M(r,i);var a=wo;if(a&&r){var l=tn(a).hoistableScripts,f=So(r),m=l.get(f);m||(m=a.querySelector(ru(f)),m||(r=E({src:r,async:!0,type:"module"},i),(i=qn.get(f))&&Jm(r,i),m=a.createElement("script"),ht(m),qt(m,"link",r),a.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function LE(r,i,a,l){var f=(f=ur.current)?Ah(f):null;if(!f)throw Error(s(446));switch(r){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=Ao(a.href),a=tn(f).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){r=Ao(a.href);var m=tn(f).hoistableStyles,v=m.get(r);if(v||(f=f.ownerDocument||f,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(r,v),(m=f.querySelector(nu(r)))&&!m._p&&(v.instance=m,v.state.loading=5),qn.has(r)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},qn.set(r,a),m||QI(f,r,a,v.state))),i&&l===null)throw Error(s(528,""));return v}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=So(a),a=tn(f).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,r))}}function Ao(r){return'href="'+_t(r)+'"'}function nu(r){return'link[rel="stylesheet"]['+r+"]"}function UE(r){return E({},r,{"data-precedence":r.precedence,precedence:null})}function QI(r,i,a,l){r.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=r.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),qt(i,"link",a),ht(i),r.head.appendChild(i))}function So(r){return'[src="'+_t(r)+'"]'}function ru(r){return"script[async]"+r}function zE(r,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=r.querySelector('style[data-href~="'+_t(a.href)+'"]');if(l)return i.instance=l,ht(l),l;var f=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(r.ownerDocument||r).createElement("style"),ht(l),qt(l,"style",f),Sh(l,a.precedence,r),i.instance=l;case"stylesheet":f=Ao(a.href);var m=r.querySelector(nu(f));if(m)return i.state.loading|=4,i.instance=m,ht(m),m;l=UE(a),(f=qn.get(f))&&Zm(l,f),m=(r.ownerDocument||r).createElement("link"),ht(m);var v=m;return v._p=new Promise(function(T,I){v.onload=T,v.onerror=I}),qt(m,"link",l),i.state.loading|=4,Sh(m,a.precedence,r),i.instance=m;case"script":return m=So(a.src),(f=r.querySelector(ru(m)))?(i.instance=f,ht(f),f):(l=a,(f=qn.get(m))&&(l=E({},a),Jm(l,f)),r=r.ownerDocument||r,f=r.createElement("script"),ht(f),qt(f,"link",l),r.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Sh(l,a.precedence,r));return i.instance}function Sh(r,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,m=f,v=0;v<l.length;v++){var T=l[v];if(T.dataset.precedence===i)m=T;else if(m!==f)break}m?m.parentNode.insertBefore(r,m.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(r,i.firstChild))}function Zm(r,i){r.crossOrigin==null&&(r.crossOrigin=i.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=i.referrerPolicy),r.title==null&&(r.title=i.title)}function Jm(r,i){r.crossOrigin==null&&(r.crossOrigin=i.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=i.referrerPolicy),r.integrity==null&&(r.integrity=i.integrity)}var Rh=null;function BE(r,i,a){if(Rh===null){var l=new Map,f=Rh=new Map;f.set(a,l)}else f=Rh,l=f.get(a),l||(l=new Map,f.set(a,l));if(l.has(r))return l;for(l.set(r,null),a=a.getElementsByTagName(r),f=0;f<a.length;f++){var m=a[f];if(!(m[zs]||m[At]||r==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var v=m.getAttribute(i)||"";v=r+v;var T=l.get(v);T?T.push(m):l.set(v,[m])}}return l}function jE(r,i,a){r=r.ownerDocument||r,r.head.insertBefore(a,i==="title"?r.querySelector("head > title"):null)}function YI(r,i,a){if(a===1||i.itemProp!=null)return!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return r=i.disabled,typeof i.precedence=="string"&&r==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function qE(r){return!(r.type==="stylesheet"&&(r.state.loading&3)===0)}var iu=null;function XI(){}function WI(r,i,a){if(iu===null)throw Error(s(475));var l=iu;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var f=Ao(a.href),m=r.querySelector(nu(f));if(m){r=m._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(l.count++,l=Ih.bind(l),r.then(l,l)),i.state.loading|=4,i.instance=m,ht(m);return}m=r.ownerDocument||r,a=UE(a),(f=qn.get(f))&&Zm(a,f),m=m.createElement("link"),ht(m);var v=m;v._p=new Promise(function(T,I){v.onload=T,v.onerror=I}),qt(m,"link",a),i.instance=m}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,r),(r=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=Ih.bind(l),r.addEventListener("load",i),r.addEventListener("error",i))}}function ZI(){if(iu===null)throw Error(s(475));var r=iu;return r.stylesheets&&r.count===0&&ep(r,r.stylesheets),0<r.count?function(i){var a=setTimeout(function(){if(r.stylesheets&&ep(r,r.stylesheets),r.unsuspend){var l=r.unsuspend;r.unsuspend=null,l()}},6e4);return r.unsuspend=i,function(){r.unsuspend=null,clearTimeout(a)}}:null}function Ih(){if(this.count--,this.count===0){if(this.stylesheets)ep(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}var Ch=null;function ep(r,i){r.stylesheets=null,r.unsuspend!==null&&(r.count++,Ch=new Map,i.forEach(JI,r),Ch=null,Ih.call(r))}function JI(r,i){if(!(i.state.loading&4)){var a=Ch.get(r);if(a)var l=a.get(null);else{a=new Map,Ch.set(r,a);for(var f=r.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var v=f[m];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),l=v)}l&&a.set(null,l)}f=i.instance,v=f.getAttribute("data-precedence"),m=a.get(v)||l,m===l&&a.set(null,f),a.set(v,f),this.count++,l=Ih.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),m?m.parentNode.insertBefore(f,m.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(f,r.firstChild)),i.state.loading|=4}}var su={$$typeof:ee,Provider:null,Consumer:null,_currentValue:ce,_currentValue2:ce,_threadCount:0};function e1(r,i,a,l,f,m,v,T){this.tag=1,this.containerInfo=r,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=jr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jr(0),this.hiddenUpdates=jr(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function FE(r,i,a,l,f,m,v,T,I,B,Q,W){return r=new e1(r,i,a,v,T,I,B,W),i=1,m===!0&&(i|=24),m=vn(3,null,null,i),r.current=m,m.stateNode=r,i=kd(),i.refCount++,r.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:a,cache:i},zd(m),r}function HE(r){return r?(r=to,r):to}function GE(r,i,a,l,f,m){f=HE(f),l.context===null?l.context=f:l.pendingContext=f,l=Li(i),l.payload={element:a},m=m===void 0?null:m,m!==null&&(l.callback=m),a=Ui(r,l,i),a!==null&&(An(a,r,i),kl(a,r,i))}function $E(r,i){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<i?a:i}}function tp(r,i){$E(r,i),(r=r.alternate)&&$E(r,i)}function KE(r){if(r.tag===13){var i=eo(r,67108864);i!==null&&An(i,r,67108864),tp(r,67108864)}}var Nh=!0;function t1(r,i,a,l){var f=K.T;K.T=null;var m=re.p;try{re.p=2,np(r,i,a,l)}finally{re.p=m,K.T=f}}function n1(r,i,a,l){var f=K.T;K.T=null;var m=re.p;try{re.p=8,np(r,i,a,l)}finally{re.p=m,K.T=f}}function np(r,i,a,l){if(Nh){var f=rp(l);if(f===null)Fm(r,i,l,Dh,a),YE(r,l);else if(i1(f,r,i,a,l))l.stopPropagation();else if(YE(r,l),i&4&&-1<r1.indexOf(r)){for(;f!==null;){var m=hr(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var v=Xn(m.pendingLanes);if(v!==0){var T=m;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var I=1<<31-Kt(v);T.entanglements[1]|=I,v&=~I}Sr(m),(je&6)===0&&(dh=Dn()+500,Zl(0))}}break;case 13:T=eo(m,2),T!==null&&An(T,m,2),ph(),tp(m,2)}if(m=rp(l),m===null&&Fm(r,i,l,Dh,a),m===f)break;f=m}f!==null&&l.stopPropagation()}else Fm(r,i,l,null,a)}}function rp(r){return r=xn(r),ip(r)}var Dh=null;function ip(r){if(Dh=null,r=Fr(r),r!==null){var i=u(r);if(i===null)r=null;else{var a=i.tag;if(a===13){if(r=h(i),r!==null)return r;r=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;r=null}else i!==r&&(r=null)}}return Dh=r,null}function QE(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(od()){case rl:return 2;case xa:return 8;case Ps:case ld:return 32;case Pa:return 268435456;default:return 32}default:return 32}}var sp=!1,Wi=null,Zi=null,Ji=null,au=new Map,ou=new Map,es=[],r1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function YE(r,i){switch(r){case"focusin":case"focusout":Wi=null;break;case"dragenter":case"dragleave":Zi=null;break;case"mouseover":case"mouseout":Ji=null;break;case"pointerover":case"pointerout":au.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ou.delete(i.pointerId)}}function lu(r,i,a,l,f,m){return r===null||r.nativeEvent!==m?(r={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:m,targetContainers:[f]},i!==null&&(i=hr(i),i!==null&&KE(i)),r):(r.eventSystemFlags|=l,i=r.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),r)}function i1(r,i,a,l,f){switch(i){case"focusin":return Wi=lu(Wi,r,i,a,l,f),!0;case"dragenter":return Zi=lu(Zi,r,i,a,l,f),!0;case"mouseover":return Ji=lu(Ji,r,i,a,l,f),!0;case"pointerover":var m=f.pointerId;return au.set(m,lu(au.get(m)||null,r,i,a,l,f)),!0;case"gotpointercapture":return m=f.pointerId,ou.set(m,lu(ou.get(m)||null,r,i,a,l,f)),!0}return!1}function XE(r){var i=Fr(r.target);if(i!==null){var a=u(i);if(a!==null){if(i=a.tag,i===13){if(i=h(a),i!==null){r.blockedOn=i,pc(r.priority,function(){if(a.tag===13){var l=wn();l=Ci(l);var f=eo(a,l);f!==null&&An(f,a,l),tp(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Oh(r){if(r.blockedOn!==null)return!1;for(var i=r.targetContainers;0<i.length;){var a=rp(r.nativeEvent);if(a===null){a=r.nativeEvent;var l=new a.constructor(a.type,a);Kr=l,a.target.dispatchEvent(l),Kr=null}else return i=hr(a),i!==null&&KE(i),r.blockedOn=a,!1;i.shift()}return!0}function WE(r,i,a){Oh(r)&&a.delete(i)}function s1(){sp=!1,Wi!==null&&Oh(Wi)&&(Wi=null),Zi!==null&&Oh(Zi)&&(Zi=null),Ji!==null&&Oh(Ji)&&(Ji=null),au.forEach(WE),ou.forEach(WE)}function Mh(r,i){r.blockedOn===i&&(r.blockedOn=null,sp||(sp=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,s1)))}var xh=null;function ZE(r){xh!==r&&(xh=r,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){xh===r&&(xh=null);for(var i=0;i<r.length;i+=3){var a=r[i],l=r[i+1],f=r[i+2];if(typeof l!="function"){if(ip(l||a)===null)continue;break}var m=hr(a);m!==null&&(r.splice(i,3),i-=3,im(m,{pending:!0,data:f,method:a.method,action:l},l,f))}}))}function uu(r){function i(I){return Mh(I,r)}Wi!==null&&Mh(Wi,r),Zi!==null&&Mh(Zi,r),Ji!==null&&Mh(Ji,r),au.forEach(i),ou.forEach(i);for(var a=0;a<es.length;a++){var l=es[a];l.blockedOn===r&&(l.blockedOn=null)}for(;0<es.length&&(a=es[0],a.blockedOn===null);)XE(a),a.blockedOn===null&&es.shift();if(a=(r.ownerDocument||r).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var f=a[l],m=a[l+1],v=f[yt]||null;if(typeof m=="function")v||ZE(a);else if(v){var T=null;if(m&&m.hasAttribute("formAction")){if(f=m,v=m[yt]||null)T=v.formAction;else if(ip(f)!==null)continue}else T=v.action;typeof T=="function"?a[l+1]=T:(a.splice(l,3),l-=3),ZE(a)}}}function ap(r){this._internalRoot=r}Ph.prototype.render=ap.prototype.render=function(r){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=wn();GE(a,l,r,i,null,null)},Ph.prototype.unmount=ap.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var i=r.containerInfo;GE(r.current,2,null,r,null,null),ph(),i[On]=null}};function Ph(r){this._internalRoot=r}Ph.prototype.unstable_scheduleHydration=function(r){if(r){var i=Ni();r={blockedOn:null,target:r,priority:i};for(var a=0;a<es.length&&i!==0&&i<es[a].priority;a++);es.splice(a,0,r),a===0&&XE(r)}};var JE=e.version;if(JE!=="19.1.1")throw Error(s(527,JE,"19.1.1"));re.findDOMNode=function(r){var i=r._reactInternals;if(i===void 0)throw typeof r.render=="function"?Error(s(188)):(r=Object.keys(r).join(","),Error(s(268,r)));return r=p(i),r=r!==null?y(r):null,r=r===null?null:r.stateNode,r};var a1={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:K,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kh.isDisabled&&kh.supportsFiber)try{st=kh.inject(a1),Be=kh}catch{}}return hu.createRoot=function(r,i){if(!o(r))throw Error(s(299));var a=!1,l="",f=pv,m=gv,v=yv,T=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(T=i.unstable_transitionCallbacks)),i=FE(r,1,!1,null,null,a,l,f,m,v,T,null),r[On]=i.current,qm(r),new ap(i)},hu.hydrateRoot=function(r,i,a){if(!o(r))throw Error(s(299));var l=!1,f="",m=pv,v=gv,T=yv,I=null,B=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onUncaughtError!==void 0&&(m=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(I=a.unstable_transitionCallbacks),a.formState!==void 0&&(B=a.formState)),i=FE(r,1,!0,i,a??null,l,f,m,v,T,I,B),i.context=HE(null),a=i.current,l=wn(),l=Ci(l),f=Li(l),f.callback=null,Ui(a,f,l),a=l,i.current.lanes=a,qr(i,a),Sr(i),r[On]=i.current,qm(r),new Ph(i)},hu.version="19.1.1",hu}var sT;function I1(){if(sT)return lp.exports;sT=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),lp.exports=R1(),lp.exports}var C1=I1();const N1=T1(C1),D1="modulepreload",O1=function(n){return"/"+n},aT={},or=function(e,t,s){let o=Promise.resolve();if(t&&t.length>0){let p=function(y){return Promise.all(y.map(E=>Promise.resolve(E).then(w=>({status:"fulfilled",value:w}),w=>({status:"rejected",reason:w}))))};document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),d=h?.nonce||h?.getAttribute("nonce");o=p(t.map(y=>{if(y=O1(y),y in aT)return;aT[y]=!0;const E=y.endsWith(".css"),w=E?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${y}"]${w}`))return;const A=document.createElement("link");if(A.rel=E?"stylesheet":D1,E||(A.as="script"),A.crossOrigin="",A.href=y,d&&A.setAttribute("nonce",d),document.head.appendChild(A),E)return new Promise((k,x)=>{A.addEventListener("load",k),A.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${y}`)))})}))}function u(h){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=h,window.dispatchEvent(d),!d.defaultPrevented)throw h}return o.then(h=>{for(const d of h||[])d.status==="rejected"&&u(d.reason);return e().catch(u)})};/**
 * react-router v7.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var oT="popstate";function M1(n={}){function e(s,o){let{pathname:u,search:h,hash:d}=s.location;return Up("",{pathname:u,search:h,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(s,o){return typeof o=="string"?o:Pu(o)}return P1(e,t,null,n)}function rt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function sr(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function x1(){return Math.random().toString(36).substring(2,10)}function lT(n,e){return{usr:n.state,key:n.key,idx:e}}function Up(n,e,t=null,s){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?$o(e):e,state:t,key:e&&e.key||s||x1()}}function Pu({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function $o(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let s=n.indexOf("?");s>=0&&(e.search=n.substring(s),n=n.substring(0,s)),n&&(e.pathname=n)}return e}function P1(n,e,t,s={}){let{window:o=document.defaultView,v5Compat:u=!1}=s,h=o.history,d="POP",p=null,y=E();y==null&&(y=0,h.replaceState({...h.state,idx:y},""));function E(){return(h.state||{idx:null}).idx}function w(){d="POP";let V=E(),G=V==null?null:V-y;y=V,p&&p({action:d,location:j.location,delta:G})}function A(V,G){d="PUSH";let te=Up(j.location,V,G);y=E()+1;let ee=lT(te,y),oe=j.createHref(te);try{h.pushState(ee,"",oe)}catch(ae){if(ae instanceof DOMException&&ae.name==="DataCloneError")throw ae;o.location.assign(oe)}u&&p&&p({action:d,location:j.location,delta:1})}function k(V,G){d="REPLACE";let te=Up(j.location,V,G);y=E();let ee=lT(te,y),oe=j.createHref(te);h.replaceState(ee,"",oe),u&&p&&p({action:d,location:j.location,delta:0})}function x(V){return k1(V)}let j={get action(){return d},get location(){return n(o,h)},listen(V){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(oT,w),p=V,()=>{o.removeEventListener(oT,w),p=null}},createHref(V){return e(o,V)},createURL:x,encodeLocation(V){let G=x(V);return{pathname:G.pathname,search:G.search,hash:G.hash}},push:A,replace:k,go(V){return h.go(V)}};return j}function k1(n,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),rt(t,"No window.location.(origin|href) available to create URL");let s=typeof n=="string"?n:Pu(n);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=t+s),new URL(s,t)}function wb(n,e,t="/"){return V1(n,e,t,!1)}function V1(n,e,t,s){let o=typeof e=="string"?$o(e):e,u=yi(o.pathname||"/",t);if(u==null)return null;let h=Ab(n);L1(h);let d=null;for(let p=0;d==null&&p<h.length;++p){let y=Q1(u);d=$1(h[p],y,s)}return d}function Ab(n,e=[],t=[],s=""){let o=(u,h,d)=>{let p={relativePath:d===void 0?u.path||"":d,caseSensitive:u.caseSensitive===!0,childrenIndex:h,route:u};p.relativePath.startsWith("/")&&(rt(p.relativePath.startsWith(s),`Absolute route path "${p.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(s.length));let y=gi([s,p.relativePath]),E=t.concat(p);u.children&&u.children.length>0&&(rt(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),Ab(u.children,e,E,y)),!(u.path==null&&!u.index)&&e.push({path:y,score:H1(y,u.index),routesMeta:E})};return n.forEach((u,h)=>{if(u.path===""||!u.path?.includes("?"))o(u,h);else for(let d of Sb(u.path))o(u,h,d)}),e}function Sb(n){let e=n.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),u=t.replace(/\?$/,"");if(s.length===0)return o?[u,""]:[u];let h=Sb(s.join("/")),d=[];return d.push(...h.map(p=>p===""?u:[u,p].join("/"))),o&&d.push(...h),d.map(p=>n.startsWith("/")&&p===""?"/":p)}function L1(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:G1(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var U1=/^:[\w-]+$/,z1=3,B1=2,j1=1,q1=10,F1=-2,uT=n=>n==="*";function H1(n,e){let t=n.split("/"),s=t.length;return t.some(uT)&&(s+=F1),e&&(s+=B1),t.filter(o=>!uT(o)).reduce((o,u)=>o+(U1.test(u)?z1:u===""?j1:q1),s)}function G1(n,e){return n.length===e.length&&n.slice(0,-1).every((s,o)=>s===e[o])?n[n.length-1]-e[e.length-1]:0}function $1(n,e,t=!1){let{routesMeta:s}=n,o={},u="/",h=[];for(let d=0;d<s.length;++d){let p=s[d],y=d===s.length-1,E=u==="/"?e:e.slice(u.length)||"/",w=lf({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},E),A=p.route;if(!w&&y&&t&&!s[s.length-1].route.index&&(w=lf({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},E)),!w)return null;Object.assign(o,w.params),h.push({params:o,pathname:gi([u,w.pathname]),pathnameBase:Z1(gi([u,w.pathnameBase])),route:A}),w.pathnameBase!=="/"&&(u=gi([u,w.pathnameBase]))}return h}function lf(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,s]=K1(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let u=o[0],h=u.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:s.reduce((y,{paramName:E,isOptional:w},A)=>{if(E==="*"){let x=d[A]||"";h=u.slice(0,u.length-x.length).replace(/(.)\/+$/,"$1")}const k=d[A];return w&&!k?y[E]=void 0:y[E]=(k||"").replace(/%2F/g,"/"),y},{}),pathname:u,pathnameBase:h,pattern:n}}function K1(n,e=!1,t=!0){sr(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let s=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,d,p)=>(s.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(s.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function Q1(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return sr(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function yi(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=n.charAt(t);return s&&s!=="/"?null:n.slice(t)||"/"}function Y1(n,e="/"){let{pathname:t,search:s="",hash:o=""}=typeof n=="string"?$o(n):n;return{pathname:t?t.startsWith("/")?t:X1(t,e):e,search:J1(s),hash:eC(o)}}function X1(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function hp(n,e,t,s){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function W1(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Rb(n){let e=W1(n);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function Ib(n,e,t,s=!1){let o;typeof n=="string"?o=$o(n):(o={...n},rt(!o.pathname||!o.pathname.includes("?"),hp("?","pathname","search",o)),rt(!o.pathname||!o.pathname.includes("#"),hp("#","pathname","hash",o)),rt(!o.search||!o.search.includes("#"),hp("#","search","hash",o)));let u=n===""||o.pathname==="",h=u?"/":o.pathname,d;if(h==null)d=t;else{let w=e.length-1;if(!s&&h.startsWith("..")){let A=h.split("/");for(;A[0]==="..";)A.shift(),w-=1;o.pathname=A.join("/")}d=w>=0?e[w]:"/"}let p=Y1(o,d),y=h&&h!=="/"&&h.endsWith("/"),E=(u||h===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(y||E)&&(p.pathname+="/"),p}var gi=n=>n.join("/").replace(/\/\/+/g,"/"),Z1=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),J1=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,eC=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function tC(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var Cb=["POST","PUT","PATCH","DELETE"];new Set(Cb);var nC=["GET",...Cb];new Set(nC);var Ko=H.createContext(null);Ko.displayName="DataRouter";var Of=H.createContext(null);Of.displayName="DataRouterState";H.createContext(!1);var Nb=H.createContext({isTransitioning:!1});Nb.displayName="ViewTransition";var rC=H.createContext(new Map);rC.displayName="Fetchers";var iC=H.createContext(null);iC.displayName="Await";var kr=H.createContext(null);kr.displayName="Navigation";var Qu=H.createContext(null);Qu.displayName="Location";var Vr=H.createContext({outlet:null,matches:[],isDataRoute:!1});Vr.displayName="Route";var Ag=H.createContext(null);Ag.displayName="RouteError";function sC(n,{relative:e}={}){rt(Yu(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=H.useContext(kr),{hash:o,pathname:u,search:h}=Xu(n,{relative:e}),d=u;return t!=="/"&&(d=u==="/"?t:gi([t,u])),s.createHref({pathname:d,search:h,hash:o})}function Yu(){return H.useContext(Qu)!=null}function lr(){return rt(Yu(),"useLocation() may be used only in the context of a <Router> component."),H.useContext(Qu).location}var Db="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Ob(n){H.useContext(kr).static||H.useLayoutEffect(n)}function Mb(){let{isDataRoute:n}=H.useContext(Vr);return n?_C():aC()}function aC(){rt(Yu(),"useNavigate() may be used only in the context of a <Router> component.");let n=H.useContext(Ko),{basename:e,navigator:t}=H.useContext(kr),{matches:s}=H.useContext(Vr),{pathname:o}=lr(),u=JSON.stringify(Rb(s)),h=H.useRef(!1);return Ob(()=>{h.current=!0}),H.useCallback((p,y={})=>{if(sr(h.current,Db),!h.current)return;if(typeof p=="number"){t.go(p);return}let E=Ib(p,JSON.parse(u),o,y.relative==="path");n==null&&e!=="/"&&(E.pathname=E.pathname==="/"?e:gi([e,E.pathname])),(y.replace?t.replace:t.push)(E,y.state,y)},[e,t,u,o,n])}H.createContext(null);function d6(){let{matches:n}=H.useContext(Vr),e=n[n.length-1];return e?e.params:{}}function Xu(n,{relative:e}={}){let{matches:t}=H.useContext(Vr),{pathname:s}=lr(),o=JSON.stringify(Rb(t));return H.useMemo(()=>Ib(n,JSON.parse(o),s,e==="path"),[n,o,s,e])}function oC(n,e){return xb(n,e)}function xb(n,e,t,s){rt(Yu(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=H.useContext(kr),{matches:u}=H.useContext(Vr),h=u[u.length-1],d=h?h.params:{},p=h?h.pathname:"/",y=h?h.pathnameBase:"/",E=h&&h.route;{let G=E&&E.path||"";Pb(p,!E||G.endsWith("*")||G.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${G}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${G}"> to <Route path="${G==="/"?"*":`${G}/*`}">.`)}let w=lr(),A;if(e){let G=typeof e=="string"?$o(e):e;rt(y==="/"||G.pathname?.startsWith(y),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${G.pathname}" was given in the \`location\` prop.`),A=G}else A=w;let k=A.pathname||"/",x=k;if(y!=="/"){let G=y.replace(/^\//,"").split("/");x="/"+k.replace(/^\//,"").split("/").slice(G.length).join("/")}let j=wb(n,{pathname:x});sr(E||j!=null,`No routes matched location "${A.pathname}${A.search}${A.hash}" `),sr(j==null||j[j.length-1].route.element!==void 0||j[j.length-1].route.Component!==void 0||j[j.length-1].route.lazy!==void 0,`Matched leaf route at location "${A.pathname}${A.search}${A.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let V=fC(j&&j.map(G=>Object.assign({},G,{params:Object.assign({},d,G.params),pathname:gi([y,o.encodeLocation?o.encodeLocation(G.pathname).pathname:G.pathname]),pathnameBase:G.pathnameBase==="/"?y:gi([y,o.encodeLocation?o.encodeLocation(G.pathnameBase).pathname:G.pathnameBase])})),u,t,s);return e&&V?H.createElement(Qu.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...A},navigationType:"POP"}},V):V}function lC(){let n=yC(),e=tC(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},u={padding:"2px 4px",backgroundColor:s},h=null;return console.error("Error handled by React Router default ErrorBoundary:",n),h=H.createElement(H.Fragment,null,H.createElement("p",null,"💿 Hey developer 👋"),H.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",H.createElement("code",{style:u},"ErrorBoundary")," or"," ",H.createElement("code",{style:u},"errorElement")," prop on your route.")),H.createElement(H.Fragment,null,H.createElement("h2",null,"Unexpected Application Error!"),H.createElement("h3",{style:{fontStyle:"italic"}},e),t?H.createElement("pre",{style:o},t):null,h)}var uC=H.createElement(lC,null),cC=class extends H.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?H.createElement(Vr.Provider,{value:this.props.routeContext},H.createElement(Ag.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function hC({routeContext:n,match:e,children:t}){let s=H.useContext(Ko);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),H.createElement(Vr.Provider,{value:n},t)}function fC(n,e=[],t=null,s=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let o=n,u=t?.errors;if(u!=null){let p=o.findIndex(y=>y.route.id&&u?.[y.route.id]!==void 0);rt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let h=!1,d=-1;if(t)for(let p=0;p<o.length;p++){let y=o[p];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(d=p),y.route.id){let{loaderData:E,errors:w}=t,A=y.route.loader&&!E.hasOwnProperty(y.route.id)&&(!w||w[y.route.id]===void 0);if(y.route.lazy||A){h=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((p,y,E)=>{let w,A=!1,k=null,x=null;t&&(w=u&&y.route.id?u[y.route.id]:void 0,k=y.route.errorElement||uC,h&&(d<0&&E===0?(Pb("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),A=!0,x=null):d===E&&(A=!0,x=y.route.hydrateFallbackElement||null)));let j=e.concat(o.slice(0,E+1)),V=()=>{let G;return w?G=k:A?G=x:y.route.Component?G=H.createElement(y.route.Component,null):y.route.element?G=y.route.element:G=p,H.createElement(hC,{match:y,routeContext:{outlet:p,matches:j,isDataRoute:t!=null},children:G})};return t&&(y.route.ErrorBoundary||y.route.errorElement||E===0)?H.createElement(cC,{location:t.location,revalidation:t.revalidation,component:k,error:w,children:V(),routeContext:{outlet:null,matches:j,isDataRoute:!0}}):V()},null)}function Sg(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function dC(n){let e=H.useContext(Ko);return rt(e,Sg(n)),e}function mC(n){let e=H.useContext(Of);return rt(e,Sg(n)),e}function pC(n){let e=H.useContext(Vr);return rt(e,Sg(n)),e}function Rg(n){let e=pC(n),t=e.matches[e.matches.length-1];return rt(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function gC(){return Rg("useRouteId")}function yC(){let n=H.useContext(Ag),e=mC("useRouteError"),t=Rg("useRouteError");return n!==void 0?n:e.errors?.[t]}function _C(){let{router:n}=dC("useNavigate"),e=Rg("useNavigate"),t=H.useRef(!1);return Ob(()=>{t.current=!0}),H.useCallback(async(o,u={})=>{sr(t.current,Db),t.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:e,...u}))},[n,e])}var cT={};function Pb(n,e,t){!e&&!cT[n]&&(cT[n]=!0,sr(!1,t))}H.memo(vC);function vC({routes:n,future:e,state:t}){return xb(n,void 0,t,e)}function on(n){rt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function EC({basename:n="/",children:e=null,location:t,navigationType:s="POP",navigator:o,static:u=!1}){rt(!Yu(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=n.replace(/^\/*/,"/"),d=H.useMemo(()=>({basename:h,navigator:o,static:u,future:{}}),[h,o,u]);typeof t=="string"&&(t=$o(t));let{pathname:p="/",search:y="",hash:E="",state:w=null,key:A="default"}=t,k=H.useMemo(()=>{let x=yi(p,h);return x==null?null:{location:{pathname:x,search:y,hash:E,state:w,key:A},navigationType:s}},[h,p,y,E,w,A,s]);return sr(k!=null,`<Router basename="${h}"> is not able to match the URL "${p}${y}${E}" because it does not start with the basename, so the <Router> won't render anything.`),k==null?null:H.createElement(kr.Provider,{value:d},H.createElement(Qu.Provider,{children:e,value:k}))}function TC({children:n,location:e}){return oC(zp(n),e)}function zp(n,e=[]){let t=[];return H.Children.forEach(n,(s,o)=>{if(!H.isValidElement(s))return;let u=[...e,o];if(s.type===H.Fragment){t.push.apply(t,zp(s.props.children,u));return}rt(s.type===on,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),rt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let h={id:s.props.id||u.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(h.children=zp(s.props.children,u)),t.push(h)}),t}var Kh="get",Qh="application/x-www-form-urlencoded";function Mf(n){return n!=null&&typeof n.tagName=="string"}function bC(n){return Mf(n)&&n.tagName.toLowerCase()==="button"}function wC(n){return Mf(n)&&n.tagName.toLowerCase()==="form"}function AC(n){return Mf(n)&&n.tagName.toLowerCase()==="input"}function SC(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function RC(n,e){return n.button===0&&(!e||e==="_self")&&!SC(n)}function Bp(n=""){return new URLSearchParams(typeof n=="string"||Array.isArray(n)||n instanceof URLSearchParams?n:Object.keys(n).reduce((e,t)=>{let s=n[t];return e.concat(Array.isArray(s)?s.map(o=>[t,o]):[[t,s]])},[]))}function IC(n,e){let t=Bp(n);return e&&e.forEach((s,o)=>{t.has(o)||e.getAll(o).forEach(u=>{t.append(o,u)})}),t}var Vh=null;function CC(){if(Vh===null)try{new FormData(document.createElement("form"),0),Vh=!1}catch{Vh=!0}return Vh}var NC=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function fp(n){return n!=null&&!NC.has(n)?(sr(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Qh}"`),null):n}function DC(n,e){let t,s,o,u,h;if(wC(n)){let d=n.getAttribute("action");s=d?yi(d,e):null,t=n.getAttribute("method")||Kh,o=fp(n.getAttribute("enctype"))||Qh,u=new FormData(n)}else if(bC(n)||AC(n)&&(n.type==="submit"||n.type==="image")){let d=n.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||d.getAttribute("action");if(s=p?yi(p,e):null,t=n.getAttribute("formmethod")||d.getAttribute("method")||Kh,o=fp(n.getAttribute("formenctype"))||fp(d.getAttribute("enctype"))||Qh,u=new FormData(d,n),!CC()){let{name:y,type:E,value:w}=n;if(E==="image"){let A=y?`${y}.`:"";u.append(`${A}x`,"0"),u.append(`${A}y`,"0")}else y&&u.append(y,w)}}else{if(Mf(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Kh,s=null,o=Qh,h=n}return u&&o==="text/plain"&&(h=u,u=void 0),{action:s,method:t.toLowerCase(),encType:o,formData:u,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Ig(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function OC(n,e,t){let s=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return s.pathname==="/"?s.pathname=`_root.${t}`:e&&yi(s.pathname,e)==="/"?s.pathname=`${e.replace(/\/$/,"")}/_root.${t}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${t}`,s}async function MC(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function xC(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function PC(n,e,t){let s=await Promise.all(n.map(async o=>{let u=e.routes[o.route.id];if(u){let h=await MC(u,t);return h.links?h.links():[]}return[]}));return UC(s.flat(1).filter(xC).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function hT(n,e,t,s,o,u){let h=(p,y)=>t[y]?p.route.id!==t[y].route.id:!0,d=(p,y)=>t[y].pathname!==p.pathname||t[y].route.path?.endsWith("*")&&t[y].params["*"]!==p.params["*"];return u==="assets"?e.filter((p,y)=>h(p,y)||d(p,y)):u==="data"?e.filter((p,y)=>{let E=s.routes[p.route.id];if(!E||!E.hasLoader)return!1;if(h(p,y)||d(p,y))return!0;if(p.route.shouldRevalidate){let w=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:t[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function kC(n,e,{includeHydrateFallback:t}={}){return VC(n.map(s=>{let o=e.routes[s.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function VC(n){return[...new Set(n)]}function LC(n){let e={},t=Object.keys(n).sort();for(let s of t)e[s]=n[s];return e}function UC(n,e){let t=new Set;return new Set(e),n.reduce((s,o)=>{let u=JSON.stringify(LC(o));return t.has(u)||(t.add(u),s.push({key:u,link:o})),s},[])}function kb(){let n=H.useContext(Ko);return Ig(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function zC(){let n=H.useContext(Of);return Ig(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Cg=H.createContext(void 0);Cg.displayName="FrameworkContext";function Vb(){let n=H.useContext(Cg);return Ig(n,"You must render this element inside a <HydratedRouter> element"),n}function BC(n,e){let t=H.useContext(Cg),[s,o]=H.useState(!1),[u,h]=H.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:y,onMouseLeave:E,onTouchStart:w}=e,A=H.useRef(null);H.useEffect(()=>{if(n==="render"&&h(!0),n==="viewport"){let j=G=>{G.forEach(te=>{h(te.isIntersecting)})},V=new IntersectionObserver(j,{threshold:.5});return A.current&&V.observe(A.current),()=>{V.disconnect()}}},[n]),H.useEffect(()=>{if(s){let j=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(j)}}},[s]);let k=()=>{o(!0)},x=()=>{o(!1),h(!1)};return t?n!=="intent"?[u,A,{}]:[u,A,{onFocus:fu(d,k),onBlur:fu(p,x),onMouseEnter:fu(y,k),onMouseLeave:fu(E,x),onTouchStart:fu(w,k)}]:[!1,A,{}]}function fu(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function jC({page:n,...e}){let{router:t}=kb(),s=H.useMemo(()=>wb(t.routes,n,t.basename),[t.routes,n,t.basename]);return s?H.createElement(FC,{page:n,matches:s,...e}):null}function qC(n){let{manifest:e,routeModules:t}=Vb(),[s,o]=H.useState([]);return H.useEffect(()=>{let u=!1;return PC(n,e,t).then(h=>{u||o(h)}),()=>{u=!0}},[n,e,t]),s}function FC({page:n,matches:e,...t}){let s=lr(),{manifest:o,routeModules:u}=Vb(),{basename:h}=kb(),{loaderData:d,matches:p}=zC(),y=H.useMemo(()=>hT(n,e,p,o,s,"data"),[n,e,p,o,s]),E=H.useMemo(()=>hT(n,e,p,o,s,"assets"),[n,e,p,o,s]),w=H.useMemo(()=>{if(n===s.pathname+s.search+s.hash)return[];let x=new Set,j=!1;if(e.forEach(G=>{let te=o.routes[G.route.id];!te||!te.hasLoader||(!y.some(ee=>ee.route.id===G.route.id)&&G.route.id in d&&u[G.route.id]?.shouldRevalidate||te.hasClientLoader?j=!0:x.add(G.route.id))}),x.size===0)return[];let V=OC(n,h,"data");return j&&x.size>0&&V.searchParams.set("_routes",e.filter(G=>x.has(G.route.id)).map(G=>G.route.id).join(",")),[V.pathname+V.search]},[h,d,s,o,y,e,n,u]),A=H.useMemo(()=>kC(E,o),[E,o]),k=qC(E);return H.createElement(H.Fragment,null,w.map(x=>H.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...t})),A.map(x=>H.createElement("link",{key:x,rel:"modulepreload",href:x,...t})),k.map(({key:x,link:j})=>H.createElement("link",{key:x,nonce:t.nonce,...j})))}function HC(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var Lb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Lb&&(window.__reactRouterVersion="7.8.0")}catch{}function GC({basename:n,children:e,window:t}){let s=H.useRef();s.current==null&&(s.current=M1({window:t,v5Compat:!0}));let o=s.current,[u,h]=H.useState({action:o.action,location:o.location}),d=H.useCallback(p=>{H.startTransition(()=>h(p))},[h]);return H.useLayoutEffect(()=>o.listen(d),[o,d]),H.createElement(EC,{basename:n,children:e,location:u.location,navigationType:u.action,navigator:o})}var Ub=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,bu=H.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:o,reloadDocument:u,replace:h,state:d,target:p,to:y,preventScrollReset:E,viewTransition:w,...A},k){let{basename:x}=H.useContext(kr),j=typeof y=="string"&&Ub.test(y),V,G=!1;if(typeof y=="string"&&j&&(V=y,Lb))try{let R=new URL(window.location.href),O=y.startsWith("//")?new URL(R.protocol+y):new URL(y),P=yi(O.pathname,x);O.origin===R.origin&&P!=null?y=P+O.search+O.hash:G=!0}catch{sr(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let te=sC(y,{relative:o}),[ee,oe,ae]=BC(s,A),fe=YC(y,{replace:h,state:d,target:p,preventScrollReset:E,relative:o,viewTransition:w});function D(R){e&&e(R),R.defaultPrevented||fe(R)}let S=H.createElement("a",{...A,...ae,href:V||te,onClick:G||u?e:D,ref:HC(k,oe),target:p,"data-discover":!j&&t==="render"?"true":void 0});return ee&&!j?H.createElement(H.Fragment,null,S,H.createElement(jC,{page:te})):S});bu.displayName="Link";var $C=H.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:o=!1,style:u,to:h,viewTransition:d,children:p,...y},E){let w=Xu(h,{relative:y.relative}),A=lr(),k=H.useContext(Of),{navigator:x,basename:j}=H.useContext(kr),V=k!=null&&eN(w)&&d===!0,G=x.encodeLocation?x.encodeLocation(w).pathname:w.pathname,te=A.pathname,ee=k&&k.navigation&&k.navigation.location?k.navigation.location.pathname:null;t||(te=te.toLowerCase(),ee=ee?ee.toLowerCase():null,G=G.toLowerCase()),ee&&j&&(ee=yi(ee,j)||ee);const oe=G!=="/"&&G.endsWith("/")?G.length-1:G.length;let ae=te===G||!o&&te.startsWith(G)&&te.charAt(oe)==="/",fe=ee!=null&&(ee===G||!o&&ee.startsWith(G)&&ee.charAt(G.length)==="/"),D={isActive:ae,isPending:fe,isTransitioning:V},S=ae?e:void 0,R;typeof s=="function"?R=s(D):R=[s,ae?"active":null,fe?"pending":null,V?"transitioning":null].filter(Boolean).join(" ");let O=typeof u=="function"?u(D):u;return H.createElement(bu,{...y,"aria-current":S,className:R,ref:E,style:O,to:h,viewTransition:d},typeof p=="function"?p(D):p)});$C.displayName="NavLink";var KC=H.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:o,state:u,method:h=Kh,action:d,onSubmit:p,relative:y,preventScrollReset:E,viewTransition:w,...A},k)=>{let x=ZC(),j=JC(d,{relative:y}),V=h.toLowerCase()==="get"?"get":"post",G=typeof d=="string"&&Ub.test(d),te=ee=>{if(p&&p(ee),ee.defaultPrevented)return;ee.preventDefault();let oe=ee.nativeEvent.submitter,ae=oe?.getAttribute("formmethod")||h;x(oe||ee.currentTarget,{fetcherKey:e,method:ae,navigate:t,replace:o,state:u,relative:y,preventScrollReset:E,viewTransition:w})};return H.createElement("form",{ref:k,method:V,action:j,onSubmit:s?p:te,...A,"data-discover":!G&&n==="render"?"true":void 0})});KC.displayName="Form";function QC(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function zb(n){let e=H.useContext(Ko);return rt(e,QC(n)),e}function YC(n,{target:e,replace:t,state:s,preventScrollReset:o,relative:u,viewTransition:h}={}){let d=Mb(),p=lr(),y=Xu(n,{relative:u});return H.useCallback(E=>{if(RC(E,e)){E.preventDefault();let w=t!==void 0?t:Pu(p)===Pu(y);d(n,{replace:w,state:s,preventScrollReset:o,relative:u,viewTransition:h})}},[p,d,y,t,s,e,n,o,u,h])}function m6(n){sr(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let e=H.useRef(Bp(n)),t=H.useRef(!1),s=lr(),o=H.useMemo(()=>IC(s.search,t.current?null:e.current),[s.search]),u=Mb(),h=H.useCallback((d,p)=>{const y=Bp(typeof d=="function"?d(new URLSearchParams(o)):d);t.current=!0,u("?"+y,p)},[u,o]);return[o,h]}var XC=0,WC=()=>`__${String(++XC)}__`;function ZC(){let{router:n}=zb("useSubmit"),{basename:e}=H.useContext(kr),t=gC();return H.useCallback(async(s,o={})=>{let{action:u,method:h,encType:d,formData:p,body:y}=DC(s,e);if(o.navigate===!1){let E=o.fetcherKey||WC();await n.fetch(E,t,o.action||u,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||h,formEncType:o.encType||d,flushSync:o.flushSync})}else await n.navigate(o.action||u,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||h,formEncType:o.encType||d,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,e,t])}function JC(n,{relative:e}={}){let{basename:t}=H.useContext(kr),s=H.useContext(Vr);rt(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),u={...Xu(n||".",{relative:e})},h=lr();if(n==null){u.search=h.search;let d=new URLSearchParams(u.search),p=d.getAll("index");if(p.some(E=>E==="")){d.delete("index"),p.filter(w=>w).forEach(w=>d.append("index",w));let E=d.toString();u.search=E?`?${E}`:""}}return(!n||n===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(u.pathname=u.pathname==="/"?t:gi([t,u.pathname])),Pu(u)}function eN(n,{relative:e}={}){let t=H.useContext(Nb);rt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=zb("useViewTransitionState"),o=Xu(n,{relative:e});if(!t.isTransitioning)return!1;let u=yi(t.currentLocation.pathname,s)||t.currentLocation.pathname,h=yi(t.nextLocation.pathname,s)||t.nextLocation.pathname;return lf(o.pathname,h)!=null||lf(o.pathname,u)!=null}const tN=()=>{};var fT={};/**
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
 */const Bb=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let o=n.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},nN=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const o=n[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=n[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=n[t++],h=n[t++],d=n[t++],p=((o&7)<<18|(u&63)<<12|(h&63)<<6|d&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const u=n[t++],h=n[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},jb={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<n.length;o+=3){const u=n[o],h=o+1<n.length,d=h?n[o+1]:0,p=o+2<n.length,y=p?n[o+2]:0,E=u>>2,w=(u&3)<<4|d>>4;let A=(d&15)<<2|y>>6,k=y&63;p||(k=64,h||(A=64)),s.push(t[E],t[w],t[A],t[k])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Bb(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):nN(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<n.length;){const u=t[n.charAt(o++)],d=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const w=o<n.length?t[n.charAt(o)]:64;if(++o,u==null||d==null||y==null||w==null)throw new rN;const A=u<<2|d>>4;if(s.push(A),y!==64){const k=d<<4&240|y>>2;if(s.push(k),w!==64){const x=y<<6&192|w;s.push(x)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class rN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const iN=function(n){const e=Bb(n);return jb.encodeByteArray(e,!0)},uf=function(n){return iN(n).replace(/\./g,"")},qb=function(n){try{return jb.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function sN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const aN=()=>sN().__FIREBASE_DEFAULTS__,oN=()=>{if(typeof process>"u"||typeof fT>"u")return;const n=fT.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},lN=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&qb(n[1]);return e&&JSON.parse(e)},xf=()=>{try{return tN()||aN()||oN()||lN()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Fb=n=>xf()?.emulatorHosts?.[n],Hb=n=>{const e=Fb(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Gb=()=>xf()?.config,$b=n=>xf()?.[`_${n}`];/**
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
 */class uN{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Is(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ng(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Kb(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=n.iat||0,u=n.sub||n.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...n};return[uf(JSON.stringify(t)),uf(JSON.stringify(h)),""].join(".")}const wu={};function cN(){const n={prod:[],emulator:[]};for(const e of Object.keys(wu))wu[e]?n.emulator.push(e):n.prod.push(e);return n}function hN(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let dT=!1;function Dg(n,e){if(typeof window>"u"||typeof document>"u"||!Is(window.location.host)||wu[n]===e||wu[n]||dT)return;wu[n]=e;function t(A){return`__firebase__banner__${A}`}const s="__firebase__banner",u=cN().prod.length>0;function h(){const A=document.getElementById(s);A&&A.remove()}function d(A){A.style.display="flex",A.style.background="#7faaf0",A.style.position="fixed",A.style.bottom="5px",A.style.left="5px",A.style.padding=".5em",A.style.borderRadius="5px",A.style.alignItems="center"}function p(A,k){A.setAttribute("width","24"),A.setAttribute("id",k),A.setAttribute("height","24"),A.setAttribute("viewBox","0 0 24 24"),A.setAttribute("fill","none"),A.style.marginLeft="-6px"}function y(){const A=document.createElement("span");return A.style.cursor="pointer",A.style.marginLeft="16px",A.style.fontSize="24px",A.innerHTML=" &times;",A.onclick=()=>{dT=!0,h()},A}function E(A,k){A.setAttribute("id",k),A.innerText="Learn more",A.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",A.setAttribute("target","__blank"),A.style.paddingLeft="5px",A.style.textDecoration="underline"}function w(){const A=hN(s),k=t("text"),x=document.getElementById(k)||document.createElement("span"),j=t("learnmore"),V=document.getElementById(j)||document.createElement("a"),G=t("preprendIcon"),te=document.getElementById(G)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(A.created){const ee=A.element;d(ee),E(V,j);const oe=y();p(te,G),ee.append(te,x,V,oe),document.body.appendChild(ee)}u?(x.innerText="Preview backend disconnected.",te.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(te.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,x.innerText="Preview backend running in this workspace."),x.setAttribute("id",k)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",w):w()}/**
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
 */function en(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fN(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(en())}function dN(){const n=xf()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function mN(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Qb(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function pN(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gN(){const n=en();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function yN(){return!dN()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Og(){try{return typeof indexedDB=="object"}catch{return!1}}function Mg(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{e(o.error?.message||"")}}catch(t){e(t)}})}function Yb(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const _N="FirebaseError";class Yn extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=_N,Object.setPrototypeOf(this,Yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Cs.prototype.create)}}class Cs{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?vN(u,s):"Error",d=`${this.serviceName}: ${h} (${o}).`;return new Yn(o,d,s)}}function vN(n,e){return n.replace(EN,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const EN=/\{\$([^}]+)}/g;function TN(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ys(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=n[o],h=e[o];if(mT(u)&&mT(h)){if(!ys(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function mT(n){return n!==null&&typeof n=="object"}/**
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
 */function Wu(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function gu(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function yu(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function bN(n,e){const t=new wN(n,e);return t.subscribe.bind(t)}class wN{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");AN(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=dp),o.error===void 0&&(o.error=dp),o.complete===void 0&&(o.complete=dp);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function AN(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function dp(){}/**
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
 */const SN=1e3,RN=2,IN=14400*1e3,CN=.5;function pT(n,e=SN,t=RN){const s=e*Math.pow(t,n),o=Math.round(CN*s*(Math.random()-.5)*2);return Math.min(IN,s+o)}/**
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
 */function Ye(n){return n&&n._delegate?n._delegate:n}class Nn{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ga="[DEFAULT]";/**
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
 */class NN{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new uN;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ON(e))try{this.getOrInitializeService({instanceIdentifier:ga})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=ga){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ga){return this.instances.has(e)}getOptions(e=ga){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(u);s===d&&h.resolve(o)}return o}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&e(u,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:DN(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ga){return this.component?this.component.multipleInstances?e:ga:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function DN(n){return n===ga?void 0:n}function ON(n){return n.instantiationMode==="EAGER"}/**
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
 */class MN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new NN(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Re;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Re||(Re={}));const xN={debug:Re.DEBUG,verbose:Re.VERBOSE,info:Re.INFO,warn:Re.WARN,error:Re.ERROR,silent:Re.SILENT},PN=Re.INFO,kN={[Re.DEBUG]:"log",[Re.VERBOSE]:"log",[Re.INFO]:"info",[Re.WARN]:"warn",[Re.ERROR]:"error"},VN=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),o=kN[e];if(o)console[o](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zu{constructor(e){this.name=e,this._logLevel=PN,this._logHandler=VN,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xN[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Re.DEBUG,...e),this._logHandler(this,Re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Re.VERBOSE,...e),this._logHandler(this,Re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Re.INFO,...e),this._logHandler(this,Re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Re.WARN,...e),this._logHandler(this,Re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Re.ERROR,...e),this._logHandler(this,Re.ERROR,...e)}}const LN=(n,e)=>e.some(t=>n instanceof t);let gT,yT;function UN(){return gT||(gT=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zN(){return yT||(yT=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xb=new WeakMap,jp=new WeakMap,Wb=new WeakMap,mp=new WeakMap,xg=new WeakMap;function BN(n){const e=new Promise((t,s)=>{const o=()=>{n.removeEventListener("success",u),n.removeEventListener("error",h)},u=()=>{t(fs(n.result)),o()},h=()=>{s(n.error),o()};n.addEventListener("success",u),n.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Xb.set(t,n)}).catch(()=>{}),xg.set(e,n),e}function jN(n){if(jp.has(n))return;const e=new Promise((t,s)=>{const o=()=>{n.removeEventListener("complete",u),n.removeEventListener("error",h),n.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",u),n.addEventListener("error",h),n.addEventListener("abort",h)});jp.set(n,e)}let qp={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return jp.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Wb.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return fs(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function qN(n){qp=n(qp)}function FN(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(pp(this),e,...t);return Wb.set(s,e.sort?e.sort():[e]),fs(s)}:zN().includes(n)?function(...e){return n.apply(pp(this),e),fs(Xb.get(this))}:function(...e){return fs(n.apply(pp(this),e))}}function HN(n){return typeof n=="function"?FN(n):(n instanceof IDBTransaction&&jN(n),LN(n,UN())?new Proxy(n,qp):n)}function fs(n){if(n instanceof IDBRequest)return BN(n);if(mp.has(n))return mp.get(n);const e=HN(n);return e!==n&&(mp.set(n,e),xg.set(e,n)),e}const pp=n=>xg.get(n);function Zb(n,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(n,e),d=fs(h);return s&&h.addEventListener("upgradeneeded",p=>{s(fs(h.result),p.oldVersion,p.newVersion,fs(h.transaction),p)}),t&&h.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{u&&p.addEventListener("close",()=>u()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),d}const GN=["get","getKey","getAll","getAllKeys","count"],$N=["put","add","delete","clear"],gp=new Map;function _T(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(gp.get(e))return gp.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=$N.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||GN.includes(t)))return;const u=async function(h,...d){const p=this.transaction(h,o?"readwrite":"readonly");let y=p.store;return s&&(y=y.index(d.shift())),(await Promise.all([y[t](...d),o&&p.done]))[0]};return gp.set(e,u),u}qN(n=>({...n,get:(e,t,s)=>_T(e,t)||n.get(e,t,s),has:(e,t)=>!!_T(e,t)||n.has(e,t)}));/**
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
 */class KN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(QN(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function QN(n){return n.getComponent()?.type==="VERSION"}const Fp="@firebase/app",vT="0.14.1";/**
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
 */const _i=new Zu("@firebase/app"),YN="@firebase/app-compat",XN="@firebase/analytics-compat",WN="@firebase/analytics",ZN="@firebase/app-check-compat",JN="@firebase/app-check",eD="@firebase/auth",tD="@firebase/auth-compat",nD="@firebase/database",rD="@firebase/data-connect",iD="@firebase/database-compat",sD="@firebase/functions",aD="@firebase/functions-compat",oD="@firebase/installations",lD="@firebase/installations-compat",uD="@firebase/messaging",cD="@firebase/messaging-compat",hD="@firebase/performance",fD="@firebase/performance-compat",dD="@firebase/remote-config",mD="@firebase/remote-config-compat",pD="@firebase/storage",gD="@firebase/storage-compat",yD="@firebase/firestore",_D="@firebase/ai",vD="@firebase/firestore-compat",ED="firebase",TD="12.1.0";/**
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
 */const Hp="[DEFAULT]",bD={[Fp]:"fire-core",[YN]:"fire-core-compat",[WN]:"fire-analytics",[XN]:"fire-analytics-compat",[JN]:"fire-app-check",[ZN]:"fire-app-check-compat",[eD]:"fire-auth",[tD]:"fire-auth-compat",[nD]:"fire-rtdb",[rD]:"fire-data-connect",[iD]:"fire-rtdb-compat",[sD]:"fire-fn",[aD]:"fire-fn-compat",[oD]:"fire-iid",[lD]:"fire-iid-compat",[uD]:"fire-fcm",[cD]:"fire-fcm-compat",[hD]:"fire-perf",[fD]:"fire-perf-compat",[dD]:"fire-rc",[mD]:"fire-rc-compat",[pD]:"fire-gcs",[gD]:"fire-gcs-compat",[yD]:"fire-fst",[vD]:"fire-fst-compat",[_D]:"fire-vertex","fire-js":"fire-js",[ED]:"fire-js-all"};/**
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
 */const cf=new Map,wD=new Map,Gp=new Map;function ET(n,e){try{n.container.addComponent(e)}catch(t){_i.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Kn(n){const e=n.name;if(Gp.has(e))return _i.debug(`There were multiple attempts to register component ${e}.`),!1;Gp.set(e,n);for(const t of cf.values())ET(t,n);for(const t of wD.values())ET(t,n);return!0}function Ai(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ln(n){return n==null?!1:n.settings!==void 0}/**
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
 */const AD={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ds=new Cs("app","Firebase",AD);/**
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
 */class SD{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ds.create("app-deleted",{appName:this._name})}}/**
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
 */const Ca=TD;function Jb(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:Hp,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw ds.create("bad-app-name",{appName:String(o)});if(t||(t=Gb()),!t)throw ds.create("no-options");const u=cf.get(o);if(u){if(ys(t,u.options)&&ys(s,u.config))return u;throw ds.create("duplicate-app",{appName:o})}const h=new MN(o);for(const p of Gp.values())h.addComponent(p);const d=new SD(t,s,h);return cf.set(o,d),d}function Ju(n=Hp){const e=cf.get(n);if(!e&&n===Hp&&Gb())return Jb();if(!e)throw ds.create("no-app",{appName:n});return e}function Jt(n,e,t){let s=bD[n]??n;t&&(s+=`-${t}`);const o=s.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const h=[`Unable to register library "${s}" with version "${e}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&h.push("and"),u&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_i.warn(h.join(" "));return}Kn(new Nn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const RD="firebase-heartbeat-database",ID=1,ku="firebase-heartbeat-store";let yp=null;function ew(){return yp||(yp=Zb(RD,ID,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ku)}catch(t){console.warn(t)}}}}).catch(n=>{throw ds.create("idb-open",{originalErrorMessage:n.message})})),yp}async function CD(n){try{const t=(await ew()).transaction(ku),s=await t.objectStore(ku).get(tw(n));return await t.done,s}catch(e){if(e instanceof Yn)_i.warn(e.message);else{const t=ds.create("idb-get",{originalErrorMessage:e?.message});_i.warn(t.message)}}}async function TT(n,e){try{const s=(await ew()).transaction(ku,"readwrite");await s.objectStore(ku).put(e,tw(n)),await s.done}catch(t){if(t instanceof Yn)_i.warn(t.message);else{const s=ds.create("idb-set",{originalErrorMessage:t?.message});_i.warn(s.message)}}}function tw(n){return`${n.name}!${n.options.appId}`}/**
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
 */const ND=1024,DD=30;class OD{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new xD(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=bT();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats.length>DD){const o=PD(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){_i.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=bT(),{heartbeatsToSend:t,unsentEntries:s}=MD(this._heartbeatsCache.heartbeats),o=uf(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return _i.warn(e),""}}}function bT(){return new Date().toISOString().substring(0,10)}function MD(n,e=ND){const t=[];let s=n.slice();for(const o of n){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),wT(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),wT(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class xD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Og()?Mg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await CD(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return TT(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return TT(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function wT(n){return uf(JSON.stringify({version:2,heartbeats:n})).length}function PD(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function kD(n){Kn(new Nn("platform-logger",e=>new KN(e),"PRIVATE")),Kn(new Nn("heartbeat",e=>new OD(e),"PRIVATE")),Jt(Fp,vT,n),Jt(Fp,vT,"esm2020"),Jt("fire-js","")}kD("");function nw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const VD=nw,rw=new Cs("auth","Firebase",nw());/**
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
 */const hf=new Zu("@firebase/auth");function LD(n,...e){hf.logLevel<=Re.WARN&&hf.warn(`Auth (${Ca}): ${n}`,...e)}function Yh(n,...e){hf.logLevel<=Re.ERROR&&hf.error(`Auth (${Ca}): ${n}`,...e)}/**
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
 */function Qn(n,...e){throw kg(n,...e)}function ir(n,...e){return kg(n,...e)}function Pg(n,e,t){const s={...VD(),[e]:t};return new Cs("auth","Firebase",s).create(e,{appName:n.name})}function Cr(n){return Pg(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function UD(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Qn(n,"argument-error"),Pg(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function kg(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return rw.create(n,...e)}function pe(n,e,...t){if(!n)throw kg(e,...t)}function mi(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Yh(e),new Error(e)}function vi(n,e){n||mi(e)}/**
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
 */function $p(){return typeof self<"u"&&self.location?.href||""}function zD(){return AT()==="http:"||AT()==="https:"}function AT(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function BD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zD()||Qb()||"connection"in navigator)?navigator.onLine:!0}function jD(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class ec{constructor(e,t){this.shortDelay=e,this.longDelay=t,vi(t>e,"Short delay should be less than long delay!"),this.isMobile=fN()||pN()}get(){return BD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Vg(n,e){vi(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class iw{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const FD=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],HD=new ec(3e4,6e4);function Si(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Lr(n,e,t,s,o={}){return sw(n,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const d=Wu({key:n.config.apiKey,...h}).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const y={method:e,headers:p,...u};return mN()||(y.referrerPolicy="no-referrer"),n.emulatorConfig&&Is(n.emulatorConfig.host)&&(y.credentials="include"),iw.fetch()(await aw(n,n.config.apiHost,t,d),y)})}async function sw(n,e,t){n._canInitEmulator=!1;const s={...qD,...e};try{const o=new $D(n),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw Lh(n,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const d=u.ok?h.errorMessage:h.error.message,[p,y]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Lh(n,"credential-already-in-use",h);if(p==="EMAIL_EXISTS")throw Lh(n,"email-already-in-use",h);if(p==="USER_DISABLED")throw Lh(n,"user-disabled",h);const E=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw Pg(n,E,y);Qn(n,E)}}catch(o){if(o instanceof Yn)throw o;Qn(n,"network-request-failed",{message:String(o)})}}async function tc(n,e,t,s,o={}){const u=await Lr(n,e,t,s,o);return"mfaPendingCredential"in u&&Qn(n,"multi-factor-auth-required",{_serverResponse:u}),u}async function aw(n,e,t,s){const o=`${e}${t}?${s}`,u=n,h=u.config.emulator?Vg(n.config,o):`${n.config.apiScheme}://${o}`;return FD.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}function GD(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class $D{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(ir(this.auth,"network-request-failed")),HD.get())})}}function Lh(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=ir(n,e,s);return o.customData._tokenResponse=t,o}function ST(n){return n!==void 0&&n.enterprise!==void 0}class KD{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return GD(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function QD(n,e){return Lr(n,"GET","/v2/recaptchaConfig",Si(n,e))}/**
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
 */async function YD(n,e){return Lr(n,"POST","/v1/accounts:delete",e)}async function ff(n,e){return Lr(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Au(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function XD(n,e=!1){const t=Ye(n),s=await t.getIdToken(e),o=Lg(s);pe(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u?.sign_in_provider;return{claims:o,token:s,authTime:Au(_p(o.auth_time)),issuedAtTime:Au(_p(o.iat)),expirationTime:Au(_p(o.exp)),signInProvider:h||null,signInSecondFactor:u?.sign_in_second_factor||null}}function _p(n){return Number(n)*1e3}function Lg(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Yh("JWT malformed, contained fewer than 3 sections"),null;try{const o=qb(t);return o?JSON.parse(o):(Yh("Failed to decode base64 JWT payload"),null)}catch(o){return Yh("Caught error parsing JWT payload as JSON",o?.toString()),null}}function RT(n){const e=Lg(n);return pe(e,"internal-error"),pe(typeof e.exp<"u","internal-error"),pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function zo(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Yn&&WD(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function WD({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class ZD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Kp{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Au(this.lastLoginAt),this.creationTime=Au(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function df(n){const e=n.auth,t=await n.getIdToken(),s=await zo(n,ff(e,{idToken:t}));pe(s?.users.length,e,"internal-error");const o=s.users[0];n._notifyReloadListener(o);const u=o.providerUserInfo?.length?ow(o.providerUserInfo):[],h=e2(n.providerData,u),d=n.isAnonymous,p=!(n.email&&o.passwordHash)&&!h?.length,y=d?p:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new Kp(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(n,E)}async function JD(n){const e=Ye(n);await df(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function e2(n,e){return[...n.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function ow(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function t2(n,e){const t=await sw(n,{},async()=>{const s=Wu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=n.config,h=await aw(n,o,"/v1/token",`key=${u}`),d=await n._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:d,body:s};return n.emulatorConfig&&Is(n.emulatorConfig.host)&&(p.credentials="include"),iw.fetch()(h,p)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function n2(n,e){return Lr(n,"POST","/v2/accounts:revokeToken",Si(n,e))}/**
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
 */class Oo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){pe(e.idToken,"internal-error"),pe(typeof e.idToken<"u","internal-error"),pe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):RT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){pe(e.length!==0,"internal-error");const t=RT(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(pe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await t2(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new Oo;return s&&(pe(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(pe(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(pe(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Oo,this.toJSON())}_performRefresh(){return mi("not implemented")}}/**
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
 */function ns(n,e){pe(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class rr{constructor({uid:e,auth:t,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new ZD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Kp(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await zo(this,this.stsTokenManager.getToken(this.auth,e));return pe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return XD(this,e)}reload(){return JD(this)}_assign(e){this!==e&&(pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new rr({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await df(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ln(this.auth.app))return Promise.reject(Cr(this.auth));const e=await this.getIdToken();return await zo(this,YD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,o=t.email??void 0,u=t.phoneNumber??void 0,h=t.photoURL??void 0,d=t.tenantId??void 0,p=t._redirectEventId??void 0,y=t.createdAt??void 0,E=t.lastLoginAt??void 0,{uid:w,emailVerified:A,isAnonymous:k,providerData:x,stsTokenManager:j}=t;pe(w&&j,e,"internal-error");const V=Oo.fromJSON(this.name,j);pe(typeof w=="string",e,"internal-error"),ns(s,e.name),ns(o,e.name),pe(typeof A=="boolean",e,"internal-error"),pe(typeof k=="boolean",e,"internal-error"),ns(u,e.name),ns(h,e.name),ns(d,e.name),ns(p,e.name),ns(y,e.name),ns(E,e.name);const G=new rr({uid:w,auth:e,email:o,emailVerified:A,displayName:s,isAnonymous:k,photoURL:h,phoneNumber:u,tenantId:d,stsTokenManager:V,createdAt:y,lastLoginAt:E});return x&&Array.isArray(x)&&(G.providerData=x.map(te=>({...te}))),p&&(G._redirectEventId=p),G}static async _fromIdTokenResponse(e,t,s=!1){const o=new Oo;o.updateFromServerResponse(t);const u=new rr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await df(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];pe(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?ow(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!u?.length,d=new Oo;d.updateFromIdToken(s);const p=new rr({uid:o.localId,auth:e,stsTokenManager:d,isAnonymous:h}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Kp(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!u?.length};return Object.assign(p,y),p}}/**
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
 */const IT=new Map;function pi(n){vi(n instanceof Function,"Expected a class definition");let e=IT.get(n);return e?(vi(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,IT.set(n,e),e)}/**
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
 */class lw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}lw.type="NONE";const CT=lw;/**
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
 */function Xh(n,e,t){return`firebase:${n}:${e}:${t}`}class Mo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Xh(this.userKey,o.apiKey,u),this.fullPersistenceKey=Xh("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ff(this.auth,{idToken:e}).catch(()=>{});return t?rr._fromGetAccountInfoResponse(this.auth,t,e):null}return rr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Mo(pi(CT),e,s);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let u=o[0]||pi(CT);const h=Xh(s,e.config.apiKey,e.name);let d=null;for(const y of t)try{const E=await y._get(h);if(E){let w;if(typeof E=="string"){const A=await ff(e,{idToken:E}).catch(()=>{});if(!A)break;w=await rr._fromGetAccountInfoResponse(e,A,E)}else w=rr._fromJSON(e,E);y!==u&&(d=w),u=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new Mo(u,e,s):(u=p[0],d&&await u._set(h,d.toJSON()),await Promise.all(t.map(async y=>{if(y!==u)try{await y._remove(h)}catch{}})),new Mo(u,e,s))}}/**
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
 */function NT(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(uw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mw(e))return"Blackberry";if(pw(e))return"Webos";if(cw(e))return"Safari";if((e.includes("chrome/")||hw(e))&&!e.includes("edge/"))return"Chrome";if(dw(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if(s?.length===2)return s[1]}return"Other"}function uw(n=en()){return/firefox\//i.test(n)}function cw(n=en()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function hw(n=en()){return/crios\//i.test(n)}function fw(n=en()){return/iemobile/i.test(n)}function dw(n=en()){return/android/i.test(n)}function mw(n=en()){return/blackberry/i.test(n)}function pw(n=en()){return/webos/i.test(n)}function Ug(n=en()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function r2(n=en()){return Ug(n)&&!!window.navigator?.standalone}function i2(){return gN()&&document.documentMode===10}function gw(n=en()){return Ug(n)||dw(n)||pw(n)||mw(n)||/windows phone/i.test(n)||fw(n)}/**
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
 */function yw(n,e=[]){let t;switch(n){case"Browser":t=NT(en());break;case"Worker":t=`${NT(en())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ca}/${s}`}/**
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
 */class s2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,d)=>{try{const p=e(u);h(p)}catch(p){d(p)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function a2(n,e={}){return Lr(n,"GET","/v2/passwordPolicy",Si(n,e))}/**
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
 */const o2=6;class l2{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??o2,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class u2{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new DT(this),this.idTokenSubscription=new DT(this),this.beforeStateQueue=new s2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=pi(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Mo.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ff(this,{idToken:e}),s=await rr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(ln(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(h,h))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=this.redirectUser?._redirectEventId,h=s?._redirectEventId,d=await this.tryRedirectSignIn(e);(!u||u===h)&&d?.user&&(s=d.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await df(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ln(this.app))return Promise.reject(Cr(this));const t=e?Ye(e):null;return t&&pe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ln(this.app)?Promise.reject(Cr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ln(this.app)?Promise.reject(Cr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(pi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await a2(this),t=new l2(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Cs("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await n2(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&pi(e)||this._popupRedirectResolver;pe(t,this,"argument-error"),this.redirectPersistenceManager=await Mo.create(this,[pi(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(pe(d,this,"internal-error"),d.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,s,o);return()=>{h=!0,p()}}else{const p=e.addObserver(t);return()=>{h=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=yw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(ln(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&LD(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Ur(n){return Ye(n)}class DT{constructor(e){this.auth=e,this.observer=null,this.addObserver=bN(t=>this.observer=t)}get next(){return pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Pf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function c2(n){Pf=n}function _w(n){return Pf.loadJS(n)}function h2(){return Pf.recaptchaEnterpriseScript}function f2(){return Pf.gapiScript}function d2(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class m2{constructor(){this.enterprise=new p2}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class p2{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const g2="recaptcha-enterprise",vw="NO_RECAPTCHA";class y2{constructor(e){this.type=g2,this.auth=Ur(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,d)=>{QD(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const y=new KD(p);return u.tenantId==null?u._agentRecaptchaConfig=y:u._tenantRecaptchaConfigs[u.tenantId]=y,h(y.siteKey)}}).catch(p=>{d(p)})})}function o(u,h,d){const p=window.grecaptcha;ST(p)?p.enterprise.ready(()=>{p.enterprise.execute(u,{action:e}).then(y=>{h(y)}).catch(()=>{h(vw)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new m2().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{s(this.auth).then(d=>{if(!t&&ST(window.grecaptcha))o(d,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let p=h2();p.length!==0&&(p+=d),_w(p).then(()=>{o(d,u,h)}).catch(y=>{h(y)})}}).catch(d=>{h(d)})})}}async function OT(n,e,t,s=!1,o=!1){const u=new y2(n);let h;if(o)h=vw;else try{h=await u.verify(t)}catch{h=await u.verify(t,!0)}const d={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,y=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:y,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return s?Object.assign(d,{captchaResp:h}):Object.assign(d,{captchaResponse:h}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function mf(n,e,t,s,o){if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await OT(n,e,t,t==="getOobCode");return s(n,u)}else return s(n,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await OT(n,e,t,t==="getOobCode");return s(n,h)}else return Promise.reject(u)})}/**
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
 */function _2(n,e){const t=Ai(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(ys(u,e??{}))return o;Qn(o,"already-initialized")}return t.initialize({options:e})}function v2(n,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(pi);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e?.popupRedirectResolver)}function E2(n,e,t){const s=Ur(n);pe(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=Ew(e),{host:h,port:d}=T2(e),p=d===null?"":`:${d}`,y={url:`${u}//${h}${p}/`},E=Object.freeze({host:h,port:d,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){pe(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),pe(ys(y,s.config.emulator)&&ys(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=y,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,Is(h)?(Ng(`${u}//${h}${p}`),Dg("Auth",!0)):b2()}function Ew(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function T2(n){const e=Ew(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:MT(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:MT(h)}}}function MT(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function b2(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class zg{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return mi("not implemented")}_getIdTokenResponse(e){return mi("not implemented")}_linkToIdToken(e,t){return mi("not implemented")}_getReauthenticationResolver(e){return mi("not implemented")}}async function w2(n,e){return Lr(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function A2(n,e){return tc(n,"POST","/v1/accounts:signInWithPassword",Si(n,e))}async function S2(n,e){return Lr(n,"POST","/v1/accounts:sendOobCode",Si(n,e))}async function R2(n,e){return S2(n,e)}/**
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
 */async function I2(n,e){return tc(n,"POST","/v1/accounts:signInWithEmailLink",Si(n,e))}async function C2(n,e){return tc(n,"POST","/v1/accounts:signInWithEmailLink",Si(n,e))}/**
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
 */class Vu extends zg{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Vu(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Vu(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return mf(e,t,"signInWithPassword",A2);case"emailLink":return I2(e,{email:this._email,oobCode:this._password});default:Qn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return mf(e,s,"signUpPassword",w2);case"emailLink":return C2(e,{idToken:t,email:this._email,oobCode:this._password});default:Qn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function xo(n,e){return tc(n,"POST","/v1/accounts:signInWithIdp",Si(n,e))}/**
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
 */const N2="http://localhost";class ba extends zg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ba(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Qn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...u}=t;if(!s||!o)return null;const h=new ba(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return xo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,xo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,xo(e,t)}buildRequest(){const e={requestUri:N2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Wu(t)}return e}}/**
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
 */function D2(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function O2(n){const e=gu(yu(n)).link,t=e?gu(yu(e)).deep_link_id:null,s=gu(yu(n)).deep_link_id;return(s?gu(yu(s)).link:null)||s||t||e||n}class Bg{constructor(e){const t=gu(yu(e)),s=t.apiKey??null,o=t.oobCode??null,u=D2(t.mode??null);pe(s&&o&&u,"argument-error"),this.apiKey=s,this.operation=u,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=O2(e);try{return new Bg(t)}catch{return null}}}/**
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
 */class Qo{constructor(){this.providerId=Qo.PROVIDER_ID}static credential(e,t){return Vu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Bg.parseLink(t);return pe(s,"argument-error"),Vu._fromEmailAndCode(e,s.code,s.tenantId)}}Qo.PROVIDER_ID="password";Qo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Qo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class jg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class nc extends jg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ss extends nc{constructor(){super("facebook.com")}static credential(e){return ba._fromParams({providerId:ss.PROVIDER_ID,signInMethod:ss.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ss.credentialFromTaggedObject(e)}static credentialFromError(e){return ss.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ss.credential(e.oauthAccessToken)}catch{return null}}}ss.FACEBOOK_SIGN_IN_METHOD="facebook.com";ss.PROVIDER_ID="facebook.com";/**
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
 */class di extends nc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ba._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return di.credentialFromTaggedObject(e)}static credentialFromError(e){return di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return di.credential(t,s)}catch{return null}}}di.GOOGLE_SIGN_IN_METHOD="google.com";di.PROVIDER_ID="google.com";/**
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
 */class as extends nc{constructor(){super("github.com")}static credential(e){return ba._fromParams({providerId:as.PROVIDER_ID,signInMethod:as.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return as.credentialFromTaggedObject(e)}static credentialFromError(e){return as.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return as.credential(e.oauthAccessToken)}catch{return null}}}as.GITHUB_SIGN_IN_METHOD="github.com";as.PROVIDER_ID="github.com";/**
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
 */class os extends nc{constructor(){super("twitter.com")}static credential(e,t){return ba._fromParams({providerId:os.PROVIDER_ID,signInMethod:os.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return os.credentialFromTaggedObject(e)}static credentialFromError(e){return os.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return os.credential(t,s)}catch{return null}}}os.TWITTER_SIGN_IN_METHOD="twitter.com";os.PROVIDER_ID="twitter.com";/**
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
 */async function Tw(n,e){return tc(n,"POST","/v1/accounts:signUp",Si(n,e))}/**
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
 */class Ei{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await rr._fromIdTokenResponse(e,s,o),h=xT(s);return new Ei({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=xT(s);return new Ei({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function xT(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function M2(n){if(ln(n.app))return Promise.reject(Cr(n));const e=Ur(n);if(await e._initializationPromise,e.currentUser?.isAnonymous)return new Ei({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await Tw(e,{returnSecureToken:!0}),s=await Ei._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(s.user),s}/**
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
 */class pf extends Yn{constructor(e,t,s,o){super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,pf.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new pf(e,t,s,o)}}function bw(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?pf._fromErrorAndOperation(n,u,e,s):u})}async function x2(n,e,t=!1){const s=await zo(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ei._forOperation(n,"link",s)}/**
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
 */async function P2(n,e,t=!1){const{auth:s}=n;if(ln(s.app))return Promise.reject(Cr(s));const o="reauthenticate";try{const u=await zo(n,bw(s,o,e,n),t);pe(u.idToken,s,"internal-error");const h=Lg(u.idToken);pe(h,s,"internal-error");const{sub:d}=h;return pe(n.uid===d,s,"user-mismatch"),Ei._forOperation(n,o,u)}catch(u){throw u?.code==="auth/user-not-found"&&Qn(s,"user-mismatch"),u}}/**
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
 */async function ww(n,e,t=!1){if(ln(n.app))return Promise.reject(Cr(n));const s="signIn",o=await bw(n,s,e),u=await Ei._fromIdTokenResponse(n,s,o);return t||await n._updateCurrentUser(u.user),u}async function k2(n,e){return ww(Ur(n),e)}/**
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
 */async function Aw(n){const e=Ur(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function V2(n,e,t){const s=Ur(n);await mf(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",R2)}async function L2(n,e,t){if(ln(n.app))return Promise.reject(Cr(n));const s=Ur(n),h=await mf(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Tw).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&Aw(n),p}),d=await Ei._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(d.user),d}function U2(n,e,t){return ln(n.app)?Promise.reject(Cr(n)):k2(Ye(n),Qo.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Aw(n),s})}/**
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
 */async function z2(n,e){return Lr(n,"POST","/v1/accounts:update",e)}/**
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
 */async function B2(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=Ye(n),u={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},h=await zo(s,z2(s.auth,u));s.displayName=h.displayName||null,s.photoURL=h.photoUrl||null;const d=s.providerData.find(({providerId:p})=>p==="password");d&&(d.displayName=s.displayName,d.photoURL=s.photoURL),await s._updateTokensIfNecessary(h)}function j2(n,e,t,s){return Ye(n).onIdTokenChanged(e,t,s)}function q2(n,e,t){return Ye(n).beforeAuthStateChanged(e,t)}function F2(n,e,t,s){return Ye(n).onAuthStateChanged(e,t,s)}function H2(n){return Ye(n).signOut()}const gf="__sak";/**
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
 */class Sw{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(gf,"1"),this.storage.removeItem(gf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const G2=1e3,$2=10;class Rw extends Sw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=gw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,d,p)=>{this.notifyListeners(h,p)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);i2()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,$2):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},G2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Rw.type="LOCAL";const K2=Rw;/**
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
 */class Iw extends Sw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Iw.type="SESSION";const Cw=Iw;/**
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
 */function Q2(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class kf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new kf(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!h?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const d=Array.from(h).map(async y=>y(t.origin,u)),p=await Q2(d);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}kf.receivers=[];/**
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
 */class Y2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((d,p)=>{const y=qg("",20);o.port1.start();const E=setTimeout(()=>{p(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(w){const A=w;if(A.data.eventId===y)switch(A.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),d(A.data.response);break;default:clearTimeout(E),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function Nr(){return window}function X2(n){Nr().location.href=n}/**
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
 */function Nw(){return typeof Nr().WorkerGlobalScope<"u"&&typeof Nr().importScripts=="function"}async function W2(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Z2(){return navigator?.serviceWorker?.controller||null}function J2(){return Nw()?self:null}/**
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
 */const Dw="firebaseLocalStorageDb",eO=1,yf="firebaseLocalStorage",Ow="fbase_key";class rc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Vf(n,e){return n.transaction([yf],e?"readwrite":"readonly").objectStore(yf)}function tO(){const n=indexedDB.deleteDatabase(Dw);return new rc(n).toPromise()}function Qp(){const n=indexedDB.open(Dw,eO);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(yf,{keyPath:Ow})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(yf)?e(s):(s.close(),await tO(),e(await Qp()))})})}async function PT(n,e,t){const s=Vf(n,!0).put({[Ow]:e,value:t});return new rc(s).toPromise()}async function nO(n,e){const t=Vf(n,!1).get(e),s=await new rc(t).toPromise();return s===void 0?null:s.value}function kT(n,e){const t=Vf(n,!0).delete(e);return new rc(t).toPromise()}const rO=800,iO=3;class Mw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qp(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>iO)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Nw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=kf._getInstance(J2()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await W2(),!this.activeServiceWorker)return;this.sender=new Y2(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Z2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qp();return await PT(e,gf,"1"),await kT(e,gf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>PT(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>nO(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>kT(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=Vf(o,!1).getAll();return new rc(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Mw.type="LOCAL";const sO=Mw;new ec(3e4,6e4);/**
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
 */function xw(n,e){return e?pi(e):(pe(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Fg extends zg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return xo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return xo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function aO(n){return ww(n.auth,new Fg(n),n.bypassAuthState)}function oO(n){const{auth:e,user:t}=n;return pe(t,e,"internal-error"),P2(t,new Fg(n),n.bypassAuthState)}async function lO(n){const{auth:e,user:t}=n;return pe(t,e,"internal-error"),x2(t,new Fg(n),n.bypassAuthState)}/**
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
 */class Pw{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:d}=e;if(h){this.reject(h);return}const p={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return aO;case"linkViaPopup":case"linkViaRedirect":return lO;case"reauthViaPopup":case"reauthViaRedirect":return oO;default:Qn(this.auth,"internal-error")}}resolve(e){vi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const uO=new ec(2e3,1e4);async function cO(n,e,t){if(ln(n.app))return Promise.reject(ir(n,"operation-not-supported-in-this-environment"));const s=Ur(n);UD(n,e,jg);const o=xw(s,t);return new ya(s,"signInViaPopup",e,o).executeNotNull()}class ya extends Pw{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,ya.currentPopupAction&&ya.currentPopupAction.cancel(),ya.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return pe(e,this.auth,"internal-error"),e}async onExecution(){vi(this.filter.length===1,"Popup operations only handle one event");const e=qg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ir(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(ir(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ya.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ir(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,uO.get())};e()}}ya.currentPopupAction=null;/**
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
 */const hO="pendingRedirect",Wh=new Map;class fO extends Pw{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Wh.get(this.auth._key());if(!e){try{const s=await dO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Wh.set(this.auth._key(),e)}return this.bypassAuthState||Wh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dO(n,e){const t=gO(e),s=pO(n);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function mO(n,e){Wh.set(n._key(),e)}function pO(n){return pi(n._redirectPersistence)}function gO(n){return Xh(hO,n.config.apiKey,n.name)}async function yO(n,e,t=!1){if(ln(n.app))return Promise.reject(Cr(n));const s=Ur(n),o=xw(s,e),h=await new fO(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const _O=600*1e3;class vO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!EO(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!kw(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";t.onError(ir(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_O&&this.cachedEventUids.clear(),this.cachedEventUids.has(VT(e))}saveEventToCache(e){this.cachedEventUids.add(VT(e)),this.lastProcessedEventTime=Date.now()}}function VT(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function kw({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function EO(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kw(n);default:return!1}}/**
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
 */async function TO(n,e={}){return Lr(n,"GET","/v1/projects",e)}/**
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
 */const bO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wO=/^https?/;async function AO(n){if(n.config.emulator)return;const{authorizedDomains:e}=await TO(n);for(const t of e)try{if(SO(t))return}catch{}Qn(n,"unauthorized-domain")}function SO(n){const e=$p(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const h=new URL(n);return h.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!wO.test(t))return!1;if(bO.test(n))return s===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const RO=new ec(3e4,6e4);function LT(){const n=Nr().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function IO(n){return new Promise((e,t)=>{function s(){LT(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{LT(),t(ir(n,"network-request-failed"))},timeout:RO.get()})}if(Nr().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Nr().gapi?.load)s();else{const o=d2("iframefcb");return Nr()[o]=()=>{gapi.load?s():t(ir(n,"network-request-failed"))},_w(`${f2()}?onload=${o}`).catch(u=>t(u))}}).catch(e=>{throw Zh=null,e})}let Zh=null;function CO(n){return Zh=Zh||IO(n),Zh}/**
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
 */const NO=new ec(5e3,15e3),DO="__/auth/iframe",OO="emulator/auth/iframe",MO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function PO(n){const e=n.config;pe(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Vg(e,OO):`https://${n.config.authDomain}/${DO}`,s={apiKey:e.apiKey,appName:n.name,v:Ca},o=xO.get(n.config.apiHost);o&&(s.eid=o);const u=n._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Wu(s).slice(1)}`}async function kO(n){const e=await CO(n),t=Nr().gapi;return pe(t,n,"internal-error"),e.open({where:document.body,url:PO(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:MO,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=ir(n,"network-request-failed"),d=Nr().setTimeout(()=>{u(h)},NO.get());function p(){Nr().clearTimeout(d),o(s)}s.ping(p).then(p,()=>{u(h)})}))}/**
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
 */const VO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},LO=500,UO=600,zO="_blank",BO="http://localhost";class UT{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jO(n,e,t,s=LO,o=UO){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let d="";const p={...VO,width:s.toString(),height:o.toString(),top:u,left:h},y=en().toLowerCase();t&&(d=hw(y)?zO:t),uw(y)&&(e=e||BO,p.scrollbars="yes");const E=Object.entries(p).reduce((A,[k,x])=>`${A}${k}=${x},`,"");if(r2(y)&&d!=="_self")return qO(e||"",d),new UT(null);const w=window.open(e||"",d,E);pe(w,n,"popup-blocked");try{w.focus()}catch{}return new UT(w)}function qO(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const FO="__/auth/handler",HO="emulator/auth/handler",GO=encodeURIComponent("fac");async function zT(n,e,t,s,o,u){pe(n.config.authDomain,n,"auth-domain-config-required"),pe(n.config.apiKey,n,"invalid-api-key");const h={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Ca,eventId:o};if(e instanceof jg){e.setDefaultLanguage(n.languageCode),h.providerId=e.providerId||"",TN(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,w]of Object.entries({}))h[E]=w}if(e instanceof nc){const E=e.getScopes().filter(w=>w!=="");E.length>0&&(h.scopes=E.join(","))}n.tenantId&&(h.tid=n.tenantId);const d=h;for(const E of Object.keys(d))d[E]===void 0&&delete d[E];const p=await n._getAppCheckToken(),y=p?`#${GO}=${encodeURIComponent(p)}`:"";return`${$O(n)}?${Wu(d).slice(1)}${y}`}function $O({config:n}){return n.emulator?Vg(n,HO):`https://${n.authDomain}/${FO}`}/**
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
 */const vp="webStorageSupport";class KO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cw,this._completeRedirectFn=yO,this._overrideRedirectResult=mO}async _openPopup(e,t,s,o){vi(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const u=await zT(e,t,s,$p(),o);return jO(e,u,qg())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await zT(e,t,s,$p(),o);return X2(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(vi(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await kO(e),s=new vO(e);return t.register("authEvent",o=>(pe(o?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(vp,{type:vp},o=>{const u=o?.[0]?.[vp];u!==void 0&&t(!!u),Qn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=AO(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return gw()||cw()||Ug()}}const QO=KO;var BT="@firebase/auth",jT="1.11.0";/**
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
 */class YO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function XO(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function WO(n){Kn(new Nn("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:d}=s.options;pe(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:h,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yw(n)},y=new u2(s,o,u,p);return v2(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Kn(new Nn("auth-internal",e=>{const t=Ur(e.getProvider("auth").getImmediate());return(s=>new YO(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jt(BT,jT,XO(n)),Jt(BT,jT,"esm2020")}/**
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
 */const ZO=300,JO=$b("authIdTokenMaxAge")||ZO;let qT=null;const eM=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>JO)return;const o=t?.token;qT!==o&&(qT=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function tM(n=Ju()){const e=Ai(n,"auth");if(e.isInitialized())return e.getImmediate();const t=_2(n,{popupRedirectResolver:QO,persistence:[sO,K2,Cw]}),s=$b("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=eM(u.toString());q2(t,h,()=>h(t.currentUser)),j2(t,d=>h(d))}}const o=Fb("auth");return o&&E2(t,`http://${o}`),t}function nM(){return document.getElementsByTagName("head")?.[0]??document}c2({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=o=>{const u=ir("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",nM().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});WO("Browser");var rM="firebase",iM="12.1.0";/**
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
 */Jt(rM,iM,"app");var FT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ms,Vw;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,S){function R(){}R.prototype=S.prototype,D.D=S.prototype,D.prototype=new R,D.prototype.constructor=D,D.C=function(O,P,M){for(var C=Array(arguments.length-2),pt=2;pt<arguments.length;pt++)C[pt-2]=arguments[pt];return S.prototype[P].apply(O,C)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(D,S,R){R||(R=0);var O=Array(16);if(typeof S=="string")for(var P=0;16>P;++P)O[P]=S.charCodeAt(R++)|S.charCodeAt(R++)<<8|S.charCodeAt(R++)<<16|S.charCodeAt(R++)<<24;else for(P=0;16>P;++P)O[P]=S[R++]|S[R++]<<8|S[R++]<<16|S[R++]<<24;S=D.g[0],R=D.g[1],P=D.g[2];var M=D.g[3],C=S+(M^R&(P^M))+O[0]+3614090360&4294967295;S=R+(C<<7&4294967295|C>>>25),C=M+(P^S&(R^P))+O[1]+3905402710&4294967295,M=S+(C<<12&4294967295|C>>>20),C=P+(R^M&(S^R))+O[2]+606105819&4294967295,P=M+(C<<17&4294967295|C>>>15),C=R+(S^P&(M^S))+O[3]+3250441966&4294967295,R=P+(C<<22&4294967295|C>>>10),C=S+(M^R&(P^M))+O[4]+4118548399&4294967295,S=R+(C<<7&4294967295|C>>>25),C=M+(P^S&(R^P))+O[5]+1200080426&4294967295,M=S+(C<<12&4294967295|C>>>20),C=P+(R^M&(S^R))+O[6]+2821735955&4294967295,P=M+(C<<17&4294967295|C>>>15),C=R+(S^P&(M^S))+O[7]+4249261313&4294967295,R=P+(C<<22&4294967295|C>>>10),C=S+(M^R&(P^M))+O[8]+1770035416&4294967295,S=R+(C<<7&4294967295|C>>>25),C=M+(P^S&(R^P))+O[9]+2336552879&4294967295,M=S+(C<<12&4294967295|C>>>20),C=P+(R^M&(S^R))+O[10]+4294925233&4294967295,P=M+(C<<17&4294967295|C>>>15),C=R+(S^P&(M^S))+O[11]+2304563134&4294967295,R=P+(C<<22&4294967295|C>>>10),C=S+(M^R&(P^M))+O[12]+1804603682&4294967295,S=R+(C<<7&4294967295|C>>>25),C=M+(P^S&(R^P))+O[13]+4254626195&4294967295,M=S+(C<<12&4294967295|C>>>20),C=P+(R^M&(S^R))+O[14]+2792965006&4294967295,P=M+(C<<17&4294967295|C>>>15),C=R+(S^P&(M^S))+O[15]+1236535329&4294967295,R=P+(C<<22&4294967295|C>>>10),C=S+(P^M&(R^P))+O[1]+4129170786&4294967295,S=R+(C<<5&4294967295|C>>>27),C=M+(R^P&(S^R))+O[6]+3225465664&4294967295,M=S+(C<<9&4294967295|C>>>23),C=P+(S^R&(M^S))+O[11]+643717713&4294967295,P=M+(C<<14&4294967295|C>>>18),C=R+(M^S&(P^M))+O[0]+3921069994&4294967295,R=P+(C<<20&4294967295|C>>>12),C=S+(P^M&(R^P))+O[5]+3593408605&4294967295,S=R+(C<<5&4294967295|C>>>27),C=M+(R^P&(S^R))+O[10]+38016083&4294967295,M=S+(C<<9&4294967295|C>>>23),C=P+(S^R&(M^S))+O[15]+3634488961&4294967295,P=M+(C<<14&4294967295|C>>>18),C=R+(M^S&(P^M))+O[4]+3889429448&4294967295,R=P+(C<<20&4294967295|C>>>12),C=S+(P^M&(R^P))+O[9]+568446438&4294967295,S=R+(C<<5&4294967295|C>>>27),C=M+(R^P&(S^R))+O[14]+3275163606&4294967295,M=S+(C<<9&4294967295|C>>>23),C=P+(S^R&(M^S))+O[3]+4107603335&4294967295,P=M+(C<<14&4294967295|C>>>18),C=R+(M^S&(P^M))+O[8]+1163531501&4294967295,R=P+(C<<20&4294967295|C>>>12),C=S+(P^M&(R^P))+O[13]+2850285829&4294967295,S=R+(C<<5&4294967295|C>>>27),C=M+(R^P&(S^R))+O[2]+4243563512&4294967295,M=S+(C<<9&4294967295|C>>>23),C=P+(S^R&(M^S))+O[7]+1735328473&4294967295,P=M+(C<<14&4294967295|C>>>18),C=R+(M^S&(P^M))+O[12]+2368359562&4294967295,R=P+(C<<20&4294967295|C>>>12),C=S+(R^P^M)+O[5]+4294588738&4294967295,S=R+(C<<4&4294967295|C>>>28),C=M+(S^R^P)+O[8]+2272392833&4294967295,M=S+(C<<11&4294967295|C>>>21),C=P+(M^S^R)+O[11]+1839030562&4294967295,P=M+(C<<16&4294967295|C>>>16),C=R+(P^M^S)+O[14]+4259657740&4294967295,R=P+(C<<23&4294967295|C>>>9),C=S+(R^P^M)+O[1]+2763975236&4294967295,S=R+(C<<4&4294967295|C>>>28),C=M+(S^R^P)+O[4]+1272893353&4294967295,M=S+(C<<11&4294967295|C>>>21),C=P+(M^S^R)+O[7]+4139469664&4294967295,P=M+(C<<16&4294967295|C>>>16),C=R+(P^M^S)+O[10]+3200236656&4294967295,R=P+(C<<23&4294967295|C>>>9),C=S+(R^P^M)+O[13]+681279174&4294967295,S=R+(C<<4&4294967295|C>>>28),C=M+(S^R^P)+O[0]+3936430074&4294967295,M=S+(C<<11&4294967295|C>>>21),C=P+(M^S^R)+O[3]+3572445317&4294967295,P=M+(C<<16&4294967295|C>>>16),C=R+(P^M^S)+O[6]+76029189&4294967295,R=P+(C<<23&4294967295|C>>>9),C=S+(R^P^M)+O[9]+3654602809&4294967295,S=R+(C<<4&4294967295|C>>>28),C=M+(S^R^P)+O[12]+3873151461&4294967295,M=S+(C<<11&4294967295|C>>>21),C=P+(M^S^R)+O[15]+530742520&4294967295,P=M+(C<<16&4294967295|C>>>16),C=R+(P^M^S)+O[2]+3299628645&4294967295,R=P+(C<<23&4294967295|C>>>9),C=S+(P^(R|~M))+O[0]+4096336452&4294967295,S=R+(C<<6&4294967295|C>>>26),C=M+(R^(S|~P))+O[7]+1126891415&4294967295,M=S+(C<<10&4294967295|C>>>22),C=P+(S^(M|~R))+O[14]+2878612391&4294967295,P=M+(C<<15&4294967295|C>>>17),C=R+(M^(P|~S))+O[5]+4237533241&4294967295,R=P+(C<<21&4294967295|C>>>11),C=S+(P^(R|~M))+O[12]+1700485571&4294967295,S=R+(C<<6&4294967295|C>>>26),C=M+(R^(S|~P))+O[3]+2399980690&4294967295,M=S+(C<<10&4294967295|C>>>22),C=P+(S^(M|~R))+O[10]+4293915773&4294967295,P=M+(C<<15&4294967295|C>>>17),C=R+(M^(P|~S))+O[1]+2240044497&4294967295,R=P+(C<<21&4294967295|C>>>11),C=S+(P^(R|~M))+O[8]+1873313359&4294967295,S=R+(C<<6&4294967295|C>>>26),C=M+(R^(S|~P))+O[15]+4264355552&4294967295,M=S+(C<<10&4294967295|C>>>22),C=P+(S^(M|~R))+O[6]+2734768916&4294967295,P=M+(C<<15&4294967295|C>>>17),C=R+(M^(P|~S))+O[13]+1309151649&4294967295,R=P+(C<<21&4294967295|C>>>11),C=S+(P^(R|~M))+O[4]+4149444226&4294967295,S=R+(C<<6&4294967295|C>>>26),C=M+(R^(S|~P))+O[11]+3174756917&4294967295,M=S+(C<<10&4294967295|C>>>22),C=P+(S^(M|~R))+O[2]+718787259&4294967295,P=M+(C<<15&4294967295|C>>>17),C=R+(M^(P|~S))+O[9]+3951481745&4294967295,D.g[0]=D.g[0]+S&4294967295,D.g[1]=D.g[1]+(P+(C<<21&4294967295|C>>>11))&4294967295,D.g[2]=D.g[2]+P&4294967295,D.g[3]=D.g[3]+M&4294967295}s.prototype.u=function(D,S){S===void 0&&(S=D.length);for(var R=S-this.blockSize,O=this.B,P=this.h,M=0;M<S;){if(P==0)for(;M<=R;)o(this,D,M),M+=this.blockSize;if(typeof D=="string"){for(;M<S;)if(O[P++]=D.charCodeAt(M++),P==this.blockSize){o(this,O),P=0;break}}else for(;M<S;)if(O[P++]=D[M++],P==this.blockSize){o(this,O),P=0;break}}this.h=P,this.o+=S},s.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var S=1;S<D.length-8;++S)D[S]=0;var R=8*this.o;for(S=D.length-8;S<D.length;++S)D[S]=R&255,R/=256;for(this.u(D),D=Array(16),S=R=0;4>S;++S)for(var O=0;32>O;O+=8)D[R++]=this.g[S]>>>O&255;return D};function u(D,S){var R=d;return Object.prototype.hasOwnProperty.call(R,D)?R[D]:R[D]=S(D)}function h(D,S){this.h=S;for(var R=[],O=!0,P=D.length-1;0<=P;P--){var M=D[P]|0;O&&M==S||(R[P]=M,O=!1)}this.g=R}var d={};function p(D){return-128<=D&&128>D?u(D,function(S){return new h([S|0],0>S?-1:0)}):new h([D|0],0>D?-1:0)}function y(D){if(isNaN(D)||!isFinite(D))return w;if(0>D)return V(y(-D));for(var S=[],R=1,O=0;D>=R;O++)S[O]=D/R|0,R*=4294967296;return new h(S,0)}function E(D,S){if(D.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(D.charAt(0)=="-")return V(E(D.substring(1),S));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=y(Math.pow(S,8)),O=w,P=0;P<D.length;P+=8){var M=Math.min(8,D.length-P),C=parseInt(D.substring(P,P+M),S);8>M?(M=y(Math.pow(S,M)),O=O.j(M).add(y(C))):(O=O.j(R),O=O.add(y(C)))}return O}var w=p(0),A=p(1),k=p(16777216);n=h.prototype,n.m=function(){if(j(this))return-V(this).m();for(var D=0,S=1,R=0;R<this.g.length;R++){var O=this.i(R);D+=(0<=O?O:4294967296+O)*S,S*=4294967296}return D},n.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(x(this))return"0";if(j(this))return"-"+V(this).toString(D);for(var S=y(Math.pow(D,6)),R=this,O="";;){var P=oe(R,S).g;R=G(R,P.j(S));var M=((0<R.g.length?R.g[0]:R.h)>>>0).toString(D);if(R=P,x(R))return M+O;for(;6>M.length;)M="0"+M;O=M+O}},n.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function x(D){if(D.h!=0)return!1;for(var S=0;S<D.g.length;S++)if(D.g[S]!=0)return!1;return!0}function j(D){return D.h==-1}n.l=function(D){return D=G(this,D),j(D)?-1:x(D)?0:1};function V(D){for(var S=D.g.length,R=[],O=0;O<S;O++)R[O]=~D.g[O];return new h(R,~D.h).add(A)}n.abs=function(){return j(this)?V(this):this},n.add=function(D){for(var S=Math.max(this.g.length,D.g.length),R=[],O=0,P=0;P<=S;P++){var M=O+(this.i(P)&65535)+(D.i(P)&65535),C=(M>>>16)+(this.i(P)>>>16)+(D.i(P)>>>16);O=C>>>16,M&=65535,C&=65535,R[P]=C<<16|M}return new h(R,R[R.length-1]&-2147483648?-1:0)};function G(D,S){return D.add(V(S))}n.j=function(D){if(x(this)||x(D))return w;if(j(this))return j(D)?V(this).j(V(D)):V(V(this).j(D));if(j(D))return V(this.j(V(D)));if(0>this.l(k)&&0>D.l(k))return y(this.m()*D.m());for(var S=this.g.length+D.g.length,R=[],O=0;O<2*S;O++)R[O]=0;for(O=0;O<this.g.length;O++)for(var P=0;P<D.g.length;P++){var M=this.i(O)>>>16,C=this.i(O)&65535,pt=D.i(P)>>>16,Ot=D.i(P)&65535;R[2*O+2*P]+=C*Ot,te(R,2*O+2*P),R[2*O+2*P+1]+=M*Ot,te(R,2*O+2*P+1),R[2*O+2*P+1]+=C*pt,te(R,2*O+2*P+1),R[2*O+2*P+2]+=M*pt,te(R,2*O+2*P+2)}for(O=0;O<S;O++)R[O]=R[2*O+1]<<16|R[2*O];for(O=S;O<2*S;O++)R[O]=0;return new h(R,0)};function te(D,S){for(;(D[S]&65535)!=D[S];)D[S+1]+=D[S]>>>16,D[S]&=65535,S++}function ee(D,S){this.g=D,this.h=S}function oe(D,S){if(x(S))throw Error("division by zero");if(x(D))return new ee(w,w);if(j(D))return S=oe(V(D),S),new ee(V(S.g),V(S.h));if(j(S))return S=oe(D,V(S)),new ee(V(S.g),S.h);if(30<D.g.length){if(j(D)||j(S))throw Error("slowDivide_ only works with positive integers.");for(var R=A,O=S;0>=O.l(D);)R=ae(R),O=ae(O);var P=fe(R,1),M=fe(O,1);for(O=fe(O,2),R=fe(R,2);!x(O);){var C=M.add(O);0>=C.l(D)&&(P=P.add(R),M=C),O=fe(O,1),R=fe(R,1)}return S=G(D,P.j(S)),new ee(P,S)}for(P=w;0<=D.l(S);){for(R=Math.max(1,Math.floor(D.m()/S.m())),O=Math.ceil(Math.log(R)/Math.LN2),O=48>=O?1:Math.pow(2,O-48),M=y(R),C=M.j(S);j(C)||0<C.l(D);)R-=O,M=y(R),C=M.j(S);x(M)&&(M=A),P=P.add(M),D=G(D,C)}return new ee(P,D)}n.A=function(D){return oe(this,D).h},n.and=function(D){for(var S=Math.max(this.g.length,D.g.length),R=[],O=0;O<S;O++)R[O]=this.i(O)&D.i(O);return new h(R,this.h&D.h)},n.or=function(D){for(var S=Math.max(this.g.length,D.g.length),R=[],O=0;O<S;O++)R[O]=this.i(O)|D.i(O);return new h(R,this.h|D.h)},n.xor=function(D){for(var S=Math.max(this.g.length,D.g.length),R=[],O=0;O<S;O++)R[O]=this.i(O)^D.i(O);return new h(R,this.h^D.h)};function ae(D){for(var S=D.g.length+1,R=[],O=0;O<S;O++)R[O]=D.i(O)<<1|D.i(O-1)>>>31;return new h(R,D.h)}function fe(D,S){var R=S>>5;S%=32;for(var O=D.g.length-R,P=[],M=0;M<O;M++)P[M]=0<S?D.i(M+R)>>>S|D.i(M+R+1)<<32-S:D.i(M+R);return new h(P,D.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Vw=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=y,h.fromString=E,ms=h}).apply(typeof FT<"u"?FT:typeof self<"u"?self:typeof window<"u"?window:{});var Uh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Lw,_u,Uw,Jh,Yp,zw,Bw,jw;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,g,_){return c==Array.prototype||c==Object.prototype||(c[g]=_.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Uh=="object"&&Uh];for(var g=0;g<c.length;++g){var _=c[g];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=t(this);function o(c,g){if(g)e:{var _=s;c=c.split(".");for(var b=0;b<c.length-1;b++){var U=c[b];if(!(U in _))break e;_=_[U]}c=c[c.length-1],b=_[c],g=g(b),g!=b&&g!=null&&e(_,c,{configurable:!0,writable:!0,value:g})}}function u(c,g){c instanceof String&&(c+="");var _=0,b=!1,U={next:function(){if(!b&&_<c.length){var $=_++;return{value:g($,c[$]),done:!1}}return b=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}o("Array.prototype.values",function(c){return c||function(){return u(this,function(g,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},d=this||self;function p(c){var g=typeof c;return g=g!="object"?g:c?Array.isArray(c)?"array":g:"null",g=="array"||g=="object"&&typeof c.length=="number"}function y(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function E(c,g,_){return c.call.apply(c.bind,arguments)}function w(c,g,_){if(!c)throw Error();if(2<arguments.length){var b=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,b),c.apply(g,U)}}return function(){return c.apply(g,arguments)}}function A(c,g,_){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:w,A.apply(null,arguments)}function k(c,g){var _=Array.prototype.slice.call(arguments,1);return function(){var b=_.slice();return b.push.apply(b,arguments),c.apply(this,b)}}function x(c,g){function _(){}_.prototype=g.prototype,c.aa=g.prototype,c.prototype=new _,c.prototype.constructor=c,c.Qb=function(b,U,$){for(var ne=Array(arguments.length-2),De=2;De<arguments.length;De++)ne[De-2]=arguments[De];return g.prototype[U].apply(b,ne)}}function j(c){const g=c.length;if(0<g){const _=Array(g);for(let b=0;b<g;b++)_[b]=c[b];return _}return[]}function V(c,g){for(let _=1;_<arguments.length;_++){const b=arguments[_];if(p(b)){const U=c.length||0,$=b.length||0;c.length=U+$;for(let ne=0;ne<$;ne++)c[U+ne]=b[ne]}else c.push(b)}}class G{constructor(g,_){this.i=g,this.j=_,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function te(c){return/^[\s\xa0]*$/.test(c)}function ee(){var c=d.navigator;return c&&(c=c.userAgent)?c:""}function oe(c){return oe[" "](c),c}oe[" "]=function(){};var ae=ee().indexOf("Gecko")!=-1&&!(ee().toLowerCase().indexOf("webkit")!=-1&&ee().indexOf("Edge")==-1)&&!(ee().indexOf("Trident")!=-1||ee().indexOf("MSIE")!=-1)&&ee().indexOf("Edge")==-1;function fe(c,g,_){for(const b in c)g.call(_,c[b],b,c)}function D(c,g){for(const _ in c)g.call(void 0,c[_],_,c)}function S(c){const g={};for(const _ in c)g[_]=c[_];return g}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function O(c,g){let _,b;for(let U=1;U<arguments.length;U++){b=arguments[U];for(_ in b)c[_]=b[_];for(let $=0;$<R.length;$++)_=R[$],Object.prototype.hasOwnProperty.call(b,_)&&(c[_]=b[_])}}function P(c){var g=1;c=c.split(":");const _=[];for(;0<g&&c.length;)_.push(c.shift()),g--;return c.length&&_.push(c.join(":")),_}function M(c){d.setTimeout(()=>{throw c},0)}function C(){var c=Ne;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class pt{constructor(){this.h=this.g=null}add(g,_){const b=Ot.get();b.set(g,_),this.h?this.h.next=b:this.g=b,this.h=b}}var Ot=new G(()=>new K,c=>c.reset());class K{constructor(){this.next=this.g=this.h=null}set(g,_){this.h=g,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let re,ce=!1,Ne=new pt,Ve=()=>{const c=d.Promise.resolve(void 0);re=()=>{c.then(Ke)}};var Ke=()=>{for(var c;c=C();){try{c.h.call(c.g)}catch(_){M(_)}var g=Ot;g.j(c),100>g.h&&(g.h++,c.next=g.g,g.g=c)}ce=!1};function Pe(){this.s=this.s,this.C=this.C}Pe.prototype.s=!1,Pe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Pe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function _e(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}_e.prototype.h=function(){this.defaultPrevented=!0};var gt=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};d.addEventListener("test",_,g),d.removeEventListener("test",_,g)}catch{}return c}();function $t(c,g){if(_e.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var _=this.type=c.type,b=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget){if(ae){e:{try{oe(g.nodeName);var U=!0;break e}catch{}U=!1}U||(g=null)}}else _=="mouseover"?g=c.fromElement:_=="mouseout"&&(g=c.toElement);this.relatedTarget=g,b?(this.clientX=b.clientX!==void 0?b.clientX:b.pageX,this.clientY=b.clientY!==void 0?b.clientY:b.pageY,this.screenX=b.screenX||0,this.screenY=b.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:ur[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&$t.aa.h.call(this)}}x($t,_e);var ur={2:"touch",3:"pen",4:"mouse"};$t.prototype.h=function(){$t.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var zr="closure_listenable_"+(1e6*Math.random()|0),Ma=0;function Ri(c,g,_,b,U){this.listener=c,this.proxy=null,this.src=g,this.type=_,this.capture=!!b,this.ha=U,this.key=++Ma,this.da=this.fa=!1}function Ii(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Br(c){this.src=c,this.g={},this.h=0}Br.prototype.add=function(c,g,_,b,U){var $=c.toString();c=this.g[$],c||(c=this.g[$]=[],this.h++);var ne=Ms(c,g,b,U);return-1<ne?(g=c[ne],_||(g.fa=!1)):(g=new Ri(g,this.src,$,!!b,U),g.fa=_,c.push(g)),g};function Os(c,g){var _=g.type;if(_ in c.g){var b=c.g[_],U=Array.prototype.indexOf.call(b,g,void 0),$;($=0<=U)&&Array.prototype.splice.call(b,U,1),$&&(Ii(g),c.g[_].length==0&&(delete c.g[_],c.h--))}}function Ms(c,g,_,b){for(var U=0;U<c.length;++U){var $=c[U];if(!$.da&&$.listener==g&&$.capture==!!_&&$.ha==b)return U}return-1}var xs="closure_lm_"+(1e6*Math.random()|0),nl={};function fc(c,g,_,b,U){if(Array.isArray(g)){for(var $=0;$<g.length;$++)fc(c,g[$],_,b,U);return null}return _=dc(_),c&&c[zr]?c.K(g,_,y(b)?!!b.capture:!1,U):Dn(c,g,_,!1,b,U)}function Dn(c,g,_,b,U,$){if(!g)throw Error("Invalid event type");var ne=y(U)?!!U.capture:!!U,De=Pa(c);if(De||(c[xs]=De=new Br(c)),_=De.add(g,_,b,ne,$),_.proxy)return _;if(b=od(),_.proxy=b,b.src=c,b.listener=_,c.addEventListener)gt||(U=ne),U===void 0&&(U=!1),c.addEventListener(g.toString(),b,U);else if(c.attachEvent)c.attachEvent(Ps(g.toString()),b);else if(c.addListener&&c.removeListener)c.addListener(b);else throw Error("addEventListener and attachEvent are unavailable.");return _}function od(){function c(_){return g.call(c.src,c.listener,_)}const g=ld;return c}function rl(c,g,_,b,U){if(Array.isArray(g))for(var $=0;$<g.length;$++)rl(c,g[$],_,b,U);else b=y(b)?!!b.capture:!!b,_=dc(_),c&&c[zr]?(c=c.i,g=String(g).toString(),g in c.g&&($=c.g[g],_=Ms($,_,b,U),-1<_&&(Ii($[_]),Array.prototype.splice.call($,_,1),$.length==0&&(delete c.g[g],c.h--)))):c&&(c=Pa(c))&&(g=c.g[g.toString()],c=-1,g&&(c=Ms(g,_,b,U)),(_=-1<c?g[c]:null)&&xa(_))}function xa(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[zr])Os(g.i,c);else{var _=c.type,b=c.proxy;g.removeEventListener?g.removeEventListener(_,b,c.capture):g.detachEvent?g.detachEvent(Ps(_),b):g.addListener&&g.removeListener&&g.removeListener(b),(_=Pa(g))?(Os(_,c),_.h==0&&(_.src=null,g[xs]=null)):Ii(c)}}}function Ps(c){return c in nl?nl[c]:nl[c]="on"+c}function ld(c,g){if(c.da)c=!0;else{g=new $t(g,this);var _=c.listener,b=c.ha||c.src;c.fa&&xa(c),c=_.call(b,g)}return c}function Pa(c){return c=c[xs],c instanceof Br?c:null}var il="__closure_events_fn_"+(1e9*Math.random()>>>0);function dc(c){return typeof c=="function"?c:(c[il]||(c[il]=function(g){return c.handleEvent(g)}),c[il])}function st(){Pe.call(this),this.i=new Br(this),this.M=this,this.F=null}x(st,Pe),st.prototype[zr]=!0,st.prototype.removeEventListener=function(c,g,_,b){rl(this,c,g,_,b)};function Be(c,g){var _,b=c.F;if(b)for(_=[];b;b=b.F)_.push(b);if(c=c.M,b=g.type||g,typeof g=="string")g=new _e(g,c);else if(g instanceof _e)g.target=g.target||c;else{var U=g;g=new _e(b,c),O(g,U)}if(U=!0,_)for(var $=_.length-1;0<=$;$--){var ne=g.g=_[$];U=gn(ne,b,!0,g)&&U}if(ne=g.g=c,U=gn(ne,b,!0,g)&&U,U=gn(ne,b,!1,g)&&U,_)for($=0;$<_.length;$++)ne=g.g=_[$],U=gn(ne,b,!1,g)&&U}st.prototype.N=function(){if(st.aa.N.call(this),this.i){var c=this.i,g;for(g in c.g){for(var _=c.g[g],b=0;b<_.length;b++)Ii(_[b]);delete c.g[g],c.h--}}this.F=null},st.prototype.K=function(c,g,_,b){return this.i.add(String(c),g,!1,_,b)},st.prototype.L=function(c,g,_,b){return this.i.add(String(c),g,!0,_,b)};function gn(c,g,_,b){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();for(var U=!0,$=0;$<g.length;++$){var ne=g[$];if(ne&&!ne.da&&ne.capture==_){var De=ne.listener,St=ne.ha||ne.src;ne.fa&&Os(c.i,ne),U=De.call(St,b)!==!1&&U}}return U&&!b.defaultPrevented}function Kt(c,g,_){if(typeof c=="function")_&&(c=A(c,_));else if(c&&typeof c.handleEvent=="function")c=A(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:d.setTimeout(c,g||0)}function mc(c){c.g=Kt(()=>{c.g=null,c.i&&(c.i=!1,mc(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class ud extends Pe{constructor(g,_){super(),this.m=g,this.l=_,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:mc(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ks(c){Pe.call(this),this.h=c,this.g={}}x(ks,Pe);var Vs=[];function Ls(c){fe(c.g,function(g,_){this.g.hasOwnProperty(_)&&xa(g)},c),c.g={}}ks.prototype.N=function(){ks.aa.N.call(this),Ls(this)},ks.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xn=d.JSON.stringify,ka=d.JSON.parse,Us=class{stringify(c){return d.JSON.stringify(c,void 0)}parse(c){return d.JSON.parse(c,void 0)}};function sl(){}sl.prototype.h=null;function al(c){return c.h||(c.h=c.i())}function ol(){}var jr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function qr(){_e.call(this,"d")}x(qr,_e);function ll(){_e.call(this,"c")}x(ll,_e);var cr={},ul=null;function Ci(){return ul=ul||new st}cr.La="serverreachability";function Va(c){_e.call(this,cr.La,c)}x(Va,_e);function Ni(c){const g=Ci();Be(g,new Va(g))}cr.STAT_EVENT="statevent";function pc(c,g){_e.call(this,cr.STAT_EVENT,c),this.stat=g}x(pc,_e);function et(c){const g=Ci();Be(g,new pc(g,c))}cr.Ma="timingevent";function At(c,g){_e.call(this,cr.Ma,c),this.size=g}x(At,_e);function yt(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){c()},g)}function On(){this.g=!0}On.prototype.xa=function(){this.g=!1};function cl(c,g,_,b,U,$){c.info(function(){if(c.g)if($)for(var ne="",De=$.split("&"),St=0;St<De.length;St++){var Oe=De[St].split("=");if(1<Oe.length){var xt=Oe[0];Oe=Oe[1];var Rt=xt.split("_");ne=2<=Rt.length&&Rt[1]=="type"?ne+(xt+"="+Oe+"&"):ne+(xt+"=redacted&")}}else ne=null;else ne=$;return"XMLHTTP REQ ("+b+") [attempt "+U+"]: "+g+`
`+_+`
`+ne})}function cd(c,g,_,b,U,$,ne){c.info(function(){return"XMLHTTP RESP ("+b+") [ attempt "+U+"]: "+g+`
`+_+`
`+$+" "+ne})}function Di(c,g,_,b){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+zs(c,_)+(b?" "+b:"")})}function gc(c,g){c.info(function(){return"TIMEOUT: "+g})}On.prototype.info=function(){};function zs(c,g){if(!c.g)return g;if(!g)return null;try{var _=JSON.parse(g);if(_){for(c=0;c<_.length;c++)if(Array.isArray(_[c])){var b=_[c];if(!(2>b.length)){var U=b[1];if(Array.isArray(U)&&!(1>U.length)){var $=U[0];if($!="noop"&&$!="stop"&&$!="close")for(var ne=1;ne<U.length;ne++)U[ne]=""}}}}return Xn(_)}catch{return g}}var Oi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Fr={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},hr;function fr(){}x(fr,sl),fr.prototype.g=function(){return new XMLHttpRequest},fr.prototype.i=function(){return{}},hr=new fr;function tn(c,g,_,b){this.j=c,this.i=g,this.l=_,this.R=b||1,this.U=new ks(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ht}function ht(){this.i=null,this.g="",this.h=!1}var hl={},La={};function Wn(c,g,_){c.L=1,c.v=Hs(yn(g)),c.m=_,c.P=!0,Hr(c,null)}function Hr(c,g){c.F=Date.now(),Bs(c),c.A=yn(c.v);var _=c.A,b=c.R;Array.isArray(b)||(b=[String(b)]),yl(_.i,"t",b),c.C=0,_=c.j.J,c.h=new ht,c.g=Mc(c.j,_?g:null,!c.m),0<c.O&&(c.M=new ud(A(c.Y,c,c.g),c.O)),g=c.U,_=c.g,b=c.ca;var U="readystatechange";Array.isArray(U)||(U&&(Vs[0]=U.toString()),U=Vs);for(var $=0;$<U.length;$++){var ne=fc(_,U[$],b||g.handleEvent,!1,g.h||g);if(!ne)break;g.g[ne.key]=ne}g=c.H?S(c.H):{},c.m?(c.u||(c.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,g)):(c.u="GET",c.g.ea(c.A,c.u,null,g)),Ni(),cl(c.i,c.u,c.A,c.l,c.R,c.m)}tn.prototype.ca=function(c){c=c.target;const g=this.M;g&&kn(c)==3?g.j():this.Y(c)},tn.prototype.Y=function(c){try{if(c==this.g)e:{const Rt=kn(this.g);var g=this.g.Ba();const Zr=this.g.Z();if(!(3>Rt)&&(Rt!=3||this.g&&(this.h.h||this.g.oa()||Ac(this.g)))){this.J||Rt!=4||g==7||(g==8||0>=Zr?Ni(3):Ni(2)),Mi(this);var _=this.g.Z();this.X=_;t:if(yc(this)){var b=Ac(this.g);c="";var U=b.length,$=kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ut(this),dr(this);var ne="";break t}this.h.i=new d.TextDecoder}for(g=0;g<U;g++)this.h.h=!0,c+=this.h.i.decode(b[g],{stream:!($&&g==U-1)});b.length=0,this.h.g+=c,this.C=0,ne=this.h.g}else ne=this.g.oa();if(this.o=_==200,cd(this.i,this.u,this.A,this.l,this.R,Rt,_),this.o){if(this.T&&!this.K){t:{if(this.g){var De,St=this.g;if((De=St.g?St.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!te(De)){var Oe=De;break t}}Oe=null}if(_=Oe)Di(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,js(this,_);else{this.o=!1,this.s=3,et(12),Ut(this),dr(this);break e}}if(this.P){_=!0;let zt;for(;!this.J&&this.C<ne.length;)if(zt=_c(this,ne),zt==La){Rt==4&&(this.s=4,et(14),_=!1),Di(this.i,this.l,null,"[Incomplete Response]");break}else if(zt==hl){this.s=4,et(15),Di(this.i,this.l,ne,"[Invalid Chunk]"),_=!1;break}else Di(this.i,this.l,zt,null),js(this,zt);if(yc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Rt!=4||ne.length!=0||this.h.h||(this.s=1,et(16),_=!1),this.o=this.o&&_,!_)Di(this.i,this.l,ne,"[Invalid Chunked Response]"),Ut(this),dr(this);else if(0<ne.length&&!this.W){this.W=!0;var xt=this.j;xt.g==this&&xt.ba&&!xt.M&&(xt.j.info("Great, no buffering proxy detected. Bytes received: "+ne.length),Zs(xt),xt.M=!0,et(11))}}else Di(this.i,this.l,ne,null),js(this,ne);Rt==4&&Ut(this),this.o&&!this.J&&(Rt==4?Nc(this.j,this):(this.o=!1,Bs(this)))}else pd(this.g),_==400&&0<ne.indexOf("Unknown SID")?(this.s=3,et(12)):(this.s=0,et(13)),Ut(this),dr(this)}}}catch{}finally{}};function yc(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function _c(c,g){var _=c.C,b=g.indexOf(`
`,_);return b==-1?La:(_=Number(g.substring(_,b)),isNaN(_)?hl:(b+=1,b+_>g.length?La:(g=g.slice(b,b+_),c.C=b+_,g)))}tn.prototype.cancel=function(){this.J=!0,Ut(this)};function Bs(c){c.S=Date.now()+c.I,vc(c,c.I)}function vc(c,g){if(c.B!=null)throw Error("WatchDog timer not null");c.B=yt(A(c.ba,c),g)}function Mi(c){c.B&&(d.clearTimeout(c.B),c.B=null)}tn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(gc(this.i,this.A),this.L!=2&&(Ni(),et(17)),Ut(this),this.s=2,dr(this)):vc(this,this.S-c)};function dr(c){c.j.G==0||c.J||Nc(c.j,c)}function Ut(c){Mi(c);var g=c.M;g&&typeof g.ma=="function"&&g.ma(),c.M=null,Ls(c.U),c.g&&(g=c.g,c.g=null,g.abort(),g.ma())}function js(c,g){try{var _=c.j;if(_.G!=0&&(_.g==c||fl(_.h,c))){if(!c.K&&fl(_.h,c)&&_.G==3){try{var b=_.Da.g.parse(g)}catch{b=null}if(Array.isArray(b)&&b.length==3){var U=b;if(U[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<c.F)Ya(_),Ka(_);else break e;bl(_),et(18)}}else _.za=U[1],0<_.za-_.T&&37500>U[2]&&_.F&&_.v==0&&!_.C&&(_.C=yt(A(_.Za,_),6e3));if(1>=za(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Wr(_,11)}else if((c.K||_.g==c)&&Ya(_),!te(g))for(U=_.Da.g.parse(g),g=0;g<U.length;g++){let Oe=U[g];if(_.T=Oe[0],Oe=Oe[1],_.G==2)if(Oe[0]=="c"){_.K=Oe[1],_.ia=Oe[2];const xt=Oe[3];xt!=null&&(_.la=xt,_.j.info("VER="+_.la));const Rt=Oe[4];Rt!=null&&(_.Aa=Rt,_.j.info("SVER="+_.Aa));const Zr=Oe[5];Zr!=null&&typeof Zr=="number"&&0<Zr&&(b=1.5*Zr,_.L=b,_.j.info("backChannelRequestTimeoutMs_="+b)),b=_;const zt=c.g;if(zt){const Er=zt.g?zt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Er){var $=b.h;$.g||Er.indexOf("spdy")==-1&&Er.indexOf("quic")==-1&&Er.indexOf("h2")==-1||($.j=$.l,$.g=new Set,$.h&&(Ba($,$.h),$.h=null))}if(b.D){const Al=zt.g?zt.g.getResponseHeader("X-HTTP-Session-Id"):null;Al&&(b.ya=Al,Fe(b.I,b.D,Al))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-c.F,_.j.info("Handshake RTT: "+_.R+"ms")),b=_;var ne=c;if(b.qa=Oc(b,b.J?b.ia:null,b.W),ne.K){nn(b.h,ne);var De=ne,St=b.L;St&&(De.I=St),De.B&&(Mi(De),Bs(De)),b.g=ne}else Ic(b);0<_.i.length&&Qa(_)}else Oe[0]!="stop"&&Oe[0]!="close"||Wr(_,7);else _.G==3&&(Oe[0]=="stop"||Oe[0]=="close"?Oe[0]=="stop"?Wr(_,7):El(_):Oe[0]!="noop"&&_.l&&_.l.ta(Oe),_.v=0)}}Ni(4)}catch{}}var Ec=class{constructor(c,g){this.g=c,this.map=g}};function Gr(c){this.l=c||10,d.PerformanceNavigationTiming?(c=d.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ua(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function za(c){return c.h?1:c.g?c.g.size:0}function fl(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function Ba(c,g){c.g?c.g.add(g):c.h=g}function nn(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}Gr.prototype.cancel=function(){if(this.i=dl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function dl(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const _ of c.g.values())g=g.concat(_.D);return g}return j(c.i)}function hd(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(p(c)){for(var g=[],_=c.length,b=0;b<_;b++)g.push(c[b]);return g}g=[],_=0;for(b in c)g[_++]=c[b];return g}function ja(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(p(c)||typeof c=="string"){var g=[];c=c.length;for(var _=0;_<c;_++)g.push(_);return g}g=[],_=0;for(const b in c)g[_++]=b;return g}}}function ml(c,g){if(c.forEach&&typeof c.forEach=="function")c.forEach(g,void 0);else if(p(c)||typeof c=="string")Array.prototype.forEach.call(c,g,void 0);else for(var _=ja(c),b=hd(c),U=b.length,$=0;$<U;$++)g.call(void 0,b[$],_&&_[$],c)}var qs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fd(c,g){if(c){c=c.split("&");for(var _=0;_<c.length;_++){var b=c[_].indexOf("="),U=null;if(0<=b){var $=c[_].substring(0,b);U=c[_].substring(b+1)}else $=c[_];g($,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function _t(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof _t){this.h=c.h,Fs(this,c.j),this.o=c.o,this.g=c.g,xi(this,c.s),this.l=c.l;var g=c.i,_=new Kr;_.i=g.i,g.g&&(_.g=new Map(g.g),_.h=g.h),$r(this,_),this.m=c.m}else c&&(g=String(c).match(qs))?(this.h=!1,Fs(this,g[1]||"",!0),this.o=Mn(g[2]||""),this.g=Mn(g[3]||"",!0),xi(this,g[4]),this.l=Mn(g[5]||"",!0),$r(this,g[6]||"",!0),this.m=Mn(g[7]||"")):(this.h=!1,this.i=new Kr(null,this.h))}_t.prototype.toString=function(){var c=[],g=this.j;g&&c.push(Gs(g,pl,!0),":");var _=this.g;return(_||g=="file")&&(c.push("//"),(g=this.o)&&c.push(Gs(g,pl,!0),"@"),c.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&c.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push(Gs(_,_.charAt(0)=="/"?dd:gl,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",Gs(_,qa)),c.join("")};function yn(c){return new _t(c)}function Fs(c,g,_){c.j=_?Mn(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function xi(c,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);c.s=g}else c.s=null}function $r(c,g,_){g instanceof Kr?(c.i=g,bc(c.i,c.h)):(_||(g=Gs(g,md)),c.i=new Kr(g,c.h))}function Fe(c,g,_){c.i.set(g,_)}function Hs(c){return Fe(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Mn(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Gs(c,g,_){return typeof c=="string"?(c=encodeURI(c).replace(g,Tc),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Tc(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var pl=/[#\/\?@]/g,gl=/[#\?:]/g,dd=/[#\?]/g,md=/[#\?@]/g,qa=/#/g;function Kr(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function xn(c){c.g||(c.g=new Map,c.h=0,c.i&&fd(c.i,function(g,_){c.add(decodeURIComponent(g.replace(/\+/g," ")),_)}))}n=Kr.prototype,n.add=function(c,g){xn(this),this.i=null,c=mr(this,c);var _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(g),this.h+=1,this};function Qr(c,g){xn(c),g=mr(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function Yr(c,g){return xn(c),g=mr(c,g),c.g.has(g)}n.forEach=function(c,g){xn(this),this.g.forEach(function(_,b){_.forEach(function(U){c.call(g,U,b,this)},this)},this)},n.na=function(){xn(this);const c=Array.from(this.g.values()),g=Array.from(this.g.keys()),_=[];for(let b=0;b<g.length;b++){const U=c[b];for(let $=0;$<U.length;$++)_.push(g[b])}return _},n.V=function(c){xn(this);let g=[];if(typeof c=="string")Yr(this,c)&&(g=g.concat(this.g.get(mr(this,c))));else{c=Array.from(this.g.values());for(let _=0;_<c.length;_++)g=g.concat(c[_])}return g},n.set=function(c,g){return xn(this),this.i=null,c=mr(this,c),Yr(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},n.get=function(c,g){return c?(c=this.V(c),0<c.length?String(c[0]):g):g};function yl(c,g,_){Qr(c,g),0<_.length&&(c.i=null,c.g.set(mr(c,g),j(_)),c.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(var _=0;_<g.length;_++){var b=g[_];const $=encodeURIComponent(String(b)),ne=this.V(b);for(b=0;b<ne.length;b++){var U=$;ne[b]!==""&&(U+="="+encodeURIComponent(String(ne[b]))),c.push(U)}}return this.i=c.join("&")};function mr(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function bc(c,g){g&&!c.j&&(xn(c),c.i=null,c.g.forEach(function(_,b){var U=b.toLowerCase();b!=U&&(Qr(this,b),yl(this,U,_))},c)),c.j=g}function $s(c,g){const _=new On;if(d.Image){const b=new Image;b.onload=k(Pn,_,"TestLoadImage: loaded",!0,g,b),b.onerror=k(Pn,_,"TestLoadImage: error",!1,g,b),b.onabort=k(Pn,_,"TestLoadImage: abort",!1,g,b),b.ontimeout=k(Pn,_,"TestLoadImage: timeout",!1,g,b),d.setTimeout(function(){b.ontimeout&&b.ontimeout()},1e4),b.src=c}else g(!1)}function Zn(c,g){const _=new On,b=new AbortController,U=setTimeout(()=>{b.abort(),Pn(_,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:b.signal}).then($=>{clearTimeout(U),$.ok?Pn(_,"TestPingServer: ok",!0,g):Pn(_,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(U),Pn(_,"TestPingServer: error",!1,g)})}function Pn(c,g,_,b,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),b(_)}catch{}}function Ks(){this.g=new Us}function pr(c,g,_){const b=_||"";try{ml(c,function(U,$){let ne=U;y(U)&&(ne=Xn(U)),g.push(b+$+"="+encodeURIComponent(ne))})}catch(U){throw g.push(b+"type="+encodeURIComponent("_badmap")),U}}function Pi(c){this.l=c.Ub||null,this.j=c.eb||!1}x(Pi,sl),Pi.prototype.g=function(){return new Xr(this.l,this.j)},Pi.prototype.i=function(c){return function(){return c}}({});function Xr(c,g){st.call(this),this.D=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(Xr,st),n=Xr.prototype,n.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=g,this.readyState=1,yr(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(g.body=c),(this.D||d).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,gr(this)),this.readyState=0},n.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,yr(this)),this.g&&(this.readyState=3,yr(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;_l(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function _l(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}n.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?gr(this):yr(this),this.readyState==3&&_l(this)}},n.Ra=function(c){this.g&&(this.response=this.responseText=c,gr(this))},n.Qa=function(c){this.g&&(this.response=c,gr(this))},n.ga=function(){this.g&&gr(this)};function gr(c){c.readyState=4,c.l=null,c.j=null,c.v=null,yr(c)}n.setRequestHeader=function(c,g){this.u.append(c,g)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var _=g.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=g.next();return c.join(`\r
`)};function yr(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Xr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function vl(c){let g="";return fe(c,function(_,b){g+=b,g+=":",g+=_,g+=`\r
`}),g}function Mt(c,g,_){e:{for(b in _){var b=!1;break e}b=!0}b||(_=vl(_),typeof c=="string"?_!=null&&encodeURIComponent(String(_)):Fe(c,g,_))}function Ue(c){st.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(Ue,st);var Fa=/^https?$/i,Qs=["POST","PUT"];n=Ue.prototype,n.Ha=function(c){this.J=c},n.ea=function(c,g,_,b){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():hr.g(),this.v=this.o?al(this.o):al(hr),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch($){wc(this,$);return}if(c=_||"",_=new Map(this.headers),b)if(Object.getPrototypeOf(b)===Object.prototype)for(var U in b)_.set(U,b[U]);else if(typeof b.keys=="function"&&typeof b.get=="function")for(const $ of b.keys())_.set($,b.get($));else throw Error("Unknown input type for opt_headers: "+String(b));b=Array.from(_.keys()).find($=>$.toLowerCase()=="content-type"),U=d.FormData&&c instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Qs,g,void 0))||b||U||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[$,ne]of _)this.g.setRequestHeader($,ne);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ys(this),this.u=!0,this.g.send(c),this.u=!1}catch($){wc(this,$)}};function wc(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.m=5,Ha(c),_r(c)}function Ha(c){c.A||(c.A=!0,Be(c,"complete"),Be(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Be(this,"complete"),Be(this,"abort"),_r(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),_r(this,!0)),Ue.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ga(this):this.bb())},n.bb=function(){Ga(this)};function Ga(c){if(c.h&&typeof h<"u"&&(!c.v[1]||kn(c)!=4||c.Z()!=2)){if(c.u&&kn(c)==4)Kt(c.Ea,0,c);else if(Be(c,"readystatechange"),kn(c)==4){c.h=!1;try{const ne=c.Z();e:switch(ne){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var _;if(!(_=g)){var b;if(b=ne===0){var U=String(c.D).match(qs)[1]||null;!U&&d.self&&d.self.location&&(U=d.self.location.protocol.slice(0,-1)),b=!Fa.test(U?U.toLowerCase():"")}_=b}if(_)Be(c,"complete"),Be(c,"success");else{c.m=6;try{var $=2<kn(c)?c.g.statusText:""}catch{$=""}c.l=$+" ["+c.Z()+"]",Ha(c)}}finally{_r(c)}}}}function _r(c,g){if(c.g){Ys(c);const _=c.g,b=c.v[0]?()=>{}:null;c.g=null,c.v=null,g||Be(c,"ready");try{_.onreadystatechange=b}catch{}}}function Ys(c){c.I&&(d.clearTimeout(c.I),c.I=null)}n.isActive=function(){return!!this.g};function kn(c){return c.g?c.g.readyState:0}n.Z=function(){try{return 2<kn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),ka(g)}};function Ac(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function pd(c){const g={};c=(c.g&&2<=kn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let b=0;b<c.length;b++){if(te(c[b]))continue;var _=P(c[b]);const U=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const $=g[U]||[];g[U]=$,$.push(_)}D(g,function(b){return b.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xs(c,g,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||g}function $a(c){this.Aa=0,this.i=[],this.j=new On,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Xs("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Xs("baseRetryDelayMs",5e3,c),this.cb=Xs("retryDelaySeedMs",1e4,c),this.Wa=Xs("forwardChannelMaxRetries",2,c),this.wa=Xs("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Gr(c&&c.concurrentRequestLimit),this.Da=new Ks,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=$a.prototype,n.la=8,n.G=1,n.connect=function(c,g,_,b){et(0),this.W=c,this.H=g||{},_&&b!==void 0&&(this.H.OSID=_,this.H.OAID=b),this.F=this.X,this.I=Oc(this,null,this.W),Qa(this)};function El(c){if(Sc(c),c.G==3){var g=c.U++,_=yn(c.I);if(Fe(_,"SID",c.K),Fe(_,"RID",g),Fe(_,"TYPE","terminate"),Ws(c,_),g=new tn(c,c.j,g),g.L=2,g.v=Hs(yn(_)),_=!1,d.navigator&&d.navigator.sendBeacon)try{_=d.navigator.sendBeacon(g.v.toString(),"")}catch{}!_&&d.Image&&(new Image().src=g.v,_=!0),_||(g.g=Mc(g.j,null),g.g.ea(g.v)),g.F=Date.now(),Bs(g)}Dc(c)}function Ka(c){c.g&&(Zs(c),c.g.cancel(),c.g=null)}function Sc(c){Ka(c),c.u&&(d.clearTimeout(c.u),c.u=null),Ya(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&d.clearTimeout(c.s),c.s=null)}function Qa(c){if(!Ua(c.h)&&!c.s){c.s=!0;var g=c.Ga;re||Ve(),ce||(re(),ce=!0),Ne.add(g,c),c.B=0}}function gd(c,g){return za(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=g.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=yt(A(c.Ga,c,g),wl(c,c.B)),c.B++,!0)}n.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const U=new tn(this,this.j,c);let $=this.o;if(this.S&&($?($=S($),O($,this.S)):$=this.S),this.m!==null||this.O||(U.H=$,$=null),this.P)e:{for(var g=0,_=0;_<this.i.length;_++){t:{var b=this.i[_];if("__data__"in b.map&&(b=b.map.__data__,typeof b=="string")){b=b.length;break t}b=void 0}if(b===void 0)break;if(g+=b,4096<g){g=_;break e}if(g===4096||_===this.i.length-1){g=_+1;break e}}g=1e3}else g=1e3;g=Rc(this,U,g),_=yn(this.I),Fe(_,"RID",c),Fe(_,"CVER",22),this.D&&Fe(_,"X-HTTP-Session-Id",this.D),Ws(this,_),$&&(this.O?g="headers="+encodeURIComponent(String(vl($)))+"&"+g:this.m&&Mt(_,this.m,$)),Ba(this.h,U),this.Ua&&Fe(_,"TYPE","init"),this.P?(Fe(_,"$req",g),Fe(_,"SID","null"),U.T=!0,Wn(U,_,null)):Wn(U,_,g),this.G=2}}else this.G==3&&(c?Tl(this,c):this.i.length==0||Ua(this.h)||Tl(this))};function Tl(c,g){var _;g?_=g.l:_=c.U++;const b=yn(c.I);Fe(b,"SID",c.K),Fe(b,"RID",_),Fe(b,"AID",c.T),Ws(c,b),c.m&&c.o&&Mt(b,c.m,c.o),_=new tn(c,c.j,_,c.B+1),c.m===null&&(_.H=c.o),g&&(c.i=g.D.concat(c.i)),g=Rc(c,_,1e3),_.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Ba(c.h,_),Wn(_,b,g)}function Ws(c,g){c.H&&fe(c.H,function(_,b){Fe(g,b,_)}),c.l&&ml({},function(_,b){Fe(g,b,_)})}function Rc(c,g,_){_=Math.min(c.i.length,_);var b=c.l?A(c.l.Na,c.l,c):null;e:{var U=c.i;let $=-1;for(;;){const ne=["count="+_];$==-1?0<_?($=U[0].g,ne.push("ofs="+$)):$=0:ne.push("ofs="+$);let De=!0;for(let St=0;St<_;St++){let Oe=U[St].g;const xt=U[St].map;if(Oe-=$,0>Oe)$=Math.max(0,U[St].g-100),De=!1;else try{pr(xt,ne,"req"+Oe+"_")}catch{b&&b(xt)}}if(De){b=ne.join("&");break e}}}return c=c.i.splice(0,_),g.D=c,b}function Ic(c){if(!c.g&&!c.u){c.Y=1;var g=c.Fa;re||Ve(),ce||(re(),ce=!0),Ne.add(g,c),c.v=0}}function bl(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=yt(A(c.Fa,c),wl(c,c.v)),c.v++,!0)}n.Fa=function(){if(this.u=null,Cc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=yt(A(this.ab,this),c)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,et(10),Ka(this),Cc(this))};function Zs(c){c.A!=null&&(d.clearTimeout(c.A),c.A=null)}function Cc(c){c.g=new tn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var g=yn(c.qa);Fe(g,"RID","rpc"),Fe(g,"SID",c.K),Fe(g,"AID",c.T),Fe(g,"CI",c.F?"0":"1"),!c.F&&c.ja&&Fe(g,"TO",c.ja),Fe(g,"TYPE","xmlhttp"),Ws(c,g),c.m&&c.o&&Mt(g,c.m,c.o),c.L&&(c.g.I=c.L);var _=c.g;c=c.ia,_.L=1,_.v=Hs(yn(g)),_.m=null,_.P=!0,Hr(_,c)}n.Za=function(){this.C!=null&&(this.C=null,Ka(this),bl(this),et(19))};function Ya(c){c.C!=null&&(d.clearTimeout(c.C),c.C=null)}function Nc(c,g){var _=null;if(c.g==g){Ya(c),Zs(c),c.g=null;var b=2}else if(fl(c.h,g))_=g.D,nn(c.h,g),b=1;else return;if(c.G!=0){if(g.o)if(b==1){_=g.m?g.m.length:0,g=Date.now()-g.F;var U=c.B;b=Ci(),Be(b,new At(b,_)),Qa(c)}else Ic(c);else if(U=g.s,U==3||U==0&&0<g.X||!(b==1&&gd(c,g)||b==2&&bl(c)))switch(_&&0<_.length&&(g=c.h,g.i=g.i.concat(_)),U){case 1:Wr(c,5);break;case 4:Wr(c,10);break;case 3:Wr(c,6);break;default:Wr(c,2)}}}function wl(c,g){let _=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(_*=2),_*g}function Wr(c,g){if(c.j.info("Error code "+g),g==2){var _=A(c.fb,c),b=c.Xa;const U=!b;b=new _t(b||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Fs(b,"https"),Hs(b),U?$s(b.toString(),_):Zn(b.toString(),_)}else et(2);c.G=0,c.l&&c.l.sa(g),Dc(c),Sc(c)}n.fb=function(c){c?(this.j.info("Successfully pinged google.com"),et(2)):(this.j.info("Failed to ping google.com"),et(1))};function Dc(c){if(c.G=0,c.ka=[],c.l){const g=dl(c.h);(g.length!=0||c.i.length!=0)&&(V(c.ka,g),V(c.ka,c.i),c.h.i.length=0,j(c.i),c.i.length=0),c.l.ra()}}function Oc(c,g,_){var b=_ instanceof _t?yn(_):new _t(_);if(b.g!="")g&&(b.g=g+"."+b.g),xi(b,b.s);else{var U=d.location;b=U.protocol,g=g?g+"."+U.hostname:U.hostname,U=+U.port;var $=new _t(null);b&&Fs($,b),g&&($.g=g),U&&xi($,U),_&&($.l=_),b=$}return _=c.D,g=c.ya,_&&g&&Fe(b,_,g),Fe(b,"VER",c.la),Ws(c,b),b}function Mc(c,g,_){if(g&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Ca&&!c.pa?new Ue(new Pi({eb:_})):new Ue(c.pa),g.Ha(c.J),g}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function xc(){}n=xc.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Xa(){}Xa.prototype.g=function(c,g){return new rn(c,g)};function rn(c,g){st.call(this),this.g=new $a(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(c?c["X-WebChannel-Client-Profile"]=g.va:c={"X-WebChannel-Client-Profile":g.va}),this.g.S=c,(c=g&&g.Sb)&&!te(c)&&(this.g.m=c),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!te(g)&&(this.g.D=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new vr(this)}x(rn,st),rn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},rn.prototype.close=function(){El(this.g)},rn.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.u&&(_={},_.__data__=Xn(c),c=_);g.i.push(new Ec(g.Ya++,c)),g.G==3&&Qa(g)},rn.prototype.N=function(){this.g.l=null,delete this.j,El(this.g),delete this.g,rn.aa.N.call(this)};function Pc(c){qr.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){e:{for(const _ in g){c=_;break e}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}x(Pc,qr);function kc(){ll.call(this),this.status=1}x(kc,ll);function vr(c){this.g=c}x(vr,xc),vr.prototype.ua=function(){Be(this.g,"a")},vr.prototype.ta=function(c){Be(this.g,new Pc(c))},vr.prototype.sa=function(c){Be(this.g,new kc)},vr.prototype.ra=function(){Be(this.g,"b")},Xa.prototype.createWebChannel=Xa.prototype.g,rn.prototype.send=rn.prototype.o,rn.prototype.open=rn.prototype.m,rn.prototype.close=rn.prototype.close,jw=function(){return new Xa},Bw=function(){return Ci()},zw=cr,Yp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Oi.NO_ERROR=0,Oi.TIMEOUT=8,Oi.HTTP_ERROR=6,Jh=Oi,Fr.COMPLETE="complete",Uw=Fr,ol.EventType=jr,jr.OPEN="a",jr.CLOSE="b",jr.ERROR="c",jr.MESSAGE="d",st.prototype.listen=st.prototype.K,_u=ol,Ue.prototype.listenOnce=Ue.prototype.L,Ue.prototype.getLastError=Ue.prototype.Ka,Ue.prototype.getLastErrorCode=Ue.prototype.Ba,Ue.prototype.getStatus=Ue.prototype.Z,Ue.prototype.getResponseJson=Ue.prototype.Oa,Ue.prototype.getResponseText=Ue.prototype.oa,Ue.prototype.send=Ue.prototype.ea,Ue.prototype.setWithCredentials=Ue.prototype.Ha,Lw=Ue}).apply(typeof Uh<"u"?Uh:typeof self<"u"?self:typeof window<"u"?window:{});const HT="@firebase/firestore",GT="4.9.0";/**
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
 */let Yo="12.0.0";/**
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
 */const wa=new Zu("@firebase/firestore");function Ro(){return wa.logLevel}function se(n,...e){if(wa.logLevel<=Re.DEBUG){const t=e.map(Hg);wa.debug(`Firestore (${Yo}): ${n}`,...t)}}function Ti(n,...e){if(wa.logLevel<=Re.ERROR){const t=e.map(Hg);wa.error(`Firestore (${Yo}): ${n}`,...t)}}function Bo(n,...e){if(wa.logLevel<=Re.WARN){const t=e.map(Hg);wa.warn(`Firestore (${Yo}): ${n}`,...t)}}function Hg(n){if(typeof n=="string")return n;try{/**
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
 */function ge(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,qw(n,s,t)}function qw(n,e,t){let s=`FIRESTORE (${Yo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Ti(s),new Error(s)}function ze(n,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,n||qw(e,o,s)}function Ee(n,e){return n}/**
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
 */const X={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends Yn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ps{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Fw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sM{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Xt.UNAUTHENTICATED))}shutdown(){}}class aM{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class oM{constructor(e){this.t=e,this.currentUser=Xt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ze(this.o===void 0,42304);let s=this.i;const o=p=>this.i!==s?(s=this.i,t(p)):Promise.resolve();let u=new ps;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new ps,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const p=u;e.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},d=p=>{se("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(se("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new ps)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(se("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ze(typeof s.accessToken=="string",31837,{l:s}),new Fw(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ze(e===null||typeof e=="string",2055,{h:e}),new Xt(e)}}class lM{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Xt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class uM{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new lM(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Xt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $T{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cM{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ln(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ze(this.o===void 0,3512);const s=u=>{u.error!=null&&se("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,se("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{se("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):se("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new $T(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ze(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new $T(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function hM(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class Gg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=hM(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function Ie(n,e){return n<e?-1:n>e?1:0}function Xp(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const o=n.charAt(s),u=e.charAt(s);if(o!==u)return Ep(o)===Ep(u)?Ie(o,u):Ep(o)?1:-1}return Ie(n.length,e.length)}const fM=55296,dM=57343;function Ep(n){const e=n.charCodeAt(0);return e>=fM&&e<=dM}function jo(n,e,t){return n.length===e.length&&n.every((s,o)=>t(s,e[o]))}/**
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
 */const KT="__name__";class Rr{constructor(e,t,s){t===void 0?t=0:t>e.length&&ge(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&ge(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Rr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Rr?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=Rr.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Ie(e.length,t.length)}static compareSegments(e,t){const s=Rr.isNumericId(e),o=Rr.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?Rr.extractNumericId(e).compare(Rr.extractNumericId(t)):Xp(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ms.fromString(e.substring(4,e.length-2))}}class We extends Rr{construct(e,t,s){return new We(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ie(X.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new We(t)}static emptyPath(){return new We([])}}const mM=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ht extends Rr{construct(e,t,s){return new Ht(e,t,s)}static isValidIdentifier(e){return mM.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ht.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===KT}static keyField(){return new Ht([KT])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new ie(X.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const d=e[o];if(d==="\\"){if(o+1===e.length)throw new ie(X.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ie(X.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=p,o+=2}else d==="`"?(h=!h,o++):d!=="."||h?(s+=d,o++):(u(),o++)}if(u(),h)throw new ie(X.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ht(t)}static emptyPath(){return new Ht([])}}/**
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
 */class he{constructor(e){this.path=e}static fromPath(e){return new he(We.fromString(e))}static fromName(e){return new he(We.fromString(e).popFirst(5))}static empty(){return new he(We.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&We.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return We.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new he(new We(e.slice()))}}/**
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
 */function Hw(n,e,t){if(!t)throw new ie(X.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function pM(n,e,t,s){if(e===!0&&s===!0)throw new ie(X.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function QT(n){if(!he.isDocumentKey(n))throw new ie(X.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function YT(n){if(he.isDocumentKey(n))throw new ie(X.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Gw(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Lf(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ge(12329,{type:typeof n})}function Gn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ie(X.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Lf(n);throw new ie(X.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function wt(n,e){const t={typeString:n};return e&&(t.value=e),t}function ic(n,e){if(!Gw(n))throw new ie(X.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const h=n[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new ie(X.INVALID_ARGUMENT,t);return!0}/**
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
 */const XT=-62135596800,WT=1e6;class Je{static now(){return Je.fromMillis(Date.now())}static fromDate(e){return Je.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*WT);return new Je(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ie(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ie(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<XT)throw new ie(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/WT}_compareTo(e){return this.seconds===e.seconds?Ie(this.nanoseconds,e.nanoseconds):Ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Je._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ic(e,Je._jsonSchema))return new Je(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-XT;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Je._jsonSchemaVersion="firestore/timestamp/1.0",Je._jsonSchema={type:wt("string",Je._jsonSchemaVersion),seconds:wt("number"),nanoseconds:wt("number")};/**
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
 */class ve{static fromTimestamp(e){return new ve(e)}static min(){return new ve(new Je(0,0))}static max(){return new ve(new Je(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Lu=-1;function gM(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,o=ve.fromTimestamp(s===1e9?new Je(t+1,0):new Je(t,s));return new _s(o,he.empty(),e)}function yM(n){return new _s(n.readTime,n.key,Lu)}class _s{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new _s(ve.min(),he.empty(),Lu)}static max(){return new _s(ve.max(),he.empty(),Lu)}}function _M(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=he.comparator(n.documentKey,e.documentKey),t!==0?t:Ie(n.largestBatchId,e.largestBatchId))}/**
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
 */const vM="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class EM{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Xo(n){if(n.code!==X.FAILED_PRECONDITION||n.message!==vM)throw n;se("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ge(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Z((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof Z?t:Z.resolve(t)}catch(t){return Z.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Z.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Z.reject(t)}static resolve(e){return new Z((t,s)=>{t(e)})}static reject(e){return new Z((t,s)=>{s(e)})}static waitFor(e){return new Z((t,s)=>{let o=0,u=0,h=!1;e.forEach(d=>{++o,d.next(()=>{++u,h&&u===o&&t()},p=>s(p))}),h=!0,u===o&&t()})}static or(e){let t=Z.resolve(!1);for(const s of e)t=t.next(o=>o?Z.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,u)=>{s.push(t.call(this,o,u))}),this.waitFor(s)}static mapArray(e,t){return new Z((s,o)=>{const u=e.length,h=new Array(u);let d=0;for(let p=0;p<u;p++){const y=p;t(e[y]).next(E=>{h[y]=E,++d,d===u&&s(h)},E=>o(E))}})}static doWhile(e,t){return new Z((s,o)=>{const u=()=>{e()===!0?t().next(()=>{u()},o):s()};u()})}}function TM(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Wo(n){return n.name==="IndexedDbTransactionError"}/**
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
 */const $g=-1;function zf(n){return n==null}function _f(n){return n===0&&1/n==-1/0}function bM(n){return typeof n=="number"&&Number.isInteger(n)&&!_f(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const $w="";function wM(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=ZT(e)),e=AM(n.get(t),e);return ZT(e)}function AM(n,e){let t=e;const s=n.length;for(let o=0;o<s;o++){const u=n.charAt(o);switch(u){case"\0":t+="";break;case $w:t+="";break;default:t+=u}}return t}function ZT(n){return n+$w+""}/**
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
 */function JT(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ns(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Kw(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class it{constructor(e,t){this.comparator=e,this.root=t||Ft.EMPTY}insert(e,t){return new it(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ft.BLACK,null,null))}remove(e){return new it(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ft.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new zh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new zh(this.root,e,this.comparator,!1)}getReverseIterator(){return new zh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new zh(this.root,e,this.comparator,!0)}}class zh{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ft{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Ft.RED,this.left=o??Ft.EMPTY,this.right=u??Ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Ft(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Ft.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Ft.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ge(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ge(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ge(27949);return e+(this.isRed()?0:1)}}Ft.EMPTY=null,Ft.RED=!0,Ft.BLACK=!1;Ft.EMPTY=new class{constructor(){this.size=0}get key(){throw ge(57766)}get value(){throw ge(16141)}get color(){throw ge(16727)}get left(){throw ge(29726)}get right(){throw ge(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new Ft(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Nt{constructor(e){this.comparator=e,this.data=new it(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new e0(this.data.getIterator())}getIteratorFrom(e){return new e0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof Nt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Nt(this.comparator);return t.data=e,t}}class e0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Rn{constructor(e){this.fields=e,e.sort(Ht.comparator)}static empty(){return new Rn([])}unionWith(e){let t=new Nt(Ht.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Rn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return jo(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class Qw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Gt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new Qw("Invalid base64 string: "+u):u}}(e);return new Gt(t)}static fromUint8Array(e){const t=function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u}(e);return new Gt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Gt.EMPTY_BYTE_STRING=new Gt("");const SM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vs(n){if(ze(!!n,39018),typeof n=="string"){let e=0;const t=SM.exec(n);if(ze(!!t,46558,{timestamp:n}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:mt(n.seconds),nanos:mt(n.nanos)}}function mt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Es(n){return typeof n=="string"?Gt.fromBase64String(n):Gt.fromUint8Array(n)}/**
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
 */const Yw="server_timestamp",Xw="__type__",Ww="__previous_value__",Zw="__local_write_time__";function Kg(n){return(n?.mapValue?.fields||{})[Xw]?.stringValue===Yw}function Bf(n){const e=n.mapValue.fields[Ww];return Kg(e)?Bf(e):e}function Uu(n){const e=vs(n.mapValue.fields[Zw].timestampValue);return new Je(e.seconds,e.nanos)}/**
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
 */class RM{constructor(e,t,s,o,u,h,d,p,y,E){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=y,this.isUsingEmulator=E}}const vf="(default)";class zu{constructor(e,t){this.projectId=e,this.database=t||vf}static empty(){return new zu("","")}get isDefaultDatabase(){return this.database===vf}isEqual(e){return e instanceof zu&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Jw="__type__",IM="__max__",Bh={mapValue:{}},eA="__vector__",Ef="value";function Ts(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Kg(n)?4:NM(n)?9007199254740991:CM(n)?10:11:ge(28295,{value:n})}function Pr(n,e){if(n===e)return!0;const t=Ts(n);if(t!==Ts(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Uu(n).isEqual(Uu(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=vs(o.timestampValue),d=vs(u.timestampValue);return h.seconds===d.seconds&&h.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(o,u){return Es(o.bytesValue).isEqual(Es(u.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(o,u){return mt(o.geoPointValue.latitude)===mt(u.geoPointValue.latitude)&&mt(o.geoPointValue.longitude)===mt(u.geoPointValue.longitude)}(n,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return mt(o.integerValue)===mt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=mt(o.doubleValue),d=mt(u.doubleValue);return h===d?_f(h)===_f(d):isNaN(h)&&isNaN(d)}return!1}(n,e);case 9:return jo(n.arrayValue.values||[],e.arrayValue.values||[],Pr);case 10:case 11:return function(o,u){const h=o.mapValue.fields||{},d=u.mapValue.fields||{};if(JT(h)!==JT(d))return!1;for(const p in h)if(h.hasOwnProperty(p)&&(d[p]===void 0||!Pr(h[p],d[p])))return!1;return!0}(n,e);default:return ge(52216,{left:n})}}function Bu(n,e){return(n.values||[]).find(t=>Pr(t,e))!==void 0}function qo(n,e){if(n===e)return 0;const t=Ts(n),s=Ts(e);if(t!==s)return Ie(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ie(n.booleanValue,e.booleanValue);case 2:return function(u,h){const d=mt(u.integerValue||u.doubleValue),p=mt(h.integerValue||h.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(n,e);case 3:return t0(n.timestampValue,e.timestampValue);case 4:return t0(Uu(n),Uu(e));case 5:return Xp(n.stringValue,e.stringValue);case 6:return function(u,h){const d=Es(u),p=Es(h);return d.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(u,h){const d=u.split("/"),p=h.split("/");for(let y=0;y<d.length&&y<p.length;y++){const E=Ie(d[y],p[y]);if(E!==0)return E}return Ie(d.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(u,h){const d=Ie(mt(u.latitude),mt(h.latitude));return d!==0?d:Ie(mt(u.longitude),mt(h.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return n0(n.arrayValue,e.arrayValue);case 10:return function(u,h){const d=u.fields||{},p=h.fields||{},y=d[Ef]?.arrayValue,E=p[Ef]?.arrayValue,w=Ie(y?.values?.length||0,E?.values?.length||0);return w!==0?w:n0(y,E)}(n.mapValue,e.mapValue);case 11:return function(u,h){if(u===Bh.mapValue&&h===Bh.mapValue)return 0;if(u===Bh.mapValue)return 1;if(h===Bh.mapValue)return-1;const d=u.fields||{},p=Object.keys(d),y=h.fields||{},E=Object.keys(y);p.sort(),E.sort();for(let w=0;w<p.length&&w<E.length;++w){const A=Xp(p[w],E[w]);if(A!==0)return A;const k=qo(d[p[w]],y[E[w]]);if(k!==0)return k}return Ie(p.length,E.length)}(n.mapValue,e.mapValue);default:throw ge(23264,{he:t})}}function t0(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ie(n,e);const t=vs(n),s=vs(e),o=Ie(t.seconds,s.seconds);return o!==0?o:Ie(t.nanos,s.nanos)}function n0(n,e){const t=n.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=qo(t[o],s[o]);if(u)return u}return Ie(t.length,s.length)}function Fo(n){return Wp(n)}function Wp(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const s=vs(t);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Es(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return he.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=Wp(u);return s+"]"}(n.arrayValue):"mapValue"in n?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${Wp(t.fields[h])}`;return o+"}"}(n.mapValue):ge(61005,{value:n})}function ef(n){switch(Ts(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Bf(n);return e?16+ef(e):16;case 5:return 2*n.stringValue.length;case 6:return Es(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+ef(u),0)}(n.arrayValue);case 10:case 11:return function(s){let o=0;return Ns(s.fields,(u,h)=>{o+=u.length+ef(h)}),o}(n.mapValue);default:throw ge(13486,{value:n})}}function r0(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Zp(n){return!!n&&"integerValue"in n}function Qg(n){return!!n&&"arrayValue"in n}function i0(n){return!!n&&"nullValue"in n}function s0(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function tf(n){return!!n&&"mapValue"in n}function CM(n){return(n?.mapValue?.fields||{})[Jw]?.stringValue===eA}function Su(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Ns(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Su(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Su(n.arrayValue.values[t]);return e}return{...n}}function NM(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===IM}/**
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
 */class mn{constructor(e){this.value=e}static empty(){return new mn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!tf(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Su(t)}setAll(e){let t=Ht.emptyPath(),s={},o=[];e.forEach((h,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,s,o),s={},o=[],t=d.popLast()}h?s[d.lastSegment()]=Su(h):o.push(d.lastSegment())});const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());tf(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Pr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];tf(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Ns(t,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new mn(Su(this.value))}}function tA(n){const e=[];return Ns(n.fields,(t,s)=>{const o=new Ht([t]);if(tf(s)){const u=tA(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)}),new Rn(e)}/**
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
 */class Zt{constructor(e,t,s,o,u,h,d){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=d}static newInvalidDocument(e){return new Zt(e,0,ve.min(),ve.min(),ve.min(),mn.empty(),0)}static newFoundDocument(e,t,s,o){return new Zt(e,1,t,ve.min(),s,o,0)}static newNoDocument(e,t){return new Zt(e,2,t,ve.min(),ve.min(),mn.empty(),0)}static newUnknownDocument(e,t){return new Zt(e,3,t,ve.min(),ve.min(),mn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Zt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Zt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Tf{constructor(e,t){this.position=e,this.inclusive=t}}function a0(n,e,t){let s=0;for(let o=0;o<n.position.length;o++){const u=e[o],h=n.position[o];if(u.field.isKeyField()?s=he.comparator(he.fromName(h.referenceValue),t.key):s=qo(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function o0(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Pr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class ju{constructor(e,t="asc"){this.field=e,this.dir=t}}function DM(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class nA{}class bt extends nA{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new MM(e,t,s):t==="array-contains"?new kM(e,s):t==="in"?new VM(e,s):t==="not-in"?new LM(e,s):t==="array-contains-any"?new UM(e,s):new bt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new xM(e,s):new PM(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(qo(t,this.value)):t!==null&&Ts(this.value)===Ts(t)&&this.matchesComparison(qo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ge(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ar extends nA{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new ar(e,t)}matches(e){return rA(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function rA(n){return n.op==="and"}function iA(n){return OM(n)&&rA(n)}function OM(n){for(const e of n.filters)if(e instanceof ar)return!1;return!0}function Jp(n){if(n instanceof bt)return n.field.canonicalString()+n.op.toString()+Fo(n.value);if(iA(n))return n.filters.map(e=>Jp(e)).join(",");{const e=n.filters.map(t=>Jp(t)).join(",");return`${n.op}(${e})`}}function sA(n,e){return n instanceof bt?function(s,o){return o instanceof bt&&s.op===o.op&&s.field.isEqual(o.field)&&Pr(s.value,o.value)}(n,e):n instanceof ar?function(s,o){return o instanceof ar&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,h,d)=>u&&sA(h,o.filters[d]),!0):!1}(n,e):void ge(19439)}function aA(n){return n instanceof bt?function(t){return`${t.field.canonicalString()} ${t.op} ${Fo(t.value)}`}(n):n instanceof ar?function(t){return t.op.toString()+" {"+t.getFilters().map(aA).join(" ,")+"}"}(n):"Filter"}class MM extends bt{constructor(e,t,s){super(e,t,s),this.key=he.fromName(s.referenceValue)}matches(e){const t=he.comparator(e.key,this.key);return this.matchesComparison(t)}}class xM extends bt{constructor(e,t){super(e,"in",t),this.keys=oA("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class PM extends bt{constructor(e,t){super(e,"not-in",t),this.keys=oA("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function oA(n,e){return(e.arrayValue?.values||[]).map(t=>he.fromName(t.referenceValue))}class kM extends bt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Qg(t)&&Bu(t.arrayValue,this.value)}}class VM extends bt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Bu(this.value.arrayValue,t)}}class LM extends bt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Bu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Bu(this.value.arrayValue,t)}}class UM extends bt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Qg(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Bu(this.value.arrayValue,s))}}/**
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
 */class zM{constructor(e,t=null,s=[],o=[],u=null,h=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=d,this.Te=null}}function l0(n,e=null,t=[],s=[],o=null,u=null,h=null){return new zM(n,e,t,s,o,u,h)}function Yg(n){const e=Ee(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>Jp(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),zf(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Fo(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Fo(s)).join(",")),e.Te=t}return e.Te}function Xg(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!DM(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!sA(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!o0(n.startAt,e.startAt)&&o0(n.endAt,e.endAt)}function eg(n){return he.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Zo{constructor(e,t=null,s=[],o=[],u=null,h="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=d,this.endAt=p,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function BM(n,e,t,s,o,u,h,d){return new Zo(n,e,t,s,o,u,h,d)}function jf(n){return new Zo(n)}function u0(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function lA(n){return n.collectionGroup!==null}function Ru(n){const e=Ee(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const u of e.explicitOrderBy)e.Ie.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let d=new Nt(Ht.comparator);return h.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(d=d.add(y.field))})}),d})(e).forEach(u=>{t.has(u.canonicalString())||u.isKeyField()||e.Ie.push(new ju(u,s))}),t.has(Ht.keyField().canonicalString())||e.Ie.push(new ju(Ht.keyField(),s))}return e.Ie}function Dr(n){const e=Ee(n);return e.Ee||(e.Ee=jM(e,Ru(n))),e.Ee}function jM(n,e){if(n.limitType==="F")return l0(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new ju(o.field,u)});const t=n.endAt?new Tf(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Tf(n.startAt.position,n.startAt.inclusive):null;return l0(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function tg(n,e){const t=n.filters.concat([e]);return new Zo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function ng(n,e,t){return new Zo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function qf(n,e){return Xg(Dr(n),Dr(e))&&n.limitType===e.limitType}function uA(n){return`${Yg(Dr(n))}|lt:${n.limitType}`}function Io(n){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>aA(o)).join(", ")}]`),zf(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>Fo(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>Fo(o)).join(",")),`Target(${s})`}(Dr(n))}; limitType=${n.limitType})`}function Ff(n,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):he.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(n,e)&&function(s,o){for(const u of Ru(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(n,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(n,e)&&function(s,o){return!(s.startAt&&!function(h,d,p){const y=a0(h,d,p);return h.inclusive?y<=0:y<0}(s.startAt,Ru(s),o)||s.endAt&&!function(h,d,p){const y=a0(h,d,p);return h.inclusive?y>=0:y>0}(s.endAt,Ru(s),o))}(n,e)}function qM(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function cA(n){return(e,t)=>{let s=!1;for(const o of Ru(n)){const u=FM(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function FM(n,e,t){const s=n.field.isKeyField()?he.comparator(e.key,t.key):function(u,h,d){const p=h.data.field(u),y=d.data.field(u);return p!==null&&y!==null?qo(p,y):ge(42886)}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return ge(19790,{direction:n.dir})}}/**
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
 */class Na{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Ns(this.inner,(t,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return Kw(this.inner)}size(){return this.innerSize}}/**
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
 */const HM=new it(he.comparator);function bi(){return HM}const hA=new it(he.comparator);function vu(...n){let e=hA;for(const t of n)e=e.insert(t.key,t);return e}function fA(n){let e=hA;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function _a(){return Iu()}function dA(){return Iu()}function Iu(){return new Na(n=>n.toString(),(n,e)=>n.isEqual(e))}const GM=new it(he.comparator),$M=new Nt(he.comparator);function Ce(...n){let e=$M;for(const t of n)e=e.add(t);return e}const KM=new Nt(Ie);function QM(){return KM}/**
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
 */function Wg(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_f(e)?"-0":e}}function mA(n){return{integerValue:""+n}}function pA(n,e){return bM(e)?mA(e):Wg(n,e)}/**
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
 */class Hf{constructor(){this._=void 0}}function YM(n,e,t){return n instanceof bf?function(o,u){const h={fields:{[Xw]:{stringValue:Yw},[Zw]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Kg(u)&&(u=Bf(u)),u&&(h.fields[Ww]=u),{mapValue:h}}(t,e):n instanceof qu?yA(n,e):n instanceof Fu?_A(n,e):function(o,u){const h=gA(o,u),d=c0(h)+c0(o.Ae);return Zp(h)&&Zp(o.Ae)?mA(d):Wg(o.serializer,d)}(n,e)}function XM(n,e,t){return n instanceof qu?yA(n,e):n instanceof Fu?_A(n,e):t}function gA(n,e){return n instanceof Hu?function(s){return Zp(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class bf extends Hf{}class qu extends Hf{constructor(e){super(),this.elements=e}}function yA(n,e){const t=vA(e);for(const s of n.elements)t.some(o=>Pr(o,s))||t.push(s);return{arrayValue:{values:t}}}class Fu extends Hf{constructor(e){super(),this.elements=e}}function _A(n,e){let t=vA(e);for(const s of n.elements)t=t.filter(o=>!Pr(o,s));return{arrayValue:{values:t}}}class Hu extends Hf{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function c0(n){return mt(n.integerValue||n.doubleValue)}function vA(n){return Qg(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class WM{constructor(e,t){this.field=e,this.transform=t}}function ZM(n,e){return n.field.isEqual(e.field)&&function(s,o){return s instanceof qu&&o instanceof qu||s instanceof Fu&&o instanceof Fu?jo(s.elements,o.elements,Pr):s instanceof Hu&&o instanceof Hu?Pr(s.Ae,o.Ae):s instanceof bf&&o instanceof bf}(n.transform,e.transform)}class JM{constructor(e,t){this.version=e,this.transformResults=t}}class $n{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new $n}static exists(e){return new $n(void 0,e)}static updateTime(e){return new $n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function nf(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Gf{}function EA(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Zg(n.key,$n.none()):new sc(n.key,n.data,$n.none());{const t=n.data,s=mn.empty();let o=new Nt(Ht.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new Ds(n.key,s,new Rn(o.toArray()),$n.none())}}function ex(n,e,t){n instanceof sc?function(o,u,h){const d=o.value.clone(),p=f0(o.fieldTransforms,u,h.transformResults);d.setAll(p),u.convertToFoundDocument(h.version,d).setHasCommittedMutations()}(n,e,t):n instanceof Ds?function(o,u,h){if(!nf(o.precondition,u))return void u.convertToUnknownDocument(h.version);const d=f0(o.fieldTransforms,u,h.transformResults),p=u.data;p.setAll(TA(o)),p.setAll(d),u.convertToFoundDocument(h.version,p).setHasCommittedMutations()}(n,e,t):function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function Cu(n,e,t,s){return n instanceof sc?function(u,h,d,p){if(!nf(u.precondition,h))return d;const y=u.value.clone(),E=d0(u.fieldTransforms,p,h);return y.setAll(E),h.convertToFoundDocument(h.version,y).setHasLocalMutations(),null}(n,e,t,s):n instanceof Ds?function(u,h,d,p){if(!nf(u.precondition,h))return d;const y=d0(u.fieldTransforms,p,h),E=h.data;return E.setAll(TA(u)),E.setAll(y),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),d===null?null:d.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(w=>w.field))}(n,e,t,s):function(u,h,d){return nf(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):d}(n,e,t)}function tx(n,e){let t=null;for(const s of n.fieldTransforms){const o=e.data.field(s.field),u=gA(s.transform,o||null);u!=null&&(t===null&&(t=mn.empty()),t.set(s.field,u))}return t||null}function h0(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&jo(s,o,(u,h)=>ZM(u,h))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class sc extends Gf{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Ds extends Gf{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function TA(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function f0(n,e,t){const s=new Map;ze(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let o=0;o<t.length;o++){const u=n[o],h=u.transform,d=e.data.field(u.field);s.set(u.field,XM(h,d,t[o]))}return s}function d0(n,e,t){const s=new Map;for(const o of n){const u=o.transform,h=t.data.field(o.field);s.set(o.field,YM(u,h,e))}return s}class Zg extends Gf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nx extends Gf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class rx{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&ex(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Cu(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Cu(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=dA();return this.mutations.forEach(o=>{const u=e.get(o.key),h=u.overlayedDocument;let d=this.applyToLocalView(h,u.mutatedFields);d=t.has(o.key)?null:d;const p=EA(h,d);p!==null&&s.set(o.key,p),h.isValidDocument()||h.convertToNoDocument(ve.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ce())}isEqual(e){return this.batchId===e.batchId&&jo(this.mutations,e.mutations,(t,s)=>h0(t,s))&&jo(this.baseMutations,e.baseMutations,(t,s)=>h0(t,s))}}class Jg{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){ze(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=function(){return GM}();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new Jg(e,t,s,o)}}/**
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
 */class ix{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class sx{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Tt,xe;function ax(n){switch(n){case X.OK:return ge(64938);case X.CANCELLED:case X.UNKNOWN:case X.DEADLINE_EXCEEDED:case X.RESOURCE_EXHAUSTED:case X.INTERNAL:case X.UNAVAILABLE:case X.UNAUTHENTICATED:return!1;case X.INVALID_ARGUMENT:case X.NOT_FOUND:case X.ALREADY_EXISTS:case X.PERMISSION_DENIED:case X.FAILED_PRECONDITION:case X.ABORTED:case X.OUT_OF_RANGE:case X.UNIMPLEMENTED:case X.DATA_LOSS:return!0;default:return ge(15467,{code:n})}}function bA(n){if(n===void 0)return Ti("GRPC error has no .code"),X.UNKNOWN;switch(n){case Tt.OK:return X.OK;case Tt.CANCELLED:return X.CANCELLED;case Tt.UNKNOWN:return X.UNKNOWN;case Tt.DEADLINE_EXCEEDED:return X.DEADLINE_EXCEEDED;case Tt.RESOURCE_EXHAUSTED:return X.RESOURCE_EXHAUSTED;case Tt.INTERNAL:return X.INTERNAL;case Tt.UNAVAILABLE:return X.UNAVAILABLE;case Tt.UNAUTHENTICATED:return X.UNAUTHENTICATED;case Tt.INVALID_ARGUMENT:return X.INVALID_ARGUMENT;case Tt.NOT_FOUND:return X.NOT_FOUND;case Tt.ALREADY_EXISTS:return X.ALREADY_EXISTS;case Tt.PERMISSION_DENIED:return X.PERMISSION_DENIED;case Tt.FAILED_PRECONDITION:return X.FAILED_PRECONDITION;case Tt.ABORTED:return X.ABORTED;case Tt.OUT_OF_RANGE:return X.OUT_OF_RANGE;case Tt.UNIMPLEMENTED:return X.UNIMPLEMENTED;case Tt.DATA_LOSS:return X.DATA_LOSS;default:return ge(39323,{code:n})}}(xe=Tt||(Tt={}))[xe.OK=0]="OK",xe[xe.CANCELLED=1]="CANCELLED",xe[xe.UNKNOWN=2]="UNKNOWN",xe[xe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",xe[xe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",xe[xe.NOT_FOUND=5]="NOT_FOUND",xe[xe.ALREADY_EXISTS=6]="ALREADY_EXISTS",xe[xe.PERMISSION_DENIED=7]="PERMISSION_DENIED",xe[xe.UNAUTHENTICATED=16]="UNAUTHENTICATED",xe[xe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",xe[xe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",xe[xe.ABORTED=10]="ABORTED",xe[xe.OUT_OF_RANGE=11]="OUT_OF_RANGE",xe[xe.UNIMPLEMENTED=12]="UNIMPLEMENTED",xe[xe.INTERNAL=13]="INTERNAL",xe[xe.UNAVAILABLE=14]="UNAVAILABLE",xe[xe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function ox(){return new TextEncoder}/**
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
 */const lx=new ms([4294967295,4294967295],0);function m0(n){const e=ox().encode(n),t=new Vw;return t.update(e),new Uint8Array(t.digest())}function p0(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new ms([t,s],0),new ms([o,u],0)]}class ey{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Eu(`Invalid padding: ${t}`);if(s<0)throw new Eu(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Eu(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Eu(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=ms.fromNumber(this.ge)}ye(e,t,s){let o=e.add(t.multiply(ms.fromNumber(s)));return o.compare(lx)===1&&(o=new ms([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=m0(e),[s,o]=p0(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);if(!this.we(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new ey(u,o,t);return s.forEach(d=>h.insert(d)),h}insert(e){if(this.ge===0)return;const t=m0(e),[s,o]=p0(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);this.Se(h)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Eu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class $f{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,ac.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new $f(ve.min(),o,new it(Ie),bi(),Ce())}}class ac{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new ac(s,t,Ce(),Ce(),Ce())}}/**
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
 */class rf{constructor(e,t,s,o){this.be=e,this.removedTargetIds=t,this.key=s,this.De=o}}class wA{constructor(e,t){this.targetId=e,this.Ce=t}}class AA{constructor(e,t,s=Gt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class g0{constructor(){this.ve=0,this.Fe=y0(),this.Me=Gt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ce(),t=Ce(),s=Ce();return this.Fe.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:ge(38017,{changeType:u})}}),new ac(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=y0()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ze(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class ux{constructor(e){this.Ge=e,this.ze=new Map,this.je=bi(),this.Je=jh(),this.He=jh(),this.Ye=new it(Ie)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:ge(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((s,o)=>{this.rt(o)&&t(o)})}st(e){const t=e.targetId,s=e.Ce.count,o=this.ot(t);if(o){const u=o.target;if(eg(u))if(s===0){const h=new he(u.path);this.et(t,h,Zt.newNoDocument(h,ve.min()))}else ze(s===1,20013,{expectedCount:s});else{const h=this._t(t);if(h!==s){const d=this.ut(e),p=d?this.ct(d,e,h):1;if(p!==0){this.it(t);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,y)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,d;try{h=Es(s).toUint8Array()}catch(p){if(p instanceof Qw)return Bo("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new ey(h,o,u)}catch(p){return Bo(p instanceof Eu?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.ge===0?null:d}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let o=0;return s.forEach(u=>{const h=this.Ge.ht(),d=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(d)||(this.et(t,u,null),o++)}),o}Tt(e){const t=new Map;this.ze.forEach((u,h)=>{const d=this.ot(h);if(d){if(u.current&&eg(d.target)){const p=new he(d.target.path);this.It(p).has(h)||this.Et(h,p)||this.et(h,p,Zt.newNoDocument(p,e))}u.Be&&(t.set(h,u.ke()),u.qe())}});let s=Ce();this.He.forEach((u,h)=>{let d=!0;h.forEachWhile(p=>{const y=this.ot(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(s=s.add(u))}),this.je.forEach((u,h)=>h.setReadTime(e));const o=new $f(e,t,this.Ye,this.je,s);return this.je=bi(),this.Je=jh(),this.He=jh(),this.Ye=new it(Ie),o}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.Qe(t,1):o.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new g0,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Nt(Ie),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Nt(Ie),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||se("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new g0),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function jh(){return new it(he.comparator)}function y0(){return new it(he.comparator)}const cx={asc:"ASCENDING",desc:"DESCENDING"},hx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},fx={and:"AND",or:"OR"};class dx{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function rg(n,e){return n.useProto3Json||zf(e)?e:{value:e}}function wf(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function SA(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function mx(n,e){return wf(n,e.toTimestamp())}function Or(n){return ze(!!n,49232),ve.fromTimestamp(function(t){const s=vs(t);return new Je(s.seconds,s.nanos)}(n))}function ty(n,e){return ig(n,e).canonicalString()}function ig(n,e){const t=function(o){return new We(["projects",o.projectId,"databases",o.database])}(n).child("documents");return e===void 0?t:t.child(e)}function RA(n){const e=We.fromString(n);return ze(OA(e),10190,{key:e.toString()}),e}function sg(n,e){return ty(n.databaseId,e.path)}function Tp(n,e){const t=RA(e);if(t.get(1)!==n.databaseId.projectId)throw new ie(X.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ie(X.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new he(CA(t))}function IA(n,e){return ty(n.databaseId,e)}function px(n){const e=RA(n);return e.length===4?We.emptyPath():CA(e)}function ag(n){return new We(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function CA(n){return ze(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function _0(n,e,t){return{name:sg(n,e),fields:t.value.mapValue.fields}}function gx(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:ge(39313,{state:y})}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(y,E){return y.useProto3Json?(ze(E===void 0||typeof E=="string",58123),Gt.fromBase64String(E||"")):(ze(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),Gt.fromUint8Array(E||new Uint8Array))}(n,e.targetChange.resumeToken),h=e.targetChange.cause,d=h&&function(y){const E=y.code===void 0?X.UNKNOWN:bA(y.code);return new ie(E,y.message||"")}(h);t=new AA(s,o,u,d||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Tp(n,s.document.name),u=Or(s.document.updateTime),h=s.document.createTime?Or(s.document.createTime):ve.min(),d=new mn({mapValue:{fields:s.document.fields}}),p=Zt.newFoundDocument(o,u,h,d),y=s.targetIds||[],E=s.removedTargetIds||[];t=new rf(y,E,p.key,p)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Tp(n,s.document),u=s.readTime?Or(s.readTime):ve.min(),h=Zt.newNoDocument(o,u),d=s.removedTargetIds||[];t=new rf([],d,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Tp(n,s.document),u=s.removedTargetIds||[];t=new rf([],u,o,null)}else{if(!("filter"in e))return ge(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new sx(o,u),d=s.targetId;t=new wA(d,h)}}return t}function yx(n,e){let t;if(e instanceof sc)t={update:_0(n,e.key,e.value)};else if(e instanceof Zg)t={delete:sg(n,e.key)};else if(e instanceof Ds)t={update:_0(n,e.key,e.data),updateMask:Rx(e.fieldMask)};else{if(!(e instanceof nx))return ge(16599,{Vt:e.type});t={verify:sg(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(u,h){const d=h.transform;if(d instanceof bf)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof qu)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Fu)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof Hu)return{fieldPath:h.field.canonicalString(),increment:d.Ae};throw ge(20930,{transform:h.transform})}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:mx(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:ge(27497)}(n,e.precondition)),t}function _x(n,e){return n&&n.length>0?(ze(e!==void 0,14353),n.map(t=>function(o,u){let h=o.updateTime?Or(o.updateTime):Or(u);return h.isEqual(ve.min())&&(h=Or(u)),new JM(h,o.transformResults||[])}(t,e))):[]}function vx(n,e){return{documents:[IA(n,e.path)]}}function Ex(n,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=IA(n,o);const u=function(y){if(y.length!==0)return DA(ar.create(y,"and"))}(e.filters);u&&(t.structuredQuery.where=u);const h=function(y){if(y.length!==0)return y.map(E=>function(A){return{field:Co(A.field),direction:wx(A.dir)}}(E))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const d=rg(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(e.endAt)),{ft:t,parent:o}}function Tx(n){let e=px(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){ze(s===1,65062);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let u=[];t.where&&(u=function(w){const A=NA(w);return A instanceof ar&&iA(A)?A.getFilters():[A]}(t.where));let h=[];t.orderBy&&(h=function(w){return w.map(A=>function(x){return new ju(No(x.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(A))}(t.orderBy));let d=null;t.limit&&(d=function(w){let A;return A=typeof w=="object"?w.value:w,zf(A)?null:A}(t.limit));let p=null;t.startAt&&(p=function(w){const A=!!w.before,k=w.values||[];return new Tf(k,A)}(t.startAt));let y=null;return t.endAt&&(y=function(w){const A=!w.before,k=w.values||[];return new Tf(k,A)}(t.endAt)),BM(e,o,h,u,d,"F",p,y)}function bx(n,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ge(28987,{purpose:o})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function NA(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=No(t.unaryFilter.field);return bt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=No(t.unaryFilter.field);return bt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=No(t.unaryFilter.field);return bt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=No(t.unaryFilter.field);return bt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ge(61313);default:return ge(60726)}}(n):n.fieldFilter!==void 0?function(t){return bt.create(No(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ge(58110);default:return ge(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ar.create(t.compositeFilter.filters.map(s=>NA(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ge(1026)}}(t.compositeFilter.op))}(n):ge(30097,{filter:n})}function wx(n){return cx[n]}function Ax(n){return hx[n]}function Sx(n){return fx[n]}function Co(n){return{fieldPath:n.canonicalString()}}function No(n){return Ht.fromServerFormat(n.fieldPath)}function DA(n){return n instanceof bt?function(t){if(t.op==="=="){if(s0(t.value))return{unaryFilter:{field:Co(t.field),op:"IS_NAN"}};if(i0(t.value))return{unaryFilter:{field:Co(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(s0(t.value))return{unaryFilter:{field:Co(t.field),op:"IS_NOT_NAN"}};if(i0(t.value))return{unaryFilter:{field:Co(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Co(t.field),op:Ax(t.op),value:t.value}}}(n):n instanceof ar?function(t){const s=t.getFilters().map(o=>DA(o));return s.length===1?s[0]:{compositeFilter:{op:Sx(t.op),filters:s}}}(n):ge(54877,{filter:n})}function Rx(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function OA(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class hs{constructor(e,t,s,o,u=ve.min(),h=ve.min(),d=Gt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new hs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new hs(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new hs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new hs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Ix{constructor(e){this.yt=e}}function Cx(n){const e=Tx({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ng(e,e.limit,"L"):e}/**
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
 */class Nx{constructor(){this.Cn=new Dx}addToCollectionParentIndex(e,t){return this.Cn.add(t),Z.resolve()}getCollectionParents(e,t){return Z.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return Z.resolve()}deleteFieldIndex(e,t){return Z.resolve()}deleteAllFieldIndexes(e){return Z.resolve()}createTargetIndexes(e,t){return Z.resolve()}getDocumentsMatchingTarget(e,t){return Z.resolve(null)}getIndexType(e,t){return Z.resolve(0)}getFieldIndexes(e,t){return Z.resolve([])}getNextCollectionGroupToUpdate(e){return Z.resolve(null)}getMinOffset(e,t){return Z.resolve(_s.min())}getMinOffsetFromCollectionGroup(e,t){return Z.resolve(_s.min())}updateCollectionGroup(e,t,s){return Z.resolve()}updateIndexEntries(e,t){return Z.resolve()}}class Dx{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new Nt(We.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Nt(We.comparator)).toArray()}}/**
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
 */const v0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},MA=41943040;class dn{static withCacheSize(e){return new dn(e,dn.DEFAULT_COLLECTION_PERCENTILE,dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */dn.DEFAULT_COLLECTION_PERCENTILE=10,dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,dn.DEFAULT=new dn(MA,dn.DEFAULT_COLLECTION_PERCENTILE,dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),dn.DISABLED=new dn(-1,0,0);/**
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
 */class Ho{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Ho(0)}static cr(){return new Ho(-1)}}/**
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
 */const E0="LruGarbageCollector",Ox=1048576;function T0([n,e],[t,s]){const o=Ie(n,t);return o===0?Ie(e,s):o}class Mx{constructor(e){this.Ir=e,this.buffer=new Nt(T0),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();T0(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class xx{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){se(E0,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Wo(t)?se(E0,"Ignoring IndexedDB error during garbage collection: ",t):await Xo(t)}await this.Vr(3e5)})}}class Px{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return Z.resolve(Uf.ce);const s=new Mx(t);return this.mr.forEachTarget(e,o=>s.Ar(o.sequenceNumber)).next(()=>this.mr.pr(e,o=>s.Ar(o))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(se("LruGarbageCollector","Garbage collection skipped; disabled"),Z.resolve(v0)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(se("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),v0):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,o,u,h,d,p,y;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(w=>(w>this.params.maximumSequenceNumbersToCollect?(se("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),o=this.params.maximumSequenceNumbersToCollect):o=w,h=Date.now(),this.nthSequenceNumber(e,o))).next(w=>(s=w,d=Date.now(),this.removeTargets(e,s,t))).next(w=>(u=w,p=Date.now(),this.removeOrphanedDocuments(e,s))).next(w=>(y=Date.now(),Ro()<=Re.DEBUG&&se("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(d-h)+`ms
	Removed ${u} targets in `+(p-d)+`ms
	Removed ${w} documents in `+(y-p)+`ms
Total Duration: ${y-E}ms`),Z.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:w})))}}function kx(n,e){return new Px(n,e)}/**
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
 */class Vx{constructor(){this.changes=new Na(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Zt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?Z.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Lx{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Ux{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&Cu(s.mutation,o,Rn.empty(),Je.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Ce()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Ce()){const o=_a();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(u=>{let h=vu();return u.forEach((d,p)=>{h=h.insert(d,p.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=_a();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Ce()))}populateOverlays(e,t,s){const o=[];return s.forEach(u=>{t.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((h,d)=>{t.set(h,d)})})}computeViews(e,t,s,o){let u=bi();const h=Iu(),d=function(){return Iu()}();return t.forEach((p,y)=>{const E=s.get(y.key);o.has(y.key)&&(E===void 0||E.mutation instanceof Ds)?u=u.insert(y.key,y):E!==void 0?(h.set(y.key,E.mutation.getFieldMask()),Cu(E.mutation,y,E.mutation.getFieldMask(),Je.now())):h.set(y.key,Rn.empty())}),this.recalculateAndSaveOverlays(e,u).next(p=>(p.forEach((y,E)=>h.set(y,E)),t.forEach((y,E)=>d.set(y,new Lx(E,h.get(y)??null))),d))}recalculateAndSaveOverlays(e,t){const s=Iu();let o=new it((h,d)=>h-d),u=Ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const d of h)d.keys().forEach(p=>{const y=t.get(p);if(y===null)return;let E=s.get(p)||Rn.empty();E=d.applyToLocalView(y,E),s.set(p,E);const w=(o.get(d.batchId)||Ce()).add(p);o=o.insert(d.batchId,w)})}).next(()=>{const h=[],d=o.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),y=p.key,E=p.value,w=dA();E.forEach(A=>{if(!u.has(A)){const k=EA(t.get(A),s.get(A));k!==null&&w.set(A,k),u=u.add(A)}}),h.push(this.documentOverlayCache.saveOverlays(e,y,w))}return Z.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return he.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):lA(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):Z.resolve(_a());let d=Lu,p=u;return h.next(y=>Z.forEach(y,(E,w)=>(d<w.largestBatchId&&(d=w.largestBatchId),u.get(E)?Z.resolve():this.remoteDocumentCache.getEntry(e,E).next(A=>{p=p.insert(E,A)}))).next(()=>this.populateOverlays(e,y,u)).next(()=>this.computeViews(e,p,y,Ce())).next(E=>({batchId:d,changes:fA(E)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new he(t)).next(s=>{let o=vu();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=vu();return this.indexManager.getCollectionParents(e,u).next(d=>Z.forEach(d,p=>{const y=function(w,A){return new Zo(A,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(t,p.child(u));return this.getDocumentsMatchingCollectionQuery(e,y,s,o).next(E=>{E.forEach((w,A)=>{h=h.insert(w,A)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o))).next(h=>{u.forEach((p,y)=>{const E=y.getKey();h.get(E)===null&&(h=h.insert(E,Zt.newInvalidDocument(E)))});let d=vu();return h.forEach((p,y)=>{const E=u.get(p);E!==void 0&&Cu(E.mutation,y,Rn.empty(),Je.now()),Ff(t,y)&&(d=d.insert(p,y))}),d})}}/**
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
 */class zx{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return Z.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:Or(o.createTime)}}(t)),Z.resolve()}getNamedQuery(e,t){return Z.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(o){return{name:o.name,query:Cx(o.bundledQuery),readTime:Or(o.readTime)}}(t)),Z.resolve()}}/**
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
 */class Bx{constructor(){this.overlays=new it(he.comparator),this.qr=new Map}getOverlay(e,t){return Z.resolve(this.overlays.get(t))}getOverlays(e,t){const s=_a();return Z.forEach(t,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,u)=>{this.St(e,t,u)}),Z.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.qr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.qr.delete(s)),Z.resolve()}getOverlaysForCollection(e,t,s){const o=_a(),u=t.length+1,h=new he(t.child("")),d=this.overlays.getIteratorFrom(h);for(;d.hasNext();){const p=d.getNext().value,y=p.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===u&&p.largestBatchId>s&&o.set(p.getKey(),p)}return Z.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new it((y,E)=>y-E);const h=this.overlays.getIterator();for(;h.hasNext();){const y=h.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>s){let E=u.get(y.largestBatchId);E===null&&(E=_a(),u=u.insert(y.largestBatchId,E)),E.set(y.getKey(),y)}}const d=_a(),p=u.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,E)=>d.set(y,E)),!(d.size()>=o)););return Z.resolve(d)}St(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.qr.get(o.largestBatchId).delete(s.key);this.qr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new ix(t,s));let u=this.qr.get(t);u===void 0&&(u=Ce(),this.qr.set(t,u)),this.qr.set(t,u.add(s.key))}}/**
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
 */class jx{constructor(){this.sessionToken=Gt.EMPTY_BYTE_STRING}getSessionToken(e){return Z.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Z.resolve()}}/**
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
 */class ny{constructor(){this.Qr=new Nt(Lt.$r),this.Ur=new Nt(Lt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new Lt(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.Gr(new Lt(e,t))}zr(e,t){e.forEach(s=>this.removeReference(s,t))}jr(e){const t=new he(new We([])),s=new Lt(t,e),o=new Lt(t,e+1),u=[];return this.Ur.forEachInRange([s,o],h=>{this.Gr(h),u.push(h.key)}),u}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new he(new We([])),s=new Lt(t,e),o=new Lt(t,e+1);let u=Ce();return this.Ur.forEachInRange([s,o],h=>{u=u.add(h.key)}),u}containsKey(e){const t=new Lt(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Lt{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return he.comparator(e.key,t.key)||Ie(e.Yr,t.Yr)}static Kr(e,t){return Ie(e.Yr,t.Yr)||he.comparator(e.key,t.key)}}/**
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
 */class qx{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Nt(Lt.$r)}checkEmpty(e){return Z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new rx(u,t,s,o);this.mutationQueue.push(h);for(const d of o)this.Zr=this.Zr.add(new Lt(d.key,u)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return Z.resolve(h)}lookupMutationBatch(e,t){return Z.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.ei(s),u=o<0?0:o;return Z.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return Z.resolve(this.mutationQueue.length===0?$g:this.tr-1)}getAllMutationBatches(e){return Z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Lt(t,0),o=new Lt(t,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([s,o],h=>{const d=this.Xr(h.Yr);u.push(d)}),Z.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Nt(Ie);return t.forEach(o=>{const u=new Lt(o,0),h=new Lt(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,h],d=>{s=s.add(d.Yr)})}),Z.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;he.isDocumentKey(u)||(u=u.child(""));const h=new Lt(new he(u),0);let d=new Nt(Ie);return this.Zr.forEachWhile(p=>{const y=p.key.path;return!!s.isPrefixOf(y)&&(y.length===o&&(d=d.add(p.Yr)),!0)},h),Z.resolve(this.ti(d))}ti(e){const t=[];return e.forEach(s=>{const o=this.Xr(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){ze(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return Z.forEach(t.mutations,o=>{const u=new Lt(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Zr=s})}ir(e){}containsKey(e,t){const s=new Lt(t,0),o=this.Zr.firstAfterOrEqual(s);return Z.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,Z.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Fx{constructor(e){this.ri=e,this.docs=function(){return new it(he.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return Z.resolve(s?s.document.mutableCopy():Zt.newInvalidDocument(t))}getEntries(e,t){let s=bi();return t.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Zt.newInvalidDocument(o))}),Z.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=bi();const h=t.path,d=new he(h.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:y,value:{document:E}}=p.getNext();if(!h.isPrefixOf(y.path))break;y.path.length>h.length+1||_M(yM(E),s)<=0||(o.has(E.key)||Ff(t,E))&&(u=u.insert(E.key,E.mutableCopy()))}return Z.resolve(u)}getAllFromCollectionGroup(e,t,s,o){ge(9500)}ii(e,t){return Z.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new Hx(this)}getSize(e){return Z.resolve(this.size)}}class Hx extends Vx{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(s)}),Z.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class Gx{constructor(e){this.persistence=e,this.si=new Na(t=>Yg(t),Xg),this.lastRemoteSnapshotVersion=ve.min(),this.highestTargetId=0,this.oi=0,this._i=new ny,this.targetCount=0,this.ai=Ho.ur()}forEachTarget(e,t){return this.si.forEach((s,o)=>t(o)),Z.resolve()}getLastRemoteSnapshotVersion(e){return Z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Z.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),Z.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),Z.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Ho(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,Z.resolve()}updateTargetData(e,t){return this.Pr(t),Z.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,Z.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.si.forEach((h,d)=>{d.sequenceNumber<=t&&s.get(d.targetId)===null&&(this.si.delete(h),u.push(this.removeMatchingKeysForTargetId(e,d.targetId)),o++)}),Z.waitFor(u).next(()=>o)}getTargetCount(e){return Z.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return Z.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),Z.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach(h=>{u.push(o.markPotentiallyOrphaned(e,h))}),Z.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),Z.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return Z.resolve(s)}containsKey(e,t){return Z.resolve(this._i.containsKey(t))}}/**
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
 */class xA{constructor(e,t){this.ui={},this.overlays={},this.ci=new Uf(0),this.li=!1,this.li=!0,this.hi=new jx,this.referenceDelegate=e(this),this.Pi=new Gx(this),this.indexManager=new Nx,this.remoteDocumentCache=function(o){return new Fx(o)}(s=>this.referenceDelegate.Ti(s)),this.serializer=new Ix(t),this.Ii=new zx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Bx,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new qx(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){se("MemoryPersistence","Starting transaction:",e);const o=new $x(this.ci.next());return this.referenceDelegate.Ei(),s(o).next(u=>this.referenceDelegate.di(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Ai(e,t){return Z.or(Object.values(this.ui).map(s=>()=>s.containsKey(e,t)))}}class $x extends EM{constructor(e){super(),this.currentSequenceNumber=e}}class ry{constructor(e){this.persistence=e,this.Ri=new ny,this.Vi=null}static mi(e){return new ry(e)}get fi(){if(this.Vi)return this.Vi;throw ge(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),Z.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),Z.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),Z.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(o=>this.fi.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(u=>this.fi.add(u.toString()))}).next(()=>s.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Z.forEach(this.fi,s=>{const o=he.fromPath(s);return this.gi(e,o).next(u=>{u||t.removeEntry(o,ve.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return Z.or([()=>Z.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Af{constructor(e,t){this.persistence=e,this.pi=new Na(s=>wM(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=kx(this,t)}static mi(e,t){return new Af(e,t)}Ei(){}di(e){return Z.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(o=>s+o))}wr(e){let t=0;return this.pr(e,s=>{t++}).next(()=>t)}pr(e,t){return Z.forEach(this.pi,(s,o)=>this.br(e,s,o).next(u=>u?Z.resolve():t(o)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ii(e,h=>this.br(e,h,t).next(d=>{d||(s++,u.removeEntry(h,ve.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),Z.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),Z.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),Z.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),Z.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ef(e.data.value)),t}br(e,t,s){return Z.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.pi.get(t);return Z.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class iy{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=o}static As(e,t){let s=Ce(),o=Ce();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new iy(e,t.fromCache,s,o)}}/**
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
 */class Kx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Qx{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return yN()?8:TM(en())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.ys(e,t).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.ws(e,t,o,s).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new Kx;return this.Ss(e,t,h).next(d=>{if(u.result=d,this.Vs)return this.bs(e,t,h,d.size)})}).next(()=>u.result)}bs(e,t,s,o){return s.documentReadCount<this.fs?(Ro()<=Re.DEBUG&&se("QueryEngine","SDK will not create cache indexes for query:",Io(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),Z.resolve()):(Ro()<=Re.DEBUG&&se("QueryEngine","Query:",Io(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.gs*o?(Ro()<=Re.DEBUG&&se("QueryEngine","The SDK decides to create cache indexes for query:",Io(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Dr(t))):Z.resolve())}ys(e,t){if(u0(t))return Z.resolve(null);let s=Dr(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=ng(t,null,"F"),s=Dr(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const h=Ce(...u);return this.ps.getDocuments(e,h).next(d=>this.indexManager.getMinOffset(e,s).next(p=>{const y=this.Ds(t,d);return this.Cs(t,y,h,p.readTime)?this.ys(e,ng(t,null,"F")):this.vs(e,y,t,p)}))})))}ws(e,t,s,o){return u0(t)||o.isEqual(ve.min())?Z.resolve(null):this.ps.getDocuments(e,s).next(u=>{const h=this.Ds(t,u);return this.Cs(t,h,s,o)?Z.resolve(null):(Ro()<=Re.DEBUG&&se("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Io(t)),this.vs(e,h,t,gM(o,Lu)).next(d=>d))})}Ds(e,t){let s=new Nt(cA(e));return t.forEach((o,u)=>{Ff(e,u)&&(s=s.add(u))}),s}Cs(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(e,t,s){return Ro()<=Re.DEBUG&&se("QueryEngine","Using full collection scan to execute query:",Io(t)),this.ps.getDocumentsMatchingQuery(e,t,_s.min(),s)}vs(e,t,s,o){return this.ps.getDocumentsMatchingQuery(e,s,o).next(u=>(t.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
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
 */const sy="LocalStore",Yx=3e8;class Xx{constructor(e,t,s,o){this.persistence=e,this.Fs=t,this.serializer=o,this.Ms=new it(Ie),this.xs=new Na(u=>Yg(u),Xg),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ux(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function Wx(n,e,t,s){return new Xx(n,e,t,s)}async function PA(n,e){const t=Ee(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,t.Bs(e),t.mutationQueue.getAllMutationBatches(s))).next(u=>{const h=[],d=[];let p=Ce();for(const y of o){h.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}for(const y of u){d.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}return t.localDocuments.getDocuments(s,p).next(y=>({Ls:y,removedBatchIds:h,addedBatchIds:d}))})})}function Zx(n,e){const t=Ee(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),u=t.Ns.newChangeBuffer({trackRemovals:!0});return function(d,p,y,E){const w=y.batch,A=w.keys();let k=Z.resolve();return A.forEach(x=>{k=k.next(()=>E.getEntry(p,x)).next(j=>{const V=y.docVersions.get(x);ze(V!==null,48541),j.version.compareTo(V)<0&&(w.applyToRemoteDocument(j,y),j.isValidDocument()&&(j.setReadTime(y.commitVersion),E.addEntry(j)))})}),k.next(()=>d.mutationQueue.removeMutationBatch(p,w))}(t,s,e,u).next(()=>u.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(d){let p=Ce();for(let y=0;y<d.mutationResults.length;++y)d.mutationResults[y].transformResults.length>0&&(p=p.add(d.batch.mutations[y].key));return p}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function kA(n){const e=Ee(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function Jx(n,e){const t=Ee(n),s=e.snapshotVersion;let o=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const h=t.Ns.newChangeBuffer({trackRemovals:!0});o=t.Ms;const d=[];e.targetChanges.forEach((E,w)=>{const A=o.get(w);if(!A)return;d.push(t.Pi.removeMatchingKeys(u,E.removedDocuments,w).next(()=>t.Pi.addMatchingKeys(u,E.addedDocuments,w)));let k=A.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(w)!==null?k=k.withResumeToken(Gt.EMPTY_BYTE_STRING,ve.min()).withLastLimboFreeSnapshotVersion(ve.min()):E.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(E.resumeToken,s)),o=o.insert(w,k),function(j,V,G){return j.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-j.snapshotVersion.toMicroseconds()>=Yx?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0}(A,k,E)&&d.push(t.Pi.updateTargetData(u,k))});let p=bi(),y=Ce();if(e.documentUpdates.forEach(E=>{e.resolvedLimboDocuments.has(E)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(u,E))}),d.push(eP(u,h,e.documentUpdates).next(E=>{p=E.ks,y=E.qs})),!s.isEqual(ve.min())){const E=t.Pi.getLastRemoteSnapshotVersion(u).next(w=>t.Pi.setTargetsMetadata(u,u.currentSequenceNumber,s));d.push(E)}return Z.waitFor(d).next(()=>h.apply(u)).next(()=>t.localDocuments.getLocalViewOfDocuments(u,p,y)).next(()=>p)}).then(u=>(t.Ms=o,u))}function eP(n,e,t){let s=Ce(),o=Ce();return t.forEach(u=>s=s.add(u)),e.getEntries(n,s).next(u=>{let h=bi();return t.forEach((d,p)=>{const y=u.get(d);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(d)),p.isNoDocument()&&p.version.isEqual(ve.min())?(e.removeEntry(d,p.readTime),h=h.insert(d,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),h=h.insert(d,p)):se(sy,"Ignoring outdated watch update for ",d,". Current version:",y.version," Watch version:",p.version)}),{ks:h,qs:o}})}function tP(n,e){const t=Ee(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=$g),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function nP(n,e){const t=Ee(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return t.Pi.getTargetData(s,e).next(u=>u?(o=u,Z.resolve(o)):t.Pi.allocateTargetId(s).next(h=>(o=new hs(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=t.Ms.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s})}async function og(n,e,t){const s=Ee(n),o=s.Ms.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,h=>s.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!Wo(h))throw h;se(sy,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Ms=s.Ms.remove(e),s.xs.delete(o.target)}function b0(n,e,t){const s=Ee(n);let o=ve.min(),u=Ce();return s.persistence.runTransaction("Execute query","readwrite",h=>function(p,y,E){const w=Ee(p),A=w.xs.get(E);return A!==void 0?Z.resolve(w.Ms.get(A)):w.Pi.getTargetData(y,E)}(s,h,Dr(e)).next(d=>{if(d)return o=d.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(h,d.targetId).next(p=>{u=p})}).next(()=>s.Fs.getDocumentsMatchingQuery(h,e,t?o:ve.min(),t?u:Ce())).next(d=>(rP(s,qM(e),d),{documents:d,Qs:u})))}function rP(n,e,t){let s=n.Os.get(e)||ve.min();t.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),n.Os.set(e,s)}class w0{constructor(){this.activeTargetIds=QM()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class iP{constructor(){this.Mo=new w0,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new w0,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class sP{Oo(e){}shutdown(){}}/**
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
 */const A0="ConnectivityMonitor";class S0{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){se(A0,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){se(A0,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let qh=null;function lg(){return qh===null?qh=function(){return 268435456+Math.round(2147483648*Math.random())}():qh++,"0x"+qh.toString(16)}/**
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
 */const bp="RestConnection",aP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class oP{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${o}`,this.Wo=this.databaseId.database===vf?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Go(e,t,s,o,u){const h=lg(),d=this.zo(e,t.toUriEncodedString());se(bp,`Sending RPC '${e}' ${h}:`,d,s);const p={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(p,o,u);const{host:y}=new URL(d),E=Is(y);return this.Jo(e,d,p,s,E).then(w=>(se(bp,`Received RPC '${e}' ${h}: `,w),w),w=>{throw Bo(bp,`RPC '${e}' ${h} failed with error: `,w,"url: ",d,"request:",s),w})}Ho(e,t,s,o,u,h){return this.Go(e,t,s,o,u)}jo(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Yo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}zo(e,t){const s=aP[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
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
 */class lP{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Yt="WebChannelConnection";class uP extends oP{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,o,u){const h=lg();return new Promise((d,p)=>{const y=new Lw;y.setWithCredentials(!0),y.listenOnce(Uw.COMPLETE,()=>{try{switch(y.getLastErrorCode()){case Jh.NO_ERROR:const w=y.getResponseJson();se(Yt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(w)),d(w);break;case Jh.TIMEOUT:se(Yt,`RPC '${e}' ${h} timed out`),p(new ie(X.DEADLINE_EXCEEDED,"Request time out"));break;case Jh.HTTP_ERROR:const A=y.getStatus();if(se(Yt,`RPC '${e}' ${h} failed with status:`,A,"response text:",y.getResponseText()),A>0){let k=y.getResponseJson();Array.isArray(k)&&(k=k[0]);const x=k?.error;if(x&&x.status&&x.message){const j=function(G){const te=G.toLowerCase().replace(/_/g,"-");return Object.values(X).indexOf(te)>=0?te:X.UNKNOWN}(x.status);p(new ie(j,x.message))}else p(new ie(X.UNKNOWN,"Server responded with status "+y.getStatus()))}else p(new ie(X.UNAVAILABLE,"Connection failed."));break;default:ge(9055,{l_:e,streamId:h,h_:y.getLastErrorCode(),P_:y.getLastError()})}}finally{se(Yt,`RPC '${e}' ${h} completed.`)}});const E=JSON.stringify(o);se(Yt,`RPC '${e}' ${h} sending request:`,o),y.send(t,"POST",E,s,15)})}T_(e,t,s){const o=lg(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=jw(),d=Bw(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.jo(p.initMessageHeaders,t,s),p.encodeInitMessageHeaders=!0;const E=u.join("");se(Yt,`Creating RPC '${e}' stream ${o}: ${E}`,p);const w=h.createWebChannel(E,p);this.I_(w);let A=!1,k=!1;const x=new lP({Yo:V=>{k?se(Yt,`Not sending because RPC '${e}' stream ${o} is closed:`,V):(A||(se(Yt,`Opening RPC '${e}' stream ${o} transport.`),w.open(),A=!0),se(Yt,`RPC '${e}' stream ${o} sending:`,V),w.send(V))},Zo:()=>w.close()}),j=(V,G,te)=>{V.listen(G,ee=>{try{te(ee)}catch(oe){setTimeout(()=>{throw oe},0)}})};return j(w,_u.EventType.OPEN,()=>{k||(se(Yt,`RPC '${e}' stream ${o} transport opened.`),x.o_())}),j(w,_u.EventType.CLOSE,()=>{k||(k=!0,se(Yt,`RPC '${e}' stream ${o} transport closed`),x.a_(),this.E_(w))}),j(w,_u.EventType.ERROR,V=>{k||(k=!0,Bo(Yt,`RPC '${e}' stream ${o} transport errored. Name:`,V.name,"Message:",V.message),x.a_(new ie(X.UNAVAILABLE,"The operation could not be completed")))}),j(w,_u.EventType.MESSAGE,V=>{if(!k){const G=V.data[0];ze(!!G,16349);const te=G,ee=te?.error||te[0]?.error;if(ee){se(Yt,`RPC '${e}' stream ${o} received error:`,ee);const oe=ee.status;let ae=function(S){const R=Tt[S];if(R!==void 0)return bA(R)}(oe),fe=ee.message;ae===void 0&&(ae=X.INTERNAL,fe="Unknown error status: "+oe+" with message "+ee.message),k=!0,x.a_(new ie(ae,fe)),w.close()}else se(Yt,`RPC '${e}' stream ${o} received:`,G),x.u_(G)}}),j(d,zw.STAT_EVENT,V=>{V.stat===Yp.PROXY?se(Yt,`RPC '${e}' stream ${o} detected buffering proxy`):V.stat===Yp.NOPROXY&&se(Yt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{x.__()},0),x}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function wp(){return typeof document<"u"?document:null}/**
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
 */function Kf(n){return new dx(n,!0)}/**
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
 */class VA{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=o,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-s);o>0&&se("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const R0="PersistentStream";class LA{constructor(e,t,s,o,u,h,d,p){this.Mi=e,this.S_=s,this.b_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new VA(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===X.RESOURCE_EXHAUSTED?(Ti(t.toString()),Ti("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===X.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.D_===t&&this.G_(s,o)},s=>{e(()=>{const o=new ie(X.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)})})}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{s(()=>this.listener.Xo())}),this.stream.t_(()=>{s(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(o=>{s(()=>this.z_(o))}),this.stream.onMessage(o=>{s(()=>++this.F_==1?this.J_(o):this.onNext(o))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return se(R0,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(se(R0,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class cP extends LA{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=gx(this.serializer,e),s=function(u){if(!("targetChange"in u))return ve.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?ve.min():h.readTime?Or(h.readTime):ve.min()}(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=ag(this.serializer),t.addTarget=function(u,h){let d;const p=h.target;if(d=eg(p)?{documents:vx(u,p)}:{query:Ex(u,p).ft},d.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){d.resumeToken=SA(u,h.resumeToken);const y=rg(u,h.expectedCount);y!==null&&(d.expectedCount=y)}else if(h.snapshotVersion.compareTo(ve.min())>0){d.readTime=wf(u,h.snapshotVersion.toTimestamp());const y=rg(u,h.expectedCount);y!==null&&(d.expectedCount=y)}return d}(this.serializer,e);const s=bx(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=ag(this.serializer),t.removeTarget=e,this.q_(t)}}class hP extends LA{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return ze(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ze(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ze(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=_x(e.writeResults,e.commitTime),s=Or(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=ag(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>yx(this.serializer,s))};this.q_(t)}}/**
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
 */class fP{}class dP extends fP{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new ie(X.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.Go(e,ig(t,s),o,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ie(X.UNKNOWN,u.toString())})}Ho(e,t,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,d])=>this.connection.Ho(e,ig(t,s),o,h,d,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ie(X.UNKNOWN,h.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class mP{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ti(t),this.aa=!1):se("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Aa="RemoteStore";class pP{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo(h=>{s.enqueueAndForget(async()=>{Da(this)&&(se(Aa,"Restarting streams for network reachability change."),await async function(p){const y=Ee(p);y.Ea.add(4),await oc(y),y.Ra.set("Unknown"),y.Ea.delete(4),await Qf(y)}(this))})}),this.Ra=new mP(s,o)}}async function Qf(n){if(Da(n))for(const e of n.da)await e(!0)}async function oc(n){for(const e of n.da)await e(!1)}function UA(n,e){const t=Ee(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),uy(t)?ly(t):Jo(t).O_()&&oy(t,e))}function ay(n,e){const t=Ee(n),s=Jo(t);t.Ia.delete(e),s.O_()&&zA(t,e),t.Ia.size===0&&(s.O_()?s.L_():Da(t)&&t.Ra.set("Unknown"))}function oy(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ve.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Jo(n).Y_(e)}function zA(n,e){n.Va.Ue(e),Jo(n).Z_(e)}function ly(n){n.Va=new ux({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Jo(n).start(),n.Ra.ua()}function uy(n){return Da(n)&&!Jo(n).x_()&&n.Ia.size>0}function Da(n){return Ee(n).Ea.size===0}function BA(n){n.Va=void 0}async function gP(n){n.Ra.set("Online")}async function yP(n){n.Ia.forEach((e,t)=>{oy(n,e)})}async function _P(n,e){BA(n),uy(n)?(n.Ra.ha(e),ly(n)):n.Ra.set("Unknown")}async function vP(n,e,t){if(n.Ra.set("Online"),e instanceof AA&&e.state===2&&e.cause)try{await async function(o,u){const h=u.cause;for(const d of u.targetIds)o.Ia.has(d)&&(await o.remoteSyncer.rejectListen(d,h),o.Ia.delete(d),o.Va.removeTarget(d))}(n,e)}catch(s){se(Aa,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Sf(n,s)}else if(e instanceof rf?n.Va.Ze(e):e instanceof wA?n.Va.st(e):n.Va.tt(e),!t.isEqual(ve.min()))try{const s=await kA(n.localStore);t.compareTo(s)>=0&&await function(u,h){const d=u.Va.Tt(h);return d.targetChanges.forEach((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const E=u.Ia.get(y);E&&u.Ia.set(y,E.withResumeToken(p.resumeToken,h))}}),d.targetMismatches.forEach((p,y)=>{const E=u.Ia.get(p);if(!E)return;u.Ia.set(p,E.withResumeToken(Gt.EMPTY_BYTE_STRING,E.snapshotVersion)),zA(u,p);const w=new hs(E.target,p,y,E.sequenceNumber);oy(u,w)}),u.remoteSyncer.applyRemoteEvent(d)}(n,t)}catch(s){se(Aa,"Failed to raise snapshot:",s),await Sf(n,s)}}async function Sf(n,e,t){if(!Wo(e))throw e;n.Ea.add(1),await oc(n),n.Ra.set("Offline"),t||(t=()=>kA(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{se(Aa,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Qf(n)})}function jA(n,e){return e().catch(t=>Sf(n,t,e))}async function Yf(n){const e=Ee(n),t=bs(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:$g;for(;EP(e);)try{const o=await tP(e.localStore,s);if(o===null){e.Ta.length===0&&t.L_();break}s=o.batchId,TP(e,o)}catch(o){await Sf(e,o)}qA(e)&&FA(e)}function EP(n){return Da(n)&&n.Ta.length<10}function TP(n,e){n.Ta.push(e);const t=bs(n);t.O_()&&t.X_&&t.ea(e.mutations)}function qA(n){return Da(n)&&!bs(n).x_()&&n.Ta.length>0}function FA(n){bs(n).start()}async function bP(n){bs(n).ra()}async function wP(n){const e=bs(n);for(const t of n.Ta)e.ea(t.mutations)}async function AP(n,e,t){const s=n.Ta.shift(),o=Jg.from(s,e,t);await jA(n,()=>n.remoteSyncer.applySuccessfulWrite(o)),await Yf(n)}async function SP(n,e){e&&bs(n).X_&&await async function(s,o){if(function(h){return ax(h)&&h!==X.ABORTED}(o.code)){const u=s.Ta.shift();bs(s).B_(),await jA(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await Yf(s)}}(n,e),qA(n)&&FA(n)}async function I0(n,e){const t=Ee(n);t.asyncQueue.verifyOperationInProgress(),se(Aa,"RemoteStore received new credentials");const s=Da(t);t.Ea.add(3),await oc(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Qf(t)}async function RP(n,e){const t=Ee(n);e?(t.Ea.delete(2),await Qf(t)):e||(t.Ea.add(2),await oc(t),t.Ra.set("Unknown"))}function Jo(n){return n.ma||(n.ma=function(t,s,o){const u=Ee(t);return u.sa(),new cP(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(n.datastore,n.asyncQueue,{Xo:gP.bind(null,n),t_:yP.bind(null,n),r_:_P.bind(null,n),H_:vP.bind(null,n)}),n.da.push(async e=>{e?(n.ma.B_(),uy(n)?ly(n):n.Ra.set("Unknown")):(await n.ma.stop(),BA(n))})),n.ma}function bs(n){return n.fa||(n.fa=function(t,s,o){const u=Ee(t);return u.sa(),new hP(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:bP.bind(null,n),r_:SP.bind(null,n),ta:wP.bind(null,n),na:AP.bind(null,n)}),n.da.push(async e=>{e?(n.fa.B_(),await Yf(n)):(await n.fa.stop(),n.Ta.length>0&&(se(Aa,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
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
 */class cy{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new ps,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,d=new cy(e,t,h,o,u);return d.start(s),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie(X.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hy(n,e){if(Ti("AsyncQueue",`${e}: ${n}`),Wo(n))return new ie(X.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Po{static emptySet(e){return new Po(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||he.comparator(t.key,s.key):(t,s)=>he.comparator(t.key,s.key),this.keyedMap=vu(),this.sortedSet=new it(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Po)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Po;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class C0{constructor(){this.ga=new it(he.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):ge(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,s)=>{e.push(s)}),e}}class Go{constructor(e,t,s,o,u,h,d,p,y){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach(d=>{h.push({type:0,doc:d})}),new Go(e,t,Po.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&qf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class IP{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class CP{constructor(){this.queries=N0(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const o=Ee(t),u=o.queries;o.queries=N0(),u.forEach((h,d)=>{for(const p of d.Sa)p.onError(s)})})(this,new ie(X.ABORTED,"Firestore shutting down"))}}function N0(){return new Na(n=>uA(n),qf)}async function HA(n,e){const t=Ee(n);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.ba()&&e.Da()&&(s=2):(u=new IP,s=e.Da()?0:1);try{switch(s){case 0:u.wa=await t.onListen(o,!0);break;case 1:u.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const d=hy(h,`Initialization of query '${Io(e.query)}' failed`);return void e.onError(d)}t.queries.set(o,u),u.Sa.push(e),e.va(t.onlineState),u.wa&&e.Fa(u.wa)&&fy(t)}async function GA(n,e){const t=Ee(n),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.Sa.indexOf(e);h>=0&&(u.Sa.splice(h,1),u.Sa.length===0?o=e.Da()?0:1:!u.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function NP(n,e){const t=Ee(n);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const d of h.Sa)d.Fa(o)&&(s=!0);h.wa=o}}s&&fy(t)}function DP(n,e,t){const s=Ee(n),o=s.queries.get(e);if(o)for(const u of o.Sa)u.onError(t);s.queries.delete(e)}function fy(n){n.Ca.forEach(e=>{e.next()})}var ug,D0;(D0=ug||(ug={})).Ma="default",D0.Cache="cache";class $A{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Go(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Go.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==ug.Cache}}/**
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
 */class KA{constructor(e){this.key=e}}class QA{constructor(e){this.key=e}}class OP{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ce(),this.mutatedKeys=Ce(),this.eu=cA(e),this.tu=new Po(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new C0,o=t?t.tu:this.tu;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,d=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((E,w)=>{const A=o.get(E),k=Ff(this.query,w)?w:null,x=!!A&&this.mutatedKeys.has(A.key),j=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let V=!1;A&&k?A.data.isEqual(k.data)?x!==j&&(s.track({type:3,doc:k}),V=!0):this.su(A,k)||(s.track({type:2,doc:k}),V=!0,(p&&this.eu(k,p)>0||y&&this.eu(k,y)<0)&&(d=!0)):!A&&k?(s.track({type:0,doc:k}),V=!0):A&&!k&&(s.track({type:1,doc:A}),V=!0,(p||y)&&(d=!0)),V&&(k?(h=h.add(k),u=j?u.add(E):u.delete(E)):(h=h.delete(E),u=u.delete(E)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),u=u.delete(E.key),s.track({type:1,doc:E})}return{tu:h,iu:s,Cs:d,mutatedKeys:u}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort((E,w)=>function(k,x){const j=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ge(20277,{Rt:V})}};return j(k)-j(x)}(E.type,w.type)||this.eu(E.doc,w.doc)),this.ou(s),o=o??!1;const d=t&&!o?this._u():[],p=this.Xa.size===0&&this.current&&!o?1:0,y=p!==this.Za;return this.Za=p,h.length!==0||y?{snapshot:new Go(this.query,e.tu,u,h,e.mutatedKeys,p===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:d}:{au:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new C0,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ce(),this.tu.forEach(s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))});const t=[];return e.forEach(s=>{this.Xa.has(s)||t.push(new QA(s))}),this.Xa.forEach(s=>{e.has(s)||t.push(new KA(s))}),t}cu(e){this.Ya=e.Qs,this.Xa=Ce();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Go.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const dy="SyncEngine";class MP{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class xP{constructor(e){this.key=e,this.hu=!1}}class PP{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new Na(d=>uA(d),qf),this.Iu=new Map,this.Eu=new Set,this.du=new it(he.comparator),this.Au=new Map,this.Ru=new ny,this.Vu={},this.mu=new Map,this.fu=Ho.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function kP(n,e,t=!0){const s=eS(n);let o;const u=s.Tu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await YA(s,e,t,!0),o}async function VP(n,e){const t=eS(n);await YA(t,e,!0,!1)}async function YA(n,e,t,s){const o=await nP(n.localStore,Dr(e)),u=o.targetId,h=n.sharedClientState.addLocalQueryTarget(u,t);let d;return s&&(d=await LP(n,e,u,h==="current",o.resumeToken)),n.isPrimaryClient&&t&&UA(n.remoteStore,o),d}async function LP(n,e,t,s,o){n.pu=(w,A,k)=>async function(j,V,G,te){let ee=V.view.ru(G);ee.Cs&&(ee=await b0(j.localStore,V.query,!1).then(({documents:D})=>V.view.ru(D,ee)));const oe=te&&te.targetChanges.get(V.targetId),ae=te&&te.targetMismatches.get(V.targetId)!=null,fe=V.view.applyChanges(ee,j.isPrimaryClient,oe,ae);return M0(j,V.targetId,fe.au),fe.snapshot}(n,w,A,k);const u=await b0(n.localStore,e,!0),h=new OP(e,u.Qs),d=h.ru(u.documents),p=ac.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",o),y=h.applyChanges(d,n.isPrimaryClient,p);M0(n,t,y.au);const E=new MP(e,t,h);return n.Tu.set(e,E),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),y.snapshot}async function UP(n,e,t){const s=Ee(n),o=s.Tu.get(e),u=s.Iu.get(o.targetId);if(u.length>1)return s.Iu.set(o.targetId,u.filter(h=>!qf(h,e))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await og(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),t&&ay(s.remoteStore,o.targetId),cg(s,o.targetId)}).catch(Xo)):(cg(s,o.targetId),await og(s.localStore,o.targetId,!0))}async function zP(n,e){const t=Ee(n),s=t.Tu.get(e),o=t.Iu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),ay(t.remoteStore,s.targetId))}async function BP(n,e,t){const s=KP(n);try{const o=await function(h,d){const p=Ee(h),y=Je.now(),E=d.reduce((k,x)=>k.add(x.key),Ce());let w,A;return p.persistence.runTransaction("Locally write mutations","readwrite",k=>{let x=bi(),j=Ce();return p.Ns.getEntries(k,E).next(V=>{x=V,x.forEach((G,te)=>{te.isValidDocument()||(j=j.add(G))})}).next(()=>p.localDocuments.getOverlayedDocuments(k,x)).next(V=>{w=V;const G=[];for(const te of d){const ee=tx(te,w.get(te.key).overlayedDocument);ee!=null&&G.push(new Ds(te.key,ee,tA(ee.value.mapValue),$n.exists(!0)))}return p.mutationQueue.addMutationBatch(k,y,G,d)}).next(V=>{A=V;const G=V.applyToLocalDocumentSet(w,j);return p.documentOverlayCache.saveOverlays(k,V.batchId,G)})}).then(()=>({batchId:A.batchId,changes:fA(w)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(h,d,p){let y=h.Vu[h.currentUser.toKey()];y||(y=new it(Ie)),y=y.insert(d,p),h.Vu[h.currentUser.toKey()]=y}(s,o.batchId,t),await lc(s,o.changes),await Yf(s.remoteStore)}catch(o){const u=hy(o,"Failed to persist write");t.reject(u)}}async function XA(n,e){const t=Ee(n);try{const s=await Jx(t.localStore,e);e.targetChanges.forEach((o,u)=>{const h=t.Au.get(u);h&&(ze(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?ze(h.hu,14607):o.removedDocuments.size>0&&(ze(h.hu,42227),h.hu=!1))}),await lc(t,s,e)}catch(s){await Xo(s)}}function O0(n,e,t){const s=Ee(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Tu.forEach((u,h)=>{const d=h.view.va(e);d.snapshot&&o.push(d.snapshot)}),function(h,d){const p=Ee(h);p.onlineState=d;let y=!1;p.queries.forEach((E,w)=>{for(const A of w.Sa)A.va(d)&&(y=!0)}),y&&fy(p)}(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function jP(n,e,t){const s=Ee(n);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Au.get(e),u=o&&o.key;if(u){let h=new it(he.comparator);h=h.insert(u,Zt.newNoDocument(u,ve.min()));const d=Ce().add(u),p=new $f(ve.min(),new Map,new it(Ie),h,d);await XA(s,p),s.du=s.du.remove(u),s.Au.delete(e),my(s)}else await og(s.localStore,e,!1).then(()=>cg(s,e,t)).catch(Xo)}async function qP(n,e){const t=Ee(n),s=e.batch.batchId;try{const o=await Zx(t.localStore,e);ZA(t,s,null),WA(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await lc(t,o)}catch(o){await Xo(o)}}async function FP(n,e,t){const s=Ee(n);try{const o=await function(h,d){const p=Ee(h);return p.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let E;return p.mutationQueue.lookupMutationBatch(y,d).next(w=>(ze(w!==null,37113),E=w.keys(),p.mutationQueue.removeMutationBatch(y,w))).next(()=>p.mutationQueue.performConsistencyCheck(y)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(y,E,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,E)).next(()=>p.localDocuments.getDocuments(y,E))})}(s.localStore,e);ZA(s,e,t),WA(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await lc(s,o)}catch(o){await Xo(o)}}function WA(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function ZA(n,e,t){const s=Ee(n);let o=s.Vu[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Vu[s.currentUser.toKey()]=o}}function cg(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Iu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach(s=>{n.Ru.containsKey(s)||JA(n,s)})}function JA(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(ay(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),my(n))}function M0(n,e,t){for(const s of t)s instanceof KA?(n.Ru.addReference(s.key,e),HP(n,s)):s instanceof QA?(se(dy,"Document no longer in limbo: "+s.key),n.Ru.removeReference(s.key,e),n.Ru.containsKey(s.key)||JA(n,s.key)):ge(19791,{wu:s})}function HP(n,e){const t=e.key,s=t.path.canonicalString();n.du.get(t)||n.Eu.has(s)||(se(dy,"New document in limbo: "+t),n.Eu.add(s),my(n))}function my(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new he(We.fromString(e)),s=n.fu.next();n.Au.set(s,new xP(t)),n.du=n.du.insert(t,s),UA(n.remoteStore,new hs(Dr(jf(t.path)),s,"TargetPurposeLimboResolution",Uf.ce))}}async function lc(n,e,t){const s=Ee(n),o=[],u=[],h=[];s.Tu.isEmpty()||(s.Tu.forEach((d,p)=>{h.push(s.pu(p,e,t).then(y=>{if((y||t)&&s.isPrimaryClient){const E=y?!y.fromCache:t?.targetChanges.get(p.targetId)?.current;s.sharedClientState.updateQueryState(p.targetId,E?"current":"not-current")}if(y){o.push(y);const E=iy.As(p.targetId,y);u.push(E)}}))}),await Promise.all(h),s.Pu.H_(o),await async function(p,y){const E=Ee(p);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>Z.forEach(y,A=>Z.forEach(A.Es,k=>E.persistence.referenceDelegate.addReference(w,A.targetId,k)).next(()=>Z.forEach(A.ds,k=>E.persistence.referenceDelegate.removeReference(w,A.targetId,k)))))}catch(w){if(!Wo(w))throw w;se(sy,"Failed to update sequence numbers: "+w)}for(const w of y){const A=w.targetId;if(!w.fromCache){const k=E.Ms.get(A),x=k.snapshotVersion,j=k.withLastLimboFreeSnapshotVersion(x);E.Ms=E.Ms.insert(A,j)}}}(s.localStore,u))}async function GP(n,e){const t=Ee(n);if(!t.currentUser.isEqual(e)){se(dy,"User change. New user:",e.toKey());const s=await PA(t.localStore,e);t.currentUser=e,function(u,h){u.mu.forEach(d=>{d.forEach(p=>{p.reject(new ie(X.CANCELLED,h))})}),u.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await lc(t,s.Ls)}}function $P(n,e){const t=Ee(n),s=t.Au.get(e);if(s&&s.hu)return Ce().add(s.key);{let o=Ce();const u=t.Iu.get(e);if(!u)return o;for(const h of u){const d=t.Tu.get(h);o=o.unionWith(d.view.nu)}return o}}function eS(n){const e=Ee(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=XA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=$P.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=jP.bind(null,e),e.Pu.H_=NP.bind(null,e.eventManager),e.Pu.yu=DP.bind(null,e.eventManager),e}function KP(n){const e=Ee(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=qP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=FP.bind(null,e),e}class Rf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Kf(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Wx(this.persistence,new Qx,e.initialUser,this.serializer)}Cu(e){return new xA(ry.mi,this.serializer)}Du(e){return new iP}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Rf.provider={build:()=>new Rf};class QP extends Rf{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){ze(this.persistence.referenceDelegate instanceof Af,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new xx(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?dn.withCacheSize(this.cacheSizeBytes):dn.DEFAULT;return new xA(s=>Af.mi(s,t),this.serializer)}}class hg{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>O0(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=GP.bind(null,this.syncEngine),await RP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new CP}()}createDatastore(e){const t=Kf(e.databaseInfo.databaseId),s=function(u){return new uP(u)}(e.databaseInfo);return function(u,h,d,p){return new dP(u,h,d,p)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,u,h,d){return new pP(s,o,u,h,d)}(this.localStore,this.datastore,e.asyncQueue,t=>O0(this.syncEngine,t,0),function(){return S0.v()?new S0:new sP}())}createSyncEngine(e,t){return function(o,u,h,d,p,y,E){const w=new PP(o,u,h,d,p,y);return E&&(w.gu=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await async function(t){const s=Ee(t);se(Aa,"RemoteStore shutting down."),s.Ea.add(5),await oc(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}hg.provider={build:()=>new hg};/**
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
 */class tS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Ti("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const ws="FirestoreClient";class YP{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Xt.UNAUTHENTICATED,this.clientId=Gg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async h=>{se(ws,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(se(ws,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ps;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=hy(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Ap(n,e){n.asyncQueue.verifyOperationInProgress(),se(ws,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async o=>{s.isEqual(o)||(await PA(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function x0(n,e){n.asyncQueue.verifyOperationInProgress();const t=await XP(n);se(ws,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(s=>I0(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,o)=>I0(e.remoteStore,o)),n._onlineComponents=e}async function XP(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){se(ws,"Using user provided OfflineComponentProvider");try{await Ap(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===X.FAILED_PRECONDITION||o.code===X.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;Bo("Error using user provided cache. Falling back to memory cache: "+t),await Ap(n,new Rf)}}else se(ws,"Using default OfflineComponentProvider"),await Ap(n,new QP(void 0));return n._offlineComponents}async function nS(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(se(ws,"Using user provided OnlineComponentProvider"),await x0(n,n._uninitializedComponentsProvider._online)):(se(ws,"Using default OnlineComponentProvider"),await x0(n,new hg))),n._onlineComponents}function WP(n){return nS(n).then(e=>e.syncEngine)}async function fg(n){const e=await nS(n),t=e.eventManager;return t.onListen=kP.bind(null,e.syncEngine),t.onUnlisten=UP.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=VP.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=zP.bind(null,e.syncEngine),t}function ZP(n,e,t={}){const s=new ps;return n.asyncQueue.enqueueAndForget(async()=>function(u,h,d,p,y){const E=new tS({next:A=>{E.Nu(),h.enqueueAndForget(()=>GA(u,w));const k=A.docs.has(d);!k&&A.fromCache?y.reject(new ie(X.UNAVAILABLE,"Failed to get document because the client is offline.")):k&&A.fromCache&&p&&p.source==="server"?y.reject(new ie(X.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(A)},error:A=>y.reject(A)}),w=new $A(jf(d.path),E,{includeMetadataChanges:!0,qa:!0});return HA(u,w)}(await fg(n),n.asyncQueue,e,t,s)),s.promise}/**
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
 */function rS(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const P0=new Map;/**
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
 */const iS="firestore.googleapis.com",k0=!0;class V0{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ie(X.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=iS,this.ssl=k0}else this.host=e.host,this.ssl=e.ssl??k0;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=MA;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Ox)throw new ie(X.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}pM("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=rS(e.experimentalLongPollingOptions??{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ie(X.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ie(X.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ie(X.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Xf{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new V0({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ie(X.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ie(X.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new V0(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new sM;switch(s.type){case"firstParty":return new uM(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ie(X.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=P0.get(t);s&&(se("ComponentProvider","Removing Datastore"),P0.delete(t),s.terminate())}(this),Promise.resolve()}}function JP(n,e,t,s={}){n=Gn(n,Xf);const o=Is(e),u=n._getSettings(),h={...u,emulatorOptions:n._getEmulatorOptions()},d=`${e}:${t}`;o&&(Ng(`https://${d}`),Dg("Firestore",!0)),u.host!==iS&&u.host!==d&&Bo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...u,host:d,ssl:o,emulatorOptions:s};if(!ys(p,h)&&(n._setSettings(p),s.mockUserToken)){let y,E;if(typeof s.mockUserToken=="string")y=s.mockUserToken,E=Xt.MOCK_USER;else{y=Kb(s.mockUserToken,n._app?.options.projectId);const w=s.mockUserToken.sub||s.mockUserToken.user_id;if(!w)throw new ie(X.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new Xt(w)}n._authCredentials=new aM(new Fw(y,E))}}/**
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
 */class Oa{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Oa(this.firestore,e,this._query)}}class lt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new lt(this.firestore,e,this._key)}toJSON(){return{type:lt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(ic(t,lt._jsonSchema))return new lt(e,s||null,new he(We.fromString(t.referencePath)))}}lt._jsonSchemaVersion="firestore/documentReference/1.0",lt._jsonSchema={type:wt("string",lt._jsonSchemaVersion),referencePath:wt("string")};class gs extends Oa{constructor(e,t,s){super(e,t,jf(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new lt(this.firestore,null,new he(e))}withConverter(e){return new gs(this.firestore,e,this._path)}}function g6(n,e,...t){if(n=Ye(n),Hw("collection","path",e),n instanceof Xf){const s=We.fromString(e,...t);return YT(s),new gs(n,null,s)}{if(!(n instanceof lt||n instanceof gs))throw new ie(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(We.fromString(e,...t));return YT(s),new gs(n.firestore,null,s)}}function ek(n,e,...t){if(n=Ye(n),arguments.length===1&&(e=Gg.newId()),Hw("doc","path",e),n instanceof Xf){const s=We.fromString(e,...t);return QT(s),new lt(n,null,new he(s))}{if(!(n instanceof lt||n instanceof gs))throw new ie(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(We.fromString(e,...t));return QT(s),new lt(n.firestore,n instanceof gs?n.converter:null,new he(s))}}/**
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
 */const L0="AsyncQueue";class U0{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new VA(this,"async_queue_retry"),this._c=()=>{const s=wp();s&&se(L0,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=wp();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=wp();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new ps;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Wo(e))throw e;se(L0,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(s=>{throw this.nc=s,this.rc=!1,Ti("INTERNAL UNHANDLED ERROR: ",z0(s)),s}).then(s=>(this.rc=!1,s))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=cy.createAndSchedule(this,e,t,s,u=>this.hc(u));return this.tc.push(o),o}uc(){this.nc&&ge(47125,{Pc:z0(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function z0(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function B0(n){return function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1}(n,["next","error","complete"])}class As extends Xf{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new U0,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new U0(e),this._firestoreClient=void 0,await e}}}function tk(n,e){const t=typeof n=="object"?n:Ju(),s=typeof n=="string"?n:vf,o=Ai(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=Hb("firestore");u&&JP(o,...u)}return o}function py(n){if(n._terminated)throw new ie(X.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||nk(n),n._firestoreClient}function nk(n){const e=n._freezeSettings(),t=function(o,u,h,d){return new RM(o,u,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,rS(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(n._databaseId,n._app?.options.appId||"",n._persistenceKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new YP(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(o){const u=o?._online.build();return{_offline:o?._offline.build(u),_online:u}}(n._componentsProvider))}/**
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
 */class Hn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Hn(Gt.fromBase64String(e))}catch(t){throw new ie(X.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Hn(Gt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Hn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ic(e,Hn._jsonSchema))return Hn.fromBase64String(e.bytes)}}Hn._jsonSchemaVersion="firestore/bytes/1.0",Hn._jsonSchema={type:wt("string",Hn._jsonSchemaVersion),bytes:wt("string")};/**
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
 */class Wf{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ie(X.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ht(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Mr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ie(X.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ie(X.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ie(this._lat,e._lat)||Ie(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Mr._jsonSchemaVersion}}static fromJSON(e){if(ic(e,Mr._jsonSchema))return new Mr(e.latitude,e.longitude)}}Mr._jsonSchemaVersion="firestore/geoPoint/1.0",Mr._jsonSchema={type:wt("string",Mr._jsonSchemaVersion),latitude:wt("number"),longitude:wt("number")};/**
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
 */class xr{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}toJSON(){return{type:xr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ic(e,xr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new xr(e.vectorValues);throw new ie(X.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}xr._jsonSchemaVersion="firestore/vectorValue/1.0",xr._jsonSchema={type:wt("string",xr._jsonSchemaVersion),vectorValues:wt("object")};/**
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
 */const rk=/^__.*__$/;class ik{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Ds(e,this.data,this.fieldMask,t,this.fieldTransforms):new sc(e,this.data,t,this.fieldTransforms)}}class sS{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Ds(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function aS(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ge(40011,{Ac:n})}}class gy{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new gy({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return If(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(aS(this.Ac)&&rk.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class sk{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Kf(e)}Cc(e,t,s,o=!1){return new gy({Ac:e,methodName:t,Dc:s,path:Ht.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Jf(n){const e=n._freezeSettings(),t=Kf(n._databaseId);return new sk(n._databaseId,!!e.ignoreUndefinedProperties,t)}function oS(n,e,t,s,o,u={}){const h=n.Cc(u.merge||u.mergeFields?2:0,e,t,o);_y("Data must be an object, but it was:",h,s);const d=lS(s,h);let p,y;if(u.merge)p=new Rn(h.fieldMask),y=h.fieldTransforms;else if(u.mergeFields){const E=[];for(const w of u.mergeFields){const A=dg(e,w,t);if(!h.contains(A))throw new ie(X.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);cS(E,A)||E.push(A)}p=new Rn(E),y=h.fieldTransforms.filter(w=>p.covers(w.field))}else p=null,y=h.fieldTransforms;return new ik(new mn(d),p,y)}class uc extends Zf{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof uc}}class yy extends Zf{constructor(e,t){super(e),this.Fc=t}_toFieldTransform(e){const t=new Hu(e.serializer,pA(e.serializer,this.Fc));return new WM(e.path,t)}isEqual(e){return e instanceof yy&&this.Fc===e.Fc}}function ak(n,e,t,s){const o=n.Cc(1,e,t);_y("Data must be an object, but it was:",o,s);const u=[],h=mn.empty();Ns(s,(p,y)=>{const E=vy(e,p,t);y=Ye(y);const w=o.yc(E);if(y instanceof uc)u.push(E);else{const A=cc(y,w);A!=null&&(u.push(E),h.set(E,A))}});const d=new Rn(u);return new sS(h,d,o.fieldTransforms)}function ok(n,e,t,s,o,u){const h=n.Cc(1,e,t),d=[dg(e,s,t)],p=[o];if(u.length%2!=0)throw new ie(X.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let A=0;A<u.length;A+=2)d.push(dg(e,u[A])),p.push(u[A+1]);const y=[],E=mn.empty();for(let A=d.length-1;A>=0;--A)if(!cS(y,d[A])){const k=d[A];let x=p[A];x=Ye(x);const j=h.yc(k);if(x instanceof uc)y.push(k);else{const V=cc(x,j);V!=null&&(y.push(k),E.set(k,V))}}const w=new Rn(y);return new sS(E,w,h.fieldTransforms)}function lk(n,e,t,s=!1){return cc(t,n.Cc(s?4:3,e))}function cc(n,e){if(uS(n=Ye(n)))return _y("Unsupported field value:",e,n),lS(n,e);if(n instanceof Zf)return function(s,o){if(!aS(o.Ac))throw o.Sc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(s,o){const u=[];let h=0;for(const d of s){let p=cc(d,o.wc(h));p==null&&(p={nullValue:"NULL_VALUE"}),u.push(p),h++}return{arrayValue:{values:u}}}(n,e)}return function(s,o){if((s=Ye(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return pA(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=Je.fromDate(s);return{timestampValue:wf(o.serializer,u)}}if(s instanceof Je){const u=new Je(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:wf(o.serializer,u)}}if(s instanceof Mr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Hn)return{bytesValue:SA(o.serializer,s._byteString)};if(s instanceof lt){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.Sc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:ty(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof xr)return function(h,d){return{mapValue:{fields:{[Jw]:{stringValue:eA},[Ef]:{arrayValue:{values:h.toArray().map(y=>{if(typeof y!="number")throw d.Sc("VectorValues must only contain numeric values.");return Wg(d.serializer,y)})}}}}}}(s,o);throw o.Sc(`Unsupported field value: ${Lf(s)}`)}(n,e)}function lS(n,e){const t={};return Kw(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ns(n,(s,o)=>{const u=cc(o,e.mc(s));u!=null&&(t[s]=u)}),{mapValue:{fields:t}}}function uS(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Je||n instanceof Mr||n instanceof Hn||n instanceof lt||n instanceof Zf||n instanceof xr)}function _y(n,e,t){if(!uS(t)||!Gw(t)){const s=Lf(t);throw s==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+s)}}function dg(n,e,t){if((e=Ye(e))instanceof Wf)return e._internalPath;if(typeof e=="string")return vy(n,e);throw If("Field path arguments must be of type string or ",n,!1,void 0,t)}const uk=new RegExp("[~\\*/\\[\\]]");function vy(n,e,t){if(e.search(uk)>=0)throw If(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Wf(...e.split("."))._internalPath}catch{throw If(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function If(n,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(u||h)&&(p+=" (found",u&&(p+=` in field ${s}`),h&&(p+=` in document ${o}`),p+=")"),new ie(X.INVALID_ARGUMENT,d+n+p)}function cS(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class hS{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ck(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ed("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class ck extends hS{data(){return super.data()}}function ed(n,e){return typeof e=="string"?vy(n,e):e instanceof Wf?e._internalPath:e._delegate._internalPath}/**
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
 */function hk(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ie(X.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ey{}class fS extends Ey{}function y6(n,e,...t){let s=[];e instanceof Ey&&s.push(e),s=s.concat(t),function(u){const h=u.filter(p=>p instanceof Ty).length,d=u.filter(p=>p instanceof td).length;if(h>1||h>0&&d>0)throw new ie(X.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const o of s)n=o._apply(n);return n}class td extends fS{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new td(e,t,s)}_apply(e){const t=this._parse(e);return dS(e._query,t),new Oa(e.firestore,e.converter,tg(e._query,t))}_parse(e){const t=Jf(e.firestore);return function(u,h,d,p,y,E,w){let A;if(y.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new ie(X.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){q0(w,E);const x=[];for(const j of w)x.push(j0(p,u,j));A={arrayValue:{values:x}}}else A=j0(p,u,w)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||q0(w,E),A=lk(d,h,w,E==="in"||E==="not-in");return bt.create(y,E,A)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function _6(n,e,t){const s=e,o=ed("where",n);return td._create(o,s,t)}class Ty extends Ey{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ty(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:ar.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,u){let h=o;const d=u.getFlattenedFilters();for(const p of d)dS(h,p),h=tg(h,p)}(e._query,t),new Oa(e.firestore,e.converter,tg(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class by extends fS{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new by(e,t)}_apply(e){const t=function(o,u,h){if(o.startAt!==null)throw new ie(X.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ie(X.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ju(u,h)}(e._query,this._field,this._direction);return new Oa(e.firestore,e.converter,function(o,u){const h=o.explicitOrderBy.concat([u]);return new Zo(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)}(e._query,t))}}function v6(n,e="asc"){const t=e,s=ed("orderBy",n);return by._create(s,t)}function j0(n,e,t){if(typeof(t=Ye(t))=="string"){if(t==="")throw new ie(X.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!lA(e)&&t.indexOf("/")!==-1)throw new ie(X.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(We.fromString(t));if(!he.isDocumentKey(s))throw new ie(X.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return r0(n,new he(s))}if(t instanceof lt)return r0(n,t._key);throw new ie(X.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Lf(t)}.`)}function q0(n,e){if(!Array.isArray(n)||n.length===0)throw new ie(X.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function dS(n,e){const t=function(o,u){for(const h of o)for(const d of h.getFlattenedFilters())if(u.indexOf(d.op)>=0)return d.op;return null}(n.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new ie(X.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ie(X.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class fk{convertValue(e,t="none"){switch(Ts(e)){case 0:return null;case 1:return e.booleanValue;case 2:return mt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Es(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ge(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Ns(e,(o,u)=>{s[o]=this.convertValue(u,t)}),s}convertVectorValue(e){const t=e.fields?.[Ef].arrayValue?.values?.map(s=>mt(s.doubleValue));return new xr(t)}convertGeoPoint(e){return new Mr(mt(e.latitude),mt(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Bf(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Uu(e));default:return null}}convertTimestamp(e){const t=vs(e);return new Je(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=We.fromString(e);ze(OA(s),9688,{name:e});const o=new zu(s.get(1),s.get(3)),u=new he(s.popFirst(5));return o.isEqual(t)||Ti(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
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
 */function mS(n,e,t){let s;return s=n?n.toFirestore(e):e,s}class Tu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ea extends hS{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new sf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(ed("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ie(X.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Ea._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Ea._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ea._jsonSchema={type:wt("string",Ea._jsonSchemaVersion),bundleSource:wt("string","DocumentSnapshot"),bundleName:wt("string"),bundle:wt("string")};class sf extends Ea{data(e={}){return super.data(e)}}class ko{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Tu(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new sf(this._firestore,this._userDataWriter,s.key,s,new Tu(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ie(X.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(d=>{const p=new sf(o._firestore,o._userDataWriter,d.doc.key,d.doc,new Tu(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(d=>u||d.type!==3).map(d=>{const p=new sf(o._firestore,o._userDataWriter,d.doc.key,d.doc,new Tu(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,E=-1;return d.type!==0&&(y=h.indexOf(d.doc.key),h=h.delete(d.doc.key)),d.type!==1&&(h=h.add(d.doc),E=h.indexOf(d.doc.key)),{type:dk(d.type),doc:p,oldIndex:y,newIndex:E}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ie(X.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ko._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Gg.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach(u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function dk(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ge(61501,{type:n})}}/**
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
 */function E6(n){n=Gn(n,lt);const e=Gn(n.firestore,As);return ZP(py(e),n._key).then(t=>gS(e,n,t))}ko._jsonSchemaVersion="firestore/querySnapshot/1.0",ko._jsonSchema={type:wt("string",ko._jsonSchemaVersion),bundleSource:wt("string","QuerySnapshot"),bundleName:wt("string"),bundle:wt("string")};class pS extends fk{constructor(e){super(),this.firestore=e}convertBytes(e){return new Hn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new lt(this.firestore,null,t)}}function T6(n,e,t){n=Gn(n,lt);const s=Gn(n.firestore,As),o=mS(n.converter,e);return nd(s,[oS(Jf(s),"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,$n.none())])}function b6(n,e,t,...s){n=Gn(n,lt);const o=Gn(n.firestore,As),u=Jf(o);let h;return h=typeof(e=Ye(e))=="string"||e instanceof Wf?ok(u,"updateDoc",n._key,e,t,s):ak(u,"updateDoc",n._key,e),nd(o,[h.toMutation(n._key,$n.exists(!0))])}function w6(n){return nd(Gn(n.firestore,As),[new Zg(n._key,$n.none())])}function A6(n,e){const t=Gn(n.firestore,As),s=ek(n),o=mS(n.converter,e);return nd(t,[oS(Jf(n.firestore),"addDoc",s._key,o,n.converter!==null,{}).toMutation(s._key,$n.exists(!1))]).then(()=>s)}function S6(n,...e){n=Ye(n);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||B0(e[s])||(t=e[s++]);const o={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(B0(e[s])){const p=e[s];e[s]=p.next?.bind(p),e[s+1]=p.error?.bind(p),e[s+2]=p.complete?.bind(p)}let u,h,d;if(n instanceof lt)h=Gn(n.firestore,As),d=jf(n._key.path),u={next:p=>{e[s]&&e[s](gS(h,n,p))},error:e[s+1],complete:e[s+2]};else{const p=Gn(n,Oa);h=Gn(p.firestore,As),d=p._query;const y=new pS(h);u={next:E=>{e[s]&&e[s](new ko(h,y,p,E))},error:e[s+1],complete:e[s+2]},hk(n._query)}return function(y,E,w,A){const k=new tS(A),x=new $A(E,k,w);return y.asyncQueue.enqueueAndForget(async()=>HA(await fg(y),x)),()=>{k.Nu(),y.asyncQueue.enqueueAndForget(async()=>GA(await fg(y),x))}}(py(h),d,o,u)}function nd(n,e){return function(s,o){const u=new ps;return s.asyncQueue.enqueueAndForget(async()=>BP(await WP(s),o,u)),u.promise}(py(n),e)}function gS(n,e,t){const s=t.docs.get(e._key),o=new pS(n);return new Ea(n,o,e._key,s,new Tu(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */function R6(){return new uc("deleteField")}function I6(n){return new yy("increment",n)}(function(e,t=!0){(function(o){Yo=o})(Ca),Kn(new Nn("firestore",(s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),d=new As(new oM(s.getProvider("auth-internal")),new cM(h,s.getProvider("app-check-internal")),function(y,E){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new ie(X.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zu(y.options.projectId,E)}(h,o),h);return u={useFetchStreams:t,...u},d._setSettings(u),d},"PUBLIC").setMultipleInstances(!0)),Jt(HT,GT,e),Jt(HT,GT,"esm2020")})();/**
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
 */const yS="firebasestorage.googleapis.com",_S="storageBucket",mk=120*1e3,pk=600*1e3;/**
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
 */class ct extends Yn{constructor(e,t,s=0){super(Sp(e),`Firebase Storage: ${t} (${Sp(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ct.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Sp(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ut;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ut||(ut={}));function Sp(n){return"storage/"+n}function wy(){const n="An unknown error occurred, please check the error payload for server response.";return new ct(ut.UNKNOWN,n)}function gk(n){return new ct(ut.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function yk(n){return new ct(ut.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function _k(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ct(ut.UNAUTHENTICATED,n)}function vk(){return new ct(ut.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Ek(n){return new ct(ut.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Tk(){return new ct(ut.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function bk(){return new ct(ut.CANCELED,"User canceled the upload/download.")}function wk(n){return new ct(ut.INVALID_URL,"Invalid URL '"+n+"'.")}function Ak(n){return new ct(ut.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Sk(){return new ct(ut.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+_S+"' property when initializing the app?")}function Rk(){return new ct(ut.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Ik(){return new ct(ut.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Ck(n){return new ct(ut.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function mg(n){return new ct(ut.INVALID_ARGUMENT,n)}function vS(){return new ct(ut.APP_DELETED,"The Firebase app was deleted.")}function Nk(n){return new ct(ut.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Nu(n,e){return new ct(ut.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function du(n){throw new ct(ut.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class In{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=In.makeFromUrl(e,t)}catch{return new In(e,"")}if(s.path==="")return s;throw Ak(e)}static makeFromUrl(e,t){let s=null;const o="([A-Za-z0-9.\\-_]+)";function u(oe){oe.path.charAt(oe.path.length-1)==="/"&&(oe.path_=oe.path_.slice(0,-1))}const h="(/(.*))?$",d=new RegExp("^gs://"+o+h,"i"),p={bucket:1,path:3};function y(oe){oe.path_=decodeURIComponent(oe.path)}const E="v[A-Za-z0-9_]+",w=t.replace(/[.]/g,"\\."),A="(/([^?#]*).*)?$",k=new RegExp(`^https?://${w}/${E}/b/${o}/o${A}`,"i"),x={bucket:1,path:3},j=t===yS?"(?:storage.googleapis.com|storage.cloud.google.com)":t,V="([^?#]*)",G=new RegExp(`^https?://${j}/${o}/${V}`,"i"),ee=[{regex:d,indices:p,postModify:u},{regex:k,indices:x,postModify:y},{regex:G,indices:{bucket:1,path:2},postModify:y}];for(let oe=0;oe<ee.length;oe++){const ae=ee[oe],fe=ae.regex.exec(e);if(fe){const D=fe[ae.indices.bucket];let S=fe[ae.indices.path];S||(S=""),s=new In(D,S),ae.postModify(s);break}}if(s==null)throw wk(e);return s}}class Dk{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Ok(n,e,t){let s=1,o=null,u=null,h=!1,d=0;function p(){return d===2}let y=!1;function E(...V){y||(y=!0,e.apply(null,V))}function w(V){o=setTimeout(()=>{o=null,n(k,p())},V)}function A(){u&&clearTimeout(u)}function k(V,...G){if(y){A();return}if(V){A(),E.call(null,V,...G);return}if(p()||h){A(),E.call(null,V,...G);return}s<64&&(s*=2);let ee;d===1?(d=2,ee=0):ee=(s+Math.random())*1e3,w(ee)}let x=!1;function j(V){x||(x=!0,A(),!y&&(o!==null?(V||(d=2),clearTimeout(o),w(0)):V||(d=1)))}return w(0),u=setTimeout(()=>{h=!0,j(!0)},t),j}function Mk(n){n(!1)}/**
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
 */function xk(n){return n!==void 0}function Pk(n){return typeof n=="object"&&!Array.isArray(n)}function Ay(n){return typeof n=="string"||n instanceof String}function F0(n){return Sy()&&n instanceof Blob}function Sy(){return typeof Blob<"u"}function H0(n,e,t,s){if(s<e)throw mg(`Invalid value for '${n}'. Expected ${e} or greater.`);if(s>t)throw mg(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function Ry(n,e,t){let s=e;return t==null&&(s=`https://${e}`),`${t}://${s}/v0${n}`}function ES(n){const e=encodeURIComponent;let t="?";for(const s in n)if(n.hasOwnProperty(s)){const o=e(s)+"="+e(n[s]);t=t+o+"&"}return t=t.slice(0,-1),t}var Ta;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Ta||(Ta={}));/**
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
 */function kk(n,e){const t=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,u=e.indexOf(n)!==-1;return t||o||u}/**
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
 */class Vk{constructor(e,t,s,o,u,h,d,p,y,E,w,A=!0,k=!1){this.url_=e,this.method_=t,this.headers_=s,this.body_=o,this.successCodes_=u,this.additionalRetryCodes_=h,this.callback_=d,this.errorCallback_=p,this.timeout_=y,this.progressCallback_=E,this.connectionFactory_=w,this.retry=A,this.isUsingEmulator=k,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((x,j)=>{this.resolve_=x,this.reject_=j,this.start_()})}start_(){const e=(s,o)=>{if(o){s(!1,new Fh(!1,null,!0));return}const u=this.connectionFactory_();this.pendingConnection_=u;const h=d=>{const p=d.loaded,y=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,y)};this.progressCallback_!==null&&u.addUploadProgressListener(h),u.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&u.removeUploadProgressListener(h),this.pendingConnection_=null;const d=u.getErrorCode()===Ta.NO_ERROR,p=u.getStatus();if(!d||kk(p,this.additionalRetryCodes_)&&this.retry){const E=u.getErrorCode()===Ta.ABORT;s(!1,new Fh(!1,null,E));return}const y=this.successCodes_.indexOf(p)!==-1;s(!0,new Fh(y,u))})},t=(s,o)=>{const u=this.resolve_,h=this.reject_,d=o.connection;if(o.wasSuccessCode)try{const p=this.callback_(d,d.getResponse());xk(p)?u(p):u()}catch(p){h(p)}else if(d!==null){const p=wy();p.serverResponse=d.getErrorText(),this.errorCallback_?h(this.errorCallback_(d,p)):h(p)}else if(o.canceled){const p=this.appDelete_?vS():bk();h(p)}else{const p=Tk();h(p)}};this.canceled_?t(!1,new Fh(!1,null,!0)):this.backoffId_=Ok(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Mk(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Fh{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function Lk(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function Uk(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function zk(n,e){e&&(n["X-Firebase-GMPID"]=e)}function Bk(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function jk(n,e,t,s,o,u,h=!0,d=!1){const p=ES(n.urlParams),y=n.url+p,E=Object.assign({},n.headers);return zk(E,e),Lk(E,t),Uk(E,u),Bk(E,s),new Vk(y,n.method,E,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,h,d)}/**
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
 */function qk(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Fk(...n){const e=qk();if(e!==void 0){const t=new e;for(let s=0;s<n.length;s++)t.append(n[s]);return t.getBlob()}else{if(Sy())return new Blob(n);throw new ct(ut.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Hk(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function Gk(n){if(typeof atob>"u")throw Ck("base-64");return atob(n)}/**
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
 */const Ir={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Rp{constructor(e,t){this.data=e,this.contentType=t||null}}function $k(n,e){switch(n){case Ir.RAW:return new Rp(TS(e));case Ir.BASE64:case Ir.BASE64URL:return new Rp(bS(n,e));case Ir.DATA_URL:return new Rp(Qk(e),Yk(e))}throw wy()}function TS(n){const e=[];for(let t=0;t<n.length;t++){let s=n.charCodeAt(t);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const u=s,h=n.charCodeAt(++t);s=65536|(u&1023)<<10|h&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function Kk(n){let e;try{e=decodeURIComponent(n)}catch{throw Nu(Ir.DATA_URL,"Malformed data URL.")}return TS(e)}function bS(n,e){switch(n){case Ir.BASE64:{const o=e.indexOf("-")!==-1,u=e.indexOf("_")!==-1;if(o||u)throw Nu(n,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case Ir.BASE64URL:{const o=e.indexOf("+")!==-1,u=e.indexOf("/")!==-1;if(o||u)throw Nu(n,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=Gk(e)}catch(o){throw o.message.includes("polyfill")?o:Nu(n,"Invalid character found")}const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}class wS{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Nu(Ir.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=t[1]||null;s!=null&&(this.base64=Xk(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function Qk(n){const e=new wS(n);return e.base64?bS(Ir.BASE64,e.rest):Kk(e.rest)}function Yk(n){return new wS(n).contentType}function Xk(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class ls{constructor(e,t){let s=0,o="";F0(e)?(this.data_=e,s=e.size,o=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,t){if(F0(this.data_)){const s=this.data_,o=Hk(s,e,t);return o===null?null:new ls(o)}else{const s=new Uint8Array(this.data_.buffer,e,t-e);return new ls(s,!0)}}static getBlob(...e){if(Sy()){const t=e.map(s=>s instanceof ls?s.data_:s);return new ls(Fk.apply(null,t))}else{const t=e.map(h=>Ay(h)?$k(Ir.RAW,h).data:h.data_);let s=0;t.forEach(h=>{s+=h.byteLength});const o=new Uint8Array(s);let u=0;return t.forEach(h=>{for(let d=0;d<h.length;d++)o[u++]=h[d]}),new ls(o,!0)}}uploadData(){return this.data_}}/**
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
 */function AS(n){let e;try{e=JSON.parse(n)}catch{return null}return Pk(e)?e:null}/**
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
 */function Wk(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function Zk(n,e){const t=e.split("/").filter(s=>s.length>0).join("/");return n.length===0?t:n+"/"+t}function SS(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function Jk(n,e){return e}class an{constructor(e,t,s,o){this.server=e,this.local=t||e,this.writable=!!s,this.xform=o||Jk}}let Hh=null;function eV(n){return!Ay(n)||n.length<2?n:SS(n)}function RS(){if(Hh)return Hh;const n=[];n.push(new an("bucket")),n.push(new an("generation")),n.push(new an("metageneration")),n.push(new an("name","fullPath",!0));function e(u,h){return eV(h)}const t=new an("name");t.xform=e,n.push(t);function s(u,h){return h!==void 0?Number(h):h}const o=new an("size");return o.xform=s,n.push(o),n.push(new an("timeCreated")),n.push(new an("updated")),n.push(new an("md5Hash",null,!0)),n.push(new an("cacheControl",null,!0)),n.push(new an("contentDisposition",null,!0)),n.push(new an("contentEncoding",null,!0)),n.push(new an("contentLanguage",null,!0)),n.push(new an("contentType",null,!0)),n.push(new an("metadata","customMetadata",!0)),Hh=n,Hh}function tV(n,e){function t(){const s=n.bucket,o=n.fullPath,u=new In(s,o);return e._makeStorageReference(u)}Object.defineProperty(n,"ref",{get:t})}function nV(n,e,t){const s={};s.type="file";const o=t.length;for(let u=0;u<o;u++){const h=t[u];s[h.local]=h.xform(s,e[h.server])}return tV(s,n),s}function IS(n,e,t){const s=AS(e);return s===null?null:nV(n,s,t)}function rV(n,e,t,s){const o=AS(e);if(o===null||!Ay(o.downloadTokens))return null;const u=o.downloadTokens;if(u.length===0)return null;const h=encodeURIComponent;return u.split(",").map(y=>{const E=n.bucket,w=n.fullPath,A="/b/"+h(E)+"/o/"+h(w),k=Ry(A,t,s),x=ES({alt:"media",token:y});return k+x})[0]}function iV(n,e){const t={},s=e.length;for(let o=0;o<s;o++){const u=e[o];u.writable&&(t[u.server]=n[u.local])}return JSON.stringify(t)}class CS{constructor(e,t,s,o){this.url=e,this.method=t,this.handler=s,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function NS(n){if(!n)throw wy()}function sV(n,e){function t(s,o){const u=IS(n,o,e);return NS(u!==null),u}return t}function aV(n,e){function t(s,o){const u=IS(n,o,e);return NS(u!==null),rV(u,o,n.host,n._protocol)}return t}function DS(n){function e(t,s){let o;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?o=vk():o=_k():t.getStatus()===402?o=yk(n.bucket):t.getStatus()===403?o=Ek(n.path):o=s,o.status=t.getStatus(),o.serverResponse=s.serverResponse,o}return e}function oV(n){const e=DS(n);function t(s,o){let u=e(s,o);return s.getStatus()===404&&(u=gk(n.path)),u.serverResponse=o.serverResponse,u}return t}function lV(n,e,t){const s=e.fullServerUrl(),o=Ry(s,n.host,n._protocol),u="GET",h=n.maxOperationRetryTime,d=new CS(o,u,aV(n,t),h);return d.errorHandler=oV(e),d}function uV(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function cV(n,e,t){const s=Object.assign({},t);return s.fullPath=n.path,s.size=e.size(),s.contentType||(s.contentType=uV(null,e)),s}function hV(n,e,t,s,o){const u=e.bucketOnlyServerUrl(),h={"X-Goog-Upload-Protocol":"multipart"};function d(){let ee="";for(let oe=0;oe<2;oe++)ee=ee+Math.random().toString().slice(2);return ee}const p=d();h["Content-Type"]="multipart/related; boundary="+p;const y=cV(e,s,o),E=iV(y,t),w="--"+p+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+E+`\r
--`+p+`\r
Content-Type: `+y.contentType+`\r
\r
`,A=`\r
--`+p+"--",k=ls.getBlob(w,s,A);if(k===null)throw Rk();const x={name:y.fullPath},j=Ry(u,n.host,n._protocol),V="POST",G=n.maxUploadRetryTime,te=new CS(j,V,sV(n,t),G);return te.urlParams=x,te.headers=h,te.body=k.uploadData(),te.errorHandler=DS(e),te}class fV{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ta.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ta.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ta.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,s,o,u){if(this.sent_)throw du("cannot .send() more than once");if(Is(e)&&s&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),u!==void 0)for(const h in u)u.hasOwnProperty(h)&&this.xhr_.setRequestHeader(h,u[h].toString());return o!==void 0?this.xhr_.send(o):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw du("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw du("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw du("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw du("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class dV extends fV{initXhr(){this.xhr_.responseType="text"}}function OS(){return new dV}/**
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
 */class Sa{constructor(e,t){this._service=e,t instanceof In?this._location=t:this._location=In.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Sa(e,t)}get root(){const e=new In(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return SS(this._location.path)}get storage(){return this._service}get parent(){const e=Wk(this._location.path);if(e===null)return null;const t=new In(this._location.bucket,e);return new Sa(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Nk(e)}}function mV(n,e,t){n._throwIfRoot("uploadBytes");const s=hV(n.storage,n._location,RS(),new ls(e,!0),t);return n.storage.makeRequestWithTokens(s,OS).then(o=>({metadata:o,ref:n}))}function pV(n){n._throwIfRoot("getDownloadURL");const e=lV(n.storage,n._location,RS());return n.storage.makeRequestWithTokens(e,OS).then(t=>{if(t===null)throw Ik();return t})}function gV(n,e){const t=Zk(n._location.path,e),s=new In(n._location.bucket,t);return new Sa(n.storage,s)}/**
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
 */function yV(n){return/^[A-Za-z]+:\/\//.test(n)}function _V(n,e){return new Sa(n,e)}function MS(n,e){if(n instanceof Iy){const t=n;if(t._bucket==null)throw Sk();const s=new Sa(t,t._bucket);return e!=null?MS(s,e):s}else return e!==void 0?gV(n,e):n}function vV(n,e){if(e&&yV(e)){if(n instanceof Iy)return _V(n,e);throw mg("To use ref(service, url), the first argument must be a Storage instance.")}else return MS(n,e)}function G0(n,e){const t=e?.[_S];return t==null?null:In.makeFromBucketSpec(t,n)}function EV(n,e,t,s={}){n.host=`${e}:${t}`;const o=Is(e);o&&(Ng(`https://${n.host}/b`),Dg("Storage",!0)),n._isUsingEmulator=!0,n._protocol=o?"https":"http";const{mockUserToken:u}=s;u&&(n._overrideAuthToken=typeof u=="string"?u:Kb(u,n.app.options.projectId))}class Iy{constructor(e,t,s,o,u,h=!1){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=o,this._firebaseVersion=u,this._isUsingEmulator=h,this._bucket=null,this._host=yS,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=mk,this._maxUploadRetryTime=pk,this._requests=new Set,o!=null?this._bucket=In.makeFromBucketSpec(o,this._host):this._bucket=G0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=In.makeFromBucketSpec(this._url,e):this._bucket=G0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){H0("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){H0("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(ln(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Sa(this,e)}_makeRequest(e,t,s,o,u=!0){if(this._deleted)return new Dk(vS());{const h=jk(e,this._appId,s,o,t,this._firebaseVersion,u,this._isUsingEmulator);return this._requests.add(h),h.getPromise().then(()=>this._requests.delete(h),()=>this._requests.delete(h)),h}}async makeRequestWithTokens(e,t){const[s,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,o).getPromise()}}const $0="@firebase/storage",K0="0.14.0";/**
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
 */const xS="storage";function C6(n,e,t){return n=Ye(n),mV(n,e,t)}function N6(n){return n=Ye(n),pV(n)}function D6(n,e){return n=Ye(n),vV(n,e)}function TV(n=Ju(),e){n=Ye(n);const s=Ai(n,xS).getImmediate({identifier:e}),o=Hb("storage");return o&&bV(s,...o),s}function bV(n,e,t,s={}){EV(n,e,t,s)}function wV(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new Iy(t,s,o,e,Ca)}function AV(){Kn(new Nn(xS,wV,"PUBLIC").setMultipleInstances(!0)),Jt($0,K0,""),Jt($0,K0,"esm2020")}AV();const PS="@firebase/installations",Cy="0.6.19";/**
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
 */const kS=1e4,VS=`w:${Cy}`,LS="FIS_v2",SV="https://firebaseinstallations.googleapis.com/v1",RV=3600*1e3,IV="installations",CV="Installations";/**
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
 */const NV={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ra=new Cs(IV,CV,NV);function US(n){return n instanceof Yn&&n.code.includes("request-failed")}/**
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
 */function zS({projectId:n}){return`${SV}/projects/${n}/installations`}function BS(n){return{token:n.token,requestStatus:2,expiresIn:OV(n.expiresIn),creationTime:Date.now()}}async function jS(n,e){const s=(await e.json()).error;return Ra.create("request-failed",{requestName:n,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function qS({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function DV(n,{refreshToken:e}){const t=qS(n);return t.append("Authorization",MV(e)),t}async function FS(n){const e=await n();return e.status>=500&&e.status<600?n():e}function OV(n){return Number(n.replace("s","000"))}function MV(n){return`${LS} ${n}`}/**
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
 */async function xV({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const s=zS(n),o=qS(n),u=e.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const h={fid:t,authVersion:LS,appId:n.appId,sdkVersion:VS},d={method:"POST",headers:o,body:JSON.stringify(h)},p=await FS(()=>fetch(s,d));if(p.ok){const y=await p.json();return{fid:y.fid||t,registrationStatus:2,refreshToken:y.refreshToken,authToken:BS(y.authToken)}}else throw await jS("Create Installation",p)}/**
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
 */function HS(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function PV(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const kV=/^[cdef][\w-]{21}$/,pg="";function VV(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=LV(n);return kV.test(t)?t:pg}catch{return pg}}function LV(n){return PV(n).substr(0,22)}/**
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
 */const GS=new Map;function $S(n,e){const t=rd(n);KS(t,e),UV(t,e)}function KS(n,e){const t=GS.get(n);if(t)for(const s of t)s(e)}function UV(n,e){const t=zV();t&&t.postMessage({key:n,fid:e}),BV()}let va=null;function zV(){return!va&&"BroadcastChannel"in self&&(va=new BroadcastChannel("[Firebase] FID Change"),va.onmessage=n=>{KS(n.data.key,n.data.fid)}),va}function BV(){GS.size===0&&va&&(va.close(),va=null)}/**
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
 */const jV="firebase-installations-database",qV=1,Ia="firebase-installations-store";let Ip=null;function Ny(){return Ip||(Ip=Zb(jV,qV,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Ia)}}})),Ip}async function Cf(n,e){const t=rd(n),o=(await Ny()).transaction(Ia,"readwrite"),u=o.objectStore(Ia),h=await u.get(t);return await u.put(e,t),await o.done,(!h||h.fid!==e.fid)&&$S(n,e.fid),e}async function QS(n){const e=rd(n),s=(await Ny()).transaction(Ia,"readwrite");await s.objectStore(Ia).delete(e),await s.done}async function id(n,e){const t=rd(n),o=(await Ny()).transaction(Ia,"readwrite"),u=o.objectStore(Ia),h=await u.get(t),d=e(h);return d===void 0?await u.delete(t):await u.put(d,t),await o.done,d&&(!h||h.fid!==d.fid)&&$S(n,d.fid),d}/**
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
 */async function Dy(n){let e;const t=await id(n.appConfig,s=>{const o=FV(s),u=HV(n,o);return e=u.registrationPromise,u.installationEntry});return t.fid===pg?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function FV(n){const e=n||{fid:VV(),registrationStatus:0};return YS(e)}function HV(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Ra.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=GV(n,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:$V(n)}:{installationEntry:e}}async function GV(n,e){try{const t=await xV(n,e);return Cf(n.appConfig,t)}catch(t){throw US(t)&&t.customData.serverCode===409?await QS(n.appConfig):await Cf(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function $V(n){let e=await Q0(n.appConfig);for(;e.registrationStatus===1;)await HS(100),e=await Q0(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await Dy(n);return s||t}return e}function Q0(n){return id(n,e=>{if(!e)throw Ra.create("installation-not-found");return YS(e)})}function YS(n){return KV(n)?{fid:n.fid,registrationStatus:0}:n}function KV(n){return n.registrationStatus===1&&n.registrationTime+kS<Date.now()}/**
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
 */async function QV({appConfig:n,heartbeatServiceProvider:e},t){const s=YV(n,t),o=DV(n,t),u=e.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const h={installation:{sdkVersion:VS,appId:n.appId}},d={method:"POST",headers:o,body:JSON.stringify(h)},p=await FS(()=>fetch(s,d));if(p.ok){const y=await p.json();return BS(y)}else throw await jS("Generate Auth Token",p)}function YV(n,{fid:e}){return`${zS(n)}/${e}/authTokens:generate`}/**
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
 */async function Oy(n,e=!1){let t;const s=await id(n.appConfig,u=>{if(!XS(u))throw Ra.create("not-registered");const h=u.authToken;if(!e&&ZV(h))return u;if(h.requestStatus===1)return t=XV(n,e),u;{if(!navigator.onLine)throw Ra.create("app-offline");const d=e4(u);return t=WV(n,d),d}});return t?await t:s.authToken}async function XV(n,e){let t=await Y0(n.appConfig);for(;t.authToken.requestStatus===1;)await HS(100),t=await Y0(n.appConfig);const s=t.authToken;return s.requestStatus===0?Oy(n,e):s}function Y0(n){return id(n,e=>{if(!XS(e))throw Ra.create("not-registered");const t=e.authToken;return t4(t)?{...e,authToken:{requestStatus:0}}:e})}async function WV(n,e){try{const t=await QV(n,e),s={...e,authToken:t};return await Cf(n.appConfig,s),t}catch(t){if(US(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await QS(n.appConfig);else{const s={...e,authToken:{requestStatus:0}};await Cf(n.appConfig,s)}throw t}}function XS(n){return n!==void 0&&n.registrationStatus===2}function ZV(n){return n.requestStatus===2&&!JV(n)}function JV(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+RV}function e4(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function t4(n){return n.requestStatus===1&&n.requestTime+kS<Date.now()}/**
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
 */async function n4(n){const e=n,{installationEntry:t,registrationPromise:s}=await Dy(e);return s?s.catch(console.error):Oy(e).catch(console.error),t.fid}/**
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
 */async function r4(n,e=!1){const t=n;return await i4(t),(await Oy(t,e)).token}async function i4(n){const{registrationPromise:e}=await Dy(n);e&&await e}/**
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
 */function s4(n){if(!n||!n.options)throw Cp("App Configuration");if(!n.name)throw Cp("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Cp(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Cp(n){return Ra.create("missing-app-config-values",{valueName:n})}/**
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
 */const WS="installations",a4="installations-internal",o4=n=>{const e=n.getProvider("app").getImmediate(),t=s4(e),s=Ai(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},l4=n=>{const e=n.getProvider("app").getImmediate(),t=Ai(e,WS).getImmediate();return{getId:()=>n4(t),getToken:o=>r4(t,o)}};function u4(){Kn(new Nn(WS,o4,"PUBLIC")),Kn(new Nn(a4,l4,"PRIVATE"))}u4();Jt(PS,Cy);Jt(PS,Cy,"esm2020");/**
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
 */const Nf="analytics",c4="firebase_id",h4="origin",f4=60*1e3,d4="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",My="https://www.googletagmanager.com/gtag/js";/**
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
 */const pn=new Zu("@firebase/analytics");/**
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
 */const m4={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Cn=new Cs("analytics","Analytics",m4);/**
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
 */function p4(n){if(!n.startsWith(My)){const e=Cn.create("invalid-gtag-resource",{gtagURL:n});return pn.warn(e.message),""}return n}function ZS(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function g4(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function y4(n,e){const t=g4("firebase-js-sdk-policy",{createScriptURL:p4}),s=document.createElement("script"),o=`${My}?l=${n}&id=${e}`;s.src=t?t?.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function _4(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function v4(n,e,t,s,o,u){const h=s[o];try{if(h)await e[h];else{const p=(await ZS(t)).find(y=>y.measurementId===o);p&&await e[p.appId]}}catch(d){pn.error(d)}n("config",o,u)}async function E4(n,e,t,s,o){try{let u=[];if(o&&o.send_to){let h=o.send_to;Array.isArray(h)||(h=[h]);const d=await ZS(t);for(const p of h){const y=d.find(w=>w.measurementId===p),E=y&&e[y.appId];if(E)u.push(E);else{u=[];break}}}u.length===0&&(u=Object.values(e)),await Promise.all(u),n("event",s,o||{})}catch(u){pn.error(u)}}function T4(n,e,t,s){async function o(u,...h){try{if(u==="event"){const[d,p]=h;await E4(n,e,t,d,p)}else if(u==="config"){const[d,p]=h;await v4(n,e,t,s,d,p)}else if(u==="consent"){const[d,p]=h;n("consent",d,p)}else if(u==="get"){const[d,p,y]=h;n("get",d,p,y)}else if(u==="set"){const[d]=h;n("set",d)}else n(u,...h)}catch(d){pn.error(d)}}return o}function b4(n,e,t,s,o){let u=function(...h){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(u=window[o]),window[o]=T4(u,n,e,t),{gtagCore:u,wrappedGtag:window[o]}}function w4(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(My)&&t.src.includes(n))return t;return null}/**
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
 */const A4=30,S4=1e3;class R4{constructor(e={},t=S4){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const JS=new R4;function I4(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function C4(n){const{appId:e,apiKey:t}=n,s={method:"GET",headers:I4(t)},o=d4.replace("{app-id}",e),u=await fetch(o,s);if(u.status!==200&&u.status!==304){let h="";try{const d=await u.json();d.error?.message&&(h=d.error.message)}catch{}throw Cn.create("config-fetch-failed",{httpStatus:u.status,responseMessage:h})}return u.json()}async function N4(n,e=JS,t){const{appId:s,apiKey:o,measurementId:u}=n.options;if(!s)throw Cn.create("no-app-id");if(!o){if(u)return{measurementId:u,appId:s};throw Cn.create("no-api-key")}const h=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},d=new M4;return setTimeout(async()=>{d.abort()},f4),eR({appId:s,apiKey:o,measurementId:u},h,d,e)}async function eR(n,{throttleEndTimeMillis:e,backoffCount:t},s,o=JS){const{appId:u,measurementId:h}=n;try{await D4(s,e)}catch(d){if(h)return pn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${d?.message}]`),{appId:u,measurementId:h};throw d}try{const d=await C4(n);return o.deleteThrottleMetadata(u),d}catch(d){const p=d;if(!O4(p)){if(o.deleteThrottleMetadata(u),h)return pn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${p?.message}]`),{appId:u,measurementId:h};throw d}const y=Number(p?.customData?.httpStatus)===503?pT(t,o.intervalMillis,A4):pT(t,o.intervalMillis),E={throttleEndTimeMillis:Date.now()+y,backoffCount:t+1};return o.setThrottleMetadata(u,E),pn.debug(`Calling attemptFetch again in ${y} millis`),eR(n,E,s,o)}}function D4(n,e){return new Promise((t,s)=>{const o=Math.max(e-Date.now(),0),u=setTimeout(t,o);n.addEventListener(()=>{clearTimeout(u),s(Cn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function O4(n){if(!(n instanceof Yn)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class M4{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function x4(n,e,t,s,o){if(o&&o.global){n("event",t,s);return}else{const u=await e,h={...s,send_to:u};n("event",t,h)}}/**
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
 */async function P4(){if(Og())try{await Mg()}catch(n){return pn.warn(Cn.create("indexeddb-unavailable",{errorInfo:n?.toString()}).message),!1}else return pn.warn(Cn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function k4(n,e,t,s,o,u,h){const d=N4(n);d.then(A=>{t[A.measurementId]=A.appId,n.options.measurementId&&A.measurementId!==n.options.measurementId&&pn.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${A.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(A=>pn.error(A)),e.push(d);const p=P4().then(A=>{if(A)return s.getId()}),[y,E]=await Promise.all([d,p]);w4(u)||y4(u,y.measurementId),o("js",new Date);const w=h?.config??{};return w[h4]="firebase",w.update=!0,E!=null&&(w[c4]=E),o("config",y.measurementId,w),y.measurementId}/**
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
 */class V4{constructor(e){this.app=e}_delete(){return delete Du[this.app.options.appId],Promise.resolve()}}let Du={},X0=[];const W0={};let Np="dataLayer",L4="gtag",Z0,tR,J0=!1;function U4(){const n=[];if(Qb()&&n.push("This is a browser extension environment."),Yb()||n.push("Cookies are not available."),n.length>0){const e=n.map((s,o)=>`(${o+1}) ${s}`).join(" "),t=Cn.create("invalid-analytics-context",{errorInfo:e});pn.warn(t.message)}}function z4(n,e,t){U4();const s=n.options.appId;if(!s)throw Cn.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)pn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Cn.create("no-api-key");if(Du[s]!=null)throw Cn.create("already-exists",{id:s});if(!J0){_4(Np);const{wrappedGtag:u,gtagCore:h}=b4(Du,X0,W0,Np,L4);tR=u,Z0=h,J0=!0}return Du[s]=k4(n,X0,W0,e,Z0,Np,t),new V4(n)}function B4(n=Ju()){n=Ye(n);const e=Ai(n,Nf);return e.isInitialized()?e.getImmediate():j4(n)}function j4(n,e={}){const t=Ai(n,Nf);if(t.isInitialized()){const o=t.getImmediate();if(ys(e,t.getOptions()))return o;throw Cn.create("already-initialized")}return t.initialize({options:e})}function q4(n,e,t,s){n=Ye(n),x4(tR,Du[n.app.options.appId],e,t,s).catch(o=>pn.error(o))}const eb="@firebase/analytics",tb="0.10.18";function F4(){Kn(new Nn(Nf,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return z4(s,o,t)},"PUBLIC")),Kn(new Nn("analytics-internal",n,"PRIVATE")),Jt(eb,tb),Jt(eb,tb,"esm2020");function n(e){try{const t=e.getProvider(Nf).getImmediate();return{logEvent:(s,o,u)=>q4(t,s,o,u)}}catch(t){throw Cn.create("interop-component-reg-failed",{reason:t})}}}F4();var gg,nb,sd=function(){var n=self.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0];if(n&&n.responseStart>0&&n.responseStart<performance.now())return n},nR=function(n){if(document.readyState==="loading")return"loading";var e=sd();if(e){if(n<e.domInteractive)return"loading";if(e.domContentLoadedEventStart===0||n<e.domContentLoadedEventStart)return"dom-interactive";if(e.domComplete===0||n<e.domComplete)return"dom-content-loaded"}return"complete"},H4=function(n){var e=n.nodeName;return n.nodeType===1?e.toLowerCase():e.toUpperCase().replace(/^#/,"")},xy=function(n,e){var t="";try{for(;n&&n.nodeType!==9;){var s=n,o=s.id?"#"+s.id:H4(s)+(s.classList&&s.classList.value&&s.classList.value.trim()&&s.classList.value.trim().length?"."+s.classList.value.trim().replace(/\s+/g,"."):"");if(t.length+o.length>(e||100)-1)return t||o;if(t=t?o+">"+t:o,s.id)break;n=s.parentNode}}catch{}return t},rR=-1,G4=function(){return rR},hc=function(n){addEventListener("pageshow",function(e){e.persisted&&(rR=e.timeStamp,n(e))},!0)},Py=function(){var n=sd();return n&&n.activationStart||0},Ss=function(n,e){var t=sd(),s="navigate";return G4()>=0?s="back-forward-cache":t&&(document.prerendering||Py()>0?s="prerender":document.wasDiscarded?s="restore":t.type&&(s=t.type.replace(/_/g,"-"))),{name:n,value:e===void 0?-1:e,rating:"good",delta:0,entries:[],id:"v4-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:s}},el=function(n,e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(n)){var s=new PerformanceObserver(function(o){Promise.resolve().then(function(){e(o.getEntries())})});return s.observe(Object.assign({type:n,buffered:!0},t||{})),s}}catch{}},Rs=function(n,e,t,s){var o,u;return function(h){e.value>=0&&(h||s)&&((u=e.value-(o||0))||o===void 0)&&(o=e.value,e.delta=u,e.rating=function(d,p){return d>p[1]?"poor":d>p[0]?"needs-improvement":"good"}(e.value,t),n(e))}},ky=function(n){requestAnimationFrame(function(){return requestAnimationFrame(function(){return n()})})},ad=function(n){document.addEventListener("visibilitychange",function(){document.visibilityState==="hidden"&&n()})},Vy=function(n){var e=!1;return function(){e||(n(),e=!0)}},Do=-1,rb=function(){return document.visibilityState!=="hidden"||document.prerendering?1/0:0},Df=function(n){document.visibilityState==="hidden"&&Do>-1&&(Do=n.type==="visibilitychange"?n.timeStamp:0,$4())},ib=function(){addEventListener("visibilitychange",Df,!0),addEventListener("prerenderingchange",Df,!0)},$4=function(){removeEventListener("visibilitychange",Df,!0),removeEventListener("prerenderingchange",Df,!0)},iR=function(){return Do<0&&(Do=rb(),ib(),hc(function(){setTimeout(function(){Do=rb(),ib()},0)})),{get firstHiddenTime(){return Do}}},Ly=function(n){document.prerendering?addEventListener("prerenderingchange",function(){return n()},!0):n()},sb=[1800,3e3],K4=function(n,e){e=e||{},Ly(function(){var t,s=iR(),o=Ss("FCP"),u=el("paint",function(h){h.forEach(function(d){d.name==="first-contentful-paint"&&(u.disconnect(),d.startTime<s.firstHiddenTime&&(o.value=Math.max(d.startTime-Py(),0),o.entries.push(d),t(!0)))})});u&&(t=Rs(n,o,sb,e.reportAllChanges),hc(function(h){o=Ss("FCP"),t=Rs(n,o,sb,e.reportAllChanges),ky(function(){o.value=performance.now()-h.timeStamp,t(!0)})}))})},ab=[.1,.25],Q4=function(n,e){(function(t,s){s=s||{},K4(Vy(function(){var o,u=Ss("CLS",0),h=0,d=[],p=function(E){E.forEach(function(w){if(!w.hadRecentInput){var A=d[0],k=d[d.length-1];h&&w.startTime-k.startTime<1e3&&w.startTime-A.startTime<5e3?(h+=w.value,d.push(w)):(h=w.value,d=[w])}}),h>u.value&&(u.value=h,u.entries=d,o())},y=el("layout-shift",p);y&&(o=Rs(t,u,ab,s.reportAllChanges),ad(function(){p(y.takeRecords()),o(!0)}),hc(function(){h=0,u=Ss("CLS",0),o=Rs(t,u,ab,s.reportAllChanges),ky(function(){return o()})}),setTimeout(o,0))}))})(function(t){var s=function(o){var u,h={};if(o.entries.length){var d=o.entries.reduce(function(y,E){return y&&y.value>E.value?y:E});if(d&&d.sources&&d.sources.length){var p=(u=d.sources).find(function(y){return y.node&&y.node.nodeType===1})||u[0];p&&(h={largestShiftTarget:xy(p.node),largestShiftTime:d.startTime,largestShiftValue:d.value,largestShiftSource:p,largestShiftEntry:d,loadState:nR(d.startTime)})}}return Object.assign(o,{attribution:h})}(t);n(s)},e)},sR=0,Dp=1/0,Gh=0,Y4=function(n){n.forEach(function(e){e.interactionId&&(Dp=Math.min(Dp,e.interactionId),Gh=Math.max(Gh,e.interactionId),sR=Gh?(Gh-Dp)/7+1:0)})},aR=function(){return gg?sR:performance.interactionCount||0},X4=function(){"interactionCount"in performance||gg||(gg=el("event",Y4,{type:"event",buffered:!0,durationThreshold:0}))},nr=[],Ou=new Map,oR=0,W4=function(){var n=Math.min(nr.length-1,Math.floor((aR()-oR)/50));return nr[n]},lR=[],Z4=function(n){if(lR.forEach(function(o){return o(n)}),n.interactionId||n.entryType==="first-input"){var e=nr[nr.length-1],t=Ou.get(n.interactionId);if(t||nr.length<10||n.duration>e.latency){if(t)n.duration>t.latency?(t.entries=[n],t.latency=n.duration):n.duration===t.latency&&n.startTime===t.entries[0].startTime&&t.entries.push(n);else{var s={id:n.interactionId,latency:n.duration,entries:[n]};Ou.set(s.id,s),nr.push(s)}nr.sort(function(o,u){return u.latency-o.latency}),nr.length>10&&nr.splice(10).forEach(function(o){return Ou.delete(o.id)})}}},Uy=function(n){var e=self.requestIdleCallback||self.setTimeout,t=-1;return n=Vy(n),document.visibilityState==="hidden"?n():(t=e(n),ad(n)),t},ob=[200,500],J4=function(n,e){"PerformanceEventTiming"in self&&"interactionId"in PerformanceEventTiming.prototype&&(e=e||{},Ly(function(){var t;X4();var s,o=Ss("INP"),u=function(d){Uy(function(){d.forEach(Z4);var p=W4();p&&p.latency!==o.value&&(o.value=p.latency,o.entries=p.entries,s())})},h=el("event",u,{durationThreshold:(t=e.durationThreshold)!==null&&t!==void 0?t:40});s=Rs(n,o,ob,e.reportAllChanges),h&&(h.observe({type:"first-input",buffered:!0}),ad(function(){u(h.takeRecords()),s(!0)}),hc(function(){oR=aR(),nr.length=0,Ou.clear(),o=Ss("INP"),s=Rs(n,o,ob,e.reportAllChanges)}))}))},Vo=[],us=[],yg=0,zy=new WeakMap,Lo=new Map,_g=-1,eL=function(n){Vo=Vo.concat(n),uR()},uR=function(){_g<0&&(_g=Uy(tL))},tL=function(){Lo.size>10&&Lo.forEach(function(h,d){Ou.has(d)||Lo.delete(d)});var n=nr.map(function(h){return zy.get(h.entries[0])}),e=us.length-50;us=us.filter(function(h,d){return d>=e||n.includes(h)});for(var t=new Set,s=0;s<us.length;s++){var o=us[s];cR(o.startTime,o.processingEnd).forEach(function(h){t.add(h)})}var u=Vo.length-1-50;Vo=Vo.filter(function(h,d){return h.startTime>yg&&d>u||t.has(h)}),_g=-1};lR.push(function(n){n.interactionId&&n.target&&!Lo.has(n.interactionId)&&Lo.set(n.interactionId,n.target)},function(n){var e,t=n.startTime+n.duration;yg=Math.max(yg,n.processingEnd);for(var s=us.length-1;s>=0;s--){var o=us[s];if(Math.abs(t-o.renderTime)<=8){(e=o).startTime=Math.min(n.startTime,e.startTime),e.processingStart=Math.min(n.processingStart,e.processingStart),e.processingEnd=Math.max(n.processingEnd,e.processingEnd),e.entries.push(n);break}}e||(e={startTime:n.startTime,processingStart:n.processingStart,processingEnd:n.processingEnd,renderTime:t,entries:[n]},us.push(e)),(n.interactionId||n.entryType==="first-input")&&zy.set(n,e),uR()});var cR=function(n,e){for(var t,s=[],o=0;t=Vo[o];o++)if(!(t.startTime+t.duration<n)){if(t.startTime>e)break;s.push(t)}return s},nL=function(n,e){nb||(nb=el("long-animation-frame",eL)),J4(function(t){var s=function(o){var u=o.entries[0],h=zy.get(u),d=u.processingStart,p=h.processingEnd,y=h.entries.sort(function(V,G){return V.processingStart-G.processingStart}),E=cR(u.startTime,p),w=o.entries.find(function(V){return V.target}),A=w&&w.target||Lo.get(u.interactionId),k=[u.startTime+u.duration,p].concat(E.map(function(V){return V.startTime+V.duration})),x=Math.max.apply(Math,k),j={interactionTarget:xy(A),interactionTargetElement:A,interactionType:u.name.startsWith("key")?"keyboard":"pointer",interactionTime:u.startTime,nextPaintTime:x,processedEventEntries:y,longAnimationFrameEntries:E,inputDelay:d-u.startTime,processingDuration:p-d,presentationDelay:Math.max(x-p,0),loadState:nR(u.startTime)};return Object.assign(o,{attribution:j})}(t);n(s)},e)},lb=[2500,4e3],Op={},rL=function(n,e){(function(t,s){s=s||{},Ly(function(){var o,u=iR(),h=Ss("LCP"),d=function(E){s.reportAllChanges||(E=E.slice(-1)),E.forEach(function(w){w.startTime<u.firstHiddenTime&&(h.value=Math.max(w.startTime-Py(),0),h.entries=[w],o())})},p=el("largest-contentful-paint",d);if(p){o=Rs(t,h,lb,s.reportAllChanges);var y=Vy(function(){Op[h.id]||(d(p.takeRecords()),p.disconnect(),Op[h.id]=!0,o(!0))});["keydown","click"].forEach(function(E){addEventListener(E,function(){return Uy(y)},{once:!0,capture:!0})}),ad(y),hc(function(E){h=Ss("LCP"),o=Rs(t,h,lb,s.reportAllChanges),ky(function(){h.value=performance.now()-E.timeStamp,Op[h.id]=!0,o(!0)})})}})})(function(t){var s=function(o){var u={timeToFirstByte:0,resourceLoadDelay:0,resourceLoadDuration:0,elementRenderDelay:o.value};if(o.entries.length){var h=sd();if(h){var d=h.activationStart||0,p=o.entries[o.entries.length-1],y=p.url&&performance.getEntriesByType("resource").filter(function(x){return x.name===p.url})[0],E=Math.max(0,h.responseStart-d),w=Math.max(E,y?(y.requestStart||y.startTime)-d:0),A=Math.max(w,y?y.responseEnd-d:0),k=Math.max(A,p.startTime-d);u={element:xy(p.element),timeToFirstByte:E,resourceLoadDelay:w-E,resourceLoadDuration:A-w,elementRenderDelay:k-A,navigationEntry:h,lcpEntry:p},p.url&&(u.url=p.url),y&&(u.lcpResourceEntry=y)}}return Object.assign(o,{attribution:u})}(t);n(s)},e)};const ub="@firebase/performance",vg="0.7.9";/**
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
 */const hR=vg,iL="FB-PERF-TRACE-START",sL="FB-PERF-TRACE-STOP",Eg="FB-PERF-TRACE-MEASURE",fR="_wt_",dR="_fp",mR="_fcp",pR="_fid",gR="_lcp",aL="lcp_element",yR="_inp",oL="inp_interactionTarget",_R="_cls",lL="cls_largestShiftTarget",vR="@firebase/performance/config",ER="@firebase/performance/configexpire",uL="performance",TR="Performance";/**
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
 */const cL={"trace started":"Trace {$traceName} was started before.","trace stopped":"Trace {$traceName} is not running.","nonpositive trace startTime":"Trace {$traceName} startTime should be positive.","nonpositive trace duration":"Trace {$traceName} duration should be positive.","no window":"Window is not available.","no app id":"App id is not available.","no project id":"Project id is not available.","no api key":"Api key is not available.","invalid cc log":"Attempted to queue invalid cc event","FB not default":"Performance can only start when Firebase app instance is the default one.","RC response not ok":"RC response is not ok","invalid attribute name":"Attribute name {$attributeName} is invalid.","invalid attribute value":"Attribute value {$attributeValue} is invalid.","invalid custom metric name":"Custom metric name {$customMetricName} is invalid","invalid String merger input":"Input for String merger is invalid, contact support team to resolve.","already initialized":"initializePerformance() has already been called with different options. To avoid this error, call initializePerformance() with the same options as when it was originally called, or call getPerformance() to return the already initialized instance."},Wt=new Cs(uL,TR,cL);/**
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
 */const wi=new Zu(TR);wi.logLevel=Re.INFO;/**
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
 */let Mp,bR;class Dt{constructor(e){if(this.window=e,!e)throw Wt.create("no window");this.performance=e.performance,this.PerformanceObserver=e.PerformanceObserver,this.windowLocation=e.location,this.navigator=e.navigator,this.document=e.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=e.localStorage),e.perfMetrics&&e.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=e.perfMetrics.onFirstInputDelay),this.onLCP=rL,this.onINP=nL,this.onCLS=Q4}getUrl(){return this.windowLocation.href.split("?")[0]}mark(e){!this.performance||!this.performance.mark||this.performance.mark(e)}measure(e,t,s){!this.performance||!this.performance.measure||this.performance.measure(e,t,s)}getEntriesByType(e){return!this.performance||!this.performance.getEntriesByType?[]:this.performance.getEntriesByType(e)}getEntriesByName(e){return!this.performance||!this.performance.getEntriesByName?[]:this.performance.getEntriesByName(e)}getTimeOrigin(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)}requiredApisAvailable(){return!fetch||!Promise||!Yb()?(wi.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled."),!1):Og()?!0:(wi.info("IndexedDB is not supported by current browser"),!1)}setupObserver(e,t){if(!this.PerformanceObserver)return;new this.PerformanceObserver(o=>{for(const u of o.getEntries())t(u)}).observe({entryTypes:[e]})}static getInstance(){return Mp===void 0&&(Mp=new Dt(bR)),Mp}}function hL(n){bR=n}/**
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
 */let wR;function fL(n){const e=n.getId();return e.then(t=>{wR=t}),e}function By(){return wR}function dL(n){const e=n.getToken();return e.then(t=>{}),e}/**
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
 */function cb(n,e){const t=n.length-e.length;if(t<0||t>1)throw Wt.create("invalid String merger input");const s=[];for(let o=0;o<n.length;o++)s.push(n.charAt(o)),e.length>o&&s.push(e.charAt(o));return s.join("")}/**
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
 */let xp;class un{constructor(){this.instrumentationEnabled=!0,this.dataCollectionEnabled=!0,this.loggingEnabled=!1,this.tracesSamplingRate=1,this.networkRequestsSamplingRate=1,this.logEndPointUrl="https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",this.flTransportEndpointUrl=cb("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),this.transportKey=cb("AzSC8r6ReiGqFMyfvgow","Iayx0u-XT3vksVM-pIV"),this.logSource=462,this.logTraceAfterSampling=!1,this.logNetworkAfterSampling=!1,this.configTimeToLive=12,this.logMaxFlushSize=40}getFlTransportFullUrl(){return this.flTransportEndpointUrl.concat("?key=",this.transportKey)}static getInstance(){return xp===void 0&&(xp=new un),xp}}/**
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
 */var Mu;(function(n){n[n.UNKNOWN=0]="UNKNOWN",n[n.VISIBLE=1]="VISIBLE",n[n.HIDDEN=2]="HIDDEN"})(Mu||(Mu={}));const mL=["firebase_","google_","ga_"],pL=new RegExp("^[a-zA-Z]\\w*$"),gL=40,Tg=100;function yL(){const n=Dt.getInstance().navigator;return n?.serviceWorker?n.serviceWorker.controller?2:3:1}function _L(){switch(Dt.getInstance().document.visibilityState){case"visible":return Mu.VISIBLE;case"hidden":return Mu.HIDDEN;default:return Mu.UNKNOWN}}function vL(){const e=Dt.getInstance().navigator.connection;switch(e&&e.effectiveType){case"slow-2g":return 1;case"2g":return 2;case"3g":return 3;case"4g":return 4;default:return 0}}function EL(n){return n.length===0||n.length>gL?!1:!mL.some(t=>n.startsWith(t))&&!!n.match(pL)}function TL(n){return n.length!==0&&n.length<=Tg}/**
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
 */function AR(n){const e=n.options?.appId;if(!e)throw Wt.create("no app id");return e}function bL(n){const e=n.options?.projectId;if(!e)throw Wt.create("no project id");return e}function wL(n){const e=n.options?.apiKey;if(!e)throw Wt.create("no api key");return e}/**
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
 */const AL="0.0.1",Sn={loggingEnabled:!0},SL="FIREBASE_INSTALLATIONS_AUTH";function RL(n,e){const t=IL();return t?(hb(t),Promise.resolve()):DL(n,e).then(hb).then(s=>CL(s),()=>{})}function IL(){const n=Dt.getInstance().localStorage;if(!n)return;const e=n.getItem(ER);if(!e||!OL(e))return;const t=n.getItem(vR);if(t)try{return JSON.parse(t)}catch{return}}function CL(n){const e=Dt.getInstance().localStorage;!n||!e||(e.setItem(vR,JSON.stringify(n)),e.setItem(ER,String(Date.now()+un.getInstance().configTimeToLive*60*60*1e3)))}const NL="Could not fetch config, will use default configs";function DL(n,e){return dL(n.installations).then(t=>{const s=bL(n.app),o=wL(n.app),u=`https://firebaseremoteconfig.googleapis.com/v1/projects/${s}/namespaces/fireperf:fetch?key=${o}`,h=new Request(u,{method:"POST",headers:{Authorization:`${SL} ${t}`},body:JSON.stringify({app_instance_id:e,app_instance_id_token:t,app_id:AR(n.app),app_version:hR,sdk_version:AL})});return fetch(h).then(d=>{if(d.ok)return d.json();throw Wt.create("RC response not ok")})}).catch(()=>{wi.info(NL)})}function hb(n){if(!n)return n;const e=un.getInstance(),t=n.entries||{};return t.fpr_enabled!==void 0?e.loggingEnabled=String(t.fpr_enabled)==="true":e.loggingEnabled=Sn.loggingEnabled,t.fpr_log_source?e.logSource=Number(t.fpr_log_source):Sn.logSource&&(e.logSource=Sn.logSource),t.fpr_log_endpoint_url?e.logEndPointUrl=t.fpr_log_endpoint_url:Sn.logEndPointUrl&&(e.logEndPointUrl=Sn.logEndPointUrl),t.fpr_log_transport_key?e.transportKey=t.fpr_log_transport_key:Sn.transportKey&&(e.transportKey=Sn.transportKey),t.fpr_vc_network_request_sampling_rate!==void 0?e.networkRequestsSamplingRate=Number(t.fpr_vc_network_request_sampling_rate):Sn.networkRequestsSamplingRate!==void 0&&(e.networkRequestsSamplingRate=Sn.networkRequestsSamplingRate),t.fpr_vc_trace_sampling_rate!==void 0?e.tracesSamplingRate=Number(t.fpr_vc_trace_sampling_rate):Sn.tracesSamplingRate!==void 0&&(e.tracesSamplingRate=Sn.tracesSamplingRate),t.fpr_log_max_flush_size?e.logMaxFlushSize=Number(t.fpr_log_max_flush_size):Sn.logMaxFlushSize&&(e.logMaxFlushSize=Sn.logMaxFlushSize),e.logTraceAfterSampling=fb(e.tracesSamplingRate),e.logNetworkAfterSampling=fb(e.networkRequestsSamplingRate),n}function OL(n){return Number(n)>Date.now()}function fb(n){return Math.random()<=n}/**
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
 */let jy=1,Pp;function SR(n){return jy=2,Pp=Pp||xL(n),Pp}function ML(){return jy===3}function xL(n){return PL().then(()=>fL(n.installations)).then(e=>RL(n,e)).then(()=>db(),()=>db())}function PL(){const n=Dt.getInstance().document;return new Promise(e=>{if(n&&n.readyState!=="complete"){const t=()=>{n.readyState==="complete"&&(n.removeEventListener("readystatechange",t),e())};n.addEventListener("readystatechange",t)}else e()})}function db(){jy=3}/**
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
 */const RR=10*1e3,kL=5.5*1e3,VL=1e3,IR=3,LL=65536,UL=new TextEncoder;let af=IR,Fn=[],mb=!1;function zL(){mb||(qy(kL),mb=!0)}function qy(n){setTimeout(()=>{af<=0||(Fn.length>0&&BL(),qy(RR))},n)}function BL(){const n=Fn.splice(0,VL),e=bg(n);jL(e).then(()=>{af=IR}).catch(()=>{Fn=[...n,...Fn],af--,wi.info(`Tries left: ${af}.`),qy(RR)})}function bg(n){const e=n.map(s=>({source_extension_json_proto3:s.message,event_time_ms:String(s.eventTime)})),t={request_time_ms:String(Date.now()),client_info:{client_type:1,js_client_info:{}},log_source:un.getInstance().logSource,log_event:e};return JSON.stringify(t)}function jL(n){const e=un.getInstance().getFlTransportFullUrl();return UL.encode(n).length<=LL&&navigator.sendBeacon&&navigator.sendBeacon(e,n)?Promise.resolve():fetch(e,{method:"POST",body:n})}function qL(n){if(!n.eventTime||!n.message)throw Wt.create("invalid cc log");Fn=[...Fn,n]}function FL(n){return(...e)=>{const t=n(...e);qL({message:t,eventTime:Date.now()})}}function HL(){const n=un.getInstance().getFlTransportFullUrl();for(;Fn.length>0;){const e=Fn.splice(-un.getInstance().logMaxFlushSize),t=bg(e);if(!(navigator.sendBeacon&&navigator.sendBeacon(n,t))){Fn=[...Fn,...e];break}}if(Fn.length>0){const e=bg(Fn);fetch(n,{method:"POST",body:e}).catch(()=>{wi.info("Failed flushing queued events.")})}}/**
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
 */let xu;function CR(n,e){xu||(xu={send:FL(KL),flush:HL}),xu.send(n,e)}function $h(n){const e=un.getInstance();!e.instrumentationEnabled&&n.isAuto||!e.dataCollectionEnabled&&!n.isAuto||Dt.getInstance().requiredApisAvailable()&&(ML()?kp(n):SR(n.performanceController).then(()=>kp(n),()=>kp(n)))}function GL(){xu&&xu.flush()}function kp(n){if(!By())return;const e=un.getInstance();!e.loggingEnabled||!e.logTraceAfterSampling||CR(n,1)}function $L(n){const e=un.getInstance();if(!e.instrumentationEnabled)return;const t=n.url,s=e.logEndPointUrl.split("?")[0],o=e.flTransportEndpointUrl.split("?")[0];t===s||t===o||!e.loggingEnabled||!e.logNetworkAfterSampling||CR(n,0)}function KL(n,e){return e===0?QL(n):YL(n)}function QL(n){const e={url:n.url,http_method:n.httpMethod||0,http_response_code:200,response_payload_bytes:n.responsePayloadBytes,client_start_time_us:n.startTimeUs,time_to_response_initiated_us:n.timeToResponseInitiatedUs,time_to_response_completed_us:n.timeToResponseCompletedUs},t={application_info:NR(n.performanceController.app),network_request_metric:e};return JSON.stringify(t)}function YL(n){const e={name:n.name,is_auto:n.isAuto,client_start_time_us:n.startTimeUs,duration_us:n.durationUs};Object.keys(n.counters).length!==0&&(e.counters=n.counters);const t=n.getAttributes();Object.keys(t).length!==0&&(e.custom_attributes=t);const s={application_info:NR(n.performanceController.app),trace_metric:e};return JSON.stringify(s)}function NR(n){return{google_app_id:AR(n),app_instance_id:By(),web_app_info:{sdk_version:hR,page_url:Dt.getInstance().getUrl(),service_worker_status:yL(),visibility_state:_L(),effective_connection_type:vL()},application_process_state:0}}/**
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
 */function pb(n,e){const t=e;if(!t||t.responseStart===void 0)return;const s=Dt.getInstance().getTimeOrigin(),o=Math.floor((t.startTime+s)*1e3),u=t.responseStart?Math.floor((t.responseStart-t.startTime)*1e3):void 0,h=Math.floor((t.responseEnd-t.startTime)*1e3),d=t.name&&t.name.split("?")[0],p={performanceController:n,url:d,responsePayloadBytes:t.transferSize,startTimeUs:o,timeToResponseInitiatedUs:u,timeToResponseCompletedUs:h};$L(p)}/**
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
 */const XL=100,WL="_",ZL=[dR,mR,pR,gR,_R,yR];function JL(n,e){return n.length===0||n.length>XL?!1:e&&e.startsWith(fR)&&ZL.indexOf(n)>-1||!n.startsWith(WL)}function eU(n){const e=Math.floor(n);return e<n&&wi.info(`Metric value should be an Integer, setting the value as : ${e}.`),e}/**
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
 */class Gu{constructor(e,t,s=!1,o){this.performanceController=e,this.name=t,this.isAuto=s,this.state=1,this.customAttributes={},this.counters={},this.api=Dt.getInstance(),this.randomId=Math.floor(Math.random()*1e6),this.isAuto||(this.traceStartMark=`${iL}-${this.randomId}-${this.name}`,this.traceStopMark=`${sL}-${this.randomId}-${this.name}`,this.traceMeasure=o||`${Eg}-${this.randomId}-${this.name}`,o&&this.calculateTraceMetrics())}start(){if(this.state!==1)throw Wt.create("trace started",{traceName:this.name});this.api.mark(this.traceStartMark),this.state=2}stop(){if(this.state!==2)throw Wt.create("trace stopped",{traceName:this.name});this.state=3,this.api.mark(this.traceStopMark),this.api.measure(this.traceMeasure,this.traceStartMark,this.traceStopMark),this.calculateTraceMetrics(),$h(this)}record(e,t,s){if(e<=0)throw Wt.create("nonpositive trace startTime",{traceName:this.name});if(t<=0)throw Wt.create("nonpositive trace duration",{traceName:this.name});if(this.durationUs=Math.floor(t*1e3),this.startTimeUs=Math.floor(e*1e3),s&&s.attributes&&(this.customAttributes={...s.attributes}),s&&s.metrics)for(const o of Object.keys(s.metrics))isNaN(Number(s.metrics[o]))||(this.counters[o]=Math.floor(Number(s.metrics[o])));$h(this)}incrementMetric(e,t=1){this.counters[e]===void 0?this.putMetric(e,t):this.putMetric(e,this.counters[e]+t)}putMetric(e,t){if(JL(e,this.name))this.counters[e]=eU(t??0);else throw Wt.create("invalid custom metric name",{customMetricName:e})}getMetric(e){return this.counters[e]||0}putAttribute(e,t){const s=EL(e),o=TL(t);if(s&&o){this.customAttributes[e]=t;return}if(!s)throw Wt.create("invalid attribute name",{attributeName:e});if(!o)throw Wt.create("invalid attribute value",{attributeValue:t})}getAttribute(e){return this.customAttributes[e]}removeAttribute(e){this.customAttributes[e]!==void 0&&delete this.customAttributes[e]}getAttributes(){return{...this.customAttributes}}setStartTime(e){this.startTimeUs=e}setDuration(e){this.durationUs=e}calculateTraceMetrics(){const e=this.api.getEntriesByName(this.traceMeasure),t=e&&e[0];t&&(this.durationUs=Math.floor(t.duration*1e3),this.startTimeUs=Math.floor((t.startTime+this.api.getTimeOrigin())*1e3))}static createOobTrace(e,t,s,o,u){const h=Dt.getInstance().getUrl();if(!h)return;const d=new Gu(e,fR+h,!0),p=Math.floor(Dt.getInstance().getTimeOrigin()*1e3);d.setStartTime(p),t&&t[0]&&(d.setDuration(Math.floor(t[0].duration*1e3)),d.putMetric("domInteractive",Math.floor(t[0].domInteractive*1e3)),d.putMetric("domContentLoadedEventEnd",Math.floor(t[0].domContentLoadedEventEnd*1e3)),d.putMetric("loadEventEnd",Math.floor(t[0].loadEventEnd*1e3)));const y="first-paint",E="first-contentful-paint";if(s){const w=s.find(k=>k.name===y);w&&w.startTime&&d.putMetric(dR,Math.floor(w.startTime*1e3));const A=s.find(k=>k.name===E);A&&A.startTime&&d.putMetric(mR,Math.floor(A.startTime*1e3)),u&&d.putMetric(pR,Math.floor(u*1e3))}this.addWebVitalMetric(d,gR,aL,o.lcp),this.addWebVitalMetric(d,_R,lL,o.cls),this.addWebVitalMetric(d,yR,oL,o.inp),$h(d),GL()}static addWebVitalMetric(e,t,s,o){o&&(e.putMetric(t,Math.floor(o.value*1e3)),o.elementAttribution&&(o.elementAttribution.length>Tg?e.putAttribute(s,o.elementAttribution.substring(0,Tg)):e.putAttribute(s,o.elementAttribution)))}static createUserTimingTrace(e,t){const s=new Gu(e,t,!1,t);$h(s)}}/**
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
 */let of={},gb=!1,DR;function yb(n){By()&&(setTimeout(()=>nU(n),0),setTimeout(()=>tU(n),0),setTimeout(()=>rU(n),0))}function tU(n){const e=Dt.getInstance(),t=e.getEntriesByType("resource");for(const s of t)pb(n,s);e.setupObserver("resource",s=>pb(n,s))}function nU(n){const e=Dt.getInstance();"onpagehide"in window?e.document.addEventListener("pagehide",()=>Vp(n)):e.document.addEventListener("unload",()=>Vp(n)),e.document.addEventListener("visibilitychange",()=>{e.document.visibilityState==="hidden"&&Vp(n)}),e.onFirstInputDelay&&e.onFirstInputDelay(t=>{DR=t}),e.onLCP(t=>{of.lcp={value:t.value,elementAttribution:t.attribution?.element}}),e.onCLS(t=>{of.cls={value:t.value,elementAttribution:t.attribution?.largestShiftTarget}}),e.onINP(t=>{of.inp={value:t.value,elementAttribution:t.attribution?.interactionTarget}})}function rU(n){const e=Dt.getInstance(),t=e.getEntriesByType("measure");for(const s of t)_b(n,s);e.setupObserver("measure",s=>_b(n,s))}function _b(n,e){const t=e.name;t.substring(0,Eg.length)!==Eg&&Gu.createUserTimingTrace(n,t)}function Vp(n){if(!gb){gb=!0;const e=Dt.getInstance(),t=e.getEntriesByType("navigation"),s=e.getEntriesByType("paint");setTimeout(()=>{Gu.createOobTrace(n,t,s,of,DR)},0)}}/**
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
 */class iU{constructor(e,t){this.app=e,this.installations=t,this.initialized=!1}_init(e){this.initialized||(e?.dataCollectionEnabled!==void 0&&(this.dataCollectionEnabled=e.dataCollectionEnabled),e?.instrumentationEnabled!==void 0&&(this.instrumentationEnabled=e.instrumentationEnabled),Dt.getInstance().requiredApisAvailable()?Mg().then(t=>{t&&(zL(),SR(this).then(()=>yb(this),()=>yb(this)),this.initialized=!0)}).catch(t=>{wi.info(`Environment doesn't support IndexedDB: ${t}`)}):wi.info('Firebase Performance cannot start if the browser does not support "Fetch" and "Promise", or cookies are disabled.'))}set instrumentationEnabled(e){un.getInstance().instrumentationEnabled=e}get instrumentationEnabled(){return un.getInstance().instrumentationEnabled}set dataCollectionEnabled(e){un.getInstance().dataCollectionEnabled=e}get dataCollectionEnabled(){return un.getInstance().dataCollectionEnabled}}const sU="[DEFAULT]";function aU(n=Ju()){return n=Ye(n),Ai(n,"performance").getImmediate()}const oU=(n,{options:e})=>{const t=n.getProvider("app").getImmediate(),s=n.getProvider("installations-internal").getImmediate();if(t.name!==sU)throw Wt.create("FB not default");if(typeof window>"u")throw Wt.create("no window");hL(window);const o=new iU(t,s);return o._init(e),o};function lU(){Kn(new Nn("performance",oU,"PUBLIC")),Jt(ub,vg),Jt(ub,vg,"esm2020")}lU();function uU(){const n=[];if(n.push("VITE_FIREBASE_API_KEY"),n.push("VITE_FIREBASE_AUTH_DOMAIN"),n.push("VITE_FIREBASE_PROJECT_ID"),n.push("VITE_FIREBASE_STORAGE_BUCKET"),n.push("VITE_FIREBASE_MESSAGING_SENDER_ID"),n.push("VITE_FIREBASE_APP_ID"),n.length>0)throw new Error(`Missing Firebase environment variables: ${n.join(", ")}. Create a .env.local with VITE_ variables as documented in README.`)}uU();const cU={apiKey:"",authDomain:"",projectId:"",storageBucket:"",messagingSenderId:"",appId:"",measurementId:""},$u=Jb(cU),ma=tM($u),O6=tk($u),M6=TV($u);let hU=null,fU=null;if(typeof window<"u")try{hU=B4($u),fU=aU($u),console.log("📊 Firebase Analytics & Performance 초기화됨")}catch(n){console.warn("⚠️ Analytics/Performance 초기화 실패:",n)}const OR=H.createContext(void 0);function dU(){const n=H.useContext(OR);if(n===void 0)throw new Error("useAuth must be used within an AuthProvider");return n}function mU({children:n}){const[e,t]=H.useState(null),[s,o]=H.useState(!0),[u,h]=H.useState(null);H.useEffect(()=>F2(ma,j=>{t(j),o(!1)}),[]);const k={user:e,loading:s,error:u,signInAnonymously:async()=>{try{h(null),o(!0),await M2(ma)}catch(x){h(x instanceof Error?x.message:"익명 로그인에 실패했습니다.")}finally{o(!1)}},signInWithEmailAndPassword:async(x,j)=>{try{h(null),o(!0),await U2(ma,x,j)}catch(V){throw h(V instanceof Error?V.message:"이메일 로그인에 실패했습니다."),V}finally{o(!1)}},signUpWithEmailAndPassword:async(x,j,V)=>{try{h(null),o(!0);const G=await L2(ma,x,j);return V&&G.user&&await B2(G.user,{displayName:V}),G}catch(G){throw h(G instanceof Error?G.message:"회원가입에 실패했습니다."),G}finally{o(!1)}},signInWithGoogle:async()=>{try{h(null),o(!0);const x=new di;await cO(ma,x)}catch(x){throw h(x instanceof Error?x.message:"Google 로그인에 실패했습니다."),x}finally{o(!1)}},resetPassword:async x=>{try{h(null),await V2(ma,x)}catch(j){throw h(j instanceof Error?j.message:"비밀번호 재설정에 실패했습니다."),j}},signOut:async()=>{try{return h(null),await H2(ma),{success:!0}}catch(x){const j=x instanceof Error?x.message:"로그아웃에 실패했습니다.";return h(j),{success:!1,error:j}}}};return J.jsx(OR.Provider,{value:k,children:n})}H.createContext(void 0);function pU(){return J.jsxs(J.Fragment,{children:[J.jsx("div",{className:"fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"}),J.jsx("div",{className:"fixed inset-0 bg-gradient-to-t from-black/90 via-transparent to-gray-900/60"}),J.jsx("div",{className:"fixed inset-0 opacity-20 pointer-events-none overflow-hidden",children:J.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent animate-pulse",style:{transform:"rotate(-12deg) scale(1.2)"}})}),J.jsx("div",{className:"fixed inset-0 opacity-60 pointer-events-none overflow-hidden",children:Array.from({length:60}).map((n,e)=>{const t=Math.random()*2+1,s=["#ffffff","#fbbf24","#60a5fa","#a855f7"],o=s[e%s.length];return J.jsx("div",{className:"absolute rounded-full",style:{width:`${t}px`,height:`${t}px`,left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,backgroundColor:o,animation:`twinkle ${Math.random()*3+2}s ease-in-out infinite ${Math.random()*2}s`,boxShadow:`0 0 ${t*3}px ${o}`,filter:"blur(0.2px)"}},`small-star-${e}`)})}),J.jsx("div",{className:"fixed inset-0 opacity-70 pointer-events-none overflow-hidden",children:Array.from({length:12}).map((n,e)=>{const t=Math.random()*3+3,s=["#ffffff","#fbbf24","#60a5fa","#f59e0b"],o=s[e%s.length];return J.jsx("div",{className:"absolute rounded-full",style:{width:`${t}px`,height:`${t}px`,left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,backgroundColor:o,animation:`twinkle ${Math.random()*4+3}s ease-in-out infinite ${Math.random()*3}s`,boxShadow:`0 0 ${t*4}px ${o}`,filter:"blur(0.3px)"}},`big-star-${e}`)})}),J.jsx("div",{className:"fixed inset-0 opacity-80 pointer-events-none overflow-hidden",children:Array.from({length:6}).map((n,e)=>{const s=[{left:"0%",top:"20%"},{left:"5%",top:"60%"},{left:"10%",top:"80%"},{left:"15%",top:"40%"},{left:"0%",top:"90%"},{left:"20%",top:"10%"}][e];return J.jsx("div",{className:"absolute w-2 h-2 bg-white rounded-full",style:{left:s.left,top:s.top,animation:`shooting-star ${Math.random()*2+4}s linear infinite ${Math.random()*3}s`,boxShadow:"0 0 15px #ffffff, 0 0 30px #ffffff",filter:"blur(0.2px)"}},`shooting-star-${e}`)})}),J.jsx("div",{className:"fixed inset-0 opacity-40 pointer-events-none overflow-hidden",children:Array.from({length:30}).map((n,e)=>{const t=Math.random()*1.5+.5;return J.jsx("div",{className:"absolute rounded-full bg-gray-300",style:{width:`${t}px`,height:`${t}px`,left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animation:`float ${Math.random()*6+8}s ease-in-out infinite ${Math.random()*4}s`,filter:"blur(0.3px)"}},`dust-${e}`)})}),J.jsx("div",{className:"fixed inset-0 bg-gradient-to-br from-transparent via-blue-900/3 to-purple-900/3"})]})}function MR(n){var e,t,s="";if(typeof n=="string"||typeof n=="number")s+=n;else if(typeof n=="object")if(Array.isArray(n)){var o=n.length;for(e=0;e<o;e++)n[e]&&(t=MR(n[e]))&&(s&&(s+=" "),s+=t)}else for(t in n)n[t]&&(s&&(s+=" "),s+=t);return s}function gU(){for(var n,e,t=0,s="",o=arguments.length;t<o;t++)(n=arguments[t])&&(e=MR(n))&&(s&&(s+=" "),s+=e);return s}const Fy="-",yU=n=>{const e=vU(n),{conflictingClassGroups:t,conflictingClassGroupModifiers:s}=n;return{getClassGroupId:h=>{const d=h.split(Fy);return d[0]===""&&d.length!==1&&d.shift(),xR(d,e)||_U(h)},getConflictingClassGroupIds:(h,d)=>{const p=t[h]||[];return d&&s[h]?[...p,...s[h]]:p}}},xR=(n,e)=>{if(n.length===0)return e.classGroupId;const t=n[0],s=e.nextPart.get(t),o=s?xR(n.slice(1),s):void 0;if(o)return o;if(e.validators.length===0)return;const u=n.join(Fy);return e.validators.find(({validator:h})=>h(u))?.classGroupId},vb=/^\[(.+)\]$/,_U=n=>{if(vb.test(n)){const e=vb.exec(n)[1],t=e?.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}},vU=n=>{const{theme:e,prefix:t}=n,s={nextPart:new Map,validators:[]};return TU(Object.entries(n.classGroups),t).forEach(([u,h])=>{wg(h,s,u,e)}),s},wg=(n,e,t,s)=>{n.forEach(o=>{if(typeof o=="string"){const u=o===""?e:Eb(e,o);u.classGroupId=t;return}if(typeof o=="function"){if(EU(o)){wg(o(s),e,t,s);return}e.validators.push({validator:o,classGroupId:t});return}Object.entries(o).forEach(([u,h])=>{wg(h,Eb(e,u),t,s)})})},Eb=(n,e)=>{let t=n;return e.split(Fy).forEach(s=>{t.nextPart.has(s)||t.nextPart.set(s,{nextPart:new Map,validators:[]}),t=t.nextPart.get(s)}),t},EU=n=>n.isThemeGetter,TU=(n,e)=>e?n.map(([t,s])=>{const o=s.map(u=>typeof u=="string"?e+u:typeof u=="object"?Object.fromEntries(Object.entries(u).map(([h,d])=>[e+h,d])):u);return[t,o]}):n,bU=n=>{if(n<1)return{get:()=>{},set:()=>{}};let e=0,t=new Map,s=new Map;const o=(u,h)=>{t.set(u,h),e++,e>n&&(e=0,s=t,t=new Map)};return{get(u){let h=t.get(u);if(h!==void 0)return h;if((h=s.get(u))!==void 0)return o(u,h),h},set(u,h){t.has(u)?t.set(u,h):o(u,h)}}},PR="!",wU=n=>{const{separator:e,experimentalParseClassName:t}=n,s=e.length===1,o=e[0],u=e.length,h=d=>{const p=[];let y=0,E=0,w;for(let V=0;V<d.length;V++){let G=d[V];if(y===0){if(G===o&&(s||d.slice(V,V+u)===e)){p.push(d.slice(E,V)),E=V+u;continue}if(G==="/"){w=V;continue}}G==="["?y++:G==="]"&&y--}const A=p.length===0?d:d.substring(E),k=A.startsWith(PR),x=k?A.substring(1):A,j=w&&w>E?w-E:void 0;return{modifiers:p,hasImportantModifier:k,baseClassName:x,maybePostfixModifierPosition:j}};return t?d=>t({className:d,parseClassName:h}):h},AU=n=>{if(n.length<=1)return n;const e=[];let t=[];return n.forEach(s=>{s[0]==="["?(e.push(...t.sort(),s),t=[]):t.push(s)}),e.push(...t.sort()),e},SU=n=>({cache:bU(n.cacheSize),parseClassName:wU(n),...yU(n)}),RU=/\s+/,IU=(n,e)=>{const{parseClassName:t,getClassGroupId:s,getConflictingClassGroupIds:o}=e,u=[],h=n.trim().split(RU);let d="";for(let p=h.length-1;p>=0;p-=1){const y=h[p],{modifiers:E,hasImportantModifier:w,baseClassName:A,maybePostfixModifierPosition:k}=t(y);let x=!!k,j=s(x?A.substring(0,k):A);if(!j){if(!x){d=y+(d.length>0?" "+d:d);continue}if(j=s(A),!j){d=y+(d.length>0?" "+d:d);continue}x=!1}const V=AU(E).join(":"),G=w?V+PR:V,te=G+j;if(u.includes(te))continue;u.push(te);const ee=o(j,x);for(let oe=0;oe<ee.length;++oe){const ae=ee[oe];u.push(G+ae)}d=y+(d.length>0?" "+d:d)}return d};function CU(){let n=0,e,t,s="";for(;n<arguments.length;)(e=arguments[n++])&&(t=kR(e))&&(s&&(s+=" "),s+=t);return s}const kR=n=>{if(typeof n=="string")return n;let e,t="";for(let s=0;s<n.length;s++)n[s]&&(e=kR(n[s]))&&(t&&(t+=" "),t+=e);return t};function NU(n,...e){let t,s,o,u=h;function h(p){const y=e.reduce((E,w)=>w(E),n());return t=SU(y),s=t.cache.get,o=t.cache.set,u=d,d(p)}function d(p){const y=s(p);if(y)return y;const E=IU(p,t);return o(p,E),E}return function(){return u(CU.apply(null,arguments))}}const Ze=n=>{const e=t=>t[n]||[];return e.isThemeGetter=!0,e},VR=/^\[(?:([a-z-]+):)?(.+)\]$/i,DU=/^\d+\/\d+$/,OU=new Set(["px","full","screen"]),MU=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,xU=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,PU=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,kU=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,VU=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,fi=n=>Uo(n)||OU.has(n)||DU.test(n),rs=n=>tl(n,"length",HU),Uo=n=>!!n&&!Number.isNaN(Number(n)),Lp=n=>tl(n,"number",Uo),mu=n=>!!n&&Number.isInteger(Number(n)),LU=n=>n.endsWith("%")&&Uo(n.slice(0,-1)),Te=n=>VR.test(n),is=n=>MU.test(n),UU=new Set(["length","size","percentage"]),zU=n=>tl(n,UU,LR),BU=n=>tl(n,"position",LR),jU=new Set(["image","url"]),qU=n=>tl(n,jU,$U),FU=n=>tl(n,"",GU),pu=()=>!0,tl=(n,e,t)=>{const s=VR.exec(n);return s?s[1]?typeof e=="string"?s[1]===e:e.has(s[1]):t(s[2]):!1},HU=n=>xU.test(n)&&!PU.test(n),LR=()=>!1,GU=n=>kU.test(n),$U=n=>VU.test(n),KU=()=>{const n=Ze("colors"),e=Ze("spacing"),t=Ze("blur"),s=Ze("brightness"),o=Ze("borderColor"),u=Ze("borderRadius"),h=Ze("borderSpacing"),d=Ze("borderWidth"),p=Ze("contrast"),y=Ze("grayscale"),E=Ze("hueRotate"),w=Ze("invert"),A=Ze("gap"),k=Ze("gradientColorStops"),x=Ze("gradientColorStopPositions"),j=Ze("inset"),V=Ze("margin"),G=Ze("opacity"),te=Ze("padding"),ee=Ze("saturate"),oe=Ze("scale"),ae=Ze("sepia"),fe=Ze("skew"),D=Ze("space"),S=Ze("translate"),R=()=>["auto","contain","none"],O=()=>["auto","hidden","clip","visible","scroll"],P=()=>["auto",Te,e],M=()=>[Te,e],C=()=>["",fi,rs],pt=()=>["auto",Uo,Te],Ot=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],K=()=>["solid","dashed","dotted","double","none"],re=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ce=()=>["start","end","center","between","around","evenly","stretch"],Ne=()=>["","0",Te],Ve=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Ke=()=>[Uo,Te];return{cacheSize:500,separator:":",theme:{colors:[pu],spacing:[fi,rs],blur:["none","",is,Te],brightness:Ke(),borderColor:[n],borderRadius:["none","","full",is,Te],borderSpacing:M(),borderWidth:C(),contrast:Ke(),grayscale:Ne(),hueRotate:Ke(),invert:Ne(),gap:M(),gradientColorStops:[n],gradientColorStopPositions:[LU,rs],inset:P(),margin:P(),opacity:Ke(),padding:M(),saturate:Ke(),scale:Ke(),sepia:Ne(),skew:Ke(),space:M(),translate:M()},classGroups:{aspect:[{aspect:["auto","square","video",Te]}],container:["container"],columns:[{columns:[is]}],"break-after":[{"break-after":Ve()}],"break-before":[{"break-before":Ve()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Ot(),Te]}],overflow:[{overflow:O()}],"overflow-x":[{"overflow-x":O()}],"overflow-y":[{"overflow-y":O()}],overscroll:[{overscroll:R()}],"overscroll-x":[{"overscroll-x":R()}],"overscroll-y":[{"overscroll-y":R()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[j]}],"inset-x":[{"inset-x":[j]}],"inset-y":[{"inset-y":[j]}],start:[{start:[j]}],end:[{end:[j]}],top:[{top:[j]}],right:[{right:[j]}],bottom:[{bottom:[j]}],left:[{left:[j]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",mu,Te]}],basis:[{basis:P()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Te]}],grow:[{grow:Ne()}],shrink:[{shrink:Ne()}],order:[{order:["first","last","none",mu,Te]}],"grid-cols":[{"grid-cols":[pu]}],"col-start-end":[{col:["auto",{span:["full",mu,Te]},Te]}],"col-start":[{"col-start":pt()}],"col-end":[{"col-end":pt()}],"grid-rows":[{"grid-rows":[pu]}],"row-start-end":[{row:["auto",{span:[mu,Te]},Te]}],"row-start":[{"row-start":pt()}],"row-end":[{"row-end":pt()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Te]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Te]}],gap:[{gap:[A]}],"gap-x":[{"gap-x":[A]}],"gap-y":[{"gap-y":[A]}],"justify-content":[{justify:["normal",...ce()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...ce(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...ce(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[te]}],px:[{px:[te]}],py:[{py:[te]}],ps:[{ps:[te]}],pe:[{pe:[te]}],pt:[{pt:[te]}],pr:[{pr:[te]}],pb:[{pb:[te]}],pl:[{pl:[te]}],m:[{m:[V]}],mx:[{mx:[V]}],my:[{my:[V]}],ms:[{ms:[V]}],me:[{me:[V]}],mt:[{mt:[V]}],mr:[{mr:[V]}],mb:[{mb:[V]}],ml:[{ml:[V]}],"space-x":[{"space-x":[D]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[D]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",Te,e]}],"min-w":[{"min-w":[Te,e,"min","max","fit"]}],"max-w":[{"max-w":[Te,e,"none","full","min","max","fit","prose",{screen:[is]},is]}],h:[{h:[Te,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[Te,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[Te,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[Te,e,"auto","min","max","fit"]}],"font-size":[{text:["base",is,rs]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Lp]}],"font-family":[{font:[pu]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Te]}],"line-clamp":[{"line-clamp":["none",Uo,Lp]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",fi,Te]}],"list-image":[{"list-image":["none",Te]}],"list-style-type":[{list:["none","disc","decimal",Te]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[n]}],"placeholder-opacity":[{"placeholder-opacity":[G]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[n]}],"text-opacity":[{"text-opacity":[G]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...K(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",fi,rs]}],"underline-offset":[{"underline-offset":["auto",fi,Te]}],"text-decoration-color":[{decoration:[n]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:M()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Te]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Te]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[G]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Ot(),BU]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",zU]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},qU]}],"bg-color":[{bg:[n]}],"gradient-from-pos":[{from:[x]}],"gradient-via-pos":[{via:[x]}],"gradient-to-pos":[{to:[x]}],"gradient-from":[{from:[k]}],"gradient-via":[{via:[k]}],"gradient-to":[{to:[k]}],rounded:[{rounded:[u]}],"rounded-s":[{"rounded-s":[u]}],"rounded-e":[{"rounded-e":[u]}],"rounded-t":[{"rounded-t":[u]}],"rounded-r":[{"rounded-r":[u]}],"rounded-b":[{"rounded-b":[u]}],"rounded-l":[{"rounded-l":[u]}],"rounded-ss":[{"rounded-ss":[u]}],"rounded-se":[{"rounded-se":[u]}],"rounded-ee":[{"rounded-ee":[u]}],"rounded-es":[{"rounded-es":[u]}],"rounded-tl":[{"rounded-tl":[u]}],"rounded-tr":[{"rounded-tr":[u]}],"rounded-br":[{"rounded-br":[u]}],"rounded-bl":[{"rounded-bl":[u]}],"border-w":[{border:[d]}],"border-w-x":[{"border-x":[d]}],"border-w-y":[{"border-y":[d]}],"border-w-s":[{"border-s":[d]}],"border-w-e":[{"border-e":[d]}],"border-w-t":[{"border-t":[d]}],"border-w-r":[{"border-r":[d]}],"border-w-b":[{"border-b":[d]}],"border-w-l":[{"border-l":[d]}],"border-opacity":[{"border-opacity":[G]}],"border-style":[{border:[...K(),"hidden"]}],"divide-x":[{"divide-x":[d]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[d]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[G]}],"divide-style":[{divide:K()}],"border-color":[{border:[o]}],"border-color-x":[{"border-x":[o]}],"border-color-y":[{"border-y":[o]}],"border-color-s":[{"border-s":[o]}],"border-color-e":[{"border-e":[o]}],"border-color-t":[{"border-t":[o]}],"border-color-r":[{"border-r":[o]}],"border-color-b":[{"border-b":[o]}],"border-color-l":[{"border-l":[o]}],"divide-color":[{divide:[o]}],"outline-style":[{outline:["",...K()]}],"outline-offset":[{"outline-offset":[fi,Te]}],"outline-w":[{outline:[fi,rs]}],"outline-color":[{outline:[n]}],"ring-w":[{ring:C()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[n]}],"ring-opacity":[{"ring-opacity":[G]}],"ring-offset-w":[{"ring-offset":[fi,rs]}],"ring-offset-color":[{"ring-offset":[n]}],shadow:[{shadow:["","inner","none",is,FU]}],"shadow-color":[{shadow:[pu]}],opacity:[{opacity:[G]}],"mix-blend":[{"mix-blend":[...re(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":re()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[s]}],contrast:[{contrast:[p]}],"drop-shadow":[{"drop-shadow":["","none",is,Te]}],grayscale:[{grayscale:[y]}],"hue-rotate":[{"hue-rotate":[E]}],invert:[{invert:[w]}],saturate:[{saturate:[ee]}],sepia:[{sepia:[ae]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[s]}],"backdrop-contrast":[{"backdrop-contrast":[p]}],"backdrop-grayscale":[{"backdrop-grayscale":[y]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[E]}],"backdrop-invert":[{"backdrop-invert":[w]}],"backdrop-opacity":[{"backdrop-opacity":[G]}],"backdrop-saturate":[{"backdrop-saturate":[ee]}],"backdrop-sepia":[{"backdrop-sepia":[ae]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[h]}],"border-spacing-x":[{"border-spacing-x":[h]}],"border-spacing-y":[{"border-spacing-y":[h]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Te]}],duration:[{duration:Ke()}],ease:[{ease:["linear","in","out","in-out",Te]}],delay:[{delay:Ke()}],animate:[{animate:["none","spin","ping","pulse","bounce",Te]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[oe]}],"scale-x":[{"scale-x":[oe]}],"scale-y":[{"scale-y":[oe]}],rotate:[{rotate:[mu,Te]}],"translate-x":[{"translate-x":[S]}],"translate-y":[{"translate-y":[S]}],"skew-x":[{"skew-x":[fe]}],"skew-y":[{"skew-y":[fe]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Te]}],accent:[{accent:["auto",n]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Te]}],"caret-color":[{caret:[n]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":M()}],"scroll-mx":[{"scroll-mx":M()}],"scroll-my":[{"scroll-my":M()}],"scroll-ms":[{"scroll-ms":M()}],"scroll-me":[{"scroll-me":M()}],"scroll-mt":[{"scroll-mt":M()}],"scroll-mr":[{"scroll-mr":M()}],"scroll-mb":[{"scroll-mb":M()}],"scroll-ml":[{"scroll-ml":M()}],"scroll-p":[{"scroll-p":M()}],"scroll-px":[{"scroll-px":M()}],"scroll-py":[{"scroll-py":M()}],"scroll-ps":[{"scroll-ps":M()}],"scroll-pe":[{"scroll-pe":M()}],"scroll-pt":[{"scroll-pt":M()}],"scroll-pr":[{"scroll-pr":M()}],"scroll-pb":[{"scroll-pb":M()}],"scroll-pl":[{"scroll-pl":M()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Te]}],fill:[{fill:[n,"none"]}],"stroke-w":[{stroke:[fi,rs,Lp]}],stroke:[{stroke:[n,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},QU=NU(KU);function Ku(...n){return QU(gU(n))}const cs=({children:n,onClick:e,variant:t="primary",size:s="md",className:o,ariaLabel:u,disabled:h=!1,...d})=>{const[p,y]=H.useState(!1),E=()=>{h||(y(!0),setTimeout(()=>y(!1),600),e?.())},w={primary:"bg-primary-500/20 backdrop-blur-xl border border-primary-300/30 text-white hover:bg-primary-400/30",secondary:"bg-glass-medium backdrop-blur-md border border-white/20 text-white/90 hover:bg-glass-strong",ghost:"bg-glass-light backdrop-blur-sm border border-white/10 text-white/80 hover:bg-glass-medium",travel:"bg-gradient-to-r from-travel-blue/20 to-travel-purple/20 backdrop-blur-lg border border-travel-blue/30 text-white hover:from-travel-blue/30 hover:to-travel-purple/30"},A={sm:"px-4 py-2 text-sm",md:"px-6 py-3 text-base",lg:"px-8 py-4 text-lg"};return J.jsxs("button",{onClick:E,"aria-label":u,disabled:h,className:Ku("relative overflow-hidden rounded-xl font-semibold transition-all duration-300","active:scale-95 transform focus:outline-none focus:ring-2 focus:ring-white/50","touch-manipulation transform-gpu will-change-transform","flex items-center justify-center",w[t],A[s],h&&"opacity-50 cursor-not-allowed",o),...d,children:[J.jsx("div",{className:Ku("absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent","wave-animation",h&&"hidden")}),p&&J.jsx("div",{className:"absolute inset-0 bg-white/20 wave-ripple rounded-xl"}),J.jsx("span",{className:"relative z-10 break-keep-ko flex items-center justify-center w-full h-full",children:n})]})},YU=({children:n,className:e,variant:t="default",withWaveEffect:s=!1,hoverable:o=!0,onClick:u,onKeyDown:h,...d})=>{const p={default:"bg-glass-light backdrop-blur-md border border-white/20",strong:"bg-glass-strong backdrop-blur-xl border border-white/30",light:"bg-glass-light backdrop-blur-sm border border-white/10",travel:"bg-gradient-to-br from-primary-500/10 via-glass-medium to-travel-blue/10 backdrop-blur-lg border border-primary-300/20"},y=E=>{u&&(E.key==="Enter"||E.key===" ")&&(E.preventDefault(),u(E)),h?.(E)};return J.jsxs("div",{className:Ku(p[t],"rounded-2xl p-6 shadow-lg",o&&"transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:translate-y-[-2px] hover:shadow-xl",s&&"relative overflow-hidden","transform-gpu will-change-transform",e),onClick:u,onKeyDown:y,role:u?"button":void 0,tabIndex:u?0:void 0,...d,children:[s&&J.jsxs("div",{className:"absolute inset-0 overflow-hidden rounded-2xl",children:[J.jsx("div",{className:"absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent wave-animation"}),J.jsx("div",{className:"absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent wave-animation",style:{animationDelay:"1s"}})]}),J.jsx("div",{className:Ku("relative z-10",s&&"relative"),children:n})]})},pa=[{id:"1",title:"Glass Vault",artist:"Moonwave",audioUrl:"/Music/10. Glass Vault.mp3"},{id:"2",title:"Null Error Grace Part1",artist:"Moonwave",audioUrl:"/Music/11. Null Error Grace Part1.mp3"},{id:"3",title:"Shine Bright",artist:"Moonwave",audioUrl:"/Music/13. Shine Bright.mp3"},{id:"4",title:"Moonwave",artist:"Moonwave",audioUrl:"/Music/17. Moonwave.mp3"},{id:"5",title:"Phantom Fairy",artist:"Moonwave",audioUrl:"/Music/5. Phantom Fairy.mp3"}];function XU(){const{user:n}=dU(),e=H.useRef(null),[t,s]=H.useState(0),[o,u]=H.useState(!1),[h,d]=H.useState(0),[p,y]=H.useState(0),[E,w]=H.useState(.7),[A,k]=H.useState(!1),[x,j]=H.useState(!0),V=pa[t];H.useEffect(()=>{const ae=e.current;if(!ae)return;const fe=()=>d(ae.currentTime),D=()=>y(ae.duration),S=()=>{u(!1);const R=x?Math.floor(Math.random()*pa.length):(t+1)%pa.length;s(R),setTimeout(async()=>{const O=e.current;if(O)try{await O.play(),u(!0)}catch(P){console.error("자동 재생 실패:",P),u(!1)}},500)};return ae.addEventListener("timeupdate",fe),ae.addEventListener("durationchange",D),ae.addEventListener("ended",S),()=>{ae.removeEventListener("timeupdate",fe),ae.removeEventListener("durationchange",D),ae.removeEventListener("ended",S)}},[t,x]),H.useEffect(()=>{const ae=e.current;ae&&(ae.volume=A?0:E)},[E,A]),H.useEffect(()=>{d(0),y(0),u(!1)},[t]);const G=async()=>{const ae=e.current;if(ae)try{o?(ae.pause(),u(!1)):(await ae.play(),u(!0))}catch(fe){console.error("재생 오류:",fe),u(!1)}},te=async()=>{const ae=x?Math.floor(Math.random()*pa.length):t>0?t-1:pa.length-1;s(ae),setTimeout(async()=>{const fe=e.current;if(fe)try{await fe.play(),u(!0)}catch(D){console.error("자동 재생 실패:",D),u(!1)}},100)},ee=async()=>{const ae=x?Math.floor(Math.random()*pa.length):(t+1)%pa.length;s(ae),setTimeout(async()=>{const fe=e.current;if(fe)try{await fe.play(),u(!0)}catch(D){console.error("자동 재생 실패:",D),u(!1)}},100)},oe=ae=>{if(isNaN(ae))return"0:00";const fe=Math.floor(ae/60),D=Math.floor(ae%60);return`${fe}:${D.toString().padStart(2,"0")}`};return n?J.jsx("div",{className:"fixed bottom-4 left-4 right-4 z-50",children:J.jsxs(YU,{variant:"strong",className:"p-4 backdrop-blur-xl",children:[J.jsx("audio",{ref:e,src:V.audioUrl,preload:"metadata"}),J.jsxs("div",{className:"flex items-center space-x-4",children:[J.jsxs("div",{className:"flex-1 min-w-0",children:[J.jsx("div",{className:"text-white font-medium text-sm truncate",children:V.title}),J.jsx("div",{className:"text-white/60 text-xs truncate",children:V.artist})]}),J.jsxs("div",{className:"flex items-center space-x-2",children:[J.jsx(cs,{variant:"ghost",size:"sm",onClick:()=>j(!x),className:Ku("p-2",x?"text-primary-400":"text-white/60"),ariaLabel:"셔플 모드",children:J.jsx(l1,{className:"w-4 h-4"})}),J.jsx(cs,{variant:"ghost",size:"sm",onClick:te,className:"p-2 text-white/80 hover:text-white",ariaLabel:"이전 트랙",children:J.jsx(u1,{className:"w-4 h-4"})}),J.jsx(cs,{variant:"primary",size:"sm",onClick:G,className:"p-3",ariaLabel:o?"일시정지":"재생",children:o?J.jsx(c1,{className:"w-4 h-4"}):J.jsx(h1,{className:"w-4 h-4"})}),J.jsx(cs,{variant:"ghost",size:"sm",onClick:ee,className:"p-2 text-white/80 hover:text-white",ariaLabel:"다음 트랙",children:J.jsx(f1,{className:"w-4 h-4"})}),J.jsxs("div",{className:"hidden sm:flex items-center space-x-2",children:[J.jsx(cs,{variant:"ghost",size:"sm",onClick:()=>k(!A),className:"p-2 text-white/80 hover:text-white",ariaLabel:A?"음소거 해제":"음소거",children:A?J.jsx(d1,{className:"w-4 h-4"}):J.jsx(m1,{className:"w-4 h-4"})}),J.jsx("input",{type:"range",min:"0",max:"1",step:"0.1",value:E,onChange:ae=>w(parseFloat(ae.target.value)),className:"w-20 h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"})]}),J.jsxs("div",{className:"hidden md:block text-xs text-white/60 min-w-[80px] text-right",children:[oe(h)," / ",oe(p)]})]})]}),J.jsx("div",{className:"mt-3",children:J.jsx("div",{className:"w-full h-1 bg-white/20 rounded-full overflow-hidden",children:J.jsx("div",{className:"h-full bg-gradient-to-r from-primary-400 to-primary-600 transition-all duration-300",style:{width:p>0?`${h/p*100}%`:"0%"}})})})]})}):null}function WU(){return lr().pathname==="/login"?null:J.jsx("div",{className:"px-4 pb-4",children:J.jsx(XU,{})})}function ZU(){const n=lr(),e=n.pathname==="/",t=n.pathname==="/settings",s=n.pathname==="/trip-map";return J.jsx("header",{className:"fixed top-0 left-0 right-0 z-50 p-4",role:"banner","aria-label":"페이지 상단 네비게이션",children:J.jsx("div",{className:"max-w-7xl mx-auto",children:J.jsxs("div",{className:"flex items-center justify-between",children:[J.jsx("div",{className:"flex-shrink-0",children:J.jsx(bu,{to:"/",children:J.jsx(cs,{variant:e?"primary":"ghost",size:"sm",ariaLabel:"홈으로 이동",className:"p-2 hover:bg-white/30 active:scale-95 focus:ring-2 focus:ring-white/50 transition-all",children:J.jsx(p1,{size:20,className:"icon-enhanced"})})})}),J.jsxs("div",{className:"flex items-center space-x-2",children:[J.jsx(bu,{to:"/trip-map",children:J.jsx(cs,{variant:s?"primary":"ghost",size:"sm",ariaLabel:"지도로 이동",className:"p-2 hover:bg-white/30 active:scale-95 focus:ring-2 focus:ring-white/50 transition-all",children:J.jsx(g1,{size:20,className:"icon-enhanced"})})}),J.jsx(bu,{to:"/settings",children:J.jsx(cs,{variant:t?"primary":"ghost",size:"sm",ariaLabel:"설정으로 이동",className:"p-2 hover:bg-white/30 active:scale-95 focus:ring-2 focus:ring-white/50 transition-all",children:J.jsx(y1,{size:20,className:"icon-enhanced"})})})]})]})})})}function JU(){return lr().pathname==="/login"?null:J.jsx(ZU,{})}const e6=H.lazy(()=>or(()=>import("./Home-CJ_eXW9s.js"),__vite__mapDeps([0,1,2,3,4])).then(n=>({default:n.Home}))),t6=H.lazy(()=>or(()=>import("./TripCreate-WUI38FT2.js"),__vite__mapDeps([5,1,2,3])).then(n=>({default:n.TripCreate}))),n6=H.lazy(()=>or(()=>import("./TripEdit-BcYVEXPd.js"),__vite__mapDeps([6,1,2,7,3])).then(n=>({default:n.TripEdit}))),r6=H.lazy(()=>or(()=>import("./TripDetail-DkiD5_q0.js"),__vite__mapDeps([8,1,2,7,3,9,4])).then(n=>({default:n.TripDetail}))),Tb=H.lazy(()=>or(()=>import("./PlanDetail-C5MLyrDR.js"),__vite__mapDeps([10,1,2,7,3,4])).then(n=>({default:n.PlanDetail}))),i6=H.lazy(()=>or(()=>import("./PlaceSearch-BhxDjLrw.js"),__vite__mapDeps([11,1,2,7,3])).then(n=>({default:n.PlaceSearch}))),bb=H.lazy(()=>or(()=>import("./TripMap-DIpDLGwY.js"),__vite__mapDeps([12,1,2,9,4,13])).then(n=>({default:n.TripMap}))),s6=H.lazy(()=>or(()=>import("./Login-DTG-UBwZ.js"),__vite__mapDeps([14,1,2])).then(n=>({default:n.Login}))),a6=H.lazy(()=>or(()=>import("./Settings-COMfNbyt.js"),__vite__mapDeps([15,1,2,7])).then(n=>({default:n.Settings}))),o6=H.lazy(()=>or(()=>import("./AboutUs-DdpF3Ski.js"),__vite__mapDeps([16,1,2,3])).then(n=>({default:n.AboutUs}))),l6=H.lazy(()=>or(()=>import("./TermsOfService-CC88dSdf.js"),__vite__mapDeps([17,3,1,2])).then(n=>({default:n.TermsOfService}))),u6=()=>J.jsx("div",{className:"min-h-screen flex items-center justify-center",children:J.jsx("div",{className:"text-white text-xl",children:"Loading..."})});function c6(){return J.jsx(mU,{children:J.jsx(GC,{children:J.jsxs("div",{className:"min-h-screen relative",children:[J.jsx(pU,{}),J.jsx(JU,{}),J.jsx("div",{className:"relative z-10 min-h-screen",children:J.jsx(H.Suspense,{fallback:J.jsx(u6,{}),children:J.jsxs(TC,{children:[J.jsx(on,{path:"/",element:J.jsx(e6,{})}),J.jsx(on,{path:"/login",element:J.jsx(s6,{})}),J.jsx(on,{path:"/settings",element:J.jsx(a6,{})}),J.jsx(on,{path:"/about",element:J.jsx(o6,{})}),J.jsx(on,{path:"/terms",element:J.jsx(l6,{})}),J.jsx(on,{path:"/trips/new",element:J.jsx(t6,{})}),J.jsx(on,{path:"/trips/:id/edit",element:J.jsx(n6,{})}),J.jsx(on,{path:"/trips/:id",element:J.jsx(r6,{})}),J.jsx(on,{path:"/trips/:tripId/plans/new",element:J.jsx(Tb,{})}),J.jsx(on,{path:"/trips/:tripId/plans/:planId",element:J.jsx(Tb,{})}),J.jsx(on,{path:"/places/search",element:J.jsx(i6,{})}),J.jsx(on,{path:"/trips/:id/map",element:J.jsx(bb,{})}),J.jsx(on,{path:"/trip-map",element:J.jsx(bb,{})}),J.jsx(on,{path:"*",element:J.jsx("div",{children:"404 - Page Not Found"})})]})})}),J.jsx(WU,{})]})})})}N1.createRoot(document.getElementById("root")).render(J.jsx(_1.StrictMode,{children:J.jsx(c6,{})}));"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").then(n=>{console.log("SW registered: ",n)}).catch(n=>{console.log("SW registration failed: ",n)})});export{YU as G,ZU as H,bu as L,Je as T,cs as W,Mb as a,g6 as b,Ku as c,O6 as d,S6 as e,w6 as f,ek as g,C6 as h,N6 as i,J as j,A6 as k,d6 as l,m6 as m,E6 as n,v6 as o,R6 as p,y6 as q,D6 as r,M6 as s,b6 as t,dU as u,lr as v,_6 as w,T6 as x,I6 as y,pU as z};
//# sourceMappingURL=index-qCsHU5cu.js.map
