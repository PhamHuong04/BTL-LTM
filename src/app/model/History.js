const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const History = new Schema({
    // stt: { type: String },
    idBook: { type: String },
    idUser: { type: String },
    process: { type: Number }
}, {
    timestamps: true,
});

module.exports = mongoose.model('History', History);