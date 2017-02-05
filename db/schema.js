var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/dancers");

var db = mongoose.connection;

db.on("error", err => {
    console.log("This is the err: ");
    console.log(err);
});

// Will log "database has been connected" if it successfully connects.
db.once("open", () => {
    console.log("Ara, the database has been connected!");
});

var Schema = mongoose.Schema;

var DancerSchema = new Schema({
  firstName: String,
  lastName: String,
  phoneNumber: String,
  email: String,
  message: String
});

//var Author = mongoose.model("Author", AuthorSchema);
var Dancer = mongoose.model("Dancer", DancerSchema);
