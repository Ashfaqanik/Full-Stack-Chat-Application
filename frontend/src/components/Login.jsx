import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../redux/userSlice";

function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/user/login",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      navigate("/");
      toast.success("Logged in");
      dispatch(setAuthUser(res.data));
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
    setUser({
      username: "",
      password: "",
    });
  };
  return (
    <div className="min-w-96 mx-auto">
      <div className="w-ful p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 ">
        <h1 className="text-3xl front-bold text-center text-gray-300">
          Sign in
        </h1>
        <form onSubmit={onSubmitHandler} action="">
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
          <div className="mt-6">
            <button
              type="submit"
              className="btn btn-block btn-sm mt-2 border border-slate-700 bg-slate-400 text-black "
            >
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
