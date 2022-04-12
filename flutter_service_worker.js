'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "66075b714ab0ba3c465a81a362d92a8d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "cb476b71ab048f933cc8aa343f633ea2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f96351cbc420354ba9a8853a3f85f032",
".git/logs/refs/heads/main": "4328bf720a8483874489cdc8bdd265ed",
".git/logs/refs/remotes/origin/main": "5502a554a12fd46829d11db50f3fea7f",
".git/objects/00/3572afdb9dad9e7a390259817f8467526e2e0c": "39ba3476968ad20134f6352acb02575b",
".git/objects/0a/c7178b68bb12efdaf60c090fc99e3d495743b6": "39a8cdcb5fdac415ad48163cad14992b",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/13/9913ba0f327d0ed588820e82291b8f371183b9": "6eea5b664696b3f8fae1d83c2dabb386",
".git/objects/1c/e1aefd8f11adfd3e7ede8b2fcd0f8673a407ef": "69f4022b92a83f6827a433cb23b95aa6",
".git/objects/1e/04394deabfa8b923a255cd1e8263b1b954ff66": "fe49b430d6460a460d1c12b37a9ef96a",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/45/36db846612136f1de449d9ab4622a1e747940b": "965eb709202cc8d2156769c14c1919db",
".git/objects/49/489f0122af66366755c473ec557843f400836d": "746153f8a1f97178fc9ceb331e2e3a74",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/50/a2e55ba681a64e06705c0ccf6d6af52a8aa8ad": "279aced30eefe583efc253a7771289a5",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/5c/e775f929b39828107b36bc66d6f9393933d80b": "eba08a58239f769bc6259e27165eeea3",
".git/objects/66/7d4e55dbcf53986e5ffc27eaa0a994f9b420d8": "fd73996b5d939d96ae422151cc6ae44a",
".git/objects/6b/68e6a638feaf9941ab180931fa06b10099b486": "0c3901f85f9240cfec97a178e77a5b11",
".git/objects/74/8164aa5334e2e792f58774050bce333607246d": "5aef2a1645628e4f6cb1e18689d9c1a9",
".git/objects/74/b894128b6d8ffffbda990b9564fc0b78622d0e": "639f7d3e31e7ad30f9ead5c58e810a62",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/bb328a1a85934a69819e2caeed6a34e03901c7": "c7ac3f997ec868b22bebacc021e633a5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/1d2c4487d2e430730b8fa6b7b7f1bc7aa14892": "918a76594dfa08cd84d355f95721dbe4",
".git/objects/96/f1517d5db91ae278f1f06a4ac7f784171af6bb": "31d715b3624a9e20fd0ede4139cc972d",
".git/objects/9c/6b61af9dac11f384b9fb2cdf1b74e18837e241": "3e58239ece695d7f43adf0fa62ebec6b",
".git/objects/9e/30e13be33c08392bfa69cd2f85f976a1802429": "317d45c85ea31a38fdd5230f2ca7d35d",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/b90baea72502a3cdaba26c2c27a8a667aad45c": "54d41302283485b15ba62f0d95d8bfb6",
".git/objects/a1/e05085cb74bcced42c77ff66f213897c88069a": "a12e8115384b77b03414d7eb86f4de8c",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/eb7ddb4b0d8504bf45e7ec123cb52f68a7cd86": "494d8c8e56ae389381c6d931fcd6825c",
".git/objects/ad/92ca9434d0c5439f6a2344abdba003ff21877a": "c67087fa507f95fdd693dd4d60032c5b",
".git/objects/b6/79a8dcea779c6744674f540918bd1cbdc475cc": "fc68bc70e6ae0261aed6afd352cf572d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/99466348bb3764a340dd919451c2fac7de3eb4": "8cc890b118c8065a26b6560805fba72a",
".git/objects/c4/ed758767b317753f9c05627a13ab5ec7421211": "93c0cf730cd95212b5667e39197d561e",
".git/objects/d5/e3f88360f4cba354021c0d7b3e7f7903d02b74": "697c516626700e4c0c8976dd0f63201c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/df/0f93f8654c39b4e2b5f4289bfe582751d56a49": "121d01db72365a8d4851f293facd88c5",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f4/ac6d75919de7cee297af0a6375130a462b7537": "3d2ea60c3b3a427d9f230012a2498f9e",
".git/objects/fe/8427247ba61a6346634b13ee382d39cec3ec5c": "535b50bbf6299f61564c6a52d448ff49",
".git/refs/heads/main": "31f14f537ae9ee57524dcfa11a3854a2",
".git/refs/remotes/origin/main": "31f14f537ae9ee57524dcfa11a3854a2",
"assets/AssetManifest.json": "32ca7f4ea161760f0963bcfe2eecbe96",
"assets/assets/bulet.png": "3033b93374d81f2f807bfb337996e590",
"assets/assets/cave.png": "1e86ddcd53a5a5f7e94eccb59a31e0a6",
"assets/assets/kotakinput.png": "1eea130ca40d1b800dd957514c50900b",
"assets/assets/mockup.png": "8f595f57a19dad7db8e3b2b7c78a4bad",
"assets/assets/papan.png": "7e320fab8eb9f1f5f0081e9b94d236e5",
"assets/assets/space.png": "e34d2ff9a3e380be37cf4e36bc025fae",
"assets/assets/spaceround.png": "98e6e44671a35a8590d4a3bdbb243575",
"assets/FontManifest.json": "ccbc1238a8e8a57a179bb99057426b9b",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/fonts/PatrickHand-Regular.ttf": "0b94e62171b862ddb28135554050f315",
"assets/fonts/Prehistoric-Caveman.ttf": "656472862dc8e71cb18e77b8a96d59c2",
"assets/NOTICES": "223c64e4f506d2b01ace1a8fff13196b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1c4bc3d6665d29d2287e46dcaa6efc2c",
"/": "1c4bc3d6665d29d2287e46dcaa6efc2c",
"main.dart.js": "ff289fdd6cb9cd6b9b8bcf64b51243ee",
"manifest.json": "6664e8881c161c961c0f06b27e1f481f",
"README.md": "ed4b1542b79a3f344cb9449c5eb71b5f",
"version.json": "04605efeffc234e40dd17a99e69b0ef1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
