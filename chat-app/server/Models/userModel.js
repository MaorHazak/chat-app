const mongoose = require('mongoose');


// should delete min and max length eventually.
const userSchema = new mongoose.Schema({
    name: {type: String, required: true, minlenth:3, maxlenth:30},
    email: {type: String, required: true, minlenth: 3, maxlenth: 40, uniqe: true},
    password: {type: String, required: true, minlenth: 5, maxlength: 40}

}, {timestamps: true});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;