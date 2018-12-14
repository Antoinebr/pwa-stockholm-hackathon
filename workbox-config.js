module.exports = {

    globDirectory : './public', // where workbox should search
    globPatterns : [ // what workbox should cache
        'index.html',
        'css/*.css',
        'js/*.js',
        'img/*.{png,svg}' 
    ],

    swDest: 'build/workbox-sw.js', // the destination of my Service Worker ( in this case ./dist is the root folder )

    clientsClaim: true,
    skipWaiting: true

}
