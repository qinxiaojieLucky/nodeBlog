const { Article } = require('../../model/article')
module.exports = async (req,res) => {
    // 标识 标识当前访问的是用户管理页面
    req.app.locals.currentLink = 'article';
    const { id } = req.query;
    if(id){
        // 修改
         let article =await Article.findOne({_id: id})
         res.render('admin/article-edit',{
             article: article,
             link:'/admin/article-modify?id='+id,
             botton: '修改'
         })
    }else{
        res.render('admin/article-edit',{
            link:'/admin/article-add',
            botton: '提交'
        });
    }
}