let express = require('express');
let router = express.Router();
let fs = require('fs')

/* GET users listing. */
router.get('/', function(req, res, next) {
  fs.readFile('./public/ecomply.json', (err, data) => {
    if(err)
      return res.end()

    res.writeHead(200, {
      'Content-Type': 'text/json'
    })
    res.write(data)
    res.end()
  });
});

module.exports = router;
