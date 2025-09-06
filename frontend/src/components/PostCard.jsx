// single post card component with image, subtitle and date
const PostCard = ({ featured_image, subtitle, index }) => {
  return (
    <div className="flex flex-col gap-3 w-auto  ">
      <div className="max-h-[500px]  w-full">
        <img
          className={`${
            index === 0
              ? "rounded-2xl shadow-[0px_14px_16px_rgba(0,0,0,0.2)]  "
              : ""
          } mb-4 w-full h-full `}
          src={featured_image}
          alt=""
        />
      </div>
      <p className="text-[#222222] font-semibold text-md w-full line-clamp-2">
        {subtitle}
      </p>
      <p className="text-sm text-gray-600">
        <span className="">{new Date().toDateString()} </span>
        <span className="text-blue-600   ">by Leon</span>
      </p>
    </div>
  );
};

export default PostCard;
