import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const HomeContext = createContext();

export const HomeContextProvider = ({ children }) => {
  const [blogData, setBlogData] = useState([]);

  //function to fetch data from api
  const FetchData = async () => {
    try {
      const { data } = await axios.get("https://jsonfakery.com/blogs");
      setBlogData(data);
    } catch (error) {
      console.log(error.response?.data?.message || error.message);
    }
  };

  //call fetch data on page load
  useEffect(() => {
    FetchData();
  }, []);

  const value = { blogData, setBlogData }; //object contain required data
  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
};
