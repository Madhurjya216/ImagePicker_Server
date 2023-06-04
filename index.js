const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');
const postRouter = require('./routes/postRoute');
const db = require('./dbConnection/db');

// middleware
app.use(cors());
app.use(express.json());

// db connection
db();

// routes
app.use('/post/route', postRouter);


app.get('/', (req, res) => {
    res.send('working');
})

// server listening
app.listen(port, (req, res) => {
    console.log(`server working on:${port}`);
})