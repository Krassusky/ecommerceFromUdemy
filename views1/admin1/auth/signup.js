const layout = require ('../layout');

const {getError} = require ('../../helpers');

module.exports = ({ req, errors }) =>{
    return layout({
        content:`
            <div>
                
                <form method="POST">
                    <input type="text" name="email" placeholder="email ${getError(errors, 'email')}" class="form-control" />
                    <spam class="waringnsForErrosOnSubmit">${getError(errors, 'email')}</spam>
                    <input type="password" name="password" placeholder="password" class="form-control"/>
                    <spam class="waringnsForErrosOnSubmit">${getError(errors, 'password')}</spam>
                    <input type="password" name="passwordConfirmation" placeholder="passwordConfirmation" class="form-control" />
                    <spam class="waringnsForErrosOnSubmit">${getError(errors, 'passwordConfirmation')}</spam>
                    <br>
                    <button class="btn btn-primary"> Sign Up </button>
                    
                <form>
            <div>
        `
        });
    
};

