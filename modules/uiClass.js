import Store from './store.js'

// UI class
export default class UI {
  static displayBooks = () => {
    const books = Store.getBooks()
    books.forEach((book) => UI.addBookToList(book))
  }

  static addBookToList = (book) => {
    const list = document.getElementById('book-list')
    const div = document.createElement('div')

    div.innerHTML = `
               <div class="book">
                 <p>"${book.title}" by ${book.author}</p>
                 <button id="${book.id}" class="btn delete">Remove</button>
                </div>
              `

    list.appendChild(div)
  }

  static deleteBook = (elem) => {
    if (elem.classList.contains('delete')) {
      elem.parentElement.remove()
      const books = Store.getBooks()
      books.forEach((book, index) => {
        if (book.id === parseInt(elem.id)) {
          books.splice(index, 1)
        }
      })
      window.localStorage.setItem('books', JSON.stringify(books))
    }
  }

  static clearFields = () => {
    document.querySelector('#title').value = ''
    document.querySelector('#author').value = ''
  }
}
