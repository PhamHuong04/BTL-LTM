const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const History = new Schema({
    stt: { type: String },
    name: { type: String }, // maxLength: 255
    tacgia: { type: String },
    percent: { type: String },
    plug: { type: String }
}, {
    timestamps: true,
});

module.exports = mongoose.model('History', History);