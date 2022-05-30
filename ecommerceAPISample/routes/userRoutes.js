const express = require('express');
const { userController } = require('../controllers/userController');
const router = express.Router();

 router.post('/register', userController.register);
 router.post('/token', userController.token);
 router.get('/', userController.getAll);



module.exports = router
