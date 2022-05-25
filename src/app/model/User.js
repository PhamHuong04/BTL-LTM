const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const User = new Schema({

    username: {
        type: String,
        allowNull: false
    },
    mail: {
        type: String,
        unique: true,
        allowNull: false
    },
    password: {
        type: String,
        allowNull: false
    }
    
    
}, {
    timestamps: true,
});

module.exports = mongoose.model('User', User);