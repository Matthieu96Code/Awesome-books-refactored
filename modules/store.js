// Store Class

export default class Store {
  static getBooks = () => {
    let books
    if (window.localStorage.getItem('books')) {
      books = JSON.parse(window.localStorage.getItem('books'))
    } else {
      books = []
    }
    return books
  }

  static addBook = (book) => {
    const books = Store.getBooks()
    books.push(book)
    window.localStorage.setItem('books', JSON.stringify(books))
  }
}
