const addBtn = document.querySelector('.new-book');
const newBookForm = document.querySelector('.popup');
const greyout = document.querySelector('.greyout');
const submitBtn = document.querySelector('.submit');
const titleInput = document.querySelector('input[name="title"]');
const authorInput = document.querySelector('input[name="author"]');
const pagesInput = document.querySelector('input[name="pages"]');
const readCheck = document.querySelector('input[name="read"]');
const bookShelf = document.querySelector('.book-shelf');

let myLibrary = [];

// Book object constructor
function Book(title, author, pages, read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Function to add a new book to the library
function addBookToLibrary() {
  // Empty title input
  if (!titleInput.value) return
  // Library already has a book with the same title
  if (myLibrary.some(e => e.title === titleInput.value)) return
  // Create a new book object and add it to the library
  const newBook = new Book(
    title = titleInput.value,
    author = authorInput.value,
    pages = pagesInput.value,
    read = readCheck.checked
  )
  myLibrary.push(newBook); // add new book to library
  addBookCard(newBook); // display new book on book shelf
}

// + New Book button action
addBtn.addEventListener('click', () => {
  newBookForm.style.display = 'flex';
  greyout.style.display = 'block';
});

// Submit button action
submitBtn.addEventListener('click', () => {
  addBookToLibrary();
  newBookForm.style.display = 'none';
  greyout.style.display = 'none';
  clearForm();
  //updateShelf();
});

function clearForm() {
  titleInput.value = '';
  authorInput.value = '';
  pagesInput.value = '';
  readCheck.checked = false;
}

// Function to create a book card and display it on the book book shelf
function addBookCard(book) {
  // Create a new book card and append it to book shelf
  const bookCard = document.createElement('div');
  bookCard.classList.add('book-card');
  bookShelf.appendChild(bookCard);
  // Add title, author and pages display
  const paraList = ['Title: ', book.title, 'Author: ', book.author, 'Pages: ', book.pages];
  for (i = 0; i < paraList.length; i++) {
    const paraNode = document.createElement('p');
    paraNode.textContent = paraList[i];
    bookCard.appendChild(paraNode);
  }
  // Add read/not read button
  const readBtn = document.createElement('button');
  readBtn.classList.add('progress');
  if (book.read) {
    console.log(`Read, book.read = ${book.read}`);
    readBtn.textContent = 'Read';
    readBtn.classList.add('read');
  } else {
    console.log(`Not read, book.read = ${book.read}`);
    readBtn.textContent = 'Not Read';
    readBtn.classList.add('not-read');
  }
  bookCard.appendChild(readBtn);
  // Add Remove button
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.classList.add('remove');
  bookCard.appendChild(removeBtn);
}



// Function to update book shelf
function updateShelf() {
  for (i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary.length);
    console.log(`current book: ${myLibrary[i].title}`);
    addBookCard(myLibrary[i]);
  }
}
