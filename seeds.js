var db = require('./db');
var Question = require('./models/question');

Question.remove({}, function(){

  Question.create([
    {title: "How do birds work?", body: "They can fly right?"},
    {title: "How can I name a hurricane?", body: "I've got ideas."},
    {title: "Why's coding gotta be so hard?", body: "Just do what I want."},
    {title: "Why are puppies cute?"}
  ], function(err, questions){
    if (err) console.log(err);
    console.log('seeded ' + questions.length + ' questions');
    process.exit();
  });

});
