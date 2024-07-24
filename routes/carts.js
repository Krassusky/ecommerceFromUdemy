const express = require('express');
const cartsRepo = require('../repositories/carts');
const productsRepo = require('../repositories/products'); 
const cartShowTemplate = require('../views1/carts/show');

const router = express.Router();

// receive a post request to add item to a cart

router.post('/cart/products', async (req, res) => {

    let cart;
    if(!req.session.cartId){
        cart = await cartsRepo.create({items:[]});
        req.session.cartId = cart.id;
    }else{
        cart = await cartsRepo.getOne(req.session.cartId);

    }

    const existingItem = cart.items.find(item => item.id === req.body.productId);
    if(existingItem){
        existingItem.quantity++;
        }else{
            cart.items.push({id: req.body.productId, quantity: 1});
            }
    
    await cartsRepo.update(cart.id, {items: cart.items});

    console.log(cart);

    res.send('it works')

});

router.get('/cart', async (req,res)=>{
    if(!req.session.cartId){    
        return res.redirect('/');
        }
    const cart = await cartsRepo.getOne(req.session.cartId);

    for (let item of cart.items){
        const product = await productsRepo.getOne(item.id);
        item.product = product;

    }
    res.send(cartShowTemplate ({items: cart.items}));
        
});

//receive a get request to show cart
// recive a post request to delete item from the cart

module.exports = router;