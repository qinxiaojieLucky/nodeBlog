const mongoose = require("mongoose");
// 链接数据库
// mongoose.connect('mongodb://127.0.0.1:27017/admin', { useNewUrlParser: true })
mongoose.connect("mongodb://localhost:27017/systemStu",{useNewUrlParser:true})
    .then(() => console.log('数据库连接成功'))
    .catch(err => console.log(err));
mongoose.connection.on("connected",function(){
console.log("数据库连接成功!")
});