import { Book } from './modules/book.js'
import { Store } from './modules/store.js'
import { UI } from './modules/uiClass.js'
import { multiPage } from './modules/multipage.js'


document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a Book
document.getElementById('book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const id = Date.now();

  // Instatiate book
  const book = new Book(title, author, id);

  // Add Book to UI
  UI.addBookToList(book);

  // Add book to store
  Store.addBook(book);

  // Clear fields
  UI.clearFields();
});

// Event: Remove a Book from UI
document.querySelector('#book-list').addEventListener('click', (e) => {
  UI.deleteBook(e.target);
});

multiPage()