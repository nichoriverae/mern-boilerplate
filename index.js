const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const cors = require('cors');
const dotenv = require('dotenv').config();
var app = express();
var PORT = process.env.PORT || 3000;

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
    reconnectInterval: 3000
  })
}

run().catch(error => console.error(error))

app.use(express.static('dist'))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist/', index.html ));
})

app.listen(PORT, () => { console.log(`Server is listening on ${PORT}`)});