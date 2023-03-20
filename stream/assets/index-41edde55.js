(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();const b={};function be(e){b.context=e}const ve=(e,t)=>e===t,I={equals:ve};let ie=ce;const C=1,H=2,oe={owned:null,cleanups:null,context:null,owner:null},K={};var g=null;let T=null,d=null,m=null,A=null,R=0;function Se(e,t){const n=d,s=g,i=e.length===0,o=i?oe:{owned:null,cleanups:null,context:null,owner:t===void 0?s:t},l=i?e:()=>e(()=>x(()=>G(o)));g=o,d=null;try{return N(l,!0)}finally{d=n,g=s}}function $(e,t){t=t?Object.assign({},I,t):I;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.value)),ue(n,i));return[le.bind(n),s]}function te(e,t,n){const s=W(e,t,!0,C);O(s)}function q(e,t,n){const s=W(e,t,!1,C);O(s)}function xe(e,t,n){ie=$e;const s=W(e,t,!1,C);s.user=!0,A?A.push(s):O(s)}function D(e,t,n){n=n?Object.assign({},I,n):I;const s=W(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,O(s),le.bind(s)}function re(e,t,n){let s,i,o;arguments.length===2&&typeof t=="object"||arguments.length===1?(s=!0,i=e,o=t||{}):(s=e,i=t,o=n||{});let l=null,r=K,u=null,c=!1,f="initialValue"in o,y=typeof s=="function"&&D(s);const v=new Set,[S,E]=(o.storage||$)(o.initialValue),[w,j]=$(void 0),[B,ye]=$(void 0,{equals:!1}),[z,ee]=$(f?"ready":"unresolved");if(b.context){u=`${b.context.id}${b.context.count++}`;let a;o.ssrLoadFrom==="initial"?r=o.initialValue:b.load&&(a=b.load(u))&&(r=a[0])}function U(a,h,p,M){return l===a&&(l=null,f=!0,(a===r||h===r)&&o.onHydrated&&queueMicrotask(()=>o.onHydrated(M,{value:h})),r=K,we(h,p)),h}function we(a,h){N(()=>{h===void 0&&E(()=>a),ee(h!==void 0?"errored":"ready"),j(h);for(const p of v.keys())p.decrement();v.clear()},!1)}function X(){const a=Ae,h=S(),p=w();if(p!==void 0&&!l)throw p;return d&&!d.user&&a&&te(()=>{B(),l&&(a.resolved||v.has(a)||(a.increment(),v.add(a)))}),h}function J(a=!0){if(a!==!1&&c)return;c=!1;const h=y?y():s;if(h==null||h===!1){U(l,x(S));return}const p=r!==K?r:x(()=>i(h,{value:S(),refetching:a}));return typeof p!="object"||!(p&&"then"in p)?(U(l,p,void 0,h),p):(l=p,c=!0,queueMicrotask(()=>c=!1),N(()=>{ee(f?"refreshing":"pending"),ye()},!1),p.then(M=>U(p,M,void 0,h),M=>U(p,void 0,ae(M),h)))}return Object.defineProperties(X,{state:{get:()=>z()},error:{get:()=>w()},loading:{get(){const a=z();return a==="pending"||a==="refreshing"}},latest:{get(){if(!f)return X();const a=w();if(a&&!l)throw a;return S()}}}),y?te(()=>J(!1)):J(!1),[X,{refetch:J,mutate:E}]}function x(e){if(d===null)return e();const t=d;d=null;try{return e()}finally{d=t}}function P(e){return g===null||(g.cleanups===null?g.cleanups=[e]:g.cleanups.push(e)),e}let Ae;function le(){const e=T;if(this.sources&&(this.state||e))if(this.state===C||e)O(this);else{const t=m;m=null,N(()=>V(this),!1),m=t}if(d){const t=this.observers?this.observers.length:0;d.sources?(d.sources.push(this),d.sourceSlots.push(t)):(d.sources=[this],d.sourceSlots=[t]),this.observers?(this.observers.push(d),this.observerSlots.push(d.sources.length-1)):(this.observers=[d],this.observerSlots=[d.sources.length-1])}return this.value}function ue(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&N(()=>{for(let i=0;i<e.observers.length;i+=1){const o=e.observers[i],l=T&&T.running;l&&T.disposed.has(o),(l&&!o.tState||!l&&!o.state)&&(o.pure?m.push(o):A.push(o),o.observers&&fe(o)),l||(o.state=C)}if(m.length>1e6)throw m=[],new Error},!1)),t}function O(e){if(!e.fn)return;G(e);const t=g,n=d,s=R;d=g=e,Ce(e,e.value,s),d=n,g=t}function Ce(e,t,n){let s;try{s=e.fn(t)}catch(i){return e.pure&&(e.state=C,e.owned&&e.owned.forEach(G),e.owned=null),e.updatedAt=n+1,de(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?ue(e,s):e.value=s,e.updatedAt=n)}function W(e,t,n,s=C,i){const o={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:g,context:null,pure:n};return g===null||g!==oe&&(g.owned?g.owned.push(o):g.owned=[o]),o}function F(e){const t=T;if(e.state===0||t)return;if(e.state===H||t)return V(e);if(e.suspense&&x(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<R);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===C||t)O(e);else if(e.state===H||t){const i=m;m=null,N(()=>V(e,n[0]),!1),m=i}}function N(e,t){if(m)return e();let n=!1;t||(m=[]),A?n=!0:A=[],R++;try{const s=e();return Ee(n),s}catch(s){n||(A=null),m=null,de(s)}}function Ee(e){if(m&&(ce(m),m=null),e)return;const t=A;A=null,t.length&&N(()=>ie(t),!1)}function ce(e){for(let t=0;t<e.length;t++)F(e[t])}function $e(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:F(s)}for(b.context&&be(),t=0;t<n;t++)F(e[t])}function V(e,t){const n=T;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===C||n?i!==t&&(!i.updatedAt||i.updatedAt<R)&&F(i):(i.state===H||n)&&V(i,t))}}function fe(e){const t=T;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=H,s.pure?m.push(s):A.push(s),s.observers&&fe(s))}}function G(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const o=i.pop(),l=n.observerSlots.pop();s<i.length&&(o.sourceSlots[l]=s,i[s]=o,n.observerSlots[s]=l)}}if(e.owned){for(t=0;t<e.owned.length;t++)G(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function ae(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function de(e){throw e=ae(e),e}function he(e,t){return x(()=>e(t||{}))}function Te(e){let t=!1;const n=e.keyed,s=D(()=>e.when,void 0,{equals:(i,o)=>t?i===o:!i==!o});return D(()=>{const i=s();if(i){const o=e.children,l=typeof o=="function"&&o.length>0;return t=n||l,l?x(()=>o(i)):o}return e.fallback},void 0,void 0)}function _e(e,t,n){let s=n.length,i=t.length,o=s,l=0,r=0,u=t[i-1].nextSibling,c=null;for(;l<i||r<o;){if(t[l]===n[r]){l++,r++;continue}for(;t[i-1]===n[o-1];)i--,o--;if(i===l){const f=o<s?r?n[r-1].nextSibling:n[o-r]:u;for(;r<o;)e.insertBefore(n[r++],f)}else if(o===r)for(;l<i;)(!c||!c.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[o-1]&&n[r]===t[i-1]){const f=t[--i].nextSibling;e.insertBefore(n[r++],t[l++].nextSibling),e.insertBefore(n[--o],f),t[i]=n[o]}else{if(!c){c=new Map;let y=r;for(;y<o;)c.set(n[y],y++)}const f=c.get(t[l]);if(f!=null)if(r<f&&f<o){let y=l,v=1,S;for(;++y<i&&y<o&&!((S=c.get(t[y]))==null||S!==f+v);)v++;if(v>f-r){const E=t[l];for(;r<f;)e.insertBefore(n[r++],E)}else e.replaceChild(n[r++],t[l++])}else l++;else t[l++].remove()}}}const ne="_$DX_DELEGATE";function Ne(e,t,n,s={}){let i;return Se(o=>{i=o,t===document?e():Q(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{i(),t.textContent=""}}function Z(e,t,n){const s=document.createElement("template");if(s.innerHTML=e,t&&s.innerHTML.split("<").length-1!==t)throw`The browser resolved template HTML does not match JSX input:
${s.innerHTML}

${e}. Is your HTML properly formed?`;let i=s.content.firstChild;return n&&(i=i.firstChild),i}function Le(e,t=window.document){const n=t[ne]||(t[ne]=new Set);for(let s=0,i=e.length;s<i;s++){const o=e[s];n.has(o)||(n.add(o),t.addEventListener(o,Oe))}}function Q(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return k(e,t,s,n);q(i=>k(e,t(),i,n),s)}function Oe(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),b.registry&&!b.done&&(b.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>{for(;s&&s.nodeType!==8&&s.nodeValue!=="pl-"+e;){let i=s.nextSibling;s.remove(),s=i}s&&s.remove()}));n;){const s=n[t];if(s&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?s.call(n,i,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function k(e,t,n,s,i){for(b.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,l=s!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(b.context)return n;if(o==="number"&&(t=t.toString()),l){let r=n[0];r&&r.nodeType===3?r.data=t:r=document.createTextNode(t),n=L(e,n,s,r)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean"){if(b.context)return n;n=L(e,n,s)}else{if(o==="function")return q(()=>{let r=t();for(;typeof r=="function";)r=r();n=k(e,r,n,s)}),()=>n;if(Array.isArray(t)){const r=[],u=n&&Array.isArray(n);if(Y(r,t,n,i))return q(()=>n=k(e,r,n,s,!0)),()=>n;if(b.context){if(!r.length)return n;for(let c=0;c<r.length;c++)if(r[c].parentNode)return n=r}if(r.length===0){if(n=L(e,n,s),l)return n}else u?n.length===0?se(e,r,s):_e(e,n,r):(n&&L(e),se(e,r));n=r}else if(t instanceof Node){if(b.context&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=L(e,n,s,t);L(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function Y(e,t,n,s){let i=!1;for(let o=0,l=t.length;o<l;o++){let r=t[o],u=n&&n[o];if(r instanceof Node)e.push(r);else if(!(r==null||r===!0||r===!1))if(Array.isArray(r))i=Y(e,r,u)||i;else if(typeof r=="function")if(s){for(;typeof r=="function";)r=r();i=Y(e,Array.isArray(r)?r:[r],Array.isArray(u)?u:[u])||i}else e.push(r),i=!0;else{const c=String(r);u&&u.nodeType===3&&u.data===c?e.push(u):e.push(document.createTextNode(c))}}return i}function se(e,t,n=null){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function L(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let o=!1;for(let l=t.length-1;l>=0;l--){const r=t[l];if(i!==r){const u=r.parentNode===e;!o&&!l?u?e.replaceChild(i,r):e.insertBefore(i,n):u&&r.remove()}else o=!0}}else e.insertBefore(i,n);return[i]}var pe=e=>typeof e=="function"&&!e.length?e():e;const Me=e=>e&&"deviceId"in e?{[e.kind==="videoinput"?"video":"audio"]:{deviceId:{exact:e.deviceId}}}:e,_=e=>e?.getTracks()?.forEach(t=>t.stop()),ge=(e,t)=>e?.getTracks()?.forEach(n=>{n.enabled=t===!1}),me=e=>{const[t,{mutate:n,refetch:s}]=re(D(()=>Me(pe(e)||void 0)),(i,o)=>navigator.mediaDevices.getUserMedia(i).then(l=>(o.value&&l!==o.value&&_(o.value),l)));return P(()=>_(t())),[t,{mutate:n,refetch:s,mute:i=>ge(x(t),i),stop:()=>_(x(t))}]},qe=e=>{const[t,{mutate:n,refetch:s,stop:i}]=me(e),[o,l]=De(t),r=()=>{l(),i()};return P(r),[Object.defineProperties(o,{error:{get:()=>t.error},loading:{get:()=>t.loading}}),{stream:t,mutate:n,refetch:s,stop:r}]},De=e=>{const[t,n]=$(0),s=new AudioContext,i=s.createAnalyser();Object.assign(i,{fftSize:128,minDecibels:-60,maxDecibels:-10,smoothingTimeConstant:.8});let o;xe(()=>{const f=pe(e);f!==void 0&&(s.resume(),o?.disconnect(),o=s.createMediaStreamSource(f),o.connect(i))});const l=new Uint8Array(i.frequencyBinCount),r=()=>{i.getByteFrequencyData(l);const f=Math.sqrt(l.reduce((y,v)=>y+v*v,0)/l.length)<<2;n(f>100?100:f)};let u;const c=()=>{u=requestAnimationFrame(c),r()};return c(),P(()=>cancelAnimationFrame(u)),[t,P(()=>{o?.disconnect(),s.state!=="closed"&&s.close()})]},Pe=e=>{const[t,{mutate:n,refetch:s}]=re(typeof e=="function"?D(e):()=>e,(i,o)=>navigator.mediaDevices.getDisplayMedia(i).then(l=>(o.value&&l!==o.value&&_(o.value),l)));return P(()=>_(t())),[t,{mutate:n,refetch:s,mute:i=>ge(x(t),i),stop:()=>_(x(t))}]},je=e=>navigator.mediaDevices.getUserMedia(e?typeof e=="string"?{[e]:!0}:e:{audio:!0,video:!0}).then(_);const Be=Z('<meter min="0" max="100"></meter>',2),Ue=Z('<div class="box-border flex min-h-screen w-full flex-col items-center justify-center space-y-4 bg-gray-800 p-24 text-white"><div class="wrapper-v"><h2>TestVideo</h2><video autoplay></video><h2>Amplitude test</h2><h2>Screen Capture Test</h2><video autoplay></video><button title="We need user interaction to capture screen"></button></div></div>',16),Ie=Z('<button title="We need user interaction to run an audio context">Click to start amplitude level</button>',2),He=()=>{je();const[e]=me({video:!0}),[t,n]=$(),[s]=qe(t),[i,o]=$(),[l]=Pe(i);return(()=>{const r=Ue.cloneNode(!0),u=r.firstChild,c=u.firstChild,f=c.nextSibling,y=f.nextSibling,v=y.nextSibling,S=v.nextSibling,E=S.nextSibling;return Q(u,he(Te,{get when(){return t()},get fallback(){return(()=>{const w=Ie.cloneNode(!0);return w.$$click=()=>n({audio:!0}),w})()},get children(){const w=Be.cloneNode(!0);return q(()=>w.value=s()),w}}),v),E.$$click=()=>o({video:!0}),Q(E,()=>i()?"Change Window":"Capture Screen"),q(w=>{const j=e(),B=l();return j!==w._v$&&(f.srcObject=w._v$=j),B!==w._v$2&&(S.srcObject=w._v$2=B),w},{_v$:void 0,_v$2:void 0}),r})()};Ne(()=>he(He,{}),document.getElementById("root"));Le(["click"]);