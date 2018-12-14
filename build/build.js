const fs = require('fs');
const utils = require('./utils');


try {
    const sw = fs.readFileSync(__dirname + '/workbox-sw.js');

    const myCustomRules = fs.readFileSync(`${utils.getOneDirUp(__dirname)}/sw-custom-rules.js`);

    fs.writeFileSync(`${utils.getOneDirUp(__dirname)}/public/sw.js`, sw.toString() + myCustomRules.toString());

    console.log('\x1b[32m', `\nWorkbox Service Worker : successfully generated 👍 \n  \n${utils.getOneDirUp(__dirname)}/public/sw.js `);

} catch (error) {

    console.log('\x1b[31m', `\nWorkbox Service Worker : \n Something wrong happened : ${error}`);
    
}

console.log('\x1b[0m', "");