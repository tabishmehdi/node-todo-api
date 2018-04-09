// const MongoClient = require('mongodb').MongoClient;
// We can rewrite the same line down below. Its is object restructuring.
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to the MongoDb server');
  }
  console.log('Connection has been created to MongoDB Server');
  const db = client.db('ToDoApp');

  // db.collection('Todos').findOneAndUpdate({
  //   _id : new ObjectID('5aca664fba353ec81ea01fcf')
  // }, {
  // $set : {
  //   completed : true
  // }
  // },
  // {
  //   returnOriginal : false
  // }).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   if (err) {
  //     console.log('unable to update tods');
  //   }
  // });


  db.collection('Users').findOneAndUpdate(
  { _id : new ObjectID('5aca69ceba353ec81ea02156')},
  { $set : { text : 'Tabish' }, $inc : { age : 1 }},

  { returnOriginal : false }).then((result) => {
    console.log(result);
  }, (err) => {
    if (err) {
      console.log('unable to update users');
    }
  });

  //client.close();
});
