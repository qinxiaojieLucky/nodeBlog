// 引用express框架
const express = require('express');
// 创建网站服务器

// 引入body-parser
const bodyParser = require("body-parser");

// 导入express-session模块
const session = require('express-session')

// 导入art-template模板引擎
const template = require('art-template');
// 导入dateformat第三方模块
const dateFormat = require('dateformat');

const app = express();


// 配置session
app.use(session({secret:'secret key',
  saveUninitialized:false,
  cookie:{
    maxAge:24*60*60*1000  
  }
}))

// 连接数据库（导入连接数据库的文件）
require('./model/connect');

const path = require('path');

// 处理post请求参数
app.use(bodyParser.urlencoded({extended:false}))

// 开放静态资源
app.use(express.static(path.join(__dirname,'public')))

// 告诉express框架所在位置
app.set('views',path.join(__dirname,'views'));
// 告诉express模板的默认后缀是什么
app.set('view engine','art')
// 当渲染后缀为art的模板时 所使用的模板引擎是什么
app.engine('art',require('express-art-template'))

// 向模板内部导入dateFormate变量
template.defaults.imports.dateFormat = dateFormat;


// Guard
app.use('/admin',require('./middleware/loginGuard'));

const home = require('./route/home');
const admin = require('./route/admin');
const { urlencoded } = require('body-parser');

// 拦截路由，为路由匹配请求路径
app.use('/home',home);
app.use('/admin',admin);

// module.exports = app;
app.listen("8888",function(){
    console.log("服务器启动成功，访问地址是 http://localhost:8888/")
  })
