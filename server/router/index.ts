module.exports = (app:any) => {
    app.use(require('./api').routes());
    app.use(require('./render').routes());
};