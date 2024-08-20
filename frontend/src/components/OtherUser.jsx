import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setSelectedUser } from "../redux/userSlice";

function OtherUser({ user }) {
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((store) => store.user);
  const selectedUserHandler = (user) => {
    dispatch(setSelectedUser(user));
  };
  return (
    <div>
      <div
        onClick={() => selectedUserHandler(user)}
        className={`${
          selectedUser?._id === user._id ? "bg-blue-900" : "selection:"
        } flex gap-4 items-center hover:bg-blue-900 rounded-sm p-2 cursor-pointer`}
      >
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={user?.profilePhoto} alt="user-profile" />
          </div>
        </div>
        <div>
          <div>
            <p className="text-white">{user?.fullName}</p>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1"></div>
    </div>
  );
}

export default OtherUser;
