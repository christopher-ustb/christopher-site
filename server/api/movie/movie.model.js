'use strict';

import mongoose from 'mongoose';

var Schema = mongoose.Schema;
var MovieSchema = new Schema({
  name: String,
  tags: [Schema.Types.ObjectId],
  actors: [Schema.Types.ObjectId],
  cover: String,
  snapshots: [String],
  code: String,
  file: String,
  meta: {
    deleted: Boolean,
    createTime: Date,
    modifyTime: Date
  }
});

/**
 * entity in hibernate
 *
 * Models are fancy constructors compiled from our Schema definitions.
 * Instances of these models represent documents which can be saved and retrieved from our database.
 * All document creation and retrieval from the database is handled by these models.
 *
 * The first argument[Movie] is the singular name of the collection your model is for.
 *  Mongoose automatically looks for the plural version of your model name. Thus, for the example above, the model Movie is for the movies collection in the database.
 */
export default mongoose.model('Movie', MovieSchema);
