const { Article } = require('../../model/article')
const { Comment } = require('../../model/comment')
const { Shoucang } = require("../../model/shoucang")
module.exports = async (req,res) => {
    let id = req.query.id;
    await Comment.deleteMany({aid:id})
    await Shoucang.deleteMany({aid:id})
    await Article.findOneAndDelete({_id: id})
    res.redirect('/admin/article?page='+req.query.page)
}