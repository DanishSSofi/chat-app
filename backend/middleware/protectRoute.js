import jwt from 'jsonwebtoken';
import User from '../models/user.models.js';

const protectRoute = async(req,res,next)=>{
    try{

        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({error:"Unauthorized : No token provided"})
        }
        const decoded = jwt.verify(token,"ng98HPp24mcttM/TXIlSzu3Hmo9/LGMOINBXq+CAA50=");

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