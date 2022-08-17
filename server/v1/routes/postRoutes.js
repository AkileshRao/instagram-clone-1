const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const authController = require('../controllers/authController');

router.route('/createPost').post(authController.authenticate, postController.createPost)

module.exports = router;