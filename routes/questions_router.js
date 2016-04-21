var express = require('express');
var router = express.Router();
var questions = require('../controllers/questions_controller');

router.route('/')
  .get(questions.index)
  .post(questions.create);

module.exports = router;
