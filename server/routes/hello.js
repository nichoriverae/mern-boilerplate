const express = require('express');
const router = express.Router();

try {
  router.use(function(req, res, next) {
    // middleware goes here
    next();
  });
  
  router.get('/hello', (res, req) => {
    res.status(200).send({message: 'hello'});
  })
} catch (error) {
  console.log('An error has occurred: ' + error)  
}

module.exports = router;