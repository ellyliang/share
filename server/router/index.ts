module.exports = (app:any) => {
    app.use(require('./api').routes());
};