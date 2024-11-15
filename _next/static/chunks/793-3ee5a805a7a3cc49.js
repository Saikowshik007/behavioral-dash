"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[793],{67401:(e,r,t)=>{t.d(r,{A:()=>a});var o=t(12115);let n=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l=function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.filter((e,r,t)=>!!e&&""!==e.trim()&&t.indexOf(e)===r).join(" ").trim()};var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let i=(0,o.forwardRef)((e,r)=>{let{color:t="currentColor",size:n=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:d="",children:c,iconNode:u,...p}=e;return(0,o.createElement)("svg",{ref:r,...s,width:n,height:n,stroke:t,strokeWidth:a?24*Number(i)/Number(n):i,className:l("lucide",d),...p},[...u.map(e=>{let[r,t]=e;return(0,o.createElement)(r,t)}),...Array.isArray(c)?c:[c]])}),a=(e,r)=>{let t=(0,o.forwardRef)((t,s)=>{let{className:a,...d}=t;return(0,o.createElement)(i,{ref:s,iconNode:r,className:l("lucide-".concat(n(e)),a),...d})});return t.displayName="".concat(e),t}},93610:(e,r,t)=>{t.d(r,{m:()=>o});function o(e,r,{checkForDefaultPrevented:t=!0}={}){return function(o){if(e?.(o),!1===t||!o.defaultPrevented)return r?.(o)}}},88068:(e,r,t)=>{t.d(r,{s:()=>l,t:()=>n});var o=t(12115);function n(...e){return r=>e.forEach(e=>{"function"==typeof e?e(r):null!=e&&(e.current=r)})}function l(...e){return o.useCallback(n(...e),e)}},18166:(e,r,t)=>{t.d(r,{A:()=>s,q:()=>l});var o=t(12115),n=t(95155);function l(e,r){let t=o.createContext(r),l=e=>{let{children:r,...l}=e,s=o.useMemo(()=>l,Object.values(l));return(0,n.jsx)(t.Provider,{value:s,children:r})};return l.displayName=e+"Provider",[l,function(n){let l=o.useContext(t);if(l)return l;if(void 0!==r)return r;throw Error(`\`${n}\` must be used within \`${e}\``)}]}function s(e,r=[]){let t=[],l=()=>{let r=t.map(e=>o.createContext(e));return function(t){let n=t?.[e]||r;return o.useMemo(()=>({[`__scope${e}`]:{...t,[e]:n}}),[t,n])}};return l.scopeName=e,[function(r,l){let s=o.createContext(l),i=t.length;t=[...t,l];let a=r=>{let{scope:t,children:l,...a}=r,d=t?.[e]?.[i]||s,c=o.useMemo(()=>a,Object.values(a));return(0,n.jsx)(d.Provider,{value:c,children:l})};return a.displayName=r+"Provider",[a,function(t,n){let a=n?.[e]?.[i]||s,d=o.useContext(a);if(d)return d;if(void 0!==l)return l;throw Error(`\`${t}\` must be used within \`${r}\``)}]},function(...e){let r=e[0];if(1===e.length)return r;let t=()=>{let t=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let n=t.reduce((r,{useScope:t,scopeName:o})=>{let n=t(e)[`__scope${o}`];return{...r,...n}},{});return o.useMemo(()=>({[`__scope${r.scopeName}`]:n}),[n])}};return t.scopeName=r.scopeName,t}(l,...r)]}},59674:(e,r,t)=>{t.d(r,{lg:()=>v,qW:()=>p,bL:()=>g});var o,n=t(12115),l=t(93610),s=t(23360),i=t(88068),a=t(41524),d=t(95155),c="dismissableLayer.update",u=n.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),p=n.forwardRef((e,r)=>{var t,p;let{disableOutsidePointerEvents:f=!1,onEscapeKeyDown:g,onPointerDownOutside:v,onFocusOutside:h,onInteractOutside:y,onDismiss:w,...x}=e,k=n.useContext(u),[E,z]=n.useState(null),C=null!==(p=null==E?void 0:E.ownerDocument)&&void 0!==p?p:null===(t=globalThis)||void 0===t?void 0:t.document,[,j]=n.useState({}),P=(0,i.s)(r,e=>z(e)),N=Array.from(k.layers),[O]=[...k.layersWithOutsidePointerEventsDisabled].slice(-1),S=N.indexOf(O),L=E?N.indexOf(E):-1,R=k.layersWithOutsidePointerEventsDisabled.size>0,D=L>=S,W=function(e){var r;let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(r=globalThis)||void 0===r?void 0:r.document,o=(0,a.c)(e),l=n.useRef(!1),s=n.useRef(()=>{});return n.useEffect(()=>{let e=e=>{if(e.target&&!l.current){let r=function(){m("dismissableLayer.pointerDownOutside",o,n,{discrete:!0})},n={originalEvent:e};"touch"===e.pointerType?(t.removeEventListener("click",s.current),s.current=r,t.addEventListener("click",s.current,{once:!0})):r()}else t.removeEventListener("click",s.current);l.current=!1},r=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(r),t.removeEventListener("pointerdown",e),t.removeEventListener("click",s.current)}},[t,o]),{onPointerDownCapture:()=>l.current=!0}}(e=>{let r=e.target,t=[...k.branches].some(e=>e.contains(r));!D||t||(null==v||v(e),null==y||y(e),e.defaultPrevented||null==w||w())},C),$=function(e){var r;let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(r=globalThis)||void 0===r?void 0:r.document,o=(0,a.c)(e),l=n.useRef(!1);return n.useEffect(()=>{let e=e=>{e.target&&!l.current&&m("dismissableLayer.focusOutside",o,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,o]),{onFocusCapture:()=>l.current=!0,onBlurCapture:()=>l.current=!1}}(e=>{let r=e.target;[...k.branches].some(e=>e.contains(r))||(null==h||h(e),null==y||y(e),e.defaultPrevented||null==w||w())},C);return!function(e,r=globalThis?.document){let t=(0,a.c)(e);n.useEffect(()=>{let e=e=>{"Escape"===e.key&&t(e)};return r.addEventListener("keydown",e,{capture:!0}),()=>r.removeEventListener("keydown",e,{capture:!0})},[t,r])}(e=>{L!==k.layers.size-1||(null==g||g(e),!e.defaultPrevented&&w&&(e.preventDefault(),w()))},C),n.useEffect(()=>{if(E)return f&&(0===k.layersWithOutsidePointerEventsDisabled.size&&(o=C.body.style.pointerEvents,C.body.style.pointerEvents="none"),k.layersWithOutsidePointerEventsDisabled.add(E)),k.layers.add(E),b(),()=>{f&&1===k.layersWithOutsidePointerEventsDisabled.size&&(C.body.style.pointerEvents=o)}},[E,C,f,k]),n.useEffect(()=>()=>{E&&(k.layers.delete(E),k.layersWithOutsidePointerEventsDisabled.delete(E),b())},[E,k]),n.useEffect(()=>{let e=()=>j({});return document.addEventListener(c,e),()=>document.removeEventListener(c,e)},[]),(0,d.jsx)(s.sG.div,{...x,ref:P,style:{pointerEvents:R?D?"auto":"none":void 0,...e.style},onFocusCapture:(0,l.m)(e.onFocusCapture,$.onFocusCapture),onBlurCapture:(0,l.m)(e.onBlurCapture,$.onBlurCapture),onPointerDownCapture:(0,l.m)(e.onPointerDownCapture,W.onPointerDownCapture)})});p.displayName="DismissableLayer";var f=n.forwardRef((e,r)=>{let t=n.useContext(u),o=n.useRef(null),l=(0,i.s)(r,o);return n.useEffect(()=>{let e=o.current;if(e)return t.branches.add(e),()=>{t.branches.delete(e)}},[t.branches]),(0,d.jsx)(s.sG.div,{...e,ref:l})});function b(){let e=new CustomEvent(c);document.dispatchEvent(e)}function m(e,r,t,o){let{discrete:n}=o,l=t.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:t});r&&l.addEventListener(e,r,{once:!0}),n?(0,s.hO)(l,i):l.dispatchEvent(i)}f.displayName="DismissableLayerBranch";var g=p,v=f},17323:(e,r,t)=>{t.d(r,{Z:()=>a});var o=t(12115),n=t(47650),l=t(23360),s=t(46611),i=t(95155),a=o.forwardRef((e,r)=>{var t,a;let{container:d,...c}=e,[u,p]=o.useState(!1);(0,s.N)(()=>p(!0),[]);let f=d||u&&(null===(a=globalThis)||void 0===a?void 0:null===(t=a.document)||void 0===t?void 0:t.body);return f?n.createPortal((0,i.jsx)(l.sG.div,{...c,ref:r}),f):null});a.displayName="Portal"},23360:(e,r,t)=>{t.d(r,{hO:()=>a,sG:()=>i});var o=t(12115),n=t(47650),l=t(12317),s=t(95155),i=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=>{let t=o.forwardRef((e,t)=>{let{asChild:o,...n}=e,i=o?l.DX:r;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,s.jsx)(i,{...n,ref:t})});return t.displayName=`Primitive.${r}`,{...e,[r]:t}},{});function a(e,r){e&&n.flushSync(()=>e.dispatchEvent(r))}},12317:(e,r,t)=>{t.d(r,{DX:()=>s,xV:()=>a});var o=t(12115),n=t(88068),l=t(95155),s=o.forwardRef((e,r)=>{let{children:t,...n}=e,s=o.Children.toArray(t),a=s.find(d);if(a){let e=a.props.children,t=s.map(r=>r!==a?r:o.Children.count(e)>1?o.Children.only(null):o.isValidElement(e)?e.props.children:null);return(0,l.jsx)(i,{...n,ref:r,children:o.isValidElement(e)?o.cloneElement(e,void 0,t):null})}return(0,l.jsx)(i,{...n,ref:r,children:t})});s.displayName="Slot";var i=o.forwardRef((e,r)=>{let{children:t,...l}=e;if(o.isValidElement(t)){let e=function(e){let r=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,t=r&&"isReactWarning"in r&&r.isReactWarning;return t?e.ref:(t=(r=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in r&&r.isReactWarning)?e.props.ref:e.props.ref||e.ref}(t);return o.cloneElement(t,{...function(e,r){let t={...r};for(let o in r){let n=e[o],l=r[o];/^on[A-Z]/.test(o)?n&&l?t[o]=(...e)=>{l(...e),n(...e)}:n&&(t[o]=n):"style"===o?t[o]={...n,...l}:"className"===o&&(t[o]=[n,l].filter(Boolean).join(" "))}return{...e,...t}}(l,t.props),ref:r?(0,n.t)(r,e):e})}return o.Children.count(t)>1?o.Children.only(null):null});i.displayName="SlotClone";var a=({children:e})=>(0,l.jsx)(l.Fragment,{children:e});function d(e){return o.isValidElement(e)&&e.type===a}},41524:(e,r,t)=>{t.d(r,{c:()=>n});var o=t(12115);function n(e){let r=o.useRef(e);return o.useEffect(()=>{r.current=e}),o.useMemo(()=>(...e)=>r.current?.(...e),[])}},1488:(e,r,t)=>{t.d(r,{i:()=>l});var o=t(12115),n=t(41524);function l({prop:e,defaultProp:r,onChange:t=()=>{}}){let[l,s]=function({defaultProp:e,onChange:r}){let t=o.useState(e),[l]=t,s=o.useRef(l),i=(0,n.c)(r);return o.useEffect(()=>{s.current!==l&&(i(l),s.current=l)},[l,s,i]),t}({defaultProp:r,onChange:t}),i=void 0!==e,a=i?e:l,d=(0,n.c)(t);return[a,o.useCallback(r=>{if(i){let t="function"==typeof r?r(e):r;t!==e&&d(t)}else s(r)},[i,e,s,d])]}},46611:(e,r,t)=>{t.d(r,{N:()=>n});var o=t(12115),n=globalThis?.document?o.useLayoutEffect:()=>{}},40652:(e,r,t)=>{t.d(r,{F:()=>l});let o=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,n=function(){for(var e,r,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(r=function e(r){var t,o,n="";if("string"==typeof r||"number"==typeof r)n+=r;else if("object"==typeof r){if(Array.isArray(r))for(t=0;t<r.length;t++)r[t]&&(o=e(r[t]))&&(n&&(n+=" "),n+=o);else for(t in r)r[t]&&(n&&(n+=" "),n+=t)}return n}(e))&&(o&&(o+=" "),o+=r);return o},l=(e,r)=>t=>{var l;if((null==r?void 0:r.variants)==null)return n(e,null==t?void 0:t.class,null==t?void 0:t.className);let{variants:s,defaultVariants:i}=r,a=Object.keys(s).map(e=>{let r=null==t?void 0:t[e],n=null==i?void 0:i[e];if(null===r)return null;let l=o(r)||o(n);return s[e][l]}),d=t&&Object.entries(t).reduce((e,r)=>{let[t,o]=r;return void 0===o||(e[t]=o),e},{});return n(e,a,null==r?void 0:null===(l=r.compoundVariants)||void 0===l?void 0:l.reduce((e,r)=>{let{class:t,className:o,...n}=r;return Object.entries(n).every(e=>{let[r,t]=e;return Array.isArray(t)?t.includes({...i,...d}[r]):({...i,...d})[r]===t})?[...e,t,o]:e},[]),null==t?void 0:t.class,null==t?void 0:t.className)}},43463:(e,r,t)=>{function o(){for(var e,r,t=0,o="",n=arguments.length;t<n;t++)(e=arguments[t])&&(r=function e(r){var t,o,n="";if("string"==typeof r||"number"==typeof r)n+=r;else if("object"==typeof r){if(Array.isArray(r)){var l=r.length;for(t=0;t<l;t++)r[t]&&(o=e(r[t]))&&(n&&(n+=" "),n+=o)}else for(o in r)r[o]&&(n&&(n+=" "),n+=o)}return n}(e))&&(o&&(o+=" "),o+=r);return o}t.d(r,{$:()=>o,A:()=>n});let n=o},69795:(e,r,t)=>{t.d(r,{QP:()=>H});let o=e=>{let r=i(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:e=>{let t=e.split("-");return""===t[0]&&1!==t.length&&t.shift(),n(t,r)||s(e)},getConflictingClassGroupIds:(e,r)=>{let n=t[e]||[];return r&&o[e]?[...n,...o[e]]:n}}},n=(e,r)=>{if(0===e.length)return r.classGroupId;let t=e[0],o=r.nextPart.get(t),l=o?n(e.slice(1),o):void 0;if(l)return l;if(0===r.validators.length)return;let s=e.join("-");return r.validators.find(({validator:e})=>e(s))?.classGroupId},l=/^\[(.+)\]$/,s=e=>{if(l.test(e)){let r=l.exec(e)[1],t=r?.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}},i=e=>{let{theme:r,prefix:t}=e,o={nextPart:new Map,validators:[]};return u(Object.entries(e.classGroups),t).forEach(([e,t])=>{a(t,o,e,r)}),o},a=(e,r,t,o)=>{e.forEach(e=>{if("string"==typeof e){(""===e?r:d(r,e)).classGroupId=t;return}if("function"==typeof e){if(c(e)){a(e(o),r,t,o);return}r.validators.push({validator:e,classGroupId:t});return}Object.entries(e).forEach(([e,n])=>{a(n,d(r,e),t,o)})})},d=(e,r)=>{let t=e;return r.split("-").forEach(e=>{t.nextPart.has(e)||t.nextPart.set(e,{nextPart:new Map,validators:[]}),t=t.nextPart.get(e)}),t},c=e=>e.isThemeGetter,u=(e,r)=>r?e.map(([e,t])=>[e,t.map(e=>"string"==typeof e?r+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(([e,t])=>[r+e,t])):e)]):e,p=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let r=0,t=new Map,o=new Map,n=(n,l)=>{t.set(n,l),++r>e&&(r=0,o=t,t=new Map)};return{get(e){let r=t.get(e);return void 0!==r?r:void 0!==(r=o.get(e))?(n(e,r),r):void 0},set(e,r){t.has(e)?t.set(e,r):n(e,r)}}},f=e=>{let{separator:r,experimentalParseClassName:t}=e,o=1===r.length,n=r[0],l=r.length,s=e=>{let t;let s=[],i=0,a=0;for(let d=0;d<e.length;d++){let c=e[d];if(0===i){if(c===n&&(o||e.slice(d,d+l)===r)){s.push(e.slice(a,d)),a=d+l;continue}if("/"===c){t=d;continue}}"["===c?i++:"]"===c&&i--}let d=0===s.length?e:e.substring(a),c=d.startsWith("!"),u=c?d.substring(1):d;return{modifiers:s,hasImportantModifier:c,baseClassName:u,maybePostfixModifierPosition:t&&t>a?t-a:void 0}};return t?e=>t({className:e,parseClassName:s}):s},b=e=>{if(e.length<=1)return e;let r=[],t=[];return e.forEach(e=>{"["===e[0]?(r.push(...t.sort(),e),t=[]):t.push(e)}),r.push(...t.sort()),r},m=e=>({cache:p(e.cacheSize),parseClassName:f(e),...o(e)}),g=/\s+/,v=(e,r)=>{let{parseClassName:t,getClassGroupId:o,getConflictingClassGroupIds:n}=r,l=[],s=e.trim().split(g),i="";for(let e=s.length-1;e>=0;e-=1){let r=s[e],{modifiers:a,hasImportantModifier:d,baseClassName:c,maybePostfixModifierPosition:u}=t(r),p=!!u,f=o(p?c.substring(0,u):c);if(!f){if(!p||!(f=o(c))){i=r+(i.length>0?" "+i:i);continue}p=!1}let m=b(a).join(":"),g=d?m+"!":m,v=g+f;if(l.includes(v))continue;l.push(v);let h=n(f,p);for(let e=0;e<h.length;++e){let r=h[e];l.push(g+r)}i=r+(i.length>0?" "+i:i)}return i};function h(){let e,r,t=0,o="";for(;t<arguments.length;)(e=arguments[t++])&&(r=y(e))&&(o&&(o+=" "),o+=r);return o}let y=e=>{let r;if("string"==typeof e)return e;let t="";for(let o=0;o<e.length;o++)e[o]&&(r=y(e[o]))&&(t&&(t+=" "),t+=r);return t},w=e=>{let r=r=>r[e]||[];return r.isThemeGetter=!0,r},x=/^\[(?:([a-z-]+):)?(.+)\]$/i,k=/^\d+\/\d+$/,E=new Set(["px","full","screen"]),z=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,C=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,j=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,P=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,N=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,O=e=>L(e)||E.has(e)||k.test(e),S=e=>V(e,"length",q),L=e=>!!e&&!Number.isNaN(Number(e)),R=e=>V(e,"number",L),D=e=>!!e&&Number.isInteger(Number(e)),W=e=>e.endsWith("%")&&L(e.slice(0,-1)),$=e=>x.test(e),A=e=>z.test(e),G=new Set(["length","size","percentage"]),M=e=>V(e,G,Z),T=e=>V(e,"position",Z),_=new Set(["image","url"]),B=e=>V(e,_,Q),F=e=>V(e,"",X),I=()=>!0,V=(e,r,t)=>{let o=x.exec(e);return!!o&&(o[1]?"string"==typeof r?o[1]===r:r.has(o[1]):t(o[2]))},q=e=>C.test(e)&&!j.test(e),Z=()=>!1,X=e=>P.test(e),Q=e=>N.test(e);Symbol.toStringTag;let H=function(e,...r){let t,o,n;let l=function(i){return o=(t=m(r.reduce((e,r)=>r(e),e()))).cache.get,n=t.cache.set,l=s,s(i)};function s(e){let r=o(e);if(r)return r;let l=v(e,t);return n(e,l),l}return function(){return l(h.apply(null,arguments))}}(()=>{let e=w("colors"),r=w("spacing"),t=w("blur"),o=w("brightness"),n=w("borderColor"),l=w("borderRadius"),s=w("borderSpacing"),i=w("borderWidth"),a=w("contrast"),d=w("grayscale"),c=w("hueRotate"),u=w("invert"),p=w("gap"),f=w("gradientColorStops"),b=w("gradientColorStopPositions"),m=w("inset"),g=w("margin"),v=w("opacity"),h=w("padding"),y=w("saturate"),x=w("scale"),k=w("sepia"),E=w("skew"),z=w("space"),C=w("translate"),j=()=>["auto","contain","none"],P=()=>["auto","hidden","clip","visible","scroll"],N=()=>["auto",$,r],G=()=>[$,r],_=()=>["",O,S],V=()=>["auto",L,$],q=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],Z=()=>["solid","dashed","dotted","double","none"],X=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],Q=()=>["start","end","center","between","around","evenly","stretch"],H=()=>["","0",$],J=()=>["auto","avoid","all","avoid-page","page","left","right","column"],K=()=>[L,$];return{cacheSize:500,separator:":",theme:{colors:[I],spacing:[O,S],blur:["none","",A,$],brightness:K(),borderColor:[e],borderRadius:["none","","full",A,$],borderSpacing:G(),borderWidth:_(),contrast:K(),grayscale:H(),hueRotate:K(),invert:H(),gap:G(),gradientColorStops:[e],gradientColorStopPositions:[W,S],inset:N(),margin:N(),opacity:K(),padding:G(),saturate:K(),scale:K(),sepia:H(),skew:K(),space:G(),translate:G()},classGroups:{aspect:[{aspect:["auto","square","video",$]}],container:["container"],columns:[{columns:[A]}],"break-after":[{"break-after":J()}],"break-before":[{"break-before":J()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...q(),$]}],overflow:[{overflow:P()}],"overflow-x":[{"overflow-x":P()}],"overflow-y":[{"overflow-y":P()}],overscroll:[{overscroll:j()}],"overscroll-x":[{"overscroll-x":j()}],"overscroll-y":[{"overscroll-y":j()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],start:[{start:[m]}],end:[{end:[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",D,$]}],basis:[{basis:N()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",$]}],grow:[{grow:H()}],shrink:[{shrink:H()}],order:[{order:["first","last","none",D,$]}],"grid-cols":[{"grid-cols":[I]}],"col-start-end":[{col:["auto",{span:["full",D,$]},$]}],"col-start":[{"col-start":V()}],"col-end":[{"col-end":V()}],"grid-rows":[{"grid-rows":[I]}],"row-start-end":[{row:["auto",{span:[D,$]},$]}],"row-start":[{"row-start":V()}],"row-end":[{"row-end":V()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",$]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",$]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...Q()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...Q(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...Q(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[h]}],px:[{px:[h]}],py:[{py:[h]}],ps:[{ps:[h]}],pe:[{pe:[h]}],pt:[{pt:[h]}],pr:[{pr:[h]}],pb:[{pb:[h]}],pl:[{pl:[h]}],m:[{m:[g]}],mx:[{mx:[g]}],my:[{my:[g]}],ms:[{ms:[g]}],me:[{me:[g]}],mt:[{mt:[g]}],mr:[{mr:[g]}],mb:[{mb:[g]}],ml:[{ml:[g]}],"space-x":[{"space-x":[z]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[z]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",$,r]}],"min-w":[{"min-w":[$,r,"min","max","fit"]}],"max-w":[{"max-w":[$,r,"none","full","min","max","fit","prose",{screen:[A]},A]}],h:[{h:[$,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[$,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[$,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[$,r,"auto","min","max","fit"]}],"font-size":[{text:["base",A,S]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",R]}],"font-family":[{font:[I]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",$]}],"line-clamp":[{"line-clamp":["none",L,R]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",O,$]}],"list-image":[{"list-image":["none",$]}],"list-style-type":[{list:["none","disc","decimal",$]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[v]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[v]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Z(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",O,S]}],"underline-offset":[{"underline-offset":["auto",O,$]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:G()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",$]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",$]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[v]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...q(),T]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",M]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},B]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[b]}],"gradient-via-pos":[{via:[b]}],"gradient-to-pos":[{to:[b]}],"gradient-from":[{from:[f]}],"gradient-via":[{via:[f]}],"gradient-to":[{to:[f]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[i]}],"border-w-x":[{"border-x":[i]}],"border-w-y":[{"border-y":[i]}],"border-w-s":[{"border-s":[i]}],"border-w-e":[{"border-e":[i]}],"border-w-t":[{"border-t":[i]}],"border-w-r":[{"border-r":[i]}],"border-w-b":[{"border-b":[i]}],"border-w-l":[{"border-l":[i]}],"border-opacity":[{"border-opacity":[v]}],"border-style":[{border:[...Z(),"hidden"]}],"divide-x":[{"divide-x":[i]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[i]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[v]}],"divide-style":[{divide:Z()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-s":[{"border-s":[n]}],"border-color-e":[{"border-e":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:["",...Z()]}],"outline-offset":[{"outline-offset":[O,$]}],"outline-w":[{outline:[O,S]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:_()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[v]}],"ring-offset-w":[{"ring-offset":[O,S]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",A,F]}],"shadow-color":[{shadow:[I]}],opacity:[{opacity:[v]}],"mix-blend":[{"mix-blend":[...X(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":X()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[a]}],"drop-shadow":[{"drop-shadow":["","none",A,$]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[c]}],invert:[{invert:[u]}],saturate:[{saturate:[y]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[a]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[c]}],"backdrop-invert":[{"backdrop-invert":[u]}],"backdrop-opacity":[{"backdrop-opacity":[v]}],"backdrop-saturate":[{"backdrop-saturate":[y]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",$]}],duration:[{duration:K()}],ease:[{ease:["linear","in","out","in-out",$]}],delay:[{delay:K()}],animate:[{animate:["none","spin","ping","pulse","bounce",$]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[x]}],"scale-x":[{"scale-x":[x]}],"scale-y":[{"scale-y":[x]}],rotate:[{rotate:[D,$]}],"translate-x":[{"translate-x":[C]}],"translate-y":[{"translate-y":[C]}],"skew-x":[{"skew-x":[E]}],"skew-y":[{"skew-y":[E]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",$]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",$]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":G()}],"scroll-mx":[{"scroll-mx":G()}],"scroll-my":[{"scroll-my":G()}],"scroll-ms":[{"scroll-ms":G()}],"scroll-me":[{"scroll-me":G()}],"scroll-mt":[{"scroll-mt":G()}],"scroll-mr":[{"scroll-mr":G()}],"scroll-mb":[{"scroll-mb":G()}],"scroll-ml":[{"scroll-ml":G()}],"scroll-p":[{"scroll-p":G()}],"scroll-px":[{"scroll-px":G()}],"scroll-py":[{"scroll-py":G()}],"scroll-ps":[{"scroll-ps":G()}],"scroll-pe":[{"scroll-pe":G()}],"scroll-pt":[{"scroll-pt":G()}],"scroll-pr":[{"scroll-pr":G()}],"scroll-pb":[{"scroll-pb":G()}],"scroll-pl":[{"scroll-pl":G()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",$]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[O,S,R]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}})}}]);