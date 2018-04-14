const express = require('express');
const bodyParser = require('body-parser');


var {mongoose} = require('./db/mongoose');
var {ToDo} = require('./models/todo');
var {User} = require('./models/user');


var app = express();

app.use(bodyParser.json());

app.post('/todos' , (req , res) => {
   var todo = new ToDo({
     text : req.body.text
   });

   todo.save().then((docs) => {
     res.send(docs);
   }, (e) => {
     res.status(400).send(e);
   });
});

app.listen(3000, () => {
  console.log('App is running at port 3000');
});

// ToDo Modal
// var newToDo = new ToDo({
//   text : '  cook food ',
//   completed : false,
//   completedAt : 123
// });
//
// newToDo.save().then((docs) => {
//   console.log('New ToDo', docs);
// }, (e) => {
//   console.log('Unable to save todo');
// })


// User Modal
// var newToDo = new User({
//   email : 'abc@example.com'
// });
//
// newToDo.save().then((data) => {
//   console.log(JSON.stringify(data, undefined, 2));
// }, (e) => {
//   console.log('Unable to save user',e);
// })
