const express = require('express');
const router = express.Router();

const { categoryController } = require('../controllers/categoryController');
const { tokenManager } = require('../helpers/tokenManager');
const { categoryValidations } = require('../validation/category');


router.get('/', tokenManager.control, categoryController.getAll);
router.get('/:id', tokenManager.control, categoryController.getById);
router.post('/', tokenManager.control, categoryValidations.addCategory, categoryController.add);
router.put('/', tokenManager.control, categoryValidations.updateCategory, categoryController.update);
router.delete('/:id', tokenManager.control, categoryController.delete);


module.exports = router
