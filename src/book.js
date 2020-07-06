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
    
    renderBookCard() {
        return `
            <div class="card" data-id=${this.id}>
                    <h3>${this.title}</h3>
                    <p>${this.author}</p>
                    <p class="p-desc">${this.description}</p>                      
                    <p><img src=${this.image_url}></p>
                    <p>${this.genre.name}</p>
            
            <div class="btns" id="2-buttons">
            <button id ="edit-btn" data-id=${this.id}>edit</button> <button id="delete-btn" data-id=${this.id}>delete</button></div>
            </div><br><br>`;
        
}

}

Book.all = [];
