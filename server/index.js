const express = require("express");

const path = require("path");

const app = express();
app.get("/", (req, res) => {
    res.sendFile(path.join(dirname, '../public/store.html'));

}) 

app.get('/style.css', (req, res) => {
    res.sendFile(path.join(dirname, '../public/style.css'));
})

app.get('/', (req,res) => {
    res.sendFile(path.join(dirname, '../server/index.js'));

});

app.get('/images/Sailing.jpg', (req, res) => {
    res.sendFile(path.join(dirname, '../images/Sailing.jpg'));
});

app.get('/js', (req, res) => {
    res.sendFile(path.join(dirname, '../public/main.js'))
  })

  app.use('/js', express.static(path.join(dirname, '../public/main.js')));

  app.use('/server/index.js', express.static(path.join(dirname, '../server/index.js')));

  app.use('/images', express.static(path.join(dirname, '../images')));

  app.use(express.static(__dirname +'../public'));


  const port = process.env.PORT || 4005;

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/main.js'))
  })

app.listen(port, () => {
    console.log(`App running PORT ${port}`);
});
