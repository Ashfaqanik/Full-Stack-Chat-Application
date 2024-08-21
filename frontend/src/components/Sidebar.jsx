import React, { useState } from "react";
import OtherUsers from "../components/OtherUsers";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setAuthUser, setSelectedUser } from "../redux/userSlice";
import { TbLogout2 } from "react-icons/tb";

function Sidebar() {
  const [search, setSearch] = useState("");
  const [chatList, setChatList] = useState([]);
  const { otherUsers } = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutHandler = async () => {
    try {
      const res = await axios.get(
        "https://full-stack-chat-application-jsid.onrender.com/api/v1/user/logout"
      );
      navigate("/");
      toast.success(res.data.message);
      dispatch(setAuthUser(null));
      dispatch(setSelectedUser(null));
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
        <TbLogout2
          style={{ cursor: "pointer" }}
          onClick={logoutHandler}
          color="silver"
          text="black"
          size="40px"
        />
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
    </div>
  );
}

export default Sidebar;
