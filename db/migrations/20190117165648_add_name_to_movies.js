'use strict';

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

  return Knex.raw('ALTER TABLE movies ALTER COLUMN title SET NOT NULL');
};
