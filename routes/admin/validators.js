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
        })

};