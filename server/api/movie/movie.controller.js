'use strict';

import Movie from './movie.model.js';

import * as handler from '../base/responseHandler.js';

export function page(req, res){
  const page = req.params.page || 1;
  const count = req.params.count || 10;
  console.log('page:', page, ',count:', count);
  return Movie.find().limit(count).skip((page - 1) * count).sort('meta.modifyTime').exec()
    .then(handler.responseWithResult(res))
    .catch(handler.handleError(res));
}

export function get(req, res) {
  const id = req.params.id;
  console.log('movie id:', id);
  const movie = {
    id: id,
    name: 'batman dark knight',
    star: 8.5
  };
  Movie.findById(id).exec().then(handler.responseWithResult(res)).catch(handler.handleError(res, 404));
}

export function create(req, res) {
  console.log('receive new movie:', req.body);
  // the unknown filed(not defined in the schema) will be ignored here
  let new_movie = new Movie(req.body);
  Movie.create(new_movie).then(handler.responseWithResult(res, 201)).catch(handler.handleError(res));
}

export function update(req, res) {
  const id = req.params.id;
  const movie = req.body;
  console.log('id:', id, ',movie:', movie);
  Movie.findByIdAndUpdate(id, movie, {
    new: false
  }).exec().then(handler.responseWithResult(res, 201)).catch(handler.handleError(res));
}

export function remove(req, res) {
  const id = req.params.id;
  console.log('id:', req.params.id);
  Movie.findByIdAndRemove(id).exec().then(handler.responseWithResult(res, 204)).catch(handler.handleError(res));
}
