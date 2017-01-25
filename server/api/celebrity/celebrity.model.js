'use strict';

import mongoose from 'mongoose';

var Schema = mongoose.Schema;
var CelebritySchema = new Schema({
  name: String,
  portrait: String,
  meta: {
    deleted: Boolean,
    createTime: Date,
    modifyTime: Date
  }
});

export default mongoose.model('Celebrity', CelebritySchema);
