const bookUrl = "http://localhost:3000/api/v1/books";

document.addEventListener("DOMContentLoaded", () => {
  // console.log('Dom is loaded')
    getBooks();
    
    const newBookForm = document.querySelector("#book-form")

  newBookForm.addEventListener("submit", (e) => createFormHandler(e))
  
  // getting delete button to work

  // const deleteBookFromCard = document.querySelector('#books-list')
  
  // deleteBookFromCard.addEventListener('click', (e) => {
  //   console.log(e.target)

  //getting the edit button to work
  const app = new App();
  app.attachEventListeners();

  
});

function getBooks() {
  fetch(bookUrl)
    .then((response) => response.json())
    .then((books) => {
      books.data.sort(function (a, b) {

        if (a.attributes.title > b.attributes.title) return 1;
        if (a.attributes.title < b.attributes.title) return -1;
      }).forEach(book => {
      let newBook = new Book(book, book.attributes)

        document.querySelector("#books-list").innerHTML += newBook.renderBookCard();
        
      });
      });
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

         let newBook = new Book(bookData, bookData.attributes)

         document.querySelector('#books-list').innerHTML += newBook.renderBookCard();
       
       })
}
