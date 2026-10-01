const express = require('express');
const app = express();

//views
app.set('view engine', 'ejs');  //jazyk
app.set('views', './app/views');

//static files (css, obrazky)
app.use(express.static('www'));

app.use(require('../routes/defaultRouter'));

module.exports = app;