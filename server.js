// server.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const index = require('./routes/index');
const tasks = require('./routes/tasks');
// const mongoose = require('mongoose');
// const Todo = require('./models'); // imports our database model
const app = express();
let port = process.env.PORT || 3000

// Setup View Engine
app.set('views', path.join(__dirname +  '/views'));
app.set('view engine', 'ejs'); //specifies which view engine we want to use

// Allows us to render html files
app.engine('html', require('ejs').renderFile);

// Set Static Folder
app.use(express.static(__dirname));

// Set our bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/tasks', function(req, res) {
  console.log('the get request is firing')
});
// app.post('/tasks', function(req, res) {
//   console.log('post req firing')
// });

// // Sets our Routes
app.use('/', index);
// app.use('/api', tasks);

app.listen(port, function() {
  console.log('We have successfully connected to port: ', port);
});
