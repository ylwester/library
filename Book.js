let myLibrary = [];

myLibrary = [{author: "J.K.Rowling",
    title: "Harry Potter and the Philosopher's Stone",
    numberOfPages: 223,
    read: "on"
}];

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
    
    let newBook = new Book(authorInput, titleInput, numberInput, readInput);

    appendNewBook(titleInput, authorInput, numberInput, readInput);
    myLibrary.push(newBook);
    form.reset();
    console.table(myLibrary);
}

displayBooksTable();

function appendNewBook(title, author, pages, read){
    let table = document.getElementById("books-list");

    let row = table.insertRow(-1);
    let titleRow = row.insertCell(0);
    let authorRow = row.insertCell(1);
    let pagesRow = row.insertCell(2);
    let readRow = row.insertCell(3);
    titleRow.innerHTML = title;
    authorRow.innerHTML = author;
    pagesRow.innerHTML = pages;
    readRow.innerHTML = read;

}

function displayBooksTable () {
    if(myLibrary.length === 0) return;

    let table = document.getElementById("books-list");

    myLibrary.forEach(book => {
        let row = table.insertRow(-1);
        let title = row.insertCell(0);
        let author = row.insertCell(1);
        let pages = row.insertCell(2);
        let read = row.insertCell(3);
        title.innerHTML = book.title;
        author.innerHTML = book.author;
        pages.innerHTML = book.numberOfPages;
        read.innerHTML = book.read;
    })

}