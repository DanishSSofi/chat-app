import jwt from 'jsonwebtoken';
import User from '../models/user.models.js';
import dotenv from "dotenv";
dotenv.config();
//git
const protectRoute = async(req,res,next)=>{
    try{

        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({error:"Unauthorized : No token provided"})
        }
        const decoded = jwt.verify(token,JWT_SECRET);

        if(!decoded){
            return res.status(401).json({error:"Unauthorized : Invalid Token"});

        }
        const user = await User.findById(decoded.userid).select("-password");

        if(!user){
            return res.status(401).json({error:"User not found"});
        }

        req.user= user;

        next();
    }catch(error){
        console.log("Error in protectRoute middleware",error.message);
        res.status(401).json({ error:"Internel server error"});
    }
}

export default protectRoute;