import React from "react";
<<<<<<< HEAD
import Navbar from "../components/Navbar";
import MergeHomeContent from "../components/MergeHomeContent";
import { HomeContext, HomeContextProvider } from "../context/HomeContext";
=======
import Hero from "../components/Hero";
import Filters from "../components/Filters";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      {/* context to send data to all home components */}
      <HomeContextProvider>
        {/* merged card container and sidebar */}
        <MergeHomeContent />
      </HomeContextProvider>
      <Hero />
      <Filters />
    </div>
  );
}
