if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,r)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let u={};const t=s=>l(s,i),o={module:{uri:i},exports:u,require:t};e[i]=Promise.all(n.map((s=>o[s]||t(s)))).then((s=>(r(...s),u)))}}define(["./workbox-27b29e6f"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/create.3037d474.js",revision:null},{url:"assets/default.4951efce.css",revision:null},{url:"assets/default.9de55bea.js",revision:null},{url:"assets/entry.69310880.js",revision:null},{url:"assets/entry.a96c8fde.css",revision:null},{url:"assets/error-404.04a274f8.js",revision:null},{url:"assets/error-404.a6f724cc.css",revision:null},{url:"assets/error-500.7940bf97.js",revision:null},{url:"assets/error-500.d92554dd.css",revision:null},{url:"assets/index.06921cb1.js",revision:null},{url:"assets/index.072b0166.js",revision:null},{url:"assets/index.4b485eac.css",revision:null},{url:"assets/index.6e876fbe.js",revision:null},{url:"assets/index.9a0c3405.css",revision:null},{url:"assets/index.9ca25dcd.js",revision:null},{url:"assets/index.ab26344c.js",revision:null},{url:"assets/nuxt-img.35e1208d.js",revision:null},{url:"assets/nuxt-link.52159726.js",revision:null},{url:"assets/slide-in.d67acb73.css",revision:null},{url:"assets/slide-in.dd4807f1.js",revision:null},{url:"assets/workbox-window.prod.es5.a7b12eab.js",revision:null},{url:"manifest.webmanifest",revision:"e1d33eaee09b55affdc554ce34b045fd"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
