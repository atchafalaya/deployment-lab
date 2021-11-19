const express = require("express");
const path = require("path");
const app = express();

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'd007820422ac42589bc1790a8c63926d',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

let welcomeResponse = "Test"
let names = ['Jim', 'Jack', 'John']

// record a generic message and send it to Rollbar
rollbar.log('DevOpsLab')

// app.get('/get', function(req, res) {
//   rollbar.info('Welcome response(s)')
//   res.send(welcomeResponse)
// })
app.get('/get', function(req,res) {
  res.send('Request')
  if(!names.includes('Jerrell')){
      rollbar.warning('GET: Jerrell is not in array')
  }
})
app.post('/post', function(req,res) {
  res.send('Request')
  if(!names.includes('Jerrell')){
      rollbar.critical('POST: Student cannot post')
  }
})

app.put('/put', function (req, res){
  rollbar.info('Test PUT')
  res.send('Update data')
  .catch((err) => {
    const Error = err
    Rollbar.error(Error)
  })
})
app.post('/post', function(req,res) {
  let name = req.body
  rollbar.info('Someone tried to post')
  res.send('Post data')
  MrJamesArray.push(name)
  .catch((err) => {
      const Error = err
      Rollbar.error(Error)
  })
})
app.delete('/delete', function(req,res) {
  let name = req.body
  rollbar.info('Someone made an attempt to delete a user')
  res.send('Delete data')
  db("NAMES")
  .insert(name)
  .then((ids) => {
    res.status(201).json(ids);
  })
  .catch((err) => {
      const Error = err
      console.log('ERROR', Error)
      rollbar.error(Error)
  })
})

app.get('/get', function(req, res){
  res.send('Request')
  if(!names.includes('Jeff')){
    rollbar.warning('GET: Jeff is not in the array')
  }
})

app.get("/", (req, res) => {
   res.sendFile(path.join(__dirname, '../public/index.html'));

}) 

app.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/style.css'));
})

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/main.js'))
  })

  app.use('/js', express.static(path.join(__dirname, '../public/main.js'))); //frontend javascript

  app.use('/style.css', express.static(path.join(__dirname, '/public/style.css')));

  app.use('/images', express.static(path.join(__dirname, '../images')));

  app.use(express.static(__dirname +'../public')); //may not need

  const port = process.env.PORT || 4005;

app.use(rollbar.errorHandler());

app.listen(port, () => {
    console.log(`App running PORT ${port}`);
});
