const { Shoucang } = require("../../model/shoucang")
const { Article } = require("../../model/article")
module.exports = async(req,res) => {
    // 收藏的id
    let id = req.query.id;
    let shouchang = await Shoucang.findOne({_id:id})
    let article = await Article.findOne({_id:shouchang.aid})
    await Shoucang.updateOne({_id: id},{flag:false })
    await Article.updateOne({_id:shouchang.aid},{
        shouchangs: article.shouchangs-1
    })
    res.redirect('/admin/normalUser')
}