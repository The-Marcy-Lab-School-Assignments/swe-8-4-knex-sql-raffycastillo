const {
  createTable,
  truncate,
  closeConnection,
  insertMultipleBooks,
} = require('./starter-queries');

const {
  selectAllBooks,
  selectAllTitlesAndGenres,
  selectAllBooksOver250Pages,
  insertDuneBook,
  updateShortBooksToMovies,
  deleteDuneBook,
} = require('./basic-queries');

const main = async () => {
  // ---- DO NOT DELETE ----
  // Setup the tables and insert the books
  await createTable().catch(() => 'Table created');
  await insertMultipleBooks();


  // ---- YOUR WORK ----
  // Core queries, get these first
  const allBooks = await selectAllBooks();
  const allTitlesAndGenres = await selectAllTitlesAndGenres();
  const allLongBooks = await selectAllBooksOver250Pages();
  const duneBook = await insertDuneBook();
  const updatedShortMovies = await updateShortBooksToMovies();
  const deleted = await deleteDuneBook();

  // Test your functions by console logging the returned value.
  console.log('All Books:', allBooks);
  console.log('All Titles and Genres:', allTitlesAndGenres);
  console.log('All Books Over 250 Pages:', allLongBooks);
  console.log('Insert Dune Book. Return value:', duneBook);
  console.log('Update Short Books to Movies. Return value:', updatedShortMovies);
  console.log('Deleted Dune Book. Return Value:', deleted);
  console.log('Final Check. All books to makes sure:', allBooks);


  // ---- DO NOT DELETE ----
  // We remove the table rows (not the table) so we can run the queries again
  // without the database getting too big
  await truncate();

  // We have to close the connection when we're done
  closeConnection();
};

main();
