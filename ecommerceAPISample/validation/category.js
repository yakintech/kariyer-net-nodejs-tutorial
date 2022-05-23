const { body } = require('express-validator');


const categoryValidations = {
    addCategory: [body('name').notEmpty().withMessage("Name alanı boş bırakılamaz"), body('cNumber').notEmpty().withMessage("cNumber alanı boş bırakılamaz").isNumeric().withMessage("Numeric bir değer girmek zorundasınız!")],
    updateCategory: [
        body('_id').notEmpty().withMessage("ID alanı boş bırakılamaz"), ]
}


module.exports = {
    categoryValidations
}


