const express=require('express');


const productContoller=require('../controller/product');
const router=express.Router();


router.get('/api/products', productContoller.getAllProducts);
router.get('/api/product/:id', productContoller.getProduct);

router.put('/api/product/:id', productContoller.replaceProduct);
router.patch('/api/product/:id', productContoller.updateProduct);


router.post('/api/products', productContoller.addProduct);
router.delete('/api/product/:id', productContoller.deleteProduct);


exports.router=router;