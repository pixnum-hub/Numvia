const CACHE_NAME="numvia-v4";

self.addEventListener("install",e=>{
e.waitUntil(
caches.open(CACHE_NAME).then(c=>c.addAll(["./","./index.html"]))
);
});

self.addEventListener("fetch",e=>{
e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)));
});