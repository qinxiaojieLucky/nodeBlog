module.exports = (req,res)=>{
    const {message} = req.query;
    res.render('admin/signPage',{
        message: message
    })
}