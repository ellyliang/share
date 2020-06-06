class ModuleConfig {
    public readonly port = 8888;
    public readonly domain = 'xxxx';
    public readonly template = {
        path: 'server/views'
    };
    public readonly staticDir = {
        root: 'static',
        options: {}
    };
}

module.exports = new ModuleConfig();
