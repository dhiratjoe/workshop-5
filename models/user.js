var mongoose = require('mongoose');
var userSchema = mongoose.Schema(
    {
        "firstName":String,
        "lastName":String,
        "phoneNumber":String,
        "email":String,
    }
);
mongoose.model('user',userSchema);
