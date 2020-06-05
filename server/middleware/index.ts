/*global __dirname process*/
const path = require('path');
const views = require('koa-views');
const koaBody = require('koa-body');
const routes = require('../router');

module.exports = function (app:any, config:any) {
    // 加载模板引擎
    app.use(views(config.template.path, {
        extension: 'ejs'
    }));

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
