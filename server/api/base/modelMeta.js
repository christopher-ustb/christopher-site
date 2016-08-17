'use strict';

export let metaSchema = {
  deleted: Boolean,
  createTime: Date,
  modifyTime: Date
};

export function onCreate(meta) {
  meta.deleted = false;
  meta.createTime = new Date();
  meta.modifyTime = new Date();
}
