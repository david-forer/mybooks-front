class Book {

    constructor(book, bookAttributes) {
        
        this.id = book.id
        
        this.title = bookAttributes.title
        this.author = bookAttributes.author
        this.description = bookAttributes.description
        this.image_url = bookAttributes.image_url
        this.genre = bookAttributes.genre
        Book.all.push(this)
       
    }
    

}

Book.all = [];
