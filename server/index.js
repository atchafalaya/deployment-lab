const express = require("express");

const path = require("path");

const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(dirname, '../public/index.html'));

}) 

app.get('/styles.css', (req, res) => {
    res.sendFile(path.join(dirname, '../public/styles.css'));
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
  
  app.get('/js', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/main.js'))

  const port = process.env.PORT || 4005;

  })

app.listen(port, () => {
    console.log(`App running PORT ${port}`);
});
