const fs = require('fs');
const utils = require('./utils');

const sw = fs.readFileSync(__dirname + '/workbox-sw.js');

const myCustomRules = fs.readFileSync(`${utils.getOneDirUp()}/sw-custom-rules.js`);

fs.writeFileSync(`${utils.getOneDirUp()}/sw.js`, sw.toString() + myCustomRules.toString());