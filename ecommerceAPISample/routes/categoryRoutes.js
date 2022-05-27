const express = require('express');
const router = express.Router();

const { categoryController } = require('../controllers/categoryController');
const { categoryValidations } = require('../validation/category');


router.get('/', categoryController.getAll);
router.get('/:id', categoryController.getById);
router.post('/', categoryValidations.addCategory, categoryController.add);
router.put('/', categoryValidations.updateCategory, categoryController.update);
router.delete('/:id', categoryController.delete);


module.exports = router
