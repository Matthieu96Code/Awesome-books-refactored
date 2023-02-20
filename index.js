import Book from './modules/book.js'
import Store from './modules/store.js'
import pages from './modules/multipage.js'
import UI from './modules/uiClass.js'
import { DateTime } from './node_modules/luxon/src/luxon.js'

document.addEventListener('DOMContentLoaded', UI.displayBooks)

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
  //   console.log(e.target)
})

pages()

console.log(DateTime.now())

// function delBook () {
//   let books = []
//   books = JSON.parse(window.localStorage.getItem('books'))

//   const pushedBtn = document.querySelectorAll('div')
//   console.log(pushedBtn)
//   window.localStorage.setItem('books', JSON.stringify(books))
// }

// delBook ()
