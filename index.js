import Book from './modules/book.js'
import Store from './modules/store.js'
import pages from './modules/multipage.js'
import UI from './modules/uiClass.js'
import { DateTime } from './modules/luxon.js'

if (window.localStorage.getItem('books')) {
  document.addEventListener('DOMContentLoaded', UI.displayBooks)
}

// Event: Add a Book
document.getElementById('book-form').addEventListener('submit', (e) => {
  e.preventDefault()
  const title = document.getElementById('title').value
  const author = document.getElementById('author').value
  const id = Date.now()

  // Instatiate book
  const book = new Book(title, author, id)

  // Add Book to UI
  UI.addBookToList(book)

  // Add book to store
  Store.addBook(book)

  // Clear fields
  UI.clearFields()
})

// Event: Remove a Book from UI
document.querySelector('#book-list').addEventListener('click', (e) => {
  UI.deleteBook(e.target)
})

pages()

setInterval(() => {
  const date = DateTime.local().toFormat('FF')
  const time = document.querySelector('.clock-section')
  time.innerHTML = `${date}`
}, 1000)
