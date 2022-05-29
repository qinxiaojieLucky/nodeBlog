module.exports = (req,res) => {
    // 删除session
    req.session.destroy(function(){
        // 删除cookie
        res.clearCookie('connect.sid');
        // 重定向到用户登录界面
        res.redirect('/home/');
        // 删除模板中的用户信息
        req.app.locals.userInfo = null;
    })
}