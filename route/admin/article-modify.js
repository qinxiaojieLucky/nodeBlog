// 引入formidable模块
const formidable = require('formidable');
const path = require('path');
const { Article } = require('../../model/article')
module.exports = async (req,res) => {

    // 创建表单解析对象
    // 配置上传文件的存放位置
    // 保留上传文件的后缀
    // 解析表单
    const form = formidable({ multiples: true, uploadDir: path.join(__dirname,'../','../','public','uploads'), keepExtensions: true })
    form.parse(req, async (err,fields,files) => {
        // err 是错误对象 若表单解析失败，存放错误信息；若解析成功，null；
        // fields 是对象类型 保存普通表单数据
        // files 对象类型 保存上传文件相关的数据
        // res.send(files.cover.path.split('public')[1]);
        await Article.updateOne({_id:req.query.id},{
            title: fields.title,
            author: fields.author,
            publishDate: fields.publishDate,
            cover: (files.cover.filepath||'').split('public')[1],
            content: fields.content,
        });
        res.redirect('/admin/article')
    })

}