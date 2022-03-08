const express = require('express');
const dotenv = require('dotenv');

const app = express();
app.get('/api/v1/bootcamps', (req,res) =>{
    res.status(200).json({success:true,msg:'show all bootcamps'});
});

app.get('/api/v1/bootcamps/:id', (req,res) =>{
    res.status(200).json({success:true,msg:`Get Bootcamp ${req.params.id}`});
});

app.post('/api/v1/bootcamps', (req,res) =>{
    res.status(200).json({success:true,msg:'Create New bootcamps'});
});

app.put('/api/v1/bootcamps/:id', (req,res) =>{
    res.status(200).json({success:true,msg:`Update Bootcamp ${req.params.id}`});
});

app.delete('/api/v1/bootcamps/:id', (req,res) =>{
    res.status(200).json({success:true,msg:`Delete Bootcamp ${req.params.id}`});
});

// load env vars
dotenv.config({path:'./config/config.env'});

const PORT = process.env.PORT || 5000;
const MODE = process.env.NODE_ENV;
app.listen(PORT,
    console.log(`Server reaning in ${MODE} on ${PORT}`)
);