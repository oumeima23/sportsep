//import mongoose module
const mongoose=require("mongoose");
//create Team schema
const teamSchema=mongoose.Schema({
    name:String,
    foundation : Number,
    owner: String,
    players:[
        {type:mongoose.Schema.Types.ObjectId, ref :"Player"}
],
})
//create Team Model 
const team= mongoose.model("Team",teamSchema);

//make Team exportable 
module.exports = team;