const render = () => {
    const KoaRouter = require('koa-router');
    const demoController = require('../controller/demoController');
    const router = new KoaRouter();
    router.get('/', demoController.render);
    return router;
};
module.exports = render();
