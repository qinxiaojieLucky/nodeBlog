// 引用express框架
const express = require('express');
// 创建博客展示页面路由
const home = express.Router();
home.get('/',require('./home/index'));
// 博客文章详情页面
home.get('/article',require('./home/article'))
// 博客文章评论页面
home.post('/comment',require('./home/comment'))
// 图片页面
home.get('/picture',require('./home/picture'))
// 图片上传
home.post('/pictureUp',require('./home/pictureUp'))
// 文章收藏
home.get('/shoucang',require('./home/shoucang'))
// 评论内容含有敏感词路由
home.get('/commentError',require('./home/commentError'))
// 查询文章
home.get('/articleSearch',require('./home/articleSearch'))

// 将路由对象作为模块成员进行导出
module.exports = home;