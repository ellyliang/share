const api = () => {
    const KoaRouter = require('koa-router');
    const demoController = require('../controller/demoController');
    const router = new KoaRouter();
    router.prefix('/api');
    router.get('/demo', demoController.demo);
    return router;
};
module.exports = api();
