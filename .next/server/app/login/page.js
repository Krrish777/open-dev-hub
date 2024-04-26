(()=>{var e={};e.id=626,e.ids=[626],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},56222:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>s.a,__next_app__:()=>p,originalPathname:()=>d,pages:()=>c,routeModule:()=>g,tree:()=>u});var n=r(50482),i=r(69108),a=r(62563),s=r.n(a),o=r(68300),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let u=["",{children:["login",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,60023)),"G:\\NextJS\\open-dev-hub\\app\\login\\page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,79149))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,80794)),"G:\\NextJS\\open-dev-hub\\app\\layout.js"],loading:[()=>Promise.resolve().then(r.bind(r,95235)),"G:\\NextJS\\open-dev-hub\\app\\loading.js"],"not-found":[()=>Promise.resolve().then(r.bind(r,46178)),"G:\\NextJS\\open-dev-hub\\app\\not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,79149))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["G:\\NextJS\\open-dev-hub\\app\\login\\page.js"],d="/login/page",p={require:r,loadChunk:()=>Promise.resolve()},g=new n.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/login/page",pathname:"/login",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},60319:(e,t,r)=>{Promise.resolve().then(r.bind(r,55980))},55980:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>P});var n,i,a,s,o,l,u,c=r(95344),d=r(3729);let p=({children:e,className:t})=>c.jsx("section",{className:`${t}`,children:e}),g=e=>{let t;let r=new Set,n=(e,n)=>{let i="function"==typeof e?e(t):e;if(!Object.is(i,t)){let e=t;t=(null!=n?n:"object"!=typeof i||null===i)?i:Object.assign({},t,i),r.forEach(r=>r(t,e))}},i=()=>t,a={setState:n,getState:i,getInitialState:()=>s,subscribe:e=>(r.add(e),()=>r.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}},s=t=e(n,i,a);return a},f=e=>e?g(e):g;var v=r(34657);let{useDebugValue:h}=d,{useSyncExternalStoreWithSelector:m}=v,b=!1,x=e=>e,y=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?f(e):e,r=(e,r)=>(function(e,t=x,r){r&&!b&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),b=!0);let n=m(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,r);return h(n),n})(t,e,r);return Object.assign(r,t),r},S=e=>t=>{try{let r=e(t);if(r instanceof Promise)return r;return{then:e=>S(e)(r),catch(e){return this}}}catch(e){return{then(e){return this},catch:t=>S(t)(e)}}},w=(o=e=>({isUserActive:()=>!!user,user:null,setUser:t=>e({user:t,isUserActive:!0}),logout:()=>e({user:null,isUserActive:!1})}),(u="getStorage"in(l={name:"user_storage",getStorage:()=>localStorage})||"serialize"in l||"deserialize"in l?(console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),n=o,i=l,(e,t,r)=>{let a,s,o={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...i},l=!1,u=new Set,c=new Set;try{a=o.getStorage()}catch(e){}if(!a)return n((...t)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),e(...t)},t,r);let d=S(o.serialize),p=()=>{let e;let r=d({state:o.partialize({...t()}),version:o.version}).then(e=>a.setItem(o.name,e)).catch(t=>{e=t});if(e)throw e;return r},g=r.setState;r.setState=(e,t)=>{g(e,t),p()};let f=n((...t)=>{e(...t),p()},t,r),v=()=>{var r;if(!a)return;l=!1,u.forEach(e=>e(t()));let n=(null==(r=o.onRehydrateStorage)?void 0:r.call(o,t()))||void 0;return S(a.getItem.bind(a))(o.name).then(e=>{if(e)return o.deserialize(e)}).then(e=>{if(e){if("number"!=typeof e.version||e.version===o.version)return e.state;if(o.migrate)return o.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(r=>{var n;return e(s=o.merge(r,null!=(n=t())?n:f),!0),p()}).then(()=>{null==n||n(s,void 0),l=!0,c.forEach(e=>e(s))}).catch(e=>{null==n||n(void 0,e)})};return r.persist={setOptions:e=>{o={...o,...e},e.getStorage&&(a=e.getStorage())},clearStorage:()=>{null==a||a.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>v(),hasHydrated:()=>l,onHydrate:e=>(u.add(e),()=>{u.delete(e)}),onFinishHydration:e=>(c.add(e),()=>{c.delete(e)})},v(),s||f}):(a=o,s=l,(e,t,r)=>{let n,i={storage:function(e,t){let r;try{r=e()}catch(e){return}return{getItem:e=>{var n;let i=e=>null===e?null:JSON.parse(e,null==t?void 0:t.reviver),a=null!=(n=r.getItem(e))?n:null;return a instanceof Promise?a.then(i):i(a)},setItem:(e,n)=>r.setItem(e,JSON.stringify(n,null==t?void 0:t.replacer)),removeItem:e=>r.removeItem(e)}}(()=>localStorage),partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...s},o=!1,l=new Set,u=new Set,c=i.storage;if(!c)return a((...t)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),e(...t)},t,r);let d=()=>{let e=i.partialize({...t()});return c.setItem(i.name,{state:e,version:i.version})},p=r.setState;r.setState=(e,t)=>{p(e,t),d()};let g=a((...t)=>{e(...t),d()},t,r);r.getInitialState=()=>g;let f=()=>{var r,a;if(!c)return;o=!1,l.forEach(e=>{var r;return e(null!=(r=t())?r:g)});let s=(null==(a=i.onRehydrateStorage)?void 0:a.call(i,null!=(r=t())?r:g))||void 0;return S(c.getItem.bind(c))(i.name).then(e=>{if(e){if("number"!=typeof e.version||e.version===i.version)return e.state;if(i.migrate)return i.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(r=>{var a;return e(n=i.merge(r,null!=(a=t())?a:g),!0),d()}).then(()=>{null==s||s(n,void 0),n=t(),o=!0,u.forEach(e=>e(n))}).catch(e=>{null==s||s(void 0,e)})};return r.persist={setOptions:e=>{i={...i,...e},e.storage&&(c=e.storage)},clearStorage:()=>{null==c||c.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>f(),hasHydrated:()=>o,onHydrate:e=>(l.add(e),()=>{l.delete(e)}),onFinishHydration:e=>(u.add(e),()=>{u.delete(e)})},i.skipHydration||f(),n||g}))?y(u):y);var j=r(47674),E=r(8428);let P=()=>{let{setUser:e}=w(),t=(0,E.useRouter)(),r=async()=>{let r=await (0,j.getSession)();e(r?.user),r&&t.push("/")};return(0,d.useEffect)(()=>{r()},[]),c.jsx(p,{className:"py-20 h-[60vh] flex justify-center items-center flex-col",children:(0,c.jsxs)("section",{className:"flex flex-col gap-4 text-center",children:[c.jsx("h1",{className:"text-xl  font-bold relative  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500",children:"OpenDevHub"}),c.jsx("p",{className:"text-gradient",children:"Or sign in with social account"}),(0,c.jsxs)("button",{onClick:()=>(0,j.signIn)("google"),type:"button",className:"relative inline-flex w-full items-center justify-center rounded-full border-border  border text-blue-200 bg-secondary px-3.5 py-2.5 font-semibold  ",children:[c.jsx("span",{className:"mr-2 inline-block",children:c.jsx("svg",{className:"h-6 w-6 text-rose-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:c.jsx("path",{d:"M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"})})}),"Sign in with Google"]}),(0,c.jsxs)("button",{type:"button",className:"relative inline-flex w-full items-center justify-center rounded-full border-border  border text-blue-200 bg-secondary px-3.5 py-2.5 font-semibold  ",onClick:()=>(0,j.signIn)("github"),children:[c.jsx("span",{className:"mr-2 inline-block",children:c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:c.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})}),"Sign in with Github"]})]})})}},33620:(e,t,r)=>{"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(3729),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=n.useState,s=n.useEffect,o=n.useLayoutEffect,l=n.useDebugValue;function u(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!i(e,r)}catch(e){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=a({inst:{value:r,getSnapshot:t}}),i=n[0].inst,c=n[1];return o(function(){i.value=r,i.getSnapshot=t,u(i)&&c({inst:i})},[e,r,t]),s(function(){return u(i)&&c({inst:i}),e(function(){u(i)&&c({inst:i})})},[e]),l(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:c},53024:(e,t,r)=>{"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(3729),i=r(8145),a="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},s=i.useSyncExternalStore,o=n.useRef,l=n.useEffect,u=n.useMemo,c=n.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,n,i){var d=o(null);if(null===d.current){var p={hasValue:!1,value:null};d.current=p}else p=d.current;var g=s(e,(d=u(function(){function e(e){if(!l){if(l=!0,s=e,e=n(e),void 0!==i&&p.hasValue){var t=p.value;if(i(t,e))return o=t}return o=e}if(t=o,a(s,e))return t;var r=n(e);return void 0!==i&&i(t,r)?t:(s=e,o=r)}var s,o,l=!1,u=void 0===r?null:r;return[function(){return e(t())},null===u?void 0:function(){return e(u())}]},[t,r,n,i]))[0],d[1]);return l(function(){p.hasValue=!0,p.value=g},[g]),c(g),g}},8145:(e,t,r)=>{"use strict";e.exports=r(33620)},34657:(e,t,r)=>{"use strict";e.exports=r(53024)},60023:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>a,__esModule:()=>i,default:()=>s});let n=(0,r(86843).createProxy)(String.raw`G:\NextJS\open-dev-hub\app\login\page.js`),{__esModule:i,$$typeof:a}=n,s=n.default}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[638,714,698],()=>r(56222));module.exports=n})();