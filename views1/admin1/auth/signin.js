const layout = require ('../layout');



module.exports = ({ req }) =>{
    return layout({
        content:`
            <div>
                your Id is: ${req.session.userId}
                <form method="POST">
                    <input type="text" name="email" placeholder="email" />
                    <input type="password" name="password" placeholder="password" />
                    <button> Sign in </button>
                </form>
            <div>
    
        `
        });
};