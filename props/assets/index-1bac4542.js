(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();const y={},ce=(e,t)=>e===t,N=Symbol("solid-proxy"),$={equals:ce};let fe=ee;const w=1,O=2,Q={owned:null,cleanups:null,context:null,owner:null};var g=null;let p=null,a=null,d=null,b=null,j=0;function ue(e,t){const n=a,s=g,i=e.length===0,o=i?Q:{owned:null,cleanups:null,context:null,owner:t===void 0?s:t},l=i?e:()=>e(()=>k(()=>_(o)));g=o,a=null;try{return S(l,!0)}finally{a=n,g=s}}function I(e,t){t=t?Object.assign({},$,t):$;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.value)),Y(n,i));return[W.bind(n),s]}function A(e,t,n){const s=Z(e,t,!1,w);M(s)}function T(e,t,n){n=n?Object.assign({},$,n):$;const s=Z(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,M(s),W.bind(s)}function k(e){if(a===null)return e();const t=a;a=null;try{return e()}finally{a=t}}function W(){const e=p;if(this.sources&&(this.state||e))if(this.state===w||e)M(this);else{const t=d;d=null,S(()=>P(this),!1),d=t}if(a){const t=this.observers?this.observers.length:0;a.sources?(a.sources.push(this),a.sourceSlots.push(t)):(a.sources=[this],a.sourceSlots=[t]),this.observers?(this.observers.push(a),this.observerSlots.push(a.sources.length-1)):(this.observers=[a],this.observerSlots=[a.sources.length-1])}return this.value}function Y(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&S(()=>{for(let i=0;i<e.observers.length;i+=1){const o=e.observers[i],l=p&&p.running;l&&p.disposed.has(o),(l&&!o.tState||!l&&!o.state)&&(o.pure?d.push(o):b.push(o),o.observers&&te(o)),l||(o.state=w)}if(d.length>1e6)throw d=[],new Error},!1)),t}function M(e){if(!e.fn)return;_(e);const t=g,n=a,s=j;a=g=e,ae(e,e.value,s),a=n,g=t}function ae(e,t,n){let s;try{s=e.fn(t)}catch(i){return e.pure&&(e.state=w,e.owned&&e.owned.forEach(_),e.owned=null),e.updatedAt=n+1,ne(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Y(e,s):e.value=s,e.updatedAt=n)}function Z(e,t,n,s=w,i){const o={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:g,context:null,pure:n};return g===null||g!==Q&&(g.owned?g.owned.push(o):g.owned=[o]),o}function z(e){const t=p;if(e.state===0||t)return;if(e.state===O||t)return P(e);if(e.suspense&&k(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<j);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===w||t)M(e);else if(e.state===O||t){const i=d;d=null,S(()=>P(e,n[0]),!1),d=i}}function S(e,t){if(d)return e();let n=!1;t||(d=[]),b?n=!0:b=[],j++;try{const s=e();return de(n),s}catch(s){n||(b=null),d=null,ne(s)}}function de(e){if(d&&(ee(d),d=null),e)return;const t=b;b=null,t.length&&S(()=>fe(t),!1)}function ee(e){for(let t=0;t<e.length;t++)z(e[t])}function P(e,t){const n=p;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===w||n?i!==t&&(!i.updatedAt||i.updatedAt<j)&&z(i):(i.state===O||n)&&P(i,t))}}function te(e){const t=p;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=O,s.pure?d.push(s):b.push(s),s.observers&&te(s))}}function _(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const o=i.pop(),l=n.observerSlots.pop();s<i.length&&(o.sourceSlots[l]=s,i[s]=o,n.observerSlots[s]=l)}}if(e.owned){for(t=0;t<e.owned.length;t++)_(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function he(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function ne(e){throw e=he(e),e}function q(e,t){return k(()=>e(t||{}))}function C(){return!0}const ge={get(e,t,n){return t===N?n:e.get(t)},has(e,t){return t===N?!0:e.has(t)},set:C,deleteProperty:C,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:C,deleteProperty:C}},ownKeys(e){return e.keys()}};function D(e){return(e=typeof e=="function"?e():e)?e:{}}function ye(...e){let t=!1;for(let s=0;s<e.length;s++){const i=e[s];t=t||!!i&&N in i,e[s]=typeof i=="function"?(t=!0,T(i)):i}if(t)return new Proxy({get(s){for(let i=e.length-1;i>=0;i--){const o=D(e[i])[s];if(o!==void 0)return o}},has(s){for(let i=e.length-1;i>=0;i--)if(s in D(e[i]))return!0;return!1},keys(){const s=[];for(let i=0;i<e.length;i++)s.push(...Object.keys(D(e[i])));return[...new Set(s)]}},ge);const n={};for(let s=e.length-1;s>=0;s--)if(e[s]){const i=Object.getOwnPropertyDescriptors(e[s]);for(const o in i)o in n||Object.defineProperty(n,o,{enumerable:!0,get(){for(let l=e.length-1;l>=0;l--){const r=(e[l]||{})[o];if(r!==void 0)return r}}})}return n}function pe(e){let t=!1;const n=e.keyed,s=T(()=>e.when,void 0,{equals:(i,o)=>t?i===o:!i==!o});return T(()=>{const i=s();if(i){const o=e.children,l=typeof o=="function"&&o.length>0;return t=n||l,l?k(()=>o(i)):o}return e.fallback},void 0,void 0)}const be=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],we=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...be]),me=new Set(["innerHTML","textContent","innerText","children"]),Ae=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),R=Object.assign(Object.create(null),{class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"}),xe=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Se={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Ce(e,t,n){let s=n.length,i=t.length,o=s,l=0,r=0,f=t[i-1].nextSibling,c=null;for(;l<i||r<o;){if(t[l]===n[r]){l++,r++;continue}for(;t[i-1]===n[o-1];)i--,o--;if(i===l){const u=o<s?r?n[r-1].nextSibling:n[o-r]:f;for(;r<o;)e.insertBefore(n[r++],u)}else if(o===r)for(;l<i;)(!c||!c.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[o-1]&&n[r]===t[i-1]){const u=t[--i].nextSibling;e.insertBefore(n[r++],t[l++].nextSibling),e.insertBefore(n[--o],u),t[i]=n[o]}else{if(!c){c=new Map;let h=r;for(;h<o;)c.set(n[h],h++)}const u=c.get(t[l]);if(u!=null)if(r<u&&u<o){let h=l,B=1,U;for(;++h<i&&h<o&&!((U=c.get(t[h]))==null||U!==u+B);)B++;if(B>u-r){const le=t[l];for(;r<u;)e.insertBefore(n[r++],le)}else e.replaceChild(n[r++],t[l++])}else l++;else t[l++].remove()}}}const K="_$DX_DELEGATE";function Ee(e,t,n,s={}){let i;return ue(o=>{i=o,t===document?e():re(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{i(),t.textContent=""}}function se(e,t,n){const s=document.createElement("template");if(s.innerHTML=e,t&&s.innerHTML.split("<").length-1!==t)throw`The browser resolved template HTML does not match JSX input:
${s.innerHTML}

${e}. Is your HTML properly formed?`;let i=s.content.firstChild;return n&&(i=i.firstChild),i}function ie(e,t=window.document){const n=t[K]||(t[K]=new Set);for(let s=0,i=e.length;s<i;s++){const o=e[s];n.has(o)||(n.add(o),t.addEventListener(o,Me))}}function oe(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function Le(e,t,n,s){s==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,s)}function Ne(e,t){t==null?e.removeAttribute("class"):e.className=t}function $e(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const i=n[0];e.addEventListener(t,n[0]=o=>i.call(e,n[1],o))}else e.addEventListener(t,n)}function Oe(e,t,n={}){const s=Object.keys(t||{}),i=Object.keys(n);let o,l;for(o=0,l=i.length;o<l;o++){const r=i[o];!r||r==="undefined"||t[r]||(V(e,r,!1),delete n[r])}for(o=0,l=s.length;o<l;o++){const r=s[o],f=!!t[r];!r||r==="undefined"||n[r]===f||!f||(V(e,r,!0),n[r]=f)}return n}function Te(e,t,n){if(!t)return n?oe(e,"style"):t;const s=e.style;if(typeof t=="string")return s.cssText=t;typeof n=="string"&&(s.cssText=n=void 0),n||(n={}),t||(t={});let i,o;for(o in n)t[o]==null&&s.removeProperty(o),delete n[o];for(o in t)i=t[o],i!==n[o]&&(s.setProperty(o,i),n[o]=i);return n}function Pe(e,t={},n,s){const i={};return s||A(()=>i.children=x(e,t.children,i.children)),A(()=>t.ref&&t.ref(e)),A(()=>je(e,t,n,!0,i,!0)),i}function re(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return x(e,t,s,n);A(i=>x(e,t(),i,n),s)}function je(e,t,n,s,i={},o=!1){t||(t={});for(const l in i)if(!(l in t)){if(l==="children")continue;i[l]=X(e,l,null,i[l],n,o)}for(const l in t){if(l==="children"){s||x(e,t.children);continue}const r=t[l];i[l]=X(e,l,r,i[l],n,o)}}function ke(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function V(e,t,n){const s=t.trim().split(/\s+/);for(let i=0,o=s.length;i<o;i++)e.classList.toggle(s[i],n)}function X(e,t,n,s,i,o){let l,r,f;if(t==="style")return Te(e,n,s);if(t==="classList")return Oe(e,n,s);if(n===s)return s;if(t==="ref")o||n(e);else if(t.slice(0,3)==="on:"){const c=t.slice(3);s&&e.removeEventListener(c,s),n&&e.addEventListener(c,n)}else if(t.slice(0,10)==="oncapture:"){const c=t.slice(10);s&&e.removeEventListener(c,s,!0),n&&e.addEventListener(c,n,!0)}else if(t.slice(0,2)==="on"){const c=t.slice(2).toLowerCase(),u=xe.has(c);if(!u&&s){const h=Array.isArray(s)?s[0]:s;e.removeEventListener(c,h)}(u||n)&&($e(e,c,n,u),u&&ie([c]))}else if((f=me.has(t))||!i&&(R[t]||(r=we.has(t)))||(l=e.nodeName.includes("-")))t==="class"||t==="className"?Ne(e,n):l&&!r&&!f?e[ke(t)]=n:e[R[t]||t]=n;else{const c=i&&t.indexOf(":")>-1&&Se[t.split(":")[0]];c?Le(e,c,t,n):oe(e,Ae[t]||t,n)}return n}function Me(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),y.registry&&!y.done&&(y.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>{for(;s&&s.nodeType!==8&&s.nodeValue!=="pl-"+e;){let i=s.nextSibling;s.remove(),s=i}s&&s.remove()}));n;){const s=n[t];if(s&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?s.call(n,i,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function x(e,t,n,s,i){for(y.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,l=s!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(y.context)return n;if(o==="number"&&(t=t.toString()),l){let r=n[0];r&&r.nodeType===3?r.data=t:r=document.createTextNode(t),n=m(e,n,s,r)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean"){if(y.context)return n;n=m(e,n,s)}else{if(o==="function")return A(()=>{let r=t();for(;typeof r=="function";)r=r();n=x(e,r,n,s)}),()=>n;if(Array.isArray(t)){const r=[],f=n&&Array.isArray(n);if(F(r,t,n,i))return A(()=>n=x(e,r,n,s,!0)),()=>n;if(y.context){if(!r.length)return n;for(let c=0;c<r.length;c++)if(r[c].parentNode)return n=r}if(r.length===0){if(n=m(e,n,s),l)return n}else f?n.length===0?G(e,r,s):Ce(e,n,r):(n&&m(e),G(e,r));n=r}else if(t instanceof Node){if(y.context&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=m(e,n,s,t);m(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function F(e,t,n,s){let i=!1;for(let o=0,l=t.length;o<l;o++){let r=t[o],f=n&&n[o];if(r instanceof Node)e.push(r);else if(!(r==null||r===!0||r===!1))if(Array.isArray(r))i=F(e,r,f)||i;else if(typeof r=="function")if(s){for(;typeof r=="function";)r=r();i=F(e,Array.isArray(r)?r:[r],Array.isArray(f)?f:[f])||i}else e.push(r),i=!0;else{const c=String(r);f&&f.nodeType===3&&f.data===c?e.push(f):e.push(document.createTextNode(c))}}return i}function G(e,t,n=null){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function m(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let o=!1;for(let l=t.length-1;l>=0;l--){const r=t[l];if(i!==r){const f=r.parentNode===e;!o&&!l?f?e.replaceChild(i,r):e.insertBefore(i,n):f&&r.remove()}else o=!0}}else e.insertBefore(i,n);return[i]}function E(){return!0}const _e={get(e,t,n){return t===N?n:e.get(t)},has(e,t){return e.has(t)},set:E,deleteProperty:E,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:E,deleteProperty:E}},ownKeys(e){return e.keys()}};function Be(e){return(...t)=>{for(const n of e)n&&n(...t)}}function De(e){return(...t)=>{for(let n=e.length-1;n>=0;n--){const s=e[n];s&&s(...t)}}}var H=e=>typeof e=="function"&&!e.length?e():e;const ve=/((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g;function J(e){const t={};let n;for(;n=ve.exec(e);)t[n[1]]=n[2];return t}function qe(e,t){if(typeof e=="object"&&typeof t=="object")return{...e,...t};if(typeof e=="string"&&typeof t=="string")return`${e};${t}`;const n=typeof e=="object"?e:J(e),s=typeof t=="object"?t:J(t);return{...n,...s}}const v=(e,t,n)=>{let s;for(const i of e){const o=H(i)[t];s?o&&(s=n(s,o)):s=o}return s};function L(...e){const t=Array.isArray(e[0]),n=t?e[0]:e;if(n.length===1)return n[0];const s=t&&e[1]?.reverseEventHandlers?De:Be,i={};for(const l of n){const r=H(l);for(const f in r)if(f[0]==="o"&&f[1]==="n"&&f[2]){const c=r[f],u=f.toLowerCase(),h=typeof c=="function"?c:Array.isArray(c)?c.length===1?c[0]:c[0].bind(void 0,c[1]):void 0;h?i[u]?i[u].push(h):i[u]=[h]:delete i[u]}}const o=ye(...n);return new Proxy({get(l){if(typeof l!="string")return Reflect.get(o,l);if(l==="style")return v(n,"style",qe);if(l==="ref"){const r=[];for(const f of n){const c=H(f)[l];typeof c=="function"&&r.push(c)}return s(r)}if(l[0]==="o"&&l[1]==="n"&&l[2]){const r=i[l.toLowerCase()];return r?s(r):Reflect.get(o,l)}return l==="class"||l==="className"?v(n,l,(r,f)=>`${r} ${f}`):l==="classList"?v(n,l,(r,f)=>({...r,...f})):Reflect.get(o,l)},has(l){return Reflect.has(o,l)},keys(){return Object.keys(o)}},_e)}const Fe=se("<button></button>",2),He=se('<div class="box-border flex min-h-screen w-full flex-col items-center justify-center space-y-4 bg-gray-800 p-24 text-white"><div class="wrapper-v"><button>Toggle</button></div></div>',6),Ue=e=>{const t=L(L(L(L(e,{class:"btn",onClick:()=>console.log("click"),type:"button",onmouseenter:()=>console.log("mouse enter"),onmouseleave:()=>console.log("mouse leave"),style:{color:"#eee"}}),{onClick:()=>console.log("click 2"),onmouseenter:()=>console.log("mouse enter 2"),"aria-label":"button",style:{padding:"8px 16px"}}),{onClick:()=>console.log("click 3"),onkeydown:()=>console.log("key down"),"aria-label":"button 2"}),{onClick:()=>console.log("click 4"),onkeydown:()=>console.log("key down 2"),"aria-label":"button 3",class:"btn-primary",style:{color:"#fff"}});return(()=>{const n=Fe.cloneNode(!0);return Pe(n,t,!1,!1),n})()},Ie=()=>{const[e,t]=I(!0),[n,s]=I(0),i=()=>s(n()+1);return(()=>{const o=He.cloneNode(!0),l=o.firstChild,r=l.firstChild;return r.$$click=()=>t(!e()),re(l,q(pe,{get when(){return e()},get children(){return Array.from({length:2e3},(f,c)=>q(Ue,{class:"btn-primary",onClick:i,get children(){return[c,"_",T(()=>n())]}}))}}),null),o})()};Ee(()=>q(Ie,{}),document.getElementById("root"));ie(["click"]);