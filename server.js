var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');

var PORT = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static('public'));

//Database configuration
var mongojs = require('mongojs');
var databaseUrl = "week18day2";
var collections = ["notes"];
var db = mongojs(databaseUrl, collections);
db.on('error', function(err) {
  console.log('Database Error:', err);
});

    


// Routes
app.get('/', function(req, res) {
  res.sendfile(process.cwd() + '/index.html')
});

app.get('/notes', function(req,res){
  db.notes.find({}, function(err, dbResults){
    if(err) {
      throw err;
    }
    res.send(dbResults);
  });
});

//Save to DB

//db.notes.insert({'title': title});
//Get from DB


//Find One in DB
//when searching by an id, the id needs to be passed in as (mongojs.ObjectId(IDYOUWANTTOFIND))



//Update One in the DB
//when searching by an id, the id needs to be passed in as (mongojs.ObjectId(IDYOUWANTTOFIND))




//Delete One from the DB



//Clear the DB




app.listen(3000, function() {
  console.log('App running on port 3000!');
});