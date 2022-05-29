
module.exports = (req,res)=>{
    const {message} = req.query;
    res.render('admin/login',{
        message: message
    })
}