# My Books Library

My Books Library is an app for people who have a lot of books and don't know how to keep track of them. The app allows you to add books that you have or purchase and keeps a card with that information. You will know title, author, genre, have a picture of the cover and a description. My future goals (stretch goals) includestart with being able to search by title, author and genre. Then enabling edit and delete books from the javascript frontend. After this, I will add functional to show books by genre only. Finally, the last edition will be to add comments to books.

This app utilizes a Rails API back-end with a PostgreSQL database, as well as a Javascript front-end.

### The Back-End:

The current APP has two classes that are being used, books and genres. It is set up as books belongs_to: genres and genres : have_many books

- 'http://localhost:3000/api/v1/books' - this endpoint is the main one used in the app. We use both GET and POST to this endpoint. We can create a book to display

- 'http://localhost:3000/api/v1/comments' - This route is currently not being used and is scoped out for a future stretch goal.

- 'http://localhost:3000/api/v1/genres' - This end-point lists all the genres.

### The Front-End:

The front-end uses Javascript to asynchronously make get and post requests to the API. There is a very small index html page that is used to post new books and display our book collection. I have used bootstrap to help style along with my own cutom css. This is set up as a single page application.

### how to Work on the Project

To get started using this app do the following:

- Clone the repository ->
  - ```git clone git@github.com:david-forer/mybooks-front.git``` in your terminal for frontend
   - ```git clone git@github.com:david-forer/mybooks-back.git``` in your terminal for rails api backend

- Navigate to the top of the 'mybooks-front' directory ->
  - ```cd mybooks-front```
- Install required gem dependencies ->
  - ```bundle install```
- Start a PostgreSQL server in the PostgreSQL app ->
  - Download the app at 'https://www.postgresql.org/download/' if you don't have it
- Create the database ->
  - ```rake db:create```
- Migrate the tables ->
  - ```rake db:migrate```
- Seed the database with a few books and genres ->
  - ```rake db:seed```
- Start your rails server ->
  - ```rails s```
  
- Open index.html in your favorite editor and use a live server to view the page.

- Use your favorite code editor to make this app your own

### LICENSE
-MIT License

[Video Demo]()

[Blog Post](https://david-forer.github.io/project_4_the_rails_api_with_javascript)


