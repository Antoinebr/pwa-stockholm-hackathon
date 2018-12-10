module.exports = {

    globDirectory : './', // where workbox should search
    globPatterns : [ // what workbox should cache
        'index.html',
        'css/*.css',
        'img/*.{png,svg}' 
    ],

    swDest: './sw.js', // the destination of my Service Worker ( in this case ./dist is the root folder )

    clientsClaim: true,
    skipWaiting: true

}
