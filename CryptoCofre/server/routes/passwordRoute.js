const express = require('express');
const router = express.Router();
const controller = require('../controllers/passwordsController');
const authService = require('../services/authService');

router.get('/:id', controller.get);
router.post('/:id',authService.authorize, controller.post);


module.exports = router;