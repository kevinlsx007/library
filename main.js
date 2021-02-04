const addBtn = document.querySelector('.new-book');
const newBookForm = document.querySelector('.popup');
const greyout = document.querySelector('.greyout');
const submitBtn = document.querySelector('.submit');
const titleInput = document.querySelector('input[name="title"]');
const authorInput = document.querySelector('input[name="author"]');
const pagesInput = document.querySelector('input[name="pages"]');
const readCheck = document.querySelector('input[name="read"]');

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
  myLibrary.push(newBook);
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
});

function clearForm() {
  titleInput.value = '';
  authorInput.value = '';
  pagesInput.value = '';
  readCheck.checked = false;
}
