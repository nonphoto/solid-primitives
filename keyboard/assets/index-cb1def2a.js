(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();const A={};function de(e){A.context=e}const pe=(e,t)=>e===t,ge=Symbol("solid-track"),B={equals:pe};let re=ue;const S=1,H=2,ie={owned:null,cleanups:null,context:null,owner:null};var d=null;let C=null,h=null,p=null,v=null,F=0;function $(e,t){const n=h,s=d,r=e.length===0,i=r?ie:{owned:null,cleanups:null,context:null,owner:t===void 0?s:t},o=r?e:()=>e(()=>N(()=>G(i)));d=i,h=null;try{return _(o,!0)}finally{h=n,d=s}}function P(e,t){t=t?Object.assign({},B,t):B;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=r=>(typeof r=="function"&&(r=r(n.value)),fe(n,r));return[oe.bind(n),s]}function J(e,t,n){const s=Y(e,t,!1,S);D(s)}function we(e,t,n){re=Se;const s=Y(e,t,!1,S);s.user=!0,v?v.push(s):D(s)}function Q(e,t,n){n=n?Object.assign({},B,n):B;const s=Y(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,D(s),oe.bind(s)}function ye(e){return _(e,!1)}function N(e){if(h===null)return e();const t=h;h=null;try{return e()}finally{h=t}}function me(e,t,n){const s=Array.isArray(e);let r,i=n&&n.defer;return o=>{let l;if(s){l=Array(e.length);for(let u=0;u<e.length;u++)l[u]=e[u]()}else l=e();if(i){i=!1;return}const c=N(()=>t(l,r,o));return r=l,c}}function X(e){return d===null||(d.cleanups===null?d.cleanups=[e]:d.cleanups.push(e)),e}function le(){return d}function oe(){const e=C;if(this.sources&&(this.state||e))if(this.state===S||e)D(this);else{const t=p;p=null,_(()=>j(this),!1),p=t}if(h){const t=this.observers?this.observers.length:0;h.sources?(h.sources.push(this),h.sourceSlots.push(t)):(h.sources=[this],h.sourceSlots=[t]),this.observers?(this.observers.push(h),this.observerSlots.push(h.sources.length-1)):(this.observers=[h],this.observerSlots=[h.sources.length-1])}return this.value}function fe(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&_(()=>{for(let r=0;r<e.observers.length;r+=1){const i=e.observers[r],o=C&&C.running;o&&C.disposed.has(i),(o&&!i.tState||!o&&!i.state)&&(i.pure?p.push(i):v.push(i),i.observers&&ce(i)),o||(i.state=S)}if(p.length>1e6)throw p=[],new Error},!1)),t}function D(e){if(!e.fn)return;G(e);const t=d,n=h,s=F;h=d=e,be(e,e.value,s),h=n,d=t}function be(e,t,n){let s;try{s=e.fn(t)}catch(r){return e.pure&&(e.state=S,e.owned&&e.owned.forEach(G),e.owned=null),e.updatedAt=n+1,ae(r)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?fe(e,s):e.value=s,e.updatedAt=n)}function Y(e,t,n,s=S,r){const i={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:d,context:null,pure:n};return d===null||d!==ie&&(d.owned?d.owned.push(i):d.owned=[i]),i}function q(e){const t=C;if(e.state===0||t)return;if(e.state===H||t)return j(e);if(e.suspense&&N(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<F);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===S||t)D(e);else if(e.state===H||t){const r=p;p=null,_(()=>j(e,n[0]),!1),p=r}}function _(e,t){if(p)return e();let n=!1;t||(p=[]),v?n=!0:v=[],F++;try{const s=e();return ve(n),s}catch(s){n||(v=null),p=null,ae(s)}}function ve(e){if(p&&(ue(p),p=null),e)return;const t=v;v=null,t.length&&_(()=>re(t),!1)}function ue(e){for(let t=0;t<e.length;t++)q(e[t])}function Se(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:q(s)}for(A.context&&de(),t=0;t<n;t++)q(e[t])}function j(e,t){const n=C;e.state=0;for(let s=0;s<e.sources.length;s+=1){const r=e.sources[s];r.sources&&(r.state===S||n?r!==t&&(!r.updatedAt||r.updatedAt<F)&&q(r):(r.state===H||n)&&j(r,t))}}function ce(e){const t=C;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=H,s.pure?p.push(s):v.push(s),s.observers&&ce(s))}}function G(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const i=r.pop(),o=n.observerSlots.pop();s<r.length&&(i.sourceSlots[o]=s,r[s]=i,n.observerSlots[s]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)G(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function xe(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function ae(e){throw e=xe(e),e}const Ae=Symbol("fallback");function ee(e){for(let t=0;t<e.length;t++)e[t]()}function Ce(e,t,n={}){let s=[],r=[],i=[],o=0,l=t.length>1?[]:null;return X(()=>ee(i)),()=>{let c=e()||[],u,f;return c[ge],N(()=>{let a=c.length,w,x,M,O,R,y,m,b,E;if(a===0)o!==0&&(ee(i),i=[],s=[],r=[],o=0,l&&(l=[])),n.fallback&&(s=[Ae],r[0]=$(he=>(i[0]=he,n.fallback())),o=1);else if(o===0){for(r=new Array(a),f=0;f<a;f++)s[f]=c[f],r[f]=$(g);o=a}else{for(M=new Array(a),O=new Array(a),l&&(R=new Array(a)),y=0,m=Math.min(o,a);y<m&&s[y]===c[y];y++);for(m=o-1,b=a-1;m>=y&&b>=y&&s[m]===c[b];m--,b--)M[b]=r[m],O[b]=i[m],l&&(R[b]=l[m]);for(w=new Map,x=new Array(b+1),f=b;f>=y;f--)E=c[f],u=w.get(E),x[f]=u===void 0?-1:u,w.set(E,f);for(u=y;u<=m;u++)E=s[u],f=w.get(E),f!==void 0&&f!==-1?(M[f]=r[u],O[f]=i[u],l&&(R[f]=l[u]),f=x[f],w.set(E,f)):i[u]();for(f=y;f<a;f++)f in M?(r[f]=M[f],i[f]=O[f],l&&(l[f]=R[f],l[f](f))):r[f]=$(g);r=r.slice(0,o=a),s=c.slice(0)}return r});function g(a){if(i[f]=a,l){const[w,x]=P(f);return l[f]=x,t(c[f],w)}return t(c[f])}}}function Z(e,t){return N(()=>e(t||{}))}function Ee(e){const t="fallback"in e&&{fallback:()=>e.fallback};return Q(Ce(()=>e.each,e.children,t||void 0))}function Te(e,t,n){let s=n.length,r=t.length,i=s,o=0,l=0,c=t[r-1].nextSibling,u=null;for(;o<r||l<i;){if(t[o]===n[l]){o++,l++;continue}for(;t[r-1]===n[i-1];)r--,i--;if(r===o){const f=i<s?l?n[l-1].nextSibling:n[i-l]:c;for(;l<i;)e.insertBefore(n[l++],f)}else if(i===l)for(;o<r;)(!u||!u.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[i-1]&&n[l]===t[r-1]){const f=t[--r].nextSibling;e.insertBefore(n[l++],t[o++].nextSibling),e.insertBefore(n[--i],f),t[r]=n[i]}else{if(!u){u=new Map;let g=l;for(;g<i;)u.set(n[g],g++)}const f=u.get(t[o]);if(f!=null)if(l<f&&f<i){let g=o,a=1,w;for(;++g<r&&g<i&&!((w=u.get(t[g]))==null||w!==f+a);)a++;if(a>f-l){const x=t[o];for(;l<f;)e.insertBefore(n[l++],x)}else e.replaceChild(n[l++],t[o++])}else o++;else t[o++].remove()}}}function Le(e,t,n,s={}){let r;return $(i=>{r=i,t===document?e():L(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{r(),t.textContent=""}}function k(e,t,n){const s=document.createElement("template");if(s.innerHTML=e,t&&s.innerHTML.split("<").length-1!==t)throw`The browser resolved template HTML does not match JSX input:
${s.innerHTML}

${e}. Is your HTML properly formed?`;let r=s.content.firstChild;return n&&(r=r.firstChild),r}function L(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return W(e,t,s,n);J(r=>W(e,t(),r,n),s)}function W(e,t,n,s,r){for(A.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,o=s!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,i==="string"||i==="number"){if(A.context)return n;if(i==="number"&&(t=t.toString()),o){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=T(e,n,s,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||i==="boolean"){if(A.context)return n;n=T(e,n,s)}else{if(i==="function")return J(()=>{let l=t();for(;typeof l=="function";)l=l();n=W(e,l,n,s)}),()=>n;if(Array.isArray(t)){const l=[],c=n&&Array.isArray(n);if(V(l,t,n,r))return J(()=>n=W(e,l,n,s,!0)),()=>n;if(A.context){if(!l.length)return n;for(let u=0;u<l.length;u++)if(l[u].parentNode)return n=l}if(l.length===0){if(n=T(e,n,s),o)return n}else c?n.length===0?te(e,l,s):Te(e,n,l):(n&&T(e),te(e,l));n=l}else if(t instanceof Node){if(A.context&&t.parentNode)return n=o?[t]:t;if(Array.isArray(n)){if(o)return n=T(e,n,s,t);T(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function V(e,t,n,s){let r=!1;for(let i=0,o=t.length;i<o;i++){let l=t[i],c=n&&n[i];if(l instanceof Node)e.push(l);else if(!(l==null||l===!0||l===!1))if(Array.isArray(l))r=V(e,l,c)||r;else if(typeof l=="function")if(s){for(;typeof l=="function";)l=l();r=V(e,Array.isArray(l)?l:[l],Array.isArray(c)?c:[c])||r}else e.push(l),r=!0;else{const u=String(l);c&&c.nodeType===3&&c.data===u?e.push(c):e.push(document.createTextNode(u))}}return r}function te(e,t,n=null){for(let s=0,r=t.length;s<r;s++)e.insertBefore(t[s],n)}function T(e,t,n,s){if(n===void 0)return e.textContent="";const r=s||document.createTextNode("");if(t.length){let i=!1;for(let o=t.length-1;o>=0;o--){const l=t[o];if(r!==l){const c=l.parentNode===e;!i&&!o?c?e.replaceChild(r,l):e.insertBefore(r,n):c&&l.remove()}else i=!0}}else e.insertBefore(r,n);return[r]}var I=(e,t)=>e===t||e.length===t.length&&e.every((n,s)=>n===t[s]),Ne=e=>le()?X(e):e;function U(e,t,n,s){return e.addEventListener(t,n,s),Ne(e.removeEventListener.bind(e,t,n,s))}function z(e,t=le()){let n=0,s,r;return()=>(n++,X(()=>{n--,queueMicrotask(()=>{!n&&r&&(r(),r=s=void 0)})}),r||$(i=>s=e(r=i),t),s)}function ne(e,t){for(let n=e.length-1;n>=0;n--){const s=t.slice(0,n+1);if(!I(e[n],s))return!1}return!0}const K=z(()=>{const[e,t]=P([]),[n,s]=P(null),r=()=>t([]);return U(window,"keydown",i=>{if(i.repeat||typeof i.key!="string")return;const o=i.key.toUpperCase();e().includes(o)||ye(()=>{s(i),t(l=>[...l,o])})}),U(window,"keyup",i=>{if(typeof i.key!="string")return;const o=i.key.toUpperCase();t(l=>l.filter(c=>c!==o))}),U(window,"blur",r),U(window,"contextmenu",i=>{i.defaultPrevented||r()}),[e,{event:n}]}),_e=z(()=>{const[e]=K();let t=N(e);return Q(()=>{const n=e(),s=t;return t=n,s.length===0&&n.length===1?n[0]:null})}),Me=z(()=>{const[e]=K();return Q(t=>e().length===0?[]:[...t,e()],[])});function $e(e,t={}){e=e.toUpperCase();const{preventDefault:n=!0}=t,[,{event:s}]=K(),r=_e();return Q(()=>r()===e?(n&&s().preventDefault(),!0):!1)}function se(e,t,n={}){if(!e.length)return;e=e.map(f=>f.toUpperCase());const{preventDefault:s=!0,requireReset:r=!1}=n,[,{event:i}]=K(),o=Me();let l=!1;we(me(o,r?f=>{if(!f.length)return l=!1;l||(f.length<e.length?ne(f,e.slice(0,f.length))?s&&i().preventDefault():l=!0:(l=!0,ne(f,e)&&(s&&i().preventDefault(),t())))}:f=>{const g=f.at(-1);if(g){if(s&&g.length<e.length){I(g,e.slice(0,e.length-1))&&i().preventDefault();return}if(I(g,e)){const a=f.at(-2);(!a||I(a,e.slice(0,e.length-1)))&&(s&&i().preventDefault(),t())}}}))}const De=k(`<ul class="
        fixed top-4 right-4
        flex flex-col items-end
        "></ul>`,2),Ke=k('<li class="border-b border-b-red-700 bg-red-500 p-2 text-white"></li>',2),Oe=k('<div class="box-border flex min-h-screen w-full flex-col items-center justify-center space-y-4 bg-gray-800 p-24 text-white"><div class="wrapper-v"><h4>Is pressing Shift?</h4><p></p></div><div class="wrapper-v"><h4>Pressed keys</h4><p class="min-h-5"></p></div></div>',14),Re=e=>{const[t,n]=P([]),s=r=>{const i={text:r};n(o=>[...o,i]),setTimeout(()=>n(o=>o.filter(l=>l!==i)),3e3)};return e.messageTrigger(s),(()=>{const r=De.cloneNode(!0);return L(r,Z(Ee,{get each(){return t()},children:({text:i})=>(()=>{const o=Ke.cloneNode(!0);return L(o,i),o})()})),r})()},Ue=()=>{const[e]=K(),t=$e("Shift");se(["Q"],()=>{n("Q pressed")}),se(["Control","E","R"],()=>{n("Control + E + R pressed")},{preventDefault:!0});let n;return(()=>{const s=Oe.cloneNode(!0),r=s.firstChild,i=r.firstChild,o=i.nextSibling,l=r.nextSibling,c=l.firstChild,u=c.nextSibling;return L(o,()=>t()?"YES":"NO"),L(u,()=>e().join(", ")),L(s,Z(Re,{messageTrigger:f=>n=f}),null),s})()};Le(()=>Z(Ue,{}),document.getElementById("root"));