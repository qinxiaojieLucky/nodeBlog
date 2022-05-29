const { userModule } = require('../../model/user')
const { Comment } = require('../../model/comment')
const { Shoucang } = require("../../model/shoucang")

module.exports = async (req,res)=>{

    let user = await userModule.findOne({_id:req.query.id})
    let username = user.username;
    await Comment.deleteMany({username:username})
    await Shoucang.deleteMany({username:username})
    await userModule.findOneAndDelete({_id:req.query.id})
    res.redirect('/admin/user?page='+req.query.page)
}