const express = require('express');
const app = express()
const path = require('path');
const port = 3000

const picture_names = {
  "1": "res_1.webp",
  "2": "res_2.jpg",
  "3": "res_3.jpeg",
  "logo": "restaurace_logo.png"
}



app.use(express.static('views'));

app.get('/greet', (req, res) => {
  res.send('Hello World, pane učiteli!')
})

app.get('/pictures/:name', (req, res) => {
  res.sendFile(path.join(__dirname, 'upravy', 'obrazky', picture_names[req.params.name]));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})