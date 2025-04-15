const {
  createTable,
  truncate,
  closeConnection,
  insertMultipleBooks,
} = require('./starter-queries');

const {
  countNumberOfBooks,
  selectAllLongOrMovieBooks,
  selectBooksBetween150And300Pages,
  orderBooksByPages,
  selectLongestBook,
  aliasIsMovie,
  countBooksInGenres,
} = require('./advanced-queries');

const main = async () => {
  // ---- DO NOT DELETE ----
  // Setup the tables and insert the books
  await createTable().catch(() => 'Table created');
  await insertMultipleBooks();



  // ---- YOUR WORK ----
  // Advanced queries
  const numberOfBooks = await countNumberOfBooks();
  const longOrMovieBooks = await selectAllLongOrMovieBooks();
  const mediumBooks = await selectBooksBetween150And300Pages();
  const orderedBooks = await orderBooksByPages();
  const longestBook = await selectLongestBook();
  const aliasedTitleAndIsMovie = await aliasIsMovie();
  const genreCounts = await countBooksInGenres();
  // Test your functions by console logging the returned value.

  // The query file already has the relevant logs so... RIP
  // console.log('Current number of books in the table:', numberOfBooks);
  // console.log('Returns all columns of books with either pages > 250 or is_movie = true:', longOrMovieBooks);
  // console.log('Returns all columns of books with 150 < pages < 300:', mediumBooks);
  // console.log('Returns all columns of books ordered from shortest to longest:', orderedBooks);
  // console.log('Returns all columns of the book with the most amount of pages:', longestBook);
  // console.log('Returns columns (title, is_movie as Already Filmed):', aliasedTitleAndIsMovie);
  // console.log('Returns the count of each book grouped by genre:', genreCounts);

  // ---- DO NOT DELETE ----
  // We remove the table rows (not the table) so we can run the queries again
  // without the database getting too big
  await truncate();

  // We have to close the connection when we're done
  closeConnection();
};

main();
