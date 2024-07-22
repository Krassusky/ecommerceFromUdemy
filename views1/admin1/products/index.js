const layout = require('../layout');

module.exports = ({products})=>{
    const renderdProducts = products.map((product)=>{
        
        return `
        <tr>
            <td scope="row">${product.title}</td>
            <td>${product.price}</td>
            <td><a href="/admin/products/${product.id}/edit" class="btn btn-info">Edit</a></td>
            <td>
                <form method="POST" action="/admin/products/${product.id}/delete" >
                <button class="btn btn-danger">Delete</button> 
                
                </form>
            </td>
        </tr>


        
        `
        

    }).join('');

    return layout({
        content:`
        <div class="headerOfProdocutsListsAdmin">


        <h1 class="tite">Products</h1>
        <a href="/admin/products/new" type="button" class="btn btn-success">Add New Product</a>
        </div>

        <table class="table">
        <thead>
            <tr>
                <th scope="col">Title</th>
                <th scope="col">Price</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
            </tr>
        </thead>
        <tbody>
        ${renderdProducts}
        </tbody>



        `
    });




};