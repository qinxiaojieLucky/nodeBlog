const { Article } = require('../../model/article')
const { userModule } = require('../../model/user')
module.exports = async (req,res) => {
       // 标识当前访问的是文章列表页面
       req.app.locals.currentLink = 'article';
       // 接收客户端传递过来的当前也的参数
       let page = req.query.page||1;
       // 每一页显示的数据
       let pageSize = 10;
       // 查询文章的总数
       let count = await Article.countDocuments({});
       // 总页数
       let total = Math.ceil(count/pageSize);
       // 页码对应数据查询开始的位置
       let start = (page-1)*pageSize;
       // 将文章信息从数据库中查询出来
       let articles = await Article.find({})

       let temArticle= articles.reverse();
       articles = temArticle.splice(start,pageSize)
       res.render('admin/article',{
           articles: articles,
           page: page,
           pageSize: pageSize,
           total: total
       })
}