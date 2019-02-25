const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const path = require('path');

const cors = require('cors');
const dotenv = require('dotenv').config();
var app = express();

// Import Routes
const routes = require('./server/routes');

var PORT = process.env.PORT || 5000;
mongoose.Promise = global.Promise;

//mongo connection events
mongoose.connection.on('connected', () => {
  console.log('Connection Established')
})
mongoose.connection.on('reconnected', () => {
  console.log('Connection Reestablished')
})
mongoose.connection.on('disconnected', () => {
  console.log('Connection Disconnected')
})
mongoose.connection.on('close', () => {
  console.log('Connection Closed')
})
mongoose.connection.on('error', (error) => {
  console.log('ERROR: ' + error)
})
const run = async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    autoReconnect: true,
    reconnectTries: 1000000,
    reconnectInterval: 3000,
  })
}
run()
  .then(() => {
    // Use Routes
    app.use('/', routes);
    
    // Start http server
    app.use(express.static('dist'))
    app.listen(PORT, () => { console.log(`Server is listening on ${PORT}`)});
  }
)
  .catch(error => console.error(error))
//end database connection 
