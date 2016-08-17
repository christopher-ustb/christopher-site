'use strict';

import express from 'express';
import * as controller from './movie.controller.js';

var router = express.Router();

router.get('/', controller.page);
router.get('/:id', controller.get);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);

module.exports = router;
