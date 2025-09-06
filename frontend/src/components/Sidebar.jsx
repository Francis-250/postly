import React, { useContext, useState } from "react";
import { RiArrowRightSFill } from "react-icons/ri";
import { HomeContext } from "../context/HomeContext";

const categories = [
  { name: "Design and Branding", link: "#" },
  { name: "App Development", link: "#" },
  { name: "Social Media", link: "#" },
  { name: "Marketing Strategy", link: "#" },
  { name: "Video Production", link: "#" },
];
const services = [
  { id: 1, name: "design", isClicked: false },
  { id: 2, name: "branding", isClicked: true },
  { id: 3, name: "seo", isClicked: true },
  { id: 4, name: "web development", isClicked: false },
  { id: 5, name: "marketing", isClicked: false },
  { id: 6, name: "ux design", isClicked: false },
  { id: 7, name: "app development", isClicked: false },
  { id: 8, name: "social media", isClicked: false },
  { id: 9, name: "ui design", isClicked: false },
];

export default function Sidebar() {
  const { blogData } = useContext(HomeContext);
  const [tag, setTag] = useState(services);

  const handlePopular = (id) => {
    setTag((prev) => {
      return prev.map((item) => {
        return item.id === id ? { ...item, isClicked: !item.isClicked } : item;
      });
    });
  };

  return (
    <div className="hidden md:block max-w-[17vw] ">
      <div className="flex flex-col justify-between gap-10">
        {/* home sidebar categories */}
        <div>
          <h1 className="uppercase text-[#222222] font-semibold text-md text-nowrap md:text-lg">
            all categories
          </h1>

          <div className="flex flex-col mt-5 space-y-2 ">
            {categories.map(({ name, link }, index) => {
              // condition for adding the sub menu
              if (name === "Design and Branding") {
                return (
                  <div key={index}>
                    <a className="hover:text-orange-400" href={link}>
                      {name}
                    </a>
                    <div className="text-orange-400 flex mt-3 mb-1">
                      <span>
                        <RiArrowRightSFill />
                      </span>
                      <span>Website Development</span>
                    </div>
                  </div>
                );
              }
              return (
                <a
                  className="hover:text-orange-400  duration-100 "
                  key={index}
                  href={link}
                >
                  {name}
                </a>
              );
            })}
          </div>
        </div>
        {/* latest posts div */}
        <div className="hidden lg:block mt-6">
          <h1 className="uppercase text-[#222222] font-semibold text-md text-nowrap md:text-lg">
            latest posts
          </h1>
          <div className="flex flex-col gap-2">
            {blogData.slice(0, 3).map((item, index) => {
              return (
                <div className="flex gap-4 mt-10 " key={index}>
                  <img
                    src={item.featured_image}
                    className="w-25  rounded-md object-cover"
                    alt=""
                  />
                  <div className="space-y-1">
                    <p className="text-gray-500 capitalize text-sm">
                      february 15,2025
                    </p>
                    <p className="capitalize text-sm line-clamp-2">
                      the power of story telling in branding
                    </p>
                    <p className=" text-sm text-blue-500  ">
                      by Leon Irakarama
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Popular tags*/}
        <div className="mt-6">
          <h1 className="uppercase text-[#222222] font-semibold text-lg">
            popular tags
          </h1>
          <div className="flex flex-wrap gap-4  mt-8">
            {tag?.map(({ name, id, isClicked }) => {
              return (
                <div
                  key={id}
                  onClick={() => handlePopular(id)}
                  className={`${
                    isClicked
                      ? "bg-[#386389]   text-white"
                      : "bg-[#d3d9dd] text-[#1b2224]"
                  }  px-3 py-1 rounded-full text-nowrap `}
                >
                  {name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
