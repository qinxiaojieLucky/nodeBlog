const {Comment} = require('../../model/comment')
const { badWord } = require('../../model/bedword')
const { Article }  = require('../../model/article')
module.exports = async (req,res) => {
    const data = req.body;
    let bedwords = await badWord.find({})
    let flag = true
    bedwords.forEach(item => {
        var str="^.*"+item.content+".*$";
        var result = data.content.match(str)
        if(result != null){
            flag=false;
        }
    });
    if(!flag){
        return res.redirect(`/home/article?message=评论内容中含有敏感词&id=`+data.aid)
    }else{
        data['time'] = new Date();
        Comment.create(data);
        res.redirect('/home/article?id='+data.aid);
        let article = await Article.findOne({_id:data.aid});
        await Article.updateOne({_id:data.aid},{
            comments: article.comments+1
        })
    }
}