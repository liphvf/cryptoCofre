const express = require('express');
const router = express.Router();
const controller = require('../controllers/passwordsController');
const authService = require('../services/authService');

router.get('/', authService.authorize, controller.get);
router.post('/', authService.authorize, controller.post);
router.delete('/:id', authService.authorize, controller.delete);

module.exports = router;