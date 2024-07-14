const layout = require ('../layout');

const {getError} = require ('../../helpers');

module.exports = ({ req, errors }) =>{
    return layout({
        content:`
            <div>
                
                <form method="POST">
                    <input type="text" name="email" placeholder="email" class="form-control" />
                    ${getError(errors, 'email')}
                    <input type="password" name="password" placeholder="password" class="form-control"/>
                    ${getError(errors, 'password')}
                    <input type="password" name="passwordConfirmation" placeholder="passwordConfirmation" class="form-control" />
                    <a style="color: red;">${getError(errors, 'passwordConfirmation')}</a>
                    <div> your Id is: ${req.session.userId} </div>
                    <button class="btn btn-primary"> Sign Up </button>
                    
                <form>
            <div>
        `
        });
    
};

