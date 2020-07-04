const bookUrl = "http://localhost:3000/api/v1/books";

document.addEventListener("DOMContentLoaded", () => {
  // console.log('Dom is loaded')
  getBooks();
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
