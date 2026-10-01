require('dotenv').config();
const port = process.env.PORT;

const express = require('express');
let ejs = require('ejs');

require('http').createServer(require('./app/js')).listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
});