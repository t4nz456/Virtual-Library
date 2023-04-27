// import the Media class:
const Media = require('./Media.js');

// create your Book class:
class Book extends Media {
    constructor(title, year, genre, author, numPages, rating) {
        super(title, year, genre);
        this.author = author;
        this.numPages = numPages;
        this.rating = rating;
    }

    summary() {
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`
    }

    static highestRating(books) {
        let highestRatedBook = null;
        let highestRating = 0;
        for (let book of books) {
          if (book.rating > highestRating) {
            highestRatedBook = book;
            highestRating = book.rating;
          }
        }
        return highestRatedBook;
      }


}

// don't change below
module.exports = Book;
