// Store Class

export default class Store {
  static getBooks () {
    let books
    if (window.localStorage.getItem('books') === null) {
      books = []
    } else {
      books = JSON.parse(window.localStorage.getItem('books'))
    }
    return books
  }

  static addBook (book) {
    const books = Store.getBooks()
    books.push(book)
    window.localStorage.setItem('books', JSON.stringify(books))
  }

  static removeBook (id) {
    const books = Store.getBooks()
    books.forEach((book, index) => {
      if (book.id === id) {
        books.splice(index, 1)
      }
    })
    window.localStorage.setItem('books', JSON.stringify(books))
  }
}
