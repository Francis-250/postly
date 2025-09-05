import PostCard from "./PostCard";
import { useContext } from "react";
import { HomeContext } from "../context/HomeContext";

const CardContainer = () => {
  const { blogData } = useContext(HomeContext);

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-10  px-6 lg:px-25 lg:pl-25  ">
      {/* maping postcard*/}

      {blogData?.slice(0, 4).map((blog, index) => {
        return (
          <PostCard
            key={blog.id}
            index={index} //index for rounding the first image
            featured_image={blog.featured_image}
            created_at={blog.created_at}
            subtitle={blog.subtitle}
          />
        );
      })}
    </div>
  );
};

export default CardContainer;
