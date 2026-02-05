const mongoose= require("mongoose");

//post schema
const feedSchema= new mongoose.Schema({
    imageURL: String,
    caption: String
}) 

const feedModel= mongoose.model("feed", feedSchema);
module.exports= feedModel;