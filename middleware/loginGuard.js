const e = require("express");

const guard = (req,res,next) => {
    // 判断用户是否访问登录页面
    // 判断用户的请求状态
    // 如果用户是登录的则放行
    // 如果用户没有登录,重定向到登录页面
    if(req.url == '/user' || req.url == '/comment' || req.url =='/article'|| req.url =='/picture' || req.url == '/bedWord'){
      if(req.session.username){
        if(req.session.role == "admin"){
          next()
        }else{
          res.redirect('/admin/normalUser')
        }
      }else{
        res.redirect('/admin/login')
      }
    }else{
      next()
    }
    if(req.url == '/normalUser' && req.session.username==null){
      res.redirect('/admin/login')
    }
}
module.exports = guard;