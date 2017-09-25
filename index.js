const express = require('express');

let app = express();

let port = 3000;

// app.use(express.static(__dirname + '/index.html'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log('Listening on port ' + port);
})