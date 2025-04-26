// src/app.js
const express = require('express');
const cors = require('cors');
const aiRoutes = require('./routes/ai.routes');

const app = express();

app.use(express.json());
app.use(cors({
  origin: [ process.env.FRONTEND_URL, 'http://localhost:5173' ].filter(Boolean)
}));

app.use('/ai', aiRoutes);
app.get('/', (_req, res) => res.send('Hello World'));

app.use((err, _req, res, _next) => {
  console.error('🔴 Error:', err.message);
  res.status(500).json({ error: err.message });
});

module.exports = app;
