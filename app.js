const myLibrary = [];
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages}, ${
      this.read ? "finished reading" : "not read yet"
    }`;
  };
}
function addBookToLibrary() {}

let hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);

for (let i = 0; i < 4; i++) myLibrary.push(hobbit);

let booksShelf = document.getElementById("booksShelf");
let removeBook = (id, bookIndex) => {
  let deletedBook = booksShelf.querySelector(`div#${id}`);
  myLibrary.splice(bookIndex, 1);
  deletedBook.remove();
};
let toggleStatusBtnColor = function (btn, read) {
  btn.style.backgroundColor = read ? "red" : "green";
};
let toggleStatusBook = function (id, bookIndex) {
  let bookDiv = booksShelf.querySelector(`div#${id}`);
  let book = myLibrary[bookIndex];
  let status = bookDiv.querySelector("p.status");
  book.read = !book.read;
  status.innerText = book.read ? "finished reading" : "not read yet";
  toggleStatusBtnColor(this, book.read);
};
let createBookDiv = (book) => {
  let bookIndex = booksShelf.children.length;

  let id = "book" + bookIndex;
  let bookDiv = document.createElement("div");
  bookDiv.setAttribute("id", id);
  bookDiv.classList.add("book");
  let img = document.createElement("img");
  img.setAttribute(
    "src",
    "https://thumbs.dreamstime.com/b/old-book-flying-letters-magic-light-background-bookshelf-library-ancient-books-as-symbol-knowledge-history-218640948.jpg"
  );
  bookDiv.append(img);
  let title = document.createElement("h2");
  title.classList.add("title");
  title.innerText = book.title;
  bookDiv.append(title);

  let author = document.createElement("h4");
  author.classList.add("author");
  author.innerText = book.author;
  bookDiv.append(author);

  let pages = document.createElement("p");
  pages.classList.add("pages");
  pages.innerText = book.pages + " page";
  bookDiv.append(pages);

  let status = document.createElement("p");
  status.classList.add("status");
  status.innerText = book.read ? "finished reading" : "not read yet";
  bookDiv.append(status);

  let doneReadingBtn = document.createElement("button");
  doneReadingBtn.classList.add("toggle-status");
  doneReadingBtn.innerText = "toggle Status";
  toggleStatusBtnColor(doneReadingBtn, book.read);
  doneReadingBtn.addEventListener("click", function () {
    toggleStatusBook.call(doneReadingBtn, id, bookIndex);
  });
  bookDiv.append(doneReadingBtn);
  let removeBtn = document.createElement("button");
  removeBtn.classList.add("remove");
  removeBtn.innerText = "Remove";
  removeBtn.addEventListener("click", () => {
    removeBook(id, bookIndex);
  });
  bookDiv.append(removeBtn);

  booksShelf.append(bookDiv);
};

myLibrary.forEach((book) => {
  createBookDiv(book);
});

// form
let addBook = document.querySelector(".new-book");
let bookForm = document.querySelector("form#form");
let formDiv = document.querySelector(".book-form");

addBook.addEventListener("click", () => {
  formDiv.style.display =
    formDiv.style.display == "inline-block" ? "none" : "inline-block";
});
bookForm.addEventListener("click", (event) => {
  event.stopImmediatePropagation();
});
let hideForm = () => {
  formDiv.style.display = "none";
};
formDiv.addEventListener("click", hideForm);

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let title = bookForm.querySelector("#title").value;
  let author = bookForm.querySelector("#author").value;
  let pages = bookForm.querySelector("#pages").value;
  let doneReading = bookForm.querySelector("#done-reading").checked;
  let newBook = new Book(title, author, pages, doneReading);
  myLibrary.push(newBook);
  hideForm();
  createBookDiv(newBook);
});
