// const MongoClient = require('mongodb').MongoClient;
// We can rewrite the same line down below. Its is object restructuring.
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to the MongoDb server');
  }
  console.log('Connection has been created to MongoDB Server');
  const db = client.db('ToDoApp');

  // db.collection('Todos').insertOne({
  //   text : 'To do something',
  //   completed : false
  // }, (err , result) => {
  //   if (err) {
  //     return console.log('Unable to insert to the Todo',err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
    name : 'Tabish',
    age : 30,
    location : 'Lucknow'
  }, (err , result) => {
    if (err) {
      return console.log('Unable to insert to the Users', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  client.close();
});
