const { Comment } = require('../../model/comment')
module.exports = async (req,res) => {
    // console.log(req.query.id);
    await Comment.findOneAndDelete({_id: req.query.id})
    res.redirect('/admin/comment?page='+req.query.page)
}