var mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost/dancers");  // in if/else below

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

var Dancer = mongoose.model("Dancer", DancerSchema);

// Dancer.create({ firstName: "Benjamin", lastName: "Franklin" }, (err, dancer) => {
//   if (err){
//     console.log(err);
//   }
//   else{
//     console.log(dancer);
//   }
// });

var options = {
  server: {
    socketOptions: {
      keepAlive: 300000, connectTimeoutMS: 30000
    }
  },
  replset: {
    socketOptions: {
      keepAlive: 300000,
      connectTimeoutMS : 30000
    }
  }
};
////////////////////////////////////Check this if else conditional later
if(process.env.MONGODB_URI){
  mongoose.connect(process.env.MONGODB_URI, options);
} else {
// Connect to local database
mongoose.connect("mongodb://localhost/dancers");
}

module.exports = mongoose;
