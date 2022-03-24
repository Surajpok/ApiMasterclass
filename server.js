const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');

const app = express();


// load env vars
dotenv.config({path:'./config/config.env'});

// connect to database
connectDB();


// Dev Logging Middleware
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}



// Routes Files
const bootcamps = require('./routes/bootcamps');

app.use('/api/v1/bootcamps',bootcamps);



const PORT = process.env.PORT || 5000;
const MODE = process.env.NODE_ENV;

const server = app.listen(PORT,
    console.log(`Server reaning in ${MODE} on ${PORT}`)
);

// handle unhandeled rejections

process.on('unhandeledRejeton', (err,promise) => {
    console.log(`Error: ${err.message}`);
// close server & Exit Process
server.close(()=>process.exit(1));
});