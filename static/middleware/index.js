/*global __dirname process*/
const path = require('path');
module.exports = function (app, config) {
    //路由
    // routes(app);
    // 500 error
    // koaOnError(app, { template: config.template.path + '/500.html' });
    // 404
    app.use(async function (ctx) {
        ctx.status = 404;
        await ctx.render('404');
    });
    //程序错误
    process.on('uncaughtException', function (err) {
        console.error('Error caught in uncaughtException event: ', err);
    });
};
//# sourceMappingURL=index.js.map