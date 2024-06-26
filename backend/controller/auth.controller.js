import User from "../models/user.models.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "./generateToken.js";
export const signup =async (req,res)=>{
    try{
        
        const {fullName, username, password , confirmPassword, gender} = req.body;
        // console.log(req.body.username)   
        if(password !== confirmPassword){
            return res.status(400).json({error:"Passwords do not match! "});
        }

        const user = await User.findOne({username});

        if(user){
            return res.status(400).json({error:"Username already exists!"});
        }

        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        // avatar link https://avatar.iran.liara.run/public/boy?username=[value]
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullName,
            username:username,
            password:hashedPassword ,
            gender:gender,
            profilepic: gender === "male" ? boyProfilePic : girlProfilePic
        })

        if(newUser){
            // generate jwt token here 
            generateTokenAndSetCookie(newUser._id,res);
            await newUser.save();

        res.status(201).json({
            _id:newUser._id,
            fullName:newUser.fullName,
            username : newUser.username,
            profilepic:newUser.profilepic
        })
        }else{
            res.status(400).json({error:"Invalid user data"});
        }
    }
    catch(error){
        console.log("error in signup controller",error.message);
        res.status(500).json({error:"Internal server error"});
    }

}

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(400).json({ error: "Invalid Credentials" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid Credentials" });
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.fullName,
            profilePic: user.profilepic,
        });
    } catch (error) {
        console.log("error in Login controller", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};


export const logout = async(req,res)=>{
    try {
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({message:"loggout successfuly"});
        
    } catch (error) {
        console.log("error in logout controller",error.message);
        res.status(500).json({error:"Internal server error"});
    }
}