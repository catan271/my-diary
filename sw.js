if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,n)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const t=e=>r(e,l),d={module:{uri:l},exports:o,require:t};s[l]=Promise.all(i.map((e=>d[e]||t(e)))).then((e=>(n(...e),o)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"200",revision:"11d610476461bf6d6dd5b029f3a30924"},{url:"404",revision:"11d610476461bf6d6dd5b029f3a30924"},{url:"assets/entry.11a8c665.js",revision:null},{url:"assets/error-404.1ff5d6ea.js",revision:null},{url:"assets/error-404.a6f724cc.css",revision:null},{url:"assets/error-500.9c9fc689.js",revision:null},{url:"assets/error-500.d92554dd.css",revision:null},{url:"assets/index.2256bc41.js",revision:null},{url:"assets/nuxt-link.63b9ad6a.js",revision:null},{url:"assets/test.da5783f3.js",revision:null},{url:"assets/workbox-window.prod.es5.a7b12eab.js",revision:null},{url:"/my-diary/",revision:"a61d924cbf3eb07e78a5d564ab63fadb"},{url:"test",revision:"94957847088d66409a44bb5d76156202"},{url:"manifest.webmanifest",revision:"e1d33eaee09b55affdc554ce34b045fd"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
