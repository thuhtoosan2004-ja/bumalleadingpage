'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/AUTO_MERGE": "1e9d1596c4cd02be16354fe5acd26031",
".git/COMMIT_EDITMSG": "ffc2766ec7522bc8257223a879f89ddd",
".git/config": "3fc437f979ba965c622666d80cb97c70",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "dd173d644d90a8718f2ca015321e77c2",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "baf6c15800347b6ced9447a7fe64597a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8e013e61dfb7dc500b8c3e9b43e6c924",
".git/logs/refs/heads/main": "7c3668629f6fb01ad18de20077e39766",
".git/logs/refs/remotes/origin/main": "51356217d54e09086a8ba33ce8914ab1",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/09/9595f87faa1130e8e04a94a7ed4698284b1269": "09b50bbf0dec61adfe49c3b7f6b0b82a",
".git/objects/0c/ffcc7515038635f83872794638aef14d50803a": "c5b518e3597340a10daee4383a353e56",
".git/objects/1c/00f4ebdfb55e4623c7985087b4a90a70e22f1a": "44b51a14111e713eff596c0973bf0d76",
".git/objects/1c/f44b12bdbcb3396e3cc86c1cce676b92ba5522": "60c2882d31658e0955c4faef07a09134",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/2e/6ee348535d66724c86dca950dcc1858c4e9c67": "b7fd82e6e4a9dd64381f457d26ea229e",
".git/objects/38/4a27803c23d9337fa92c9d8f0dfda2d7390dd3": "5c1bddb4495e25e3a8296c2382dad826",
".git/objects/39/11a13beb481fb3f216a79a1f5de211c6c9691b": "5e0e2abac451ec572bdc66fa988f635b",
".git/objects/39/db6b639a0c0612090c8d3aa6922afcc3fb347a": "b2685b41218d0967e6296cb7f671ed3c",
".git/objects/4c/833862f49d6aed674353893e3dc994d9d9abfa": "491d7b7471e867b7b8fba9ed8552390e",
".git/objects/50/a17bb5a5eee2a6e65d3c3f48246c0c8b0c3c97": "70640c42ce807d93bc1b9df45740dd6b",
".git/objects/54/1d2c44951ca847173aea78f591f23fac2c9997": "719e952ee917470129a9a7b5a5f7cd3a",
".git/objects/56/ebdab0e8ac7323bba88542c4391d4885992761": "2c896d7d4f65fdcfd089a576b6859c80",
".git/objects/5e/5a6fe1f84ace7683d891271c45184a88a7d0f6": "0894ae640e5e4f82fa531646e5db4a96",
".git/objects/63/149341030155c7d4833f4bc33aa759d4cdcf45": "ea49de2ae9465fce145d038c82c6202b",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/7b/1feaf48a5bb54b27cf259e62fb66bcb49db70e": "9c957e2d3b34d764c9d4109f8bed6c03",
".git/objects/83/6efe08d75266d6431fabe12c9d22e76e10cd89": "0e690bd9c3cf80f59081198b9e78f400",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/e1ab5c6cfa8c4fd02e2ddb6952d3927f11a1e5": "ff342128ba16a1e1ab730e2e2b4cca5e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/91/386d40898b407f72580b7a64d6b22a30023f3e": "99bf9c35640fcc2889c492e38a34962d",
".git/objects/92/450d8fbfb16927728e676ae69fb4bc88d3fe53": "b44b6663ab30d65303144dde82dc9aff",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/a8/309755514f53d4a8eb9334b658adcadfe65d26": "90f14593bf98220e674836394688a983",
".git/objects/ad/878a47008d15be394d30e8704ccb34da0a110c": "147f774f236f73b8505d66f794520373",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/5f1936090387c17c5e3172e519e62195431908": "c86c58fd1f9d2fa99e9e66659f12cd18",
".git/objects/ba/a3a1530a3f4850b967b3876c37192235885da2": "ac40dd073167a3b6386abd867acd0da6",
".git/objects/bd/bfbc882fde753f8196f559ac2803a087e52393": "67935e61de7d3f4d2c5a3a6ffb6499d0",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c8/7cbe36580ab1d6356eaccce69cffd056c7ce3c": "b8eb305df948f993d2cac36a26febaae",
".git/objects/ca/a4ce6cd4861626e93b92485f49246a700a0cc6": "25b28afa6e843b8474ede5e0c761e49f",
".git/objects/d0/ca769750c4d75fe2176e33b3214c8db4f6e3c9": "71cf3d4c1b82863a444a5c8b21bda0d1",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/c0be3866b4d90205e2a94d9f0139d83f989c4c": "28f50dc340543a97cb927fba492c5a03",
".git/objects/e1/5c5be202571a8dafc74f50ec0bb49c8aded784": "7d546b5e7f31640658372e2c0dac0f86",
".git/objects/e6/412946ee2a705cc930a53e881f184ae51eda77": "c8181a3113f895e22340c1e72bab1f47",
".git/objects/e6/b0a1741564bf0981980913f67a188b6158fe4b": "998cc19582975d3e9ce1b794edcb3d10",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ed/ffc931242d8e657fa70cbe9b36309d592cdca3": "a187d73556869ec0b749a5024ed9ce78",
".git/objects/ef/ada2b05418a17abcd2398e6cb7bb1cde0a0550": "b2fc9f57b6c7968d68bee1a1303eee7c",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f7/cfd244595e57c091e3e2d226188415bf2d199f": "54c9eadc3f5583ac5f82bd795f3bfc1a",
".git/objects/fc/dca93733f0e0e78509bf452ebff5108603d4e3": "cd3b3261e90503c115b17fe5f9fa7144",
".git/objects/ff/efb1b658653e3fc7661702a4bc99cae68f6906": "b8c474e514a437bec99bc13cd6d5a4c7",
".git/ORIG_HEAD": "141cc3021ff0d667b8e532f5db90ba3d",
".git/refs/heads/main": "51c9fdcfba2e1a1a5032e5f97f027f61",
".git/refs/remotes/origin/main": "51c9fdcfba2e1a1a5032e5f97f027f61",
"assets/AssetManifest.bin": "49a7978a81ef6d7e445e34dbb968e7b8",
"assets/AssetManifest.bin.json": "c011ee0057081b2bc649d145fa00b8f6",
"assets/AssetManifest.json": "c8a90dfd13cfc2f69119d0485f76b81d",
"assets/assets/images/appInfo/appLogo.png": "3c7466c28b01176220c3a149360eccde",
"assets/FontManifest.json": "55e9d16bf9e6cc600eb3cfc18d186ce1",
"assets/fonts/MaterialIcons-Regular.otf": "7260ad84df3364be8fc654997ed3dfdd",
"assets/fonts/myanmarfont.ttf": "81c7bd5bddb3e62d5ebf10401558cd3d",
"assets/NOTICES": "f29a0c0fc3f611e5b3c60d0d43202499",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "cdeb8bbc33ca4c6a59cf8cec26004f07",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "2edb08ff36310681f3e53ff82874b2e9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e7850803502125be2862a566654500a8",
"/": "e7850803502125be2862a566654500a8",
"main.dart.js": "2132df61449ce38ddaa1abeff7f02176",
"manifest.json": "73753198fa40ee1b922b89e79fabac40",
"README.md": "7f4f4f1e6c4740c974c563723a098e86",
"version.json": "241eccabcc6e7f43a12ff70a7469b8db"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
