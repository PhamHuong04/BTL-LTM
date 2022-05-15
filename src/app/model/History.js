const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const History = new Schema({
    stt: {type : String},
    name: { type: String }, // maxLength: 255
    tacgia: { type: String },
    percent: {type: String},
    createdAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
    plug: { type: String }
});

module.exports = mongoose.model('History', History);