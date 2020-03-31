const express = require('express');
const router = express.Router();

//router to create product
router.post('/products/create',require('../controllers/product_controller').createProduct);

//router to list products
router.get('/products',require('../controllers/product_controller').listProduct);

//router to delete product
router.delete('/products/:id',require('../controllers/product_controller').deleteProduct);

//router to update product
router.put('/products/:id/update_quantity',require('../controllers/product_controller').updateProduct);

module.exports = router;