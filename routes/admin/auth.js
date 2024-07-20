const express = require ('express');

const {handleErros, requireAuth } = require ('./middlewares');
const usersRepo = require ('../../repositories/users');
const signupTemplate = require ('../../views1/admin1/auth/signup');
const signinTemplate = require ('../../views1/admin1/auth/signin');
const { 
    requireEmail, 
    requirePassword, 
    requirePasswordConfirmation,
    requireCorrectUser,
    requireCorrectPassword } = require ('./validators')

const router = express.Router();


router.get('/signup',(req,res) =>{
    res.send(signupTemplate({ req }));
    
});



router.post('/signup',[ 
    requireEmail,
    requirePassword,
    requirePasswordConfirmation,
    
], 
handleErros(signupTemplate),
async (req, res)=>{
   
    const {email, password} = req.body;
    const user = await usersRepo.create({email,password});

    req.session.userId = user.id;

    res.redirect('/admin/products');
        // console.log(req.body);
        // console.log(errors);
});

router.get('/signout', requireAuth, (req,res) => {
    req.session = null;
    res.redirect('/signin')

});

router.get('/signin', (req,res) => {
    res.send(signinTemplate({ req }));


});

router.post('/signin',[
    requireCorrectUser,
    requireCorrectPassword

],
handleErros(signinTemplate),
async (req,res) => {
    const {email} = req.body;

    const user = await usersRepo.getOneBy({email});
         
    req.session.userId = user.id;
    return res.redirect('/admin/products');

});

module.exports = router;