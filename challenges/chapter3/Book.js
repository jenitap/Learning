//**
/* Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class Book {
  constructor(
    // Defines parameters:
    bookTitle,
    bookAuthor,
    bookPubYear,
    bookISBN
  ) {
    // Define Properties:
    this.Title = bookTitle;
    this.Author = bookAuthor;
    this.PubYear = bookPubYear;
    this.ISBN = bookISBN;
  }
  findLargest(bookISBN) {
    const arrayOfDigits = Array.from(String(bookISBN), Number);
    let largestNumber = Math.max(arrayOfDigits);
    return largestNumber;
  }
}

export default Book;
