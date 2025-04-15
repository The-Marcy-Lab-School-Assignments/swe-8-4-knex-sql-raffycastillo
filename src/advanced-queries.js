const knex = require('./knex');

const countNumberOfBooks = async () => {
  const query = `
    SELECT COUNT(*)
    FROM books;
  `;

  const { rows } = await knex.raw(query);
  console.log('Number of books:', rows);
  return rows;
};

const selectAllLongOrMovieBooks = async () => {
  const query = `
    SELECT *
    FROM books
    WHERE pages > 250 OR is_movie = true;
  `;


  const { rows } = await knex.raw(query);
  console.log('Long or movie books:', rows);
  return rows;
};

const selectBooksBetween150And300Pages = async () => {
  const query = `
    SELECT *
    FROM books
    WHERE pages > 150 AND pages < 300;
  `;

  const { rows } = await knex.raw(query);
  console.log('150-300:', rows);
  return rows;
};

const orderBooksByPages = async () => {
  const query = `
    SELECT *
    FROM books
    ORDER BY pages ASC;
  `;

  const { rows } = await knex.raw(query);
  console.log('Short to long:', rows);
  return rows;
};

const selectLongestBook = async () => {
  const query = `
    SELECT *
    FROM books
    ORDER BY pages DESC
    LIMIT 1;
  `;

  const { rows } = await knex.raw(query);
  console.log('Longest Book:', rows);
  return rows;
};

const aliasIsMovie = async () => {
  const query = `
    SELECT title, is_movie as "Already Filmed"
    FROM books;
  `;

  const { rows } = await knex.raw(query);
  console.log('Fancy output', rows);
  return rows;
};

const countBooksInGenres = async () => {
  const query = `
    SELECT genre, COUNT(*)
    FROM books
    GROUP BY genre;
  `;

  const { rows } = await knex.raw(query);
  console.log('Genre count', rows);
  return rows;
};

module.exports = {
  countNumberOfBooks,
  selectAllLongOrMovieBooks,
  selectBooksBetween150And300Pages,
  orderBooksByPages,
  selectLongestBook,
  aliasIsMovie,
  countBooksInGenres,
};
