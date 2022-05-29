const { Shoucang } = require('../../model/shoucang');
const { Article } = require('../../model/article');
module.exports = async (req,res) => {
    
    let article = await Article.findOne({_id:req.query.id});
    //查找username
    let username = req.session.username||'1';
    // 如果用户没有收藏就加入收藏夹
    let shoucang = await Shoucang.find({
        aid: req.query.id,
        username:username
    });
    // 判断用户是否收藏过文章
    if(shoucang.length>0){
        // 若用户收藏则取消收藏
        if(shoucang[0].flag){
            // 已经收藏，取消收藏
            await Shoucang.updateOne({_id: shoucang[0]._id},{flag:false })

            await Article.updateOne({_id:article.id},{
                shouchangs: article.shouchangs-1
            })
        }else{
            // 没有收藏，加入收藏
            await Shoucang.updateOne({_id: shoucang[0]._id},{flag:true })

            await Article.updateOne({_id:article.id},{
                shouchangs: article.shouchangs+1
            })
        }
    }else{
        if(username){
            await Shoucang.create({
            aid: req.query.id,
            username: req.session.username,
            time: new Date(),
            title: article.title,
            flag: true
            })
        }
        await Article.updateOne({_id:article.id},{
            shouchangs: article.shouchangs+1
        })
    }
    res.redirect('/home/article?id='+article.id)
}