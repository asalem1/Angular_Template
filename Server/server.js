const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const db = require('../Database/list_model');
const app = express();

/* CONNECT TO THE SERVER */
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/Client'));
app.use(bodyParser.json());

/* CONFIGURE OUR ROUTES */
// require('./Routes/*')(app);

/* START APP */
app.listen(port, () => {
  console.log('we have hacked into the mainframe: ', port);
});

module.exports = app;

