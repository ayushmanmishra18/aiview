require('dotenv').config();
// server.js
const app = require('./src/app');
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
