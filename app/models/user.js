var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    facebook         : {
        id           : String,
        token        : String,
        name         : String,
        email        : String
    },
    google           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    }

});

module.exports = mongoose.model('User', userSchema);
