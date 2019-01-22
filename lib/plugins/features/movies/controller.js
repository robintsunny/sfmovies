'use strict';

const Movie = require('../../../models/movie');

exports.create = async (payload) => {
  const movie = await new Movie().save(payload)
  return new Movie({ id: movie.id }).fetch();
};

exports.retrieve = async (params) => {
  const movies = await Movie.where(params).fetchAll();
  return movies;
};
