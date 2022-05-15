const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const Book = new Schema({
    name: { type: String }, // maxLength: 255
    tacgia: { type: String },
    view: { type: String },
    image: { type: String },
    mota: { type: String },
    theloai: { type: String },
    createdAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
    plug: { type: String }
});

module.exports = mongoose.model('Book', Book);