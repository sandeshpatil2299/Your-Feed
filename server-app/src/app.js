const express= require("express");
const app= express();
const multer= require("multer");
const feedModel = require("./models/feed.model")
const uploadFilesOnCloudinary= require("./services/upload.service");

//to read files

//middleware to read json request body
app.use(express.json());
const upload= multer({storage: multer.memoryStorage()});

//post api to create new post
app.post("/create-feed", upload.single("imageURL"), async (req, res) => {

    const imageURL = req.file.buffer
    const caption= req.body.caption

    const result= await uploadFilesOnCloudinary(imageURL);
    
    await feedModel.create({
        imageURL: result.url,
        caption: caption
    })

    res.status(201).json({
        message: "Feed created successfuly"
    })
})

//get api to get all posts
app.get("/feeds", async (req, res) => {

    const feed= await feedModel.find();

    return res.status(200).json({
        message: "Data fetched successfuly",
        feed:feed
    })
})

module.exports= app;