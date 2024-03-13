import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userid,res)=>{
    const token = jwt.sign({userid},"ng98HPp24mcttM/TXIlSzu3Hmo9/LGMOINBXq+CAA50=",{
        expiresIn:'15d'
    })

    res.cookie("jwt",token,{
        maxAge: 15*24*60*60*1000, // miliseconds
        httpOnly: true,  // prevents xss attacks
        sameSite: "strict", //CSRF attacks 
        secure: process.env.NODE_ENV !== "development"  
    })
}


export default generateTokenAndSetCookie;