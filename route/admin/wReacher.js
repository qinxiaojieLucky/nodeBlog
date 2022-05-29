const { badWord } = require('../../model/bedword')
module.exports = async(req,res) => {

    // 标识当前访问的是文章列表页面
    req.app.locals.currentLink = 'bedWord';
    // 接收客户端传递过来的当前也的参数
    let page = req.query.page||1;
    // 每一页显示的数据
    let pageSize = 10;
    var str="^.*"+req.query.content+".*$";
    var reg = new RegExp(str);
    let bedwords = await badWord.find({  content:reg  })
    // 查询文章的总数 
    let count = bedwords.length;
    // 总页数 
    let total = Math.ceil(count/pageSize);
    // 页码对应数据查询开始的位置
    let start = (page-1)*pageSize;
    // 将文章信息从数据库中查询出来
    bedwords = await badWord.find({  content:reg  })
    res.render('admin/bedword',{
        bedwords: bedwords.reverse(),
        page: 0,
        pageSize: 0,
        total: 0
    });
}