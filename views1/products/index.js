const layout = require('../layout');

module.exports = ({products}) =>{
    const renderProducts = products.map(product => {
        return `

<div class="card" >
  <img src="data:image/png;base64,${product.image}" class="card-img-top" alt="Product Image">
  <div class="card-body">
    <h5 class="card-title">${product.title}</h5>
    <p class="card-text">Price: ${product.price}</p>
    <div class="addToCart">
    <form action="/cart/products" method="POST">
      <input type="hidden" name="productId" value="${product.id}">
      <button class="btn btn-primary">Add to cart</button>
    </form>
    </div>
  </div>
</div>



       


        `;

    }).join('');

    return layout({
      content: `
    
    <ul class="CardList">
    ${renderProducts}
    </ul>
    
    `});
};






