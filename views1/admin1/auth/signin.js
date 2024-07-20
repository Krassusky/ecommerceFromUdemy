const layout = require ('../layout');

const {getError} = require ('../../helpers');



module.exports = ({ req, errors }) =>{
    return layout({
        content:`
           <div class=" row justify-content-md-center">
                <form method="POST" class="">
                    <input type="text" name="email" placeholder="email" class="form-control"  />
                    ${getError(errors, 'email')}
                    <input type="password" name="password" placeholder="password" class="form-control" />
                    ${getError(errors, 'password')}
                    <button class="btn btn-primary"> Sign in </button>
                    <div><a href="/signup">don't have an Account? Sign up here</a></div>
                    


                </form>
            <div>
  
        `
        });
};