import React from "react";
import OtherUser from "./OtherUser";
import useGetOtherUsers from "../hooks/useGetOtherUsers";
import { useSelector } from "react-redux";

function OtherUsers({ userList }) {
  useGetOtherUsers();
  const { otherUsers } = useSelector((store) => store.user);
  if (!otherUsers) return;
  return (
    <>
      {userList.length == 0 ? (
        <div className=" overflow-auto flex-1">
          {otherUsers?.map((user) => {
            return <OtherUser key={user._id} user={user} />;
          })}
        </div>
      ) : (
        <div className=" overflow-auto flex-1">
          {userList.map((user) => {
            return <OtherUser key={user._id} user={user} />;
          })}
        </div>
      )}
    </>
  );
}

export default OtherUsers;
