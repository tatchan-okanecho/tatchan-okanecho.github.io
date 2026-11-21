// offline cache for 制度とお金ラボ
const V='lab-v1121';
const FILES=['./','index.html','tools.html','tedori.html','taishoku.html','taishokubi.html','zangyo.html','bonus.html','yukyu.html','shobyo.html','furusato.html','nencho.html','calendar.html','jiten.html','yomu.html','app.css','app.js','manifest.json','img/t_face.png','img/t_ok.png','img/t_point.png','img/t_right.png','img/t_think.png','img/t_chart.png','img/t_clap.png','img/t_book.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET'||u.origin!==location.origin)return;
e.respondWith(fetch(e.request).then(r=>{const cp=r.clone();caches.open(V).then(c=>c.put(e.request,cp));return r}).catch(()=>caches.match(e.request).then(m=>m||caches.match('index.html'))))});
