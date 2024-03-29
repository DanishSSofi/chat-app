import { Link } from "react-router-dom";
import Gendercheckbox from "./Gendercheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

function Signup() {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: ""
  });

  const handleCheckBoxChange= (gender)=>{
    setInputs({...inputs,gender});
  }
  const {loading , signup} = useSignup();

  

  const handleSubmit = async(e) => {
    e.preventDefault();
    // console.log(inputs)
    await signup(inputs)
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto bg-slate-800 rounded-md">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp <span className="text-blue-300">ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="John Doe"
              className="w-full input input-bordered h-10"
              value={inputs.fullName}
              onChange={(e)=> setInputs({...inputs,fullName:e.target.value})}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">UserName</span>
            </label>
            <input
              type="text"
              name="username"
              placeholder="johndoe"
              className="w-full input input-bordered h-10"
              value={inputs.username}
              onChange={(e)=> setInputs({...inputs,username:e.target.value})}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password "
              className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={(e)=> setInputs({...inputs,password:e.target.value})}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Re-Enter Password "
              className="w-full input input-bordered h-10"
              value={inputs.confirmPassword}
              onChange={(e)=> setInputs({...inputs,confirmPassword:e.target.value})}
            />
          </div>

          {/* gender checkbox */}
          <Gendercheckbox onCheckBoxChange={handleCheckBoxChange} selectedGender={inputs.gender}/>
          <Link to="/login" className="link link-hover mt-4 ml-1">
            Already have an account
          </Link>
          <div>
            <button type="submit" className="btn btn-block btn-sm mt-5" disabled={loading}>
              {loading ? <span className="loading loading-spinner"></span>:"Signup"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
