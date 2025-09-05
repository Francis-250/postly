

import React from "react";
import CardContainer from "./CardContainer";
import Sidebar from "./Sidebar";

// merging both sidebar and home content into one component for simplicity
const MergeHomeContent = () => {
  return (
    <div className="w-full flex bg-[#f9f5f0] min-h-screen  py-10 ">
      <CardContainer />
      <Sidebar />
    </div>
  );
};

export default MergeHomeContent;
