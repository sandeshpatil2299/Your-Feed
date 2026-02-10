const express= require("express");
const router= express.Router();
const multer= require("multer");

const {createFeed, getAllFeeds}= require("../controllers/post.controller")

const upload= multer({storage: multer.memoryStorage()});


router.post("/create-feed", upload.single("imageURL"), createFeed);
router.get("/feeds", getAllFeeds);

module.exports= router