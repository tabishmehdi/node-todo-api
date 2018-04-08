// const MongoClient = require('mongodb').MongoClient;
// We can rewrite the same line down below. Its is object restructuring.
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to the MongoDb server');
  }
  console.log('Connection has been created to MongoDB Server');
  const db = client.db('ToDoApp');

  //deleteMany
  // db.collection('Todos').deleteMany({text : 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   if (err) {
  //     console.log('Unable to delete todos',err);
  //   }
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text : 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   if (err) {
  //     console.log('Unable to delete todos', err);
  //   }
  // });

  //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed : false}).then((result) => {
    //   console.log(result);
    // }, (err) => {
    //   if (err) {
    //     console.log('Unable to delete todos');
    //   }
    // });

    // db.collection('Users').deleteMany({name : 'Tabish'}).then((result) => {
    //   console.log(result);
    // }, (err) => {
    //   if (err) {
    //     console.log('Unable to delete Users');
    //   }
    // });

    db.collection('Users').findOneAndDelete({
      _id : new ObjectID('5ac9c6b5ba353ec81ea01ed5')
    }).then((result) => {
      console.log(result);
    }, (err) => {
      if (err) {
        console.log('Unable to delete users');
      }
    });

  //client.close();
});
