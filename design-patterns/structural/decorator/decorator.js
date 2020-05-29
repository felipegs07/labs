class Book {
  constructor(title, author, price){
    this._title = title;
    this._author = author;
    this._price = price;
  }

  getInfo(){
    return `
      Name: ${this._title}
      Author: ${this._author}
      Price: R$${this._price}
    `;
  }
};

const checkoutBook = (book) => {
  book.buyBook = function(){
    console.log(`Buy the book ${this._title}`);
  }

  return book;
};

const gameOfThrones = new Book('The Game of Thrones', 'George R.R. Martin', 50);
console.log(gameOfThrones.getInfo());

const newCheckoutBook = checkoutBook(gameOfThrones);
newCheckoutBook.buyBook();