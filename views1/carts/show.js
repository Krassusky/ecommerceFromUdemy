const layout = require('../layout');
    
module.exports = ({items}) => {


    let totalPrice=0
    for (let item of items){
        totalPrice+=item.quantity * item.product.price;
    }

    // const totalPrice = items.reduce((prev, item)=>{
    //     return prev + item.quantity * item.product.price;

    // },0);


    const renderedItems = items
    .map((item)=>{
        return `
        <tr>
            <td scope="row">${item.product.title}</td>
            <td>$${item.product.price}</td>
            <td>${item.quantity}</td>
            <td><img src="data:image/png;base64,${item.product.image}" class="card-img-top" alt="Product Image"></td>
            <td>$${item.product.price*item.quantity}</td>

            <td><a href="/cart/${item.product.id}/edit" class="btn btn-info">Edit</a></td>
            <td>
                <form method="POST" action="/cart/products/delete" >
                    <input type="hidden" name="itemId" value="${item.id}">
                    <button class="btn btn-danger">Delete</button> 
                </form>
            </td>
        </tr>
        

        `;

    })
    .join('');

    return layout({
       content:`
       <div>
        <div class="headerOfProdocutsListsAdmin">
            <h1 class="tite">Products</h1>
            <a href="/" type="button" class="btn btn-success">Kepp shopping</a>
        </div>

        <table class="table">
        <thead>
            <tr>
                <th scope="col">Title</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Image</th>
                <th scope="col">Total</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
            </tr>
        </thead>
        
        <tbody>
        ${renderedItems}
        
        </tbody>
        </table>
        </div>
        <div>Cart total:$${totalPrice} </div>
        <button class="btn btn-success"> Buy </button>
        
        `
    });
};