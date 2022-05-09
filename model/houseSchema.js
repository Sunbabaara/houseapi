const mongoose = require("mongoose")

const houseSchema = mongoose.Schema({
    housename:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true 
    },
    image:{
        type:String,
        required:true
    }      
}, {
    timestamps:true
}
)

const House = mongoose.model("house", houseSchema);
module.exports=House;