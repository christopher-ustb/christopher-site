'use strict';

import express from 'express';
import * as controller from './movie.controller.js';

var router = express.Router();

router.get('/', controller.page);

module.exports = router;
