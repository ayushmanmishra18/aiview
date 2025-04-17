const express = require('express');
const cors = require('cors');
const aiRoutes = require('./routes/ai.routes');

const app = express();

// Build & log allowed origins
const raw = process.env.FRONTEND_URL || '';
const noSlash = raw.replace(/\/$/, '');
const allowedOrigins = ['http://localhost:5173'];
if (noSlash) allowedOrigins.unshift(noSlash);
console.log('🟢 Allowed origins:', allowedOrigins);

const corsOptions = {
  origin(origin, callback) {
    console.log('🟣 CORS incoming Origin:', origin);
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    callback(new Error(`CORS policy: origin ${origin} not allowed`));
  },
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.options(/.*/, cors(corsOptions));

app.use(express.json());

// Health check
app.get('/', (req, res) => res.send('Hello World'));

// API routes
app.use('/ai', aiRoutes);

// Optional: global error handler
app.use((err, req, res, next) => {
  console.error('🔴 Error:', err.message);
  res.status(500).json({ error: err.message || 'Something went wrong' });
});

module.exports = app;
