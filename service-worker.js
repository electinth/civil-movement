!function(){"use strict";const e=1611934041222,t=`cache${e}`,s=["/client/client.5c4673ee.js","/client/inject_styles.5607aec6.js","/client/index.3f06e991.js","/client/sharer.fc0e20e7.js","/client/summary.7849a2e0.js","/client/about.75dbfb1e.js"].concat(["/service-worker-index.html","/favicon.png","/fonts/Anuphan-Regular.otf","/fonts/Anuphan-SemiBold.otf","/fonts/BaiJamjuree-Bold.ttf","/fonts/BaiJamjuree-Regular.ttf","/fonts/KondolarThai-Black.woff","/fonts/KondolarThai-Regular.woff","/fonts/typography.css","/global.css","/images/follow-facebook.svg","/images/follow-twitter.svg","/images/instruction-relationship.png","/images/instruction-timeline.png","/images/logo-boonme-full.svg","/images/logo-boonmee.svg","/images/logo-elect-footer.png","/images/logo-elect-header.svg","/images/logo-ilaw.png","/images/logo-punchup-full.svg","/images/logo-punchup.svg","/images/player-01.png","/images/player-02.png","/images/player-03.png","/images/player-04.png","/images/social-facebook.svg","/images/social-line.svg","/images/social-twitter.svg"]),a=new Set(s);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(s))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const s of e)s!==t&&await caches.delete(s);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const s=new URL(t.request.url),n=s.protocol.startsWith("http"),o=s.hostname===self.location.hostname&&s.port!==self.location.port,i=s.host===self.location.host&&a.has(s.pathname),l="only-if-cached"===t.request.cache&&!i;!n||o||l||t.respondWith((async()=>i&&await caches.match(t.request)||async function(t){const s=await caches.open(`offline${e}`);try{const e=await fetch(t);return s.put(t,e.clone()),e}catch(e){const a=await s.match(t);if(a)return a;throw e}}(t.request))())}))}();
