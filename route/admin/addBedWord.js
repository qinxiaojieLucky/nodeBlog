const { badWord } = require('../../model/bedword')
module.exports = async (req,res)=>{
    badWord.create({
        content: req.body.bedWord
    })
    res.redirect('/admin/bedword')
}