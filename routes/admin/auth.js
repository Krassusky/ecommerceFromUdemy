const express = require ('express');
const { check, validationResult } = require ('express-validator');
const usersRepo = require ('../../repositories/users');
const signupTemplate = require ('../../views1/admin1/auth/signup');
const signinTemplate = require ('../../views1/admin1/auth/signin');
const { requireEmail, requirePassword, requirePasswordConfirmation } = require ('./validators')

const router = express.Router();


router.get('/signup',(req,res) =>{
    res.send(signupTemplate({ req }));
    
});



router.post('/signup',[ 
    requireEmail,
    requirePassword,
    requirePasswordConfirmation,
    
], async (req, res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.send(signupTemplate({ req, errors }));
        }

    
    const {email, password} = req.body;
    const user = await usersRepo.create({email,password,});

        req.session.userId = user.id;

        res.send(`User created successfully  
            <a href="#" onclick="history.back();" class="return-button">Return</a>`);
        console.log(req.body);
        console.log(errors);
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
    check('email')
        .trim()
        .normalizeEmail()
        .isEmail()
        .withMessage('Please enter a valid email address')
        .custom(async (email)=>{
            const user = await usersRepo.getOneBy({email});
            if (!user) {
                throw new Error('No user with that email address');
                }

        }),
    check('password')
        .trim()
        .custom(async(password, {req})=>{
            const user = await usersRepo.getOneBy({email:req.body.email});
            if (!user) {
                throw new Error ('invalid password')};

            const validPassword = await usersRepo.comparePasswords(
                user.password,
                password
            );
            if(!validPassword){
                throw new Error('invalid password');
        
            }

        })

], async (req,res) => {
    const errors = validationResult (req);
    console.log(errors);
    const {email,} = req.body;

    const user = await usersRepo.getOneBy({email});

    if(!user){
        return res.send(`email does not exist <a href="#" onclick="history.back();" class="return-button">Return</a>`);
        }

    
         
        req.session.userId = user.id;
        return res.send(`you are id is ${req.session.userId} <a href="#" onclick="history.back();" class="return-button">Return</a>`);
    

});

module.exports = router;