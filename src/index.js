const bookUrl = "http://localhost:3000/api/v1/books";

document.addEventListener("DOMContentLoaded", () => {
  // console.log('Dom is loaded')
    getBooks();
    
    const newBookForm = document.querySelector("#book-form")

  newBookForm.addEventListener("submit", (e) => createFormHandler(e))
  
  // getting buttons to work

  const deleteBookFromCard = document.querySelector('#books-list')
  
  deleteBookFromCard.addEventListener('click', (e) => {
    console.log(e.target)
  });

});

function getBooks() {
  fetch(bookUrl)
    .then((response) => response.json())
    .then((books) => {
      books.data.forEach((book) => {
          render(book)
      });
    });
}

function render(book) {
          const bookMarkup = `
            <div class="card" data-id=${book.id}>
                    <h3>${book.attributes.title}</h3>
                    <p>${book.attributes.author}</p>
                    <p class="p-desc">${book.attributes.description}</p>                      
                    <p><img src=${book.attributes.image_url}></p>
                    <p>${book.attributes.genre.name}</p>
            
            <div class="btns" id="2-buttons">
            <button id ="edit-btn" data-id=${book.id}>edit</button> <button id="delete-btn" data-id=${book.id}>delete</button></div>
            </div><br><br>`;
          document.querySelector("#books-list").innerHTML += bookMarkup;
}

function createFormHandler(e) {
    e.preventDefault()
    
    const titleInput = document.querySelector('#input-title').value 
    const authorInput = document.querySelector('#input-author').value
    const urlInput = document.querySelector('#input-url').value 
    const descriptionInput = document.querySelector('#input-description').value
    const genreId = parseInt(document.querySelector('#genres').value)
    postFetch(titleInput, authorInput, urlInput, descriptionInput, genreId)
}

function postFetch(title, author, image_url, description, genre_id) {

     let bodyData = {title, author, image_url, description, genre_id}

     fetch(bookUrl, {
       // POST request
       method: "POST",
       headers: {"Content-Type": "application/json"},
       body: JSON.stringify(bodyData)
     })
       .then(response => response.json())
       .then(book => {
           console.log(book);
         const bookData = book.data
         
         render(bookData)

       })
}
