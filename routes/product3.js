const express=require('express');

const productContoller=require('../controller/product3');
const router=express.Router();


router.get('/products', productContoller.getProduct);

router.post('/products', productContoller.addProduct);
router.delete('/product/:id', productContoller.deleteProduct);


exports.router=router;