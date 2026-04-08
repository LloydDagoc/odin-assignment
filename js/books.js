function Book(title, author, pages, isRead) {
    this.title = title, 
    this.author = author, 
    this.pages = pages, 
    this.isRead = isRead,

    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead ? "done reading" : "not yet read"}`
    }
}

const sampleBook = new Book("ang hinikungkong kong parrot", "Arthur Nery", 69, true);
console.log(sampleBook.info());