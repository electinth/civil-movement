!function(){"use strict";const e=1613033999427,a=`cache${e}`,s=["/client/client.ceca8eda.js","/client/inject_styles.5607aec6.js","/client/index.8f07040d.js","/client/sharer.1120426e.js","/client/formatMovementToLinedata.5157ee18.js","/client/summary.3aeed263.js","/client/about.c57609da.js"].concat(["/service-worker-index.html","/favicon.png","/fonts/Anuphan-Regular.otf","/fonts/Anuphan-SemiBold.otf","/fonts/BaiJamjuree-Bold.ttf","/fonts/BaiJamjuree-Regular.ttf","/fonts/KondolarThai-Black.woff","/fonts/KondolarThai-Regular.woff","/fonts/typography.css","/global.css","/images/follow-facebook.svg","/images/follow-twitter.svg","/images/instruction-relationship.png","/images/instruction-timeline.png","/images/logo-boonme-full.svg","/images/logo-boonmee.svg","/images/logo-elect-footer.png","/images/logo-elect-header.svg","/images/logo-ilaw.png","/images/logo-punchup-full.svg","/images/logo-punchup.svg","/images/player-01.png","/images/player-02.png","/images/player-03.png","/images/player-04.png","/images/social-facebook.svg","/images/social-line.svg","/images/social-twitter.svg","/images/summary/88year.svg","/images/summary/abortion.svg","/images/summary/antionechina.svg","/images/summary/flashmob.svg","/images/summary/foreign.svg","/images/summary/freeyouth.svg","/images/summary/ilaw.svg","/images/summary/people.svg","/images/summary/pm25.svg","/images/summary/red shirt.svg","/images/summary/thammasat.svg","/images/summary/wanchalearm.svg","/images/summary/welfare.svg","/og-image.png"]),t=new Set(s);self.addEventListener("install",(e=>{e.waitUntil(caches.open(a).then((e=>e.addAll(s))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const s of e)s!==a&&await caches.delete(s);self.clients.claim()})))})),self.addEventListener("fetch",(a=>{if("GET"!==a.request.method||a.request.headers.has("range"))return;const s=new URL(a.request.url),i=s.protocol.startsWith("http"),o=s.hostname===self.location.hostname&&s.port!==self.location.port,n=s.host===self.location.host&&t.has(s.pathname),g="only-if-cached"===a.request.cache&&!n;!i||o||g||a.respondWith((async()=>n&&await caches.match(a.request)||async function(a){const s=await caches.open(`offline${e}`);try{const e=await fetch(a);return s.put(a,e.clone()),e}catch(e){const t=await s.match(a);if(t)return t;throw e}}(a.request))())}))}();
