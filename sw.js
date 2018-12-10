/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "index.html",
    "revision": "d41c1545d09be11d73d187111350da5f"
  },
  {
    "url": "js/app.js",
    "revision": "d41c1545d0ssddse11d73d187111350da5f"
  },
  {
    "url": "css/app.css",
    "revision": "064247e82330e7818d8c756d1b919b88"
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
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

// All the request which will match /(https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/materialize)/ will fall in the strategy 
// I also specify that It will be only for GET requests
workbox.routing.registerRoute(/(https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/materialize)/, workbox.strategies.staleWhileRevalidate(), 'GET' );



// I'm caching all requests which match https://api.nomics.com/*
workbox.routing.registerRoute(/(https:\/\/api.nomics.com\/)/, workbox.strategies.networkFirst(), 'GET' );
