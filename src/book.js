class Book {
  constructor(book, bookAttributes) {
    this.id = book.id;
    this.title = bookAttributes.title;
    this.author = bookAttributes.author;
    this.description = bookAttributes.description;
    this.image_url = bookAttributes.image_url;
    this.genre = bookAttributes.genre;
    Book.all.push(this);
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
            <button class="edit-b btn btn-primary" id ="edit-btn" data-id=${this.id}>edit</button> <button class="delete-b btn btn-danger" id="delete-btn" data-id=${this.id}>delete</button></div>
            </div><br><br>`;
  }

  renderUpdateForm() {
    return `
    <form data-id=${this.id}>
      <label>Title</label>
      <p>
        <input type="text" value="${this.title}" />
      </p>
      <label>author</label>
      <p>
        <textarea>${this.author}</textarea>
      </p>
      <button type='submit'>Save Book</button>
    </form>
  `;
  }

  static findById(id) {
    return this.all.find((book) => book.id === id);
  }
}

Book.all = [];
