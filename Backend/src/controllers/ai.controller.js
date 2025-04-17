const axios = require('axios');

async function getReview(req, res) {
  const { code } = req.body;
  try {
    // Replace with your actual AI service endpoint
    const response = await axios.post('https://your-ai-service.com/review', { code });
    res.json(response.data);
  } catch (error) {
    console.error("Error during review process:", error);
    res.status(500).json({ message: 'Error reviewing code' });
  }
}

module.exports = { getReview };
