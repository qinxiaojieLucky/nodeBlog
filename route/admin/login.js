const { userModule } = require('../../model/user')
const bcrypt = require('bcrypt')
module.exports =  async (req,res) => {
    const {username,password} = req.body;
    let user = await userModule.findOne({username});
    
    if(user){
        let isValue = await bcrypt.compare(password,user.password);
        if(isValue){
            req.session.username = user.username;
            req.session.role = user.role;
            // 重定向到用户列表页面
            req.app.locals.userInfo = user;
            req.app.locals.currentHomeLink = 'userinfo';
            if(user.role=='admin'){
                res.redirect('/admin/user');
            }else{
                res.redirect('/admin/normalUser');
            }
        }else{
            return res.redirect(`/admin/login?message=账号或密码错误`);
        }
    }else{
        return res.redirect(`/admin/login?message=账号或密码错误`);
    }
}