import React from "react";
import SendInput from "./SendInput";
import Messages from "./Messages";

function MessageContainer() {
  return (
    <div className="md:min-w-[550px] flex flex-col">
      <div className="flex gap-4 items-center bg-zinc-800 px-4 py-2 mb-2">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src="https://lh6.googleusercontent.com/proxy/ZLGihPRfkkerdJBqfRKKFRWQcXDCfMMuuK_6_IDH6Mfhu0VI3Du2L9eOTiz0yKsIftOesQQnj0whQCZFudjFH-cXgBKnebrpknuWtjKkDcRC5Ik"
              alt="user-profile"
            />
          </div>
        </div>
        <div>
          <div>
            <p className="text-white">Ashfaque</p>
          </div>
        </div>
      </div>
      <Messages />
      <SendInput />
    </div>
  );
}

export default MessageContainer;
