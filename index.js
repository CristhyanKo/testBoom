const express = require('express')
const app = express()
const port = process.env.PORT || 3000

var bodyParser = require('body-parser');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



app.post('/testJira', (req, res) => {
  console.log(req.body)
  res.send(req.body);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})