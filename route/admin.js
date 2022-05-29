// 引用express框架
const express = require('express');

// 导入用户集合构造函数
const { userModule } = require('../model/user')
const bcrypt = require('bcrypt')

// 创建博客展示页面路由
const admin = express.Router();

admin.get('/login',require('./admin/loginPage'));

// 实现登录功能

admin.post('/login', require('./admin/login'))

// 创建用户列表路由
admin.get('/user',require('./admin/userPage'))

// 普通用户登录路由
admin.get('/normalUser',require('./admin/normalUser'))

// 创建用户注册路由
admin.get('/signPage',require('./admin/signPage'))

admin.post('/signUp',require('./admin/signUp'))

// 删除用户功能路由
admin.get('/delete', require('./admin/userDelete'))

// 文章列表路由
admin.get('/article',require('./admin/article'))

// 评论管路路由
// admin.get('/comment',require('./admin/comment'))
admin.get('/comment',require('./admin/comment'))

// 文章编辑路由
admin.get('/article-edit',require('./admin/article-edit'))
// 新增文章
admin.post('/article-add',require('./admin/article-add'))
// 修改文章
admin.post('/article-modify',require('./admin/article-modify'))

// 删除文章路由
admin.get('/article-delete',require('./admin/article-delete'))

// 删除评论路由
admin.get('/comment-delete',require('./admin/comment-delete'))
// 图片管理路由
admin.get('/picture',require('./admin/picture'))
// 删除图片路由
admin.get('/deletePic',require('./admin/deletePic'))

// 查询用户
admin.get('/aReacher',require('./admin/aReacher'))

// 查询用户
admin.get('/uReacher',require('./admin/uReacher'))

// 查询用户
admin.get('/cReacher',require('./admin/cReacher'))

// 敏感词路由
admin.get('/bedWord',require('./admin/bedWord'))
// 跳转添加敏感词汇
admin.get('/addBedWordPage',require('./admin/addBedWordPage'))
// 添加敏感词汇
admin.post('/addBedWord',require('./admin/addBedWord'))
// 删除敏感词
admin.get('/bedWord-delete',require('./admin/bedWord-delete'))
// 查询敏感词
admin.get('/wReacher',require('./admin/wReacher'))

// 退出
admin.get('/logout',require('./admin/logout'))
// 取消收藏
admin.get('/deleteShoucang',require('./admin/deleteShoucang'))

// 将路由对象作为模块成员进行导出
module.exports = admin;