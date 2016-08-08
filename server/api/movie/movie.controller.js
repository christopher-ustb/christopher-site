'use strict';

import Movie from './movie.model.js';

import * as handler from '../base/responseHandler.js';

export function page(req, res){
  const page = req.params.page || 1;
  const count = req.params.count || 10;
  return Movie.find().limit(count).skip((page - 1) * count).sort('meta.modifyTime').exec()
    .then(handler.responseWithResult(res))
    .catch(handler.handleError(res));
}
