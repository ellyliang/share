class ModuleConfig {
    constructor() {
        this.port = 8888;
        this.domain = 'xxxx';
        this.template = {
            path: 'server/views'
        };
        this.staticDir = {
            root: 'static',
            options: {}
        };
    }
}
module.exports = new ModuleConfig();
