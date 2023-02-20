import Book from './modules/book.js'
import Store from './modules/store.js'
import pages from './modules/multipage.js'
import { DateTime } from 'luxon'

// UI class
class UI {
  static displayBooks () {
    const books = Store.getBooks()
    books.forEach((book) => UI.addBookToList(book))
  }

  static addBookToList (book) {
    const list = document.getElementById('book-list')
    const div = document.createElement('div')

    div.innerHTML = `
             <div class="book">
               <p>"${book.title}" by ${book.author}</p>
               <button onclick="Store.removeBook(${book.id})" class="btn delete">Remove</button>
              </div>
            `

    list.appendChild(div)
  }

  static deleteBook (elem) {
    if (elem.classList.contains('delete')) {
      elem.parentElement.remove()
    }
  }

  static clearFields () {
    document.querySelector('#title').value = ''
    document.querySelector('#author').value = ''
  }
}

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
})

pages()

console.log(DateTime.now())