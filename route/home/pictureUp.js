const formidable = require('formidable');
const path = require('path');
const { Picture } = require('../../model/picture')
module.exports = async (req,res) => {
    const form = formidable({ multiples: true, uploadDir: path.join(__dirname,'../','../','public','picture'), keepExtensions: true })
    form.parse(req, async (err,fields,files) => {
        await Picture.create({
            cover: (files.cover.filepath||'').split('public')[1],
        });
        res.redirect('/home/picture')
    })
}