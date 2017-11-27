const express = require('express');
const router = express.Router();
const controller = require('../controllers/passwordsController');
const authService = require('../services/authService');

router.get('/', authService.authorize, controller.get);
router.post('/', authService.authorize, controller.post);

module.exports = router;