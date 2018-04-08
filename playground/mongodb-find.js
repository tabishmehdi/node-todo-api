// const MongoClient = require('mongodb').MongoClient;
// We can rewrite the same line down below. Its is object restructuring.
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to the MongoDb server');
  }
  console.log('Connection has been created to MongoDB Server');
  const db = client.db('ToDoApp');


// This fetch the record completed = true
  // db.collection('Todos').find({completed : true}).toArray().then(docs => {
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   if (err) {
  //     console.log('Unable to fetch todos');
  //   }
  // });

  // This fetch record whose _id = 5ac9bc39384067698d255e1d

  // db.collection('Todos').find({
  //   _id : new ObjectID('5ac9bc39384067698d255e1d')
  // }).toArray().then(docs => {
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   if (err) {
  //     console.log('Unable to fetch todos');
  //   }
  // });


  db.collection('Users').find({name : 'Tabish'}).count().then(count => {
    console.log(`Total count : ${count}`);
  }, (err) => {
    if (err) {
      console.log('Unable to fetch todos');
    }
  });
  client.close();
});
