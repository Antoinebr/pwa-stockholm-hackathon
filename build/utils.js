exports.getOneDirUp = (contextDirname) => {
    let dirname = contextDirname.split('/');
    dirname.splice(dirname.length - 1, 1);
    return dirname.join('/');
};