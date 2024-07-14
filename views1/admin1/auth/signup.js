const layout = require ('../layout');

const getError = (errors, prop ) => {
    try {
        return errors.mapped()[prop].msg
    } catch (err){
        return '';
    }
};

module.exports = ({ req, errors }) =>{
    return layout({
        content:`
            <div>
                your Id is: ${req.session.userId}
                <form method="POST">
                    <input type="text" name="email" placeholder="email" />
                    ${getError(errors, 'email')}
                    <input type="password" name="password" placeholder="password" />
                    ${getError(errors, 'password')}
                    <input type="password" name="passwordConfirmation" placeholder="passwordConfirmation" />
                    <a style="color: red;">${getError(errors, 'passwordConfirmation')}</a>

                    <button> Sign Up </button>
                <form>
            <div>
        `
        });
    
};

