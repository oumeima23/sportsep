//import mongoose module
const mongoose=require("mongoose");
//create player schema
const playerSchema=mongoose.Schema({
    name:String,
    position:String,
    nbr:Number,
    age: Number,
    team:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Team"
    }
})
//create player Model 
const player= mongoose.model("Player",playerSchema);

//make player exportable 
module.exports = player;