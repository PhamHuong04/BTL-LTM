const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const Book = new Schema({
    name: { type: String }, // maxLength: 255
    tacgia: { type: String },
    view: { type: Number },
    image: { type: String },
    mota: { type: String },
    theloai: { type: String },
    plug: { type: String },
    contents: [
        {
            chapter: {type: Number},
            content: {type: String}
        }
        
    ]
}, {
    timestamps: true,
});
 
module.exports = mongoose.model('Book', Book);