'use strict';

import mongoose from 'mongoose';
import * as meta from './../base/modelMeta.js';

let Schema = mongoose.Schema;
let UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  nickname: {
    type: String,
    required: true
  },
  avatar: String,
  meta: meta.metaSchema
});
UserSchema.pre('save', function(next){
  meta.onCreate(this.meta);
  next();
});

export default mongoose.model('User', UserSchema);
