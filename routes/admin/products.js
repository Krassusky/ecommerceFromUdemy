const express = require ('express');
const { check, validationResult } = require ('express-validator');
const productsRepo = require ('../../repositories/products');
const productsNewTemplate = require('../../views1/admin1/products/new');
const {
    requireTitle,
    requirePrice } = require('./validators')

const router = express.Router();

router.get('/admin/products', (req,res)=>{
    res.send('admin/products')



});
router.post('/admin/products',(req,res)=>{



});

router.get('/admin/products/new', (req,res)=>{
    res.send(productsNewTemplate({}));
});

router.post('/admin/products/new',[
    requireTitle,
    requirePrice
], (req,res)=>{
    const erros = validationResult(req);
    console.log(erros);
    // if(!erros.isEmpty()){
    //     return res.send(erros.array());
    //     }
    //     productsRepo.create({
    //         title: req.body.title,
    //         price: req.body.price
    //         });
        
    res.send('submited')

});

module.exports = router;