import React from "react";
import Sidebar from "./Sidebar";
import MessageContainer from "./MessageContainer";

function HomePage() {
  return (
    <div
      className="flex flex-col sm:flex-row sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden
     bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0"
    >
      <Sidebar className="w-full sm:w-[30%] bg-blue-200" />
      <MessageContainer className="w-full sm:w-[70%] bg-white" />
    </div>
    // <div
    //   className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden
    //  bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0"
    // >
    //   <Sidebar />
    //   <MessageContainer />
    // </div>
  );
}

export default HomePage;
