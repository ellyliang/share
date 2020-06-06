exports.render = async (ctx) => {
    console.log('1223');
    await ctx.render('index', {
        title: 'demo title'
    });
};
exports.demo = async (ctx) => {
    ctx.body = { code: 0, data: 'success', ret_msg: '成功' };
};
