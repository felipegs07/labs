class Product {
  constructor(title, price){
    this.title = title;
    this.price = price;
  }
}

class ProductFactory {
  constructor(){
    this.productList = [];
  }

  createProduct(title, price){
    const existingProduct = this.findProduct(title);
    if(existingProduct){
      return existingProduct;
    } 
    else {
      const newProduct = new Product(title, price);
      this.productList.push(newProduct);
      return newProduct;
    }
  }
  
  findProduct(title){
    return this.productList.find((product) => {
      return product.title === title;
    });
  }
}

const productFactory = new ProductFactory();

const chocolateCake = productFactory.createProduct('Chocolace Cake', 10);
const vanillaCake = productFactory.createProduct('Vanilla Cake', 8);

const chocolateCakeNew = productFactory.createProduct('Chocolace Cake', 15);

console.log(chocolateCake === vanillaCake);
console.log(chocolateCake === chocolateCakeNew);

console.log(productFactory.productList);