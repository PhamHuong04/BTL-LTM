const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const ReadingBook = new Schema({
    chapter: { type: Number }, // maxLength: 255
    content: { type: String },
    createdAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
    plug: { type: String }
});

module.exports = mongoose.model('ReadingBook', ReadingBook);