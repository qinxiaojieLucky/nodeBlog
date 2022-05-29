const bcrypt = require('bcrypt');
const Joi = require('joi');
const { userModule } = require('../../model/user')

module.exports = async (req,res)=>{
    const data = req.body;
    // 验证格式
    const schema = Joi.object({
        username: Joi.string().min(3).max(20).required().error(new Error(new Error('用户名长度大于3'))),
        password: Joi.string().required().error(new Error('密码格式不正确！')),
        repassword: Joi.string().required().error(new Error('密码格式不正确！'))
    });
    try{
        await schema.validateAsync(data);      
    }catch(e){
        return res.redirect(`/admin/signPage?message=${e.message}`)
    }
    if(data.password != data.repassword){
        return res.redirect(`/admin/signPage?message=两次密码不一致！`)
    }
    // 验证用户是否存在
    let user = await userModule.findOne({username: req.body.username});
    // console.log(user);
    if(user){
        return res.redirect(`/admin/signPage?message=用户名已存在`)
    }
    // 密码加密
    const salt = await bcrypt.genSalt(10);
    const pass = await bcrypt.hash(data.password,salt);
    data['password'] = pass;
    data['role'] = 'normal';
    await userModule.create(data);
    // 页面重定向到登录页面
    res.redirect('/admin/login')
}
