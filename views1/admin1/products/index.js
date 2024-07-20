const layout = require('../layout');

module.exports = ({products})=>{
    const renderdProducts = products.map((product)=>{
        
        return `
         <div class="product">${product.title}</div>


        
        `
        

    }).join('');

    return layout({
        content:`
        <h1 class="tite">Products</h1>
        ${renderdProducts}
        `
    });




};