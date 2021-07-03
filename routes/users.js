let express = require('express');
let router = express.Router();
let fs = require('fs')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  })
  res.write('users endpoint')
  res.end()
});

module.exports = router;
