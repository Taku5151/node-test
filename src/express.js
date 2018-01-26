const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'appid, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    next();
});

app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/:name', function(req, res) {
    res.send(req.params.name)
})

app.post('/login/', function(req, res) {
  console.log(1);
  // res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Methods", "*");
  // res.header("Access-Control-Allow-Headers", "*");
  console.log(JSON.stringify(req.body));
  res.json(req.body);
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
