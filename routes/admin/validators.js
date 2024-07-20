const { check } = require('express-validator');
const usersRepo = require('../../repositories/users');

module.exports = {






    requireEmail : 
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

    requirePassword :
    check('password')
        .trim()
        .isLength({min :4, max: 22})
        .withMessage('Password must be between 4 and 22 characters'),

    requirePasswordConfirmation :
    check('passwordConfirmation')
        .trim()
        .isLength({min :4, max: 22})
        .withMessage('Password must be between 4 and 22 characters')
        .custom((passwordConfirmation, { req }) =>{
            if(passwordConfirmation !== req.body.password){
                throw new Error('Passwords do not match');
            }else {
                return true;
            }
        }),

    requireCorrectUser:
    check('email')
        .trim()
        .normalizeEmail()
        .isEmail()
        .withMessage('Please enter a valid email address')
        .custom(async (email)=>{
            const user = await usersRepo.getOneBy({email});
            if (!user) {
                throw new Error('No user with that email address');
                }else {
                    return true;
                }

        }),

    requireCorrectPassword:
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

        }),
        
        requireTitle :
        check('title')
            .trim()
            .isLength({min :2, max: 50})
            .withMessage('A valid title is required'),
    
        requirePrice :
        check('price')
            .trim()
            .isLength({min:2})
            .isNumeric({min:0.01})
            .toFloat()
            .withMessage('A valid price is required')
    
        // requireImage:
        // check('image')
        // .trim()
        // .isLength({min:10})
        // .withMessage('An image is required')


        
 



};