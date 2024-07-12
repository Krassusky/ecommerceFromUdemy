const express = require ('express');
const usersRepo = require ('../../repositories/users');
const signupTemplate = require ('../../views/auth/signup');
const signinTemplate = require ('../../views/auth/signin');

const router = express.Router();


router.get('/signup',(req,res) =>{
    res.send(signupTemplate({ req }));
    
});



router.post('/signup', async (req, res)=>{
    const {email, password, passwordConfirmation,message} = req.body;

    const existingUser = await usersRepo.getOneBy({email});
    if(existingUser){
        return res.send('User already exists');
        }
    if(password !== passwordConfirmation){
        return res.send(`Passwords do not match 
            <a href="#" onclick="history.back();" class="return-button">Return</a>`);
        }

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