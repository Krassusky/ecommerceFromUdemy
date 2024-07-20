const express = require ('express');
const multer = require('multer');

const {handleErros } = require ('./middlewares');
const productsRepo = require ('../../repositories/products');
const productsNewTemplate = require('../../views1/admin1/products/new');
const {
    requireTitle,
    requirePrice, 
    // requireImage
    } = require ('./validators');

const router = express.Router();
const upload = multer({storage: multer.memoryStorage()});

router.get('/admin/products', (req,res)=>{
    res.send('admin/products')



});
router.post('/admin/products',(req,res)=>{



});

router.get('/admin/products/new', (req,res)=>{
    res.send(productsNewTemplate({}));
});

router.post('/admin/products/new',
    upload.single('image'),
[
    requireTitle,
    requirePrice,
    // requireImage
],

handleErros(productsNewTemplate),
 async (req,res)=>{
 
    const image = req.file.buffer.toString('base64');
    const {title, price} = req.body;
    await productsRepo.create({title,price,image});


    res.send('submited');
    // console.log(erros);
    console.log(req.body);

});

module.exports = router;