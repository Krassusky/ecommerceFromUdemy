const Repository = require ('./repository');
const fs = require('fs');

class ProductsRepository extends Repository{
    // constructor() {
    //     if(!filename){
    //         throw new Error('Creating a repository requires a filename "products"')
    //     }
    //     this.filename = filename;
    //     try{
    //         fs.accessSync(this.filename);
    //     } catch (err){
    //         fs.writeFileSync(this.filename, '[]');
    //     }

    // }
    // async create(attrs){
    //     attrs.id = this.randomId();

    //     const products = await this.getAll();

    //     products.push(attrs);

    // }


}

module.exports = new ProductsRepository('products.json');