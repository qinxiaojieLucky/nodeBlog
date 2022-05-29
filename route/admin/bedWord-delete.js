const { badWord } = require('../../model/bedword')
module.exports = async (req,res) => {
    let id = req.query.id;
    await badWord.findOneAndDelete({_id: id})
    res.redirect('/admin/bedword?page='+req.query.page)
}