const { userModule } = require('../../model/user')
module.exports = async (req,res) => {

    // 标识 标识当前访问的是用户管理页面
    req.app.locals.currentLink = 'user';

    // 接收客户端传递过来的当前页的参数
    let page = req.query.page || 1;
    // 每一页显示的数据
    let pageSize = 10;
    // 查询用户的数据的总数
    let count = await userModule.countDocuments({});
    // 总页数
    let total = Math.ceil(count/pageSize);
    // 页码对应的数据查询开始的位置
    let start = (page-1)*pageSize;
    // 将用户信息从数据库中查询出来
    let users = await userModule.find({})
    let temUser = users.reverse();
    users = temUser.splice(start,pageSize)
    res.render('admin/user',{
        msg: req.session.username,
        users: users,
        page:page,
        total:total
 
    });
}