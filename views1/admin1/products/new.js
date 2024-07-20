const layout = require ('../layout');
const { getError } = require('../../helpers');

module.exports = ({req, errors}) =>{

    return layout ({
        content: `
        <form method="POST" enctype="multipart/form-data">
            <input type="text" name="title" placeholder="Product name" class="form-control"  />
            <spam class="waringnsForErrosOnSubmit">${getError(errors, 'title')}</spam>
            <input type="text" name="price" placeholder="Product price" class="form-control"  />
            <spam class="waringnsForErrosOnSubmit">${getError(errors, 'price')}</spam>
            <input type="file" name="image" placeholder="Up load an Image" class="form-control"  />
            <br>
            <button class="btn btn-primary"> Submit </button>

           
        </form>



        `
    })


}