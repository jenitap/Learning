/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Book from "./Book.js";

// Change these boolean values to control whether you see
// the expected answer and/or hints.
// const showExpectedResult = true;
// const showHints = true;

const bookTitle = "Alice's Adventures in Wonderland";
const bookAuthor = "Lewis Carroll";
const bookPubYear = 1865;
const bookISBN = 9798369203415;

// Your code goes here
const book = new Book(bookTitle, bookAuthor, bookISBN, bookPubYear);
book.findLargest();

console.log("The book object: ", book);
