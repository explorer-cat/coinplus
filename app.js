const express = require('express')

const app = express()
const port = 8081


app.use(express.static('public'));
// app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})