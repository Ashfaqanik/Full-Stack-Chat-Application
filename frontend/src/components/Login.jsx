import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-w-96 mx-auto">
      <div className="w-ful p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 ">
        <h1 className="text-3xl front-bold text-center text-gray-300">
          Sign in
        </h1>
        <form action="">
          <div>
            <label className=" label p-2">
              <span className="text-base label-text text-white">Username</span>
            </label>
            <input
              className="w-full input input-bordered h-10 bg-slate-400 text-black placeholder-gray-600"
              type="text"
              placeholder="Username"
            />
          </div>
          <div>
            <label className=" label p-2">
              <span className="text-base label-text text-white">Password</span>
            </label>
            <input
              className="w-full input input-bordered h-10 bg-slate-400 text-black placeholder-gray-600"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="mt-6">
            <button className="btn btn-block btn-sm mt-2 border border-slate-700 bg-slate-400 text-black ">
              Sign in
            </button>
          </div>
          <div className="flex mx-2 mt-4 justify-end">
            <p className="text-white">No account?</p>
            <Link className="text-blue-400 mx-2" to="/register">
              Create your account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
