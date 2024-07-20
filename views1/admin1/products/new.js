const layout = require ('../layout');
const { getError } = require('../../helpers');

module.exports = ({req, errors}) =>{

    return layout ({
        content: `
        <form method="POST" enctype="multipart/form-data">
            <input type="text" name="title" placeholder="Product name" class="form-control"  />
            ${getError(errors, 'title')}
            <input type="text" name="price" placeholder="Product price" class="form-control"  />
            ${getError(errors, 'price')}
            <input type="file" name="image" placeholder="Up load an Image" class="form-control"  />
            
            <button class="btn btn-primary"> Submit </button>

           
        </form>



        `
    })


}