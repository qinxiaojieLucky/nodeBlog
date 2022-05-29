const { Shoucang } = require('../../model/shoucang')
module.exports = async (req,res) => {
    let username = req.session.username||'1';
    let shoucang = await Shoucang.find({
        username: username,
        flag:true
    });
    // console.log(shoucang)
    res.render('admin/normalUser',{
        username: username,
        shoucang:shoucang.reverse(),
        length: shoucang.length
    });
}