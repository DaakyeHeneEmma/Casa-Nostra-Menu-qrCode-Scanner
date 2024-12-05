const express = require('express')
const app = express()


app.get('/open', (req, res) => {
  console.log("start")
  res.send('hello world')
})

app.listen(3434)
