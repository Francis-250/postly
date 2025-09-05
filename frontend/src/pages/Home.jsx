import React from "react";
import Navbar from "../components/Navbar";
import MergeHomeContent from "../components/MergeHomeContent";
import { HomeContext, HomeContextProvider } from "../context/HomeContext";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      {/* context to send data to all home components */}
      <HomeContextProvider>
        {/* merged card container and sidebar */}
        <MergeHomeContent />
      </HomeContextProvider>
    </div>
  );
}
