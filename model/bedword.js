const mongoose = require('mongoose')
const badWordSchema = new mongoose.Schema({
    content: {
        type: String,
        default: null
    }
})
const badWord = mongoose.model('badWord',badWordSchema);
module.exports = {
    badWord
}