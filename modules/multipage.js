// page switch 

export const multiPage = () => {
  const list = document.querySelector('.list');
  const addNew = document.querySelector('.add-new');
  const contact = document.querySelector('.contact');

  const allBooks = document.getElementById('all-books');
  const addBook = document.getElementById('add-book');
  const contactCont = document.getElementById('contact-cont');

  // Displaying and hidding sections
  list.addEventListener('click', () => {
    list.style.color = 'brown';
    addNew.style.color = 'black';
    contact.style.color = 'black';

    allBooks.style.display = 'flex';
    addBook.style.display = 'none';
    contactCont.style.display = 'none';
  });

  addNew.addEventListener('click', () => {
    list.style.color = 'black';
    addNew.style.color = 'brown';
    contact.style.color = 'black';

    allBooks.style.display = 'none';
    addBook.style.display = 'flex';
    contactCont.style.display = 'none';
  });

  contact.addEventListener('click', () => {
    list.style.color = 'black';
    addNew.style.color = 'black';
    contact.style.color = 'brown';

    allBooks.style.display = 'none';
    addBook.style.display = 'none';
    contactCont.style.display = 'flex';
  });
}