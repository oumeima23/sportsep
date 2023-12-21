//import mongoose module
const mongoose=require("mongoose");
//create match schema
const matchSchema=mongoose.Schema({
    teamOne:String,
    teamTwo: String,
    scoreOne:Number,
    scoreTwo:Number,

})
//create Match Model 
const match= mongoose.model("Match",matchSchema);

//make match exportable 
module.exports = match;
