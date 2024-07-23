const layout = require('../layout');

module.exports = ({products}) =>{
    const renderProducts = products.map(product => {
        return `

<div class="card" >
  <img src="data:image/png;base64,${product.image}" class="card-img-top" alt="Product Image">
  <div class="card-body">
    <h5 class="card-title">${product.title}</h5>
    <p class="card-text">Price: ${product.price}</p>
    <a href="#" class="btn btn-primary">Add to cart</a>
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






