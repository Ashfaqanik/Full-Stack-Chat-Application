import React from "react";

function OtherUser(props) {
  const user = props.user;
  return (
    <div>
      <div className="flex gap-4 items-center hover:bg-blue-950 rounded-sm p-2 cursor-pointer">
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
