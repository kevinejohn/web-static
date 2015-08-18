var express = require('express');
var app     = express();
var cors    = require('cors');
var fs      = require('fs');
var port    = process.env.PORT || 3003;
var morgan  = require('morgan');

var bodyParser = require('body-parser');

// Enable all cors
app.use(cors());

// use morgan to log requests to the console
app.use(morgan('dev'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/index.html', function (req, res) {
  res.redirect('/');
})

app.get('/test', function(req, res) {
  res.send('Works');
  
  // fs.readFile(__dirname + '/somefile', 'utf8', function(err, text){
  //   res.end(text);
  // });
});


app.use('/', express.static(__dirname + '/public/'));

app.listen(port);
console.log('WEB: Server up and running, listening on port ' + port);

// npm start not shutting down on TERM signal. Possible fix
process.on('SIGINT',  function(){
  console.log("SIGINT");
  process.exit(0);
});
process.on('SIGTERM', function(){
  console.log("SIGTERM");
  process.exit(0);
});
