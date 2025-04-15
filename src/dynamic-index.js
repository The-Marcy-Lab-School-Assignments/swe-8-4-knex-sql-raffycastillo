const {
  createTable,
  truncate,
  closeConnection,
  insertMultipleBooks,
} = require('./starter-queries');

const {
  dangerousDynamicQuery,
  safeDynamicQuery,
  multipleDynamicParamsQuery,
  betweenSpecifiedPagesQuery,
} = require('./dynamic-queries');

const main = async () => {
  await createTable().catch(() => 'Table created');
  await insertMultipleBooks();

  // These are already filled out, but we encourage you
  // to play around with them!

  /* This is why we don't use straight string interpolation! */
  await dangerousDynamicQuery();

  /* These are safe because we use parameterized queries
  which are sanitized by knex */
  await safeDynamicQuery(2);
  await multipleDynamicParamsQuery(100, true);

  /* Extra entry added */
  // randomized start and end
  const start = Math.ceil(Math.random() * 100);
  const end = 100 + Math.ceil(Math.random() * 200);
  await betweenSpecifiedPagesQuery(start, end);

  // We remove the table rows (not the table) so we can run the queries again
  // without the database getting too big
  await truncate();

  // We have to close the connection when we're done
  closeConnection();
};

main();
