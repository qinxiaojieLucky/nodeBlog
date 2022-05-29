const { Picture } = require('../../model/picture')
module.exports = async (req,res) => {
    await Picture.findOneAndDelete({_id: req.query.id})
    res.redirect('/admin/picture?page='+req.query.page)
}