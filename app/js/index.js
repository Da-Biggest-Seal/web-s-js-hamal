const express = require('express');
const path = require('path');
const app = express();

//views
app.set('view engine', 'ejs');  //jazyk
app.set('views', path.join(__dirname, '..', 'views'));

//static files (css, obrazky)
app.use(express.static(path.join(__dirname, '..', '..', 'www')));

//data z formularu
app.use(express.urlencoded({ extended: false }));

app.use(require('../routes/defaultRouter'));

module.exports = app;
