require('dotenv').config();
const app = require("./src/app")
const connectDB = require("./src/db/db")

//db connection
connectDB();


//server connection
app.listen(3000, () => {
    console.log("Server running on port 3000");
})