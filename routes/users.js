let express = require('express');
let router = express.Router();
let fs = require('fs')

/* GET users listing. */
router.get('/.well-known/pki-validation', function(req, res, next) {
  fs.readFile('./public/B5A7609407FA4C636E4AD0CB6F5A8D2E.txt', (err, data) => {
    if(err)
      return res.end()

    res.writeHead(200, {
      'Content-Type': 'text/plain'
    })
    res.write(data)
    res.end()
  });
});

module.exports = router;
