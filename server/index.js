const express = require("express");

const path = require("path");

const app = express();

app.get("/", (req, res) => {
   res.sendFile(path.join(__dirname, '../public/index.html'));

}) 

app.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/style.css'));
})

//app.get('/', (req,res) => {
  //  res.sendFile(path.join(__dirname, '../server/index.js'));

//});

// app.get('/images/Sailing.jpg', (req, res) => {
//     res.sendFile(path.join(__dirname, '../images/Sailing.jpg'));
// });

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/main.js'))
  })

  app.use('/js', express.static(path.join(__dirname, '../public/main.js'))); //frontend javascript

  app.use('/style.css', express.static(path.join(__dirname, '/public/style.css')));

  //app.use('/server/index.js', express.static(path.join(__dirname, '../server/index.js'))); //already called in package.json

  app.use('/images', express.static(path.join(__dirname, '../images')));

  app.use(express.static(__dirname +'../public')); //may not need
  
 // app.get('/js', (req, res) => {
 //     res.sendFile(path.join(__dirname, '../public/main.js'))

  const port = process.env.PORT || 4005;

//  })

app.listen(port, () => {
    console.log(`App running PORT ${port}`);
});
