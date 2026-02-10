const mongoose= require("mongoose");

//post schema
const feedSchema= new mongoose.Schema({
    imageURL: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    }
}) 

const feedModel= mongoose.model("feed", feedSchema);
module.exports= feedModel;