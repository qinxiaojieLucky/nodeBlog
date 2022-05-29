const {Article} = require('../../model/article')
module.exports = async(req,res) => {
    var str="^.*"+req.query.content+".*$";
    var reg = new RegExp(str);
    let articles = await Article.find({  title:reg  })
    // 将文章信息从数据库中查询出来
    let username = req.session.username||'1';
    res.render('home/index',{
        articles: articles,
        page: 1,
        pageSize: 6,
        total: 1,
        username: username
    });
}