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
console.log(hobbit.info());
for (let i = 0; i < 40; i++) myLibrary.push(hobbit);

let booksShelf = document.getElementById("booksShelf");
let addBook = document.querySelector(".new-book");
let bookForm = document.querySelector(".book-form");

addBook.addEventListener("click", () => {
  bookForm.style.display =
    bookForm.style.display == "inline-block" ? "none" : "inline-block";
});

myLibrary.forEach((book) => {
  let bookDiv = document.createElement("div");
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
  booksShelf.append(bookDiv);
});
