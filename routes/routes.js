var express = require('express');
var router = express.Router();

var controller = require('../controllers/controller.js');

// Create new user
router.post('/users',controller.createUser);

// Find all users
router.get('/users',controller.findAllUsers);

// Find one user by id
router.get('/users/:id',controller.findOneUser);

module.exports = router;
