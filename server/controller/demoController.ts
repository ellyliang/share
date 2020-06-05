exports.render = async (ctx:any) => {
    await ctx.render('index');
};

exports.demo = async (ctx:any) => {
    ctx.body = {code: 0, data: 'success', ret_msg: '成功'}
};