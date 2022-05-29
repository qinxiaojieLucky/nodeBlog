const { Article }  = require('../../model/article')
const { userModule } = require('../../model/user')
const { Comment } = require('../../model/comment')
const { Shoucang } = require('../../model/shoucang')
module.exports = async (req,res) => {

    // 接收客户端传过来的文章id
    const id = req.query.id;
    const message = req.query.message;
    // 根据id查询文章的详情信息
    let article = await Article.findOne({_id:id});
    // 根据aid查询文章评论
    let comments = await Comment.find({aid: id})
    //查找username
    let username = req.session.username||'1';
    // 浏览次数加1
    await Article.updateOne({_id: id},{
        views: article.views+1
    })
    // 判断用户是否收藏该文章
    // 如果用户已经收藏取消收藏
    // 如果用户没有收藏就加入收藏夹
    let shoucang = await Shoucang.find({
        aid: id,
        username:username
    });
    if(shoucang.length>0){
        res.render('home/article',{
            article:article,
            username: username,
            comments: comments,
            flag: shoucang[0].flag,
            message: message
        });
    }else{
        res.render('home/article',{
            article:article,
            username: username,
            comments: comments,
            flag: false,
            message:message
        });
    }
}