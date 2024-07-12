const layout = require ('../layout');

module.exports = ({ req }) =>{
    return layout({
        content:`
            <div>
                your Id is: ${req.session.userId}
                <form method="POST">
                    <input type="text" name="email" placeholder="email" />
                    <input type="password" name="password" placeholder="password" />
                    <input type="password" name="passwordConfirmation" placeholder="password Confirmation" />
                    <input type="message" name="message" placeholder="type here your message"/>
                    <button> Sign Up </button>
                <form>
            <div>
        `
        });
    
};

