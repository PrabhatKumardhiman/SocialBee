const express = require('express')
const helmet = require('helmet');
const morgan = require('morgan');

const connectToMongo = require('./connectToMongo.js');
connectToMongo()// functiont to connect with MongoDB


const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})