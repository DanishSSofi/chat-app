import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = ()=>{
    const [loading,setLoading] = useState(false); 
    const {setAuthUser} = useAuthContext();

    const signup =async ({fullName,username,password,confirmPassword,gender})=>{
       const success=  handleInputError({fullName,username,password,confirmPassword,gender})
        if(!success) {
            return;
        }
        setLoading(true);
        try{
            const res = await fetch("http://localhost:5000/api/auth/signup",{
                method:"POST",
                headers:{"Content-Type": "application/json"},
                body : JSON.stringify({fullName,username,password,confirmPassword,gender})
            })
            const data = await res.json()
            if(data.error){
                throw new Error(data.error)
            }
            //set user to local storage
            localStorage.setItem("chat-user", JSON.stringify(data));
            //context
            setAuthUser(data);

            // console.log("this is data :",data)
        }catch(error){
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }
    return {loading,signup}
}

export default useSignup

function handleInputError({fullName,username,password,confirmPassword,gender}){
    if(!fullName || !username || !password || !confirmPassword || !gender){
        toast.error("Please fill all the fields")
        return false 
    }

    if(password !== confirmPassword){
        toast.error("Passwords do not match")
        return false
    }
    if(password.length < 6){
        toast.error("Password length should be greater than 6")
        return false
    }
}
