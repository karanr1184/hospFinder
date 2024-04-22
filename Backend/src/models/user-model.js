const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type: String, 
        require: true,
    },
    password: {
        type: String, 
        require: true,
    }
});

const User = new mongoose.model("User", userSchema);
module.exports = User;