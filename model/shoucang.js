const mongoose = require('mongoose')
const shoucangSchema = new mongoose.Schema({
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
    title:{
        type: mongoose.Schema.Types.String,
        ref:'Article'
    },
    flag:{
        type:Boolean
    }
})
// 创建收藏集合
const Shoucang = mongoose.model('Shoucang',shoucangSchema);
module.exports = {
    Shoucang
}