const mongoose= require("mongoose");

//db url and connecton function
const connectDB= async () => {
    await mongoose.connect("mongodb://localhost:27017/your-feed")
    console.log("Connected to DB");
}

module.exports= connectDB