!function(){"use strict";const e=1612604930535,s=`cache${e}`,a=["/client/client.365d47bb.js","/client/inject_styles.5607aec6.js","/client/index.b304d0e3.js","/client/sharer.04dc60cd.js","/client/formatMovementToLinedata.f6573ef5.js","/client/summary.9777f0cf.js","/client/about.9f2987dd.js"].concat(["/service-worker-index.html","/favicon.png","/fonts/Anuphan-Regular.otf","/fonts/Anuphan-SemiBold.otf","/fonts/BaiJamjuree-Bold.ttf","/fonts/BaiJamjuree-Regular.ttf","/fonts/KondolarThai-Black.woff","/fonts/KondolarThai-Regular.woff","/fonts/typography.css","/global.css","/images/follow-facebook.svg","/images/follow-twitter.svg","/images/instruction-relationship.png","/images/instruction-timeline.png","/images/logo-boonme-full.svg","/images/logo-boonmee.svg","/images/logo-elect-footer.png","/images/logo-elect-header.svg","/images/logo-ilaw.png","/images/logo-punchup-full.svg","/images/logo-punchup.svg","/images/player-01.png","/images/player-02.png","/images/player-03.png","/images/player-04.png","/images/social-facebook.svg","/images/social-line.svg","/images/social-twitter.svg","/images/summary/88year.svg","/images/summary/abortion.svg","/images/summary/antionechina.svg","/images/summary/flashmob.svg","/images/summary/foreign.svg","/images/summary/freeyouth.svg","/images/summary/ilaw.svg","/images/summary/people.svg","/images/summary/pm25.svg","/images/summary/red shirt.svg","/images/summary/thammasat.svg","/images/summary/wanchalearm.svg","/images/summary/welfare.svg","/og-image.png"]),t=new Set(a);self.addEventListener("install",(e=>{e.waitUntil(caches.open(s).then((e=>e.addAll(a))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const a of e)a!==s&&await caches.delete(a);self.clients.claim()})))})),self.addEventListener("fetch",(s=>{if("GET"!==s.request.method||s.request.headers.has("range"))return;const a=new URL(s.request.url),i=a.protocol.startsWith("http"),o=a.hostname===self.location.hostname&&a.port!==self.location.port,n=a.host===self.location.host&&t.has(a.pathname),g="only-if-cached"===s.request.cache&&!n;!i||o||g||s.respondWith((async()=>n&&await caches.match(s.request)||async function(s){const a=await caches.open(`offline${e}`);try{const e=await fetch(s);return a.put(s,e.clone()),e}catch(e){const t=await a.match(s);if(t)return t;throw e}}(s.request))())}))}();
