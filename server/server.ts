const Koa = require('koa');
const config = require('./config');
const middleware = require('./middleware');

let app =  new Koa();
app.proxy = true;

middleware(app, config);

app.listen(config.port , ()=>{
    console.log(`${new Date()} ===> ${config.domain} [${app.env}] listen ${config.port} ...`);
});

module.exports = app;
