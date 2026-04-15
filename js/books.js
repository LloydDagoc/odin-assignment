const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.id = crypto.randomUUID(),
    this.title = title, 
    this.author = author, 
    this.pages = pages, 
    this.isRead = isRead,

    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead ? "done reading" : "not yet read"}`
    }
}
Book.prototype.toggleRead = function(){
    this.isRead = !this.isRead;
}
 
function addBooks(title, author, pages, isRead) {
   const addBooksToMyLibrary = new Book(title, author, pages, isRead);
   myLibrary.push(addBooksToMyLibrary);
   return addBooksToMyLibrary;
}

function printLibrary() {
    myLibrary.forEach(book =>{
        console.log(book.info());
    })
}

function displayBooks(){
    const tbody = document.querySelector(".body");
    tbody.innerHTML = "";

    myLibrary.forEach(book => {
        const row = document.createElement("tr");

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td>${book.isRead ? "done reading" : "not yet"}</td>
        <td class="action">
        <button data-id="${book.id}" class="toggle-btn">${book.isRead ? "Mark Unread" : "Mark Read"}
        </button>
        <button data-id="${book.id}" class="remove-btn">delete</button>
        </td>
        `;

            tbody.appendChild(row);
    });

}
document.addEventListener("click", function(a){
    if(a.target.classList.contains("toggle-btn")){
        const id = a.target.dataset.id;

        const find = myLibrary.find(book => book.id == id);
        if (find) find.toggleRead();

        displayBooks();
    }
});
document.addEventListener("click", function(e){
    if(e.target.classList.contains("remove-btn")){
        const id = e.target.dataset.id;

        const index = myLibrary.findIndex(book => book.id == id);
        
        if(index !== -1){
            myLibrary.splice(index, 1);
        }else{
            console.log("Book not found");
        }
        displayBooks();
    }
});

document.getElementById("bookForm").addEventListener("submit", function(e){
    e.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const isRead = document.getElementById("isRead").checked;

    addBooks(title, author, pages, isRead);
    displayBooks();

    this.reset();

});

const popUpForm = document.getElementById("popUpForm");
var button = document.getElementById("addBookBtn");

button.addEventListener("click", function(){
   if(popUpForm.style.display === "none"){
    popUpForm.style.display = "block";
   }else{
    popUpForm.style.display="none";
   }
});

window.addEventListener("click", function(e){
    if(e.target === popUpForm){
        popUpForm.style.display = "none";
    }   
}); 

addBooks("Atomic Habits", "James Clear", 320, true);
addBooks("Deep Work", "Cal Newport", 280, false);

displayBooks();
