const express = require('express');
const dotenv = require('dotenv');

const app = express();

// Routes Files
const bootcamps = require('./routes/bootcamps');

app.use('/api/v1/bootcamps',bootcamps);

// load env vars
dotenv.config({path:'./config/config.env'});

const PORT = process.env.PORT || 5000;
const MODE = process.env.NODE_ENV;
app.listen(PORT,
    console.log(`Server reaning in ${MODE} on ${PORT}`)
);