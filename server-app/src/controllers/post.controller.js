const feedModel = require("../models/feed.model")
const uploadFilesOnCloudinary= require("../services/upload.service");

//post api to create new post
const createFeed = async (req, res) => {
    const imageURL = req.file.buffer
    const caption = req.body.caption

    const result = await uploadFilesOnCloudinary(imageURL);

    await feedModel.create({
        imageURL: result.url,
        caption: caption
    })

    res.status(201).json({
        message: "Feed created successfuly"
    })
}

//get api to get all posts
const getAllFeeds = async (req, res) => {
    const feed = await feedModel.find();

    return res.status(200).json({
        message: "Data fetched successfuly",
        feed: feed
    })
}


module.exports= {createFeed, getAllFeeds};