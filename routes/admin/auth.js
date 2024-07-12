const express = require ('express');
const { check, validationResult } = require ('express-validator');
const usersRepo = require ('../../repositories/users');
const signupTemplate = require ('../../views1/admin1/auth/signup');
const signinTemplate = require ('../../views1/admin1/auth/signin');

const router = express.Router();


router.get('/signup',(req,res) =>{
    res.send(signupTemplate({ req }));
    
});



router.post('/signup',[ 
    check('email')
        .trim()
        .normalizeEmail()
        .isEmail()
        .withMessage('Email is required')
        .custom(async (email)=>{
            const existingUser = await usersRepo.getOneBy({email});

            if (existingUser) {
                throw new Error('Email already in use');
            }
        }),
    check('password')
        .trim()
        .isLength({min :4, max: 22})
        .withMessage('Password must be between 4 and 22 characters'),
    check('passwordConfirmation')
        .trim()
        .isLength({min :4, max: 22})
        .withMessage('Password must be between 4 and 22 characters')
        .custom((passwordConfirmation, { req }) =>{
            if(passwordConfirmation !== req.body.password){
                throw new Error('Passwords do not match');
            }
        })
], async (req, res)=>{
    const errors = validationResult(req);

    console.log(errors);
    const {email, password, passwordConfirmation,message} = req.body;
    const user = await usersRepo.create({email,password,message});

        req.session.userId = user.id;

        res.send(`User created successfully  
            <a href="#" onclick="history.back();" class="return-button">Return</a>`);
        console.log(req.body);
});

router.get('/signout', (req,res) => {
    req.session = null;
    res.send(`You are now signed out <a href="#" onclick="window.location.href='/signin'" class="return-button">Sign in</a>
        `);

});

router.get('/signin', (req,res) => {
    res.send(signinTemplate({ req }));


});

router.post('/signin', async (req,res) => {
    const {email,password} = req.body;
    const user = await usersRepo.getOneBy({email});
    if(!user){
        return res.send(`email does not exist <a href="#" onclick="history.back();" class="return-button">Return</a>`);
        }

    const validPassword = await usersRepo.comparePasswords(
        user.password,password
    );
    if(!validPassword){
        return res.send(`password is incorrect`);

    }
         
        req.session.userId = user.id;
        return res.send(`you are id is ${req.session.userId} <a href="#" onclick="history.back();" class="return-button">Return</a>`);
    

});

module.exports = router;