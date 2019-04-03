var mongoose = require('mongoose');
var User = mongoose.model('user');
var faker = require('faker');

var createUser = function(req,res){
    var user = new User({
      "firstName":faker.name.firstName(),
      "lastName":faker.name.lastName(),
      "phoneNumber":faker.phone.phoneNumber(),
      "email":faker.internet.email(),
    });
    user.save(function(err,newUser){
        if(!err){
            res.send(newUser);
        }else{
            res.sendStatus(400);
        }
    });
};

var findAllUsers = function(req,res){
    User.find(function(err,user){
        if(!err){
            res.send(user);
        }else{
            res.sendStatus(404);
        }
    });
};

var findOneUser = function(req,res){
    var userInx = req.params.id;
    User.findById(userInx,function(err,user){
        if(!err){
            res.send(user);
        }else{
            res.sendStatus(404);
        }
    });
};

module.exports.createUser = createUser;
module.exports.findAllUsers = findAllUsers;
module.exports.findOneUser = findOneUser;
