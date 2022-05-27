const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const User = new Schema({

    username: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required:true
    },
    age: {
        type: String
    },
    sex: {
        type: String
    },
    permission: {
        type: String
    },
    phone: {
        type: String
    }


}, {
    timestamps: true,
});

module.exports = mongoose.model('User', User);