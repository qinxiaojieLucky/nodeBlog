const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    aid:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Article'
    },
    username:{
        type: mongoose.Schema.Types.String,
        ref:'userModule'
    },
    time:{
        type: Date
    },
    content: {
        type: String
    }
})
// 创建评论集合
const Comment = mongoose.model('Comment',commentSchema);
module.exports = {
    Comment
}