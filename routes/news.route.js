const express = require('express');
const router = express.Router();
const newsCtrl = require('../controllers/news.controller');

router.get('/', newsCtrl.getAllNews)

module.exports = router
