var V=Object.defineProperty;var G=(e,t,n)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var A=(e,t,n)=>G(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const f of l.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}})();function w(){}function D(e){return e()}function j(){return Object.create(null)}function k(e){e.forEach(D)}function F(e){return typeof e=="function"}function H(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function J(e){return Object.keys(e).length===0}function y(e,t){e.appendChild(t)}function z(e,t,n){e.insertBefore(t,n||null)}function E(e){e.parentNode&&e.parentNode.removeChild(e)}function K(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function b(e){return document.createElement(e)}function R(e){return document.createTextNode(e)}function T(){return R(" ")}function C(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function Q(e){return function(t){return t.preventDefault(),e.call(this,t)}}function W(e,t,n){e.getAttribute(t)!==n&&e.setAttribute(t,n)}function X(e){return Array.from(e.childNodes)}function Y(e,t){t=""+t,e.data!==t&&(e.data=t)}let P;function $(e){P=e}const g=[],Z=[];let m=[];const x=[],ee=Promise.resolve();let L=!1;function te(){L||(L=!0,ee.then(U))}function N(e){m.push(e)}const O=new Set;let _=0;function U(){if(_!==0)return;const e=P;do{try{for(;_<g.length;){const t=g[_];_++,$(t),ne(t.$$)}}catch(t){throw g.length=0,_=0,t}for($(null),g.length=0,_=0;Z.length;)Z.pop()();for(let t=0;t<m.length;t+=1){const n=m[t];O.has(n)||(O.add(n),n())}m.length=0}while(g.length);for(;x.length;)x.pop()();L=!1,O.clear(),$(e)}function ne(e){if(e.fragment!==null){e.update(),k(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(N)}}function re(e){const t=[],n=[];m.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),m=t}const oe=new Set;function ce(e,t){e&&e.i&&(oe.delete(e),e.i(t))}function v(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function le(e,t,n){const{fragment:o,after_update:r}=e.$$;o&&o.m(t,n),N(()=>{const l=e.$$.on_mount.map(D).filter(F);e.$$.on_destroy?e.$$.on_destroy.push(...l):k(l),e.$$.on_mount=[]}),r.forEach(N)}function fe(e,t){const n=e.$$;n.fragment!==null&&(re(n.after_update),k(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ue(e,t){e.$$.dirty[0]===-1&&(g.push(e),te(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function se(e,t,n,o,r,l,f=null,u=[-1]){const s=P;$(e);const c=e.$$={fragment:null,ctx:[],props:l,update:w,not_equal:r,bound:j(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(s?s.$$.context:[])),callbacks:j(),dirty:u,skip_bound:!1,root:t.target||s.$$.root};f&&f(c.root);let d=!1;if(c.ctx=n?n(e,t.props||{},(i,a,...p)=>{const h=p.length?p[0]:a;return c.ctx&&r(c.ctx[i],c.ctx[i]=h)&&(!c.skip_bound&&c.bound[i]&&c.bound[i](h),d&&ue(e,i)),a}):[],c.update(),d=!0,k(c.before_update),c.fragment=o?o(c.ctx):!1,t.target){if(t.hydrate){const i=X(t.target);c.fragment&&c.fragment.l(i),i.forEach(E)}else c.fragment&&c.fragment.c();t.intro&&ce(e.$$.fragment),le(e,t.target,t.anchor),U()}$(s)}class ie{constructor(){A(this,"$$");A(this,"$$set")}$destroy(){fe(this,1),this.$destroy=w}$on(t,n){if(!F(n))return w;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!J(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const de="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(de);function I(e,t,n){const o=e.slice();return o[6]=t[n],o[8]=n,o}function B(e,t,n){const o=e.slice();return o[9]=t[n],o[10]=t,o[11]=n,o}function M(e){let t,n=(e[9]==="💣"?" ":"zZ".includes(e[9])?"📍":e[9])+"",o,r,l;function f(){return e[3](e[9],e[10],e[11],e[8])}function u(){return e[4](e[9],e[10],e[11])}return{c(){t=b("td"),o=R(n),W(t,"class","svelte-1vsqjw")},m(s,c){z(s,t,c),y(t,o),r||(l=[C(t,"click",f),C(t,"contextmenu",Q(u))],r=!0)},p(s,c){e=s,c&4&&n!==(n=(e[9]==="💣"?" ":"zZ".includes(e[9])?"📍":e[9])+"")&&Y(o,n)},d(s){s&&E(t),r=!1,k(l)}}}function q(e){let t,n,o=v(e[6]),r=[];for(let l=0;l<o.length;l+=1)r[l]=M(B(e,o,l));return{c(){t=b("tr");for(let l=0;l<r.length;l+=1)r[l].c();n=T()},m(l,f){z(l,t,f);for(let u=0;u<r.length;u+=1)r[u]&&r[u].m(t,null);y(t,n)},p(l,f){if(f&5){o=v(l[6]);let u;for(u=0;u<o.length;u+=1){const s=B(l,o,u);r[u]?r[u].p(s,f):(r[u]=M(s),r[u].c(),r[u].m(t,n))}for(;u<r.length;u+=1)r[u].d(1);r.length=o.length}},d(l){l&&E(t),K(r,l)}}}function ae(e){let t,n,o,r,l=v(e[2]),f=[];for(let u=0;u<l.length;u+=1)f[u]=q(I(e,l,u));return{c(){t=b("main"),n=b("h1"),n.textContent="Aknakereső",o=T(),r=b("table");for(let u=0;u<f.length;u+=1)f[u].c()},m(u,s){z(u,t,s),y(t,n),y(t,o),y(t,r);for(let c=0;c<f.length;c+=1)f[c]&&f[c].m(r,null)},p(u,[s]){if(s&5){l=v(u[2]);let c;for(c=0;c<l.length;c+=1){const d=I(u,l,c);f[c]?f[c].p(d,s):(f[c]=q(d),f[c].c(),f[c].m(r,null))}for(;c<f.length;c+=1)f[c].d(1);f.length=l.length}},i:w,o:w,d(u){u&&E(t),K(f,u)}}}function he(e,t,n){var o=!1;const r=15;var l=Array.from({length:r},c=>"💣").concat(Array.from({length:100-r},c=>" ")).sort((c,d)=>Math.random()-.5),f=Array.from({length:10},(c,d)=>Array.from({length:10},(i,a)=>l[d*10+a]));return[o,r,f,(c,d,i,a)=>{if(!o)if(c==="💣")n(2,d[i]="💀",f),n(0,o=!0);else{let p=0;[1,0,-1].forEach(h=>[1,0,-1].forEach(S=>{(f[a+h]&&f[a+h][i+S]==="💣"||f[a+h]&&f[a+h][i+S]==="Z")&&p++})),n(2,d[i]=p,f)}},(c,d,i)=>{if("zZ".includes(c)){n(2,d[i]=" ",f);return}c==="💣"?n(2,d[i]="Z",f):n(2,d[i]="z",f)}]}class _e extends ie{constructor(t){super(),se(this,t,he,ae,H,{})}}new _e({target:document.getElementById("app")});
