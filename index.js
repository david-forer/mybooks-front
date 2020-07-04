const bookUrl = "http://localhost:3000/api/v1/books";

document.addEventListener("DOMContentLoaded", () => {
  // console.log('Dom is loaded')
    getBooks();
    
    const newBookForm = document.querySelector("#book-form")

    newBookForm.addEventListener("submit", (e) => createFormHandler(e))
});

function getBooks() {
  fetch(bookUrl)
    .then((response) => response.json())
    .then((books) => {
      books.data.forEach((book) => {
        const bookMarkup = `
            <div data-id=${book.id}>
            <li>
                <h3>${book.attributes.title}</h3>
                    <p>${book.attributes.author}</p>
                    <p>${book.attributes.description}</p>                      
                    <p>${book.attributes.image_url}</p>
                    <p>${book.attributes.genre.name}</p>
            </li>
            <button data-id=${book.id}>edit</button> <button data-id=${book.id}>delete</button>
            </div><br><br>`;
        document.querySelector("#notes-list").innerHTML += bookMarkup;
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
    console.log(title, author, image_url, description, genre_id);
}
