exports.render = async (ctx:any) => {
    console.log('1223');
    await ctx.render('index', {
        title: 'demo title'
    });
};

exports.demo = async (ctx:any) => {
    ctx.body = {code: 0, data: 'success', ret_msg: '成功'}
};