const { Schema, model } = require('mongoose');

const schema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    avatar: { type: String, required: false },
});

module.exports = model('User', schema);
