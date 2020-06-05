class ModuleConfig {
    public readonly port = 8888;
    public readonly domain = 'xxxx';
    public readonly template = {
        path: 'server/views'
    };
}

module.exports = new ModuleConfig();
