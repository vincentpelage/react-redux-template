const express = require('express');

const router = express.Router(); // instanciation du routeur

const ctrlBoth = require('../controllers/both.controllers.js');

router
  .route('/')
  .post(ctrlBoth.bothGetAll);

router
  .route('/paris')
  .get(ctrlBoth.parisGetAll);

module.exports = router;
