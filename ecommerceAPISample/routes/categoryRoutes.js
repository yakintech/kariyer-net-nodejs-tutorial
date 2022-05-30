const express = require('express');
const router = express.Router();

const { categoryController } = require('../controllers/categoryController');
const { tokenManager } = require('../helpers/tokenManager');
const { categoryValidations } = require('../validation/category');


router.get('/', tokenManager.control, categoryController.getAll);
router.get('/:id', categoryController.getById);
router.post('/', categoryValidations.addCategory, categoryController.add);
router.put('/', categoryValidations.updateCategory, categoryController.update);
router.delete('/:id', categoryController.delete);


module.exports = router
