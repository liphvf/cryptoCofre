const express = require('express');
const router = express.Router();
const controller = require('../controllers/usersController');
const authService = require('../services/authService');

router.get('/', authService.authorize, controller.get);
router.post('/', controller.post);

module.exports = router;
