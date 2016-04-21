var Question = require('../models/question');
var questions = {}

questions.index = function(req, res) {
  Question.find({}, function(err, questions) {
    if (err) return res.json(err);
    res.json(questions);
  });
};

questions.create = function(req, res) {
  var question = new Question();
  question.title = req.body.title;
  question.body = req.body.body;
  question.createdAt = req.body.createdAt;
  question.save(function(err){
    if(err){
      return res.json({error: err});
    }
    res.json({success: true, message: 'question created'});
  });
};


module.exports = questions;
