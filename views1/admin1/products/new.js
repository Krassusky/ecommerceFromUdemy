const layout = require ('../layout');
const { getError } = require('../../helpers');

module.exports = ({erros}) =>{

    return layout ({
        content: `
        <form method="POST">
            <input type="text" name="title" placeholder="Product name" class="form-control"  />
            <input type="text" name="price" placeholder="Product price" class="form-control"  />
            <input type="file" name="image" placeholder="Up load an Image" class="form-control"  />

            <button class="btn btn-primary"> Submit </button>


        </form>



        `
    })


}