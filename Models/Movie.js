var mongoose=require("mongoose");
var m=mongoose.Schema({
    name:String,
    rating:Number
})
module.exports=mongoose.model("movies",m);