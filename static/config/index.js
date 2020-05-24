/*global process */
let appEnv = process.env.NODE_ENV;
let envConfig = 'production';
if (appEnv === undefined || appEnv === '') {
    appEnv = 'development';
}
module.exports = require(`./${envConfig}`);
//# sourceMappingURL=index.js.map