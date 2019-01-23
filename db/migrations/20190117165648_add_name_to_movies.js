'use strict';

const TABLE = 'movies';
const CONSTRAINT_NAME = 'title_not_null';

exports.up = async (Knex) => {
  await Knex.schema.table('movies', (table) => {
    table.text('name')
  });

  return Knex.raw('ALTER TABLE movies ALTER COLUMN title DROP NOT NULL');
};


exports.down = async (Knex) => {
  await Knex.schema.table('movies', (table) => {
    table.dropColumn('name')
  });

  await Knex.raw(`ALTER TABLE ${TABLE} ADD CONSTRAINT ${CONSTRAINT_NAME} CHECK(title IS NOT NULL) NOT VALID`);
  return Knex.raw(`ALTER TABLE ${TABLE} VALIDATE CONSTRAINT ${CONSTRAINT_NAME}`);
}
