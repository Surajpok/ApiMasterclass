const express = require('express');
const dotenv = require('dotenv');
const logger = require('./middleware/logger');

const app = express();



app.use(logger);

// Routes Files
const bootcamps = require('./routes/bootcamps');

// load env vars
dotenv.config({path:'./config/config.env'});

app.use('/api/v1/bootcamps',bootcamps);



const PORT = process.env.PORT || 5000;
const MODE = process.env.NODE_ENV;
app.listen(PORT,
    console.log(`Server reaning in ${MODE} on ${PORT}`)
);