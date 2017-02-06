var express = require("express");
var parser  = require("body-parser");
var mongoose= require("./db/schema");

mongoose.Promise = global.Promise;

var cors = require('cors');
var app     = express();
app.use(cors());

var Dancer = mongoose.model("Dancer");

app.set("port", process.env.PORT || 3001);

app.use(parser.json({extended: true})); //to support JSON encoded-bodies
app.use(parser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

//see a list of all future dancers
app.get("/api/dancers", function(req, res){
  Dancer.find({}).then(function(dancers){
    res.json(dancers);
  });
});

// comment out below except for class
// this works 100%, needed for class but not in real life
app.get("/api/dancers/:lastName", function(req, res){
  Dancer.findOne({lastName: req.params.lastName}).then(function(dancer){
    res.json(dancer);
  });
});

// works 100% in postman
// either click body raw json OR x-www-form-urlencoded firstName 'Ara' for example
app.post("/api/dancers", function(req, res){
  Dancer.create(req.body).then(function(dancer){
    res.json(dancer);
  });
});

//now works 100%, no underscore needed in url, just id#
app.delete("/api/dancers/:_id", function(req, res){
  Dancer.findOneAndRemove({_id: req.params._id}).then(function(){
    res.json({success: true });
  });
});

//testing in postman///////////////////////////////////////////////////////////
app.put("/api/dancers/:_id", function(req, res){
  // console.log("this is req.body: " + req.body);
  Dancer.findOneAndUpdate({_id: req.body._id}, req.body)
  .then(function(dancer){
    res.json(req.body);
  });
});

//according to line 13
app.listen(app.get("port"), function(){
  console.log("*** *** *** !!! !!! Ara, it's on 3001 !!! !!! *** *** ***");
});
