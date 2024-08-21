import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const [user, setUser] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const navigate = useNavigate();
  const handlerCheckBox = (gender) => {
    setUser({ ...user, gender });
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://full-stack-chat-application-jsid.onrender.com/api/v1/user/register",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.success(error.response.data.message);
      console.log(error);
    }
    setUser({
      fullName: "",
      username: "",
      password: "",
      confirmPassword: "",
      gender: "",
    });
  };
  return (
    <div className="min-w-96 mx-auto">
      <div className="w-ful p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 ">
        <h1 className="text-3xl front-bold text-center text-gray-300">
          Sign Up
        </h1>
        <form onSubmit={onSubmitHandler} action="">
          <div>
            <label className=" label p-2">
              <span className="text-base label-text text-white">Full Name</span>
            </label>
            <input
              onChange={(e) => setUser({ ...user, fullName: e.target.value })}
              value={user.fullName}
              className="w-full input input-bordered h-10 bg-slate-400 text-black placeholder-gray-600"
              type="text"
              placeholder="Full Name"
            />
          </div>
          <div>
            <label className=" label p-2">
              <span className="text-base label-text text-white">Username</span>
            </label>
            <input
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              value={user.username}
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
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              value={user.password}
              className="w-full input input-bordered h-10 bg-slate-400 text-black placeholder-gray-600"
              type="password"
              placeholder="Password"
            />
          </div>
          <div>
            <label className=" label p-2">
              <span className="text-base label-text text-white">
                Confirm Password
              </span>
            </label>
            <input
              onChange={(e) =>
                setUser({ ...user, confirmPassword: e.target.value })
              }
              value={user.confirmPassword}
              className="w-full input input-bordered h-10 bg-slate-400 text-black placeholder-gray-600"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
          <br />
          <div className="flex items-center">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={user.gender === "male"}
                onChange={() => handlerCheckBox("male")}
                defaultChecked
                className="checkbox mx-2 border border-slate-300"
              />
              <p className="text-white">Male</p>
            </div>
            <div className="flex items-center mx-4">
              <input
                type="checkbox"
                checked={user.gender === "female"}
                onChange={() => handlerCheckBox("female")}
                defaultChecked
                className="checkbox mx-2 border border-slate-300"
              />
              <p className="text-white">Female</p>
            </div>
          </div>
          <div className="flex mx-2 mt-4 justify-start">
            <p className="text-white">Already have a account?</p>
            <Link className="text-blue-400 mx-2" to="/login">
              Sign in
            </Link>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="btn btn-block btn-sm mt-2 border border-slate-700 bg-slate-400 text-black hover:text-slate-500"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
