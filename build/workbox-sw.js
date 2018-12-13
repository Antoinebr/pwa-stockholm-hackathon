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
    "revision": "c3b5a15932be06a24b950da024b2bbe8"
  },
  {
    "url": "css/app.css",
    "revision": "064247e82330e7818d8c756d1b919b88"
  },
  {
    "url": "js/app.js",
    "revision": "ce25692c1014fc1fbe07f6f715425797"
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
