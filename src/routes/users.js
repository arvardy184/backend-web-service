const express = require('express');

const UserController = require('../controller/users.js');

const router = express.Router();

router.post('/',UserController.createNewUsers);

router.get('/',UserController.getAllUsers);

router.patch('/:id',UserController.updateUsers);

router.delete('/:id',UserController.deleteUsers);

module.exports = router;