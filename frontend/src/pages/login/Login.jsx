import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

function Login() {

  const [username , setUserName] = useState("");
  const [password, setPassword] = useState("");
  const {loading,login} = useLogin();
  const handleSubmit = async (e)=>{
    e.preventDefault();
    await login(username, password);
  }

  return (
    <div className=" flex flex-col items-center justify-center lg:min-w-96 mx-auto bg-slate-800 rounded-md lg:h-[60vh]">
      <div className=" w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 h-full">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login <span className="text-sm text-blue-300 mb-5 md:text-sm">ConnectUs</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div className=" mb-7">
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input type="text" placeholder="Enter Username " className="w-full input input-bordered h-10"
            value={username}
            onChange={(e)=> setUserName(e.target.value)}
            />
          </div>
          <div className=" mb-12">
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input type="password" placeholder="Enter Password " className="w-full input input-bordered h-10"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            />
          </div>
          <Link to="/signup" className="link link-hover">Dont have an account? Signup</Link>
          <div>
            <button className="btn btn-block btn-sm mt-2 h-12 "
            disabled={loading}
            >
              {loading ? <span className="loading loading-spinner"></span> : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
