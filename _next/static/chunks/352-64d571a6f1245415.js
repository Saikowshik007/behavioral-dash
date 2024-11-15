"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[352],{46195:(e,t,r)=>{r.d(t,{b:()=>u});var a=r(12115),s=r(23360),i=r(95155),l=a.forwardRef((e,t)=>(0,i.jsx)(s.sG.label,{...e,ref:t,onMouseDown:t=>{var r;t.target.closest("button, input, select, textarea")||(null===(r=e.onMouseDown)||void 0===r||r.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));l.displayName="Label";var u=l},69606:(e,t,r)=>{r.d(t,{Op:()=>k,mN:()=>eA,xI:()=>B,xW:()=>S});var a=r(12115),s=e=>"checkbox"===e.type,i=e=>e instanceof Date,l=e=>null==e;let u=e=>"object"==typeof e;var n=e=>!l(e)&&!Array.isArray(e)&&u(e)&&!i(e),o=e=>n(e)&&e.target?s(e.target)?e.target.checked:e.target.value:e,d=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,f=(e,t)=>e.has(d(t)),c=e=>{let t=e.constructor&&e.constructor.prototype;return n(t)&&t.hasOwnProperty("isPrototypeOf")},y="undefined"!=typeof window&&void 0!==window.HTMLElement&&"undefined"!=typeof document;function m(e){let t;let r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(!(y&&(e instanceof Blob||e instanceof FileList))&&(r||n(e))))return e;else if(t=r?[]:{},r||c(e))for(let r in e)e.hasOwnProperty(r)&&(t[r]=m(e[r]));else t=e;return t}var v=e=>Array.isArray(e)?e.filter(Boolean):[],h=e=>void 0===e,g=(e,t,r)=>{if(!t||!n(e))return r;let a=v(t.split(/[,[\].]+?/)).reduce((e,t)=>l(e)?e:e[t],e);return h(a)||a===e?h(e[t])?r:e[t]:a},b=e=>"boolean"==typeof e,_=e=>/^\w*$/.test(e),p=e=>v(e.replace(/["|']|\]/g,"").split(/\.|\[/)),V=(e,t,r)=>{let a=-1,s=_(t)?[t]:p(t),i=s.length,l=i-1;for(;++a<i;){let t=s[a],i=r;if(a!==l){let r=e[t];i=n(r)||Array.isArray(r)?r:isNaN(+s[a+1])?{}:[]}if("__proto__"===t)return;e[t]=i,e=e[t]}return e};let F={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},A={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},w={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},x=a.createContext(null),S=()=>a.useContext(x),k=e=>{let{children:t,...r}=e;return a.createElement(x.Provider,{value:r},t)};var D=(e,t,r,a=!0)=>{let s={defaultValues:t._defaultValues};for(let i in e)Object.defineProperty(s,i,{get:()=>(t._proxyFormState[i]!==A.all&&(t._proxyFormState[i]=!a||A.all),r&&(r[i]=!0),e[i])});return s},E=e=>n(e)&&!Object.keys(e).length,C=(e,t,r,a)=>{r(e);let{name:s,...i}=e;return E(i)||Object.keys(i).length>=Object.keys(t).length||Object.keys(i).find(e=>t[e]===(!a||A.all))},O=e=>Array.isArray(e)?e:[e],j=(e,t,r)=>!e||!t||e===t||O(e).some(e=>e&&(r?e===t:e.startsWith(t)||t.startsWith(e)));function L(e){let t=a.useRef(e);t.current=e,a.useEffect(()=>{let r=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}var T=e=>"string"==typeof e,U=(e,t,r,a,s)=>T(e)?(a&&t.watch.add(e),g(r,e,s)):Array.isArray(e)?e.map(e=>(a&&t.watch.add(e),g(r,e))):(a&&(t.watchAll=!0),r);let B=e=>e.render(function(e){let t=S(),{name:r,disabled:s,control:i=t.control,shouldUnregister:l}=e,u=f(i._names.array,r),n=function(e){let t=S(),{control:r=t.control,name:s,defaultValue:i,disabled:l,exact:u}=e||{},n=a.useRef(s);n.current=s,L({disabled:l,subject:r._subjects.values,next:e=>{j(n.current,e.name,u)&&d(m(U(n.current,r._names,e.values||r._formValues,!1,i)))}});let[o,d]=a.useState(r._getWatch(s,i));return a.useEffect(()=>r._removeUnmounted()),o}({control:i,name:r,defaultValue:g(i._formValues,r,g(i._defaultValues,r,e.defaultValue)),exact:!0}),d=function(e){let t=S(),{control:r=t.control,disabled:s,name:i,exact:l}=e||{},[u,n]=a.useState(r._formState),o=a.useRef(!0),d=a.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1}),f=a.useRef(i);return f.current=i,L({disabled:s,next:e=>o.current&&j(f.current,e.name,l)&&C(e,d.current,r._updateFormState)&&n({...r._formState,...e}),subject:r._subjects.state}),a.useEffect(()=>(o.current=!0,d.current.isValid&&r._updateValid(!0),()=>{o.current=!1}),[r]),D(u,r,d.current,!1)}({control:i,name:r,exact:!0}),c=a.useRef(i.register(r,{...e.rules,value:n,...b(e.disabled)?{disabled:e.disabled}:{}}));return a.useEffect(()=>{let e=i._options.shouldUnregister||l,t=(e,t)=>{let r=g(i._fields,e);r&&r._f&&(r._f.mount=t)};if(t(r,!0),e){let e=m(g(i._options.defaultValues,r));V(i._defaultValues,r,e),h(g(i._formValues,r))&&V(i._formValues,r,e)}return()=>{(u?e&&!i._state.action:e)?i.unregister(r):t(r,!1)}},[r,i,u,l]),a.useEffect(()=>{g(i._fields,r)&&i._updateDisabledField({disabled:s,fields:i._fields,name:r,value:g(i._fields,r)._f.value})},[s,r,i]),{field:{name:r,value:n,...b(s)||d.disabled?{disabled:d.disabled||s}:{},onChange:a.useCallback(e=>c.current.onChange({target:{value:o(e),name:r},type:F.CHANGE}),[r]),onBlur:a.useCallback(()=>c.current.onBlur({target:{value:g(i._formValues,r),name:r},type:F.BLUR}),[r,i]),ref:a.useCallback(e=>{let t=g(i._fields,r);t&&e&&(t._f.ref={focus:()=>e.focus(),select:()=>e.select(),setCustomValidity:t=>e.setCustomValidity(t),reportValidity:()=>e.reportValidity()})},[i._fields,r])},formState:d,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!g(d.errors,r)},isDirty:{enumerable:!0,get:()=>!!g(d.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!g(d.touchedFields,r)},isValidating:{enumerable:!0,get:()=>!!g(d.validatingFields,r)},error:{enumerable:!0,get:()=>g(d.errors,r)}})}}(e));var N=(e,t,r,a,s)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[a]:s||!0}}:{},M=e=>({isOnSubmit:!e||e===A.onSubmit,isOnBlur:e===A.onBlur,isOnChange:e===A.onChange,isOnAll:e===A.all,isOnTouch:e===A.onTouched}),R=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))));let q=(e,t,r,a)=>{for(let s of r||Object.keys(e)){let r=g(e,s);if(r){let{_f:e,...i}=r;if(e){if(e.refs&&e.refs[0]&&t(e.refs[0],s)&&!a||e.ref&&t(e.ref,e.name)&&!a)return!0;if(q(i,t))break}else if(n(i)&&q(i,t))break}}};var P=(e,t,r)=>{let a=O(g(e,r));return V(a,"root",t[r]),V(e,r,a),e},I=e=>"file"===e.type,W=e=>"function"==typeof e,H=e=>{if(!y)return!1;let t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},$=e=>T(e),G=e=>"radio"===e.type,z=e=>e instanceof RegExp;let J={value:!1,isValid:!1},K={value:!0,isValid:!0};var Q=e=>{if(Array.isArray(e)){if(e.length>1){let t=e.filter(e=>e&&e.checked&&!e.disabled).map(e=>e.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!h(e[0].attributes.value)?h(e[0].value)||""===e[0].value?K:{value:e[0].value,isValid:!0}:K:J}return J};let X={isValid:!1,value:null};var Y=e=>Array.isArray(e)?e.reduce((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e,X):X;function Z(e,t,r="validate"){if($(e)||Array.isArray(e)&&e.every($)||b(e)&&!e)return{type:r,message:$(e)?e:"",ref:t}}var ee=e=>n(e)&&!z(e)?e:{value:e,message:""},et=async(e,t,r,a,i)=>{let{ref:u,refs:o,required:d,maxLength:f,minLength:c,min:y,max:m,pattern:v,validate:_,name:p,valueAsNumber:V,mount:F,disabled:A}=e._f,x=g(t,p);if(!F||A)return{};let S=o?o[0]:u,k=e=>{a&&S.reportValidity&&(S.setCustomValidity(b(e)?"":e||""),S.reportValidity())},D={},C=G(u),O=s(u),j=(V||I(u))&&h(u.value)&&h(x)||H(u)&&""===u.value||""===x||Array.isArray(x)&&!x.length,L=N.bind(null,p,r,D),U=(e,t,r,a=w.maxLength,s=w.minLength)=>{let i=e?t:r;D[p]={type:e?a:s,message:i,ref:u,...L(e?a:s,i)}};if(i?!Array.isArray(x)||!x.length:d&&(!(C||O)&&(j||l(x))||b(x)&&!x||O&&!Q(o).isValid||C&&!Y(o).isValid)){let{value:e,message:t}=$(d)?{value:!!d,message:d}:ee(d);if(e&&(D[p]={type:w.required,message:t,ref:S,...L(w.required,t)},!r))return k(t),D}if(!j&&(!l(y)||!l(m))){let e,t;let a=ee(m),s=ee(y);if(l(x)||isNaN(x)){let r=u.valueAsDate||new Date(x),i=e=>new Date(new Date().toDateString()+" "+e),l="time"==u.type,n="week"==u.type;T(a.value)&&x&&(e=l?i(x)>i(a.value):n?x>a.value:r>new Date(a.value)),T(s.value)&&x&&(t=l?i(x)<i(s.value):n?x<s.value:r<new Date(s.value))}else{let r=u.valueAsNumber||(x?+x:x);l(a.value)||(e=r>a.value),l(s.value)||(t=r<s.value)}if((e||t)&&(U(!!e,a.message,s.message,w.max,w.min),!r))return k(D[p].message),D}if((f||c)&&!j&&(T(x)||i&&Array.isArray(x))){let e=ee(f),t=ee(c),a=!l(e.value)&&x.length>+e.value,s=!l(t.value)&&x.length<+t.value;if((a||s)&&(U(a,e.message,t.message),!r))return k(D[p].message),D}if(v&&!j&&T(x)){let{value:e,message:t}=ee(v);if(z(e)&&!x.match(e)&&(D[p]={type:w.pattern,message:t,ref:u,...L(w.pattern,t)},!r))return k(t),D}if(_){if(W(_)){let e=Z(await _(x,t),S);if(e&&(D[p]={...e,...L(w.validate,e.message)},!r))return k(e.message),D}else if(n(_)){let e={};for(let a in _){if(!E(e)&&!r)break;let s=Z(await _[a](x,t),S,a);s&&(e={...s,...L(a,s.message)},k(s.message),r&&(D[p]=e))}if(!E(e)&&(D[p]={ref:S,...e},!r))return D}}return k(!0),D};function er(e,t){let r=Array.isArray(t)?t:_(t)?[t]:p(t),a=1===r.length?e:function(e,t){let r=t.slice(0,-1).length,a=0;for(;a<r;)e=h(e)?a++:e[t[a++]];return e}(e,r),s=r.length-1,i=r[s];return a&&delete a[i],0!==s&&(n(a)&&E(a)||Array.isArray(a)&&function(e){for(let t in e)if(e.hasOwnProperty(t)&&!h(e[t]))return!1;return!0}(a))&&er(e,r.slice(0,-1)),e}var ea=()=>{let e=[];return{get observers(){return e},next:t=>{for(let r of e)r.next&&r.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter(e=>e!==t)}}),unsubscribe:()=>{e=[]}}},es=e=>l(e)||!u(e);function ei(e,t){if(es(e)||es(t))return e===t;if(i(e)&&i(t))return e.getTime()===t.getTime();let r=Object.keys(e),a=Object.keys(t);if(r.length!==a.length)return!1;for(let s of r){let r=e[s];if(!a.includes(s))return!1;if("ref"!==s){let e=t[s];if(i(r)&&i(e)||n(r)&&n(e)||Array.isArray(r)&&Array.isArray(e)?!ei(r,e):r!==e)return!1}}return!0}var el=e=>"select-multiple"===e.type,eu=e=>G(e)||s(e),en=e=>H(e)&&e.isConnected,eo=e=>{for(let t in e)if(W(e[t]))return!0;return!1};function ed(e,t={}){let r=Array.isArray(e);if(n(e)||r)for(let r in e)Array.isArray(e[r])||n(e[r])&&!eo(e[r])?(t[r]=Array.isArray(e[r])?[]:{},ed(e[r],t[r])):l(e[r])||(t[r]=!0);return t}var ef=(e,t)=>(function e(t,r,a){let s=Array.isArray(t);if(n(t)||s)for(let s in t)Array.isArray(t[s])||n(t[s])&&!eo(t[s])?h(r)||es(a[s])?a[s]=Array.isArray(t[s])?ed(t[s],[]):{...ed(t[s])}:e(t[s],l(r)?{}:r[s],a[s]):a[s]=!ei(t[s],r[s]);return a})(e,t,ed(t)),ec=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:a})=>h(e)?e:t?""===e?NaN:e?+e:e:r&&T(e)?new Date(e):a?a(e):e;function ey(e){let t=e.ref;return(e.refs?e.refs.every(e=>e.disabled):t.disabled)?void 0:I(t)?t.files:G(t)?Y(e.refs).value:el(t)?[...t.selectedOptions].map(({value:e})=>e):s(t)?Q(e.refs).value:ec(h(t.value)?e.ref.value:t.value,e)}var em=(e,t,r,a)=>{let s={};for(let r of e){let e=g(t,r);e&&V(s,r,e._f)}return{criteriaMode:r,names:[...e],fields:s,shouldUseNativeValidation:a}},ev=e=>h(e)?e:z(e)?e.source:n(e)?z(e.value)?e.value.source:e.value:e;let eh="AsyncFunction";var eg=e=>(!e||!e.validate)&&!!(W(e.validate)&&e.validate.constructor.name===eh||n(e.validate)&&Object.values(e.validate).find(e=>e.constructor.name===eh)),eb=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function e_(e,t,r){let a=g(e,r);if(a||_(r))return{error:a,name:r};let s=r.split(".");for(;s.length;){let a=s.join("."),i=g(t,a),l=g(e,a);if(i&&!Array.isArray(i)&&r!==a)break;if(l&&l.type)return{name:a,error:l};s.pop()}return{name:r}}var ep=(e,t,r,a,s)=>!s.isOnAll&&(!r&&s.isOnTouch?!(t||e):(r?a.isOnBlur:s.isOnBlur)?!e:(r?!a.isOnChange:!s.isOnChange)||e),eV=(e,t)=>!v(g(e,t)).length&&er(e,t);let eF={mode:A.onSubmit,reValidateMode:A.onChange,shouldFocusError:!0};function eA(e={}){let t=a.useRef(),r=a.useRef(),[u,d]=a.useState({isDirty:!1,isValidating:!1,isLoading:W(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:W(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...function(e={}){let t,r={...eF,...e},a={submitCount:0,isDirty:!1,isLoading:W(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:r.errors||{},disabled:r.disabled||!1},u={},d=(n(r.defaultValues)||n(r.values))&&m(r.defaultValues||r.values)||{},c=r.shouldUnregister?{}:m(d),_={action:!1,mount:!1,watch:!1},p={mount:new Set,unMount:new Set,array:new Set,watch:new Set},w=0,x={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},S={values:ea(),array:ea(),state:ea()},k=M(r.mode),D=M(r.reValidateMode),C=r.criteriaMode===A.all,j=e=>t=>{clearTimeout(w),w=setTimeout(e,t)},L=async e=>{if(!r.disabled&&(x.isValid||e)){let e=r.resolver?E((await J()).errors):await Q(u,!0);e!==a.isValid&&S.state.next({isValid:e})}},B=(e,t)=>{!r.disabled&&(x.isValidating||x.validatingFields)&&((e||Array.from(p.mount)).forEach(e=>{e&&(t?V(a.validatingFields,e,t):er(a.validatingFields,e))}),S.state.next({validatingFields:a.validatingFields,isValidating:!E(a.validatingFields)}))},N=(e,t)=>{V(a.errors,e,t),S.state.next({errors:a.errors})},$=(e,t,r,a)=>{let s=g(u,e);if(s){let i=g(c,e,h(r)?g(d,e):r);h(i)||a&&a.defaultChecked||t?V(c,e,t?i:ey(s._f)):Z(e,i),_.mount&&L()}},G=(e,t,s,i,l)=>{let n=!1,o=!1,f={name:e};if(!r.disabled){let r=!!(g(u,e)&&g(u,e)._f&&g(u,e)._f.disabled);if(!s||i){x.isDirty&&(o=a.isDirty,a.isDirty=f.isDirty=X(),n=o!==f.isDirty);let s=r||ei(g(d,e),t);o=!!(!r&&g(a.dirtyFields,e)),s||r?er(a.dirtyFields,e):V(a.dirtyFields,e,!0),f.dirtyFields=a.dirtyFields,n=n||x.dirtyFields&&!s!==o}if(s){let t=g(a.touchedFields,e);t||(V(a.touchedFields,e,s),f.touchedFields=a.touchedFields,n=n||x.touchedFields&&t!==s)}n&&l&&S.state.next(f)}return n?f:{}},z=(r,s,i,l)=>{let u=g(a.errors,r),n=x.isValid&&b(s)&&a.isValid!==s;if(e.delayError&&i?(t=j(()=>N(r,i)))(e.delayError):(clearTimeout(w),t=null,i?V(a.errors,r,i):er(a.errors,r)),(i?!ei(u,i):u)||!E(l)||n){let e={...l,...n&&b(s)?{isValid:s}:{},errors:a.errors,name:r};a={...a,...e},S.state.next(e)}},J=async e=>{B(e,!0);let t=await r.resolver(c,r.context,em(e||p.mount,u,r.criteriaMode,r.shouldUseNativeValidation));return B(e),t},K=async e=>{let{errors:t}=await J(e);if(e)for(let r of e){let e=g(t,r);e?V(a.errors,r,e):er(a.errors,r)}else a.errors=t;return t},Q=async(e,t,s={valid:!0})=>{for(let i in e){let l=e[i];if(l){let{_f:e,...u}=l;if(e){let u=p.array.has(e.name),n=l._f&&eg(l._f);n&&x.validatingFields&&B([i],!0);let o=await et(l,c,C,r.shouldUseNativeValidation&&!t,u);if(n&&x.validatingFields&&B([i]),o[e.name]&&(s.valid=!1,t))break;t||(g(o,e.name)?u?P(a.errors,o,e.name):V(a.errors,e.name,o[e.name]):er(a.errors,e.name))}E(u)||await Q(u,t,s)}}return s.valid},X=(e,t)=>!r.disabled&&(e&&t&&V(c,e,t),!ei(eA(),d)),Y=(e,t,r)=>U(e,p,{..._.mount?c:h(t)?d:T(e)?{[e]:t}:t},r,t),Z=(e,t,r={})=>{let a=g(u,e),i=t;if(a){let r=a._f;r&&(r.disabled||V(c,e,ec(t,r)),i=H(r.ref)&&l(t)?"":t,el(r.ref)?[...r.ref.options].forEach(e=>e.selected=i.includes(e.value)):r.refs?s(r.ref)?r.refs.length>1?r.refs.forEach(e=>(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(i)?!!i.find(t=>t===e.value):i===e.value)):r.refs[0]&&(r.refs[0].checked=!!i):r.refs.forEach(e=>e.checked=e.value===i):I(r.ref)?r.ref.value="":(r.ref.value=i,r.ref.type||S.values.next({name:e,values:{...c}})))}(r.shouldDirty||r.shouldTouch)&&G(e,i,r.shouldTouch,r.shouldDirty,!0),r.shouldValidate&&eh(e)},ee=(e,t,r)=>{for(let a in t){let s=t[a],l=`${e}.${a}`,o=g(u,l);(p.array.has(e)||n(s)||o&&!o._f)&&!i(s)?ee(l,s,r):Z(l,s,r)}},es=(e,t,r={})=>{let s=g(u,e),i=p.array.has(e),n=m(t);V(c,e,n),i?(S.array.next({name:e,values:{...c}}),(x.isDirty||x.dirtyFields)&&r.shouldDirty&&S.state.next({name:e,dirtyFields:ef(d,c),isDirty:X(e,n)})):!s||s._f||l(n)?Z(e,n,r):ee(e,n,r),R(e,p)&&S.state.next({...a}),S.values.next({name:_.mount?e:void 0,values:{...c}})},eo=async s=>{_.mount=!0;let l=s.target,n=l.name,d=!0,f=g(u,n),y=e=>{d=Number.isNaN(e)||i(e)&&isNaN(e.getTime())||ei(e,g(c,n,e))};if(f){let i,m;let v=l.type?ey(f._f):o(s),h=s.type===F.BLUR||s.type===F.FOCUS_OUT,b=!eb(f._f)&&!r.resolver&&!g(a.errors,n)&&!f._f.deps||ep(h,g(a.touchedFields,n),a.isSubmitted,D,k),_=R(n,p,h);V(c,n,v),h?(f._f.onBlur&&f._f.onBlur(s),t&&t(0)):f._f.onChange&&f._f.onChange(s);let A=G(n,v,h,!1),w=!E(A)||_;if(h||S.values.next({name:n,type:s.type,values:{...c}}),b)return x.isValid&&("onBlur"===e.mode?h&&L():L()),w&&S.state.next({name:n,..._?{}:A});if(!h&&_&&S.state.next({...a}),r.resolver){let{errors:e}=await J([n]);if(y(v),d){let t=e_(a.errors,u,n),r=e_(e,u,t.name||n);i=r.error,n=r.name,m=E(e)}}else B([n],!0),i=(await et(f,c,C,r.shouldUseNativeValidation))[n],B([n]),y(v),d&&(i?m=!1:x.isValid&&(m=await Q(u,!0)));d&&(f._f.deps&&eh(f._f.deps),z(n,m,i,A))}},ed=(e,t)=>{if(g(a.errors,t)&&e.focus)return e.focus(),1},eh=async(e,t={})=>{let s,i;let l=O(e);if(r.resolver){let t=await K(h(e)?e:l);s=E(t),i=e?!l.some(e=>g(t,e)):s}else e?((i=(await Promise.all(l.map(async e=>{let t=g(u,e);return await Q(t&&t._f?{[e]:t}:t)}))).every(Boolean))||a.isValid)&&L():i=s=await Q(u);return S.state.next({...!T(e)||x.isValid&&s!==a.isValid?{}:{name:e},...r.resolver||!e?{isValid:s}:{},errors:a.errors}),t.shouldFocus&&!i&&q(u,ed,e?l:p.mount),i},eA=e=>{let t={..._.mount?c:d};return h(e)?t:T(e)?g(t,e):e.map(e=>g(t,e))},ew=(e,t)=>({invalid:!!g((t||a).errors,e),isDirty:!!g((t||a).dirtyFields,e),error:g((t||a).errors,e),isValidating:!!g(a.validatingFields,e),isTouched:!!g((t||a).touchedFields,e)}),ex=(e,t,r)=>{let s=(g(u,e,{_f:{}})._f||{}).ref,{ref:i,message:l,type:n,...o}=g(a.errors,e)||{};V(a.errors,e,{...o,...t,ref:s}),S.state.next({name:e,errors:a.errors,isValid:!1}),r&&r.shouldFocus&&s&&s.focus&&s.focus()},eS=(e,t={})=>{for(let s of e?O(e):p.mount)p.mount.delete(s),p.array.delete(s),t.keepValue||(er(u,s),er(c,s)),t.keepError||er(a.errors,s),t.keepDirty||er(a.dirtyFields,s),t.keepTouched||er(a.touchedFields,s),t.keepIsValidating||er(a.validatingFields,s),r.shouldUnregister||t.keepDefaultValue||er(d,s);S.values.next({values:{...c}}),S.state.next({...a,...t.keepDirty?{isDirty:X()}:{}}),t.keepIsValid||L()},ek=({disabled:e,name:t,field:r,fields:a,value:s})=>{if(b(e)&&_.mount||e){let i=e?void 0:h(s)?ey(r?r._f:g(a,t)._f):s;V(c,t,i),G(t,i,!1,!1,!0)}},eD=(e,t={})=>{let a=g(u,e),s=b(t.disabled)||b(r.disabled);return V(u,e,{...a||{},_f:{...a&&a._f?a._f:{ref:{name:e}},name:e,mount:!0,...t}}),p.mount.add(e),a?ek({field:a,disabled:b(t.disabled)?t.disabled:r.disabled,name:e,value:t.value}):$(e,!0,t.value),{...s?{disabled:t.disabled||r.disabled}:{},...r.progressive?{required:!!t.required,min:ev(t.min),max:ev(t.max),minLength:ev(t.minLength),maxLength:ev(t.maxLength),pattern:ev(t.pattern)}:{},name:e,onChange:eo,onBlur:eo,ref:s=>{if(s){eD(e,t),a=g(u,e);let r=h(s.value)&&s.querySelectorAll&&s.querySelectorAll("input,select,textarea")[0]||s,i=eu(r),l=a._f.refs||[];(i?l.find(e=>e===r):r===a._f.ref)||(V(u,e,{_f:{...a._f,...i?{refs:[...l.filter(en),r,...Array.isArray(g(d,e))?[{}]:[]],ref:{type:r.type,name:e}}:{ref:r}}}),$(e,!1,void 0,r))}else(a=g(u,e,{}))._f&&(a._f.mount=!1),(r.shouldUnregister||t.shouldUnregister)&&!(f(p.array,e)&&_.action)&&p.unMount.add(e)}}},eE=()=>r.shouldFocusError&&q(u,ed,p.mount),eC=(e,t)=>async s=>{let i;if(s&&(s.preventDefault&&s.preventDefault(),s.persist&&s.persist()),r.disabled){t&&await t({...a.errors},s);return}let l=m(c);if(S.state.next({isSubmitting:!0}),r.resolver){let{errors:e,values:t}=await J();a.errors=e,l=t}else await Q(u);if(er(a.errors,"root"),E(a.errors)){S.state.next({errors:{}});try{await e(l,s)}catch(e){i=e}}else t&&await t({...a.errors},s),eE(),setTimeout(eE);if(S.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:E(a.errors)&&!i,submitCount:a.submitCount+1,errors:a.errors}),i)throw i},eO=(t,r={})=>{let s=t?m(t):d,i=m(s),l=E(t),n=l?d:i;if(r.keepDefaultValues||(d=s),!r.keepValues){if(r.keepDirtyValues)for(let e of Array.from(new Set([...p.mount,...Object.keys(ef(d,c))])))g(a.dirtyFields,e)?V(n,e,g(c,e)):es(e,g(n,e));else{if(y&&h(t))for(let e of p.mount){let t=g(u,e);if(t&&t._f){let e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;if(H(e)){let t=e.closest("form");if(t){t.reset();break}}}}u={}}c=e.shouldUnregister?r.keepDefaultValues?m(d):{}:m(n),S.array.next({values:{...n}}),S.values.next({values:{...n}})}p={mount:r.keepDirtyValues?p.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},_.mount=!x.isValid||!!r.keepIsValid||!!r.keepDirtyValues,_.watch=!!e.shouldUnregister,S.state.next({submitCount:r.keepSubmitCount?a.submitCount:0,isDirty:!l&&(r.keepDirty?a.isDirty:!!(r.keepDefaultValues&&!ei(t,d))),isSubmitted:!!r.keepIsSubmitted&&a.isSubmitted,dirtyFields:l?{}:r.keepDirtyValues?r.keepDefaultValues&&c?ef(d,c):a.dirtyFields:r.keepDefaultValues&&t?ef(d,t):r.keepDirty?a.dirtyFields:{},touchedFields:r.keepTouched?a.touchedFields:{},errors:r.keepErrors?a.errors:{},isSubmitSuccessful:!!r.keepIsSubmitSuccessful&&a.isSubmitSuccessful,isSubmitting:!1})},ej=(e,t)=>eO(W(e)?e(c):e,t);return{control:{register:eD,unregister:eS,getFieldState:ew,handleSubmit:eC,setError:ex,_executeSchema:J,_getWatch:Y,_getDirty:X,_updateValid:L,_removeUnmounted:()=>{for(let e of p.unMount){let t=g(u,e);t&&(t._f.refs?t._f.refs.every(e=>!en(e)):!en(t._f.ref))&&eS(e)}p.unMount=new Set},_updateFieldArray:(e,t=[],s,i,l=!0,n=!0)=>{if(i&&s&&!r.disabled){if(_.action=!0,n&&Array.isArray(g(u,e))){let t=s(g(u,e),i.argA,i.argB);l&&V(u,e,t)}if(n&&Array.isArray(g(a.errors,e))){let t=s(g(a.errors,e),i.argA,i.argB);l&&V(a.errors,e,t),eV(a.errors,e)}if(x.touchedFields&&n&&Array.isArray(g(a.touchedFields,e))){let t=s(g(a.touchedFields,e),i.argA,i.argB);l&&V(a.touchedFields,e,t)}x.dirtyFields&&(a.dirtyFields=ef(d,c)),S.state.next({name:e,isDirty:X(e,t),dirtyFields:a.dirtyFields,errors:a.errors,isValid:a.isValid})}else V(c,e,t)},_updateDisabledField:ek,_getFieldArray:t=>v(g(_.mount?c:d,t,e.shouldUnregister?g(d,t,[]):[])),_reset:eO,_resetDefaultValues:()=>W(r.defaultValues)&&r.defaultValues().then(e=>{ej(e,r.resetOptions),S.state.next({isLoading:!1})}),_updateFormState:e=>{a={...a,...e}},_disableForm:e=>{b(e)&&(S.state.next({disabled:e}),q(u,(t,r)=>{let a=g(u,r);a&&(t.disabled=a._f.disabled||e,Array.isArray(a._f.refs)&&a._f.refs.forEach(t=>{t.disabled=a._f.disabled||e}))},0,!1))},_subjects:S,_proxyFormState:x,_setErrors:e=>{a.errors=e,S.state.next({errors:a.errors,isValid:!1})},get _fields(){return u},get _formValues(){return c},get _state(){return _},set _state(value){_=value},get _defaultValues(){return d},get _names(){return p},set _names(value){p=value},get _formState(){return a},set _formState(value){a=value},get _options(){return r},set _options(value){r={...r,...value}}},trigger:eh,register:eD,handleSubmit:eC,watch:(e,t)=>W(e)?S.values.subscribe({next:r=>e(Y(void 0,t),r)}):Y(e,t,!0),setValue:es,getValues:eA,reset:ej,resetField:(e,t={})=>{g(u,e)&&(h(t.defaultValue)?es(e,m(g(d,e))):(es(e,t.defaultValue),V(d,e,m(t.defaultValue))),t.keepTouched||er(a.touchedFields,e),t.keepDirty||(er(a.dirtyFields,e),a.isDirty=t.defaultValue?X(e,m(g(d,e))):X()),!t.keepError&&(er(a.errors,e),x.isValid&&L()),S.state.next({...a}))},clearErrors:e=>{e&&O(e).forEach(e=>er(a.errors,e)),S.state.next({errors:e?a.errors:{}})},unregister:eS,setError:ex,setFocus:(e,t={})=>{let r=g(u,e),a=r&&r._f;if(a){let e=a.refs?a.refs[0]:a.ref;e.focus&&(e.focus(),t.shouldSelect&&W(e.select)&&e.select())}},getFieldState:ew}}(e),formState:u});let c=t.current.control;return c._options=e,L({subject:c._subjects.state,next:e=>{C(e,c._proxyFormState,c._updateFormState,!0)&&d({...c._formState})}}),a.useEffect(()=>c._disableForm(e.disabled),[c,e.disabled]),a.useEffect(()=>{if(c._proxyFormState.isDirty){let e=c._getDirty();e!==u.isDirty&&c._subjects.state.next({isDirty:e})}},[c,u.isDirty]),a.useEffect(()=>{e.values&&!ei(e.values,r.current)?(c._reset(e.values,c._options.resetOptions),r.current=e.values,d(e=>({...e}))):c._resetDefaultValues()},[e.values,c]),a.useEffect(()=>{e.errors&&c._setErrors(e.errors)},[e.errors,c]),a.useEffect(()=>{c._state.mount||(c._updateValid(),c._state.mount=!0),c._state.watch&&(c._state.watch=!1,c._subjects.state.next({...c._formState})),c._removeUnmounted()}),a.useEffect(()=>{e.shouldUnregister&&c._subjects.values.next({values:c._getWatch()})},[e.shouldUnregister,c]),t.current.formState=D(u,c),t.current}}}]);