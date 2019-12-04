//CORS: Cross origin resourse sharing, ajax request, easily access something outside of our server
//mongoose: makes mongo usable with js
//dotenv: allows us to make .env files

/*Current Place
https://youtu.be/7CqJlxBYj-M?t=994
https://medium.com/@beaucarnes/learn-the-mern-stack-by-building-an-exercise-tracker-mern-tutorial-59c13c1237a1
Just got connnected to the ip address of google. Now I want to pull data and query the database. 
*/

//To test you have to use:
// npx nodemon server.js in the terminal
// TODO: get in the dir, then node server.js


const express = require('express')
const cors = require('cors')
//const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

//Li's code.. It works but not sure why mine didn't
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const url = 'mongodb://34.69.61.31:27017';
MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    if (err) throw err;
    const db = client.db("project").collection("detectors");
    db.findOne({}, function(err, res){
        console.log(res);
        client.close();
    })
});
function query1(){
      let {PythonShell} = require('python-shell')
      for(let i = 1; i <= 6;i++){
      const pyshell = new PythonShell(`./query${i}.py`)
      pyshell.on('message', (message)=> {
        console.log(message)
      })}
 }


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
  query1();
  /*query2();
  query3();
  query4();
  query5();
  query6();  */
  
})




// ---------------------------------------------------All stuff trying to access the google connection thing-----------------------
// const uri = 'mongodb://34.69.61.31';
// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client)=> {
//   if(err) throw err
//   const db = client.db("project").collection("detectors");
//   db.findOne({}, function(err, res){
//       console.log(res);
//       client.close();
//   })
// })
// // const connection = mongoose.connection

// // connection.on('error', console.error.bind(console, 'connection error:')); //https://mongoosejs.com/docs/index.html solves the promise
// // connection.once('open', () => { 
// //   console.log("We are in boys")
// //   client.findOne({}, function(err, res){
// //     console.log(res)
// //     client.close()
// //   })
// // })
// const uri = '34.69.61.31'
// const MongoClient = require('mongodb').MongoClient;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("project").collection("detectors");
//   //.catch( err => console.error(err))
//   // perform actions on the collection object
//   //client.close();
// });

// const MongoClient = require('mongodb').MongoClient;

// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});
// client.connect(err => {
//   const collection = client.db("project").collection("detectors");
//   // perform actions on the collection object
//   client.close();
// });
//const uri = 'mongodb://localhost/34.69.61.31' //:271017

//Ctrl k c to comment all ctrl k u to remove them
//const uri = process.env.ATLAS_URI
// const uri = "mongodb+srv://sherrett:mnbwere7@cs488-qlky0.gcp.mongodb.net/test?retryWrites=true&w=majority";



// const MongoClient = require('mongodb').MongoClient;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
