const express = require ('express');
const multer = require('multer');

const {handleErros,requireAuth } = require ('./middlewares');
const productEditTemplate = require('../../views1/admin1/products/edit')
const productsRepo = require ('../../repositories/products');
const productsNewTemplate = require('../../views1/admin1/products/new');
const productsIndexTemplate = require('../../views1/admin1/products/index');
const {
    requireTitle,
    requirePrice, 
    // requireImage
    } = require ('./validators');

const router = express.Router();
const upload = multer({storage: multer.memoryStorage()});

router.get('/admin/products', requireAuth, async (req,res)=>{
  
    const products = await productsRepo.getAll();
    res.send(productsIndexTemplate({products}))
});
router.post('/admin/products',(req,res)=>{



});

router.get('/admin/products/new', requireAuth,(req,res)=>{
   
    res.send(productsNewTemplate({}));
});

router.post('/admin/products/new', 
    requireAuth,
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


    res.redirect('/admin/products');
    // above is how to redirect to a new page

});

router.get('/admin/products/:id/edit', requireAuth, 
    async (req,res)=>{
    const product = await productsRepo.getOne(req.params.id);
        if (!product){
            return res.send('Product not found');
        }
    res.send(productEditTemplate({product}));
console.log(req.params.id);

});

router.post('/admin/products/:id/edit',
    requireAuth,
    upload.single('image'),
    [
    requireTitle,
    requirePrice,
    // requireImage
    ],
    handleErros(productEditTemplate, async (req) =>{
        const product = await productsRepo.getOne(req.params.id);
        return {product};
    }),
    async (req,res)=>{
        const changes = req.body;

        if(req.file){
            changes.image = req.file.buffer.toString('base64');
        }
        try{
        await productsRepo.update(req.params.id, changes);
        } catch (err){
            return res.send('Item not found');
        }
        res.redirect('/admin/products');
    }
);



router.get('/admin/products/:id/delete', requireAuth,
     async (req,res)=>{

    
    console.log(req.params.id);

});

module.exports = router;