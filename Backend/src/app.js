const express = require('express');
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors')

const app = express()

app.use(cors(
    {
        origin: process.env.FRONTEND_URL, // Replace with your frontend URL
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    }
))


app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/ai', aiRoutes)

module.exports = app