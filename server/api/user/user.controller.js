'use strict';

import * as handler from './../base/responseHandler.js';
import User from './user.model.js';

export function create(req, res) {
  let new_user_cmd = req.body;
  // TODO password hash
  User.find({username: new_user_cmd.username}).exec().then(function(users){
    console.log(users);
    if (users && users.length > 0){
      console.log('username duplicated');
      // use promise.reject instead of throw, I just want to pass the error info not throw to container or vm.
      return Promise.reject(new Error('username duplicated')) ;
    }else {
      return users;
    }
  }).then(function(){
    return User.create(new User(new_user_cmd));
  }).then(
    handler.responseWithResult(res, 201)
  ).catch(
    handler.handleError(res)
  );
}
export function get(req, res) {
  const user_id = req.params.id;
  User.findById(user_id).exec().then(handler.entityNotFound(res)).then(handler.responseWithResult(res)).catch(handler.handleError(res));
}
