const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  // res.send('api works');
  res.status(200).send({
    title: "Funfou",
    version: "0.0.1"
  });
});


module.exports = router;