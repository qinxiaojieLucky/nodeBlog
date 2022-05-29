const mongoose = require('mongoose')
const articleSchema = new mongoose.Schema({
    title: {
        type:String,
        minlength:4,
        required:[true,'请填写文章标题']
    },
    author: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'userModule',
        required: [true,'请输入作者']
    },
    publishDate: {
        type: Date,
        default: Date.now
    },
    cover: {
        type:String,
        default:null
    },
    content: {
        type: String
    },
    views:{
        type:Number
    },
    comments:{
        type:Number
    },
    shouchangs:{
        type:Number
    }
})

const Article = mongoose.model('Article',articleSchema)
module.exports = {
    Article
}