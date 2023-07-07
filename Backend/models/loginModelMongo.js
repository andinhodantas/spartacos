const mongoose = require('mongoose');

const Login = mongoose.model('Usuario', {
    email: {
        type: String,
        required: true,
    },
    senha: {
        type: String,
        required: true,
    }
});

module.exports = Login