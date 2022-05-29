const mongoose = require('mongoose')
const pictureSchema = new mongoose.Schema({
    cover: {
        type: String,
        default: null
    }
})
const Picture = mongoose.model('Picture',pictureSchema);
module.exports = {
    Picture
}