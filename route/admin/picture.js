const { Picture } = require('../../model/picture')
module.exports = async (req,res) => {
    // 标识当前访问的是评论管理页面
    req.app.locals.currentLink = 'picture';
    // 客户端传过来的当前页的参数
    let page = req.query.page||1;
    // 每页显示的数量
    let pageSize = 5;
    // 查询评论的总数
    let count = await Picture.countDocuments({})
    // 计算总页数
    let total = Math.ceil(count/pageSize)
    // 页码对应的数据开始查询的位置
    let start = (page-1)*pageSize;
    let pictures = await Picture.find({});
    let temPicture = pictures.reverse();
    pictures = temPicture.splice(start,pageSize);
    res.render('admin/picture',{
        pictures:pictures,
        total: total,
        page: page,
        pageSize: pageSize
    })
    //    res.render('admin/comment')
}