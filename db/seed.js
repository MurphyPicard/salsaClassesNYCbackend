var mongoose  = require("./schema");
var seedData  = require("./dancerss");


var Dancer = mongoose.model("Dancer");

Dancer.remove({}).then(function(){
  Dancer.collection.insert(seedData).then(function(){
    process.exit();
  });
});
