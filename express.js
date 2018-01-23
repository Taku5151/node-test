const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/:name', function(req, res) {
    res.send(req.params.name)
})

app.post('/login/:username-:password', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.json({login: req.params.username, password: req.params.password});
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
