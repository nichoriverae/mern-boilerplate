const router = require('express').Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

router.get('/hello', (req, res) => {
  res.status(200).json({message: 'hello, world'});
})

module.exports = router;