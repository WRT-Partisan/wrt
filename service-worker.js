if(!self.define){let e,i={};const s=(s,c)=>(s=new URL(s+".js",c).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let d={};const l=e=>s(e,a),n={module:{uri:a},exports:d,require:l};i[a]=Promise.all(c.map((e=>n[e]||l(e)))).then((e=>(r(...e),d)))}}define(["./workbox-915e8d08"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2025/04/04/hello-world/index.html",revision:"8244ea070f6a8e6f1a0512202c17761c"},{url:"2025/04/04/最短路/index.html",revision:"efb6b53e21f6bd5514c59aba369519dc"},{url:"404.html",revision:"9f2c3429c0cb4370f7a44f948eb477a7"},{url:"archives/2025/04/index.html",revision:"2b55ad884d9de7d29d51b5ed21a7d84c"},{url:"archives/2025/index.html",revision:"09af3490750280060bad2a0a59eaafe1"},{url:"archives/index.html",revision:"0fb80393bd83d1aa9ce553a96e6482cf"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"categories/index.html",revision:"998c6fd32a0f5308d5c26fe64d2e4875"},{url:"css/big-counter.css",revision:"38394632a99db444dc38260dc30e5205"},{url:"css/center-atom.css",revision:"733698b6ec826dd5f053d2b8c809479d"},{url:"css/center-circle.css",revision:"5c3e7639c3fe9a34274b8f7b0dfc427a"},{url:"css/corner-indicator.css",revision:"e28d16fffd44ac0ca2758df1687b7462"},{url:"css/index.css",revision:"6d0eb4ef930875c75eb2ff717c1d9817"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/butterfly-icon.png",revision:"28fa72a4d9b2feea4bb643a12facb7fb"},{url:"img/error-page.png",revision:"7ade9a88a5ced2c311e69b0b16680591"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"9a07ccbfc63cd056eca69ba6546405eb"},{url:"js/main.js",revision:"ab1dddd2229511c7cb6f2275f2f63e99"},{url:"js/search/algolia.js",revision:"75e66239aa7a33ad0218f92e08021a64"},{url:"js/search/local-search.js",revision:"3a22c1b24d57711a7c0566aa2cecf98e"},{url:"js/tw_cn.js",revision:"accbc2ce08ee93a7bc3bc2199f4d0cfd"},{url:"js/utils.js",revision:"8d3507831ac63b0d5fc9c22bc1e87957"},{url:"link/index.html",revision:"0a89036d10c36e8fc215ed52db17af5c"},{url:"shuoshuo/index.html",revision:"d226ddd9461e1f916f4b9972ebecc13a"},{url:"tags/index.html",revision:"721e46294dc4d4211e95270d433710cd"}],{})}));
//# sourceMappingURL=service-worker.js.map
