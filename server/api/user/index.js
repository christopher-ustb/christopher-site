'use strict';

import express from 'express';
import * as controller from './user.controller.js';

var router = express.Router();

router.post('/', controller.create);
router.get('/:id', controller.get);

module.exports = router;
