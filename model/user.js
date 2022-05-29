const mongoose = require("mongoose");


// 定义一个约束文件
let userSchema = new mongoose.Schema( {
    username:{
        type:String,
        required:true,
        unique:true,
        minlength:3,
        maxlength:20
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    }
})

// 第一个参数是模型名字，第二个参数是参数约束，第三个参数是集合（表）名字
const userModule = mongoose.model("userModule",userSchema,"users");
module.exports = {
    userModule
}