import React from "react";
import Navbar from "../components/Navbar";
import MergeHomeContent from "../components/MergeHomeContent";
import { HomeContext, HomeContextProvider } from "../context/HomeContext";
import Hero from "../components/Hero";
import Filters from "../components/Filters";

export default function Home() {
  return (
    <div className="pl-6 lg:pl-25">
      <Hero />
      <Filters />

      {/* context to send data to all home components */}
      <HomeContextProvider>
        {/* merged card container and sidebar */}
        <MergeHomeContent />
      </HomeContextProvider>
    </div>
  );
}
