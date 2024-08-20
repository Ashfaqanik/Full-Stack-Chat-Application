import React, { useEffect } from "react";
import Messages from "./Messages";
import { useSelector } from "react-redux";
import SendMessage from "./SendMessage";
import { useDispatch } from "react-redux";
import { setSelectedUser } from "../redux/userSlice";

function MessageContainer() {
  const dispatch = useDispatch();
  const { selectedUser, authUser } = useSelector((store) => store.user);
  useEffect(() => {
    return () => dispatch(setSelectedUser(null));
  }, [dispatch]);
  return (
    <>
      {selectedUser ? (
        <div className="md:min-w-[550px] flex flex-col">
          <div className="flex gap-4 items-center bg-zinc-800 px-4 py-2 mb-2">
            <div className="avatar online">
              <div className="w-12 rounded-full">
                <img src={selectedUser?.profilePhoto} alt="user-profile" />
              </div>
            </div>
            <div>
              <div>
                <p className="text-white">{selectedUser?.username}</p>
              </div>
            </div>
          </div>
          <Messages />
          <SendMessage />
        </div>
      ) : (
        <div className="md:min-w-[550px] flex flex-col items-center justify-center">
          <h1 className="text-white font-bold text-xl">
            Hi {authUser?.fullName}
          </h1>

          <h1 className="text-white font-normal">Let's Start Conversations</h1>
        </div>
      )}
    </>
  );
}

export default MessageContainer;
