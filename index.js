const express = require('express')
const app = express()
const port = 3000

app.post('/testJira', (req, res) => {
  res.json(req.body);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})