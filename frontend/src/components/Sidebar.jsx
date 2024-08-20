import React, { useState } from "react";
import OtherUsers from "../components/OtherUsers";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

function Sidebar() {
  const [search, setSearch] = useState("");
  const [chatList, setChatList] = useState([]);
  const { otherUsers } = useSelector((store) => store.user);
  const navigate = useNavigate();
  const logoutHandler = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/v1/user/logout");
      navigate("/login");
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };
  const searchText = (text) => {
    if (text === "") {
      setChatList([]);
      setSearch("");
    } else {
      setSearch(text);
    }
  };
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    const list = otherUsers?.find((user) =>
      user.fullName.toLowerCase().includes(search.toLowerCase())
    );
    setChatList([list]);
  };
  return (
    <div className="border-r border-slate-700 p-4 flex flex-col">
      <form
        onSubmit={searchSubmitHandler}
        action=""
        className="flex items-center gap-2"
      >
        <input
          value={search}
          onChange={(e) => searchText(e.target.value)}
          className="input input-bordered rounded-md"
          type="text"
          placeholder="Search..."
        />
        <button
          type="submit"
          className="btn bg-zinc-800 text-gray-300 hover:text-blue-300"
        >
          <FaSearch className="w-6 h-6 outline-none" />
        </button>
      </form>
      <div className="divider "></div>
      <OtherUsers userList={chatList} />
      <div className="mt-2">
        <button
          onClick={logoutHandler}
          className="btn btn-sm bg-slate-200 text-black"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
