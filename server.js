const express = require('express');
const dotenv = require('dotenv');

const app = express();

// load env vars
dotenv.config({path:'./config/config.env'});

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT,
    console.log(`Server reaning in ${process.env.NODE_ENV} on ${PORT}`)
);