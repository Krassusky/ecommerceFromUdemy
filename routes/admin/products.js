const express = require ('express');
const { check, validationResult } = require ('express-validator');
const multer = require('multer');

const productsRepo = require ('../../repositories/products');
const productsNewTemplate = require('../../views1/admin1/products/new');
const {
    requireTitle,
    requirePrice } = require('./validators')

const router = express.Router();
// const upload = multer({dest: 'public/uploads/'});
const upload = multer({sotrage: multer.memoryStorage()});

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
],
 upload.single('image'),
(req,res)=>{
    const erros = validationResult(req);
    console.log(erros);
    console.log(req.file);
    if(!erros.isEmpty()){
        return res.send(productsNewTemplate({req,erros}));
        }
    // const {title, price} = req.body;
    // const newProduct = await 
    //     productsRepo.create({ title,price });
        
    res.send('submited')

});

module.exports = router;