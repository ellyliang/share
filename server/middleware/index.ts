/*global __dirname process*/
const path = require('path');
const koaBody = require('koa-body');
const routes = require('../router');

module.exports = function (app:any, config:object) {
    //解析body
    app.use(koaBody({
        multipart: true,
        formLimit: 15
    }));

    //路由
    routes(app);

    // 500 error
    // koaOnError(app, { template: config.template.path + '/500.html' });

    // 404
    app.use(async function(ctx:any) {
        ctx.status = 404;
        await ctx.render('404');
    });

    //程序错误
    process.on('uncaughtException', function(err) {
        console.error('Error caught in uncaughtException event: ', err);
    });
};
