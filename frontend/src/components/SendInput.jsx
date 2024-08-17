import React from "react";
import { LuSendHorizonal } from "react-icons/lu";

function SendInput() {
  return (
    <form className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          placeholder="Send a message.."
          className="border p-3 border-zinc-500 text-sm rounded-lg block w-full bg-gray-600 text-white"
        />
        <button className="absolute inset-y-0 end-0 flex items-center pr-4 text-gray-300">
          <LuSendHorizonal size="22px" />
        </button>
      </div>
    </form>
  );
}

export default SendInput;
