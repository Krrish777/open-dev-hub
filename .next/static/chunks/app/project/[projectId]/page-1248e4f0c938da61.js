(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[141],{6457:function(e,t,r){Promise.resolve().then(r.bind(r,3657)),Promise.resolve().then(r.bind(r,1856)),Promise.resolve().then(r.bind(r,3969))},3657:function(e,t,r){"use strict";r.r(t);var n=r(7437);r(2265);var l=r(8016);r(9519),t.default=e=>{let{height:t,width:r,src:a,alt:o,className:i}=e;return(0,n.jsx)(l.LazyLoadImage,{effect:"blur",height:t,className:i||"rounded-md",width:r,src:a,alt:o})}},1856:function(e,t,r){"use strict";r.r(t),r.d(t,{Avatar:function(){return g},AvatarFallback:function(){return y},AvatarImage:function(){return w}});var n=r(7437),l=r(2265),a=r(2110);let o=(null==globalThis?void 0:globalThis.document)?l.useLayoutEffect:()=>{};var i=r(9586);let u="Avatar",[s,c]=function(e,t=[]){let r=[],n=()=>{let t=r.map(e=>(0,l.createContext)(e));return function(r){let n=(null==r?void 0:r[e])||t;return(0,l.useMemo)(()=>({[`__scope${e}`]:{...r,[e]:n}}),[r,n])}};return n.scopeName=e,[function(t,n){let a=(0,l.createContext)(n),o=r.length;function i(t){let{scope:r,children:n,...i}=t,u=(null==r?void 0:r[e][o])||a,s=(0,l.useMemo)(()=>i,Object.values(i));return(0,l.createElement)(u.Provider,{value:s},n)}return r=[...r,n],i.displayName=t+"Provider",[i,function(r,i){let u=(null==i?void 0:i[e][o])||a,s=(0,l.useContext)(u);if(s)return s;if(void 0!==n)return n;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let n=r.reduce((t,{useScope:r,scopeName:n})=>{let l=r(e)[`__scope${n}`];return{...t,...l}},{});return(0,l.useMemo)(()=>({[`__scope${t.scopeName}`]:n}),[n])}};return r.scopeName=t.scopeName,r}(n,...t)]}(u),[f,d]=s(u),m=(0,l.forwardRef)((e,t)=>{let{__scopeAvatar:r,...n}=e,[o,u]=(0,l.useState)("idle");return(0,l.createElement)(f,{scope:r,imageLoadingStatus:o,onImageLoadingStatusChange:u},(0,l.createElement)(i.WV.span,(0,a.Z)({},n,{ref:t})))}),p=(0,l.forwardRef)((e,t)=>{let{__scopeAvatar:r,src:n,onLoadingStatusChange:u=()=>{},...s}=e,c=d("AvatarImage",r),f=function(e){let[t,r]=(0,l.useState)("idle");return o(()=>{if(!e){r("error");return}let t=!0,n=new window.Image,l=e=>()=>{t&&r(e)};return r("loading"),n.onload=l("loaded"),n.onerror=l("error"),n.src=e,()=>{t=!1}},[e]),t}(n),m=function(e){let t=(0,l.useRef)(e);return(0,l.useEffect)(()=>{t.current=e}),(0,l.useMemo)(()=>(...e)=>{var r;return null===(r=t.current)||void 0===r?void 0:r.call(t,...e)},[])}(e=>{u(e),c.onImageLoadingStatusChange(e)});return o(()=>{"idle"!==f&&m(f)},[f,m]),"loaded"===f?(0,l.createElement)(i.WV.img,(0,a.Z)({},s,{ref:t,src:n})):null}),v=(0,l.forwardRef)((e,t)=>{let{__scopeAvatar:r,delayMs:n,...o}=e,u=d("AvatarFallback",r),[s,c]=(0,l.useState)(void 0===n);return(0,l.useEffect)(()=>{if(void 0!==n){let e=window.setTimeout(()=>c(!0),n);return()=>window.clearTimeout(e)}},[n]),s&&"loaded"!==u.imageLoadingStatus?(0,l.createElement)(i.WV.span,(0,a.Z)({},o,{ref:t})):null});var h=r(4353);let g=l.forwardRef((e,t)=>{let{className:r,...l}=e;return(0,n.jsx)(m,{ref:t,className:(0,h.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",r),...l})});g.displayName=m.displayName;let w=l.forwardRef((e,t)=>{let{className:r,...l}=e;return(0,n.jsx)(p,{ref:t,className:(0,h.cn)("aspect-square h-full w-full",r),...l})});w.displayName=p.displayName;let y=l.forwardRef((e,t)=>{let{className:r,...l}=e;return(0,n.jsx)(v,{ref:t,className:(0,h.cn)("flex h-full w-full items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800",r),...l})});y.displayName=v.displayName},3969:function(e,t,r){"use strict";r.r(t),r.d(t,{Separator:function(){return d}});var n=r(7437),l=r(2265),a=r(2110),o=r(9586);let i="horizontal",u=["horizontal","vertical"],s=(0,l.forwardRef)((e,t)=>{let{decorative:r,orientation:n=i,...u}=e,s=c(n)?n:i;return(0,l.createElement)(o.WV.div,(0,a.Z)({"data-orientation":s},r?{role:"none"}:{"aria-orientation":"vertical"===s?s:void 0,role:"separator"},u,{ref:t}))});function c(e){return u.includes(e)}s.propTypes={orientation(e,t,r){let n=e[t],l=String(n);return n&&!c(n)?Error(`Invalid prop \`orientation\` of value \`${l}\` supplied to \`${r}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${i}\`.`):null}};var f=r(4353);let d=l.forwardRef((e,t)=>{let{className:r,orientation:l="horizontal",decorative:a=!0,...o}=e;return(0,n.jsx)(s,{ref:t,decorative:a,orientation:l,className:(0,f.cn)("shrink-0 bg-slate-200 dark:bg-slate-800","horizontal"===l?"h-[1px] w-full":"h-full w-[1px]",r),...o})});d.displayName=s.displayName},4353:function(e,t,r){"use strict";r.d(t,{cn:function(){return a}});var n=r(3167),l=r(1367);function a(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,l.m6)((0,n.W)(t))}},2110:function(e,t,r){"use strict";function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{Z:function(){return n}})},9586:function(e,t,r){"use strict";r.d(t,{WV:function(){return o}});var n=r(2110),l=r(2265);r(4887);var a=r(6371);let o=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=(0,l.forwardRef)((e,r)=>{let{asChild:o,...i}=e,u=o?a.g7:t;return(0,l.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,l.createElement)(u,(0,n.Z)({},i,{ref:r}))});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{})},6371:function(e,t,r){"use strict";r.d(t,{g7:function(){return a}});var n=r(2110),l=r(2265);let a=(0,l.forwardRef)((e,t)=>{let{children:r,...a}=e,i=l.Children.toArray(r),s=i.find(u);if(s){let e=s.props.children,r=i.map(t=>t!==s?t:l.Children.count(e)>1?l.Children.only(null):(0,l.isValidElement)(e)?e.props.children:null);return(0,l.createElement)(o,(0,n.Z)({},a,{ref:t}),(0,l.isValidElement)(e)?(0,l.cloneElement)(e,void 0,r):null)}return(0,l.createElement)(o,(0,n.Z)({},a,{ref:t}),r)});a.displayName="Slot";let o=(0,l.forwardRef)((e,t)=>{let{children:r,...n}=e;return(0,l.isValidElement)(r)?(0,l.cloneElement)(r,{...function(e,t){let r={...t};for(let n in t){let l=e[n],a=t[n];/^on[A-Z]/.test(n)?l&&a?r[n]=(...e)=>{a(...e),l(...e)}:l&&(r[n]=l):"style"===n?r[n]={...l,...a}:"className"===n&&(r[n]=[l,a].filter(Boolean).join(" "))}return{...e,...r}}(n,r.props),ref:t?function(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}(t,r.ref):r.ref}):l.Children.count(r)>1?l.Children.only(null):null});o.displayName="SlotClone";let i=({children:e})=>(0,l.createElement)(l.Fragment,null,e);function u(e){return(0,l.isValidElement)(e)&&e.type===i}}},function(e){e.O(0,[841,150,971,69,744],function(){return e(e.s=6457)}),_N_E=e.O()}]);