const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt= require("bcryptjs");

//register user api
const registerUser = async (req, res) => {
    const { userName, firstName, lastName, contactNbr, email, password, role = 'user' } = req.body;

    //check if user is already present
    const isUserAlreadyPresent= await userModel.findOne({
        $or: [
            {userName},
            {email}
        ]
    })

    if(isUserAlreadyPresent) {
        return res.status(409).json({
            message: "User already present"
        })
    }

    //create secure password
    const hash= await bcrypt.hash(password, 10);

    //create new user in database
    const user = await userModel.create({
        userName, firstName, lastName, contactNbr, email, password: hash, role
    })

    //create token
    const token = jwt.sign({
        id: user._id,
        role: user.role
    }, process.env.JWT_SECRET)

    //save token on cookies
    res.cookie("token", token)

    res.status(201).json({
        message: "User created successfuly",
        user,
    })
}

//login api
const loginUser= async(req, res) => {
    const {userName, email, password}= req.body;

    const user= await userModel.findOne({
        $or: [
            {userName},
            {email}
        ]   
    })

    if(!user) {
        return res.status(401).json({
            message: "Invalid Credintials"
        })
    }

    const isPasswordValid= await bcrypt.compare(password, user.password);

    if(!isPasswordValid) {
        return res.status(401).json({
            message: "Invalid Crediantials"
        })
    }

    const token= jwt.sign({
        id: user._id,
        role: user.role
    }, process.env.JWT_SECRET)

    res.cookie("token", token);

    res.status(201).json({
        message:"User logged in successfully",
        user: user
    })
}

module.exports = { registerUser, loginUser };