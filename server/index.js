const express = require("express");

const path = require("path");

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html')); //when GET request, send absolute filepath, join returns path dirname is file, string is relative filepath 
})

const port = process.env.PORT || 4005;

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/main.js'))
  })

app.listen(port, () => {
    console.log(`App running PORT ${port}`);
});
