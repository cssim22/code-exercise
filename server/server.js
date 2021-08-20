const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// parses incoming requests
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../build')));

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../home.html'));
});

// unknown endpoint error handler

app.use('/', (req, res) => {
  return res.status(404).json('404 Endpoint Not Found');
});

// global error handler
app.get('/', (req, res, next, err) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occured' },
  };
  const errorObj = Object.assign(defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
});

// open up server on PORT
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});

module.exports = app;
