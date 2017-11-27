const express = require('express');
const router = express.Router();
const controller = require('../controllers/passwordsController');

router.get('/:id', controller.get);
router.post('/:id', controller.post);


module.exports = router;