if(!self.define){let s,e={};const r=(r,i)=>(r=new URL(r+".js",i).href,e[r]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=r,s.onload=e,document.head.appendChild(s)}else s=r,importScripts(r),e()})).then((()=>{let s=e[r];if(!s)throw new Error(`Module ${r} didn’t register its module`);return s})));self.define=(i,n)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let f={};const u=s=>r(s,l),t={module:{uri:l},exports:f,require:u};e[l]=Promise.all(i.map((s=>t[s]||u(s)))).then((s=>(n(...s),f)))}}define(["./workbox-27b29e6f"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"200",revision:"14f0b3f477509de198b9fc0bdb60f371"},{url:"404",revision:"14f0b3f477509de198b9fc0bdb60f371"},{url:"assets/create.8b38a39d.js",revision:null},{url:"assets/default.5a7e5506.css",revision:null},{url:"assets/default.f040dff3.js",revision:null},{url:"assets/entry.03de10be.css",revision:null},{url:"assets/entry.f543d73b.js",revision:null},{url:"assets/error-404.2d8b3d11.js",revision:null},{url:"assets/error-404.a6f724cc.css",revision:null},{url:"assets/error-500.2442b192.js",revision:null},{url:"assets/error-500.d92554dd.css",revision:null},{url:"assets/index.089c36cd.js",revision:null},{url:"assets/index.2632cf70.js",revision:null},{url:"assets/index.52d4b853.js",revision:null},{url:"assets/index.80f23cdf.js",revision:null},{url:"assets/index.cc9faa32.js",revision:null},{url:"assets/nuxt-link.c148e487.js",revision:null},{url:"assets/workbox-window.prod.es5.a7b12eab.js",revision:null},{url:"calendar",revision:"14f0b3f477509de198b9fc0bdb60f371"},{url:"dairy/create",revision:"14f0b3f477509de198b9fc0bdb60f371"},{url:"dairy",revision:"14f0b3f477509de198b9fc0bdb60f371"},{url:"/my-diary",revision:"14f0b3f477509de198b9fc0bdb60f371"},{url:"settings",revision:"14f0b3f477509de198b9fc0bdb60f371"},{url:"statistics",revision:"14f0b3f477509de198b9fc0bdb60f371"},{url:"manifest.webmanifest",revision:"9c02ae669d49a4ac77d45ea1a16f10a7"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
