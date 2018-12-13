exports.getOneDirUp = () => {
    let dirname = __dirname.split('/');
    dirname.splice(dirname.length - 1, 1);
    return dirname.join('/');
};