// src/controllers/ai.controller.js
const aiService = require('../services/ai.service');

async function getReview(req, res) {
  const { code } = req.body;
  try {
    // call your Google Generative AI wrapper
    const reviewText = await aiService(code);
    // return a consistent JSON shape
    res.json({ review: reviewText });
  } catch (error) {
    console.error("Error during review process:", error);
    res.status(500).json({ message: 'Error reviewing code' });
  }
}

module.exports = { getReview };
