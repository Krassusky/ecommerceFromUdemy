const layout = require("../layout")
const { getError } = require('../../helpers');



module.exports = ({product,errors}) =>{
    return layout ({
       
        content: `
        
        <form method="POST" enctype="multipart/form-data">
            <input type="text" name="title" value="${product.title}" class="form-control"  />
            <spam class="waringnsForErrosOnSubmit">${getError(errors, 'title')}</spam>
            <input type="text" name="price" value="${product.price}" class="form-control"  />
            <spam class="waringnsForErrosOnSubmit">${getError(errors, 'price')}</spam>
            <input type="file" name="image" placeholder="Up load an Image" class="form-control"  />

            <br>
            <a hfre></a><button class="btn btn-primary"> Submit </button>

           
        </form>
        


        `
    })




}