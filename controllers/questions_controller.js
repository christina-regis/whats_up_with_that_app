var Question = require('../models/question');
var questions = {};

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

questions.update = function(req, res) {
  Question.findById( req.params.id, function(err, question){
    if (err) {
      return res.json(err);
    }
    if (req.query.vote === "up") {
      question.voteUp(function(err, question){
        if (err) {
          return res.json(err);
        }
        return res.json(question);
      });
    }
    if (req.query.vote === "down") {
      question.voteCount -= 1;
      question.save(function(err, question){
        if (err) {
          return res.json(err);
        }
        return res.json(question);
      });
    }
  });
    //or in the schema
    // question.voteCount += 1;
    // question.save(function(){
    //   res.json({message: "updated"});
    // });
};
module.exports = questions;
