const express = require('express');
const router = express.Router();
const { getReview } = require('../controllers/ai.controller');

// Only path fragments here—no full URLs
router.post('/get-review', getReview);

module.exports = router;
