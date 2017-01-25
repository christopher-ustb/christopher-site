'use strict';

import Celebrity from './celebrity.model';

import * as handler from '../base/responseHandler.js';

export function page(req, res){
  const page = req.query.page || 1;
  const count = req.query.count || 10;
  console.log('page:', page, ',count:', count);
  return Celebrity.find().limit(count).skip((page - 1) * count).sort('meta.modifyTime').exec()
    .then(handler.responseWithResult(res))
    .catch(handler.handleError(res));
}

export function get(req, res) {
  const id = req.params.id;
  console.log('Celebrity id:', id);
  Celebrity.findById(id).exec().then(handler.responseWithResult(res)).catch(handler.handleError(res, 404));
}

export function create(req, res) {
  console.log('receive new Celebrity:', req.body);
  // the unknown filed(not defined in the schema) will be ignored here
  let new_celebrity = new Celebrity(req.body);
  Celebrity.create(new_celebrity).then(handler.responseWithResult(res, 201)).catch(handler.handleError(res));
}
