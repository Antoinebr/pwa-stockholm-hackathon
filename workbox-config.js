module.exports = {

    globDirectory : './public', // where workbox should search
    globPatterns : [ // what workbox should cache
        'index.html',
        'css/*.css',
        'js/*.js',
        'img/*.{png,svg}' 
    ],
    swSrc: './serviceworker-dev.js',
    swDest: './public/sw.js' // the destination of my Service Worker ( in this case ./dist is the root folder )


}
