//CORS: Cross origin resourse sharing, ajax request, easily access something outside of our server
//mongoose: makes mongo usable with js
//dotenv: allows us to make .env files

/*Current Place
https://medium.com/@beaucarnes/learn-the-mern-stack-by-building-an-exercise-tracker-mern-tutorial-59c13c1237a1
 
*/

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
MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
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
        console.log(`${i}: ` + message)
      })}
 }

 app.get('/', function(request, res){
   res.render('App.js')
 })

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
  query1();
})