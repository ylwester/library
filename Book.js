let myLibrary = [];

const form = document.getElementById('add-book-form');
const authorInput = document.getElementById('book-author');
const titleInput = document.getElementById('book-title');
const numberInput = document.getElementById('book-number');
const readInput = document.getElementById('book-read');
const errorMessage = document.getElementById('error');

myLibrary = [{author: "J.K.Rowling",
    title: "Harry Potter and the Philosopher's Stone",
    numberOfPages: 223,
    read: true
}];

function Book(author, title, numberOfPages, read) {
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.read = read;
}

Book.prototype.setRead = function () {
    return !this.read;

}

function clearForm() {
    authorInput.value = '';
    titleInput.value = '';
    numberInput.value = '';
    readInput.checked = false;
}

function addBookToLibrary() {
    if(!validateForm()) return false;
    let newBook = new Book(authorInput.value, titleInput.value, numberInput.value, readInput.checked);
    myLibrary.push(newBook);
    displayBooksTable();
    clearForm();
    console.table(myLibrary);
    return true;
}
displayBooksTable();

function displayBooksTable () {
    let table = document.getElementById("books-list");
    if(myLibrary.length === 0) {
        table.textContent = '';
        return;
    }
    table.textContent = '';
    myLibrary.forEach((book, index) => {
        let row = table.insertRow(-1);
        let title = row.insertCell(0);
        let author = row.insertCell(1);
        let pages = row.insertCell(2);
        let read = row.insertCell(3);
        let del = row.insertCell(4);
        title.innerHTML = book.title;
        author.innerHTML = book.author;
        pages.innerHTML = book.numberOfPages;

        if(book.read){
            read.innerHTML = '<button>read</button>';
            read.children[0].addEventListener('click', () => {
                updateReadButton(book);
                displayBooksTable();
            });
        } else {
            read.innerHTML = '<button>Not read</button>';
            read.children[0].addEventListener('click', () => {
                updateReadButton(book);
                displayBooksTable();
            });
        }

        del.innerHTML = '<button>Delete</button>';
        del.children[0].addEventListener('click', () => deleteButton(index));


    })
    console.table(myLibrary);
}


function validateForm() {
    let messages = [];
    if(authorInput.value === '' || authorInput.value == null){
        messages.push("Author cannot be empty");
    }
    if(titleInput.value === '' || titleInput.value == null) {
        messages.push("Title cannot be empty");
    }
    if(numberInput.value === '' || numberInput.value == null){
        messages.push("Number of pages cannot be empty");
    }
    if(messages.length > 0){
        errorMessage.innerText = messages.join(', ');
        return false;
    }
    return true;

}


const deleteButton = (index) => {
    myLibrary.splice(index, 1);
    displayBooksTable();
}

function updateReadButton(book) {
    book.read = !book.read;
    console.log(book);
}