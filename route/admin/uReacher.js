const { userModule }  = require('../../model/user')
module.exports = async(req,res) => {

    // 标识当前访问的是文章列表页面
    req.app.locals.currentLink = 'user';
    // 接收客户端传递过来的当前也的参数
    let page = req.query.page||1;
    // 每一页显示的数据
    let pageSize = 10;
    var str="^.*"+req.query.content+".*$";
    var reg = new RegExp(str);
    let articles = await userModule.find({  username:reg  })
    // 查询文章的总数 
    let count = articles.length;
    // 总页数 
    let total = Math.ceil(count/pageSize);
    // 页码对应数据查询开始的位置
    let start = (page-1)*pageSize;
    // 将文章信息从数据库中查询出来
    users = await userModule.find({  username:reg  })
    res.render('admin/user',{
        users: users,
        page: 0,
        pageSize: 0,
        total: 0
    });
}