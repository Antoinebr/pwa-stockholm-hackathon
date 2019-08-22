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
workbox.precaching.precacheAndRoute([]);

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



// I'm caching all requests which match https://api.nomics.com/*
workbox.routing.registerRoute(/(https:\/\/api.nomics.com\/)/, workbox.strategies.staleWhileRevalidate(), 'GET');

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