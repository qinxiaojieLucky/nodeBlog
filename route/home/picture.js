const { Picture } = require('../../model/picture')
module.exports = async (req,res) => {
    let username = req.session.username||'1';
    // 标识当前访问的是首页
    req.app.locals.currentHomeLink = 'picture';
    let pictures = await Picture.find({});
    res.render('home/picture',{
        username: username,
        pictures: pictures.reverse()
    })
}