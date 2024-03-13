import Gendercheckbox from "./Gendercheckbox"

function Signup() {
    return (
        <div className=" flex flex-col items-center justify-center min-w-96 mx-auto bg-slate-800 rounded-md">
      <div className=" w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp <span className="text-blue-300">ChatApp</span>
        </h1>

        <form action="">
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input type="text" placeholder="John Doe" className="w-full input input-bordered h-10" />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">UserName</span>
            </label>
            <input type="text" placeholder="johndoe" className="w-full input input-bordered h-10" />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input type="password" placeholder="Enter Password " className="w-full input input-bordered h-10" />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input type="password" placeholder="Re-Enter Password " className="w-full input input-bordered h-10" />
          </div>

          {/* gender checkbox */}
          <Gendercheckbox/>
          <a className="link link-hover mt-4 ml-1">Already have an account</a>
          <div>
            <button className="btn btn-block btn-sm mt-5">Signup</button>
          </div>
        </form>
      </div>
    </div>
    )
}

export default Signup
