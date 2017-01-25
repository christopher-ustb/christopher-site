'use strict';

import express from 'express';
import * as controller from './celebrity.controller';

var router = express.Router();

router.get('/', controller.page);
router.get('/:id', controller.get);
router.post('/', controller.create);

module.exports = router;
