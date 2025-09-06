// merging both sidebar and home content into one component for simplicity

import React from "react";
import CardContainer from "./CardContainer";
import Sidebar from "./Sidebar";

const MergeHomeContent = () => {
  return (
    <div className="w-full flex  min-h-screen  py-10 ">
      <CardContainer />
      <Sidebar />
    </div>
  );
};

export default MergeHomeContent;
