const layout = require('../layout');


module.exports = ({items}) => {
    const renderedItems = items
    .map(item=>{
        return `

        <div class="collection-item">${item.title} - ${item.price} - ${item.quantity}  <img src="data:image/png;base64,${item.image}" class="card-img-top" alt="Product Image"></div>
  
        `;

    })
    .join('');

    return layout({
        content: `

        <h2>cart</h2>
        ${renderedItems}
        
        `
    });
};