importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

/*
| --------------------------------------------------------------------------
| My custom rules 
| --------------------------------------------------------------------------
|
| Down there you can put all your specicic worbox rules 
| The build process will append this file to the generated Service Worker from workbox ( precache )
|
*/

// 👇 DO NOT REMOVE THIS LINE ! Otherwise Workbox will not know where to inject the manifest
workbox.precaching.precacheAndRoute([
  {
    "url": "index.html",
    "revision": "c3b5a15932be06a24b950da024b2bbe8"
  },
  {
    "url": "css/app.css",
    "revision": "064247e82330e7818d8c756d1b919b88"
  },
  {
    "url": "js/app.js",
    "revision": "437949ae0f236ec63f71e047da13e13a"
  },
  {
    "url": "img/Bitcoin.svg",
    "revision": "2a4ac9a43a95d361f50010e2f85039b5"
  },
  {
    "url": "img/Dash.svg",
    "revision": "64c25337498c0b8d799c140cb0f8c0b3"
  },
  {
    "url": "img/Ethereum.svg",
    "revision": "dadbeae8504595321d65842442d2f5d1"
  }
]);

// force the installation and activation of the latest Service Worker 
workbox.core.skipWaiting();
workbox.core.clientsClaim();


// we add our offline page to the precache
workbox.precaching.precacheAndRoute([{
    "url": "offline.html",
    "revision": "dadbeae850459sdddsdd65842442d2f5d1"
}]);

// All the request which will match /(https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/materialize)/ will fall in the strategy 
// I also specify that It will be only for GET requests
workbox.routing.registerRoute(/(https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/materialize)/, workbox.strategies.staleWhileRevalidate(), 'GET');

// we cache the fonts
workbox.routing.registerRoute(/(https:\/\/fonts.googleapis.com\/icon)/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/(https:\/\/fonts.gstatic.com\/s\/materialicons)/, workbox.strategies.staleWhileRevalidate(), 'GET');



// I'm caching all requests which match https://crypto-api.glitch.me/*
workbox.routing.registerRoute(/(https:\/\/crypto-api.glitch.me\/)/, workbox.strategies.staleWhileRevalidate(), 'GET');

/*
| --------------------------------------------------------------------------
| Caching the about page
| --------------------------------------------------------------------------
| Will throw the offline page if not in the cache
|
*/
workbox.routing.registerRoute('/about.html', async args => {

    return workbox.strategies.networkFirst().handle(args)
        .then((response) => (!response) ? caches.match('/offline.html') : response);

});