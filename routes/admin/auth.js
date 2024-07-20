const express = require ('express');

const {handleErros } = require ('./middlewares');
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

        res.send(`User created successfully  
            <a href="#" onclick="history.back();" class="return-button">Return</a>`);
        // console.log(req.body);
        // console.log(errors);
});

router.get('/signout', (req,res) => {
    req.session = null;
    res.send(`You are now signed out <a href="#" onclick="window.location.href='/signin'" class="return-button">Sign in</a>
        `);

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
    return res.send(`you are id is ${req.session.userId} <a href="#" onclick="history.back();" class="return-button">Return</a>`);
    

});

module.exports = router;