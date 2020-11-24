let myLibrary = [];

function Book(author, title, numberOfPages, read) {
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.read = read;
}

function addBookToLibrary() {
    let form = document.getElementById('add-book-form');
    let authorInput = document.getElementById('book-author').value;
    let titleInput = document.getElementById('book-title').value;
    let numberInput = document.getElementById('book-number').value;
    let readInput = document.getElementById('book-read').value;

    let newBook = {
        author: authorInput,
        title: titleInput,
        numberOfPages: numberInput,
        read: readInput
    }
    myLibrary.push(newBook);
    form.reset();

    console.table(myLibrary);
}